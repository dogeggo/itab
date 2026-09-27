import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createHash, createPrivateKey, createPublicKey, generateKeyPairSync } from "node:crypto";
import { spawnSync } from "node:child_process";

const root = fileURLToPath(new URL("../", import.meta.url));
const dist = path.join(root, "dist");
const release = path.join(root, "release");
const output = path.join(root, "output");
const manifest = JSON.parse(await fs.readFile(path.join(dist, "manifest.json"), "utf8"));
const { version } = JSON.parse(await fs.readFile(path.join(root, "package.json"), "utf8"));
if (!/^\d+\.\d+\.\d+$/.test(version) || manifest.version !== version)
  throw new Error("发行版本无效或 dist 已过期，请先运行 npm run build");

const candidates = process.env.CHROME_PATH
  ? [process.env.CHROME_PATH]
  : [
      path.join(process.env.ProgramFiles || "C:/Program Files", "Google/Chrome/Application/chrome.exe"),
      path.join(process.env["ProgramFiles(x86)"] || "C:/Program Files (x86)", "Google/Chrome/Application/chrome.exe"),
      ...(process.env.LOCALAPPDATA ? [path.join(process.env.LOCALAPPDATA, "Google/Chrome/Application/chrome.exe")] : []),
    ];
let chrome;
for (const candidate of candidates) {
  try {
    await fs.access(candidate);
    chrome = candidate;
    break;
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
  }
}
if (!chrome) throw new Error("未找到 Google Chrome，请通过 CHROME_PATH 指定 chrome.exe");

// 私钥保存在源码包白名单之外；后续发行必须复用它才能保持 CRX ID。
const keyPath = path.resolve(root, process.env.CRX_KEY_PATH || ".keys/NewTab.pem");
let pem;
try {
  pem = await fs.readFile(keyPath, "utf8");
} catch (error) {
  if (error.code !== "ENOENT" || process.env.CRX_KEY_PATH) throw error;
  await fs.mkdir(path.dirname(keyPath), { recursive: true });
  pem = generateKeyPairSync("rsa", {
    modulusLength: 2048,
    privateKeyEncoding: { type: "pkcs8", format: "pem" },
    publicKeyEncoding: { type: "spki", format: "pem" },
  }).privateKey;
  await fs.writeFile(keyPath, pem, { flag: "wx", mode: 0o600 });
}
const privateKey = createPrivateKey(pem);
if (privateKey.asymmetricKeyType !== "rsa") throw new Error("CRX 签名需要 RSA 私钥");
const publicKey = createPublicKey(privateKey).export({ type: "spki", format: "der" });
const extensionId = (key) => [...createHash("sha256").update(key).digest("hex").slice(0, 32)]
  .map((digit) => String.fromCharCode(97 + parseInt(digit, 16))).join("");
const crxId = extensionId(publicKey);
const developmentId = manifest.key ? extensionId(Buffer.from(manifest.key, "base64")) : null;

await fs.mkdir(release, { recursive: true });
await fs.mkdir(output, { recursive: true });
const staging = await fs.mkdtemp(path.join(output, "crx-build-"));
try {
  const extension = path.join(staging, "extension");
  await fs.cp(dist, extension, { recursive: true });
  // 开发目录保留既有 ID，CRX 内公钥必须与签名私钥一致。
  manifest.key = publicKey.toString("base64");
  await fs.writeFile(path.join(extension, "manifest.json"), JSON.stringify(manifest, null, 2));
  const result = spawnSync(chrome, [
    `--user-data-dir=${path.join(staging, "profile")}`,
    "--no-first-run",
    "--no-default-browser-check",
    "--no-message-box",
    `--pack-extension=${extension}`,
    `--pack-extension-key=${keyPath}`,
  ], { encoding: "utf8", windowsHide: true, timeout: 60000, maxBuffer: 1024 * 1024 });
  if (result.error) throw result.error;
  if (result.status !== 0)
    throw new Error(`Chrome 打包失败（${result.status}）：${(result.stderr || result.stdout || "").slice(0, 4000)}`);
  const crxPath = `${extension}.crx`;
  const crx = await fs.readFile(crxPath);
  if (crx.length < 12 || crx.toString("ascii", 0, 4) !== "Cr24" || crx.readUInt32LE(4) !== 3)
    throw new Error("Chrome 未生成有效的 CRX3 文件");
  const target = path.join(release, `NewTab-${version}.crx`);
  await fs.rename(crxPath, target);
  const notes = [
    `NewTab ${version} / CRX3`,
    `CRX 扩展 ID：${crxId}`,
    `开发目录 / ZIP 扩展 ID：${developmentId || "未固定"}`,
    "",
    "Windows Chrome 对商店外 CRX 的安装有限制；若浏览器拒绝安装，请解压同目录 ZIP，打开扩展管理页并使用“加载已解压的扩展程序”。",
    "CRX 与 ZIP 的扩展 ID 不同时，它们是独立扩展，数据需通过 JSON 备份导出、导入。",
    ...(developmentId !== crxId && manifest.oauth2 ? [
      "当前 Google OAuth 客户端配置沿用开发版本。使用 CRX 的 Google 备份前，需要在 Google Cloud 配置与上述 CRX ID 匹配的 Chrome 扩展客户端，并通过 npm run configure:google -- <客户端ID> 更新后重新打包。",
    ] : []),
    "",
    "请单独备份打包机器上的签名私钥（默认 .keys/NewTab.pem），不要分发私钥。后续打包会自动复用它；丢失后无法为相同 CRX ID 签名更新。",
  ];
  await fs.writeFile(path.join(release, "CRX安装说明.txt"), notes.join("\r\n") + "\r\n");
  console.log(`CRX3 打包完成：${target}\n扩展 ID：${crxId}\n签名私钥：${keyPath}`);
  if (developmentId !== crxId && manifest.oauth2)
    console.log("注意：CRX 使用独立扩展 ID，Google OAuth 需匹配这个 ID，详见 release/CRX安装说明.txt。");
} finally {
  if (path.dirname(staging) !== output || !path.basename(staging).startsWith("crx-build-"))
    throw new Error("临时打包目录不在工程 output 内");
  await fs.rm(staging, { recursive: true, force: true, maxRetries: 3, retryDelay: 200 });
}
