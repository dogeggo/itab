const BASE = "https://www.googleapis.com/drive/v3";
export const DRIVE_SCOPE = "https://www.googleapis.com/auth/drive.appdata";
const AUTO_CONNECT_KEY = "googleDriveAutoConnect";
export function driveAvailability() {
  if (!globalThis.chrome?.identity?.getAuthToken)
    return {
      ready: false,
      message:
        "Google 备份需要在 Chrome 中加载扩展后使用。网页预览支持本地导入导出。",
    };
  if (!chrome.runtime.getManifest().oauth2?.client_id)
    return {
      ready: false,
      message:
        "请先配置 Google OAuth 客户端 ID。详见项目中的 Google备份配置.md。",
    };
  return { ready: true, message: "Google Drive · 应用专属备份空间" };
}
async function token(interactive = false) {
  const available = driveAvailability();
  if (!available.ready) throw new Error(available.message);
  if (!interactive) {
    const preferences = await globalThis.chrome?.storage?.local?.get(AUTO_CONNECT_KEY);
    if (preferences?.[AUTO_CONNECT_KEY] === false)
      throw new Error("Google Drive 已断开，点击“连接 Google”可重新连接。");
  }
  try {
    const result = await chrome.identity.getAuthToken({
      interactive,
      scopes: [DRIVE_SCOPE],
    });
    const value = typeof result === "string" ? result : result?.token;
    if (!value) throw new Error("未取得授权令牌");
    if (interactive)
      await globalThis.chrome?.storage?.local?.set({ [AUTO_CONNECT_KEY]: true });
    return value;
  } catch (e) {
    throw new Error("Google 授权未完成：" + e.message);
  }
}
async function request(
  url,
  options = {},
  interactive = false,
  retried = false,
) {
  const t = await token(interactive);
  let response;
  try {
    response = await fetch(url, {
      ...options,
      headers: { ...options.headers, Authorization: `Bearer ${t}` },
      signal: AbortSignal.timeout(30000),
    });
  } catch {
    throw new Error("无法连接 Google Drive，请检查网络后重试");
  }
  if (response.status === 401 && !retried) {
    await chrome.identity.removeCachedAuthToken({ token: t });
    return request(url, options, interactive, true);
  }
  if (!response.ok) {
    let detail = "";
    try {
      detail = (await response.json()).error?.message || "";
    } catch {}
    throw new Error(
      `Google Drive 请求失败 (${response.status})${detail ? "：" + detail : ""}`,
    );
  }
  return response;
}
export async function connectDrive() {
  await token(true);
  return listBackups();
}
export async function disconnectDrive() {
  await globalThis.chrome?.storage?.local?.set({ [AUTO_CONNECT_KEY]: false });
  if (globalThis.chrome?.identity?.clearAllCachedAuthTokens)
    await chrome.identity.clearAllCachedAuthTokens();
}
export async function getGoogleProfile() {
  if (!driveAvailability().ready) return null;
  const response = await request(
    `${BASE}/about?fields=user(displayName,photoLink)`,
  );
  const { user } = await response.json();
  if (!user) return null;
  let photoURL = "";
  try {
    const url = new URL(user.photoLink);
    if (url.protocol === "https:" && !url.username && !url.password)
      photoURL = url.href;
  } catch {}
  return {
    displayName: typeof user.displayName === "string" ? user.displayName : "",
    photoURL,
  };
}
export async function listBackups() {
  const query = new URLSearchParams({
    spaces: "appDataFolder",
    q: "trashed = false and mimeType = 'application/json' and (name contains 'NewTab-' or name contains 'itab-local-')",
    fields: "files(id,name,createdTime,size),nextPageToken",
    orderBy: "createdTime desc",
    pageSize: "100",
  });
  const response = await request(`${BASE}/files?${query}`);
  return (await response.json()).files || [];
}
export async function uploadBackup(backup) {
  const json = JSON.stringify(backup);
  if (new TextEncoder().encode(json).length > 25 * 1024 * 1024)
    throw new Error("备份不能超过 25 MB");
  const boundary = "newtab_" + crypto.randomUUID().replaceAll("-", "");
  const metadata = {
    name: `NewTab-${new Date().toISOString().replaceAll(":", "-")}.json`,
    parents: ["appDataFolder"],
    mimeType: "application/json",
  };
  const body = `--${boundary}\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n${JSON.stringify(metadata)}\r\n--${boundary}\r\nContent-Type: application/json\r\n\r\n${json}\r\n--${boundary}--`;
  const r = await request(
    "https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id,name,createdTime",
    {
      method: "POST",
      headers: { "Content-Type": `multipart/related; boundary=${boundary}` },
      body,
    },
    true,
  );
  return r.json();
}
export async function downloadBackup(id) {
  if (!/^[\w-]+$/.test(id)) throw new Error("备份 ID 无效");
  const r = await request(`${BASE}/files/${id}?alt=media`);
  const contentLength = Number(r.headers.get("content-length"));
  if (contentLength > 25 * 1024 * 1024) throw new Error("云备份超过 25 MB");
  return r.text();
}
