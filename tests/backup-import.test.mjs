import test from "node:test";
import assert from "node:assert/strict";
import { prepareBackupImport } from "../src/backup-import.js";
import { createState, makeBackup, parseBackup, searchURL } from "../src/model.js";

const current = () => createState([{ id: "local", name: "本地", icon: "home", items: [] }]);
const fixture = () => ({
  navConfig: [{ id: "1", name: "主页", icon: "home", children: [
    { id: "weather", name: "天气", component: "weather", type: "component", size: "2x4", view: 3 },
    { id: "days", name: "纪念日", component: "daysMatter", size: "2x2", config: { target: "2000-01-01", isLunar: true } },
    { id: "holiday", name: "假期", component: "xiayigejiaqi", size: "2x4" },
    { id: "bookmarks", name: "书签管理", component: "bookmarks", type: "icon" },
    { id: "folder", name: "资料", type: "folder", children: [
      { id: "site", name: "搜索", type: "text", url: "https://example.com/?a=1&b=2", iconText: "测试文字", backgroundColor: "transparent" },
      { id: "history", name: "历史", type: "icon", url: "chrome://history/" },
    ] },
  ] }],
  baseConfig: {
    searchEngine: [
      { key: "web", title: "搜索", href: "https://example.com/?q=%s&from=home" },
      { key: "append", title: "追加", href: "https://example.com/search?q=" },
    ], useSearch: "append",
    time: { color: "#fff", month: "none", week: "inline", sec: true, fontWeight: 600, weekBegin1: false },
    icon: { nameColor: "#abc", name: 0, iconRadius: 16, unit: "%", width: 80 },
    open: { iconBlank: false, searchBlank: false },
    wallpaper: { type: 3, src: "#123", mask: 0.2 },
    sidebar: { width: 42, lastGroup: false },
    topSearch: [{ id: "topic", name: "榜单" }],
  },
  notes: [{ id: "note", title: "全文", content: "中文正文\n".repeat(50), fixed: true, ct: 123 }],
  todo: [{ id: "task", content: "已完成任务", done: true, folderId: "work", ct: 124 }],
  todoFolder: [{ id: "work", name: "工作" }],
  stocks: [{ Code: "000001", Name: "示例", MktNum: "1" }],
});
const importData = (data, state = current()) => prepareBackupImport(JSON.stringify(data), state);

test("原版导航、设置、便签全文、已完成待办及自选股完整转换并可再次备份", () => {
  const data = fixture(), before = current(), copy = structuredClone(before);
  const { state, format, warnings, stats } = importData(data, before);
  assert.equal(format, "original");
  assert.deepEqual(warnings, []);
  assert.deepEqual(before, copy, "预览转换不改写当前主页");
  assert.deepEqual(stats, { groups: 1, sites: 2, widgets: 4, folders: 1, actions: 0, skipped: 0 });
  assert.equal(state.groups[0].items[0].size, "4x2");
  assert.equal(state.groups[0].items[0].config.original.view, 3);
  assert.deepEqual(state.groups[0].items[1].config.original.config, data.navConfig[0].children[1].config);
  assert.equal(state.groups[0].items[2].type, "original");
  assert.equal(state.groups[0].items[3].type, "native");
  const site = state.groups[0].items[4].children[0];
  assert.equal(site.url, "https://example.com/?a=1&b=2");
  assert.equal(site.color, "transparent");
  assert.equal(site.iconText, "测试文字");
  assert.equal(state.settings.time.color, "#ffffff");
  assert.equal(state.settings.time.bold, true);
  assert.equal(state.settings.time.month, false);
  assert.equal(state.settings.time.weekBegin1, false);
  assert.equal(state.settings.icon.name, false);
  assert.equal(state.settings.icon.widthPercent, 80);
  assert.equal(state.settings.icon.nameColor, "#aabbcc");
  assert.equal(state.settings.wallpaper.type, "color");
  assert.equal(state.settings.wallpaper.src, "#112233");
  assert.equal(state.settings.open.searchBlank, false);
  assert.equal(state.settings.search.engine, "append");
  assert.equal(searchURL(state.settings.engines[0], "中文 &"), "https://example.com/?q=%E4%B8%AD%E6%96%87%20%26&from=home");
  assert.equal(searchURL(state.settings.engines[1], "x"), "https://example.com/search?q=x");
  assert.deepEqual(state.nativeData.stores.notes.items, data.notes);
  assert.deepEqual(state.nativeData.stores.cache.todo, { value: data.todo, expiresAt: 0 });
  assert.deepEqual(state.nativeData.stores.cache.todoFolder.value, data.todoFolder);
  assert.deepEqual(JSON.parse(state.nativeData.local.stocks), data.stocks);
  assert.deepEqual(JSON.parse(state.nativeData.local.baseConfig).topSearch, data.baseConfig.topSearch);
  assert.deepEqual(parseBackup(JSON.stringify(makeBackup(state))), state);
});

