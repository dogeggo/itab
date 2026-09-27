import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import { parse } from "acorn";

// 直接执行随包共享时钟的函数，避免测试另写一套计时实现。
const chunks = new URL("../original/chunks/", import.meta.url);
const source = fs.readdirSync(chunks).filter(name => name.endsWith(".js"))
  .map(name => fs.readFileSync(new URL(name, chunks), "utf8"))
  .find(text => text.includes('var Wt =') && text.includes('function dl()'));
assert.ok(source, "找到原版组件共享时钟");
const tree = parse(source, { ecmaVersion: "latest", sourceType: "module" });
const names = new Set(["al", "nl", "sl2", "ol", "ul", "dl", "pl", "fl", "ml"]);
const functions = tree.body.filter(node => node.type === "FunctionDeclaration" && names.has(node.id.name));
assert.equal(functions.length, names.size);
const visibility = tree.body.find(node => node.type === "ExpressionStatement" &&
  source.slice(node.start, node.end).includes('document.addEventListener("visibilitychange"') &&
  source.slice(node.start, node.end).includes("Kt !== 0"));
assert.ok(visibility, "保留原版可见性处理");
const script = new vm.Script([...functions, visibility].map(node => source.slice(node.start, node.end)).join("\n"));

function clock(start = new Date(2026, 8, 28, 12, 34, 56, 250).getTime()) {
  let now = start, nextId = 0, callbacks = 0, idleCancels = 0;
  const timers = new Map(), listeners = new Map(), mounts = [], unmounts = [];
  class FakeDate extends Date {
    constructor(...args) { super(...(args.length ? args : [now])); }
    static now() { return now; }
  }
  const context = vm.createContext({
    Date: FakeDate, window: { Date: FakeDate },
    document: { visibilityState: "visible", addEventListener: (type, callback) => listeners.set(type, callback) },
    Wt: { value: {} }, Qt: "测试农历", Zt: ["日", "一", "二", "三", "四", "五", "六"],
    Kt: 0, el: null, tl: "", cl() {},
    ll: { cancelIdle() { idleCancels++; } },
    fs: callback => mounts.push(callback), vs: callback => unmounts.push(callback),
    setTimeout(callback, delay) {
      assert.ok(delay > 0 && delay <= 1000, `下一次检查应在整秒边界：${delay}`);
      timers.set(++nextId, { callback, at: now + delay });
      return nextId;
    },
    clearTimeout: id => timers.delete(id),
    requestAnimationFrame() { assert.fail("日期时钟不应占用逐帧回调"); },
    cancelAnimationFrame() { assert.fail("日期时钟应清理定时器"); },
  });
  script.runInContext(context);
  return {
    value: context.Wt.value, timers,
    get callbacks() { return callbacks; },
    get idleCancels() { return idleCancels; },
    mount() { context.ml(); mounts.pop()(); return unmounts.pop(); },
    visible(value) {
      context.document.visibilityState = value ? "visible" : "hidden";
      listeners.get("visibilitychange")();
    },
    advance(ms) {
      const end = now + ms;
      for (;;) {
        const next = [...timers].sort((a, b) => a[1].at - b[1].at)[0];
        if (!next || next[1].at > end) break;
        assert.ok(callbacks < 1000, "没有失控的计时循环");
        now = next[1].at;
        timers.delete(next[0]);
        callbacks++;
        next[1].callback();
      }
      now = end;
    },
    late(ms) {
      now += ms;
      const next = [...timers][0];
      assert.ok(next && next[1].at <= now);
      timers.delete(next[0]);
      callbacks++;
      next[1].callback();
    },
  };
}

test("日期时钟立即显示，随后对齐整秒，5 秒只检查 5 次", () => {
  const c = clock();
  c.mount();
  assert.equal(c.value.ss, "56");
  c.advance(749);
  assert.equal(c.callbacks, 0);
  c.advance(1);
  assert.equal(c.value.ss, "57");
  c.advance(4250);
  assert.equal(c.callbacks, 5);
  assert.equal(c.value.mm, "35");
  assert.equal(c.value.ss, "01");
  assert.equal(c.timers.size, 1);
});

test("后台停止检查，恢复时立即校时，重复恢复不会增加定时器", () => {
  const c = clock();
  c.mount();
  c.visible(false);
  assert.equal(c.timers.size, 0);
  c.advance(65000);
  assert.equal(c.callbacks, 0);
  c.visible(true);
  assert.equal(c.value.mm, "36");
  assert.equal(c.value.ss, "01");
  c.visible(true);
  assert.equal(c.timers.size, 1);
});

test("跨午夜同时更新日期、星期和时分秒", () => {
  const c = clock(new Date(2026, 11, 31, 23, 59, 59, 750).getTime());
  c.mount();
  c.advance(250);
  for (const [key, value] of Object.entries({ YYYY: "2027", MM: "01", DD: "01", HH: "00", h: "12", mm: "00", ss: "00", week: "周五" }))
    assert.equal(c.value[key], value, key);
});

test("主线程延迟后读取实际时间，不补跑过期秒数或累积漂移", () => {
  const c = clock();
  c.mount();
  c.late(3500);
  assert.equal(c.callbacks, 1);
  assert.equal(c.value.ss, "59");
  c.advance(250);
  assert.equal(c.value.mm, "35");
  assert.equal(c.value.ss, "00");
});

test("共享订阅只建立一个定时器，最后一个组件卸载时释放", () => {
  const c = clock();
  const first = c.mount(), second = c.mount();
  assert.equal(c.timers.size, 1);
  first();
  assert.equal(c.timers.size, 1);
  second();
  assert.equal(c.timers.size, 0);
  assert.equal(c.idleCancels, 1);
  c.visible(true);
  assert.equal(c.timers.size, 0);
});
