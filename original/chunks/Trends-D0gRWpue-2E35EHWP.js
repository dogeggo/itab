import {
  $t,
  zt
} from "./chunk-UD26T32F.js";
import {
  Dx,
  MT,
  NM,
  Y_,
  fb,
  nM,
  rT
} from "./chunk-FPRSI2ZI.js";
import {
  $
} from "./chunk-HWR4FDWZ.js";
import {
  S,
  c
} from "./chunk-KKRYL5KL.js";
import "./chunk-YAQ5Z3UW.js";
import "./chunk-GDVT6VLN.js";
import "./chunk-WGCOLTAW.js";
import {
  aO
} from "./chunk-QX73FKBL.js";
import {
  Fc,
  Nc,
  Rc,
  qc
} from "./chunk-LEVEZLTX.js";
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
  $o,
  Et,
  Fr,
  Lt,
  Zr,
  to
} from "./chunk-E6JHFIG4.js";

// output/native-current/Trends-D0gRWpue.js
var N = /* @__PURE__ */ o({ __name: "Trends", props: { secid: { type: String, default: "" }, market: { type: [Number, String], default: "" } }, setup(b2, { expose: N2 }) {
  Y_([NM, Dx, fb, rT, zt, $t, MT]);
  let $2 = b2, F = Et([]), k = Et(null);
  function z(e2, t2 = 0.32) {
    return { type: "linear", x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: `rgba(${e2}, ${t2})` }, { offset: 1, color: `rgba(${e2}, 0)` }] };
  }
  N2({ init: _ });
  let C = { start: 0, end: 100 }, L = "", A = null;
  function _(e2) {
    let t2 = e2 || $2.secid;
    return t2 ? (L === t2 && A || (L = t2, A = $({ secid: t2 }).then((e3) => {
      var o2, l2, a2;
      if (t2 !== $2.secid) return;
      F.value = ((o2 = e3.data) == null ? void 0 : o2.trends) || [];
      let r2 = +(((l2 = e3.data) == null ? void 0 : l2.preClose) ?? ((a2 = e3.data) == null ? void 0 : a2.prePrice));
      k.value = Number.isFinite(r2) ? r2 : null;
    }).catch(() => {
      t2 === $2.secid && (F.value = [], k.value = null, aO.error("分时数据加载失败"));
    }).finally(() => {
      L === t2 && (L = "", A = null);
    })), A) : Promise.resolve();
  }
  function D(e2, t2) {
    return e2.values.map((e3) => {
      let o2 = +e3[t2];
      return Number.isFinite(o2) ? o2 : null;
    });
  }
  Fr(() => $2.secid, (e2) => {
    e2 && _(e2);
  }, { immediate: !0 });
  let I = $o(() => {
    let e2 = (function(e3) {
      let t3 = [], o3 = [], l3 = c($2.market);
      return e3.forEach((e4) => {
        let a3 = e4.split(","), r3 = a3[0].split(" ")[1];
        (!l3 || !r3 || r3 < "15:31") && (t3.push(r3 || a3[0]), o3.push(a3));
      }), { categoryData: t3, values: o3 };
    })(F.value), t2 = S(), o2 = t2.avg, l2 = D(e2, 1), a2 = D(e2, 3), r2 = k.value, { up: i2, down: s2 } = (function(e3, t3) {
      let o3 = e3.length, l3 = Array(o3).fill(null), a3 = Array(o3).fill(null);
      if (!Number.isFinite(t3)) return { up: e3.slice(), down: a3 };
      for (let r3 = 0; r3 < o3; r3++) {
        let o4 = e3[r3];
        if (!Number.isFinite(o4)) continue;
        let i3 = r3 > 0 ? e3[r3 - 1] : o4;
        o4 >= t3 ? (l3[r3] = o4, r3 > 0 && Number.isFinite(i3) && i3 < t3 && (l3[r3 - 1] = t3, a3[r3 - 1] = t3)) : (a3[r3] = o4, r3 > 0 && Number.isFinite(i3) && i3 >= t3 && (l3[r3 - 1] = t3, a3[r3 - 1] = t3));
      }
      return { up: l3, down: a3 };
    })(l2, r2), n2 = [...l2].reverse().find((e3) => Number.isFinite(e3)), b3 = !Number.isFinite(r2) || !Number.isFinite(n2) || n2 >= r2, h2 = b3 ? Nc : qc;
    return { backgroundColor: "transparent", animation: !1, color: [Nc, qc, o2], textStyle: { color: t2.label }, tooltip: { trigger: "axis", backgroundColor: t2.panel, borderColor: t2.border, textStyle: { color: t2.label }, axisPointer: { type: "cross", lineStyle: { color: t2.label }, crossStyle: { color: t2.label } }, formatter(e3) {
      if (!e3?.length) return "";
      let l3 = e3[0].axisValue, a3, i3, s3 = t2.label;
      for (let t3 of e3) t3.seriesName === "均价" && t3.data != null && (i3 = t3.data), t3.seriesName !== "涨" && t3.seriesName !== "跌" || t3.data == null || t3.data === "-" || (a3 = t3.data, s3 = t3.seriesName === "涨" ? Nc : qc);
      if (a3 == null) return "";
      let n3 = "display:flex;justify-content:space-between;gap:16px;line-height:1.8;", d2 = '<div style="font-size:12px;min-width:120px">';
      if (d2 += `<div style="${n3}"><span>时间</span><b>${l3}</b></div>`, d2 += `<div style="${n3}"><span>最新</span><b style="color:${s3}">${Number(a3).toFixed(2)}</b></div>`, i3 != null && i3 !== "-" && (d2 += `<div style="${n3}"><span>均价</span><b style="color:${o2}">${Number(i3).toFixed(2)}</b></div>`), Number.isFinite(r2)) {
        let e4 = +(a3 - r2).toFixed(2), o3 = +(e4 / r2 * 100).toFixed(2), l4 = e4 > 0 ? "+" : "";
        d2 += `<div style="${n3}"><span>涨跌</span><b style="color:${e4 > 0 ? Nc : e4 < 0 ? qc : t2.label}">${l4}${e4} (${l4}${o3}%)</b></div>`;
      }
      return d2 += "</div>", d2;
    } }, legend: { data: [{ name: "最新价", itemStyle: { color: h2 } }, { name: "均价", itemStyle: { color: o2 } }], textStyle: { color: t2.label }, top: 0, itemWidth: 8, itemHeight: 8, icon: "circle" }, grid: { top: 36, left: 0, right: 10, bottom: 36, containLabel: !0 }, xAxis: { type: "category", data: e2.categoryData, scale: !0, boundaryGap: !1, axisLine: { onZero: !1, lineStyle: { color: t2.border } }, axisLabel: { color: t2.label }, axisTick: { show: !1 }, splitLine: { show: !1 }, min: "dataMin", max: "dataMax" }, yAxis: { scale: !0, axisLabel: { color: t2.label }, axisLine: { show: !1 }, axisTick: { show: !1 }, splitLine: { show: !1 } }, dataZoom: [{ type: "inside", start: C.start, end: C.end }, { show: !0, type: "slider", height: 22, bottom: 4, start: C.start, end: C.end, borderColor: "transparent", backgroundColor: t2.panel, fillerColor: "rgba(148, 163, 184, 0.14)", handleIcon: "path://M-2,-8 L2,-8 L2,8 L-2,8 Z", handleSize: "70%", handleStyle: { color: "rgba(148, 163, 184, 0.55)", borderColor: "transparent", borderWidth: 0, shadowBlur: 0 }, moveHandleSize: 0, dataBackground: { lineStyle: { color: h2, width: 1, opacity: 0.6 }, areaStyle: { color: `rgba(${b3 ? Rc : Fc}, 0.12)` } }, selectedDataBackground: { lineStyle: { color: h2, width: 1 }, areaStyle: { color: `rgba(${b3 ? Rc : Fc}, 0.28)` } }, textStyle: { color: t2.label }, brushSelect: !1 }], series: [{ name: "涨", type: "line", data: i2, showSymbol: !1, symbolSize: 0, connectNulls: !1, z: 3, areaStyle: { color: z(Rc) }, lineStyle: { color: Nc, width: 1.5 }, itemStyle: { color: Nc } }, { name: "跌", type: "line", data: s2, showSymbol: !1, symbolSize: 0, connectNulls: !1, z: 3, areaStyle: { color: z(Fc) }, lineStyle: { color: qc, width: 1.5 }, itemStyle: { color: qc } }, { name: "均价", type: "line", data: a2, symbolSize: 0, showSymbol: !1, z: 4, lineStyle: { color: o2, width: 1.5 }, itemStyle: { color: o2 }, markLine: Number.isFinite(r2) ? { silent: !0, symbol: "none", animation: !1, label: { show: !1 }, lineStyle: { type: "dashed", width: 1, color: Nc, opacity: 0.45 }, data: [{ yAxis: r2 }] } : void 0 }, { name: "最新价", type: "line", data: [], showSymbol: !1, lineStyle: { width: 0 }, itemStyle: { color: h2 } }] };
  });
  function P(e2) {
    var t2, o2, l2, a2;
    let r2 = e2.start ?? ((o2 = (t2 = e2.batch) == null ? void 0 : t2[0]) == null ? void 0 : o2.start), i2 = e2.end ?? ((a2 = (l2 = e2.batch) == null ? void 0 : l2[0]) == null ? void 0 : a2.end);
    r2 != null && (C.start = r2), i2 != null && (C.end = i2);
  }
  return (e2, t2) => (Zr(), to(Lt(nM), { autoresize: "", class: "chart", option: I.value, onDatazoom: P }, null, 8, ["option"]));
} }, [["__scopeId", "data-v-18251528"]]);
export {
  N as default
};
