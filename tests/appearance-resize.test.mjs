import test from "node:test";
import assert from "node:assert/strict";
import { observeAppearanceHeight } from "../original/appearance/resize.js";

function setup() {
  const frames = new Map();
  const heights = [];
  let nextFrame = 0;
  let observer;
  const view = {
    ResizeObserver: class {
      constructor(callback) {
        this.notify = callback;
        observer = this;
      }
      observe(element) {
        this.element = element;
      }
      disconnect() {
        this.element = null;
      }
    },
    requestAnimationFrame(callback) {
      const id = nextFrame++;
      frames.set(id, callback);
      return id;
    },
    cancelAnimationFrame(id) {
      frames.delete(id);
    },
  };
  const element = { scrollHeight: 530, ownerDocument: { defaultView: view } };
  const stop = observeAppearanceHeight(element, height => heights.push(height));
  return {
    element, observer, frames, heights, stop,
    tick() {
      const callbacks = [...frames.values()];
      frames.clear();
      for (const callback of callbacks) callback();
    },
  };
}

test("设置面板合并尺寸通知，在下一帧读取最新高度并更新宿主", () => {
  const h = setup();
  assert.equal(h.observer.element, h.element);
  h.observer.notify();
  h.element.scrollHeight = 586;
  h.observer.notify();
  assert.deepEqual(h.heights, [], "观察器回调不能同步改变父 iframe 的布局");
  assert.equal(h.frames.size, 1);
  h.tick();
  assert.deepEqual(h.heights, [586]);
});

test("设置面板跳过相同高度，仍响应内容增高和缩短", () => {
  const h = setup();
  h.observer.notify();
  h.tick();
  h.observer.notify();
  h.tick();
  assert.deepEqual(h.heights, [530]);
  for (const height of [720, 540]) {
    h.element.scrollHeight = height;
    h.observer.notify();
    h.tick();
  }
  assert.deepEqual(h.heights, [530, 720, 540]);
});

test("设置面板卸载时停止观察并取消待执行的高度更新", () => {
  const h = setup();
  h.observer.notify();
  const pending = [...h.frames.values()][0];
  h.stop();
  assert.equal(h.observer.element, null);
  assert.equal(h.frames.size, 0);
  pending();
  h.observer.notify();
  h.tick();
  assert.deepEqual(h.heights, []);
  assert.equal(h.frames.size, 0);
});
