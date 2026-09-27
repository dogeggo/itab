import {
  Bc,
  Hc
} from "./chunk-LEVEZLTX.js";
import "./chunk-5MDIDYN5.js";
import "./chunk-AFECQBGL.js";
import {
  Pe,
  ke
} from "./chunk-YQ4PBQUM.js";
import {
  t
} from "./chunk-C332WR7G.js";
import "./chunk-C3WGXGFI.js";
import "./chunk-S7M5ZIRT.js";
import "./chunk-USGTF4JI.js";
import {
  o
} from "./chunk-ZBQAVDN7.js";
import {
  $o,
  Fr,
  Tt,
  V,
  W,
  Zr,
  eo,
  io,
  on,
  po,
  vs
} from "./chunk-E6JHFIG4.js";

// output/native-current/Sparkline-DIl1_Crd.js
var k = { class: "size-full", viewBox: "0 0 100 28", preserveAspectRatio: "none" }, y = ["id"], _ = ["stop-color"], g = ["stop-color"], j = ["d", "fill"], w = ["d", "stroke"], E = { name: "stock-sparkline" }, b = o(Object.assign(E, { props: { item: { type: Object, default: null }, keepKeys: { type: Array, default: null } }, setup(i2) {
  let E2 = i2, b2 = Tt({ line: "", area: "" }), L = Tt(null), $ = Tt(!1), x = Tt(0), A = $o(() => Hc(E2.item)), I = $o(() => {
    var e2;
    return Bc((e2 = E2.item) == null ? void 0 : e2.f3);
  }), S = $o(() => `spark-fill-${A.value.replace(/\W/g, "_")}`), F = $o(() => x.value > 0 ? { "--spark-len": `${x.value}` } : void 0), C = 0, M = "", P = "", R = null, D = null, O = !0;
  function T(e2, t2 = 100, a2 = 28, n2 = 1) {
    if (!e2 || e2.length < 2) return { line: "", area: "" };
    let l2 = Math.min(...e2), i3 = Math.max(...e2) - l2 || 1, s2 = a2 - 2 * n2, o2 = e2.map((a3, o3) => [o3 / (e2.length - 1) * t2, n2 + (1 - (a3 - l2) / i3) * s2]), r2 = o2.map(([e3, t3], a3) => `${a3 ? "L" : "M"}${e3.toFixed(2)} ${t3.toFixed(2)}`).join(" "), u2 = o2[0][0].toFixed(2);
    return { line: r2, area: `${r2} L${o2[o2.length - 1][0].toFixed(2)} ${a2} L${u2} ${a2} Z` };
  }
  function V2() {
    x.value = 0, $.value = !0;
  }
  function K(e2, { animate: t2 = !0 } = {}) {
    b2.value = e2, t2 && e2?.line ? (async function() {
      $.value = !1, x.value = 1e3, await on();
      let e3 = L.value;
      if (!e3 || typeof e3.getTotalLength != "function") return void V2();
      let t3 = e3.getTotalLength();
      !Number.isFinite(t3) || t3 <= 0 ? V2() : (x.value = t3, await on(), requestAnimationFrame(() => {
        $.value = !0;
      }));
    })() : e2?.line ? V2() : $.value = !1;
  }
  async function z({ force: t2 = !1 } = {}) {
    var a2, n2;
    let i3 = A.value;
    if (i3) {
      i3 !== P && (P = "");
      try {
        let [{ loadSparklineCache: s2, readSparkEntry: o2, writeSparkEntry: r2 }, { shouldFetchCnQuoteCache: u2 }] = await Promise.all([t(() => import("./sparklineCache-BaC8GA01-LMV3SMHI.js"), []), t(() => import("./cnCacheFresh-K4kdGDk6-B5SOI2GY.js"), [])]), c2 = o2(await s2(), i3);
        if (((a2 = c2?.prices) == null ? void 0 : a2.length) >= 2 && (K(T(c2.prices), { animate: P !== i3 }), P = i3), !t2 && ke() || !u2(c2?.updatedAt)) return;
        let p2 = Date.now();
        if (!t2 && i3 === M && p2 - C < 3e4) return;
        M = i3, C = p2;
        let { getStockMinute: v2 } = await t(async () => {
          let { getStockMinute: e2 } = await import("./stock-0m1bz0DG-AEILLFZ3.js");
          return { getStockMinute: e2 };
        }, ["assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css"]), d2 = (function(e2) {
          let t3 = [];
          for (let n3 of e2 || []) {
            let e3 = +String(n3).split(",")[1];
            Number.isFinite(e3) && t3.push(e3);
          }
          let a3 = Math.max(1, Math.ceil(t3.length / 40));
          return t3.filter((e3, t4) => t4 % a3 === 0);
        })((n2 = (await v2({ secid: i3 })).data) == null ? void 0 : n2.trends);
        if (d2.length < 2) return;
        K(T(d2), { animate: P !== i3 }), P = i3, await r2(i3, d2, E2.keepKeys);
      } catch {
        b2.value.line || K({ line: "", area: "" }, { animate: !1 });
      }
    }
  }
  function G() {
    R && (clearInterval(R), R = null);
  }
  function N() {
    O && !ke() ? R || (R = setInterval(() => {
      ke() ? G() : document.visibilityState === "visible" && z();
    }, 6e4)) : G();
  }
  function W2() {
    document.visibilityState !== "visible" || ke() || (z(), N());
  }
  function Z(e2) {
    O && (e2 ? G() : (z({ force: !0 }), N()));
  }
  return Fr(A, () => z(), { immediate: !0 }), N(), document.addEventListener("visibilitychange", W2), t(async () => {
    let { default: e2 } = await import("./stocksCache-CNvbf2yR-BUTMMQXS.js").then((e3) => e3.a3);
    return { default: e2 };
  }, ["assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css"]).then(({ default: e2 }) => {
    O && (e2.on(Pe, Z), D = () => e2.off(Pe, Z), ke() && G());
  }), vs(() => {
    O = !1, G(), D?.(), D = null, document.removeEventListener("visibilitychange", W2);
  }), (e2, t2) => (Zr(), eo("span", { class: "spark h-2/3 w-1/3", style: V({ color: I.value }) }, [(Zr(), eo("svg", k, [io("defs", null, [io("linearGradient", { id: S.value, x1: "0", y1: "0", x2: "0", y2: "1" }, [io("stop", { offset: "0%", "stop-color": I.value, "stop-opacity": "0.35" }, null, 8, _), io("stop", { offset: "100%", "stop-color": I.value, "stop-opacity": "0" }, null, 8, g)], 8, y)]), b2.value.area ? (Zr(), eo("path", { key: 0, class: W(["spark-area", { "spark-anim": $.value }]), d: b2.value.area, fill: `url(#${S.value})`, stroke: "none" }, null, 10, j)) : po("", !0), b2.value.line ? (Zr(), eo("path", { key: 1, ref_key: "lineRef", ref: L, class: W(["spark-line", { "spark-anim": $.value }]), d: b2.value.line, fill: "none", stroke: I.value, "stroke-width": "1.5", "vector-effect": "non-scaling-stroke", style: V(F.value) }, null, 14, w)) : po("", !0)]))], 4));
} }), [["__scopeId", "data-v-6a4a4b71"]]);
export {
  b as default
};
