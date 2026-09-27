import {
  t
} from "./chunk-C332WR7G.js";
import {
  dt
} from "./chunk-E6JHFIG4.js";

// output/native-current/hardware-info-BE9k8ghn.js
var r = dt({ checked: !1, isGood: window.__nativeSession.readText("hardware-perf") !== "bad" }), a = () => r.isGood;
r.checked || (r.checked = !0, t(() => import("./perfMonitor-DwLnhXHg-JHCHSTG2.js"), []).then((e2) => {
  let o2 = new e2.PerformanceAnalyzer({ sampleInterval: 1e3, fpsThreshold: 30, longTaskThreshold: 50, jankThreshold: 100, onRealtime: function(e3) {
  }, onReport: function(e3) {
    ["F"].includes(e3.grade.grade) ? (r.isGood = !1, window.__nativeSession.writeText("hardware-perf", "bad")) : (r.isGood = !0, window.__nativeSession.writeText("hardware-perf", "good"));
  } });
  o2.start(), setTimeout(function() {
    o2.stop();
  }, 1e4);
}));
export {
  a as isGoodGpu
};
