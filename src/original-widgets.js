// 由原版 widget/list 的 insetType=iframe 及实际页面地址核实；扩展不执行远程 JS 模块。
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
        name: row.name.slice(0, 100),
        description:
          typeof row.description === "string"
            ? row.description.slice(0, 300)
            : "",
        image,
        available:
          row.insetType === "iframe" && originalComponents.has(row.component),
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
  originalWidgetURL(row.component);
  return {
    id: crypto.randomUUID(),
    kind: "widget",
    type: "original",
    name: row.name,
    size: "1x1",
    image: row.image,
    color: row.color,
    config: { component: row.component },
  };
}
