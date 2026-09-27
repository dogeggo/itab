// 一次性提取当前用户提供的原扩展资源；正常构建不依赖原扩展。
import fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";
const root = new URL("../", import.meta.url),
  original = new URL("../../", import.meta.url);
for (const name of ["icon", "setting", "webfont", "weather"])
  await fs.cp(new URL(name, original), new URL("assets/" + name, root), {
    recursive: true,
  });
await fs.mkdir(new URL("assets/sites/", root), { recursive: true });
await fs.mkdir(new URL("assets/wallpapers/", root), { recursive: true });
const nav = JSON.parse(
  await fs.readFile(new URL("docs/original-live-state.json", root), "utf8"),
).navigation;
const jobs = [
  {
    src: "https://files.itab.link/itab/defaultWallpaper/defaultWallpaper.webp",
    target: "assets/wallpapers/default.webp",
  },
];
const map = {};
function walk(items) {
  for (const i of items) {
    if (
      ["pdfConvert", "aippt"].includes(i.component) ||
      /^https:\/\/(www\.)?(aippt\.cn|pptgo\.cn)(\/|\?|$)/i.test(i.url || "")
    )
      continue;
    if (i.src?.startsWith("https://")) {
      const key = crypto
        .createHash("sha1")
        .update(i.src)
        .digest("hex")
        .slice(0, 14);
      let ext = path.extname(new URL(i.src).pathname);
      if (!/\.(png|svg|jpg|webp|jpeg)$/.test(ext)) ext = ".png";
      const target = "assets/sites/" + key + ext;
      if (!map[i.src]) {
        map[i.src] = target;
        jobs.push({ src: i.src, target });
      }
    }
    if (i.children) walk(i.children);
  }
}
nav.forEach((g) => walk(g.children));
const failures = [];
let next = 0;
await Promise.all(
  Array.from({ length: 8 }, async () => {
    while (next < jobs.length) {
      const job = jobs[next++];
      try {
        const r = await fetch(job.src, { signal: AbortSignal.timeout(20000) });
        if (!r.ok) throw new Error(String(r.status));
        await fs.writeFile(
          new URL(job.target, root),
          Buffer.from(await r.arrayBuffer()),
        );
      } catch (e) {
        failures.push({ src: job.src, error: e.message });
        delete map[job.src];
      }
    }
  }),
);
await fs.writeFile(
  new URL("assets/site-map.json", root),
  JSON.stringify(map, null, 2),
);
await fs.writeFile(
  new URL("docs/asset-download-report.json", root),
  JSON.stringify({ total: jobs.length, failures }, null, 2),
);
const { publicKey } = crypto.generateKeyPairSync("rsa", {
  modulusLength: 2048,
});
try {
  await fs.access(new URL("extension-public-key.txt", root));
} catch {
  await fs.writeFile(
    new URL("extension-public-key.txt", root),
    publicKey.export({ type: "spki", format: "der" }).toString("base64"),
  );
}
console.log(
  `资源准备完成：${jobs.length - failures.length}/${jobs.length}，失败 ${failures.length} 项。`,
);
