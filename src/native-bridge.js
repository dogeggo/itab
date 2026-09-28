import {
  nativeData,
  deniedNativeKeys,
  encodeNative,
  decodeNative,
  dataNamespaces,
} from "./native-data.js";
import { nativeComponents } from "../original/registry.js";
import { hasNativeCard } from "./original-widgets.js";
import { safeURL, safeGradient } from "./model.js";
import { nativeDataChanges } from "./state-sync.js";
let context;
const externalStoreVersions = new Map();
const sessions = new Set();
const utilities = new Map();
const editVersions = new Map();
export async function flushNativeCards(component) {
  await Promise.all([...sessions]
    .filter((s) => s.active() && s.mode === "card" && s.component === component)
    .map((s) => s.flush()));
}
export function nativeUtility(component) {
  if (component !== "wallpaper") throw new Error("未知主页工具");
  const item = {
    id: "utility-wallpaper",
    kind: "widget",
    type: "native",
    name: "壁纸",
    size: "1x1",
    config: { component: "wallpaper", original: { config: {} } },
  };
  utilities.set(item.id, item);
  return item;
}
const flatten = (state) =>
  state.groups.flatMap((g) =>
    g.items.flatMap((i) => (i.kind === "folder" ? [i, ...i.children] : [i])),
  );
