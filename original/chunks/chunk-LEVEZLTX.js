import {
  c,
  t as t2
} from "./chunk-5MDIDYN5.js";
import {
  u as u2
} from "./chunk-AFECQBGL.js";
import {
  Ae,
  Be,
  Ce,
  Ee,
  Fe,
  Ie,
  Le,
  O,
  Pe,
  _e,
  f as f2,
  ke,
  le,
  ve
} from "./chunk-YQ4PBQUM.js";
import {
  t
} from "./chunk-C332WR7G.js";
import {
  E,
  M,
  S,
  f,
  k,
  u
} from "./chunk-USGTF4JI.js";
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
  Os,
  Rs,
  So,
  St,
  Tt,
  Ut,
  V,
  W,
  Xi,
  Xn,
  Z,
  Zr,
  di,
  dt,
  eo,
  fo,
  fs,
  gi,
  hs,
  ht,
  io,
  jt,
  lo,
  mn,
  on,
  po,
  qi,
  re,
  sl,
  to,
  uo,
  vs,
  ws,
  yn
} from "./chunk-E6JHFIG4.js";

// output/native-current/IconPlus-y2tXh9jU.js
var d = ["xlink:href"], g = { name: "dIcon" }, v = o(Object.assign(g, { props: { icon: [String, Object], raw: String, size: { type: [String, Number] }, ratio: Number, color: String }, emits: ["click"], setup(e2, { emit: t22 }) {
  let g2 = e2, v2 = t22, h2 = (e3) => {
    v2("click", e3);
  }, f3 = $o(() => {
    let e3 = /^\d+$/.test(g2.size) ? g2.size + "px" : g2.size;
    return { color: g2.color, fontSize: e3, width: "1em", height: typeof g2.ratio == "number" ? 1 / g2.ratio + "em" : "1em" };
  }), y = Et(), w = null;
  function k2() {
    if (g2.raw && y.value) {
      w && w.remove();
      let e3 = Math.random().toString(32).substring(2), t3 = g2.raw.replace(/id=['"](.*?)['"]/g, (t4, r3) => `id="${r3}_${e3}"`).replace(/(\w)=['"]url\(#(.*?)\)['"]/g, (t4, r3, s2) => `${r3}="url(#${s2}_${e3})"`);
      w = new DOMParser().parseFromString(t3, "text/html").querySelector("svg"), w.setAttribute("width", "1em"), typeof g2.ratio == "number" ? w.setAttribute("height", 1 / g2.ratio + "em") : w.setAttribute("height", "1em"), y.value.parentElement.insertBefore(w, y.value);
    }
  }
  return Fr(() => g2.raw, k2), fs(() => {
    k2();
  }), hs(() => {
    w && w.remove();
  }), (t3, r2) => e2.raw ? (Zr(), eo("span", { key: 0, class: "raw-icon", style: V(f3.value) }, [io("span", { class: "d-icon-raw", ref_key: "rawRef", ref: y }, null, 512)], 4)) : typeof e2.icon == "object" ? (Zr(), eo("span", { key: 1, class: "d-icon", style: V(f3.value) }, [(Zr(), to(ws(e2.icon)))], 4)) : (Zr(), eo("svg", { key: 2, class: "d-icon", style: V(f3.value), onClick: h2, "aria-hidden": "true" }, [io("use", { "xlink:href": `#${e2.icon}` }, null, 8, d)], 4));
} }), [["__scopeId", "data-v-761339c4"]]);
var h = r("outline", "plus", "Plus", [["path", { d: "M12 5l0 14", key: "svg-0" }], ["path", { d: "M5 12l14 0", key: "svg-1" }]]);

// output/native-current/IconCheck-DHdlUHSR.js
var e = r("outline", "check", "Check", [["path", { d: "M5 12l5 5l10 -10", key: "svg-0" }]]);

// output/native-current/staleAssetReload.lazy-DksV6goU.js
var he = (e2, t22, l2) => {
  let a2 = e2[t22];
  return a2 ? typeof a2 == "function" ? a2() : Promise.resolve(a2) : new Promise((e3, a3) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(a3.bind(null, new Error("Unknown variable dynamic import: " + t22 + (t22.split("/").length !== l2 ? ". Note that variables only represent file names one level deep." : ""))));
  });
}, ye = (t22, l2) => {
  if (t22.theme.system) {
    let e2 = window.matchMedia("(prefers-color-scheme: dark)").matches;
    t22.theme.mode = e2 ? "dark" : "light";
  }
  if (l2) {
    be(t22);
    let l3 = f2.get("sidebarColor");
    if (!l3) return;
    l3.text == "34,34,34" ? l3.text = "#000" : l3.text == "233,233,233" && (l3.text = "#fff"), document.body.style.setProperty("--img-bg", l3.bg), document.body.style.setProperty("--img-text", l3.text);
  } else requestAnimationFrame(() => {
    be(t22);
  });
};
function be({ theme: e2, icon: t22, layout: l2, sidebar: a2, search: n2, time: s2 = {}, wallpaper: i2 }) {
  let o2 = document.documentElement.style;
  o2.setProperty("--primary-color", e2.color), o2.setProperty("--search-height", n2.height + "px"), o2.setProperty("--search-radius", n2.radius + "px"), o2.setProperty("--search-bgColor", `rgba(var(--alpha-bg), ${n2.bgColor})`);
  let r2 = t22.iconRadius, c2 = t22.iconSize, u22 = t22.iconX, d2 = t22.iconY;
  if (t22.unit == "px" && !u) {
    let e3 = document.querySelector("body");
    if (e3.clientWidth < t22.width) {
      let l3 = e3.clientWidth / t22.width;
      l3 > 1 ? l3 = 1 : l3 < 0.8 && (l3 = 0.8), r2 = t22.iconRadius * l3, c2 = t22.iconSize * l3, u22 = t22.iconX * l3, d2 = t22.iconY * l3;
    }
  }
  if (document.body.clientWidth < 568 && c2 > 60 && (c2 = 60, u22 = 30, d2 = 30), u) {
    let e3 = t22.unit === "px" ? t22.width : Math.floor(document.body.clientWidth * t22.width / 100) - 10, l3 = Math.floor((e3 - 3 * d2) / 4);
    c2 > l3 && (c2 = l3);
  }
  o2.setProperty("--icon-radius", r2 + "px"), o2.setProperty("--icon-size", c2 + "px"), o2.setProperty("--icon-gap-x", u22 + "px"), o2.setProperty("--icon-gap-y", d2 + "px"), o2.setProperty("--icon-max-width", `${t22.width || 1350}${t22.unit || "px"}`), o2.setProperty("--icon-opacity", t22.opactiy), o2.setProperty("--icon-name", t22.name ? "block" : "none"), o2.setProperty("--icon-nameSize", t22.nameSize + "px"), o2.setProperty("--icon-nameColor", t22.nameColor), o2.setProperty("--time-size", s2.size + "px"), o2.setProperty("--time-font", s2.font || "auto"), o2.setProperty("--time-color", s2.color), o2.setProperty("--time-fontWeight", s2.fontWeight), o2.setProperty("--time-month", s2.month), o2.setProperty("--time-week", s2.week), o2.setProperty("--time-lunar", s2.lunar), o2.setProperty("--time-sec", s2.sec ? "inline" : "none"), o2.setProperty("--sidebar-width", a2.width + "px"), o2.setProperty("--sidebar-opacity", a2.opacity || 0.5), o2.setProperty("--wall-mask", i2.mask), o2.setProperty("--wall-blur", i2.blur + "px"), i2.type == 3 ? o2.setProperty("--wall-background", i2.src) : o2.setProperty("--wall-background", ""), document.querySelector("html").setAttribute("class", e2.mode);
}
var _e2 = /* @__PURE__ */ new WeakMap(), xe;
function we(e2, t22) {
  _e2.set(e2, t22), (xe || (xe = new ResizeObserver((e3) => {
    var t3;
    for (let l2 of e3) (t3 = _e2.get(l2.target)) == null || t3(l2);
  })), xe).observe(e2);
}
var ke2 = /* @__PURE__ */ o({ __name: "d-watch-resize", props: { confineSize: { type: Boolean, default: !0 }, size: { type: String, default: "2x2" } }, emits: ["resize"], setup(e2, { emit: t22 }) {
  let l2 = t22, a2 = e2, n2 = Tt(null), s2 = null, i2 = -1, o2 = -1;
  function r2(e3) {
    let t3 = s2;
    if (!t3) return;
    let n3 = e3.contentRect, r3 = n3.width, c2 = n3.height;
    if (r3 === i2 && c2 === o2) return;
    i2 = r3, o2 = c2;
    let u22 = ~~((r3 > c2 ? c2 : r3) / 7);
    a2.confineSize && (u22 = u22 < 19 ? 19 : u22), t3.style.fontSize = u22 + "px", l2("resize", { width: r3, height: c2 });
  }
  return fs(() => {
    let e3 = n2.value;
    e3 && (s2 = e3, e3.style.fontSize = "21px", we(e3, r2));
  }), hs(() => {
    let e3 = s2;
    s2 = null, (function(e4) {
      e4 && xe && (xe.unobserve(e4), _e2.delete(e4));
    })(e3);
  }), (e3, t3) => (Zr(), eo("div", { ref_key: "watchResize", ref: n2, class: "d-watch-resize size-full" }, [Os(e3.$slots, "default", {}, void 0, !0)], 512));
} }, [["__scopeId", "data-v-c46ecd70"]]), ze = { install(e2) {
  e2.component("d-watch-resize", ke2), e2.component("d-text-icon", M), t(() => import("./d-button-BjYS68ZA-7DXTH3P2.js"), ["assets/tailwind-rIhkj3gK.css", "assets/d-button-CwmpYApa.css"]).then((t22) => {
    e2.component("d-button", t22.default);
  }), (function(e3, t22 = 3e3) {
    typeof requestIdleCallback == "function" ? requestIdleCallback(e3, { timeout: t22 }) : setTimeout(e3, 200);
  })(() => {
    t(() => import("./vendor-element-plus-CRt18gND-MNDHTQD2.js").then((e3) => e3.aq), ["assets/vendor-element-plus-WnleHQiG.css"]), t(() => import("./vendor-element-plus-CRt18gND-MNDHTQD2.js").then((e3) => e3.ap), ["assets/vendor-element-plus-WnleHQiG.css"]), t(() => import("./vendor-element-plus-CRt18gND-MNDHTQD2.js").then((e3) => e3.ao), ["assets/vendor-element-plus-WnleHQiG.css"]), t(() => import("./vendor-element-plus-CRt18gND-MNDHTQD2.js").then((e3) => e3.ar), ["assets/vendor-element-plus-WnleHQiG.css"]), t(() => import("./vendor-element-plus-CRt18gND-MNDHTQD2.js").then((e3) => e3.ak), ["assets/vendor-element-plus-WnleHQiG.css"]).then((t22) => {
      e2.use(t22.default);
    });
  });
} }, Ce2 = [/^https:\/\/[a-z]+\.itab\.link/g, /^https:\/\/[a-z]+\.codelife\.cc/g, /^http:\/\/localhost/g], Me = {}, je = {}, Se = "itab";
function Oe(e2, t22, l2) {
  let a2 = Math.random().toString(36).slice(2);
  return new Promise((n2, s2) => {
    Me[a2] = { resolve: n2, reject: s2 }, e2.postMessage({ type: t22, data: l2, msgId: a2, namespace: Se }, "*");
  });
}
function Le2(e2, t22) {
  je[e2] || (je[e2] = []), je[e2].push(t22);
}
function De(e2, t22) {
  je[e2] && (t22 ? je[e2] = je[e2].filter((e3) => e3 != t22) : delete je[e2]);
}
function Pe2(e2, t22) {
  Le2(e2, t22), hs(() => {
    De(e2, t22);
  });
}
window.addEventListener("message", (e2) => {
  if (!e2.data) return;
  let { type: t22, data: l2, msgId: a2, namespace: n2 } = e2.data;
  Se == n2 && (Ce2.length === 0 || Ce2.some((t3) => t3 instanceof RegExp ? (t3.lastIndex = -1, t3.test(e2.origin)) : t3 === e2.origin || e2.origin.startsWith(t3)) || !e2.origin.startsWith("http")) && (t22 ? (je[t22] || []).forEach((t3) => {
    let n3 = t3(l2, e2), s2 = (t4) => {
      var l3;
      return (l3 = e2.source) == null ? void 0 : l3.postMessage({ msgId: a2, data: t4, namespace: Se }, e2.origin);
    };
    n3 instanceof Promise ? n3.then(s2) : s2(n3);
  }) : Me[a2] && Me[a2].resolve(l2));
});
var Te = { class: "size-full bg-[#f59563] object-contain", src: "https://files.itab.link/icons/2048.svg", alt: "" }, Ae2 = o({}, [["render", function(e2, t22) {
  return Zr(), eo("img", Te);
}]]), Ie2 = /* @__PURE__ */ Object.freeze(Object.defineProperty({ __proto__: null, default: Ae2 }, Symbol.toStringTag, { value: "Module" })), Ee2 = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="200"\r
    height="200" viewBox="0 0 200 200" fill="none">\r
    <g opacity="1" transform="translate(0 0) rotate(0)">\r
        <g>\r
            <path id="路径 2" fill-rule="evenodd" style="fill:currentColor" opacity="1"\r
                d="M156.86,87.93v0v0.01c0,-0.01 0,-0.01 0,-0.01zM156.86,87.94c0,-0.01 0,-0.01 0,-0.01c9.76,10.8 11.42,26.68 4.12,39.28c-4.72,8.3 -12.78,14.16 -22.11,16.07c-4.46,13.84 -17.32,23.22 -31.84,23.22h-0.29c-9.46,0 -18.46,-4.06 -24.74,-11.14c-14.22,3.05 -28.79,-3.45 -36.03,-16.08c-4.81,-8.24 -5.85,-18.15 -2.84,-27.21c-9.75,-10.81 -11.41,-26.69 -4.11,-39.3c4.71,-8.29 12.77,-14.15 22.11,-16.07c4.47,-13.83 17.32,-23.2 31.83,-23.2h0.29c9.46,0 18.46,4.06 24.74,11.14c14.22,-3.05 28.78,3.45 36.03,16.08c4.81,8.24 5.84,18.15 2.84,27.21v0zM131.81,132.88v-30.92c-0.02,-0.13 -0.1,-0.25 -0.22,-0.31l-11.18,-6.46v37.36c0,1.55 -0.83,2.98 -2.17,3.75l-26.43,15.29c-0.26,0.15 -0.52,0.31 -0.78,0.45c4.46,3.72 10.08,5.76 15.88,5.77h0.04c13.73,-0.04 24.84,-11.18 24.86,-24.93zM53.49,134.93c2.19,3.79 5.33,6.93 9.12,9.12c7.7,4.44 17.17,4.44 24.87,0l26.72,-15.45c0.1,-0.08 0.16,-0.2 0.16,-0.32v-12.95l-32.27,18.67c-1.34,0.78 -3.01,0.78 -4.35,0l-26.43,-15.3l-0.78,-0.46c-1,5.74 0.05,11.65 2.96,16.7zM46.54,77.12c-6.84,11.92 -2.77,27.14 9.1,34.03l26.73,15.47c0.12,0.05 0.26,0.04 0.38,-0.03l11.17,-6.46l-32.27,-18.67c-1.34,-0.77 -2.17,-2.19 -2.17,-3.74v-30.61l0.01,-0.92c-5.46,2.01 -10.05,5.88 -12.95,10.93zM138.34,98.52c1.33,0.77 2.15,2.19 2.15,3.73v0.04v31.51c9.06,-3.35 15.36,-11.64 16.18,-21.27c0.83,-9.63 -3.98,-18.87 -12.33,-23.71l-26.72,-15.46c-0.13,-0.05 -0.27,-0.04 -0.38,0.04l-11.17,6.46l32.27,18.66zM139.16,57.1c-7.91,-5.53 -18.29,-5.98 -26.65,-1.16l-26.72,15.45c-0.11,0.07 -0.16,0.2 -0.16,0.32v12.95l32.27,-18.67c1.34,-0.78 3,-0.78 4.34,0l26.44,15.29c0.26,0.16 0.52,0.31 0.78,0.47c1.63,-9.52 -2.39,-19.13 -10.3,-24.65zM79.58,67.47v-0.02c0,-1.55 0.82,-2.97 2.16,-3.74l26.44,-15.3c0.23,-0.14 0.58,-0.34 0.78,-0.45c-7.41,-6.18 -17.73,-7.51 -26.47,-3.41c-8.73,4.1 -14.32,12.89 -14.33,22.56v30.91c0.02,0.14 0.1,0.25 0.22,0.31l11.17,6.46zM85.62,91.68v16.63l14.37,8.31l14.38,-8.31v-16.63l-14.38,-8.32l-14.36,8.32z"></path>\r
        </g>\r
    </g>\r
</svg>`, $e = { key: 0, class: "d-flex-center h-full" }, Ye = { key: 1, class: "d-flex-center h-full" }, Ve = { class: "flex h-full items-center" }, He = { key: 2, class: "d-flex-between h-full w-full pt20 pb20", style: { "flex-direction": "column", "font-weight": "400" } }, Re = { class: "flex flex-col h-full items-center justify-between" }, Fe2 = { key: 3, class: "h-full w-full d-flex-center" }, Ne = { class: "flex flex-col h-full items-center justify-center" }, qe = { name: "aibot-icon" }, Ze = Object.assign(qe, { props: { size: String }, setup(e2) {
  let t22 = e2;
  return (l2, a2) => {
    let n2 = v, s2 = ke2;
    return Zr(), to(s2, { confineSize: !1 }, { default: mn(() => [io("div", { class: W(["h-full w-full bg-[#2fbc86] text-white text-center", `iconsize-${e2.size}`]) }, [["1x1"].includes(t22.size) ? (Zr(), eo("div", $e, [lo(n2, { raw: Lt(Ee2), size: 52 }, null, 8, ["raw"])])) : po("", !0), ["1x2"].includes(t22.size) ? (Zr(), eo("div", Ye, [io("div", Ve, [lo(n2, { raw: Lt(Ee2), size: 52 }, null, 8, ["raw"]), a2[0] || (a2[0] = io("div", { class: "flex flex-col items-start" }, [io("div", { class: "flex-auto f16 b" }, "NewTab AI"), io("div", { class: "flex-auto f13" }, "实用AI助手")], -1))])])) : ["2x1"].includes(t22.size) ? (Zr(), eo("div", He, [io("div", Re, [lo(n2, { raw: Lt(Ee2), size: 52 }, null, 8, ["raw"]), a2[1] || (a2[1] = io("div", { class: "flex flex-col items-start" }, [io("div", { class: "f13" }, [uo("实用"), io("br"), uo("AI"), io("br"), uo("助手")])], -1))])])) : ["2x2", "2x4", "small", "medium"].includes(t22.size) ? (Zr(), eo("div", Fe2, [io("div", Ne, [lo(n2, { raw: Lt(Ee2), size: 52 }, null, 8, ["raw"]), a2[2] || (a2[2] = io("div", { class: "flex flex-col" }, [io("div", { class: "flex-auto f16 b" }, "NewTab AI"), io("div", { class: "flex-auto f13" }, "实用AI助手")], -1))])])) : po("", !0)], 2)]), _: 1 });
  };
} }), Be2 = /* @__PURE__ */ Object.freeze(Object.defineProperty({ __proto__: null, default: Ze }, Symbol.toStringTag, { value: "Module" })), Ue = /* @__PURE__ */ Object.freeze(Object.defineProperty({ __proto__: null, default: `<svg width="282" height="128" viewBox="0 0 282 128" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M334 174C334 223.154 294.153 263 245 263C195.847 263 156 223.154 156 174C156 124.847 195.847 85.0005 245 85.0005C294.153 85.0005 334 124.847 334 174Z" fill="url(#paint0_linear_530_324)"/>\r
<path d="M60 68.5002C60 144.992 -2.00856 207 -78.5 207C-154.991 207 -217 144.992 -217 68.5002C-217 -7.9912 -154.991 -69.9998 -78.5 -69.9998C-2.00856 -69.9998 60 -7.9912 60 68.5002Z" fill="url(#paint1_linear_530_324)"/>\r
<path d="M444 -1.09672e-06C444 72.9016 384.902 132 312 132C239.098 132 180 72.9016 180 0C180 -72.9016 239.098 -132 312 -132C384.902 -132 444 -72.9016 444 -1.09672e-06Z" fill="url(#paint2_linear_530_324)"/>\r
<defs>\r
<linearGradient id="paint0_linear_530_324" x1="245" y1="85.0005" x2="245" y2="263" gradientUnits="userSpaceOnUse">\r
<stop stop-color="#F68473" stop-opacity="0.2"/>\r
<stop offset="1" stop-color="#F9B77E"/>\r
</linearGradient>\r
<linearGradient id="paint1_linear_530_324" x1="46.5" y1="5.50025" x2="-3.5" y2="-33.9998" gradientUnits="userSpaceOnUse">\r
<stop stop-color="#F68473" stop-opacity="0.2"/>\r
<stop offset="0.799172" stop-color="#F9B77E"/>\r
</linearGradient>\r
<linearGradient id="paint2_linear_530_324" x1="313.333" y1="8.50001" x2="313.333" y2="103.5" gradientUnits="userSpaceOnUse">\r
<stop stop-color="#F68473" stop-opacity="0.2"/>\r
<stop offset="1" stop-color="#F9B77E"/>\r
</linearGradient>\r
</defs>\r
</svg>\r
` }, Symbol.toStringTag, { value: "Module" })), Ge = /* @__PURE__ */ Object.freeze(Object.defineProperty({ __proto__: null, default: `<svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M5.11532 9.22062C5.12072 8.66459 5.2356 8.11506 5.45342 7.60344C5.67123 7.09181 5.98771 6.62811 6.38477 6.23882C6.78183 5.84953 7.25169 5.54228 7.76752 5.33461C8.28335 5.12695 8.83504 5.02295 9.39107 5.02854L29.0446 5.21922C29.6005 5.22462 30.1499 5.33945 30.6614 5.55717C31.1729 5.77489 31.6366 6.09123 32.0258 6.48813C32.4151 6.88503 32.7224 7.35472 32.9302 7.87038C33.1379 8.38603 33.2421 8.93756 33.2367 9.49347L33.1764 15.701L30.9192 15.6791L30.9794 9.47156C30.99 8.38054 30.1137 7.4871 29.0227 7.47651L9.36917 7.28583C8.27815 7.27524 7.3847 8.15151 7.37412 9.24254L7.18342 28.8975C7.17283 29.9885 8.04911 30.882 9.14013 30.8926L12.2401 30.9226L12.2182 33.1799L9.11823 33.1498C8.56232 33.1445 8.01292 33.0296 7.50139 32.8119C6.98986 32.5942 6.52622 32.2778 6.13695 31.8809C5.74768 31.484 5.44039 31.0143 5.23264 30.4987C5.02488 29.983 4.92073 29.4315 4.92613 28.8756L5.11681 9.22214L5.11532 9.22062Z" fill="white"/>\r
<path d="M13.362 12.4039C13.3649 12.1046 13.4866 11.8187 13.7003 11.6091C13.914 11.3995 14.2022 11.2833 14.5016 11.2863L20.7106 11.3465C21.8331 11.3574 22.9053 11.8137 23.6914 12.6152C24.4774 13.4166 24.9129 14.4975 24.902 15.62C24.8911 16.7425 24.4347 17.8147 23.6333 18.6007C22.8319 19.3868 21.751 19.8222 20.6285 19.8113L14.4179 19.7511C14.1186 19.7482 13.8327 19.6265 13.6231 19.4128C13.4134 19.199 13.2973 18.9108 13.3002 18.6115C13.3031 18.3121 13.4248 18.0262 13.6385 17.8166C13.8523 17.607 14.1405 17.4909 14.4398 17.4938L20.6474 17.554C21.1619 17.545 21.6526 17.3356 22.0152 16.9704C22.3777 16.6051 22.5835 16.1129 22.5886 15.5983C22.5938 15.0837 22.3981 14.5874 22.043 14.2149C21.6879 13.8424 21.2015 13.6232 20.6872 13.6038L14.4797 13.5435C14.1803 13.5406 13.8944 13.4189 13.6848 13.2052C13.4752 12.9915 13.359 12.7033 13.362 12.4039Z" fill="white"/>\r
<path d="M14.5016 11.2863C14.8009 11.2892 15.0868 11.4109 15.2964 11.6246C15.506 11.8383 15.6222 12.1265 15.6192 12.4258L15.5189 22.7718C15.516 23.0711 15.3943 23.357 15.1806 23.5666C14.9668 23.7762 14.6786 23.8924 14.3793 23.8895C14.0799 23.8865 13.794 23.7649 13.5844 23.5511C13.3748 23.3374 13.2587 23.0492 13.2616 22.7499L13.362 12.4039C13.3649 12.1046 13.4866 11.8187 13.7003 11.6091C13.914 11.3995 14.2022 11.2833 14.5016 11.2863Z" fill="white"/>\r
<path d="M28.4136 17.2065L30.6179 22.2169L35.5847 24.5196L30.5742 26.724L28.273 31.6907L26.0671 26.6802L21.1004 24.3791L26.1109 22.1732L28.4121 17.2064L28.4136 17.2065ZM19.0011 27.462L20.3786 30.21L23.0993 31.6405L20.3514 33.018L18.9208 35.7387L17.5433 32.9908L14.8226 31.5602L17.5705 30.1827L19.0011 27.462Z" fill="white"/>\r
</svg>\r
` }, Symbol.toStringTag, { value: "Module" })), We = /* @__PURE__ */ Object.freeze(Object.defineProperty({ __proto__: null, default: `<svg width="72" height="67" viewBox="0 0 72 67" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<g clip-path="url(#clip0_199_2310)">\r
<rect x="0.634186" width="65.3689" height="65.3689" rx="16" transform="rotate(0.555893 0.634186 0)" fill="white" fill-opacity="0.01"/>\r
<foreignObject x="-16.9626" y="-11.5303" width="96.6309" height="94.4626"><div xmlns="http://www.w3.org/1999/xhtml" style="backdrop-filter:blur(4px);clip-path:url(#bgblur_1_199_2310_clip_path);height:100%;width:100%"></div></foreignObject><rect data-figma-bg-blur-radius="8" x="-7.29437" y="-2.5979" width="78.0339" height="75.8444" rx="7" transform="rotate(0.555893 -7.29437 -2.5979)" fill="url(#paint0_linear_199_2310)" fill-opacity="0.5"/>\r
<path d="M15.6101 20.8998C15.617 20.1834 15.765 19.4754 16.0457 18.8162C16.3263 18.1569 16.7341 17.5595 17.2457 17.0579C17.7573 16.5563 18.3627 16.1604 19.0273 15.8929C19.692 15.6253 20.4028 15.4913 21.1192 15.4985L46.442 15.7442C47.1582 15.7511 47.8661 15.8991 48.5252 16.1796C49.1843 16.4601 49.7817 16.8677 50.2832 17.3791C50.7848 17.8905 51.1807 18.4957 51.4484 19.1601C51.7161 19.8245 51.8503 20.5351 51.8433 21.2514L51.7657 29.2496L48.8573 29.2214L48.9349 21.2232C48.9485 19.8174 47.8195 18.6663 46.4138 18.6526L21.091 18.4069C19.6852 18.3933 18.5341 19.5223 18.5204 20.9281L18.2747 46.2528C18.2611 47.6585 19.3901 48.8097 20.7959 48.8233L24.7901 48.8621L24.7619 51.7705L20.7677 51.7317C20.0514 51.7248 19.3435 51.5768 18.6844 51.2963C18.0253 51.0158 17.428 50.6082 16.9264 50.0968C16.4248 49.5854 16.0289 48.9802 15.7612 48.3158C15.4935 47.6514 15.3593 46.9408 15.3663 46.2245L15.612 20.9018L15.6101 20.8998Z" fill="white"/>\r
<path d="M26.2355 25.0014C26.2393 24.6157 26.3961 24.2473 26.6714 23.9773C26.9468 23.7072 27.3182 23.5576 27.7039 23.5613L35.704 23.6389C37.1503 23.653 38.5318 24.241 39.5446 25.2736C40.5574 26.3062 41.1184 27.6989 41.1044 29.1452C41.0904 30.5915 40.5024 31.973 39.4698 32.9857C38.4371 33.9985 37.0445 34.5596 35.5982 34.5456L27.5961 34.4679C27.2104 34.4642 26.842 34.3074 26.572 34.032C26.3019 33.7567 26.1523 33.3853 26.156 32.9996C26.1597 32.6139 26.3165 32.2455 26.5919 31.9754C26.8673 31.7054 27.2386 31.5558 27.6243 31.5595L35.6225 31.6371C36.2855 31.6255 36.9178 31.3557 37.3849 30.8851C37.852 30.4145 38.1171 29.7802 38.1238 29.1172C38.1305 28.4542 37.8782 27.8147 37.4207 27.3347C36.9632 26.8548 36.3364 26.5723 35.6738 26.5474L27.6756 26.4698C27.29 26.466 26.9216 26.3092 26.6515 26.0338C26.3814 25.7585 26.2318 25.3871 26.2355 25.0014Z" fill="white"/>\r
<path d="M27.7039 23.5613C28.0895 23.5651 28.4579 23.7219 28.728 23.9972C28.9981 24.2726 29.1477 24.644 29.144 25.0296L29.0146 38.36C29.0109 38.7456 28.8541 39.114 28.5787 39.3841C28.3034 39.6542 27.932 39.8038 27.5463 39.8001C27.1606 39.7963 26.7922 39.6395 26.5222 39.3642C26.2521 39.0888 26.1025 38.7174 26.1062 38.3317L26.2355 25.0014C26.2393 24.6157 26.3961 24.2473 26.6714 23.9773C26.9468 23.7072 27.3182 23.5576 27.7039 23.5613Z" fill="white"/>\r
<path d="M45.6289 31.1893L48.4692 37.6451L54.8687 40.612L48.4129 43.4523L45.4479 49.8517L42.6057 43.3959L36.2062 40.4309L42.662 37.5887L45.627 31.1893L45.6289 31.1893ZM33.5013 44.4032L35.2762 47.9438L38.7817 49.787L35.2411 51.5619L33.3979 55.0674L31.623 51.5268L28.1175 49.6836L31.6581 47.9087L33.5013 44.4032Z" fill="white"/>\r
</g>\r
<rect x="0.980774" y="0.353379" width="64.6689" height="64.6689" rx="15.65" transform="rotate(0.555893 0.980774 0.353379)" stroke="url(#paint1_linear_199_2310)" stroke-width="0.7"/>\r
<rect x="0.980774" y="0.353379" width="64.6689" height="64.6689" rx="15.65" transform="rotate(0.555893 0.980774 0.353379)" stroke="url(#paint2_linear_199_2310)" stroke-width="0.7"/>\r
<g clip-path="url(#clip2_199_2310)">\r
<foreignObject x="46.4" y="39.4" width="31.2" height="35.2"><div xmlns="http://www.w3.org/1999/xhtml" style="backdrop-filter:blur(1.4px);clip-path:url(#bgblur_3_199_2310_clip_path);height:100%;width:100%"></div></foreignObject><path data-figma-bg-blur-radius="2.8" d="M50 50C50 46.134 53.134 43 57 43H67C70.866 43 74 46.134 74 50L74 64C74 67.866 70.866 71 67 71H57C53.134 71 50 67.866 50 64L50 50Z" fill="#FF4400" fill-opacity="0.6"/>\r
<path d="M63.1377 61C62.9732 61.0001 62.8188 61.0812 62.7256 61.2168L61.9121 62.4004L61.8721 62.4512C61.6608 62.6883 61.2742 62.6714 61.0879 62.4004L60.2744 61.2168C60.2044 61.115 60.0997 61.0438 59.9824 61.0146L59.8623 61V60C60.2944 60.0001 60.7017 60.1867 60.9844 60.5059L61.0977 60.6504L61.5 61.2344L61.9023 60.6504L62.0156 60.5059C62.2983 60.1867 62.7056 60.0001 63.1377 60V61ZM64.25 60V61H63.1377V60H64.25ZM59.8623 60V61H58.75V60H59.8623ZM67 60.5L66.9902 60.6006C66.9503 60.7961 66.7961 60.9503 66.6006 60.9902L66.5 61H64.25V60H66V53H57V60H58.75V61H56.5C56.2583 61 56.0563 60.8286 56.0098 60.6006L56 60.5V52.5C56 52.2239 56.2239 52 56.5 52H66.5L66.6006 52.0098C66.8286 52.0563 67 52.2583 67 52.5V60.5Z" fill="white"/>\r
<path d="M58 54.5C58 54.2239 58.2239 54 58.5 54H61.5C61.7761 54 62 54.2239 62 54.5C62 54.7761 61.7761 55 61.5 55H58.5C58.2239 55 58 54.7761 58 54.5Z" fill="white"/>\r
<path d="M58 56.5C58 56.2239 58.2239 56 58.5 56H64.5C64.7761 56 65 56.2239 65 56.5C65 56.7761 64.7761 57 64.5 57H58.5C58.2239 57 58 56.7761 58 56.5Z" fill="white"/>\r
<path d="M58 58.5C58 58.2239 58.2239 58 58.5 58H63.5C63.7761 58 64 58.2239 64 58.5C64 58.7761 63.7761 59 63.5 59H58.5C58.2239 59 58 58.7761 58 58.5Z" fill="white"/>\r
</g>\r
<rect x="51.2" y="46.2" width="20.6" height="20.6" rx="10.3" stroke="url(#paint3_linear_199_2310)" stroke-width="0.4"/>\r
<rect x="51.2" y="46.2" width="20.6" height="20.6" rx="10.3" stroke="url(#paint4_linear_199_2310)" stroke-width="0.4"/>\r
<defs>\r
<clipPath id="bgblur_1_199_2310_clip_path" transform="translate(16.9626 11.5303)"><rect x="-7.29437" y="-2.5979" width="78.0339" height="75.8444" rx="7" transform="rotate(0.555893 -7.29437 -2.5979)"/>\r
</clipPath><clipPath id="bgblur_3_199_2310_clip_path" transform="translate(-46.4 -39.4)"><path d="M50 50C50 46.134 53.134 43 57 43H67C70.866 43 74 46.134 74 50L74 64C74 67.866 70.866 71 67 71H57C53.134 71 50 67.866 50 64L50 50Z"/>\r
</clipPath><linearGradient id="paint0_linear_199_2310" x1="29.4116" y1="39.6459" x2="49.6338" y2="62.4507" gradientUnits="userSpaceOnUse">\r
<stop stop-color="#FFAE82"/>\r
<stop offset="1" stop-color="white"/>\r
</linearGradient>\r
<linearGradient id="paint1_linear_199_2310" x1="5.40067" y1="5.44741" x2="15.6146" y2="20.4278" gradientUnits="userSpaceOnUse">\r
<stop stop-color="white" stop-opacity="0.83"/>\r
<stop offset="1" stop-color="white" stop-opacity="0.03"/>\r
</linearGradient>\r
<linearGradient id="paint2_linear_199_2310" x1="61.2366" y1="59.9215" x2="50.3418" y2="48.3457" gradientUnits="userSpaceOnUse">\r
<stop stop-color="white" stop-opacity="0.83"/>\r
<stop offset="1" stop-color="white" stop-opacity="0.03"/>\r
</linearGradient>\r
<linearGradient id="paint3_linear_199_2310" x1="55" y1="48.5" x2="57" y2="51.5" gradientUnits="userSpaceOnUse">\r
<stop offset="0.0848445" stop-color="white" stop-opacity="0.83"/>\r
<stop offset="1" stop-color="white" stop-opacity="0.03"/>\r
</linearGradient>\r
<linearGradient id="paint4_linear_199_2310" x1="69" y1="63.5" x2="66.9687" y2="61.5312" gradientUnits="userSpaceOnUse">\r
<stop stop-color="white" stop-opacity="0.83"/>\r
<stop offset="1" stop-color="white" stop-opacity="0.03"/>\r
</linearGradient>\r
<clipPath id="clip0_199_2310">\r
<rect x="0.634186" width="65.3689" height="65.3689" rx="16" transform="rotate(0.555893 0.634186 0)" fill="white"/>\r
</clipPath>\r
<clipPath id="clip2_199_2310">\r
<rect x="51" y="46" width="21" height="21" rx="10.5" fill="white"/>\r
</clipPath>\r
</defs>\r
</svg>\r
` }, Symbol.toStringTag, { value: "Module" })), Je = /* @__PURE__ */ Object.freeze(Object.defineProperty({ __proto__: null, default: `<svg width="119" height="30" viewBox="0 0 119 30" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path fill-rule="evenodd" clip-rule="evenodd" d="M34.5896 7.05882C36.5388 7.05882 38.2692 5.47865 38.4545 3.52941C38.6398 1.58017 37.2098 0 35.2606 0C33.3113 0 31.5809 1.58017 31.3957 3.52941C31.2104 5.47865 32.6403 7.05882 34.5896 7.05882ZM14.1146 8.96118L6.60898 24.1181C6.50016 24.3379 6.58331 24.5873 6.7947 24.6752C6.84341 24.6955 6.89646 24.7059 6.951 24.7059H12.648C13.481 24.7059 14.1926 25.1886 14.4727 25.9437L14.9949 27.3517C15.3403 28.2832 14.8319 29.3901 13.8592 29.8241C13.6023 29.9387 13.3285 29.9981 13.0572 29.9981L3.21006 30C1.26082 30 -0.16914 28.4198 0.0161553 26.4706C0.0588381 26.0216 0.186806 25.5767 0.393194 25.1598L11.414 2.89832C12.3099 1.0885 14.4476 0.208207 16.1886 0.932137C17.0514 1.29087 17.6944 2.00149 17.9679 2.89832L24.7563 25.1598C25.3082 26.9696 24.2327 29.0236 22.354 29.7476C22.0655 29.8587 21.768 29.9339 21.4687 29.9716C21.034 29.9887 20.6607 29.7332 20.5343 29.3322L14.1146 8.96118ZM34.4218 8.82353C35.8837 8.82353 36.9562 10.0087 36.8172 11.4706L35.3075 27.3529C35.1685 28.8149 33.8707 30 32.4088 30C30.9468 30 29.8744 28.8149 30.0133 27.3529L31.5231 11.4706C31.6621 10.0087 32.9599 8.82353 34.4218 8.82353ZM56.3695 18.1745H51.2467L50.5037 25.9905C50.3975 27.108 50.0533 27.9555 49.471 28.5331C48.8888 29.1106 48.1959 29.3994 47.3923 29.3994C46.551 29.3994 45.9002 29.1138 45.4397 28.5425C44.9792 27.9712 44.8015 27.1331 44.9065 26.0282L46.9296 4.74609C47.0466 3.51562 47.4126 2.63672 48.0278 2.10938C48.6429 1.58203 49.5657 1.31836 50.7962 1.31836H57.9718C60.0938 1.31836 61.7105 1.48159 62.822 1.80804C63.9222 2.12193 64.8489 2.643 65.6021 3.37123C66.3553 4.09947 66.8952 4.99093 67.2218 6.04562C67.5484 7.10031 67.6491 8.28683 67.5238 9.60519C67.2564 12.4177 66.1875 14.549 64.3169 15.9992C62.4464 17.4494 59.7972 18.1745 56.3695 18.1745ZM56.2166 5.51828H52.4498L51.6477 13.9558H55.4145C56.7328 13.9558 57.8478 13.8177 58.7592 13.5414C59.6706 13.2652 60.3885 12.8132 60.9127 12.1854C61.437 11.5576 61.7474 10.7352 61.8441 9.71819C61.9599 8.50028 61.6963 7.50837 61.0535 6.74247C60.3275 5.92634 58.7152 5.51828 56.2166 5.51828ZM81.6677 18.1745H76.545L75.802 25.9905C75.6958 27.108 75.3515 27.9555 74.7693 28.5331C74.187 29.1106 73.4941 29.3994 72.6906 29.3994C71.8493 29.3994 71.1985 29.1138 70.738 28.5425C70.2775 27.9712 70.0998 27.1331 70.2048 26.0282L72.2279 4.74609C72.3448 3.51562 72.7109 2.63672 73.326 2.10938C73.9412 1.58203 74.864 1.31836 76.0945 1.31836H83.2701C85.392 1.31836 87.0088 1.48159 88.1203 1.80804C89.2205 2.12193 90.1472 2.643 90.9004 3.37123C91.6535 4.09947 92.1934 4.99093 92.5201 6.04562C92.8467 7.10031 92.9474 8.28683 92.8221 9.60519C92.5547 12.4177 91.4857 14.549 89.6152 15.9992C87.7446 17.4494 85.0955 18.1745 81.6677 18.1745ZM81.5148 5.51828H77.7481L76.946 13.9558H80.7128C82.0311 13.9558 83.146 13.8177 84.0575 13.5414C84.9689 13.2652 85.6867 12.8132 86.211 12.1854C86.7352 11.5576 87.0457 10.7352 87.1424 9.71819C87.2581 8.50028 86.9946 7.50837 86.3517 6.74247C85.6257 5.92634 84.0134 5.51828 81.5148 5.51828ZM115.343 5.93262H109.241L107.334 25.9905C107.224 27.1456 106.886 28.0026 106.318 28.5613C105.75 29.1201 105.058 29.3994 104.242 29.3994C103.413 29.3994 102.765 29.1169 102.298 28.5519C101.83 27.9869 101.651 27.1331 101.759 25.9905L103.666 5.93262H97.564C96.6098 5.93262 95.9204 5.72231 95.4958 5.30169C95.0712 4.88107 94.8917 4.32548 94.9574 3.63491C95.0254 2.91923 95.3208 2.35421 95.8436 1.93987C96.3664 1.52553 97.0861 1.31836 98.0027 1.31836H115.782C116.748 1.31836 117.447 1.53181 117.877 1.95871C118.308 2.3856 118.49 2.94434 118.424 3.63491C118.359 4.32548 118.067 4.88107 117.55 5.30169C117.033 5.72231 116.297 5.93262 115.343 5.93262Z" fill="url(#paint0_linear_544_309)"/>\r
<defs>\r
<linearGradient id="paint0_linear_544_309" x1="5921.86" y1="2182.29" x2="5921.86" y2="3000" gradientUnits="userSpaceOnUse">\r
<stop stop-color="white"/>\r
<stop offset="1" stop-color="#E2E2E2"/>\r
</linearGradient>\r
</defs>\r
</svg>\r
` }, Symbol.toStringTag, { value: "Module" })), Qe = { key: 0, class: "flex h-full items-center justify-evenly" }, Xe = { class: "flex flex-col gap-1 items-start" }, Ke = { key: 1, class: "flex h-full items-center justify-evenly" }, et = { class: "flex flex-col items-center gap-2" }, tt = { key: 2, class: "flex h-full items-center justify-evenly" }, lt = { class: "flex flex-col items-center gap-4" }, at = { key: 3, class: "d-flex-center h-full flex-col gap-4" }, nt = /* @__PURE__ */ o({ __name: "icon", props: { size: String }, setup(e2) {
  gi((e3) => ({ "4918931e": l2.value }));
  let t22 = E(Object.assign({ "../assets/bg.svg": Ue, "../assets/logo-clean.svg": Ge, "../assets/logo.svg": We, "../assets/text.svg": Je }), "../assets"), l2 = Et(`url("data:image/svg+xml,%3csvg%20width='282'%20height='128'%20viewBox='0%200%20282%20128'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M334%20174C334%20223.154%20294.153%20263%20245%20263C195.847%20263%20156%20223.154%20156%20174C156%20124.847%20195.847%2085.0005%20245%2085.0005C294.153%2085.0005%20334%20124.847%20334%20174Z'%20fill='url(%23paint0_linear_530_324)'/%3e%3cpath%20d='M60%2068.5002C60%20144.992%20-2.00856%20207%20-78.5%20207C-154.991%20207%20-217%20144.992%20-217%2068.5002C-217%20-7.9912%20-154.991%20-69.9998%20-78.5%20-69.9998C-2.00856%20-69.9998%2060%20-7.9912%2060%2068.5002Z'%20fill='url(%23paint1_linear_530_324)'/%3e%3cpath%20d='M444%20-1.09672e-06C444%2072.9016%20384.902%20132%20312%20132C239.098%20132%20180%2072.9016%20180%200C180%20-72.9016%20239.098%20-132%20312%20-132C384.902%20-132%20444%20-72.9016%20444%20-1.09672e-06Z'%20fill='url(%23paint2_linear_530_324)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_530_324'%20x1='245'%20y1='85.0005'%20x2='245'%20y2='263'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23F68473'%20stop-opacity='0.2'/%3e%3cstop%20offset='1'%20stop-color='%23F9B77E'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_530_324'%20x1='46.5'%20y1='5.50025'%20x2='-3.5'%20y2='-33.9998'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23F68473'%20stop-opacity='0.2'/%3e%3cstop%20offset='0.799172'%20stop-color='%23F9B77E'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint2_linear_530_324'%20x1='313.333'%20y1='8.50001'%20x2='313.333'%20y2='103.5'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23F68473'%20stop-opacity='0.2'/%3e%3cstop%20offset='1'%20stop-color='%23F9B77E'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e")`);
  return (l3, a2) => {
    let n2 = v, s2 = ke2;
    return Zr(), to(s2, { confineSize: !1 }, { default: mn(() => [io("div", { class: W(["h-full w-full text-white text-center bg-no-repeat bg-cover ai-ppt", `iconsize-${e2.size}`]) }, [e2.size === "1x2" ? (Zr(), eo("div", Qe, [io("div", Xe, [lo(n2, { raw: Lt(t22).text, ratio: 118 / 30, class: "text-[1.2em]" }, null, 8, ["raw"]), a2[0] || (a2[0] = io("div", { class: "text-[0.2em]" }, "一键生成", -1))]), lo(n2, { raw: Lt(t22).logo, class: "text-[0.8em]" }, null, 8, ["raw"])])) : po("", !0), e2.size === "2x2" ? (Zr(), eo("div", Ke, [io("div", et, [lo(n2, { raw: Lt(t22).logo, class: "text-[1.35em]" }, null, 8, ["raw"]), lo(n2, { raw: Lt(t22).text, class: "text-[1.6em]", ratio: 118 / 30 }, null, 8, ["raw"])])])) : po("", !0), e2.size === "2x4" ? (Zr(), eo("div", tt, [io("div", lt, [lo(n2, { raw: Lt(t22).text, class: "text-[3em]", ratio: 118 / 30 }, null, 8, ["raw"]), a2[1] || (a2[1] = io("div", { class: "text-[0.22em] flex border border-white rounded" }, [io("div", { class: "px-2" }, "一句话生成PPT"), io("div", { class: "bg-white text-[#fd2f28] px-2" }, "立即使用")], -1))]), lo(n2, { raw: Lt(t22).logo, class: "text-[1.6em]" }, null, 8, ["raw"])])) : (Zr(), eo("div", at, [lo(n2, { raw: Lt(t22).logoClean, class: "text-[0.75em]" }, null, 8, ["raw"])]))], 2)]), _: 1 });
  };
} }, [["__scopeId", "data-v-987a15f1"]]), st = /* @__PURE__ */ Object.freeze(Object.defineProperty({ __proto__: null, default: nt }, Symbol.toStringTag, { value: "Module" })), it = { class: "size-full bg-white object-contain", src: "https://files.itab.link/icons/audioConvert.svg", alt: "" }, ot = o({}, [["render", function(e2, t22) {
  return Zr(), eo("img", it);
}]]), rt = /* @__PURE__ */ Object.freeze(Object.defineProperty({ __proto__: null, default: ot }, Symbol.toStringTag, { value: "Module" })), ct = { class: "size-full bg-[#ff1f59] object-contain", src: "https://files.itab.link/icons/audioCut.svg", alt: "" }, ut = o({}, [["render", function(e2, t22) {
  return Zr(), eo("img", ct);
}]]), dt2 = /* @__PURE__ */ Object.freeze(Object.defineProperty({ __proto__: null, default: ut }, Symbol.toStringTag, { value: "Module" })), pt = { alt: "书签", class: "block w-full h-full object-contain bg-[#fe5f23]", src: "https://files.itab.link/tools-icon/bookmarks.svg" }, ft = o({ name: "bookmarks" }, [["render", function(e2, t22, l2, a2, n2, s2) {
  return Zr(), eo("img", pt);
}]]), mt = /* @__PURE__ */ Object.freeze(Object.defineProperty({ __proto__: null, default: ft }, Symbol.toStringTag, { value: "Module" })), vt = "/original/assets/x-icon-qPAB74ev.png";
var gt = r("outline", "chevron-left", "ChevronLeft", [["path", { d: "M15 6l-6 6l6 6", key: "svg-0" }]]), ht2 = r("outline", "chevron-right", "ChevronRight", [["path", { d: "M9 6l6 6l-6 6", key: "svg-0" }]]), yt = r("outline", "copy", "Copy", [["path", { d: "M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667l0 -8.666", key: "svg-0" }], ["path", { d: "M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1", key: "svg-1" }]]), bt = r("outline", "device-gamepad-2", "DeviceGamepad2", [["path", { d: "M12 5h3.5a5 5 0 0 1 0 10h-5.5l-4.015 4.227a2.3 2.3 0 0 1 -3.923 -2.035l1.634 -8.173a5 5 0 0 1 4.904 -4.019h3.4", key: "svg-0" }], ["path", { d: "M14 15l4.07 4.284a2.3 2.3 0 0 0 3.925 -2.023l-1.6 -8.232", key: "svg-1" }], ["path", { d: "M8 9v2", key: "svg-2" }], ["path", { d: "M7 10h2", key: "svg-3" }], ["path", { d: "M14 10h2", key: "svg-4" }]]), _t = r("outline", "map-pin", "MapPin", [["path", { d: "M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0", key: "svg-0" }], ["path", { d: "M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0", key: "svg-1" }]]), xt = r("outline", "maximize", "Maximize", [["path", { d: "M4 8v-2a2 2 0 0 1 2 -2h2", key: "svg-0" }], ["path", { d: "M4 16v2a2 2 0 0 0 2 2h2", key: "svg-1" }], ["path", { d: "M16 4h2a2 2 0 0 1 2 2v2", key: "svg-2" }], ["path", { d: "M16 20h2a2 2 0 0 0 2 -2v-2", key: "svg-3" }]]), wt = r("outline", "movie", "Movie", [["path", { d: "M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12", key: "svg-0" }], ["path", { d: "M8 4l0 16", key: "svg-1" }], ["path", { d: "M16 4l0 16", key: "svg-2" }], ["path", { d: "M4 8l4 0", key: "svg-3" }], ["path", { d: "M4 16l4 0", key: "svg-4" }], ["path", { d: "M4 12l16 0", key: "svg-5" }], ["path", { d: "M16 8l4 0", key: "svg-6" }], ["path", { d: "M16 16l4 0", key: "svg-7" }]]), kt = r("outline", "refresh", "Refresh", [["path", { d: "M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4", key: "svg-0" }], ["path", { d: "M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4", key: "svg-1" }]]), zt = r("outline", "scissors", "Scissors", [["path", { d: "M3 7a3 3 0 1 0 6 0a3 3 0 1 0 -6 0", key: "svg-0" }], ["path", { d: "M3 17a3 3 0 1 0 6 0a3 3 0 1 0 -6 0", key: "svg-1" }], ["path", { d: "M8.6 8.6l10.4 10.4", key: "svg-2" }], ["path", { d: "M8.6 15.4l10.4 -10.4", key: "svg-3" }]]), Ct = r("outline", "switch-horizontal", "SwitchHorizontal", [["path", { d: "M16 3l4 4l-4 4", key: "svg-0" }], ["path", { d: "M10 7l10 0", key: "svg-1" }], ["path", { d: "M8 13l-4 4l4 4", key: "svg-2" }], ["path", { d: "M4 17l9 0", key: "svg-3" }]]), Mt = r("outline", "video", "Video", [["path", { d: "M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4", key: "svg-0" }], ["path", { d: "M3 8a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2l0 -8", key: "svg-1" }]]), jt2 = r("filled", "player-pause-filled", "PlayerPauseFilled", [["path", { d: "M9 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z", key: "svg-0" }], ["path", { d: "M17 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z", key: "svg-1" }]]), St2 = r("filled", "player-play-filled", "PlayerPlayFilled", [["path", { d: "M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z", key: "svg-0" }]]), Ot = r("filled", "player-stop-filled", "PlayerStopFilled", [["path", { d: "M17 4h-10a3 3 0 0 0 -3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3 -3v-10a3 3 0 0 0 -3 -3z", key: "svg-0" }]]), Lt2 = r("filled", "plus-filled", "PlusFilled", [["path", { d: "M12 4a1 1 0 0 1 1 1v6h6a1 1 0 0 1 0 2h-6v6a1 1 0 0 1 -2 0v-6h-6a1 1 0 0 1 0 -2h6v-6a1 1 0 0 1 1 -1", key: "svg-0" }]]);
var Dt = { key: 0, class: "d-flex-center h-full" }, Pt = ["src"], Tt2 = { key: 1, class: "d-flex-center h-full justify-between pl-3 pr-3" }, At = ["src"], It = { key: 2, class: "d-flex-center flex-col h-full justify-between pt-3 pb-3" }, Et2 = ["src"], $t = { key: 3, class: "d-flex-center flex-col h-full justify-between overflow-hidden" }, Yt = { class: "flex items-center w-full justify-between pl-4 pr-4 pt-[2px] h-6" }, Vt = ["onClick"], Ht = ["src", "alt"], Rt = { class: "title" }, Ft = { name: "aibot-icon" }, Nt = o(Object.assign(Ft, { props: { size: String }, setup(t22) {
  Rs();
  let l2 = t22, a2 = [{ title: "计算器", icon: "icon-calculator" }, { title: "住房贷款", icon: "icon-house" }, { title: "个人所得税", icon: "icon-tax" }, { title: "长度单位", icon: "icon-length" }, { title: "亲戚称呼", icon: "icon-relationship" }, { title: "货币汇率", icon: "icon-exchangerate" }, { title: "大写金额", icon: "icon-uppercase" }, { title: "BMI计算", icon: "icon-bmi" }, { title: "日期计算", icon: "icon-date" }, { title: "质量单位", icon: "icon-weight" }, { title: "角度转换", icon: "icon-angle" }, { title: "进制转换", icon: "icon-hex" }, { title: "面积转换", icon: "icon-area" }, { title: "体积转换", icon: "icon-volume" }, { title: "温度转换", icon: "icon-temperature" }, { title: "速度转换", icon: "icon-speed" }, { title: "时间转换", icon: "icon-time" }, { title: "热能转换", icon: "icon-work" }, { title: "功率转换", icon: "icon-power" }, { title: "压强转换", icon: "icon-pressure" }, { title: "力转换", icon: "icon-strength" }], n2 = Tt(a2.slice()), s2 = Et({ page: 1, get maxPage() {
    return Math.ceil(n2.value.length / this.size);
  }, get size() {
    return l2.size === "2x2" ? 4 : 10;
  }, get list() {
    return n2.value.slice((s2.value.page - 1) * s2.value.size, s2.value.page * s2.value.size);
  } });
  function i2() {
    let t3 = f2.get("calculatorSortBy") || [], l3 = [], s3 = a2.reduce((e2, t4) => (e2[t4.title] = t4, e2), {});
    t3.map((e2) => {
      l3.push(s3[e2]);
    }), a2.map((e2) => {
      t3.includes(e2.title) || l3.push(e2);
    }), n2.value = l3;
  }
  function o2(e2) {
    let t3 = s2.value.page + e2;
    t3 <= 0 ? t3 = 1 : t3 > s2.value.maxPage && (t3 = s2.value.maxPage), s2.value.page = t3;
  }
  return i2(), fs(() => {
    t(() => import("./stocksCache-CNvbf2yR-BUTMMQXS.js").then((e2) => e2.a3), ["assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css"]).then((e2) => {
      e2.default.on("app-calculator-sort", i2);
    });
  }), (e2, a3) => {
    let n3 = ke2;
    return Zr(), to(n3, { confineSize: !1 }, { default: mn(() => [io("div", { class: W(["h-full w-full bg-black text-white text-center bg-no-repeat bg-cover", `iconsize-${t22.size}`]), style: V({ backgroundImage: `url(${Lt("/original/assets/bg-CJNxJb1Y.jpg")})` }) }, [l2.size == "1x1" ? (Zr(), eo("div", Dt, [io("img", { src: Lt(vt), class: "pointer-events-none", style: { width: "6em", height: "6em" } }, null, 8, Pt)])) : l2.size == "1x2" ? (Zr(), eo("div", Tt2, [a3[2] || (a3[2] = io("div", { class: "d-flex-center flex-col items-start f13" }, [io("div", null, "换算器"), io("div", { class: "d-sub" }, "快捷转换")], -1)), io("img", { src: Lt(vt), class: "pointer-events-none", style: { width: "6em", height: "6em" } }, null, 8, At)])) : l2.size == "2x1" ? (Zr(), eo("div", It, [a3[3] || (a3[3] = io("div", { class: "d-flex-center f13 w-1" }, [io("div", null, "换算器")], -1)), io("img", { src: Lt(vt), class: "pointer-events-none", style: { width: "6em", height: "6em" } }, null, 8, Et2)])) : l2.size == "2x2" || l2.size === "2x4" ? (Zr(), eo("div", $t, [io("div", Yt, [io("div", { onClick: a3[0] || (a3[0] = sl((e3) => o2(-1), ["stop"])), class: W(["arrow", { disabled: s2.value.page <= 1 }]) }, [lo(Lt(gt), { class: "size-4" })], 2), a3[4] || (a3[4] = io("div", { class: "f12" }, "换算器", -1)), io("div", { onClick: a3[1] || (a3[1] = sl((e3) => o2(1), ["stop"])), class: W(["arrow", { disabled: s2.value.page >= s2.value.maxPage }]) }, [lo(Lt(ht2), { class: "size-4" })], 2)]), io("div", { class: W(["flex-1 calculator-grid w-full overflow-hidden", [`size-${t22.size}`]]) }, [(Zr(!0), eo(Hr, null, Es(s2.value.list, (e3) => {
      return Zr(), eo("div", { class: "calculator-icon flex flex-col items-center justify-center gap-[5px]", key: e3.title, onClick: sl((t4) => (function(e4) {
        t(() => import("./stocksCache-CNvbf2yR-BUTMMQXS.js").then((e5) => e5.a4), ["assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css"]).then((t5) => {
          let l3 = { component: "calculator", insetType: "component", config: { currentTab: e4.title } };
          t5.setDialogApp(l3);
        });
      })(e3), ["stop"]) }, [io("img", { class: "calc-tool-icon pointer-events-none size-5", src: (t3 = e3.icon, `/original/app/calculator/${t3}.svg`), alt: e3.title, loading: "lazy", decoding: "async" }, null, 8, Ht), io("div", Rt, Z(e3.title), 1)], 8, Vt);
      var t3;
    }), 128))], 2)])) : po("", !0)], 6)]), _: 1 });
  };
} }), [["__scopeId", "data-v-9a063820"]]), qt = /* @__PURE__ */ Object.freeze(Object.defineProperty({ __proto__: null, default: Nt }, Symbol.toStringTag, { value: "Module" })), Zt = ["日", "一", "二", "三", "四", "五", "六"], Bt = /* @__PURE__ */ new WeakMap();
function Ut2(e2 = {}) {
  let t22 = e2.timeout ?? 2e3, l2 = e2.fallbackMs ?? 400, a2 = 0;
  function n2() {
    a2 && (typeof cancelIdleCallback == "function" ? cancelIdleCallback(a2) : clearTimeout(a2), a2 = 0);
  }
  return { whenIdle: function(e3) {
    n2(), a2 = typeof requestIdleCallback == "function" ? requestIdleCallback(() => {
      a2 = 0, e3();
    }, { timeout: t22 }) : setTimeout(() => {
      a2 = 0, e3();
    }, l2);
  }, cancelIdle: n2 };
}
function Gt(e2, t22) {
  let l2 = (function(e3) {
    let t3 = So();
    if (!t3) return Ut2(e3);
    let l3 = Bt.get(t3);
    return l3 || (l3 = Ut2(e3), vs(l3.cancelIdle), Bt.set(t3, l3)), l3;
  })(t22);
  return typeof e2 == "function" && l2.whenIdle(e2), l2.whenIdle;
}
var Wt = Et({ YYYY: "", MM: "", M: "", DD: "", D: "", week: "", HH: "", h: "", mm: "", ss: "", lunar: "" }), Jt = f2.get("lunarDate") || "", Qt = `${Jt.split(",")[0]}月${Jt.split(",")[1] || ""}`;
Wt.value.lunar = Qt;
var Xt = !1, Kt = 0, el = null, tl = "", ll = Ut2({ timeout: 2e3, fallbackMs: 400 });
function al(e2, t22) {
  Wt.value[e2] !== t22 && (Wt.value[e2] = t22);
}
function nl(e2, t22 = 2) {
  for (var l2 = String(e2); l2.length < t22; ) l2 = "0" + l2;
  return l2;
}
function sl2() {
  return new window.Date();
}
function il(e2) {
  return `${e2.getFullYear()}${nl(e2.getMonth() + 1)}${nl(e2.getDate())}`;
}
function ol(e2) {
  return `${e2.getFullYear()}-${nl(e2.getMonth() + 1)}-${nl(e2.getDate())}`;
}
function rl() {
  return Jt.split(",")[2];
}
function cl(t22) {
  il(t22) === rl() || Xt || ll.whenIdle(() => {
    (function(t3) {
      Xt || il(t3) !== rl() && (Xt = !0, t(async () => {
        let { SolarDay: e2 } = await import("./vendor-tyme4ts-D81ry8hI-TK44FSS7.js");
        return { SolarDay: e2 };
      }, []).then(({ SolarDay: t4 }) => {
        let l2 = sl2(), a2 = t4.fromYmd(l2.getFullYear(), l2.getMonth() + 1, l2.getDate()).getLunarDay(), n2 = a2.getLunarMonth().getName().replace(/月$/, ""), s2 = a2.getName(), i2 = il(l2);
        Jt = `${n2},${s2},${i2}`, Qt = `${n2}月${s2}`, f2.set("lunarDate", Jt), al("lunar", Qt);
      }).finally(() => {
        Xt = !1;
      }));
    })(sl2());
  });
}
function ul() {
  let e2 = sl2();
  cl(e2), tl = ol(e2), al("YYYY", String(e2.getFullYear())), al("MM", nl(e2.getMonth() + 1)), al("M", String(e2.getMonth() + 1)), al("DD", nl(e2.getDate())), al("D", String(e2.getDate())), al("week", `周${Zt[e2.getDay()]}`), al("lunar", Qt);
}
function dl() {
  let e2 = sl2();
  al("HH", nl(e2.getHours())), al("h", nl(e2.getHours() % 12 || 12)), al("mm", nl(e2.getMinutes())), al("ss", nl(e2.getSeconds())), tl != ol(e2) && ul(), el = requestAnimationFrame(dl);
}
function pl() {
  typeof document < "u" && document.visibilityState === "hidden" || (fl(), ul(), dl());
}
function fl() {
  cancelAnimationFrame(el), el = null;
}
function ml() {
  let e2;
  return fs(() => {
    Kt++, Kt === 1 && pl(), e2 = () => {
      Kt = Math.max(0, Kt - 1), Kt === 0 && (fl(), ll.cancelIdle());
    };
  }), vs(() => {
    e2?.();
  }), Wt;
}
typeof document < "u" && document.addEventListener("visibilitychange", () => {
  Kt !== 0 && (document.visibilityState === "visible" ? pl() : fl());
});
var vl = { key: 0, class: "d-flex-center w-full h-full b calendar-main-bg" }, gl = { class: "f12 ac", style: { color: "#d83030" } }, hl = { class: "f18 ac" }, yl = { key: 1, class: "d-flex-center h-full pl20 pr20 calendar-main-bg" }, bl = { class: "f18" }, _l = { class: "f16 ml5", style: { color: "rgb(216, 48, 48)" } }, xl = { key: 2, class: "d-flex-between h-full w-full ac pt20 pb20 calendar-main-bg", style: { "flex-direction": "column" } }, wl = { class: "f12" }, kl = { class: "f36 b" }, zl = { class: "b f14", style: { color: "rgb(216, 48, 48)" } }, Cl = { key: 3, class: "w-full h-full" }, Ml = { class: "calendar-icon-body d-inline w-full h-full" }, jl = { class: "d-flex-center icon-date", style: { height: "25%", "font-size": "0.76em" } }, Sl = { class: "ac d-flex-center b calendar-main-bg", style: { height: "42%", "font-size": "2.4em" } }, Ol = { class: "ac calendar-main-bg", style: { height: "33%", "font-size": "0.58em" } }, Ll = { style: { color: "#999" } }, Dl = { key: 0, class: "p-[0.4em] w-3/5 h-full absolute right-0 top-0" }, Pl = { name: "calendar-icon" }, Tl = o(Object.assign(Pl, { props: { size: { type: String, default: "medium" } }, setup(e2) {
  let l2 = Xn(() => t(() => Promise.resolve().then(() => $a), void 0)), a2 = ["2x2", "small", "2x4", "medium"], n2 = e2, s2 = ml(), i2 = O(), o2 = Et(null), r2 = Et({ dayOfYear: "--", weekOfYear: "--", lunar: "" }), c2 = null, u22 = !1, d2 = 0;
  function p2() {
    return a2.includes(n2.size);
  }
  function f22() {
    c2 && (clearInterval(c2), c2 = null);
  }
  function m2() {
    f22(), c2 = setInterval(() => {
      o2.value = null, f22();
    }, 6e4);
  }
  function v2(e3) {
    var t22, l3;
    if (!p2()) return;
    let a3 = u2(e3), n3 = a3.format("YYYY-MM-DD");
    r2.value.lunar = s2.value.lunar || "";
    let c3 = (l3 = (t22 = i2.value) == null ? void 0 : t22.time) != null && l3.weekBegin1 ? 1 : 0;
    function u3() {
      return u2(o2.value || /* @__PURE__ */ new Date()).format("YYYY-MM-DD") !== n3;
    }
    t(async () => {
      let { dayOfYearWithGregorianFix: e4 } = await import("./dateHelpers-CHVulN6M-6DVS67LI.js");
      return { dayOfYearWithGregorianFix: e4 };
    }, []).then(({ dayOfYearWithGregorianFix: e4 }) => {
      u3() || (r2.value.dayOfYear = e4(a3));
    }), t(async () => {
      let { SolarDay: e4 } = await import("./vendor-tyme4ts-D81ry8hI-TK44FSS7.js");
      return { SolarDay: e4 };
    }, []).then(({ SolarDay: e4 }) => {
      if (u3()) return;
      let t3 = e4.fromYmd(a3.year(), a3.month() + 1, a3.date());
      r2.value.weekOfYear = t3.getSolarWeek(c3).getIndexInYear();
      let l4 = t3.getLunarDay();
      r2.value.lunar = `${l4.getLunarMonth().getName()}${l4.getName()}`;
    });
  }
  fs(() => {
    d2 = requestAnimationFrame(() => {
      d2 = 0, u22 = !0, p2() && v2(o2.value || /* @__PURE__ */ new Date());
    });
  }), vs(() => {
    d2 && cancelAnimationFrame(d2), f22();
  }), Fr([o2, () => `${s2.value.YYYY}-${s2.value.MM}-${s2.value.DD}`, () => {
    var e3, t22;
    return (t22 = (e3 = i2.value) == null ? void 0 : e3.time) == null ? void 0 : t22.weekBegin1;
  }], () => {
    u22 && v2(o2.value || /* @__PURE__ */ new Date());
  });
  let g2 = $o(() => {
    if (!o2.value) {
      let e4 = u2();
      return { YYYY: s2.value.YYYY || e4.format("YYYY"), M: s2.value.M || e4.format("M"), D: s2.value.D || e4.format("D"), week: s2.value.week || `周${Zt[e4.day()]}`, lunar: r2.value.lunar || s2.value.lunar, nowData: s2.value.YYYY ? new Date(Number(s2.value.YYYY), Number(s2.value.M) - 1, Number(s2.value.D)) : e4.toDate(), dayOfYear: r2.value.dayOfYear, weekOfYear: r2.value.weekOfYear };
    }
    let e3 = u2(o2.value);
    return { YYYY: e3.format("YYYY"), M: e3.format("M"), D: e3.format("D"), week: `周${Zt[e3.day()]}`, lunar: r2.value.lunar, nowData: o2.value, dayOfYear: r2.value.dayOfYear, weekOfYear: r2.value.weekOfYear };
  });
  function h2(e3) {
    if (e3 === "prev-month") {
      let e4 = o2.value || /* @__PURE__ */ new Date();
      o2.value = u2(e4).subtract(1, "month").date(1).toDate(), m2();
    } else if (e3 === "next-month") {
      let e4 = o2.value || /* @__PURE__ */ new Date();
      o2.value = u2(e4).add(1, "month").date(1).toDate(), m2();
    } else e3 === "today" && (o2.value = null, f22());
  }
  return (t22, a3) => {
    let s3 = ke2;
    return Zr(), to(s3, null, { default: mn(() => [io("div", { class: W([`iconsize-${e2.size}`, "calendar-icon relative w-full h-full"]) }, [n2.size == "1x1" ? (Zr(), eo("div", vl, [io("span", null, [io("div", gl, Z(g2.value.week), 1), io("div", hl, Z(g2.value.D), 1)])])) : n2.size == "1x2" ? (Zr(), eo("div", yl, [io("span", bl, Z(g2.value.M) + "/" + Z(g2.value.D), 1), io("span", _l, Z(g2.value.week), 1)])) : n2.size == "2x1" ? (Zr(), eo("div", xl, [io("span", wl, Z(g2.value.YYYY) + "/" + Z(g2.value.M), 1), io("span", kl, Z(g2.value.D), 1), io("span", zl, Z(g2.value.week), 1)])) : ["2x2", "small", "2x4", "medium"].includes(n2.size) ? (Zr(), eo("div", Cl, [io("div", { class: W(["h-full w-full calendar-icon-wrap", `size-${n2.size}`]) }, [io("span", Ml, [io("div", jl, [io("i", { title: "上一个月", class: "d-icon", style: { display: "none" }, onClick: a3[0] || (a3[0] = sl((e3) => h2("prev-month"), ["stop"])) }, [lo(Lt(gt))]), io("i", { title: "今天", onClick: a3[1] || (a3[1] = sl((e3) => h2("today"), ["stop"])) }, Z(g2.value.YYYY) + "年" + Z(g2.value.M) + "月", 1), io("i", { title: "下一个月", class: "d-icon", style: { display: "none" }, onClick: a3[2] || (a3[2] = sl((e3) => h2("next-month"), ["stop"])) }, [lo(Lt(ht2))])]), io("div", Sl, Z(g2.value.D), 1), io("div", Ol, [io("p", Ll, " 第" + Z(g2.value.dayOfYear) + "天 第" + Z(g2.value.weekOfYear) + "周 ", 1), io("p", null, Z(g2.value.lunar) + " " + Z(g2.value.week), 1)])])], 2), n2.size == "medium" || n2.size == "2x4" ? (Zr(), eo("div", Dl, [lo(Lt(l2), { modelValue: g2.value.nowData }, null, 8, ["modelValue"])])) : po("", !0)])) : po("", !0)], 2)]), _: 1 });
  };
} }), [["__scopeId", "data-v-6b2c24e5"]]), Al = /* @__PURE__ */ Object.freeze(Object.defineProperty({ __proto__: null, default: Tl }, Symbol.toStringTag, { value: "Module" })), Il = { key: 0, class: "d-flex-center h-full" }, El = { class: "b time countdown", style: { "font-size": "3em" } }, $l = { key: 0 }, Yl = { key: 1, class: "d-flex-between h-full w-full pt20 pb20", style: { "flex-direction": "column", "font-weight": "400" } }, Vl = { class: "f30", style: { "font-family": "cursive" } }, Hl = { class: "f12", style: { "font-weight": "400" } }, Rl = { key: 2, class: "h-full w-full d-flex-center" }, Fl = { key: 0, style: { "vertical-align": "0.08em" } }, Nl = { class: "f16" }, ql = { name: "clock-icon" }, Zl = o(Object.assign(ql, { props: { size: String }, setup(e2) {
  ml();
  let t22 = e2;
  function l2() {
    t(() => import("./stocksCache-CNvbf2yR-BUTMMQXS.js").then((e3) => e3.a4), ["assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css"]).then((e3) => {
      e3.setDialogApp({ component: "clock", insetType: "component", config: { isFullscreen: !0 } });
    });
  }
  return (a2, n2) => {
    let s2 = ke2;
    return Zr(), to(s2, { confineSize: !1 }, { default: mn(() => [io("div", { class: W(["h-full w-full clock-icon-wrap text-white text-center", `iconsize-${e2.size}`]) }, [io("i", { class: "d-icon fullsrceen-btn absolute opacity-30", onClick: [sl(l2, ["stop"]), n2[0] || (n2[0] = (...e3) => a2.toggle && a2.toggle(...e3))], title: "快捷键F11可切换至全屏" }, [(Zr(), to(ws(Lt(xt))))]), ["1x1", "1x2"].includes(t22.size) ? (Zr(), eo("div", Il, [io("p", El, [io("time", { style: V(`--value:${Wt.value.HH}`) }, null, 4), n2[1] || (n2[1] = io("em", null, ":", -1)), io("time", { style: V(`--value:${Wt.value.mm}`) }, null, 4), e2.size == "1x2" ? (Zr(), eo("em", $l, ":")) : po("", !0), e2.size == "1x2" ? (Zr(), eo("time", { key: 1, style: V(`--value:${Wt.value.ss}`) }, null, 4)) : po("", !0)])])) : ["2x1"].includes(t22.size) ? (Zr(), eo("div", Yl, [io("span", Vl, [io("p", null, Z(Wt.value.HH), 1), io("p", null, Z(Wt.value.mm), 1)]), io("span", Hl, [io("p", null, Z(Wt.value.MM) + "/" + Z(Wt.value.DD), 1), io("p", null, Z(Wt.value.week), 1)])])) : ["2x2", "2x4", "small", "medium"].includes(t22.size) ? (Zr(), eo("div", Rl, [io("span", null, [io("span", { class: "b time countdown", style: V(`font-size:${["2x4", "medium"].includes(t22.size) ? 2.6 : 2.1}em;`) }, [io("time", { style: V(`--value:${Wt.value.HH}`) }, null, 4), n2[2] || (n2[2] = io("em", { style: { "vertical-align": "0.08em" } }, ":", -1)), io("time", { style: V(`--value:${Wt.value.mm}`) }, null, 4), ["2x4", "medium"].includes(t22.size) ? (Zr(), eo("em", Fl, ":")) : po("", !0), ["2x4", "medium"].includes(t22.size) ? (Zr(), eo("time", { key: 1, style: V(`--value:${Wt.value.ss}`) }, null, 4)) : po("", !0)], 4), io("p", Nl, Z(Wt.value.MM) + "/" + Z(Wt.value.DD) + " " + Z(Wt.value.week), 1)])])) : po("", !0)], 2)]), _: 1 });
  };
} }), [["__scopeId", "data-v-b1d763e9"]]), Bl = /* @__PURE__ */ Object.freeze(Object.defineProperty({ __proto__: null, default: Zl }, Symbol.toStringTag, { value: "Module" })), Ul = { class: "size-full bg-[#6bd9e9] object-contain", src: "https://files.itab.link/tools-icon/colorAvatar.png", alt: "" }, Gl = o({}, [["render", function(e2, t22) {
  return Zr(), eo("img", Ul);
}]]), Wl = /* @__PURE__ */ Object.freeze(Object.defineProperty({ __proto__: null, default: Gl }, Symbol.toStringTag, { value: "Module" })), Jl = ["1", "2", "3", "4"];
function Ql(e2) {
  let t22 = Number(e2);
  return t22 >= 1 && t22 <= 31 ? t22 : 10;
}
var Xl = { name: "下班倒计时", target: 10, workTime: ["2020-12-20 09:00:00", "2020-12-20 18:00:00"], repeatWeek: ["8"], bgColor: "#ffffff", textColor: "#666666", family: "HarmonyOS_Sans", mask: 0, dayMoney: 1e3, moreList: [...Jl] };
function Kl(e2) {
  let t22 = e2 && typeof e2 == "object" ? e2 : {};
  return { ...Xl, ...t22, moreList: Array.isArray(t22.moreList) ? t22.moreList : [...Jl], mask: t22.mask == null ? 0 : t22.mask, target: Ql(t22.target != null ? t22.target : Xl.target) };
}
var ea = "休息时间", ta = ["1", "2", "3", "4", "5"];
function la(e2) {
  return e2 < 10 ? `0${e2}` : String(e2);
}
var aa = (t22, l2 = ta, a2) => {
  if (typeof t22 == "string" && (t22 = ["2022-09-01 00:00:00", t22]), !Array.isArray(t22) || t22.length < 2) return { text: ea, money: 0 };
  let n2 = u2(), s2 = n2.format("YYYY-MM-DD"), i2 = u2(`${s2} ${u2(t22[0]).format("HH:mm:ss")}`), o2 = u2(`${s2} ${u2(t22[1]).format("HH:mm:ss")}`);
  if (!i2.isValid() || !o2.isValid()) return { text: ea, money: 0 };
  let r2 = (function(t3, l3) {
    let a3 = String(l3.day()), n3 = Array.isArray(t3) && t3.length ? t3 : ta;
    if (n3.includes("8")) {
      let t4 = l3.format("YYYY-MM-DD"), n4 = f2.get("app-countdown-dayoff"), s3 = Array.isArray(n4) ? n4 : [];
      return s3.length ? !s3.includes(t4) : ta.includes(a3);
    }
    return n3.includes(a3);
  })(l2, n2), c2 = n2.isBefore(i2), u22 = !n2.isBefore(o2), d2 = 0;
  if (a2 != null && a2 !== !1) if (!r2 || c2) d2 = 0;
  else if (u22) d2 = a2;
  else {
    let e2 = o2.diff(i2, "second"), t3 = e2 > 0 ? a2 / e2 : 0;
    d2 = n2.diff(i2, "second") * t3;
  }
  if (!r2 || c2 || u22) return { text: ea, money: d2 };
  let p2 = Math.max(0, o2.diff(n2, "second")), f22 = Math.floor(p2 / 3600), m2 = Math.floor(p2 % 3600 / 60), v2 = p2 % 60;
  return { text: `${la(f22)}:${la(m2)}:${la(v2)}`, money: d2 };
}, na = [5, 4, 3, 2, 1, 0, 6], sa = { fontSize: "1.3em" }, ia = { fontSize: "1.6em" };
function oa(e2) {
  return jt(e2) || Xl;
}
function ra(e2) {
  return Array.isArray(e2.moreList) ? e2.moreList : Jl;
}
function ca(e2) {
  return jt(e2) || "";
}
function ua(t22, l2) {
  ml();
  let a2 = Tt("00:00:00"), n2 = Tt(0), s2 = Tt(f2.get("daysmatter-festival") || {}), i2 = Tt(0), o2 = Tt(0), r2 = (function(e2, t3 = 1e3) {
    let l3 = Tt(Number(e2.value) || 0), a3 = 0;
    return Fr(e2, (e3) => {
      cancelAnimationFrame(a3);
      let n3 = l3.value, s3 = Number(e3) || 0;
      if (n3 === s3) return void (l3.value = s3);
      let i3 = performance.now(), o3 = (e4) => {
        let r3 = Math.min(1, (e4 - i3) / t3);
        l3.value = n3 + (s3 - n3) * r3, r3 < 1 && (a3 = requestAnimationFrame(o3));
      };
      a3 = requestAnimationFrame(o3);
    }), re(() => cancelAnimationFrame(a3)), l3;
  })(o2, 1e3), c2 = $o(() => a2.value === ea), u22 = $o(() => ra(oa(t22))), d2 = $o(() => `iconsize-${ca(l2)}`), p2 = $o(() => {
    let e2 = ca(l2);
    return e2 === "2x4" || e2 === "medium";
  }), f22 = $o(() => ca(l2) === "2x1"), m2 = $o(() => ca(l2) === "1x1"), v2 = $o(() => f22.value ? a2.value.split(":") : []), g2 = $o(() => p2.value && u22.value.includes("1")), h2 = $o(() => p2.value && u22.value.includes("2")), y2 = $o(() => p2.value && u22.value.includes("3")), b2 = $o(() => p2.value && u22.value.includes("4")), _2 = $o(() => {
    let e2 = r2.value;
    return e2.toFixed(e2 < 1e3 ? 3 : 2);
  }), x2 = $o(() => c2.value ? sa : ia), z2 = $o(() => {
    let { textColor: e2 } = oa(t22);
    return { "--boxBg": `${e2}1f` };
  }), C2 = $o(() => {
    let e2 = oa(t22), { bgColor: l3, textColor: a3, family: n3 } = e2, s3 = e2.mask == null ? 0 : e2.mask, i3 = String(l3).startsWith("http") ? `url(${l3}?x-oss-process=image/resize,limit_0,m_fill,w_400,h_200/quality,q_90/format,webp)` : "", o3 = c2.value;
    return { "--bgColor": l3, "--bgImg": i3, "--textColor": a3, "--textSubColor": `${a3}cf`, "--fontFamily": n3, "--maskBg": `rgba(0,0,0,${s3 / 100})`, "--fontWeight": o3 ? "400" : "bold", "--workStatus": o3 ? "url(https://files.itab.link/itab/widget/countdown/offwork-1.png?x-oss-process=image/resize,limit_1,w_300,h_300/quality,q_92/format,webp)" : "url(https://files.itab.link/itab/widget/countdown/onwork-1.png?x-oss-process=image/resize,limit_1,w_300,h_300/quality,q_92/format,webp)" };
  });
  function M2() {
    let e2 = oa(t22), { workTime: l3, repeatWeek: n3, dayMoney: s3 } = e2, i3 = b2.value, r3 = aa(l3, n3, i3 ? s3 || 1e3 : void 0);
    a2.value !== r3.text && (a2.value = r3.text), i3 && (o2.value = r3.money);
  }
  let j2 = 0;
  async function S2() {
    let e2 = ++j2;
    if (h2.value) {
      let e3 = Number(Wt.value.D) || 1, t3 = Number(Wt.value.M) || 1, l4 = Number(Wt.value.YYYY) || new window.Date().getFullYear(), a4 = new window.Date(l4, t3 - 1, e3).getDay();
      i2.value = na[a4];
    }
    let l3 = g2.value, a3 = y2.value;
    if (!l3 && !a3) return;
    let { calcCountdown: o3 } = await t(async () => {
      let { calcCountdown: e3 } = await import("./dateTools-6OkZNidl-XLWCKF6V.js");
      return { calcCountdown: e3 };
    }, ["assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css"]);
    if (e2 !== j2) return;
    let { target: r3 } = oa(t22), c3 = [];
    return l3 && c3.push(o3(r3, "month").then((t3) => {
      e2 === j2 && (n2.value = t3);
    })), a3 && c3.push(o3(r3, "festival").then((t3) => {
      e2 === j2 && (s2.value = t3 || {});
    })), Promise.all(c3);
  }
  function O2() {
    let { repeatWeek: e2 } = oa(t22);
    e2?.includes("8") && t(() => import("./getDayoff-CIOFr-i2-HCG7V762.js"), ["assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css"]).then((e3) => e3.default()).then(() => {
      M2();
    });
  }
  return Fr(() => Wt.value.ss, () => {
    M2();
  }, { immediate: !0 }), Fr(() => Wt.value.D, () => {
    S2();
  }, { immediate: !0 }), Fr(() => {
    let e2 = oa(t22), l3 = Array.isArray(e2.repeatWeek) ? e2.repeatWeek.join(",") : "";
    return [e2.workTime, l3, e2.dayMoney];
  }, () => {
    M2(), O2();
  }), Fr(() => {
    let e2 = oa(t22), a3 = ra(e2).join(",");
    return [e2.target, a3, ca(l2)];
  }, () => {
    M2(), S2();
  }), O2(), { timeCountdown: a2, paydayCountdown: n2, festivalCountdown: s2, friCountdown: i2, isRest: c2, moreList: u22, sizeClass: d2, is2x4: p2, is2x1: f22, is1x1: m2, timeParts: v2, showPayday: g2, showFri: h2, showFestival: y2, showMoney: b2, moneyValue: _2, timeFontStyle: x2, boxBgStyle: z2, wrapStyle: C2 };
}
var da = { class: "icon-2x4-offwork" }, pa = { class: "title" }, fa = { class: "time mt-1", style: { "line-height": "1.5em", height: "1.6em" } }, ma = { key: 0 }, va = { class: "b" }, ga = { key: 1 }, ha = { class: "b" }, ya = ["title"], ba = { style: { "text-overflow": "inherit" }, class: "d-elip" }, _a = { class: "b" }, xa = { key: 3, style: { width: "auto" } }, wa = { class: "b" }, ka = { class: "time-col" }, za = { key: 0, class: "off-work" }, Ca = { key: 0 }, Ma = { key: 1, class: "countdown-img w-full" }, ja = { class: "ac" }, Sa = { style: { "font-size": "0.6em" } }, Oa = { style: { "white-space": "nowrap", "font-weight": "var(--fontWeight)" }, class: "b d-flex-center f14" }, La = o(Object.assign({ name: "countdownIcon" }, { __name: "icon", props: { data: { type: Object, default: () => Kl({}) }, size: String }, setup(e2) {
  let t22 = e2, { timeCountdown: l2, paydayCountdown: a2, festivalCountdown: n2, friCountdown: s2, isRest: i2, moreList: o2, sizeClass: r2, is2x4: c2, is2x1: u22, is1x1: d2, timeParts: p2, showPayday: f22, showFri: m2, showFestival: v2, showMoney: g2, moneyValue: h2, timeFontStyle: y2, boxBgStyle: b2, wrapStyle: _2 } = ua(Ut(t22, "data"), Ut(t22, "size"));
  return (e3, t3) => {
    let x2 = ke2;
    return Zr(), to(x2, null, { default: mn(() => [io("div", { class: "h-full w-full countdown-wrap relative bg-center bg-no-repeat bg-cover", style: V(Lt(_2)) }, [Lt(c2) ? (Zr(), eo("div", { key: 0, class: W(["size-full", Lt(r2)]), style: { color: "var(--textColor)" } }, [io("div", da, [yn(io("p", pa, t3[0] || (t3[0] = [io("span", null, "下班还有", -1)]), 512), [[di, !Lt(i2)]]), io("p", fa, [io("time", { class: "block h-full", style: V([{ "font-weight": "var(--fontWeight)" }, Lt(y2)]) }, Z(Lt(l2)), 5)])]), Lt(o2).length ? (Zr(), eo("ul", { key: 0, class: "icon-2x4-box h-1/2", style: V(Lt(b2)) }, [Lt(f22) ? (Zr(), eo("li", ma, [t3[1] || (t3[1] = io("p", null, "发薪", -1)), io("p", va, Z(Lt(a2)), 1), t3[2] || (t3[2] = io("p", null, "天", -1))])) : po("", !0), Lt(m2) ? (Zr(), eo("li", ga, [t3[3] || (t3[3] = io("p", null, "周五", -1)), io("p", ha, Z(Lt(s2)), 1), t3[4] || (t3[4] = io("p", null, "天", -1))])) : po("", !0), Lt(v2) ? (Zr(), eo("li", { key: 2, title: Lt(n2).title }, [io("p", ba, Z(Lt(n2).title), 1), io("p", _a, Z(Lt(n2).number), 1), t3[5] || (t3[5] = io("p", null, "天", -1))], 8, ya)) : po("", !0), Lt(g2) ? (Zr(), eo("li", xa, [t3[6] || (t3[6] = io("p", { style: { "text-overflow": "inherit", padding: "0 1px" }, class: "d-nowrap" }, "今天赚了", -1)), io("p", wa, Z(Lt(h2)), 1), t3[7] || (t3[7] = io("p", null, "¥", -1))])) : po("", !0)], 4)) : po("", !0), t3[8] || (t3[8] = io("div", { class: "countdown-img" }, null, -1))], 2)) : Lt(u22) ? (Zr(), eo("div", { key: 1, class: W(["h-full w-full", Lt(r2)]) }, [io("div", ka, [Lt(i2) ? (Zr(), eo("p", za, t3[9] || (t3[9] = [io("span", null, "休", -1), io("span", null, "息", -1)]))) : (Zr(!0), eo(Hr, { key: 1 }, Es(Lt(p2), (e4, t4) => (Zr(), eo("p", { key: t4, class: "f15" }, Z(e4), 1))), 128))]), t3[10] || (t3[10] = io("div", { class: "countdown-img bg-contain!" }, null, -1))], 2)) : Lt(d2) ? (Zr(), eo("div", { key: 2, class: W(["h-full w-full d-flex-center f12", Lt(r2)]) }, [Lt(i2) ? (Zr(), eo("div", Ma)) : (Zr(), eo("span", Ca, Z(Lt(l2)), 1))], 2)) : (Zr(), eo("div", { key: 3, class: W(["h-full w-full", Lt(r2)]) }, [io("div", ja, [yn(io("p", Sa, "下班还有", 512), [[di, !Lt(i2)]]), io("div", Oa, Z(Lt(l2)), 1)]), t3[11] || (t3[11] = io("div", { class: "countdown-img" }, null, -1))], 2))], 4)]), _: 1 });
  };
} }), [["__scopeId", "data-v-149bd026"]]), Da = /* @__PURE__ */ Object.freeze(Object.defineProperty({ __proto__: null, default: La }, Symbol.toStringTag, { value: "Module" })), Pa = { class: "d-calendar w-full h-full" }, Ta = { class: "d-calendar-week flex justify-between ac items-center" }, Aa = { class: "d-calendar-body" }, Ia = { key: 0, class: "flex items-center justify-center" }, Ea = /* @__PURE__ */ o({ __name: "d-calendar", props: { modelValue: { type: Date, default: /* @__PURE__ */ new Date() } }, setup(e2) {
  let l2 = O(), a2 = ["一", "二", "三", "四", "五", "六", "日"], n2 = e2, s2 = $o(() => (function(e3, t22 = !1) {
    let l3 = e3.getMonth(), a3 = e3.getFullYear(), n3 = new Date(a3, l3, 1), s3 = n3.getDay();
    u2(n3).isBefore("1582-10-14 23:59:59") && (s3 = n3.getDay() + 3, s3 >= 7 && (s3 -= 7)), t22 && s3 == 0 && (s3 = 7);
    let i3 = 1 - s3 + (t22 ? 1 : 0), o3 = [];
    for (let r3 = 0; r3 < 42; r3++) o3.push(new Date(a3, l3, i3 + r3));
    return o3;
  })(n2.modelValue, l2.value.time.weekBegin1)), i2 = $o(() => l2.value.time.weekBegin1 ? a2 : Zt);
  function o2(e3) {
    return `${e3.getFullYear()}-${String(e3.getMonth() + 1).padStart(2, "0")}-${String(e3.getDate()).padStart(2, "0")}`;
  }
  function r2(e3) {
    return !(e3.getFullYear() === 1582 && e3.getMonth() === 9 && e3.getDate() > 4 && e3.getDate() < 15);
  }
  function c2(e3) {
    let t22 = /* @__PURE__ */ new Date();
    return e3.getFullYear() == t22.getFullYear() && e3.getMonth() == t22.getMonth() && e3.getDate() == t22.getDate();
  }
  function u22(e3) {
    let t22 = n2.modelValue;
    return e3.getFullYear() == t22.getFullYear() && e3.getMonth() == t22.getMonth() && e3.getDate() == t22.getDate();
  }
  function d2(e3) {
    return e3.getMonth() != n2.modelValue.getMonth();
  }
  function p2(e3) {
    return typeof e3 == "string" ? e3 == "六" || e3 == "日" : e3.getDay() == 0 || e3.getDay() == 6;
  }
  let f22 = (e3) => e3.getDate();
  return (e3, t22) => (Zr(), eo("div", Pa, [io("ul", Ta, [(Zr(!0), eo(Hr, null, Es(i2.value, (e4) => (Zr(), eo("li", { class: W(["w-full", { weekend: p2(e4) }]), key: e4 }, Z(e4), 3))), 128))]), io("ul", Aa, [(Zr(!0), eo(Hr, null, Es(s2.value, (t3) => (Zr(), eo(Hr, { key: o2(t3) }, [r2(t3) ? (Zr(), eo("li", Ia, [io("div", { class: W(["size-full", [{ isToday: c2(t3) }, { isSelect: u22(t3) }, { otherMonth: d2(t3) }, { weekend: p2(t3) }]]) }, [Os(e3.$slots, "date-cell", { date: t3 }, () => [io("span", null, Z(f22(t3)), 1)], !0)], 2)])) : po("", !0)], 64))), 128))])]));
} }, [["__scopeId", "data-v-c83657b3"]]), $a = /* @__PURE__ */ Object.freeze(Object.defineProperty({ __proto__: null, default: Ea }, Symbol.toStringTag, { value: "Module" })), Ya = /* @__PURE__ */ o({ __name: "iconFrame", props: { data: { type: Object, required: !0 }, size: { type: String, default: "2x2" }, frameClass: { type: [String, Array, Object], default: "" }, confineSize: { type: Boolean, default: !0 }, bgColorVar: { type: String, default: "" } }, setup(e2) {
  let t22 = e2, l2 = $o(() => {
    let { bgColor: e3, textColor: l3, family: a2, mask: n2 } = t22.data || {}, s2 = String(e3 || ""), i2 = s2.startsWith("http");
    return { "--bgColor": t22.bgColorVar || s2, "--bgImg": i2 ? `url(${s2}?x-oss-process=image/resize,limit_0,m_fill,w_400,h_200/quality,q_90)` : "", "--textColor": l3, "--textSubColor": `${l3}cf`, "--fontFamily": a2, "--maskBg": `rgba(0,0,0,${(n2 || 0) / 100})` };
  });
  return (t3, a2) => (Zr(), to(ke2, { confineSize: e2.confineSize }, { default: mn(() => [io("div", { class: W(["days-icon-frame w-full h-full font-medium relative bg-center bg-no-repeat bg-cover", e2.frameClass]), style: V(l2.value) }, [Os(t3.$slots, "default", {}, void 0, !0)], 6)]), _: 3 }, 8, ["confineSize"]));
} }, [["__scopeId", "data-v-e95d784c"]]);
function Va(e2) {
  ml();
  let t22 = Tt(0), l2 = Tt("-"), a2 = Tt(""), n2 = 0;
  function s2() {
    return typeof e2 == "object" && e2 && "value" in e2 ? e2.value : e2;
  }
  async function i2() {
    let e3 = ++n2, i3 = s2() || {}, { target: o2, repeat: r2, isLunar: c2 } = i3, { computeDaysMatter: u22 } = await t(async () => {
      let { computeDaysMatter: e4 } = await import("./dateTools-6OkZNidl-XLWCKF6V.js");
      return { computeDaysMatter: e4 };
    }, ["assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css"]), d2 = await u22(o2, r2, !!c2);
    if (e3 === n2) {
      if (r2 === "festival") return a2.value = d2.festivalTitle || "", t22.value = Math.abs(d2.days || 0), void (l2.value = d2.displayTarget || "-");
      a2.value = "", t22.value = Math.abs(d2.days || 0), l2.value = d2.displayTarget || o2 || "-";
    }
  }
  return Fr(() => {
    let e3 = s2() || {};
    return [e3.target, e3.repeat, e3.isLunar, Wt.value.D];
  }, () => {
    i2();
  }, { immediate: !0 }), { countdown: t22, showDate: l2, festivalTitle: a2, refresh: i2 };
}
var Ha = [{ icon: "", name: "纪念日", title: "你在世界已经", target: "1997-10-01", repeat: "", bgColor: "#eee1d9", textColor: "#8e726f", family: "HarmonyOs_Sans", isLunar: !1, mask: 0 }, { icon: "2", name: "倒数日", title: "发工资还有", target: "2023-12-01", repeat: "month", bgColor: "#fff", isLunar: !1, textColor: "#1890ff", family: "HarmonyOs_Sans", mask: 0 }, { icon: "3", name: "恋爱日期", title: "和她❤️恋爱已经", target: "2021-02-28", repeat: "", bgColor: "#fff", isLunar: !1, textColor: "#eb8197", family: "", mask: 0 }];
function Ra(e2) {
  let t22 = e2 == null || e2 === "" ? "" : String(e2);
  return Ha.find((e3) => String(e3.icon) === t22) || Ha[0];
}
var Fa = { key: 0, class: "w-full h-full d-flex-center ac", style: { padding: "0.2em" } }, Na = { class: "d-nowrap f12" }, qa = { class: "f15 b" }, Za = { key: 1, style: { padding: "4px 12px" }, class: "w-full h-full d-flex-between" }, Ba = { class: "d-nowrap d-elip f12" }, Ua = { class: "b ml10 f16" }, Ga = { key: 2, class: "w-full h-full d-flex-between ac d-flex-column", style: { padding: "12px 0" } }, Wa = { class: "f13", style: { padding: "0 0.1em" } }, Ja = { class: "b f16" }, Qa = { class: "f13" }, Xa = { key: 3, class: "d-flex-between h-full w-full", style: { "align-items": "flex-start", "flex-direction": "column", padding: "0.5em 0.4em" } }, Ka = { class: "d-elip w-full al", style: { "font-size": "0.6em", "line-height": "1.2" } }, en = { class: "d-inline", style: { "font-size": "1.8em", "white-space": "nowrap" } }, tn = { class: "b" }, ln = { class: "mt5", style: { "font-size": "0.6em" } }, an = { key: 4, class: "days-icon-medius right-0 top-0 h-full" }, nn = /* @__PURE__ */ o({ __name: "icon", props: { size: { type: String, default: "2x2" }, data: { type: Object, default: () => ({ ...Ra("") }) } }, setup(e2) {
  let t22 = e2, { countdown: l2, showDate: a2, festivalTitle: n2 } = Va(Ut(t22, "data")), s2 = $o(() => t22.data.repeat === "festival" && n2.value ? n2.value : t22.data.title), i2 = $o(() => {
    let e3 = a2.value;
    if (!e3 || e3 === "-" || t22.data.isLunar || String(e3).includes("月")) return e3;
    let l3 = u2(e3);
    return l3.isValid() ? l3.format("MM-DD") : e3;
  });
  return (t3, n3) => (Zr(), to(Ya, { data: e2.data, size: e2.size, "frame-class": `icon-size-${e2.size} days-icon` }, { default: mn(() => [["1x1"].includes(e2.size) ? (Zr(), eo("div", Fa, [io("span", null, [io("div", Na, Z(s2.value), 1), io("div", qa, Z(Lt(l2)), 1)])])) : ["1x2"].includes(e2.size) ? (Zr(), eo("div", Za, [io("div", Ba, [uo(Z(s2.value) + " ", 1), io("p", null, Z(i2.value), 1)]), io("div", Ua, Z(Lt(l2)), 1)])) : ["2x1"].includes(e2.size) ? (Zr(), eo("div", Ga, [io("div", Wa, Z(s2.value), 1), io("div", Ja, Z(Lt(l2)), 1), io("p", Qa, Z(i2.value), 1)])) : ["2x2", "small", "medium", "2x4"].includes(e2.size) ? (Zr(), eo("div", Xa, [io("div", Ka, Z(s2.value), 1), io("p", en, [io("span", tn, Z(Lt(l2)), 1), n3[0] || (n3[0] = io("i", { class: "f12" }, "天", -1))]), io("p", ln, Z(Lt(a2)), 1)])) : po("", !0), ["medium", "2x4"].includes(e2.size) ? (Zr(), eo("div", an, [lo(Ea, { style: V(`--color:${e2.data.textColor}`) }, null, 8, ["style"])])) : po("", !0)]), _: 1 }, 8, ["data", "size", "frame-class"]));
} }, [["__scopeId", "data-v-4fda3c94"]]), sn = /* @__PURE__ */ Object.freeze(Object.defineProperty({ __proto__: null, default: nn }, Symbol.toStringTag, { value: "Module" })), on2 = { key: 0, class: "h-full ac d-flex-center" }, rn = { class: "title" }, cn = { class: "b f16" }, un = { key: 1, style: { "font-size": "0.7em" }, class: "h-full d-flex-center pt10 pbt0" }, dn = { style: { "writing-mode": "vertical-lr" }, class: "title" }, pn = { class: "b f16" }, fn = { key: 2, class: "h-full" }, mn2 = { class: "d-flex-center d-elip title", style: { "font-size": "0.7em", height: "30%", color: "var(--bgColor, '#fff')", "background-color": "var(--textColor)" } }, vn = { style: { height: "70%", "font-size": "2.8em" }, class: "b d-flex-center" }, gn = /* @__PURE__ */ o({ __name: "icon2", props: { size: { type: String, default: "2x2" }, data: { type: Object, default: () => ({ ...Ra("2") }) } }, setup(e2) {
  let t22 = e2, { countdown: l2, festivalTitle: a2 } = Va(Ut(t22, "data")), n2 = $o(() => t22.data.repeat === "festival" && a2.value ? a2.value : t22.data.title), s2 = $o(() => {
    let e3 = String(t22.data.bgColor || "");
    return e3.includes("http") ? t22.data.textColor === "#ffffff" ? "#333333" : "#ffffff" : e3;
  });
  return (t3, a3) => (Zr(), to(Ya, { data: e2.data, size: e2.size, "confine-size": !1, "frame-class": ["days-icon2", `icon-${e2.size}`], "bg-color-var": s2.value }, { default: mn(() => [["1x2"].includes(e2.size) ? (Zr(), eo("div", on2, [io("span", rn, [uo(Z(n2.value) + " ", 1), io("p", cn, Z(Lt(l2)), 1)])])) : ["2x1"].includes(e2.size) ? (Zr(), eo("div", un, [io("p", dn, Z(n2.value), 1), io("p", pn, Z(Lt(l2)), 1)])) : (Zr(), eo("div", fn, [io("h2", mn2, Z(n2.value), 1), io("div", vn, Z(Lt(l2)), 1)]))]), _: 1 }, 8, ["data", "size", "frame-class", "bg-color-var"]));
} }, [["__scopeId", "data-v-838074ca"]]), hn = /* @__PURE__ */ Object.freeze(Object.defineProperty({ __proto__: null, default: gn }, Symbol.toStringTag, { value: "Module" })), yn2 = { key: 0, class: "w-full h-full d-flex-center" }, bn = { class: "f18 b" }, _n = { key: 1, class: "w-full h-full d-flex-center" }, xn = { class: "d-normal f12", style: { height: "40%" } }, wn = { class: "f18 b" }, kn = { key: 2, class: "w-full h-full d-flex-center f12" }, zn = { class: "d-normal", style: { "writing-mode": "vertical-lr" } }, Cn = { class: "b f13", style: { "writing-mode": "vertical-lr" } }, Mn = { key: 3, class: "d-flex-between h-full w-full", style: { "flex-direction": "column", padding: "0.9em" } }, jn = { class: "d-elip", style: { "font-size": "0.6em", "line-height": "1.2" } }, Sn = { class: "d-inline", style: { "font-size": "1.7em" } }, On = { class: "b" }, Ln = { class: "mt5", style: { "font-size": "0.6em" } }, Dn = { __name: "icon3", props: { size: { type: String, default: "2x4" }, data: { type: Object, default: () => ({ ...Ra("3") }) } }, setup(e2) {
  let t22 = e2, { countdown: l2, showDate: a2, festivalTitle: n2 } = Va(Ut(t22, "data")), s2 = $o(() => t22.data.repeat === "festival" && n2.value ? n2.value : t22.data.title);
  return (t3, n3) => (Zr(), to(Ya, { data: e2.data, size: e2.size, "frame-class": `icon-size-${e2.size} days-icon ac flex` }, { default: mn(() => [["1x1"].includes(e2.size) ? (Zr(), eo("div", yn2, [io("div", bn, Z(Lt(l2)), 1)])) : ["1x2"].includes(e2.size) ? (Zr(), eo("div", _n, [io("span", null, [io("div", xn, Z(s2.value), 1), io("div", wn, Z(Lt(l2)), 1)])])) : ["2x1"].includes(e2.size) ? (Zr(), eo("div", kn, [io("div", zn, Z(s2.value), 1), io("div", Cn, [uo(Z(Lt(l2)) + " ", 1), n3[0] || (n3[0] = io("em", { class: "f12" }, "天", -1))])])) : (Zr(), eo("div", Mn, [io("div", jn, Z(s2.value), 1), io("p", Sn, [io("span", On, Z(Lt(l2)), 1), n3[1] || (n3[1] = io("i", { class: "f12" }, "天", -1))]), io("p", Ln, Z(Lt(a2)), 1)]))]), _: 1 }, 8, ["data", "size", "frame-class"]));
} }, Pn = /* @__PURE__ */ Object.freeze(Object.defineProperty({ __proto__: null, default: Dn }, Symbol.toStringTag, { value: "Module" })), Tn = { class: "size-full bg-white object-contain", src: "https://files.itab.link/icons/dino.svg", alt: "" }, An = o({}, [["render", function(e2, t22) {
  return Zr(), eo("img", Tn);
}]]), In = /* @__PURE__ */ Object.freeze(Object.defineProperty({ __proto__: null, default: An }, Symbol.toStringTag, { value: "Module" })), En = { viewBox: "0 0 80 120", "aria-hidden": "true" }, $n = ["id"], Yn = ["id"], Vn = ["id"], Hn = ["fill"], Rn = ["clip-path"], Fn = ["y", "fill"], Nn = ["cy"], qn = { name: "drinkWaterCup" }, Zn = o(Object.assign(qn, { props: { percent: { type: Number, default: 0 }, size: { type: String, default: "md" } }, setup(e2) {
  let t22 = e2, l2 = { water: `dw-w-${Math.random().toString(36).slice(2, 8)}`, glass: `dw-g-${Math.random().toString(36).slice(2, 8)}`, clip: `dw-c-${Math.random().toString(36).slice(2, 8)}` }, a2 = "M18 12H62L55 100Q55 108 48 108H32Q25 108 25 100L18 12Z", n2 = $o(() => {
    let e3 = Math.min(100, Math.max(0, t22.percent));
    return e3 <= 0 ? 108 : 108 - 92 * Math.max(8, e3) / 100;
  });
  return (t3, s2) => (Zr(), eo("div", { class: W(["water-cup", [`cup-${e2.size}`, { done: e2.percent >= 100 }]]) }, [(Zr(), eo("svg", En, [io("defs", null, [io("linearGradient", { id: l2.water, x1: "0", y1: "0", x2: "0", y2: "1" }, s2[0] || (s2[0] = [io("stop", { offset: "0%", "stop-color": "#8ec2ff" }, null, -1), io("stop", { offset: "55%", "stop-color": "#5aa0f5" }, null, -1), io("stop", { offset: "100%", "stop-color": "#3883eb" }, null, -1)]), 8, $n), io("linearGradient", { id: l2.glass, x1: "0", y1: "0", x2: "1", y2: "0" }, s2[1] || (s2[1] = [io("stop", { offset: "0%", "stop-color": "#ffffff", "stop-opacity": "0.55" }, null, -1), io("stop", { offset: "35%", "stop-color": "#d7e9ff", "stop-opacity": "0.12" }, null, -1), io("stop", { offset: "100%", "stop-color": "#3883eb", "stop-opacity": "0.08" }, null, -1)]), 8, Yn), io("clipPath", { id: l2.clip }, [io("path", { d: a2 })], 8, Vn)]), s2[6] || (s2[6] = io("ellipse", { class: "cup-shadow", cx: "40", cy: "113", rx: "18", ry: "3.2" }, null, -1)), io("path", { class: "glass-fill", d: a2, fill: `url(#${l2.glass})` }, null, 8, Hn), io("g", { "clip-path": `url(#${l2.clip})` }, [io("rect", { class: "cup-water", x: "12", y: n2.value, width: "56", height: "110", fill: `url(#${l2.water})` }, null, 8, Fn), io("ellipse", { class: "water-surface", cx: "40", cy: n2.value + 3, rx: "20", ry: "4" }, null, 8, Nn), s2[2] || (s2[2] = io("circle", { class: "bubble b1", cx: "28", cy: "78", r: "1.6" }, null, -1)), s2[3] || (s2[3] = io("circle", { class: "bubble b2", cx: "46", cy: "86", r: "1.1" }, null, -1)), s2[4] || (s2[4] = io("circle", { class: "bubble b3", cx: "34", cy: "94", r: "0.8" }, null, -1)), s2[5] || (s2[5] = io("circle", { class: "bubble b4", cx: "50", cy: "72", r: "1.3" }, null, -1))], 8, Rn), io("path", { class: "glass-stroke", d: a2 }), s2[7] || (s2[7] = io("path", { class: "glass-rim", d: "M17.5 12h45" }, null, -1)), s2[8] || (s2[8] = io("path", { class: "glass-base", d: "M27 108h26" }, null, -1)), s2[9] || (s2[9] = io("path", { class: "glass-shine", d: "M24 20c1.2 22 1.6 44 0.4 62" }, null, -1))]))], 2));
} }), [["__scopeId", "data-v-7da4e939"]]);
function Bn(e2, t22 = 200) {
  let l2, a2, n2 = null, s2 = () => {
    let t3 = l2, n3 = a2;
    return l2 = a2 = void 0, e2.apply(n3, t3);
  }, i2 = function(...e3) {
    l2 = e3, a2 = this, n2 != null && clearTimeout(n2), n2 = setTimeout(() => {
      n2 = null, s2();
    }, t22);
  };
  return i2.cancel = () => {
    n2 != null && (clearTimeout(n2), n2 = null), l2 = a2 = void 0;
  }, i2.flush = () => {
    if (n2 != null) return clearTimeout(n2), n2 = null, s2();
  }, i2;
}
var Un = "app-drinkWater", Gn = 30, Wn = { goal: 2e3, cup: 250, current: 0, date: "", remind: !0, paused: !1, interval: 90, startTime: "08:00", endTime: "20:00", quietStart: "12:00", quietEnd: "13:00", lastDrinkAt: 0, lastRemindAt: 0, snoozeUntil: 0, records: [], history: {}, waterKind: "纯净水", unit: "ml", sound: "droplet", remindWay: "both", smartSkip: !0 };
function Jn(e2) {
  return String(e2).padStart(2, "0");
}
function Qn(e2 = /* @__PURE__ */ new Date()) {
  return `${e2.getFullYear()}${Jn(e2.getMonth() + 1)}${Jn(e2.getDate())}`;
}
function Xn2(e2 = /* @__PURE__ */ new Date()) {
  return `${Jn(e2.getHours())}:${Jn(e2.getMinutes())}`;
}
function Kn(e2) {
  let t22 = { ...Wn, ...e2 || {} };
  return Array.isArray(t22.records) || (t22.records = []), t22.history && typeof t22.history == "object" || (t22.history = {}), t22.goal = Math.min(5e3, Math.max(200, Number(t22.goal) || 2e3)), t22.cup = Math.min(1e3, Math.max(50, Number(t22.cup) || 250)), t22.interval = Math.min(180, Math.max(10, Number(t22.interval) || 90)), t22;
}
var es = dt(Kn(f2.get(Un))), ts = Bn(() => {
  f2.set(Un, St(es));
}, 200);
function ls(e2) {
  return typeof e2 == "number" ? { ml: e2, records: [] } : e2 && typeof e2 == "object" ? { ml: Number(e2.ml) || 0, records: Array.isArray(e2.records) ? e2.records : [] } : { ml: 0, records: [] };
}
function as(e2) {
  return e2 === es.date ? es.current || 0 : ls(es.history[e2]).ml;
}
function ns(e2) {
  return e2 === es.date ? es.records : ls(es.history[e2]).records;
}
function ss() {
  let e2 = Qn();
  if (es.date !== e2) {
    if (es.date) {
      es.history[es.date] = { ml: es.current || 0, records: es.records.map((e4) => ({ ...e4 })) };
      let e3 = Object.keys(es.history).sort();
      e3.length > 30 && e3.slice(0, e3.length - 30).forEach((e4) => {
        delete es.history[e4];
      });
    }
    es.date = e2, es.current = 0, es.records = [], es.lastDrinkAt = 0, es.lastRemindAt = Date.now(), es.snoozeUntil = 0, es.paused = !1;
  }
}
Fr(es, ts, { deep: !0 }), ss();
var is = $o(() => es.goal ? Math.min(100, Math.floor(es.current / es.goal * 100)) : 0), os = $o(() => Math.max(0, es.goal - es.current)), rs = $o(() => es.current >= es.goal), cs = $o(() => {
  let e2 = is.value;
  return es.current <= 0 ? "坚持喝水，身体会感谢你！" : e2 >= 100 ? "今日目标已完成，继续保持" : e2 >= 70 ? "快达成目标了，再喝一点" : e2 >= 40 ? "补充得不错，继续加油" : "少量多次，持续补水保持水分好状态";
});
function us(e2) {
  let [t22, l2] = String(e2 || "00:00").split(":").map((e3) => Number(e3) || 0);
  return 60 * t22 + l2;
}
function ds(e2, t22, l2) {
  let a2 = us(t22), n2 = us(l2);
  return a2 === n2 || (a2 < n2 ? e2 >= a2 && e2 < n2 : e2 >= a2 || e2 < n2);
}
var ps = $o(() => {
  if (!es.remind || es.paused || rs.value) return 0;
  let e2 = Math.max(es.lastDrinkAt || 0, es.lastRemindAt || 0, es.snoozeUntil || 0);
  return e2 ? e2 + 60 * es.interval * 1e3 : Date.now();
});
function fs2(e2) {
  let t22 = Math.max(0, Math.round(e2 / 6e4)), l2 = Math.floor(t22 / 60), a2 = t22 % 60;
  return l2 && a2 ? `${l2} 小时 ${a2} 分钟` : l2 ? `${l2} 小时` : `${a2} 分钟`;
}
function ms() {
  if (!es.remind) return "提醒已关闭";
  if (es.paused) return "提醒已暂停";
  if (rs.value) return "今日目标已完成";
  let e2 = ps.value;
  return (function(e3 = /* @__PURE__ */ new Date()) {
    let t22 = 60 * e3.getHours() + e3.getMinutes();
    return !!ds(t22, es.startTime, es.endTime) && !ds(t22, es.quietStart, es.quietEnd);
  })() ? Date.now() >= e2 ? "现在可以喝水了" : `还有 ${fs2(e2 - Date.now())}` : `${es.startTime} 开始提醒`;
}
function vs2(e2, t22) {
  ss();
  let l2 = Math.round(Number(e2) || 0);
  if (l2 <= 0) return;
  let a2 = rs.value;
  es.current += l2, es.lastDrinkAt = Date.now(), es.lastRemindAt = Date.now(), es.snoozeUntil = 0, es.records.unshift({ id: `dw_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`, ml: l2, time: Xn2(), ts: Date.now(), kind: t22 || es.waterKind || "纯净水", type: "drink" }), es.records.length > 80 && (es.records.length = 80), !a2 && rs.value && t(() => import("./vendor-element-plus-CRt18gND-MNDHTQD2.js").then((e3) => e3.al), ["assets/vendor-element-plus-WnleHQiG.css"]).then((e3) => {
    e3.ElMessage.success("今日喝水目标已完成");
  });
}
function gs(e2) {
  let t22 = es.records.findIndex((t3) => t3.id === e2 && t3.type !== "remind");
  if (t22 < 0) return;
  let l2 = es.records[t22];
  es.records.splice(t22, 1), es.current = Math.max(0, es.current - l2.ml);
  let a2 = es.records.find((e3) => e3.type !== "remind");
  es.lastDrinkAt = a2?.ts || 0;
}
function hs2() {
  let e2 = es.records.find((e3) => e3.type !== "remind");
  e2 && gs(e2.id);
}
function ys() {
  es.current = 0, es.records = [], es.lastDrinkAt = 0, es.lastRemindAt = Date.now(), es.snoozeUntil = 0;
}
function bs(e2 = 10) {
  es.snoozeUntil = Date.now() + 60 * e2 * 1e3, es.lastRemindAt = Date.now();
}
function _s() {
  es.paused = !es.paused;
}
var xs = { key: 0, class: "size-full d-flex-center flex-col" }, ws2 = { class: "b mt-1 d-main", style: { "font-size": "0.85em" } }, ks = { key: 1, class: "size-full d-flex-center px-3" }, zs = { class: "ml-3 min-w-0" }, Cs = { class: "b d-main", style: { "font-size": "1.15em" } }, Ms = { key: 2, class: "size-full d-flex-center flex-col" }, js = { class: "b mt-2 d-main", style: { "font-size": "1.05em" } }, Ss = { class: "f12 d-sub" }, Os2 = { key: 3, class: "size-full d-flex px-3 py-2" }, Ls = { class: "d-flex-center flex-col", style: { width: "42%" } }, Ds = { class: "b mt-1 d-main", style: { "font-size": "1.05em" } }, Ps = { class: "f12 font-normal d-sub" }, Ts = { class: "d-icon f16" }, As = { class: "flex-1 min-w-0 pl-2 flex flex-col" }, Is = { class: "flex-1 overflow-hidden" }, Es2 = { key: 0, class: "f12 d-sub mt-2" }, $s = { class: "f12 d-sub mt-auto" }, Ys = { key: 4, class: "size-full d-flex-center flex-col px-2" }, Vs = { class: "b mt-1 d-main", style: { "font-size": "1.15em" } }, Hs = { class: "f12 font-normal d-sub" }, Rs2 = { class: "f12 d-sub d-elip w-full ac" }, Fs = { class: "d-icon f15" }, Ns = { name: "drinkWater-icon" }, qs = o(Object.assign(Ns, { props: { size: { type: String, default: "2x2" }, data: Object }, setup(e2) {
  function t22() {
    vs2(es.cup);
  }
  return (l2, a2) => {
    let n2 = ke2;
    return Zr(), to(n2, null, { default: mn(() => [io("div", { class: W(["drink-icon size-full relative overflow-hidden", [`iconsize-${e2.size}`]]) }, [["1x1"].includes(e2.size) ? (Zr(), eo("div", xs, [lo(Zn, { size: "sm", percent: Lt(is) }, null, 8, ["percent"]), io("p", ws2, Z(Lt(is)) + "%", 1)])) : e2.size === "2x1" ? (Zr(), eo("div", ks, [lo(Zn, { size: "sm", percent: Lt(is) }, null, 8, ["percent"]), io("div", zs, [a2[1] || (a2[1] = io("p", { class: "f12 d-sub" }, "喝水提醒", -1)), io("p", Cs, [uo(Z(Lt(es).current) + "/" + Z(Lt(es).goal) + " ", 1), a2[0] || (a2[0] = io("span", { class: "f12 font-normal d-sub" }, "ml", -1))])])])) : e2.size === "1x2" ? (Zr(), eo("div", Ms, [lo(Zn, { size: "sm", percent: Lt(is) }, null, 8, ["percent"]), io("p", js, Z(Lt(es).current), 1), io("p", Ss, "/ " + Z(Lt(es).goal) + "ml", 1)])) : ["2x4", "medium"].includes(e2.size) ? (Zr(), eo("div", Os2, [io("div", Ls, [lo(Zn, { size: "md", percent: Lt(is) }, null, 8, ["percent"]), io("p", Ds, [uo(Z(Lt(es).current) + " ", 1), io("span", Ps, "/ " + Z(Lt(es).goal) + "ml", 1)]), io("button", { class: "drink-plus", title: "喝一杯", onClick: sl(t22, ["stop"]) }, [io("i", Ts, [lo(Lt(h))]), uo(" " + Z(Lt(es).cup) + "ml ", 1)])]), io("div", As, [a2[2] || (a2[2] = io("p", { class: "b f14 mb-1 d-main" }, "今日记录", -1)), io("ul", Is, [(Zr(!0), eo(Hr, null, Es(Lt(es).records.slice(0, 5), (e3) => (Zr(), eo("li", { key: e3.id, class: "d-flex-between f12 leading-6 d-sub" }, [io("span", null, Z(e3.time), 1), io("span", null, "+" + Z(e3.ml) + "ml", 1)]))), 128)), Lt(es).records.length ? po("", !0) : (Zr(), eo("li", Es2, " 还没有记录 "))]), io("p", $s, Z(Lt(ms)()), 1)])])) : (Zr(), eo("div", Ys, [lo(Zn, { size: "md", percent: Lt(is) }, null, 8, ["percent"]), io("p", Vs, [uo(Z(Lt(es).current) + " ", 1), io("span", Hs, "/ " + Z(Lt(es).goal) + "ml", 1)]), io("p", Rs2, Z(Lt(cs)), 1), io("button", { class: "drink-plus mt-1", title: "喝一杯", onClick: sl(t22, ["stop"]) }, [io("i", Fs, [lo(Lt(h))]), uo(" " + Z(Lt(es).cup) + "ml ", 1)])]))], 2)]), _: 1 });
  };
} }), [["__scopeId", "data-v-4c5c24ac"]]), Zs = /* @__PURE__ */ Object.freeze(Object.defineProperty({ __proto__: null, default: qs }, Symbol.toStringTag, { value: "Module" })), Bs = { class: "app-eat d-flex-center" }, Us = { class: "eat-box ac" }, Gs = { class: "b text-gray-800" }, Ws = /* @__PURE__ */ o({ __name: "Content", setup(e2) {
  let t22 = Et(""), l2 = Et(!1), a2 = $o(() => t22.value && !l2.value ? { text: "换一个", class: "change" } : t22.value && l2.value ? { text: "停下", class: "stop" } : { text: "开始", class: "start" }), n2 = null, s2 = 0;
  function i2() {
    l2.value = !l2.value, l2.value ? (async function() {
      n2 && clearInterval(n2);
      let { foodMenus: e3 } = await t(async () => {
        let { foodMenus: e4 } = await import("./foodMenus-DESI84ow-VS26MD56.js");
        return { foodMenus: e4 };
      }, []), a3 = e3.value.split(" "), i3 = a3.length;
      s2 = 0, n2 = setInterval(async () => {
        let { getRandomInt: e4 } = await t(async () => {
          let { getRandomInt: e5 } = await import("./utils-t0Ul179p-AU4RKFJH.js").then((e6) => e6.p);
          return { getRandomInt: e5 };
        }, ["assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css"]), o2 = e4(i3);
        t22.value = a3[o2], s2++, s2 > 50 && (clearInterval(n2), l2.value = !1);
      }, 60);
    })() : clearInterval(n2);
  }
  return (e3, l3) => (Zr(), eo("div", Bs, [io("div", Us, [io("h1", Gs, Z(t22.value || "今天吃什么"), 1), io("div", { class: W([a2.value.class, "eat-button d-flex-center"]), onClick: l3[0] || (l3[0] = sl((e4) => i2(), ["stop"])) }, [io("span", null, Z(a2.value.text), 1)], 2)])]));
} }, [["__scopeId", "data-v-b4ebaa89"]]), Js = /* @__PURE__ */ Object.freeze(Object.defineProperty({ __proto__: null, default: Ws }, Symbol.toStringTag, { value: "Module" })), Qs = { __name: "icon", setup(e2) {
  function t22() {
  }
  return (e3, l2) => {
    let a2 = ke2;
    return Zr(), to(a2, { confineSize: !1, onResize: t22 }, { default: mn(() => [lo(Ws)]), _: 1 });
  };
} }, Xs = /* @__PURE__ */ Object.freeze(Object.defineProperty({ __proto__: null, default: Qs }, Symbol.toStringTag, { value: "Module" })), Ks = { class: "size-full bg-white object-contain", src: "https://files.itab.link/tools-icon/encryptionTools.svg", alt: "" }, ei = o({}, [["render", function(e2, t22) {
  return Zr(), eo("img", Ks);
}]]), ti = /* @__PURE__ */ Object.freeze(Object.defineProperty({ __proto__: null, default: ei }, Symbol.toStringTag, { value: "Module" })), li = { key: 0, alt: "汇率", class: "block size-full", style: { "background-color": "#e73237", "object-fit": "contain" }, src: "https://files.itab.link/icons/stock.svg" }, ai = { class: "exchangerate-icon-content size-full" }, ni = { class: "d-flex-between icon-update h-[14%] pb-[4%]", style: { "font-size": "0.58em" } }, si = { class: "d-elip" }, ii = { class: "money" }, oi = { class: "exchangerate-icon-item-body d-flex-between w-full" }, ri = { class: "d-elip title d-flex-y shrink-0" }, ci = ["src"], ui = { class: "text-xs", style: { "line-height": "1" } }, di2 = { class: "icon-title" }, pi = { class: "icon-code" }, fi = ["title"], mi = { name: "exchangerate-icon" }, vi = o(Object.assign(mi, { props: { size: String }, setup(t22) {
  let a2 = Et(f2.get("app-exchangerate-icon") || []), n2 = Et(f2.get("app-exchangerate-config") || { money: 100, source: "CNY" }), s2 = t22, i2 = { "1x1": 1, "1x2": 1, "2x1": 1, "2x2": 3, "2x4": 6 }, o2 = $o(() => {
    let e2 = i2[s2.size] || 3;
    return (a2.value || []).slice(0, e2);
  }), r2 = $o(() => {
    let e2 = n2.value.date, t3 = e2 ? new Date(e2) : /* @__PURE__ */ new Date();
    return Number.isNaN(t3.getTime()) ? "" : `${t3.getMonth() + 1}-${t3.getDate()}`;
  }), c2 = Gt();
  function u22(e2) {
    let t3 = String(e2 ?? "").replace(/[^0-9.]/g, ""), l2 = parseFloat(t3);
    return Number.isFinite(l2) ? Math.min(Math.max(l2, 0), 1e15) : 100;
  }
  async function d2() {
    return (await t(async () => {
      let { default: e2 } = await import("./cache-VMWPWM72.js");
      return { default: e2 };
    }, [])).default;
  }
  async function p2(e2) {
    let l2 = await (await d2()).getItem("app-exchangerate-icon");
    if (!e2 && !l2.isExp) return void (l2.data && (a2.value = l2.data));
    let s3 = u22(n2.value.money), i3 = l2.data && l2.data.map((e3) => e3.c).join(",");
    t(() => import("./exchangerate-Ca821UoM-T6MB3GZZ.js"), ["assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css"]).then((e3) => {
      e3.exchangerateQuery({ money: s3, source: n2.value.source, target: i3 }).then((e4) => {
        let t4 = e4.data || [];
        n2.value.date = e4.date, f22(n2.value), m2(t4);
      });
    });
  }
  function f22(t3) {
    f2.set("app-exchangerate-config", t3);
  }
  async function m2(t3) {
    t3 = t3 || [], a2.value = t3, f2.set("app-exchangerate-icon", t3.slice(0, 6)), (await d2()).set("app-exchangerate-icon", t3, 36e5);
  }
  function v2(e2, t3, l2) {
    n2.value.money = u22(t3.money), n2.value.source = t3.source, n2.value.sourceName = t3.sourceName, n2.value.date = t3.date, f22(n2.value), m2(e2), l2 && setTimeout(() => {
      p2(!0);
    }, 500);
  }
  return Fr(() => s2.size, (e2) => {
    ["2x2", "2x4"].includes(e2) && c2(() => p2());
  }, { immediate: !0 }), le.on("app-exchangerate-icon", v2), vs(() => {
    le.off("app-exchangerate-icon", v2);
  }), (e2, l2) => {
    let a3 = ke2;
    return Zr(), to(a3, null, { default: mn(() => [["1x1", "1x2", "2x1"].includes(t22.size) ? (Zr(), eo("img", li)) : (Zr(), eo("div", { key: 1, class: W(["exchangerate-icon size-full reactive d-flex-center", `icon-${t22.size}`]) }, [io("ul", ai, [io("p", ni, [io("span", si, Z(r2.value) + "更新", 1), io("span", ii, Z(n2.value.money) + Z(n2.value.source), 1)]), (Zr(!0), eo(Hr, null, Es(o2.value, (e3) => (Zr(), eo("li", { class: "exchangerate-icon-item", key: e3.c }, [io("p", oi, [io("span", ri, [io("img", { style: { "border-radius": "4px" }, src: `https://files.itab.link/itab/widget/exchangerate/${e3.c}.png`, alt: "", class: "mr-1 size-5" }, null, 8, ci), io("span", ui, [io("p", di2, Z(e3.n), 1), io("p", pi, Z(e3.c), 1)])]), io("span", { class: "al f13 d-hidden", title: e3.v }, Z(e3.v && Number(Number(e3.v).toFixed(2))), 9, fi)])]))), 128))])], 2))]), _: 1 });
  };
} }), [["__scopeId", "data-v-6d58baa0"]]), gi2 = /* @__PURE__ */ Object.freeze(Object.defineProperty({ __proto__: null, default: vi }, Symbol.toStringTag, { value: "Module" }));
function hi(e2, t22 = 100, l2 = t22, s2 = 96) {
  if (!e2) return e2;
  let i2 = Ce(e2);
  return e2 && e2.includes("?t="), i2.split(".").pop() === "svg" || !i2.includes("files.codelife.cc/") && !i2.includes("files.itab.link/") ? e2 : Ie(e2, "x-oss-process", `image/resize,limit_0,m_fill,w_${t22},h_${l2}/quality,q_${s2}/format,webp`);
}
var yi = { key: 0, class: "relative h-full", style: { "z-index": "1" } }, bi = { class: "w-full ac h-full games-body" }, _i = ["title"], xi = ["onClick"], wi = ["src", "alt"], ki = { class: "d-elip mt5", style: { height: "18px" } }, zi = { key: 1, class: "d-flex-center h-full" }, Ci = { class: "d-icon", style: { "font-size": "3em" } }, Mi = /* @__PURE__ */ o({ __name: "icon", props: { size: String }, setup(t22) {
  let l2 = ["2x2", "2x4"], a2 = t22, n2 = $o(() => l2.includes(a2.size)), i2 = Gt();
  function o2() {
    let t3 = f2.get("app-games");
    return Array.isArray(t3) ? t3 : [];
  }
  let r2 = $o(() => a2.size === "2x2" ? 2 : 4), c2 = Tt(o2()), u22 = Tt(null), d2 = $o(() => u22.value ? u22.value.pageList.value : c2.value.slice(0, r2.value));
  function p2() {
    var e2;
    (e2 = u22.value) == null || e2.next();
  }
  function f22() {
    var e2;
    (e2 = u22.value) == null || e2.prev();
  }
  async function m2() {
    let { useGameList: e2 } = await t(async () => {
      let { useGameList: e3 } = await import("./useGameList-D_Fozykn-D3SMF73I.js");
      return { useGameList: e3 };
    }, ["assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css", "assets/IconPlus-B05F9kaq.css"]), t3 = e2(() => a2.size);
    t3.load(), u22.value = t3;
  }
  return Fr(() => a2.size, (e2) => {
    if (l2.includes(e2)) {
      if (u22.value) return u22.value.resetPage(), void u22.value.load();
      c2.value.length || (c2.value = o2()), i2(m2);
    }
  }, { immediate: !0 }), (e2, l3) => (Zr(), eo("div", { class: W(["h-full w-full games-wrap", [`iconsize-${t22.size}`, { "games-wrap-bg": n2.value }]]) }, [n2.value ? (Zr(), eo("div", yi, [io("button", { type: "button", class: "games-btn d-icon games-btn-prev d-flex-center", onClick: sl(f22, ["stop"]) }, [lo(Lt(gt))]), io("button", { type: "button", class: "games-btn d-icon games-btn-next d-flex-center", onClick: sl(p2, ["stop"]) }, [lo(Lt(ht2))]), l3[0] || (l3[0] = io("p", { class: "f14 games-title d-flex-y pl15", style: { height: "24%" } }, "游戏中心", -1)), io("ul", bi, [(Zr(!0), eo(Hr, null, Es(d2.value, (e3) => (Zr(), eo("li", { key: e3._id || e3.link, title: e3.title, class: "games-body-item h-full" }, [io("div", null, [io("div", { class: "games-body-icon w-full", onClick: sl((t3) => {
    var l4;
    ve({ component: "games", _id: (l4 = e3)._id, title: l4.title, icon: l4.icon, link: l4.link, bgColor: l4.bgColor, color: l4.color });
  }, ["stop"]) }, [io("img", { class: "w-full h-full", src: Lt(hi)(e3.icon, 80), alt: e3.title, width: "80", height: "80", loading: "lazy", decoding: "async" }, null, 8, wi)], 8, xi), io("p", ki, Z(e3.title), 1)])], 8, _i))), 128))])])) : (Zr(), eo("div", zi, [io("i", Ci, [lo(Lt(bt), { stroke: 1.5 })])]))], 2));
} }, [["__scopeId", "data-v-2639c8f6"]]), ji = /* @__PURE__ */ Object.freeze(Object.defineProperty({ __proto__: null, default: Mi }, Symbol.toStringTag, { value: "Module" })), Si = { class: "d-progress relative" }, Oi = ["stroke-width"], Li = ["stroke-width"], Di = { class: "absolute top-1/2 left-0 w-full text-center", style: { transform: "translateY(-50%)" } }, Pi = { __name: "d-progress", props: { percentage: { type: Number, default: 0 }, width: { type: String, default: "6.3" } }, setup(e2) {
  let t22 = e2, l2 = Tt(null);
  return Fr(() => t22.percentage, (e3) => {
    on(() => {
      l2.value.querySelector(".d-progress-circle__path").style.strokeDasharray = 289.027 / 100 * e3 + " 289.027";
    });
  }, { immediate: !0 }), (t3, a2) => (Zr(), eo("div", Si, [(Zr(), eo("svg", { class: "w-full h-full", ref_key: "dProgress", ref: l2, viewBox: "0 0 100 100" }, [io("path", { d: "M 50 50 m 0 -46 a 46 46 0 1 1 0 92 a 46 46 0 1 1 0 -92", stroke: "rgba(var(--alpha-color),.1)", "stroke-width": e2.width, fill: "none", style: { "stroke-dasharray": "289.027px, 289.027px", "stroke-dashoffset": "0px" } }, null, 8, Oi), io("path", { class: "d-progress-circle__path", d: " M 50 50 m 0 -46 a 46 46 0 1 1 0 92 a 46 46 0 1 1 0 -92", stroke: "#1890ff", fill: "none", opacity: "1", "stroke-linecap": "round", "stroke-width": e2.width, style: { "stroke-dasharray": "0, 289.027px", "stroke-dashoffset": "0px", transition: "stroke-dasharray 0.6s ease 0s, stroke 0.6s ease 0s, opacity 0.6s ease 0s" } }, null, 8, Li)], 512)), io("span", Di, [Os(t3.$slots, "default")])]));
} }, Ti = { class: "w-full h-full d-flex-center" }, Ai = { key: 0, class: "b f14" }, Ii = { key: 1, class: "d-flex-center" }, Ei = { class: "ml20" }, $i = { class: "f12", style: { "margin-bottom": "0.2em" } }, Yi = { class: "b f14" }, Vi = { key: 2, class: "d-flex-center ac" }, Hi = { class: "mt20" }, Ri = { class: "f12", style: { "margin-bottom": "0.2em" } }, Fi = { class: "b f14" }, Ni = { key: 3, class: "d-flex-center w-full h-full" }, qi2 = { key: 0, class: "checkin-handle" }, Zi = { class: "checkin-progress" }, Bi = { class: "b f30" }, Ui = { class: "f12", style: { "margin-top": "0.2em" } }, Gi = { key: 0, class: "d-flex-y", style: { width: "50%" } }, Wi = { class: "b f30" }, Ji = { style: { "margin-top": "0.2em", "font-size": "0.7em" }, class: "d-elip" }, Qi = /* @__PURE__ */ o({ __name: "icon", props: { size: { type: String, default: "2x2" }, data: { type: Object, default: { title: "每天喝8杯水", target: 8, current: 0, reset: "1" } } }, setup(e2) {
  let t22 = e2;
  if (t22.data.reset) {
    let e3 = u2().format("YYYYMMDD");
    t22.data.date !== e3 && (t22.data.date = e3, t22.data.current = 0);
  }
  let l2 = $o(() => {
    let e3 = Math.floor(t22.data.current / t22.data.target * 100);
    return e3 >= 100 ? 100 : e3;
  }), a2 = Tt("size-3"), n2 = Tt(120);
  function s2(e3) {
    let t3 = e3.height;
    n2.value = t3 ? t3 - 24 : 120, a2.value = t3 > 0 && t3 <= 100 ? "size-1" : "size-2";
  }
  function i2() {
    t22.data.current = 0;
  }
  function o2() {
    t22.data.current = t22.data.current + 1;
  }
  return (a3, n3) => {
    let r2 = ke2;
    return Zr(), to(r2, { onResize: s2 }, { default: mn(() => [io("div", { class: W([e2.size, "checkin-icon"]) }, [io("div", Ti, [["1x1"].includes(e2.size) ? (Zr(), eo("div", Ai, [io("span", null, Z(e2.data.current) + "/" + Z(e2.data.target), 1)])) : ["1x2"].includes(e2.size) ? (Zr(), eo("div", Ii, [lo(Pi, { width: "10", style: { width: "40px", height: "40px" }, percentage: l2.value }, null, 8, ["percentage"]), io("span", Ei, [io("div", $i, Z(e2.data.title), 1), io("div", Yi, Z(e2.data.current) + "/" + Z(e2.data.target), 1)])])) : ["2x1"].includes(e2.size) ? (Zr(), eo("div", Vi, [lo(Pi, { width: "10", style: { width: "40px", height: "40px" }, percentage: l2.value }, null, 8, ["percentage"]), io("span", Hi, [io("div", Ri, Z(e2.data.title), 1), io("div", Fi, Z(e2.data.current) + "/" + Z(e2.data.target), 1)])])) : ["2x2", "small", "medium", "2x4"].includes(t22.size) ? (Zr(), eo("div", Ni, [io("div", { class: W(["habit-progress", `iconsize-${e2.size}`]) }, [lo(Pi, { percentage: l2.value }, { default: mn(() => [["medium", "2x4"].includes(t22.size) ? po("", !0) : (Zr(), eo("div", qi2, [io("span", Zi, [io("div", Bi, Z(e2.data.current) + "/" + Z(e2.data.target), 1), io("div", Ui, Z(e2.data.title), 1)])]))]), _: 1 }, 8, ["percentage"]), ["medium", "2x4"].includes(t22.size) ? (Zr(), eo("span", Gi, [io("div", null, [io("div", Wi, Z(e2.data.current) + "/" + Z(e2.data.target), 1), io("div", Ji, Z(e2.data.title), 1)])])) : po("", !0)], 2)])) : po("", !0), io("i", { class: "checkin-handle-box d-flex-center reset d-icon f16", style: { left: "12%" }, title: "重置", onClick: sl(i2, ["stop"]) }, [lo(Lt(kt))]), io("i", { class: "checkin-handle-box d-flex-center plus d-icon f16", style: { right: "12%" }, title: "+", onClick: sl(o2, ["stop"]) }, [lo(Lt(h))])])], 2)]), _: 1 });
  };
} }, [["__scopeId", "data-v-a40a42b7"]]), Xi2 = /* @__PURE__ */ Object.freeze(Object.defineProperty({ __proto__: null, default: Qi }, Symbol.toStringTag, { value: "Module" })), Ki = { class: "size-full bg-[#4f83f5]", src: "https://files.itab.link/icons/imgCompress.svg", alt: "" }, eo2 = o({}, [["render", function(e2, t22) {
  return Zr(), eo("img", Ki);
}], ["__scopeId", "data-v-3f36698a"]]), to2 = /* @__PURE__ */ Object.freeze(Object.defineProperty({ __proto__: null, default: eo2 }, Symbol.toStringTag, { value: "Module" })), lo2 = { class: "size-full bg-[#3c66ff] object-contain", src: "https://files.itab.link/icons/ip.svg", alt: "" }, ao = o({}, [["render", function(e2, t22) {
  return Zr(), eo("img", lo2);
}]]), no = /* @__PURE__ */ Object.freeze(Object.defineProperty({ __proto__: null, default: ao }, Symbol.toStringTag, { value: "Module" })), so = `<svg width="60" height="40" viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M56.1132 5.74623C57.5146 4.57822 59.6436 5.404 59.9037 7.08086L59.9308 7.42591V32.339C59.93 34.242 57.6075 35.2638 56.1132 34.0187L50.7 29.5027V23.6259L55.3154 27.4758V12.2892L50.7 16.1368V10.2601L56.1132 5.74623Z" fill="url(#paint0_linear_314_1032)"/>\r
<path d="M43.8457 0C47.669 0 50.7692 2.98443 50.7695 6.66602V33.332L50.7598 33.6758C50.5804 37.0844 47.7428 39.8171 44.2031 39.9902L43.8457 40H6.92383L6.56641 39.9902C3.02663 39.8172 0.189155 37.0845 0.00976562 33.6758L0 33.332V11.2871C1.17622 12.6209 2.78841 13.558 4.61523 13.877V33.332C4.61523 34.5593 5.64933 35.5547 6.92383 35.5547H43.8457C45.1202 35.5547 46.1543 34.5593 46.1543 33.332V6.66602C46.154 5.43899 45.12 4.44531 43.8457 4.44531H13.8477C13.5016 2.68874 12.5808 1.1396 11.2891 0H43.8457ZM6 0C9.31371 0 12 2.68629 12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0Z" fill="white"/>\r
<path d="M38.2384 21.3573V27.7005C38.2384 28.5266 37.9656 29.1953 37.42 29.7067C36.8745 30.1985 36.161 30.4443 35.2797 30.4443H33.0136C32.1323 30.4443 31.4188 30.1985 30.8733 29.7067C30.3277 29.1953 30.0549 28.5266 30.0549 27.7005V12.2997C30.0549 11.4736 30.3277 10.8147 30.8733 10.323C31.4188 9.8116 32.1323 9.55591 33.0136 9.55591H35.2797C36.161 9.55591 36.8745 9.8116 37.42 10.323C37.9656 10.8147 38.2384 11.4736 38.2384 12.2997V18.6135H35.2483V12.4472C35.2483 12.3489 35.1958 12.2997 35.0909 12.2997H33.2024C33.0975 12.2997 33.045 12.3489 33.045 12.4472V27.553C33.045 27.6513 33.0975 27.7005 33.2024 27.7005H35.0909C35.1958 27.7005 35.2483 27.6513 35.2483 27.553V21.3573H38.2384Z" fill="url(#paint1_linear_314_1032)"/>\r
<path d="M29.1158 27.5824L28.864 30.3262H21.9711V12.4176V9.67383H29.1158L28.8011 12.4176H24.9612V18.6134H28.4863L28.1716 21.3572H24.9612V27.5824H29.1158Z" fill="url(#paint2_linear_314_1032)"/>\r
<path d="M12.6 9.63159L17.4156 9.67386C18.2969 9.67386 19.0103 9.92955 19.5559 10.4409C20.1014 10.9327 20.3742 11.5916 20.3742 12.4177V21.6522C20.3742 22.085 20.2798 22.4783 20.091 22.8324C19.9021 23.1667 19.6503 23.4519 19.3356 23.688L21.3499 30.3262H18.3284L16.5343 24.3961H15.5901V30.3262H12.6V12.4177L12.6 9.63159ZM17.2268 12.4177H15.5901V21.6522H17.2268C17.3317 21.6522 17.3841 21.6031 17.3841 21.5047V12.5652C17.3841 12.4668 17.3317 12.4177 17.2268 12.4177Z" fill="url(#paint3_linear_314_1032)"/>\r
<path d="M10 6C10 8.20914 8.20914 10 6 10C3.79086 10 2 8.20914 2 6C2 3.79086 3.79086 2 6 2C8.20914 2 10 3.79086 10 6Z" fill="#FF0000"/>\r
<defs>\r
<linearGradient id="paint0_linear_314_1032" x1="53" y1="19" x2="50" y2="19" gradientUnits="userSpaceOnUse">\r
<stop stop-color="white"/>\r
<stop offset="1" stop-color="#545495"/>\r
</linearGradient>\r
<linearGradient id="paint1_linear_314_1032" x1="31.3643" y1="19.3725" x2="29.4343" y2="19.3725" gradientUnits="userSpaceOnUse">\r
<stop stop-color="white"/>\r
<stop offset="1" stop-color="#222246"/>\r
</linearGradient>\r
<linearGradient id="paint2_linear_314_1032" x1="23.1142" y1="19.3795" x2="21.4292" y2="19.3795" gradientUnits="userSpaceOnUse">\r
<stop stop-color="white"/>\r
<stop offset="1" stop-color="#222246"/>\r
</linearGradient>\r
<linearGradient id="paint3_linear_314_1032" x1="14" y1="19.3571" x2="11.9364" y2="19.3571" gradientUnits="userSpaceOnUse">\r
<stop stop-color="white"/>\r
<stop offset="1" stop-color="#222246"/>\r
</linearGradient>\r
</defs>\r
</svg>\r
`, io2 = /* @__PURE__ */ Object.freeze(Object.defineProperty({ __proto__: null, default: so }, Symbol.toStringTag, { value: "Module" })), oo = { class: "h-full d-flex-center ac bg-[#131327]", style: { "font-size": "var(--icon-size)" } }, ro = { __name: "icon", props: { size: String }, setup(e2) {
  let t22 = { "1x1": "0.6em", "1x2": "0.8em", "2x1": "0.6em", "2x2": "1.4em", "2x4": "1.4em" };
  return (l2, a2) => {
    let n2 = v;
    return Zr(), eo("div", oo, [lo(n2, { raw: Lt(so), style: V({ fontSize: t22[e2.size] }) }, null, 8, ["raw", "style"])]);
  };
} }, co = /* @__PURE__ */ Object.freeze(Object.defineProperty({ __proto__: null, default: ro }, Symbol.toStringTag, { value: "Module" })), uo2 = Et("");
function po2(e2) {
  uo2.value = e2 || "";
}
function fo2() {
  let e2 = uo2.value;
  return uo2.value = "", e2;
}
var mo = { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }, vo = o({}, [["render", function(e2, t22) {
  return Zr(), eo("svg", mo, t22[0] || (t22[0] = [io("circle", { cx: "6", cy: "17", r: "3" }, null, -1), io("path", { d: "M9 17v-13h10v7M9 8h10M13 15.5h8m-2 -2l2 2l-2 2M21 20.5h-8m2 -2l-2 2l2 2" }, null, -1)]));
}]]), go = { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }, ho = o({}, [["render", function(e2, t22) {
  return Zr(), eo("svg", go, t22[0] || (t22[0] = [fo('<circle cx="6" cy="17" r="3"></circle><path d="M9 17v-13h10v7M9 8h10"></path><circle cx="14" cy="20" r="1.5"></circle><circle cx="20" cy="20" r="1.5"></circle><path d="M15.1 18.9l5.9 -4.9M18.9 18.9l-5.9 -4.9"></path>', 5)]));
}]]), yo = { class: "flex items-center shrink-0 gap-[0.32em] mb-[0.34em]" }, bo = { class: "grid place-items-center size-[1.35em] shrink-0 text-[#2777ff]" }, _o = { class: "min-w-0 flex-1" }, xo = { class: "grid flex-1 min-h-0 gap-[0.28em] grid-cols-2 grid-rows-2" }, wo = ["title", "onClick"], ko = { key: 1, class: "flex items-center justify-center size-full text-[#2777ff]" }, zo = { name: "mediaBox-icon" }, Co = o(Object.assign(zo, { props: { size: String }, setup(e2) {
  let t22 = [{ id: "video-convert", label: "视频转换", color: "#5b8cff", icon: Mt }, { id: "video-cut", label: "视频剪切", color: "#2ee6d0", icon: zt }, { id: "audio-convert", label: "音频转换", color: "#a78bfa", icon: vo }, { id: "audio-cut", label: "音频剪切", color: "#fb923c", icon: ho }], l2 = e2, a2 = $o(() => l2.size || "1x1"), n2 = $o(() => ["2x2", "2x4"].includes(a2.value)), i2 = $o(() => a2.value === "2x2"), o2 = $o(() => a2.value === "1x2" ? "w-auto h-[72%] aspect-square" : a2.value === "2x1" ? "w-[72%] h-auto aspect-square" : "size-[80%]");
  return (e3, l3) => {
    let a3 = ke2;
    return Zr(), to(a3, null, { default: mn(() => [io("div", { class: W(["size-full overflow-hidden d-label d-bg-panel rounded-(--icon-radius)", n2.value && "flex flex-col box-border px-[0.46em] pt-[0.42em] pb-[0.4em]"]) }, [n2.value ? (Zr(), eo(Hr, { key: 0 }, [io("header", yo, [io("span", bo, [lo(Lt(wt), { class: "size-full" })]), io("div", _o, [l3[0] || (l3[0] = io("div", { class: "text-[0.62em] font-bold leading-[1.15] tracking-wide" }, " 媒体工具箱 ", -1)), io("div", { class: W(["mt-[0.08em] text-[0.38em] leading-[1.2] d-label-2", i2.value && "hidden"]) }, " 本地音视频处理 ", 2)])]), io("div", xo, [(Zr(), eo(Hr, null, Es(t22, (e4) => io("button", { key: e4.id, type: "button", class: W(["mb-tile flex items-center min-w-0 min-h-0 m-0 cursor-pointer appearance-none d-label d-bg-panel border-[1.2px] border-solid border-(--d-card-border-color) rounded-[0.48em] hover:bg-(--d-bg-page)", i2.value ? "flex-col justify-center gap-[0.12em] p-[0.16em_0.12em]" : "gap-[0.22em] pl-[0.32em] pr-[0.28em]"]), title: e4.label, style: V({ "--tile-color": e4.color }), onClick: sl((t3) => (po2(e4.id), void ve({ component: "mediaBox" })), ["stop"]) }, [(Zr(), to(ws(e4.icon), { class: W(["shrink-0 text-(--tile-color)", i2.value ? "size-[1.2em]" : "size-[1.15em]"]) }, null, 8, ["class"])), io("span", { class: W(["min-w-0 overflow-hidden font-semibold leading-[1.2] whitespace-nowrap text-ellipsis", i2.value ? "flex-none w-full text-[0.42em] text-center" : "flex-1 text-[0.5em] text-left"]) }, Z(e4.label), 3), lo(Lt(ht2), { class: W(["size-[0.72em] shrink-0 d-label-3", i2.value && "hidden"]) }, null, 8, ["class"])], 14, wo)), 64))])], 64)) : (Zr(), eo("div", ko, [lo(Lt(wt), { class: W(["block pointer-events-none", o2.value]) }, null, 8, ["class"])]))], 2)]), _: 1 });
  };
} }), [["__scopeId", "data-v-5c39c915"]]), Mo = /* @__PURE__ */ Object.freeze(Object.defineProperty({ __proto__: null, default: Co }, Symbol.toStringTag, { value: "Module" })), jo = { class: "w-full h-full" }, So2 = { key: 0, class: "d-flex-center w-full h-full" }, Oo = { class: "relative", style: { color: "#fff" } }, Lo = { class: "movie-logo d-flex-center" }, Do = { key: 1, class: "relative h-full d-layout", style: { "z-index": "1", "align-items": "end" } }, Po = { class: "f12 ac icon-date d-layout-aside", style: { width: "66px" } }, To = { class: "f40", style: { "line-height": "32px" } }, Ao = { style: { transform: "scale(0.8)" } }, Io = { class: "d-layout-content" }, Eo = { class: "f12 mb5" }, $o2 = { class: "movie-title d-elip", style: { "margin-left": "-4px" } }, Yo = { class: "movie_rating" }, Vo = { class: "inline-block f12", style: { transform: "scale(0.82)" } }, Ho = ["title"], Ro = { key: 2, class: "relative h-full d-flex", style: { "z-index": "1" } }, Fo = { class: "h-full d-flex-y" }, No = { class: "f12" }, qo = ["title"], Zo = { class: "movie_rating inline-block" }, Bo = { class: "inline-block f12", style: { transform: "scale(0.82)" } }, Uo = { key: 3, class: "relative h-full d-flex-x", style: { "z-index": "1" } }, Go = { class: "h-full d-flex f12" }, Wo = ["title"], Jo = { class: "movie_rating d-text-lr", style: { width: "12px", height: "48px", display: "flex", "align-items": "center", "margin-left": "3px" } }, Qo = { class: "inline-block f12", style: { transform: "scale(0.82)" } }, Xo = { name: "yiyan-icon" }, Ko = o(Object.assign(Xo, { props: { size: String }, setup(t22) {
  ml(), f2.get("lunarDate");
  let l2 = u2().format("M月"), a2 = t22, n2 = Tt(f2.get("app-movieCalendar") || {});
  return Fr(() => a2.size, async (t3) => {
    ["1x1"].includes(t3) || n2.value.date && n2.value.date == u2().format("YYYYMMDD") || t(() => import("./movieCalendar-CmdmLVVs-VH3NEA3C.js"), ["assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css"]).then((t4) => {
      t4.todayMovieApi().then((t5) => {
        let l3 = t5.data || {};
        n2.value = l3;
        let a3 = { mov_rating: l3.mov_rating, mov_text: l3.mov_text, mov_title: l3.mov_title, mov_pic: l3.mov_pic, date: l3.date, bgColor: l3.bgColor, color: l3.color };
        f2.set("app-movieCalendar", a3);
      });
    });
  }, { immediate: !0 }), (e2, a3) => (Zr(), eo("div", jo, [io("div", { class: W(["h-full w-full relative bg-blank bg-cover bg-no-repeat bg-center movie-wrap p-2.5", `icon-size-${t22.size}`]), style: V(`background-image:url(${n2.value.mov_pic});color:#${n2.value.color || "fff"}`) }, [io("span", { class: "movie-wrap-mask absolute inset-x-0 inset-y-0", style: V(`background: linear-gradient(0deg, #${n2.value.bgColor}, rgba(0, 0, 0, 0));`) }, null, 4), ["1x1"].includes(t22.size) ? (Zr(), eo("p", So2, [io("i", Oo, [io("div", Lo, Z(Wt.value.DD), 1), a3[0] || (a3[0] = io("svg", { class: "w-full h-full", xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", viewBox: "0 0 512 512" }, [io("path", { d: "M480 128a64 64 0 0 0-64-64h-16V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 0 0 368 48v16H144V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 0 0 112 48v16H96a64 64 0 0 0-64 64v12a4 4 0 0 0 4 4h440a4 4 0 0 0 4-4z", fill: "currentColor" }), io("path", { d: "M32 416a64 64 0 0 0 64 64h320a64 64 0 0 0 64-64V180a4 4 0 0 0-4-4H36a4 4 0 0 0-4 4z", fill: "currentColor" })], -1))])])) : po("", !0), ["2x4", "medium", "2x2", "small"].includes(t22.size) ? (Zr(), eo("div", Do, [io("div", Po, [io("em", To, Z(Wt.value.DD), 1), io("span", Ao, [io("p", null, [io("em", null, Z(Lt(l2)) + "/" + Z(Wt.value.week), 1)])])]), io("div", Io, [io("p", Eo, [io("span", $o2, "《" + Z(n2.value.mov_title) + "》", 1), io("span", Yo, [io("i", Vo, "豆瓣 " + Z(n2.value.mov_rating), 1)])]), io("p", { class: "movie-text f12 overflow-hidden text-ellipsis opacity-90", title: n2.value.mov_text }, Z(n2.value.mov_text), 9, Ho)])])) : ["1x2"].includes(t22.size) ? (Zr(), eo("div", Ro, [io("div", Fo, [io("div", No, [io("p", { class: "mb5 d-elip", title: n2.value.mov_title }, " 《" + Z(n2.value.mov_title) + "》 ", 9, qo), io("span", Zo, [io("i", Bo, "豆瓣 " + Z(n2.value.mov_rating), 1)])])])])) : ["2x1"].includes(t22.size) ? (Zr(), eo("div", Uo, [io("div", Go, [io("p", { class: "mb5 d-text-lr d-hidden", style: { width: "14px" }, title: n2.value.mov_title }, Z(n2.value.mov_title), 9, Wo), io("span", Jo, [io("i", Qo, "豆瓣 " + Z(n2.value.mov_rating), 1)])])])) : po("", !0)], 6)]));
} }), [["__scopeId", "data-v-91198901"]]), er = /* @__PURE__ */ Object.freeze(Object.defineProperty({ __proto__: null, default: Ko }, Symbol.toStringTag, { value: "Module" })), tr = { class: "size-full bg-white object-contain", src: "https://files.itab.link/tools-icon/multiavatar.svg", alt: "" }, lr = o({}, [["render", function(e2, t22) {
  return Zr(), eo("img", tr);
}]]), ar = /* @__PURE__ */ Object.freeze(Object.defineProperty({ __proto__: null, default: lr }, Symbol.toStringTag, { value: "Module" })), nr = "/original/app/muyu/muyu.webp", sr = "app-muyu", ir = "app-muyu-number", or = { number: "app-muyu", audio: "app-muyu-audio" }, rr = { bg: 1, muyu: 1, audio: 0, text: "", auto: !1, interval: 0.5, mode: "no", count: 60, timer: 120 }, cr = "https://files.itab.link/itab/widget/muyu", ur = 5, dr = 4, pr = "壹贰叁肆伍陆柒捌玖拾".split(""), fr = "功德 +1", mr = [{ label: "永不", value: "no" }, { label: "2 min", value: 120 }, { label: "5 min", value: 300 }, { label: "10 min", value: 600 }, { label: "15 min", value: 900 }, { label: "30 min", value: 1800 }, { label: "自定义", value: "custom" }], vr = 150, gr = 500, hr = 10, yr = 150, br = { transform: ["rotate(-27deg) translate(30px, 20px)", "rotate(-60deg) translate(-10px, 50px)", "rotate(-27deg) translate(30px, 20px)"], offset: [0, 0.3, 1], easing: ["ease-in", "ease-out"] };
function _r(e2) {
  return `app/muyu/muyu${Number(e2) || 0}.mp3`;
}
function xr(e2) {
  return `${cr}/view/bg/${e2}.jpg`;
}
function wr(e2) {
  return `${cr}/part/${e2}-1.webp`;
}
function kr(e2) {
  return `${cr}/part/${e2}-2.webp`;
}
function zr(e2) {
  return `${cr}/view/muyu/${e2}.webp`;
}
function Cr(e2) {
  let t22 = Math.max(0, Number(e2) || 0), l2 = Math.floor(t22 / 60), a2 = t22 % 60;
  return `${String(l2).padStart(2, "0")}:${String(a2).padStart(2, "0")}`;
}
var Mr, jr, Sr = -1;
function Or(e2) {
  e2 && (e2.currentTime = 0, e2.play().catch(() => {
  }));
}
function Lr(e2) {
  let t22 = Number(e2) || 0;
  Mr && Sr === t22 || (Mr = new Audio(_r(t22)), Mr.volume = 0.5, Sr = t22), Or(Mr);
}
function Dr(e2) {
  let t22 = Number(e2) || 0;
  jr && (jr.pause(), jr = null), jr = new Audio(_r(t22)), Or(jr);
}
function Pr(e2) {
  let t22 = Et([]), l2 = 0;
  return { labels: t22, pushLabel: function() {
    t22.value.length < e2 && t22.value.push({ id: ++l2 });
  }, removeLabel: function(e3) {
    t22.value = t22.value.filter((t3) => t3.id !== e3);
  } };
}
var Tr = dt({ ...rr }), Ar = Et(0), Ir = !1, Er = null;
function $r() {
  return t(() => import("./cache-VMWPWM72.js"), []).then((e2) => e2.default);
}
function Yr() {
  Ir && $r().then((e2) => {
    e2.set(sr, { ...Tr });
  });
}
var Vr = Bn(function() {
  let e2 = Ar.value;
  $r().then((t22) => {
    t22.set(ir, e2);
  }), le.emit(or.number, e2);
}, 500);
function Hr2() {
  Vr.flush();
}
function Rr() {
  return Er || (Er = $r().then((e2) => Promise.all([e2.get(sr), e2.get(ir)])).then(([e2, t22]) => {
    (function(e3) {
      if (e3 && typeof e3 == "object") {
        for (let t3 of Object.keys(rr)) e3[t3] != null && (Tr[t3] = e3[t3]);
        Tr.timer = Number(Tr.timer) || rr.timer, Tr.interval = Number(Tr.interval) || rr.interval, Tr.audio = Number(Tr.audio) || 0, Tr.count = Number(Tr.count) || rr.count;
      }
    })(e2);
    let l2 = Ar.value;
    Ir = !0, Ar.value = (Number(t22) || 0) + l2;
  }).catch(() => {
    Ir = !0;
  }), Er);
}
function Fr2(e2) {
  Ar.value = Math.max(0, Number(e2) || 0);
}
function Nr() {
  return Ar.value += 1, Ar.value;
}
Fr(Ar, () => {
  Ir && Vr();
}), le.on(or.audio, (e2) => {
  Tr.audio = Number(e2) || 0;
});
var qr = { class: "muyu-icon-content h-full inline-block" }, Zr2 = ["onAnimationend"], Br = { class: "muyu-text f16" }, Ur = { style: { color: "#c29456" } }, Gr = { class: "muyu-body" }, Wr = { key: 0, class: "w-full", src: nr, alt: "" }, Jr = { name: "muyu-icon" }, Qr = o(Object.assign(Jr, { props: { size: String }, setup(e2) {
  let { labels: t22, pushLabel: l2, removeLabel: a2 } = Pr(5);
  function n2() {
    Nr(), l2(), Lr(Tr.audio);
  }
  return fs(Rr), hs(Hr2), (l3, s2) => (Zr(), eo("div", { class: W([`muyu-icon-${e2.size}`, "muyu-icon"]) }, [io("div", qr, [(Zr(!0), eo(Hr, null, Es(Lt(t22), (e3) => (Zr(), eo("div", { class: "muyu-record whitespace-nowrap", key: e3.id, onAnimationend: (t3) => Lt(a2)(e3.id) }, Z(Lt(Tr).text || Lt("功德+1")), 41, Zr2))), 128)), io("div", Br, [io("p", Ur, "已敲" + Z(Lt(Ar)) + "次", 1), s2[0] || (s2[0] = io("p", { style: { color: "#cfa66f" }, class: "f12 muyu-text-sub text-ellipsis overflow-hidden whitespace-nowrap" }, " 木鱼一敲 烦恼丢掉 ", -1))]), io("div", Gr, [io("img", { class: "w-full", src: nr, alt: "", onClick: sl(n2, ["stop"]) })])]), e2.size == "1x1" ? (Zr(), eo("img", Wr)) : po("", !0)], 2));
} }), [["__scopeId", "data-v-7b4dcff2"]]), Xr = /* @__PURE__ */ Object.freeze(Object.defineProperty({ __proto__: null, default: Qr }, Symbol.toStringTag, { value: "Module" })), Kr = { class: "notes-icon-content" }, ec = o(Object.assign({ name: "notes-icon" }, { __name: "icon", props: { size: String }, setup(t22) {
  let l2 = Et(Ee(f2.get("notes"))), a2 = Tt(!1), n2 = null, s2 = !0, c2 = null, u22 = null;
  function d2(e2) {
    s2 && (e2.useNotesStore(), c2 || (c2 = Fr(e2.useNotes(), (e3) => {
      s2 && (l2.value = Ee(e3));
    }, { immediate: !0 }), u22 || (u22 = void 0)));
  }
  function p2(e2) {
    a2.value = e2.height < 80;
  }
  return Gt(() => {
    t(() => import("./store-BkQ4EtcH-EFF7GAGQ.js"), ["assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css"]).then(d2);
  }), vs(() => {
    s2 = !1, c2?.(), c2 = null, u22?.(), u22 = null;
  }), (e2, n3) => {
    let s3 = ke2;
    return Zr(), to(s3, { onResize: p2 }, { default: mn(() => [io("div", { class: W(["notes-icon", `icon-${t22.size}`]) }, [n3[0] || (n3[0] = io("div", { class: "notes-icon-top d-flex-center" }, "备忘录", -1)), io("ul", Kr, [l2.value.length ? (Zr(!0), eo(Hr, { key: 0 }, Es(l2.value.slice(0, 3), (e3) => (Zr(), eo("li", { key: e3.id, class: "bb d-flex-y" }, [yn(io("span", { class: "d-elip" }, Z(e3.title || e3.content || "无标题"), 513), [[di, !a2.value]])]))), 128)) : (Zr(), eo(Hr, { key: 1 }, Es(3, (e3) => io("li", { key: e3, class: "bb" })), 64))])], 2)]), _: 1 });
  };
} }), [["__scopeId", "data-v-15af0c44"]]), tc = /* @__PURE__ */ Object.freeze(Object.defineProperty({ __proto__: null, default: ec }, Symbol.toStringTag, { value: "Module" })), lc = "data:image/svg+xml,%3csvg%20width='52'%20height='52'%20viewBox='0%200%2052%2052'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M32.1391%2033L34.7391%2020H42.6591L42.1391%2022.68H37.3791L36.8591%2025.36H40.8991L40.3791%2028.04H36.3391L35.3391%2033H32.1391Z'%20fill='white'/%3e%3cpath%20d='M26.2622%2020C27.4087%2020%2028.4223%2020.1863%2029.3022%2020.5596C30.1822%2020.9196%2030.8694%2021.4936%2031.3628%2022.2803C31.856%2023.0536%2032.102%2024.0538%2032.102%2025.2803C32.102%2026.5335%2031.9086%2027.6469%2031.522%2028.6201C31.1486%2029.58%2030.629%2030.3868%2029.9624%2031.04C29.2958%2031.68%2028.5292%2032.1667%2027.6626%2032.5C26.796%2032.8333%2025.876%2033%2024.9028%2033H20.5024L23.102%2020H26.2622ZM26.852%2022.0908C26.8518%2021.9795%2026.6923%2021.9603%2026.6655%2022.0684L26.4204%2023.0605C26.0939%2024.3786%2025.0989%2025.4282%2023.8003%2025.8252C23.7202%2025.8497%2023.707%2025.958%2023.7788%2026.001C24.9452%2026.6963%2025.661%2027.9536%2025.6636%2029.3115L25.6655%2030.333C25.6657%2030.4443%2025.825%2030.4642%2025.852%2030.3564L26.0972%2029.3633C26.4237%2028.0452%2027.4187%2026.9955%2028.7173%2026.5986C28.7972%2026.5742%2028.8103%2026.4669%2028.7388%2026.4238C27.5723%2025.7285%2026.8565%2024.4712%2026.854%2023.1133L26.852%2022.0908Z'%20fill='white'/%3e%3cpath%20d='M9.58836%2033L12.1884%2020H16.4684C17.335%2020%2018.115%2020.12%2018.8084%2020.36C19.5017%2020.5867%2020.0484%2020.96%2020.4484%2021.48C20.8617%2022%2021.0684%2022.6933%2021.0684%2023.56C21.0684%2024.5067%2020.9017%2025.3133%2020.5684%2025.98C20.2484%2026.6467%2019.8017%2027.1867%2019.2284%2027.6C18.655%2028%2018.0017%2028.2933%2017.2684%2028.48C16.535%2028.6667%2015.7617%2028.76%2014.9484%2028.76H13.6284L12.7884%2033H9.58836ZM14.1484%2026.24H15.3284C16.155%2026.24%2016.7884%2026.0533%2017.2284%2025.68C17.6817%2025.3067%2017.9084%2024.76%2017.9084%2024.04C17.9084%2023.52%2017.7417%2023.14%2017.4084%2022.9C17.075%2022.6467%2016.615%2022.52%2016.0284%2022.52H14.8684L14.1484%2026.24Z'%20fill='white'/%3e%3c/svg%3e", ac = { class: "d-flex-center h-full" }, nc = ["src"], sc = { name: "aibot-icon" }, ic = o(Object.assign(sc, { props: { size: String }, setup(e2) {
  let t22 = { "1x1": lc, "2x1": lc, "1x2": "/original/assets/PDF-21-CZ-8NfjM.svg", "2x2": "/original/assets/PDF-22-D7P0N7q6.svg", "2x4": "/original/assets/PDF-24-DQQ0HGyC.svg" };
  return (l2, a2) => {
    let n2 = ke2;
    return Zr(), to(n2, { confineSize: !1 }, { default: mn(() => [io("div", { class: W(["h-full w-full pdf-bg text-white text-center", `iconsize-${e2.size}`]) }, [io("div", ac, [io("img", { src: t22[e2.size], class: "w-full h-full object-contain pointer-events-none" }, null, 8, nc)])], 2)]), _: 1 });
  };
} }), [["__scopeId", "data-v-1a649dfc"]]), oc = /* @__PURE__ */ Object.freeze(Object.defineProperty({ __proto__: null, default: ic }, Symbol.toStringTag, { value: "Module" })), rc = { class: "size-full bg-white object-contain" }, cc = o({}, [["render", function(e2, t22) {
  return Zr(), eo("div", rc, t22[0] || (t22[0] = [io("img", { class: "size-full bg-white object-contain", src: "https://files.itab.link/icons/qwertyLearner.svg", alt: "" }, null, -1)]));
}]]), uc = /* @__PURE__ */ Object.freeze(Object.defineProperty({ __proto__: null, default: cc }, Symbol.toStringTag, { value: "Module" })), dc = { class: "size-full bg-white object-contain", src: "https://files.itab.link/icons/relationship.svg", alt: "" }, pc = o({}, [["render", function(e2, t22) {
  return Zr(), eo("img", dc);
}]]), fc = /* @__PURE__ */ Object.freeze(Object.defineProperty({ __proto__: null, default: pc }, Symbol.toStringTag, { value: "Module" })), mc = `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none"\r
    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"\r
    >\r
    <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>\r
    <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path>\r
    <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path>\r
    <path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path>\r
    <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path>\r
    <path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path>\r
    <path d="M19.938 10.5a4 4 0 0 1 .585.396"></path>\r
    <path d="M6 18a4 4 0 0 1-1.967-.516"></path>\r
    <path d="M19.967 17.484A4 4 0 0 1 18 18"></path>\r
</svg>`, vc = ["innerHTML"], gc = { name: "notes-icon" }, hc = o(Object.assign(gc, { props: { size: String }, setup(e2) {
  let t22 = Tt(!1);
  function l2(e3) {
    let l3 = e3.height;
    t22.value = l3 < 80;
  }
  return (t3, a2) => {
    let n2 = ke2;
    return Zr(), to(n2, { onResize: l2 }, { default: mn(() => [io("div", { class: W([`icon-${e2.size}`, "sbti-icon-container inline-flex items-center justify-center mb-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl shadow-xl"]), innerHTML: Lt(mc) }, null, 10, vc)]), _: 1 });
  };
} }), [["__scopeId", "data-v-0f3f1219"]]), yc = /* @__PURE__ */ Object.freeze(Object.defineProperty({ __proto__: null, default: hc }, Symbol.toStringTag, { value: "Module" })), bc = { class: "size-full bg-[#1c2132]", src: "https://files.itab.link/icons/speedtest.svg", alt: "" }, _c = o({}, [["render", function(e2, t22) {
  return Zr(), eo("img", bc);
}]]), xc = /* @__PURE__ */ Object.freeze(Object.defineProperty({ __proto__: null, default: _c }, Symbol.toStringTag, { value: "Module" })), wc = { key: 0, alt: "体育", style: { "background-color": "#eaeee0" }, class: "block w-full h-full", src: "https://files.itab.link/icons/sport.svg" }, kc = { key: 0, class: "sport-title ac" }, zc = { class: "f14 d-main d-elip" }, Cc = { class: "d-sub" }, Mc = { class: "sport-info d-flex-between d-main" }, jc = { class: "flex-1" }, Sc = ["src"], Oc = ["title"], Lc = { class: "b d-sub vsline", style: { "font-size": "20px" } }, Dc = ["href"], Pc = { class: "flex-1" }, Tc = ["src"], Ac = ["title"], Ic = { name: "sport-icon" }, Ec = o(Object.assign(Ic, { props: { size: String }, setup(t22) {
  let l2 = t22, a2 = Tt(f2.get("app-sport-icon") || {});
  return Fr(() => l2.size, async (t3) => {
    if (["1x2", "2x1", "2x2", "2x4"].includes(t3)) {
      let t4 = await t(() => import("./cache-VMWPWM72.js"), []);
      t4 = t4.default;
      let l3 = await t4.getItem("app-sport-icon");
      if (a2.value = l3.data || {}, !l3.isExp) return;
      t(() => import("./sport-B5kTCZhx-PUTVDDN3.js"), ["assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css"]).then((l4) => {
        l4.sportList({ size: 1 }).then((l5) => {
          let n2 = l5.data;
          n2 && (a2.value = n2, t4.set("app-sport-icon", n2, 12e4), f2.set("app-sport-icon", n2));
        });
      });
    }
  }, { immediate: !0 }), (e2, l3) => (Zr(), eo("span", null, [["1x1"].includes(t22.size) ? (Zr(), eo("img", wc)) : (Zr(), eo("div", { key: 1, class: W(["h-full sport-icon w-full", `iconsize-${t22.size}`]) }, [["2x2", "2x4"].includes(t22.size) ? (Zr(), eo("div", kc, [io("div", zc, Z(a2.value.matchName), 1), io("p", Cc, Z(Lt(u2)(a2.value.date).format("MM-DD HH:mm")), 1)])) : po("", !0), io("div", Mc, [io("span", jc, [io("img", { class: "inline-block", src: a2.value.leftLogo, alt: "" }, null, 8, Sc), io("p", { class: "d-elip", title: a2.value.leftName }, Z(a2.value.leftName), 9, Oc)]), io("span", null, [io("p", Lc, Z(a2.value.vsLine), 1), t22.size === "2x4" ? (Zr(), eo("a", { key: 0, onClick: l3[0] || (l3[0] = sl(() => {
  }, ["stop"])), target: "_blank", class: "sport-room-status", href: a2.value.url }, Z(a2.value.matchStatusText), 9, Dc)) : po("", !0)]), io("span", Pc, [io("img", { class: "inline-block", src: a2.value.rightLogo, alt: "" }, null, 8, Tc), io("p", { class: "d-elip", title: a2.value.rightName }, Z(a2.value.rightName), 9, Ac)])])], 2))]));
} }), [["__scopeId", "data-v-1019a674"]]), $c = { name: "sport-icon" }, Yc = o(Object.assign($c, { props: { size: String }, setup: (e2) => (t22, l2) => {
  let a2 = ke2;
  return Zr(), to(a2, { class: "relative group" }, { default: mn(() => [lo(Ec, { size: e2.size }, null, 8, ["size"])]), _: 1 });
} }), [["__scopeId", "data-v-cd9e7237"]]), Vc = /* @__PURE__ */ Object.freeze(Object.defineProperty({ __proto__: null, default: Yc }, Symbol.toStringTag, { value: "Module" }));
function Hc(e2) {
  if (!e2) return "";
  let t22 = e2.MktNum ?? e2.f13, l2 = e2.Code ?? e2.f12;
  return t22 == null || l2 == null || l2 === "" ? "" : `${t22}.${l2}`;
}
var Rc = "229, 53, 61", Fc = "0, 151, 51", Nc = "#e5353d", qc = "#009733";
function Zc(e2) {
  return e2 == 0 || e2 == null || e2 === "" ? "133, 145, 173" : e2 > 0 ? Rc : Fc;
}
function Bc(e2) {
  return `rgb(${Zc(e2)})`;
}
function Uc(e2, t22) {
  return `rgba(${Zc(e2)}, ${t22})`;
}
var Gc = { key: 0, alt: "股票", class: "d-block size-full", style: { "background-color": "#f20009", "object-fit": "contain" }, src: "https://files.itab.link/icons/stock.svg" }, Wc = { class: "d-elip m-0 max-w-[36%] shrink-0 text-center text-[0.7em] font-semibold leading-none" }, Jc = { class: "stock-icon-content size-full" }, Qc = { class: "d-elip title w-1/2" }, Xc = { class: "d-label-2 left" }, Kc = { class: "d-elip ar" }, eu = { class: "d-label-2 right" }, tu = { name: "stock-icon" }, lu = o(Object.assign(tu, { props: { size: String }, setup(e2) {
  let t22 = Xn(() => t(() => import("./Sparkline-DIl1_Crd-AUW5XDWP.js"), ["assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css", "assets/IconPlus-B05F9kaq.css", "assets/Sparkline-md-MTkdY.css"])), l2 = Tt(!1), a2 = ["2x2", "2x4", "small", "medium"], n2 = ["1x2"], s2 = ["1x1", "2x1"], i2 = e2, o2 = Fe(), r2 = $o(() => {
    var e3;
    return s2.includes(i2.size) ? [] : ((e3 = o2.value) == null ? void 0 : e3.list) || [];
  }), g2 = $o(() => i2.size === "2x4" || i2.size === "medium"), h2 = $o(() => n2.includes(i2.size)), y2 = $o(() => a2.includes(i2.size)), b2 = $o(() => s2.includes(i2.size)), _2 = $o(() => {
    return (r2.value || []).slice(0, (e3 = i2.size, a2.includes(e3) ? _e : n2.includes(e3) ? 1 : 0));
    var e3;
  }), x2 = $o(() => _2.value.map(Hc).filter(Boolean)), z2 = $o(() => _2.value[0] || null), C2 = $o(() => !!b2.value || !(!y2.value || _2.value.length) || !(!h2.value || z2.value) || !y2.value && !h2.value), j2 = Gt(), T2 = "", $2 = null, Y2 = null, V2 = !0;
  function R2() {
    return y2.value || h2.value;
  }
  function B2() {
    return $2?.value || [];
  }
  let J2 = null, Q2 = null, X2 = !1;
  function K2() {
    return r2.value.length ? r2.value : B2();
  }
  function le2() {
    J2 && (clearInterval(J2), J2 = null);
  }
  async function ae2() {
    if (!R2() || ke()) return void le2();
    let { shouldAutoPoll: e3 } = await t(async () => {
      let { shouldAutoPoll: e4 } = await import("./poll-Ct5yAqtN-C6NUIP3X.js");
      return { shouldAutoPoll: e4 };
    }, ["assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css", "assets/IconPlus-B05F9kaq.css"]), t3 = e3(K2());
    t3 && !J2 ? J2 = setInterval(async () => {
      if (ke()) return void le2();
      document.visibilityState === "visible" && re2();
      let { shouldAutoPoll: e4 } = await t(async () => {
        let { shouldAutoPoll: e5 } = await import("./poll-Ct5yAqtN-C6NUIP3X.js");
        return { shouldAutoPoll: e5 };
      }, ["assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css", "assets/IconPlus-B05F9kaq.css"]);
      e4(K2()) && !ke() || le2();
    }, 1e4) : t3 || le2();
  }
  function ne2() {
    document.visibilityState !== "visible" || ke() || (re2(), ae2());
  }
  function se2(e3) {
    if (V2 && R2()) {
      if (Array.isArray(e3)) return T2 = B2().map(Hc).join(","), void (X2 && !ke() && ae2());
      T2 = "", X2 && !ke() && (re2(), ae2());
    }
  }
  function ie2(e3) {
    V2 && X2 && (e3 ? le2() : (re2(), ae2()));
  }
  async function oe2() {
    if (!V2 || !R2()) return;
    g2.value && (l2.value = !0);
    let [{ useStocks: e3 }, { default: t3 }] = await Promise.all([t(() => import("./stocks-WZOnV2zD-IZHKI3ON.js"), ["assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css"]), t(() => import("./stocksCache-CNvbf2yR-BUTMMQXS.js").then((e4) => e4.a3), ["assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css"])]);
    var a3;
    V2 && (a3 = { useStocks: e3 }, V2 && ($2 = a3.useStocks()), Y2 || (t3.on(Ae, se2), t3.on(Pe, ie2), Y2 = () => {
      t3.off(Ae, se2), t3.off(Pe, ie2);
    }), !X2 && R2() && (X2 = !0, document.addEventListener("visibilitychange", ne2), Q2 = setInterval(ae2, 6e4), ke() ? le2() : (re2(), ae2()), t(async () => {
      let { ensureHolidayAround: e4 } = await import("./holidays-D2zetp7A-A6HSUQTI.js");
      return { ensureHolidayAround: e4 };
    }, []).then(({ ensureHolidayAround: e4 }) => e4().then(() => {
      ke() || (re2(), ae2());
    }))));
  }
  async function re2() {
    var e3;
    if (!R2() || ke()) return;
    let t3 = B2();
    if (!t3.length) return Be([]), T2 = "", void ae2();
    let { shouldRefresh: l3 } = await t(async () => {
      let { shouldRefresh: e4 } = await import("./poll-Ct5yAqtN-C6NUIP3X.js");
      return { shouldRefresh: e4 };
    }, ["assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css", "assets/IconPlus-B05F9kaq.css"]), a3 = t3.map(Hc), n3 = a3.join(",");
    if (l3({ list: r2.value.length ? r2.value : t3, firstInited: T2, codes: a3 })) {
      if (T2 !== n3) {
        let e4 = Le(), { shouldFetchStocksCache: t4 } = await t(async () => {
          let { shouldFetchStocksCache: e5 } = await import("./stocksCacheFresh-wIIUxcUN-7SCXEFEH.js");
          return { shouldFetchStocksCache: e5 };
        }, ["assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css"]);
        if (!t4(e4)) return T2 = n3, void ae2();
      } else {
        let t4 = Le(), l4 = Date.now() - Number(t4.updatedAt);
        if (Number.isFinite(l4) && l4 <= 1e4 && (e3 = t4.list) != null && e3.length) return void ae2();
      }
      try {
        let e4 = a3.slice(0, _e), { pushListApi: t4 } = await t(async () => {
          let { pushListApi: e5 } = await import("./stock-0m1bz0DG-AEILLFZ3.js");
          return { pushListApi: e5 };
        }, ["assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css"]), l4 = await t4(e4.join(",")), s3 = {};
        for (let a4 of l4.data.diff || []) {
          let e5 = Hc(a4);
          e5 && (s3[e5] = a4);
        }
        let i3 = e4.map((e5) => s3[e5]).filter(Boolean);
        Be(i3), T2 = n3, ae2();
      } catch {
      }
    } else ae2();
  }
  return Fr(() => i2.size, () => {
    if (R2()) return X2 ? (g2.value && (l2.value = !0), void (ke() ? le2() : (re2(), ae2()))) : void j2(oe2);
    le2();
  }, { immediate: !0 }), vs(() => {
    V2 = !1, Y2?.(), Y2 = null, document.removeEventListener("visibilitychange", ne2), le2(), Q2 && clearInterval(Q2);
  }), (a3, n3) => {
    let s3 = ke2;
    return Zr(), to(s3, null, { default: mn(() => {
      var a4, n4, s4, i3, o3, r3;
      return [C2.value ? (Zr(), eo("img", Gc)) : h2.value ? (Zr(), eo("div", { key: 1, class: W(["stock-icon-mini flex size-full flex-row items-center justify-center gap-1.5 px-1.5 text-(--d-label)", `icon-${e2.size}`]) }, [io("p", Wc, Z(((a4 = z2.value) == null ? void 0 : a4.f14) || "-"), 1), io("p", { class: "m-0 shrink-0 text-[0.85em] font-bold leading-none", style: V({ color: Lt(Bc)((n4 = z2.value) == null ? void 0 : n4.f3) }) }, Z(((s4 = z2.value) == null ? void 0 : s4.f2) ?? "-"), 5), io("p", { class: "m-0 shrink-0 text-[0.65em] font-semibold leading-none", style: V({ color: Lt(Bc)((i3 = z2.value) == null ? void 0 : i3.f3) }) }, [yn(io("i", null, "+", 512), [[di, ((o3 = z2.value) == null ? void 0 : o3.f3) > 0]]), uo(Z(((r3 = z2.value) == null ? void 0 : r3.f3) ?? "-") + "% ", 1)], 4)], 2)) : (Zr(), eo("div", { key: 2, class: W(["stock-icon flex items-center justify-center relative size-full text-(--d-label)", `icon-${e2.size}`]) }, [io("ul", Jc, [(Zr(!0), eo(Hr, null, Es(_2.value, (e3) => (Zr(), eo("li", { class: "d-flex-y leading-4", key: Lt(Hc)(e3) }, [io("span", Qc, [io("p", null, Z(e3 && e3.f14), 1), io("p", Xc, Z(e3 && e3.f12), 1)]), g2.value && l2.value ? (Zr(), to(Lt(t22), { key: 0, item: e3, "keep-keys": x2.value }, null, 8, ["item", "keep-keys"])) : po("", !0), io("span", Kc, [io("p", { class: "percent d-inline b", style: V({ color: Lt(Bc)(e3.f3) }) }, Z(e3 && e3.f3) + "% ", 5), io("p", eu, Z(e3 && e3.f2), 1)])]))), 128))])], 2))];
    }), _: 1 });
  };
} }), [["__scopeId", "data-v-653d78c3"]]), au = /* @__PURE__ */ Object.freeze(Object.defineProperty({ __proto__: null, default: lu }, Symbol.toStringTag, { value: "Module" })), nu = { class: "size-full bg-[#62e4b4] object-contain", src: "https://files.itab.link/icons/timestamp.svg", alt: "" }, su = o({}, [["render", function(e2, t22) {
  return Zr(), eo("img", nu);
}]]), iu = /* @__PURE__ */ Object.freeze(Object.defineProperty({ __proto__: null, default: su }, Symbol.toStringTag, { value: "Module" })), ou = { class: "d-icon f12", style: { "vertical-align": "-2px" } }, ru = { key: 1, class: "d-flex-center w-full h-full" }, cu = { key: 2, class: "relative h-full d-flex-y", style: { "z-index": "1" } }, uu = { class: "content" }, du = { class: "mt5", style: { color: "rgba(255, 255, 255, 0.7)" } }, pu = ["src"], fu = { __name: "icon", props: { size: String }, setup(t22) {
  let l2 = t22, a2 = Tt(f2.get("app-todayEnglish") || {}), n2 = Tt(!1), s2 = Tt(null);
  function i2() {
    n2.value = !n2.value, n2.value ? (s2.value.load(), s2.value.play()) : s2.value.pause();
  }
  function o2(e2) {
    n2.value = !1;
  }
  return Fr(() => l2.size, async (t3) => {
    ["2x2", "2x4"].includes(t3) && (a2.value.dateline && a2.value.dateline == u2().format("YYYY-MM-DD") || t(() => import("./todayEnglish-ejkQOfY7-B2U6YUZO.js"), ["assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css"]).then((t4) => {
      t4.todayEnglishApi().then((t5) => {
        let l3 = t5.data || {};
        a2.value = l3;
        let n3 = { dateline: l3.dateline, content: l3.content, note: l3.note, picture2: l3.picture2, picture: l3.picture, tts: l3.tts };
        f2.set("app-todayEnglish", n3);
      });
    }));
  }, { immediate: !0 }), (e2, l3) => {
    let r2 = ke2;
    return Zr(), to(r2, null, { default: mn(() => [io("div", { class: W(["relative text-white bg-black english-wrap h-full", `icon-size-${t22.size}`]), style: { padding: "12px" } }, [["2x4", "medium", "2x2", "small"].includes(t22.size) ? (Zr(), eo("p", { key: 0, class: "absolute f12", onClick: sl(i2, ["stop"]), style: { transform: "scale(0.84)", right: "10px", top: "10px", color: "rgba(255, 255, 255, 0.5)", "z-index": "2" } }, [l3[0] || (l3[0] = uo(" 跟读 ")), io("i", ou, [(Zr(), to(ws(n2.value ? Lt(jt2) : Lt(St2))))])])) : po("", !0), io("span", { class: "english-bg absolute inset-x-0 inset-y-0 opacity-30 bg-cover bg-no-repeat bg-center", style: V(`background-image:url(${a2.value.picture});`) }, null, 4), ["1x1", "1x2", "2x1"].includes(t22.size) ? (Zr(), eo("p", ru, l3[1] || (l3[1] = [io("i", { class: "d-icon", style: { "font-size": "1.4em", color: "#fff" } }, [io("svg", { class: "size-[1em]", xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", viewBox: "0 0 48 48" }, [io("g", { fill: "none" }, [io("path", { d: "M20 8c1.576 0 2.997.663 4 1.725A5.485 5.485 0 0 1 28 8h13a3 3 0 0 1 3 3v18a6.992 6.992 0 0 0-3-5.745V11H28a2.5 2.5 0 0 0-2.5 2.5v21c0 .593.206 1.137.551 1.566c.133 1.381.52 2.687 1.117 3.871A5.488 5.488 0 0 1 24 38.275A5.485 5.485 0 0 1 20 40H7a3 3 0 0 1-3-3V11a3 3 0 0 1 3-3h13zm2.5 26.5v-21A2.5 2.5 0 0 0 20 11H7v26h13a2.5 2.5 0 0 0 2.5-2.5zm9.916 2.5A4.983 4.983 0 0 1 32 35v-6a5 5 0 0 1 10 0v6a5 5 0 0 1-9.584 2zm-4.193 0A9.033 9.033 0 0 1 28 35a1 1 0 1 1 2 0a6.985 6.985 0 0 0 2.101 5A6.977 6.977 0 0 0 37 42a6.98 6.98 0 0 0 5.29-2.415A6.973 6.973 0 0 0 44 35a1 1 0 1 1 2 0c0 4.633-3.5 8.448-8 8.945V45a1 1 0 1 1-2 0v-1.055A8.997 8.997 0 0 1 28.223 37z", fill: "currentColor" })])])], -1)]))) : po("", !0), ["2x4", "medium", "2x2", "small"].includes(t22.size) ? (Zr(), eo("div", cu, [io("div", { class: W(t22.size == "2x2" ? "f12" : "f14") }, [io("p", uu, Z(a2.value.content), 1), io("p", du, Z(a2.value.note), 1)], 2)])) : po("", !0)], 2), io("audio", { onEnded: o2, class: "d-hidden", ref_key: "refAudio", ref: s2 }, [io("source", { src: a2.value.tts }, null, 8, pu)], 544)]), _: 1 });
  };
} }, mu = /* @__PURE__ */ Object.freeze(Object.defineProperty({ __proto__: null, default: fu }, Symbol.toStringTag, { value: "Module" })), vu = { width: "700px", height: "226px", viewBox: "0 0 700 226", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink" }, gu = { id: "画板", stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" }, hu = ["fill"], yu = ["fill"], bu = ["fill"], _u = { __name: "bg", emits: ["color"], setup(e2, { emit: t22 }) {
  let l2 = t22, a2 = k(["#ad5877", "#f07049", "#77616b", "#535d57", "#835f5b", "#9f6ea2", "#ae7a5d", "#a58e51", "#7b9bb5", "#5d9e8d", "#cb6a7f", "#5d97c5", "#568e71", "#d43747"]);
  on(() => {
    l2("color", a2);
  });
  let n2 = Et(a2);
  return (e3, t3) => (Zr(), eo("svg", vu, [t3[0] || (t3[0] = io("title", null, "画板", -1)), io("g", gu, [io("path", { d: "M1310.09105,191.626557 C1496.65509,191.626557 1770.14929,157.346326 1920,106.258614 L1920,226.585567 C1920,226.585567 57.7507064,226.769694 1.29607535,226.778064 L0,226.778064 C0.301412873,150.421181 0.452119309,112.242739 0.452119309,112.242739 C402.829314,254.28206 430.581953,106.258614 671.986104,106.258614 C913.390256,106.258614 1123.52701,191.626557 1310.09105,191.626557 Z", id: "路径-1", "fill-opacity": "0.6", fill: n2.value }, null, 8, hu), io("path", { d: "M0.0139194415,226.56425 C0.0139194415,207.632936 0.00602482649,190.017506 -0.00976440346,173.717958 C-0.00976440346,173.717958 64.0945019,127.498953 182.10043,132.182456 C300.106358,136.865959 566.945531,199.128662 690.656287,199.128662 C926.193135,199.128662 1181.88325,106.258614 1429.28183,106.258614 C1676.68041,106.258614 1762.21292,199.128662 1920,132.182456 C1920,132.182456 1920,163.707219 1920,226.756746 L1918.70393,226.756746 C1862.24971,226.748377 0.0139194415,226.56425 0.0139194415,226.56425 Z", id: "路径-1", "fill-opacity": "0.6", fill: n2.value }, null, 8, yu), io("path", { d: "M1463.25587,166.368856 C1551.98939,166.368856 1579.00033,142.163535 1682.98644,125.993122 C1786.97255,109.822709 1903.42761,144.008202 1920,142.125085 L1920,226.246611 C1920,226.246611 57.7382953,226.430738 1.31380552,226.439107 L0,226.439107 C0.875870348,212.023153 1.31380552,204.815176 1.31380552,204.815176 C1.31380552,204.815176 171.201223,92.2827368 319.815615,99.6364213 C498.755382,108.490655 535.30872,172.276704 680.584032,172.276704 C825.859343,172.276704 892.163947,69.0953634 1074.42656,72.7600803 C1256.68917,76.4247971 1374.52235,166.368856 1463.25587,166.368856 Z", id: "路径-1", "fill-opacity": "0.3", fill: n2.value }, null, 8, bu)])]));
} }, xu = { key: 0, alt: "今日诗词", class: "block w-full h-full object-contain", style: { "background-color": "#093744" }, src: "https://files.itab.link/icons/todayShici.svg" }, wu = { class: "h-full d-flex-center relative", style: { "z-index": "1" } }, ku = { class: "shici-body w-full" }, zu = { class: "shici-text dark:text-white" }, Cu = { name: "yiyan-icon" }, Mu = o(Object.assign(Cu, { props: { size: String }, setup(t22) {
  gi((e2) => ({ "41b0bf6b": n2.value }));
  let l2 = t22, a2 = Tt(f2.get("app-todayShici") || {}), n2 = Et();
  return Fr(() => l2.size, async (t3) => {
    ["1x1"].includes(t3) || a2.value.date && a2.value.date == u2().format("YYYYMMDD") || t(() => import("./todayShici-CYTSnkfz-VCAHXWIP.js"), ["assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css"]).then((t4) => {
      t4.todayShiciApi().then((t5) => {
        let l3 = t5.data || {};
        if (l3.date = u2().format("YYYYMMDD"), l3.content) {
          a2.value = l3;
          let t6 = { quotes: l3.quotes, dynasty: l3.dynasty, title: l3.title, author: l3.author, date: l3.date };
          f2.set("app-todayShici", t6), t(() => import("./cache-VMWPWM72.js"), []).then((e2) => {
            e2.default.set("app-todayShici", l3);
          });
        }
      });
    });
  }, { immediate: !0 }), (e2, l3) => {
    let s2 = ke2;
    return Zr(), to(s2, null, { default: mn(() => [["1x1"].includes(t22.size) ? (Zr(), eo("img", xu)) : (Zr(), eo("div", { key: 1, class: W(["h-full w-full shici-wrap relative text-gray-700 dark:text-white", `iconsize-${t22.size}`]), style: { padding: "10px" } }, [lo(_u, { class: "app-bg left-0 absolute w-full h-auto", onColor: l3[0] || (l3[0] = (e3) => n2.value = e3) }), io("div", wu, [io("div", ku, [io("p", zu, Z(a2.value.quotes), 1), yn(io("p", { style: { "font-size": "0.57em" }, class: "mt5 text-gray-400 d-elip" }, Z(a2.value.title) + " · " + Z(a2.value.author), 513), [[di, ["small", "medium", "2x2", "2x4"].includes(t22.size)]])])])], 2))]), _: 1 });
  };
} }), [["__scopeId", "data-v-2e277507"]]), ju = /* @__PURE__ */ Object.freeze(Object.defineProperty({ __proto__: null, default: Mu }, Symbol.toStringTag, { value: "Module" })), Su = { key: 0, alt: "ToDo", class: "block size-full object-contain bg-[#2066cc]", src: "https://files.itab.link/icons/todo.svg" }, Ou = { key: 1, class: "size-full" }, Lu = { class: "d-layout size-full text-(--d-label)" }, Du = { key: 0, class: "d-layout-aside relative h-full w-[30%] bg-(--d-bg-inset) p15" }, Pu = { class: "f22" }, Tu = { class: "d-flex-center absolute bottom-[15px] size-7 rounded-full bg-[#3159ff] text-[22px] text-white" }, Au = { class: "d-icon f16" }, Iu = { class: "d-layout-content" }, Eu = { key: 0, class: "d-flex-y f12 b h-[16%] px-[0.7em] text-[#346efd]" }, $u = { key: 1, class: "--d-label-2 f12 ml-2 mt-2" }, Yu = ["onClick"], Vu = { class: "d-elip d-layout-content" }, Hu = { name: "todo-icon" }, Ru = o(Object.assign(Hu, { props: { size: String }, setup(t22) {
  let a2 = Et(Ee(f2.get("todo"))), n2 = t22, s2 = !0, o2 = null;
  function r2(e2) {
    s2 && (e2.useTodoStore(), o2 || (o2 = Fr(e2.useTodo(), (e3) => {
      s2 && (a2.value = Ee(e3));
    }, { immediate: !0 })));
  }
  Gt(() => {
    t(() => import("./store-DQmDOK8m-N7ZPZ5Z2.js").then((e2) => e2.b), ["assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css"]).then(r2);
  }), vs(() => {
    s2 = !1, o2?.(), o2 = null;
  });
  let c2 = $o(() => ["1x1", "1x2", "2x1"].includes(n2.size)), u22 = $o(() => ["2x4", "medium"].includes(n2.size)), d2 = $o(() => ["small", "2x2"].includes(n2.size)), p2 = $o(() => (a2.value || []).filter((e2) => !e2.done).length), f22 = $o(() => {
    let e2 = d2.value ? 4 : 5;
    return (a2.value || []).filter((e3) => !e3.done).slice(0, e2);
  });
  return (e2, a3) => {
    let n3 = ke2;
    return Zr(), to(n3, null, { default: mn(() => [io("div", { class: W([t22.size, "todo-icon d-flex-center relative size-full bg-center bg-cover bg-(--d-bg-panel) text-(--d-label)"]) }, [c2.value ? (Zr(), eo("img", Su)) : (Zr(), eo("div", Ou, [io("ul", Lu, [u22.value ? (Zr(), eo("div", Du, [io("span", Pu, Z(p2.value), 1), a3[4] || (a3[4] = io("p", { class: "--d-label-2 f12" }, "待办事项", -1)), io("span", Tu, [io("i", Au, [lo(Lt(Lt2))])])])) : po("", !0), io("div", Iu, [d2.value ? (Zr(), eo("div", Eu, " 待办事项(" + Z(p2.value) + ") ", 1)) : po("", !0), f22.value.length ? (Zr(!0), eo(Hr, { key: 2 }, Es(f22.value, (e3) => (Zr(), eo("li", { key: e3.id || e3.ct, class: "d-layout box-border h-1/5 items-center px-[0.8em] text-[0.62em]" }, [io("button", { type: "button", class: "todo-widget-check relative z-1 mr-1 inline-flex size-3.5 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-[3px] p-0", title: "完成", onClick: sl((t3) => (function(e4) {
      e4 && t(() => import("./store-DQmDOK8m-N7ZPZ5Z2.js").then((e5) => e5.b), ["assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css"]).then((t4) => {
        s2 ? r2(t4) : t4.useTodoStore(), le.emit("app-todo-check", { id: e4.id, ct: e4.ct, done: !0 });
      });
    })(e3), ["stop"]), onMousedown: a3[0] || (a3[0] = sl(() => {
    }, ["stop"])), onMouseup: a3[1] || (a3[1] = sl(() => {
    }, ["stop"])), onPointerdown: a3[2] || (a3[2] = sl(() => {
    }, ["stop"])), onTouchstart: a3[3] || (a3[3] = sl(() => {
    }, ["stop"])) }, [lo(Lt(e), { class: "todo-widget-check-icon block size-2.5 shrink-0", stroke: 2.4 })], 40, Yu), io("span", Vu, Z(e3 && e3.content), 1)]))), 128)) : (Zr(), eo("div", $u, " 暂无待办 "))])])]))], 2)]), _: 1 });
  };
} }), [["__scopeId", "data-v-21d0183a"]]), Fu = /* @__PURE__ */ Object.freeze(Object.defineProperty({ __proto__: null, default: Ru }, Symbol.toStringTag, { value: "Module" })), Nu = ht({ timeRemaining: 25, showTime: "25:00", status: "stop", percentage: 0, progress: 0, isMute: !1, volume: 80 }), qu = Et({ ...t2 }), Zu = Et(!1), Bu = !1, Uu = null;
function Gu(e2, t22) {
  Uu ? Uu(e2, t22) : t(() => import("./badge-F1n9rTg1-5P2V67BI.js"), []).then((l2) => {
    Uu = l2.syncTomatoBadge, Uu(e2, t22);
  });
}
function Wu(e2, t22) {
  var l2, a2;
  if (Bu = !0, Nu.timeRemaining = e2.durationMin, Nu.status = e2.status, Nu.showTime = t22.showTime, Nu.percentage = t22.percentage, Nu.progress = t22.remaining, Nu.isMute = !!e2.isMute, Nu.volume = e2.volume ?? 80, e2.audio) {
    let t3 = qu.value, l3 = e2.audio;
    t3?.type === l3.type && t3?.n === l3.n && t3?.m === l3.m || (qu.value = l3);
  }
  if (Bu = !1, e2.status !== "play" && (Zu.value = !1), e2.status === "play") {
    let n2 = ((l2 = e2.audio) == null ? void 0 : l2.n) || ((a2 = qu.value) == null ? void 0 : a2.n) || "番茄";
    document.title = `${n2}:${t22.showTime}`;
  } else e2.status === "stop" && (document.title = "新标签页");
  Gu(e2.status, t22.remaining);
}
var Ju = (f() ? t(() => import("./ext-DJeda4n_-BHKK5AB6.js"), ["assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css"]) : t(() => import("./web-D0ZlR7Ah-HPO7CDI5.js"), [])).then((e2) => e2.init({ onChange: Wu, onSoundBlocked: (e3) => {
  Zu.value = e3;
} })).then((e2) => e2).catch((e2) => {
  throw e2;
});
function Qu() {
  return Ju.then(() => {
  }, () => {
  });
}
function Xu(e2) {
  return Ju.then(e2);
}
var Ku = ["notifications", "offscreen", "alarms"];
function ed() {
  let e2 = (typeof Notification < "u" && Notification.permission === "default" && Notification.requestPermission().catch(() => {
  }), f() && (l2 = (t22 = globalThis.chrome) == null ? void 0 : t22.permissions) != null && l2.request ? new Promise((e3) => {
    chrome.permissions.request({ permissions: Ku }, (t3) => {
      let l3 = !!t3 && !chrome.runtime.lastError;
      e3({ notifications: l3, offscreen: l3, alarms: l3 });
    });
  }) : t(() => import("./isPer-CmjOqYyQ-77OQY444.js"), ["assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css"]).then((e3) => e3.requestTomatoExtPermissions()));
  var t22, l2;
  Ju.then(async (t3) => {
    var l3;
    let a2 = await e2;
    if (f() && a2.offscreen) try {
      let { default: e3, waitForOffscreenReady: t4 } = await t(async () => {
        let { default: e4, waitForOffscreenReady: t5 } = await import("./createOffscreen-BqZv32hL-CY6B4B3C.js");
        return { default: e4, waitForOffscreenReady: t5 };
      }, []), l4 = await e3();
      await t4(l4);
    } catch {
    }
    if (t3.start(), f()) {
      let e3 = (l3 = t3.getSnapshot) == null ? void 0 : l3.call(t3);
      if (e3) {
        let t4 = c(e3);
        Gu(e3.status, t4.remaining);
      }
    }
  });
}
function td() {
  Ju.then((e2) => e2.stop());
}
function ld() {
  Ju.then((e2) => e2.pause());
}
function ad() {
  Ju.then((e2) => {
    var t22;
    return (t22 = e2.resumeSound) == null ? void 0 : t22.call(e2);
  });
}
Fr(() => Nu.timeRemaining, (e2) => {
  Bu || Ju.then((t22) => t22.setDuration(Number(e2) || 25));
}, { flush: "sync" });
var nd = { key: 0, class: "d-flex-center h-full" }, sd = { class: "b time" }, id = { key: 1, class: "d-flex-center h-full w-full pt20 pb20 tomato-icon-split" }, od = { class: "f30" }, rd = { class: "progress-box h-full w-full d-flex-center p-3 absolute inset-0" }, cd = { class: "grid absolute inset-0 time" }, ud = { key: 0, class: "b time" }, dd = { class: "mt-2 tomato-btn-body" }, pd = { class: "flex items-center justify-center h-full" }, fd = { class: "d-icon" }, md = { class: "d-icon" }, vd = { class: "d-icon" }, gd = { name: "tomato-icon" }, hd = o(Object.assign(gd, { props: { size: String, data: { type: Object, default: () => ({ n: "工作", c: "#25b184" }) } }, setup(e2) {
  let t22 = Xn(() => t(() => import("./ProgressBar-WZ5SZ0C6-G7DJTGVO.js"), ["assets/tailwind-rIhkj3gK.css", "assets/ProgressBar-B7DIAkyM.css"])), l2 = Xn(() => t(() => import("./BgMask-1dwSfhI--XCDN6NWW.js"), ["assets/vendor-element-plus-WnleHQiG.css", "assets/tailwind-rIhkj3gK.css", "assets/VolumeSet-Bi5wNP2R.css", "assets/utils-CXX6ZX7A.css", "assets/IconPlus-B05F9kaq.css", "assets/BgMask-BqvumyAQ.css"])), a2 = Xn(() => t(() => import("./VolumeSet-CLnv4cyK-YJOS2ELX.js").then((e3) => e3.a), ["assets/vendor-element-plus-WnleHQiG.css", "assets/tailwind-rIhkj3gK.css", "assets/VolumeSet-Bi5wNP2R.css"])), n2 = e2, s2 = $o(() => ["1x1", "1x2"].includes(n2.size)), i2 = $o(() => n2.size === "2x1"), o2 = $o(() => ["2x2", "2x4"].includes(n2.size)), r2 = $o(() => ["1x1", "1x2", "2x1"].includes(n2.size)), c2 = $o(() => String(Nu.showTime || "00:00").split(":"));
  return (n3, u22) => {
    let d2 = ke2;
    return Zr(), to(d2, { confineSize: !1 }, { default: mn(() => [io("div", { class: W(["h-full w-full tomato-icon-wrap text-white text-center relative overflow-hidden", `iconsize-${e2.size}`]) }, [lo(Lt(l2), { size: e2.size }, null, 8, ["size"]), s2.value ? (Zr(), eo("div", nd, [io("p", sd, [io("time", null, Z(Lt(Nu).showTime), 1)])])) : i2.value ? (Zr(), eo("div", id, [io("div", od, [io("p", null, Z(c2.value[0]), 1), io("p", null, Z(c2.value[1]), 1)])])) : po("", !0), io("div", rd, [o2.value ? (Zr(), to(Lt(t22), { key: 0, color: "rgba(255,255,255,.4)", class: "w-full h-full z-10 tomato-icon-ring", percentage: Lt(Nu).percentage }, null, 8, ["percentage"])) : po("", !0), io("div", cd, [io("span", { class: W(["relative z-10 w-full", { "h-full": r2.value, "place-self-center": o2.value }]) }, [o2.value ? (Zr(), eo("p", ud, [io("time", null, Z(Lt(Nu).showTime), 1)])) : po("", !0), Lt(Zu) && Lt(Nu).status === "play" && o2.value ? (Zr(), eo("p", { key: 1, class: "tomato-sound-hint", onClick: u22[0] || (u22[0] = sl((...e3) => Lt(ad) && Lt(ad)(...e3), ["stop"])) }, " 点击恢复声音 ")) : po("", !0), io("span", dd, [io("div", pd, [Lt(Nu).status !== "play" ? (Zr(), eo("button", { key: 0, type: "button", title: "开始", class: "tomato-btn", onClick: u22[1] || (u22[1] = sl((e3) => Lt(ed)(), ["stop"])) }, [io("i", fd, [lo(Lt(St2))])])) : po("", !0), Lt(Nu).status === "play" ? (Zr(), eo("button", { key: 1, type: "button", title: "暂停", class: "tomato-btn", onClick: u22[2] || (u22[2] = sl((e3) => Lt(ld)(), ["stop"])) }, [io("i", md, [lo(Lt(jt2))])])) : po("", !0), Lt(Nu).status !== "stop" ? (Zr(), eo("button", { key: 2, type: "button", title: "停止", class: "tomato-btn", onClick: u22[3] || (u22[3] = sl((e3) => Lt(td)(), ["stop"])) }, [io("i", vd, [lo(Lt(Ot))])])) : po("", !0)])])], 2)])]), o2.value ? (Zr(), eo("div", { key: 2, class: "absolute bottom-1.5 left-1.5 z-30 text-white/90 opacity-50 transition-opacity hover:opacity-100", onClick: u22[4] || (u22[4] = sl(() => {
    }, ["stop"])) }, [lo(Lt(a2), { compact: "" })])) : po("", !0)], 2)]), _: 1 });
  };
} }), [["__scopeId", "data-v-81567201"]]), yd = /* @__PURE__ */ Object.freeze(Object.defineProperty({ __proto__: null, default: hd }, Symbol.toStringTag, { value: "Module" })), bd = { key: 0, alt: "热搜", class: "topsearch-logo block size-full object-contain", src: "https://files.itab.link/icons/topsearch.svg" }, _d = { class: "topsearch-icon-top" }, xd = ["onMouseenter"], wd = ["title"], kd = { class: "icon-index mr5" }, zd = ["onClick", "href"], Cd = { key: 0, class: "d-hidden ml5 text-gray-500", style: { "max-width": "60px", color: "#b3b6bb" } }, Md = { name: "topsearch-icon" }, jd = o(Object.assign(Md, { props: { size: String }, setup(l2) {
  let a2 = O(), n2 = l2, s2 = ht({ activeId: a2.value.topSearch[0].id || "Jb0vmloB1G", hotType: a2.value.topSearch || [], hostList: f2.get("hotSearch") || [] });
  async function i2(t22 = s2.activeId) {
    let l3 = await t(() => import("./cache-VMWPWM72.js"), []);
    l3 = l3.default;
    let a3 = `hotSearch_${t22}`, n3 = await l3.getItem(a3), i3 = n3.data || [];
    if (s2.hostList = i3, n3.isExp) {
      let { getTopListApi: n4 } = await t(async () => {
        let { getTopListApi: e2 } = await import("./topsearch-CzmETF2N-YJ4G67R4.js");
        return { getTopListApi: e2 };
      }, ["assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css"]), o2 = (await n4({ id: t22, size: 20 })).data || [];
      o2.length && (i3 = o2, l3.set(a3, i3, 12e5), t22 === s2.hotType[0].id && f2.set("hotSearch", i3.slice(0, 4)));
    }
    s2.hostList = i3;
  }
  return i2(), (e2, t22) => {
    let a3 = ke2;
    return Zr(), to(a3, null, { default: mn(() => [["1x1", "1x2", "2x1"].includes(l2.size) ? (Zr(), eo("img", bd)) : (Zr(), eo("div", { key: 1, class: W([l2.size, "topsearch-icon p-3 size-full relative"]), style: { padding: "0.54em" } }, [io("div", _d, [(Zr(!0), eo(Hr, null, Es(Lt(s2).hotType, (e3) => (Zr(), eo("span", { class: W(["top-tag", { active: Lt(s2).activeId == e3.id }]), key: e3.id, onMouseenter: (t3) => (async function(e4) {
      s2.activeId = e4.id, i2(e4.id), document.querySelector(".topsearch-icon-content").scrollTop = 0;
    })(e3) }, Z(e3.name), 43, xd))), 128))]), io("ul", { class: "topsearch-icon-content overflow-y-auto d-scrollbar-hide", onWheel: t22[1] || (t22[1] = sl(() => {
    }, ["stop"])) }, [(Zr(!0), eo(Hr, null, Es(Lt(s2).hostList, (e3) => (Zr(), eo("li", { class: "d-flex-y d-elip", title: e3.title, key: e3.id }, [io("span", kd, Z(e3.index), 1), io("a", { class: "d-elip d-cell title", onClick: sl((t3) => (function(e4) {
      let t4 = s2.hotType.find((e5) => e5.id == s2.activeId);
    })(e3), ["stop"]), onMouseup: t22[0] || (t22[0] = sl(() => {
    }, ["stop"])), href: e3.link, target: "_blank" }, Z(e3.title), 41, zd), ["2x4", "medium"].includes(n2.size) ? (Zr(), eo("span", Cd, Z(String(e3.hotValue || "").replace("热度", "")), 1)) : po("", !0)], 8, wd))), 128))], 32)], 2))]), _: 1 });
  };
} }), [["__scopeId", "data-v-0aeffa86"]]), Sd = /* @__PURE__ */ Object.freeze(Object.defineProperty({ __proto__: null, default: jd }, Symbol.toStringTag, { value: "Module" })), Od = "app-translate-configs", Ld = "app-translate-historylist";
async function Dd() {
  return (await t(async () => {
    let { default: e2 } = await import("./cache-VMWPWM72.js");
    return { default: e2 };
  }, [])).default;
}
async function Pd() {
  return (await Dd()).get(Od);
}
async function Td(e2) {
  return (await Dd()).set(Od, e2, 432e4);
}
async function Ad() {
  return (await Dd()).get(Ld);
}
async function Id(e2) {
  return e2.length >= 30 && (e2.length = 30), e2 = e2.map((e3) => St(e3)), (await Dd()).set(Ld, e2);
}
var Ed = { key: 0, class: "d-flex-center h-full p-1", style: { color: "#333" } }, $d = { key: 1, class: "h-full w-full" }, Yd = { class: "bg-blue-100/50 shadow-xs rounded-xl p-1 flex flex-col gap-1", style: { "background-color": "rgba(255, 255, 255, 0.45)", border: "1.2px solid rgba(255, 255, 255, 0.8)" } }, Vd = { class: "flex justify-between text-[rgba(0,0,0,0.8)]" }, Hd = ["value"], Rd = { key: 0, class: "flex items-center justify-between" }, Fd = { class: "text-[rgba(0,0,0,0.35)] text-xs" }, Nd = { class: "bg-lime-100/50 shadow-xs rounded-xl p-1 flex flex-col gap-1 overflow-hidden relative", style: { border: "1.2px solid rgba(255, 255, 255, 0.8)" } }, qd = { class: "flex justify-between text-[rgba(0,0,0,0.8)]" }, Zd = ["value"], Bd = { key: 0, class: "h-full user-select-text" }, Ud = { key: 1, class: "text-xs text-[rgba(0,0,0,0.5)]" }, Gd = { key: 0, class: "absolute bottom-1 right-1" }, Wd = { name: "translate-icon" }, Jd = o(Object.assign(Wd, { props: { size: String }, setup(e2) {
  let t22 = e2, l2 = Et({ method: "", from: "auto", to: "", text: "", translateText: "" }), a2 = Et({}), n2 = Bn(async function() {
    var e3;
    let t3 = l2.value.to.trim(), n3 = l2.value.text.trim(), s3 = l2.value.from.trim(), o2 = l2.value.method;
    if (t3 && n3) {
      if (l2 === t3) return l2.value.translateText = l2.value.text;
      try {
        n3.length > 500 && (l2.value.text = n3.substring(0, 500));
        let r2 = { from: s3, to: t3, text: n3.substring(0, 500), method: o2 };
        l2 === "auto" && delete r2.from;
        let { getTranslateApi: c2 } = await t(async () => {
          let { getTranslateApi: e4 } = await import("./translate-CZnZju1s-DZ5BTK7V.js");
          return { getTranslateApi: e4 };
        }, ["assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css"]), u22 = await c2(r2);
        l2.value.translateText = ((e3 = u22?.data) == null ? void 0 : e3.text) || "", (async function() {
          let e4 = await Ad() || [], t4 = e4[0], n4 = l2.value.to.trim(), s4 = l2.value.text.trim(), o3 = l2.value.from.trim(), r3 = l2.value.method, c3 = l2.value.translateText.trim();
          t4 && s4.startsWith(t4.text) ? Object.assign(t4, { to: n4, from: o3, text: s4, transText: c3, method: r3, toLabel: i2(n4, a2.value.langs), fromLabel: l2 === "auto" ? "自动检测" : i2(o3, a2.value.langs), ts: Date.now() }) : e4.unshift({ to: n4, from: o3, text: s4, transText: c3, method: r3, toLabel: i2(n4, a2.value.langs), fromLabel: l2 === "auto" ? "自动检测" : i2(o3, a2.value.langs), ts: Date.now() }), Id(e4);
        })();
      } catch {
        l2.value.translateText = "";
      }
    }
  }, 500);
  function s2(e3) {
    var t3;
    l2.value.from !== "auto" && (l2.value.from !== "auto" && ([l2.value.from, l2.value.to] = [l2.value.to, l2.value.from]), e3 && (function(e4) {
      let t4 = e4.getAttribute("data-flipped") === "true", l3 = t4 ? 180 : 0, a3 = t4 ? 0 : 180;
      e4.animate([{ transform: `rotateY(${l3}deg)` }, { transform: `rotateY(${a3}deg)` }], { duration: 300, easing: "ease-in-out", fill: "forwards" }), e4.setAttribute("data-flipped", String(!t4));
    })((t3 = e3.target).querySelector("svg") || t3.closest("svg")), [l2.value.text, l2.value.translateText] = [l2.value.translateText, l2.value.text]);
  }
  function i2(e3, t3 = [], l3 = "label") {
    var a3;
    return (a3 = t3.find((t4) => t4.value === e3)) == null ? void 0 : a3[l3];
  }
  return Et([]), Fr(() => l2.value.to.trim(), n2), Fr(() => l2.value.text.trim(), n2), Fr(() => l2.value.method, n2), Fr(l2, () => {
    window.__translate_tmp_form = JSON.parse(JSON.stringify(St(Lt(l2))));
  }, { deep: !0 }), (async function() {
    var e3, t3, n3;
    let s3 = await Pd();
    if (!s3) {
      let { getTranslateSupportsApi: e4 } = await t(async () => {
        let { getTranslateSupportsApi: e5 } = await import("./translate-CZnZju1s-DZ5BTK7V.js");
        return { getTranslateSupportsApi: e5 };
      }, ["assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css"]);
      s3 = await e4(), Td(s3);
    }
    if (a2.value = s3.data || {}, l2.value.method = (e3 = a2.value.methods.find((e4) => e4.default)) == null ? void 0 : e3.value, l2.value.to = (t3 = a2.value.langs.find((e4) => e4.defaultTo)) == null ? void 0 : t3.value, l2.value.text) {
      let e4 = !!l2.value.text.trim().match(/^[a-z]/i);
      l2.value.to = (n3 = a2.value.langs.find((t4) => e4 ? !t4.value.includes("en") : t4.value.includes("en"))) == null ? void 0 : n3.value;
    }
  })(), fs(() => {
    window.__translate_tmp_form && (l2.value = JSON.parse(JSON.stringify(window.__translate_tmp_form)));
  }), (n3, i3) => {
    let o2 = ke2;
    return Zr(), to(o2, { confineSize: !1 }, { default: mn(() => [io("div", { class: W(["h-full w-full translate-icon-wrap text-gray-800 bg-white", `iconsize-${e2.size}`]) }, [["2x4", "2x2"].includes(t22.size) ? (Zr(), eo("div", $d, [io("div", { class: W(["grid p-2 gap-1.5 h-full w-full text-xs", { "grid-cols-1 grid-rows-2 overflow-hidden": ["2x2"].includes(t22.size), "grid-cols-2": ["2x4"].includes(t22.size) }]) }, [io("div", Yd, [io("div", Vd, [yn(io("select", { "onUpdate:modelValue": i3[0] || (i3[0] = (e3) => l2.value.from = e3), onClick: i3[1] || (i3[1] = sl(() => {
    }, ["stop"])), class: "text-xs outline-none -ml-1" }, [i3[17] || (i3[17] = io("option", { value: "auto" }, "自动检测", -1)), (Zr(!0), eo(Hr, null, Es(a2.value.langs, (e3) => (Zr(), eo("option", { value: e3.value }, Z(e3.label), 9, Hd))), 256))], 512), [[Xi, l2.value.from]])]), yn(io("textarea", { "onUpdate:modelValue": i3[2] || (i3[2] = (e3) => l2.value.text = e3), class: "w-full flex-auto resize-none text-[rgba(0,0,0,.6)] text-left", placeholder: "请输入", onClick: i3[3] || (i3[3] = sl(() => {
    }, ["stop"])), onWheel: i3[4] || (i3[4] = sl(() => {
    }, ["stop", "prevent"])), onScroll: i3[5] || (i3[5] = sl(() => {
    }, ["stop", "prevent"])), onPointerdown: i3[6] || (i3[6] = sl(() => {
    }, ["stop"])), onTouchstart: i3[7] || (i3[7] = sl(() => {
    }, ["stop"])), maxlength: 500 }, null, 544), [[qi, l2.value.text]]), l2.value.text && t22.size == "2x4" ? (Zr(), eo("div", Rd, [io("div", Fd, Z(l2.value.text.length || 0) + "/500 ", 1)])) : po("", !0)]), io("div", { class: "absolute top-0 right-0 bottom-0 left-0 m-auto z-2 size-5 rounded-full bg-white shadow flex items-center justify-center switch-btn", onClick: sl(s2, ["stop"]) }, [lo(Lt(Ct), { class: "size-3.5 text-black/50" })]), io("div", Nd, [io("div", qd, [yn(io("select", { "onUpdate:modelValue": i3[8] || (i3[8] = (e3) => l2.value.to = e3), onClick: i3[9] || (i3[9] = sl(() => {
    }, ["stop"])), class: "text-xs outline-none -ml-1" }, [(Zr(!0), eo(Hr, null, Es(a2.value.langs, (e3) => (Zr(), eo("option", { value: e3.value }, Z(e3.label), 9, Zd))), 256))], 512), [[Xi, l2.value.to]])]), io("div", { class: "w-full flex-auto text-[rgba(0,0,0,.6)] overflow-auto d-scrollbar-hide text-left select-auto", onWheel: i3[10] || (i3[10] = sl(() => {
    }, ["stop"])), onScroll: i3[11] || (i3[11] = sl(() => {
    }, ["stop"])), onPointerdown: i3[12] || (i3[12] = sl(() => {
    }, ["stop"])), onTouchstart: i3[13] || (i3[13] = sl(() => {
    }, ["stop"])), onClick: i3[14] || (i3[14] = sl((e3) => {
      t(() => import("./stocksCache-CNvbf2yR-BUTMMQXS.js").then((e4) => e4.a4), ["assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css"]).then((e4) => {
        let t3 = { component: "translate", insetType: "component", config: { text: l2.value.text } };
        e4.setDialogApp(t3);
      });
    }, ["stop"])) }, [l2.value.translateText ? (Zr(), eo("div", Bd, Z(l2.value.translateText), 1)) : (Zr(), eo("div", Ud, " 翻译结果在此显示 "))], 32), ["2x2", "2x4"].includes(t22.size) ? yn((Zr(), eo("div", Gd, [io("div", { class: "text-black/35 hover:text-black/50", onClick: i3[15] || (i3[15] = sl((e3) => {
      var t3;
      (t3 = l2.value.translateText) && (S(t3), t(() => import("./vendor-element-plus-CRt18gND-MNDHTQD2.js").then((e4) => e4.al), ["assets/vendor-element-plus-WnleHQiG.css"]).then((e4) => {
        e4.default.success("已复制到剪贴板");
      }));
    }, ["stop"])) }, [lo(Lt(yt), { class: "size-3.5" })])], 512)), [[di, l2.value.translateText]]) : po("", !0)])], 2)])) : (Zr(), eo("div", Ed, i3[16] || (i3[16] = [io("img", { class: "h-full object-contain", src: "/original/assets/translate-logo-Z2XXEDg4.svg" }, null, -1)])))], 2)]), _: 1 });
  };
} }), [["__scopeId", "data-v-e1005186"]]), Qd = /* @__PURE__ */ Object.freeze(Object.defineProperty({ __proto__: null, default: Jd }, Symbol.toStringTag, { value: "Module" })), Xd = { alt: "数字转大写", class: "uppercase-icon w-full h-full object-contain", src: "https://files.itab.link/icons/uppercase.svg" }, Kd = o({ name: "uppercase-icon" }, [["render", function(e2, t22, l2, a2, n2, s2) {
  return Zr(), eo("img", Xd);
}], ["__scopeId", "data-v-8b32bcc8"]]), ep = /* @__PURE__ */ Object.freeze(Object.defineProperty({ __proto__: null, default: Kd }, Symbol.toStringTag, { value: "Module" })), tp = { key: 0, alt: "游戏动力", class: "bg-[#131415] object-contain size-full", src: "https://files.itab.link/icons/vgn.svg" }, lp = { class: "vgn-icon-content size-full relative isolate" }, ap = ["src"], np = { class: "vgn-btn absolute d-flex-between" }, sp = { class: "footer-sale d-flex-center b" }, ip = { class: "vgn-icon-footer absolute px-2 flex flex-col" }, op = ["title"], rp = { class: "vgn-price" }, cp = { class: "f14 b" }, up = { class: "vgn-price-origin text-xs ml-1" }, dp = ["href"], pp = { name: "vgn-icon" }, fp = o(Object.assign(pp, { props: { size: String }, setup(t22) {
  let l2 = ["1x1", "2x1"], a2 = t22, n2 = $o(() => l2.includes(a2.size)), s2 = Tt(f2.get("app-vgn") || {}), i2 = Tt([]), o2 = $o(() => s2.value.game_china_name || s2.value.game_name), r2 = null, c2 = null, u22 = 0;
  function d2(e2) {
    return t(() => import("./getListApi-D6a7y7aZ-K6TBLPIO.js"), ["assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css"]).then((t3) => t3.getList(e2));
  }
  function p2() {
    return c2 || (c2 = d2("discount").then((e2) => (r2 = e2 || [], s2.value.game_china_name ? (function() {
      if (!r2?.length) return void (u22 = 0);
      let e3 = r2.findIndex((e4) => e4.detail_link === s2.value.detail_link);
      u22 = e3 < 0 ? 0 : e3;
    })() : (s2.value = r2[0] || {}, u22 = 0), r2))), c2;
  }
  async function f22(e2) {
    let t3 = r2 || await p2();
    t3.length && (u22 = (u22 + e2 + t3.length) % t3.length, s2.value = t3[u22]);
  }
  return Fr(() => a2.size, (e2) => {
    n2.value || (p2(), e2 !== "2x4" || i2.value.length || d2("news").then((e3) => {
      i2.value = e3 || [];
    }));
  }, { immediate: !0 }), (e2, l3) => {
    let a3 = ke2;
    return n2.value ? (Zr(), eo("img", tp)) : (Zr(), to(a3, { key: 1 }, { default: mn(() => [io("div", { class: W(["icon-" + t22.size, "vgn-icon relative overflow-hidden size-full text-white bg-[#202020]"]) }, [io("div", lp, [s2.value.spu_show_cover ? (Zr(), eo("img", { key: 0, class: "absolute inset-0 size-full object-cover", src: s2.value.spu_show_cover, alt: "", decoding: "async" }, null, 8, ap)) : po("", !0), io("div", np, [io("button", { type: "button", onClick: l3[0] || (l3[0] = sl((e3) => f22(-1), ["stop"])), class: "arrow-icon prev" }), io("button", { type: "button", onClick: l3[1] || (l3[1] = sl((e3) => f22(1), ["stop"])), class: "arrow-icon next" })]), io("span", sp, "-" + Z(s2.value.discount_percent) + "%", 1), io("div", ip, [io("h2", { class: "f13 b d-elip w-full", title: o2.value }, Z(o2.value), 9, op), io("div", rp, [io("span", cp, "￥" + Z(s2.value.discount / 100), 1), io("span", up, "￥" + Z(s2.value.initial / 100), 1)])])]), t22.size === "2x4" ? (Zr(), eo("ul", { key: 0, class: "vgn-news ml-2 d-scrollbar-hide", onWheel: l3[4] || (l3[4] = sl(() => {
    }, ["stop"])) }, [(Zr(!0), eo(Hr, null, Es(i2.value, (e3) => (Zr(), eo("a", { key: e3.detail_link, href: e3.detail_link, class: "d-sub text-[13px] d-elip", target: "_blank", onClick: l3[2] || (l3[2] = sl(() => {
    }, ["stop"])), onMouseup: l3[3] || (l3[3] = sl(() => {
    }, ["stop"])) }, Z(e3.title), 41, dp))), 128))], 32)) : po("", !0)], 2)]), _: 1 }));
  };
} }), [["__scopeId", "data-v-4d122737"]]), mp = /* @__PURE__ */ Object.freeze(Object.defineProperty({ __proto__: null, default: fp }, Symbol.toStringTag, { value: "Module" })), vp = { class: "size-full bg-[#5f47d3] object-contain", src: "https://files.itab.link/icons/videoConvert.svg", alt: "" }, gp = o({}, [["render", function(e2, t22) {
  return Zr(), eo("img", vp);
}]]), hp = /* @__PURE__ */ Object.freeze(Object.defineProperty({ __proto__: null, default: gp }, Symbol.toStringTag, { value: "Module" })), yp = { class: "size-full bg-[#4868d4] object-contain", src: "https://files.itab.link/icons/videoCut.svg", alt: "" }, bp = o({}, [["render", function(e2, t22) {
  return Zr(), eo("img", yp);
}]]), _p = /* @__PURE__ */ Object.freeze(Object.defineProperty({ __proto__: null, default: bp }, Symbol.toStringTag, { value: "Module" })), xp = ["title"], wp = { name: "wallpaper-icon" }, kp = o(Object.assign(wp, { props: { size: { type: String } }, setup(t22) {
  let l2 = Tt(f2.get("todayBing") || {});
  return l2.thumb || t(() => import("./public-api-DajUmvL1-E2FLKA4B.js"), ["assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css", "assets/vendor-element-plus-WnleHQiG.css", "assets/index-BhblYh7z.css"]).then(async (e2) => {
    e2.g().then((e3) => {
      l2.value = { thumb: e3.thumb, copyright: e3.copyright ? e3.copyright.split(",")[0] : "" };
    });
  }), (e2, a2) => (Zr(), eo("div", { class: W(["wallpaper-icon", `iconsize-${t22.size}`]), style: V(`backgroundImage: url(${l2.value.thumb || "https://files.itab.link/tools-icon/wallpaper.svg"})`) }, [["2x2", "2x4", "1x2"].includes(t22.size) ? (Zr(), eo("p", { key: 0, title: l2.value.copyright, class: "copyright d-elip" }, Z(l2.value.copyright), 9, xp)) : po("", !0)], 6));
} }), [["__scopeId", "data-v-ff9f471e"]]), zp = /* @__PURE__ */ Object.freeze(Object.defineProperty({ __proto__: null, default: kp }, Symbol.toStringTag, { value: "Module" })), Cp = { 100: "sunny", 150: "sunny", 101: "cloudy", 102: "cloudy", 103: "cloudy", 151: "cloudy", 152: "cloudy", 153: "cloudy", 104: "yin", 302: "thunder", 303: "thunder", 300: "rain", 301: "rain", 304: "rain", 305: "rain", 306: "rain", 307: "rain", 308: "rain", 309: "rain", 310: "rain", 311: "rain", 312: "rain", 313: "rain", 314: "rain", 315: "rain", 316: "rain", 317: "rain", 318: "rain", 350: "rain", 351: "rain", 399: "rain", 400: "snow", 401: "snow", 402: "snow", 403: "snow", 404: "snow", 405: "snow", 406: "snow", 407: "snow", 408: "snow", 409: "snow", 410: "snow", 500: "foggy", 501: "foggy", 509: "foggy", 510: "foggy", 514: "foggy", 515: "foggy", 502: "haze" };
function Mp(e2) {
  return e2 ? `https://files.itab.link/itab/weather/icon/${e2}-fill.svg` : "";
}
function jp(e2 = {}) {
  let { rise: t22, set: l2 } = e2;
  if (!t22 || !l2) return "d";
  let a2 = u2().format("YYYY-MM-DD"), n2 = (/* @__PURE__ */ new Date(`${a2} ${t22}`)).getTime(), s2 = (/* @__PURE__ */ new Date(`${a2} ${l2}`)).getTime(), i2 = u2().valueOf();
  return i2 > n2 && i2 < s2 ? "d" : "n";
}
function Sp(t22, l2) {
  if (!t22) return "";
  let a2 = l2 || (f2.get("weather") || {}).moment || "d";
  return Cp[t22] ? `weather-${Cp[t22]}_${a2}` : "weather-other";
}
function Op(e2) {
  let t22 = "周" + Zt[u2(e2).day()];
  return u2(e2).format("DD") === u2().format("DD") && (t22 = "今天"), t22;
}
function Lp(e2, t22) {
  return t22 == 1 ? "明天" : "周" + Zt[u2(e2).day()];
}
function Dp(e2) {
  return u2(e2).format("MM-DD");
}
var Pp = { location: {}, now: { tmp: 0 }, daily_forecast: [{}], air_now_city: {}, sun: {}, rain: {}, lifestyle: [] };
function Tp(e2 = {}) {
  return { daily_forecast: e2.daily_forecast || [{}], location: e2.location || {}, now: e2.now || { tmp: 0 }, moment: e2.moment, air_now_city: e2.air_now_city || {} };
}
function Ap(e2) {
  try {
    return JSON.parse(JSON.stringify(e2 ?? null));
  } catch {
    return e2;
  }
}
function Ip() {
  let t22 = f2.get("weather");
  return t22 && typeof t22 == "object" ? t22 : { ...Pp };
}
var Ep = Et(Ip()), $p = () => Ep, Yp = { class: "d-elip min-w-0" }, Vp = ["title", "src"], Hp = { class: "text-[0.6em]" }, Rp = { class: "mt-[0.2em] flex w-full justify-between text-xs leading-[1.4]" }, Fp = { key: 0 }, Np = { class: "d-flex-center" }, qp = ["src"], Zp = { name: "weather-icon" }, Bp = o(Object.assign(Zp, { props: { size: String }, setup(e2) {
  let t22 = $p();
  Gt(() => {
    t(() => import("./store-89ezOrEq-5OMDSU62.js"), ["assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css", "assets/IconPlus-B05F9kaq.css"]).then((e3) => e3.useWeatherStore());
  });
  let l2 = e2, a2 = $o(() => l2.size || "2x2"), n2 = $o(() => {
    var e3;
    return ((e3 = t22.value.daily_forecast) == null ? void 0 : e3[0]) || {};
  }), s2 = $o(() => t22.value.now.cond_code && Sp(t22.value.now.cond_code, t22.value.moment)), i2 = $o(() => {
    let e3 = { "1x1": { root: "icon-1x1 items-center justify-center text-center", main: "w-full justify-center", city: "text-xs", temp: "text-base font-bold", condIcon: "size-4" }, "1x2": { root: "icon-1x2 flex-row items-center justify-between px-1.5", main: "flex-1 items-center", city: "text-xs", temp: "text-[22px] font-normal leading-[22px]", side: "whitespace-nowrap text-xs", condIcon: "size-4" }, "2x1": { root: "icon-2x1 justify-between px-1.5 py-3.5 text-center", main: "h-full flex-col", head: "text-center", city: "justify-center text-xs", temp: "text-[22px] font-normal", side: "w-full text-center", condRow: "flex-col justify-center", cond: "text-[14px]", condIcon: "size-4" }, "2x2": { root: "icon-2x2 justify-between p-[0.6em]", main: "w-full", city: "text-[0.6em]", temp: "text-[1.3em] font-bold", side: "text-center", condRow: "flex-col", cond: "text-[0.6em]", condIcon: "size-[1em]" }, "2x4": { root: "icon-2x4 justify-between p-[0.6em]", main: "w-full", city: "text-xs", temp: "text-[1.4em] font-bold", side: "text-xs leading-[1.1]", condIcon: "size-[22px]" } };
    return e3[a2.value] || e3["2x2"];
  });
  return (e3, l3) => {
    let o2 = ke2;
    return Zr(), to(o2, null, { default: mn(() => {
      var e4, l4;
      return [io("div", { class: W(["weather-icon relative flex h-full w-full flex-col overflow-hidden bg-[#154280] bg-cover bg-center bg-no-repeat text-white", [s2.value, i2.value.root]]) }, [io("div", { class: W(["flex justify-between", i2.value.main]) }, [io("div", { class: W(i2.value.head) }, [io("p", { class: W(["flex min-w-0 items-center gap-0.5", i2.value.city]) }, [io("span", Yp, Z(Lt(t22).location.name), 1), yn(lo(Lt(_t), { class: "shrink-0", size: 12 }, null, 512), [[di, a2.value !== "2x1"]])], 2), io("p", { class: W(i2.value.temp) }, Z(Lt(t22).now.tmp) + "°", 3)], 2), yn(io("div", { class: W(["text-right", i2.value.side]) }, [io("p", { class: W(["flex items-center justify-end gap-1", i2.value.condRow]) }, [io("span", { class: W(i2.value.cond) }, Z(Lt(t22).now.cond_txt), 3), io("img", { class: W(i2.value.condIcon), title: Lt(t22).now.cond_txt, src: Lt(Mp)(Lt(t22).now.cond_code) }, null, 10, Vp)], 2), yn(io("p", null, Z(n2.value.tmp_min) + "° ~ " + Z(n2.value.tmp_max) + "° ", 513), [[di, a2.value === "1x2"]]), yn(io("p", null, " 最低 " + Z(n2.value.tmp_min) + "° 最高 " + Z(n2.value.tmp_max) + "° ", 513), [[di, a2.value === "2x4"]])], 2), [[di, a2.value !== "1x1"]])], 2), yn(io("div", Hp, [io("p", null, " AQI " + Z((e4 = Lt(t22).air_now_city) == null ? void 0 : e4.qlty) + "/" + Z((l4 = Lt(t22).air_now_city) == null ? void 0 : l4.aqi), 1), io("p", null, "最高" + Z(n2.value.tmp_max) + "° 最低" + Z(n2.value.tmp_min) + "°", 1)], 512), [[di, a2.value === "2x2"]]), yn(io("ul", Rp, [(Zr(!0), eo(Hr, null, Es(Lt(t22).daily_forecast, (e5, t3) => (Zr(), eo(Hr, { key: t3 }, [t3 !== 0 ? (Zr(), eo("li", Fp, [io("p", null, Z(Lt(Lp)(e5.date, t3)), 1), io("p", Np, [io("img", { class: "size-4", src: Lt(Mp)(e5.cond_code_d) }, null, 8, qp)]), io("p", null, Z(e5.tmp_min) + "~" + Z(e5.tmp_max), 1)])) : po("", !0)], 64))), 128))], 512), [[di, a2.value === "2x4"]])], 2)];
    }), _: 1 });
  };
} }), [["__scopeId", "data-v-272925bc"]]), Up = /* @__PURE__ */ Object.freeze(Object.defineProperty({ __proto__: null, default: Bp }, Symbol.toStringTag, { value: "Module" })), Gp = { class: "size-full bg-white", src: "https://files.itab.link/tools-icon/webGradients.svg", alt: "" }, Wp = o({}, [["render", function(e2, t22) {
  return Zr(), eo("img", Gp);
}]]), Jp = /* @__PURE__ */ Object.freeze(Object.defineProperty({ __proto__: null, default: Wp }, Symbol.toStringTag, { value: "Module" })), Qp = { class: "relative time-clock" }, Xp = { class: "absolute inset-0" }, Kp = { class: "absolute left-1/2 bottom-1/2 h-[46%]" }, ef = { class: "point" }, tf = { class: "relative top-1", style: { "line-height": "18px" } }, lf = { class: "f12 d-elip d-inline d-elip", style: { "max-width": "60px" } }, af = { class: "f12 d-elip diff", style: "" }, nf = { name: "appWorldClock" }, sf = o(Object.assign(nf, { props: { data: { type: Object, default: {} }, h: [String, Number] }, setup: (e2) => (t22, l2) => (Zr(), eo("div", Qp, [io("div", Xp, [io("div", { class: W(["digits ac", e2.data.theme || "dark"]) }, [io("ul", Kp, [(Zr(), eo(Hr, null, Es(12, (e3) => io("li", { key: e3 }, [io("span", null, Z(e3), 1)])), 64))]), io("div", ef, [io("span", { class: "hand hours-hand", style: V(`transform: rotate(${e2.data.h}deg);`) }, null, 4), io("span", { class: "hand minutes-hand", style: V(` transform: rotate(${e2.data.m}deg);`) }, null, 4), io("span", { class: "hand seconds-hand", style: V(` transform: rotate(${e2.data.s}deg);`) }, null, 4)])], 2), io("div", tf, [io("span", lf, Z(e2.data.name), 1), io("p", af, Z(e2.data.diff) + "小时", 1)])])])) }), [["__scopeId", "data-v-b5acce7f"]]), of = { class: "h-full" }, rf = { class: "w-full" }, cf = { key: 1 }, uf = { class: "b time" }, df = ["title"], pf = { name: "workClock-icon" }, ff = o(Object.assign(pf, { props: { size: String }, setup(t22) {
  let l2 = t22;
  t(() => import("./vendor-dayjs-D25YbOr3-XY66CAE4.js").then((e2) => e2.t), []).then((e2) => {
    u2.extend(e2.default), t(() => import("./vendor-dayjs-D25YbOr3-XY66CAE4.js").then((e3) => e3.u), []).then((e3) => {
      u2.extend(e3.default), i2();
    });
  });
  let a2 = f2.get("app-worldClock") || [{ name: "北京", code: "Asia/Shanghai" }, { name: "洛杉矶", code: "America/Los_Angeles" }, { name: "纽约", code: "America/New_York" }, { name: "巴黎", code: "Europe/Paris" }];
  t(() => import("./stocksCache-CNvbf2yR-BUTMMQXS.js").then((e2) => e2.a3), ["assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css"]).then((e2) => {
    e2.default.on("app-worldClock", (e3) => {
      a2 = e3;
    });
  });
  let n2 = Tt([]), s2 = null;
  function i2() {
    n2.value = a2.map((e2) => {
      let t3 = {};
      if (u2.tz && u2.utc) {
        if (t3 = { name: e2.name, time: u2().tz(e2.code).format("HH:mm") }, l2.size == "2x4") {
          let l3 = u2().tz(e2.code).format("HH"), a3 = 6 * u2().tz(e2.code).format("m"), n3 = 30 * l3 + a3 / 12, s3 = 6 * u2().tz(e2.code).format("s"), i3 = u2().utcOffset() / 60, o2 = u2().tz(e2.code).utcOffset() / 60, r2 = u2().tz(e2.code).format("A");
          t3 = { name: e2.name, diff: o2 - i3, h: n3, m: a3, s: s3, theme: r2 == "AM" ? "light" : "dark" };
        }
      } else t3 = { name: e2.name, diff: 0, time: "00:00", h: 0, m: 0, s: 0 };
      return t3;
    });
  }
  return s2 && clearInterval(s2), i2(), s2 = setInterval(() => {
    i2();
  }, 1e3), vs(() => {
    clearInterval(s2);
  }), (e2, l3) => (Zr(), eo("div", of, [io("div", { class: W(["h-full w-full worldClock-wrap d-flex-center relative text-white", `iconsize-${t22.size}`]) }, [(Zr(!0), eo(Hr, null, Es(n2.value, (e3) => (Zr(), eo("li", { class: "d-flex-center ac", style: { padding: "10px" }, key: e3.code }, [io("div", rf, [t22.size === "2x4" ? (Zr(), to(sf, { key: 0, style: { "margin-top": "-30%" }, name: e3.name, data: e3, h: e3.h, m: e3.m, s: e3.s }, null, 8, ["name", "data", "h", "m", "s"])) : (Zr(), eo("div", cf, [io("p", uf, Z(e3.time), 1), io("p", { title: e3.name, class: "f12 d-elip d-inline w-full" }, Z(e3.name), 9, df)]))])]))), 128))], 2)]));
} }), [["__scopeId", "data-v-1800c8cb"]]), mf = /* @__PURE__ */ Object.freeze(Object.defineProperty({ __proto__: null, default: ff }, Symbol.toStringTag, { value: "Module" })), vf = { key: 0, class: "d-flex-center h-full" }, gf = { class: "f12" }, hf = { class: "d-block" }, yf = { class: "b f20 jia-font" }, bf = { class: "d-block" }, _f = { class: "f12", style: { opacity: "0.6" } }, xf = { class: "f12" }, wf = { class: "b f20 jia-font" }, kf = { key: 0, class: "jia-first" }, zf = { class: "f12" }, Cf = { class: "b jia-font" }, Mf = { class: "f12" }, jf = { class: "jia-list d-flex-x d-flex-column w-full" }, Sf = { class: "d-block" }, Of = { class: "f12", style: { opacity: "0.6" } }, Lf = { class: "f12" }, Df = { class: "f18" }, Pf = { name: "xiayigejiaqi-icon" }, Tf = o(Object.assign(Pf, { props: { size: String }, setup(t22) {
  let l2 = t22, a2 = Et([]), n2 = f2.get("xiayigejiaqiData") || [], s2 = u2().format("YYYYMMDD"), i2 = f2.get("xiayigejiaqiUt"), o2 = $o(() => {
    let e2 = a2.value.slice(1, 4);
    return ["2x2", "small"].includes(l2.size) && (e2 = a2.value.slice(0, 3)), { first: a2.value.slice(0, 1)[0] || {}, list: e2 };
  });
  function r2(t3) {
    t3 = t3.filter((e2, t4) => {
      let l4 = (/* @__PURE__ */ new Date()).getTime(), a3 = u2(`${e2.holiday} 23:59:59`).valueOf();
      return l4 < u2(`${e2.end || e2.holiday} 23:59:59`).valueOf() || l4 < a3;
    }), f2.set("xiayigejiaqiData", t3);
    let l3 = t3.slice(0, 4);
    l3.forEach((e2) => {
      let t4 = (/* @__PURE__ */ new Date()).getTime(), l4 = u2(`${e2.start || e2.holiday} 23:59:59`).valueOf();
      e2.diff = parseInt((l4 - t4) / 864e5), e2.diff = e2.diff <= 0 ? "今" : e2.diff, e2.start ? e2.date = `${u2(e2.start).format("M.D")}-${u2(e2.end).format("M.D")}` : e2.date = `${u2(e2.holiday).format("M.D")}`;
    }), a2.value = l3;
  }
  return n2.length >= 4 && i2 == s2 ? r2(n2) : t(() => import("./xiayigejiaqi-DUNXEydK-TECAJDOC.js"), ["assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css"]).then((t3) => {
    t3.jiaqiListApi().then((t4) => {
      let l3 = t4.data || [];
      f2.set("xiayigejiaqiUt", s2), r2(l3);
    });
  }), (e2, l3) => {
    let a3 = ke2;
    return Zr(), to(a3, null, { default: mn(() => [io("div", { class: W(["w-full h-full jia-icon", `iconsize-${t22.size}`]) }, [["1x1"].includes(t22.size) ? (Zr(), eo("div", vf, [io("span", gf, [io("em", hf, Z(o2.value.first.name), 1), io("b", yf, Z(o2.value.first.diff), 1)])])) : ["1x1", "1x2", "2x1"].includes(t22.size) ? (Zr(), eo("div", { key: 1, class: W(["jia-icon-body w-full h-full d-flex-between f12", { "d-flex-column": t22.size == "2x1" }]) }, [io("span", null, [io("em", bf, Z(o2.value.first.name), 1), io("em", _f, Z(o2.value.first.date), 1)]), io("span", xf, [io("b", wf, Z(o2.value.first.diff), 1)]), l3[0] || (l3[0] = io("span", null, "天", -1))], 2)) : ["2x2", "medium", "small", "2x4"].includes(t22.size) ? (Zr(), eo(Hr, { key: 2 }, [["medium", "2x4"].includes(t22.size) ? (Zr(), eo("div", kf, [io("p", zf, Z(o2.value.first.name) + "还有", 1), io("span", null, [io("b", Cf, Z(o2.value.first.diff), 1), l3[1] || (l3[1] = io("em", { class: "f12" }, " 天", -1))]), io("p", Mf, Z(o2.value.first.start ? o2.value.first.date : o2.value.first.holiday), 1)])) : po("", !0), io("div", jf, [(Zr(!0), eo(Hr, null, Es(o2.value.list, (e3) => (Zr(), eo("li", { class: "d-flex-y", key: e3.start }, [io("span", null, [io("em", Sf, Z(e3.name), 1), io("em", Of, Z(e3.date), 1)]), io("span", Lf, [io("b", Df, Z(e3.diff), 1), l3[2] || (l3[2] = uo(" 天 "))])]))), 128))])], 64)) : po("", !0)], 2)]), _: 1 });
  };
} }), [["__scopeId", "data-v-2e085d46"]]), Af = /* @__PURE__ */ Object.freeze(Object.defineProperty({ __proto__: null, default: Tf }, Symbol.toStringTag, { value: "Module" })), If = { key: 0, alt: "每日一言", class: "block w-full h-full", style: { "object-fit": "contain", "background-color": "#011211" }, src: "https://files.itab.link/icons/yiyan.svg" }, Ef = { class: "relative h-full", style: { "z-index": "1" } }, $f = { key: 0, class: "mb-1 f12 text-center", style: { color: "rgba(255, 255, 255, 0.6)" } }, Yf = ["title"], Vf = { key: 0, class: "f12 block text-gray-400" }, Hf = { name: "yiyan-icon" }, Rf = o(Object.assign(Hf, { props: { size: String }, setup(t22) {
  let l2 = t22, a2 = Tt(Math.floor(Math.random() * Math.floor(7))), n2 = Tt(f2.get("app-yiyan") || {});
  Fr(() => l2.size, async (t3) => {
    ["1x1"].includes(t3) || n2.value.date && n2.value.date == u2().format("YYYYMMDD") || t(() => import("./yiyan-Dv3NGzQp-4TEHAPS3.js"), ["assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css"]).then((t4) => {
      t4.yiyanInfoApi().then((t5) => {
        (t5.data || {}).content && (n2.value = t5.data || {}, f2.set("app-yiyan", t5.data || {}));
      });
    });
  }, { immediate: !0 });
  let s2 = $o(() => {
    let e2 = n2.value.thumb;
    return e2 || (e2 = `https://files.itab.link/itab/widget/yiyan/${a2.value}.jpg?x-oss-process=image/resize,limit_1,w_1920,h_1080/quality,q_90/format,webp`), e2;
  });
  return (e2, l3) => {
    let a3 = ke2;
    return Zr(), to(a3, null, { default: mn(() => [["1x1"].includes(t22.size) ? (Zr(), eo("img", If)) : (Zr(), eo("div", { key: 1, class: W(["h-full yiyan-wrap font-bold", `iconsize-${t22.size}`]), style: V([{ padding: "10px" }, `background-image:linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 20, 0, 0.7)), url(${s2.value})`]) }, [io("div", Ef, [["small", "medium", "2x2", "2x4"].includes(t22.size) ? (Zr(), eo("h2", $f, " 每日一言 ")) : po("", !0), io("p", { style: V(!["small", "medium", "2x2", "2x4"].includes(t22.size) && "height:100%"), class: "yiyan-content d-scrollbar-hide w-full", title: n2.value.content, onWheel: l3[0] || (l3[0] = sl(() => {
    }, ["stop"])) }, [io("span", { class: W(["text-center yiyan-text", { "line-clamp-2": ["2x1", "1x2"].includes(t22.size) }]) }, [uo(Z(n2.value.content) + " ", 1), ["medium", "2x4"].includes(t22.size) ? (Zr(), eo("span", Vf, Z(n2.value.from) + "，" + Z(n2.value.author), 1)) : po("", !0)], 2)], 44, Yf)])], 6))]), _: 1 });
  };
} }), [["__scopeId", "data-v-49f10a09"]]), Ff = /* @__PURE__ */ Object.freeze(Object.defineProperty({ __proto__: null, default: Rf }, Symbol.toStringTag, { value: "Module" })), Nf = (e2) => {
  let t22 = Object.assign({ "./app/bookmarks/icon/icon.vue": mt, "./app/calculator/icon/icon.vue": qt, "./app/calendar/icon/icon.vue": Al, "./app/clock/icon/icon.vue": Bl, "./app/countdown/icon/icon.vue": Da, "./app/daysMatter/icon/icon.vue": sn, "./app/daysMatter/icon/icon2.vue": hn, "./app/daysMatter/icon/icon3.vue": Pn, "./app/eat/icon/icon.vue": Xs, "./app/exchangerate/icon/icon.vue": gi2, "./app/games/icon/icon.vue": ji, "./app/habit/icon/icon.vue": Xi2, "./app/lusun/icon/icon.vue": co, "./app/mediaBox/icon/icon.vue": Mo, "./app/movieCalendar/icon/icon.vue": er, "./app/muyu/icon/icon.vue": Xr, "./app/notes/icon/icon.vue": tc, "./app/sbti/icon/icon.vue": yc, "./app/sport/icon/icon.vue": Vc, "./app/stock/icon/icon.vue": au, "./app/todayEnglish/icon/icon.vue": mu, "./app/todayShici/icon/icon.vue": ju, "./app/todo/icon/icon.vue": Fu, "./app/tomato/icon/icon.vue": yd, "./app/topsearch/icon/icon.vue": Sd, "./app/translate/icon/icon.vue": Qd, "./app/vgn/icon/icon.vue": mp, "./app/wallpaper/icon/icon.vue": zp, "./app/weather/icon/icon.vue": Up, "./app/worldClock/icon/icon.vue": mf, "./app/xiayigejiaqi/icon/icon.vue": Af, "./app/yiyan/icon/icon.vue": Ff });
  Object.keys(t22).map((l2) => {
    let a2 = l2.replace(/[^\d]/g, ""), n2 = `${l2.split("/")[2]}-icon${a2}`;
    e2.component(n2, t22[l2].default);
  });
};

export {
  v,
  h,
  e,
  he,
  ye,
  ze,
  Oe,
  Le2 as Le,
  De,
  Pe2 as Pe,
  mt,
  gt,
  ht2 as ht,
  yt,
  bt,
  _t,
  xt,
  wt,
  kt,
  zt,
  Ct,
  Mt,
  jt2 as jt,
  St2 as St,
  Ot,
  Lt2 as Lt,
  qt,
  Zt,
  Ut2 as Ut,
  Gt,
  Wt,
  ml,
  Al,
  Bl,
  Xl,
  Kl,
  Da,
  Ea,
  Ha,
  nn,
  sn,
  gn,
  hn,
  Dn,
  Pn,
  Zn,
  Bn,
  Gn,
  Qn,
  Kn,
  es,
  as,
  ns,
  is,
  os,
  cs,
  us,
  ps,
  fs2 as fs,
  ms,
  vs2 as vs,
  gs,
  hs2 as hs,
  ys,
  bs,
  _s,
  Ws,
  Js,
  Xs,
  gi2 as gi,
  hi,
  ji,
  Qi,
  Xi2 as Xi,
  io2 as io,
  co,
  uo2 as uo,
  po2 as po,
  fo2 as fo,
  vo,
  ho,
  Mo,
  er,
  or,
  ur,
  dr,
  pr,
  fr,
  mr,
  vr,
  gr,
  hr,
  yr,
  br,
  xr,
  wr,
  kr,
  zr,
  Cr,
  Lr,
  Dr,
  Pr,
  Tr,
  Ar,
  Yr,
  Hr2 as Hr,
  Rr,
  Fr2 as Fr,
  Nr,
  Xr,
  tc,
  mc,
  yc,
  Vc,
  Hc,
  Rc,
  Fc,
  Nc,
  qc,
  Bc,
  Uc,
  au,
  mu,
  _u,
  ju,
  Fu,
  Nu,
  qu,
  Zu,
  Qu,
  Xu,
  ed,
  td,
  ld,
  ad,
  yd,
  Sd,
  Pd,
  Td,
  Ad,
  Id,
  Qd,
  mp,
  zp,
  Mp,
  jp,
  Sp,
  Op,
  Dp,
  Pp,
  Tp,
  Ap,
  Ip,
  $p,
  Up,
  mf,
  Af,
  Ff,
  Nf
};
/**
 * @license @tabler/icons-vue v3.46.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
