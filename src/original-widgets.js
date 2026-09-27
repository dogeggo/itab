import { nativeComponents, nativeCardComponents } from "../original/registry.js";
export function hasNativeCard(item) {
  return (item.type === "native" && nativeComponents.has(item.config?.component)) ||
    (item.type === "original" && originalComponents.has(item.config?.component) &&
      nativeCardComponents.has(item.config.component));
}
// 在线页面与随包提供的原版内置组件使用不同宿主。
export const originalComponents = new Set([
  "xiayigejiaqi",
  "dino",
  "speedtest",
  "2048",
  "qwertyLearner",
  "webGradients",
  "imgCompress",
  "timestamp",
  "colorAvatar",
  "audioConvert",
  "encryptionTools",
  "ip",
  "videoCut",
  "relationship",
  "multiavatar",
  "audioCut",
  "uppercase",
  "chinaedu",
]);
export const catalogURL =
  "https://base.itab.link/widget/list?category=widget&size=100&page=1&lang=cn";
export function originalWidgetURL(component, theme = "light") {
  if (!originalComponents.has(component))
    throw new Error("暂不支持此原版在线组件");
  const url = new URL(`https://widget.itab.link/${component}/index.html`);
  url.searchParams.set("sdk_from", "itab-local");
  url.searchParams.set("theme", theme === "dark" ? "dark" : "light");
  return url.href;
}
export function parseCatalog(payload) {
  if (payload?.code !== 200 || !Array.isArray(payload.data))
    throw new Error("原版仓库返回了无效的组件列表");
  const seen = new Set();
  return payload.data.flatMap((row) => {
    if (
      !row ||
      typeof row.component !== "string" ||
      !/^[A-Za-z0-9]+$/.test(row.component) ||
      seen.has(row.component) ||
      (!nativeComponents.has(row.component) && !originalComponents.has(row.component)) ||
      typeof row.name !== "string" ||
      !row.name.trim()
    )
      return [];
    seen.add(row.component);
    let image = "";
    try {
      const url = new URL(row.src);
      if (
        url.origin === "https://files.itab.link" &&
        !url.username &&
        !url.password
      )
        image = url.href;
    } catch {
      /* 缺图时展示本地图标。 */
    }
    return [
      {
        component: row.component,
        name: row.name.replace(/\biTab(?: Local)?\b/gi, "NewTab").slice(0, 100),
        description:
          typeof row.description === "string"
            ? row.description.replace(/\biTab(?: Local)?\b/gi, "NewTab").slice(0, 300)
            : "",
        image,
        available:
          nativeComponents.has(row.component) ||
          (row.insetType === "iframe" && originalComponents.has(row.component)),
        runtime: nativeComponents.has(row.component) ? "native" : "online",
        original: nativeComponents.has(row.component)
          ? {
              config: row.config || {},
              component: row.component,
              type: row.type,
            }
          : undefined,
        color: /^#[0-9a-f]{6}$/i.test(row.backgroundColor)
          ? row.backgroundColor
          : "#ffffff",
      },
    ];
  });
}
export async function fetchOriginalCatalog() {
  const response = await fetch(catalogURL, {
    credentials: "omit",
    signal: AbortSignal.timeout(15000),
  });
  if (!response.ok)
    throw new Error(`原版仓库暂时不可用（HTTP ${response.status}）`);
  return parseCatalog(await response.json());
}
export function newOriginalWidget(row) {
  if (!row.available) throw new Error("该组件需要原版宿主，暂不能直接添加");
  if (row.runtime !== "native") originalWidgetURL(row.component);
  else if (!nativeComponents.has(row.component))
    throw new Error("未知原版内置组件");
  return {
    id: crypto.randomUUID(),
    kind: "widget",
    type: row.runtime === "native" ? "native" : "original",
    name: row.name,
    size:
      nativeCardComponents.has(row.component)
        ? ["topsearch", "countdown", "stock", "sport", "vgn", "xiayigejiaqi"].includes(
            row.component,
          )
          ? "4x2"
          : "2x2"
        : "1x1",
    image: row.image,
    color: row.color,
    config: {
      component: row.component,
      ...(row.runtime === "native" ? { original: row.original || {} } : {}),
    },
  };
}
