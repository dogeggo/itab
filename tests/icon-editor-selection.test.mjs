import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import { parse } from "acorn";
import { siteFromEditor } from "../src/site-icon.js";

// 直接执行生成组件中的选择逻辑，覆盖实际运行产物和重新提取后的行为。
const source = fs.readFileSync(new URL("../original/icon-editor/components.js", import.meta.url), "utf8");
const names = new Set(["re22", "se22", "pe22"]);
const functions = [];
function visit(node) {
  if (!node || typeof node !== "object") return;
  if (node.type === "FunctionDeclaration" && names.has(node.id.name)) {
    functions.push(source.slice(node.start, node.end));
    return;
  }
  for (const value of Object.values(node)) {
    if (Array.isArray(value)) value.forEach(visit);
    else if (value && typeof value === "object") visit(value);
  }
}
visit(parse(source, { ecmaVersion: "latest", sourceType: "module" }));
assert.equal(functions.length, names.size, "找到图标选择、SVG 判断和官方图标判断函数");
const script = new vm.Script(functions.join("\n"));

function editor(fetch) {
  const context = vm.createContext({
    URL, fetch,
    k22: { type: "text", src: "", name: "测试图标", url: "https://app.dogegg.online/" },
    A22: { activeIndex: 0, icons: [""] },
    H22: { img: "", base64: "", bolb: "" }, D22: [],
  });
  script.runInContext(context);
  return { select: context.pe22, item: context.k22, state: context.A22, crop: context.H22 };
}

test("远程 SVG 无需 HEAD 请求即可选中并保存，包括大写扩展名和查询参数", async () => {
  for (const url of [
    "https://app.dogegg.online/favicon.svg",
    "https://example.com/FAVICON.SVG?version=2#icon",
    "http://example.com/favicon.svg",
  ]) {
    let requests = 0;
    const e = editor(async () => { requests++; throw new TypeError("Failed to fetch"); });
    e.crop.img = "previous-crop.png";
    e.crop.base64 = "previous-image";
    await e.select(url, 1);
    assert.equal(requests, 0, "识别 SVG 后不再发送会触发 CORS 的请求");
    assert.equal(e.state.activeIndex, 1);
    assert.equal(e.item.type, "icon");
    assert.equal(e.item.src, url);
    assert.equal(e.crop.img, "");
    assert.equal(e.crop.base64, "");
    assert.equal(siteFromEditor(e.item).image, url);
  }
});

test("无 SVG 扩展名的地址仍可通过响应类型识别", async () => {
  const url = "https://example.com/icon?id=1";
  let requests = 0;
  const e = editor(async (input, options) => {
    requests++;
    assert.equal(input, url);
    assert.equal(options.method, "HEAD");
    return new Response(null, { headers: { "content-type": "image/svg+xml; charset=utf-8" } });
  });
  await e.select(url, 1);
  assert.equal(requests, 1);
  assert.equal(e.item.src, url);
  assert.equal(e.state.activeIndex, 1);
  assert.equal(e.crop.img, "");
});

test("远程位图仍进入裁剪，确认后才选中裁剪结果", async () => {
  const url = "https://example.com/icon.png";
  const e = editor(async () => new Response(null, { headers: { "content-type": "image/png" } }));
  await e.select(url, 1);
  assert.equal(e.crop.img, url);
  assert.equal(e.item.type, "text");
  assert.equal(e.state.activeIndex, 0);
  const cropped = "data:image/png;base64,aWNvbg==";
  e.crop.cb(cropped);
  assert.equal(e.item.src, cropped);
  assert.equal(e.state.activeIndex, 1);
  assert.equal(e.state.icons[0], cropped);
});

test("其他远程图片的类型请求失败时仍可直接选择，文字切换保持可用", async () => {
  const url = "https://example.com/icon.png";
  const e = editor(async () => { throw new TypeError("Failed to fetch"); });
  await e.select(url, 1);
  assert.equal(e.item.src, url);
  assert.equal(e.state.activeIndex, 1);
  assert.equal(e.crop.img, "");
  await e.select("", 0);
  assert.equal(e.item.type, "text");
  assert.equal(e.item.src, "");
  assert.equal(e.state.activeIndex, 0);
});
