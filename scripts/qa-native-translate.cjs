// 通过 Playwright 的 run-code 执行；独立浏览器上下文不读写用户主页数据。
async (page) => {
  const context = await page.context().browser().newContext();
  const checks = [];
  const assert = (ok, message) => {
    if (!ok) throw new Error(message);
    checks.push(message);
  };
  try {
    for (const root of ["", "/dist"]) {
      const testPage = await context.newPage();
      testPage.setDefaultTimeout(15000);
      const errors = [];
      testPage.on("pageerror", error => errors.push(error.message));
      testPage.on("console", message => {
        if (message.type() === "error") errors.push(message.text());
      });
      const url = `http://127.0.0.1:4173${root}/qa-translate`;
      await testPage.route(url, route => route.fulfill({
        contentType: "text/html",
        body: '<!doctype html><html lang="zh-CN"><body></body></html>',
      }));
      await testPage.goto(url);
      await testPage.evaluate(async root => {
        const { createState } = await import(`${root}/src/model.js`);
        const { initNativeBridge } = await import(`${root}/src/native-bridge.js`);
        const item = {
          id: "qa-translate", kind: "widget", type: "native", name: "翻译", size: "2x2",
          config: { component: "translate", original: { config: {} } },
        };
        const state = createState([{ id: "qa", name: "测试", items: [item] }]);
        state.nativeData.stores.cache = {
          "app-translate-configs": {
            value: { data: {
              methods: [{ value: "test", label: "测试", default: true }],
              langs: [{ value: "en", label: "英语" }, { value: "zh", label: "中文", defaultTo: true }],
            } }, expiresAt: 0,
          },
          "app-translate-historylist": {
            value: [[5000, "just now"], [300000, "five minutes"], [172800000, "two days"]]
              .map(([age, text]) => ({ text, transText: "测试译文", from: "en", to: "zh",
                fromLabel: "英语", toLabel: "中文", method: "test", ts: Date.now() - age })),
            expiresAt: 0,
          },
        };
        document.documentElement.dataset.theme = "light";
        initNativeBridge({ getState: () => state, save: async () => {} });
        window.openTranslateFixture = () => {
          document.querySelector("iframe")?.remove();
          const frame = document.createElement("iframe");
          frame.dataset.nativeId = item.id;
          frame.src = `${root}/original/host.html?id=${item.id}&mode=dialog`;
          frame.style = "width:1200px;height:800px";
          document.body.append(frame);
        };
        window.openTranslateFixture();
      }, root);
      const frame = testPage.frameLocator("iframe");
      const label = root || "源码";
      await frame.locator("#history-list button").nth(2).waitFor({ state: "attached" });
      const history = await frame.locator("#history-list").textContent();
      for (const expected of ["几秒", "5 分钟", "2 天"])
        assert(history.includes(expected), `${label}：首次打开显示 ${expected}`);
      await frame.getByRole("button", { name: "打开历史记录", exact: true }).click();
      await frame.getByPlaceholder("搜索翻译").fill("five minutes");
      await frame.locator("#history-list button").nth(1).waitFor({ state: "detached" });
      assert((await frame.locator("#history-list").textContent()).includes("5 分钟"), `${label}：筛选后相对时间正常`);
      await testPage.evaluate(() => window.openTranslateFixture());
      await frame.locator("#history-list button").nth(2).waitFor({ state: "attached" });
      assert(await frame.locator("#native-error").isHidden(), `${label}：新 iframe 重新打开无需其他组件初始化`);
      await frame.getByRole("button", { name: "打开历史记录", exact: true }).click();
      await frame.getByRole("button", { name: "清空", exact: true }).click();
      await frame.locator("#history-empty").waitFor();
      await testPage.evaluate(() => window.openTranslateFixture());
      await frame.locator("#history-empty").waitFor({ state: "attached" });
      assert(await frame.locator("#native-error").isHidden(), `${label}：清空后重新打开正常`);
      assert(errors.length === 0, `${label}：无浏览器错误 ${errors.join("; ")}`);
      await testPage.close();
    }
    return { checks };
  } finally {
    await context.close();
  }
}
