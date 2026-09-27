import {
  F,
  e as e2,
  i,
  n
} from "./chunk-R77VKLDU.js";
import {
  v
} from "./chunk-Q72T5IJS.js";
import {
  e
} from "./chunk-TTG6GZ54.js";
import {
  Me,
  tC
} from "./chunk-QX73FKBL.js";
import "./chunk-IEOKZKWO.js";
import {
  xt
} from "./chunk-LEVEZLTX.js";
import "./chunk-5MDIDYN5.js";
import "./chunk-AFECQBGL.js";
import "./chunk-YQ4PBQUM.js";
import "./chunk-C332WR7G.js";
import "./chunk-C3WGXGFI.js";
import {
  data_default
} from "./chunk-S7M5ZIRT.js";
import "./chunk-USGTF4JI.js";
import {
  o
} from "./chunk-ZBQAVDN7.js";
import {
  Es,
  Et,
  H,
  Hr,
  Lt,
  Tt,
  V,
  W,
  Z,
  Zr,
  co,
  di,
  eo,
  hs,
  io,
  lo,
  mn,
  on,
  to,
  vs,
  ws,
  yn
} from "./chunk-E6JHFIG4.js";

// output/native-current/Content-L77Uf1_0.js
var C = { class: "flip" }, V2 = { class: "up" }, A = { class: "inn" }, F2 = { class: "down" }, R = { class: "inn" }, D = o({ props: { total: { type: Number, default: 9 }, current: { type: Number, default: -1 } }, data() {
  return { before: this.total === this.current ? -1 : this.total, isPlay: !1 };
}, watch: { current(e22, l2) {
  this.before = l2, this.isPlay || (this.isPlay = !0);
} } }, [["render", function(r2, u2, i2, c2, d2, f2) {
  return Zr(), eo("div", { class: W({ play: d2.isPlay }) }, [io("ul", C, [(Zr(!0), eo(Hr, null, Es(i2.total + 1, (s2, a2) => (Zr(), eo("li", { class: W(["item", { active: i2.current === a2, before: a2 === d2.before }]), key: s2 }, [io("div", V2, [u2[0] || (u2[0] = io("div", { class: "shadow" }, null, -1)), io("div", A, [io("span", null, Z(a2), 1)])]), io("div", F2, [u2[1] || (u2[1] = io("div", { class: "shadow" }, null, -1)), io("div", R, [io("span", null, Z(a2), 1)])])], 2))), 128))])], 2);
}], ["__scopeId", "data-v-27fff51f"]]);
function N(e22 = /* @__PURE__ */ new Date()) {
  let l2 = e22.getHours(), t2 = e22.getMinutes(), s2 = e22.getSeconds();
  return [...O(l2), ...O(t2), ...O(s2)];
}
function O(e22) {
  return e22 >= 10 ? ("" + e22).split("").map((e3) => Number(e3)) : [0, e22];
}
var U = { class: "w-full h-full d-flex-center" }, X = { class: "colon flex justify-around flex-col" }, H2 = { class: "clock-btn", style: { position: "absolute", right: "20px", bottom: "10px", color: "#fff" } }, L = { class: "d-icon f22 ml20", title: "是否显示秒", style: { "vertical-align": "3px" } }, M = /* @__PURE__ */ o({ __name: "Content", props: { row: { type: Object, default: {} } }, setup(s2) {
  let a2 = Tt(null), o2 = Tt(null), n2 = Tt(!0), w2 = Tt(!0), C2 = Tt(""), { toggle: V22, isFullscreen: A2 } = Me(a2), F22 = s2, R2;
  function O2(e22) {
    M2(), data_default.set("app-clock-isShowSecond", e22);
  }
  function M2() {
    let e22 = a2.value;
    if (!e22) return;
    let l2 = e22.clientWidth, t2 = w2.value ? 30 : 20;
    a2.value.style.fontSize = l2 / t2 + "px";
  }
  data_default.get("app-clock-isShowSecond").then((e22) => {
    e22 == null && (e22 = !0), w2.value = e22;
  }), on(() => {
    a2.value.style.fontSize = "21px";
    let e22 = a2.value;
    R2 = new ResizeObserver(M2), R2.observe(e22), F22.row.config && F22.row.config.isFullscreen && V22();
  }), hs(() => {
    R2 && R2.disconnect();
  });
  let T = Et(N()), W2 = null;
  function $() {
    clearTimeout(W2);
  }
  function E(e22) {
    e22.code === "F11" && (e22.preventDefault(), V22());
  }
  return (function e22() {
    W2 = setTimeout(() => {
      $(), T.value = N(), e22(), n2.value || (o2.value.load(), o2.value.play());
    }, 1e3);
  })(), vs(() => {
    $();
  }), on(() => {
    e2(document, "keydown", E);
  }), vs(() => {
    n(document, "keydown", E);
  }), (s3, r2) => (Zr(), eo("div", { ref_key: "watchResize", ref: a2, class: "h-full w-full relative", style: { "background-color": "#000" } }, [io("div", U, [io("div", { class: "flex items-center mt-[-1.6em]", style: V(`font-family:${C2.value}`) }, [lo(D, { total: 2, current: T.value[0] }, null, 8, ["current"]), lo(D, { total: 9, current: T.value[1] }, null, 8, ["current"]), r2[3] || (r2[3] = io("div", { class: "colon flex justify-around flex-col" }, null, -1)), lo(D, { total: 5, current: T.value[2] }, null, 8, ["current"]), lo(D, { total: 9, current: T.value[3] }, null, 8, ["current"]), yn(io("div", X, null, 512), [[di, w2.value]]), yn(lo(D, { total: 5, current: T.value[4] }, null, 8, ["current"]), [[di, w2.value]]), yn(lo(D, { total: 9, current: T.value[5] }, null, 8, ["current"]), [[di, w2.value]])], 4), io("audio", { class: "d-hidden", ref_key: "refAudio", ref: o2 }, r2[4] || (r2[4] = [io("source", { src: "/original/assets/dida-DXPjLSJj.mp3" }, null, -1)]), 512), io("div", H2, [io("i", { class: "d-icon f22", title: "时钟音效", onClick: r2[0] || (r2[0] = (e22) => n2.value = !n2.value) }, [(Zr(), to(ws(n2.value ? Lt(v) : Lt(e))))]), io("i", { class: "d-icon f22 ml20", title: "快捷键F11可切换至全屏", onClick: r2[1] || (r2[1] = (...e22) => Lt(V22) && Lt(V22)(...e22)) }, [(Zr(), to(ws(Lt(A2) ? Lt(i) : Lt(xt))))]), io("i", L, [lo(Lt(tC), { size: "small", onChange: O2, modelValue: w2.value, "onUpdate:modelValue": r2[2] || (r2[2] = (e22) => w2.value = e22) }, null, 8, ["modelValue"])])])])], 512));
} }, [["__scopeId", "data-v-88261344"]]);

// output/native-current/index-DT9qMiPS.js
var a = { __name: "index", props: { data: Object }, setup: (a2) => (a3, n2) => (Zr(), to(F, { destroyOnClose: !0, transparent: "" }, { default: mn(() => [lo(M, H(co(a3.$attrs)), null, 16)]), _: 1 })) };
export {
  a as default
};
