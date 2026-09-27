import {
  k
} from "./chunk-YQ4PBQUM.js";
import "./chunk-C332WR7G.js";
import "./chunk-C3WGXGFI.js";
import "./chunk-S7M5ZIRT.js";
import "./chunk-USGTF4JI.js";
import "./chunk-ZBQAVDN7.js";
import "./chunk-E6JHFIG4.js";

// output/native-current/draggable-DWw5WS1c.js
var t = Object.defineProperty, e = (e2, n2, o2) => ((e3, n3, o3) => n3 in e3 ? t(e3, n3, { enumerable: !0, configurable: !0, writable: !0, value: o3 }) : e3[n3] = o3)(e2, typeof n2 != "symbol" ? n2 + "" : n2, o2), o = { init: function(t2) {
  let e2 = t2;
  o.document = e2.document, o.DocumentFragment = e2.DocumentFragment || i, o.SVGElement = e2.SVGElement || i, o.SVGSVGElement = e2.SVGSVGElement || i, o.SVGElementInstance = e2.SVGElementInstance || i, o.Element = e2.Element || i, o.HTMLElement = e2.HTMLElement || o.Element, o.Event = e2.Event, o.Touch = e2.Touch || i, o.PointerEvent = e2.PointerEvent || e2.MSPointerEvent;
}, document: null, DocumentFragment: null, SVGElement: null, SVGSVGElement: null, SVGElementInstance: null, Element: null, HTMLElement: null, Event: null, Touch: null, PointerEvent: null };
function i() {
}
var r = (t2) => !(!t2 || !t2.Window) && t2 instanceof t2.Window, s, a;
function c(t2) {
  s = t2;
  let e2 = t2.document.createTextNode("");
  e2.ownerDocument !== t2.document && typeof t2.wrap == "function" && t2.wrap(e2) === e2 && (t2 = t2.wrap(t2)), a = t2;
}
function l(t2) {
  return r(t2) ? t2 : (t2.ownerDocument || t2).defaultView || a.window;
}
typeof window < "u" && window && c(window);
var d = (t2) => !!t2 && typeof t2 == "object", p = (t2) => typeof t2 == "function", h = { window: (t2) => t2 === a || r(t2), docFrag: (t2) => d(t2) && t2.nodeType === 11, object: d, func: p, number: (t2) => typeof t2 == "number", bool: (t2) => typeof t2 == "boolean", string: (t2) => typeof t2 == "string", element: (t2) => {
  if (!t2 || typeof t2 != "object") return !1;
  let e2 = l(t2) || a;
  return /object|function/.test(typeof Element) ? t2 instanceof Element || t2 instanceof e2.Element : t2.nodeType === 1 && typeof t2.nodeName == "string";
}, plainObject: (t2) => d(t2) && !!t2.constructor && /function Object\b/.test(t2.constructor.toString()), array: (t2) => d(t2) && t2.length !== void 0 && p(t2.splice) }, u = { init: function(t2) {
  let e2 = o.Element, n2 = t2.navigator || {};
  u.supportsTouch = "ontouchstart" in t2 || h.func(t2.DocumentTouch) && o.document instanceof t2.DocumentTouch, u.supportsPointerEvent = n2.pointerEnabled !== !1 && !!o.PointerEvent, u.isIOS = /iP(hone|od|ad)/.test(n2.platform), u.isIOS7 = /iP(hone|od|ad)/.test(n2.platform) && /OS 7[^\d]/.test(n2.appVersion), u.isIe9 = /MSIE 9/.test(n2.userAgent), u.isOperaMobile = n2.appName === "Opera" && u.supportsTouch && /Presto/.test(n2.userAgent), u.prefixedMatchesSelector = "matches" in e2.prototype ? "matches" : "webkitMatchesSelector" in e2.prototype ? "webkitMatchesSelector" : "mozMatchesSelector" in e2.prototype ? "mozMatchesSelector" : "oMatchesSelector" in e2.prototype ? "oMatchesSelector" : "msMatchesSelector", u.pEventTypes = u.supportsPointerEvent ? o.PointerEvent === t2.MSPointerEvent ? { up: "MSPointerUp", down: "MSPointerDown", over: "mouseover", out: "mouseout", move: "MSPointerMove", cancel: "MSPointerCancel" } : { up: "pointerup", down: "pointerdown", over: "pointerover", out: "pointerout", move: "pointermove", cancel: "pointercancel" } : null, u.wheelEvent = o.document && "onmousewheel" in o.document ? "mousewheel" : "wheel";
}, supportsTouch: null, supportsPointerEvent: null, isIOS7: null, isIOS: null, isIe9: null, isOperaMobile: null, prefixedMatchesSelector: null, pEventTypes: null, wheelEvent: null };
function f(t2, e2) {
  if (t2.contains) return t2.contains(e2);
  for (; e2; ) {
    if (e2 === t2) return !0;
    e2 = e2.parentNode;
  }
  return !1;
}
function g(t2, e2) {
  for (; h.element(t2); ) {
    if (v(t2, e2)) return t2;
    t2 = m(t2);
  }
  return null;
}
function m(t2) {
  let e2 = t2.parentNode;
  if (h.docFrag(e2)) {
    for (; (e2 = e2.host) && h.docFrag(e2); ) ;
    return e2;
  }
  return e2;
}
function v(t2, e2) {
  return a !== s && (e2 = e2.replace(/\/deep\//g, " ")), t2[u.prefixedMatchesSelector](e2);
}
var y = (t2) => t2.parentNode || t2.host;
function b(t2, e2) {
  let n2 = [], o2, i2 = t2;
  for (; (o2 = y(i2)) && i2 !== e2 && o2 !== i2.ownerDocument; ) n2.unshift(i2), i2 = o2;
  return n2;
}
function x(t2, e2) {
  return (parseInt(l(t2).getComputedStyle(t2).zIndex, 10) || 0) >= (parseInt(l(e2).getComputedStyle(e2).zIndex, 10) || 0);
}
function w(t2, e2, n2) {
  for (; h.element(t2); ) {
    if (v(t2, e2)) return !0;
    if ((t2 = m(t2)) === n2) return v(t2, e2);
  }
  return !1;
}
function E(t2) {
  return t2.correspondingUseElement || t2;
}
function I(t2) {
  let e2 = t2 instanceof o.SVGElement ? t2.getBoundingClientRect() : t2.getClientRects()[0];
  return e2 && { left: e2.left, right: e2.right, top: e2.top, bottom: e2.bottom, width: e2.width || e2.right - e2.left, height: e2.height || e2.bottom - e2.top };
}
function S(t2) {
  let e2 = I(t2);
  if (!u.isIOS7 && e2) {
    let o2 = { x: (n2 = (n2 = l(t2)) || a).scrollX || n2.document.documentElement.scrollLeft, y: n2.scrollY || n2.document.documentElement.scrollTop };
    e2.left += o2.x, e2.right += o2.x, e2.top += o2.y, e2.bottom += o2.y;
  }
  var n2;
  return e2;
}
function D(t2) {
  return !!h.string(t2) && (o.document.querySelector(t2), !0);
}
function M(t2, e2) {
  for (let n2 in e2) t2[n2] = e2[n2];
  return t2;
}
function T(t2, e2) {
  let n2 = !1;
  return function() {
    return n2 || (a.console.warn(e2), n2 = !0), t2.apply(this, arguments);
  };
}
function _(t2, e2) {
  return t2.name = e2.name, t2.axis = e2.axis, t2.edges = e2.edges, t2;
}
function P(t2) {
  return h.bool(t2) ? (this.options.styleCursor = t2, this) : t2 === null ? (delete this.options.styleCursor, this) : this.options.styleCursor;
}
function O(t2) {
  return h.func(t2) ? (this.options.actionChecker = t2, this) : t2 === null ? (delete this.options.actionChecker, this) : this.options.actionChecker;
}
var A = { id: "auto-start/interactableMethods", install: function(t2) {
  let { Interactable: e2 } = t2;
  e2.prototype.getAction = function(e3, n2, o2, i2) {
    let r2 = (function(t3, e4, n3, o3, i3) {
      let r3 = t3.getRect(o3), s2 = e4.buttons || { 0: 1, 1: 4, 3: 8, 4: 16 }[e4.button], a2 = { action: null, interactable: t3, interaction: n3, element: o3, rect: r3, buttons: s2 };
      return i3.fire("auto-start:check", a2), a2.action;
    })(this, n2, o2, i2, t2);
    return this.options.actionChecker ? this.options.actionChecker(e3, n2, r2, this, i2, o2) : r2;
  }, e2.prototype.ignoreFrom = T(function(t3) {
    return this._backCompatOption("ignoreFrom", t3);
  }, "Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."), e2.prototype.allowFrom = T(function(t3) {
    return this._backCompatOption("allowFrom", t3);
  }, "Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."), e2.prototype.actionChecker = O, e2.prototype.styleCursor = P;
} };
function C(t2, e2, n2, o2, i2) {
  return e2.testIgnoreAllow(e2.options[t2.name], n2, o2) && e2.options[t2.name].enabled && R(e2, n2, t2, i2) ? t2 : null;
}
function z(t2, e2, n2, o2, i2, r2, s2) {
  for (let a2 = 0, c2 = o2.length; a2 < c2; a2++) {
    let c3 = o2[a2], l2 = i2[a2], d2 = c3.getAction(e2, n2, t2, l2);
    if (!d2) continue;
    let p2 = C(d2, c3, l2, r2, s2);
    if (p2) return { action: p2, interactable: c3, element: l2 };
  }
  return { action: null, interactable: null, element: null };
}
function F(t2, e2, n2, o2, i2) {
  let r2 = [], s2 = [], a2 = o2;
  function c2(t3) {
    r2.push(t3), s2.push(a2);
  }
  for (; h.element(a2); ) {
    r2 = [], s2 = [], i2.interactables.forEachMatch(a2, c2);
    let l2 = z(t2, e2, n2, r2, s2, o2, i2);
    if (l2.action && !l2.interactable.options[l2.action.name].manualStart) return l2;
    a2 = m(a2);
  }
  return { action: null, interactable: null, element: null };
}
function k2(t2, e2, n2) {
  let { action: o2, interactable: i2, element: r2 } = e2;
  o2 = o2 || { name: null }, t2.interactable = i2, t2.element = r2, _(t2.prepared, o2), t2.rect = i2 && o2.name ? i2.getRect(r2) : null, j(t2, n2), n2.fire("autoStart:prepared", { interaction: t2 });
}
function R(t2, e2, n2, o2) {
  let i2 = t2.options, r2 = i2[n2.name].max, s2 = i2[n2.name].maxPerElement, a2 = o2.autoStart.maxInteractions, c2 = 0, l2 = 0, d2 = 0;
  if (!(r2 && s2 && a2)) return !1;
  for (let p2 of o2.interactions.list) {
    let o3 = p2.prepared.name;
    if (p2.interacting() && (c2++, c2 >= a2 || p2.interactable === t2 && (l2 += o3 === n2.name ? 1 : 0, l2 >= r2 || p2.element === e2 && (d2++, o3 === n2.name && d2 >= s2))))
      return !1;
  }
  return a2 > 0;
}
function X(t2, e2) {
  return h.number(t2) ? (e2.autoStart.maxInteractions = t2, this) : e2.autoStart.maxInteractions;
}
function Y(t2, e2, n2) {
  let { cursorElement: o2 } = n2.autoStart;
  o2 && o2 !== t2 && (o2.style.cursor = ""), t2.ownerDocument.documentElement.style.cursor = e2, t2.style.cursor = e2, n2.autoStart.cursorElement = e2 ? t2 : null;
}
function j(t2, e2) {
  let { interactable: n2, element: o2, prepared: i2 } = t2;
  if (t2.pointerType !== "mouse" || !n2 || !n2.options.styleCursor) return void (e2.autoStart.cursorElement && Y(e2.autoStart.cursorElement, "", e2));
  let r2 = "";
  if (i2.name) {
    let s2 = n2.options[i2.name].cursorChecker;
    r2 = h.func(s2) ? s2(i2, n2, o2, t2._interacting) : e2.actions.map[i2.name].getCursor(i2);
  }
  Y(t2.element, r2 || "", e2);
}
var L = { id: "auto-start/base", before: ["actions"], install: function(t2) {
  let { interactStatic: e2, defaults: n2 } = t2;
  t2.usePlugin(A), n2.base.actionChecker = null, n2.base.styleCursor = !0, M(n2.perAction, { manualStart: !1, max: 1 / 0, maxPerElement: 1, allowFrom: null, ignoreFrom: null, mouseButtons: 1 }), e2.maxInteractions = (e3) => X(e3, t2), t2.autoStart = { maxInteractions: 1 / 0, withinInteractionLimit: R, cursorElement: null };
}, listeners: { "interactions:down": function(t2, e2) {
  let { interaction: n2, pointer: o2, event: i2, eventTarget: r2 } = t2;
  n2.interacting() || k2(n2, F(n2, o2, i2, r2, e2), e2);
}, "interactions:move": (t2, e2) => {
  (function(t3, e3) {
    let { interaction: n2, pointer: o2, event: i2, eventTarget: r2 } = t3;
    n2.pointerType !== "mouse" || n2.pointerIsDown || n2.interacting() || k2(n2, F(n2, o2, i2, r2, e3), e3);
  })(t2, e2), (function(t3, e3) {
    let { interaction: n2 } = t3;
    if (!n2.pointerIsDown || n2.interacting() || !n2.pointerWasMoved || !n2.prepared.name) return;
    e3.fire("autoStart:before-start", t3);
    let { interactable: o2 } = n2, i2 = n2.prepared.name;
    i2 && o2 && (o2.options[i2].manualStart || !R(o2, n2.element, n2.prepared, e3) ? n2.stop() : (n2.start(n2.prepared, o2, n2.element), j(n2, e3)));
  })(t2, e2);
}, "interactions:stop": function(t2, e2) {
  let { interaction: n2 } = t2, { interactable: o2 } = n2;
  o2 && o2.options.styleCursor && Y(n2.element, "", e2);
} }, maxInteractions: X, withinInteractionLimit: R, validateAction: C }, G = { id: "auto-start/dragAxis", listeners: { "autoStart:before-start": function(t2, e2) {
  let { interaction: n2, eventTarget: o2, dx: i2, dy: r2 } = t2;
  if (n2.prepared.name !== "drag") return;
  let s2 = Math.abs(i2), a2 = Math.abs(r2), c2 = n2.interactable.options.drag, l2 = c2.startAxis, d2 = s2 > a2 ? "x" : s2 < a2 ? "y" : "xy";
  if (n2.prepared.axis = c2.lockAxis === "start" ? d2[0] : c2.lockAxis, d2 !== "xy" && l2 !== "xy" && l2 !== d2) {
    n2.prepared.name = null;
    let t3 = o2, i3 = function(i4) {
      if (i4 === n2.interactable) return;
      let r3 = n2.interactable.options.drag;
      if (!r3.manualStart && i4.testIgnoreAllow(r3, t3, o2)) {
        let r4 = i4.getAction(n2.downPointer, n2.downEvent, n2, t3);
        if (r4 && r4.name === "drag" && (function(t4, e3) {
          if (!e3) return !1;
          let n3 = e3.options.drag.startAxis;
          return t4 === "xy" || n3 === "xy" || n3 === t4;
        })(d2, i4) && L.validateAction(r4, i4, t3, o2, e2)) return i4;
      }
    };
    for (; h.element(t3); ) {
      let o3 = e2.interactables.forEachMatch(t3, i3);
      if (o3) {
        n2.prepared.name = "drag", n2.interactable = o3, n2.element = t3;
        break;
      }
      t3 = m(t3);
    }
  }
} } };
function $(t2) {
  let e2 = t2.prepared && t2.prepared.name;
  if (!e2) return null;
  let n2 = t2.interactable.options;
  return n2[e2].hold || n2[e2].delay;
}
var B = { id: "auto-start/hold", install: function(t2) {
  let { defaults: e2 } = t2;
  t2.usePlugin(L), e2.perAction.hold = 0, e2.perAction.delay = 0;
}, listeners: { "interactions:new": (t2) => {
  let { interaction: e2 } = t2;
  e2.autoStartHoldTimer = null;
}, "autoStart:prepared": (t2) => {
  let { interaction: e2 } = t2, n2 = $(e2);
  n2 > 0 && (e2.autoStartHoldTimer = setTimeout(() => {
    e2.start(e2.prepared, e2.interactable, e2.element);
  }, n2));
}, "interactions:move": (t2) => {
  let { interaction: e2, duplicate: n2 } = t2;
  e2.autoStartHoldTimer && e2.pointerWasMoved && !n2 && (clearTimeout(e2.autoStartHoldTimer), e2.autoStartHoldTimer = null);
}, "autoStart:before-start": (t2) => {
  let { interaction: e2 } = t2;
  $(e2) > 0 && (e2.prepared.name = null);
} }, getHoldDuration: $ }, U = { id: "auto-start", install(t2) {
  t2.usePlugin(L), t2.usePlugin(B), t2.usePlugin(G);
} }, q = (t2, e2) => {
  for (let n2 of e2) t2.push(n2);
  return t2;
}, V = (t2) => q([], t2), W = (t2, e2) => {
  for (let n2 = 0; n2 < t2.length; n2++) if (e2(t2[n2], n2, t2)) return n2;
  return -1;
}, H = (t2, e2) => t2[W(t2, e2)];
function N(t2) {
  let e2 = {};
  for (let n2 in t2) {
    let o2 = t2[n2];
    h.plainObject(o2) ? e2[n2] = N(o2) : h.array(o2) ? e2[n2] = V(o2) : e2[n2] = o2;
  }
  return e2;
}
var K, Z, J = 0, Q = { request: (t2) => K(t2), cancel: (t2) => Z(t2), init: function(t2) {
  if (K = t2.requestAnimationFrame, Z = t2.cancelAnimationFrame, !K) {
    let e2 = ["ms", "moz", "webkit", "o"];
    for (let n2 of e2) K = t2[`${n2}RequestAnimationFrame`], Z = t2[`${n2}CancelAnimationFrame`] || t2[`${n2}CancelRequestAnimationFrame`];
  }
  K = K && K.bind(t2), Z = Z && Z.bind(t2), K || (K = (e2) => {
    let n2 = Date.now(), o2 = Math.max(0, 16 - (n2 - J)), i2 = t2.setTimeout(() => {
      e2(n2 + o2);
    }, o2);
    return J = n2 + o2, i2;
  }, Z = (t3) => clearTimeout(t3));
} };
function tt(t2, e2) {
  let n2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : (t3) => !0, o2 = arguments.length > 3 ? arguments[3] : void 0;
  if (o2 = o2 || {}, h.string(t2) && t2.search(" ") !== -1 && (t2 = et(t2)), h.array(t2)) return t2.forEach((t3) => tt(t3, e2, n2, o2)), o2;
  if (h.object(t2) && (e2 = t2, t2 = ""), h.func(e2) && n2(t2)) o2[t2] = o2[t2] || [], o2[t2].push(e2);
  else if (h.array(e2)) for (let i2 of e2) tt(t2, i2, n2, o2);
  else if (h.object(e2)) for (let i2 in e2)
    tt(et(i2).map((e3) => `${t2}${e3}`), e2[i2], n2, o2);
  return o2;
}
function et(t2) {
  return t2.trim().split(/ +/);
}
function nt(t2, e2) {
  for (let n2 of e2) {
    if (t2.immediatePropagationStopped) break;
    n2(t2);
  }
}
var ot = class {
  constructor(t2) {
    this.options = void 0, this.types = {}, this.propagationStopped = !1, this.immediatePropagationStopped = !1, this.global = void 0, this.options = M({}, t2 || {});
  }
  fire(t2) {
    let e2, n2 = this.global;
    (e2 = this.types[t2.type]) && nt(t2, e2), !t2.propagationStopped && n2 && (e2 = n2[t2.type]) && nt(t2, e2);
  }
  on(t2, e2) {
    let n2 = tt(t2, e2);
    for (t2 in n2) this.types[t2] = q(this.types[t2] || [], n2[t2]);
  }
  off(t2, e2) {
    let n2 = tt(t2, e2);
    for (t2 in n2) {
      let e3 = this.types[t2];
      if (e3 && e3.length) for (let o2 of n2[t2]) {
        let t3 = e3.indexOf(o2);
        t3 !== -1 && e3.splice(t3, 1);
      }
    }
  }
  getRect(t2) {
    return null;
  }
}, it = ["webkit", "moz"];
function rt(t2, e2) {
  t2.__set || (t2.__set = {});
  for (let n2 in e2) it.some((t3) => n2.indexOf(t3) === 0) || typeof t2[n2] != "function" && n2 !== "__set" && Object.defineProperty(t2, n2, { get: () => n2 in t2.__set ? t2.__set[n2] : t2.__set[n2] = e2[n2], set(e3) {
    t2.__set[n2] = e3;
  }, configurable: !0 });
  return t2;
}
var st = (t2, e2) => Math.sqrt(t2 * t2 + e2 * e2);
function at(t2, e2) {
  t2.page = t2.page || {}, t2.page.x = e2.page.x, t2.page.y = e2.page.y, t2.client = t2.client || {}, t2.client.x = e2.client.x, t2.client.y = e2.client.y, t2.timeStamp = e2.timeStamp;
}
function ct(t2) {
  return t2 instanceof o.Event || t2 instanceof o.Touch;
}
function lt(t2, e2, n2) {
  return t2 = t2 || "page", (n2 = n2 || {}).x = e2[t2 + "X"], n2.y = e2[t2 + "Y"], n2;
}
function dt(t2, e2) {
  return e2 = e2 || { x: 0, y: 0 }, u.isOperaMobile && ct(t2) ? (lt("screen", t2, e2), e2.x += window.scrollX, e2.y += window.scrollY) : lt("page", t2, e2), e2;
}
function pt(t2) {
  return h.number(t2.pointerId) ? t2.pointerId : t2.identifier;
}
function ht(t2, e2, n2) {
  let o2 = e2.length > 1 ? ft(e2) : e2[0];
  dt(o2, t2.page), (function(t3, e3) {
    e3 = e3 || {}, u.isOperaMobile && ct(t3) ? lt("screen", t3, e3) : lt("client", t3, e3);
  })(o2, t2.client), t2.timeStamp = n2;
}
function ut(t2) {
  let e2 = [];
  return h.array(t2) ? (e2[0] = t2[0], e2[1] = t2[1]) : t2.type === "touchend" ? t2.touches.length === 1 ? (e2[0] = t2.touches[0], e2[1] = t2.changedTouches[0]) : t2.touches.length === 0 && (e2[0] = t2.changedTouches[0], e2[1] = t2.changedTouches[1]) : (e2[0] = t2.touches[0], e2[1] = t2.touches[1]), e2;
}
function ft(t2) {
  let e2 = { pageX: 0, pageY: 0, clientX: 0, clientY: 0, screenX: 0, screenY: 0 };
  for (let n2 of t2) for (let t3 in e2) e2[t3] += n2[t3];
  for (let n2 in e2) e2[n2] /= t2.length;
  return e2;
}
function gt(t2) {
  if (!t2.length) return null;
  let e2 = ut(t2), n2 = Math.min(e2[0].pageX, e2[1].pageX), o2 = Math.min(e2[0].pageY, e2[1].pageY), i2 = Math.max(e2[0].pageX, e2[1].pageX), r2 = Math.max(e2[0].pageY, e2[1].pageY);
  return { x: n2, y: o2, left: n2, top: o2, right: i2, bottom: r2, width: i2 - n2, height: r2 - o2 };
}
function mt(t2, e2) {
  let n2 = e2 + "X", o2 = e2 + "Y", i2 = ut(t2), r2 = i2[0][n2] - i2[1][n2], s2 = i2[0][o2] - i2[1][o2];
  return st(r2, s2);
}
function vt(t2, e2) {
  let n2 = e2 + "X", o2 = e2 + "Y", i2 = ut(t2), r2 = i2[1][n2] - i2[0][n2], s2 = i2[1][o2] - i2[0][o2];
  return 180 * Math.atan2(s2, r2) / Math.PI;
}
function yt(t2) {
  let e2 = h.func(t2.composedPath) ? t2.composedPath() : t2.path;
  return [E(e2 ? e2[0] : t2.target), E(t2.currentTarget)];
}
var bt = class {
  constructor(t2) {
    this.currentTarget = void 0, this.originalEvent = void 0, this.type = void 0, this.originalEvent = t2, rt(this, t2);
  }
  preventOriginalDefault() {
    this.originalEvent.preventDefault();
  }
  stopPropagation() {
    this.originalEvent.stopPropagation();
  }
  stopImmediatePropagation() {
    this.originalEvent.stopImmediatePropagation();
  }
};
function xt(t2) {
  return h.object(t2) ? { capture: !!t2.capture, passive: !!t2.passive } : { capture: !!t2, passive: !1 };
}
function wt(t2, e2) {
  return t2 === e2 || (typeof t2 == "boolean" ? !!e2.capture === t2 && !e2.passive : !!t2.capture == !!e2.capture && !!t2.passive == !!e2.passive);
}
var Et = { id: "events", install: function(t2) {
  var e2;
  let n2 = [], o2 = {}, i2 = [], r2 = { add: s2, remove: a2, addDelegate: function(t3, e3, n3, r3, a3) {
    let d2 = xt(a3);
    if (!o2[n3]) {
      o2[n3] = [];
      for (let t4 of i2) s2(t4, n3, c2), s2(t4, n3, l2, !0);
    }
    let p2 = o2[n3], h2 = H(p2, (n4) => n4.selector === t3 && n4.context === e3);
    h2 || (h2 = { selector: t3, context: e3, listeners: [] }, p2.push(h2)), h2.listeners.push({ func: r3, options: d2 });
  }, removeDelegate: function(t3, e3, n3, i3, r3) {
    let s3 = xt(r3), d2 = o2[n3], p2, h2 = !1;
    if (d2)
      for (p2 = d2.length - 1; p2 >= 0; p2--) {
        let o3 = d2[p2];
        if (o3.selector === t3 && o3.context === e3) {
          let { listeners: t4 } = o3;
          for (let o4 = t4.length - 1; o4 >= 0; o4--) {
            let r4 = t4[o4];
            if (r4.func === i3 && wt(r4.options, s3)) {
              t4.splice(o4, 1), t4.length || (d2.splice(p2, 1), a2(e3, n3, c2), a2(e3, n3, l2, !0)), h2 = !0;
              break;
            }
          }
          if (h2) break;
        }
      }
  }, delegateListener: c2, delegateUseCapture: l2, delegatedEvents: o2, documents: i2, targets: n2, supportsOptions: !1, supportsPassive: !1 };
  function s2(t3, e3, o3, i3) {
    if (!t3.addEventListener) return;
    let s3 = xt(i3), a3 = H(n2, (e4) => e4.eventTarget === t3);
    a3 || (a3 = { eventTarget: t3, events: {} }, n2.push(a3)), a3.events[e3] || (a3.events[e3] = []), H(a3.events[e3], (t4) => t4.func === o3 && wt(t4.options, s3)) || (t3.addEventListener(e3, o3, r2.supportsOptions ? s3 : s3.capture), a3.events[e3].push({ func: o3, options: s3 }));
  }
  function a2(t3, e3, o3, i3) {
    if (!t3.addEventListener || !t3.removeEventListener) return;
    let s3 = W(n2, (e4) => e4.eventTarget === t3), c3 = n2[s3];
    if (!c3 || !c3.events) return;
    if (e3 === "all") {
      for (e3 in c3.events) c3.events.hasOwnProperty(e3) && a2(t3, e3, "all");
      return;
    }
    let l3 = !1, d2 = c3.events[e3];
    if (d2) {
      if (o3 === "all") {
        for (let n3 = d2.length - 1; n3 >= 0; n3--) {
          let o4 = d2[n3];
          a2(t3, e3, o4.func, o4.options);
        }
        return;
      }
      {
        let n3 = xt(i3);
        for (let i4 = 0; i4 < d2.length; i4++) {
          let s4 = d2[i4];
          if (s4.func === o3 && wt(s4.options, n3)) {
            t3.removeEventListener(e3, o3, r2.supportsOptions ? n3 : n3.capture), d2.splice(i4, 1), d2.length === 0 && (delete c3.events[e3], l3 = !0);
            break;
          }
        }
      }
    }
    l3 && !Object.keys(c3.events).length && n2.splice(s3, 1);
  }
  function c2(t3, e3) {
    let n3 = xt(e3), i3 = new bt(t3), r3 = o2[t3.type], [s3] = yt(t3), a3 = s3;
    for (; h.element(a3); ) {
      for (let t4 = 0; t4 < r3.length; t4++) {
        let e4 = r3[t4], { selector: o3, context: c3 } = e4;
        if (v(a3, o3) && f(c3, s3) && f(c3, a3)) {
          let { listeners: t5 } = e4;
          i3.currentTarget = a3;
          for (let e5 of t5) wt(e5.options, n3) && e5.func(i3);
        }
      }
      a3 = m(a3);
    }
  }
  function l2(t3) {
    return c2.call(this, t3, !0);
  }
  return (e2 = t2.document) == null || e2.createElement("div").addEventListener("test", null, { get capture() {
    return r2.supportsOptions = !0;
  }, get passive() {
    return r2.supportsPassive = !0;
  } }), t2.events = r2, r2;
} }, It = function(t2) {
  return /^(always|never|auto)$/.test(t2) ? (this.options.preventDefault = t2, this) : h.bool(t2) ? (this.options.preventDefault = t2 ? "always" : "never", this) : this.options.preventDefault;
};
function St(t2) {
  let { interaction: e2, event: n2 } = t2;
  e2.interactable && e2.interactable.checkAndPreventDefault(n2);
}
var Dt = { id: "core/interactablePreventDefault", install: function(t2) {
  let { Interactable: e2 } = t2;
  e2.prototype.preventDefault = It, e2.prototype.checkAndPreventDefault = function(e3) {
    return (function(t3, e4, n2) {
      let o2 = t3.options.preventDefault;
      if (o2 !== "never") if (o2 !== "always") {
        if (e4.events.supportsPassive && /^touch(start|move)$/.test(n2.type)) {
          let t4 = l(n2.target).document, o3 = e4.getDocOptions(t4);
          if (!o3 || !o3.events || o3.events.passive !== !1) return;
        }
        /^(mouse|pointer|touch)*(down|start)/i.test(n2.type) || h.element(n2.target) && v(n2.target, "input,select,textarea,[contenteditable=true],[contenteditable=true] *") || n2.preventDefault();
      } else n2.preventDefault();
    })(this, t2, e3);
  }, t2.interactions.docEvents.push({ type: "dragstart", listener(e3) {
    for (let n2 of t2.interactions.list) if (n2.element && (n2.element === e3.target || f(n2.element, e3.target))) return void n2.interactable.checkAndPreventDefault(e3);
  } });
}, listeners: ["down", "move", "up", "cancel"].reduce((t2, e2) => (t2[`interactions:${e2}`] = St, t2), {}) };
function Mt(t2, e2, n2, o2) {
  let i2 = t2;
  return h.string(i2) ? i2 = (function(t3, e3, n3) {
    return t3 === "parent" ? m(n3) : t3 === "self" ? e3.getRect(n3) : g(n3, t3);
  })(i2, e2, n2) : h.func(i2) && (i2 = i2(...o2)), h.element(i2) && (i2 = S(i2)), i2;
}
function Tt(t2) {
  return t2 && { x: "x" in t2 ? t2.x : t2.left, y: "y" in t2 ? t2.y : t2.top };
}
function _t(t2) {
  return !t2 || "x" in t2 && "y" in t2 || ((t2 = M({}, t2)).x = t2.left || 0, t2.y = t2.top || 0, t2.width = t2.width || (t2.right || 0) - t2.x, t2.height = t2.height || (t2.bottom || 0) - t2.y), t2;
}
function Pt(t2, e2, n2) {
  t2.left && (e2.left += n2.x), t2.right && (e2.right += n2.x), t2.top && (e2.top += n2.y), t2.bottom && (e2.bottom += n2.y), e2.width = e2.right - e2.left, e2.height = e2.bottom - e2.top;
}
function Ot(t2, e2, n2) {
  let o2 = n2 && t2.options[n2];
  return Tt(Mt(o2 && o2.origin || t2.options.origin, t2, e2, [t2 && e2])) || { x: 0, y: 0 };
}
var At = class {
  constructor(t2) {
    this.immediatePropagationStopped = !1, this.propagationStopped = !1, this._interaction = t2;
  }
  preventDefault() {
  }
  stopPropagation() {
    this.propagationStopped = !0;
  }
  stopImmediatePropagation() {
    this.immediatePropagationStopped = this.propagationStopped = !0;
  }
};
Object.defineProperty(At.prototype, "interaction", { get() {
  return this._interaction._proxy;
}, set() {
} });
var Ct = { base: { preventDefault: "auto", deltaSource: "page" }, perAction: { enabled: !1, origin: { x: 0, y: 0 } }, actions: {} }, zt = class extends At {
  constructor(t2, e2, n2, o2, i2, r2, s2) {
    super(t2), this.relatedTarget = null, this.screenX = void 0, this.screenY = void 0, this.button = void 0, this.buttons = void 0, this.ctrlKey = void 0, this.shiftKey = void 0, this.altKey = void 0, this.metaKey = void 0, this.page = void 0, this.client = void 0, this.delta = void 0, this.rect = void 0, this.x0 = void 0, this.y0 = void 0, this.t0 = void 0, this.dt = void 0, this.duration = void 0, this.clientX0 = void 0, this.clientY0 = void 0, this.velocity = void 0, this.speed = void 0, this.swipe = void 0, this.axes = void 0, this.preEnd = void 0, i2 = i2 || t2.element;
    let a2 = t2.interactable, c2 = (a2 && a2.options || Ct).deltaSource, l2 = Ot(a2, i2, n2), d2 = o2 === "start", p2 = o2 === "end", h2 = d2 ? this : t2.prevEvent, u2 = d2 ? t2.coords.start : p2 ? { page: h2.page, client: h2.client, timeStamp: t2.coords.cur.timeStamp } : t2.coords.cur;
    this.page = M({}, u2.page), this.client = M({}, u2.client), this.rect = M({}, t2.rect), this.timeStamp = u2.timeStamp, p2 || (this.page.x -= l2.x, this.page.y -= l2.y, this.client.x -= l2.x, this.client.y -= l2.y), this.ctrlKey = e2.ctrlKey, this.altKey = e2.altKey, this.shiftKey = e2.shiftKey, this.metaKey = e2.metaKey, this.button = e2.button, this.buttons = e2.buttons, this.target = i2, this.currentTarget = i2, this.preEnd = r2, this.type = s2 || n2 + (o2 || ""), this.interactable = a2, this.t0 = d2 ? t2.pointers[t2.pointers.length - 1].downTime : h2.t0, this.x0 = t2.coords.start.page.x - l2.x, this.y0 = t2.coords.start.page.y - l2.y, this.clientX0 = t2.coords.start.client.x - l2.x, this.clientY0 = t2.coords.start.client.y - l2.y, this.delta = d2 || p2 ? { x: 0, y: 0 } : { x: this[c2].x - h2[c2].x, y: this[c2].y - h2[c2].y }, this.dt = t2.coords.delta.timeStamp, this.duration = this.timeStamp - this.t0, this.velocity = M({}, t2.coords.velocity[c2]), this.speed = st(this.velocity.x, this.velocity.y), this.swipe = p2 || o2 === "inertiastart" ? this.getSwipe() : null;
  }
  getSwipe() {
    let t2 = this._interaction;
    if (t2.prevEvent.speed < 600 || this.timeStamp - t2.prevEvent.timeStamp > 150) return null;
    let e2 = 180 * Math.atan2(t2.prevEvent.velocityY, t2.prevEvent.velocityX) / Math.PI;
    e2 < 0 && (e2 += 360);
    let n2 = 112.5 <= e2 && e2 < 247.5, o2 = 202.5 <= e2 && e2 < 337.5;
    return { up: o2, down: !o2 && 22.5 <= e2 && e2 < 157.5, left: n2, right: !n2 && (292.5 <= e2 || e2 < 67.5), angle: e2, speed: t2.prevEvent.speed, velocity: { x: t2.prevEvent.velocityX, y: t2.prevEvent.velocityY } };
  }
  preventDefault() {
  }
  stopImmediatePropagation() {
    this.immediatePropagationStopped = this.propagationStopped = !0;
  }
  stopPropagation() {
    this.propagationStopped = !0;
  }
};
Object.defineProperties(zt.prototype, { pageX: { get() {
  return this.page.x;
}, set(t2) {
  this.page.x = t2;
} }, pageY: { get() {
  return this.page.y;
}, set(t2) {
  this.page.y = t2;
} }, clientX: { get() {
  return this.client.x;
}, set(t2) {
  this.client.x = t2;
} }, clientY: { get() {
  return this.client.y;
}, set(t2) {
  this.client.y = t2;
} }, dx: { get() {
  return this.delta.x;
}, set(t2) {
  this.delta.x = t2;
} }, dy: { get() {
  return this.delta.y;
}, set(t2) {
  this.delta.y = t2;
} }, velocityX: { get() {
  return this.velocity.x;
}, set(t2) {
  this.velocity.x = t2;
} }, velocityY: { get() {
  return this.velocity.y;
}, set(t2) {
  this.velocity.y = t2;
} } });
var Ft = class {
  constructor(t2, e2, n2, o2, i2) {
    this.id = void 0, this.pointer = void 0, this.event = void 0, this.downTime = void 0, this.downTarget = void 0, this.id = t2, this.pointer = e2, this.event = n2, this.downTime = o2, this.downTarget = i2;
  }
}, kt = (function(t2) {
  return t2.interactable = "", t2.element = "", t2.prepared = "", t2.pointerIsDown = "", t2.pointerWasMoved = "", t2._proxy = "", t2;
})({}), Rt = (function(t2) {
  return t2.start = "", t2.move = "", t2.end = "", t2.stop = "", t2.interacting = "", t2;
})({}), Xt = 0, Yt = class {
  get pointerMoveTolerance() {
    return 1;
  }
  constructor(t2) {
    this.interactable = null, this.element = null, this.rect = null, this._rects = void 0, this.edges = null, this._scopeFire = void 0, this.prepared = { name: null, axis: null, edges: null }, this.pointerType = void 0, this.pointers = [], this.downEvent = null, this.downPointer = {}, this._latestPointer = { pointer: null, event: null, eventTarget: null }, this.prevEvent = null, this.pointerIsDown = !1, this.pointerWasMoved = !1, this._interacting = !1, this._ending = !1, this._stopped = !0, this._proxy = void 0, this.simulation = null, this.doMove = T(function(t3) {
      this.move(t3);
    }, "The interaction.doMove() method has been renamed to interaction.move()"), this.coords = { start: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 }, prev: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 }, cur: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 }, delta: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 }, velocity: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 } }, this._id = Xt++;
    let { pointerType: e2, scopeFire: n2 } = t2;
    this._scopeFire = n2, this.pointerType = e2;
    let o2 = this;
    this._proxy = {};
    for (let i2 in kt) Object.defineProperty(this._proxy, i2, { get: () => o2[i2] });
    for (let i2 in Rt) Object.defineProperty(this._proxy, i2, { value: function() {
      return o2[i2](...arguments);
    } });
    this._scopeFire("interactions:new", { interaction: this });
  }
  pointerDown(t2, e2, n2) {
    let o2 = this.updatePointer(t2, e2, n2, !0), i2 = this.pointers[o2];
    this._scopeFire("interactions:down", { pointer: t2, event: e2, eventTarget: n2, pointerIndex: o2, pointerInfo: i2, type: "down", interaction: this });
  }
  start(t2, e2, n2) {
    return !(this.interacting() || !this.pointerIsDown || this.pointers.length < (t2.name === "gesture" ? 2 : 1) || !e2.options[t2.name].enabled) && (_(this.prepared, t2), this.interactable = e2, this.element = n2, this.rect = e2.getRect(n2), this.edges = this.prepared.edges ? M({}, this.prepared.edges) : { left: !0, right: !0, top: !0, bottom: !0 }, this._stopped = !1, this._interacting = this._doPhase({ interaction: this, event: this.downEvent, phase: "start" }) && !this._stopped, this._interacting);
  }
  pointerMove(t2, e2, n2) {
    this.simulation || this.modification && this.modification.endResult || this.updatePointer(t2, e2, n2, !1);
    let o2 = this.coords.cur.page.x === this.coords.prev.page.x && this.coords.cur.page.y === this.coords.prev.page.y && this.coords.cur.client.x === this.coords.prev.client.x && this.coords.cur.client.y === this.coords.prev.client.y, i2, r2;
    this.pointerIsDown && !this.pointerWasMoved && (i2 = this.coords.cur.client.x - this.coords.start.client.x, r2 = this.coords.cur.client.y - this.coords.start.client.y, this.pointerWasMoved = st(i2, r2) > this.pointerMoveTolerance);
    let s2 = this.getPointerIndex(t2), a2 = { pointer: t2, pointerIndex: s2, pointerInfo: this.pointers[s2], event: e2, type: "move", eventTarget: n2, dx: i2, dy: r2, duplicate: o2, interaction: this };
    o2 || (function(t3, e3) {
      let n3 = Math.max(e3.timeStamp / 1e3, 1e-3);
      t3.page.x = e3.page.x / n3, t3.page.y = e3.page.y / n3, t3.client.x = e3.client.x / n3, t3.client.y = e3.client.y / n3, t3.timeStamp = n3;
    })(this.coords.velocity, this.coords.delta), this._scopeFire("interactions:move", a2), o2 || this.simulation || (this.interacting() && (a2.type = null, this.move(a2)), this.pointerWasMoved && at(this.coords.prev, this.coords.cur));
  }
  move(t2) {
    var e2;
    t2 && t2.event || ((e2 = this.coords.delta).page.x = 0, e2.page.y = 0, e2.client.x = 0, e2.client.y = 0), (t2 = M({ pointer: this._latestPointer.pointer, event: this._latestPointer.event, eventTarget: this._latestPointer.eventTarget, interaction: this }, t2 || {})).phase = "move", this._doPhase(t2);
  }
  pointerUp(t2, e2, n2, o2) {
    let i2 = this.getPointerIndex(t2);
    i2 === -1 && (i2 = this.updatePointer(t2, e2, n2, !1));
    let r2 = /cancel$/i.test(e2.type) ? "cancel" : "up";
    this._scopeFire(`interactions:${r2}`, { pointer: t2, pointerIndex: i2, pointerInfo: this.pointers[i2], event: e2, eventTarget: n2, type: r2, curEventTarget: o2, interaction: this }), this.simulation || this.end(e2), this.removePointer(t2, e2);
  }
  documentBlur(t2) {
    this.end(t2), this._scopeFire("interactions:blur", { event: t2, type: "blur", interaction: this });
  }
  end(t2) {
    let e2;
    this._ending = !0, t2 = t2 || this._latestPointer.event, this.interacting() && (e2 = this._doPhase({ event: t2, interaction: this, phase: "end" })), this._ending = !1, e2 === !0 && this.stop();
  }
  currentAction() {
    return this._interacting ? this.prepared.name : null;
  }
  interacting() {
    return this._interacting;
  }
  stop() {
    this._scopeFire("interactions:stop", { interaction: this }), this.interactable = this.element = null, this._interacting = !1, this._stopped = !0, this.prepared.name = this.prevEvent = null;
  }
  getPointerIndex(t2) {
    let e2 = pt(t2);
    return this.pointerType === "mouse" || this.pointerType === "pen" ? this.pointers.length - 1 : W(this.pointers, (t3) => t3.id === e2);
  }
  getPointerInfo(t2) {
    return this.pointers[this.getPointerIndex(t2)];
  }
  updatePointer(t2, e2, n2, o2) {
    let i2 = pt(t2), r2 = this.getPointerIndex(t2), s2 = this.pointers[r2];
    var a2, c2, l2;
    return o2 = o2 !== !1 && (o2 || /(down|start)$/i.test(e2.type)), s2 ? s2.pointer = t2 : (s2 = new Ft(i2, t2, e2, null, null), r2 = this.pointers.length, this.pointers.push(s2)), ht(this.coords.cur, this.pointers.map((t3) => t3.pointer), this._now()), a2 = this.coords.delta, c2 = this.coords.prev, l2 = this.coords.cur, a2.page.x = l2.page.x - c2.page.x, a2.page.y = l2.page.y - c2.page.y, a2.client.x = l2.client.x - c2.client.x, a2.client.y = l2.client.y - c2.client.y, a2.timeStamp = l2.timeStamp - c2.timeStamp, o2 && (this.pointerIsDown = !0, s2.downTime = this.coords.cur.timeStamp, s2.downTarget = n2, rt(this.downPointer, t2), this.interacting() || (at(this.coords.start, this.coords.cur), at(this.coords.prev, this.coords.cur), this.downEvent = e2, this.pointerWasMoved = !1)), this._updateLatestPointer(t2, e2, n2), this._scopeFire("interactions:update-pointer", { pointer: t2, event: e2, eventTarget: n2, down: o2, pointerInfo: s2, pointerIndex: r2, interaction: this }), r2;
  }
  removePointer(t2, e2) {
    let n2 = this.getPointerIndex(t2);
    if (n2 === -1) return;
    let o2 = this.pointers[n2];
    this._scopeFire("interactions:remove-pointer", { pointer: t2, event: e2, eventTarget: null, pointerIndex: n2, pointerInfo: o2, interaction: this }), this.pointers.splice(n2, 1), this.pointerIsDown = !1;
  }
  _updateLatestPointer(t2, e2, n2) {
    this._latestPointer.pointer = t2, this._latestPointer.event = e2, this._latestPointer.eventTarget = n2;
  }
  destroy() {
    this._latestPointer.pointer = null, this._latestPointer.event = null, this._latestPointer.eventTarget = null;
  }
  _createPreparedEvent(t2, e2, n2, o2) {
    return new zt(this, t2, this.prepared.name, e2, this.element, n2, o2);
  }
  _fireEvent(t2) {
    var e2;
    (e2 = this.interactable) == null || e2.fire(t2), (!this.prevEvent || t2.timeStamp >= this.prevEvent.timeStamp) && (this.prevEvent = t2);
  }
  _doPhase(t2) {
    let { event: e2, phase: n2, preEnd: o2, type: i2 } = t2, { rect: r2 } = this;
    if (r2 && n2 === "move" && (Pt(this.edges, r2, this.coords.delta[this.interactable.options.deltaSource]), r2.width = r2.right - r2.left, r2.height = r2.bottom - r2.top), this._scopeFire(`interactions:before-action-${n2}`, t2) === !1) return !1;
    let s2 = t2.iEvent = this._createPreparedEvent(e2, n2, o2, i2);
    return this._scopeFire(`interactions:action-${n2}`, t2), n2 === "start" && (this.prevEvent = s2), this._fireEvent(s2), this._scopeFire(`interactions:after-action-${n2}`, t2), !0;
  }
  _now() {
    return Date.now();
  }
}, jt = { methodOrder: ["simulationResume", "mouseOrPen", "hasPointer", "idle"], search(t2) {
  for (let e2 of jt.methodOrder) {
    let n2 = jt[e2](t2);
    if (n2) return n2;
  }
  return null;
}, simulationResume(t2) {
  let { pointerType: e2, eventType: n2, eventTarget: o2, scope: i2 } = t2;
  if (!/down|start/i.test(n2)) return null;
  for (let r2 of i2.interactions.list) {
    let t3 = o2;
    if (r2.simulation && r2.simulation.allowResume && r2.pointerType === e2) for (; t3; ) {
      if (t3 === r2.element) return r2;
      t3 = m(t3);
    }
  }
  return null;
}, mouseOrPen(t2) {
  let e2, { pointerId: n2, pointerType: o2, eventType: i2, scope: r2 } = t2;
  if (o2 !== "mouse" && o2 !== "pen") return null;
  for (let s2 of r2.interactions.list) if (s2.pointerType === o2) {
    if (s2.simulation && !Lt(s2, n2)) continue;
    if (s2.interacting()) return s2;
    e2 || (e2 = s2);
  }
  if (e2) return e2;
  for (let s2 of r2.interactions.list) if (!(s2.pointerType !== o2 || /down/i.test(i2) && s2.simulation)) return s2;
  return null;
}, hasPointer(t2) {
  let { pointerId: e2, scope: n2 } = t2;
  for (let o2 of n2.interactions.list) if (Lt(o2, e2)) return o2;
  return null;
}, idle(t2) {
  let { pointerType: e2, scope: n2 } = t2;
  for (let o2 of n2.interactions.list) {
    if (o2.pointers.length === 1) {
      let t3 = o2.interactable;
      if (t3 && (!t3.options.gesture || !t3.options.gesture.enabled)) continue;
    } else if (o2.pointers.length >= 2) continue;
    if (!o2.interacting() && e2 === o2.pointerType) return o2;
  }
  return null;
} };
function Lt(t2, e2) {
  return t2.pointers.some((t3) => {
    let { id: n2 } = t3;
    return n2 === e2;
  });
}
var Gt = ["pointerDown", "pointerMove", "pointerUp", "updatePointer", "removePointer", "windowBlur"];
function $t(t2, e2) {
  return function(n2) {
    let i2 = e2.interactions.list, r2 = (s2 = n2, h.string(s2.pointerType) ? s2.pointerType : h.number(s2.pointerType) ? [void 0, void 0, "touch", "pen", "mouse"][s2.pointerType] : /touch/.test(s2.type || "") || s2 instanceof o.Touch ? "touch" : "mouse");
    var s2;
    let [a2, c2] = yt(n2), l2 = [];
    if (/^touch/.test(n2.type)) {
      e2.prevTouchTime = e2.now();
      for (let t3 of n2.changedTouches) {
        let o2 = { pointer: t3, pointerId: pt(t3), pointerType: r2, eventType: n2.type, eventTarget: a2, curEventTarget: c2, scope: e2 }, i3 = Bt(o2);
        l2.push([o2.pointer, o2.eventTarget, o2.curEventTarget, i3]);
      }
    } else {
      let t3 = !1;
      if (!u.supportsPointerEvent && /mouse/.test(n2.type)) {
        for (let e3 = 0; e3 < i2.length && !t3; e3++) t3 = i2[e3].pointerType !== "mouse" && i2[e3].pointerIsDown;
        t3 = t3 || e2.now() - e2.prevTouchTime < 500 || n2.timeStamp === 0;
      }
      if (!t3) {
        let t4 = { pointer: n2, pointerId: pt(n2), pointerType: r2, eventType: n2.type, curEventTarget: c2, eventTarget: a2, scope: e2 }, o2 = Bt(t4);
        l2.push([t4.pointer, t4.eventTarget, t4.curEventTarget, o2]);
      }
    }
    for (let [e3, o2, d2, p2] of l2) p2[t2](e3, n2, o2, d2);
  };
}
function Bt(t2) {
  let { pointerType: e2, scope: n2 } = t2, o2 = { interaction: jt.search(t2), searchDetails: t2 };
  return n2.fire("interactions:find", o2), o2.interaction || n2.interactions.new({ pointerType: e2 });
}
function Ut(t2, e2) {
  let { doc: n2, scope: o2, options: i2 } = t2, { interactions: { docEvents: r2 }, events: s2 } = o2, a2 = s2[e2];
  o2.browser.isIOS && !i2.events && (i2.events = { passive: !1 });
  for (let l2 in s2.delegatedEvents) a2(n2, l2, s2.delegateListener), a2(n2, l2, s2.delegateUseCapture, !0);
  let c2 = i2 && i2.events;
  for (let { type: l2, listener: d2 } of r2) a2(n2, l2, d2, c2);
}
var qt = { id: "core/interactions", install: function(t2) {
  let e2 = {};
  for (let o2 of Gt) e2[o2] = $t(o2, t2);
  let n2 = u.pEventTypes, i2;
  function r2() {
    for (let e3 of t2.interactions.list) if (e3.pointerIsDown && e3.pointerType === "touch" && !e3._interacting) for (let n3 of e3.pointers) t2.documents.some((t3) => {
      let { doc: e4 } = t3;
      return f(e4, n3.downTarget);
    }) || e3.removePointer(n3.pointer, n3.event);
  }
  i2 = o.PointerEvent ? [{ type: n2.down, listener: r2 }, { type: n2.down, listener: e2.pointerDown }, { type: n2.move, listener: e2.pointerMove }, { type: n2.up, listener: e2.pointerUp }, { type: n2.cancel, listener: e2.pointerUp }] : [{ type: "mousedown", listener: e2.pointerDown }, { type: "mousemove", listener: e2.pointerMove }, { type: "mouseup", listener: e2.pointerUp }, { type: "touchstart", listener: r2 }, { type: "touchstart", listener: e2.pointerDown }, { type: "touchmove", listener: e2.pointerMove }, { type: "touchend", listener: e2.pointerUp }, { type: "touchcancel", listener: e2.pointerUp }], i2.push({ type: "blur", listener(e3) {
    for (let n3 of t2.interactions.list) n3.documentBlur(e3);
  } }), t2.prevTouchTime = 0, t2.Interaction = class extends Yt {
    get pointerMoveTolerance() {
      return t2.interactions.pointerMoveTolerance;
    }
    set pointerMoveTolerance(e3) {
      t2.interactions.pointerMoveTolerance = e3;
    }
    _now() {
      return t2.now();
    }
  }, t2.interactions = { list: [], new(e3) {
    e3.scopeFire = (e4, n4) => t2.fire(e4, n4);
    let n3 = new t2.Interaction(e3);
    return t2.interactions.list.push(n3), n3;
  }, listeners: e2, docEvents: i2, pointerMoveTolerance: 1 }, t2.usePlugin(Dt);
}, listeners: { "scope:add-document": (t2) => Ut(t2, "add"), "scope:remove-document": (t2) => Ut(t2, "remove"), "interactable:unset": (t2, e2) => {
  let { interactable: n2 } = t2;
  for (let o2 = e2.interactions.list.length - 1; o2 >= 0; o2--) {
    let t3 = e2.interactions.list[o2];
    t3.interactable === n2 && (t3.stop(), e2.fire("interactions:destroy", { interaction: t3 }), t3.destroy(), e2.interactions.list.length > 2 && e2.interactions.list.splice(o2, 1));
  }
} }, onDocSignal: Ut, doOnInteractions: $t, methodNames: Gt };
function Vt(t2, e2) {
  if (e2.phaselessTypes[t2]) return !0;
  for (let n2 in e2.map) if (t2.indexOf(n2) === 0 && t2.substr(n2.length) in e2.phases) return !0;
  return !1;
}
var Wt = (function(t2) {
  return t2[t2.On = 0] = "On", t2[t2.Off = 1] = "Off", t2;
})(Wt || {}), Ht = class {
  get _defaults() {
    return { base: {}, perAction: {}, actions: {} };
  }
  constructor(t2, e2, n2, o2) {
    this.target = void 0, this.options = void 0, this._actions = void 0, this.events = new ot(), this._context = void 0, this._win = void 0, this._doc = void 0, this._scopeEvents = void 0, this._actions = e2.actions, this.target = t2, this._context = e2.context || n2, this._win = l(D(t2) ? this._context : t2), this._doc = this._win.document, this._scopeEvents = o2, this.set(e2);
  }
  setOnEvents(t2, e2) {
    return h.func(e2.onstart) && this.on(`${t2}start`, e2.onstart), h.func(e2.onmove) && this.on(`${t2}move`, e2.onmove), h.func(e2.onend) && this.on(`${t2}end`, e2.onend), h.func(e2.oninertiastart) && this.on(`${t2}inertiastart`, e2.oninertiastart), this;
  }
  updatePerActionListeners(t2, e2, n2) {
    var o2;
    let i2 = (o2 = this._actions.map[t2]) == null ? void 0 : o2.filterEventType, r2 = (t3) => (i2 == null || i2(t3)) && Vt(t3, this._actions);
    (h.array(e2) || h.object(e2)) && this._onOff(Wt.Off, t2, e2, void 0, r2), (h.array(n2) || h.object(n2)) && this._onOff(Wt.On, t2, n2, void 0, r2);
  }
  setPerAction(t2, e2) {
    let n2 = this._defaults;
    for (let o2 in e2) {
      let i2 = o2, r2 = this.options[t2], s2 = e2[i2];
      i2 === "listeners" && this.updatePerActionListeners(t2, r2.listeners, s2), h.array(s2) ? r2[i2] = V(s2) : h.plainObject(s2) ? (r2[i2] = M(r2[i2] || {}, N(s2)), h.object(n2.perAction[i2]) && "enabled" in n2.perAction[i2] && (r2[i2].enabled = s2.enabled !== !1)) : h.bool(s2) && h.object(n2.perAction[i2]) ? r2[i2].enabled = s2 : r2[i2] = s2;
    }
  }
  getRect(t2) {
    return t2 = t2 || (h.element(this.target) ? this.target : null), h.string(this.target) && (t2 = t2 || this._context.querySelector(this.target)), S(t2);
  }
  rectChecker(t2) {
    return h.func(t2) ? (this.getRect = (e2) => {
      let n2 = M({}, t2.apply(this, e2));
      return "width" in n2 || (n2.width = n2.right - n2.left, n2.height = n2.bottom - n2.top), n2;
    }, this) : t2 === null ? (delete this.getRect, this) : this.getRect;
  }
  _backCompatOption(t2, e2) {
    if (D(e2) || h.object(e2)) {
      this.options[t2] = e2;
      for (let n2 in this._actions.map) this.options[n2][t2] = e2;
      return this;
    }
    return this.options[t2];
  }
  origin(t2) {
    return this._backCompatOption("origin", t2);
  }
  deltaSource(t2) {
    return t2 === "page" || t2 === "client" ? (this.options.deltaSource = t2, this) : this.options.deltaSource;
  }
  getAllElements() {
    let { target: t2 } = this;
    return h.string(t2) ? Array.from(this._context.querySelectorAll(t2)) : h.func(t2) && t2.getAllElements ? t2.getAllElements() : h.element(t2) ? [t2] : [];
  }
  context() {
    return this._context;
  }
  inContext(t2) {
    return this._context === t2.ownerDocument || f(this._context, t2);
  }
  testIgnoreAllow(t2, e2, n2) {
    return !this.testIgnore(t2.ignoreFrom, e2, n2) && this.testAllow(t2.allowFrom, e2, n2);
  }
  testAllow(t2, e2, n2) {
    return !t2 || !!h.element(n2) && (h.string(t2) ? w(n2, t2, e2) : !!h.element(t2) && f(t2, n2));
  }
  testIgnore(t2, e2, n2) {
    return !(!t2 || !h.element(n2)) && (h.string(t2) ? w(n2, t2, e2) : !!h.element(t2) && f(t2, n2));
  }
  fire(t2) {
    return this.events.fire(t2), this;
  }
  _onOff(t2, e2, n2, o2, i2) {
    h.object(e2) && !h.array(e2) && (o2 = n2, n2 = null);
    let r2 = tt(e2, n2, i2);
    for (let s2 in r2) {
      s2 === "wheel" && (s2 = u.wheelEvent);
      for (let e3 of r2[s2]) Vt(s2, this._actions) ? this.events[t2 === Wt.On ? "on" : "off"](s2, e3) : h.string(this.target) ? this._scopeEvents[t2 === Wt.On ? "addDelegate" : "removeDelegate"](this.target, this._context, s2, e3, o2) : this._scopeEvents[t2 === Wt.On ? "add" : "remove"](this.target, s2, e3, o2);
    }
    return this;
  }
  on(t2, e2, n2) {
    return this._onOff(Wt.On, t2, e2, n2);
  }
  off(t2, e2, n2) {
    return this._onOff(Wt.Off, t2, e2, n2);
  }
  set(t2) {
    let e2 = this._defaults;
    h.object(t2) || (t2 = {}), this.options = N(e2.base);
    for (let n2 in this._actions.methodDict) {
      let o2 = n2, i2 = this._actions.methodDict[o2];
      this.options[o2] = {}, this.setPerAction(o2, M(M({}, e2.perAction), e2.actions[o2])), this[i2](t2[o2]);
    }
    for (let n2 in t2) n2 !== "getRect" ? h.func(this[n2]) && this[n2](t2[n2]) : this.rectChecker(t2.getRect);
    return this;
  }
  unset() {
    if (h.string(this.target)) for (let t2 in this._scopeEvents.delegatedEvents) {
      let e2 = this._scopeEvents.delegatedEvents[t2];
      for (let n2 = e2.length - 1; n2 >= 0; n2--) {
        let { selector: o2, context: i2, listeners: r2 } = e2[n2];
        o2 === this.target && i2 === this._context && e2.splice(n2, 1);
        for (let e3 = r2.length - 1; e3 >= 0; e3--) this._scopeEvents.removeDelegate(this.target, this._context, t2, r2[e3][0], r2[e3][1]);
      }
    }
    else this._scopeEvents.remove(this.target, "all");
  }
}, Nt = class {
  constructor(t2) {
    this.list = [], this.selectorMap = {}, this.scope = void 0, this.scope = t2, t2.addListeners({ "interactable:unset": (t3) => {
      let { interactable: e2 } = t3, { target: n2 } = e2, o2 = h.string(n2) ? this.selectorMap[n2] : n2[this.scope.id], i2 = W(o2, (t4) => t4 === e2);
      o2.splice(i2, 1);
    } });
  }
  new(t2, e2) {
    e2 = M(e2 || {}, { actions: this.scope.actions });
    let n2 = new this.scope.Interactable(t2, e2, this.scope.document, this.scope.events);
    return this.scope.addDocument(n2._doc), this.list.push(n2), h.string(t2) ? (this.selectorMap[t2] || (this.selectorMap[t2] = []), this.selectorMap[t2].push(n2)) : (n2.target[this.scope.id] || Object.defineProperty(t2, this.scope.id, { value: [], configurable: !0 }), t2[this.scope.id].push(n2)), this.scope.fire("interactable:new", { target: t2, options: e2, interactable: n2, win: this.scope._win }), n2;
  }
  getExisting(t2, e2) {
    let n2 = e2 && e2.context || this.scope.document, o2 = h.string(t2), i2 = o2 ? this.selectorMap[t2] : t2[this.scope.id];
    if (i2) return H(i2, (e3) => e3._context === n2 && (o2 || e3.inContext(t2)));
  }
  forEachMatch(t2, e2) {
    for (let n2 of this.list) {
      let o2;
      if ((h.string(n2.target) ? h.element(t2) && v(t2, n2.target) : t2 === n2.target) && n2.inContext(t2) && (o2 = e2(n2)), o2 !== void 0) return o2;
    }
  }
};
function Kt(t2) {
  return t2 && t2.replace(/\/.*$/, "");
}
var Zt = new class {
  constructor() {
    this.id = `__interact_scope_${Math.floor(100 * Math.random())}`, this.isInitialized = !1, this.listenerMaps = [], this.browser = u, this.defaults = N(Ct), this.Eventable = ot, this.actions = { map: {}, phases: { start: !0, move: !0, end: !0 }, methodDict: {}, phaselessTypes: {} }, this.interactStatic = (function(t3) {
      let e2 = (n2, o2) => {
        let i2 = t3.interactables.getExisting(n2, o2);
        return i2 || (i2 = t3.interactables.new(n2, o2), i2.events.global = e2.globalEvents), i2;
      };
      return e2.getPointerAverage = ft, e2.getTouchBBox = gt, e2.getTouchDistance = mt, e2.getTouchAngle = vt, e2.getElementRect = S, e2.getElementClientRect = I, e2.matchesSelector = v, e2.closest = g, e2.globalEvents = {}, e2.version = "1.10.27", e2.scope = t3, e2.use = function(t4, e3) {
        return this.scope.usePlugin(t4, e3), this;
      }, e2.isSet = function(t4, e3) {
        return !!this.scope.interactables.get(t4, e3 && e3.context);
      }, e2.on = T(function(t4, e3, n2) {
        if (h.string(t4) && t4.search(" ") !== -1 && (t4 = t4.trim().split(/ +/)), h.array(t4)) {
          for (let o2 of t4) this.on(o2, e3, n2);
          return this;
        }
        if (h.object(t4)) {
          for (let n3 in t4) this.on(n3, t4[n3], e3);
          return this;
        }
        return Vt(t4, this.scope.actions) ? this.globalEvents[t4] ? this.globalEvents[t4].push(e3) : this.globalEvents[t4] = [e3] : this.scope.events.add(this.scope.document, t4, e3, { options: n2 }), this;
      }, "The interact.on() method is being deprecated"), e2.off = T(function(t4, e3, n2) {
        if (h.string(t4) && t4.search(" ") !== -1 && (t4 = t4.trim().split(/ +/)), h.array(t4)) {
          for (let o2 of t4) this.off(o2, e3, n2);
          return this;
        }
        if (h.object(t4)) {
          for (let n3 in t4) this.off(n3, t4[n3], e3);
          return this;
        }
        if (Vt(t4, this.scope.actions)) {
          let n3;
          t4 in this.globalEvents && (n3 = this.globalEvents[t4].indexOf(e3)) !== -1 && this.globalEvents[t4].splice(n3, 1);
        } else this.scope.events.remove(this.scope.document, t4, e3, n2);
        return this;
      }, "The interact.off() method is being deprecated"), e2.debug = function() {
        return this.scope;
      }, e2.supportsTouch = function() {
        return u.supportsTouch;
      }, e2.supportsPointerEvent = function() {
        return u.supportsPointerEvent;
      }, e2.stop = function() {
        for (let t4 of this.scope.interactions.list) t4.stop();
        return this;
      }, e2.pointerMoveTolerance = function(t4) {
        return h.number(t4) ? (this.scope.interactions.pointerMoveTolerance = t4, this) : this.scope.interactions.pointerMoveTolerance;
      }, e2.addDocument = function(t4, e3) {
        this.scope.addDocument(t4, e3);
      }, e2.removeDocument = function(t4) {
        this.scope.removeDocument(t4);
      }, e2;
    })(this), this.InteractEvent = zt, this.Interactable = void 0, this.interactables = new Nt(this), this._win = void 0, this.document = void 0, this.window = void 0, this.documents = [], this._plugins = { list: [], map: {} }, this.onWindowUnload = (t3) => this.removeDocument(t3.target);
    let t2 = this;
    this.Interactable = class extends Ht {
      get _defaults() {
        return t2.defaults;
      }
      set(e2) {
        return super.set(e2), t2.fire("interactable:set", { options: e2, interactable: this }), this;
      }
      unset() {
        super.unset();
        let e2 = t2.interactables.list.indexOf(this);
        e2 < 0 || (t2.interactables.list.splice(e2, 1), t2.fire("interactable:unset", { interactable: this }));
      }
    };
  }
  addListeners(t2, e2) {
    this.listenerMaps.push({ id: e2, map: t2 });
  }
  fire(t2, e2) {
    for (let { map: { [t2]: n2 } } of this.listenerMaps) if (n2 && n2(e2, this, t2) === !1) return !1;
  }
  init(t2) {
    return this.isInitialized ? this : (function(t3, e2) {
      return t3.isInitialized = !0, h.window(e2) && c(e2), o.init(e2), u.init(e2), Q.init(e2), t3.window = e2, t3.document = e2.document, t3.usePlugin(qt), t3.usePlugin(Et), t3;
    })(this, t2);
  }
  pluginIsInstalled(t2) {
    let { id: e2 } = t2;
    return e2 ? !!this._plugins.map[e2] : this._plugins.list.indexOf(t2) !== -1;
  }
  usePlugin(t2, e2) {
    if (!this.isInitialized) return this;
    if (this.pluginIsInstalled(t2)) return this;
    if (t2.id && (this._plugins.map[t2.id] = t2), this._plugins.list.push(t2), t2.install && t2.install(this, e2), t2.listeners && t2.before) {
      let e3 = 0, n2 = this.listenerMaps.length, o2 = t2.before.reduce((t3, e4) => (t3[e4] = !0, t3[Kt(e4)] = !0, t3), {});
      for (; e3 < n2; e3++) {
        let t3 = this.listenerMaps[e3].id;
        if (t3 && (o2[t3] || o2[Kt(t3)])) break;
      }
      this.listenerMaps.splice(e3, 0, { id: t2.id, map: t2.listeners });
    } else t2.listeners && this.listenerMaps.push({ id: t2.id, map: t2.listeners });
    return this;
  }
  addDocument(t2, e2) {
    if (this.getDocIndex(t2) !== -1) return !1;
    let n2 = l(t2);
    e2 = e2 ? M({}, e2) : {}, this.documents.push({ doc: t2, options: e2 }), this.events.documents.push(t2), t2 !== this.document && this.events.add(n2, "unload", this.onWindowUnload), this.fire("scope:add-document", { doc: t2, window: n2, scope: this, options: e2 });
  }
  removeDocument(t2) {
    let e2 = this.getDocIndex(t2), n2 = l(t2), o2 = this.documents[e2].options;
    this.events.remove(n2, "unload", this.onWindowUnload), this.documents.splice(e2, 1), this.events.documents.splice(e2, 1), this.fire("scope:remove-document", { doc: t2, window: n2, scope: this, options: o2 });
  }
  getDocIndex(t2) {
    for (let e2 = 0; e2 < this.documents.length; e2++) if (this.documents[e2].doc === t2) return e2;
    return -1;
  }
  getDocOptions(t2) {
    let e2 = this.getDocIndex(t2);
    return e2 === -1 ? null : this.documents[e2].options;
  }
  now() {
    return (this.window.Date || Date).now();
  }
}(), Jt = Zt.interactStatic, Qt = typeof globalThis < "u" ? globalThis : window;
function te(t2) {
  let { interaction: e2 } = t2;
  if (e2.prepared.name !== "drag") return;
  let n2 = e2.prepared.axis;
  n2 === "x" ? (e2.coords.cur.page.y = e2.coords.start.page.y, e2.coords.cur.client.y = e2.coords.start.client.y, e2.coords.velocity.client.y = 0, e2.coords.velocity.page.y = 0) : n2 === "y" && (e2.coords.cur.page.x = e2.coords.start.page.x, e2.coords.cur.client.x = e2.coords.start.client.x, e2.coords.velocity.client.x = 0, e2.coords.velocity.page.x = 0);
}
function ee(t2) {
  let { iEvent: e2, interaction: n2 } = t2;
  if (n2.prepared.name !== "drag") return;
  let o2 = n2.prepared.axis;
  if (o2 === "x" || o2 === "y") {
    let t3 = o2 === "x" ? "y" : "x";
    e2.page[t3] = n2.coords.start.page[t3], e2.client[t3] = n2.coords.start.client[t3], e2.delta[t3] = 0;
  }
}
Zt.init(Qt), Jt.use(U);
var ne = { id: "actions/drag", install: function(t2) {
  let { actions: e2, Interactable: n2, defaults: o2 } = t2;
  n2.prototype.draggable = ne.draggable, e2.map.drag = ne, e2.methodDict.drag = "draggable", o2.actions.drag = ne.defaults;
}, listeners: { "interactions:before-action-move": te, "interactions:action-resume": te, "interactions:action-move": ee, "auto-start:check": (t2) => {
  let { interaction: e2, interactable: n2, buttons: o2 } = t2, i2 = n2.options.drag;
  if (i2 && i2.enabled && (!e2.pointerIsDown || !/mouse|pointer/.test(e2.pointerType) || (o2 & n2.options.drag.mouseButtons) !== 0)) return t2.action = { name: "drag", axis: i2.lockAxis === "start" ? i2.startAxis : i2.lockAxis }, !1;
} }, draggable: function(t2) {
  return h.object(t2) ? (this.options.drag.enabled = t2.enabled !== !1, this.setPerAction("drag", t2), this.setOnEvents("drag", t2), /^(xy|x|y|start)$/.test(t2.lockAxis) && (this.options.drag.lockAxis = t2.lockAxis), /^(xy|x|y)$/.test(t2.startAxis) && (this.options.drag.startAxis = t2.startAxis), this) : h.bool(t2) ? (this.options.drag.enabled = t2, this) : this.options.drag;
}, beforeMove: te, move: ee, defaults: { startAxis: "xy", lockAxis: "xy" }, getCursor: () => "move", filterEventType: (t2) => t2.search("drag") === 0 };
Jt.use(ne);
var oe = class _oe extends At {
  constructor(t2, e2, n2) {
    super(e2._interaction), this.dropzone = void 0, this.dragEvent = void 0, this.relatedTarget = void 0, this.draggable = void 0, this.propagationStopped = !1, this.immediatePropagationStopped = !1;
    let { element: o2, dropzone: i2 } = n2 === "dragleave" ? t2.prev : t2.cur;
    this.type = n2, this.target = o2, this.currentTarget = o2, this.dropzone = i2, this.dragEvent = e2, this.relatedTarget = e2.target, this.draggable = e2.interactable, this.timeStamp = e2.timeStamp;
  }
  reject() {
    let { dropState: t2 } = this._interaction;
    if (this.type === "dropactivate" || this.dropzone && t2.cur.dropzone === this.dropzone && t2.cur.element === this.target) if (t2.prev.dropzone = this.dropzone, t2.prev.element = this.target, t2.rejected = !0, t2.events.enter = null, this.stopImmediatePropagation(), this.type === "dropactivate") {
      let e2 = t2.activeDrops, n2 = W(e2, (t3) => {
        let { dropzone: e3, element: n3 } = t3;
        return e3 === this.dropzone && n3 === this.target;
      });
      t2.activeDrops.splice(n2, 1);
      let o2 = new _oe(t2, this.dragEvent, "dropdeactivate");
      o2.dropzone = this.dropzone, o2.target = this.target, this.dropzone.fire(o2);
    } else this.dropzone.fire(new _oe(t2, this.dragEvent, "dragleave"));
  }
  preventDefault() {
  }
  stopPropagation() {
    this.propagationStopped = !0;
  }
  stopImmediatePropagation() {
    this.immediatePropagationStopped = this.propagationStopped = !0;
  }
};
function ie(t2, e2) {
  for (let { dropzone: n2, element: o2 } of t2.slice()) e2.dropzone = n2, e2.target = o2, n2.fire(e2), e2.propagationStopped = e2.immediatePropagationStopped = !1;
}
function re(t2, e2) {
  let n2 = (function(t3, e3) {
    let { interactables: n3 } = t3, o2 = [];
    for (let i2 of n3.list) {
      if (!i2.options.drop.enabled) continue;
      let t4 = i2.options.drop.accept;
      if (!(h.element(t4) && t4 !== e3 || h.string(t4) && !v(e3, t4) || h.func(t4) && !t4({ dropzone: i2, draggableElement: e3 }))) for (let n4 of i2.getAllElements()) n4 !== e3 && o2.push({ dropzone: i2, element: n4, rect: i2.getRect(n4) });
    }
    return o2;
  })(t2, e2);
  for (let o2 of n2) o2.rect = o2.dropzone.getRect(o2.element);
  return n2;
}
function se(t2, e2, n2) {
  let { dropState: i2, interactable: r2, element: s2 } = t2, a2 = [];
  for (let { dropzone: o2, element: l2, rect: d2 } of i2.activeDrops) {
    let t3 = o2.dropCheck(e2, n2, r2, s2, l2, d2);
    a2.push(t3 ? l2 : null);
  }
  let c2 = (function(t3) {
    let e3, n3 = [];
    for (let i3 = 0; i3 < t3.length; i3++) {
      let r3 = t3[i3], s3 = t3[e3];
      if (!r3 || i3 === e3) continue;
      if (!s3) {
        e3 = i3;
        continue;
      }
      let a3 = y(r3), c3 = y(s3);
      if (a3 === r3.ownerDocument) continue;
      if (c3 === r3.ownerDocument) {
        e3 = i3;
        continue;
      }
      if (a3 === c3) {
        x(r3, s3) && (e3 = i3);
        continue;
      }
      let l2;
      if (n3 = n3.length ? n3 : b(s3), s3 instanceof o.HTMLElement && r3 instanceof o.SVGElement && !(r3 instanceof o.SVGSVGElement)) {
        if (r3 === c3) continue;
        l2 = r3.ownerSVGElement;
      } else l2 = r3;
      let d2 = b(l2, s3.ownerDocument), p2 = 0;
      for (; d2[p2] && d2[p2] === n3[p2]; ) p2++;
      let h2 = [d2[p2 - 1], d2[p2], n3[p2]];
      if (h2[0]) {
        let t4 = h2[0].lastChild;
        for (; t4; ) {
          if (t4 === h2[1]) {
            e3 = i3, n3 = d2;
            break;
          }
          if (t4 === h2[2]) break;
          t4 = t4.previousSibling;
        }
      }
    }
    return e3;
  })(a2);
  return i2.activeDrops[c2] || null;
}
function ae(t2, e2, n2) {
  let o2 = t2.dropState, i2 = { enter: null, leave: null, activate: null, deactivate: null, move: null, drop: null };
  return n2.type === "dragstart" && (i2.activate = new oe(o2, n2, "dropactivate"), i2.activate.target = null, i2.activate.dropzone = null), n2.type === "dragend" && (i2.deactivate = new oe(o2, n2, "dropdeactivate"), i2.deactivate.target = null, i2.deactivate.dropzone = null), o2.rejected || (o2.cur.element !== o2.prev.element && (o2.prev.dropzone && (i2.leave = new oe(o2, n2, "dragleave"), n2.dragLeave = i2.leave.target = o2.prev.element, n2.prevDropzone = i2.leave.dropzone = o2.prev.dropzone), o2.cur.dropzone && (i2.enter = new oe(o2, n2, "dragenter"), n2.dragEnter = o2.cur.element, n2.dropzone = o2.cur.dropzone)), n2.type === "dragend" && o2.cur.dropzone && (i2.drop = new oe(o2, n2, "drop"), n2.dropzone = o2.cur.dropzone, n2.relatedTarget = o2.cur.element), n2.type === "dragmove" && o2.cur.dropzone && (i2.move = new oe(o2, n2, "dropmove"), n2.dropzone = o2.cur.dropzone)), i2;
}
function ce(t2, e2) {
  let n2 = t2.dropState, { activeDrops: o2, cur: i2, prev: r2 } = n2;
  e2.leave && r2.dropzone.fire(e2.leave), e2.enter && i2.dropzone.fire(e2.enter), e2.move && i2.dropzone.fire(e2.move), e2.drop && i2.dropzone.fire(e2.drop), e2.deactivate && ie(o2, e2.deactivate), n2.prev.dropzone = i2.dropzone, n2.prev.element = i2.element;
}
function le(t2, e2) {
  let { interaction: n2, iEvent: o2, event: i2 } = t2;
  if (o2.type !== "dragmove" && o2.type !== "dragend") return;
  let r2 = n2.dropState;
  e2.dynamicDrop && (r2.activeDrops = re(e2, n2.element));
  let s2 = o2, a2 = se(n2, s2, i2);
  r2.rejected = r2.rejected && !!a2 && a2.dropzone === r2.cur.dropzone && a2.element === r2.cur.element, r2.cur.dropzone = a2 && a2.dropzone, r2.cur.element = a2 && a2.element, r2.events = ae(n2, 0, s2);
}
var de = { id: "actions/drop", install: function(t2) {
  let { actions: e2, interactStatic: n2, Interactable: o2, defaults: i2 } = t2;
  t2.usePlugin(ne), o2.prototype.dropzone = function(t3) {
    return (function(t4, e3) {
      if (h.object(e3)) {
        if (t4.options.drop.enabled = e3.enabled !== !1, e3.listeners) {
          let n3 = tt(e3.listeners), o3 = Object.keys(n3).reduce((t5, e4) => (t5[/^(enter|leave)/.test(e4) ? `drag${e4}` : /^(activate|deactivate|move)/.test(e4) ? `drop${e4}` : e4] = n3[e4], t5), {}), i3 = t4.options.drop.listeners;
          i3 && t4.off(i3), t4.on(o3), t4.options.drop.listeners = o3;
        }
        return h.func(e3.ondrop) && t4.on("drop", e3.ondrop), h.func(e3.ondropactivate) && t4.on("dropactivate", e3.ondropactivate), h.func(e3.ondropdeactivate) && t4.on("dropdeactivate", e3.ondropdeactivate), h.func(e3.ondragenter) && t4.on("dragenter", e3.ondragenter), h.func(e3.ondragleave) && t4.on("dragleave", e3.ondragleave), h.func(e3.ondropmove) && t4.on("dropmove", e3.ondropmove), /^(pointer|center)$/.test(e3.overlap) ? t4.options.drop.overlap = e3.overlap : h.number(e3.overlap) && (t4.options.drop.overlap = Math.max(Math.min(1, e3.overlap), 0)), "accept" in e3 && (t4.options.drop.accept = e3.accept), "checker" in e3 && (t4.options.drop.checker = e3.checker), t4;
      }
      return h.bool(e3) ? (t4.options.drop.enabled = e3, t4) : t4.options.drop;
    })(this, t3);
  }, o2.prototype.dropCheck = function(t3, e3, n3, o3, i3, r2) {
    return (function(t4, e4, n4, o4, i4, r3, s2) {
      let a2 = !1;
      if (!(s2 = s2 || t4.getRect(r3))) return !!t4.options.drop.checker && t4.options.drop.checker(e4, n4, a2, t4, r3, o4, i4);
      let c2 = t4.options.drop.overlap;
      if (c2 === "pointer") {
        let t5 = Ot(o4, i4, "drag"), n5 = dt(e4);
        n5.x += t5.x, n5.y += t5.y;
        let r4 = n5.x > s2.left && n5.x < s2.right, c3 = n5.y > s2.top && n5.y < s2.bottom;
        a2 = r4 && c3;
      }
      let l2 = o4.getRect(i4);
      if (l2 && c2 === "center") {
        let t5 = l2.left + l2.width / 2, e5 = l2.top + l2.height / 2;
        a2 = t5 >= s2.left && t5 <= s2.right && e5 >= s2.top && e5 <= s2.bottom;
      }
      return l2 && h.number(c2) && (a2 = Math.max(0, Math.min(s2.right, l2.right) - Math.max(s2.left, l2.left)) * Math.max(0, Math.min(s2.bottom, l2.bottom) - Math.max(s2.top, l2.top)) / (l2.width * l2.height) >= c2), t4.options.drop.checker && (a2 = t4.options.drop.checker(e4, n4, a2, t4, r3, o4, i4)), a2;
    })(this, t3, e3, n3, o3, i3, r2);
  }, n2.dynamicDrop = function(e3) {
    return h.bool(e3) ? (t2.dynamicDrop = e3, n2) : t2.dynamicDrop;
  }, M(e2.phaselessTypes, { dragenter: !0, dragleave: !0, dropactivate: !0, dropdeactivate: !0, dropmove: !0, drop: !0 }), e2.methodDict.drop = "dropzone", t2.dynamicDrop = !1, i2.actions.drop = de.defaults;
}, listeners: { "interactions:before-action-start": (t2) => {
  let { interaction: e2 } = t2;
  e2.prepared.name === "drag" && (e2.dropState = { cur: { dropzone: null, element: null }, prev: { dropzone: null, element: null }, rejected: null, events: null, activeDrops: [] });
}, "interactions:after-action-start": (t2, e2) => {
  let { interaction: n2, event: o2, iEvent: i2 } = t2;
  if (n2.prepared.name !== "drag") return;
  let r2 = n2.dropState;
  r2.activeDrops = [], r2.events = {}, r2.activeDrops = re(e2, n2.element), r2.events = ae(n2, 0, i2), r2.events.activate && (ie(r2.activeDrops, r2.events.activate), e2.fire("actions/drop:start", { interaction: n2, dragEvent: i2 }));
}, "interactions:action-move": le, "interactions:after-action-move": (t2, e2) => {
  let { interaction: n2, iEvent: o2 } = t2;
  if (n2.prepared.name !== "drag") return;
  let i2 = n2.dropState;
  ce(n2, i2.events), e2.fire("actions/drop:move", { interaction: n2, dragEvent: o2 }), i2.events = {};
}, "interactions:action-end": (t2, e2) => {
  if (t2.interaction.prepared.name !== "drag") return;
  let { interaction: n2, iEvent: o2 } = t2;
  le(t2, e2), ce(n2, n2.dropState.events), e2.fire("actions/drop:end", { interaction: n2, dragEvent: o2 });
}, "interactions:stop": (t2) => {
  let { interaction: e2 } = t2;
  if (e2.prepared.name !== "drag") return;
  let { dropState: n2 } = e2;
  n2 && (n2.activeDrops = null, n2.events = null, n2.cur.dropzone = null, n2.cur.element = null, n2.prev.dropzone = null, n2.prev.element = null, n2.rejected = !1);
} }, getActiveDrops: re, getDrop: se, getDropEvents: ae, fireDropEvents: ce, filterEventType: (t2) => t2.search("drag") === 0 || t2.search("drop") === 0, defaults: { enabled: !1, accept: null, overlap: "pointer" } };
Jt.use(de);
var pe = /* @__PURE__ */ Object.freeze({ __proto__: null, edgeTarget: () => {
}, elements: () => {
}, grid: (t2) => {
  let e2 = [["x", "y"], ["left", "top"], ["right", "bottom"], ["width", "height"]].filter((e3) => {
    let [n3, o2] = e3;
    return n3 in t2 || o2 in t2;
  }), n2 = (n3, o2) => {
    let { range: i2, limits: r2 = { left: -1 / 0, right: 1 / 0, top: -1 / 0, bottom: 1 / 0 }, offset: s2 = { x: 0, y: 0 } } = t2, a2 = { range: i2, grid: t2, x: null, y: null };
    for (let [c2, l2] of e2) {
      let e3 = Math.round((n3 - s2.x) / t2[c2]), i3 = Math.round((o2 - s2.y) / t2[l2]);
      a2[c2] = Math.max(r2.left, Math.min(r2.right, e3 * t2[c2] + s2.x)), a2[l2] = Math.max(r2.top, Math.min(r2.bottom, i3 * t2[l2] + s2.y));
    }
    return a2;
  };
  return n2.grid = t2, n2.coordFields = e2, n2;
} }), he = { id: "snappers", install(t2) {
  let { interactStatic: e2 } = t2;
  e2.snappers = M(e2.snappers || {}, pe), e2.createSnapGrid = e2.snappers.grid;
} }, ue = class {
  constructor(t2) {
    this.states = [], this.startOffset = { left: 0, right: 0, top: 0, bottom: 0 }, this.startDelta = void 0, this.result = void 0, this.endResult = void 0, this.startEdges = void 0, this.edges = void 0, this.interaction = void 0, this.interaction = t2, this.result = fe(), this.edges = { left: !1, right: !1, top: !1, bottom: !1 };
  }
  start(t2, e2) {
    let { phase: n2 } = t2, { interaction: o2 } = this, i2 = (function(t3) {
      let e3 = t3.interactable.options[t3.prepared.name], n3 = e3.modifiers;
      return n3 && n3.length ? n3 : ["snap", "snapSize", "snapEdges", "restrict", "restrictEdges", "restrictSize"].map((t4) => {
        let n4 = e3[t4];
        return n4 && n4.enabled && { options: n4, methods: n4._methods };
      }).filter((t4) => !!t4);
    })(o2);
    var r2, s2;
    this.prepareStates(i2), this.startEdges = M({}, o2.edges), this.edges = M({}, this.startEdges), this.startOffset = (r2 = o2.rect, s2 = e2, r2 ? { left: s2.x - r2.left, top: s2.y - r2.top, right: r2.right - s2.x, bottom: r2.bottom - s2.y } : { left: 0, top: 0, right: 0, bottom: 0 }), this.startDelta = { x: 0, y: 0 };
    let a2 = this.fillArg({ phase: n2, pageCoords: e2, preEnd: !1 });
    return this.result = fe(), this.startAll(a2), this.result = this.setAll(a2);
  }
  fillArg(t2) {
    let { interaction: e2 } = this;
    return t2.interaction = e2, t2.interactable = e2.interactable, t2.element = e2.element, t2.rect || (t2.rect = e2.rect), t2.edges || (t2.edges = this.startEdges), t2.startOffset = this.startOffset, t2;
  }
  startAll(t2) {
    for (let e2 of this.states) e2.methods.start && (t2.state = e2, e2.methods.start(t2));
  }
  setAll(t2) {
    let { phase: e2, preEnd: n2, skipModifiers: o2, rect: i2, edges: r2 } = t2;
    t2.coords = M({}, t2.pageCoords), t2.rect = M({}, i2), t2.edges = M({}, r2);
    let s2 = o2 ? this.states.slice(o2) : this.states, a2 = fe(t2.coords, t2.rect);
    for (let p2 of s2) {
      var c2;
      let { options: o3 } = p2, i3 = M({}, t2.coords), r3 = null;
      (c2 = p2.methods) != null && c2.set && this.shouldDo(o3, n2, e2) && (t2.state = p2, r3 = p2.methods.set(t2), Pt(t2.edges, t2.rect, { x: t2.coords.x - i3.x, y: t2.coords.y - i3.y })), a2.eventProps.push(r3);
    }
    M(this.edges, t2.edges), a2.delta.x = t2.coords.x - t2.pageCoords.x, a2.delta.y = t2.coords.y - t2.pageCoords.y, a2.rectDelta.left = t2.rect.left - i2.left, a2.rectDelta.right = t2.rect.right - i2.right, a2.rectDelta.top = t2.rect.top - i2.top, a2.rectDelta.bottom = t2.rect.bottom - i2.bottom;
    let l2 = this.result.coords, d2 = this.result.rect;
    if (l2 && d2) {
      let t3 = a2.rect.left !== d2.left || a2.rect.right !== d2.right || a2.rect.top !== d2.top || a2.rect.bottom !== d2.bottom;
      a2.changed = t3 || l2.x !== a2.coords.x || l2.y !== a2.coords.y;
    }
    return a2;
  }
  applyToInteraction(t2) {
    let { interaction: e2 } = this, { phase: n2 } = t2, o2 = e2.coords.cur, i2 = e2.coords.start, { result: r2, startDelta: s2 } = this, a2 = r2.delta;
    n2 === "start" && M(this.startDelta, r2.delta);
    for (let [d2, p2] of [[i2, s2], [o2, a2]]) d2.page.x += p2.x, d2.page.y += p2.y, d2.client.x += p2.x, d2.client.y += p2.y;
    let { rectDelta: c2 } = this.result, l2 = t2.rect || e2.rect;
    l2.left += c2.left, l2.right += c2.right, l2.top += c2.top, l2.bottom += c2.bottom, l2.width = l2.right - l2.left, l2.height = l2.bottom - l2.top;
  }
  setAndApply(t2) {
    let { interaction: e2 } = this, { phase: n2, preEnd: o2, skipModifiers: i2 } = t2, r2 = this.setAll(this.fillArg({ preEnd: o2, phase: n2, pageCoords: t2.modifiedCoords || e2.coords.cur.page }));
    if (this.result = r2, !r2.changed && (!i2 || i2 < this.states.length) && e2.interacting()) return !1;
    if (t2.modifiedCoords) {
      let { page: n3 } = e2.coords.cur, o3 = { x: t2.modifiedCoords.x - n3.x, y: t2.modifiedCoords.y - n3.y };
      r2.coords.x += o3.x, r2.coords.y += o3.y, r2.delta.x += o3.x, r2.delta.y += o3.y;
    }
    this.applyToInteraction(t2);
  }
  beforeEnd(t2) {
    let { interaction: e2, event: n2 } = t2, o2 = this.states;
    if (!o2 || !o2.length) return;
    let i2 = !1;
    for (let r2 of o2) {
      t2.state = r2;
      let { options: e3, methods: n3 } = r2, o3 = n3.beforeEnd && n3.beforeEnd(t2);
      if (o3) return this.endResult = o3, !1;
      i2 = i2 || !i2 && this.shouldDo(e3, !0, t2.phase, !0);
    }
    i2 && e2.move({ event: n2, preEnd: !0 });
  }
  stop(t2) {
    let { interaction: e2 } = t2;
    if (!this.states || !this.states.length) return;
    let n2 = M({ states: this.states, interactable: e2.interactable, element: e2.element, rect: null }, t2);
    this.fillArg(n2);
    for (let o2 of this.states) n2.state = o2, o2.methods.stop && o2.methods.stop(n2);
    this.states = null, this.endResult = null;
  }
  prepareStates(t2) {
    this.states = [];
    for (let e2 = 0; e2 < t2.length; e2++) {
      let { options: n2, methods: o2, name: i2 } = t2[e2];
      this.states.push({ options: n2, methods: o2, index: e2, name: i2 });
    }
    return this.states;
  }
  restoreInteractionCoords(t2) {
    let { interaction: { coords: e2, rect: n2, modification: o2 } } = t2;
    if (!o2.result) return;
    let { startDelta: i2 } = o2, { delta: r2, rectDelta: s2 } = o2.result, a2 = [[e2.start, i2], [e2.cur, r2]];
    for (let [c2, l2] of a2) c2.page.x -= l2.x, c2.page.y -= l2.y, c2.client.x -= l2.x, c2.client.y -= l2.y;
    n2.left -= s2.left, n2.right -= s2.right, n2.top -= s2.top, n2.bottom -= s2.bottom;
  }
  shouldDo(t2, e2, n2, o2) {
    return !(!t2 || t2.enabled === !1 || o2 && !t2.endOnly || t2.endOnly && !e2 || n2 === "start" && !t2.setStart);
  }
  copyFrom(t2) {
    this.startOffset = t2.startOffset, this.startDelta = t2.startDelta, this.startEdges = t2.startEdges, this.edges = t2.edges, this.states = t2.states.map((t3) => N(t3)), this.result = fe(M({}, t2.result.coords), M({}, t2.result.rect));
  }
  destroy() {
    for (let t2 in this) this[t2] = null;
  }
};
function fe(t2, e2) {
  return { rect: e2, coords: t2, delta: { x: 0, y: 0 }, rectDelta: { left: 0, right: 0, top: 0, bottom: 0 }, eventProps: [], changed: !0 };
}
function ge(t2, e2) {
  let { defaults: n2 } = t2, o2 = { start: t2.start, set: t2.set, beforeEnd: t2.beforeEnd, stop: t2.stop }, i2 = (t3) => {
    let i3 = t3 || {};
    i3.enabled = i3.enabled !== !1;
    for (let e3 in n2) e3 in i3 || (i3[e3] = n2[e3]);
    let r2 = { options: i3, methods: o2, name: e2, enable: () => (i3.enabled = !0, r2), disable: () => (i3.enabled = !1, r2) };
    return r2;
  };
  return e2 && typeof e2 == "string" && (i2._defaults = n2, i2._methods = o2), i2;
}
function me(t2) {
  let { iEvent: e2, interaction: n2 } = t2, o2 = n2.modification.result;
  o2 && (e2.modifiers = o2.eventProps);
}
var ve = { id: "modifiers/base", before: ["actions"], install: (t2) => {
  t2.defaults.perAction.modifiers = [];
}, listeners: { "interactions:new": (t2) => {
  let { interaction: e2 } = t2;
  e2.modification = new ue(e2);
}, "interactions:before-action-start": (t2) => {
  let { interaction: e2 } = t2, n2 = t2.interaction.modification;
  n2.start(t2, e2.coords.start.page), e2.edges = n2.edges, n2.applyToInteraction(t2);
}, "interactions:before-action-move": (t2) => {
  let { interaction: e2 } = t2, { modification: n2 } = e2, o2 = n2.setAndApply(t2);
  return e2.edges = n2.edges, o2;
}, "interactions:before-action-end": (t2) => {
  let { interaction: e2 } = t2, { modification: n2 } = e2, o2 = n2.beforeEnd(t2);
  return e2.edges = n2.startEdges, o2;
}, "interactions:action-start": me, "interactions:action-move": me, "interactions:action-end": me, "interactions:after-action-start": (t2) => t2.interaction.modification.restoreInteractionCoords(t2), "interactions:after-action-move": (t2) => t2.interaction.modification.restoreInteractionCoords(t2), "interactions:stop": (t2) => t2.interaction.modification.stop(t2) } };
function ye(t2, e2, n2) {
  let { startCoords: o2, edgeSign: i2 } = t2;
  e2 ? n2.y = o2.y + (n2.x - o2.x) * i2.y : n2.x = o2.x + (n2.y - o2.y) * i2.x;
}
function be(t2, e2, n2, o2) {
  let { startRect: i2, startCoords: r2, ratio: s2, edgeSign: a2 } = t2;
  if (e2) {
    let t3 = o2.width / s2;
    n2.y = r2.y + (t3 - i2.height) * a2.y;
  } else {
    let t3 = o2.height * s2;
    n2.x = r2.x + (t3 - i2.width) * a2.x;
  }
}
var xe = ge({ start(t2) {
  let { state: e2, rect: n2, edges: o2, pageCoords: i2 } = t2, { ratio: r2, enabled: s2 } = e2.options, { equalDelta: a2, modifiers: c2 } = e2.options;
  r2 === "preserve" && (r2 = n2.width / n2.height), e2.startCoords = M({}, i2), e2.startRect = M({}, n2), e2.ratio = r2, e2.equalDelta = a2;
  let l2 = e2.linkedEdges = { top: o2.top || o2.left && !o2.bottom, left: o2.left || o2.top && !o2.right, bottom: o2.bottom || o2.right && !o2.top, right: o2.right || o2.bottom && !o2.left };
  if (e2.xIsPrimaryAxis = !(!o2.left && !o2.right), e2.equalDelta) {
    let t3 = (l2.left ? 1 : -1) * (l2.top ? 1 : -1);
    e2.edgeSign = { x: t3, y: t3 };
  } else e2.edgeSign = { x: l2.left ? -1 : 1, y: l2.top ? -1 : 1 };
  if (s2 !== !1 && M(o2, l2), c2 == null || !c2.length) return;
  let d2 = new ue(t2.interaction);
  d2.copyFrom(t2.interaction.modification), d2.prepareStates(c2), e2.subModification = d2, d2.startAll({ ...t2 });
}, set(t2) {
  let { state: e2, rect: n2, coords: o2 } = t2, { linkedEdges: i2 } = e2, r2 = M({}, o2), s2 = e2.equalDelta ? ye : be;
  if (M(t2.edges, i2), s2(e2, e2.xIsPrimaryAxis, o2, n2), !e2.subModification) return null;
  let a2 = M({}, n2);
  Pt(i2, a2, { x: o2.x - r2.x, y: o2.y - r2.y });
  let c2 = e2.subModification.setAll({ ...t2, rect: a2, edges: i2, pageCoords: o2, prevCoords: o2, prevRect: a2 }), { delta: l2 } = c2;
  return c2.changed && (s2(e2, Math.abs(l2.x) > Math.abs(l2.y), c2.coords, c2.rect), M(o2, c2.coords)), c2.eventProps;
}, defaults: { ratio: "preserve", equalDelta: !1, modifiers: [], enabled: !1 } }, "aspectRatio");
function we(t2, e2, n2) {
  return h.func(t2) ? Mt(t2, e2.interactable, e2.element, [n2.x, n2.y, e2]) : Mt(t2, e2.interactable, e2.element);
}
var Ee = { start: function(t2) {
  let { rect: e2, startOffset: n2, state: o2, interaction: i2, pageCoords: r2 } = t2, { options: s2 } = o2, { elementRect: a2 } = s2, c2 = M({ left: 0, top: 0, right: 0, bottom: 0 }, s2.offset || {});
  if (e2 && a2) {
    let t3 = we(s2.restriction, i2, r2);
    if (t3) {
      let n3 = t3.right - t3.left - e2.width, o3 = t3.bottom - t3.top - e2.height;
      n3 < 0 && (c2.left += n3, c2.right += n3), o3 < 0 && (c2.top += o3, c2.bottom += o3);
    }
    c2.left += n2.left - e2.width * a2.left, c2.top += n2.top - e2.height * a2.top, c2.right += n2.right - e2.width * (1 - a2.right), c2.bottom += n2.bottom - e2.height * (1 - a2.bottom);
  }
  o2.offset = c2;
}, set: function(t2) {
  let { coords: e2, interaction: n2, state: o2 } = t2, { options: i2, offset: r2 } = o2, s2 = we(i2.restriction, n2, e2);
  if (!s2) return;
  let a2 = (function(t3) {
    return !t3 || "left" in t3 && "top" in t3 || ((t3 = M({}, t3)).left = t3.x || 0, t3.top = t3.y || 0, t3.right = t3.right || t3.left + t3.width, t3.bottom = t3.bottom || t3.top + t3.height), t3;
  })(s2);
  e2.x = Math.max(Math.min(a2.right - r2.right, e2.x), a2.left + r2.left), e2.y = Math.max(Math.min(a2.bottom - r2.bottom, e2.y), a2.top + r2.top);
}, defaults: { restriction: null, elementRect: null, offset: null, endOnly: !1, enabled: !1 } }, Ie = ge(Ee, "restrict"), Se = { top: 1 / 0, left: 1 / 0, bottom: -1 / 0, right: -1 / 0 }, De = { top: -1 / 0, left: -1 / 0, bottom: 1 / 0, right: 1 / 0 };
function Me(t2, e2) {
  for (let n2 of ["top", "left", "bottom", "right"]) n2 in t2 || (t2[n2] = e2[n2]);
  return t2;
}
var Te = { noInner: Se, noOuter: De, start: function(t2) {
  let { interaction: e2, startOffset: n2, state: o2 } = t2, { options: i2 } = o2, r2;
  i2 && (r2 = Tt(we(i2.offset, e2, e2.coords.start.page))), r2 = r2 || { x: 0, y: 0 }, o2.offset = { top: r2.y + n2.top, left: r2.x + n2.left, bottom: r2.y - n2.bottom, right: r2.x - n2.right };
}, set: function(t2) {
  let { coords: e2, edges: n2, interaction: o2, state: i2 } = t2, { offset: r2, options: s2 } = i2;
  if (!n2) return;
  let a2 = M({}, e2), c2 = we(s2.inner, o2, a2) || {}, l2 = we(s2.outer, o2, a2) || {};
  Me(c2, Se), Me(l2, De), n2.top ? e2.y = Math.min(Math.max(l2.top + r2.top, a2.y), c2.top + r2.top) : n2.bottom && (e2.y = Math.max(Math.min(l2.bottom + r2.bottom, a2.y), c2.bottom + r2.bottom)), n2.left ? e2.x = Math.min(Math.max(l2.left + r2.left, a2.x), c2.left + r2.left) : n2.right && (e2.x = Math.max(Math.min(l2.right + r2.right, a2.x), c2.right + r2.right));
}, defaults: { inner: null, outer: null, offset: null, endOnly: !1, enabled: !1 } }, _e = ge(Te, "restrictEdges"), Pe = M({ get elementRect() {
  return { top: 0, left: 0, bottom: 1, right: 1 };
}, set elementRect(t2) {
} }, Ee.defaults), Oe = ge({ start: Ee.start, set: Ee.set, defaults: Pe }, "restrictRect"), Ae = { width: -1 / 0, height: -1 / 0 }, Ce = { width: 1 / 0, height: 1 / 0 }, ze = ge({ start: function(t2) {
  return Te.start(t2);
}, set: function(t2) {
  let { interaction: e2, state: n2, rect: o2, edges: i2 } = t2, { options: r2 } = n2;
  if (!i2) return;
  let s2 = _t(we(r2.min, e2, t2.coords)) || Ae, a2 = _t(we(r2.max, e2, t2.coords)) || Ce;
  n2.options = { endOnly: r2.endOnly, inner: M({}, Te.noInner), outer: M({}, Te.noOuter) }, i2.top ? (n2.options.inner.top = o2.bottom - s2.height, n2.options.outer.top = o2.bottom - a2.height) : i2.bottom && (n2.options.inner.bottom = o2.top + s2.height, n2.options.outer.bottom = o2.top + a2.height), i2.left ? (n2.options.inner.left = o2.right - s2.width, n2.options.outer.left = o2.right - a2.width) : i2.right && (n2.options.inner.right = o2.left + s2.width, n2.options.outer.right = o2.left + a2.width), Te.set(t2), n2.options = r2;
}, defaults: { min: null, max: null, endOnly: !1, enabled: !1 } }, "restrictSize"), Fe = { start: function(t2) {
  let { interaction: e2, interactable: n2, element: o2, rect: i2, state: r2, startOffset: s2 } = t2, { options: a2 } = r2, c2 = a2.offsetWithOrigin ? (function(t3) {
    let { element: e3 } = t3.interaction;
    return Tt(Mt(t3.state.options.origin, null, null, [e3])) || Ot(t3.interactable, e3, t3.interaction.prepared.name);
  })(t2) : { x: 0, y: 0 }, l2;
  if (a2.offset === "startCoords") l2 = { x: e2.coords.start.page.x, y: e2.coords.start.page.y };
  else {
    let t3 = Mt(a2.offset, n2, o2, [e2]);
    l2 = Tt(t3) || { x: 0, y: 0 }, l2.x += c2.x, l2.y += c2.y;
  }
  let { relativePoints: d2 } = a2;
  r2.offsets = i2 && d2 && d2.length ? d2.map((t3, e3) => ({ index: e3, relativePoint: t3, x: s2.left - i2.width * t3.x + l2.x, y: s2.top - i2.height * t3.y + l2.y })) : [{ index: 0, relativePoint: null, x: l2.x, y: l2.y }];
}, set: function(t2) {
  let { interaction: e2, coords: n2, state: o2 } = t2, { options: i2, offsets: r2 } = o2, s2 = Ot(e2.interactable, e2.element, e2.prepared.name), a2 = M({}, n2), c2 = [];
  i2.offsetWithOrigin || (a2.x -= s2.x, a2.y -= s2.y);
  for (let d2 of r2) {
    let t3 = a2.x - d2.x, n3 = a2.y - d2.y;
    for (let o3 = 0, r3 = i2.targets.length; o3 < r3; o3++) {
      let r4 = i2.targets[o3], s3;
      s3 = h.func(r4) ? r4(t3, n3, e2._proxy, d2, o3) : r4, s3 && c2.push({ x: (h.number(s3.x) ? s3.x : t3) + d2.x, y: (h.number(s3.y) ? s3.y : n3) + d2.y, range: h.number(s3.range) ? s3.range : i2.range, source: r4, index: o3, offset: d2 });
    }
  }
  let l2 = { target: null, inRange: !1, distance: 0, range: 0, delta: { x: 0, y: 0 } };
  for (let d2 of c2) {
    let t3 = d2.range, e3 = d2.x - a2.x, n3 = d2.y - a2.y, o3 = st(e3, n3), i3 = o3 <= t3;
    t3 === 1 / 0 && l2.inRange && l2.range !== 1 / 0 && (i3 = !1), l2.target && !(i3 ? l2.inRange && t3 !== 1 / 0 ? o3 / t3 < l2.distance / l2.range : t3 === 1 / 0 && l2.range !== 1 / 0 || o3 < l2.distance : !l2.inRange && o3 < l2.distance) || (l2.target = d2, l2.distance = o3, l2.range = t3, l2.inRange = i3, l2.delta.x = e3, l2.delta.y = n3);
  }
  return l2.inRange && (n2.x = l2.target.x, n2.y = l2.target.y), o2.closest = l2, l2;
}, defaults: { range: 1 / 0, targets: null, offset: null, offsetWithOrigin: !0, origin: null, relativePoints: null, endOnly: !1, enabled: !1 } }, ke = ge(Fe, "snap"), Re = { start: function(t2) {
  let { state: e2, edges: n2 } = t2, { options: o2 } = e2;
  if (!n2) return null;
  t2.state = { options: { targets: null, relativePoints: [{ x: n2.left ? 0 : 1, y: n2.top ? 0 : 1 }], offset: o2.offset || "self", origin: { x: 0, y: 0 }, range: o2.range } }, e2.targetFields = e2.targetFields || [["width", "height"], ["x", "y"]], Fe.start(t2), e2.offsets = t2.state.offsets, t2.state = e2;
}, set: function(t2) {
  let { interaction: e2, state: n2, coords: o2 } = t2, { options: i2, offsets: r2 } = n2, s2 = { x: o2.x - r2[0].x, y: o2.y - r2[0].y };
  n2.options = M({}, i2), n2.options.targets = [];
  for (let c2 of i2.targets || []) {
    let t3;
    if (t3 = h.func(c2) ? c2(s2.x, s2.y, e2) : c2, t3) {
      for (let [e3, o3] of n2.targetFields) if (e3 in t3 || o3 in t3) {
        t3.x = t3[e3], t3.y = t3[o3];
        break;
      }
      n2.options.targets.push(t3);
    }
  }
  let a2 = Fe.set(t2);
  return n2.options = i2, a2;
}, defaults: { range: 1 / 0, targets: null, offset: null, endOnly: !1, enabled: !1 } }, Xe = ge(Re, "snapSize"), Ye = ge({ start: function(t2) {
  let { edges: e2 } = t2;
  return e2 ? (t2.state.targetFields = t2.state.targetFields || [[e2.left ? "left" : "right", e2.top ? "top" : "bottom"]], Re.start(t2)) : null;
}, set: Re.set, defaults: M(N(Re.defaults), { targets: void 0, range: void 0, offset: { x: 0, y: 0 } }) }, "snapEdges"), je = () => {
};
je._defaults = {};
var Le = { aspectRatio: xe, restrictEdges: _e, restrict: Ie, restrictRect: Oe, restrictSize: ze, snapEdges: Ye, snap: ke, snapSize: Xe, spring: je, avoid: je, transform: je, rubberband: je }, Ge = { id: "modifiers", install(t2) {
  let { interactStatic: e2 } = t2;
  t2.usePlugin(ve), t2.usePlugin(he), e2.modifiers = Le;
  for (let n2 in Le) {
    let { _defaults: e3, _methods: o2 } = Le[n2];
    e3._methods = o2, t2.defaults.perAction[n2] = e3;
  }
} };
function $e(t2) {
  let { interaction: e2 } = t2;
  Be(e2);
}
function Be(t2) {
  if (!(function(t3) {
    return !(!t3.offset.pending.x && !t3.offset.pending.y);
  })(t2)) return !1;
  let { pending: e2 } = t2.offset;
  return qe(t2.coords.cur, e2), qe(t2.coords.delta, e2), Pt(t2.edges, t2.rect, e2), e2.x = 0, e2.y = 0, !0;
}
function Ue(t2) {
  let { x: e2, y: n2 } = t2;
  this.offset.pending.x += e2, this.offset.pending.y += n2, this.offset.total.x += e2, this.offset.total.y += n2;
}
function qe(t2, e2) {
  let { page: n2, client: o2 } = t2, { x: i2, y: r2 } = e2;
  n2.x += i2, n2.y += r2, o2.x += i2, o2.y += r2;
}
Jt.use(Ge), Rt.offsetBy = "";
var Ve = { id: "offset", before: ["modifiers", "pointer-events", "actions", "inertia"], install(t2) {
  t2.Interaction.prototype.offsetBy = Ue;
}, listeners: { "interactions:new": (t2) => {
  let { interaction: e2 } = t2;
  e2.offset = { total: { x: 0, y: 0 }, pending: { x: 0, y: 0 } };
}, "interactions:update-pointer": (t2) => {
  let { interaction: e2 } = t2;
  return (function(t3) {
    t3.pointerIsDown && (qe(t3.coords.cur, t3.offset.total), t3.offset.pending.x = 0, t3.offset.pending.y = 0);
  })(e2);
}, "interactions:before-action-start": $e, "interactions:before-action-move": $e, "interactions:before-action-end": function(t2) {
  let { interaction: e2 } = t2;
  if (Be(e2)) return e2.move({ offset: !0 }), e2.end(), !1;
}, "interactions:stop": function(t2) {
  let { interaction: e2 } = t2;
  e2.offset.total.x = 0, e2.offset.total.y = 0, e2.offset.pending.x = 0, e2.offset.pending.y = 0;
} } }, We = class {
  constructor(t2) {
    this.active = !1, this.isModified = !1, this.smoothEnd = !1, this.allowResume = !1, this.modification = void 0, this.modifierCount = 0, this.modifierArg = void 0, this.startCoords = void 0, this.t0 = 0, this.v0 = 0, this.te = 0, this.targetOffset = void 0, this.modifiedOffset = void 0, this.currentOffset = void 0, this.lambda_v0 = 0, this.one_ve_v0 = 0, this.timeout = void 0, this.interaction = void 0, this.interaction = t2;
  }
  start(t2) {
    let { interaction: e2 } = this, n2 = He(e2);
    if (!n2 || !n2.enabled) return !1;
    let { client: o2 } = e2.coords.velocity, i2 = st(o2.x, o2.y), r2 = this.modification || (this.modification = new ue(e2));
    if (r2.copyFrom(e2.modification), this.t0 = e2._now(), this.allowResume = n2.allowResume, this.v0 = i2, this.currentOffset = { x: 0, y: 0 }, this.startCoords = e2.coords.cur.page, this.modifierArg = r2.fillArg({ pageCoords: this.startCoords, preEnd: !0, phase: "inertiastart" }), this.t0 - e2.coords.cur.timeStamp < 50 && i2 > n2.minSpeed && i2 > n2.endSpeed) this.startInertia();
    else {
      if (r2.result = r2.setAll(this.modifierArg), !r2.result.changed) return !1;
      this.startSmoothEnd();
    }
    return e2.modification.result.rect = null, e2.offsetBy(this.targetOffset), e2._doPhase({ interaction: e2, event: t2, phase: "inertiastart" }), e2.offsetBy({ x: -this.targetOffset.x, y: -this.targetOffset.y }), e2.modification.result.rect = null, this.active = !0, e2.simulation = this, !0;
  }
  startInertia() {
    let t2 = this.interaction.coords.velocity.client, e2 = He(this.interaction), n2 = e2.resistance, o2 = -Math.log(e2.endSpeed / this.v0) / n2;
    this.targetOffset = { x: (t2.x - o2) / n2, y: (t2.y - o2) / n2 }, this.te = o2, this.lambda_v0 = n2 / this.v0, this.one_ve_v0 = 1 - e2.endSpeed / this.v0;
    let { modification: i2, modifierArg: r2 } = this;
    r2.pageCoords = { x: this.startCoords.x + this.targetOffset.x, y: this.startCoords.y + this.targetOffset.y }, i2.result = i2.setAll(r2), i2.result.changed && (this.isModified = !0, this.modifiedOffset = { x: this.targetOffset.x + i2.result.delta.x, y: this.targetOffset.y + i2.result.delta.y }), this.onNextFrame(() => this.inertiaTick());
  }
  startSmoothEnd() {
    this.smoothEnd = !0, this.isModified = !0, this.targetOffset = { x: this.modification.result.delta.x, y: this.modification.result.delta.y }, this.onNextFrame(() => this.smoothEndTick());
  }
  onNextFrame(t2) {
    this.timeout = Q.request(() => {
      this.active && t2();
    });
  }
  inertiaTick() {
    let { interaction: t2 } = this, e2 = He(t2).resistance, n2 = (t2._now() - this.t0) / 1e3;
    if (n2 < this.te) {
      let d2 = 1 - (Math.exp(-e2 * n2) - this.lambda_v0) / this.one_ve_v0, p2;
      this.isModified ? (o2 = 0, i2 = 0, r2 = this.targetOffset.x, s2 = this.targetOffset.y, a2 = this.modifiedOffset.x, c2 = this.modifiedOffset.y, p2 = { x: Ke(l2 = d2, o2, r2, a2), y: Ke(l2, i2, s2, c2) }) : p2 = { x: this.targetOffset.x * d2, y: this.targetOffset.y * d2 };
      let h2 = { x: p2.x - this.currentOffset.x, y: p2.y - this.currentOffset.y };
      this.currentOffset.x += h2.x, this.currentOffset.y += h2.y, t2.offsetBy(h2), t2.move(), this.onNextFrame(() => this.inertiaTick());
    } else t2.offsetBy({ x: this.modifiedOffset.x - this.currentOffset.x, y: this.modifiedOffset.y - this.currentOffset.y }), this.end();
    var o2, i2, r2, s2, a2, c2, l2;
  }
  smoothEndTick() {
    let { interaction: t2 } = this, e2 = t2._now() - this.t0, { smoothEndDuration: n2 } = He(t2);
    if (e2 < n2) {
      let o2 = { x: Ze(e2, 0, this.targetOffset.x, n2), y: Ze(e2, 0, this.targetOffset.y, n2) }, i2 = { x: o2.x - this.currentOffset.x, y: o2.y - this.currentOffset.y };
      this.currentOffset.x += i2.x, this.currentOffset.y += i2.y, t2.offsetBy(i2), t2.move({ skipModifiers: this.modifierCount }), this.onNextFrame(() => this.smoothEndTick());
    } else t2.offsetBy({ x: this.targetOffset.x - this.currentOffset.x, y: this.targetOffset.y - this.currentOffset.y }), this.end();
  }
  resume(t2) {
    let { pointer: e2, event: n2, eventTarget: o2 } = t2, { interaction: i2 } = this;
    i2.offsetBy({ x: -this.currentOffset.x, y: -this.currentOffset.y }), i2.updatePointer(e2, n2, o2, !0), i2._doPhase({ interaction: i2, event: n2, phase: "resume" }), at(i2.coords.prev, i2.coords.cur), this.stop();
  }
  end() {
    this.interaction.move(), this.interaction.end(), this.stop();
  }
  stop() {
    this.active = this.smoothEnd = !1, this.interaction.simulation = null, Q.cancel(this.timeout);
  }
};
function He(t2) {
  let { interactable: e2, prepared: n2 } = t2;
  return e2 && e2.options && n2.name && e2.options[n2.name].inertia;
}
var Ne = { id: "inertia", before: ["modifiers", "actions"], install: function(t2) {
  let { defaults: e2 } = t2;
  t2.usePlugin(Ve), t2.usePlugin(ve), t2.actions.phases.inertiastart = !0, t2.actions.phases.resume = !0, e2.perAction.inertia = { enabled: !1, resistance: 10, minSpeed: 100, endSpeed: 10, allowResume: !0, smoothEndDuration: 300 };
}, listeners: { "interactions:new": (t2) => {
  let { interaction: e2 } = t2;
  e2.inertia = new We(e2);
}, "interactions:before-action-end": function(t2) {
  let { interaction: e2, event: n2 } = t2;
  return (!e2._interacting || e2.simulation || !e2.inertia.start(n2)) && null;
}, "interactions:down": function(t2) {
  let { interaction: e2, eventTarget: n2 } = t2, o2 = e2.inertia;
  if (!o2.active) return;
  let i2 = n2;
  for (; h.element(i2); ) {
    if (i2 === e2.element) {
      o2.resume(t2);
      break;
    }
    i2 = m(i2);
  }
}, "interactions:stop": function(t2) {
  let { interaction: e2 } = t2, n2 = e2.inertia;
  n2.active && n2.stop();
}, "interactions:before-action-resume": (t2) => {
  let { modification: e2 } = t2.interaction;
  e2.stop(t2), e2.start(t2, t2.interaction.coords.cur.page), e2.applyToInteraction(t2);
}, "interactions:before-action-inertiastart": (t2) => t2.interaction.modification.setAndApply(t2), "interactions:action-resume": me, "interactions:action-inertiastart": me, "interactions:after-action-inertiastart": (t2) => t2.interaction.modification.restoreInteractionCoords(t2), "interactions:after-action-resume": (t2) => t2.interaction.modification.restoreInteractionCoords(t2) } };
function Ke(t2, e2, n2, o2) {
  let i2 = 1 - t2;
  return i2 * i2 * e2 + 2 * i2 * t2 * n2 + t2 * t2 * o2;
}
function Ze(t2, e2, n2, o2) {
  return -n2 * (t2 /= o2) * (t2 - 2) + e2;
}
Jt.use(Ne);
var Je = class {
  constructor() {
    e(this, "_events", /* @__PURE__ */ new Map());
  }
  on(t2, e2) {
    let n2 = this._events.get(t2);
    return n2 || (n2 = /* @__PURE__ */ new Set(), this._events.set(t2, n2)), n2.add(e2), this;
  }
  off(t2, e2) {
    if (e2 === void 0) this._events.delete(t2);
    else {
      let n2 = this._events.get(t2);
      n2 && (n2.delete(e2), n2.size === 0 && this._events.delete(t2));
    }
    return this;
  }
  once(t2, e2) {
    let n2 = (...o2) => {
      this.off(t2, n2), e2(...o2);
    };
    return n2._originalHandler = e2, this.on(t2, n2);
  }
  emit(t2, ...e2) {
    let n2 = this._events.get(t2);
    if (!n2 || n2.size === 0) return !1;
    let o2 = [...n2];
    for (let i2 of o2) i2(...e2);
    return !0;
  }
  listenerCount(t2) {
    var e2;
    return ((e2 = this._events.get(t2)) == null ? void 0 : e2.size) ?? 0;
  }
  removeAllListeners() {
    return this._events.clear(), this;
  }
};
Jt.dynamicDrop(!0);
var Qe = class {
  constructor() {
    e(this, "dragId"), e(this, "dragStartIndex"), e(this, "dragEndIndex"), e(this, "dragItemSize"), e(this, "dragElement"), e(this, "cloneElement"), e(this, "placeholderElement"), e(this, "startClientX"), e(this, "startClientY"), e(this, "sx"), e(this, "sy"), e(this, "animator"), e(this, "fromDraggableId"), e(this, "toDraggableId"), e(this, "root"), e(this, "folderElement"), e(this, "folderId"), e(this, "folderTimer"), e(this, "folderData"), e(this, "willFolder"), e(this, "dragGridStat"), e(this, "layoutMode"), e(this, "gridDragingItemArea"), e(this, "gridMovedDoms", {}), e(this, "interactions", {}), e(this, "grabOffsetX"), e(this, "grabOffsetY"), e(this, "startX"), e(this, "startY"), e(this, "startGrabX"), e(this, "startGrabY"), e(this, "gridMoveTimer"), e(this, "gridMovedItems", []), e(this, "scrollTick"), e(this, "scrollContainer");
  }
}, tn = new Qe();
function en() {
  tn.willFolder = !1, clearTimeout(tn.folderTimer), tn.folderTimer = null, tn.folderId = "", tn.folderData = null, tn.folderElement && (tn.folderElement.classList.remove("will-folder"), tn.folderElement.classList.remove("open-folder"), tn.folderElement = null), document.querySelectorAll(".will-folder, .open-folder").forEach((t2) => {
    t2.classList.remove("will-folder"), t2.classList.remove("open-folder");
  });
}
var nn = class extends Je {
  constructor(t2) {
    super(), e(this, "conf"), e(this, "instance"), e(this, "_preventTouchMove", (t3) => {
      tn.dragId && t3.preventDefault();
    }), e(this, "_preventSelect", (t3) => {
      t3.preventDefault();
    }), this.conf = t2, this.conf.layout = this.conf.layout || "dense", this.init();
  }
  _bindDragGuards() {
    var t2, e2, n2;
    document.addEventListener("touchmove", this._preventTouchMove, { passive: !1 }), document.addEventListener("selectstart", this._preventSelect, !0), (n2 = (e2 = (t2 = window.getSelection) == null ? void 0 : t2.call(window)) == null ? void 0 : e2.removeAllRanges) == null || n2.call(e2);
  }
  _unbindDragGuards() {
    var t2, e2, n2;
    document.removeEventListener("touchmove", this._preventTouchMove), document.removeEventListener("selectstart", this._preventSelect, !0), (n2 = (e2 = (t2 = window.getSelection) == null ? void 0 : t2.call(window)) == null ? void 0 : e2.removeAllRanges) == null || n2.call(e2);
  }
  init() {
    this.instance = Jt(this.conf.selector, { styleCursor: !1, context: this.conf.root, preventDefault: "never" }), typeof this.instance.preventDefault == "function" && this.instance.preventDefault("never"), this.conf.root.setAttribute("data-dragroot", this.conf.id), this.instance.id = this.conf.id || Math.random().toString(36).substring(2), this.instance.layoutMode = this.conf.layout, tn.interactions[this.instance.id] = this, this.instance.draggable({ inertia: !1, autoScroll: !1, allowFrom: this.conf.selector, hold: window.innerWidth < 768 && 350, listeners: { start: (t2) => {
      var e2, n2;
      t2.preventDefault();
      let o2 = t2.currentTarget;
      if (o2 && o2.getAttribute("data-draggable") === "false") return void ((n2 = (e2 = t2.interaction) == null ? void 0 : e2.stop) == null || n2.call(e2));
      tn.fromDraggableId = this.conf.id, tn.dragId = this.getDragItemId(o2), tn.dragElement = o2, tn.cloneElement = o2.cloneNode(!0), tn.placeholderElement = o2.cloneNode(!0), this.conf.appendToBody === !1 ? this.conf.root.append(tn.cloneElement) : document.body.append(tn.cloneElement), document.documentElement.style.cursor = "grabbing";
      let i2 = tn.dragElement.getBoundingClientRect();
      Object.assign(tn.cloneElement.style, { top: `${i2.top}px`, left: `${i2.left}px`, width: `${i2.width}px`, height: `${i2.height}px`, transform: "", zIndex: "3000", position: "fixed" });
      let r2 = this.conf.root.getBoundingClientRect();
      tn.startX = i2.left - r2.left, tn.startY = i2.top - r2.top, tn.startGrabX = t2.clientX - i2.left, tn.startGrabY = t2.clientY - i2.top;
      let { dragElement: s2, cloneElement: a2, placeholderElement: c2 } = tn;
      s2.before(c2), s2.classList.add("drag-dragging"), a2.classList.add("drag-cloned"), c2.classList.add("drag-placeholder"), tn.sx = i2.left, tn.sy = i2.top, tn.startClientX = t2.clientX, tn.startClientY = t2.clientY;
      let l2 = this.getAllChild();
      tn.dragStartIndex = l2.findIndex((t3) => this.getDragItemId(t3) === tn.dragId), this.emit("dragstart", { dragId: tn.dragId, setData: (t3) => {
        tn.dragItemSize = t3;
      } }), tn.root = this.conf.root, tn.layoutMode = this.conf.layout, tn.layoutMode === "sparse" && this.emit("gridstate", { dragId: tn.dragId, setData: (e3) => {
        tn.dragGridStat = e3, tn.gridDragingItemArea = o2.style.gridArea;
        let n3 = i2.top + e3.cellHeight / 2, r3 = i2.left + e3.cellWidth / 2;
        tn.startGrabX = t2.clientX - r3, tn.startGrabY = t2.clientY - n3;
      } }), document.body.classList.add("grid-dragging"), this._bindDragGuards(), tn.scrollContainer = this.conf.scrollContainer, tn.scrollTick = this.manualAutoScroll({ enableX: !1, enableY: !0 });
    }, move: (t2) => {
      var e2, n2;
      tn.dragElement && tn.fromDraggableId === tn.toDraggableId && this.conf.id == tn.toDraggableId && ((n2 = (e2 = tn.scrollTick) == null ? void 0 : e2.update) == null || n2.call(e2, t2.clientX, t2.clientY), t2.preventDefault(), this.emit("dragmove", { pageX: t2.page.x, pageY: t2.page.y, clientX: t2.clientX, clientY: t2.clientY }), this.setCloneElementPosition(t2), tn.layoutMode === "sparse" ? this.gridMove(t2) : this.sortElement(t2));
    }, end: (t2) => {
      if (t2.preventDefault(), !tn.dragElement) return;
      let e2 = this.getDragIndex();
      this.emit("dragend", { folderData: tn.folderData, fromDraggableId: tn.fromDraggableId, toDraggableId: tn.toDraggableId || tn.fromDraggableId, fromIndex: tn.dragStartIndex, toIndex: e2, willFolder: tn.willFolder, willFolderTargetId: tn.folderId, dragId: tn.dragId, movedItems: tn.gridMovedItems, layoutMode: tn.layoutMode });
      let { dragElement: n2, cloneElement: o2, placeholderElement: i2 } = tn;
      n2.classList.remove("drag-dragging"), o2.classList.remove("drag-cloned"), i2.classList.remove("drag-placeholder"), o2.remove(), i2.remove(), document.documentElement.style.cursor = "", tn.dragElement = null, tn.cloneElement = null, tn.placeholderElement = null, tn.dragItemSize = null, tn.folderData = null, tn.fromDraggableId = null, tn.toDraggableId = null, tn.dragStartIndex = null, tn.dragId = null, tn.gridMovedItems = [], tn.layoutMode = null, tn.dragGridStat = null, tn.scrollTick.reset(), tn.scrollTick = null, clearTimeout(tn.gridMoveTimer), Object.keys(tn.gridMovedDoms).forEach((t3) => {
        let e3 = tn.gridMovedDoms[t3];
        delete tn.gridMovedDoms[t3], e3.dom.style.gridArea = e3.area;
      }), document.body.classList.remove("grid-dragging"), this._unbindDragGuards(), this.cleanUp();
    } } }), this.instance.dropzone({ accept: this.conf.selector, checker: (t2, e2, n2, o2, i2, r2, s2) => {
      var a2;
      if (i2 && i2.getAttribute("data-draggable") === "false") return !1;
      if (typeof this.conf.canDrop == "function") {
        let n3 = typeof t2.clientX == "number" ? document.elementFromPoint(t2.clientX, t2.clientY) : e2?.target;
        return !!(((a2 = n3?.closest) == null ? void 0 : a2.call(n3, "[data-dragroot]")) === this.conf.root || n3 && this.conf.root.contains(n3)) && !!this.conf.canDrop({ source: tn.fromDraggableId, container: this.conf.id, dragId: tn.dragId });
      }
      return n2;
    }, listeners: { dragenter: (t2) => {
      var e2;
      if (t2.preventDefault(), tn.dragElement && tn.dragItemSize) {
        if (tn.scrollContainer = this.conf.scrollContainer, tn.toDraggableId = t2.dropzone.id, tn.layoutMode = t2.dropzone.layoutMode, tn.dragEndIndex = -1, tn.root = ((e2 = document.elementFromPoint(t2.dragEvent.clientX, t2.dragEvent.clientY)) == null ? void 0 : e2.closest("[data-dragroot]")) || this.conf.root, tn.layoutMode === "sparse" && tn.interactions[t2.dropzone.id].emit("gridstate", { dragId: tn.dragId, setData: (e3) => {
          var n2;
          tn.dragGridStat = e3;
          let o2 = (n2 = tn.cloneElement) == null ? void 0 : n2.getBoundingClientRect();
          if (o2 && e3.cellWidth) {
            let n3 = t2.dragEvent || t2;
            tn.startGrabX = n3.clientX - (o2.left + e3.cellWidth / 2), tn.startGrabY = n3.clientY - (o2.top + e3.cellHeight / 2);
          }
        } }), !tn.root.contains(tn.placeholderElement)) {
          tn.root.append(tn.placeholderElement);
          let t3 = tn.placeholderElement;
          if (tn.layoutMode === "sparse") {
            let e3 = tn.dragGridStat.store;
            if (e3.get(this.getDragItemId(t3))) t3.style.gridArea = tn.gridDragingItemArea;
            else {
              let n2 = e3.findFitPosition(tn.dragItemSize.w, tn.dragItemSize.h);
              t3.style.gridArea = `${n2.y} / ${n2.x} / span ${tn.dragItemSize.h} / span ${tn.dragItemSize.w}`;
            }
          } else t3.style.gridArea = `span ${tn.dragItemSize.h} / span ${tn.dragItemSize.w}`;
        }
        clearTimeout(tn.gridMoveTimer);
      }
    }, dragmove: (t2) => {
      var e2, n2;
      tn.fromDraggableId !== tn.toDraggableId && ((n2 = (e2 = tn.scrollTick) == null ? void 0 : e2.update) == null || n2.call(e2, t2.clientX, t2.clientY), t2.preventDefault(), this.emit("dragmove", { pageX: t2.page.x, pageY: t2.page.y, clientX: t2.clientX, clientY: t2.clientY }), this.setCloneElementPosition(t2), tn.layoutMode === "sparse" ? this.gridMove(t2) : this.sortElement(t2));
    } } });
  }
  getAllChild() {
    return Array.from(this.conf.root.querySelectorAll(`${this.conf.selector}:not(.drag-cloned,.drag-dragging)`));
  }
  setCloneElementPosition(t2) {
    Object.assign(tn.cloneElement.style, { transform: `translate(${t2.clientX - tn.startClientX}px, ${t2.clientY - tn.startClientY}px)` });
  }
  getDragItemId(t2) {
    return t2.getAttribute("data-dragid");
  }
  getDropPoint(t2) {
    let e2 = tn.cloneElement, n2 = e2?.getBoundingClientRect(), o2 = tn.dragGridStat, i2 = o2?.cellWidth, r2 = o2?.cellHeight;
    return n2 ? { x: n2.left + (i2 > 0 ? i2 / 2 : n2.width / 2), y: n2.top + (r2 > 0 ? r2 / 2 : n2.height / 2) } : { x: t2.clientX - (tn.startGrabX || 0), y: t2.clientY - (tn.startGrabY || 0) };
  }
  isMergeZone(t2, e2, n2) {
    let o2 = Math.hypot(t2, e2);
    return !(Math.max(Math.abs(t2), Math.abs(e2)) >= 0.72) && (n2 ? o2 <= 0.84 : o2 <= 0.62);
  }
  isSparseMergeTarget(t2, e2, n2) {
    let o2 = n2.getBoundingClientRect();
    if (!o2.width || !o2.height) return !1;
    let i2 = (t2 - o2.left) / o2.width * 2 - 1, r2 = (e2 - o2.top) / o2.height * 2 - 1, s2 = !(!tn.willFolder || tn.folderElement !== n2), a2 = Math.hypot(i2, r2);
    return !(Math.max(Math.abs(i2), Math.abs(r2)) >= (s2 ? 0.96 : 0.9)) && a2 <= (s2 ? 0.96 : 0.8);
  }
  findSparseMergeTarget(t2, e2) {
    var n2;
    let { dragElement: o2, cloneElement: i2, placeholderElement: r2 } = tn, s2 = [{ x: t2.clientX, y: t2.clientY }, e2];
    for (let a2 of s2) {
      let t3 = (n2 = document.elementFromPoint(a2.x, a2.y)) == null ? void 0 : n2.closest(this.conf.selector);
      if (!t3 || t3 === r2 || t3 === i2 || t3 === o2) continue;
      let e3 = this.getDragItemId(t3);
      if (e3 && this.isSparseMergeTarget(a2.x, a2.y, t3) && typeof this.conf.canFolder == "function" && this.conf.canFolder(tn.dragId, e3)) return { belowEl: t3, belowId: e3 };
    }
    return null;
  }
  beginFolderHover(t2, e2) {
    if (tn.willFolder && tn.folderId === e2) return !0;
    this.cleanUp(), tn.folderElement = t2, tn.folderId = e2, tn.willFolder = !0, t2.classList.add("will-folder");
    let n2 = tn.layoutMode === "sparse" ? 400 : 450;
    return tn.folderTimer = setTimeout(() => {
      t2.classList.add("open-folder"), tn.folderTimer = setTimeout(() => {
        tn.willFolder = !1, this.emit("makefolder", { fromDraggableId: tn.fromDraggableId, toDraggableId: tn.toDraggableId, dragId: tn.dragId, targetId: tn.folderId, setData: (t3) => {
          tn.folderData = t3;
        } }), t2.classList.remove("will-folder"), t2.classList.remove("open-folder");
      }, 400);
    }, n2), !0;
  }
  getInsertDirection(t2, e2, n2) {
    let o2 = n2.getBoundingClientRect();
    if (!o2.width || !o2.height) return "after";
    let i2 = (t2 - o2.left) / o2.width * 2 - 1, r2 = (e2 - o2.top) / o2.height * 2 - 1, s2 = !(!tn.willFolder || tn.folderElement !== n2);
    return this.isMergeZone(i2, r2, s2) ? "merge" : (Math.abs(i2) > Math.abs(r2) ? i2 : r2) < 0 ? "before" : "after";
  }
  sortElement(t2) {
    var e2;
    let { dragElement: o2, cloneElement: i2, placeholderElement: r2 } = tn, s2 = (e2 = document.elementFromPoint(t2.clientX, t2.clientY)) == null ? void 0 : e2.closest(this.conf.selector);
    if (!s2 || s2 === r2 || s2 === i2 || s2 === o2) return void this.cleanUp();
    if (s2.getAttribute("data-draggable") === "false") {
      this.cleanUp();
      let t3 = Array.from(tn.root.querySelectorAll(this.conf.selector)), e3 = t3.filter((t4) => t4 !== o2 && t4 != r2 && t4 != i2), a3 = this.getDragItemId(s2), c3 = a3 && t3.find((t4) => t4 !== s2 && t4 !== r2 && t4 !== o2 && this.getDragItemId(t4) === a3) || s2;
      return c3 === o2 || c3 === r2 ? void 0 : (tn.animator = new k(e3), tn.animator.snapshot(), c3.before(r2), void tn.animator.play());
    }
    let a2 = this.getDragItemId(s2);
    if (!a2) return void this.cleanUp();
    let c2 = this.getInsertDirection(t2.clientX, t2.clientY, s2);
    if (c2 === "merge" && typeof this.conf.canFolder == "function" && this.conf.canFolder(tn.dragId, a2)) return void this.beginFolderHover(s2, a2);
    this.cleanUp();
    let l2 = Array.from(tn.root.querySelectorAll(this.conf.selector)), d2 = l2.filter((t3) => t3 !== o2 && t3 != r2 && t3 != i2);
    tn.dragEndIndex = this.getDragIndex(l2), c2 === "before" ? (tn.animator = new k(d2), tn.animator.snapshot(), s2.before(r2), tn.animator.play()) : c2 === "after" && (tn.animator = new k(d2), tn.animator.snapshot(), s2.after(r2), tn.animator.play());
  }
  getDragIndex(t2) {
    let { dragElement: e2, cloneElement: n2, placeholderElement: o2 } = tn;
    return (t2 = t2 || Array.from(tn.root.querySelectorAll(this.conf.selector))).filter((t3) => t3 !== e2 && t3 != n2).findIndex((t3) => this.getDragItemId(t3) === tn.dragId);
  }
  cleanUp() {
    var t2;
    (t2 = tn.animator) == null || t2.destroy(), en();
  }
  gridMove(t2) {
    var e2;
    let o2 = this.getDropPoint(t2), i2 = this.findSparseMergeTarget(t2, o2);
    if (i2) return void this.beginFolderHover(i2.belowEl, i2.belowId);
    let r2 = (e2 = document.elementFromPoint(o2.x, o2.y)) == null ? void 0 : e2.closest(this.conf.selector), { dragElement: s2, cloneElement: a2, placeholderElement: c2 } = tn;
    r2 !== c2 && r2 !== a2 && r2 !== s2 || (r2 = null);
    let l2 = this.calcDragItemGridDropPosition(o2.x, o2.y, r2);
    if (this.cleanUp(), l2) {
      let { dragElement: t3, cloneElement: e3, placeholderElement: o3 } = tn, i3 = Array.from(tn.root.querySelectorAll(this.conf.selector)), r3 = i3.filter((n2) => n2 !== t3 && n2 != o3 && n2 != e3), s3 = i3.filter((n2) => n2 !== t3 && n2 != e3).reduce((t4, e4) => (t4[this.getDragItemId(e4)] = e4, t4), {});
      tn.animator = new k(r3), tn.animator.snapshot();
      let a3 = tn.dragGridStat.store.clone(), c3;
      if (!a3.get(tn.dragId)) {
        let { x: t4, y: e4 } = a3.findFitPosition(tn.dragItemSize.w, tn.dragItemSize.h);
        c3 = a3.add({ id: tn.dragId, x: t4, y: e4, w: tn.dragItemSize.w, h: tn.dragItemSize.h });
      }
      let d2 = a3.move(tn.dragId, l2.x, l2.y);
      c3 && !d2.some((t4) => t4.id == c3.id) && d2.push(c3), d2.forEach((t4) => {
        try {
          tn.gridMovedDoms[t4.id] || (tn.gridMovedDoms[t4.id] = { dom: s3[t4.id], area: s3[t4.id].style.gridArea }), s3[t4.id].style.gridArea = `${t4.y} / ${t4.x} / span ${t4.h} / span ${t4.w}`;
        } catch (e4) {
          throw e4;
        }
      });
      let p2 = d2.map((t4) => t4.id);
      Object.keys(tn.gridMovedDoms).forEach((t4) => {
        if (!p2.includes(t4)) {
          let e4 = tn.gridMovedDoms[t4];
          delete tn.gridMovedDoms[t4], e4.dom.style.gridArea = e4.area;
        }
      }), d2.length ? tn.gridMovedItems = d2 : tn.gridMovedItems = [a3.get(tn.dragId)], tn.animator.play();
    }
  }
  calcDragItemGridDropPosition(t2, e2, n2) {
    let o2 = tn.dragGridStat, { cellWidth: i2, cellHeight: r2, gapX: s2, gapY: a2, columns: c2, rows: l2 } = o2, { w: d2, h: p2 } = tn.dragItemSize, h2 = i2 + s2, u2 = r2 + a2, f2 = tn.root, g2 = f2.getBoundingClientRect(), m2 = getComputedStyle(f2), v2 = t2 - Math.round(g2.left + (parseFloat(m2.paddingLeft) || 0)), y2 = e2 - Math.round(g2.top + (parseFloat(m2.paddingTop) || 0)), b2 = Math.floor(v2 / h2), x2 = Math.floor(y2 / u2), w2 = v2 - b2 * h2, E2 = y2 - x2 * u2;
    if (w2 <= 0 || E2 <= 0 || w2 >= i2 || E2 >= r2) return null;
    let I2 = i2 / 2, S2 = r2 / 2, D2 = w2 - I2, M2 = D2 / I2, T2 = (E2 - S2) / S2, _2 = !(!n2 || !tn.willFolder || tn.folderElement !== n2), P2 = !!n2 && this.isMergeZone(M2, T2, _2), O2 = Math.abs(M2), A2 = 0;
    n2 && O2 > 0.7 && (O2 > 0.9 && D2 < 0 ? A2 = 0 : D2 < 0 ? A2 = -1 : D2 > 0 && (A2 = 1));
    let C2 = c2 - d2, z2 = (l2 ?? 1 / 0) - p2, F2 = Math.max(0, Math.min(b2 + A2, C2)), k22 = Math.max(0, Math.min(x2, z2));
    return P2 ? { type: "merge", x: F2 + 1, y: k22 + 1 } : { type: "insert", x: F2 + 1, y: k22 + 1 };
  }
  manualAutoScroll(t2 = {}) {
    let e2 = t2.speed > 0 ? t2.speed : 280, n2 = t2.threshold > 0 ? t2.threshold : 100, o2 = t2.enableX !== !1, i2 = t2.enableY !== !1, r2 = !!t2.reverse, s2 = Math.round(1e3 / e2), a2 = typeof performance < "u" && typeof performance.now == "function" ? () => performance.now() : () => Date.now(), c2 = -1 / 0, l2 = -1 / 0, d2 = !1, p2 = null, h2 = null, u2 = null;
    function f2(t3, e3) {
      return t3 >= 0 && t3 < n2 ? -1 : e3 >= 0 && e3 < n2 ? 1 : 0;
    }
    function g2(t3, e3) {
      let n3 = e3 - t3.lastTickTime;
      if (n3 < 0 && (n3 = 0), n3 < s2) return 0;
      let o3 = Math.floor(n3 / s2);
      return t3.lastTickTime += o3 * s2, o3;
    }
    function m2() {
      if (!d2) return void (p2 = null);
      let t3 = !1;
      if (tn.scrollContainer) {
        let e3 = tn.scrollContainer, n3 = a2(), s3 = e3.getBoundingClientRect(), d3 = r2 ? -1 : 1;
        if (i2 && c2 >= s3.left && c2 <= s3.right) {
          let o3 = f2(l2 - s3.top, s3.bottom - l2);
          if (o3 !== 0) {
            u2 || (u2 = { dir: o3 * d3, lastTickTime: n3 });
            let i3 = g2(u2, n3);
            i3 > 0 && (e3.scrollTop += u2.dir * i3), t3 = !0;
          } else u2 = null;
        } else u2 = null;
        if (o2 && l2 >= s3.top && l2 <= s3.bottom) {
          let o3 = f2(c2 - s3.left, s3.right - c2);
          if (o3 !== 0) {
            h2 || (h2 = { dir: o3 * d3, lastTickTime: n3 });
            let i3 = g2(h2, n3);
            i3 > 0 && (e3.scrollLeft += h2.dir * i3), t3 = !0;
          } else h2 = null;
        } else h2 = null;
      }
      d2 = t3, p2 = requestAnimationFrame(m2);
    }
    return { update: function(t3, e3) {
      c2 = t3, l2 = e3, d2 = !0, p2 === null && (p2 = requestAnimationFrame(m2));
    }, reset: function() {
      d2 = !1, p2 !== null && (cancelAnimationFrame(p2), p2 = null), h2 = null, u2 = null, c2 = -1 / 0, l2 = -1 / 0;
    } };
  }
  setLayout(t2) {
    this.conf.layout = t2, this.instance.layoutMode = t2;
  }
  setId(t2) {
    delete tn.interactions[this.instance.id], this.instance.id = t2, tn.interactions[this.instance.id] = this, this.conf.id = t2, this.conf.root.setAttribute("data-dragroot", t2);
  }
  destroy() {
    this._unbindDragGuards(), this.instance.unset(), delete tn.interactions[this.instance.id];
  }
};
export {
  nn as GridDraggable,
  Qe as GridDraggableState,
  en as clearFolderHoverState,
  tn as gridDraggableState
};
