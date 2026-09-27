export const BADGE_COLOR = "#E53935";
export const BADGE_TEXT_COLOR = "#FFFFFF";

export function formatTomatoBadgeText(value) {
  const seconds = Math.max(0, Math.floor(Number(value) || 0));
  return String(seconds >= 60 ? Math.floor(seconds / 60) : seconds);
}

export function syncTomatoBadge(status, seconds) {
  return updateBadge(status === "play" ? formatTomatoBadgeText(seconds) : "");
}

export function clearTomatoBadge() {
  return updateBadge("");
}

function extensionAPI() {
  try {
    // 扩展重载后旧标签页仍可能运行计时器，但其 API 上下文已失效。
    return globalThis.chrome?.runtime?.id ? globalThis.chrome : null;
  } catch {
    return null;
  }
}

async function callAction(method, details) {
  try {
    const action = extensionAPI()?.action;
    if (typeof action?.[method] !== "function") return false;
    // 即使刚检查过 runtime.id，调用时仍可能同步抛错或异步拒绝。
    await action[method](details);
    return true;
  } catch {
    return false;
  }
}

async function setActionBadge(text) {
  const updates = [];
  if (text) {
    updates.push(callAction("setBadgeBackgroundColor", { color: BADGE_COLOR }));
    updates.push(callAction("setBadgeTextColor", { color: BADGE_TEXT_COLOR }));
  }
  updates.push(callAction("setBadgeText", { text }));
  // 每项调用独立处理失败，颜色 API 缺失或失败不阻断文字更新。
  const results = await Promise.all(updates);
  return results.at(-1);
}

function isOffscreen() {
  return /offscreen/i.test(globalThis.location?.pathname || "");
}

async function updateBadge(text) {
  try {
    if (!extensionAPI()) return;
    if (!isOffscreen() && await setActionBadge(text)) return;
    const runtime = extensionAPI()?.runtime;
    if (typeof runtime?.sendMessage !== "function") return;
    await runtime.sendMessage({ type: "tomato:badge", text });
  } catch {
    // 消息发送也可能同步抛错；回退仍需检查上下文并捕获全部 API 错误。
    await setActionBadge(text);
  }
}
