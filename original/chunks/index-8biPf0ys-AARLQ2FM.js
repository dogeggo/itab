import {
  F
} from "./chunk-R77VKLDU.js";
import {
  X
} from "./chunk-UNAHCRLC.js";
import "./chunk-UJCW7BUN.js";
import "./chunk-JBUAPD4L.js";
import "./chunk-TDAIBOQY.js";
import {
  f as f2
} from "./chunk-Q65GPS6Q.js";
import {
  M
} from "./chunk-COOHQZF5.js";
import "./chunk-Q72T5IJS.js";
import "./chunk-TTG6GZ54.js";
import "./chunk-CL6HBMEG.js";
import "./chunk-WGCOLTAW.js";
import {
  f
} from "./chunk-BJRSIPJ7.js";
import {
  Jb
} from "./chunk-QX73FKBL.js";
import "./chunk-IEOKZKWO.js";
import {
  Nu,
  Ot,
  St,
  Zu,
  ad,
  ed,
  jt,
  ld,
  td
} from "./chunk-LEVEZLTX.js";
import "./chunk-5MDIDYN5.js";
import "./chunk-AFECQBGL.js";
import "./chunk-YQ4PBQUM.js";
import "./chunk-C332WR7G.js";
import "./chunk-C3WGXGFI.js";
import "./chunk-S7M5ZIRT.js";
import "./chunk-USGTF4JI.js";
import {
  o
} from "./chunk-ZBQAVDN7.js";
import {
  $o,
  At,
  Es,
  Et,
  Fr,
  H,
  Hr,
  Lt,
  Ns,
  Pr,
  Tt,
  V,
  W,
  Z,
  Zr,
  co,
  di,
  eo,
  fs,
  hs,
  io,
  lo,
  mn,
  on,
  po,
  to,
  uo,
  yn
} from "./chunk-E6JHFIG4.js";

