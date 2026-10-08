import test from "node:test";
import assert from "node:assert/strict";
import { createIconCache, localizeStateIcons, iconImageAttributes } from "../src/icon-cache.js";
import { createState, makeBackup, parseBackup } from "../src/model.js";
import { siteImageFit } from "../src/site-icon.js";

const svg = "data:image/svg+xml;base64," + Buffer.from('<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"><rect width="32" height="32" fill="red"/></svg>').toString("base64");
const remote = "https://example.com/favicon.svg";
function harness(store = new Map(), overrides = {}) {
  let requests = 0;
  const cache = createIconCache({
    read: async key => store.get(key), write: async (key, value) => { store.set(key, value); },
    fetch: async () => { requests++; return new Response("svg", { headers: { "content-type": "image/svg+xml" } }); },
    encode: async () => svg,
    ...overrides,
  });
  return { ...cache, requests: () => requests, store };
}
function site(id, image = remote) {
  return { id, kind: "site", name: "测试", url: "https://example.com/", size: "1x1", image, color: "#ffffff" };
}

test("同一远程图标并发只下载一次，重新创建缓存后离线读取持久化图片", async () => {
  const first = harness();
  assert.deepEqual(await Promise.all([first.load(remote), first.load(remote), first.load(remote)]), [svg, svg, svg]);
  assert.equal(first.requests(), 1);
  const offline = harness(first.store, { fetch: async () => { throw Error("离线"); } });
  assert.equal(await offline.load(remote), svg);
  assert.equal(await offline.load("assets/sites/local.svg"), "assets/sites/local.svg");
  assert.equal(await offline.load(svg), svg);
});

test("跨标签页使用同一把锁，锁内重新读数据库避免重复下载", async () => {
  let queue = Promise.resolve();
  const lock = (_name, task) => {
    const result = queue.then(task);
    queue = result.catch(() => {});
    return result;
  };
  const store = new Map(), one = harness(store, { lock }), two = harness(store, { lock });
  await Promise.all([one.load(remote), two.load(remote)]);
  assert.equal(one.requests() + two.requests(), 1);
});

test("源站失败不写缓存，同页重绘不反复下载，显式保存可以重试", async () => {
  let fail = true, requests = 0;
  const cache = harness(new Map(), { fetch: async () => {
    requests++;
    if (fail) throw Error("CORS");
    return new Response("svg");
  } });
  await assert.rejects(cache.load(remote));
  await assert.rejects(cache.load(remote));
  assert.equal(requests, 1);
  assert.equal(cache.store.size, 0);
  assert.equal(cache.failed(remote), true);
  fail = false;
  assert.equal(await cache.load(remote, { retry: true }), svg);
  assert.equal(cache.failed(remote), false);
});

test("拒绝错误响应、空图片、超过上限的图片和非图片数据", async () => {
  for (const response of [
    new Response("missing", { status: 404 }), new Response(""),
    new Response("svg", { headers: { "content-length": String(2 * 1024 * 1024 + 1) } }),
    new Response(new Uint8Array(2 * 1024 * 1024 + 1)),
  ]) {
    const cache = harness(new Map(), { fetch: async () => response });
    await assert.rejects(cache.load(remote));
    assert.equal(cache.store.size, 0);
  }
  const invalid = harness(new Map(), { encode: async () => "data:text/html;base64,aGVsbG8=" });
  await assert.rejects(invalid.load(remote));
  assert.equal(invalid.store.size, 0);
});

test("主页、文件夹和组件图标转换后保留适配方式，备份包含图片内容", async () => {
  const top = site("top"), child = site("child"), failed = site("failed", "https://example.com/missing.svg");
  const widget = { id: "widget", kind: "widget", type: "original", config: { component: "dino" }, name: "恐龙", size: "1x1", image: remote };
  const state = createState([{ id: "home", name: "主页", items: [top, failed, widget,
    { id: "folder", kind: "folder", name: "文件夹", size: "1x1", children: [child] }] }]);
  const count = await localizeStateIcons(() => state, { fit: siteImageFit,
    load: async source => { if (source.includes("missing")) throw Error("404"); return svg; } });
  assert.equal(count, 3);
  assert.equal(top.image, svg);
  assert.equal(child.image, svg);
  assert.equal(widget.image, svg);
  assert.equal(top.imageFit, "cover");
  assert.equal(siteImageFit(top), "cover");
  assert.equal(failed.image, "https://example.com/missing.svg");
  assert.deepEqual(parseBackup(JSON.stringify(makeBackup(state))), state);
});

test("下载期间编辑、删除或恢复主页时不覆盖新数据，后台并发限制为四项", async () => {
  const items = Array.from({ length: 8 }, (_, i) => site(String(i), `${remote}?id=${i}`));
  let state = { groups: [{ items }] }, active = 0, max = 0, release;
  const barrier = new Promise(resolve => { release = resolve; });
  const task = localizeStateIcons(() => state, { load: async () => {
    active++;
    max = Math.max(max, active);
    await barrier;
    active--;
    return svg;
  } });
  items[0].image = "assets/sites/edited.svg";
  state.groups[0].items = items.slice(0, 2);
  state = { groups: [{ items: [site("restored", "assets/sites/restored.svg")] }] };
  release();
  assert.equal(await task, 0);
  assert.equal(max, 4);
  assert.equal(items[0].image, "assets/sites/edited.svg");
  assert.equal(state.groups[0].items[0].image, "assets/sites/restored.svg");
});

test("远程图标先查本地缓存，模板不触发第二次远程图片请求", () => {
  assert.equal(iconImageAttributes(remote), `data-local-icon="${remote}"`);
  assert.equal(iconImageAttributes("assets/sites/local.svg"), 'src="assets/sites/local.svg"');
});

test("待下载图片最多四项并发，图片编码和写入也受同一限制", async () => {
  let active = 0, max = 0;
  const cache = harness(new Map(), { encode: async () => {
    active++;
    max = Math.max(max, active);
    await new Promise(resolve => setTimeout(resolve, 5));
    active--;
    return svg;
  } });
  await Promise.all(Array.from({ length: 12 }, (_, i) => cache.load(`${remote}?icon=${i}`)));
  assert.equal(max, 4);
  assert.equal(cache.store.size, 12);
});

test("下载结果不覆盖同一对象上新选的图片，也不写回已删除的网站", async () => {
  for (const remove of [false, true]) {
    const item = site("edited"), state = { groups: [{ items: [item] }] };
    let release;
    const task = localizeStateIcons(() => state, { load: () => new Promise(resolve => { release = resolve; }) });
    if (remove) state.groups[0].items = [];
    else item.image = "assets/sites/edited.svg";
    release(svg);
    assert.equal(await task, 0);
    assert.equal(item.image, remove ? remote : "assets/sites/edited.svg");
  }
});
