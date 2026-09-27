import {
  o
} from "./chunk-ZBQAVDN7.js";
import {
  Fr,
  Tt,
  V,
  Z,
  Zr,
  eo,
  fs,
  hs,
  io
} from "./chunk-E6JHFIG4.js";

// output/native-current/utils-t0Ul179p.js
var u = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
function d() {
  try {
    let { protocol: e2 } = globalThis.location || {};
    return e2 === "http:" || e2 === "https:";
  } catch {
    return !1;
  }
}
var f = () => window.location.protocol === "chrome-extension:" || window.location.protocol === "moz-extension:", b = () => {
  var e2 = window.navigator.userAgent.toLowerCase();
  return e2.indexOf("firefox") > 0 ? "firefox" : e2.indexOf("edg") > 0 ? "edge" : e2.indexOf("chrome/") > 0 ? "chrome" : e2.indexOf("safari/") > 0 ? "safari" : "other";
}, p = /* @__PURE__ */ Object.freeze(Object.defineProperty({ __proto__: null, browserName: b, isExt: f, isMobile: u, isWeb: d }, Symbol.toStringTag, { value: "Module" })), h = "https://base.itab.link/";
h = "https://base.itab.link/";
var m = "https://base.itab.link/", g = "https://files.itab.link/", x = "https://api.itab.link/", v = /* @__PURE__ */ new WeakMap(), w;
function y(e2, t2) {
  v.set(e2, t2), (w || (w = new ResizeObserver((e3) => {
    var t3;
    for (let n2 of e3) (t3 = v.get(n2.target)) == null || t3(n2);
  })), w).observe(e2);
}
var M = /* @__PURE__ */ o({ __name: "d-text-icon", props: { bgColor: String, text: String, size: String }, setup(e2) {
  let u2 = e2, d2 = Tt(), f2 = Tt(), b2 = null, p2 = 0, h2 = -1, m2 = -1, g2 = null, x2 = 0;
  function M2(e3) {
    h2 = e3, p2 || (p2 = requestAnimationFrame(() => {
      p2 = 0, (function(e4) {
        let t2 = f2.value;
        if (!t2 || e4 <= 0) return;
        let n2 = u2.text || "";
        if (e4 === m2 && n2 === g2) return;
        if (n2 !== g2 && (g2 = n2, x2 = t2.clientWidth), m2 = e4, !x2) return void (t2.style.transform = "translateX(-50%)");
        let o2 = e4 / x2;
        o2 > 1 && (o2 = 1), t2.style.transform = `scale(${o2 - 0.06}) translateX(-50%)`;
      })(h2);
    }));
  }
  function _2(e3) {
    let t2 = e3.contentRect.width;
    t2 === m2 && (u2.text || "") === g2 || M2(t2);
  }
  return fs(() => {
    let e3 = d2.value;
    e3 && (b2 = e3, y(e3, _2));
  }), hs(() => {
    p2 && (cancelAnimationFrame(p2), p2 = 0);
    let e3 = b2;
    b2 = null, (function(e4) {
      e4 && w && (w.unobserve(e4), v.delete(e4));
    })(e3);
  }), Fr(() => u2.text, () => {
    b2 && (g2 = null, M2(m2 > 0 ? m2 : b2.clientWidth));
  }, { flush: "post" }), (t2, n2) => (Zr(), eo("div", { ref_key: "textIcon", ref: d2, class: "d-text-icon flex w-full h-full text-white items-center whitespace-nowrap relative", style: V({ backgroundColor: e2.bgColor }) }, [io("span", { ref_key: "textTxt", ref: f2, class: "d-text-txt" }, Z(e2.text), 513)], 4));
} }, [["__scopeId", "data-v-0fdc8024"]]), _ = (e2 = 21) => {
  let t2 = "", n2 = crypto.getRandomValues(new Uint8Array(e2 |= 0));
  for (; e2--; ) t2 += "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict"[63 & n2[e2]];
  return t2;
};
function O(e2) {
  return Math.floor(Math.random() * Math.floor(e2));
}
function k(e2) {
  let t2 = e2 || ["#1681ff", "#0071c0", "#f9620e", "#9326e9", "#276ce6", "#ee3b3b", "#f01313", "#13ae67", "#2ecc71", "#33c5c5", "#9b59b6", "#f1c40f", "#e67e22", "#e74c3c", "#fbbe23", "#fc4548", "#4b3c36", "#7dac68", "#023373", "#c8ac70", "#372128", "#c82c34", "#054092", "#a3ddb9"];
  return t2[Math.round(Math.random() * (t2.length - 1))];
}
var j = () => /Macintosh|Mac os x/i.test(navigator.userAgent), C = (e2) => !isNaN(e2), S = (e2) => {
  try {
    let t2 = document.createElement("textarea");
    return t2.value = e2, document.body.appendChild(t2), t2.select(), document.execCommand("copy"), document.body.removeChild(t2), !0;
  } catch {
    return !1;
  }
}, A = (e2) => {
  for (let t2 in e2) return !1;
  return !0;
}, I = (e2, t2) => {
  let n2 = /* @__PURE__ */ new Map();
  return e2.filter((e3) => !n2.has(e3[t2]) && n2.set(e3[t2], 1));
}, P = (e2) => {
  let t2 = _() + Math.random().toString().slice(-4);
  return e2 ? `${e2}_${t2}` : t2;
}, z = () => {
  let e2 = window.devicePixelRatio || 1;
  return `${parseInt(window.screen.width * e2)}x${parseInt(window.screen.height * e2)}`;
}, R = (e2) => /^\d{11}$/.test(e2) ? e2.substring(0, 3) + "****" + e2.substring(e2.length - 4) : e2, E = (e2, t2) => {
  let n2 = {};
  return Object.keys(e2).map((o2) => {
    var r2;
    let a2 = o2.substring(o2.indexOf(t2) + t2.length + 1).split(".").reverse().slice(1).reverse().join(".").replace(/(\/|-)[a-z]/g, (e3) => e3[1].toUpperCase());
    n2[a2] = (r2 = e2[o2]) != null && r2.default ? e2[o2].default : e2[o2];
  }), n2;
}, N = /* @__PURE__ */ Object.freeze(Object.defineProperty({ __proto__: null, copyText: S, getRandomColor: k, getRandomInt: O, getScreen: z, isEmptyObject: A, isMac: j, isNumber: C, maskPhoneNumber: R, resolveGlobMetaObject: E, uniqBy: I, uuid: P }, Symbol.toStringTag, { value: "Module" }));

export {
  u,
  d,
  f,
  b,
  p,
  m,
  g,
  x,
  M,
  _,
  O,
  k,
  j,
  C,
  S,
  A,
  I,
  P,
  z,
  R,
  E,
  N
};
