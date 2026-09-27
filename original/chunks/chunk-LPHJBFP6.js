import {
  a as a2,
  e,
  s as s2
} from "./chunk-6X7MEGJY.js";
import {
  a,
  c,
  l,
  m,
  n,
  o,
  r,
  s,
  t as t2
} from "./chunk-5MDIDYN5.js";
import {
  t
} from "./chunk-C332WR7G.js";

// output/native-current/notifyComplete-XLV67qw7.js
var y = "app-tomato", g = null;
function w() {
  return g || (g = t(() => import("./cache-VMWPWM72.js"), []).then((t22) => t22.default)), g;
}
async function h() {
  try {
    let n2 = await w();
    return (function(n3) {
      if (!n3 || typeof n3 != "object") return n();
      let s22 = Number(n3.durationMin);
      if (!s22 || Number.isNaN(s22)) return n();
      let i2 = a(n3.audio || t2), a22 = ["play", "pause", "stop"].includes(n3.status) ? n3.status : "stop", r2 = a22 === "stop" ? 60 * s22 : Math.max(0, Number(n3.remainingAtStart ?? 60 * s22) || 0), u2 = n3.startedAt;
      return n({ status: a22, durationMin: s22, remainingAtStart: r2, startedAt: a22 === "play" && typeof u2 == "number" && u2 > 0 ? u2 : null, isMute: !!n3.isMute, volume: n3.volume, lastVolume: n3.lastVolume ?? n3.volume, audio: i2 });
    })(await n2.get(y));
  } catch {
    return n();
  }
}
async function N(t22, o2 = Date.now()) {
  try {
    return (await w()).set(y, (function(t3, o3 = Date.now()) {
      let a22 = t3.status === "play" && t3.startedAt ? r(t3, o3) : t3.remainingAtStart, r2 = a(t3.audio);
      return { status: t3.status, durationMin: t3.durationMin, remainingAtStart: t3.remainingAtStart, startedAt: t3.startedAt, isMute: !!t3.isMute, volume: t3.volume, lastVolume: t3.lastVolume, audio: r2 };
    })(t22, o2));
  } catch {
    return null;
  }
}
function M({ isHost: t22, onChange: e2, onComplete: s22 }) {
  let i2 = null, o2 = null, d2 = null, y2 = !1;
  function g2() {
    i2 && e2?.(i2, c(i2));
  }
  function w2(t3 = i2) {
    t3 && N(t3);
  }
  function M2() {
    i2 && N(o(i2));
  }
  function v2() {
    if (d2 && (clearTimeout(d2), d2 = null), !t22() || !i2 || i2.status !== "play") return;
    let e3 = r(i2);
    d2 = setTimeout(() => {
      S2();
    }, 1e3 * e3 + 50);
  }
  function A2(n2, { persistNow: e3 = !0, sync: s3 = !1 } = {}) {
    i2 = n2, g2(), v2(), e3 && w2(i2), s3 && t22() && a2(e.SYNC, i2);
  }
  function S2() {
    if (!i2 || i2.status !== "play") return;
    let t3 = s(i2);
    A2(t3, { persistNow: !0, sync: !0 }), s22?.(t3);
  }
  function _2(n2, e3) {
    if (!i2) return null;
    let s3 = l(i2, n2, e3);
    return s3 === i2 ? i2 : (A2(s3, { persistNow: !0, sync: t22() }), a2(e.COMMAND, { cmd: n2, extra: e3, snapshot: s3 }), s3);
  }
  function b({ type: n2, payload: e3 }) {
    if (n2 === e.COMMAND)
      return void A2(e3?.snapshot || l(i2, e3?.cmd, e3?.extra), { persistNow: !0, sync: t22() });
    if (n2 !== e.SYNC) n2 === e.REQUEST_SYNC && i2 && a2(e.SYNC, i2);
    else {
      if (!e3) return;
      A2(e3, { persistNow: !0, sync: !1 });
    }
  }
  function C() {
    !i2 || i2.status !== "play" || (r(i2) <= 0 && t22() ? S2() : g2());
  }
  return window.__nativeTomato = { flush: () => i2 ? N(i2) : Promise.resolve(), ready: () => y2, sync: async () => {
    A2(await h(), { persistNow: !1, sync: !1 });
  } }, { init: async function() {
    i2 = await h(), s2(b), a2(e.REQUEST_SYNC), await new Promise((t3) => setTimeout(t3, 80)), i2.status !== "play" || i2.startedAt || (i2 = m(i2), w2(i2), t22() && a2(e.SYNC, i2)), g2(), o2 || (o2 = setInterval(C, 1e3)), v2(), y2 = !0, window.addEventListener("pagehide", () => {
      t22() && M2();
    });
  }, dispatch: _2, getSnapshot: function() {
    return i2;
  }, applySnapshot: A2, hostBecame: function() {
    v2(), i2 && a2(e.SYNC, i2), g2();
  }, persistFrozen: M2, start: () => _2("start"), pause: () => _2("pause"), stop: () => _2("stop"), setDuration: (t3) => _2("setDuration", { durationMin: t3 }), switchAudio: (t3) => _2("switchAudio", { audio: t3 }), setMute: (t3) => _2("setMute", { isMute: t3 }), setVolume: (t3) => _2("setVolume", { volume: t3 }), persist: w2, get ready() {
    return y2;
  } };
}
var v = "番茄已完成", A = "休息一下，番茄钟时间到了";
function S() {
  typeof window < "u" && window.document && t(() => import("./vendor-element-plus-CRt18gND-MNDHTQD2.js").then((t22) => t22.an), ["assets/vendor-element-plus-WnleHQiG.css"]).then((t22) => {
    t22.default({ title: v, message: A, duration: 8e3 });
  }).catch(() => {
  });
}
async function _(t22 = {}) {
  let { inPageOnly: n2 = !1 } = t22;
  if (n2) return void S();
  let e2 = await (function() {
    var t3, n3;
    let e3 = (t3 = globalThis.chrome) == null ? void 0 : t3.runtime;
    if (!e3?.sendMessage) return Promise.resolve(!1);
    let s3 = ((n3 = e3.getURL) == null ? void 0 : n3.call(e3, "/original/icon/icon_192.png")) || "/original/icon/icon_192.png";
    return new Promise((t4) => {
      e3.sendMessage({ type: "tomato:notify-complete", data: { type: "basic", iconUrl: s3, title: v, message: A } }, (n4) => {
        e3.lastError ? t4(!1) : t4(!!n4?.ok);
      });
    });
  })(), s22 = (function() {
    try {
      return typeof Notification < "u" && Notification.permission === "granted" && (new Notification(v, { body: A, icon: "/original/icon/icon_192.png", lang: "ZH" }), !0);
    } catch {
      return !1;
    }
  })();
  e2 || s22 || S();
}

export {
  M,
  _
};
