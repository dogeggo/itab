import {
  C
} from "./chunk-PQSIXL3U.js";
import {
  o as o2
} from "./chunk-ATZ4SDGE.js";
import {
  a
} from "./chunk-DKEACAVL.js";
import {
  p
} from "./chunk-OATREBEQ.js";
import {
  F
} from "./chunk-R77VKLDU.js";
import "./chunk-WGCOLTAW.js";
import "./chunk-KH6YM5E4.js";
import "./chunk-BJRSIPJ7.js";
import {
  Tw
} from "./chunk-QX73FKBL.js";
import {
  bt
} from "./chunk-LEVEZLTX.js";
import "./chunk-5MDIDYN5.js";
import "./chunk-AFECQBGL.js";
import "./chunk-YQ4PBQUM.js";
import "./chunk-C332WR7G.js";
import "./chunk-C3WGXGFI.js";
import "./chunk-S7M5ZIRT.js";
import "./chunk-USGTF4JI.js";
import {
  o,
  r
} from "./chunk-ZBQAVDN7.js";
import {
  Es,
  Hr,
  Lt,
  Tt,
  Z,
  Zr,
  eo,
  ht,
  io,
  lo,
  mn,
  on,
  po,
  sl,
  to,
  uo,
  ws
} from "./chunk-E6JHFIG4.js";

