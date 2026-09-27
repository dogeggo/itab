import fs from "node:fs/promises";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
const root = fileURLToPath(new URL("../", import.meta.url));
let checked = 0;
for (const folder of ["src", "scripts"])
  for (const name of await fs.readdir(
    new URL("../" + folder + "/", import.meta.url),
  )) {
    if (!/\.(js|mjs)$/.test(name)) continue;
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
