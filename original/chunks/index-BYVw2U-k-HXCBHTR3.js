import {
  C,
  S,
  j as j2,
  q
} from "./chunk-6625E2AF.js";
import "./chunk-UVE7RFYW.js";
import {
  j
} from "./chunk-ARIY5ORA.js";
import {
  p as p2
} from "./chunk-JXZFYGSO.js";
import "./chunk-MLS5ASDX.js";
import "./chunk-J44CDCFS.js";
import {
  p
} from "./chunk-OATREBEQ.js";
import {
  F
} from "./chunk-R77VKLDU.js";
import {
  f
} from "./chunk-BJRSIPJ7.js";
import {
  Gm,
  Ie,
  Um,
  VO,
  Zm,
  aO,
  dv,
  ju,
  uc,
  uv
} from "./chunk-QX73FKBL.js";
import {
  Dn,
  Ha,
  gn,
  gt,
  nn
} from "./chunk-LEVEZLTX.js";
import "./chunk-5MDIDYN5.js";
import "./chunk-AFECQBGL.js";
import {
  me
} from "./chunk-YQ4PBQUM.js";
import {
  t
} from "./chunk-C332WR7G.js";
import {
  jn
} from "./chunk-C3WGXGFI.js";
import "./chunk-S7M5ZIRT.js";
import "./chunk-USGTF4JI.js";
import {
  o
} from "./chunk-ZBQAVDN7.js";
import {
  At,
  Es,
  H,
  Hr,
  Lt,
  St,
  Tt,
  W,
  Xn,
  Z,
  Zr,
  co,
  dt,
  eo,
  io,
  lo,
  mn,
  po,
  to,
  uo,
  ws
} from "./chunk-E6JHFIG4.js";

