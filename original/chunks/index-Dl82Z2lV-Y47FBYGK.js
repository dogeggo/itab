import {
  e
} from "./chunk-5ZYAY5VD.js";
import {
  o as o2
} from "./chunk-ATZ4SDGE.js";
import {
  a
} from "./chunk-6W4CGHPQ.js";
import {
  r as r2
} from "./chunk-HOPRWPLK.js";
import {
  Dx,
  NM,
  Y_,
  fb,
  nM
} from "./chunk-FPRSI2ZI.js";
import {
  s
} from "./chunk-FLJ65QRG.js";
import {
  f as f2
} from "./chunk-J44CDCFS.js";
import {
  F
} from "./chunk-R77VKLDU.js";
import {
  p
} from "./chunk-RCFYLWZK.js";
import {
  PI,
  dv,
  uv
} from "./chunk-QX73FKBL.js";
import {
  Dp,
  Mp,
  Op,
  Sp,
  _t
} from "./chunk-LEVEZLTX.js";
import "./chunk-5MDIDYN5.js";
import "./chunk-AFECQBGL.js";
import {
  f
} from "./chunk-YQ4PBQUM.js";
import "./chunk-C332WR7G.js";
import "./chunk-C3WGXGFI.js";
import "./chunk-S7M5ZIRT.js";
import "./chunk-USGTF4JI.js";
import {
  o,
  r
} from "./chunk-ZBQAVDN7.js";
import {
  $o,
  Es,
  Et,
  Hr,
  Lt,
  W,
  Z,
  Zr,
  di,
  eo,
  io,
  lo,
  mn,
  po,
  sl,
  to,
  uo,
  yn
} from "./chunk-E6JHFIG4.js";

