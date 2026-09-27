import {
  j as j2
} from "./chunk-UVE7RFYW.js";
import {
  j
} from "./chunk-ARIY5ORA.js";
import {
  a
} from "./chunk-MLS5ASDX.js";
import {
  f
} from "./chunk-J44CDCFS.js";
import {
  Av,
  Dv,
  dv,
  uv
} from "./chunk-QX73FKBL.js";
import {
  Lt as Lt2,
  he,
  hi
} from "./chunk-LEVEZLTX.js";
import {
  u
} from "./chunk-AFECQBGL.js";
import {
  ve
} from "./chunk-YQ4PBQUM.js";
import {
  t
} from "./chunk-C332WR7G.js";
import {
  o
} from "./chunk-ZBQAVDN7.js";
import {
  $o,
  Es,
  Et,
  Fr,
  Hr,
  Lt,
  Os,
  Tt,
  V,
  W,
  Xn,
  Z,
  Zr,
  di,
  eo,
  io,
  lo,
  mn,
  mo,
  on,
  po,
  sl,
  to,
  uo,
  vs,
  ws,
  yn
} from "./chunk-E6JHFIG4.js";

// output/native-current/d-font-family-G8Tq3WWS.js
var _ = { class: "d-font-family d-flex-between" }, y = { key: 0, style: { "white-space": "nowrap" } }, v = { class: "d-flex-between" }, S = { __name: "d-font-family", props: { modelValue: {}, title: String, size: { default: "small", type: String }, list: Boolean }, emits: ["update:modelValue"], setup(S22, { emit: x }) {
  let V2 = x, g = u().format("HH:mm"), w2 = [{ font: "auto", label: "默认" }, { font: "dsdigi", label: "dsdigi" }, { font: "MiSans", label: "MiSans" }, { font: "SFUI", label: "SFUI" }, { font: "HarmonyOS_Sans", label: "HarmonyOS" }, { font: "Arial", label: "Arial" }, { font: "Bebas", label: "Bebas" }, { font: "Silkscreen", label: "Silkscreen" }, { font: "JetBrains", label: "JetBrains" }, { font: "Aldrich", label: "Aldrich" }, { font: "TrainOne", label: "TrainOne" }, { font: "AbrilFatface", label: "AbrilFatface" }, { font: "Expansiva", label: "Expansiva" }, { font: "Nabla", label: "Nabla" }, { font: "Orbitron", label: "Orbitron" }, { font: "Merriweather", label: "Merriweather" }, { font: "BungeeHairline", label: "BungeeHairline" }];
  function B(e2) {
    V2("update:modelValue", e2);
  }
  return (l2, x2) => {
    let V22 = dv, A = uv;
    return Zr(), eo("div", _, [S22.title ? (Zr(), eo("p", y, Z(S22.title), 1)) : po("", !0), lo(A, { class: "ml-2", modelValue: S22.modelValue || "", "onUpdate:modelValue": B, size: S22.size }, { default: mn(() => [(Zr(), eo(Hr, null, Es(w2, (e2, a2) => lo(V22, { key: a2, label: e2.label, value: e2.font }, { default: mn(() => [io("div", v, [Os(l2.$slots, "default", mo({ ref_for: !0 }, { row: e2, index: a2 }), () => [io("span", { style: V({ fontFamily: e2.font }), class: "f18 b" }, Z(Lt(g)), 5), io("span", null, Z(e2.label), 1)])])]), _: 2 }, 1032, ["label", "value"])), 64))]), _: 3 }, 8, ["modelValue", "size"])]);
  };
} };

// output/native-current/IconError-zcYUlZdJ.js
var i = { style: { padding: "10px" }, class: "text-gray-600 leading-4 w-full h-full bg-white f13 al d-flex-center" }, r = o({}, [["render", function(s2, r2) {
  return Zr(), eo("div", i, [io("span", { onClick: r2[0] || (r2[0] = sl(() => {
  }, ["stop"])) }, r2[1] || (r2[1] = [io("p", null, [uo(" 当前NewTab版本过低 "), io("br"), uo("还未内置此组件 "), io("br"), uo("请到官网升级到最新版 "), io("a", { class: "d-inline f12 text-white bg-blue-500 rounded-2xl", target: "_blank", style: { padding: "4px 20px" }, href: "https://itab.link" }, "点击下载")], -1)]))]);
}]]);

