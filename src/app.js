import {
  createState,
  validateState,
  clone,
  uid,
  safeURL,
  searchURL,
  moveItem,
} from "./model.js";
import {
  read,
  write,
  saveState,
  restoreState,
  onExternalChange,
  flush,
} from "./storage.js";
import {
  esc,
  icon,
  button,
  toast,
  modal,
  closeModal,
  confirmDialog,
} from "./ui.js";
import { siteFace, fitSiteText } from "./site-icon.js";
import { openIconEditor } from "./icon-editor.js";
import { clockParts } from "./clock.js";
import { widgetHTML } from "./widget-store.js";
import {
  initSettings,
  openSettings,
  setWallpaper,
  refreshDriveConnection,
  clearDriveConnection,
} from "./settings.js";
import { getGoogleProfile } from "./drive.js";
import { openWidgetStore } from "./widget-store.js";
import {
  initNativeBridge,
  refreshNativeThemes,
  nativeUtility,
} from "./native-bridge.js";
import { timeFonts } from "./appearance-model.js";
import { openOriginalWidget } from "./widget-store.js";
let state,
  seed,
  editing = false,
  dragId = null,
  quoteIndex = 0;
let calendarDay = new Date().toDateString();
let googleProfile = null,
  googleProfileRequest = 0;
const accountChannel =
  typeof BroadcastChannel !== "undefined"
    ? new BroadcastChannel("newtab-google-account")
    : null;
const $ = (selector) => document.querySelector(selector);
const quotes = [
  "我的太阳西沉是为了再度升起。",
  "生活明朗，万物可爱。",
  "行到水穷处，坐看云起时。",
  "心有山海，静而不争。",
  "每一个不曾起舞的日子，都是对生命的辜负。",
];
const fonts = new Set(timeFonts);
const currentGroup = () =>
  state.groups.find((g) => g.id === state.activeGroup) || state.groups[0];
