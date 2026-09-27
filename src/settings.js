import {
  defaults,
  clone,
  makeBackup,
  parseBackup,
  normalizeURL,
  validateState,
} from "./model.js";
import { toAppearance, applyAppearance } from "./appearance-model.js";
import { prepareBackupImport } from "./backup-import.js";
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
  window.addEventListener("native-widget-saved", () => {
    if (activeTab === "wallpaper" && document.querySelector("#settings").open)
      renderSettings();
  });
  window.__itabAppearance = {
    connect(frameWindow, panel) {
      const frame = document.querySelector("#appearance-frame");
      if (!frame || frame.contentWindow !== frameWindow || panel !== activeTab)
        throw new Error("设置会话无效");
      const current = api.getState();
      const live = () =>
        frame.isConnected &&
        frame.contentWindow === frameWindow &&
        current === api.getState();
      return {
        read() {
          const value = toAppearance(current.settings);
          if (current.settings.wallpaper.type === "image")
            value.wallpaper.thumb = new URL(
              value.wallpaper.src,
              location.href,
            ).href;
          return value;
        },
        save(value) {
          if (!live()) return;
          try {
            const next = clone(current);
            applyAppearance(next.settings, panel, value);
            validateState(next);
            current.settings = next.settings;
            api.appearance();
            void api.save();
          } catch (error) {
            toast(error.message, true);
          }
        },
        action(name) {
          if (!live()) return;
          if (name === "wallpaper") api.wallpaperPicker();
          else if (name === "download-wallpaper") {
            const a = document.createElement("a");
            a.href = current.settings.wallpaper.src;
            a.download = current.settings.wallpaper.name || "wallpaper";
            a.target = "_blank";
            a.rel = "noopener";
            a.click();
          }
        },
        close() {
          if (live()) document.querySelector("#settings").close();
        },
        resize(height) {
          if (
            live() &&
            ["search", "sidebar", "wallpaper"].includes(panel) &&
            Number.isFinite(height)
          )
            frame.style.height = Math.max(180, Math.min(1500, height)) + "px";
        },
      };
    },
  };
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
  ["about", "关于", "NewTab · 原版界面"],
];
const panel = (content) => `<div class="setting-panel">${content}</div>`;
const heading = (text) => `<h3 class="setting-section-title">${text}</h3>`;
export function openSettings(tab = "icon") {
  activeTab = tab;
  renderSettings();
  const d = document.querySelector("#settings");
  if (!d.open) d.showModal();
}

const nativeTabs = new Set([
  "open",
  "search",
  "icon",
  "time",
  "wallpaper",
  "layout",
  "sidebar",
]);
function nativeContent(tab) {
  const s = api.getState().settings;
  let extras = "";
  if (tab === "search")
    extras =
      heading("搜索引擎") +
      panel(
        `<div class="engine-settings">${s.engines.map((e) => `<div><span class="engine-mark">${esc(e.mark || e.name[0])}</span><span>${esc(e.name)}</span><button data-engine-default="${esc(e.id)}" class="${e.id === s.search.engine ? "selected" : ""}">${e.id === s.search.engine ? "默认" : "设为默认"}</button>${s.engines.length > 1 ? `<button data-engine-remove="${esc(e.id)}" aria-label="删除 ${esc(e.name)}">${icon("trash", 15)}</button>` : ""}</div>`).join("")}</div><button data-settings-action="add-engine" class="text-btn">＋ 添加搜索引擎</button><button data-settings-action="clear-history" class="text-btn">清空搜索历史</button>`,
      );
  if (tab === "sidebar")
    extras =
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
      );
  if (tab === "wallpaper")
    extras =
      heading("自定义壁纸") +
      panel(
        '<div class="wallpaper-actions"><label class="button">本地图片<input id="wallpaper-file" type="file" accept="image/png,image/jpeg,image/webp,image/gif" hidden></label><button data-settings-action="wallpaper-url">图片网址</button><button data-wallpaper="default">恢复默认壁纸</button></div>',
      );
  return `<iframe id="appearance-frame" title="${tabs.find((t) => t[0] === tab)[1]}原版设置" src="original/appearance/host.html?panel=${tab}"></iframe>${extras ? '<div class="settings-extra">' + extras + "</div>" : ""}`;
}

