// output/native-current/badge-F1n9rTg1.js
var BADGE_COLOR = "#E53935", BADGE_TEXT_COLOR = "#FFFFFF";
function formatTomatoBadgeText(value) {
  let seconds = Math.max(0, Math.floor(Number(value) || 0));
  return String(seconds >= 60 ? Math.floor(seconds / 60) : seconds);
}
function syncTomatoBadge(status, seconds) {
  return updateBadge(status === "play" ? formatTomatoBadgeText(seconds) : "");
}
function clearTomatoBadge() {
  return updateBadge("");
}
function extensionAPI() {
  try {
    return globalThis.chrome?.runtime?.id ? globalThis.chrome : null;
  } catch {
    return null;
  }
}
async function callAction(method, details) {
  try {
    let action = extensionAPI()?.action;
    return typeof action?.[method] != "function" ? !1 : (await action[method](details), !0);
  } catch {
    return !1;
  }
}
async function setActionBadge(text) {
  let updates = [];
  return text && (updates.push(callAction("setBadgeBackgroundColor", { color: BADGE_COLOR })), updates.push(callAction("setBadgeTextColor", { color: BADGE_TEXT_COLOR }))), updates.push(callAction("setBadgeText", { text })), (await Promise.all(updates)).at(-1);
}
function isOffscreen() {
  return /offscreen/i.test(globalThis.location?.pathname || "");
}
async function updateBadge(text) {
  try {
    if (!extensionAPI() || !isOffscreen() && await setActionBadge(text)) return;
    let runtime = extensionAPI()?.runtime;
    if (typeof runtime?.sendMessage != "function") return;
    await runtime.sendMessage({ type: "tomato:badge", text });
  } catch {
    await setActionBadge(text);
  }
}
export {
  BADGE_COLOR,
  BADGE_TEXT_COLOR,
  clearTomatoBadge,
  formatTomatoBadgeText,
  syncTomatoBadge
};
