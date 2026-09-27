// 将当前项目设置映射到原版组件的公开 data 属性。持久化格式仍为 schemaVersion 2。
export const timeFonts = [
  "auto",
  "HarmonyOS_Sans",
  "MiSans",
  "JetBrains",
  "dsdigi",
  "Oswald",
  "Orbitron",
  "Arial",
  "Bebas",
  "Silkscreen",
  "Aldrich",
  "TrainOne",
  "AbrilFatface",
  "Expansiva",
  "Nabla",
  "Merriweather",
  "PlusJakartaSans",
];
const hex = (c) =>
  /^#[\da-f]{3}$/i.test(c)
    ? "#" + [...c.slice(1)].map((x) => x + x).join("")
    : c;
export function toAppearance(s) {
  return {
    icon: {
      iconLayout: s.icon.layout || "custom",
      iconSize: s.icon.size,
      iconRadius: s.icon.radius,
      opactiy: s.icon.opacity,
      xysync: s.icon.syncGap,
      iconX: s.icon.gapX,
      iconY: s.icon.gapY,
      name: Number(s.icon.name),
      nameSize: s.icon.nameSize,
      nameColor: s.icon.nameColor,
      unit: s.icon.widthUnit || "px",
      width: s.icon.widthUnit === "%" ? s.icon.widthPercent : s.icon.width,
    },
    time: {
      ...s.time,
      month: s.time.month ? "inline" : "none",
      week: s.time.week ? "inline" : "none",
      lunar: s.time.lunar ? "inline" : "none",
      fontWeight: s.time.bold ? "600" : "400",
    },
    open: { ...s.open },
    search: { ...s.search, bgColor: s.search.opacity },
    layout: { ...s.layout, yiyan: s.layout.quote },
    sidebar: {
      ...s.sidebar,
      lastGroup: s.sidebar.lastGroup ?? true,
      mouseGroup: s.sidebar.mouseGroup ?? true,
    },
    theme: { ...s.theme },
    wallpaper: {
      ...s.wallpaper,
      type: { image: 1, video: 2, color: 3, gradient: 3 }[s.wallpaper.type],
      thumb: s.wallpaper.src,
    },
  };
}
export function applyAppearance(s, panel, a) {
  const d = a[panel];
  if (panel === "icon")
    Object.assign(s.icon, {
      layout: d.iconLayout,
      size: d.iconSize,
      radius: d.iconRadius,
      opacity: d.opactiy,
      syncGap: d.xysync,
      gapX: d.iconX,
      gapY: d.iconY,
      name: !!d.name,
      nameSize: d.nameSize,
      nameColor: hex(d.nameColor),
      widthUnit: d.unit,
      width: d.unit === "px" ? d.width : s.icon.width,
      widthPercent: d.unit === "%" ? d.width : s.icon.widthPercent || 72,
    });
  if (panel === "time")
    Object.assign(s.time, {
      show: d.show,
      size: d.size,
      font: d.font,
      color: hex(d.color),
      hour24: d.hour24,
      sec: d.sec,
      month: d.month === "inline",
      week: d.week === "inline",
      lunar: d.lunar === "inline",
      bold: d.fontWeight === "600",
    });
  if (panel === "open") Object.assign(s.open, d);
  if (panel === "search")
    Object.assign(s.search, {
      show: d.show,
      height: d.height,
      radius: d.radius,
      opacity: d.bgColor,
      history: d.history,
    });
  if (panel === "layout")
    Object.assign(s.layout, { view: d.view, quote: d.yiyan });
  if (panel === "sidebar")
    Object.assign(s.sidebar, {
      placement: d.placement,
      autoHide: d.autoHide,
      opacity: d.opacity,
      width: d.width,
      lastGroup: d.lastGroup,
      mouseGroup: d.mouseGroup,
    });
  if (panel === "wallpaper") {
    Object.assign(s.theme, { ...a.theme, color: hex(a.theme.color) });
    Object.assign(s.wallpaper, { mask: d.mask, blur: d.blur });
  }
  return s;
}
