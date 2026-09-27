import { esc, icon, modal, closeModal, toast } from "./ui.js";
import { nativeFrameURL, flushNativeCards } from "./native-bridge.js";
import {
  fetchOriginalCatalog,
  newOriginalWidget,
  originalWidgetURL,
  parseCatalog,
  hasNativeCard,
} from "./original-widgets.js";

let catalog;
let catalogOffline = false;
let openingNative = false;
export function openWidgetStore(addOriginal) {
  const dialog = modal(
    "添加组件",
    `<section id="widget-store-content"></section>`,
    { wide: true },
  );
  const content = dialog.querySelector("#widget-store-content");
  let request = 0;
  async function original(reload = false) {
    const current = ++request;
    content.innerHTML =
      '<p class="muted" role="status">正在读取原版组件仓库…</p>';
    try {
      let offline = catalogOffline;
      if (!catalog || reload) {
        try {
          catalog = await fetchOriginalCatalog();
          catalogOffline = offline = false;
        } catch {
          catalog = parseCatalog({
            code: 200,
            data: await (await fetch("./assets/native-catalog.json")).json(),
          });
          catalogOffline = offline = true;
        }
      }
      if (current !== request || !content.isConnected || !dialog.open) return;
      content.innerHTML = `<p class="store-note">${offline ? "原版仓库暂不可达，显示随包提供的免费组件。" : "来自 NewTab 原版仓库，显示已审核的免费组件。"}内置组件使用原版界面并保存到主页备份，在线组件由原站运行。</p>
        <div class="store-filter"><input type="search" aria-label="搜索原版组件" placeholder="搜索原版组件"><label><input type="checkbox" aria-label="只看可直接使用">只看可直接使用</label><button type="button" class="store-refresh">刷新</button></div>
        <p class="store-count" role="status"></p><div class="widget-catalog original-catalog"></div>`;
      const search = content.querySelector('input[type="search"]');
      const available = content.querySelector('input[type="checkbox"]');
      const list = content.querySelector(".original-catalog");
      function draw() {
        const query = search.value.trim().toLowerCase();
        const rows = catalog.filter(
          (w) =>
            (!available.checked || w.available) &&
            `${w.name} ${w.component} ${w.description}`
              .toLowerCase()
              .includes(query),
        );
        content.querySelector(".store-count").textContent =
          `共 ${catalog.length} 项，${catalog.filter((w) => w.available).length} 项可直接使用；当前显示 ${rows.length} 项`;
        list.innerHTML =
          rows
            .map(
              (w) =>
                `<button type="button" data-component="${esc(w.component)}" ${w.available ? "" : "disabled"}><span class="catalog-icon">${w.image ? `<img src="${esc(w.image)}" alt="" loading="lazy" referrerpolicy="no-referrer">` : icon("grid", 28)}</span><div><strong>${esc(w.name)}</strong><small>${esc(w.description || "原版小组件")}</small><em>${w.runtime === "native" ? "原版内置组件" : w.available ? "原版在线组件" : "暂不可用"}</em></div><span class="catalog-add">${w.available ? "＋" : "—"}</span></button>`,
            )
            .join("") || '<p class="muted">没有找到匹配的组件</p>';
      }
      search.oninput = draw;
      available.onchange = draw;
      content.querySelector(".store-refresh").onclick = () => original(true);
      list.onclick = (event) => {
        const button = event.target.closest("button[data-component]");
        if (!button || button.disabled) return;
        const row = catalog.find(
          (w) => w.component === button.dataset.component,
        );
        addOriginal(newOriginalWidget(row));
        closeModal();
        toast(`已添加原版组件：${row.name}`);
      };
      draw();
    } catch (error) {
      if (current !== request || !content.isConnected) return;
      content.innerHTML = `<p class="store-note" role="alert">${esc(error.message)}。请检查网络后重试。</p><button type="button" class="store-retry">重试</button>`;
      content.querySelector(".store-retry").onclick = () => original(true);
    }
  }
  original();
}

export async function openOriginalWidget(item) {
  if (item.type === "native") {
    // 随包内置组件依赖同源宿主桥接；scripts + same-origin 无法提供沙箱隔离。
    // 仅远程在线组件使用下方的 sandbox。
    // 保留卡片及其运行状态，先保存当前组件尚未提交的编辑。
    if (openingNative) return;
    openingNative = true;
    try {
      await flushNativeCards(item.config.component);
      const dialog = modal(
        item.name,
        `<iframe class="original-widget-frame native-widget-dialog" data-native-id="${esc(item.id)}" title="${esc(item.name)}原版组件" src="${esc(nativeFrameURL(item, "dialog"))}" allow="clipboard-write; fullscreen; camera; microphone; display-capture"></iframe>`,
        { wide: true },
      );
      const frame = dialog.querySelector("iframe");
      dialog.addEventListener("close", () => frame.remove(), { once: true });
    } catch (error) {
      toast("原版组件打开失败：" + error.message, true);
    } finally {
      openingNative = false;
    }
    return;
  }
  const url = originalWidgetURL(
    item.config.component,
    document.documentElement.dataset.theme,
  );
  const dialog = modal(
    item.name,
    `<div class="original-widget-toolbar"><span>原版在线页面 · 内部数据由原站点保存，不包含在主页备份中</span><a href="${esc(url)}" target="_blank" rel="noopener noreferrer">在新标签页打开 ↗</a></div><div class="original-widget-viewport"><iframe data-component="${esc(item.config.component)}" class="original-widget-frame" title="${esc(item.name)}" src="${esc(url)}" sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox" referrerpolicy="no-referrer" allow="fullscreen"></iframe></div><p class="store-note">页面加载依赖原站点；若长时间空白，可在新标签页打开。</p>`,
    { wide: true },
  );
  const frame = dialog.querySelector("iframe");
  // 关闭弹窗时结束第三方页面及音视频，保留同源存储供下次打开使用。
  dialog.addEventListener("close", () => frame.remove(), { once: true });
}

export function widgetHTML(item) {
  if(hasNativeCard(item)) {
      return `<iframe class="native-widget-card" data-native-id="${esc(item.id)}" title="${esc(item.name)}原版卡片" src="${esc(nativeFrameURL(item))}" loading="lazy"></iframe>`;
  }
  if(item.type === "original") {
      return `<div class="original-widget-icon">${item.image ? `<img src="${esc(item.image)}" alt="" draggable="false" referrerpolicy="no-referrer">` : icon("grid", 30)}</div>`;
  }
  throw new Error("未知原版组件");
}