// output/native-current/Content-Bu1T_X5B.js
var Z2 = { "": nn, 2: gn, 3: Dn }, $ = Ha.map((e2) => ({ comp: Z2[String(e2.icon)] || nn, config: { ...e2 } })), N = [{ label: "不重复", value: "" }, { label: "每周", value: "week" }, { label: "每月", value: "month" }, { label: "每年", value: "year" }, { label: "节日", value: "festival" }], W2 = ["和她相爱已经", "Ta的生日还有", "宝宝出生已经", "情人节还有", "周末还有", "周年纪念日", "聚餐", "还款日", "派对", "父亲节", "母亲节", "考试还有", "面试", "看医生"], J = { style: { width: "314px" } }, K = { class: "mt10" }, Q = { class: "app-dayjs-theme" }, Y = ["onClick"], ee = { class: "h-full", style: { "max-width": "570px", margin: "0 auto" } }, ae = { class: "d-icon" }, le = { class: "ac pt-2 pb-2" }, se = { class: "f12" }, te = { class: "setting-ul" }, ie = { class: "d-flex-between" }, oe = { class: "d-flex-between" }, ne = { class: "relative" }, de = { class: "event-list" }, re = ["onClick"], ce = { class: "d-flex-between" }, pe = { class: "title d-flex-x" }, me2 = { class: "" }, ue = { class: "mt20 d-flex" }, fe = o(Object.assign({ name: "appDaysMatter" }, { __name: "Content", props: { isEdit: Boolean, row: { type: Object, default: () => ({}) } }, setup(x2) {
  let h2 = Xn(() => t(() => import("./d-date-picker-D49A5eN_-52Q2JXXM.js"), ["assets/vendor-element-plus-WnleHQiG.css", "assets/tailwind-rIhkj3gK.css", "assets/d-button-CwmpYApa.css", "assets/utils-CXX6ZX7A.css", "assets/d-date-picker-TQqacbdo.css"])), y2 = x2, { iconList: w2, editForm: X2, wigetSize: Z22, initSize: fe2, isShrink: ve, eventVisible: be, eventPopoverRef: _e, repeatList: ge, eventList: je, compHandle: xe, bgHandle: he, dateChange: ye, changeHandle: we, submitHandle: Ve } = (function(l2) {
    var s2, t2;
    let i2 = dt(jn(l2.isEdit && (s2 = l2.row) != null && s2.config ? l2.row.config : $[0].config)), o2 = Tt("2x2"), n2 = Tt(((t2 = l2.row) == null ? void 0 : t2.size) || "2x2"), d2 = Tt(!!l2.isEdit), r2 = Tt(!1), c2 = Tt(null);
    return Ie(c2, () => {
      r2.value = !1;
    }), { iconList: $, editForm: i2, wigetSize: o2, initSize: n2, isShrink: d2, eventVisible: r2, eventPopoverRef: c2, repeatList: N, eventList: W2, compHandle: function(e2) {
      Object.keys(i2).forEach((e3) => delete i2[e3]), Object.assign(i2, jn(e2.config)), n2.value = o2.value;
    }, bgHandle: function(e2, a2) {
      a2 && (i2.textColor = a2);
    }, dateChange: function(e2, a2) {
      i2.isLunar = a2;
    }, changeHandle: function(e2) {
      e2 === "festival" && (i2.isLunar = !1);
    }, submitHandle: function(s3, t3) {
      if (me.visible = !!t3, s3 === "edit") return Object.assign(l2.row.config, jn(St(i2))), aO.success(`【${i2.name}】修改成功`), void 0;
      p2({ component: "daysMatter", name: "倒计时", size: n2.value, type: "component", config: St(i2) });
    } };
  })(y2);
  return (e2, a2) => (Zr(), to(Lt(Um), { class: "app-days", style: { "--icon-size": "50px", "--icon-padding": "25px", "--icon-radius": "14px" } }, { default: mn(() => [lo(Lt(Gm), { onClick: a2[1] || (a2[1] = (e3) => ve.value = !1), style: { transition: "width 0.2s" }, class: W(["app-days-aside", { active: Lt(ve) }]), width: Lt(ve) ? "70px" : "374px" }, { default: mn(() => [io("div", J, [a2[14] || (a2[14] = io("p", { class: "f12 mb10 d-sub", style: { "line-height": "14px" } }, " 此列表为模板，选中后可修改文字和日期可以改变成任何类型的倒计时，添加后可以在桌面右键编辑/删除 ", -1)), a2[15] || (a2[15] = io("div", { class: "ml20 bt d-sub pt10" }, "组件模板列表", -1)), io("div", K, [lo(p, { style: { "--padding": "0 66px", "--height": "28px" }, modelValue: Lt(Z22), "onUpdate:modelValue": a2[0] || (a2[0] = (e3) => At(Z22) ? Z22.value = e3 : null), data: [{ name: "2x2", id: "2x2" }, { name: "4x2", id: "2x4" }] }, null, 8, ["modelValue"])]), io("ul", Q, [(Zr(!0), eo(Hr, null, Es(Lt(w2), (e3, a3) => (Zr(), eo("div", { onClick: (a4) => Lt(xe)(e3), class: "app-dayjs-icon-item", key: a3 }, [lo(C, { class: W({ active: Lt(X2).icon == e3.config.icon }), title: e3.config.name, size: Lt(Z22) }, { default: mn(() => [(Zr(), to(ws(e3.comp), { size: Lt(Z22), data: e3.config, ref_for: !0, ref: "refIcon" }, null, 8, ["size", "data"]))]), _: 2 }, 1032, ["class", "title", "size"])], 8, Y))), 128))])])]), _: 1 }, 8, ["class", "width"]), lo(Lt(Zm), { class: W([{ active: Lt(ve) }, "app-days-content"]), style: { "background-color": "var(--bg-info)", overflow: "visible" } }, { default: mn(() => [io("div", ee, [io("span", { onClick: a2[2] || (a2[2] = (e3) => ve.value = !Lt(ve)), class: W([{ active: Lt(ve) }, "shrink-btn d-flex-center d-pointer"]) }, [io("i", ae, [lo(Lt(gt))])], 2), io("div", le, [lo(q, { class: "pb10", data: Lt(X2), height: "160px", style: { "--icon-padding": "25px", "--icon-size": "50px" }, initSize: Lt(fe2), row: { component: "daysMatter", size: Lt(fe2), type: "component", config: Lt(X2) } }, null, 8, ["data", "initSize", "row"]), io("p", se, Z(Lt(X2).name || "倒计时"), 1)]), io("ul", te, [io("li", ie, [a2[16] || (a2[16] = io("span", { class: "whitespace-nowrap" }, "组件名称", -1)), lo(Lt(ju), { style: { width: "220px" }, maxlength: "20", size: "small", placeholder: "自定义图标名称", modelValue: Lt(X2).name, "onUpdate:modelValue": a2[3] || (a2[3] = (e3) => Lt(X2).name = e3) }, null, 8, ["modelValue"])]), io("li", oe, [a2[17] || (a2[17] = io("span", null, "事件名称", -1)), io("div", ne, [lo(Lt(ju), { style: { width: "220px" }, maxlength: "20", size: "small", placeholder: "自定义事件名称", modelValue: Lt(X2).title, "onUpdate:modelValue": a2[4] || (a2[4] = (e3) => Lt(X2).title = e3) }, null, 8, ["modelValue"]), lo(Lt(VO), { placement: "bottom", title: "常用事件", width: 274, visible: Lt(be) }, { reference: mn(() => [io("button", { ref_key: "eventPopoverRef", ref: _e, onClick: a2[5] || (a2[5] = (e3) => be.value = !Lt(be)), class: "f12 d-pointer use-event-btn", style: { color: "#1681ff" } }, " 常用事件 ", 512)]), default: mn(() => [io("ul", de, [(Zr(!0), eo(Hr, null, Es(Lt(je), (e3) => (Zr(), eo("span", { onClick: (a3) => Lt(X2).title = e3, key: e3 }, Z(e3), 9, re))), 128))])]), _: 1 }, 8, ["visible"])])]), io("li", ce, [a2[18] || (a2[18] = io("span", null, "日期", -1)), io("span", pe, [lo(Lt(h2), { size: "small", minDate: new Date(1820, 1, 1), maxDate: new Date(2100, 12, 31), modelValue: Lt(X2).target, "onUpdate:modelValue": a2[6] || (a2[6] = (e3) => Lt(X2).target = e3), onChange: Lt(ye), isLunar: !!Lt(X2).isLunar }, null, 8, ["minDate", "maxDate", "modelValue", "onChange", "isLunar"]), lo(Lt(uv), { class: "d-inline ml5", size: "small", onChange: Lt(we), placeholder: "不重复", style: { width: "80px" }, modelValue: Lt(X2).repeat, "onUpdate:modelValue": a2[7] || (a2[7] = (e3) => Lt(X2).repeat = e3), clearable: !1 }, { default: mn(() => [(Zr(!0), eo(Hr, null, Es(Lt(ge), (e3) => (Zr(), to(Lt(dv), { label: e3.label, value: e3.value, key: e3.value }, null, 8, ["label", "value"]))), 128))]), _: 1 }, 8, ["onChange", "modelValue"])])]), io("li", me2, [lo(j, { title: "字体颜色", colors: ["#ffffff", "#333333", "#1890ff", "#eb8197", "#9de5fe", "#b8ceff", "#efabc4", "#daccfd", "#fceaba", "#f4f7ca", "#d0eabb"], modelValue: Lt(X2).textColor, "onUpdate:modelValue": a2[8] || (a2[8] = (e3) => Lt(X2).textColor = e3) }, null, 8, ["modelValue"])]), lo(j2, { onChange: Lt(he), modelValue: Lt(X2), "onUpdate:modelValue": a2[9] || (a2[9] = (e3) => At(X2) ? X2.value = e3 : null) }, null, 8, ["onChange", "modelValue"]), io("li", null, [lo(S, { title: "字体", modelValue: Lt(X2).family, "onUpdate:modelValue": a2[10] || (a2[10] = (e3) => Lt(X2).family = e3) }, null, 8, ["modelValue"])])]), io("div", ue, [x2.isEdit ? (Zr(), to(f, { key: 0, class: "w-full d-cell mr10", size: "default", type: "primary", onClick: a2[11] || (a2[11] = (e3) => Lt(Ve)("edit")), round: "" }, { default: mn(() => a2[19] || (a2[19] = [uo("修改完成")])), _: 1, __: [19] })) : po("", !0), lo(Lt(uc), { class: "w-full d-cell ml10", size: "default", onClick: a2[12] || (a2[12] = (e3) => Lt(Ve)("add")), round: "" }, { default: mn(() => a2[20] || (a2[20] = [uo("添加")])), _: 1, __: [20] }), x2.isEdit ? po("", !0) : (Zr(), to(f, { key: 1, class: "w-full d-cell ml10", size: "default", onClick: a2[13] || (a2[13] = (e3) => Lt(Ve)("add", !0)), round: "", type: "primary" }, { default: mn(() => a2[21] || (a2[21] = [uo("添加并继续")])), _: 1, __: [21] }))])])]), _: 1 }, 8, ["class"])]), _: 1 }));
} }), [["__scopeId", "data-v-ade6554d"]]);

// output/native-current/index-BYVw2U-k.js
var j3 = Object.assign({ name: "daysMatter" }, { __name: "index", setup: (j22) => (j32, d) => (Zr(), to(F, { destroyOnClose: !0 }, { default: mn(() => [lo(fe, H(co(j32.$attrs)), null, 16)]), _: 1 })) });
export {
  j3 as default
};
