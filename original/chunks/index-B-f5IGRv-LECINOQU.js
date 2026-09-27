import {
  a
} from "./chunk-DKEACAVL.js";
import {
  r as r2
} from "./chunk-HOPRWPLK.js";
import {
  F
} from "./chunk-R77VKLDU.js";
import {
  o as o2
} from "./chunk-YQNSOEDL.js";
import {
  nt
} from "./chunk-WGCOLTAW.js";
import {
  PI,
  fS,
  ix,
  rx,
  sx,
  uc,
  vS
} from "./chunk-QX73FKBL.js";
import "./chunk-IEOKZKWO.js";
import {
  Zt,
  gt,
  ht as ht2
} from "./chunk-LEVEZLTX.js";
import "./chunk-5MDIDYN5.js";
import {
  B,
  u
} from "./chunk-AFECQBGL.js";
import "./chunk-YQ4PBQUM.js";
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
  Es,
  Et,
  Fr,
  Hr,
  Lt,
  Tt,
  V,
  W,
  Z,
  Zr,
  di,
  eo,
  hs,
  ht,
  io,
  lo,
  mn,
  po,
  to,
  uo,
  ws,
  yn
} from "./chunk-E6JHFIG4.js";

// output/native-current/Content-JXE3XMCH.js
var X = r("outline", "ball-basketball", "BallBasketball", [["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0", key: "svg-0" }], ["path", { d: "M5.65 5.65l12.7 12.7", key: "svg-1" }], ["path", { d: "M5.65 18.35l12.7 -12.7", key: "svg-2" }], ["path", { d: "M12 3a9 9 0 0 0 9 9", key: "svg-3" }], ["path", { d: "M3 12a9 9 0 0 1 9 9", key: "svg-4" }]]), $ = r("outline", "ball-football", "BallFootball", [["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0", key: "svg-0" }], ["path", { d: "M12 7l4.76 3.45l-1.76 5.55h-6l-1.76 -5.55l4.76 -3.45", key: "svg-1" }], ["path", { d: "M12 7v-4m3 13l2.5 3m-.74 -8.55l3.74 -1.45m-11.44 7.05l-2.56 2.95m.74 -8.55l-3.74 -1.45", key: "svg-2" }]]), q = r("outline", "olympics", "Olympics", [["path", { d: "M3 9a3 3 0 1 0 6 0a3 3 0 1 0 -6 0", key: "svg-0" }], ["path", { d: "M15 9a3 3 0 1 0 6 0a3 3 0 1 0 -6 0", key: "svg-1" }], ["path", { d: "M9 9a3 3 0 1 0 6 0a3 3 0 1 0 -6 0", key: "svg-2" }], ["path", { d: "M6 15a3 3 0 1 0 6 0a3 3 0 1 0 -6 0", key: "svg-3" }], ["path", { d: "M12 15a3 3 0 1 0 6 0a3 3 0 1 0 -6 0", key: "svg-4" }]]);
var E = { key: 0 }, Q = { key: 1 }, U = { key: 2 }, W2 = { class: "flex items-center justify-start" }, G = ["src"], K = ["title"], N = { key: 3 }, V2 = { class: "flex items-center justify-end" }, Z2 = ["title"], J = ["src"], aa = { key: 4 }, ea = { class: "ar pr20" }, ta = ["href"], la = /* @__PURE__ */ o({ __name: "match", props: { params: Object }, setup(h2) {
  let v2 = Tt(!1), k2 = [{ title: "时间", key: "startTime", width: 120 }, { title: "赛事", key: "matchName", width: 140 }, { title: "状态", key: "matchStatusText", width: 80 }, { title: "主", key: "host", width: 120 }, { title: "vs", key: "vsLine", width: 80 }, { title: "客", key: "guest", width: 120 }, { title: "状态", key: "link" }], g2 = Tt(), b2 = Tt([]), x2 = h2;
  Fr(() => x2.params, (a2) => {
    D2(a2);
  }, { deep: !0 });
  let Y2 = null;
  function D2(a2) {
    Y2?.abort();
    let e2 = new AbortController();
    Y2 = e2, v2.value = !0, o2(a2, { signal: e2.signal }).then((a3) => {
      b2.value = a3.data || [];
    }).catch((a3) => {
      nt.isCancel(a3);
    }).finally(() => {
      e2.signal.aborted || (v2.value = !1);
    });
  }
  return D2(x2.params), hs(() => {
    Y2?.abort();
  }), (a2, e2) => {
    let t2 = fS, h3 = vS, x3 = PI;
    return yn((Zr(), eo("div", { class: "match-wrap", ref_key: "matchWrapRef", ref: g2 }, [lo(h3, { data: b2.value, style: { "--el-bg-color": "transparent", "--el-table-header-bg-color": "rgba(255, 255, 255, 0.04)", "--el-table-row-hover-bg-color": "rgba(255, 255, 255, 0.03)" } }, { default: mn(() => [(Zr(), eo(Hr, null, Es(k2, (a3) => lo(t2, { align: "center", prop: a3.key, label: a3.title, width: a3.width }, { default: mn(({ row: e3 }) => [a3.key == "startTime" ? (Zr(), eo("div", E, Z(Lt(r2)(e3.startTime, "MM-DD HH:mm")), 1)) : a3.key == "matchStatusText" ? (Zr(), eo("div", Q, [io("span", { style: V(e3.matchStatusText == "进行中" ? "color:#fe5f57" : e3.matchStatusText == "已结束" ? "color:rgba(255,255,255,1)" : "color:rgba(255,255,255,.4)") }, Z(e3.matchStatusText), 5)])) : a3.key == "host" ? (Zr(), eo("div", U, [io("div", W2, [io("img", { class: "inline-block size-6 bg-[rgba(255,255,255,.2)] rounded-full p-1", src: e3.leftLogo.logo, alt: "" }, null, 8, G), io("p", { title: e3.leftLogo.name, class: "d-elip ml-1 text-xs" }, Z(e3.leftLogo.name), 9, K)])])) : a3.key == "guest" ? (Zr(), eo("div", N, [io("div", V2, [io("p", { title: e3.rightLogo.name, class: "d-elip mr-1 text-xs" }, Z(e3.rightLogo.name), 9, Z2), io("img", { class: "inline-block size-6 bg-[rgba(255,255,255,.2)] rounded-full p-1", src: e3.rightLogo.logo, alt: "" }, null, 8, J)])])) : a3.key == "link" ? (Zr(), eo("div", aa, [io("div", ea, [io("a", { class: "d-sub f13", href: e3.link, target: "_blank" }, [lo(Lt(uc), { type: e3.matchStatusText == "进行中" ? "danger" : "", size: "small", plain: "" }, { default: mn(() => [uo(Z(e3.pcDataSourceText), 1)]), _: 2 }, 1032, ["type"])], 8, ta)])])) : po("", !0)]), _: 2 }, 1032, ["prop", "label", "width"])), 64))]), _: 1 }, 8, ["data"])])), [[x3, v2.value]]);
  };
} }, [["__scopeId", "data-v-793f8f32"]]), sa = { class: "match-wrap flex w-full overflow-hidden" }, oa = { class: "match-list d-sub" }, ra = ["href"], ia = ["src"], na = { key: 1, class: "index" }, da = { class: "d-sub", style: { width: "60px" } }, ca = { class: "d-layout-aside h-full pt-13 relative", style: { width: "160px" } }, ua = { class: "d-icon f24 mr10" }, pa = ["src"], ma = { class: "d-icon f24 mr10" }, fa = { class: "d-flex-y sport-header d-layout pt10 mb10 pb10" }, ya = { class: "d-layout-aside ar", style: { width: "70px" } }, ha = { class: "sport-header-date h-full d-layout-content relative" }, va = ["onClick"], ka = { class: "sport-ul-body" }, ga = { style: { color: "rgba(var(--alpha-color), 0.6)" } }, ba = { class: "d-main" }, xa = { class: "d-layout-aside", style: { width: "120px" } }, Ma = { name: "appSport", components: { match: la, hotSearch: /* @__PURE__ */ o({ __name: "hotSearch", props: { data: { type: Array, default: [] } }, setup(e2) {
  let t2 = Tt({});
  return o2({ type: "hotSearch" }).then((a2) => {
    t2.value = a2.data || [];
  }), (a2, e3) => (Zr(), eo("div", sa, [io("div", oa, [(Zr(!0), eo(Hr, null, Es(t2.value, (a3, e4) => (Zr(), eo("a", { href: a3.play_link, target: "_blank", class: "d-elip", key: a3.id }, [e4 < 3 ? (Zr(), eo("img", { key: 0, class: "index", src: `https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_web/public/icons/hot/hot_top${a3.rank}.png`, alt: "" }, null, 8, ia)) : (Zr(), eo("span", na, Z(a3.rank), 1)), io("span", da, Z(a3.title), 1)], 8, ra))), 128))])]));
} }, [["__scopeId", "data-v-995b047a"]]), BasketballOutline: X, FootballOutline: $, FireOutlined: a, Olympics: q, IconBallFootball: $, IconBallBasketball: X, IconFlame: a, IconOlympics: q } }, wa = o(Object.assign(Ma, { setup(e2) {
  u.extend(B);
  let t2 = Tt([]), M2 = Tt([]), w2 = u().format("YYYY-MM-DD"), j2 = ht({ date: w2, source: "hot" }), _2 = Tt("#133f0a"), B2 = Tt(null), A2 = Et(0), R2 = Et(u("2026-08-01").toDate().getTime() < Date.now() ? 1 : 2);
  function H2(a2) {
    a2 = a2 || u().format("YYYY-MM-DD");
    let e3 = u(a2).subtract(14, "day");
    M2.value = Array(29).fill("").map((a3, t3) => {
      let l2 = u(864e5 * t3 + e3.valueOf()).format("YYYY-MM-DD");
      return { week: "周" + Zt[u(l2).day()], date: u(l2).format("YYYY-MM-DD") };
    });
  }
  (async function() {
    let a2 = "app-sport-category", e3 = await data_default.getItem(a2), l2 = e3.data || [];
    t2.value = l2, e3.isExp && o2({ type: "category" }).then((e4) => {
      let l3 = e4.data || [];
      t2.value = l3, l3.length && data_default.set(a2, l3, 1728e5);
    });
  })(), H2();
  let P2 = Tt("match");
  function X2(a2, e3) {
    let t3 = e3[0];
    t3 == "hot" ? _2.value = "#133f0a" : t3 == "basketball" && (_2.value = "#1d428a"), t3 == "football" && (_2.value = "#133f0a"), j2.source = a2;
  }
  function $2(a2) {
    let e3 = "";
    e3 = a2 == "prev" ? u(j2.date).subtract(1, "day").format("YYYY-MM-DD") : a2 == "next" ? u(j2.date).add(1, "day").format("YYYY-MM-DD") : a2, A2.value = 80 * u.duration(u(j2.date).diff(e3)).asDays(), j2.date = e3;
  }
  return (a2, e3) => R2.value == 1 ? (Zr(), eo("div", { key: 0, class: "d-layout h-full select-text el-dark-var dark d-main", style: V(`background:linear-gradient(to bottom,${_2.value} 0%,  #010101 70%`) }, [io("div", ca, [lo(Lt(rx), { "unique-opened": !0, "active-text-color": "#fff", "default-active": "hot", onSelect: X2, style: { "--el-menu-hover-bg-color": "rgba(255, 255, 255, 0.09)", "--el-menu-text-color": "var(--d-main)", "--el-menu-item-font-size": "16px", "--el-menu-border-color": "transparent" } }, { default: mn(() => [(Zr(!0), eo(Hr, null, Es(t2.value, (a3) => (Zr(), eo(Hr, { key: a3.id }, [a3.children ? (Zr(), to(Lt(ix), { key: 0, index: a3.id, style: { "--el-menu-item-font-size": "14px" } }, { title: mn(() => [io("i", ua, [(Zr(), to(ws(a3.icon)))]), uo(Z(a3.name), 1)]), default: mn(() => [(Zr(!0), eo(Hr, null, Es(a3.children, (a4) => (Zr(), to(Lt(sx), { key: a4.id, index: a4.id }, { default: mn(() => [io("img", { class: "size-7 mr-2 rounded-full p-1", style: { "background-color": "rgba(255, 255, 255, 0.2)" }, src: a4.icon }, null, 8, pa), uo(" " + Z(a4.name), 1)]), _: 2 }, 1032, ["index"]))), 128))]), _: 2 }, 1032, ["index"])) : (Zr(), to(Lt(sx), { key: 1, index: a3.id }, { default: mn(() => [io("i", ma, [(Zr(), to(ws(a3.icon)))]), io("span", null, Z(a3.name), 1)]), _: 2 }, 1032, ["index"]))], 64))), 128))]), _: 1 })]), yn(io("div", { class: "h-full d-layout-content ml10", ref_key: "sportContentRef", ref: B2 }, [io("div", fa, [io("div", ya, [yn(io("span", { onClick: e3[0] || (e3[0] = (a3) => $2(Lt(w2))), style: { "background-color": "rgba(255, 255, 255, 0.1)", color: "#fff", "border-radius": "50%", "vertical-align": "9px", "line-height": "24px" }, class: "size-6 d-inline ac f12 d-pointer mr-2" }, "今", 512), [[di, Lt(w2) !== Lt(j2).date]]), io("i", { class: "d-icon f26", onClick: e3[1] || (e3[1] = (a3) => $2("prev")) }, [lo(Lt(gt), { stroke: 1.5 })])]), io("div", ha, [io("ul", { class: "sport-ul h-full d-flex absolute d-hidden", style: V([{ "flex-wrap": "nowrap" }, { "--translateX": A2.value + "px" }]), onTransitionend: e3[2] || (e3[2] = (a3) => {
    H2(Lt(j2).date), A2.value = 0;
  }) }, [(Zr(!0), eo(Hr, null, Es(M2.value, (a3) => (Zr(), eo("li", { onClick: (e4) => $2(a3.date), class: W(["d-flex-center h-full d-pointer", { active: Lt(j2).date == a3.date }]), key: a3 }, [io("div", ka, [io("span", ga, Z(a3.week), 1), io("div", ba, Z(Lt(u)(a3.date).format("MM-DD")), 1)])], 10, va))), 128))], 36)]), io("div", xa, [io("i", { class: "d-icon f26", onClick: e3[3] || (e3[3] = (a3) => $2("next")) }, [lo(Lt(ht2), { stroke: 1.5 })])])]), P2.value === "match" ? (Zr(), to(la, { key: 0, params: Lt(j2) }, null, 8, ["params"])) : po("", !0)], 512), [[di, Lt(j2).source !== "olympic"]])], 4)) : po("", !0);
} }), [["__scopeId", "data-v-cbfb1c2c"]]);

// output/native-current/index-B-f5IGRv.js
var m = { __name: "index", setup: (m2) => (m3, p) => (Zr(), to(F, { destroyOnClose: !0, transparent: "" }, { default: mn(() => [lo(wa)]), _: 1 })) };
export {
  m as default
};
/**
 * @license @tabler/icons-vue v3.46.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
