import { read, write } from "../../src/storage.js";
import { toast } from "../../src/ui.js";

// 一言是公开内容缓存，单独保存在当前数据库中，不加入用户主页备份。
const cacheKey = "home-yiyan";
let cached;
let request;
export async function hydrate() {
  cached = await read(cacheKey);
}
export const values = {
  get: () => cached?.value,
  set: (_key, value) => { cached = { ...cached, value }; },
};
export const cache = {
  async get() {
    return cached?.expiresAt > Date.now() ? cached.value : null;
  },
  set(_key, value, lifetime) {
    cached = { value, expiresAt: Date.now() + lifetime };
    return write(cacheKey, cached).catch(reportError);
  },
};
export function apiGetYiyan() {
  // 连续右键/点击切换共用进行中的请求，避免较旧响应覆盖较新的内容。
  if (!request) request = (async () => {
    const response = await fetch("https://base.itab.link/yiyan/random?lang=cn", {
      credentials: "omit", cache: "no-store", signal: AbortSignal.timeout(10000),
    });
    if (!response.ok) throw new Error("一言获取失败，请稍后重试");
    const payload = await response.json();
    if (payload.code !== 200 || typeof payload.data?.hitokoto !== "string" || !payload.data.hitokoto.trim())
      throw new Error("一言服务未返回有效内容，请稍后重试");
    return { data: { hitokoto: payload.data.hitokoto, from: String(payload.data.from || "") } };
  })().finally(() => { request = null; });
  return request;
}
export async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    toast("已复制到剪切板");
  } catch {
    toast("复制失败，请检查浏览器剪贴板权限", true);
  }
}
export function reportError(error) {
  toast(error?.message || "一言加载失败，请稍后右键切换重试", true);
}
