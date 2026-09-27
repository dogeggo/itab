import {
  defaults,
  clone,
  widgetCatalog,
  makeBackup,
  parseBackup,
  normalizeURL,
} from "./model.js";
import {
  esc,
  icon,
  button,
  toast,
  confirmDialog,
  downloadJSON,
  fileAsDataURL,
  formatDate,
  modal,
  closeModal,
} from "./ui.js";
import { read, write, addSnapshot } from "./storage.js";
import {
  driveAvailability,
  connectDrive,
  disconnectDrive,
  listBackups,
  uploadBackup,
  downloadBackup,
} from "./drive.js";
let api,
  activeTab = "icon",
  cloudFiles = [],
  cloudConnected = false;
export function initSettings(callbacks) {
  api = callbacks;
}
const tabs = [
  ["open", "打开方式", "图标、搜索结果的打开方式"],
  ["search", "搜索栏", "搜索样式、搜索引擎与历史"],
  ["icon", "图标", "图标样式、图标间距、宽度"],
  ["time", "时间/日期", "时间字体、格式与日期显示"],
  ["wallpaper", "主题/壁纸", "主题颜色、背景与壁纸"],
  ["layout", "布局", "组件布局、极简模式与一言"],
  ["sidebar", "侧边栏", "位置、透明度和导航分组"],
  ["backup", "备份与恢复", "Google Drive 与本机历史备份"],
  ["reset", "重置设置", "恢复初始样式或重置主页"],
];
function get(path) {
  return path.split(".").reduce((v, k) => v[k], api.getState().settings);
}
function toggle(path, label, help = "") {
  return `<label class="setting-row"><span>${label}${help ? `<small>${help}</small>` : ""}</span><input type="checkbox" role="switch" class="switch" data-setting="${path}" ${get(path) ? "checked" : ""}></label>`;
}
function range(path, label, min, max, step = 1, unit = "px") {
  return `<label class="setting-row range-row"><span>${label}</span><input type="range" data-setting="${path}" min="${min}" max="${max}" step="${step}" value="${get(path)}" aria-label="${label}"><output>${get(path)}${unit}</output></label>`;
}
function color(path, label) {
  return `<label class="setting-row"><span>${label}</span><input type="color" data-setting="${path}" value="${get(path)}" aria-label="${label}"></label>`;
}
function select(path, label, options) {
  return `<label class="setting-row"><span>${label}</span><select data-setting="${path}" aria-label="${label}">${options.map(([v, n]) => `<option value="${v}" ${String(get(path)) === String(v) ? "selected" : ""}>${n}</option>`).join("")}</select></label>`;
}
const panel = (content) => `<div class="setting-panel">${content}</div>`;
const heading = (text) => `<h3 class="setting-section-title">${text}</h3>`;
export function openSettings(tab = "icon") {
  activeTab = tab;
  renderSettings();
  const d = document.querySelector("#settings");
  if (!d.open) d.showModal();
}
function content() {
  const s = api.getState().settings;
  switch (activeTab) {
    case "open":
      return (
        panel(toggle("open.searchBlank", "新标签页打开搜索结果")) +
        panel(toggle("open.iconBlank", "新标签页打开图标"))
      );
    case "icon":
      return (
        panel(
          `<div class="icon-presets"><button data-preset="default"><span class="preview-icons"><i></i><i></i><i></i><i></i></span>默认</button><button data-preset="round"><span class="preview-icons round"><i></i><i></i><i></i><i></i></span>圆形</button></div>${range("icon.size", "图标大小", 30, 100)}${range("icon.radius", "图标圆角", 0, 60)}${range("icon.opacity", "不透明度", 0.1, 1, 0.05, "")}`,
        ) +
        heading("间距") +
        panel(
          toggle("icon.syncGap", "同步间距") +
            range("icon.gapX", "X 间距", 10, 80) +
            range("icon.gapY", "Y 间距", 10, 80),
        ) +
        heading("名称") +
        panel(
          toggle("icon.name", "图标名称") +
            range("icon.nameSize", "文字大小", 10, 20) +
            color("icon.nameColor", "名称颜色"),
        ) +
        heading("图标最大宽度") +
        panel(
          range("icon.width", "最大宽度", 320, 2400, 10) +
            toggle("icon.autoSort", "自动紧凑排列"),
        ) +
        `<p class="muted">拖动图标可以调整顺序；右键图标可以编辑、移动或删除。</p>`
      );
    case "search":
      return (
        panel(
          toggle("search.show", "显示搜索栏") +
            range("search.height", "搜索栏高度", 36, 60) +
            range("search.radius", "搜索栏圆角", 0, 50) +
            range("search.opacity", "搜索栏透明度", 0.1, 1, 0.05, "") +
            range("search.width", "搜索栏宽度", 300, 1000, 10),
        ) +
        panel(
          toggle("search.history", "搜索历史", "仅在本机保存最近 30 条") +
            `<button data-settings-action="clear-history" class="text-btn">清空搜索历史</button>`,
        ) +
        heading("搜索引擎") +
        panel(
          `<div class="engine-settings">${s.engines.map((e) => `<div><span class="engine-mark">${esc(e.mark || e.name[0])}</span><span>${esc(e.name)}</span><button data-engine-default="${esc(e.id)}" class="${e.id === s.search.engine ? "selected" : ""}">${e.id === s.search.engine ? "默认" : "设为默认"}</button>${s.engines.length > 1 ? `<button data-engine-remove="${esc(e.id)}" title="删除 ${esc(e.name)}">${icon("trash", 15)}</button>` : ""}</div>`).join("")}</div><button data-settings-action="add-engine" class="text-btn">＋ 添加搜索引擎</button>`,
        )
      );
    case "time":
      return panel(
        toggle("time.show", "显示时间") +
          `<div class="time-toggles">${[
            ["time.month", "月日"],
            ["time.week", "星期"],
            ["time.lunar", "农历"],
            ["time.hour24", "24 小时"],
            ["time.sec", "秒"],
            ["time.bold", "粗体"],
          ]
            .map(
              ([p, l]) =>
                `<label><input type="checkbox" data-setting="${p}" ${get(p) ? "checked" : ""}><span>${l}</span></label>`,
            )
            .join("")}</div>` +
          range("time.size", "时间大小", 30, 130) +
          select("time.font", "字体", [
            ["HarmonyOS_Sans", "HarmonyOS Sans"],
            ["MiSans", "MiSans"],
            ["JetBrains", "JetBrains Mono"],
            ["dsdigi", "数码时钟"],
            ["Oswald", "Oswald"],
            ["Orbitron", "Orbitron"],
            ["Arial", "Arial"],
          ]) +
          color("time.color", "时间颜色") +
          toggle("time.weekBegin1", "日历从周一开始"),
      );
    case "wallpaper":
      return (
        panel(
          toggle("theme.system", "跟随系统主题") +
            select("theme.mode", "主题模式", [
              ["light", "浅色"],
              ["dark", "深色"],
            ]) +
            color("theme.color", "主题颜色"),
        ) +
        heading("壁纸") +
        panel(
          `<div class="wallpaper-gallery"><button class="wallpaper-choice original-wallpaper" data-wallpaper="default" title="默认壁纸"><span>默认壁纸</span></button><button class="wallpaper-choice dusk" data-wallpaper="dusk"><span>暮色</span></button><button class="wallpaper-choice forest" data-wallpaper="forest"><span>森林</span></button><button class="wallpaper-choice ocean" data-wallpaper="ocean"><span>海洋</span></button></div><div class="wallpaper-actions"><label class="button">${icon("upload", 16)} 本地图片<input id="wallpaper-file" type="file" accept="image/png,image/jpeg,image/webp,image/gif" hidden></label><button data-settings-action="wallpaper-url">图片网址</button><label class="color-choice">纯色<input id="wallpaper-color" type="color" value="${s.wallpaper.type === "color" ? esc(s.wallpaper.src) : "#253d5b"}"></label></div><p class="muted">当前：${esc(s.wallpaper.name)} · 本地图片最多 8 MB</p>${range("wallpaper.blur", "模糊程度", 0, 40)}${range("wallpaper.mask", "深色遮罩", 0, 0.9, 0.05, "")}`,
        )
      );
    case "layout":
      return (
        panel(
          `<p>点击桌面时间也可以快速切换极简模式</p><div class="layout-choices"><button data-layout="widget" class="${s.layout.view === "widget" ? "selected" : ""}"><span class="layout-demo"><b>12:30</b><i></i><em>▪ ▪ ▪ ▪<br>▪ ▪ ▪ ▪</em></span>组件</button><button data-layout="simple" class="${s.layout.view === "simple" ? "selected" : ""}"><span class="layout-demo simple-demo"><b>12:30</b><i></i></span>极简</button></div>`,
        ) +
        panel(toggle("layout.quote", "底部显示一言")) +
        heading("主页组件") +
        panel(
          `<div class="settings-widget-list">${widgetCatalog.map((w) => `<button data-add-widget="${w.type}">${icon(w.icon, 22)}<span>${w.name}</span>${icon("plus", 16)}</button>`).join("")}</div>`,
        )
      );
    case "sidebar":
      return (
        panel(
          select("sidebar.placement", "侧边栏位置", [
            ["left", "左侧"],
            ["right", "右侧"],
            ["hidden", "隐藏"],
          ]) +
            toggle("sidebar.autoHide", "自动隐藏") +
            range("sidebar.opacity", "背景透明度", 0, 1, 0.05, ""),
        ) +
        heading("导航分组") +
        panel(
          api
            .getState()
            .groups.map(
              (g) =>
                `<div class="group-setting"><span>${icon(g.icon, 18)} ${esc(g.name)}</span><button data-edit-group="${esc(g.id)}">编辑</button></div>`,
            )
            .join("") +
            '<button data-settings-action="add-group" class="text-btn">＋ 添加分组</button>',
        )
      );
    case "backup":
      return (
        `<div class="drive-card"><div class="drive-logo">${icon("cloud", 32)}</div><div><h3>Google Drive 备份</h3><p>让你的主页，跟随你。</p></div><span class="badge">应用专属空间</span></div>` +
        panel(
          `<p class="backup-explainer">备份包含图标、分组、设置、壁纸、备忘录和待办。恢复前会自动保留本机快照。</p><p id="drive-status" class="muted">${esc(driveAvailability().message)}</p><div class="backup-buttons"><button class="primary" data-settings-action="drive-connect">${icon("cloud", 17)} ${cloudConnected ? "刷新备份列表" : "连接 Google"}</button><button data-settings-action="drive-backup" ${!driveAvailability().ready ? "disabled" : ""}>立即备份</button>${cloudConnected ? '<button data-settings-action="drive-disconnect">断开本机授权</button>' : ""}</div><div id="cloud-backups">${cloudList()}</div>`,
        ) +
        heading("本地备份") +
        panel(
          `<div class="backup-buttons"><button data-settings-action="export">${icon("download", 17)} 导出本地数据</button><label class="button">${icon("upload", 17)} 导入备份数据<input id="backup-file" type="file" accept="application/json,.json" hidden></label></div><p class="muted">JSON 格式 · 最多 25 MB · 不包含 Google 授权令牌</p>`,
        ) +
        heading("本机历史节点（最近 5 个）") +
        panel(
          '<button data-settings-action="snapshot" class="text-btn">＋ 创建本机快照</button><div id="local-snapshots">加载中…</div>',
        )
      );
    case "reset":
      return (
        panel(
          `<h3>恢复默认设置</h3><p class="muted">将图标样式、时间、搜索栏、主题等恢复为初始设置。保留网站和组件内容。</p><button data-settings-action="reset-settings">恢复默认设置</button>`,
        ) +
        panel(
          `<h3>重置整个主页</h3><p class="muted">恢复初始分组与图标。操作前自动保留本机快照。</p><button class="danger" data-settings-action="reset-all">重置主页</button>`,
        )
      );
  }
}
function cloudList() {
  return cloudFiles.length
    ? `<div class="backup-list">${cloudFiles.map((f) => `<div><span>${formatDate(f.createdTime)}<small>${(Number(f.size) / 1024).toFixed(1)} KB</small></span><button data-drive-restore="${esc(f.id)}">恢复</button></div>`).join("")}</div>`
    : cloudConnected
      ? '<p class="empty">还没有云端备份，点击“立即备份”创建。</p>'
      : "";
}
function renderSettings() {
  const tab = tabs.find((t) => t[0] === activeTab) || tabs[2];
  activeTab = tab[0];
  const d = document.querySelector("#settings");
  d.innerHTML = `<header class="settings-header"><div><h2 id="settings-title">${tab[1]}</h2><p>${tab[2]}</p></div>${button("close-settings", "关闭设置", "close", "icon-btn")}</header><div class="settings-shell"><nav class="settings-nav"><button class="settings-account" data-tab="backup"><span class="avatar">${icon("user", 24)}</span><strong>本地空间</strong><small>Google Drive 备份</small></button>${tabs.map((t) => `<button data-tab="${t[0]}" class="${t[0] === activeTab ? "active" : ""}"><img src="assets/setting/icon_${t[0] === "wallpaper" ? "theme" : t[0]}.svg" alt="">${t[1]}</button>`).join("")}<span class="settings-version">iTab Local · 1.0.1</span></nav><div class="settings-content">${content()}</div></div>`;
  d.querySelectorAll("[data-tab]").forEach(
    (btn) =>
      (btn.onclick = () => {
        activeTab = btn.dataset.tab;
        renderSettings();
      }),
  );
  d.querySelectorAll("[data-setting]").forEach((input) => {
    input.oninput = () => {
      const keys = input.dataset.setting.split(".");
      const target = keys
        .slice(0, -1)
        .reduce((v, k) => v[k], api.getState().settings);
      target[keys.at(-1)] =
        input.type === "checkbox"
          ? input.checked
          : ["range", "number"].includes(input.type)
            ? Number(input.value)
            : input.value;
      if (input.type === "range")
        input.nextElementSibling.value =
          input.value +
          (input.dataset.setting.includes("opacity") ||
          input.dataset.setting === "wallpaper.mask"
            ? ""
            : "px");
      const s = api.getState().settings;
      if (input.dataset.setting === "icon.gapX" && s.icon.syncGap) {
        s.icon.gapY = s.icon.gapX;
        const y = d.querySelector('[data-setting="icon.gapY"]');
        if (y) {
          y.value = s.icon.gapY;
          y.nextElementSibling.value = y.value + "px";
        }
      }
      if (input.dataset.setting === "icon.gapY" && s.icon.syncGap) {
        s.icon.gapX = s.icon.gapY;
        const x = d.querySelector('[data-setting="icon.gapX"]');
        if (x) {
          x.value = s.icon.gapX;
          x.nextElementSibling.value = x.value + "px";
        }
      }
      api.save();
      api.render();
    };
  });
  d.querySelectorAll("[data-preset]").forEach(
    (btn) =>
      (btn.onclick = () => {
        api.getState().settings.icon.radius =
          btn.dataset.preset === "round" ? 60 : 18;
        api.save();
        api.render();
        renderSettings();
      }),
  );
  d.querySelectorAll("[data-layout]").forEach(
    (btn) =>
      (btn.onclick = () => {
        api.getState().settings.layout.view = btn.dataset.layout;
        api.save();
        api.render();
        renderSettings();
      }),
  );
  d.querySelectorAll("[data-add-widget]").forEach(
    (btn) =>
      (btn.onclick = () => {
        api.addWidget(btn.dataset.addWidget);
        toast("组件已添加到当前分组");
      }),
  );
  d.querySelectorAll("[data-edit-group]").forEach(
    (btn) => (btn.onclick = () => api.editGroup(btn.dataset.editGroup)),
  );
  d.querySelectorAll("[data-engine-default]").forEach(
    (btn) =>
      (btn.onclick = () => {
        api.getState().settings.search.engine = btn.dataset.engineDefault;
        api.save();
        api.render();
        renderSettings();
      }),
  );
  d.querySelectorAll("[data-engine-remove]").forEach(
    (btn) =>
      (btn.onclick = () => {
        const s = api.getState().settings;
        if (s.engines.length === 1) return;
        const id = btn.dataset.engineRemove;
        s.engines = s.engines.filter((e) => e.id !== id);
        if (s.search.engine === id) s.search.engine = s.engines[0].id;
        api.save();
        api.render();
        renderSettings();
      }),
  );
  d.querySelectorAll("[data-wallpaper]").forEach(
    (btn) => (btn.onclick = () => setWallpaper(btn.dataset.wallpaper)),
  );
  d.querySelector("#wallpaper-file")?.addEventListener("change", async (e) => {
    try {
      const file = e.target.files[0];
      if (!file) return;
      const src = await fileAsDataURL(file);
      Object.assign(api.getState().settings.wallpaper, {
        type: "image",
        src,
        name: file.name,
      });
      await api.save();
      api.render();
      renderSettings();
    } catch (err) {
      toast(err.message, true);
    }
  });
  d.querySelector("#wallpaper-color")?.addEventListener("input", (e) => {
    Object.assign(api.getState().settings.wallpaper, {
      type: "color",
      src: e.target.value,
      name: "纯色壁纸",
    });
    api.save();
    api.render();
  });
  d.querySelectorAll("[data-settings-action]").forEach(
    (btn) =>
      (btn.onclick = async () => {
        btn.disabled = true;
        try {
          await action(btn.dataset.settingsAction);
        } catch (err) {
          toast(err.message, true);
          const status = d.querySelector("#drive-status");
          if (status) status.textContent = err.message;
        } finally {
          if (btn.isConnected) btn.disabled = false;
        }
      }),
  );
  d.querySelector("#backup-file")?.addEventListener("change", async (e) => {
    const file = e.target.files[0];
    try {
      if (!file) return;
      if (file.size > 25 * 1024 * 1024) throw new Error("备份不能超过 25 MB");
      const next = parseBackup(await file.text());
      restorePrompt(next);
    } catch (err) {
      toast(err.message, true);
    } finally {
      e.target.value = "";
    }
  });
  d.querySelectorAll("[data-drive-restore]").forEach(
    (btn) =>
      (btn.onclick = async () => {
        btn.disabled = true;
        try {
          const next = parseBackup(
            await downloadBackup(btn.dataset.driveRestore),
          );
          restorePrompt(next);
        } catch (err) {
          toast(err.message, true);
        } finally {
          btn.disabled = false;
        }
      }),
  );
  if (activeTab === "backup")
    renderSnapshots().catch((e) => toast(e.message, true));
}
export function setWallpaper(key) {
  const preset = {
    default: {
      type: "image",
      src: "assets/wallpapers/default.webp",
      name: "默认壁纸",
    },
    dusk: {
      type: "gradient",
      src: "linear-gradient(135deg, #2b2454, #d67e83)",
      name: "暮色",
    },
    forest: {
      type: "gradient",
      src: "linear-gradient(135deg, #163c3a, #8baf8e)",
      name: "森林",
    },
    ocean: {
      type: "gradient",
      src: "linear-gradient(135deg, #143455, #5facc4)",
      name: "海洋",
    },
  }[key];
  if (preset) {
    Object.assign(api.getState().settings.wallpaper, preset);
    api.save();
    api.render();
    if (document.querySelector("#settings").open) renderSettings();
  }
}
async function renderSnapshots() {
  const list = (await read("snapshots")) || [];
  const el = document.querySelector("#local-snapshots");
  if (!el) return;
  el.innerHTML =
    list
      .map(
        (s) =>
          `<div class="snapshot-row"><span>${esc(s.label)}<small>${formatDate(s.backup.createdAt)}</small></span><button data-snapshot="${esc(s.id)}">恢复</button></div>`,
      )
      .join("") || '<p class="empty">暂无本机历史节点</p>';
  el.querySelectorAll("[data-snapshot]").forEach(
    (btn) =>
      (btn.onclick = () => {
        const found = list.find((s) => s.id === btn.dataset.snapshot);
        restorePrompt(parseBackup(JSON.stringify(found.backup)));
      }),
  );
}
function restorePrompt(next) {
  confirmDialog(
    "恢复备份",
    `将恢复 ${next.groups.length} 个分组和 ${next.groups.reduce((n, g) => n + g.items.length, 0)} 个图标/组件，并覆盖当前主页。当前数据会自动保存为本机历史节点。`,
    async () => {
      await api.restore(next);
      renderSettings();
      toast("备份恢复成功");
    },
  );
}
async function action(name) {
  const state = api.getState();
  switch (name) {
    case "clear-history":
      state.history = [];
      await api.save();
      toast("搜索历史已清空");
      break;
    case "add-group":
      api.editGroup();
      break;
    case "add-engine": {
      const d = modal(
        "添加搜索引擎",
        `<form id="engine-form"><label class="field">名称<input name="name" required maxlength="30" placeholder="例如 DuckDuckGo"></label><label class="field">搜索地址<input name="url" required placeholder="https://duckduckgo.com/?q={query}"></label><p class="muted">用 {query} 代表搜索关键词。</p><div class="form-actions"><button class="primary">添加</button></div></form>`,
      );
      d.querySelector("form").onsubmit = async (e) => {
        e.preventDefault();
        try {
          const data = Object.fromEntries(new FormData(e.target));
          if (!data.url.includes("{query}"))
            throw new Error("地址中必须包含 {query}");
          const url = normalizeURL(data.url).replace(
            /%7Bquery%7D/gi,
            "{query}",
          );
          state.settings.engines.push({
            id: crypto.randomUUID(),
            name: data.name.trim(),
            url,
            mark: data.name[0],
            color: "#1890ff",
          });
          await api.save();
          api.render();
          renderSettings();
          closeModal();
        } catch (err) {
          toast(err.message, true);
        }
      };
      break;
    }
    case "wallpaper-url": {
      const d = modal(
        "使用网络壁纸",
        '<form><label class="field">图片网址<input name="url" type="url" required placeholder="https://example.com/wallpaper.jpg"></label><div class="form-actions"><button class="primary">应用</button></div></form>',
      );
      d.querySelector("form").onsubmit = async (e) => {
        e.preventDefault();
        try {
          const url = normalizeURL(new FormData(e.target).get("url"));
          const image = new Image();
          await new Promise((resolve, reject) => {
            image.onload = resolve;
            image.onerror = () => reject(new Error("图片无法加载，请检查链接"));
            image.src = url;
          });
          Object.assign(state.settings.wallpaper, {
            type: "image",
            src: url,
            name: "网络图片",
          });
          await api.save();
          api.render();
          renderSettings();
          closeModal();
        } catch (err) {
          toast(err.message, true);
        }
      };
      break;
    }
    case "export":
      downloadJSON(
        makeBackup(state),
        `itab-local-${new Date().toISOString().slice(0, 10)}.json`,
      );
      toast("本地备份已导出");
      break;
    case "snapshot":
      await addSnapshot(state, "手动备份");
      await renderSnapshots();
      toast("本机快照已保存");
      break;
    case "drive-connect":
      cloudFiles = await connectDrive();
      cloudConnected = true;
      renderSettings();
      toast("Google Drive 已连接");
      break;
    case "drive-backup":
      await uploadBackup(makeBackup(state));
      cloudFiles = await listBackups();
      cloudConnected = true;
      await write("lastDriveBackup", new Date().toISOString());
      renderSettings();
      toast("已备份到 Google Drive");
      break;
    case "drive-disconnect":
      await disconnectDrive();
      cloudConnected = false;
      cloudFiles = [];
      renderSettings();
      toast("已清除本机 Google 授权缓存");
      break;
    case "reset-settings":
      confirmDialog(
        "恢复默认设置",
        "将恢复初始视觉设置，保留网站、分组和组件内容。当前状态会先保存为本机快照。",
        async () => {
          await addSnapshot(state, "重置设置前备份");
          state.settings = clone(defaults);
          await api.save();
          api.render();
          renderSettings();
          toast("默认设置已恢复");
        },
      );
      break;
    case "reset-all":
      confirmDialog(
        "重置整个主页",
        "将恢复默认主页，当前主页会先保存为本机历史节点。",
        async () => {
          await api.resetAll();
          renderSettings();
          toast("主页已重置");
        },
      );
      break;
  }
}