function content() {
  const s = api.getState().settings;
  switch (activeTab) {
    case "open":
      return nativeContent("open");

    case "icon":
      return nativeContent("icon");

    case "search":
      return nativeContent("search");

    case "time":
      return nativeContent("time");

    case "wallpaper":
      return nativeContent("wallpaper");

    case "layout":
      return nativeContent("layout");

    case "sidebar":
      return nativeContent("sidebar");

    case "backup":
      return (
        `<div class="drive-card"><div class="drive-logo">${icon("cloud", 32)}</div><div><h3>Google Drive 备份</h3><p>让你的主页，跟随你。</p></div><span class="badge">应用专属空间</span></div>` +
        panel(
          `<p class="backup-explainer">备份包含图标、分组、设置、壁纸、备忘录和待办。恢复前会自动保留本机快照。</p><p id="drive-status" class="muted">${esc(driveAvailability().message)}</p><div class="backup-buttons"><button class="primary" data-settings-action="drive-connect">${icon("cloud", 17)} ${cloudConnected ? "刷新备份列表" : "连接 Google"}</button><button data-settings-action="drive-backup" ${!driveAvailability().ready ? "disabled" : ""}>立即备份</button>${cloudConnected ? '<button data-settings-action="drive-disconnect">断开本机授权</button>' : ""}</div><div id="cloud-backups">${cloudList()}</div>`,
        ) +
        heading("本地备份") +
        panel(
          `<div class="backup-buttons"><button data-settings-action="export">${icon("download", 17)} 导出本地数据</button><label class="button">${icon("upload", 17)} 导入备份数据<input id="backup-file" type="file" accept="application/json,.json,.itabdata" hidden></label></div><p class="muted">支持本项目 JSON 和原版 .itabdata 备份 · 最多 25 MB</p>`,
        ) +
        heading("本机历史节点（最近 5 个）") +
        panel(
          '<button data-settings-action="snapshot" class="text-btn">＋ 创建本机快照</button><div id="local-snapshots">加载中…</div>',
        )
      );
    case "about":
      return panel(
        '<div class="about-brand"><img src="original/icon/logo.svg" alt="NewTab"><h3>NewTab</h3><p>原版界面 · 自由定制</p></div><p class="muted">界面与组件资源来自原版 2.3.13。主页数据保存在本机，可通过 JSON 和 Google Drive 备份恢复。</p>',
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
  d.dataset.tab = activeTab;
  d.innerHTML = `<header class="settings-header"><img class="settings-logo" src="original/icon/logo.svg" alt="NewTab"><div><h2 id="settings-title">${tab[1]}</h2><p>${tab[2]}</p></div></header>${button("close-settings", "关闭设置", "close", "settings-close")}<div class="settings-shell"><nav class="settings-nav"><button class="settings-account" data-tab="backup">${icon("cloud", 16)}<span>数据备份</span></button>${tabs.map((t) => `<button data-tab="${t[0]}" class="${t[0] === activeTab ? "active" : ""}" aria-current="${t[0] === activeTab ? "page" : "false"}"><img src="assets/setting/icon_${t[0] === "wallpaper" ? "theme" : t[0]}.svg" alt="">${t[1]}</button>`).join("")}</nav><div class="settings-content ${nativeTabs.has(activeTab) ? "has-native-panel" : ""}">${content()}</div></div>`;

  d.querySelectorAll("[data-tab]").forEach(
    (btn) =>
      (btn.onclick = () => {
        activeTab = btn.dataset.tab;
        renderSettings();
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
      const text = await file.text();
      const imported = prepareBackupImport(text, api.getState());
      restorePrompt(imported.state, {
        ...imported,
        // 用户确认时再合并缺失类别，保留预览期间组件保存的最新数据。
        prepare: () => prepareBackupImport(text, api.getState()).state,
      });
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
function restorePrompt(next, imported) {
  confirmDialog(
    imported?.format === "original" ? "导入原版 备份" : "恢复备份",
    imported?.summary || `将恢复 ${next.groups.length} 个分组和 ${next.groups.reduce((n, g) => n + g.items.length, 0)} 个图标/组件，并覆盖当前主页。当前数据会自动保存为本机历史节点。`,
    async () => {
      await api.restore(imported?.format === "original" ? imported.prepare() : next);
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
        `NewTab-${new Date().toISOString().slice(0, 10)}.json`,
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
