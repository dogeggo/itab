// 固定输入为随附 原版 2.3.13；常规构建只使用已生成的 original/appearance。
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parse } from "acorn";
import { build, transform } from "esbuild";
const root = fileURLToPath(new URL("../", import.meta.url));
const source = path.resolve(root, "..");
if (
  JSON.parse(await fs.readFile(path.join(source, "manifest.json"), "utf8"))
    .version !== "2.3.13"
)
  throw new Error("原版版本不匹配");
const out = path.join(root, "original/appearance");
await fs.mkdir(out, { recursive: true });
function walk(n, visit) {
  if (!n || typeof n !== "object") return;
  if (n.type && visit(n) === false) return;
  for (const v of Object.values(n))
    if (Array.isArray(v)) v.forEach((x) => walk(x, visit));
    else if (v && typeof v === "object") walk(v, visit);
}
function edit(s, visit) {
  const edits = [];
  walk(parse(s, { ecmaVersion: "latest", sourceType: "module" }), (n) => {
    const result = visit(n, s.slice(n.start, n.end));
    if (result !== undefined) {
      edits.push([n.start, n.end, result]);
      return false;
    }
  });
  for (const [a, b, t] of edits.sort((a, b) => b[0] - a[0]))
    s = s.slice(0, a) + " " + t + " " + s.slice(b);
  return s;
}
const components = {
  icon: "icon-CRwW-IH5",
  time: "time-BSnPnxuW",
  open: "open-CPcHO033",
  layout: "layout-V2nQcA5Q",
  sidebar: "sidebar-B5-VRzgW",
  search: "search-SQmPP6kd",
  wallpaper: "wallpaper-Bybn0iTt",
};
const entry = `export {at as createApp,r as ref,d as watch,W as h,A as nextTick} from './vendor-vue-BG-CQRtu.js';\nexport {a as state} from './stocksCache-CNvbf2yR.js';\n${Object.entries(
  components,
)
  .map(([k, v]) => `export {default as ${k}} from './${v}.js';`)
  .join("\n")}`;
const result = await build({
  stdin: {
    contents: entry,
    resolveDir: path.join(source, "chunks"),
    sourcefile: "appearance-entry.js",
  },
  bundle: true,
  format: "esm",
  target: "chrome120",
  charset: "utf8",
  treeShaking: true,
  minifySyntax: true,
  outfile: path.join(out, "components.js"),
  metafile: true,
  plugins: [
    {
      name: "current-appearance",
      setup(b) {
        b.onLoad({ filter: /stocksCache-CNvbf2yR\.js$/ }, () => ({
          contents: `import {r} from './vendor-vue-BG-CQRtu.js';const state=r({});export const a=()=>state;export const a1={default:{icon:{iconLayout:'default',iconSize:60,iconRadius:18,opactiy:1,xysync:true,iconX:30,iconY:30,name:1,nameSize:12,nameColor:'#ffffff',unit:'px',width:1350}}};export const z=()=>window.appearanceSession.action('wallpaper');`,
          loader: "js",
        }));
        b.onLoad({ filter: /preload-helper-Bj79fh9f\.js$/ }, () => ({
          contents: "export const _=loader=>loader();",
          loader: "js",
        }));
        b.onLoad({ filter: /index-Bz0MuV5X\.js$/ }, () => ({
          contents:
            "export const d=()=>window.appearanceSession.action('download-wallpaper');",
          loader: "js",
        }));
        b.onLoad({ filter: /\.js$/ }, async ({ path: file }) => {
          let s = await fs.readFile(file, "utf8");
          const name = path.basename(file);
          const saves = [];
          walk(
            parse(s, { ecmaVersion: "latest", sourceType: "module" }),
            (n) => {
              if (
                n.type === "ImportDeclaration" &&
                /save_config/.test(n.source.value)
              )
                saves.push(...n.specifiers.map((p) => p.local.name));
            },
          );
          // 保存由宿主的响应式数据接口统一承担，删除原版云同步调用和依赖。
          s = edit(s, (n, code) => {
            if (
              n.type === "ImportDeclaration" &&
              (!n.specifiers.length ||
                /save_config|overlay-Pg|globalSearchWindow/.test(
                  n.source.value,
                ))
            )
              return "";
            if (n.type === "CallExpression" && saves.includes(n.callee.name))
              return "void 0";
            if (
              n.type === "CallExpression" &&
              n.callee.property?.name === "then" &&
              code.includes('import("./save_config')
            )
              return "void 0";
            if (
              n.type === "VariableDeclaration" &&
              n.declarations.some((d) => d.id.name === "__vite__mapDeps")
            )
              return "";
            if (
              n.type === "CallExpression" &&
              n.callee.name === "__vite__mapDeps"
            )
              return "[]";
          });
          if (name === "search-SQmPP6kd.js") {
            s = s.replace("s();", "");
            s = edit(s, (n, code) => {
              if (n.type === "FunctionDeclaration" && n.id.name === "C")
                return "";
              if (
                n.type === "ConditionalExpression" &&
                code.startsWith("I.value?")
              )
                return 'h("",true)';
              if (
                n.type === "CallExpression" &&
                n.arguments[1]?.type === "ObjectExpression" &&
                n.arguments[1].properties.some(
                  (p) => p.key.name === "title" && p.value.value === "关闭翻译",
                )
              )
                return 'h("",true)';
              if (
                n.type === "CallExpression" &&
                n.callee.name === "u" &&
                n.arguments[1]?.name === "f"
              )
                return 'h("",true)';
            });
          }
          if (name === "wallpaper-Bybn0iTt.js") {
            s = edit(s, (n) => {
              if (n.type === "FunctionDeclaration" && n.id.name === "Z")
                return "";
              if (
                n.type === "CallExpression" &&
                n.callee.name === "j" &&
                ["B", "H"].includes(n.arguments[1]?.name)
              )
                return 'nativeComment("",true)';
              if (
                n.type === "ImportDeclaration" &&
                n.source.value.includes("stocksCache")
              )
                return 'import {a as r,z as p} from "./stocksCache-CNvbf2yR.js";';
            });
            s =
              'import {S as nativeComment} from "./vendor-vue-BG-CQRtu.js";' +
              s;
          }
          // 只列出原包中确实存在的本地字体，避免展示下载失败的选项。
          if (name === "d-font-family-G8Tq3WWS.js")
            s = edit(s, (n) => {
              if (
                n.type === "ArrayExpression" &&
                n.elements.some((e) =>
                  e?.properties?.some(
                    (p) =>
                      p.key.name === "font" &&
                      p.value.value === "BungeeHairline",
                  ),
                )
              )
                return (
                  "[" +
                  n.elements
                    .filter(
                      (e) =>
                        !e.properties.some(
                          (p) =>
                            p.key.name === "font" &&
                            ["SFUI", "BungeeHairline"].includes(p.value.value),
                        ),
                    )
                    .map((e) => s.slice(e.start, e.end))
                    .join(",") +
                  "]"
                );
            });
          return {
            contents: (
              await transform(s, {
                format: "esm",
                minifySyntax: true,
                treeShaking: true,
                charset: "utf8",
              })
            ).code,
            loader: "js",
          };
        });
      },
    },
  ],
});
const styles = [
  "tailwind-rIhkj3gK",
  "vendor-element-plus-WnleHQiG",
  "element-plus-DNgMbf21",
  "common-_lU6m7G0",
  "d-switch-r9qL2m8j",
  "d-slider-X3LUascn",
  "d-color-DJInpebV",
  "d-radio-XXFjz9-C",
  "time-f-lNG0WR",
  "layout-CCfD7i1C",
  "sidebar-BBpwaCb4",
  "wallpaper-CxbhOO31",
];
for (const name of styles)
  await fs.copyFile(
    path.join(source, "assets", name + ".css"),
    path.join(out, name + ".css"),
  );