// output/native-current/widget-icon-item-DpoFEOpE.js
var w = { class: "app-icon-panel-body w-full h-full overflow-hidden" }, k = { key: 0, class: "app-icon-panel-title f12 text-center" }, C = /* @__PURE__ */ o({ __name: "d-icon-panel", props: { size: { type: String, default: "2x2" }, title: String }, setup(e2) {
  let a2 = e2;
  return (c2, r2) => (Zr(), eo("div", { class: W(["app-icon-panel inline-block", `icon-size-${a2.size}`]), style: V(`margin-bottom:${e2.title ? "20px" : 0}`) }, [io("div", w, [Os(c2.$slots, "default", {}, void 0, !0)]), e2.title ? (Zr(), eo("h5", k, Z(a2.title), 1)) : po("", !0)], 6));
} }, [["__scopeId", "data-v-cf115b6e"]]), S2 = ["src", "alt"], $ = { name: "widgetIconItemComponent" }, M = o(Object.assign($, { props: { row: Object, size: String }, emits: ["add-click"], setup(e2) {
  let a2 = e2, i2 = /* @__PURE__ */ new Map(), s2 = $o(() => {
    var e3;
    return ((e3 = a2.row) == null ? void 0 : e3.type) === "component" ? ((e4) => {
      let a3 = e4.component, o2 = e4.config && e4.config.icon || "", t2 = a3, s3 = `${t2}:${o2}`, l2 = i2.get(s3);
      return l2 || (l2 = Xn({ loader: () => he(Object.assign({ "../../DialogApp/app/bookmarks/icon/icon.vue": () => t(() => import("./staleAssetReload.lazy-DksV6goU-ZPI6P4L5.js").then((e5) => e5.bc), ["assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css", "assets/IconPlus-B05F9kaq.css", "assets/staleAssetReload-DWJBVsQC.css"]), "../../DialogApp/app/calculator/icon/icon.vue": () => t(() => import("./staleAssetReload.lazy-DksV6goU-ZPI6P4L5.js").then((e5) => e5.bd), ["assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css", "assets/IconPlus-B05F9kaq.css", "assets/staleAssetReload-DWJBVsQC.css"]), "../../DialogApp/app/calendar/icon/icon.vue": () => t(() => import("./staleAssetReload.lazy-DksV6goU-ZPI6P4L5.js").then((e5) => e5.be), ["assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css", "assets/IconPlus-B05F9kaq.css", "assets/staleAssetReload-DWJBVsQC.css"]), "../../DialogApp/app/clock/icon/icon.vue": () => t(() => import("./staleAssetReload.lazy-DksV6goU-ZPI6P4L5.js").then((e5) => e5.bf), ["assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css", "assets/IconPlus-B05F9kaq.css", "assets/staleAssetReload-DWJBVsQC.css"]), "../../DialogApp/app/countdown/icon/icon.vue": () => t(() => import("./staleAssetReload.lazy-DksV6goU-ZPI6P4L5.js").then((e5) => e5.bh), ["assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css", "assets/IconPlus-B05F9kaq.css", "assets/staleAssetReload-DWJBVsQC.css"]), "../../DialogApp/app/daysMatter/icon/icon.vue": () => t(() => import("./staleAssetReload.lazy-DksV6goU-ZPI6P4L5.js").then((e5) => e5.bi), ["assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css", "assets/IconPlus-B05F9kaq.css", "assets/staleAssetReload-DWJBVsQC.css"]), "../../DialogApp/app/daysMatter/icon/icon2.vue": () => t(() => import("./staleAssetReload.lazy-DksV6goU-ZPI6P4L5.js").then((e5) => e5.bj), ["assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css", "assets/IconPlus-B05F9kaq.css", "assets/staleAssetReload-DWJBVsQC.css"]), "../../DialogApp/app/daysMatter/icon/icon3.vue": () => t(() => import("./staleAssetReload.lazy-DksV6goU-ZPI6P4L5.js").then((e5) => e5.bk), ["assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css", "assets/IconPlus-B05F9kaq.css", "assets/staleAssetReload-DWJBVsQC.css"]), "../../DialogApp/app/eat/icon/icon.vue": () => t(() => import("./staleAssetReload.lazy-DksV6goU-ZPI6P4L5.js").then((e5) => e5.bo), ["assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css", "assets/IconPlus-B05F9kaq.css", "assets/staleAssetReload-DWJBVsQC.css"]), "../../DialogApp/app/exchangerate/icon/icon.vue": () => t(() => import("./staleAssetReload.lazy-DksV6goU-ZPI6P4L5.js").then((e5) => e5.bq), ["assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css", "assets/IconPlus-B05F9kaq.css", "assets/staleAssetReload-DWJBVsQC.css"]), "../../DialogApp/app/games/icon/icon.vue": () => t(() => import("./staleAssetReload.lazy-DksV6goU-ZPI6P4L5.js").then((e5) => e5.br), ["assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css", "assets/IconPlus-B05F9kaq.css", "assets/staleAssetReload-DWJBVsQC.css"]), "../../DialogApp/app/habit/icon/icon.vue": () => t(() => import("./staleAssetReload.lazy-DksV6goU-ZPI6P4L5.js").then((e5) => e5.bs), ["assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css", "assets/IconPlus-B05F9kaq.css", "assets/staleAssetReload-DWJBVsQC.css"]), "../../DialogApp/app/lusun/icon/icon.vue": () => t(() => import("./staleAssetReload.lazy-DksV6goU-ZPI6P4L5.js").then((e5) => e5.bv), ["assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css", "assets/IconPlus-B05F9kaq.css", "assets/staleAssetReload-DWJBVsQC.css"]), "../../DialogApp/app/mediaBox/icon/icon.vue": () => t(() => import("./staleAssetReload.lazy-DksV6goU-ZPI6P4L5.js").then((e5) => e5.bw), ["assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css", "assets/IconPlus-B05F9kaq.css", "assets/staleAssetReload-DWJBVsQC.css"]), "../../DialogApp/app/movieCalendar/icon/icon.vue": () => t(() => import("./staleAssetReload.lazy-DksV6goU-ZPI6P4L5.js").then((e5) => e5.bx), ["assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css", "assets/IconPlus-B05F9kaq.css", "assets/staleAssetReload-DWJBVsQC.css"]), "../../DialogApp/app/muyu/icon/icon.vue": () => t(() => import("./staleAssetReload.lazy-DksV6goU-ZPI6P4L5.js").then((e5) => e5.bz), ["assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css", "assets/IconPlus-B05F9kaq.css", "assets/staleAssetReload-DWJBVsQC.css"]), "../../DialogApp/app/notes/icon/icon.vue": () => t(() => import("./staleAssetReload.lazy-DksV6goU-ZPI6P4L5.js").then((e5) => e5.bA), ["assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css", "assets/IconPlus-B05F9kaq.css", "assets/staleAssetReload-DWJBVsQC.css"]), "../../DialogApp/app/sbti/icon/icon.vue": () => t(() => import("./staleAssetReload.lazy-DksV6goU-ZPI6P4L5.js").then((e5) => e5.bE), ["assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css", "assets/IconPlus-B05F9kaq.css", "assets/staleAssetReload-DWJBVsQC.css"]), "../../DialogApp/app/sport/icon/icon.vue": () => t(() => import("./staleAssetReload.lazy-DksV6goU-ZPI6P4L5.js").then((e5) => e5.bG), ["assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css", "assets/IconPlus-B05F9kaq.css", "assets/staleAssetReload-DWJBVsQC.css"]), "../../DialogApp/app/stock/icon/icon.vue": () => t(() => import("./staleAssetReload.lazy-DksV6goU-ZPI6P4L5.js").then((e5) => e5.bH), ["assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css", "assets/IconPlus-B05F9kaq.css", "assets/staleAssetReload-DWJBVsQC.css"]), "../../DialogApp/app/todayEnglish/icon/icon.vue": () => t(() => import("./staleAssetReload.lazy-DksV6goU-ZPI6P4L5.js").then((e5) => e5.bJ), ["assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css", "assets/IconPlus-B05F9kaq.css", "assets/staleAssetReload-DWJBVsQC.css"]), "../../DialogApp/app/todayShici/icon/icon.vue": () => t(() => import("./staleAssetReload.lazy-DksV6goU-ZPI6P4L5.js").then((e5) => e5.bK), ["assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css", "assets/IconPlus-B05F9kaq.css", "assets/staleAssetReload-DWJBVsQC.css"]), "../../DialogApp/app/todo/icon/icon.vue": () => t(() => import("./staleAssetReload.lazy-DksV6goU-ZPI6P4L5.js").then((e5) => e5.bL), ["assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css", "assets/IconPlus-B05F9kaq.css", "assets/staleAssetReload-DWJBVsQC.css"]), "../../DialogApp/app/tomato/icon/icon.vue": () => t(() => import("./staleAssetReload.lazy-DksV6goU-ZPI6P4L5.js").then((e5) => e5.bM), ["assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css", "assets/IconPlus-B05F9kaq.css", "assets/staleAssetReload-DWJBVsQC.css"]), "../../DialogApp/app/topsearch/icon/icon.vue": () => t(() => import("./staleAssetReload.lazy-DksV6goU-ZPI6P4L5.js").then((e5) => e5.bN), ["assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css", "assets/IconPlus-B05F9kaq.css", "assets/staleAssetReload-DWJBVsQC.css"]), "../../DialogApp/app/translate/icon/icon.vue": () => t(() => import("./staleAssetReload.lazy-DksV6goU-ZPI6P4L5.js").then((e5) => e5.bO), ["assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css", "assets/IconPlus-B05F9kaq.css", "assets/staleAssetReload-DWJBVsQC.css"]), "../../DialogApp/app/vgn/icon/icon.vue": () => t(() => import("./staleAssetReload.lazy-DksV6goU-ZPI6P4L5.js").then((e5) => e5.bQ), ["assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css", "assets/IconPlus-B05F9kaq.css", "assets/staleAssetReload-DWJBVsQC.css"]), "../../DialogApp/app/wallpaper/icon/icon.vue": () => t(() => import("./staleAssetReload.lazy-DksV6goU-ZPI6P4L5.js").then((e5) => e5.bT), ["assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css", "assets/IconPlus-B05F9kaq.css", "assets/staleAssetReload-DWJBVsQC.css"]), "../../DialogApp/app/weather/icon/icon.vue": () => t(() => import("./staleAssetReload.lazy-DksV6goU-ZPI6P4L5.js").then((e5) => e5.bU), ["assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css", "assets/IconPlus-B05F9kaq.css", "assets/staleAssetReload-DWJBVsQC.css"]), "../../DialogApp/app/worldClock/icon/icon.vue": () => t(() => import("./staleAssetReload.lazy-DksV6goU-ZPI6P4L5.js").then((e5) => e5.bW), ["assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css", "assets/IconPlus-B05F9kaq.css", "assets/staleAssetReload-DWJBVsQC.css"]), "../../DialogApp/app/xiayigejiaqi/icon/icon.vue": () => t(() => import("./staleAssetReload.lazy-DksV6goU-ZPI6P4L5.js").then((e5) => e5.bX), ["assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css", "assets/IconPlus-B05F9kaq.css", "assets/staleAssetReload-DWJBVsQC.css"]), "../../DialogApp/app/yiyan/icon/icon.vue": () => t(() => import("./staleAssetReload.lazy-DksV6goU-ZPI6P4L5.js").then((e5) => e5.bY), ["assets/tailwind-rIhkj3gK.css", "assets/utils-CXX6ZX7A.css", "assets/IconPlus-B05F9kaq.css", "assets/staleAssetReload-DWJBVsQC.css"]) }), `../../DialogApp/app/${t2}/icon/icon${o2}.vue`, 7), errorComponent: r, suspensible: !0 }), i2.set(s3, l2)), l2;
    })(a2.row) : null;
  });
  return (i3, l2) => (Zr(), to(C, { style: { "border-radius": "16px", "--boxShadow": "0 4px 32px 0 rgba(0, 0, 0, 0.15)", "--icon-radius": "16px" }, class: "d-pointer d-reactive", size: a2.size }, { default: mn(() => [s2.value ? (Zr(), to(ws(s2.value), mo({ key: 0, size: a2.size }, i3.$attrs), null, 16, ["size"])) : e2.row.type == "icon" ? (Zr(), eo("img", { key: 1, class: "app-item-img w-full h-full object-contain", style: V(`--bgColor:${e2.row.backgroundColor}`), src: e2.row.src, alt: e2.row.name }, null, 12, S2)) : po("", !0)]), _: 1 }, 8, ["size"]));
} }), [["__scopeId", "data-v-4594afd2"]]), F = ["onClick"], X = { name: "widgetIconItem" }, q = o(Object.assign(X, { props: { row: Object, data: Object, height: { type: String, default: "190px" }, initSize: { type: String, default: "2x2" } }, emits: ["addToDesk", "update:initSize"], setup(s2, { emit: l2 }) {
  let A2 = ["1x1", "1x2", "2x1", "2x2", "2x4"], d2 = /* @__PURE__ */ Object.freeze({ "1x1": { perspective: "100px" }, "1x2": { perspective: "200px" }, "2x1": { perspective: "200px" }, "2x2": { perspective: "400px" }, "2x4": { perspective: "800px" } }), m2 = /* @__PURE__ */ Object.freeze({ transition: ".3s ease-out all", transform: "rotateX(0deg) rotateY(0deg)" });
  function O2(e2) {
    return e2 || "2x2";
  }
  let T2 = l2, P2 = s2, V2 = Et(null), w2 = Et(!1), k22 = Et(!1), C2 = Et(0), S22 = Et(0), $2 = 0, X2 = 0, q2 = 0, Y = 0, B = A2.map((e2) => ({ size: e2 })), G = Et(Math.max(0, A2.indexOf(O2(P2.initSize)))), J = Et([G.value]), W2 = $o(() => k22.value ? { transition: ".3s ease-out all", transform: `rotateX(${20 * S22.value}deg) rotateY(${20 * C2.value}deg)` } : m2);
  function H(e2, a2) {
    G.value = e2;
    let o2 = [e2];
    typeof a2 == "number" && a2 >= 0 && a2 !== e2 && o2.push(a2), J.value = o2, clearTimeout(Y), Y = window.setTimeout(() => {
      G.value === e2 && (J.value = [e2]);
    }, 320);
    let t2 = B[e2];
    t2 && (T2("update:initSize", t2.size), P2.row.size = t2.size);
  }
  function K() {
    w2.value = !1, k22.value = !0;
  }
  function Q() {
    k22.value = !1, C2.value = 0, S22.value = 0, $2 && (cancelAnimationFrame($2), $2 = 0);
  }
  function N(e2) {
    if (!k22.value) return;
    let a2 = e2.currentTarget.getBoundingClientRect();
    a2.width && a2.height && (X2 = 2 * ((e2.clientX - a2.left) / a2.width - 0.5), q2 = 2 * (0.5 - (e2.clientY - a2.top) / a2.height), $2 || ($2 = requestAnimationFrame(() => {
      $2 = 0, C2.value = X2, S22.value = q2;
    })));
  }
  function U() {
    ve(P2.row);
  }
  return Fr(() => P2.initSize, (e2) => {
    let a2 = A2.indexOf(O2(e2));
    a2 < 0 || a2 === G.value || on(() => {
      var e3, o2;
      (o2 = (e3 = V2.value) == null ? void 0 : e3.setActiveItem) == null || o2.call(e3, a2);
    });
  }), vs(() => {
    clearTimeout(Y), $2 && cancelAnimationFrame($2);
  }), (l3, c2) => {
    let A3 = Av, m3 = Dv;
    return Zr(), to(m3, { class: "widget-icon-carousel", autoplay: !1, arrow: "always", height: s2.height, ref_key: "containerRef", ref: V2, onChange: H, "initial-index": G.value, style: { "--el-carousel-indicator-width": "8px", "--el-carousel-indicator-height": "8px", "--el-carousel-indicator-padding-vertical": "4px" } }, { default: mn(() => [(Zr(!0), eo(Hr, null, Es(Lt(B), (e2, a2) => (Zr(), to(A3, { key: e2.size }, { default: mn(() => [io("div", { class: "widget-icon-item-wrap flex items-center justify-center h-full w-full", style: V(Lt(d2)[e2.size]), onMouseenter: K, onMouseleave: Q, onMousemove: N }, [io("div", { style: V(W2.value), onClick: U }, [yn(io("i", { title: "添加", class: W(["icon-add d-icon cursor-pointer f16 absolute rounded-full z-10", { isAdd: w2.value }]), onClick: sl((a3) => (function(e3, a4) {
      e3.size = a4 || e3.size || "2x2", w2.value = !0, T2("addToDesk", e3, a4);
    })(s2.row, e2.size), ["stop"]) }, [lo(Lt(Lt2), { class: "icon close" }), lo(Lt(a), { class: "icon select" })], 10, F), [[di, s2.row.name]]), J.value.includes(a2) ? (Zr(), to(M, { key: 0, row: s2.row, size: e2.size, data: s2.data }, null, 8, ["row", "size", "data"])) : po("", !0)], 4)], 36)]), _: 2 }, 1024))), 128))]), _: 1 }, 8, ["height", "initial-index"]);
  };
} }), [["__scopeId", "data-v-0b94c619"]]);

