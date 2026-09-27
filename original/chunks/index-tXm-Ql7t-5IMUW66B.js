import {
  S,
  j as j2,
  q
} from "./chunk-6625E2AF.js";
import "./chunk-UVE7RFYW.js";
import {
  j
} from "./chunk-ARIY5ORA.js";
import {
  p
} from "./chunk-JXZFYGSO.js";
import "./chunk-MLS5ASDX.js";
import "./chunk-J44CDCFS.js";
import {
  F
} from "./chunk-R77VKLDU.js";
import {
  Gm,
  Mu,
  Rw,
  Um,
  Vp,
  Zm,
  dv,
  ju,
  nd,
  uc,
  uv
} from "./chunk-QX73FKBL.js";
import {
  Kl,
  Xl
} from "./chunk-LEVEZLTX.js";
import "./chunk-5MDIDYN5.js";
import "./chunk-AFECQBGL.js";
import {
  me
} from "./chunk-YQ4PBQUM.js";
import "./chunk-C332WR7G.js";
import {
  jn
} from "./chunk-C3WGXGFI.js";
import "./chunk-S7M5ZIRT.js";
import "./chunk-USGTF4JI.js";
import {
  o,
  r
} from "./chunk-ZBQAVDN7.js";
import {
  At,
  Es,
  Et,
  H,
  Hr,
  Lt,
  St,
  Tt,
  Z,
  Zr,
  co,
  eo,
  io,
  lo,
  mn,
  po,
  to,
  uo
} from "./chunk-E6JHFIG4.js";

