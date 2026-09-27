import { timeFonts } from "./appearance-model.js";
import { originalWidgetURL } from "./original-widgets.js";
import { nativeComponents } from "../original/registry.js";
import { validateNativeData } from "./native-data.js";
export const APP_ID = "itab-local";
export const SCHEMA_VERSION = 2;
export const uid = () => globalThis.crypto.randomUUID();
export const clone = (value) => structuredClone(value);
export function safeGradient(value) {
  const color = "(?:#[\\da-f]{3,8}|rgba?\\([\\d.,%\\s]+\\))";
  const stop = `${color}(?:\\s+[\\d.]+%)?`;
  return (
    typeof value === "string" &&
    value.length < 1500 &&
    new RegExp(
      `^linear-gradient\\((?:[-\\d.]+deg|to (?:right|left|top|bottom)(?: (?:right|left|top|bottom))?),\\s*${stop}(?:,\\s*${stop})+\\)$`,
      "i",
    ).test(value)
  );
}
export const defaults = {
  theme: { mode: "light", system: true, color: "#1890ff" },
  sidebar: { placement: "left", autoHide: false, width: 50, opacity: 0.4 },
  wallpaper: {
    type: "image",
    src: "assets/wallpapers/default.webp",
    name: "默认壁纸",
    blur: 0,
    mask: 0,
  },
  time: {
    show: true,
    size: 70,
    color: "#ffffff",
    font: "HarmonyOS_Sans",
    bold: false,
    hour24: true,
    sec: false,
    month: true,
    week: true,
    lunar: true,
    weekBegin1: true,
  },
  search: {
    show: true,
    height: 46,
    radius: 23,
    opacity: 0.5,
    width: 600,
    history: false,
    engine: "google",
  },
  engines: [
    {
      id: "baidu",
      name: "百度",
      url: "https://www.baidu.com/s?wd={query}",
      mark: "百",
      color: "#346efd",
    },
    {
      id: "bing",
      name: "必应",
      url: "https://www.bing.com/search?q={query}",
      mark: "b",
      color: "#00809d",
    },
    {
      id: "google",
      name: "Google",
      url: "https://www.google.com/search?q={query}",
      mark: "G",
      color: "#4285f4",
    },
    {
      id: "duckduckgo",
      name: "DuckDuckGo",
      url: "https://duckduckgo.com/?q={query}",
      mark: "D",
      color: "#de5833",
    },
  ],
  open: { searchBlank: true, iconBlank: true },
  icon: {
    size: 60,
    radius: 18,
    gapX: 30,
    gapY: 30,
    syncGap: true,
    opacity: 1,
    name: true,
    nameSize: 12,
    nameColor: "#ffffff",
    width: 1350,
    autoSort: true,
  },
  layout: { view: "widget", quote: true },
};
export function createState(groups = []) {
  return {
    schemaVersion: SCHEMA_VERSION,
    settings: clone(defaults),
    groups,
    activeGroup: groups[0]?.id || "home",
    history: [],
    nativeData: { local: {}, stores: {} },
    updatedAt: new Date().toISOString(),
  };
}
export function safeURL(value, { internal = false, image = false } = {}) {
  if (typeof value !== "string" || value.length > (image ? 16_000_000 : 2048))
    return "";
  if (
    image &&
    /^(assets\/[\w/.-]+|data:image\/(png|jpeg|webp|gif|svg\+xml);base64,[A-Za-z\d+/=]+)$/.test(
      value,
    )
  )
    return value;
  if (
    internal &&
    /^(chrome|edge):\/\/(extensions|bookmarks|history|downloads)\/?$/.test(
      value,
    )
  )
    return value;
  try {
    const u = new URL(value);
    return ["http:", "https:"].includes(u.protocol) &&
      !u.username &&
      !u.password
      ? u.href
      : "";
  } catch {
    return "";
  }
}
export function normalizeURL(value) {
  let v = value.trim();
  if (!/^[a-z][\w+.-]*:/i.test(v)) v = "https://" + v;
  const url = safeURL(v, { internal: true });
  if (!url) throw new Error("请输入有效的 http、https 或浏览器内部网址");
  return url;
}
export function searchURL(engine, query) {
  const url = safeURL(
    engine.url.replace("{query}", encodeURIComponent(query.trim())),
  );
  if (!url || !engine.url.includes("{query}"))
    throw new Error("搜索引擎地址必须包含 {query}");
  return url;
}
const badKeys = new Set(["__proto__", "prototype", "constructor"]);
function assertPlain(value, depth = 0) {
  if (depth > 25) throw new Error("备份嵌套过深");
  if (value && typeof value === "object")
    for (const [k, v] of Object.entries(value)) {
      if (badKeys.has(k)) throw new Error("备份包含危险字段");
      assertPlain(v, depth + 1);
    }
}
const numberRange = (v, min, max, label) => {
  if (typeof v !== "number" || !Number.isFinite(v) || v < min || v > max)
    throw new Error(`${label}超出有效范围`);
};
export function validateState(input) {
  assertPlain(input);
  if (!input || input.schemaVersion !== SCHEMA_VERSION)
    throw new Error("不支持的备份版本");
  if (
    !Array.isArray(input.groups) ||
    !input.groups.length ||
    input.groups.length > 100
  )
    throw new Error("导航分组格式错误");
  if (Object.hasOwn(input, "widgetData"))
    throw new Error("不接受旧组件数据格式");
  const s = input.settings;
  if (!s || typeof s !== "object") throw new Error("备份缺少设置");
  for (const key of Object.keys(defaults))
    if (s[key] === undefined) throw new Error("备份设置不完整：" + key);
  for (const [key, min, max] of [
    ["size", 30, 100],
    ["radius", 0, 60],
    ["gapX", 0, 100],
    ["gapY", 0, 100],
    ["width", 320, 2400],
    ["nameSize", 10, 20],
    ["opacity", 0.1, 1],
  ])
    numberRange(s.icon[key], min, max, "图标 " + key);
  numberRange(s.time.size, 30, 130, "时间大小");
  numberRange(s.search.height, 36, 60, "搜索栏高度");
  numberRange(s.search.width, 300, 1000, "搜索栏宽度");
  numberRange(s.search.radius, 0, 50, "搜索栏圆角");
  numberRange(s.search.opacity, 0.1, 1, "搜索栏透明度");
  numberRange(s.wallpaper.blur, 0, 40, "壁纸模糊");
  numberRange(s.wallpaper.mask, 0, 0.9, "壁纸遮罩");
  if (
    !["light", "dark"].includes(s.theme.mode) ||
    !["widget", "simple"].includes(s.layout.view) ||
    !["image", "color", "gradient", "video"].includes(s.wallpaper.type) ||
    !["left", "right", "hidden"].includes(s.sidebar.placement)
  )
    throw new Error("设置类型无效");
  for (const [section, keys] of Object.entries({
    theme: ["system"],
    sidebar: ["autoHide"],
    time: [
      "show",
      "bold",
      "hour24",
      "sec",
      "month",
      "week",
      "lunar",
      "weekBegin1",
    ],
    search: ["show", "history"],
    open: ["searchBlank", "iconBlank"],
    icon: ["syncGap", "name", "autoSort"],
    layout: ["quote"],
  }))
    for (const key of keys)
      if (typeof s[section][key] !== "boolean")
        throw new Error("开关设置类型无效");
  numberRange(s.sidebar.opacity, 0, 1, "侧边栏透明度");
  numberRange(s.sidebar.width, 30, 120, "侧边栏宽度");
  if (s.icon.widthUnit !== undefined && !["px", "%"].includes(s.icon.widthUnit))
    throw new Error("图标宽度单位无效");
  if (s.icon.widthPercent !== undefined)
    numberRange(s.icon.widthPercent, 40, 100, "图标宽度百分比");
  for (const key of ["lastGroup", "mouseGroup"])
    if (s.sidebar[key] !== undefined && typeof s.sidebar[key] !== "boolean")
      throw new Error("侧边栏开关无效");
  if (!timeFonts.includes(s.time.font)) throw new Error("不支持的时间字体");
  if (
    !/^#[0-9a-f]{6}$/i.test(s.theme.color) ||
    !/^#[0-9a-f]{6}$/i.test(s.time.color) ||
    !/^#[0-9a-f]{6}$/i.test(s.icon.nameColor)
  )
    throw new Error("颜色格式错误");
  if (
    !Array.isArray(s.engines) ||
    !s.engines.length ||
    s.engines.length > 30 ||
    !s.engines.some((e) => e.id === s.search.engine)
  )
    throw new Error("搜索引擎设置错误");
  for (const e of s.engines) {
    if (
      typeof e.name !== "string" ||
      !e.name ||
      e.name.length > 50 ||
      typeof e.id !== "string"
    )
      throw new Error("引擎名称错误");
    searchURL(e, "校验");
  }
  if (
    s.wallpaper.type === "image" &&
    !safeURL(s.wallpaper.src, { image: true })
  )
    throw new Error("壁纸地址无效");
  if (s.wallpaper.type === "color" && !/^#[\da-f]{6}$/i.test(s.wallpaper.src))
    throw new Error("壁纸颜色无效");
  if (s.wallpaper.type === "video" && !safeURL(s.wallpaper.src))
    throw new Error("动态壁纸地址无效");
  if (s.wallpaper.type === "gradient" && !safeGradient(s.wallpaper.src))
    throw new Error("渐变格式无效");
  const ids = new Set();
  let count = 0;
  function items(list, depth = 0) {
    if (!Array.isArray(list) || depth > 1) throw new Error("文件夹格式错误");
    for (const i of list) {
      if (
        ++count > 3000 ||
        !i ||
        typeof i.id !== "string" ||
        ids.has(i.id) ||
        !["site", "widget", "folder", "action"].includes(i.kind) ||
        typeof i.name !== "string" ||
        i.name.length > 100
      )
        throw new Error("图标数据无效或 ID 重复");
      ids.add(i.id);
      if (!["1x1", "2x1", "1x2", "2x2", "4x2"].includes(i.size))
        throw new Error("图标尺寸无效");
      if (i.kind === "site" && !safeURL(i.url, { internal: true }))
        throw new Error("网站地址无效");
      if (i.kind === "widget" && !["original", "native"].includes(i.type))
        throw new Error("组件类型无效");
      if (i.kind === "widget" && i.type === "original")
        originalWidgetURL(i.config?.component);
      if (
        i.kind === "widget" &&
        i.type === "native" &&
        !nativeComponents.has(i.config?.component)
      )
        throw new Error("原版内置组件类型无效");
      if (i.image && !safeURL(i.image, { image: true }))
        throw new Error("图标图片无效");
      if (i.kind === "folder") items(i.children, depth + 1);
    }
  }
  const groupIds = new Set();
  for (const g of input.groups) {
    if (
      !g ||
      typeof g.name !== "string" ||
      !g.name ||
      g.name.length > 40 ||
      typeof g.id !== "string" ||
      groupIds.has(g.id)
    )
      throw new Error("分组数据无效");
    groupIds.add(g.id);
    items(g.items);
  }
  for (const g of input.groups)
    for (const i of g.items) {
      if (i.kind !== "widget") continue;
      const c = i.config;
      if (!c || typeof c !== "object" || Array.isArray(c))
        throw new Error("组件配置无效");
    }
  if (!groupIds.has(input.activeGroup)) throw new Error("当前分组无效");
  if (
    !Array.isArray(input.history) ||
    input.history.length > 100 ||
    input.history.some((x) => typeof x !== "string" || x.length > 500)
  )
    throw new Error("搜索历史格式错误");
  validateNativeData(input.nativeData);
  return clone(input);
}
export function makeBackup(state) {
  return {
    app: APP_ID,
    version: SCHEMA_VERSION,
    createdAt: new Date().toISOString(),
    state: validateState(state),
  };
}
export function parseBackupJSON(text) {
  if (
    typeof text !== "string" ||
    new TextEncoder().encode(text).length > 25 * 1024 * 1024
  )
    throw new Error("备份不能超过 25 MB");
  let data;
  try {
    data = JSON.parse(text.replace(/^\uFEFF/, ""));
  } catch {
    throw new Error("不是有效的 JSON 文件");
  }
  assertPlain(data);
  if (!data || typeof data !== "object" || Array.isArray(data))
    throw new Error("备份格式错误");
  return data;
}
export function parseBackup(text) {
  const data = parseBackupJSON(text);
  if (data.app !== APP_ID || data.version !== SCHEMA_VERSION)
    throw new Error("这不是 NewTab 备份文件");
  return validateState(data.state);
}
export function moveItem(items, source, target) {
  const a = items.findIndex((i) => i.id === source),
    b = items.findIndex((i) => i.id === target);
  if (a < 0 || b < 0 || a === b) return false;
  const [item] = items.splice(a, 1);
  items.splice(b, 0, item);
  return true;
}
