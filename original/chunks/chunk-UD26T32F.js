import {
  $,
  $n,
  $x,
  AS,
  A_,
  Ar,
  CS,
  Dr,
  F,
  F_,
  G,
  H,
  J,
  Ku,
  Ml,
  Nh,
  Nr,
  Oh,
  Or,
  Os,
  Q,
  Qf,
  St,
  U,
  Uu,
  V,
  W,
  Xu,
  Xv,
  Y,
  Y_,
  Z,
  Zn,
  _,
  _e,
  _p,
  ag,
  ao,
  bg,
  bl,
  bp,
  bs,
  ch,
  ct,
  dp,
  ec,
  et,
  fh,
  fo,
  fp,
  go,
  gu,
  gv,
  hg,
  hh,
  iS,
  it,
  kt,
  le,
  lh,
  mp,
  mv,
  os,
  q,
  r_,
  rc,
  rt,
  sg,
  tt,
  uh,
  uo,
  vp,
  wh,
  wp,
  xg,
  xh,
  xl,
  xr,
  ys,
  yu,
  zM
} from "./chunk-FPRSI2ZI.js";

// output/native-current/vendor-echarts-stock-Dv-ZOSIS.js
var Ae = ["itemStyle", "borderColor"], Ce = ["itemStyle", "borderColor0"], Re = ["itemStyle", "borderColorDoji"], Te = ["itemStyle", "color"], Pe = ["itemStyle", "color0"];
function Le(e2, t2) {
  return t2.get(e2 > 0 ? Te : Pe);
}
function ze(e2, t2) {
  return t2.get(e2 === 0 ? Re : e2 > 0 ? Ae : Ce);
}
var ke = { seriesType: "candlestick", plan: sg(), performRawSeries: !0, reset: function(t2, n2) {
  if (!n2.isSeriesFiltered(t2)) return !t2.pipelineContext.large && { progress: function(t3, n3) {
    for (var i2; (i2 = t3.next()) != null; ) {
      var o2 = n3.getItemModel(i2), a2 = n3.getItemLayout(i2).sign, r2 = o2.getItemStyle();
      r2.fill = Le(a2, o2), r2.stroke = ze(a2, o2) || r2.fill;
      var s2 = n3.ensureUniqueItemVisual(i2, "style");
      H(s2, r2);
    }
  } };
} }, Ze = ["color", "borderColor"], Ve = (function(e2) {
  function t2() {
    var n2 = e2 !== null && e2.apply(this, arguments) || this;
    return n2.type = t2.type, n2;
  }
  return _(t2, e2), t2.prototype.render = function(e3, t3, n2) {
    this.group.removeClipPath(), this._progressiveEls = null, this._updateDrawMode(e3), this._isLargeDraw ? this._renderLarge(e3) : this._renderNormal(e3);
  }, t2.prototype.incrementalPrepareRender = function(e3, t3, n2) {
    this._clear(), this._updateDrawMode(e3);
  }, t2.prototype.incrementalRender = function(e3, t3, n2, i2) {
    this._progressiveEls = [], this._isLargeDraw ? this._incrementalRenderLarge(e3, t3) : this._incrementalRenderNormal(e3, t3);
  }, t2.prototype.eachRendered = function(e3) {
    wh(this._progressiveEls || this.group, e3);
  }, t2.prototype._updateDrawMode = function(e3) {
    var t3 = e3.pipelineContext.large;
    this._isLargeDraw != null && t3 === this._isLargeDraw || (this._isLargeDraw = t3, this._clear());
  }, t2.prototype._renderNormal = function(e3) {
    var t3 = e3.getData(), n2 = this._data, i2 = this.group, s2 = t3.getLayout("isSimpleBox"), l2 = e3.get("clip", !0), d2 = e3.coordinateSystem, h2 = d2.getArea && d2.getArea();
    this._data || i2.removeAll(), t3.diff(n2).add(function(n3) {
      if (t3.hasValue(n3)) {
        var a2 = t3.getItemLayout(n3);
        if (l2 && We(h2, a2)) return;
        var r2 = Ge(a2, n3, !0);
        Xu(r2, { shape: { points: a2.ends } }, e3, n3), Ee(r2, t3, n3, s2), i2.add(r2), t3.setItemGraphicEl(n3, r2);
      }
    }).update(function(o2, d3) {
      var u2 = n2.getItemGraphicEl(d3);
      if (t3.hasValue(o2)) {
        var p2 = t3.getItemLayout(o2);
        l2 && We(h2, p2) ? i2.remove(u2) : (u2 ? (Uu(u2, { shape: { points: p2.ends } }, e3, o2), Ku(u2)) : u2 = Ge(p2), Ee(u2, t3, o2, s2), i2.add(u2), t3.setItemGraphicEl(o2, u2));
      } else i2.remove(u2);
    }).remove(function(e4) {
      var t4 = n2.getItemGraphicEl(e4);
      t4 && i2.remove(t4);
    }).execute(), this._data = t3;
  }, t2.prototype._renderLarge = function(e3) {
    this._clear(), Ye(e3, this.group);
    var t3 = e3.get("clip", !0) ? $x(e3.coordinateSystem, !1, e3) : null;
    t3 ? this.group.setClipPath(t3) : this.group.removeClipPath();
  }, t2.prototype._incrementalRenderNormal = function(e3, t3) {
    for (var n2, i2 = t3.getData(), o2 = i2.getLayout("isSimpleBox"); (n2 = e3.next()) != null; ) {
      var a2 = Ge(i2.getItemLayout(n2));
      Ee(a2, i2, n2, o2), a2.incremental = !0, this.group.add(a2), this._progressiveEls.push(a2);
    }
  }, t2.prototype._incrementalRenderLarge = function(e3, t3) {
    Ye(t3, this.group, this._progressiveEls, !0);
  }, t2.prototype.remove = function(e3) {
    this._clear();
  }, t2.prototype._clear = function() {
    this.group.removeAll(), this._data = null;
  }, t2.type = "candlestick", t2;
})(hg), Be = /* @__PURE__ */ (function() {
  return function() {
  };
})(), Oe = (function(e2) {
  function t2(t3) {
    var n2 = e2.call(this, t3) || this;
    return n2.type = "normalCandlestickBox", n2;
  }
  return _(t2, e2), t2.prototype.getDefaultShape = function() {
    return new Be();
  }, t2.prototype.buildPath = function(e3, t3) {
    var n2 = t3.points;
    this.__simpleBox ? (e3.moveTo(n2[4][0], n2[4][1]), e3.lineTo(n2[6][0], n2[6][1])) : (e3.moveTo(n2[0][0], n2[0][1]), e3.lineTo(n2[1][0], n2[1][1]), e3.lineTo(n2[2][0], n2[2][1]), e3.lineTo(n2[3][0], n2[3][1]), e3.closePath(), e3.moveTo(n2[4][0], n2[4][1]), e3.lineTo(n2[5][0], n2[5][1]), e3.moveTo(n2[6][0], n2[6][1]), e3.lineTo(n2[7][0], n2[7][1]));
  }, t2;
})(os);
function Ge(e2, t2, n2) {
  var i2 = e2.ends;
  return new Oe({ shape: { points: n2 ? Ne(i2, e2) : i2 }, z2: 100 });
}
function We(e2, t2) {
  for (var n2 = !0, i2 = 0; i2 < t2.ends.length; i2++) if (e2.contain(t2.ends[i2][0], t2.ends[i2][1])) {
    n2 = !1;
    break;
  }
  return n2;
}
function Ee(e2, t2, n2, i2) {
  var o2 = t2.getItemModel(n2);
  e2.useStyle(t2.getItemVisual(n2, "style")), e2.style.strokeNoScale = !0, e2.__simpleBox = i2, Ml(e2, o2);
  var a2 = t2.getItemLayout(n2).sign;
  Y(e2.states, function(e3, t3) {
    var n3 = o2.getModel(t3), i3 = Le(a2, n3), r3 = ze(a2, n3) || i3, s2 = e3.style || (e3.style = {});
    i3 && (s2.fill = i3), r3 && (s2.stroke = r3);
  });
  var r2 = o2.getModel("emphasis");
  bl(e2, r2.get("focus"), r2.get("blurScope"), r2.get("disabled"));
}
function Ne(e2, t2) {
  return Z(e2, function(e3) {
    return (e3 = e3.slice())[1] = t2.initBaseline, e3;
  });
}
var He = /* @__PURE__ */ (function() {
  return function() {
  };
})(), Fe = (function(e2) {
  function t2(t3) {
    var n2 = e2.call(this, t3) || this;
    return n2.type = "largeCandlestickBox", n2;
  }
  return _(t2, e2), t2.prototype.getDefaultShape = function() {
    return new He();
  }, t2.prototype.buildPath = function(e3, t3) {
    for (var n2 = t3.points, i2 = 0; i2 < n2.length; ) if (this.__sign === n2[i2++]) {
      var o2 = n2[i2++];
      e3.moveTo(o2, n2[i2++]), e3.lineTo(o2, n2[i2++]);
    } else i2 += 3;
  }, t2;
})(os);
function Ye(e2, t2, n2, i2) {
  var o2 = e2.getData().getLayout("largePoints"), a2 = new Fe({ shape: { points: o2 }, __sign: 1, ignoreCoarsePointer: !0 });
  t2.add(a2);
  var r2 = new Fe({ shape: { points: o2 }, __sign: -1, ignoreCoarsePointer: !0 });
  t2.add(r2);
  var s2 = new Fe({ shape: { points: o2 }, __sign: 0, ignoreCoarsePointer: !0 });
  t2.add(s2), Xe(1, a2, e2), Xe(-1, r2, e2), Xe(0, s2, e2), i2 && (a2.incremental = !0, r2.incremental = !0), n2 && n2.push(a2, r2);
}
function Xe(e2, t2, n2, i2) {
  var o2 = ze(e2, n2) || Le(e2, n2), a2 = n2.getModel("itemStyle").getItemStyle(Ze);
  t2.useStyle(a2), t2.style.fill = null, t2.style.stroke = o2;
}
var Ue = (function(e2) {
  function t2() {
    var n2 = e2 !== null && e2.apply(this, arguments) || this;
    return n2.type = t2.type, n2.defaultValueDimensions = [{ name: "open", defaultTooltip: !0 }, { name: "close", defaultTooltip: !0 }, { name: "lowest", defaultTooltip: !0 }, { name: "highest", defaultTooltip: !0 }], n2;
  }
  return _(t2, e2), t2.prototype.getShadowDim = function() {
    return "open";
  }, t2.prototype.brushSelector = function(e3, t3, n2) {
    var i2 = t3.getItemLayout(e3);
    return i2 && n2.rect(i2.brushRect);
  }, t2.type = "series.candlestick", t2.dependencies = ["xAxis", "yAxis", "grid"], t2.defaultOption = { z: 2, coordinateSystem: "cartesian2d", legendHoverLink: !0, layout: null, clip: !0, itemStyle: { color: "#eb5454", color0: "#47b262", borderColor: "#eb5454", borderColor0: "#47b262", borderColorDoji: null, borderWidth: 1 }, emphasis: { itemStyle: { borderWidth: 2 } }, barMaxWidth: null, barMinWidth: null, barWidth: null, large: !0, largeThreshold: 600, progressive: 3e3, progressiveThreshold: 1e4, progressiveChunkMode: "mod", animationEasing: "linear", animationDuration: 300 }, t2;
})(Qf);
function je(e2) {
  e2 && J(e2.series) && Y(e2.series, function(e3) {
    rt(e3) && e3.type === "k" && (e3.type = "candlestick");
  });
}
U(Ue, AS, !0);
var Ke = { seriesType: "candlestick", plan: sg(), reset: function(e2) {
  var t2 = e2.coordinateSystem, n2 = e2.getData(), i2 = (function(e3, t3) {
    var n3, i3 = e3.getBaseAxis(), o3 = i3.type === "category" ? i3.getBandWidth() : (n3 = i3.getExtent(), Math.abs(n3[1] - n3[0]) / t3.count()), a3 = Ar(ct(e3.get("barMaxWidth"), o3), o3), r3 = Ar(ct(e3.get("barMinWidth"), 1), o3), s3 = e3.get("barWidth");
    return s3 != null ? Ar(s3, o3) : Math.max(Math.min(o3 / 2, a3), r3);
  })(e2, n2), o2 = ["x", "y"], a2 = n2.getDimensionIndex(n2.mapDimension(o2[0])), r2 = Z(n2.mapDimensionsAll(o2[1]), n2.getDimensionIndex, n2), s2 = r2[0], l2 = r2[1], d2 = r2[2], h2 = r2[3];
  if (n2.setLayout({ candleWidth: i2, isSimpleBox: i2 <= 1.3 }), !(a2 < 0 || r2.length < 4)) return { progress: e2.pipelineContext.large ? function(n3, i3) {
    for (var o3, r3, u2 = r_(4 * n3.count), p2 = 0, c2 = [], g2 = [], f2 = i3.getStore(), m2 = !!e2.get(["itemStyle", "borderColorDoji"]); (r3 = n3.next()) != null; ) {
      var y2 = f2.get(a2, r3), v2 = f2.get(s2, r3), x2 = f2.get(l2, r3), S2 = f2.get(d2, r3), M2 = f2.get(h2, r3);
      isNaN(y2) || isNaN(S2) || isNaN(M2) ? (u2[p2++] = NaN, p2 += 3) : (u2[p2++] = qe(f2, r3, v2, x2, l2, m2), c2[0] = y2, c2[1] = S2, o3 = t2.dataToPoint(c2, null, g2), u2[p2++] = o3 ? o3[0] : NaN, u2[p2++] = o3 ? o3[1] : NaN, c2[1] = M2, o3 = t2.dataToPoint(c2, null, g2), u2[p2++] = o3 ? o3[1] : NaN);
    }
    i3.setLayout("largePoints", u2);
  } : function(e3, n3) {
    for (var o3, r3 = n3.getStore(); (o3 = e3.next()) != null; ) {
      var u2 = r3.get(a2, o3), p2 = r3.get(s2, o3), c2 = r3.get(l2, o3), g2 = r3.get(d2, o3), f2 = r3.get(h2, o3), m2 = Math.min(p2, c2), y2 = Math.max(p2, c2), v2 = b2(m2, u2), _2 = b2(y2, u2), S2 = b2(g2, u2), M2 = b2(f2, u2), w2 = [];
      D2(w2, _2, 0), D2(w2, v2, 1), w2.push(C2(M2), C2(_2), C2(S2), C2(v2));
      var I2 = !!n3.getItemModel(o3).get(["itemStyle", "borderColorDoji"]);
      n3.setItemLayout(o3, { sign: qe(r3, o3, p2, c2, l2, I2), initBaseline: p2 > c2 ? _2[1] : v2[1], ends: w2, brushRect: A2(g2, f2, u2) });
    }
    function b2(e4, n4) {
      var i3 = [];
      return i3[0] = n4, i3[1] = e4, isNaN(n4) || isNaN(e4) ? [NaN, NaN] : t2.dataToPoint(i3);
    }
    function D2(e4, t3, n4) {
      var o4 = t3.slice(), a3 = t3.slice();
      o4[0] = lh(o4[0] + i2 / 2, 1, !1), a3[0] = lh(a3[0] - i2 / 2, 1, !0), n4 ? e4.push(o4, a3) : e4.push(a3, o4);
    }
    function A2(e4, t3, n4) {
      var o4 = b2(e4, n4), a3 = b2(t3, n4);
      return o4[0] -= i2 / 2, a3[0] -= i2 / 2, { x: o4[0], y: o4[1], width: i2, height: a3[1] - o4[1] };
    }
    function C2(e4) {
      return e4[0] = lh(e4[0], 1), e4;
    }
  } };
} };
function qe(e2, t2, n2, i2, o2, a2) {
  return n2 > i2 ? -1 : n2 < i2 ? 1 : a2 ? 0 : t2 > 0 ? e2.get(o2, t2 - 1) <= i2 ? 1 : -1 : 1;
}
function Je(e2) {
  e2.registerChartView(Ve), e2.registerSeriesModel(Ue), e2.registerPreprocessor(je), e2.registerVisual(ke), e2.registerLayout(Ke);
}
var Qe = ["x", "y", "radius", "angle", "single"], $e = ["cartesian2d", "polar", "singleAxis"];
function et2(e2) {
  return e2 + "Axis";
}
function tt2(e2, t2) {
  var n2, i2 = St(), o2 = [], a2 = St();
  e2.eachComponent({ mainType: "dataZoom", query: t2 }, function(e3) {
    a2.get(e3.uid) || s2(e3);
  });
  do
    n2 = !1, e2.eachComponent("dataZoom", r2);
  while (n2);
  function r2(e3) {
    !a2.get(e3.uid) && (function(e4) {
      var t3 = !1;
      return e4.eachTargetAxis(function(e5, n3) {
        var o3 = i2.get(e5);
        o3 && o3[n3] && (t3 = !0);
      }), t3;
    })(e3) && (s2(e3), n2 = !0);
  }
  function s2(e3) {
    a2.set(e3.uid, !0), o2.push(e3), e3.eachTargetAxis(function(e4, t3) {
      (i2.get(e4) || i2.set(e4, []))[t3] = !0;
    });
  }
  return o2;
}
function nt(e2) {
  var t2 = e2.ecModel, n2 = { infoList: [], infoMap: St() };
  return e2.eachTargetAxis(function(e3, i2) {
    var o2 = t2.getComponent(et2(e3), i2);
    if (o2) {
      var a2 = o2.getCoordSysModel();
      if (a2) {
        var r2 = a2.uid, s2 = n2.infoMap.get(r2);
        s2 || (s2 = { model: a2, axisModels: [] }, n2.infoList.push(s2), n2.infoMap.set(r2, s2)), s2.axisModels.push(o2);
      }
    }
  }), n2;
}
var it2 = (function() {
  function e2() {
    this.indexList = [], this.indexMap = [];
  }
  return e2.prototype.add = function(e3) {
    this.indexMap[e3] || (this.indexList.push(e3), this.indexMap[e3] = !0);
  }, e2;
})(), ot = (function(e2) {
  function t2() {
    var n2 = e2 !== null && e2.apply(this, arguments) || this;
    return n2.type = t2.type, n2._autoThrottle = !0, n2._noTarget = !0, n2._rangePropMode = ["percent", "percent"], n2;
  }
  return _(t2, e2), t2.prototype.init = function(e3, t3, n2) {
    var i2 = at(e3);
    this.settledOption = i2, this.mergeDefaultAndTheme(e3, n2), this._doInit(i2);
  }, t2.prototype.mergeOption = function(e3) {
    var t3 = at(e3);
    V(this.option, e3, !0), V(this.settledOption, t3, !0), this._doInit(t3);
  }, t2.prototype._doInit = function(e3) {
    var t3 = this.option;
    this._setDefaultThrottle(e3), this._updateRangeUse(e3);
    var n2 = this.settledOption;
    Y([["start", "startValue"], ["end", "endValue"]], function(e4, i2) {
      this._rangePropMode[i2] === "value" && (t3[e4[0]] = n2[e4[0]] = null);
    }, this), this._resetTarget();
  }, t2.prototype._resetTarget = function() {
    var e3 = this.get("orient", !0), t3 = this._targetAxisInfoMap = St();
    this._fillSpecifiedTargetAxis(t3) ? this._orient = e3 || this._makeAutoOrientByTargetAxis() : (this._orient = e3 || "horizontal", this._fillAutoTargetAxisByOrient(t3, this._orient)), this._noTarget = !0, t3.each(function(e4) {
      e4.indexList.length && (this._noTarget = !1);
    }, this);
  }, t2.prototype._fillSpecifiedTargetAxis = function(e3) {
    var t3 = !1;
    return Y(Qe, function(n2) {
      var i2 = this.getReferringComponents(et2(n2), go);
      if (i2.specified) {
        t3 = !0;
        var o2 = new it2();
        Y(i2.models, function(e4) {
          o2.add(e4.componentIndex);
        }), e3.set(n2, o2);
      }
    }, this), t3;
  }, t2.prototype._fillAutoTargetAxisByOrient = function(e3, t3) {
    var n2 = this.ecModel, i2 = !0;
    if (i2) {
      var o2 = t3 === "vertical" ? "y" : "x";
      a2(n2.findComponents({ mainType: o2 + "Axis" }), o2);
    }
    i2 && a2(n2.findComponents({ mainType: "singleAxis", filter: function(e4) {
      return e4.get("orient", !0) === t3;
    } }), "single");
    function a2(t4, n3) {
      var o3 = t4[0];
      if (o3) {
        var a3 = new it2();
        if (a3.add(o3.componentIndex), e3.set(n3, a3), i2 = !1, n3 === "x" || n3 === "y") {
          var r2 = o3.getReferringComponents("grid", fo).models[0];
          r2 && Y(t4, function(e4) {
            o3.componentIndex !== e4.componentIndex && r2 === e4.getReferringComponents("grid", fo).models[0] && a3.add(e4.componentIndex);
          });
        }
      }
    }
    i2 && Y(Qe, function(t4) {
      if (i2) {
        var o3 = n2.findComponents({ mainType: et2(t4), filter: function(e4) {
          return e4.get("type", !0) === "category";
        } });
        if (o3[0]) {
          var a3 = new it2();
          a3.add(o3[0].componentIndex), e3.set(t4, a3), i2 = !1;
        }
      }
    }, this);
  }, t2.prototype._makeAutoOrientByTargetAxis = function() {
    var e3;
    return this.eachTargetAxis(function(t3) {
      !e3 && (e3 = t3);
    }, this), e3 === "y" ? "vertical" : "horizontal";
  }, t2.prototype._setDefaultThrottle = function(e3) {
    if (e3.hasOwnProperty("throttle") && (this._autoThrottle = !1), this._autoThrottle) {
      var t3 = this.ecModel.option;
      this.option.throttle = t3.animation && t3.animationDurationUpdate > 0 ? 100 : 20;
    }
  }, t2.prototype._updateRangeUse = function(e3) {
    var t3 = this._rangePropMode, n2 = this.get("rangeMode");
    Y([["start", "startValue"], ["end", "endValue"]], function(i2, o2) {
      var a2 = e3[i2[0]] != null, r2 = e3[i2[1]] != null;
      a2 && !r2 ? t3[o2] = "percent" : !a2 && r2 ? t3[o2] = "value" : n2 ? t3[o2] = n2[o2] : a2 && (t3[o2] = "percent");
    });
  }, t2.prototype.noTarget = function() {
    return this._noTarget;
  }, t2.prototype.getFirstTargetAxisModel = function() {
    var e3;
    return this.eachTargetAxis(function(t3, n2) {
      e3 == null && (e3 = this.ecModel.getComponent(et2(t3), n2));
    }, this), e3;
  }, t2.prototype.eachTargetAxis = function(e3, t3) {
    this._targetAxisInfoMap.each(function(n2, i2) {
      Y(n2.indexList, function(n3) {
        e3.call(t3, i2, n3);
      });
    });
  }, t2.prototype.getAxisProxy = function(e3, t3) {
    var n2 = this.getAxisModel(e3, t3);
    if (n2) return n2.__dzAxisProxy;
  }, t2.prototype.getAxisModel = function(e3, t3) {
    var n2 = this._targetAxisInfoMap.get(e3);
    if (n2 && n2.indexMap[t3]) return this.ecModel.getComponent(et2(e3), t3);
  }, t2.prototype.setRawRange = function(e3) {
    var t3 = this.option, n2 = this.settledOption;
    Y([["start", "startValue"], ["end", "endValue"]], function(i2) {
      e3[i2[0]] == null && e3[i2[1]] == null || (t3[i2[0]] = n2[i2[0]] = e3[i2[0]], t3[i2[1]] = n2[i2[1]] = e3[i2[1]]);
    }, this), this._updateRangeUse(e3);
  }, t2.prototype.setCalculatedRange = function(e3) {
    var t3 = this.option;
    Y(["start", "startValue", "end", "endValue"], function(n2) {
      t3[n2] = e3[n2];
    });
  }, t2.prototype.getPercentRange = function() {
    var e3 = this.findRepresentativeAxisProxy();
    if (e3) return e3.getDataPercentWindow();
  }, t2.prototype.getValueRange = function(e3, t3) {
    if (e3 != null || t3 != null) return this.getAxisProxy(e3, t3).getDataValueWindow();
    var n2 = this.findRepresentativeAxisProxy();
    return n2 ? n2.getDataValueWindow() : void 0;
  }, t2.prototype.findRepresentativeAxisProxy = function(e3) {
    if (e3) return e3.__dzAxisProxy;
    for (var t3, n2 = this._targetAxisInfoMap.keys(), i2 = 0; i2 < n2.length; i2++) for (var o2 = n2[i2], a2 = this._targetAxisInfoMap.get(o2), r2 = 0; r2 < a2.indexList.length; r2++) {
      var s2 = this.getAxisProxy(o2, a2.indexList[r2]);
      if (s2.hostedBy(this)) return s2;
      t3 || (t3 = s2);
    }
    return t3;
  }, t2.prototype.getRangePropMode = function() {
    return this._rangePropMode.slice();
  }, t2.prototype.getOrient = function() {
    return this._orient;
  }, t2.type = "dataZoom", t2.dependencies = ["xAxis", "yAxis", "radiusAxis", "angleAxis", "singleAxis", "series", "toolbox"], t2.defaultOption = { z: 4, filterMode: "filter", start: 0, end: 100 }, t2;
})(bp);
function at(e2) {
  var t2 = {};
  return Y(["start", "end", "startValue", "endValue", "throttle"], function(n2) {
    e2.hasOwnProperty(n2) && (t2[n2] = e2[n2]);
  }), t2;
}
var rt2 = (function(e2) {
  function t2() {
    var n2 = e2 !== null && e2.apply(this, arguments) || this;
    return n2.type = t2.type, n2;
  }
  return _(t2, e2), t2.prototype.render = function(e3, t3, n2, i2) {
    this.dataZoomModel = e3, this.ecModel = t3, this.api = n2;
  }, t2.type = "dataZoom", t2;
})(ag), st = Y, lt = Or, dt = (function() {
  function e2(e3, t2, n2, i2) {
    this._dimName = e3, this._axisIndex = t2, this.ecModel = i2, this._dataZoomModel = n2;
  }
  return e2.prototype.hostedBy = function(e3) {
    return this._dataZoomModel === e3;
  }, e2.prototype.getDataValueWindow = function() {
    return this._valueWindow.slice();
  }, e2.prototype.getDataPercentWindow = function() {
    return this._percentWindow.slice();
  }, e2.prototype.getTargetSeriesModels = function() {
    var e3 = [];
    return this.ecModel.eachSeries(function(t2) {
      if ((function(e4) {
        var t3 = e4.get("coordinateSystem");
        return G($e, t3) >= 0;
      })(t2)) {
        var n2 = et2(this._dimName), i2 = t2.getReferringComponents(n2, fo).models[0];
        i2 && this._axisIndex === i2.componentIndex && e3.push(t2);
      }
    }, this), e3;
  }, e2.prototype.getAxisModel = function() {
    return this.ecModel.getComponent(this._dimName + "Axis", this._axisIndex);
  }, e2.prototype.getMinMaxSpan = function() {
    return F(this._minMaxSpan);
  }, e2.prototype.calculateDataWindow = function(e3) {
    var t2, n2 = this._dataExtent, i2 = this.getAxisModel().axis.scale, o2 = this._dataZoomModel.getRangePropMode(), a2 = [0, 100], r2 = [], s2 = [];
    st(["start", "end"], function(l3, d3) {
      var h2 = e3[l3], u2 = e3[l3 + "Value"];
      o2[d3] === "percent" ? (h2 == null && (h2 = a2[d3]), u2 = i2.parse(Dr(h2, a2, n2))) : (t2 = !0, u2 = u2 == null ? n2[d3] : i2.parse(u2), h2 = Dr(u2, n2, a2)), s2[d3] = u2 == null || isNaN(u2) ? n2[d3] : u2, r2[d3] = h2 == null || isNaN(h2) ? a2[d3] : h2;
    }), lt(s2), lt(r2);
    var l2 = this._minMaxSpan;
    function d2(e4, t3, n3, o3, a3) {
      var r3 = a3 ? "Span" : "ValueSpan";
      CS(0, e4, n3, "all", l2["min" + r3], l2["max" + r3]);
      for (var s3 = 0; s3 < 2; s3++) t3[s3] = Dr(e4[s3], n3, o3, !0), a3 && (t3[s3] = i2.parse(t3[s3]));
    }
    return t2 ? d2(s2, r2, n2, a2, !1) : d2(r2, s2, a2, n2, !0), { valueWindow: s2, percentWindow: r2 };
  }, e2.prototype.reset = function(e3) {
    if (e3 === this._dataZoomModel) {
      var t2 = this.getTargetSeriesModels();
      this._dataExtent = (function(e4, t3, n3) {
        var i2 = [1 / 0, -1 / 0];
        st(n3, function(e5) {
          F_(i2, e5.getData(), t3);
        });
        var o2 = e4.getAxisModel(), a2 = A_(o2.axis.scale, o2, i2).calculate();
        return [a2.min, a2.max];
      })(this, this._dimName, t2), this._updateMinMaxSpan();
      var n2 = this.calculateDataWindow(e3.settledOption);
      this._valueWindow = n2.valueWindow, this._percentWindow = n2.percentWindow, this._setAxisModel();
    }
  }, e2.prototype.filterData = function(e3, t2) {
    if (e3 === this._dataZoomModel) {
      var n2 = this._dimName, i2 = this.getTargetSeriesModels(), o2 = e3.get("filterMode"), a2 = this._valueWindow;
      o2 !== "none" && st(i2, function(e4) {
        var t3 = e4.getData(), i3 = t3.mapDimensionsAll(n2);
        if (i3.length) {
          if (o2 === "weakFilter") {
            var r2 = t3.getStore(), s2 = Z(i3, function(e5) {
              return t3.getDimensionIndex(e5);
            }, t3);
            t3.filterSelf(function(e5) {
              for (var t4, n3, o3, l2 = 0; l2 < i3.length; l2++) {
                var d2 = r2.get(s2[l2], e5), h2 = !isNaN(d2), u2 = d2 < a2[0], p2 = d2 > a2[1];
                if (h2 && !u2 && !p2) return !0;
                h2 && (o3 = !0), u2 && (t4 = !0), p2 && (n3 = !0);
              }
              return o3 && t4 && n3;
            });
          } else st(i3, function(n3) {
            if (o2 === "empty") e4.setData(t3 = t3.map(n3, function(e5) {
              return (function(e6) {
                return e6 >= a2[0] && e6 <= a2[1];
              })(e5) ? e5 : NaN;
            }));
            else {
              var i4 = {};
              i4[n3] = a2, t3.selectRange(i4);
            }
          });
          st(i3, function(e5) {
            t3.setApproximateExtent(a2, e5);
          });
        }
      });
    }
  }, e2.prototype._updateMinMaxSpan = function() {
    var e3 = this._minMaxSpan = {}, t2 = this._dataZoomModel, n2 = this._dataExtent;
    st(["min", "max"], function(i2) {
      var o2 = t2.get(i2 + "Span"), a2 = t2.get(i2 + "ValueSpan");
      a2 != null && (a2 = this.getAxisModel().axis.scale.parse(a2)), a2 != null ? o2 = Dr(n2[0] + a2, n2, [0, 100], !0) : o2 != null && (a2 = Dr(o2, [0, 100], n2, !0) - n2[0]), e3[i2 + "Span"] = o2, e3[i2 + "ValueSpan"] = a2;
    }, this);
  }, e2.prototype._setAxisModel = function() {
    var e3 = this.getAxisModel(), t2 = this._percentWindow, n2 = this._valueWindow;
    if (t2) {
      var i2 = Nr(n2, [0, 500]);
      i2 = Math.min(i2, 20);
      var o2 = e3.axis.scale.rawExtentInfo;
      t2[0] !== 0 && o2.setDeterminedMinMax("min", +n2[0].toFixed(i2)), t2[1] !== 100 && o2.setDeterminedMinMax("max", +n2[1].toFixed(i2)), o2.freeze();
    }
  }, e2;
})(), ht = { getTargetSeries: function(e2) {
  function t2(t3) {
    e2.eachComponent("dataZoom", function(n3) {
      n3.eachTargetAxis(function(i3, o2) {
        var a2 = e2.getComponent(et2(i3), o2);
        t3(i3, o2, a2, n3);
      });
    });
  }
  t2(function(e3, t3, n3, i3) {
    n3.__dzAxisProxy = null;
  });
  var n2 = [];
  t2(function(t3, i3, o2, a2) {
    o2.__dzAxisProxy || (o2.__dzAxisProxy = new dt(t3, i3, a2, e2), n2.push(o2.__dzAxisProxy));
  });
  var i2 = St();
  return Y(n2, function(e3) {
    Y(e3.getTargetSeriesModels(), function(e4) {
      i2.set(e4.uid, e4);
    });
  }), i2;
}, overallReset: function(e2, t2) {
  e2.eachComponent("dataZoom", function(e3) {
    e3.eachTargetAxis(function(t3, n2) {
      e3.getAxisProxy(t3, n2).reset(e3);
    }), e3.eachTargetAxis(function(n2, i2) {
      e3.getAxisProxy(n2, i2).filterData(e3, t2);
    });
  }), e2.eachComponent("dataZoom", function(e3) {
    var t3 = e3.findRepresentativeAxisProxy();
    if (t3) {
      var n2 = t3.getDataPercentWindow(), i2 = t3.getDataValueWindow();
      e3.setCalculatedRange({ start: n2[0], end: n2[1], startValue: i2[0], endValue: i2[1] });
    }
  });
} }, ut = !1;
function pt(e2) {
  ut || (ut = !0, e2.registerProcessor(e2.PRIORITY.PROCESSOR.FILTER, ht), (function(e3) {
    e3.registerAction("dataZoom", function(e4, t2) {
      var n2 = tt2(t2, e4);
      Y(n2, function(t3) {
        t3.setRawRange({ start: e4.start, end: e4.end, startValue: e4.startValue, endValue: e4.endValue });
      });
    });
  })(e2), e2.registerSubTypeDefaulter("dataZoom", function() {
    return "slider";
  }));
}
var ct2 = (function(e2) {
  function t2() {
    var n2 = e2 !== null && e2.apply(this, arguments) || this;
    return n2.type = t2.type, n2.layoutMode = { type: "box", ignoreSize: !0 }, n2;
  }
  return _(t2, e2), t2.prototype.init = function(e3, t3, n2) {
    this.mergeDefaultAndTheme(e3, n2), e3.selected = e3.selected || {}, this._updateSelector(e3);
  }, t2.prototype.mergeOption = function(t3, n2) {
    e2.prototype.mergeOption.call(this, t3, n2), this._updateSelector(t3);
  }, t2.prototype._updateSelector = function(e3) {
    var t3 = e3.selector, n2 = this.ecModel;
    t3 === !0 && (t3 = e3.selector = ["all", "inverse"]), J(t3) && Y(t3, function(e4, i2) {
      et(e4) && (e4 = { type: e4 }), t3[i2] = V(e4, (function(e5, t4) {
        return t4 === "all" ? { type: "all", title: e5.getLocaleModel().get(["legend", "selector", "all"]) } : t4 === "inverse" ? { type: "inverse", title: e5.getLocaleModel().get(["legend", "selector", "inverse"]) } : void 0;
      })(n2, e4.type));
    });
  }, t2.prototype.optionUpdated = function() {
    this._updateData(this.ecModel);
    var e3 = this._data;
    if (e3[0] && this.get("selectedMode") === "single") {
      for (var t3 = !1, n2 = 0; n2 < e3.length; n2++) {
        var i2 = e3[n2].get("name");
        if (this.isSelected(i2)) {
          this.select(i2), t3 = !0;
          break;
        }
      }
      !t3 && this.select(e3[0].get("name"));
    }
  }, t2.prototype._updateData = function(e3) {
    var t3 = [], n2 = [];
    e3.eachRawSeries(function(i3) {
      var o3, a3 = i3.name;
      if (n2.push(a3), i3.legendVisualProvider) {
        var r2 = i3.legendVisualProvider.getAllNames();
        e3.isSeriesFiltered(i3) || (n2 = n2.concat(r2)), r2.length ? t3 = t3.concat(r2) : o3 = !0;
      } else o3 = !0;
      o3 && ao(i3) && t3.push(i3.name);
    }), this._availableNames = n2;
    var i2 = this.get("data") || t3, o2 = St(), a2 = Z(i2, function(e4) {
      return (et(e4) || it(e4)) && (e4 = { name: e4 }), o2.get(e4.name) ? null : (o2.set(e4.name, !0), new ec(e4, this, this.ecModel));
    }, this);
    this._data = q(a2, function(e4) {
      return !!e4;
    });
  }, t2.prototype.getData = function() {
    return this._data;
  }, t2.prototype.select = function(e3) {
    var t3 = this.option.selected;
    if (this.get("selectedMode") === "single") {
      var n2 = this._data;
      Y(n2, function(e4) {
        t3[e4.get("name")] = !1;
      });
    }
    t3[e3] = !0;
  }, t2.prototype.unSelect = function(e3) {
    this.get("selectedMode") !== "single" && (this.option.selected[e3] = !1);
  }, t2.prototype.toggleSelected = function(e3) {
    var t3 = this.option.selected;
    t3.hasOwnProperty(e3) || (t3[e3] = !0), this[t3[e3] ? "unSelect" : "select"](e3);
  }, t2.prototype.allSelect = function() {
    var e3 = this._data, t3 = this.option.selected;
    Y(e3, function(e4) {
      t3[e4.get("name", !0)] = !0;
    });
  }, t2.prototype.inverseSelect = function() {
    var e3 = this._data, t3 = this.option.selected;
    Y(e3, function(e4) {
      var n2 = e4.get("name", !0);
      t3.hasOwnProperty(n2) || (t3[n2] = !0), t3[n2] = !t3[n2];
    });
  }, t2.prototype.isSelected = function(e3) {
    var t3 = this.option.selected;
    return !(t3.hasOwnProperty(e3) && !t3[e3]) && G(this._availableNames, e3) >= 0;
  }, t2.prototype.getOrient = function() {
    return this.get("orient") === "vertical" ? { index: 1, name: "vertical" } : { index: 0, name: "horizontal" };
  }, t2.type = "legend.plain", t2.dependencies = ["series"], t2.defaultOption = { z: 4, show: !0, orient: "horizontal", left: "center", bottom: wp.size.m, align: "auto", backgroundColor: wp.color.transparent, borderColor: wp.color.border, borderRadius: 0, borderWidth: 0, padding: 5, itemGap: 8, itemWidth: 25, itemHeight: 14, symbolRotate: "inherit", symbolKeepAspect: !0, inactiveColor: wp.color.disabled, inactiveBorderColor: wp.color.disabled, inactiveBorderWidth: "auto", itemStyle: { color: "inherit", opacity: "inherit", borderColor: "inherit", borderWidth: "auto", borderCap: "inherit", borderJoin: "inherit", borderDashOffset: "inherit", borderMiterLimit: "inherit" }, lineStyle: { width: "auto", color: "inherit", inactiveColor: wp.color.disabled, inactiveWidth: 2, opacity: "inherit", type: "inherit", cap: "inherit", join: "inherit", dashOffset: "inherit", miterLimit: "inherit" }, textStyle: { color: wp.color.secondary }, selectedMode: !0, selector: !1, selectorLabel: { show: !0, borderRadius: 10, padding: [3, 5, 3, 5], fontSize: 12, fontFamily: "sans-serif", color: wp.color.tertiary, borderWidth: 1, borderColor: wp.color.border }, emphasis: { selectorLabel: { show: !0, color: wp.color.quaternary } }, selectorPosition: "auto", selectorItemGap: 7, selectorButtonGap: 10, tooltip: { show: !1 }, triggerEvent: !1 }, t2;
})(bp), gt = Q, ft = Y, mt = xr, yt = (function(t2) {
  function i2() {
    var e2 = t2 !== null && t2.apply(this, arguments) || this;
    return e2.type = i2.type, e2.newlineDisabled = !1, e2;
  }
  return _(i2, t2), i2.prototype.init = function() {
    this.group.add(this._contentGroup = new mt()), this.group.add(this._selectorGroup = new mt()), this._isFirstRender = !0;
  }, i2.prototype.getContentGroup = function() {
    return this._contentGroup;
  }, i2.prototype.getSelectorGroup = function() {
    return this._selectorGroup;
  }, i2.prototype.render = function(e2, t3, n2) {
    var i3 = this._isFirstRender;
    if (this._isFirstRender = !1, this.resetInner(), e2.get("show", !0)) {
      var o2 = e2.get("align"), a2 = e2.get("orient");
      o2 && o2 !== "auto" || (o2 = e2.get("left") === "right" && a2 === "vertical" ? "right" : "left");
      var r2 = e2.get("selector", !0), s2 = e2.get("selectorPosition", !0);
      !r2 || s2 && s2 !== "auto" || (s2 = a2 === "horizontal" ? "end" : "start"), this.renderInner(o2, e2, t3, n2, r2, a2, s2);
      var l2 = vp(e2, n2).refContainer, d2 = e2.getBoxLayoutParams(), h2 = e2.get("padding"), u2 = fp(d2, l2, h2), p2 = this.layoutInner(e2, o2, u2, i3, r2, s2), c2 = fp(W({ width: p2.width, height: p2.height }, d2), l2, h2);
      this.group.x = c2.x - p2.x, this.group.y = c2.y - p2.y, this.group.markRedraw(), this.group.add(this._backgroundEl = zM(p2, e2));
    }
  }, i2.prototype.resetInner = function() {
    this.getContentGroup().removeAll(), this._backgroundEl && this.group.remove(this._backgroundEl), this.getSelectorGroup().removeAll();
  }, i2.prototype.renderInner = function(t3, n2, i3, o2, a2, r2, s2) {
    var l2 = this.getContentGroup(), d2 = St(), h2 = n2.get("selectedMode"), u2 = n2.get("triggerEvent"), p2 = [];
    i3.eachRawSeries(function(e2) {
      !e2.get("legendHoverLink") && p2.push(e2.id);
    }), ft(n2.getData(), function(a3, r3) {
      var s3 = this, c2 = a3.get("name");
      if (!this.newlineDisabled && (c2 === "" || c2 === `
`)) {
        var g2 = new mt();
        return g2.newline = !0, void l2.add(g2);
      }
      var f2 = i3.getSeriesByName(c2)[0];
      if (!d2.get(c2)) if (f2) {
        var m2 = f2.getData(), y2 = m2.getVisual("legendLineStyle") || {}, v2 = m2.getVisual("legendIcon"), x2 = m2.getVisual("style"), _2 = this._createItem(f2, c2, r3, a3, n2, t3, y2, x2, v2, h2, o2);
        _2.on("click", gt(vt, c2, null, o2, p2)).on("mouseover", gt(_t, f2.name, null, o2, p2)).on("mouseout", gt(St2, f2.name, null, o2, p2)), i3.ssr && _2.eachChild(function(e2) {
          var t4 = Os(e2);
          t4.seriesIndex = f2.seriesIndex, t4.dataIndex = r3, t4.ssrType = "legend";
        }), u2 && _2.eachChild(function(e2) {
          s3.packEventData(e2, n2, f2, r3, c2);
        }), d2.set(c2, !0);
      } else i3.eachRawSeries(function(s4) {
        var l3 = this;
        if (!d2.get(c2) && s4.legendVisualProvider) {
          var g3 = s4.legendVisualProvider;
          if (!g3.containName(c2)) return;
          var f3 = g3.indexOfName(c2), m3 = g3.getItemVisual(f3, "style"), y3 = g3.getItemVisual(f3, "legendIcon"), v3 = Zn(m3.fill);
          v3 && v3[3] === 0 && (v3[3] = 0.2, m3 = H(H({}, m3), { fill: $n(v3, "rgba") }));
          var x3 = this._createItem(s4, c2, r3, a3, n2, t3, {}, m3, y3, h2, o2);
          x3.on("click", gt(vt, null, c2, o2, p2)).on("mouseover", gt(_t, null, c2, o2, p2)).on("mouseout", gt(St2, null, c2, o2, p2)), i3.ssr && x3.eachChild(function(e2) {
            var t4 = Os(e2);
            t4.seriesIndex = s4.seriesIndex, t4.dataIndex = r3, t4.ssrType = "legend";
          }), u2 && x3.eachChild(function(e2) {
            l3.packEventData(e2, n2, s4, r3, c2);
          }), d2.set(c2, !0);
        }
      }, this);
    }, this), a2 && this._createSelector(a2, n2, o2, r2, s2);
  }, i2.prototype.packEventData = function(e2, t3, n2, i3, o2) {
    var a2 = { componentType: "legend", componentIndex: t3.componentIndex, dataIndex: i3, value: o2, seriesIndex: n2.seriesIndex };
    Os(e2).eventData = a2;
  }, i2.prototype._createSelector = function(e2, t3, n2, i3, o2) {
    var a2 = this.getSelectorGroup();
    ft(e2, function(e3) {
      var i4 = e3.type, o3 = new bs({ style: { x: 0, y: 0, align: "center", verticalAlign: "middle" }, onclick: function() {
        n2.dispatchAction({ type: i4 === "all" ? "legendAllSelect" : "legendInverseSelect", legendId: t3.id });
      } });
      a2.add(o3);
      var r2 = t3.getModel("selectorLabel"), s2 = t3.getModel(["emphasis", "selectorLabel"]);
      Oh(o3, { normal: r2, emphasis: s2 }, { defaultText: e3.title }), xl(o3);
    });
  }, i2.prototype._createItem = function(e2, t3, n2, i3, o2, a2, r2, s2, l2, d2, h2) {
    var u2 = e2.visualDrawType, p2 = o2.get("itemWidth"), c2 = o2.get("itemHeight"), g2 = o2.isSelected(t3), f2 = i3.get("symbolRotate"), m2 = i3.get("symbolKeepAspect"), y2 = i3.get("icon"), v2 = (function(e3, t4, n3, i4, o3, a3, r3) {
      function s3(e4, t5) {
        e4.lineWidth === "auto" && (e4.lineWidth = t5.lineWidth > 0 ? 2 : 0), ft(e4, function(n4, i5) {
          e4[i5] === "inherit" && (e4[i5] = t5[i5]);
        });
      }
      var l3 = t4.getModel("itemStyle"), d3 = l3.getItemStyle(), h3 = e3.lastIndexOf("empty", 0) === 0 ? "fill" : "stroke", u3 = l3.getShallow("decal");
      d3.decal = u3 && u3 !== "inherit" ? Xv(u3, r3) : i4.decal, d3.fill === "inherit" && (d3.fill = i4[o3]), d3.stroke === "inherit" && (d3.stroke = i4[h3]), d3.opacity === "inherit" && (d3.opacity = (o3 === "fill" ? i4 : n3).opacity), s3(d3, i4);
      var p3 = t4.getModel("lineStyle"), c3 = p3.getLineStyle();
      if (s3(c3, n3), d3.fill === "auto" && (d3.fill = i4.fill), d3.stroke === "auto" && (d3.stroke = i4.fill), c3.stroke === "auto" && (c3.stroke = i4.fill), !a3) {
        var g3 = t4.get("inactiveBorderWidth"), f3 = d3[h3];
        d3.lineWidth = g3 === "auto" ? i4.lineWidth > 0 && f3 ? 2 : 0 : d3.lineWidth, d3.fill = t4.get("inactiveColor"), d3.stroke = t4.get("inactiveBorderColor"), c3.stroke = p3.get("inactiveColor"), c3.lineWidth = p3.get("inactiveWidth");
      }
      return { itemStyle: d3, lineStyle: c3 };
    })(l2 = y2 || l2 || "roundRect", i3, r2, s2, u2, g2, h2), x2 = new mt(), _2 = i3.getModel("textStyle");
    if (!tt(e2.getLegendIcon) || y2 && y2 !== "inherit") {
      var S2 = y2 === "inherit" && e2.getData().getVisual("symbol") ? f2 === "inherit" ? e2.getData().getVisual("symbolRotate") : f2 : 0;
      x2.add((function(e3) {
        var t4 = e3.icon || "roundRect", n3 = mv(t4, 0, 0, e3.itemWidth, e3.itemHeight, e3.itemStyle.fill, e3.symbolKeepAspect);
        return n3.setStyle(e3.itemStyle), n3.rotation = (e3.iconRotate || 0) * Math.PI / 180, n3.setOrigin([e3.itemWidth / 2, e3.itemHeight / 2]), t4.indexOf("empty") > -1 && (n3.style.stroke = n3.style.fill, n3.style.fill = wp.color.neutral00, n3.style.lineWidth = 2), n3;
      })({ itemWidth: p2, itemHeight: c2, icon: l2, iconRotate: S2, itemStyle: v2.itemStyle, symbolKeepAspect: m2 }));
    } else x2.add(e2.getLegendIcon({ itemWidth: p2, itemHeight: c2, icon: l2, iconRotate: f2, itemStyle: v2.itemStyle, lineStyle: v2.lineStyle, symbolKeepAspect: m2 }));
    var M2 = a2 === "left" ? p2 + 5 : -5, w2 = a2, I2 = o2.get("formatter"), b2 = t3;
    et(I2) && I2 ? b2 = I2.replace("{name}", t3 ?? "") : tt(I2) && (b2 = I2(t3));
    var D2 = g2 ? _2.getTextColor() : i3.get("inactiveColor");
    x2.add(new bs({ style: Nh(_2, { text: b2, x: M2, y: c2 / 2, fill: D2, align: w2, verticalAlign: "middle" }, { inheritColor: D2 }) }));
    var A2 = new ys({ shape: x2.getBoundingRect(), style: { fill: "transparent" } }), C2 = i3.getModel("tooltip");
    return C2.get("show") && xh({ el: A2, componentModel: o2, itemName: t3, itemTooltipOption: C2.option }), x2.add(A2), x2.eachChild(function(e3) {
      e3.silent = !0;
    }), A2.silent = !d2, this.getContentGroup().add(x2), xl(x2), x2.__legendDataIndex = n2, x2;
  }, i2.prototype.layoutInner = function(e2, t3, n2, i3, o2, a2) {
    var r2 = this.getContentGroup(), s2 = this.getSelectorGroup();
    dp(e2.get("orient"), r2, e2.get("itemGap"), n2.width, n2.height);
    var l2 = r2.getBoundingRect(), d2 = [-l2.x, -l2.y];
    if (s2.markRedraw(), r2.markRedraw(), o2) {
      dp("horizontal", s2, e2.get("selectorItemGap", !0));
      var h2 = s2.getBoundingRect(), u2 = [-h2.x, -h2.y], p2 = e2.get("selectorButtonGap", !0), c2 = e2.getOrient().index, g2 = c2 === 0 ? "width" : "height", f2 = c2 === 0 ? "height" : "width", m2 = c2 === 0 ? "y" : "x";
      a2 === "end" ? u2[c2] += l2[g2] + p2 : d2[c2] += h2[g2] + p2, u2[1 - c2] += l2[f2] / 2 - h2[f2] / 2, s2.x = u2[0], s2.y = u2[1], r2.x = d2[0], r2.y = d2[1];
      var y2 = { x: 0, y: 0 };
      return y2[g2] = l2[g2] + p2 + h2[g2], y2[f2] = Math.max(l2[f2], h2[f2]), y2[m2] = Math.min(0, h2[m2] + u2[1 - c2]), y2;
    }
    return r2.x = d2[0], r2.y = d2[1], this.group.getBoundingRect();
  }, i2.prototype.remove = function() {
    this.getContentGroup().removeAll(), this._isFirstRender = !0;
  }, i2.type = "legend.plain", i2;
})(ag);
function vt(e2, t2, n2, i2) {
  St2(e2, t2, n2, i2), n2.dispatchAction({ type: "legendToggleSelect", name: e2 ?? t2 }), _t(e2, t2, n2, i2);
}
function xt(e2) {
  for (var t2, n2 = e2.getZr().storage.getDisplayList(), i2 = 0, o2 = n2.length; i2 < o2 && !(t2 = n2[i2].states.emphasis); ) i2++;
  return t2 && t2.hoverLayer;
}
function _t(e2, t2, n2, i2) {
  xt(n2) || n2.dispatchAction({ type: "highlight", seriesName: e2, name: t2, excludeSeriesId: i2 });
}
function St2(e2, t2, n2, i2) {
  xt(n2) || n2.dispatchAction({ type: "downplay", seriesName: e2, name: t2, excludeSeriesId: i2 });
}
function Mt(e2) {
  var t2 = e2.findComponents({ mainType: "legend" });
  t2 && t2.length && e2.filterSeries(function(e3) {
    for (var n2 = 0; n2 < t2.length; n2++) if (!t2[n2].isSelected(e3.name)) return !1;
    return !0;
  });
}
function wt(e2, t2, n2) {
  var i2 = e2 === "allSelect" || e2 === "inverseSelect", o2 = {}, a2 = [];
  n2.eachComponent({ mainType: "legend", query: t2 }, function(n3) {
    i2 ? n3[e2]() : n3[e2](t2.name), It(n3, o2), a2.push(n3.componentIndex);
  });
  var r2 = {};
  return n2.eachComponent("legend", function(e3) {
    Y(o2, function(t3, n3) {
      e3[t3 ? "select" : "unSelect"](n3);
    }), It(e3, r2);
  }), i2 ? { selected: r2, legendIndex: a2 } : { name: t2.name, selected: r2 };
}
function It(e2, t2) {
  var n2 = t2 || {};
  return Y(e2.getData(), function(t3) {
    var i2 = t3.get("name");
    if (i2 !== `
` && i2 !== "") {
      var o2 = e2.isSelected(i2);
      kt(n2, i2) ? n2[i2] = n2[i2] && o2 : n2[i2] = o2;
    }
  }), n2;
}
function bt(e2) {
  e2.registerComponentModel(ct2), e2.registerComponentView(yt), e2.registerProcessor(e2.PRIORITY.PROCESSOR.SERIES_FILTER, Mt), e2.registerSubTypeDefaulter("legend", function() {
    return "plain";
  }), (function(e3) {
    e3.registerAction("legendToggleSelect", "legendselectchanged", Q(wt, "toggleSelected")), e3.registerAction("legendAllSelect", "legendselectall", Q(wt, "allSelect")), e3.registerAction("legendInverseSelect", "legendinverseselect", Q(wt, "inverseSelect")), e3.registerAction("legendSelect", "legendselected", Q(wt, "select")), e3.registerAction("legendUnSelect", "legendunselected", Q(wt, "unSelect"));
  })(e2);
}
var Dt = (function(e2) {
  function t2() {
    var n2 = e2 !== null && e2.apply(this, arguments) || this;
    return n2.type = t2.type, n2;
  }
  return _(t2, e2), t2.prototype.setScrollDataIndex = function(e3) {
    this.option.scrollDataIndex = e3;
  }, t2.prototype.init = function(t3, n2, i2) {
    var o2 = _p(t3);
    e2.prototype.init.call(this, t3, n2, i2), At(this, t3, o2);
  }, t2.prototype.mergeOption = function(t3, n2) {
    e2.prototype.mergeOption.call(this, t3, n2), At(this, this.option, t3);
  }, t2.type = "legend.scroll", t2.defaultOption = rc(ct2.defaultOption, { scrollDataIndex: 0, pageButtonItemGap: 5, pageButtonGap: null, pageButtonPosition: "end", pageFormatter: "{current}/{total}", pageIcons: { horizontal: ["M0,0L12,-10L12,10z", "M0,0L-12,-10L-12,10z"], vertical: ["M0,0L20,0L10,-20z", "M0,0L20,0L10,20z"] }, pageIconColor: wp.color.accent50, pageIconInactiveColor: wp.color.accent10, pageIconSize: 15, pageTextStyle: { color: wp.color.tertiary }, animationDurationUpdate: 800 }), t2;
})(ct2);
function At(e2, t2, n2) {
  var i2 = [1, 1];
  i2[e2.getOrient().index] = 0, mp(t2, n2, { type: "box", ignoreSize: !!i2 });
}
var Ct = xr, Rt = ["width", "height"], Tt = ["x", "y"], Pt = (function(e2) {
  function t2() {
    var n2 = e2 !== null && e2.apply(this, arguments) || this;
    return n2.type = t2.type, n2.newlineDisabled = !0, n2._currentIndex = 0, n2;
  }
  return _(t2, e2), t2.prototype.init = function() {
    e2.prototype.init.call(this), this.group.add(this._containerGroup = new Ct()), this._containerGroup.add(this.getContentGroup()), this.group.add(this._controllerGroup = new Ct());
  }, t2.prototype.resetInner = function() {
    e2.prototype.resetInner.call(this), this._controllerGroup.removeAll(), this._containerGroup.removeClipPath(), this._containerGroup.__rectSize = null;
  }, t2.prototype.renderInner = function(t3, n2, i2, o2, a2, r2, s2) {
    var l2 = this;
    e2.prototype.renderInner.call(this, t3, n2, i2, o2, a2, r2, s2);
    var d2 = this._controllerGroup, h2 = n2.get("pageIconSize", !0), u2 = J(h2) ? h2 : [h2, h2];
    c2("pagePrev", 0);
    var p2 = n2.getModel("pageTextStyle");
    function c2(e3, t4) {
      var i3 = e3 + "DataIndex", a3 = fh(n2.get("pageIcons", !0)[n2.getOrient().name][t4], { onclick: $(l2._pageGo, l2, i3, n2, o2) }, { x: -u2[0] / 2, y: -u2[1] / 2, width: u2[0], height: u2[1] });
      a3.name = e3, d2.add(a3);
    }
    d2.add(new bs({ name: "pageText", style: { text: "xx/xx", fill: p2.getTextColor(), font: p2.getFont(), verticalAlign: "middle", align: "center" }, silent: !0 })), c2("pageNext", 1);
  }, t2.prototype.layoutInner = function(e3, t3, n2, i2, o2, a2) {
    var r2 = this.getSelectorGroup(), s2 = e3.getOrient().index, l2 = Rt[s2], d2 = Tt[s2], h2 = Rt[1 - s2], u2 = Tt[1 - s2];
    o2 && dp("horizontal", r2, e3.get("selectorItemGap", !0));
    var p2 = e3.get("selectorButtonGap", !0), c2 = r2.getBoundingRect(), g2 = [-c2.x, -c2.y], f2 = F(n2);
    o2 && (f2[l2] = n2[l2] - c2[l2] - p2);
    var m2 = this._layoutContentAndController(e3, i2, f2, s2, l2, h2, u2, d2);
    if (o2) {
      if (a2 === "end") g2[s2] += m2[l2] + p2;
      else {
        var y2 = c2[l2] + p2;
        g2[s2] -= y2, m2[d2] -= y2;
      }
      m2[l2] += c2[l2] + p2, g2[1 - s2] += m2[u2] + m2[h2] / 2 - c2[h2] / 2, m2[h2] = Math.max(m2[h2], c2[h2]), m2[u2] = Math.min(m2[u2], c2[u2] + g2[1 - s2]), r2.x = g2[0], r2.y = g2[1], r2.markRedraw();
    }
    return m2;
  }, t2.prototype._layoutContentAndController = function(e3, t3, n2, i2, o2, r2, s2, l2) {
    var d2 = this.getContentGroup(), h2 = this._containerGroup, u2 = this._controllerGroup;
    dp(e3.get("orient"), d2, e3.get("itemGap"), i2 ? n2.width : null, i2 ? null : n2.height), dp("horizontal", u2, e3.get("pageButtonItemGap", !0));
    var p2 = d2.getBoundingRect(), c2 = u2.getBoundingRect(), g2 = this._showController = p2[o2] > n2[o2], f2 = [-p2.x, -p2.y];
    t3 || (f2[i2] = d2[l2]);
    var m2 = [0, 0], y2 = [-c2.x, -c2.y], v2 = ct(e3.get("pageButtonGap", !0), e3.get("itemGap", !0));
    g2 && (e3.get("pageButtonPosition", !0) === "end" ? y2[i2] += n2[o2] - c2[o2] : m2[i2] += c2[o2] + v2), y2[1 - i2] += p2[r2] / 2 - c2[r2] / 2, d2.setPosition(f2), h2.setPosition(m2), u2.setPosition(y2);
    var x2 = { x: 0, y: 0 };
    if (x2[o2] = g2 ? n2[o2] : p2[o2], x2[r2] = Math.max(p2[r2], c2[r2]), x2[s2] = Math.min(0, c2[s2] + y2[1 - i2]), h2.__rectSize = n2[o2], g2) {
      var _2 = { x: 0, y: 0 };
      _2[o2] = Math.max(n2[o2] - c2[o2] - v2, 0), _2[r2] = x2[r2], h2.setClipPath(new ys({ shape: _2 })), h2.__rectSize = _2[o2];
    } else u2.eachChild(function(e4) {
      e4.attr({ invisible: !0, silent: !0 });
    });
    var S2 = this._getPageInfo(e3);
    return S2.pageIndex != null && Uu(d2, { x: S2.contentPosition[0], y: S2.contentPosition[1] }, g2 ? e3 : null), this._updatePageInfoView(e3, S2), x2;
  }, t2.prototype._pageGo = function(e3, t3, n2) {
    var i2 = this._getPageInfo(t3)[e3];
    i2 != null && n2.dispatchAction({ type: "legendScroll", scrollDataIndex: i2, legendId: t3.id });
  }, t2.prototype._updatePageInfoView = function(e3, t3) {
    var n2 = this._controllerGroup;
    Y(["pagePrev", "pageNext"], function(i3) {
      var o3 = t3[i3 + "DataIndex"] != null, a3 = n2.childOfName(i3);
      a3 && (a3.setStyle("fill", o3 ? e3.get("pageIconColor", !0) : e3.get("pageIconInactiveColor", !0)), a3.cursor = o3 ? "pointer" : "default");
    });
    var i2 = n2.childOfName("pageText"), o2 = e3.get("pageFormatter"), a2 = t3.pageIndex, r2 = a2 != null ? a2 + 1 : 0, s2 = t3.pageCount;
    i2 && o2 && i2.setStyle("text", et(o2) ? o2.replace("{current}", r2 == null ? "" : r2 + "").replace("{total}", s2 == null ? "" : s2 + "") : o2({ current: r2, total: s2 }));
  }, t2.prototype._getPageInfo = function(e3) {
    var t3 = e3.get("scrollDataIndex", !0), n2 = this.getContentGroup(), i2 = this._containerGroup.__rectSize, o2 = e3.getOrient().index, a2 = Rt[o2], r2 = Tt[o2], s2 = this._findTargetItemIndex(t3), l2 = n2.children(), d2 = l2[s2], h2 = l2.length, u2 = h2 ? 1 : 0, p2 = { contentPosition: [n2.x, n2.y], pageCount: u2, pageIndex: u2 - 1, pagePrevDataIndex: null, pageNextDataIndex: null };
    if (!d2) return p2;
    var c2 = v2(d2);
    p2.contentPosition[o2] = -c2.s;
    for (var g2 = s2 + 1, f2 = c2, m2 = c2, y2 = null; g2 <= h2; ++g2) (!(y2 = v2(l2[g2])) && m2.e > f2.s + i2 || y2 && !x2(y2, f2.s)) && (f2 = m2.i > f2.i ? m2 : y2) && (p2.pageNextDataIndex == null && (p2.pageNextDataIndex = f2.i), ++p2.pageCount), m2 = y2;
    for (g2 = s2 - 1, f2 = c2, m2 = c2, y2 = null; g2 >= -1; --g2) (y2 = v2(l2[g2])) && x2(m2, y2.s) || !(f2.i < m2.i) || (m2 = f2, p2.pagePrevDataIndex == null && (p2.pagePrevDataIndex = f2.i), ++p2.pageCount, ++p2.pageIndex), f2 = y2;
    return p2;
    function v2(e4) {
      if (e4) {
        var t4 = e4.getBoundingRect(), n3 = t4[r2] + e4[r2];
        return { s: n3, e: n3 + t4[a2], i: e4.__legendDataIndex };
      }
    }
    function x2(e4, t4) {
      return e4.e >= t4 && e4.s <= t4 + i2;
    }
  }, t2.prototype._findTargetItemIndex = function(e3) {
    return this._showController ? (this.getContentGroup().eachChild(function(i2, o2) {
      var a2 = i2.__legendDataIndex;
      n2 == null && a2 != null && (n2 = o2), a2 === e3 && (t3 = o2);
    }), t3 ?? n2) : 0;
    var t3, n2;
  }, t2.type = "legend.scroll", t2;
})(yt);
function Lt(e2) {
  Y_(bt), e2.registerComponentModel(Dt), e2.registerComponentView(Pt), (function(e3) {
    e3.registerAction("legendScroll", "legendscroll", function(e4, t2) {
      var n2 = e4.scrollDataIndex;
      n2 != null && t2.eachComponent({ mainType: "legend", subType: "scroll", query: e4 }, function(e5) {
        e5.setScrollDataIndex(n2);
      });
    });
  })(e2);
}
function zt(e2) {
  Y_(bt), Y_(Lt);
}
var kt2 = (function(e2) {
  function t2() {
    var n2 = e2 !== null && e2.apply(this, arguments) || this;
    return n2.type = t2.type, n2;
  }
  return _(t2, e2), t2.type = "dataZoom.inside", t2.defaultOption = rc(ot.defaultOption, { disabled: !1, zoomLock: !1, zoomOnMouseWheel: !0, moveOnMouseMove: !0, moveOnMouseWheel: !1, preventDefaultMouseMove: !0 }), t2;
})(ot), Zt = uo();
function Vt(e2, t2) {
  if (t2) {
    e2.removeKey(t2.model.uid);
    var n2 = t2.controller;
    n2 && n2.dispose();
  }
}
function Bt(e2, t2) {
  e2.isDisposed() || e2.dispatchAction({ type: "dataZoom", animation: { easing: "cubicOut", duration: 100 }, batch: t2 });
}
function Ot(e2, t2, n2, i2) {
  return e2.coordinateSystem.containPoint([n2, i2]);
}
function Gt(e2) {
  e2.registerProcessor(e2.PRIORITY.PROCESSOR.FILTER, function(e3, t2) {
    var n2 = Zt(t2), i2 = n2.coordSysRecordMap || (n2.coordSysRecordMap = St());
    i2.each(function(e4) {
      e4.dataZoomInfoMap = null;
    }), e3.eachComponent({ mainType: "dataZoom", subType: "inside" }, function(e4) {
      var n3 = nt(e4);
      Y(n3.infoList, function(n4) {
        var o2 = n4.model.uid, a2 = i2.get(o2) || i2.set(o2, (function(e5, t3) {
          var n5 = { model: t3, containsPoint: Q(Ot, t3), dispatchAction: Q(Bt, e5), dataZoomInfoMap: null, controller: null }, i3 = n5.controller = new iS(e5.getZr());
          return Y(["pan", "zoom", "scrollMove"], function(e6) {
            i3.on(e6, function(t4) {
              var i4 = [];
              n5.dataZoomInfoMap.each(function(o3) {
                if (t4.isAvailableBehavior(o3.model.option)) {
                  var a3 = (o3.getRange || {})[e6], r2 = a3 && a3(o3.dzReferCoordSysInfo, n5.model.mainType, n5.controller, t4);
                  !o3.model.get("disabled", !0) && r2 && i4.push({ dataZoomId: o3.model.id, start: r2[0], end: r2[1] });
                }
              }), i4.length && n5.dispatchAction(i4);
            });
          }), n5;
        })(t2, n4.model));
        (a2.dataZoomInfoMap || (a2.dataZoomInfoMap = St())).set(e4.uid, { dzReferCoordSysInfo: n4, model: e4, getRange: null });
      });
    }), i2.each(function(e4) {
      var n3, o2 = e4.controller, a2 = e4.dataZoomInfoMap;
      if (a2) {
        var r2 = a2.keys()[0];
        r2 != null && (n3 = a2.get(r2));
      }
      if (n3) {
        var s2 = (function(e5, t3, n4) {
          var i3, o3 = "type_", a3 = { type_true: 2, type_move: 1, type_false: 0, type_undefined: -1 }, r3 = !0;
          return e5.each(function(e6) {
            var t4 = e6.model, n5 = !t4.get("disabled", !0) && (!t4.get("zoomLock", !0) || "move");
            a3[o3 + n5] > a3[o3 + i3] && (i3 = n5), r3 = r3 && t4.get("preventDefaultMouseMove", !0);
          }), { controlType: i3, opt: { zoomOnMouseWheel: !0, moveOnMouseMove: !0, moveOnMouseWheel: !0, preventDefaultMouseMove: !!r3, api: n4, zInfo: { component: t3.model }, triggerInfo: { roamTrigger: null, isInSelf: t3.containsPoint } } };
        })(a2, e4, t2);
        o2.enable(s2.controlType, s2.opt), xg(e4, "dispatchAction", n3.model.get("throttle", !0), "fixRate");
      } else Vt(i2, e4);
    });
  });
}
var Wt = (function(e2) {
  function t2() {
    var t3 = e2 !== null && e2.apply(this, arguments) || this;
    return t3.type = "dataZoom.inside", t3;
  }
  return _(t2, e2), t2.prototype.render = function(t3, n2, i2) {
    e2.prototype.render.apply(this, arguments), t3.noTarget() ? this._clear() : (this.range = t3.getPercentRange(), (function(e3, t4, n3) {
      Zt(e3).coordSysRecordMap.each(function(e4) {
        var i3 = e4.dataZoomInfoMap.get(t4.uid);
        i3 && (i3.getRange = n3);
      });
    })(i2, t3, { pan: $(Et.pan, this), zoom: $(Et.zoom, this), scrollMove: $(Et.scrollMove, this) }));
  }, t2.prototype.dispose = function() {
    this._clear(), e2.prototype.dispose.apply(this, arguments);
  }, t2.prototype._clear = function() {
    (function(e3, t3) {
      for (var n2 = Zt(e3).coordSysRecordMap, i2 = n2.keys(), o2 = 0; o2 < i2.length; o2++) {
        var a2 = i2[o2], r2 = n2.get(a2), s2 = r2.dataZoomInfoMap;
        if (s2) {
          var l2 = t3.uid;
          s2.get(l2) && (s2.removeKey(l2), s2.keys().length || Vt(n2, r2));
        }
      }
    })(this.api, this.dataZoomModel), this.range = null;
  }, t2.type = "dataZoom.inside", t2;
})(rt2), Et = { zoom: function(e2, t2, n2, i2) {
  var o2 = this.range, a2 = o2.slice(), r2 = e2.axisModels[0];
  if (r2) {
    var s2 = Ht[t2](null, [i2.originX, i2.originY], r2, n2, e2), l2 = (s2.signal > 0 ? s2.pixelStart + s2.pixelLength - s2.pixel : s2.pixel - s2.pixelStart) / s2.pixelLength * (a2[1] - a2[0]) + a2[0], d2 = Math.max(1 / i2.scale, 0);
    a2[0] = (a2[0] - l2) * d2 + l2, a2[1] = (a2[1] - l2) * d2 + l2;
    var h2 = this.dataZoomModel.findRepresentativeAxisProxy().getMinMaxSpan();
    return CS(0, a2, [0, 100], 0, h2.minSpan, h2.maxSpan), this.range = a2, o2[0] !== a2[0] || o2[1] !== a2[1] ? a2 : void 0;
  }
}, pan: Nt(function(e2, t2, n2, i2, o2, a2) {
  var r2 = Ht[i2]([a2.oldX, a2.oldY], [a2.newX, a2.newY], t2, o2, n2);
  return r2.signal * (e2[1] - e2[0]) * r2.pixel / r2.pixelLength;
}), scrollMove: Nt(function(e2, t2, n2, i2, o2, a2) {
  return Ht[i2]([0, 0], [a2.scrollDelta, a2.scrollDelta], t2, o2, n2).signal * (e2[1] - e2[0]) * a2.scrollDelta;
}) };
function Nt(e2) {
  return function(t2, n2, i2, o2) {
    var a2 = this.range, r2 = a2.slice(), s2 = t2.axisModels[0];
    if (s2) {
      var l2 = e2(r2, s2, t2, n2, i2, o2);
      return CS(l2, r2, [0, 100], "all"), this.range = r2, a2[0] !== r2[0] || a2[1] !== r2[1] ? r2 : void 0;
    }
  };
}
var Ht = { grid: function(e2, t2, n2, i2, o2) {
  var a2 = n2.axis, r2 = {}, s2 = o2.model.coordinateSystem.getRect();
  return e2 = e2 || [0, 0], a2.dim === "x" ? (r2.pixel = t2[0] - e2[0], r2.pixelLength = s2.width, r2.pixelStart = s2.x, r2.signal = a2.inverse ? 1 : -1) : (r2.pixel = t2[1] - e2[1], r2.pixelLength = s2.height, r2.pixelStart = s2.y, r2.signal = a2.inverse ? -1 : 1), r2;
}, polar: function(e2, t2, n2, i2, o2) {
  var a2 = n2.axis, r2 = {}, s2 = o2.model.coordinateSystem, l2 = s2.getRadiusAxis().getExtent(), d2 = s2.getAngleAxis().getExtent();
  return e2 = e2 ? s2.pointToCoord(e2) : [0, 0], t2 = s2.pointToCoord(t2), n2.mainType === "radiusAxis" ? (r2.pixel = t2[0] - e2[0], r2.pixelLength = l2[1] - l2[0], r2.pixelStart = l2[0], r2.signal = a2.inverse ? 1 : -1) : (r2.pixel = t2[1] - e2[1], r2.pixelLength = d2[1] - d2[0], r2.pixelStart = d2[0], r2.signal = a2.inverse ? -1 : 1), r2;
}, singleAxis: function(e2, t2, n2, i2, o2) {
  var a2 = n2.axis, r2 = o2.model.coordinateSystem.getRect(), s2 = {};
  return e2 = e2 || [0, 0], a2.orient === "horizontal" ? (s2.pixel = t2[0] - e2[0], s2.pixelLength = r2.width, s2.pixelStart = r2.x, s2.signal = a2.inverse ? 1 : -1) : (s2.pixel = t2[1] - e2[1], s2.pixelLength = r2.height, s2.pixelStart = r2.y, s2.signal = a2.inverse ? -1 : 1), s2;
} };
function Ft(e2) {
  pt(e2), e2.registerComponentModel(kt2), e2.registerComponentView(Wt), Gt(e2);
}
var Yt = (function(e2) {
  function t2() {
    var n2 = e2 !== null && e2.apply(this, arguments) || this;
    return n2.type = t2.type, n2;
  }
  return _(t2, e2), t2.type = "dataZoom.slider", t2.layoutMode = "box", t2.defaultOption = rc(ot.defaultOption, { show: !0, right: "ph", top: "ph", width: "ph", height: "ph", left: null, bottom: null, borderColor: wp.color.accent10, borderRadius: 0, backgroundColor: wp.color.transparent, dataBackground: { lineStyle: { color: wp.color.accent30, width: 0.5 }, areaStyle: { color: wp.color.accent20, opacity: 0.2 } }, selectedDataBackground: { lineStyle: { color: wp.color.accent40, width: 0.5 }, areaStyle: { color: wp.color.accent20, opacity: 0.3 } }, fillerColor: "rgba(135,175,274,0.2)", handleIcon: "path://M-9.35,34.56V42m0-40V9.5m-2,0h4a2,2,0,0,1,2,2v21a2,2,0,0,1-2,2h-4a2,2,0,0,1-2-2v-21A2,2,0,0,1-11.35,9.5Z", handleSize: "100%", handleStyle: { color: wp.color.neutral00, borderColor: wp.color.accent20 }, moveHandleSize: 7, moveHandleIcon: "path://M-320.9-50L-320.9-50c18.1,0,27.1,9,27.1,27.1V85.7c0,18.1-9,27.1-27.1,27.1l0,0c-18.1,0-27.1-9-27.1-27.1V-22.9C-348-41-339-50-320.9-50z M-212.3-50L-212.3-50c18.1,0,27.1,9,27.1,27.1V85.7c0,18.1-9,27.1-27.1,27.1l0,0c-18.1,0-27.1-9-27.1-27.1V-22.9C-239.4-41-230.4-50-212.3-50z M-103.7-50L-103.7-50c18.1,0,27.1,9,27.1,27.1V85.7c0,18.1-9,27.1-27.1,27.1l0,0c-18.1,0-27.1-9-27.1-27.1V-22.9C-130.9-41-121.8-50-103.7-50z", moveHandleStyle: { color: wp.color.accent40, opacity: 0.5 }, showDetail: !0, showDataShadow: "auto", realtime: !0, zoomLock: !1, textStyle: { color: wp.color.tertiary }, brushSelect: !0, brushStyle: { color: wp.color.accent30, opacity: 0.3 }, emphasis: { handleLabel: { show: !0 }, handleStyle: { borderColor: wp.color.accent40 }, moveHandleStyle: { opacity: 0.8 } }, defaultLocationEdgeGap: 15 }), t2;
})(ot), Xt = ys, Ut = "horizontal", jt = "vertical", Kt = ["line", "bar", "candlestick", "scatter"], qt = { easing: "cubicOut", duration: 100, delay: 0 }, Jt = (function(e2) {
  function t2() {
    var n2 = e2 !== null && e2.apply(this, arguments) || this;
    return n2.type = t2.type, n2._displayables = {}, n2;
  }
  return _(t2, e2), t2.prototype.init = function(e3, t3) {
    this.api = t3, this._onBrush = $(this._onBrush, this), this._onBrushEnd = $(this._onBrushEnd, this);
  }, t2.prototype.render = function(t3, n2, i2, o2) {
    if (e2.prototype.render.apply(this, arguments), xg(this, "_dispatchZoomAction", t3.get("throttle"), "fixRate"), this._orient = t3.getOrient(), t3.get("show") !== !1) {
      if (t3.noTarget()) return this._clear(), void this.group.removeAll();
      o2 && o2.type === "dataZoom" && o2.from === this.uid || this._buildView(), this._updateView();
    } else this.group.removeAll();
  }, t2.prototype.dispose = function() {
    this._clear(), e2.prototype.dispose.apply(this, arguments);
  }, t2.prototype._clear = function() {
    bg(this, "_dispatchZoomAction");
    var e3 = this.api.getZr();
    e3.off("mousemove", this._onBrush), e3.off("mouseup", this._onBrushEnd);
  }, t2.prototype._buildView = function() {
    var e3 = this.group;
    e3.removeAll(), this._brushing = !1, this._displayables.brushRect = null, this._resetLocation(), this._resetInterval();
    var t3 = this._displayables.sliderGroup = new xr();
    this._renderBackground(), this._renderHandle(), this._renderDataShadow(), e3.add(t3), this._positionGroup();
  }, t2.prototype._resetLocation = function() {
    var e3 = this.dataZoomModel, t3 = this.api, n2 = e3.get("brushSelect") ? 7 : 0, i2 = vp(e3, t3).refContainer, o2 = this._findCoordRect(), a2 = e3.get("defaultLocationEdgeGap", !0) || 0, r2 = this._orient === Ut ? { right: i2.width - o2.x - o2.width, top: i2.height - 30 - a2 - n2, width: o2.width, height: 30 } : { right: a2, top: o2.y, width: 30, height: o2.height }, s2 = _p(e3.option);
    Y(["right", "top", "width", "height"], function(e4) {
      s2[e4] === "ph" && (s2[e4] = r2[e4]);
    });
    var l2 = fp(s2, i2);
    this._location = { x: l2.x, y: l2.y }, this._size = [l2.width, l2.height], this._orient === jt && this._size.reverse();
  }, t2.prototype._positionGroup = function() {
    var e3 = this.group, t3 = this._location, n2 = this._orient, i2 = this.dataZoomModel.getFirstTargetAxisModel(), o2 = i2 && i2.get("inverse"), a2 = this._displayables.sliderGroup, r2 = (this._dataShadowInfo || {}).otherAxisInverse;
    a2.attr(n2 !== Ut || o2 ? n2 === Ut && o2 ? { scaleY: r2 ? 1 : -1, scaleX: -1 } : n2 !== jt || o2 ? { scaleY: r2 ? -1 : 1, scaleX: -1, rotation: Math.PI / 2 } : { scaleY: r2 ? -1 : 1, scaleX: 1, rotation: Math.PI / 2 } : { scaleY: r2 ? 1 : -1, scaleX: 1 });
    var s2 = e3.getBoundingRect([a2]);
    e3.x = t3.x - s2.x, e3.y = t3.y - s2.y, e3.markRedraw();
  }, t2.prototype._getViewExtent = function() {
    return [0, this._size[0]];
  }, t2.prototype._renderBackground = function() {
    var e3 = this.dataZoomModel, t3 = this._size, n2 = this._displayables.sliderGroup, i2 = e3.get("brushSelect");
    n2.add(new Xt({ silent: !0, shape: { x: 0, y: 0, width: t3[0], height: t3[1] }, style: { fill: e3.get("backgroundColor") }, z2: -40 }));
    var o2 = new Xt({ shape: { x: 0, y: 0, width: t3[0], height: t3[1] }, style: { fill: "transparent" }, z2: 0, onclick: $(this._onClickPanel, this) }), a2 = this.api.getZr();
    i2 ? (o2.on("mousedown", this._onBrushStart, this), o2.cursor = "crosshair", a2.on("mousemove", this._onBrush), a2.on("mouseup", this._onBrushEnd)) : (a2.off("mousemove", this._onBrush), a2.off("mouseup", this._onBrushEnd)), n2.add(o2);
  }, t2.prototype._renderDataShadow = function() {
    var e3 = this._dataShadowInfo = this._prepareDataShadowInfo();
    if (this._displayables.dataShadowSegs = [], e3) {
      var t3 = this._size, n2 = this._shadowSize || [], i2 = e3.series, o2 = i2.getRawData(), a2 = i2.getShadowDim && i2.getShadowDim(), r2 = a2 && o2.getDimensionInfo(a2) ? i2.getShadowDim() : e3.otherDim;
      if (r2 != null) {
        var s2 = this._shadowPolygonPts, l2 = this._shadowPolylinePts;
        if (o2 !== this._shadowData || r2 !== this._shadowDim || t3[0] !== n2[0] || t3[1] !== n2[1]) {
          var d2 = o2.getDataExtent(e3.thisDim), h2 = o2.getDataExtent(r2), u2 = 0.3 * (h2[1] - h2[0]);
          h2 = [h2[0] - u2, h2[1] + u2];
          var p2, c2 = [0, t3[1]], g2 = [0, t3[0]], f2 = [[t3[0], 0], [0, 0]], m2 = [], y2 = g2[1] / Math.max(1, o2.count() - 1), v2 = t3[0] / (d2[1] - d2[0]), x2 = e3.thisAxis.type === "time", _2 = -y2, S2 = Math.round(o2.count() / t3[0]);
          o2.each([e3.thisDim, r2], function(e4, t4, n3) {
            if (S2 > 0 && n3 % S2) x2 || (_2 += y2);
            else {
              _2 = x2 ? (+e4 - d2[0]) * v2 : _2 + y2;
              var i3 = t4 == null || isNaN(t4) || t4 === "", o3 = i3 ? 0 : Dr(t4, h2, c2, !0);
              i3 && !p2 && n3 ? (f2.push([f2[f2.length - 1][0], 0]), m2.push([m2[m2.length - 1][0], 0])) : !i3 && p2 && (f2.push([_2, 0]), m2.push([_2, 0])), i3 || (f2.push([_2, o3]), m2.push([_2, o3])), p2 = i3;
            }
          }), s2 = this._shadowPolygonPts = f2, l2 = this._shadowPolylinePts = m2;
        }
        this._shadowData = o2, this._shadowDim = r2, this._shadowSize = [t3[0], t3[1]];
        for (var M2 = this.dataZoomModel, w2 = 0; w2 < 3; w2++) {
          var I2 = b2(w2 === 1);
          this._displayables.sliderGroup.add(I2), this._displayables.dataShadowSegs.push(I2);
        }
      }
    }
    function b2(e4) {
      var t4 = M2.getModel(e4 ? "selectedDataBackground" : "dataBackground"), n3 = new xr(), i3 = new gu({ shape: { points: s2 }, segmentIgnoreThreshold: 1, style: t4.getModel("areaStyle").getAreaStyle(), silent: !0, z2: -20 }), o3 = new yu({ shape: { points: l2 }, segmentIgnoreThreshold: 1, style: t4.getModel("lineStyle").getLineStyle(), silent: !0, z2: -19 });
      return n3.add(i3), n3.add(o3), n3;
    }
  }, t2.prototype._prepareDataShadowInfo = function() {
    var e3 = this.dataZoomModel, t3 = e3.get("showDataShadow");
    if (t3 !== !1) {
      var n2, i2 = this.ecModel;
      return e3.eachTargetAxis(function(o2, a2) {
        var r2 = e3.getAxisProxy(o2, a2).getTargetSeriesModels();
        Y(r2, function(e4) {
          if (!(n2 || t3 !== !0 && G(Kt, e4.get("type")) < 0)) {
            var r3, s2 = i2.getComponent(et2(o2), a2).axis, l2 = (function(e5) {
              return { x: "y", y: "x", radius: "angle", angle: "radius" }[e5];
            })(o2), d2 = e4.coordinateSystem;
            l2 != null && d2.getOtherAxis && (r3 = d2.getOtherAxis(s2).inverse), l2 = e4.getData().mapDimension(l2);
            var h2 = e4.getData().mapDimension(o2);
            n2 = { thisAxis: s2, series: e4, thisDim: h2, otherDim: l2, otherAxisInverse: r3 };
          }
        }, this);
      }, this), n2;
    }
  }, t2.prototype._renderHandle = function() {
    var e3 = this.group, t3 = this._displayables, n2 = t3.handles = [null, null], i2 = t3.handleLabels = [null, null], o2 = this._displayables.sliderGroup, a2 = this._size, r2 = this.dataZoomModel, s2 = this.api, l2 = r2.get("borderRadius") || 0, d2 = r2.get("brushSelect"), u2 = t3.filler = new Xt({ silent: d2, style: { fill: r2.get("fillerColor") }, textConfig: { position: "inside" } });
    o2.add(u2), o2.add(new Xt({ silent: !0, subPixelOptimize: !0, shape: { x: 0, y: 0, width: a2[0], height: a2[1], r: l2 }, style: { stroke: r2.get("dataBackgroundColor") || r2.get("borderColor"), lineWidth: 1, fill: wp.color.transparent } })), Y([0, 1], function(t4) {
      var a3 = r2.get("handleIcon");
      !gv[a3] && a3.indexOf("path://") < 0 && a3.indexOf("image://") < 0 && (a3 = "path://" + a3);
      var s3, l3 = mv(a3, -1, 0, 2, 2, null, !0);
      l3.attr({ cursor: (s3 = this._orient, s3 === "vertical" ? "ns-resize" : "ew-resize"), draggable: !0, drift: $(this._onDragMove, this, t4), ondragend: $(this._onDragEnd, this), onmouseover: $(this._showDataInfo, this, !0), onmouseout: $(this._showDataInfo, this, !1), z2: 5 });
      var d3 = l3.getBoundingRect(), h2 = r2.get("handleSize");
      this._handleHeight = Ar(h2, this._size[1]), this._handleWidth = d3.width / d3.height * this._handleHeight, l3.setStyle(r2.getModel("handleStyle").getItemStyle()), l3.style.strokeNoScale = !0, l3.rectHover = !0, l3.ensureState("emphasis").style = r2.getModel(["emphasis", "handleStyle"]).getItemStyle(), xl(l3);
      var u3 = r2.get("handleColor");
      u3 != null && (l3.style.fill = u3), o2.add(n2[t4] = l3);
      var p3 = r2.getModel("textStyle"), c3 = (r2.get("handleLabel") || {}).show || !1;
      e3.add(i2[t4] = new bs({ silent: !0, invisible: !c3, style: Nh(p3, { x: 0, y: 0, text: "", verticalAlign: "middle", align: "center", fill: p3.getTextColor(), font: p3.getFont() }), z2: 10 }));
    }, this);
    var p2 = u2;
    if (d2) {
      var c2 = Ar(r2.get("moveHandleSize"), a2[1]), g2 = t3.moveHandle = new ys({ style: r2.getModel("moveHandleStyle").getItemStyle(), silent: !0, shape: { r: [0, 0, 2, 2], y: a2[1] - 0.5, height: c2 } }), f2 = 0.8 * c2, m2 = t3.moveHandleIcon = mv(r2.get("moveHandleIcon"), -f2 / 2, -f2 / 2, f2, f2, wp.color.neutral00, !0);
      m2.silent = !0, m2.y = a2[1] + c2 / 2 - 0.5, g2.ensureState("emphasis").style = r2.getModel(["emphasis", "moveHandleStyle"]).getItemStyle();
      var y2 = Math.min(a2[1] / 2, Math.max(c2, 10));
      (p2 = t3.moveZone = new ys({ invisible: !0, shape: { y: a2[1] - y2, height: c2 + y2 } })).on("mouseover", function() {
        s2.enterEmphasis(g2);
      }).on("mouseout", function() {
        s2.leaveEmphasis(g2);
      }), o2.add(g2), o2.add(m2), o2.add(p2);
    }
    p2.attr({ draggable: !0, cursor: "default", drift: $(this._onDragMove, this, "all"), ondragstart: $(this._showDataInfo, this, !0), ondragend: $(this._onDragEnd, this), onmouseover: $(this._showDataInfo, this, !0), onmouseout: $(this._showDataInfo, this, !1) });
  }, t2.prototype._resetInterval = function() {
    var e3 = this._range = this.dataZoomModel.getPercentRange(), t3 = this._getViewExtent();
    this._handleEnds = [Dr(e3[0], [0, 100], t3, !0), Dr(e3[1], [0, 100], t3, !0)];
  }, t2.prototype._updateInterval = function(e3, t3) {
    var n2 = this.dataZoomModel, i2 = this._handleEnds, o2 = this._getViewExtent(), a2 = n2.findRepresentativeAxisProxy().getMinMaxSpan(), r2 = [0, 100];
    CS(t3, i2, o2, n2.get("zoomLock") ? "all" : e3, a2.minSpan != null ? Dr(a2.minSpan, r2, o2, !0) : null, a2.maxSpan != null ? Dr(a2.maxSpan, r2, o2, !0) : null);
    var s2 = this._range, l2 = this._range = Or([Dr(i2[0], o2, r2, !0), Dr(i2[1], o2, r2, !0)]);
    return !s2 || s2[0] !== l2[0] || s2[1] !== l2[1];
  }, t2.prototype._updateView = function(e3) {
    var t3 = this._displayables, n2 = this._handleEnds, i2 = Or(n2.slice()), o2 = this._size;
    Y([0, 1], function(e4) {
      var i3 = t3.handles[e4], a3 = this._handleHeight;
      i3.attr({ scaleX: a3 / 2, scaleY: a3 / 2, x: n2[e4] + (e4 ? -1 : 1), y: o2[1] / 2 - a3 / 2 });
    }, this), t3.filler.setShape({ x: i2[0], y: 0, width: i2[1] - i2[0], height: o2[1] });
    var a2 = { x: i2[0], width: i2[1] - i2[0] };
    t3.moveHandle && (t3.moveHandle.setShape(a2), t3.moveZone.setShape(a2), t3.moveZone.getBoundingRect(), t3.moveHandleIcon && t3.moveHandleIcon.attr("x", a2.x + a2.width / 2));
    for (var r2 = t3.dataShadowSegs, s2 = [0, i2[0], i2[1], o2[0]], l2 = 0; l2 < r2.length; l2++) {
      var d2 = r2[l2], u2 = d2.getClipPath();
      u2 || (u2 = new ys(), d2.setClipPath(u2)), u2.setShape({ x: s2[l2], y: 0, width: s2[l2 + 1] - s2[l2], height: o2[1] });
    }
    this._updateDataInfo(e3);
  }, t2.prototype._updateDataInfo = function(e3) {
    var t3 = this.dataZoomModel, n2 = this._displayables, i2 = n2.handleLabels, o2 = this._orient, a2 = ["", ""];
    if (t3.get("showDetail")) {
      var r2 = t3.findRepresentativeAxisProxy();
      if (r2) {
        var s2 = r2.getAxisModel().axis, l2 = this._range, d2 = e3 ? r2.calculateDataWindow({ start: l2[0], end: l2[1] }).valueWindow : r2.getDataValueWindow();
        a2 = [this._formatLabel(d2[0], s2), this._formatLabel(d2[1], s2)];
      }
    }
    var h2 = Or(this._handleEnds.slice());
    function u2(e4) {
      var t4 = uh(n2.handles[e4].parent, this.group), r3 = ch(e4 === 0 ? "right" : "left", t4), s3 = this._handleWidth / 2 + 5, l3 = hh([h2[e4] + (e4 === 0 ? -s3 : s3), this._size[1] / 2], t4);
      i2[e4].setStyle({ x: l3[0], y: l3[1], verticalAlign: o2 === Ut ? "middle" : r3, align: o2 === Ut ? r3 : "center", text: a2[e4] });
    }
    u2.call(this, 0), u2.call(this, 1);
  }, t2.prototype._formatLabel = function(e3, t3) {
    var n2 = this.dataZoomModel, i2 = n2.get("labelFormatter"), o2 = n2.get("labelPrecision");
    o2 != null && o2 !== "auto" || (o2 = t3.getPixelPrecision());
    var a2 = e3 == null || isNaN(e3) ? "" : t3.type === "category" || t3.type === "time" ? t3.scale.getLabel({ value: Math.round(e3) }) : e3.toFixed(Math.min(o2, 20));
    return tt(i2) ? i2(e3, a2) : et(i2) ? i2.replace("{value}", a2) : a2;
  }, t2.prototype._showDataInfo = function(e3) {
    var t3 = (this.dataZoomModel.get("handleLabel") || {}).show || !1, n2 = this.dataZoomModel.getModel(["emphasis", "handleLabel"]).get("show") || !1, i2 = e3 || this._dragging ? n2 : t3, o2 = this._displayables, a2 = o2.handleLabels;
    a2[0].attr("invisible", !i2), a2[1].attr("invisible", !i2), o2.moveHandle && this.api[i2 ? "enterEmphasis" : "leaveEmphasis"](o2.moveHandle, 1);
  }, t2.prototype._onDragMove = function(e3, t3, n2, i2) {
    this._dragging = !0, le(i2.event);
    var o2 = this._displayables.sliderGroup.getLocalTransform(), a2 = hh([t3, n2], o2, !0), r2 = this._updateInterval(e3, a2[0]), s2 = this.dataZoomModel.get("realtime");
    this._updateView(!s2), r2 && s2 && this._dispatchZoomAction(!0);
  }, t2.prototype._onDragEnd = function() {
    this._dragging = !1, this._showDataInfo(!1), !this.dataZoomModel.get("realtime") && this._dispatchZoomAction(!1);
  }, t2.prototype._onClickPanel = function(e3) {
    var t3 = this._size, n2 = this._displayables.sliderGroup.transformCoordToLocal(e3.offsetX, e3.offsetY);
    if (!(n2[0] < 0 || n2[0] > t3[0] || n2[1] < 0 || n2[1] > t3[1])) {
      var i2 = this._handleEnds, o2 = (i2[0] + i2[1]) / 2, a2 = this._updateInterval("all", n2[0] - o2);
      this._updateView(), a2 && this._dispatchZoomAction(!1);
    }
  }, t2.prototype._onBrushStart = function(e3) {
    var t3 = e3.offsetX, n2 = e3.offsetY;
    this._brushStart = new _e(t3, n2), this._brushing = !0, this._brushStartTime = +/* @__PURE__ */ new Date();
  }, t2.prototype._onBrushEnd = function(e3) {
    if (this._brushing) {
      var t3 = this._displayables.brushRect;
      if (this._brushing = !1, t3) {
        t3.attr("ignore", !0);
        var n2 = t3.shape;
        if (!(+/* @__PURE__ */ new Date() - this._brushStartTime < 200 && Math.abs(n2.width) < 5)) {
          var i2 = this._getViewExtent(), o2 = [0, 100], a2 = this._handleEnds = [n2.x, n2.x + n2.width], r2 = this.dataZoomModel.findRepresentativeAxisProxy().getMinMaxSpan();
          CS(0, a2, i2, 0, r2.minSpan != null ? Dr(r2.minSpan, o2, i2, !0) : null, r2.maxSpan != null ? Dr(r2.maxSpan, o2, i2, !0) : null), this._range = Or([Dr(a2[0], i2, o2, !0), Dr(a2[1], i2, o2, !0)]), this._updateView(), this._dispatchZoomAction(!1);
        }
      }
    }
  }, t2.prototype._onBrush = function(e3) {
    this._brushing && (le(e3.event), this._updateBrushRect(e3.offsetX, e3.offsetY));
  }, t2.prototype._updateBrushRect = function(e3, t3) {
    var n2 = this._displayables, i2 = this.dataZoomModel, o2 = n2.brushRect;
    o2 || (o2 = n2.brushRect = new Xt({ silent: !0, style: i2.getModel("brushStyle").getItemStyle() }), n2.sliderGroup.add(o2)), o2.attr("ignore", !1);
    var a2 = this._brushStart, r2 = this._displayables.sliderGroup, s2 = r2.transformCoordToLocal(e3, t3), l2 = r2.transformCoordToLocal(a2.x, a2.y), d2 = this._size;
    s2[0] = Math.max(Math.min(d2[0], s2[0]), 0), o2.setShape({ x: l2[0], y: 0, width: s2[0] - l2[0], height: d2[1] });
  }, t2.prototype._dispatchZoomAction = function(e3) {
    var t3 = this._range;
    this.api.dispatchAction({ type: "dataZoom", from: this.uid, dataZoomId: this.dataZoomModel.id, animation: e3 ? qt : null, start: t3[0], end: t3[1] });
  }, t2.prototype._findCoordRect = function() {
    var e3, t3 = nt(this.dataZoomModel).infoList;
    if (!e3 && t3.length) {
      var n2 = t3[0].model.coordinateSystem;
      e3 = n2.getRect && n2.getRect();
    }
    if (!e3) {
      var i2 = this.api.getWidth(), o2 = this.api.getHeight();
      e3 = { x: 0.2 * i2, y: 0.2 * o2, width: 0.6 * i2, height: 0.6 * o2 };
    }
    return e3;
  }, t2.type = "dataZoom.slider", t2;
})(rt2);
function Qt(e2) {
  e2.registerComponentModel(Yt), e2.registerComponentView(Jt), pt(e2);
}
function $t(e2) {
  Y_(Ft), Y_(Qt);
}

export {
  Je,
  zt,
  $t
};
