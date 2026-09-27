import {
  l
} from "./chunk-ZA2XIIKE.js";
import {
  h as h3
} from "./chunk-HJ3AZTL2.js";
import {
  t
} from "./chunk-2TOV2IVG.js";
import {
  s as s2
} from "./chunk-ZA3776RS.js";
import {
  h as h2
} from "./chunk-D6V63A6H.js";
import {
  j as j2
} from "./chunk-ARIY5ORA.js";
import {
  e as e2
} from "./chunk-QQK7L6ZV.js";
import {
  s
} from "./chunk-G52UIIHX.js";
import {
  v as v2
} from "./chunk-Y7XUUVTT.js";
import {
  F
} from "./chunk-R77VKLDU.js";
import {
  $s,
  Gm,
  Ib,
  Um,
  VO,
  Zm,
  bw,
  gO,
  ju,
  nd
} from "./chunk-QX73FKBL.js";
import {
  e,
  h,
  ht
} from "./chunk-LEVEZLTX.js";
import "./chunk-5MDIDYN5.js";
import {
  Y,
  _,
  j,
  m,
  p,
  v
} from "./chunk-JRI55GIH.js";
import {
  u
} from "./chunk-AFECQBGL.js";
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
  $o,
  Es,
  Et,
  Hr,
  Ii,
  Lt,
  Os,
  Tt,
  V,
  W,
  Xo,
  Z,
  Zr,
  di,
  dt,
  eo,
  io,
  lo,
  mn,
  ol,
  on,
  po,
  qi,
  sl,
  to,
  uo,
  vs,
  ws,
  wt,
  yn
} from "./chunk-E6JHFIG4.js";

