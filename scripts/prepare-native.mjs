// 从用户提供的原版 2.3.13 包导入；仅构建时使用，运行时没有旧版本兼容分支。
import fs from "node:fs/promises";
import {parse} from "acorn";
const root=new URL("../",import.meta.url),source=new URL("../../",import.meta.url),destination=new URL("output/native-import/",root);
const manifest=JSON.parse(await fs.readFile(new URL("manifest.json",source),"utf8"));
if(manifest.version!=="2.3.13")throw new Error("仅支持本次审计的 原版 2.3.13 发布包");
await fs.mkdir(destination, { recursive: true });
for (const folder of [
  "chunks",
  "assets",
  "app",
  "audio",
  "img",
  "icon",
  "setting",
  "webfont",
  "weather",
])
  await fs.cp(new URL(folder, source), new URL(folder, destination), {
    recursive: true,
    force: true,
  });
const rewrite = (text) =>
  text
    .replace(
      /(["'`])\/(app|audio|img|icon|setting|webfont|weather|assets|chunks)\//g,
      "$1/original/$2/",
    )
    .replace(
      /url\(\/(app|audio|img|icon|setting|webfont|weather|assets|chunks)\//g,
      "url(/original/$1/",
    );
for (const folder of ["chunks", "assets"])
  for (const name of await fs.readdir(new URL(folder + "/", destination))) {
    if (!/\.(js|css)$/.test(name)) continue;
    const file = new URL(folder + "/" + name, destination);
    let text = rewrite(await fs.readFile(file, "utf8"));
    if (name === "preload-helper-Bj79fh9f.js")
      text = text.replace('return"/"+e', 'return"/original/"+e');
    if (name === "Content-MmTsKbUx.js")
      text = text.replace("dateline:dateline", "dateline:s.dateline");
    if (name === "Content-BC9l0L7X.js")
      text = text.replace("z.value=e),!a&&e", "z.value=e||{}),!a&&e");
    if (name === "notifyComplete-XLV67qw7.js")
      text = text.replace(
        "return{init:async function(){i=await h()",
        "window.__nativeTomato={flush:()=>i?N(i):Promise.resolve(),ready:()=>y};return{init:async function(){i=await h()",
      );
    if (name === "index-B6LC9LWS.js") {
      // MV3 不允许 blob: Worker，将原本序列化的函数原样提取成随包脚本。
      const ast = parse(text, { ecmaVersion: "latest", sourceType: "module" });
      for (const [functionName, workerName] of [
        ["mo", "media-merge"],
        ["_d", "media-split"],
      ]) {
        const node =
          ast.body.find(
            (n) =>
              n.type === "FunctionDeclaration" && n.id.name === functionName,
          ) ||
          ast.body
            .filter((n) => n.type === "VariableDeclaration")
            .flatMap((n) => n.declarations)
            .find((n) => n.id.name === functionName)?.init;
        if (!node) throw new Error(`原版 Worker ${functionName} 未找到`);
        await fs.writeFile(
          new URL(`chunks/${workerName}.js`, destination),
          `(${text.slice(node.start, node.end)})();\n`,
        );
      }
      text = text
        .replace(
          "new Worker(uo)",
          'new Worker(new URL("./media-merge.js",import.meta.url))',
        )
        .replace(
          "new Worker(Ed)",
          'new Worker(new URL("./media-split.js",import.meta.url))',
        );
    }
    if (name === "d-dialog-DNUygwQl.js")
      text = text.replace(
        /function oe\(\)\{.*?\}function ae\(\)/,
        "function oe(){window.__nativeSession.openWindow()}function ae()",
      );
    for (const asset of ["tide.png", "todo-done.png", "videoposter.webp"])
      text = text.replaceAll('"/' + asset + '"', '"/original/' + asset + '"');
    await fs.writeFile(file, text);
  }
for (const name of ["tide.png", "todo-done.png", "videoposter.webp"])
  await fs.copyFile(new URL(name, source), new URL(name, destination));

await fs.mkdir(new URL("output/native-source/",root),{recursive:true});
for(const name of await fs.readdir(new URL("chunks/",destination)))await fs.copyFile(new URL("chunks/"+name,destination),new URL("output/native-source/"+name,root));
for(const folder of ["assets","app","audio","img","icon","webfont","weather"])await fs.cp(new URL(folder,destination),new URL("original/"+folder,root),{recursive:true,force:true});
for(const name of ["tide.png","todo-done.png","videoposter.webp"])await fs.copyFile(new URL(name,destination),new URL("original/"+name,root));
const catalog=JSON.parse(await fs.readFile(new URL("docs/original-widget-catalog.json",root),"utf8")).response.data;
await fs.writeFile(new URL("assets/native-catalog.json",root),JSON.stringify(catalog.filter(row=>row.insetType!=="iframe"),null,2));
await import("./refine-native.mjs");
await import("./prune-native-assets.mjs");
