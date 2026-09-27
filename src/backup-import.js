import {
  APP_ID, SCHEMA_VERSION, clone, createState, parseBackupJSON,
  safeURL, safeGradient, validateState,
} from "./model.js";
import { toAppearance, applyAppearance, timeFonts } from "./appearance-model.js";
import { nativeComponents } from "../original/registry.js";
import { originalComponents } from "./original-widgets.js";

const sections = {
  navConfig: "分组与图标", baseConfig: "主页设置",
  notes: "便签", todo: "待办", todoFolder: "待办分组", stocks: "自选股",
};
const object = (value) => value && typeof value === "object" && !Array.isArray(value);
const hex = (value) => /^#[\da-f]{3}$/i.test(value)
  ? "#" + [...value.slice(1)].map((c) => c + c).join("") : value;
const select = (source, keys) => Object.fromEntries(
  keys.filter((key) => Object.hasOwn(source, key)).map((key) => [key, source[key]]),
);

function importSettings(base, state, warnings) {
  if (!object(base)) throw new Error("原版主页设置格式错误");
  const s = state.settings;
  const appearance = toAppearance(s);
  // 只接收当前主页支持的设置，不将原版账号或同步字段复制进宿主。
  for (const [panel, keys] of Object.entries({
    icon: ["iconLayout", "iconSize", "iconRadius", "opactiy", "xysync", "iconX", "iconY", "name", "nameSize", "nameColor", "unit", "width"],
    time: ["show", "size", "font", "color", "hour24", "sec", "month", "week", "lunar", "fontWeight"],
    open: ["searchBlank", "iconBlank"],
    search: ["show", "height", "radius", "bgColor", "history"],
    layout: ["view", "yiyan"],
    sidebar: ["placement", "autoHide", "opacity", "width", "lastGroup", "mouseGroup"],
    theme: ["mode", "system", "color"],
    wallpaper: ["mask", "blur"],
  })) {
    if (!Object.hasOwn(base, panel)) continue;
    if (!object(base[panel])) throw new Error(`原版 ${panel} 设置格式错误`);
    Object.assign(appearance[panel], select(base[panel], keys));
  }
  if (typeof appearance.time.fontWeight === "number")
    appearance.time.fontWeight = String(appearance.time.fontWeight);
  for (const panel of ["icon", "time", "open", "search", "layout", "sidebar", "wallpaper"])
    applyAppearance(s, panel, appearance);
  if (Object.hasOwn(base.time || {}, "weekBegin1")) s.time.weekBegin1 = base.time.weekBegin1;
  if (Object.hasOwn(base.icon || {}, "autoSort")) s.icon.autoSort = base.icon.autoSort;
  if (!timeFonts.includes(s.time.font)) {
    warnings.push(`时间字体“${String(s.time.font).slice(0, 60)}”不可用，已使用默认字体。`);
    s.time.font = "HarmonyOS_Sans";
  }
  if (Object.hasOwn(base, "searchEngine")) {
    if (!Array.isArray(base.searchEngine) || !base.searchEngine.length || base.searchEngine.length > 30)
      throw new Error("原版搜索引擎格式错误");
    const ids = new Set();
    s.engines = base.searchEngine.map((e) => {
      if (!object(e) || typeof e.key !== "string" || !e.key || ids.has(e.key) ||
          typeof e.title !== "string" || typeof e.href !== "string")
        throw new Error("原版搜索引擎格式错误或 ID 重复");
      ids.add(e.key);
      const url = e.href.includes("%s") ? e.href.replaceAll("%s", "{query}")
        : e.href.includes("{query}") ? e.href : e.href + "{query}";
      return { id: e.key, name: e.title, url, mark: e.title.slice(0, 1), color: "#1890ff" };
    });
  }
  if (Object.hasOwn(base, "useSearch")) s.search.engine = base.useSearch;
  if (!s.engines.some((e) => e.id === s.search.engine)) s.search.engine = s.engines[0].id;
  if (Object.hasOwn(base.wallpaper || {}, "src")) {
    const w = base.wallpaper, src = hex(w.src);
    const type = w.type === 2 ? "video" : w.type === 3
      ? (safeGradient(src) ? "gradient" : "color") : "image";
    if (typeof src === "string" && /^(blob:|file:|chrome-extension:|edge-extension:)/i.test(src)) {
      warnings.push("原版壁纸引用了本机文件，备份中没有图片内容，已保留当前壁纸。");
    } else {
      Object.assign(s.wallpaper, { type, src, name: "原版导入壁纸" });
    }
  }
  // 原版控件可使用的范围与宿主略有不同，按宿主边界调整并告知用户。
  for (const [panel, ranges] of Object.entries({
    icon: { size: [30,100], radius: [0,60], gapX: [0,100], gapY: [0,100], width: [320,2400], nameSize: [10,20], opacity: [0.1,1], widthPercent: [40,100] },
    time: { size: [30,130] }, search: { height: [36,60], width: [300,1000], radius: [0,50], opacity: [0.1,1] },
    wallpaper: { blur: [0,40], mask: [0,0.9] }, sidebar: { opacity: [0,1], width: [30,120] },
  })) for (const [key, [min, max]] of Object.entries(ranges)) {
    const value = s[panel][key];
    if (typeof value === "number" && Number.isFinite(value) && (value < min || value > max)) {
      s[panel][key] = Math.max(min, Math.min(max, value));
      warnings.push(`设置 ${panel}.${key} 已从 ${value} 调整为 ${s[panel][key]}。`);
    }
  }
  if (Object.hasOwn(base, "topSearch")) {
    if (!Array.isArray(base.topSearch) || !base.topSearch.length || base.topSearch.length > 50 ||
        base.topSearch.some((row) => !object(row) || typeof row.id !== "string" || typeof row.name !== "string"))
      throw new Error("原版热搜设置格式错误");
    state.nativeData.local.baseConfig = JSON.stringify({ topSearch: base.topSearch });
  }
}

