import { modal, closeModal, toast } from "./ui.js";
import { normalizeURL, safeURL } from "./model.js";
import { iconColor, siteFromEditor } from "./site-icon.js";

export async function lookupSiteIcons(value) {
  const url = normalizeURL(value);
  if (!url.startsWith("http")) throw new Error("浏览器内部页面请使用文字图标或上传图片");
  const response = await fetch(`https://base.itab.link/website/info?url=${encodeURIComponent(url)}`, {
    method: "POST", credentials: "omit", signal: AbortSignal.timeout(10000),
  });
  if (!response.ok) throw new Error("获取网站图标失败，请稍后重试或上传图片");
  const payload = await response.json();
  const data = payload.data || {};
  const official = Number(data.type) === 1 ? [data.imgSrc || data.src] : [];
  const icons = [...new Set([...official, ...(Array.isArray(data.icon) ? data.icon : [])])]
    .map(src => safeURL(src, { image: true })).filter(Boolean).slice(0, 12);
  return {
    name: String(data.name || new URL(url).hostname), icons,
    official: official.filter(src => icons.includes(src)),
    backgroundColor: iconColor(data.backgroundColor || "transparent"),
  };
}

export function openIconEditor({ item, onSave }) {
  const dialog = modal(item ? "编辑图标" : "自定义图标", "");
  dialog.className = "icon-editor-dialog";
  const frame = document.createElement("iframe");
  frame.className = "icon-editor-frame";
  frame.title = item ? "编辑图标" : "自定义图标";
  const urls = new Set();
  let active = true;
  const rootURL = new URL("../", import.meta.url).href;
  const data = item ? {
    id: item.id, name: item.name, url: item.url, type: item.image ? "icon" : "text",
    src: item.image ? new URL(item.image, rootURL).href : "",
    iconText: item.iconText || item.name.slice(0, 2), backgroundColor: item.color,
  } : null;
  function dispose() {
    active = false;
    for (const url of urls) URL.revokeObjectURL(url);
    frame.remove();
    dialog.removeEventListener("close", dispose);
  }
  dialog.addEventListener("close", dispose);
  frame.__iconEditorSession = {
    read: () => ({ item: data, theme: document.documentElement.dataset.theme, color: document.documentElement.style.getPropertyValue("--primary") || "#1890ff" }),
    lookup: lookupSiteIcons,
    createObjectURL(blob) { const url = URL.createObjectURL(blob); urls.add(url); return url; },
    close: () => closeModal(),
    async save(data, keepOpen) {
      if (!active) throw new Error("图标编辑会话已关闭");
      const next = { ...data };
      if (next.type !== "text" && next.src?.startsWith("blob:")) {
        if (!urls.has(next.src)) throw new Error("图片已失效，请重新上传");
        const blob = await (await fetch(next.src)).blob();
        next.src = await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result);
          reader.onerror = () => reject(new Error("图片读取失败"));
          reader.readAsDataURL(blob);
        });
      }
      if (next.src?.startsWith(rootURL + "assets/")) next.src = next.src.slice(rootURL.length);
      if (!active) throw new Error("图标编辑会话已关闭");
      await onSave(siteFromEditor(next, item));
      toast("图标已保存");
      if (!keepOpen) await closeModal();
    },
  };
  frame.src = "original/icon-editor/host.html";
  dialog.querySelector(".modal-body").replaceChildren(frame);
}
