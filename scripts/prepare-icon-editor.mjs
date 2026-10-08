// 固定提取随附 原版 2.3.13 的 CustomAdd、IconEdit 和裁剪控件。
// 只替换网站信息/本地保存边界，不包含原版账号、上传或历史版本分支。
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parse } from "acorn";
import { build, transform } from "esbuild";
const root = fileURLToPath(new URL("../", import.meta.url));
const source = path.resolve(root, "..");
const out = path.join(root, "original/icon-editor");
if (JSON.parse(await fs.readFile(path.join(source, "manifest.json"), "utf8")).version !== "2.3.13")
  throw new Error("图标编辑器的原包版本不匹配");
await fs.mkdir(out, { recursive: true });
function edit(source, visit) {
  const edits = [];
  function walk(node) {
    if (!node || typeof node !== "object") return;
    if (node.type) {
      const replacement = visit(node);
      if (replacement !== undefined) { edits.push([node.start, node.end, replacement]); return; }
    }
    for (const value of Object.values(node))
      if (Array.isArray(value)) value.forEach(walk);
      else if (value && typeof value === "object") walk(value);
  }
  walk(parse(source, { ecmaVersion: "latest", sourceType: "module" }));
  for (const [start, end, value] of edits.sort((a, b) => b[0] - a[0]))
    source = source.slice(0, start) + value + source.slice(end);
  return source;
}
const functions = {
  ne2: `function ne2(value) { return value; }`,
  // 请求序号确保较早返回的网站信息不会覆盖当前网址；失败仍可编辑和上传。
  ce2: `async function ce2() {
    const url = k2.url; const request = ++le2;
    A2.loading = true;
    try {
      const data = await window.iconEditorSession.lookup(url);
      if (request !== le2 || k2.url !== url) return;
      D2.length = 0; D2.push(...data.official);
      A2.icons = data.icons;
      if (data.official.length) {
        A2.activeIndex = 1; k2.type = 'icon'; k2.src = data.icons[0];
        k2.backgroundColor = data.backgroundColor;
      }
      if (!k2.name) k2.name = data.name.slice(0, 20);
      if (!k2.iconText || k2.iconText === 'A') k2.iconText = m(data.name.slice(0, 3));
      if (!data.icons.length) s.warning('未找到网站图标，可使用文字图标或上传图片');
    } catch (error) {
      if (request === le2 && k2.url === url) s.error(error.message);
    } finally { if (request === le2) A2.loading = false; }
  }`,
  ge2: `async function ge2(keepOpen) {
    if (A2.upLoading) return;
    A2.upLoading = true;
    try {
      const data = {id:k2.id, url:k2.url, name:k2.name, type:k2.type,
        iconText:k2.iconText, backgroundColor:k2.backgroundColor,
        src:A2.activeIndex === 'up' ? H2.base64 : k2.src};
      await window.iconEditorSession.save(data, keepOpen);
      if (keepOpen) { ++le2; ie2(); A2.loading = false; }
    } catch (error) { s.error(error.message); }
    finally { A2.upLoading = false; }
  }`,
  Re: `function Re(file) {
    const raw = file.raw;
    if (!w2.split(',').map(value => value.trim()).includes(raw.type)) return s.error('不支持的图片类型');
    if (raw.size > 8 * 1024 * 1024) return s.error('图片不能超过 8 MB');
    H2.cb = null; A2.activeIndex = 'up'; k2.type = 'icon';
    const reader = new FileReader();
    reader.onerror = () => s.error('图片读取失败');
    reader.onload = () => {
      if (raw.type === 'image/svg+xml') { H2.img = ''; H2.base64 = reader.result; H2.bolb = raw; }
      else H2.img = reader.result;
    };
    reader.readAsDataURL(raw);
  }`,
  de2: "", fe2: "", Ee2: "", Fe2: "",
};
const result = await build({
  stdin: {
    contents: `export {at as createApp,r as ref,W as h} from './vendor-vue-BG-CQRtu.js';
      export {h as Dialog} from './vendor-element-plus-CRt18gND.js';
      export {default as IconEdit} from './IconEdit-BNgKhupT.js';
      export {C as CustomAdd} from './CustomAdd-CYYDf8MW.js';`,
    resolveDir: path.join(source, "chunks"), sourcefile: "icon-editor-entry.js",
  },
  bundle: true, format: "esm", target: "chrome120", charset: "utf8",
  treeShaking: true, minifySyntax: true, metafile: true,
  outfile: path.join(out, "components.js"),
  plugins: [{ name: "current-icon-editor", setup(builder) {
    builder.onLoad({ filter: /staleAssetReload.lazy-DksV6goU\.js$/ }, () => ({
      contents: `import {c as ue} from './tailwind-S0oaxdkI.js';
        export const h=ue('outline','refresh','Refresh',[
          ['path',{d:'M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4',key:'svg-0'}],
          ['path',{d:'M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4',key:'svg-1'}]]);
        export const o=value=>value;`, loader: "js",
    }));
    builder.onLoad({ filter: /\.js$/ }, async ({ path: file }) => {
      let code = (await transform(await fs.readFile(file, "utf8"), { charset: "utf8", loader: "js" })).code;
      const custom = path.basename(file) === "CustomAdd-CYYDf8MW.js";
      let svgChecks = 0;
      code = edit(code, node => {
        if (node.type === "ImportDeclaration" && (!node.specifiers.length ||
          custom && /ossClient|website-|stocksCache|addToDesk|vendor-dayjs|preload-helper/.test(node.source.value))) return "";
        if (node.type === "VariableDeclaration" && node.declarations.some(d => d.id.name === "__vite__mapDeps")) return "";
        if (node.type === "CallExpression" && node.callee.property?.name === "then" &&
          code.slice(node.start, node.end).includes('import("./save_config')) return "void 0";
        if (custom && node.type === "FunctionDeclaration" && Object.hasOwn(functions, node.id.name)) return functions[node.id.name];
        if (custom && node.type === "CallExpression" && ["Y", "G"].includes(node.callee.name)) return "undefined";
        // 已知 SVG 直接选择，避免无跨域权限时多余的 HEAD 请求及 CORS 报错。
        if (custom && node.type === "LogicalExpression" && node.operator === "||" &&
          node.right.type === "CallExpression" && node.right.callee.name === "se2" &&
          code.slice(node.left.start, node.left.end).includes('method: "HEAD"')) {
          svgChecks++;
          return `${code.slice(node.right.start, node.right.end)} || ${code.slice(node.left.start, node.left.end)}`;
        }
      });
      // 编辑上传切换只在确定裁剪时提交；裁剪临时地址由会话管理并释放。
      if (custom) {
        if (svgChecks !== 1) throw new Error("未找到唯一的 SVG 类型检查，图标编辑器提取已停止");
        let localSvgChecks = 0;
        code = edit(code, node => {
          if (node.type !== "IfStatement" || node.test.type !== "CallExpression" ||
            node.test.callee.property?.name !== "startsWith" || node.test.arguments[0]?.value !== "http" ||
            node.consequent.type !== "TryStatement" || !code.slice(node.start, node.end).includes('method: "HEAD"')) return;
          const selection = node.consequent.block.body.find(child => child.type === "IfStatement" && child.consequent.type === "ReturnStatement");
          if (!selection) throw new Error("SVG 选择分支结构不匹配");
          localSvgChecks++;
          const src = code.slice(node.test.callee.object.start, node.test.callee.object.end);
          return `if (se2(${src})) ${code.slice(selection.consequent.start, selection.consequent.end)}\n${code.slice(node.start, node.end)}`;
        });
        if (localSvgChecks !== 1) throw new Error("未找到唯一的本地 SVG 选择分支，图标编辑器提取已停止");
        code = code.replaceAll("自定义iTab桌面图标内容", "自定义NewTab桌面图标内容");
        code = code.replace("M2.value = false;", "k2.backgroundColor ||= d(); M2.value = false;");
        code = code.replace("window.URL.createObjectURL(o3)", "window.iconEditorSession.createObjectURL(o3)");
        code = code.replace('document.body.querySelector(".cropper-crop-box").style.backgroundColor = o3',
          'document.body.querySelector(".cropper-crop-box")?.style.setProperty("background-color", o3)');
      }
      return { contents: code, loader: "js" };
    });
  } }],
});
const styles = ["CustomAdd-DmJclX0G", "index-dJQF7aNL", "utils-CXX6ZX7A", "d-button-CwmpYApa"];
for (const style of styles) await fs.copyFile(path.join(source, "assets", style + ".css"), path.join(out, style + ".css"));
await fs.writeFile(path.join(out, "upstream.css"), `@import url('../appearance/upstream.css');\n${styles.map(s => `@import url('./${s}.css');`).join("\n")}\n`);
await fs.writeFile(path.join(out, "provenance.json"), JSON.stringify({
  version: "2.3.13", components: ["IconEdit-BNgKhupT", "CustomAdd-CYYDf8MW", "vue-cropper.es-D16yehvn"],
  styles, inputs: Object.keys(result.metafile.inputs).map(f => path.basename(f)),
}, null, 2) + "\n");
const siteMap = JSON.parse(await fs.readFile(path.join(root, "assets/site-map.json"), "utf8"));
await fs.writeFile(path.join(out, "image-fit.js"), "// 随包图标沿用其原网址对应的 contain 规则。\nexport const containedImages = new Set(" +
  JSON.stringify(Object.entries(siteMap).filter(([url]) => /\/icons\/|\/tools-icon\/|user-website-icon-v2/.test(url)).map(([, file]) => file)) + ");\n");
console.log("已提取原版图标编辑、添加和裁剪控件，保存使用当前本地数据。");
