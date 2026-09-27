import {
  i,
  o as o2,
  r as r2
} from "./chunk-DIT3QALX.js";
import {
  F,
  e,
  n
} from "./chunk-R77VKLDU.js";
import "./chunk-WGCOLTAW.js";
import {
  Me,
  aO
} from "./chunk-QX73FKBL.js";
import {
  Zt,
  xt,
  yt
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
import "./chunk-S7M5ZIRT.js";
import {
  O,
  S
} from "./chunk-USGTF4JI.js";
import {
  o,
  r
} from "./chunk-ZBQAVDN7.js";
import {
  $o,
  Et,
  Fr,
  Lt,
  Tt,
  V,
  W,
  Z,
  Zr,
  di,
  eo,
  ht,
  io,
  lo,
  mn,
  on,
  po,
  to,
  uo,
  vs,
  yn
} from "./chunk-E6JHFIG4.js";

// output/native-current/IconHeart-BExHryA7.js
var t = r("outline", "heart", "Heart", [["path", { d: "M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572", key: "svg-0" }]]);

// output/native-current/Content-lKh_-Pkd.js
var q = { class: "app-yiyan-body text-center relative pt-12", style: { "z-index": "1" } }, B = { class: "f15" }, F2 = { class: "app-yiyan-text" }, R = { class: "app-yiyan-footer" }, P = { key: 0, class: "yiyan-icon" }, S2 = { class: "f12 number" }, U = { class: "f12 number" }, X = /* @__PURE__ */ o({ __name: "Content", setup(H2) {
  let X2 = Tt(null), { toggle: E, isFullscreen: G } = Me(X2), K = ht({ randomBg: O(7), isLikeClick: !1, isLike: !1, isFullScreen: !1, date: "", day: "" }), O2 = Et(f.get("app-yiyan") || {});
  var Q;
  o2(Q).then((a2) => {
    O2.value = a2.data || {};
  }), W2();
  let T = $o(() => {
    let a2 = O2.value.pic_url;
    return a2 || (a2 = `https://files.itab.link/itab/widget/yiyan/${K.randomBg}.jpg?x-oss-process=image/resize,limit_0,m_fill,w_1920,h_1080/quality,q_90/format,webp`), a2;
  }), V2 = null;
  function W2(a2 = !1) {
    let e2 = Zt[u().day()];
    a2 ? (K.date = `${u().format("YYYY.MM.DD")} 星期${e2}`, K.day = u().format("HH:mm:ss")) : (K.date = `${u().format("YYYY.MM.DD")} 星期${e2}`, K.day = u().format("HH:mm"));
  }
  function Z2(a2) {
    K.isLike = !1;
    let e2 = u(O2.value.date).valueOf();
    a2 == "next" ? e2 += 864e5 : e2 -= 864e5;
    let s2 = u(e2).format("YYYYMMDD");
    s2 > u().format("YYYYMMDD") ? aO.warning("明天怎么翻也翻不过去") : s2 < 20220706 ? aO.warning("不能再往前查看了") : o2({ date: s2 }).then((a3) => {
      O2.value = a3.data || {}, K.randomBg = O(7);
      let e3 = Zt[u(O2.value.date).day()];
      K.date = `${u(O2.value.date).format("YYYY.MM")} 星期${e3}`, K.day = u(O2.value.date).format("DD");
    });
  }
  function J(a2) {
    a2.code === "F11" && (a2.preventDefault(), E());
  }
  function N() {
    K.isLike = !K.isLike, K.isLike && (r2({ _id: O2.value._id }).then((a2) => {
      let e2 = a2.data;
      e2 && (O2.value.like = e2.like);
    }), K.isLikeClick = !0, setTimeout(() => {
      K.isLikeClick = !1;
    }, 600));
  }
  function aa() {
    S(O2.value.content), aO.success("已复制到剪贴板"), i({ _id: O2.value._id }).then((a2) => {
      let e2 = a2.data;
      e2 && (O2.value.share = e2.share);
    });
  }
  return V2 && clearInterval(V2), Fr(G, (a2) => {
    W2(a2), V2 && clearInterval(V2), V2 = setInterval(() => {
      W2(a2);
    }, 1e3);
  }, { immediate: !0 }), on(() => {
    e(document, "keydown", J);
  }), vs(() => {
    clearInterval(V2), n(document, "keydown", J);
  }), (a2, e2) => (Zr(), eo("div", { ref_key: "yiyanRef", ref: X2, class: "app-yiyan-wrap font-bold relative h-full select-text" }, [io("div", { class: "yiyan-bg absolute z-0", style: V(`background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 20, 0, 0.4)), url(${T.value})`) }, null, 4), io("div", q, [io("i", { class: "prev arrow-icon d-icon", onClick: e2[0] || (e2[0] = (a3) => Z2("prev")) }), io("i", { class: "next arrow-icon d-icon", onClick: e2[1] || (e2[1] = (a3) => Z2("next")) }), io("span", B, Z(Lt(K).date), 1), io("p", { class: W(["app-yiyan-day", { fullscreen: Lt(G) }]) }, Z(Lt(K).day), 3), io("p", F2, [uo(Z(O2.value.content) + " ", 1), yn(io("span", { class: "app-yiyan-author f12 d-block", style: { opacity: "0.4", "font-weight": "400" } }, Z(O2.value.from) + "，" + Z(O2.value.author), 513), [[di, O2.value.author]])]), io("p", R, [Lt(G) ? po("", !0) : (Zr(), eo("span", P, [io("i", { title: "分享", onClick: aa, class: "d-icon", style: { "font-size": "30px" } }, [lo(Lt(yt))]), io("em", S2, Z(O2.value.share || 0), 1)])), io("span", { class: W(["yiyan-icon", { fullscreen: Lt(G) }]) }, [io("i", { class: "d-icon", title: "设为屏保", onClick: e2[2] || (e2[2] = (...a3) => Lt(E) && Lt(E)(...a3)), style: { "font-size": "30px" } }, [lo(Lt(xt))])], 2), Lt(G) ? po("", !0) : (Zr(), eo("span", { key: 1, class: W(["yiyan-icon yiyan-like", [{ like: Lt(K).isLike }, { click: Lt(K).isLikeClick }]]) }, [io("i", { title: "喜欢", class: "d-icon", style: { "font-size": "30px" }, onClick: N }, [lo(Lt(t), { class: "heart" })]), io("em", U, Z(O2.value.like || 0), 1)], 2))])]), e2[3] || (e2[3] = io("p", { class: "yiyan-datasource absolute bottom-2 flex items-center justify-center w-full opacity-30 hover:opacity-60", style: { "font-size": "10px", height: "18px" } }, [uo(" 数据来源于 "), io("a", { class: "h-[18px]", target: "_blank", href: "https://tide.fm/" }, [io("img", { class: "h-[18px]", src: "/original/tide.png" })])], -1))], 512));
} }, [["__scopeId", "data-v-a2dbf9e2"]]);

// output/native-current/index-PS2fn7z1.js
var p = { __name: "index", setup: (p2) => (p3, m) => (Zr(), to(F, { width: "860px", height: "550px", destroyOnClose: !0, transparent: "" }, { default: mn(() => [lo(X)]), _: 1 })) };
export {
  p as default
};
/**
 * @license @tabler/icons-vue v3.46.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
