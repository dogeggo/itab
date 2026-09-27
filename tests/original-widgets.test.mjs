import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import { widgetHTML, openOriginalWidget } from "../src/widget-store.js";
import {
  parseCatalog,
  originalWidgetURL,
  newOriginalWidget,
  fetchOriginalCatalog,
} from "../src/original-widgets.js";
import {
  createState,
  validateState,
  makeBackup,
  parseBackup,
} from "../src/model.js";
const snapshot = JSON.parse(
  fs.readFileSync(
    new URL("../docs/original-widget-catalog.json", import.meta.url),
    "utf8",
  ),
).response;
const seed = JSON.parse(
  fs.readFileSync(new URL("../assets/seed.json", import.meta.url), "utf8"),
);
test("内置卡片与弹窗使用同源宿主，在线组件保留沙箱", async (t) => {
  const catalog = parseCatalog(snapshot);
  const native = newOriginalWidget(catalog.find((row) => row.component === "tomato"));
  const card = widgetHTML(native);
  assert.match(card, /src="original\/host\.html\?/);
  assert.doesNotMatch(card, /\bsandbox\s*=/);
  const frame = { remove() {} };
  let removedCards = 0;
  const dialog = { open: false, showModal() { this.open = true; }, querySelector() { return frame; }, addEventListener() {} };
  const previous = Object.getOwnPropertyDescriptor(globalThis, "document");
  Object.defineProperty(globalThis, "document", { configurable: true, value: {
    documentElement: { dataset: { theme: "dark" } },
    querySelectorAll() { return [{ remove() { removedCards++; } }]; },
    querySelector(selector) { assert.equal(selector, "#modal"); return dialog; },
  } });
  t.after(() => {
    if (previous) Object.defineProperty(globalThis, "document", previous);
    else delete globalThis.document;
  });
  await openOriginalWidget(native);
  assert.equal(removedCards, 0, "打开弹窗保留全部主页卡片");
  assert.match(dialog.innerHTML, /src="original\/host\.html\?[^\"]*mode=dialog/);
  assert.doesNotMatch(dialog.innerHTML, /\bsandbox\s*=/);
  await openOriginalWidget(newOriginalWidget(catalog.find((row) => row.component === "2048")));
  assert.match(dialog.innerHTML, /src="https:\/\/widget\.itab\.link\//);
  assert.match(dialog.innerHTML, /\bsandbox="allow-scripts allow-same-origin /);
  assert.match(dialog.innerHTML, /referrerpolicy="no-referrer"/);
  await openOriginalWidget(newOriginalWidget(catalog.find((row) => row.component === "xiayigejiaqi")));
  assert.match(dialog.innerHTML, /src="https:\/\/widget\.itab\.link\/xiayigejiaqi\/index.html/);
  assert.match(dialog.innerHTML, /\bsandbox="allow-scripts allow-same-origin /);
  assert.doesNotMatch(dialog.innerHTML, /native-widget-dialog/);
});
test("下一个假期在主页使用动态卡片，已有尺寸及在线详情类型随备份保留", () => {
  const row = parseCatalog(snapshot).find((row) => row.component === "xiayigejiaqi");
  const item = newOriginalWidget(row);
  assert.equal(item.type, "original");
  assert.equal(item.size, "4x2");
  for (const size of ["1x1", "1x2", "2x1", "2x2", "4x2"]) {
    const existing = { ...item, size };
    const state = createState([{ id: "holiday", name: "假期", items: [existing] }]);
    const restored = parseBackup(JSON.stringify(makeBackup(state))).groups[0].items[0];
    assert.equal(restored.type, "original");
    assert.equal(restored.size, size);
    assert.match(widgetHTML(restored), /class="native-widget-card"/);
    assert.match(widgetHTML(restored), /src="original\/host\.html\?/);
    assert.doesNotMatch(widgetHTML(restored), /original-widget-icon/);
  }
  const online = newOriginalWidget(parseCatalog(snapshot).find((row) => row.component === "2048"));
  assert.match(widgetHTML(online), /original-widget-icon/);
});
test("原版目录仅包含 29 个内置和 18 个在线组件", () => {
  const catalog = parseCatalog(snapshot);
  assert.equal(catalog.length, 47);
  assert.equal(catalog.filter((x) => x.available).length, 47);
  assert.equal(catalog.filter((x) => x.runtime === "native").length, 29);
  for (const type of ["weather", "todo", "mediaBox"]) {
    const row = catalog.find((x) => x.component === type);
    assert.ok(row);
    assert.equal(row.available, true);
    assert.equal(newOriginalWidget(row).type, "native");
  }
  for(const component of ["pdfConvert","aippt","videoConvert"]) assert.ok(!catalog.some(x=>x.component===component));
  assert.ok(seed.flatMap((g) => g.items).some((i) => i.type === "native"));
});
test("原版入口和配置随主页备份往返，拒绝伪造组件和 URL", () => {
  const s = createState(structuredClone(seed));
  const item = newOriginalWidget(
    parseCatalog(snapshot).find((x) => x.component === "2048"),
  );
  s.groups[0].items.push(item);
  assert.deepEqual(parseBackup(JSON.stringify(makeBackup(s))), s);
  item.config.component = "../../evil";
  assert.throws(() => validateState(s));
  for (const type of [
    "https://evil.example",
    "aippt",
    "notRegistered",
    "toString",
  ])
    assert.throws(() => originalWidgetURL(type));
  const url = new URL(originalWidgetURL("2048", "dark"));
  assert.equal(url.origin, "https://widget.itab.link");
  assert.equal(url.searchParams.get("theme"), "dark");
  assert.equal(url.searchParams.has("token"), false);
});
test("远程目录校验、去重和图片来源约束", () => {
  assert.throws(() => parseCatalog({ code: 500, data: [] }));
  const result = parseCatalog({
    code: 200,
    data: [
      null,
      { component: "../oops", name: "错误" },
      {
        component: "2048",
        name: "测试",
        insetType: "iframe",
        src: "https://evil.example/icon.svg",
      },
      { component: "2048", name: "重复" },
      { component: "unknown", name: "未知", insetType: "iframe" },
    ],
  });
  assert.equal(result.length, 1);
  assert.equal(result[0].image, "");
});
test("目录请求不附带原账号凭据，网络和接口错误可反馈", async () => {
  const previous = globalThis.fetch;
  try {
    globalThis.fetch = async (url, init) => {
      assert.equal(new URL(url).origin, "https://base.itab.link");
      assert.equal(init.credentials, "omit");
      assert.equal(init.headers, undefined);
      return { ok: true, json: async () => snapshot };
    };
    assert.equal((await fetchOriginalCatalog()).length, 47);
    globalThis.fetch = async () => ({ ok: false, status: 503 });
    await assert.rejects(fetchOriginalCatalog(), /503/);
    globalThis.fetch = async () => {
      throw new Error("offline");
    };
    await assert.rejects(fetchOriginalCatalog(), /offline/);
  } finally {
    globalThis.fetch = previous;
  }
});

test("被屏蔽组件不能通过手工添加或当前备份重新启用",()=>{for(const component of ["pdfConvert","aippt","videoConvert","weather-local"]){const row={available:true,runtime:"native",component,name:"测试"};assert.throws(()=>newOriginalWidget(row));const state=createState(structuredClone(seed));state.groups[0].items.push({id:"forged",kind:"widget",type:"native",name:"伪造",size:"2x2",config:{component}});assert.throws(()=>validateState(state));} const old=createState(structuredClone(seed));old.schemaVersion=1;assert.throws(()=>validateState(old));});
