// output/native-current/channel-DqV07n6L.js
var e = { COMMAND: "COMMAND", SYNC: "SYNC", REQUEST_SYNC: "REQUEST_SYNC", CLAIM_AUDIO: "CLAIM_AUDIO", OWNER_GONE: "OWNER_GONE", COMPLETE: "COMPLETE", READY: "READY" }, t = (function() {
  var e2;
  try {
    if ((((e2 = window.location) == null ? void 0 : e2.pathname) || "").includes("offscreen")) return "offscreen";
  } catch {
  }
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
})(), n = null;
function o() {
  return n || (typeof BroadcastChannel > "u" ? (n = { postMessage() {
  }, addEventListener() {
  }, removeEventListener() {
  }, close() {
  } }, n) : (n = new BroadcastChannel("itab-tomato"), n));
}
function a(e2, n2) {
  o().postMessage({ type: e2, payload: n2, from: t });
}
function s(e2) {
  let n2 = o(), a2 = (n3) => {
    let o2 = n3.data || {};
    o2.type && o2.from !== t && e2({ type: o2.type, payload: o2.payload, from: o2.from });
  };
  return n2.addEventListener("message", a2), () => n2.removeEventListener("message", a2);
}

export {
  e,
  a,
  s
};