// output/native-current/Content-B3lluAly.js
var de = r("outline", "layout-list", "LayoutList", [["path", { d: "M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -2", key: "svg-0" }], ["path", { d: "M4 16a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -2", key: "svg-1" }]]), ne = r("filled", "circle-plus-filled", "CirclePlusFilled", [["path", { d: "M4.929 4.929a10 10 0 1 1 14.141 14.141a10 10 0 0 1 -14.14 -14.14m8.071 4.071a1 1 0 1 0 -2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0 -2h-2v-2z", key: "svg-0" }]]), ie = r("filled", "settings-filled", "SettingsFilled", [["path", { d: "M14.647 4.081a.724 .724 0 0 0 1.08 .448c2.439 -1.485 5.23 1.305 3.745 3.744a.724 .724 0 0 0 .447 1.08c2.775 .673 2.775 4.62 0 5.294a.724 .724 0 0 0 -.448 1.08c1.485 2.439 -1.305 5.23 -3.744 3.745a.724 .724 0 0 0 -1.08 .447c-.673 2.775 -4.62 2.775 -5.294 0a.724 .724 0 0 0 -1.08 -.448c-2.439 1.485 -5.23 -1.305 -3.745 -3.744a.724 .724 0 0 0 -.447 -1.08c-2.775 -.673 -2.775 -4.62 0 -5.294a.724 .724 0 0 0 .448 -1.08c-1.485 -2.439 1.305 -5.23 3.744 -3.745a.722 .722 0 0 0 1.08 -.447c.673 -2.775 4.62 -2.775 5.294 0zm-2.647 4.919a3 3 0 1 0 0 6a3 3 0 0 0 0 -6", key: "svg-0" }]]);
var ce = { class: "flex items-center h-full pr-1 flex-1 overflow-hidden" }, ue = { class: "d-icon f18 flex mr-1" }, pe = { class: "h-full" }, fe = { class: "d-flex-y" }, me = { class: "f12 total" }, ve = /* @__PURE__ */ o({ __name: "FolderList", props: { row: { type: Object, default: () => ({}) }, folderId: String }, setup: (e22) => (l2, a2) => (Zr(), eo("li", { class: W(["folder-item my-2 flex items-center justify-between pl-2 pr-2", { active: e22.row.id === e22.folderId }]) }, [io("span", ce, [Os(l2.$slots, "default", {}, () => [io("i", ue, [(Zr(), to(ws(e22.row.icon)))]), io("i", pe, Z(e22.row.name), 1)], !0)]), Os(l2.$slots, "del", {}, () => [io("p", fe, [io("span", me, [Os(l2.$slots, "total", {}, void 0, !0)])])], !0)], 2)) }, [["__scopeId", "data-v-a404d80e"]]), he = ["onClick"], ye = { class: "d-cell d-hidden d-label ml-[-16px]" }, xe = { style: { width: "50px", height: "34px" }, class: "hidden justify-end items-center group-hover:flex opacity-80" }, be = /* @__PURE__ */ o({ __name: "TodoList", props: { data: { type: Array, default: () => [] }, showType: { type: String, default: "card" }, isDone: { type: Boolean, default: !1 } }, emits: ["del"], setup(t2, { emit: s22 }) {
  let r2 = s22, d2 = /* @__PURE__ */ new WeakSet();
  return (s3, n2) => {
    let i2 = $s;
    return Zr(), to(Ii, { name: "todo-move", tag: "ul", class: W(["todo-content-ul d-label-2 relative", t2.showType]) }, { default: mn(() => [(Zr(!0), eo(Hr, null, Es(t2.data, (e22) => (Zr(), eo("li", { class: W(["todo-content-li flex relative mb-2 pl-3 pt-2 rounded-lg group", { done: t2.isDone }]), key: e22.id || e22.ct }, [io("div", { class: W(["todo-check-bg size-[56px] flex justify-center items-center", t2.isDone ? "" : "todo-check-gif"]) }, [io("button", { class: W(["todo-check size-4 cursor-pointer rounded relative", { done: t2.isDone }]), style: V({ borderColor: e22.color }), onClick: sl((l2) => ((e3) => {
      d2.has(e3) || (e3.done ? e3.done = !1 : (d2.add(e3), v(), window.setTimeout(() => {
        e3.done = !0, d2.delete(e3);
      }, 280)));
    })(e22), ["prevent"]) }, [lo(i2, { class: "todo-icon-check" }, { default: mn(() => [lo(Lt(e), { stroke: 2.4 })]), _: 1 })], 14, he)], 2), io("div", ye, [lo(Lt(ju), { class: W([{ done: t2.isDone }, "todo-text !block"]), autosize: { minRows: 1, maxRows: 30 }, type: "textarea", size: "small", modelValue: e22.content, "onUpdate:modelValue": (l2) => e22.content = l2 }, null, 8, ["class", "modelValue", "onUpdate:modelValue"]), lo(Lt(Ib), { onChange: (l2) => e22.focus = !1, clearable: !1, size: "small", class: "item-expire opacity-80", "value-format": "YYYY-MM-DD", format: Lt(_)(e22.expire).text, style: V([`color: ${Lt(_)(e22.expire, "list").color};--el-input-icon-color:${Lt(_)(e22.expire, "list").color}`, { "--el-input-hover-border-color": "transparent", "--el-input-focus-border-color": "transparent" }]), modelValue: e22.expire, "onUpdate:modelValue": (l2) => e22.expire = l2, type: "date", placeholder: "-" }, null, 8, ["onChange", "format", "style", "modelValue", "onUpdate:modelValue"])]), io("div", xe, [e22.done ? po("", !0) : (Zr(), to(Lt(VO), { key: 0, placement: "bottom-end", width: 200, trigger: "hover" }, { reference: mn(() => [lo(i2, null, { default: mn(() => [lo(Lt(t))]), _: 1 })]), default: mn(() => [io("div", null, [lo(j2, { title: "优先级", custom: !1, modelValue: e22.color, "onUpdate:modelValue": (l2) => e22.color = l2, colors: ["#e03131", "#ffb000", "#4772fa", "var(--d-label-2)"] }, null, 8, ["modelValue", "onUpdate:modelValue"])])]), _: 2 }, 1024)), lo(i2, { size: 16, class: "mx-2", title: "删除", onClick: (l2) => ((e3) => {
      r2("del", e3);
    })(e22) }, { default: mn(() => [lo(Lt(s))]), _: 2 }, 1032, ["onClick"])])], 2))), 128))]), _: 1 }, 8, ["class"]);
  };
} }, [["__scopeId", "data-v-883cfbad"]]), ge = /* @__PURE__ */ o({ __name: "DoneProgress", props: { width: String }, setup: (e22) => (l2, a2) => (Zr(), eo("div", { class: "absolute left-0 bottom-0 h-1 w-0 todo-progress", style: V({ width: e22.width }) }, null, 4)) }, [["__scopeId", "data-v-faa896ad"]]), ke = { class: "todo-wrap relative h-full bg-(--d-bg-page)" }, we = { class: "flex-1 pt-1 d-auto-y d-scrollbar" }, _e = { class: "d-icon f16 flex mr-1" }, Ve = ["onDblclick"], Ie = { key: 0, class: "w-full d-elip" }, je = ["onBlur", "onKeyup", "onUpdate:modelValue"], De = { class: "folder-item-tool block text-right w-4" }, Ce = { class: "f12 total" }, ze = ["onClick"], Ye = { class: "pb-3 flex text-xs justify-between" }, Me = { class: "d-icon f16 size-6 cursor-pointer opacity-80 hover:opacity-70" }, Te = { class: "font-bold h-7 text-xl mb-3 d-flex-between", style: { width: "calc(100% - 80px)" } }, Ue = { key: 0, class: "text-xs font-medium ml-2 opacity-60" }, Se = { class: "text-xs font-normal flex" }, $e = { class: "flex justify-center cursor-pointer mr-2 opacity-80" }, Fe = ["onClick", "title"], Le = { class: "todo-add relative mb-3 rounded-lg bg-(--d-bg-panel)" }, Be = { class: "todo-add-date group absolute z-10 top-[7px] right-2 flex justify-end" }, Ae = { class: "ml-1 whitespace-nowrap" }, Pe = { key: 0, class: "text-xs pl-4" }, Re = { class: "ml-1" }, Ke = /* @__PURE__ */ o({ __name: "Content", setup(m22) {
  let D2 = ["日", "一", "二", "三", "四", "五", "六"], { list: K2, folders: E2, ready: X2, addTodo: H2, removeTodo: J2, clearDone: N2, addFolder: ce2, removeFolder: ue2, persistNow: pe2 } = j(), fe2 = [{ name: "今天", id: "in-today", icon: wt(v2) }, { name: "所有", id: "in-all", icon: wt(l) }], me2 = [{ type: "card", icon: wt(h3), text: "网格" }, { type: "list", icon: wt(de), text: "列表" }], he2 = Tt(""), ye2 = Tt("in-today"), xe2 = Tt(!0), Ke2 = Tt("card"), Ge = Et(null), We = dt({ searchValue: "", inputValue: "", expire: "" });
  function Ze() {
    let e22 = u();
    return `${e22.format("YYYY-MM-DD")} 星期${D2[e22.day()]}`;
  }
  let qe = $o(() => fe2.find((e22) => e22.id === ye2.value) || E2.value.find((e22) => e22.id === ye2.value) || fe2[0]), Ee = $o(() => _(We.expire)), Xe = $o(() => {
    let e22 = K2.value, l2 = {};
    for (let a2 of fe2) l2[a2.id] = m(e22, a2.id).filter((e3) => !e3.done).length;
    for (let a2 of E2.value) l2[a2.id] = m(e22, a2.id).filter((e3) => !e3.done).length;
    return l2;
  }), He = $o(() => {
    let e22 = We.searchValue ? K2.value.filter((e3) => (e3.content || "").includes(We.searchValue)) : m(K2.value, ye2.value);
    return p(e22);
  }), Je = $o(() => He.value.filter((e22) => e22.done)), Ne = $o(() => He.value.filter((e22) => !e22.done)), Oe = $o(() => Y(K2.value));
  function Qe(e22, l2) {
    return gO.confirm(e22, l2, { center: !0, type: "warning", cancelButtonText: "取消", confirmButtonText: "确认删除" }).then(() => !0, () => !1);
  }
  function el() {
    ye2.value !== "in-today" || We.expire || (We.expire = u().format("YYYY-MM-DD"));
  }
  function ll(e22) {
    he2.value === e22.id && (he2.value = "");
  }
  function al(e22) {
    ye2.value = e22.id, We.searchValue = "", We.expire = "";
  }
  function ol2() {
    var e22;
    We.inputValue && (ye2.value !== "in-today" || We.expire || (We.expire = u().format("YYYY-MM-DD")), H2({ content: We.inputValue, expire: We.expire, folderId: ye2.value }), We.inputValue = "", We.searchValue = "", (e22 = Ge.value) == null || e22.setScrollTop(0));
  }
  async function tl() {
    await Qe("清理已完成的待办，是否清除?", "清除已完成的待办") && N2();
  }
  return vs(() => pe2()), (i2, c2) => {
    let m3 = $s;
    return Zr(), eo("div", ke, [lo(Lt(Um), { class: "el-container h-full" }, { default: mn(() => [lo(Lt(Gm), { class: "d-left-tabs pt30 px-3 flex flex-col", width: "220px", style: { "background-color": "var(--d-bg-panel)" } }, { default: mn(() => [lo(Lt(ju), { maxlength: "10", modelValue: We.searchValue, "onUpdate:modelValue": c2[0] || (c2[0] = (e22) => We.searchValue = e22), clearable: "", placeholder: "Search" }, { prefix: mn(() => [lo(Lt(e2), { class: "size-4" })]), _: 1 }, 8, ["modelValue"]), io("ul", we, [(Zr(), eo(Hr, null, Es(fe2, (e22) => lo(ve, { key: e22.id, row: e22, folderId: ye2.value, onClick: sl((l2) => al(e22), ["stop"]) }, { total: mn(() => [uo(Z(Xe.value[e22.id]), 1)]), _: 2 }, 1032, ["row", "folderId", "onClick"])), 64)), c2[5] || (c2[5] = io("p", { class: "bt mt-1 pb-1", style: { "border-color": "var(--d-border-color)" } }, null, -1)), (Zr(!0), eo(Hr, null, Es(Lt(E2), (e22) => (Zr(), to(ve, { key: e22.id, row: e22, folderId: ye2.value, onClick: sl((l2) => al(e22), ["stop"]), class: "folder-item" }, { default: mn(() => [io("i", _e, [lo(Lt(s2))]), io("i", { class: "h-full flex-1 w-full", title: "双击修改名称", onDblclick: sl((l2) => (function(e3, l3) {
      he2.value = l3.id, on(() => {
        var l4;
        return (l4 = e3.currentTarget.querySelector("input")) == null ? void 0 : l4.focus();
      });
    })(l2, e22), ["stop"]) }, [he2.value !== e22.id ? (Zr(), eo("div", Ie, Z(e22.name), 1)) : yn((Zr(), eo("input", { key: 1, onBlur: (l2) => ll(e22), maxlength: "18", class: W([{ isEdit: he2.value === e22.id }, "w-full box-border d-label-2 h-[70%] rounded-md pl-1"]), onKeyup: ol(sl((l2) => ll(e22), ["stop"]), ["enter"]), "onUpdate:modelValue": (l2) => e22.name = l2 }, null, 42, je)), [[qi, e22.name]])], 40, Ve)]), del: mn(() => [io("p", De, [io("span", Ce, Z(Xe.value[e22.id]), 1), io("span", { class: "tool d-icon f16", onClick: sl((l2) => (async function(e3) {
      if (!await Qe("删除列表后，该列表下的待办也会删除，是否继续?", "删除列表")) return;
      let l3 = ye2.value === e3.id;
      ue2(e3), l3 && al(fe2[0]);
    })(e22), ["stop"]) }, [lo(Lt(s))], 8, ze)])]), _: 2 }, 1032, ["row", "folderId", "onClick"]))), 128))]), io("div", Ye, [io("div", { class: "cursor-pointer d-flex-y opacity-80 hover:opacity-70", onClick: c2[1] || (c2[1] = (...e22) => Lt(ce2) && Lt(ce2)(...e22)) }, [lo(m3, { size: 18, class: "mr-1" }, { default: mn(() => [lo(Lt(ne))]), _: 1 }), c2[6] || (c2[6] = uo(" 新建列表 "))]), lo(Lt(VO), { placement: "bottom", width: 140, trigger: "click" }, { reference: mn(() => [io("i", Me, [lo(Lt(ie))])]), default: mn(() => [io("ul", { class: "d-pointer title-more-list f12" }, [io("li", { onClick: tl }, "清理已完成的待办")])]), _: 1 })])]), _: 1 }), lo(Lt(Zm), { class: "relative h-full overflow-hidden!", style: { "--el-main-padding": "12px", "background-color": "var(--d-bg-page)" } }, { default: mn(() => [io("h2", Te, [io("div", null, [uo(Z(qe.value.name) + " ", 1), ye2.value === "in-today" ? (Zr(), eo("span", Ue, Z(Ze()), 1)) : po("", !0)]), io("div", Se, [io("i", $e, [(Zr(), eo(Hr, null, Es(me2, (e22) => io("em", { onClick: (l2) => Ke2.value = e22.type, key: e22.type, title: e22.text, class: W([{ "bg-[rgba(var(--alpha-color),.1)]": Ke2.value === e22.type }, "size-6 p-1 rounded-md mr-1 hover:bg-[rgba(var(--alpha-color),.1)]"]) }, [(Zr(), to(ws(e22.icon), { stroke: 1.4, class: "size-4" }))], 10, Fe)), 64))])])]), io("div", Le, [lo(m3, { color: "#1890ff", size: 16, class: "todo-add-icon d-label-2 absolute! left-2 top-3" }, { default: mn(() => [lo(Lt(h))]), _: 1 }), yn(io("input", { onFocus: el, autofocus: "", class: "todo-add-input box-border block w-full relative z-1 pl-8", maxlength: "200", type: "text", id: "todoAddInput", onKeyup: ol(ol2, ["enter"]), placeholder: "添加任务", "onUpdate:modelValue": c2[2] || (c2[2] = (e22) => We.inputValue = e22) }, null, 544), [[qi, We.inputValue, void 0, { trim: !0 }]]), c2[7] || (c2[7] = io("span", { class: "todo-add-line absolute inset-0 z-0" }, null, -1)), io("div", Be, [io("span", { style: V({ color: Ee.value.color }), class: "absolute transition text-xs d-flex-y h-[28px] px-2 rounded-md whitespace-nowrap group-hover:bg-[rgba(var(--alpha-color),.06)]" }, [lo(Lt(h2), { stroke: 1, class: "size-4 shrink-0" }), io("em", Ae, Z(Ee.value.text), 1)], 4), lo(Lt(Ib), { clearable: !1, size: "default", class: "opacity-0", "value-format": "YYYY-MM-DD", type: "date", modelValue: We.expire, "onUpdate:modelValue": c2[3] || (c2[3] = (e22) => We.expire = e22), style: { "--el-date-editor-width": "128px" }, placeholder: "-" }, null, 8, ["modelValue"])])]), Lt(X2) && !He.value.length ? (Zr(), eo("div", Pe, [lo(Lt(bw), { description: "赶快添加您的待办吧" })])) : po("", !0), lo(Lt(nd), { ref_key: "scrollbarRef", ref: Ge, class: "todo-content overflow-y-auto overflow-x-hidden d-scrollbar" }, { default: mn(() => [(Zr(), to(be, { key: `undone-${ye2.value}`, onDel: Lt(J2), showType: Ke2.value, data: Ne.value }, null, 8, ["onDel", "showType", "data"])), Je.value.length ? (Zr(), eo("div", { key: 0, class: "text-xs p-2 mb-2 bg-(--d-bg-panel) rounded-lg inline-block cursor-pointer hover:opacity-60", onClick: c2[4] || (c2[4] = (e22) => xe2.value = !xe2.value) }, [io("i", { class: W(["d-icon transition", { "rotate-90": xe2.value }]) }, [lo(Lt(ht))], 2), c2[8] || (c2[8] = uo(" 已完成 ")), io("span", Re, Z(Je.value.length), 1)])) : po("", !0), lo(Xo, { name: "el-zoom-in-top" }, { default: mn(() => [yn((Zr(), to(be, { key: `done-${ye2.value}`, onDel: Lt(J2), showType: Ke2.value, isDone: !0, data: Je.value }, null, 8, ["onDel", "showType", "data"])), [[di, xe2.value]])]), _: 1 })]), _: 1 }, 512)]), _: 1 })]), _: 1 }), lo(ge, { width: Oe.value }, null, 8, ["width"])]);
  };
} }, [["__scopeId", "data-v-39ec2d8d"]]);

// output/native-current/index-CQvbs0lE.js
var p2 = { name: "appTodo" }, m2 = Object.assign(p2, { setup: (p22) => (p3, m22) => (Zr(), to(F, { height: "600px" }, { default: mn(() => [lo(Ke)]), _: 1 })) });
export {
  m2 as default
};
/**
 * @license @tabler/icons-vue v3.46.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
