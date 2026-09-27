import {
  $o,
  Do,
  Fr,
  On,
  Or,
  Tt,
  Vt,
  ds,
  fs,
  hs,
  ht,
  jt,
  on,
  rr,
  vs,
  zn
} from "./chunk-E6JHFIG4.js";

// output/native-current/vendor-echarts-C6uJMnZ9.js
var t = Object.defineProperty, e = (e2, n2, i2) => ((e3, n3, i3) => n3 in e3 ? t(e3, n3, { enumerable: !0, configurable: !0, writable: !0, value: i3 }) : e3[n3] = i3)(e2, typeof n2 != "symbol" ? n2 + "" : n2, i2);
var m = function(t2, e2) {
  return (m = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
    t3.__proto__ = e3;
  } || function(t3, e3) {
    for (var n2 in e3) Object.prototype.hasOwnProperty.call(e3, n2) && (t3[n2] = e3[n2]);
  })(t2, e2);
};
function _(t2, e2) {
  if (typeof e2 != "function" && e2 !== null) throw new TypeError("Class extends value " + String(e2) + " is not a constructor or null");
  function n2() {
    this.constructor = t2;
  }
  m(t2, e2), t2.prototype = e2 === null ? Object.create(e2) : (n2.prototype = e2.prototype, new n2());
}
var x = /* @__PURE__ */ (function() {
  return function() {
    this.firefox = !1, this.ie = !1, this.edge = !1, this.newEdge = !1, this.weChat = !1;
  };
})(), b = new (/* @__PURE__ */ (function() {
  return function() {
    this.browser = new x(), this.node = !1, this.wxa = !1, this.worker = !1, this.svgSupported = !1, this.touchEventsSupported = !1, this.pointerEventsSupported = !1, this.domSupported = !1, this.transformSupported = !1, this.transform3dSupported = !1, this.hasGlobalWindow = typeof window < "u";
  };
})())();
typeof wx == "object" && typeof wx.getSystemInfoSync == "function" ? (b.wxa = !0, b.touchEventsSupported = !0) : typeof document > "u" && typeof self < "u" ? b.worker = !0 : !b.hasGlobalWindow || "Deno" in window || typeof navigator < "u" && typeof navigator.userAgent == "string" && navigator.userAgent.indexOf("Node.js") > -1 ? (b.node = !0, b.svgSupported = !0) : (function(t2, e2) {
  var n2 = e2.browser, i2 = t2.match(/Firefox\/([\d.]+)/), r2 = t2.match(/MSIE\s([\d.]+)/) || t2.match(/Trident\/.+?rv:(([\d.]+))/), o2 = t2.match(/Edge?\/([\d.]+)/), a2 = /micromessenger/i.test(t2);
  if (i2 && (n2.firefox = !0, n2.version = i2[1]), r2 && (n2.ie = !0, n2.version = r2[1]), o2 && (n2.edge = !0, n2.version = o2[1], n2.newEdge = +o2[1].split(".")[0] > 18), a2 && (n2.weChat = !0), e2.svgSupported = typeof SVGRect < "u", e2.touchEventsSupported = "ontouchstart" in window && !n2.ie && !n2.edge, e2.pointerEventsSupported = "onpointerdown" in window && (n2.edge || n2.ie && +n2.version >= 11), e2.domSupported = typeof document < "u") {
    var s2 = document.documentElement.style;
    e2.transform3dSupported = (n2.ie && "transition" in s2 || n2.edge || "WebKitCSSMatrix" in window && "m11" in new WebKitCSSMatrix() || "MozPerspective" in s2) && !("OTransition" in s2), e2.transformSupported = e2.transform3dSupported || n2.ie && +n2.version >= 9;
  }
})(navigator.userAgent, b);
var w = "12px sans-serif", S = (function(t2) {
  var e2 = {};
  if (typeof JSON > "u") return e2;
  for (var n2 = 0; n2 < t2.length; n2++) {
    var i2 = String.fromCharCode(n2 + 32), r2 = (t2.charCodeAt(n2) - 20) / 100;
    e2[i2] = r2;
  }
  return e2;
})("007LLmW'55;N0500LLLLLLLLLL00NNNLzWW\\\\WQb\\0FWLg\\bWb\\WQ\\WrWWQ000CL5LLFLL0LL**F*gLLLL5F0LF\\FFF5.5N"), M = { createCanvas: function() {
  return typeof document < "u" && document.createElement("canvas");
}, measureText: /* @__PURE__ */ (function() {
  var t2, e2;
  return function(n2, i2) {
    if (!t2) {
      var r2 = M.createCanvas();
      t2 = r2 && r2.getContext("2d");
    }
    if (t2) return e2 !== i2 && (e2 = t2.font = i2 || w), t2.measureText(n2);
    n2 = n2 || "";
    var o2 = /((?:\d+)?\.?\d*)px/.exec(i2 = i2 || w), a2 = o2 && +o2[1] || 12, s2 = 0;
    if (i2.indexOf("mono") >= 0) s2 = a2 * n2.length;
    else for (var l2 = 0; l2 < n2.length; l2++) {
      var u2 = S[n2[l2]];
      s2 += u2 == null ? a2 : u2 * a2;
    }
    return { width: s2 };
  };
})(), loadImage: function(t2, e2, n2) {
  var i2 = new Image();
  return i2.onload = e2, i2.onerror = n2, i2.src = t2, i2;
} }, T = j(["Function", "RegExp", "Date", "Error", "CanvasGradient", "CanvasPattern", "Image", "Canvas"], function(t2, e2) {
  return t2["[object " + e2 + "]"] = !0, t2;
}, {}), k = j(["Int8", "Uint8", "Uint8Clamped", "Int16", "Uint16", "Int32", "Uint32", "Float32", "Float64"], function(t2, e2) {
  return t2["[object " + e2 + "Array]"] = !0, t2;
}, {}), C = Object.prototype.toString, I = Array.prototype, D = I.forEach, A = I.filter, L = I.slice, P = I.map, O = function() {
}.constructor, R = O ? O.prototype : null, N = "__proto__", z = 2311;
function B() {
  return z++;
}
function E() {
  for (var t2 = [], e2 = 0; e2 < arguments.length; e2++) t2[e2] = arguments[e2];
}
function F(t2) {
  if (t2 == null || typeof t2 != "object") return t2;
  var e2 = t2, n2 = C.call(t2);
  if (n2 === "[object Array]") {
    if (!_t(t2)) {
      e2 = [];
      for (var i2 = 0, r2 = t2.length; i2 < r2; i2++) e2[i2] = F(t2[i2]);
    }
  } else if (k[n2]) {
    if (!_t(t2)) {
      var o2 = t2.constructor;
      if (o2.from) e2 = o2.from(t2);
      else
        for (e2 = new o2(t2.length), i2 = 0, r2 = t2.length; i2 < r2; i2++) e2[i2] = t2[i2];
    }
  } else if (!T[n2] && !_t(t2) && !st(t2)) for (var a2 in e2 = {}, t2) t2.hasOwnProperty(a2) && a2 !== N && (e2[a2] = F(t2[a2]));
  return e2;
}
function V(t2, e2, n2) {
  if (!rt(e2) || !rt(t2)) return n2 ? F(e2) : t2;
  for (var i2 in e2) if (e2.hasOwnProperty(i2) && i2 !== N) {
    var r2 = t2[i2], o2 = e2[i2];
    !rt(o2) || !rt(r2) || J(o2) || J(r2) || st(o2) || st(r2) || ot(o2) || ot(r2) || _t(o2) || _t(r2) ? !n2 && i2 in t2 || (t2[i2] = F(e2[i2])) : V(r2, o2, n2);
  }
  return t2;
}
function H(t2, e2) {
  if (Object.assign) Object.assign(t2, e2);
  else for (var n2 in e2) e2.hasOwnProperty(n2) && n2 !== N && (t2[n2] = e2[n2]);
  return t2;
}
function W(t2, e2, n2) {
  for (var i2 = K(e2), r2 = 0, o2 = i2.length; r2 < o2; r2++) {
    var a2 = i2[r2];
    (n2 ? e2[a2] != null : t2[a2] == null) && (t2[a2] = e2[a2]);
  }
  return t2;
}
function G(t2, e2) {
  if (t2) {
    if (t2.indexOf) return t2.indexOf(e2);
    for (var n2 = 0, i2 = t2.length; n2 < i2; n2++) if (t2[n2] === e2) return n2;
  }
  return -1;
}
function U(t2, e2, n2) {
  if (t2 = "prototype" in t2 ? t2.prototype : t2, e2 = "prototype" in e2 ? e2.prototype : e2, Object.getOwnPropertyNames) for (var i2 = Object.getOwnPropertyNames(e2), r2 = 0; r2 < i2.length; r2++) {
    var o2 = i2[r2];
    o2 !== "constructor" && (n2 ? e2[o2] != null : t2[o2] == null) && (t2[o2] = e2[o2]);
  }
  else W(t2, e2, n2);
}
function X(t2) {
  return !!t2 && typeof t2 != "string" && typeof t2.length == "number";
}
function Y(t2, e2, n2) {
  if (t2 && e2) if (t2.forEach && t2.forEach === D) t2.forEach(e2, n2);
  else if (t2.length === +t2.length) for (var i2 = 0, r2 = t2.length; i2 < r2; i2++) e2.call(n2, t2[i2], i2, t2);
  else for (var o2 in t2) t2.hasOwnProperty(o2) && e2.call(n2, t2[o2], o2, t2);
}
function Z(t2, e2, n2) {
  if (!t2) return [];
  if (!e2) return dt(t2);
  if (t2.map && t2.map === P) return t2.map(e2, n2);
  for (var i2 = [], r2 = 0, o2 = t2.length; r2 < o2; r2++) i2.push(e2.call(n2, t2[r2], r2, t2));
  return i2;
}
function j(t2, e2, n2, i2) {
  if (t2 && e2) {
    for (var r2 = 0, o2 = t2.length; r2 < o2; r2++) n2 = e2.call(i2, n2, t2[r2], r2, t2);
    return n2;
  }
}
function q(t2, e2, n2) {
  if (!t2) return [];
  if (!e2) return dt(t2);
  if (t2.filter && t2.filter === A) return t2.filter(e2, n2);
  for (var i2 = [], r2 = 0, o2 = t2.length; r2 < o2; r2++) e2.call(n2, t2[r2], r2, t2) && i2.push(t2[r2]);
  return i2;
}
function K(t2) {
  if (!t2) return [];
  if (Object.keys) return Object.keys(t2);
  var e2 = [];
  for (var n2 in t2) t2.hasOwnProperty(n2) && e2.push(n2);
  return e2;
}
var $ = R && tt(R.bind) ? R.call.bind(R.bind) : function(t2, e2) {
  for (var n2 = [], i2 = 2; i2 < arguments.length; i2++) n2[i2 - 2] = arguments[i2];
  return function() {
    return t2.apply(e2, n2.concat(L.call(arguments)));
  };
};
function Q(t2) {
  for (var e2 = [], n2 = 1; n2 < arguments.length; n2++) e2[n2 - 1] = arguments[n2];
  return function() {
    return t2.apply(this, e2.concat(L.call(arguments)));
  };
}
function J(t2) {
  return Array.isArray ? Array.isArray(t2) : C.call(t2) === "[object Array]";
}
function tt(t2) {
  return typeof t2 == "function";
}
function et(t2) {
  return typeof t2 == "string";
}
function nt(t2) {
  return C.call(t2) === "[object String]";
}
function it(t2) {
  return typeof t2 == "number";
}
function rt(t2) {
  var e2 = typeof t2;
  return e2 === "function" || !!t2 && e2 === "object";
}
function ot(t2) {
  return !!T[C.call(t2)];
}
function at(t2) {
  return !!k[C.call(t2)];
}
function st(t2) {
  return typeof t2 == "object" && typeof t2.nodeType == "number" && typeof t2.ownerDocument == "object";
}
function lt(t2) {
  return t2.colorStops != null;
}
function ut(t2) {
  return t2 != t2;
}
function ht2() {
  for (var t2 = [], e2 = 0; e2 < arguments.length; e2++) t2[e2] = arguments[e2];
  for (var n2 = 0, i2 = t2.length; n2 < i2; n2++) if (t2[n2] != null) return t2[n2];
}
function ct(t2, e2) {
  return t2 ?? e2;
}
function pt(t2, e2, n2) {
  return t2 ?? e2 ?? n2;
}
function dt(t2) {
  for (var e2 = [], n2 = 1; n2 < arguments.length; n2++) e2[n2 - 1] = arguments[n2];
  return L.apply(t2, e2);
}
function ft(t2) {
  if (typeof t2 == "number") return [t2, t2, t2, t2];
  var e2 = t2.length;
  return e2 === 2 ? [t2[0], t2[1], t2[0], t2[1]] : e2 === 3 ? [t2[0], t2[1], t2[2], t2[1]] : t2;
}
function gt(t2, e2) {
  if (!t2) throw new Error(e2);
}
function vt(t2) {
  return t2 == null ? null : typeof t2.trim == "function" ? t2.trim() : t2.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
}
var yt = "__ec_primitive__";
function mt(t2) {
  t2[yt] = !0;
}
function _t(t2) {
  return t2[yt];
}
var xt = (function() {
  function t2() {
    this.data = {};
  }
  return t2.prototype.delete = function(t3) {
    var e2 = this.has(t3);
    return e2 && delete this.data[t3], e2;
  }, t2.prototype.has = function(t3) {
    return this.data.hasOwnProperty(t3);
  }, t2.prototype.get = function(t3) {
    return this.data[t3];
  }, t2.prototype.set = function(t3, e2) {
    return this.data[t3] = e2, this;
  }, t2.prototype.keys = function() {
    return K(this.data);
  }, t2.prototype.forEach = function(t3) {
    var e2 = this.data;
    for (var n2 in e2) e2.hasOwnProperty(n2) && t3(e2[n2], n2);
  }, t2;
})(), bt = typeof Map == "function", wt = (function() {
  function t2(e2) {
    var n2 = J(e2);
    this.data = bt ? /* @__PURE__ */ new Map() : new xt();
    var i2 = this;
    function r2(t3, e3) {
      n2 ? i2.set(t3, e3) : i2.set(e3, t3);
    }
    e2 instanceof t2 ? e2.each(r2) : e2 && Y(e2, r2);
  }
  return t2.prototype.hasKey = function(t3) {
    return this.data.has(t3);
  }, t2.prototype.get = function(t3) {
    return this.data.get(t3);
  }, t2.prototype.set = function(t3, e2) {
    return this.data.set(t3, e2), e2;
  }, t2.prototype.each = function(t3, e2) {
    this.data.forEach(function(n2, i2) {
      t3.call(e2, n2, i2);
    });
  }, t2.prototype.keys = function() {
    var t3 = this.data.keys();
    return bt ? Array.from(t3) : t3;
  }, t2.prototype.removeKey = function(t3) {
    this.data.delete(t3);
  }, t2;
})();
function St(t2) {
  return new wt(t2);
}
function Mt(t2, e2) {
  var n2;
  if (Object.create) n2 = Object.create(t2);
  else {
    var i2 = function() {
    };
    i2.prototype = t2, n2 = new i2();
  }
  return e2 && H(n2, e2), n2;
}
function Tt2(t2) {
  var e2 = t2.style;
  e2.webkitUserSelect = "none", e2.userSelect = "none", e2.webkitTapHighlightColor = "rgba(0,0,0,0)", e2["-webkit-touch-callout"] = "none";
}
function kt(t2, e2) {
  return t2.hasOwnProperty(e2);
}
function Ct() {
}
var It = 180 / Math.PI;
function Dt(t2, e2) {
  return t2 == null && (t2 = 0), e2 == null && (e2 = 0), [t2, e2];
}
function At(t2) {
  return [t2[0], t2[1]];
}
function Lt(t2, e2, n2) {
  return t2[0] = e2[0] + n2[0], t2[1] = e2[1] + n2[1], t2;
}
function Pt(t2, e2, n2) {
  return t2[0] = e2[0] - n2[0], t2[1] = e2[1] - n2[1], t2;
}
function Ot(t2, e2, n2) {
  return t2[0] = e2[0] * n2, t2[1] = e2[1] * n2, t2;
}
function Rt(t2, e2) {
  var n2 = (function(t3) {
    return Math.sqrt((function(t4) {
      return t4[0] * t4[0] + t4[1] * t4[1];
    })(t3));
  })(e2);
  return n2 === 0 ? (t2[0] = 0, t2[1] = 0) : (t2[0] = e2[0] / n2, t2[1] = e2[1] / n2), t2;
}
function Nt(t2, e2) {
  return Math.sqrt((t2[0] - e2[0]) * (t2[0] - e2[0]) + (t2[1] - e2[1]) * (t2[1] - e2[1]));
}
var zt = Nt, Bt = function(t2, e2) {
  return (t2[0] - e2[0]) * (t2[0] - e2[0]) + (t2[1] - e2[1]) * (t2[1] - e2[1]);
};
function Et(t2, e2, n2) {
  var i2 = e2[0], r2 = e2[1];
  return t2[0] = n2[0] * i2 + n2[2] * r2 + n2[4], t2[1] = n2[1] * i2 + n2[3] * r2 + n2[5], t2;
}
function Ft(t2, e2, n2) {
  return t2[0] = Math.min(e2[0], n2[0]), t2[1] = Math.min(e2[1], n2[1]), t2;
}
function Vt2(t2, e2, n2) {
  return t2[0] = Math.max(e2[0], n2[0]), t2[1] = Math.max(e2[1], n2[1]), t2;
}
var Ht = /* @__PURE__ */ (function() {
  return function(t2, e2) {
    this.target = t2, this.topTarget = e2 && e2.topTarget;
  };
})(), Wt = (function() {
  function t2(t3) {
    this.handler = t3, t3.on("mousedown", this._dragStart, this), t3.on("mousemove", this._drag, this), t3.on("mouseup", this._dragEnd, this);
  }
  return t2.prototype._dragStart = function(t3) {
    for (var e2 = t3.target; e2 && !e2.draggable; ) e2 = e2.parent || e2.__hostTarget;
    e2 && (this._draggingTarget = e2, e2.dragging = !0, this._x = t3.offsetX, this._y = t3.offsetY, this.handler.dispatchToElement(new Ht(e2, t3), "dragstart", t3.event));
  }, t2.prototype._drag = function(t3) {
    var e2 = this._draggingTarget;
    if (e2) {
      var n2 = t3.offsetX, i2 = t3.offsetY, r2 = n2 - this._x, o2 = i2 - this._y;
      this._x = n2, this._y = i2, e2.drift(r2, o2, t3), this.handler.dispatchToElement(new Ht(e2, t3), "drag", t3.event);
      var a2 = this.handler.findHover(n2, i2, e2).target, s2 = this._dropTarget;
      this._dropTarget = a2, e2 !== a2 && (s2 && a2 !== s2 && this.handler.dispatchToElement(new Ht(s2, t3), "dragleave", t3.event), a2 && a2 !== s2 && this.handler.dispatchToElement(new Ht(a2, t3), "dragenter", t3.event));
    }
  }, t2.prototype._dragEnd = function(t3) {
    var e2 = this._draggingTarget;
    e2 && (e2.dragging = !1), this.handler.dispatchToElement(new Ht(e2, t3), "dragend", t3.event), this._dropTarget && this.handler.dispatchToElement(new Ht(this._dropTarget, t3), "drop", t3.event), this._draggingTarget = null, this._dropTarget = null;
  }, t2;
})(), Gt = (function() {
  function t2(t3) {
    t3 && (this._$eventProcessor = t3);
  }
  return t2.prototype.on = function(t3, e2, n2, i2) {
    this._$handlers || (this._$handlers = {});
    var r2 = this._$handlers;
    if (typeof e2 == "function" && (i2 = n2, n2 = e2, e2 = null), !n2 || !t3) return this;
    var o2 = this._$eventProcessor;
    e2 != null && o2 && o2.normalizeQuery && (e2 = o2.normalizeQuery(e2)), r2[t3] || (r2[t3] = []);
    for (var a2 = 0; a2 < r2[t3].length; a2++) if (r2[t3][a2].h === n2) return this;
    var s2 = { h: n2, query: e2, ctx: i2 || this, callAtLast: n2.zrEventfulCallAtLast }, l2 = r2[t3].length - 1, u2 = r2[t3][l2];
    return u2 && u2.callAtLast ? r2[t3].splice(l2, 0, s2) : r2[t3].push(s2), this;
  }, t2.prototype.isSilent = function(t3) {
    var e2 = this._$handlers;
    return !e2 || !e2[t3] || !e2[t3].length;
  }, t2.prototype.off = function(t3, e2) {
    var n2 = this._$handlers;
    if (!n2) return this;
    if (!t3) return this._$handlers = {}, this;
    if (e2) {
      if (n2[t3]) {
        for (var i2 = [], r2 = 0, o2 = n2[t3].length; r2 < o2; r2++) n2[t3][r2].h !== e2 && i2.push(n2[t3][r2]);
        n2[t3] = i2;
      }
      n2[t3] && n2[t3].length === 0 && delete n2[t3];
    } else delete n2[t3];
    return this;
  }, t2.prototype.trigger = function(t3) {
    for (var e2 = [], n2 = 1; n2 < arguments.length; n2++) e2[n2 - 1] = arguments[n2];
    if (!this._$handlers) return this;
    var i2 = this._$handlers[t3], r2 = this._$eventProcessor;
    if (i2) for (var o2 = e2.length, a2 = i2.length, s2 = 0; s2 < a2; s2++) {
      var l2 = i2[s2];
      if (!r2 || !r2.filter || l2.query == null || r2.filter(t3, l2.query)) switch (o2) {
        case 0:
          l2.h.call(l2.ctx);
          break;
        case 1:
          l2.h.call(l2.ctx, e2[0]);
          break;
        case 2:
          l2.h.call(l2.ctx, e2[0], e2[1]);
          break;
        default:
          l2.h.apply(l2.ctx, e2);
      }
    }
    return r2 && r2.afterTrigger && r2.afterTrigger(t3), this;
  }, t2.prototype.triggerWithContext = function(t3) {
    for (var e2 = [], n2 = 1; n2 < arguments.length; n2++) e2[n2 - 1] = arguments[n2];
    if (!this._$handlers) return this;
    var i2 = this._$handlers[t3], r2 = this._$eventProcessor;
    if (i2) for (var o2 = e2.length, a2 = e2[o2 - 1], s2 = i2.length, l2 = 0; l2 < s2; l2++) {
      var u2 = i2[l2];
      if (!r2 || !r2.filter || u2.query == null || r2.filter(t3, u2.query)) switch (o2) {
        case 0:
          u2.h.call(a2);
          break;
        case 1:
          u2.h.call(a2, e2[0]);
          break;
        case 2:
          u2.h.call(a2, e2[0], e2[1]);
          break;
        default:
          u2.h.apply(a2, e2.slice(1, o2 - 1));
      }
    }
    return r2 && r2.afterTrigger && r2.afterTrigger(t3), this;
  }, t2;
})(), Ut = Math.log(2);
function Xt(t2, e2, n2, i2, r2, o2) {
  var a2 = i2 + "-" + r2, s2 = t2.length;
  if (o2.hasOwnProperty(a2)) return o2[a2];
  if (e2 === 1) {
    var l2 = Math.round(Math.log((1 << s2) - 1 & ~r2) / Ut);
    return t2[n2][l2];
  }
  for (var u2 = i2 | 1 << n2, h2 = n2 + 1; i2 & 1 << h2; ) h2++;
  for (var c2 = 0, p2 = 0, d2 = 0; p2 < s2; p2++) {
    var f2 = 1 << p2;
    f2 & r2 || (c2 += (d2 % 2 ? -1 : 1) * t2[n2][p2] * Xt(t2, e2 - 1, h2, u2, r2 | f2, o2), d2++);
  }
  return o2[a2] = c2, c2;
}
function Yt(t2, e2) {
  var n2 = [[t2[0], t2[1], 1, 0, 0, 0, -e2[0] * t2[0], -e2[0] * t2[1]], [0, 0, 0, t2[0], t2[1], 1, -e2[1] * t2[0], -e2[1] * t2[1]], [t2[2], t2[3], 1, 0, 0, 0, -e2[2] * t2[2], -e2[2] * t2[3]], [0, 0, 0, t2[2], t2[3], 1, -e2[3] * t2[2], -e2[3] * t2[3]], [t2[4], t2[5], 1, 0, 0, 0, -e2[4] * t2[4], -e2[4] * t2[5]], [0, 0, 0, t2[4], t2[5], 1, -e2[5] * t2[4], -e2[5] * t2[5]], [t2[6], t2[7], 1, 0, 0, 0, -e2[6] * t2[6], -e2[6] * t2[7]], [0, 0, 0, t2[6], t2[7], 1, -e2[7] * t2[6], -e2[7] * t2[7]]], i2 = {}, r2 = Xt(n2, 8, 0, 0, 0, i2);
  if (r2 !== 0) {
    for (var o2 = [], a2 = 0; a2 < 8; a2++) for (var s2 = 0; s2 < 8; s2++) o2[s2] == null && (o2[s2] = 0), o2[s2] += ((a2 + s2) % 2 ? -1 : 1) * Xt(n2, 7, a2 === 0 ? 1 : 0, 1 << a2, 1 << s2, i2) / r2 * e2[a2];
    return function(t3, e3, n3) {
      var i3 = e3 * o2[6] + n3 * o2[7] + 1;
      t3[0] = (e3 * o2[0] + n3 * o2[1] + o2[2]) / i3, t3[1] = (e3 * o2[3] + n3 * o2[4] + o2[5]) / i3;
    };
  }
}
var Zt = "___zrEVENTSAVED", jt2 = [];
function qt(t2, e2, n2, i2, r2) {
  if (e2.getBoundingClientRect && b.domSupported && !Kt(e2)) {
    var o2 = e2[Zt] || (e2[Zt] = {}), a2 = (function(t3, e3) {
      var n3 = e3.markers;
      if (n3) return n3;
      n3 = e3.markers = [];
      for (var i3 = ["left", "right"], r3 = ["top", "bottom"], o3 = 0; o3 < 4; o3++) {
        var a3 = document.createElement("div"), s3 = o3 % 2, l2 = (o3 >> 1) % 2;
        a3.style.cssText = ["position: absolute", "visibility: hidden", "padding: 0", "margin: 0", "border-width: 0", "user-select: none", "width:0", "height:0", i3[s3] + ":0", r3[l2] + ":0", i3[1 - s3] + ":auto", r3[1 - l2] + ":auto", ""].join("!important;"), t3.appendChild(a3), n3.push(a3);
      }
      return e3.clearMarkers = function() {
        Y(n3, function(t4) {
          t4.parentNode && t4.parentNode.removeChild(t4);
        });
      }, n3;
    })(e2, o2), s2 = (function(t3, e3, n3) {
      for (var i3 = n3 ? "invTrans" : "trans", r3 = e3[i3], o3 = e3.srcCoords, a3 = [], s3 = [], l2 = !0, u2 = 0; u2 < 4; u2++) {
        var h2 = t3[u2].getBoundingClientRect(), c2 = 2 * u2, p2 = h2.left, d2 = h2.top;
        a3.push(p2, d2), l2 = l2 && o3 && p2 === o3[c2] && d2 === o3[c2 + 1], s3.push(t3[u2].offsetLeft, t3[u2].offsetTop);
      }
      return l2 && r3 ? r3 : (e3.srcCoords = a3, e3[i3] = n3 ? Yt(s3, a3) : Yt(a3, s3));
    })(a2, o2, r2);
    if (s2) return s2(t2, n2, i2), !0;
  }
  return !1;
}
function Kt(t2) {
  return t2.nodeName.toUpperCase() === "CANVAS";
}
var $t = /([&<>"'])/g, Qt = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
function Jt(t2) {
  return t2 == null ? "" : (t2 + "").replace($t, function(t3, e2) {
    return Qt[e2];
  });
}
var te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, ee = [], ne = b.browser.firefox && +b.browser.version.split(".")[0] < 39;
function ie(t2, e2, n2, i2) {
  return n2 = n2 || {}, i2 ? re(t2, e2, n2) : ne && e2.layerX != null && e2.layerX !== e2.offsetX ? (n2.zrX = e2.layerX, n2.zrY = e2.layerY) : e2.offsetX != null ? (n2.zrX = e2.offsetX, n2.zrY = e2.offsetY) : re(t2, e2, n2), n2;
}
function re(t2, e2, n2) {
  if (b.domSupported && t2.getBoundingClientRect) {
    var i2 = e2.clientX, r2 = e2.clientY;
    if (Kt(t2)) {
      var o2 = t2.getBoundingClientRect();
      return n2.zrX = i2 - o2.left, void (n2.zrY = r2 - o2.top);
    }
    if (qt(ee, t2, i2, r2)) return n2.zrX = ee[0], void (n2.zrY = ee[1]);
  }
  n2.zrX = n2.zrY = 0;
}
function oe(t2) {
  return t2 || window.event;
}
function ae(t2, e2, n2) {
  if ((e2 = oe(e2)).zrX != null) return e2;
  var i2 = e2.type;
  if (i2 && i2.indexOf("touch") >= 0) {
    var r2 = i2 !== "touchend" ? e2.targetTouches[0] : e2.changedTouches[0];
    r2 && ie(t2, r2, e2, n2);
  } else {
    ie(t2, e2, e2, n2);
    var o2 = (function(t3) {
      var e3 = t3.wheelDelta;
      if (e3) return e3;
      var n3 = t3.deltaX, i3 = t3.deltaY;
      return n3 == null || i3 == null ? e3 : 3 * Math.abs(i3 !== 0 ? i3 : n3) * (i3 > 0 ? -1 : i3 < 0 ? 1 : n3 > 0 ? -1 : 1);
    })(e2);
    e2.zrDelta = o2 ? o2 / 120 : -(e2.detail || 0) / 3;
  }
  var a2 = e2.button;
  return e2.which == null && a2 !== void 0 && te.test(e2.type) && (e2.which = 1 & a2 ? 1 : 2 & a2 ? 3 : 4 & a2 ? 2 : 0), e2;
}
function se(t2, e2, n2, i2) {
  t2.removeEventListener(e2, n2, i2);
}
var le = function(t2) {
  t2.preventDefault(), t2.stopPropagation(), t2.cancelBubble = !0;
};
function ue(t2) {
  return t2.which === 2 || t2.which === 3;
}
var he = (function() {
  function t2() {
    this._track = [];
  }
  return t2.prototype.recognize = function(t3, e2, n2) {
    return this._doTrack(t3, e2, n2), this._recognize(t3);
  }, t2.prototype.clear = function() {
    return this._track.length = 0, this;
  }, t2.prototype._doTrack = function(t3, e2, n2) {
    var i2 = t3.touches;
    if (i2) {
      for (var r2 = { points: [], touches: [], target: e2, event: t3 }, o2 = 0, a2 = i2.length; o2 < a2; o2++) {
        var s2 = i2[o2], l2 = ie(n2, s2, {});
        r2.points.push([l2.zrX, l2.zrY]), r2.touches.push(s2);
      }
      this._track.push(r2);
    }
  }, t2.prototype._recognize = function(t3) {
    for (var e2 in pe) if (pe.hasOwnProperty(e2)) {
      var n2 = pe[e2](this._track, t3);
      if (n2) return n2;
    }
  }, t2;
})();
function ce(t2) {
  var e2 = t2[1][0] - t2[0][0], n2 = t2[1][1] - t2[0][1];
  return Math.sqrt(e2 * e2 + n2 * n2);
}
var pe = { pinch: function(t2, e2) {
  var n2 = t2.length;
  if (n2) {
    var i2, r2 = (t2[n2 - 1] || {}).points, o2 = (t2[n2 - 2] || {}).points || r2;
    if (o2 && o2.length > 1 && r2 && r2.length > 1) {
      var a2 = ce(r2) / ce(o2);
      !isFinite(a2) && (a2 = 1), e2.pinchScale = a2;
      var s2 = [((i2 = r2)[0][0] + i2[1][0]) / 2, (i2[0][1] + i2[1][1]) / 2];
      return e2.pinchX = s2[0], e2.pinchY = s2[1], { type: "pinch", target: t2[0].target, event: e2 };
    }
  }
} };
function de(t2) {
  return t2[0] = 1, t2[1] = 0, t2[2] = 0, t2[3] = 1, t2[4] = 0, t2[5] = 0, t2;
}
function fe(t2, e2) {
  return t2[0] = e2[0], t2[1] = e2[1], t2[2] = e2[2], t2[3] = e2[3], t2[4] = e2[4], t2[5] = e2[5], t2;
}
function ge(t2, e2, n2) {
  var i2 = e2[0] * n2[0] + e2[2] * n2[1], r2 = e2[1] * n2[0] + e2[3] * n2[1], o2 = e2[0] * n2[2] + e2[2] * n2[3], a2 = e2[1] * n2[2] + e2[3] * n2[3], s2 = e2[0] * n2[4] + e2[2] * n2[5] + e2[4], l2 = e2[1] * n2[4] + e2[3] * n2[5] + e2[5];
  return t2[0] = i2, t2[1] = r2, t2[2] = o2, t2[3] = a2, t2[4] = s2, t2[5] = l2, t2;
}
function ve(t2, e2, n2) {
  return t2[0] = e2[0], t2[1] = e2[1], t2[2] = e2[2], t2[3] = e2[3], t2[4] = e2[4] + n2[0], t2[5] = e2[5] + n2[1], t2;
}
function ye(t2, e2, n2, i2) {
  i2 === void 0 && (i2 = [0, 0]);
  var r2 = e2[0], o2 = e2[2], a2 = e2[4], s2 = e2[1], l2 = e2[3], u2 = e2[5], h2 = Math.sin(n2), c2 = Math.cos(n2);
  return t2[0] = r2 * c2 + s2 * h2, t2[1] = -r2 * h2 + s2 * c2, t2[2] = o2 * c2 + l2 * h2, t2[3] = -o2 * h2 + c2 * l2, t2[4] = c2 * (a2 - i2[0]) + h2 * (u2 - i2[1]) + i2[0], t2[5] = c2 * (u2 - i2[1]) - h2 * (a2 - i2[0]) + i2[1], t2;
}
function me(t2, e2) {
  var n2 = e2[0], i2 = e2[2], r2 = e2[4], o2 = e2[1], a2 = e2[3], s2 = e2[5], l2 = n2 * a2 - o2 * i2;
  return l2 ? (l2 = 1 / l2, t2[0] = a2 * l2, t2[1] = -o2 * l2, t2[2] = -i2 * l2, t2[3] = n2 * l2, t2[4] = (i2 * s2 - a2 * r2) * l2, t2[5] = (o2 * r2 - n2 * s2) * l2, t2) : null;
}
var _e = (function() {
  function t2(t3, e2) {
    this.x = t3 || 0, this.y = e2 || 0;
  }
  return t2.prototype.copy = function(t3) {
    return this.x = t3.x, this.y = t3.y, this;
  }, t2.prototype.clone = function() {
    return new t2(this.x, this.y);
  }, t2.prototype.set = function(t3, e2) {
    return this.x = t3, this.y = e2, this;
  }, t2.prototype.equal = function(t3) {
    return t3.x === this.x && t3.y === this.y;
  }, t2.prototype.add = function(t3) {
    return this.x += t3.x, this.y += t3.y, this;
  }, t2.prototype.scale = function(t3) {
    this.x *= t3, this.y *= t3;
  }, t2.prototype.scaleAndAdd = function(t3, e2) {
    this.x += t3.x * e2, this.y += t3.y * e2;
  }, t2.prototype.sub = function(t3) {
    return this.x -= t3.x, this.y -= t3.y, this;
  }, t2.prototype.dot = function(t3) {
    return this.x * t3.x + this.y * t3.y;
  }, t2.prototype.len = function() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }, t2.prototype.lenSquare = function() {
    return this.x * this.x + this.y * this.y;
  }, t2.prototype.normalize = function() {
    var t3 = this.len();
    return this.x /= t3, this.y /= t3, this;
  }, t2.prototype.distance = function(t3) {
    var e2 = this.x - t3.x, n2 = this.y - t3.y;
    return Math.sqrt(e2 * e2 + n2 * n2);
  }, t2.prototype.distanceSquare = function(t3) {
    var e2 = this.x - t3.x, n2 = this.y - t3.y;
    return e2 * e2 + n2 * n2;
  }, t2.prototype.negate = function() {
    return this.x = -this.x, this.y = -this.y, this;
  }, t2.prototype.transform = function(t3) {
    if (t3) {
      var e2 = this.x, n2 = this.y;
      return this.x = t3[0] * e2 + t3[2] * n2 + t3[4], this.y = t3[1] * e2 + t3[3] * n2 + t3[5], this;
    }
  }, t2.prototype.toArray = function(t3) {
    return t3[0] = this.x, t3[1] = this.y, t3;
  }, t2.prototype.fromArray = function(t3) {
    this.x = t3[0], this.y = t3[1];
  }, t2.set = function(t3, e2, n2) {
    t3.x = e2, t3.y = n2;
  }, t2.copy = function(t3, e2) {
    t3.x = e2.x, t3.y = e2.y;
  }, t2.len = function(t3) {
    return Math.sqrt(t3.x * t3.x + t3.y * t3.y);
  }, t2.lenSquare = function(t3) {
    return t3.x * t3.x + t3.y * t3.y;
  }, t2.dot = function(t3, e2) {
    return t3.x * e2.x + t3.y * e2.y;
  }, t2.add = function(t3, e2, n2) {
    t3.x = e2.x + n2.x, t3.y = e2.y + n2.y;
  }, t2.sub = function(t3, e2, n2) {
    t3.x = e2.x - n2.x, t3.y = e2.y - n2.y;
  }, t2.scale = function(t3, e2, n2) {
    t3.x = e2.x * n2, t3.y = e2.y * n2;
  }, t2.scaleAndAdd = function(t3, e2, n2, i2) {
    t3.x = e2.x + n2.x * i2, t3.y = e2.y + n2.y * i2;
  }, t2.lerp = function(t3, e2, n2, i2) {
    var r2 = 1 - i2;
    t3.x = r2 * e2.x + i2 * n2.x, t3.y = r2 * e2.y + i2 * n2.y;
  }, t2;
})(), xe = Math.min, be = Math.max, we = Math.abs, Se = ["x", "y"], Me = ["width", "height"], Te = new _e(), ke = new _e(), Ce = new _e(), Ie = new _e(), De = Be(), Ae = De.minTv, Le = De.maxTv, Pe = [0, 0], Oe = (function() {
  function t2(e2, n2, i2, r2) {
    t2.set(this, e2, n2, i2, r2);
  }
  return t2.set = function(t3, e2, n2, i2, r2) {
    return i2 < 0 && (e2 += i2, i2 = -i2), r2 < 0 && (n2 += r2, r2 = -r2), t3.x = e2, t3.y = n2, t3.width = i2, t3.height = r2, t3;
  }, t2.prototype.union = function(t3) {
    var e2 = xe(t3.x, this.x), n2 = xe(t3.y, this.y);
    isFinite(this.x) && isFinite(this.width) ? this.width = be(t3.x + t3.width, this.x + this.width) - e2 : this.width = t3.width, isFinite(this.y) && isFinite(this.height) ? this.height = be(t3.y + t3.height, this.y + this.height) - n2 : this.height = t3.height, this.x = e2, this.y = n2;
  }, t2.prototype.applyTransform = function(e2) {
    t2.applyTransform(this, this, e2);
  }, t2.prototype.calculateTransform = function(t3) {
    var e2 = this, n2 = t3.width / e2.width, i2 = t3.height / e2.height, r2 = [1, 0, 0, 1, 0, 0];
    return ve(r2, r2, [-e2.x, -e2.y]), (function(t4, e3, n3) {
      var i3 = n3[0], r3 = n3[1];
      t4[0] = e3[0] * i3, t4[1] = e3[1] * r3, t4[2] = e3[2] * i3, t4[3] = e3[3] * r3, t4[4] = e3[4] * i3, t4[5] = e3[5] * r3;
    })(r2, r2, [n2, i2]), ve(r2, r2, [t3.x, t3.y]), r2;
  }, t2.prototype.intersect = function(e2, n2, i2) {
    return t2.intersect(this, e2, n2, i2);
  }, t2.intersect = function(e2, n2, i2, r2) {
    i2 && _e.set(i2, 0, 0);
    var o2 = r2 && r2.outIntersectRect || null, a2 = r2 && r2.clamp;
    if (o2 && (o2.x = o2.y = o2.width = o2.height = NaN), !e2 || !n2) return !1;
    e2 instanceof t2 || (e2 = t2.set(Re, e2.x, e2.y, e2.width, e2.height)), n2 instanceof t2 || (n2 = t2.set(Ne, n2.x, n2.y, n2.width, n2.height));
    var s2 = !!i2;
    De.reset(r2, s2);
    var l2 = De.touchThreshold, u2 = e2.x + l2, h2 = e2.x + e2.width - l2, c2 = e2.y + l2, p2 = e2.y + e2.height - l2, d2 = n2.x + l2, f2 = n2.x + n2.width - l2, g2 = n2.y + l2, v2 = n2.y + n2.height - l2;
    if (u2 > h2 || c2 > p2 || d2 > f2 || g2 > v2) return !1;
    var y2 = !(h2 < d2 || f2 < u2 || p2 < g2 || v2 < c2);
    return (s2 || o2) && (Pe[0] = 1 / 0, Pe[1] = 0, ze(u2, h2, d2, f2, 0, s2, o2, a2), ze(c2, p2, g2, v2, 1, s2, o2, a2), s2 && _e.copy(i2, y2 ? De.useDir ? De.dirMinTv : Ae : Le)), y2;
  }, t2.contain = function(t3, e2, n2) {
    return e2 >= t3.x && e2 <= t3.x + t3.width && n2 >= t3.y && n2 <= t3.y + t3.height;
  }, t2.prototype.contain = function(e2, n2) {
    return t2.contain(this, e2, n2);
  }, t2.prototype.clone = function() {
    return new t2(this.x, this.y, this.width, this.height);
  }, t2.prototype.copy = function(e2) {
    t2.copy(this, e2);
  }, t2.prototype.plain = function() {
    return { x: this.x, y: this.y, width: this.width, height: this.height };
  }, t2.prototype.isFinite = function() {
    return isFinite(this.x) && isFinite(this.y) && isFinite(this.width) && isFinite(this.height);
  }, t2.prototype.isZero = function() {
    return this.width === 0 || this.height === 0;
  }, t2.create = function(e2) {
    return new t2(e2.x, e2.y, e2.width, e2.height);
  }, t2.copy = function(t3, e2) {
    return t3.x = e2.x, t3.y = e2.y, t3.width = e2.width, t3.height = e2.height, t3;
  }, t2.applyTransform = function(e2, n2, i2) {
    if (i2) {
      if (i2[1] < 1e-5 && i2[1] > -1e-5 && i2[2] < 1e-5 && i2[2] > -1e-5) {
        var r2 = i2[0], o2 = i2[3], a2 = i2[4], s2 = i2[5];
        return e2.x = n2.x * r2 + a2, e2.y = n2.y * o2 + s2, e2.width = n2.width * r2, e2.height = n2.height * o2, e2.width < 0 && (e2.x += e2.width, e2.width = -e2.width), void (e2.height < 0 && (e2.y += e2.height, e2.height = -e2.height));
      }
      Te.x = Ce.x = n2.x, Te.y = Ie.y = n2.y, ke.x = Ie.x = n2.x + n2.width, ke.y = Ce.y = n2.y + n2.height, Te.transform(i2), Ie.transform(i2), ke.transform(i2), Ce.transform(i2), e2.x = xe(Te.x, ke.x, Ce.x, Ie.x), e2.y = xe(Te.y, ke.y, Ce.y, Ie.y);
      var l2 = be(Te.x, ke.x, Ce.x, Ie.x), u2 = be(Te.y, ke.y, Ce.y, Ie.y);
      e2.width = l2 - e2.x, e2.height = u2 - e2.y;
    } else e2 !== n2 && t2.copy(e2, n2);
  }, t2;
})(), Re = new Oe(0, 0, 0, 0), Ne = new Oe(0, 0, 0, 0);
function ze(t2, e2, n2, i2, r2, o2, a2, s2) {
  var l2 = we(e2 - n2), u2 = we(i2 - t2), h2 = xe(l2, u2), c2 = Se[r2], p2 = Se[1 - r2], d2 = Me[r2];
  e2 < n2 || i2 < t2 ? l2 < u2 ? (o2 && (Le[c2] = -l2), s2 && (a2[c2] = e2, a2[d2] = 0)) : (o2 && (Le[c2] = u2), s2 && (a2[c2] = t2, a2[d2] = 0)) : (a2 && (a2[c2] = be(t2, n2), a2[d2] = xe(e2, i2) - a2[c2]), o2 && (h2 < Pe[0] || De.useDir) && (Pe[0] = xe(h2, Pe[0]), (l2 < u2 || !De.bidirectional) && (Ae[c2] = l2, Ae[p2] = 0, De.useDir && De.calcDirMTV()), (l2 >= u2 || !De.bidirectional) && (Ae[c2] = -u2, Ae[p2] = 0, De.useDir && De.calcDirMTV())));
}
function Be() {
  var t2 = 0, e2 = new _e(), n2 = new _e(), i2 = { minTv: new _e(), maxTv: new _e(), useDir: !1, dirMinTv: new _e(), touchThreshold: 0, bidirectional: !0, negativeSize: !1, reset: function(r3, o2) {
    i2.touchThreshold = 0, r3 && r3.touchThreshold != null && (i2.touchThreshold = be(0, r3.touchThreshold)), i2.negativeSize = !1, o2 && (i2.minTv.set(1 / 0, 1 / 0), i2.maxTv.set(0, 0), i2.useDir = !1, r3 && r3.direction != null && (i2.useDir = !0, i2.dirMinTv.copy(i2.minTv), n2.copy(i2.minTv), t2 = r3.direction, i2.bidirectional = r3.bidirectional == null || !!r3.bidirectional, i2.bidirectional || e2.set(Math.cos(t2), Math.sin(t2))));
  }, calcDirMTV: function() {
    var o2 = i2.minTv, a2 = i2.dirMinTv, s2 = o2.y * o2.y + o2.x * o2.x, l2 = Math.sin(t2), u2 = Math.cos(t2), h2 = l2 * o2.y + u2 * o2.x;
    r2(h2) ? r2(o2.x) && r2(o2.y) && a2.set(0, 0) : (n2.x = s2 * u2 / h2, n2.y = s2 * l2 / h2, r2(n2.x) && r2(n2.y) ? a2.set(0, 0) : (i2.bidirectional || e2.dot(n2) > 0) && n2.len() < a2.len() && a2.copy(n2));
  } };
  function r2(t3) {
    return we(t3) < 1e-10;
  }
  return i2;
}
var Ee = "silent";
function Fe() {
  le(this.event);
}
var Ve = (function(t2) {
  function e2() {
    var e3 = t2 !== null && t2.apply(this, arguments) || this;
    return e3.handler = null, e3;
  }
  return _(e2, t2), e2.prototype.dispose = function() {
  }, e2.prototype.setCursor = function() {
  }, e2;
})(Gt), He = /* @__PURE__ */ (function() {
  return function(t2, e2) {
    this.x = t2, this.y = e2;
  };
})(), We = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"], Ge = new Oe(0, 0, 0, 0), Ue = (function(t2) {
  function e2(e3, n2, i2, r2, o2) {
    var a2 = t2.call(this) || this;
    return a2._hovered = new He(0, 0), a2.storage = e3, a2.painter = n2, a2.painterRoot = r2, a2._pointerSize = o2, i2 = i2 || new Ve(), a2.proxy = null, a2.setHandlerProxy(i2), a2._draggingMgr = new Wt(a2), a2;
  }
  return _(e2, t2), e2.prototype.setHandlerProxy = function(t3) {
    this.proxy && this.proxy.dispose(), t3 && (Y(We, function(e3) {
      t3.on && t3.on(e3, this[e3], this);
    }, this), t3.handler = this), this.proxy = t3;
  }, e2.prototype.mousemove = function(t3) {
    var e3 = t3.zrX, n2 = t3.zrY, i2 = Ze(this, e3, n2), r2 = this._hovered, o2 = r2.target;
    o2 && !o2.__zr && (o2 = (r2 = this.findHover(r2.x, r2.y)).target);
    var a2 = this._hovered = i2 ? new He(e3, n2) : this.findHover(e3, n2), s2 = a2.target, l2 = this.proxy;
    l2.setCursor && l2.setCursor(s2 ? s2.cursor : "default"), o2 && s2 !== o2 && this.dispatchToElement(r2, "mouseout", t3), this.dispatchToElement(a2, "mousemove", t3), s2 && s2 !== o2 && this.dispatchToElement(a2, "mouseover", t3);
  }, e2.prototype.mouseout = function(t3) {
    var e3 = t3.zrEventControl;
    e3 !== "only_globalout" && this.dispatchToElement(this._hovered, "mouseout", t3), e3 !== "no_globalout" && this.trigger("globalout", { type: "globalout", event: t3 });
  }, e2.prototype.resize = function() {
    this._hovered = new He(0, 0);
  }, e2.prototype.dispatch = function(t3, e3) {
    var n2 = this[t3];
    n2 && n2.call(this, e3);
  }, e2.prototype.dispose = function() {
    this.proxy.dispose(), this.storage = null, this.proxy = null, this.painter = null;
  }, e2.prototype.setCursorStyle = function(t3) {
    var e3 = this.proxy;
    e3.setCursor && e3.setCursor(t3);
  }, e2.prototype.dispatchToElement = function(t3, e3, n2) {
    var i2 = (t3 = t3 || {}).target;
    if (!i2 || !i2.silent) {
      for (var r2 = "on" + e3, o2 = (function(t4, e4, n3) {
        return { type: t4, event: n3, target: e4.target, topTarget: e4.topTarget, cancelBubble: !1, offsetX: n3.zrX, offsetY: n3.zrY, gestureEvent: n3.gestureEvent, pinchX: n3.pinchX, pinchY: n3.pinchY, pinchScale: n3.pinchScale, wheelDelta: n3.zrDelta, zrByTouch: n3.zrByTouch, which: n3.which, stop: Fe };
      })(e3, t3, n2); i2 && (i2[r2] && (o2.cancelBubble = !!i2[r2].call(i2, o2)), i2.trigger(e3, o2), i2 = i2.__hostTarget ? i2.__hostTarget : i2.parent, !o2.cancelBubble); ) ;
      o2.cancelBubble || (this.trigger(e3, o2), this.painter && this.painter.eachOtherLayer && this.painter.eachOtherLayer(function(t4) {
        typeof t4[r2] == "function" && t4[r2].call(t4, o2), t4.trigger && t4.trigger(e3, o2);
      }));
    }
  }, e2.prototype.findHover = function(t3, e3, n2) {
    var i2 = this.storage.getDisplayList(), r2 = new He(t3, e3);
    if (Ye(i2, r2, t3, e3, n2), this._pointerSize && !r2.target) {
      for (var o2 = [], a2 = this._pointerSize, s2 = a2 / 2, l2 = new Oe(t3 - s2, e3 - s2, a2, a2), u2 = i2.length - 1; u2 >= 0; u2--) {
        var h2 = i2[u2];
        h2 === n2 || h2.ignore || h2.ignoreCoarsePointer || h2.parent && h2.parent.ignoreCoarsePointer || (Ge.copy(h2.getBoundingRect()), h2.transform && Ge.applyTransform(h2.transform), Ge.intersect(l2) && o2.push(h2));
      }
      if (o2.length) {
        for (var c2 = Math.PI / 12, p2 = 2 * Math.PI, d2 = 0; d2 < s2; d2 += 4) for (var f2 = 0; f2 < p2; f2 += c2)
          if (Ye(o2, r2, t3 + d2 * Math.cos(f2), e3 + d2 * Math.sin(f2), n2), r2.target) return r2;
      }
    }
    return r2;
  }, e2.prototype.processGesture = function(t3, e3) {
    this._gestureMgr || (this._gestureMgr = new he());
    var n2 = this._gestureMgr;
    e3 === "start" && n2.clear();
    var i2 = n2.recognize(t3, this.findHover(t3.zrX, t3.zrY, null).target, this.proxy.dom);
    if (e3 === "end" && n2.clear(), i2) {
      var r2 = i2.type;
      t3.gestureEvent = r2;
      var o2 = new He();
      o2.target = i2.target, this.dispatchToElement(o2, r2, i2.event);
    }
  }, e2;
})(Gt);
function Xe(t2, e2, n2) {
  if (t2[t2.rectHover ? "rectContain" : "contain"](e2, n2)) {
    for (var i2 = t2, r2 = void 0, o2 = !1; i2; ) {
      if (i2.ignoreClip && (o2 = !0), !o2) {
        var a2 = i2.getClipPath();
        if (a2 && !a2.contain(e2, n2)) return !1;
      }
      i2.silent && (r2 = !0);
      var s2 = i2.__hostTarget;
      i2 = s2 ? i2.ignoreHostSilent ? null : s2 : i2.parent;
    }
    return !r2 || Ee;
  }
  return !1;
}
function Ye(t2, e2, n2, i2, r2) {
  for (var o2 = t2.length - 1; o2 >= 0; o2--) {
    var a2 = t2[o2], s2 = void 0;
    if (a2 !== r2 && !a2.ignore && (s2 = Xe(a2, n2, i2)) && (!e2.topTarget && (e2.topTarget = a2), s2 !== Ee)) {
      e2.target = a2;
      break;
    }
  }
}
function Ze(t2, e2, n2) {
  var i2 = t2.painter;
  return e2 < 0 || e2 > i2.getWidth() || n2 < 0 || n2 > i2.getHeight();
}
Y(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function(t2) {
  Ue.prototype[t2] = function(e2) {
    var n2, i2, r2 = e2.zrX, o2 = e2.zrY, a2 = Ze(this, r2, o2);
    if (t2 === "mouseup" && a2 || (i2 = (n2 = this.findHover(r2, o2)).target), t2 === "mousedown") this._downEl = i2, this._downPoint = [e2.zrX, e2.zrY], this._upEl = i2;
    else if (t2 === "mouseup") this._upEl = i2;
    else if (t2 === "click") {
      if (this._downEl !== this._upEl || !this._downPoint || zt(this._downPoint, [e2.zrX, e2.zrY]) > 4) return;
      this._downPoint = null;
    }
    this.dispatchToElement(n2, t2, e2);
  };
});
function je(t2, e2, n2, i2) {
  var r2 = e2 + 1;
  if (r2 === n2) return 1;
  if (i2(t2[r2++], t2[e2]) < 0) {
    for (; r2 < n2 && i2(t2[r2], t2[r2 - 1]) < 0; ) r2++;
    (function(t3, e3, n3) {
      for (n3--; e3 < n3; ) {
        var i3 = t3[e3];
        t3[e3++] = t3[n3], t3[n3--] = i3;
      }
    })(t2, e2, r2);
  } else for (; r2 < n2 && i2(t2[r2], t2[r2 - 1]) >= 0; ) r2++;
  return r2 - e2;
}
function qe(t2, e2, n2, i2, r2) {
  for (i2 === e2 && i2++; i2 < n2; i2++) {
    for (var o2, a2 = t2[i2], s2 = e2, l2 = i2; s2 < l2; ) r2(a2, t2[o2 = s2 + l2 >>> 1]) < 0 ? l2 = o2 : s2 = o2 + 1;
    var u2 = i2 - s2;
    switch (u2) {
      case 3:
        t2[s2 + 3] = t2[s2 + 2];
      case 2:
        t2[s2 + 2] = t2[s2 + 1];
      case 1:
        t2[s2 + 1] = t2[s2];
        break;
      default:
        for (; u2 > 0; ) t2[s2 + u2] = t2[s2 + u2 - 1], u2--;
    }
    t2[s2] = a2;
  }
}
function Ke(t2, e2, n2, i2, r2, o2) {
  var a2 = 0, s2 = 0, l2 = 1;
  if (o2(t2, e2[n2 + r2]) > 0) {
    for (s2 = i2 - r2; l2 < s2 && o2(t2, e2[n2 + r2 + l2]) > 0; ) a2 = l2, (l2 = 1 + (l2 << 1)) <= 0 && (l2 = s2);
    l2 > s2 && (l2 = s2), a2 += r2, l2 += r2;
  } else {
    for (s2 = r2 + 1; l2 < s2 && o2(t2, e2[n2 + r2 - l2]) <= 0; ) a2 = l2, (l2 = 1 + (l2 << 1)) <= 0 && (l2 = s2);
    l2 > s2 && (l2 = s2);
    var u2 = a2;
    a2 = r2 - l2, l2 = r2 - u2;
  }
  for (a2++; a2 < l2; ) {
    var h2 = a2 + (l2 - a2 >>> 1);
    o2(t2, e2[n2 + h2]) > 0 ? a2 = h2 + 1 : l2 = h2;
  }
  return l2;
}
function $e(t2, e2, n2, i2, r2, o2) {
  var a2 = 0, s2 = 0, l2 = 1;
  if (o2(t2, e2[n2 + r2]) < 0) {
    for (s2 = r2 + 1; l2 < s2 && o2(t2, e2[n2 + r2 - l2]) < 0; ) a2 = l2, (l2 = 1 + (l2 << 1)) <= 0 && (l2 = s2);
    l2 > s2 && (l2 = s2);
    var u2 = a2;
    a2 = r2 - l2, l2 = r2 - u2;
  } else {
    for (s2 = i2 - r2; l2 < s2 && o2(t2, e2[n2 + r2 + l2]) >= 0; ) a2 = l2, (l2 = 1 + (l2 << 1)) <= 0 && (l2 = s2);
    l2 > s2 && (l2 = s2), a2 += r2, l2 += r2;
  }
  for (a2++; a2 < l2; ) {
    var h2 = a2 + (l2 - a2 >>> 1);
    o2(t2, e2[n2 + h2]) < 0 ? l2 = h2 : a2 = h2 + 1;
  }
  return l2;
}
function Qe(t2, e2) {
  var n2, i2, r2 = 7, o2 = 0, a2 = [];
  function s2(s3) {
    var l2 = n2[s3], u2 = i2[s3], h2 = n2[s3 + 1], c2 = i2[s3 + 1];
    i2[s3] = u2 + c2, s3 === o2 - 3 && (n2[s3 + 1] = n2[s3 + 2], i2[s3 + 1] = i2[s3 + 2]), o2--;
    var p2 = $e(t2[h2], t2, l2, u2, 0, e2);
    l2 += p2, (u2 -= p2) !== 0 && (c2 = Ke(t2[l2 + u2 - 1], t2, h2, c2, c2 - 1, e2)) !== 0 && (u2 <= c2 ? (function(n3, i3, o3, s4) {
      var l3 = 0;
      for (l3 = 0; l3 < i3; l3++) a2[l3] = t2[n3 + l3];
      var u3 = 0, h3 = o3, c3 = n3;
      if (t2[c3++] = t2[h3++], --s4 === 0) {
        for (l3 = 0; l3 < i3; l3++) t2[c3 + l3] = a2[u3 + l3];
        return;
      }
      if (i3 === 1) {
        for (l3 = 0; l3 < s4; l3++) t2[c3 + l3] = t2[h3 + l3];
        return void (t2[c3 + s4] = a2[u3]);
      }
      for (var p3, d2, f2, g2 = r2; ; ) {
        p3 = 0, d2 = 0, f2 = !1;
        do
          if (e2(t2[h3], a2[u3]) < 0) {
            if (t2[c3++] = t2[h3++], d2++, p3 = 0, --s4 === 0) {
              f2 = !0;
              break;
            }
          } else if (t2[c3++] = a2[u3++], p3++, d2 = 0, --i3 === 1) {
            f2 = !0;
            break;
          }
        while ((p3 | d2) < g2);
        if (f2) break;
        do {
          if ((p3 = $e(t2[h3], a2, u3, i3, 0, e2)) !== 0) {
            for (l3 = 0; l3 < p3; l3++) t2[c3 + l3] = a2[u3 + l3];
            if (c3 += p3, u3 += p3, (i3 -= p3) <= 1) {
              f2 = !0;
              break;
            }
          }
          if (t2[c3++] = t2[h3++], --s4 === 0) {
            f2 = !0;
            break;
          }
          if ((d2 = Ke(a2[u3], t2, h3, s4, 0, e2)) !== 0) {
            for (l3 = 0; l3 < d2; l3++) t2[c3 + l3] = t2[h3 + l3];
            if (c3 += d2, h3 += d2, (s4 -= d2) === 0) {
              f2 = !0;
              break;
            }
          }
          if (t2[c3++] = a2[u3++], --i3 === 1) {
            f2 = !0;
            break;
          }
          g2--;
        } while (p3 >= 7 || d2 >= 7);
        if (f2) break;
        g2 < 0 && (g2 = 0), g2 += 2;
      }
      if ((r2 = g2) < 1 && (r2 = 1), i3 === 1) {
        for (l3 = 0; l3 < s4; l3++) t2[c3 + l3] = t2[h3 + l3];
        t2[c3 + s4] = a2[u3];
      } else {
        if (i3 === 0) throw new Error();
        for (l3 = 0; l3 < i3; l3++) t2[c3 + l3] = a2[u3 + l3];
      }
    })(l2, u2, h2, c2) : (function(n3, i3, o3, s4) {
      var l3 = 0;
      for (l3 = 0; l3 < s4; l3++) a2[l3] = t2[o3 + l3];
      var u3 = n3 + i3 - 1, h3 = s4 - 1, c3 = o3 + s4 - 1, p3 = 0, d2 = 0;
      if (t2[c3--] = t2[u3--], --i3 === 0) {
        for (p3 = c3 - (s4 - 1), l3 = 0; l3 < s4; l3++) t2[p3 + l3] = a2[l3];
        return;
      }
      if (s4 === 1) {
        for (d2 = (c3 -= i3) + 1, p3 = (u3 -= i3) + 1, l3 = i3 - 1; l3 >= 0; l3--) t2[d2 + l3] = t2[p3 + l3];
        return void (t2[c3] = a2[h3]);
      }
      for (var f2 = r2; ; ) {
        var g2 = 0, v2 = 0, y2 = !1;
        do
          if (e2(a2[h3], t2[u3]) < 0) {
            if (t2[c3--] = t2[u3--], g2++, v2 = 0, --i3 === 0) {
              y2 = !0;
              break;
            }
          } else if (t2[c3--] = a2[h3--], v2++, g2 = 0, --s4 === 1) {
            y2 = !0;
            break;
          }
        while ((g2 | v2) < f2);
        if (y2) break;
        do {
          if ((g2 = i3 - $e(a2[h3], t2, n3, i3, i3 - 1, e2)) !== 0) {
            for (i3 -= g2, d2 = (c3 -= g2) + 1, p3 = (u3 -= g2) + 1, l3 = g2 - 1; l3 >= 0; l3--) t2[d2 + l3] = t2[p3 + l3];
            if (i3 === 0) {
              y2 = !0;
              break;
            }
          }
          if (t2[c3--] = a2[h3--], --s4 === 1) {
            y2 = !0;
            break;
          }
          if ((v2 = s4 - Ke(t2[u3], a2, 0, s4, s4 - 1, e2)) !== 0) {
            for (s4 -= v2, d2 = (c3 -= v2) + 1, p3 = (h3 -= v2) + 1, l3 = 0; l3 < v2; l3++) t2[d2 + l3] = a2[p3 + l3];
            if (s4 <= 1) {
              y2 = !0;
              break;
            }
          }
          if (t2[c3--] = t2[u3--], --i3 === 0) {
            y2 = !0;
            break;
          }
          f2--;
        } while (g2 >= 7 || v2 >= 7);
        if (y2) break;
        f2 < 0 && (f2 = 0), f2 += 2;
      }
      if ((r2 = f2) < 1 && (r2 = 1), s4 === 1) {
        for (d2 = (c3 -= i3) + 1, p3 = (u3 -= i3) + 1, l3 = i3 - 1; l3 >= 0; l3--) t2[d2 + l3] = t2[p3 + l3];
        t2[c3] = a2[h3];
      } else {
        if (s4 === 0) throw new Error();
        for (p3 = c3 - (s4 - 1), l3 = 0; l3 < s4; l3++) t2[p3 + l3] = a2[l3];
      }
    })(l2, u2, h2, c2));
  }
  return n2 = [], i2 = [], { mergeRuns: function() {
    for (; o2 > 1; ) {
      var t3 = o2 - 2;
      if (t3 >= 1 && i2[t3 - 1] <= i2[t3] + i2[t3 + 1] || t3 >= 2 && i2[t3 - 2] <= i2[t3] + i2[t3 - 1]) i2[t3 - 1] < i2[t3 + 1] && t3--;
      else if (i2[t3] > i2[t3 + 1]) break;
      s2(t3);
    }
  }, forceMergeRuns: function() {
    for (; o2 > 1; ) {
      var t3 = o2 - 2;
      t3 > 0 && i2[t3 - 1] < i2[t3 + 1] && t3--, s2(t3);
    }
  }, pushRun: function(t3, e3) {
    n2[o2] = t3, i2[o2] = e3, o2 += 1;
  } };
}
function Je(t2, e2, n2, i2) {
  n2 || (n2 = 0), i2 || (i2 = t2.length);
  var r2 = i2 - n2;
  if (!(r2 < 2)) {
    var o2 = 0;
    if (r2 < 32) qe(t2, n2, i2, n2 + (o2 = je(t2, n2, i2, e2)), e2);
    else {
      var a2 = Qe(t2, e2), s2 = (function(t3) {
        for (var e3 = 0; t3 >= 32; ) e3 |= 1 & t3, t3 >>= 1;
        return t3 + e3;
      })(r2);
      do {
        if ((o2 = je(t2, n2, i2, e2)) < s2) {
          var l2 = r2;
          l2 > s2 && (l2 = s2), qe(t2, n2, n2 + l2, n2 + o2, e2), o2 = l2;
        }
        a2.pushRun(n2, o2), a2.mergeRuns(), r2 -= o2, n2 += o2;
      } while (r2 !== 0);
      a2.forceMergeRuns();
    }
  }
}
var tn = !1;
function en() {
  tn || (tn = !0);
}
function nn(t2, e2) {
  return t2.zlevel === e2.zlevel ? t2.z === e2.z ? t2.z2 - e2.z2 : t2.z - e2.z : t2.zlevel - e2.zlevel;
}
var rn, on2 = (function() {
  function t2() {
    this._roots = [], this._displayList = [], this._displayListLen = 0, this.displayableSortFunc = nn;
  }
  return t2.prototype.traverse = function(t3, e2) {
    for (var n2 = 0; n2 < this._roots.length; n2++) this._roots[n2].traverse(t3, e2);
  }, t2.prototype.getDisplayList = function(t3, e2) {
    e2 = e2 || !1;
    var n2 = this._displayList;
    return !t3 && n2.length || this.updateDisplayList(e2), n2;
  }, t2.prototype.updateDisplayList = function(t3) {
    this._displayListLen = 0;
    for (var e2 = this._roots, n2 = this._displayList, i2 = 0, r2 = e2.length; i2 < r2; i2++) this._updateAndAddDisplayable(e2[i2], null, t3);
    n2.length = this._displayListLen, Je(n2, nn);
  }, t2.prototype._updateAndAddDisplayable = function(t3, e2, n2) {
    if (!t3.ignore || n2) {
      t3.beforeUpdate(), t3.update(), t3.afterUpdate();
      var i2 = t3.getClipPath(), r2 = e2 && e2.length, o2 = 0, a2 = t3.__clipPaths;
      if (!t3.ignoreClip && (r2 || i2)) {
        if (a2 || (a2 = t3.__clipPaths = []), r2) for (var s2 = 0; s2 < e2.length; s2++) a2[o2++] = e2[s2];
        for (var l2 = i2, u2 = t3; l2; ) l2.parent = u2, l2.updateTransform(), a2[o2++] = l2, u2 = l2, l2 = l2.getClipPath();
      }
      if (a2 && (a2.length = o2), t3.childrenRef) {
        for (var h2 = t3.childrenRef(), c2 = 0; c2 < h2.length; c2++) {
          var p2 = h2[c2];
          t3.__dirty && (p2.__dirty |= 1), this._updateAndAddDisplayable(p2, a2, n2);
        }
        t3.__dirty = 0;
      } else {
        var d2 = t3;
        isNaN(d2.z) && (en(), d2.z = 0), isNaN(d2.z2) && (en(), d2.z2 = 0), isNaN(d2.zlevel) && (en(), d2.zlevel = 0), this._displayList[this._displayListLen++] = d2;
      }
      var f2 = t3.getDecalElement && t3.getDecalElement();
      f2 && this._updateAndAddDisplayable(f2, a2, n2);
      var g2 = t3.getTextGuideLine();
      g2 && this._updateAndAddDisplayable(g2, a2, n2);
      var v2 = t3.getTextContent();
      v2 && this._updateAndAddDisplayable(v2, a2, n2);
    }
  }, t2.prototype.addRoot = function(t3) {
    t3.__zr && t3.__zr.storage === this || this._roots.push(t3);
  }, t2.prototype.delRoot = function(t3) {
    if (t3 instanceof Array) for (var e2 = 0, n2 = t3.length; e2 < n2; e2++) this.delRoot(t3[e2]);
    else {
      var i2 = G(this._roots, t3);
      i2 >= 0 && this._roots.splice(i2, 1);
    }
  }, t2.prototype.delAllRoots = function() {
    this._roots = [], this._displayList = [], this._displayListLen = 0;
  }, t2.prototype.getRoots = function() {
    return this._roots;
  }, t2.prototype.dispose = function() {
    this._displayList = null, this._roots = null;
  }, t2;
})();
rn = b.hasGlobalWindow && (window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.msRequestAnimationFrame && window.msRequestAnimationFrame.bind(window) || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) || function(t2) {
  return setTimeout(t2, 16);
};
var an = { linear: function(t2) {
  return t2;
}, quadraticIn: function(t2) {
  return t2 * t2;
}, quadraticOut: function(t2) {
  return t2 * (2 - t2);
}, quadraticInOut: function(t2) {
  return (t2 *= 2) < 1 ? 0.5 * t2 * t2 : -0.5 * (--t2 * (t2 - 2) - 1);
}, cubicIn: function(t2) {
  return t2 * t2 * t2;
}, cubicOut: function(t2) {
  return --t2 * t2 * t2 + 1;
}, cubicInOut: function(t2) {
  return (t2 *= 2) < 1 ? 0.5 * t2 * t2 * t2 : 0.5 * ((t2 -= 2) * t2 * t2 + 2);
}, quarticIn: function(t2) {
  return t2 * t2 * t2 * t2;
}, quarticOut: function(t2) {
  return 1 - --t2 * t2 * t2 * t2;
}, quarticInOut: function(t2) {
  return (t2 *= 2) < 1 ? 0.5 * t2 * t2 * t2 * t2 : -0.5 * ((t2 -= 2) * t2 * t2 * t2 - 2);
}, quinticIn: function(t2) {
  return t2 * t2 * t2 * t2 * t2;
}, quinticOut: function(t2) {
  return --t2 * t2 * t2 * t2 * t2 + 1;
}, quinticInOut: function(t2) {
  return (t2 *= 2) < 1 ? 0.5 * t2 * t2 * t2 * t2 * t2 : 0.5 * ((t2 -= 2) * t2 * t2 * t2 * t2 + 2);
}, sinusoidalIn: function(t2) {
  return 1 - Math.cos(t2 * Math.PI / 2);
}, sinusoidalOut: function(t2) {
  return Math.sin(t2 * Math.PI / 2);
}, sinusoidalInOut: function(t2) {
  return 0.5 * (1 - Math.cos(Math.PI * t2));
}, exponentialIn: function(t2) {
  return t2 === 0 ? 0 : Math.pow(1024, t2 - 1);
}, exponentialOut: function(t2) {
  return t2 === 1 ? 1 : 1 - Math.pow(2, -10 * t2);
}, exponentialInOut: function(t2) {
  return t2 === 0 ? 0 : t2 === 1 ? 1 : (t2 *= 2) < 1 ? 0.5 * Math.pow(1024, t2 - 1) : 0.5 * (2 - Math.pow(2, -10 * (t2 - 1)));
}, circularIn: function(t2) {
  return 1 - Math.sqrt(1 - t2 * t2);
}, circularOut: function(t2) {
  return Math.sqrt(1 - --t2 * t2);
}, circularInOut: function(t2) {
  return (t2 *= 2) < 1 ? -0.5 * (Math.sqrt(1 - t2 * t2) - 1) : 0.5 * (Math.sqrt(1 - (t2 -= 2) * t2) + 1);
}, elasticIn: function(t2) {
  var e2, n2 = 0.1;
  return t2 === 0 ? 0 : t2 === 1 ? 1 : (!n2 || n2 < 1 ? (n2 = 1, e2 = 0.1) : e2 = 0.4 * Math.asin(1 / n2) / (2 * Math.PI), -n2 * Math.pow(2, 10 * (t2 -= 1)) * Math.sin((t2 - e2) * (2 * Math.PI) / 0.4));
}, elasticOut: function(t2) {
  var e2, n2 = 0.1;
  return t2 === 0 ? 0 : t2 === 1 ? 1 : (!n2 || n2 < 1 ? (n2 = 1, e2 = 0.1) : e2 = 0.4 * Math.asin(1 / n2) / (2 * Math.PI), n2 * Math.pow(2, -10 * t2) * Math.sin((t2 - e2) * (2 * Math.PI) / 0.4) + 1);
}, elasticInOut: function(t2) {
  var e2, n2 = 0.1, i2 = 0.4;
  return t2 === 0 ? 0 : t2 === 1 ? 1 : (!n2 || n2 < 1 ? (n2 = 1, e2 = 0.1) : e2 = i2 * Math.asin(1 / n2) / (2 * Math.PI), (t2 *= 2) < 1 ? n2 * Math.pow(2, 10 * (t2 -= 1)) * Math.sin((t2 - e2) * (2 * Math.PI) / i2) * -0.5 : n2 * Math.pow(2, -10 * (t2 -= 1)) * Math.sin((t2 - e2) * (2 * Math.PI) / i2) * 0.5 + 1);
}, backIn: function(t2) {
  var e2 = 1.70158;
  return t2 * t2 * ((e2 + 1) * t2 - e2);
}, backOut: function(t2) {
  var e2 = 1.70158;
  return --t2 * t2 * ((e2 + 1) * t2 + e2) + 1;
}, backInOut: function(t2) {
  var e2 = 2.5949095;
  return (t2 *= 2) < 1 ? t2 * t2 * ((e2 + 1) * t2 - e2) * 0.5 : 0.5 * ((t2 -= 2) * t2 * ((e2 + 1) * t2 + e2) + 2);
}, bounceIn: function(t2) {
  return 1 - an.bounceOut(1 - t2);
}, bounceOut: function(t2) {
  return t2 < 1 / 2.75 ? 7.5625 * t2 * t2 : t2 < 2 / 2.75 ? 7.5625 * (t2 -= 1.5 / 2.75) * t2 + 0.75 : t2 < 2.5 / 2.75 ? 7.5625 * (t2 -= 2.25 / 2.75) * t2 + 0.9375 : 7.5625 * (t2 -= 2.625 / 2.75) * t2 + 0.984375;
}, bounceInOut: function(t2) {
  return t2 < 0.5 ? 0.5 * an.bounceIn(2 * t2) : 0.5 * an.bounceOut(2 * t2 - 1) + 0.5;
} }, sn = Math.pow, ln = Math.sqrt, un = 1e-8, hn = 1e-4, cn = ln(3), pn = 1 / 3, dn = Dt(), fn = Dt(), gn = Dt();
function vn(t2) {
  return t2 > -1e-8 && t2 < un;
}
function yn(t2) {
  return t2 > un || t2 < -1e-8;
}
function mn(t2, e2, n2, i2, r2) {
  var o2 = 1 - r2;
  return o2 * o2 * (o2 * t2 + 3 * r2 * e2) + r2 * r2 * (r2 * i2 + 3 * o2 * n2);
}
function _n(t2, e2, n2, i2, r2) {
  var o2 = 1 - r2;
  return 3 * (((e2 - t2) * o2 + 2 * (n2 - e2) * r2) * o2 + (i2 - n2) * r2 * r2);
}
function xn(t2, e2, n2, i2, r2, o2) {
  var a2 = i2 + 3 * (e2 - n2) - t2, s2 = 3 * (n2 - 2 * e2 + t2), l2 = 3 * (e2 - t2), u2 = t2 - r2, h2 = s2 * s2 - 3 * a2 * l2, c2 = s2 * l2 - 9 * a2 * u2, p2 = l2 * l2 - 3 * s2 * u2, d2 = 0;
  if (vn(h2) && vn(c2))
    vn(s2) ? o2[0] = 0 : (M2 = -l2 / s2) >= 0 && M2 <= 1 && (o2[d2++] = M2);
  else {
    var f2 = c2 * c2 - 4 * h2 * p2;
    if (vn(f2)) {
      var g2 = c2 / h2, v2 = -g2 / 2;
      (M2 = -s2 / a2 + g2) >= 0 && M2 <= 1 && (o2[d2++] = M2), v2 >= 0 && v2 <= 1 && (o2[d2++] = v2);
    } else if (f2 > 0) {
      var y2 = ln(f2), m2 = h2 * s2 + 1.5 * a2 * (-c2 + y2), _2 = h2 * s2 + 1.5 * a2 * (-c2 - y2);
      (M2 = (-s2 - ((m2 = m2 < 0 ? -sn(-m2, pn) : sn(m2, pn)) + (_2 = _2 < 0 ? -sn(-_2, pn) : sn(_2, pn)))) / (3 * a2)) >= 0 && M2 <= 1 && (o2[d2++] = M2);
    } else {
      var x2 = (2 * h2 * s2 - 3 * a2 * c2) / (2 * ln(h2 * h2 * h2)), b2 = Math.acos(x2) / 3, w2 = ln(h2), S2 = Math.cos(b2), M2 = (-s2 - 2 * w2 * S2) / (3 * a2), T2 = (v2 = (-s2 + w2 * (S2 + cn * Math.sin(b2))) / (3 * a2), (-s2 + w2 * (S2 - cn * Math.sin(b2))) / (3 * a2));
      M2 >= 0 && M2 <= 1 && (o2[d2++] = M2), v2 >= 0 && v2 <= 1 && (o2[d2++] = v2), T2 >= 0 && T2 <= 1 && (o2[d2++] = T2);
    }
  }
  return d2;
}
function bn(t2, e2, n2, i2, r2) {
  var o2 = 6 * n2 - 12 * e2 + 6 * t2, a2 = 9 * e2 + 3 * i2 - 3 * t2 - 9 * n2, s2 = 3 * e2 - 3 * t2, l2 = 0;
  if (vn(a2))
    yn(o2) && (h2 = -s2 / o2) >= 0 && h2 <= 1 && (r2[l2++] = h2);
  else {
    var u2 = o2 * o2 - 4 * a2 * s2;
    if (vn(u2)) r2[0] = -o2 / (2 * a2);
    else if (u2 > 0) {
      var h2, c2 = ln(u2), p2 = (-o2 - c2) / (2 * a2);
      (h2 = (-o2 + c2) / (2 * a2)) >= 0 && h2 <= 1 && (r2[l2++] = h2), p2 >= 0 && p2 <= 1 && (r2[l2++] = p2);
    }
  }
  return l2;
}
function wn(t2, e2, n2, i2, r2, o2) {
  var a2 = (e2 - t2) * r2 + t2, s2 = (n2 - e2) * r2 + e2, l2 = (i2 - n2) * r2 + n2, u2 = (s2 - a2) * r2 + a2, h2 = (l2 - s2) * r2 + s2, c2 = (h2 - u2) * r2 + u2;
  o2[0] = t2, o2[1] = a2, o2[2] = u2, o2[3] = c2, o2[4] = c2, o2[5] = h2, o2[6] = l2, o2[7] = i2;
}
function Sn(t2, e2, n2, i2, r2, o2, a2, s2, l2) {
  for (var u2 = t2, h2 = e2, c2 = 0, p2 = 1 / l2, d2 = 1; d2 <= l2; d2++) {
    var f2 = d2 * p2, g2 = mn(t2, n2, r2, a2, f2), v2 = mn(e2, i2, o2, s2, f2), y2 = g2 - u2, m2 = v2 - h2;
    c2 += Math.sqrt(y2 * y2 + m2 * m2), u2 = g2, h2 = v2;
  }
  return c2;
}
function Mn(t2, e2, n2, i2) {
  var r2 = 1 - i2;
  return r2 * (r2 * t2 + 2 * i2 * e2) + i2 * i2 * n2;
}
function Tn(t2, e2, n2, i2) {
  return 2 * ((1 - i2) * (e2 - t2) + i2 * (n2 - e2));
}
function kn(t2, e2, n2) {
  var i2 = t2 + n2 - 2 * e2;
  return i2 === 0 ? 0.5 : (t2 - e2) / i2;
}
function Cn(t2, e2, n2, i2, r2) {
  var o2 = (e2 - t2) * i2 + t2, a2 = (n2 - e2) * i2 + e2, s2 = (a2 - o2) * i2 + o2;
  r2[0] = t2, r2[1] = o2, r2[2] = s2, r2[3] = s2, r2[4] = a2, r2[5] = n2;
}
function In(t2, e2, n2, i2, r2, o2, a2) {
  for (var s2 = t2, l2 = e2, u2 = 0, h2 = 1 / a2, c2 = 1; c2 <= a2; c2++) {
    var p2 = c2 * h2, d2 = Mn(t2, n2, r2, p2), f2 = Mn(e2, i2, o2, p2), g2 = d2 - s2, v2 = f2 - l2;
    u2 += Math.sqrt(g2 * g2 + v2 * v2), s2 = d2, l2 = f2;
  }
  return u2;
}
var Dn = /cubic-bezier\(([0-9,\.e ]+)\)/;
function An(t2) {
  var e2 = t2 && Dn.exec(t2);
  if (e2) {
    var n2 = e2[1].split(","), i2 = +vt(n2[0]), r2 = +vt(n2[1]), o2 = +vt(n2[2]), a2 = +vt(n2[3]);
    if (isNaN(i2 + r2 + o2 + a2)) return;
    var s2 = [];
    return function(t3) {
      return t3 <= 0 ? 0 : t3 >= 1 ? 1 : xn(0, i2, o2, 1, t3, s2) && mn(0, r2, a2, 1, s2[0]);
    };
  }
}
var Ln = (function() {
  function t2(t3) {
    this._inited = !1, this._startTime = 0, this._pausedTime = 0, this._paused = !1, this._life = t3.life || 1e3, this._delay = t3.delay || 0, this.loop = t3.loop || !1, this.onframe = t3.onframe || Ct, this.ondestroy = t3.ondestroy || Ct, this.onrestart = t3.onrestart || Ct, t3.easing && this.setEasing(t3.easing);
  }
  return t2.prototype.step = function(t3, e2) {
    if (this._inited || (this._startTime = t3 + this._delay, this._inited = !0), !this._paused) {
      var n2 = this._life, i2 = t3 - this._startTime - this._pausedTime, r2 = i2 / n2;
      r2 < 0 && (r2 = 0), r2 = Math.min(r2, 1);
      var o2 = this.easingFunc, a2 = o2 ? o2(r2) : r2;
      if (this.onframe(a2), r2 === 1) {
        if (!this.loop) return !0;
        var s2 = i2 % n2;
        this._startTime = t3 - s2, this._pausedTime = 0, this.onrestart();
      }
      return !1;
    }
    this._pausedTime += e2;
  }, t2.prototype.pause = function() {
    this._paused = !0;
  }, t2.prototype.resume = function() {
    this._paused = !1;
  }, t2.prototype.setEasing = function(t3) {
    this.easing = t3, this.easingFunc = tt(t3) ? t3 : an[t3] || An(t3);
  }, t2;
})(), Pn = /* @__PURE__ */ (function() {
  return function(t2) {
    this.value = t2;
  };
})(), On2 = (function() {
  function t2() {
    this._len = 0;
  }
  return t2.prototype.insert = function(t3) {
    var e2 = new Pn(t3);
    return this.insertEntry(e2), e2;
  }, t2.prototype.insertEntry = function(t3) {
    this.head ? (this.tail.next = t3, t3.prev = this.tail, t3.next = null, this.tail = t3) : this.head = this.tail = t3, this._len++;
  }, t2.prototype.remove = function(t3) {
    var e2 = t3.prev, n2 = t3.next;
    e2 ? e2.next = n2 : this.head = n2, n2 ? n2.prev = e2 : this.tail = e2, t3.next = t3.prev = null, this._len--;
  }, t2.prototype.len = function() {
    return this._len;
  }, t2.prototype.clear = function() {
    this.head = this.tail = null, this._len = 0;
  }, t2;
})(), Rn = (function() {
  function t2(t3) {
    this._list = new On2(), this._maxSize = 10, this._map = {}, this._maxSize = t3;
  }
  return t2.prototype.put = function(t3, e2) {
    var n2 = this._list, i2 = this._map, r2 = null;
    if (i2[t3] == null) {
      var o2 = n2.len(), a2 = this._lastRemovedEntry;
      if (o2 >= this._maxSize && o2 > 0) {
        var s2 = n2.head;
        n2.remove(s2), delete i2[s2.key], r2 = s2.value, this._lastRemovedEntry = s2;
      }
      a2 ? a2.value = e2 : a2 = new Pn(e2), a2.key = t3, n2.insertEntry(a2), i2[t3] = a2;
    }
    return r2;
  }, t2.prototype.get = function(t3) {
    var e2 = this._map[t3], n2 = this._list;
    if (e2 != null) return e2 !== n2.tail && (n2.remove(e2), n2.insertEntry(e2)), e2.value;
  }, t2.prototype.clear = function() {
    this._list.clear(), this._map = {};
  }, t2.prototype.len = function() {
    return this._list.len();
  }, t2;
})(), Nn = { transparent: [0, 0, 0, 0], aliceblue: [240, 248, 255, 1], antiquewhite: [250, 235, 215, 1], aqua: [0, 255, 255, 1], aquamarine: [127, 255, 212, 1], azure: [240, 255, 255, 1], beige: [245, 245, 220, 1], bisque: [255, 228, 196, 1], black: [0, 0, 0, 1], blanchedalmond: [255, 235, 205, 1], blue: [0, 0, 255, 1], blueviolet: [138, 43, 226, 1], brown: [165, 42, 42, 1], burlywood: [222, 184, 135, 1], cadetblue: [95, 158, 160, 1], chartreuse: [127, 255, 0, 1], chocolate: [210, 105, 30, 1], coral: [255, 127, 80, 1], cornflowerblue: [100, 149, 237, 1], cornsilk: [255, 248, 220, 1], crimson: [220, 20, 60, 1], cyan: [0, 255, 255, 1], darkblue: [0, 0, 139, 1], darkcyan: [0, 139, 139, 1], darkgoldenrod: [184, 134, 11, 1], darkgray: [169, 169, 169, 1], darkgreen: [0, 100, 0, 1], darkgrey: [169, 169, 169, 1], darkkhaki: [189, 183, 107, 1], darkmagenta: [139, 0, 139, 1], darkolivegreen: [85, 107, 47, 1], darkorange: [255, 140, 0, 1], darkorchid: [153, 50, 204, 1], darkred: [139, 0, 0, 1], darksalmon: [233, 150, 122, 1], darkseagreen: [143, 188, 143, 1], darkslateblue: [72, 61, 139, 1], darkslategray: [47, 79, 79, 1], darkslategrey: [47, 79, 79, 1], darkturquoise: [0, 206, 209, 1], darkviolet: [148, 0, 211, 1], deeppink: [255, 20, 147, 1], deepskyblue: [0, 191, 255, 1], dimgray: [105, 105, 105, 1], dimgrey: [105, 105, 105, 1], dodgerblue: [30, 144, 255, 1], firebrick: [178, 34, 34, 1], floralwhite: [255, 250, 240, 1], forestgreen: [34, 139, 34, 1], fuchsia: [255, 0, 255, 1], gainsboro: [220, 220, 220, 1], ghostwhite: [248, 248, 255, 1], gold: [255, 215, 0, 1], goldenrod: [218, 165, 32, 1], gray: [128, 128, 128, 1], green: [0, 128, 0, 1], greenyellow: [173, 255, 47, 1], grey: [128, 128, 128, 1], honeydew: [240, 255, 240, 1], hotpink: [255, 105, 180, 1], indianred: [205, 92, 92, 1], indigo: [75, 0, 130, 1], ivory: [255, 255, 240, 1], khaki: [240, 230, 140, 1], lavender: [230, 230, 250, 1], lavenderblush: [255, 240, 245, 1], lawngreen: [124, 252, 0, 1], lemonchiffon: [255, 250, 205, 1], lightblue: [173, 216, 230, 1], lightcoral: [240, 128, 128, 1], lightcyan: [224, 255, 255, 1], lightgoldenrodyellow: [250, 250, 210, 1], lightgray: [211, 211, 211, 1], lightgreen: [144, 238, 144, 1], lightgrey: [211, 211, 211, 1], lightpink: [255, 182, 193, 1], lightsalmon: [255, 160, 122, 1], lightseagreen: [32, 178, 170, 1], lightskyblue: [135, 206, 250, 1], lightslategray: [119, 136, 153, 1], lightslategrey: [119, 136, 153, 1], lightsteelblue: [176, 196, 222, 1], lightyellow: [255, 255, 224, 1], lime: [0, 255, 0, 1], limegreen: [50, 205, 50, 1], linen: [250, 240, 230, 1], magenta: [255, 0, 255, 1], maroon: [128, 0, 0, 1], mediumaquamarine: [102, 205, 170, 1], mediumblue: [0, 0, 205, 1], mediumorchid: [186, 85, 211, 1], mediumpurple: [147, 112, 219, 1], mediumseagreen: [60, 179, 113, 1], mediumslateblue: [123, 104, 238, 1], mediumspringgreen: [0, 250, 154, 1], mediumturquoise: [72, 209, 204, 1], mediumvioletred: [199, 21, 133, 1], midnightblue: [25, 25, 112, 1], mintcream: [245, 255, 250, 1], mistyrose: [255, 228, 225, 1], moccasin: [255, 228, 181, 1], navajowhite: [255, 222, 173, 1], navy: [0, 0, 128, 1], oldlace: [253, 245, 230, 1], olive: [128, 128, 0, 1], olivedrab: [107, 142, 35, 1], orange: [255, 165, 0, 1], orangered: [255, 69, 0, 1], orchid: [218, 112, 214, 1], palegoldenrod: [238, 232, 170, 1], palegreen: [152, 251, 152, 1], paleturquoise: [175, 238, 238, 1], palevioletred: [219, 112, 147, 1], papayawhip: [255, 239, 213, 1], peachpuff: [255, 218, 185, 1], peru: [205, 133, 63, 1], pink: [255, 192, 203, 1], plum: [221, 160, 221, 1], powderblue: [176, 224, 230, 1], purple: [128, 0, 128, 1], red: [255, 0, 0, 1], rosybrown: [188, 143, 143, 1], royalblue: [65, 105, 225, 1], saddlebrown: [139, 69, 19, 1], salmon: [250, 128, 114, 1], sandybrown: [244, 164, 96, 1], seagreen: [46, 139, 87, 1], seashell: [255, 245, 238, 1], sienna: [160, 82, 45, 1], silver: [192, 192, 192, 1], skyblue: [135, 206, 235, 1], slateblue: [106, 90, 205, 1], slategray: [112, 128, 144, 1], slategrey: [112, 128, 144, 1], snow: [255, 250, 250, 1], springgreen: [0, 255, 127, 1], steelblue: [70, 130, 180, 1], tan: [210, 180, 140, 1], teal: [0, 128, 128, 1], thistle: [216, 191, 216, 1], tomato: [255, 99, 71, 1], turquoise: [64, 224, 208, 1], violet: [238, 130, 238, 1], wheat: [245, 222, 179, 1], white: [255, 255, 255, 1], whitesmoke: [245, 245, 245, 1], yellow: [255, 255, 0, 1], yellowgreen: [154, 205, 50, 1] };
function zn2(t2) {
  return (t2 = Math.round(t2)) < 0 ? 0 : t2 > 255 ? 255 : t2;
}
function Bn(t2) {
  return t2 < 0 ? 0 : t2 > 1 ? 1 : t2;
}
function En(t2) {
  var e2 = t2;
  return e2.length && e2.charAt(e2.length - 1) === "%" ? zn2(parseFloat(e2) / 100 * 255) : zn2(parseInt(e2, 10));
}
function Fn(t2) {
  var e2 = t2;
  return e2.length && e2.charAt(e2.length - 1) === "%" ? Bn(parseFloat(e2) / 100) : Bn(parseFloat(e2));
}
function Vn(t2, e2, n2) {
  return n2 < 0 ? n2 += 1 : n2 > 1 && (n2 -= 1), 6 * n2 < 1 ? t2 + (e2 - t2) * n2 * 6 : 2 * n2 < 1 ? e2 : 3 * n2 < 2 ? t2 + (e2 - t2) * (2 / 3 - n2) * 6 : t2;
}
function Hn(t2, e2, n2) {
  return t2 + (e2 - t2) * n2;
}
function Wn(t2, e2, n2, i2, r2) {
  return t2[0] = e2, t2[1] = n2, t2[2] = i2, t2[3] = r2, t2;
}
function Gn(t2, e2) {
  return t2[0] = e2[0], t2[1] = e2[1], t2[2] = e2[2], t2[3] = e2[3], t2;
}
var Un = new Rn(20), Xn = null;
function Yn(t2, e2) {
  Xn && Gn(Xn, e2), Xn = Un.put(t2, Xn || e2.slice());
}
function Zn(t2, e2) {
  if (t2) {
    e2 = e2 || [];
    var n2 = Un.get(t2);
    if (n2) return Gn(e2, n2);
    var i2 = (t2 += "").replace(/ /g, "").toLowerCase();
    if (i2 in Nn) return Gn(e2, Nn[i2]), Yn(t2, e2), e2;
    var r2, o2 = i2.length;
    if (i2.charAt(0) === "#") return o2 === 4 || o2 === 5 ? (r2 = parseInt(i2.slice(1, 4), 16)) >= 0 && r2 <= 4095 ? (Wn(e2, (3840 & r2) >> 4 | (3840 & r2) >> 8, 240 & r2 | (240 & r2) >> 4, 15 & r2 | (15 & r2) << 4, o2 === 5 ? parseInt(i2.slice(4), 16) / 15 : 1), Yn(t2, e2), e2) : void Wn(e2, 0, 0, 0, 1) : o2 === 7 || o2 === 9 ? (r2 = parseInt(i2.slice(1, 7), 16)) >= 0 && r2 <= 16777215 ? (Wn(e2, (16711680 & r2) >> 16, (65280 & r2) >> 8, 255 & r2, o2 === 9 ? parseInt(i2.slice(7), 16) / 255 : 1), Yn(t2, e2), e2) : void Wn(e2, 0, 0, 0, 1) : void 0;
    var a2 = i2.indexOf("("), s2 = i2.indexOf(")");
    if (a2 !== -1 && s2 + 1 === o2) {
      var l2 = i2.substr(0, a2), u2 = i2.substr(a2 + 1, s2 - (a2 + 1)).split(","), h2 = 1;
      switch (l2) {
        case "rgba":
          if (u2.length !== 4) return u2.length === 3 ? Wn(e2, +u2[0], +u2[1], +u2[2], 1) : Wn(e2, 0, 0, 0, 1);
          h2 = Fn(u2.pop());
        case "rgb":
          return u2.length >= 3 ? (Wn(e2, En(u2[0]), En(u2[1]), En(u2[2]), u2.length === 3 ? h2 : Fn(u2[3])), Yn(t2, e2), e2) : void Wn(e2, 0, 0, 0, 1);
        case "hsla":
          return u2.length !== 4 ? void Wn(e2, 0, 0, 0, 1) : (u2[3] = Fn(u2[3]), jn(u2, e2), Yn(t2, e2), e2);
        case "hsl":
          return u2.length !== 3 ? void Wn(e2, 0, 0, 0, 1) : (jn(u2, e2), Yn(t2, e2), e2);
        default:
          return;
      }
    }
    Wn(e2, 0, 0, 0, 1);
  }
}
function jn(t2, e2) {
  var n2 = (parseFloat(t2[0]) % 360 + 360) % 360 / 360, i2 = Fn(t2[1]), r2 = Fn(t2[2]), o2 = r2 <= 0.5 ? r2 * (i2 + 1) : r2 + i2 - r2 * i2, a2 = 2 * r2 - o2;
  return Wn(e2 = e2 || [], zn2(255 * Vn(a2, o2, n2 + 1 / 3)), zn2(255 * Vn(a2, o2, n2)), zn2(255 * Vn(a2, o2, n2 - 1 / 3)), 1), t2.length === 4 && (e2[3] = t2[3]), e2;
}
function qn(t2, e2) {
  var n2 = Zn(t2);
  if (n2) {
    for (var i2 = 0; i2 < 3; i2++) n2[i2] = n2[i2] * (1 - e2) | 0, n2[i2] > 255 ? n2[i2] = 255 : n2[i2] < 0 && (n2[i2] = 0);
    return $n(n2, n2.length === 4 ? "rgba" : "rgb");
  }
}
function Kn(t2, e2, n2, i2) {
  var r2 = Zn(t2);
  if (t2) return r2 = (function(t3) {
    if (t3) {
      var e3, n3, i3 = t3[0] / 255, r3 = t3[1] / 255, o2 = t3[2] / 255, a2 = Math.min(i3, r3, o2), s2 = Math.max(i3, r3, o2), l2 = s2 - a2, u2 = (s2 + a2) / 2;
      if (l2 === 0) e3 = 0, n3 = 0;
      else {
        n3 = u2 < 0.5 ? l2 / (s2 + a2) : l2 / (2 - s2 - a2);
        var h2 = ((s2 - i3) / 6 + l2 / 2) / l2, c2 = ((s2 - r3) / 6 + l2 / 2) / l2, p2 = ((s2 - o2) / 6 + l2 / 2) / l2;
        i3 === s2 ? e3 = p2 - c2 : r3 === s2 ? e3 = 1 / 3 + h2 - p2 : o2 === s2 && (e3 = 2 / 3 + c2 - h2), e3 < 0 && (e3 += 1), e3 > 1 && (e3 -= 1);
      }
      var d2 = [360 * e3, n3, u2];
      return t3[3] != null && d2.push(t3[3]), d2;
    }
  })(r2), n2 != null && (r2[1] = Fn(tt(n2) ? n2(r2[1]) : n2)), i2 != null && (r2[2] = Fn(tt(i2) ? i2(r2[2]) : i2)), $n(jn(r2), "rgba");
}
function $n(t2, e2) {
  if (t2 && t2.length) {
    var n2 = t2[0] + "," + t2[1] + "," + t2[2];
    return e2 !== "rgba" && e2 !== "hsva" && e2 !== "hsla" || (n2 += "," + t2[3]), e2 + "(" + n2 + ")";
  }
}
function Qn(t2, e2) {
  var n2 = Zn(t2);
  return n2 ? (0.299 * n2[0] + 0.587 * n2[1] + 0.114 * n2[2]) * n2[3] / 255 + (1 - n2[3]) * e2 : 0;
}
var Jn = new Rn(100);
function ti(t2) {
  if (et(t2)) {
    var e2 = Jn.get(t2);
    return e2 || (e2 = qn(t2, -0.1), Jn.put(t2, e2)), e2;
  }
  if (lt(t2)) {
    var n2 = H({}, t2);
    return n2.colorStops = Z(t2.colorStops, function(t3) {
      return { offset: t3.offset, color: qn(t3.color, -0.1) };
    }), n2;
  }
  return t2;
}
b.hasGlobalWindow && tt(window.btoa);
var ei = Array.prototype.slice;
function ni(t2, e2, n2) {
  return (e2 - t2) * n2 + t2;
}
function ii(t2, e2, n2, i2) {
  for (var r2 = e2.length, o2 = 0; o2 < r2; o2++) t2[o2] = ni(e2[o2], n2[o2], i2);
  return t2;
}
function ri(t2, e2, n2, i2) {
  for (var r2 = e2.length, o2 = 0; o2 < r2; o2++) t2[o2] = e2[o2] + n2[o2] * i2;
  return t2;
}
function oi(t2, e2, n2, i2) {
  for (var r2 = e2.length, o2 = r2 && e2[0].length, a2 = 0; a2 < r2; a2++) {
    t2[a2] || (t2[a2] = []);
    for (var s2 = 0; s2 < o2; s2++) t2[a2][s2] = e2[a2][s2] + n2[a2][s2] * i2;
  }
  return t2;
}
function ai(t2, e2) {
  for (var n2 = t2.length, i2 = e2.length, r2 = n2 > i2 ? e2 : t2, o2 = Math.min(n2, i2), a2 = r2[o2 - 1] || { color: [0, 0, 0, 0], offset: 0 }, s2 = o2; s2 < Math.max(n2, i2); s2++) r2.push({ offset: a2.offset, color: a2.color.slice() });
}
function si(t2, e2, n2) {
  var i2 = t2, r2 = e2;
  if (i2.push && r2.push) {
    var o2 = i2.length, a2 = r2.length;
    if (o2 !== a2) if (o2 > a2) i2.length = a2;
    else for (var s2 = o2; s2 < a2; s2++) i2.push(n2 === 1 ? r2[s2] : ei.call(r2[s2]));
    var l2 = i2[0] && i2[0].length;
    for (s2 = 0; s2 < i2.length; s2++) if (n2 === 1) isNaN(i2[s2]) && (i2[s2] = r2[s2]);
    else for (var u2 = 0; u2 < l2; u2++) isNaN(i2[s2][u2]) && (i2[s2][u2] = r2[s2][u2]);
  }
}
function li(t2) {
  if (X(t2)) {
    var e2 = t2.length;
    if (X(t2[0])) {
      for (var n2 = [], i2 = 0; i2 < e2; i2++) n2.push(ei.call(t2[i2]));
      return n2;
    }
    return ei.call(t2);
  }
  return t2;
}
function ui(t2) {
  return t2[0] = Math.floor(t2[0]) || 0, t2[1] = Math.floor(t2[1]) || 0, t2[2] = Math.floor(t2[2]) || 0, t2[3] = t2[3] == null ? 1 : t2[3], "rgba(" + t2.join(",") + ")";
}
function hi(t2) {
  return t2 === 4 || t2 === 5;
}
function ci(t2) {
  return t2 === 1 || t2 === 2;
}
var pi = [0, 0, 0, 0], di = (function() {
  function t2(t3) {
    this.keyframes = [], this.discrete = !1, this._invalid = !1, this._needsSort = !1, this._lastFr = 0, this._lastFrP = 0, this.propName = t3;
  }
  return t2.prototype.isFinished = function() {
    return this._finished;
  }, t2.prototype.setFinished = function() {
    this._finished = !0, this._additiveTrack && this._additiveTrack.setFinished();
  }, t2.prototype.needsAnimate = function() {
    return this.keyframes.length >= 1;
  }, t2.prototype.getAdditiveTrack = function() {
    return this._additiveTrack;
  }, t2.prototype.addKeyframe = function(t3, e2, n2) {
    this._needsSort = !0;
    var i2 = this.keyframes, r2 = i2.length, o2 = !1, a2 = 6, s2 = e2;
    if (X(e2)) {
      var l2 = (function(t4) {
        return X(t4 && t4[0]) ? 2 : 1;
      })(e2);
      a2 = l2, (l2 === 1 && !it(e2[0]) || l2 === 2 && !it(e2[0][0])) && (o2 = !0);
    } else if (it(e2) && !ut(e2)) a2 = 0;
    else if (et(e2)) if (isNaN(+e2)) {
      var u2 = Zn(e2);
      u2 && (s2 = u2, a2 = 3);
    } else a2 = 0;
    else if (lt(e2)) {
      var h2 = H({}, s2);
      h2.colorStops = Z(e2.colorStops, function(t4) {
        return { offset: t4.offset, color: Zn(t4.color) };
      }), e2.type === "linear" ? a2 = 4 : (function(t4) {
        return t4.type === "radial";
      })(e2) && (a2 = 5), s2 = h2;
    }
    r2 === 0 ? this.valType = a2 : a2 === this.valType && a2 !== 6 || (o2 = !0), this.discrete = this.discrete || o2;
    var c2 = { time: t3, value: s2, rawValue: e2, percent: 0 };
    return n2 && (c2.easing = n2, c2.easingFunc = tt(n2) ? n2 : an[n2] || An(n2)), i2.push(c2), c2;
  }, t2.prototype.prepare = function(t3, e2) {
    var n2 = this.keyframes;
    this._needsSort && n2.sort(function(t4, e3) {
      return t4.time - e3.time;
    });
    for (var i2 = this.valType, r2 = n2.length, o2 = n2[r2 - 1], a2 = this.discrete, s2 = ci(i2), l2 = hi(i2), u2 = 0; u2 < r2; u2++) {
      var h2 = n2[u2], c2 = h2.value, p2 = o2.value;
      h2.percent = h2.time / t3, a2 || (s2 && u2 !== r2 - 1 ? si(c2, p2, i2) : l2 && ai(c2.colorStops, p2.colorStops));
    }
    if (!a2 && i2 !== 5 && e2 && this.needsAnimate() && e2.needsAnimate() && i2 === e2.valType && !e2._finished) {
      this._additiveTrack = e2;
      var d2 = n2[0].value;
      for (u2 = 0; u2 < r2; u2++) i2 === 0 ? n2[u2].additiveValue = n2[u2].value - d2 : i2 === 3 ? n2[u2].additiveValue = ri([], n2[u2].value, d2, -1) : ci(i2) && (n2[u2].additiveValue = i2 === 1 ? ri([], n2[u2].value, d2, -1) : oi([], n2[u2].value, d2, -1));
    }
  }, t2.prototype.step = function(t3, e2) {
    if (!this._finished) {
      this._additiveTrack && this._additiveTrack._finished && (this._additiveTrack = null);
      var n2, i2, r2, o2 = this._additiveTrack != null, a2 = o2 ? "additiveValue" : "value", s2 = this.valType, l2 = this.keyframes, u2 = l2.length, h2 = this.propName, c2 = s2 === 3, p2 = this._lastFr, d2 = Math.min;
      if (u2 === 1) i2 = r2 = l2[0];
      else {
        if (e2 < 0) n2 = 0;
        else if (e2 < this._lastFrP) {
          for (n2 = d2(p2 + 1, u2 - 1); n2 >= 0 && !(l2[n2].percent <= e2); n2--) ;
          n2 = d2(n2, u2 - 2);
        } else {
          for (n2 = p2; n2 < u2 && !(l2[n2].percent > e2); n2++) ;
          n2 = d2(n2 - 1, u2 - 2);
        }
        r2 = l2[n2 + 1], i2 = l2[n2];
      }
      if (i2 && r2) {
        this._lastFr = n2, this._lastFrP = e2;
        var f2 = r2.percent - i2.percent, g2 = f2 === 0 ? 1 : d2((e2 - i2.percent) / f2, 1);
        r2.easingFunc && (g2 = r2.easingFunc(g2));
        var v2 = o2 ? this._additiveValue : c2 ? pi : t3[h2];
        if (!ci(s2) && !c2 || v2 || (v2 = this._additiveValue = []), this.discrete) t3[h2] = g2 < 1 ? i2.rawValue : r2.rawValue;
        else if (ci(s2)) s2 === 1 ? ii(v2, i2[a2], r2[a2], g2) : (function(t4, e3, n3, i3) {
          for (var r3 = e3.length, o3 = r3 && e3[0].length, a3 = 0; a3 < r3; a3++) {
            t4[a3] || (t4[a3] = []);
            for (var s3 = 0; s3 < o3; s3++) t4[a3][s3] = ni(e3[a3][s3], n3[a3][s3], i3);
          }
        })(v2, i2[a2], r2[a2], g2);
        else if (hi(s2)) {
          var y2 = i2[a2], m2 = r2[a2], _2 = s2 === 4;
          t3[h2] = { type: _2 ? "linear" : "radial", x: ni(y2.x, m2.x, g2), y: ni(y2.y, m2.y, g2), colorStops: Z(y2.colorStops, function(t4, e3) {
            var n3 = m2.colorStops[e3];
            return { offset: ni(t4.offset, n3.offset, g2), color: ui(ii([], t4.color, n3.color, g2)) };
          }), global: m2.global }, _2 ? (t3[h2].x2 = ni(y2.x2, m2.x2, g2), t3[h2].y2 = ni(y2.y2, m2.y2, g2)) : t3[h2].r = ni(y2.r, m2.r, g2);
        } else if (c2) ii(v2, i2[a2], r2[a2], g2), o2 || (t3[h2] = ui(v2));
        else {
          var x2 = ni(i2[a2], r2[a2], g2);
          o2 ? this._additiveValue = x2 : t3[h2] = x2;
        }
        o2 && this._addToTarget(t3);
      }
    }
  }, t2.prototype._addToTarget = function(t3) {
    var e2 = this.valType, n2 = this.propName, i2 = this._additiveValue;
    e2 === 0 ? t3[n2] = t3[n2] + i2 : e2 === 3 ? (Zn(t3[n2], pi), ri(pi, pi, i2, 1), t3[n2] = ui(pi)) : e2 === 1 ? ri(t3[n2], t3[n2], i2, 1) : e2 === 2 && oi(t3[n2], t3[n2], i2, 1);
  }, t2;
})(), fi = (function() {
  function t2(t3, e2, n2, i2) {
    this._tracks = {}, this._trackKeys = [], this._maxTime = 0, this._started = 0, this._clip = null, this._target = t3, this._loop = e2, e2 && i2 ? E("Can' use additive animation on looped animation.") : (this._additiveAnimators = i2, this._allowDiscrete = n2);
  }
  return t2.prototype.getMaxTime = function() {
    return this._maxTime;
  }, t2.prototype.getDelay = function() {
    return this._delay;
  }, t2.prototype.getLoop = function() {
    return this._loop;
  }, t2.prototype.getTarget = function() {
    return this._target;
  }, t2.prototype.changeTarget = function(t3) {
    this._target = t3;
  }, t2.prototype.when = function(t3, e2, n2) {
    return this.whenWithKeys(t3, e2, K(e2), n2);
  }, t2.prototype.whenWithKeys = function(t3, e2, n2, i2) {
    for (var r2 = this._tracks, o2 = 0; o2 < n2.length; o2++) {
      var a2 = n2[o2], s2 = r2[a2];
      if (!s2) {
        s2 = r2[a2] = new di(a2);
        var l2 = void 0, u2 = this._getAdditiveTrack(a2);
        if (u2) {
          var h2 = u2.keyframes, c2 = h2[h2.length - 1];
          l2 = c2 && c2.value, u2.valType === 3 && l2 && (l2 = ui(l2));
        } else l2 = this._target[a2];
        if (l2 == null) continue;
        t3 > 0 && s2.addKeyframe(0, li(l2), i2), this._trackKeys.push(a2);
      }
      s2.addKeyframe(t3, li(e2[a2]), i2);
    }
    return this._maxTime = Math.max(this._maxTime, t3), this;
  }, t2.prototype.pause = function() {
    this._clip.pause(), this._paused = !0;
  }, t2.prototype.resume = function() {
    this._clip.resume(), this._paused = !1;
  }, t2.prototype.isPaused = function() {
    return !!this._paused;
  }, t2.prototype.duration = function(t3) {
    return this._maxTime = t3, this._force = !0, this;
  }, t2.prototype._doneCallback = function() {
    this._setTracksFinished(), this._clip = null;
    var t3 = this._doneCbs;
    if (t3) for (var e2 = t3.length, n2 = 0; n2 < e2; n2++) t3[n2].call(this);
  }, t2.prototype._abortedCallback = function() {
    this._setTracksFinished();
    var t3 = this.animation, e2 = this._abortedCbs;
    if (t3 && t3.removeClip(this._clip), this._clip = null, e2) for (var n2 = 0; n2 < e2.length; n2++) e2[n2].call(this);
  }, t2.prototype._setTracksFinished = function() {
    for (var t3 = this._tracks, e2 = this._trackKeys, n2 = 0; n2 < e2.length; n2++) t3[e2[n2]].setFinished();
  }, t2.prototype._getAdditiveTrack = function(t3) {
    var e2, n2 = this._additiveAnimators;
    if (n2) for (var i2 = 0; i2 < n2.length; i2++) {
      var r2 = n2[i2].getTrack(t3);
      r2 && (e2 = r2);
    }
    return e2;
  }, t2.prototype.start = function(t3) {
    if (!(this._started > 0)) {
      this._started = 1;
      for (var e2 = this, n2 = [], i2 = this._maxTime || 0, r2 = 0; r2 < this._trackKeys.length; r2++) {
        var o2 = this._trackKeys[r2], a2 = this._tracks[o2], s2 = this._getAdditiveTrack(o2), l2 = a2.keyframes, u2 = l2.length;
        if (a2.prepare(i2, s2), a2.needsAnimate()) if (!this._allowDiscrete && a2.discrete) {
          var h2 = l2[u2 - 1];
          h2 && (e2._target[a2.propName] = h2.rawValue), a2.setFinished();
        } else n2.push(a2);
      }
      if (n2.length || this._force) {
        var c2 = new Ln({ life: i2, loop: this._loop, delay: this._delay || 0, onframe: function(t4) {
          e2._started = 2;
          var i3 = e2._additiveAnimators;
          if (i3) {
            for (var r3 = !1, o3 = 0; o3 < i3.length; o3++) if (i3[o3]._clip) {
              r3 = !0;
              break;
            }
            r3 || (e2._additiveAnimators = null);
          }
          for (o3 = 0; o3 < n2.length; o3++) n2[o3].step(e2._target, t4);
          var a3 = e2._onframeCbs;
          if (a3) for (o3 = 0; o3 < a3.length; o3++) a3[o3](e2._target, t4);
        }, ondestroy: function() {
          e2._doneCallback();
        } });
        this._clip = c2, this.animation && this.animation.addClip(c2), t3 && c2.setEasing(t3);
      } else this._doneCallback();
      return this;
    }
  }, t2.prototype.stop = function(t3) {
    if (this._clip) {
      var e2 = this._clip;
      t3 && e2.onframe(1), this._abortedCallback();
    }
  }, t2.prototype.delay = function(t3) {
    return this._delay = t3, this;
  }, t2.prototype.during = function(t3) {
    return t3 && (this._onframeCbs || (this._onframeCbs = []), this._onframeCbs.push(t3)), this;
  }, t2.prototype.done = function(t3) {
    return t3 && (this._doneCbs || (this._doneCbs = []), this._doneCbs.push(t3)), this;
  }, t2.prototype.aborted = function(t3) {
    return t3 && (this._abortedCbs || (this._abortedCbs = []), this._abortedCbs.push(t3)), this;
  }, t2.prototype.getClip = function() {
    return this._clip;
  }, t2.prototype.getTrack = function(t3) {
    return this._tracks[t3];
  }, t2.prototype.getTracks = function() {
    var t3 = this;
    return Z(this._trackKeys, function(e2) {
      return t3._tracks[e2];
    });
  }, t2.prototype.stopTracks = function(t3, e2) {
    if (!t3.length || !this._clip) return !0;
    for (var n2 = this._tracks, i2 = this._trackKeys, r2 = 0; r2 < t3.length; r2++) {
      var o2 = n2[t3[r2]];
      o2 && !o2.isFinished() && (e2 ? o2.step(this._target, 1) : this._started === 1 && o2.step(this._target, 0), o2.setFinished());
    }
    var a2 = !0;
    for (r2 = 0; r2 < i2.length; r2++) if (!n2[i2[r2]].isFinished()) {
      a2 = !1;
      break;
    }
    return a2 && this._abortedCallback(), a2;
  }, t2.prototype.saveTo = function(t3, e2, n2) {
    if (t3) {
      e2 = e2 || this._trackKeys;
      for (var i2 = 0; i2 < e2.length; i2++) {
        var r2 = e2[i2], o2 = this._tracks[r2];
        if (o2 && !o2.isFinished()) {
          var a2 = o2.keyframes, s2 = a2[n2 ? 0 : a2.length - 1];
          s2 && (t3[r2] = li(s2.rawValue));
        }
      }
    }
  }, t2.prototype.__changeFinalValue = function(t3, e2) {
    e2 = e2 || K(t3);
    for (var n2 = 0; n2 < e2.length; n2++) {
      var i2 = e2[n2], r2 = this._tracks[i2];
      if (r2) {
        var o2 = r2.keyframes;
        if (o2.length > 1) {
          var a2 = o2.pop();
          r2.addKeyframe(a2.time, t3[i2]), r2.prepare(this._maxTime, r2.getAdditiveTrack());
        }
      }
    }
  }, t2;
})();
function gi() {
  return (/* @__PURE__ */ new Date()).getTime();
}
var vi, yi, mi = (function(t2) {
  function e2(e3) {
    var n2 = t2.call(this) || this;
    return n2._running = !1, n2._time = 0, n2._pausedTime = 0, n2._pauseStart = 0, n2._paused = !1, e3 = e3 || {}, n2.stage = e3.stage || {}, n2;
  }
  return _(e2, t2), e2.prototype.addClip = function(t3) {
    t3.animation && this.removeClip(t3), this._head ? (this._tail.next = t3, t3.prev = this._tail, t3.next = null, this._tail = t3) : this._head = this._tail = t3, t3.animation = this;
  }, e2.prototype.addAnimator = function(t3) {
    t3.animation = this;
    var e3 = t3.getClip();
    e3 && this.addClip(e3);
  }, e2.prototype.removeClip = function(t3) {
    if (t3.animation) {
      var e3 = t3.prev, n2 = t3.next;
      e3 ? e3.next = n2 : this._head = n2, n2 ? n2.prev = e3 : this._tail = e3, t3.next = t3.prev = t3.animation = null;
    }
  }, e2.prototype.removeAnimator = function(t3) {
    var e3 = t3.getClip();
    e3 && this.removeClip(e3), t3.animation = null;
  }, e2.prototype.update = function(t3) {
    for (var e3 = gi() - this._pausedTime, n2 = e3 - this._time, i2 = this._head; i2; ) {
      var r2 = i2.next;
      i2.step(e3, n2) && (i2.ondestroy(), this.removeClip(i2)), i2 = r2;
    }
    this._time = e3, t3 || (this.trigger("frame", n2), this.stage.update && this.stage.update());
  }, e2.prototype._startLoop = function() {
    var t3 = this;
    this._running = !0, rn(function e3() {
      t3._running && (rn(e3), !t3._paused && t3.update());
    });
  }, e2.prototype.start = function() {
    this._running || (this._time = gi(), this._pausedTime = 0, this._startLoop());
  }, e2.prototype.stop = function() {
    this._running = !1;
  }, e2.prototype.pause = function() {
    this._paused || (this._pauseStart = gi(), this._paused = !0);
  }, e2.prototype.resume = function() {
    this._paused && (this._pausedTime += gi() - this._pauseStart, this._paused = !1);
  }, e2.prototype.clear = function() {
    for (var t3 = this._head; t3; ) {
      var e3 = t3.next;
      t3.prev = t3.next = t3.animation = null, t3 = e3;
    }
    this._head = this._tail = null;
  }, e2.prototype.isFinished = function() {
    return this._head == null;
  }, e2.prototype.animate = function(t3, e3) {
    e3 = e3 || {}, this.start();
    var n2 = new fi(t3, e3.loop);
    return this.addAnimator(n2), n2;
  }, e2;
})(Gt), _i = b.domSupported, xi = (yi = { pointerdown: 1, pointerup: 1, pointermove: 1, pointerout: 1 }, { mouse: vi = ["click", "dblclick", "mousewheel", "wheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"], touch: ["touchstart", "touchend", "touchmove"], pointer: Z(vi, function(t2) {
  var e2 = t2.replace("mouse", "pointer");
  return yi.hasOwnProperty(e2) ? e2 : t2;
}) }), bi = ["mousemove", "mouseup"], wi = ["pointermove", "pointerup"], Si = !1;
function Mi(t2) {
  var e2 = t2.pointerType;
  return e2 === "pen" || e2 === "touch";
}
function Ti(t2) {
  t2 && (t2.zrByTouch = !0);
}
function ki(t2, e2) {
  for (var n2 = e2, i2 = !1; n2 && n2.nodeType !== 9 && !(i2 = n2.domBelongToZr || n2 !== e2 && n2 === t2.painterRoot); ) n2 = n2.parentNode;
  return i2;
}
var Ci = /* @__PURE__ */ (function() {
  return function(t2, e2) {
    this.stopPropagation = Ct, this.stopImmediatePropagation = Ct, this.preventDefault = Ct, this.type = e2.type, this.target = this.currentTarget = t2.dom, this.pointerType = e2.pointerType, this.clientX = e2.clientX, this.clientY = e2.clientY;
  };
})(), Ii = { mousedown: function(t2) {
  t2 = ae(this.dom, t2), this.__mayPointerCapture = [t2.zrX, t2.zrY], this.trigger("mousedown", t2);
}, mousemove: function(t2) {
  t2 = ae(this.dom, t2);
  var e2 = this.__mayPointerCapture;
  !e2 || t2.zrX === e2[0] && t2.zrY === e2[1] || this.__togglePointerCapture(!0), this.trigger("mousemove", t2);
}, mouseup: function(t2) {
  t2 = ae(this.dom, t2), this.__togglePointerCapture(!1), this.trigger("mouseup", t2);
}, mouseout: function(t2) {
  ki(this, (t2 = ae(this.dom, t2)).toElement || t2.relatedTarget) || (this.__pointerCapturing && (t2.zrEventControl = "no_globalout"), this.trigger("mouseout", t2));
}, wheel: function(t2) {
  Si = !0, t2 = ae(this.dom, t2), this.trigger("mousewheel", t2);
}, mousewheel: function(t2) {
  Si || (t2 = ae(this.dom, t2), this.trigger("mousewheel", t2));
}, touchstart: function(t2) {
  Ti(t2 = ae(this.dom, t2)), this.__lastTouchMoment = /* @__PURE__ */ new Date(), this.handler.processGesture(t2, "start"), Ii.mousemove.call(this, t2), Ii.mousedown.call(this, t2);
}, touchmove: function(t2) {
  Ti(t2 = ae(this.dom, t2)), this.handler.processGesture(t2, "change"), Ii.mousemove.call(this, t2);
}, touchend: function(t2) {
  Ti(t2 = ae(this.dom, t2)), this.handler.processGesture(t2, "end"), Ii.mouseup.call(this, t2), +/* @__PURE__ */ new Date() - +this.__lastTouchMoment < 300 && Ii.click.call(this, t2);
}, pointerdown: function(t2) {
  Ii.mousedown.call(this, t2);
}, pointermove: function(t2) {
  Mi(t2) || Ii.mousemove.call(this, t2);
}, pointerup: function(t2) {
  Ii.mouseup.call(this, t2);
}, pointerout: function(t2) {
  Mi(t2) || Ii.mouseout.call(this, t2);
} };
Y(["click", "dblclick", "contextmenu"], function(t2) {
  Ii[t2] = function(e2) {
    e2 = ae(this.dom, e2), this.trigger(t2, e2);
  };
});
var Di = { pointermove: function(t2) {
  Mi(t2) || Di.mousemove.call(this, t2);
}, pointerup: function(t2) {
  Di.mouseup.call(this, t2);
}, mousemove: function(t2) {
  this.trigger("mousemove", t2);
}, mouseup: function(t2) {
  var e2 = this.__pointerCapturing;
  this.__togglePointerCapture(!1), this.trigger("mouseup", t2), e2 && (t2.zrEventControl = "only_globalout", this.trigger("mouseout", t2));
} };
function Ai(t2, e2) {
  var n2 = e2.domHandlers;
  b.pointerEventsSupported ? Y(xi.pointer, function(i2) {
    Pi(e2, i2, function(e3) {
      n2[i2].call(t2, e3);
    });
  }) : (b.touchEventsSupported && Y(xi.touch, function(i2) {
    Pi(e2, i2, function(r2) {
      n2[i2].call(t2, r2), (function(t3) {
        t3.touching = !0, t3.touchTimer != null && (clearTimeout(t3.touchTimer), t3.touchTimer = null), t3.touchTimer = setTimeout(function() {
          t3.touching = !1, t3.touchTimer = null;
        }, 700);
      })(e2);
    });
  }), Y(xi.mouse, function(i2) {
    Pi(e2, i2, function(r2) {
      r2 = oe(r2), e2.touching || n2[i2].call(t2, r2);
    });
  }));
}
function Li(t2, e2) {
  function n2(n3) {
    Pi(e2, n3, function(i2) {
      i2 = oe(i2), ki(t2, i2.target) || (i2 = (function(t3, e3) {
        return ae(t3.dom, new Ci(t3, e3), !0);
      })(t2, i2), e2.domHandlers[n3].call(t2, i2));
    }, { capture: !0 });
  }
  b.pointerEventsSupported ? Y(wi, n2) : b.touchEventsSupported || Y(bi, n2);
}
function Pi(t2, e2, n2, i2) {
  t2.mounted[e2] = n2, t2.listenerOpts[e2] = i2, (function(t3, e3, n3, i3) {
    t3.addEventListener(e3, n3, i3);
  })(t2.domTarget, e2, n2, i2);
}
function Oi(t2) {
  var e2 = t2.mounted;
  for (var n2 in e2) e2.hasOwnProperty(n2) && se(t2.domTarget, n2, e2[n2], t2.listenerOpts[n2]);
  t2.mounted = {};
}
var Ri = /* @__PURE__ */ (function() {
  return function(t2, e2) {
    this.mounted = {}, this.listenerOpts = {}, this.touching = !1, this.domTarget = t2, this.domHandlers = e2;
  };
})(), Ni = (function(t2) {
  function e2(e3, n2) {
    var i2 = t2.call(this) || this;
    return i2.__pointerCapturing = !1, i2.dom = e3, i2.painterRoot = n2, i2._localHandlerScope = new Ri(e3, Ii), _i && (i2._globalHandlerScope = new Ri(document, Di)), Ai(i2, i2._localHandlerScope), i2;
  }
  return _(e2, t2), e2.prototype.dispose = function() {
    Oi(this._localHandlerScope), _i && Oi(this._globalHandlerScope);
  }, e2.prototype.setCursor = function(t3) {
    this.dom.style && (this.dom.style.cursor = t3 || "default");
  }, e2.prototype.__togglePointerCapture = function(t3) {
    if (this.__mayPointerCapture = null, _i && +this.__pointerCapturing ^ +t3) {
      this.__pointerCapturing = t3;
      var e3 = this._globalHandlerScope;
      t3 ? Li(this, e3) : Oi(e3);
    }
  }, e2;
})(Gt), zi = 1;
b.hasGlobalWindow && (zi = Math.max(window.devicePixelRatio || window.screen && window.screen.deviceXDPI / window.screen.logicalXDPI || 1, 1));
var Bi = zi, Ei = "#333", Fi = "#ccc", Vi = de, Hi = 5e-5;
function Wi(t2) {
  return t2 > Hi || t2 < -5e-5;
}
var Gi, Ui = [], Xi = [], Yi = [1, 0, 0, 1, 0, 0], Zi = Math.abs, ji = (function() {
  function t2() {
  }
  var e2;
  return t2.prototype.getLocalTransform = function(e3) {
    return t2.getLocalTransform(this, e3);
  }, t2.prototype.setPosition = function(t3) {
    this.x = t3[0], this.y = t3[1];
  }, t2.prototype.setScale = function(t3) {
    this.scaleX = t3[0], this.scaleY = t3[1];
  }, t2.prototype.setSkew = function(t3) {
    this.skewX = t3[0], this.skewY = t3[1];
  }, t2.prototype.setOrigin = function(t3) {
    this.originX = t3[0], this.originY = t3[1];
  }, t2.prototype.needLocalTransform = function() {
    return Wi(this.rotation) || Wi(this.x) || Wi(this.y) || Wi(this.scaleX - 1) || Wi(this.scaleY - 1) || Wi(this.skewX) || Wi(this.skewY);
  }, t2.prototype.updateTransform = function() {
    var t3 = this.parent && this.parent.transform, e3 = this.needLocalTransform(), n2 = this.transform;
    e3 || t3 ? (n2 = n2 || [1, 0, 0, 1, 0, 0], e3 ? this.getLocalTransform(n2) : Vi(n2), t3 && (e3 ? ge(n2, t3, n2) : fe(n2, t3)), this.transform = n2, this._resolveGlobalScaleRatio(n2)) : n2 && (Vi(n2), this.invTransform = null);
  }, t2.prototype._resolveGlobalScaleRatio = function(t3) {
    var e3 = this.globalScaleRatio;
    if (e3 != null && e3 !== 1) {
      this.getGlobalScale(Ui);
      var n2 = Ui[0] < 0 ? -1 : 1, i2 = Ui[1] < 0 ? -1 : 1, r2 = ((Ui[0] - n2) * e3 + n2) / Ui[0] || 0, o2 = ((Ui[1] - i2) * e3 + i2) / Ui[1] || 0;
      t3[0] *= r2, t3[1] *= r2, t3[2] *= o2, t3[3] *= o2;
    }
    this.invTransform = this.invTransform || [1, 0, 0, 1, 0, 0], me(this.invTransform, t3);
  }, t2.prototype.getComputedTransform = function() {
    for (var t3 = this, e3 = []; t3; ) e3.push(t3), t3 = t3.parent;
    for (; t3 = e3.pop(); ) t3.updateTransform();
    return this.transform;
  }, t2.prototype.setLocalTransform = function(t3) {
    if (t3) {
      var e3 = t3[0] * t3[0] + t3[1] * t3[1], n2 = t3[2] * t3[2] + t3[3] * t3[3], i2 = Math.atan2(t3[1], t3[0]), r2 = Math.PI / 2 + i2 - Math.atan2(t3[3], t3[2]);
      n2 = Math.sqrt(n2) * Math.cos(r2), e3 = Math.sqrt(e3), this.skewX = r2, this.skewY = 0, this.rotation = -i2, this.x = +t3[4], this.y = +t3[5], this.scaleX = e3, this.scaleY = n2, this.originX = 0, this.originY = 0;
    }
  }, t2.prototype.decomposeTransform = function() {
    if (this.transform) {
      var t3 = this.parent, e3 = this.transform;
      t3 && t3.transform && (t3.invTransform = t3.invTransform || [1, 0, 0, 1, 0, 0], ge(Xi, t3.invTransform, e3), e3 = Xi);
      var n2 = this.originX, i2 = this.originY;
      (n2 || i2) && (Yi[4] = n2, Yi[5] = i2, ge(Xi, e3, Yi), Xi[4] -= n2, Xi[5] -= i2, e3 = Xi), this.setLocalTransform(e3);
    }
  }, t2.prototype.getGlobalScale = function(t3) {
    var e3 = this.transform;
    return t3 = t3 || [], e3 ? (t3[0] = Math.sqrt(e3[0] * e3[0] + e3[1] * e3[1]), t3[1] = Math.sqrt(e3[2] * e3[2] + e3[3] * e3[3]), e3[0] < 0 && (t3[0] = -t3[0]), e3[3] < 0 && (t3[1] = -t3[1]), t3) : (t3[0] = 1, t3[1] = 1, t3);
  }, t2.prototype.transformCoordToLocal = function(t3, e3) {
    var n2 = [t3, e3], i2 = this.invTransform;
    return i2 && Et(n2, n2, i2), n2;
  }, t2.prototype.transformCoordToGlobal = function(t3, e3) {
    var n2 = [t3, e3], i2 = this.transform;
    return i2 && Et(n2, n2, i2), n2;
  }, t2.prototype.getLineScale = function() {
    var t3 = this.transform;
    return t3 && Zi(t3[0] - 1) > 1e-10 && Zi(t3[3] - 1) > 1e-10 ? Math.sqrt(Zi(t3[0] * t3[3] - t3[2] * t3[1])) : 1;
  }, t2.prototype.copyTransform = function(t3) {
    Ki(this, t3);
  }, t2.getLocalTransform = function(t3, e3) {
    e3 = e3 || [];
    var n2 = t3.originX || 0, i2 = t3.originY || 0, r2 = t3.scaleX, o2 = t3.scaleY, a2 = t3.anchorX, s2 = t3.anchorY, l2 = t3.rotation || 0, u2 = t3.x, h2 = t3.y, c2 = t3.skewX ? Math.tan(t3.skewX) : 0, p2 = t3.skewY ? Math.tan(-t3.skewY) : 0;
    if (n2 || i2 || a2 || s2) {
      var d2 = n2 + a2, f2 = i2 + s2;
      e3[4] = -d2 * r2 - c2 * f2 * o2, e3[5] = -f2 * o2 - p2 * d2 * r2;
    } else e3[4] = e3[5] = 0;
    return e3[0] = r2, e3[3] = o2, e3[1] = p2 * r2, e3[2] = c2 * o2, l2 && ye(e3, e3, l2), e3[4] += n2 + u2, e3[5] += i2 + h2, e3;
  }, t2.initDefaultProps = ((e2 = t2.prototype).scaleX = e2.scaleY = e2.globalScaleRatio = 1, void (e2.x = e2.y = e2.originX = e2.originY = e2.skewX = e2.skewY = e2.rotation = e2.anchorX = e2.anchorY = 0)), t2;
})(), qi = ["x", "y", "originX", "originY", "anchorX", "anchorY", "rotation", "scaleX", "scaleY", "skewX", "skewY"];
function Ki(t2, e2) {
  for (var n2 = 0; n2 < qi.length; n2++) {
    var i2 = qi[n2];
    t2[i2] = e2[i2];
  }
}
function $i(t2) {
  Gi || (Gi = new Rn(100)), t2 = t2 || w;
  var e2 = Gi.get(t2);
  return e2 || (e2 = { font: t2, strWidthCache: new Rn(500), asciiWidthMap: null, asciiWidthMapTried: !1, stWideCharWidth: M.measureText("国", t2).width, asciiCharWidth: M.measureText("a", t2).width }, Gi.put(t2, e2)), e2;
}
var Qi = 0, Ji = 5;
function tr(t2, e2) {
  return t2.asciiWidthMapTried || (t2.asciiWidthMap = (function(t3) {
    if (!(Qi >= Ji)) {
      t3 = t3 || w;
      for (var e3 = [], n2 = +/* @__PURE__ */ new Date(), i2 = 0; i2 <= 127; i2++) e3[i2] = M.measureText(String.fromCharCode(i2), t3).width;
      var r2 = +/* @__PURE__ */ new Date() - n2;
      return r2 > 16 ? Qi = Ji : r2 > 2 && Qi++, e3;
    }
  })(t2.font), t2.asciiWidthMapTried = !0), 0 <= e2 && e2 <= 127 ? t2.asciiWidthMap != null ? t2.asciiWidthMap[e2] : t2.asciiCharWidth : t2.stWideCharWidth;
}
function er(t2, e2) {
  var n2 = t2.strWidthCache, i2 = n2.get(e2);
  return i2 == null && (i2 = M.measureText(e2, t2.font).width, n2.put(e2, i2)), i2;
}
function nr(t2, e2, n2, i2) {
  var r2 = er($i(e2), t2), o2 = ar(e2), a2 = rr2(0, r2, n2), s2 = or(0, o2, i2);
  return new Oe(a2, s2, r2, o2);
}
function ir(t2, e2, n2, i2) {
  var r2 = ((t2 || "") + "").split(`
`);
  if (r2.length === 1) return nr(r2[0], e2, n2, i2);
  for (var o2 = new Oe(0, 0, 0, 0), a2 = 0; a2 < r2.length; a2++) {
    var s2 = nr(r2[a2], e2, n2, i2);
    a2 === 0 ? o2.copy(s2) : o2.union(s2);
  }
  return o2;
}
function rr2(t2, e2, n2, i2) {
  return n2 === "right" ? i2 ? t2 += e2 : t2 -= e2 : n2 === "center" && (i2 ? t2 += e2 / 2 : t2 -= e2 / 2), t2;
}
function or(t2, e2, n2, i2) {
  return n2 === "middle" ? i2 ? t2 += e2 / 2 : t2 -= e2 / 2 : n2 === "bottom" && (i2 ? t2 += e2 : t2 -= e2), t2;
}
function ar(t2) {
  return $i(t2).stWideCharWidth;
}
function sr(t2, e2) {
  return typeof t2 == "string" ? t2.lastIndexOf("%") >= 0 ? parseFloat(t2) / 100 * e2 : parseFloat(t2) : t2;
}
function lr(t2, e2, n2) {
  var i2 = e2.position || "inside", r2 = e2.distance != null ? e2.distance : 5, o2 = n2.height, a2 = n2.width, s2 = o2 / 2, l2 = n2.x, u2 = n2.y, h2 = "left", c2 = "top";
  if (i2 instanceof Array) l2 += sr(i2[0], n2.width), u2 += sr(i2[1], n2.height), h2 = null, c2 = null;
  else switch (i2) {
    case "left":
      l2 -= r2, u2 += s2, h2 = "right", c2 = "middle";
      break;
    case "right":
      l2 += r2 + a2, u2 += s2, c2 = "middle";
      break;
    case "top":
      l2 += a2 / 2, u2 -= r2, h2 = "center", c2 = "bottom";
      break;
    case "bottom":
      l2 += a2 / 2, u2 += o2 + r2, h2 = "center";
      break;
    case "inside":
      l2 += a2 / 2, u2 += s2, h2 = "center", c2 = "middle";
      break;
    case "insideLeft":
      l2 += r2, u2 += s2, c2 = "middle";
      break;
    case "insideRight":
      l2 += a2 - r2, u2 += s2, h2 = "right", c2 = "middle";
      break;
    case "insideTop":
      l2 += a2 / 2, u2 += r2, h2 = "center";
      break;
    case "insideBottom":
      l2 += a2 / 2, u2 += o2 - r2, h2 = "center", c2 = "bottom";
      break;
    case "insideTopLeft":
      l2 += r2, u2 += r2;
      break;
    case "insideTopRight":
      l2 += a2 - r2, u2 += r2, h2 = "right";
      break;
    case "insideBottomLeft":
      l2 += r2, u2 += o2 - r2, c2 = "bottom";
      break;
    case "insideBottomRight":
      l2 += a2 - r2, u2 += o2 - r2, h2 = "right", c2 = "bottom";
  }
  return (t2 = t2 || {}).x = l2, t2.y = u2, t2.align = h2, t2.verticalAlign = c2, t2;
}
var ur = "__zr_normal__", hr = qi.concat(["ignore"]), cr = j(qi, function(t2, e2) {
  return t2[e2] = !0, t2;
}, { ignore: !1 }), pr = {}, dr = new Oe(0, 0, 0, 0), fr = [], gr = (function() {
  function t2(t3) {
    this.id = B(), this.animators = [], this.currentStates = [], this.states = {}, this._init(t3);
  }
  return t2.prototype._init = function(t3) {
    this.attr(t3);
  }, t2.prototype.drift = function(t3, e2, n2) {
    switch (this.draggable) {
      case "horizontal":
        e2 = 0;
        break;
      case "vertical":
        t3 = 0;
    }
    var i2 = this.transform;
    i2 || (i2 = this.transform = [1, 0, 0, 1, 0, 0]), i2[4] += t3, i2[5] += e2, this.decomposeTransform(), this.markRedraw();
  }, t2.prototype.beforeUpdate = function() {
  }, t2.prototype.afterUpdate = function() {
  }, t2.prototype.update = function() {
    this.updateTransform(), this.__dirty && this.updateInnerText();
  }, t2.prototype.updateInnerText = function(t3) {
    var e2 = this._textContent;
    if (e2 && (!e2.ignore || t3)) {
      this.textConfig || (this.textConfig = {});
      var n2 = this.textConfig, i2 = n2.local, r2 = e2.innerTransformable, o2 = void 0, a2 = void 0, s2 = !1;
      r2.parent = i2 ? this : null;
      var l2 = !1;
      r2.copyTransform(e2);
      var u2 = n2.position != null, h2 = n2.autoOverflowArea, c2 = void 0;
      if ((h2 || u2) && (c2 = dr, n2.layoutRect ? c2.copy(n2.layoutRect) : c2.copy(this.getBoundingRect()), i2 || c2.applyTransform(this.transform)), u2) {
        this.calculateTextPosition ? this.calculateTextPosition(pr, n2, c2) : lr(pr, n2, c2), r2.x = pr.x, r2.y = pr.y, o2 = pr.align, a2 = pr.verticalAlign;
        var p2 = n2.origin;
        if (p2 && n2.rotation != null) {
          var d2 = void 0, f2 = void 0;
          p2 === "center" ? (d2 = 0.5 * c2.width, f2 = 0.5 * c2.height) : (d2 = sr(p2[0], c2.width), f2 = sr(p2[1], c2.height)), l2 = !0, r2.originX = -r2.x + d2 + (i2 ? 0 : c2.x), r2.originY = -r2.y + f2 + (i2 ? 0 : c2.y);
        }
      }
      n2.rotation != null && (r2.rotation = n2.rotation);
      var g2 = n2.offset;
      g2 && (r2.x += g2[0], r2.y += g2[1], l2 || (r2.originX = -g2[0], r2.originY = -g2[1]));
      var v2 = this._innerTextDefaultStyle || (this._innerTextDefaultStyle = {});
      if (h2) {
        var y2 = v2.overflowRect = v2.overflowRect || new Oe(0, 0, 0, 0);
        r2.getLocalTransform(fr), me(fr, fr), Oe.copy(y2, c2), y2.applyTransform(fr);
      } else v2.overflowRect = null;
      var m2 = void 0, _2 = void 0, x2 = void 0;
      (n2.inside == null ? typeof n2.position == "string" && n2.position.indexOf("inside") >= 0 : n2.inside) && this.canBeInsideText() ? (m2 = n2.insideFill, _2 = n2.insideStroke, m2 != null && m2 !== "auto" || (m2 = this.getInsideTextFill()), _2 != null && _2 !== "auto" || (_2 = this.getInsideTextStroke(m2), x2 = !0)) : (m2 = n2.outsideFill, _2 = n2.outsideStroke, m2 != null && m2 !== "auto" || (m2 = this.getOutsideFill()), _2 != null && _2 !== "auto" || (_2 = this.getOutsideStroke(m2), x2 = !0)), (m2 = m2 || "#000") === v2.fill && _2 === v2.stroke && x2 === v2.autoStroke && o2 === v2.align && a2 === v2.verticalAlign || (s2 = !0, v2.fill = m2, v2.stroke = _2, v2.autoStroke = x2, v2.align = o2, v2.verticalAlign = a2, e2.setDefaultTextStyle(v2)), e2.__dirty |= 1, s2 && e2.dirtyStyle(!0);
    }
  }, t2.prototype.canBeInsideText = function() {
    return !0;
  }, t2.prototype.getInsideTextFill = function() {
    return "#fff";
  }, t2.prototype.getInsideTextStroke = function(t3) {
    return "#000";
  }, t2.prototype.getOutsideFill = function() {
    return this.__zr && this.__zr.isDarkMode() ? Fi : Ei;
  }, t2.prototype.getOutsideStroke = function(t3) {
    var e2 = this.__zr && this.__zr.getBackgroundColor(), n2 = typeof e2 == "string" && Zn(e2);
    n2 || (n2 = [255, 255, 255, 1]);
    for (var i2 = n2[3], r2 = this.__zr.isDarkMode(), o2 = 0; o2 < 3; o2++) n2[o2] = n2[o2] * i2 + (r2 ? 0 : 255) * (1 - i2);
    return n2[3] = 1, $n(n2, "rgba");
  }, t2.prototype.traverse = function(t3, e2) {
  }, t2.prototype.attrKV = function(t3, e2) {
    t3 === "textConfig" ? this.setTextConfig(e2) : t3 === "textContent" ? this.setTextContent(e2) : t3 === "clipPath" ? this.setClipPath(e2) : t3 === "extra" ? (this.extra = this.extra || {}, H(this.extra, e2)) : this[t3] = e2;
  }, t2.prototype.hide = function() {
    this.ignore = !0, this.markRedraw();
  }, t2.prototype.show = function() {
    this.ignore = !1, this.markRedraw();
  }, t2.prototype.attr = function(t3, e2) {
    if (typeof t3 == "string") this.attrKV(t3, e2);
    else if (rt(t3)) for (var n2 = K(t3), i2 = 0; i2 < n2.length; i2++) {
      var r2 = n2[i2];
      this.attrKV(r2, t3[r2]);
    }
    return this.markRedraw(), this;
  }, t2.prototype.saveCurrentToNormalState = function(t3) {
    this._innerSaveToNormal(t3);
    for (var e2 = this._normalState, n2 = 0; n2 < this.animators.length; n2++) {
      var i2 = this.animators[n2], r2 = i2.__fromStateTransition;
      if (!(i2.getLoop() || r2 && r2 !== ur)) {
        var o2 = i2.targetName, a2 = o2 ? e2[o2] : e2;
        i2.saveTo(a2);
      }
    }
  }, t2.prototype._innerSaveToNormal = function(t3) {
    var e2 = this._normalState;
    e2 || (e2 = this._normalState = {}), t3.textConfig && !e2.textConfig && (e2.textConfig = this.textConfig), this._savePrimaryToNormal(t3, e2, hr);
  }, t2.prototype._savePrimaryToNormal = function(t3, e2, n2) {
    for (var i2 = 0; i2 < n2.length; i2++) {
      var r2 = n2[i2];
      t3[r2] == null || r2 in e2 || (e2[r2] = this[r2]);
    }
  }, t2.prototype.hasState = function() {
    return this.currentStates.length > 0;
  }, t2.prototype.getState = function(t3) {
    return this.states[t3];
  }, t2.prototype.ensureState = function(t3) {
    var e2 = this.states;
    return e2[t3] || (e2[t3] = {}), e2[t3];
  }, t2.prototype.clearStates = function(t3) {
    this.useState(ur, !1, t3);
  }, t2.prototype.useState = function(t3, e2, n2, i2) {
    var r2 = t3 === ur;
    if (this.hasState() || !r2) {
      var o2 = this.currentStates, a2 = this.stateTransition;
      if (!(G(o2, t3) >= 0) || !e2 && o2.length !== 1) {
        var s2;
        if (this.stateProxy && !r2 && (s2 = this.stateProxy(t3)), s2 || (s2 = this.states && this.states[t3]), s2 || r2) {
          r2 || this.saveCurrentToNormalState(s2);
          var l2 = !!(s2 && s2.hoverLayer || i2);
          l2 && this._toggleHoverLayerFlag(!0), this._applyStateObj(t3, s2, this._normalState, e2, !n2 && !this.__inHover && a2 && a2.duration > 0, a2);
          var u2 = this._textContent, h2 = this._textGuide;
          return u2 && u2.useState(t3, e2, n2, l2), h2 && h2.useState(t3, e2, n2, l2), r2 ? (this.currentStates = [], this._normalState = {}) : e2 ? this.currentStates.push(t3) : this.currentStates = [t3], this._updateAnimationTargets(), this.markRedraw(), !l2 && this.__inHover && (this._toggleHoverLayerFlag(!1), this.__dirty &= -2), s2;
        }
        E("State " + t3 + " not exists.");
      }
    }
  }, t2.prototype.useStates = function(t3, e2, n2) {
    if (t3.length) {
      var i2 = [], r2 = this.currentStates, o2 = t3.length, a2 = o2 === r2.length;
      if (a2) {
        for (var s2 = 0; s2 < o2; s2++) if (t3[s2] !== r2[s2]) {
          a2 = !1;
          break;
        }
      }
      if (a2) return;
      for (s2 = 0; s2 < o2; s2++) {
        var l2 = t3[s2], u2 = void 0;
        this.stateProxy && (u2 = this.stateProxy(l2, t3)), u2 || (u2 = this.states[l2]), u2 && i2.push(u2);
      }
      var h2 = i2[o2 - 1], c2 = !!(h2 && h2.hoverLayer || n2);
      c2 && this._toggleHoverLayerFlag(!0);
      var p2 = this._mergeStates(i2), d2 = this.stateTransition;
      this.saveCurrentToNormalState(p2), this._applyStateObj(t3.join(","), p2, this._normalState, !1, !e2 && !this.__inHover && d2 && d2.duration > 0, d2);
      var f2 = this._textContent, g2 = this._textGuide;
      f2 && f2.useStates(t3, e2, c2), g2 && g2.useStates(t3, e2, c2), this._updateAnimationTargets(), this.currentStates = t3.slice(), this.markRedraw(), !c2 && this.__inHover && (this._toggleHoverLayerFlag(!1), this.__dirty &= -2);
    } else this.clearStates();
  }, t2.prototype.isSilent = function() {
    for (var t3 = this; t3; ) {
      if (t3.silent) return !0;
      var e2 = t3.__hostTarget;
      t3 = e2 ? t3.ignoreHostSilent ? null : e2 : t3.parent;
    }
    return !1;
  }, t2.prototype._updateAnimationTargets = function() {
    for (var t3 = 0; t3 < this.animators.length; t3++) {
      var e2 = this.animators[t3];
      e2.targetName && e2.changeTarget(this[e2.targetName]);
    }
  }, t2.prototype.removeState = function(t3) {
    var e2 = G(this.currentStates, t3);
    if (e2 >= 0) {
      var n2 = this.currentStates.slice();
      n2.splice(e2, 1), this.useStates(n2);
    }
  }, t2.prototype.replaceState = function(t3, e2, n2) {
    var i2 = this.currentStates.slice(), r2 = G(i2, t3), o2 = G(i2, e2) >= 0;
    r2 >= 0 ? o2 ? i2.splice(r2, 1) : i2[r2] = e2 : n2 && !o2 && i2.push(e2), this.useStates(i2);
  }, t2.prototype.toggleState = function(t3, e2) {
    e2 ? this.useState(t3, !0) : this.removeState(t3);
  }, t2.prototype._mergeStates = function(t3) {
    for (var e2, n2 = {}, i2 = 0; i2 < t3.length; i2++) {
      var r2 = t3[i2];
      H(n2, r2), r2.textConfig && H(e2 = e2 || {}, r2.textConfig);
    }
    return e2 && (n2.textConfig = e2), n2;
  }, t2.prototype._applyStateObj = function(t3, e2, n2, i2, r2, o2) {
    var a2 = !(e2 && i2);
    e2 && e2.textConfig ? (this.textConfig = H({}, i2 ? this.textConfig : n2.textConfig), H(this.textConfig, e2.textConfig)) : a2 && n2.textConfig && (this.textConfig = n2.textConfig);
    for (var s2 = {}, l2 = !1, u2 = 0; u2 < hr.length; u2++) {
      var h2 = hr[u2], c2 = r2 && cr[h2];
      e2 && e2[h2] != null ? c2 ? (l2 = !0, s2[h2] = e2[h2]) : this[h2] = e2[h2] : a2 && n2[h2] != null && (c2 ? (l2 = !0, s2[h2] = n2[h2]) : this[h2] = n2[h2]);
    }
    if (!r2) for (u2 = 0; u2 < this.animators.length; u2++) {
      var p2 = this.animators[u2], d2 = p2.targetName;
      p2.getLoop() || p2.__changeFinalValue(d2 ? (e2 || n2)[d2] : e2 || n2);
    }
    l2 && this._transitionState(t3, s2, o2);
  }, t2.prototype._attachComponent = function(t3) {
    if ((!t3.__zr || t3.__hostTarget) && t3 !== this) {
      var e2 = this.__zr;
      e2 && t3.addSelfToZr(e2), t3.__zr = e2, t3.__hostTarget = this;
    }
  }, t2.prototype._detachComponent = function(t3) {
    t3.__zr && t3.removeSelfFromZr(t3.__zr), t3.__zr = null, t3.__hostTarget = null;
  }, t2.prototype.getClipPath = function() {
    return this._clipPath;
  }, t2.prototype.setClipPath = function(t3) {
    this._clipPath && this._clipPath !== t3 && this.removeClipPath(), this._attachComponent(t3), this._clipPath = t3, this.markRedraw();
  }, t2.prototype.removeClipPath = function() {
    var t3 = this._clipPath;
    t3 && (this._detachComponent(t3), this._clipPath = null, this.markRedraw());
  }, t2.prototype.getTextContent = function() {
    return this._textContent;
  }, t2.prototype.setTextContent = function(t3) {
    var e2 = this._textContent;
    e2 !== t3 && (e2 && e2 !== t3 && this.removeTextContent(), t3.innerTransformable = new ji(), this._attachComponent(t3), this._textContent = t3, this.markRedraw());
  }, t2.prototype.setTextConfig = function(t3) {
    this.textConfig || (this.textConfig = {}), H(this.textConfig, t3), this.markRedraw();
  }, t2.prototype.removeTextConfig = function() {
    this.textConfig = null, this.markRedraw();
  }, t2.prototype.removeTextContent = function() {
    var t3 = this._textContent;
    t3 && (t3.innerTransformable = null, this._detachComponent(t3), this._textContent = null, this._innerTextDefaultStyle = null, this.markRedraw());
  }, t2.prototype.getTextGuideLine = function() {
    return this._textGuide;
  }, t2.prototype.setTextGuideLine = function(t3) {
    this._textGuide && this._textGuide !== t3 && this.removeTextGuideLine(), this._attachComponent(t3), this._textGuide = t3, this.markRedraw();
  }, t2.prototype.removeTextGuideLine = function() {
    var t3 = this._textGuide;
    t3 && (this._detachComponent(t3), this._textGuide = null, this.markRedraw());
  }, t2.prototype.markRedraw = function() {
    this.__dirty |= 1;
    var t3 = this.__zr;
    t3 && (this.__inHover ? t3.refreshHover() : t3.refresh()), this.__hostTarget && this.__hostTarget.markRedraw();
  }, t2.prototype.dirty = function() {
    this.markRedraw();
  }, t2.prototype._toggleHoverLayerFlag = function(t3) {
    this.__inHover = t3;
    var e2 = this._textContent, n2 = this._textGuide;
    e2 && (e2.__inHover = t3), n2 && (n2.__inHover = t3);
  }, t2.prototype.addSelfToZr = function(t3) {
    if (this.__zr !== t3) {
      this.__zr = t3;
      var e2 = this.animators;
      if (e2) for (var n2 = 0; n2 < e2.length; n2++) t3.animation.addAnimator(e2[n2]);
      this._clipPath && this._clipPath.addSelfToZr(t3), this._textContent && this._textContent.addSelfToZr(t3), this._textGuide && this._textGuide.addSelfToZr(t3);
    }
  }, t2.prototype.removeSelfFromZr = function(t3) {
    if (this.__zr) {
      this.__zr = null;
      var e2 = this.animators;
      if (e2) for (var n2 = 0; n2 < e2.length; n2++) t3.animation.removeAnimator(e2[n2]);
      this._clipPath && this._clipPath.removeSelfFromZr(t3), this._textContent && this._textContent.removeSelfFromZr(t3), this._textGuide && this._textGuide.removeSelfFromZr(t3);
    }
  }, t2.prototype.animate = function(t3, e2, n2) {
    var i2 = t3 ? this[t3] : this, r2 = new fi(i2, e2, n2);
    return t3 && (r2.targetName = t3), this.addAnimator(r2, t3), r2;
  }, t2.prototype.addAnimator = function(t3, e2) {
    var n2 = this.__zr, i2 = this;
    t3.during(function() {
      i2.updateDuringAnimation(e2);
    }).done(function() {
      var e3 = i2.animators, n3 = G(e3, t3);
      n3 >= 0 && e3.splice(n3, 1);
    }), this.animators.push(t3), n2 && n2.animation.addAnimator(t3), n2 && n2.wakeUp();
  }, t2.prototype.updateDuringAnimation = function(t3) {
    this.markRedraw();
  }, t2.prototype.stopAnimation = function(t3, e2) {
    for (var n2 = this.animators, i2 = n2.length, r2 = [], o2 = 0; o2 < i2; o2++) {
      var a2 = n2[o2];
      t3 && t3 !== a2.scope ? r2.push(a2) : a2.stop(e2);
    }
    return this.animators = r2, this;
  }, t2.prototype.animateTo = function(t3, e2, n2) {
    vr(this, t3, e2, n2);
  }, t2.prototype.animateFrom = function(t3, e2, n2) {
    vr(this, t3, e2, n2, !0);
  }, t2.prototype._transitionState = function(t3, e2, n2, i2) {
    for (var r2 = vr(this, e2, n2, i2), o2 = 0; o2 < r2.length; o2++) r2[o2].__fromStateTransition = t3;
  }, t2.prototype.getBoundingRect = function() {
    return null;
  }, t2.prototype.getPaintRect = function() {
    return null;
  }, t2.initDefaultProps = (function() {
    var e2 = t2.prototype;
    function n2(t3, n3, i2, r2) {
      function o2(t4, e3) {
        Object.defineProperty(e3, 0, { get: function() {
          return t4[i2];
        }, set: function(e4) {
          t4[i2] = e4;
        } }), Object.defineProperty(e3, 1, { get: function() {
          return t4[r2];
        }, set: function(e4) {
          t4[r2] = e4;
        } });
      }
      Object.defineProperty(e2, t3, { get: function() {
        return this[n3] || o2(this, this[n3] = []), this[n3];
      }, set: function(t4) {
        this[i2] = t4[0], this[r2] = t4[1], this[n3] = t4, o2(this, t4);
      } });
    }
    e2.type = "element", e2.name = "", e2.ignore = e2.silent = e2.ignoreHostSilent = e2.isGroup = e2.draggable = e2.dragging = e2.ignoreClip = e2.__inHover = !1, e2.__dirty = 1, Object.defineProperty && (n2("position", "_legacyPos", "x", "y"), n2("scale", "_legacyScale", "scaleX", "scaleY"), n2("origin", "_legacyOrigin", "originX", "originY"));
  })(), t2;
})();
function vr(t2, e2, n2, i2, r2) {
  var o2 = [];
  _r(t2, "", t2, e2, n2 = n2 || {}, i2, o2, r2);
  var a2 = o2.length, s2 = !1, l2 = n2.done, u2 = n2.aborted, h2 = function() {
    s2 = !0, --a2 <= 0 && (s2 ? l2 && l2() : u2 && u2());
  }, c2 = function() {
    --a2 <= 0 && (s2 ? l2 && l2() : u2 && u2());
  };
  a2 || l2 && l2(), o2.length > 0 && n2.during && o2[0].during(function(t3, e3) {
    n2.during(e3);
  });
  for (var p2 = 0; p2 < o2.length; p2++) {
    var d2 = o2[p2];
    h2 && d2.done(h2), c2 && d2.aborted(c2), n2.force && d2.duration(n2.duration), d2.start(n2.easing);
  }
  return o2;
}
function yr(t2, e2, n2) {
  for (var i2 = 0; i2 < n2; i2++) t2[i2] = e2[i2];
}
function mr(t2, e2, n2) {
  if (X(e2[n2])) if (X(t2[n2]) || (t2[n2] = []), at(e2[n2])) {
    var i2 = e2[n2].length;
    t2[n2].length !== i2 && (t2[n2] = new e2[n2].constructor(i2), yr(t2[n2], e2[n2], i2));
  } else {
    var r2 = e2[n2], o2 = t2[n2], a2 = r2.length;
    if (X(r2[0])) for (var s2 = r2[0].length, l2 = 0; l2 < a2; l2++) o2[l2] ? yr(o2[l2], r2[l2], s2) : o2[l2] = Array.prototype.slice.call(r2[l2]);
    else yr(o2, r2, a2);
    o2.length = r2.length;
  }
  else t2[n2] = e2[n2];
}
function _r(t2, e2, n2, i2, r2, o2, a2, s2) {
  for (var l2 = K(i2), u2 = r2.duration, h2 = r2.delay, c2 = r2.additive, p2 = r2.setToFinal, d2 = !rt(o2), f2 = t2.animators, g2 = [], v2 = 0; v2 < l2.length; v2++) {
    var y2 = l2[v2], m2 = i2[y2];
    if (m2 != null && n2[y2] != null && (d2 || o2[y2])) if (!rt(m2) || X(m2) || lt(m2)) g2.push(y2);
    else {
      if (e2) {
        s2 || (n2[y2] = m2, t2.updateDuringAnimation(e2));
        continue;
      }
      _r(t2, y2, n2[y2], m2, r2, o2 && o2[y2], a2, s2);
    }
    else s2 || (n2[y2] = m2, t2.updateDuringAnimation(e2), g2.push(y2));
  }
  var _2 = g2.length;
  if (!c2 && _2) {
    for (var x2 = 0; x2 < f2.length; x2++)
      if ((w2 = f2[x2]).targetName === e2 && w2.stopTracks(g2)) {
        var b2 = G(f2, w2);
        f2.splice(b2, 1);
      }
  }
  if (r2.force || (g2 = q(g2, function(t3) {
    return e3 = i2[t3], r3 = n2[t3], !(e3 === r3 || X(e3) && X(r3) && (function(t4, e4) {
      var n3 = t4.length;
      if (n3 !== e4.length) return !1;
      for (var i3 = 0; i3 < n3; i3++) if (t4[i3] !== e4[i3]) return !1;
      return !0;
    })(e3, r3));
    var e3, r3;
  }), _2 = g2.length), _2 > 0 || r2.force && !a2.length) {
    var w2, S2 = void 0, M2 = void 0, T2 = void 0;
    if (s2)
      for (M2 = {}, p2 && (S2 = {}), x2 = 0; x2 < _2; x2++)
        M2[y2 = g2[x2]] = n2[y2], p2 ? S2[y2] = i2[y2] : n2[y2] = i2[y2];
    else if (p2)
      for (T2 = {}, x2 = 0; x2 < _2; x2++)
        T2[y2 = g2[x2]] = li(n2[y2]), mr(n2, i2, y2);
    (w2 = new fi(n2, !1, !1, c2 ? q(f2, function(t3) {
      return t3.targetName === e2;
    }) : null)).targetName = e2, r2.scope && (w2.scope = r2.scope), p2 && S2 && w2.whenWithKeys(0, S2, g2), T2 && w2.whenWithKeys(0, T2, g2), w2.whenWithKeys(u2 ?? 500, s2 ? M2 : i2, g2).delay(h2 || 0), t2.addAnimator(w2, e2), a2.push(w2);
  }
}
U(gr, Gt), U(gr, ji);
var xr = (function(t2) {
  function e2(e3) {
    var n2 = t2.call(this) || this;
    return n2.isGroup = !0, n2._children = [], n2.attr(e3), n2;
  }
  return _(e2, t2), e2.prototype.childrenRef = function() {
    return this._children;
  }, e2.prototype.children = function() {
    return this._children.slice();
  }, e2.prototype.childAt = function(t3) {
    return this._children[t3];
  }, e2.prototype.childOfName = function(t3) {
    for (var e3 = this._children, n2 = 0; n2 < e3.length; n2++) if (e3[n2].name === t3) return e3[n2];
  }, e2.prototype.childCount = function() {
    return this._children.length;
  }, e2.prototype.add = function(t3) {
    return t3 && t3 !== this && t3.parent !== this && (this._children.push(t3), this._doAdd(t3)), this;
  }, e2.prototype.addBefore = function(t3, e3) {
    if (t3 && t3 !== this && t3.parent !== this && e3 && e3.parent === this) {
      var n2 = this._children, i2 = n2.indexOf(e3);
      i2 >= 0 && (n2.splice(i2, 0, t3), this._doAdd(t3));
    }
    return this;
  }, e2.prototype.replace = function(t3, e3) {
    var n2 = G(this._children, t3);
    return n2 >= 0 && this.replaceAt(e3, n2), this;
  }, e2.prototype.replaceAt = function(t3, e3) {
    var n2 = this._children, i2 = n2[e3];
    if (t3 && t3 !== this && t3.parent !== this && t3 !== i2) {
      n2[e3] = t3, i2.parent = null;
      var r2 = this.__zr;
      r2 && i2.removeSelfFromZr(r2), this._doAdd(t3);
    }
    return this;
  }, e2.prototype._doAdd = function(t3) {
    t3.parent && t3.parent.remove(t3), t3.parent = this;
    var e3 = this.__zr;
    e3 && e3 !== t3.__zr && t3.addSelfToZr(e3), e3 && e3.refresh();
  }, e2.prototype.remove = function(t3) {
    var e3 = this.__zr, n2 = this._children, i2 = G(n2, t3);
    return i2 < 0 || (n2.splice(i2, 1), t3.parent = null, e3 && t3.removeSelfFromZr(e3), e3 && e3.refresh()), this;
  }, e2.prototype.removeAll = function() {
    for (var t3 = this._children, e3 = this.__zr, n2 = 0; n2 < t3.length; n2++) {
      var i2 = t3[n2];
      e3 && i2.removeSelfFromZr(e3), i2.parent = null;
    }
    return t3.length = 0, this;
  }, e2.prototype.eachChild = function(t3, e3) {
    for (var n2 = this._children, i2 = 0; i2 < n2.length; i2++) {
      var r2 = n2[i2];
      t3.call(e3, r2, i2);
    }
    return this;
  }, e2.prototype.traverse = function(t3, e3) {
    for (var n2 = 0; n2 < this._children.length; n2++) {
      var i2 = this._children[n2], r2 = t3.call(e3, i2);
      i2.isGroup && !r2 && i2.traverse(t3, e3);
    }
    return this;
  }, e2.prototype.addSelfToZr = function(e3) {
    t2.prototype.addSelfToZr.call(this, e3);
    for (var n2 = 0; n2 < this._children.length; n2++)
      this._children[n2].addSelfToZr(e3);
  }, e2.prototype.removeSelfFromZr = function(e3) {
    t2.prototype.removeSelfFromZr.call(this, e3);
    for (var n2 = 0; n2 < this._children.length; n2++)
      this._children[n2].removeSelfFromZr(e3);
  }, e2.prototype.getBoundingRect = function(t3) {
    for (var e3 = new Oe(0, 0, 0, 0), n2 = t3 || this._children, i2 = [], r2 = null, o2 = 0; o2 < n2.length; o2++) {
      var a2 = n2[o2];
      if (!a2.ignore && !a2.invisible) {
        var s2 = a2.getBoundingRect(), l2 = a2.getLocalTransform(i2);
        l2 ? (Oe.applyTransform(e3, s2, l2), (r2 = r2 || e3.clone()).union(e3)) : (r2 = r2 || s2.clone()).union(s2);
      }
    }
    return r2 || e3;
  }, e2;
})(gr);
xr.prototype.type = "group";
var br = {}, wr = {}, Sr = (function() {
  function t2(t3, e2, n2) {
    var i2 = this;
    this._sleepAfterStill = 10, this._stillFrameAccum = 0, this._needsRefresh = !0, this._needsRefreshHover = !0, this._darkMode = !1, n2 = n2 || {}, this.dom = e2, this.id = t3;
    var r2 = new on2(), o2 = n2.renderer || "canvas";
    br[o2] || (o2 = K(br)[0]), n2.useDirtyRect = n2.useDirtyRect != null && n2.useDirtyRect;
    var a2 = new br[o2](e2, r2, n2, t3), s2 = n2.ssr || a2.ssrOnly;
    this.storage = r2, this.painter = a2;
    var l2, u2 = b.node || b.worker || s2 ? null : new Ni(a2.getViewportRoot(), a2.root), h2 = n2.useCoarsePointer;
    (h2 == null || h2 === "auto" ? b.touchEventsSupported : h2) && (l2 = ct(n2.pointerSize, 44)), this.handler = new Ue(r2, a2, u2, a2.root, l2), this.animation = new mi({ stage: { update: s2 ? null : function() {
      return i2._flush(!0);
    } } }), s2 || this.animation.start();
  }
  return t2.prototype.add = function(t3) {
    !this._disposed && t3 && (this.storage.addRoot(t3), t3.addSelfToZr(this), this.refresh());
  }, t2.prototype.remove = function(t3) {
    !this._disposed && t3 && (this.storage.delRoot(t3), t3.removeSelfFromZr(this), this.refresh());
  }, t2.prototype.configLayer = function(t3, e2) {
    this._disposed || (this.painter.configLayer && this.painter.configLayer(t3, e2), this.refresh());
  }, t2.prototype.setBackgroundColor = function(t3) {
    this._disposed || (this.painter.setBackgroundColor && this.painter.setBackgroundColor(t3), this.refresh(), this._backgroundColor = t3, this._darkMode = (function(t4) {
      if (!t4) return !1;
      if (typeof t4 == "string") return Qn(t4, 1) < 0.4;
      if (t4.colorStops) {
        for (var e2 = t4.colorStops, n2 = 0, i2 = e2.length, r2 = 0; r2 < i2; r2++) n2 += Qn(e2[r2].color, 1);
        return (n2 /= i2) < 0.4;
      }
      return !1;
    })(t3));
  }, t2.prototype.getBackgroundColor = function() {
    return this._backgroundColor;
  }, t2.prototype.setDarkMode = function(t3) {
    this._darkMode = t3;
  }, t2.prototype.isDarkMode = function() {
    return this._darkMode;
  }, t2.prototype.refreshImmediately = function(t3) {
    this._disposed || (t3 || this.animation.update(!0), this._needsRefresh = !1, this.painter.refresh(), this._needsRefresh = !1);
  }, t2.prototype.refresh = function() {
    this._disposed || (this._needsRefresh = !0, this.animation.start());
  }, t2.prototype.flush = function() {
    this._disposed || this._flush(!1);
  }, t2.prototype._flush = function(t3) {
    var e2, n2 = gi();
    this._needsRefresh && (e2 = !0, this.refreshImmediately(t3)), this._needsRefreshHover && (e2 = !0, this.refreshHoverImmediately());
    var i2 = gi();
    e2 ? (this._stillFrameAccum = 0, this.trigger("rendered", { elapsedTime: i2 - n2 })) : this._sleepAfterStill > 0 && (this._stillFrameAccum++, this._stillFrameAccum > this._sleepAfterStill && this.animation.stop());
  }, t2.prototype.setSleepAfterStill = function(t3) {
    this._sleepAfterStill = t3;
  }, t2.prototype.wakeUp = function() {
    this._disposed || (this.animation.start(), this._stillFrameAccum = 0);
  }, t2.prototype.refreshHover = function() {
    this._needsRefreshHover = !0;
  }, t2.prototype.refreshHoverImmediately = function() {
    this._disposed || (this._needsRefreshHover = !1, this.painter.refreshHover && this.painter.getType() === "canvas" && this.painter.refreshHover());
  }, t2.prototype.resize = function(t3) {
    this._disposed || (t3 = t3 || {}, this.painter.resize(t3.width, t3.height), this.handler.resize());
  }, t2.prototype.clearAnimation = function() {
    this._disposed || this.animation.clear();
  }, t2.prototype.getWidth = function() {
    if (!this._disposed) return this.painter.getWidth();
  }, t2.prototype.getHeight = function() {
    if (!this._disposed) return this.painter.getHeight();
  }, t2.prototype.setCursorStyle = function(t3) {
    this._disposed || this.handler.setCursorStyle(t3);
  }, t2.prototype.findHover = function(t3, e2) {
    if (!this._disposed) return this.handler.findHover(t3, e2);
  }, t2.prototype.on = function(t3, e2, n2) {
    return this._disposed || this.handler.on(t3, e2, n2), this;
  }, t2.prototype.off = function(t3, e2) {
    this._disposed || this.handler.off(t3, e2);
  }, t2.prototype.trigger = function(t3, e2) {
    this._disposed || this.handler.trigger(t3, e2);
  }, t2.prototype.clear = function() {
    if (!this._disposed) {
      for (var t3 = this.storage.getRoots(), e2 = 0; e2 < t3.length; e2++) t3[e2] instanceof xr && t3[e2].removeSelfFromZr(this);
      this.storage.delAllRoots(), this.painter.clear();
    }
  }, t2.prototype.dispose = function() {
    var t3;
    this._disposed || (this.animation.stop(), this.clear(), this.storage.dispose(), this.painter.dispose(), this.handler.dispose(), this.animation = this.storage = this.painter = this.handler = null, this._disposed = !0, t3 = this.id, delete wr[t3]);
  }, t2;
})();
function Mr(t2, e2) {
  var n2 = new Sr(B(), t2, e2);
  return wr[n2.id] = n2, n2;
}
var Tr = 1e-4, kr = Math.min, Cr = Math.max, Ir = Math.abs;
function Dr(t2, e2, n2, i2) {
  var r2 = e2[0], o2 = e2[1], a2 = n2[0], s2 = n2[1], l2 = o2 - r2, u2 = s2 - a2;
  if (l2 === 0) return u2 === 0 ? a2 : (a2 + s2) / 2;
  if (i2) if (l2 > 0) {
    if (t2 <= r2) return a2;
    if (t2 >= o2) return s2;
  } else {
    if (t2 >= r2) return a2;
    if (t2 <= o2) return s2;
  }
  else {
    if (t2 === r2) return a2;
    if (t2 === o2) return s2;
  }
  return (t2 - r2) / l2 * u2 + a2;
}
var Ar = function(t2, e2, n2) {
  switch (t2) {
    case "center":
    case "middle":
      t2 = "50%";
      break;
    case "left":
    case "top":
      t2 = "0%";
      break;
    case "right":
    case "bottom":
      t2 = "100%";
  }
  return Lr(t2, e2, n2);
};
function Lr(t2, e2, n2) {
  return et(t2) ? (i2 = t2, i2.replace(/^\s+|\s+$/g, "")).match(/%$/) ? parseFloat(t2) / 100 * e2 + (n2 || 0) : parseFloat(t2) : t2 == null ? NaN : +t2;
  var i2;
}
function Pr(t2, e2, n2) {
  return e2 == null && (e2 = 10), e2 = Math.min(Math.max(0, e2), 20), t2 = (+t2).toFixed(e2), n2 ? t2 : +t2;
}
function Or2(t2) {
  return t2.sort(function(t3, e2) {
    return t3 - e2;
  }), t2;
}
function Rr(t2) {
  if (t2 = +t2, isNaN(t2)) return 0;
  if (t2 > 1e-14) {
    for (var e2 = 1, n2 = 0; n2 < 15; n2++, e2 *= 10) if (Math.round(t2 * e2) / e2 === t2) return n2;
  }
  return (function(t3) {
    var e3 = t3.toString().toLowerCase(), n3 = e3.indexOf("e"), i2 = n3 > 0 ? +e3.slice(n3 + 1) : 0, r2 = n3 > 0 ? n3 : e3.length, o2 = e3.indexOf("."), a2 = o2 < 0 ? 0 : r2 - 1 - o2;
    return Math.max(0, a2 - i2);
  })(t2);
}
function Nr(t2, e2) {
  var n2 = Math.log, i2 = Math.LN10, r2 = Math.floor(n2(t2[1] - t2[0]) / i2), o2 = Math.round(n2(Ir(e2[1] - e2[0])) / i2), a2 = Math.min(Math.max(-r2 + o2, 0), 20);
  return isFinite(a2) ? a2 : 20;
}
function zr(t2, e2) {
  var n2 = Math.max(Rr(t2), Rr(e2)), i2 = t2 + e2;
  return n2 > 20 ? i2 : Pr(i2, n2);
}
function Br(t2) {
  var e2 = 2 * Math.PI;
  return (t2 % e2 + e2) % e2;
}
function Er(t2) {
  return t2 > -1e-4 && t2 < Tr;
}
var Fr2 = /^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d{1,2})(?::(\d{1,2})(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/;
function Vr(t2) {
  if (t2 instanceof Date) return t2;
  if (et(t2)) {
    var e2 = Fr2.exec(t2);
    if (!e2) return /* @__PURE__ */ new Date(NaN);
    if (e2[8]) {
      var n2 = +e2[4] || 0;
      return e2[8].toUpperCase() !== "Z" && (n2 -= +e2[8].slice(0, 3)), new Date(Date.UTC(+e2[1], +(e2[2] || 1) - 1, +e2[3] || 1, n2, +(e2[5] || 0), +e2[6] || 0, e2[7] ? +e2[7].substring(0, 3) : 0));
    }
    return new Date(+e2[1], +(e2[2] || 1) - 1, +e2[3] || 1, +e2[4] || 0, +(e2[5] || 0), +e2[6] || 0, e2[7] ? +e2[7].substring(0, 3) : 0);
  }
  return t2 == null ? /* @__PURE__ */ new Date(NaN) : new Date(Math.round(t2));
}
function Hr(t2) {
  if (t2 === 0) return 0;
  var e2 = Math.floor(Math.log(t2) / Math.LN10);
  return t2 / Math.pow(10, e2) >= 10 && e2++, e2;
}
function Wr(t2, e2) {
  var n2 = Hr(t2), i2 = Math.pow(10, n2), r2 = t2 / i2;
  return t2 = (r2 < 1.5 ? 1 : r2 < 2.5 ? 2 : r2 < 4 ? 3 : r2 < 7 ? 5 : 10) * i2, n2 >= -20 ? +t2.toFixed(n2 < 0 ? -n2 : 0) : t2;
}
function Gr(t2) {
  var e2 = parseFloat(t2);
  return e2 == t2 && (e2 !== 0 || !et(t2) || t2.indexOf("x") <= 0) ? e2 : NaN;
}
function Ur() {
  return Math.round(9 * Math.random());
}
function Xr(t2, e2) {
  return e2 === 0 ? t2 : Xr(e2, t2 % e2);
}
function Yr(t2, e2) {
  return t2 == null ? e2 : e2 == null ? t2 : t2 * e2 / Xr(t2, e2);
}
function jr(t2) {
  throw new Error(t2);
}
function qr(t2, e2, n2) {
  return (e2 - t2) * n2 + t2;
}
var Kr = "series\0";
function $r(t2) {
  return t2 instanceof Array ? t2 : t2 == null ? [] : [t2];
}
function Qr(t2, e2, n2) {
  if (t2) {
    t2[e2] = t2[e2] || {}, t2.emphasis = t2.emphasis || {}, t2.emphasis[e2] = t2.emphasis[e2] || {};
    for (var i2 = 0, r2 = n2.length; i2 < r2; i2++) {
      var o2 = n2[i2];
      !t2.emphasis[e2].hasOwnProperty(o2) && t2[e2].hasOwnProperty(o2) && (t2.emphasis[e2][o2] = t2[e2][o2]);
    }
  }
}
var Jr = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "rich", "tag", "color", "textBorderColor", "textBorderWidth", "width", "height", "lineHeight", "align", "verticalAlign", "baseline", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY", "backgroundColor", "borderColor", "borderWidth", "borderRadius", "padding"];
function to(t2) {
  return !rt(t2) || J(t2) || t2 instanceof Date ? t2 : t2.value;
}
function eo(t2) {
  return rt(t2) && !(t2 instanceof Array);
}
function no(t2, e2, n2) {
  var i2 = n2 === "normalMerge", r2 = n2 === "replaceMerge", o2 = n2 === "replaceAll";
  t2 = t2 || [], e2 = (e2 || []).slice();
  var a2 = St();
  Y(e2, function(t3, n3) {
    rt(t3) || (e2[n3] = null);
  });
  var s2, l2, u2 = (function(t3, e3, n3) {
    var i3 = [];
    if (n3 === "replaceAll") return i3;
    for (var r3 = 0; r3 < t3.length; r3++) {
      var o3 = t3[r3];
      o3 && o3.id != null && e3.set(o3.id, r3), i3.push({ existing: n3 === "replaceMerge" || so(o3) ? null : o3, newOption: null, keyInfo: null, brandNew: null });
    }
    return i3;
  })(t2, a2, n2);
  return (i2 || r2) && (function(t3, e3, n3, i3) {
    Y(i3, function(r3, o3) {
      if (r3 && r3.id != null) {
        var a3 = ro(r3.id), s3 = n3.get(a3);
        if (s3 != null) {
          var l3 = t3[s3];
          gt(!l3.newOption, 'Duplicated option on id "' + a3 + '".'), l3.newOption = r3, l3.existing = e3[s3], i3[o3] = null;
        }
      }
    });
  })(u2, t2, a2, e2), i2 && (function(t3, e3) {
    Y(e3, function(n3, i3) {
      if (n3 && n3.name != null) for (var r3 = 0; r3 < t3.length; r3++) {
        var o3 = t3[r3].existing;
        if (!t3[r3].newOption && o3 && (o3.id == null || n3.id == null) && !so(n3) && !so(o3) && io("name", o3, n3)) return t3[r3].newOption = n3, void (e3[i3] = null);
      }
    });
  })(u2, e2), i2 || r2 ? (function(t3, e3, n3) {
    Y(e3, function(e4) {
      if (e4) {
        for (var i3, r3 = 0; (i3 = t3[r3]) && (i3.newOption || so(i3.existing) || i3.existing && e4.id != null && !io("id", e4, i3.existing)); ) r3++;
        i3 ? (i3.newOption = e4, i3.brandNew = n3) : t3.push({ newOption: e4, brandNew: n3, existing: null, keyInfo: null }), r3++;
      }
    });
  })(u2, e2, r2) : o2 && (function(t3, e3) {
    Y(e3, function(e4) {
      t3.push({ newOption: e4, brandNew: !0, existing: null, keyInfo: null });
    });
  })(u2, e2), s2 = u2, l2 = St(), Y(s2, function(t3) {
    var e3 = t3.existing;
    e3 && l2.set(e3.id, t3);
  }), Y(s2, function(t3) {
    var e3 = t3.newOption;
    gt(!e3 || e3.id == null || !l2.get(e3.id) || l2.get(e3.id) === t3, "id duplicates: " + (e3 && e3.id)), e3 && e3.id != null && l2.set(e3.id, t3), !t3.keyInfo && (t3.keyInfo = {});
  }), Y(s2, function(t3, e3) {
    var n3 = t3.existing, i3 = t3.newOption, r3 = t3.keyInfo;
    if (rt(i3)) {
      if (r3.name = i3.name != null ? ro(i3.name) : n3 ? n3.name : Kr + e3, n3) r3.id = ro(n3.id);
      else if (i3.id != null) r3.id = ro(i3.id);
      else {
        var o3 = 0;
        do
          r3.id = "\0" + r3.name + "\0" + o3++;
        while (l2.get(r3.id));
      }
      l2.set(r3.id, t3);
    }
  }), u2;
}
function io(t2, e2, n2) {
  var i2 = oo(e2[t2], null), r2 = oo(n2[t2], null);
  return i2 != null && r2 != null && i2 === r2;
}
function ro(t2) {
  return oo(t2, "");
}
function oo(t2, e2) {
  return t2 == null ? e2 : et(t2) ? t2 : it(t2) || nt(t2) ? t2 + "" : e2;
}
function ao(t2) {
  var e2 = t2.name;
  return !(!e2 || !e2.indexOf(Kr));
}
function so(t2) {
  return t2 && t2.id != null && ro(t2.id).indexOf("\0_ec_\0") === 0;
}
function lo(t2, e2) {
  return e2.dataIndexInside != null ? e2.dataIndexInside : e2.dataIndex != null ? J(e2.dataIndex) ? Z(e2.dataIndex, function(e3) {
    return t2.indexOfRawIndex(e3);
  }) : t2.indexOfRawIndex(e2.dataIndex) : e2.name != null ? J(e2.name) ? Z(e2.name, function(e3) {
    return t2.indexOfName(e3);
  }) : t2.indexOfName(e2.name) : void 0;
}
function uo() {
  var t2 = "__ec_inner_" + ho++;
  return function(e2) {
    return e2[t2] || (e2[t2] = {});
  };
}
var ho = Ur();
function co(t2, e2, n2) {
  var i2 = po(e2, n2), r2 = i2.mainTypeSpecified, o2 = i2.queryOptionMap, a2 = i2.others, s2 = n2 ? n2.defaultMainType : null;
  return !r2 && s2 && o2.set(s2, {}), o2.each(function(e3, i3) {
    var r3 = vo(t2, i3, e3, { useDefault: s2 === i3, enableAll: !n2 || n2.enableAll == null || n2.enableAll, enableNone: !n2 || n2.enableNone == null || n2.enableNone });
    a2[i3 + "Models"] = r3.models, a2[i3 + "Model"] = r3.models[0];
  }), a2;
}
function po(t2, e2) {
  var n2;
  if (et(t2)) {
    var i2 = {};
    i2[t2 + "Index"] = 0, n2 = i2;
  } else n2 = t2;
  var r2 = St(), o2 = {}, a2 = !1;
  return Y(n2, function(t3, n3) {
    if (n3 !== "dataIndex" && n3 !== "dataIndexInside") {
      var i3 = n3.match(/^(\w+)(Index|Id|Name)$/) || [], s2 = i3[1], l2 = (i3[2] || "").toLowerCase();
      s2 && l2 && !(e2 && e2.includeMainTypes && G(e2.includeMainTypes, s2) < 0) && (a2 = a2 || !!s2, (r2.get(s2) || r2.set(s2, {}))[l2] = t3);
    } else o2[n3] = t3;
  }), { mainTypeSpecified: a2, queryOptionMap: r2, others: o2 };
}
var fo = { useDefault: !0, enableAll: !1, enableNone: !1 }, go = { useDefault: !1, enableAll: !0, enableNone: !0 };
function vo(t2, e2, n2, i2) {
  i2 = i2 || fo;
  var r2 = n2.index, o2 = n2.id, a2 = n2.name, s2 = { models: null, specified: r2 != null || o2 != null || a2 != null };
  if (!s2.specified) {
    var l2 = void 0;
    return s2.models = i2.useDefault && (l2 = t2.getComponent(e2)) ? [l2] : [], s2;
  }
  if (r2 === "none" || r2 === !1) {
    if (i2.enableNone) return s2.models = [], s2;
    r2 = -1;
  }
  return r2 === "all" && (r2 = i2.enableAll ? o2 = a2 = null : -1), s2.models = t2.queryComponents({ mainType: e2, index: r2, id: o2, name: a2 }), s2;
}
function yo(t2, e2, n2) {
  t2.setAttribute ? t2.setAttribute(e2, n2) : t2[e2] = n2;
}
var mo = "___EC__COMPONENT__CONTAINER___", _o = "___EC__EXTENDED_CLASS___";
function xo(t2) {
  var e2 = { main: "", sub: "" };
  if (t2) {
    var n2 = t2.split(".");
    e2.main = n2[0] || "", e2.sub = n2[1] || "";
  }
  return e2;
}
function bo(t2, e2) {
  t2.$constructor = t2, t2.extend = function(t3) {
    var e3, n2, i2 = this;
    return tt(n2 = i2) && /^class\s/.test(Function.prototype.toString.call(n2)) ? e3 = (function(t4) {
      function e4() {
        return t4.apply(this, arguments) || this;
      }
      return _(e4, t4), e4;
    })(i2) : (e3 = function() {
      (t3.$constructor || i2).apply(this, arguments);
    }, (function(t4, e4) {
      var n3 = t4.prototype;
      function i3() {
      }
      for (var r2 in i3.prototype = e4.prototype, t4.prototype = new i3(), n3) n3.hasOwnProperty(r2) && (t4.prototype[r2] = n3[r2]);
      t4.prototype.constructor = t4, t4.superClass = e4;
    })(e3, this)), H(e3.prototype, t3), e3[_o] = !0, e3.extend = this.extend, e3.superCall = Mo, e3.superApply = To, e3.superClass = i2, e3;
  };
}
function wo(t2, e2) {
  t2.extend = e2.extend;
}
var So = Math.round(10 * Math.random());
function Mo(t2, e2) {
  for (var n2 = [], i2 = 2; i2 < arguments.length; i2++) n2[i2 - 2] = arguments[i2];
  return this.superClass.prototype[e2].apply(t2, n2);
}
function To(t2, e2, n2) {
  return this.superClass.prototype[e2].apply(t2, n2);
}
function ko(t2) {
  var e2 = {};
  t2.registerClass = function(t3) {
    var n2, i2 = t3.type || t3.prototype.type;
    if (i2) {
      gt(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(n2 = i2), 'componentType "' + n2 + '" illegal'), t3.prototype.type = i2;
      var r2 = xo(i2);
      if (r2.sub) {
        if (r2.sub !== mo) {
          var o2 = (function(t4) {
            var n3 = e2[t4.main];
            return n3 && n3[mo] || ((n3 = e2[t4.main] = {})[mo] = !0), n3;
          })(r2);
          o2[r2.sub] = t3;
        }
      } else e2[r2.main] = t3;
    }
    return t3;
  }, t2.getClass = function(t3, n2, i2) {
    var r2 = e2[t3];
    if (r2 && r2[mo] && (r2 = n2 ? r2[n2] : null), i2 && !r2) throw new Error(n2 ? "Component " + t3 + "." + (n2 || "") + " is used but not imported." : t3 + ".type should be specified.");
    return r2;
  }, t2.getClassesByMainType = function(t3) {
    var n2 = xo(t3), i2 = [], r2 = e2[n2.main];
    return r2 && r2[mo] ? Y(r2, function(t4, e3) {
      e3 !== mo && i2.push(t4);
    }) : i2.push(r2), i2;
  }, t2.hasClass = function(t3) {
    var n2 = xo(t3);
    return !!e2[n2.main];
  }, t2.getAllClassMainTypes = function() {
    var t3 = [];
    return Y(e2, function(e3, n2) {
      t3.push(n2);
    }), t3;
  }, t2.hasSubTypes = function(t3) {
    var n2 = xo(t3), i2 = e2[n2.main];
    return i2 && i2[mo];
  };
}
function Co(t2, e2) {
  for (var n2 = 0; n2 < t2.length; n2++) t2[n2][1] || (t2[n2][1] = t2[n2][0]);
  return e2 = e2 || !1, function(n3, i2, r2) {
    for (var o2 = {}, a2 = 0; a2 < t2.length; a2++) {
      var s2 = t2[a2][1];
      if (!(i2 && G(i2, s2) >= 0 || r2 && G(r2, s2) < 0)) {
        var l2 = n3.getShallow(s2, e2);
        l2 != null && (o2[t2[a2][0]] = l2);
      }
    }
    return o2;
  };
}
var Io = Co([["fill", "color"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["opacity"], ["shadowColor"]]), Do2 = (function() {
  function t2() {
  }
  return t2.prototype.getAreaStyle = function(t3, e2) {
    return Io(this, t3, e2);
  }, t2;
})(), Ao = new Rn(50);
function Lo(t2) {
  if (typeof t2 == "string") {
    var e2 = Ao.get(t2);
    return e2 && e2.image;
  }
  return t2;
}
function Po(t2, e2, n2, i2, r2) {
  if (t2) {
    if (typeof t2 == "string") {
      if (e2 && e2.__zrImageSrc === t2 || !n2) return e2;
      var o2 = Ao.get(t2), a2 = { hostEl: n2, cb: i2, cbPayload: r2 };
      return o2 ? !Ro(e2 = o2.image) && o2.pending.push(a2) : ((e2 = M.loadImage(t2, Oo, Oo)).__zrImageSrc = t2, Ao.put(t2, e2.__cachedImgObj = { image: e2, pending: [a2] })), e2;
    }
    return t2;
  }
  return e2;
}
function Oo() {
  var t2 = this.__cachedImgObj;
  this.onload = this.onerror = this.__cachedImgObj = null;
  for (var e2 = 0; e2 < t2.pending.length; e2++) {
    var n2 = t2.pending[e2], i2 = n2.cb;
    i2 && i2(this, n2.cbPayload), n2.hostEl.dirty();
  }
  t2.pending.length = 0;
}
function Ro(t2) {
  return t2 && t2.width && t2.height;
}
var No = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g;
function zo(t2, e2, n2, i2, r2, o2) {
  if (!n2) return t2.text = "", void (t2.isTruncated = !1);
  var a2 = (e2 + "").split(`
`);
  o2 = Bo(n2, i2, r2, o2);
  for (var s2 = !1, l2 = {}, u2 = 0, h2 = a2.length; u2 < h2; u2++) Eo(l2, a2[u2], o2), a2[u2] = l2.textLine, s2 = s2 || l2.isTruncated;
  t2.text = a2.join(`
`), t2.isTruncated = s2;
}
function Bo(t2, e2, n2, i2) {
  var r2 = H({}, i2 = i2 || {});
  n2 = ct(n2, "..."), r2.maxIterations = ct(i2.maxIterations, 2);
  var o2 = r2.minChar = ct(i2.minChar, 0), a2 = r2.fontMeasureInfo = $i(e2), s2 = a2.asciiCharWidth;
  r2.placeholder = ct(i2.placeholder, "");
  for (var l2 = t2 = Math.max(0, t2 - 1), u2 = 0; u2 < o2 && l2 >= s2; u2++) l2 -= s2;
  var h2 = er(a2, n2);
  return h2 > l2 && (n2 = "", h2 = 0), l2 = t2 - h2, r2.ellipsis = n2, r2.ellipsisWidth = h2, r2.contentWidth = l2, r2.containerWidth = t2, r2;
}
function Eo(t2, e2, n2) {
  var i2 = n2.containerWidth, r2 = n2.contentWidth, o2 = n2.fontMeasureInfo;
  if (!i2) return t2.textLine = "", void (t2.isTruncated = !1);
  var a2 = er(o2, e2);
  if (a2 <= i2) return t2.textLine = e2, void (t2.isTruncated = !1);
  for (var s2 = 0; ; s2++) {
    if (a2 <= r2 || s2 >= n2.maxIterations) {
      e2 += n2.ellipsis;
      break;
    }
    var l2 = s2 === 0 ? Fo(e2, r2, o2) : a2 > 0 ? Math.floor(e2.length * r2 / a2) : 0;
    a2 = er(o2, e2 = e2.substr(0, l2));
  }
  e2 === "" && (e2 = n2.placeholder), t2.textLine = e2, t2.isTruncated = !0;
}
function Fo(t2, e2, n2) {
  for (var i2 = 0, r2 = 0, o2 = t2.length; r2 < o2 && i2 < e2; r2++) i2 += tr(n2, t2.charCodeAt(r2));
  return r2;
}
var Vo = /* @__PURE__ */ (function() {
  return function() {
  };
})(), Ho = /* @__PURE__ */ (function() {
  return function(t2) {
    this.tokens = [], t2 && (this.tokens = t2);
  };
})(), Wo = /* @__PURE__ */ (function() {
  return function() {
    this.width = 0, this.height = 0, this.contentWidth = 0, this.contentHeight = 0, this.outerWidth = 0, this.outerHeight = 0, this.lines = [], this.isTruncated = !1;
  };
})();
function Go(t2, e2, n2, i2, r2) {
  var o2, a2, s2 = e2 === "", l2 = r2 && n2.rich[r2] || {}, u2 = t2.lines, h2 = l2.font || n2.font, c2 = !1;
  if (i2) {
    var p2 = l2.padding, d2 = p2 ? p2[1] + p2[3] : 0;
    if (l2.width != null && l2.width !== "auto") {
      var f2 = sr(l2.width, i2.width) + d2;
      u2.length > 0 && f2 + i2.accumWidth > i2.width && (o2 = e2.split(`
`), c2 = !0), i2.accumWidth = f2;
    } else {
      var g2 = Yo(e2, h2, i2.width, i2.breakAll, i2.accumWidth);
      i2.accumWidth = g2.accumWidth + d2, a2 = g2.linesWidths, o2 = g2.lines;
    }
  }
  o2 || (o2 = e2.split(`
`));
  for (var v2 = $i(h2), y2 = 0; y2 < o2.length; y2++) {
    var m2 = o2[y2], _2 = new Vo();
    if (_2.styleName = r2, _2.text = m2, _2.isLineHolder = !m2 && !s2, typeof l2.width == "number" ? _2.width = l2.width : _2.width = a2 ? a2[y2] : er(v2, m2), y2 || c2) u2.push(new Ho([_2]));
    else {
      var x2 = (u2[u2.length - 1] || (u2[0] = new Ho())).tokens, b2 = x2.length;
      b2 === 1 && x2[0].isLineHolder ? x2[0] = _2 : (m2 || !b2 || s2) && x2.push(_2);
    }
  }
}
var Uo = j(",&?/;] ".split(""), function(t2, e2) {
  return t2[e2] = !0, t2;
}, {});
function Xo(t2) {
  return !(function(t3) {
    var e2 = t3.charCodeAt(0);
    return e2 >= 32 && e2 <= 591 || e2 >= 880 && e2 <= 4351 || e2 >= 4608 && e2 <= 5119 || e2 >= 7680 && e2 <= 8303;
  })(t2) || !!Uo[t2];
}
function Yo(t2, e2, n2, i2, r2) {
  for (var o2 = [], a2 = [], s2 = "", l2 = "", u2 = 0, h2 = 0, c2 = $i(e2), p2 = 0; p2 < t2.length; p2++) {
    var d2 = t2.charAt(p2);
    if (d2 !== `
`) {
      var f2 = tr(c2, d2.charCodeAt(0)), g2 = !i2 && !Xo(d2);
      (o2.length ? h2 + f2 > n2 : r2 + h2 + f2 > n2) ? h2 ? (s2 || l2) && (g2 ? (s2 || (s2 = l2, l2 = "", h2 = u2 = 0), o2.push(s2), a2.push(h2 - u2), l2 += d2, s2 = "", h2 = u2 += f2) : (l2 && (s2 += l2, l2 = "", u2 = 0), o2.push(s2), a2.push(h2), s2 = d2, h2 = f2)) : g2 ? (o2.push(l2), a2.push(u2), l2 = d2, u2 = f2) : (o2.push(d2), a2.push(f2)) : (h2 += f2, g2 ? (l2 += d2, u2 += f2) : (l2 && (s2 += l2, l2 = "", u2 = 0), s2 += d2));
    } else l2 && (s2 += l2, h2 += u2), o2.push(s2), a2.push(h2), s2 = "", l2 = "", u2 = 0, h2 = 0;
  }
  return l2 && (s2 += l2), s2 && (o2.push(s2), a2.push(h2)), o2.length === 1 && (h2 += r2), { accumWidth: h2, lines: o2, linesWidths: a2 };
}
function Zo(t2, e2, n2, i2, r2, o2) {
  if (t2.baseX = n2, t2.baseY = i2, t2.outerWidth = t2.outerHeight = null, e2) {
    var a2 = 2 * e2.width, s2 = 2 * e2.height;
    Oe.set(jo, rr2(n2, a2, r2), or(i2, s2, o2), a2, s2), Oe.intersect(e2, jo, null, qo);
    var l2 = qo.outIntersectRect;
    t2.outerWidth = l2.width, t2.outerHeight = l2.height, t2.baseX = rr2(l2.x, l2.width, r2, !0), t2.baseY = or(l2.y, l2.height, o2, !0);
  }
}
var jo = new Oe(0, 0, 0, 0), qo = { outIntersectRect: {}, clamp: !0 };
function Ko(t2) {
  return t2 != null ? t2 += "" : t2 = "";
}
function $o2(t2, e2, n2, i2) {
  var r2 = new Oe(rr2(t2.x || 0, e2, t2.textAlign), or(t2.y || 0, n2, t2.textBaseline), e2, n2), o2 = i2 ?? (Qo(t2) ? t2.lineWidth : 0);
  return o2 > 0 && (r2.x -= o2 / 2, r2.y -= o2 / 2, r2.width += o2, r2.height += o2), r2;
}
function Qo(t2) {
  var e2 = t2.stroke;
  return e2 != null && e2 !== "none" && t2.lineWidth > 0;
}
var Jo = "__zr_style_" + Math.round(10 * Math.random()), ta = { shadowBlur: 0, shadowOffsetX: 0, shadowOffsetY: 0, shadowColor: "#000", opacity: 1, blend: "source-over" }, ea = { style: { shadowBlur: !0, shadowOffsetX: !0, shadowOffsetY: !0, shadowColor: !0, opacity: !0 } };
ta[Jo] = !0;
var na = ["z", "z2", "invisible"], ia = ["invisible"], ra = (function(t2) {
  function e2(e3) {
    return t2.call(this, e3) || this;
  }
  var n2;
  return _(e2, t2), e2.prototype._init = function(e3) {
    for (var n3 = K(e3), i2 = 0; i2 < n3.length; i2++) {
      var r2 = n3[i2];
      r2 === "style" ? this.useStyle(e3[r2]) : t2.prototype.attrKV.call(this, r2, e3[r2]);
    }
    this.style || this.useStyle({});
  }, e2.prototype.beforeBrush = function() {
  }, e2.prototype.afterBrush = function() {
  }, e2.prototype.innerBeforeBrush = function() {
  }, e2.prototype.innerAfterBrush = function() {
  }, e2.prototype.shouldBePainted = function(t3, e3, n3, i2) {
    var r2 = this.transform;
    if (this.ignore || this.invisible || this.style.opacity === 0 || this.culling && (function(t4, e4, n4) {
      return oa.copy(t4.getBoundingRect()), t4.transform && oa.applyTransform(t4.transform), aa.width = e4, aa.height = n4, !oa.intersect(aa);
    })(this, t3, e3) || r2 && !r2[0] && !r2[3]) return !1;
    if (n3 && this.__clipPaths && this.__clipPaths.length) {
      for (var o2 = 0; o2 < this.__clipPaths.length; ++o2) if (this.__clipPaths[o2].isZeroArea()) return !1;
    }
    if (i2 && this.parent) for (var a2 = this.parent; a2; ) {
      if (a2.ignore) return !1;
      a2 = a2.parent;
    }
    return !0;
  }, e2.prototype.contain = function(t3, e3) {
    return this.rectContain(t3, e3);
  }, e2.prototype.traverse = function(t3, e3) {
    t3.call(e3, this);
  }, e2.prototype.rectContain = function(t3, e3) {
    var n3 = this.transformCoordToLocal(t3, e3);
    return this.getBoundingRect().contain(n3[0], n3[1]);
  }, e2.prototype.getPaintRect = function() {
    var t3 = this._paintRect;
    if (!this._paintRect || this.__dirty) {
      var e3 = this.transform, n3 = this.getBoundingRect(), i2 = this.style, r2 = i2.shadowBlur || 0, o2 = i2.shadowOffsetX || 0, a2 = i2.shadowOffsetY || 0;
      t3 = this._paintRect || (this._paintRect = new Oe(0, 0, 0, 0)), e3 ? Oe.applyTransform(t3, n3, e3) : t3.copy(n3), (r2 || o2 || a2) && (t3.width += 2 * r2 + Math.abs(o2), t3.height += 2 * r2 + Math.abs(a2), t3.x = Math.min(t3.x, t3.x + o2 - r2), t3.y = Math.min(t3.y, t3.y + a2 - r2));
      var s2 = this.dirtyRectTolerance;
      t3.isZero() || (t3.x = Math.floor(t3.x - s2), t3.y = Math.floor(t3.y - s2), t3.width = Math.ceil(t3.width + 1 + 2 * s2), t3.height = Math.ceil(t3.height + 1 + 2 * s2));
    }
    return t3;
  }, e2.prototype.setPrevPaintRect = function(t3) {
    t3 ? (this._prevPaintRect = this._prevPaintRect || new Oe(0, 0, 0, 0), this._prevPaintRect.copy(t3)) : this._prevPaintRect = null;
  }, e2.prototype.getPrevPaintRect = function() {
    return this._prevPaintRect;
  }, e2.prototype.animateStyle = function(t3) {
    return this.animate("style", t3);
  }, e2.prototype.updateDuringAnimation = function(t3) {
    t3 === "style" ? this.dirtyStyle() : this.markRedraw();
  }, e2.prototype.attrKV = function(e3, n3) {
    e3 !== "style" ? t2.prototype.attrKV.call(this, e3, n3) : this.style ? this.setStyle(n3) : this.useStyle(n3);
  }, e2.prototype.setStyle = function(t3, e3) {
    return typeof t3 == "string" ? this.style[t3] = e3 : H(this.style, t3), this.dirtyStyle(), this;
  }, e2.prototype.dirtyStyle = function(t3) {
    t3 || this.markRedraw(), this.__dirty |= 2, this._rect && (this._rect = null);
  }, e2.prototype.dirty = function() {
    this.dirtyStyle();
  }, e2.prototype.styleChanged = function() {
    return !!(2 & this.__dirty);
  }, e2.prototype.styleUpdated = function() {
    this.__dirty &= -3;
  }, e2.prototype.createStyle = function(t3) {
    return Mt(ta, t3);
  }, e2.prototype.useStyle = function(t3) {
    t3[Jo] || (t3 = this.createStyle(t3)), this.__inHover ? this.__hoverStyle = t3 : this.style = t3, this.dirtyStyle();
  }, e2.prototype.isStyleObject = function(t3) {
    return t3[Jo];
  }, e2.prototype._innerSaveToNormal = function(e3) {
    t2.prototype._innerSaveToNormal.call(this, e3);
    var n3 = this._normalState;
    e3.style && !n3.style && (n3.style = this._mergeStyle(this.createStyle(), this.style)), this._savePrimaryToNormal(e3, n3, na);
  }, e2.prototype._applyStateObj = function(e3, n3, i2, r2, o2, a2) {
    t2.prototype._applyStateObj.call(this, e3, n3, i2, r2, o2, a2);
    var s2, l2 = !(n3 && r2);
    if (n3 && n3.style ? o2 ? r2 ? s2 = n3.style : (s2 = this._mergeStyle(this.createStyle(), i2.style), this._mergeStyle(s2, n3.style)) : (s2 = this._mergeStyle(this.createStyle(), r2 ? this.style : i2.style), this._mergeStyle(s2, n3.style)) : l2 && (s2 = i2.style), s2) if (o2) {
      var u2 = this.style;
      if (this.style = this.createStyle(l2 ? {} : u2), l2) for (var h2 = K(u2), c2 = 0; c2 < h2.length; c2++)
        (d2 = h2[c2]) in s2 && (s2[d2] = s2[d2], this.style[d2] = u2[d2]);
      var p2 = K(s2);
      for (c2 = 0; c2 < p2.length; c2++) {
        var d2 = p2[c2];
        this.style[d2] = this.style[d2];
      }
      this._transitionState(e3, { style: s2 }, a2, this.getAnimationStyleProps());
    } else this.useStyle(s2);
    var f2 = this.__inHover ? ia : na;
    for (c2 = 0; c2 < f2.length; c2++)
      d2 = f2[c2], n3 && n3[d2] != null ? this[d2] = n3[d2] : l2 && i2[d2] != null && (this[d2] = i2[d2]);
  }, e2.prototype._mergeStates = function(e3) {
    for (var n3, i2 = t2.prototype._mergeStates.call(this, e3), r2 = 0; r2 < e3.length; r2++) {
      var o2 = e3[r2];
      o2.style && (n3 = n3 || {}, this._mergeStyle(n3, o2.style));
    }
    return n3 && (i2.style = n3), i2;
  }, e2.prototype._mergeStyle = function(t3, e3) {
    return H(t3, e3), t3;
  }, e2.prototype.getAnimationStyleProps = function() {
    return ea;
  }, e2.initDefaultProps = ((n2 = e2.prototype).type = "displayable", n2.invisible = !1, n2.z = 0, n2.z2 = 0, n2.zlevel = 0, n2.culling = !1, n2.cursor = "pointer", n2.rectHover = !1, n2.incremental = !1, n2._rect = null, n2.dirtyRectTolerance = 0, void (n2.__dirty = 3)), e2;
})(gr), oa = new Oe(0, 0, 0, 0), aa = new Oe(0, 0, 0, 0), sa = Math.min, la = Math.max, ua = Math.sin, ha = Math.cos, ca = 2 * Math.PI, pa = Dt(), da = Dt(), fa = Dt();
function ga(t2, e2, n2, i2, r2, o2) {
  r2[0] = sa(t2, n2), r2[1] = sa(e2, i2), o2[0] = la(t2, n2), o2[1] = la(e2, i2);
}
var va = [], ya = [];
function ma(t2, e2, n2, i2, r2, o2, a2, s2, l2, u2) {
  var h2 = bn, c2 = mn, p2 = h2(t2, n2, r2, a2, va);
  l2[0] = 1 / 0, l2[1] = 1 / 0, u2[0] = -1 / 0, u2[1] = -1 / 0;
  for (var d2 = 0; d2 < p2; d2++) {
    var f2 = c2(t2, n2, r2, a2, va[d2]);
    l2[0] = sa(f2, l2[0]), u2[0] = la(f2, u2[0]);
  }
  for (p2 = h2(e2, i2, o2, s2, ya), d2 = 0; d2 < p2; d2++) {
    var g2 = c2(e2, i2, o2, s2, ya[d2]);
    l2[1] = sa(g2, l2[1]), u2[1] = la(g2, u2[1]);
  }
  l2[0] = sa(t2, l2[0]), u2[0] = la(t2, u2[0]), l2[0] = sa(a2, l2[0]), u2[0] = la(a2, u2[0]), l2[1] = sa(e2, l2[1]), u2[1] = la(e2, u2[1]), l2[1] = sa(s2, l2[1]), u2[1] = la(s2, u2[1]);
}
function _a(t2, e2, n2, i2, r2, o2, a2, s2) {
  var l2 = kn, u2 = Mn, h2 = la(sa(l2(t2, n2, r2), 1), 0), c2 = la(sa(l2(e2, i2, o2), 1), 0), p2 = u2(t2, n2, r2, h2), d2 = u2(e2, i2, o2, c2);
  a2[0] = sa(t2, r2, p2), a2[1] = sa(e2, o2, d2), s2[0] = la(t2, r2, p2), s2[1] = la(e2, o2, d2);
}
function xa(t2, e2, n2, i2, r2, o2, a2, s2, l2) {
  var u2 = Ft, h2 = Vt2, c2 = Math.abs(r2 - o2);
  if (c2 % ca < 1e-4 && c2 > 1e-4) return s2[0] = t2 - n2, s2[1] = e2 - i2, l2[0] = t2 + n2, void (l2[1] = e2 + i2);
  if (pa[0] = ha(r2) * n2 + t2, pa[1] = ua(r2) * i2 + e2, da[0] = ha(o2) * n2 + t2, da[1] = ua(o2) * i2 + e2, u2(s2, pa, da), h2(l2, pa, da), (r2 %= ca) < 0 && (r2 += ca), (o2 %= ca) < 0 && (o2 += ca), r2 > o2 && !a2 ? o2 += ca : r2 < o2 && a2 && (r2 += ca), a2) {
    var p2 = o2;
    o2 = r2, r2 = p2;
  }
  for (var d2 = 0; d2 < o2; d2 += Math.PI / 2) d2 > r2 && (fa[0] = ha(d2) * n2 + t2, fa[1] = ua(d2) * i2 + e2, u2(s2, fa, s2), h2(l2, fa, l2));
}
var ba = { M: 1, L: 2, C: 3, Q: 4, A: 5, Z: 6, R: 7 }, wa = [], Sa = [], Ma = [], Ta = [], ka = [], Ca = [], Ia = Math.min, Da = Math.max, Aa = Math.cos, La = Math.sin, Pa = Math.abs, Oa = Math.PI, Ra = 2 * Oa, Na = typeof Float32Array < "u", za = [];
function Ba(t2) {
  return Math.round(t2 / Oa * 1e8) / 1e8 % 2 * Oa;
}
var Ea = (function() {
  function t2(t3) {
    this.dpr = 1, this._xi = 0, this._yi = 0, this._x0 = 0, this._y0 = 0, this._len = 0, t3 && (this._saveData = !1), this._saveData && (this.data = []);
  }
  var e2;
  return t2.prototype.increaseVersion = function() {
    this._version++;
  }, t2.prototype.getVersion = function() {
    return this._version;
  }, t2.prototype.setScale = function(t3, e3, n2) {
    (n2 = n2 || 0) > 0 && (this._ux = Pa(n2 / Bi / t3) || 0, this._uy = Pa(n2 / Bi / e3) || 0);
  }, t2.prototype.setDPR = function(t3) {
    this.dpr = t3;
  }, t2.prototype.setContext = function(t3) {
    this._ctx = t3;
  }, t2.prototype.getContext = function() {
    return this._ctx;
  }, t2.prototype.beginPath = function() {
    return this._ctx && this._ctx.beginPath(), this.reset(), this;
  }, t2.prototype.reset = function() {
    this._saveData && (this._len = 0), this._pathSegLen && (this._pathSegLen = null, this._pathLen = 0), this._version++;
  }, t2.prototype.moveTo = function(t3, e3) {
    return this._drawPendingPt(), this.addData(ba.M, t3, e3), this._ctx && this._ctx.moveTo(t3, e3), this._x0 = t3, this._y0 = e3, this._xi = t3, this._yi = e3, this;
  }, t2.prototype.lineTo = function(t3, e3) {
    var n2 = Pa(t3 - this._xi), i2 = Pa(e3 - this._yi), r2 = n2 > this._ux || i2 > this._uy;
    if (this.addData(ba.L, t3, e3), this._ctx && r2 && this._ctx.lineTo(t3, e3), r2) this._xi = t3, this._yi = e3, this._pendingPtDist = 0;
    else {
      var o2 = n2 * n2 + i2 * i2;
      o2 > this._pendingPtDist && (this._pendingPtX = t3, this._pendingPtY = e3, this._pendingPtDist = o2);
    }
    return this;
  }, t2.prototype.bezierCurveTo = function(t3, e3, n2, i2, r2, o2) {
    return this._drawPendingPt(), this.addData(ba.C, t3, e3, n2, i2, r2, o2), this._ctx && this._ctx.bezierCurveTo(t3, e3, n2, i2, r2, o2), this._xi = r2, this._yi = o2, this;
  }, t2.prototype.quadraticCurveTo = function(t3, e3, n2, i2) {
    return this._drawPendingPt(), this.addData(ba.Q, t3, e3, n2, i2), this._ctx && this._ctx.quadraticCurveTo(t3, e3, n2, i2), this._xi = n2, this._yi = i2, this;
  }, t2.prototype.arc = function(t3, e3, n2, i2, r2, o2) {
    this._drawPendingPt(), za[0] = i2, za[1] = r2, (function(t4, e4) {
      var n3 = Ba(t4[0]);
      n3 < 0 && (n3 += Ra);
      var i3 = n3 - t4[0], r3 = t4[1];
      r3 += i3, !e4 && r3 - n3 >= Ra ? r3 = n3 + Ra : e4 && n3 - r3 >= Ra ? r3 = n3 - Ra : !e4 && n3 > r3 ? r3 = n3 + (Ra - Ba(n3 - r3)) : e4 && n3 < r3 && (r3 = n3 - (Ra - Ba(r3 - n3))), t4[0] = n3, t4[1] = r3;
    })(za, o2), i2 = za[0];
    var a2 = (r2 = za[1]) - i2;
    return this.addData(ba.A, t3, e3, n2, n2, i2, a2, 0, o2 ? 0 : 1), this._ctx && this._ctx.arc(t3, e3, n2, i2, r2, o2), this._xi = Aa(r2) * n2 + t3, this._yi = La(r2) * n2 + e3, this;
  }, t2.prototype.arcTo = function(t3, e3, n2, i2, r2) {
    return this._drawPendingPt(), this._ctx && this._ctx.arcTo(t3, e3, n2, i2, r2), this;
  }, t2.prototype.rect = function(t3, e3, n2, i2) {
    return this._drawPendingPt(), this._ctx && this._ctx.rect(t3, e3, n2, i2), this.addData(ba.R, t3, e3, n2, i2), this;
  }, t2.prototype.closePath = function() {
    this._drawPendingPt(), this.addData(ba.Z);
    var t3 = this._ctx, e3 = this._x0, n2 = this._y0;
    return t3 && t3.closePath(), this._xi = e3, this._yi = n2, this;
  }, t2.prototype.fill = function(t3) {
    t3 && t3.fill(), this.toStatic();
  }, t2.prototype.stroke = function(t3) {
    t3 && t3.stroke(), this.toStatic();
  }, t2.prototype.len = function() {
    return this._len;
  }, t2.prototype.setData = function(t3) {
    if (this._saveData) {
      var e3 = t3.length;
      this.data && this.data.length === e3 || !Na || (this.data = new Float32Array(e3));
      for (var n2 = 0; n2 < e3; n2++) this.data[n2] = t3[n2];
      this._len = e3;
    }
  }, t2.prototype.appendPath = function(t3) {
    if (this._saveData) {
      t3 instanceof Array || (t3 = [t3]);
      for (var e3 = t3.length, n2 = 0, i2 = this._len, r2 = 0; r2 < e3; r2++) n2 += t3[r2].len();
      var o2 = this.data;
      if (Na && (o2 instanceof Float32Array || !o2) && (this.data = new Float32Array(i2 + n2), i2 > 0 && o2)) for (var a2 = 0; a2 < i2; a2++) this.data[a2] = o2[a2];
      for (r2 = 0; r2 < e3; r2++) {
        var s2 = t3[r2].data;
        for (a2 = 0; a2 < s2.length; a2++) this.data[i2++] = s2[a2];
      }
      this._len = i2;
    }
  }, t2.prototype.addData = function(t3, e3, n2, i2, r2, o2, a2, s2, l2) {
    if (this._saveData) {
      var u2 = this.data;
      this._len + arguments.length > u2.length && (this._expandData(), u2 = this.data);
      for (var h2 = 0; h2 < arguments.length; h2++) u2[this._len++] = arguments[h2];
    }
  }, t2.prototype._drawPendingPt = function() {
    this._pendingPtDist > 0 && (this._ctx && this._ctx.lineTo(this._pendingPtX, this._pendingPtY), this._pendingPtDist = 0);
  }, t2.prototype._expandData = function() {
    if (!(this.data instanceof Array)) {
      for (var t3 = [], e3 = 0; e3 < this._len; e3++) t3[e3] = this.data[e3];
      this.data = t3;
    }
  }, t2.prototype.toStatic = function() {
    if (this._saveData) {
      this._drawPendingPt();
      var t3 = this.data;
      t3 instanceof Array && (t3.length = this._len, Na && this._len > 11 && (this.data = new Float32Array(t3)));
    }
  }, t2.prototype.getBoundingRect = function() {
    Ma[0] = Ma[1] = ka[0] = ka[1] = Number.MAX_VALUE, Ta[0] = Ta[1] = Ca[0] = Ca[1] = -Number.MAX_VALUE;
    var t3, e3 = this.data, n2 = 0, i2 = 0, r2 = 0, o2 = 0;
    for (t3 = 0; t3 < this._len; ) {
      var a2 = e3[t3++], s2 = t3 === 1;
      switch (s2 && (r2 = n2 = e3[t3], o2 = i2 = e3[t3 + 1]), a2) {
        case ba.M:
          n2 = r2 = e3[t3++], i2 = o2 = e3[t3++], ka[0] = r2, ka[1] = o2, Ca[0] = r2, Ca[1] = o2;
          break;
        case ba.L:
          ga(n2, i2, e3[t3], e3[t3 + 1], ka, Ca), n2 = e3[t3++], i2 = e3[t3++];
          break;
        case ba.C:
          ma(n2, i2, e3[t3++], e3[t3++], e3[t3++], e3[t3++], e3[t3], e3[t3 + 1], ka, Ca), n2 = e3[t3++], i2 = e3[t3++];
          break;
        case ba.Q:
          _a(n2, i2, e3[t3++], e3[t3++], e3[t3], e3[t3 + 1], ka, Ca), n2 = e3[t3++], i2 = e3[t3++];
          break;
        case ba.A:
          var l2 = e3[t3++], u2 = e3[t3++], h2 = e3[t3++], c2 = e3[t3++], p2 = e3[t3++], d2 = e3[t3++] + p2;
          t3 += 1;
          var f2 = !e3[t3++];
          s2 && (r2 = Aa(p2) * h2 + l2, o2 = La(p2) * c2 + u2), xa(l2, u2, h2, c2, p2, d2, f2, ka, Ca), n2 = Aa(d2) * h2 + l2, i2 = La(d2) * c2 + u2;
          break;
        case ba.R:
          ga(r2 = n2 = e3[t3++], o2 = i2 = e3[t3++], r2 + e3[t3++], o2 + e3[t3++], ka, Ca);
          break;
        case ba.Z:
          n2 = r2, i2 = o2;
      }
      Ft(Ma, Ma, ka), Vt2(Ta, Ta, Ca);
    }
    return t3 === 0 && (Ma[0] = Ma[1] = Ta[0] = Ta[1] = 0), new Oe(Ma[0], Ma[1], Ta[0] - Ma[0], Ta[1] - Ma[1]);
  }, t2.prototype._calculateLength = function() {
    var t3 = this.data, e3 = this._len, n2 = this._ux, i2 = this._uy, r2 = 0, o2 = 0, a2 = 0, s2 = 0;
    this._pathSegLen || (this._pathSegLen = []);
    for (var l2 = this._pathSegLen, u2 = 0, h2 = 0, c2 = 0; c2 < e3; ) {
      var p2 = t3[c2++], d2 = c2 === 1;
      d2 && (a2 = r2 = t3[c2], s2 = o2 = t3[c2 + 1]);
      var f2 = -1;
      switch (p2) {
        case ba.M:
          r2 = a2 = t3[c2++], o2 = s2 = t3[c2++];
          break;
        case ba.L:
          var g2 = t3[c2++], v2 = (_2 = t3[c2++]) - o2;
          (Pa(D2 = g2 - r2) > n2 || Pa(v2) > i2 || c2 === e3 - 1) && (f2 = Math.sqrt(D2 * D2 + v2 * v2), r2 = g2, o2 = _2);
          break;
        case ba.C:
          var y2 = t3[c2++], m2 = t3[c2++], _2 = (g2 = t3[c2++], t3[c2++]), x2 = t3[c2++], b2 = t3[c2++];
          f2 = Sn(r2, o2, y2, m2, g2, _2, x2, b2, 10), r2 = x2, o2 = b2;
          break;
        case ba.Q:
          f2 = In(r2, o2, y2 = t3[c2++], m2 = t3[c2++], g2 = t3[c2++], _2 = t3[c2++], 10), r2 = g2, o2 = _2;
          break;
        case ba.A:
          var w2 = t3[c2++], S2 = t3[c2++], M2 = t3[c2++], T2 = t3[c2++], k2 = t3[c2++], C2 = t3[c2++], I2 = C2 + k2;
          c2 += 1, d2 && (a2 = Aa(k2) * M2 + w2, s2 = La(k2) * T2 + S2), f2 = Da(M2, T2) * Ia(Ra, Math.abs(C2)), r2 = Aa(I2) * M2 + w2, o2 = La(I2) * T2 + S2;
          break;
        case ba.R:
          a2 = r2 = t3[c2++], s2 = o2 = t3[c2++], f2 = 2 * t3[c2++] + 2 * t3[c2++];
          break;
        case ba.Z:
          var D2 = a2 - r2;
          v2 = s2 - o2, f2 = Math.sqrt(D2 * D2 + v2 * v2), r2 = a2, o2 = s2;
      }
      f2 >= 0 && (l2[h2++] = f2, u2 += f2);
    }
    return this._pathLen = u2, u2;
  }, t2.prototype.rebuildPath = function(t3, e3) {
    var n2, i2, r2, o2, a2, s2, l2, u2, h2, c2, p2 = this.data, d2 = this._ux, f2 = this._uy, g2 = this._len, v2 = e3 < 1, y2 = 0, m2 = 0, _2 = 0;
    if (!v2 || (this._pathSegLen || this._calculateLength(), l2 = this._pathSegLen, u2 = e3 * this._pathLen)) t: for (var x2 = 0; x2 < g2; ) {
      var b2 = p2[x2++], w2 = x2 === 1;
      switch (w2 && (n2 = r2 = p2[x2], i2 = o2 = p2[x2 + 1]), b2 !== ba.L && _2 > 0 && (t3.lineTo(h2, c2), _2 = 0), b2) {
        case ba.M:
          n2 = r2 = p2[x2++], i2 = o2 = p2[x2++], t3.moveTo(r2, o2);
          break;
        case ba.L:
          a2 = p2[x2++], s2 = p2[x2++];
          var S2 = Pa(a2 - r2), M2 = Pa(s2 - o2);
          if (S2 > d2 || M2 > f2) {
            if (v2) {
              if (y2 + (j2 = l2[m2++]) > u2) {
                var T2 = (u2 - y2) / j2;
                t3.lineTo(r2 * (1 - T2) + a2 * T2, o2 * (1 - T2) + s2 * T2);
                break t;
              }
              y2 += j2;
            }
            t3.lineTo(a2, s2), r2 = a2, o2 = s2, _2 = 0;
          } else {
            var k2 = S2 * S2 + M2 * M2;
            k2 > _2 && (h2 = a2, c2 = s2, _2 = k2);
          }
          break;
        case ba.C:
          var C2 = p2[x2++], I2 = p2[x2++], D2 = p2[x2++], A2 = p2[x2++], L2 = p2[x2++], P2 = p2[x2++];
          if (v2) {
            if (y2 + (j2 = l2[m2++]) > u2) {
              wn(r2, C2, D2, L2, T2 = (u2 - y2) / j2, wa), wn(o2, I2, A2, P2, T2, Sa), t3.bezierCurveTo(wa[1], Sa[1], wa[2], Sa[2], wa[3], Sa[3]);
              break t;
            }
            y2 += j2;
          }
          t3.bezierCurveTo(C2, I2, D2, A2, L2, P2), r2 = L2, o2 = P2;
          break;
        case ba.Q:
          if (C2 = p2[x2++], I2 = p2[x2++], D2 = p2[x2++], A2 = p2[x2++], v2) {
            if (y2 + (j2 = l2[m2++]) > u2) {
              Cn(r2, C2, D2, T2 = (u2 - y2) / j2, wa), Cn(o2, I2, A2, T2, Sa), t3.quadraticCurveTo(wa[1], Sa[1], wa[2], Sa[2]);
              break t;
            }
            y2 += j2;
          }
          t3.quadraticCurveTo(C2, I2, D2, A2), r2 = D2, o2 = A2;
          break;
        case ba.A:
          var O2 = p2[x2++], R2 = p2[x2++], N2 = p2[x2++], z2 = p2[x2++], B2 = p2[x2++], E2 = p2[x2++], F2 = p2[x2++], V2 = !p2[x2++], H2 = N2 > z2 ? N2 : z2, W2 = Pa(N2 - z2) > 1e-3, G2 = B2 + E2, U2 = !1;
          if (v2 && (y2 + (j2 = l2[m2++]) > u2 && (G2 = B2 + E2 * (u2 - y2) / j2, U2 = !0), y2 += j2), W2 && t3.ellipse ? t3.ellipse(O2, R2, N2, z2, F2, B2, G2, V2) : t3.arc(O2, R2, H2, B2, G2, V2), U2) break t;
          w2 && (n2 = Aa(B2) * N2 + O2, i2 = La(B2) * z2 + R2), r2 = Aa(G2) * N2 + O2, o2 = La(G2) * z2 + R2;
          break;
        case ba.R:
          n2 = r2 = p2[x2], i2 = o2 = p2[x2 + 1], a2 = p2[x2++], s2 = p2[x2++];
          var X2 = p2[x2++], Y2 = p2[x2++];
          if (v2) {
            if (y2 + (j2 = l2[m2++]) > u2) {
              var Z2 = u2 - y2;
              t3.moveTo(a2, s2), t3.lineTo(a2 + Ia(Z2, X2), s2), (Z2 -= X2) > 0 && t3.lineTo(a2 + X2, s2 + Ia(Z2, Y2)), (Z2 -= Y2) > 0 && t3.lineTo(a2 + Da(X2 - Z2, 0), s2 + Y2), (Z2 -= X2) > 0 && t3.lineTo(a2, s2 + Da(Y2 - Z2, 0));
              break t;
            }
            y2 += j2;
          }
          t3.rect(a2, s2, X2, Y2);
          break;
        case ba.Z:
          if (v2) {
            var j2;
            if (y2 + (j2 = l2[m2++]) > u2) {
              T2 = (u2 - y2) / j2, t3.lineTo(r2 * (1 - T2) + n2 * T2, o2 * (1 - T2) + i2 * T2);
              break t;
            }
            y2 += j2;
          }
          t3.closePath(), r2 = n2, o2 = i2;
      }
    }
  }, t2.prototype.clone = function() {
    var e3 = new t2(), n2 = this.data;
    return e3.data = n2.slice ? n2.slice() : Array.prototype.slice.call(n2), e3._len = this._len, e3;
  }, t2.prototype.canSave = function() {
    return !!this._saveData;
  }, t2.CMD = ba, t2.initDefaultProps = ((e2 = t2.prototype)._saveData = !0, e2._ux = 0, e2._uy = 0, e2._pendingPtDist = 0, void (e2._version = 0)), t2;
})();
function Fa(t2, e2, n2, i2, r2, o2, a2) {
  if (r2 === 0) return !1;
  var s2 = r2, l2 = 0;
  if (a2 > e2 + s2 && a2 > i2 + s2 || a2 < e2 - s2 && a2 < i2 - s2 || o2 > t2 + s2 && o2 > n2 + s2 || o2 < t2 - s2 && o2 < n2 - s2) return !1;
  if (t2 === n2) return Math.abs(o2 - t2) <= s2 / 2;
  var u2 = (l2 = (e2 - i2) / (t2 - n2)) * o2 - a2 + (t2 * i2 - n2 * e2) / (t2 - n2);
  return u2 * u2 / (l2 * l2 + 1) <= s2 / 2 * s2 / 2;
}
function Va(t2, e2, n2, i2, r2, o2, a2, s2, l2, u2, h2) {
  if (l2 === 0) return !1;
  var c2 = l2;
  if (h2 > e2 + c2 && h2 > i2 + c2 && h2 > o2 + c2 && h2 > s2 + c2 || h2 < e2 - c2 && h2 < i2 - c2 && h2 < o2 - c2 && h2 < s2 - c2 || u2 > t2 + c2 && u2 > n2 + c2 && u2 > r2 + c2 && u2 > a2 + c2 || u2 < t2 - c2 && u2 < n2 - c2 && u2 < r2 - c2 && u2 < a2 - c2) return !1;
  var p2 = (function(t3, e3, n3, i3, r3, o3, a3, s3, l3, u3) {
    var h3, c3, p3, d2, f2, g2 = 5e-3, v2 = 1 / 0;
    dn[0] = l3, dn[1] = u3;
    for (var y2 = 0; y2 < 1; y2 += 0.05) fn[0] = mn(t3, n3, r3, a3, y2), fn[1] = mn(e3, i3, o3, s3, y2), (d2 = Bt(dn, fn)) < v2 && (h3 = y2, v2 = d2);
    v2 = 1 / 0;
    for (var m2 = 0; m2 < 32 && !(g2 < hn); m2++) c3 = h3 - g2, p3 = h3 + g2, fn[0] = mn(t3, n3, r3, a3, c3), fn[1] = mn(e3, i3, o3, s3, c3), d2 = Bt(fn, dn), c3 >= 0 && d2 < v2 ? (h3 = c3, v2 = d2) : (gn[0] = mn(t3, n3, r3, a3, p3), gn[1] = mn(e3, i3, o3, s3, p3), f2 = Bt(gn, dn), p3 <= 1 && f2 < v2 ? (h3 = p3, v2 = f2) : g2 *= 0.5);
    return ln(v2);
  })(t2, e2, n2, i2, r2, o2, a2, s2, u2, h2);
  return p2 <= c2 / 2;
}
function Ha(t2, e2, n2, i2, r2, o2, a2, s2, l2) {
  if (a2 === 0) return !1;
  var u2 = a2;
  if (l2 > e2 + u2 && l2 > i2 + u2 && l2 > o2 + u2 || l2 < e2 - u2 && l2 < i2 - u2 && l2 < o2 - u2 || s2 > t2 + u2 && s2 > n2 + u2 && s2 > r2 + u2 || s2 < t2 - u2 && s2 < n2 - u2 && s2 < r2 - u2) return !1;
  var h2 = (function(t3, e3, n3, i3, r3, o3, a3, s3) {
    var l3, u3 = 5e-3, h3 = 1 / 0;
    dn[0] = a3, dn[1] = s3;
    for (var c2 = 0; c2 < 1; c2 += 0.05) fn[0] = Mn(t3, n3, r3, c2), fn[1] = Mn(e3, i3, o3, c2), (g2 = Bt(dn, fn)) < h3 && (l3 = c2, h3 = g2);
    h3 = 1 / 0;
    for (var p2 = 0; p2 < 32 && !(u3 < hn); p2++) {
      var d2 = l3 - u3, f2 = l3 + u3;
      fn[0] = Mn(t3, n3, r3, d2), fn[1] = Mn(e3, i3, o3, d2);
      var g2 = Bt(fn, dn);
      if (d2 >= 0 && g2 < h3) l3 = d2, h3 = g2;
      else {
        gn[0] = Mn(t3, n3, r3, f2), gn[1] = Mn(e3, i3, o3, f2);
        var v2 = Bt(gn, dn);
        f2 <= 1 && v2 < h3 ? (l3 = f2, h3 = v2) : u3 *= 0.5;
      }
    }
    return ln(h3);
  })(t2, e2, n2, i2, r2, o2, s2, l2);
  return h2 <= u2 / 2;
}
var Wa = 2 * Math.PI;
function Ga(t2) {
  return (t2 %= Wa) < 0 && (t2 += Wa), t2;
}
var Ua = 2 * Math.PI;
function Xa(t2, e2, n2, i2, r2, o2, a2, s2, l2) {
  if (a2 === 0) return !1;
  var u2 = a2;
  s2 -= t2, l2 -= e2;
  var h2 = Math.sqrt(s2 * s2 + l2 * l2);
  if (h2 - u2 > n2 || h2 + u2 < n2) return !1;
  if (Math.abs(i2 - r2) % Ua < 1e-4) return !0;
  if (o2) {
    var c2 = i2;
    i2 = Ga(r2), r2 = Ga(c2);
  } else i2 = Ga(i2), r2 = Ga(r2);
  i2 > r2 && (r2 += Ua);
  var p2 = Math.atan2(l2, s2);
  return p2 < 0 && (p2 += Ua), p2 >= i2 && p2 <= r2 || p2 + Ua >= i2 && p2 + Ua <= r2;
}
function Ya(t2, e2, n2, i2, r2, o2) {
  if (o2 > e2 && o2 > i2 || o2 < e2 && o2 < i2 || i2 === e2) return 0;
  var a2 = (o2 - e2) / (i2 - e2), s2 = i2 < e2 ? 1 : -1;
  a2 !== 1 && a2 !== 0 || (s2 = i2 < e2 ? 0.5 : -0.5);
  var l2 = a2 * (n2 - t2) + t2;
  return l2 === r2 ? 1 / 0 : l2 > r2 ? s2 : 0;
}
var Za = Ea.CMD, ja = 2 * Math.PI, qa = [-1, -1, -1], Ka = [-1, -1];
function $a() {
  var t2 = Ka[0];
  Ka[0] = Ka[1], Ka[1] = t2;
}
function Qa(t2, e2, n2, i2, r2, o2, a2, s2, l2, u2) {
  if (u2 > e2 && u2 > i2 && u2 > o2 && u2 > s2 || u2 < e2 && u2 < i2 && u2 < o2 && u2 < s2) return 0;
  var h2 = xn(e2, i2, o2, s2, u2, qa);
  if (h2 === 0) return 0;
  for (var c2 = 0, p2 = -1, d2 = void 0, f2 = void 0, g2 = 0; g2 < h2; g2++) {
    var v2 = qa[g2], y2 = v2 === 0 || v2 === 1 ? 0.5 : 1;
    mn(t2, n2, r2, a2, v2) < l2 || (p2 < 0 && (p2 = bn(e2, i2, o2, s2, Ka), Ka[1] < Ka[0] && p2 > 1 && $a(), d2 = mn(e2, i2, o2, s2, Ka[0]), p2 > 1 && (f2 = mn(e2, i2, o2, s2, Ka[1]))), p2 === 2 ? v2 < Ka[0] ? c2 += d2 < e2 ? y2 : -y2 : v2 < Ka[1] ? c2 += f2 < d2 ? y2 : -y2 : c2 += s2 < f2 ? y2 : -y2 : v2 < Ka[0] ? c2 += d2 < e2 ? y2 : -y2 : c2 += s2 < d2 ? y2 : -y2);
  }
  return c2;
}
function Ja(t2, e2, n2, i2, r2, o2, a2, s2) {
  if (s2 > e2 && s2 > i2 && s2 > o2 || s2 < e2 && s2 < i2 && s2 < o2) return 0;
  var l2 = (function(t3, e3, n3, i3, r3) {
    var o3 = t3 - 2 * e3 + n3, a3 = 2 * (e3 - t3), s3 = t3 - i3, l3 = 0;
    if (vn(o3)) yn(a3) && (h3 = -s3 / a3) >= 0 && h3 <= 1 && (r3[l3++] = h3);
    else {
      var u3 = a3 * a3 - 4 * o3 * s3;
      if (vn(u3)) (h3 = -a3 / (2 * o3)) >= 0 && h3 <= 1 && (r3[l3++] = h3);
      else if (u3 > 0) {
        var h3, c3 = ln(u3), p3 = (-a3 - c3) / (2 * o3);
        (h3 = (-a3 + c3) / (2 * o3)) >= 0 && h3 <= 1 && (r3[l3++] = h3), p3 >= 0 && p3 <= 1 && (r3[l3++] = p3);
      }
    }
    return l3;
  })(e2, i2, o2, s2, qa);
  if (l2 === 0) return 0;
  var u2 = kn(e2, i2, o2);
  if (u2 >= 0 && u2 <= 1) {
    for (var h2 = 0, c2 = Mn(e2, i2, o2, u2), p2 = 0; p2 < l2; p2++) {
      var d2 = qa[p2] === 0 || qa[p2] === 1 ? 0.5 : 1;
      Mn(t2, n2, r2, qa[p2]) < a2 || (qa[p2] < u2 ? h2 += c2 < e2 ? d2 : -d2 : h2 += o2 < c2 ? d2 : -d2);
    }
    return h2;
  }
  return d2 = qa[0] === 0 || qa[0] === 1 ? 0.5 : 1, Mn(t2, n2, r2, qa[0]) < a2 ? 0 : o2 < e2 ? d2 : -d2;
}
function ts(t2, e2, n2, i2, r2, o2, a2, s2) {
  if ((s2 -= e2) > n2 || s2 < -n2) return 0;
  var l2 = Math.sqrt(n2 * n2 - s2 * s2);
  qa[0] = -l2, qa[1] = l2;
  var u2 = Math.abs(i2 - r2);
  if (u2 < 1e-4) return 0;
  if (u2 >= ja - 1e-4) {
    i2 = 0, r2 = ja;
    var h2 = o2 ? 1 : -1;
    return a2 >= qa[0] + t2 && a2 <= qa[1] + t2 ? h2 : 0;
  }
  if (i2 > r2) {
    var c2 = i2;
    i2 = r2, r2 = c2;
  }
  i2 < 0 && (i2 += ja, r2 += ja);
  for (var p2 = 0, d2 = 0; d2 < 2; d2++) {
    var f2 = qa[d2];
    if (f2 + t2 > a2) {
      var g2 = Math.atan2(s2, f2);
      h2 = o2 ? 1 : -1, g2 < 0 && (g2 = ja + g2), (g2 >= i2 && g2 <= r2 || g2 + ja >= i2 && g2 + ja <= r2) && (g2 > Math.PI / 2 && g2 < 1.5 * Math.PI && (h2 = -h2), p2 += h2);
    }
  }
  return p2;
}
function es(t2, e2, n2, i2, r2) {
  for (var o2, a2, s2, l2, u2 = t2.data, h2 = t2.len(), c2 = 0, p2 = 0, d2 = 0, f2 = 0, g2 = 0, v2 = 0; v2 < h2; ) {
    var y2 = u2[v2++], m2 = v2 === 1;
    switch (y2 === Za.M && v2 > 1 && (n2 || (c2 += Ya(p2, d2, f2, g2, i2, r2))), m2 && (f2 = p2 = u2[v2], g2 = d2 = u2[v2 + 1]), y2) {
      case Za.M:
        p2 = f2 = u2[v2++], d2 = g2 = u2[v2++];
        break;
      case Za.L:
        if (n2) {
          if (Fa(p2, d2, u2[v2], u2[v2 + 1], e2, i2, r2)) return !0;
        } else c2 += Ya(p2, d2, u2[v2], u2[v2 + 1], i2, r2) || 0;
        p2 = u2[v2++], d2 = u2[v2++];
        break;
      case Za.C:
        if (n2) {
          if (Va(p2, d2, u2[v2++], u2[v2++], u2[v2++], u2[v2++], u2[v2], u2[v2 + 1], e2, i2, r2)) return !0;
        } else c2 += Qa(p2, d2, u2[v2++], u2[v2++], u2[v2++], u2[v2++], u2[v2], u2[v2 + 1], i2, r2) || 0;
        p2 = u2[v2++], d2 = u2[v2++];
        break;
      case Za.Q:
        if (n2) {
          if (Ha(p2, d2, u2[v2++], u2[v2++], u2[v2], u2[v2 + 1], e2, i2, r2)) return !0;
        } else c2 += Ja(p2, d2, u2[v2++], u2[v2++], u2[v2], u2[v2 + 1], i2, r2) || 0;
        p2 = u2[v2++], d2 = u2[v2++];
        break;
      case Za.A:
        var _2 = u2[v2++], x2 = u2[v2++], b2 = u2[v2++], w2 = u2[v2++], S2 = u2[v2++], M2 = u2[v2++];
        v2 += 1;
        var T2 = !!(1 - u2[v2++]);
        o2 = Math.cos(S2) * b2 + _2, a2 = Math.sin(S2) * w2 + x2, m2 ? (f2 = o2, g2 = a2) : c2 += Ya(p2, d2, o2, a2, i2, r2);
        var k2 = (i2 - _2) * w2 / b2 + _2;
        if (n2) {
          if (Xa(_2, x2, w2, S2, S2 + M2, T2, e2, k2, r2)) return !0;
        } else c2 += ts(_2, x2, w2, S2, S2 + M2, T2, k2, r2);
        p2 = Math.cos(S2 + M2) * b2 + _2, d2 = Math.sin(S2 + M2) * w2 + x2;
        break;
      case Za.R:
        if (f2 = p2 = u2[v2++], g2 = d2 = u2[v2++], o2 = f2 + u2[v2++], a2 = g2 + u2[v2++], n2) {
          if (Fa(f2, g2, o2, g2, e2, i2, r2) || Fa(o2, g2, o2, a2, e2, i2, r2) || Fa(o2, a2, f2, a2, e2, i2, r2) || Fa(f2, a2, f2, g2, e2, i2, r2)) return !0;
        } else c2 += Ya(o2, g2, o2, a2, i2, r2), c2 += Ya(f2, a2, f2, g2, i2, r2);
        break;
      case Za.Z:
        if (n2) {
          if (Fa(p2, d2, f2, g2, e2, i2, r2)) return !0;
        } else c2 += Ya(p2, d2, f2, g2, i2, r2);
        p2 = f2, d2 = g2;
    }
  }
  return n2 || (s2 = d2, l2 = g2, Math.abs(s2 - l2) < 1e-4) || (c2 += Ya(p2, d2, f2, g2, i2, r2) || 0), c2 !== 0;
}
var ns = W({ fill: "#000", stroke: null, strokePercent: 1, fillOpacity: 1, strokeOpacity: 1, lineDashOffset: 0, lineWidth: 1, lineCap: "butt", miterLimit: 10, strokeNoScale: !1, strokeFirst: !1 }, ta), is = { style: W({ fill: !0, stroke: !0, strokePercent: !0, fillOpacity: !0, strokeOpacity: !0, lineDashOffset: !0, lineWidth: !0, miterLimit: !0 }, ea.style) }, rs = qi.concat(["invisible", "culling", "z", "z2", "zlevel", "parent"]), os = (function(t2) {
  function e2(e3) {
    return t2.call(this, e3) || this;
  }
  var n2;
  return _(e2, t2), e2.prototype.update = function() {
    var n3 = this;
    t2.prototype.update.call(this);
    var i2 = this.style;
    if (i2.decal) {
      var r2 = this._decalEl = this._decalEl || new e2();
      r2.buildPath === e2.prototype.buildPath && (r2.buildPath = function(t3) {
        n3.buildPath(t3, n3.shape);
      }), r2.silent = !0;
      var o2 = r2.style;
      for (var a2 in i2) o2[a2] !== i2[a2] && (o2[a2] = i2[a2]);
      o2.fill = i2.fill ? i2.decal : null, o2.decal = null, o2.shadowColor = null, i2.strokeFirst && (o2.stroke = null);
      for (var s2 = 0; s2 < rs.length; ++s2) r2[rs[s2]] = this[rs[s2]];
      r2.__dirty |= 1;
    } else this._decalEl && (this._decalEl = null);
  }, e2.prototype.getDecalElement = function() {
    return this._decalEl;
  }, e2.prototype._init = function(e3) {
    var n3 = K(e3);
    this.shape = this.getDefaultShape();
    var i2 = this.getDefaultStyle();
    i2 && this.useStyle(i2);
    for (var r2 = 0; r2 < n3.length; r2++) {
      var o2 = n3[r2], a2 = e3[o2];
      o2 === "style" ? this.style ? H(this.style, a2) : this.useStyle(a2) : o2 === "shape" ? H(this.shape, a2) : t2.prototype.attrKV.call(this, o2, a2);
    }
    this.style || this.useStyle({});
  }, e2.prototype.getDefaultStyle = function() {
    return null;
  }, e2.prototype.getDefaultShape = function() {
    return {};
  }, e2.prototype.canBeInsideText = function() {
    return this.hasFill();
  }, e2.prototype.getInsideTextFill = function() {
    var t3 = this.style.fill;
    if (t3 !== "none") {
      if (et(t3)) {
        var e3 = Qn(t3, 0);
        return e3 > 0.5 ? Ei : e3 > 0.2 ? "#eee" : Fi;
      }
      if (t3) return Fi;
    }
    return Ei;
  }, e2.prototype.getInsideTextStroke = function(t3) {
    var e3 = this.style.fill;
    if (et(e3)) {
      var n3 = this.__zr;
      if (!(!n3 || !n3.isDarkMode()) == Qn(t3, 0) < 0.4) return e3;
    }
  }, e2.prototype.buildPath = function(t3, e3, n3) {
  }, e2.prototype.pathUpdated = function() {
    this.__dirty &= -5;
  }, e2.prototype.getUpdatedPathProxy = function(t3) {
    return !this.path && this.createPathProxy(), this.path.beginPath(), this.buildPath(this.path, this.shape, t3), this.path;
  }, e2.prototype.createPathProxy = function() {
    this.path = new Ea(!1);
  }, e2.prototype.hasStroke = function() {
    var t3 = this.style, e3 = t3.stroke;
    return !(e3 == null || e3 === "none" || !(t3.lineWidth > 0));
  }, e2.prototype.hasFill = function() {
    var t3 = this.style.fill;
    return t3 != null && t3 !== "none";
  }, e2.prototype.getBoundingRect = function() {
    var t3 = this._rect, e3 = this.style, n3 = !t3;
    if (n3) {
      var i2 = !1;
      this.path || (i2 = !0, this.createPathProxy());
      var r2 = this.path;
      (i2 || 4 & this.__dirty) && (r2.beginPath(), this.buildPath(r2, this.shape, !1), this.pathUpdated()), t3 = r2.getBoundingRect();
    }
    if (this._rect = t3, this.hasStroke() && this.path && this.path.len() > 0) {
      var o2 = this._rectStroke || (this._rectStroke = t3.clone());
      if (this.__dirty || n3) {
        o2.copy(t3);
        var a2 = e3.strokeNoScale ? this.getLineScale() : 1, s2 = e3.lineWidth;
        if (!this.hasFill()) {
          var l2 = this.strokeContainThreshold;
          s2 = Math.max(s2, l2 ?? 4);
        }
        a2 > 1e-10 && (o2.width += s2 / a2, o2.height += s2 / a2, o2.x -= s2 / a2 / 2, o2.y -= s2 / a2 / 2);
      }
      return o2;
    }
    return t3;
  }, e2.prototype.contain = function(t3, e3) {
    var n3 = this.transformCoordToLocal(t3, e3), i2 = this.getBoundingRect(), r2 = this.style;
    if (t3 = n3[0], e3 = n3[1], i2.contain(t3, e3)) {
      var o2 = this.path;
      if (this.hasStroke()) {
        var a2 = r2.lineWidth, s2 = r2.strokeNoScale ? this.getLineScale() : 1;
        if (s2 > 1e-10 && (this.hasFill() || (a2 = Math.max(a2, this.strokeContainThreshold)), (function(t4, e4, n4, i3) {
          return es(t4, e4, !0, n4, i3);
        })(o2, a2 / s2, t3, e3))) return !0;
      }
      if (this.hasFill()) return (function(t4, e4, n4) {
        return es(t4, 0, !1, e4, n4);
      })(o2, t3, e3);
    }
    return !1;
  }, e2.prototype.dirtyShape = function() {
    this.__dirty |= 4, this._rect && (this._rect = null), this._decalEl && this._decalEl.dirtyShape(), this.markRedraw();
  }, e2.prototype.dirty = function() {
    this.dirtyStyle(), this.dirtyShape();
  }, e2.prototype.animateShape = function(t3) {
    return this.animate("shape", t3);
  }, e2.prototype.updateDuringAnimation = function(t3) {
    t3 === "style" ? this.dirtyStyle() : t3 === "shape" ? this.dirtyShape() : this.markRedraw();
  }, e2.prototype.attrKV = function(e3, n3) {
    e3 === "shape" ? this.setShape(n3) : t2.prototype.attrKV.call(this, e3, n3);
  }, e2.prototype.setShape = function(t3, e3) {
    var n3 = this.shape;
    return n3 || (n3 = this.shape = {}), typeof t3 == "string" ? n3[t3] = e3 : H(n3, t3), this.dirtyShape(), this;
  }, e2.prototype.shapeChanged = function() {
    return !!(4 & this.__dirty);
  }, e2.prototype.createStyle = function(t3) {
    return Mt(ns, t3);
  }, e2.prototype._innerSaveToNormal = function(e3) {
    t2.prototype._innerSaveToNormal.call(this, e3);
    var n3 = this._normalState;
    e3.shape && !n3.shape && (n3.shape = H({}, this.shape));
  }, e2.prototype._applyStateObj = function(e3, n3, i2, r2, o2, a2) {
    t2.prototype._applyStateObj.call(this, e3, n3, i2, r2, o2, a2);
    var s2, l2 = !(n3 && r2);
    if (n3 && n3.shape ? o2 ? r2 ? s2 = n3.shape : (s2 = H({}, i2.shape), H(s2, n3.shape)) : (s2 = H({}, r2 ? this.shape : i2.shape), H(s2, n3.shape)) : l2 && (s2 = i2.shape), s2) if (o2) {
      this.shape = H({}, this.shape);
      for (var u2 = {}, h2 = K(s2), c2 = 0; c2 < h2.length; c2++) {
        var p2 = h2[c2];
        typeof s2[p2] == "object" ? this.shape[p2] = s2[p2] : u2[p2] = s2[p2];
      }
      this._transitionState(e3, { shape: u2 }, a2);
    } else this.shape = s2, this.dirtyShape();
  }, e2.prototype._mergeStates = function(e3) {
    for (var n3, i2 = t2.prototype._mergeStates.call(this, e3), r2 = 0; r2 < e3.length; r2++) {
      var o2 = e3[r2];
      o2.shape && (n3 = n3 || {}, this._mergeStyle(n3, o2.shape));
    }
    return n3 && (i2.shape = n3), i2;
  }, e2.prototype.getAnimationStyleProps = function() {
    return is;
  }, e2.prototype.isZeroArea = function() {
    return !1;
  }, e2.extend = function(t3) {
    var n3 = (function(e3) {
      function n4(n5) {
        var i3 = e3.call(this, n5) || this;
        return t3.init && t3.init.call(i3, n5), i3;
      }
      return _(n4, e3), n4.prototype.getDefaultStyle = function() {
        return F(t3.style);
      }, n4.prototype.getDefaultShape = function() {
        return F(t3.shape);
      }, n4;
    })(e2);
    for (var i2 in t3) typeof t3[i2] == "function" && (n3.prototype[i2] = t3[i2]);
    return n3;
  }, e2.initDefaultProps = ((n2 = e2.prototype).type = "path", n2.strokeContainThreshold = 5, n2.segmentIgnoreThreshold = 0, n2.subPixelOptimize = !1, n2.autoBatch = !1, void (n2.__dirty = 7)), e2;
})(ra), as = W({ strokeFirst: !0, font: w, x: 0, y: 0, textAlign: "left", textBaseline: "top", miterLimit: 2 }, ns), ss = (function(t2) {
  function e2() {
    return t2 !== null && t2.apply(this, arguments) || this;
  }
  return _(e2, t2), e2.prototype.hasStroke = function() {
    return Qo(this.style);
  }, e2.prototype.hasFill = function() {
    var t3 = this.style.fill;
    return t3 != null && t3 !== "none";
  }, e2.prototype.createStyle = function(t3) {
    return Mt(as, t3);
  }, e2.prototype.setBoundingRect = function(t3) {
    this._rect = t3;
  }, e2.prototype.getBoundingRect = function() {
    var t3, e3, n2;
    return this._rect || (this._rect = (t3 = this.style, e3 = Ko(t3.text), n2 = t3.font, $o2(t3, er($i(n2), e3), ar(n2), null))), this._rect;
  }, e2.initDefaultProps = void (e2.prototype.dirtyRectTolerance = 10), e2;
})(ra);
ss.prototype.type = "tspan";
var ls = W({ x: 0, y: 0 }, ta), us = { style: W({ x: !0, y: !0, width: !0, height: !0, sx: !0, sy: !0, sWidth: !0, sHeight: !0 }, ea.style) }, hs2 = (function(t2) {
  function e2() {
    return t2 !== null && t2.apply(this, arguments) || this;
  }
  return _(e2, t2), e2.prototype.createStyle = function(t3) {
    return Mt(ls, t3);
  }, e2.prototype._getSize = function(t3) {
    var e3 = this.style, n2 = e3[t3];
    if (n2 != null) return n2;
    var i2, r2 = (i2 = e3.image) && typeof i2 != "string" && i2.width && i2.height ? e3.image : this.__image;
    if (!r2) return 0;
    var o2 = t3 === "width" ? "height" : "width", a2 = e3[o2];
    return a2 == null ? r2[t3] : r2[t3] / r2[o2] * a2;
  }, e2.prototype.getWidth = function() {
    return this._getSize("width");
  }, e2.prototype.getHeight = function() {
    return this._getSize("height");
  }, e2.prototype.getAnimationStyleProps = function() {
    return us;
  }, e2.prototype.getBoundingRect = function() {
    var t3 = this.style;
    return this._rect || (this._rect = new Oe(t3.x || 0, t3.y || 0, this.getWidth(), this.getHeight())), this._rect;
  }, e2;
})(ra);
hs2.prototype.type = "image";
var cs = Math.round;
function ps(t2, e2, n2) {
  if (e2) {
    var i2 = e2.x1, r2 = e2.x2, o2 = e2.y1, a2 = e2.y2;
    t2.x1 = i2, t2.x2 = r2, t2.y1 = o2, t2.y2 = a2;
    var s2 = n2 && n2.lineWidth;
    return s2 && (cs(2 * i2) === cs(2 * r2) && (t2.x1 = t2.x2 = fs2(i2, s2, !0)), cs(2 * o2) === cs(2 * a2) && (t2.y1 = t2.y2 = fs2(o2, s2, !0))), t2;
  }
}
function ds2(t2, e2, n2) {
  if (e2) {
    var i2 = e2.x, r2 = e2.y, o2 = e2.width, a2 = e2.height;
    t2.x = i2, t2.y = r2, t2.width = o2, t2.height = a2;
    var s2 = n2 && n2.lineWidth;
    return s2 && (t2.x = fs2(i2, s2, !0), t2.y = fs2(r2, s2, !0), t2.width = Math.max(fs2(i2 + o2, s2, !1) - t2.x, o2 === 0 ? 0 : 1), t2.height = Math.max(fs2(r2 + a2, s2, !1) - t2.y, a2 === 0 ? 0 : 1)), t2;
  }
}
function fs2(t2, e2, n2) {
  if (!e2) return t2;
  var i2 = cs(2 * t2);
  return (i2 + cs(e2)) % 2 == 0 ? i2 / 2 : (i2 + (n2 ? 1 : -1)) / 2;
}
var gs = /* @__PURE__ */ (function() {
  return function() {
    this.x = 0, this.y = 0, this.width = 0, this.height = 0;
  };
})(), vs2 = {}, ys = (function(t2) {
  function e2(e3) {
    return t2.call(this, e3) || this;
  }
  return _(e2, t2), e2.prototype.getDefaultShape = function() {
    return new gs();
  }, e2.prototype.buildPath = function(t3, e3) {
    var n2, i2, r2, o2;
    if (this.subPixelOptimize) {
      var a2 = ds2(vs2, e3, this.style);
      n2 = a2.x, i2 = a2.y, r2 = a2.width, o2 = a2.height, a2.r = e3.r, e3 = a2;
    } else n2 = e3.x, i2 = e3.y, r2 = e3.width, o2 = e3.height;
    e3.r ? (function(t4, e4) {
      var n3, i3, r3, o3, a3, s2 = e4.x, l2 = e4.y, u2 = e4.width, h2 = e4.height, c2 = e4.r;
      u2 < 0 && (s2 += u2, u2 = -u2), h2 < 0 && (l2 += h2, h2 = -h2), typeof c2 == "number" ? n3 = i3 = r3 = o3 = c2 : c2 instanceof Array ? c2.length === 1 ? n3 = i3 = r3 = o3 = c2[0] : c2.length === 2 ? (n3 = r3 = c2[0], i3 = o3 = c2[1]) : c2.length === 3 ? (n3 = c2[0], i3 = o3 = c2[1], r3 = c2[2]) : (n3 = c2[0], i3 = c2[1], r3 = c2[2], o3 = c2[3]) : n3 = i3 = r3 = o3 = 0, n3 + i3 > u2 && (n3 *= u2 / (a3 = n3 + i3), i3 *= u2 / a3), r3 + o3 > u2 && (r3 *= u2 / (a3 = r3 + o3), o3 *= u2 / a3), i3 + r3 > h2 && (i3 *= h2 / (a3 = i3 + r3), r3 *= h2 / a3), n3 + o3 > h2 && (n3 *= h2 / (a3 = n3 + o3), o3 *= h2 / a3), t4.moveTo(s2 + n3, l2), t4.lineTo(s2 + u2 - i3, l2), i3 !== 0 && t4.arc(s2 + u2 - i3, l2 + i3, i3, -Math.PI / 2, 0), t4.lineTo(s2 + u2, l2 + h2 - r3), r3 !== 0 && t4.arc(s2 + u2 - r3, l2 + h2 - r3, r3, 0, Math.PI / 2), t4.lineTo(s2 + o3, l2 + h2), o3 !== 0 && t4.arc(s2 + o3, l2 + h2 - o3, o3, Math.PI / 2, Math.PI), t4.lineTo(s2, l2 + n3), n3 !== 0 && t4.arc(s2 + n3, l2 + n3, n3, Math.PI, 1.5 * Math.PI);
    })(t3, e3) : t3.rect(n2, i2, r2, o2);
  }, e2.prototype.isZeroArea = function() {
    return !this.shape.width || !this.shape.height;
  }, e2;
})(os);
ys.prototype.type = "rect";
var ms = { fill: "#000" }, _s = {}, xs = { style: W({ fill: !0, stroke: !0, fillOpacity: !0, strokeOpacity: !0, lineWidth: !0, fontSize: !0, lineHeight: !0, width: !0, height: !0, textShadowColor: !0, textShadowBlur: !0, textShadowOffsetX: !0, textShadowOffsetY: !0, backgroundColor: !0, padding: !0, borderColor: !0, borderWidth: !0, borderRadius: !0 }, ea.style) }, bs = (function(t2) {
  function e2(e3) {
    var n2 = t2.call(this) || this;
    return n2.type = "text", n2._children = [], n2._defaultStyle = ms, n2.attr(e3), n2;
  }
  return _(e2, t2), e2.prototype.childrenRef = function() {
    return this._children;
  }, e2.prototype.update = function() {
    t2.prototype.update.call(this), this.styleChanged() && this._updateSubTexts();
    for (var e3 = 0; e3 < this._children.length; e3++) {
      var n2 = this._children[e3];
      n2.zlevel = this.zlevel, n2.z = this.z, n2.z2 = this.z2, n2.culling = this.culling, n2.cursor = this.cursor, n2.invisible = this.invisible;
    }
  }, e2.prototype.updateTransform = function() {
    var e3 = this.innerTransformable;
    e3 ? (e3.updateTransform(), e3.transform && (this.transform = e3.transform)) : t2.prototype.updateTransform.call(this);
  }, e2.prototype.getLocalTransform = function(e3) {
    var n2 = this.innerTransformable;
    return n2 ? n2.getLocalTransform(e3) : t2.prototype.getLocalTransform.call(this, e3);
  }, e2.prototype.getComputedTransform = function() {
    return this.__hostTarget && (this.__hostTarget.getComputedTransform(), this.__hostTarget.updateInnerText(!0)), t2.prototype.getComputedTransform.call(this);
  }, e2.prototype._updateSubTexts = function() {
    var t3;
    this._childCursor = 0, Cs(t3 = this.style), Y(t3.rich, Cs), this.style.rich ? this._updateRichTexts() : this._updatePlainTexts(), this._children.length = this._childCursor, this.styleUpdated();
  }, e2.prototype.addSelfToZr = function(e3) {
    t2.prototype.addSelfToZr.call(this, e3);
    for (var n2 = 0; n2 < this._children.length; n2++) this._children[n2].__zr = e3;
  }, e2.prototype.removeSelfFromZr = function(e3) {
    t2.prototype.removeSelfFromZr.call(this, e3);
    for (var n2 = 0; n2 < this._children.length; n2++) this._children[n2].__zr = null;
  }, e2.prototype.getBoundingRect = function() {
    if (this.styleChanged() && this._updateSubTexts(), !this._rect) {
      for (var t3 = new Oe(0, 0, 0, 0), e3 = this._children, n2 = [], i2 = null, r2 = 0; r2 < e3.length; r2++) {
        var o2 = e3[r2], a2 = o2.getBoundingRect(), s2 = o2.getLocalTransform(n2);
        s2 ? (t3.copy(a2), t3.applyTransform(s2), (i2 = i2 || t3.clone()).union(t3)) : (i2 = i2 || a2.clone()).union(a2);
      }
      this._rect = i2 || t3;
    }
    return this._rect;
  }, e2.prototype.setDefaultTextStyle = function(t3) {
    this._defaultStyle = t3 || ms;
  }, e2.prototype.setTextContent = function(t3) {
  }, e2.prototype._mergeStyle = function(t3, e3) {
    if (!e3) return t3;
    var n2 = e3.rich, i2 = t3.rich || n2 && {};
    return H(t3, e3), n2 && i2 ? (this._mergeRich(i2, n2), t3.rich = i2) : i2 && (t3.rich = i2), t3;
  }, e2.prototype._mergeRich = function(t3, e3) {
    for (var n2 = K(e3), i2 = 0; i2 < n2.length; i2++) {
      var r2 = n2[i2];
      t3[r2] = t3[r2] || {}, H(t3[r2], e3[r2]);
    }
  }, e2.prototype.getAnimationStyleProps = function() {
    return xs;
  }, e2.prototype._getOrCreateChild = function(t3) {
    var e3 = this._children[this._childCursor];
    return e3 && e3 instanceof t3 || (e3 = new t3()), this._children[this._childCursor++] = e3, e3.__zr = this.__zr, e3.parent = this, e3;
  }, e2.prototype._updatePlainTexts = function() {
    var t3 = this.style, e3 = t3.font || w, n2 = t3.padding, i2 = this._defaultStyle, r2 = t3.x || 0, o2 = t3.y || 0, a2 = t3.align || i2.align || "left", s2 = t3.verticalAlign || i2.verticalAlign || "top";
    Zo(_s, i2.overflowRect, r2, o2, a2, s2), r2 = _s.baseX, o2 = _s.baseY;
    var l2 = (function(t4, e4, n3, i3) {
      var r3 = Ko(t4), o3 = e4.overflow, a3 = e4.padding, s3 = a3 ? a3[1] + a3[3] : 0, l3 = a3 ? a3[0] + a3[2] : 0, u3 = e4.font, h3 = o3 === "truncate", c3 = ar(u3), p3 = ct(e4.lineHeight, c3), d3 = e4.lineOverflow === "truncate", f3 = !1, g3 = e4.width;
      g3 == null && n3 != null && (g3 = n3 - s3);
      var v3, y3 = e4.height;
      y3 == null && i3 != null && (y3 = i3 - l3);
      var m3 = (v3 = g3 == null || o3 !== "break" && o3 !== "breakAll" ? r3 ? r3.split(`
`) : [] : r3 ? Yo(r3, e4.font, g3, o3 === "breakAll", 0).lines : []).length * p3;
      if (y3 == null && (y3 = m3), m3 > y3 && d3) {
        var _3 = Math.floor(y3 / p3);
        f3 = f3 || v3.length > _3, m3 = (v3 = v3.slice(0, _3)).length * p3;
      }
      if (r3 && h3 && g3 != null) for (var x3 = Bo(g3, u3, e4.ellipsis, { minChar: e4.truncateMinChar, placeholder: e4.placeholder }), b3 = {}, w2 = 0; w2 < v3.length; w2++) Eo(b3, v3[w2], x3), v3[w2] = b3.textLine, f3 = f3 || b3.isTruncated;
      var S3 = y3, M3 = 0, T3 = $i(u3);
      for (w2 = 0; w2 < v3.length; w2++) M3 = Math.max(er(T3, v3[w2]), M3);
      g3 == null && (g3 = M3);
      var k3 = g3;
      return { lines: v3, height: y3, outerWidth: k3 += s3, outerHeight: S3 += l3, lineHeight: p3, calculatedLineHeight: c3, contentWidth: M3, contentHeight: m3, width: g3, isTruncated: f3 };
    })(Ls(t3), t3, _s.outerWidth, _s.outerHeight), u2 = Ps(t3), h2 = !!t3.backgroundColor, c2 = l2.outerHeight, p2 = l2.outerWidth, d2 = l2.lines, f2 = l2.lineHeight;
    this.isTruncated = !!l2.isTruncated;
    var g2 = r2, v2 = or(o2, l2.contentHeight, s2);
    if (u2 || n2) {
      var y2 = rr2(r2, p2, a2), m2 = or(o2, c2, s2);
      u2 && this._renderBackground(t3, t3, y2, m2, p2, c2);
    }
    v2 += f2 / 2, n2 && (g2 = As(r2, a2, n2), s2 === "top" ? v2 += n2[0] : s2 === "bottom" && (v2 -= n2[2]));
    for (var _2 = 0, x2 = !1, b2 = !1, S2 = Ds("fill" in t3 ? t3.fill : (b2 = !0, i2.fill)), M2 = Is("stroke" in t3 ? t3.stroke : h2 || i2.autoStroke && !b2 ? null : (_2 = 2, x2 = !0, i2.stroke)), T2 = t3.textShadowBlur > 0, k2 = 0; k2 < d2.length; k2++) {
      var C2 = this._getOrCreateChild(ss), I2 = C2.createStyle();
      C2.useStyle(I2), I2.text = d2[k2], I2.x = g2, I2.y = v2, I2.textAlign = a2, I2.textBaseline = "middle", I2.opacity = t3.opacity, I2.strokeFirst = !0, T2 && (I2.shadowBlur = t3.textShadowBlur || 0, I2.shadowColor = t3.textShadowColor || "transparent", I2.shadowOffsetX = t3.textShadowOffsetX || 0, I2.shadowOffsetY = t3.textShadowOffsetY || 0), I2.stroke = M2, I2.fill = S2, M2 && (I2.lineWidth = t3.lineWidth || _2, I2.lineDash = t3.lineDash, I2.lineDashOffset = t3.lineDashOffset || 0), I2.font = e3, ks(I2, t3), v2 += f2, C2.setBoundingRect($o2(I2, l2.contentWidth, l2.calculatedLineHeight, x2 ? 0 : null));
    }
  }, e2.prototype._updateRichTexts = function() {
    var t3 = this.style, e3 = this._defaultStyle, n2 = t3.align || e3.align, i2 = t3.verticalAlign || e3.verticalAlign, r2 = t3.x || 0, o2 = t3.y || 0;
    Zo(_s, e3.overflowRect, r2, o2, n2, i2), r2 = _s.baseX, o2 = _s.baseY;
    var a2 = (function(t4, e4, n3, i3, r3) {
      var o3 = new Wo(), a3 = Ko(t4);
      if (!a3) return o3;
      var s3 = e4.padding, l3 = s3 ? s3[1] + s3[3] : 0, u3 = s3 ? s3[0] + s3[2] : 0, h3 = e4.width;
      h3 == null && n3 != null && (h3 = n3 - l3);
      var c3 = e4.height;
      c3 == null && i3 != null && (c3 = i3 - u3);
      for (var p3, d3 = e4.overflow, f3 = d3 !== "break" && d3 !== "breakAll" || h3 == null ? null : { width: h3, accumWidth: 0, breakAll: d3 === "breakAll" }, g3 = No.lastIndex = 0; (p3 = No.exec(a3)) != null; ) {
        var v3 = p3.index;
        v3 > g3 && Go(o3, a3.substring(g3, v3), e4, f3), Go(o3, p3[2], e4, f3, p3[1]), g3 = No.lastIndex;
      }
      g3 < a3.length && Go(o3, a3.substring(g3, a3.length), e4, f3);
      var y3 = [], m3 = 0, _3 = 0, x3 = d3 === "truncate", b3 = e4.lineOverflow === "truncate", w3 = {};
      function S3(t5, e5, n4) {
        t5.width = e5, t5.lineHeight = n4, m3 += n4, _3 = Math.max(_3, e5);
      }
      t: for (var M3 = 0; M3 < o3.lines.length; M3++) {
        for (var T3 = o3.lines[M3], k3 = 0, C3 = 0, I2 = 0; I2 < T3.tokens.length; I2++) {
          var D2 = (V2 = T3.tokens[I2]).styleName && e4.rich[V2.styleName] || {}, A2 = V2.textPadding = D2.padding, L2 = A2 ? A2[1] + A2[3] : 0, P2 = V2.font = D2.font || e4.font;
          V2.contentHeight = ar(P2);
          var O2 = ct(D2.height, V2.contentHeight);
          if (V2.innerHeight = O2, A2 && (O2 += A2[0] + A2[2]), V2.height = O2, V2.lineHeight = pt(D2.lineHeight, e4.lineHeight, O2), V2.align = D2 && D2.align || r3, V2.verticalAlign = D2 && D2.verticalAlign || "middle", b3 && c3 != null && m3 + V2.lineHeight > c3) {
            var R2 = o3.lines.length;
            I2 > 0 ? (T3.tokens = T3.tokens.slice(0, I2), S3(T3, C3, k3), o3.lines = o3.lines.slice(0, M3 + 1)) : o3.lines = o3.lines.slice(0, M3), o3.isTruncated = o3.isTruncated || o3.lines.length < R2;
            break t;
          }
          var N2 = D2.width, z2 = N2 == null || N2 === "auto";
          if (typeof N2 == "string" && N2.charAt(N2.length - 1) === "%") V2.percentWidth = N2, y3.push(V2), V2.contentWidth = er($i(P2), V2.text);
          else {
            if (z2) {
              var B2 = D2.backgroundColor, E2 = B2 && B2.image;
              E2 && Ro(E2 = Lo(E2)) && (V2.width = Math.max(V2.width, E2.width * O2 / E2.height));
            }
            var F2 = x3 && h3 != null ? h3 - C3 : null;
            F2 != null && F2 < V2.width ? !z2 || F2 < L2 ? (V2.text = "", V2.width = V2.contentWidth = 0) : (zo(w3, V2.text, F2 - L2, P2, e4.ellipsis, { minChar: e4.truncateMinChar }), V2.text = w3.text, o3.isTruncated = o3.isTruncated || w3.isTruncated, V2.width = V2.contentWidth = er($i(P2), V2.text)) : V2.contentWidth = er($i(P2), V2.text);
          }
          V2.width += L2, C3 += V2.width, D2 && (k3 = Math.max(k3, V2.lineHeight));
        }
        S3(T3, C3, k3);
      }
      for (o3.outerWidth = o3.width = ct(h3, _3), o3.outerHeight = o3.height = ct(c3, m3), o3.contentHeight = m3, o3.contentWidth = _3, o3.outerWidth += l3, o3.outerHeight += u3, M3 = 0; M3 < y3.length; M3++) {
        var V2, H2 = (V2 = y3[M3]).percentWidth;
        V2.width = parseInt(H2, 10) / 100 * o3.width;
      }
      return o3;
    })(Ls(t3), t3, _s.outerWidth, _s.outerHeight, n2), s2 = a2.width, l2 = a2.outerWidth, u2 = a2.outerHeight, h2 = t3.padding;
    this.isTruncated = !!a2.isTruncated;
    var c2 = rr2(r2, l2, n2), p2 = or(o2, u2, i2), d2 = c2, f2 = p2;
    h2 && (d2 += h2[3], f2 += h2[0]);
    var g2 = d2 + s2;
    Ps(t3) && this._renderBackground(t3, t3, c2, p2, l2, u2);
    for (var v2 = !!t3.backgroundColor, y2 = 0; y2 < a2.lines.length; y2++) {
      for (var m2 = a2.lines[y2], _2 = m2.tokens, x2 = _2.length, b2 = m2.lineHeight, w2 = m2.width, S2 = 0, M2 = d2, T2 = g2, k2 = x2 - 1, C2 = void 0; S2 < x2 && (!(C2 = _2[S2]).align || C2.align === "left"); ) this._placeToken(C2, t3, b2, f2, M2, "left", v2), w2 -= C2.width, M2 += C2.width, S2++;
      for (; k2 >= 0 && (C2 = _2[k2]).align === "right"; ) this._placeToken(C2, t3, b2, f2, T2, "right", v2), w2 -= C2.width, T2 -= C2.width, k2--;
      for (M2 += (s2 - (M2 - d2) - (g2 - T2) - w2) / 2; S2 <= k2; ) C2 = _2[S2], this._placeToken(C2, t3, b2, f2, M2 + C2.width / 2, "center", v2), M2 += C2.width, S2++;
      f2 += b2;
    }
  }, e2.prototype._placeToken = function(t3, e3, n2, i2, r2, o2, a2) {
    var s2 = e3.rich[t3.styleName] || {};
    s2.text = t3.text;
    var l2 = t3.verticalAlign, u2 = i2 + n2 / 2;
    l2 === "top" ? u2 = i2 + t3.height / 2 : l2 === "bottom" && (u2 = i2 + n2 - t3.height / 2), !t3.isLineHolder && Ps(s2) && this._renderBackground(s2, e3, o2 === "right" ? r2 - t3.width : o2 === "center" ? r2 - t3.width / 2 : r2, u2 - t3.height / 2, t3.width, t3.height);
    var h2 = !!s2.backgroundColor, c2 = t3.textPadding;
    c2 && (r2 = As(r2, o2, c2), u2 -= t3.height / 2 - c2[0] - t3.innerHeight / 2);
    var p2 = this._getOrCreateChild(ss), d2 = p2.createStyle();
    p2.useStyle(d2);
    var f2 = this._defaultStyle, g2 = !1, v2 = 0, y2 = !1, m2 = Ds("fill" in s2 ? s2.fill : "fill" in e3 ? e3.fill : (g2 = !0, f2.fill)), _2 = Is("stroke" in s2 ? s2.stroke : "stroke" in e3 ? e3.stroke : h2 || a2 || f2.autoStroke && !g2 ? null : (v2 = 2, y2 = !0, f2.stroke)), x2 = s2.textShadowBlur > 0 || e3.textShadowBlur > 0;
    d2.text = t3.text, d2.x = r2, d2.y = u2, x2 && (d2.shadowBlur = s2.textShadowBlur || e3.textShadowBlur || 0, d2.shadowColor = s2.textShadowColor || e3.textShadowColor || "transparent", d2.shadowOffsetX = s2.textShadowOffsetX || e3.textShadowOffsetX || 0, d2.shadowOffsetY = s2.textShadowOffsetY || e3.textShadowOffsetY || 0), d2.textAlign = o2, d2.textBaseline = "middle", d2.font = t3.font || w, d2.opacity = pt(s2.opacity, e3.opacity, 1), ks(d2, s2), _2 && (d2.lineWidth = pt(s2.lineWidth, e3.lineWidth, v2), d2.lineDash = ct(s2.lineDash, e3.lineDash), d2.lineDashOffset = e3.lineDashOffset || 0, d2.stroke = _2), m2 && (d2.fill = m2), p2.setBoundingRect($o2(d2, t3.contentWidth, t3.contentHeight, y2 ? 0 : null));
  }, e2.prototype._renderBackground = function(t3, e3, n2, i2, r2, o2) {
    var a2, s2, l2, u2 = t3.backgroundColor, h2 = t3.borderWidth, c2 = t3.borderColor, p2 = u2 && u2.image, d2 = u2 && !p2, f2 = t3.borderRadius, g2 = this;
    if (d2 || t3.lineHeight || h2 && c2) {
      (a2 = this._getOrCreateChild(ys)).useStyle(a2.createStyle()), a2.style.fill = null;
      var v2 = a2.shape;
      v2.x = n2, v2.y = i2, v2.width = r2, v2.height = o2, v2.r = f2, a2.dirtyShape();
    }
    if (d2) (l2 = a2.style).fill = u2 || null, l2.fillOpacity = ct(t3.fillOpacity, 1);
    else if (p2) {
      (s2 = this._getOrCreateChild(hs2)).onload = function() {
        g2.dirtyStyle();
      };
      var y2 = s2.style;
      y2.image = u2.image, y2.x = n2, y2.y = i2, y2.width = r2, y2.height = o2;
    }
    h2 && c2 && ((l2 = a2.style).lineWidth = h2, l2.stroke = c2, l2.strokeOpacity = ct(t3.strokeOpacity, 1), l2.lineDash = t3.borderDash, l2.lineDashOffset = t3.borderDashOffset || 0, a2.strokeContainThreshold = 0, a2.hasFill() && a2.hasStroke() && (l2.strokeFirst = !0, l2.lineWidth *= 2));
    var m2 = (a2 || s2).style;
    m2.shadowBlur = t3.shadowBlur || 0, m2.shadowColor = t3.shadowColor || "transparent", m2.shadowOffsetX = t3.shadowOffsetX || 0, m2.shadowOffsetY = t3.shadowOffsetY || 0, m2.opacity = pt(t3.opacity, e3.opacity, 1);
  }, e2.makeFont = function(t3) {
    var e3 = "";
    return (function(t4) {
      return t4.fontSize != null || t4.fontFamily || t4.fontWeight;
    })(t3) && (e3 = [t3.fontStyle, t3.fontWeight, Ts(t3.fontSize), t3.fontFamily || "sans-serif"].join(" ")), e3 && vt(e3) || t3.textFont || t3.font;
  }, e2;
})(ra), ws = { left: !0, right: 1, center: 1 }, Ss = { top: 1, bottom: 1, middle: 1 }, Ms = ["fontStyle", "fontWeight", "fontSize", "fontFamily"];
function Ts(t2) {
  return typeof t2 != "string" || t2.indexOf("px") === -1 && t2.indexOf("rem") === -1 && t2.indexOf("em") === -1 ? isNaN(+t2) ? "12px" : t2 + "px" : t2;
}
function ks(t2, e2) {
  for (var n2 = 0; n2 < Ms.length; n2++) {
    var i2 = Ms[n2], r2 = e2[i2];
    r2 != null && (t2[i2] = r2);
  }
}
function Cs(t2) {
  if (t2) {
    t2.font = bs.makeFont(t2);
    var e2 = t2.align;
    e2 === "middle" && (e2 = "center"), t2.align = e2 == null || ws[e2] ? e2 : "left";
    var n2 = t2.verticalAlign;
    n2 === "center" && (n2 = "middle"), t2.verticalAlign = n2 == null || Ss[n2] ? n2 : "top", t2.padding && (t2.padding = ft(t2.padding));
  }
}
function Is(t2, e2) {
  return t2 == null || e2 <= 0 || t2 === "transparent" || t2 === "none" ? null : t2.image || t2.colorStops ? "#000" : t2;
}
function Ds(t2) {
  return t2 == null || t2 === "none" ? null : t2.image || t2.colorStops ? "#000" : t2;
}
function As(t2, e2, n2) {
  return e2 === "right" ? t2 - n2[1] : e2 === "center" ? t2 + n2[3] / 2 - n2[1] / 2 : t2 + n2[3];
}
function Ls(t2) {
  var e2 = t2.text;
  return e2 != null && (e2 += ""), e2;
}
function Ps(t2) {
  return !!(t2.backgroundColor || t2.lineHeight || t2.borderWidth && t2.borderColor);
}
var Os = uo(), Rs = 1, Ns = {}, zs = uo(), Bs = uo(), Es = ["emphasis", "blur", "select"], Fs = ["normal", "emphasis", "blur", "select"], Vs = "highlight", Hs = "downplay", Ws = "select", Gs = "unselect", Us = "toggleSelect", Xs = "selectchanged";
function Ys(t2) {
  return t2 != null && t2 !== "none";
}
function Zs(t2, e2, n2) {
  t2.onHoverStateChange && (t2.hoverState || 0) !== n2 && t2.onHoverStateChange(e2), t2.hoverState = n2;
}
function js(t2) {
  Zs(t2, "emphasis", 2);
}
function qs(t2) {
  t2.hoverState === 2 && Zs(t2, "normal", 0);
}
function Ks(t2) {
  Zs(t2, "blur", 1);
}
function $s(t2) {
  t2.hoverState === 1 && Zs(t2, "normal", 0);
}
function Qs(t2) {
  t2.selected = !0;
}
function Js(t2) {
  t2.selected = !1;
}
function tl(t2, e2, n2) {
  e2(t2, n2);
}
function el(t2, e2, n2) {
  tl(t2, e2, n2), t2.isGroup && t2.traverse(function(t3) {
    tl(t3, e2, n2);
  });
}
function nl(t2, e2) {
  switch (e2) {
    case "emphasis":
      t2.hoverState = 2;
      break;
    case "normal":
      t2.hoverState = 0;
      break;
    case "blur":
      t2.hoverState = 1;
      break;
    case "select":
      t2.selected = !0;
  }
}
function il(t2, e2) {
  var n2 = this.states[t2];
  if (this.style) {
    if (t2 === "emphasis") return (function(t3, e3, n3, i2) {
      var r2 = n3 && G(n3, "select") >= 0, o2 = !1;
      if (t3 instanceof os) {
        var a2 = zs(t3), s2 = r2 && a2.selectFill || a2.normalFill, l2 = r2 && a2.selectStroke || a2.normalStroke;
        if (Ys(s2) || Ys(l2)) {
          var u2 = (i2 = i2 || {}).style || {};
          u2.fill === "inherit" ? (o2 = !0, i2 = H({}, i2), (u2 = H({}, u2)).fill = s2) : !Ys(u2.fill) && Ys(s2) ? (o2 = !0, i2 = H({}, i2), (u2 = H({}, u2)).fill = ti(s2)) : !Ys(u2.stroke) && Ys(l2) && (o2 || (i2 = H({}, i2), u2 = H({}, u2)), u2.stroke = ti(l2)), i2.style = u2;
        }
      }
      if (i2 && i2.z2 == null) {
        o2 || (i2 = H({}, i2));
        var h2 = t3.z2EmphasisLift;
        i2.z2 = t3.z2 + (h2 ?? 10);
      }
      return i2;
    })(this, 0, e2, n2);
    if (t2 === "blur") return (function(t3, e3, n3) {
      var i2 = G(t3.currentStates, e3) >= 0, r2 = t3.style.opacity, o2 = i2 ? null : (function(t4, e4, n4, i3) {
        for (var r3 = t4.style, o3 = {}, a3 = 0; a3 < e4.length; a3++) {
          var s2 = e4[a3], l2 = r3[s2];
          o3[s2] = l2 ?? (i3 && i3[s2]);
        }
        for (a3 = 0; a3 < t4.animators.length; a3++) {
          var u2 = t4.animators[a3];
          u2.__fromStateTransition && u2.__fromStateTransition.indexOf(n4) < 0 && u2.targetName === "style" && u2.saveTo(o3, e4);
        }
        return o3;
      })(t3, ["opacity"], e3, { opacity: 1 }), a2 = (n3 = n3 || {}).style || {};
      return a2.opacity == null && (n3 = H({}, n3), a2 = H({ opacity: i2 ? r2 : 0.1 * o2.opacity }, a2), n3.style = a2), n3;
    })(this, t2, n2);
    if (t2 === "select") return (function(t3, e3, n3) {
      if (n3 && n3.z2 == null) {
        n3 = H({}, n3);
        var i2 = t3.z2SelectLift;
        n3.z2 = t3.z2 + (i2 ?? 9);
      }
      return n3;
    })(this, 0, n2);
  }
  return n2;
}
function rl(t2) {
  t2.stateProxy = il;
  var e2 = t2.getTextContent(), n2 = t2.getTextGuideLine();
  e2 && (e2.stateProxy = il), n2 && (n2.stateProxy = il);
}
function ol(t2, e2) {
  !dl(t2, e2) && !t2.__highByOuter && el(t2, js);
}
function al(t2, e2) {
  !dl(t2, e2) && !t2.__highByOuter && el(t2, qs);
}
function sl(t2, e2) {
  t2.__highByOuter |= 1 << (e2 || 0), el(t2, js);
}
function ll(t2, e2) {
  !(t2.__highByOuter &= ~(1 << (e2 || 0))) && el(t2, qs);
}
function ul(t2) {
  el(t2, Ks);
}
function hl(t2) {
  el(t2, $s);
}
function cl(t2) {
  el(t2, Qs);
}
function pl(t2) {
  el(t2, Js);
}
function dl(t2, e2) {
  return t2.__highDownSilentOnTouch && e2.zrByTouch;
}
function fl(t2) {
  var e2 = t2.getModel(), n2 = [], i2 = [];
  e2.eachComponent(function(e3, r2) {
    var o2 = Bs(r2), a2 = e3 === "series", s2 = a2 ? t2.getViewOfSeriesModel(r2) : t2.getViewOfComponentModel(r2);
    !a2 && i2.push(s2), o2.isBlured && (s2.group.traverse(function(t3) {
      $s(t3);
    }), a2 && n2.push(r2)), o2.isBlured = !1;
  }), Y(i2, function(t3) {
    t3 && t3.toggleBlurSeries && t3.toggleBlurSeries(n2, !1, e2);
  });
}
function gl(t2, e2, n2, i2) {
  var r2 = i2.getModel();
  function o2(t3, e3) {
    for (var n3 = 0; n3 < e3.length; n3++) {
      var i3 = t3.getItemGraphicEl(e3[n3]);
      i3 && hl(i3);
    }
  }
  if (n2 = n2 || "coordinateSystem", t2 != null && e2 && e2 !== "none") {
    var a2 = r2.getSeriesByIndex(t2), s2 = a2.coordinateSystem;
    s2 && s2.master && (s2 = s2.master);
    var l2 = [];
    r2.eachSeries(function(t3) {
      var r3 = a2 === t3, u2 = t3.coordinateSystem;
      if (u2 && u2.master && (u2 = u2.master), !(n2 === "series" && !r3 || n2 === "coordinateSystem" && !(u2 && s2 ? u2 === s2 : r3) || e2 === "series" && r3)) {
        if (i2.getViewOfSeriesModel(t3).group.traverse(function(t4) {
          t4.__highByOuter && r3 && e2 === "self" || Ks(t4);
        }), X(e2)) o2(t3.getData(), e2);
        else if (rt(e2)) for (var h2 = K(e2), c2 = 0; c2 < h2.length; c2++) o2(t3.getData(h2[c2]), e2[h2[c2]]);
        l2.push(t3), Bs(t3).isBlured = !0;
      }
    }), r2.eachComponent(function(t3, e3) {
      if (t3 !== "series") {
        var n3 = i2.getViewOfComponentModel(e3);
        n3 && n3.toggleBlurSeries && n3.toggleBlurSeries(l2, !0, r2);
      }
    });
  }
}
function vl(t2, e2, n2) {
  if (t2 != null && e2 != null) {
    var i2 = n2.getModel().getComponent(t2, e2);
    if (i2) {
      Bs(i2).isBlured = !0;
      var r2 = n2.getViewOfComponentModel(i2);
      r2 && r2.focusBlurEnabled && r2.group.traverse(function(t3) {
        Ks(t3);
      });
    }
  }
}
function yl(t2, e2, n2, i2) {
  var r2 = { focusSelf: !1, dispatchers: null };
  if (t2 == null || t2 === "series" || e2 == null || n2 == null) return r2;
  var o2 = i2.getModel().getComponent(t2, e2);
  if (!o2) return r2;
  var a2 = i2.getViewOfComponentModel(o2);
  if (!a2 || !a2.findHighDownDispatchers) return r2;
  for (var s2, l2 = a2.findHighDownDispatchers(n2), u2 = 0; u2 < l2.length; u2++) if (Os(l2[u2]).focus === "self") {
    s2 = !0;
    break;
  }
  return { focusSelf: s2, dispatchers: l2 };
}
function ml(t2) {
  Y(t2.getAllData(), function(e2) {
    var n2 = e2.data, i2 = e2.type;
    n2.eachItemGraphicEl(function(e3, n3) {
      t2.isSelected(n3, i2) ? cl(e3) : pl(e3);
    });
  });
}
function _l(t2) {
  var e2 = [];
  return t2.eachSeries(function(t3) {
    Y(t3.getAllData(), function(n2) {
      n2.data;
      var i2 = n2.type, r2 = t3.getSelectedDataIndices();
      if (r2.length > 0) {
        var o2 = { dataIndex: r2, seriesIndex: t3.seriesIndex };
        i2 != null && (o2.dataType = i2), e2.push(o2);
      }
    });
  }), e2;
}
function xl(t2, e2, n2) {
  Tl(t2, !0), el(t2, rl), (function(t3, e3, n3) {
    var i2 = Os(t3);
    e3 != null ? (i2.focus = e3, i2.blurScope = n3) : i2.focus && (i2.focus = null);
  })(t2, e2, n2);
}
function bl(t2, e2, n2, i2) {
  i2 ? (function(t3) {
    Tl(t3, !1);
  })(t2) : xl(t2, e2, n2);
}
var wl = ["emphasis", "blur", "select"], Sl = { itemStyle: "getItemStyle", lineStyle: "getLineStyle", areaStyle: "getAreaStyle" };
function Ml(t2, e2, n2, i2) {
  n2 = n2 || "itemStyle";
  for (var r2 = 0; r2 < wl.length; r2++) {
    var o2 = wl[r2], a2 = e2.getModel([o2, n2]);
    t2.ensureState(o2).style = a2[Sl[n2]]();
  }
}
function Tl(t2, e2) {
  var n2 = e2 === !1, i2 = t2;
  t2.highDownSilentOnTouch && (i2.__highDownSilentOnTouch = t2.highDownSilentOnTouch), n2 && !i2.__highDownDispatcher || (i2.__highByOuter = i2.__highByOuter || 0, i2.__highDownDispatcher = !n2);
}
function kl(t2) {
  return !(!t2 || !t2.__highDownDispatcher);
}
function Cl(t2) {
  var e2 = t2.type;
  return e2 === Ws || e2 === Gs || e2 === Us;
}
function Il(t2) {
  var e2 = t2.type;
  return e2 === Vs || e2 === Hs;
}
var Dl = Ea.CMD, Al = [[], [], []], Ll = Math.sqrt, Pl = Math.atan2, Ol = Math.sqrt, Rl = Math.sin, Nl = Math.cos, zl = Math.PI;
function Bl(t2) {
  return Math.sqrt(t2[0] * t2[0] + t2[1] * t2[1]);
}
function El(t2, e2) {
  return (t2[0] * e2[0] + t2[1] * e2[1]) / (Bl(t2) * Bl(e2));
}
function Fl(t2, e2) {
  return (t2[0] * e2[1] < t2[1] * e2[0] ? -1 : 1) * Math.acos(El(t2, e2));
}
function Vl(t2, e2, n2, i2, r2, o2, a2, s2, l2, u2, h2) {
  var c2 = l2 * (zl / 180), p2 = Nl(c2) * (t2 - n2) / 2 + Rl(c2) * (e2 - i2) / 2, d2 = -1 * Rl(c2) * (t2 - n2) / 2 + Nl(c2) * (e2 - i2) / 2, f2 = p2 * p2 / (a2 * a2) + d2 * d2 / (s2 * s2);
  f2 > 1 && (a2 *= Ol(f2), s2 *= Ol(f2));
  var g2 = (r2 === o2 ? -1 : 1) * Ol((a2 * a2 * (s2 * s2) - a2 * a2 * (d2 * d2) - s2 * s2 * (p2 * p2)) / (a2 * a2 * (d2 * d2) + s2 * s2 * (p2 * p2))) || 0, v2 = g2 * a2 * d2 / s2, y2 = g2 * -s2 * p2 / a2, m2 = (t2 + n2) / 2 + Nl(c2) * v2 - Rl(c2) * y2, _2 = (e2 + i2) / 2 + Rl(c2) * v2 + Nl(c2) * y2, x2 = Fl([1, 0], [(p2 - v2) / a2, (d2 - y2) / s2]), b2 = [(p2 - v2) / a2, (d2 - y2) / s2], w2 = [(-1 * p2 - v2) / a2, (-1 * d2 - y2) / s2], S2 = Fl(b2, w2);
  if (El(b2, w2) <= -1 && (S2 = zl), El(b2, w2) >= 1 && (S2 = 0), S2 < 0) {
    var M2 = Math.round(S2 / zl * 1e6) / 1e6;
    S2 = 2 * zl + M2 % 2 * zl;
  }
  h2.addData(u2, m2, _2, a2, s2, x2, S2, c2, o2);
}
var Hl = /([mlvhzcqtsa])([^mlvhzcqtsa]*)/gi, Wl = /-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g, Gl = (function(t2) {
  function e2() {
    return t2 !== null && t2.apply(this, arguments) || this;
  }
  return _(e2, t2), e2.prototype.applyTransform = function(t3) {
  }, e2;
})(os);
function Ul(t2) {
  return t2.setData != null;
}
function Xl(t2, e2) {
  var n2 = (function(t3) {
    var e3 = new Ea();
    if (!t3) return e3;
    var n3, i3 = 0, r2 = 0, o2 = i3, a2 = r2, s2 = Ea.CMD, l2 = t3.match(Hl);
    if (!l2) return e3;
    for (var u2 = 0; u2 < l2.length; u2++) {
      for (var h2 = l2[u2], c2 = h2.charAt(0), p2 = void 0, d2 = h2.match(Wl) || [], f2 = d2.length, g2 = 0; g2 < f2; g2++) d2[g2] = parseFloat(d2[g2]);
      for (var v2 = 0; v2 < f2; ) {
        var y2 = void 0, m2 = void 0, _2 = void 0, x2 = void 0, b2 = void 0, w2 = void 0, S2 = void 0, M2 = i3, T2 = r2, k2 = void 0, C2 = void 0;
        switch (c2) {
          case "l":
            i3 += d2[v2++], r2 += d2[v2++], p2 = s2.L, e3.addData(p2, i3, r2);
            break;
          case "L":
            i3 = d2[v2++], r2 = d2[v2++], p2 = s2.L, e3.addData(p2, i3, r2);
            break;
          case "m":
            i3 += d2[v2++], r2 += d2[v2++], p2 = s2.M, e3.addData(p2, i3, r2), o2 = i3, a2 = r2, c2 = "l";
            break;
          case "M":
            i3 = d2[v2++], r2 = d2[v2++], p2 = s2.M, e3.addData(p2, i3, r2), o2 = i3, a2 = r2, c2 = "L";
            break;
          case "h":
            i3 += d2[v2++], p2 = s2.L, e3.addData(p2, i3, r2);
            break;
          case "H":
            i3 = d2[v2++], p2 = s2.L, e3.addData(p2, i3, r2);
            break;
          case "v":
            r2 += d2[v2++], p2 = s2.L, e3.addData(p2, i3, r2);
            break;
          case "V":
            r2 = d2[v2++], p2 = s2.L, e3.addData(p2, i3, r2);
            break;
          case "C":
            p2 = s2.C, e3.addData(p2, d2[v2++], d2[v2++], d2[v2++], d2[v2++], d2[v2++], d2[v2++]), i3 = d2[v2 - 2], r2 = d2[v2 - 1];
            break;
          case "c":
            p2 = s2.C, e3.addData(p2, d2[v2++] + i3, d2[v2++] + r2, d2[v2++] + i3, d2[v2++] + r2, d2[v2++] + i3, d2[v2++] + r2), i3 += d2[v2 - 2], r2 += d2[v2 - 1];
            break;
          case "S":
            y2 = i3, m2 = r2, k2 = e3.len(), C2 = e3.data, n3 === s2.C && (y2 += i3 - C2[k2 - 4], m2 += r2 - C2[k2 - 3]), p2 = s2.C, M2 = d2[v2++], T2 = d2[v2++], i3 = d2[v2++], r2 = d2[v2++], e3.addData(p2, y2, m2, M2, T2, i3, r2);
            break;
          case "s":
            y2 = i3, m2 = r2, k2 = e3.len(), C2 = e3.data, n3 === s2.C && (y2 += i3 - C2[k2 - 4], m2 += r2 - C2[k2 - 3]), p2 = s2.C, M2 = i3 + d2[v2++], T2 = r2 + d2[v2++], i3 += d2[v2++], r2 += d2[v2++], e3.addData(p2, y2, m2, M2, T2, i3, r2);
            break;
          case "Q":
            M2 = d2[v2++], T2 = d2[v2++], i3 = d2[v2++], r2 = d2[v2++], p2 = s2.Q, e3.addData(p2, M2, T2, i3, r2);
            break;
          case "q":
            M2 = d2[v2++] + i3, T2 = d2[v2++] + r2, i3 += d2[v2++], r2 += d2[v2++], p2 = s2.Q, e3.addData(p2, M2, T2, i3, r2);
            break;
          case "T":
            y2 = i3, m2 = r2, k2 = e3.len(), C2 = e3.data, n3 === s2.Q && (y2 += i3 - C2[k2 - 4], m2 += r2 - C2[k2 - 3]), i3 = d2[v2++], r2 = d2[v2++], p2 = s2.Q, e3.addData(p2, y2, m2, i3, r2);
            break;
          case "t":
            y2 = i3, m2 = r2, k2 = e3.len(), C2 = e3.data, n3 === s2.Q && (y2 += i3 - C2[k2 - 4], m2 += r2 - C2[k2 - 3]), i3 += d2[v2++], r2 += d2[v2++], p2 = s2.Q, e3.addData(p2, y2, m2, i3, r2);
            break;
          case "A":
            _2 = d2[v2++], x2 = d2[v2++], b2 = d2[v2++], w2 = d2[v2++], S2 = d2[v2++], Vl(M2 = i3, T2 = r2, i3 = d2[v2++], r2 = d2[v2++], w2, S2, _2, x2, b2, p2 = s2.A, e3);
            break;
          case "a":
            _2 = d2[v2++], x2 = d2[v2++], b2 = d2[v2++], w2 = d2[v2++], S2 = d2[v2++], Vl(M2 = i3, T2 = r2, i3 += d2[v2++], r2 += d2[v2++], w2, S2, _2, x2, b2, p2 = s2.A, e3);
        }
      }
      c2 !== "z" && c2 !== "Z" || (p2 = s2.Z, e3.addData(p2), i3 = o2, r2 = a2), n3 = p2;
    }
    return e3.toStatic(), e3;
  })(t2), i2 = H({}, e2);
  return i2.buildPath = function(t3) {
    var e3, i3 = Ul(t3);
    i3 && t3.canSave() ? (t3.appendPath(n2), (e3 = t3.getContext()) && t3.rebuildPath(e3, 1)) : (e3 = i3 ? t3.getContext() : t3) && n2.rebuildPath(e3, 1);
  }, i2.applyTransform = function(t3) {
    (function(t4, e3) {
      if (e3) {
        var n3, i3, r2, o2, a2, s2, l2 = t4.data, u2 = t4.len(), h2 = Dl.M, c2 = Dl.C, p2 = Dl.L, d2 = Dl.R, f2 = Dl.A, g2 = Dl.Q;
        for (r2 = 0, o2 = 0; r2 < u2; ) {
          switch (n3 = l2[r2++], o2 = r2, i3 = 0, n3) {
            case h2:
            case p2:
              i3 = 1;
              break;
            case c2:
              i3 = 3;
              break;
            case g2:
              i3 = 2;
              break;
            case f2:
              var v2 = e3[4], y2 = e3[5], m2 = Ll(e3[0] * e3[0] + e3[1] * e3[1]), _2 = Ll(e3[2] * e3[2] + e3[3] * e3[3]), x2 = Pl(-e3[1] / _2, e3[0] / m2);
              l2[r2] *= m2, l2[r2++] += v2, l2[r2] *= _2, l2[r2++] += y2, l2[r2++] *= m2, l2[r2++] *= _2, l2[r2++] += x2, l2[r2++] += x2, o2 = r2 += 2;
              break;
            case d2:
              s2[0] = l2[r2++], s2[1] = l2[r2++], Et(s2, s2, e3), l2[o2++] = s2[0], l2[o2++] = s2[1], s2[0] += l2[r2++], s2[1] += l2[r2++], Et(s2, s2, e3), l2[o2++] = s2[0], l2[o2++] = s2[1];
          }
          for (a2 = 0; a2 < i3; a2++) {
            var b2 = Al[a2];
            b2[0] = l2[r2++], b2[1] = l2[r2++], Et(b2, b2, e3), l2[o2++] = b2[0], l2[o2++] = b2[1];
          }
        }
        t4.increaseVersion();
      }
    })(n2, t3), this.dirtyShape();
  }, i2;
}
var Yl = /* @__PURE__ */ (function() {
  return function() {
    this.cx = 0, this.cy = 0, this.r = 0;
  };
})(), Zl = (function(t2) {
  function e2(e3) {
    return t2.call(this, e3) || this;
  }
  return _(e2, t2), e2.prototype.getDefaultShape = function() {
    return new Yl();
  }, e2.prototype.buildPath = function(t3, e3) {
    t3.moveTo(e3.cx + e3.r, e3.cy), t3.arc(e3.cx, e3.cy, e3.r, 0, 2 * Math.PI);
  }, e2;
})(os);
Zl.prototype.type = "circle";
var jl = /* @__PURE__ */ (function() {
  return function() {
    this.cx = 0, this.cy = 0, this.rx = 0, this.ry = 0;
  };
})(), ql = (function(t2) {
  function e2(e3) {
    return t2.call(this, e3) || this;
  }
  return _(e2, t2), e2.prototype.getDefaultShape = function() {
    return new jl();
  }, e2.prototype.buildPath = function(t3, e3) {
    var n2 = 0.5522848, i2 = e3.cx, r2 = e3.cy, o2 = e3.rx, a2 = e3.ry, s2 = o2 * n2, l2 = a2 * n2;
    t3.moveTo(i2 - o2, r2), t3.bezierCurveTo(i2 - o2, r2 - l2, i2 - s2, r2 - a2, i2, r2 - a2), t3.bezierCurveTo(i2 + s2, r2 - a2, i2 + o2, r2 - l2, i2 + o2, r2), t3.bezierCurveTo(i2 + o2, r2 + l2, i2 + s2, r2 + a2, i2, r2 + a2), t3.bezierCurveTo(i2 - s2, r2 + a2, i2 - o2, r2 + l2, i2 - o2, r2), t3.closePath();
  }, e2;
})(os);
ql.prototype.type = "ellipse";
var Kl = Math.PI, $l = 2 * Kl, Ql = Math.sin, Jl = Math.cos, tu = Math.acos, eu = Math.atan2, nu = Math.abs, iu = Math.sqrt, ru = Math.max, ou = Math.min, au = 1e-4;
function su(t2, e2, n2, i2, r2, o2, a2) {
  var s2 = t2 - n2, l2 = e2 - i2, u2 = (a2 ? o2 : -o2) / iu(s2 * s2 + l2 * l2), h2 = u2 * l2, c2 = -u2 * s2, p2 = t2 + h2, d2 = e2 + c2, f2 = n2 + h2, g2 = i2 + c2, v2 = (p2 + f2) / 2, y2 = (d2 + g2) / 2, m2 = f2 - p2, _2 = g2 - d2, x2 = m2 * m2 + _2 * _2, b2 = r2 - o2, w2 = p2 * g2 - f2 * d2, S2 = (_2 < 0 ? -1 : 1) * iu(ru(0, b2 * b2 * x2 - w2 * w2)), M2 = (w2 * _2 - m2 * S2) / x2, T2 = (-w2 * m2 - _2 * S2) / x2, k2 = (w2 * _2 + m2 * S2) / x2, C2 = (-w2 * m2 + _2 * S2) / x2, I2 = M2 - v2, D2 = T2 - y2, A2 = k2 - v2, L2 = C2 - y2;
  return I2 * I2 + D2 * D2 > A2 * A2 + L2 * L2 && (M2 = k2, T2 = C2), { cx: M2, cy: T2, x0: -h2, y0: -c2, x1: M2 * (r2 / b2 - 1), y1: T2 * (r2 / b2 - 1) };
}
function lu(t2, e2) {
  var n2, i2 = ru(e2.r, 0), r2 = ru(e2.r0 || 0, 0), o2 = i2 > 0;
  if (o2 || r2 > 0) {
    if (o2 || (i2 = r2, r2 = 0), r2 > i2) {
      var a2 = i2;
      i2 = r2, r2 = a2;
    }
    var s2 = e2.startAngle, l2 = e2.endAngle;
    if (!isNaN(s2) && !isNaN(l2)) {
      var u2 = e2.cx, h2 = e2.cy, c2 = !!e2.clockwise, p2 = nu(l2 - s2), d2 = p2 > $l && p2 % $l;
      if (d2 > au && (p2 = d2), i2 > au) if (p2 > $l - au) t2.moveTo(u2 + i2 * Jl(s2), h2 + i2 * Ql(s2)), t2.arc(u2, h2, i2, s2, l2, !c2), r2 > au && (t2.moveTo(u2 + r2 * Jl(l2), h2 + r2 * Ql(l2)), t2.arc(u2, h2, r2, l2, s2, c2));
      else {
        var f2 = void 0, g2 = void 0, v2 = void 0, y2 = void 0, m2 = void 0, _2 = void 0, x2 = void 0, b2 = void 0, w2 = void 0, S2 = void 0, M2 = void 0, T2 = void 0, k2 = void 0, C2 = void 0, I2 = void 0, D2 = void 0, A2 = i2 * Jl(s2), L2 = i2 * Ql(s2), P2 = r2 * Jl(l2), O2 = r2 * Ql(l2), R2 = p2 > au;
        if (R2) {
          var N2 = e2.cornerRadius;
          N2 && (f2 = (n2 = (function(t3) {
            var e3;
            if (J(t3)) {
              var n3 = t3.length;
              if (!n3) return t3;
              e3 = n3 === 1 ? [t3[0], t3[0], 0, 0] : n3 === 2 ? [t3[0], t3[0], t3[1], t3[1]] : n3 === 3 ? t3.concat(t3[2]) : t3;
            } else e3 = [t3, t3, t3, t3];
            return e3;
          })(N2))[0], g2 = n2[1], v2 = n2[2], y2 = n2[3]);
          var z2 = nu(i2 - r2) / 2;
          if (m2 = ou(z2, v2), _2 = ou(z2, y2), x2 = ou(z2, f2), b2 = ou(z2, g2), M2 = w2 = ru(m2, _2), T2 = S2 = ru(x2, b2), (w2 > au || S2 > au) && (k2 = i2 * Jl(l2), C2 = i2 * Ql(l2), I2 = r2 * Jl(s2), D2 = r2 * Ql(s2), p2 < Kl)) {
            var B2 = (function(t3, e3, n3, i3, r3, o3, a3, s3) {
              var l3 = n3 - t3, u3 = i3 - e3, h3 = a3 - r3, c3 = s3 - o3, p3 = c3 * l3 - h3 * u3;
              if (!(p3 * p3 < au)) return [t3 + (p3 = (h3 * (e3 - o3) - c3 * (t3 - r3)) / p3) * l3, e3 + p3 * u3];
            })(A2, L2, I2, D2, k2, C2, P2, O2);
            if (B2) {
              var E2 = A2 - B2[0], F2 = L2 - B2[1], V2 = k2 - B2[0], H2 = C2 - B2[1], W2 = 1 / Ql(tu((E2 * V2 + F2 * H2) / (iu(E2 * E2 + F2 * F2) * iu(V2 * V2 + H2 * H2))) / 2), G2 = iu(B2[0] * B2[0] + B2[1] * B2[1]);
              M2 = ou(w2, (i2 - G2) / (W2 + 1)), T2 = ou(S2, (r2 - G2) / (W2 - 1));
            }
          }
        }
        if (R2) if (M2 > au) {
          var U2 = ou(v2, M2), X2 = ou(y2, M2), Y2 = su(I2, D2, A2, L2, i2, U2, c2), Z2 = su(k2, C2, P2, O2, i2, X2, c2);
          t2.moveTo(u2 + Y2.cx + Y2.x0, h2 + Y2.cy + Y2.y0), M2 < w2 && U2 === X2 ? t2.arc(u2 + Y2.cx, h2 + Y2.cy, M2, eu(Y2.y0, Y2.x0), eu(Z2.y0, Z2.x0), !c2) : (U2 > 0 && t2.arc(u2 + Y2.cx, h2 + Y2.cy, U2, eu(Y2.y0, Y2.x0), eu(Y2.y1, Y2.x1), !c2), t2.arc(u2, h2, i2, eu(Y2.cy + Y2.y1, Y2.cx + Y2.x1), eu(Z2.cy + Z2.y1, Z2.cx + Z2.x1), !c2), X2 > 0 && t2.arc(u2 + Z2.cx, h2 + Z2.cy, X2, eu(Z2.y1, Z2.x1), eu(Z2.y0, Z2.x0), !c2));
        } else t2.moveTo(u2 + A2, h2 + L2), t2.arc(u2, h2, i2, s2, l2, !c2);
        else t2.moveTo(u2 + A2, h2 + L2);
        r2 > au && R2 ? T2 > au ? (U2 = ou(f2, T2), Y2 = su(P2, O2, k2, C2, r2, -(X2 = ou(g2, T2)), c2), Z2 = su(A2, L2, I2, D2, r2, -U2, c2), t2.lineTo(u2 + Y2.cx + Y2.x0, h2 + Y2.cy + Y2.y0), T2 < S2 && U2 === X2 ? t2.arc(u2 + Y2.cx, h2 + Y2.cy, T2, eu(Y2.y0, Y2.x0), eu(Z2.y0, Z2.x0), !c2) : (X2 > 0 && t2.arc(u2 + Y2.cx, h2 + Y2.cy, X2, eu(Y2.y0, Y2.x0), eu(Y2.y1, Y2.x1), !c2), t2.arc(u2, h2, r2, eu(Y2.cy + Y2.y1, Y2.cx + Y2.x1), eu(Z2.cy + Z2.y1, Z2.cx + Z2.x1), c2), U2 > 0 && t2.arc(u2 + Z2.cx, h2 + Z2.cy, U2, eu(Z2.y1, Z2.x1), eu(Z2.y0, Z2.x0), !c2))) : (t2.lineTo(u2 + P2, h2 + O2), t2.arc(u2, h2, r2, l2, s2, c2)) : t2.lineTo(u2 + P2, h2 + O2);
      }
      else t2.moveTo(u2, h2);
      t2.closePath();
    }
  }
}
var uu = /* @__PURE__ */ (function() {
  return function() {
    this.cx = 0, this.cy = 0, this.r0 = 0, this.r = 0, this.startAngle = 0, this.endAngle = 2 * Math.PI, this.clockwise = !0, this.cornerRadius = 0;
  };
})(), hu = (function(t2) {
  function e2(e3) {
    return t2.call(this, e3) || this;
  }
  return _(e2, t2), e2.prototype.getDefaultShape = function() {
    return new uu();
  }, e2.prototype.buildPath = function(t3, e3) {
    lu(t3, e3);
  }, e2.prototype.isZeroArea = function() {
    return this.shape.startAngle === this.shape.endAngle || this.shape.r === this.shape.r0;
  }, e2;
})(os);
hu.prototype.type = "sector";
var cu = /* @__PURE__ */ (function() {
  return function() {
    this.cx = 0, this.cy = 0, this.r = 0, this.r0 = 0;
  };
})(), pu = (function(t2) {
  function e2(e3) {
    return t2.call(this, e3) || this;
  }
  return _(e2, t2), e2.prototype.getDefaultShape = function() {
    return new cu();
  }, e2.prototype.buildPath = function(t3, e3) {
    var n2 = e3.cx, i2 = e3.cy, r2 = 2 * Math.PI;
    t3.moveTo(n2 + e3.r, i2), t3.arc(n2, i2, e3.r, 0, r2, !1), t3.moveTo(n2 + e3.r0, i2), t3.arc(n2, i2, e3.r0, 0, r2, !0);
  }, e2;
})(os);
function du(t2, e2, n2) {
  var i2 = e2.smooth, r2 = e2.points;
  if (r2 && r2.length >= 2) {
    if (i2) {
      var o2 = (function(t3, e3, n3, i3) {
        var r3, o3, a3, s3, l3 = [], u3 = [], h3 = [], c3 = [];
        if (i3) {
          a3 = [1 / 0, 1 / 0], s3 = [-1 / 0, -1 / 0];
          for (var p2 = 0, d2 = t3.length; p2 < d2; p2++) Ft(a3, a3, t3[p2]), Vt2(s3, s3, t3[p2]);
          Ft(a3, a3, i3[0]), Vt2(s3, s3, i3[1]);
        }
        for (p2 = 0, d2 = t3.length; p2 < d2; p2++) {
          var f2 = t3[p2];
          if (n3) r3 = t3[p2 ? p2 - 1 : d2 - 1], o3 = t3[(p2 + 1) % d2];
          else {
            if (p2 === 0 || p2 === d2 - 1) {
              l3.push(At(t3[p2]));
              continue;
            }
            r3 = t3[p2 - 1], o3 = t3[p2 + 1];
          }
          Pt(u3, o3, r3), Ot(u3, u3, e3);
          var g2 = Nt(f2, r3), v2 = Nt(f2, o3), y2 = g2 + v2;
          y2 !== 0 && (g2 /= y2, v2 /= y2), Ot(h3, u3, -g2), Ot(c3, u3, v2);
          var m2 = Lt([], f2, h3), _2 = Lt([], f2, c3);
          i3 && (Vt2(m2, m2, a3), Ft(m2, m2, s3), Vt2(_2, _2, a3), Ft(_2, _2, s3)), l3.push(m2), l3.push(_2);
        }
        return n3 && l3.push(l3.shift()), l3;
      })(r2, i2, n2, e2.smoothConstraint);
      t2.moveTo(r2[0][0], r2[0][1]);
      for (var a2 = r2.length, s2 = 0; s2 < (n2 ? a2 : a2 - 1); s2++) {
        var l2 = o2[2 * s2], u2 = o2[2 * s2 + 1], h2 = r2[(s2 + 1) % a2];
        t2.bezierCurveTo(l2[0], l2[1], u2[0], u2[1], h2[0], h2[1]);
      }
    } else {
      t2.moveTo(r2[0][0], r2[0][1]), s2 = 1;
      for (var c2 = r2.length; s2 < c2; s2++) t2.lineTo(r2[s2][0], r2[s2][1]);
    }
    n2 && t2.closePath();
  }
}
pu.prototype.type = "ring";
var fu = /* @__PURE__ */ (function() {
  return function() {
    this.points = null, this.smooth = 0, this.smoothConstraint = null;
  };
})(), gu = (function(t2) {
  function e2(e3) {
    return t2.call(this, e3) || this;
  }
  return _(e2, t2), e2.prototype.getDefaultShape = function() {
    return new fu();
  }, e2.prototype.buildPath = function(t3, e3) {
    du(t3, e3, !0);
  }, e2;
})(os);
gu.prototype.type = "polygon";
var vu = /* @__PURE__ */ (function() {
  return function() {
    this.points = null, this.percent = 1, this.smooth = 0, this.smoothConstraint = null;
  };
})(), yu = (function(t2) {
  function e2(e3) {
    return t2.call(this, e3) || this;
  }
  return _(e2, t2), e2.prototype.getDefaultStyle = function() {
    return { stroke: "#000", fill: null };
  }, e2.prototype.getDefaultShape = function() {
    return new vu();
  }, e2.prototype.buildPath = function(t3, e3) {
    du(t3, e3, !1);
  }, e2;
})(os);
yu.prototype.type = "polyline";
var mu = {}, _u = /* @__PURE__ */ (function() {
  return function() {
    this.x1 = 0, this.y1 = 0, this.x2 = 0, this.y2 = 0, this.percent = 1;
  };
})(), xu = (function(t2) {
  function e2(e3) {
    return t2.call(this, e3) || this;
  }
  return _(e2, t2), e2.prototype.getDefaultStyle = function() {
    return { stroke: "#000", fill: null };
  }, e2.prototype.getDefaultShape = function() {
    return new _u();
  }, e2.prototype.buildPath = function(t3, e3) {
    var n2, i2, r2, o2;
    if (this.subPixelOptimize) {
      var a2 = ps(mu, e3, this.style);
      n2 = a2.x1, i2 = a2.y1, r2 = a2.x2, o2 = a2.y2;
    } else n2 = e3.x1, i2 = e3.y1, r2 = e3.x2, o2 = e3.y2;
    var s2 = e3.percent;
    s2 !== 0 && (t3.moveTo(n2, i2), s2 < 1 && (r2 = n2 * (1 - s2) + r2 * s2, o2 = i2 * (1 - s2) + o2 * s2), t3.lineTo(r2, o2));
  }, e2.prototype.pointAt = function(t3) {
    var e3 = this.shape;
    return [e3.x1 * (1 - t3) + e3.x2 * t3, e3.y1 * (1 - t3) + e3.y2 * t3];
  }, e2;
})(os);
xu.prototype.type = "line";
var bu = [], wu = /* @__PURE__ */ (function() {
  return function() {
    this.x1 = 0, this.y1 = 0, this.x2 = 0, this.y2 = 0, this.cpx1 = 0, this.cpy1 = 0, this.percent = 1;
  };
})();
function Su(t2, e2, n2) {
  var i2 = t2.cpx2, r2 = t2.cpy2;
  return i2 != null || r2 != null ? [(n2 ? _n : mn)(t2.x1, t2.cpx1, t2.cpx2, t2.x2, e2), (n2 ? _n : mn)(t2.y1, t2.cpy1, t2.cpy2, t2.y2, e2)] : [(n2 ? Tn : Mn)(t2.x1, t2.cpx1, t2.x2, e2), (n2 ? Tn : Mn)(t2.y1, t2.cpy1, t2.y2, e2)];
}
var Mu = (function(t2) {
  function e2(e3) {
    return t2.call(this, e3) || this;
  }
  return _(e2, t2), e2.prototype.getDefaultStyle = function() {
    return { stroke: "#000", fill: null };
  }, e2.prototype.getDefaultShape = function() {
    return new wu();
  }, e2.prototype.buildPath = function(t3, e3) {
    var n2 = e3.x1, i2 = e3.y1, r2 = e3.x2, o2 = e3.y2, a2 = e3.cpx1, s2 = e3.cpy1, l2 = e3.cpx2, u2 = e3.cpy2, h2 = e3.percent;
    h2 !== 0 && (t3.moveTo(n2, i2), l2 == null || u2 == null ? (h2 < 1 && (Cn(n2, a2, r2, h2, bu), a2 = bu[1], r2 = bu[2], Cn(i2, s2, o2, h2, bu), s2 = bu[1], o2 = bu[2]), t3.quadraticCurveTo(a2, s2, r2, o2)) : (h2 < 1 && (wn(n2, a2, l2, r2, h2, bu), a2 = bu[1], l2 = bu[2], r2 = bu[3], wn(i2, s2, u2, o2, h2, bu), s2 = bu[1], u2 = bu[2], o2 = bu[3]), t3.bezierCurveTo(a2, s2, l2, u2, r2, o2)));
  }, e2.prototype.pointAt = function(t3) {
    return Su(this.shape, t3, !1);
  }, e2.prototype.tangentAt = function(t3) {
    var e3 = Su(this.shape, t3, !0);
    return Rt(e3, e3);
  }, e2;
})(os);
Mu.prototype.type = "bezier-curve";
var Tu = /* @__PURE__ */ (function() {
  return function() {
    this.cx = 0, this.cy = 0, this.r = 0, this.startAngle = 0, this.endAngle = 2 * Math.PI, this.clockwise = !0;
  };
})(), ku = (function(t2) {
  function e2(e3) {
    return t2.call(this, e3) || this;
  }
  return _(e2, t2), e2.prototype.getDefaultStyle = function() {
    return { stroke: "#000", fill: null };
  }, e2.prototype.getDefaultShape = function() {
    return new Tu();
  }, e2.prototype.buildPath = function(t3, e3) {
    var n2 = e3.cx, i2 = e3.cy, r2 = Math.max(e3.r, 0), o2 = e3.startAngle, a2 = e3.endAngle, s2 = e3.clockwise, l2 = Math.cos(o2), u2 = Math.sin(o2);
    t3.moveTo(l2 * r2 + n2, u2 * r2 + i2), t3.arc(n2, i2, r2, o2, a2, !s2);
  }, e2;
})(os);
ku.prototype.type = "arc";
var Cu = (function(t2) {
  function e2() {
    var e3 = t2 !== null && t2.apply(this, arguments) || this;
    return e3.type = "compound", e3;
  }
  return _(e2, t2), e2.prototype._updatePathDirty = function() {
    for (var t3 = this.shape.paths, e3 = this.shapeChanged(), n2 = 0; n2 < t3.length; n2++) e3 = e3 || t3[n2].shapeChanged();
    e3 && this.dirtyShape();
  }, e2.prototype.beforeBrush = function() {
    this._updatePathDirty();
    for (var t3 = this.shape.paths || [], e3 = this.getGlobalScale(), n2 = 0; n2 < t3.length; n2++) t3[n2].path || t3[n2].createPathProxy(), t3[n2].path.setScale(e3[0], e3[1], t3[n2].segmentIgnoreThreshold);
  }, e2.prototype.buildPath = function(t3, e3) {
    for (var n2 = e3.paths || [], i2 = 0; i2 < n2.length; i2++) n2[i2].buildPath(t3, n2[i2].shape, !0);
  }, e2.prototype.afterBrush = function() {
    for (var t3 = this.shape.paths || [], e3 = 0; e3 < t3.length; e3++) t3[e3].pathUpdated();
  }, e2.prototype.getBoundingRect = function() {
    return this._updatePathDirty.call(this), os.prototype.getBoundingRect.call(this);
  }, e2;
})(os), Iu = (function() {
  function t2(t3) {
    this.colorStops = t3 || [];
  }
  return t2.prototype.addColorStop = function(t3, e2) {
    this.colorStops.push({ offset: t3, color: e2 });
  }, t2;
})(), Du = (function(t2) {
  function e2(e3, n2, i2, r2, o2, a2) {
    var s2 = t2.call(this, o2) || this;
    return s2.x = e3 ?? 0, s2.y = n2 ?? 0, s2.x2 = i2 ?? 1, s2.y2 = r2 ?? 0, s2.type = "linear", s2.global = a2 || !1, s2;
  }
  return _(e2, t2), e2;
})(Iu), Au = (function(t2) {
  function e2(e3, n2, i2, r2, o2) {
    var a2 = t2.call(this, r2) || this;
    return a2.x = e3 ?? 0.5, a2.y = n2 ?? 0.5, a2.r = i2 ?? 0.5, a2.type = "radial", a2.global = o2 || !1, a2;
  }
  return _(e2, t2), e2;
})(Iu), Lu = Math.min, Pu = Math.max, Ou = Math.abs, Ru = [0, 0], Nu = [0, 0], zu = Be(), Bu = zu.minTv, Eu = zu.maxTv, Fu = (function() {
  function t2(t3, e2) {
    this._corners = [], this._axes = [], this._origin = [0, 0];
    for (var n2 = 0; n2 < 4; n2++) this._corners[n2] = new _e();
    for (n2 = 0; n2 < 2; n2++) this._axes[n2] = new _e();
    t3 && this.fromBoundingRect(t3, e2);
  }
  return t2.prototype.fromBoundingRect = function(t3, e2) {
    var n2 = this._corners, i2 = this._axes, r2 = t3.x, o2 = t3.y, a2 = r2 + t3.width, s2 = o2 + t3.height;
    if (n2[0].set(r2, o2), n2[1].set(a2, o2), n2[2].set(a2, s2), n2[3].set(r2, s2), e2) for (var l2 = 0; l2 < 4; l2++) n2[l2].transform(e2);
    for (_e.sub(i2[0], n2[1], n2[0]), _e.sub(i2[1], n2[3], n2[0]), i2[0].normalize(), i2[1].normalize(), l2 = 0; l2 < 2; l2++) this._origin[l2] = i2[l2].dot(n2[0]);
  }, t2.prototype.intersect = function(t3, e2, n2) {
    var i2 = !0, r2 = !e2;
    return e2 && _e.set(e2, 0, 0), zu.reset(n2, !r2), !this._intersectCheckOneSide(this, t3, r2, 1) && (i2 = !1, r2) || !this._intersectCheckOneSide(t3, this, r2, -1) && (i2 = !1, r2) || r2 || zu.negativeSize || _e.copy(e2, i2 ? zu.useDir ? zu.dirMinTv : Bu : Eu), i2;
  }, t2.prototype._intersectCheckOneSide = function(t3, e2, n2, i2) {
    for (var r2 = !0, o2 = 0; o2 < 2; o2++) {
      var a2 = t3._axes[o2];
      if (t3._getProjMinMaxOnAxis(o2, t3._corners, Ru), t3._getProjMinMaxOnAxis(o2, e2._corners, Nu), zu.negativeSize || Ru[1] < Nu[0] || Ru[0] > Nu[1]) {
        if (r2 = !1, zu.negativeSize || n2) return r2;
        var s2 = Ou(Nu[0] - Ru[1]), l2 = Ou(Ru[0] - Nu[1]);
        Lu(s2, l2) > Eu.len() && (s2 < l2 ? _e.scale(Eu, a2, -s2 * i2) : _e.scale(Eu, a2, l2 * i2));
      } else n2 || (s2 = Ou(Nu[0] - Ru[1]), l2 = Ou(Ru[0] - Nu[1]), (zu.useDir || Lu(s2, l2) < Bu.len()) && ((s2 < l2 || !zu.bidirectional) && (_e.scale(Bu, a2, s2 * i2), zu.useDir && zu.calcDirMTV()), (s2 >= l2 || !zu.bidirectional) && (_e.scale(Bu, a2, -l2 * i2), zu.useDir && zu.calcDirMTV())));
    }
    return r2;
  }, t2.prototype._getProjMinMaxOnAxis = function(t3, e2, n2) {
    for (var i2 = this._axes[t3], r2 = this._origin, o2 = e2[0].dot(i2) + r2[t3], a2 = o2, s2 = o2, l2 = 1; l2 < e2.length; l2++) {
      var u2 = e2[l2].dot(i2) + r2[t3];
      a2 = Lu(u2, a2), s2 = Pu(u2, s2);
    }
    n2[0] = a2 + zu.touchThreshold, n2[1] = s2 - zu.touchThreshold, zu.negativeSize = n2[1] < n2[0];
  }, t2;
})(), Vu = [], Hu = (function(t2) {
  function e2() {
    var e3 = t2 !== null && t2.apply(this, arguments) || this;
    return e3.notClear = !0, e3.incremental = !0, e3._displayables = [], e3._temporaryDisplayables = [], e3._cursor = 0, e3;
  }
  return _(e2, t2), e2.prototype.traverse = function(t3, e3) {
    t3.call(e3, this);
  }, e2.prototype.useStyle = function() {
    this.style = {};
  }, e2.prototype.getCursor = function() {
    return this._cursor;
  }, e2.prototype.innerAfterBrush = function() {
    this._cursor = this._displayables.length;
  }, e2.prototype.clearDisplaybles = function() {
    this._displayables = [], this._temporaryDisplayables = [], this._cursor = 0, this.markRedraw(), this.notClear = !1;
  }, e2.prototype.clearTemporalDisplayables = function() {
    this._temporaryDisplayables = [];
  }, e2.prototype.addDisplayable = function(t3, e3) {
    e3 ? this._temporaryDisplayables.push(t3) : this._displayables.push(t3), this.markRedraw();
  }, e2.prototype.addDisplayables = function(t3, e3) {
    e3 = e3 || !1;
    for (var n2 = 0; n2 < t3.length; n2++) this.addDisplayable(t3[n2], e3);
  }, e2.prototype.getDisplayables = function() {
    return this._displayables;
  }, e2.prototype.getTemporalDisplayables = function() {
    return this._temporaryDisplayables;
  }, e2.prototype.eachPendingDisplayable = function(t3) {
    for (var e3 = this._cursor; e3 < this._displayables.length; e3++) t3 && t3(this._displayables[e3]);
    for (e3 = 0; e3 < this._temporaryDisplayables.length; e3++) t3 && t3(this._temporaryDisplayables[e3]);
  }, e2.prototype.update = function() {
    this.updateTransform();
    for (var t3 = this._cursor; t3 < this._displayables.length; t3++)
      (e3 = this._displayables[t3]).parent = this, e3.update(), e3.parent = null;
    for (t3 = 0; t3 < this._temporaryDisplayables.length; t3++) {
      var e3;
      (e3 = this._temporaryDisplayables[t3]).parent = this, e3.update(), e3.parent = null;
    }
  }, e2.prototype.getBoundingRect = function() {
    if (!this._rect) {
      for (var t3 = new Oe(1 / 0, 1 / 0, -1 / 0, -1 / 0), e3 = 0; e3 < this._displayables.length; e3++) {
        var n2 = this._displayables[e3], i2 = n2.getBoundingRect().clone();
        n2.needLocalTransform() && i2.applyTransform(n2.getLocalTransform(Vu)), t3.union(i2);
      }
      this._rect = t3;
    }
    return this._rect;
  }, e2.prototype.contain = function(t3, e3) {
    var n2 = this.transformCoordToLocal(t3, e3);
    if (this.getBoundingRect().contain(n2[0], n2[1])) {
      for (var i2 = 0; i2 < this._displayables.length; i2++)
        if (this._displayables[i2].contain(t3, e3)) return !0;
    }
    return !1;
  }, e2;
})(ra), Wu = uo();
function Gu(t2, e2, n2, i2, r2, o2, a2) {
  var s2, l2 = !1;
  tt(r2) ? (a2 = o2, o2 = r2, r2 = null) : rt(r2) && (o2 = r2.cb, a2 = r2.during, l2 = r2.isFrom, s2 = r2.removeOpt, r2 = r2.dataIndex);
  var u2 = t2 === "leave";
  u2 || e2.stopAnimation("leave");
  var h2 = (function(t3, e3, n3, i3, r3) {
    var o3;
    if (e3 && e3.ecModel) {
      var a3 = e3.ecModel.getUpdatePayload();
      o3 = a3 && a3.animation;
    }
    var s3 = t3 === "update";
    if (e3 && e3.isAnimationEnabled()) {
      var l3 = void 0, u3 = void 0, h3 = void 0;
      return i3 ? (l3 = ct(i3.duration, 200), u3 = ct(i3.easing, "cubicOut"), h3 = 0) : (l3 = e3.getShallow(s3 ? "animationDurationUpdate" : "animationDuration"), u3 = e3.getShallow(s3 ? "animationEasingUpdate" : "animationEasing"), h3 = e3.getShallow(s3 ? "animationDelayUpdate" : "animationDelay")), o3 && (o3.duration != null && (l3 = o3.duration), o3.easing != null && (u3 = o3.easing), o3.delay != null && (h3 = o3.delay)), tt(h3) && (h3 = h3(n3, r3)), tt(l3) && (l3 = l3(n3)), { duration: l3 || 0, delay: h3, easing: u3 };
    }
    return null;
  })(t2, i2, r2, u2 ? s2 || {} : null, i2 && i2.getAnimationDelayParams ? i2.getAnimationDelayParams(e2, r2) : null);
  if (h2 && h2.duration > 0) {
    var c2 = { duration: h2.duration, delay: h2.delay || 0, easing: h2.easing, done: o2, force: !!o2 || !!a2, setToFinal: !u2, scope: t2, during: a2 };
    l2 ? e2.animateFrom(n2, c2) : e2.animateTo(n2, c2);
  } else e2.stopAnimation(), !l2 && e2.attr(n2), a2 && a2(1), o2 && o2();
}
function Uu(t2, e2, n2, i2, r2, o2) {
  Gu("update", t2, e2, n2, i2, r2, o2);
}
function Xu(t2, e2, n2, i2, r2, o2) {
  Gu("enter", t2, e2, n2, i2, r2, o2);
}
function Yu(t2) {
  if (!t2.__zr) return !0;
  for (var e2 = 0; e2 < t2.animators.length; e2++)
    if (t2.animators[e2].scope === "leave") return !0;
  return !1;
}
function Zu(t2, e2, n2, i2, r2, o2) {
  Yu(t2) || Gu("leave", t2, e2, n2, i2, r2, o2);
}
function ju(t2, e2, n2, i2) {
  t2.removeTextContent(), t2.removeTextGuideLine(), Zu(t2, { style: { opacity: 0 } }, e2, n2, i2);
}
function qu(t2, e2, n2) {
  function i2() {
    t2.parent && t2.parent.remove(t2);
  }
  t2.isGroup ? t2.traverse(function(t3) {
    t3.isGroup || ju(t3, e2, n2, i2);
  }) : ju(t2, e2, n2, i2);
}
function Ku(t2) {
  Wu(t2).oldStyle = t2.style;
}
var $u = {}, Qu = ["x", "y"], Ju = ["width", "height"], th = function(t2, e2) {
  var n2 = Xl(t2, e2);
  return (function(t3) {
    function e3(e4) {
      var i2 = t3.call(this, e4) || this;
      return i2.applyTransform = n2.applyTransform, i2.buildPath = n2.buildPath, i2;
    }
    return _(e3, t3), e3;
  })(Gl);
};
function eh(t2, e2) {
  $u[t2] = e2;
}
function nh(t2, e2, n2, i2) {
  var r2 = (function(t3, e3) {
    return new Gl(Xl(t3, e3));
  })(t2, e2);
  return n2 && (i2 === "center" && (n2 = rh(n2, r2.getBoundingRect())), ah(r2, n2)), r2;
}
function ih(t2, e2, n2) {
  var i2 = new hs2({ style: { image: t2, x: e2.x, y: e2.y, width: e2.width, height: e2.height }, onload: function(t3) {
    if (n2 === "center") {
      var r2 = { width: t3.width, height: t3.height };
      i2.setStyle(rh(e2, r2));
    }
  } });
  return i2;
}
function rh(t2, e2) {
  var n2, i2 = e2.width / e2.height, r2 = t2.height * i2;
  return n2 = r2 <= t2.width ? t2.height : (r2 = t2.width) / i2, { x: t2.x + t2.width / 2 - r2 / 2, y: t2.y + t2.height / 2 - n2 / 2, width: r2, height: n2 };
}
var oh = function(t2, e2) {
  for (var n2 = [], i2 = t2.length, r2 = 0; r2 < i2; r2++) {
    var o2 = t2[r2];
    n2.push(o2.getUpdatedPathProxy(!0));
  }
  var a2 = new os(e2);
  return a2.createPathProxy(), a2.buildPath = function(t3) {
    if (Ul(t3)) {
      t3.appendPath(n2);
      var e3 = t3.getContext();
      e3 && t3.rebuildPath(e3, 1);
    }
  }, a2;
};
function ah(t2, e2) {
  if (t2.applyTransform) {
    var n2 = t2.getBoundingRect().calculateTransform(e2);
    t2.applyTransform(n2);
  }
}
function sh(t2, e2) {
  return ps(t2, t2, { lineWidth: e2 }), t2;
}
var lh = fs2;
function uh(t2, e2) {
  for (var n2 = de([]); t2 && t2 !== e2; ) ge(n2, t2.getLocalTransform(), n2), t2 = t2.parent;
  return n2;
}
function hh(t2, e2, n2) {
  return e2 && !X(e2) && (e2 = ji.getLocalTransform(e2)), n2 && (e2 = me([], e2)), Et([], t2, e2);
}
function ch(t2, e2, n2) {
  var i2 = e2[4] === 0 || e2[5] === 0 || e2[0] === 0 ? 1 : Ir(2 * e2[4] / e2[0]), r2 = e2[4] === 0 || e2[5] === 0 || e2[2] === 0 ? 1 : Ir(2 * e2[4] / e2[2]), o2 = [t2 === "left" ? -i2 : t2 === "right" ? i2 : 0, t2 === "top" ? -r2 : t2 === "bottom" ? r2 : 0];
  return o2 = hh(o2, e2, n2), Ir(o2[0]) > Ir(o2[1]) ? o2[0] > 0 ? "right" : "left" : o2[1] > 0 ? "bottom" : "top";
}
function ph(t2) {
  return !t2.isGroup;
}
function dh(t2, e2, n2) {
  if (t2 && e2) {
    var i2, r2 = (i2 = {}, t2.traverse(function(t3) {
      ph(t3) && t3.anid && (i2[t3.anid] = t3);
    }), i2);
    e2.traverse(function(t3) {
      if (ph(t3) && t3.anid) {
        var e3 = r2[t3.anid];
        if (e3) {
          var i3 = o2(t3);
          t3.attr(o2(e3)), Uu(t3, i3, n2, Os(t3).dataIndex);
        }
      }
    });
  }
  function o2(t3) {
    var e3 = { x: t3.x, y: t3.y, rotation: t3.rotation };
    return (function(t4) {
      return t4.shape != null;
    })(t3) && (e3.shape = F(t3.shape)), e3;
  }
}
function fh(t2, e2, n2) {
  var i2 = H({ rectHover: !0 }, e2), r2 = i2.style = { strokeNoScale: !0 };
  if (n2 = n2 || { x: -1, y: -1, width: 2, height: 2 }, t2) return t2.indexOf("image://") === 0 ? (r2.image = t2.slice(8), W(r2, n2), new hs2(i2)) : nh(t2.replace("path://", ""), i2, n2, "center");
}
function gh(t2, e2, n2, i2, r2, o2, a2, s2) {
  var l2, u2 = n2 - t2, h2 = i2 - e2, c2 = a2 - r2, p2 = s2 - o2, d2 = vh(c2, p2, u2, h2);
  if ((l2 = d2) <= 1e-6 && l2 >= -1e-6) return !1;
  var f2 = t2 - r2, g2 = e2 - o2, v2 = vh(f2, g2, u2, h2) / d2;
  if (v2 < 0 || v2 > 1) return !1;
  var y2 = vh(f2, g2, c2, p2) / d2;
  return !(y2 < 0 || y2 > 1);
}
function vh(t2, e2, n2, i2) {
  return t2 * i2 - n2 * e2;
}
function yh(t2, e2, n2, i2, r2) {
  return e2 == null || (it(e2) ? mh[0] = mh[1] = mh[2] = mh[3] = e2 : (mh[0] = e2[0], mh[1] = e2[1], mh[2] = e2[2], mh[3] = e2[3]), i2 && (mh[0] = Cr(0, mh[0]), mh[1] = Cr(0, mh[1]), mh[2] = Cr(0, mh[2]), mh[3] = Cr(0, mh[3])), n2 && (mh[0] = -mh[0], mh[1] = -mh[1], mh[2] = -mh[2], mh[3] = -mh[3]), _h(t2, mh, "x", "width", 3, 1, r2 && r2[0] || 0), _h(t2, mh, "y", "height", 0, 2, r2 && r2[1] || 0)), t2;
}
var mh = [0, 0, 0, 0];
function _h(t2, e2, n2, i2, r2, o2, a2) {
  var s2 = e2[o2] + e2[r2], l2 = t2[i2];
  t2[i2] += s2, a2 = Cr(0, kr(a2, l2)), t2[i2] < a2 ? (t2[i2] = a2, t2[n2] += e2[r2] >= 0 ? -e2[r2] : e2[o2] >= 0 ? l2 + e2[o2] : Ir(s2) > 1e-8 ? (l2 - a2) * e2[r2] / s2 : 0) : t2[n2] -= e2[r2];
}
function xh(t2) {
  var e2 = t2.itemTooltipOption, n2 = t2.componentModel, i2 = t2.itemName, r2 = et(e2) ? { formatter: e2 } : e2, o2 = n2.mainType, a2 = n2.componentIndex, s2 = { componentType: o2, name: i2, $vars: ["name"] };
  s2[o2 + "Index"] = a2;
  var l2 = t2.formatterParamsExtra;
  l2 && Y(K(l2), function(t3) {
    kt(s2, t3) || (s2[t3] = l2[t3], s2.$vars.push(t3));
  });
  var u2 = Os(t2.el);
  u2.componentMainType = o2, u2.componentIndex = a2, u2.tooltipConfig = { name: i2, option: W({ content: i2, encodeHTMLContent: !0, formatterParams: s2 }, r2) };
}
function bh(t2, e2) {
  var n2;
  t2.isGroup && (n2 = e2(t2)), n2 || t2.traverse(e2);
}
function wh(t2, e2) {
  if (t2) if (J(t2)) for (var n2 = 0; n2 < t2.length; n2++) bh(t2[n2], e2);
  else bh(t2, e2);
}
function Sh(t2) {
  return !t2 || Ir(t2[1]) < Mh && Ir(t2[2]) < Mh || Ir(t2[0]) < Mh && Ir(t2[3]) < Mh;
}
var Mh = 1e-5;
function Th(t2, e2) {
  return t2 ? Oe.copy(t2, e2) : e2.clone();
}
function kh(t2, e2) {
  return e2 ? fe(t2 || [1, 0, 0, 1, 0, 0], e2) : void 0;
}
function Ch(t2) {
  return { z: t2.get("z") || 0, zlevel: t2.get("zlevel") || 0 };
}
function Ih(t2, e2, n2) {
  Dh(t2, e2, n2, -1 / 0);
}
function Dh(t2, e2, n2, i2) {
  if (t2.ignoreModelZ) return i2;
  var r2 = t2.getTextContent(), o2 = t2.getTextGuideLine();
  if (t2.isGroup) for (var a2 = t2.childrenRef(), s2 = 0; s2 < a2.length; s2++) i2 = Cr(Dh(a2[s2], e2, n2, i2), i2);
  else t2.z = e2, t2.zlevel = n2, i2 = Cr(t2.z2 || 0, i2);
  if (r2 && (r2.z = e2, r2.zlevel = n2, isFinite(i2) && (r2.z2 = i2 + 2)), o2) {
    var l2 = t2.textGuideLineConfig;
    o2.z = e2, o2.zlevel = n2, isFinite(i2) && (o2.z2 = i2 + (l2 && l2.showAbove ? 1 : -1));
  }
  return i2;
}
eh("circle", Zl), eh("ellipse", ql), eh("sector", hu), eh("ring", pu), eh("polygon", gu), eh("polyline", yu), eh("rect", ys), eh("line", xu), eh("bezierCurve", Mu), eh("arc", ku);
var Ah = /* @__PURE__ */ Object.freeze(Object.defineProperty({ __proto__: null, Arc: ku, BezierCurve: Mu, BoundingRect: Oe, Circle: Zl, CompoundPath: Cu, Ellipse: ql, Group: xr, Image: hs2, IncrementalDisplayable: Hu, Line: xu, LinearGradient: Du, OrientedBoundingRect: Fu, Path: os, Point: _e, Polygon: gu, Polyline: yu, RadialGradient: Au, Rect: ys, Ring: pu, Sector: hu, Text: bs, WH: Ju, XY: Qu, applyTransform: hh, calcZ2Range: function(t2) {
  var e2 = -1 / 0, n2 = 1 / 0;
  function i2(t3) {
    if (t3 && !t3.isGroup) {
      var e3 = t3.currentStates;
      if (e3.length) for (var n3 = 0; n3 < e3.length; n3++) r2(t3.states[e3[n3]]);
      r2(t3);
    }
  }
  function r2(t3) {
    if (t3) {
      var i3 = t3.z2;
      i3 > e2 && (e2 = i3), i3 < n2 && (n2 = i3);
    }
  }
  return bh(t2, function(t3) {
    i2(t3), i2(t3.getTextContent()), i2(t3.getTextGuideLine());
  }), n2 > e2 && (n2 = e2 = 0), { min: n2, max: e2 };
}, clipPointsByRect: function(t2, e2) {
  return Z(t2, function(t3) {
    var n2 = t3[0];
    n2 = Cr(n2, e2.x), n2 = kr(n2, e2.x + e2.width);
    var i2 = t3[1];
    return i2 = Cr(i2, e2.y), [n2, i2 = kr(i2, e2.y + e2.height)];
  });
}, clipRectByRect: function(t2, e2) {
  var n2 = Cr(t2.x, e2.x), i2 = kr(t2.x + t2.width, e2.x + e2.width), r2 = Cr(t2.y, e2.y), o2 = kr(t2.y + t2.height, e2.y + e2.height);
  if (i2 >= n2 && o2 >= r2) return { x: n2, y: r2, width: i2 - n2, height: o2 - r2 };
}, createIcon: fh, ensureCopyRect: Th, ensureCopyTransform: kh, expandOrShrinkRect: yh, extendPath: function(t2, e2) {
  return th(t2, e2);
}, extendShape: function(t2) {
  return os.extend(t2);
}, getShapeClass: function(t2) {
  if ($u.hasOwnProperty(t2)) return $u[t2];
}, getTransform: uh, groupTransition: dh, initProps: Xu, isBoundingRectAxisAligned: Sh, isElementRemoved: Yu, lineLineIntersect: gh, linePolygonIntersect: function(t2, e2, n2, i2, r2) {
  for (var o2 = 0, a2 = r2[r2.length - 1]; o2 < r2.length; o2++) {
    var s2 = r2[o2];
    if (gh(t2, e2, n2, i2, s2[0], s2[1], a2[0], a2[1])) return !0;
    a2 = s2;
  }
}, makeImage: ih, makePath: nh, mergePath: oh, registerShape: eh, removeElement: Zu, removeElementWithFadeOut: qu, resizePath: ah, retrieveZInfo: Ch, setTooltipConfig: xh, subPixelOptimize: lh, subPixelOptimizeLine: sh, subPixelOptimizeRect: function(t2, e2) {
  return ds2(t2, t2, e2), t2;
}, transformDirection: ch, traverseElements: wh, traverseUpdateZ: Ih, updateProps: Uu }, Symbol.toStringTag, { value: "Module" })), Lh = {};
function Ph(t2, e2, n2) {
  var i2, r2 = t2.labelFetcher, o2 = t2.labelDataIndex, a2 = t2.labelDimIndex, s2 = e2.normal;
  r2 && (i2 = r2.getFormattedLabel(o2, "normal", null, a2, s2 && s2.get("formatter"), n2 != null ? { interpolatedValue: n2 } : null)), i2 == null && (i2 = tt(t2.defaultText) ? t2.defaultText(o2, t2, n2) : t2.defaultText);
  for (var l2 = { normal: i2 }, u2 = 0; u2 < Es.length; u2++) {
    var h2 = Es[u2], c2 = e2[h2];
    l2[h2] = ct(r2 ? r2.getFormattedLabel(o2, h2, null, a2, c2 && c2.get("formatter")) : null, i2);
  }
  return l2;
}
function Oh(t2, e2, n2, i2) {
  n2 = n2 || Lh;
  for (var r2 = t2 instanceof bs, o2 = !1, a2 = 0; a2 < Fs.length; a2++)
    if ((p2 = e2[Fs[a2]]) && p2.getShallow("show")) {
      o2 = !0;
      break;
    }
  var s2 = r2 ? t2 : t2.getTextContent();
  if (o2) {
    r2 || (s2 || (s2 = new bs(), t2.setTextContent(s2)), t2.stateProxy && (s2.stateProxy = t2.stateProxy));
    var l2 = Ph(n2, e2), u2 = e2.normal, h2 = !!u2.getShallow("show"), c2 = Nh(u2, i2 && i2.normal, n2, !1, !r2);
    for (c2.text = l2.normal, r2 || t2.setTextConfig(zh(u2, n2, !1)), a2 = 0; a2 < Es.length; a2++) {
      var p2, d2 = Es[a2];
      if (p2 = e2[d2]) {
        var f2 = s2.ensureState(d2), g2 = !!ct(p2.getShallow("show"), h2);
        g2 !== h2 && (f2.ignore = !g2), f2.style = Nh(p2, i2 && i2[d2], n2, !0, !r2), f2.style.text = l2[d2], !r2 && (t2.ensureState(d2).textConfig = zh(p2, n2, !0));
      }
    }
    s2.silent = !!u2.getShallow("silent"), s2.style.x != null && (c2.x = s2.style.x), s2.style.y != null && (c2.y = s2.style.y), s2.ignore = !h2, s2.useStyle(c2), s2.dirty(), n2.enableTextSetter && (Hh(s2).setLabelText = function(t3) {
      var i3 = Ph(n2, e2, t3);
      (function(t4, e3) {
        for (var n3 = 0; n3 < Es.length; n3++) {
          var i4 = Es[n3], r3 = e3[i4], o3 = t4.ensureState(i4);
          o3.style = o3.style || {}, o3.style.text = r3;
        }
        var a3 = t4.currentStates.slice();
        t4.clearStates(!0), t4.setStyle({ text: e3.normal }), t4.useStates(a3, !0);
      })(s2, i3);
    });
  } else s2 && (s2.ignore = !0);
  t2.dirty();
}
function Rh(t2, e2) {
  e2 = e2 || "label";
  for (var n2 = { normal: t2.getModel(e2) }, i2 = 0; i2 < Es.length; i2++) {
    var r2 = Es[i2];
    n2[r2] = t2.getModel([r2, e2]);
  }
  return n2;
}
function Nh(t2, e2, n2, i2, r2) {
  var o2 = {};
  return (function(t3, e3, n3, i3, r3) {
    n3 = n3 || Lh;
    var o3, a2 = e3.ecModel, s2 = a2 && a2.option.textStyle, l2 = (function(t4) {
      for (var e4; t4 && t4 !== t4.ecModel; ) {
        var n4 = (t4.option || Lh).rich;
        if (n4) {
          e4 = e4 || {};
          for (var i4 = K(n4), r4 = 0; r4 < i4.length; r4++)
            e4[i4[r4]] = 1;
        }
        t4 = t4.parentModel;
      }
      return e4;
    })(e3);
    if (l2) {
      o3 = {};
      var u2 = "richInheritPlainLabel", h2 = ct(e3.get(u2), a2 ? a2.get(u2) : void 0);
      for (var c2 in l2) if (l2.hasOwnProperty(c2)) {
        var p2 = e3.getModel(["rich", c2]);
        Vh(o3[c2] = {}, p2, s2, e3, h2, n3, i3, r3, !1, !0);
      }
    }
    o3 && (t3.rich = o3);
    var d2 = e3.get("overflow");
    d2 && (t3.overflow = d2);
    var f2 = e3.get("lineOverflow");
    f2 && (t3.lineOverflow = f2);
    var g2 = t3, v2 = e3.get("minMargin");
    if (v2 != null) v2 = it(v2) ? v2 / 2 : 0, g2.margin = [v2, v2, v2, v2], g2.__marginType = Uh.minMargin;
    else {
      var y2 = e3.get("textMargin");
      y2 != null && (g2.margin = ft(y2), g2.__marginType = Uh.textMargin);
    }
    Vh(t3, e3, s2, null, null, n3, i3, r3, !0, !1);
  })(o2, t2, n2, i2, r2), e2 && H(o2, e2), o2;
}
function zh(t2, e2, n2) {
  e2 = e2 || {};
  var i2, r2 = {}, o2 = t2.getShallow("rotate"), a2 = ct(t2.getShallow("distance"), n2 ? null : 5), s2 = t2.getShallow("offset");
  return (i2 = t2.getShallow("position") || (n2 ? null : "inside")) === "outside" && (i2 = e2.defaultOutsidePosition || "top"), i2 != null && (r2.position = i2), s2 != null && (r2.offset = s2), o2 != null && (o2 *= Math.PI / 180, r2.rotation = o2), a2 != null && (r2.distance = a2), r2.outsideFill = t2.get("color") === "inherit" ? e2.inheritColor || null : "auto", e2.autoOverflowArea != null && (r2.autoOverflowArea = e2.autoOverflowArea), e2.layoutRect != null && (r2.layoutRect = e2.layoutRect), r2;
}
var Bh = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY"], Eh = ["align", "lineHeight", "width", "height", "tag", "verticalAlign", "ellipsis"], Fh = ["padding", "borderWidth", "borderRadius", "borderDashOffset", "backgroundColor", "borderColor", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"];
function Vh(t2, e2, n2, i2, r2, o2, a2, s2, l2, u2) {
  n2 = !a2 && n2 || Lh;
  var h2 = o2 && o2.inheritColor, c2 = e2.getShallow("color"), p2 = e2.getShallow("textBorderColor"), d2 = ct(e2.getShallow("opacity"), n2.opacity);
  c2 !== "inherit" && c2 !== "auto" || (c2 = h2 || null), p2 !== "inherit" && p2 !== "auto" || (p2 = h2 || null), s2 || (c2 = c2 || n2.color, p2 = p2 || n2.textBorderColor), c2 != null && (t2.fill = c2), p2 != null && (t2.stroke = p2);
  var f2 = ct(e2.getShallow("textBorderWidth"), n2.textBorderWidth);
  f2 != null && (t2.lineWidth = f2);
  var g2 = ct(e2.getShallow("textBorderType"), n2.textBorderType);
  g2 != null && (t2.lineDash = g2);
  var v2 = ct(e2.getShallow("textBorderDashOffset"), n2.textBorderDashOffset);
  v2 != null && (t2.lineDashOffset = v2), a2 || d2 != null || u2 || (d2 = o2 && o2.defaultOpacity), d2 != null && (t2.opacity = d2), a2 || s2 || t2.fill == null && o2.inheritColor && (t2.fill = o2.inheritColor);
  for (var y2 = 0; y2 < Bh.length; y2++) {
    var m2 = Bh[y2];
    (x2 = r2 !== !1 && i2 ? pt(e2.getShallow(m2), i2.getShallow(m2), n2[m2]) : ct(e2.getShallow(m2), n2[m2])) != null && (t2[m2] = x2);
  }
  for (y2 = 0; y2 < Eh.length; y2++)
    m2 = Eh[y2], (x2 = e2.getShallow(m2)) != null && (t2[m2] = x2);
  if (t2.verticalAlign == null) {
    var _2 = e2.getShallow("baseline");
    _2 != null && (t2.verticalAlign = _2);
  }
  if (!l2 || !o2.disableBox) {
    for (y2 = 0; y2 < Fh.length; y2++) {
      var x2;
      m2 = Fh[y2], (x2 = e2.getShallow(m2)) != null && (t2[m2] = x2);
    }
    var b2 = e2.getShallow("borderType");
    b2 != null && (t2.borderDash = b2), t2.backgroundColor !== "auto" && t2.backgroundColor !== "inherit" || !h2 || (t2.backgroundColor = h2), t2.borderColor !== "auto" && t2.borderColor !== "inherit" || !h2 || (t2.borderColor = h2);
  }
}
var Hh = uo(), Wh, Gh, Uh = { minMargin: 1, textMargin: 2 }, Xh = ["textStyle", "color"], Yh = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "padding", "lineHeight", "rich", "width", "height", "overflow"], Zh = new bs(), jh = (function() {
  function t2() {
  }
  return t2.prototype.getTextColor = function(t3) {
    var e2 = this.ecModel;
    return this.getShallow("color") || (!t3 && e2 ? e2.get(Xh) : null);
  }, t2.prototype.getFont = function() {
    return t3 = { fontStyle: this.getShallow("fontStyle"), fontWeight: this.getShallow("fontWeight"), fontSize: this.getShallow("fontSize"), fontFamily: this.getShallow("fontFamily") }, e2 = this.ecModel, n2 = e2 && e2.getModel("textStyle"), vt([t3.fontStyle || n2 && n2.getShallow("fontStyle") || "", t3.fontWeight || n2 && n2.getShallow("fontWeight") || "", (t3.fontSize || n2 && n2.getShallow("fontSize") || 12) + "px", t3.fontFamily || n2 && n2.getShallow("fontFamily") || "sans-serif"].join(" "));
    var t3, e2, n2;
  }, t2.prototype.getTextRect = function(t3) {
    for (var e2 = { text: t3, verticalAlign: this.getShallow("verticalAlign") || this.getShallow("baseline") }, n2 = 0; n2 < Yh.length; n2++) e2[Yh[n2]] = this.getShallow(Yh[n2]);
    return Zh.useStyle(e2), Zh.update(), Zh.getBoundingRect();
  }, t2;
})(), qh = [["lineWidth", "width"], ["stroke", "color"], ["opacity"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"], ["lineDash", "type"], ["lineDashOffset", "dashOffset"], ["lineCap", "cap"], ["lineJoin", "join"], ["miterLimit"]], Kh = Co(qh), $h = (function() {
  function t2() {
  }
  return t2.prototype.getLineStyle = function(t3) {
    return Kh(this, t3);
  }, t2;
})(), Qh = [["fill", "color"], ["stroke", "borderColor"], ["lineWidth", "borderWidth"], ["opacity"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"], ["lineDash", "borderType"], ["lineDashOffset", "borderDashOffset"], ["lineCap", "borderCap"], ["lineJoin", "borderJoin"], ["miterLimit", "borderMiterLimit"]], Jh = Co(Qh), tc = (function() {
  function t2() {
  }
  return t2.prototype.getItemStyle = function(t3, e2) {
    return Jh(this, t3, e2);
  }, t2;
})(), ec = (function() {
  function t2(t3, e2, n2) {
    this.parentModel = e2, this.ecModel = n2, this.option = t3;
  }
  return t2.prototype.init = function(t3, e2, n2) {
  }, t2.prototype.mergeOption = function(t3, e2) {
    V(this.option, t3, !0);
  }, t2.prototype.get = function(t3, e2) {
    return t3 == null ? this.option : this._doGet(this.parsePath(t3), !e2 && this.parentModel);
  }, t2.prototype.getShallow = function(t3, e2) {
    var n2 = this.option, i2 = n2 == null ? n2 : n2[t3];
    if (i2 == null && !e2) {
      var r2 = this.parentModel;
      r2 && (i2 = r2.getShallow(t3));
    }
    return i2;
  }, t2.prototype.getModel = function(e2, n2) {
    var i2 = e2 != null, r2 = i2 ? this.parsePath(e2) : null;
    return new t2(i2 ? this._doGet(r2) : this.option, n2 = n2 || this.parentModel && this.parentModel.getModel(this.resolveParentPath(r2)), this.ecModel);
  }, t2.prototype.isEmpty = function() {
    return this.option == null;
  }, t2.prototype.restoreData = function() {
  }, t2.prototype.clone = function() {
    return new this.constructor(F(this.option));
  }, t2.prototype.parsePath = function(t3) {
    return typeof t3 == "string" ? t3.split(".") : t3;
  }, t2.prototype.resolveParentPath = function(t3) {
    return t3;
  }, t2.prototype.isAnimationEnabled = function() {
    if (!b.node && this.option) {
      if (this.option.animation != null) return !!this.option.animation;
      if (this.parentModel) return this.parentModel.isAnimationEnabled();
    }
  }, t2.prototype._doGet = function(t3, e2) {
    var n2 = this.option;
    if (!t3) return n2;
    for (var i2 = 0; i2 < t3.length && (!t3[i2] || (n2 = n2 && typeof n2 == "object" ? n2[t3[i2]] : null) != null); i2++) ;
    return n2 == null && e2 && (n2 = e2._doGet(this.resolveParentPath(t3), e2.parentModel)), n2;
  }, t2;
})();
bo(ec), Wh = ec, Gh = ["__\0is_clz", So++].join("_"), Wh.prototype[Gh] = !0, Wh.isInstance = function(t2) {
  return !(!t2 || !t2[Gh]);
}, U(ec, $h), U(ec, tc), U(ec, Do2), U(ec, jh);
var nc = Math.round(10 * Math.random());
function ic(t2) {
  return [t2 || "", nc++].join("_");
}
function rc(t2, e2) {
  return V(V({}, t2, !0), e2, !0);
}
var oc = "ZH", ac = "EN", sc = ac, lc = {}, uc = {}, hc = b.domSupported && (document.documentElement.lang || navigator.language || navigator.browserLanguage || sc).toUpperCase().indexOf(oc) > -1 ? oc : sc;
function cc(t2, e2) {
  t2 = t2.toUpperCase(), uc[t2] = new ec(e2), lc[t2] = e2;
}
cc(ac, { time: { month: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthAbbr: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], dayOfWeekAbbr: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] }, legend: { selector: { all: "All", inverse: "Inv" } }, toolbox: { brush: { title: { rect: "Box Select", polygon: "Lasso Select", lineX: "Horizontally Select", lineY: "Vertically Select", keep: "Keep Selections", clear: "Clear Selections" } }, dataView: { title: "Data View", lang: ["Data View", "Close", "Refresh"] }, dataZoom: { title: { zoom: "Zoom", back: "Zoom Reset" } }, magicType: { title: { line: "Switch to Line Chart", bar: "Switch to Bar Chart", stack: "Stack", tiled: "Tile" } }, restore: { title: "Restore" }, saveAsImage: { title: "Save as Image", lang: ["Right Click to Save Image"] } }, series: { typeNames: { pie: "Pie chart", bar: "Bar chart", line: "Line chart", scatter: "Scatter plot", effectScatter: "Ripple scatter plot", radar: "Radar chart", tree: "Tree", treemap: "Treemap", boxplot: "Boxplot", candlestick: "Candlestick", k: "K line chart", heatmap: "Heat map", map: "Map", parallel: "Parallel coordinate map", lines: "Line graph", graph: "Relationship graph", sankey: "Sankey diagram", funnel: "Funnel chart", gauge: "Gauge", pictorialBar: "Pictorial bar", themeRiver: "Theme River Map", sunburst: "Sunburst", custom: "Custom chart", chart: "Chart" } }, aria: { general: { withTitle: 'This is a chart about "{title}"', withoutTitle: "This is a chart" }, series: { single: { prefix: "", withName: " with type {seriesType} named {seriesName}.", withoutName: " with type {seriesType}." }, multiple: { prefix: ". It consists of {seriesCount} series count.", withName: " The {seriesId} series is a {seriesType} representing {seriesName}.", withoutName: " The {seriesId} series is a {seriesType}.", separator: { middle: "", end: "" } } }, data: { allData: "The data is as follows: ", partialData: "The first {displayCnt} items are: ", withName: "the data for {name} is {value}", withoutName: "{value}", separator: { middle: ", ", end: ". " } } } }), cc(oc, { time: { month: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"], monthAbbr: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"], dayOfWeek: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"], dayOfWeekAbbr: ["日", "一", "二", "三", "四", "五", "六"] }, legend: { selector: { all: "全选", inverse: "反选" } }, toolbox: { brush: { title: { rect: "矩形选择", polygon: "圈选", lineX: "横向选择", lineY: "纵向选择", keep: "保持选择", clear: "清除选择" } }, dataView: { title: "数据视图", lang: ["数据视图", "关闭", "刷新"] }, dataZoom: { title: { zoom: "区域缩放", back: "区域缩放还原" } }, magicType: { title: { line: "切换为折线图", bar: "切换为柱状图", stack: "切换为堆叠", tiled: "切换为平铺" } }, restore: { title: "还原" }, saveAsImage: { title: "保存为图片", lang: ["右键另存为图片"] } }, series: { typeNames: { pie: "饼图", bar: "柱状图", line: "折线图", scatter: "散点图", effectScatter: "涟漪散点图", radar: "雷达图", tree: "树图", treemap: "矩形树图", boxplot: "箱型图", candlestick: "K线图", k: "K线图", heatmap: "热力图", map: "地图", parallel: "平行坐标图", lines: "线图", graph: "关系图", sankey: "桑基图", funnel: "漏斗图", gauge: "仪表盘图", pictorialBar: "象形柱图", themeRiver: "主题河流图", sunburst: "旭日图", custom: "自定义图表", chart: "图表" } }, aria: { general: { withTitle: "这是一个关于“{title}”的图表。", withoutTitle: "这是一个图表，" }, series: { single: { prefix: "", withName: "图表类型是{seriesType}，表示{seriesName}。", withoutName: "图表类型是{seriesType}。" }, multiple: { prefix: "它由{seriesCount}个图表系列组成。", withName: "第{seriesId}个系列是一个表示{seriesName}的{seriesType}，", withoutName: "第{seriesId}个系列是一个{seriesType}，", separator: { middle: "；", end: "。" } } }, data: { allData: "其数据是——", partialData: "其中，前{displayCnt}项是——", withName: "{name}的数据是{value}", withoutName: "{value}", separator: { middle: "，", end: "" } } } });
function pc() {
  return null;
}
var dc = 1e3, fc = 6e4, gc = 36e5, vc = 864e5, yc = 31536e6, mc = { year: /({yyyy}|{yy})/, month: /({MMMM}|{MMM}|{MM}|{M})/, day: /({dd}|{d})/, hour: /({HH}|{H}|{hh}|{h})/, minute: /({mm}|{m})/, second: /({ss}|{s})/, millisecond: /({SSS}|{S})/ }, _c = { year: "{yyyy}", month: "{MMM}", day: "{d}", hour: "{HH}:{mm}", minute: "{HH}:{mm}", second: "{HH}:{mm}:{ss}", millisecond: "{HH}:{mm}:{ss} {SSS}" }, xc = "{yyyy}-{MM}-{dd}", bc = { year: "{yyyy}", month: "{yyyy}-{MM}", day: xc, hour: xc + " " + _c.hour, minute: xc + " " + _c.minute, second: xc + " " + _c.second, millisecond: "{yyyy}-{MM}-{dd} {HH}:{mm}:{ss} {SSS}" }, wc = ["year", "month", "day", "hour", "minute", "second", "millisecond"], Sc = ["year", "half-year", "quarter", "month", "week", "half-week", "day", "half-day", "quarter-day", "hour", "minute", "second", "millisecond"];
function Mc(t2) {
  return et(t2) || tt(t2) ? t2 : (function(t3) {
    t3 = t3 || {};
    var e2 = {}, n2 = !0;
    return Y(wc, function(e3) {
      n2 && (n2 = t3[e3] == null);
    }), Y(wc, function(i2, r2) {
      var o2 = t3[i2];
      e2[i2] = {};
      for (var a2 = null, s2 = r2; s2 >= 0; s2--) {
        var l2 = wc[s2], u2 = rt(o2) && !J(o2) ? o2[l2] : o2, h2 = void 0;
        J(u2) ? a2 = (h2 = u2.slice())[0] || "" : et(u2) ? h2 = [a2 = u2] : (a2 == null ? a2 = _c[i2] : mc[l2].test(a2) || (a2 = e2[l2][l2][0] + " " + a2), h2 = [a2], n2 && (h2[1] = "{primary|" + a2 + "}")), e2[i2][l2] = h2;
      }
    }), e2;
  })(t2);
}
function Tc(t2, e2) {
  return "0000".substr(0, e2 - (t2 += "").length) + t2;
}
function kc(t2) {
  switch (t2) {
    case "half-year":
    case "quarter":
      return "month";
    case "week":
    case "half-week":
      return "day";
    case "half-day":
    case "quarter-day":
      return "hour";
    default:
      return t2;
  }
}
function Cc(t2) {
  return t2 === kc(t2);
}
function Ic(t2, e2, n2, i2) {
  var r2 = Vr(t2), o2 = r2[Lc(n2)](), a2 = r2[Pc(n2)]() + 1, s2 = Math.floor((a2 - 1) / 3) + 1, l2 = r2[Oc(n2)](), u2 = r2["get" + (n2 ? "UTC" : "") + "Day"](), h2 = r2[Rc(n2)](), c2 = (h2 - 1) % 12 + 1, p2 = r2[Nc(n2)](), d2 = r2[zc(n2)](), f2 = r2[Bc(n2)](), g2 = h2 >= 12 ? "pm" : "am", v2 = g2.toUpperCase(), y2 = i2 instanceof ec ? i2 : (function(t3) {
    return uc[t3];
  })(i2 || hc) || uc[sc], m2 = y2.getModel("time"), _2 = m2.get("month"), x2 = m2.get("monthAbbr"), b2 = m2.get("dayOfWeek"), w2 = m2.get("dayOfWeekAbbr");
  return (e2 || "").replace(/{a}/g, g2 + "").replace(/{A}/g, v2 + "").replace(/{yyyy}/g, o2 + "").replace(/{yy}/g, Tc(o2 % 100 + "", 2)).replace(/{Q}/g, s2 + "").replace(/{MMMM}/g, _2[a2 - 1]).replace(/{MMM}/g, x2[a2 - 1]).replace(/{MM}/g, Tc(a2, 2)).replace(/{M}/g, a2 + "").replace(/{dd}/g, Tc(l2, 2)).replace(/{d}/g, l2 + "").replace(/{eeee}/g, b2[u2]).replace(/{ee}/g, w2[u2]).replace(/{e}/g, u2 + "").replace(/{HH}/g, Tc(h2, 2)).replace(/{H}/g, h2 + "").replace(/{hh}/g, Tc(c2 + "", 2)).replace(/{h}/g, c2 + "").replace(/{mm}/g, Tc(p2, 2)).replace(/{m}/g, p2 + "").replace(/{ss}/g, Tc(d2, 2)).replace(/{s}/g, d2 + "").replace(/{SSS}/g, Tc(f2, 3)).replace(/{S}/g, f2 + "");
}
function Dc(t2, e2) {
  var n2 = Vr(t2), i2 = n2[Pc(e2)]() + 1, r2 = n2[Oc(e2)](), o2 = n2[Rc(e2)](), a2 = n2[Nc(e2)](), s2 = n2[zc(e2)](), l2 = n2[Bc(e2)]() === 0, u2 = l2 && s2 === 0, h2 = u2 && a2 === 0, c2 = h2 && o2 === 0, p2 = c2 && r2 === 1;
  return p2 && i2 === 1 ? "year" : p2 ? "month" : c2 ? "day" : h2 ? "hour" : u2 ? "minute" : l2 ? "second" : "millisecond";
}
function Ac(t2, e2, n2) {
  switch (e2) {
    case "year":
      t2[Fc(n2)](0);
    case "month":
      t2[Vc(n2)](1);
    case "day":
      t2[Hc(n2)](0);
    case "hour":
      t2[Wc(n2)](0);
    case "minute":
      t2[Gc(n2)](0);
    case "second":
      t2[Uc(n2)](0);
  }
  return t2;
}
function Lc(t2) {
  return t2 ? "getUTCFullYear" : "getFullYear";
}
function Pc(t2) {
  return t2 ? "getUTCMonth" : "getMonth";
}
function Oc(t2) {
  return t2 ? "getUTCDate" : "getDate";
}
function Rc(t2) {
  return t2 ? "getUTCHours" : "getHours";
}
function Nc(t2) {
  return t2 ? "getUTCMinutes" : "getMinutes";
}
function zc(t2) {
  return t2 ? "getUTCSeconds" : "getSeconds";
}
function Bc(t2) {
  return t2 ? "getUTCMilliseconds" : "getMilliseconds";
}
function Ec(t2) {
  return t2 ? "setUTCFullYear" : "setFullYear";
}
function Fc(t2) {
  return t2 ? "setUTCMonth" : "setMonth";
}
function Vc(t2) {
  return t2 ? "setUTCDate" : "setDate";
}
function Hc(t2) {
  return t2 ? "setUTCHours" : "setHours";
}
function Wc(t2) {
  return t2 ? "setUTCMinutes" : "setMinutes";
}
function Gc(t2) {
  return t2 ? "setUTCSeconds" : "setSeconds";
}
function Uc(t2) {
  return t2 ? "setUTCMilliseconds" : "setMilliseconds";
}
function Xc(t2) {
  if (isNaN(Gr(t2))) return et(t2) ? t2 : "-";
  var e2 = (t2 + "").split(".");
  return e2[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") + (e2.length > 1 ? "." + e2[1] : "");
}
function Yc(t2, e2) {
  return t2 = (t2 || "").toLowerCase().replace(/-(.)/g, function(t3, e3) {
    return e3.toUpperCase();
  }), e2 && t2 && (t2 = t2.charAt(0).toUpperCase() + t2.slice(1)), t2;
}
var Zc = ft;
function jc(t2, e2, n2) {
  function i2(t3) {
    return t3 && vt(t3) ? t3 : "-";
  }
  function r2(t3) {
    return !(t3 == null || isNaN(t3) || !isFinite(t3));
  }
  var o2 = e2 === "time", a2 = t2 instanceof Date;
  if (o2 || a2) {
    var s2 = o2 ? Vr(t2) : t2;
    if (!isNaN(+s2)) return Ic(s2, "{yyyy}-{MM}-{dd} {HH}:{mm}:{ss}", n2);
    if (a2) return "-";
  }
  if (e2 === "ordinal") return nt(t2) ? i2(t2) : it(t2) && r2(t2) ? t2 + "" : "-";
  var l2 = Gr(t2);
  return r2(l2) ? Xc(l2) : nt(t2) ? i2(t2) : typeof t2 == "boolean" ? t2 + "" : "-";
}
var qc = ["a", "b", "c", "d", "e", "f", "g"], Kc = function(t2, e2) {
  return "{" + t2 + (e2 ?? "") + "}";
};
function $c(t2, e2, n2) {
  J(e2) || (e2 = [e2]);
  var i2 = e2.length;
  if (!i2) return "";
  for (var r2 = e2[0].$vars || [], o2 = 0; o2 < r2.length; o2++) {
    var a2 = qc[o2];
    t2 = t2.replace(Kc(a2), Kc(a2, 0));
  }
  for (var s2 = 0; s2 < i2; s2++) for (var l2 = 0; l2 < r2.length; l2++) {
    var u2 = e2[s2][r2[l2]];
    t2 = t2.replace(Kc(qc[l2], s2), n2 ? Jt(u2) : u2);
  }
  return t2;
}
function Qc(t2, e2) {
  return e2 = e2 || "transparent", et(t2) ? t2 : rt(t2) && t2.colorStops && (t2.colorStops[0] || {}).color || e2;
}
var Jc = {}, tp = {}, ep = (function() {
  function t2() {
    this._normalMasterList = [], this._nonSeriesBoxMasterList = [];
  }
  return t2.prototype.create = function(t3, e2) {
    function n2(n3, i2) {
      var r2 = [];
      return Y(n3, function(n4, i3) {
        var o2 = n4.create(t3, e2);
        r2 = r2.concat(o2 || []);
      }), r2;
    }
    this._nonSeriesBoxMasterList = n2(Jc), this._normalMasterList = n2(tp);
  }, t2.prototype.update = function(t3, e2) {
    Y(this._normalMasterList, function(n2) {
      n2.update && n2.update(t3, e2);
    });
  }, t2.prototype.getCoordinateSystems = function() {
    return this._normalMasterList.concat(this._nonSeriesBoxMasterList);
  }, t2.register = function(t3, e2) {
    t3 !== "matrix" && t3 !== "calendar" ? tp[t3] = e2 : Jc[t3] = e2;
  }, t2.get = function(t3) {
    return tp[t3] || Jc[t3];
  }, t2;
})(), np = 1, ip = 2, rp = St(), op = 0, ap = 1, sp = 2;
function lp(t2, e2) {
  var n2 = t2.getShallow("coordinateSystem"), i2 = t2.getShallow("coordinateSystemUsage", !0), r2 = op;
  if (n2) {
    var o2 = t2.mainType === "series";
    i2 == null && (i2 = o2 ? "data" : "box"), i2 === "data" ? (r2 = ap, o2 || (r2 = op)) : i2 === "box" && (r2 = sp, o2 || (function(t3) {
      return !!Jc[t3];
    })(n2) || (r2 = op));
  }
  return { coordSysType: n2, kind: r2 };
}
var up = Y, hp = ["left", "right", "top", "bottom", "width", "height"], cp = [["width", "left", "right"], ["height", "top", "bottom"]];
function pp(t2, e2, n2, i2, r2) {
  var o2 = 0, a2 = 0;
  i2 == null && (i2 = 1 / 0), r2 == null && (r2 = 1 / 0);
  var s2 = 0;
  e2.eachChild(function(l2, u2) {
    var h2, c2, p2 = l2.getBoundingRect(), d2 = e2.childAt(u2 + 1), f2 = d2 && d2.getBoundingRect();
    if (t2 === "horizontal") {
      var g2 = p2.width + (f2 ? -f2.x + p2.x : 0);
      (h2 = o2 + g2) > i2 || l2.newline ? (o2 = 0, h2 = g2, a2 += s2 + n2, s2 = p2.height) : s2 = Math.max(s2, p2.height);
    } else {
      var v2 = p2.height + (f2 ? -f2.y + p2.y : 0);
      (c2 = a2 + v2) > r2 || l2.newline ? (o2 += s2 + n2, a2 = 0, c2 = v2, s2 = p2.width) : s2 = Math.max(s2, p2.width);
    }
    l2.newline || (l2.x = o2, l2.y = a2, l2.markRedraw(), t2 === "horizontal" ? o2 = h2 + n2 : a2 = c2 + n2);
  });
}
var dp = pp;
function fp(t2, e2, n2) {
  n2 = Zc(n2 || 0);
  var i2 = e2.width, r2 = e2.height, o2 = Ar(t2.left, i2), a2 = Ar(t2.top, r2), s2 = Ar(t2.right, i2), l2 = Ar(t2.bottom, r2), u2 = Ar(t2.width, i2), h2 = Ar(t2.height, r2), c2 = n2[2] + n2[0], p2 = n2[1] + n2[3], d2 = t2.aspect;
  switch (isNaN(u2) && (u2 = i2 - s2 - p2 - o2), isNaN(h2) && (h2 = r2 - l2 - c2 - a2), d2 != null && (isNaN(u2) && isNaN(h2) && (d2 > i2 / r2 ? u2 = 0.8 * i2 : h2 = 0.8 * r2), isNaN(u2) && (u2 = d2 * h2), isNaN(h2) && (h2 = u2 / d2)), isNaN(o2) && (o2 = i2 - s2 - u2 - p2), isNaN(a2) && (a2 = r2 - l2 - h2 - c2), t2.left || t2.right) {
    case "center":
      o2 = i2 / 2 - u2 / 2 - n2[3];
      break;
    case "right":
      o2 = i2 - u2 - p2;
  }
  switch (t2.top || t2.bottom) {
    case "middle":
    case "center":
      a2 = r2 / 2 - h2 / 2 - n2[0];
      break;
    case "bottom":
      a2 = r2 - h2 - c2;
  }
  o2 = o2 || 0, a2 = a2 || 0, isNaN(u2) && (u2 = i2 - p2 - o2 - (s2 || 0)), isNaN(h2) && (h2 = r2 - c2 - a2 - (l2 || 0));
  var f2 = new Oe((e2.x || 0) + o2 + n2[3], (e2.y || 0) + a2 + n2[0], u2, h2);
  return f2.margin = n2, f2;
}
Q(pp, "vertical"), Q(pp, "horizontal");
var gp = 1;
function vp(t2, e2, n2) {
  var i2, r2, o2, a2, s2 = t2.boxCoordinateSystem;
  if (s2) {
    var l2 = (function(t3) {
      var e3 = t3.getShallow("coord", !0), n3 = np;
      if (e3 == null) {
        var i3 = rp.get(t3.type);
        i3 && i3.getCoord2 && (n3 = ip, e3 = i3.getCoord2(t3));
      }
      return { coord: e3, from: n3 };
    })(t2), u2 = l2.coord, h2 = l2.from;
    if (s2.dataToLayout) {
      o2 = gp, a2 = h2;
      var c2 = s2.dataToLayout(u2);
      i2 = c2.contentRect || c2.rect;
    }
  }
  return o2 == null && (o2 = gp), o2 === gp && (i2 || (i2 = { x: 0, y: 0, width: e2.getWidth(), height: e2.getHeight() }), r2 = [i2.x + i2.width / 2, i2.y + i2.height / 2]), { type: o2, refContainer: i2, refPoint: r2, boxCoordFrom: a2 };
}
function yp(t2) {
  var e2 = t2.layoutMode || t2.constructor.layoutMode;
  return rt(e2) ? e2 : e2 ? { type: e2 } : null;
}
function mp(t2, e2, n2) {
  var i2 = n2 && n2.ignoreSize;
  !J(i2) && (i2 = [i2, i2]);
  var r2 = a2(cp[0], 0), o2 = a2(cp[1], 1);
  function a2(n3, r3) {
    var o3 = {}, a3 = 0, l3 = {}, u2 = 0;
    if (up(n3, function(e3) {
      l3[e3] = t2[e3];
    }), up(n3, function(t3) {
      kt(e2, t3) && (o3[t3] = l3[t3] = e2[t3]), s2(o3, t3) && a3++, s2(l3, t3) && u2++;
    }), i2[r3]) return s2(e2, n3[1]) ? l3[n3[2]] = null : s2(e2, n3[2]) && (l3[n3[1]] = null), l3;
    if (u2 !== 2 && a3) {
      if (a3 >= 2) return o3;
      for (var h2 = 0; h2 < n3.length; h2++) {
        var c2 = n3[h2];
        if (!kt(o3, c2) && kt(t2, c2)) {
          o3[c2] = t2[c2];
          break;
        }
      }
      return o3;
    }
    return l3;
  }
  function s2(t3, e3) {
    return t3[e3] != null && t3[e3] !== "auto";
  }
  function l2(t3, e3, n3) {
    up(t3, function(t4) {
      e3[t4] = n3[t4];
    });
  }
  l2(cp[0], t2, r2), l2(cp[1], t2, o2);
}
function _p(t2) {
  return (function(t3, e2) {
    return e2 && t3 && up(hp, function(n2) {
      kt(e2, n2) && (t3[n2] = e2[n2]);
    }), t3;
  })({}, t2);
}
var xp = uo(), bp = (function(t2) {
  function e2(e3, n3, i2) {
    var r2 = t2.call(this, e3, n3, i2) || this;
    return r2.uid = ic("ec_cpt_model"), r2;
  }
  var n2;
  return _(e2, t2), e2.prototype.init = function(t3, e3, n3) {
    this.mergeDefaultAndTheme(t3, n3);
  }, e2.prototype.mergeDefaultAndTheme = function(t3, e3) {
    var n3 = yp(this), i2 = n3 ? _p(t3) : {};
    V(t3, e3.getTheme().get(this.mainType)), V(t3, this.getDefaultOption()), n3 && mp(t3, i2, n3);
  }, e2.prototype.mergeOption = function(t3, e3) {
    V(this.option, t3, !0);
    var n3 = yp(this);
    n3 && mp(this.option, t3, n3);
  }, e2.prototype.optionUpdated = function(t3, e3) {
  }, e2.prototype.getDefaultOption = function() {
    var t3 = this.constructor;
    if (!(function(t4) {
      return !(!t4 || !t4[_o]);
    })(t3)) return t3.defaultOption;
    var e3 = xp(this);
    if (!e3.defaultOption) {
      for (var n3 = [], i2 = t3; i2; ) {
        var r2 = i2.prototype.defaultOption;
        r2 && n3.push(r2), i2 = i2.superClass;
      }
      for (var o2 = {}, a2 = n3.length - 1; a2 >= 0; a2--) o2 = V(o2, n3[a2], !0);
      e3.defaultOption = o2;
    }
    return e3.defaultOption;
  }, e2.prototype.getReferringComponents = function(t3, e3) {
    var n3 = t3 + "Index", i2 = t3 + "Id";
    return vo(this.ecModel, t3, { index: this.get(n3, !0), id: this.get(i2, !0) }, e3);
  }, e2.prototype.getBoxLayoutParams = function() {
    return e3 = !1, { left: (t3 = this).getShallow("left", e3), top: t3.getShallow("top", e3), right: t3.getShallow("right", e3), bottom: t3.getShallow("bottom", e3), width: t3.getShallow("width", e3), height: t3.getShallow("height", e3) };
    var t3, e3;
  }, e2.prototype.getZLevelKey = function() {
    return "";
  }, e2.prototype.setZLevel = function(t3) {
    this.option.zlevel = t3;
  }, e2.protoInitialize = ((n2 = e2.prototype).type = "component", n2.id = "", n2.name = "", n2.mainType = "", n2.subType = "", void (n2.componentIndex = 0)), e2;
})(ec);
wo(bp, ec), ko(bp), (function(t2) {
  var e2 = {};
  t2.registerSubTypeDefaulter = function(t3, n2) {
    var i2 = xo(t3);
    e2[i2.main] = n2;
  }, t2.determineSubType = function(n2, i2) {
    var r2 = i2.type;
    if (!r2) {
      var o2 = xo(n2).main;
      t2.hasSubTypes(n2) && e2[o2] && (r2 = e2[o2](i2));
    }
    return r2;
  };
})(bp), (function(t2, e2) {
  function n2(t3, e3) {
    return t3[e3] || (t3[e3] = { predecessor: [], successor: [] }), t3[e3];
  }
  t2.topologicalTravel = function(t3, i2, r2, o2) {
    if (t3.length) {
      var a2 = (function(t4) {
        var i3 = {}, r3 = [];
        return Y(t4, function(o3) {
          var a3 = n2(i3, o3), s3 = (function(t5, e3) {
            var n3 = [];
            return Y(t5, function(t6) {
              G(e3, t6) >= 0 && n3.push(t6);
            }), n3;
          })(a3.originalDeps = e2(o3), t4);
          a3.entryCount = s3.length, a3.entryCount === 0 && r3.push(o3), Y(s3, function(t5) {
            G(a3.predecessor, t5) < 0 && a3.predecessor.push(t5);
            var e3 = n2(i3, t5);
            G(e3.successor, t5) < 0 && e3.successor.push(o3);
          });
        }), { graph: i3, noEntryList: r3 };
      })(i2), s2 = a2.graph, l2 = a2.noEntryList, u2 = {};
      for (Y(t3, function(t4) {
        u2[t4] = !0;
      }); l2.length; ) {
        var h2 = l2.pop(), c2 = s2[h2], p2 = !!u2[h2];
        p2 && (r2.call(o2, h2, c2.originalDeps.slice()), delete u2[h2]), Y(c2.successor, p2 ? f2 : d2);
      }
      Y(u2, function() {
        throw new Error("");
      });
    }
    function d2(t4) {
      s2[t4].entryCount--, s2[t4].entryCount === 0 && l2.push(t4);
    }
    function f2(t4) {
      u2[t4] = !0, d2(t4);
    }
  };
})(bp, function(t2) {
  var e2 = [];
  return Y(bp.getClassesByMainType(t2), function(t3) {
    e2 = e2.concat(t3.dependencies || t3.prototype.dependencies || []);
  }), e2 = Z(e2, function(t3) {
    return xo(t3).main;
  }), t2 !== "dataset" && G(e2, "dataset") <= 0 && e2.unshift("dataset"), e2;
});
var wp = { color: {}, darkColor: {}, size: {} }, Sp = wp.color = { theme: ["#5070dd", "#b6d634", "#505372", "#ff994d", "#0ca8df", "#ffd10a", "#fb628b", "#785db0", "#3fbe95"], neutral00: "#fff", neutral05: "#f4f7fd", neutral10: "#e8ebf0", neutral15: "#dbdee4", neutral20: "#cfd2d7", neutral25: "#c3c5cb", neutral30: "#b7b9be", neutral35: "#aaacb2", neutral40: "#9ea0a5", neutral45: "#929399", neutral50: "#86878c", neutral55: "#797b7f", neutral60: "#6d6e73", neutral65: "#616266", neutral70: "#54555a", neutral75: "#48494d", neutral80: "#3c3c41", neutral85: "#303034", neutral90: "#232328", neutral95: "#17171b", neutral99: "#000", accent05: "#eff1f9", accent10: "#e0e4f2", accent15: "#d0d6ec", accent20: "#c0c9e6", accent25: "#b1bbdf", accent30: "#a1aed9", accent35: "#91a0d3", accent40: "#8292cc", accent45: "#7285c6", accent50: "#6578ba", accent55: "#5c6da9", accent60: "#536298", accent65: "#4a5787", accent70: "#404c76", accent75: "#374165", accent80: "#2e3654", accent85: "#252b43", accent90: "#1b2032", accent95: "#121521", transparent: "rgba(0,0,0,0)", highlight: "rgba(255,231,130,0.8)" };
for (Mp in H(Sp, { primary: Sp.neutral80, secondary: Sp.neutral70, tertiary: Sp.neutral60, quaternary: Sp.neutral50, disabled: Sp.neutral20, border: Sp.neutral30, borderTint: Sp.neutral20, borderShade: Sp.neutral40, background: Sp.neutral05, backgroundTint: "rgba(234,237,245,0.5)", backgroundTransparent: "rgba(255,255,255,0)", backgroundShade: Sp.neutral10, shadow: "rgba(0,0,0,0.2)", shadowTint: "rgba(129,130,136,0.2)", axisLine: Sp.neutral70, axisLineTint: Sp.neutral40, axisTick: Sp.neutral70, axisTickMinor: Sp.neutral60, axisLabel: Sp.neutral70, axisSplitLine: Sp.neutral15, axisMinorSplitLine: Sp.neutral05 }), Sp) Sp.hasOwnProperty(Mp) && (Tp = Sp[Mp], Mp === "theme" ? wp.darkColor.theme = Sp.theme.slice() : Mp === "highlight" ? wp.darkColor.highlight = "rgba(255,231,130,0.4)" : Mp.indexOf("accent") === 0 ? wp.darkColor[Mp] = Kn(Tp, 0, function(t2) {
  return 0.5 * t2;
}, function(t2) {
  return Math.min(1, 1.3 - t2);
}) : wp.darkColor[Mp] = Kn(Tp, 0, function(t2) {
  return 0.9 * t2;
}, function(t2) {
  return 1 - Math.pow(t2, 1.5);
}));
var Tp, Mp;
wp.size = { xxs: 2, xs: 5, s: 10, m: 15, l: 20, xl: 30, xxl: 40, xxxl: 50 };
var kp = "";
typeof navigator < "u" && (kp = navigator.platform || "");
var Cp = "rgba(0, 0, 0, 0.2)", Ip = wp.color.theme[0], Dp = Kn(Ip, 0, null, 0.9), Ap = { darkMode: "auto", colorBy: "series", color: wp.color.theme, gradientColor: [Dp, Ip], aria: { decal: { decals: [{ color: Cp, dashArrayX: [1, 0], dashArrayY: [2, 5], symbolSize: 1, rotation: Math.PI / 6 }, { color: Cp, symbol: "circle", dashArrayX: [[8, 8], [0, 8, 8, 0]], dashArrayY: [6, 0], symbolSize: 0.8 }, { color: Cp, dashArrayX: [1, 0], dashArrayY: [4, 3], rotation: -Math.PI / 4 }, { color: Cp, dashArrayX: [[6, 6], [0, 6, 6, 0]], dashArrayY: [6, 0] }, { color: Cp, dashArrayX: [[1, 0], [1, 6]], dashArrayY: [1, 0, 6, 0], rotation: Math.PI / 4 }, { color: Cp, symbol: "triangle", dashArrayX: [[9, 9], [0, 9, 9, 0]], dashArrayY: [7, 2], symbolSize: 0.75 }] } }, textStyle: { fontFamily: kp.match(/^Win/) ? "Microsoft YaHei" : "sans-serif", fontSize: 12, fontStyle: "normal", fontWeight: "normal" }, blendMode: null, stateAnimation: { duration: 300, easing: "cubicOut" }, animation: "auto", animationDuration: 1e3, animationDurationUpdate: 500, animationEasing: "cubicInOut", animationEasingUpdate: "cubicInOut", animationThreshold: 2e3, progressiveThreshold: 3e3, progressive: 400, hoverLayerThreshold: 3e3, useUTC: !1 }, Lp = St(["tooltip", "label", "itemName", "itemId", "itemGroupId", "itemChildGroupId", "seriesName"]), Pp = "original", Op = "arrayRows", Rp = "objectRows", Np = "keyedColumns", zp = "typedArray", Bp = "unknown", Ep = "column", Fp = "row", Vp = 1, Hp = 2, Wp = 3, Gp = uo();
function Up(t2, e2, n2) {
  var i2 = {}, r2 = Xp(e2);
  if (!r2 || !t2) return i2;
  var o2, a2, s2 = [], l2 = [], u2 = e2.ecModel, h2 = Gp(u2).datasetMap, c2 = r2.uid + "_" + n2.seriesLayoutBy;
  Y(t2 = t2.slice(), function(e3, n3) {
    var r3 = rt(e3) ? e3 : t2[n3] = { name: e3 };
    r3.type === "ordinal" && o2 == null && (o2 = n3, a2 = f2(r3)), i2[r3.name] = [];
  });
  var p2 = h2.get(c2) || h2.set(c2, { categoryWayDim: a2, valueWayDim: 0 });
  function d2(t3, e3, n3) {
    for (var i3 = 0; i3 < n3; i3++) t3.push(e3 + i3);
  }
  function f2(t3) {
    var e3 = t3.dimsDef;
    return e3 ? e3.length : 1;
  }
  return Y(t2, function(t3, e3) {
    var n3 = t3.name, r3 = f2(t3);
    if (o2 == null) {
      var a3 = p2.valueWayDim;
      d2(i2[n3], a3, r3), d2(l2, a3, r3), p2.valueWayDim += r3;
    } else o2 === e3 ? (d2(i2[n3], 0, r3), d2(s2, 0, r3)) : (a3 = p2.categoryWayDim, d2(i2[n3], a3, r3), d2(l2, a3, r3), p2.categoryWayDim += r3);
  }), s2.length && (i2.itemName = s2), l2.length && (i2.seriesName = l2), i2;
}
function Xp(t2) {
  if (!t2.get("data", !0)) return vo(t2.ecModel, "dataset", { index: t2.get("datasetIndex", !0), id: t2.get("datasetId", !0) }, fo).models[0];
}
function Yp(t2, e2) {
  return (function(t3, e3, n2, i2, r2, o2) {
    var a2, s2, l2, u2 = 5;
    if (at(t3)) return Wp;
    if (i2) {
      var h2 = i2[o2];
      rt(h2) ? (s2 = h2.name, l2 = h2.type) : et(h2) && (s2 = h2);
    }
    if (l2 != null) return l2 === "ordinal" ? Vp : Wp;
    if (e3 === Op) {
      var c2 = t3;
      if (n2 === Fp) {
        for (var p2 = c2[o2], d2 = 0; d2 < (p2 || []).length && d2 < u2; d2++) if ((a2 = _2(p2[r2 + d2])) != null) return a2;
      } else for (d2 = 0; d2 < c2.length && d2 < u2; d2++) {
        var f2 = c2[r2 + d2];
        if (f2 && (a2 = _2(f2[o2])) != null) return a2;
      }
    } else if (e3 === Rp) {
      var g2 = t3;
      if (!s2) return Wp;
      for (d2 = 0; d2 < g2.length && d2 < u2; d2++)
        if ((y2 = g2[d2]) && (a2 = _2(y2[s2])) != null) return a2;
    } else if (e3 === Np) {
      if (!s2 || !(p2 = t3[s2]) || at(p2)) return Wp;
      for (d2 = 0; d2 < p2.length && d2 < u2; d2++) if ((a2 = _2(p2[d2])) != null) return a2;
    } else if (e3 === Pp) {
      var v2 = t3;
      for (d2 = 0; d2 < v2.length && d2 < u2; d2++) {
        var y2, m2 = to(y2 = v2[d2]);
        if (!J(m2)) return Wp;
        if ((a2 = _2(m2[o2])) != null) return a2;
      }
    }
    function _2(t4) {
      var e4 = et(t4);
      return t4 != null && Number.isFinite(Number(t4)) && t4 !== "" ? e4 ? Hp : Wp : e4 && t4 !== "-" ? Vp : void 0;
    }
    return Wp;
  })(t2.data, t2.sourceFormat, t2.seriesLayoutBy, t2.dimensionsDefine, t2.startIndex, e2);
}
var Zp = St(), jp = uo();
uo();
var qp, Kp, $p, Qp = (function() {
  function t2() {
  }
  return t2.prototype.getColorFromPalette = function(t3, e2, n2) {
    var i2 = $r(this.get("color", !0)), r2 = this.get("colorLayer", !0);
    return (function(t4, e3, n3, i3, r3, o2, a2) {
      o2 = o2 || t4;
      var s2 = e3(o2), l2 = s2.paletteIdx || 0, u2 = s2.paletteNameMap = s2.paletteNameMap || {};
      if (u2.hasOwnProperty(r3)) return u2[r3];
      var h2 = a2 != null && i3 ? (function(t5, e4) {
        for (var n4 = t5.length, i4 = 0; i4 < n4; i4++) if (t5[i4].length > e4) return t5[i4];
        return t5[n4 - 1];
      })(i3, a2) : n3;
      if (h2 = h2 || n3, !(!h2 || !h2.length)) {
        var c2 = h2[l2];
        return r3 && (u2[r3] = c2), s2.paletteIdx = (l2 + 1) % h2.length, c2;
      }
    })(this, jp, i2, r2, t3, e2, n2);
  }, t2.prototype.clearColorPalette = function() {
    var t3, e2;
    (e2 = jp)(t3 = this).paletteIdx = 0, e2(t3).paletteNameMap = {};
  }, t2;
})(), Jp = "\0_ec_inner", td = (function(t2) {
  function e2() {
    return t2 !== null && t2.apply(this, arguments) || this;
  }
  return _(e2, t2), e2.prototype.init = function(t3, e3, n2, i2, r2, o2) {
    i2 = i2 || {}, this.option = null, this._theme = new ec(i2), this._locale = new ec(r2), this._optionManager = o2;
  }, e2.prototype.setOption = function(t3, e3, n2) {
    var i2 = id(e3);
    this._optionManager.setOption(t3, n2, i2), this._resetOption(null, i2);
  }, e2.prototype.resetOption = function(t3, e3) {
    return this._resetOption(t3, id(e3));
  }, e2.prototype._resetOption = function(t3, e3) {
    var n2 = !1, i2 = this._optionManager;
    if (!t3 || t3 === "recreate") {
      var r2 = i2.mountOption(t3 === "recreate");
      this.option && t3 !== "recreate" ? (this.restoreData(), this._mergeOption(r2, e3)) : $p(this, r2), n2 = !0;
    }
    if (t3 !== "timeline" && t3 !== "media" || this.restoreData(), !t3 || t3 === "recreate" || t3 === "timeline") {
      var o2 = i2.getTimelineOption(this);
      o2 && (n2 = !0, this._mergeOption(o2, e3));
    }
    if (!t3 || t3 === "recreate" || t3 === "media") {
      var a2 = i2.getMediaOption(this);
      a2.length && Y(a2, function(t4) {
        n2 = !0, this._mergeOption(t4, e3);
      }, this);
    }
    return n2;
  }, e2.prototype.mergeOption = function(t3) {
    this._mergeOption(t3, null);
  }, e2.prototype._mergeOption = function(t3, e3) {
    var n2 = this.option, i2 = this._componentsMap, r2 = this._componentsCount, o2 = [], a2 = St(), s2 = e3 && e3.replaceMergeMainTypeMap;
    Gp(this).datasetMap = St(), Y(t3, function(t4, e4) {
      t4 != null && (bp.hasClass(e4) ? e4 && (o2.push(e4), a2.set(e4, !0)) : n2[e4] = n2[e4] == null ? F(t4) : V(n2[e4], t4, !0));
    }), s2 && s2.each(function(t4, e4) {
      bp.hasClass(e4) && !a2.get(e4) && (o2.push(e4), a2.set(e4, !0));
    }), bp.topologicalTravel(o2, bp.getAllClassMainTypes(), function(e4) {
      var o3 = (function(t4, e5, n3) {
        var i3 = Zp.get(e5);
        if (!i3) return n3;
        var r3 = i3(t4);
        return r3 ? n3.concat(r3) : n3;
      })(this, e4, $r(t3[e4])), a3 = i2.get(e4), l2 = a3 ? s2 && s2.get(e4) ? "replaceMerge" : "normalMerge" : "replaceAll", u2 = no(a3, o3, l2);
      (function(t4, e5, n3) {
        Y(t4, function(t5) {
          var i3 = t5.newOption;
          rt(i3) && (t5.keyInfo.mainType = e5, t5.keyInfo.subType = (function(t6, e6, n4, i4) {
            return e6.type ? e6.type : n4 ? n4.subType : i4.determineSubType(t6, e6);
          })(e5, i3, t5.existing, n3));
        });
      })(u2, e4, bp), n2[e4] = null, i2.set(e4, null), r2.set(e4, 0);
      var h2, c2 = [], p2 = [], d2 = 0;
      Y(u2, function(t4, n3) {
        var i3 = t4.existing, r3 = t4.newOption;
        if (r3) {
          var o4 = e4 === "series", a4 = bp.getClass(e4, t4.keyInfo.subType, !o4);
          if (!a4) return;
          if (e4 === "tooltip") {
            if (h2) return;
            h2 = !0;
          }
          if (i3 && i3.constructor === a4) i3.name = t4.keyInfo.name, i3.mergeOption(r3, this), i3.optionUpdated(r3, !1);
          else {
            var s3 = H({ componentIndex: n3 }, t4.keyInfo);
            H(i3 = new a4(r3, this, this, s3), s3), t4.brandNew && (i3.__requireNewView = !0), i3.init(r3, this, this), i3.optionUpdated(null, !0);
          }
        } else i3 && (i3.mergeOption({}, this), i3.optionUpdated({}, !1));
        i3 ? (c2.push(i3.option), p2.push(i3), d2++) : (c2.push(void 0), p2.push(void 0));
      }, this), n2[e4] = c2, i2.set(e4, p2), r2.set(e4, d2), e4 === "series" && qp(this);
    }, this), this._seriesIndices || qp(this);
  }, e2.prototype.getOption = function() {
    var t3 = F(this.option);
    return Y(t3, function(e3, n2) {
      if (bp.hasClass(n2)) {
        for (var i2 = $r(e3), r2 = i2.length, o2 = !1, a2 = r2 - 1; a2 >= 0; a2--) i2[a2] && !so(i2[a2]) ? o2 = !0 : (i2[a2] = null, !o2 && r2--);
        i2.length = r2, t3[n2] = i2;
      }
    }), delete t3[Jp], t3;
  }, e2.prototype.setTheme = function(t3) {
    this._theme = new ec(t3), this._resetOption("recreate", null);
  }, e2.prototype.getTheme = function() {
    return this._theme;
  }, e2.prototype.getLocaleModel = function() {
    return this._locale;
  }, e2.prototype.setUpdatePayload = function(t3) {
    this._payload = t3;
  }, e2.prototype.getUpdatePayload = function() {
    return this._payload;
  }, e2.prototype.getComponent = function(t3, e3) {
    var n2 = this._componentsMap.get(t3);
    if (n2) {
      var i2 = n2[e3 || 0];
      if (i2) return i2;
      if (e3 == null) {
        for (var r2 = 0; r2 < n2.length; r2++) if (n2[r2]) return n2[r2];
      }
    }
  }, e2.prototype.queryComponents = function(t3) {
    var e3 = t3.mainType;
    if (!e3) return [];
    var n2, i2 = t3.index, r2 = t3.id, o2 = t3.name, a2 = this._componentsMap.get(e3);
    return a2 && a2.length ? (i2 != null ? (n2 = [], Y($r(i2), function(t4) {
      a2[t4] && n2.push(a2[t4]);
    })) : n2 = r2 != null ? ed("id", r2, a2) : o2 != null ? ed("name", o2, a2) : q(a2, function(t4) {
      return !!t4;
    }), nd(n2, t3)) : [];
  }, e2.prototype.findComponents = function(t3) {
    var e3, n2, i2, r2, o2, a2 = t3.query, s2 = t3.mainType, l2 = (n2 = s2 + "Index", i2 = s2 + "Id", r2 = s2 + "Name", !(e3 = a2) || e3[n2] == null && e3[i2] == null && e3[r2] == null ? null : { mainType: s2, index: e3[n2], id: e3[i2], name: e3[r2] }), u2 = l2 ? this.queryComponents(l2) : q(this._componentsMap.get(s2), function(t4) {
      return !!t4;
    });
    return o2 = nd(u2, t3), t3.filter ? q(o2, t3.filter) : o2;
  }, e2.prototype.eachComponent = function(t3, e3, n2) {
    var i2 = this._componentsMap;
    if (tt(t3)) {
      var r2 = e3, o2 = t3;
      i2.each(function(t4, e4) {
        for (var n3 = 0; t4 && n3 < t4.length; n3++) {
          var i3 = t4[n3];
          i3 && o2.call(r2, e4, i3, i3.componentIndex);
        }
      });
    } else for (var a2 = et(t3) ? i2.get(t3) : rt(t3) ? this.findComponents(t3) : null, s2 = 0; a2 && s2 < a2.length; s2++) {
      var l2 = a2[s2];
      l2 && e3.call(n2, l2, l2.componentIndex);
    }
  }, e2.prototype.getSeriesByName = function(t3) {
    var e3 = oo(t3, null);
    return q(this._componentsMap.get("series"), function(t4) {
      return !!t4 && e3 != null && t4.name === e3;
    });
  }, e2.prototype.getSeriesByIndex = function(t3) {
    return this._componentsMap.get("series")[t3];
  }, e2.prototype.getSeriesByType = function(t3) {
    return q(this._componentsMap.get("series"), function(e3) {
      return !!e3 && e3.subType === t3;
    });
  }, e2.prototype.getSeries = function() {
    return q(this._componentsMap.get("series"), function(t3) {
      return !!t3;
    });
  }, e2.prototype.getSeriesCount = function() {
    return this._componentsCount.get("series");
  }, e2.prototype.eachSeries = function(t3, e3) {
    Kp(this), Y(this._seriesIndices, function(n2) {
      var i2 = this._componentsMap.get("series")[n2];
      t3.call(e3, i2, n2);
    }, this);
  }, e2.prototype.eachRawSeries = function(t3, e3) {
    Y(this._componentsMap.get("series"), function(n2) {
      n2 && t3.call(e3, n2, n2.componentIndex);
    });
  }, e2.prototype.eachSeriesByType = function(t3, e3, n2) {
    Kp(this), Y(this._seriesIndices, function(i2) {
      var r2 = this._componentsMap.get("series")[i2];
      r2.subType === t3 && e3.call(n2, r2, i2);
    }, this);
  }, e2.prototype.eachRawSeriesByType = function(t3, e3, n2) {
    return Y(this.getSeriesByType(t3), e3, n2);
  }, e2.prototype.isSeriesFiltered = function(t3) {
    return Kp(this), this._seriesIndicesMap.get(t3.componentIndex) == null;
  }, e2.prototype.getCurrentSeriesIndices = function() {
    return (this._seriesIndices || []).slice();
  }, e2.prototype.filterSeries = function(t3, e3) {
    Kp(this);
    var n2 = [];
    Y(this._seriesIndices, function(i2) {
      var r2 = this._componentsMap.get("series")[i2];
      t3.call(e3, r2, i2) && n2.push(i2);
    }, this), this._seriesIndices = n2, this._seriesIndicesMap = St(n2);
  }, e2.prototype.restoreData = function(t3) {
    qp(this);
    var e3 = this._componentsMap, n2 = [];
    e3.each(function(t4, e4) {
      bp.hasClass(e4) && n2.push(e4);
    }), bp.topologicalTravel(n2, bp.getAllClassMainTypes(), function(n3) {
      Y(e3.get(n3), function(e4) {
        !e4 || n3 === "series" && (function(t4, e5) {
          if (e5) {
            var n4 = e5.seriesIndex, i2 = e5.seriesId, r2 = e5.seriesName;
            return n4 != null && t4.componentIndex !== n4 || i2 != null && t4.id !== i2 || r2 != null && t4.name !== r2;
          }
        })(e4, t3) || e4.restoreData();
      });
    });
  }, e2.internalField = (qp = function(t3) {
    var e3 = t3._seriesIndices = [];
    Y(t3._componentsMap.get("series"), function(t4) {
      t4 && e3.push(t4.componentIndex);
    }), t3._seriesIndicesMap = St(e3);
  }, Kp = function(t3) {
  }, void ($p = function(t3, e3) {
    t3.option = {}, t3.option[Jp] = 1, t3._componentsMap = St({ series: [] }), t3._componentsCount = St();
    var n2, i2, r2, o2 = e3.aria;
    rt(o2) && o2.enabled == null && (o2.enabled = !0), n2 = e3, i2 = t3._theme.option, r2 = n2.color && !n2.colorLayer, Y(i2, function(t4, e4) {
      e4 === "colorLayer" && r2 || e4 === "color" && n2.color || bp.hasClass(e4) || (typeof t4 == "object" ? n2[e4] = n2[e4] ? V(n2[e4], t4, !1) : F(t4) : n2[e4] == null && (n2[e4] = t4));
    }), V(e3, Ap, !1), t3._mergeOption(e3, null);
  })), e2;
})(ec);
function ed(t2, e2, n2) {
  if (J(e2)) {
    var i2 = St();
    return Y(e2, function(t3) {
      t3 != null && oo(t3, null) != null && i2.set(t3, !0);
    }), q(n2, function(e3) {
      return e3 && i2.get(e3[t2]);
    });
  }
  var r2 = oo(e2, null);
  return q(n2, function(e3) {
    return e3 && r2 != null && e3[t2] === r2;
  });
}
function nd(t2, e2) {
  return e2.hasOwnProperty("subType") ? q(t2, function(t3) {
    return t3 && t3.subType === e2.subType;
  }) : t2;
}
function id(t2) {
  var e2 = St();
  return t2 && Y($r(t2.replaceMerge), function(t3) {
    e2.set(t3, !0);
  }), { replaceMergeMainTypeMap: e2 };
}
U(td, Qp);
var rd = ["getDom", "getZr", "getWidth", "getHeight", "getDevicePixelRatio", "dispatchAction", "isSSR", "isDisposed", "on", "off", "getDataURL", "getConnectedDataURL", "getOption", "getId", "updateLabelLayout"], od = /* @__PURE__ */ (function() {
  return function(t2) {
    Y(rd, function(e2) {
      this[e2] = $(t2[e2], t2);
    }, this);
  };
})(), ad = /^(min|max)?(.+)$/, sd = (function() {
  function t2(t3) {
    this._timelineOptions = [], this._mediaList = [], this._currentMediaIndices = [], this._api = t3;
  }
  return t2.prototype.setOption = function(t3, e2, n2) {
    t3 && (Y($r(t3.series), function(t4) {
      t4 && t4.data && at(t4.data) && mt(t4.data);
    }), Y($r(t3.dataset), function(t4) {
      t4 && t4.source && at(t4.source) && mt(t4.source);
    })), t3 = F(t3);
    var i2 = this._optionBackup, r2 = (function(t4, e3, n3) {
      var i3, r3, o2 = [], a2 = t4.baseOption, s2 = t4.timeline, l2 = t4.options, u2 = t4.media, h2 = !!t4.media, c2 = !!(l2 || s2 || a2 && a2.timeline);
      a2 ? (r3 = a2).timeline || (r3.timeline = s2) : ((c2 || h2) && (t4.options = t4.media = null), r3 = t4), h2 && J(u2) && Y(u2, function(t5) {
        t5 && t5.option && (t5.query ? o2.push(t5) : i3 || (i3 = t5));
      });
      function p2(t5) {
        Y(e3, function(e4) {
          e4(t5, n3);
        });
      }
      return p2(r3), Y(l2, function(t5) {
        return p2(t5);
      }), Y(o2, function(t5) {
        return p2(t5.option);
      }), { baseOption: r3, timelineOptions: l2 || [], mediaDefault: i3, mediaList: o2 };
    })(t3, e2, !i2);
    this._newBaseOption = r2.baseOption, i2 ? (r2.timelineOptions.length && (i2.timelineOptions = r2.timelineOptions), r2.mediaList.length && (i2.mediaList = r2.mediaList), r2.mediaDefault && (i2.mediaDefault = r2.mediaDefault)) : this._optionBackup = r2;
  }, t2.prototype.mountOption = function(t3) {
    var e2 = this._optionBackup;
    return this._timelineOptions = e2.timelineOptions, this._mediaList = e2.mediaList, this._mediaDefault = e2.mediaDefault, this._currentMediaIndices = [], F(t3 ? e2.baseOption : this._newBaseOption);
  }, t2.prototype.getTimelineOption = function(t3) {
    var e2, n2 = this._timelineOptions;
    if (n2.length) {
      var i2 = t3.getComponent("timeline");
      i2 && (e2 = F(n2[i2.getCurrentIndex()]));
    }
    return e2;
  }, t2.prototype.getMediaOption = function(t3) {
    var e2, n2, i2 = this._api.getWidth(), r2 = this._api.getHeight(), o2 = this._mediaList, a2 = this._mediaDefault, s2 = [], l2 = [];
    if (!o2.length && !a2) return l2;
    for (var u2 = 0, h2 = o2.length; u2 < h2; u2++) ld(o2[u2].query, i2, r2) && s2.push(u2);
    return !s2.length && a2 && (s2 = [-1]), s2.length && (e2 = s2, n2 = this._currentMediaIndices, e2.join(",") !== n2.join(",")) && (l2 = Z(s2, function(t4) {
      return F(t4 === -1 ? a2.option : o2[t4].option);
    })), this._currentMediaIndices = s2, l2;
  }, t2;
})();
function ld(t2, e2, n2) {
  var i2 = { width: e2, height: n2, aspectratio: e2 / n2 }, r2 = !0;
  return Y(t2, function(t3, e3) {
    var n3 = e3.match(ad);
    if (n3 && n3[1] && n3[2]) {
      var o2 = n3[1], a2 = n3[2].toLowerCase();
      (function(t4, e4, n4) {
        return n4 === "min" ? t4 >= e4 : n4 === "max" ? t4 <= e4 : t4 === e4;
      })(i2[a2], t3, o2) || (r2 = !1);
    }
  }), r2;
}
var ud = Y, hd = rt, cd = ["areaStyle", "lineStyle", "nodeStyle", "linkStyle", "chordStyle", "label", "labelLine"];
function pd(t2) {
  var e2 = t2 && t2.itemStyle;
  if (e2) for (var n2 = 0, i2 = cd.length; n2 < i2; n2++) {
    var r2 = cd[n2], o2 = e2.normal, a2 = e2.emphasis;
    o2 && o2[r2] && (t2[r2] = t2[r2] || {}, t2[r2].normal ? V(t2[r2].normal, o2[r2]) : t2[r2].normal = o2[r2], o2[r2] = null), a2 && a2[r2] && (t2[r2] = t2[r2] || {}, t2[r2].emphasis ? V(t2[r2].emphasis, a2[r2]) : t2[r2].emphasis = a2[r2], a2[r2] = null);
  }
}
function dd(t2, e2, n2) {
  if (t2 && t2[e2] && (t2[e2].normal || t2[e2].emphasis)) {
    var i2 = t2[e2].normal, r2 = t2[e2].emphasis;
    i2 && (n2 ? (t2[e2].normal = t2[e2].emphasis = null, W(t2[e2], i2)) : t2[e2] = i2), r2 && (t2.emphasis = t2.emphasis || {}, t2.emphasis[e2] = r2, r2.focus && (t2.emphasis.focus = r2.focus), r2.blurScope && (t2.emphasis.blurScope = r2.blurScope));
  }
}
function fd(t2) {
  dd(t2, "itemStyle"), dd(t2, "lineStyle"), dd(t2, "areaStyle"), dd(t2, "label"), dd(t2, "labelLine"), dd(t2, "upperLabel"), dd(t2, "edgeLabel");
}
function gd(t2, e2) {
  var n2 = hd(t2) && t2[e2], i2 = hd(n2) && n2.textStyle;
  if (i2) for (var r2 = 0, o2 = Jr.length; r2 < o2; r2++) {
    var a2 = Jr[r2];
    i2.hasOwnProperty(a2) && (n2[a2] = i2[a2]);
  }
}
function vd(t2) {
  t2 && (fd(t2), gd(t2, "label"), t2.emphasis && gd(t2.emphasis, "label"));
}
function yd(t2) {
  return J(t2) ? t2 : t2 ? [t2] : [];
}
function md(t2) {
  return (J(t2) ? t2[0] : t2) || {};
}
function _d(t2, e2) {
  ud(yd(t2.series), function(t3) {
    hd(t3) && (function(t4) {
      if (hd(t4)) {
        pd(t4), fd(t4), gd(t4, "label"), gd(t4, "upperLabel"), gd(t4, "edgeLabel"), t4.emphasis && (gd(t4.emphasis, "label"), gd(t4.emphasis, "upperLabel"), gd(t4.emphasis, "edgeLabel"));
        var e3 = t4.markPoint;
        e3 && (pd(e3), vd(e3));
        var n3 = t4.markLine;
        n3 && (pd(n3), vd(n3));
        var i2 = t4.markArea;
        i2 && vd(i2);
        var r2 = t4.data;
        if (t4.type === "graph") {
          r2 = r2 || t4.nodes;
          var o2 = t4.links || t4.edges;
          if (o2 && !at(o2)) for (var a2 = 0; a2 < o2.length; a2++) vd(o2[a2]);
          Y(t4.categories, function(t5) {
            fd(t5);
          });
        }
        if (r2 && !at(r2)) for (a2 = 0; a2 < r2.length; a2++) vd(r2[a2]);
        if ((e3 = t4.markPoint) && e3.data) {
          var s2 = e3.data;
          for (a2 = 0; a2 < s2.length; a2++) vd(s2[a2]);
        }
        if ((n3 = t4.markLine) && n3.data) {
          var l2 = n3.data;
          for (a2 = 0; a2 < l2.length; a2++) J(l2[a2]) ? (vd(l2[a2][0]), vd(l2[a2][1])) : vd(l2[a2]);
        }
        t4.type === "gauge" ? (gd(t4, "axisLabel"), gd(t4, "title"), gd(t4, "detail")) : t4.type === "treemap" ? (dd(t4.breadcrumb, "itemStyle"), Y(t4.levels, function(t5) {
          fd(t5);
        })) : t4.type === "tree" && fd(t4.leaves);
      }
    })(t3);
  });
  var n2 = ["xAxis", "yAxis", "radiusAxis", "angleAxis", "singleAxis", "parallelAxis", "radar"];
  e2 && n2.push("valueAxis", "categoryAxis", "logAxis", "timeAxis"), ud(n2, function(e3) {
    ud(yd(t2[e3]), function(t3) {
      t3 && (gd(t3, "axisLabel"), gd(t3.axisPointer, "label"));
    });
  }), ud(yd(t2.parallel), function(t3) {
    var e3 = t3 && t3.parallelAxisDefault;
    gd(e3, "axisLabel"), gd(e3 && e3.axisPointer, "label");
  }), ud(yd(t2.calendar), function(t3) {
    dd(t3, "itemStyle"), gd(t3, "dayLabel"), gd(t3, "monthLabel"), gd(t3, "yearLabel");
  }), ud(yd(t2.radar), function(t3) {
    gd(t3, "name"), t3.name && t3.axisName == null && (t3.axisName = t3.name, delete t3.name), t3.nameGap != null && t3.axisNameGap == null && (t3.axisNameGap = t3.nameGap, delete t3.nameGap);
  }), ud(yd(t2.geo), function(t3) {
    hd(t3) && (vd(t3), ud(yd(t3.regions), function(t4) {
      vd(t4);
    }));
  }), ud(yd(t2.timeline), function(t3) {
    vd(t3), dd(t3, "label"), dd(t3, "itemStyle"), dd(t3, "controlStyle", !0);
    var e3 = t3.data;
    J(e3) && Y(e3, function(t4) {
      rt(t4) && (dd(t4, "label"), dd(t4, "itemStyle"));
    });
  }), ud(yd(t2.toolbox), function(t3) {
    dd(t3, "iconStyle"), ud(t3.feature, function(t4) {
      dd(t4, "iconStyle");
    });
  }), gd(md(t2.axisPointer), "label"), gd(md(t2.tooltip).axisPointer, "label");
}
function xd(t2) {
  t2 && Y(bd, function(e2) {
    e2[0] in t2 && !(e2[1] in t2) && (t2[e2[1]] = t2[e2[0]]);
  });
}
var bd = [["x", "left"], ["y", "top"], ["x2", "right"], ["y2", "bottom"]], wd = ["grid", "geo", "parallel", "legend", "toolbox", "title", "visualMap", "dataZoom", "timeline"], Sd = [["borderRadius", "barBorderRadius"], ["borderColor", "barBorderColor"], ["borderWidth", "barBorderWidth"]];
function Md(t2) {
  var e2 = t2 && t2.itemStyle;
  if (e2) for (var n2 = 0; n2 < Sd.length; n2++) {
    var i2 = Sd[n2][1], r2 = Sd[n2][0];
    e2[i2] != null && (e2[r2] = e2[i2]);
  }
}
function Td(t2) {
  t2 && t2.alignTo === "edge" && t2.margin != null && t2.edgeDistance == null && (t2.edgeDistance = t2.margin);
}
function kd(t2) {
  t2 && t2.downplay && !t2.blur && (t2.blur = t2.downplay);
}
function Cd(t2, e2) {
  if (t2) for (var n2 = 0; n2 < t2.length; n2++) e2(t2[n2]), t2[n2] && Cd(t2[n2].children, e2);
}
function Id(t2, e2) {
  _d(t2, e2), t2.series = $r(t2.series), Y(t2.series, function(t3) {
    if (rt(t3)) {
      var e3 = t3.type;
      if (e3 === "line") t3.clipOverflow != null && (t3.clip = t3.clipOverflow);
      else if (e3 === "pie" || e3 === "gauge") {
        if (t3.clockWise != null && (t3.clockwise = t3.clockWise), Td(t3.label), (r2 = t3.data) && !at(r2)) for (var n2 = 0; n2 < r2.length; n2++) Td(r2[n2]);
        t3.hoverOffset != null && (t3.emphasis = t3.emphasis || {}, (t3.emphasis.scaleSize = null) && (t3.emphasis.scaleSize = t3.hoverOffset));
      } else if (e3 === "gauge") {
        var i2 = (function(t4, e4) {
          for (var n3 = e4.split(","), i3 = t4, r3 = 0; r3 < n3.length && (i3 = i3 && i3[n3[r3]]) != null; r3++) ;
          return i3;
        })(t3, "pointer.color");
        i2 != null && (function(t4, e4, n3) {
          for (var i3, r3 = e4.split(","), o3 = t4, a2 = 0; a2 < r3.length - 1; a2++) o3[i3 = r3[a2]] == null && (o3[i3] = {}), o3 = o3[i3];
          o3[r3[a2]] == null && (o3[r3[a2]] = n3);
        })(t3, "itemStyle.color", i2);
      } else if (e3 === "bar") {
        var r2;
        if (Md(t3), Md(t3.backgroundStyle), Md(t3.emphasis), (r2 = t3.data) && !at(r2)) for (n2 = 0; n2 < r2.length; n2++) typeof r2[n2] == "object" && (Md(r2[n2]), Md(r2[n2] && r2[n2].emphasis));
      } else if (e3 === "sunburst") {
        var o2 = t3.highlightPolicy;
        o2 && (t3.emphasis = t3.emphasis || {}, t3.emphasis.focus || (t3.emphasis.focus = o2)), kd(t3), Cd(t3.data, kd);
      } else e3 === "graph" || e3 === "sankey" ? (function(t4) {
        t4 && t4.focusNodeAdjacency != null && (t4.emphasis = t4.emphasis || {}, t4.emphasis.focus == null && (t4.emphasis.focus = "adjacency"));
      })(t3) : e3 === "map" && (t3.mapType && !t3.map && (t3.map = t3.mapType), t3.mapLocation && W(t3, t3.mapLocation));
      t3.hoverAnimation != null && (t3.emphasis = t3.emphasis || {}, t3.emphasis && t3.emphasis.scale == null && (t3.emphasis.scale = t3.hoverAnimation)), xd(t3);
    }
  }), t2.dataRange && (t2.visualMap = t2.dataRange), Y(wd, function(e3) {
    var n2 = t2[e3];
    n2 && (J(n2) || (n2 = [n2]), Y(n2, function(t3) {
      xd(t3);
    }));
  });
}
var Dd, Ad, Ld, Pd, Od, Rd, Nd = /* @__PURE__ */ (function() {
  return function(t2) {
    this.data = t2.data || (t2.sourceFormat === Np ? {} : []), this.sourceFormat = t2.sourceFormat || Bp, this.seriesLayoutBy = t2.seriesLayoutBy || Ep, this.startIndex = t2.startIndex || 0, this.dimensionsDetectedCount = t2.dimensionsDetectedCount, this.metaRawOption = t2.metaRawOption;
    var e2 = this.dimensionsDefine = t2.dimensionsDefine;
    if (e2) for (var n2 = 0; n2 < e2.length; n2++) {
      var i2 = e2[n2];
      i2.type == null && Yp(this, n2) === Vp && (i2.type = "ordinal");
    }
  };
})();
function zd(t2) {
  return t2 instanceof Nd;
}
function Bd(t2, e2, n2) {
  n2 = n2 || Fd(t2);
  var i2 = e2.seriesLayoutBy, r2 = (function(t3, e3, n3, i3, r3) {
    var o2, a2;
    if (!t3) return { dimensionsDefine: Vd(r3), startIndex: a2, dimensionsDetectedCount: o2 };
    if (e3 === Op) {
      var s2 = t3;
      i3 === "auto" || i3 == null ? Hd(function(t4) {
        t4 != null && t4 !== "-" && (et(t4) ? a2 == null && (a2 = 1) : a2 = 0);
      }, n3, s2, 10) : a2 = it(i3) ? i3 : i3 ? 1 : 0, r3 || a2 !== 1 || (r3 = [], Hd(function(t4, e4) {
        r3[e4] = t4 != null ? t4 + "" : "";
      }, n3, s2, 1 / 0)), o2 = r3 ? r3.length : n3 === Fp ? s2.length : s2[0] ? s2[0].length : null;
    } else if (e3 === Rp) r3 || (r3 = (function(t4) {
      for (var e4, n4 = 0; n4 < t4.length && !(e4 = t4[n4++]); ) ;
      if (e4) return K(e4);
    })(t3));
    else if (e3 === Np) r3 || (r3 = [], Y(t3, function(t4, e4) {
      r3.push(e4);
    }));
    else if (e3 === Pp) {
      var l2 = to(t3[0]);
      o2 = J(l2) && l2.length || 1;
    }
    return { startIndex: a2, dimensionsDefine: Vd(r3), dimensionsDetectedCount: o2 };
  })(t2, n2, i2, e2.sourceHeader, e2.dimensions);
  return new Nd({ data: t2, sourceFormat: n2, seriesLayoutBy: i2, dimensionsDefine: r2.dimensionsDefine, startIndex: r2.startIndex, dimensionsDetectedCount: r2.dimensionsDetectedCount, metaRawOption: F(e2) });
}
function Ed(t2) {
  return new Nd({ data: t2, sourceFormat: at(t2) ? zp : Pp });
}
function Fd(t2) {
  var e2 = Bp;
  if (at(t2)) e2 = zp;
  else if (J(t2)) {
    t2.length === 0 && (e2 = Op);
    for (var n2 = 0, i2 = t2.length; n2 < i2; n2++) {
      var r2 = t2[n2];
      if (r2 != null) {
        if (J(r2) || at(r2)) {
          e2 = Op;
          break;
        }
        if (rt(r2)) {
          e2 = Rp;
          break;
        }
      }
    }
  } else if (rt(t2)) {
    for (var o2 in t2) if (kt(t2, o2) && X(t2[o2])) {
      e2 = Np;
      break;
    }
  }
  return e2;
}
function Vd(t2) {
  if (t2) {
    var e2 = St();
    return Z(t2, function(t3, n2) {
      var i2 = { name: (t3 = rt(t3) ? t3 : { name: t3 }).name, displayName: t3.displayName, type: t3.type };
      if (i2.name == null) return i2;
      i2.name += "", i2.displayName == null && (i2.displayName = i2.name);
      var r2 = e2.get(i2.name);
      return r2 ? i2.name += "-" + r2.count++ : e2.set(i2.name, { count: 1 }), i2;
    });
  }
}
function Hd(t2, e2, n2, i2) {
  if (e2 === Fp) for (var r2 = 0; r2 < n2.length && r2 < i2; r2++) t2(n2[r2] ? n2[r2][0] : null, r2);
  else {
    var o2 = n2[0] || [];
    for (r2 = 0; r2 < o2.length && r2 < i2; r2++) t2(o2[r2], r2);
  }
}
function Wd(t2) {
  var e2 = t2.sourceFormat;
  return e2 === Rp || e2 === Np;
}
var Gd = (function() {
  function t2(t3, e3) {
    var n2 = zd(t3) ? t3 : Ed(t3);
    this._source = n2;
    var i2 = this._data = n2.data, r2 = n2.sourceFormat;
    n2.seriesLayoutBy, r2 === zp && (this._offset = 0, this._dimSize = e3, this._data = i2), Rd(this, i2, n2);
  }
  var e2;
  return t2.prototype.getSource = function() {
    return this._source;
  }, t2.prototype.count = function() {
    return 0;
  }, t2.prototype.getItem = function(t3, e3) {
  }, t2.prototype.appendData = function(t3) {
  }, t2.prototype.clean = function() {
  }, t2.protoInitialize = ((e2 = t2.prototype).pure = !1, void (e2.persistent = !0)), t2.internalField = (function() {
    var t3;
    Rd = function(t4, r3, o2) {
      var a2 = o2.sourceFormat, s2 = o2.seriesLayoutBy, l2 = o2.startIndex, u2 = o2.dimensionsDefine;
      if (H(t4, Od[tf(a2, s2)]), a2 === zp) t4.getItem = e3, t4.count = i2, t4.fillStorage = n2;
      else {
        var h2 = Zd(a2, s2);
        t4.getItem = $(h2, null, r3, l2, u2);
        var c2 = Kd(a2, s2);
        t4.count = $(c2, null, r3, l2, u2);
      }
    };
    var e3 = function(t4, e4) {
      t4 -= this._offset, e4 = e4 || [];
      for (var n3 = this._data, i3 = this._dimSize, r3 = i3 * t4, o2 = 0; o2 < i3; o2++) e4[o2] = n3[r3 + o2];
      return e4;
    }, n2 = function(t4, e4, n3, i3) {
      for (var r3 = this._data, o2 = this._dimSize, a2 = 0; a2 < o2; a2++) {
        for (var s2 = i3[a2], l2 = s2[0] == null ? 1 / 0 : s2[0], u2 = s2[1] == null ? -1 / 0 : s2[1], h2 = e4 - t4, c2 = n3[a2], p2 = 0; p2 < h2; p2++) {
          var d2 = r3[p2 * o2 + a2];
          c2[t4 + p2] = d2, d2 < l2 && (l2 = d2), d2 > u2 && (u2 = d2);
        }
        s2[0] = l2, s2[1] = u2;
      }
    }, i2 = function() {
      return this._data ? this._data.length / this._dimSize : 0;
    };
    function r2(t4) {
      for (var e4 = 0; e4 < t4.length; e4++) this._data.push(t4[e4]);
    }
    (t3 = {})[Op + "_" + Ep] = { pure: !0, appendData: r2 }, t3[Op + "_" + Fp] = { pure: !0, appendData: function() {
      throw new Error('Do not support appendData when set seriesLayoutBy: "row".');
    } }, t3[Rp] = { pure: !0, appendData: r2 }, t3[Np] = { pure: !0, appendData: function(t4) {
      var e4 = this._data;
      Y(t4, function(t5, n3) {
        for (var i3 = e4[n3] || (e4[n3] = []), r3 = 0; r3 < (t5 || []).length; r3++) i3.push(t5[r3]);
      });
    } }, t3[Pp] = { appendData: r2 }, t3[zp] = { persistent: !1, pure: !0, appendData: function(t4) {
      this._data = t4;
    }, clean: function() {
      this._offset += this.count(), this._data = null;
    } }, Od = t3;
  })(), t2;
})(), Ud = function(t2) {
  J(t2);
};
(Dd = {})[Op + "_" + Ep] = Ud, Dd[Op + "_" + Fp] = Ud, Dd[Rp] = Ud, Dd[Np] = function(t2, e2) {
  for (var n2 = 0; n2 < e2.length; n2++)
    e2[n2].name == null;
}, Dd[Pp] = Ud;
var Xd = function(t2, e2, n2, i2) {
  return t2[i2];
}, Yd = ((Ad = {})[Op + "_" + Ep] = function(t2, e2, n2, i2) {
  return t2[i2 + e2];
}, Ad[Op + "_" + Fp] = function(t2, e2, n2, i2, r2) {
  i2 += e2;
  for (var o2 = r2 || [], a2 = t2, s2 = 0; s2 < a2.length; s2++) {
    var l2 = a2[s2];
    o2[s2] = l2 ? l2[i2] : null;
  }
  return o2;
}, Ad[Rp] = Xd, Ad[Np] = function(t2, e2, n2, i2, r2) {
  for (var o2 = r2 || [], a2 = 0; a2 < n2.length; a2++) {
    var s2 = n2[a2].name, l2 = s2 != null ? t2[s2] : null;
    o2[a2] = l2 ? l2[i2] : null;
  }
  return o2;
}, Ad[Pp] = Xd, Ad);
function Zd(t2, e2) {
  return Yd[tf(t2, e2)];
}
var jd = function(t2, e2, n2) {
  return t2.length;
}, qd = ((Ld = {})[Op + "_" + Ep] = function(t2, e2, n2) {
  return Math.max(0, t2.length - e2);
}, Ld[Op + "_" + Fp] = function(t2, e2, n2) {
  var i2 = t2[0];
  return i2 ? Math.max(0, i2.length - e2) : 0;
}, Ld[Rp] = jd, Ld[Np] = function(t2, e2, n2) {
  var i2 = n2[0].name, r2 = i2 != null ? t2[i2] : null;
  return r2 ? r2.length : 0;
}, Ld[Pp] = jd, Ld);
function Kd(t2, e2) {
  return qd[tf(t2, e2)];
}
var $d = function(t2, e2, n2) {
  return t2[e2];
}, Qd = ((Pd = {})[Op] = $d, Pd[Rp] = function(t2, e2, n2) {
  return t2[n2];
}, Pd[Np] = $d, Pd[Pp] = function(t2, e2, n2) {
  var i2 = to(t2);
  return i2 instanceof Array ? i2[e2] : i2;
}, Pd[zp] = $d, Pd);
function Jd(t2) {
  return Qd[t2];
}
function tf(t2, e2) {
  return t2 === Op ? t2 + "_" + e2 : t2;
}
function ef(t2, e2, n2) {
  if (t2) {
    var i2 = t2.getRawDataItem(e2);
    if (i2 != null) {
      var r2 = t2.getStore(), o2 = r2.getSource().sourceFormat;
      if (n2 != null) {
        var a2 = t2.getDimensionIndex(n2), s2 = r2.getDimensionProperty(a2);
        return Jd(o2)(i2, a2, s2);
      }
      var l2 = i2;
      return o2 === Pp && (l2 = to(i2)), l2;
    }
  }
}
var nf = /\{@(.+?)\}/g, rf = (function() {
  function t2() {
  }
  return t2.prototype.getDataParams = function(t3, e2) {
    var n2 = this.getData(e2), i2 = this.getRawValue(t3, e2), r2 = n2.getRawIndex(t3), o2 = n2.getName(t3), a2 = n2.getRawDataItem(t3), s2 = n2.getItemVisual(t3, "style"), l2 = s2 && s2[n2.getItemVisual(t3, "drawType") || "fill"], u2 = s2 && s2.stroke, h2 = this.mainType, c2 = h2 === "series", p2 = n2.userOutput && n2.userOutput.get();
    return { componentType: h2, componentSubType: this.subType, componentIndex: this.componentIndex, seriesType: c2 ? this.subType : null, seriesIndex: this.seriesIndex, seriesId: c2 ? this.id : null, seriesName: c2 ? this.name : null, name: o2, dataIndex: r2, data: a2, dataType: e2, value: i2, color: l2, borderColor: u2, dimensionNames: p2 ? p2.fullDimensions : null, encode: p2 ? p2.encode : null, $vars: ["seriesName", "name", "value"] };
  }, t2.prototype.getFormattedLabel = function(t3, e2, n2, i2, r2, o2) {
    e2 = e2 || "normal";
    var a2 = this.getData(n2), s2 = this.getDataParams(t3, n2);
    return o2 && (s2.value = o2.interpolatedValue), i2 != null && J(s2.value) && (s2.value = s2.value[i2]), r2 || (r2 = a2.getItemModel(t3).get(e2 === "normal" ? ["label", "formatter"] : [e2, "label", "formatter"])), tt(r2) ? (s2.status = e2, s2.dimensionIndex = i2, r2(s2)) : et(r2) ? $c(r2, s2).replace(nf, function(e3, n3) {
      var i3 = n3.length, r3 = n3;
      r3.charAt(0) === "[" && r3.charAt(i3 - 1) === "]" && (r3 = +r3.slice(1, i3 - 1));
      var s3 = ef(a2, t3, r3);
      if (o2 && J(o2.interpolatedValue)) {
        var l2 = a2.getDimensionIndex(r3);
        l2 >= 0 && (s3 = o2.interpolatedValue[l2]);
      }
      return s3 != null ? s3 + "" : "";
    }) : void 0;
  }, t2.prototype.getRawValue = function(t3, e2) {
    return ef(this.getData(e2), t3);
  }, t2.prototype.formatTooltip = function(t3, e2, n2) {
  }, t2;
})();
function of(t2) {
  var e2, n2;
  return rt(t2) ? t2.type && (n2 = t2) : e2 = t2, { text: e2, frag: n2 };
}
function af(t2) {
  return new sf(t2);
}
var sf = (function() {
  function t2(t3) {
    t3 = t3 || {}, this._reset = t3.reset, this._plan = t3.plan, this._count = t3.count, this._onDirty = t3.onDirty, this._dirty = !0;
  }
  return t2.prototype.perform = function(t3) {
    var e2, n2 = this._upstream, i2 = t3 && t3.skip;
    if (this._dirty && n2) {
      var r2 = this.context;
      r2.data = r2.outputData = n2.context.outputData;
    }
    this.__pipeline && (this.__pipeline.currentTask = this), this._plan && !i2 && (e2 = this._plan(this.context));
    var o2, a2 = h2(this._modBy), s2 = this._modDataCount || 0, l2 = h2(t3 && t3.modBy), u2 = t3 && t3.modDataCount || 0;
    function h2(t4) {
      return !(t4 >= 1) && (t4 = 1), t4;
    }
    a2 === l2 && s2 === u2 || (e2 = "reset"), (this._dirty || e2 === "reset") && (this._dirty = !1, o2 = this._doReset(i2)), this._modBy = l2, this._modDataCount = u2;
    var c2 = t3 && t3.step;
    if (this._dueEnd = n2 ? n2._outputDueEnd : this._count ? this._count(this.context) : 1 / 0, this._progress) {
      var p2 = this._dueIndex, d2 = Math.min(c2 != null ? this._dueIndex + c2 : 1 / 0, this._dueEnd);
      if (!i2 && (o2 || p2 < d2)) {
        var f2 = this._progress;
        if (J(f2)) for (var g2 = 0; g2 < f2.length; g2++) this._doProgress(f2[g2], p2, d2, l2, u2);
        else this._doProgress(f2, p2, d2, l2, u2);
      }
      this._dueIndex = d2;
      var v2 = this._settedOutputEnd != null ? this._settedOutputEnd : d2;
      this._outputDueEnd = v2;
    } else this._dueIndex = this._outputDueEnd = this._settedOutputEnd != null ? this._settedOutputEnd : this._dueEnd;
    return this.unfinished();
  }, t2.prototype.dirty = function() {
    this._dirty = !0, this._onDirty && this._onDirty(this.context);
  }, t2.prototype._doProgress = function(t3, e2, n2, i2, r2) {
    lf.reset(e2, n2, i2, r2), this._callingProgress = t3, this._callingProgress({ start: e2, end: n2, count: n2 - e2, next: lf.next }, this.context);
  }, t2.prototype._doReset = function(t3) {
    var e2, n2;
    this._dueIndex = this._outputDueEnd = this._dueEnd = 0, this._settedOutputEnd = null, !t3 && this._reset && ((e2 = this._reset(this.context)) && e2.progress && (n2 = e2.forceFirstProgress, e2 = e2.progress), J(e2) && !e2.length && (e2 = null)), this._progress = e2, this._modBy = this._modDataCount = null;
    var i2 = this._downstream;
    return i2 && i2.dirty(), n2;
  }, t2.prototype.unfinished = function() {
    return this._progress && this._dueIndex < this._dueEnd;
  }, t2.prototype.pipe = function(t3) {
    (this._downstream !== t3 || this._dirty) && (this._downstream = t3, t3._upstream = this, t3.dirty());
  }, t2.prototype.dispose = function() {
    this._disposed || (this._upstream && (this._upstream._downstream = null), this._downstream && (this._downstream._upstream = null), this._dirty = !1, this._disposed = !0);
  }, t2.prototype.getUpstream = function() {
    return this._upstream;
  }, t2.prototype.getDownstream = function() {
    return this._downstream;
  }, t2.prototype.setOutputEnd = function(t3) {
    this._outputDueEnd = this._settedOutputEnd = t3;
  }, t2;
})(), lf = /* @__PURE__ */ (function() {
  var t2, e2, n2, i2, r2, o2 = { reset: function(l2, u2, h2, c2) {
    e2 = l2, t2 = u2, n2 = h2, i2 = c2, r2 = Math.ceil(i2 / n2), o2.next = n2 > 1 && i2 > 0 ? s2 : a2;
  } };
  return o2;
  function a2() {
    return e2 < t2 ? e2++ : null;
  }
  function s2() {
    var o3 = e2 % r2 * n2 + Math.ceil(e2 / r2), a3 = e2 >= t2 ? null : o3 < i2 ? o3 : e2;
    return e2++, a3;
  }
})();
function uf(t2, e2) {
  var n2 = e2 && e2.type;
  return n2 === "ordinal" ? t2 : (n2 !== "time" || it(t2) || t2 == null || t2 === "-" || (t2 = +Vr(t2)), t2 == null || t2 === "" ? NaN : Number(t2));
}
St({ number: function(t2) {
  return parseFloat(t2);
}, time: function(t2) {
  return +Vr(t2);
}, trim: function(t2) {
  return et(t2) ? vt(t2) : t2;
} });
var hf = (function() {
  function t2(t3, e2) {
    var n2 = t3 === "desc";
    this._resultLT = n2 ? 1 : -1, e2 == null && (e2 = n2 ? "min" : "max"), this._incomparable = e2 === "min" ? -1 / 0 : 1 / 0;
  }
  return t2.prototype.evaluate = function(t3, e2) {
    var n2 = it(t3) ? t3 : Gr(t3), i2 = it(e2) ? e2 : Gr(e2), r2 = isNaN(n2), o2 = isNaN(i2);
    if (r2 && (n2 = this._incomparable), o2 && (i2 = this._incomparable), r2 && o2) {
      var a2 = et(t3), s2 = et(e2);
      a2 && (n2 = s2 ? t3 : 0), s2 && (i2 = a2 ? e2 : 0);
    }
    return n2 < i2 ? this._resultLT : n2 > i2 ? -this._resultLT : 0;
  }, t2;
})(), cf = (function() {
  function t2() {
  }
  return t2.prototype.getRawData = function() {
    throw new Error("not supported");
  }, t2.prototype.getRawDataItem = function(t3) {
    throw new Error("not supported");
  }, t2.prototype.cloneRawData = function() {
  }, t2.prototype.getDimensionInfo = function(t3) {
  }, t2.prototype.cloneAllDimensionInfo = function() {
  }, t2.prototype.count = function() {
  }, t2.prototype.retrieveValue = function(t3, e2) {
  }, t2.prototype.retrieveValueFromItem = function(t3, e2) {
  }, t2.prototype.convertValue = function(t3, e2) {
    return uf(t3, e2);
  }, t2;
})();
function pf(t2) {
  return mf(t2.sourceFormat) || jr(""), t2.data;
}
function df(t2) {
  var e2 = t2.sourceFormat, n2 = t2.data;
  if (mf(e2) || jr(""), e2 === Op) {
    for (var i2 = [], r2 = 0, o2 = n2.length; r2 < o2; r2++) i2.push(n2[r2].slice());
    return i2;
  }
  if (e2 === Rp) {
    for (i2 = [], r2 = 0, o2 = n2.length; r2 < o2; r2++) i2.push(H({}, n2[r2]));
    return i2;
  }
}
function ff(t2, e2, n2) {
  if (n2 != null) return it(n2) || !isNaN(n2) && !kt(e2, n2) ? t2[n2] : kt(e2, n2) ? e2[n2] : void 0;
}
function gf(t2) {
  return F(t2);
}
var vf = St();
function yf(t2, e2, n2, i2) {
  e2.length || jr(""), rt(t2) || jr("");
  var r2 = t2.type, o2 = vf.get(r2);
  o2 || jr("");
  var a2 = Z(e2, function(t3) {
    return (function(t4, e3) {
      var n3 = new cf(), i3 = t4.data, r3 = n3.sourceFormat = t4.sourceFormat, o3 = t4.startIndex;
      t4.seriesLayoutBy !== Ep && jr("");
      var a3 = [], s2 = {}, l2 = t4.dimensionsDefine;
      if (l2) Y(l2, function(t5, e4) {
        var n4 = t5.name, i4 = { index: e4, name: n4, displayName: t5.displayName };
        a3.push(i4), n4 != null && (kt(s2, n4) && jr(""), s2[n4] = i4);
      });
      else for (var u2 = 0; u2 < t4.dimensionsDetectedCount; u2++) a3.push({ index: u2 });
      var h2 = Zd(r3, Ep);
      e3.__isBuiltIn && (n3.getRawDataItem = function(t5) {
        return h2(i3, o3, a3, t5);
      }, n3.getRawData = $(pf, null, t4)), n3.cloneRawData = $(df, null, t4);
      var c2 = Kd(r3, Ep);
      n3.count = $(c2, null, i3, o3, a3);
      var p2 = Jd(r3);
      n3.retrieveValue = function(t5, e4) {
        var n4 = h2(i3, o3, a3, t5);
        return d2(n4, e4);
      };
      var d2 = n3.retrieveValueFromItem = function(t5, e4) {
        if (t5 != null) {
          var n4 = a3[e4];
          return n4 ? p2(t5, e4, n4.name) : void 0;
        }
      };
      return n3.getDimensionInfo = $(ff, null, a3, s2), n3.cloneAllDimensionInfo = $(gf, null, a3), n3;
    })(t3, o2);
  });
  return Z($r(o2.transform({ upstream: a2[0], upstreamList: a2, config: F(t2.config) })), function(t3, n3) {
    var i3;
    rt(t3) || jr(""), t3.data || jr(""), mf(Fd(t3.data)) || jr("");
    var r3 = e2[0];
    if (r3 && n3 === 0 && !t3.dimensions) {
      var o3 = r3.startIndex;
      o3 && (t3.data = r3.data.slice(0, o3).concat(t3.data)), i3 = { seriesLayoutBy: Ep, sourceHeader: o3, dimensions: r3.metaRawOption.dimensions };
    } else i3 = { seriesLayoutBy: Ep, sourceHeader: 0, dimensions: t3.dimensions };
    return Bd(t3.data, i3, null);
  });
}
function mf(t2) {
  return t2 === Op || t2 === Rp;
}
var _f, xf = "undefined", bf = typeof Uint32Array === xf ? Array : Uint32Array, wf = typeof Uint16Array === xf ? Array : Uint16Array, Sf = typeof Int32Array === xf ? Array : Int32Array, Mf = typeof Float64Array === xf ? Array : Float64Array, Tf = { float: Mf, int: Sf, ordinal: Array, number: Array, time: Mf };
function kf(t2) {
  return t2 > 65535 ? bf : wf;
}
function Cf() {
  return [1 / 0, -1 / 0];
}
function If(t2) {
  var e2 = t2.constructor;
  return e2 === Array ? t2.slice() : new e2(t2);
}
function Df(t2, e2, n2, i2, r2) {
  var o2 = Tf[n2 || "float"];
  if (r2) {
    var a2 = t2[e2], s2 = a2 && a2.length;
    if (s2 !== i2) {
      for (var l2 = new o2(i2), u2 = 0; u2 < s2; u2++) l2[u2] = a2[u2];
      t2[e2] = l2;
    }
  } else t2[e2] = new o2(i2);
}
var Af = (function() {
  function t2() {
    this._chunks = [], this._rawExtent = [], this._extent = [], this._count = 0, this._rawCount = 0, this._calcDimNameToIdx = St();
  }
  return t2.prototype.initData = function(t3, e2, n2) {
    this._provider = t3, this._chunks = [], this._indices = null, this.getRawIndex = this._getRawIdxIdentity;
    var i2 = t3.getSource(), r2 = this.defaultDimValueGetter = _f[i2.sourceFormat];
    this._dimValueGetter = n2 || r2, this._rawExtent = [], Wd(i2), this._dimensions = Z(e2, function(t4) {
      return { type: t4.type, property: t4.property };
    }), this._initDataFromProvider(0, t3.count());
  }, t2.prototype.getProvider = function() {
    return this._provider;
  }, t2.prototype.getSource = function() {
    return this._provider.getSource();
  }, t2.prototype.ensureCalculationDimension = function(t3, e2) {
    var n2 = this._calcDimNameToIdx, i2 = this._dimensions, r2 = n2.get(t3);
    if (r2 != null) {
      if (i2[r2].type === e2) return r2;
    } else r2 = i2.length;
    return i2[r2] = { type: e2 }, n2.set(t3, r2), this._chunks[r2] = new Tf[e2 || "float"](this._rawCount), this._rawExtent[r2] = [1 / 0, -1 / 0], r2;
  }, t2.prototype.collectOrdinalMeta = function(t3, e2) {
    var n2 = this._chunks[t3], i2 = this._dimensions[t3], r2 = this._rawExtent, o2 = i2.ordinalOffset || 0, a2 = n2.length;
    o2 === 0 && (r2[t3] = [1 / 0, -1 / 0]);
    for (var s2 = r2[t3], l2 = o2; l2 < a2; l2++) {
      var u2 = n2[l2] = e2.parseAndCollect(n2[l2]);
      isNaN(u2) || (s2[0] = Math.min(u2, s2[0]), s2[1] = Math.max(u2, s2[1]));
    }
    i2.ordinalMeta = e2, i2.ordinalOffset = a2, i2.type = "ordinal";
  }, t2.prototype.getOrdinalMeta = function(t3) {
    return this._dimensions[t3].ordinalMeta;
  }, t2.prototype.getDimensionProperty = function(t3) {
    var e2 = this._dimensions[t3];
    return e2 && e2.property;
  }, t2.prototype.appendData = function(t3) {
    var e2 = this._provider, n2 = this.count();
    e2.appendData(t3);
    var i2 = e2.count();
    return e2.persistent || (i2 += n2), n2 < i2 && this._initDataFromProvider(n2, i2, !0), [n2, i2];
  }, t2.prototype.appendValues = function(t3, e2) {
    for (var n2 = this._chunks, i2 = this._dimensions, r2 = i2.length, o2 = this._rawExtent, a2 = this.count(), s2 = a2 + Math.max(t3.length, e2 || 0), l2 = 0; l2 < r2; l2++)
      Df(n2, l2, (d2 = i2[l2]).type, s2, !0);
    for (var u2 = [], h2 = a2; h2 < s2; h2++) for (var c2 = h2 - a2, p2 = 0; p2 < r2; p2++) {
      var d2 = i2[p2], f2 = _f.arrayRows.call(this, t3[c2] || u2, d2.property, c2, p2);
      n2[p2][h2] = f2;
      var g2 = o2[p2];
      f2 < g2[0] && (g2[0] = f2), f2 > g2[1] && (g2[1] = f2);
    }
    return this._rawCount = this._count = s2, { start: a2, end: s2 };
  }, t2.prototype._initDataFromProvider = function(t3, e2, n2) {
    for (var i2 = this._provider, r2 = this._chunks, o2 = this._dimensions, a2 = o2.length, s2 = this._rawExtent, l2 = Z(o2, function(t4) {
      return t4.property;
    }), u2 = 0; u2 < a2; u2++) {
      var h2 = o2[u2];
      s2[u2] || (s2[u2] = Cf()), Df(r2, u2, h2.type, e2, n2);
    }
    if (i2.fillStorage) i2.fillStorage(t3, e2, r2, s2);
    else for (var c2 = [], p2 = t3; p2 < e2; p2++) {
      c2 = i2.getItem(p2, c2);
      for (var d2 = 0; d2 < a2; d2++) {
        var f2 = r2[d2], g2 = this._dimValueGetter(c2, l2[d2], p2, d2);
        f2[p2] = g2;
        var v2 = s2[d2];
        g2 < v2[0] && (v2[0] = g2), g2 > v2[1] && (v2[1] = g2);
      }
    }
    !i2.persistent && i2.clean && i2.clean(), this._rawCount = this._count = e2, this._extent = [];
  }, t2.prototype.count = function() {
    return this._count;
  }, t2.prototype.get = function(t3, e2) {
    if (!(e2 >= 0 && e2 < this._count)) return NaN;
    var n2 = this._chunks[t3];
    return n2 ? n2[this.getRawIndex(e2)] : NaN;
  }, t2.prototype.getValues = function(t3, e2) {
    var n2 = [], i2 = [];
    if (e2 == null) {
      e2 = t3, t3 = [];
      for (var r2 = 0; r2 < this._dimensions.length; r2++) i2.push(r2);
    } else i2 = t3;
    r2 = 0;
    for (var o2 = i2.length; r2 < o2; r2++) n2.push(this.get(i2[r2], e2));
    return n2;
  }, t2.prototype.getByRawIndex = function(t3, e2) {
    if (!(e2 >= 0 && e2 < this._rawCount)) return NaN;
    var n2 = this._chunks[t3];
    return n2 ? n2[e2] : NaN;
  }, t2.prototype.getSum = function(t3) {
    var e2 = 0;
    if (this._chunks[t3]) for (var n2 = 0, i2 = this.count(); n2 < i2; n2++) {
      var r2 = this.get(t3, n2);
      isNaN(r2) || (e2 += r2);
    }
    return e2;
  }, t2.prototype.getMedian = function(t3) {
    var e2 = [];
    this.each([t3], function(t4) {
      isNaN(t4) || e2.push(t4);
    });
    var n2 = e2.sort(function(t4, e3) {
      return t4 - e3;
    }), i2 = this.count();
    return i2 === 0 ? 0 : i2 % 2 == 1 ? n2[(i2 - 1) / 2] : (n2[i2 / 2] + n2[i2 / 2 - 1]) / 2;
  }, t2.prototype.indexOfRawIndex = function(t3) {
    if (t3 >= this._rawCount || t3 < 0) return -1;
    if (!this._indices) return t3;
    var e2 = this._indices, n2 = e2[t3];
    if (n2 != null && n2 < this._count && n2 === t3) return t3;
    for (var i2 = 0, r2 = this._count - 1; i2 <= r2; ) {
      var o2 = (i2 + r2) / 2 | 0;
      if (e2[o2] < t3) i2 = o2 + 1;
      else {
        if (!(e2[o2] > t3)) return o2;
        r2 = o2 - 1;
      }
    }
    return -1;
  }, t2.prototype.getIndices = function() {
    var t3, e2 = this._indices;
    if (e2) {
      var n2 = e2.constructor, i2 = this._count;
      if (n2 === Array) {
        t3 = new n2(i2);
        for (var r2 = 0; r2 < i2; r2++) t3[r2] = e2[r2];
      } else t3 = new n2(e2.buffer, 0, i2);
    } else
      for (t3 = new (n2 = kf(this._rawCount))(this.count()), r2 = 0; r2 < t3.length; r2++) t3[r2] = r2;
    return t3;
  }, t2.prototype.filter = function(t3, e2) {
    if (!this._count) return this;
    for (var n2 = this.clone(), i2 = n2.count(), r2 = new (kf(n2._rawCount))(i2), o2 = [], a2 = t3.length, s2 = 0, l2 = t3[0], u2 = n2._chunks, h2 = 0; h2 < i2; h2++) {
      var c2 = void 0, p2 = n2.getRawIndex(h2);
      if (a2 === 0) c2 = e2(h2);
      else if (a2 === 1)
        c2 = e2(u2[l2][p2], h2);
      else {
        for (var d2 = 0; d2 < a2; d2++) o2[d2] = u2[t3[d2]][p2];
        o2[d2] = h2, c2 = e2.apply(null, o2);
      }
      c2 && (r2[s2++] = p2);
    }
    return s2 < i2 && (n2._indices = r2), n2._count = s2, n2._extent = [], n2._updateGetRawIdx(), n2;
  }, t2.prototype.selectRange = function(t3) {
    var e2 = this.clone(), n2 = e2._count;
    if (!n2) return this;
    var i2 = K(t3), r2 = i2.length;
    if (!r2) return this;
    var o2 = e2.count(), a2 = new (kf(e2._rawCount))(o2), s2 = 0, l2 = i2[0], u2 = t3[l2][0], h2 = t3[l2][1], c2 = e2._chunks, p2 = !1;
    if (!e2._indices) {
      var d2 = 0;
      if (r2 === 1) {
        for (var f2 = c2[i2[0]], g2 = 0; g2 < n2; g2++)
          ((_2 = f2[g2]) >= u2 && _2 <= h2 || isNaN(_2)) && (a2[s2++] = d2), d2++;
        p2 = !0;
      } else if (r2 === 2) {
        f2 = c2[i2[0]];
        var v2 = c2[i2[1]], y2 = t3[i2[1]][0], m2 = t3[i2[1]][1];
        for (g2 = 0; g2 < n2; g2++) {
          var _2 = f2[g2], x2 = v2[g2];
          (_2 >= u2 && _2 <= h2 || isNaN(_2)) && (x2 >= y2 && x2 <= m2 || isNaN(x2)) && (a2[s2++] = d2), d2++;
        }
        p2 = !0;
      }
    }
    if (!p2) if (r2 === 1) for (g2 = 0; g2 < o2; g2++) {
      var b2 = e2.getRawIndex(g2);
      ((_2 = c2[i2[0]][b2]) >= u2 && _2 <= h2 || isNaN(_2)) && (a2[s2++] = b2);
    }
    else for (g2 = 0; g2 < o2; g2++) {
      for (var w2 = !0, S2 = (b2 = e2.getRawIndex(g2), 0); S2 < r2; S2++) {
        var M2 = i2[S2];
        ((_2 = c2[M2][b2]) < t3[M2][0] || _2 > t3[M2][1]) && (w2 = !1);
      }
      w2 && (a2[s2++] = e2.getRawIndex(g2));
    }
    return s2 < o2 && (e2._indices = a2), e2._count = s2, e2._extent = [], e2._updateGetRawIdx(), e2;
  }, t2.prototype.map = function(t3, e2) {
    var n2 = this.clone(t3);
    return this._updateDims(n2, t3, e2), n2;
  }, t2.prototype.modify = function(t3, e2) {
    this._updateDims(this, t3, e2);
  }, t2.prototype._updateDims = function(t3, e2, n2) {
    for (var i2 = t3._chunks, r2 = [], o2 = e2.length, a2 = t3.count(), s2 = [], l2 = t3._rawExtent, u2 = 0; u2 < e2.length; u2++) l2[e2[u2]] = Cf();
    for (var h2 = 0; h2 < a2; h2++) {
      for (var c2 = t3.getRawIndex(h2), p2 = 0; p2 < o2; p2++) s2[p2] = i2[e2[p2]][c2];
      s2[o2] = h2;
      var d2 = n2 && n2.apply(null, s2);
      if (d2 != null)
        for (typeof d2 != "object" && (r2[0] = d2, d2 = r2), u2 = 0; u2 < d2.length; u2++) {
          var f2 = e2[u2], g2 = d2[u2], v2 = l2[f2], y2 = i2[f2];
          y2 && (y2[c2] = g2), g2 < v2[0] && (v2[0] = g2), g2 > v2[1] && (v2[1] = g2);
        }
    }
  }, t2.prototype.lttbDownSample = function(t3, e2) {
    var n2, i2, r2, o2 = this.clone([t3], !0), a2 = o2._chunks[t3], s2 = this.count(), l2 = 0, u2 = Math.floor(1 / e2), h2 = this.getRawIndex(0), c2 = new (kf(this._rawCount))(Math.min(2 * (Math.ceil(s2 / u2) + 2), s2));
    c2[l2++] = h2;
    for (var p2 = 1; p2 < s2 - 1; p2 += u2) {
      for (var d2 = Math.min(p2 + u2, s2 - 1), f2 = Math.min(p2 + 2 * u2, s2), g2 = (f2 + d2) / 2, v2 = 0, y2 = d2; y2 < f2; y2++) {
        var m2 = a2[T2 = this.getRawIndex(y2)];
        isNaN(m2) || (v2 += m2);
      }
      v2 /= f2 - d2;
      var _2 = p2, x2 = Math.min(p2 + u2, s2), b2 = p2 - 1, w2 = a2[h2];
      n2 = -1, r2 = _2;
      var S2 = -1, M2 = 0;
      for (y2 = _2; y2 < x2; y2++) {
        var T2;
        m2 = a2[T2 = this.getRawIndex(y2)], isNaN(m2) ? (M2++, S2 < 0 && (S2 = T2)) : (i2 = Math.abs((b2 - g2) * (m2 - w2) - (b2 - y2) * (v2 - w2))) > n2 && (n2 = i2, r2 = T2);
      }
      M2 > 0 && M2 < x2 - _2 && (c2[l2++] = Math.min(S2, r2), r2 = Math.max(S2, r2)), c2[l2++] = r2, h2 = r2;
    }
    return c2[l2++] = this.getRawIndex(s2 - 1), o2._count = l2, o2._indices = c2, o2.getRawIndex = this._getRawIdx, o2;
  }, t2.prototype.minmaxDownSample = function(t3, e2) {
    for (var n2 = this.clone([t3], !0), i2 = n2._chunks, r2 = Math.floor(1 / e2), o2 = i2[t3], a2 = this.count(), s2 = new (kf(this._rawCount))(2 * Math.ceil(a2 / r2)), l2 = 0, u2 = 0; u2 < a2; u2 += r2) {
      var h2 = u2, c2 = o2[this.getRawIndex(h2)], p2 = u2, d2 = o2[this.getRawIndex(p2)], f2 = r2;
      u2 + r2 > a2 && (f2 = a2 - u2);
      for (var g2 = 0; g2 < f2; g2++) {
        var v2 = o2[this.getRawIndex(u2 + g2)];
        v2 < c2 && (c2 = v2, h2 = u2 + g2), v2 > d2 && (d2 = v2, p2 = u2 + g2);
      }
      var y2 = this.getRawIndex(h2), m2 = this.getRawIndex(p2);
      h2 < p2 ? (s2[l2++] = y2, s2[l2++] = m2) : (s2[l2++] = m2, s2[l2++] = y2);
    }
    return n2._count = l2, n2._indices = s2, n2._updateGetRawIdx(), n2;
  }, t2.prototype.downSample = function(t3, e2, n2, i2) {
    for (var r2 = this.clone([t3], !0), o2 = r2._chunks, a2 = [], s2 = Math.floor(1 / e2), l2 = o2[t3], u2 = this.count(), h2 = r2._rawExtent[t3] = [1 / 0, -1 / 0], c2 = new (kf(this._rawCount))(Math.ceil(u2 / s2)), p2 = 0, d2 = 0; d2 < u2; d2 += s2) {
      s2 > u2 - d2 && (s2 = u2 - d2, a2.length = s2);
      for (var f2 = 0; f2 < s2; f2++) {
        var g2 = this.getRawIndex(d2 + f2);
        a2[f2] = l2[g2];
      }
      var v2 = n2(a2), y2 = this.getRawIndex(Math.min(d2 + i2(a2, v2) || 0, u2 - 1));
      l2[y2] = v2, v2 < h2[0] && (h2[0] = v2), v2 > h2[1] && (h2[1] = v2), c2[p2++] = y2;
    }
    return r2._count = p2, r2._indices = c2, r2._updateGetRawIdx(), r2;
  }, t2.prototype.each = function(t3, e2) {
    if (this._count) for (var n2 = t3.length, i2 = this._chunks, r2 = 0, o2 = this.count(); r2 < o2; r2++) {
      var a2 = this.getRawIndex(r2);
      switch (n2) {
        case 0:
          e2(r2);
          break;
        case 1:
          e2(i2[t3[0]][a2], r2);
          break;
        case 2:
          e2(i2[t3[0]][a2], i2[t3[1]][a2], r2);
          break;
        default:
          for (var s2 = 0, l2 = []; s2 < n2; s2++) l2[s2] = i2[t3[s2]][a2];
          l2[s2] = r2, e2.apply(null, l2);
      }
    }
  }, t2.prototype.getDataExtent = function(t3) {
    var e2 = this._chunks[t3], n2 = [1 / 0, -1 / 0];
    if (!e2) return n2;
    var i2, r2 = this.count();
    if (!this._indices) return this._rawExtent[t3].slice();
    if (i2 = this._extent[t3]) return i2.slice();
    for (var o2 = (i2 = n2)[0], a2 = i2[1], s2 = 0; s2 < r2; s2++) {
      var l2 = e2[this.getRawIndex(s2)];
      l2 < o2 && (o2 = l2), l2 > a2 && (a2 = l2);
    }
    return i2 = [o2, a2], this._extent[t3] = i2, i2;
  }, t2.prototype.getRawDataItem = function(t3) {
    var e2 = this.getRawIndex(t3);
    if (this._provider.persistent) return this._provider.getItem(e2);
    for (var n2 = [], i2 = this._chunks, r2 = 0; r2 < i2.length; r2++) n2.push(i2[r2][e2]);
    return n2;
  }, t2.prototype.clone = function(e2, n2) {
    var i2 = new t2(), r2 = this._chunks, o2 = e2 && j(e2, function(t3, e3) {
      return t3[e3] = !0, t3;
    }, {});
    if (o2) for (var a2 = 0; a2 < r2.length; a2++) i2._chunks[a2] = o2[a2] ? If(r2[a2]) : r2[a2];
    else i2._chunks = r2;
    return this._copyCommonProps(i2), n2 || (i2._indices = this._cloneIndices()), i2._updateGetRawIdx(), i2;
  }, t2.prototype._copyCommonProps = function(t3) {
    t3._count = this._count, t3._rawCount = this._rawCount, t3._provider = this._provider, t3._dimensions = this._dimensions, t3._extent = F(this._extent), t3._rawExtent = F(this._rawExtent);
  }, t2.prototype._cloneIndices = function() {
    if (this._indices) {
      var t3 = this._indices.constructor, e2 = void 0;
      if (t3 === Array) {
        var n2 = this._indices.length;
        e2 = new t3(n2);
        for (var i2 = 0; i2 < n2; i2++) e2[i2] = this._indices[i2];
      } else e2 = new t3(this._indices);
      return e2;
    }
    return null;
  }, t2.prototype._getRawIdxIdentity = function(t3) {
    return t3;
  }, t2.prototype._getRawIdx = function(t3) {
    return t3 < this._count && t3 >= 0 ? this._indices[t3] : -1;
  }, t2.prototype._updateGetRawIdx = function() {
    this.getRawIndex = this._indices ? this._getRawIdx : this._getRawIdxIdentity;
  }, t2.internalField = (function() {
    function t3(t4, e2, n2, i2) {
      return uf(t4[i2], this._dimensions[i2]);
    }
    _f = { arrayRows: t3, objectRows: function(t4, e2, n2, i2) {
      return uf(t4[e2], this._dimensions[i2]);
    }, keyedColumns: t3, original: function(t4, e2, n2, i2) {
      var r2 = t4 && (t4.value == null ? t4 : t4.value);
      return uf(r2 instanceof Array ? r2[i2] : r2, this._dimensions[i2]);
    }, typedArray: function(t4, e2, n2, i2) {
      return t4[i2];
    } };
  })(), t2;
})(), Lf = (function() {
  function t2(t3) {
    this._sourceList = [], this._storeList = [], this._upstreamSignList = [], this._versionSignBase = 0, this._dirty = !0, this._sourceHost = t3;
  }
  return t2.prototype.dirty = function() {
    this._setLocalSource([], []), this._storeList = [], this._dirty = !0;
  }, t2.prototype._setLocalSource = function(t3, e2) {
    this._sourceList = t3, this._upstreamSignList = e2, this._versionSignBase++, this._versionSignBase > 9e10 && (this._versionSignBase = 0);
  }, t2.prototype._getVersionSign = function() {
    return this._sourceHost.uid + "_" + this._versionSignBase;
  }, t2.prototype.prepareSource = function() {
    this._isDirty() && (this._createSource(), this._dirty = !1);
  }, t2.prototype._createSource = function() {
    this._setLocalSource([], []);
    var t3, e2, n2 = this._sourceHost, i2 = this._getUpstreamSourceManagers(), r2 = !!i2.length;
    if (Pf(n2)) {
      var o2 = n2, a2 = void 0, s2 = void 0, l2 = void 0;
      if (r2) {
        var u2 = i2[0];
        u2.prepareSource(), a2 = (l2 = u2.getSource()).data, s2 = l2.sourceFormat, e2 = [u2._getVersionSign()];
      } else s2 = at(a2 = o2.get("data", !0)) ? zp : Pp, e2 = [];
      var h2 = this._getSourceMetaRawOption() || {}, c2 = l2 && l2.metaRawOption || {}, p2 = ct(h2.seriesLayoutBy, c2.seriesLayoutBy) || null, d2 = ct(h2.sourceHeader, c2.sourceHeader), f2 = ct(h2.dimensions, c2.dimensions);
      t3 = p2 !== c2.seriesLayoutBy || !!d2 != !!c2.sourceHeader || f2 ? [Bd(a2, { seriesLayoutBy: p2, sourceHeader: d2, dimensions: f2 }, s2)] : [];
    } else {
      var g2 = n2;
      if (r2) {
        var v2 = this._applyTransform(i2);
        t3 = v2.sourceList, e2 = v2.upstreamSignList;
      } else
        t3 = [Bd(g2.get("source", !0), this._getSourceMetaRawOption(), null)], e2 = [];
    }
    this._setLocalSource(t3, e2);
  }, t2.prototype._applyTransform = function(t3) {
    var e2, n2 = this._sourceHost, i2 = n2.get("transform", !0), r2 = n2.get("fromTransformResult", !0);
    r2 != null && t3.length !== 1 && Of("");
    var o2, a2 = [], s2 = [];
    return Y(t3, function(t4) {
      t4.prepareSource();
      var e3 = t4.getSource(r2 || 0);
      r2 == null || e3 || Of(""), a2.push(e3), s2.push(t4._getVersionSign());
    }), i2 ? e2 = (function(t4, e3) {
      var n3 = $r(t4), i3 = n3.length;
      i3 || jr("");
      for (var r3 = 0, o3 = i3; r3 < o3; r3++) e3 = yf(n3[r3], e3), r3 !== o3 - 1 && (e3.length = Math.max(e3.length, 1));
      return e3;
    })(i2, a2, n2.componentIndex) : r2 != null && (e2 = [(o2 = a2[0], new Nd({ data: o2.data, sourceFormat: o2.sourceFormat, seriesLayoutBy: o2.seriesLayoutBy, dimensionsDefine: F(o2.dimensionsDefine), startIndex: o2.startIndex, dimensionsDetectedCount: o2.dimensionsDetectedCount }))]), { sourceList: e2, upstreamSignList: s2 };
  }, t2.prototype._isDirty = function() {
    if (this._dirty) return !0;
    for (var t3 = this._getUpstreamSourceManagers(), e2 = 0; e2 < t3.length; e2++) {
      var n2 = t3[e2];
      if (n2._isDirty() || this._upstreamSignList[e2] !== n2._getVersionSign()) return !0;
    }
  }, t2.prototype.getSource = function(t3) {
    t3 = t3 || 0;
    var e2 = this._sourceList[t3];
    if (!e2) {
      var n2 = this._getUpstreamSourceManagers();
      return n2[0] && n2[0].getSource(t3);
    }
    return e2;
  }, t2.prototype.getSharedDataStore = function(t3) {
    var e2 = t3.makeStoreSchema();
    return this._innerGetDataStore(e2.dimensions, t3.source, e2.hash);
  }, t2.prototype._innerGetDataStore = function(t3, e2, n2) {
    var i2 = this._storeList, r2 = i2[0];
    r2 || (r2 = i2[0] = {});
    var o2 = r2[n2];
    if (!o2) {
      var a2 = this._getUpstreamSourceManagers()[0];
      Pf(this._sourceHost) && a2 ? o2 = a2._innerGetDataStore(t3, e2, n2) : (o2 = new Af()).initData(new Gd(e2, t3.length), t3), r2[n2] = o2;
    }
    return o2;
  }, t2.prototype._getUpstreamSourceManagers = function() {
    var t3 = this._sourceHost;
    if (Pf(t3)) {
      var e2 = Xp(t3);
      return e2 ? [e2.getSourceManager()] : [];
    }
    return Z((function(t4) {
      return t4.get("transform", !0) || t4.get("fromTransformResult", !0) ? vo(t4.ecModel, "dataset", { index: t4.get("fromDatasetIndex", !0), id: t4.get("fromDatasetId", !0) }, fo).models : [];
    })(t3), function(t4) {
      return t4.getSourceManager();
    });
  }, t2.prototype._getSourceMetaRawOption = function() {
    var t3, e2, n2, i2 = this._sourceHost;
    if (Pf(i2)) t3 = i2.get("seriesLayoutBy", !0), e2 = i2.get("sourceHeader", !0), n2 = i2.get("dimensions", !0);
    else if (!this._getUpstreamSourceManagers().length) {
      var r2 = i2;
      t3 = r2.get("seriesLayoutBy", !0), e2 = r2.get("sourceHeader", !0), n2 = r2.get("dimensions", !0);
    }
    return { seriesLayoutBy: t3, sourceHeader: e2, dimensions: n2 };
  }, t2;
})();
function Pf(t2) {
  return t2.mainType === "series";
}
function Of(t2) {
  throw new Error(t2);
}
function Rf(t2) {
  var e2 = t2.lineHeight;
  return e2 == null ? "line-height:1" : "line-height:" + Jt(e2 + "") + "px";
}
function Nf(t2, e2) {
  var n2 = t2.color || wp.color.tertiary, i2 = t2.fontSize || 12, r2 = t2.fontWeight || "400", o2 = t2.color || wp.color.secondary, a2 = t2.fontSize || 14, s2 = t2.fontWeight || "900";
  return e2 === "html" ? { nameStyle: "font-size:" + Jt(i2 + "") + "px;color:" + Jt(n2) + ";font-weight:" + Jt(r2 + ""), valueStyle: "font-size:" + Jt(a2 + "") + "px;color:" + Jt(o2) + ";font-weight:" + Jt(s2 + "") } : { nameStyle: { fontSize: i2, fill: n2, fontWeight: r2 }, valueStyle: { fontSize: a2, fill: o2, fontWeight: s2 } };
}
var zf = [0, 10, 20, 30], Bf = ["", `
`, `

`, `


`];
function Ef(t2, e2) {
  return e2.type = t2, e2;
}
function Ff(t2) {
  return t2.type === "section";
}
function Vf(t2) {
  return Ff(t2) ? Wf : Gf;
}
function Hf(t2) {
  if (Ff(t2)) {
    var e2 = 0, n2 = t2.blocks.length, i2 = n2 > 1 || n2 > 0 && !t2.noHeader;
    return Y(t2.blocks, function(t3) {
      var n3 = Hf(t3);
      n3 >= e2 && (e2 = n3 + +(i2 && (!n3 || Ff(t3) && !t3.noHeader)));
    }), e2;
  }
  return 0;
}
function Wf(t2, e2, n2, i2) {
  var r2, o2 = e2.noHeader, a2 = (r2 = Hf(e2), { html: zf[r2], richText: Bf[r2] }), s2 = [], l2 = e2.blocks || [];
  gt(!l2 || J(l2)), l2 = l2 || [];
  var u2 = t2.orderMode;
  if (e2.sortBlocks && u2) {
    l2 = l2.slice();
    var h2 = { valueAsc: "asc", valueDesc: "desc" };
    if (kt(h2, u2)) {
      var c2 = new hf(h2[u2], null);
      l2.sort(function(t3, e3) {
        return c2.evaluate(t3.sortParam, e3.sortParam);
      });
    } else u2 === "seriesDesc" && l2.reverse();
  }
  Y(l2, function(n3, r3) {
    var o3 = e2.valueFormatter, l3 = Vf(n3)(o3 ? H(H({}, t2), { valueFormatter: o3 }) : t2, n3, r3 > 0 ? a2.html : 0, i2);
    l3 != null && s2.push(l3);
  });
  var p2 = t2.renderMode === "richText" ? s2.join(a2.richText) : Xf(i2, s2.join(""), o2 ? n2 : a2.html);
  if (o2) return p2;
  var d2 = jc(e2.header, "ordinal", t2.useUTC), f2 = Nf(i2, t2.renderMode).nameStyle, g2 = Rf(i2);
  return t2.renderMode === "richText" ? Yf(t2, d2, f2) + a2.richText + p2 : Xf(i2, '<div style="' + f2 + ";" + g2 + ';">' + Jt(d2) + "</div>" + p2, n2);
}
function Gf(t2, e2, n2, i2) {
  var r2 = t2.renderMode, o2 = e2.noName, a2 = e2.noValue, s2 = !e2.markerType, l2 = e2.name, u2 = t2.useUTC, h2 = e2.valueFormatter || t2.valueFormatter || function(t3) {
    return Z(t3 = J(t3) ? t3 : [t3], function(t4, e3) {
      return jc(t4, J(d2) ? d2[e3] : d2, u2);
    });
  };
  if (!o2 || !a2) {
    var c2 = s2 ? "" : t2.markupStyleCreator.makeTooltipMarker(e2.markerType, e2.markerColor || wp.color.secondary, r2), p2 = o2 ? "" : jc(l2, "ordinal", u2), d2 = e2.valueType, f2 = a2 ? [] : h2(e2.value, e2.dataIndex), g2 = !s2 || !o2, v2 = !s2 && o2, y2 = Nf(i2, r2), m2 = y2.nameStyle, _2 = y2.valueStyle;
    return r2 === "richText" ? (s2 ? "" : c2) + (o2 ? "" : Yf(t2, p2, m2)) + (a2 ? "" : (function(t3, e3, n3, i3, r3) {
      var o3 = [r3], a3 = i3 ? 10 : 20;
      return n3 && o3.push({ padding: [0, 0, 0, a3], align: "right" }), t3.markupStyleCreator.wrapRichTextStyle(J(e3) ? e3.join("  ") : e3, o3);
    })(t2, f2, g2, v2, _2)) : Xf(i2, (s2 ? "" : c2) + (o2 ? "" : (function(t3, e3, n3) {
      return '<span style="' + n3 + ";" + (e3 ? "margin-left:2px" : "") + '">' + Jt(t3) + "</span>";
    })(p2, !s2, m2)) + (a2 ? "" : (function(t3, e3, n3, i3) {
      var r3 = n3 ? "10px" : "20px", o3 = e3 ? "float:right;margin-left:" + r3 : "";
      return t3 = J(t3) ? t3 : [t3], '<span style="' + o3 + ";" + i3 + '">' + Z(t3, function(t4) {
        return Jt(t4);
      }).join("&nbsp;&nbsp;") + "</span>";
    })(f2, g2, v2, _2)), n2);
  }
}
function Uf(t2, e2, n2, i2, r2, o2) {
  if (t2) return Vf(t2)({ useUTC: r2, renderMode: n2, orderMode: i2, markupStyleCreator: e2, valueFormatter: t2.valueFormatter }, t2, 0, o2);
}
function Xf(t2, e2, n2) {
  return '<div style="' + ("margin: " + n2 + "px 0 0") + ";" + Rf(t2) + ';">' + e2 + '<div style="clear:both"></div></div>';
}
function Yf(t2, e2, n2) {
  return t2.markupStyleCreator.wrapRichTextStyle(e2, n2);
}
function Zf(t2, e2) {
  var n2 = t2.get("padding");
  return n2 ?? (e2 === "richText" ? [8, 10] : 10);
}
var jf = (function() {
  function t2() {
    this.richTextStyles = {}, this._nextStyleNameId = Ur();
  }
  return t2.prototype._generateStyleName = function() {
    return "__EC_aUTo_" + this._nextStyleNameId++;
  }, t2.prototype.makeTooltipMarker = function(t3, e2, n2) {
    var i2 = n2 === "richText" ? this._generateStyleName() : null, r2 = (function(t4, e3) {
      var n3 = et(t4) ? { color: t4, extraCssText: e3 } : t4 || {}, i3 = n3.color, r3 = n3.type;
      e3 = n3.extraCssText;
      var o2 = n3.renderMode || "html";
      return i3 ? o2 === "html" ? r3 === "subItem" ? '<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:' + Jt(i3) + ";" + (e3 || "") + '"></span>' : '<span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:' + Jt(i3) + ";" + (e3 || "") + '"></span>' : { renderMode: o2, content: "{" + (n3.markerId || "markerX") + "|}  ", style: r3 === "subItem" ? { width: 4, height: 4, borderRadius: 2, backgroundColor: i3 } : { width: 10, height: 10, borderRadius: 5, backgroundColor: i3 } } : "";
    })({ color: e2, type: t3, renderMode: n2, markerId: i2 });
    return et(r2) ? r2 : (this.richTextStyles[i2] = r2.style, r2.content);
  }, t2.prototype.wrapRichTextStyle = function(t3, e2) {
    var n2 = {};
    J(e2) ? Y(e2, function(t4) {
      return H(n2, t4);
    }) : H(n2, e2);
    var i2 = this._generateStyleName();
    return this.richTextStyles[i2] = n2, "{" + i2 + "|" + t3 + "}";
  }, t2;
})();
function qf(t2) {
  var e2, n2, i2, r2, o2 = t2.series, a2 = t2.dataIndex, s2 = t2.multipleSeries, l2 = o2.getData(), u2 = l2.mapDimensionsAll("defaultedTooltip"), h2 = u2.length, c2 = o2.getRawValue(a2), p2 = J(c2), d2 = (function(t3, e3) {
    return Qc(t3.getData().getItemVisual(e3, "style")[t3.visualDrawType]);
  })(o2, a2);
  if (h2 > 1 || p2 && !h2) {
    var f2 = (function(t3, e3, n3, i3, r3) {
      var o3 = e3.getData(), a3 = j(t3, function(t4, e4, n4) {
        var i4 = o3.getDimensionInfo(n4);
        return t4 || i4 && i4.tooltip !== !1 && i4.displayName != null;
      }, !1), s3 = [], l3 = [], u3 = [];
      function h3(t4, e4) {
        var n4 = o3.getDimensionInfo(e4);
        n4 && n4.otherDims.tooltip !== !1 && (a3 ? u3.push(Ef("nameValue", { markerType: "subItem", markerColor: r3, name: n4.displayName, value: t4, valueType: n4.type })) : (s3.push(t4), l3.push(n4.type)));
      }
      return i3.length ? Y(i3, function(t4) {
        h3(ef(o3, n3, t4), t4);
      }) : Y(t3, h3), { inlineValues: s3, inlineValueTypes: l3, blocks: u3 };
    })(c2, o2, a2, u2, d2);
    e2 = f2.inlineValues, n2 = f2.inlineValueTypes, i2 = f2.blocks, r2 = f2.inlineValues[0];
  } else if (h2) {
    var g2 = l2.getDimensionInfo(u2[0]);
    r2 = e2 = ef(l2, a2, u2[0]), n2 = g2.type;
  } else r2 = e2 = p2 ? c2[0] : c2;
  var v2 = ao(o2), y2 = v2 && o2.name || "", m2 = l2.getName(a2), _2 = s2 ? y2 : m2;
  return Ef("section", { header: y2, noHeader: s2 || !v2, sortParam: r2, blocks: [Ef("nameValue", { markerType: "item", markerColor: d2, name: _2, noName: !vt(_2), value: e2, valueType: n2, dataIndex: a2 })].concat(i2 || []) });
}
var Kf = uo();
function $f(t2, e2) {
  return t2.getName(e2) || t2.getId(e2);
}
var Qf = (function(t2) {
  function e2() {
    var e3 = t2 !== null && t2.apply(this, arguments) || this;
    return e3._selectedDataIndicesMap = {}, e3;
  }
  var n2;
  return _(e2, t2), e2.prototype.init = function(t3, e3, n3) {
    this.seriesIndex = this.componentIndex, this.dataTask = af({ count: tg, reset: eg }), this.dataTask.context = { model: this }, this.mergeDefaultAndTheme(t3, n3), (Kf(this).sourceManager = new Lf(this)).prepareSource();
    var i2 = this.getInitialData(t3, n3);
    ig(i2, this), this.dataTask.context.data = i2, Kf(this).dataBeforeProcessed = i2, Jf(this), this._initSelectedMapFromData(i2);
  }, e2.prototype.mergeDefaultAndTheme = function(t3, e3) {
    var n3 = yp(this), i2 = n3 ? _p(t3) : {}, r2 = this.subType;
    bp.hasClass(r2) && (r2 += "Series"), V(t3, e3.getTheme().get(this.subType)), V(t3, this.getDefaultOption()), Qr(t3, "label", ["show"]), this.fillDataTextStyle(t3.data), n3 && mp(t3, i2, n3);
  }, e2.prototype.mergeOption = function(t3, e3) {
    t3 = V(this.option, t3, !0), this.fillDataTextStyle(t3.data);
    var n3 = yp(this);
    n3 && mp(this.option, t3, n3);
    var i2 = Kf(this).sourceManager;
    i2.dirty(), i2.prepareSource();
    var r2 = this.getInitialData(t3, e3);
    ig(r2, this), this.dataTask.dirty(), this.dataTask.context.data = r2, Kf(this).dataBeforeProcessed = r2, Jf(this), this._initSelectedMapFromData(r2);
  }, e2.prototype.fillDataTextStyle = function(t3) {
    if (t3 && !at(t3)) for (var e3 = ["show"], n3 = 0; n3 < t3.length; n3++) t3[n3] && t3[n3].label && Qr(t3[n3], "label", e3);
  }, e2.prototype.getInitialData = function(t3, e3) {
  }, e2.prototype.appendData = function(t3) {
    this.getRawData().appendData(t3.data);
  }, e2.prototype.getData = function(t3) {
    var e3 = og(this);
    if (e3) {
      var n3 = e3.context.data;
      return t3 != null && n3.getLinkedData ? n3.getLinkedData(t3) : n3;
    }
    return Kf(this).data;
  }, e2.prototype.getAllData = function() {
    var t3 = this.getData();
    return t3 && t3.getLinkedDataAll ? t3.getLinkedDataAll() : [{ data: t3 }];
  }, e2.prototype.setData = function(t3) {
    var e3 = og(this);
    if (e3) {
      var n3 = e3.context;
      n3.outputData = t3, e3 !== this.dataTask && (n3.data = t3);
    }
    Kf(this).data = t3;
  }, e2.prototype.getEncode = function() {
    var t3 = this.get("encode", !0);
    if (t3) return St(t3);
  }, e2.prototype.getSourceManager = function() {
    return Kf(this).sourceManager;
  }, e2.prototype.getSource = function() {
    return this.getSourceManager().getSource();
  }, e2.prototype.getRawData = function() {
    return Kf(this).dataBeforeProcessed;
  }, e2.prototype.getColorBy = function() {
    return this.get("colorBy") || "series";
  }, e2.prototype.isColorBySeries = function() {
    return this.getColorBy() === "series";
  }, e2.prototype.getBaseAxis = function() {
    var t3 = this.coordinateSystem;
    return t3 && t3.getBaseAxis && t3.getBaseAxis();
  }, e2.prototype.indicesOfNearest = function(t3, e3, n3, i2) {
    var r2 = this.getData(), o2 = this.coordinateSystem, a2 = o2 && o2.getAxis(t3);
    if (!o2 || !a2) return [];
    var s2 = a2.dataToCoord(n3);
    i2 == null && (i2 = 1 / 0);
    var l2 = [], u2 = 1 / 0, h2 = -1, c2 = 0;
    return r2.each(e3, function(t4, e4) {
      var n4 = a2.dataToCoord(t4), r3 = s2 - n4, o3 = Math.abs(r3);
      o3 <= i2 && ((o3 < u2 || o3 === u2 && r3 >= 0 && h2 < 0) && (u2 = o3, h2 = r3, c2 = 0), r3 === h2 && (l2[c2++] = e4));
    }), l2.length = c2, l2;
  }, e2.prototype.formatTooltip = function(t3, e3, n3) {
    return qf({ series: this, dataIndex: t3, multipleSeries: e3 });
  }, e2.prototype.isAnimationEnabled = function() {
    var t3 = this.ecModel;
    if (b.node && (!t3 || !t3.ssr)) return !1;
    var e3 = this.getShallow("animation");
    return e3 && this.getData().count() > this.getShallow("animationThreshold") && (e3 = !1), !!e3;
  }, e2.prototype.restoreData = function() {
    this.dataTask.dirty();
  }, e2.prototype.getColorFromPalette = function(t3, e3, n3) {
    var i2 = this.ecModel, r2 = Qp.prototype.getColorFromPalette.call(this, t3, e3, n3);
    return r2 || (r2 = i2.getColorFromPalette(t3, e3, n3)), r2;
  }, e2.prototype.coordDimToDataDim = function(t3) {
    return this.getRawData().mapDimensionsAll(t3);
  }, e2.prototype.getProgressive = function() {
    return this.get("progressive");
  }, e2.prototype.getProgressiveThreshold = function() {
    return this.get("progressiveThreshold");
  }, e2.prototype.select = function(t3, e3) {
    this._innerSelect(this.getData(e3), t3);
  }, e2.prototype.unselect = function(t3, e3) {
    var n3 = this.option.selectedMap;
    if (n3) {
      var i2 = this.option.selectedMode, r2 = this.getData(e3);
      if (i2 === "series" || n3 === "all") return this.option.selectedMap = {}, void (this._selectedDataIndicesMap = {});
      for (var o2 = 0; o2 < t3.length; o2++) {
        var a2 = $f(r2, t3[o2]);
        n3[a2] = !1, this._selectedDataIndicesMap[a2] = -1;
      }
    }
  }, e2.prototype.toggleSelect = function(t3, e3) {
    for (var n3 = [], i2 = 0; i2 < t3.length; i2++) n3[0] = t3[i2], this.isSelected(t3[i2], e3) ? this.unselect(n3, e3) : this.select(n3, e3);
  }, e2.prototype.getSelectedDataIndices = function() {
    if (this.option.selectedMap === "all") return [].slice.call(this.getData().getIndices());
    for (var t3 = this._selectedDataIndicesMap, e3 = K(t3), n3 = [], i2 = 0; i2 < e3.length; i2++) {
      var r2 = t3[e3[i2]];
      r2 >= 0 && n3.push(r2);
    }
    return n3;
  }, e2.prototype.isSelected = function(t3, e3) {
    var n3 = this.option.selectedMap;
    if (!n3) return !1;
    var i2 = this.getData(e3);
    return (n3 === "all" || n3[$f(i2, t3)]) && !i2.getItemModel(t3).get(["select", "disabled"]);
  }, e2.prototype.isUniversalTransitionEnabled = function() {
    if (this.__universalTransitionEnabled) return !0;
    var t3 = this.option.universalTransition;
    return !!t3 && (t3 === !0 || t3 && t3.enabled);
  }, e2.prototype._innerSelect = function(t3, e3) {
    var n3, i2, r2 = this.option, o2 = r2.selectedMode, a2 = e3.length;
    if (o2 && a2) {
      if (o2 === "series") r2.selectedMap = "all";
      else if (o2 === "multiple") {
        rt(r2.selectedMap) || (r2.selectedMap = {});
        for (var s2 = r2.selectedMap, l2 = 0; l2 < a2; l2++) {
          var u2 = e3[l2];
          s2[c2 = $f(t3, u2)] = !0, this._selectedDataIndicesMap[c2] = t3.getRawIndex(u2);
        }
      } else if (o2 === "single" || o2 === !0) {
        var h2 = e3[a2 - 1], c2 = $f(t3, h2);
        r2.selectedMap = ((n3 = {})[c2] = !0, n3), this._selectedDataIndicesMap = ((i2 = {})[c2] = t3.getRawIndex(h2), i2);
      }
    }
  }, e2.prototype._initSelectedMapFromData = function(t3) {
    if (!this.option.selectedMap) {
      var e3 = [];
      t3.hasItemOption && t3.each(function(n3) {
        var i2 = t3.getRawDataItem(n3);
        i2 && i2.selected && e3.push(n3);
      }), e3.length > 0 && this._innerSelect(t3, e3);
    }
  }, e2.registerClass = function(t3) {
    return bp.registerClass(t3);
  }, e2.protoInitialize = ((n2 = e2.prototype).type = "series.__base__", n2.seriesIndex = 0, n2.ignoreStyleOnData = !1, n2.hasSymbolVisual = !1, n2.defaultSymbol = "circle", n2.visualStyleAccessPath = "itemStyle", void (n2.visualDrawType = "fill")), e2;
})(bp);
function Jf(t2) {
  var e2 = t2.name;
  ao(t2) || (t2.name = (function(t3) {
    var e3 = t3.getRawData(), n2 = e3.mapDimensionsAll("seriesName"), i2 = [];
    return Y(n2, function(t4) {
      var n3 = e3.getDimensionInfo(t4);
      n3.displayName && i2.push(n3.displayName);
    }), i2.join(" ");
  })(t2) || e2);
}
function tg(t2) {
  return t2.model.getRawData().count();
}
function eg(t2) {
  var e2 = t2.model;
  return e2.setData(e2.getRawData().cloneShallow()), ng;
}
function ng(t2, e2) {
  e2.outputData && t2.end > e2.outputData.count() && e2.model.getRawData().cloneShallow(e2.outputData);
}
function ig(t2, e2) {
  Y((function(t3, e3) {
    for (var n2 = new t3.constructor(t3.length + e3.length), i2 = 0; i2 < t3.length; i2++) n2[i2] = t3[i2];
    var r2 = t3.length;
    for (i2 = 0; i2 < e3.length; i2++) n2[i2 + r2] = e3[i2];
    return n2;
  })(t2.CHANGABLE_METHODS, t2.DOWNSAMPLE_METHODS), function(n2) {
    t2.wrapMethod(n2, Q(rg, e2));
  });
}
function rg(t2, e2) {
  var n2 = og(t2);
  return n2 && n2.setOutputEnd((e2 || this).count()), e2;
}
function og(t2) {
  var e2 = (t2.ecModel || {}).scheduler, n2 = e2 && e2.getPipeline(t2.uid);
  if (n2) {
    var i2 = n2.currentTask;
    if (i2) {
      var r2 = i2.agentStubMap;
      r2 && (i2 = r2.get(t2.uid));
    }
    return i2;
  }
}
U(Qf, rf), U(Qf, Qp), wo(Qf, bp);
var ag = (function() {
  function t2() {
    this.group = new xr(), this.uid = ic("viewComponent");
  }
  return t2.prototype.init = function(t3, e2) {
  }, t2.prototype.render = function(t3, e2, n2, i2) {
  }, t2.prototype.dispose = function(t3, e2) {
  }, t2.prototype.updateView = function(t3, e2, n2, i2) {
  }, t2.prototype.updateLayout = function(t3, e2, n2, i2) {
  }, t2.prototype.updateVisual = function(t3, e2, n2, i2) {
  }, t2.prototype.toggleBlurSeries = function(t3, e2, n2) {
  }, t2.prototype.eachRendered = function(t3) {
    var e2 = this.group;
    e2 && e2.traverse(t3);
  }, t2;
})();
function sg() {
  var t2 = uo();
  return function(e2) {
    var n2 = t2(e2), i2 = e2.pipelineContext, r2 = !!n2.large, o2 = !!n2.progressiveRender, a2 = n2.large = !(!i2 || !i2.large), s2 = n2.progressiveRender = !(!i2 || !i2.progressiveRender);
    return !(r2 === a2 && o2 === s2) && "reset";
  };
}
bo(ag), ko(ag);
var lg = uo(), ug = sg(), hg = (function() {
  function t2() {
    this.group = new xr(), this.uid = ic("viewChart"), this.renderTask = af({ plan: dg, reset: fg }), this.renderTask.context = { view: this };
  }
  return t2.prototype.init = function(t3, e2) {
  }, t2.prototype.render = function(t3, e2, n2, i2) {
  }, t2.prototype.highlight = function(t3, e2, n2, i2) {
    var r2 = t3.getData(i2 && i2.dataType);
    r2 && pg(r2, i2, "emphasis");
  }, t2.prototype.downplay = function(t3, e2, n2, i2) {
    var r2 = t3.getData(i2 && i2.dataType);
    r2 && pg(r2, i2, "normal");
  }, t2.prototype.remove = function(t3, e2) {
    this.group.removeAll();
  }, t2.prototype.dispose = function(t3, e2) {
  }, t2.prototype.updateView = function(t3, e2, n2, i2) {
    this.render(t3, e2, n2, i2);
  }, t2.prototype.updateLayout = function(t3, e2, n2, i2) {
    this.render(t3, e2, n2, i2);
  }, t2.prototype.updateVisual = function(t3, e2, n2, i2) {
    this.render(t3, e2, n2, i2);
  }, t2.prototype.eachRendered = function(t3) {
    wh(this.group, t3);
  }, t2.markUpdateMethod = function(t3, e2) {
    lg(t3).updateMethod = e2;
  }, t2.protoInitialize = void (t2.prototype.type = "chart"), t2;
})();
function cg(t2, e2, n2) {
  t2 && kl(t2) && (e2 === "emphasis" ? sl : ll)(t2, n2);
}
function pg(t2, e2, n2) {
  var i2 = lo(t2, e2), r2 = e2 && e2.highlightKey != null ? (function(t3) {
    var e3 = Ns[t3];
    return e3 == null && Rs <= 32 && (e3 = Ns[t3] = Rs++), e3;
  })(e2.highlightKey) : null;
  i2 != null ? Y($r(i2), function(e3) {
    cg(t2.getItemGraphicEl(e3), n2, r2);
  }) : t2.eachItemGraphicEl(function(t3) {
    cg(t3, n2, r2);
  });
}
function dg(t2) {
  return ug(t2.model);
}
function fg(t2) {
  var e2 = t2.model, n2 = t2.ecModel, i2 = t2.api, r2 = t2.payload, o2 = e2.pipelineContext.progressiveRender, a2 = t2.view, s2 = r2 && lg(r2).updateMethod, l2 = o2 ? "incrementalPrepareRender" : s2 && a2[s2] ? s2 : "render";
  return l2 !== "render" && a2[l2](e2, n2, i2, r2), gg[l2];
}
bo(hg), ko(hg);
var gg = { incrementalPrepareRender: { progress: function(t2, e2) {
  e2.view.incrementalRender(t2, e2.model, e2.ecModel, e2.api, e2.payload);
} }, render: { forceFirstProgress: !0, progress: function(t2, e2) {
  e2.view.render(e2.model, e2.ecModel, e2.api, e2.payload);
} } }, vg = "\0__throttleOriginMethod", yg = "\0__throttleRate", mg = "\0__throttleType";
function _g(t2, e2, n2) {
  var i2, r2, o2, a2, s2, l2 = 0, u2 = 0, h2 = null;
  function c2() {
    u2 = (/* @__PURE__ */ new Date()).getTime(), h2 = null, t2.apply(o2, a2 || []);
  }
  e2 = e2 || 0;
  var p2 = function() {
    for (var t3 = [], p3 = 0; p3 < arguments.length; p3++) t3[p3] = arguments[p3];
    i2 = (/* @__PURE__ */ new Date()).getTime(), o2 = this, a2 = t3;
    var d2 = s2 || e2, f2 = s2 || n2;
    s2 = null, r2 = i2 - (f2 ? l2 : u2) - d2, clearTimeout(h2), f2 ? h2 = setTimeout(c2, d2) : r2 >= 0 ? c2() : h2 = setTimeout(c2, -r2), l2 = i2;
  };
  return p2.clear = function() {
    h2 && (clearTimeout(h2), h2 = null);
  }, p2.debounceNextCall = function(t3) {
    s2 = t3;
  }, p2;
}
function xg(t2, e2, n2, i2) {
  var r2 = t2[e2];
  if (r2) {
    var o2 = r2[vg] || r2, a2 = r2[mg];
    if (r2[yg] !== n2 || a2 !== i2) {
      if (n2 == null || !i2) return t2[e2] = o2;
      (r2 = t2[e2] = _g(o2, n2, i2 === "debounce"))[vg] = o2, r2[mg] = i2, r2[yg] = n2;
    }
    return r2;
  }
}
function bg(t2, e2) {
  var n2 = t2[e2];
  n2 && n2[vg] && (n2.clear && n2.clear(), t2[e2] = n2[vg]);
}
var wg = uo(), Sg = { itemStyle: Co(Qh, !0), lineStyle: Co(qh, !0) }, Mg = { lineStyle: "stroke", itemStyle: "fill" };
function Tg(t2, e2) {
  var n2 = t2.visualStyleMapper || Sg[e2];
  return n2 || Sg.itemStyle;
}
function kg(t2, e2) {
  var n2 = t2.visualDrawType || Mg[e2];
  return n2 || "fill";
}
var Cg = { createOnAllSeries: !0, performRawSeries: !0, reset: function(t2, e2) {
  var n2 = t2.getData(), i2 = t2.visualStyleAccessPath || "itemStyle", r2 = t2.getModel(i2), o2 = Tg(t2, i2)(r2), a2 = r2.getShallow("decal");
  a2 && (n2.setVisual("decal", a2), a2.dirty = !0);
  var s2 = kg(t2, i2), l2 = o2[s2], u2 = tt(l2) ? l2 : null, h2 = o2.fill === "auto" || o2.stroke === "auto";
  if (!o2[s2] || u2 || h2) {
    var c2 = t2.getColorFromPalette(t2.name, null, e2.getSeriesCount());
    o2[s2] || (o2[s2] = c2, n2.setVisual("colorFromPalette", !0)), o2.fill = o2.fill === "auto" || tt(o2.fill) ? c2 : o2.fill, o2.stroke = o2.stroke === "auto" || tt(o2.stroke) ? c2 : o2.stroke;
  }
  if (n2.setVisual("style", o2), n2.setVisual("drawType", s2), !e2.isSeriesFiltered(t2) && u2) return n2.setVisual("colorFromPalette", !1), { dataEach: function(e3, n3) {
    var i3 = t2.getDataParams(n3), r3 = H({}, o2);
    r3[s2] = u2(i3), e3.setItemVisual(n3, "style", r3);
  } };
} }, Ig = new ec(), Dg = { createOnAllSeries: !0, performRawSeries: !0, reset: function(t2, e2) {
  if (!t2.ignoreStyleOnData && !e2.isSeriesFiltered(t2)) {
    var n2 = t2.getData(), i2 = t2.visualStyleAccessPath || "itemStyle", r2 = Tg(t2, i2), o2 = n2.getVisual("drawType");
    return { dataEach: n2.hasItemOption ? function(t3, e3) {
      var n3 = t3.getRawDataItem(e3);
      if (n3 && n3[i2]) {
        Ig.option = n3[i2];
        var a2 = r2(Ig);
        H(t3.ensureUniqueItemVisual(e3, "style"), a2), Ig.option.decal && (t3.setItemVisual(e3, "decal", Ig.option.decal), Ig.option.decal.dirty = !0), o2 in a2 && t3.setItemVisual(e3, "colorFromPalette", !1);
      }
    } : null };
  }
} }, Ag = { performRawSeries: !0, overallReset: function(t2) {
  var e2 = St();
  t2.eachSeries(function(t3) {
    var n2 = t3.getColorBy();
    if (!t3.isColorBySeries()) {
      var i2 = t3.type + "-" + n2, r2 = e2.get(i2);
      r2 || (r2 = {}, e2.set(i2, r2)), wg(t3).scope = r2;
    }
  }), t2.eachSeries(function(e3) {
    if (!e3.isColorBySeries() && !t2.isSeriesFiltered(e3)) {
      var n2 = e3.getRawData(), i2 = {}, r2 = e3.getData(), o2 = wg(e3).scope, a2 = e3.visualStyleAccessPath || "itemStyle", s2 = kg(e3, a2);
      r2.each(function(t3) {
        var e4 = r2.getRawIndex(t3);
        i2[e4] = t3;
      }), n2.each(function(t3) {
        var a3 = i2[t3];
        if (r2.getItemVisual(a3, "colorFromPalette")) {
          var l2 = r2.ensureUniqueItemVisual(a3, "style"), u2 = n2.getName(t3) || t3 + "", h2 = n2.count();
          l2[s2] = e3.getColorFromPalette(u2, o2, h2);
        }
      });
    }
  });
} }, Lg = Math.PI, Pg = (function() {
  function t2(t3, e2, n2, i2) {
    this._stageTaskMap = St(), this.ecInstance = t3, this.api = e2, n2 = this._dataProcessorHandlers = n2.slice(), i2 = this._visualHandlers = i2.slice(), this._allHandlers = n2.concat(i2);
  }
  return t2.prototype.restoreData = function(t3, e2) {
    t3.restoreData(e2), this._stageTaskMap.each(function(t4) {
      var e3 = t4.overallTask;
      e3 && e3.dirty();
    });
  }, t2.prototype.getPerformArgs = function(t3, e2) {
    if (t3.__pipeline) {
      var n2 = this._pipelineMap.get(t3.__pipeline.id), i2 = n2.context, r2 = !e2 && n2.progressiveEnabled && (!i2 || i2.progressiveRender) && t3.__idxInPipeline > n2.blockIndex ? n2.step : null, o2 = i2 && i2.modDataCount;
      return { step: r2, modBy: o2 != null ? Math.ceil(o2 / r2) : null, modDataCount: o2 };
    }
  }, t2.prototype.getPipeline = function(t3) {
    return this._pipelineMap.get(t3);
  }, t2.prototype.updateStreamModes = function(t3, e2) {
    var n2 = this._pipelineMap.get(t3.uid), i2 = t3.getData().count(), r2 = n2.progressiveEnabled && e2.incrementalPrepareRender && i2 >= n2.threshold, o2 = t3.get("large") && i2 >= t3.get("largeThreshold"), a2 = t3.get("progressiveChunkMode") === "mod" ? i2 : null;
    t3.pipelineContext = n2.context = { progressiveRender: r2, modDataCount: a2, large: o2 };
  }, t2.prototype.restorePipelines = function(t3) {
    var e2 = this, n2 = e2._pipelineMap = St();
    t3.eachSeries(function(t4) {
      var i2 = t4.getProgressive(), r2 = t4.uid;
      n2.set(r2, { id: r2, head: null, tail: null, threshold: t4.getProgressiveThreshold(), progressiveEnabled: i2 && !(t4.preventIncremental && t4.preventIncremental()), blockIndex: -1, step: Math.round(i2 || 700), count: 0 }), e2._pipe(t4, t4.dataTask);
    });
  }, t2.prototype.prepareStageTasks = function() {
    var t3 = this._stageTaskMap, e2 = this.api.getModel(), n2 = this.api;
    Y(this._allHandlers, function(i2) {
      var r2 = t3.get(i2.uid) || t3.set(i2.uid, {});
      gt(!(i2.reset && i2.overallReset), ""), i2.reset && this._createSeriesStageTask(i2, r2, e2, n2), i2.overallReset && this._createOverallStageTask(i2, r2, e2, n2);
    }, this);
  }, t2.prototype.prepareView = function(t3, e2, n2, i2) {
    var r2 = t3.renderTask, o2 = r2.context;
    o2.model = e2, o2.ecModel = n2, o2.api = i2, r2.__block = !t3.incrementalPrepareRender, this._pipe(e2, r2);
  }, t2.prototype.performDataProcessorTasks = function(t3, e2) {
    this._performStageTasks(this._dataProcessorHandlers, t3, e2, { block: !0 });
  }, t2.prototype.performVisualTasks = function(t3, e2, n2) {
    this._performStageTasks(this._visualHandlers, t3, e2, n2);
  }, t2.prototype._performStageTasks = function(t3, e2, n2, i2) {
    i2 = i2 || {};
    var r2 = !1, o2 = this;
    function a2(t4, e3) {
      return t4.setDirty && (!t4.dirtyMap || t4.dirtyMap.get(e3.__pipeline.id));
    }
    Y(t3, function(t4, s2) {
      if (!i2.visualType || i2.visualType === t4.visualType) {
        var l2 = o2._stageTaskMap.get(t4.uid), u2 = l2.seriesTaskMap, h2 = l2.overallTask;
        if (h2) {
          var c2, p2 = h2.agentStubMap;
          p2.each(function(t5) {
            a2(i2, t5) && (t5.dirty(), c2 = !0);
          }), c2 && h2.dirty(), o2.updatePayload(h2, n2);
          var d2 = o2.getPerformArgs(h2, i2.block);
          p2.each(function(t5) {
            t5.perform(d2);
          }), h2.perform(d2) && (r2 = !0);
        } else u2 && u2.each(function(s3, l3) {
          a2(i2, s3) && s3.dirty();
          var u3 = o2.getPerformArgs(s3, i2.block);
          u3.skip = !t4.performRawSeries && e2.isSeriesFiltered(s3.context.model), o2.updatePayload(s3, n2), s3.perform(u3) && (r2 = !0);
        });
      }
    }), this.unfinished = r2 || this.unfinished;
  }, t2.prototype.performSeriesTasks = function(t3) {
    var e2;
    t3.eachSeries(function(t4) {
      e2 = t4.dataTask.perform() || e2;
    }), this.unfinished = e2 || this.unfinished;
  }, t2.prototype.plan = function() {
    this._pipelineMap.each(function(t3) {
      var e2 = t3.tail;
      do {
        if (e2.__block) {
          t3.blockIndex = e2.__idxInPipeline;
          break;
        }
        e2 = e2.getUpstream();
      } while (e2);
    });
  }, t2.prototype.updatePayload = function(t3, e2) {
    e2 !== "remain" && (t3.context.payload = e2);
  }, t2.prototype._createSeriesStageTask = function(t3, e2, n2, i2) {
    var r2 = this, o2 = e2.seriesTaskMap, a2 = e2.seriesTaskMap = St(), s2 = t3.seriesType, l2 = t3.getTargetSeries;
    function u2(e3) {
      var s3 = e3.uid, l3 = a2.set(s3, o2 && o2.get(s3) || af({ plan: Bg, reset: Eg, count: Hg }));
      l3.context = { model: e3, ecModel: n2, api: i2, useClearVisual: t3.isVisual && !t3.isLayout, plan: t3.plan, reset: t3.reset, scheduler: r2 }, r2._pipe(e3, l3);
    }
    t3.createOnAllSeries ? n2.eachRawSeries(u2) : s2 ? n2.eachRawSeriesByType(s2, u2) : l2 && l2(n2, i2).each(u2);
  }, t2.prototype._createOverallStageTask = function(t3, e2, n2, i2) {
    var r2 = this, o2 = e2.overallTask = e2.overallTask || af({ reset: Og });
    o2.context = { ecModel: n2, api: i2, overallReset: t3.overallReset, scheduler: r2 };
    var a2 = o2.agentStubMap, s2 = o2.agentStubMap = St(), l2 = t3.seriesType, u2 = t3.getTargetSeries, h2 = !0, c2 = !1;
    function p2(t4) {
      var e3 = t4.uid, n3 = s2.set(e3, a2 && a2.get(e3) || (c2 = !0, af({ reset: Rg, onDirty: zg })));
      n3.context = { model: t4, overallProgress: h2 }, n3.agent = o2, n3.__block = h2, r2._pipe(t4, n3);
    }
    gt(!t3.createOnAllSeries, ""), l2 ? n2.eachRawSeriesByType(l2, p2) : u2 ? u2(n2, i2).each(p2) : (h2 = !1, Y(n2.getSeries(), p2)), c2 && o2.dirty();
  }, t2.prototype._pipe = function(t3, e2) {
    var n2 = t3.uid, i2 = this._pipelineMap.get(n2);
    !i2.head && (i2.head = e2), i2.tail && i2.tail.pipe(e2), i2.tail = e2, e2.__idxInPipeline = i2.count++, e2.__pipeline = i2;
  }, t2.wrapStageHandler = function(t3, e2) {
    return tt(t3) && (t3 = { overallReset: t3, seriesType: Wg(t3) }), t3.uid = ic("stageHandler"), e2 && (t3.visualType = e2), t3;
  }, t2;
})();
function Og(t2) {
  t2.overallReset(t2.ecModel, t2.api, t2.payload);
}
function Rg(t2) {
  return t2.overallProgress && Ng;
}
function Ng() {
  this.agent.dirty(), this.getDownstream().dirty();
}
function zg() {
  this.agent && this.agent.dirty();
}
function Bg(t2) {
  return t2.plan ? t2.plan(t2.model, t2.ecModel, t2.api, t2.payload) : null;
}
function Eg(t2) {
  t2.useClearVisual && t2.data.clearAllVisual();
  var e2 = t2.resetDefines = $r(t2.reset(t2.model, t2.ecModel, t2.api, t2.payload));
  return e2.length > 1 ? Z(e2, function(t3, e3) {
    return Vg(e3);
  }) : Fg;
}
var Fg = Vg(0);
function Vg(t2) {
  return function(e2, n2) {
    var i2 = n2.data, r2 = n2.resetDefines[t2];
    if (r2 && r2.dataEach) for (var o2 = e2.start; o2 < e2.end; o2++) r2.dataEach(i2, o2);
    else r2 && r2.progress && r2.progress(e2, i2);
  };
}
function Hg(t2) {
  return t2.data.count();
}
function Wg(t2) {
  Gg = null;
  try {
    t2(Ug, Xg);
  } catch {
  }
  return Gg;
}
var Gg, Ug = {}, Xg = {};
function Yg(t2, e2) {
  for (var n2 in e2.prototype) t2[n2] = Ct;
}
Yg(Ug, td), Yg(Xg, od), Ug.eachSeriesByType = Ug.eachRawSeriesByType = function(t2) {
  Gg = t2;
}, Ug.eachComponent = function(t2) {
  t2.mainType === "series" && t2.subType && (Gg = t2.subType);
};
var Zg, jg = wp.darkColor, qg = jg.background, Kg = function() {
  return { axisLine: { lineStyle: { color: jg.axisLine } }, splitLine: { lineStyle: { color: jg.axisSplitLine } }, splitArea: { areaStyle: { color: [jg.backgroundTint, jg.backgroundTransparent] } }, minorSplitLine: { lineStyle: { color: jg.axisMinorSplitLine } }, axisLabel: { color: jg.axisLabel }, axisName: {} };
}, $g = { label: { color: jg.secondary }, itemStyle: { borderColor: jg.borderTint }, dividerLineStyle: { color: jg.border } }, Qg = { darkMode: !0, color: jg.theme, backgroundColor: qg, axisPointer: { lineStyle: { color: jg.border }, crossStyle: { color: jg.borderShade }, label: { color: jg.tertiary } }, legend: { textStyle: { color: jg.secondary }, pageTextStyle: { color: jg.tertiary } }, textStyle: { color: jg.secondary }, title: { textStyle: { color: jg.primary }, subtextStyle: { color: jg.quaternary } }, toolbox: { iconStyle: { borderColor: jg.accent50 } }, tooltip: { backgroundColor: jg.neutral20, defaultBorderColor: jg.border, textStyle: { color: jg.tertiary } }, dataZoom: { borderColor: jg.accent10, textStyle: { color: jg.tertiary }, brushStyle: { color: jg.backgroundTint }, handleStyle: { color: jg.neutral00, borderColor: jg.accent20 }, moveHandleStyle: { color: jg.accent40 }, emphasis: { handleStyle: { borderColor: jg.accent50 } }, dataBackground: { lineStyle: { color: jg.accent30 }, areaStyle: { color: jg.accent20 } }, selectedDataBackground: { lineStyle: { color: jg.accent50 }, areaStyle: { color: jg.accent30 } } }, visualMap: { textStyle: { color: jg.secondary }, handleStyle: { borderColor: jg.neutral30 } }, timeline: { lineStyle: { color: jg.accent10 }, label: { color: jg.tertiary }, controlStyle: { color: jg.accent30, borderColor: jg.accent30 } }, calendar: { itemStyle: { color: jg.neutral00, borderColor: jg.neutral20 }, dayLabel: { color: jg.tertiary }, monthLabel: { color: jg.secondary }, yearLabel: { color: jg.secondary } }, matrix: { x: $g, y: $g, backgroundColor: { borderColor: jg.axisLine }, body: { itemStyle: { borderColor: jg.borderTint } } }, timeAxis: Kg(), logAxis: Kg(), valueAxis: Kg(), categoryAxis: Kg(), line: { symbol: "circle" }, graph: { color: jg.theme }, gauge: { title: { color: jg.secondary }, axisLine: { lineStyle: { color: [[1, jg.neutral05]] } }, axisLabel: { color: jg.axisLabel }, detail: { color: jg.primary } }, candlestick: { itemStyle: { color: "#f64e56", color0: "#54ea92", borderColor: "#f64e56", borderColor0: "#54ea92" } }, funnel: { itemStyle: { borderColor: jg.background } }, radar: (Zg = Kg(), Zg.axisName = { color: jg.axisLabel }, Zg.axisLine.lineStyle.color = jg.neutral20, Zg), treemap: { breadcrumb: { itemStyle: { color: jg.neutral20, textStyle: { color: jg.secondary } }, emphasis: { itemStyle: { color: jg.neutral30 } } } }, sunburst: { itemStyle: { borderColor: jg.background } }, map: { itemStyle: { borderColor: jg.border, areaColor: jg.neutral10 }, label: { color: jg.tertiary }, emphasis: { label: { color: jg.primary }, itemStyle: { areaColor: jg.highlight } }, select: { label: { color: jg.primary }, itemStyle: { areaColor: jg.highlight } } }, geo: { itemStyle: { borderColor: jg.border, areaColor: jg.neutral10 }, emphasis: { label: { color: jg.primary }, itemStyle: { areaColor: jg.highlight } }, select: { label: { color: jg.primary }, itemStyle: { color: jg.highlight } } } };
Qg.categoryAxis.splitLine.show = !1;
var Jg = (function() {
  function t2() {
  }
  return t2.prototype.normalizeQuery = function(t3) {
    var e2 = {}, n2 = {}, i2 = {};
    if (et(t3)) {
      var r2 = xo(t3);
      e2.mainType = r2.main || null, e2.subType = r2.sub || null;
    } else {
      var o2 = ["Index", "Name", "Id"], a2 = { name: 1, dataIndex: 1, dataType: 1 };
      Y(t3, function(t4, r3) {
        for (var s2 = !1, l2 = 0; l2 < o2.length; l2++) {
          var u2 = o2[l2], h2 = r3.lastIndexOf(u2);
          if (h2 > 0 && h2 === r3.length - u2.length) {
            var c2 = r3.slice(0, h2);
            c2 !== "data" && (e2.mainType = c2, e2[u2.toLowerCase()] = t4, s2 = !0);
          }
        }
        a2.hasOwnProperty(r3) && (n2[r3] = t4, s2 = !0), s2 || (i2[r3] = t4);
      });
    }
    return { cptQuery: e2, dataQuery: n2, otherQuery: i2 };
  }, t2.prototype.filter = function(t3, e2) {
    var n2 = this.eventInfo;
    if (!n2) return !0;
    var i2 = n2.targetEl, r2 = n2.packedEvent, o2 = n2.model, a2 = n2.view;
    if (!o2 || !a2) return !0;
    var s2 = e2.cptQuery, l2 = e2.dataQuery;
    return u2(s2, o2, "mainType") && u2(s2, o2, "subType") && u2(s2, o2, "index", "componentIndex") && u2(s2, o2, "name") && u2(s2, o2, "id") && u2(l2, r2, "name") && u2(l2, r2, "dataIndex") && u2(l2, r2, "dataType") && (!a2.filterForExposedEvent || a2.filterForExposedEvent(t3, e2.otherQuery, i2, r2));
    function u2(t4, e3, n3, i3) {
      return t4[n3] == null || e3[i3 || n3] === t4[n3];
    }
  }, t2.prototype.afterTrigger = function() {
    this.eventInfo = null;
  }, t2;
})(), tv = ["symbol", "symbolSize", "symbolRotate", "symbolOffset"], ev = tv.concat(["symbolKeepAspect"]), nv = { createOnAllSeries: !0, performRawSeries: !0, reset: function(t2, e2) {
  var n2 = t2.getData();
  if (t2.legendIcon && n2.setVisual("legendIcon", t2.legendIcon), t2.hasSymbolVisual) {
    for (var i2 = {}, r2 = {}, o2 = !1, a2 = 0; a2 < tv.length; a2++) {
      var s2 = tv[a2], l2 = t2.get(s2);
      tt(l2) ? (o2 = !0, r2[s2] = l2) : i2[s2] = l2;
    }
    if (i2.symbol = i2.symbol || t2.defaultSymbol, n2.setVisual(H({ legendIcon: t2.legendIcon || i2.symbol, symbolKeepAspect: t2.get("symbolKeepAspect") }, i2)), !e2.isSeriesFiltered(t2)) {
      var u2 = K(r2);
      return { dataEach: o2 ? function(e3, n3) {
        for (var i3 = t2.getRawValue(n3), o3 = t2.getDataParams(n3), a3 = 0; a3 < u2.length; a3++) {
          var s3 = u2[a3];
          e3.setItemVisual(n3, s3, r2[s3](i3, o3));
        }
      } : null };
    }
  }
} }, iv = { createOnAllSeries: !0, performRawSeries: !0, reset: function(t2, e2) {
  if (t2.hasSymbolVisual && !e2.isSeriesFiltered(t2)) return { dataEach: t2.getData().hasItemOption ? function(t3, e3) {
    for (var n2 = t3.getItemModel(e3), i2 = 0; i2 < ev.length; i2++) {
      var r2 = ev[i2], o2 = n2.getShallow(r2, !0);
      o2 != null && t3.setItemVisual(e3, r2, o2);
    }
  } : null };
} };
function rv(t2, e2) {
  switch (e2) {
    case "color":
      return t2.getVisual("style")[t2.getVisual("drawType")];
    case "opacity":
      return t2.getVisual("style").opacity;
    case "symbol":
    case "symbolSize":
    case "liftZ":
      return t2.getVisual(e2);
  }
}
function ov(t2, e2, n2, i2, r2) {
  var o2 = t2 + e2;
  n2.isSilent(o2) || i2.eachComponent({ mainType: "series", subType: "pie" }, function(t3) {
    for (var e3 = t3.seriesIndex, i3 = t3.option.selectedMap, a2 = r2.selected, s2 = 0; s2 < a2.length; s2++) if (a2[s2].seriesIndex === e3) {
      var l2 = t3.getData(), u2 = lo(l2, r2.fromActionPayload);
      n2.trigger(o2, { type: o2, seriesId: t3.id, name: J(u2) ? l2.getName(u2[0]) : l2.getName(u2), selected: et(i3) ? i3 : H({}, i3) });
    }
  });
}
function av(t2, e2, n2) {
  for (var i2; t2 && (!e2(t2) || (i2 = t2, !n2)); ) t2 = t2.__hostTarget || t2.parent;
  return i2;
}
var sv = Math.round(9 * Math.random()), lv = typeof Object.defineProperty == "function", uv = (function() {
  function t2() {
    this._id = "__ec_inner_" + sv++;
  }
  return t2.prototype.get = function(t3) {
    return this._guard(t3)[this._id];
  }, t2.prototype.set = function(t3, e2) {
    var n2 = this._guard(t3);
    return lv ? Object.defineProperty(n2, this._id, { value: e2, enumerable: !1, configurable: !0 }) : n2[this._id] = e2, this;
  }, t2.prototype.delete = function(t3) {
    return !!this.has(t3) && (delete this._guard(t3)[this._id], !0);
  }, t2.prototype.has = function(t3) {
    return !!this._guard(t3)[this._id];
  }, t2.prototype._guard = function(t3) {
    if (t3 !== Object(t3)) throw TypeError("Value of WeakMap is not a non-null object.");
    return t3;
  }, t2;
})(), hv = os.extend({ type: "triangle", shape: { cx: 0, cy: 0, width: 0, height: 0 }, buildPath: function(t2, e2) {
  var n2 = e2.cx, i2 = e2.cy, r2 = e2.width / 2, o2 = e2.height / 2;
  t2.moveTo(n2, i2 - o2), t2.lineTo(n2 + r2, i2 + o2), t2.lineTo(n2 - r2, i2 + o2), t2.closePath();
} }), cv = os.extend({ type: "diamond", shape: { cx: 0, cy: 0, width: 0, height: 0 }, buildPath: function(t2, e2) {
  var n2 = e2.cx, i2 = e2.cy, r2 = e2.width / 2, o2 = e2.height / 2;
  t2.moveTo(n2, i2 - o2), t2.lineTo(n2 + r2, i2), t2.lineTo(n2, i2 + o2), t2.lineTo(n2 - r2, i2), t2.closePath();
} }), pv = os.extend({ type: "pin", shape: { x: 0, y: 0, width: 0, height: 0 }, buildPath: function(t2, e2) {
  var n2 = e2.x, i2 = e2.y, r2 = e2.width / 5 * 3, o2 = Math.max(r2, e2.height), a2 = r2 / 2, s2 = a2 * a2 / (o2 - a2), l2 = i2 - o2 + a2 + s2, u2 = Math.asin(s2 / a2), h2 = Math.cos(u2) * a2, c2 = Math.sin(u2), p2 = Math.cos(u2), d2 = 0.6 * a2, f2 = 0.7 * a2;
  t2.moveTo(n2 - h2, l2 + s2), t2.arc(n2, l2, a2, Math.PI - u2, 2 * Math.PI + u2), t2.bezierCurveTo(n2 + h2 - c2 * d2, l2 + s2 + p2 * d2, n2, i2 - f2, n2, i2), t2.bezierCurveTo(n2, i2 - f2, n2 - h2 + c2 * d2, l2 + s2 + p2 * d2, n2 - h2, l2 + s2), t2.closePath();
} }), dv = os.extend({ type: "arrow", shape: { x: 0, y: 0, width: 0, height: 0 }, buildPath: function(t2, e2) {
  var n2 = e2.height, i2 = e2.width, r2 = e2.x, o2 = e2.y, a2 = i2 / 3 * 2;
  t2.moveTo(r2, o2), t2.lineTo(r2 + a2, o2 + n2), t2.lineTo(r2, o2 + n2 / 4 * 3), t2.lineTo(r2 - a2, o2 + n2), t2.lineTo(r2, o2), t2.closePath();
} }), fv = { line: function(t2, e2, n2, i2, r2) {
  r2.x1 = t2, r2.y1 = e2 + i2 / 2, r2.x2 = t2 + n2, r2.y2 = e2 + i2 / 2;
}, rect: function(t2, e2, n2, i2, r2) {
  r2.x = t2, r2.y = e2, r2.width = n2, r2.height = i2;
}, roundRect: function(t2, e2, n2, i2, r2) {
  r2.x = t2, r2.y = e2, r2.width = n2, r2.height = i2, r2.r = Math.min(n2, i2) / 4;
}, square: function(t2, e2, n2, i2, r2) {
  var o2 = Math.min(n2, i2);
  r2.x = t2, r2.y = e2, r2.width = o2, r2.height = o2;
}, circle: function(t2, e2, n2, i2, r2) {
  r2.cx = t2 + n2 / 2, r2.cy = e2 + i2 / 2, r2.r = Math.min(n2, i2) / 2;
}, diamond: function(t2, e2, n2, i2, r2) {
  r2.cx = t2 + n2 / 2, r2.cy = e2 + i2 / 2, r2.width = n2, r2.height = i2;
}, pin: function(t2, e2, n2, i2, r2) {
  r2.x = t2 + n2 / 2, r2.y = e2 + i2 / 2, r2.width = n2, r2.height = i2;
}, arrow: function(t2, e2, n2, i2, r2) {
  r2.x = t2 + n2 / 2, r2.y = e2 + i2 / 2, r2.width = n2, r2.height = i2;
}, triangle: function(t2, e2, n2, i2, r2) {
  r2.cx = t2 + n2 / 2, r2.cy = e2 + i2 / 2, r2.width = n2, r2.height = i2;
} }, gv = {};
Y({ line: xu, rect: ys, roundRect: ys, square: ys, circle: Zl, diamond: cv, pin: pv, arrow: dv, triangle: hv }, function(t2, e2) {
  gv[e2] = new t2();
});
var vv = os.extend({ type: "symbol", shape: { symbolType: "", x: 0, y: 0, width: 0, height: 0 }, calculateTextPosition: function(t2, e2, n2) {
  var i2 = lr(t2, e2, n2), r2 = this.shape;
  return r2 && r2.symbolType === "pin" && e2.position === "inside" && (i2.y = n2.y + 0.4 * n2.height), i2;
}, buildPath: function(t2, e2, n2) {
  var i2 = e2.symbolType;
  if (i2 !== "none") {
    var r2 = gv[i2];
    r2 || (r2 = gv[i2 = "rect"]), fv[i2](e2.x, e2.y, e2.width, e2.height, r2.shape), r2.buildPath(t2, r2.shape, n2);
  }
} });
function yv(t2, e2) {
  if (this.type !== "image") {
    var n2 = this.style;
    this.__isEmptyBrush ? (n2.stroke = t2, n2.fill = e2 || wp.color.neutral00, n2.lineWidth = 2) : this.shape.symbolType === "line" ? n2.stroke = t2 : n2.fill = t2, this.markRedraw();
  }
}
function mv(t2, e2, n2, i2, r2, o2, a2) {
  var s2, l2 = t2.indexOf("empty") === 0;
  return l2 && (t2 = t2.substr(5, 1).toLowerCase() + t2.substr(6)), (s2 = t2.indexOf("image://") === 0 ? ih(t2.slice(8), new Oe(e2, n2, i2, r2), a2 ? "center" : "cover") : t2.indexOf("path://") === 0 ? nh(t2.slice(7), {}, new Oe(e2, n2, i2, r2), a2 ? "center" : "cover") : new vv({ shape: { symbolType: t2, x: e2, y: n2, width: i2, height: r2 } })).__isEmptyBrush = l2, s2.setColor = yv, o2 && s2.setColor(o2), s2;
}
function _v(t2) {
  return J(t2) || (t2 = [+t2, +t2]), [t2[0] || 0, t2[1] || 0];
}
function xv(t2, e2) {
  if (t2 != null) return J(t2) || (t2 = [t2, t2]), [Ar(t2[0], e2[0]) || 0, Ar(ct(t2[1], t2[0]), e2[1]) || 0];
}
function bv(t2) {
  return isFinite(t2);
}
function wv(t2, e2, n2) {
  for (var i2 = e2.type === "radial" ? (function(t3, e3, n3) {
    var i3 = n3.width, r3 = n3.height, o3 = Math.min(i3, r3), a2 = e3.x == null ? 0.5 : e3.x, s2 = e3.y == null ? 0.5 : e3.y, l2 = e3.r == null ? 0.5 : e3.r;
    return e3.global || (a2 = a2 * i3 + n3.x, s2 = s2 * r3 + n3.y, l2 *= o3), a2 = bv(a2) ? a2 : 0.5, s2 = bv(s2) ? s2 : 0.5, l2 = l2 >= 0 && bv(l2) ? l2 : 0.5, t3.createRadialGradient(a2, s2, 0, a2, s2, l2);
  })(t2, e2, n2) : (function(t3, e3, n3) {
    var i3 = e3.x == null ? 0 : e3.x, r3 = e3.x2 == null ? 1 : e3.x2, o3 = e3.y == null ? 0 : e3.y, a2 = e3.y2 == null ? 0 : e3.y2;
    return e3.global || (i3 = i3 * n3.width + n3.x, r3 = r3 * n3.width + n3.x, o3 = o3 * n3.height + n3.y, a2 = a2 * n3.height + n3.y), i3 = bv(i3) ? i3 : 0, r3 = bv(r3) ? r3 : 1, o3 = bv(o3) ? o3 : 0, a2 = bv(a2) ? a2 : 0, t3.createLinearGradient(i3, o3, r3, a2);
  })(t2, e2, n2), r2 = e2.colorStops, o2 = 0; o2 < r2.length; o2++) i2.addColorStop(r2[o2].offset, r2[o2].color);
  return i2;
}
function Sv(t2) {
  return parseInt(t2, 10);
}
function Mv(t2, e2, n2) {
  var i2 = ["width", "height"][e2], r2 = ["clientWidth", "clientHeight"][e2], o2 = ["paddingLeft", "paddingTop"][e2], a2 = ["paddingRight", "paddingBottom"][e2];
  if (n2[i2] != null && n2[i2] !== "auto") return parseFloat(n2[i2]);
  var s2 = document.defaultView.getComputedStyle(t2);
  return (t2[r2] || Sv(s2[i2]) || Sv(t2.style[i2])) - (Sv(s2[o2]) || 0) - (Sv(s2[a2]) || 0) | 0;
}
function Tv(t2) {
  var e2, n2, i2 = t2.style, r2 = i2.lineDash && i2.lineWidth > 0 && (e2 = i2.lineDash, n2 = i2.lineWidth, e2 && e2 !== "solid" && n2 > 0 ? e2 === "dashed" ? [4 * n2, 2 * n2] : e2 === "dotted" ? [n2] : it(e2) ? [e2] : J(e2) ? e2 : null : null), o2 = i2.lineDashOffset;
  if (r2) {
    var a2 = i2.strokeNoScale && t2.getLineScale ? t2.getLineScale() : 1;
    a2 && a2 !== 1 && (r2 = Z(r2, function(t3) {
      return t3 / a2;
    }), o2 /= a2);
  }
  return [r2, o2];
}
var kv = new Ea(!0);
function Cv(t2) {
  var e2 = t2.stroke;
  return !(e2 == null || e2 === "none" || !(t2.lineWidth > 0));
}
function Iv(t2) {
  return typeof t2 == "string" && t2 !== "none";
}
function Dv(t2) {
  var e2 = t2.fill;
  return e2 != null && e2 !== "none";
}
function Av(t2, e2) {
  if (e2.fillOpacity != null && e2.fillOpacity !== 1) {
    var n2 = t2.globalAlpha;
    t2.globalAlpha = e2.fillOpacity * e2.opacity, t2.fill(), t2.globalAlpha = n2;
  } else t2.fill();
}
function Lv(t2, e2) {
  if (e2.strokeOpacity != null && e2.strokeOpacity !== 1) {
    var n2 = t2.globalAlpha;
    t2.globalAlpha = e2.strokeOpacity * e2.opacity, t2.stroke(), t2.globalAlpha = n2;
  } else t2.stroke();
}
function Pv(t2, e2, n2) {
  var i2 = Po(e2.image, e2.__image, n2);
  if (Ro(i2)) {
    var r2 = t2.createPattern(i2, e2.repeat || "repeat");
    if (typeof DOMMatrix == "function" && r2 && r2.setTransform) {
      var o2 = new DOMMatrix();
      o2.translateSelf(e2.x || 0, e2.y || 0), o2.rotateSelf(0, 0, (e2.rotation || 0) * It), o2.scaleSelf(e2.scaleX || 1, e2.scaleY || 1), r2.setTransform(o2);
    }
    return r2;
  }
}
var Ov = ["shadowBlur", "shadowOffsetX", "shadowOffsetY"], Rv = [["lineCap", "butt"], ["lineJoin", "miter"], ["miterLimit", 10]];
function Nv(t2, e2, n2, i2, r2) {
  var o2 = !1;
  if (!i2 && e2 === (n2 = n2 || {})) return !1;
  if (i2 || e2.opacity !== n2.opacity) {
    Ev(t2, r2), o2 = !0;
    var a2 = Math.max(Math.min(e2.opacity, 1), 0);
    t2.globalAlpha = isNaN(a2) ? ta.opacity : a2;
  }
  (i2 || e2.blend !== n2.blend) && (o2 || (Ev(t2, r2), o2 = !0), t2.globalCompositeOperation = e2.blend || ta.blend);
  for (var s2 = 0; s2 < Ov.length; s2++) {
    var l2 = Ov[s2];
    (i2 || e2[l2] !== n2[l2]) && (o2 || (Ev(t2, r2), o2 = !0), t2[l2] = t2.dpr * (e2[l2] || 0));
  }
  return (i2 || e2.shadowColor !== n2.shadowColor) && (o2 || (Ev(t2, r2), o2 = !0), t2.shadowColor = e2.shadowColor || ta.shadowColor), o2;
}
function zv(t2, e2, n2, i2, r2) {
  var o2 = Fv(e2, r2.inHover), a2 = i2 ? null : n2 && Fv(n2, r2.inHover) || {};
  if (o2 === a2) return !1;
  var s2 = Nv(t2, o2, a2, i2, r2);
  if ((i2 || o2.fill !== a2.fill) && (s2 || (Ev(t2, r2), s2 = !0), Iv(o2.fill) && (t2.fillStyle = o2.fill)), (i2 || o2.stroke !== a2.stroke) && (s2 || (Ev(t2, r2), s2 = !0), Iv(o2.stroke) && (t2.strokeStyle = o2.stroke)), (i2 || o2.opacity !== a2.opacity) && (s2 || (Ev(t2, r2), s2 = !0), t2.globalAlpha = o2.opacity == null ? 1 : o2.opacity), e2.hasStroke()) {
    var l2 = o2.lineWidth / (o2.strokeNoScale && e2.getLineScale ? e2.getLineScale() : 1);
    t2.lineWidth !== l2 && (s2 || (Ev(t2, r2), s2 = !0), t2.lineWidth = l2);
  }
  for (var u2 = 0; u2 < Rv.length; u2++) {
    var h2 = Rv[u2], c2 = h2[0];
    (i2 || o2[c2] !== a2[c2]) && (s2 || (Ev(t2, r2), s2 = !0), t2[c2] = o2[c2] || h2[1]);
  }
  return s2;
}
function Bv(t2, e2) {
  var n2 = e2.transform, i2 = t2.dpr || 1;
  n2 ? t2.setTransform(i2 * n2[0], i2 * n2[1], i2 * n2[2], i2 * n2[3], i2 * n2[4], i2 * n2[5]) : t2.setTransform(i2, 0, 0, i2, 0, 0);
}
function Ev(t2, e2) {
  e2.batchFill && t2.fill(), e2.batchStroke && t2.stroke(), e2.batchFill = "", e2.batchStroke = "";
}
function Fv(t2, e2) {
  return e2 && t2.__hoverStyle || t2.style;
}
function Vv(t2, e2) {
  Hv(t2, e2, { inHover: !1, viewWidth: 0, viewHeight: 0 }, !0);
}
function Hv(t2, e2, n2, i2) {
  var r2 = e2.transform;
  if (!e2.shouldBePainted(n2.viewWidth, n2.viewHeight, !1, !1)) return e2.__dirty &= -2, void (e2.__isRendered = !1);
  var o2 = e2.__clipPaths, a2 = n2.prevElClipPaths, s2 = !1, l2 = !1;
  if (a2 && !(function(t3, e3) {
    if (t3 === e3 || !t3 && !e3) return !1;
    if (!t3 || !e3 || t3.length !== e3.length) return !0;
    for (var n3 = 0; n3 < t3.length; n3++) if (t3[n3] !== e3[n3]) return !0;
    return !1;
  })(o2, a2) || (a2 && a2.length && (Ev(t2, n2), t2.restore(), l2 = s2 = !0, n2.prevElClipPaths = null, n2.allClipped = !1, n2.prevEl = null), o2 && o2.length && (Ev(t2, n2), t2.save(), (function(t3, e3, n3) {
    for (var i3 = !1, r3 = 0; r3 < t3.length; r3++) {
      var o3 = t3[r3];
      i3 = i3 || o3.isZeroArea(), Bv(e3, o3), e3.beginPath(), o3.buildPath(e3, o3.shape), e3.clip();
    }
    n3.allClipped = i3;
  })(o2, t2, n2), s2 = !0), n2.prevElClipPaths = o2), n2.allClipped) e2.__isRendered = !1;
  else {
    e2.beforeBrush && e2.beforeBrush(), e2.innerBeforeBrush();
    var u2 = n2.prevEl;
    u2 || (l2 = s2 = !0);
    var h2, c2, p2 = e2 instanceof os && e2.autoBatch && (function(t3) {
      var e3 = Dv(t3), n3 = Cv(t3);
      return !(t3.lineDash || !(+e3 ^ +n3) || e3 && typeof t3.fill != "string" || n3 && typeof t3.stroke != "string" || t3.strokePercent < 1 || t3.strokeOpacity < 1 || t3.fillOpacity < 1);
    })(e2.style);
    s2 || (h2 = r2, c2 = u2.transform, h2 && c2 ? h2[0] !== c2[0] || h2[1] !== c2[1] || h2[2] !== c2[2] || h2[3] !== c2[3] || h2[4] !== c2[4] || h2[5] !== c2[5] : h2 || c2) ? (Ev(t2, n2), Bv(t2, e2)) : p2 || Ev(t2, n2);
    var d2 = Fv(e2, n2.inHover);
    e2 instanceof os ? (n2.lastDrawType !== 1 && (l2 = !0, n2.lastDrawType = 1), zv(t2, e2, u2, l2, n2), p2 && (n2.batchFill || n2.batchStroke) || t2.beginPath(), (function(t3, e3, n3, i3) {
      var r3, o3 = Cv(n3), a3 = Dv(n3), s3 = n3.strokePercent, l3 = s3 < 1, u3 = !e3.path;
      e3.silent && !l3 || !u3 || e3.createPathProxy();
      var h3 = e3.path || kv, c3 = e3.__dirty;
      if (!i3) {
        var p3 = n3.fill, d3 = n3.stroke, f2 = a3 && !!p3.colorStops, g2 = o3 && !!d3.colorStops, v2 = a3 && !!p3.image, y2 = o3 && !!d3.image, m2 = void 0, _2 = void 0, x2 = void 0, b2 = void 0, w2 = void 0;
        (f2 || g2) && (w2 = e3.getBoundingRect()), f2 && (m2 = c3 ? wv(t3, p3, w2) : e3.__canvasFillGradient, e3.__canvasFillGradient = m2), g2 && (_2 = c3 ? wv(t3, d3, w2) : e3.__canvasStrokeGradient, e3.__canvasStrokeGradient = _2), v2 && (x2 = c3 || !e3.__canvasFillPattern ? Pv(t3, p3, e3) : e3.__canvasFillPattern, e3.__canvasFillPattern = x2), y2 && (b2 = c3 || !e3.__canvasStrokePattern ? Pv(t3, d3, e3) : e3.__canvasStrokePattern, e3.__canvasStrokePattern = b2), f2 ? t3.fillStyle = m2 : v2 && (x2 ? t3.fillStyle = x2 : a3 = !1), g2 ? t3.strokeStyle = _2 : y2 && (b2 ? t3.strokeStyle = b2 : o3 = !1);
      }
      var S2, M2, T2 = e3.getGlobalScale();
      h3.setScale(T2[0], T2[1], e3.segmentIgnoreThreshold), t3.setLineDash && n3.lineDash && (S2 = (r3 = Tv(e3))[0], M2 = r3[1]);
      var k2 = !0;
      (u3 || 4 & c3) && (h3.setDPR(t3.dpr), l3 ? h3.setContext(null) : (h3.setContext(t3), k2 = !1), h3.reset(), e3.buildPath(h3, e3.shape, i3), h3.toStatic(), e3.pathUpdated()), k2 && h3.rebuildPath(t3, l3 ? s3 : 1), S2 && (t3.setLineDash(S2), t3.lineDashOffset = M2), i3 || (n3.strokeFirst ? (o3 && Lv(t3, n3), a3 && Av(t3, n3)) : (a3 && Av(t3, n3), o3 && Lv(t3, n3))), S2 && t3.setLineDash([]);
    })(t2, e2, d2, p2), p2 && (n2.batchFill = d2.fill || "", n2.batchStroke = d2.stroke || "")) : e2 instanceof ss ? (n2.lastDrawType !== 3 && (l2 = !0, n2.lastDrawType = 3), zv(t2, e2, u2, l2, n2), (function(t3, e3, n3) {
      var i3, r3 = n3.text;
      if (r3 != null && (r3 += ""), r3) {
        t3.font = n3.font || w, t3.textAlign = n3.textAlign, t3.textBaseline = n3.textBaseline;
        var o3 = void 0, a3 = void 0;
        t3.setLineDash && n3.lineDash && (o3 = (i3 = Tv(e3))[0], a3 = i3[1]), o3 && (t3.setLineDash(o3), t3.lineDashOffset = a3), n3.strokeFirst ? (Cv(n3) && t3.strokeText(r3, n3.x, n3.y), Dv(n3) && t3.fillText(r3, n3.x, n3.y)) : (Dv(n3) && t3.fillText(r3, n3.x, n3.y), Cv(n3) && t3.strokeText(r3, n3.x, n3.y)), o3 && t3.setLineDash([]);
      }
    })(t2, e2, d2)) : e2 instanceof hs2 ? (n2.lastDrawType !== 2 && (l2 = !0, n2.lastDrawType = 2), (function(t3, e3, n3, i3, r3) {
      Nv(t3, Fv(e3, r3.inHover), n3 && Fv(n3, r3.inHover), i3, r3);
    })(t2, e2, u2, l2, n2), (function(t3, e3, n3) {
      var i3 = e3.__image = Po(n3.image, e3.__image, e3, e3.onload);
      if (i3 && Ro(i3)) {
        var r3 = n3.x || 0, o3 = n3.y || 0, a3 = e3.getWidth(), s3 = e3.getHeight(), l3 = i3.width / i3.height;
        if (a3 == null && s3 != null ? a3 = s3 * l3 : s3 == null && a3 != null ? s3 = a3 / l3 : a3 == null && s3 == null && (a3 = i3.width, s3 = i3.height), n3.sWidth && n3.sHeight) {
          var u3 = n3.sx || 0, h3 = n3.sy || 0;
          t3.drawImage(i3, u3, h3, n3.sWidth, n3.sHeight, r3, o3, a3, s3);
        } else if (n3.sx && n3.sy) {
          var c3 = a3 - (u3 = n3.sx), p3 = s3 - (h3 = n3.sy);
          t3.drawImage(i3, u3, h3, c3, p3, r3, o3, a3, s3);
        } else t3.drawImage(i3, r3, o3, a3, s3);
      }
    })(t2, e2, d2)) : e2.getTemporalDisplayables && (n2.lastDrawType !== 4 && (l2 = !0, n2.lastDrawType = 4), (function(t3, e3, n3) {
      var i3 = e3.getDisplayables(), r3 = e3.getTemporalDisplayables();
      t3.save();
      var o3, a3, s3 = { prevElClipPaths: null, prevEl: null, allClipped: !1, viewWidth: n3.viewWidth, viewHeight: n3.viewHeight, inHover: n3.inHover };
      for (o3 = e3.getCursor(), a3 = i3.length; o3 < a3; o3++)
        (h3 = i3[o3]).beforeBrush && h3.beforeBrush(), h3.innerBeforeBrush(), Hv(t3, h3, s3, o3 === a3 - 1), h3.innerAfterBrush(), h3.afterBrush && h3.afterBrush(), s3.prevEl = h3;
      for (var l3 = 0, u3 = r3.length; l3 < u3; l3++) {
        var h3;
        (h3 = r3[l3]).beforeBrush && h3.beforeBrush(), h3.innerBeforeBrush(), Hv(t3, h3, s3, l3 === u3 - 1), h3.innerAfterBrush(), h3.afterBrush && h3.afterBrush(), s3.prevEl = h3;
      }
      e3.clearTemporalDisplayables(), e3.notClear = !0, t3.restore();
    })(t2, e2, n2)), p2 && i2 && Ev(t2, n2), e2.innerAfterBrush(), e2.afterBrush && e2.afterBrush(), n2.prevEl = e2, e2.__dirty = 0, e2.__isRendered = !0;
  }
}
var Wv = new uv(), Gv = new Rn(100), Uv = ["symbol", "symbolSize", "symbolKeepAspect", "color", "backgroundColor", "dashArrayX", "dashArrayY", "maxTileWidth", "maxTileHeight"];
function Xv(t2, e2) {
  if (t2 === "none") return null;
  var n2 = e2.getDevicePixelRatio(), i2 = e2.getZr(), r2 = i2.painter.type === "svg";
  t2.dirty && Wv.delete(t2);
  var o2 = Wv.get(t2);
  if (o2) return o2;
  var a2 = W(t2, { symbol: "rect", symbolSize: 1, symbolKeepAspect: !0, color: "rgba(0, 0, 0, 0.2)", backgroundColor: null, dashArrayX: 5, dashArrayY: 5, rotation: 0, maxTileWidth: 512, maxTileHeight: 512 });
  a2.backgroundColor === "none" && (a2.backgroundColor = null);
  var s2 = { repeat: "repeat" };
  return (function(t3) {
    for (var e3, o3 = [n2], s3 = !0, l2 = 0; l2 < Uv.length; ++l2) {
      var u2 = a2[Uv[l2]];
      if (u2 != null && !J(u2) && !et(u2) && !it(u2) && typeof u2 != "boolean") {
        s3 = !1;
        break;
      }
      o3.push(u2);
    }
    if (s3) {
      e3 = o3.join(",") + (r2 ? "-svg" : "");
      var h2 = Gv.get(e3);
      h2 && (r2 ? t3.svgElement = h2 : t3.image = h2);
    }
    var c2, p2 = Zv(a2.dashArrayX), d2 = (function(t4) {
      if (!t4 || typeof t4 == "object" && t4.length === 0) return [0, 0];
      if (it(t4)) {
        var e4 = Math.ceil(t4);
        return [e4, e4];
      }
      var n3 = Z(t4, function(t5) {
        return Math.ceil(t5);
      });
      return t4.length % 2 ? n3.concat(n3) : n3;
    })(a2.dashArrayY), f2 = Yv(a2.symbol), g2 = (x2 = p2, Z(x2, function(t4) {
      return jv(t4);
    })), v2 = jv(d2), y2 = !r2 && M.createCanvas(), m2 = r2 && { tag: "g", attrs: {}, key: "dcl", children: [] }, _2 = (function() {
      for (var t4 = 1, e4 = 0, n3 = g2.length; e4 < n3; ++e4) t4 = Yr(t4, g2[e4]);
      var i3 = 1;
      for (e4 = 0, n3 = f2.length; e4 < n3; ++e4) i3 = Yr(i3, f2[e4].length);
      t4 *= i3;
      var r3 = v2 * g2.length * f2.length;
      return { width: Math.max(1, Math.min(t4, a2.maxTileWidth)), height: Math.max(1, Math.min(r3, a2.maxTileHeight)) };
    })(), x2;
    y2 && (y2.width = _2.width * n2, y2.height = _2.height * n2, c2 = y2.getContext("2d")), (function() {
      c2 && (c2.clearRect(0, 0, y2.width, y2.height), a2.backgroundColor && (c2.fillStyle = a2.backgroundColor, c2.fillRect(0, 0, y2.width, y2.height)));
      for (var t4 = 0, e4 = 0; e4 < d2.length; ++e4) t4 += d2[e4];
      if (t4 <= 0) return;
      for (var o4 = -v2, s4 = 0, l3 = 0, u3 = 0; o4 < _2.height; ) {
        if (s4 % 2 == 0) {
          for (var h3 = l3 / 2 % f2.length, g3 = 0, x3 = 0, b2 = 0; g3 < 2 * _2.width; ) {
            var w2 = 0;
            for (e4 = 0; e4 < p2[u3].length; ++e4) w2 += p2[u3][e4];
            if (w2 <= 0) break;
            if (x3 % 2 == 0) {
              var S2 = 0.5 * (1 - a2.symbolSize), M2 = g3 + p2[u3][x3] * S2, T2 = o4 + d2[s4] * S2, k2 = p2[u3][x3] * a2.symbolSize, C2 = d2[s4] * a2.symbolSize, I2 = b2 / 2 % f2[h3].length;
              D2(M2, T2, k2, C2, f2[h3][I2]);
            }
            g3 += p2[u3][x3], ++b2, ++x3 === p2[u3].length && (x3 = 0);
          }
          ++u3 === p2.length && (u3 = 0);
        }
        o4 += d2[s4], ++l3, ++s4 === d2.length && (s4 = 0);
      }
      function D2(t5, e5, o5, s5, l4) {
        var u4 = r2 ? 1 : n2, h4 = mv(l4, t5 * u4, e5 * u4, o5 * u4, s5 * u4, a2.color, a2.symbolKeepAspect);
        if (r2) {
          var p3 = i2.painter.renderOneToVNode(h4);
          p3 && m2.children.push(p3);
        } else Vv(c2, h4);
      }
    })(), s3 && Gv.put(e3, y2 || m2), t3.image = y2, t3.svgElement = m2, t3.svgWidth = _2.width, t3.svgHeight = _2.height;
  })(s2), s2.rotation = a2.rotation, s2.scaleX = s2.scaleY = r2 ? 1 : 1 / n2, Wv.set(t2, s2), t2.dirty = !1, s2;
}
function Yv(t2) {
  if (!t2 || t2.length === 0) return [["rect"]];
  if (et(t2)) return [[t2]];
  for (var e2 = !0, n2 = 0; n2 < t2.length; ++n2) if (!et(t2[n2])) {
    e2 = !1;
    break;
  }
  if (e2) return Yv([t2]);
  var i2 = [];
  for (n2 = 0; n2 < t2.length; ++n2) et(t2[n2]) ? i2.push([t2[n2]]) : i2.push(t2[n2]);
  return i2;
}
function Zv(t2) {
  if (!t2 || t2.length === 0) return [[0, 0]];
  if (it(t2)) return [[r2 = Math.ceil(t2), r2]];
  for (var e2 = !0, n2 = 0; n2 < t2.length; ++n2) if (!it(t2[n2])) {
    e2 = !1;
    break;
  }
  if (e2) return Zv([t2]);
  var i2 = [];
  for (n2 = 0; n2 < t2.length; ++n2) if (it(t2[n2])) {
    var r2 = Math.ceil(t2[n2]);
    i2.push([r2, r2]);
  } else
    (r2 = Z(t2[n2], function(t3) {
      return Math.ceil(t3);
    })).length % 2 == 1 ? i2.push(r2.concat(r2)) : i2.push(r2);
  return i2;
}
function jv(t2) {
  for (var e2 = 0, n2 = 0; n2 < t2.length; ++n2) e2 += t2[n2];
  return t2.length % 2 == 1 ? 2 * e2 : e2;
}
var qv = new Gt(), Kv = {}, $v = 2e3, Qv = 4500, Jv = { PROCESSOR: { FILTER: 1e3, SERIES_FILTER: 800, STATISTIC: 5e3 }, VISUAL: { LAYOUT: 1e3, PROGRESSIVE_LAYOUT: 1100, GLOBAL: $v, CHART: 3e3, POST_CHART_LAYOUT: 4600, COMPONENT: 4e3, BRUSH: 5e3, CHART_ITEM: Qv, ARIA: 6e3, DECAL: 7e3 } }, ty = "__flagInMainProcess", ey = "__mainProcessVersion", ny = "__pendingUpdate", iy = "__needsUpdateStatus", ry = /^[a-zA-Z0-9_]+$/, oy = "__connectUpdateStatus";
function ay(t2) {
  return function() {
    for (var e2 = [], n2 = 0; n2 < arguments.length; n2++) e2[n2] = arguments[n2];
    if (!this.isDisposed()) return ly(this, t2, e2);
    this.id;
  };
}
function sy(t2) {
  return function() {
    for (var e2 = [], n2 = 0; n2 < arguments.length; n2++) e2[n2] = arguments[n2];
    return ly(this, t2, e2);
  };
}
function ly(t2, e2, n2) {
  return n2[0] = n2[0] && n2[0].toLowerCase(), Gt.prototype[e2].apply(t2, n2);
}
var uy, hy, cy, py, dy, fy, gy, vy, yy, my, _y, xy, by, wy, Sy, My, Ty, ky, Cy, Iy = (function(t2) {
  function e2() {
    return t2 !== null && t2.apply(this, arguments) || this;
  }
  return _(e2, t2), e2;
})(Gt), Dy = Iy.prototype;
Dy.on = sy("on"), Dy.off = sy("off");
var Ay = (function(t2) {
  function e2(e3, n2, i2) {
    var r2 = t2.call(this, new Jg()) || this;
    r2._chartsViews = [], r2._chartsMap = {}, r2._componentsViews = [], r2._componentsMap = {}, r2._pendingActions = [], i2 = i2 || {}, r2._dom = e3, r2[ey] = 1, i2.ssr;
    var o2 = r2._zr = Mr(e3, { renderer: i2.renderer || "canvas", devicePixelRatio: i2.devicePixelRatio, width: i2.width, height: i2.height, ssr: i2.ssr, useDirtyRect: ct(i2.useDirtyRect, !1), useCoarsePointer: ct(i2.useCoarsePointer, "auto"), pointerSize: i2.pointerSize });
    r2._ssr = i2.ssr, r2._throttledZrFlush = _g($(o2.flush, o2), 17), r2._updateTheme(n2), r2._locale = (function(t3) {
      if (et(t3)) {
        var e4 = lc[t3.toUpperCase()] || {};
        return t3 === oc || t3 === ac ? F(e4) : V(F(e4), F(lc[sc]), !1);
      }
      return V(F(t3), F(lc[sc]), !1);
    })(i2.locale || hc), r2._coordSysMgr = new ep();
    var a2 = r2._api = Sy(r2);
    function s2(t3, e4) {
      return t3.__prio - e4.__prio;
    }
    return Je(Ey, s2), Je(zy, s2), r2._scheduler = new Pg(r2, a2, zy, Ey), r2._messageCenter = new Iy(), r2._initEvents(), r2.resize = $(r2.resize, r2), o2.animation.on("frame", r2._onframe, r2), my(o2, r2), _y(o2, r2), mt(r2), r2;
  }
  return _(e2, t2), e2.prototype._onframe = function() {
    if (!this._disposed) {
      ky(this);
      var t3 = this._scheduler;
      if (this[ny]) {
        var e3 = this[ny].silent;
        this[ty] = !0, Cy(this);
        try {
          uy(this), py.update.call(this, null, this[ny].updateParams);
        } catch (a2) {
          throw this[ty] = !1, this[ny] = null, a2;
        }
        this._zr.flush(), this[ty] = !1, this[ny] = null, vy.call(this, e3), yy.call(this, e3);
      } else if (t3.unfinished) {
        var n2 = 1, i2 = this._model, r2 = this._api;
        t3.unfinished = !1;
        do {
          var o2 = +/* @__PURE__ */ new Date();
          t3.performSeriesTasks(i2), t3.performDataProcessorTasks(i2), fy(this, i2), t3.performVisualTasks(i2), wy(this, this._model, r2, "remain", {}), n2 -= +/* @__PURE__ */ new Date() - o2;
        } while (n2 > 0 && t3.unfinished);
        t3.unfinished || this._zr.flush();
      }
    }
  }, e2.prototype.getDom = function() {
    return this._dom;
  }, e2.prototype.getId = function() {
    return this.id;
  }, e2.prototype.getZr = function() {
    return this._zr;
  }, e2.prototype.isSSR = function() {
    return this._ssr;
  }, e2.prototype.setOption = function(t3, e3, n2) {
    if (!this[ty]) if (this._disposed) this.id;
    else {
      var i2, r2, o2;
      if (rt(e3) && (n2 = e3.lazyUpdate, i2 = e3.silent, r2 = e3.replaceMerge, o2 = e3.transition, e3 = e3.notMerge), this[ty] = !0, Cy(this), !this._model || e3) {
        var a2 = new sd(this._api), s2 = this._theme, l2 = this._model = new td();
        l2.scheduler = this._scheduler, l2.ssr = this._ssr, l2.init(null, null, null, s2, this._locale, a2);
      }
      this._model.setOption(t3, { replaceMerge: r2 }, By);
      var u2 = { seriesTransition: o2, optionChanged: !0 };
      if (n2) this[ny] = { silent: i2, updateParams: u2 }, this[ty] = !1, this.getZr().wakeUp();
      else {
        try {
          uy(this), py.update.call(this, null, u2);
        } catch (h2) {
          throw this[ny] = null, this[ty] = !1, h2;
        }
        this._ssr || this._zr.flush(), this[ny] = null, this[ty] = !1, vy.call(this, i2), yy.call(this, i2);
      }
    }
  }, e2.prototype.setTheme = function(t3, e3) {
    if (!this[ty]) if (this._disposed) this.id;
    else {
      var n2 = this._model;
      if (n2) {
        var i2 = e3 && e3.silent, r2 = null;
        this[ny] && (i2 == null && (i2 = this[ny].silent), r2 = this[ny].updateParams, this[ny] = null), this[ty] = !0, Cy(this);
        try {
          this._updateTheme(t3), n2.setTheme(this._theme), uy(this), py.update.call(this, { type: "setTheme" }, r2);
        } catch (o2) {
          throw this[ty] = !1, o2;
        }
        this[ty] = !1, vy.call(this, i2), yy.call(this, i2);
      }
    }
  }, e2.prototype._updateTheme = function(t3) {
    et(t3) && (t3 = Fy[t3]), t3 && ((t3 = F(t3)) && Id(t3, !0), this._theme = t3);
  }, e2.prototype.getModel = function() {
    return this._model;
  }, e2.prototype.getOption = function() {
    return this._model && this._model.getOption();
  }, e2.prototype.getWidth = function() {
    return this._zr.getWidth();
  }, e2.prototype.getHeight = function() {
    return this._zr.getHeight();
  }, e2.prototype.getDevicePixelRatio = function() {
    return this._zr.painter.dpr || b.hasGlobalWindow && window.devicePixelRatio || 1;
  }, e2.prototype.getRenderedCanvas = function(t3) {
    return this.renderToCanvas(t3);
  }, e2.prototype.renderToCanvas = function(t3) {
    return t3 = t3 || {}, this._zr.painter.getRenderedCanvas({ backgroundColor: t3.backgroundColor || this._model.get("backgroundColor"), pixelRatio: t3.pixelRatio || this.getDevicePixelRatio() });
  }, e2.prototype.renderToSVGString = function(t3) {
    return t3 = t3 || {}, this._zr.painter.renderToString({ useViewBox: t3.useViewBox });
  }, e2.prototype.getSvgDataURL = function() {
    var t3 = this._zr;
    return Y(t3.storage.getDisplayList(), function(t4) {
      t4.stopAnimation(null, !0);
    }), t3.painter.toDataURL();
  }, e2.prototype.getDataURL = function(t3) {
    if (!this._disposed) {
      var e3 = (t3 = t3 || {}).excludeComponents, n2 = this._model, i2 = [], r2 = this;
      Y(e3, function(t4) {
        n2.eachComponent({ mainType: t4 }, function(t5) {
          var e4 = r2._componentsMap[t5.__viewId];
          e4.group.ignore || (i2.push(e4), e4.group.ignore = !0);
        });
      });
      var o2 = this._zr.painter.getType() === "svg" ? this.getSvgDataURL() : this.renderToCanvas(t3).toDataURL("image/" + (t3 && t3.type || "png"));
      return Y(i2, function(t4) {
        t4.group.ignore = !1;
      }), o2;
    }
    this.id;
  }, e2.prototype.getConnectedDataURL = function(t3) {
    if (!this._disposed) {
      var e3 = t3.type === "svg", n2 = this.group, i2 = Math.min, r2 = Math.max, o2 = 1 / 0;
      if (Wy[n2]) {
        var a2 = o2, s2 = o2, l2 = -1 / 0, u2 = -1 / 0, h2 = [], c2 = t3 && t3.pixelRatio || this.getDevicePixelRatio();
        Y(Hy, function(o3, c3) {
          if (o3.group === n2) {
            var p3 = e3 ? o3.getZr().painter.getSvgDom().innerHTML : o3.renderToCanvas(F(t3)), d3 = o3.getDom().getBoundingClientRect();
            a2 = i2(d3.left, a2), s2 = i2(d3.top, s2), l2 = r2(d3.right, l2), u2 = r2(d3.bottom, u2), h2.push({ dom: p3, left: d3.left, top: d3.top });
          }
        });
        var p2 = (l2 *= c2) - (a2 *= c2), d2 = (u2 *= c2) - (s2 *= c2), f2 = M.createCanvas(), g2 = Mr(f2, { renderer: e3 ? "svg" : "canvas" });
        if (g2.resize({ width: p2, height: d2 }), e3) {
          var v2 = "";
          return Y(h2, function(t4) {
            var e4 = t4.left - a2, n3 = t4.top - s2;
            v2 += '<g transform="translate(' + e4 + "," + n3 + ')">' + t4.dom + "</g>";
          }), g2.painter.getSvgRoot().innerHTML = v2, t3.connectedBackgroundColor && g2.painter.setBackgroundColor(t3.connectedBackgroundColor), g2.refreshImmediately(), g2.painter.toDataURL();
        }
        return t3.connectedBackgroundColor && g2.add(new ys({ shape: { x: 0, y: 0, width: p2, height: d2 }, style: { fill: t3.connectedBackgroundColor } })), Y(h2, function(t4) {
          var e4 = new hs2({ style: { x: t4.left * c2 - a2, y: t4.top * c2 - s2, image: t4.dom } });
          g2.add(e4);
        }), g2.refreshImmediately(), f2.toDataURL("image/" + (t3 && t3.type || "png"));
      }
      return this.getDataURL(t3);
    }
    this.id;
  }, e2.prototype.convertToPixel = function(t3, e3, n2) {
    return dy(this, "convertToPixel", t3, e3, n2);
  }, e2.prototype.convertToLayout = function(t3, e3, n2) {
    return dy(this, "convertToLayout", t3, e3, n2);
  }, e2.prototype.convertFromPixel = function(t3, e3, n2) {
    return dy(this, "convertFromPixel", t3, e3, n2);
  }, e2.prototype.containPixel = function(t3, e3) {
    var n2;
    if (!this._disposed) return Y(co(this._model, t3), function(t4, i2) {
      i2.indexOf("Models") >= 0 && Y(t4, function(t5) {
        var r2 = t5.coordinateSystem;
        if (r2 && r2.containPoint) n2 = n2 || !!r2.containPoint(e3);
        else if (i2 === "seriesModels") {
          var o2 = this._chartsMap[t5.__viewId];
          o2 && o2.containPoint && (n2 = n2 || o2.containPoint(e3, t5));
        }
      }, this);
    }, this), !!n2;
    this.id;
  }, e2.prototype.getVisual = function(t3, e3) {
    var n2 = co(this._model, t3, { defaultMainType: "series" }), i2 = n2.seriesModel.getData(), r2 = n2.hasOwnProperty("dataIndexInside") ? n2.dataIndexInside : n2.hasOwnProperty("dataIndex") ? i2.indexOfRawIndex(n2.dataIndex) : null;
    return r2 != null ? (function(t4, e4, n3) {
      switch (n3) {
        case "color":
          return t4.getItemVisual(e4, "style")[t4.getVisual("drawType")];
        case "opacity":
          return t4.getItemVisual(e4, "style").opacity;
        case "symbol":
        case "symbolSize":
        case "liftZ":
          return t4.getItemVisual(e4, n3);
      }
    })(i2, r2, e3) : rv(i2, e3);
  }, e2.prototype.getViewOfComponentModel = function(t3) {
    return this._componentsMap[t3.__viewId];
  }, e2.prototype.getViewOfSeriesModel = function(t3) {
    return this._chartsMap[t3.__viewId];
  }, e2.prototype._initEvents = function() {
    var t3 = this;
    Y(Py, function(e4) {
      var n2 = function(n3) {
        var i2, r2 = t3.getModel(), o2 = n3.target;
        if (e4 === "globalout" ? i2 = {} : o2 && av(o2, function(t4) {
          var e5 = Os(t4);
          if (e5 && e5.dataIndex != null) {
            var n4 = e5.dataModel || r2.getSeriesByIndex(e5.seriesIndex);
            return i2 = n4 && n4.getDataParams(e5.dataIndex, e5.dataType, o2) || {}, !0;
          }
          if (e5.eventData) return i2 = H({}, e5.eventData), !0;
        }, !0), i2) {
          var a2 = i2.componentType, s2 = i2.componentIndex;
          a2 !== "markLine" && a2 !== "markPoint" && a2 !== "markArea" || (a2 = "series", s2 = i2.seriesIndex);
          var l2 = a2 && s2 != null && r2.getComponent(a2, s2), u2 = l2 && t3[l2.mainType === "series" ? "_chartsMap" : "_componentsMap"][l2.__viewId];
          i2.event = n3, i2.type = e4, t3._$eventProcessor.eventInfo = { targetEl: o2, packedEvent: i2, model: l2, view: u2 }, t3.trigger(e4, i2);
        }
      };
      n2.zrEventfulCallAtLast = !0, t3._zr.on(e4, n2, t3);
    });
    var e3 = this._messageCenter;
    Y(Ny, function(n2, i2) {
      e3.on(i2, function(e4) {
        t3.trigger(i2, e4);
      });
    }), (function(t4, e4, n2) {
      t4.on("selectchanged", function(t5) {
        var i2 = n2.getModel();
        t5.isFromClick ? (ov("map", "selectchanged", e4, i2, t5), ov("pie", "selectchanged", e4, i2, t5)) : t5.fromAction === "select" ? (ov("map", "selected", e4, i2, t5), ov("pie", "selected", e4, i2, t5)) : t5.fromAction === "unselect" && (ov("map", "unselected", e4, i2, t5), ov("pie", "unselected", e4, i2, t5));
      });
    })(e3, this, this._api);
  }, e2.prototype.isDisposed = function() {
    return this._disposed;
  }, e2.prototype.clear = function() {
    this._disposed ? this.id : this.setOption({ series: [] }, !0);
  }, e2.prototype.dispose = function() {
    if (this._disposed) this.id;
    else {
      this._disposed = !0, this.getDom() && yo(this.getDom(), Uy, "");
      var t3 = this, e3 = t3._api, n2 = t3._model;
      Y(t3._componentsViews, function(t4) {
        t4.dispose(n2, e3);
      }), Y(t3._chartsViews, function(t4) {
        t4.dispose(n2, e3);
      }), t3._zr.dispose(), t3._dom = t3._model = t3._chartsMap = t3._componentsMap = t3._chartsViews = t3._componentsViews = t3._scheduler = t3._api = t3._zr = t3._throttledZrFlush = t3._theme = t3._coordSysMgr = t3._messageCenter = null, delete Hy[t3.id];
    }
  }, e2.prototype.resize = function(t3) {
    if (!this[ty]) if (this._disposed) this.id;
    else {
      this._zr.resize(t3);
      var e3 = this._model;
      if (this._loadingFX && this._loadingFX.resize(), e3) {
        var n2 = e3.resetOption("media"), i2 = t3 && t3.silent;
        this[ny] && (i2 == null && (i2 = this[ny].silent), n2 = !0, this[ny] = null), this[ty] = !0, Cy(this);
        try {
          n2 && uy(this), py.update.call(this, { type: "resize", animation: H({ duration: 0 }, t3 && t3.animation) });
        } catch (r2) {
          throw this[ty] = !1, r2;
        }
        this[ty] = !1, vy.call(this, i2), yy.call(this, i2);
      }
    }
  }, e2.prototype.showLoading = function(t3, e3) {
    if (this._disposed) this.id;
    else if (rt(t3) && (e3 = t3, t3 = ""), t3 = t3 || "default", this.hideLoading(), Vy[t3]) {
      var n2 = Vy[t3](this._api, e3), i2 = this._zr;
      this._loadingFX = n2, i2.add(n2);
    }
  }, e2.prototype.hideLoading = function() {
    this._disposed ? this.id : (this._loadingFX && this._zr.remove(this._loadingFX), this._loadingFX = null);
  }, e2.prototype.makeActionFromEvent = function(t3) {
    var e3 = H({}, t3);
    return e3.type = Ry[t3.type], e3;
  }, e2.prototype.dispatchAction = function(t3, e3) {
    if (this._disposed) this.id;
    else if (rt(e3) || (e3 = { silent: !!e3 }), Oy[t3.type] && this._model) if (this[ty]) this._pendingActions.push(t3);
    else {
      var n2 = e3.silent;
      gy.call(this, t3, n2);
      var i2 = e3.flush;
      i2 ? this._zr.flush() : i2 !== !1 && b.browser.weChat && this._throttledZrFlush(), vy.call(this, n2), yy.call(this, n2);
    }
  }, e2.prototype.updateLabelLayout = function() {
    qv.trigger("series:layoutlabels", this._model, this._api, { updatedSeries: [] });
  }, e2.prototype.appendData = function(t3) {
    if (this._disposed) this.id;
    else {
      var e3 = t3.seriesIndex;
      this.getModel().getSeriesByIndex(e3).appendData(t3), this._scheduler.unfinished = !0, this.getZr().wakeUp();
    }
  }, e2.internalField = (function() {
    function t3(t4) {
      t4.clearColorPalette(), t4.eachSeries(function(t5) {
        t5.clearColorPalette();
      });
    }
    function e3(t4) {
      for (var e4 = [], n3 = t4.currentStates, i3 = 0; i3 < n3.length; i3++) {
        var r3 = n3[i3];
        r3 !== "emphasis" && r3 !== "blur" && r3 !== "select" && e4.push(r3);
      }
      t4.selected && t4.states.select && e4.push("select"), t4.hoverState === 2 && t4.states.emphasis ? e4.push("emphasis") : t4.hoverState === 1 && t4.states.blur && e4.push("blur"), t4.useStates(e4);
    }
    function n2(t4, e4) {
      if (!t4.preventAutoZ) {
        var n3 = Ch(t4);
        e4.eachRendered(function(t5) {
          return Ih(t5, n3.z, n3.zlevel), !0;
        });
      }
    }
    function i2(t4, e4) {
      e4.eachRendered(function(t5) {
        if (!Yu(t5)) {
          var e5 = t5.getTextContent(), n3 = t5.getTextGuideLine();
          t5.stateTransition && (t5.stateTransition = null), e5 && e5.stateTransition && (e5.stateTransition = null), n3 && n3.stateTransition && (n3.stateTransition = null), t5.hasState() ? (t5.prevStates = t5.currentStates, t5.clearStates()) : t5.prevStates && (t5.prevStates = null);
        }
      });
    }
    function r2(t4, n3) {
      var i3 = t4.getModel("stateAnimation"), r3 = t4.isAnimationEnabled(), o2 = i3.get("duration"), a2 = o2 > 0 ? { duration: o2, delay: i3.get("delay"), easing: i3.get("easing") } : null;
      n3.eachRendered(function(t5) {
        if (t5.states && t5.states.emphasis) {
          if (Yu(t5)) return;
          if (t5 instanceof os && (function(t6) {
            var e4 = zs(t6);
            e4.normalFill = t6.style.fill, e4.normalStroke = t6.style.stroke;
            var n5 = t6.states.select || {};
            e4.selectFill = n5.style && n5.style.fill || null, e4.selectStroke = n5.style && n5.style.stroke || null;
          })(t5), t5.__dirty) {
            var n4 = t5.prevStates;
            n4 && t5.useStates(n4);
          }
          if (r3) {
            t5.stateTransition = a2;
            var i4 = t5.getTextContent(), o3 = t5.getTextGuideLine();
            i4 && (i4.stateTransition = a2), o3 && (o3.stateTransition = a2);
          }
          t5.__dirty && e3(t5);
        }
      });
    }
    uy = function(t4) {
      var e4 = t4._scheduler;
      e4.restorePipelines(t4._model), e4.prepareStageTasks(), hy(t4, !0), hy(t4, !1), e4.plan();
    }, hy = function(t4, e4) {
      for (var n3 = t4._model, i3 = t4._scheduler, r3 = e4 ? t4._componentsViews : t4._chartsViews, o2 = e4 ? t4._componentsMap : t4._chartsMap, a2 = t4._zr, s2 = t4._api, l2 = 0; l2 < r3.length; l2++) r3[l2].__alive = !1;
      function u2(t5) {
        var l3 = t5.__requireNewView;
        t5.__requireNewView = !1;
        var u3 = "_ec_" + t5.id + "_" + t5.type, h3 = !l3 && o2[u3];
        if (!h3) {
          var c2 = xo(t5.type);
          (h3 = new (e4 ? ag.getClass(c2.main, c2.sub) : hg.getClass(c2.sub))()).init(n3, s2), o2[u3] = h3, r3.push(h3), a2.add(h3.group);
        }
        t5.__viewId = h3.__id = u3, h3.__alive = !0, h3.__model = t5, h3.group.__ecComponentInfo = { mainType: t5.mainType, index: t5.componentIndex }, !e4 && i3.prepareView(h3, t5, n3, s2);
      }
      for (e4 ? n3.eachComponent(function(t5, e5) {
        t5 !== "series" && u2(e5);
      }) : n3.eachSeries(u2), l2 = 0; l2 < r3.length; ) {
        var h2 = r3[l2];
        h2.__alive ? l2++ : (!e4 && h2.renderTask.dispose(), a2.remove(h2.group), h2.dispose(n3, s2), r3.splice(l2, 1), o2[h2.__id] === h2 && delete o2[h2.__id], h2.__id = h2.group.__ecComponentInfo = null);
      }
    }, cy = function(t4, e4, n3, i3, r3) {
      var o2 = t4._model;
      if (o2.setUpdatePayload(n3), i3) {
        var a2 = {};
        a2[i3 + "Id"] = n3[i3 + "Id"], a2[i3 + "Index"] = n3[i3 + "Index"], a2[i3 + "Name"] = n3[i3 + "Name"];
        var s2 = { mainType: i3, query: a2 };
        r3 && (s2.subType = r3);
        var l2, u2 = n3.excludeSeriesId;
        u2 != null && (l2 = St(), Y($r(u2), function(t5) {
          var e5 = oo(t5, null);
          e5 != null && l2.set(e5, !0);
        })), o2 && o2.eachComponent(s2, function(e5) {
          if (!(l2 && l2.get(e5.id) != null)) if (Il(n3)) if (e5 instanceof Qf) n3.type !== Vs || n3.notBlur || e5.get(["emphasis", "disabled"]) || (function(t5, e6, n4) {
            var i5 = t5.seriesIndex, r5 = t5.getData(e6.dataType);
            if (r5) {
              var o4 = lo(r5, e6);
              o4 = (J(o4) ? o4[0] : o4) || 0;
              var a3 = r5.getItemGraphicEl(o4);
              if (!a3) for (var s3 = r5.count(), l3 = 0; !a3 && l3 < s3; ) a3 = r5.getItemGraphicEl(l3++);
              if (a3) {
                var u3 = Os(a3);
                gl(i5, u3.focus, u3.blurScope, n4);
              } else {
                var h3 = t5.get(["emphasis", "focus"]), c2 = t5.get(["emphasis", "blurScope"]);
                h3 != null && gl(i5, h3, c2, n4);
              }
            }
          })(e5, n3, t4._api);
          else {
            var i4 = yl(e5.mainType, e5.componentIndex, n3.name, t4._api), r4 = i4.focusSelf, o3 = i4.dispatchers;
            n3.type === Vs && r4 && !n3.notBlur && vl(e5.mainType, e5.componentIndex, t4._api), o3 && Y(o3, function(t5) {
              n3.type === Vs ? sl(t5) : ll(t5);
            });
          }
          else Cl(n3) && e5 instanceof Qf && ((function(t5, e6) {
            if (Cl(e6)) {
              var n4 = e6.dataType, i5 = lo(t5.getData(n4), e6);
              J(i5) || (i5 = [i5]), t5[e6.type === Us ? "toggleSelect" : e6.type === Ws ? "select" : "unselect"](i5, n4);
            }
          })(e5, n3, t4._api), ml(e5), Ty(t4));
        }, t4), o2 && o2.eachComponent(s2, function(e5) {
          l2 && l2.get(e5.id) != null || h2(t4[i3 === "series" ? "_chartsMap" : "_componentsMap"][e5.__viewId]);
        }, t4);
      } else Y([].concat(t4._componentsViews).concat(t4._chartsViews), h2);
      function h2(i4) {
        i4 && i4.__alive && i4[e4] && i4[e4](i4.__model, o2, t4._api, n3);
      }
    }, py = { prepareAndUpdate: function(t4) {
      uy(this), py.update.call(this, t4, t4 && { optionChanged: t4.newOption != null });
    }, update: function(e4, n3) {
      var i3 = this._model, r3 = this._api, o2 = this._zr, a2 = this._coordSysMgr, s2 = this._scheduler;
      if (i3) {
        i3.setUpdatePayload(e4), s2.restoreData(i3, e4), s2.performSeriesTasks(i3), a2.create(i3, r3), s2.performDataProcessorTasks(i3, e4), fy(this, i3), a2.update(i3, r3), t3(i3), s2.performVisualTasks(i3, e4);
        var l2 = i3.get("backgroundColor") || "transparent";
        o2.setBackgroundColor(l2);
        var u2 = i3.get("darkMode");
        u2 != null && u2 !== "auto" && o2.setDarkMode(u2), xy(this, i3, r3, e4, n3), qv.trigger("afterupdate", i3, r3);
      }
    }, updateTransform: function(e4) {
      var n3 = this, i3 = this._model, r3 = this._api;
      if (i3) {
        i3.setUpdatePayload(e4);
        var o2 = [];
        i3.eachComponent(function(t4, a3) {
          if (t4 !== "series") {
            var s2 = n3.getViewOfComponentModel(a3);
            if (s2 && s2.__alive) if (s2.updateTransform) {
              var l2 = s2.updateTransform(a3, i3, r3, e4);
              l2 && l2.update && o2.push(s2);
            } else o2.push(s2);
          }
        });
        var a2 = St();
        i3.eachSeries(function(t4) {
          var o3 = n3._chartsMap[t4.__viewId];
          if (o3.updateTransform) {
            var s2 = o3.updateTransform(t4, i3, r3, e4);
            s2 && s2.update && a2.set(t4.uid, 1);
          } else a2.set(t4.uid, 1);
        }), t3(i3), this._scheduler.performVisualTasks(i3, e4, { setDirty: !0, dirtyMap: a2 }), wy(this, i3, r3, e4, {}, a2), qv.trigger("afterupdate", i3, r3);
      }
    }, updateView: function(e4) {
      var n3 = this._model;
      n3 && (n3.setUpdatePayload(e4), hg.markUpdateMethod(e4, "updateView"), t3(n3), this._scheduler.performVisualTasks(n3, e4, { setDirty: !0 }), xy(this, n3, this._api, e4, {}), qv.trigger("afterupdate", n3, this._api));
    }, updateVisual: function(e4) {
      var n3 = this, i3 = this._model;
      i3 && (i3.setUpdatePayload(e4), i3.eachSeries(function(t4) {
        t4.getData().clearAllVisual();
      }), hg.markUpdateMethod(e4, "updateVisual"), t3(i3), this._scheduler.performVisualTasks(i3, e4, { visualType: "visual", setDirty: !0 }), i3.eachComponent(function(t4, r3) {
        if (t4 !== "series") {
          var o2 = n3.getViewOfComponentModel(r3);
          o2 && o2.__alive && o2.updateVisual(r3, i3, n3._api, e4);
        }
      }), i3.eachSeries(function(t4) {
        n3._chartsMap[t4.__viewId].updateVisual(t4, i3, n3._api, e4);
      }), qv.trigger("afterupdate", i3, this._api));
    }, updateLayout: function(t4) {
      py.update.call(this, t4);
    } }, dy = function(t4, e4, n3, i3, r3) {
      if (t4._disposed) t4.id;
      else for (var o2, a2 = t4._model, s2 = t4._coordSysMgr.getCoordinateSystems(), l2 = co(a2, n3), u2 = 0; u2 < s2.length; u2++) {
        var h2 = s2[u2];
        if (h2[e4] && (o2 = h2[e4](a2, l2, i3, r3)) != null) return o2;
      }
    }, fy = function(t4, e4) {
      var n3 = t4._chartsMap, i3 = t4._scheduler;
      e4.eachSeries(function(t5) {
        i3.updateStreamModes(t5, n3[t5.__viewId]);
      });
    }, gy = function(t4, e4) {
      var n3 = this, i3 = this.getModel(), r3 = t4.type, o2 = t4.escapeConnect, a2 = Oy[r3], s2 = (a2.update || "update").split(":"), l2 = s2.pop(), u2 = s2[0] != null && xo(s2[0]);
      this[ty] = !0, Cy(this);
      var h2 = [t4], c2 = !1;
      t4.batch && (c2 = !0, h2 = Z(t4.batch, function(e5) {
        return (e5 = W(H({}, e5), t4)).batch = null, e5;
      }));
      var p2, d2 = [], f2 = [], g2 = a2.nonRefinedEventType, v2 = Cl(t4), y2 = Il(t4);
      if (y2 && fl(this._api), Y(h2, function(e5) {
        var r4 = a2.action(e5, i3, n3._api);
        if (a2.refineEvent ? f2.push(r4) : p2 = r4, (p2 = p2 || H({}, e5)).type = g2, d2.push(p2), y2) {
          var o3 = po(t4), s3 = o3.queryOptionMap, h3 = o3.mainTypeSpecified ? s3.keys()[0] : "series";
          cy(n3, l2, e5, h3), Ty(n3);
        } else v2 ? (cy(n3, l2, e5, "series"), Ty(n3)) : u2 && cy(n3, l2, e5, u2.main, u2.sub);
      }), l2 !== "none" && !y2 && !v2 && !u2) try {
        this[ny] ? (uy(this), py.update.call(this, t4), this[ny] = null) : py[l2].call(this, t4);
      } catch (b2) {
        throw this[ty] = !1, b2;
      }
      if (p2 = c2 ? { type: g2, escapeConnect: o2, batch: d2 } : d2[0], this[ty] = !1, !e4) {
        var m2 = void 0;
        if (a2.refineEvent) {
          var _2 = a2.refineEvent(f2, t4, i3, this._api).eventContent;
          gt(rt(_2)), (m2 = W({ type: a2.refinedEventType }, _2)).fromAction = t4.type, m2.fromActionPayload = t4, m2.escapeConnect = !0;
        }
        var x2 = this._messageCenter;
        x2.trigger(p2.type, p2), m2 && x2.trigger(m2.type, m2);
      }
    }, vy = function(t4) {
      for (var e4 = this._pendingActions; e4.length; ) {
        var n3 = e4.shift();
        gy.call(this, n3, t4);
      }
    }, yy = function(t4) {
      !t4 && this.trigger("updated");
    }, my = function(t4, e4) {
      t4.on("rendered", function(n3) {
        e4.trigger("rendered", n3), !t4.animation.isFinished() || e4[ny] || e4._scheduler.unfinished || e4._pendingActions.length || e4.trigger("finished");
      });
    }, _y = function(t4, e4) {
      t4.on("mouseover", function(t5) {
        var n3 = av(t5.target, kl);
        n3 && ((function(t6, e5, n4) {
          var i3 = Os(t6), r3 = yl(i3.componentMainType, i3.componentIndex, i3.componentHighDownName, n4), o2 = r3.dispatchers, a2 = r3.focusSelf;
          o2 ? (a2 && vl(i3.componentMainType, i3.componentIndex, n4), Y(o2, function(t7) {
            return ol(t7, e5);
          })) : (gl(i3.seriesIndex, i3.focus, i3.blurScope, n4), i3.focus === "self" && vl(i3.componentMainType, i3.componentIndex, n4), ol(t6, e5));
        })(n3, t5, e4._api), Ty(e4));
      }).on("mouseout", function(t5) {
        var n3 = av(t5.target, kl);
        n3 && ((function(t6, e5, n4) {
          fl(n4);
          var i3 = Os(t6), r3 = yl(i3.componentMainType, i3.componentIndex, i3.componentHighDownName, n4).dispatchers;
          r3 ? Y(r3, function(t7) {
            return al(t7, e5);
          }) : al(t6, e5);
        })(n3, t5, e4._api), Ty(e4));
      }).on("click", function(t5) {
        var n3 = av(t5.target, function(t6) {
          return Os(t6).dataIndex != null;
        }, !0);
        if (n3) {
          var i3 = n3.selected ? "unselect" : "select", r3 = Os(n3);
          e4._api.dispatchAction({ type: i3, dataType: r3.dataType, dataIndexInside: r3.dataIndex, seriesIndex: r3.seriesIndex, isFromClick: !0 });
        }
      });
    }, xy = function(t4, e4, n3, i3, r3) {
      (function(t5) {
        var e5 = [], n4 = [], i4 = !1;
        if (t5.eachComponent(function(t6, r5) {
          var o3 = r5.get("zlevel") || 0, a3 = r5.get("z") || 0, s2 = r5.getZLevelKey();
          i4 = i4 || !!s2, (t6 === "series" ? n4 : e5).push({ zlevel: o3, z: a3, idx: r5.componentIndex, type: t6, key: s2 });
        }), i4) {
          var r4, o2, a2 = e5.concat(n4);
          Je(a2, function(t6, e6) {
            return t6.zlevel === e6.zlevel ? t6.z - e6.z : t6.zlevel - e6.zlevel;
          }), Y(a2, function(e6) {
            var n5 = t5.getComponent(e6.type, e6.idx), i5 = e6.zlevel, a3 = e6.key;
            r4 != null && (i5 = Math.max(r4, i5)), a3 ? (i5 === r4 && a3 !== o2 && i5++, o2 = a3) : o2 && (i5 === r4 && i5++, o2 = ""), r4 = i5, n5.setZLevel(i5);
          });
        }
      })(e4), by(t4, e4, n3, i3, r3), Y(t4._chartsViews, function(t5) {
        t5.__alive = !1;
      }), wy(t4, e4, n3, i3, r3), Y(t4._chartsViews, function(t5) {
        t5.__alive || t5.remove(e4, n3);
      });
    }, by = function(t4, e4, o2, a2, s2, l2) {
      Y(l2 || t4._componentsViews, function(t5) {
        var s3 = t5.__model;
        i2(s3, t5), t5.render(s3, e4, o2, a2), n2(s3, t5), r2(s3, t5);
      });
    }, wy = function(t4, e4, o2, a2, s2, l2) {
      var u2 = t4._scheduler;
      s2 = H(s2 || {}, { updatedSeries: e4.getSeries() }), qv.trigger("series:beforeupdate", e4, o2, s2);
      var h2 = !1;
      e4.eachSeries(function(e5) {
        var n3 = t4._chartsMap[e5.__viewId];
        n3.__alive = !0;
        var r3 = n3.renderTask;
        u2.updatePayload(r3, a2), i2(e5, n3), l2 && l2.get(e5.uid) && r3.dirty(), r3.perform(u2.getPerformArgs(r3)) && (h2 = !0), n3.group.silent = !!e5.get("silent"), (function(t5, e6) {
          var n4 = t5.get("blendMode") || null;
          e6.eachRendered(function(t6) {
            t6.isGroup || (t6.style.blend = n4);
          });
        })(e5, n3), ml(e5);
      }), u2.unfinished = h2 || u2.unfinished, qv.trigger("series:layoutlabels", e4, o2, s2), qv.trigger("series:transition", e4, o2, s2), e4.eachSeries(function(e5) {
        var i3 = t4._chartsMap[e5.__viewId];
        n2(e5, i3), r2(e5, i3);
      }), (function(t5, e5) {
        var n3 = t5._zr, i3 = n3.storage, r3 = 0;
        i3.traverse(function(t6) {
          t6.isGroup || r3++;
        }), r3 > e5.get("hoverLayerThreshold") && !b.node && !b.worker && e5.eachSeries(function(e6) {
          if (!e6.preventUsingHoverLayer) {
            var n4 = t5._chartsMap[e6.__viewId];
            n4.__alive && n4.eachRendered(function(t6) {
              t6.states.emphasis && (t6.states.emphasis.hoverLayer = !0);
            });
          }
        });
      })(t4, e4), qv.trigger("series:afterupdate", e4, o2, s2);
    }, Ty = function(t4) {
      t4[iy] = !0, t4.getZr().wakeUp();
    }, Cy = function(t4) {
      t4[ey] = (t4[ey] + 1) % 1e3;
    }, ky = function(t4) {
      t4[iy] && (t4.getZr().storage.traverse(function(t5) {
        Yu(t5) || e3(t5);
      }), t4[iy] = !1);
    }, Sy = function(t4) {
      return new ((function(e4) {
        function n3() {
          return e4 !== null && e4.apply(this, arguments) || this;
        }
        return _(n3, e4), n3.prototype.getCoordinateSystems = function() {
          return t4._coordSysMgr.getCoordinateSystems();
        }, n3.prototype.getComponentByElement = function(e5) {
          for (; e5; ) {
            var n4 = e5.__ecComponentInfo;
            if (n4 != null) return t4._model.getComponent(n4.mainType, n4.index);
            e5 = e5.parent;
          }
        }, n3.prototype.enterEmphasis = function(e5, n4) {
          sl(e5, n4), Ty(t4);
        }, n3.prototype.leaveEmphasis = function(e5, n4) {
          ll(e5, n4), Ty(t4);
        }, n3.prototype.enterBlur = function(e5) {
          ul(e5), Ty(t4);
        }, n3.prototype.leaveBlur = function(e5) {
          hl(e5), Ty(t4);
        }, n3.prototype.enterSelect = function(e5) {
          cl(e5), Ty(t4);
        }, n3.prototype.leaveSelect = function(e5) {
          pl(e5), Ty(t4);
        }, n3.prototype.getModel = function() {
          return t4.getModel();
        }, n3.prototype.getViewOfComponentModel = function(e5) {
          return t4.getViewOfComponentModel(e5);
        }, n3.prototype.getViewOfSeriesModel = function(e5) {
          return t4.getViewOfSeriesModel(e5);
        }, n3.prototype.getMainProcessVersion = function() {
          return t4[ey];
        }, n3;
      })(od))(t4);
    }, My = function(t4) {
      function e4(t5, e5) {
        for (var n3 = 0; n3 < t5.length; n3++)
          t5[n3][oy] = e5;
      }
      Y(Ry, function(n3, i3) {
        t4._messageCenter.on(i3, function(n4) {
          if (Wy[t4.group] && t4[oy] !== 0) {
            if (n4 && n4.escapeConnect) return;
            var i4 = t4.makeActionFromEvent(n4), r3 = [];
            Y(Hy, function(e5) {
              e5 !== t4 && e5.group === t4.group && r3.push(e5);
            }), e4(r3, 0), Y(r3, function(t5) {
              t5[oy] !== 1 && t5.dispatchAction(i4);
            }), e4(r3, 2);
          }
        });
      });
    };
  })(), e2;
})(Gt), Ly = Ay.prototype;
Ly.on = ay("on"), Ly.off = ay("off"), Ly.one = function(t2, e2, n2) {
  var i2 = this;
  this.on.call(this, t2, function n3() {
    for (var r2 = [], o2 = 0; o2 < arguments.length; o2++) r2[o2] = arguments[o2];
    e2 && e2.apply && e2.apply(this, r2), i2.off(t2, n3);
  }, n2);
};
var Py = ["click", "dblclick", "mouseover", "mouseout", "mousemove", "mousedown", "mouseup", "globalout", "contextmenu"], Oy = {}, Ry = {}, Ny = {}, zy = [], By = [], Ey = [], Fy = {}, Vy = {}, Hy = {}, Wy = {}, Gy = +/* @__PURE__ */ new Date() - 0, Uy = "_echarts_instance_";
function Xy(t2, e2, n2) {
  var i2 = !(n2 && n2.ssr);
  if (i2) {
    var r2 = (function(t3) {
      return Hy[(function(t4, e3) {
        return t4.getAttribute ? t4.getAttribute(e3) : t4[e3];
      })(t3, Uy)];
    })(t2);
    if (r2) return r2;
  }
  var o2 = new Ay(t2, e2, n2);
  return o2.id = "ec_" + Gy++, Hy[o2.id] = o2, i2 && yo(t2, Uy, o2.id), My(o2), qv.trigger("afterinit", o2), o2;
}
function Yy(t2, e2) {
  Fy[t2] = e2;
}
function Zy(t2) {
  G(By, t2) < 0 && By.push(t2);
}
function jy(t2, e2) {
  Jy(zy, t2, e2, 2e3);
}
function qy(t2, e2) {
  qv.on(t2, e2);
}
function Ky(t2, e2, n2) {
  var i2, r2, o2, a2, s2;
  function l2(t3) {
    return t3.toLowerCase();
  }
  tt(e2) && (n2 = e2, e2 = ""), rt(t2) ? (i2 = t2.type, r2 = t2.event, a2 = t2.update, s2 = t2.publishNonRefinedEvent, n2 || (n2 = t2.action), o2 = t2.refineEvent) : (i2 = t2, r2 = e2), r2 = l2(r2 || i2);
  var u2 = o2 ? l2(i2) : r2;
  Oy[i2] || (gt(ry.test(i2) && ry.test(r2)), o2 && gt(r2 !== i2), Oy[i2] = { actionType: i2, refinedEventType: r2, nonRefinedEventType: u2, update: a2, action: n2, refineEvent: o2 }, Ny[r2] = 1, o2 && s2 && (Ny[u2] = 1), Ry[u2] = i2);
}
function $y(t2, e2) {
  Jy(Ey, t2, e2, 3e3, "visual");
}
var Qy = [];
function Jy(t2, e2, n2, i2, r2) {
  if ((tt(e2) || rt(e2)) && (n2 = e2, e2 = i2), !(G(Qy, n2) >= 0)) {
    Qy.push(n2);
    var o2 = Pg.wrapStageHandler(n2, r2);
    o2.__prio = e2, o2.__raw = n2, t2.push(o2);
  }
}
function tm(t2, e2) {
  Vy[t2] = e2;
}
var em = function(t2) {
  var e2 = (t2 = F(t2)).type;
  e2 || jr("");
  var n2 = e2.split(":");
  n2.length !== 2 && jr("");
  var i2 = !1;
  n2[0] === "echarts" && (e2 = n2[1], i2 = !0), t2.__isBuiltIn = i2, vf.set(e2, t2);
};
function nm(t2, e2, n2, i2) {
  return { eventContent: { selected: _l(n2), isFromClick: e2.isFromClick || !1 } };
}
function im(t2) {
  return t2 == null ? 0 : t2.length || 1;
}
function rm(t2) {
  return t2;
}
$y($v, Cg), $y(Qv, Dg), $y(Qv, Ag), $y($v, nv), $y(Qv, iv), $y(7e3, function(t2, e2) {
  t2.eachRawSeries(function(n2) {
    if (!t2.isSeriesFiltered(n2)) {
      var i2 = n2.getData();
      i2.hasItemVisual() && i2.each(function(t3) {
        var n3 = i2.getItemVisual(t3, "decal");
        n3 && (i2.ensureUniqueItemVisual(t3, "style").decal = Xv(n3, e2));
      });
      var r2 = i2.getVisual("decal");
      r2 && (i2.getVisual("style").decal = Xv(r2, e2));
    }
  });
}), Zy(Id), jy(900, function(t2) {
  var e2 = St();
  t2.eachSeries(function(t3) {
    var n2 = t3.get("stack");
    if (n2) {
      var i2 = e2.get(n2) || e2.set(n2, []), r2 = t3.getData(), o2 = { stackResultDimension: r2.getCalculationInfo("stackResultDimension"), stackedOverDimension: r2.getCalculationInfo("stackedOverDimension"), stackedDimension: r2.getCalculationInfo("stackedDimension"), stackedByDimension: r2.getCalculationInfo("stackedByDimension"), isStackedByIndex: r2.getCalculationInfo("isStackedByIndex"), data: r2, seriesModel: t3 };
      if (!o2.stackedDimension || !o2.isStackedByIndex && !o2.stackedByDimension) return;
      i2.push(o2);
    }
  }), e2.each(function(t3) {
    t3.length !== 0 && ((t3[0].seriesModel.get("stackOrder") || "seriesAsc") === "seriesDesc" && t3.reverse(), Y(t3, function(e3, n2) {
      e3.data.setCalculationInfo("stackedOnSeries", n2 > 0 ? t3[n2 - 1].seriesModel : null);
    }), (function(t4) {
      Y(t4, function(e3, n2) {
        var i2 = [], r2 = [NaN, NaN], o2 = [e3.stackResultDimension, e3.stackedOverDimension], a2 = e3.data, s2 = e3.isStackedByIndex, l2 = e3.seriesModel.get("stackStrategy") || "samesign";
        a2.modify(o2, function(o3, u2, h2) {
          var c2, p2, d2 = a2.get(e3.stackedDimension, h2);
          if (isNaN(d2)) return r2;
          s2 ? p2 = a2.getRawIndex(h2) : c2 = a2.get(e3.stackedByDimension, h2);
          for (var f2 = NaN, g2 = n2 - 1; g2 >= 0; g2--) {
            var v2 = t4[g2];
            if (s2 || (p2 = v2.data.rawIndexOf(v2.stackedByDimension, c2)), p2 >= 0) {
              var y2 = v2.data.getByRawIndex(v2.stackResultDimension, p2);
              if (l2 === "all" || l2 === "positive" && y2 > 0 || l2 === "negative" && y2 < 0 || l2 === "samesign" && d2 >= 0 && y2 > 0 || l2 === "samesign" && d2 <= 0 && y2 < 0) {
                d2 = zr(d2, y2), f2 = y2;
                break;
              }
            }
          }
          return i2[0] = d2, i2[1] = f2, i2;
        });
      });
    })(t3));
  });
}), tm("default", function(t2, e2) {
  W(e2 = e2 || {}, { text: "loading", textColor: wp.color.primary, fontSize: 12, fontWeight: "normal", fontStyle: "normal", fontFamily: "sans-serif", maskColor: "rgba(255,255,255,0.8)", showSpinner: !0, color: wp.color.theme[0], spinnerRadius: 10, lineWidth: 5, zlevel: 0 });
  var n2 = new xr(), i2 = new ys({ style: { fill: e2.maskColor }, zlevel: e2.zlevel, z: 1e4 });
  n2.add(i2);
  var r2, o2 = new bs({ style: { text: e2.text, fill: e2.textColor, fontSize: e2.fontSize, fontWeight: e2.fontWeight, fontStyle: e2.fontStyle, fontFamily: e2.fontFamily }, zlevel: e2.zlevel, z: 10001 }), a2 = new ys({ style: { fill: "none" }, textContent: o2, textConfig: { position: "right", distance: 10 }, zlevel: e2.zlevel, z: 10001 });
  return n2.add(a2), e2.showSpinner && ((r2 = new ku({ shape: { startAngle: -Lg / 2, endAngle: -Lg / 2 + 0.1, r: e2.spinnerRadius }, style: { stroke: e2.color, lineCap: "round", lineWidth: e2.lineWidth }, zlevel: e2.zlevel, z: 10001 })).animateShape(!0).when(1e3, { endAngle: 3 * Lg / 2 }).start("circularInOut"), r2.animateShape(!0).when(1e3, { startAngle: 3 * Lg / 2 }).delay(300).start("circularInOut"), n2.add(r2)), n2.resize = function() {
    var n3 = o2.getBoundingRect().width, s2 = e2.showSpinner ? e2.spinnerRadius : 0, l2 = (t2.getWidth() - 2 * s2 - (e2.showSpinner && n3 ? 10 : 0) - n3) / 2 - (e2.showSpinner && n3 ? 0 : 5 + n3 / 2) + (e2.showSpinner ? 0 : n3 / 2) + (n3 ? 0 : s2), u2 = t2.getHeight() / 2;
    e2.showSpinner && r2.setShape({ cx: l2, cy: u2 }), a2.setShape({ x: l2 - s2, y: u2 - s2, width: 2 * s2, height: 2 * s2 }), i2.setShape({ x: 0, y: 0, width: t2.getWidth(), height: t2.getHeight() });
  }, n2.resize(), n2;
}), Ky({ type: Vs, event: Vs, update: Vs }, Ct), Ky({ type: Hs, event: Hs, update: Hs }, Ct), Ky({ type: Ws, event: Xs, update: Ws, action: Ct, refineEvent: nm, publishNonRefinedEvent: !0 }), Ky({ type: Gs, event: Xs, update: Gs, action: Ct, refineEvent: nm, publishNonRefinedEvent: !0 }), Ky({ type: Us, event: Xs, update: Us, action: Ct, refineEvent: nm, publishNonRefinedEvent: !0 }), Yy("default", {}), Yy("dark", Qg);
var om = (function() {
  function t2(t3, e2, n2, i2, r2, o2) {
    this._old = t3, this._new = e2, this._oldKeyGetter = n2 || rm, this._newKeyGetter = i2 || rm, this.context = r2, this._diffModeMultiple = o2 === "multiple";
  }
  return t2.prototype.add = function(t3) {
    return this._add = t3, this;
  }, t2.prototype.update = function(t3) {
    return this._update = t3, this;
  }, t2.prototype.updateManyToOne = function(t3) {
    return this._updateManyToOne = t3, this;
  }, t2.prototype.updateOneToMany = function(t3) {
    return this._updateOneToMany = t3, this;
  }, t2.prototype.updateManyToMany = function(t3) {
    return this._updateManyToMany = t3, this;
  }, t2.prototype.remove = function(t3) {
    return this._remove = t3, this;
  }, t2.prototype.execute = function() {
    this[this._diffModeMultiple ? "_executeMultiple" : "_executeOneToOne"]();
  }, t2.prototype._executeOneToOne = function() {
    var t3 = this._old, e2 = this._new, n2 = {}, i2 = new Array(t3.length), r2 = new Array(e2.length);
    this._initIndexMap(t3, null, i2, "_oldKeyGetter"), this._initIndexMap(e2, n2, r2, "_newKeyGetter");
    for (var o2 = 0; o2 < t3.length; o2++) {
      var a2 = i2[o2], s2 = n2[a2], l2 = im(s2);
      if (l2 > 1) {
        var u2 = s2.shift();
        s2.length === 1 && (n2[a2] = s2[0]), this._update && this._update(u2, o2);
      } else l2 === 1 ? (n2[a2] = null, this._update && this._update(s2, o2)) : this._remove && this._remove(o2);
    }
    this._performRestAdd(r2, n2);
  }, t2.prototype._executeMultiple = function() {
    var t3 = this._old, e2 = this._new, n2 = {}, i2 = {}, r2 = [], o2 = [];
    this._initIndexMap(t3, n2, r2, "_oldKeyGetter"), this._initIndexMap(e2, i2, o2, "_newKeyGetter");
    for (var a2 = 0; a2 < r2.length; a2++) {
      var s2 = r2[a2], l2 = n2[s2], u2 = i2[s2], h2 = im(l2), c2 = im(u2);
      if (h2 > 1 && c2 === 1) this._updateManyToOne && this._updateManyToOne(u2, l2), i2[s2] = null;
      else if (h2 === 1 && c2 > 1) this._updateOneToMany && this._updateOneToMany(u2, l2), i2[s2] = null;
      else if (h2 === 1 && c2 === 1) this._update && this._update(u2, l2), i2[s2] = null;
      else if (h2 > 1 && c2 > 1) this._updateManyToMany && this._updateManyToMany(u2, l2), i2[s2] = null;
      else if (h2 > 1) for (var p2 = 0; p2 < h2; p2++) this._remove && this._remove(l2[p2]);
      else this._remove && this._remove(l2);
    }
    this._performRestAdd(o2, i2);
  }, t2.prototype._performRestAdd = function(t3, e2) {
    for (var n2 = 0; n2 < t3.length; n2++) {
      var i2 = t3[n2], r2 = e2[i2], o2 = im(r2);
      if (o2 > 1) for (var a2 = 0; a2 < o2; a2++) this._add && this._add(r2[a2]);
      else o2 === 1 && this._add && this._add(r2);
      e2[i2] = null;
    }
  }, t2.prototype._initIndexMap = function(t3, e2, n2, i2) {
    for (var r2 = this._diffModeMultiple, o2 = 0; o2 < t3.length; o2++) {
      var a2 = "_ec_" + this[i2](t3[o2], o2);
      if (r2 || (n2[o2] = a2), e2) {
        var s2 = e2[a2], l2 = im(s2);
        l2 === 0 ? (e2[a2] = o2, r2 && n2.push(a2)) : l2 === 1 ? e2[a2] = [s2, o2] : s2.push(o2);
      }
    }
  }, t2;
})(), am = (function() {
  function t2(t3, e2) {
    this._encode = t3, this._schema = e2;
  }
  return t2.prototype.get = function() {
    return { fullDimensions: this._getFullDimensionNames(), encode: this._encode };
  }, t2.prototype._getFullDimensionNames = function() {
    return this._cachedDimNames || (this._cachedDimNames = this._schema ? this._schema.makeOutputDimensionNames() : []), this._cachedDimNames;
  }, t2;
})();
function sm(t2, e2) {
  return t2.hasOwnProperty(e2) || (t2[e2] = []), t2[e2];
}
function lm(t2) {
  return t2 === "category" ? "ordinal" : t2 === "time" ? "time" : "float";
}
var um = /* @__PURE__ */ (function() {
  return function(t2) {
    this.otherDims = {}, t2 != null && H(this, t2);
  };
})(), hm = uo(), cm = { float: "f", int: "i", ordinal: "o", number: "n", time: "t" }, pm = (function() {
  function t2(t3) {
    this.dimensions = t3.dimensions, this._dimOmitted = t3.dimensionOmitted, this.source = t3.source, this._fullDimCount = t3.fullDimensionCount, this._updateDimOmitted(t3.dimensionOmitted);
  }
  return t2.prototype.isDimensionOmitted = function() {
    return this._dimOmitted;
  }, t2.prototype._updateDimOmitted = function(t3) {
    this._dimOmitted = t3, t3 && (this._dimNameMap || (this._dimNameMap = gm(this.source)));
  }, t2.prototype.getSourceDimensionIndex = function(t3) {
    return ct(this._dimNameMap.get(t3), -1);
  }, t2.prototype.getSourceDimension = function(t3) {
    var e2 = this.source.dimensionsDefine;
    if (e2) return e2[t3];
  }, t2.prototype.makeStoreSchema = function() {
    for (var t3 = this._fullDimCount, e2 = Wd(this.source), n2 = !vm(t3), i2 = "", r2 = [], o2 = 0, a2 = 0; o2 < t3; o2++) {
      var s2 = void 0, l2 = void 0, u2 = void 0, h2 = this.dimensions[a2];
      if (h2 && h2.storeDimIndex === o2) s2 = e2 ? h2.name : null, l2 = h2.type, u2 = h2.ordinalMeta, a2++;
      else {
        var c2 = this.getSourceDimension(o2);
        c2 && (s2 = e2 ? c2.name : null, l2 = c2.type);
      }
      r2.push({ property: s2, type: l2, ordinalMeta: u2 }), !e2 || s2 == null || h2 && h2.isCalculationCoord || (i2 += n2 ? s2.replace(/\`/g, "`1").replace(/\$/g, "`2") : s2), i2 += "$", i2 += cm[l2] || "f", u2 && (i2 += u2.uid), i2 += "$";
    }
    var p2 = this.source;
    return { dimensions: r2, hash: [p2.seriesLayoutBy, p2.startIndex, i2].join("$$") };
  }, t2.prototype.makeOutputDimensionNames = function() {
    for (var t3 = [], e2 = 0, n2 = 0; e2 < this._fullDimCount; e2++) {
      var i2 = void 0, r2 = this.dimensions[n2];
      if (r2 && r2.storeDimIndex === e2) r2.isCalculationCoord || (i2 = r2.name), n2++;
      else {
        var o2 = this.getSourceDimension(e2);
        o2 && (i2 = o2.name);
      }
      t3.push(i2);
    }
    return t3;
  }, t2.prototype.appendCalculationDimension = function(t3) {
    this.dimensions.push(t3), t3.isCalculationCoord = !0, this._fullDimCount++, this._updateDimOmitted(!0);
  }, t2;
})();
function dm(t2) {
  return t2 instanceof pm;
}
function fm(t2) {
  for (var e2 = St(), n2 = 0; n2 < (t2 || []).length; n2++) {
    var i2 = t2[n2], r2 = rt(i2) ? i2.name : i2;
    r2 != null && e2.get(r2) == null && e2.set(r2, n2);
  }
  return e2;
}
function gm(t2) {
  var e2 = hm(t2);
  return e2.dimNameMap || (e2.dimNameMap = fm(t2.dimensionsDefine));
}
function vm(t2) {
  return t2 > 30;
}
var ym, mm, _m, xm, bm, wm, Sm, Mm = rt, Tm = Z, km = typeof Int32Array > "u" ? Array : Int32Array, Cm = ["hasItemOption", "_nameList", "_idList", "_invertedIndicesMap", "_dimSummary", "userOutput", "_rawData", "_dimValueGetter", "_nameDimIdx", "_idDimIdx", "_nameRepeatCount"], Im = ["_approximateExtent"], Dm = (function() {
  function t2(t3, e2) {
    var n2;
    this.type = "list", this._dimOmitted = !1, this._nameList = [], this._idList = [], this._visual = {}, this._layout = {}, this._itemVisuals = [], this._itemLayouts = [], this._graphicEls = [], this._approximateExtent = {}, this._calculationInfo = {}, this.hasItemOption = !1, this.TRANSFERABLE_METHODS = ["cloneShallow", "downSample", "minmaxDownSample", "lttbDownSample", "map"], this.CHANGABLE_METHODS = ["filterSelf", "selectRange"], this.DOWNSAMPLE_METHODS = ["downSample", "minmaxDownSample", "lttbDownSample"];
    var i2 = !1;
    dm(t3) ? (n2 = t3.dimensions, this._dimOmitted = t3.isDimensionOmitted(), this._schema = t3) : (i2 = !0, n2 = t3), n2 = n2 || ["x", "y"];
    for (var r2 = {}, o2 = [], a2 = {}, s2 = !1, l2 = {}, u2 = 0; u2 < n2.length; u2++) {
      var h2 = n2[u2], c2 = et(h2) ? new um({ name: h2 }) : h2 instanceof um ? h2 : new um(h2), p2 = c2.name;
      c2.type = c2.type || "float", c2.coordDim || (c2.coordDim = p2, c2.coordDimIndex = 0);
      var d2 = c2.otherDims = c2.otherDims || {};
      o2.push(p2), r2[p2] = c2, l2[p2] != null && (s2 = !0), c2.createInvertedIndices && (a2[p2] = []);
      var f2 = u2;
      it(c2.storeDimIndex) && (f2 = c2.storeDimIndex), d2.itemName === 0 && (this._nameDimIdx = f2), d2.itemId === 0 && (this._idDimIdx = f2), i2 && (c2.storeDimIndex = u2);
    }
    if (this.dimensions = o2, this._dimInfos = r2, this._initGetDimensionInfo(s2), this.hostModel = e2, this._invertedIndicesMap = a2, this._dimOmitted) {
      var g2 = this._dimIdxToName = St();
      Y(o2, function(t4) {
        g2.set(r2[t4].storeDimIndex, t4);
      });
    }
  }
  return t2.prototype.getDimension = function(t3) {
    var e2 = this._recognizeDimIndex(t3);
    if (e2 == null) return t3;
    if (e2 = t3, !this._dimOmitted) return this.dimensions[e2];
    var n2 = this._dimIdxToName.get(e2);
    if (n2 != null) return n2;
    var i2 = this._schema.getSourceDimension(e2);
    return i2 ? i2.name : void 0;
  }, t2.prototype.getDimensionIndex = function(t3) {
    var e2 = this._recognizeDimIndex(t3);
    if (e2 != null) return e2;
    if (t3 == null) return -1;
    var n2 = this._getDimInfo(t3);
    return n2 ? n2.storeDimIndex : this._dimOmitted ? this._schema.getSourceDimensionIndex(t3) : -1;
  }, t2.prototype._recognizeDimIndex = function(t3) {
    if (it(t3) || t3 != null && !isNaN(t3) && !this._getDimInfo(t3) && (!this._dimOmitted || this._schema.getSourceDimensionIndex(t3) < 0)) return +t3;
  }, t2.prototype._getStoreDimIndex = function(t3) {
    return this.getDimensionIndex(t3);
  }, t2.prototype.getDimensionInfo = function(t3) {
    return this._getDimInfo(this.getDimension(t3));
  }, t2.prototype._initGetDimensionInfo = function(t3) {
    var e2 = this._dimInfos;
    this._getDimInfo = t3 ? function(t4) {
      return e2.hasOwnProperty(t4) ? e2[t4] : void 0;
    } : function(t4) {
      return e2[t4];
    };
  }, t2.prototype.getDimensionsOnCoord = function() {
    return this._dimSummary.dataDimsOnCoord.slice();
  }, t2.prototype.mapDimension = function(t3, e2) {
    var n2 = this._dimSummary;
    if (e2 == null) return n2.encodeFirstDimNotExtra[t3];
    var i2 = n2.encode[t3];
    return i2 ? i2[e2] : null;
  }, t2.prototype.mapDimensionsAll = function(t3) {
    return (this._dimSummary.encode[t3] || []).slice();
  }, t2.prototype.getStore = function() {
    return this._store;
  }, t2.prototype.initData = function(t3, e2, n2) {
    var i2, r2 = this;
    if (t3 instanceof Af && (i2 = t3), !i2) {
      var o2 = this.dimensions, a2 = zd(t3) || X(t3) ? new Gd(t3, o2.length) : t3;
      i2 = new Af();
      var s2 = Tm(o2, function(t4) {
        return { type: r2._dimInfos[t4].type, property: t4 };
      });
      i2.initData(a2, s2, n2);
    }
    this._store = i2, this._nameList = (e2 || []).slice(), this._idList = [], this._nameRepeatCount = {}, this._doInit(0, i2.count()), this._dimSummary = (function(t4, e3) {
      var n3 = {}, i3 = n3.encode = {}, r3 = St(), o3 = [], a3 = [], s3 = {};
      Y(t4.dimensions, function(e4) {
        var n4, l3 = t4.getDimensionInfo(e4), u3 = l3.coordDim;
        if (u3) {
          var h3 = l3.coordDimIndex;
          sm(i3, u3)[h3] = e4, l3.isExtraCoord || (r3.set(u3, 1), (n4 = l3.type) !== "ordinal" && n4 !== "time" && (o3[0] = e4), sm(s3, u3)[h3] = t4.getDimensionIndex(l3.name)), l3.defaultTooltip && a3.push(e4);
        }
        Lp.each(function(t5, e5) {
          var n5 = sm(i3, e5), r4 = l3.otherDims[e5];
          r4 != null && r4 !== !1 && (n5[r4] = l3.name);
        });
      });
      var l2 = [], u2 = {};
      r3.each(function(t5, e4) {
        var n4 = i3[e4];
        u2[e4] = n4[0], l2 = l2.concat(n4);
      }), n3.dataDimsOnCoord = l2, n3.dataDimIndicesOnCoord = Z(l2, function(e4) {
        return t4.getDimensionInfo(e4).storeDimIndex;
      }), n3.encodeFirstDimNotExtra = u2;
      var h2 = i3.label;
      h2 && h2.length && (o3 = h2.slice());
      var c2 = i3.tooltip;
      return c2 && c2.length ? a3 = c2.slice() : a3.length || (a3 = o3.slice()), i3.defaultedLabel = o3, i3.defaultedTooltip = a3, n3.userOutput = new am(s3, e3), n3;
    })(this, this._schema), this.userOutput = this._dimSummary.userOutput;
  }, t2.prototype.appendData = function(t3) {
    var e2 = this._store.appendData(t3);
    this._doInit(e2[0], e2[1]);
  }, t2.prototype.appendValues = function(t3, e2) {
    var n2 = this._store.appendValues(t3, e2 && e2.length), i2 = n2.start, r2 = n2.end, o2 = this._shouldMakeIdFromName();
    if (this._updateOrdinalMeta(), e2) for (var a2 = i2; a2 < r2; a2++) {
      var s2 = a2 - i2;
      this._nameList[a2] = e2[s2], o2 && Sm(this, a2);
    }
  }, t2.prototype._updateOrdinalMeta = function() {
    for (var t3 = this._store, e2 = this.dimensions, n2 = 0; n2 < e2.length; n2++) {
      var i2 = this._dimInfos[e2[n2]];
      i2.ordinalMeta && t3.collectOrdinalMeta(i2.storeDimIndex, i2.ordinalMeta);
    }
  }, t2.prototype._shouldMakeIdFromName = function() {
    var t3 = this._store.getProvider();
    return this._idDimIdx == null && t3.getSource().sourceFormat !== zp && !t3.fillStorage;
  }, t2.prototype._doInit = function(t3, e2) {
    if (!(t3 >= e2)) {
      var n2 = this._store.getProvider();
      this._updateOrdinalMeta();
      var i2 = this._nameList, r2 = this._idList;
      if (n2.getSource().sourceFormat === Pp && !n2.pure) for (var o2 = [], a2 = t3; a2 < e2; a2++) {
        var s2 = n2.getItem(a2, o2);
        if (!this.hasItemOption && eo(s2) && (this.hasItemOption = !0), s2) {
          var l2 = s2.name;
          i2[a2] == null && l2 != null && (i2[a2] = oo(l2, null));
          var u2 = s2.id;
          r2[a2] == null && u2 != null && (r2[a2] = oo(u2, null));
        }
      }
      if (this._shouldMakeIdFromName()) for (a2 = t3; a2 < e2; a2++) Sm(this, a2);
      ym(this);
    }
  }, t2.prototype.getApproximateExtent = function(t3) {
    return this._approximateExtent[t3] || this._store.getDataExtent(this._getStoreDimIndex(t3));
  }, t2.prototype.setApproximateExtent = function(t3, e2) {
    e2 = this.getDimension(e2), this._approximateExtent[e2] = t3.slice();
  }, t2.prototype.getCalculationInfo = function(t3) {
    return this._calculationInfo[t3];
  }, t2.prototype.setCalculationInfo = function(t3, e2) {
    Mm(t3) ? H(this._calculationInfo, t3) : this._calculationInfo[t3] = e2;
  }, t2.prototype.getName = function(t3) {
    var e2 = this.getRawIndex(t3), n2 = this._nameList[e2];
    return n2 == null && this._nameDimIdx != null && (n2 = _m(this, this._nameDimIdx, e2)), n2 == null && (n2 = ""), n2;
  }, t2.prototype._getCategory = function(t3, e2) {
    var n2 = this._store.get(t3, e2), i2 = this._store.getOrdinalMeta(t3);
    return i2 ? i2.categories[n2] : n2;
  }, t2.prototype.getId = function(t3) {
    return mm(this, this.getRawIndex(t3));
  }, t2.prototype.count = function() {
    return this._store.count();
  }, t2.prototype.get = function(t3, e2) {
    var n2 = this._store, i2 = this._dimInfos[t3];
    if (i2) return n2.get(i2.storeDimIndex, e2);
  }, t2.prototype.getByRawIndex = function(t3, e2) {
    var n2 = this._store, i2 = this._dimInfos[t3];
    if (i2) return n2.getByRawIndex(i2.storeDimIndex, e2);
  }, t2.prototype.getIndices = function() {
    return this._store.getIndices();
  }, t2.prototype.getDataExtent = function(t3) {
    return this._store.getDataExtent(this._getStoreDimIndex(t3));
  }, t2.prototype.getSum = function(t3) {
    return this._store.getSum(this._getStoreDimIndex(t3));
  }, t2.prototype.getMedian = function(t3) {
    return this._store.getMedian(this._getStoreDimIndex(t3));
  }, t2.prototype.getValues = function(t3, e2) {
    var n2 = this, i2 = this._store;
    return J(t3) ? i2.getValues(Tm(t3, function(t4) {
      return n2._getStoreDimIndex(t4);
    }), e2) : i2.getValues(t3);
  }, t2.prototype.hasValue = function(t3) {
    for (var e2 = this._dimSummary.dataDimIndicesOnCoord, n2 = 0, i2 = e2.length; n2 < i2; n2++) if (isNaN(this._store.get(e2[n2], t3))) return !1;
    return !0;
  }, t2.prototype.indexOfName = function(t3) {
    for (var e2 = 0, n2 = this._store.count(); e2 < n2; e2++) if (this.getName(e2) === t3) return e2;
    return -1;
  }, t2.prototype.getRawIndex = function(t3) {
    return this._store.getRawIndex(t3);
  }, t2.prototype.indexOfRawIndex = function(t3) {
    return this._store.indexOfRawIndex(t3);
  }, t2.prototype.rawIndexOf = function(t3, e2) {
    var n2 = t3 && this._invertedIndicesMap[t3], i2 = n2 && n2[e2];
    return i2 == null || isNaN(i2) ? -1 : i2;
  }, t2.prototype.each = function(t3, e2, n2) {
    tt(t3) && (n2 = e2, e2 = t3, t3 = []);
    var i2 = n2 || this, r2 = Tm(xm(t3), this._getStoreDimIndex, this);
    this._store.each(r2, i2 ? $(e2, i2) : e2);
  }, t2.prototype.filterSelf = function(t3, e2, n2) {
    tt(t3) && (n2 = e2, e2 = t3, t3 = []);
    var i2 = n2 || this, r2 = Tm(xm(t3), this._getStoreDimIndex, this);
    return this._store = this._store.filter(r2, i2 ? $(e2, i2) : e2), this;
  }, t2.prototype.selectRange = function(t3) {
    var e2 = this, n2 = {};
    return Y(K(t3), function(i2) {
      var r2 = e2._getStoreDimIndex(i2);
      n2[r2] = t3[i2];
    }), this._store = this._store.selectRange(n2), this;
  }, t2.prototype.mapArray = function(t3, e2, n2) {
    tt(t3) && (n2 = e2, e2 = t3, t3 = []), n2 = n2 || this;
    var i2 = [];
    return this.each(t3, function() {
      i2.push(e2 && e2.apply(this, arguments));
    }, n2), i2;
  }, t2.prototype.map = function(t3, e2, n2, i2) {
    var r2 = n2 || i2 || this, o2 = Tm(xm(t3), this._getStoreDimIndex, this), a2 = wm(this);
    return a2._store = this._store.map(o2, r2 ? $(e2, r2) : e2), a2;
  }, t2.prototype.modify = function(t3, e2, n2, i2) {
    var r2 = n2 || i2 || this, o2 = Tm(xm(t3), this._getStoreDimIndex, this);
    this._store.modify(o2, r2 ? $(e2, r2) : e2);
  }, t2.prototype.downSample = function(t3, e2, n2, i2) {
    var r2 = wm(this);
    return r2._store = this._store.downSample(this._getStoreDimIndex(t3), e2, n2, i2), r2;
  }, t2.prototype.minmaxDownSample = function(t3, e2) {
    var n2 = wm(this);
    return n2._store = this._store.minmaxDownSample(this._getStoreDimIndex(t3), e2), n2;
  }, t2.prototype.lttbDownSample = function(t3, e2) {
    var n2 = wm(this);
    return n2._store = this._store.lttbDownSample(this._getStoreDimIndex(t3), e2), n2;
  }, t2.prototype.getRawDataItem = function(t3) {
    return this._store.getRawDataItem(t3);
  }, t2.prototype.getItemModel = function(t3) {
    var e2 = this.hostModel, n2 = this.getRawDataItem(t3);
    return new ec(n2, e2, e2 && e2.ecModel);
  }, t2.prototype.diff = function(t3) {
    var e2 = this;
    return new om(t3 ? t3.getStore().getIndices() : [], this.getStore().getIndices(), function(e3) {
      return mm(t3, e3);
    }, function(t4) {
      return mm(e2, t4);
    });
  }, t2.prototype.getVisual = function(t3) {
    var e2 = this._visual;
    return e2 && e2[t3];
  }, t2.prototype.setVisual = function(t3, e2) {
    this._visual = this._visual || {}, Mm(t3) ? H(this._visual, t3) : this._visual[t3] = e2;
  }, t2.prototype.getItemVisual = function(t3, e2) {
    var n2 = this._itemVisuals[t3], i2 = n2 && n2[e2];
    return i2 ?? this.getVisual(e2);
  }, t2.prototype.hasItemVisual = function() {
    return this._itemVisuals.length > 0;
  }, t2.prototype.ensureUniqueItemVisual = function(t3, e2) {
    var n2 = this._itemVisuals, i2 = n2[t3];
    i2 || (i2 = n2[t3] = {});
    var r2 = i2[e2];
    return r2 == null && (J(r2 = this.getVisual(e2)) ? r2 = r2.slice() : Mm(r2) && (r2 = H({}, r2)), i2[e2] = r2), r2;
  }, t2.prototype.setItemVisual = function(t3, e2, n2) {
    var i2 = this._itemVisuals[t3] || {};
    this._itemVisuals[t3] = i2, Mm(e2) ? H(i2, e2) : i2[e2] = n2;
  }, t2.prototype.clearAllVisual = function() {
    this._visual = {}, this._itemVisuals = [];
  }, t2.prototype.setLayout = function(t3, e2) {
    Mm(t3) ? H(this._layout, t3) : this._layout[t3] = e2;
  }, t2.prototype.getLayout = function(t3) {
    return this._layout[t3];
  }, t2.prototype.getItemLayout = function(t3) {
    return this._itemLayouts[t3];
  }, t2.prototype.setItemLayout = function(t3, e2, n2) {
    this._itemLayouts[t3] = n2 ? H(this._itemLayouts[t3] || {}, e2) : e2;
  }, t2.prototype.clearItemLayouts = function() {
    this._itemLayouts.length = 0;
  }, t2.prototype.setItemGraphicEl = function(t3, e2) {
    (function(t4, e3, n2, i2) {
      if (i2) {
        var r2 = Os(i2);
        r2.dataIndex = n2, r2.dataType = e3, r2.seriesIndex = t4, r2.ssrType = "chart", i2.type === "group" && i2.traverse(function(i3) {
          var r3 = Os(i3);
          r3.seriesIndex = t4, r3.dataIndex = n2, r3.dataType = e3, r3.ssrType = "chart";
        });
      }
    })(this.hostModel && this.hostModel.seriesIndex, this.dataType, t3, e2), this._graphicEls[t3] = e2;
  }, t2.prototype.getItemGraphicEl = function(t3) {
    return this._graphicEls[t3];
  }, t2.prototype.eachItemGraphicEl = function(t3, e2) {
    Y(this._graphicEls, function(n2, i2) {
      n2 && t3 && t3.call(e2, n2, i2);
    });
  }, t2.prototype.cloneShallow = function(e2) {
    return e2 || (e2 = new t2(this._schema ? this._schema : Tm(this.dimensions, this._getDimInfo, this), this.hostModel)), bm(e2, this), e2._store = this._store, e2;
  }, t2.prototype.wrapMethod = function(t3, e2) {
    var n2 = this[t3];
    tt(n2) && (this.__wrappedMethods = this.__wrappedMethods || [], this.__wrappedMethods.push(t3), this[t3] = function() {
      var t4 = n2.apply(this, arguments);
      return e2.apply(this, [t4].concat(dt(arguments)));
    });
  }, t2.internalField = (ym = function(t3) {
    var e2 = t3._invertedIndicesMap;
    Y(e2, function(n2, i2) {
      var r2 = t3._dimInfos[i2], o2 = r2.ordinalMeta, a2 = t3._store;
      if (o2) {
        n2 = e2[i2] = new km(o2.categories.length);
        for (var s2 = 0; s2 < n2.length; s2++) n2[s2] = -1;
        for (s2 = 0; s2 < a2.count(); s2++) n2[a2.get(r2.storeDimIndex, s2)] = s2;
      }
    });
  }, _m = function(t3, e2, n2) {
    return oo(t3._getCategory(e2, n2), null);
  }, mm = function(t3, e2) {
    var n2 = t3._idList[e2];
    return n2 == null && t3._idDimIdx != null && (n2 = _m(t3, t3._idDimIdx, e2)), n2 == null && (n2 = "e\0\0" + e2), n2;
  }, xm = function(t3) {
    return J(t3) || (t3 = t3 != null ? [t3] : []), t3;
  }, wm = function(e2) {
    var n2 = new t2(e2._schema ? e2._schema : Tm(e2.dimensions, e2._getDimInfo, e2), e2.hostModel);
    return bm(n2, e2), n2;
  }, bm = function(t3, e2) {
    Y(Cm.concat(e2.__wrappedMethods || []), function(n2) {
      e2.hasOwnProperty(n2) && (t3[n2] = e2[n2]);
    }), t3.__wrappedMethods = e2.__wrappedMethods, Y(Im, function(n2) {
      t3[n2] = F(e2[n2]);
    }), t3._calculationInfo = H({}, e2._calculationInfo);
  }, void (Sm = function(t3, e2) {
    var n2 = t3._nameList, i2 = t3._idList, r2 = t3._nameDimIdx, o2 = t3._idDimIdx, a2 = n2[e2], s2 = i2[e2];
    if (a2 == null && r2 != null && (n2[e2] = a2 = _m(t3, r2, e2)), s2 == null && o2 != null && (i2[e2] = s2 = _m(t3, o2, e2)), s2 == null && a2 != null) {
      var l2 = t3._nameRepeatCount, u2 = l2[a2] = (l2[a2] || 0) + 1;
      s2 = a2, u2 > 1 && (s2 += "__ec__" + u2), i2[e2] = s2;
    }
  })), t2;
})();
function Am(t2, e2) {
  zd(t2) || (t2 = Ed(t2));
  var n2 = (e2 = e2 || {}).coordDimensions || [], i2 = e2.dimensionsDefine || t2.dimensionsDefine || [], r2 = St(), o2 = [], a2 = (function(t3, e3, n3, i3) {
    var r3 = Math.max(t3.dimensionsDetectedCount || 1, e3.length, n3.length, i3 || 0);
    return Y(e3, function(t4) {
      var e4;
      rt(t4) && (e4 = t4.dimsDef) && (r3 = Math.max(r3, e4.length));
    }), r3;
  })(t2, n2, i2, e2.dimensionsCount), s2 = e2.canOmitUnusedDimensions && vm(a2), l2 = i2 === t2.dimensionsDefine, u2 = l2 ? gm(t2) : fm(i2), h2 = e2.encodeDefine;
  !h2 && e2.encodeDefaulter && (h2 = e2.encodeDefaulter(t2, a2));
  for (var c2 = St(h2), p2 = new Sf(a2), d2 = 0; d2 < p2.length; d2++) p2[d2] = -1;
  function f2(t3) {
    var e3 = p2[t3];
    if (e3 < 0) {
      var n3 = i2[t3], r3 = rt(n3) ? n3 : { name: n3 }, a3 = new um(), s3 = r3.name;
      s3 != null && u2.get(s3) != null && (a3.name = a3.displayName = s3), r3.type != null && (a3.type = r3.type), r3.displayName != null && (a3.displayName = r3.displayName);
      var l3 = o2.length;
      return p2[t3] = l3, a3.storeDimIndex = t3, o2.push(a3), a3;
    }
    return o2[e3];
  }
  if (!s2) for (d2 = 0; d2 < a2; d2++) f2(d2);
  c2.each(function(t3, e3) {
    var n3 = $r(t3).slice();
    if (n3.length === 1 && !et(n3[0]) && n3[0] < 0) c2.set(e3, !1);
    else {
      var i3 = c2.set(e3, []);
      Y(n3, function(t4, n4) {
        var r3 = et(t4) ? u2.get(t4) : t4;
        r3 != null && r3 < a2 && (i3[n4] = r3, v2(f2(r3), e3, n4));
      });
    }
  });
  var g2 = 0;
  function v2(t3, e3, n3) {
    Lp.get(e3) != null ? t3.otherDims[e3] = n3 : (t3.coordDim = e3, t3.coordDimIndex = n3, r2.set(e3, !0));
  }
  Y(n2, function(t3) {
    var e3, n3, i3, r3;
    if (et(t3)) e3 = t3, r3 = {};
    else {
      e3 = (r3 = t3).name;
      var o3 = r3.ordinalMeta;
      r3.ordinalMeta = null, (r3 = H({}, r3)).ordinalMeta = o3, n3 = r3.dimsDef, i3 = r3.otherDims, r3.name = r3.coordDim = r3.coordDimIndex = r3.dimsDef = r3.otherDims = null;
    }
    var s3 = c2.get(e3);
    if (s3 !== !1) {
      if (!(s3 = $r(s3)).length) for (var u3 = 0; u3 < (n3 && n3.length || 1); u3++) {
        for (; g2 < a2 && f2(g2).coordDim != null; ) g2++;
        g2 < a2 && s3.push(g2++);
      }
      Y(s3, function(t4, o4) {
        var a3 = f2(t4);
        if (l2 && r3.type != null && (a3.type = r3.type), v2(W(a3, r3), e3, o4), a3.name == null && n3) {
          var s4 = n3[o4];
          !rt(s4) && (s4 = { name: s4 }), a3.name = a3.displayName = s4.name, a3.defaultTooltip = s4.defaultTooltip;
        }
        i3 && W(a3.otherDims, i3);
      });
    }
  });
  var y2 = e2.generateCoord, m2 = e2.generateCoordCount, _2 = m2 != null;
  m2 = y2 ? m2 || 1 : 0;
  var x2 = y2 || "value";
  function b2(t3) {
    t3.name == null && (t3.name = t3.coordDim);
  }
  if (s2) Y(o2, function(t3) {
    b2(t3);
  }), o2.sort(function(t3, e3) {
    return t3.storeDimIndex - e3.storeDimIndex;
  });
  else for (var w2 = 0; w2 < a2; w2++) {
    var S2 = f2(w2);
    S2.coordDim == null && (S2.coordDim = Lm(x2, r2, _2), S2.coordDimIndex = 0, (!y2 || m2 <= 0) && (S2.isExtraCoord = !0), m2--), b2(S2), S2.type != null || Yp(t2, w2) !== Vp && (!S2.isExtraCoord || S2.otherDims.itemName == null && S2.otherDims.seriesName == null) || (S2.type = "ordinal");
  }
  return (function(t3) {
    for (var e3 = St(), n3 = 0; n3 < t3.length; n3++) {
      var i3 = t3[n3], r3 = i3.name, o3 = e3.get(r3) || 0;
      o3 > 0 && (i3.name = r3 + (o3 - 1)), o3++, e3.set(r3, o3);
    }
  })(o2), new pm({ source: t2, dimensions: o2, fullDimensionCount: a2, dimensionOmitted: s2 });
}
function Lm(t2, e2, n2) {
  if (n2 || e2.hasKey(t2)) {
    for (var i2 = 0; e2.hasKey(t2 + i2); ) i2++;
    t2 += i2;
  }
  return e2.set(t2, !0), t2;
}
var Pm = /* @__PURE__ */ (function() {
  return function(t2) {
    this.coordSysDims = [], this.axisMap = St(), this.categoryAxisMap = St(), this.coordSysName = t2;
  };
})(), Om = { cartesian2d: function(t2, e2, n2, i2) {
  var r2 = t2.getReferringComponents("xAxis", fo).models[0], o2 = t2.getReferringComponents("yAxis", fo).models[0];
  e2.coordSysDims = ["x", "y"], n2.set("x", r2), n2.set("y", o2), Rm(r2) && (i2.set("x", r2), e2.firstCategoryDimIndex = 0), Rm(o2) && (i2.set("y", o2), e2.firstCategoryDimIndex == null && (e2.firstCategoryDimIndex = 1));
}, singleAxis: function(t2, e2, n2, i2) {
  var r2 = t2.getReferringComponents("singleAxis", fo).models[0];
  e2.coordSysDims = ["single"], n2.set("single", r2), Rm(r2) && (i2.set("single", r2), e2.firstCategoryDimIndex = 0);
}, polar: function(t2, e2, n2, i2) {
  var r2 = t2.getReferringComponents("polar", fo).models[0], o2 = r2.findAxisModel("radiusAxis"), a2 = r2.findAxisModel("angleAxis");
  e2.coordSysDims = ["radius", "angle"], n2.set("radius", o2), n2.set("angle", a2), Rm(o2) && (i2.set("radius", o2), e2.firstCategoryDimIndex = 0), Rm(a2) && (i2.set("angle", a2), e2.firstCategoryDimIndex == null && (e2.firstCategoryDimIndex = 1));
}, geo: function(t2, e2, n2, i2) {
  e2.coordSysDims = ["lng", "lat"];
}, parallel: function(t2, e2, n2, i2) {
  var r2 = t2.ecModel, o2 = r2.getComponent("parallel", t2.get("parallelIndex")), a2 = e2.coordSysDims = o2.dimensions.slice();
  Y(o2.parallelAxisIndex, function(t3, o3) {
    var s2 = r2.getComponent("parallelAxis", t3), l2 = a2[o3];
    n2.set(l2, s2), Rm(s2) && (i2.set(l2, s2), e2.firstCategoryDimIndex == null && (e2.firstCategoryDimIndex = o3));
  });
}, matrix: function(t2, e2, n2, i2) {
  var r2 = t2.getReferringComponents("matrix", fo).models[0];
  e2.coordSysDims = ["x", "y"];
  var o2 = r2.getDimensionModel("x"), a2 = r2.getDimensionModel("y");
  n2.set("x", o2), n2.set("y", a2), i2.set("x", o2), i2.set("y", a2);
} };
function Rm(t2) {
  return t2.get("type") === "category";
}
function Nm(t2, e2, n2) {
  var i2, r2, o2, a2 = (n2 = n2 || {}).byIndex, s2 = n2.stackedCoordDimension;
  (function(t3) {
    return !dm(t3.schema);
  })(e2) ? i2 = e2 : (r2 = e2.schema, i2 = r2.dimensions, o2 = e2.store);
  var l2, u2, h2, c2, p2 = !(!t2 || !t2.get("stack"));
  if (Y(i2, function(t3, e3) {
    et(t3) && (i2[e3] = t3 = { name: t3 }), p2 && !t3.isExtraCoord && (a2 || l2 || !t3.ordinalMeta || (l2 = t3), u2 || t3.type === "ordinal" || t3.type === "time" || s2 && s2 !== t3.coordDim || (u2 = t3));
  }), !u2 || a2 || l2 || (a2 = !0), u2) {
    h2 = "__\0ecstackresult_" + t2.id, c2 = "__\0ecstackedover_" + t2.id, l2 && (l2.createInvertedIndices = !0);
    var d2 = u2.coordDim, f2 = u2.type, g2 = 0;
    Y(i2, function(t3) {
      t3.coordDim === d2 && g2++;
    });
    var v2 = { name: h2, coordDim: d2, coordDimIndex: g2, type: f2, isExtraCoord: !0, isCalculationCoord: !0, storeDimIndex: i2.length }, y2 = { name: c2, coordDim: c2, coordDimIndex: g2 + 1, type: f2, isExtraCoord: !0, isCalculationCoord: !0, storeDimIndex: i2.length + 1 };
    r2 ? (o2 && (v2.storeDimIndex = o2.ensureCalculationDimension(c2, f2), y2.storeDimIndex = o2.ensureCalculationDimension(h2, f2)), r2.appendCalculationDimension(v2), r2.appendCalculationDimension(y2)) : (i2.push(v2), i2.push(y2));
  }
  return { stackedDimension: u2 && u2.name, stackedByDimension: l2 && l2.name, isStackedByIndex: a2, stackedOverDimension: c2, stackResultDimension: h2 };
}
function zm(t2, e2) {
  return !!e2 && e2 === t2.getCalculationInfo("stackedDimension");
}
function Bm(t2, e2) {
  return zm(t2, e2) ? t2.getCalculationInfo("stackResultDimension") : e2;
}
function Em(t2, e2, n2) {
  n2 = n2 || {};
  var i2, r2, o2 = e2.getSourceManager();
  r2 = (i2 = o2.getSource()).sourceFormat === Pp;
  var a2 = (function(t3) {
    var e3 = t3.get("coordinateSystem"), n3 = new Pm(e3), i3 = Om[e3];
    if (i3) return i3(t3, n3, n3.axisMap, n3.categoryAxisMap), n3;
  })(e2), s2 = (function(t3, e3) {
    var n3, i3 = t3.get("coordinateSystem"), r3 = ep.get(i3);
    return e3 && e3.coordSysDims && (n3 = Z(e3.coordSysDims, function(t4) {
      var n4 = { name: t4 }, i4 = e3.axisMap.get(t4);
      if (i4) {
        var r4 = i4.get("type");
        n4.type = lm(r4);
      }
      return n4;
    })), n3 || (n3 = r3 && (r3.getDimensionsInfo ? r3.getDimensionsInfo() : r3.dimensions.slice()) || ["x", "y"]), n3;
  })(e2, a2), l2 = n2.useEncodeDefaulter, u2 = tt(l2) ? l2 : l2 ? Q(Up, s2, e2) : null, h2 = Am(i2, { coordDimensions: s2, generateCoord: n2.generateCoord, encodeDefine: e2.getEncode(), encodeDefaulter: u2, canOmitUnusedDimensions: !r2 }), c2 = (function(t3, e3, n3) {
    var i3, r3;
    return n3 && Y(t3, function(t4, o3) {
      var a3 = t4.coordDim, s3 = n3.categoryAxisMap.get(a3);
      s3 && (i3 == null && (i3 = o3), t4.ordinalMeta = s3.getOrdinalMeta(), e3 && (t4.createInvertedIndices = !0)), t4.otherDims.itemName != null && (r3 = !0);
    }), r3 || i3 == null || (t3[i3].otherDims.itemName = 0), i3;
  })(h2.dimensions, n2.createInvertedIndices, a2), p2 = r2 ? null : o2.getSharedDataStore(h2), d2 = Nm(e2, { schema: h2, store: p2 }), f2 = new Dm(h2, e2);
  f2.setCalculationInfo(d2);
  var g2 = c2 != null && (function(t3) {
    if (t3.sourceFormat === Pp)
      return !J(to((function(t4) {
        for (var e3 = 0; e3 < t4.length && t4[e3] == null; ) e3++;
        return t4[e3];
      })(t3.data || [])));
  })(i2) ? function(t3, e3, n3, i3) {
    return i3 === c2 ? n3 : this.defaultDimValueGetter(t3, e3, n3, i3);
  } : null;
  return f2.hasItemOption = !1, f2.initData(r2 ? i2 : p2, null, g2), f2;
}
function Fm(t2) {
  return t2.type === "interval" || t2.type === "log";
}
function Vm(t2, e2, n2, i2, r2) {
  var o2 = {}, a2 = o2.interval = Wr(e2 / n2);
  i2 != null && a2 < i2 && (a2 = o2.interval = i2), r2 != null && a2 > r2 && (a2 = o2.interval = r2);
  var s2 = o2.intervalPrecision = Wm(a2);
  return (function(t3, e3) {
    !isFinite(t3[0]) && (t3[0] = e3[0]), !isFinite(t3[1]) && (t3[1] = e3[1]), Gm(t3, 0, e3), Gm(t3, 1, e3), t3[0] > t3[1] && (t3[0] = t3[1]);
  })(o2.niceTickExtent = [Pr(Math.ceil(t2[0] / a2) * a2, s2), Pr(Math.floor(t2[1] / a2) * a2, s2)], t2), o2;
}
function Hm(t2) {
  var e2 = Math.pow(10, Hr(t2)), n2 = t2 / e2;
  return n2 ? n2 === 2 ? n2 = 3 : n2 === 3 ? n2 = 5 : n2 *= 2 : n2 = 1, Pr(n2 * e2);
}
function Wm(t2) {
  return Rr(t2) + 2;
}
function Gm(t2, e2, n2) {
  t2[e2] = Math.max(Math.min(t2[e2], n2[1]), n2[0]);
}
function Um(t2, e2) {
  return t2 >= e2[0] && t2 <= e2[1];
}
var Xm = (function() {
  function t2() {
    this.normalize = Ym, this.scale = Zm;
  }
  return t2.prototype.updateMethods = function(t3) {
    t3.hasBreaks() ? (this.normalize = $(t3.normalize, t3), this.scale = $(t3.scale, t3)) : (this.normalize = Ym, this.scale = Zm);
  }, t2;
})();
function Ym(t2, e2) {
  return e2[1] === e2[0] ? 0.5 : (t2 - e2[0]) / (e2[1] - e2[0]);
}
function Zm(t2, e2) {
  return t2 * (e2[1] - e2[0]) + e2[0];
}
function jm(t2, e2, n2) {
  var i2 = Math.log(t2);
  return [Math.log(n2 ? e2[0] : Math.max(0, e2[0])) / i2, Math.log(n2 ? e2[1] : Math.max(0, e2[1])) / i2];
}
var qm = (function() {
  function t2(t3) {
    this._calculator = new Xm(), this._setting = t3 || {}, this._extent = [1 / 0, -1 / 0];
  }
  return t2.prototype.getSetting = function(t3) {
    return this._setting[t3];
  }, t2.prototype._innerUnionExtent = function(t3) {
    var e2 = this._extent;
    this._innerSetExtent(t3[0] < e2[0] ? t3[0] : e2[0], t3[1] > e2[1] ? t3[1] : e2[1]);
  }, t2.prototype.unionExtentFromData = function(t3, e2) {
    this._innerUnionExtent(t3.getApproximateExtent(e2));
  }, t2.prototype.getExtent = function() {
    return this._extent.slice();
  }, t2.prototype.setExtent = function(t3, e2) {
    this._innerSetExtent(t3, e2);
  }, t2.prototype._innerSetExtent = function(t3, e2) {
    var n2 = this._extent;
    isNaN(t3) || (n2[0] = t3), isNaN(e2) || (n2[1] = e2), this._brkCtx && this._brkCtx.update(n2);
  }, t2.prototype.setBreaksFromOption = function(t3) {
  }, t2.prototype._innerSetBreak = function(t3) {
    this._brkCtx && (this._brkCtx.setBreaks(t3), this._calculator.updateMethods(this._brkCtx), this._brkCtx.update(this._extent));
  }, t2.prototype._innerGetBreaks = function() {
    return this._brkCtx ? this._brkCtx.breaks : [];
  }, t2.prototype.hasBreaks = function() {
    return !!this._brkCtx && this._brkCtx.hasBreaks();
  }, t2.prototype._getExtentSpanWithBreaks = function() {
    return this._brkCtx && this._brkCtx.hasBreaks() ? this._brkCtx.getExtentSpan() : this._extent[1] - this._extent[0];
  }, t2.prototype.isInExtentRange = function(t3) {
    return this._extent[0] <= t3 && this._extent[1] >= t3;
  }, t2.prototype.isBlank = function() {
    return this._isBlank;
  }, t2.prototype.setBlank = function(t3) {
    this._isBlank = t3;
  }, t2;
})();
ko(qm);
var Km = 0, $m = (function() {
  function t2(t3) {
    this.categories = t3.categories || [], this._needCollect = t3.needCollect, this._deduplication = t3.deduplication, this.uid = ++Km, this._onCollect = t3.onCollect;
  }
  return t2.createByAxisModel = function(e2) {
    var n2 = e2.option, i2 = n2.data, r2 = i2 && Z(i2, Qm);
    return new t2({ categories: r2, needCollect: !r2, deduplication: n2.dedplication !== !1 });
  }, t2.prototype.getOrdinal = function(t3) {
    return this._getOrCreateMap().get(t3);
  }, t2.prototype.parseAndCollect = function(t3) {
    var e2, n2 = this._needCollect;
    if (!et(t3) && !n2) return t3;
    if (n2 && !this._deduplication) return e2 = this.categories.length, this.categories[e2] = t3, this._onCollect && this._onCollect(t3, e2), e2;
    var i2 = this._getOrCreateMap();
    return (e2 = i2.get(t3)) == null && (n2 ? (e2 = this.categories.length, this.categories[e2] = t3, i2.set(t3, e2), this._onCollect && this._onCollect(t3, e2)) : e2 = NaN), e2;
  }, t2.prototype._getOrCreateMap = function() {
    return this._map || (this._map = St(this.categories));
  }, t2;
})();
function Qm(t2) {
  return rt(t2) && t2.value != null ? t2.value : t2 + "";
}
var Jm = (function(t2) {
  function e2(e3) {
    var n2 = t2.call(this, e3) || this;
    n2.type = "ordinal";
    var i2 = n2.getSetting("ordinalMeta");
    return i2 || (i2 = new $m({})), J(i2) && (i2 = new $m({ categories: Z(i2, function(t3) {
      return rt(t3) ? t3.value : t3;
    }) })), n2._ordinalMeta = i2, n2._extent = n2.getSetting("extent") || [0, i2.categories.length - 1], n2;
  }
  return _(e2, t2), e2.prototype.parse = function(t3) {
    return t3 == null ? NaN : et(t3) ? this._ordinalMeta.getOrdinal(t3) : Math.round(t3);
  }, e2.prototype.contain = function(t3) {
    return Um(t3, this._extent) && t3 >= 0 && t3 < this._ordinalMeta.categories.length;
  }, e2.prototype.normalize = function(t3) {
    return t3 = this._getTickNumber(t3), this._calculator.normalize(t3, this._extent);
  }, e2.prototype.scale = function(t3) {
    return t3 = Math.round(this._calculator.scale(t3, this._extent)), this.getRawOrdinalNumber(t3);
  }, e2.prototype.getTicks = function() {
    for (var t3 = [], e3 = this._extent, n2 = e3[0]; n2 <= e3[1]; ) t3.push({ value: n2 }), n2++;
    return t3;
  }, e2.prototype.getMinorTicks = function(t3) {
  }, e2.prototype.setSortInfo = function(t3) {
    if (t3 != null) {
      for (var e3 = t3.ordinalNumbers, n2 = this._ordinalNumbersByTick = [], i2 = this._ticksByOrdinalNumber = [], r2 = 0, o2 = this._ordinalMeta.categories.length, a2 = Math.min(o2, e3.length); r2 < a2; ++r2) {
        var s2 = e3[r2];
        n2[r2] = s2, i2[s2] = r2;
      }
      for (var l2 = 0; r2 < o2; ++r2) {
        for (; i2[l2] != null; ) l2++;
        n2.push(l2), i2[l2] = r2;
      }
    } else this._ordinalNumbersByTick = this._ticksByOrdinalNumber = null;
  }, e2.prototype._getTickNumber = function(t3) {
    var e3 = this._ticksByOrdinalNumber;
    return e3 && t3 >= 0 && t3 < e3.length ? e3[t3] : t3;
  }, e2.prototype.getRawOrdinalNumber = function(t3) {
    var e3 = this._ordinalNumbersByTick;
    return e3 && t3 >= 0 && t3 < e3.length ? e3[t3] : t3;
  }, e2.prototype.getLabel = function(t3) {
    if (!this.isBlank()) {
      var e3 = this.getRawOrdinalNumber(t3.value), n2 = this._ordinalMeta.categories[e3];
      return n2 == null ? "" : n2 + "";
    }
  }, e2.prototype.count = function() {
    return this._extent[1] - this._extent[0] + 1;
  }, e2.prototype.isInExtentRange = function(t3) {
    return t3 = this._getTickNumber(t3), this._extent[0] <= t3 && this._extent[1] >= t3;
  }, e2.prototype.getOrdinalMeta = function() {
    return this._ordinalMeta;
  }, e2.prototype.calcNiceTicks = function() {
  }, e2.prototype.calcNiceExtent = function() {
  }, e2.type = "ordinal", e2;
})(qm);
qm.registerClass(Jm);
var t_ = Pr, e_ = (function(t2) {
  function e2() {
    var e3 = t2 !== null && t2.apply(this, arguments) || this;
    return e3.type = "interval", e3._interval = 0, e3._intervalPrecision = 2, e3;
  }
  return _(e2, t2), e2.prototype.parse = function(t3) {
    return t3 == null || t3 === "" ? NaN : Number(t3);
  }, e2.prototype.contain = function(t3) {
    return Um(t3, this._extent);
  }, e2.prototype.normalize = function(t3) {
    return this._calculator.normalize(t3, this._extent);
  }, e2.prototype.scale = function(t3) {
    return this._calculator.scale(t3, this._extent);
  }, e2.prototype.getInterval = function() {
    return this._interval;
  }, e2.prototype.setInterval = function(t3) {
    this._interval = t3, this._niceExtent = this._extent.slice(), this._intervalPrecision = Wm(t3);
  }, e2.prototype.getTicks = function(t3) {
    t3 = t3 || {};
    var e3 = this._interval, n2 = this._extent, i2 = this._niceExtent, r2 = this._intervalPrecision, o2 = [];
    if (!e3) return o2;
    t3.breakTicks, n2[0] < i2[0] && (t3.expandToNicedExtent ? o2.push({ value: t_(i2[0] - e3, r2) }) : o2.push({ value: n2[0] }));
    for (var a2 = function(t4, n3) {
      return Math.round((n3 - t4) / e3);
    }, s2 = i2[0]; s2 <= i2[1]; ) {
      if (o2.push({ value: s2 }), s2 = t_(s2 + e3, r2), this._brkCtx) {
        var l2 = this._brkCtx.calcNiceTickMultiple(s2, a2);
        l2 >= 0 && (s2 = t_(s2 + l2 * e3, r2));
      }
      if (o2.length > 0 && s2 === o2[o2.length - 1].value) break;
      if (o2.length > 1e4) return [];
    }
    var u2 = o2.length ? o2[o2.length - 1].value : i2[1];
    return n2[1] > u2 && (t3.expandToNicedExtent ? o2.push({ value: t_(u2 + e3, r2) }) : o2.push({ value: n2[1] })), t3.breakTicks, o2;
  }, e2.prototype.getMinorTicks = function(t3) {
    for (var e3 = this.getTicks({ expandToNicedExtent: !0 }), n2 = [], i2 = this.getExtent(), r2 = 1; r2 < e3.length; r2++) {
      var o2 = e3[r2], a2 = e3[r2 - 1];
      if (!a2.break && !o2.break) {
        for (var s2 = 0, l2 = [], u2 = (o2.value - a2.value) / t3, h2 = Wm(u2); s2 < t3 - 1; ) {
          var c2 = t_(a2.value + (s2 + 1) * u2, h2);
          c2 > i2[0] && c2 < i2[1] && l2.push(c2), s2++;
        }
        var p2 = pc();
        p2 && p2.pruneTicksByBreak("auto", l2, this._getNonTransBreaks(), function(t4) {
          return t4;
        }, this._interval, i2), n2.push(l2);
      }
    }
    return n2;
  }, e2.prototype._getNonTransBreaks = function() {
    return this._brkCtx ? this._brkCtx.breaks : [];
  }, e2.prototype.getLabel = function(t3, e3) {
    if (t3 == null) return "";
    var n2 = e3 && e3.precision;
    return n2 == null ? n2 = Rr(t3.value) || 0 : n2 === "auto" && (n2 = this._intervalPrecision), Xc(t_(t3.value, n2, !0));
  }, e2.prototype.calcNiceTicks = function(t3, e3, n2) {
    t3 = t3 || 5;
    var i2 = this._extent.slice(), r2 = this._getExtentSpanWithBreaks();
    if (isFinite(r2)) {
      r2 < 0 && (r2 = -r2, i2.reverse(), this._innerSetExtent(i2[0], i2[1]), i2 = this._extent.slice());
      var o2 = Vm(i2, r2, t3, e3, n2);
      this._intervalPrecision = o2.intervalPrecision, this._interval = o2.interval, this._niceExtent = o2.niceTickExtent;
    }
  }, e2.prototype.calcNiceExtent = function(t3) {
    var e3 = this._extent.slice();
    if (e3[0] === e3[1]) if (e3[0] !== 0) {
      var n2 = Math.abs(e3[0]);
      t3.fixMax || (e3[1] += n2 / 2), e3[0] -= n2 / 2;
    } else e3[1] = 1;
    var i2 = e3[1] - e3[0];
    isFinite(i2) || (e3[0] = 0, e3[1] = 1), this._innerSetExtent(e3[0], e3[1]), e3 = this._extent.slice(), this.calcNiceTicks(t3.splitNumber, t3.minInterval, t3.maxInterval);
    var r2 = this._interval, o2 = this._intervalPrecision;
    t3.fixMin || (e3[0] = t_(Math.floor(e3[0] / r2) * r2, o2)), t3.fixMax || (e3[1] = t_(Math.ceil(e3[1] / r2) * r2, o2)), this._innerSetExtent(e3[0], e3[1]);
  }, e2.prototype.setNiceExtent = function(t3, e3) {
    this._niceExtent = [t3, e3];
  }, e2.type = "interval", e2;
})(qm);
qm.registerClass(e_);
var n_ = typeof Float32Array < "u", i_ = n_ ? Float32Array : Array;
function r_(t2) {
  return J(t2) ? n_ ? new Float32Array(t2) : t2 : new i_(t2);
}
function o_(t2) {
  return t2.get("stack") || "__ec_stack_" + t2.seriesIndex;
}
function a_(t2) {
  return t2.dim + t2.index;
}
function s_(t2, e2) {
  var n2 = [];
  return e2.eachSeriesByType(t2, function(t3) {
    h_(t3) && n2.push(t3);
  }), n2;
}
function l_(t2) {
  var e2 = (function(t3) {
    var e3 = {};
    Y(t3, function(t4) {
      var n4 = t4.coordinateSystem.getBaseAxis();
      if (n4.type === "time" || n4.type === "value") for (var i3 = t4.getData(), r3 = n4.dim + "_" + n4.index, o3 = i3.getDimensionIndex(i3.mapDimension(n4.dim)), a3 = i3.getStore(), s3 = 0, l2 = a3.count(); s3 < l2; ++s3) {
        var u2 = a3.get(o3, s3);
        e3[r3] ? e3[r3].push(u2) : e3[r3] = [u2];
      }
    });
    var n3 = {};
    for (var i2 in e3) if (e3.hasOwnProperty(i2)) {
      var r2 = e3[i2];
      if (r2) {
        r2.sort(function(t4, e4) {
          return t4 - e4;
        });
        for (var o2 = null, a2 = 1; a2 < r2.length; ++a2) {
          var s2 = r2[a2] - r2[a2 - 1];
          s2 > 0 && (o2 = o2 === null ? s2 : Math.min(o2, s2));
        }
        n3[i2] = o2;
      }
    }
    return n3;
  })(t2), n2 = [];
  return Y(t2, function(t3) {
    var i2, r2 = t3.coordinateSystem.getBaseAxis(), o2 = r2.getExtent();
    if (r2.type === "category") i2 = r2.getBandWidth();
    else if (r2.type === "value" || r2.type === "time") {
      var a2 = r2.dim + "_" + r2.index, s2 = e2[a2], l2 = Math.abs(o2[1] - o2[0]), u2 = r2.scale.getExtent(), h2 = Math.abs(u2[1] - u2[0]);
      i2 = s2 ? l2 / h2 * s2 : l2;
    } else {
      var c2 = t3.getData();
      i2 = Math.abs(o2[1] - o2[0]) / c2.count();
    }
    var p2 = Ar(t3.get("barWidth"), i2), d2 = Ar(t3.get("barMaxWidth"), i2), f2 = Ar(t3.get("barMinWidth") || (c_(t3) ? 0.5 : 1), i2), g2 = t3.get("barGap"), v2 = t3.get("barCategoryGap"), y2 = t3.get("defaultBarGap");
    n2.push({ bandWidth: i2, barWidth: p2, barMaxWidth: d2, barMinWidth: f2, barGap: g2, barCategoryGap: v2, defaultBarGap: y2, axisKey: a_(r2), stackId: o_(t3) });
  }), (function(t3) {
    var e3 = {};
    Y(t3, function(t4, n4) {
      var i2 = t4.axisKey, r2 = t4.bandWidth, o2 = e3[i2] || { bandWidth: r2, remainedWidth: r2, autoWidthCount: 0, categoryGap: null, gap: t4.defaultBarGap || 0, stacks: {} }, a2 = o2.stacks;
      e3[i2] = o2;
      var s2 = t4.stackId;
      a2[s2] || o2.autoWidthCount++, a2[s2] = a2[s2] || { width: 0, maxWidth: 0 };
      var l2 = t4.barWidth;
      l2 && !a2[s2].width && (a2[s2].width = l2, l2 = Math.min(o2.remainedWidth, l2), o2.remainedWidth -= l2);
      var u2 = t4.barMaxWidth;
      u2 && (a2[s2].maxWidth = u2);
      var h2 = t4.barMinWidth;
      h2 && (a2[s2].minWidth = h2);
      var c2 = t4.barGap;
      c2 != null && (o2.gap = c2);
      var p2 = t4.barCategoryGap;
      p2 != null && (o2.categoryGap = p2);
    });
    var n3 = {};
    return Y(e3, function(t4, e4) {
      n3[e4] = {};
      var i2 = t4.stacks, r2 = t4.bandWidth, o2 = t4.categoryGap;
      if (o2 == null) {
        var a2 = K(i2).length;
        o2 = Math.max(35 - 4 * a2, 15) + "%";
      }
      var s2 = Ar(o2, r2), l2 = Ar(t4.gap, 1), u2 = t4.remainedWidth, h2 = t4.autoWidthCount, c2 = (u2 - s2) / (h2 + (h2 - 1) * l2);
      c2 = Math.max(c2, 0), Y(i2, function(t5) {
        var e5 = t5.maxWidth, n4 = t5.minWidth;
        if (t5.width)
          i3 = t5.width, e5 && (i3 = Math.min(i3, e5)), n4 && (i3 = Math.max(i3, n4)), t5.width = i3, u2 -= i3 + l2 * i3, h2--;
        else {
          var i3 = c2;
          e5 && e5 < i3 && (i3 = Math.min(e5, u2)), n4 && n4 > i3 && (i3 = n4), i3 !== c2 && (t5.width = i3, u2 -= i3 + l2 * i3, h2--);
        }
      }), c2 = (u2 - s2) / (h2 + (h2 - 1) * l2), c2 = Math.max(c2, 0);
      var p2, d2 = 0;
      Y(i2, function(t5, e5) {
        t5.width || (t5.width = c2), p2 = t5, d2 += t5.width * (1 + l2);
      }), p2 && (d2 -= p2.width * l2);
      var f2 = -d2 / 2;
      Y(i2, function(t5, i3) {
        n3[e4][i3] = n3[e4][i3] || { bandWidth: r2, offset: f2, width: t5.width }, f2 += t5.width * (1 + l2);
      });
    }), n3;
  })(n2);
}
function u_(t2, e2) {
  var n2 = s_(t2, e2), i2 = l_(n2);
  Y(n2, function(t3) {
    var e3 = t3.getData(), n3 = t3.coordinateSystem.getBaseAxis(), r2 = o_(t3), o2 = i2[a_(n3)][r2], a2 = o2.offset, s2 = o2.width;
    e3.setLayout({ bandWidth: o2.bandWidth, offset: a2, size: s2 });
  });
}
function h_(t2) {
  return t2.coordinateSystem && t2.coordinateSystem.type === "cartesian2d";
}
function c_(t2) {
  return t2.pipelineContext && t2.pipelineContext.large;
}
var p_ = (function(t2) {
  function e2(e3) {
    var n2 = t2.call(this, e3) || this;
    return n2.type = "time", n2;
  }
  return _(e2, t2), e2.prototype.getLabel = function(t3) {
    var e3 = this.getSetting("useUTC");
    return Ic(t3.value, bc[(function(t4) {
      switch (t4) {
        case "year":
        case "month":
          return "day";
        case "millisecond":
          return "millisecond";
        default:
          return "second";
      }
    })(kc(this._minLevelUnit))] || bc.second, e3, this.getSetting("locale"));
  }, e2.prototype.getFormattedLabel = function(t3, e3, n2) {
    var i2 = this.getSetting("useUTC");
    return (function(t4, e4, n3, i3, r2) {
      var o2 = null;
      if (et(n3)) o2 = n3;
      else if (tt(n3)) {
        var a2 = { time: t4.time, level: t4.time.level }, s2 = null;
        s2 && s2.makeAxisLabelFormatterParamBreak(a2, t4.break), o2 = n3(t4.value, e4, a2);
      } else {
        var l2 = t4.time;
        if (l2) {
          var u2 = n3[l2.lowerTimeUnit][l2.upperTimeUnit];
          o2 = u2[Math.min(l2.level, u2.length - 1)] || "";
        } else {
          var h2 = Dc(t4.value, r2);
          o2 = n3[h2][h2][0];
        }
      }
      return Ic(new Date(t4.value), o2, r2, i3);
    })(t3, e3, n2, this.getSetting("locale"), i2);
  }, e2.prototype.getTicks = function(t3) {
    var e3 = this._interval, n2 = this._extent, i2 = [];
    if (!e3) return i2;
    var r2 = this.getSetting("useUTC"), o2 = Dc(n2[1], r2);
    i2.push({ value: n2[0], time: { level: 0, upperTimeUnit: o2, lowerTimeUnit: o2 } });
    var a2 = (function(t4, e4, n3, i3, r3, o3) {
      var a3 = 1e4, s3 = Sc, l3 = 0;
      function u3(t5, e5, n4, r4, s4, u4, h3) {
        for (var c3 = (function(t6, e6) {
          var n5 = /* @__PURE__ */ new Date(0);
          n5[t6](1);
          var i4 = n5.getTime();
          n5[t6](1 + e6);
          var r5 = n5.getTime() - i4;
          return function(t7, e7) {
            return Math.max(0, Math.round((e7 - t7) / r5));
          };
        })(s4, t5), p3 = e5, d3 = new Date(p3); p3 < n4 && p3 <= i3[1] && (h3.push({ value: p3 }), !(l3++ > a3)); ) if (d3[s4](d3[r4]() + t5), p3 = d3.getTime(), o3) {
          var f3 = o3.calcNiceTickMultiple(p3, c3);
          f3 > 0 && (d3[s4](d3[r4]() + f3 * t5), p3 = d3.getTime());
        }
        h3.push({ value: p3, notAdd: !0 });
      }
      function h2(t5, r4, o4) {
        var a4 = [], s4 = !r4.length;
        if (!(function(t6, e5, n4, i4) {
          return Ac(new Date(e5), t6, i4).getTime() === Ac(new Date(n4), t6, i4).getTime();
        })(kc(t5), i3[0], i3[1], n3)) {
          s4 && (r4 = [{ value: __(i3[0], t5, n3) }, { value: i3[1] }]);
          for (var l4 = 0; l4 < r4.length - 1; l4++) {
            var h3 = r4[l4].value, c3 = r4[l4 + 1].value;
            if (h3 !== c3) {
              var p3 = void 0, d3 = void 0, f3 = void 0, g3 = !1;
              switch (t5) {
                case "year":
                  p3 = Math.max(1, Math.round(e4 / vc / 365)), d3 = Lc(n3), f3 = Ec(n3);
                  break;
                case "half-year":
                case "quarter":
                case "month":
                  p3 = g_(e4), d3 = Pc(n3), f3 = Fc(n3);
                  break;
                case "week":
                case "half-week":
                case "day":
                  p3 = f_(e4), d3 = Oc(n3), f3 = Vc(n3), g3 = !0;
                  break;
                case "half-day":
                case "quarter-day":
                case "hour":
                  p3 = v_(e4), d3 = Rc(n3), f3 = Hc(n3);
                  break;
                case "minute":
                  p3 = y_(e4, !0), d3 = Nc(n3), f3 = Wc(n3);
                  break;
                case "second":
                  p3 = y_(e4, !1), d3 = zc(n3), f3 = Gc(n3);
                  break;
                case "millisecond":
                  p3 = m_(e4), d3 = Bc(n3), f3 = Uc(n3);
              }
              c3 >= i3[0] && h3 <= i3[1] && u3(p3, h3, c3, d3, f3, g3, a4), t5 === "year" && o4.length > 1 && l4 === 0 && o4.unshift({ value: o4[0].value - p3 });
            }
          }
          for (l4 = 0; l4 < a4.length; l4++) o4.push(a4[l4]);
        }
      }
      for (var c2 = [], p2 = [], d2 = 0, f2 = 0, g2 = 0; g2 < s3.length; ++g2) {
        var v2 = kc(s3[g2]);
        if (Cc(s3[g2]) && (h2(s3[g2], c2[c2.length - 1] || [], p2), v2 !== (s3[g2 + 1] ? kc(s3[g2 + 1]) : null))) {
          if (p2.length) {
            f2 = d2, p2.sort(function(t5, e5) {
              return t5.value - e5.value;
            });
            for (var y2 = [], m2 = 0; m2 < p2.length; ++m2) {
              var _2 = p2[m2].value;
              m2 !== 0 && p2[m2 - 1].value === _2 || (y2.push(p2[m2]), _2 >= i3[0] && _2 <= i3[1] && d2++);
            }
            var x2 = r3 / e4;
            if (d2 > 1.5 * x2 && f2 > x2 / 1.5 || (c2.push(y2), d2 > x2 || t4 === s3[g2])) break;
          }
          p2 = [];
        }
      }
      var b2 = q(Z(c2, function(t5) {
        return q(t5, function(t6) {
          return t6.value >= i3[0] && t6.value <= i3[1] && !t6.notAdd;
        });
      }), function(t5) {
        return t5.length > 0;
      }), w2 = [], S2 = b2.length - 1;
      for (g2 = 0; g2 < b2.length; ++g2) for (var M2 = b2[g2], T2 = 0; T2 < M2.length; ++T2) {
        var k2 = Dc(M2[T2].value, n3);
        w2.push({ value: M2[T2].value, time: { level: S2 - g2, upperTimeUnit: k2, lowerTimeUnit: k2 } });
      }
      w2.sort(function(t5, e5) {
        return t5.value - e5.value;
      });
      var C2 = [];
      for (g2 = 0; g2 < w2.length; ++g2) g2 !== 0 && w2[g2].value === w2[g2 - 1].value || C2.push(w2[g2]);
      return C2;
    })(this._minLevelUnit, this._approxInterval, r2, n2, this._getExtentSpanWithBreaks(), this._brkCtx);
    i2 = i2.concat(a2);
    var s2 = Dc(n2[1], r2);
    i2.push({ value: n2[1], time: { level: 0, upperTimeUnit: s2, lowerTimeUnit: s2 } }), this.getSetting("useUTC");
    var l2 = wc.length - 1, u2 = 0;
    return Y(i2, function(t4) {
      l2 = Math.min(l2, G(wc, t4.time.upperTimeUnit)), u2 = Math.max(u2, t4.time.level);
    }), i2;
  }, e2.prototype.calcNiceExtent = function(t3) {
    var e3 = this.getExtent();
    if (e3[0] === e3[1] && (e3[0] -= vc, e3[1] += vc), e3[1] === -1 / 0 && e3[0] === 1 / 0) {
      var n2 = /* @__PURE__ */ new Date();
      e3[1] = +new Date(n2.getFullYear(), n2.getMonth(), n2.getDate()), e3[0] = e3[1] - vc;
    }
    this._innerSetExtent(e3[0], e3[1]), this.calcNiceTicks(t3.splitNumber, t3.minInterval, t3.maxInterval);
  }, e2.prototype.calcNiceTicks = function(t3, e3, n2) {
    t3 = t3 || 10;
    var i2 = this._getExtentSpanWithBreaks();
    this._approxInterval = i2 / t3, e3 != null && this._approxInterval < e3 && (this._approxInterval = e3), n2 != null && this._approxInterval > n2 && (this._approxInterval = n2);
    var r2 = d_.length, o2 = Math.min((function(t4, e4, n3, i3) {
      for (; n3 < i3; ) {
        var r3 = n3 + i3 >>> 1;
        t4[r3][1] < e4 ? n3 = r3 + 1 : i3 = r3;
      }
      return n3;
    })(d_, this._approxInterval, 0, r2), r2 - 1);
    this._interval = d_[o2][1], this._intervalPrecision = Wm(this._interval), this._minLevelUnit = d_[Math.max(o2 - 1, 0)][0];
  }, e2.prototype.parse = function(t3) {
    return it(t3) ? t3 : +Vr(t3);
  }, e2.prototype.contain = function(t3) {
    return Um(t3, this._extent);
  }, e2.prototype.normalize = function(t3) {
    return this._calculator.normalize(t3, this._extent);
  }, e2.prototype.scale = function(t3) {
    return this._calculator.scale(t3, this._extent);
  }, e2.type = "time", e2;
})(e_), d_ = [["second", dc], ["minute", fc], ["hour", gc], ["quarter-day", 216e5], ["half-day", 432e5], ["day", 10368e4], ["half-week", 3024e5], ["week", 6048e5], ["month", 26784e5], ["quarter", 8208e6], ["half-year", yc / 2], ["year", yc]];
function f_(t2, e2) {
  return (t2 /= vc) > 16 ? 16 : t2 > 7.5 ? 7 : t2 > 3.5 ? 4 : t2 > 1.5 ? 2 : 1;
}
function g_(t2) {
  return (t2 /= 2592e6) > 6 ? 6 : t2 > 3 ? 3 : t2 > 2 ? 2 : 1;
}
function v_(t2) {
  return (t2 /= gc) > 12 ? 12 : t2 > 6 ? 6 : t2 > 3.5 ? 4 : t2 > 2 ? 2 : 1;
}
function y_(t2, e2) {
  return (t2 /= e2 ? fc : dc) > 30 ? 30 : t2 > 20 ? 20 : t2 > 15 ? 15 : t2 > 10 ? 10 : t2 > 5 ? 5 : t2 > 2 ? 2 : 1;
}
function m_(t2) {
  return Wr(t2);
}
function __(t2, e2, n2) {
  var i2 = Math.max(0, G(wc, e2) - 1);
  return Ac(new Date(t2), wc[i2], n2).getTime();
}
qm.registerClass(p_);
var x_ = Pr, b_ = Math.floor, w_ = Math.ceil, S_ = Math.pow, M_ = Math.log, T_ = (function(t2) {
  function e2() {
    var e3 = t2 !== null && t2.apply(this, arguments) || this;
    return e3.type = "log", e3.base = 10, e3._originalScale = new e_(), e3;
  }
  return _(e2, t2), e2.prototype.getTicks = function(e3) {
    e3 = e3 || {};
    var n2 = this._extent.slice(), i2 = this._originalScale.getExtent(), r2 = t2.prototype.getTicks.call(this, e3), o2 = this.base;
    return this._originalScale._innerGetBreaks(), Z(r2, function(t3) {
      var e4 = t3.value, r3 = null, a2 = S_(o2, e4);
      return e4 === n2[0] && this._fixMin ? r3 = i2[0] : e4 === n2[1] && this._fixMax && (r3 = i2[1]), r3 != null && (a2 = k_(a2, r3)), { value: a2, break: void 0 };
    }, this);
  }, e2.prototype._getNonTransBreaks = function() {
    return this._originalScale._innerGetBreaks();
  }, e2.prototype.setExtent = function(e3, n2) {
    this._originalScale.setExtent(e3, n2);
    var i2 = jm(this.base, [e3, n2]);
    t2.prototype.setExtent.call(this, i2[0], i2[1]);
  }, e2.prototype.getExtent = function() {
    var e3 = this.base, n2 = t2.prototype.getExtent.call(this);
    n2[0] = S_(e3, n2[0]), n2[1] = S_(e3, n2[1]);
    var i2 = this._originalScale.getExtent();
    return this._fixMin && (n2[0] = k_(n2[0], i2[0])), this._fixMax && (n2[1] = k_(n2[1], i2[1])), n2;
  }, e2.prototype.unionExtentFromData = function(t3, e3) {
    this._originalScale.unionExtentFromData(t3, e3);
    var n2 = jm(this.base, t3.getApproximateExtent(e3), !0);
    this._innerUnionExtent(n2);
  }, e2.prototype.calcNiceTicks = function(t3) {
    t3 = t3 || 10;
    var e3 = this._extent.slice(), n2 = this._getExtentSpanWithBreaks();
    if (isFinite(n2) && !(n2 <= 0)) {
      var i2, r2 = (i2 = n2, Math.pow(10, Hr(i2)));
      for (t3 / n2 * r2 <= 0.5 && (r2 *= 10); !isNaN(r2) && Math.abs(r2) < 1 && Math.abs(r2) > 0; ) r2 *= 10;
      var o2 = [x_(w_(e3[0] / r2) * r2), x_(b_(e3[1] / r2) * r2)];
      this._interval = r2, this._intervalPrecision = Wm(r2), this._niceExtent = o2;
    }
  }, e2.prototype.calcNiceExtent = function(e3) {
    t2.prototype.calcNiceExtent.call(this, e3), this._fixMin = e3.fixMin, this._fixMax = e3.fixMax;
  }, e2.prototype.contain = function(e3) {
    return e3 = M_(e3) / M_(this.base), t2.prototype.contain.call(this, e3);
  }, e2.prototype.normalize = function(e3) {
    return e3 = M_(e3) / M_(this.base), t2.prototype.normalize.call(this, e3);
  }, e2.prototype.scale = function(e3) {
    return e3 = t2.prototype.scale.call(this, e3), S_(this.base, e3);
  }, e2.prototype.setBreaksFromOption = function(t3) {
  }, e2.type = "log", e2;
})(e_);
function k_(t2, e2) {
  return x_(t2, Rr(e2));
}
qm.registerClass(T_);
var C_ = (function() {
  function t2(t3, e2, n2) {
    this._prepareParams(t3, e2, n2);
  }
  return t2.prototype._prepareParams = function(t3, e2, n2) {
    n2[1] < n2[0] && (n2 = [NaN, NaN]), this._dataMin = n2[0], this._dataMax = n2[1];
    var i2 = this._isOrdinal = t3.type === "ordinal";
    this._needCrossZero = t3.type === "interval" && e2.getNeedCrossZero && e2.getNeedCrossZero();
    var r2 = e2.get("min", !0);
    r2 == null && (r2 = e2.get("startValue", !0));
    var o2 = this._modelMinRaw = r2;
    tt(o2) ? this._modelMinNum = L_(t3, o2({ min: n2[0], max: n2[1] })) : o2 !== "dataMin" && (this._modelMinNum = L_(t3, o2));
    var a2 = this._modelMaxRaw = e2.get("max", !0);
    if (tt(a2) ? this._modelMaxNum = L_(t3, a2({ min: n2[0], max: n2[1] })) : a2 !== "dataMax" && (this._modelMaxNum = L_(t3, a2)), i2) this._axisDataLen = e2.getCategories().length;
    else {
      var s2 = e2.get("boundaryGap"), l2 = J(s2) ? s2 : [s2 || 0, s2 || 0];
      typeof l2[0] == "boolean" || typeof l2[1] == "boolean" ? this._boundaryGapInner = [0, 0] : this._boundaryGapInner = [sr(l2[0], 1), sr(l2[1], 1)];
    }
  }, t2.prototype.calculate = function() {
    var t3 = this._isOrdinal, e2 = this._dataMin, n2 = this._dataMax, i2 = this._axisDataLen, r2 = this._boundaryGapInner, o2 = t3 ? null : n2 - e2 || Math.abs(e2), a2 = this._modelMinRaw === "dataMin" ? e2 : this._modelMinNum, s2 = this._modelMaxRaw === "dataMax" ? n2 : this._modelMaxNum, l2 = a2 != null, u2 = s2 != null;
    a2 == null && (a2 = t3 ? i2 ? 0 : NaN : e2 - r2[0] * o2), s2 == null && (s2 = t3 ? i2 ? i2 - 1 : NaN : n2 + r2[1] * o2), (a2 == null || !isFinite(a2)) && (a2 = NaN), (s2 == null || !isFinite(s2)) && (s2 = NaN);
    var h2 = ut(a2) || ut(s2) || t3 && !i2;
    this._needCrossZero && (a2 > 0 && s2 > 0 && !l2 && (a2 = 0), a2 < 0 && s2 < 0 && !u2 && (s2 = 0));
    var c2 = this._determinedMin, p2 = this._determinedMax;
    return c2 != null && (a2 = c2, l2 = !0), p2 != null && (s2 = p2, u2 = !0), { min: a2, max: s2, minFixed: l2, maxFixed: u2, isBlank: h2 };
  }, t2.prototype.modifyDataMinMax = function(t3, e2) {
    this[D_[t3]] = e2;
  }, t2.prototype.setDeterminedMinMax = function(t3, e2) {
    this[I_[t3]] = e2;
  }, t2.prototype.freeze = function() {
    this.frozen = !0;
  }, t2;
})(), I_ = { min: "_determinedMin", max: "_determinedMax" }, D_ = { min: "_dataMin", max: "_dataMax" };
function A_(t2, e2, n2) {
  var i2 = t2.rawExtentInfo;
  return i2 || (i2 = new C_(t2, e2, n2), t2.rawExtentInfo = i2, i2);
}
function L_(t2, e2) {
  return e2 == null ? null : ut(e2) ? NaN : t2.parse(e2);
}
function P_(t2, e2) {
  var n2 = t2.type, i2 = A_(t2, e2, t2.getExtent()).calculate();
  t2.setBlank(i2.isBlank);
  var r2 = i2.min, o2 = i2.max, a2 = e2.ecModel;
  if (a2 && n2 === "time") {
    var s2 = s_("bar", a2), l2 = !1;
    if (Y(s2, function(t3) {
      l2 = l2 || t3.getBaseAxis() === e2.axis;
    }), l2) {
      var u2 = l_(s2), h2 = (function(t3, e3, n3, i3) {
        var r3 = n3.axis.getExtent(), o3 = Math.abs(r3[1] - r3[0]), a3 = (function(t4, e4) {
          if (t4 && e4) return t4[a_(e4)];
        })(i3, n3.axis);
        if (a3 === void 0) return { min: t3, max: e3 };
        var s3 = 1 / 0;
        Y(a3, function(t4) {
          s3 = Math.min(t4.offset, s3);
        });
        var l3 = -1 / 0;
        Y(a3, function(t4) {
          l3 = Math.max(t4.offset + t4.width, l3);
        }), s3 = Math.abs(s3), l3 = Math.abs(l3);
        var u3 = s3 + l3, h3 = e3 - t3, c2 = h3 / (1 - (s3 + l3) / o3) - h3;
        return e3 += c2 * (l3 / u3), t3 -= c2 * (s3 / u3), { min: t3, max: e3 };
      })(r2, o2, e2, u2);
      r2 = h2.min, o2 = h2.max;
    }
  }
  return { extent: [r2, o2], fixMin: i2.minFixed, fixMax: i2.maxFixed };
}
function O_(t2, e2) {
  var n2 = e2, i2 = P_(t2, n2), r2 = i2.extent, o2 = n2.get("splitNumber");
  t2 instanceof T_ && (t2.base = n2.get("logBase"));
  var a2 = t2.type, s2 = n2.get("interval"), l2 = a2 === "interval" || a2 === "time";
  t2.setBreaksFromOption(W_(n2)), t2.setExtent(r2[0], r2[1]), t2.calcNiceExtent({ splitNumber: o2, fixMin: i2.fixMin, fixMax: i2.fixMax, minInterval: l2 ? n2.get("minInterval") : null, maxInterval: l2 ? n2.get("maxInterval") : null }), s2 != null && t2.setInterval && t2.setInterval(s2);
}
function R_(t2) {
  var e2 = t2.getLabelModel().get("formatter");
  if (t2.type === "time") {
    var n2 = Mc(e2);
    return function(e3, i3) {
      return t2.scale.getFormattedLabel(e3, i3, n2);
    };
  }
  if (et(e2)) return function(n3) {
    var i3 = t2.scale.getLabel(n3);
    return e2.replace("{value}", i3 ?? "");
  };
  if (tt(e2)) {
    if (t2.type === "category") return function(n3, i3) {
      return e2(N_(t2, n3), n3.value - t2.scale.getExtent()[0], null);
    };
    var i2 = null;
    return function(n3, r2) {
      var o2 = null;
      return i2 && (o2 = i2.makeAxisLabelFormatterParamBreak(o2, n3.break)), e2(N_(t2, n3), r2, o2);
    };
  }
  return function(e3) {
    return t2.scale.getLabel(e3);
  };
}
function N_(t2, e2) {
  return t2.type === "category" ? t2.scale.getLabel(e2) : e2.value;
}
function z_(t2) {
  var e2 = t2.get("interval");
  return e2 ?? "auto";
}
function B_(t2) {
  return t2.type === "category" && z_(t2.getLabelModel()) === 0;
}
function E_(t2, e2) {
  var n2 = {};
  return Y(t2.mapDimensionsAll(e2), function(e3) {
    n2[Bm(t2, e3)] = !0;
  }), K(n2);
}
function F_(t2, e2, n2) {
  e2 && Y(E_(e2, n2), function(n3) {
    var i2 = e2.getApproximateExtent(n3);
    i2[0] < t2[0] && (t2[0] = i2[0]), i2[1] > t2[1] && (t2[1] = i2[1]);
  });
}
function V_(t2) {
  return t2 === "middle" || t2 === "center";
}
function H_(t2) {
  return t2.getShallow("show");
}
function W_(t2) {
  t2.get("breaks", !0);
}
var G_ = (function() {
  function t2() {
  }
  return t2.prototype.getNeedCrossZero = function() {
    return !this.option.scale;
  }, t2.prototype.getCoordSysModel = function() {
  }, t2;
})(), U_ = [], X_ = { registerPreprocessor: Zy, registerProcessor: jy, registerPostInit: function(t2) {
  qy("afterinit", t2);
}, registerPostUpdate: function(t2) {
  qy("afterupdate", t2);
}, registerUpdateLifecycle: qy, registerAction: Ky, registerCoordinateSystem: function(t2, e2) {
  ep.register(t2, e2);
}, registerLayout: function(t2, e2) {
  Jy(Ey, t2, e2, 1e3, "layout");
}, registerVisual: $y, registerTransform: em, registerLoading: tm, registerMap: function(t2, e2, n2) {
  var i2 = Kv.registerMap;
  i2 && i2(t2, e2, n2);
}, registerImpl: function(t2, e2) {
  Kv[t2] = e2;
}, PRIORITY: Jv, ComponentModel: bp, ComponentView: ag, SeriesModel: Qf, ChartView: hg, registerComponentModel: function(t2) {
  bp.registerClass(t2);
}, registerComponentView: function(t2) {
  ag.registerClass(t2);
}, registerSeriesModel: function(t2) {
  Qf.registerClass(t2);
}, registerChartView: function(t2) {
  hg.registerClass(t2);
}, registerCustomSeries: function(t2, e2) {
}, registerSubTypeDefaulter: function(t2, e2) {
  bp.registerSubTypeDefaulter(t2, e2);
}, registerPainter: function(t2, e2) {
  var n2;
  n2 = e2, br[t2] = n2;
} };
function Y_(t2) {
  J(t2) ? Y(t2, function(t3) {
    Y_(t3);
  }) : G(U_, t2) >= 0 || (U_.push(t2), tt(t2) && (t2 = { install: t2 }), t2.install(X_));
}
var Z_ = uo(), j_ = uo(), q_ = 1, K_ = 2;
function $_(t2) {
  return { out: { noPxChangeTryDetermine: [] }, kind: t2 };
}
function Q_(t2, e2) {
  var n2 = Z(e2, function(e3) {
    return t2.scale.parse(e3);
  });
  return t2.type === "time" && n2.length > 0 && (n2.sort(), n2.unshift(n2[0]), n2.push(n2[n2.length - 1])), n2;
}
function J_(t2, e2) {
  var n2 = t2.getLabelModel().get("customValues");
  if (n2) {
    var i2 = R_(t2), r2 = t2.scale.getExtent();
    return { labels: Z(q(Q_(t2, n2), function(t3) {
      return t3 >= r2[0] && t3 <= r2[1];
    }), function(e3) {
      var n3 = { value: e3 };
      return { formattedLabel: i2(n3), rawLabel: t2.scale.getLabel(n3), tickValue: e3, time: void 0, break: void 0 };
    }) };
  }
  return t2.type === "category" ? (function(t3, e3) {
    var n3 = t3.getLabelModel(), i3 = ex(t3, n3, e3);
    return !n3.get("show") || t3.scale.isBlank() ? { labels: [] } : i3;
  })(t2, e2) : (function(t3) {
    var e3 = t3.scale.getTicks(), n3 = R_(t3);
    return { labels: Z(e3, function(e4, i3) {
      return { formattedLabel: n3(e4, i3), rawLabel: t3.scale.getLabel(e4), tickValue: e4.value, time: e4.time, break: e4.break };
    }) };
  })(t2);
}
function tx(t2, e2, n2) {
  var i2 = t2.getTickModel().get("customValues");
  if (i2) {
    var r2 = t2.scale.getExtent();
    return { ticks: q(Q_(t2, i2), function(t3) {
      return t3 >= r2[0] && t3 <= r2[1];
    }) };
  }
  return t2.type === "category" ? (function(t3, e3) {
    var n3, i3, r3 = nx(t3), o2 = z_(e3), a2 = ox(r3, o2);
    if (a2) return a2;
    if (e3.get("show") && !t3.scale.isBlank() || (n3 = []), tt(o2)) n3 = hx(t3, o2, !0);
    else if (o2 === "auto") {
      var s2 = ex(t3, t3.getLabelModel(), $_(K_));
      i3 = s2.labelCategoryInterval, n3 = Z(s2.labels, function(t4) {
        return t4.tickValue;
      });
    } else n3 = ux(t3, i3 = o2, !0);
    return ax(r3, o2, { ticks: n3, tickCategoryInterval: i3 });
  })(t2, e2) : { ticks: Z(t2.scale.getTicks(n2), function(t3) {
    return t3.value;
  }) };
}
function ex(t2, e2, n2) {
  var i2, r2, o2 = ix(t2), a2 = z_(e2), s2 = n2.kind === q_;
  if (!s2) {
    var l2 = ox(o2, a2);
    if (l2) return l2;
  }
  tt(a2) ? i2 = hx(t2, a2) : (r2 = a2 === "auto" ? (function(t3, e3) {
    if (e3.kind === q_) {
      var n3 = t3.calculateCategoryInterval(e3);
      return e3.out.noPxChangeTryDetermine.push(function() {
        return j_(t3).autoInterval = n3, !0;
      }), n3;
    }
    var i3 = j_(t3).autoInterval;
    return i3 ?? (j_(t3).autoInterval = t3.calculateCategoryInterval(e3));
  })(t2, n2) : a2, i2 = ux(t2, r2));
  var u2 = { labels: i2, labelCategoryInterval: r2 };
  return s2 ? n2.out.noPxChangeTryDetermine.push(function() {
    return ax(o2, a2, u2), !0;
  }) : ax(o2, a2, u2), u2;
}
var nx = rx("axisTick"), ix = rx("axisLabel");
function rx(t2) {
  return function(e2) {
    return j_(e2)[t2] || (j_(e2)[t2] = { list: [] });
  };
}
function ox(t2, e2) {
  for (var n2 = 0; n2 < t2.list.length; n2++) if (t2.list[n2].key === e2) return t2.list[n2].value;
}
function ax(t2, e2, n2) {
  return t2.list.push({ key: e2, value: n2 }), n2;
}
function sx(t2, e2, n2) {
  return lx(t2, e2, n2) == null;
}
function lx(t2, e2, n2) {
  var i2 = Z_(t2.model), r2 = t2.getExtent(), o2 = i2.lastAutoInterval, a2 = i2.lastTickCount;
  if (o2 != null && a2 != null && Math.abs(o2 - e2) <= 1 && Math.abs(a2 - n2) <= 1 && o2 > e2 && i2.axisExtent0 === r2[0] && i2.axisExtent1 === r2[1]) return o2;
  i2.lastTickCount = n2, i2.lastAutoInterval = e2, i2.axisExtent0 = r2[0], i2.axisExtent1 = r2[1];
}
function ux(t2, e2, n2) {
  var i2 = R_(t2), r2 = t2.scale, o2 = r2.getExtent(), a2 = t2.getLabelModel(), s2 = [], l2 = Math.max((e2 || 0) + 1, 1), u2 = o2[0], h2 = r2.count();
  u2 !== 0 && l2 > 1 && h2 / l2 > 2 && (u2 = Math.round(Math.ceil(u2 / l2) * l2));
  var c2 = B_(t2), p2 = a2.get("showMinLabel") || c2, d2 = a2.get("showMaxLabel") || c2;
  p2 && u2 !== o2[0] && g2(o2[0]);
  for (var f2 = u2; f2 <= o2[1]; f2 += l2) g2(f2);
  function g2(t3) {
    var e3 = { value: t3 };
    s2.push(n2 ? t3 : { formattedLabel: i2(e3), rawLabel: r2.getLabel(e3), tickValue: t3, time: void 0, break: void 0 });
  }
  return d2 && f2 - l2 !== o2[1] && g2(o2[1]), s2;
}
function hx(t2, e2, n2) {
  var i2 = t2.scale, r2 = R_(t2), o2 = [];
  return Y(i2.getTicks(), function(t3) {
    var a2 = i2.getLabel(t3), s2 = t3.value;
    e2(t3.value, a2) && o2.push(n2 ? s2 : { formattedLabel: r2(t3), rawLabel: a2, tickValue: s2, time: void 0, break: void 0 });
  }), o2;
}
var cx = [0, 1], px = (function() {
  function t2(t3, e2, n2) {
    this.onBand = !1, this.inverse = !1, this.dim = t3, this.scale = e2, this._extent = n2 || [0, 0];
  }
  return t2.prototype.contain = function(t3) {
    var e2 = this._extent, n2 = Math.min(e2[0], e2[1]), i2 = Math.max(e2[0], e2[1]);
    return t3 >= n2 && t3 <= i2;
  }, t2.prototype.containData = function(t3) {
    return this.scale.contain(this.scale.parse(t3));
  }, t2.prototype.getExtent = function() {
    return this._extent.slice();
  }, t2.prototype.getPixelPrecision = function(t3) {
    return Nr(t3 || this.scale.getExtent(), this._extent);
  }, t2.prototype.setExtent = function(t3, e2) {
    var n2 = this._extent;
    n2[0] = t3, n2[1] = e2;
  }, t2.prototype.dataToCoord = function(t3, e2) {
    var n2 = this._extent, i2 = this.scale;
    return t3 = i2.normalize(i2.parse(t3)), this.onBand && i2.type === "ordinal" && dx(n2 = n2.slice(), i2.count()), Dr(t3, cx, n2, e2);
  }, t2.prototype.coordToData = function(t3, e2) {
    var n2 = this._extent, i2 = this.scale;
    this.onBand && i2.type === "ordinal" && dx(n2 = n2.slice(), i2.count());
    var r2 = Dr(t3, n2, cx, e2);
    return this.scale.scale(r2);
  }, t2.prototype.pointToData = function(t3, e2) {
  }, t2.prototype.getTicksCoords = function(t3) {
    var e2 = (t3 = t3 || {}).tickModel || this.getTickModel(), n2 = Z(tx(this, e2, { breakTicks: t3.breakTicks, pruneByBreak: t3.pruneByBreak }).ticks, function(t4) {
      return { coord: this.dataToCoord(this.scale.type === "ordinal" ? this.scale.getRawOrdinalNumber(t4) : t4), tickValue: t4 };
    }, this);
    return (function(t4, e3, n3, i2) {
      var r2 = e3.length;
      if (!t4.onBand || n3 || !r2) return;
      var o2, a2, s2 = t4.getExtent();
      if (r2 === 1) e3[0].coord = s2[0], e3[0].onBand = !0, o2 = e3[1] = { coord: s2[1], tickValue: e3[0].tickValue, onBand: !0 };
      else {
        var l2 = e3[r2 - 1].tickValue - e3[0].tickValue, u2 = (e3[r2 - 1].coord - e3[0].coord) / l2;
        Y(e3, function(t5) {
          t5.coord -= u2 / 2, t5.onBand = !0;
        });
        var h2 = t4.scale.getExtent();
        a2 = 1 + h2[1] - e3[r2 - 1].tickValue, o2 = { coord: e3[r2 - 1].coord + u2 * a2, tickValue: h2[1] + 1, onBand: !0 }, e3.push(o2);
      }
      var c2 = s2[0] > s2[1];
      p2(e3[0].coord, s2[0]) && (i2 ? e3[0].coord = s2[0] : e3.shift()), i2 && p2(s2[0], e3[0].coord) && e3.unshift({ coord: s2[0], onBand: !0 }), p2(s2[1], o2.coord) && (i2 ? o2.coord = s2[1] : e3.pop()), i2 && p2(o2.coord, s2[1]) && e3.push({ coord: s2[1], onBand: !0 });
      function p2(t5, e4) {
        return t5 = Pr(t5), e4 = Pr(e4), c2 ? t5 > e4 : t5 < e4;
      }
    })(this, n2, e2.get("alignWithLabel"), t3.clamp), n2;
  }, t2.prototype.getMinorTicksCoords = function() {
    if (this.scale.type === "ordinal") return [];
    var t3 = this.model.getModel("minorTick").get("splitNumber");
    return t3 > 0 && t3 < 100 || (t3 = 5), Z(this.scale.getMinorTicks(t3), function(t4) {
      return Z(t4, function(t5) {
        return { coord: this.dataToCoord(t5), tickValue: t5 };
      }, this);
    }, this);
  }, t2.prototype.getViewLabels = function(t3) {
    return J_(this, t3 = t3 || $_(K_)).labels;
  }, t2.prototype.getLabelModel = function() {
    return this.model.getModel("axisLabel");
  }, t2.prototype.getTickModel = function() {
    return this.model.getModel("axisTick");
  }, t2.prototype.getBandWidth = function() {
    var t3 = this._extent, e2 = this.scale.getExtent(), n2 = e2[1] - e2[0] + (this.onBand ? 1 : 0);
    n2 === 0 && (n2 = 1);
    var i2 = Math.abs(t3[1] - t3[0]);
    return Math.abs(i2) / n2;
  }, t2.prototype.calculateCategoryInterval = function(t3) {
    return (function(t4, e2) {
      var n2 = e2.kind, i2 = (function(t5) {
        var e3 = t5.getLabelModel();
        return { axisRotate: t5.getRotate ? t5.getRotate() : t5.isHorizontal && !t5.isHorizontal() ? 90 : 0, labelRotate: e3.get("rotate") || 0, font: e3.getFont() };
      })(t4), r2 = R_(t4), o2 = (i2.axisRotate - i2.labelRotate) / 180 * Math.PI, a2 = t4.scale, s2 = a2.getExtent(), l2 = a2.count();
      if (s2[1] - s2[0] < 1) return 0;
      var u2 = 1;
      l2 > 40 && (u2 = Math.max(1, Math.floor(l2 / 40)));
      for (var h2 = s2[0], c2 = t4.dataToCoord(h2 + 1) - t4.dataToCoord(h2), p2 = Math.abs(c2 * Math.cos(o2)), d2 = Math.abs(c2 * Math.sin(o2)), f2 = 0, g2 = 0; h2 <= s2[1]; h2 += u2) {
        var v2, y2, m2 = ir(r2({ value: h2 }), i2.font, "center", "top");
        v2 = 1.3 * m2.width, y2 = 1.3 * m2.height, f2 = Math.max(f2, v2, 7), g2 = Math.max(g2, y2, 7);
      }
      var _2 = f2 / p2, x2 = g2 / d2;
      isNaN(_2) && (_2 = 1 / 0), isNaN(x2) && (x2 = 1 / 0);
      var b2 = Math.max(0, Math.floor(Math.min(_2, x2)));
      if (n2 === q_) return e2.out.noPxChangeTryDetermine.push($(sx, null, t4, b2, l2)), b2;
      var w2 = lx(t4, b2, l2);
      return w2 ?? b2;
    })(this, t3 = t3 || $_(K_));
  }, t2;
})();
function dx(t2, e2) {
  var n2 = (t2[1] - t2[0]) / e2 / 2;
  t2[0] += n2, t2[1] -= n2;
}
var fx = ["label", "labelLine", "layoutOption", "priority", "defaultAttr", "marginForce", "minMarginForce", "marginDefault", "suggestIgnore"];
function gx(t2, e2, n2) {
  n2 = n2 || 3, e2 ? t2.dirty |= n2 : t2.dirty &= ~n2;
}
function vx(t2, e2) {
  return e2 = e2 || 3, t2.dirty == null || !!(t2.dirty & e2);
}
function yx(t2) {
  if (t2) return vx(t2) && (function(t3, e2, n2) {
    var i2 = e2.getComputedTransform();
    t3.transform = kh(t3.transform, i2);
    var r2 = t3.localRect = Th(t3.localRect, e2.getBoundingRect()), o2 = e2.style, a2 = o2.margin, s2 = n2 && n2.marginForce, l2 = n2 && n2.minMarginForce, u2 = n2 && n2.marginDefault, h2 = o2.__marginType;
    h2 == null && u2 && (a2 = u2, h2 = Uh.textMargin);
    for (var c2 = 0; c2 < 4; c2++) mx[c2] = h2 === Uh.minMargin && l2 && l2[c2] != null ? l2[c2] : s2 && s2[c2] != null ? s2[c2] : a2 ? a2[c2] : 0;
    h2 === Uh.textMargin && yh(r2, mx, !1, !1);
    var p2 = t3.rect = Th(t3.rect, r2);
    i2 && p2.applyTransform(i2), h2 === Uh.minMargin && yh(p2, mx, !1, !1), t3.axisAligned = Sh(i2), (t3.label = t3.label || {}).ignore = e2.ignore, gx(t3, !1), gx(t3, !0, 2);
  })(t2, t2.label, t2), t2;
}
var mx = [0, 0, 0, 0];
function _x(t2, e2) {
  for (var n2 = 0; n2 < fx.length; n2++) {
    var i2 = fx[n2];
    t2[i2] == null && (t2[i2] = e2[i2]);
  }
  return yx(t2);
}
function xx(t2) {
  var e2 = t2.obb;
  return e2 && !vx(t2, 2) || (t2.obb = e2 = e2 || new Fu(), e2.fromBoundingRect(t2.localRect, t2.transform), gx(t2, !1, 2)), e2;
}
function bx(t2, e2, n2, i2) {
  return !(!t2 || !e2) && !(t2.label && t2.label.ignore || e2.label && e2.label.ignore) && !!t2.rect.intersect(e2.rect, n2, i2) && (!(!t2.axisAligned || !e2.axisAligned) || xx(t2).intersect(xx(e2), n2, i2));
}
function Sx(t2, e2, n2) {
  var i2 = M.createCanvas(), r2 = e2.getWidth(), o2 = e2.getHeight(), a2 = i2.style;
  return a2 && (a2.position = "absolute", a2.left = "0", a2.top = "0", a2.width = r2 + "px", a2.height = o2 + "px", i2.setAttribute("data-zr-dom-id", t2)), i2.width = r2 * n2, i2.height = o2 * n2, i2;
}
var Mx = (function(t2) {
  function e2(e3, n2, i2) {
    var r2, o2 = t2.call(this) || this;
    o2.motionBlur = !1, o2.lastFrameAlpha = 0.7, o2.dpr = 1, o2.virtual = !1, o2.config = {}, o2.incremental = !1, o2.zlevel = 0, o2.maxRepaintRectCount = 5, o2.__dirty = !0, o2.__firstTimePaint = !0, o2.__used = !1, o2.__drawIndex = 0, o2.__startIndex = 0, o2.__endIndex = 0, o2.__prevStartIndex = null, o2.__prevEndIndex = null, i2 = i2 || Bi, typeof e3 == "string" ? r2 = Sx(e3, n2, i2) : rt(e3) && (e3 = (r2 = e3).id), o2.id = e3, o2.dom = r2;
    var a2 = r2.style;
    return a2 && (Tt2(r2), r2.onselectstart = function() {
      return !1;
    }, a2.padding = "0", a2.margin = "0", a2.borderWidth = "0"), o2.painter = n2, o2.dpr = i2, o2;
  }
  return _(e2, t2), e2.prototype.getElementCount = function() {
    return this.__endIndex - this.__startIndex;
  }, e2.prototype.afterBrush = function() {
    this.__prevStartIndex = this.__startIndex, this.__prevEndIndex = this.__endIndex;
  }, e2.prototype.initContext = function() {
    this.ctx = this.dom.getContext("2d"), this.ctx.dpr = this.dpr;
  }, e2.prototype.setUnpainted = function() {
    this.__firstTimePaint = !0;
  }, e2.prototype.createBackBuffer = function() {
    var t3 = this.dpr;
    this.domBack = Sx("back-" + this.id, this.painter, t3), this.ctxBack = this.domBack.getContext("2d"), t3 !== 1 && this.ctxBack.scale(t3, t3);
  }, e2.prototype.createRepaintRects = function(t3, e3, n2, i2) {
    if (this.__firstTimePaint) return this.__firstTimePaint = !1, null;
    var r2, o2 = [], a2 = this.maxRepaintRectCount, s2 = !1, l2 = new Oe(0, 0, 0, 0);
    function u2(t4) {
      if (t4.isFinite() && !t4.isZero()) if (o2.length === 0)
        (e4 = new Oe(0, 0, 0, 0)).copy(t4), o2.push(e4);
      else {
        for (var e4, n3 = !1, i3 = 1 / 0, r3 = 0, u3 = 0; u3 < o2.length; ++u3) {
          var h3 = o2[u3];
          if (h3.intersect(t4)) {
            var c3 = new Oe(0, 0, 0, 0);
            c3.copy(h3), c3.union(t4), o2[u3] = c3, n3 = !0;
            break;
          }
          if (s2) {
            l2.copy(t4), l2.union(h3);
            var p3 = t4.width * t4.height, d3 = h3.width * h3.height, f3 = l2.width * l2.height - p3 - d3;
            f3 < i3 && (i3 = f3, r3 = u3);
          }
        }
        s2 && (o2[r3].union(t4), n3 = !0), !n3 && ((e4 = new Oe(0, 0, 0, 0)).copy(t4), o2.push(e4)), s2 || (s2 = o2.length >= a2);
      }
    }
    for (var h2 = this.__startIndex; h2 < this.__endIndex; ++h2)
      if (d2 = t3[h2]) {
        var c2 = d2.shouldBePainted(n2, i2, !0, !0);
        (f2 = d2.__isRendered && (1 & d2.__dirty || !c2) ? d2.getPrevPaintRect() : null) && u2(f2);
        var p2 = c2 && (1 & d2.__dirty || !d2.__isRendered) ? d2.getPaintRect() : null;
        p2 && u2(p2);
      }
    for (h2 = this.__prevStartIndex; h2 < this.__prevEndIndex; ++h2) {
      var d2, f2;
      c2 = (d2 = e3[h2]) && d2.shouldBePainted(n2, i2, !0, !0), d2 && (!c2 || !d2.__zr) && d2.__isRendered && (f2 = d2.getPrevPaintRect()) && u2(f2);
    }
    do
      for (r2 = !1, h2 = 0; h2 < o2.length; ) if (o2[h2].isZero()) o2.splice(h2, 1);
      else {
        for (var g2 = h2 + 1; g2 < o2.length; ) o2[h2].intersect(o2[g2]) ? (r2 = !0, o2[h2].union(o2[g2]), o2.splice(g2, 1)) : g2++;
        h2++;
      }
    while (r2);
    return this._paintRects = o2, o2;
  }, e2.prototype.debugGetPaintRects = function() {
    return (this._paintRects || []).slice();
  }, e2.prototype.resize = function(t3, e3) {
    var n2 = this.dpr, i2 = this.dom, r2 = i2.style, o2 = this.domBack;
    r2 && (r2.width = t3 + "px", r2.height = e3 + "px"), i2.width = t3 * n2, i2.height = e3 * n2, o2 && (o2.width = t3 * n2, o2.height = e3 * n2, n2 !== 1 && this.ctxBack.scale(n2, n2));
  }, e2.prototype.clear = function(t3, e3, n2) {
    var i2 = this.dom, r2 = this.ctx, o2 = i2.width, a2 = i2.height;
    e3 = e3 || this.clearColor;
    var s2 = this.motionBlur && !t3, l2 = this.lastFrameAlpha, u2 = this.dpr, h2 = this;
    s2 && (this.domBack || this.createBackBuffer(), this.ctxBack.globalCompositeOperation = "copy", this.ctxBack.drawImage(i2, 0, 0, o2 / u2, a2 / u2));
    var c2 = this.domBack;
    function p2(t4, n3, i3, o3) {
      if (r2.clearRect(t4, n3, i3, o3), e3 && e3 !== "transparent") {
        var a3 = void 0;
        lt(e3) ? (a3 = (e3.global || e3.__width === i3 && e3.__height === o3) && e3.__canvasGradient || wv(r2, e3, { x: 0, y: 0, width: i3, height: o3 }), e3.__canvasGradient = a3, e3.__width = i3, e3.__height = o3) : e3.image != null && (e3.scaleX = e3.scaleX || u2, e3.scaleY = e3.scaleY || u2, a3 = Pv(r2, e3, { dirty: function() {
          h2.setUnpainted(), h2.painter.refresh();
        } })), r2.save(), r2.fillStyle = a3 || e3, r2.fillRect(t4, n3, i3, o3), r2.restore();
      }
      s2 && (r2.save(), r2.globalAlpha = l2, r2.drawImage(c2, t4, n3, i3, o3), r2.restore());
    }
    !n2 || s2 ? p2(0, 0, o2, a2) : n2.length && Y(n2, function(t4) {
      p2(t4.x * u2, t4.y * u2, t4.width * u2, t4.height * u2);
    });
  }, e2;
})(Gt), Tx = 1e5, kx = 314159, Cx = 0.01, Ix = (function() {
  function t2(t3, e2, n2, i2) {
    this.type = "canvas", this._zlevelList = [], this._prevDisplayList = [], this._layers = {}, this._layerConfig = {}, this._needsManuallyCompositing = !1, this.type = "canvas";
    var r2 = !t3.nodeName || t3.nodeName.toUpperCase() === "CANVAS";
    this._opts = n2 = H({}, n2 || {}), this.dpr = n2.devicePixelRatio || Bi, this._singleCanvas = r2, this.root = t3, t3.style && (Tt2(t3), t3.innerHTML = ""), this.storage = e2;
    var o2 = this._zlevelList;
    this._prevDisplayList = [];
    var a2 = this._layers;
    if (r2) {
      var s2 = t3, l2 = s2.width, u2 = s2.height;
      n2.width != null && (l2 = n2.width), n2.height != null && (u2 = n2.height), this.dpr = n2.devicePixelRatio || 1, s2.width = l2 * this.dpr, s2.height = u2 * this.dpr, this._width = l2, this._height = u2;
      var h2 = new Mx(s2, this, this.dpr);
      h2.__builtin__ = !0, h2.initContext(), a2[314159] = h2, h2.zlevel = kx, o2.push(kx), this._domRoot = t3;
    } else {
      this._width = Mv(t3, 0, n2), this._height = Mv(t3, 1, n2);
      var c2 = this._domRoot = (function(t4, e3) {
        var n3 = document.createElement("div");
        return n3.style.cssText = ["position:relative", "width:" + t4 + "px", "height:" + e3 + "px", "padding:0", "margin:0", "border-width:0"].join(";") + ";", n3;
      })(this._width, this._height);
      t3.appendChild(c2);
    }
  }
  return t2.prototype.getType = function() {
    return "canvas";
  }, t2.prototype.isSingleCanvas = function() {
    return this._singleCanvas;
  }, t2.prototype.getViewportRoot = function() {
    return this._domRoot;
  }, t2.prototype.getViewportRootOffset = function() {
    var t3 = this.getViewportRoot();
    if (t3) return { offsetLeft: t3.offsetLeft || 0, offsetTop: t3.offsetTop || 0 };
  }, t2.prototype.refresh = function(t3) {
    var e2 = this.storage.getDisplayList(!0), n2 = this._prevDisplayList, i2 = this._zlevelList;
    this._redrawId = Math.random(), this._paintList(e2, n2, t3, this._redrawId);
    for (var r2 = 0; r2 < i2.length; r2++) {
      var o2 = i2[r2], a2 = this._layers[o2];
      if (!a2.__builtin__ && a2.refresh) {
        var s2 = r2 === 0 ? this._backgroundColor : null;
        a2.refresh(s2);
      }
    }
    return this._opts.useDirtyRect && (this._prevDisplayList = e2.slice()), this;
  }, t2.prototype.refreshHover = function() {
    this._paintHoverList(this.storage.getDisplayList(!1));
  }, t2.prototype._paintHoverList = function(t3) {
    var e2 = t3.length, n2 = this._hoverlayer;
    if (n2 && n2.clear(), e2) {
      for (var i2, r2 = { inHover: !0, viewWidth: this._width, viewHeight: this._height }, o2 = 0; o2 < e2; o2++) {
        var a2 = t3[o2];
        a2.__inHover && (n2 || (n2 = this._hoverlayer = this.getLayer(Tx)), i2 || (i2 = n2.ctx).save(), Hv(i2, a2, r2, o2 === e2 - 1));
      }
      i2 && i2.restore();
    }
  }, t2.prototype.getHoverLayer = function() {
    return this.getLayer(Tx);
  }, t2.prototype.paintOne = function(t3, e2) {
    Vv(t3, e2);
  }, t2.prototype._paintList = function(t3, e2, n2, i2) {
    if (this._redrawId === i2) {
      n2 = n2 || !1, this._updateLayerStatus(t3);
      var r2 = this._doPaintList(t3, e2, n2), o2 = r2.finished, a2 = r2.needsRefreshHover;
      if (this._needsManuallyCompositing && this._compositeManually(), a2 && this._paintHoverList(t3), o2) this.eachLayer(function(t4) {
        t4.afterBrush && t4.afterBrush();
      });
      else {
        var s2 = this;
        rn(function() {
          s2._paintList(t3, e2, n2, i2);
        });
      }
    }
  }, t2.prototype._compositeManually = function() {
    var t3 = this.getLayer(kx).ctx, e2 = this._domRoot.width, n2 = this._domRoot.height;
    t3.clearRect(0, 0, e2, n2), this.eachBuiltinLayer(function(i2) {
      i2.virtual && t3.drawImage(i2.dom, 0, 0, e2, n2);
    });
  }, t2.prototype._doPaintList = function(t3, e2, n2) {
    for (var i2 = this, r2 = [], o2 = this._opts.useDirtyRect, a2 = 0; a2 < this._zlevelList.length; a2++) {
      var s2 = this._zlevelList[a2], l2 = this._layers[s2];
      l2.__builtin__ && l2 !== this._hoverlayer && (l2.__dirty || n2) && r2.push(l2);
    }
    for (var u2 = !0, h2 = !1, c2 = function(a3) {
      var s3, l3 = r2[a3], c3 = l3.ctx, d3 = o2 && l3.createRepaintRects(t3, e2, p2._width, p2._height), f2 = n2 ? l3.__startIndex : l3.__drawIndex, g2 = !n2 && l3.incremental && Date.now, v2 = g2 && Date.now(), y2 = l3.zlevel === p2._zlevelList[0] ? p2._backgroundColor : null;
      if (l3.__startIndex === l3.__endIndex) l3.clear(!1, y2, d3);
      else if (f2 === l3.__startIndex) {
        var m2 = t3[f2];
        m2.incremental && m2.notClear && !n2 || l3.clear(!1, y2, d3);
      }
      f2 === -1 && (f2 = l3.__startIndex);
      var _2 = function(e3) {
        var n3 = { inHover: !1, allClipped: !1, prevEl: null, viewWidth: i2._width, viewHeight: i2._height };
        for (s3 = f2; s3 < l3.__endIndex; s3++) {
          var r3 = t3[s3];
          if (r3.__inHover && (h2 = !0), i2._doPaintEl(r3, l3, o2, e3, n3, s3 === l3.__endIndex - 1), g2 && Date.now() - v2 > 15) break;
        }
        n3.prevElClipPaths && c3.restore();
      };
      if (d3) if (d3.length === 0) s3 = l3.__endIndex;
      else for (var x2 = p2.dpr, b2 = 0; b2 < d3.length; ++b2) {
        var w2 = d3[b2];
        c3.save(), c3.beginPath(), c3.rect(w2.x * x2, w2.y * x2, w2.width * x2, w2.height * x2), c3.clip(), _2(w2), c3.restore();
      }
      else c3.save(), _2(), c3.restore();
      l3.__drawIndex = s3, l3.__drawIndex < l3.__endIndex && (u2 = !1);
    }, p2 = this, d2 = 0; d2 < r2.length; d2++) c2(d2);
    return b.wxa && Y(this._layers, function(t4) {
      t4 && t4.ctx && t4.ctx.draw && t4.ctx.draw();
    }), { finished: u2, needsRefreshHover: h2 };
  }, t2.prototype._doPaintEl = function(t3, e2, n2, i2, r2, o2) {
    var a2 = e2.ctx;
    if (n2) {
      var s2 = t3.getPaintRect();
      (!i2 || s2 && s2.intersect(i2)) && (Hv(a2, t3, r2, o2), t3.setPrevPaintRect(s2));
    } else Hv(a2, t3, r2, o2);
  }, t2.prototype.getLayer = function(t3, e2) {
    this._singleCanvas && !this._needsManuallyCompositing && (t3 = kx);
    var n2 = this._layers[t3];
    return n2 || ((n2 = new Mx("zr_" + t3, this, this.dpr)).zlevel = t3, n2.__builtin__ = !0, this._layerConfig[t3] ? V(n2, this._layerConfig[t3], !0) : this._layerConfig[t3 - Cx] && V(n2, this._layerConfig[t3 - Cx], !0), e2 && (n2.virtual = e2), this.insertLayer(t3, n2), n2.initContext()), n2;
  }, t2.prototype.insertLayer = function(t3, e2) {
    var n2 = this._layers, i2 = this._zlevelList, r2 = i2.length, o2 = this._domRoot, a2 = null, s2 = -1;
    if (!n2[t3] && (function(t4) {
      return !!t4 && (!!t4.__builtin__ || typeof t4.resize == "function" && typeof t4.refresh == "function");
    })(e2)) {
      if (r2 > 0 && t3 > i2[0]) {
        for (s2 = 0; s2 < r2 - 1 && !(i2[s2] < t3 && i2[s2 + 1] > t3); s2++) ;
        a2 = n2[i2[s2]];
      }
      if (i2.splice(s2 + 1, 0, t3), n2[t3] = e2, !e2.virtual) if (a2) {
        var l2 = a2.dom;
        l2.nextSibling ? o2.insertBefore(e2.dom, l2.nextSibling) : o2.appendChild(e2.dom);
      } else o2.firstChild ? o2.insertBefore(e2.dom, o2.firstChild) : o2.appendChild(e2.dom);
      e2.painter || (e2.painter = this);
    }
  }, t2.prototype.eachLayer = function(t3, e2) {
    for (var n2 = this._zlevelList, i2 = 0; i2 < n2.length; i2++) {
      var r2 = n2[i2];
      t3.call(e2, this._layers[r2], r2);
    }
  }, t2.prototype.eachBuiltinLayer = function(t3, e2) {
    for (var n2 = this._zlevelList, i2 = 0; i2 < n2.length; i2++) {
      var r2 = n2[i2], o2 = this._layers[r2];
      o2.__builtin__ && t3.call(e2, o2, r2);
    }
  }, t2.prototype.eachOtherLayer = function(t3, e2) {
    for (var n2 = this._zlevelList, i2 = 0; i2 < n2.length; i2++) {
      var r2 = n2[i2], o2 = this._layers[r2];
      o2.__builtin__ || t3.call(e2, o2, r2);
    }
  }, t2.prototype.getLayers = function() {
    return this._layers;
  }, t2.prototype._updateLayerStatus = function(t3) {
    function e2(t4) {
      o2 && (o2.__endIndex !== t4 && (o2.__dirty = !0), o2.__endIndex = t4);
    }
    if (this.eachBuiltinLayer(function(t4, e3) {
      t4.__dirty = t4.__used = !1;
    }), this._singleCanvas) {
      for (var n2 = 1; n2 < t3.length; n2++)
        if ((s2 = t3[n2]).zlevel !== t3[n2 - 1].zlevel || s2.incremental) {
          this._needsManuallyCompositing = !0;
          break;
        }
    }
    var i2, r2, o2 = null, a2 = 0;
    for (r2 = 0; r2 < t3.length; r2++) {
      var s2, l2 = (s2 = t3[r2]).zlevel, u2 = void 0;
      i2 !== l2 && (i2 = l2, a2 = 0), s2.incremental ? ((u2 = this.getLayer(l2 + 1e-3, this._needsManuallyCompositing)).incremental = !0, a2 = 1) : u2 = this.getLayer(l2 + (a2 > 0 ? Cx : 0), this._needsManuallyCompositing), u2.__builtin__ || E("ZLevel " + l2 + " has been used by unkown layer " + u2.id), u2 !== o2 && (u2.__used = !0, u2.__startIndex !== r2 && (u2.__dirty = !0), u2.__startIndex = r2, u2.incremental ? u2.__drawIndex = -1 : u2.__drawIndex = r2, e2(r2), o2 = u2), 1 & s2.__dirty && !s2.__inHover && (u2.__dirty = !0, u2.incremental && u2.__drawIndex < 0 && (u2.__drawIndex = r2));
    }
    e2(r2), this.eachBuiltinLayer(function(t4, e3) {
      !t4.__used && t4.getElementCount() > 0 && (t4.__dirty = !0, t4.__startIndex = t4.__endIndex = t4.__drawIndex = 0), t4.__dirty && t4.__drawIndex < 0 && (t4.__drawIndex = t4.__startIndex);
    });
  }, t2.prototype.clear = function() {
    return this.eachBuiltinLayer(this._clearLayer), this;
  }, t2.prototype._clearLayer = function(t3) {
    t3.clear();
  }, t2.prototype.setBackgroundColor = function(t3) {
    this._backgroundColor = t3, Y(this._layers, function(t4) {
      t4.setUnpainted();
    });
  }, t2.prototype.configLayer = function(t3, e2) {
    if (e2) {
      var n2 = this._layerConfig;
      n2[t3] ? V(n2[t3], e2, !0) : n2[t3] = e2;
      for (var i2 = 0; i2 < this._zlevelList.length; i2++) {
        var r2 = this._zlevelList[i2];
        (r2 === t3 || r2 === t3 + Cx) && V(this._layers[r2], n2[t3], !0);
      }
    }
  }, t2.prototype.delLayer = function(t3) {
    var e2 = this._layers, n2 = this._zlevelList, i2 = e2[t3];
    i2 && (i2.dom.parentNode.removeChild(i2.dom), delete e2[t3], n2.splice(G(n2, t3), 1));
  }, t2.prototype.resize = function(t3, e2) {
    if (this._domRoot.style) {
      var n2 = this._domRoot;
      n2.style.display = "none";
      var i2 = this._opts, r2 = this.root;
      if (t3 != null && (i2.width = t3), e2 != null && (i2.height = e2), t3 = Mv(r2, 0, i2), e2 = Mv(r2, 1, i2), n2.style.display = "", this._width !== t3 || e2 !== this._height) {
        for (var o2 in n2.style.width = t3 + "px", n2.style.height = e2 + "px", this._layers) this._layers.hasOwnProperty(o2) && this._layers[o2].resize(t3, e2);
        this.refresh(!0);
      }
      this._width = t3, this._height = e2;
    } else {
      if (t3 == null || e2 == null) return;
      this._width = t3, this._height = e2, this.getLayer(kx).resize(t3, e2);
    }
    return this;
  }, t2.prototype.clearLayer = function(t3) {
    var e2 = this._layers[t3];
    e2 && e2.clear();
  }, t2.prototype.dispose = function() {
    this.root.innerHTML = "", this.root = this.storage = this._domRoot = this._layers = null;
  }, t2.prototype.getRenderedCanvas = function(t3) {
    if (t3 = t3 || {}, this._singleCanvas && !this._compositeManually) return this._layers[314159].dom;
    var e2 = new Mx("image", this, t3.pixelRatio || this.dpr);
    e2.initContext(), e2.clear(!1, t3.backgroundColor || this._backgroundColor);
    var n2 = e2.ctx;
    if (t3.pixelRatio <= this.dpr) {
      this.refresh();
      var i2 = e2.dom.width, r2 = e2.dom.height;
      this.eachLayer(function(t4) {
        t4.__builtin__ ? n2.drawImage(t4.dom, 0, 0, i2, r2) : t4.renderToCanvas && (n2.save(), t4.renderToCanvas(n2), n2.restore());
      });
    } else for (var o2 = { inHover: !1, viewWidth: this._width, viewHeight: this._height }, a2 = this.storage.getDisplayList(!0), s2 = 0, l2 = a2.length; s2 < l2; s2++) {
      var u2 = a2[s2];
      Hv(n2, u2, o2, s2 === l2 - 1);
    }
    return e2.dom;
  }, t2.prototype.getWidth = function() {
    return this._width;
  }, t2.prototype.getHeight = function() {
    return this._height;
  }, t2;
})();
function Dx(t2) {
  t2.registerPainter("canvas", Ix);
}
var Ax = (function(t2) {
  function e2() {
    var n2 = t2 !== null && t2.apply(this, arguments) || this;
    return n2.type = e2.type, n2.hasSymbolVisual = !0, n2;
  }
  return _(e2, t2), e2.prototype.getInitialData = function(t3) {
    return Em(0, this, { useEncodeDefaulter: !0 });
  }, e2.prototype.getLegendIcon = function(t3) {
    var e3 = new xr(), n2 = mv("line", 0, t3.itemHeight / 2, t3.itemWidth, 0, t3.lineStyle.stroke, !1);
    e3.add(n2), n2.setStyle(t3.lineStyle);
    var i2 = this.getData().getVisual("symbol"), r2 = this.getData().getVisual("symbolRotate"), o2 = i2 === "none" ? "circle" : i2, a2 = 0.8 * t3.itemHeight, s2 = mv(o2, (t3.itemWidth - a2) / 2, (t3.itemHeight - a2) / 2, a2, a2, t3.itemStyle.fill);
    e3.add(s2), s2.setStyle(t3.itemStyle);
    var l2 = t3.iconRotate === "inherit" ? r2 : t3.iconRotate || 0;
    return s2.rotation = l2 * Math.PI / 180, s2.setOrigin([t3.itemWidth / 2, t3.itemHeight / 2]), o2.indexOf("empty") > -1 && (s2.style.stroke = s2.style.fill, s2.style.fill = wp.color.neutral00, s2.style.lineWidth = 2), e3;
  }, e2.type = "series.line", e2.dependencies = ["grid", "polar"], e2.defaultOption = { z: 3, coordinateSystem: "cartesian2d", legendHoverLink: !0, clip: !0, label: { position: "top" }, endLabel: { show: !1, valueAnimation: !0, distance: 8 }, lineStyle: { width: 2, type: "solid" }, emphasis: { scale: !0 }, step: !1, smooth: !1, smoothMonotone: null, symbol: "emptyCircle", symbolSize: 6, symbolRotate: null, showSymbol: !0, showAllSymbol: "auto", connectNulls: !1, sampling: "none", animationEasing: "linear", progressive: 0, hoverLayerThreshold: 1 / 0, universalTransition: { divideShape: "clone" }, triggerLineEvent: !1 }, e2;
})(Qf);
function Lx(t2, e2) {
  var n2 = t2.mapDimensionsAll("defaultedLabel"), i2 = n2.length;
  if (i2 === 1) {
    var r2 = ef(t2, e2, n2[0]);
    return r2 != null ? r2 + "" : null;
  }
  if (i2) {
    for (var o2 = [], a2 = 0; a2 < n2.length; a2++) o2.push(ef(t2, e2, n2[a2]));
    return o2.join(" ");
  }
}
function Px(t2, e2) {
  var n2 = t2.mapDimensionsAll("defaultedLabel");
  if (!J(e2)) return e2 + "";
  for (var i2 = [], r2 = 0; r2 < n2.length; r2++) {
    var o2 = t2.getDimensionIndex(n2[r2]);
    o2 >= 0 && i2.push(e2[o2]);
  }
  return i2.join(" ");
}
var Ox = (function(t2) {
  function e2(e3, n2, i2, r2) {
    var o2 = t2.call(this) || this;
    return o2.updateData(e3, n2, i2, r2), o2;
  }
  return _(e2, t2), e2.prototype._createSymbol = function(t3, e3, n2, i2, r2, o2) {
    this.removeAll();
    var a2 = mv(t3, -1, -1, 2, 2, null, o2);
    a2.attr({ z2: ct(r2, 100), culling: !0, scaleX: i2[0] / 2, scaleY: i2[1] / 2 }), a2.drift = Rx, this._symbolType = t3, this.add(a2);
  }, e2.prototype.stopSymbolAnimation = function(t3) {
    this.childAt(0).stopAnimation(null, t3);
  }, e2.prototype.getSymbolType = function() {
    return this._symbolType;
  }, e2.prototype.getSymbolPath = function() {
    return this.childAt(0);
  }, e2.prototype.highlight = function() {
    sl(this.childAt(0));
  }, e2.prototype.downplay = function() {
    ll(this.childAt(0));
  }, e2.prototype.setZ = function(t3, e3) {
    var n2 = this.childAt(0);
    n2.zlevel = t3, n2.z = e3;
  }, e2.prototype.setDraggable = function(t3, e3) {
    var n2 = this.childAt(0);
    n2.draggable = t3, n2.cursor = !e3 && t3 ? "move" : n2.cursor;
  }, e2.prototype.updateData = function(t3, n2, i2, r2) {
    this.silent = !1;
    var o2 = t3.getItemVisual(n2, "symbol") || "circle", a2 = t3.hostModel, s2 = e2.getSymbolSize(t3, n2), l2 = e2.getSymbolZ2(t3, n2), u2 = o2 !== this._symbolType, h2 = r2 && r2.disableAnimation;
    if (u2) {
      var c2 = t3.getItemVisual(n2, "symbolKeepAspect");
      this._createSymbol(o2, t3, n2, s2, l2, c2);
    } else {
      (d2 = this.childAt(0)).silent = !1;
      var p2 = { scaleX: s2[0] / 2, scaleY: s2[1] / 2 };
      h2 ? d2.attr(p2) : Uu(d2, p2, a2, n2), Ku(d2);
    }
    if (this._updateCommon(t3, n2, s2, i2, r2), u2) {
      var d2 = this.childAt(0);
      h2 || (p2 = { scaleX: this._sizeX, scaleY: this._sizeY, style: { opacity: d2.style.opacity } }, d2.scaleX = d2.scaleY = 0, d2.style.opacity = 0, Xu(d2, p2, a2, n2));
    }
    h2 && this.childAt(0).stopAnimation("leave");
  }, e2.prototype._updateCommon = function(t3, e3, n2, i2, r2) {
    var o2, a2, s2, l2, u2, h2, c2, p2, d2, f2 = this.childAt(0), g2 = t3.hostModel;
    if (i2 && (o2 = i2.emphasisItemStyle, a2 = i2.blurItemStyle, s2 = i2.selectItemStyle, l2 = i2.focus, u2 = i2.blurScope, c2 = i2.labelStatesModels, p2 = i2.hoverScale, d2 = i2.cursorStyle, h2 = i2.emphasisDisabled), !i2 || t3.hasItemOption) {
      var v2 = i2 && i2.itemModel ? i2.itemModel : t3.getItemModel(e3), y2 = v2.getModel("emphasis");
      o2 = y2.getModel("itemStyle").getItemStyle(), s2 = v2.getModel(["select", "itemStyle"]).getItemStyle(), a2 = v2.getModel(["blur", "itemStyle"]).getItemStyle(), l2 = y2.get("focus"), u2 = y2.get("blurScope"), h2 = y2.get("disabled"), c2 = Rh(v2), p2 = y2.getShallow("scale"), d2 = v2.getShallow("cursor");
    }
    var m2 = t3.getItemVisual(e3, "symbolRotate");
    f2.attr("rotation", (m2 || 0) * Math.PI / 180 || 0);
    var _2 = xv(t3.getItemVisual(e3, "symbolOffset"), n2);
    _2 && (f2.x = _2[0], f2.y = _2[1]), d2 && f2.attr("cursor", d2);
    var x2 = t3.getItemVisual(e3, "style"), b2 = x2.fill;
    if (f2 instanceof hs2) {
      var w2 = f2.style;
      f2.useStyle(H({ image: w2.image, x: w2.x, y: w2.y, width: w2.width, height: w2.height }, x2));
    } else f2.__isEmptyBrush ? f2.useStyle(H({}, x2)) : f2.useStyle(x2), f2.style.decal = null, f2.setColor(b2, r2 && r2.symbolInnerColor), f2.style.strokeNoScale = !0;
    var S2 = t3.getItemVisual(e3, "liftZ"), M2 = this._z2;
    S2 != null ? M2 == null && (this._z2 = f2.z2, f2.z2 += S2) : M2 != null && (f2.z2 = M2, this._z2 = null);
    var T2 = r2 && r2.useNameLabel;
    Oh(f2, c2, { labelFetcher: g2, labelDataIndex: e3, defaultText: function(e4) {
      return T2 ? t3.getName(e4) : Lx(t3, e4);
    }, inheritColor: b2, defaultOpacity: x2.opacity }), this._sizeX = n2[0] / 2, this._sizeY = n2[1] / 2;
    var k2 = f2.ensureState("emphasis");
    k2.style = o2, f2.ensureState("select").style = s2, f2.ensureState("blur").style = a2;
    var C2 = p2 == null || p2 === !0 ? Math.max(1.1, 3 / this._sizeY) : isFinite(p2) && p2 > 0 ? +p2 : 1;
    k2.scaleX = this._sizeX * C2, k2.scaleY = this._sizeY * C2, this.setSymbolScale(1), bl(this, l2, u2, h2);
  }, e2.prototype.setSymbolScale = function(t3) {
    this.scaleX = this.scaleY = t3;
  }, e2.prototype.fadeOut = function(t3, e3, n2) {
    var i2 = this.childAt(0), r2 = Os(this).dataIndex, o2 = n2 && n2.animation;
    if (this.silent = i2.silent = !0, n2 && n2.fadeLabel) {
      var a2 = i2.getTextContent();
      a2 && Zu(a2, { style: { opacity: 0 } }, e3, { dataIndex: r2, removeOpt: o2, cb: function() {
        i2.removeTextContent();
      } });
    } else i2.removeTextContent();
    Zu(i2, { style: { opacity: 0 }, scaleX: 0, scaleY: 0 }, e3, { dataIndex: r2, cb: t3, removeOpt: o2 });
  }, e2.getSymbolSize = function(t3, e3) {
    return _v(t3.getItemVisual(e3, "symbolSize"));
  }, e2.getSymbolZ2 = function(t3, e3) {
    return t3.getItemVisual(e3, "z2");
  }, e2;
})(xr);
function Rx(t2, e2) {
  this.parent.drift(t2, e2);
}
function Nx(t2, e2, n2, i2) {
  return e2 && !isNaN(e2[0]) && !isNaN(e2[1]) && !(i2.isIgnore && i2.isIgnore(n2)) && !(i2.clipShape && !i2.clipShape.contain(e2[0], e2[1])) && t2.getItemVisual(n2, "symbol") !== "none";
}
function zx(t2) {
  return t2 == null || rt(t2) || (t2 = { isIgnore: t2 }), t2 || {};
}
function Bx(t2) {
  var e2 = t2.hostModel, n2 = e2.getModel("emphasis");
  return { emphasisItemStyle: n2.getModel("itemStyle").getItemStyle(), blurItemStyle: e2.getModel(["blur", "itemStyle"]).getItemStyle(), selectItemStyle: e2.getModel(["select", "itemStyle"]).getItemStyle(), focus: n2.get("focus"), blurScope: n2.get("blurScope"), emphasisDisabled: n2.get("disabled"), hoverScale: n2.get("scale"), labelStatesModels: Rh(e2), cursorStyle: e2.get("cursor") };
}
var Ex = (function() {
  function t2(t3) {
    this.group = new xr(), this._SymbolCtor = t3 || Ox;
  }
  return t2.prototype.updateData = function(t3, e2) {
    this._progressiveEls = null, e2 = zx(e2);
    var n2 = this.group, i2 = t3.hostModel, r2 = this._data, o2 = this._SymbolCtor, a2 = e2.disableAnimation, s2 = Bx(t3), l2 = { disableAnimation: a2 }, u2 = e2.getSymbolPoint || function(e3) {
      return t3.getItemLayout(e3);
    };
    r2 || n2.removeAll(), t3.diff(r2).add(function(i3) {
      var r3 = u2(i3);
      if (Nx(t3, r3, i3, e2)) {
        var a3 = new o2(t3, i3, s2, l2);
        a3.setPosition(r3), t3.setItemGraphicEl(i3, a3), n2.add(a3);
      }
    }).update(function(h2, c2) {
      var p2 = r2.getItemGraphicEl(c2), d2 = u2(h2);
      if (Nx(t3, d2, h2, e2)) {
        var f2 = t3.getItemVisual(h2, "symbol") || "circle", g2 = p2 && p2.getSymbolType && p2.getSymbolType();
        if (!p2 || g2 && g2 !== f2) n2.remove(p2), (p2 = new o2(t3, h2, s2, l2)).setPosition(d2);
        else {
          p2.updateData(t3, h2, s2, l2);
          var v2 = { x: d2[0], y: d2[1] };
          a2 ? p2.attr(v2) : Uu(p2, v2, i2);
        }
        n2.add(p2), t3.setItemGraphicEl(h2, p2);
      } else n2.remove(p2);
    }).remove(function(t4) {
      var e3 = r2.getItemGraphicEl(t4);
      e3 && e3.fadeOut(function() {
        n2.remove(e3);
      }, i2);
    }).execute(), this._getSymbolPoint = u2, this._data = t3;
  }, t2.prototype.updateLayout = function() {
    var t3 = this, e2 = this._data;
    e2 && e2.eachItemGraphicEl(function(e3, n2) {
      var i2 = t3._getSymbolPoint(n2);
      e3.setPosition(i2), e3.markRedraw();
    });
  }, t2.prototype.incrementalPrepareUpdate = function(t3) {
    this._seriesScope = Bx(t3), this._data = null, this.group.removeAll();
  }, t2.prototype.incrementalUpdate = function(t3, e2, n2) {
    function i2(t4) {
      t4.isGroup || (t4.incremental = !0, t4.ensureState("emphasis").hoverLayer = !0);
    }
    this._progressiveEls = [], n2 = zx(n2);
    for (var r2 = t3.start; r2 < t3.end; r2++) {
      var o2 = e2.getItemLayout(r2);
      if (Nx(e2, o2, r2, n2)) {
        var a2 = new this._SymbolCtor(e2, r2, this._seriesScope);
        a2.traverse(i2), a2.setPosition(o2), this.group.add(a2), e2.setItemGraphicEl(r2, a2), this._progressiveEls.push(a2);
      }
    }
  }, t2.prototype.eachRendered = function(t3) {
    wh(this._progressiveEls || this.group, t3);
  }, t2.prototype.remove = function(t3) {
    var e2 = this.group, n2 = this._data;
    n2 && t3 ? n2.eachItemGraphicEl(function(t4) {
      t4.fadeOut(function() {
        e2.remove(t4);
      }, n2.hostModel);
    }) : e2.removeAll();
  }, t2;
})();
function Fx(t2, e2, n2) {
  var i2 = t2.getBaseAxis(), r2 = t2.getOtherAxis(i2), o2 = (function(t3, e3) {
    var n3 = 0, i3 = t3.scale.getExtent();
    return e3 === "start" ? n3 = i3[0] : e3 === "end" ? n3 = i3[1] : it(e3) && !isNaN(e3) ? n3 = e3 : i3[0] > 0 ? n3 = i3[0] : i3[1] < 0 && (n3 = i3[1]), n3;
  })(r2, n2), a2 = i2.dim, s2 = r2.dim, l2 = e2.mapDimension(s2), u2 = e2.mapDimension(a2), h2 = s2 === "x" || s2 === "radius" ? 1 : 0, c2 = Z(t2.dimensions, function(t3) {
    return e2.mapDimension(t3);
  }), p2 = !1, d2 = e2.getCalculationInfo("stackResultDimension");
  return zm(e2, c2[0]) && (p2 = !0, c2[0] = d2), zm(e2, c2[1]) && (p2 = !0, c2[1] = d2), { dataDimsForPoint: c2, valueStart: o2, valueAxisDim: s2, baseAxisDim: a2, stacked: !!p2, valueDim: l2, baseDim: u2, baseDataOffset: h2, stackedOverDimension: e2.getCalculationInfo("stackedOverDimension") };
}
function Vx(t2, e2, n2, i2) {
  var r2 = NaN;
  t2.stacked && (r2 = n2.get(n2.getCalculationInfo("stackedOverDimension"), i2)), isNaN(r2) && (r2 = t2.valueStart);
  var o2 = t2.baseDataOffset, a2 = [];
  return a2[o2] = n2.get(t2.baseDim, i2), a2[1 - o2] = r2, e2.dataToPoint(a2);
}
var Hx = Math.min, Wx = Math.max;
function Gx(t2, e2) {
  return isNaN(t2) || isNaN(e2);
}
function Ux(t2, e2, n2, i2, r2, o2, a2, s2, l2) {
  for (var u2, h2, c2, p2, d2, f2, g2 = n2, v2 = 0; v2 < i2; v2++) {
    var y2 = e2[2 * g2], m2 = e2[2 * g2 + 1];
    if (g2 >= r2 || g2 < 0) break;
    if (Gx(y2, m2)) {
      if (l2) {
        g2 += o2;
        continue;
      }
      break;
    }
    if (g2 === n2) t2[o2 > 0 ? "moveTo" : "lineTo"](y2, m2), c2 = y2, p2 = m2;
    else {
      var _2 = y2 - u2, x2 = m2 - h2;
      if (_2 * _2 + x2 * x2 < 0.5) {
        g2 += o2;
        continue;
      }
      if (a2 > 0) {
        for (var b2 = g2 + o2, w2 = e2[2 * b2], S2 = e2[2 * b2 + 1]; w2 === y2 && S2 === m2 && v2 < i2; ) v2++, g2 += o2, w2 = e2[2 * (b2 += o2)], S2 = e2[2 * b2 + 1], _2 = (y2 = e2[2 * g2]) - u2, x2 = (m2 = e2[2 * g2 + 1]) - h2;
        var M2 = v2 + 1;
        if (l2) for (; Gx(w2, S2) && M2 < i2; ) M2++, w2 = e2[2 * (b2 += o2)], S2 = e2[2 * b2 + 1];
        var T2 = 0.5, k2 = 0, C2 = 0, I2 = void 0, D2 = void 0;
        if (M2 >= i2 || Gx(w2, S2)) d2 = y2, f2 = m2;
        else {
          k2 = w2 - u2, C2 = S2 - h2;
          var A2 = y2 - u2, L2 = w2 - y2, P2 = m2 - h2, O2 = S2 - m2, R2 = void 0, N2 = void 0;
          if (s2 === "x") {
            var z2 = k2 > 0 ? 1 : -1;
            d2 = y2 - z2 * (R2 = Math.abs(A2)) * a2, f2 = m2, I2 = y2 + z2 * (N2 = Math.abs(L2)) * a2, D2 = m2;
          } else if (s2 === "y") {
            var B2 = C2 > 0 ? 1 : -1;
            d2 = y2, f2 = m2 - B2 * (R2 = Math.abs(P2)) * a2, I2 = y2, D2 = m2 + B2 * (N2 = Math.abs(O2)) * a2;
          } else R2 = Math.sqrt(A2 * A2 + P2 * P2), d2 = y2 - k2 * a2 * (1 - (T2 = (N2 = Math.sqrt(L2 * L2 + O2 * O2)) / (N2 + R2))), f2 = m2 - C2 * a2 * (1 - T2), D2 = m2 + C2 * a2 * T2, I2 = Hx(I2 = y2 + k2 * a2 * T2, Wx(w2, y2)), D2 = Hx(D2, Wx(S2, m2)), I2 = Wx(I2, Hx(w2, y2)), f2 = m2 - (C2 = (D2 = Wx(D2, Hx(S2, m2))) - m2) * R2 / N2, d2 = Hx(d2 = y2 - (k2 = I2 - y2) * R2 / N2, Wx(u2, y2)), f2 = Hx(f2, Wx(h2, m2)), I2 = y2 + (k2 = y2 - (d2 = Wx(d2, Hx(u2, y2)))) * N2 / R2, D2 = m2 + (C2 = m2 - (f2 = Wx(f2, Hx(h2, m2)))) * N2 / R2;
        }
        t2.bezierCurveTo(c2, p2, d2, f2, y2, m2), c2 = I2, p2 = D2;
      } else t2.lineTo(y2, m2);
    }
    u2 = y2, h2 = m2, g2 += o2;
  }
  return v2;
}
var Xx = /* @__PURE__ */ (function() {
  return function() {
    this.smooth = 0, this.smoothConstraint = !0;
  };
})(), Yx = (function(t2) {
  function e2(e3) {
    var n2 = t2.call(this, e3) || this;
    return n2.type = "ec-polyline", n2;
  }
  return _(e2, t2), e2.prototype.getDefaultStyle = function() {
    return { stroke: wp.color.neutral99, fill: null };
  }, e2.prototype.getDefaultShape = function() {
    return new Xx();
  }, e2.prototype.buildPath = function(t3, e3) {
    var n2 = e3.points, i2 = 0, r2 = n2.length / 2;
    if (e3.connectNulls) {
      for (; r2 > 0 && Gx(n2[2 * r2 - 2], n2[2 * r2 - 1]); r2--) ;
      for (; i2 < r2 && Gx(n2[2 * i2], n2[2 * i2 + 1]); i2++) ;
    }
    for (; i2 < r2; ) i2 += Ux(t3, n2, i2, r2, r2, 1, e3.smooth, e3.smoothMonotone, e3.connectNulls) + 1;
  }, e2.prototype.getPointOn = function(t3, e3) {
    this.path || (this.createPathProxy(), this.buildPath(this.path, this.shape));
    for (var n2, i2, r2 = this.path.data, o2 = Ea.CMD, a2 = e3 === "x", s2 = [], l2 = 0; l2 < r2.length; ) {
      var u2 = void 0, h2 = void 0, c2 = void 0, p2 = void 0, d2 = void 0, f2 = void 0, g2 = void 0;
      switch (r2[l2++]) {
        case o2.M:
          n2 = r2[l2++], i2 = r2[l2++];
          break;
        case o2.L:
          if (u2 = r2[l2++], h2 = r2[l2++], (g2 = a2 ? (t3 - n2) / (u2 - n2) : (t3 - i2) / (h2 - i2)) <= 1 && g2 >= 0) {
            var v2 = a2 ? (h2 - i2) * g2 + i2 : (u2 - n2) * g2 + n2;
            return a2 ? [t3, v2] : [v2, t3];
          }
          n2 = u2, i2 = h2;
          break;
        case o2.C:
          u2 = r2[l2++], h2 = r2[l2++], c2 = r2[l2++], p2 = r2[l2++], d2 = r2[l2++], f2 = r2[l2++];
          var y2 = a2 ? xn(n2, u2, c2, d2, t3, s2) : xn(i2, h2, p2, f2, t3, s2);
          if (y2 > 0) for (var m2 = 0; m2 < y2; m2++) {
            var _2 = s2[m2];
            if (_2 <= 1 && _2 >= 0)
              return v2 = a2 ? mn(i2, h2, p2, f2, _2) : mn(n2, u2, c2, d2, _2), a2 ? [t3, v2] : [v2, t3];
          }
          n2 = d2, i2 = f2;
      }
    }
  }, e2;
})(os), Zx = (function(t2) {
  function e2() {
    return t2 !== null && t2.apply(this, arguments) || this;
  }
  return _(e2, t2), e2;
})(Xx), jx = (function(t2) {
  function e2(e3) {
    var n2 = t2.call(this, e3) || this;
    return n2.type = "ec-polygon", n2;
  }
  return _(e2, t2), e2.prototype.getDefaultShape = function() {
    return new Zx();
  }, e2.prototype.buildPath = function(t3, e3) {
    var n2 = e3.points, i2 = e3.stackedOnPoints, r2 = 0, o2 = n2.length / 2, a2 = e3.smoothMonotone;
    if (e3.connectNulls) {
      for (; o2 > 0 && Gx(n2[2 * o2 - 2], n2[2 * o2 - 1]); o2--) ;
      for (; r2 < o2 && Gx(n2[2 * r2], n2[2 * r2 + 1]); r2++) ;
    }
    for (; r2 < o2; ) {
      var s2 = Ux(t3, n2, r2, o2, o2, 1, e3.smooth, a2, e3.connectNulls);
      Ux(t3, i2, r2 + s2 - 1, s2, o2, -1, e3.stackedOnSmooth, a2, e3.connectNulls), r2 += s2 + 1, t3.closePath();
    }
  }, e2;
})(os);
function qx(t2, e2, n2, i2, r2) {
  var o2 = t2.getArea(), a2 = o2.x, s2 = o2.y, l2 = o2.width, u2 = o2.height, h2 = n2.get(["lineStyle", "width"]) || 0;
  a2 -= h2 / 2, s2 -= h2 / 2, l2 += h2, u2 += h2, l2 = Math.ceil(l2), a2 !== Math.floor(a2) && (a2 = Math.floor(a2), l2++);
  var c2 = new ys({ shape: { x: a2, y: s2, width: l2, height: u2 } });
  if (e2) {
    var p2 = t2.getBaseAxis(), d2 = p2.isHorizontal(), f2 = p2.inverse;
    d2 ? (f2 && (c2.shape.x += l2), c2.shape.width = 0) : (f2 || (c2.shape.y += u2), c2.shape.height = 0);
    var g2 = tt(r2) ? function(t3) {
      r2(t3, c2);
    } : null;
    Xu(c2, { shape: { width: l2, height: u2, x: a2, y: s2 } }, n2, null, i2, g2);
  }
  return c2;
}
function Kx(t2, e2, n2) {
  var i2 = t2.getArea(), r2 = Pr(i2.r0, 1), o2 = Pr(i2.r, 1), a2 = new hu({ shape: { cx: Pr(t2.cx, 1), cy: Pr(t2.cy, 1), r0: r2, r: o2, startAngle: i2.startAngle, endAngle: i2.endAngle, clockwise: i2.clockwise } });
  return e2 && (t2.getBaseAxis().dim === "angle" ? a2.shape.endAngle = i2.startAngle : a2.shape.r = r2, Xu(a2, { shape: { endAngle: i2.endAngle, r: o2 } }, n2)), a2;
}
function $x(t2, e2, n2, i2, r2) {
  return t2 ? t2.type === "polar" ? Kx(t2, e2, n2) : t2.type === "cartesian2d" ? qx(t2, e2, n2, i2, r2) : null : null;
}
function Qx(t2, e2) {
  return t2.type === e2;
}
function Jx(t2, e2) {
  if (t2.length === e2.length) {
    for (var n2 = 0; n2 < t2.length; n2++) if (t2[n2] !== e2[n2]) return;
    return !0;
  }
}
function tb(t2) {
  for (var e2 = 1 / 0, n2 = 1 / 0, i2 = -1 / 0, r2 = -1 / 0, o2 = 0; o2 < t2.length; ) {
    var a2 = t2[o2++], s2 = t2[o2++];
    isNaN(a2) || (e2 = Math.min(a2, e2), i2 = Math.max(a2, i2)), isNaN(s2) || (n2 = Math.min(s2, n2), r2 = Math.max(s2, r2));
  }
  return [[e2, n2], [i2, r2]];
}
function eb(t2, e2) {
  var n2 = tb(t2), i2 = n2[0], r2 = n2[1], o2 = tb(e2), a2 = o2[0], s2 = o2[1];
  return Math.max(Math.abs(i2[0] - a2[0]), Math.abs(i2[1] - a2[1]), Math.abs(r2[0] - s2[0]), Math.abs(r2[1] - s2[1]));
}
function nb(t2) {
  return it(t2) ? t2 : t2 ? 0.5 : 0;
}
function ib(t2, e2, n2, i2, r2) {
  var o2 = n2.getBaseAxis(), a2 = o2.dim === "x" || o2.dim === "radius" ? 0 : 1, s2 = [], l2 = 0, u2 = [], h2 = [], c2 = [], p2 = [];
  if (r2) {
    for (l2 = 0; l2 < t2.length; l2 += 2) {
      var d2 = e2 || t2;
      isNaN(d2[l2]) || isNaN(d2[l2 + 1]) || p2.push(t2[l2], t2[l2 + 1]);
    }
    t2 = p2;
  }
  for (l2 = 0; l2 < t2.length - 2; l2 += 2) switch (c2[0] = t2[l2 + 2], c2[1] = t2[l2 + 3], h2[0] = t2[l2], h2[1] = t2[l2 + 1], s2.push(h2[0], h2[1]), i2) {
    case "end":
      u2[a2] = c2[a2], u2[1 - a2] = h2[1 - a2], s2.push(u2[0], u2[1]);
      break;
    case "middle":
      var f2 = (h2[a2] + c2[a2]) / 2, g2 = [];
      u2[a2] = g2[a2] = f2, u2[1 - a2] = h2[1 - a2], g2[1 - a2] = c2[1 - a2], s2.push(u2[0], u2[1]), s2.push(g2[0], g2[1]);
      break;
    default:
      u2[a2] = h2[a2], u2[1 - a2] = c2[1 - a2], s2.push(u2[0], u2[1]);
  }
  return s2.push(t2[l2++], t2[l2++]), s2;
}
function rb(t2, e2) {
  var n2, i2, r2 = [], o2 = t2.length;
  function a2(t3, e3, n3) {
    var i3 = t3.coord;
    return { coord: n3, color: (function(t4, e4, n4) {
      if (e4 && e4.length && t4 >= 0 && t4 <= 1) {
        var i4 = t4 * (e4.length - 1), r3 = Math.floor(i4), o3 = Math.ceil(i4), a3 = Zn(e4[r3]), s3 = Zn(e4[o3]), l3 = i4 - r3, u3 = $n([zn2(Hn(a3[0], s3[0], l3)), zn2(Hn(a3[1], s3[1], l3)), zn2(Hn(a3[2], s3[2], l3)), Bn(Hn(a3[3], s3[3], l3))], "rgba");
        return n4 ? { color: u3, leftIndex: r3, rightIndex: o3, value: i4 } : u3;
      }
    })((n3 - i3) / (e3.coord - i3), [t3.color, e3.color]) };
  }
  for (var s2 = 0; s2 < o2; s2++) {
    var l2 = t2[s2], u2 = l2.coord;
    if (u2 < 0) n2 = l2;
    else {
      if (u2 > e2) {
        i2 ? r2.push(a2(i2, l2, e2)) : n2 && r2.push(a2(n2, l2, 0), a2(n2, l2, e2));
        break;
      }
      n2 && (r2.push(a2(n2, l2, 0)), n2 = null), r2.push(l2), i2 = l2;
    }
  }
  return r2;
}
function ob(t2, e2, n2) {
  var i2 = t2.get("showAllSymbol"), r2 = i2 === "auto";
  if (!i2 || r2) {
    var o2 = n2.getAxesByScale("ordinal")[0];
    if (o2 && (!r2 || !(function(t3, e3) {
      var n3 = t3.getExtent(), i3 = Math.abs(n3[1] - n3[0]) / t3.scale.count();
      isNaN(i3) && (i3 = 0);
      for (var r3 = e3.count(), o3 = Math.max(1, Math.round(r3 / 5)), a3 = 0; a3 < r3; a3 += o3) if (1.5 * Ox.getSymbolSize(e3, a3)[t3.isHorizontal() ? 1 : 0] > i3) return !1;
      return !0;
    })(o2, e2))) {
      var a2 = e2.mapDimension(o2.dim), s2 = {};
      return Y(o2.getViewLabels(), function(t3) {
        var e3 = o2.scale.getRawOrdinalNumber(t3.tickValue);
        s2[e3] = 1;
      }), function(t3) {
        return !s2.hasOwnProperty(e2.get(a2, t3));
      };
    }
  }
}
function ab(t2, e2) {
  return isNaN(t2) || isNaN(e2);
}
function sb(t2, e2) {
  return [t2[2 * e2], t2[2 * e2 + 1]];
}
function lb(t2) {
  if (t2.get(["endLabel", "show"])) return !0;
  for (var e2 = 0; e2 < Es.length; e2++) if (t2.get([Es[e2], "endLabel", "show"])) return !0;
  return !1;
}
function ub(t2, e2, n2, i2) {
  if (Qx(e2, "cartesian2d")) {
    var r2 = i2.getModel("endLabel"), o2 = r2.get("valueAnimation"), a2 = i2.getData(), s2 = { lastFrameIndex: 0 }, l2 = lb(i2) ? function(n3, i3) {
      t2._endLabelOnDuring(n3, i3, a2, s2, o2, r2, e2);
    } : null, u2 = e2.getBaseAxis().isHorizontal(), h2 = qx(e2, n2, i2, function() {
      var e3 = t2._endLabel;
      e3 && n2 && s2.originalX != null && e3.attr({ x: s2.originalX, y: s2.originalY });
    }, l2);
    if (!i2.get("clip", !0)) {
      var c2 = h2.shape, p2 = Math.max(c2.width, c2.height);
      u2 ? (c2.y -= p2, c2.height += 2 * p2) : (c2.x -= p2, c2.width += 2 * p2);
    }
    return l2 && l2(1, h2), h2;
  }
  return Kx(e2, n2, i2);
}
var hb = (function(t2) {
  function e2() {
    return t2 !== null && t2.apply(this, arguments) || this;
  }
  return _(e2, t2), e2.prototype.init = function() {
    var t3 = new xr(), e3 = new Ex();
    this.group.add(e3.group), this._symbolDraw = e3, this._lineGroup = t3, this._changePolyState = $(this._changePolyState, this);
  }, e2.prototype.render = function(t3, e3, n2) {
    var i2 = t3.coordinateSystem, r2 = this.group, o2 = t3.getData(), a2 = t3.getModel("lineStyle"), s2 = t3.getModel("areaStyle"), l2 = o2.getLayout("points") || [], u2 = i2.type === "polar", h2 = this._coordSys, c2 = this._symbolDraw, p2 = this._polyline, d2 = this._polygon, f2 = this._lineGroup, g2 = !e3.ssr && t3.get("animation"), v2 = !s2.isEmpty(), y2 = s2.get("origin"), m2 = Fx(i2, o2, y2), _2 = v2 && (function(t4, e4, n3) {
      if (!n3.valueDim) return [];
      for (var i3 = e4.count(), r3 = r_(2 * i3), o3 = 0; o3 < i3; o3++) {
        var a3 = Vx(n3, t4, e4, o3);
        r3[2 * o3] = a3[0], r3[2 * o3 + 1] = a3[1];
      }
      return r3;
    })(i2, o2, m2), x2 = t3.get("showSymbol"), b2 = t3.get("connectNulls"), w2 = x2 && !u2 && ob(t3, o2, i2), S2 = this._data;
    S2 && S2.eachItemGraphicEl(function(t4, e4) {
      t4.__temp && (r2.remove(t4), S2.setItemGraphicEl(e4, null));
    }), x2 || c2.remove(), r2.add(f2);
    var M2, T2 = !u2 && t3.get("step");
    i2 && i2.getArea && t3.get("clip", !0) && ((M2 = i2.getArea()).width != null ? (M2.x -= 0.1, M2.y -= 0.1, M2.width += 0.2, M2.height += 0.2) : M2.r0 && (M2.r0 -= 0.5, M2.r += 0.5)), this._clipShapeForSymbol = M2;
    var k2 = (function(t4, e4, n3) {
      var i3 = t4.getVisual("visualMeta");
      if (i3 && i3.length && t4.count() && e4.type === "cartesian2d") {
        for (var r3, o3, a3 = i3.length - 1; a3 >= 0; a3--) {
          var s3 = t4.getDimensionInfo(i3[a3].dimension);
          if ((r3 = s3 && s3.coordDim) === "x" || r3 === "y") {
            o3 = i3[a3];
            break;
          }
        }
        if (o3) {
          var l3 = e4.getAxis(r3), u3 = Z(o3.stops, function(t5) {
            return { coord: l3.toGlobalCoord(l3.dataToCoord(t5.value)), color: t5.color };
          }), h3 = u3.length, c3 = o3.outerColors.slice();
          h3 && u3[0].coord > u3[h3 - 1].coord && (u3.reverse(), c3.reverse());
          var p3 = rb(u3, r3 === "x" ? n3.getWidth() : n3.getHeight()), d3 = p3.length;
          if (!d3 && h3) return u3[0].coord < 0 ? c3[1] ? c3[1] : u3[h3 - 1].color : c3[0] ? c3[0] : u3[0].color;
          var f3 = p3[0].coord - 10, g3 = p3[d3 - 1].coord + 10, v3 = g3 - f3;
          if (v3 < 1e-3) return "transparent";
          Y(p3, function(t5) {
            t5.offset = (t5.coord - f3) / v3;
          }), p3.push({ offset: d3 ? p3[d3 - 1].offset : 0.5, color: c3[1] || "transparent" }), p3.unshift({ offset: d3 ? p3[0].offset : 0.5, color: c3[0] || "transparent" });
          var y3 = new Du(0, 0, 0, 0, p3, !0);
          return y3[r3] = f3, y3[r3 + "2"] = g3, y3;
        }
      }
    })(o2, i2, n2) || o2.getVisual("style")[o2.getVisual("drawType")];
    if (p2 && h2.type === i2.type && T2 === this._step) {
      v2 && !d2 ? d2 = this._newPolygon(l2, _2) : d2 && !v2 && (f2.remove(d2), d2 = this._polygon = null), u2 || this._initOrUpdateEndLabel(t3, i2, Qc(k2));
      var C2 = f2.getClipPath();
      C2 ? Xu(C2, { shape: ub(this, i2, !1, t3).shape }, t3) : f2.setClipPath(ub(this, i2, !0, t3)), x2 && c2.updateData(o2, { isIgnore: w2, clipShape: M2, disableAnimation: !0, getSymbolPoint: function(t4) {
        return [l2[2 * t4], l2[2 * t4 + 1]];
      } }), Jx(this._stackedOnPoints, _2) && Jx(this._points, l2) || (g2 ? this._doUpdateAnimation(o2, _2, i2, n2, T2, y2, b2) : (T2 && (_2 && (_2 = ib(_2, l2, i2, T2, b2)), l2 = ib(l2, null, i2, T2, b2)), p2.setShape({ points: l2 }), d2 && d2.setShape({ points: l2, stackedOnPoints: _2 })));
    } else x2 && c2.updateData(o2, { isIgnore: w2, clipShape: M2, disableAnimation: !0, getSymbolPoint: function(t4) {
      return [l2[2 * t4], l2[2 * t4 + 1]];
    } }), g2 && this._initSymbolLabelAnimation(o2, i2, M2), T2 && (_2 && (_2 = ib(_2, l2, i2, T2, b2)), l2 = ib(l2, null, i2, T2, b2)), p2 = this._newPolyline(l2), v2 ? d2 = this._newPolygon(l2, _2) : d2 && (f2.remove(d2), d2 = this._polygon = null), u2 || this._initOrUpdateEndLabel(t3, i2, Qc(k2)), f2.setClipPath(ub(this, i2, !0, t3));
    var I2 = t3.getModel("emphasis"), D2 = I2.get("focus"), A2 = I2.get("blurScope"), L2 = I2.get("disabled");
    p2.useStyle(W(a2.getLineStyle(), { fill: "none", stroke: k2, lineJoin: "bevel" })), Ml(p2, t3, "lineStyle"), p2.style.lineWidth > 0 && t3.get(["emphasis", "lineStyle", "width"]) === "bolder" && (p2.getState("emphasis").style.lineWidth = +p2.style.lineWidth + 1), Os(p2).seriesIndex = t3.seriesIndex, bl(p2, D2, A2, L2);
    var P2 = nb(t3.get("smooth")), O2 = t3.get("smoothMonotone");
    if (p2.setShape({ smooth: P2, smoothMonotone: O2, connectNulls: b2 }), d2) {
      var R2 = o2.getCalculationInfo("stackedOnSeries"), N2 = 0;
      d2.useStyle(W(s2.getAreaStyle(), { fill: k2, opacity: 0.7, lineJoin: "bevel", decal: o2.getVisual("style").decal })), R2 && (N2 = nb(R2.get("smooth"))), d2.setShape({ smooth: P2, stackedOnSmooth: N2, smoothMonotone: O2, connectNulls: b2 }), Ml(d2, t3, "areaStyle"), Os(d2).seriesIndex = t3.seriesIndex, bl(d2, D2, A2, L2);
    }
    var z2 = this._changePolyState;
    o2.eachItemGraphicEl(function(t4) {
      t4 && (t4.onHoverStateChange = z2);
    }), this._polyline.onHoverStateChange = z2, this._data = o2, this._coordSys = i2, this._stackedOnPoints = _2, this._points = l2, this._step = T2, this._valueOrigin = y2, t3.get("triggerLineEvent") && (this.packEventData(t3, p2), d2 && this.packEventData(t3, d2));
  }, e2.prototype.packEventData = function(t3, e3) {
    Os(e3).eventData = { componentType: "series", componentSubType: "line", componentIndex: t3.componentIndex, seriesIndex: t3.seriesIndex, seriesName: t3.name, seriesType: "line" };
  }, e2.prototype.highlight = function(t3, e3, n2, i2) {
    var r2 = t3.getData(), o2 = lo(r2, i2);
    if (this._changePolyState("emphasis"), !(o2 instanceof Array) && o2 != null && o2 >= 0) {
      var a2 = r2.getLayout("points"), s2 = r2.getItemGraphicEl(o2);
      if (!s2) {
        var l2 = a2[2 * o2], u2 = a2[2 * o2 + 1];
        if (isNaN(l2) || isNaN(u2) || this._clipShapeForSymbol && !this._clipShapeForSymbol.contain(l2, u2)) return;
        var h2 = t3.get("zlevel") || 0, c2 = t3.get("z") || 0;
        (s2 = new Ox(r2, o2)).x = l2, s2.y = u2, s2.setZ(h2, c2);
        var p2 = s2.getSymbolPath().getTextContent();
        p2 && (p2.zlevel = h2, p2.z = c2, p2.z2 = this._polyline.z2 + 1), s2.__temp = !0, r2.setItemGraphicEl(o2, s2), s2.stopSymbolAnimation(!0), this.group.add(s2);
      }
      s2.highlight();
    } else hg.prototype.highlight.call(this, t3, e3, n2, i2);
  }, e2.prototype.downplay = function(t3, e3, n2, i2) {
    var r2 = t3.getData(), o2 = lo(r2, i2);
    if (this._changePolyState("normal"), o2 != null && o2 >= 0) {
      var a2 = r2.getItemGraphicEl(o2);
      a2 && (a2.__temp ? (r2.setItemGraphicEl(o2, null), this.group.remove(a2)) : a2.downplay());
    } else hg.prototype.downplay.call(this, t3, e3, n2, i2);
  }, e2.prototype._changePolyState = function(t3) {
    var e3 = this._polygon;
    nl(this._polyline, t3), e3 && nl(e3, t3);
  }, e2.prototype._newPolyline = function(t3) {
    var e3 = this._polyline;
    return e3 && this._lineGroup.remove(e3), e3 = new Yx({ shape: { points: t3 }, segmentIgnoreThreshold: 2, z2: 10 }), this._lineGroup.add(e3), this._polyline = e3, e3;
  }, e2.prototype._newPolygon = function(t3, e3) {
    var n2 = this._polygon;
    return n2 && this._lineGroup.remove(n2), n2 = new jx({ shape: { points: t3, stackedOnPoints: e3 }, segmentIgnoreThreshold: 2 }), this._lineGroup.add(n2), this._polygon = n2, n2;
  }, e2.prototype._initSymbolLabelAnimation = function(t3, e3, n2) {
    var i2, r2, o2 = e3.getBaseAxis(), a2 = o2.inverse;
    e3.type === "cartesian2d" ? (i2 = o2.isHorizontal(), r2 = !1) : e3.type === "polar" && (i2 = o2.dim === "angle", r2 = !0);
    var s2 = t3.hostModel, l2 = s2.get("animationDuration");
    tt(l2) && (l2 = l2(null));
    var u2 = s2.get("animationDelay") || 0, h2 = tt(u2) ? u2(null) : u2;
    t3.eachItemGraphicEl(function(t4, o3) {
      var s3 = t4;
      if (s3) {
        var c2 = [t4.x, t4.y], p2 = void 0, d2 = void 0, f2 = void 0;
        if (n2) if (r2) {
          var g2 = n2, v2 = e3.pointToCoord(c2);
          i2 ? (p2 = g2.startAngle, d2 = g2.endAngle, f2 = -v2[1] / 180 * Math.PI) : (p2 = g2.r0, d2 = g2.r, f2 = v2[0]);
        } else {
          var y2 = n2;
          i2 ? (p2 = y2.x, d2 = y2.x + y2.width, f2 = t4.x) : (p2 = y2.y + y2.height, d2 = y2.y, f2 = t4.y);
        }
        var m2 = d2 === p2 ? 0 : (f2 - p2) / (d2 - p2);
        a2 && (m2 = 1 - m2);
        var _2 = tt(u2) ? u2(o3) : l2 * m2 + h2, x2 = s3.getSymbolPath(), b2 = x2.getTextContent();
        s3.attr({ scaleX: 0, scaleY: 0 }), s3.animateTo({ scaleX: 1, scaleY: 1 }, { duration: 200, setToFinal: !0, delay: _2 }), b2 && b2.animateFrom({ style: { opacity: 0 } }, { duration: 300, delay: _2 }), x2.disableLabelAnimation = !0;
      }
    });
  }, e2.prototype._initOrUpdateEndLabel = function(t3, e3, n2) {
    var i2 = t3.getModel("endLabel");
    if (lb(t3)) {
      var r2 = t3.getData(), o2 = this._polyline, a2 = r2.getLayout("points");
      if (!a2) return o2.removeTextContent(), void (this._endLabel = null);
      var s2 = this._endLabel;
      s2 || ((s2 = this._endLabel = new bs({ z2: 200 })).ignoreClip = !0, o2.setTextContent(this._endLabel), o2.disableLabelAnimation = !0);
      var l2 = (function(t4) {
        for (var e4 = t4.length / 2; e4 > 0 && ab(t4[2 * e4 - 2], t4[2 * e4 - 1]); e4--) ;
        return e4 - 1;
      })(a2);
      l2 >= 0 && (Oh(o2, Rh(t3, "endLabel"), { inheritColor: n2, labelFetcher: t3, labelDataIndex: l2, defaultText: function(t4, e4, n3) {
        return n3 != null ? Px(r2, n3) : Lx(r2, t4);
      }, enableTextSetter: !0 }, (function(t4, e4) {
        var n3 = e4.getBaseAxis(), i3 = n3.isHorizontal(), r3 = n3.inverse, o3 = i3 ? r3 ? "right" : "left" : "center", a3 = i3 ? "middle" : r3 ? "top" : "bottom";
        return { normal: { align: t4.get("align") || o3, verticalAlign: t4.get("verticalAlign") || a3 } };
      })(i2, e3)), o2.textConfig.position = null);
    } else this._endLabel && (this._polyline.removeTextContent(), this._endLabel = null);
  }, e2.prototype._endLabelOnDuring = function(t3, e3, n2, i2, r2, o2, a2) {
    var s2 = this._endLabel, l2 = this._polyline;
    if (s2) {
      t3 < 1 && i2.originalX == null && (i2.originalX = s2.x, i2.originalY = s2.y);
      var u2 = n2.getLayout("points"), h2 = n2.hostModel, c2 = h2.get("connectNulls"), p2 = o2.get("precision"), d2 = o2.get("distance") || 0, f2 = a2.getBaseAxis(), g2 = f2.isHorizontal(), v2 = f2.inverse, y2 = e3.shape, m2 = v2 ? g2 ? y2.x : y2.y + y2.height : g2 ? y2.x + y2.width : y2.y, _2 = (g2 ? d2 : 0) * (v2 ? -1 : 1), x2 = (g2 ? 0 : -d2) * (v2 ? -1 : 1), b2 = g2 ? "x" : "y", w2 = (function(t4, e4, n3) {
        for (var i3, r3, o3 = t4.length / 2, a3 = n3 === "x" ? 0 : 1, s3 = 0, l3 = -1, u3 = 0; u3 < o3; u3++) if (r3 = t4[2 * u3 + a3], !isNaN(r3) && !isNaN(t4[2 * u3 + 1 - a3])) if (u3 !== 0) {
          if (i3 <= e4 && r3 >= e4 || i3 >= e4 && r3 <= e4) {
            l3 = u3;
            break;
          }
          s3 = u3, i3 = r3;
        } else i3 = r3;
        return { range: [s3, l3], t: (e4 - i3) / (r3 - i3) };
      })(u2, m2, b2), S2 = w2.range, M2 = S2[1] - S2[0], T2 = void 0;
      if (M2 >= 1) {
        if (M2 > 1 && !c2) {
          var k2 = sb(u2, S2[0]);
          s2.attr({ x: k2[0] + _2, y: k2[1] + x2 }), r2 && (T2 = h2.getRawValue(S2[0]));
        } else {
          (k2 = l2.getPointOn(m2, b2)) && s2.attr({ x: k2[0] + _2, y: k2[1] + x2 });
          var C2 = h2.getRawValue(S2[0]), I2 = h2.getRawValue(S2[1]);
          r2 && (T2 = (function(t4, e4, n3, i3, r3) {
            var o3 = e4 == null || e4 === "auto";
            if (i3 == null) return i3;
            if (it(i3)) return Pr(f3 = qr(n3 || 0, i3, r3), o3 ? Math.max(Rr(n3 || 0), Rr(i3)) : e4);
            if (et(i3)) return r3 < 1 ? n3 : i3;
            for (var a3 = [], s3 = n3, l3 = i3, u3 = Math.max(s3 ? s3.length : 0, l3.length), h3 = 0; h3 < u3; ++h3) {
              var c3 = t4.getDimensionInfo(h3);
              if (c3 && c3.type === "ordinal") a3[h3] = (r3 < 1 && s3 ? s3 : l3)[h3];
              else {
                var p3 = s3 && s3[h3] ? s3[h3] : 0, d3 = l3[h3], f3 = qr(p3, d3, r3);
                a3[h3] = Pr(f3, o3 ? Math.max(Rr(p3), Rr(d3)) : e4);
              }
            }
            return a3;
          })(n2, p2, C2, I2, w2.t));
        }
        i2.lastFrameIndex = S2[0];
      } else {
        var D2 = t3 === 1 || i2.lastFrameIndex > 0 ? S2[0] : 0;
        k2 = sb(u2, D2), r2 && (T2 = h2.getRawValue(D2)), s2.attr({ x: k2[0] + _2, y: k2[1] + x2 });
      }
      if (r2) {
        var A2 = Hh(s2);
        typeof A2.setLabelText == "function" && A2.setLabelText(T2);
      }
    }
  }, e2.prototype._doUpdateAnimation = function(t3, e3, n2, i2, r2, o2, a2) {
    var s2 = this._polyline, l2 = this._polygon, u2 = t3.hostModel, h2 = (function(t4, e4, n3, i3, r3, o3, a3) {
      for (var s3 = (function(t5, e5) {
        var n4 = [];
        return e5.diff(t5).add(function(t6) {
          n4.push({ cmd: "+", idx: t6 });
        }).update(function(t6, e6) {
          n4.push({ cmd: "=", idx: e6, idx1: t6 });
        }).remove(function(t6) {
          n4.push({ cmd: "-", idx: t6 });
        }).execute(), n4;
      })(t4, e4), l3 = [], u3 = [], h3 = [], c3 = [], p3 = [], d3 = [], f3 = [], g3 = Fx(r3, e4, a3), v3 = t4.getLayout("points") || [], y3 = e4.getLayout("points") || [], m3 = 0; m3 < s3.length; m3++) {
        var _3 = s3[m3], x2 = !0, b2 = void 0, w2 = void 0;
        switch (_3.cmd) {
          case "=":
            b2 = 2 * _3.idx, w2 = 2 * _3.idx1;
            var S2 = v3[b2], M2 = v3[b2 + 1], T2 = y3[w2], k2 = y3[w2 + 1];
            (isNaN(S2) || isNaN(M2)) && (S2 = T2, M2 = k2), l3.push(S2, M2), u3.push(T2, k2), h3.push(n3[b2], n3[b2 + 1]), c3.push(i3[w2], i3[w2 + 1]), f3.push(e4.getRawIndex(_3.idx1));
            break;
          case "+":
            var C2 = _3.idx, I2 = g3.dataDimsForPoint, D2 = r3.dataToPoint([e4.get(I2[0], C2), e4.get(I2[1], C2)]);
            w2 = 2 * C2, l3.push(D2[0], D2[1]), u3.push(y3[w2], y3[w2 + 1]);
            var A2 = Vx(g3, r3, e4, C2);
            h3.push(A2[0], A2[1]), c3.push(i3[w2], i3[w2 + 1]), f3.push(e4.getRawIndex(C2));
            break;
          case "-":
            x2 = !1;
        }
        x2 && (p3.push(_3), d3.push(d3.length));
      }
      d3.sort(function(t5, e5) {
        return f3[t5] - f3[e5];
      });
      var L2 = l3.length, P2 = r_(L2), O2 = r_(L2), R2 = r_(L2), N2 = r_(L2), z2 = [];
      for (m3 = 0; m3 < d3.length; m3++) {
        var B2 = d3[m3], E2 = 2 * m3, F2 = 2 * B2;
        P2[E2] = l3[F2], P2[E2 + 1] = l3[F2 + 1], O2[E2] = u3[F2], O2[E2 + 1] = u3[F2 + 1], R2[E2] = h3[F2], R2[E2 + 1] = h3[F2 + 1], N2[E2] = c3[F2], N2[E2 + 1] = c3[F2 + 1], z2[m3] = p3[B2];
      }
      return { current: P2, next: O2, stackedOnCurrent: R2, stackedOnNext: N2, status: z2 };
    })(this._data, t3, this._stackedOnPoints, e3, this._coordSys, 0, this._valueOrigin), c2 = h2.current, p2 = h2.stackedOnCurrent, d2 = h2.next, f2 = h2.stackedOnNext;
    if (r2 && (p2 = ib(h2.stackedOnCurrent, h2.current, n2, r2, a2), c2 = ib(h2.current, null, n2, r2, a2), f2 = ib(h2.stackedOnNext, h2.next, n2, r2, a2), d2 = ib(h2.next, null, n2, r2, a2)), eb(c2, d2) > 3e3 || l2 && eb(p2, f2) > 3e3) return s2.stopAnimation(), s2.setShape({ points: d2 }), void (l2 && (l2.stopAnimation(), l2.setShape({ points: d2, stackedOnPoints: f2 })));
    s2.shape.__points = h2.current, s2.shape.points = c2;
    var g2 = { shape: { points: d2 } };
    h2.current !== c2 && (g2.shape.__points = h2.next), s2.stopAnimation(), Uu(s2, g2, u2), l2 && (l2.setShape({ points: c2, stackedOnPoints: p2 }), l2.stopAnimation(), Uu(l2, { shape: { stackedOnPoints: f2 } }, u2), s2.shape.points !== l2.shape.points && (l2.shape.points = s2.shape.points));
    for (var v2 = [], y2 = h2.status, m2 = 0; m2 < y2.length; m2++)
      if (y2[m2].cmd === "=") {
        var _2 = t3.getItemGraphicEl(y2[m2].idx1);
        _2 && v2.push({ el: _2, ptIdx: m2 });
      }
    s2.animators && s2.animators.length && s2.animators[0].during(function() {
      l2 && l2.dirtyShape();
      for (var t4 = s2.shape.__points, e4 = 0; e4 < v2.length; e4++) {
        var n3 = v2[e4].el, i3 = 2 * v2[e4].ptIdx;
        n3.x = t4[i3], n3.y = t4[i3 + 1], n3.markRedraw();
      }
    });
  }, e2.prototype.remove = function(t3) {
    var e3 = this.group, n2 = this._data;
    this._lineGroup.removeAll(), this._symbolDraw.remove(!0), n2 && n2.eachItemGraphicEl(function(t4, i2) {
      t4.__temp && (e3.remove(t4), n2.setItemGraphicEl(i2, null));
    }), this._polyline = this._polygon = this._coordSys = this._points = this._stackedOnPoints = this._endLabel = this._data = null;
  }, e2.type = "line", e2;
})(hg), cb = { average: function(t2) {
  for (var e2 = 0, n2 = 0, i2 = 0; i2 < t2.length; i2++) isNaN(t2[i2]) || (e2 += t2[i2], n2++);
  return n2 === 0 ? NaN : e2 / n2;
}, sum: function(t2) {
  for (var e2 = 0, n2 = 0; n2 < t2.length; n2++) e2 += t2[n2] || 0;
  return e2;
}, max: function(t2) {
  for (var e2 = -1 / 0, n2 = 0; n2 < t2.length; n2++) t2[n2] > e2 && (e2 = t2[n2]);
  return isFinite(e2) ? e2 : NaN;
}, min: function(t2) {
  for (var e2 = 1 / 0, n2 = 0; n2 < t2.length; n2++) t2[n2] < e2 && (e2 = t2[n2]);
  return isFinite(e2) ? e2 : NaN;
}, nearest: function(t2) {
  return t2[0];
} }, pb = function(t2) {
  return Math.round(t2.length / 2);
};
function db(t2) {
  return { seriesType: t2, reset: function(t3, e2, n2) {
    var i2 = t3.getData(), r2 = t3.get("sampling"), o2 = t3.coordinateSystem, a2 = i2.count();
    if (a2 > 10 && o2.type === "cartesian2d" && r2) {
      var s2 = o2.getBaseAxis(), l2 = o2.getOtherAxis(s2), u2 = s2.getExtent(), h2 = n2.getDevicePixelRatio(), c2 = Math.abs(u2[1] - u2[0]) * (h2 || 1), p2 = Math.round(a2 / c2);
      if (isFinite(p2) && p2 > 1) {
        r2 === "lttb" ? t3.setData(i2.lttbDownSample(i2.mapDimension(l2.dim), 1 / p2)) : r2 === "minmax" && t3.setData(i2.minmaxDownSample(i2.mapDimension(l2.dim), 1 / p2));
        var d2 = void 0;
        et(r2) ? d2 = cb[r2] : tt(r2) && (d2 = r2), d2 && t3.setData(i2.downSample(i2.mapDimension(l2.dim), 1 / p2, d2, pb));
      }
    }
  } };
}
function fb(t2) {
  t2.registerChartView(hb), t2.registerSeriesModel(Ax), t2.registerLayout({ seriesType: "line", plan: sg(), reset: function(t3) {
    var e2 = t3.getData(), n2 = t3.coordinateSystem;
    if (t3.pipelineContext, n2) {
      var i2 = Z(n2.dimensions, function(t4) {
        return e2.mapDimension(t4);
      }).slice(0, 2), r2 = i2.length, o2 = e2.getCalculationInfo("stackResultDimension");
      zm(e2, i2[0]) && (i2[0] = o2), zm(e2, i2[1]) && (i2[1] = o2);
      var a2 = e2.getStore(), s2 = e2.getDimensionIndex(i2[0]), l2 = e2.getDimensionIndex(i2[1]);
      return r2 && { progress: function(t4, e3) {
        for (var i3 = r_((t4.end - t4.start) * r2), o3 = [], u2 = [], h2 = t4.start, c2 = 0; h2 < t4.end; h2++) {
          var p2 = void 0;
          if (r2 === 1) {
            var d2 = a2.get(s2, h2);
            p2 = n2.dataToPoint(d2, null, u2);
          } else o3[0] = a2.get(s2, h2), o3[1] = a2.get(l2, h2), p2 = n2.dataToPoint(o3, null, u2);
          i3[c2++] = p2[0], i3[c2++] = p2[1];
        }
        e3.setLayout("points", i3);
      } };
    }
  } }), t2.registerVisual({ seriesType: "line", reset: function(t3) {
    var e2 = t3.getData(), n2 = t3.getModel("lineStyle").getLineStyle();
    n2 && !n2.stroke && (n2.stroke = e2.getVisual("style").fill), e2.setVisual("legendLineStyle", n2);
  } }), t2.registerProcessor(t2.PRIORITY.PROCESSOR.STATISTIC, db("line"));
}
var gb = (function(t2) {
  function e2() {
    var n2 = t2 !== null && t2.apply(this, arguments) || this;
    return n2.type = e2.type, n2;
  }
  return _(e2, t2), e2.prototype.getInitialData = function(t3, e3) {
    return Em(0, this, { useEncodeDefaulter: !0 });
  }, e2.prototype.getMarkerPosition = function(t3, e3, n2) {
    var i2 = this.coordinateSystem;
    if (i2 && i2.clampData) {
      var r2 = i2.clampData(t3), o2 = i2.dataToPoint(r2);
      if (n2) Y(i2.getAxes(), function(t4, n3) {
        if (t4.type === "category" && e3 != null) {
          var i3 = t4.getTicksCoords(), a3 = t4.getTickModel().get("alignWithLabel"), s3 = r2[n3], l3 = e3[n3] === "x1" || e3[n3] === "y1";
          if (l3 && !a3 && (s3 += 1), i3.length < 2) return;
          if (i3.length === 2) return void (o2[n3] = t4.toGlobalCoord(t4.getExtent()[l3 ? 1 : 0]));
          for (var u3 = void 0, h2 = void 0, c2 = 1, p2 = 0; p2 < i3.length; p2++) {
            var d2 = i3[p2].coord, f2 = p2 === i3.length - 1 ? i3[p2 - 1].tickValue + c2 : i3[p2].tickValue;
            if (f2 === s3) {
              h2 = d2;
              break;
            }
            if (f2 < s3) u3 = d2;
            else if (u3 != null && f2 > s3) {
              h2 = (d2 + u3) / 2;
              break;
            }
            p2 === 1 && (c2 = f2 - i3[0].tickValue);
          }
          h2 == null && (u3 ? u3 && (h2 = i3[i3.length - 1].coord) : h2 = i3[0].coord), o2[n3] = t4.toGlobalCoord(h2);
        }
      });
      else {
        var a2 = this.getData(), s2 = a2.getLayout("offset"), l2 = a2.getLayout("size"), u2 = i2.getBaseAxis().isHorizontal() ? 0 : 1;
        o2[u2] += s2 + l2 / 2;
      }
      return o2;
    }
    return [NaN, NaN];
  }, e2.type = "series.__base_bar__", e2.defaultOption = { z: 2, coordinateSystem: "cartesian2d", legendHoverLink: !0, barMinHeight: 0, barMinAngle: 0, large: !1, largeThreshold: 400, progressive: 3e3, progressiveChunkMode: "mod", defaultBarGap: "10%" }, e2;
})(Qf);
Qf.registerClass(gb);
var vb = (function(t2) {
  function e2() {
    var n2 = t2 !== null && t2.apply(this, arguments) || this;
    return n2.type = e2.type, n2;
  }
  return _(e2, t2), e2.prototype.getInitialData = function() {
    return Em(0, this, { useEncodeDefaulter: !0, createInvertedIndices: !!this.get("realtimeSort", !0) || null });
  }, e2.prototype.getProgressive = function() {
    return !!this.get("large") && this.get("progressive");
  }, e2.prototype.getProgressiveThreshold = function() {
    var t3 = this.get("progressiveThreshold"), e3 = this.get("largeThreshold");
    return e3 > t3 && (t3 = e3), t3;
  }, e2.prototype.brushSelector = function(t3, e3, n2) {
    return n2.rect(e3.getItemLayout(t3));
  }, e2.type = "series.bar", e2.dependencies = ["grid", "polar"], e2.defaultOption = rc(gb.defaultOption, { clip: !0, roundCap: !1, showBackground: !1, backgroundStyle: { color: "rgba(180, 180, 180, 0.2)", borderColor: null, borderWidth: 0, borderType: "solid", borderRadius: 0, shadowBlur: 0, shadowColor: null, shadowOffsetX: 0, shadowOffsetY: 0, opacity: 1 }, select: { itemStyle: { borderColor: wp.color.primary, borderWidth: 2 } }, realtimeSort: !1 }), e2;
})(gb), yb = /* @__PURE__ */ (function() {
  return function() {
    this.cx = 0, this.cy = 0, this.r0 = 0, this.r = 0, this.startAngle = 0, this.endAngle = 2 * Math.PI, this.clockwise = !0;
  };
})(), mb = (function(t2) {
  function e2(e3) {
    var n2 = t2.call(this, e3) || this;
    return n2.type = "sausage", n2;
  }
  return _(e2, t2), e2.prototype.getDefaultShape = function() {
    return new yb();
  }, e2.prototype.buildPath = function(t3, e3) {
    var n2 = e3.cx, i2 = e3.cy, r2 = Math.max(e3.r0 || 0, 0), o2 = Math.max(e3.r, 0), a2 = 0.5 * (o2 - r2), s2 = r2 + a2, l2 = e3.startAngle, u2 = e3.endAngle, h2 = e3.clockwise, c2 = 2 * Math.PI, p2 = h2 ? u2 - l2 < c2 : l2 - u2 < c2;
    p2 || (l2 = u2 - (h2 ? c2 : -c2));
    var d2 = Math.cos(l2), f2 = Math.sin(l2), g2 = Math.cos(u2), v2 = Math.sin(u2);
    p2 ? (t3.moveTo(d2 * r2 + n2, f2 * r2 + i2), t3.arc(d2 * s2 + n2, f2 * s2 + i2, a2, -Math.PI + l2, l2, !h2)) : t3.moveTo(d2 * o2 + n2, f2 * o2 + i2), t3.arc(n2, i2, o2, l2, u2, !h2), t3.arc(g2 * s2 + n2, v2 * s2 + i2, a2, u2 - 2 * Math.PI, u2 - Math.PI, !h2), r2 !== 0 && t3.arc(n2, i2, r2, u2, l2, h2);
  }, e2;
})(os);
function _b(t2, e2, n2) {
  return e2 * Math.sin(t2) * (n2 ? -1 : 1);
}
function xb(t2, e2, n2) {
  return e2 * Math.cos(t2) * (n2 ? 1 : -1);
}
var bb = Math.max, wb = Math.min, Sb = (function(t2) {
  function e2() {
    var n2 = t2.call(this) || this;
    return n2.type = e2.type, n2._isFirstFrame = !0, n2;
  }
  return _(e2, t2), e2.prototype.render = function(t3, e3, n2, i2) {
    this._model = t3, this._removeOnRenderedListener(n2), this._updateDrawMode(t3);
    var r2 = t3.get("coordinateSystem");
    r2 !== "cartesian2d" && r2 !== "polar" || (this._progressiveEls = null, this._isLargeDraw ? this._renderLarge(t3, e3, n2) : this._renderNormal(t3, e3, n2, i2));
  }, e2.prototype.incrementalPrepareRender = function(t3) {
    this._clear(), this._updateDrawMode(t3), this._updateLargeClip(t3);
  }, e2.prototype.incrementalRender = function(t3, e3) {
    this._progressiveEls = [], this._incrementalRenderLarge(t3, e3);
  }, e2.prototype.eachRendered = function(t3) {
    wh(this._progressiveEls || this.group, t3);
  }, e2.prototype._updateDrawMode = function(t3) {
    var e3 = t3.pipelineContext.large;
    this._isLargeDraw != null && e3 === this._isLargeDraw || (this._isLargeDraw = e3, this._clear());
  }, e2.prototype._renderNormal = function(t3, e3, n2, i2) {
    var r2, o2 = this.group, a2 = t3.getData(), s2 = this._data, l2 = t3.coordinateSystem, u2 = l2.getBaseAxis();
    l2.type === "cartesian2d" ? r2 = u2.isHorizontal() : l2.type === "polar" && (r2 = u2.dim === "angle");
    var h2 = t3.isAnimationEnabled() ? t3 : null, c2 = (function(t4, e4) {
      var n3 = t4.get("realtimeSort", !0), i3 = e4.getBaseAxis();
      if (n3 && i3.type === "category" && e4.type === "cartesian2d") return { baseAxis: i3, otherAxis: e4.getOtherAxis(i3) };
    })(t3, l2);
    c2 && this._enableRealtimeSort(c2, a2, n2);
    var p2 = t3.get("clip", !0) || c2, d2 = (function(t4, e4) {
      var n3 = t4.getArea && t4.getArea();
      if (Qx(t4, "cartesian2d")) {
        var i3 = t4.getBaseAxis();
        if (i3.type !== "category" || !i3.onBand) {
          var r3 = e4.getLayout("bandWidth");
          i3.isHorizontal() ? (n3.x -= r3, n3.width += 2 * r3) : (n3.y -= r3, n3.height += 2 * r3);
        }
      }
      return n3;
    })(l2, a2);
    o2.removeClipPath();
    var f2 = t3.get("roundCap", !0), g2 = t3.get("showBackground", !0), v2 = t3.getModel("backgroundStyle"), y2 = v2.get("borderRadius") || 0, m2 = [], _2 = this._backgroundEls, x2 = i2 && i2.isInitSort, b2 = i2 && i2.type === "changeAxisOrder";
    function w2(t4) {
      var e4 = Lb[l2.type](a2, t4);
      if (!e4) return null;
      var n3 = (function(t5, e5, n4) {
        var i3 = t5.type === "polar" ? hu : ys;
        return new i3({ shape: Eb(e5, n4, t5), silent: !0, z2: 0 });
      })(l2, r2, e4);
      return n3.useStyle(v2.getItemStyle()), l2.type === "cartesian2d" ? n3.setShape("r", y2) : n3.setShape("cornerRadius", y2), m2[t4] = n3, n3;
    }
    a2.diff(s2).add(function(e4) {
      var n3 = a2.getItemModel(e4), i3 = Lb[l2.type](a2, e4, n3);
      if (i3 && (g2 && w2(e4), a2.hasValue(e4) && Ab[l2.type](i3))) {
        var s3 = !1;
        p2 && (s3 = Mb[l2.type](d2, i3));
        var v3 = Tb[l2.type](t3, a2, e4, i3, r2, h2, u2.model, !1, f2);
        c2 && (v3.forceLabelAnimation = !0), Ob(v3, a2, e4, n3, i3, t3, r2, l2.type === "polar"), x2 ? v3.attr({ shape: i3 }) : c2 ? kb(c2, h2, v3, i3, e4, r2, !1, !1) : Xu(v3, { shape: i3 }, t3, e4), a2.setItemGraphicEl(e4, v3), o2.add(v3), v3.ignore = s3;
      }
    }).update(function(e4, n3) {
      var i3 = a2.getItemModel(e4), S3 = Lb[l2.type](a2, e4, i3);
      if (S3) {
        if (g2) {
          var M3 = void 0;
          _2.length === 0 ? M3 = w2(n3) : ((M3 = _2[n3]).useStyle(v2.getItemStyle()), l2.type === "cartesian2d" ? M3.setShape("r", y2) : M3.setShape("cornerRadius", y2), m2[e4] = M3);
          var T2 = Lb[l2.type](a2, e4);
          Uu(M3, { shape: Eb(r2, T2, l2) }, h2, e4);
        }
        var k2 = s2.getItemGraphicEl(n3);
        if (a2.hasValue(e4) && Ab[l2.type](S3)) {
          var C2 = !1;
          if (p2 && (C2 = Mb[l2.type](d2, S3)) && o2.remove(k2), k2 && (k2.type === "sector" && f2 || k2.type === "sausage" && !f2) && (k2 && qu(k2, t3, n3), k2 = null), k2 ? Ku(k2) : k2 = Tb[l2.type](t3, a2, e4, S3, r2, h2, u2.model, !0, f2), c2 && (k2.forceLabelAnimation = !0), b2) {
            var I2 = k2.getTextContent();
            if (I2) {
              var D2 = Hh(I2);
              D2.prevValue != null && (D2.prevValue = D2.value);
            }
          } else Ob(k2, a2, e4, i3, S3, t3, r2, l2.type === "polar");
          x2 ? k2.attr({ shape: S3 }) : c2 ? kb(c2, h2, k2, S3, e4, r2, !0, b2) : Uu(k2, { shape: S3 }, t3, e4, null), a2.setItemGraphicEl(e4, k2), k2.ignore = C2, o2.add(k2);
        } else o2.remove(k2);
      }
    }).remove(function(e4) {
      var n3 = s2.getItemGraphicEl(e4);
      n3 && qu(n3, t3, e4);
    }).execute();
    var S2 = this._backgroundGroup || (this._backgroundGroup = new xr());
    S2.removeAll();
    for (var M2 = 0; M2 < m2.length; ++M2) S2.add(m2[M2]);
    o2.add(S2), this._backgroundEls = m2, this._data = a2;
  }, e2.prototype._renderLarge = function(t3, e3, n2) {
    this._clear(), zb(t3, this.group), this._updateLargeClip(t3);
  }, e2.prototype._incrementalRenderLarge = function(t3, e3) {
    this._removeBackground(), zb(e3, this.group, this._progressiveEls, !0);
  }, e2.prototype._updateLargeClip = function(t3) {
    var e3 = t3.get("clip", !0) && $x(t3.coordinateSystem, !1, t3), n2 = this.group;
    e3 ? n2.setClipPath(e3) : n2.removeClipPath();
  }, e2.prototype._enableRealtimeSort = function(t3, e3, n2) {
    var i2 = this;
    if (e3.count()) {
      var r2 = t3.baseAxis;
      if (this._isFirstFrame) this._dispatchInitSort(e3, t3, n2), this._isFirstFrame = !1;
      else {
        var o2 = function(t4) {
          var n3 = e3.getItemGraphicEl(t4), i3 = n3 && n3.shape;
          return i3 && Math.abs(r2.isHorizontal() ? i3.height : i3.width) || 0;
        };
        this._onRendered = function() {
          i2._updateSortWithinSameData(e3, o2, r2, n2);
        }, n2.getZr().on("rendered", this._onRendered);
      }
    }
  }, e2.prototype._dataSort = function(t3, e3, n2) {
    var i2 = [];
    return t3.each(t3.mapDimension(e3.dim), function(t4, e4) {
      var r2 = n2(e4);
      r2 = r2 ?? NaN, i2.push({ dataIndex: e4, mappedValue: r2, ordinalNumber: t4 });
    }), i2.sort(function(t4, e4) {
      return e4.mappedValue - t4.mappedValue;
    }), { ordinalNumbers: Z(i2, function(t4) {
      return t4.ordinalNumber;
    }) };
  }, e2.prototype._isOrderChangedWithinSameData = function(t3, e3, n2) {
    for (var i2 = n2.scale, r2 = t3.mapDimension(n2.dim), o2 = Number.MAX_VALUE, a2 = 0, s2 = i2.getOrdinalMeta().categories.length; a2 < s2; ++a2) {
      var l2 = t3.rawIndexOf(r2, i2.getRawOrdinalNumber(a2)), u2 = l2 < 0 ? Number.MIN_VALUE : e3(t3.indexOfRawIndex(l2));
      if (u2 > o2) return !0;
      o2 = u2;
    }
    return !1;
  }, e2.prototype._isOrderDifferentInView = function(t3, e3) {
    for (var n2 = e3.scale, i2 = n2.getExtent(), r2 = Math.max(0, i2[0]), o2 = Math.min(i2[1], n2.getOrdinalMeta().categories.length - 1); r2 <= o2; ++r2) if (t3.ordinalNumbers[r2] !== n2.getRawOrdinalNumber(r2)) return !0;
  }, e2.prototype._updateSortWithinSameData = function(t3, e3, n2, i2) {
    if (this._isOrderChangedWithinSameData(t3, e3, n2)) {
      var r2 = this._dataSort(t3, n2, e3);
      this._isOrderDifferentInView(r2, n2) && (this._removeOnRenderedListener(i2), i2.dispatchAction({ type: "changeAxisOrder", componentType: n2.dim + "Axis", axisId: n2.index, sortInfo: r2 }));
    }
  }, e2.prototype._dispatchInitSort = function(t3, e3, n2) {
    var i2 = e3.baseAxis, r2 = this._dataSort(t3, i2, function(n3) {
      return t3.get(t3.mapDimension(e3.otherAxis.dim), n3);
    });
    n2.dispatchAction({ type: "changeAxisOrder", componentType: i2.dim + "Axis", isInitSort: !0, axisId: i2.index, sortInfo: r2 });
  }, e2.prototype.remove = function(t3, e3) {
    this._clear(this._model), this._removeOnRenderedListener(e3);
  }, e2.prototype.dispose = function(t3, e3) {
    this._removeOnRenderedListener(e3);
  }, e2.prototype._removeOnRenderedListener = function(t3) {
    this._onRendered && (t3.getZr().off("rendered", this._onRendered), this._onRendered = null);
  }, e2.prototype._clear = function(t3) {
    var e3 = this.group, n2 = this._data;
    t3 && t3.isAnimationEnabled() && n2 && !this._isLargeDraw ? (this._removeBackground(), this._backgroundEls = [], n2.eachItemGraphicEl(function(e4) {
      qu(e4, t3, Os(e4).dataIndex);
    })) : e3.removeAll(), this._data = null, this._isFirstFrame = !0;
  }, e2.prototype._removeBackground = function() {
    this.group.remove(this._backgroundGroup), this._backgroundGroup = null;
  }, e2.type = "bar", e2;
})(hg), Mb = { cartesian2d: function(t2, e2) {
  var n2 = e2.width < 0 ? -1 : 1, i2 = e2.height < 0 ? -1 : 1;
  n2 < 0 && (e2.x += e2.width, e2.width = -e2.width), i2 < 0 && (e2.y += e2.height, e2.height = -e2.height);
  var r2 = t2.x + t2.width, o2 = t2.y + t2.height, a2 = bb(e2.x, t2.x), s2 = wb(e2.x + e2.width, r2), l2 = bb(e2.y, t2.y), u2 = wb(e2.y + e2.height, o2), h2 = s2 < a2, c2 = u2 < l2;
  return e2.x = h2 && a2 > r2 ? s2 : a2, e2.y = c2 && l2 > o2 ? u2 : l2, e2.width = h2 ? 0 : s2 - a2, e2.height = c2 ? 0 : u2 - l2, n2 < 0 && (e2.x += e2.width, e2.width = -e2.width), i2 < 0 && (e2.y += e2.height, e2.height = -e2.height), h2 || c2;
}, polar: function(t2, e2) {
  var n2 = e2.r0 <= e2.r ? 1 : -1;
  if (n2 < 0) {
    var i2 = e2.r;
    e2.r = e2.r0, e2.r0 = i2;
  }
  var r2 = wb(e2.r, t2.r), o2 = bb(e2.r0, t2.r0);
  e2.r = r2, e2.r0 = o2;
  var a2 = r2 - o2 < 0;
  return n2 < 0 && (i2 = e2.r, e2.r = e2.r0, e2.r0 = i2), a2;
} }, Tb = { cartesian2d: function(t2, e2, n2, i2, r2, o2, a2, s2, l2) {
  var u2 = new ys({ shape: H({}, i2), z2: 1 });
  return u2.__dataIndex = n2, u2.name = "item", o2 && (u2.shape[r2 ? "height" : "width"] = 0), u2;
}, polar: function(t2, e2, n2, i2, r2, o2, a2, s2, l2) {
  var u2 = !r2 && l2 ? mb : hu, h2 = new u2({ shape: i2, z2: 1 });
  h2.name = "item";
  var c2, p2, d2 = Pb(r2);
  if (h2.calculateTextPosition = (c2 = d2, p2 = u2 === mb, function(t3, e3, n3) {
    var i3 = e3.position;
    if (!i3 || i3 instanceof Array) return lr(t3, e3, n3);
    var r3 = c2(i3), o3 = e3.distance != null ? e3.distance : 5, a3 = this.shape, s3 = a3.cx, l3 = a3.cy, u3 = a3.r, h3 = a3.r0, d3 = (u3 + h3) / 2, f3 = a3.startAngle, g3 = a3.endAngle, v2 = (f3 + g3) / 2, y2 = p2 ? Math.abs(u3 - h3) / 2 : 0, m2 = Math.cos, _2 = Math.sin, x2 = s3 + u3 * m2(f3), b2 = l3 + u3 * _2(f3), w2 = "left", S2 = "top";
    switch (r3) {
      case "startArc":
        x2 = s3 + (h3 - o3) * m2(v2), b2 = l3 + (h3 - o3) * _2(v2), w2 = "center", S2 = "top";
        break;
      case "insideStartArc":
        x2 = s3 + (h3 + o3) * m2(v2), b2 = l3 + (h3 + o3) * _2(v2), w2 = "center", S2 = "bottom";
        break;
      case "startAngle":
        x2 = s3 + d3 * m2(f3) + _b(f3, o3 + y2, !1), b2 = l3 + d3 * _2(f3) + xb(f3, o3 + y2, !1), w2 = "right", S2 = "middle";
        break;
      case "insideStartAngle":
        x2 = s3 + d3 * m2(f3) + _b(f3, -o3 + y2, !1), b2 = l3 + d3 * _2(f3) + xb(f3, -o3 + y2, !1), w2 = "left", S2 = "middle";
        break;
      case "middle":
        x2 = s3 + d3 * m2(v2), b2 = l3 + d3 * _2(v2), w2 = "center", S2 = "middle";
        break;
      case "endArc":
        x2 = s3 + (u3 + o3) * m2(v2), b2 = l3 + (u3 + o3) * _2(v2), w2 = "center", S2 = "bottom";
        break;
      case "insideEndArc":
        x2 = s3 + (u3 - o3) * m2(v2), b2 = l3 + (u3 - o3) * _2(v2), w2 = "center", S2 = "top";
        break;
      case "endAngle":
        x2 = s3 + d3 * m2(g3) + _b(g3, o3 + y2, !0), b2 = l3 + d3 * _2(g3) + xb(g3, o3 + y2, !0), w2 = "left", S2 = "middle";
        break;
      case "insideEndAngle":
        x2 = s3 + d3 * m2(g3) + _b(g3, -o3 + y2, !0), b2 = l3 + d3 * _2(g3) + xb(g3, -o3 + y2, !0), w2 = "right", S2 = "middle";
        break;
      default:
        return lr(t3, e3, n3);
    }
    return (t3 = t3 || {}).x = x2, t3.y = b2, t3.align = w2, t3.verticalAlign = S2, t3;
  }), o2) {
    var f2 = r2 ? "r" : "endAngle", g2 = {};
    h2.shape[f2] = r2 ? i2.r0 : i2.startAngle, g2[f2] = i2[f2], (s2 ? Uu : Xu)(h2, { shape: g2 }, o2);
  }
  return h2;
} };
function kb(t2, e2, n2, i2, r2, o2, a2, s2) {
  var l2, u2;
  o2 ? (u2 = { x: i2.x, width: i2.width }, l2 = { y: i2.y, height: i2.height }) : (u2 = { y: i2.y, height: i2.height }, l2 = { x: i2.x, width: i2.width }), s2 || (a2 ? Uu : Xu)(n2, { shape: l2 }, e2, r2, null), (a2 ? Uu : Xu)(n2, { shape: u2 }, e2 ? t2.baseAxis.model : null, r2);
}
function Cb(t2, e2) {
  for (var n2 = 0; n2 < e2.length; n2++) if (!isFinite(t2[e2[n2]])) return !0;
  return !1;
}
var Ib = ["x", "y", "width", "height"], Db = ["cx", "cy", "r", "startAngle", "endAngle"], Ab = { cartesian2d: function(t2) {
  return !Cb(t2, Ib);
}, polar: function(t2) {
  return !Cb(t2, Db);
} }, Lb = { cartesian2d: function(t2, e2, n2) {
  var i2 = t2.getItemLayout(e2);
  if (!i2) return null;
  var r2 = n2 ? (function(t3, e3) {
    var n3 = t3.get(["itemStyle", "borderColor"]);
    if (!n3 || n3 === "none") return 0;
    var i3 = t3.get(["itemStyle", "borderWidth"]) || 0, r3 = isNaN(e3.width) ? Number.MAX_VALUE : Math.abs(e3.width), o3 = isNaN(e3.height) ? Number.MAX_VALUE : Math.abs(e3.height);
    return Math.min(i3, r3, o3);
  })(n2, i2) : 0, o2 = i2.width > 0 ? 1 : -1, a2 = i2.height > 0 ? 1 : -1;
  return { x: i2.x + o2 * r2 / 2, y: i2.y + a2 * r2 / 2, width: i2.width - o2 * r2, height: i2.height - a2 * r2 };
}, polar: function(t2, e2, n2) {
  var i2 = t2.getItemLayout(e2);
  return { cx: i2.cx, cy: i2.cy, r0: i2.r0, r: i2.r, startAngle: i2.startAngle, endAngle: i2.endAngle, clockwise: i2.clockwise };
} };
function Pb(t2) {
  return /* @__PURE__ */ (function(t3) {
    var e2 = t3 ? "Arc" : "Angle";
    return function(t4) {
      switch (t4) {
        case "start":
        case "insideStart":
        case "end":
        case "insideEnd":
          return t4 + e2;
        default:
          return t4;
      }
    };
  })(t2);
}
function Ob(t2, e2, n2, i2, r2, o2, a2, s2) {
  var l2 = e2.getItemVisual(n2, "style");
  if (s2) {
    if (!o2.get("roundCap")) {
      var u2 = t2.shape;
      H(u2, (function(t3, e3) {
        var n3 = t3.get("borderRadius");
        if (n3 == null) return { cornerRadius: 0 };
        J(n3) || (n3 = [n3, n3, n3, n3]);
        var i3 = Math.abs(e3.r || 0 - e3.r0 || 0);
        return { cornerRadius: Z(n3, function(t4) {
          return sr(t4, i3);
        }) };
      })(i2.getModel("itemStyle"), u2)), t2.setShape(u2);
    }
  } else {
    var h2 = i2.get(["itemStyle", "borderRadius"]) || 0;
    t2.setShape("r", h2);
  }
  t2.useStyle(l2);
  var c2 = i2.getShallow("cursor");
  c2 && t2.attr("cursor", c2);
  var p2 = s2 ? a2 ? r2.r >= r2.r0 ? "endArc" : "startArc" : r2.endAngle >= r2.startAngle ? "endAngle" : "startAngle" : a2 ? r2.height >= 0 ? "bottom" : "top" : r2.width >= 0 ? "right" : "left", d2 = Rh(i2);
  Oh(t2, d2, { labelFetcher: o2, labelDataIndex: n2, defaultText: Lx(o2.getData(), n2), inheritColor: l2.fill, defaultOpacity: l2.opacity, defaultOutsidePosition: p2 });
  var f2 = t2.getTextContent();
  if (s2 && f2) {
    var g2 = i2.get(["label", "position"]);
    t2.textConfig.inside = g2 === "middle" || null, (function(t3, e3, n3, i3) {
      if (it(i3)) t3.setTextConfig({ rotation: i3 });
      else if (J(e3)) t3.setTextConfig({ rotation: 0 });
      else {
        var r3, o3 = t3.shape, a3 = o3.clockwise ? o3.startAngle : o3.endAngle, s3 = o3.clockwise ? o3.endAngle : o3.startAngle, l3 = (a3 + s3) / 2, u3 = n3(e3);
        switch (u3) {
          case "startArc":
          case "insideStartArc":
          case "middle":
          case "insideEndArc":
          case "endArc":
            r3 = l3;
            break;
          case "startAngle":
          case "insideStartAngle":
            r3 = a3;
            break;
          case "endAngle":
          case "insideEndAngle":
            r3 = s3;
            break;
          default:
            return void t3.setTextConfig({ rotation: 0 });
        }
        var h3 = 1.5 * Math.PI - r3;
        u3 === "middle" && h3 > Math.PI / 2 && h3 < 1.5 * Math.PI && (h3 -= Math.PI), t3.setTextConfig({ rotation: h3 });
      }
    })(t2, g2 === "outside" ? p2 : g2, Pb(a2), i2.get(["label", "rotate"]));
  }
  (function(t3, e3, n3, i3) {
    if (t3) {
      var r3 = Hh(t3);
      r3.prevValue = r3.value, r3.value = n3;
      var o3 = e3.normal;
      r3.valueAnimation = o3.get("valueAnimation"), r3.valueAnimation && (r3.precision = o3.get("precision"), r3.defaultInterpolatedText = i3, r3.statesModels = e3);
    }
  })(f2, d2, o2.getRawValue(n2), function(t3) {
    return Px(e2, t3);
  });
  var v2 = i2.getModel(["emphasis"]);
  bl(t2, v2.get("focus"), v2.get("blurScope"), v2.get("disabled")), Ml(t2, i2), (function(t3) {
    return t3.startAngle != null && t3.endAngle != null && t3.startAngle === t3.endAngle;
  })(r2) && (t2.style.fill = "none", t2.style.stroke = "none", Y(t2.states, function(t3) {
    t3.style && (t3.style.fill = t3.style.stroke = "none");
  }));
}
var Rb = /* @__PURE__ */ (function() {
  return function() {
  };
})(), Nb = (function(t2) {
  function e2(e3) {
    var n2 = t2.call(this, e3) || this;
    return n2.type = "largeBar", n2;
  }
  return _(e2, t2), e2.prototype.getDefaultShape = function() {
    return new Rb();
  }, e2.prototype.buildPath = function(t3, e3) {
    for (var n2 = e3.points, i2 = this.baseDimIdx, r2 = 1 - this.baseDimIdx, o2 = [], a2 = [], s2 = this.barWidth, l2 = 0; l2 < n2.length; l2 += 3) a2[i2] = s2, a2[r2] = n2[l2 + 2], o2[i2] = n2[l2 + i2], o2[r2] = n2[l2 + r2], t3.rect(o2[0], o2[1], a2[0], a2[1]);
  }, e2;
})(os);
function zb(t2, e2, n2, i2) {
  var r2 = t2.getData(), o2 = r2.getLayout("valueAxisHorizontal") ? 1 : 0, a2 = r2.getLayout("largeDataIndices"), s2 = r2.getLayout("size"), l2 = t2.getModel("backgroundStyle"), u2 = r2.getLayout("largeBackgroundPoints");
  if (u2) {
    var h2 = new Nb({ shape: { points: u2 }, incremental: !!i2, silent: !0, z2: 0 });
    h2.baseDimIdx = o2, h2.largeDataIndices = a2, h2.barWidth = s2, h2.useStyle(l2.getItemStyle()), e2.add(h2), n2 && n2.push(h2);
  }
  var c2 = new Nb({ shape: { points: r2.getLayout("largePoints") }, incremental: !!i2, ignoreCoarsePointer: !0, z2: 1 });
  c2.baseDimIdx = o2, c2.largeDataIndices = a2, c2.barWidth = s2, e2.add(c2), c2.useStyle(r2.getVisual("style")), c2.style.stroke = null, Os(c2).seriesIndex = t2.seriesIndex, t2.get("silent") || (c2.on("mousedown", Bb), c2.on("mousemove", Bb)), n2 && n2.push(c2);
}
var Bb = _g(function(t2) {
  var e2 = (function(t3, e3, n2) {
    for (var i2 = t3.baseDimIdx, r2 = 1 - i2, o2 = t3.shape.points, a2 = t3.largeDataIndices, s2 = [], l2 = [], u2 = t3.barWidth, h2 = 0, c2 = o2.length / 3; h2 < c2; h2++) {
      var p2 = 3 * h2;
      if (l2[i2] = u2, l2[r2] = o2[p2 + 2], s2[i2] = o2[p2 + i2], s2[r2] = o2[p2 + r2], l2[r2] < 0 && (s2[r2] += l2[r2], l2[r2] = -l2[r2]), e3 >= s2[0] && e3 <= s2[0] + l2[0] && n2 >= s2[1] && n2 <= s2[1] + l2[1]) return a2[h2];
    }
    return -1;
  })(this, t2.offsetX, t2.offsetY);
  Os(this).dataIndex = e2 >= 0 ? e2 : null;
}, 30, !1);
function Eb(t2, e2, n2) {
  if (Qx(n2, "cartesian2d")) {
    var i2 = e2, r2 = n2.getArea();
    return { x: t2 ? i2.x : r2.x, y: t2 ? r2.y : i2.y, width: t2 ? i2.width : r2.width, height: t2 ? r2.height : i2.height };
  }
  var o2 = e2;
  return { cx: (r2 = n2.getArea()).cx, cy: r2.cy, r0: t2 ? r2.r0 : o2.r0, r: t2 ? r2.r : o2.r, startAngle: t2 ? o2.startAngle : 0, endAngle: t2 ? o2.endAngle : 2 * Math.PI };
}
function Fb(t2) {
  t2.registerChartView(Sb), t2.registerSeriesModel(vb), t2.registerLayout(t2.PRIORITY.VISUAL.LAYOUT, Q(u_, "bar")), t2.registerLayout(t2.PRIORITY.VISUAL.PROGRESSIVE_LAYOUT, { seriesType: "bar", plan: sg(), reset: function(t3) {
    if (h_(t3)) {
      var e2 = t3.getData(), n2 = t3.coordinateSystem, i2 = n2.getBaseAxis(), r2 = n2.getOtherAxis(i2), o2 = e2.getDimensionIndex(e2.mapDimension(r2.dim)), a2 = e2.getDimensionIndex(e2.mapDimension(i2.dim)), s2 = t3.get("showBackground", !0), l2 = e2.mapDimension(r2.dim), u2 = e2.getCalculationInfo("stackResultDimension"), h2 = zm(e2, l2) && !!e2.getCalculationInfo("stackedOnSeries"), c2 = r2.isHorizontal(), p2 = (function(t4, e3) {
        var n3 = e3.model.get("startValue");
        return n3 || (n3 = 0), e3.toGlobalCoord(e3.dataToCoord(e3.type === "log" ? n3 > 0 ? n3 : 1 : n3));
      })(0, r2), d2 = c_(t3), f2 = t3.get("barMinHeight") || 0, g2 = u2 && e2.getDimensionIndex(u2), v2 = e2.getLayout("size"), y2 = e2.getLayout("offset");
      return { progress: function(t4, e3) {
        for (var i3, r3 = t4.count, l3 = d2 && r_(3 * r3), u3 = d2 && s2 && r_(3 * r3), m2 = d2 && r_(r3), _2 = n2.master.getRect(), x2 = c2 ? _2.width : _2.height, b2 = e3.getStore(), w2 = 0; (i3 = t4.next()) != null; ) {
          var S2 = b2.get(h2 ? g2 : o2, i3), M2 = b2.get(a2, i3), T2 = p2, k2 = void 0;
          h2 && (k2 = +S2 - b2.get(o2, i3));
          var C2 = void 0, I2 = void 0, D2 = void 0, A2 = void 0;
          if (c2) {
            var L2 = n2.dataToPoint([S2, M2]);
            h2 && (T2 = n2.dataToPoint([k2, M2])[0]), C2 = T2, I2 = L2[1] + y2, D2 = L2[0] - T2, A2 = v2, Math.abs(D2) < f2 && (D2 = (D2 < 0 ? -1 : 1) * f2);
          } else L2 = n2.dataToPoint([M2, S2]), h2 && (T2 = n2.dataToPoint([M2, k2])[1]), C2 = L2[0] + y2, I2 = T2, D2 = v2, A2 = L2[1] - T2, Math.abs(A2) < f2 && (A2 = (A2 <= 0 ? -1 : 1) * f2);
          d2 ? (l3[w2] = C2, l3[w2 + 1] = I2, l3[w2 + 2] = c2 ? D2 : A2, u3 && (u3[w2] = c2 ? _2.x : C2, u3[w2 + 1] = c2 ? I2 : _2.y, u3[w2 + 2] = x2), m2[i3] = i3) : e3.setItemLayout(i3, { x: C2, y: I2, width: D2, height: A2 }), w2 += 3;
        }
        d2 && e3.setLayout({ largePoints: l3, largeDataIndices: m2, largeBackgroundPoints: u3, valueAxisHorizontal: c2 });
      } };
    }
  } }), t2.registerProcessor(t2.PRIORITY.PROCESSOR.STATISTIC, db("bar")), t2.registerAction({ type: "changeAxisOrder", event: "changeAxisOrder", update: "update" }, function(t3, e2) {
    var n2 = t3.componentType || "series";
    e2.eachComponent({ mainType: n2, query: t3 }, function(e3) {
      t3.sortInfo && e3.axis.setCategorySortInfo(t3.sortInfo);
    });
  });
}
var Vb = { left: 0, right: 0, top: 0, bottom: 0 }, Hb = ["25%", "25%"], Wb = (function(t2) {
  function e2() {
    return t2 !== null && t2.apply(this, arguments) || this;
  }
  return _(e2, t2), e2.prototype.mergeDefaultAndTheme = function(e3, n2) {
    var i2 = _p(e3.outerBounds);
    t2.prototype.mergeDefaultAndTheme.apply(this, arguments), i2 && e3.outerBounds && mp(e3.outerBounds, i2);
  }, e2.prototype.mergeOption = function(e3, n2) {
    t2.prototype.mergeOption.apply(this, arguments), this.option.outerBounds && e3.outerBounds && mp(this.option.outerBounds, e3.outerBounds);
  }, e2.type = "grid", e2.dependencies = ["xAxis", "yAxis"], e2.layoutMode = "box", e2.defaultOption = { show: !1, z: 0, left: "15%", top: 65, right: "10%", bottom: 80, containLabel: !1, outerBoundsMode: "auto", outerBounds: Vb, outerBoundsContain: "all", outerBoundsClampWidth: Hb[0], outerBoundsClampHeight: Hb[1], backgroundColor: wp.color.transparent, borderWidth: 1, borderColor: wp.color.neutral30 }, e2;
})(bp), Gb = (function(t2) {
  function e2() {
    return t2 !== null && t2.apply(this, arguments) || this;
  }
  return _(e2, t2), e2.prototype.getCoordSysModel = function() {
    return this.getReferringComponents("grid", fo).models[0];
  }, e2.type = "cartesian2dAxis", e2;
})(bp);
U(Gb, G_);
var Ub = { show: !0, z: 0, inverse: !1, name: "", nameLocation: "end", nameRotate: null, nameTruncate: { maxWidth: null, ellipsis: "...", placeholder: "." }, nameTextStyle: {}, nameGap: 15, silent: !1, triggerEvent: !1, tooltip: { show: !1 }, axisPointer: {}, axisLine: { show: !0, onZero: !0, onZeroAxisIndex: null, lineStyle: { color: wp.color.axisLine, width: 1, type: "solid" }, symbol: ["none", "none"], symbolSize: [10, 15], breakLine: !0 }, axisTick: { show: !0, inside: !1, length: 5, lineStyle: { width: 1 } }, axisLabel: { show: !0, inside: !1, rotate: 0, showMinLabel: null, showMaxLabel: null, margin: 8, fontSize: 12, color: wp.color.axisLabel, textMargin: [0, 3] }, splitLine: { show: !0, showMinLine: !0, showMaxLine: !0, lineStyle: { color: wp.color.axisSplitLine, width: 1, type: "solid" } }, splitArea: { show: !1, areaStyle: { color: [wp.color.backgroundTint, wp.color.backgroundTransparent] } }, breakArea: { show: !0, itemStyle: { color: wp.color.neutral00, borderColor: wp.color.border, borderWidth: 1, borderType: [3, 3], opacity: 0.6 }, zigzagAmplitude: 4, zigzagMinSpan: 4, zigzagMaxSpan: 20, zigzagZ: 100, expandOnClick: !0 }, breakLabelLayout: { moveOverlap: "auto" } }, Xb = V({ boundaryGap: !0, deduplication: null, jitter: 0, jitterOverlap: !0, jitterMargin: 2, splitLine: { show: !1 }, axisTick: { alignWithLabel: !1, interval: "auto", show: "auto" }, axisLabel: { interval: "auto" } }, Ub), Yb = V({ boundaryGap: [0, 0], axisLine: { show: "auto" }, axisTick: { show: "auto" }, splitNumber: 5, minorTick: { show: !1, splitNumber: 5, length: 3, lineStyle: {} }, minorSplitLine: { show: !1, lineStyle: { color: wp.color.axisMinorSplitLine, width: 1 } } }, Ub), Zb = { category: Xb, value: Yb, time: V({ splitNumber: 6, axisLabel: { showMinLabel: !1, showMaxLabel: !1, rich: { primary: { fontWeight: "bold" } } }, splitLine: { show: !1 } }, Yb), log: W({ logBase: 10 }, Yb) }, jb = { value: 1, category: 1, time: 1, log: 1 };
function qb(t2, e2, n2, i2) {
  Y(jb, function(r2, o2) {
    var a2 = V(V({}, Zb[o2], !0), i2, !0), s2 = (function(t3) {
      function n3() {
        var n4 = t3 !== null && t3.apply(this, arguments) || this;
        return n4.type = e2 + "Axis." + o2, n4;
      }
      return _(n3, t3), n3.prototype.mergeDefaultAndTheme = function(t4, e3) {
        var n4 = yp(this), i3 = n4 ? _p(t4) : {};
        V(t4, e3.getTheme().get(o2 + "Axis")), V(t4, this.getDefaultOption()), t4.type = Kb(t4), n4 && mp(t4, i3, n4);
      }, n3.prototype.optionUpdated = function() {
        this.option.type === "category" && (this.__ordinalMeta = $m.createByAxisModel(this));
      }, n3.prototype.getCategories = function(t4) {
        var e3 = this.option;
        if (e3.type === "category") return t4 ? e3.data : this.__ordinalMeta.categories;
      }, n3.prototype.getOrdinalMeta = function() {
        return this.__ordinalMeta;
      }, n3.prototype.updateAxisBreaks = function(t4) {
        return { breaks: [] };
      }, n3.type = e2 + "Axis." + o2, n3.defaultOption = a2, n3;
    })(n2);
    t2.registerComponentModel(s2);
  }), t2.registerSubTypeDefaulter(e2 + "Axis", Kb);
}
function Kb(t2) {
  return t2.type || (t2.data ? "category" : "value");
}
var $b = (function() {
  function t2(t3) {
    this.type = "cartesian", this._dimList = [], this._axes = {}, this.name = t3 || "";
  }
  return t2.prototype.getAxis = function(t3) {
    return this._axes[t3];
  }, t2.prototype.getAxes = function() {
    return Z(this._dimList, function(t3) {
      return this._axes[t3];
    }, this);
  }, t2.prototype.getAxesByScale = function(t3) {
    return t3 = t3.toLowerCase(), q(this.getAxes(), function(e2) {
      return e2.scale.type === t3;
    });
  }, t2.prototype.addAxis = function(t3) {
    var e2 = t3.dim;
    this._axes[e2] = t3, this._dimList.push(e2);
  }, t2;
})(), Qb = ["x", "y"];
function Jb(t2) {
  return (t2.type === "interval" || t2.type === "time") && !t2.hasBreaks();
}
var tw = (function(t2) {
  function e2() {
    var e3 = t2 !== null && t2.apply(this, arguments) || this;
    return e3.type = "cartesian2d", e3.dimensions = Qb, e3;
  }
  return _(e2, t2), e2.prototype.calcAffineTransform = function() {
    this._transform = this._invTransform = null;
    var t3 = this.getAxis("x").scale, e3 = this.getAxis("y").scale;
    if (Jb(t3) && Jb(e3)) {
      var n2 = t3.getExtent(), i2 = e3.getExtent(), r2 = this.dataToPoint([n2[0], i2[0]]), o2 = this.dataToPoint([n2[1], i2[1]]), a2 = n2[1] - n2[0], s2 = i2[1] - i2[0];
      if (a2 && s2) {
        var l2 = (o2[0] - r2[0]) / a2, u2 = (o2[1] - r2[1]) / s2, h2 = r2[0] - n2[0] * l2, c2 = r2[1] - i2[0] * u2, p2 = this._transform = [l2, 0, 0, u2, h2, c2];
        this._invTransform = me([], p2);
      }
    }
  }, e2.prototype.getBaseAxis = function() {
    return this.getAxesByScale("ordinal")[0] || this.getAxesByScale("time")[0] || this.getAxis("x");
  }, e2.prototype.containPoint = function(t3) {
    var e3 = this.getAxis("x"), n2 = this.getAxis("y");
    return e3.contain(e3.toLocalCoord(t3[0])) && n2.contain(n2.toLocalCoord(t3[1]));
  }, e2.prototype.containData = function(t3) {
    return this.getAxis("x").containData(t3[0]) && this.getAxis("y").containData(t3[1]);
  }, e2.prototype.containZone = function(t3, e3) {
    var n2 = this.dataToPoint(t3), i2 = this.dataToPoint(e3), r2 = this.getArea(), o2 = new Oe(n2[0], n2[1], i2[0] - n2[0], i2[1] - n2[1]);
    return r2.intersect(o2);
  }, e2.prototype.dataToPoint = function(t3, e3, n2) {
    n2 = n2 || [];
    var i2 = t3[0], r2 = t3[1];
    if (this._transform && i2 != null && isFinite(i2) && r2 != null && isFinite(r2)) return Et(n2, t3, this._transform);
    var o2 = this.getAxis("x"), a2 = this.getAxis("y");
    return n2[0] = o2.toGlobalCoord(o2.dataToCoord(i2, e3)), n2[1] = a2.toGlobalCoord(a2.dataToCoord(r2, e3)), n2;
  }, e2.prototype.clampData = function(t3, e3) {
    var n2 = this.getAxis("x").scale, i2 = this.getAxis("y").scale, r2 = n2.getExtent(), o2 = i2.getExtent(), a2 = n2.parse(t3[0]), s2 = i2.parse(t3[1]);
    return (e3 = e3 || [])[0] = Math.min(Math.max(Math.min(r2[0], r2[1]), a2), Math.max(r2[0], r2[1])), e3[1] = Math.min(Math.max(Math.min(o2[0], o2[1]), s2), Math.max(o2[0], o2[1])), e3;
  }, e2.prototype.pointToData = function(t3, e3, n2) {
    if (n2 = n2 || [], this._invTransform) return Et(n2, t3, this._invTransform);
    var i2 = this.getAxis("x"), r2 = this.getAxis("y");
    return n2[0] = i2.coordToData(i2.toLocalCoord(t3[0]), e3), n2[1] = r2.coordToData(r2.toLocalCoord(t3[1]), e3), n2;
  }, e2.prototype.getOtherAxis = function(t3) {
    return this.getAxis(t3.dim === "x" ? "y" : "x");
  }, e2.prototype.getArea = function(t3) {
    t3 = t3 || 0;
    var e3 = this.getAxis("x").getGlobalExtent(), n2 = this.getAxis("y").getGlobalExtent(), i2 = Math.min(e3[0], e3[1]) - t3, r2 = Math.min(n2[0], n2[1]) - t3, o2 = Math.max(e3[0], e3[1]) - i2 + t3, a2 = Math.max(n2[0], n2[1]) - r2 + t3;
    return new Oe(i2, r2, o2, a2);
  }, e2;
})($b), ew = (function(t2) {
  function e2(e3, n2, i2, r2, o2) {
    var a2 = t2.call(this, e3, n2, i2) || this;
    return a2.index = 0, a2.type = r2 || "value", a2.position = o2 || "bottom", a2;
  }
  return _(e2, t2), e2.prototype.isHorizontal = function() {
    var t3 = this.position;
    return t3 === "top" || t3 === "bottom";
  }, e2.prototype.getGlobalExtent = function(t3) {
    var e3 = this.getExtent();
    return e3[0] = this.toGlobalCoord(e3[0]), e3[1] = this.toGlobalCoord(e3[1]), t3 && e3[0] > e3[1] && e3.reverse(), e3;
  }, e2.prototype.pointToData = function(t3, e3) {
    return this.coordToData(this.toLocalCoord(t3[this.dim === "x" ? 0 : 1]), e3);
  }, e2.prototype.setCategorySortInfo = function(t3) {
    if (this.type !== "category") return !1;
    this.model.option.categorySortInfo = t3, this.scale.setSortInfo(t3);
  }, e2;
})(px), nw = "expandAxisBreak", iw = Math.PI, rw = [[1, 2, 1, 2], [5, 3, 5, 3], [8, 3, 8, 3]], ow = [[0, 1, 0, 1], [0, 3, 0, 3], [0, 3, 0, 3]], aw = uo(), sw = uo(), lw = (function() {
  function t2(t3) {
    this.recordMap = {}, this.resolveAxisNameOverlap = t3;
  }
  return t2.prototype.ensureRecord = function(t3) {
    var e2 = t3.axis.dim, n2 = t3.componentIndex, i2 = this.recordMap, r2 = i2[e2] || (i2[e2] = []);
    return r2[n2] || (r2[n2] = { ready: {} });
  }, t2;
})(), uw = [1, 0, 0, 1, 0, 0], hw = new Oe(0, 0, 0, 0), cw = function(t2, e2, n2, i2, r2, o2) {
  if (V_(t2.nameLocation)) {
    var a2 = o2.stOccupiedRect;
    a2 && pw((s2 = {}, l2 = a2, u2 = o2.transGroup.transform, s2.transform = kh(s2.transform, u2), s2.localRect = Th(s2.localRect, l2), s2.rect = Th(s2.rect, l2), u2 && s2.rect.applyTransform(u2), s2.axisAligned = Sh(u2), s2.obb = void 0, (s2.label = s2.label || {}).ignore = !1, s2), i2, r2);
  } else dw(o2.labelInfoList, o2.dirVec, i2, r2);
  var s2, l2, u2;
};
function pw(t2, e2, n2) {
  var i2 = new _e();
  bx(t2, e2, i2, { direction: Math.atan2(n2.y, n2.x), bidirectional: !1, touchThreshold: 0.05 }) && (function(t3, e3) {
    if (t3) {
      t3.label.x += e3.x, t3.label.y += e3.y, t3.label.markRedraw();
      var n3 = t3.transform;
      n3 && (n3[4] += e3.x, n3[5] += e3.y);
      var i3 = t3.rect;
      i3 && (i3.x += e3.x, i3.y += e3.y);
      var r2 = t3.obb;
      r2 && r2.fromBoundingRect(t3.localRect, n3);
    }
  })(e2, i2);
}
function dw(t2, e2, n2, i2) {
  for (var r2 = _e.dot(i2, e2) >= 0, o2 = 0, a2 = t2.length; o2 < a2; o2++) {
    var s2 = t2[r2 ? o2 : a2 - 1 - o2];
    s2.label.ignore || pw(s2, n2, i2);
  }
}
var fw = (function() {
  function t2(t3, e2, n2, i2) {
    this.group = new xr(), this._axisModel = t3, this._api = e2, this._local = {}, this._shared = i2 || new lw(cw), this._resetCfgDetermined(n2);
  }
  return t2.prototype.updateCfg = function(t3) {
    var e2 = this._cfg.raw;
    e2.position = t3.position, e2.labelOffset = t3.labelOffset, this._resetCfgDetermined(e2);
  }, t2.prototype.__getRawCfg = function() {
    return this._cfg.raw;
  }, t2.prototype._resetCfgDetermined = function(t3) {
    var e2 = this._axisModel, n2 = e2.getDefaultOption ? e2.getDefaultOption() : {}, i2 = ct(t3.axisName, e2.get("name")), r2 = e2.get("nameMoveOverlap");
    r2 != null && r2 !== "auto" || (r2 = ct(t3.defaultNameMoveOverlap, !0));
    var o2 = { raw: t3, position: t3.position, rotation: t3.rotation, nameDirection: ct(t3.nameDirection, 1), tickDirection: ct(t3.tickDirection, 1), labelDirection: ct(t3.labelDirection, 1), labelOffset: ct(t3.labelOffset, 0), silent: ct(t3.silent, !0), axisName: i2, nameLocation: pt(e2.get("nameLocation"), n2.nameLocation, "end"), shouldNameMoveOverlap: Tw(i2) && r2, optionHideOverlap: e2.get(["axisLabel", "hideOverlap"]), showMinorTicks: e2.get(["minorTick", "show"]) };
    this._cfg = o2;
    var a2 = new xr({ x: o2.position[0], y: o2.position[1], rotation: o2.rotation });
    a2.updateTransform(), this._transformGroup = a2;
    var s2 = this._shared.ensureRecord(e2);
    s2.transGroup = this._transformGroup, s2.dirVec = new _e(Math.cos(-o2.rotation), Math.sin(-o2.rotation));
  }, t2.prototype.build = function(t3, e2) {
    var n2 = this;
    return t3 || (t3 = { axisLine: !0, axisTickLabelEstimate: !1, axisTickLabelDetermine: !0, axisName: !0 }), Y(gw, function(i2) {
      t3[i2] && vw[i2](n2._cfg, n2._local, n2._shared, n2._axisModel, n2.group, n2._transformGroup, n2._api, e2 || {});
    }), this;
  }, t2.innerTextLayout = function(t3, e2, n2) {
    var i2, r2, o2 = Br(e2 - t3);
    return Er(o2) ? (r2 = n2 > 0 ? "top" : "bottom", i2 = "center") : Er(o2 - iw) ? (r2 = n2 > 0 ? "bottom" : "top", i2 = "center") : (r2 = "middle", i2 = o2 > 0 && o2 < iw ? n2 > 0 ? "right" : "left" : n2 > 0 ? "left" : "right"), { rotation: o2, textAlign: i2, textVerticalAlign: r2 };
  }, t2.makeAxisEventDataBase = function(t3) {
    var e2 = { componentType: t3.mainType, componentIndex: t3.componentIndex };
    return e2[t3.mainType + "Index"] = t3.componentIndex, e2;
  }, t2.isLabelSilent = function(t3) {
    var e2 = t3.get("tooltip");
    return t3.get("silent") || !(t3.get("triggerEvent") || e2 && e2.show);
  }, t2;
})(), gw = ["axisLine", "axisTickLabelEstimate", "axisTickLabelDetermine", "axisName"], vw = { axisLine: function(t2, e2, n2, i2, r2, o2, a2) {
  var s2 = i2.get(["axisLine", "show"]);
  if (s2 === "auto" && (s2 = !0, t2.raw.axisLineAutoShow != null && (s2 = !!t2.raw.axisLineAutoShow)), s2) {
    var l2 = i2.axis.getExtent(), u2 = o2.transform, h2 = [l2[0], 0], c2 = [l2[1], 0], p2 = h2[0] > c2[0];
    u2 && (Et(h2, h2, u2), Et(c2, c2, u2));
    var d2 = H({ lineCap: "round" }, i2.getModel(["axisLine", "lineStyle"]).getLineStyle()), f2 = { strokeContainThreshold: t2.raw.strokeContainThreshold || 5, silent: !0, z2: 1, style: d2 };
    if (i2.get(["axisLine", "breakLine"]) && i2.axis.scale.hasBreaks()) null.buildAxisBreakLine(i2, r2, o2, f2);
    else {
      var g2 = new xu(H({ shape: { x1: h2[0], y1: h2[1], x2: c2[0], y2: c2[1] } }, f2));
      sh(g2.shape, g2.style.lineWidth), g2.anid = "line", r2.add(g2);
    }
    var v2 = i2.get(["axisLine", "symbol"]);
    if (v2 != null) {
      var y2 = i2.get(["axisLine", "symbolSize"]);
      et(v2) && (v2 = [v2, v2]), (et(y2) || it(y2)) && (y2 = [y2, y2]);
      var m2 = xv(i2.get(["axisLine", "symbolOffset"]) || 0, y2), _2 = y2[0], x2 = y2[1];
      Y([{ rotate: t2.rotation + Math.PI / 2, offset: m2[0], r: 0 }, { rotate: t2.rotation - Math.PI / 2, offset: m2[1], r: Math.sqrt((h2[0] - c2[0]) * (h2[0] - c2[0]) + (h2[1] - c2[1]) * (h2[1] - c2[1])) }], function(e3, n3) {
        if (v2[n3] !== "none" && v2[n3] != null) {
          var i3 = mv(v2[n3], -_2 / 2, -x2 / 2, _2, x2, d2.stroke, !0), o3 = e3.r + e3.offset, a3 = p2 ? c2 : h2;
          i3.attr({ rotation: e3.rotate, x: a3[0] + o3 * Math.cos(t2.rotation), y: a3[1] - o3 * Math.sin(t2.rotation), silent: !0, z2: 11 }), r2.add(i3);
        }
      });
    }
  }
}, axisTickLabelEstimate: function(t2, e2, n2, i2, r2, o2, a2, s2) {
  xw(e2, r2, s2) && yw(t2, e2, n2, i2, r2, o2, a2, q_);
}, axisTickLabelDetermine: function(t2, e2, n2, i2, r2, o2, a2, s2) {
  xw(e2, r2, s2) && yw(t2, e2, n2, i2, r2, o2, a2, K_);
  var l2 = (function(t3, e3, n3, i3) {
    var r3 = i3.axis, o3 = i3.getModel("axisTick"), a3 = o3.get("show");
    if (a3 === "auto" && (a3 = !0, t3.raw.axisTickAutoShow != null && (a3 = !!t3.raw.axisTickAutoShow)), !a3 || r3.scale.isBlank()) return [];
    for (var s3 = o3.getModel("lineStyle"), l3 = t3.tickDirection * o3.get("length"), u2 = _w(r3.getTicksCoords(), n3.transform, l3, W(s3.getLineStyle(), { stroke: i3.get(["axisLine", "lineStyle", "color"]) }), "ticks"), h2 = 0; h2 < u2.length; h2++) e3.add(u2[h2]);
    return u2;
  })(t2, r2, o2, i2);
  (function(t3, e3, n3) {
    t3.showMinorTicks || Y(e3, function(t4) {
      if (t4 && t4.label.ignore) for (var e4 = 0; e4 < n3.length; e4++) {
        var i3 = n3[e4], r3 = sw(i3), o3 = aw(t4.label);
        if (r3.tickValue != null && !r3.onBand && r3.tickValue === o3.tickValue) return void mw(i3);
      }
    });
  })(t2, e2.labelLayoutList, l2), (function(t3, e3, n3, i3, r3) {
    var o3 = i3.axis, a3 = i3.getModel("minorTick");
    if (!(!t3.showMinorTicks || o3.scale.isBlank())) {
      var s3 = o3.getMinorTicksCoords();
      if (s3.length)
        for (var l3 = a3.getModel("lineStyle"), u2 = r3 * a3.get("length"), h2 = W(l3.getLineStyle(), W(i3.getModel("axisTick").getLineStyle(), { stroke: i3.get(["axisLine", "lineStyle", "color"]) })), c2 = 0; c2 < s3.length; c2++) for (var p2 = _w(s3[c2], n3.transform, u2, h2, "minorticks_" + c2), d2 = 0; d2 < p2.length; d2++) e3.add(p2[d2]);
    }
  })(t2, r2, o2, i2, t2.tickDirection);
}, axisName: function(t2, e2, n2, i2, r2, o2, a2, s2) {
  var l2 = n2.ensureRecord(i2);
  e2.nameEl && (r2.remove(e2.nameEl), e2.nameEl = l2.nameLayout = l2.nameLocation = null);
  var u2 = t2.axisName;
  if (Tw(u2)) {
    var h2 = t2.nameLocation, c2 = t2.nameDirection, p2 = i2.getModel("nameTextStyle"), d2 = i2.get("nameGap") || 0, f2 = i2.axis.getExtent(), g2 = i2.axis.inverse ? -1 : 1, v2 = new _e(0, 0), y2 = new _e(0, 0);
    h2 === "start" ? (v2.x = f2[0] - g2 * d2, y2.x = -g2) : h2 === "end" ? (v2.x = f2[1] + g2 * d2, y2.x = g2) : (v2.x = (f2[0] + f2[1]) / 2, v2.y = t2.labelOffset + c2 * d2, y2.y = c2);
    var m2 = [1, 0, 0, 1, 0, 0];
    y2.transform(ye(m2, m2, t2.rotation));
    var _2, x2, b2 = i2.get("nameRotate");
    b2 != null && (b2 = b2 * iw / 180), V_(h2) ? _2 = fw.innerTextLayout(t2.rotation, b2 ?? t2.rotation, c2) : (_2 = (function(t3, e3, n3, i3) {
      var r3, o3, a3 = Br(n3 - t3), s3 = i3[0] > i3[1], l3 = e3 === "start" && !s3 || e3 !== "start" && s3;
      return Er(a3 - iw / 2) ? (o3 = l3 ? "bottom" : "top", r3 = "center") : Er(a3 - 1.5 * iw) ? (o3 = l3 ? "top" : "bottom", r3 = "center") : (o3 = "middle", r3 = a3 < 1.5 * iw && a3 > iw / 2 ? l3 ? "left" : "right" : l3 ? "right" : "left"), { rotation: a3, textAlign: r3, textVerticalAlign: o3 };
    })(t2.rotation, h2, b2 || 0, f2), (x2 = t2.raw.axisNameAvailableWidth) != null && (x2 = Math.abs(x2 / Math.sin(_2.rotation)), !isFinite(x2) && (x2 = null)));
    var w2 = p2.getFont(), S2 = i2.get("nameTruncate", !0) || {}, M2 = S2.ellipsis, T2 = ht2(t2.raw.nameTruncateMaxWidth, S2.maxWidth, x2), k2 = s2.nameMarginLevel || 0, C2 = new bs({ x: v2.x, y: v2.y, rotation: _2.rotation, silent: fw.isLabelSilent(i2), style: Nh(p2, { text: u2, font: w2, overflow: "truncate", width: T2, ellipsis: M2, fill: p2.getTextColor() || i2.get(["axisLine", "lineStyle", "color"]), align: p2.get("align") || _2.textAlign, verticalAlign: p2.get("verticalAlign") || _2.textVerticalAlign }), z2: 1 });
    if (xh({ el: C2, componentModel: i2, itemName: u2 }), C2.__fullText = u2, C2.anid = "name", i2.get("triggerEvent")) {
      var I2 = fw.makeAxisEventDataBase(i2);
      I2.targetType = "axisName", I2.name = u2, Os(C2).eventData = I2;
    }
    o2.add(C2), C2.updateTransform(), e2.nameEl = C2;
    var D2 = l2.nameLayout = yx({ label: C2, priority: C2.z2, defaultAttr: { ignore: C2.ignore }, marginDefault: V_(h2) ? rw[k2] : ow[k2] });
    if (l2.nameLocation = h2, r2.add(C2), C2.decomposeTransform(), t2.shouldNameMoveOverlap && D2) {
      var A2 = n2.ensureRecord(i2);
      n2.resolveAxisNameOverlap(t2, n2, i2, D2, y2, A2);
    }
  }
} };
function yw(t2, e2, n2, i2, r2, o2, a2, s2) {
  bw(e2) || (function(t3, e3, n3, i3, r3, o3) {
    var a3 = r3.axis, s3 = ht2(t3.raw.axisLabelShow, r3.get(["axisLabel", "show"])), l3 = new xr();
    n3.add(l3);
    var u3 = $_(i3);
    if (!s3 || a3.scale.isBlank()) return void ww(e3, [], l3, u3);
    var h2 = r3.getModel("axisLabel"), c2 = a3.getViewLabels(u3), p2 = (ht2(t3.raw.labelRotate, h2.get("rotate")) || 0) * iw / 180, d2 = fw.innerTextLayout(t3.rotation, p2, t3.labelDirection), f2 = r3.getCategories && r3.getCategories(!0), g2 = [], v2 = r3.get("triggerEvent"), y2 = 1 / 0, m2 = -1 / 0;
    Y(c2, function(t4, e4) {
      var n4, i4 = a3.scale.type === "ordinal" ? a3.scale.getRawOrdinalNumber(t4.tickValue) : t4.tickValue, s4 = t4.formattedLabel, u4 = t4.rawLabel, p3 = h2;
      if (f2 && f2[i4]) {
        var _3 = f2[i4];
        rt(_3) && _3.textStyle && (p3 = new ec(_3.textStyle, h2, r3.ecModel));
      }
      var x2 = p3.getTextColor() || r3.get(["axisLine", "lineStyle", "color"]), b2 = p3.getShallow("align", !0) || d2.textAlign, w2 = ct(p3.getShallow("alignMinLabel", !0), b2), S2 = ct(p3.getShallow("alignMaxLabel", !0), b2), M2 = p3.getShallow("verticalAlign", !0) || p3.getShallow("baseline", !0) || d2.textVerticalAlign, T2 = ct(p3.getShallow("verticalAlignMinLabel", !0), M2), k2 = ct(p3.getShallow("verticalAlignMaxLabel", !0), M2), C2 = 10 + (((n4 = t4.time) === null || n4 === void 0 ? void 0 : n4.level) || 0);
      y2 = Math.min(y2, C2), m2 = Math.max(m2, C2);
      var I2 = new bs({ x: 0, y: 0, rotation: 0, silent: fw.isLabelSilent(r3), z2: C2, style: Nh(p3, { text: s4, align: e4 === 0 ? w2 : e4 === c2.length - 1 ? S2 : b2, verticalAlign: e4 === 0 ? T2 : e4 === c2.length - 1 ? k2 : M2, fill: tt(x2) ? x2(a3.type === "category" ? u4 : a3.type === "value" ? i4 + "" : i4, e4) : x2 }) });
      I2.anid = "label_" + i4;
      var D2 = aw(I2);
      if (D2.break = t4.break, D2.tickValue = i4, D2.layoutRotation = d2.rotation, xh({ el: I2, componentModel: r3, itemName: s4, formatterParamsExtra: { isTruncated: function() {
        return I2.isTruncated;
      }, value: u4, tickIndex: e4 } }), v2) {
        var A2 = fw.makeAxisEventDataBase(r3);
        A2.targetType = "axisLabel", A2.value = u4, A2.tickIndex = e4, t4.break && (A2.break = { start: t4.break.parsedBreak.vmin, end: t4.break.parsedBreak.vmax }), a3.type === "category" && (A2.dataIndex = i4), Os(I2).eventData = A2, t4.break && (function(t5, e5, n5, i5) {
          n5.on("click", function(n6) {
            var r4 = { type: nw, breaks: [{ start: i5.parsedBreak.breakOption.start, end: i5.parsedBreak.breakOption.end }] };
            r4[t5.axis.dim + "AxisIndex"] = t5.componentIndex, e5.dispatchAction(r4);
          });
        })(r3, o3, I2, t4.break);
      }
      g2.push(I2), l3.add(I2);
    });
    var _2 = Z(g2, function(t4) {
      return { label: t4, priority: aw(t4).break ? t4.z2 + (m2 - y2 + 1) : t4.z2, defaultAttr: { ignore: t4.ignore } };
    });
    ww(e3, _2, l3, u3);
  })(t2, e2, r2, s2, i2, a2);
  var l2 = e2.labelLayoutList;
  (function(t3, e3, n3, i3) {
    var r3 = e3.get(["axisLabel", "margin"]);
    Y(n3, function(n4, o3) {
      var a3 = yx(n4);
      if (a3) {
        var s3 = a3.label, l3 = aw(s3);
        a3.suggestIgnore = s3.ignore, s3.ignore = !1, Ki(Sw, Mw), Sw.x = e3.axis.dataToCoord(l3.tickValue), Sw.y = t3.labelOffset + t3.labelDirection * r3, Sw.rotation = l3.layoutRotation, i3.add(Sw), Sw.updateTransform(), i3.remove(Sw), Sw.decomposeTransform(), Ki(s3, Sw), s3.markRedraw(), gx(a3, !0), yx(a3);
      }
    });
  })(t2, i2, l2, o2), t2.rotation;
  var u2 = t2.optionHideOverlap;
  (function(t3, e3, n3) {
    if (B_(t3.axis)) return;
    function i3(t4, i4, r4) {
      var o4 = yx(e3[i4]), a4 = yx(e3[r4]);
      if (o4 && a4) if (t4 === !1 || o4.suggestIgnore) mw(o4.label);
      else if (a4.suggestIgnore) mw(a4.label);
      else {
        var s3 = 0.1;
        if (!n3) {
          var l3 = [0, 0, 0, 0];
          o4 = _x({ marginForce: l3 }, o4), a4 = _x({ marginForce: l3 }, a4);
        }
        bx(o4, a4, null, { touchThreshold: s3 }) && mw(t4 ? a4.label : o4.label);
      }
    }
    var r3 = t3.get(["axisLabel", "showMinLabel"]), o3 = t3.get(["axisLabel", "showMaxLabel"]), a3 = e3.length;
    i3(r3, 0, 1), i3(o3, a3 - 1, a3 - 2);
  })(i2, l2, u2), u2 && (function(t3) {
    var e3 = [];
    function n3(t4) {
      if (!t4.ignore) {
        var e4 = t4.ensureState("emphasis");
        e4.ignore == null && (e4.ignore = !1);
      }
      t4.ignore = !0;
    }
    t3.sort(function(t4, e4) {
      return (e4.suggestIgnore ? 1 : 0) - (t4.suggestIgnore ? 1 : 0) || e4.priority - t4.priority;
    });
    for (var i3 = 0; i3 < t3.length; i3++) {
      var r3 = yx(t3[i3]);
      if (!r3.label.ignore) {
        for (var o3 = r3.label, a3 = r3.labelLine, s3 = !1, l3 = 0; l3 < e3.length; l3++) if (bx(r3, e3[l3], null, { touchThreshold: 0.05 })) {
          s3 = !0;
          break;
        }
        s3 ? (n3(o3), a3 && n3(a3)) : e3.push(r3);
      }
    }
  })(q(l2, function(t3) {
    return t3 && !t3.label.ignore;
  })), (function(t3, e3, n3, i3) {
    var r3, o3 = n3.axis, a3 = e3.ensureRecord(n3), s3 = [], l3 = Tw(t3.axisName) && V_(t3.nameLocation);
    Y(i3, function(t4) {
      var e4 = yx(t4);
      if (e4 && !e4.label.ignore) {
        s3.push(e4);
        var n4 = a3.transGroup;
        l3 && (n4.transform ? me(uw, n4.transform) : de(uw), e4.transform && ge(uw, uw, e4.transform), Oe.copy(hw, e4.localRect), hw.applyTransform(uw), r3 ? r3.union(hw) : Oe.copy(r3 = new Oe(0, 0, 0, 0), hw));
      }
    });
    var u3 = Math.abs(a3.dirVec.x) > 0.1 ? "x" : "y", h2 = a3.transGroup[u3];
    if (s3.sort(function(t4, e4) {
      return Math.abs(t4.label[u3] - h2) - Math.abs(e4.label[u3] - h2);
    }), l3 && r3) {
      var c2 = o3.getExtent(), p2 = Math.min(c2[0], c2[1]), d2 = Math.max(c2[0], c2[1]) - p2;
      r3.union(new Oe(p2, 0, d2, 1));
    }
    a3.stOccupiedRect = r3, a3.labelInfoList = s3;
  })(t2, n2, i2, l2);
}
function mw(t2) {
  t2 && (t2.ignore = !0);
}
function _w(t2, e2, n2, i2, r2) {
  for (var o2 = [], a2 = [], s2 = [], l2 = 0; l2 < t2.length; l2++) {
    var u2 = t2[l2].coord;
    a2[0] = u2, a2[1] = 0, s2[0] = u2, s2[1] = n2, e2 && (Et(a2, a2, e2), Et(s2, s2, e2));
    var h2 = new xu({ shape: { x1: a2[0], y1: a2[1], x2: s2[0], y2: s2[1] }, style: i2, z2: 2, autoBatch: !0, silent: !0 });
    sh(h2.shape, h2.style.lineWidth), h2.anid = r2 + "_" + t2[l2].tickValue, o2.push(h2);
    var c2 = sw(h2);
    c2.onBand = !!t2[l2].onBand, c2.tickValue = t2[l2].tickValue;
  }
  return o2;
}
function xw(t2, e2, n2) {
  if (bw(t2)) {
    var i2 = t2.axisLabelsCreationContext.out.noPxChangeTryDetermine;
    if (n2.noPxChange) {
      for (var r2 = !0, o2 = 0; o2 < i2.length; o2++) r2 = r2 && i2[o2]();
      if (r2) return !1;
    }
    i2.length && (e2.remove(t2.labelGroup), ww(t2, null, null, null));
  }
  return !0;
}
function bw(t2) {
  return !!t2.labelLayoutList;
}
function ww(t2, e2, n2, i2) {
  t2.labelLayoutList = e2, t2.labelGroup = n2, t2.axisLabelsCreationContext = i2;
}
var Sw = new ys(), Mw = new ys();
function Tw(t2) {
  return !!t2;
}
function kw(t2, e2, n2) {
  n2 = n2 || {};
  var i2 = e2.axis, r2 = {}, o2 = i2.getAxesOnZeroOf()[0], a2 = i2.position, s2 = o2 ? "onZero" : a2, l2 = i2.dim, u2 = [t2.x, t2.x + t2.width, t2.y, t2.y + t2.height], h2 = { left: 0, right: 1, top: 0, bottom: 1, onZero: 2 }, c2 = e2.get("offset") || 0, p2 = l2 === "x" ? [u2[2] - c2, u2[3] + c2] : [u2[0] - c2, u2[1] + c2];
  if (o2) {
    var d2 = o2.toGlobalCoord(o2.dataToCoord(0));
    p2[h2.onZero] = Math.max(Math.min(d2, p2[1]), p2[0]);
  }
  r2.position = [l2 === "y" ? p2[h2[s2]] : u2[0], l2 === "x" ? p2[h2[s2]] : u2[3]], r2.rotation = Math.PI / 2 * (l2 === "x" ? 0 : 1), r2.labelDirection = r2.tickDirection = r2.nameDirection = { top: -1, bottom: 1, left: -1, right: 1 }[a2], r2.labelOffset = o2 ? p2[h2[a2]] - p2[h2.onZero] : 0, e2.get(["axisTick", "inside"]) && (r2.tickDirection = -r2.tickDirection), ht2(n2.labelInside, e2.get(["axisLabel", "inside"])) && (r2.labelDirection = -r2.labelDirection);
  var f2 = e2.get(["axisLabel", "rotate"]);
  return r2.labelRotate = s2 === "top" ? -f2 : f2, r2.z2 = 1, r2;
}
function Cw(t2) {
  var e2 = { xAxisModel: null, yAxisModel: null };
  return Y(e2, function(n2, i2) {
    var r2 = i2.replace(/Model$/, ""), o2 = t2.getReferringComponents(r2, fo).models[0];
    e2[i2] = o2;
  }), e2;
}
var Iw = [[3, 1], [0, 2]], Dw = (function() {
  function t2(t3, e2, n2) {
    this.type = "grid", this._coordsMap = {}, this._coordsList = [], this._axesMap = {}, this._axesList = [], this.axisPointerEnabled = !0, this.dimensions = Qb, this._initCartesian(t3, e2, n2), this.model = t3;
  }
  return t2.prototype.getRect = function() {
    return this._rect;
  }, t2.prototype.update = function(t3, e2) {
    var n2 = this._axesMap;
    function i2(t4) {
      var e3, n3 = K(t4), i3 = n3.length;
      if (i3) {
        for (var r3 = [], o2 = i3 - 1; o2 >= 0; o2--) {
          var a2 = t4[+n3[o2]], s2 = a2.model, l2 = a2.scale;
          Fm(l2) && s2.get("alignTicks") && s2.get("interval") == null ? r3.push(a2) : (O_(l2, s2), Fm(l2) && (e3 = a2));
        }
        r3.length && (e3 || O_((e3 = r3.pop()).scale, e3.model), Y(r3, function(t5) {
          (function(t6, e4, n4) {
            var i4 = e_.prototype, r4 = i4.getTicks.call(n4), o3 = i4.getTicks.call(n4, { expandToNicedExtent: !0 }), a3 = r4.length - 1, s3 = i4.getInterval.call(n4), l3 = P_(t6, e4), u2 = l3.extent, h2 = l3.fixMin, c2 = l3.fixMax;
            t6.type === "log" && (u2 = jm(t6.base, u2, !0)), t6.setBreaksFromOption(W_(e4)), t6.setExtent(u2[0], u2[1]), t6.calcNiceExtent({ splitNumber: a3, fixMin: h2, fixMax: c2 });
            var p2 = i4.getExtent.call(t6);
            h2 && (u2[0] = p2[0]), c2 && (u2[1] = p2[1]);
            var d2 = i4.getInterval.call(t6), f2 = u2[0], g2 = u2[1];
            if (h2 && c2) d2 = (g2 - f2) / a3;
            else if (h2) for (g2 = u2[0] + d2 * a3; g2 < u2[1] && isFinite(g2) && isFinite(u2[1]); ) d2 = Hm(d2), g2 = u2[0] + d2 * a3;
            else if (c2) for (f2 = u2[1] - d2 * a3; f2 > u2[0] && isFinite(f2) && isFinite(u2[0]); ) d2 = Hm(d2), f2 = u2[1] - d2 * a3;
            else {
              t6.getTicks().length - 1 > a3 && (d2 = Hm(d2));
              var v2 = d2 * a3;
              (f2 = Pr((g2 = Math.ceil(u2[1] / d2) * d2) - v2)) < 0 && u2[0] >= 0 ? (f2 = 0, g2 = Pr(v2)) : g2 > 0 && u2[1] <= 0 && (g2 = 0, f2 = -Pr(v2));
            }
            var y2 = (r4[0].value - o3[0].value) / s3, m2 = (r4[a3].value - o3[a3].value) / s3;
            i4.setExtent.call(t6, f2 + d2 * y2, g2 + d2 * m2), i4.setInterval.call(t6, d2), (y2 || m2) && i4.setNiceExtent.call(t6, f2 + d2, g2 - d2);
          })(t5.scale, t5.model, e3.scale);
        }));
      }
    }
    this._updateScale(t3, this.model), i2(n2.x), i2(n2.y);
    var r2 = {};
    Y(n2.x, function(t4) {
      Lw(n2, "y", t4, r2);
    }), Y(n2.y, function(t4) {
      Lw(n2, "x", t4, r2);
    }), this.resize(this.model, e2);
  }, t2.prototype.resize = function(t3, e2, n2) {
    var i2 = vp(t3, e2), r2 = this._rect = fp(t3.getBoxLayoutParams(), i2.refContainer), o2 = this._axesMap, a2 = this._coordsList, s2 = t3.get("containLabel");
    if (Ow(o2, r2), !n2) {
      var l2 = (function(t4, e3, n3, i3, r3) {
        var o3 = new lw(Bw);
        return Y(n3, function(n4) {
          return Y(n4, function(n5) {
            if (H_(n5.model)) {
              var a3 = !i3;
              n5.axisBuilder = (function(t5, e4, n6, i4, r4, o4) {
                for (var a4 = kw(t5, n6), s3 = !1, l3 = !1, u3 = 0; u3 < e4.length; u3++) Fm(e4[u3].getOtherAxis(n6.axis).scale) && (s3 = l3 = !0, n6.axis.type === "category" && n6.axis.onBand && (l3 = !1));
                return a4.axisLineAutoShow = s3, a4.axisTickAutoShow = l3, a4.defaultNameMoveOverlap = o4, new fw(n6, i4, a4, r4);
              })(t4, e3, n5.model, r3, o3, a3);
            }
          });
        }), o3;
      })(r2, a2, o2, s2, e2), u2 = void 0;
      if (s2) u2 = Nw(r2.clone(), "axisLabel", null, r2, o2, l2, i2);
      else {
        var h2 = (function(t4, e3, n3) {
          var i3, r3 = t4.get("outerBoundsMode", !0);
          r3 === "same" ? i3 = e3.clone() : r3 != null && r3 !== "auto" || (i3 = fp(t4.get("outerBounds", !0) || Vb, n3.refContainer));
          var o3, a3 = t4.get("outerBoundsContain", !0);
          o3 = a3 == null || a3 === "auto" || G(["all", "axisLabel"], a3) < 0 ? "all" : a3;
          var s3 = [Lr(ct(t4.get("outerBoundsClampWidth", !0), Hb[0]), e3.width), Lr(ct(t4.get("outerBoundsClampHeight", !0), Hb[1]), e3.height)];
          return { outerBoundsRect: i3, parsedOuterBoundsContain: o3, outerBoundsClamp: s3 };
        })(t3, r2, i2), c2 = h2.outerBoundsRect, p2 = h2.parsedOuterBoundsContain, d2 = h2.outerBoundsClamp;
        c2 && (u2 = Nw(c2, p2, d2, r2, o2, l2, i2));
      }
      zw(r2, o2, K_, null, u2, i2);
    }
    Y(this._coordsList, function(t4) {
      t4.calcAffineTransform();
    });
  }, t2.prototype.getAxis = function(t3, e2) {
    var n2 = this._axesMap[t3];
    if (n2 != null) return n2[e2 || 0];
  }, t2.prototype.getAxes = function() {
    return this._axesList.slice();
  }, t2.prototype.getCartesian = function(t3, e2) {
    if (t3 != null && e2 != null) {
      var n2 = "x" + t3 + "y" + e2;
      return this._coordsMap[n2];
    }
    rt(t3) && (e2 = t3.yAxisIndex, t3 = t3.xAxisIndex);
    for (var i2 = 0, r2 = this._coordsList; i2 < r2.length; i2++) if (r2[i2].getAxis("x").index === t3 || r2[i2].getAxis("y").index === e2) return r2[i2];
  }, t2.prototype.getCartesians = function() {
    return this._coordsList.slice();
  }, t2.prototype.convertToPixel = function(t3, e2, n2) {
    var i2 = this._findConvertTarget(e2);
    return i2.cartesian ? i2.cartesian.dataToPoint(n2) : i2.axis ? i2.axis.toGlobalCoord(i2.axis.dataToCoord(n2)) : null;
  }, t2.prototype.convertFromPixel = function(t3, e2, n2) {
    var i2 = this._findConvertTarget(e2);
    return i2.cartesian ? i2.cartesian.pointToData(n2) : i2.axis ? i2.axis.coordToData(i2.axis.toLocalCoord(n2)) : null;
  }, t2.prototype._findConvertTarget = function(t3) {
    var e2, n2, i2 = t3.seriesModel, r2 = t3.xAxisModel || i2 && i2.getReferringComponents("xAxis", fo).models[0], o2 = t3.yAxisModel || i2 && i2.getReferringComponents("yAxis", fo).models[0], a2 = t3.gridModel, s2 = this._coordsList;
    return i2 ? G(s2, e2 = i2.coordinateSystem) < 0 && (e2 = null) : r2 && o2 ? e2 = this.getCartesian(r2.componentIndex, o2.componentIndex) : r2 ? n2 = this.getAxis("x", r2.componentIndex) : o2 ? n2 = this.getAxis("y", o2.componentIndex) : a2 && a2.coordinateSystem === this && (e2 = this._coordsList[0]), { cartesian: e2, axis: n2 };
  }, t2.prototype.containPoint = function(t3) {
    var e2 = this._coordsList[0];
    if (e2) return e2.containPoint(t3);
  }, t2.prototype._initCartesian = function(t3, e2, n2) {
    var i2 = this, r2 = this, o2 = { left: !1, right: !1, top: !1, bottom: !1 }, a2 = { x: {}, y: {} }, s2 = { x: 0, y: 0 };
    if (e2.eachComponent("xAxis", l2("x"), this), e2.eachComponent("yAxis", l2("y"), this), !s2.x || !s2.y) return this._axesMap = {}, void (this._axesList = []);
    function l2(e3) {
      return function(n3, i3) {
        if (Aw(n3, t3)) {
          var l3 = n3.get("position");
          e3 === "x" ? l3 !== "top" && l3 !== "bottom" && (l3 = o2.bottom ? "top" : "bottom") : l3 !== "left" && l3 !== "right" && (l3 = o2.left ? "right" : "left"), o2[l3] = !0;
          var u2 = new ew(e3, (function(t4, e4) {
            if (e4 = e4 || t4.get("type")) switch (e4) {
              case "category":
                return new Jm({ ordinalMeta: t4.getOrdinalMeta ? t4.getOrdinalMeta() : t4.getCategories(), extent: [1 / 0, -1 / 0] });
              case "time":
                return new p_({ locale: t4.ecModel.getLocaleModel(), useUTC: t4.ecModel.get("useUTC") });
              default:
                return new (qm.getClass(e4) || e_)();
            }
          })(n3), [0, 0], n3.get("type"), l3), h2 = u2.type === "category";
          u2.onBand = h2 && n3.get("boundaryGap"), u2.inverse = n3.get("inverse"), n3.axis = u2, u2.model = n3, u2.grid = r2, u2.index = i3, r2._axesList.push(u2), a2[e3][i3] = u2, s2[e3]++;
        }
      };
    }
    this._axesMap = a2, Y(a2.x, function(e3, n3) {
      Y(a2.y, function(r3, o3) {
        var a3 = "x" + n3 + "y" + o3, s3 = new tw(a3);
        s3.master = i2, s3.model = t3, i2._coordsMap[a3] = s3, i2._coordsList.push(s3), s3.addAxis(e3), s3.addAxis(r3);
      });
    });
  }, t2.prototype._updateScale = function(t3, e2) {
    function n2(t4, e3) {
      Y(E_(t4, e3.dim), function(n3) {
        e3.scale.unionExtentFromData(t4, n3);
      });
    }
    Y(this._axesList, function(t4) {
      if (t4.scale.setExtent(1 / 0, -1 / 0), t4.type === "category") {
        var e3 = t4.model.get("categorySortInfo");
        t4.scale.setSortInfo(e3);
      }
    }), t3.eachSeries(function(t4) {
      if ((function(t5) {
        return t5.coordinateSystem && t5.coordinateSystem.type === "cartesian2d";
      })(t4)) {
        var i2 = Cw(t4), r2 = i2.xAxisModel, o2 = i2.yAxisModel;
        if (!Aw(r2, e2) || !Aw(o2, e2)) return;
        var a2 = this.getCartesian(r2.componentIndex, o2.componentIndex), s2 = t4.getData(), l2 = a2.getAxis("x"), u2 = a2.getAxis("y");
        n2(s2, l2), n2(s2, u2);
      }
    }, this);
  }, t2.prototype.getTooltipAxes = function(t3) {
    var e2 = [], n2 = [];
    return Y(this.getCartesians(), function(i2) {
      var r2 = t3 != null && t3 !== "auto" ? i2.getAxis(t3) : i2.getBaseAxis(), o2 = i2.getOtherAxis(r2);
      G(e2, r2) < 0 && e2.push(r2), G(n2, o2) < 0 && n2.push(o2);
    }), { baseAxes: e2, otherAxes: n2 };
  }, t2.create = function(e2, n2) {
    var i2 = [];
    return e2.eachComponent("grid", function(r2, o2) {
      var a2 = new t2(r2, e2, n2);
      a2.name = "grid_" + o2, a2.resize(r2, n2, !0), r2.coordinateSystem = a2, i2.push(a2);
    }), e2.eachSeries(function(t3) {
      (function(t4) {
        var e3 = t4.targetModel, n3 = t4.coordSysType, i3 = t4.coordSysProvider, r2 = t4.isDefaultDataCoordSys, o2 = lp(e3), a2 = o2.kind, s2 = o2.coordSysType;
        if (r2 && a2 !== ap && (a2 = ap, s2 = n3), a2 === op || s2 !== n3) return !1;
        var l2 = i3(n3, e3);
        l2 && (a2 === ap ? e3.coordinateSystem = l2 : e3.boxCoordinateSystem = l2);
      })({ targetModel: t3, coordSysType: "cartesian2d", coordSysProvider: function() {
        var e3 = Cw(t3), n3 = e3.xAxisModel, i3 = e3.yAxisModel;
        return n3.getCoordSysModel().coordinateSystem.getCartesian(n3.componentIndex, i3.componentIndex);
      } });
    }), i2;
  }, t2.dimensions = Qb, t2;
})();
function Aw(t2, e2) {
  return t2.getCoordSysModel() === e2;
}
function Lw(t2, e2, n2, i2) {
  n2.getAxesOnZeroOf = function() {
    return r2 ? [r2] : [];
  };
  var r2, o2 = t2[e2], a2 = n2.model, s2 = a2.get(["axisLine", "onZero"]), l2 = a2.get(["axisLine", "onZeroAxisIndex"]);
  if (s2) {
    if (l2 != null) Pw(o2[l2]) && (r2 = o2[l2]);
    else for (var u2 in o2) if (o2.hasOwnProperty(u2) && Pw(o2[u2]) && !i2[h2(o2[u2])]) {
      r2 = o2[u2];
      break;
    }
    r2 && (i2[h2(r2)] = !0);
  }
  function h2(t3) {
    return t3.dim + "_" + t3.index;
  }
}
function Pw(t2) {
  return t2 && t2.type !== "category" && t2.type !== "time" && (function(t3) {
    var e2 = t3.scale.getExtent(), n2 = e2[0], i2 = e2[1];
    return !(n2 > 0 && i2 > 0 || n2 < 0 && i2 < 0);
  })(t2);
}
function Ow(t2, e2) {
  Y(t2.x, function(t3) {
    return Rw(t3, e2.x, e2.width);
  }), Y(t2.y, function(t3) {
    return Rw(t3, e2.y, e2.height);
  });
}
function Rw(t2, e2, n2) {
  var i2 = [0, n2], r2 = t2.inverse ? 1 : 0;
  t2.setExtent(i2[r2], i2[1 - r2]), (function(t3, e3) {
    var n3 = t3.getExtent(), i3 = n3[0] + n3[1];
    t3.toGlobalCoord = t3.dim === "x" ? function(t4) {
      return t4 + e3;
    } : function(t4) {
      return i3 - t4 + e3;
    }, t3.toLocalCoord = t3.dim === "x" ? function(t4) {
      return t4 - e3;
    } : function(t4) {
      return i3 - t4 + e3;
    };
  })(t2, e2);
}
function Nw(t2, e2, n2, i2, r2, o2, a2) {
  zw(i2, r2, q_, e2, !1, a2);
  var s2 = [0, 0, 0, 0];
  u2(0), u2(1), h2(i2, 0, NaN), h2(i2, 1, NaN);
  var l2 = (function(t3, e3, n3) {
    if (t3 && e3) {
      for (var i3 = 0, r3 = t3.length; i3 < r3; i3++) if (e3.call(n3, t3[i3], i3, t3)) return t3[i3];
    }
  })(s2, function(t3) {
    return t3 > 0;
  }) == null;
  return yh(i2, s2, !0, !0, n2), Ow(r2, i2), l2;
  function u2(t3) {
    Y(r2[Qu[t3]], function(e3) {
      if (H_(e3.model)) {
        var n3 = o2.ensureRecord(e3.model), i3 = n3.labelInfoList;
        if (i3) for (var r3 = 0; r3 < i3.length; r3++) {
          var a3 = i3[r3], s3 = e3.scale.normalize(aw(a3.label).tickValue);
          s3 = t3 === 1 ? 1 - s3 : s3, h2(a3.rect, t3, s3), h2(a3.rect, 1 - t3, NaN);
        }
        var l3 = n3.nameLayout;
        l3 && (s3 = V_(n3.nameLocation) ? 0.5 : NaN, h2(l3.rect, t3, s3), h2(l3.rect, 1 - t3, NaN));
      }
    });
  }
  function h2(e3, n3, i3) {
    var r3 = t2[Qu[n3]] - e3[Qu[n3]], o3 = e3[Ju[n3]] + e3[Qu[n3]] - (t2[Ju[n3]] + t2[Qu[n3]]);
    r3 = c2(r3, 1 - i3), o3 = c2(o3, i3);
    var a3 = Iw[n3][0], l3 = Iw[n3][1];
    s2[a3] = Cr(s2[a3], r3), s2[l3] = Cr(s2[l3], o3);
  }
  function c2(t3, e3) {
    return t3 > 0 && !ut(e3) && e3 > 1e-4 && (t3 /= e3), t3;
  }
}
function zw(t2, e2, n2, i2, r2, o2) {
  var a2 = n2 === K_;
  Y(e2, function(e3) {
    return Y(e3, function(e4) {
      H_(e4.model) && ((function(t3, e5, n3) {
        var i3 = kw(e5, n3);
        t3.updateCfg(i3);
      })(e4.axisBuilder, t2, e4.model), e4.axisBuilder.build(a2 ? { axisTickLabelDetermine: !0 } : { axisTickLabelEstimate: !0 }, { noPxChange: r2 }));
    });
  });
  var s2 = { x: 0, y: 0 };
  function l2(e3) {
    s2[Qu[1 - e3]] = t2[Ju[e3]] <= 0.5 * o2.refContainer[Ju[e3]] ? 0 : 1 - e3 == 1 ? 2 : 1;
  }
  l2(0), l2(1), Y(e2, function(t3, e3) {
    return Y(t3, function(t4) {
      H_(t4.model) && ((i2 === "all" || a2) && t4.axisBuilder.build({ axisName: !0 }, { nameMarginLevel: s2[e3] }), a2 && t4.axisBuilder.build({ axisLine: !0 }));
    });
  });
}
var Bw = function(t2, e2, n2, i2, r2, o2) {
  var a2 = n2.axis.dim === "x" ? "y" : "x";
  cw(t2, 0, 0, i2, r2, o2), V_(t2.nameLocation) || Y(e2.recordMap[a2], function(t3) {
    t3 && t3.labelInfoList && t3.dirVec && dw(t3.labelInfoList, t3.dirVec, i2, r2);
  });
};
function Ew(t2, e2) {
  var n2 = { axesInfo: {}, seriesInvolved: !1, coordSysAxesInfo: {}, coordSysMap: {} };
  return (function(t3, e3, n3) {
    var i2 = e3.getComponent("tooltip"), r2 = e3.getComponent("axisPointer"), o2 = r2.get("link", !0) || [], a2 = [];
    Y(n3.getCoordinateSystems(), function(n4) {
      if (n4.axisPointerEnabled) {
        var s2 = Ww(n4.model), l2 = t3.coordSysAxesInfo[s2] = {};
        t3.coordSysMap[s2] = n4;
        var u2 = n4.model.getModel("tooltip", i2);
        if (Y(n4.getAxes(), Q(d2, !1, null)), n4.getTooltipAxes && i2 && u2.get("show")) {
          var h2 = u2.get("trigger") === "axis", c2 = u2.get(["axisPointer", "type"]) === "cross", p2 = n4.getTooltipAxes(u2.get(["axisPointer", "axis"]));
          (h2 || c2) && Y(p2.baseAxes, Q(d2, !c2 || "cross", h2)), c2 && Y(p2.otherAxes, Q(d2, "cross", !1));
        }
      }
      function d2(i3, s3, h3) {
        var c3 = h3.model.getModel("axisPointer", r2), p3 = c3.get("show");
        if (p3 && (p3 !== "auto" || i3 || Hw(c3))) {
          s3 == null && (s3 = c3.get("triggerTooltip")), c3 = i3 ? (function(t4, e4, n5, i4, r3, o3) {
            var a3 = e4.getModel("axisPointer"), s4 = {};
            Y(["type", "snap", "lineStyle", "shadowStyle", "label", "animation", "animationDurationUpdate", "animationEasingUpdate", "z"], function(t5) {
              s4[t5] = F(a3.get(t5));
            }), s4.snap = t4.type !== "category" && !!o3, a3.get("type") === "cross" && (s4.type = "line");
            var l3 = s4.label || (s4.label = {});
            if (l3.show == null && (l3.show = !1), r3 === "cross") {
              var u3 = a3.get(["label", "show"]);
              if (l3.show = u3 == null || u3, !o3) {
                var h4 = s4.lineStyle = a3.get("crossStyle");
                h4 && W(l3, h4.textStyle);
              }
            }
            return t4.model.getModel("axisPointer", new ec(s4, n5, i4));
          })(h3, u2, r2, e3, i3, s3) : c3;
          var d3 = c3.get("snap"), f2 = c3.get("triggerEmphasis"), g2 = Ww(h3.model), v2 = s3 || d3 || h3.type === "category", y2 = t3.axesInfo[g2] = { key: g2, axis: h3, coordSys: n4, axisPointerModel: c3, triggerTooltip: s3, triggerEmphasis: f2, involveSeries: v2, snap: d3, useHandle: Hw(c3), seriesModels: [], linkGroup: null };
          l2[g2] = y2, t3.seriesInvolved = t3.seriesInvolved || v2;
          var m2 = (function(t4, e4) {
            for (var n5 = e4.model, i4 = e4.dim, r3 = 0; r3 < t4.length; r3++) {
              var o3 = t4[r3] || {};
              if (Fw(o3[i4 + "AxisId"], n5.id) || Fw(o3[i4 + "AxisIndex"], n5.componentIndex) || Fw(o3[i4 + "AxisName"], n5.name)) return r3;
            }
          })(o2, h3);
          if (m2 != null) {
            var _2 = a2[m2] || (a2[m2] = { axesInfo: {} });
            _2.axesInfo[g2] = y2, _2.mapper = o2[m2].mapper, y2.linkGroup = _2;
          }
        }
      }
    });
  })(n2, t2, e2), n2.seriesInvolved && (function(t3, e3) {
    e3.eachSeries(function(e4) {
      var n3 = e4.coordinateSystem, i2 = e4.get(["tooltip", "trigger"], !0), r2 = e4.get(["tooltip", "show"], !0);
      n3 && n3.model && i2 !== "none" && i2 !== !1 && i2 !== "item" && r2 !== !1 && e4.get(["axisPointer", "show"], !0) !== !1 && Y(t3.coordSysAxesInfo[Ww(n3.model)], function(t4) {
        var i3 = t4.axis;
        n3.getAxis(i3.dim) === i3 && (t4.seriesModels.push(e4), t4.seriesDataCount == null && (t4.seriesDataCount = 0), t4.seriesDataCount += e4.getData().count());
      });
    });
  })(n2, t2), n2;
}
function Fw(t2, e2) {
  return t2 === "all" || J(t2) && G(t2, e2) >= 0 || t2 === e2;
}
function Vw(t2) {
  var e2 = (t2.ecModel.getComponent("axisPointer") || {}).coordSysAxesInfo;
  return e2 && e2.axesInfo[Ww(t2)];
}
function Hw(t2) {
  return !!t2.get(["handle", "show"]);
}
function Ww(t2) {
  return t2.type + "||" + t2.id;
}
var Gw = {}, Uw = (function(t2) {
  function e2() {
    var n2 = t2 !== null && t2.apply(this, arguments) || this;
    return n2.type = e2.type, n2;
  }
  return _(e2, t2), e2.prototype.render = function(e3, n2, i2, r2) {
    this.axisPointerClass && (function(t3) {
      var e4 = Vw(t3);
      if (e4) {
        var n3 = e4.axisPointerModel, i3 = e4.axis.scale, r3 = n3.option, o2 = n3.get("status"), a2 = n3.get("value");
        a2 != null && (a2 = i3.parse(a2));
        var s2 = Hw(n3);
        o2 == null && (r3.status = s2 ? "show" : "hide");
        var l2 = i3.getExtent().slice();
        l2[0] > l2[1] && l2.reverse(), (a2 == null || a2 > l2[1]) && (a2 = l2[1]), a2 < l2[0] && (a2 = l2[0]), r3.value = a2, s2 && (r3.status = e4.axis.scale.isBlank() ? "hide" : "show");
      }
    })(e3), t2.prototype.render.apply(this, arguments), this._doUpdateAxisPointerClass(e3, i2, !0);
  }, e2.prototype.updateAxisPointer = function(t3, e3, n2, i2) {
    this._doUpdateAxisPointerClass(t3, n2, !1);
  }, e2.prototype.remove = function(t3, e3) {
    var n2 = this._axisPointer;
    n2 && n2.remove(e3);
  }, e2.prototype.dispose = function(e3, n2) {
    this._disposeAxisPointer(n2), t2.prototype.dispose.apply(this, arguments);
  }, e2.prototype._doUpdateAxisPointerClass = function(t3, n2, i2) {
    var r2 = e2.getAxisPointerClass(this.axisPointerClass);
    if (r2) {
      var o2 = (function(t4) {
        var e3 = Vw(t4);
        return e3 && e3.axisPointerModel;
      })(t3);
      o2 ? (this._axisPointer || (this._axisPointer = new r2())).render(t3, o2, n2, i2) : this._disposeAxisPointer(n2);
    }
  }, e2.prototype._disposeAxisPointer = function(t3) {
    this._axisPointer && this._axisPointer.dispose(t3), this._axisPointer = null;
  }, e2.registerAxisPointerClass = function(t3, e3) {
    Gw[t3] = e3;
  }, e2.getAxisPointerClass = function(t3) {
    return t3 && Gw[t3];
  }, e2.type = "axis", e2;
})(ag), Xw = uo(), Yw = ["splitArea", "splitLine", "minorSplitLine", "breakArea"], Zw = (function(t2) {
  function e2() {
    var n2 = t2 !== null && t2.apply(this, arguments) || this;
    return n2.type = e2.type, n2.axisPointerClass = "CartesianAxisPointer", n2;
  }
  return _(e2, t2), e2.prototype.render = function(e3, n2, i2, r2) {
    this.group.removeAll();
    var o2 = this._axisGroup;
    this._axisGroup = new xr(), this.group.add(this._axisGroup), H_(e3) && (this._axisGroup.add(e3.axis.axisBuilder.group), Y(Yw, function(t3) {
      e3.get([t3, "show"]) && jw[t3](this, this._axisGroup, e3, e3.getCoordSysModel(), i2);
    }, this), r2 && r2.type === "changeAxisOrder" && r2.isInitSort || dh(o2, this._axisGroup, e3), t2.prototype.render.call(this, e3, n2, i2, r2));
  }, e2.prototype.remove = function() {
    Xw(this).splitAreaColors = null;
  }, e2.type = "cartesianAxis", e2;
})(Uw), jw = { splitLine: function(t2, e2, n2, i2, r2) {
  var o2 = n2.axis;
  if (!o2.scale.isBlank()) {
    var a2 = n2.getModel("splitLine"), s2 = a2.getModel("lineStyle"), l2 = s2.get("color"), u2 = a2.get("showMinLine") !== !1, h2 = a2.get("showMaxLine") !== !1;
    l2 = J(l2) ? l2 : [l2];
    for (var c2 = i2.coordinateSystem.getRect(), p2 = o2.isHorizontal(), d2 = 0, f2 = o2.getTicksCoords({ tickModel: a2, breakTicks: "none", pruneByBreak: "preserve_extent_bound" }), g2 = [], v2 = [], y2 = s2.getLineStyle(), m2 = 0; m2 < f2.length; m2++) {
      var _2 = o2.toGlobalCoord(f2[m2].coord);
      if ((m2 !== 0 || u2) && (m2 !== f2.length - 1 || h2)) {
        var x2 = f2[m2].tickValue;
        p2 ? (g2[0] = _2, g2[1] = c2.y, v2[0] = _2, v2[1] = c2.y + c2.height) : (g2[0] = c2.x, g2[1] = _2, v2[0] = c2.x + c2.width, v2[1] = _2);
        var b2 = d2++ % l2.length, w2 = new xu({ anid: x2 != null ? "line_" + x2 : null, autoBatch: !0, shape: { x1: g2[0], y1: g2[1], x2: v2[0], y2: v2[1] }, style: W({ stroke: l2[b2] }, y2), silent: !0 });
        sh(w2.shape, y2.lineWidth), e2.add(w2);
      }
    }
  }
}, minorSplitLine: function(t2, e2, n2, i2, r2) {
  var o2 = n2.axis, a2 = n2.getModel("minorSplitLine").getModel("lineStyle"), s2 = i2.coordinateSystem.getRect(), l2 = o2.isHorizontal(), u2 = o2.getMinorTicksCoords();
  if (u2.length) for (var h2 = [], c2 = [], p2 = a2.getLineStyle(), d2 = 0; d2 < u2.length; d2++) for (var f2 = 0; f2 < u2[d2].length; f2++) {
    var g2 = o2.toGlobalCoord(u2[d2][f2].coord);
    l2 ? (h2[0] = g2, h2[1] = s2.y, c2[0] = g2, c2[1] = s2.y + s2.height) : (h2[0] = s2.x, h2[1] = g2, c2[0] = s2.x + s2.width, c2[1] = g2);
    var v2 = new xu({ anid: "minor_line_" + u2[d2][f2].tickValue, autoBatch: !0, shape: { x1: h2[0], y1: h2[1], x2: c2[0], y2: c2[1] }, style: p2, silent: !0 });
    sh(v2.shape, p2.lineWidth), e2.add(v2);
  }
}, splitArea: function(t2, e2, n2, i2, r2) {
  (function(t3, e3, n3, i3) {
    var r3 = n3.axis;
    if (!r3.scale.isBlank()) {
      var o2 = n3.getModel("splitArea"), a2 = o2.getModel("areaStyle"), s2 = a2.get("color"), l2 = i3.coordinateSystem.getRect(), u2 = r3.getTicksCoords({ tickModel: o2, clamp: !0, breakTicks: "none", pruneByBreak: "preserve_extent_bound" });
      if (u2.length) {
        var h2 = s2.length, c2 = Xw(t3).splitAreaColors, p2 = St(), d2 = 0;
        if (c2) for (var f2 = 0; f2 < u2.length; f2++) {
          var g2 = c2.get(u2[f2].tickValue);
          if (g2 != null) {
            d2 = (g2 + (h2 - 1) * f2) % h2;
            break;
          }
        }
        var v2 = r3.toGlobalCoord(u2[0].coord), y2 = a2.getAreaStyle();
        for (s2 = J(s2) ? s2 : [s2], f2 = 1; f2 < u2.length; f2++) {
          var m2 = r3.toGlobalCoord(u2[f2].coord), _2 = void 0, x2 = void 0, b2 = void 0, w2 = void 0;
          r3.isHorizontal() ? (_2 = v2, x2 = l2.y, b2 = m2 - _2, w2 = l2.height, v2 = _2 + b2) : (_2 = l2.x, x2 = v2, b2 = l2.width, v2 = x2 + (w2 = m2 - x2));
          var S2 = u2[f2 - 1].tickValue;
          S2 != null && p2.set(S2, d2), e3.add(new ys({ anid: S2 != null ? "area_" + S2 : null, shape: { x: _2, y: x2, width: b2, height: w2 }, style: W({ fill: s2[d2] }, y2), autoBatch: !0, silent: !0 })), d2 = (d2 + 1) % h2;
        }
        Xw(t3).splitAreaColors = p2;
      }
    }
  })(t2, e2, n2, i2);
}, breakArea: function(t2, e2, n2, i2, r2) {
  n2.axis.scale;
} }, qw = (function(t2) {
  function e2() {
    var n2 = t2 !== null && t2.apply(this, arguments) || this;
    return n2.type = e2.type, n2;
  }
  return _(e2, t2), e2.type = "xAxis", e2;
})(Zw), Kw = (function(t2) {
  function e2() {
    var e3 = t2 !== null && t2.apply(this, arguments) || this;
    return e3.type = qw.type, e3;
  }
  return _(e2, t2), e2.type = "yAxis", e2;
})(Zw), $w = (function(t2) {
  function e2() {
    var e3 = t2 !== null && t2.apply(this, arguments) || this;
    return e3.type = "grid", e3;
  }
  return _(e2, t2), e2.prototype.render = function(t3, e3) {
    this.group.removeAll(), t3.get("show") && this.group.add(new ys({ shape: t3.coordinateSystem.getRect(), style: W({ fill: t3.get("backgroundColor") }, t3.getItemStyle()), silent: !0, z2: -1 }));
  }, e2.type = "grid", e2;
})(ag), Qw = { offset: 0 };
function Jw(t2) {
  t2.registerComponentView($w), t2.registerComponentModel(Wb), t2.registerCoordinateSystem("cartesian2d", Dw), qb(t2, "x", Gb, Qw), qb(t2, "y", Gb, Qw), t2.registerComponentView(qw), t2.registerComponentView(Kw), t2.registerPreprocessor(function(t3) {
    t3.xAxis && t3.yAxis && !t3.grid && (t3.grid = {});
  });
}
var tS = uo();
function eS(t2, e2) {
  return !!tS(t2)[e2];
}
Ky({ type: "takeGlobalCursor", event: "globalCursorTaken", update: "update" }, Ct);
var nS = { axisPointer: 1, tooltip: 1, brush: 1 }, iS = (function(t2) {
  function e2(e3) {
    var n2 = t2.call(this) || this;
    n2._zr = e3;
    var i2 = $(n2._mousedownHandler, n2), r2 = $(n2._mousemoveHandler, n2), o2 = $(n2._mouseupHandler, n2), a2 = $(n2._mousewheelHandler, n2), s2 = $(n2._pinchHandler, n2);
    return n2.enable = function(t3, n3) {
      var l2 = n3.zInfo, u2 = Ch(l2.component), h2 = u2.z, c2 = u2.zlevel, p2 = { component: l2.component, z: h2, zlevel: c2, z2: ct(l2.z2, -1 / 0) }, d2 = H({}, n3.triggerInfo);
      this._opt = W(H({}, n3), { zoomOnMouseWheel: !0, moveOnMouseMove: !0, moveOnMouseWheel: !1, preventDefaultMouseMove: !0, zInfoParsed: p2, triggerInfo: d2 }), t3 == null && (t3 = !0), this._enabled && this._controlType === t3 || (this._enabled = !0, this.disable(), t3 !== !0 && t3 !== "move" && t3 !== "pan" || (sS(e3, "mousedown", i2, p2), sS(e3, "mousemove", r2, p2), sS(e3, "mouseup", o2, p2)), t3 !== !0 && t3 !== "scale" && t3 !== "zoom" || (sS(e3, "mousewheel", a2, p2), sS(e3, "pinch", s2, p2)));
    }, n2.disable = function() {
      this._enabled = !1, lS(e3, "mousedown", i2), lS(e3, "mousemove", r2), lS(e3, "mouseup", o2), lS(e3, "mousewheel", a2), lS(e3, "pinch", s2);
    }, n2;
  }
  return _(e2, t2), e2.prototype.isDragging = function() {
    return this._dragging;
  }, e2.prototype.isPinching = function() {
    return this._pinching;
  }, e2.prototype._checkPointer = function(t3, e3, n2) {
    var i2 = this._opt, r2 = i2.zInfoParsed;
    if ((function(t4, e4, n3) {
      var i3 = e4.getComponentByElement(t4.topTarget);
      if (!i3 || i3 === n3 || nS.hasOwnProperty(i3.mainType)) return !1;
      var r3 = i3.coordinateSystem;
      if (!r3 || r3.model === n3) return !1;
      var o3 = Ch(i3), a3 = Ch(n3);
      return !((o3.zlevel - a3.zlevel || o3.z - a3.z) <= 0);
    })(t3, i2.api, r2.component)) return !1;
    var o2 = i2.triggerInfo, a2 = !1;
    return o2.roamTrigger === "global" && (a2 = !0), a2 || (a2 = o2.isInSelf(t3, e3, n2)), a2 && o2.isInClip && !o2.isInClip(t3, e3, n2) && (a2 = !1), a2;
  }, e2.prototype._decideCursorStyle = function(t3, e3, n2, i2) {
    var r2 = t3.target;
    return !r2 && this._checkPointer(t3, e3, n2) ? "grab" : i2 ? r2 && r2.cursor || "default" : void 0;
  }, e2.prototype.dispose = function() {
    this.disable();
  }, e2.prototype._mousedownHandler = function(t3) {
    if (!ue(t3) && !rS(t3)) {
      for (var e3 = t3.target; e3; ) {
        if (e3.draggable) return;
        e3 = e3.__hostTarget || e3.parent;
      }
      var n2 = t3.offsetX, i2 = t3.offsetY;
      this._checkPointer(t3, n2, i2) && (this._x = n2, this._y = i2, this._dragging = !0);
    }
  }, e2.prototype._mousemoveHandler = function(t3) {
    var e3 = this._zr;
    if (t3.gestureEvent !== "pinch" && !eS(e3, "globalPan") && !rS(t3)) {
      var n2 = t3.offsetX, i2 = t3.offsetY;
      if (this._dragging && cS("moveOnMouseMove", t3, this._opt)) {
        e3.setCursorStyle("grabbing");
        var r2 = this._x, o2 = this._y, a2 = n2 - r2, s2 = i2 - o2;
        this._x = n2, this._y = i2, this._opt.preventDefaultMouseMove && le(t3.event), t3.__ecRoamConsumed = !0, hS(this, "pan", "moveOnMouseMove", t3, { dx: a2, dy: s2, oldX: r2, oldY: o2, newX: n2, newY: i2, isAvailableBehavior: null });
      } else {
        var l2 = this._decideCursorStyle(t3, n2, i2, !1);
        l2 && e3.setCursorStyle(l2);
      }
    }
  }, e2.prototype._mouseupHandler = function(t3) {
    if (!rS(t3)) {
      var e3 = this._zr;
      if (!ue(t3)) {
        this._dragging = !1;
        var n2 = this._decideCursorStyle(t3, t3.offsetX, t3.offsetY, !0);
        n2 && e3.setCursorStyle(n2);
      }
    }
  }, e2.prototype._mousewheelHandler = function(t3) {
    if (!rS(t3)) {
      var e3 = cS("zoomOnMouseWheel", t3, this._opt), n2 = cS("moveOnMouseWheel", t3, this._opt), i2 = t3.wheelDelta, r2 = Math.abs(i2), o2 = t3.offsetX, a2 = t3.offsetY;
      if (i2 !== 0 && (e3 || n2)) {
        if (e3) {
          var s2 = r2 > 3 ? 1.4 : r2 > 1 ? 1.2 : 1.1, l2 = i2 > 0 ? s2 : 1 / s2;
          this._checkTriggerMoveZoom(this, "zoom", "zoomOnMouseWheel", t3, { scale: l2, originX: o2, originY: a2, isAvailableBehavior: null });
        }
        if (n2) {
          var u2 = Math.abs(i2), h2 = (i2 > 0 ? 1 : -1) * (u2 > 3 ? 0.4 : u2 > 1 ? 0.15 : 0.05);
          this._checkTriggerMoveZoom(this, "scrollMove", "moveOnMouseWheel", t3, { scrollDelta: h2, originX: o2, originY: a2, isAvailableBehavior: null });
        }
      }
    }
  }, e2.prototype._pinchHandler = function(t3) {
    if (!eS(this._zr, "globalPan") && !rS(t3)) {
      var e3 = t3.pinchScale > 1 ? 1.1 : 0.9090909090909091;
      this._checkTriggerMoveZoom(this, "zoom", null, t3, { scale: e3, originX: t3.pinchX, originY: t3.pinchY, isAvailableBehavior: null });
    }
  }, e2.prototype._checkTriggerMoveZoom = function(t3, e3, n2, i2, r2) {
    t3._checkPointer(i2, r2.originX, r2.originY) && (le(i2.event), i2.__ecRoamConsumed = !0, hS(t3, e3, n2, i2, r2));
  }, e2;
})(Gt);
function rS(t2) {
  return t2.__ecRoamConsumed;
}
var oS = uo();
function aS(t2) {
  var e2 = oS(t2);
  return e2.roam = e2.roam || {}, e2.uniform = e2.uniform || {}, e2;
}
function sS(t2, e2, n2, i2) {
  for (var r2 = aS(t2).roam, o2 = r2[e2] = r2[e2] || [], a2 = 0; a2 < o2.length; a2++) {
    var s2 = o2[a2].zInfoParsed;
    if ((s2.zlevel - i2.zlevel || s2.z - i2.z || s2.z2 - i2.z2) <= 0) break;
  }
  o2.splice(a2, 0, { listener: n2, zInfoParsed: i2 }), (function(t3, e3) {
    var n3 = aS(t3);
    n3.uniform[e3] || t3.on(e3, n3.uniform[e3] = function(t4) {
      var i3 = n3.roam[e3];
      if (i3) for (var r3 = 0; r3 < i3.length; r3++) i3[r3].listener(t4);
    });
  })(t2, e2);
}
function lS(t2, e2, n2) {
  for (var i2 = aS(t2).roam[e2] || [], r2 = 0; r2 < i2.length; r2++) if (i2[r2].listener === n2) return i2.splice(r2, 1), void (i2.length || uS(t2, e2));
}
function uS(t2, e2) {
  var n2 = aS(t2).uniform;
  n2[e2] && (t2.off(e2, n2[e2]), n2[e2] = null);
}
function hS(t2, e2, n2, i2, r2) {
  r2.isAvailableBehavior = $(cS, null, n2, i2), t2.trigger(e2, r2);
}
function cS(t2, e2, n2) {
  var i2 = n2[t2];
  return !t2 || i2 && (!et(i2) || e2.event[i2 + "Key"]);
}
var pS = xu.prototype, dS = Mu.prototype, fS = /* @__PURE__ */ (function() {
  return function() {
    this.x1 = 0, this.y1 = 0, this.x2 = 0, this.y2 = 0, this.percent = 1;
  };
})();
function gS(t2) {
  return isNaN(+t2.cpx1) || isNaN(+t2.cpy1);
}
(function(t2) {
  function e2() {
    return t2 !== null && t2.apply(this, arguments) || this;
  }
  _(e2, t2);
})(fS);
var vS = (function(t2) {
  function e2(e3) {
    var n2 = t2.call(this, e3) || this;
    return n2.type = "ec-line", n2;
  }
  return _(e2, t2), e2.prototype.getDefaultStyle = function() {
    return { stroke: wp.color.neutral99, fill: null };
  }, e2.prototype.getDefaultShape = function() {
    return new fS();
  }, e2.prototype.buildPath = function(t3, e3) {
    gS(e3) ? pS.buildPath.call(this, t3, e3) : dS.buildPath.call(this, t3, e3);
  }, e2.prototype.pointAt = function(t3) {
    return gS(this.shape) ? pS.pointAt.call(this, t3) : dS.pointAt.call(this, t3);
  }, e2.prototype.tangentAt = function(t3) {
    var e3 = this.shape, n2 = gS(e3) ? [e3.x2 - e3.x1, e3.y2 - e3.y1] : dS.tangentAt.call(this, t3);
    return Rt(n2, n2);
  }, e2;
})(os), yS = ["fromSymbol", "toSymbol"];
function mS(t2) {
  return "_" + t2 + "Type";
}
function _S(t2, e2, n2) {
  var i2 = e2.getItemVisual(n2, t2);
  if (!i2 || i2 === "none") return i2;
  var r2 = e2.getItemVisual(n2, t2 + "Size"), o2 = e2.getItemVisual(n2, t2 + "Rotate"), a2 = e2.getItemVisual(n2, t2 + "Offset"), s2 = e2.getItemVisual(n2, t2 + "KeepAspect"), l2 = _v(r2);
  return i2 + l2 + xv(a2 || 0, l2) + (o2 || "") + (s2 || "");
}
function xS(t2, e2, n2) {
  var i2 = e2.getItemVisual(n2, t2);
  if (i2 && i2 !== "none") {
    var r2 = e2.getItemVisual(n2, t2 + "Size"), o2 = e2.getItemVisual(n2, t2 + "Rotate"), a2 = e2.getItemVisual(n2, t2 + "Offset"), s2 = e2.getItemVisual(n2, t2 + "KeepAspect"), l2 = _v(r2), u2 = xv(a2 || 0, l2), h2 = mv(i2, -l2[0] / 2 + u2[0], -l2[1] / 2 + u2[1], l2[0], l2[1], null, s2);
    return h2.__specifiedRotation = o2 == null || isNaN(o2) ? void 0 : +o2 * Math.PI / 180 || 0, h2.name = t2, h2;
  }
}
function bS(t2, e2) {
  t2.x1 = e2[0][0], t2.y1 = e2[0][1], t2.x2 = e2[1][0], t2.y2 = e2[1][1], t2.percent = 1;
  var n2 = e2[2];
  n2 ? (t2.cpx1 = n2[0], t2.cpy1 = n2[1]) : (t2.cpx1 = NaN, t2.cpy1 = NaN);
}
var wS = (function(t2) {
  function e2(e3, n2, i2) {
    var r2 = t2.call(this) || this;
    return r2._createLine(e3, n2, i2), r2;
  }
  return _(e2, t2), e2.prototype._createLine = function(t3, e3, n2) {
    var i2 = t3.hostModel, r2 = t3.getItemLayout(e3), o2 = t3.getItemVisual(e3, "z2"), a2 = (function(t4) {
      var e4 = new vS({ name: "line", subPixelOptimize: !0 });
      return bS(e4.shape, t4), e4;
    })(r2);
    a2.shape.percent = 0, Xu(a2, { z2: ct(o2, 0), shape: { percent: 1 } }, i2, e3), this.add(a2), Y(yS, function(n3) {
      var i3 = xS(n3, t3, e3);
      this.add(i3), this[mS(n3)] = _S(n3, t3, e3);
    }, this), this._updateCommonStl(t3, e3, n2);
  }, e2.prototype.updateData = function(t3, e3, n2) {
    var i2 = t3.hostModel, r2 = this.childOfName("line"), o2 = t3.getItemLayout(e3), a2 = { shape: {} };
    bS(a2.shape, o2), Uu(r2, a2, i2, e3), Y(yS, function(n3) {
      var i3 = _S(n3, t3, e3), r3 = mS(n3);
      if (this[r3] !== i3) {
        this.remove(this.childOfName(n3));
        var o3 = xS(n3, t3, e3);
        this.add(o3);
      }
      this[r3] = i3;
    }, this), this._updateCommonStl(t3, e3, n2);
  }, e2.prototype.getLinePath = function() {
    return this.childAt(0);
  }, e2.prototype._updateCommonStl = function(t3, e3, n2) {
    var i2 = t3.hostModel, r2 = this.childOfName("line"), o2 = n2 && n2.emphasisLineStyle, a2 = n2 && n2.blurLineStyle, s2 = n2 && n2.selectLineStyle, l2 = n2 && n2.labelStatesModels, u2 = n2 && n2.emphasisDisabled, h2 = n2 && n2.focus, c2 = n2 && n2.blurScope;
    if (!n2 || t3.hasItemOption) {
      var p2 = t3.getItemModel(e3), d2 = p2.getModel("emphasis");
      o2 = d2.getModel("lineStyle").getLineStyle(), a2 = p2.getModel(["blur", "lineStyle"]).getLineStyle(), s2 = p2.getModel(["select", "lineStyle"]).getLineStyle(), u2 = d2.get("disabled"), h2 = d2.get("focus"), c2 = d2.get("blurScope"), l2 = Rh(p2);
    }
    var f2 = t3.getItemVisual(e3, "style"), g2 = f2.stroke;
    r2.useStyle(f2), r2.style.fill = null, r2.style.strokeNoScale = !0, r2.ensureState("emphasis").style = o2, r2.ensureState("blur").style = a2, r2.ensureState("select").style = s2, Y(yS, function(t4) {
      var e4 = this.childOfName(t4);
      if (e4) {
        e4.setColor(g2), e4.style.opacity = f2.opacity;
        for (var n3 = 0; n3 < Es.length; n3++) {
          var i3 = Es[n3], o3 = r2.getState(i3);
          if (o3) {
            var a3 = o3.style || {}, s3 = e4.ensureState(i3), l3 = s3.style || (s3.style = {});
            a3.stroke != null && (l3[e4.__isEmptyBrush ? "stroke" : "fill"] = a3.stroke), a3.opacity != null && (l3.opacity = a3.opacity);
          }
        }
        e4.markRedraw();
      }
    }, this);
    var v2 = i2.getRawValue(e3);
    Oh(this, l2, { labelDataIndex: e3, labelFetcher: { getFormattedLabel: function(e4, n3) {
      return i2.getFormattedLabel(e4, n3, t3.dataType);
    } }, inheritColor: g2 || wp.color.neutral99, defaultOpacity: f2.opacity, defaultText: (v2 == null ? t3.getName(e3) : isFinite(v2) ? Pr(v2) : v2) + "" });
    var y2 = this.getTextContent();
    if (y2) {
      var m2 = l2.normal;
      y2.__align = y2.style.align, y2.__verticalAlign = y2.style.verticalAlign, y2.__position = m2.get("position") || "middle";
      var _2 = m2.get("distance");
      J(_2) || (_2 = [_2, _2]), y2.__labelDistance = _2;
    }
    this.setTextConfig({ position: null, local: !0, inside: !1 }), bl(this, h2, c2, u2);
  }, e2.prototype.highlight = function() {
    sl(this);
  }, e2.prototype.downplay = function() {
    ll(this);
  }, e2.prototype.updateLayout = function(t3, e3) {
    this.setLinePoints(t3.getItemLayout(e3));
  }, e2.prototype.setLinePoints = function(t3) {
    var e3 = this.childOfName("line");
    bS(e3.shape, t3), e3.dirty();
  }, e2.prototype.beforeUpdate = function() {
    var t3 = this, e3 = t3.childOfName("fromSymbol"), n2 = t3.childOfName("toSymbol"), i2 = t3.getTextContent();
    if (e3 || n2 || i2 && !i2.ignore) {
      for (var r2 = 1, o2 = this.parent; o2; ) o2.scaleX && (r2 /= o2.scaleX), o2 = o2.parent;
      var a2 = t3.childOfName("line");
      if (this.__dirty || a2.__dirty) {
        var s2 = a2.shape.percent, l2 = a2.pointAt(0), u2 = a2.pointAt(s2), h2 = Pt([], u2, l2);
        if (Rt(h2, h2), e3 && (e3.setPosition(l2), S2(e3, 0), e3.scaleX = e3.scaleY = r2 * s2, e3.markRedraw()), n2 && (n2.setPosition(u2), S2(n2, 1), n2.scaleX = n2.scaleY = r2 * s2, n2.markRedraw()), i2 && !i2.ignore) {
          i2.x = i2.y = 0, i2.originX = i2.originY = 0;
          var c2 = void 0, p2 = void 0, d2 = i2.__labelDistance, f2 = d2[0] * r2, g2 = d2[1] * r2, v2 = s2 / 2, y2 = a2.tangentAt(v2), m2 = [y2[1], -y2[0]], _2 = a2.pointAt(v2);
          m2[1] > 0 && (m2[0] = -m2[0], m2[1] = -m2[1]);
          var x2 = y2[0] < 0 ? -1 : 1;
          if (i2.__position !== "start" && i2.__position !== "end") {
            var b2 = -Math.atan2(y2[1], y2[0]);
            u2[0] < l2[0] && (b2 = Math.PI + b2), i2.rotation = b2;
          }
          var w2 = void 0;
          switch (i2.__position) {
            case "insideStartTop":
            case "insideMiddleTop":
            case "insideEndTop":
            case "middle":
              w2 = -g2, p2 = "bottom";
              break;
            case "insideStartBottom":
            case "insideMiddleBottom":
            case "insideEndBottom":
              w2 = g2, p2 = "top";
              break;
            default:
              w2 = 0, p2 = "middle";
          }
          switch (i2.__position) {
            case "end":
              i2.x = h2[0] * f2 + u2[0], i2.y = h2[1] * g2 + u2[1], c2 = h2[0] > 0.8 ? "left" : h2[0] < -0.8 ? "right" : "center", p2 = h2[1] > 0.8 ? "top" : h2[1] < -0.8 ? "bottom" : "middle";
              break;
            case "start":
              i2.x = -h2[0] * f2 + l2[0], i2.y = -h2[1] * g2 + l2[1], c2 = h2[0] > 0.8 ? "right" : h2[0] < -0.8 ? "left" : "center", p2 = h2[1] > 0.8 ? "bottom" : h2[1] < -0.8 ? "top" : "middle";
              break;
            case "insideStartTop":
            case "insideStart":
            case "insideStartBottom":
              i2.x = f2 * x2 + l2[0], i2.y = l2[1] + w2, c2 = y2[0] < 0 ? "right" : "left", i2.originX = -f2 * x2, i2.originY = -w2;
              break;
            case "insideMiddleTop":
            case "insideMiddle":
            case "insideMiddleBottom":
            case "middle":
              i2.x = _2[0], i2.y = _2[1] + w2, c2 = "center", i2.originY = -w2;
              break;
            case "insideEndTop":
            case "insideEnd":
            case "insideEndBottom":
              i2.x = -f2 * x2 + u2[0], i2.y = u2[1] + w2, c2 = y2[0] >= 0 ? "right" : "left", i2.originX = f2 * x2, i2.originY = -w2;
          }
          i2.scaleX = i2.scaleY = r2, i2.setStyle({ verticalAlign: i2.__verticalAlign || p2, align: i2.__align || c2 });
        }
      }
    }
    function S2(t4, e4) {
      var n3 = t4.__specifiedRotation;
      if (n3 == null) {
        var i3 = a2.tangentAt(e4);
        t4.attr("rotation", (e4 === 1 ? -1 : 1) * Math.PI / 2 - Math.atan2(i3[1], i3[0]));
      } else t4.attr("rotation", n3);
    }
  }, e2;
})(xr), SS = (function() {
  function t2(t3) {
    this.group = new xr(), this._LineCtor = t3 || wS;
  }
  return t2.prototype.updateData = function(t3) {
    var e2 = this;
    this._progressiveEls = null;
    var n2 = this, i2 = n2.group, r2 = n2._lineData;
    n2._lineData = t3, r2 || i2.removeAll();
    var o2 = MS(t3);
    t3.diff(r2).add(function(n3) {
      e2._doAdd(t3, n3, o2);
    }).update(function(n3, i3) {
      e2._doUpdate(r2, t3, i3, n3, o2);
    }).remove(function(t4) {
      i2.remove(r2.getItemGraphicEl(t4));
    }).execute();
  }, t2.prototype.updateLayout = function() {
    var t3 = this._lineData;
    t3 && t3.eachItemGraphicEl(function(e2, n2) {
      e2.updateLayout(t3, n2);
    }, this);
  }, t2.prototype.incrementalPrepareUpdate = function(t3) {
    this._seriesScope = MS(t3), this._lineData = null, this.group.removeAll();
  }, t2.prototype.incrementalUpdate = function(t3, e2) {
    function n2(t4) {
      t4.isGroup || (function(t5) {
        return t5.animators && t5.animators.length > 0;
      })(t4) || (t4.incremental = !0, t4.ensureState("emphasis").hoverLayer = !0);
    }
    this._progressiveEls = [];
    for (var i2 = t3.start; i2 < t3.end; i2++)
      if (kS(e2.getItemLayout(i2))) {
        var r2 = new this._LineCtor(e2, i2, this._seriesScope);
        r2.traverse(n2), this.group.add(r2), e2.setItemGraphicEl(i2, r2), this._progressiveEls.push(r2);
      }
  }, t2.prototype.remove = function() {
    this.group.removeAll();
  }, t2.prototype.eachRendered = function(t3) {
    wh(this._progressiveEls || this.group, t3);
  }, t2.prototype._doAdd = function(t3, e2, n2) {
    if (kS(t3.getItemLayout(e2))) {
      var i2 = new this._LineCtor(t3, e2, n2);
      t3.setItemGraphicEl(e2, i2), this.group.add(i2);
    }
  }, t2.prototype._doUpdate = function(t3, e2, n2, i2, r2) {
    var o2 = t3.getItemGraphicEl(n2);
    kS(e2.getItemLayout(i2)) ? (o2 ? o2.updateData(e2, i2, r2) : o2 = new this._LineCtor(e2, i2, r2), e2.setItemGraphicEl(i2, o2), this.group.add(o2)) : this.group.remove(o2);
  }, t2;
})();
function MS(t2) {
  var e2 = t2.hostModel, n2 = e2.getModel("emphasis");
  return { lineStyle: e2.getModel("lineStyle").getLineStyle(), emphasisLineStyle: n2.getModel(["lineStyle"]).getLineStyle(), blurLineStyle: e2.getModel(["blur", "lineStyle"]).getLineStyle(), selectLineStyle: e2.getModel(["select", "lineStyle"]).getLineStyle(), emphasisDisabled: n2.get("disabled"), blurScope: n2.get("blurScope"), focus: n2.get("focus"), labelStatesModels: Rh(e2) };
}
function TS(t2) {
  return isNaN(t2[0]) || isNaN(t2[1]);
}
function kS(t2) {
  return t2 && !TS(t2[0]) && !TS(t2[1]);
}
function CS(t2, e2, n2, i2, r2, o2) {
  t2 = t2 || 0;
  var a2 = n2[1] - n2[0];
  if (r2 != null && (r2 = DS(r2, [0, a2])), o2 != null && (o2 = Math.max(o2, r2 ?? 0)), i2 === "all") {
    var s2 = Math.abs(e2[1] - e2[0]);
    s2 = DS(s2, [0, a2]), r2 = o2 = DS(s2, [r2, o2]), i2 = 0;
  }
  e2[0] = DS(e2[0], n2), e2[1] = DS(e2[1], n2);
  var l2 = IS(e2, i2);
  e2[i2] += t2;
  var u2, h2 = r2 || 0, c2 = n2.slice();
  return l2.sign < 0 ? c2[0] += h2 : c2[1] -= h2, e2[i2] = DS(e2[i2], c2), u2 = IS(e2, i2), r2 != null && (u2.sign !== l2.sign || u2.span < r2) && (e2[1 - i2] = e2[i2] + l2.sign * r2), u2 = IS(e2, i2), o2 != null && u2.span > o2 && (e2[1 - i2] = e2[i2] + u2.sign * o2), e2;
}
function IS(t2, e2) {
  var n2 = t2[e2] - t2[1 - e2];
  return { span: Math.abs(n2), sign: n2 > 0 ? -1 : n2 < 0 ? 1 : e2 ? -1 : 1 };
}
function DS(t2, e2) {
  return Math.min(e2[1] != null ? e2[1] : 1 / 0, Math.max(e2[0] != null ? e2[0] : -1 / 0, t2));
}
var AS = (function() {
  function t2() {
  }
  return t2.prototype._hasEncodeRule = function(t3) {
    var e2 = this.getEncode();
    return e2 && e2.get(t3) != null;
  }, t2.prototype.getInitialData = function(t3, e2) {
    var n2, i2, r2 = e2.getComponent("xAxis", this.get("xAxisIndex")), o2 = e2.getComponent("yAxis", this.get("yAxisIndex")), a2 = r2.get("type"), s2 = o2.get("type");
    a2 === "category" ? (t3.layout = "horizontal", n2 = r2.getOrdinalMeta(), i2 = !this._hasEncodeRule("x")) : s2 === "category" ? (t3.layout = "vertical", n2 = o2.getOrdinalMeta(), i2 = !this._hasEncodeRule("y")) : t3.layout = t3.layout || "horizontal";
    var l2 = ["x", "y"], u2 = t3.layout === "horizontal" ? 0 : 1, h2 = this._baseAxisDim = l2[u2], c2 = l2[1 - u2], p2 = [r2, o2], d2 = p2[u2].get("type"), f2 = p2[1 - u2].get("type"), g2 = t3.data;
    if (g2 && i2) {
      var v2 = [];
      Y(g2, function(t4, e3) {
        var n3;
        J(t4) ? (n3 = t4.slice(), t4.unshift(e3)) : J(t4.value) ? ((n3 = H({}, t4)).value = n3.value.slice(), t4.value.unshift(e3)) : n3 = t4, v2.push(n3);
      }), t3.data = v2;
    }
    var y2 = this.defaultValueDimensions, m2 = [{ name: h2, type: lm(d2), ordinalMeta: n2, otherDims: { tooltip: !1, itemName: 0 }, dimsDef: ["base"] }, { name: c2, type: lm(f2), dimsDef: y2.slice() }];
    return (function(t4, e3, n3) {
      e3 = J(e3) && { coordDimensions: e3 } || H({ encodeDefine: t4.getEncode() }, e3);
      var i3 = t4.getSource(), r3 = Am(i3, e3).dimensions, o3 = new Dm(r3, t4);
      return o3.initData(i3, n3), o3;
    })(this, { coordDimensions: m2, dimensionsCount: y2.length + 1, encodeDefaulter: Q(Up, m2, this) });
  }, t2.prototype.getBaseAxis = function() {
    var t3 = this._baseAxisDim;
    return this.ecModel.getComponent(t3 + "Axis", this.get(t3 + "AxisIndex")).axis;
  }, t2;
})(), LS = ["getWidth", "getHeight", "getDom", "getOption", "resize", "dispatchAction", "convertToPixel", "convertFromPixel", "containPixel", "getDataURL", "getConnectedDataURL", "appendData", "clear", "isDisposed", "dispose"];
function PS(t2) {
  return LS.reduce((e2, n2) => (e2[n2] = /* @__PURE__ */ (function(e3) {
    return function(...n3) {
      if (!t2.value) throw new Error("ECharts is not initialized yet.");
      return Reflect.apply(t2.value[e3], t2.value, n3);
    };
  })(n2), e2), {});
}
var OS = { autoresize: [Boolean, Object] }, RS = /* @__PURE__ */ Symbol(), NS = { loading: Boolean, loadingOptions: Object };
function zS() {
  return typeof window < "u" && typeof document < "u";
}
var BS = /^on[^a-z]/, ES = (t2) => BS.test(t2);
function FS(t2) {
  return t2 != null && typeof t2 == "object" && !Array.isArray(t2);
}
var VS = { tooltip: ["tooltip", "formatter"], dataView: ["toolbox", "feature", "dataView", "optionToContent"] }, HS = Object.keys(VS);
function WS(t2) {
  return HS.some((e2) => t2 === e2 || t2.startsWith(e2 + "-"));
}
function GS(t2, e2) {
  let n2 = zS() ? document.createElement("div") : void 0, r2 = ht({}), o2 = ht({}), a2 = ht({}), s2 = Tt(!1), l2 = [];
  return ds(() => {
    let n3 = Object.keys(t2).filter(WS);
    (function(t3, e3) {
      let n4 = new Set(t3), i2 = new Set(e3);
      if (n4.size !== i2.size) return !1;
      for (let r3 of n4) if (!i2.has(r3)) return !1;
      return !0;
    })(n3, l2) || (l2.forEach((t3) => {
      n3.includes(t3) || (delete a2[t3], delete o2[t3], delete r2[t3]);
    }), l2 = n3, e2());
  }), fs(() => {
    s2.value = !0;
  }), vs(() => {
    n2?.remove();
  }), { teleportedSlots: () => s2.value && n2 ? Do(On, { to: n2 }, Object.entries(t2).filter(([t3]) => WS(t3)).map(([t3, e3]) => {
    let n3 = t3;
    return Do("div", { ref: (t4) => {
      t4 instanceof HTMLElement && (r2[n3] = t4);
    }, style: { display: "contents" } }, o2[n3] ? e3?.(a2[n3]) : void 0);
  })) : void 0, patchOption: function(e3) {
    let n3 = { ...e3 }, i2 = (t3, e4) => {
      let n4 = t3[e4];
      return Array.isArray(n4) ? (t3[e4] = [...n4], t3[e4]) : (i3 = n4) === null || typeof i3 != "object" || Array.isArray(i3) ? n4 === void 0 ? (t3[e4] = (function(t4) {
        let e5 = Number(t4);
        return Number.isInteger(e5) && e5 >= 0 && e5 < Math.pow(2, 32) - 1 && String(e5) === t4;
      })(e4) ? [] : {}, t3[e4]) : void 0 : (t3[e4] = { ...n4 }, t3[e4]);
      var i3;
    };
    return Object.keys(t2).filter((t3) => WS(t3)).forEach((t3) => {
      let [e4, ...s3] = t3.split("-"), l3 = VS[e4];
      if (!l3) return;
      let u2 = [...s3, ...l3];
      if (u2.length === 0) return;
      let h2 = n3;
      for (let n4 = 0; n4 < u2.length - 1; n4++) if (h2 = i2(h2, u2[n4]), !h2) return;
      h2[u2[u2.length - 1]] = (e5) => (o2[t3] = !0, a2[t3] = e5, r2[t3]);
    }), n3;
  } };
}
var US = null, XS = "x-vue-echarts";
function YS(t2) {
  if (!FS(t2)) return;
  let e2 = t2.id;
  return typeof e2 == "string" ? e2 : typeof e2 == "number" && Number.isFinite(e2) ? String(e2) : void 0;
}
function ZS(t2) {
  let e2 = t2, n2 = Array.isArray(e2.options) ? e2.options.length : 0, i2 = Array.isArray(e2.media) ? e2.media.length : 0, r2 = /* @__PURE__ */ Object.create(null), o2 = [], a2 = [];
  for (let s2 of Object.keys(e2)) {
    if (s2 === "options" || s2 === "media") continue;
    let t3 = e2[s2];
    if (Array.isArray(t3)) {
      let e3 = t3, n3 = /* @__PURE__ */ new Set(), i3 = 0;
      for (let t4 = 0; t4 < e3.length; t4++) {
        let r3 = YS(e3[t4]);
        r3 !== void 0 ? n3.add(r3) : i3++;
      }
      r2[s2] = { idsSorted: n3.size > 0 ? Array.from(n3).sort() : [], noIdCount: i3 };
    } else FS(t3) ? o2.push(s2) : t3 !== void 0 && a2.push(s2);
  }
  return o2.length > 1 && o2.sort(), a2.length > 1 && a2.sort(), { optionsLength: n2, mediaLength: i2, arrays: r2, objects: o2, scalars: a2 };
}
function jS(t2, e2) {
  if (t2.length === 0) return [];
  if (e2.length === 0) return t2.slice();
  let n2 = new Set(e2), i2 = [];
  for (let r2 = 0; r2 < t2.length; r2++) {
    let e3 = t2[r2];
    n2.has(e3) || i2.push(e3);
  }
  return i2;
}
function qS(t2, e2) {
  if (t2.length === 0) return !1;
  if (e2.length === 0) return !0;
  let n2 = new Set(e2);
  for (let i2 = 0; i2 < t2.length; i2++) if (!n2.has(t2[i2])) return !0;
  return !1;
}
var KS = `x-vue-echarts{display:block;width:100%;height:100%;min-width:0;}
x-vue-echarts>:first-child,x-vue-echarts>:first-child>canvas{border-radius:inherit;}
`;
if (typeof document < "u") if (Array.isArray(document.adoptedStyleSheets) && "replaceSync" in CSSStyleSheet.prototype) {
  let t2 = new CSSStyleSheet();
  t2.replaceSync(KS), document.adoptedStyleSheets = [...document.adoptedStyleSheets, t2];
} else {
  let t2 = document.createElement("style");
  t2.textContent = KS, document.head.appendChild(t2);
}
var $S = (function() {
  if (US != null) return US;
  let t2 = globalThis.customElements;
  if (!zS() || !t2?.get) return US = !1, US;
  if (!t2.get(XS)) try {
    class n2 extends HTMLElement {
      constructor() {
        super(...arguments), e(this, "__dispose", null);
      }
      disconnectedCallback() {
        this.__dispose && (this.__dispose(), this.__dispose = null);
      }
    }
    t2.define(XS, n2);
  } catch {
    return US = !1, US;
  }
  return US = !0, US;
})(), QS = /* @__PURE__ */ Symbol(), JS = /* @__PURE__ */ Symbol(), tM = /* @__PURE__ */ Symbol(), eM = zn({ name: "Echarts", inheritAttrs: !1, props: { option: Object, theme: { type: [Object, String] }, initOptions: Object, updateOptions: Object, group: String, manualUpdate: Boolean, ...OS, ...NS }, emits: {}, slots: Object, setup(t2, { attrs: e2, expose: n2, slots: f2 }) {
  let g2 = Tt(), v2 = Tt(), y2 = rr(QS, null), m2 = rr(JS, null), _2 = rr(tM, null), { autoresize: x2, manualUpdate: b2, loading: w2, loadingOptions: S2 } = Vt(t2), M2 = $o(() => t2.theme || jt(y2)), T2 = $o(() => t2.initOptions || jt(m2) || void 0), k2 = $o(() => t2.updateOptions || jt(_2)), C2 = $o(() => (function(t3) {
    let e3 = {};
    for (let n3 in t3) ES(n3) || (e3[n3] = t3[n3]);
    return e3;
  })(e2)), I2 = {}, D2 = /* @__PURE__ */ new Map(), { teleportedSlots: A2, patchOption: L2 } = GS(f2, () => {
    !b2.value && t2.option && v2.value && O2(v2.value, t2.option);
  }), P2;
  function O2(t3, e3, n3, i2 = !1) {
    let r2 = L2(e3);
    if (i2) return t3.setOption(r2, n3 ?? {}), void (P2 = void 0);
    if (k2.value) {
      let e4 = n3 ?? k2.value;
      return t3.setOption(r2, e4), void (P2 = void 0);
    }
    let o2 = (function(t4, e4) {
      let n4 = ZS(e4);
      if (!t4) return { option: e4, signature: n4, plan: { notMerge: !1 } };
      if (n4.optionsLength < t4.optionsLength) return { option: e4, signature: n4, plan: { notMerge: !0 } };
      if (n4.mediaLength < t4.mediaLength) return { option: e4, signature: n4, plan: { notMerge: !0 } };
      if (jS(t4.scalars, n4.scalars).length > 0) return { option: e4, signature: n4, plan: { notMerge: !0 } };
      let i3 = /* @__PURE__ */ new Set(), r3 = /* @__PURE__ */ new Map(), o3 = jS(t4.objects, n4.objects);
      for (let u2 = 0; u2 < o3.length; u2++) r3.set(o3[u2], null);
      for (let u2 of Object.keys(t4.arrays)) {
        let e5 = t4.arrays[u2];
        if (!e5) continue;
        let o4 = n4.arrays[u2];
        o4 ? (qS(e5.idsSorted, o4.idsSorted) || o4.noIdCount < e5.noIdCount) && i3.add(u2) : (e5.idsSorted.length > 0 || e5.noIdCount > 0) && (r3.set(u2, []), i3.add(u2));
      }
      let a3 = e4, s2 = n4;
      if (r3.size > 0) {
        let t5 = { ...e4 };
        r3.forEach((e5, n5) => {
          t5[n5] = e5;
        }), a3 = t5, s2 = ZS(a3);
      }
      let l2 = i3.size > 0 ? Array.from(i3).sort() : void 0;
      return { option: a3, signature: s2, plan: l2 ? { notMerge: !1, replaceMerge: l2 } : { notMerge: !1 } };
    })(P2, r2), a2 = (function(t4) {
      let e4 = {}, n4 = (t4?.replaceMerge ?? []).filter((t5) => t5 != null);
      return n4.length > 0 && (e4.replaceMerge = [...new Set(n4)]), t4?.notMerge !== void 0 && (e4.notMerge = t4.notMerge), e4;
    })(o2.plan);
    t3.setOption(o2.option, a2), P2 = o2.signature;
  }
  function R2() {
    if (!g2.value) return;
    let e3 = v2.value = Xy(g2.value, M2.value, T2.value);
    function n3() {
      let { option: n4 } = t2;
      b2.value ? n4 && O2(e3, n4, void 0, !0) : n4 && O2(e3, n4);
    }
    t2.group && (e3.group = t2.group), D2.forEach((t3, { zr: n4, once: i2, event: r2 }) => {
      if (!t3) return;
      let o2 = n4 ? e3.getZr() : e3;
      if (i2) {
        let e4 = t3, n5 = !1;
        t3 = (...i3) => {
          n5 || (n5 = !0, e4(...i3), o2.off(r2, t3));
        };
      }
      o2.on(r2, t3);
    }), x2.value ? on(() => {
      e3 && !e3.isDisposed() && e3.resize(), n3();
    }) : n3();
  }
  Object.keys(e2).filter((t3) => ES(t3)).forEach((t3) => {
    if (t3.indexOf("Native:") === 2) {
      let n4 = `on${t3.charAt(9).toUpperCase()}${t3.slice(10)}`;
      return void (I2[n4] = e2[t3]);
    }
    let n3, i2, r2 = t3.charAt(2).toLowerCase() + t3.slice(3);
    r2.indexOf("zr:") === 0 && (n3 = !0, r2 = r2.substring(3)), r2.substring(r2.length - 4) === "Once" && (i2 = !0, r2 = r2.substring(0, r2.length - 4)), D2.set({ event: r2, zr: n3, once: i2 }, e2[t3]);
  });
  function N2() {
    v2.value && (v2.value.dispose(), v2.value = void 0), P2 = void 0;
  }
  Fr(() => t2.option, (t3) => {
    t3 ? b2.value || v2.value && O2(v2.value, t3) : P2 = void 0;
  }, { deep: !0 }), Fr([b2, T2], () => {
    N2(), R2();
  }, { deep: !0 }), Fr(M2, (t3) => {
    var e3;
    (e3 = v2.value) == null || e3.setTheme(t3 || {});
  }, { deep: !0 }), Or(() => {
    t2.group && v2.value && (v2.value.group = t2.group);
  });
  let z2 = PS(v2);
  return (function(t3, e3, n3) {
    let i2 = rr(RS, {}), o2 = $o(() => ({ ...jt(i2), ...n3?.value }));
    Or(() => {
      let n4 = t3.value;
      n4 && (e3.value ? n4.showLoading(o2.value) : n4.hideLoading());
    });
  })(v2, w2, S2), (function(t3, e3, n3) {
    Fr([n3, t3, e3], ([t4, e4, n4], i2, r2) => {
      let o2 = null;
      if (t4 && e4 && n4) {
        let { offsetWidth: i3, offsetHeight: r3 } = t4, { throttle: a2 = 100, onResize: s2 } = n4 === !0 ? {} : n4, l2 = !1, u2 = () => {
          e4.resize(), s2?.();
        }, h2 = a2 ? _g(u2, a2) : u2;
        o2 = new ResizeObserver(() => {
          (l2 || (l2 = !0, t4.offsetWidth !== i3 || t4.offsetHeight !== r3)) && t4.offsetWidth !== 0 && t4.offsetHeight !== 0 && h2();
        }), o2.observe(t4);
      }
      r2(() => {
        o2 && (o2.disconnect(), o2 = null);
      });
    });
  })(v2, x2, g2), fs(() => {
    R2();
  }), hs(() => {
    $S && g2.value ? g2.value.__dispose = N2 : N2();
  }), n2({ setOption: (e3, n3, i2) => {
    if (!t2.manualUpdate) return;
    let r2 = typeof n3 == "boolean" ? { notMerge: n3, lazyUpdate: i2 } : n3;
    v2.value && O2(v2.value, e3, r2 ?? void 0, !0);
  }, root: g2, chart: v2, ...z2 }), () => Do(XS, { ...C2.value, ...I2, ref: g2, class: ["echarts", C2.value.class] }, A2());
} }), nM = eM, iM = uo(), rM = F, oM = $;
function aM(t2, e2, n2, i2) {
  sM(iM(n2).lastProp, i2) || (iM(n2).lastProp = i2, e2 ? Uu(n2, i2, t2) : (n2.stopAnimation(), n2.attr(i2)));
}
function sM(t2, e2) {
  if (rt(t2) && rt(e2)) {
    var n2 = !0;
    return Y(e2, function(e3, i2) {
      n2 = n2 && sM(t2[i2], e3);
    }), !!n2;
  }
  return t2 === e2;
}
function lM(t2, e2) {
  t2[e2.get(["label", "show"]) ? "show" : "hide"]();
}
function uM(t2) {
  return { x: t2.x || 0, y: t2.y || 0, rotation: t2.rotation || 0 };
}
function hM(t2, e2, n2) {
  var i2 = e2.get("z"), r2 = e2.get("zlevel");
  t2 && t2.traverse(function(t3) {
    t3.type !== "group" && (i2 != null && (t3.z = i2), r2 != null && (t3.zlevel = r2), t3.silent = n2);
  });
}
function cM(t2, e2, n2, i2, r2) {
  var o2 = pM(n2.get("value"), e2.axis, e2.ecModel, n2.get("seriesDataIndices"), { precision: n2.get(["label", "precision"]), formatter: n2.get(["label", "formatter"]) }), a2 = n2.getModel("label"), s2 = Zc(a2.get("padding") || 0), l2 = a2.getFont(), u2 = ir(o2, l2), h2 = r2.position, c2 = u2.width + s2[1] + s2[3], p2 = u2.height + s2[0] + s2[2], d2 = r2.align;
  d2 === "right" && (h2[0] -= c2), d2 === "center" && (h2[0] -= c2 / 2);
  var f2 = r2.verticalAlign;
  f2 === "bottom" && (h2[1] -= p2), f2 === "middle" && (h2[1] -= p2 / 2), (function(t3, e3, n3, i3) {
    var r3 = i3.getWidth(), o3 = i3.getHeight();
    t3[0] = Math.min(t3[0] + e3, r3) - e3, t3[1] = Math.min(t3[1] + n3, o3) - n3, t3[0] = Math.max(t3[0], 0), t3[1] = Math.max(t3[1], 0);
  })(h2, c2, p2, i2);
  var g2 = a2.get("backgroundColor");
  g2 && g2 !== "auto" || (g2 = e2.get(["axisLine", "lineStyle", "color"])), t2.label = { x: h2[0], y: h2[1], style: Nh(a2, { text: o2, font: l2, fill: a2.getTextColor(), padding: s2, backgroundColor: g2 }), z2: 10 };
}
function pM(t2, e2, n2, i2, r2) {
  t2 = e2.scale.parse(t2);
  var o2 = e2.scale.getLabel({ value: t2 }, { precision: r2.precision }), a2 = r2.formatter;
  if (a2) {
    var s2 = { value: N_(e2, { value: t2 }), axisDimension: e2.dim, axisIndex: e2.index, seriesData: [] };
    Y(i2, function(t3) {
      var e3 = n2.getSeriesByIndex(t3.seriesIndex), i3 = t3.dataIndexInside, r3 = e3 && e3.getDataParams(i3);
      r3 && s2.seriesData.push(r3);
    }), et(a2) ? o2 = a2.replace("{value}", o2) : tt(a2) && (o2 = a2(s2));
  }
  return o2;
}
function dM(t2, e2, n2) {
  var i2 = [1, 0, 0, 1, 0, 0];
  return ye(i2, i2, n2.rotation), ve(i2, i2, n2.position), hh([t2.dataToCoord(e2), (n2.labelOffset || 0) + (n2.labelDirection || 1) * (n2.labelMargin || 0)], i2);
}
var fM = (function(t2) {
  function e2() {
    return t2 !== null && t2.apply(this, arguments) || this;
  }
  return _(e2, t2), e2.prototype.makeElOption = function(t3, e3, n2, i2, r2) {
    var o2 = n2.axis, a2 = o2.grid, s2 = i2.get("type"), l2 = gM(a2, o2).getOtherAxis(o2).getGlobalExtent(), u2 = o2.toGlobalCoord(o2.dataToCoord(e3, !0));
    if (s2 && s2 !== "none") {
      var h2 = (function(t4) {
        var e4, n3 = t4.get("type"), i3 = t4.getModel(n3 + "Style");
        return n3 === "line" ? (e4 = i3.getLineStyle()).fill = null : n3 === "shadow" && ((e4 = i3.getAreaStyle()).stroke = null), e4;
      })(i2), c2 = vM[s2](o2, u2, l2);
      c2.style = h2, t3.graphicKey = c2.type, t3.pointer = c2;
    }
    (function(t4, e4, n3, i3, r3, o3) {
      var a3 = fw.innerTextLayout(n3.rotation, 0, n3.labelDirection);
      n3.labelMargin = r3.get(["label", "margin"]), cM(e4, i3, r3, o3, { position: dM(i3.axis, t4, n3), align: a3.textAlign, verticalAlign: a3.textVerticalAlign });
    })(e3, t3, kw(a2.getRect(), n2), n2, i2, r2);
  }, e2.prototype.getHandleTransform = function(t3, e3, n2) {
    var i2 = kw(e3.axis.grid.getRect(), e3, { labelInside: !1 });
    i2.labelMargin = n2.get(["handle", "margin"]);
    var r2 = dM(e3.axis, t3, i2);
    return { x: r2[0], y: r2[1], rotation: i2.rotation + (i2.labelDirection < 0 ? Math.PI : 0) };
  }, e2.prototype.updateHandleTransform = function(t3, e3, n2, i2) {
    var r2 = n2.axis, o2 = r2.grid, a2 = r2.getGlobalExtent(!0), s2 = gM(o2, r2).getOtherAxis(r2).getGlobalExtent(), l2 = r2.dim === "x" ? 0 : 1, u2 = [t3.x, t3.y];
    u2[l2] += e3[l2], u2[l2] = Math.min(a2[1], u2[l2]), u2[l2] = Math.max(a2[0], u2[l2]);
    var h2 = (s2[1] + s2[0]) / 2, c2 = [h2, h2];
    return c2[l2] = u2[l2], { x: u2[0], y: u2[1], rotation: t3.rotation, cursorPoint: c2, tooltipOption: [{ verticalAlign: "middle" }, { align: "center" }][l2] };
  }, e2;
})((function() {
  function t2() {
    this._dragging = !1, this.animationThreshold = 15;
  }
  return t2.prototype.render = function(t3, e2, n2, i2) {
    var r2 = e2.get("value"), o2 = e2.get("status");
    if (this._axisModel = t3, this._axisPointerModel = e2, this._api = n2, i2 || this._lastValue !== r2 || this._lastStatus !== o2) {
      this._lastValue = r2, this._lastStatus = o2;
      var a2 = this._group, s2 = this._handle;
      if (!o2 || o2 === "hide") return a2 && a2.hide(), void (s2 && s2.hide());
      a2 && a2.show(), s2 && s2.show();
      var l2 = {};
      this.makeElOption(l2, r2, t3, e2, n2);
      var u2 = l2.graphicKey;
      u2 !== this._lastGraphicKey && this.clear(n2), this._lastGraphicKey = u2;
      var h2 = this._moveAnimation = this.determineAnimation(t3, e2);
      if (a2) {
        var c2 = Q(aM, e2, h2);
        this.updatePointerEl(a2, l2, c2), this.updateLabelEl(a2, l2, c2, e2);
      } else a2 = this._group = new xr(), this.createPointerEl(a2, l2, t3, e2), this.createLabelEl(a2, l2, t3, e2), n2.getZr().add(a2);
      hM(a2, e2, !0), this._renderHandle(r2);
    }
  }, t2.prototype.remove = function(t3) {
    this.clear(t3);
  }, t2.prototype.dispose = function(t3) {
    this.clear(t3);
  }, t2.prototype.determineAnimation = function(t3, e2) {
    var n2 = e2.get("animation"), i2 = t3.axis, r2 = i2.type === "category", o2 = e2.get("snap");
    if (!o2 && !r2) return !1;
    if (n2 === "auto" || n2 == null) {
      var a2 = this.animationThreshold;
      if (r2 && i2.getBandWidth() > a2) return !0;
      if (o2) {
        var s2 = Vw(t3).seriesDataCount, l2 = i2.getExtent();
        return Math.abs(l2[0] - l2[1]) / s2 > a2;
      }
      return !1;
    }
    return n2 === !0;
  }, t2.prototype.makeElOption = function(t3, e2, n2, i2, r2) {
  }, t2.prototype.createPointerEl = function(t3, e2, n2, i2) {
    var r2 = e2.pointer;
    if (r2) {
      var o2 = iM(t3).pointerEl = new Ah[r2.type](rM(e2.pointer));
      t3.add(o2);
    }
  }, t2.prototype.createLabelEl = function(t3, e2, n2, i2) {
    if (e2.label) {
      var r2 = iM(t3).labelEl = new bs(rM(e2.label));
      t3.add(r2), lM(r2, i2);
    }
  }, t2.prototype.updatePointerEl = function(t3, e2, n2) {
    var i2 = iM(t3).pointerEl;
    i2 && e2.pointer && (i2.setStyle(e2.pointer.style), n2(i2, { shape: e2.pointer.shape }));
  }, t2.prototype.updateLabelEl = function(t3, e2, n2, i2) {
    var r2 = iM(t3).labelEl;
    r2 && (r2.setStyle(e2.label.style), n2(r2, { x: e2.label.x, y: e2.label.y }), lM(r2, i2));
  }, t2.prototype._renderHandle = function(t3) {
    if (!this._dragging && this.updateHandleTransform) {
      var e2, n2 = this._axisPointerModel, i2 = this._api.getZr(), r2 = this._handle, o2 = n2.getModel("handle"), a2 = n2.get("status");
      if (!o2.get("show") || !a2 || a2 === "hide") return r2 && i2.remove(r2), void (this._handle = null);
      this._handle || (e2 = !0, r2 = this._handle = fh(o2.get("icon"), { cursor: "move", draggable: !0, onmousemove: function(t4) {
        le(t4.event);
      }, onmousedown: oM(this._onHandleDragMove, this, 0, 0), drift: oM(this._onHandleDragMove, this), ondragend: oM(this._onHandleDragEnd, this) }), i2.add(r2)), hM(r2, n2, !1), r2.setStyle(o2.getItemStyle(null, ["color", "borderColor", "borderWidth", "opacity", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"]));
      var s2 = o2.get("size");
      J(s2) || (s2 = [s2, s2]), r2.scaleX = s2[0] / 2, r2.scaleY = s2[1] / 2, xg(this, "_doDispatchAxisPointer", o2.get("throttle") || 0, "fixRate"), this._moveHandleToValue(t3, e2);
    }
  }, t2.prototype._moveHandleToValue = function(t3, e2) {
    aM(this._axisPointerModel, !e2 && this._moveAnimation, this._handle, uM(this.getHandleTransform(t3, this._axisModel, this._axisPointerModel)));
  }, t2.prototype._onHandleDragMove = function(t3, e2) {
    var n2 = this._handle;
    if (n2) {
      this._dragging = !0;
      var i2 = this.updateHandleTransform(uM(n2), [t3, e2], this._axisModel, this._axisPointerModel);
      this._payloadInfo = i2, n2.stopAnimation(), n2.attr(uM(i2)), iM(n2).lastProp = null, this._doDispatchAxisPointer();
    }
  }, t2.prototype._doDispatchAxisPointer = function() {
    if (this._handle) {
      var t3 = this._payloadInfo, e2 = this._axisModel;
      this._api.dispatchAction({ type: "updateAxisPointer", x: t3.cursorPoint[0], y: t3.cursorPoint[1], tooltipOption: t3.tooltipOption, axesInfo: [{ axisDim: e2.axis.dim, axisIndex: e2.componentIndex }] });
    }
  }, t2.prototype._onHandleDragEnd = function() {
    if (this._dragging = !1, this._handle) {
      var t3 = this._axisPointerModel.get("value");
      this._moveHandleToValue(t3), this._api.dispatchAction({ type: "hideTip" });
    }
  }, t2.prototype.clear = function(t3) {
    this._lastValue = null, this._lastStatus = null;
    var e2 = t3.getZr(), n2 = this._group, i2 = this._handle;
    e2 && n2 && (this._lastGraphicKey = null, n2 && e2.remove(n2), i2 && e2.remove(i2), this._group = null, this._handle = null, this._payloadInfo = null), bg(this, "_doDispatchAxisPointer");
  }, t2.prototype.doClear = function() {
  }, t2.prototype.buildLabel = function(t3, e2, n2) {
    return { x: t3[n2 = n2 || 0], y: t3[1 - n2], width: e2[n2], height: e2[1 - n2] };
  }, t2;
})());
function gM(t2, e2) {
  var n2 = {};
  return n2[e2.dim + "AxisIndex"] = e2.index, t2.getCartesian(n2);
}
var vM = { line: function(t2, e2, n2) {
  var i2, r2, o2;
  return { type: "Line", subPixelOptimize: !0, shape: (i2 = [e2, n2[0]], r2 = [e2, n2[1]], o2 = yM(t2), { x1: i2[o2 = o2 || 0], y1: i2[1 - o2], x2: r2[o2], y2: r2[1 - o2] }) };
}, shadow: function(t2, e2, n2) {
  var i2, r2, o2, a2 = Math.max(1, t2.getBandWidth()), s2 = n2[1] - n2[0];
  return { type: "Rect", shape: (i2 = [e2 - a2 / 2, n2[0]], r2 = [a2, s2], o2 = yM(t2), { x: i2[o2 = o2 || 0], y: i2[1 - o2], width: r2[o2], height: r2[1 - o2] }) };
} };
function yM(t2) {
  return t2.dim === "x" ? 0 : 1;
}
var mM = (function(t2) {
  function e2() {
    var n2 = t2 !== null && t2.apply(this, arguments) || this;
    return n2.type = e2.type, n2;
  }
  return _(e2, t2), e2.type = "axisPointer", e2.defaultOption = { show: "auto", z: 50, type: "line", snap: !1, triggerTooltip: !0, triggerEmphasis: !0, value: null, status: null, link: [], animation: null, animationDurationUpdate: 200, lineStyle: { color: wp.color.border, width: 1, type: "dashed" }, shadowStyle: { color: wp.color.shadowTint }, label: { show: !0, formatter: null, precision: "auto", margin: 3, color: wp.color.neutral00, padding: [5, 7, 5, 7], backgroundColor: wp.color.accent60, borderColor: null, borderWidth: 0, borderRadius: 3 }, handle: { show: !1, icon: "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z", size: 45, margin: 50, color: wp.color.accent40, throttle: 40 } }, e2;
})(bp), _M = uo(), xM = Y;
function bM(t2, e2, n2) {
  if (!b.node) {
    var i2 = e2.getZr();
    _M(i2).records || (_M(i2).records = {}), (function(t3, e3) {
      if (_M(t3).initialized) return;
      function n3(n4, i3) {
        t3.on(n4, function(n5) {
          var r2 = /* @__PURE__ */ (function(t4) {
            var e4 = { showTip: [], hideTip: [] }, n6 = function(i4) {
              var r3 = e4[i4.type];
              r3 ? r3.push(i4) : (i4.dispatchAction = n6, t4.dispatchAction(i4));
            };
            return { dispatchAction: n6, pendings: e4 };
          })(e3);
          xM(_M(t3).records, function(t4) {
            t4 && i3(t4, n5, r2.dispatchAction);
          }), (function(t4, e4) {
            var n6, i4 = t4.showTip.length, r3 = t4.hideTip.length;
            i4 ? n6 = t4.showTip[i4 - 1] : r3 && (n6 = t4.hideTip[r3 - 1]), n6 && (n6.dispatchAction = null, e4.dispatchAction(n6));
          })(r2.pendings, e3);
        });
      }
      _M(t3).initialized = !0, n3("click", Q(SM, "click")), n3("mousemove", Q(SM, "mousemove")), n3("globalout", wM);
    })(i2, e2), (_M(i2).records[t2] || (_M(i2).records[t2] = {})).handler = n2;
  }
}
function wM(t2, e2, n2) {
  t2.handler("leave", null, n2);
}
function SM(t2, e2, n2, i2) {
  e2.handler(t2, n2, i2);
}
function MM(t2, e2) {
  if (!b.node) {
    var n2 = e2.getZr();
    (_M(n2).records || {})[t2] && (_M(n2).records[t2] = null);
  }
}
var TM = (function(t2) {
  function e2() {
    var n2 = t2 !== null && t2.apply(this, arguments) || this;
    return n2.type = e2.type, n2;
  }
  return _(e2, t2), e2.prototype.render = function(t3, e3, n2) {
    var i2 = e3.getComponent("tooltip"), r2 = t3.get("triggerOn") || i2 && i2.get("triggerOn") || "mousemove|click";
    bM("axisPointer", n2, function(t4, e4, n3) {
      r2 !== "none" && (t4 === "leave" || r2.indexOf(t4) >= 0) && n3({ type: "updateAxisPointer", currTrigger: t4, x: e4 && e4.offsetX, y: e4 && e4.offsetY });
    });
  }, e2.prototype.remove = function(t3, e3) {
    MM("axisPointer", e3);
  }, e2.prototype.dispose = function(t3, e3) {
    MM("axisPointer", e3);
  }, e2.type = "axisPointer", e2;
})(ag);
function kM(t2, e2) {
  var n2, i2 = [], r2 = t2.seriesIndex;
  if (r2 == null || !(n2 = e2.getSeriesByIndex(r2))) return { point: [] };
  var o2 = n2.getData(), a2 = lo(o2, t2);
  if (a2 == null || a2 < 0 || J(a2)) return { point: [] };
  var s2 = o2.getItemGraphicEl(a2), l2 = n2.coordinateSystem;
  if (n2.getTooltipPosition) i2 = n2.getTooltipPosition(a2) || [];
  else if (l2 && l2.dataToPoint) if (t2.isStacked) {
    var u2 = l2.getBaseAxis(), h2 = l2.getOtherAxis(u2).dim, c2 = u2.dim, p2 = h2 === "x" || h2 === "radius" ? 1 : 0, d2 = o2.mapDimension(c2), f2 = [];
    f2[p2] = o2.get(d2, a2), f2[1 - p2] = o2.get(o2.getCalculationInfo("stackResultDimension"), a2), i2 = l2.dataToPoint(f2) || [];
  } else i2 = l2.dataToPoint(o2.getValues(Z(l2.dimensions, function(t3) {
    return o2.mapDimension(t3);
  }), a2)) || [];
  else if (s2) {
    var g2 = s2.getBoundingRect().clone();
    g2.applyTransform(s2.transform), i2 = [g2.x + g2.width / 2, g2.y + g2.height / 2];
  }
  return { point: i2, el: s2 };
}
var CM = uo();
function IM(t2, e2, n2) {
  var i2 = t2.currTrigger, r2 = [t2.x, t2.y], o2 = t2, a2 = t2.dispatchAction || $(n2.dispatchAction, n2), s2 = e2.getComponent("axisPointer").coordSysAxesInfo;
  if (s2) {
    OM(r2) && (r2 = kM({ seriesIndex: o2.seriesIndex, dataIndex: o2.dataIndex }, e2).point);
    var l2 = OM(r2), u2 = o2.axesInfo, h2 = s2.axesInfo, c2 = i2 === "leave" || OM(r2), p2 = {}, d2 = {}, f2 = { list: [], map: {} }, g2 = { showPointer: Q(AM, d2), showTooltip: Q(LM, f2) };
    Y(s2.coordSysMap, function(t3, e3) {
      var n3 = l2 || t3.containPoint(r2);
      Y(s2.coordSysAxesInfo[e3], function(t4, e4) {
        var i3 = t4.axis, o3 = (function(t5, e5) {
          for (var n4 = 0; n4 < (t5 || []).length; n4++) {
            var i4 = t5[n4];
            if (e5.axis.dim === i4.axisDim && e5.axis.model.componentIndex === i4.axisIndex) return i4;
          }
        })(u2, t4);
        if (!c2 && n3 && (!u2 || o3)) {
          var a3 = o3 && o3.value;
          a3 != null || l2 || (a3 = i3.pointToData(r2)), a3 != null && DM(t4, a3, g2, !1, p2);
        }
      });
    });
    var v2 = {};
    return Y(h2, function(t3, e3) {
      var n3 = t3.linkGroup;
      n3 && !d2[e3] && Y(n3.axesInfo, function(e4, i3) {
        var r3 = d2[i3];
        if (e4 !== t3 && r3) {
          var o3 = r3.value;
          n3.mapper && (o3 = t3.axis.scale.parse(n3.mapper(o3, PM(e4), PM(t3)))), v2[t3.key] = o3;
        }
      });
    }), Y(v2, function(t3, e3) {
      DM(h2[e3], t3, g2, !0, p2);
    }), (function(t3, e3, n3) {
      var i3 = n3.axesInfo = [];
      Y(e3, function(e4, n4) {
        var r3 = e4.axisPointerModel.option, o3 = t3[n4];
        o3 ? (!e4.useHandle && (r3.status = "show"), r3.value = o3.value, r3.seriesDataIndices = (o3.payloadBatch || []).slice()) : !e4.useHandle && (r3.status = "hide"), r3.status === "show" && i3.push({ axisDim: e4.axis.dim, axisIndex: e4.axis.model.componentIndex, value: r3.value });
      });
    })(d2, h2, p2), (function(t3, e3, n3, i3) {
      if (OM(e3) || !t3.list.length) return void i3({ type: "hideTip" });
      var r3 = ((t3.list[0].dataByAxis[0] || {}).seriesDataIndices || [])[0] || {};
      i3({ type: "showTip", escapeConnect: !0, x: e3[0], y: e3[1], tooltipOption: n3.tooltipOption, position: n3.position, dataIndexInside: r3.dataIndexInside, dataIndex: r3.dataIndex, seriesIndex: r3.seriesIndex, dataByCoordSys: t3.list });
    })(f2, r2, t2, a2), (function(t3, e3, n3) {
      var i3 = n3.getZr(), r3 = "axisPointerLastHighlights", o3 = CM(i3)[r3] || {}, a3 = CM(i3)[r3] = {};
      Y(t3, function(t4, e4) {
        var n4 = t4.axisPointerModel.option;
        n4.status === "show" && t4.triggerEmphasis && Y(n4.seriesDataIndices, function(t5) {
          var e5 = t5.seriesIndex + " | " + t5.dataIndex;
          a3[e5] = t5;
        });
      });
      var s3 = [], l3 = [];
      Y(o3, function(t4, e4) {
        !a3[e4] && l3.push(t4);
      }), Y(a3, function(t4, e4) {
        !o3[e4] && s3.push(t4);
      }), l3.length && n3.dispatchAction({ type: "downplay", escapeConnect: !0, notBlur: !0, batch: l3 }), s3.length && n3.dispatchAction({ type: "highlight", escapeConnect: !0, notBlur: !0, batch: s3 });
    })(h2, 0, n2), p2;
  }
}
function DM(t2, e2, n2, i2, r2) {
  var o2 = t2.axis;
  if (!o2.scale.isBlank() && o2.containData(e2)) if (t2.involveSeries) {
    var a2 = (function(t3, e3) {
      var n3 = e3.axis, i3 = n3.dim, r3 = t3, o3 = [], a3 = Number.MAX_VALUE, s3 = -1;
      return Y(e3.seriesModels, function(e4, l3) {
        var u2, h2, c2 = e4.getData().mapDimensionsAll(i3);
        if (e4.getAxisTooltipData) {
          var p2 = e4.getAxisTooltipData(c2, t3, n3);
          h2 = p2.dataIndices, u2 = p2.nestestValue;
        } else {
          if (!(h2 = e4.indicesOfNearest(i3, c2[0], t3, n3.type === "category" ? 0.5 : null)).length) return;
          u2 = e4.getData().get(c2[0], h2[0]);
        }
        if (u2 != null && isFinite(u2)) {
          var d2 = t3 - u2, f2 = Math.abs(d2);
          f2 <= a3 && ((f2 < a3 || d2 >= 0 && s3 < 0) && (a3 = f2, s3 = d2, r3 = u2, o3.length = 0), Y(h2, function(t4) {
            o3.push({ seriesIndex: e4.seriesIndex, dataIndexInside: t4, dataIndex: e4.getData().getRawIndex(t4) });
          }));
        }
      }), { payloadBatch: o3, snapToValue: r3 };
    })(e2, t2), s2 = a2.payloadBatch, l2 = a2.snapToValue;
    s2[0] && r2.seriesIndex == null && H(r2, s2[0]), !i2 && t2.snap && o2.containData(l2) && l2 != null && (e2 = l2), n2.showPointer(t2, e2, s2), n2.showTooltip(t2, a2, l2);
  } else n2.showPointer(t2, e2);
}
function AM(t2, e2, n2, i2) {
  t2[e2.key] = { value: n2, payloadBatch: i2 };
}
function LM(t2, e2, n2, i2) {
  var r2 = n2.payloadBatch, o2 = e2.axis, a2 = o2.model, s2 = e2.axisPointerModel;
  if (e2.triggerTooltip && r2.length) {
    var l2 = e2.coordSys.model, u2 = Ww(l2), h2 = t2.map[u2];
    h2 || (h2 = t2.map[u2] = { coordSysId: l2.id, coordSysIndex: l2.componentIndex, coordSysType: l2.type, coordSysMainType: l2.mainType, dataByAxis: [] }, t2.list.push(h2)), h2.dataByAxis.push({ axisDim: o2.dim, axisIndex: a2.componentIndex, axisType: a2.type, axisId: a2.id, value: i2, valueLabelOpt: { precision: s2.get(["label", "precision"]), formatter: s2.get(["label", "formatter"]) }, seriesDataIndices: r2.slice() });
  }
}
function PM(t2) {
  var e2 = t2.axis.model, n2 = {}, i2 = n2.axisDim = t2.axis.dim;
  return n2.axisIndex = n2[i2 + "AxisIndex"] = e2.componentIndex, n2.axisName = n2[i2 + "AxisName"] = e2.name, n2.axisId = n2[i2 + "AxisId"] = e2.id, n2;
}
function OM(t2) {
  return !t2 || t2[0] == null || isNaN(t2[0]) || t2[1] == null || isNaN(t2[1]);
}
function RM(t2) {
  Uw.registerAxisPointerClass("CartesianAxisPointer", fM), t2.registerComponentModel(mM), t2.registerComponentView(TM), t2.registerPreprocessor(function(t3) {
    if (t3) {
      (!t3.axisPointer || t3.axisPointer.length === 0) && (t3.axisPointer = {});
      var e2 = t3.axisPointer.link;
      e2 && !J(e2) && (t3.axisPointer.link = [e2]);
    }
  }), t2.registerProcessor(t2.PRIORITY.PROCESSOR.STATISTIC, function(t3, e2) {
    t3.getComponent("axisPointer").coordSysAxesInfo = Ew(t3, e2);
  }), t2.registerAction({ type: "updateAxisPointer", event: "updateAxisPointer", update: ":updateAxisPointer" }, IM);
}
function NM(t2) {
  Y_(Jw), Y_(RM);
}
function zM(t2, e2) {
  var n2 = Zc(e2.get("padding")), i2 = e2.getItemStyle(["color", "opacity"]);
  return i2.fill = e2.get("backgroundColor"), new ys({ shape: { x: t2.x - n2[3], y: t2.y - n2[0], width: t2.width + n2[1] + n2[3], height: t2.height + n2[0] + n2[2], r: e2.get("borderRadius") }, style: i2, silent: !0, z2: -1 });
}
var BM = (function(t2) {
  function e2() {
    var n2 = t2 !== null && t2.apply(this, arguments) || this;
    return n2.type = e2.type, n2;
  }
  return _(e2, t2), e2.type = "tooltip", e2.dependencies = ["axisPointer"], e2.defaultOption = { z: 60, show: !0, showContent: !0, trigger: "item", triggerOn: "mousemove|click", alwaysShowContent: !1, renderMode: "auto", confine: null, showDelay: 0, hideDelay: 100, transitionDuration: 0.4, displayTransition: !0, enterable: !1, backgroundColor: wp.color.neutral00, shadowBlur: 10, shadowColor: "rgba(0, 0, 0, .2)", shadowOffsetX: 1, shadowOffsetY: 2, borderRadius: 4, borderWidth: 1, defaultBorderColor: wp.color.border, padding: null, extraCssText: "", axisPointer: { type: "line", axis: "auto", animation: "auto", animationDurationUpdate: 200, animationEasingUpdate: "exponentialOut", crossStyle: { color: wp.color.borderShade, width: 1, type: "dashed", textStyle: {} } }, textStyle: { color: wp.color.tertiary, fontSize: 14 } }, e2;
})(bp);
function EM(t2) {
  var e2 = t2.get("confine");
  return e2 != null ? !!e2 : t2.get("renderMode") === "richText";
}
function FM(t2) {
  if (b.domSupported) {
    for (var e2 = document.documentElement.style, n2 = 0, i2 = t2.length; n2 < i2; n2++) if (t2[n2] in e2) return t2[n2];
  }
}
var VM = FM(["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]);
function HM(t2, e2) {
  if (!t2) return e2;
  e2 = Yc(e2, !0);
  var n2 = t2.indexOf(e2);
  return (t2 = n2 === -1 ? e2 : "-" + t2.slice(0, n2) + "-" + e2).toLowerCase();
}
var WM = HM(FM(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]), "transition"), GM = HM(VM, "transform"), UM = "position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;" + (b.transform3dSupported ? "will-change:transform;" : "");
function XM(t2, e2, n2) {
  var i2 = t2.toFixed(0) + "px", r2 = e2.toFixed(0) + "px";
  if (!b.transformSupported) return n2 ? "top:" + r2 + ";left:" + i2 + ";" : [["top", r2], ["left", i2]];
  var o2 = b.transform3dSupported, a2 = "translate" + (o2 ? "3d" : "") + "(" + i2 + "," + r2 + (o2 ? ",0" : "") + ")";
  return n2 ? "top:0;left:0;" + GM + ":" + a2 + ";" : [["top", 0], ["left", 0], [VM, a2]];
}
function YM(t2, e2, n2, i2) {
  var r2 = [], o2 = t2.get("transitionDuration"), a2 = t2.get("backgroundColor"), s2 = t2.get("shadowBlur"), l2 = t2.get("shadowColor"), u2 = t2.get("shadowOffsetX"), h2 = t2.get("shadowOffsetY"), c2 = t2.getModel("textStyle"), p2 = Zf(t2, "html"), d2 = u2 + "px " + h2 + "px " + s2 + "px " + l2;
  return r2.push("box-shadow:" + d2), e2 && o2 > 0 && r2.push((function(t3, e3, n3) {
    var i3 = "cubic-bezier(0.23,1,0.32,1)", r3 = "", o3 = "";
    return n3 && (o3 = "opacity" + (r3 = " " + t3 / 2 + "s " + i3) + ",visibility" + r3), e3 || (r3 = " " + t3 + "s " + i3, o3 += (o3.length ? "," : "") + (b.transformSupported ? "" + GM + r3 : ",left" + r3 + ",top" + r3)), WM + ":" + o3;
  })(o2, n2, i2)), a2 && r2.push("background-color:" + a2), Y(["width", "color", "radius"], function(e3) {
    var n3 = "border-" + e3, i3 = Yc(n3), o3 = t2.get(i3);
    o3 != null && r2.push(n3 + ":" + o3 + (e3 === "color" ? "" : "px"));
  }), r2.push((function(t3) {
    var e3 = [], n3 = t3.get("fontSize"), i3 = t3.getTextColor();
    i3 && e3.push("color:" + i3), e3.push("font:" + t3.getFont());
    var r3 = ct(t3.get("lineHeight"), Math.round(3 * n3 / 2));
    n3 && e3.push("line-height:" + r3 + "px");
    var o3 = t3.get("textShadowColor"), a3 = t3.get("textShadowBlur") || 0, s3 = t3.get("textShadowOffsetX") || 0, l3 = t3.get("textShadowOffsetY") || 0;
    return o3 && a3 && e3.push("text-shadow:" + s3 + "px " + l3 + "px " + a3 + "px " + o3), Y(["decoration", "align"], function(n4) {
      var i4 = t3.get(n4);
      i4 && e3.push("text-" + n4 + ":" + i4);
    }), e3.join(";");
  })(c2)), p2 != null && r2.push("padding:" + Zc(p2).join("px ") + "px"), r2.join(";") + ";";
}
function ZM(t2, e2, n2, i2, r2) {
  var o2 = e2 && e2.painter;
  if (n2) {
    var a2 = o2 && o2.getViewportRoot();
    a2 && (function(t3, e3, n3, i3, r3) {
      qt(jt2, e3, i3, r3, !0) && qt(t3, n3, jt2[0], jt2[1]);
    })(t2, a2, n2, i2, r2);
  } else {
    t2[0] = i2, t2[1] = r2;
    var s2 = o2 && o2.getViewportRootOffset();
    s2 && (t2[0] += s2.offsetLeft, t2[1] += s2.offsetTop);
  }
  t2[2] = t2[0] / e2.getWidth(), t2[3] = t2[1] / e2.getHeight();
}
var jM = (function() {
  function t2(t3, e2) {
    if (this._show = !1, this._styleCoord = [0, 0, 0, 0], this._enterable = !0, this._alwaysShowContent = !1, this._firstShow = !0, this._longHide = !0, b.wxa) return null;
    var n2 = document.createElement("div");
    n2.domBelongToZr = !0, this.el = n2;
    var i2 = this._zr = t3.getZr(), r2 = e2.appendTo, o2 = r2 && (et(r2) ? document.querySelector(r2) : st(r2) ? r2 : tt(r2) && r2(t3.getDom()));
    ZM(this._styleCoord, i2, o2, t3.getWidth() / 2, t3.getHeight() / 2), (o2 || t3.getDom()).appendChild(n2), this._api = t3, this._container = o2;
    var a2 = this;
    n2.onmouseenter = function() {
      a2._enterable && (clearTimeout(a2._hideTimeout), a2._show = !0), a2._inContent = !0;
    }, n2.onmousemove = function(t4) {
      if (t4 = t4 || window.event, !a2._enterable) {
        var e3 = i2.handler;
        ae(i2.painter.getViewportRoot(), t4, !0), e3.dispatch("mousemove", t4);
      }
    }, n2.onmouseleave = function() {
      a2._inContent = !1, a2._enterable && a2._show && a2.hideLater(a2._hideDelay);
    };
  }
  return t2.prototype.update = function(t3) {
    if (!this._container) {
      var e2 = this._api.getDom(), n2 = (o2 = "position", (a2 = (r2 = e2).currentStyle || document.defaultView && document.defaultView.getComputedStyle(r2)) ? a2[o2] : null), i2 = e2.style;
      i2.position !== "absolute" && n2 !== "absolute" && (i2.position = "relative");
    }
    var r2, o2, a2, s2 = t3.get("alwaysShowContent");
    s2 && this._moveIfResized(), this._alwaysShowContent = s2, this._enableDisplayTransition = t3.get("displayTransition") && t3.get("transitionDuration") > 0, this.el.className = t3.get("className") || "";
  }, t2.prototype.show = function(t3, e2) {
    clearTimeout(this._hideTimeout), clearTimeout(this._longHideTimeout);
    var n2 = this.el, i2 = n2.style, r2 = this._styleCoord;
    n2.innerHTML ? i2.cssText = UM + YM(t3, !this._firstShow, this._longHide, this._enableDisplayTransition) + XM(r2[0], r2[1], !0) + "border-color:" + Qc(e2) + ";" + (t3.get("extraCssText") || "") + ";pointer-events:" + (this._enterable ? "auto" : "none") : i2.display = "none", this._show = !0, this._firstShow = !1, this._longHide = !1;
  }, t2.prototype.setContent = function(t3, e2, n2, i2, r2) {
    var o2 = this.el;
    if (t3 != null) {
      var a2 = "";
      if (et(r2) && n2.get("trigger") === "item" && !EM(n2) && (a2 = (function(t4, e3, n3) {
        if (!et(n3) || n3 === "inside") return "";
        var i3 = t4.get("backgroundColor"), r3 = t4.get("borderWidth");
        e3 = Qc(e3);
        var o3, a3, s3 = (o3 = n3) === "left" ? "right" : o3 === "right" ? "left" : o3 === "top" ? "bottom" : "top", l3 = Math.max(1.5 * Math.round(r3), 6), u2 = "", h2 = GM + ":";
        G(["left", "right"], s3) > -1 ? (u2 += "top:50%", h2 += "translateY(-50%) rotate(" + (a3 = s3 === "left" ? -225 : -45) + "deg)") : (u2 += "left:50%", h2 += "translateX(-50%) rotate(" + (a3 = s3 === "top" ? 225 : 45) + "deg)");
        var c2 = a3 * Math.PI / 180, p2 = l3 + r3, d2 = p2 * Math.abs(Math.cos(c2)) + p2 * Math.abs(Math.sin(c2)), f2 = e3 + " solid " + r3 + "px;";
        return '<div style="' + ["position:absolute;width:" + l3 + "px;height:" + l3 + "px;z-index:-1;", (u2 += ";" + s3 + ":-" + Math.round(100 * ((d2 - Math.SQRT2 * r3) / 2 + Math.SQRT2 * r3 - (d2 - p2) / 2)) / 100 + "px") + ";" + h2 + ";", "border-bottom:" + f2, "border-right:" + f2, "background-color:" + i3 + ";"].join("") + '"></div>';
      })(n2, i2, r2)), et(t3)) o2.innerHTML = t3 + a2;
      else if (t3) {
        o2.innerHTML = "", J(t3) || (t3 = [t3]);
        for (var s2 = 0; s2 < t3.length; s2++) st(t3[s2]) && t3[s2].parentNode !== o2 && o2.appendChild(t3[s2]);
        if (a2 && o2.childNodes.length) {
          var l2 = document.createElement("div");
          l2.innerHTML = a2, o2.appendChild(l2);
        }
      }
    } else o2.innerHTML = "";
  }, t2.prototype.setEnterable = function(t3) {
    this._enterable = t3;
  }, t2.prototype.getSize = function() {
    var t3 = this.el;
    return t3 ? [t3.offsetWidth, t3.offsetHeight] : [0, 0];
  }, t2.prototype.moveTo = function(t3, e2) {
    if (this.el) {
      var n2 = this._styleCoord;
      if (ZM(n2, this._zr, this._container, t3, e2), n2[0] != null && n2[1] != null) {
        var i2 = this.el.style;
        Y(XM(n2[0], n2[1]), function(t4) {
          i2[t4[0]] = t4[1];
        });
      }
    }
  }, t2.prototype._moveIfResized = function() {
    var t3 = this._styleCoord[2], e2 = this._styleCoord[3];
    this.moveTo(t3 * this._zr.getWidth(), e2 * this._zr.getHeight());
  }, t2.prototype.hide = function() {
    var t3 = this, e2 = this.el.style;
    this._enableDisplayTransition ? (e2.visibility = "hidden", e2.opacity = "0") : e2.display = "none", b.transform3dSupported && (e2.willChange = ""), this._show = !1, this._longHideTimeout = setTimeout(function() {
      return t3._longHide = !0;
    }, 500);
  }, t2.prototype.hideLater = function(t3) {
    !this._show || this._inContent && this._enterable || this._alwaysShowContent || (t3 ? (this._hideDelay = t3, this._show = !1, this._hideTimeout = setTimeout($(this.hide, this), t3)) : this.hide());
  }, t2.prototype.isShow = function() {
    return this._show;
  }, t2.prototype.dispose = function() {
    clearTimeout(this._hideTimeout), clearTimeout(this._longHideTimeout);
    var t3 = this._zr;
    (function(t4, e3) {
      function n3(t5) {
        var e4 = t5[Zt];
        e4 && (e4.clearMarkers && e4.clearMarkers(), delete t5[Zt]);
      }
      t4 && n3(t4), e3 && n3(e3);
    })(t3 && t3.painter && t3.painter.getViewportRoot(), this._container);
    var e2 = this.el;
    if (e2) {
      e2.onmouseenter = e2.onmousemove = e2.onmouseleave = null;
      var n2 = e2.parentNode;
      n2 && n2.removeChild(e2);
    }
    this.el = this._container = null;
  }, t2;
})(), qM = (function() {
  function t2(t3) {
    this._show = !1, this._styleCoord = [0, 0, 0, 0], this._alwaysShowContent = !1, this._enterable = !0, this._zr = t3.getZr(), QM(this._styleCoord, this._zr, t3.getWidth() / 2, t3.getHeight() / 2);
  }
  return t2.prototype.update = function(t3) {
    var e2 = t3.get("alwaysShowContent");
    e2 && this._moveIfResized(), this._alwaysShowContent = e2;
  }, t2.prototype.show = function() {
    this._hideTimeout && clearTimeout(this._hideTimeout), this.el.show(), this._show = !0;
  }, t2.prototype.setContent = function(t3, e2, n2, i2, r2) {
    var o2 = this;
    rt(t3) && jr(""), this.el && this._zr.remove(this.el);
    var a2 = n2.getModel("textStyle");
    this.el = new bs({ style: { rich: e2.richTextStyles, text: t3, lineHeight: 22, borderWidth: 1, borderColor: i2, textShadowColor: a2.get("textShadowColor"), fill: n2.get(["textStyle", "color"]), padding: Zf(n2, "richText"), verticalAlign: "top", align: "left" }, z: n2.get("z") }), Y(["backgroundColor", "borderRadius", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"], function(t4) {
      o2.el.style[t4] = n2.get(t4);
    }), Y(["textShadowBlur", "textShadowOffsetX", "textShadowOffsetY"], function(t4) {
      o2.el.style[t4] = a2.get(t4) || 0;
    }), this._zr.add(this.el);
    var s2 = this;
    this.el.on("mouseover", function() {
      s2._enterable && (clearTimeout(s2._hideTimeout), s2._show = !0), s2._inContent = !0;
    }), this.el.on("mouseout", function() {
      s2._enterable && s2._show && s2.hideLater(s2._hideDelay), s2._inContent = !1;
    });
  }, t2.prototype.setEnterable = function(t3) {
    this._enterable = t3;
  }, t2.prototype.getSize = function() {
    var t3 = this.el, e2 = this.el.getBoundingRect(), n2 = $M(t3.style);
    return [e2.width + n2.left + n2.right, e2.height + n2.top + n2.bottom];
  }, t2.prototype.moveTo = function(t3, e2) {
    var n2 = this.el;
    if (n2) {
      var i2 = this._styleCoord;
      QM(i2, this._zr, t3, e2), t3 = i2[0], e2 = i2[1];
      var r2 = n2.style, o2 = KM(r2.borderWidth || 0), a2 = $M(r2);
      n2.x = t3 + o2 + a2.left, n2.y = e2 + o2 + a2.top, n2.markRedraw();
    }
  }, t2.prototype._moveIfResized = function() {
    var t3 = this._styleCoord[2], e2 = this._styleCoord[3];
    this.moveTo(t3 * this._zr.getWidth(), e2 * this._zr.getHeight());
  }, t2.prototype.hide = function() {
    this.el && this.el.hide(), this._show = !1;
  }, t2.prototype.hideLater = function(t3) {
    !this._show || this._inContent && this._enterable || this._alwaysShowContent || (t3 ? (this._hideDelay = t3, this._show = !1, this._hideTimeout = setTimeout($(this.hide, this), t3)) : this.hide());
  }, t2.prototype.isShow = function() {
    return this._show;
  }, t2.prototype.dispose = function() {
    this._zr.remove(this.el);
  }, t2;
})();
function KM(t2) {
  return Math.max(0, t2);
}
function $M(t2) {
  var e2 = KM(t2.shadowBlur || 0), n2 = KM(t2.shadowOffsetX || 0), i2 = KM(t2.shadowOffsetY || 0);
  return { left: KM(e2 - n2), right: KM(e2 + n2), top: KM(e2 - i2), bottom: KM(e2 + i2) };
}
function QM(t2, e2, n2, i2) {
  t2[0] = n2, t2[1] = i2, t2[2] = t2[0] / e2.getWidth(), t2[3] = t2[1] / e2.getHeight();
}
var JM = new ys({ shape: { x: -1, y: -1, width: 2, height: 2 } }), tT = (function(t2) {
  function e2() {
    var n2 = t2 !== null && t2.apply(this, arguments) || this;
    return n2.type = e2.type, n2;
  }
  return _(e2, t2), e2.prototype.init = function(t3, e3) {
    if (!b.node && e3.getDom()) {
      var n2, i2 = t3.getComponent("tooltip"), r2 = this._renderMode = (n2 = i2.get("renderMode")) === "auto" ? b.domSupported ? "html" : "richText" : n2 || "html";
      this._tooltipContent = r2 === "richText" ? new qM(e3) : new jM(e3, { appendTo: i2.get("appendToBody", !0) ? "body" : i2.get("appendTo", !0) });
    }
  }, e2.prototype.render = function(t3, e3, n2) {
    if (!b.node && n2.getDom()) {
      this.group.removeAll(), this._tooltipModel = t3, this._ecModel = e3, this._api = n2;
      var i2 = this._tooltipContent;
      i2.update(t3), i2.setEnterable(t3.get("enterable")), this._initGlobalListener(), this._keepShow(), this._renderMode !== "richText" && t3.get("transitionDuration") ? xg(this, "_updatePosition", 50, "fixRate") : bg(this, "_updatePosition");
    }
  }, e2.prototype._initGlobalListener = function() {
    var t3 = this._tooltipModel.get("triggerOn");
    bM("itemTooltip", this._api, $(function(e3, n2, i2) {
      t3 !== "none" && (t3.indexOf(e3) >= 0 ? this._tryShow(n2, i2) : e3 === "leave" && this._hide(i2));
    }, this));
  }, e2.prototype._keepShow = function() {
    var t3 = this._tooltipModel, e3 = this._ecModel, n2 = this._api, i2 = t3.get("triggerOn");
    if (this._lastX != null && this._lastY != null && i2 !== "none" && i2 !== "click") {
      var r2 = this;
      clearTimeout(this._refreshUpdateTimeout), this._refreshUpdateTimeout = setTimeout(function() {
        !n2.isDisposed() && r2.manuallyShowTip(t3, e3, n2, { x: r2._lastX, y: r2._lastY, dataByCoordSys: r2._lastDataByCoordSys });
      });
    }
  }, e2.prototype.manuallyShowTip = function(t3, e3, n2, i2) {
    if (i2.from !== this.uid && !b.node && n2.getDom()) {
      var r2 = nT(i2, n2);
      this._ticket = "";
      var o2 = i2.dataByCoordSys, a2 = (function(t4, e4, n3) {
        var i3 = po(t4).queryOptionMap, r3 = i3.keys()[0];
        if (!(!r3 || r3 === "series")) {
          var o3 = vo(e4, r3, i3.get(r3), { useDefault: !1, enableAll: !1, enableNone: !1 }), a3 = o3.models[0];
          if (a3) {
            var s3, l3 = n3.getViewOfComponentModel(a3);
            if (l3.group.traverse(function(e5) {
              var n4 = Os(e5).tooltipConfig;
              if (n4 && n4.name === t4.name) return s3 = e5, !0;
            }), s3) return { componentMainType: r3, componentIndex: a3.componentIndex, el: s3 };
          }
        }
      })(i2, e3, n2);
      if (a2) {
        var s2 = a2.el.getBoundingRect().clone();
        s2.applyTransform(a2.el.transform), this._tryShow({ offsetX: s2.x + s2.width / 2, offsetY: s2.y + s2.height / 2, target: a2.el, position: i2.position, positionDefault: "bottom" }, r2);
      } else if (i2.tooltip && i2.x != null && i2.y != null) {
        var l2 = JM;
        l2.x = i2.x, l2.y = i2.y, l2.update(), Os(l2).tooltipConfig = { name: null, option: i2.tooltip }, this._tryShow({ offsetX: i2.x, offsetY: i2.y, target: l2 }, r2);
      } else if (o2) this._tryShow({ offsetX: i2.x, offsetY: i2.y, position: i2.position, dataByCoordSys: o2, tooltipOption: i2.tooltipOption }, r2);
      else if (i2.seriesIndex != null) {
        if (this._manuallyAxisShowTip(t3, e3, n2, i2)) return;
        var u2 = kM(i2, e3), h2 = u2.point[0], c2 = u2.point[1];
        h2 != null && c2 != null && this._tryShow({ offsetX: h2, offsetY: c2, target: u2.el, position: i2.position, positionDefault: "bottom" }, r2);
      } else i2.x != null && i2.y != null && (n2.dispatchAction({ type: "updateAxisPointer", x: i2.x, y: i2.y }), this._tryShow({ offsetX: i2.x, offsetY: i2.y, position: i2.position, target: n2.getZr().findHover(i2.x, i2.y).target }, r2));
    }
  }, e2.prototype.manuallyHideTip = function(t3, e3, n2, i2) {
    var r2 = this._tooltipContent;
    this._tooltipModel && r2.hideLater(this._tooltipModel.get("hideDelay")), this._lastX = this._lastY = this._lastDataByCoordSys = null, i2.from !== this.uid && this._hide(nT(i2, n2));
  }, e2.prototype._manuallyAxisShowTip = function(t3, e3, n2, i2) {
    var r2 = i2.seriesIndex, o2 = i2.dataIndex, a2 = e3.getComponent("axisPointer").coordSysAxesInfo;
    if (r2 != null && o2 != null && a2 != null) {
      var s2 = e3.getSeriesByIndex(r2);
      if (s2 && eT([s2.getData().getItemModel(o2), s2, (s2.coordinateSystem || {}).model], this._tooltipModel).get("trigger") === "axis") return n2.dispatchAction({ type: "updateAxisPointer", seriesIndex: r2, dataIndex: o2, position: i2.position }), !0;
    }
  }, e2.prototype._tryShow = function(t3, e3) {
    var n2 = t3.target;
    if (this._tooltipModel) {
      this._lastX = t3.offsetX, this._lastY = t3.offsetY;
      var i2 = t3.dataByCoordSys;
      if (i2 && i2.length) this._showAxisTooltip(i2, t3);
      else if (n2) {
        var r2, o2;
        if (Os(n2).ssrType === "legend") return;
        this._lastDataByCoordSys = null, av(n2, function(t4) {
          if (t4.tooltipDisabled) return r2 = o2 = null, !0;
          r2 || o2 || (Os(t4).dataIndex != null ? r2 = t4 : Os(t4).tooltipConfig != null && (o2 = t4));
        }, !0), r2 ? this._showSeriesItemTooltip(t3, r2, e3) : o2 ? this._showComponentItemTooltip(t3, o2, e3) : this._hide(e3);
      } else this._lastDataByCoordSys = null, this._hide(e3);
    }
  }, e2.prototype._showOrMove = function(t3, e3) {
    var n2 = t3.get("showDelay");
    e3 = $(e3, this), clearTimeout(this._showTimout), n2 > 0 ? this._showTimout = setTimeout(e3, n2) : e3();
  }, e2.prototype._showAxisTooltip = function(t3, e3) {
    var n2 = this._ecModel, i2 = this._tooltipModel, r2 = [e3.offsetX, e3.offsetY], o2 = eT([e3.tooltipOption], i2), a2 = this._renderMode, s2 = [], l2 = Ef("section", { blocks: [], noHeader: !0 }), u2 = [], h2 = new jf();
    Y(t3, function(t4) {
      Y(t4.dataByAxis, function(t5) {
        var e4 = n2.getComponent(t5.axisDim + "Axis", t5.axisIndex), r3 = t5.value;
        if (e4 && r3 != null) {
          var o3 = pM(r3, e4.axis, n2, t5.seriesDataIndices, t5.valueLabelOpt), c3 = Ef("section", { header: o3, noHeader: !vt(o3), sortBlocks: !0, blocks: [] });
          l2.blocks.push(c3), Y(t5.seriesDataIndices, function(l3) {
            var p3 = n2.getSeriesByIndex(l3.seriesIndex), d3 = l3.dataIndexInside, f3 = p3.getDataParams(d3);
            if (!(f3.dataIndex < 0)) {
              f3.axisDim = t5.axisDim, f3.axisIndex = t5.axisIndex, f3.axisType = t5.axisType, f3.axisId = t5.axisId, f3.axisValue = N_(e4.axis, { value: r3 }), f3.axisValueLabel = o3, f3.marker = h2.makeTooltipMarker("item", Qc(f3.color), a2);
              var g3 = of(p3.formatTooltip(d3, !0, null)), v2 = g3.frag;
              if (v2) {
                var y2 = eT([p3], i2).get("valueFormatter");
                c3.blocks.push(y2 ? H({ valueFormatter: y2 }, v2) : v2);
              }
              g3.text && u2.push(g3.text), s2.push(f3);
            }
          });
        }
      });
    }), l2.blocks.reverse(), u2.reverse();
    var c2 = e3.position, p2 = o2.get("order"), d2 = Uf(l2, h2, a2, p2, n2.get("useUTC"), o2.get("textStyle"));
    d2 && u2.unshift(d2);
    var f2 = a2 === "richText" ? `

` : "<br/>", g2 = u2.join(f2);
    this._showOrMove(o2, function() {
      this._updateContentNotChangedOnAxis(t3, s2) ? this._updatePosition(o2, c2, r2[0], r2[1], this._tooltipContent, s2) : this._showTooltipContent(o2, g2, s2, Math.random() + "", r2[0], r2[1], c2, null, h2);
    });
  }, e2.prototype._showSeriesItemTooltip = function(t3, e3, n2) {
    var i2 = this._ecModel, r2 = Os(e3), o2 = r2.seriesIndex, a2 = i2.getSeriesByIndex(o2), s2 = r2.dataModel || a2, l2 = r2.dataIndex, u2 = r2.dataType, h2 = s2.getData(u2), c2 = this._renderMode, p2 = t3.positionDefault, d2 = eT([h2.getItemModel(l2), s2, a2 && (a2.coordinateSystem || {}).model], this._tooltipModel, p2 ? { position: p2 } : null), f2 = d2.get("trigger");
    if (f2 == null || f2 === "item") {
      var g2 = s2.getDataParams(l2, u2), v2 = new jf();
      g2.marker = v2.makeTooltipMarker("item", Qc(g2.color), c2);
      var y2 = of(s2.formatTooltip(l2, !1, u2)), m2 = d2.get("order"), _2 = d2.get("valueFormatter"), x2 = y2.frag, b2 = x2 ? Uf(_2 ? H({ valueFormatter: _2 }, x2) : x2, v2, c2, m2, i2.get("useUTC"), d2.get("textStyle")) : y2.text, w2 = "item_" + s2.name + "_" + l2;
      this._showOrMove(d2, function() {
        this._showTooltipContent(d2, b2, g2, w2, t3.offsetX, t3.offsetY, t3.position, t3.target, v2);
      }), n2({ type: "showTip", dataIndexInside: l2, dataIndex: h2.getRawIndex(l2), seriesIndex: o2, from: this.uid });
    }
  }, e2.prototype._showComponentItemTooltip = function(t3, e3, n2) {
    var i2 = this._renderMode === "html", r2 = Os(e3), o2 = r2.tooltipConfig.option || {}, a2 = o2.encodeHTMLContent;
    et(o2) && (o2 = { content: o2, formatter: o2 }, a2 = !0), a2 && i2 && o2.content && ((o2 = F(o2)).content = Jt(o2.content));
    var s2 = [o2], l2 = this._ecModel.getComponent(r2.componentMainType, r2.componentIndex);
    l2 && s2.push(l2), s2.push({ formatter: o2.content });
    var u2 = t3.positionDefault, h2 = eT(s2, this._tooltipModel, u2 ? { position: u2 } : null), c2 = h2.get("content"), p2 = Math.random() + "", d2 = new jf();
    this._showOrMove(h2, function() {
      var n3 = F(h2.get("formatterParams") || {});
      this._showTooltipContent(h2, c2, n3, p2, t3.offsetX, t3.offsetY, t3.position, e3, d2);
    }), n2({ type: "showTip", from: this.uid });
  }, e2.prototype._showTooltipContent = function(t3, e3, n2, i2, r2, o2, a2, s2, l2) {
    if (this._ticket = "", t3.get("showContent") && t3.get("show")) {
      var u2 = this._tooltipContent;
      u2.setEnterable(t3.get("enterable"));
      var h2 = t3.get("formatter");
      a2 = a2 || t3.get("position");
      var c2 = e3, p2 = this._getNearestPoint([r2, o2], n2, t3.get("trigger"), t3.get("borderColor"), t3.get("defaultBorderColor", !0)).color;
      if (h2) if (et(h2)) {
        var d2 = t3.ecModel.get("useUTC"), f2 = J(n2) ? n2[0] : n2;
        c2 = h2, f2 && f2.axisType && f2.axisType.indexOf("time") >= 0 && (c2 = Ic(f2.axisValue, c2, d2)), c2 = $c(c2, n2, !0);
      } else if (tt(h2)) {
        var g2 = $(function(e4, i3) {
          e4 === this._ticket && (u2.setContent(i3, l2, t3, p2, a2), this._updatePosition(t3, a2, r2, o2, u2, n2, s2));
        }, this);
        this._ticket = i2, c2 = h2(n2, i2, g2);
      } else c2 = h2;
      u2.setContent(c2, l2, t3, p2, a2), u2.show(t3, p2), this._updatePosition(t3, a2, r2, o2, u2, n2, s2);
    }
  }, e2.prototype._getNearestPoint = function(t3, e3, n2, i2, r2) {
    return n2 === "axis" || J(e3) ? { color: i2 || r2 } : J(e3) ? void 0 : { color: i2 || e3.color || e3.borderColor };
  }, e2.prototype._updatePosition = function(t3, e3, n2, i2, r2, o2, a2) {
    var s2 = this._api.getWidth(), l2 = this._api.getHeight();
    e3 = e3 || t3.get("position");
    var u2 = r2.getSize(), h2 = t3.get("align"), c2 = t3.get("verticalAlign"), p2 = a2 && a2.getBoundingRect().clone();
    if (a2 && p2.applyTransform(a2.transform), tt(e3) && (e3 = e3([n2, i2], o2, r2.el, p2, { viewSize: [s2, l2], contentSize: u2.slice() })), J(e3)) n2 = Ar(e3[0], s2), i2 = Ar(e3[1], l2);
    else if (rt(e3)) {
      var d2 = e3;
      d2.width = u2[0], d2.height = u2[1];
      var f2 = fp(d2, { width: s2, height: l2 });
      n2 = f2.x, i2 = f2.y, h2 = null, c2 = null;
    } else if (et(e3) && a2) {
      var g2 = (function(t4, e4, n3, i3) {
        var r3 = n3[0], o3 = n3[1], a3 = Math.ceil(Math.SQRT2 * i3) + 8, s3 = 0, l3 = 0, u3 = e4.width, h3 = e4.height;
        switch (t4) {
          case "inside":
            s3 = e4.x + u3 / 2 - r3 / 2, l3 = e4.y + h3 / 2 - o3 / 2;
            break;
          case "top":
            s3 = e4.x + u3 / 2 - r3 / 2, l3 = e4.y - o3 - a3;
            break;
          case "bottom":
            s3 = e4.x + u3 / 2 - r3 / 2, l3 = e4.y + h3 + a3;
            break;
          case "left":
            s3 = e4.x - r3 - a3, l3 = e4.y + h3 / 2 - o3 / 2;
            break;
          case "right":
            s3 = e4.x + u3 + a3, l3 = e4.y + h3 / 2 - o3 / 2;
        }
        return [s3, l3];
      })(e3, p2, u2, t3.get("borderWidth"));
      n2 = g2[0], i2 = g2[1];
    } else
      g2 = (function(t4, e4, n3, i3, r3, o3, a3) {
        var s3 = n3.getSize(), l3 = s3[0], u3 = s3[1];
        return o3 != null && (t4 + l3 + o3 + 2 > i3 ? t4 -= l3 + o3 : t4 += o3), a3 != null && (e4 + u3 + a3 > r3 ? e4 -= u3 + a3 : e4 += a3), [t4, e4];
      })(n2, i2, r2, s2, l2, h2 ? null : 20, c2 ? null : 20), n2 = g2[0], i2 = g2[1];
    h2 && (n2 -= iT(h2) ? u2[0] / 2 : h2 === "right" ? u2[0] : 0), c2 && (i2 -= iT(c2) ? u2[1] / 2 : c2 === "bottom" ? u2[1] : 0), EM(t3) && (g2 = (function(t4, e4, n3, i3, r3) {
      var o3 = n3.getSize(), a3 = o3[0], s3 = o3[1];
      return t4 = Math.min(t4 + a3, i3) - a3, e4 = Math.min(e4 + s3, r3) - s3, t4 = Math.max(t4, 0), e4 = Math.max(e4, 0), [t4, e4];
    })(n2, i2, r2, s2, l2), n2 = g2[0], i2 = g2[1]), r2.moveTo(n2, i2);
  }, e2.prototype._updateContentNotChangedOnAxis = function(t3, e3) {
    var n2 = this._lastDataByCoordSys, i2 = this._cbParamsList, r2 = !!n2 && n2.length === t3.length;
    return r2 && Y(n2, function(n3, o2) {
      var a2 = n3.dataByAxis || [], s2 = (t3[o2] || {}).dataByAxis || [];
      (r2 = r2 && a2.length === s2.length) && Y(a2, function(t4, n4) {
        var o3 = s2[n4] || {}, a3 = t4.seriesDataIndices || [], l2 = o3.seriesDataIndices || [];
        (r2 = r2 && t4.value === o3.value && t4.axisType === o3.axisType && t4.axisId === o3.axisId && a3.length === l2.length) && Y(a3, function(t5, e4) {
          var n5 = l2[e4];
          r2 = r2 && t5.seriesIndex === n5.seriesIndex && t5.dataIndex === n5.dataIndex;
        }), i2 && Y(t4.seriesDataIndices, function(t5) {
          var n5 = t5.seriesIndex, o4 = e3[n5], a4 = i2[n5];
          o4 && a4 && a4.data !== o4.data && (r2 = !1);
        });
      });
    }), this._lastDataByCoordSys = t3, this._cbParamsList = e3, !!r2;
  }, e2.prototype._hide = function(t3) {
    this._lastDataByCoordSys = null, t3({ type: "hideTip", from: this.uid });
  }, e2.prototype.dispose = function(t3, e3) {
    !b.node && e3.getDom() && (bg(this, "_updatePosition"), this._tooltipContent.dispose(), MM("itemTooltip", e3));
  }, e2.type = "tooltip", e2;
})(ag);
function eT(t2, e2, n2) {
  var i2, r2 = e2.ecModel;
  n2 ? (i2 = new ec(n2, r2, r2), i2 = new ec(e2.option, i2, r2)) : i2 = e2;
  for (var o2 = t2.length - 1; o2 >= 0; o2--) {
    var a2 = t2[o2];
    a2 && (a2 instanceof ec && (a2 = a2.get("tooltip", !0)), et(a2) && (a2 = { formatter: a2 }), a2 && (i2 = new ec(a2, i2, r2)));
  }
  return i2;
}
function nT(t2, e2) {
  return t2.dispatchAction || $(e2.dispatchAction, e2);
}
function iT(t2) {
  return t2 === "center" || t2 === "middle";
}
function rT(t2) {
  Y_(RM), t2.registerComponentModel(BM), t2.registerComponentView(tT), t2.registerAction({ type: "showTip", event: "showTip", update: "tooltip:manuallyShowTip" }, Ct), t2.registerAction({ type: "hideTip", event: "hideTip", update: "tooltip:manuallyHideTip" }, Ct);
}
function oT(t2) {
  Qr(t2, "label", ["show"]);
}
var aT = uo(), sT = (function(t2) {
  function e2() {
    var n2 = t2 !== null && t2.apply(this, arguments) || this;
    return n2.type = e2.type, n2.createdBySelf = !1, n2.preventAutoZ = !0, n2;
  }
  return _(e2, t2), e2.prototype.init = function(t3, e3, n2) {
    this.mergeDefaultAndTheme(t3, n2), this._mergeOption(t3, n2, !1, !0);
  }, e2.prototype.isAnimationEnabled = function() {
    if (b.node) return !1;
    var t3 = this.__hostSeries;
    return this.getShallow("animation") && t3 && t3.isAnimationEnabled();
  }, e2.prototype.mergeOption = function(t3, e3) {
    this._mergeOption(t3, e3, !1, !1);
  }, e2.prototype._mergeOption = function(t3, e3, n2, i2) {
    var r2 = this.mainType;
    n2 || e3.eachSeries(function(t4) {
      var n3 = t4.get(this.mainType, !0), o2 = aT(t4)[r2];
      n3 && n3.data ? (o2 ? o2._mergeOption(n3, e3, !0) : (i2 && oT(n3), Y(n3.data, function(t5) {
        t5 instanceof Array ? (oT(t5[0]), oT(t5[1])) : oT(t5);
      }), H(o2 = this.createMarkerModelFromSeries(n3, this, e3), { mainType: this.mainType, seriesIndex: t4.seriesIndex, name: t4.name, createdBySelf: !0 }), o2.__hostSeries = t4), aT(t4)[r2] = o2) : aT(t4)[r2] = null;
    }, this);
  }, e2.prototype.formatTooltip = function(t3, e3, n2) {
    var i2 = this.getData(), r2 = this.getRawValue(t3), o2 = i2.getName(t3);
    return Ef("section", { header: this.name, blocks: [Ef("nameValue", { name: o2, value: r2, noName: !o2, noValue: r2 == null })] });
  }, e2.prototype.getData = function() {
    return this._data;
  }, e2.prototype.setData = function(t3) {
    this._data = t3;
  }, e2.prototype.getDataParams = function(t3, e3) {
    var n2 = rf.prototype.getDataParams.call(this, t3, e3), i2 = this.__hostSeries;
    return i2 && (n2.seriesId = i2.id, n2.seriesName = i2.name, n2.seriesType = i2.subType), n2;
  }, e2.getMarkerModelFromSeries = function(t3, e3) {
    return aT(t3)[e3];
  }, e2.type = "marker", e2.dependencies = ["series", "grid", "polar", "geo"], e2;
})(bp);
function lT(t2, e2, n2, i2, r2, o2, a2) {
  var s2 = [], l2 = zm(e2, r2) ? e2.getCalculationInfo("stackResultDimension") : r2, u2 = dT(e2, l2, t2), h2 = e2.hostModel.indicesOfNearest(n2, l2, u2)[0];
  s2[o2] = e2.get(i2, h2), s2[a2] = e2.get(l2, h2);
  var c2 = e2.get(r2, h2), p2 = Rr(e2.get(r2, h2));
  return (p2 = Math.min(p2, 20)) >= 0 && (s2[a2] = +s2[a2].toFixed(p2)), [s2, c2];
}
U(sT, rf.prototype);
var uT = { min: Q(lT, "min"), max: Q(lT, "max"), average: Q(lT, "average"), median: Q(lT, "median") };
function hT(t2, e2) {
  if (e2) {
    var n2 = t2.getData(), i2 = t2.coordinateSystem, r2 = i2 && i2.dimensions;
    if (!(function(t3) {
      return !isNaN(parseFloat(t3.x)) && !isNaN(parseFloat(t3.y));
    })(e2) && !J(e2.coord) && J(r2)) {
      var o2 = cT(e2, n2, i2, t2);
      if ((e2 = F(e2)).type && uT[e2.type] && o2.baseAxis && o2.valueAxis) {
        var a2 = G(r2, o2.baseAxis.dim), s2 = G(r2, o2.valueAxis.dim), l2 = uT[e2.type](n2, o2.valueAxis.dim, o2.baseDataDim, o2.valueDataDim, a2, s2);
        e2.coord = l2[0], e2.value = l2[1];
      } else e2.coord = [e2.xAxis != null ? e2.xAxis : e2.radiusAxis, e2.yAxis != null ? e2.yAxis : e2.angleAxis];
    }
    if (e2.coord != null && J(r2)) for (var u2 = e2.coord, h2 = 0; h2 < 2; h2++) uT[u2[h2]] && (u2[h2] = dT(n2, n2.mapDimension(r2[h2]), u2[h2]));
    else {
      e2.coord = [];
      var c2 = t2.getBaseAxis();
      if (c2 && e2.type && uT[e2.type]) {
        var p2 = i2.getOtherAxis(c2);
        p2 && (e2.value = dT(n2, n2.mapDimension(p2.dim), e2.type));
      }
    }
    return e2;
  }
}
function cT(t2, e2, n2, i2) {
  var r2 = {};
  return t2.valueIndex != null || t2.valueDim != null ? (r2.valueDataDim = t2.valueIndex != null ? e2.getDimension(t2.valueIndex) : t2.valueDim, r2.valueAxis = n2.getAxis((function(t3, e3) {
    var n3 = t3.getData().getDimensionInfo(e3);
    return n3 && n3.coordDim;
  })(i2, r2.valueDataDim)), r2.baseAxis = n2.getOtherAxis(r2.valueAxis), r2.baseDataDim = e2.mapDimension(r2.baseAxis.dim)) : (r2.baseAxis = i2.getBaseAxis(), r2.valueAxis = n2.getOtherAxis(r2.baseAxis), r2.baseDataDim = e2.mapDimension(r2.baseAxis.dim), r2.valueDataDim = e2.mapDimension(r2.valueAxis.dim)), r2;
}
function pT(t2, e2) {
  return !(t2 && t2.containData && e2.coord && !(function(t3) {
    return !(isNaN(parseFloat(t3.x)) && isNaN(parseFloat(t3.y)));
  })(e2)) || t2.containData(e2.coord);
}
function dT(t2, e2, n2) {
  if (n2 === "average") {
    var i2 = 0, r2 = 0;
    return t2.each(e2, function(t3, e3) {
      isNaN(t3) || (i2 += t3, r2++);
    }), i2 / r2;
  }
  return n2 === "median" ? t2.getMedian(e2) : t2.getDataExtent(e2)[n2 === "max" ? 1 : 0];
}
var fT = uo(), gT = (function(t2) {
  function e2() {
    var n2 = t2 !== null && t2.apply(this, arguments) || this;
    return n2.type = e2.type, n2;
  }
  return _(e2, t2), e2.prototype.init = function() {
    this.markerGroupMap = St();
  }, e2.prototype.render = function(t3, e3, n2) {
    var i2 = this, r2 = this.markerGroupMap;
    r2.each(function(t4) {
      fT(t4).keep = !1;
    }), e3.eachSeries(function(t4) {
      var r3 = sT.getMarkerModelFromSeries(t4, i2.type);
      r3 && i2.renderSeries(t4, r3, e3, n2);
    }), r2.each(function(t4) {
      !fT(t4).keep && i2.group.remove(t4.group);
    }), (function(t4, e4, n3) {
      t4.eachSeries(function(t5) {
        var i3 = sT.getMarkerModelFromSeries(t5, n3), r3 = e4.get(t5.id);
        if (i3 && r3 && r3.group) {
          var o2 = Ch(i3), a2 = o2.z, s2 = o2.zlevel;
          Ih(r3.group, a2, s2);
        }
      });
    })(e3, r2, this.type);
  }, e2.prototype.markKeep = function(t3) {
    fT(t3).keep = !0;
  }, e2.prototype.toggleBlurSeries = function(t3, e3) {
    var n2 = this;
    Y(t3, function(t4) {
      var i2 = sT.getMarkerModelFromSeries(t4, n2.type);
      i2 && i2.getData().eachItemGraphicEl(function(t5) {
        t5 && (e3 ? ul(t5) : hl(t5));
      });
    });
  }, e2.type = "marker", e2;
})(ag), vT = (function(t2) {
  function e2() {
    var n2 = t2 !== null && t2.apply(this, arguments) || this;
    return n2.type = e2.type, n2;
  }
  return _(e2, t2), e2.prototype.createMarkerModelFromSeries = function(t3, n2, i2) {
    return new e2(t3, n2, i2);
  }, e2.type = "markLine", e2.defaultOption = { z: 5, symbol: ["circle", "arrow"], symbolSize: [8, 16], symbolOffset: 0, precision: 2, tooltip: { trigger: "item" }, label: { show: !0, position: "end", distance: 5 }, lineStyle: { type: "dashed" }, emphasis: { label: { show: !0 }, lineStyle: { width: 3 } }, animationEasing: "linear" }, e2;
})(sT), yT = uo(), mT = function(t2, e2, n2, i2) {
  var r2, o2 = t2.getData();
  if (J(i2)) r2 = i2;
  else {
    var a2 = i2.type;
    if (a2 === "min" || a2 === "max" || a2 === "average" || a2 === "median" || i2.xAxis != null || i2.yAxis != null) {
      var s2 = void 0, l2 = void 0;
      if (i2.yAxis != null || i2.xAxis != null) s2 = e2.getAxis(i2.yAxis != null ? "y" : "x"), l2 = ht2(i2.yAxis, i2.xAxis);
      else {
        var u2 = cT(i2, o2, e2, t2);
        s2 = u2.valueAxis, l2 = dT(o2, Bm(o2, u2.valueDataDim), a2);
      }
      var h2 = s2.dim === "x" ? 0 : 1, c2 = 1 - h2, p2 = F(i2), d2 = { coord: [] };
      p2.type = null, p2.coord = [], p2.coord[c2] = -1 / 0, d2.coord[c2] = 1 / 0;
      var f2 = n2.get("precision");
      f2 >= 0 && it(l2) && (l2 = +l2.toFixed(Math.min(f2, 20))), p2.coord[h2] = d2.coord[h2] = l2, r2 = [p2, d2, { type: a2, valueIndex: i2.valueIndex, value: l2 }];
    } else r2 = [];
  }
  var g2 = [hT(t2, r2[0]), hT(t2, r2[1]), H({}, r2[2])];
  return g2[2].type = g2[2].type || null, V(g2[2], g2[0]), V(g2[2], g2[1]), g2;
};
function _T(t2) {
  return !isNaN(t2) && !isFinite(t2);
}
function xT(t2, e2, n2, i2) {
  var r2 = 1 - t2, o2 = i2.dimensions[t2];
  return _T(e2[r2]) && _T(n2[r2]) && e2[t2] === n2[t2] && i2.getAxis(o2).containData(e2[t2]);
}
function bT(t2, e2) {
  if (t2.type === "cartesian2d") {
    var n2 = e2[0].coord, i2 = e2[1].coord;
    if (n2 && i2 && (xT(1, n2, i2, t2) || xT(0, n2, i2, t2))) return !0;
  }
  return pT(t2, e2[0]) && pT(t2, e2[1]);
}
function wT(t2, e2, n2, i2, r2) {
  var o2, a2 = i2.coordinateSystem, s2 = t2.getItemModel(e2), l2 = Ar(s2.get("x"), r2.getWidth()), u2 = Ar(s2.get("y"), r2.getHeight());
  if (isNaN(l2) || isNaN(u2)) {
    if (i2.getMarkerPosition) o2 = i2.getMarkerPosition(t2.getValues(t2.dimensions, e2));
    else {
      var h2 = a2.dimensions, c2 = t2.get(h2[0], e2), p2 = t2.get(h2[1], e2);
      o2 = a2.dataToPoint([c2, p2]);
    }
    if (Qx(a2, "cartesian2d")) {
      var d2 = a2.getAxis("x"), f2 = a2.getAxis("y");
      h2 = a2.dimensions, _T(t2.get(h2[0], e2)) ? o2[0] = d2.toGlobalCoord(d2.getExtent()[n2 ? 0 : 1]) : _T(t2.get(h2[1], e2)) && (o2[1] = f2.toGlobalCoord(f2.getExtent()[n2 ? 0 : 1]));
    }
    isNaN(l2) || (o2[0] = l2), isNaN(u2) || (o2[1] = u2);
  } else o2 = [l2, u2];
  t2.setItemLayout(e2, o2);
}
var ST = (function(t2) {
  function e2() {
    var n2 = t2 !== null && t2.apply(this, arguments) || this;
    return n2.type = e2.type, n2;
  }
  return _(e2, t2), e2.prototype.updateTransform = function(t3, e3, n2) {
    e3.eachSeries(function(t4) {
      var e4 = sT.getMarkerModelFromSeries(t4, "markLine");
      if (e4) {
        var i2 = e4.getData(), r2 = yT(e4).from, o2 = yT(e4).to;
        r2.each(function(e5) {
          wT(r2, e5, !0, t4, n2), wT(o2, e5, !1, t4, n2);
        }), i2.each(function(t5) {
          i2.setItemLayout(t5, [r2.getItemLayout(t5), o2.getItemLayout(t5)]);
        }), this.markerGroupMap.get(t4.id).updateLayout();
      }
    }, this);
  }, e2.prototype.renderSeries = function(t3, e3, n2, i2) {
    var r2 = t3.coordinateSystem, o2 = t3.id, a2 = t3.getData(), s2 = this.markerGroupMap, l2 = s2.get(o2) || s2.set(o2, new SS());
    this.group.add(l2.group);
    var u2 = (function(t4, e4, n3) {
      var i3;
      i3 = t4 ? Z(t4 && t4.dimensions, function(t5) {
        return H(H({}, e4.getData().getDimensionInfo(e4.getData().mapDimension(t5)) || {}), { name: t5, ordinalMeta: null });
      }) : [{ name: "value", type: "float" }];
      var r3 = new Dm(i3, n3), o3 = new Dm(i3, n3), a3 = new Dm([], n3), s3 = Z(n3.get("data"), Q(mT, e4, t4, n3));
      t4 && (s3 = q(s3, Q(bT, t4)));
      var l3 = (u3 = !!t4, h3 = i3, u3 ? function(t5, e5, n4, i4) {
        return uf(i4 < 2 ? t5.coord && t5.coord[i4] : t5.value, h3[i4]);
      } : function(t5, e5, n4, i4) {
        return uf(t5.value, h3[i4]);
      }), u3, h3;
      return r3.initData(Z(s3, function(t5) {
        return t5[0];
      }), null, l3), o3.initData(Z(s3, function(t5) {
        return t5[1];
      }), null, l3), a3.initData(Z(s3, function(t5) {
        return t5[2];
      })), a3.hasItemOption = !0, { from: r3, to: o3, line: a3 };
    })(r2, t3, e3), h2 = u2.from, c2 = u2.to, p2 = u2.line;
    yT(e3).from = h2, yT(e3).to = c2, e3.setData(p2);
    var d2 = e3.get("symbol"), f2 = e3.get("symbolSize"), g2 = e3.get("symbolRotate"), v2 = e3.get("symbolOffset");
    function y2(e4, n3, r3) {
      var o3 = e4.getItemModel(n3);
      wT(e4, n3, r3, t3, i2);
      var s3 = o3.getModel("itemStyle").getItemStyle();
      s3.fill == null && (s3.fill = rv(a2, "color")), e4.setItemVisual(n3, { symbolKeepAspect: o3.get("symbolKeepAspect"), symbolOffset: ct(o3.get("symbolOffset", !0), v2[r3 ? 0 : 1]), symbolRotate: ct(o3.get("symbolRotate", !0), g2[r3 ? 0 : 1]), symbolSize: ct(o3.get("symbolSize"), f2[r3 ? 0 : 1]), symbol: ct(o3.get("symbol", !0), d2[r3 ? 0 : 1]), style: s3 });
    }
    J(d2) || (d2 = [d2, d2]), J(f2) || (f2 = [f2, f2]), J(g2) || (g2 = [g2, g2]), J(v2) || (v2 = [v2, v2]), u2.from.each(function(t4) {
      y2(h2, t4, !0), y2(c2, t4, !1);
    }), p2.each(function(t4) {
      var e4 = p2.getItemModel(t4), n3 = e4.getModel("lineStyle").getLineStyle();
      p2.setItemLayout(t4, [h2.getItemLayout(t4), c2.getItemLayout(t4)]);
      var i3 = e4.get("z2");
      n3.stroke == null && (n3.stroke = h2.getItemVisual(t4, "style").fill), p2.setItemVisual(t4, { z2: ct(i3, 0), fromSymbolKeepAspect: h2.getItemVisual(t4, "symbolKeepAspect"), fromSymbolOffset: h2.getItemVisual(t4, "symbolOffset"), fromSymbolRotate: h2.getItemVisual(t4, "symbolRotate"), fromSymbolSize: h2.getItemVisual(t4, "symbolSize"), fromSymbol: h2.getItemVisual(t4, "symbol"), toSymbolKeepAspect: c2.getItemVisual(t4, "symbolKeepAspect"), toSymbolOffset: c2.getItemVisual(t4, "symbolOffset"), toSymbolRotate: c2.getItemVisual(t4, "symbolRotate"), toSymbolSize: c2.getItemVisual(t4, "symbolSize"), toSymbol: c2.getItemVisual(t4, "symbol"), style: n3 });
    }), l2.updateData(p2), u2.line.eachItemGraphicEl(function(t4) {
      Os(t4).dataModel = e3, t4.traverse(function(t5) {
        Os(t5).dataModel = e3;
      });
    }), this.markKeep(l2), l2.group.silent = e3.get("silent") || t3.get("silent");
  }, e2.type = "markLine", e2;
})(gT);
function MT(t2) {
  t2.registerComponentModel(vT), t2.registerComponentView(ST), t2.registerPreprocessor(function(t3) {
    (function(t4, e2) {
      if (!t4) return !1;
      for (var n2 = J(t4) ? t4 : [t4], i2 = 0; i2 < n2.length; i2++) if (n2[i2] && n2[i2][e2]) return !0;
      return !1;
    })(t3.series, "markLine") && (t3.markLine = t3.markLine || {});
  });
}

export {
  _,
  F,
  V,
  H,
  W,
  G,
  U,
  Y,
  Z,
  q,
  $,
  Q,
  J,
  tt,
  et,
  it,
  rt,
  ct,
  St,
  kt,
  le,
  _e,
  Zn,
  $n,
  xr,
  Dr,
  Ar,
  Or2 as Or,
  Nr,
  ao,
  uo,
  fo,
  go,
  os,
  ys,
  bs,
  Os,
  xl,
  bl,
  Ml,
  gu,
  yu,
  Uu,
  Xu,
  Ku,
  lh,
  uh,
  hh,
  ch,
  fh,
  xh,
  wh,
  Oh,
  Nh,
  ec,
  rc,
  dp,
  fp,
  vp,
  mp,
  _p,
  bp,
  wp,
  Qf,
  ag,
  sg,
  hg,
  xg,
  bg,
  gv,
  mv,
  Xv,
  r_,
  A_,
  F_,
  Y_,
  Dx,
  $x,
  fb,
  Fb,
  iS,
  CS,
  AS,
  nM,
  NM,
  zM,
  rT,
  MT
};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/*!
* ZRender, a high performance 2d drawing library.
*
* Copyright (c) 2013, Baidu Inc.
* All rights reserved.
*
* LICENSE
* https://github.com/ecomfe/zrender/blob/master/LICENSE.txt
*/
