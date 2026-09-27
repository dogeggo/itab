import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import {
  createState,
  validateState,
  makeBackup,
  parseBackup,
  safeURL,
  normalizeURL,
  searchURL,
  moveItem,
  calculate,
  daysBetween,
  newWidget,
} from "../src/model.js";
import { lunarDate, clockParts } from "../src/widgets.js";
const groups = JSON.parse(
  fs.readFileSync(new URL("../assets/seed.json", import.meta.url), "utf8"),
);
const state = () => createState(structuredClone(groups));
test("完整备份往返保留设置、图标、上传壁纸和组件数据", () => {
  const s = state();
  s.settings.wallpaper.src = "data:image/png;base64,aGVsbG8=";
  s.widgetData.notes = {
    text: "中文\n多行备忘录",
    todos: [{ id: "1", text: "完成验收", done: false }],
  };
  assert.deepEqual(parseBackup(JSON.stringify(makeBackup(s))), s);
});
test("损坏、不兼容和伪造的备份被拒绝", () => {
  assert.throws(() => parseBackup("{"));
  assert.throws(() =>
    parseBackup(JSON.stringify({ app: "other", version: 1 })),
  );
  const s = state();
  s.schemaVersion = 99;
  assert.throws(() => validateState(s));
  assert.throws(() => parseBackup("x".repeat(25 * 1024 * 1024 + 1)));
});
test("危险协议和原型污染被拒绝", () => {
  for (const url of [
    "javascript:alert(1)",
    "data:text/html,hello",
    "file:///C:/passwords",
    "https://u:p@example.com",
  ])
    assert.equal(safeURL(url), "");
  const s = state();
  s.groups[0].items.find((i) => i.kind === "site").url = "javascript:alert(1)";
  assert.throws(() => validateState(s));
  assert.throws(() =>
    validateState(JSON.parse('{"__proto__":{"polluted":true}}')),
  );
  assert.equal({}.polluted, undefined);
});
test("重复图标 ID、非法配置、组件配置不会进入应用", () => {
  const s = state();
  s.groups[0].items.push(structuredClone(s.groups[0].items[0]));
  assert.throws(() => validateState(s));
  for (const mutate of [
    (s) => (s.settings.icon.size = -1),
    (s) => (s.settings.theme.system = "true"),
    (s) => (s.settings.time.font = "unknown"),
    (s) => (s.groups[0].items[0].config.latitude = 999),
    (s) => (s.settings.wallpaper.src = "javascript:alert(1)"),
  ]) {
    const x = state();
    mutate(x);
    assert.throws(() => validateState(x));
  }
});
test("搜索词编码且拒绝缺少占位符的引擎", () => {
  assert.equal(
    searchURL({ url: "https://example.com/?q={query}" }, "中文 & x"),
    "https://example.com/?q=%E4%B8%AD%E6%96%87%20%26%20x",
  );
  assert.throws(() => searchURL({ url: "https://example.com/" }, "x"));
  assert.equal(normalizeURL("example.com"), "https://example.com/");
  assert.equal(normalizeURL("chrome://bookmarks/"), "chrome://bookmarks/");
});
test("拖动排序保留所有项目且支持前后移动", () => {
  const items = ["a", "b", "c"].map((id) => ({ id }));
  assert.equal(moveItem(items, "a", "c"), true);
  assert.deepEqual(
    items.map((i) => i.id),
    ["b", "c", "a"],
  );
  moveItem(items, "a", "b");
  assert.deepEqual(
    items.map((i) => i.id),
    ["a", "b", "c"],
  );
  assert.equal(moveItem(items, "missing", "b"), false);
});
test("计算器遵守运算优先级，支持括号百分数并阻止脚本", () => {
  for (const [formula, answer] of [
    ["2+3*4", 14],
    ["(12+8)×5", 100],
    ["100×10%", 10],
    ["-3+4/2", -1],
    [".1+.2", 0.3],
    ["2*(-3)", -6],
  ])
    assert.equal(calculate(formula), answer);
  for (const input of [
    "1/0",
    "globalThis.alert(1)",
    "1+",
    "(2+3",
    "2**3",
    "2;3",
  ])
    assert.throws(() => calculate(input));
});
test("日期使用日历天差，不因当天小时数变化", () => {
  assert.equal(daysBetween("2026-10-01", new Date(2026, 8, 27, 23, 59)), 4);
  assert.equal(daysBetween("2026-09-27", new Date(2026, 8, 27, 0, 1)), 0);
  assert.equal(lunarDate(new Date(2026, 8, 27, 12)), "八月十七");
  const s = state().settings.time;
  s.hour24 = false;
  s.sec = true;
  assert.equal(
    clockParts(s, new Date(2026, 0, 1, 0, 5, 9)).time,
    "12:05:09 AM",
  );
});
test("组件工厂可生成独立且有效的配置", () => {
  const s = state();
  s.groups[0].items.push(
    newWidget("todo"),
    newWidget("pomodoro"),
    newWidget("days"),
  );
  validateState(s);
  assert.throws(() => newWidget("unknown"));
});
