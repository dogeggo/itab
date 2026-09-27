import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

// 测试组件实际导入的发行模块，防止仅修源码而漏掉随包代码。
const filename = fs.readdirSync(new URL("../original/chunks/", import.meta.url))
  .find((name) => /^badge-F1n9rTg1-.*\.js$/.test(name));
assert.ok(filename, "缺少番茄钟角标模块");
const badge = await import(`../original/chunks/${filename}`);

function environment(t, chrome, pathname = "/original/host.html") {
  for (const [key, value] of Object.entries({ chrome, location: { pathname } })) {
    const descriptor = Object.getOwnPropertyDescriptor(globalThis, key);
    Object.defineProperty(globalThis, key, { configurable: true, value });
    t.after(() => {
      if (descriptor) Object.defineProperty(globalThis, key, descriptor);
      else delete globalThis[key];
    });
  }
}

test("角标正常显示分钟、最后一分钟秒数，并在暂停和清理时清空", async (t) => {
  const text = [], colors = [];
  environment(t, {
    runtime: { id: "test-extension", sendMessage() { assert.fail("不应发送消息"); } },
    action: {
      async setBadgeText(value) { text.push(value.text); },
      async setBadgeBackgroundColor(value) { colors.push(value.color); },
      async setBadgeTextColor(value) { colors.push(value.color); },
    },
  });
  await badge.syncTomatoBadge("play", 1500);
  await badge.syncTomatoBadge("play", 59);
  await badge.syncTomatoBadge("pause", 59);
  await badge.clearTomatoBadge();
  assert.deepEqual(text, ["25", "59", "", ""]);
  assert.deepEqual(colors, ["#E53935", "#FFFFFF", "#E53935", "#FFFFFF"]);
});

test("网页预览和扩展失效后跳过所有角标 API", async (t) => {
  let calls = 0;
  for (const chrome of [undefined, {}, {
    runtime: { sendMessage() { calls++; } },
    get action() { calls++; return {}; },
  }, { get runtime() { throw new Error("Extension context invalidated."); } }]) {
    await t.test(String(chrome === undefined ? "无扩展" : "无可用上下文"), async (t) => {
      environment(t, chrome);
      await badge.syncTomatoBadge("play", 120);
      await badge.clearTomatoBadge();
      assert.equal(calls, 0, "失效后不应访问 action 或发送消息");
    });
  }
});

for (const method of ["setBadgeBackgroundColor", "setBadgeTextColor", "setBadgeText"])
  for (const asynchronous of [false, true])
    test(`${method} ${asynchronous ? "异步拒绝" : "同步抛错"}不产生未捕获异常`, async (t) => {
      const text = [];
      let failedCalls = 0;
      const action = {
        setBadgeBackgroundColor() {},
        setBadgeTextColor() {},
        setBadgeText(value) { text.push(value.text); },
      };
      action[method] = () => {
        failedCalls++;
        const error = new Error("Extension context invalidated.");
        if (asynchronous) return Promise.reject(error);
        throw error;
      };
      environment(t, {
        runtime: { id: "test-extension", sendMessage() { throw new Error("Extension context invalidated."); } },
        action,
      });
      await badge.syncTomatoBadge("play", 120);
      await badge.clearTomatoBadge();
      assert.ok(failedCalls > 0, "确实触发 API 异常分支");
      if (method !== "setBadgeText") assert.deepEqual(text, ["2", ""]);
    });

test("旧浏览器缺少颜色 API 时仍可更新文字，连续清空保持调用顺序", async (t) => {
  const text = [];
  environment(t, {
    runtime: { id: "test-extension" },
    action: { async setBadgeText(value) { text.push(value.text); } },
  });
  await Promise.all([badge.syncTomatoBadge("play", 120), badge.clearTomatoBadge()]);
  assert.deepEqual(text, ["2", ""]);
});

test("offscreen 优先发送消息，缺少 action 的上下文也可发送", async (t) => {
  const messages = [];
  let actionCalls = 0;
  const chrome = {
    runtime: { id: "test-extension", async sendMessage(value) { messages.push(value); } },
    action: { setBadgeText() { actionCalls++; } },
  };
  environment(t, chrome, "/offscreen.html");
  await badge.syncTomatoBadge("play", 120);
  delete chrome.action;
  await badge.clearTomatoBadge();
  assert.deepEqual(messages, [{ type: "tomato:badge", text: "2" }, { type: "tomato:badge", text: "" }]);
  assert.equal(actionCalls, 0);
});

for (const asynchronous of [false, true])
  test(`消息${asynchronous ? "拒绝" : "抛错"}后安全回退，回退 API 失效也不抛错`, async (t) => {
    const text = [];
    const chrome = {
      runtime: { id: "test-extension", sendMessage() {
        const error = new Error("Could not establish connection.");
        if (asynchronous) return Promise.reject(error);
        throw error;
      } },
      action: { setBadgeText(value) { text.push(value.text); } },
    };
    environment(t, chrome, "/offscreen.html");
    await badge.syncTomatoBadge("play", 120);
    assert.deepEqual(text, ["2"]);
    chrome.action.setBadgeText = () => { throw new Error("Extension context invalidated."); };
    await badge.clearTomatoBadge();
  });

test("消息等待期间扩展重载后，不再调用失效的回退 API", async (t) => {
  let actionCalls = 0;
  const chrome = {
    runtime: { id: "test-extension", async sendMessage() {
      delete chrome.runtime.id;
      throw new Error("Extension context invalidated.");
    } },
    action: { setBadgeText() { actionCalls++; } },
  };
  environment(t, chrome, "/offscreen.html");
  await badge.syncTomatoBadge("play", 120);
  assert.equal(actionCalls, 0);
});