// output/native-current/Content-n4T7zcAV.js
var N = { __name: "TimeRuler", props: Ns({ compact: Boolean }, { modelValue: { type: Number, default: 25 }, modelModifiers: {} }), emits: Ns(["dragging"], ["update:modelValue"]), setup(e2, { expose: t2, emit: x2 }) {
  let g2 = e2, w2 = Pr(e2, "modelValue"), y2 = x2, j2 = $o(() => g2.compact ? 16 : 20), k2 = Et(null), _2 = Et(0), M2 = Et(!1), C2 = Et(!1), V2 = $o(() => {
    let e3 = [];
    for (let t3 = 1; t3 <= 90; t3++) e3.push(t3);
    return e3;
  }), I2 = $o(() => ({ transform: `translate3d(${_2.value}px, 0, 0)`, transition: M2.value && !C2.value ? "transform 180ms ease-out" : "none" }));
  function L2(e3) {
    return g2.compact ? e3 % 10 == 0 ? "h-10 w-[2.5px] opacity-95" : e3 % 5 == 0 ? "h-8 w-[2px] opacity-80" : "h-5 w-[2px] opacity-45" : e3 % 10 == 0 ? "h-12 w-[3px] opacity-95" : e3 % 5 == 0 ? "h-9 w-[2.5px] opacity-80" : "h-6 w-[2px] opacity-45";
  }
  function z2(e3) {
    return Math.min(90, Math.max(1, Math.round(e3)));
  }
  function E2(e3) {
    return -((e3 - 1) * j2.value + j2.value / 2);
  }
  function R2(e3) {
    return z2(1 + (-e3 - j2.value / 2) / j2.value);
  }
  function P2(e3, { animate: t3 = !1 } = {}) {
    let a2 = z2(e3);
    M2.value = t3, _2.value = E2(a2), w2.value !== a2 && (w2.value = a2);
  }
  function X2({ snap: e3 = !1 } = {}) {
    let t3 = R2(_2.value);
    e3 ? P2(t3, { animate: !0 }) : w2.value !== t3 && (w2.value = t3);
  }
  function A2(e3) {
    C2.value = e3, y2("dragging", e3);
  }
  let U2 = null, B2 = 0, D2 = 0, G2 = !1;
  function N2(e3) {
    var t3, a2, l2, o2, s2;
    e3.button != null && e3.button !== 0 || (U2 = e3.pointerId, B2 = e3.clientX, D2 = _2.value, G2 = !1, A2(!0), M2.value = !1, (a2 = (t3 = k2.value) == null ? void 0 : t3.setPointerCapture) == null || a2.call(t3, U2), (l2 = k2.value) == null || l2.addEventListener("pointermove", O2), (o2 = k2.value) == null || o2.addEventListener("pointerup", S2), (s2 = k2.value) == null || s2.addEventListener("pointercancel", S2));
  }
  function O2(e3) {
    if (U2 != null && e3.pointerId !== U2) return;
    let t3 = e3.clientX - B2;
    if (!G2 && Math.abs(t3) < 4) return;
    G2 = !0;
    let a2 = E2(90), l2 = E2(1), o2 = D2 + t3;
    o2 > l2 && (o2 = l2 + 0.35 * (o2 - l2)), o2 < a2 && (o2 = a2 + 0.35 * (o2 - a2)), _2.value = o2, X2();
  }
  function S2(e3) {
    var t3;
    if (U2 != null && e3.pointerId !== U2) return;
    let a2 = k2.value;
    a2?.removeEventListener("pointermove", O2), a2?.removeEventListener("pointerup", S2), a2?.removeEventListener("pointercancel", S2);
    try {
      (t3 = a2?.releasePointerCapture) == null || t3.call(a2, U2);
    } catch {
    }
    if (U2 = null, A2(!1), !G2 && a2) {
      let t4 = a2.getBoundingClientRect(), l2 = e3.clientX - (t4.left + t4.width / 2);
      return void P2(R2(D2 - l2), { animate: !0 });
    }
    X2({ snap: !0 });
  }
  function T2(e3) {
    e3.preventDefault();
    let t3 = e3.deltaX !== 0 ? e3.deltaX : e3.deltaY;
    if (!t3) return;
    let a2 = Math.abs(t3) >= 10 && Math.round(t3 / 40) || Math.sign(t3);
    P2(w2.value + a2, { animate: !0 });
  }
  return Fr(() => w2.value, (e3) => {
    if (C2.value) return;
    let t3 = E2(z2(e3));
    Math.abs(t3 - _2.value) > 0.5 && (M2.value = !0, _2.value = t3);
  }), fs(async () => {
    var e3;
    await on(), P2(w2.value, { animate: !1 }), (e3 = k2.value) == null || e3.addEventListener("wheel", T2, { passive: !1 });
  }), hs(() => {
    var e3, t3, a2, l2;
    (e3 = k2.value) == null || e3.removeEventListener("wheel", T2), (t3 = k2.value) == null || t3.removeEventListener("pointermove", O2), (a2 = k2.value) == null || a2.removeEventListener("pointerup", S2), (l2 = k2.value) == null || l2.removeEventListener("pointercancel", S2);
  }), t2({ setMinutes: P2 }), (t3, a2) => (Zr(), eo("div", { ref_key: "viewportRef", ref: k2, class: W(["time-ruler relative w-full cursor-pointer touch-none select-none overflow-x-clip overflow-y-visible", e2.compact ? "h-24" : "h-28"]), onPointerdown: N2 }, [io("div", { class: W(["pointer-events-none absolute -top-1 bottom-3 left-1/2 z-10 w-0.5 -translate-x-1/2 rounded-full bg-white", e2.compact ? "h-[64px]" : "h-[72px]"]), style: { bottom: "auto" } }, null, 2), io("div", { class: "time-ruler__track absolute top-0 left-1/2 flex h-full items-start will-change-transform", style: V(I2.value) }, [(Zr(!0), eo(Hr, null, Es(V2.value, (t4) => (Zr(), eo("div", { key: t4, class: "relative shrink-0", style: V({ width: j2.value + "px" }) }, [io("i", { class: W(["absolute top-0 left-1/2 block -translate-x-1/2 rounded-sm bg-white", L2(t4)]) }, null, 2), t4 % 5 == 0 ? (Zr(), eo("span", { key: 0, class: W(["absolute left-1/2 -translate-x-1/2 leading-none text-white/80", e2.compact ? "top-11 text-[15px]" : "top-[52px] text-base"]) }, Z(t4), 3)) : po("", !0)], 4))), 128))], 4)], 34));
} }, O = { class: "relative h-full w-full bg-cover bg-[#201f1e] text-(--d-label) [--d-label:#fff]" }, S = { class: "size-full d-flex-center ac relative z-10" }, T = { class: "relative" }, F2 = { class: "relative mt-10 size-[420px] overflow-visible text-white/80" }, $ = { class: "relative z-10 place-self-center h-[220px] w-[280px] overflow-visible" }, q = { class: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" }, K = { key: 0, class: "absolute bottom-full left-1/2 mb-1.5 w-[280px] -translate-x-1/2 translate-y-12 overflow-visible" }, Q = { class: "b text-center text-[70px] font-[Arial,sans-serif] whitespace-nowrap" }, W2 = { class: "absolute bottom-[18px] left-1/2 z-20 flex -translate-x-1/2 items-center gap-2" }, Y = { class: "d-icon" }, Z2 = { class: "d-icon" }, H2 = { class: "d-icon" }, J = { class: "w-full px-2 pt-2 pb-1 text-[#efefef]" }, ee = { class: "mb-4 text-center text-[42px] font-semibold leading-none tracking-tight" }, te = { class: "mt-5 flex items-center justify-center gap-6" }, ae = /* @__PURE__ */ o({ __name: "Content", props: { row: { type: Object, default: () => ({ config: { type: "hailang", n: "海浪" } }) } }, setup(a2) {
  let o2 = Tt(25), n2 = Tt(25), r2 = $o(() => Nu.status === "stop");
  function i2(e2) {
    return Math.min(90, Math.max(1, Math.round(Number(e2) || 25)));
  }
  Fr(M, (e2) => {
    if (e2) {
      let e3 = Number(Nu.timeRemaining) || 25;
      o2.value = Math.min(90, Math.max(1, Math.round(e3)));
    }
  }), Fr(() => Nu.timeRemaining, (e2) => {
    Nu.status === "stop" && (n2.value = i2(e2));
  }, { immediate: !0 }), Fr(n2, (e2) => {
    if (Nu.status !== "stop") return;
    let t2 = i2(e2);
    Nu.timeRemaining !== t2 && (Nu.timeRemaining = t2);
  });
  let m2 = () => {
    Nu.timeRemaining = i2(o2.value), M.value = !1;
  };
  return (a3, l2) => {
    let s2 = f, i3 = Jb;
    return Zr(), eo("div", O, [lo(X), io("div", S, [io("div", T, [io("div", F2, [lo(f2, { color: "rgba(255,255,255,.45)", "track-opacity": 0.28, percentage: Lt(Nu).percentage, class: "absolute inset-0" }, { default: mn(() => [io("div", $, [io("div", q, [r2.value ? (Zr(), eo("div", K, [lo(N, { modelValue: n2.value, "onUpdate:modelValue": l2[0] || (l2[0] = (e2) => n2.value = e2), compact: "" }, null, 8, ["modelValue"])])) : po("", !0), io("div", Q, [r2.value ? (Zr(), eo(Hr, { key: 0 }, [uo(Z(n2.value) + " ", 1), l2[9] || (l2[9] = io("span", { class: "ml-1 text-sm font-normal opacity-45" }, "分钟", -1))], 64)) : (Zr(), eo(Hr, { key: 1 }, [uo(Z(Lt(Nu).showTime), 1)], 64))])])])]), _: 1 }, 8, ["percentage"]), io("div", W2, [yn(lo(s2, { color: "rgba(255, 255, 255, 0.22)", size: "large", round: "", class: "gap-btn gap-btn-start hover:opacity-90", onClick: l2[1] || (l2[1] = (e2) => Lt(ed)()) }, { default: mn(() => l2[10] || (l2[10] = [uo(" 开 始 ")])), _: 1, __: [10] }, 512), [[di, Lt(Nu).status === "stop"]]), yn(lo(s2, { color: "rgba(255, 255, 255, 0.22)", size: "large", round: "", class: "gap-btn hover:opacity-90", onClick: l2[2] || (l2[2] = (e2) => Lt(ld)()) }, { default: mn(() => [io("i", Y, [lo(Lt(jt))])]), _: 1 }, 512), [[di, Lt(Nu).status === "play"]]), yn(lo(s2, { color: "rgba(255, 255, 255, 0.22)", size: "large", round: "", class: "gap-btn hover:opacity-90", onClick: l2[3] || (l2[3] = (e2) => Lt(ed)()) }, { default: mn(() => [io("i", Z2, [lo(Lt(St))])]), _: 1 }, 512), [[di, Lt(Nu).status === "pause"]]), yn(lo(s2, { color: "rgba(255, 255, 255, 0.22)", size: "large", round: "", class: "gap-btn hover:opacity-90", onClick: l2[4] || (l2[4] = (e2) => Lt(td)()) }, { default: mn(() => [io("i", H2, [lo(Lt(Ot))])]), _: 1 }, 512), [[di, Lt(Nu).status !== "stop"]])])]), Lt(Zu) && Lt(Nu).status === "play" ? (Zr(), eo("p", { key: 0, class: "mt-8 cursor-pointer text-center text-[13px] text-white/85 [text-shadow:0_1px_2px_rgb(0_0_0/0.4)]", onClick: l2[5] || (l2[5] = (...e2) => Lt(ad) && Lt(ad)(...e2)) }, " 点击页面恢复声音 ")) : po("", !0)])]), lo(i3, { width: "500px", "append-to-body": "", "destroy-on-close": "", top: "25vh", style: { "--el-bg-color": "rgba(255, 255, 255, 0.06)", border: "1.2px solid rgba(255, 255, 255, 0.08) !important" }, class: "backdrop-blur-sm", modelValue: Lt(M), "onUpdate:modelValue": l2[8] || (l2[8] = (e2) => At(M) ? M.value = e2 : null) }, { default: mn(() => [io("div", J, [io("p", ee, [uo(Z(o2.value) + " ", 1), l2[11] || (l2[11] = io("span", { class: "ml-1 text-sm font-normal opacity-45" }, "分钟", -1))]), lo(N, { modelValue: o2.value, "onUpdate:modelValue": l2[6] || (l2[6] = (e2) => o2.value = e2) }, null, 8, ["modelValue"]), io("div", te, [io("button", { type: "button", class: "inline-flex w-20 cursor-pointer items-center justify-center rounded-full border-[1.2px] border-white/20 bg-transparent p-0 text-sm leading-[34px] text-white/70 hover:border-white/35 hover:text-white", onClick: l2[7] || (l2[7] = (e2) => M.value = !1) }, " 取消 "), io("button", { type: "button", class: "inline-flex w-20 cursor-pointer items-center justify-center rounded-full border-0 bg-white/20 px-0 py-1.5 text-sm text-white hover:bg-white/28", onClick: m2 }, " 确定 ")])])]), _: 1 }, 8, ["modelValue"])]);
  };
} }, [["__scopeId", "data-v-20a82c13"]]);

// output/native-current/index-8biPf0ys.js
var j = { __name: "index", props: { data: Object }, setup: (j2) => (j3, n) => (Zr(), to(F, { destroyOnClose: !0, transparent: "" }, { default: mn(() => [lo(ae, H(co(j3.$attrs)), null, 16)]), _: 1 })) };
export {
  j as default
};