function findItem(id) {
  for (const group of state.groups) {
    for (const item of group.items) {
      if (item.id === id) return { item, list: group.items, group };
      if (item.kind === "folder") {
        const child = item.children.find((i) => i.id === id);
        if (child)
          return { item: child, list: item.children, group, folder: item };
      }
    }
  }
  return null;
}
function save() {
  return saveState(state).catch((e) => {
    toast("保存失败：" + e.message, true);
    throw e;
  });
}
function applyTheme() {
  const s = state.settings,
    root = document.documentElement;
  root.dataset.theme = s.theme.system
    ? matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
    : s.theme.mode;
  const vars = {
    "--primary": s.theme.color,
    "--icon-size": s.icon.size + "px",
    "--icon-radius": s.icon.radius + "px",
    "--gap-x": s.icon.gapX + "px",
    "--gap-y": s.icon.gapY + "px",
    "--icon-opacity": s.icon.opacity,
    "--label-size": s.icon.nameSize + "px",
    "--label-color": s.icon.nameColor,
    "--search-height": s.search.height + "px",
    "--search-radius": s.search.radius + "px",
    "--search-opacity": s.search.opacity,
    "--search-width": s.search.width + "px",
    "--time-size": s.time.size + "px",
    "--time-color": s.time.color,
    "--time-weight": s.time.bold ? 600 : 400,
    "--time-font":
      s.time.font === "Arial"
        ? "iTabArial"
        : fonts.has(s.time.font)
          ? s.time.font
          : "HarmonyOS_Sans",
    "--sidebar-opacity": s.sidebar.opacity,
    "--sidebar-width": s.sidebar.width + "px",
  };
  for (const [k, v] of Object.entries(vars)) root.style.setProperty(k, v);
  root.dataset.layout = s.layout.view;
  root.dataset.labels = s.icon.name ? "show" : "hide";
  root.dataset.sidebar = s.sidebar.placement;
  root.dataset.autoHide = String(s.sidebar.autoHide);
  const wallpaper = $("#wallpaper");
  let video = wallpaper.querySelector("video");
  if (s.wallpaper.type === "video") {
    if (!video) {
      video = document.createElement("video");
      video.muted = true;
      video.loop = true;
      video.autoplay = true;
      video.playsInline = true;
      wallpaper.append(video);
    }
    if (video.getAttribute("src") !== s.wallpaper.src)
      video.src = s.wallpaper.src;
    video.play().catch(() => {});
  } else video?.remove();
  if (s.wallpaper.type === "image") {
    wallpaper.style.backgroundImage = `url(${JSON.stringify(s.wallpaper.src)})`;
    wallpaper.style.backgroundColor = "#172535";
  } else {
    wallpaper.style.backgroundImage =
      s.wallpaper.type === "gradient" ? s.wallpaper.src : "none";
    wallpaper.style.backgroundColor =
      s.wallpaper.type === "color" ? s.wallpaper.src : "#172535";
  }
  wallpaper.style.filter = `blur(${s.wallpaper.blur}px)`;
  wallpaper.style.transform = s.wallpaper.blur ? "scale(1.08)" : "none";
  $("#wallpaper-mask").style.background = `rgba(0,0,0,${s.wallpaper.mask})`;
  $("#clock").hidden = !s.time.show;
  $("#search").hidden = !s.search.show;
  $("#quote").hidden = !s.layout.quote;
  refreshNativeThemes();
}
function updateClock() {
  if (!state) return;
  const today = new Date().toDateString();
  if (today !== calendarDay) {
    calendarDay = today;
    renderGrid();
  }
  const date = clockParts(state.settings.time);
  $("#clock-time").textContent = date.time;
  $("#clock-date").textContent = date.date;
}
function renderSidebar() {
  $("#sidebar").innerHTML =
    `<button class="sidebar-profile" data-action="backup" title="Google 备份" aria-label="备份"><span class="avatar">${icon("user", 22)}</span></button><nav>${state.groups.map((g) => `<button class="sidebar-group ${g.id === state.activeGroup ? "active" : ""}" data-action="switch-group" data-group="${esc(g.id)}" title="${esc(g.name)}">${icon(g.icon)}<span>${esc(g.name)}</span></button>`).join("")}${button("add-group", "添加分组", "plus", "sidebar-add")}</nav><div class="sidebar-bottom">${button("wallpaper", "主题壁纸", "image")}${button("settings", "设置", "settings")}</div>`;
  renderGoogleProfile();
}
function renderGoogleProfile() {
  const button = $(".sidebar-profile");
  if (!button) return;
  button.title = googleProfile?.displayName
    ? `${googleProfile.displayName} · Google 备份`
    : "Google 备份";
  const avatar = button.querySelector(".avatar");
  avatar.innerHTML = icon("user", 22);
  if (googleProfile?.photoURL) {
    const img = document.createElement("img");
    img.alt = "";
    img.referrerPolicy = "no-referrer";
    img.src = googleProfile.photoURL;
    avatar.append(img);
  }
}
async function refreshGoogleProfile(connected = true) {
  const request = ++googleProfileRequest;
  let profile = null;
  if (connected) {
    try {
      profile = await getGoogleProfile();
    } catch {
      // 静默读取账号；未授权或离线时保留默认头像，不影响主页和备份。
    }
  }
  // 断开授权或切换账号后，不允许旧请求把上一账号的头像写回来。
  if (request !== googleProfileRequest) return;
  googleProfile = profile;
  renderGoogleProfile();
}
function renderSearch() {
  const value = $("#search-input")?.value || "",
    s = state.settings,
    e = s.engines.find((e) => e.id === s.search.engine) || s.engines[0];
  $("#search").innerHTML =
    `<form id="search-form" role="search"><button type="button" class="engine-button" data-action="engine-picker" aria-label="切换搜索引擎" title="${esc(e.name)}"><span class="engine-logo">${e.id === "baidu" ? '<img src="' + (seed.flatMap((g) => g.items).find((i) => i.name === "百度")?.image || "") + '" alt="百度">' : esc(e.mark || e.name[0])}</span>${icon("down", 10)}</button><input id="search-input" type="search" autocomplete="off" placeholder="输入搜索内容" aria-label="搜索内容" maxlength="500" value="${esc(value)}"><button class="search-submit" aria-label="搜索">${icon("search", 22)}</button></form><div id="search-panel" hidden></div>`;
  $("#search-form").onsubmit = (e) => {
    e.preventDefault();
    submitSearch($("#search-input").value);
  };
  $("#search-input").oninput = renderSearchHistory;
  $("#search-input").onfocus = renderSearchHistory;
}
function renderSearchHistory() {
  const holder = $("#search-panel");
  if (!holder) return;
  const term = $("#search-input").value.toLowerCase();
  const history = state.settings.search.history
    ? state.history.filter((h) => h.toLowerCase().includes(term)).slice(0, 6)
    : [];
  const sites = term
    ? state.groups
        .flatMap((g) =>
          g.items.flatMap((i) => (i.kind === "folder" ? i.children : [i])),
        )
        .filter((i) => i.kind === "site" && i.name.toLowerCase().includes(term))
        .slice(0, 4)
    : [];
  holder.innerHTML =
    (history.length ? '<small class="panel-heading">搜索历史</small>' : "") +
    history
      .map(
        (h) =>
          `<button data-action="search-history" data-query="${esc(h)}">${icon("timer", 16)}<span>${esc(h)}</span>${icon("arrow", 14)}</button>`,
      )
      .join("") +
    (sites.length ? '<small class="panel-heading">我的网站</small>' : "") +
    sites
      .map(
        (i) =>
          `<button data-action="open-url" data-url="${esc(i.url)}">${icon("external", 16)}<span>${esc(i.name)}</span></button>`,
      )
      .join("");
  holder.hidden = !history.length && !sites.length;
}
function submitSearch(query) {
  const value = query.trim();
  if (!value) return;
  const engine = state.settings.engines.find(
    (e) => e.id === state.settings.search.engine,
  );
  if (state.settings.search.history) {
    state.history = [value, ...state.history.filter((q) => q !== value)].slice(
      0,
      30,
    );
    save();
  }
  $("#search-panel").hidden = true;
  openURL(searchURL(engine, value), state.settings.open.searchBlank);
}
function openURL(url, blank = state.settings.open.iconBlank) {
  const valid = safeURL(url, { internal: true });
  if (!valid) {
    toast("网址不可用", true);
    return;
  }
  if (valid.startsWith("chrome://") || valid.startsWith("edge://")) {
    if (!globalThis.chrome?.runtime?.id) {
      toast("浏览器内部页面需要在扩展中打开");
      return;
    }
    const browserUrl = navigator.userAgent.includes("Edg/")
      ? valid.replace("chrome://", "edge://")
      : valid.replace("edge://", "chrome://");
    if (blank) chrome.tabs.create({ url: browserUrl });
    else chrome.tabs.update({ url: browserUrl });
    return;
  }
  if (blank) window.open(valid, "_blank", "noopener,noreferrer");
  else location.assign(valid);
}
function itemHTML(item) {
  const [w, h] = (item.size || "1x1").split("x").map(Number);
  let face, action;
  if (item.kind === "widget") {
    face = widgetHTML(item, state);
    action = "widget-open";
  } else if (item.kind === "folder") {
    face = `<div class="folder-preview">${item.children
      .slice(0, 9)
      .map((i) => siteFace(i))
      .join("")}${!item.children.length ? icon("folder", 32) : ""}</div>`;
    action = "open-folder";
  } else if (item.kind === "action") {
    face = item.image
      ? siteFace(item)
      : icon(item.action === "settings" ? "settings" : "plus", 30);
    action = item.action;
  } else {
    face = siteFace(item);
    action = "open-site";
  }
  return `<article class="desktop-item ${editing ? "editing" : ""}" data-item-id="${esc(item.id)}" draggable="true" style="--span-x:${w};--span-y:${h}"><div class="tile ${item.kind === "widget" ? "widget widget-" + item.type : item.kind === "folder" ? "folder-tile" : "site-tile"}" role="button" tabindex="0" aria-label="${esc(item.name)}" data-action="${action}">${face}</div><span class="item-label">${esc(item.name)}</span></article>`;
}
function renderGrid() {
  const group = currentGroup();
  $("#grid").innerHTML =
    group.items.map(itemHTML).join("") +
    `<article class="desktop-item add-item"><button class="tile add-tile" data-action="add" aria-label="添加图标">${icon("plus", 28)}</button><span class="item-label">添加图标</span></article>`;
  $("#grid").classList.toggle("sparse", !state.settings.icon.autoSort);
  fitSiteText();
  sizeGrid();
}
function syncNativeGrid() {
  // 组件弹窗只会更新配置/名称或添加项目，保留已有节点，避免 iframe 被卸载。
  const grid = $("#grid");
  const existing = new Map([...grid.querySelectorAll(":scope > [data-item-id]")]
    .map((element) => [element.dataset.itemId, element]));
  for (const item of currentGroup().items) {
    const element = existing.get(item.id);
    if (!element) {
      grid.querySelector(".add-item").insertAdjacentHTML("beforebegin", itemHTML(item));
      continue;
    }
    element.querySelector(".item-label").textContent = item.name;
    element.querySelector(".tile").setAttribute("aria-label", item.name);
  }
  sizeGrid();
}
function sizeGrid() {
  if (!state) return;
  const s = state.settings.icon;
  const maxWidth =
    s.widthUnit === "%"
      ? (window.innerWidth * (s.widthPercent || 72)) / 100
      : s.width;
  const available = Math.min(window.innerWidth - 100, maxWidth - 100);
  const cols = Math.max(
    2,
    Math.floor((available + s.gapX) / (s.size + s.gapX)),
  );
  $("#grid").style.setProperty("--columns", cols);
  $("#grid").style.width = cols * s.size + (cols - 1) * s.gapX + "px";
  $("#grid").style.setProperty("--max-span", cols);
}
function render() {
  applyTheme();
  renderSidebar();
  $("#topbar").innerHTML =
    `<span class="topbar-name">${editing ? "拖动调整顺序 · 右键编辑" : ""}</span><div>${button("add-widget", "添加组件", "plus", "topbar-button")}${button("toggle-edit", editing ? "完成编辑" : "编辑主页", editing ? "check" : "grid", "topbar-button")}${button("settings", "主页设置", "settings", "topbar-button")}${button("toggle-layout", state.settings.layout.view === "simple" ? "切换到组件模式" : "切换到极简模式", "leaf", "topbar-button")}</div>`;
  renderSearch();
  renderGrid();
  updateClock();
  $("#quote").innerHTML =
    `<button data-action="next-quote" title="点击切换一言">「 ${quotes[quoteIndex % quotes.length]} 」</button>`;
}
function renderAppearance() {
  applyTheme();
  sizeGrid();
  updateClock();
}
function popover(html, x, y) {
  const root = $("#popover-root");
  root.innerHTML = `<div class="popover">${html}</div>`;
  const p = root.firstElementChild;
  const rect = p.getBoundingClientRect();
  p.style.left = Math.max(6, Math.min(x, innerWidth - rect.width - 10)) + "px";
  p.style.top = Math.max(6, Math.min(y, innerHeight - rect.height - 10)) + "px";
}
function closePopover() {
  $("#popover-root").innerHTML = "";
}
function enginePicker() {
  const r = $("#search-form").getBoundingClientRect();
  popover(
    `<div class="engine-picker">${state.settings.engines.map((e) => `<button data-action="choose-engine" data-engine="${esc(e.id)}" class="${state.settings.search.engine === e.id ? "selected" : ""}"><span>${esc(e.mark || e.name[0])}</span>${esc(e.name)}${state.settings.search.engine === e.id ? icon("check", 16) : ""}</button>`).join("")}<button data-action="search-settings">${icon("settings", 17)}管理搜索引擎</button></div>`,
    r.x,
    r.bottom + 8,
  );
}
function itemMenu(id, x, y) {
  const found = findItem(id);
  if (!found) return;
  const i = found.item;
  const option = (action, label, ic) =>
    `<button data-action="${action}" data-id="${esc(id)}">${icon(ic, 17)}${label}</button>`;
  popover(
    `<div class="context-menu">${i.kind === "site" ? option("open-new", "在新标签页打开", "external") : ""}${option("edit-item", i.kind === "widget" ? "配置组件" : "编辑图标", "edit")}${option("move-item", "移动到分组 / 文件夹", "move")}${option("resize-item", "图标尺寸", "grid")}<hr>${option("delete-item", "删除", "trash")}</div>`,
    x,
    y,
  );
}
function addDialog() {
  const d = modal(
    "添加到主页",
    `<div class="add-options"><button data-action="add-site">${icon("external", 32)}<strong>添加网址</strong><small>你常去的网站，一键直达</small></button><button data-action="add-widget">${icon("grid", 32)}<strong>添加组件</strong><small>让主页更加实用</small></button><button data-action="add-folder">${icon("folder", 32)}<strong>新建文件夹</strong><small>归类你的常用网站</small></button></div>`,
  );
  return d;
}
function widgetPicker() {
  openWidgetStore((item) => {
    currentGroup().items.push(item);
    save();
    render();
  });
}
function editSite(id) {
  const found = id ? findItem(id) : null;
  // 编辑保留当前分组/文件夹位置，分组移动继续使用右键菜单。
  const list = found?.list || currentGroup().items;
  openIconEditor({
    item: found?.item,
    async onSave(next) {
      const index = found ? list.indexOf(found.item) : list.length;
      if (found && index < 0) throw new Error("图标已被移除，请重新打开编辑器");
      if (found) list.splice(index, 1, next);
      else list.push(next);
      try { await save(); }
      catch (error) {
        if (found) list.splice(index, 1, found.item);
        else list.splice(index, 1);
        throw error;
      }
      render();
    },
  });
}
function editGroup(id) {
  const group = state.groups.find((g) => g.id === id);
  const d = modal(
    group ? "编辑分组" : "添加分组",
    `<form id="group-form"><label class="field">分组名称<input name="name" value="${esc(group?.name || "")}" maxlength="16" required></label><label class="field">分组图标<select name="icon">${[
      ["home", "主页"],
      ["code", "代码"],
      ["palette", "设计"],
      ["product", "产品"],
      ["sparkles", "灵感"],
      ["game", "游戏"],
      ["book", "书签"],
      ["folder", "文件夹"],
    ]
      .map(
        ([v, n]) =>
          `<option value="${v}" ${group?.icon === v ? "selected" : ""}>${n}</option>`,
      )
      .join(
        "",
      )}</select></label><div class="form-actions">${group && state.groups.length > 1 ? '<button type="button" class="danger" id="delete-group">删除分组</button>' : ""}<button class="primary">保存</button></div></form>`,
  );
  d.querySelector("form").onsubmit = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    if (!data.name.trim()) return;
    if (group)
      Object.assign(group, { name: data.name.trim(), icon: data.icon });
    else {
      const g = {
        id: uid(),
        name: data.name.trim(),
        icon: data.icon,
        items: [],
      };
      state.groups.push(g);
      state.activeGroup = g.id;
    }
    await save();
    render();
    closeModal();
  };
  d.querySelector("#delete-group")?.addEventListener("click", () => {
    confirmDialog(
      "删除分组",
      `删除“${group.name}”分组，并将其中的图标移动到第一个其他分组。`,
      async () => {
        const target = state.groups.find((g) => g.id !== group.id);
        target.items.push(...group.items);
        state.groups = state.groups.filter((g) => g.id !== group.id);
        if (state.activeGroup === group.id) state.activeGroup = target.id;
        await save();
        render();
      },
    );
  });
}
function editFolder(id) {
  const found = id ? findItem(id) : null;
  const d = modal(
    found ? "编辑文件夹" : "新建文件夹",
    `<form><label class="field">文件夹名称<input name="name" value="${esc(found?.item.name || "文件夹")}" maxlength="30" required></label><p class="muted">创建后可通过图标右键菜单，将网站移动到文件夹。</p><div class="form-actions"><button class="primary">保存</button></div></form>`,
  );
  d.querySelector("form").onsubmit = async (e) => {
    e.preventDefault();
    const name = new FormData(e.target).get("name").trim();
    if (!name) return;
    if (found) found.item.name = name;
    else
      currentGroup().items.push({
        id: uid(),
        kind: "folder",
        name,
        size: "2x2",
        children: [],
      });
    await save();
    render();
    closeModal();
  };
}
function openFolder(item) {
  const d = modal(
    item.name,
    `<div class="folder-grid">${item.children.map((i) => `<button data-action="folder-site" data-id="${esc(i.id)}" title="右键可以编辑">${siteFace(i)}<span>${esc(i.name)}</span></button>`).join("") || '<p class="empty">文件夹是空的。右键网站图标，选择“移动到分组 / 文件夹”。</p>'}</div>`,
    { wide: true },
  );
  fitSiteText(d);
}
function moveDialog(id) {
  const f = findItem(id);
  if (!f) return;
  const destinations = state.groups.flatMap((g) => [
    { value: "g:" + g.id, label: g.name },
    ...(f.item.kind === "site"
      ? g.items
          .filter((i) => i.kind === "folder")
          .map((i) => ({ value: "f:" + i.id, label: g.name + " / " + i.name }))
      : []),
  ]);
  const d = modal(
    "移动图标",
    `<form><label class="field">将“${esc(f.item.name)}”移动到<select name="destination">${destinations.map((t) => `<option value="${esc(t.value)}">${esc(t.label)}</option>`).join("")}</select></label><div class="form-actions"><button class="primary">移动</button></div></form>`,
  );
  d.querySelector("form").onsubmit = async (e) => {
    e.preventDefault();
    const value = new FormData(e.target).get("destination"),
      id = value.slice(2);
    const target = value.startsWith("g:")
      ? state.groups.find((g) => g.id === id).items
      : findItem(id).item.children;
    f.list.splice(f.list.indexOf(f.item), 1);
    target.push(f.item);
    await save();
    render();
    closeModal();
  };
}
function resizeDialog(id) {
  const f = findItem(id);
  if (!f) return;
  const d = modal(
    "图标尺寸",
    `<div class="size-choices">${["1x1", "2x1", "1x2", "2x2", "4x2"].map((size) => `<button data-size="${size}" class="${f.item.size === size ? "selected" : ""}">${size.replace("x", " × ")}</button>`).join("")}</div>`,
  );
  d.querySelectorAll("[data-size]").forEach(
    (b) =>
      (b.onclick = () => {
        f.item.size = b.dataset.size;
        save();
        render();
        closeModal();
      }),
  );
}
document.addEventListener("click", async (e) => {
  if (!state) return;
  const target = e.target.closest("[data-action]");
  if (!target) {
    if (!e.target.closest("#popover-root")) closePopover();
    if (!e.target.closest("#search") && $("#search-panel"))
      $("#search-panel").hidden = true;
    return;
  }
  const action = target.dataset.action;
  const id =
    target.dataset.id || target.closest("[data-item-id]")?.dataset.itemId;
  const found = id ? findItem(id) : null;
  const item = found?.item;
  if (!e.target.closest("#popover-root")) closePopover();
  try {
    switch (action) {
      case "settings":
        openSettings();
        break;
      case "backup":
        openSettings("backup");
        break;
      case "wallpaper":
        openSettings("wallpaper");
        break;
      case "search-settings":
        closePopover();
        openSettings("search");
        break;
      case "close-settings":
        $("#settings").close();
        break;
      case "close-modal":
        closeModal();
        break;
      case "switch-group":
        state.activeGroup = target.dataset.group;
        save();
        render();
        break;
      case "add-group":
        editGroup();
        break;
      case "add":
        addDialog();
        break;
      case "add-site":
        editSite();
        break;
      case "add-folder":
        editFolder();
        break;
      case "add-widget":
        widgetPicker();
        break;
      case "toggle-edit":
        editing = !editing;
        render();
        break;
      case "toggle-layout":
        state.settings.layout.view =
          state.settings.layout.view === "simple" ? "widget" : "simple";
        save();
        render();
        break;
      case "next-quote":
        quoteIndex++;
        $("#quote button").textContent =
          `「 ${quotes[quoteIndex % quotes.length]} 」`;
        break;
      case "engine-picker":
        enginePicker();
        break;
      case "choose-engine":
        state.settings.search.engine = target.dataset.engine;
        save();
        renderSearch();
        closePopover();
        $("#search-input").focus();
        break;
      case "search-history":
        $("#search-input").value = target.dataset.query;
        submitSearch(target.dataset.query);
        break;
      case "open-site":
        if (item)
          openURL(
            item.url,
            e.ctrlKey || e.metaKey || state.settings.open.iconBlank,
          );
        break;
      case "folder-site":
        if (item?.kind === "widget") openOriginalWidget(item);
        else if (item?.kind === "action") {
          if (item.action === "settings") openSettings();
          else widgetPicker();
        } else if (item) openURL(item.url);
        break;
      case "open-url":
        openURL(target.dataset.url);
        break;
      case "open-new":
        if (item) openURL(item.url, true);
        closePopover();
        break;
      case "open-folder":
        openFolder(item);
        break;
      case "edit-item":
        closePopover();
        if (item.kind === "widget") openOriginalWidget(item);
        else if (item.kind === "folder") editFolder(id);
        else if (item.kind === "site") editSite(id);
        else toast("该入口无需配置");
        break;
      case "move-item":
        closePopover();
        moveDialog(id);
        break;
      case "resize-item":
        closePopover();
        resizeDialog(id);
        break;
      case "delete-item":
        closePopover();
        confirmDialog(
          "删除图标",
          `确定删除“${item.name}”吗？${item.kind === "folder" ? "其中的网站会移回当前分组。" : ""}`,
          async () => {
            found.list.splice(found.list.indexOf(item), 1);
            if (item.kind === "folder")
              found.group.items.push(...item.children);
            await save();
            render();
          },
        );
        break;
      case "widget-open":
        if (item) openOriginalWidget(item);
        break;
    }
  } catch (err) {
    toast(err.message, true);
  }
});
document.addEventListener("contextmenu", (e) => {
  if (!state || e.target.closest("#settings")) return;
  const folderChild = e.target.closest('[data-action="folder-site"]');
  const tile = e.target.closest("[data-item-id]");
  if (tile || folderChild) {
    e.preventDefault();
    if (folderChild) closeModal();
    itemMenu(
      tile?.dataset.itemId || folderChild.dataset.id,
      e.clientX,
      e.clientY,
    );
  } else if (!e.target.closest("dialog,input,textarea")) {
    e.preventDefault();
    popover(
      `<div class="context-menu"><button data-action="add-site">${icon("plus", 17)}添加网址</button><button data-action="add-widget">${icon("grid", 17)}添加组件</button><button data-action="toggle-edit">${icon("edit", 17)}编辑主页</button><button data-action="toggle-layout">${icon("leaf", 17)}切换布局</button><hr><button data-action="wallpaper">${icon("image", 17)}主题壁纸</button><button data-action="settings">${icon("settings", 17)}设置</button></div>`,
      e.clientX,
      e.clientY,
    );
  }
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closePopover();
    if ($("#search-panel")) $("#search-panel").hidden = true;
  }
  if (
    (e.key === "Enter" || e.key === " ") &&
    e.target.matches('.tile[role="button"]')
  ) {
    e.preventDefault();
    e.target.click();
  }
  if (
    e.key === "/" &&
    !e.target.matches("input,textarea,select") &&
    !$("dialog[open]")
  ) {
    e.preventDefault();
    $("#search-input")?.focus();
  }
});
document.addEventListener("dragstart", (e) => {
  const node = e.target.closest("[data-item-id]");
  if (!node || e.target.matches("input,textarea")) return;
  dragId = node.dataset.itemId;
  e.dataTransfer.setData("text/plain", dragId);
  e.dataTransfer.effectAllowed = "move";
  node.classList.add("dragging");
});
document.addEventListener("dragover", (e) => {
  const target = e.target.closest("[data-item-id]");
  if (dragId && target) {
    e.preventDefault();
    document
      .querySelectorAll(".drag-over")
      .forEach((n) => n.classList.remove("drag-over"));
    target.classList.add("drag-over");
  }
});
document.addEventListener("drop", (e) => {
  const target = e.target.closest("[data-item-id]");
  if (dragId && target) {
    e.preventDefault();
    if (moveItem(currentGroup().items, dragId, target.dataset.itemId)) {
      save();
      renderGrid();
    }
  }
  dragId = null;
  document
    .querySelectorAll(".drag-over,.dragging")
    .forEach((n) => n.classList.remove("drag-over", "dragging"));
});
document.addEventListener("dragend", () => {
  dragId = null;
  document
    .querySelectorAll(".drag-over,.dragging")
    .forEach((n) => n.classList.remove("drag-over", "dragging"));
});
$("#clock").onclick = () => {
  state.settings.layout.view =
    state.settings.layout.view === "simple" ? "widget" : "simple";
  save();
  render();
};
let lastGroupWheel = 0;
$("#sidebar").addEventListener(
  "wheel",
  (e) => {
    if (
      !state ||
      state.settings.sidebar.mouseGroup === false ||
      $("dialog[open]") ||
      Math.abs(e.deltaY) < 8
    )
      return;
    e.preventDefault();
    if (Date.now() - lastGroupWheel < 300) return;
    lastGroupWheel = Date.now();
    const current = state.groups.findIndex((g) => g.id === state.activeGroup);
    state.activeGroup =
      state.groups[
        (current + (e.deltaY > 0 ? 1 : -1) + state.groups.length) %
          state.groups.length
      ].id;
    save();
    render();
  },
  { passive: false },
);
for (const d of document.querySelectorAll("dialog"))
  d.addEventListener("click", (e) => {
    if (e.target === d) {
      const r = d.getBoundingClientRect();
      if (
        e.clientX < r.left ||
        e.clientX > r.right ||
        e.clientY < r.top ||
        e.clientY > r.bottom
      )
        d.id === "modal" ? void closeModal() : d.close();
    }
  });