await fs.writeFile(
  path.join(out, "upstream.css"),
  styles.map((n) => `@import url('./${n}.css');`).join("\n"),
);
await fs.writeFile(
  path.join(out, "provenance.json"),
  JSON.stringify(
    {
      version: "2.3.13",
      components,
      styles,
      inputs: Object.keys(result.metafile.inputs).map((f) => path.basename(f)),
    },
    null,
    2,
  ) + "\n",
);
// 原版全局字体是系统无衬线；Arial Rounded 仅在时间字体中使用，防止影响所有正文。
const fonts = (
  await fs.readFile(path.join(source, "webfont/index.css"), "utf8")
)
  .replace(/@font-face\s*\{[^}]*\}/g, (block) =>
    /Oswald|SFUI|BungeeHairline/.test(block)
      ? ""
      : block.replace('"Arial"', '"iTabArial"'),
  )
  .replaceAll('url("./', 'url("../webfont/');
await fs.writeFile(path.join(out, "fonts.css"), fonts);
const allIcons = {};
function literal(n) {
  if (n.type === "Literal") return n.value;
  if (n.type === "ArrayExpression") return n.elements.map(literal);
  if (n.type === "ObjectExpression")
    return Object.fromEntries(
      n.properties.map((p) => [p.key.name || p.key.value, literal(p.value)]),
    );
  throw new Error("图标包含非静态表达式");
}
for (const name of await fs.readdir(path.join(source, "chunks"))) {
  if (!/^(Icon|HomeNavGroup|main-).+\.js$/.test(name)) continue;
  walk(
    parse(await fs.readFile(path.join(source, "chunks", name), "utf8"), {
      ecmaVersion: "latest",
      sourceType: "module",
    }),
    (n) => {
      if (
        n.type === "CallExpression" &&
        ["outline", "filled"].includes(n.arguments[0]?.value) &&
        n.arguments[3]?.type === "ArrayExpression"
      )
        allIcons[n.arguments[1].value] = {
          filled: n.arguments[0].value === "filled",
          nodes: literal(n.arguments[3]),
        };
    },
  );
}
const aliases = {
  home: "smart-home",
  code: "code",
  palette: "palette",
  product: "brand-producthunt",
  sparkles: "sparkle-2",
  game: "device-gamepad-2",
  plus: "plus",
  close: "x",
  settings: "settings-2",
  cloud: "cloud-upload",
  search: "search",
  chevron: "chevron-right",
  down: "chevron-down",
  image: "photo",
  leaf: "leaf",
  grid: "layout",
  calendar: "calendar",
  trending: "trending-up",
  heart: "heart",
  note: "notes",
  check: "check",
  coffee: "coffee",
  film: "movie",
  calculator: "calculator",
  timer: "clock",
  water: "droplet",
  folder: "folder",
  edit: "pencil",
  trash: "trash",
  external: "external-link",
  download: "download",
  upload: "upload",
  sun: "sun",
  moon: "moon",
  refresh: "refresh",
  arrow: "arrow-right",
  user: "user",
  book: "bookmark",
  move: "arrows-move",
};
const icons = {};
for (const [key, name] of Object.entries(aliases))
  if (allIcons[name]) icons[key] = allIcons[name];
await fs.writeFile(
  path.join(out, "icons.js"),
  "// @tabler/icons-vue v3.46.0 · MIT; extracted unchanged from 原版 2.3.13.\nexport const originalIcons=" +
    JSON.stringify(icons) +
    ";\n",
);
console.log("已接入 7 个原版设置页面、原版控件和随包字体。");