// output/native-current/Content-CmWUAuXo.js
var D = r("filled", "alert-circle-filled", "AlertCircleFilled", [["path", { d: "M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm.01 13l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm-.01 -8a1 1 0 0 0 -.993 .883l-.007 .117v4l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883z", key: "svg-0" }]]), M = { class: "d-checkbox-group" }, O = ["checked", "value", "name"], P = { class: "d-checkbox-label relative z-0" }, T = /* @__PURE__ */ o({ __name: "d-checkbox", props: { modelValue: { type: Array, default: [] }, name: String, data: { type: Array, default: [] } }, emits: ["update:modelValue"], setup(e2, { emit: l2 }) {
  let a2 = l2, t2 = e2;
  function s2(e3) {
    let l3 = e3.target.value, s3 = [...t2.modelValue];
    if (e3.target.checked) s3 = [...t2.modelValue, l3];
    else {
      let e4 = t2.modelValue.findIndex((e5) => e5 == l3);
      s3.splice(e4, 1);
    }
    a2("update:modelValue", s3);
  }
  return (l3, a3) => (Zr(), eo("ul", M, [(Zr(!0), eo(Hr, null, Es(e2.data, (l4) => (Zr(), eo("li", { class: "d-checkbox inline-block relative", key: l4.value }, [io("input", { onInput: s2, checked: e2.modelValue.includes(l4.value.toString()), class: "d-checkbox-input w-full h-full absolute opacity-0 left-0 right-0", type: "checkbox", value: l4.value, name: e2.name }, null, 40, O), io("label", P, Z(l4.label), 1)]))), 128))]));
} }, [["__scopeId", "data-v-9431b106"]]), Y = { class: "h-full overflow-hidden" }, G = { class: "countdown-scroll" }, q2 = { class: "setting-ul mt-1" }, B = { class: "setting-panel d-flex-between" }, X = { class: "setting-panel d-flex-between" }, Z2 = { class: "setting-panel d-flex-between" }, N = { style: { width: "200px" } }, $ = { class: "setting-panel mt10" }, J = { class: "setting-panel mt10" }, K = { class: "setting-panel d-flex-between" }, Q = { class: "title" }, ee = { class: "d-icon f16 d-sub", style: { "vertical-align": "-3px" } }, le = { key: 0, class: "setting-panel d-flex-between" }, ae = { style: { width: "100px" }, class: "ar f12" }, te = { key: 1, class: "setting-panel d-flex-between" }, se = { class: "ar f12" }, oe = o(Object.assign({ name: "countdownContent" }, { __name: "Content", props: { row: { type: Object, default: () => ({}) }, isEdit: Boolean, size: String }, setup(m2) {
  let c2 = m2, { initSize: M2, editForm: O2, onRepeatWeekChange: P2, bgHandle: oe2, submitHandle: ne } = (function(e2) {
    var l2, a2;
    let t2 = Tt(((l2 = e2.row) == null ? void 0 : l2.size) || "2x4"), s2 = Et(jn(Kl(((a2 = e2.row) == null ? void 0 : a2.config) || Xl)));
    return { initSize: t2, editForm: s2, onRepeatWeekChange: function(e3) {
      let l3 = e3.target.value;
      if (e3.target.checked) if (l3 === "8") s2.value.repeatWeek = ["8"];
      else {
        let e4 = s2.value.repeatWeek.findIndex((e5) => e5 === "8");
        e4 !== -1 && s2.value.repeatWeek.splice(e4, 1);
      }
      else l3 === "8" && (s2.value.repeatWeek = ["1", "2", "3", "4", "5"]);
    }, bgHandle: function(e3, l3) {
      l3 && (s2.value.textColor = l3);
    }, submitHandle: function() {
      e2.isEdit ? (e2.row.config || (e2.row.config = {}), Object.assign(e2.row.config, jn(St(s2.value)))) : p({ component: "countdown", name: "倒计时", size: t2.value, type: "component", config: St(s2.value) }), me.visible = !1;
    } };
  })(c2);
  return (c3, x2) => {
    let j22 = uc;
    return Zr(), eo("div", Y, [lo(Lt(Um), { class: "h-full" }, { default: mn(() => [lo(Lt(Gm), { style: { "background-color": "var(--bg-card)" }, width: "420px" }, { default: mn(() => [x2[10] || (x2[10] = io("div", { class: "mt-20 text-center" }, [io("h2", { class: "text-gray-500 text-sm font-medium mb-2" }, "实时预览"), io("div", { class: "w-12 h-0.5 bg-linear-to-r from-transparent via-gray-700 to-transparent mx-auto" })], -1)), lo(q, { data: Lt(O2), class: "mt-2", style: { "--icon-padding": "30px", "--icon-size": "60px" }, initSize: Lt(M2), "onUpdate:initSize": x2[0] || (x2[0] = (e2) => At(M2) ? M2.value = e2 : null), row: { component: "countdown", size: "2x4", type: "component" } }, null, 8, ["data", "initSize"])]), _: 1, __: [10] }), lo(Lt(Zm), { class: "flex! flex-col overflow-hidden!", style: { "background-color": "var(--bg-body)", overflow: "hidden" } }, { default: mn(() => [io("div", G, [lo(Lt(nd), { height: "100%" }, { default: mn(() => [io("ul", q2, [io("li", B, [x2[11] || (x2[11] = io("span", null, "组件名称", -1)), lo(Lt(ju), { style: { width: "200px" }, maxlength: "20", size: "small", placeholder: "自定义图标名称", modelValue: Lt(O2).name, "onUpdate:modelValue": x2[1] || (x2[1] = (e2) => Lt(O2).name = e2) }, null, 8, ["modelValue"])]), io("li", X, [x2[12] || (x2[12] = io("span", { class: "title" }, "工作日", -1)), lo(T, { style: { "--margin": "0 8px 0 0", "--width": "30px", height: "32px" }, modelValue: Lt(O2).repeatWeek, "onUpdate:modelValue": x2[2] || (x2[2] = (e2) => Lt(O2).repeatWeek = e2), onChange: Lt(P2), name: "week", class: "f12", data: [{ label: "周一", value: "1" }, { label: "周二", value: "2" }, { label: "周三", value: "3" }, { label: "周四", value: "4" }, { label: "周五", value: "5" }, { label: "周六", value: "6" }, { label: "周日", value: "0" }, { label: "工作日", value: "8" }] }, null, 8, ["modelValue", "onChange"])]), io("li", Z2, [x2[13] || (x2[13] = io("span", { class: "title" }, "工作时间", -1)), io("div", N, [lo(Lt(Vp), { style: { "--el-fill-color-blank": "var(--bg-input)", "--el-border-color": "transparent", "--el-date-editor-width": "200px" }, size: "small", modelValue: Lt(O2).workTime, "onUpdate:modelValue": x2[3] || (x2[3] = (e2) => Lt(O2).workTime = e2), "is-range": "", "range-separator": "至", "start-placeholder": "上班", "end-placeholder": "下班", clearable: !1, format: "HH:mm", "value-format": "YYYY-MM-DD HH:mm" }, null, 8, ["modelValue"])])]), lo(j2, { onChange: Lt(oe2), modelValue: Lt(O2), "onUpdate:modelValue": x2[4] || (x2[4] = (e2) => At(O2) ? O2.value = e2 : null) }, null, 8, ["onChange", "modelValue"]), io("li", $, [lo(j, { title: "字体颜色", colors: ["#ffffff", "#007bff", "#a64fa7", "#f74e9f", "#fe5257", "#f78219", "#909399", "#67c23a", "#409eff"], modelValue: Lt(O2).textColor, "onUpdate:modelValue": x2[5] || (x2[5] = (e2) => Lt(O2).textColor = e2) }, null, 8, ["modelValue"])]), io("li", J, [lo(S, { title: "字体", modelValue: Lt(O2).family, "onUpdate:modelValue": x2[6] || (x2[6] = (e2) => Lt(O2).family = e2) }, null, 8, ["modelValue"])]), io("li", K, [io("span", Q, [x2[14] || (x2[14] = uo(" 显示更多 ")), io("i", ee, [lo(Lt(Mu), { effect: "dark", content: "发薪日只有在2x4组件模式下才可用" }, { default: mn(() => [lo(Lt(D))]), _: 1 })])]), lo(T, { style: { "--margin": "0 8px 0 0", "--width": "30px", height: "32px" }, modelValue: Lt(O2).moreList, "onUpdate:modelValue": x2[7] || (x2[7] = (e2) => Lt(O2).moreList = e2), name: "more", class: "f12", data: [{ label: "发薪日", value: "1" }, { label: "距离周五", value: "2" }, { label: "下一个节日", value: "3" }, { label: "今天收入", value: "4" }] }, null, 8, ["modelValue"])]), Lt(O2).moreList.includes("1") ? (Zr(), eo("li", le, [x2[17] || (x2[17] = io("span", { class: "title" }, "发薪日", -1)), io("div", ae, [x2[15] || (x2[15] = uo(" 每月 ")), lo(Lt(uv), { size: "small", style: { width: "50px" }, modelValue: Lt(O2).target, "onUpdate:modelValue": x2[8] || (x2[8] = (e2) => Lt(O2).target = e2), clearable: !1 }, { default: mn(() => [(Zr(), eo(Hr, null, Es(31, (e2) => lo(Lt(dv), { label: e2, value: e2, key: e2 }, null, 8, ["label", "value"])), 64))]), _: 1 }, 8, ["modelValue"]), x2[16] || (x2[16] = uo(" 日 "))])])) : po("", !0), Lt(O2).moreList.includes("4") ? (Zr(), eo("li", te, [x2[18] || (x2[18] = io("span", { class: "title" }, "每天的收入", -1)), io("div", se, [lo(Lt(Rw), { min: 0, size: "small", modelValue: Lt(O2).dayMoney, "onUpdate:modelValue": x2[9] || (x2[9] = (e2) => Lt(O2).dayMoney = e2), placeholder: "每天的收入" }, null, 8, ["modelValue"])])])) : po("", !0)])]), _: 1 })]), lo(j22, { size: "default", class: "countdown-submit w-full mt-1 shrink-0", onClick: Lt(ne), round: "", type: "primary" }, { default: mn(() => [uo(Z(m2.isEdit ? "完 成" : "添 加"), 1)]), _: 1 }, 8, ["onClick"])]), _: 1 })]), _: 1 })]);
  };
} }), [["__scopeId", "data-v-370f04c0"]]);

// output/native-current/index-tXm-Ql7t.js
var j3 = { __name: "index", setup: (j22) => (j32, d) => (Zr(), to(F, { width: "1000px", height: "600px", destroyOnClose: !0 }, { default: mn(() => [lo(oe, H(co(j32.$attrs)), null, 16)]), _: 1 })) };
export {
  j3 as default
};
/**
 * @license @tabler/icons-vue v3.46.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
