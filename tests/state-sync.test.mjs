import test from "node:test";
import assert from "node:assert/strict";
import { createState } from "../src/model.js";
import { homeViewChanged, nativeDataChanges } from "../src/state-sync.js";

test("组件缓存和搜索历史跨页更新不重建主页，真实布局编辑仍会更新", () => {
  const state = createState([{ id: "home", name: "主页", items: [] }]);
  const incoming = structuredClone(state);
  incoming.updatedAt = "2026-09-28T00:00:00.000Z";
  incoming.history = ["搜索内容"];
  incoming.nativeData.stores.cache = { weather: { value: { temp: 24 }, expiresAt: 123 } };
  assert.equal(homeViewChanged(state, incoming), false);
  for (const edit of [
    s => { s.settings.time.size = 80; },
    s => { s.groups[0].name = "新名称"; },
    s => { s.groups[0].items.push({ id: "new" }); },
    s => { s.activeGroup = "other"; },
  ]) {
    const next = structuredClone(incoming);
    edit(next);
    assert.equal(homeViewChanged(state, next), true);
  }
});

test("组件数据通知只包含发生变化的键，包含新增、删除和整个命名空间删除", () => {
  const previous = {
    local: { keep: "1", removed: "2", baseConfig: '{"topSearch":[]}' },
    stores: { notes: { items: [{ content: "旧便签" }] }, cache: { weather: { value: 24 }, gone: {} } },
  };
  const next = {
    local: { keep: "1", added: "3", baseConfig: '{"topSearch":[{"id":"x"}]}' },
    stores: { cache: { weather: { value: 24 }, todo: { value: [] } } },
  };
  assert.deepEqual(nativeDataChanges(previous, structuredClone(previous)), []);
  assert.deepEqual(nativeDataChanges(previous, next), [
    ["removed", null],
    ["__preferences__", next.local.baseConfig],
    ["added", "3"],
    ["__store__", JSON.stringify({ namespace: "notes", key: "items" })],
    ["__store__", JSON.stringify({ namespace: "cache", key: "gone" })],
    ["__store__", JSON.stringify({ namespace: "cache", key: "todo" })],
  ]);
});
