import {
  F
} from "./chunk-R77VKLDU.js";
import {
  A,
  h
} from "./chunk-OTQ4QMPF.js";
import "./chunk-QX73FKBL.js";
import "./chunk-LEVEZLTX.js";
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
  Es,
  Et,
  Fr,
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
  io,
  lo,
  mn,
  on,
  po,
  to,
  uo,
  yn
} from "./chunk-E6JHFIG4.js";

// output/native-current/Content-CQRIrL_I.js
var y = { t: "1676621805594", class: "icon", viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "p-id": "5349", "xmlns:xlink": "http://www.w3.org/1999/xlink", width: "200", height: "200" }, L = o({}, [["render", function(e2, i2) {
  return Zr(), eo("svg", y, i2[0] || (i2[0] = [io("path", { d: "M0 0h1024v1024H0z", fill: "#D8D8D8", "fill-opacity": "0", "p-id": "5350" }, null, -1), io("path", { d: "M384 554.666667a85.333333 85.333333 0 0 1 85.333333 85.333333v106.666667a192 192 0 0 1-186.346666 191.914666L277.333333 938.666667c-106.048 0-192-85.952-192-192s85.952-192 192-192h106.666667z m362.666667 0a192 192 0 0 1 192 192 192 192 0 0 1-186.346667 191.914666L746.666667 938.666667a192 192 0 0 1-191.914667-186.346667L554.666667 746.666667v-106.666667a85.333333 85.333333 0 0 1 81.066666-85.226667L640 554.666667h106.666667zM277.333333 85.333333a192 192 0 0 1 191.914667 186.346667L469.333333 277.333333v106.666667a85.333333 85.333333 0 0 1-81.066666 85.226667L384 469.333333h-106.666667a192 192 0 0 1-192-192 192 192 0 0 1 186.346667-191.914666L277.333333 85.333333z m469.333334 0c106.048 0 192 85.952 192 192s-85.952 192-192 192h-106.666667a85.333333 85.333333 0 0 1-85.333333-85.333333v-106.666667a192 192 0 0 1 186.346666-191.914666L746.666667 85.333333z", "p-id": "5351" }, null, -1)]));
}]]), z = { class: "d-icon" }, b = { class: "games-body" }, x = { class: "games-ul" }, C = ["onClick"], _ = ["src", "alt"], I = { class: "mt-1" }, M = { class: "frame-content h-full w-full" }, $ = ["src"], D = { name: "games-content" }, H2 = o(Object.assign(D, { props: { size: String, row: Object }, setup(w2) {
  let y2 = w2, { list: D2, isFinally: H22, load: S, loadMore: W2 } = A(), A2 = Et("list"), F2 = Tt({}), G = Et(""), O = Et(null);
  function P(l2) {
    l2?.link && (A2.value = "iframe", F2.value = l2, G.value !== l2.link && (G.value = l2.link), on(() => {
      var l3, s2;
      (s2 = (l3 = O.value) == null ? void 0 : l3.contentWindow) == null || s2.focus();
    }));
  }
  function R() {
    var l2;
    if (A2.value !== "iframe") return;
    let s2 = (l2 = O.value) == null ? void 0 : l2.contentWindow;
    s2 && s2.focus();
  }
  function U(l2) {
    if (A2.value !== "list" || H22.value) return;
    let s2 = l2.target;
    s2.scrollTop + s2.clientHeight >= s2.scrollHeight - 80 && W2();
  }
  return Fr(() => {
    var l2;
    return (l2 = y2.row) == null ? void 0 : l2.link;
  }, (l2) => {
    l2 && P(y2.row);
  }, { immediate: !0 }), S(), (e2, i2) => (Zr(), eo("div", { class: W(["h-full games-wrap select-text", `icon-size-${w2.size}`]) }, [io("div", { class: "ac games-title relative f16", style: V(A2.value !== "list" && `background-color:${F2.value.bgColor};color:${F2.value.color}`) }, [yn(io("div", { class: "games-menu d-flex-center f20", onClick: i2[0] || (i2[0] = (l2) => A2.value = "list") }, [io("i", z, [lo(L)])], 512), [[di, A2.value !== "list"]]), uo(" " + Z(A2.value === "list" ? "游戏中心" : F2.value.title), 1)], 4), io("div", b, [yn(io("div", { class: "games-scroll d-scrollbar", onScroll: U }, [io("div", x, [(Zr(!0), eo(Hr, null, Es(Lt(D2), (e3) => (Zr(), eo("div", { key: e3._id || e3.link, class: "games-item", onClick: (l2) => P(e3) }, [io("img", { class: "games-item-icon", src: Lt(h)(e3.icon), alt: e3.title, width: "60", height: "60", loading: "lazy", decoding: "async" }, null, 8, _), io("p", I, Z(e3.title), 1)], 8, C))), 128))])], 544), [[di, A2.value === "list"]]), yn(io("div", M, [G.value ? (Zr(), eo("iframe", { key: 0, ref_key: "dialogIframeRef", ref: O, class: "w-full h-full", src: G.value, frameborder: "0", scrolling: "no", onLoad: R }, null, 40, $)) : po("", !0)], 512), [[di, A2.value !== "list"]])])], 2));
} }), [["__scopeId", "data-v-f6abc698"]]);

// output/native-current/index-BmuJZDcW.js
var m = { __name: "index", setup: (m2) => (m3, n) => (Zr(), to(F, { width: "1010px", height: "600px", destroyOnClose: !0, transparent: "" }, { default: mn(() => [lo(H2, H(co(m3.$attrs)), null, 16)]), _: 1 })) };
export {
  m as default
};
