import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
const root = fileURLToPath(new URL("../", import.meta.url));
const dist = path.join(root, "dist");
// 仅清理本工程的固定产物目录，防止已移除的模块被旧构建带入安装包。
if (
  path.dirname(path.resolve(dist)) !== path.resolve(root) ||
  path.basename(dist) !== "dist"
)
  throw new Error("构建目录不在工程内");
await fs.rm(dist, { recursive: true, force: true });
await fs.mkdir(dist, { recursive: true });
for (const name of ["index.html", "src", "assets"])
  await fs.cp(path.join(root, name), path.join(dist, name), {
    recursive: true,
    force: true,
  });
const manifest = JSON.parse(
  await fs.readFile(path.join(root, "manifest.json"), "utf8"),
);
try {
  const config = JSON.parse(
    await fs.readFile(path.join(root, "google.config.json"), "utf8"),
  );
  if (config.clientId)
    manifest.oauth2 = {
      client_id: config.clientId,
      scopes: ["https://www.googleapis.com/auth/drive.appdata"],
    };
} catch (e) {
  if (e.code !== "ENOENT") throw e;
}
manifest.key = (
  await fs.readFile(path.join(root, "extension-public-key.txt"), "utf8")
).trim();
await fs.writeFile(
  path.join(dist, "manifest.json"),
  JSON.stringify(manifest, null, 2),
);
console.log(
  "构建完成：dist，可在 chrome://extensions 加载。Google OAuth：" +
    (manifest.oauth2 ? "已配置" : "待配置（本地功能可用）"),
);
