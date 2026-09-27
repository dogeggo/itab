// output/native-current/perfMonitor-DwLnhXHg.js
var t = (function() {
  if (typeof performance < "u" && performance.now) return function() {
    return performance.now();
  };
  var t2 = Date.now();
  return function() {
    return Date.now() - t2;
  };
})();
function e(t2, e2) {
  if (typeof PerformanceObserver > "u") return null;
  try {
    var a2 = new PerformanceObserver(e2);
    return a2.observe({ type: t2, buffered: !0 }), a2;
  } catch {
    try {
      var r = new PerformanceObserver(e2);
      return r.observe({ entryTypes: [t2] }), r;
    } catch {
      return null;
    }
  }
}
function a(t2) {
  t2 = t2 || {}, this.sampleInterval = t2.sampleInterval || 1e3, this.fpsThreshold = t2.fpsThreshold || 30, this.longTaskThreshold = t2.longTaskThreshold || 50, this.jankThreshold = t2.jankThreshold || 100, this.onReport = t2.onReport || null, this.onRealtime = t2.onRealtime || null, this._running = !1, this._rafId = null, this._observers = [], this._frameState = { lastTime: 0, count: 0, deltas: [], sampleStart: 0 }, this._longTasks = [], this._metrics = this._createEmptyMetrics();
}
a.prototype._createEmptyMetrics = function() {
  return { fps: 0, avgFps: 0, minFps: 1 / 0, maxFps: 0, avgFrameTimeMs: 0, maxFrameTimeMs: 0, totalFrames: 0, droppedFrames: 0, longTaskCount: 0, jankCount: 0, longTaskDetails: [], jankDetails: [] };
}, a.prototype.start = function() {
  return this._running || (this._running = !0, this._metrics = this._createEmptyMetrics(), this._longTasks = [], this._frameState.lastTime = t(), this._frameState.sampleStart = this._frameState.lastTime, this._frameState.count = 0, this._frameState.deltas = [], this._startRAF(), this._startLongTaskObserver(), this._startLayoutShiftObserver()), this;
}, a.prototype.stop = function() {
  if (!this._running) return this;
  this._running = !1, this._rafId && typeof cancelAnimationFrame < "u" && (cancelAnimationFrame(this._rafId), this._rafId = null);
  for (var t2 = 0; t2 < this._observers.length; t2++) try {
    this._observers[t2].disconnect();
  } catch {
  }
  this._observers = [];
  var e2 = this.getReport();
  return typeof this.onReport == "function" && this.onReport(e2), this;
}, a.prototype._startRAF = function() {
  if (typeof requestAnimationFrame < "u") {
    var t2 = this;
    this._rafId = requestAnimationFrame(function e2(a2) {
      if (t2._running) {
        var r = a2 - t2._frameState.lastTime;
        if (t2._frameState.lastTime = a2, t2._frameState.count > 0) {
          t2._frameState.deltas.push(r), t2._metrics.totalFrames++, r > t2._metrics.maxFrameTimeMs && (t2._metrics.maxFrameTimeMs = r), r >= t2.jankThreshold && (t2._metrics.jankCount++, t2._metrics.jankDetails.push({ timeMs: Math.round(a2 - t2._frameState.sampleStart), durationMs: +r.toFixed(2) }));
          var s = Math.round(r / 16.667);
          s > 1 && (t2._metrics.droppedFrames += s - 1);
        }
        t2._frameState.count++;
        var n = a2 - t2._frameState.sampleStart;
        if (n >= t2.sampleInterval) {
          var i = Math.round(t2._frameState.count / n * 1e3);
          t2._metrics.fps = i, i < t2._metrics.minFps && (t2._metrics.minFps = i), i > t2._metrics.maxFps && (t2._metrics.maxFps = i);
          for (var o = 0, m = 0; m < t2._frameState.deltas.length; m++) o += t2._frameState.deltas[m];
          t2._metrics.avgFrameTimeMs = t2._frameState.deltas.length > 0 ? +(o / t2._frameState.deltas.length).toFixed(2) : 0, typeof t2.onRealtime == "function" && t2.onRealtime({ fps: i, avgFrameTimeMs: t2._metrics.avgFrameTimeMs, maxFrameTimeMs: +t2._metrics.maxFrameTimeMs.toFixed(2), longTaskCount: t2._metrics.longTaskCount, jankCount: t2._metrics.jankCount }), t2._frameState.deltas = [], t2._frameState.count = 0, t2._frameState.sampleStart = a2;
        }
        t2._rafId = requestAnimationFrame(e2);
      }
    });
  }
}, a.prototype._startLongTaskObserver = function() {
  var t2 = this, a2 = e("longtask", function(e2) {
    for (var a3 = e2.getEntries(), r = 0; r < a3.length; r++) {
      var s = a3[r], n = { startTimeMs: +s.startTime.toFixed(2), durationMs: +s.duration.toFixed(2), name: s.name || "unknown", attribution: [] };
      if (s.attribution && s.attribution.length > 0) for (var i = 0; i < s.attribution.length; i++) {
        var o = s.attribution[i];
        n.attribution.push({ name: o.name || "", containerType: o.containerType || "", containerSrc: o.containerSrc || "", containerId: o.containerId || "", containerName: o.containerName || "" });
      }
      t2._metrics.longTaskCount++, t2._longTasks.push(n), t2._metrics.longTaskDetails.push(n);
    }
  });
  a2 && this._observers.push(a2);
}, a.prototype._startLayoutShiftObserver = function() {
  var t2 = this;
  this._clsValue = 0;
  var a2 = e("layout-shift", function(e2) {
    for (var a3 = e2.getEntries(), r = 0; r < a3.length; r++) a3[r].hadRecentInput || (t2._clsValue += a3[r].value);
  });
  a2 && this._observers.push(a2);
}, a.prototype.getReport = function() {
  var t2 = this._metrics;
  this._frameState.lastTime, this._frameState.sampleStart, this._frameState.deltas.length > 0 && this._frameState.deltas.reduce(function(t3, e3) {
    return t3 + e3;
  }, 0);
  var e2 = t2.totalFrames > 0 && t2.avgFps > 0 ? +(t2.totalFrames / t2.avgFps).toFixed(2) : 0, a2 = this._calcGrade(t2);
  return { timestamp: (/* @__PURE__ */ new Date()).toISOString(), durationSec: e2, grade: a2, frameMetrics: { fps: t2.fps, avgFps: t2.avgFps === 0 && t2.totalFrames > 0 ? +(t2.totalFrames / (e2 || 1)).toFixed(2) : t2.avgFps, minFps: t2.minFps === 1 / 0 ? 0 : t2.minFps, maxFps: t2.maxFps, avgFrameTimeMs: t2.avgFrameTimeMs, maxFrameTimeMs: +t2.maxFrameTimeMs.toFixed(2), totalFrames: t2.totalFrames, droppedFrames: t2.droppedFrames, jankCount: t2.jankCount, jankDetails: t2.jankDetails.slice(-20) }, longTaskMetrics: { supported: this._observers.some(function(t3) {
    return !0;
  }) && typeof PerformanceObserver < "u", count: t2.longTaskCount, details: t2.longTaskDetails.slice(-20) }, cls: typeof this._clsValue == "number" ? +this._clsValue.toFixed(4) : null, capabilities: { raf: typeof requestAnimationFrame < "u", longTaskAPI: typeof PerformanceObserver < "u", layoutShiftAPI: typeof PerformanceObserver < "u" } };
}, a.prototype._calcGrade = function(t2) {
  var e2 = 100, a2 = t2.avgFps || t2.fps;
  a2 < 60 && (e2 -= 1.2 * (60 - a2)), a2 < 30 && (e2 -= 15), t2.avgFrameTimeMs > 16.67 && (e2 -= 1.5 * (t2.avgFrameTimeMs - 16.67)), e2 -= 3 * t2.longTaskCount, e2 -= 4 * t2.jankCount, e2 -= 40 * (t2.totalFrames > 0 ? t2.droppedFrames / t2.totalFrames : 0), typeof this._clsValue == "number" && (this._clsValue > 0.25 ? e2 -= 15 : this._clsValue > 0.1 && (e2 -= 8)), e2 = Math.max(0, Math.min(100, Math.round(e2)));
  for (var r = [[90, "A", "优秀"], [75, "B", "良好"], [60, "C", "一般"], [40, "D", "较差"], [0, "F", "严重性能问题"]], s = 0; s < r.length; s++) if (e2 >= r[s][0]) return { score: e2, grade: r[s][1], label: r[s][2] };
  return { score: e2, grade: "F", label: "严重性能问题" };
};
export {
  a as PerformanceAnalyzer
};