const json = (value) => JSON.parse(JSON.stringify(value));
export function initNativeBridge(options) {
  context = options;
  externalStoreVersions.clear();
  sessions.clear();
  editVersions.clear();
  window.__itabNativeBridge = { connect };
}
export async function syncNativeData(incoming) {
  const state = context.getState();
  const changes = nativeDataChanges(nativeData(state), incoming);
  if (!changes.length) return;
  for (const [key, value] of changes) {
    if (key === "__store__") externalStoreVersions.set(value, (externalStoreVersions.get(value) || 0) + 1);
  }
  state.nativeData = incoming;
  // 保留 state 及卡片会话，接收方只更新视图，不把收到的数据再次保存/广播。
  await Promise.all([...sessions].filter(s => s.active()).map(s => s.receive(changes)));
}
function connect(frameWindow, id, mode) {
  for (const session of sessions)
    if (!session.active()) sessions.delete(session);
  const element = Array.from(
    document.querySelectorAll("iframe[data-native-id]"),
  ).find((f) => f.contentWindow === frameWindow && f.dataset.nativeId === id);
  const getItem = () =>
    flatten(context.getState()).find(
      (i) => i.id === id && hasNativeCard(i),
    ) || utilities.get(id);
  const item = getItem();
  if (!element || !item || !hasNativeCard(item) ||
      !["card", "dialog"].includes(mode) ||
      (mode === "dialog" && item.type !== "native"))
    throw new Error("原版组件宿主参数无效");
  const originalState = context.getState();
  const component = item.config.component;
  let disposed = false, receiving = 0;
  if (mode === "dialog")
    editVersions.set(component, (editVersions.get(component) || 0) + 1);
  const active = () =>
    !disposed && element.isConnected && context.getState() === originalState;
  // 弹窗编辑期间同类卡片继续显示、计时，但不得用旧快照覆盖弹窗数据。
  const writable = () => !receiving && active() && (mode !== "card" ||
    ![...sessions].some((s) => s.active() && s.mode === "dialog" && s.component === component));
  const read = () => nativeData(context.getState());
  const persist = () => {
    if (active()) return context.save();
  };
  const emit = (key, value) => {
    for (const s of sessions) {
      if (!s.active()) {
        sessions.delete(s);
        continue;
      }
      if (s !== session) s.notify?.(key, value);
    }
  };
  const ephemeral = {};
  const rowFor = (i) => ({
    ...json(i.config.original || {}),
    id: i.id,
    name: i.name,
    component: i.config.component,
    type: "component",
    // 主页尺寸按列×行保存，原版卡片的尺寸参数按行×列解释。
    size: { "1x2": "2x1", "2x1": "1x2", "4x2": "2x4" }[i.size] || i.size,
    config: json(i.config.original?.config || {}),
    src: i.image || "",
    insetType: i.type === "original" ? "iframe" : "",
  });
  const subscribers = new Set();
  const session = {
    dispose: () => {
      disposed = true;
      subscribers.clear();
      sessions.delete(session);
    },
    notify: (key, value) =>
      [...subscribers].map((callback) => callback(key, value)),
    async receive(changes) {
      receiving++;
      try {
        await Promise.all(changes.flatMap(([key, value]) => session.notify(key, value)));
      } finally {
        receiving--;
      }
    },
    active,
    mode,
    component,
    flush: () => frameWindow.__nativeFlush?.(),
    sync: () => frameWindow.__nativeSync?.(),
    async syncCards() {
      await Promise.all([...sessions]
        .filter((s) => s.active() && s.mode === "card" && s.component === component)
        .map((s) => s.sync()));
    },
    getRow: () => rowFor(getItem()),
    readText(key) {
      if (deniedNativeKeys.test(key)) return null;
      if (key === "navConfig")
        return JSON.stringify([
          {
            id: "native",
            name: "原版组件",
            children: flatten(context.getState())
              .filter(hasNativeCard)
              .map(rowFor),
          },
        ]);
      if (key === "baseConfig") return ephemeral[key] ?? null;
      return read().local[key] ?? null;
    },
    writeText(key, value) {
      if (!writable()) return;
      if (deniedNativeKeys.test(key)) return;
      if (["baseConfig", "menuActiveId"].includes(key)) {
        if (key === "baseConfig") {
          const next = JSON.parse(value);
          const saved = JSON.parse(read().local.baseConfig || "{}");
          if (Array.isArray(next.topSearch) && JSON.stringify(next.topSearch) !== JSON.stringify(saved.topSearch)) {
            read().local.baseConfig = JSON.stringify({ topSearch: next.topSearch });
            persist();
          }
        }
        if (key === "baseConfig" && ephemeral[key] && mode === "dialog") {
          const before = JSON.parse(ephemeral[key]),
            next = JSON.parse(value);
          if (next.wallpaper?.src !== before.wallpaper?.src) {
            const w = next.wallpaper;
            let src = w.src;
            if (/^#[\da-f]{3}$/i.test(src))
              src =
                "#" +
                src
                  .slice(1)
                  .split("")
                  .map((x) => x + x)
                  .join("");
            const type =
              w.type === 2 && safeURL(src)
                ? "video"
                : safeGradient(src)
                  ? "gradient"
                  : /^#[\da-f]{6}$/i.test(src)
                    ? "color"
                    : safeURL(src, { image: true })
                      ? "image"
                      : null;
            if (type) {
              const s = context.getState().settings;
              s.wallpaper = {
                ...s.wallpaper,
                type,
                src,
                name: w.name || "原版壁纸",
              };
              persist();
              context.applyTheme();
            }
          }
        }
        ephemeral[key] = value;
        return;
      }
      if (key === "navConfig") {
        const beforeGroups = JSON.stringify(context.getState().groups);
        for (const row of JSON.parse(value).flatMap((g) => g.children || [])) {
          const target = flatten(context.getState()).find(
            (i) => i.id === row.id && hasNativeCard(i),
          );
          if (target && row.config) {
            target.config.original = {
              ...target.config.original,
              config: row.config,
            };
            if (typeof row.name === "string" && row.name)
              target.name = row.name.slice(0, 100);
          } else if (!target && nativeComponents.has(row.component)) {
            const group = context
              .getState()
              .groups.find((g) => g.id === context.getState().activeGroup);
            const size = { "2x4": "4x2" }[row.size] || row.size || "2x2";
            if (
              typeof row.id !== "string" ||
              flatten(context.getState()).some((i) => i.id === row.id)
            )
              continue;
            group.items.push({
              id: row.id,
              kind: "widget",
              type: "native",
              name: String(row.name || row.component).slice(0, 100),
              size: ["1x1", "1x2", "2x1", "2x2", "4x2"].includes(size)
                ? size
                : "2x2",
              image: safeURL(row.src, { image: true }),
              config: {
                component: row.component,
                original: { config: row.config || {} },
              },
            });
          } else if (
            !target &&
            ["icon", "text"].includes(row.type) &&
            safeURL(row.url, { internal: true }) &&
            typeof row.id === "string" &&
            !flatten(context.getState()).some((i) => i.id === row.id)
          ) {
            const group = context
              .getState()
              .groups.find((g) => g.id === context.getState().activeGroup);
            group.items.push({
              id: row.id,
              kind: "site",
              name: String(row.name || "书签").slice(0, 100),
              url: row.url,
              size: "1x1",
              image: safeURL(row.src, { image: true }),
              color: "#ffffff",
            });
          }
        }
        if (beforeGroups === JSON.stringify(context.getState().groups)) return;
      } else {
        value = String(value);
        if (read().local[key] === value) return;
        read().local[key] = value;
      }
      persist();
      emit(key, value);
    },
    removeValue(key) {
      if (!writable()) return;
      if (deniedNativeKeys.test(key)) return;
      if (!Object.hasOwn(read().local, key)) return;
      delete read().local[key];
      persist();
      emit(key, null);
    },
    valueKeys: () => Object.keys(read().local),
    async storeGet(namespace, key) {
      if (!dataNamespaces.has(namespace)) throw new Error("未知组件数据空间");
      return decodeNative(read().stores[namespace]?.[key] ?? null);
    },
    async storeSet(namespace, key, value) {
      if (!dataNamespaces.has(namespace)) throw new Error("未知组件数据空间");
      if (!writable()) return;
      const version = editVersions.get(component);
      const dataKey = JSON.stringify({ namespace, key });
      const externalVersion = externalStoreVersions.get(dataKey);
      const encoded = await encodeNative(value);
      if (!writable() || externalVersion !== externalStoreVersions.get(dataKey) ||
          (mode === "card" && version !== editVersions.get(component))) return;
      if (
        JSON.stringify(read().stores[namespace]?.[key]) ===
        JSON.stringify(encoded)
      )
        return;
      (read().stores[namespace] ??= {})[key] = encoded;
      await persist();
      emit("__store__", JSON.stringify({ namespace, key }));
    },
    async storeRemove(namespace, key) {
      if (!dataNamespaces.has(namespace)) throw new Error("未知组件数据空间");
      if (!writable()) return;
      if (!Object.hasOwn(read().stores[namespace] || {}, key)) return;
      delete read().stores[namespace]?.[key];
      await persist();
      emit("__store__", JSON.stringify({ namespace, key }));
    },
    storeKeys: (namespace) => {
      if (!dataNamespaces.has(namespace)) throw new Error("未知组件数据空间");
      return Object.keys(read().stores[namespace] || {});
    },
    subscribe(callback) {
      subscribers.add(callback);
      return () => subscribers.delete(callback);
    },
    theme: () => ({
      ...json(context.getState().settings.theme),
      mode: document.documentElement.dataset.theme,
      system: false,
    }),
    appearance: () => json(context.getState().settings.icon),
    preferences: () => ({
      ...JSON.parse(read().local.baseConfig || "{}"),
      weekBegin1: context.getState().settings.time.weekBegin1,
    }),
    wallpaper: () => json(context.getState().settings.wallpaper),
    open: () => context.open(getItem()),
    contextMenu: (x, y) => {
      const rect = element.getBoundingClientRect();
      element.dispatchEvent(
        new MouseEvent("contextmenu", {
          bubbles: true,
          clientX: rect.left + x,
          clientY: rect.top + y,
        }),
      );
    },
    openWindow: () => {
      const url = new URL("index.html", location.href);
      url.searchParams.set("native", id);
      window.open(url.href, "_blank", "noopener");
    },
    close: () => context.close(),
    error: (message) => {
      element.dataset.nativeStatus = "error";
      element.dataset.nativeError = String(message).slice(0, 300);
    },
    ready: () => {
      element.dataset.nativeStatus = "ready";
    },
  };
  sessions.add(session);
  return session;
}
export function refreshNativeThemes() {
  for (const s of sessions) {
    if (!s.active()) {
      sessions.delete(s);
      continue;
    }
    s.notify?.("__theme__", null);
  }
}
export function nativeFrameURL(item, mode = "card") {
  return `original/host.html?id=${encodeURIComponent(item.id)}&mode=${mode}`;
}
