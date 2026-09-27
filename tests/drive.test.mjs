import test from "node:test";
import assert from "node:assert/strict";
import {
  driveAvailability,
  connectDrive,
  listBackups,
  uploadBackup,
  downloadBackup,
  getGoogleProfile,
  disconnectDrive,
} from "../src/drive.js";
const originalFetch = globalThis.fetch;
function mockChrome(log) {
  const preferences = {};
  globalThis.chrome = {
    storage: {
      local: {
        get: async () => ({ ...preferences }),
        set: async (value) => Object.assign(preferences, value),
      },
    },
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
      clearAllCachedAuthTokens: async () => log.push(["clear"]),
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
    const query = new URL(url).searchParams.get("q");
    assert.match(query, /name contains 'NewTab-'/);
    assert.match(query, /or name contains 'itab-local-'/);
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
    assert.match(options.body, /"name":"NewTab-[^"\r\n]+\.json"/);
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
test("头像读取沿用 Drive 权限，静默获取当前账号且仅请求名称和图片", async () => {
  const log = [];
  mockChrome(log);
  globalThis.fetch = async (url, options) => {
    const target = new URL(url);
    assert.equal(target.pathname, "/drive/v3/about");
    assert.equal(target.searchParams.get("fields"), "user(displayName,photoLink)");
    assert.equal(options.headers.Authorization, "Bearer mock-token");
    return Response.json({ user: {
      displayName: "测试账号",
      photoLink: "https://lh3.googleusercontent.com/test-photo=s96-c",
      emailAddress: "not-stored@example.com",
    } });
  };
  try {
    assert.deepEqual(await getGoogleProfile(), {
      displayName: "测试账号",
      photoURL: "https://lh3.googleusercontent.com/test-photo=s96-c",
    });
    assert.equal(log[0][1].interactive, false);
    assert.deepEqual(log[0][1].scopes, ["https://www.googleapis.com/auth/drive.appdata"]);
  } finally {
    globalThis.fetch = originalFetch;
    delete globalThis.chrome;
  }
});
test("网页预览或未配置 OAuth 时不请求 Google 头像", async () => {
  delete globalThis.chrome;
  globalThis.fetch = async () => { throw new Error("不应发送网络请求"); };
  try {
    assert.equal(await getGoogleProfile(), null);
    globalThis.chrome = {
      identity: { getAuthToken() { throw new Error("不应请求授权"); } },
      runtime: { getManifest: () => ({}) },
    };
    assert.equal(await getGoogleProfile(), null);
  } finally {
    globalThis.fetch = originalFetch;
    delete globalThis.chrome;
  }
});
test("Google 资料缺失或头像地址不安全时返回可降级的结果", async () => {
  mockChrome([]);
  try {
    globalThis.fetch = async () => Response.json({});
    assert.equal(await getGoogleProfile(), null);
    for (const photoLink of [undefined, "invalid", "javascript:alert(1)", "http://example.com/a.png", "https://user:password@example.com/a.png"]) {
      globalThis.fetch = async () => Response.json({ user: { photoLink } });
      assert.deepEqual(await getGoogleProfile(), { displayName: "", photoURL: "" });
    }
  } finally {
    globalThis.fetch = originalFetch;
    delete globalThis.chrome;
  }
});
test("头像请求复用过期令牌的单次重试且不会弹出授权", async () => {
  const log = [];
  mockChrome(log);
  let calls = 0;
  globalThis.fetch = async () => ++calls === 1
    ? new Response("", { status: 401 })
    : Response.json({ user: { displayName: "更新账号" } });
  try {
    assert.equal((await getGoogleProfile()).displayName, "更新账号");
    assert.equal(calls, 2);
    assert.equal(log.filter(([type]) => type === "evict").length, 1);
    assert.ok(log.filter(([type]) => type === "auth").every(([, args]) => !args.interactive));
  } finally {
    globalThis.fetch = originalFetch;
    delete globalThis.chrome;
  }
});
test("自动恢复备份只使用静默授权，不上传或恢复云端数据", async () => {
  const log = [];
  mockChrome(log);
  globalThis.fetch = async (url, options) => {
    assert.equal(new URL(url).pathname, "/drive/v3/files");
    assert.equal(new URL(url).searchParams.get("spaces"), "appDataFolder");
    assert.equal(options.method, undefined);
    assert.equal(options.body, undefined);
    return Response.json({ files: [{ id: "existing-backup" }] });
  };
  try {
    assert.deepEqual(await listBackups(), [{ id: "existing-backup" }]);
    assert.equal(log.length, 1);
    assert.equal(log[0][1].interactive, false);
  } finally {
    globalThis.fetch = originalFetch;
    delete globalThis.chrome;
  }
});
test("主动断开后持久化禁用自动连接，再次手动授权后恢复", async () => {
  const log = [];
  mockChrome(log);
  globalThis.fetch = async () => Response.json({ files: [] });
  try {
    await disconnectDrive();
    assert.deepEqual(await chrome.storage.local.get(), { googleDriveAutoConnect: false });
    assert.deepEqual(log, [["clear"]]);
    await assert.rejects(listBackups(), /已断开/);
    await assert.rejects(getGoogleProfile(), /已断开/);
    assert.equal(log.length, 1, "断开后不会再次尝试获取令牌");
    await connectDrive();
    assert.deepEqual(await chrome.storage.local.get(), { googleDriveAutoConnect: true });
    assert.equal(log[1][1].interactive, true);
    await listBackups();
    assert.equal(log.at(-1)[1].interactive, false);
  } finally {
    globalThis.fetch = originalFetch;
    delete globalThis.chrome;
  }
});
test("静默授权失败不会自动升级为弹窗，取消手动授权保留断开状态", async () => {
  const log = [];
  mockChrome(log);
  chrome.identity.getAuthToken = async (args) => {
    log.push(["auth", args]);
    throw new Error("需要用户授权");
  };
  globalThis.fetch = async () => { throw new Error("不应调用 Drive API"); };
  try {
    await assert.rejects(listBackups(), /需要用户授权/);
    assert.equal(log.length, 1);
    assert.equal(log[0][1].interactive, false);
    await disconnectDrive();
    await assert.rejects(connectDrive(), /需要用户授权/);
    assert.deepEqual(await chrome.storage.local.get(), { googleDriveAutoConnect: false });
  } finally {
    globalThis.fetch = originalFetch;
    delete globalThis.chrome;
  }
});
