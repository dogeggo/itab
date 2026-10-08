import { read, write } from "./storage.js";
import { safeURL } from "./model.js";
import { esc } from "./ui.js";

const MAX_ICON_BYTES = 2 * 1024 * 1024;
const imageTypes = new Set(["image/png", "image/jpeg", "image/webp", "image/gif", "image/svg+xml"]);

export function isRemoteIcon(source) {
  return /^https?:\/\//.test(source || "") && Boolean(safeURL(source, { image: true }));
}

async function imageDataURL(blob) {
  // favicon.ico 等浏览器可显示、备份格式未支持的类型统一转换为 PNG。
  if (!imageTypes.has(blob.type)) {
    const bitmap = await createImageBitmap(blob);
    try {
      const scale = Math.min(1, 512 / Math.max(bitmap.width, bitmap.height));
      const canvas = new OffscreenCanvas(Math.max(1, Math.round(bitmap.width * scale)), Math.max(1, Math.round(bitmap.height * scale)));
      canvas.getContext("2d").drawImage(bitmap, 0, 0, canvas.width, canvas.height);
      blob = await canvas.convertToBlob({ type: "image/png" });
    } finally {
      bitmap.close();
    }
  }
  const source = await new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error("图标图片读取失败"));
    reader.readAsDataURL(blob);
  });
  // 保留 SVG、GIF 等原始内容，但确认图片可显示，避免把错误页写入本地。
  await new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = resolve;
    image.onerror = () => reject(new Error("图标不是有效的图片"));
    image.src = source;
  });
  return source;
}

async function iconBlob(response) {
  if (Number(response.headers.get("content-length")) > MAX_ICON_BYTES) throw new Error("图标图片不能超过 2 MB");
  const reader = response.body?.getReader();
  if (!reader) throw new Error("图标图片为空");
  const chunks = [];
  let size = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > MAX_ICON_BYTES) {
        await reader.cancel();
        throw new Error("图标图片不能超过 2 MB");
      }
      chunks.push(value);
    }
  } finally {
    reader.releaseLock();
  }
  if (!size) throw new Error("图标图片为空");
  return new Blob(chunks, { type: (response.headers.get("content-type") || "").split(";")[0].trim().toLowerCase() });
}

export function createIconCache({ read, write, fetch, encode, lock }) {
  const pending = new Map(), failures = new Set();
  let active = 0;
  const waiting = [];
  function load(source, { retry = false } = {}) {
    if (!isRemoteIcon(source)) return Promise.resolve(source);
    if (pending.has(source)) return pending.get(source);
    const task = async () => {
      const cached = await read("icon:" + source);
      if (cached && /^data:image\//.test(cached) && safeURL(cached, { image: true })) return cached;
      if (!retry && failures.has(source)) throw new Error("图标尚未保存到本地");
      if (active >= 4) await new Promise(resolve => waiting.push(resolve));
      else active++;
      try {
        const response = await fetch(source, {
          credentials: "omit", referrerPolicy: "no-referrer", signal: AbortSignal.timeout(10000),
        });
        if (!response.ok) throw new Error(`图标下载失败（HTTP ${response.status}）`);
        const blob = await iconBlob(response);
        const data = await encode(blob);
        if (!/^data:image\//.test(data) || !safeURL(data, { image: true })) throw new Error("图标图片格式不支持");
        await write("icon:" + source, data);
        failures.delete(source);
        return data;
      } catch (error) {
        failures.add(source);
        throw error;
      } finally {
        if (waiting.length) waiting.shift()();
        else active--;
      }
    };
    const promise = (lock ? lock("newtab-icon:" + source, task) : task())
      .finally(() => pending.delete(source));
    pending.set(source, promise);
    return promise;
  }
  return { load, failed: source => failures.has(source) };
}

const cache = createIconCache({
  read, write, fetch: (...args) => fetch(...args), encode: imageDataURL,
  lock: globalThis.navigator?.locks ? (name, task) => navigator.locks.request(name, task) : null,
});
export const localIcon = cache.load;

// 在保存按钮的点击调用链中直接请求权限，不能等下载失败后再申请。
export function requestIconAccess(source) {
  if (!isRemoteIcon(source) || !cache.failed(source) || !globalThis.chrome?.permissions?.request)
    return Promise.resolve();
  return chrome.permissions.request({ origins: [new URL(source).origin + "/*"] });
}

export function iconImageAttributes(source) {
  return isRemoteIcon(source) ? `data-local-icon="${esc(source)}"` : `src="${esc(source)}"`;
}

export function hydrateIconImages(root = document) {
  for (const image of root.querySelectorAll("img[data-local-icon]")) {
    if (image.dataset.iconLoading) continue;
    image.dataset.iconLoading = "true";
    const source = image.dataset.localIcon;
    void localIcon(source).catch(() => source).then(local => {
      if (!image.isConnected || image.dataset.localIcon !== source) return;
      image.src = local;
    });
  }
}

export function stateIconItems(state) {
  return state.groups.flatMap(group => group.items.flatMap(item =>
    item.kind === "folder" ? [item, ...item.children] : [item]));
}

export async function localizeStateIcons(getState, { load = localIcon, fit } = {}) {
  const jobs = stateIconItems(getState()).filter(item => isRemoteIcon(item.image));
  let index = 0, count = 0;
  await Promise.all(Array.from({ length: Math.min(4, jobs.length) }, async () => {
    while (index < jobs.length) {
      const item = jobs[index++], source = item.image;
      if (!isRemoteIcon(source) || !stateIconItems(getState()).includes(item)) continue;
      try {
        const image = await load(source);
        // 下载期间可能已编辑、删除或恢复备份，不把旧结果覆盖到新主页。
        if (item.image !== source || !stateIconItems(getState()).includes(item)) continue;
        if (["site", "action"].includes(item.kind) && fit) item.imageFit = fit(item);
        item.image = image;
        count++;
      } catch {
        // 未授权、离线或源站失败时保留地址，后续可编辑保存或上传本地图片。
      }
    }
  }));
  return count;
}