// output/native-current/Content-wxzYaPTd.js
var F2 = r("outline", "calendar-due", "CalendarDue", [["path", { d: "M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12", key: "svg-0" }], ["path", { d: "M16 3v4", key: "svg-1" }], ["path", { d: "M8 3v4", key: "svg-2" }], ["path", { d: "M4 11h16", key: "svg-3" }], ["path", { d: "M11 16a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-4" }]]), O = r("outline", "indent-decrease", "IndentDecrease", [["path", { d: "M20 6l-7 0", key: "svg-0" }], ["path", { d: "M20 12l-9 0", key: "svg-1" }], ["path", { d: "M20 18l-7 0", key: "svg-2" }], ["path", { d: "M8 8l-4 4l4 4", key: "svg-3" }]]), Q = r("outline", "indent-increase", "IndentIncrease", [["path", { d: "M20 6l-11 0", key: "svg-0" }], ["path", { d: "M20 12l-7 0", key: "svg-1" }], ["path", { d: "M20 18l-11 0", key: "svg-2" }], ["path", { d: "M4 8l4 4l-4 4", key: "svg-3" }]]), R = r("outline", "wind", "Wind", [["path", { d: "M5 8h8.5a2.5 2.5 0 1 0 -2.34 -3.24", key: "svg-0" }], ["path", { d: "M3 12h15.5a2.5 2.5 0 1 1 -2.34 3.24", key: "svg-1" }], ["path", { d: "M4 16h5.5a2.5 2.5 0 1 1 -2.34 3.24", key: "svg-2" }]]);
var T = { class: "app-weather-list-select relative h-full w-60 bg-white/[0.07] p-4 pl-2 text-[#efefef] backdrop-blur-[6px]" }, E = { key: 0 }, N = { class: "absolute -top-1 -left-1 rotate-y-180 text-[#fff1f1]" }, Y = { class: "text-left" }, Z2 = ["title"], $ = ["src"], B = { class: "text-right flex flex-col justify-between" }, J = { class: "m-0 text-[22px] leading-[35px] font-bold text-[#efefef]" }, K = ["onClick"], ee = { class: "absolute -top-1 -left-1 rotate-y-180 text-[#fff1f1]" }, te = ["onClick"], le = { class: "text-left" }, ae = { class: "m-0 text-sm leading-[35px] text-[#efefef]" }, se = ["src"], oe = { class: "text-right flex flex-col justify-between" }, ie = { class: "m-0 text-[22px] leading-[35px] font-bold text-[#efefef]" }, ne = { key: 0 }, re = /* @__PURE__ */ o({ __name: "weather-list", props: { cityId: [String, Number] }, emits: ["change"], setup(l2, { emit: g2 }) {
  let b2 = g2, { defaultCity: _2, cityList: k2, cityOptions: j2, searchCity: z2, addCity: C2, removeCity: I2, initCities: M2 } = p();
  M2();
  let A2 = Et("");
  function P2(e2) {
    b2("change", e2.location);
  }
  async function W2(e2) {
    await C2(e2), A2.value = "";
  }
  return (a2, g3) => (Zr(), eo("div", T, [g3[2] || (g3[2] = io("h2", { class: "mb-2.5 text-left" }, "天气列表", -1)), lo(Lt(uv), { class: "mb-2.5 w-full", "append-to": "", modelValue: A2.value, "onUpdate:modelValue": g3[0] || (g3[0] = (e2) => A2.value = e2), "remote-method": Lt(z2), filterable: "", remote: "", placeholder: "输入城市、乡镇", onChange: W2, size: "small", style: { "--el-text-color-placeholder": "rgba(255, 255, 255, 0.55)", "--el-input-text-color": "#fff", "--el-fill-color-blank": "rgba(255, 255, 255, 0.2)", "--el-border-color": "transparent", "--el-select-multiple-input-color": "#fff" } }, { default: mn(() => [(Zr(!0), eo(Hr, null, Es(Lt(j2), (t2) => (Zr(), to(Lt(dv), { key: t2.value, label: t2.label, value: t2.id }, null, 8, ["label", "value"]))), 128))]), _: 1 }, 8, ["modelValue", "remote-method"]), Lt(_2) && Lt(_2).now ? (Zr(), eo("div", E, [io("section", { class: W(["city-item group relative mb-3 flex w-full cursor-pointer justify-between rounded-xl bg-[#154280] px-3 pt-1 pb-2.5 text-xs text-[#d5d5d5]", Lt(Sp)(Lt(_2).now.cond_code, Lt(_2).moment)]), onClick: g3[1] || (g3[1] = (e2) => P2(Lt(_2))) }, [yn(io("i", N, [lo(Lt(a), { size: 16 })], 512), [[di, l2.cityId == Lt(_2).location.id]]), io("div", Y, [io("p", { class: "d-elip m-0 text-xs leading-[35px] text-[#efefef]", title: Lt(_2).location.name }, " 我的位置 · " + Z(Lt(_2).location.name), 9, Z2), io("p", null, [io("img", { class: "size-3.5 align-[-2px] inline-block", src: Lt(Mp)(Lt(_2).now.cond_code) }, null, 8, $), uo(" " + Z(Lt(_2).now.cond_txt), 1)])]), io("div", B, [io("p", J, Z(Lt(_2).now.tmp) + "° ", 1), io("p", null, " 最高" + Z(Lt(_2).daily_forecast && Lt(_2).daily_forecast[0].tmp_max) + "° 最低" + Z(Lt(_2).daily_forecast && Lt(_2).daily_forecast[0].tmp_min) + "° ", 1)])], 2), (Zr(!0), eo(Hr, null, Es(Lt(k2), (e2, t2) => (Zr(), eo("section", { class: W(["city-item group relative mb-3 flex w-full cursor-pointer justify-between rounded-xl bg-[#154280] px-3 pt-1 pb-2.5 text-xs text-[#d5d5d5]", Lt(Sp)(e2.now.cond_code, e2.moment)]), key: e2.location && e2.location.id, onClick: (t3) => P2(e2) }, [yn(io("i", ee, [lo(Lt(a), { size: 16 })], 512), [[di, l2.cityId == e2.location.id]]), io("i", { onClick: sl((e3) => Lt(I2)(t2), ["stop"]), class: "absolute -top-1.5 -right-1.5 size-4 rounded-[10px] bg-[#d3cece] text-[#666] opacity-0 transition duration-200 group-hover:opacity-100 hover:bg-[#ff5a5d] hover:text-white", title: "删除" }, [lo(Lt(s), { size: 16 })], 8, te), io("div", le, [io("p", ae, Z(e2.location.name), 1), io("p", null, [io("img", { class: "size-3.5 align-[-2px] inline-block", src: Lt(Mp)(e2.now.cond_code) }, null, 8, se), uo(" " + Z(e2.now.cond_txt), 1)])]), io("div", oe, [io("p", ie, Z(e2.now.tmp) + "° ", 1), e2.daily_forecast ? (Zr(), eo("p", ne, " 最高" + Z(e2.daily_forecast[0].tmp_max) + "° 最低" + Z(e2.daily_forecast[0].tmp_min) + "° ", 1)) : po("", !0)])], 10, K))), 128))])) : po("", !0)]));
} }, [["__scopeId", "data-v-9f7562dc"]]), ce = { class: "d-layout h-full" }, de = { class: "d-scrollbar-hide d-layout-content relative z-1 mx-auto h-full max-w-300 overflow-y-auto pt-7.5 pr-3 pb-5 pl-6" }, pe = { class: "flex items-center justify-between gap-3" }, ue = { class: "text-xs" }, me = { class: "ml-1.25" }, fe = { class: "ml-5" }, xe = { class: "wx-actions relative flex items-center" }, he = { class: "my-5 flex items-center gap-5" }, ve = { class: "text-[80px] leading-none" }, ye = { class: "text-[13px]" }, we = { key: 0, class: "m-0 flex items-center gap-1" }, ge = { class: "d-icon text-xl" }, be = { class: "mt-2.5 mb-0 flex items-center justify-center gap-2.5" }, _e = ["src"], ke = { key: 0, class: "text-[13px] text-white/80" }, je = { class: "my-2.5 flex list-none flex-wrap gap-x-5 gap-y-2 p-0 text-[13px] leading-4.5 text-white/80" }, ze = { class: "whitespace-nowrap" }, Ce = { class: "whitespace-nowrap" }, Ie = { class: "whitespace-nowrap" }, Me = { class: "whitespace-nowrap" }, Ve = { class: "whitespace-nowrap" }, Le = { class: "whitespace-nowrap" }, Se = { class: "my-5 rounded-xl bg-white/8 px-3.5 py-3" }, Ae = { class: "mb-2 mt-0 flex items-center gap-1.5 text-xs font-medium text-white/65" }, Pe = { class: "d-icon text-[15px]" }, We = { class: "grid grid-rows-[auto_70px]" }, Ue = { class: "flex" }, De = { class: "text-xs" }, Ge = { class: "mt-2 mb-0 flex justify-center" }, He = ["title", "src"], Xe = { class: "min-h-0" }, qe = { class: "my-5 rounded-xl bg-white/8 px-3.5 py-3" }, Fe = { class: "mb-2 mt-0 flex items-center gap-1.5 text-xs font-medium text-white/65" }, Oe = { class: "d-icon text-[15px]" }, Qe = { class: "relative grid w-full grid-rows-[auto_180px_auto] rounded-t-md text-sm" }, Re = { class: "relative z-0 grid grid-cols-7" }, Te = { class: "m-0 leading-5.5" }, Ee = { class: "mb-2 mt-0 text-xs leading-3" }, Ne = { class: "flex items-center justify-center" }, Ye = ["src"], Ze = { class: "relative z-0 h-45 min-h-0" }, $e = { class: "relative z-0 grid grid-cols-7" }, Be = { class: "d-icon" }, Je = { class: "absolute inset-0 z-1 grid grid-cols-7" }, Ke = { __name: "Content", setup(y2) {
  Y_([NM, Dx, fb]);
  let { current: U2, hourly24: D2, cityOptions: G2, loading: H2, locate: T2, selectCity: E2, searchCity: N2 } = p(), Y2 = Et(""), Z22 = Et(f.get("weatherListVisible"));
  function $2() {
    Z22.value = !Z22.value, f.set("weatherListVisible", Z22.value);
  }
  let B2 = $o(() => {
    var e2;
    return ((e2 = U2.value.daily_forecast) == null ? void 0 : e2[0]) || {};
  }), J2 = $o(() => U2.value.now.cond_code && Sp(U2.value.now.cond_code, U2.value.moment));
  function K2(e2) {
    if (!e2) return;
    let t2 = G2.value.find((t3) => t3.id == e2);
    E2(t2);
  }
  function ee2() {
    Y2.value = "", T2();
  }
  let te2 = { type: "line", smooth: 0.2, label: { show: !0, position: "bottom", color: "#fff", borderWidth: 0, formatter: (e2) => e2.value + "°" }, lineStyle: { width: 1 }, symbolSize: 10, itemStyle: { width: 10 } }, le2 = $o(() => {
    let e2 = D2.value.map((e3) => e3.temp);
    return { backgroundColor: "transparent", color: ["#fff", "#fff"], grid: { left: "16px", right: "26px", bottom: "10px", top: "24px", containLabel: !1 }, xAxis: { type: "category", boundaryGap: !1, show: !1 }, yAxis: { type: "value", show: !1, min: e2.length ? Math.min(...e2) : 0 }, series: [{ ...te2, symbolSize: 6, label: { show: !0, position: "top", color: "#fff", borderWidth: 0, formatter: (e3) => e3.value + "°" }, data: e2 }] };
  }), ae2 = $o(() => {
    let e2 = (U2.value.daily_forecast || []).map((e3) => e3.tmp_max), t2 = (U2.value.daily_forecast || []).map((e3) => e3.tmp_min);
    return { backgroundColor: "transparent", color: ["#fff", "#fff"], grid: { left: 0, right: 0, bottom: 30, top: 30, containLabel: !1 }, xAxis: { type: "category", boundaryGap: !0, show: !1, data: e2.map((e3, t3) => t3) }, yAxis: { type: "value", show: !1, min: t2.length ? Math.min(...t2) : 0 }, series: [{ ...te2, label: { show: !0, position: "top", color: "#fff", borderWidth: 0, formatter: (e3) => e3.value + "°" }, data: e2 }, { ...te2, data: t2 }] };
  });
  return (a2, y3) => {
    var g2, k2;
    let z2 = PI;
    return Zr(), eo("div", { class: W(["app-weather relative h-full overflow-hidden bg-[#184482] bg-cover bg-center text-white opacity-100", J2.value]) }, [io("div", ce, [yn((Zr(), eo("div", de, [io("header", pe, [io("div", ue, [io("span", null, Z(Lt(U2).location.adm1) + " · ", 1), io("span", null, Z(Lt(U2).location.name), 1), io("span", me, Z(Lt(U2).now.cond_txt), 1), io("span", fe, "发布于:" + Z(Lt(r2)(Lt(U2).updateTime)), 1)]), io("div", xe, [lo(Lt(uv), { style: { "--el-select-width": "120px" }, "append-to": "", modelValue: Y2.value, "onUpdate:modelValue": y3[0] || (y3[0] = (e2) => Y2.value = e2), "remote-method": Lt(N2), filterable: "", remote: "", "popper-class": "app-weather-popper", placeholder: "输入城市、乡镇", onChange: K2, size: "small" }, { default: mn(() => [(Zr(!0), eo(Hr, null, Es(Lt(G2), (t2) => (Zr(), to(Lt(dv), { key: t2.value, label: t2.label, value: t2.id }, null, 8, ["label", "value"]))), 128))]), _: 1 }, 8, ["modelValue", "remote-method"]), io("i", { title: "自动定位", class: "size-6! min-w-6 cursor-pointer rounded-r-lg bg-white/30 text-center flex items-center justify-center", onClick: ee2 }, [lo(Lt(_t), { size: 14 })]), io("i", { class: "rounded-lg bg-white/20 min-w-6 size-6 ml-1 cursor-pointer flex items-center justify-center", onClick: $2 }, [yn(lo(Lt(Q), { size: 16 }, null, 512), [[di, Z22.value]]), yn(lo(Lt(O), { size: 16 }, null, 512), [[di, !Z22.value]])])])]), io("section", he, [io("span", ve, Z(Lt(U2).now.tmp) + "°", 1), io("div", ye, [Lt(U2).air_now_city ? (Zr(), eo("p", we, [io("i", ge, [lo(Lt(e))]), uo(" " + Z(Lt(U2).air_now_city.qlty) + "/" + Z(Lt(U2).air_now_city.aqi), 1)])) : po("", !0), io("p", be, [io("img", { class: "size-4.5", src: Lt(Mp)(Lt(U2).now.cond_code) }, null, 8, _e), io("span", null, Z(Lt(U2).now.cond_txt), 1), io("span", null, Z(Lt(U2).now.wind_dir), 1), io("span", null, Z(Lt(U2).now.wind_sc) + "级", 1)])])]), Lt(U2).rain ? (Zr(), eo("div", ke, Z(Lt(U2).rain.txt), 1)) : po("", !0), io("ul", je, [io("li", ze, " 温度 " + Z(B2.value.tmp_min) + "°~" + Z(B2.value.tmp_max) + "° ", 1), io("li", Ce, "湿度 " + Z(Lt(U2).now.hum) + "%", 1), io("li", Ie, "气压 " + Z(Lt(U2).now.pres) + "hPa", 1), io("li", Me, "降水 " + Z(Lt(U2).now.pcpn) + "mm", 1), io("li", Ve, "日出 " + Z((g2 = Lt(U2).sun) == null ? void 0 : g2.rise), 1), io("li", Le, "日落 " + Z((k2 = Lt(U2).sun) == null ? void 0 : k2.set), 1)]), io("section", Se, [io("h3", Ae, [io("i", Pe, [lo(Lt(o2))]), y3[1] || (y3[1] = uo(" 24小时天气预报 "))]), lo(f2, { class: "text-sm" }, { default: mn(() => [io("div", We, [io("div", Ue, [(Zr(!0), eo(Hr, null, Es(Lt(D2), (e2, t2) => (Zr(), eo("div", { class: "min-w-12.5 rounded-md border border-transparent p-2.5 text-center transition-[background] duration-200 first:-ml-2.5 hover:border-white/2 hover:bg-white/8", key: t2 }, [io("p", De, Z(Lt(r2)(e2.fxTime, "H时")), 1), io("p", Ge, [io("img", { class: "size-5", title: e2.text, src: Lt(Mp)(e2.icon) }, null, 8, He)])]))), 128))]), io("div", Xe, [lo(Lt(nM), { class: "h-17.5 w-full", autoresize: "", theme: "dark", option: le2.value }, null, 8, ["option"])])])]), _: 1 })]), io("section", qe, [io("h3", Fe, [io("i", Oe, [lo(Lt(F2))]), y3[2] || (y3[2] = uo(" 7日天气预报 "))]), io("div", Qe, [io("div", Re, [(Zr(!0), eo(Hr, null, Es(Lt(U2).daily_forecast, (e2, t2) => (Zr(), eo("div", { class: "rounded-md py-2.5 text-center text-[13px]", key: t2 }, [io("p", Te, Z(Lt(Op)(e2.date)), 1), io("p", Ee, Z(Lt(Dp)(e2.date)), 1), io("p", Ne, [io("img", { class: "mr-1 size-4.5", src: Lt(Mp)(e2.cond_code_d) }, null, 8, Ye), uo(" " + Z(e2.cond_txt_d), 1)])]))), 128))]), io("div", Ze, [lo(Lt(nM), { autoresize: "", theme: "dark", class: "h-full w-full", option: ae2.value }, null, 8, ["option"])]), io("div", $e, [(Zr(!0), eo(Hr, null, Es(Lt(U2).daily_forecast, (e2, t2) => (Zr(), eo("div", { class: "flex items-center justify-center gap-1 pt-2 pb-2.5 text-[13px]", key: "w" + t2 }, [io("i", Be, [lo(Lt(R))]), uo(" " + Z(e2.wind_sc) + "级 ", 1)]))), 128))]), io("div", Je, [(Zr(!0), eo(Hr, null, Es(Lt(U2).daily_forecast, (e2, t2) => (Zr(), eo("div", { key: "sel" + t2, class: "rounded-[12px] border-l border-white/5 transition-[background] duration-200 first:bg-white/8 last:border-r last:border-r-white/10 hover:bg-white/6" }))), 128))])])])])), [[z2, Lt(H2)]]), io("div", { class: W(["d-layout-aside transition-[width] duration-200", Z22.value ? "ml-0 w-60" : "ml-3 w-0"]) }, [lo(re, { onChange: Lt(E2), cityId: Lt(U2).location.id }, null, 8, ["onChange", "cityId"])], 2)])], 2);
  };
} };

// output/native-current/index-Dl82Z2lV.js
var p2 = { name: "appWeather", title: "i天气", icon: "weather-icon", description: "准确预报全球近10000多个地区的一周天气预报，包括国内县级和县级以上全部城市" }, n = Object.assign(p2, { setup: (p22) => (p3, n2) => (Zr(), to(F, { id: "weather-dialog", "default-width": 502, style: { "overflow-x": "hidden" }, transparent: "" }, { default: mn(() => [lo(Ke)]), _: 1 })) });
export {
  n as default
};
/**
 * @license @tabler/icons-vue v3.46.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
