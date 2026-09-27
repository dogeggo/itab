import fs from "node:fs/promises";
const root = new URL("../", import.meta.url);
const nav = JSON.parse(
  await fs.readFile(new URL("docs/original-live-state.json", root), "utf8"),
).navigation;
const map = JSON.parse(
  await fs.readFile(new URL("assets/site-map.json", root), "utf8"),
);
const componentTypes = {
  weather: "weather",
  calendar: "calendar",
  topsearch: "hotlist",
  daysMatter: "days",
  notes: "notes",
  movieCalendar: "movie",
  countdown: "offwork",
  wallpaper: "wallpaper",
  todo: "todo",
  calculator: "calculator",
  tomato: "pomodoro",
  water: "water",
};
const direct = {
  淘宝: "https://www.taobao.com",
  京东商城: "https://www.jd.com",
  天猫精选: "https://www.tmall.com",
  稿定设计: "https://www.gaoding.com",
  Apifox: "https://apifox.com",
  携程网: "https://www.ctrip.com",
};
function convert(i) {
  if (
    ["pdfConvert", "aippt"].includes(i.component) ||
    /^https:\/\/(www\.)?(aippt\.cn|pptgo\.cn)(\/|\?|$)/i.test(i.url || "")
  )
    return null;
  const item = {
    id: i.id,
    name: i.name,
    kind: "site",
    size: i.size === "2x4" ? "4x2" : i.size || "1x1",
    url: direct[i.name] || i.url,
    image: map[i.src] || "",
    color: i.backgroundColor || "#ffffff",
  };
  if (item.url?.startsWith("http")) {
    try {
      const u = new URL(item.url);
      u.search = "";
      item.url = u.href;
    } catch {
      return null;
    }
  }
  if (i.type === "folder")
    return {
      ...item,
      kind: "folder",
      url: undefined,
      children: i.children.map(convert).filter(Boolean),
    };
  if (componentTypes[i.component])
    return {
      ...item,
      kind: "widget",
      type: componentTypes[i.component],
      url: undefined,
      config:
        i.component === "daysMatter"
          ? { title: "你在世界已经", date: "1997-10-01", countUp: true }
          : i.component === "weather"
            ? { city: "北京", latitude: 39.9, longitude: 116.4 }
            : i.component === "countdown"
              ? { time: "18:00", start: "09:00" }
              : i.component === "movieCalendar"
                ? {
                    title: "肖申克的救赎",
                    quote: "希望是美好的，也许是人间至善。",
                    year: "1994",
                  }
                : {},
    };
  if (i.component === "bookmarks")
    return { ...item, url: "chrome://bookmarks/" };
  if (i.url === "itab://setting")
    return { ...item, kind: "action", action: "settings", url: undefined };
  if (i.url === "itab://guide")
    return {
      ...item,
      kind: "action",
      name: "添加组件",
      action: "add-widget",
      url: undefined,
    };
  if (!item.url || item.url.startsWith("itab:")) return null;
  return item;
}
const symbols = ["home", "code", "palette", "product", "sparkles", "game"];
const groups = nav.map((g, n) => ({
  id: g.id,
  name: g.name,
  icon: symbols[n],
  items: g.children.map(convert).filter(Boolean),
}));
// 首页延续原包中的顺序和组件大小，去除推广跳转并保留网站官方入口。
await fs.writeFile(
  new URL("assets/seed.json", root),
  JSON.stringify(groups, null, 2),
);
console.log("默认分组已生成，网站使用直接地址。");
