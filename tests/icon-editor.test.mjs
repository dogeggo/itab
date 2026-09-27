import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import { createState, makeBackup, parseBackup, safeURL } from "../src/model.js";
import { iconText, siteFromEditor, siteFace } from "../src/site-icon.js";

test("原版图标编辑在图片和文字间切换，保留身份/尺寸并经过备份往返", () => {
  const original = { id: "site", kind: "site", size: "2x1", name: "旧图标", url: "https://example.com", image: "assets/sites/test.png" };
  const text = siteFromEditor({ name: "文字网站", url: "example.com/path?a=1", type: "text", iconText: "我的文字图标太长了", backgroundColor: "transparent" }, original);
  assert.equal(text.id, "site");
  assert.equal(text.size, "2x1");
  assert.equal(text.image, "");
  assert.equal(text.color, "transparent");
  assert.equal(text.iconText, "我的文字图标");
  assert.equal(text.url, "https://example.com/path?a=1");
  const svg = "data:image/svg+xml;base64," + Buffer.from('<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64"><rect width="64" height="64" fill="red"/></svg>').toString("base64");
  const image = siteFromEditor({ name: "SVG", url: "https://example.com", type: "icon", src: svg, backgroundColor: "#023373" }, text);
  const state = createState([{ id: "home", name: "主页", items: [text, { ...image, id: "svg" }] }]);
  assert.deepEqual(parseBackup(JSON.stringify(makeBackup(state))).groups, state.groups);
  assert.match(siteFace(image), /<img /);
  assert.match(siteFace(image), /--icon-fit:contain/);
  assert.match(siteFace(text), /text-site-face/);
});

test("原版文字长度、图标资源和地址的边界检查", () => {
  assert.equal(iconText("ABCDEFGHIJKLM"), "ABCDEFGHIJKL");
  assert.equal(iconText("A中文🙂BCDEFGH"), "A中文🙂BCDEF");
  const data = { name: "测试", url: "https://example.com", type: "icon", src: "https://example.com/icon.png" };
  assert.throws(() => siteFromEditor({ ...data, url: "javascript:alert(1)" }));
  assert.throws(() => siteFromEditor({ ...data, src: "blob:expired" }));
  assert.throws(() => siteFromEditor({ ...data, type: "text", iconText: " " }));
  assert.equal(safeURL("data:text/html;base64,PHNjcmlwdD4=", { image: true }), "");
  assert.equal(siteFromEditor({ ...data, backgroundColor: "red;background:url(https://example.com)" }).color, "#1681ff");
});

test("原版编辑器运行资源不包含账号、云保存和旧版兼容依赖", () => {
  const content = fs.readFileSync(new URL("../original/icon-editor/components.js", import.meta.url), "utf8");
  assert.doesNotMatch(content, /SAVE_CONFIG|ossUpload|itab-visitorid|localStorage|sessionStorage|localforage|Dexie|chrome\.storage|__vite__mapDeps/);
  const provenance = JSON.parse(fs.readFileSync(new URL("../original/icon-editor/provenance.json", import.meta.url), "utf8"));
  assert.equal(provenance.version, "2.3.13");
  assert.ok(provenance.inputs.includes("vue-cropper.es-D16yehvn.js"));
  assert.ok(provenance.inputs.includes("CustomAdd-CYYDf8MW.js"));
  assert.ok(provenance.inputs.every(file => !/stocksCache|indexdb|baseRequest|save_config|ossClient/.test(file)));
});
