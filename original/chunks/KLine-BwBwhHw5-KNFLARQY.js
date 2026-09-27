import {
  $t,
  Je,
  zt
} from "./chunk-UD26T32F.js";
import {
  Dx,
  Fb,
  NM,
  Y_,
  fb,
  nM,
  rT
} from "./chunk-FPRSI2ZI.js";
import {
  S,
  f,
  m
} from "./chunk-KKRYL5KL.js";
import "./chunk-YAQ5Z3UW.js";
import "./chunk-GDVT6VLN.js";
import {
  Nc,
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
  Lt,
  W,
  Zr,
  eo,
  io,
  lo
} from "./chunk-E6JHFIG4.js";

// output/native-current/KLine-BwBwhHw5.js
function $(e2, t2) {
  let i2 = new Array(e2.length).fill(NaN), s2 = 2 / (t2 + 1), a2 = null, o2 = [];
  for (let l2 = 0; l2 < e2.length; l2++) {
    let n2 = +e2[l2];
    if (Number.isFinite(n2)) if (a2 != null) a2 = n2 * s2 + a2 * (1 - s2), i2[l2] = a2;
    else {
      if (o2.push(n2), o2.length < t2) continue;
      a2 = o2.reduce((e3, t3) => e3 + t3, 0) / o2.length, i2[l2] = a2;
    }
  }
  return i2;
}
function I(e2, t2 = 4) {
  return Number.isFinite(e2) ? +e2.toFixed(t2) : "-";
}
var N = { class: "kline-wrap" }, k = { class: "kline-sub-tabs" }, M = /* @__PURE__ */ o({ __name: "KLine", props: { data: { type: Array, default: () => [] }, klt: { type: [String, Number], default: "101" }, market: { type: [Number, String], default: "" } }, setup(u2) {
  Y_([NM, Dx, fb, Fb, rT, zt, $t, Je]);
  let M2 = u2, F = Et("MACD");
  function D(e2) {
    let t2 = String(e2 ?? "");
    return String(M2.klt) === "106" ? t2 : t2.replace(/^\d{4}-/, "");
  }
  function C(e2, t2) {
    let i2 = [];
    for (let s2 = 0, a2 = e2.values.length; s2 < a2; s2++) {
      if (s2 < t2) {
        i2.push("-");
        continue;
      }
      let a3 = 0;
      for (let i3 = 0; i3 < t2; i3++) a3 += +e2.values[s2 - i3][1];
      i2.push(a3 / t2);
    }
    return i2;
  }
  let j = { start: 0, end: 100 }, L = { K线: !0, MA5: !1, MA10: !1, MA20: !1, MA30: !1 }, z = $o(() => {
    let e2 = (function(e3) {
      let t3 = [], i3 = [];
      return Array.isArray(e3) ? (e3.forEach((e4) => {
        if (typeof e4 != "string") return;
        let s3 = e4.split(",");
        t3.push(s3.splice(0, 1)[0]), s3 = (function(e5, t4, i4) {
          let s4 = e5[i4];
          return e5[i4] = e5[t4], e5[t4] = s4, e5;
        })(s3, 2, 3).map((e5) => +e5), i3.push(s3);
      }), { categoryData: t3, values: i3 }) : { categoryData: t3, values: i3 };
    })(M2.data), t2 = S(), i2 = t2.primary || "#2172f3", s2 = t2.avg, a2 = "display:flex;justify-content:space-between;align-items:center;", { closes: o2, highs: l2, lows: u3 } = (function(e3) {
      let t3 = [], i3 = [], s3 = [];
      for (let a3 of e3) t3.push(+a3[1]), i3.push(+a3[3]), s3.push(+a3[2]);
      return { closes: t3, highs: i3, lows: s3 };
    })(e2.values), b2 = (function(e3, t3 = 12, i3 = 26, s3 = 9) {
      let a3 = $(e3, t3), o3 = $(e3, i3), l3 = e3.map((e4, t4) => {
        let i4 = a3[t4], s4 = o3[t4];
        return Number.isFinite(i4) && Number.isFinite(s4) ? i4 - s4 : NaN;
      }), n2 = $(l3, s3);
      return { dif: l3.map((e4) => I(e4)), dea: n2.map((e4) => I(e4)), macd: l3.map((e4, t4) => {
        let i4 = n2[t4];
        return Number.isFinite(e4) && Number.isFinite(i4) ? I(2 * (e4 - i4)) : "-";
      }) };
    })(o2), y2 = (function(e3, t3, i3, s3 = 9, a3 = 3, o3 = 3) {
      let l3 = i3.length, n2 = [], r2 = [], d2 = [], c2 = 50, p2 = 50;
      for (let u4 = 0; u4 < l3; u4++) {
        if (u4 < s3 - 1) {
          n2.push("-"), r2.push("-"), d2.push("-");
          continue;
        }
        let l4 = -1 / 0, b3 = 1 / 0;
        for (let i4 = u4 - s3 + 1; i4 <= u4; i4++) {
          let s4 = +e3[i4], a4 = +t3[i4];
          Number.isFinite(s4) && s4 > l4 && (l4 = s4), Number.isFinite(a4) && a4 < b3 && (b3 = a4);
        }
        let y3 = +i3[u4];
        c2 = ((l4 !== b3 && Number.isFinite(y3) ? (y3 - b3) / (l4 - b3) * 100 : 50) + (a3 - 1) * c2) / a3, p2 = (c2 + (o3 - 1) * p2) / o3;
        let x3 = 3 * c2 - 2 * p2;
        n2.push(I(c2, 2)), r2.push(I(p2, 2)), d2.push(I(x3, 2));
      }
      return { k: n2, d: r2, j: d2 };
    })(l2, u3, o2), x2 = F.value === "MACD", m2 = x2 ? [{ name: "MACD", type: "bar", xAxisIndex: 1, yAxisIndex: 1, data: b2.macd.map((e3) => {
      if (e3 === "-" || !Number.isFinite(+e3)) return null;
      let t3 = +e3;
      return { value: t3, itemStyle: { color: t3 >= 0 ? Nc : qc } };
    }) }, { name: "DIF", type: "line", xAxisIndex: 1, yAxisIndex: 1, data: b2.dif, showSymbol: !1, symbolSize: 0, lineStyle: { color: i2, width: 1 }, itemStyle: { color: i2 } }, { name: "DEA", type: "line", xAxisIndex: 1, yAxisIndex: 1, data: b2.dea, showSymbol: !1, symbolSize: 0, lineStyle: { color: s2, width: 1 }, itemStyle: { color: s2 } }] : [{ name: "K", type: "line", xAxisIndex: 1, yAxisIndex: 1, data: y2.k, showSymbol: !1, symbolSize: 0, lineStyle: { color: i2, width: 1 }, itemStyle: { color: i2 } }, { name: "D", type: "line", xAxisIndex: 1, yAxisIndex: 1, data: y2.d, showSymbol: !1, symbolSize: 0, lineStyle: { color: s2, width: 1 }, itemStyle: { color: s2 } }, { name: "J", type: "line", xAxisIndex: 1, yAxisIndex: 1, data: y2.j, showSymbol: !1, symbolSize: 0, lineStyle: { color: "#a78bfa", width: 1 }, itemStyle: { color: "#a78bfa" } }];
    return { backgroundColor: "transparent", animation: !1, legend: { data: ["K线", "MA5", "MA10", "MA20", "MA30"], selected: { ...L }, selectedMode: !0, top: 4, textStyle: { color: t2.label }, inactiveColor: "#c0c4cc" }, axisPointer: { link: [{ xAxisIndex: "all" }] }, grid: [{ left: 0, right: 10, top: 32, height: "58%", containLabel: !0 }, { left: 0, right: 10, height: "16%", bottom: 32, containLabel: !0 }], xAxis: [{ type: "category", data: e2.categoryData, gridIndex: 0, scale: !0, boundaryGap: !1, axisLine: { onZero: !1, lineStyle: { color: t2.border } }, axisLabel: { show: !1 }, axisTick: { show: !1 }, splitLine: { show: !1 }, min: "dataMin", max: "dataMax", axisPointer: { label: { show: !1 } } }, { type: "category", data: e2.categoryData, gridIndex: 1, scale: !0, boundaryGap: !1, axisLine: { onZero: !1, lineStyle: { color: t2.border } }, axisLabel: { color: t2.label, formatter: D }, axisTick: { show: !1 }, splitLine: { show: !1 }, min: "dataMin", max: "dataMax", axisPointer: { label: { show: !0, formatter: (e3) => D(e3.value) } } }], yAxis: [{ scale: !0, gridIndex: 0, axisLabel: { color: t2.label }, axisLine: { show: !1 }, axisTick: { show: !1 }, splitLine: { show: !1 }, axisPointer: { label: { show: !0 } } }, { scale: !0, gridIndex: 1, splitNumber: 2, axisLabel: { color: t2.label, fontSize: 10 }, axisLine: { show: !1 }, axisTick: { show: !1 }, splitLine: { show: !1 }, axisPointer: { label: { show: !1 } } }], dataZoom: [{ type: "inside", xAxisIndex: [0, 1], start: j.start, end: j.end }, { show: !0, type: "slider", xAxisIndex: [0, 1], height: 22, bottom: 2, start: j.start, end: j.end, borderColor: "transparent", backgroundColor: t2.panel, fillerColor: "rgba(148, 163, 184, 0.14)", handleIcon: "path://M-2,-8 L2,-8 L2,8 L-2,8 Z", handleSize: "70%", handleStyle: { color: "rgba(148, 163, 184, 0.55)", borderColor: "transparent", borderWidth: 0, shadowBlur: 0 }, moveHandleSize: 0, dataBackground: { lineStyle: { color: i2, width: 1, opacity: 0.6 }, areaStyle: { color: "rgba(5, 134, 255, 0.12)" } }, selectedDataBackground: { lineStyle: { color: i2, width: 1 }, areaStyle: { color: "rgba(5, 134, 255, 0.28)" } }, textStyle: { color: t2.label }, brushSelect: !1 }], tooltip: { trigger: "axis", axisPointer: { type: "cross", lineStyle: { color: t2.label }, crossStyle: { color: t2.label } }, backgroundColor: t2.panel, borderColor: t2.border, textStyle: { color: t2.label }, extraCssText: "min-width:200px;padding:8px 12px;", formatter: function(i3) {
      var s3, o3, l3;
      if (!i3 || i3.length === 0) return "";
      let n2 = i3[0].dataIndex, u4 = i3[0].axisValue;
      if (!i3.find((e3) => e3.seriesType === "candlestick")) return "";
      let m3 = ((s3 = e2.values) == null ? void 0 : s3[n2]) || [], h2 = +m3[0], v2 = +m3[1], f2 = +m3[2], S2 = +m3[3], A2 = m3[4], g2 = m3[7], w2 = m3[8], $2 = (l3 = (o3 = e2.values) == null ? void 0 : o3[n2 - 1]) == null ? void 0 : l3[1], I2 = Number.isFinite(+w2) ? +w2 : NaN, N2 = Number.isFinite(+g2) ? +g2 : NaN;
      !Number.isFinite(I2) && Number.isFinite(+$2) && $2 && (I2 = +(v2 - $2).toFixed(2)), !Number.isFinite(N2) && Number.isFinite(+$2) && $2 && (N2 = +((v2 - $2) / $2 * 100).toFixed(2));
      let k2 = Number.isFinite(I2) ? I2 : v2 - h2, F2 = k2 > 0 ? Nc : k2 < 0 ? qc : t2.label, D2 = k2 > 0 ? "+" : "", C2 = (e3, t3 = 2) => Number.isFinite(+e3) ? Number(e3).toFixed(t3) : "-", j2 = f(A2, m(M2.market)), L2 = '<div style="font-size:12px;line-height:2;">';
      if (L2 += `<div style="${a2}"><span>时间</span><b>${u4}</b></div>`, L2 += `<div style="${a2}"><span>开盘</span><b style="color:${F2}">${C2(h2)}</b></div>`, L2 += `<div style="${a2}"><span>收盘</span><b style="color:${F2}">${C2(v2)}</b></div>`, L2 += `<div style="${a2}"><span>最高</span><b style="color:${F2}">${C2(S2)}</b></div>`, L2 += `<div style="${a2}"><span>最低</span><b style="color:${F2}">${C2(f2)}</b></div>`, L2 += `<div style="${a2}"><span>涨跌额</span><b style="color:${F2}">${Number.isFinite(I2) ? `${D2}${C2(I2)}` : "-"}</b></div>`, L2 += `<div style="${a2}"><span>涨跌幅</span><b style="color:${F2}">${Number.isFinite(N2) ? `${D2}${C2(N2)}%` : "-"}</b></div>`, L2 += `<div style="${a2}"><span>成交量</span><b>${j2}</b></div>`, i3.filter((e3) => e3.seriesType === "line" && ["MA5", "MA10", "MA20", "MA30"].includes(e3.seriesName)).forEach((e3) => {
        let t3 = e3.data;
        t3 != null && t3 !== "-" && (L2 += `<div style="${a2}"><span><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${e3.color};margin-right:4px;vertical-align:middle;"></span>${e3.seriesName}</span><b style="color:${e3.color}">${Number(t3).toFixed(2)}</b></div>`);
      }), x2) {
        let e3 = b2.dif[n2], t3 = b2.dea[n2], i4 = b2.macd[n2];
        e3 !== "-" && (L2 += `<div style="${a2}"><span>DIF</span><b>${e3}</b></div>`), t3 !== "-" && (L2 += `<div style="${a2}"><span>DEA</span><b>${t3}</b></div>`), i4 !== "-" && (L2 += `<div style="${a2}"><span>MACD</span><b>${i4}</b></div>`);
      } else {
        let e3 = y2.k[n2], t3 = y2.d[n2], i4 = y2.j[n2];
        e3 !== "-" && (L2 += `<div style="${a2}"><span>K</span><b>${e3}</b></div>`), t3 !== "-" && (L2 += `<div style="${a2}"><span>D</span><b>${t3}</b></div>`), i4 !== "-" && (L2 += `<div style="${a2}"><span>J</span><b>${i4}</b></div>`);
      }
      return L2 += "</div>", L2;
    } }, series: [{ name: "K线", type: "candlestick", xAxisIndex: 0, yAxisIndex: 0, data: e2.values, itemStyle: { color: Nc, color0: qc, borderColor: Nc, borderColor0: qc } }, { name: "MA5", type: "line", xAxisIndex: 0, yAxisIndex: 0, data: C(e2, 5), showSymbol: !1, symbolSize: 0, lineStyle: { color: i2, width: 1.5 }, itemStyle: { color: i2 } }, { name: "MA10", type: "line", xAxisIndex: 0, yAxisIndex: 0, data: C(e2, 10), showSymbol: !1, symbolSize: 0, lineStyle: { color: s2, width: 1.5 }, itemStyle: { color: s2 } }, { name: "MA20", type: "line", xAxisIndex: 0, yAxisIndex: 0, data: C(e2, 20), showSymbol: !1, symbolSize: 0, lineStyle: { color: i2, width: 1, opacity: 0.45 }, itemStyle: { color: i2 } }, { name: "MA30", type: "line", xAxisIndex: 0, yAxisIndex: 0, data: C(e2, 30), showSymbol: !1, symbolSize: 0, lineStyle: { color: s2, width: 1, opacity: 0.45 }, itemStyle: { color: s2 } }, ...m2] };
  });
  function K(e2) {
    var t2, i2, s2, a2;
    let o2 = e2.start ?? ((i2 = (t2 = e2.batch) == null ? void 0 : t2[0]) == null ? void 0 : i2.start), l2 = e2.end ?? ((a2 = (s2 = e2.batch) == null ? void 0 : s2[0]) == null ? void 0 : a2.end);
    o2 != null && (j.start = o2), l2 != null && (j.end = l2);
  }
  function P(e2) {
    e2?.selected && (L = { ...L, ...e2.selected });
  }
  return (e2, t2) => (Zr(), eo("div", N, [io("div", k, [io("button", { type: "button", class: W(["kline-sub-tab text-[11px]", { active: F.value === "MACD" }]), onClick: t2[0] || (t2[0] = (e3) => F.value = "MACD") }, " MACD ", 2), io("button", { type: "button", class: W(["kline-sub-tab text-[11px]", { active: F.value === "KDJ" }]), onClick: t2[1] || (t2[1] = (e3) => F.value = "KDJ") }, " KDJ ", 2)]), lo(Lt(nM), { autoresize: "", class: "chart", option: z.value, onDatazoom: K, onLegendselectchanged: P }, null, 8, ["option"])]));
} }, [["__scopeId", "data-v-f9b22579"]]);
export {
  M as default
};
