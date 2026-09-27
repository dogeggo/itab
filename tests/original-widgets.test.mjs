import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
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
  widgetCatalog,
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
test("原版目录保留 PDF 和 AiPPT，仅将核实的 iframe 标记为可直接使用", () => {
  const catalog = parseCatalog(snapshot);
  assert.equal(catalog.length, 50);
  assert.equal(catalog.filter((x) => x.available).length, 18);
  for (const type of ["pdfConvert", "aippt", "weather"]) {
    const row = catalog.find((x) => x.component === type);
    assert.ok(row);
    assert.equal(row.available, false);
    assert.throws(() => newOriginalWidget(row));
  }
  assert.equal(
    widgetCatalog.some((x) => /pdf|aippt/i.test(x.type)),
    false,
  );
  assert.equal(/pdf|aippt|pptgo/i.test(JSON.stringify(seed)), false);
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
  assert.equal(result.length, 2);
  assert.equal(result[0].image, "");
  assert.equal(result[1].available, false);
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
    assert.equal((await fetchOriginalCatalog()).length, 50);
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
