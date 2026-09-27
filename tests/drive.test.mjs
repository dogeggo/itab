import test from "node:test";
import assert from "node:assert/strict";
import {
  driveAvailability,
  connectDrive,
  listBackups,
  uploadBackup,
  downloadBackup,
} from "../src/drive.js";
const originalFetch = globalThis.fetch;
function mockChrome(log) {
  globalThis.chrome = {
    runtime: {
      getManifest: () => ({
        oauth2: { client_id: "test.apps.googleusercontent.com" },
      }),
    },
    identity: {
      getAuthToken: async (args) => {
        log.push(["auth", args]);
        return { token: "mock-token" };
      },
      removeCachedAuthToken: async (args) => log.push(["evict", args]),
    },
  };
}
test("网页环境与未配置 OAuth 时明确阻止云操作", () => {
  delete globalThis.chrome;
  assert.equal(driveAvailability().ready, false);
  globalThis.chrome = {
    identity: { getAuthToken() {} },
    runtime: { getManifest: () => ({}) },
  };
  assert.equal(driveAvailability().ready, false);
  delete globalThis.chrome;
});
test("授权后只读取 appDataFolder，不访问用户普通云盘文件", async () => {
  const log = [];
  mockChrome(log);
  globalThis.fetch = async (url, options) => {
    assert.equal(new URL(url).searchParams.get("spaces"), "appDataFolder");
    assert.equal(options.headers.Authorization, "Bearer mock-token");
    return Response.json({ files: [{ id: "backup1" }] });
  };
  try {
    assert.equal((await connectDrive())[0].id, "backup1");
    assert.equal(log[0][1].interactive, true);
    assert.deepEqual(log[0][1].scopes, [
      "https://www.googleapis.com/auth/drive.appdata",
    ]);
  } finally {
    globalThis.fetch = originalFetch;
    delete globalThis.chrome;
  }
});
test("401 会移除过期令牌并仅重试一次", async () => {
  const log = [];
  mockChrome(log);
  let n = 0;
  globalThis.fetch = async () =>
    ++n === 1
      ? new Response("", { status: 401 })
      : Response.json({ files: [] });
  try {
    assert.deepEqual(await listBackups(), []);
    assert.equal(n, 2);
    assert.equal(log.filter((e) => e[0] === "evict").length, 1);
  } finally {
    globalThis.fetch = originalFetch;
    delete globalThis.chrome;
  }
});
test("上传采用 multipart，父目录固定为 appDataFolder", async () => {
  const log = [];
  mockChrome(log);
  globalThis.fetch = async (url, options) => {
    assert.match(url, /uploadType=multipart/);
    assert.equal(options.method, "POST");
    assert.match(options.headers["Content-Type"], /multipart\/related/);
    assert.match(options.body, /"parents":\["appDataFolder"\]/);
    assert.match(options.body, /"app":"itab-local"/);
    return Response.json({ id: "backup2" });
  };
  try {
    assert.equal(
      (await uploadBackup({ app: "itab-local", version: 1, state: {} })).id,
      "backup2",
    );
  } finally {
    globalThis.fetch = originalFetch;
    delete globalThis.chrome;
  }
});
test("网络和 API 失败具有清楚错误，非法文件 ID 不会发送请求", async () => {
  const log = [];
  mockChrome(log);
  globalThis.fetch = async () =>
    Response.json(
      { error: { message: "Drive API disabled" } },
      { status: 403 },
    );
  try {
    await assert.rejects(listBackups(), /403.*Drive API disabled/);
    await assert.rejects(downloadBackup("../other"), /ID 无效/);
  } finally {
    globalThis.fetch = originalFetch;
    delete globalThis.chrome;
  }
});
