// 通过 playwright-cli run-code --filename 执行，仅使用独立浏览器上下文。
async page => {
  const context = await page.context().browser().newContext();
  const checks = [], results = [], errors = [];
  const assert = (ok, message) => { if (!ok) throw Error(message); checks.push(message); };
  const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"><rect width="32" height="32" fill="red"/></svg>';
  const remote = "https://icons.example.test/shared.svg";
  const icoURL = "https://icons.example.test/download.ico";
  const restricted = "https://restricted-icons.example.test/favicon.svg";
  const png = await (await page.request.get("http://127.0.0.1:4173/assets/icon/icon_32.png")).body();
  const icoHeader = Buffer.alloc(22);
  icoHeader.writeUInt16LE(1, 2); icoHeader.writeUInt16LE(1, 4);
  icoHeader[6] = 32; icoHeader[7] = 32;
  icoHeader.writeUInt16LE(1, 10); icoHeader.writeUInt16LE(32, 12);
  icoHeader.writeUInt32LE(png.length, 14); icoHeader.writeUInt32LE(22, 18);
  const ico = Buffer.concat([icoHeader, png]);
  try {
    for (const root of ["", "/dist"]) {
      const testPage = await context.newPage();
      testPage.setDefaultTimeout(15000);
      testPage.on("pageerror", error => errors.push(error.message));
      const requests = [], navigations = [];
      let release, allowed = false;
      const ready = new Promise(resolve => { release = resolve; });
      await testPage.route("https://**/*", async route => {
        const url = route.request().url();
        if (url.startsWith("https://base.itab.link/website/info?")) return route.fulfill({
          contentType: "application/json", headers: { "access-control-allow-origin": "*" },
          body: JSON.stringify({ code: 200, data: { name: "测试网站", icon: [remote] } }),
        });
        if (url === remote || url === icoURL || url === restricted) {
          requests.push(url);
          await ready;
          // CLI 浏览器可能关闭跨域检查，显式模拟源站禁止读取，图片展示仍可用。
          if (url === restricted && !allowed && route.request().resourceType() === "fetch") return route.abort("blockedbyclient");
          return route.fulfill({
            contentType: url === icoURL ? "image/x-icon" : "image/svg+xml",
            headers: { "cache-control": "no-store", ...(url !== restricted || allowed ? { "access-control-allow-origin": "*" } : {}) },
            body: url === icoURL ? ico : svg,
          });
        }
        return route.abort();
      });
      const fixtureURL = `http://127.0.0.1:4173${root}/qa-local-icons`;
      await testPage.route(fixtureURL, route => route.fulfill({ contentType: "text/html", body: "<!doctype html><html><body></body></html>" }));
      await testPage.goto(fixtureURL);
      await testPage.evaluate(async ({ root, remote, icoURL, restricted }) => {
        const { createState } = await import(`${root}/src/model.js`);
        const { write } = await import(`${root}/src/storage.js`);
        const site = (id, name, image) => ({ id, kind: "site", name, url: "https://example.com/", image, color: "#ffffff", size: "1x1" });
        const state = createState([{ id: "qa", name: "测试分组", items: [
          site("one", "网站 A", remote), site("ico", "ICO 图标", icoURL), site("restricted", "受限图标", restricted),
          { id: "folder", kind: "folder", name: "文件夹", size: "1x1", children: [site("child", "文件夹网站", remote)] },
          { id: "widget", kind: "widget", type: "original", name: "恐龙", size: "1x1", image: remote, config: { component: "dino" } },
          { id: "calendar", kind: "widget", type: "native", name: "日历", size: "2x2", config: { component: "calendar", original: { config: {} } } },
        ] }]);
        state.settings.layout.quote = false;
        state.settings.wallpaper = { ...state.settings.wallpaper, type: "color", src: "#334455" };
        await Promise.all([remote, icoURL, restricted].map(source => write("icon:" + source, null)));
        await write("state", state);
      }, { root, remote, icoURL, restricted });
      await testPage.goto(`http://127.0.0.1:4173${root}/index.html`);
      await testPage.waitForFunction(() => document.querySelector('.native-widget-card[data-native-status="ready"]'));
      await testPage.evaluate(() => { const frame = document.querySelector(".native-widget-card"); window.retainedIconCard = { frame, document: frame.contentDocument, window: frame.contentWindow }; });
      testPage.on("framenavigated", frame => { if (frame.url().includes("mode=card")) navigations.push(frame.url()); });
      release();
      const readState = () => testPage.evaluate(async root => (await import(`${root}/src/storage.js`)).read("state"), root);
      let state;
      for (let attempt = 0; attempt < 100; attempt++) {
        state = await readState();
        if (state.groups[0].items.find(item => item.id === "one").image.startsWith("data:image/") &&
          state.groups[0].items.find(item => item.id === "ico").image.startsWith("data:image/png;")) break;
        await testPage.waitForTimeout(100);
      }
      assert(state.groups[0].items.find(item => item.id === "ico").image.startsWith("data:image/png;"), "ICO 图标的本地 PNG 已写入主页数据库");
      assert(requests.filter(url => url === remote).length === 1, `${root || "源码"}：主页、文件夹和组件相同地址只下载一次`);
      assert(requests.filter(url => url === icoURL).length === 1, "ICO 下载一次并转换为可备份的 PNG");
      assert(state.groups[0].items.find(item => item.id === "one").imageFit === "cover", "保存图片后保留原有 cover 显示方式");
      assert(await testPage.evaluate(() => { const old = window.retainedIconCard; return old.frame.isConnected && old.frame.contentDocument === old.document && old.frame.contentWindow === old.window; }) && navigations.length === 0, "后台保存图标不重建原版组件");
      assert(state.groups[0].items.find(item => item.id === "restricted").image === restricted, "禁止跨域的旧图标保留原地址");

      await testPage.exposeFunction("grantIconOrigin", origins => { allowed = origins.length === 1 && origins[0] === "https://restricted-icons.example.test/*"; return allowed; });
      await testPage.evaluate(() => {
        window.requestedIconOrigins = [];
        chrome.permissions = { request({ origins }) {
          window.requestedIconOrigins.push({ origins, userGesture: navigator.userActivation.isActive });
          return window.grantIconOrigin(origins);
        } };
      });
      await testPage.getByRole("button", { name: "受限图标", exact: true }).click({ button: "right" });
      await testPage.getByRole("button", { name: "编辑图标", exact: true }).click();
      const frame = testPage.frameLocator(".icon-editor-frame");
      await frame.getByRole("textbox", { name: "名称", exact: true }).fill("本地图标");
      await frame.getByRole("button", { name: "保 存", exact: true }).click();
      await testPage.locator("#modal[open]").waitFor({ state: "hidden" });
      const permission = await testPage.evaluate(() => window.requestedIconOrigins);
      assert(permission.length === 1 && permission[0].userGesture && allowed, "实际保存按钮在用户操作内仅申请图标源域名（权限 API 测试替身）");
      state = await readState();
      assert(state.groups[0].items.find(item => item.id === "restricted").image.startsWith("data:image/svg+xml;"), "授权后远程 SVG 保存为本地矢量内容");

      await testPage.getByRole("button", { name: "网站 A", exact: true }).click({ button: "right" });
      await testPage.getByRole("button", { name: "编辑图标", exact: true }).click();
      await frame.getByRole("button", { name: "获取图标", exact: true }).click();
      await frame.getByText("正在自动获取网站信息", { exact: false }).waitFor({ state: "hidden" });
      await frame.locator(".icon-preview").filter({ hasText: /^\s*图标1\s*$/ }).click();
      assert(await frame.getByText("图标裁剪", { exact: true }).count() === 0, "读取本地 SVG 候选图标直接选择，保留矢量且无需裁剪");
      await frame.getByRole("button", { name: "保 存", exact: true }).click();
      await testPage.locator("#modal[open]").waitFor({ state: "hidden" });

      const baseline = requests.length;
      await testPage.reload();
      await testPage.waitForFunction(() => [...document.querySelectorAll(".site-face img,.original-widget-icon img")].every(image => image.complete && image.naturalWidth > 0));
      assert(requests.length === baseline, "刷新后所有图标直接读取本地，远程图标请求为 0");
      const backup = await testPage.evaluate(async root => {
        const { read } = await import(`${root}/src/storage.js`);
        const { makeBackup } = await import(`${root}/src/model.js`);
        return JSON.stringify(makeBackup(await read("state")));
      }, root);
      await testPage.evaluate(async ({ root, backup, remote, icoURL, restricted }) => {
        const { parseBackup } = await import(`${root}/src/model.js`);
        const { write } = await import(`${root}/src/storage.js`);
        await write("state", parseBackup(backup));
        await Promise.all([remote, icoURL, restricted]
          .map(url => write("icon:" + url, null)));
      }, { root, backup, remote, icoURL, restricted });
      await testPage.route("https://**/*", route => route.abort("internetdisconnected"));
      await testPage.reload();
      await testPage.waitForFunction(() => [...document.querySelectorAll(".site-face img,.original-widget-icon img")].every(image => image.complete && image.naturalWidth > 0));
      assert(requests.length === baseline, "清除图标缓存并禁用外网后，恢复的 JSON 备份仍完整显示图标");
      await testPage.getByRole("button", { name: "文件夹", exact: true }).click();
      const folderImage = testPage.locator(".folder-grid img");
      await folderImage.waitFor();
      assert(await folderImage.evaluate(image => image.src.startsWith("data:image/") && image.naturalWidth > 0), "离线打开文件夹仍使用备份中的图片");
      results.push({ root: root || "源码", initialSharedRequests: 1, reloadRemoteRequests: requests.length - baseline, checks: checks.length });
      await testPage.close();
    }
    assert(errors.length === 0, "源码和 dist 工作流均无未捕获 JavaScript 异常");
    return { checks, results, errors };
  } catch (error) { return { checks, results, errors, failure: error.message }; }
  finally { await context.close(); }
}
