import test from "node:test";
import assert from "node:assert/strict";
import { initNativeBridge, flushNativeCards } from "../src/native-bridge.js";
import { createState, makeBackup } from "../src/model.js";
test("假期在线组件可挂载原版卡片、保存缓存及打开详情，其他在线组件不能接入宿主", (t) => {
  const previousWindow = globalThis.window, previousDocument = globalThis.document;
  t.after(() => { globalThis.window = previousWindow; globalThis.document = previousDocument; });
  const item = { id: "holiday", kind: "widget", type: "original", name: "下一个假期", size: "4x2", config: { component: "xiayigejiaqi" } };
  const state = createState([{ id: "home", name: "主页", items: [item] }]);
  const child = {}, frame = { contentWindow: child, dataset: { nativeId: item.id }, isConnected: true };
  let opened, saves = 0;
  globalThis.window = {};
  globalThis.document = { querySelectorAll: () => [frame], documentElement: { dataset: { theme: "light" } } };
  initNativeBridge({ getState: () => state, save: () => { saves++; }, open: (value) => { opened = value; } });
  assert.throws(() => window.__itabNativeBridge.connect(child, item.id, "dialog"));
  const card = window.__itabNativeBridge.connect(child, item.id, "card");
  assert.equal(card.getRow().size, "2x4");
  for (const [size, originalSize] of Object.entries({ "1x1": "1x1", "1x2": "2x1", "2x1": "1x2", "2x2": "2x2", "4x2": "2x4" })) {
    item.size = size;
    assert.equal(card.getRow().size, originalSize);
  }
  assert.equal(card.getRow().insetType, "iframe");
  assert.equal(JSON.parse(card.readText("navConfig"))[0].children[0].component, "xiayigejiaqi");
  assert.equal(card.readText("xiayigejiaqiData"), null);
  const holidays = [{ name: "国庆节", holiday: "2026-10-01" }];
  card.writeText("xiayigejiaqiData", JSON.stringify(holidays));
  assert.deepEqual(JSON.parse(card.readText("xiayigejiaqiData")), holidays);
  assert.equal(saves, 1);
  card.open();
  assert.equal(opened, item);
  assert.equal(opened.type, "original");
  item.config.component = "2048";
  assert.throws(() => window.__itabNativeBridge.connect(child, item.id, "card"));
});
test("原版宿主拒绝伪造 frame，恢复后旧 frame 的延迟写入失效，凭据不进入备份", async () => {
  const previous = {
    document: globalThis.document,
    window: globalThis.window,
    localStorage: globalThis.localStorage,
  };
  const child = {},
    frame = {
      contentWindow: child,
      dataset: { nativeId: "native-1" },
      isConnected: true,
    };
  const local = new Map();
  let state = createState([
    {
      id: "g",
      name: "测试",
      icon: "home",
      items: [
        {
          id: "native-1",
          kind: "widget",
          type: "native",
          name: "待办",
          size: "2x2",
          config: { component: "todo", original: { config: {} } },
        },
      ],
    },
  ]);
  let saves = 0;
  try {
    globalThis.window = {};
    globalThis.document = {
      querySelectorAll: () => [frame],
      documentElement: { dataset: { theme: "light" } },
    };
    globalThis.localStorage = {
      getItem: (k) => local.get(k) ?? null,
      setItem: (k, v) => local.set(k, v),
      removeItem: (k) => local.delete(k),
    };
    initNativeBridge({
      getState: () => state,
      save: async () => {
        saves++;
      },
    });
    assert.throws(() =>
      window.__itabNativeBridge.connect({}, "native-1", "dialog"),
    );
    const session = window.__itabNativeBridge.connect(
      child,
      "native-1",
      "dialog",
    );
    state.nativeData.local.baseConfig = JSON.stringify({ topSearch: [{ id: "topic", name: "导入榜单" }] });
    state.settings.time.weekBegin1 = false;
    assert.equal(session.readText("baseConfig"), null, "保留原版组件的完整默认配置初始化");
    assert.deepEqual(session.preferences(), { topSearch: [{ id: "topic", name: "导入榜单" }], weekBegin1: false });
    session.writeText("navConfig", session.readText("navConfig"));
    assert.equal(saves, 0, "未改变导航不重复保存，防止跨标签页刷新循环");
    session.writeText("token", "fixture-token");
    assert.equal(session.readText("token"), null);
    assert.equal(
      JSON.stringify(makeBackup(state)).includes("fixture-token"),
      false,
    );
    await session.storeSet("cache", "notes", [{ content: "保留的数据" }]);
    assert.equal(saves, 1);
    const pending = session.storeSet(
      "cache",
      "notes",
      new Blob(["不应恢复的旧内容"]),
    );
    state = structuredClone(state);
    await pending;
    assert.deepEqual(state.nativeData.stores.cache.notes, [
      { content: "保留的数据" },
    ]);
    assert.equal(saves, 1);
    session.writeText("notes", "旧内容");
    assert.equal(state.nativeData.local.notes, undefined);
  } finally {
    for (const [k, v] of Object.entries(previous)) {
      if (v === undefined) delete globalThis[k];
      else globalThis[k] = v;
    }
  }
});

