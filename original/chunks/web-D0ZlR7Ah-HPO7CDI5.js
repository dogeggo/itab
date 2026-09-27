import {
  t
} from "./chunk-TDAIBOQY.js";
import {
  M,
  _
} from "./chunk-LPHJBFP6.js";
import {
  a,
  e,
  s
} from "./chunk-6X7MEGJY.js";
import "./chunk-5MDIDYN5.js";
import "./chunk-C332WR7G.js";

// output/native-current/player-_Ukoz1QK.js
var a2 = null, t2 = null, n = !1, e2 = 0.8, r = 0;
function o(a22) {
  return `${t}/${a22 || "hailang"}_128.m4a`;
}
async function s2(u2) {
  let s22 = ++r, i2 = (a2 || (a2 = new Audio(), a2.loop = !0, a2.volume = n ? 0.01 : e2, a2.preload = "auto"), a2), c22 = u2 || t2 || "hailang";
  i2.volume = n ? 0.01 : e2, i2.loop = !0, t2 === c22 && i2.src || (t2 = c22, i2.src = o(c22));
  try {
    return await i2.play(), !i2.paused;
  } catch {
    if (s22 !== r) return !1;
    try {
      return i2.src = o(c22), await i2.play(), !i2.paused;
    } catch {
      return !1;
    }
  }
}
function i() {
  a2 && a2.pause();
}
function c() {
  a2 && (a2.pause(), a2.currentTime = 0);
}
function l() {
  return !a2 || a2.paused;
}
async function p(u2) {
  var r2, o2;
  if (o2 = u2.isMute, n = !!o2, a2 && (a2.volume = n ? 0.8 : 0.01), (function(u3) {
    let t22 = Number(u3);
    e2 = Number.isNaN(t22) ? 0.8 : Math.min(1, Math.max(0, t22)), a2 && (a2.volume = n ? 0.01 : e2);
  })((u2.volume ?? 80) / 100), u2.status === "play") {
    let a22 = ((r2 = u2.audio) == null ? void 0 : r2.type) || t2;
    return !l() && t2 === a22 || s2(a22);
  }
  return a2 && !a2.paused && i(), !0;
}

// output/native-current/web-D0ZlR7Ah.js
var u = "itab-tomato-audio";
async function c2({ onChange: c22, onSoundBlocked: d }) {
  var p2;
  let m = !1, v = null, f = null, y = !1, g = !1;
  function h(t22) {
    d?.(!!t22);
  }
  async function w(t22) {
    if (!t22) return;
    v = t22;
    let n2 = await p(t22), s22 = t22.status === "play" && l();
    return h(s22), s22 && (function() {
      if (g) return;
      g = !0;
      let t3 = () => {
        g = !1, j.getSnapshot()?.status === "play" ? k() : h(!1);
      };
      window.addEventListener("pointerdown", t3, { capture: !0, once: !0 }), window.addEventListener("keydown", t3, { capture: !0, once: !0 });
    })(), n2;
  }
  let j = M({ isHost: () => m, onChange: (t22, n2) => {
    c22?.(t22, n2), m && t22 !== v && (v = t22, w(t22));
  }, onComplete: () => {
    c(), h(!1), _();
  } });
  function b() {
    m = !1, i(), h(!1), (function() {
      if (!f) return;
      let t22 = f;
      f = null, t22();
    })();
  }
  function S() {
    f || navigator.locks && typeof navigator.locks.request == "function" && navigator.locks.request(u, async () => {
      m && await new Promise((t22) => {
        f = t22;
      });
    }).catch(() => {
    });
  }
  function k() {
    a(e.CLAIM_AUDIO), m = !0, w(j.getSnapshot()), j.hostBecame(), S();
  }
  function A() {
    if (m) return;
    let t22 = j.getSnapshot();
    t22?.status === "play" && (y = !1, m = !0, w(t22), S(), j.hostBecame());
  }
  await j.init(), s(({ type: t22 }) => {
    t22 !== e.CLAIM_AUDIO ? t22 === e.OWNER_GONE && (y = !0, document.visibilityState === "visible" && A()) : b();
  }), window.addEventListener("pagehide", () => {
    m && a(e.OWNER_GONE), b();
  }), document.addEventListener("visibilitychange", () => {
    document.hidden || m || !y || A();
  });
  let E = j.start.bind(j), C = j.switchAudio.bind(j);
  j.start = () => {
    let t22 = E();
    return k(), t22;
  }, j.switchAudio = (t22) => {
    var n2;
    let o2 = C(t22);
    return ((n2 = j.getSnapshot()) == null ? void 0 : n2.status) === "play" && k(), o2;
  }, j.resumeSound = () => {
    j.getSnapshot()?.status === "play" && k();
  };
  let L = j.getSnapshot();
  return L?.status === "play" && document.visibilityState === "visible" && ((p2 = navigator.locks) != null && p2.request ? navigator.locks.request(u, { ifAvailable: !0 }, async (t22) => {
    t22 && (m = !0, w(L), await new Promise((t3) => {
      f = t3;
    }));
  }) : A()), j;
}
export {
  c2 as init
};