function importNavigation(groups, warnings, stats) {
  if (!Array.isArray(groups) || !groups.length || groups.length > 100)
    throw new Error("原版导航分组格式错误");
  const ids = new Set();
  let count = 0;
  function convert(row, depth = 0) {
    if (!object(row) || typeof row.id !== "string" || !row.id || ids.has(row.id) ||
        typeof row.name !== "string" || !row.name || row.name.length > 100 || ++count > 3000)
      throw new Error("原版图标数据无效或 ID 重复");
    ids.add(row.id);
    const item = {
      id: row.id, name: row.name, kind: "site",
      size: row.size === "2x4" ? "4x2" : row.size || "1x1",
      image: safeURL(row.src, { image: true }),
      color: row.backgroundColor === "transparent" ? "transparent"
        : /^#[\da-f]{3,8}$/i.test(row.backgroundColor || "") ? hex(row.backgroundColor) : "#ffffff",
    };
    if (row.src && !item.image) warnings.push(`“${row.name}”的图标图片无法迁移，已改为文字图标。`);
    if (typeof row.iconText === "string") item.iconText = row.iconText.slice(0, 100);
    if (row.type === "folder") {
      if (depth || !Array.isArray(row.children)) throw new Error("原版文件夹格式错误或层级过深");
      item.kind = "folder";
      item.children = row.children.map((child) => convert(child, depth + 1)).filter(Boolean);
      stats.folders++;
    } else if (row.component) {
      const native = nativeComponents.has(row.component);
      if (!native && !originalComponents.has(row.component)) {
        warnings.push(`已跳过当前不支持的组件：“${row.name}”（${String(row.component).slice(0, 80)}）。`);
        stats.skipped++;
        return null;
      }
      if (row.config !== undefined && !object(row.config)) throw new Error("原版组件配置格式错误");
      item.kind = "widget";
      item.type = native ? "native" : "original";
      item.config = { component: row.component, original: select(row, ["config", "view", "type", "insetType"]) };
      stats.widgets++;
    } else if (["itab://setting", "itab://guide"].includes(row.url)) {
      item.kind = "action";
      item.action = row.url === "itab://setting" ? "settings" : "add-widget";
      stats.actions++;
    } else {
      if (!safeURL(row.url, { internal: true })) throw new Error(`“${row.name}”的网站地址无效`);
      item.url = row.url;
      stats.sites++;
    }
    return item;
  }
  return groups.map((group) => {
    if (!object(group) || !Array.isArray(group.children)) throw new Error("原版导航分组格式错误");
    return { id: group.id, name: group.name, icon: typeof group.icon === "string" ? group.icon : "home",
      items: group.children.map((row) => convert(row)).filter(Boolean) };
  });
}