test("按类别导出的原版备份保留缺失类别，空数组明确清空所选类别", () => {
  const previous = importData(fixture()).state;
  const next = importData({ notes: [], todo: [], todoFolder: [], stocks: [] }, previous).state;
  assert.deepEqual(next.groups, previous.groups);
  assert.deepEqual(next.settings, previous.settings);
  assert.deepEqual(next.nativeData.stores.notes.items, []);
  assert.deepEqual(next.nativeData.stores.cache.todo.value, []);
  assert.deepEqual(next.nativeData.stores.cache.todoFolder.value, []);
  assert.equal(next.nativeData.local.stocks, "[]");
  const onlySettings = importData({ baseConfig: { time: { sec: false } } }, previous).state;
  assert.equal(onlySettings.settings.time.sec, false);
  assert.deepEqual(onlySettings.nativeData, previous.nativeData);
  assert.deepEqual(onlySettings.groups, previous.groups);
});

test("不支持的组件、缺失的本机图片与超出宿主范围的设置在导入前提示", () => {
  const data = fixture();
  data.navConfig[0].children.push({ id: "unknown", name: "未知组件", component: "unknown" });
  data.baseConfig.wallpaper = { type: 1, src: "blob:https://example.com/expired" };
  data.baseConfig.time.font = "missing";
  data.baseConfig.icon.nameSize = 8;
  const result = importData(data);
  assert.equal(result.stats.skipped, 1);
  assert.equal(result.warnings.length, 4);
  assert.match(result.summary, /已跳过.*未知组件/);
  assert.equal(result.state.settings.icon.nameSize, 10);
  assert.equal(result.state.settings.wallpaper.src, current().settings.wallpaper.src);
});

test("拒绝损坏、超限、危险字段、重复 ID 及危险网址，不触碰原状态", () => {
  const before = current(), copy = structuredClone(before);
  for (const text of ["{", "null", "[]", "{}", '{"notes":[],"__proto__":{"polluted":true}}', "x".repeat(25 * 1024 * 1024 + 1)])
    assert.throws(() => prepareBackupImport(text, before));
  for (const data of [{ notes: {} }, { notes: [null] }, { todo: [{ content: {} }] }, { navConfig: [] }, { baseConfig: [] }, { app: "other", notes: [] }])
    assert.throws(() => importData(data, before));
  const duplicate = fixture();
  duplicate.navConfig[0].children.push(duplicate.navConfig[0].children[0]);
  assert.throws(() => importData(duplicate, before), /ID 重复/);
  for (const url of ["javascript:alert(1)", "data:text/html,bad", "https://user:pass@example.com/"]) {
    const data = fixture();
    data.navConfig[0].children[4].children[0].url = url;
    assert.throws(() => importData(data, before), /网站地址无效/);
  }
  assert.deepEqual(before, copy);
  assert.equal({}.polluted, undefined);
});

test("兼容 BOM 和当前 v2 JSON，原版账号字段不进入导入结果", () => {
  const data = fixture();
  data.token = "private-token";
  data.userInfo = { id: "private-user" };
  data.baseConfig.token = "private-token";
  const result = prepareBackupImport("\uFEFF" + JSON.stringify(data), current());
  assert.equal(JSON.stringify(result.state).includes("private-token"), false);
  assert.equal(JSON.stringify(result.state).includes("private-user"), false);
  const backup = JSON.stringify(makeBackup(result.state));
  assert.deepEqual(prepareBackupImport(backup).state, result.state);
  assert.equal(prepareBackupImport(backup).format, "local");
  assert.throws(() => parseBackup(JSON.stringify(data)), /不是 NewTab/);
});
