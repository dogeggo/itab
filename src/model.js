import { originalWidgetURL } from "./original-widgets.js";
export const APP_ID = "itab-local";
export const SCHEMA_VERSION = 1;
export const uid = () => globalThis.crypto.randomUUID();
export const clone = (value) => structuredClone(value);
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
    engine: "baidu",
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
      id: "360",
      name: "360搜索",
      url: "https://www.so.com/s?q={query}",
      mark: "360",
      color: "#19b955",
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
export const widgetCatalog = [
  {
    type: "weather",
    name: "天气",
    size: "2x2",
    icon: "cloud",
    description: "实时天气 · 城市搜索",
  },
  {
    type: "calendar",
    name: "日历",
    size: "2x2",
    icon: "calendar",
    description: "公历农历 · 月历翻页",
  },
  {
    type: "hotlist",
    name: "热搜榜",
    size: "4x2",
    icon: "trending",
    description: "热榜入口 · Hacker News 实时榜",
  },
  {
    type: "days",
    name: "倒数日",
    size: "2x2",
    icon: "heart",
    description: "纪念日 · 自动计算天数",
  },
  {
    type: "notes",
    name: "备忘录",
    size: "2x2",
    icon: "note",
    description: "随手记录 · 自动保存",
  },
  {
    type: "todo",
    name: "待办事项",
    size: "2x2",
    icon: "check",
    description: "添加任务 · 勾选完成",
  },
  {
    type: "offwork",
    name: "下班倒计时",
    size: "4x2",
    icon: "coffee",
    description: "工作时间 · 周末倒计时",
  },
  {
    type: "movie",
    name: "电影日历",
    size: "2x2",
    icon: "film",
    description: "每日电影卡片 · 自定义片单",
  },
  {
    type: "calculator",
    name: "计算器",
    size: "2x2",
    icon: "calculator",
    description: "四则运算 · 括号与百分数",
  },
  {
    type: "pomodoro",
    name: "番茄钟",
    size: "2x2",
    icon: "timer",
    description: "专注计时 · 暂停与重置",
  },
  {
    type: "water",
    name: "喝水提醒",
    size: "2x2",
    icon: "water",
    description: "记录饮水 · 每日进度",
  },
  {
    type: "wallpaper",
    name: "壁纸",
    size: "1x1",
    icon: "image",
    description: "快速切换主题壁纸",
  },
];
export function newWidget(type) {
  const w = widgetCatalog.find((w) => w.type === type);
  if (!w) throw new Error("未知组件");
  return {
    id: uid(),
    kind: "widget",
    type,
    name: w.name,
    size: w.size,
    config:
      type === "days"
        ? { title: "你在世界已经", date: "1997-10-01", countUp: true }
        : type === "offwork"
          ? { time: "18:00", start: "09:00" }
          : type === "weather"
            ? { city: "北京", latitude: 39.9, longitude: 116.4 }
            : type === "movie"
              ? {
                  title: "肖申克的救赎",
                  quote: "希望是美好的，也许是人间至善。",
                  year: "1994",
                }
              : {},
  };
}
export function createState(groups = []) {
  return {
    schemaVersion: SCHEMA_VERSION,
    settings: clone(defaults),
    groups,
    activeGroup: groups[0]?.id || "home",
    history: [],
    widgetData: {},
    updatedAt: new Date().toISOString(),
  };
}
export function safeURL(value, { internal = false, image = false } = {}) {
  if (typeof value !== "string" || value.length > (image ? 16_000_000 : 2048))
    return "";
  if (
    image &&
    /^(assets\/[\w/.-]+|data:image\/(png|jpeg|webp|gif);base64,[A-Za-z\d+/=]+)$/.test(
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
  const s = input.settings;
  if (!s || typeof s !== "object") throw new Error("备份缺少设置");
  for (const key of Object.keys(defaults))
    if (s[key] === undefined) throw new Error("备份设置不完整：" + key);
  for (const [key, min, max] of [
    ["size", 30, 100],
    ["radius", 0, 60],
    ["gapX", 10, 80],
    ["gapY", 10, 80],
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
    !["image", "color", "gradient"].includes(s.wallpaper.type) ||
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
  numberRange(s.sidebar.width, 30, 100, "侧边栏宽度");
  if (
    ![
      "HarmonyOS_Sans",
      "MiSans",
      "JetBrains",
      "dsdigi",
      "Oswald",
      "Orbitron",
      "Arial",
    ].includes(s.time.font)
  )
    throw new Error("不支持的时间字体");
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
  if (
    s.wallpaper.type === "gradient" &&
    !/^linear-gradient\([\d.]+deg,\s*#[\da-f]{6},\s*#[\da-f]{6}\)$/i.test(
      s.wallpaper.src,
    )
  )
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
      if (
        i.kind === "widget" &&
        i.type !== "original" &&
        !widgetCatalog.some((w) => w.type === i.type)
      )
        throw new Error("组件类型无效");
      if (i.kind === "widget" && i.type === "original")
        originalWidgetURL(i.config?.component);
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
      if (i.type === "weather") {
        if (c.latitude !== undefined) numberRange(c.latitude, -90, 90, "纬度");
        if (c.longitude !== undefined)
          numberRange(c.longitude, -180, 180, "经度");
        if (c.city !== undefined && typeof c.city !== "string")
          throw new Error("城市无效");
      }
      if (i.type === "offwork")
        for (const key of ["time", "start"])
          if (c[key] !== undefined && !/^([01]\d|2[0-3]):[0-5]\d$/.test(c[key]))
            throw new Error("上下班时间无效");
      if (
        i.type === "days" &&
        c.date !== undefined &&
        (!/^\d{4}-\d{2}-\d{2}$/.test(c.date) ||
          !Number.isFinite(new Date(c.date).getTime()))
      )
        throw new Error("倒数日日期无效");
      for (const key of ["title", "quote", "year"])
        if (
          c[key] !== undefined &&
          (typeof c[key] !== "string" || c[key].length > 1000)
        )
          throw new Error("组件文本无效");
    }
  if (!groupIds.has(input.activeGroup)) throw new Error("当前分组无效");
  if (
    !Array.isArray(input.history) ||
    input.history.length > 100 ||
    input.history.some((x) => typeof x !== "string" || x.length > 500)
  )
    throw new Error("搜索历史格式错误");
  if (
    !input.widgetData ||
    typeof input.widgetData !== "object" ||
    Array.isArray(input.widgetData)
  )
    throw new Error("组件数据无效");
  for (const d of Object.values(input.widgetData)) {
    if (!d || typeof d !== "object" || Array.isArray(d))
      throw new Error("组件数据格式错误");
    if (
      d.text !== undefined &&
      (typeof d.text !== "string" || d.text.length > 100000)
    )
      throw new Error("便签内容过长");
    if (
      d.todos !== undefined &&
      (!Array.isArray(d.todos) ||
        d.todos.length > 1000 ||
        d.todos.some(
          (t) =>
            !t ||
            typeof t.id !== "string" ||
            typeof t.text !== "string" ||
            typeof t.done !== "boolean",
        ))
    )
      throw new Error("待办数据无效");
  }
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
export function parseBackup(text) {
  if (
    typeof text !== "string" ||
    new TextEncoder().encode(text).length > 25 * 1024 * 1024
  )
    throw new Error("备份不能超过 25 MB");
  let data;
  try {
    data = JSON.parse(text);
  } catch {
    throw new Error("不是有效的 JSON 文件");
  }
  if (data.app !== APP_ID || data.version !== SCHEMA_VERSION)
    throw new Error("这不是 iTab Local 备份文件");
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
export function daysBetween(date, now = new Date()) {
  const d = new Date(date + "T12:00:00");
  if (!Number.isFinite(d.getTime())) return 0;
  return Math.round(
    (Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) -
      Date.UTC(now.getFullYear(), now.getMonth(), now.getDate())) /
      86400000,
  );
}
// 递归下降解析器：不使用 eval / Function，符合扩展 CSP。
export function calculate(expression) {
  const input = String(expression)
    .replace(/\s/g, "")
    .replace(/×/g, "*")
    .replace(/÷/g, "/")
    .replace(/−/g, "-");
  if (input.length > 200 || !/^[\d.+\-*/()%]+$/.test(input))
    throw new Error("请输入有效算式");
  let p = 0;
  function atom() {
    let v;
    if (input[p] === "+") {
      p++;
      return atom();
    }
    if (input[p] === "-") {
      p++;
      return -atom();
    }
    if (input[p] === "(") {
      p++;
      v = sum();
      if (input[p++] !== ")") throw new Error("括号不匹配");
    } else {
      const m = input.slice(p).match(/^(\d+(?:\.\d*)?|\.\d+)/);
      if (!m) throw new Error("算式不完整");
      p += m[0].length;
      v = Number(m[0]);
    }
    while (input[p] === "%") {
      v /= 100;
      p++;
    }
    return v;
  }
  function product() {
    let v = atom();
    while (input[p] === "*" || input[p] === "/") {
      const op = input[p++],
        rhs = atom();
      if (op === "/" && rhs === 0) throw new Error("不能除以零");
      v = op === "*" ? v * rhs : v / rhs;
    }
    return v;
  }
  function sum() {
    let v = product();
    while (input[p] === "+" || input[p] === "-") {
      const op = input[p++],
        rhs = product();
      v = op === "+" ? v + rhs : v - rhs;
    }
    return v;
  }
  const result = sum();
  if (p !== input.length || !Number.isFinite(result))
    throw new Error("算式无效");
  return Number(result.toPrecision(12));
}