function importContent(data, state) {
  const { local, stores } = state.nativeData;
  for (const key of ["notes", "todo", "todoFolder", "stocks"]) {
    if (!Object.hasOwn(data, key)) continue;
    const rows = data[key];
    if (!Array.isArray(rows) || rows.some((row) => !object(row)))
      throw new Error(`原版${sections[key]}格式错误`);
    if ((key === "notes" || key === "todo") && rows.some((row) =>
      typeof row.content !== "string" || (key === "notes" && typeof row.title !== "string")))
      throw new Error(`原版${sections[key]}内容格式错误`);
    local[key] = JSON.stringify(rows);
    if (key === "notes") (stores.notes ??= {}).items = clone(rows);
    if (key === "todo" || key === "todoFolder")
      (stores.cache ??= {})[key] = { value: clone(rows), expiresAt: 0 };
  }
}

// 本地文件入口自动识别两种格式。原版允许按类别导出，缺失类别保留当前数据。
export function prepareBackupImport(text, current) {
  const data = parseBackupJSON(text);
  if (Object.hasOwn(data, "app") || Object.hasOwn(data, "version")) {
    if (data.app !== APP_ID || data.version !== SCHEMA_VERSION)
      throw new Error("这不是受支持的 NewTab 备份文件");
    return { state: validateState(data.state), format: "local", warnings: [] };
  }
  const included = Object.keys(sections).filter((key) => Object.hasOwn(data, key));
  if (!included.length) throw new Error("这不是 NewTab 或原版 备份文件");
  const state = current ? validateState(current) : createState([{ id: "home", name: "主页", icon: "home", items: [] }]);
  const warnings = [], stats = { groups: 0, sites: 0, widgets: 0, folders: 0, actions: 0, skipped: 0 };
  if (Object.hasOwn(data, "navConfig")) {
    state.groups = importNavigation(data.navConfig, warnings, stats);
    state.activeGroup = state.groups[0].id;
    stats.groups = state.groups.length;
  }
  if (Object.hasOwn(data, "baseConfig")) importSettings(data.baseConfig, state, warnings);
  importContent(data, state);
  const counts = included.filter((key) => Array.isArray(data[key]) && key !== "navConfig")
    .map((key) => `${data[key].length} 条${sections[key]}`);
  const summary = [
    `已识别原版 备份，将导入：${included.map((key) => sections[key]).join("、")}。`,
    ...(stats.groups ? [`${stats.groups} 个分组、${stats.sites} 个网站、${stats.widgets} 个组件、${stats.folders} 个文件夹${stats.actions ? `、${stats.actions} 个快捷操作` : ""}。`] : []),
    ...(counts.length ? [counts.join("、") + "。"] : []),
    "对应类别将被替换，文件中未包含的类别保留当前数据。图标按原有顺序和尺寸在当前网格排列。",
    ...warnings,
    "当前数据会自动保存为本机历史节点。",
  ].join("\n");
  return { state: validateState(state), format: "original", warnings, stats, summary };
}
