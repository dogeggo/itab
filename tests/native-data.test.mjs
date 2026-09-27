import test from "node:test";
import assert from "node:assert/strict";
import {
  encodeNative,
  decodeNative,
  validateNativeData,
} from "../src/native-data.js";
import { createState, makeBackup, parseBackup } from "../src/model.js";
test("原版便签全文、待办与二进制数据经 JSON 备份完整往返", async () => {
  const data = await encodeNative({
    notes: [{ id: "n1", title: "全文", content: "中文\n✅".repeat(300) }],
    todo: [{ id: "t1", content: "任务", done: true }],
    file: new Blob(["壁纸"], { type: "text/plain" }),
    buffer: new Uint8Array([1, 2, 255]),
  });
  const state = createState([
    { id: "g", name: "测试", icon: "home", items: [] },
  ]);
  state.nativeData = {
    local: { preference: "true" },
    stores: { cache: { data } },
  };
  const restored = parseBackup(JSON.stringify(makeBackup(state)));
  assert.deepEqual(restored, state);
  const decoded = decodeNative(restored.nativeData.stores.cache.data);
  assert.equal(await decoded.file.text(), "壁纸");
  assert.deepEqual([...new Uint8Array(decoded.buffer)], [1, 2, 255]);
  assert.equal(decoded.notes[0].content, "中文\n✅".repeat(300));
});
test("原版备份拒绝凭据、非法数据库、损坏二进制和原型污染", () => {
  for (const key of ["token", "userInfo", "internalAesKey"])
    assert.throws(() =>
      validateNativeData({ local: { [key]: "secret" }, stores: {} }),
    );
  assert.throws(() => validateNativeData({ local: {}, stores: { cache: [] } }));
  assert.throws(() =>
    validateNativeData({
      local: {},
      stores: {
        cache: { file: { __itabBinary: "blob", mime: "image/png", data: "???" } },
      },
    }),
  );
  assert.throws(() =>
    validateNativeData(
      JSON.parse('{"local":{},"stores":{"cache":{"__proto__":{}}}}'),
    ),
  );
});
