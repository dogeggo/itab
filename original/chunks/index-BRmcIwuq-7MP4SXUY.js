import {
  v
} from "./chunk-Y7XUUVTT.js";
import {
  u as u3
} from "./chunk-TE7GR3OL.js";
import {
  b
} from "./chunk-RWAOADFO.js";
import {
  p
} from "./chunk-OATREBEQ.js";
import {
  F
} from "./chunk-R77VKLDU.js";
import {
  d
} from "./chunk-4NXJNTCF.js";
import {
  s
} from "./chunk-GDVT6VLN.js";
import {
  FE,
  Fi,
  Gm,
  Hi,
  Ib,
  PE,
  Qh,
  Rw,
  Um,
  Zm,
  em,
  qe,
  tC,
  uc,
  ze
} from "./chunk-QX73FKBL.js";
import {
  Ar,
  Dr,
  He,
  we
} from "./chunk-H6WGZ5RR.js";
import {
  a,
  i,
  o as o2,
  u as u2
} from "./chunk-C4L4WT5J.js";
import {
  Ea,
  Zt,
  gt,
  ht as ht2
} from "./chunk-LEVEZLTX.js";
import "./chunk-5MDIDYN5.js";
import {
  u
} from "./chunk-AFECQBGL.js";
import {
  O
} from "./chunk-YQ4PBQUM.js";
import "./chunk-C332WR7G.js";
import {
  Ae
} from "./chunk-C3WGXGFI.js";
import "./chunk-S7M5ZIRT.js";
import {
  C
} from "./chunk-USGTF4JI.js";
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
  Or,
  Tt,
  V,
  W,
  Xo,
  Z,
  Zr,
  di,
  eo,
  es,
  fs,
  gi,
  ht,
  io,
  lo,
  mn,
  po,
  sl,
  to,
  uo,
  ws,
  wt,
  yn,
  zn
} from "./chunk-E6JHFIG4.js";

