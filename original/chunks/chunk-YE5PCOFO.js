import {
  $o,
  Do,
  Et,
  So,
  fs,
  on,
  xs,
  zn
} from "./chunk-E6JHFIG4.js";

// output/native-current/vendor-vue-draggable-BWOL_lD4.js
var s = typeof window < "u" ? window.console : global.console, c = /-(\w)/g, u = /* @__PURE__ */ (function(t2) {
  let e2 = /* @__PURE__ */ Object.create(null);
  return function(n2) {
    return e2[n2] || (e2[n2] = t2(n2));
  };
})((t2) => t2.replace(c, (t3, e2) => e2 ? e2.toUpperCase() : ""));
function d(t2) {
  t2.parentElement !== null && t2.parentElement.removeChild(t2);
}
function h(t2, e2, n2) {
  let o2 = n2 === 0 ? t2.children[0] : t2.children[n2 - 1].nextSibling;
  t2.insertBefore(e2, o2);
}
function f(t2, e2) {
  var n2 = Object.keys(t2);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(t2);
    e2 && (o2 = o2.filter(function(e3) {
      return Object.getOwnPropertyDescriptor(t2, e3).enumerable;
    })), n2.push.apply(n2, o2);
  }
  return n2;
}
function p(t2) {
  for (var e2 = 1; e2 < arguments.length; e2++) {
    var n2 = arguments[e2] != null ? arguments[e2] : {};
    e2 % 2 ? f(Object(n2), !0).forEach(function(e3) {
      v(t2, e3, n2[e3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t2, Object.getOwnPropertyDescriptors(n2)) : f(Object(n2)).forEach(function(e3) {
      Object.defineProperty(t2, e3, Object.getOwnPropertyDescriptor(n2, e3));
    });
  }
  return t2;
}
function g(t2) {
  return (g = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t3) {
    return typeof t3;
  } : function(t3) {
    return t3 && typeof Symbol == "function" && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
  })(t2);
}
function v(t2, e2, n2) {
  return e2 in t2 ? Object.defineProperty(t2, e2, { value: n2, enumerable: !0, configurable: !0, writable: !0 }) : t2[e2] = n2, t2;
}
function m() {
  return m = Object.assign || function(t2) {
    for (var e2 = 1; e2 < arguments.length; e2++) {
      var n2 = arguments[e2];
      for (var o2 in n2) Object.prototype.hasOwnProperty.call(n2, o2) && (t2[o2] = n2[o2]);
    }
    return t2;
  }, m.apply(this, arguments);
}
function b(t2, e2) {
  if (t2 == null) return {};
  var n2, o2, i2 = (function(t3, e3) {
    if (t3 == null) return {};
    var n3, o3, i3 = {}, r3 = Object.keys(t3);
    for (o3 = 0; o3 < r3.length; o3++) n3 = r3[o3], e3.indexOf(n3) >= 0 || (i3[n3] = t3[n3]);
    return i3;
  })(t2, e2);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(t2);
    for (o2 = 0; o2 < r2.length; o2++) n2 = r2[o2], e2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(t2, n2) && (i2[n2] = t2[n2]);
  }
  return i2;
}
function y(t2) {
  if (typeof window < "u" && window.navigator) return !!navigator.userAgent.match(t2);
}
var w = y(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), E = y(/Edge/i), D = y(/firefox/i), _ = y(/safari/i) && !y(/chrome/i) && !y(/android/i), S = y(/iP(ad|od|hone)/i), T = y(/chrome/i) && y(/android/i), x = { capture: !1, passive: !1 };
function C(t2, e2, n2) {
  t2.addEventListener(e2, n2, !w && x);
}
function O(t2, e2, n2) {
  t2.removeEventListener(e2, n2, !w && x);
}
function I(t2, e2) {
  if (e2) {
    if (e2[0] === ">" && (e2 = e2.substring(1)), t2) try {
      if (t2.matches) return t2.matches(e2);
      if (t2.msMatchesSelector) return t2.msMatchesSelector(e2);
      if (t2.webkitMatchesSelector) return t2.webkitMatchesSelector(e2);
    } catch {
      return !1;
    }
    return !1;
  }
}
function M(t2) {
  return t2.host && t2 !== document && t2.host.nodeType ? t2.host : t2.parentNode;
}
function A(t2, e2, n2, o2) {
  if (t2) {
    n2 = n2 || document;
    do {
      if (e2 != null && (e2[0] === ">" ? t2.parentNode === n2 && I(t2, e2) : I(t2, e2)) || o2 && t2 === n2) return t2;
      if (t2 === n2) break;
    } while (t2 = M(t2));
  }
  return null;
}
var N, P = /\s+/g;
function k(t2, e2, n2) {
  if (t2 && e2) if (t2.classList) t2.classList[n2 ? "add" : "remove"](e2);
  else {
    var o2 = (" " + t2.className + " ").replace(P, " ").replace(" " + e2 + " ", " ");
    t2.className = (o2 + (n2 ? " " + e2 : "")).replace(P, " ");
  }
}
function X(t2, e2, n2) {
  var o2 = t2 && t2.style;
  if (o2) {
    if (n2 === void 0) return document.defaultView && document.defaultView.getComputedStyle ? n2 = document.defaultView.getComputedStyle(t2, "") : t2.currentStyle && (n2 = t2.currentStyle), e2 === void 0 ? n2 : n2[e2];
    e2 in o2 || e2.indexOf("webkit") !== -1 || (e2 = "-webkit-" + e2), o2[e2] = n2 + (typeof n2 == "string" ? "" : "px");
  }
}
function R(t2, e2) {
  var n2 = "";
  if (typeof t2 == "string") n2 = t2;
  else do {
    var o2 = X(t2, "transform");
    o2 && o2 !== "none" && (n2 = o2 + " " + n2);
  } while (!e2 && (t2 = t2.parentNode));
  var i2 = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return i2 && new i2(n2);
}
function Y(t2, e2, n2) {
  if (t2) {
    var o2 = t2.getElementsByTagName(e2), i2 = 0, r2 = o2.length;
    if (n2) for (; i2 < r2; i2++) n2(o2[i2], i2);
    return o2;
  }
  return [];
}
function j() {
  var t2 = document.scrollingElement;
  return t2 || document.documentElement;
}
function F(t2, e2, n2, o2, i2) {
  if (t2.getBoundingClientRect || t2 === window) {
    var r2, a2, l2, s2, c2, u2, d2;
    if (t2 !== window && t2.parentNode && t2 !== j() ? (a2 = (r2 = t2.getBoundingClientRect()).top, l2 = r2.left, s2 = r2.bottom, c2 = r2.right, u2 = r2.height, d2 = r2.width) : (a2 = 0, l2 = 0, s2 = window.innerHeight, c2 = window.innerWidth, u2 = window.innerHeight, d2 = window.innerWidth), (e2 || n2) && t2 !== window && (i2 = i2 || t2.parentNode, !w)) do
      if (i2 && i2.getBoundingClientRect && (X(i2, "transform") !== "none" || n2 && X(i2, "position") !== "static")) {
        var h2 = i2.getBoundingClientRect();
        a2 -= h2.top + parseInt(X(i2, "border-top-width")), l2 -= h2.left + parseInt(X(i2, "border-left-width")), s2 = a2 + r2.height, c2 = l2 + r2.width;
        break;
      }
    while (i2 = i2.parentNode);
    if (o2 && t2 !== window) {
      var f2 = R(i2 || t2), p2 = f2 && f2.a, g2 = f2 && f2.d;
      f2 && (s2 = (a2 /= g2) + (u2 /= g2), c2 = (l2 /= p2) + (d2 /= p2));
    }
    return { top: a2, left: l2, bottom: s2, right: c2, width: d2, height: u2 };
  }
}
function B(t2, e2, n2) {
  for (var o2 = $(t2, !0), i2 = F(t2)[e2]; o2; ) {
    if (!(i2 >= F(o2)[n2])) return o2;
    if (o2 === j()) break;
    o2 = $(o2, !1);
  }
  return !1;
}
function L(t2, e2, n2, o2) {
  for (var i2 = 0, r2 = 0, a2 = t2.children; r2 < a2.length; ) {
    if (a2[r2].style.display !== "none" && a2[r2] !== Gt.ghost && (o2 || a2[r2] !== Gt.dragged) && A(a2[r2], n2.draggable, t2, !1)) {
      if (i2 === e2) return a2[r2];
      i2++;
    }
    r2++;
  }
  return null;
}
function H(t2, e2) {
  for (var n2 = t2.lastElementChild; n2 && (n2 === Gt.ghost || X(n2, "display") === "none" || e2 && !I(n2, e2)); ) n2 = n2.previousElementSibling;
  return n2 || null;
}
function V(t2, e2) {
  var n2 = 0;
  if (!t2 || !t2.parentNode) return -1;
  for (; t2 = t2.previousElementSibling; ) t2.nodeName.toUpperCase() === "TEMPLATE" || t2 === Gt.clone || e2 && !I(t2, e2) || n2++;
  return n2;
}
function W(t2) {
  var e2 = 0, n2 = 0, o2 = j();
  if (t2) do {
    var i2 = R(t2), r2 = i2.a, a2 = i2.d;
    e2 += t2.scrollLeft * r2, n2 += t2.scrollTop * a2;
  } while (t2 !== o2 && (t2 = t2.parentNode));
  return [e2, n2];
}
function $(t2, e2) {
  if (!t2 || !t2.getBoundingClientRect) return j();
  var n2 = t2, o2 = !1;
  do
    if (n2.clientWidth < n2.scrollWidth || n2.clientHeight < n2.scrollHeight) {
      var i2 = X(n2);
      if (n2.clientWidth < n2.scrollWidth && (i2.overflowX == "auto" || i2.overflowX == "scroll") || n2.clientHeight < n2.scrollHeight && (i2.overflowY == "auto" || i2.overflowY == "scroll")) {
        if (!n2.getBoundingClientRect || n2 === document.body) return j();
        if (o2 || e2) return n2;
        o2 = !0;
      }
    }
  while (n2 = n2.parentNode);
  return j();
}
function z(t2, e2) {
  return Math.round(t2.top) === Math.round(e2.top) && Math.round(t2.left) === Math.round(e2.left) && Math.round(t2.height) === Math.round(e2.height) && Math.round(t2.width) === Math.round(e2.width);
}
function U(t2, e2) {
  return function() {
    if (!N) {
      var n2 = arguments;
      n2.length === 1 ? t2.call(this, n2[0]) : t2.apply(this, n2), N = setTimeout(function() {
        N = void 0;
      }, e2);
    }
  };
}
function G(t2, e2, n2) {
  t2.scrollLeft += e2, t2.scrollTop += n2;
}
function q(t2) {
  var e2 = window.Polymer, n2 = window.jQuery || window.Zepto;
  return e2 && e2.dom ? e2.dom(t2).cloneNode(!0) : n2 ? n2(t2).clone(!0)[0] : t2.cloneNode(!0);
}
var Z = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function K() {
  var t2, e2 = [];
  return { captureAnimationState: function() {
    e2 = [], this.options.animation && [].slice.call(this.el.children).forEach(function(t3) {
      if (X(t3, "display") !== "none" && t3 !== Gt.ghost) {
        e2.push({ target: t3, rect: F(t3) });
        var n2 = p({}, e2[e2.length - 1].rect);
        if (t3.thisAnimationDuration) {
          var o2 = R(t3, !0);
          o2 && (n2.top -= o2.f, n2.left -= o2.e);
        }
        t3.fromRect = n2;
      }
    });
  }, addAnimationState: function(t3) {
    e2.push(t3);
  }, removeAnimationState: function(t3) {
    e2.splice((function(t4, e3) {
      for (var n2 in t4) if (t4.hasOwnProperty(n2)) {
        for (var o2 in e3) if (e3.hasOwnProperty(o2) && e3[o2] === t4[n2][o2]) return Number(n2);
      }
      return -1;
    })(e2, { target: t3 }), 1);
  }, animateAll: function(n2) {
    var o2 = this;
    if (!this.options.animation) return clearTimeout(t2), void (typeof n2 == "function" && n2());
    var i2 = !1, r2 = 0;
    e2.forEach(function(t3) {
      var e3 = 0, n3 = t3.target, a2 = n3.fromRect, l2 = F(n3), s2 = n3.prevFromRect, c2 = n3.prevToRect, u2 = t3.rect, d2 = R(n3, !0);
      d2 && (l2.top -= d2.f, l2.left -= d2.e), n3.toRect = l2, n3.thisAnimationDuration && z(s2, l2) && !z(a2, l2) && (u2.top - l2.top) / (u2.left - l2.left) === (a2.top - l2.top) / (a2.left - l2.left) && (e3 = (function(t4, e4, n4, o3) {
        return Math.sqrt(Math.pow(e4.top - t4.top, 2) + Math.pow(e4.left - t4.left, 2)) / Math.sqrt(Math.pow(e4.top - n4.top, 2) + Math.pow(e4.left - n4.left, 2)) * o3.animation;
      })(u2, s2, c2, o2.options)), z(l2, a2) || (n3.prevFromRect = a2, n3.prevToRect = l2, e3 || (e3 = o2.options.animation), o2.animate(n3, u2, l2, e3)), e3 && (i2 = !0, r2 = Math.max(r2, e3), clearTimeout(n3.animationResetTimer), n3.animationResetTimer = setTimeout(function() {
        n3.animationTime = 0, n3.prevFromRect = null, n3.fromRect = null, n3.prevToRect = null, n3.thisAnimationDuration = null;
      }, e3), n3.thisAnimationDuration = e3);
    }), clearTimeout(t2), i2 ? t2 = setTimeout(function() {
      typeof n2 == "function" && n2();
    }, r2) : typeof n2 == "function" && n2(), e2 = [];
  }, animate: function(t3, e3, n2, o2) {
    if (o2) {
      X(t3, "transition", ""), X(t3, "transform", "");
      var i2 = R(this.el), r2 = i2 && i2.a, a2 = i2 && i2.d, l2 = (e3.left - n2.left) / (r2 || 1), s2 = (e3.top - n2.top) / (a2 || 1);
      t3.animatingX = !!l2, t3.animatingY = !!s2, X(t3, "transform", "translate3d(" + l2 + "px," + s2 + "px,0)"), this.forRepaintDummy = (function(t4) {
        return t4.offsetWidth;
      })(t3), X(t3, "transition", "transform " + o2 + "ms" + (this.options.easing ? " " + this.options.easing : "")), X(t3, "transform", "translate3d(0,0,0)"), typeof t3.animated == "number" && clearTimeout(t3.animated), t3.animated = setTimeout(function() {
        X(t3, "transition", ""), X(t3, "transform", ""), t3.animated = !1, t3.animatingX = !1, t3.animatingY = !1;
      }, o2);
    }
  } };
}
var Q = [], J = { initializeByDefault: !0 }, tt = { mount: function(t2) {
  for (var e2 in J) J.hasOwnProperty(e2) && !(e2 in t2) && (t2[e2] = J[e2]);
  Q.forEach(function(e3) {
    if (e3.pluginName === t2.pluginName) throw "Sortable: Cannot mount plugin ".concat(t2.pluginName, " more than once");
  }), Q.push(t2);
}, pluginEvent: function(t2, e2, n2) {
  var o2 = this;
  this.eventCanceled = !1, n2.cancel = function() {
    o2.eventCanceled = !0;
  };
  var i2 = t2 + "Global";
  Q.forEach(function(o3) {
    e2[o3.pluginName] && (e2[o3.pluginName][i2] && e2[o3.pluginName][i2](p({ sortable: e2 }, n2)), e2.options[o3.pluginName] && e2[o3.pluginName][t2] && e2[o3.pluginName][t2](p({ sortable: e2 }, n2)));
  });
}, initializePlugins: function(t2, e2, n2, o2) {
  for (var i2 in Q.forEach(function(o3) {
    var i3 = o3.pluginName;
    if (t2.options[i3] || o3.initializeByDefault) {
      var r3 = new o3(t2, e2, t2.options);
      r3.sortable = t2, r3.options = t2.options, t2[i3] = r3, m(n2, r3.defaults);
    }
  }), t2.options) if (t2.options.hasOwnProperty(i2)) {
    var r2 = this.modifyOption(t2, i2, t2.options[i2]);
    r2 !== void 0 && (t2.options[i2] = r2);
  }
}, getEventProperties: function(t2, e2) {
  var n2 = {};
  return Q.forEach(function(o2) {
    typeof o2.eventProperties == "function" && m(n2, o2.eventProperties.call(e2[o2.pluginName], t2));
  }), n2;
}, modifyOption: function(t2, e2, n2) {
  var o2;
  return Q.forEach(function(i2) {
    t2[i2.pluginName] && i2.optionListeners && typeof i2.optionListeners[e2] == "function" && (o2 = i2.optionListeners[e2].call(t2[i2.pluginName], n2));
  }), o2;
} }, et = ["evt"], nt = function(t2, e2) {
  var n2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o2 = n2.evt, i2 = b(n2, et);
  tt.pluginEvent.bind(Gt)(t2, e2, p({ dragEl: it, parentEl: rt, ghostEl: at, rootEl: lt, nextEl: st, lastDownEl: ct, cloneEl: ut, cloneHidden: dt, dragStarted: St, putSortable: mt, activeSortable: Gt.active, originalEvent: o2, oldIndex: ht, oldDraggableIndex: pt, newIndex: ft, newDraggableIndex: gt, hideGhostForTarget: Wt, unhideGhostForTarget: $t, cloneNowHidden: function() {
    dt = !0;
  }, cloneNowShown: function() {
    dt = !1;
  }, dispatchSortableEvent: function(t3) {
    ot({ sortable: e2, name: t3, originalEvent: o2 });
  } }, i2));
};
function ot(t2) {
  (function(t3) {
    var e2 = t3.sortable, n2 = t3.rootEl, o2 = t3.name, i2 = t3.targetEl, r2 = t3.cloneEl, a2 = t3.toEl, l2 = t3.fromEl, s2 = t3.oldIndex, c2 = t3.newIndex, u2 = t3.oldDraggableIndex, d2 = t3.newDraggableIndex, h2 = t3.originalEvent, f2 = t3.putSortable, g2 = t3.extraEventProperties;
    if (e2 = e2 || n2 && n2[Z]) {
      var v2, m2 = e2.options, b2 = "on" + o2.charAt(0).toUpperCase() + o2.substr(1);
      !window.CustomEvent || w || E ? (v2 = document.createEvent("Event")).initEvent(o2, !0, !0) : v2 = new CustomEvent(o2, { bubbles: !0, cancelable: !0 }), v2.to = a2 || n2, v2.from = l2 || n2, v2.item = i2 || n2, v2.clone = r2, v2.oldIndex = s2, v2.newIndex = c2, v2.oldDraggableIndex = u2, v2.newDraggableIndex = d2, v2.originalEvent = h2, v2.pullMode = f2 ? f2.lastPutMode : void 0;
      var y2 = p(p({}, g2), tt.getEventProperties(o2, e2));
      for (var D2 in y2) v2[D2] = y2[D2];
      n2 && n2.dispatchEvent(v2), m2[b2] && m2[b2].call(e2, v2);
    }
  })(p({ putSortable: mt, cloneEl: ut, targetEl: it, rootEl: lt, oldIndex: ht, oldDraggableIndex: pt, newIndex: ft, newDraggableIndex: gt }, t2));
}
var it, rt, at, lt, st, ct, ut, dt, ht, ft, pt, gt, vt, mt, bt, yt, wt, Et2, Dt, _t, St, Tt, xt, Ct, Ot, It = !1, Mt = !1, At = [], Nt = !1, Pt = !1, kt = [], Xt = !1, Rt = [], Yt = typeof document < "u", jt = S, Ft = E || w ? "cssFloat" : "float", Bt = Yt && !T && !S && "draggable" in document.createElement("div"), Lt = (function() {
  if (Yt) {
    if (w) return !1;
    var t2 = document.createElement("x");
    return t2.style.cssText = "pointer-events:auto", t2.style.pointerEvents === "auto";
  }
})(), Ht = function(t2, e2) {
  var n2 = X(t2), o2 = parseInt(n2.width) - parseInt(n2.paddingLeft) - parseInt(n2.paddingRight) - parseInt(n2.borderLeftWidth) - parseInt(n2.borderRightWidth), i2 = L(t2, 0, e2), r2 = L(t2, 1, e2), a2 = i2 && X(i2), l2 = r2 && X(r2), s2 = a2 && parseInt(a2.marginLeft) + parseInt(a2.marginRight) + F(i2).width, c2 = l2 && parseInt(l2.marginLeft) + parseInt(l2.marginRight) + F(r2).width;
  if (n2.display === "flex") return n2.flexDirection === "column" || n2.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (n2.display === "grid") return n2.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (i2 && a2.float && a2.float !== "none") {
    var u2 = a2.float === "left" ? "left" : "right";
    return !r2 || l2.clear !== "both" && l2.clear !== u2 ? "horizontal" : "vertical";
  }
  return i2 && (a2.display === "block" || a2.display === "flex" || a2.display === "table" || a2.display === "grid" || s2 >= o2 && n2[Ft] === "none" || r2 && n2[Ft] === "none" && s2 + c2 > o2) ? "vertical" : "horizontal";
}, Vt = function(t2) {
  function e2(t3, n3) {
    return function(o3, i2, r2, a2) {
      var l2 = o3.options.group.name && i2.options.group.name && o3.options.group.name === i2.options.group.name;
      if (t3 == null && (n3 || l2)) return !0;
      if (t3 == null || t3 === !1) return !1;
      if (n3 && t3 === "clone") return t3;
      if (typeof t3 == "function") return e2(t3(o3, i2, r2, a2), n3)(o3, i2, r2, a2);
      var s2 = (n3 ? o3 : i2).options.group.name;
      return t3 === !0 || typeof t3 == "string" && t3 === s2 || t3.join && t3.indexOf(s2) > -1;
    };
  }
  var n2 = {}, o2 = t2.group;
  o2 && g(o2) == "object" || (o2 = { name: o2 }), n2.name = o2.name, n2.checkPull = e2(o2.pull, !0), n2.checkPut = e2(o2.put), n2.revertClone = o2.revertClone, t2.group = n2;
}, Wt = function() {
  !Lt && at && X(at, "display", "none");
}, $t = function() {
  !Lt && at && X(at, "display", "");
};
Yt && document.addEventListener("click", function(t2) {
  if (Mt) return t2.preventDefault(), t2.stopPropagation && t2.stopPropagation(), t2.stopImmediatePropagation && t2.stopImmediatePropagation(), Mt = !1, !1;
}, !0);
var zt = function(t2) {
  if (it) {
    t2 = t2.touches ? t2.touches[0] : t2;
    var e2 = (i2 = t2.clientX, r2 = t2.clientY, At.some(function(t3) {
      var e3 = t3[Z].options.emptyInsertThreshold;
      if (e3 && !H(t3)) {
        var n3 = F(t3), o3 = i2 >= n3.left - e3 && i2 <= n3.right + e3, l2 = r2 >= n3.top - e3 && r2 <= n3.bottom + e3;
        return o3 && l2 ? a2 = t3 : void 0;
      }
    }), a2);
    if (e2) {
      var n2 = {};
      for (var o2 in t2) t2.hasOwnProperty(o2) && (n2[o2] = t2[o2]);
      n2.target = n2.rootEl = e2, n2.preventDefault = void 0, n2.stopPropagation = void 0, e2[Z]._onDragOver(n2);
    }
  }
  var i2, r2, a2;
}, Ut = function(t2) {
  it && it.parentNode[Z]._isOutsideThisEl(t2.target);
};
function Gt(t2, e2) {
  if (!t2 || !t2.nodeType || t2.nodeType !== 1) throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t2));
  this.el = t2, this.options = e2 = m({}, e2), t2[Z] = this;
  var n2 = { group: null, sort: !0, disabled: !1, store: null, handle: null, draggable: /^[uo]l$/i.test(t2.nodeName) ? ">li" : ">*", swapThreshold: 1, invertSwap: !1, invertedSwapThreshold: null, removeCloneOnHide: !0, direction: function() {
    return Ht(t2, this.options);
  }, ghostClass: "sortable-ghost", chosenClass: "sortable-chosen", dragClass: "sortable-drag", ignore: "a, img", filter: null, preventOnFilter: !0, animation: 0, easing: null, setData: function(t3, e3) {
    t3.setData("Text", e3.textContent);
  }, dropBubble: !1, dragoverBubble: !1, dataIdAttr: "data-id", delay: 0, delayOnTouchOnly: !1, touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1, forceFallback: !1, fallbackClass: "sortable-fallback", fallbackOnBody: !1, fallbackTolerance: 0, fallbackOffset: { x: 0, y: 0 }, supportPointer: Gt.supportPointer !== !1 && "PointerEvent" in window && !_, emptyInsertThreshold: 5 };
  for (var o2 in tt.initializePlugins(this, t2, n2), n2) !(o2 in e2) && (e2[o2] = n2[o2]);
  for (var i2 in Vt(e2), this) i2.charAt(0) === "_" && typeof this[i2] == "function" && (this[i2] = this[i2].bind(this));
  this.nativeDraggable = !e2.forceFallback && Bt, this.nativeDraggable && (this.options.touchStartThreshold = 1), e2.supportPointer ? C(t2, "pointerdown", this._onTapStart) : (C(t2, "mousedown", this._onTapStart), C(t2, "touchstart", this._onTapStart)), this.nativeDraggable && (C(t2, "dragover", this), C(t2, "dragenter", this)), At.push(this.el), e2.store && e2.store.get && this.sort(e2.store.get(this) || []), m(this, K());
}
function qt(t2, e2, n2, o2, i2, r2, a2, l2) {
  var s2, c2, u2 = t2[Z], d2 = u2.options.onMove;
  return !window.CustomEvent || w || E ? (s2 = document.createEvent("Event")).initEvent("move", !0, !0) : s2 = new CustomEvent("move", { bubbles: !0, cancelable: !0 }), s2.to = e2, s2.from = t2, s2.dragged = n2, s2.draggedRect = o2, s2.related = i2 || e2, s2.relatedRect = r2 || F(e2), s2.willInsertAfter = l2, s2.originalEvent = a2, t2.dispatchEvent(s2), d2 && (c2 = d2.call(u2, s2, a2)), c2;
}
function Zt(t2) {
  t2.draggable = !1;
}
function Kt() {
  Xt = !1;
}
function Qt(t2) {
  for (var e2 = t2.tagName + t2.className + t2.src + t2.href + t2.textContent, n2 = e2.length, o2 = 0; n2--; ) o2 += e2.charCodeAt(n2);
  return o2.toString(36);
}
function Jt(t2) {
  return setTimeout(t2, 0);
}
function te(t2) {
  return clearTimeout(t2);
}
Gt.prototype = { constructor: Gt, _isOutsideThisEl: function(t2) {
  this.el.contains(t2) || t2 === this.el || (Tt = null);
}, _getDirection: function(t2, e2) {
  return typeof this.options.direction == "function" ? this.options.direction.call(this, t2, e2, it) : this.options.direction;
}, _onTapStart: function(t2) {
  if (t2.cancelable) {
    var e2 = this, n2 = this.el, o2 = this.options, i2 = o2.preventOnFilter, r2 = t2.type, a2 = t2.touches && t2.touches[0] || t2.pointerType && t2.pointerType === "touch" && t2, l2 = (a2 || t2).target, s2 = t2.target.shadowRoot && (t2.path && t2.path[0] || t2.composedPath && t2.composedPath()[0]) || l2, c2 = o2.filter;
    if ((function(t3) {
      Rt.length = 0;
      for (var e3 = t3.getElementsByTagName("input"), n3 = e3.length; n3--; ) {
        var o3 = e3[n3];
        o3.checked && Rt.push(o3);
      }
    })(n2), !it && !(/mousedown|pointerdown/.test(r2) && t2.button !== 0 || o2.disabled) && !s2.isContentEditable && (this.nativeDraggable || !_ || !l2 || l2.tagName.toUpperCase() !== "SELECT") && !((l2 = A(l2, o2.draggable, n2, !1)) && l2.animated || ct === l2)) {
      if (ht = V(l2), pt = V(l2, o2.draggable), typeof c2 == "function") {
        if (c2.call(this, t2, l2, this)) return ot({ sortable: e2, rootEl: s2, name: "filter", targetEl: l2, toEl: n2, fromEl: n2 }), nt("filter", e2, { evt: t2 }), void (i2 && t2.cancelable && t2.preventDefault());
      } else if (c2 && (c2 = c2.split(",").some(function(o3) {
        if (o3 = A(s2, o3.trim(), n2, !1)) return ot({ sortable: e2, rootEl: o3, name: "filter", targetEl: l2, fromEl: n2, toEl: n2 }), nt("filter", e2, { evt: t2 }), !0;
      }))) return void (i2 && t2.cancelable && t2.preventDefault());
      o2.handle && !A(s2, o2.handle, n2, !1) || this._prepareDragStart(t2, a2, l2);
    }
  }
}, _prepareDragStart: function(t2, e2, n2) {
  var o2, i2 = this, r2 = i2.el, a2 = i2.options, l2 = r2.ownerDocument;
  if (n2 && !it && n2.parentNode === r2) {
    var s2 = F(n2);
    if (lt = r2, rt = (it = n2).parentNode, st = it.nextSibling, ct = n2, vt = a2.group, Gt.dragged = it, bt = { target: it, clientX: (e2 || t2).clientX, clientY: (e2 || t2).clientY }, Dt = bt.clientX - s2.left, _t = bt.clientY - s2.top, this._lastX = (e2 || t2).clientX, this._lastY = (e2 || t2).clientY, it.style["will-change"] = "all", o2 = function() {
      nt("delayEnded", i2, { evt: t2 }), Gt.eventCanceled ? i2._onDrop() : (i2._disableDelayedDragEvents(), !D && i2.nativeDraggable && (it.draggable = !0), i2._triggerDragStart(t2, e2), ot({ sortable: i2, name: "choose", originalEvent: t2 }), k(it, a2.chosenClass, !0));
    }, a2.ignore.split(",").forEach(function(t3) {
      Y(it, t3.trim(), Zt);
    }), C(l2, "dragover", zt), C(l2, "mousemove", zt), C(l2, "touchmove", zt), C(l2, "mouseup", i2._onDrop), C(l2, "touchend", i2._onDrop), C(l2, "touchcancel", i2._onDrop), D && this.nativeDraggable && (this.options.touchStartThreshold = 4, it.draggable = !0), nt("delayStart", this, { evt: t2 }), !a2.delay || a2.delayOnTouchOnly && !e2 || this.nativeDraggable && (E || w)) o2();
    else {
      if (Gt.eventCanceled) return void this._onDrop();
      C(l2, "mouseup", i2._disableDelayedDrag), C(l2, "touchend", i2._disableDelayedDrag), C(l2, "touchcancel", i2._disableDelayedDrag), C(l2, "mousemove", i2._delayedDragTouchMoveHandler), C(l2, "touchmove", i2._delayedDragTouchMoveHandler), a2.supportPointer && C(l2, "pointermove", i2._delayedDragTouchMoveHandler), i2._dragStartTimer = setTimeout(o2, a2.delay);
    }
  }
}, _delayedDragTouchMoveHandler: function(t2) {
  var e2 = t2.touches ? t2.touches[0] : t2;
  Math.max(Math.abs(e2.clientX - this._lastX), Math.abs(e2.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
}, _disableDelayedDrag: function() {
  it && Zt(it), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
}, _disableDelayedDragEvents: function() {
  var t2 = this.el.ownerDocument;
  O(t2, "mouseup", this._disableDelayedDrag), O(t2, "touchend", this._disableDelayedDrag), O(t2, "touchcancel", this._disableDelayedDrag), O(t2, "mousemove", this._delayedDragTouchMoveHandler), O(t2, "touchmove", this._delayedDragTouchMoveHandler), O(t2, "pointermove", this._delayedDragTouchMoveHandler);
}, _triggerDragStart: function(t2, e2) {
  e2 = e2 || t2.pointerType == "touch" && t2, !this.nativeDraggable || e2 ? this.options.supportPointer ? C(document, "pointermove", this._onTouchMove) : C(document, e2 ? "touchmove" : "mousemove", this._onTouchMove) : (C(it, "dragend", this), C(lt, "dragstart", this._onDragStart));
  try {
    document.selection ? Jt(function() {
      document.selection.empty();
    }) : window.getSelection().removeAllRanges();
  } catch {
  }
}, _dragStarted: function(t2, e2) {
  if (It = !1, lt && it) {
    nt("dragStarted", this, { evt: e2 }), this.nativeDraggable && C(document, "dragover", Ut);
    var n2 = this.options;
    !t2 && k(it, n2.dragClass, !1), k(it, n2.ghostClass, !0), Gt.active = this, t2 && this._appendGhost(), ot({ sortable: this, name: "start", originalEvent: e2 });
  } else this._nulling();
}, _emulateDragOver: function() {
  if (yt) {
    this._lastX = yt.clientX, this._lastY = yt.clientY, Wt();
    for (var t2 = document.elementFromPoint(yt.clientX, yt.clientY), e2 = t2; t2 && t2.shadowRoot && (t2 = t2.shadowRoot.elementFromPoint(yt.clientX, yt.clientY)) !== e2; ) e2 = t2;
    if (it.parentNode[Z]._isOutsideThisEl(t2), e2) do {
      if (e2[Z] && e2[Z]._onDragOver({ clientX: yt.clientX, clientY: yt.clientY, target: t2, rootEl: e2 }) && !this.options.dragoverBubble)
        break;
      t2 = e2;
    } while (e2 = e2.parentNode);
    $t();
  }
}, _onTouchMove: function(t2) {
  if (bt) {
    var e2 = this.options, n2 = e2.fallbackTolerance, o2 = e2.fallbackOffset, i2 = t2.touches ? t2.touches[0] : t2, r2 = at && R(at, !0), a2 = at && r2 && r2.a, l2 = at && r2 && r2.d, s2 = jt && Ot && W(Ot), c2 = (i2.clientX - bt.clientX + o2.x) / (a2 || 1) + (s2 ? s2[0] - kt[0] : 0) / (a2 || 1), u2 = (i2.clientY - bt.clientY + o2.y) / (l2 || 1) + (s2 ? s2[1] - kt[1] : 0) / (l2 || 1);
    if (!Gt.active && !It) {
      if (n2 && Math.max(Math.abs(i2.clientX - this._lastX), Math.abs(i2.clientY - this._lastY)) < n2) return;
      this._onDragStart(t2, !0);
    }
    if (at) {
      r2 ? (r2.e += c2 - (wt || 0), r2.f += u2 - (Et2 || 0)) : r2 = { a: 1, b: 0, c: 0, d: 1, e: c2, f: u2 };
      var d2 = "matrix(".concat(r2.a, ",").concat(r2.b, ",").concat(r2.c, ",").concat(r2.d, ",").concat(r2.e, ",").concat(r2.f, ")");
      X(at, "webkitTransform", d2), X(at, "mozTransform", d2), X(at, "msTransform", d2), X(at, "transform", d2), wt = c2, Et2 = u2, yt = i2;
    }
    t2.cancelable && t2.preventDefault();
  }
}, _appendGhost: function() {
  if (!at) {
    var t2 = this.options.fallbackOnBody ? document.body : lt, e2 = F(it, !0, jt, !0, t2), n2 = this.options;
    if (jt) {
      for (Ot = t2; X(Ot, "position") === "static" && X(Ot, "transform") === "none" && Ot !== document; ) Ot = Ot.parentNode;
      Ot !== document.body && Ot !== document.documentElement ? (Ot === document && (Ot = j()), e2.top += Ot.scrollTop, e2.left += Ot.scrollLeft) : Ot = j(), kt = W(Ot);
    }
    k(at = it.cloneNode(!0), n2.ghostClass, !1), k(at, n2.fallbackClass, !0), k(at, n2.dragClass, !0), X(at, "transition", ""), X(at, "transform", ""), X(at, "box-sizing", "border-box"), X(at, "margin", 0), X(at, "top", e2.top), X(at, "left", e2.left), X(at, "width", e2.width), X(at, "height", e2.height), X(at, "opacity", "0.8"), X(at, "position", jt ? "absolute" : "fixed"), X(at, "zIndex", "100000"), X(at, "pointerEvents", "none"), Gt.ghost = at, t2.appendChild(at), X(at, "transform-origin", Dt / parseInt(at.style.width) * 100 + "% " + _t / parseInt(at.style.height) * 100 + "%");
  }
}, _onDragStart: function(t2, e2) {
  var n2 = this, o2 = t2.dataTransfer, i2 = n2.options;
  nt("dragStart", this, { evt: t2 }), Gt.eventCanceled ? this._onDrop() : (nt("setupClone", this), Gt.eventCanceled || ((ut = q(it)).draggable = !1, ut.style["will-change"] = "", this._hideClone(), k(ut, this.options.chosenClass, !1), Gt.clone = ut), n2.cloneId = Jt(function() {
    nt("clone", n2), Gt.eventCanceled || (n2.options.removeCloneOnHide || lt.insertBefore(ut, it), n2._hideClone(), ot({ sortable: n2, name: "clone" }));
  }), !e2 && k(it, i2.dragClass, !0), e2 ? (Mt = !0, n2._loopId = setInterval(n2._emulateDragOver, 50)) : (O(document, "mouseup", n2._onDrop), O(document, "touchend", n2._onDrop), O(document, "touchcancel", n2._onDrop), o2 && (o2.effectAllowed = "move", i2.setData && i2.setData.call(n2, o2, it)), C(document, "drop", n2), X(it, "transform", "translateZ(0)")), It = !0, n2._dragStartId = Jt(n2._dragStarted.bind(n2, e2, t2)), C(document, "selectstart", n2), St = !0, _ && X(document.body, "user-select", "none"));
}, _onDragOver: function(t2) {
  var e2, n2, o2, i2, r2 = this.el, a2 = t2.target, l2 = this.options, s2 = l2.group, c2 = Gt.active, u2 = vt === s2, d2 = l2.sort, h2 = mt || c2, f2 = this, g2 = !1;
  if (!Xt) {
    if (t2.preventDefault !== void 0 && t2.cancelable && t2.preventDefault(), a2 = A(a2, l2.draggable, r2, !0), M2("dragOver"), Gt.eventCanceled) return g2;
    if (it.contains(t2.target) || a2.animated && a2.animatingX && a2.animatingY || f2._ignoreWhileAnimating === a2) return P2(!1);
    if (Mt = !1, c2 && !l2.disabled && (u2 ? d2 || (o2 = rt !== lt) : mt === this || (this.lastPutMode = vt.checkPull(this, c2, it, t2)) && s2.checkPut(this, c2, it, t2))) {
      if (i2 = this._getDirection(t2, a2) === "vertical", e2 = F(it), M2("dragOverValid"), Gt.eventCanceled) return g2;
      if (o2) return rt = lt, N2(), this._hideClone(), M2("revert"), Gt.eventCanceled || (st ? lt.insertBefore(it, st) : lt.appendChild(it)), P2(!0);
      var v2 = H(r2, l2.draggable);
      if (!v2 || (function(t3, e3, n3) {
        var o3 = F(H(n3.el, n3.options.draggable)), i3 = 10;
        return e3 ? t3.clientX > o3.right + i3 || t3.clientX <= o3.right && t3.clientY > o3.bottom && t3.clientX >= o3.left : t3.clientX > o3.right && t3.clientY > o3.top || t3.clientX <= o3.right && t3.clientY > o3.bottom + i3;
      })(t2, i2, this) && !v2.animated) {
        if (v2 === it) return P2(!1);
        if (v2 && r2 === t2.target && (a2 = v2), a2 && (n2 = F(a2)), qt(lt, r2, it, e2, a2, n2, t2, !!a2) !== !1) return N2(), r2.appendChild(it), rt = r2, R2(), P2(!0);
      } else if (v2 && (function(t3, e3, n3) {
        var o3 = F(L(n3.el, 0, n3.options, !0)), i3 = 10;
        return e3 ? t3.clientX < o3.left - i3 || t3.clientY < o3.top && t3.clientX < o3.right : t3.clientY < o3.top - i3 || t3.clientY < o3.bottom && t3.clientX < o3.left;
      })(t2, i2, this)) {
        var m2 = L(r2, 0, l2, !0);
        if (m2 === it) return P2(!1);
        if (n2 = F(a2 = m2), qt(lt, r2, it, e2, a2, n2, t2, !1) !== !1) return N2(), r2.insertBefore(it, m2), rt = r2, R2(), P2(!0);
      } else if (a2.parentNode === r2) {
        n2 = F(a2);
        var b2, y2, w2, E2 = it.parentNode !== r2, D2 = !(function(t3, e3, n3) {
          var o3 = n3 ? t3.left : t3.top, i3 = n3 ? t3.right : t3.bottom, r3 = n3 ? t3.width : t3.height, a3 = n3 ? e3.left : e3.top, l3 = n3 ? e3.right : e3.bottom, s3 = n3 ? e3.width : e3.height;
          return o3 === a3 || i3 === l3 || o3 + r3 / 2 === a3 + s3 / 2;
        })(it.animated && it.toRect || e2, a2.animated && a2.toRect || n2, i2), _2 = i2 ? "top" : "left", S2 = B(a2, "top", "top") || B(it, "top", "top"), T2 = S2 ? S2.scrollTop : void 0;
        if (Tt !== a2 && (y2 = n2[_2], Nt = !1, Pt = !D2 && l2.invertSwap || E2), b2 = (function(t3, e3, n3, o3, i3, r3, a3, l3) {
          var s3 = o3 ? t3.clientY : t3.clientX, c3 = o3 ? n3.height : n3.width, u3 = o3 ? n3.top : n3.left, d3 = o3 ? n3.bottom : n3.right, h3 = !1;
          if (!a3) {
            if (l3 && Ct < c3 * i3) {
              if (!Nt && (xt === 1 ? s3 > u3 + c3 * r3 / 2 : s3 < d3 - c3 * r3 / 2) && (Nt = !0), Nt) h3 = !0;
              else if (xt === 1 ? s3 < u3 + Ct : s3 > d3 - Ct) return -xt;
            } else if (s3 > u3 + c3 * (1 - i3) / 2 && s3 < d3 - c3 * (1 - i3) / 2) return (function(t4) {
              return V(it) < V(t4) ? 1 : -1;
            })(e3);
          }
          return (h3 = h3 || a3) && (s3 < u3 + c3 * r3 / 2 || s3 > d3 - c3 * r3 / 2) ? s3 > u3 + c3 / 2 ? 1 : -1 : 0;
        })(t2, a2, n2, i2, D2 ? 1 : l2.swapThreshold, l2.invertedSwapThreshold == null ? l2.swapThreshold : l2.invertedSwapThreshold, Pt, Tt === a2), b2 !== 0) {
          var x2 = V(it);
          do
            x2 -= b2, w2 = rt.children[x2];
          while (w2 && (X(w2, "display") === "none" || w2 === at));
        }
        if (b2 === 0 || w2 === a2) return P2(!1);
        Tt = a2, xt = b2;
        var C2 = a2.nextElementSibling, O2 = !1, I2 = qt(lt, r2, it, e2, a2, n2, t2, O2 = b2 === 1);
        if (I2 !== !1) return I2 !== 1 && I2 !== -1 || (O2 = I2 === 1), Xt = !0, setTimeout(Kt, 30), N2(), O2 && !C2 ? r2.appendChild(it) : a2.parentNode.insertBefore(it, O2 ? C2 : a2), S2 && G(S2, 0, T2 - S2.scrollTop), rt = it.parentNode, y2 === void 0 || Pt || (Ct = Math.abs(y2 - F(a2)[_2])), R2(), P2(!0);
      }
      if (r2.contains(it)) return P2(!1);
    }
    return !1;
  }
  function M2(l3, s3) {
    nt(l3, f2, p({ evt: t2, isOwner: u2, axis: i2 ? "vertical" : "horizontal", revert: o2, dragRect: e2, targetRect: n2, canSort: d2, fromSortable: h2, target: a2, completed: P2, onMove: function(n3, o3) {
      return qt(lt, r2, it, e2, n3, F(n3), t2, o3);
    }, changed: R2 }, s3));
  }
  function N2() {
    M2("dragOverAnimationCapture"), f2.captureAnimationState(), f2 !== h2 && h2.captureAnimationState();
  }
  function P2(e3) {
    return M2("dragOverCompleted", { insertion: e3 }), e3 && (u2 ? c2._hideClone() : c2._showClone(f2), f2 !== h2 && (k(it, mt ? mt.options.ghostClass : c2.options.ghostClass, !1), k(it, l2.ghostClass, !0)), mt !== f2 && f2 !== Gt.active ? mt = f2 : f2 === Gt.active && mt && (mt = null), h2 === f2 && (f2._ignoreWhileAnimating = a2), f2.animateAll(function() {
      M2("dragOverAnimationComplete"), f2._ignoreWhileAnimating = null;
    }), f2 !== h2 && (h2.animateAll(), h2._ignoreWhileAnimating = null)), (a2 === it && !it.animated || a2 === r2 && !a2.animated) && (Tt = null), l2.dragoverBubble || t2.rootEl || a2 === document || (it.parentNode[Z]._isOutsideThisEl(t2.target), !e3 && zt(t2)), !l2.dragoverBubble && t2.stopPropagation && t2.stopPropagation(), g2 = !0;
  }
  function R2() {
    ft = V(it), gt = V(it, l2.draggable), ot({ sortable: f2, name: "change", toEl: r2, newIndex: ft, newDraggableIndex: gt, originalEvent: t2 });
  }
}, _ignoreWhileAnimating: null, _offMoveEvents: function() {
  O(document, "mousemove", this._onTouchMove), O(document, "touchmove", this._onTouchMove), O(document, "pointermove", this._onTouchMove), O(document, "dragover", zt), O(document, "mousemove", zt), O(document, "touchmove", zt);
}, _offUpEvents: function() {
  var t2 = this.el.ownerDocument;
  O(t2, "mouseup", this._onDrop), O(t2, "touchend", this._onDrop), O(t2, "pointerup", this._onDrop), O(t2, "touchcancel", this._onDrop), O(document, "selectstart", this);
}, _onDrop: function(t2) {
  var e2 = this.el, n2 = this.options;
  ft = V(it), gt = V(it, n2.draggable), nt("drop", this, { evt: t2 }), rt = it && it.parentNode, ft = V(it), gt = V(it, n2.draggable), Gt.eventCanceled || (It = !1, Pt = !1, Nt = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), te(this.cloneId), te(this._dragStartId), this.nativeDraggable && (O(document, "drop", this), O(e2, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), _ && X(document.body, "user-select", ""), X(it, "transform", ""), t2 && (St && (t2.cancelable && t2.preventDefault(), !n2.dropBubble && t2.stopPropagation()), at && at.parentNode && at.parentNode.removeChild(at), (lt === rt || mt && mt.lastPutMode !== "clone") && ut && ut.parentNode && ut.parentNode.removeChild(ut), it && (this.nativeDraggable && O(it, "dragend", this), Zt(it), it.style["will-change"] = "", St && !It && k(it, mt ? mt.options.ghostClass : this.options.ghostClass, !1), k(it, this.options.chosenClass, !1), ot({ sortable: this, name: "unchoose", toEl: rt, newIndex: null, newDraggableIndex: null, originalEvent: t2 }), lt !== rt ? (ft >= 0 && (ot({ rootEl: rt, name: "add", toEl: rt, fromEl: lt, originalEvent: t2 }), ot({ sortable: this, name: "remove", toEl: rt, originalEvent: t2 }), ot({ rootEl: rt, name: "sort", toEl: rt, fromEl: lt, originalEvent: t2 }), ot({ sortable: this, name: "sort", toEl: rt, originalEvent: t2 })), mt && mt.save()) : ft !== ht && ft >= 0 && (ot({ sortable: this, name: "update", toEl: rt, originalEvent: t2 }), ot({ sortable: this, name: "sort", toEl: rt, originalEvent: t2 })), Gt.active && (ft != null && ft !== -1 || (ft = ht, gt = pt), ot({ sortable: this, name: "end", toEl: rt, originalEvent: t2 }), this.save())))), this._nulling();
}, _nulling: function() {
  nt("nulling", this), lt = it = rt = at = st = ut = ct = dt = bt = yt = St = ft = gt = ht = pt = Tt = xt = mt = vt = Gt.dragged = Gt.ghost = Gt.clone = Gt.active = null, Rt.forEach(function(t2) {
    t2.checked = !0;
  }), Rt.length = wt = Et2 = 0;
}, handleEvent: function(t2) {
  switch (t2.type) {
    case "drop":
    case "dragend":
      this._onDrop(t2);
      break;
    case "dragenter":
    case "dragover":
      it && (this._onDragOver(t2), (function(t3) {
        t3.dataTransfer && (t3.dataTransfer.dropEffect = "move"), t3.cancelable && t3.preventDefault();
      })(t2));
      break;
    case "selectstart":
      t2.preventDefault();
  }
}, toArray: function() {
  for (var t2, e2 = [], n2 = this.el.children, o2 = 0, i2 = n2.length, r2 = this.options; o2 < i2; o2++) A(t2 = n2[o2], r2.draggable, this.el, !1) && e2.push(t2.getAttribute(r2.dataIdAttr) || Qt(t2));
  return e2;
}, sort: function(t2, e2) {
  var n2 = {}, o2 = this.el;
  this.toArray().forEach(function(t3, e3) {
    var i2 = o2.children[e3];
    A(i2, this.options.draggable, o2, !1) && (n2[t3] = i2);
  }, this), e2 && this.captureAnimationState(), t2.forEach(function(t3) {
    n2[t3] && (o2.removeChild(n2[t3]), o2.appendChild(n2[t3]));
  }), e2 && this.animateAll();
}, save: function() {
  var t2 = this.options.store;
  t2 && t2.set && t2.set(this);
}, closest: function(t2, e2) {
  return A(t2, e2 || this.options.draggable, this.el, !1);
}, option: function(t2, e2) {
  var n2 = this.options;
  if (e2 === void 0) return n2[t2];
  var o2 = tt.modifyOption(this, t2, e2);
  n2[t2] = o2 !== void 0 ? o2 : e2, t2 === "group" && Vt(n2);
}, destroy: function() {
  nt("destroy", this);
  var t2 = this.el;
  t2[Z] = null, O(t2, "mousedown", this._onTapStart), O(t2, "touchstart", this._onTapStart), O(t2, "pointerdown", this._onTapStart), this.nativeDraggable && (O(t2, "dragover", this), O(t2, "dragenter", this)), Array.prototype.forEach.call(t2.querySelectorAll("[draggable]"), function(t3) {
    t3.removeAttribute("draggable");
  }), this._onDrop(), this._disableDelayedDragEvents(), At.splice(At.indexOf(this.el), 1), this.el = t2 = null;
}, _hideClone: function() {
  if (!dt) {
    if (nt("hideClone", this), Gt.eventCanceled) return;
    X(ut, "display", "none"), this.options.removeCloneOnHide && ut.parentNode && ut.parentNode.removeChild(ut), dt = !0;
  }
}, _showClone: function(t2) {
  if (t2.lastPutMode === "clone") {
    if (dt) {
      if (nt("showClone", this), Gt.eventCanceled) return;
      it.parentNode != lt || this.options.group.revertClone ? st ? lt.insertBefore(ut, st) : lt.appendChild(ut) : lt.insertBefore(ut, it), this.options.group.revertClone && this.animate(it, ut), X(ut, "display", ""), dt = !1;
    }
  } else this._hideClone();
} }, Yt && C(document, "touchmove", function(t2) {
  (Gt.active || It) && t2.cancelable && t2.preventDefault();
}), Gt.utils = { on: C, off: O, css: X, find: Y, is: function(t2, e2) {
  return !!A(t2, e2, t2, !1);
}, extend: function(t2, e2) {
  if (t2 && e2) for (var n2 in e2) e2.hasOwnProperty(n2) && (t2[n2] = e2[n2]);
  return t2;
}, throttle: U, closest: A, toggleClass: k, clone: q, index: V, nextTick: Jt, cancelNextTick: te, detectDirection: Ht, getChild: L }, Gt.get = function(t2) {
  return t2[Z];
}, Gt.mount = function() {
  for (var t2 = arguments.length, e2 = new Array(t2), n2 = 0; n2 < t2; n2++) e2[n2] = arguments[n2];
  e2[0].constructor === Array && (e2 = e2[0]), e2.forEach(function(t3) {
    if (!t3.prototype || !t3.prototype.constructor) throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(t3));
    t3.utils && (Gt.utils = p(p({}, Gt.utils), t3.utils)), tt.mount(t3);
  });
}, Gt.create = function(t2, e2) {
  return new Gt(t2, e2);
}, Gt.version = "1.14.0";
var ee, ne, oe, ie, re, ae, le = [], se = !1;
function ce() {
  le.forEach(function(t2) {
    clearInterval(t2.pid);
  }), le = [];
}
function ue() {
  clearInterval(ae);
}
var de = U(function(t2, e2, n2, o2) {
  if (e2.scroll) {
    var i2, r2 = (t2.touches ? t2.touches[0] : t2).clientX, a2 = (t2.touches ? t2.touches[0] : t2).clientY, l2 = e2.scrollSensitivity, s2 = e2.scrollSpeed, c2 = j(), u2 = !1;
    ne !== n2 && (ne = n2, ce(), ee = e2.scroll, i2 = e2.scrollFn, ee === !0 && (ee = $(n2, !0)));
    var d2 = 0, h2 = ee;
    do {
      var f2 = h2, p2 = F(f2), g2 = p2.top, v2 = p2.bottom, m2 = p2.left, b2 = p2.right, y2 = p2.width, w2 = p2.height, E2 = void 0, D2 = void 0, _2 = f2.scrollWidth, S2 = f2.scrollHeight, T2 = X(f2), x2 = f2.scrollLeft, C2 = f2.scrollTop;
      f2 === c2 ? (E2 = y2 < _2 && (T2.overflowX === "auto" || T2.overflowX === "scroll" || T2.overflowX === "visible"), D2 = w2 < S2 && (T2.overflowY === "auto" || T2.overflowY === "scroll" || T2.overflowY === "visible")) : (E2 = y2 < _2 && (T2.overflowX === "auto" || T2.overflowX === "scroll"), D2 = w2 < S2 && (T2.overflowY === "auto" || T2.overflowY === "scroll"));
      var O2 = E2 && (Math.abs(b2 - r2) <= l2 && x2 + y2 < _2) - (Math.abs(m2 - r2) <= l2 && !!x2), I2 = D2 && (Math.abs(v2 - a2) <= l2 && C2 + w2 < S2) - (Math.abs(g2 - a2) <= l2 && !!C2);
      if (!le[d2]) for (var M2 = 0; M2 <= d2; M2++) le[M2] || (le[M2] = {});
      le[d2].vx == O2 && le[d2].vy == I2 && le[d2].el === f2 || (le[d2].el = f2, le[d2].vx = O2, le[d2].vy = I2, clearInterval(le[d2].pid), O2 == 0 && I2 == 0 || (u2 = !0, le[d2].pid = setInterval(function() {
        o2 && this.layer === 0 && Gt.active._onTouchMove(re);
        var e3 = le[this.layer].vy ? le[this.layer].vy * s2 : 0, n3 = le[this.layer].vx ? le[this.layer].vx * s2 : 0;
        typeof i2 == "function" && i2.call(Gt.dragged.parentNode[Z], n3, e3, t2, re, le[this.layer].el) !== "continue" || G(le[this.layer].el, n3, e3);
      }.bind({ layer: d2 }), 24))), d2++;
    } while (e2.bubbleScroll && h2 !== c2 && (h2 = $(h2, !1)));
    se = u2;
  }
}, 30), he = function(t2) {
  var e2 = t2.originalEvent, n2 = t2.putSortable, o2 = t2.dragEl, i2 = t2.activeSortable, r2 = t2.dispatchSortableEvent, a2 = t2.hideGhostForTarget, l2 = t2.unhideGhostForTarget;
  if (e2) {
    var s2 = n2 || i2;
    a2();
    var c2 = e2.changedTouches && e2.changedTouches.length ? e2.changedTouches[0] : e2, u2 = document.elementFromPoint(c2.clientX, c2.clientY);
    l2(), s2 && !s2.el.contains(u2) && (r2("spill"), this.onSpill({ dragEl: o2, putSortable: n2 }));
  }
};
function fe() {
}
function pe() {
}
function ge(t2) {
  if (!t2 || t2.length !== 1) return !1;
  let [{ type: e2 }] = t2;
  return !!e2 && (n2 = e2.name, ["transition-group", "TransitionGroup"].includes(n2));
  var n2;
}
fe.prototype = { startIndex: null, dragStart: function(t2) {
  var e2 = t2.oldDraggableIndex;
  this.startIndex = e2;
}, onSpill: function(t2) {
  var e2 = t2.dragEl, n2 = t2.putSortable;
  this.sortable.captureAnimationState(), n2 && n2.captureAnimationState();
  var o2 = L(this.sortable.el, this.startIndex, this.options);
  o2 ? this.sortable.el.insertBefore(e2, o2) : this.sortable.el.appendChild(e2), this.sortable.animateAll(), n2 && n2.animateAll();
}, drop: he }, m(fe, { pluginName: "revertOnSpill" }), pe.prototype = { onSpill: function(t2) {
  var e2 = t2.dragEl, n2 = t2.putSortable || this.sortable;
  n2.captureAnimationState(), e2.parentNode && e2.parentNode.removeChild(e2), n2.animateAll();
}, drop: he }, m(pe, { pluginName: "removeOnSpill" }), Gt.mount(new function() {
  function t2() {
    for (var t3 in this.defaults = { scroll: !0, forceAutoScrollFallback: !1, scrollSensitivity: 30, scrollSpeed: 10, bubbleScroll: !0 }, this) t3.charAt(0) === "_" && typeof this[t3] == "function" && (this[t3] = this[t3].bind(this));
  }
  return t2.prototype = { dragStarted: function(t3) {
    var e2 = t3.originalEvent;
    this.sortable.nativeDraggable ? C(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? C(document, "pointermove", this._handleFallbackAutoScroll) : e2.touches ? C(document, "touchmove", this._handleFallbackAutoScroll) : C(document, "mousemove", this._handleFallbackAutoScroll);
  }, dragOverCompleted: function(t3) {
    var e2 = t3.originalEvent;
    this.options.dragOverBubble || e2.rootEl || this._handleAutoScroll(e2);
  }, drop: function() {
    this.sortable.nativeDraggable ? O(document, "dragover", this._handleAutoScroll) : (O(document, "pointermove", this._handleFallbackAutoScroll), O(document, "touchmove", this._handleFallbackAutoScroll), O(document, "mousemove", this._handleFallbackAutoScroll)), ue(), ce(), clearTimeout(N), N = void 0;
  }, nulling: function() {
    re = ne = ee = se = ae = oe = ie = null, le.length = 0;
  }, _handleFallbackAutoScroll: function(t3) {
    this._handleAutoScroll(t3, !0);
  }, _handleAutoScroll: function(t3, e2) {
    var n2 = this, o2 = (t3.touches ? t3.touches[0] : t3).clientX, i2 = (t3.touches ? t3.touches[0] : t3).clientY, r2 = document.elementFromPoint(o2, i2);
    if (re = t3, e2 || this.options.forceAutoScrollFallback || E || w || _) {
      de(t3, this.options, r2, e2);
      var a2 = $(r2, !0);
      !se || ae && o2 === oe && i2 === ie || (ae && ue(), ae = setInterval(function() {
        var r3 = $(document.elementFromPoint(o2, i2), !0);
        r3 !== a2 && (a2 = r3, ce()), de(t3, n2.options, r3, e2);
      }, 10), oe = o2, ie = i2);
    } else {
      if (!this.options.bubbleScroll || $(r2, !0) === j()) return void ce();
      de(t3, this.options, $(r2, !1), !1);
    }
  } }, m(t2, { pluginName: "scroll", initializeByDefault: !0 });
}()), Gt.mount(pe, fe);
var ve = ["Start", "Add", "Remove", "Update", "End"], me = ["Choose", "Unchoose", "Sort", "Filter", "Clone"], be = ["Move", ...ve, ...me].map((t2) => "on" + t2), ye = null, we = zn({ name: "VueDraggableNext", inheritAttrs: !1, props: { options: Object, list: { type: Array, required: !1, default: null }, noTransitionOnDrag: { type: Boolean, default: !1 }, clone: { type: Function, default: (t2) => t2 }, tag: { type: String, default: "div" }, move: { type: Function, default: null }, componentData: { type: Object, required: !1, default: null }, component: { type: String, default: null }, modelValue: { type: Array, required: !1, default: null } }, emits: ["update:modelValue", "move", "change", ...ve.map((t2) => t2.toLowerCase()), ...me.map((t2) => t2.toLowerCase())], setup(t2, { emit: e2, slots: c2, attrs: f2 }) {
  let p2 = Et(!1), g2 = Et(!1), v2 = Et(0), m2 = Et(0), b2 = Et([]), y2 = Et(null), w2 = Et(null), E2 = $o(() => t2.list ? t2.list : t2.modelValue), D2 = So();
  function _2() {
    var t3;
    return ((t3 = D2?.proxy) == null ? void 0 : t3.$el.children) || [];
  }
  async function S2() {
    var t3;
    await on(), b2.value = (function(t4, e3, n2, o2) {
      if (!t4) return [];
      let i2 = Object.values(t4), r2 = e3.length - o2;
      return [...e3].map((t5, e4) => e4 >= r2 ? i2.length : i2.indexOf(t5));
    })(_2(), ((t3 = D2?.proxy) == null ? void 0 : t3.$el.children) || [], p2.value, m2.value);
  }
  function T2(t3) {
    let e3 = (function(t4, e4) {
      return Object.values(t4).indexOf(e4);
    })(_2() || [], t3);
    return e3 === -1 ? null : { index: e3, element: E2.value ? E2.value[e3] : null };
  }
  function x2(t3) {
    on(() => e2("change", t3));
  }
  function C2(n2) {
    if (t2.list) return void n2(t2.list);
    let o2 = [...t2.modelValue || []];
    n2(o2), e2("update:modelValue", o2);
  }
  function O2(...t3) {
    C2((e3) => e3.splice(...t3));
  }
  function I2(t3, e3) {
    C2((n2) => n2.splice(e3, 0, n2.splice(t3, 1)[0]));
  }
  function M2(t3) {
    let e3 = b2.value, n2 = e3.length;
    return t3 > n2 - 1 ? n2 : e3[t3];
  }
  function A2() {
    var t3, e3;
    return c2.default && ((e3 = (t3 = c2.default()[0]) == null ? void 0 : t3.component) == null ? void 0 : e3.proxy) || null;
  }
  function N2(e3) {
    if (!t2.noTransitionOnDrag || !p2.value) return;
    let n2 = _2();
    n2[e3] && (n2[e3].data = null);
    let o2 = A2();
    o2 && (o2.children = [], o2.kept = void 0);
  }
  function P2(e3) {
    S2(), y2.value = T2(e3.item), y2.value && (e3.item._underlying_vm_ = t2.clone(y2.value.element), ye = e3.item);
  }
  function k2(t3) {
    let e3 = t3.item._underlying_vm_;
    if (e3 === void 0) return;
    d(t3.item);
    let n2 = M2(t3.newIndex);
    O2(n2, 0, e3), S2(), x2({ added: { element: e3, newIndex: n2 } });
  }
  function X2(t3) {
    var e3;
    if (h((e3 = D2?.proxy) == null ? void 0 : e3.$el, t3.item, t3.oldIndex), t3.pullMode === "clone") return void d(t3.clone);
    if (!y2.value) return;
    let n2 = y2.value.index;
    O2(n2, 1), N2(n2), x2({ removed: { element: y2.value.element, oldIndex: n2 } });
  }
  function R2(t3) {
    var e3, n2;
    d(t3.item), h(t3.from, t3.item, t3.oldIndex);
    let o2 = (e3 = y2.value) == null ? void 0 : e3.index, i2 = M2(t3.newIndex);
    I2(o2, i2), x2({ moved: { element: (n2 = y2.value) == null ? void 0 : n2.element, oldIndex: o2, newIndex: i2 } });
  }
  function Y2(t3) {
    return t3.__draggable_component__;
  }
  function j2({ to: t3, related: e3 }) {
    let n2 = Y2(t3);
    if (!n2) return { component: n2 };
    let o2 = n2.realList, i2 = { list: o2, component: n2 };
    if (t3 !== e3 && o2 && n2.getUnderlyingVm) {
      let t4 = n2.getUnderlyingVm(e3);
      if (t4) return Object.assign(t4, i2);
    }
    return i2;
  }
  function F2(t3, e3) {
    let n2 = [...e3.to.children].filter((t4) => t4.style.display !== "none");
    if (n2.length === 0) return 0;
    let o2 = n2.indexOf(e3.related), i2 = t3.component.getVmIndex(o2);
    return n2.indexOf(ye) !== -1 || !e3.willInsertAfter ? i2 : i2 + 1;
  }
  let B2 = () => {
    var t3, e3;
    let n2 = {};
    ve.forEach((t4) => {
      var e4;
      n2["on" + t4] = (e4 = t4, (t5) => {
        if (E2.value !== null) {
          let n3 = W2["onDrag" + e4];
          n3 && n3(t5);
        }
        L2(e4, t5);
      });
    }), me.forEach((t4) => {
      n2["on" + t4] = L2.bind(null, t4);
    });
    let o2 = Object.keys(f2).reduce((t4, e4) => (t4[u(e4)] = f2[e4], t4), {}), i2 = Object.assign({}, o2, n2, { onMove: (t4, e4) => H2(t4, e4) });
    "draggable" in i2 || (i2.draggable = ">*");
    let r2 = ((t3 = D2?.proxy) == null ? void 0 : t3.$el.nodeType) === 1 ? D2.proxy.$el : ((e3 = D2?.proxy) == null ? void 0 : e3.$el.parentElement) || null;
    r2 && (w2.value = new Gt(r2, i2), r2.__draggable_component__ = D2?.proxy, S2());
  };
  function L2(t3, n2) {
    on(() => e2(t3.toLowerCase(), n2));
  }
  function H2(e3, n2) {
    let o2 = t2.move;
    if (!o2 || !E2.value) return !0;
    let i2 = j2(e3), r2 = y2.value, a2 = F2(i2, e3);
    return r2 && Object.assign(r2, { futureIndex: a2 }), o2(Object.assign({}, e3, { relatedContext: i2, draggedContext: r2 }), n2);
  }
  function V2() {
    S2(), ye = null;
  }
  let W2 = { onDragStart: P2, onDragAdd: k2, onDragRemove: X2, onDragUpdate: R2, onDragMove: H2, onDragEnd: V2 };
  return fs(() => {
    B2();
  }), t2.list !== null && t2.modelValue !== null && s.error("list props are mutually exclusive! Please set one."), { getTag: function() {
    return t2.component ? xs(t2.component) : t2.tag;
  }, realList: E2, visibleIndexes: b2, noneFunctionalComponentMode: g2, headerOffset: v2, footerOffset: m2, transitionMode: p2, computeIndexes: S2, updateOptions: function(t3) {
    if (w2.value) for (let e3 in t3) {
      let n2 = u(e3);
      be.indexOf(n2) === -1 && w2.value.option(n2, t3[e3]);
    }
  }, getChildrenNodes: _2, getUnderlyingVm: T2, emitChanges: x2, alterList: C2, spliceList: O2, updatePosition: I2, getVmIndex: M2, getComponent: A2, resetTransitionData: N2, onDragStart: P2, onDragAdd: k2, onDragRemove: X2, onDragUpdate: R2, updateProperty: function(t3, e3) {
    Object.prototype.hasOwnProperty.call(t3, e3) && (t3[e3] += v2.value);
  }, onDragMove: H2, onDragEnd: V2, mounted: B2, context: y2, sortableInstance: w2, getRelatedContextFromMoveEvent: j2, getTargetedComponent: Y2, computeFutureIndex: F2 };
}, render() {
  let t2 = this.getTag(), n2 = (o2 = this.$attrs, (i2 = this.componentData) ? { ...i2.props, ...i2.attrs } : o2);
  var o2, i2;
  if (typeof t2 == "string") {
    let o3 = this.$slots.default && typeof this.$slots.default == "function" ? this.$slots.default() : null;
    return o3 ? (this.transitionMode = ge(o3), Do(t2, n2, o3)) : Do(t2, n2, []);
  }
  let r2 = this.$slots.default ? { default: this.$slots.default } : {};
  if (this.$slots.default) {
    let t3 = typeof this.$slots.default == "function" ? this.$slots.default() : null;
    this.transitionMode = ge(t3 || []);
  }
  return Do(t2, n2, r2);
} });

export {
  we
};
/*!
  * vue-draggable-next v2.3.0
  * (c) 2025 Anish George
  * @license MIT
  */
/**!
 * Sortable 1.14.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
