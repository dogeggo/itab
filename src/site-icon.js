import { esc } from "./ui.js";
import { normalizeURL, safeURL, uid } from "./model.js";
import { containedImages } from "../original/icon-editor/image-fit.js";
import { iconImageAttributes, hydrateIconImages } from "./icon-cache.js";

export function iconColor(value) {
  if (typeof value !== "string") return "#1681ff";
  if (value === "transparent" || /^#(?:[\da-f]{3}|[\da-f]{4}|[\da-f]{6}|[\da-f]{8})$/i.test(value)) return value;
  const rgba = /^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})(?:\s*,\s*(0(?:\.\d+)?|1(?:\.0+)?))?\s*\)$/i.exec(value);
  return rgba && rgba.slice(1, 4).every(n => +n <= 255) ? value : "#1681ff";
}

// 原版文字上限为 12 个宽度单位：非 Latin-1 字符算 2 个。
export function iconText(value) {
  let length = 0, result = "";
  for (const char of String(value || "")) {
    length += char.charCodeAt(0) > 255 ? 2 : 1;
    if (length > 12) break;
    result += char;
  }
  return result;
}

export function siteFromEditor(data, item) {
  const name = String(data.name || "").trim();
  if (!name) throw new Error("请输入网站名称");
  if (name.length > 100) throw new Error("网站名称过长");
  const url = normalizeURL(String(data.url || ""));
  const image = data.type === "text" ? "" : safeURL(data.src, { image: true });
  if (data.type !== "text" && !image) throw new Error("请选择图标或上传图片");
  const text = iconText(data.iconText);
  if (data.type === "text" && !text.trim()) throw new Error("请输入图标文字");
  const result = {
    ...item, id: item?.id || uid(), kind: "site", name, url,
    image, iconText: text, color: iconColor(data.backgroundColor),
    size: item?.size || "1x1",
  };
  if (image !== item?.image) delete result.imageFit;
  return result;
}

export function siteImageFit(item) {
  if (["contain", "cover"].includes(item.imageFit)) return item.imageFit;
  // 对应原版 Icon 的官方图片 contain 规则，本地资源使用提取时的来源清单。
  return (containedImages.has(item.image) || /^data:image\/|\/icons\/|\/tools-icon\/|user-website-icon-v2/.test(item.image || "")) && item.color ? "contain" : "cover";
}

export function siteFace(item) {
  const color = iconColor(item.color), fit = siteImageFit(item);
  const text = item.iconText || (item.name || "?").slice(0, 2);
  return `<span class="site-face${item.image ? "" : " text-site-face"}" style="background:${esc(color)};--icon-fit:${fit}">${item.image ? `<img ${iconImageAttributes(item.image)} alt="" draggable="false" data-icon-fallback="${esc(text)}">` : `<span class="letter-icon">${esc(text)}</span>`}${item.badge ? `<span class="site-badge">${esc(item.badge)}</span>` : ""}</span>`;
}

// 原版 d-text-icon 的宽度缩放公式，同时应用于主页、文件夹和预览缩略图。
let textObserver;
export function fitSiteText(root = document) {
  textObserver ||= new ResizeObserver(entries => {
    for (const { target, contentRect } of entries) {
      const text = target.querySelector(".letter-icon");
      if (!text || !contentRect.width || !text.clientWidth) continue;
      text.style.transform = `scale(${Math.max(.01, Math.min(contentRect.width / text.clientWidth, 1) - .06)}) translateX(-50%)`;
    }
  });
  textObserver.disconnect();
  for (const element of document.querySelectorAll(".text-site-face")) textObserver.observe(element);
  for (const img of root.querySelectorAll("img[data-icon-fallback]")) img.onerror = () => {
    const parent = img.parentElement;
    if (!parent) return;
    const text = document.createElement("span");
    text.className = "letter-icon";
    text.textContent = img.dataset.iconFallback;
    parent.classList.add("text-site-face");
    img.replaceWith(text);
    textObserver.observe(parent);
  };
  hydrateIconImages(root);
}
