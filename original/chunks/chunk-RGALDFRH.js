import {
  Ee,
  f,
  g
} from "./chunk-YQ4PBQUM.js";
import {
  Hn,
  ge
} from "./chunk-C3WGXGFI.js";
import {
  _
} from "./chunk-USGTF4JI.js";
import {
  Et,
  Fr,
  St,
  Tt
} from "./chunk-E6JHFIG4.js";

// output/native-current/store-BkQ4EtcH.js
function h(t2) {
  try {
    return JSON.parse(JSON.stringify(t2 ?? []));
  } catch {
    return [];
  }
}
function w(t2) {
  return t2 && typeof t2 == "object" && (t2.id != null && t2.id !== "" || (t2.id = _())), t2;
}
function _2(t2, e2) {
  return t2 != null && e2 != null && t2 == e2;
}
function q(t2, e2) {
  return t2.findIndex((t3) => t3 === e2 || e2 && _2(t3.id, e2.id));
}
function O(t2) {
  return Number(t2?.lut || t2?.ut || t2?.ct || 0);
}
function D(t2) {
  return !!t2;
}
function A() {
  return 0;
}
var P = Et(Ee(f.get("notes"))), V = () => P, R = Et([]), T = g(() => {
  let e2 = V(), y = Et([]), L = Tt(!1), j = Tt(null), P2 = Tt(0), T2 = Tt(0), J = 0, F = null, C = !1, W = A(), G = 0, B = !1;
  function X() {
    return Ee(y.value).filter(D);
  }
  function Z() {
    let t2 = Ee(St(X())), n2 = h(ge(t2, [O], ["desc"]).slice(0, 3)).map((t3) => (t3?.content && (t3.content = String(t3.content).slice(0, 40)), t3));
    f.set("notes", n2), e2.value = n2;
  }
  function $() {
    let t2 = X().filter((t3) => t3 && t3.fixed), e3 = R.value;
    t2.length === e3.length && t2.every((t3, n2) => t3 === e3[n2]) || (R.value = t2);
  }
  function z(t2) {
    y.value = t2, T2.value++, Z(), $();
  }
  let H = Promise.resolve();
  async function K() {
    return H = H.then(() => window.__nativeSession.storeSet("notes", "items", h(y.value)));
  }
  let et = Hn(() => K(), 500);
  function nt() {
    return et.cancel(), K();
  }
  async function ot() {
    if (!L.value)
      return F || (F = (async () => {
        J++;
        try {
          z(await window.__nativeSession.storeGet("notes", "items") ?? []);
        } finally {
          J--, L.value = !0;
        }
      })()), F;
  }
  function rt(t2 = {}) {
    let e3 = Date.now(), n2 = { ...t2, id: t2.id || _(), title: t2.title ?? "", content: t2.content ?? "", fixed: !!t2.fixed, ct: t2.ct ?? e3, ut: t2.ut ?? e3 };
    return y.value.push(n2), n2;
  }
  function ut(t2) {
    return y.value.find((e3) => e3.id === t2) || null;
  }
  function ct(t2) {
    let e3 = y.value.findIndex((e4) => _2(e4?.id, t2));
    e3 >= 0 && y.value.splice(e3, 1);
  }
  return Fr(y, () => {
    J || (Z(), $(), et());
  }, { deep: !0, flush: "sync" }), typeof window < "u" && (window.addEventListener("pagehide", nt), document.addEventListener("visibilitychange", () => {
    document.visibilityState === "hidden" && nt();
  })), ot(), { list: y, listEpoch: T2, ready: L, conflictFocusId: j, init: ot, addNote: rt, upsertNote: function(t2) {
    let e3 = w({ ...t2 }), n2 = q(y.value, e3);
    return n2 >= 0 ? (Object.assign(y.value[n2], e3), y.value[n2]) : (y.value.push(e3), e3);
  }, findNote: ut, removeNote: function(t2) {
    let e3 = q(y.value, t2);
    e3 < 0 || y.value.splice(e3, 1);
  }, toggleFixed: function(t2) {
    let e3 = q(y.value, t2);
    if (e3 < 0) return;
    let n2 = y.value[e3];
    return n2.fixed = !n2.fixed, n2;
  }, markDirty(t2) {
    return t2.ut = Date.now(), t2.lut = t2.ut, t2;
  }, applyNativeSnapshot(items) {
    et.cancel(), J++;
    try {
      z(items);
    } finally {
      J--;
    }
  }, persistNow: nt, getPlainList: function() {
    return h(X());
  }, visibleRows: X };
});

export {
  V,
  R,
  T
};
