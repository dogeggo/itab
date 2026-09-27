import fs from "node:fs/promises";
const clientId = process.argv[2]?.trim();
if (!clientId || !/^[\w-]+\.apps\.googleusercontent\.com$/.test(clientId)) {
  console.error(
    "用法：npm run configure:google -- 你的客户端ID.apps.googleusercontent.com",
  );
  process.exit(1);
}
await fs.writeFile(
  new URL("../google.config.json", import.meta.url),
  JSON.stringify({ clientId }, null, 2),
);
console.log("已保存 OAuth 客户端 ID。请运行 npm run build 并重新加载扩展。");