test("弹窗仅接管同类组件的写入，保留卡片并同步最新数据后恢复写入", async (t) => {
  const previousWindow = globalThis.window, previousDocument = globalThis.document;
  t.after(() => { globalThis.window = previousWindow; globalThis.document = previousDocument; });
  const components = ["notes", "notes", "todo"];
  const state = createState([{ id: "g", name: "测试", icon: "home", items: components.map((component, index) => ({
    id: `item-${index}`, kind: "widget", type: "native", name: component, size: "2x2", config: { component, original: { config: {} } },
  })) }]);
  const frames = [], flushed = [], synced = [];
  globalThis.window = {};
  globalThis.document = { querySelectorAll: () => frames, documentElement: { dataset: { theme: "light" } } };
  initNativeBridge({ getState: () => state, save: async () => {} });
  function connect(index, mode) {
    const child = {
      __nativeFlush: async () => flushed.push(index),
      __nativeSync: async () => synced.push({ index, items: structuredClone(state.nativeData.stores.notes.items) }),
    };
    frames.push({ contentWindow: child, dataset: { nativeId: `item-${index}` }, isConnected: true });
    return window.__itabNativeBridge.connect(child, `item-${index}`, mode);
  }
  const first = connect(0, "card"), second = connect(1, "card"), other = connect(2, "card");
  await first.storeSet("notes", "items", [{ content: "原内容" }]);
  first.writeText("notes", "旧摘要");
  await flushNativeCards("notes");
  assert.deepEqual(flushed, [0, 1]);
  const dialog = connect(0, "dialog");
  await dialog.storeSet("notes", "items", [{ content: "弹窗新内容" }]);
  dialog.writeText("notes", "新摘要");
  await first.storeSet("notes", "items", []);
  await second.storeRemove("notes", "items");
  first.writeText("notes", "过期摘要");
  second.removeValue("notes");
  assert.deepEqual(state.nativeData.stores.notes.items, [{ content: "弹窗新内容" }]);
  assert.equal(state.nativeData.local.notes, "新摘要");
  await other.storeSet("cache", "todo", { value: [{ content: "不相关组件继续工作" }] });
  assert.equal(state.nativeData.stores.cache.todo.value[0].content, "不相关组件继续工作");
  await dialog.syncCards();
  assert.deepEqual(synced, [0, 1].map(index => ({ index, items: [{ content: "弹窗新内容" }] })));
  assert.ok(first.active() && second.active() && other.active(), "弹窗期间卡片仍存活");
  dialog.dispose();
  await first.storeSet("notes", "items", [{ content: "关闭后继续编辑" }]);
  assert.equal(state.nativeData.stores.notes.items[0].content, "关闭后继续编辑");
});

test("打开弹窗之前启动的延迟写入，在弹窗关闭后也不能覆盖新数据", async (t) => {
  const previousWindow = globalThis.window, previousDocument = globalThis.document;
  t.after(() => { globalThis.window = previousWindow; globalThis.document = previousDocument; });
  const state = createState([{ id: "g", name: "测试", icon: "home", items: [{
    id: "notes", kind: "widget", type: "native", name: "便签", size: "2x2", config: { component: "notes", original: { config: {} } },
  }] }]);
  const cardWindow = {}, dialogWindow = {};
  const frames = [cardWindow, dialogWindow].map(contentWindow => ({ contentWindow, dataset: { nativeId: "notes" }, isConnected: true }));
  globalThis.window = {};
  globalThis.document = { querySelectorAll: () => frames, documentElement: { dataset: { theme: "light" } } };
  initNativeBridge({ getState: () => state, save: async () => {} });
  const card = window.__itabNativeBridge.connect(cardWindow, "notes", "card");
  let release;
  const gate = new Promise(resolve => { release = resolve; });
  const stale = new Blob(["旧内容"]);
  const read = stale.arrayBuffer.bind(stale);
  stale.arrayBuffer = async () => { await gate; return read(); };
  const pending = card.storeSet("notes", "items", stale);
  const dialog = window.__itabNativeBridge.connect(dialogWindow, "notes", "dialog");
  await dialog.storeSet("notes", "items", [{ content: "最新编辑" }]);
  dialog.dispose();
  release();
  await pending;
  assert.deepEqual(state.nativeData.stores.notes.items, [{ content: "最新编辑" }]);
});
