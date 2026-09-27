import { esc, icon, modal, closeModal, toast } from "./ui.js";
import { widgetCatalog } from "./model.js";
import {
  fetchOriginalCatalog,
  newOriginalWidget,
  originalWidgetURL,
} from "./original-widgets.js";

let catalog;
export function openWidgetStore(addOriginal) {
  const dialog = modal(
    "添加组件",
    `<div class="widget-store-tabs" role="tablist" aria-label="组件来源">
    <button role="tab" aria-selected="true" data-source="local">本地组件</button>
    <button role="tab" aria-selected="false" data-source="original">原版组件仓库</button>
    </div><section id="widget-store-content"></section>`,
    { wide: true },
  );
  const content = dialog.querySelector("#widget-store-content");
  let request = 0;
  function local() {
    request++;
    content.innerHTML = `<div class="widget-catalog">${widgetCatalog.map((w) => `<button data-action="create-widget" data-type="${w.type}"><span class="catalog-icon">${icon(w.icon, 28)}</span><div><strong>${w.name}</strong><small>${w.description}</small></div><span class="catalog-add">＋</span></button>`).join("")}</div>`;
  }
  async function original(reload = false) {
    const current = ++request;
    content.innerHTML =
      '<p class="muted" role="status">正在读取原版组件仓库…</p>';
    try {
      if (!catalog || reload) catalog = await fetchOriginalCatalog();
      if (current !== request || !content.isConnected || !dialog.open) return;
      content.innerHTML = `<p class="store-note">来自 iTab 原版仓库。在线组件可直接添加；原版内置组件需要适配后才能使用。</p>
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
                `<button type="button" data-component="${esc(w.component)}" ${w.available ? "" : "disabled"}><span class="catalog-icon">${w.image ? `<img src="${esc(w.image)}" alt="" loading="lazy" referrerpolicy="no-referrer">` : icon("grid", 28)}</span><div><strong>${esc(w.name)}</strong><small>${esc(w.description || "原版小组件")}</small><em>${w.available ? "原版在线组件" : "原版内置组件 · 待适配"}</em></div><span class="catalog-add">${w.available ? "＋" : "—"}</span></button>`,
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
      content.innerHTML = `<p class="store-note" role="alert">${esc(error.message)}。请检查网络后重试，本地组件仍可使用。</p><button type="button" class="store-retry">重试</button>`;
      content.querySelector(".store-retry").onclick = () => original(true);
    }
  }
  dialog.querySelectorAll("[data-source]").forEach((button) => {
    button.onclick = () => {
      dialog
        .querySelectorAll("[data-source]")
        .forEach((b) => b.setAttribute("aria-selected", String(b === button)));
      if (button.dataset.source === "original") original();
      else local();
    };
  });
  local();
}

export function openOriginalWidget(item) {
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
