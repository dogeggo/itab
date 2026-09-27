import { originalIcons } from "../original/appearance/icons.js";
export const esc = (value) =>
  String(value ?? "").replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
const paths = {
  home: "M3 10 12 3l9 7v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z M9 21v-7h6v7",
  code: "m8 5-6 7 6 7m8-14 6 7-6 7m-3-16-2 18",
  palette:
    "M12 3a9 9 0 1 0 0 18h1a2 2 0 0 0 1-4 2 2 0 0 1 2-3h2a3 3 0 0 0 3-3 9 9 0 0 0-9-8 M7 9h.01M10 6h.01M15 7h.01M18 10h.01",
  product: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18 M9 16V8h5a3 3 0 0 1 0 6H9",
  sparkles: "m12 3 3 6 6 3-6 3-3 6-3-6-6-3 6-3z",
  game: "M7 7h10c3 0 5 11 3 12-2 2-4-4-6-3h-4c-2-1-4 5-6 3-2-1 0-12 3-12 M6 11h5M8.5 8.5v5M16 11h.01M18 14h.01",
  plus: "M12 5v14M5 12h14",
  close: "m6 6 12 12M6 18 18 6",
  settings:
    "M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8 M9 3h6l1 3 3 1 2 5-2 5-3 1-1 3H9l-1-3-3-1-2-5 2-5 3-1z",
  cloud: "M6 18a4 4 0 0 1-1-8 7 7 0 0 1 13-1 4.5 4.5 0 0 1 0 9z",
  search: "M10.5 18a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15m6-2 5 5",
  chevron: "m9 5 7 7-7 7",
  down: "m6 9 6 6 6-6",
  image: "M3 3h18v18H3z M3 16l5-5 5 5 3-3 5 5M15 7h.01",
  leaf: "M20 3C8 2 2 8 5 15c8 6 15-1 15-12ZM3 21 16 8",
  grid: "M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z",
  calendar: "M4 5h16v16H4zM4 10h16M8 3v4M16 3v4",
  trending: "m3 17 6-6 4 4 8-10m-6 0h6v6",
  heart: "M20 5a5 5 0 0 0-8 1 5 5 0 0 0-8-1c-6 6 8 15 8 15S26 11 20 5z",
  note: "M5 3h14v18H5zM8 8h8M8 12h8M8 16h5",
  check: "m5 12 4 4L20 5",
  coffee:
    "M4 8h13v9a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4zM17 9h2a3 3 0 0 1 0 6h-2M7 3v2M12 2v3",
  film: "M3 3h18v18H3zM7 3v18M17 3v18M3 8h4M3 16h4M17 8h4M17 16h4",
  calculator: "M5 2h14v20H5zM8 5h8v4H8zM8 13h1M14 13h1M8 17h1M14 17h1",
  timer: "M12 5a8 8 0 1 0 0 16 8 8 0 0 0 0-16 M12 9v4l3 2M9 2h6",
  water: "M12 2s8 9 8 14a8 8 0 0 1-16 0C4 11 12 2 12 2z",
  folder: "M3 6h7l2 3h9v12H3z",
  edit: "m15 4 5 5M4 20l5-1L21 7l-5-5L4 14z",
  trash: "M3 6h18M9 3h6M6 6l1 15h10l1-15M10 10v7M14 10v7",
  external: "M14 3h7v7M21 3 10 14M10 4H4v16h16v-6",
  download: "M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5",
  upload: "M12 17V5m-5 5 5-5 5 5M4 17v4h16v-4",
  sun: "M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1 1M18 18l1 1M5 19l1-1M18 6l1-1",
  moon: "M20 16A9 9 0 0 1 8 4 9 9 0 1 0 20 16",
  refresh: "M20 7v5h-5M4 17v-5h5M5 8a8 8 0 0 1 14-2M19 16a8 8 0 0 1-14 2",
  arrow: "M4 12h16m-6-6 6 6-6 6",
  user: "M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8M4 21v-3a8 8 0 0 1 16 0v3",
  book: "M4 3h16v18l-8-5-8 5z",
  move: "M12 2v20M2 12h20M9 5l3-3 3 3M9 19l3 3 3-3M5 9l-3 3 3 3M19 9l3 3-3 3",
};
export function icon(name, size = 22) {
  const upstream = originalIcons[name];
  if (upstream)
    return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${upstream.filled ? "currentColor" : "none"}" stroke="${upstream.filled ? "none" : "currentColor"}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${upstream.nodes
      .map(
        ([tag, attrs]) =>
          `<${tag} ${Object.entries(attrs)
            .filter(([key]) => key !== "key")
            .map(([key, value]) => `${key}="${esc(value)}"`)
            .join(" ")}/>`,
      )
      .join("")}</svg>`;
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${paths[name] || paths.grid}"/></svg>`;
}
export function button(action, label, iconName, cls = "") {
  return `<button type="button" class="${cls}" data-action="${action}" title="${esc(label)}" aria-label="${esc(label)}">${iconName ? icon(iconName) : esc(label)}</button>`;
}
export function toast(message, error = false) {
  const n = document.createElement("div");
  n.className = "toast" + (error ? " error" : "");
  n.textContent = message;
  document.querySelector("#toasts").append(n);
  setTimeout(() => n.remove(), 4500);
}
export function modal(title, content, { wide = false } = {}) {
  const el = document.querySelector("#modal");
  el.className = content.includes("native-widget-dialog")
    ? "native-dialog"
    : content.includes("folder-grid")
      ? "folder-dialog"
      : content.includes("widget-store-content")
        ? "store-dialog"
        : "";
  el.innerHTML = `<header class="modal-header"><h2 id="modal-title">${esc(title)}</h2>${button("close-modal", "关闭", "close", "icon-btn")}</header><div class="modal-body ${wide ? "wide" : ""}">${content}</div>`;
  if (!el.open) el.showModal();
  el.oncancel = (event) => {
    event.preventDefault();
    void closeModal();
  };
  return el;
}
export async function closeModal() {
  const dialog = document.querySelector("#modal");
  const native = dialog.querySelector(".native-widget-dialog");
  if (native) {
    try {
      await native.contentWindow.__nativeFlush?.();
      // 先把最新数据送回仍在运行的卡片，再释放弹窗对数据的编辑权。
      await native.contentWindow.__nativeSession?.syncCards();
    } catch (error) {
      toast("原版组件保存失败：" + error.message, true);
      return;
    }
  }
  dialog.close();
  if (native) window.dispatchEvent(new Event("native-widget-saved"));
}
export function confirmDialog(title, message, onConfirm) {
  const d = modal(
    title,
    `<p class="confirm-message">${esc(message)}</p><div class="form-actions"><button type="button" data-action="close-modal">取消</button><button class="primary" id="confirm-yes">确认</button></div>`,
  );
  d.querySelector("#confirm-yes").onclick = async (e) => {
    e.target.disabled = true;
    try {
      await onConfirm();
      if (d.open) d.close();
    } catch (err) {
      toast(err.message, true);
      e.target.disabled = false;
    }
  };
}
export function fileAsDataURL(file) {
  if (!file?.type.match(/^image\/(png|jpeg|webp|gif)$/))
    throw new Error("请选择 PNG、JPG、WebP 或 GIF 图片");
  if (file.size > 8 * 1024 * 1024) throw new Error("图片不能超过 8 MB");
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error("图片读取失败"));
    reader.readAsDataURL(file);
  });
}
export function downloadJSON(data, name) {
  const url = URL.createObjectURL(
    new Blob([JSON.stringify(data, null, 2)], { type: "application/json" }),
  );
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 10000);
}
export function formatDate(value) {
  return new Date(value).toLocaleString("zh-CN", { hour12: false });
}
