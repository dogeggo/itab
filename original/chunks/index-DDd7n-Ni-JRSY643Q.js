import {
  F
} from "./chunk-R77VKLDU.js";
import {
  s
} from "./chunk-FF73HVKT.js";
import "./chunk-WGCOLTAW.js";
import {
  Pp,
  aO,
  dv,
  uv
} from "./chunk-QX73FKBL.js";
import "./chunk-IEOKZKWO.js";
import {
  Zt,
  kt
} from "./chunk-LEVEZLTX.js";
import "./chunk-5MDIDYN5.js";
import {
  et,
  ot,
  u,
  z
} from "./chunk-AFECQBGL.js";
import {
  f,
  le
} from "./chunk-YQ4PBQUM.js";
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
  Hr,
  Lt,
  St,
  Tt,
  V,
  W,
  Z,
  Zr,
  dt,
  eo,
  hs,
  io,
  lo,
  mn,
  on,
  sl,
  to,
  uo,
  vs
} from "./chunk-E6JHFIG4.js";

// output/native-current/Content-BnIujwRX.js
var E = r("filled", "square-rounded-minus-filled", "SquareRoundedMinusFilled", [["path", { d: "M12 2l.324 .001l.318 .004l.616 .017l.299 .013l.579 .034l.553 .046c4.785 .464 6.732 2.411 7.196 7.196l.046 .553l.034 .579c.005 .098 .01 .198 .013 .299l.017 .616l.005 .642l-.005 .642l-.017 .616l-.013 .299l-.034 .579l-.046 .553c-.464 4.785 -2.411 6.732 -7.196 7.196l-.553 .046l-.579 .034c-.098 .005 -.198 .01 -.299 .013l-.616 .017l-.642 .005l-.642 -.005l-.616 -.017l-.299 -.013l-.579 -.034l-.553 -.046c-4.785 -.464 -6.732 -2.411 -7.196 -7.196l-.046 -.553l-.034 -.579a28.058 28.058 0 0 1 -.013 -.299l-.017 -.616c-.003 -.21 -.005 -.424 -.005 -.642l.001 -.324l.004 -.318l.017 -.616l.013 -.299l.034 -.579l.046 -.553c.464 -4.785 2.411 -6.732 7.196 -7.196l.553 -.046l.579 -.034c.098 -.005 .198 -.01 .299 -.013l.616 -.017c.21 -.003 .424 -.005 .642 -.005zm3 9h-6l-.117 .007a1 1 0 0 0 .117 1.993h6l.117 -.007a1 1 0 0 0 -.117 -1.993z", key: "svg-0" }]]), F2 = { class: "ar" }, P = { class: "curr-timezone ac" }, q = { class: "ar f16 mt10 d-sub", style: { "margin-right": "110px" } }, M = { class: "fr mt20 ar", style: { "margin-right": "110px" } }, V2 = { class: "timezone-list d-inline" }, U = ["onClick"], D = ["onClick"], K = { class: "b d-elip d-block" }, N = { class: "mt20 d-hidden", style: { clear: "both" } }, G = /* @__PURE__ */ o({ __name: "Content", props: { size: String }, setup(R2) {
  let S2 = Tt(null);
  u.extend(z), u.locale("zh-cn"), u.extend(ot), u.extend(et);
  let G2 = Tt("");
  function T(e2 = "") {
    return e2 ? u().tz(e2).format("HH:mm") : u().format("HH:mm:ss");
  }
  let W2 = [{ name: "洛杉矶", code: "America/Los_Angeles" }, { name: "纽约", code: "America/New_York" }, { name: "伦敦", code: "Europe/London" }, { name: "巴黎", code: "Europe/Paris" }, { name: "基辅", code: "Europe/Kiev" }, { name: "北京", code: "Asia/Shanghai" }, { name: "东京", code: "Asia/Tokyo" }], X = R2, Z2 = dt({ fontFamily: "", cityList: [], cityId: "", cityOptions: [], tzList: [], widgetList: f.get("app-worldClock") || [{ name: "北京", code: "Asia/Shanghai" }, { name: "洛杉矶", code: "America/Los_Angeles" }, { name: "纽约", code: "America/New_York" }, { name: "巴黎", code: "Europe/Paris" }] }), B;
  function J(e2) {
    on(() => {
      let { contentRect: t2 } = e2[0], l2 = document.querySelector(".curr-timezone");
      l2 && (l2.style.fontSize = t2.width / 5.2 + "px", l2.style.lineHeight = t2.width / 5.2 + "px");
    });
  }
  function Q(e2) {
    return Z2.widgetList.findIndex((t2) => e2.code === t2.code);
  }
  function ee(e2) {
    e2 && s({ location: e2 }).then((e3) => {
      let t2 = e3.data || [];
      Z2.cityOptions = t2;
    });
  }
  async function te(e2) {
    if (!e2) return;
    let t2 = Z2.cityOptions.find((t3) => t3.id == e2);
    Z2.tzList.some((e3) => e3.name === t2.name) ? aO.warning("当前城市已添加") : (Z2.tzList.push({ name: t2.name, code: t2.tz }), Z2.cityId = "", data_default.set("app-worldClock-tzList", St(Z2.tzList)));
  }
  function le2(e2) {
    let t2 = Q(e2);
    if (t2 != -1) {
      if (Z2.widgetList.length == 1) return void aO.warning("至少保留一个");
      Z2.widgetList.splice(t2, 1);
    } else {
      if (Z2.widgetList.length >= 4) return void aO.warning("最多只能选4个");
      Z2.widgetList.push(e2);
    }
    le.emit("app-worldClock", Z2.widgetList), f.set("app-worldClock", Z2.widgetList);
  }
  function se() {
    Z2.tzList = W2, data_default.set("app-worldClock-tzList", St(Z2.tzList));
  }
  data_default.get("app-worldClock-tzList").then((e2) => {
    Z2.tzList = e2 || W2, ae();
  }), on(() => {
    let e2 = S2.value;
    B = new ResizeObserver(J), B.observe(e2);
  }), hs(() => {
    B && B.disconnect();
  });
  let ie = null;
  function ae() {
    let e2 = Zt[u().day()], t2 = u(X.date).dayOfYear(), l2 = u.tz.guess();
    G2.value = `${l2}  ${u().format("YYYY年MM月DD日")} 星期${e2}   第${t2}天`, Z2.tzList = Z2.tzList.map((e3) => ({ ...e3, time: T(e3.code) }));
  }
  return ie && clearInterval(ie), ie = setInterval(() => {
    ae();
  }, 1e3), vs(() => {
    clearInterval(ie);
  }), (e2, t2) => (Zr(), eo("div", { class: W(["h-full workClock-wrap relative select-text", `iconsize-${R2.size}`]), ref_key: "watchResize", ref: S2, style: V([{ padding: "12px" }, `--fontFamily:${Z2.fontFamily}`]) }, [io("div", F2, [lo(Lt(uv), { class: "w-full mt20 mr20", "append-to": "", modelValue: Z2.cityId, "onUpdate:modelValue": t2[0] || (t2[0] = (e3) => Z2.cityId = e3), "remote-method": ee, filterable: "", remote: "", placeholder: "输入城市", onChange: te, size: "default", style: { width: "220px" } }, { default: mn(() => [(Zr(!0), eo(Hr, null, Es(Z2.cityOptions, (e3) => (Zr(), to(Lt(dv), { key: e3.value, label: e3.label, value: e3.id }, null, 8, ["label", "value"]))), 128))]), _: 1 }, 8, ["modelValue"])]), io("p", P, [io("time", null, Z(T()), 1)]), io("p", q, Z(G2.value), 1), io("div", M, [io("ul", V2, [(Zr(!0), eo(Hr, null, Es(Z2.tzList, (e3, t3) => (Zr(), eo("li", { onClick: (t4) => le2(e3), class: W({ active: Q(e3) != "-1" }), key: e3.tz }, [io("i", { onClick: sl((e4) => (function(e5) {
    Z2.tzList.splice(e5, 1), data_default.set("app-worldClock-tzList", St(Z2.tzList));
  })(t3), ["stop"]), class: "d-icon item-delete", title: "删除" }, [lo(Lt(E))], 8, D), io("b", K, Z(e3.name), 1), io("p", null, Z(e3.time), 1)], 10, U))), 128))]), io("ul", N, [t2[1] || (t2[1] = uo(" 组件时区列表: ")), (Zr(!0), eo(Hr, null, Es(Z2.widgetList, (e3) => (Zr(), to(Lt(Pp), { key: e3.code, class: "mr5", style: { "--el-color-primary": "#409eff" }, closable: "", "disable-transitions": !1, onClose: (t3) => le2(e3) }, { default: mn(() => [uo(Z(e3.name), 1)]), _: 2 }, 1032, ["onClose"]))), 128)), io("i", { onClick: se, title: "重置时区列表", class: "d-icon reset-icon", style: { "vertical-align": "-2px" } }, [lo(Lt(kt))])])])], 6));
} }, [["__scopeId", "data-v-fc020c18"]]);

// output/native-current/index-DDd7n-Ni.js
var p = { __name: "index", setup: (p2) => (p3, m) => (Zr(), to(F, { width: "860px", height: "550px", destroyOnClose: !0 }, { default: mn(() => [lo(G)]), _: 1 })) };
export {
  p as default
};
/**
 * @license @tabler/icons-vue v3.46.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
