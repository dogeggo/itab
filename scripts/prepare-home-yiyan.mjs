// 从随附 2.3.13 原包提取主页 HomeYiyan，常规构建不依赖上级原包。
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createHash } from "node:crypto";
import { parse } from "acorn";
import { build } from "esbuild";

const root = fileURLToPath(new URL("../", import.meta.url));
const upstream = path.resolve(root, "..");
const out = path.join(root, "original/home-yiyan");
const input = "chunks/main-pR7HcDL9.js";
const styleInput = "assets/main-DAZpa2D_.css";
const version = JSON.parse(await fs.readFile(path.join(upstream, "manifest.json"), "utf8")).version;
if (version !== "2.3.13") throw new Error("主页一言的原包版本不匹配");
const source = await fs.readFile(path.join(upstream, input), "utf8");
const tree = parse(source, { ecmaVersion: "latest", sourceType: "module" });
const names = ["pt", "_t", "mt", "ht"];
const declarations = tree.body.filter(node => node.type === "VariableDeclaration")
  .flatMap(node => node.declarations).filter(node => names.includes(node.id.name));
if (declarations.length !== names.length || !source.slice(declarations.at(-1).start, declarations.at(-1).end).includes('__name:"HomeYiyan"'))
  throw new Error("原版 HomeYiyan 组件结构不匹配");
let component = declarations.map(node => "const " + source.slice(node.start, node.end) + ";").join("\n");
function replace(before, after) {
  if (!component.includes(before)) throw new Error("原版一言适配位置不存在：" + before);
  component = component.replace(before, after);
}
// 保留原版正文、右键切换、出处显示和十分钟缓存，按需求移除悬停工具栏。
const extracted = parse(component, { ecmaVersion: "latest", sourceType: "module" });
let toolbar;
let toolbarActions;
function findToolbar(node) {
  if (!node || typeof node !== "object") return;
  if (node.type === "CallExpression" && node.callee.name === "N" && node.arguments[1]?.name === "vt") toolbar = node;
  if (node.type === "FunctionDeclaration" && node.id.name === "s") toolbarActions = node;
  for (const value of Object.values(node)) {
    if (Array.isArray(value)) value.forEach(findToolbar);
    else if (value && typeof value === "object") findToolbar(value);
  }
}
findToolbar(extracted);
if (!toolbar || !toolbarActions) throw new Error("原版一言工具栏结构不匹配");
for (const [node, replacement] of [[toolbar, 'U("",true)'], [toolbarActions, ""]].sort(([a], [b]) => b.start - a.start))
  component = component.slice(0, node.start) + replacement + component.slice(node.end);
replace('let a=await n(()=>import("./indexdb-D2Sglj6h.js"),__vite__mapDeps([38,15]));a=a.default;', 'let a=cache;');
replace('(await n(()=>import("./baseApi-DfFalwCT.js"),__vite__mapDeps([61,19,20,16,8,1,9,17,15,14,4,21,22]))).apiGetYiyan()', 'await apiGetYiyan()');
replace('async function a(e){', 'async function a(e){try{');
replace('a.set("yiyan",o,6e5)})}a();', 'a.set("yiyan",o,6e5)})}catch(error){reportError(error)}}a();');
// 剪贴板成功提示由宿主在实际写入成功后显示。
replace(',n(()=>import("./vendor-element-plus-CRt18gND.js").then(e=>e.al),__vite__mapDeps([2,3,1,4,5,6])).then(e=>{e.ElMessage.success("已复制到剪切板")})', '');

const entry = `import {s as B,E as V,G as L,I as N,u as j,a8 as W,V as J,S as U} from "./vendor-vue-BG-CQRtu.js";
import {_ as De} from "./tailwind-S0oaxdkI.js";
import {values as l,cache,apiGetYiyan,copyText as Be,reportError} from "./bridge.js";
${component}
export {ht as HomeYiyan};
export {at as createApp} from "./vendor-vue-BG-CQRtu.js";`;
await fs.mkdir(out, { recursive: true });
const result = await build({
  stdin: { contents: entry, resolveDir: path.join(upstream, "chunks"), sourcefile: "home-yiyan-entry.js" },
  bundle: true, format: "esm", target: "chrome120", charset: "utf8",
  treeShaking: true, minifySyntax: true, metafile: true,
  external: ["./bridge.js"], outfile: path.join(out, "component.js"),
});
const css = await fs.readFile(path.join(upstream, styleInput), "utf8");
const originalRules = css.match(/[^{}]*\[data-v-955b18c7\][^{}]*\{[^{}]*\}/g);
if (originalRules?.length !== 9) throw new Error("原版 HomeYiyan 样式结构不匹配");
const rules = originalRules.filter(rule => !rule.includes("app-yiyan-btn"));
const utilities = (await Promise.all(["assets/utils-CXX6ZX7A.css", "assets/tailwind-rIhkj3gK.css"]
  .map(file => fs.readFile(path.join(upstream, file), "utf8")))).join("\n");
for (const selector of [".d-flex-x", ".f12", ".ac"]) {
  const start = utilities.indexOf(selector + "{");
  if (start < 0) throw new Error("原版一言工具样式缺失：" + selector);
  rules.push("#quote " + utilities.slice(start, utilities.indexOf("}", start) + 1));
}
await fs.writeFile(path.join(out, "component.css"), rules.join("\n") + "\n");
await fs.writeFile(path.join(out, "provenance.json"), JSON.stringify({
  version, component: "HomeYiyan", input, styleInput,
  sourceSha256: createHash("sha256").update(source).digest("hex"),
  inputs: Object.keys(result.metafile.inputs).map(file => path.basename(file)),
  adaptations: ["当前宿主缓存和公开一言接口", "请求失败保留上次一言", "宿主剪贴板及提示", "移除悬停工具栏，保留左键复制和右键切换"],
}, null, 2) + "\n");
console.log("已提取原版 HomeYiyan 组件、样式和来源记录。");
