import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import { parse } from "acorn";

const chunks = new URL("../original/chunks/", import.meta.url);
const source = fs.readdirSync(chunks).filter(name => name.endsWith(".js"))
  .map(name => fs.readFileSync(new URL(name, chunks), "utf8"))
  .find(text => text.includes('__name: "d-tabs"'));
assert.ok(source, "找到随包标签组件");

function walk(node, visit) {
  if (!node || typeof node !== "object") return;
  visit(node);
  for (const value of Object.values(node)) {
    if (Array.isArray(value)) value.forEach(child => walk(child, visit));
    else if (value && typeof value === "object") walk(value, visit);
  }
}

function componentSetup(text) {
  let setup;
  walk(parse(text, { ecmaVersion: "latest", sourceType: "module" }), node => {
    if (node.type !== "ObjectExpression" || !node.properties.some(property =>
      property.key?.name === "__name" && property.value.value === "d-tabs")) return;
    setup = node.properties.find(property => property.key?.name === "setup");
  });
  assert.ok(setup, "找到实际组件 setup");
  return new vm.Script(`({${text.slice(setup.start, setup.end)}}).setup`);
}

function tabs(text = source) {
  const refs = [], pending = [], props = { modelValue: "first" };
  let watcher;
  const ref = value => {
    const state = { value };
    refs.push(state);
    return state;
  };
  const watch = (read, callback, options) => {
    watcher = callback;
    if (options.immediate) callback(read());
  };
  const nextTick = callback => {
    const promise = Promise.resolve().then(callback);
    pending.push(promise);
    return promise;
  };
  // 执行实际 setup，仅替换 Vue 调度以控制挂载/卸载和微任务的先后顺序。
  const setup = componentSetup(text).runInNewContext({
    Et: ref, Fr: watch, on: nextTick,
    e: ref, a: watch, n: nextTick,
  });
  setup(props, { emit() {} });
  return {
    root: refs[0], visible: refs[1],
    select(value) { props.modelValue = value; watcher(value); },
    flush() { return Promise.all(pending.splice(0)); },
  };
}

function container(active) {
  const styles = new Map();
  return {
    styles,
    querySelector(selector) {
      assert.equal(selector, ".d-tabs-item.active");
      return active;
    },
    style: { setProperty: (name, value) => styles.set(name, value) },
  };
}

test("标签容器尚未挂载时，首次延迟更新安全返回且可继续更新", async () => {
  const state = tabs();
  await state.flush();
  const root = container({ offsetTop: 24, clientHeight: 32 });
  state.root.value = root;
  state.select("second");
  await state.flush();
  assert.equal(state.visible.value, true);
  assert.equal(root.styles.get("--target-top"), "24px");
  assert.equal(root.styles.get("--height"), "32px");
});

test("标签切换后在 nextTick 执行前卸载，不访问已清空的 DOM 引用", async () => {
  const state = tabs();
  const root = container({ offsetTop: 12, clientHeight: 20 });
  state.root.value = root;
  await state.flush();
  state.select("second");
  state.root.value = null;
  await state.flush();
  assert.equal(root.styles.get("--target-top"), "12px");
  assert.equal(root.styles.get("--height"), "20px");
});

test("标签正常切换时按当前选中项的位置和高度更新标记", async () => {
  const state = tabs();
  const active = { offsetTop: 0, clientHeight: 20 };
  const root = container(active);
  state.root.value = root;
  await state.flush();
  active.offsetTop = 40;
  active.clientHeight = 36;
  state.select("second");
  await state.flush();
  assert.equal(state.visible.value, true);
  assert.equal(root.styles.get("--target-top"), "40px");
  assert.equal(root.styles.get("--height"), "36px");
});

test("没有选中项时隐藏标记并将位置、高度归零", async () => {
  const state = tabs();
  const root = container(null);
  state.root.value = root;
  await state.flush();
  assert.equal(state.visible.value, false);
  assert.equal(root.styles.get("--target-top"), "0px");
  assert.equal(root.styles.get("--height"), "0px");
});