// output/native-current/bg-select-BR_OJGMB.js
var k2 = { class: "bg-select-title ml15 mb5" }, v2 = { key: 0, class: "bg-image d-nowrap" }, h = ["onClick"], y2 = ["src"], j3 = o(Object.assign({ name: "countdownBgSelect" }, { __name: "bg-select", props: { modelValue: { type: Object, default: () => ({}) } }, emits: ["change", "update:modelValue"], setup(o2, { emit: j22 }) {
  let C2 = j22, x = Tt("color"), w2 = o2;
  function _2(e2, l2) {
    w2.modelValue.mask = 0, w2.modelValue.bgColor = e2, C2("change", { ...w2.modelValue, bgColor: e2, mask: 0 }, l2);
  }
  w2.modelValue.mask == null && (w2.modelValue.mask = 0);
  let D = Array(25).fill("").map((e2, l2) => `https://files.itab.link/itab/widget/yiyan/${l2 + 1}.jpg`);
  return (t2, j32) => (Zr(), eo("span", null, [io("li", k2, [j32[4] || (j32[4] = uo(" 背景 ")), io("span", { onClick: j32[0] || (j32[0] = (e2) => x.value = "color"), class: W({ active: x.value === "color" }) }, "颜色", 2), io("span", { onClick: j32[1] || (j32[1] = (e2) => x.value = "img"), class: W({ active: x.value === "img" }) }, "图片", 2)]), io("li", { class: "setting-panel d-flex-between relative d-hidden", style: V([{ transition: "0.2s" }, `height:${x.value === "img" ? 100 : 46}px`]) }, [x.value === "img" ? (Zr(), eo("div", v2, [lo(f, null, { default: mn(() => [(Zr(!0), eo(Hr, null, Es(Lt(D), (l2) => (Zr(), eo("li", { class: "d-inline mr5 img-select-item", onClick: (e2) => {
    _2(l2, "#fff");
  }, key: l2 }, [io("img", { src: Lt(hi)(l2, 42, 52) }, null, 8, y2)], 8, h))), 128))]), _: 1 }), lo(j2, { style: { "line-height": "24px" }, title: "蒙版", min: 0, max: 70, unit: "%", modelValue: o2.modelValue.mask, "onUpdate:modelValue": j32[2] || (j32[2] = (e2) => o2.modelValue.mask = e2) }, null, 8, ["modelValue"])])) : (Zr(), to(j, { key: 1, style: { height: "30px" }, colors: ["#ffffff", "#fbbe23", "#fc4548", "#4b3c36", "#7dac68", "#023373", "#c8ac70", "#f4eee6", "#372128", "#c82c34", "#054092", "#a3ddb9", "#245877"], onChange: _2, modelValue: o2.modelValue.bgColor, "onUpdate:modelValue": j32[3] || (j32[3] = (e2) => o2.modelValue.bgColor = e2) }, null, 8, ["modelValue"]))], 4)]));
} }), [["__scopeId", "data-v-1d136e43"]]);

export {
  S,
  C,
  q,
  j3 as j
};
