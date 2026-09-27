import {
  t
} from "./chunk-CF5OMARP.js";
import {
  l
} from "./chunk-CU777VMF.js";
import {
  v
} from "./chunk-Y7XUUVTT.js";
import {
  F
} from "./chunk-R77VKLDU.js";
import {
  r as r2
} from "./chunk-3WLDU5B2.js";
import "./chunk-WGCOLTAW.js";
import {
  Jx
} from "./chunk-QX73FKBL.js";
import "./chunk-IEOKZKWO.js";
import {
  Zt,
  wt
} from "./chunk-LEVEZLTX.js";
import "./chunk-5MDIDYN5.js";
import {
  u
} from "./chunk-AFECQBGL.js";
import {
  f
} from "./chunk-YQ4PBQUM.js";
import "./chunk-C332WR7G.js";
import "./chunk-C3WGXGFI.js";
import {
  data_default
} from "./chunk-S7M5ZIRT.js";
import "./chunk-USGTF4JI.js";
import {
  o,
  r
} from "./chunk-ZBQAVDN7.js";
import {
  $o,
  Et,
  Lt,
  V,
  Z,
  Zr,
  eo,
  io,
  lo,
  mn,
  po,
  to,
  uo
} from "./chunk-E6JHFIG4.js";

// output/native-current/IconUser-DiRUc4gQ.js
var s = r("outline", "user", "User", [["path", { d: "M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0", key: "svg-0" }], ["path", { d: "M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2", key: "svg-1" }]]);

