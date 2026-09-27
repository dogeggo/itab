import {
  e
} from "./chunk-76NDQHGN.js";
import {
  l
} from "./chunk-CU777VMF.js";
import {
  F,
  t2 as t
} from "./chunk-R77VKLDU.js";
import {
  c
} from "./chunk-UJCW7BUN.js";
import {
  $s,
  Vk,
  dv,
  ju,
  tC,
  uc,
  uv,
  zw
} from "./chunk-QX73FKBL.js";
import {
  Ar,
  Cr,
  Dr,
  Fr as Fr2,
  Hr as Hr2,
  Lr,
  Nr,
  Pr,
  Rr,
  Tr,
  Yr,
  br,
  dr,
  fr,
  gr,
  hi,
  hr,
  kr,
  kt,
  mr,
  or,
  pr,
  ur,
  vr,
  wr,
  xr,
  yr,
  zr
} from "./chunk-LEVEZLTX.js";
import "./chunk-5MDIDYN5.js";
import "./chunk-AFECQBGL.js";
import {
  le
} from "./chunk-YQ4PBQUM.js";
import "./chunk-C332WR7G.js";
import "./chunk-C3WGXGFI.js";
import "./chunk-S7M5ZIRT.js";
import "./chunk-USGTF4JI.js";
import {
  o,
  r
} from "./chunk-ZBQAVDN7.js";
import {
  $o,
  Es,
  Et,
  Fr,
  Hr,
  Lt,
  V,
  W,
  Z,
  Zr,
  dt,
  eo,
  fs,
  hs,
  io,
  lo,
  mn,
  po,
  sl,
  to,
  uo
} from "./chunk-E6JHFIG4.js";