addEventListener("resize", () => {
  sizeGrid();
  closePopover();
});
matchMedia("(prefers-color-scheme: dark)").addEventListener(
  "change",
  () => state && applyTheme(),
);
document.addEventListener(
  "error",
  (e) => {
    if (e.target instanceof HTMLImageElement) {
      const img = e.target;
      img.hidden = true;
      if (img.parentElement.classList.contains("site-face")) {
        const item = findItem(
          img.closest("[data-item-id]")?.dataset.itemId,
        )?.item;
        const span = document.createElement("span");
        span.className = "letter-icon";
        span.textContent = item?.name?.slice(0, 2) || "↗";
        img.parentElement.append(span);
      }
    }
  },
  true,
);
async function initialize() {
  window.addEventListener("native-widget-saved", syncNativeGrid);
  seed = await (await fetch("./assets/seed.json")).json();
  const stored = await read("state");
  let recovered = false;
  try {
    state = stored ? validateState(stored) : createState(clone(seed));
  } catch (e) {
    await write("corrupted-state", stored);
    state = createState(clone(seed));
    recovered = true;
    toast("本机数据格式异常，已保留原始数据并加载默认主页", true);
  }
  validateState(state);
  initNativeBridge({
    getState: () => state,
    save,
    render,
    applyTheme,
    open: openOriginalWidget,
    close: closeModal,
  });
  initSettings({
    getState: () => state,
    save,
    render,
    appearance: renderAppearance,
    googleAccountChanged(connected, broadcast = true) {
      void refreshGoogleProfile(connected);
      if (broadcast) accountChannel?.postMessage({ connected });
    },
    wallpaperPicker: () => openOriginalWidget(nativeUtility("wallpaper")),
    widgetPicker,
    editGroup,
    restore: async (next) => {
      state = await restoreState(state, next);
      render();
    },
    resetAll: async () => {
      state = await restoreState(state, createState(clone(seed)));
      render();
    },
  });
  if (state.settings.sidebar.lastGroup === false)
    state.activeGroup = state.groups[0].id;
  render();
  void refreshDriveConnection();
  accountChannel?.addEventListener("message", ({ data }) => {
    if (data?.connected === true) void refreshDriveConnection();
    else if (data?.connected === false) clearDriveConnection();
  });
  globalThis.chrome?.identity?.onSignInChanged?.addListener(() => {
    void refreshDriveConnection();
  });
  if (!stored || recovered) await save();
  const nativeId = new URLSearchParams(location.search).get("native");
  if (nativeId) {
    const item = state.groups
      .flatMap((g) =>
        g.items.flatMap((i) => (i.kind === "folder" ? i.children : [i])),
      )
      .find((i) => i.id === nativeId && i.type === "native");
    if (item) openOriginalWidget(item);
    else toast("该原版组件已被删除", true);
  }
  onExternalChange(async () => {
    if (
      $("dialog[open]") ||
      document.activeElement?.matches("input,textarea")
    ) {
      toast("其他标签页更新了主页，关闭弹窗后刷新可载入");
      return;
    }
    await flush();
    const incoming = await read("state");
    if (incoming && incoming.updatedAt !== state.updatedAt) {
      state = validateState(incoming);
      render();
    }
  });
  setInterval(updateClock, 1000);
}
initialize().catch((e) => {
  console.error(e);
  $("#home").innerHTML =
    '<div class="startup-error"><h1>主页加载失败</h1><p>请使用本地开发服务，或在浏览器扩展页面加载 dist 目录。</p><p id="startup-detail"></p></div>';
  $("#startup-detail").textContent = e.message;
});
