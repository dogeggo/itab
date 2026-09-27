import fs from "node:fs/promises";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { parse } from "acorn";
const root = fileURLToPath(new URL("../", import.meta.url));
let checked = 0;
for (const folder of ["src", "scripts", "original"])
  for (const name of await fs.readdir(
    new URL("../" + folder + "/", import.meta.url),
  )) {
    if (!/\.(js|mjs|cjs)$/.test(name)) continue;
    const result = spawnSync(
      process.execPath,
      ["--check", `${folder}/${name}`],
      { cwd: root, encoding: "utf8" },
    );
    if (result.status !== 0) throw new Error(result.stderr.slice(0, 4000));
    checked++;
  }
const manifest = JSON.parse(
  await fs.readFile(new URL("../manifest.json", import.meta.url), "utf8"),
);
for (const name of await fs.readdir(new URL("../original/chunks/", import.meta.url))) {
  if (!name.endsWith(".js")) continue;
  const file = new URL("../original/chunks/" + name, import.meta.url);
  const source = await fs.readFile(file, "utf8");
  const tree = parse(source, { ecmaVersion: "latest", sourceType: "module" });
  const dependencies = [];
  function inspect(node) {
    if (!node || typeof node !== "object") return;
    if (["ImportDeclaration", "ExportNamedDeclaration", "ExportAllDeclaration", "ImportExpression"].includes(node.type) && typeof node.source?.value === "string" && node.source.value.startsWith(".")) dependencies.push(node.source.value);
    for (const value of Object.values(node)) {
      if (Array.isArray(value)) value.forEach(inspect);
      else if (value && typeof value === "object") inspect(value);
    }
  }
  inspect(tree);
  for (const dependency of dependencies) await fs.access(new URL(dependency, file));
  for (const match of source.matchAll(/["'](?:\/original\/)?(assets\/[^"']+\.css)["']/g)) await fs.access(new URL("../original/" + match[1], import.meta.url));
  checked++;
}
const { componentStyles } = await import("../original/registry.js");
// 原版设置和图标编辑的独立页面必须从安装包加载全部 JS、CSS 和字体。
for (const folder of ["appearance", "icon-editor"]) {
  for (const name of await fs.readdir(new URL("../original/" + folder + "/", import.meta.url))) {
    const file = new URL("../original/" + folder + "/" + name, import.meta.url);
    if (!/\.(js|html|css)$/.test(name)) continue;
    const text = await fs.readFile(file,"utf8");
    if(name.endsWith('.js')) {
      const tree=parse(text,{ecmaVersion:"latest",sourceType:"module"});
      for(const n of tree.body)if(n.source?.value?.startsWith('.'))await fs.access(new URL(n.source.value,file));
      checked++;
    }
    for(const match of text.matchAll(/(?:url\(["']?|(?:src|href)=["'])([^\s"')>]+)/g)){
      const target=match[1];
      if(target.startsWith('data:')||target.startsWith('http')||target.startsWith('#')||target.includes('${'))continue;
      // 这里只检查静态 CSS / HTML；JS 中的模板和 SVG 属性由构建器校验。
      if(!name.endsWith('.js'))await fs.access(new URL(target,file));
    }
  }
}

for (const name of new Set(Object.values(componentStyles).flat())) await fs.access(new URL("../original/" + name, import.meta.url));
for (const file of [
  "index.html",
  manifest.background.service_worker,
  ...Object.values(manifest.icons),
])
  await fs.access(new URL("../" + file, import.meta.url));
const groups = JSON.parse(
  await fs.readFile(new URL("../assets/seed.json", import.meta.url), "utf8"),
);
const { createState, validateState } = await import("../src/model.js");
validateState(createState(groups));
function walk(items) {
  return items.flatMap((i) =>
    i.kind === "folder" ? [i, ...walk(i.children)] : [i],
  );
}
for (const item of groups.flatMap((g) => walk(g.items)))
  if (item.image?.startsWith("assets/"))
    await fs.access(new URL("../" + item.image, import.meta.url));
console.log(
  `检查通过：${checked} 个脚本、Manifest V3 入口、6 个默认分组、全部本地图片引用。`,
);
