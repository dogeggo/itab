import {
  F
} from "./chunk-R77VKLDU.js";
import {
  n
} from "./chunk-JBUAPD4L.js";
import {
  s
} from "./chunk-WJHO7UIO.js";
import "./chunk-WGCOLTAW.js";
import {
  wv
} from "./chunk-QX73FKBL.js";
import "./chunk-IEOKZKWO.js";
import {
  _u
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
  o
} from "./chunk-ZBQAVDN7.js";
import {
  Es,
  Et,
  Hr,
  Lt,
  W,
  Z,
  Zr,
  eo,
  gi,
  io,
  lo,
  mn,
  po,
  to
} from "./chunk-E6JHFIG4.js";

// output/native-current/Content-BC9l0L7X.js
var x = { class: "app-shici-body al relative", style: { "z-index": "2" } }, k = { class: "ac quotes relative", style: { "z-index": "2" } }, g = { class: "f14 mb20" }, C = { class: "relative", style: { "max-width": "700px", margin: "0 auto", "line-height": "1.6", "z-index": "1" } }, Y = { class: "b" }, I = { class: "f12 mb20" }, q = { class: "mb50 al" }, S = /* @__PURE__ */ o({ __name: "Content", setup(_2) {
  gi((a2) => ({ "54b10617": D.value }));
  let S2 = Et(null), z = Et({}), D = Et(""), M = Et(!1);
  function P(a2) {
    D.value = a2;
  }
  async function R(a2) {
    let e2 = null;
    a2 || (e2 = await data_default.get("app-todayShici"), z.value = e2 || {}), !a2 && e2 && e2.date == u().format("YYYYMMDD") || s().then((a3) => {
      let e3 = a3.data || {};
      e3.date = u().format("YYYYMMDD"), z.value = e3, data_default.set("app-todayShici", e3);
      let t2 = { quotes: e3.quotes, dynasty: e3.dynasty, title: e3.title, author: e3.author, date: e3.date };
      f.set("app-todayShici", t2), M.value = !0, setTimeout(() => {
        M.value = !1;
      }, 1200);
    });
  }
  function A() {
    S2.value.scrollTo({ top: 500, behavior: "smooth" });
  }
  return R(), (a2, m2) => (Zr(), eo("div", { ref_key: "appShiciRef", ref: S2, class: "app-shici-wrap w-full relative h-full d-scrollbar-hide select-text dark:!text-white" }, [io("div", x, [io("div", k, [io("h2", { class: W(["quotes-text", { animation: M.value }]) }, Z(z.value.quotes), 3), io("p", g, " 出自 " + Z(z.value.dynasty) + "⋅ " + Z(z.value.author) + " 的《" + Z(z.value.title) + "》 ", 1), io("button", { onClick: m2[0] || (m2[0] = (a3) => R(!0)), class: "f14 mb20 app-button" }, " 换一句 ")]), lo(_u, { onColor: P, class: "app-bg", style: { width: "100%", height: "auto" } }), io("div", { onClick: A, class: "arrow-down d-icon f22", style: { color: "#fff" } }, [lo(Lt(n))])]), io("div", C, [z.value.content ? (Zr(), to(Lt(wv), { key: 0, shadow: "never", class: "mb50", style: { "margin-top": "120px" } }, { default: mn(() => [m2[1] || (m2[1] = io("h2", { class: "f20 mb20" }, "全文", -1)), io("h2", Y, Z(z.value.title), 1), io("p", I, Z(z.value.dynasty) + "⋅ " + Z(z.value.author), 1), io("div", null, [(Zr(!0), eo(Hr, null, Es(z.value.content.split(`
`), (a3) => (Zr(), eo("p", { style: {}, class: "f14 mb10", key: a3 }, Z(a3), 1))), 128))])]), _: 1, __: [1] })) : po("", !0), z.value.translate ? (Zr(), to(Lt(wv), { key: 1, shadow: "never", class: "mb50" }, { default: mn(() => [io("div", q, [m2[2] || (m2[2] = io("h2", { class: "f20 mb20" }, "译文", -1)), (Zr(!0), eo(Hr, null, Es(z.value.translate.split(`
`), (a3) => (Zr(), eo("p", { style: { "text-indent": "2em" }, class: "mb20", key: a3 }, Z(a3), 1))), 128))])]), _: 1 })) : po("", !0), z.value.annotation ? (Zr(), to(Lt(wv), { key: 2, shadow: "never", class: "mb50" }, { default: mn(() => [m2[3] || (m2[3] = io("h2", { class: "f20 mb20" }, "注释", -1)), (Zr(!0), eo(Hr, null, Es(z.value.annotation.split(`
`), (a3) => (Zr(), eo("p", { class: "mb20", key: a3 }, Z(a3), 1))), 128))]), _: 1, __: [3] })) : po("", !0), z.value.preface ? (Zr(), to(Lt(wv), { key: 3, shadow: "never", class: "mb50" }, { default: mn(() => [m2[4] || (m2[4] = io("h2", { class: "f20 mb20" }, "序", -1)), (Zr(!0), eo(Hr, null, Es(z.value.preface.split(`
`), (a3) => (Zr(), eo("p", { style: { "line-height": "22px", "text-indent": "2em" }, key: a3 }, Z(a3), 1))), 128))]), _: 1, __: [4] })) : po("", !0)])], 512));
} }, [["__scopeId", "data-v-e71b8cf3"]]);

// output/native-current/index-CCFCNICM.js
var p = { __name: "index", setup: (p2) => (p3, m) => (Zr(), to(F, { width: "860px", height: "550px", destroyOnClose: !0, transparent: "" }, { default: mn(() => [lo(S)]), _: 1 })) };
export {
  p as default
};