// output/native-current/index-B_Zp1p2k.js
var I = r("outline", "news", "News", [["path", { d: "M16 6h3a1 1 0 0 1 1 1v11a2 2 0 0 1 -4 0v-13a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1v12a3 3 0 0 0 3 3h11", key: "svg-0" }], ["path", { d: "M8 8l4 0", key: "svg-1" }], ["path", { d: "M8 12l4 0", key: "svg-2" }], ["path", { d: "M8 16l4 0", key: "svg-3" }]]), M = { class: "item-li d-main p-2 inline-block" }, L = { class: "d-layout" }, z = ["href"], F2 = { class: "d-layout-content" }, U = ["href"], V = ["href"], Z2 = { class: "f12 d-sub d-flex-y" }, $ = { class: "d-icon mr5" }, B = /* @__PURE__ */ o({ __name: "news", props: { row: Object, index: Number }, setup: (c2) => (d2, p2) => {
  let m2 = Tw;
  return Zr(), eo("li", M, [io("div", L, [io("a", { class: "item-cover mr-2 d-layout-aside overflow-hidden w-30 h-20 rounded-xl", onClick: p2[0] || (p2[0] = sl(() => {
  }, ["stop"])), onMouseup: p2[1] || (p2[1] = sl(() => {
  }, ["stop"])), target: "_blank", href: c2.row.detail_link }, [lo(m2, { class: "d-hidden d-block w-full h-full", lazy: "", fit: "cover", src: c2.row.cover }, null, 8, ["src"])], 40, z), io("div", F2, [io("a", { class: "d-main block text-base d-elip mb-1", style: { "margin-bottom": "4px" }, onClick: p2[2] || (p2[2] = sl(() => {
  }, ["stop"])), onMouseup: p2[3] || (p2[3] = sl(() => {
  }, ["stop"])), href: c2.row.detail_link, target: "_blank" }, Z(c2.row.title), 41, U), io("a", { class: "d-sub d-elip2 text-xs", onClick: p2[4] || (p2[4] = sl(() => {
  }, ["stop"])), onMouseup: p2[5] || (p2[5] = sl(() => {
  }, ["stop"])), target: "_blank", href: c2.row.detail_link }, Z(c2.row.content), 41, V), io("p", Z2, [io("i", $, [lo(Lt(o2))]), uo(" " + Z(c2.row.create_time), 1)])])])]);
} }, [["__scopeId", "data-v-c92026c9"]]), G = ["title"], N = ["href"], R = ["src"], A = { class: "item-info" }, D = { class: "f14 title d-layout text-base pt-2" }, O = { class: "d-elip b d-layout-content" }, P = { key: 0, title: "小黑盒评分", class: "item-score f12 size-7.5 flex items-center justify-center rounded-full" }, S = { class: "d-nowrap" }, X = { class: "item-footer d-flex-y text-sm mt-2 h-8 overflow-hidden rounded-md" }, E = { class: "footer-sale d-flex-center px-2 h-full font-bold text-white text-[18px]" }, H = { class: "ml-1 f16 b" }, q = { class: "f12 ml-1", style: { color: "#69809a", "text-decoration": "line-through" } }, Q = { class: "d-inline mr-1 f12 d-cell ar", style: { color: "rgb(114, 152, 197)" } }, T = /* @__PURE__ */ o({ __name: "discount", props: { row: Object, index: Number, type: String }, setup(a2) {
  function i2(e2) {
    return e2 / 100;
  }
  function n2(e2) {
    if (!e2) return "";
    let t2 = 1e3 * e2 - Date.now();
    if (t2 <= 0) return "-";
    let s2 = Math.floor(t2 / 864e5);
    return s2 >= 1 ? `剩余${s2}天` : `剩余${Math.max(1, Math.floor(t2 / 36e5))}小时`;
  }
  return (m2, u2) => {
    let f2 = Tw;
    return Zr(), eo("li", { class: "item-li px-2 inline-block mb-4 text-xs h-full", title: a2.row.game_china_name || a2.row.game_name }, [io("a", { href: a2.row.detail_link, class: "d-main w-full rounded-xl inline-block relative p-2 overflow-hidden", target: "_blank" }, [a2.row.platform ? (Zr(), eo("img", { key: 0, class: "item-platform absolute top-2 left-2 size-6 z-1", src: `https://files.itab.link/itab/widget/vgn/${a2.row.platform}.svg`, alt: "" }, null, 8, R)) : po("", !0), lo(f2, { class: "rounded-md overflow-hidden h-40 w-full hover:scale-103 transition-all duration-300", lazy: "", fit: "cover", src: a2.row.spu_show_cover, alt: "" }, null, 8, ["src"]), io("div", A, [io("p", D, [io("span", O, Z(a2.row.game_china_name || a2.row.game_name), 1), a2.row.game_metacritic_score ? (Zr(), eo("span", P, Z(Number(a2.row.game_metacritic_score).toFixed(1)), 1)) : po("", !0)]), io("p", S, [(Zr(!0), eo(Hr, null, Es(a2.row.tags, (e2) => (Zr(), eo("span", { class: "item-tag", key: e2 }, Z(e2), 1))), 128))]), io("div", X, [io("span", E, "-" + Z(a2.row.discount_percent) + "%", 1), io("span", H, "￥" + Z(i2(a2.row.discount)), 1), io("span", q, "￥" + Z(i2(a2.row.initial)), 1), io("span", Q, Z(n2(a2.row.discount_end)), 1)])])], 8, N)], 8, G);
  };
} }, [["__scopeId", "data-v-dc32da48"]]), W = { class: "vgn-content h-full" }, J = { class: "pt-1 pb-1 text-center font-bold", style: { "background-color": "var(--bg-card)" } }, K = { class: "flex items-center" }, Y = { class: "d-icon mr-1 f16" }, ee = { name: "appVgn" }, te = o(Object.assign(ee, { components: { news: B, discount: T, popular: T } }, { setup(e2) {
  let s2 = Tt(null), a2 = ht({ page: 1, size: 30, type: "discount" }), c2 = [{ name: "打折游戏", id: "discount", icon: bt }, { name: "游戏资讯", id: "news", icon: I }, { name: "热门游戏", id: "popular", icon: a }];
  function d2({ props: e3 }) {
    on(() => {
      s2.value.reload(!0);
    });
  }
  return (e3, p2) => (Zr(), to(F, { height: "700px" }, { default: mn(() => [io("div", W, [p2[1] || (p2[1] = io("img", { class: "vgn-bg", src: "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='201'%20height='200'%20viewBox='0%200%20201%20200'%20fill='none'%3e%3cdefs%3e%3crect%20id='path_0'%20x='0'%20y='0'%20width='200.390625'%20height='200'%20/%3e%3clinearGradient%20id='linear_0'%20x1='18.647%25'%20y1='50%25'%20x2='102.972%25'%20y2='15.856%25'%20gradientUnits='objectBoundingBox'%3e%3cstop%20offset='0'%20stop-color='%2346607F'%20stop-opacity='0.01'%20/%3e%3cstop%20offset='0.4896'%20stop-color='%2346607F'%20stop-opacity='0.62'%20/%3e%3cstop%20offset='1'%20stop-color='%2346607F'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3c/defs%3e%3cg%20opacity='1'%20transform='translate(0%200)%20rotate(0%20100.1953125%20100)'%3e%3cmask%20id='bg-mask-0'%20fill='white'%3e%3cuse%20xlink:href='%23path_0'%3e%3c/use%3e%3c/mask%3e%3cg%20mask='url(%23bg-mask-0)'%20%3e%3cpath%20id='分组%201'%20fill-rule='evenodd'%20fill='url(%23linear_0)'%20transform='translate(-15.999999999999988%2012.00000000000013)%20rotate(25.33969092118414%20100.07853802596054%2088.46865571046011)'%20opacity='1'%20d='M156.403%2062.5083C166.753%2062.5083%20175.153%2054.1083%20175.153%2043.7583C175.153%2033.4083%20166.753%2025.0083%20156.403%2025.0083C146.053%2025.0083%20137.653%2033.4083%20137.653%2043.7583C137.653%2054.1083%20146.053%2062.5083%20156.403%2062.5083Z%20M10.32%2075.67C4.84%2077.86%200.95%2082.83%200.15%2088.69C-0.65%2094.54%201.76%20100.37%206.45%20103.95L36.91%20127.76C32.94%20143.37%2038.86%20159.83%2051.86%20169.33C64.87%20178.84%2082.34%20179.49%2096.01%20170.97C109.69%20162.45%20116.81%20146.48%20114%20130.61L162.65%2087.06C179.04%2084.7%20192.69%2073.29%20197.92%2057.57C203.15%2041.86%20199.05%2024.53%20187.33%2012.83L187.34%2012.82C175.63%201.11%20158.31%20-2.99%20142.59%202.24C126.88%207.46%20115.46%2021.12%20113.1%2037.51L73.12%2098.1C67.68%2098.38%2062.36%2099.78%2057.5%20102.21L26.66%2078.1C22.05%2074.41%2015.81%2073.48%2010.32%2075.67Z%20M82.1372%20121.448C87.6672%20125.768%2089.8372%20133.108%2087.5572%20139.738C85.2672%20146.358%2079.0272%20150.798%2072.0272%20150.788C68.4872%20150.788%2064.9272%20149.648%2061.9272%20147.308L48.8572%20137.098L48.8472%20137.508C48.8472%20144.488%2051.6172%20151.178%2056.5472%20156.108C61.4872%20161.048%2068.1772%20163.818%2075.1572%20163.818L75.1672%20163.808C85.1972%20163.778%2094.3372%20158.048%2098.7372%20149.028C103.127%20140.008%20102.007%20129.278%2095.8472%20121.358C89.6872%20113.438%2079.5672%20109.718%2069.7372%20111.758L82.1372%20121.448Z%20M187.663%2043.762C187.663%2026.502%20173.673%2012.502%20156.413%2012.502C145.243%2012.502%20134.923%2018.452%20129.343%2028.122C123.753%2037.792%20123.753%2049.712%20129.343%2059.382C134.923%2069.052%20145.233%2075.012%20156.404%2075.012C173.663%2075.012%20187.654%2061.022%20187.663%2043.762Z%20'%20/%3e%3c/g%3e%3c/g%3e%3c/svg%3e" }, null, -1)), io("div", J, [lo(p, { modelValue: Lt(a2).type, "onUpdate:modelValue": p2[0] || (p2[0] = (e4) => Lt(a2).type = e4), data: c2, onClick: d2, style: { "--active-bg": "linear-gradient(-90deg, #5187d9, #3883f7)", width: "420px", margin: "0 auto" } }, { row: mn(({ row: e4 }) => [io("div", K, [io("i", Y, [(Zr(), to(ws(e4.icon), { size: 16, "stroke-width": 2 }))]), uo(" " + Z(e4.name), 1)])]), _: 1 }, 8, ["modelValue"])]), lo(C, { class: "pt10 relative pl10 pr10", ref_key: "vgnRef", ref: s2, height: "calc(100% - 60px)", url: "vgn/list", params: Lt(a2), "cache-time": 12e5 }, { default: mn(({ row: e4, index: s3 }) => [(Zr(), to(ws(Lt(a2).type), { row: e4, index: s3 }, null, 8, ["row", "index"]))]), _: 1 }, 8, ["params"])])]), _: 1 }));
} }), [["__scopeId", "data-v-fd18d7bb"]]);
export {
  te as default
};
/**
 * @license @tabler/icons-vue v3.46.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