// output/native-current/Content-BYMeMOVW.js
var I = r("outline", "file-text", "FileText", [["path", { d: "M14 3v4a1 1 0 0 0 1 1h4", key: "svg-0" }], ["path", { d: "M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2", key: "svg-1" }], ["path", { d: "M9 9l1 0", key: "svg-2" }], ["path", { d: "M9 13l6 0", key: "svg-3" }], ["path", { d: "M9 17l6 0", key: "svg-4" }]]), M = r("outline", "world", "World", [["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0", key: "svg-0" }], ["path", { d: "M3.6 9h16.8", key: "svg-1" }], ["path", { d: "M3.6 15h16.8", key: "svg-2" }], ["path", { d: "M11.5 3a17 17 0 0 0 0 18", key: "svg-3" }], ["path", { d: "M12.5 3a17 17 0 0 1 0 18", key: "svg-4" }]]);
var z = { ref: "yiyanRef", class: "app-movie-wrap relative h-full select-text" }, x = { class: "app-movie-body relative" }, C = { class: "movie-main" }, q = { class: "movie-header" }, A = { class: "movie-title" }, P = { key: 0, class: "movie-rating" }, $ = { class: "movie-score" }, N = { class: "movie-badges" }, R = { key: 0, class: "movie-badge" }, U = { key: 1, class: "movie-badge" }, K = { key: 2, class: "movie-badge" }, S = { key: 1, class: "movie-director" }, W = { key: 2, class: "movie-quote" }, B = { key: 3, class: "movie-intro" }, D = { class: "intro-head" }, E = { class: "d-scrollbar-hide" }, F2 = ["href"], G = ["src", "alt"], L = /* @__PURE__ */ o({ __name: "Content", setup(i2) {
  let v2 = Et({});
  (async function() {
    let e2 = (f.get("app-movieCalendar") || {}).date;
    v2.value = await data_default.get("app-movieCalendar") || {}, !(v2.value.date && v2.value.date == e2) && r2().then((e3) => {
      let a2 = e3.data || {};
      v2.value = a2, data_default.set("app-movieCalendar", a2);
    });
  })();
  let L2 = $o(() => `${u().format("M月D日")} 周${Zt[u().day()]}`), Q = $o(() => X(v2.value.mov_type)), T = $o(() => X(v2.value.mov_area)), V2 = $o(() => {
    let e2 = Number(v2.value.mov_rating) || 0;
    return Math.min(5, Math.max(0, e2 / 2));
  });
  function X(e2) {
    return Array.isArray(e2) ? e2.filter(Boolean).join(" / ") : String(e2 || "").replace(/\s*\/\s*/g, " / ");
  }
  return (e2, s2) => (Zr(), eo("div", z, [io("span", { class: "movie-bg absolute z-0 bg-center bg-cover bg-no-repeat bg-black", style: V(`background-image:linear-gradient(rgba(0, 0, 0, 0.48), rgba(18, 8, 6, 0.55)), url(${v2.value.poster_url})`) }, null, 4), s2[4] || (s2[4] = io("span", { class: "movie-glow" }, null, -1)), io("div", x, [io("div", C, [io("div", q, [lo(Lt(wt), { size: 16, "stroke-width": 1.8 }), io("span", null, "每日电影 | " + Z(L2.value), 1)]), io("h2", A, Z(v2.value.mov_title), 1), v2.value.mov_rating ? (Zr(), eo("div", P, [lo(Lt(Jx), { class: "movie-stars", "model-value": V2.value, disabled: "", "allow-half": "", colors: ["#ffc14a", "#ffc14a", "#ffc14a"], "void-color": "rgba(255, 255, 255, 0.28)", "disabled-void-color": "rgba(255, 255, 255, 0.28)" }, null, 8, ["model-value"]), io("em", $, Z(v2.value.mov_rating), 1), s2[0] || (s2[0] = io("i", { class: "movie-score-split" }, null, -1)), s2[1] || (s2[1] = io("span", { class: "movie-score-label" }, "豆瓣评分", -1))])) : po("", !0), io("div", N, [Q.value ? (Zr(), eo("span", R, [lo(Lt(wt), { size: 14, "stroke-width": 1.8 }), uo(" " + Z(Q.value), 1)])) : po("", !0), v2.value.mov_year ? (Zr(), eo("span", U, [lo(Lt(v), { size: 14, "stroke-width": 1.8 }), uo(" " + Z(v2.value.mov_year), 1)])) : po("", !0), T.value ? (Zr(), eo("span", K, [lo(Lt(M), { size: 14, "stroke-width": 1.8 }), uo(" " + Z(T.value), 1)])) : po("", !0)]), v2.value.mov_director ? (Zr(), eo("p", S, [lo(Lt(s), { size: 14, "stroke-width": 2 }), uo(" 导演：" + Z(v2.value.mov_director), 1)])) : po("", !0), v2.value.mov_text ? (Zr(), eo("div", W, [lo(Lt(t), { class: "quote-mark quote-start", size: 22, "stroke-width": 2 }), io("p", null, Z(v2.value.mov_text), 1), lo(Lt(t), { class: "quote-mark quote-end", size: 22, "stroke-width": 2 })])) : po("", !0), v2.value.mov_intro ? (Zr(), eo("div", B, [io("div", D, [lo(Lt(I), { size: 14, "stroke-width": 1.8 }), s2[2] || (s2[2] = uo(" 剧情简介 "))]), io("p", E, Z(v2.value.mov_intro), 1)])) : po("", !0), v2.value.mov_link ? (Zr(), eo("a", { key: 4, class: "movie-source", href: v2.value.mov_link, target: "_blank" }, [lo(Lt(l), { size: 16, "stroke-width": 2 }), s2[3] || (s2[3] = uo(" 查看电影源 "))], 8, F2)) : po("", !0)]), io("img", { class: "movie-poster m-hide", src: v2.value.poster_url, alt: v2.value.mov_title }, null, 8, G)])], 512));
} }, [["__scopeId", "data-v-7c367638"]]);

// output/native-current/index-DTraj69b.js
var p = { __name: "index", setup: (p2) => (p3, m) => (Zr(), to(F, { width: "880px", height: "580px", destroyOnClose: !0, transparent: "" }, { default: mn(() => [lo(L)]), _: 1 })) };
export {
  p as default
};
/**
 * @license @tabler/icons-vue v3.46.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
