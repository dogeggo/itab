import {
  e,
  s
} from "./chunk-6X7MEGJY.js";

// output/native-current/createOffscreen-BqZv32hL.js
var t = null;
async function n() {
  try {
    return !!(await chrome.runtime.sendMessage({ type: "tomato:ensure-offscreen" }))?.ok;
  } catch {
    return !1;
  }
}
async function r() {
  var e2;
  return (typeof window > "u" || !window.location.protocol.includes("http")) && ((e2 = globalThis.chrome) != null && e2.offscreen ? t ? (await t, !1) : !await chrome.offscreen.hasDocument() && (t = (async () => {
    try {
      await chrome.offscreen.createDocument({ url: "offscreen.html", reasons: ["AUDIO_PLAYBACK"], justification: "番茄钟在标签页不可见时继续播放白噪音" });
    } catch (e3) {
      if (await chrome.offscreen.hasDocument()) return;
      if (!await n()) throw e3;
    }
  })().finally(() => {
    t = null;
  }), await t, !0) : n());
}
function a(t2 = !1, n2 = 3e3) {
  return t2 ? new Promise((t3) => {
    let r2 = setTimeout(() => {
      t3();
    }, n2), a2 = s(({ type: e2, from: n3 }) => {
      e2 === e.READY && n3 === "offscreen" && (clearTimeout(r2), a2(), t3());
    });
  }) : Promise.resolve();
}

export {
  r,
  a
};