// output/native-current/Content-BAQw0hFk.js
var pe = { key: 0, class: "isWork" }, ye = { key: 1, class: "isRest" }, ge = { class: "ac w-full" }, he = ["title"], ve = /* @__PURE__ */ o({ __name: "CalendarDay", props: { data: { type: Object, default: () => ({}) } }, setup: (o22) => (d2, i22) => (Zr(), eo("div", { class: W(["w-full h-full calendar-day d-flex-center", [{ dayHoliday: o22.data.isRest }, { work: o22.data.isWork }]]) }, [o22.data.isWork ? (Zr(), eo("div", pe, "班")) : po("", !0), o22.data.isRest ? (Zr(), eo("div", ye, "休")) : po("", !0), io("div", ge, [io("p", { class: W(["app-calendar-body-day b", `week${o22.data.week}`]) }, Z(o22.data.day), 3), io("p", { class: W(["app-calendar-body-holiday d-elip", { jieriTarget: o22.data.jieriTarget }]), title: o22.data.lunar }, Z(o22.data.lunar), 11, he)])], 2)) }, [["__scopeId", "data-v-44a3380a"]]), De = !1;
function be() {
  De || (Dr.update("母亲节", Ar.builder().solarWeek(5, 2, 0).name("母亲节").build()), Dr.update("父亲节", Ar.builder().solarWeek(6, 3, 0).name("父亲节").build()), De = !0);
}
var _e = { class: "calendar-detail f13 h-full" }, we2 = { class: "d-auto-y d-scrollbar-hide h-full" }, xe = { class: "ac bb mb5 pb10" }, Ye = { class: "f14" }, Ve = { class: "calendar-detail-day inline-block relative text-center" }, ke = { class: "d-sub" }, Ne = { class: "d-flex mt5 bb pb5" }, je = { class: "d-cell" }, Se = { class: "d-flex mt5 bb pb5" }, Me = { class: "d-cell" }, Ce = { key: 0, class: "d-flex mt5 bb pb5" }, $e = { class: "d-cell" }, ze2 = { class: "mt5" }, Ie = { class: "d-flex bb pb5" }, We = { class: "d-cell" }, Fe = { class: "d-flex bb mt5 pb5" }, Ue = { class: "d-cell" }, Te = { class: "mt5 d-row" }, He2 = { class: "d-col-12 d-flex mt5 bb pb5" }, Xe = { class: "d-cell" }, Ae2 = { class: "d-col-12 d-flex mt5 bb pb5" }, Oe = { class: "d-cell" }, Be = { class: "mt5" }, Le = { class: "d-col-12" }, Re = { class: "d-col-12" }, Ee = { class: "d-col-12" }, Pe = { class: "d-col-12" }, Ge = { class: "d-col-12" }, Ze = /* @__PURE__ */ o({ __name: "DayDetail", props: { date: Date }, setup(s2) {
  be();
  let u22 = O(), c2 = { 白羊: "♈️", 金牛: "♉️", 双子: "♊️", 巨蟹: "♋️", 狮子: "♌️", 处女: "♍️", 天秤: "♎️", 天蝎: "♏️", 射手: "♐️", 摩羯: "♑️", 水瓶: "♒️", 双鱼: "♓️" }, m2 = s2, f2 = $o(() => {
    var e2, a22;
    let t2 = u(m2.date), l2 = we.fromYmd(t2.year(), t2.month() + 1, t2.date()), s3 = l2.getLunarDay(), n2 = s3.getYearSixtyCycle(), o22 = s3.getSixtyCycle().getHeavenStem(), d2 = n2.getEarthBranch().getZodiac().getName(), i22 = s3.getLunarMonth().getName(), r2 = s3.getName(), c3 = [], f3 = s3.getFestival();
    f3 && c3.push(f3.getName());
    let p2 = l2.getFestival();
    p2 && c3.push(p2.getName()), Ar.fromSolarDay(l2).forEach((e3) => c3.push(e3.getName()));
    let y2 = l2.getTermDay();
    y2.getDayIndex() === 0 && c3.push(y2.getSolarTerm().getName());
    let g2 = l2.getNineDay();
    g2 && c3.push(g2.getName());
    let h2 = l2.getDogDay();
    h2 && c3.push(h2.getName());
    let v2 = u2(m2.date), D2 = t2.format("YYYY年MM月DD日"), b2 = v2 > 0 ? `还有${v2}天` : `已经过去${Math.abs(v2)}天`;
    return { diffDay: v2 != 0 && D2 + b2, date: t2.format("YYYY-MM-DD"), day: t2.format("D"), xingZuo: l2.getConstellation().getName(), week: l2.getWeek().getName(), shengXiao: [`${w2 = t2.year(), String(w2).split("").map((e3) => "〇一二三四五六七八九"[e3]).join("") + "年"}${i22}${r2}`, `${n2.getName()}(${d2})年`], yearShengXiao: d2, festivals: c3, yi: s3.getRecommends().map((e3) => e3.getName()), ji: s3.getAvoids().map((e3) => e3.getName()), yueXiang: (_2 = s3.getPhase().getName(), _2.replace(/月$/, "").replace(/^新$/, "朔").replace(/^满$/, "望")), wuHou: l2.getPhenology().getName(), positionXi: o22.getJoyDirection().getName(), positionYangGui: o22.getYangDirection().getName(), positionYinGui: o22.getYinDirection().getName(), positionFu: o22.getMascotDirection().getName(), positionCai: o22.getWealthDirection().getName(), weekOfYear: l2.getSolarWeek((a22 = (e2 = u22.value) == null ? void 0 : e2.time) != null && a22.weekBegin1 ? 1 : 0).getIndexInYear() + 1, dayOfYear: i(m2.date) };
    var _2, w2;
  });
  return (s3, o22) => (Zr(), eo("div", _e, [io("div", we2, [io("div", xe, [io("p", Ye, [uo(Z(f2.value.date) + " ", 1), io("span", null, "周" + Z(f2.value.week), 1)]), io("p", Ve, Z(f2.value.day), 1), io("p", null, Z(f2.value.shengXiao[0]), 1), io("p", null, Z(f2.value.shengXiao[1]), 1), io("p", null, " 本年第" + Z(f2.value.weekOfYear) + "周， 第" + Z(f2.value.dayOfYear) + "天 ", 1)]), io("ul", ke, [yn(io("li", { class: "d-flex mt5 bb pb5" }, " 距离" + Z(f2.value.diffDay), 513), [[di, f2.value.diffDay]]), io("li", Ne, [o22[0] || (o22[0] = io("span", { class: "detail-title", style: { "background-color": "#ed625e" } }, "生肖", -1)), io("span", je, Z(f2.value.yearShengXiao), 1)]), io("li", Se, [o22[1] || (o22[1] = io("span", { class: "detail-title", style: { "background-color": "#eb7dac" } }, "星座", -1)), io("span", Me, [uo(Z(f2.value.xingZuo) + "座 ", 1), io("span", null, Z(c2[f2.value.xingZuo]), 1)])]), f2.value.festivals.length ? (Zr(), eo("li", Ce, [o22[2] || (o22[2] = io("span", { class: "detail-title", style: { "background-color": "#037de4" } }, "节日", -1)), io("span", $e, Z(f2.value.festivals.join("，")), 1)])) : po("", !0)]), io("ul", ze2, [io("li", Ie, [o22[3] || (o22[3] = io("span", { class: "detail-title", style: { width: "20px" } }, "宜", -1)), io("span", We, Z(f2.value.yi.join("，")), 1)]), io("li", Fe, [o22[4] || (o22[4] = io("span", { class: "detail-title calendar-detail-ji", style: { width: "20px" } }, "忌", -1)), io("span", Ue, Z(f2.value.ji.join("，")), 1)])]), io("ul", Te, [io("li", He2, [o22[5] || (o22[5] = io("span", { class: "detail-title", style: { "background-color": "gray" } }, "月相", -1)), io("span", Xe, Z(f2.value.yueXiang) + "月", 1)]), io("li", Ae2, [o22[6] || (o22[6] = io("span", { class: "detail-title", style: { "background-color": "gray" } }, "物候", -1)), io("span", Oe, Z(f2.value.wuHou), 1)])]), io("ul", Be, [io("li", Le, " 喜神方位：" + Z(f2.value.positionXi), 1), io("li", Re, " 阳贵神方位：" + Z(f2.value.positionYangGui), 1), io("li", Ee, " 阴贵神方位：" + Z(f2.value.positionYinGui), 1), io("li", Pe, " 福神方位：" + Z(f2.value.positionFu), 1), io("li", Ge, " 财神方位：" + Z(f2.value.positionCai), 1)])])]));
} }, [["__scopeId", "data-v-556847c3"]]);
be();
var Je = /* @__PURE__ */ new Map(), qe2 = /* @__PURE__ */ new Map();
function Ke(e2, a22, t2) {
  if (e2.size >= 800) {
    let a3 = e2.keys().next().value;
    e2.delete(a3);
  }
  e2.set(a22, t2);
}
function Qe(e2) {
  let a22 = Je.get(e2);
  if (a22) return a22;
  let t2 = u(e2), l2 = we.fromYmd(t2.year(), t2.month() + 1, t2.date()), s2 = l2.getLunarDay(), n2 = s2.getName();
  n2 == "初一" && (n2 = s2.getLunarMonth().getName());
  let o22 = null, d2 = l2.getTermDay();
  d2.getDayIndex() === 0 && (n2 = d2.getSolarTerm().getName(), o22 = !0);
  let i22 = l2.getFestival();
  i22 && (n2 = i22.getName(), o22 = !0);
  let r2 = Ar.fromSolarDay(l2);
  !i22 && r2?.length && (n2 = r2[0].getName(), o22 = !0), e2.includes("10-31") && (n2 = "万圣夜", o22 = !0), e2.includes("-11-01") && (n2 = "万圣节", o22 = !0);
  let u22 = s2.getFestival();
  u22 && (n2 = u22.getName(), o22 = !0);
  let c2 = { day: t2.format("DD"), lunar: n2, week: l2.getWeek().getIndex(), jieriTarget: o22 };
  return Ke(Je, e2, c2), c2;
}
var ea = { class: "d-flex-between pb-3 relative z-10 shrink-0" }, aa = { class: "d-flex-y" }, ta = { class: "d-icon" }, la = { class: "d-icon" }, sa = { class: "calendar-panel-grid min-h-0 flex-1" }, na = /* @__PURE__ */ o({ __name: "Calendar", setup(a22) {
  gi((e2) => ({ a1dbeed2: b2.value }));
  let t2 = O(), n2 = ht({ nowDate: /* @__PURE__ */ new Date() }), d2 = $o(() => u(n2.nowDate).year()), i22 = /* @__PURE__ */ new Set();
  async function r2(e2) {
    let a3 = Number(e2);
    if (!s.value[a3] && !i22.has(a3)) {
      i22.add(a3);
      try {
        let e3 = await d(a3);
        s.value = { ...s.value, [a3]: e3 || {} };
      } finally {
        i22.delete(a3);
      }
    }
  }
  function v2(e2) {
    let a3 = Number(e2.slice(0, 4));
    return ((e3, a4) => {
      let t3 = (a4 = a4 || {})[e3] || {}, l2 = `${e3}|${t3.isWork ? 1 : 0}|${t3.isRest ? 1 : 0}`, s2 = qe2.get(l2);
      if (s2) return s2;
      let n3 = { ...Qe(e3), ...t3 };
      return Ke(qe2, l2, n3), n3;
    })(e2, s.value[a3]);
  }
  function D2(e2) {
    n2.nowDate = e2 === "prev-month" ? u(n2.nowDate).subtract(1, "month").date(1).$d : e2 === "next-month" ? u(n2.nowDate).add(1, "month").date(1).$d : e2 === "today" ? /* @__PURE__ */ new Date() : e2;
  }
  Fr(d2, async (e2) => {
    await Promise.all([e2 - 1, e2, e2 + 1].map(r2));
  }, { immediate: !0 });
  let b2 = $o(() => `rgba(var(--alpha-color), ${t2.value.theme.mode == "dark" ? "0.24" : "0.3"})`), _2 = $o(() => u(n2.nowDate).format("YYYYMMDD") == u().format("YYYYMMDD")), w2 = Ae((e2) => {
    let a3 = e2.deltaY;
    a3 < 0 ? D2("prev-month") : a3 > 0 && D2("next-month");
  }, 150, { leading: !0, trailing: !1 });
  return (a3, o22) => (Zr(), to(Lt(Um), { class: "app-calendar-body h-full" }, { default: mn(() => [lo(Lt(Zm), { class: "calendar-panel-main flex h-full min-h-0 flex-col overflow-hidden", style: { "--el-main-padding": "16px" } }, { default: mn(() => [io("div", ea, [io("div", aa, [lo(Lt(Ib), { class: "mr-2", style: { width: "100px" }, clearable: !1, format: "YYYY", size: "small", modelValue: Lt(n2).nowDate, "onUpdate:modelValue": o22[0] || (o22[0] = (e2) => Lt(n2).nowDate = e2), type: "year" }, null, 8, ["modelValue"]), io("button", { class: "btn", onClick: o22[1] || (o22[1] = (e2) => D2("prev-month")) }, [io("i", ta, [lo(Lt(gt))])]), lo(Lt(Ib), { style: { width: "60px" }, clearable: !1, class: "mx-1", format: "MM", size: "small", modelValue: Lt(n2).nowDate, "onUpdate:modelValue": o22[2] || (o22[2] = (e2) => Lt(n2).nowDate = e2), type: "month" }, null, 8, ["modelValue"]), io("button", { class: "btn", onClick: o22[3] || (o22[3] = (e2) => D2("next-month")) }, [io("i", la, [lo(Lt(ht2))])]), io("button", { type: "primary", class: W(["btn today-btn ml-2", { active: !_2.value }]), onClick: o22[4] || (o22[4] = (e2) => D2("today")), circle: "" }, "今", 2)]), lo(Lt(tC), { title: "一周开始日", modelValue: Lt(t2).time.weekBegin1, "onUpdate:modelValue": o22[5] || (o22[5] = (e2) => Lt(t2).time.weekBegin1 = e2), style: { "--el-switch-on-color": "var(--el-switch-off-color)" }, "inline-prompt": "", "active-text": "一", "inactive-text": "日" }, null, 8, ["modelValue"])]), io("div", sa, [lo(Ea, { class: "widget-calendar", modelValue: Lt(n2).nowDate, "onUpdate:modelValue": o22[6] || (o22[6] = (e2) => Lt(n2).nowDate = e2), "data-month": Lt(u)(Lt(n2).nowDate).format("M"), onWheel: sl(Lt(w2), ["prevent"]) }, { "date-cell": mn(({ date: e2 }) => [lo(ve, { data: v2(Lt(u)(e2).format("YYYY-MM-DD")), onClick: (a4) => D2(e2) }, null, 8, ["data", "onClick"])]), _: 1 }, 8, ["modelValue", "data-month", "onWheel"])])]), _: 1 }), lo(Lt(Gm), { class: "calendar-panel-aside overflow-hidden", width: "280px" }, { default: mn(() => [lo(Ze, { date: Lt(n2).nowDate }, null, 8, ["date"])]), _: 1 })]), _: 1 }));
} }, [["__scopeId", "data-v-ebb7e3fe"]]), oa = o(zn({ name: "DCount", props: { startVal: { type: Number, default: 0 }, endVal: { type: Number, default: 2021 }, duration: { type: Number, default: 1500 }, autoplay: { type: Boolean, default: !0 }, decimals: { type: Number, default: 0 }, prefix: { type: String, default: "" }, suffix: { type: String, default: "" }, separator: { type: String, default: "," }, decimal: { type: String, default: "." }, color: { type: String }, useEasing: { type: Boolean, default: !0 }, transition: { type: String, default: "linear" } }, emits: ["onStarted", "onFinished"], setup(e2, { emit: a22 }) {
  let t2 = Et(e2.startVal), l2 = Et(!1), s2 = qe(t2), n2 = $o(() => (function(a3) {
    if (!a3) return "";
    let { decimals: t3, decimal: l3, separator: s3, suffix: n3, prefix: o22 } = e2;
    a3 = Number(a3).toFixed(t3);
    let d3 = (a3 += "").split("."), i3 = d3[0], r2 = d3.length > 1 ? l3 + d3[1] : "", u22 = /(\d+)(\d{3})/;
    if (s3 && !C(s3)) for (; u22.test(i3); ) i3 = i3.replace(u22, "$1" + s3 + "$2");
    return o22 + i3 + r2 + n3;
  })(Lt(s2)));
  function d2() {
    i22(), t2.value = e2.endVal;
  }
  function i22() {
    s2 = qe(t2, { disabled: l2, duration: e2.duration, onFinished: () => a22("onFinished"), onStarted: () => a22("onStarted"), ...e2.useEasing ? { transition: ze[e2.transition] } : {} });
  }
  return Or(() => {
    t2.value = e2.startVal;
  }), Fr([() => e2.startVal, () => e2.endVal], () => {
    e2.autoplay && d2();
  }), fs(() => {
    e2.autoplay && d2();
  }), { value: n2, start: d2, reset: function() {
    t2.value = e2.startVal, i22();
  } };
} }), [["render", function(t2, l2, s2, o22, d2, i22) {
  return Zr(), eo("span", { style: V({ color: t2.color }) }, Z(t2.value || 0), 5);
}]]), da = { class: "f18" }, ia = { __name: "DiffDate", setup(a22) {
  let t2 = ht({ startDate: /* @__PURE__ */ new Date(), endDate: /* @__PURE__ */ new Date() }), s2 = ht({ startDate: /* @__PURE__ */ new Date(), differDay: 1 }), i22 = $o(() => u2(t2.endDate, t2.startDate)), r2 = $o(() => {
    let e2 = u(s2.startDate).add(s2.differDay, "day");
    return `${e2.format("YYYY年MM月DD日")} 周${Zt[e2.day()]}`;
  });
  function u22() {
    t2.startDate = /* @__PURE__ */ new Date(), t2.endDate = /* @__PURE__ */ new Date();
  }
  function m2() {
    s2.startDate = /* @__PURE__ */ new Date(), s2.differDay = 1;
  }
  return (a3, o22) => (Zr(), to(Lt(Qh), { class: "d-row w-full" }, { default: mn(() => [lo(Lt(em), { xs: 24, sm: 12 }, { default: mn(() => [lo(Lt(Fi), { onSubmit: o22[2] || (o22[2] = sl(() => {
  }, ["prevent"])), "label-width": "80px", model: Lt(t2), size: "default" }, { default: mn(() => [lo(Lt(Hi), { "label-width": "0px" }, { default: mn(() => o22[6] || (o22[6] = [uo("自然日间隔计算:")])), _: 1, __: [6] }), lo(Lt(Hi), { label: "开始时间" }, { default: mn(() => [lo(Lt(Ib), { style: { width: "160px" }, clearable: !1, placeholder: "请输入开始时间", modelValue: Lt(t2).startDate, "onUpdate:modelValue": o22[0] || (o22[0] = (e2) => Lt(t2).startDate = e2) }, null, 8, ["modelValue"])]), _: 1 }), lo(Lt(Hi), { label: "结束时间" }, { default: mn(() => [lo(Lt(Ib), { style: { width: "160px" }, clearable: !1, placeholder: "请输入结束时间", modelValue: Lt(t2).endDate, "onUpdate:modelValue": o22[1] || (o22[1] = (e2) => Lt(t2).endDate = e2) }, null, 8, ["modelValue"])]), _: 1 }), lo(Lt(Hi), { label: "相差天数" }, { default: mn(() => [lo(oa, { class: "mr5 f30", startVal: 0, duration: 300, endVal: i22.value }, null, 8, ["endVal"]), o22[7] || (o22[7] = uo("天 "))]), _: 1, __: [7] })]), _: 1 }, 8, ["model"]), lo(Lt(uc), { text: "", bg: "", style: { width: "240px" }, size: "default", onClick: u22 }, { default: mn(() => o22[8] || (o22[8] = [uo("重置")])), _: 1, __: [8] })]), _: 1 }), lo(Lt(em), { xs: 24, sm: 12 }, { default: mn(() => [lo(Lt(Fi), { onSubmit: o22[5] || (o22[5] = sl(() => {
  }, ["prevent"])), "label-width": "80px", size: "default", model: Lt(s2) }, { default: mn(() => [lo(Lt(Hi), { "label-width": "0px" }, { default: mn(() => o22[9] || (o22[9] = [uo("日期加减计算:")])), _: 1, __: [9] }), lo(Lt(Hi), { label: "开始时间" }, { default: mn(() => [lo(Lt(Ib), { clearable: !1, style: { width: "160px" }, placeholder: "请输入开始时间", modelValue: Lt(s2).startDate, "onUpdate:modelValue": o22[3] || (o22[3] = (e2) => Lt(s2).startDate = e2) }, null, 8, ["modelValue"])]), _: 1 }), lo(Lt(Hi), { label: "间隔天数" }, { default: mn(() => [lo(Lt(Rw), { clearable: !1, style: { width: "120px" }, class: "mr10", placeholder: "天数", modelValue: Lt(s2).differDay, "onUpdate:modelValue": o22[4] || (o22[4] = (e2) => Lt(s2).differDay = e2) }, null, 8, ["modelValue"])]), _: 1 }), lo(Lt(Hi), { label: "结果" }, { default: mn(() => [io("span", da, Z(r2.value), 1)]), _: 1 })]), _: 1 }, 8, ["model"]), lo(Lt(uc), { text: "", bg: "", style: { width: "240px" }, size: "default", onClick: m2 }, { default: mn(() => o22[10] || (o22[10] = [uo("重置")])), _: 1, __: [10] })]), _: 1 })]), _: 1 }));
} }, ra = { __name: "DiffWork", setup(a22) {
  let t2 = ht({ startDate: /* @__PURE__ */ new Date(), endDate: /* @__PURE__ */ new Date() }), l2 = $o(() => {
    let e2 = u(t2.startDate).startOf("day"), a3 = u(t2.endDate).startOf("day");
    if (!a3.isAfter(e2)) return 0;
    let l3 = 0, s3 = e2.toDate();
    for (s3.setDate(s3.getDate() + 1); s3.getTime() <= a3.valueOf(); ) {
      if (!a(s3)) {
        let e3 = He.fromYmd(s3.getFullYear(), s3.getMonth() + 1, s3.getDate());
        if (e3) e3.isWork() && (l3 += 1);
        else {
          let e4 = s3.getDay();
          e4 != 0 && e4 != 6 && (l3 += 1);
        }
      }
      s3.setDate(s3.getDate() + 1);
    }
    return l3;
  });
  function s2() {
    t2.startDate = /* @__PURE__ */ new Date(), t2.endDate = /* @__PURE__ */ new Date();
  }
  return (a3, n2) => (Zr(), to(Lt(Qh), { class: "w-full" }, { default: mn(() => [lo(Lt(em), null, { default: mn(() => [lo(Lt(Fi), { onSubmit: n2[2] || (n2[2] = sl(() => {
  }, ["prevent"])), "label-width": "80px", model: Lt(t2), size: "default" }, { default: mn(() => [lo(Lt(Hi), { "label-width": "0px" }, { default: mn(() => n2[3] || (n2[3] = [uo("工作日间隔计算:")])), _: 1, __: [3] }), lo(Lt(Hi), { label: "开始时间" }, { default: mn(() => [lo(Lt(Ib), { style: { width: "160px" }, clearable: !1, placeholder: "请输入开始时间", modelValue: Lt(t2).startDate, "onUpdate:modelValue": n2[0] || (n2[0] = (e2) => Lt(t2).startDate = e2) }, null, 8, ["modelValue"])]), _: 1 }), lo(Lt(Hi), { label: "结束时间" }, { default: mn(() => [lo(Lt(Ib), { style: { width: "160px" }, clearable: !1, placeholder: "请输入结束时间", modelValue: Lt(t2).endDate, "onUpdate:modelValue": n2[1] || (n2[1] = (e2) => Lt(t2).endDate = e2) }, null, 8, ["modelValue"])]), _: 1 }), lo(Lt(Hi), { label: "相差" }, { default: mn(() => [lo(oa, { class: "mr5 f30", startVal: 0, duration: 300, endVal: l2.value }, null, 8, ["endVal"]), n2[4] || (n2[4] = uo("个工作日 "))]), _: 1, __: [4] })]), _: 1 }, 8, ["model"]), lo(Lt(uc), { text: "", bg: "", style: { width: "240px" }, size: "default", onClick: s2 }, { default: mn(() => n2[5] || (n2[5] = [uo("重置")])), _: 1, __: [5] })]), _: 1 })]), _: 1 }));
} }, ua = { class: "tools-holiday h-full w-full" }, ca = { class: "tools-holiday-body" }, ma = { class: "holiday-month" }, fa = { class: "holiday-month-num" }, pa = { class: "holiday-month-unit en" }, ya = { class: "f12 d-sub" }, ga = { class: "f12 d-sub ml5" }, ha = { class: "b f14" }, va = /* @__PURE__ */ o({ __name: "Holidays", setup(t2) {
  be();
  let s2 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], i22 = ht({ year: u().format("YYYY") });
  function r2(e2) {
    return s2[Number(e2) - 1] || "";
  }
  let u22 = $o(() => {
    let e2 = Number(i22.year), a22 = new Date(e2, 0, 1), t3 = new Date(e2, 11, 31), l2 = {};
    for (; a22 <= t3; ) {
      if (!a(a22)) {
        let e3 = u(a22), t4 = we.fromYmd(e3.year(), e3.month() + 1, e3.date()), s3 = t4.getLunarDay(), n2 = [], o22 = s3.getFestival();
        o22 && n2.push(o22.getName());
        let d2 = t4.getFestival();
        d2 && n2.push(d2.getName()), (Ar.fromSolarDay(t4) || []).forEach((e4) => {
          let a3 = e4.getName();
          n2.includes(a3) || n2.push(a3);
        });
        let i3 = t4.getTermDay();
        if (i3 && i3.getDayIndex() === 0 && n2.push(i3.getSolarTerm().getName()), n2.length) {
          let e4 = String(a22.getMonth() + 1), t5 = u2(a22), o3 = { lunar: s3.getLunarMonth().getName() + s3.getName(), date: o2(a22).slice(5), festivals: n2, diffText: t5 < 0 ? "已过" : "还有", diffAbs: Math.abs(t5) };
          l2[e4] ? l2[e4].push(o3) : l2[e4] = [o3];
        }
      }
      a22.setDate(a22.getDate() + 1);
    }
    return l2;
  });
  return (t3, s3) => (Zr(), eo("div", ua, [lo(Lt(Ib), { style: { width: "160px" }, class: "mb20", clearable: !1, type: "year", size: "default", "value-format": "YYYY", placeholder: "请输入年", modelValue: Lt(i22).year, "onUpdate:modelValue": s3[0] || (s3[0] = (e2) => Lt(i22).year = e2) }, null, 8, ["modelValue"]), s3[3] || (s3[3] = io("span", { class: "f12 d-sub ml5" }, "选择日期后自动更新当前节日", -1)), io("div", ca, [lo(Lt(PE), null, { default: mn(() => [(Zr(!0), eo(Hr, null, Es(u22.value, (t4, o22) => (Zr(), to(Lt(FE), { key: o22 }, { default: mn(() => [io("p", ma, [io("span", fa, Z(o22), 1), s3[1] || (s3[1] = io("span", { class: "holiday-month-unit" }, "月", -1)), io("span", pa, Z(r2(o22)), 1)]), lo(Lt(Qh), { class: "d-row holiday-day" }, { default: mn(() => [(Zr(!0), eo(Hr, null, Es(t4, (t5) => (Zr(), eo(Hr, { key: t5.date }, [(Zr(!0), eo(Hr, null, Es(t5.festivals, (a22, o3) => (Zr(), to(Lt(em), { xs: 24, sm: 12, key: o3 }, { default: mn(() => [uo(Z(a22) + " ", 1), io("span", ya, "[" + Z(t5.lunar) + " " + Z(t5.date) + "]", 1), io("span", ga, [uo(Z(t5.diffText) + " ", 1), io("b", ha, Z(t5.diffAbs), 1), s3[2] || (s3[2] = uo("天 "))])]), _: 2 }, 1024))), 128))], 64))), 128))]), _: 2 }, 1024)]), _: 2 }, 1024))), 128))]), _: 1 })])]));
} }, [["__scopeId", "data-v-73c4ad54"]]), Da = /* @__PURE__ */ o({ __name: "index", setup(a22) {
  let t2 = Tt("DiffDate"), l2 = [{ id: "DiffDate", name: "日期差计算" }, { id: "DiffWork", name: "工作日计算" }, { id: "Holidays", name: "节日大全" }], s2 = { DiffDate: ia, DiffWork: ra, Holidays: va };
  return (a3, n2) => {
    let o22 = Gm, d2 = Zm, i22 = Um;
    return Zr(), to(i22, { class: "app-calendar-tools h-full" }, { default: mn(() => [lo(o22, { class: "calendar-tools-aside overflow-hidden px-3", width: "180px" }, { default: mn(() => [lo(b, { class: "mt-10", style: { "--fontSize": "13px" }, modelValue: t2.value, "onUpdate:modelValue": n2[0] || (n2[0] = (e2) => t2.value = e2), data: l2 }, null, 8, ["modelValue"])]), _: 1 }), lo(d2, { class: "calendar-tools-main relative min-h-0 overflow-auto", style: { "--el-main-padding": "24px" } }, { default: mn(() => [lo(Xo, { name: "el-fade-in-linear", mode: "out-in" }, { default: mn(() => [(Zr(), to(ws(s2[t2.value]), { key: t2.value, class: "w-full" }))]), _: 1 })]), _: 1 })]), _: 1 });
  };
} }, [["__scopeId", "data-v-c367d4a6"]]), ba = { class: "calendar-wrap relative flex h-full flex-col overflow-hidden d-bg-page text-(--d-label)" }, _a = { class: "flex size-full items-center justify-center bg-[#367df1]" }, wa = { class: "calendar-body relative min-h-0 flex-1" }, xa = /* @__PURE__ */ o({ __name: "Content", setup(t2) {
  let s2 = Tt("calendar"), n2 = { calendar: wt(na), tools: wt(Da) };
  return (t3, o22) => (Zr(), eo("div", ba, [lo(u3, { title: "日历" }, { logo: mn(() => [io("div", _a, [lo(Lt(v), { size: 22, "stroke-width": 2, color: "#fff" })])]), center: mn(() => [lo(p, { modelValue: s2.value, "onUpdate:modelValue": o22[0] || (o22[0] = (e2) => s2.value = e2), data: [{ name: "日历", id: "calendar" }, { name: "工具", id: "tools" }] }, null, 8, ["modelValue"])]), _: 1 }), io("div", wa, [lo(Xo, { name: "el-fade-in-linear", mode: "out-in" }, { default: mn(() => [(Zr(), to(es, null, [(Zr(), to(ws(n2[s2.value]), { key: s2.value, class: "relative z-0 h-full" }))], 1024))]), _: 1 })])]));
} }, [["__scopeId", "data-v-c417b97f"]]);

// output/native-current/index-BRmcIwuq.js
var i2 = { name: "appCalendar" }, a2 = Object.assign(i2, { setup: (i22) => (i3, a22) => (Zr(), to(F, { height: "660px", width: "980px", glass: !1, destroyOnClose: !0, "modal-class": "app-calendar" }, { default: mn(() => [lo(xa)]), _: 1 })) });
export {
  a2 as default
};