// output/native-current/index-4mmTHGNP.js
var me = r("outline", "chevron-compact-down", "ChevronCompactDown", [["path", { d: "M4 11l8 3l8 -3", key: "svg-0" }]]), de = r("outline", "chevron-compact-up", "ChevronCompactUp", [["path", { d: "M4 13l8 -3l8 3", key: "svg-0" }]]);
var ve = { class: "muyu-setting-container el-dark-var dark" }, fe = { class: "font-bold flex items-center justify-between bottom-line pb-3" }, pe = { class: "bottom-line pb-4" }, be = { class: "sound text-base font-bold" }, ge = ["onClick"], ye = { class: "flex justify-between items-center pb-3 flex-row bottom-line" }, ke = { class: "flex justify-between items-center pb-3 flex-row bottom-line" }, xe = { class: "flex whitespace-nowrap w-[120px] items-center gap-2" }, he = { class: "f12 w-5 ml-1 flex justify-end" }, we = { class: "flex justify-between items-center pb-4 flex-row bottom-line" }, _e = { key: 0, class: "input-wrap" }, je = /* @__PURE__ */ o({ __name: "setting", props: { form: { type: Object, required: !0 } }, emits: ["close", "change"], setup(e2, { emit: r2 }) {
  let I2 = e2, C2 = r2, T2 = Et("no"), V2 = Et(2), M2 = Et(!1), $2 = Et(!1), A2 = null;
  function P2(e3) {
    if (e3.value !== "custom") return e3.label;
    let t2 = parseInt(V2.value, 10);
    return t2 ? `${t2} min` : e3.label;
  }
  function N2() {
    T2.value === "no" ? I2.form.mode = "no" : T2.value === "custom" ? (I2.form.mode = "timer", I2.form.timer = 60 * Math.max(1, parseInt(V2.value, 10) || 2)) : (I2.form.mode = "timer", I2.form.timer = Number(T2.value)), M2.value = !0;
  }
  function S2() {
    T2.value = "custom", N2();
  }
  function E2() {
    $2.value || (M2.value && C2("change"), $2.value = !0, A2 = setTimeout(() => C2("close"), 250));
  }
  return (function() {
    if (I2.form.mode === "no") return void (T2.value = "no");
    let e3 = parseInt(I2.form.timer, 10) || 120;
    if (mr.find((t2) => t2.value === e3)) return void (T2.value = e3);
    T2.value = "custom", V2.value = Math.max(1, parseInt(e3 / 60, 10) || 2);
  })(), hs(() => {
    clearTimeout(A2);
  }), (r3, i2) => {
    let c2 = $s, C3 = uc, M3 = ju, A3 = tC, H2 = Vk, R2 = dv, K2 = uv;
    return Zr(), eo("div", ve, [io("div", { class: "muyu-setting-overlay", onClick: E2 }), io("div", { class: W(["muyu-setting md:w-[40%] w-full", { closing: $2.value }]) }, [io("div", fe, [i2[5] || (i2[5] = io("div", { style: { "font-family": "monospace" }, class: "font-bold text-xl" }, "设置", -1)), lo(C3, { text: "", circle: "", onClick: E2 }, { default: mn(() => [lo(c2, { size: 20 }, { default: mn(() => [lo(Lt(t))]), _: 1 })]), _: 1 })]), io("label", null, [i2[7] || (i2[7] = io("div", null, "悬浮文字", -1)), lo(M3, { modelValue: e2.form.text, "onUpdate:modelValue": i2[0] || (i2[0] = (t2) => e2.form.text = t2), placeholder: "功德+1", style: { "--el-fill-color-light": "rgba(255, 255, 255, 0.08)", "--el-input-bg-color": "rgba(255, 255, 255, 0.08)", "--el-text-color-placeholder": "rgba(249, 224, 196, 0.75)", "--el-input-text-color": "#f9e0c4" } }, { prepend: mn(() => i2[6] || (i2[6] = [uo("自定义")])), _: 1 }, 8, ["modelValue"])]), io("label", pe, [i2[8] || (i2[8] = io("div", null, "音色", -1)), io("div", be, [(Zr(!0), eo(Hr, null, Es(Lt(pr), (t2, a2) => (Zr(), eo("div", { key: t2, class: W(["bg-[rgba(255,255,255, .08)]", { active: e2.form.audio === a2 }]), onClick: (e3) => (function(e4) {
      I2.form.audio = e4, Dr(e4), le.emit(or.audio, e4);
    })(a2) }, Z(t2), 11, ge))), 128))])]), io("div", ye, [i2[9] || (i2[9] = io("div", null, "自动敲击", -1)), lo(A3, { modelValue: e2.form.auto, "onUpdate:modelValue": i2[1] || (i2[1] = (t2) => e2.form.auto = t2), style: { "--el-switch-on-color": "#fcad66" } }, null, 8, ["modelValue"])]), io("div", ke, [i2[10] || (i2[10] = io("div", null, "间隔时间", -1)), io("div", xe, [lo(H2, { modelValue: e2.form.interval, "onUpdate:modelValue": i2[2] || (i2[2] = (t2) => e2.form.interval = t2), style: { "--el-color-primary": "#fcad66" }, min: 0.5, max: 5, step: 0.1, "show-input": !1 }, null, 8, ["modelValue"]), io("div", he, Z(Number(e2.form.interval).toFixed(1)) + "s ", 1)])]), io("div", we, [i2[13] || (i2[13] = io("div", null, "停止模式", -1)), lo(K2, { modelValue: T2.value, "onUpdate:modelValue": i2[4] || (i2[4] = (e3) => T2.value = e3), size: "small", class: "w-[80px!important]", "popper-class": "muyu-stop-mode-selector", style: { "--el-fill-color-blank": "rgba(255, 255, 255, 0.15)", "--el-border-color": "rgba(255, 255, 255, 0.15)" }, onChange: N2 }, { default: mn(() => [(Zr(!0), eo(Hr, null, Es(Lt(mr), (e3) => (Zr(), to(R2, { key: e3.value, value: e3.value, label: P2(e3), class: W({ custom: e3.value === "custom" }) }, { default: mn(() => [e3.value === "custom" ? (Zr(), eo("div", { key: 0, onClick: sl(S2, ["stop"]) }, [i2[12] || (i2[12] = io("div", { class: "custom-label" }, "自定义", -1)), T2.value === "custom" ? (Zr(), eo("div", _e, [lo(M3, { modelValue: V2.value, "onUpdate:modelValue": i2[3] || (i2[3] = (e4) => V2.value = e4), class: "w-[100px!important] text-left", onChange: N2 }, { append: mn(() => i2[11] || (i2[11] = [uo("min")])), _: 1 }, 8, ["modelValue"])])) : po("", !0)])) : po("", !0)]), _: 2 }, 1032, ["value", "label", "class"]))), 128))]), _: 1 }, 8, ["modelValue"])])], 2)]);
  };
} }, [["__scopeId", "data-v-86c86459"]]);
function Ie({ knock: e2 }) {
  let t2 = dt({ count: 0, startedAt: Date.now() }), a2 = Et(Date.now()), l2 = null, o2 = null;
  function n2() {
    t2.count = 0, t2.startedAt = Date.now(), a2.value = Date.now();
  }
  function s2() {
    clearTimeout(l2), clearInterval(o2), l2 = null, o2 = null;
  }
  function u2(e3 = Date.now()) {
    let a3 = Number(Tr.timer) || 0;
    return Math.max(0, a3 - Math.floor((e3 - t2.startedAt) / 1e3));
  }
  function r2() {
    return Tr.mode === "count" ? t2.count >= Number(Tr.count) : Tr.mode === "timer" && u2() <= 0;
  }
  function m2() {
    Tr.auto = !1, s2(), Yr();
  }
  function d2() {
    if (clearTimeout(l2), l2 = null, !Tr.auto) return;
    let e3 = 1e3 * Math.max(0.1, Number(Tr.interval) || 0.5);
    l2 = setTimeout(v2, e3);
  }
  function v2() {
    Tr.auto && (r2() ? m2() : (e2(!0), Tr.mode === "count" && (t2.count += 1, r2()) ? m2() : d2()));
  }
  function f2() {
    s2(), Tr.auto && (d2(), clearInterval(o2), o2 = null, Tr.auto && Tr.mode === "timer" && (a2.value = Date.now(), o2 = setInterval(() => {
      a2.value = Date.now(), r2() && m2();
    }, 250)));
  }
  let p2 = $o(() => Tr.auto ? Tr.mode === "count" ? `${t2.count}/${Tr.count}` : Tr.mode === "timer" ? Cr(u2(a2.value)) : Ar.value : Ar.value);
  return Fr(() => [Tr.auto, Tr.mode, Tr.timer], ([e3, t3, a3], l3) => {
    let o3 = l3?.[0], s3 = l3 != null && (l3[1] !== t3 || l3[2] !== a3);
    !e3 || o3 && !s3 || n2(), f2();
  }, { immediate: !0 }), hs(s2), { session: t2, nowTs: a2, counterText: p2, resetSession: n2, stopAuto: m2, sync: f2 };
}
var Ce = { class: "muyu-wrap w-full h-full flex flex-col items-center justify-between" }, Te = ["onAnimationend"], Ve = { class: "flex gap-4 items-center muyu-action-bar z-10" }, Me = { class: "f18 muyu-counter" }, ze = { class: "flex flex-col items-center justify-end flex-1 max-h-[90px] pb-5 muyu-theme-change" }, Le = { class: "flex gap-2" }, De = ["onClick"], Ue = { class: "flex gap-2" }, $e = ["onClick"], Ae = /* @__PURE__ */ o({ __name: "view", setup(e2) {
  let l2 = Et(!1), o2 = Et(!1), n2 = Et(), s2 = $o(() => hi(xr(Tr.bg), 1e3, 600, 93)), u2 = $o(() => wr(Tr.muyu)), g2 = $o(() => kr(Tr.muyu));
  function I2(e3) {
    return hi(xr(e3), 80, 40);
  }
  function T2(e3) {
    return hi(zr(e3), 80, 40);
  }
  let { labels: z2, knock: L2, removeLabel: D2 } = (function({ blocked: e3, hammerRef: t2, maxLabels: a2 = hr } = {}) {
    let { labels: l3, pushLabel: o3, removeLabel: n3 } = Pr(a2);
    return { labels: l3, knock: function(a3 = !1) {
      var l4, n4;
      return !(!a3 && e3?.() || (Nr(), o3(), Lr(Tr.audio), (n4 = (l4 = t2?.value) == null ? void 0 : l4.animate) == null || n4.call(l4, br, yr), 0));
    }, removeLabel: n3 };
  })({ blocked: () => o2.value, hammerRef: n2 }), { startHoldTap: U2, stopHoldTap: A2 } = (function(e3) {
    let t2 = null, a2 = 0;
    function l3() {
      clearInterval(t2), t2 = null;
    }
    return hs(l3), { startHoldTap: function(o3) {
      var n3;
      if (o3.type === "touchstart") {
        if (a2 = Date.now(), ((n3 = o3.touches) == null ? void 0 : n3.length) > 1) return;
      } else if (o3.type === "mousedown" && (Date.now() - a2 < gr || o3.button !== 0))
        return;
      l3(), e3(), t2 = setInterval(e3, vr);
    }, stopHoldTap: l3 };
  })(L2), { counterText: P2, resetSession: oe2 } = Ie({ knock: L2 });
  function ne2() {
    A2(), o2.value = !0;
  }
  function se2() {
    o2.value = !1, Yr();
  }
  function ue2(e3, t2) {
    Tr[e3] = t2, Yr();
  }
  function ve2() {
    Tr.auto ? oe2() : Fr2(0);
  }
  function fe2() {
    Tr.auto = !Tr.auto, Yr();
  }
  function pe2(e3) {
    if (o2.value || e3.code !== "Space" || e3.repeat) return;
    let t2 = e3.target;
    if (!(t2 instanceof HTMLElement)) return;
    let a2 = t2.tagName.toLowerCase();
    a2 === "input" || a2 === "textarea" || a2 === "button" || a2 === "a" || t2.isContentEditable || t2.closest("button, a, .el-button, .el-link, .el-switch, .el-slider, .el-select, .el-input") || (e3.preventDefault(), L2());
  }
  return fs(() => {
    Rr(), window.addEventListener("keydown", pe2);
  }), hs(() => {
    window.removeEventListener("keydown", pe2), A2(), Hr2(), Yr();
  }), (e3, i2) => {
    let c2 = uc, C2 = $s, V2 = zw;
    return Zr(), eo("div", { class: "relative w-full h-full bg-white bg-cover bg-center bg-no-repeat", style: V({ backgroundImage: `url(${s2.value})` }) }, [lo(c2, { circle: "", text: "", class: "open-settings absolute bottom-2 left-2 z-10", onClick: ne2 }, { default: mn(() => [lo(Lt(c), { class: "size-6", stroke: "2" })]), _: 1 }), o2.value ? (Zr(), to(je, { key: 0, form: Lt(Tr), onClose: se2, onChange: Lt(oe2) }, null, 8, ["form", "onChange"])) : po("", !0), io("div", Ce, [i2[7] || (i2[7] = io("div", { class: "muyu-title" }, "木鱼敲敲 烦恼消消", -1)), io("div", { class: "muyu-box ml-[40px] z-0", onTouchstart: i2[0] || (i2[0] = (...e4) => Lt(U2) && Lt(U2)(...e4)), onTouchend: i2[1] || (i2[1] = (...e4) => Lt(A2) && Lt(A2)(...e4)), onTouchcancel: i2[2] || (i2[2] = (...e4) => Lt(A2) && Lt(A2)(...e4)), onMousedown: i2[3] || (i2[3] = sl((...e4) => Lt(U2) && Lt(U2)(...e4), ["left"])), onMouseup: i2[4] || (i2[4] = (...e4) => Lt(A2) && Lt(A2)(...e4)), onMouseleave: i2[5] || (i2[5] = (...e4) => Lt(A2) && Lt(A2)(...e4)) }, [(Zr(!0), eo(Hr, null, Es(Lt(z2), (e4) => (Zr(), eo("div", { class: "muyu-text", key: e4.id, onAnimationend: (t2) => Lt(D2)(e4.id) }, Z(Lt(Tr).text || Lt(fr)), 41, Te))), 128)), io("div", { class: "muyu bg-contain bg-center", style: V({ backgroundImage: `url(${u2.value})` }) }, null, 4), io("div", { class: "hammer bg-contain bg-center", ref_key: "hammerRef", ref: n2, style: V({ backgroundImage: `url(${g2.value})` }) }, null, 4)], 32), io("div", Ve, [lo(V2, { underline: "never", onClick: ve2 }, { default: mn(() => [lo(C2, { size: 20 }, { default: mn(() => [lo(Lt(kt))]), _: 1 })]), _: 1 }), io("div", Me, Z(Lt(P2)), 1), lo(V2, { underline: "never", onClick: fe2 }, { default: mn(() => [lo(C2, { size: 20 }, { default: mn(() => [Lt(Tr).auto ? (Zr(), to(Lt(e), { key: 1, title: "暂停" })) : (Zr(), to(Lt(l), { key: 0, title: "自动" }))]), _: 1 })]), _: 1 })]), io("div", ze, [lo(V2, { underline: "never", onClick: i2[6] || (i2[6] = (e4) => l2.value = !l2.value) }, { default: mn(() => [l2.value ? (Zr(), to(Lt(me), { key: 1, "stroke-width": "1", size: 40 })) : (Zr(), to(Lt(de), { key: 0, "stroke-width": "1", size: 40 }))]), _: 1 }), io("div", { class: W(["flex gap-10 muyu-theme-card-box", { active: l2.value }]) }, [io("div", Le, [(Zr(!0), eo(Hr, null, Es(Lt(ur), (e4) => (Zr(), eo("div", { key: "bg-" + e4, class: W(["bg-option bg-cover bg-center bg-no-repeat", { active: e4 === Lt(Tr).bg }]), style: V({ backgroundImage: `url(${I2(e4)})` }), onClick: (t2) => ue2("bg", e4) }, null, 14, De))), 128))]), io("div", Ue, [(Zr(!0), eo(Hr, null, Es(Lt(dr), (e4) => (Zr(), eo("div", { key: "muyu-" + e4, class: W(["bg-option bg-cover bg-center bg-no-repeat", { active: e4 === Lt(Tr).muyu }]), style: V({ backgroundImage: `url(${T2(e4)})` }), onClick: (t2) => ue2("muyu", e4) }, null, 14, $e))), 128))])], 2)])])], 4);
  };
} }, [["__scopeId", "data-v-a86b9a6d"]]), Pe = { __name: "index", setup: (t2) => (t3, a2) => (Zr(), to(F, { width: "860px", height: "550px", destroyOnClose: !0, class: "dark el-dark-var" }, { default: mn(() => [lo(Ae)]), _: 1 })) };
export {
  Pe as default
};
/**
 * @license @tabler/icons-vue v3.46.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
