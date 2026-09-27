// ../chunks/vendor-vue-BG-CQRtu.js
// @__NO_SIDE_EFFECTS__
function e(e2) {
  let t2 = /* @__PURE__ */ Object.create(null);
  for (let n2 of e2.split(",")) t2[n2] = 1;
  return (e3) => e3 in t2;
}
var t = {}, n = [], s = () => {
}, r = () => !1, o = (e2) => e2.charCodeAt(0) === 111 && e2.charCodeAt(1) === 110 && (e2.charCodeAt(2) > 122 || e2.charCodeAt(2) < 97), i = (e2) => e2.startsWith("onUpdate:"), l = Object.assign, c = (e2, t2) => {
  let n2 = e2.indexOf(t2);
  n2 > -1 && e2.splice(n2, 1);
}, a = Object.prototype.hasOwnProperty, u = (e2, t2) => a.call(e2, t2), f = Array.isArray, p = (e2) => x(e2) === "[object Map]", d = (e2) => x(e2) === "[object Set]";
var v = (e2) => typeof e2 == "function", g = (e2) => typeof e2 == "string", m = (e2) => typeof e2 == "symbol", y = (e2) => e2 !== null && typeof e2 == "object", _ = (e2) => (y(e2) || v(e2)) && v(e2.then) && v(e2.catch), b = Object.prototype.toString, x = (e2) => b.call(e2), S = (e2) => x(e2) === "[object Object]", w = (e2) => g(e2) && e2 !== "NaN" && e2[0] !== "-" && "" + parseInt(e2, 10) === e2, C = /* @__PURE__ */ e(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), k = (e2) => {
  let t2 = /* @__PURE__ */ Object.create(null);
  return (n2) => t2[n2] || (t2[n2] = e2(n2));
}, A = /-(\w)/g, E = k((e2) => e2.replace(A, (e3, t2) => t2 ? t2.toUpperCase() : "")), T = /\B([A-Z])/g, O = k((e2) => e2.replace(T, "-$1").toLowerCase()), F = k((e2) => e2.charAt(0).toUpperCase() + e2.slice(1)), M = k((e2) => e2 ? `on${F(e2)}` : ""), L = (e2, t2) => !Object.is(e2, t2), j = (e2, ...t2) => {
  for (let n2 = 0; n2 < e2.length; n2++) e2[n2](...t2);
}, P = (e2, t2, n2, s2 = !1) => {
  Object.defineProperty(e2, t2, { configurable: !0, enumerable: !1, writable: s2, value: n2 });
}, $ = (e2) => {
  let t2 = parseFloat(e2);
  return isNaN(t2) ? e2 : t2;
}, D, R = () => D || (D = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function V(e2) {
  if (f(e2)) {
    let t2 = {};
    for (let n2 = 0; n2 < e2.length; n2++) {
      let s2 = e2[n2], r2 = g(s2) ? B(s2) : V(s2);
      if (r2) for (let e3 in r2) t2[e3] = r2[e3];
    }
    return t2;
  }
  if (g(e2) || y(e2)) return e2;
}
var I = /;(?![^(]*\))/g, N = /:([^]+)/, U = /\/\*[^]*?\*\//g;
function B(e2) {
  let t2 = {};
  return e2.replace(U, "").split(I).forEach((e3) => {
    if (e3) {
      let n2 = e3.split(N);
      n2.length > 1 && (t2[n2[0].trim()] = n2[1].trim());
    }
  }), t2;
}
function W(e2) {
  let t2 = "";
  if (g(e2)) t2 = e2;
  else if (f(e2)) for (let n2 = 0; n2 < e2.length; n2++) {
    let s2 = W(e2[n2]);
    s2 && (t2 += s2 + " ");
  }
  else if (y(e2)) for (let n2 in e2) e2[n2] && (t2 += n2 + " ");
  return t2.trim();
}
var K = /* @__PURE__ */ e("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");
function z(e2) {
  return !!e2 || e2 === "";
}
var J = (e2) => !(!e2 || e2.__v_isRef !== !0), Z = (e2) => g(e2) ? e2 : e2 == null ? "" : f(e2) || y(e2) && (e2.toString === b || !v(e2.toString)) ? J(e2) ? Z(e2.value) : JSON.stringify(e2, X, 2) : String(e2), X = (e2, t2) => J(t2) ? X(e2, t2.value) : p(t2) ? { [`Map(${t2.size})`]: [...t2.entries()].reduce((e3, [t3, n2], s2) => (e3[Q(t3, s2) + " =>"] = n2, e3), {}) } : d(t2) ? { [`Set(${t2.size})`]: [...t2.values()].map((e3) => Q(e3)) } : m(t2) ? Q(t2) : !y(t2) || f(t2) || S(t2) ? t2 : String(t2), Q = (e2, t2 = "") => {
  var n2;
  return m(e2) ? `Symbol(${(n2 = e2.description) != null ? n2 : t2})` : e2;
};
var Y, ee, te = class {
  constructor(e2 = !1) {
    this.detached = e2, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Y, !e2 && Y && (this.index = (Y.scopes || (Y.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      let e2, t2;
      if (this._isPaused = !0, this.scopes) for (e2 = 0, t2 = this.scopes.length; e2 < t2; e2++) this.scopes[e2].pause();
      for (e2 = 0, t2 = this.effects.length; e2 < t2; e2++) this.effects[e2].pause();
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      let e2, t2;
      if (this._isPaused = !1, this.scopes) for (e2 = 0, t2 = this.scopes.length; e2 < t2; e2++) this.scopes[e2].resume();
      for (e2 = 0, t2 = this.effects.length; e2 < t2; e2++) this.effects[e2].resume();
    }
  }
  run(e2) {
    if (this._active) {
      let t2 = Y;
      try {
        return Y = this, e2();
      } finally {
        Y = t2;
      }
    }
  }
  on() {
    ++this._on === 1 && (this.prevScope = Y, Y = this);
  }
  off() {
    this._on > 0 && --this._on === 0 && (Y = this.prevScope, this.prevScope = void 0);
  }
  stop(e2) {
    if (this._active) {
      let t2, n2;
      for (this._active = !1, t2 = 0, n2 = this.effects.length; t2 < n2; t2++) this.effects[t2].stop();
      for (this.effects.length = 0, t2 = 0, n2 = this.cleanups.length; t2 < n2; t2++) this.cleanups[t2]();
      if (this.cleanups.length = 0, this.scopes) {
        for (t2 = 0, n2 = this.scopes.length; t2 < n2; t2++) this.scopes[t2].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !e2) {
        let e3 = this.parent.scopes.pop();
        e3 && e3 !== this && (this.parent.scopes[this.index] = e3, e3.index = this.index);
      }
      this.parent = void 0;
    }
  }
};
function se() {
  return Y;
}
var oe = /* @__PURE__ */ new WeakSet(), ie = class {
  constructor(e2) {
    this.fn = e2, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Y && Y.active && Y.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    64 & this.flags && (this.flags &= -65, oe.has(this) && (oe.delete(this), this.trigger()));
  }
  notify() {
    2 & this.flags && !(32 & this.flags) || 8 & this.flags || ue(this);
  }
  run() {
    if (!(1 & this.flags)) return this.fn();
    this.flags |= 2, we(this), de(this);
    let e2 = ee, t2 = _e;
    ee = this, _e = !0;
    try {
      return this.fn();
    } finally {
      he(this), ee = e2, _e = t2, this.flags &= -3;
    }
  }
  stop() {
    if (1 & this.flags) {
      for (let e2 = this.deps; e2; e2 = e2.nextDep) me(e2);
      this.deps = this.depsTail = void 0, we(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    64 & this.flags ? oe.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  runIfDirty() {
    ve(this) && this.run();
  }
  get dirty() {
    return ve(this);
  }
}, le, ce, ae = 0;
function ue(e2, t2 = !1) {
  if (e2.flags |= 8, t2) return e2.next = ce, void (ce = e2);
  e2.next = le, le = e2;
}
function fe() {
  ae++;
}
function pe() {
  if (--ae > 0) return;
  if (ce) {
    let e3 = ce;
    for (ce = void 0; e3; ) {
      let t2 = e3.next;
      e3.next = void 0, e3.flags &= -9, e3 = t2;
    }
  }
  let e2;
  for (; le; ) {
    let n2 = le;
    for (le = void 0; n2; ) {
      let s2 = n2.next;
      if (n2.next = void 0, n2.flags &= -9, 1 & n2.flags) try {
        n2.trigger();
      } catch (t2) {
        e2 || (e2 = t2);
      }
      n2 = s2;
    }
  }
  if (e2) throw e2;
}
function de(e2) {
  for (let t2 = e2.deps; t2; t2 = t2.nextDep) t2.version = -1, t2.prevActiveLink = t2.dep.activeLink, t2.dep.activeLink = t2;
}
function he(e2) {
  let t2, n2 = e2.depsTail, s2 = n2;
  for (; s2; ) {
    let e3 = s2.prevDep;
    s2.version === -1 ? (s2 === n2 && (n2 = e3), me(s2), ye(s2)) : t2 = s2, s2.dep.activeLink = s2.prevActiveLink, s2.prevActiveLink = void 0, s2 = e3;
  }
  e2.deps = t2, e2.depsTail = n2;
}
function ve(e2) {
  for (let t2 = e2.deps; t2; t2 = t2.nextDep) if (t2.dep.version !== t2.version || t2.dep.computed && (ge(t2.dep.computed) || t2.dep.version !== t2.version)) return !0;
  return !!e2._dirty;
}
function ge(e2) {
  if (4 & e2.flags && !(16 & e2.flags) || (e2.flags &= -17, e2.globalVersion === Ce) || (e2.globalVersion = Ce, !e2.isSSR && 128 & e2.flags && (!e2.deps && !e2._dirty || !ve(e2)))) return;
  e2.flags |= 2;
  let t2 = e2.dep, n2 = ee, s2 = _e;
  ee = e2, _e = !0;
  try {
    de(e2);
    let n3 = e2.fn(e2._value);
    (t2.version === 0 || L(n3, e2._value)) && (e2.flags |= 128, e2._value = n3, t2.version++);
  } catch (r2) {
    throw t2.version++, r2;
  } finally {
    ee = n2, _e = s2, he(e2), e2.flags &= -3;
  }
}
function me(e2, t2 = !1) {
  let { dep: n2, prevSub: s2, nextSub: r2 } = e2;
  if (s2 && (s2.nextSub = r2, e2.prevSub = void 0), r2 && (r2.prevSub = s2, e2.nextSub = void 0), n2.subs === e2 && (n2.subs = s2, !s2 && n2.computed)) {
    n2.computed.flags &= -5;
    for (let e3 = n2.computed.deps; e3; e3 = e3.nextDep) me(e3, !0);
  }
  t2 || --n2.sc || !n2.map || n2.map.delete(n2.key);
}
function ye(e2) {
  let { prevDep: t2, nextDep: n2 } = e2;
  t2 && (t2.nextDep = n2, e2.prevDep = void 0), n2 && (n2.prevDep = t2, e2.nextDep = void 0);
}
var _e = !0, be = [];
function xe() {
  be.push(_e), _e = !1;
}
function Se() {
  let e2 = be.pop();
  _e = e2 === void 0 || e2;
}
function we(e2) {
  let { cleanup: t2 } = e2;
  if (e2.cleanup = void 0, t2) {
    let e3 = ee;
    ee = void 0;
    try {
      t2();
    } finally {
      ee = e3;
    }
  }
}
var Ce = 0, ke = class {
  constructor(e2, t2) {
    this.sub = e2, this.dep = t2, this.version = t2.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}, Ae = class {
  constructor(e2) {
    this.computed = e2, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(e2) {
    if (!ee || !_e || ee === this.computed) return;
    let t2 = this.activeLink;
    if (t2 === void 0 || t2.sub !== ee) t2 = this.activeLink = new ke(ee, this), ee.deps ? (t2.prevDep = ee.depsTail, ee.depsTail.nextDep = t2, ee.depsTail = t2) : ee.deps = ee.depsTail = t2, Ee(t2);
    else if (t2.version === -1 && (t2.version = this.version, t2.nextDep)) {
      let e3 = t2.nextDep;
      e3.prevDep = t2.prevDep, t2.prevDep && (t2.prevDep.nextDep = e3), t2.prevDep = ee.depsTail, t2.nextDep = void 0, ee.depsTail.nextDep = t2, ee.depsTail = t2, ee.deps === t2 && (ee.deps = e3);
    }
    return t2;
  }
  trigger(e2) {
    this.version++, Ce++, this.notify(e2);
  }
  notify(e2) {
    fe();
    try {
      for (let e3 = this.subs; e3; e3 = e3.prevSub) e3.sub.notify() && e3.sub.dep.notify();
    } finally {
      pe();
    }
  }
};
function Ee(e2) {
  if (e2.dep.sc++, 4 & e2.sub.flags) {
    let t2 = e2.dep.computed;
    if (t2 && !e2.dep.subs) {
      t2.flags |= 20;
      for (let e3 = t2.deps; e3; e3 = e3.nextDep) Ee(e3);
    }
    let n2 = e2.dep.subs;
    n2 !== e2 && (e2.prevSub = n2, n2 && (n2.nextSub = e2)), e2.dep.subs = e2;
  }
}
var Te = /* @__PURE__ */ new WeakMap(), Oe = /* @__PURE__ */ Symbol(""), Fe = /* @__PURE__ */ Symbol(""), Me = /* @__PURE__ */ Symbol("");
function Le(e2, t2, n2) {
  if (_e && ee) {
    let t3 = Te.get(e2);
    t3 || Te.set(e2, t3 = /* @__PURE__ */ new Map());
    let s2 = t3.get(n2);
    s2 || (t3.set(n2, s2 = new Ae()), s2.map = t3, s2.key = n2), s2.track();
  }
}
function je(e2, t2, n2, s2, r2, o3) {
  let i2 = Te.get(e2);
  if (!i2) return void Ce++;
  let l3 = (e3) => {
    e3 && e3.trigger();
  };
  if (fe(), t2 === "clear") i2.forEach(l3);
  else {
    let r3 = f(e2), o4 = r3 && w(n2);
    if (r3 && n2 === "length") {
      let e3 = Number(s2);
      i2.forEach((t3, n3) => {
        (n3 === "length" || n3 === Me || !m(n3) && n3 >= e3) && l3(t3);
      });
    } else switch ((n2 !== void 0 || i2.has(void 0)) && l3(i2.get(n2)), o4 && l3(i2.get(Me)), t2) {
      case "add":
        r3 ? o4 && l3(i2.get("length")) : (l3(i2.get(Oe)), p(e2) && l3(i2.get(Fe)));
        break;
      case "delete":
        r3 || (l3(i2.get(Oe)), p(e2) && l3(i2.get(Fe)));
        break;
      case "set":
        p(e2) && l3(i2.get(Oe));
    }
  }
  pe();
}
function Pe(e2) {
  let t2 = St(e2);
  return t2 === e2 ? t2 : (Le(t2, 0, Me), bt(e2) ? t2 : t2.map(Ct));
}
function $e(e2) {
  return Le(e2 = St(e2), 0, Me), e2;
}
var De = { __proto__: null, [Symbol.iterator]() {
  return Re(this, Symbol.iterator, Ct);
}, concat(...e2) {
  return Pe(this).concat(...e2.map((e3) => f(e3) ? Pe(e3) : e3));
}, entries() {
  return Re(this, "entries", (e2) => (e2[1] = Ct(e2[1]), e2));
}, every(e2, t2) {
  return Ie(this, "every", e2, t2, void 0, arguments);
}, filter(e2, t2) {
  return Ie(this, "filter", e2, t2, (e3) => e3.map(Ct), arguments);
}, find(e2, t2) {
  return Ie(this, "find", e2, t2, Ct, arguments);
}, findIndex(e2, t2) {
  return Ie(this, "findIndex", e2, t2, void 0, arguments);
}, findLast(e2, t2) {
  return Ie(this, "findLast", e2, t2, Ct, arguments);
}, findLastIndex(e2, t2) {
  return Ie(this, "findLastIndex", e2, t2, void 0, arguments);
}, forEach(e2, t2) {
  return Ie(this, "forEach", e2, t2, void 0, arguments);
}, includes(...e2) {
  return Ue(this, "includes", e2);
}, indexOf(...e2) {
  return Ue(this, "indexOf", e2);
}, join(e2) {
  return Pe(this).join(e2);
}, lastIndexOf(...e2) {
  return Ue(this, "lastIndexOf", e2);
}, map(e2, t2) {
  return Ie(this, "map", e2, t2, void 0, arguments);
}, pop() {
  return Be(this, "pop");
}, push(...e2) {
  return Be(this, "push", e2);
}, reduce(e2, ...t2) {
  return Ne(this, "reduce", e2, t2);
}, reduceRight(e2, ...t2) {
  return Ne(this, "reduceRight", e2, t2);
}, shift() {
  return Be(this, "shift");
}, some(e2, t2) {
  return Ie(this, "some", e2, t2, void 0, arguments);
}, splice(...e2) {
  return Be(this, "splice", e2);
}, toReversed() {
  return Pe(this).toReversed();
}, toSorted(e2) {
  return Pe(this).toSorted(e2);
}, toSpliced(...e2) {
  return Pe(this).toSpliced(...e2);
}, unshift(...e2) {
  return Be(this, "unshift", e2);
}, values() {
  return Re(this, "values", Ct);
} };
function Re(e2, t2, n2) {
  let s2 = $e(e2), r2 = s2[t2]();
  return s2 === e2 || bt(e2) || (r2._next = r2.next, r2.next = () => {
    let e3 = r2._next();
    return e3.value && (e3.value = n2(e3.value)), e3;
  }), r2;
}
var Ve = Array.prototype;
function Ie(e2, t2, n2, s2, r2, o3) {
  let i2 = $e(e2), l3 = i2 !== e2 && !bt(e2), c2 = i2[t2];
  if (c2 !== Ve[t2]) {
    let t3 = c2.apply(e2, o3);
    return l3 ? Ct(t3) : t3;
  }
  let a2 = n2;
  i2 !== e2 && (l3 ? a2 = function(t3, s3) {
    return n2.call(this, Ct(t3), s3, e2);
  } : n2.length > 2 && (a2 = function(t3, s3) {
    return n2.call(this, t3, s3, e2);
  }));
  let u2 = c2.call(i2, a2, s2);
  return l3 && r2 ? r2(u2) : u2;
}
function Ne(e2, t2, n2, s2) {
  let r2 = $e(e2), o3 = n2;
  return r2 !== e2 && (bt(e2) ? n2.length > 3 && (o3 = function(t3, s3, r3) {
    return n2.call(this, t3, s3, r3, e2);
  }) : o3 = function(t3, s3, r3) {
    return n2.call(this, t3, Ct(s3), r3, e2);
  }), r2[t2](o3, ...s2);
}
function Ue(e2, t2, n2) {
  let s2 = St(e2);
  Le(s2, 0, Me);
  let r2 = s2[t2](...n2);
  return r2 !== -1 && r2 !== !1 || !xt(n2[0]) ? r2 : (n2[0] = St(n2[0]), s2[t2](...n2));
}
function Be(e2, t2, n2 = []) {
  xe(), fe();
  let s2 = St(e2)[t2].apply(e2, n2);
  return pe(), Se(), s2;
}
var We = /* @__PURE__ */ e("__proto__,__v_isRef,__isVue"), He = new Set(Object.getOwnPropertyNames(Symbol).filter((e2) => e2 !== "arguments" && e2 !== "caller").map((e2) => Symbol[e2]).filter(m));
function Ke(e2) {
  m(e2) || (e2 = String(e2));
  let t2 = St(this);
  return Le(t2, 0, e2), t2.hasOwnProperty(e2);
}
var ze = class {
  constructor(e2 = !1, t2 = !1) {
    this._isReadonly = e2, this._isShallow = t2;
  }
  get(e2, t2, n2) {
    if (t2 === "__v_skip") return e2.__v_skip;
    let s2 = this._isReadonly, r2 = this._isShallow;
    if (t2 === "__v_isReactive") return !s2;
    if (t2 === "__v_isReadonly") return s2;
    if (t2 === "__v_isShallow") return r2;
    if (t2 === "__v_raw") return n2 === (s2 ? r2 ? ft : ut : r2 ? at : ct).get(e2) || Object.getPrototypeOf(e2) === Object.getPrototypeOf(n2) ? e2 : void 0;
    let o3 = f(e2);
    if (!s2) {
      let e3;
      if (o3 && (e3 = De[t2])) return e3;
      if (t2 === "hasOwnProperty") return Ke;
    }
    let i2 = Reflect.get(e2, t2, At(e2) ? e2 : n2);
    return (m(t2) ? He.has(t2) : We(t2)) ? i2 : (s2 || Le(e2, 0, t2), r2 ? i2 : At(i2) ? o3 && w(t2) ? i2 : i2.value : y(i2) ? s2 ? vt(i2) : dt(i2) : i2);
  }
}, qe = class extends ze {
  constructor(e2 = !1) {
    super(!1, e2);
  }
  set(e2, t2, n2, s2) {
    let r2 = e2[t2];
    if (!this._isShallow) {
      let t3 = _t(r2);
      if (bt(n2) || _t(n2) || (r2 = St(r2), n2 = St(n2)), !f(e2) && At(r2) && !At(n2)) return !t3 && (r2.value = n2, !0);
    }
    let o3 = f(e2) && w(t2) ? Number(t2) < e2.length : u(e2, t2), i2 = Reflect.set(e2, t2, n2, At(e2) ? e2 : s2);
    return e2 === St(s2) && (o3 ? L(n2, r2) && je(e2, "set", t2, n2) : je(e2, "add", t2, n2)), i2;
  }
  deleteProperty(e2, t2) {
    let n2 = u(e2, t2);
    e2[t2];
    let s2 = Reflect.deleteProperty(e2, t2);
    return s2 && n2 && je(e2, "delete", t2, void 0), s2;
  }
  has(e2, t2) {
    let n2 = Reflect.has(e2, t2);
    return m(t2) && He.has(t2) || Le(e2, 0, t2), n2;
  }
  ownKeys(e2) {
    return Le(e2, 0, f(e2) ? "length" : Oe), Reflect.ownKeys(e2);
  }
}, Ge = class extends ze {
  constructor(e2 = !1) {
    super(!0, e2);
  }
  set(e2, t2) {
    return !0;
  }
  deleteProperty(e2, t2) {
    return !0;
  }
}, Je = new qe(), Ze = new Ge(), Xe = new qe(!0), Qe = new Ge(!0), Ye = (e2) => e2, et = (e2) => Reflect.getPrototypeOf(e2);
function tt(e2) {
  return function(...t2) {
    return e2 !== "delete" && (e2 === "clear" ? void 0 : this);
  };
}
function nt(e2, t2) {
  let n2 = { get(n3) {
    let s2 = this.__v_raw, r2 = St(s2), o3 = St(n3);
    e2 || (L(n3, o3) && Le(r2, 0, n3), Le(r2, 0, o3));
    let { has: i2 } = et(r2), l3 = t2 ? Ye : e2 ? kt : Ct;
    return i2.call(r2, n3) ? l3(s2.get(n3)) : i2.call(r2, o3) ? l3(s2.get(o3)) : void (s2 !== r2 && s2.get(n3));
  }, get size() {
    let t3 = this.__v_raw;
    return !e2 && Le(St(t3), 0, Oe), Reflect.get(t3, "size", t3);
  }, has(t3) {
    let n3 = this.__v_raw, s2 = St(n3), r2 = St(t3);
    return e2 || (L(t3, r2) && Le(s2, 0, t3), Le(s2, 0, r2)), t3 === r2 ? n3.has(t3) : n3.has(t3) || n3.has(r2);
  }, forEach(n3, s2) {
    let r2 = this, o3 = r2.__v_raw, i2 = St(o3), l3 = t2 ? Ye : e2 ? kt : Ct;
    return !e2 && Le(i2, 0, Oe), o3.forEach((e3, t3) => n3.call(s2, l3(e3), l3(t3), r2));
  } };
  return l(n2, e2 ? { add: tt("add"), set: tt("set"), delete: tt("delete"), clear: tt("clear") } : { add(e3) {
    t2 || bt(e3) || _t(e3) || (e3 = St(e3));
    let n3 = St(this);
    return et(n3).has.call(n3, e3) || (n3.add(e3), je(n3, "add", e3, e3)), this;
  }, set(e3, n3) {
    t2 || bt(n3) || _t(n3) || (n3 = St(n3));
    let s2 = St(this), { has: r2, get: o3 } = et(s2), i2 = r2.call(s2, e3);
    i2 || (e3 = St(e3), i2 = r2.call(s2, e3));
    let l3 = o3.call(s2, e3);
    return s2.set(e3, n3), i2 ? L(n3, l3) && je(s2, "set", e3, n3) : je(s2, "add", e3, n3), this;
  }, delete(e3) {
    let t3 = St(this), { has: n3, get: s2 } = et(t3), r2 = n3.call(t3, e3);
    r2 || (e3 = St(e3), r2 = n3.call(t3, e3)), s2 && s2.call(t3, e3);
    let o3 = t3.delete(e3);
    return r2 && je(t3, "delete", e3, void 0), o3;
  }, clear() {
    let e3 = St(this), t3 = e3.size !== 0, n3 = e3.clear();
    return t3 && je(e3, "clear", void 0, void 0), n3;
  } }), ["keys", "values", "entries", Symbol.iterator].forEach((s2) => {
    n2[s2] = /* @__PURE__ */ (function(e3, t3, n3) {
      return function(...s3) {
        let r2 = this.__v_raw, o3 = St(r2), i2 = p(o3), l3 = e3 === "entries" || e3 === Symbol.iterator && i2, c2 = e3 === "keys" && i2, a2 = r2[e3](...s3), u2 = n3 ? Ye : t3 ? kt : Ct;
        return !t3 && Le(o3, 0, c2 ? Fe : Oe), { next() {
          let { value: e4, done: t4 } = a2.next();
          return t4 ? { value: e4, done: t4 } : { value: l3 ? [u2(e4[0]), u2(e4[1])] : u2(e4), done: t4 };
        }, [Symbol.iterator]() {
          return this;
        } };
      };
    })(s2, e2, t2);
  }), n2;
}
function st(e2, t2) {
  let n2 = nt(e2, t2);
  return (t3, s2, r2) => s2 === "__v_isReactive" ? !e2 : s2 === "__v_isReadonly" ? e2 : s2 === "__v_raw" ? t3 : Reflect.get(u(n2, s2) && s2 in t3 ? n2 : t3, s2, r2);
}
var rt = { get: st(!1, !1) }, ot = { get: st(!1, !0) }, it = { get: st(!0, !1) }, lt = { get: st(!0, !0) }, ct = /* @__PURE__ */ new WeakMap(), at = /* @__PURE__ */ new WeakMap(), ut = /* @__PURE__ */ new WeakMap(), ft = /* @__PURE__ */ new WeakMap();
function pt(e2) {
  return e2.__v_skip || !Object.isExtensible(e2) ? 0 : (function(e3) {
    switch (e3) {
      case "Object":
      case "Array":
        return 1;
      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2;
      default:
        return 0;
    }
  })(((e3) => x(e3).slice(8, -1))(e2));
}
function dt(e2) {
  return _t(e2) ? e2 : mt(e2, !1, Je, rt, ct);
}
function ht(e2) {
  return mt(e2, !1, Xe, ot, at);
}
function vt(e2) {
  return mt(e2, !0, Ze, it, ut);
}
function mt(e2, t2, n2, s2, r2) {
  if (!y(e2) || e2.__v_raw && (!t2 || !e2.__v_isReactive)) return e2;
  let o3 = pt(e2);
  if (o3 === 0) return e2;
  let i2 = r2.get(e2);
  if (i2) return i2;
  let l3 = new Proxy(e2, o3 === 2 ? s2 : n2);
  return r2.set(e2, l3), l3;
}
function yt(e2) {
  return _t(e2) ? yt(e2.__v_raw) : !(!e2 || !e2.__v_isReactive);
}
function _t(e2) {
  return !(!e2 || !e2.__v_isReadonly);
}
function bt(e2) {
  return !(!e2 || !e2.__v_isShallow);
}
function xt(e2) {
  return !!e2 && !!e2.__v_raw;
}
function St(e2) {
  let t2 = e2 && e2.__v_raw;
  return t2 ? St(t2) : e2;
}
function wt(e2) {
  return !u(e2, "__v_skip") && Object.isExtensible(e2) && P(e2, "__v_skip", !0), e2;
}
var Ct = (e2) => y(e2) ? dt(e2) : e2, kt = (e2) => y(e2) ? vt(e2) : e2;
function At(e2) {
  return !!e2 && e2.__v_isRef === !0;
}
function Tt(e2) {
  return Ot(e2, !0);
}
function Ot(e2, t2) {
  return At(e2) ? e2 : new Ft(e2, t2);
}
var Ft = class {
  constructor(e2, t2) {
    this.dep = new Ae(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t2 ? e2 : St(e2), this._value = t2 ? e2 : Ct(e2), this.__v_isShallow = t2;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(e2) {
    let t2 = this._rawValue, n2 = this.__v_isShallow || bt(e2) || _t(e2);
    e2 = n2 ? e2 : St(e2), L(e2, t2) && (this._rawValue = e2, this._value = n2 ? e2 : Ct(e2), this.dep.trigger());
  }
};
function Lt(e2) {
  return At(e2) ? e2.value : e2;
}
var Pt = { get: (e2, t2, n2) => t2 === "__v_raw" ? e2 : Lt(Reflect.get(e2, t2, n2)), set: (e2, t2, n2, s2) => {
  let r2 = e2[t2];
  return At(r2) && !At(n2) ? (r2.value = n2, !0) : Reflect.set(e2, t2, n2, s2);
} };
function $t(e2) {
  return yt(e2) ? e2 : new Proxy(e2, Pt);
}
var Wt = class {
  constructor(e2, t2, n2) {
    this.fn = e2, this.setter = t2, this._value = void 0, this.dep = new Ae(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ce - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t2, this.isSSR = n2;
  }
  notify() {
    if (this.flags |= 16, !(8 & this.flags) && ee !== this) return ue(this, !0), !0;
  }
  get value() {
    let e2 = this.dep.track();
    return ge(this), e2 && (e2.version = this.dep.version), this._value;
  }
  set value(e2) {
    this.setter && this.setter(e2);
  }
}, Ht = {}, Kt = /* @__PURE__ */ new WeakMap(), zt;
function qt(e2, n2, r2 = t) {
  let { immediate: o3, deep: i2, once: l3, scheduler: a2, augmentJob: u2, call: p2 } = r2, d2 = (e3) => i2 ? e3 : bt(e3) || i2 === !1 || i2 === 0 ? Gt(e3, 1) : Gt(e3), h, g2, m2, y2, _2 = !1, b2 = !1;
  if (At(e2) ? (g2 = () => e2.value, _2 = bt(e2)) : yt(e2) ? (g2 = () => d2(e2), _2 = !0) : f(e2) ? (b2 = !0, _2 = e2.some((e3) => yt(e3) || bt(e3)), g2 = () => e2.map((e3) => At(e3) ? e3.value : yt(e3) ? d2(e3) : v(e3) ? p2 ? p2(e3, 2) : e3() : void 0)) : g2 = v(e2) ? n2 ? p2 ? () => p2(e2, 2) : e2 : () => {
    if (m2) {
      xe();
      try {
        m2();
      } finally {
        Se();
      }
    }
    let t2 = zt;
    zt = h;
    try {
      return p2 ? p2(e2, 3, [y2]) : e2(y2);
    } finally {
      zt = t2;
    }
  } : s, n2 && i2) {
    let e3 = g2, t2 = i2 === !0 ? 1 / 0 : i2;
    g2 = () => Gt(e3(), t2);
  }
  let x2 = se(), S2 = () => {
    h.stop(), x2 && x2.active && c(x2.effects, h);
  };
  if (l3 && n2) {
    let e3 = n2;
    n2 = (...t2) => {
      e3(...t2), S2();
    };
  }
  let w2 = b2 ? new Array(e2.length).fill(Ht) : Ht, C2 = (e3) => {
    if (1 & h.flags && (h.dirty || e3)) if (n2) {
      let e4 = h.run();
      if (i2 || _2 || (b2 ? e4.some((e5, t2) => L(e5, w2[t2])) : L(e4, w2))) {
        m2 && m2();
        let t2 = zt;
        zt = h;
        try {
          let t3 = [e4, w2 === Ht ? void 0 : b2 && w2[0] === Ht ? [] : w2, y2];
          w2 = e4, p2 ? p2(n2, 3, t3) : n2(...t3);
        } finally {
          zt = t2;
        }
      }
    } else h.run();
  };
  return u2 && u2(C2), h = new ie(g2), h.scheduler = a2 ? () => a2(C2, !1) : C2, y2 = (e3) => (function(e4, t2 = !1, n3 = zt) {
    if (n3) {
      let t3 = Kt.get(n3);
      t3 || Kt.set(n3, t3 = []), t3.push(e4);
    }
  })(e3, !1, h), m2 = h.onStop = () => {
    let e3 = Kt.get(h);
    if (e3) {
      if (p2) p2(e3, 4);
      else for (let t2 of e3) t2();
      Kt.delete(h);
    }
  }, n2 ? o3 ? C2(!0) : w2 = h.run() : a2 ? a2(C2.bind(null, !0), !0) : h.run(), S2.pause = h.pause.bind(h), S2.resume = h.resume.bind(h), S2.stop = S2, S2;
}
function Gt(e2, t2 = 1 / 0, n2) {
  if (t2 <= 0 || !y(e2) || e2.__v_skip || (n2 = n2 || /* @__PURE__ */ new Set()).has(e2)) return e2;
  if (n2.add(e2), t2--, At(e2)) Gt(e2.value, t2, n2);
  else if (f(e2)) for (let s2 = 0; s2 < e2.length; s2++) Gt(e2[s2], t2, n2);
  else if (d(e2) || p(e2)) e2.forEach((e3) => {
    Gt(e3, t2, n2);
  });
  else if (S(e2)) {
    for (let s2 in e2) Gt(e2[s2], t2, n2);
    for (let s2 of Object.getOwnPropertySymbols(e2)) Object.prototype.propertyIsEnumerable.call(e2, s2) && Gt(e2[s2], t2, n2);
  }
  return e2;
}
function Jt(e2, t2, n2, s2) {
  try {
    return s2 ? e2(...s2) : e2();
  } catch (r2) {
    Xt(r2, t2, n2);
  }
}
function Zt(e2, t2, n2, s2) {
  if (v(e2)) {
    let r2 = Jt(e2, t2, n2, s2);
    return r2 && _(r2) && r2.catch((e3) => {
      Xt(e3, t2, n2);
    }), r2;
  }
  if (f(e2)) {
    let r2 = [];
    for (let o3 = 0; o3 < e2.length; o3++) r2.push(Zt(e2[o3], t2, n2, s2));
    return r2;
  }
}
function Xt(e2, n2, s2, r2 = !0) {
  n2 && n2.vnode;
  let { errorHandler: o3, throwUnhandledErrorInProduction: i2 } = n2 && n2.appContext.config || t;
  if (n2) {
    let t2 = n2.parent, r3 = n2.proxy, i3 = `https://vuejs.org/error-reference/#runtime-${s2}`;
    for (; t2; ) {
      let n3 = t2.ec;
      if (n3) {
        for (let t3 = 0; t3 < n3.length; t3++) if (n3[t3](e2, r3, i3) === !1) return;
      }
      t2 = t2.parent;
    }
    if (o3) return xe(), Jt(o3, null, 10, [e2, r3, i3]), void Se();
  }
  (function(e3, t2, n3, s3 = !0, r3 = !1) {
    if (r3) throw e3;
  })(e2, 0, 0, r2, i2);
}
var Qt = [], Yt = -1, en = [], tn = null, nn = 0, sn = Promise.resolve(), rn = null;
function on(e2) {
  let t2 = rn || sn;
  return e2 ? t2.then(this ? e2.bind(this) : e2) : t2;
}
function ln(e2) {
  if (!(1 & e2.flags)) {
    let t2 = pn(e2), n2 = Qt[Qt.length - 1];
    !n2 || !(2 & e2.flags) && t2 >= pn(n2) ? Qt.push(e2) : Qt.splice((function(e3) {
      let t3 = Yt + 1, n3 = Qt.length;
      for (; t3 < n3; ) {
        let s2 = t3 + n3 >>> 1, r2 = Qt[s2], o3 = pn(r2);
        o3 < e3 || o3 === e3 && 2 & r2.flags ? t3 = s2 + 1 : n3 = s2;
      }
      return t3;
    })(t2), 0, e2), e2.flags |= 1, cn();
  }
}
function cn() {
  rn || (rn = sn.then(dn));
}
function an(e2) {
  f(e2) ? en.push(...e2) : tn && e2.id === -1 ? tn.splice(nn + 1, 0, e2) : 1 & e2.flags || (en.push(e2), e2.flags |= 1), cn();
}
function un(e2, t2, n2 = Yt + 1) {
  for (; n2 < Qt.length; n2++) {
    let t3 = Qt[n2];
    if (t3 && 2 & t3.flags) {
      if (e2 && t3.id !== e2.uid) continue;
      Qt.splice(n2, 1), n2--, 4 & t3.flags && (t3.flags &= -2), t3(), 4 & t3.flags || (t3.flags &= -2);
    }
  }
}
function fn(e2) {
  if (en.length) {
    let e3 = [...new Set(en)].sort((e4, t2) => pn(e4) - pn(t2));
    if (en.length = 0, tn) return void tn.push(...e3);
    for (tn = e3, nn = 0; nn < tn.length; nn++) {
      let e4 = tn[nn];
      4 & e4.flags && (e4.flags &= -2), 8 & e4.flags || e4(), e4.flags &= -2;
    }
    tn = null, nn = 0;
  }
}
var pn = (e2) => e2.id == null ? 2 & e2.flags ? -1 : 1 / 0 : e2.id;
function dn(e2) {
  try {
    for (Yt = 0; Yt < Qt.length; Yt++) {
      let e3 = Qt[Yt];
      !e3 || 8 & e3.flags || (4 & e3.flags && (e3.flags &= -2), Jt(e3, e3.i, e3.i ? 15 : 14), 4 & e3.flags || (e3.flags &= -2));
    }
  } finally {
    for (; Yt < Qt.length; Yt++) {
      let e3 = Qt[Yt];
      e3 && (e3.flags &= -2);
    }
    Yt = -1, Qt.length = 0, fn(), rn = null, (Qt.length || en.length) && dn();
  }
}
var hn = null, vn = null;
function gn(e2) {
  let t2 = hn;
  return hn = e2, vn = e2 && e2.type.__scopeId || null, t2;
}
function mn(e2, t2 = hn, n2) {
  if (!t2 || e2._n) return e2;
  let s2 = (...n3) => {
    s2._d && Qr(-1);
    let r2 = gn(t2), o3;
    try {
      o3 = e2(...n3);
    } finally {
      gn(r2), s2._d && Qr(1);
    }
    return o3;
  };
  return s2._n = !0, s2._c = !0, s2._d = !0, s2;
}
function _n(e2, t2, n2, s2) {
  let r2 = e2.dirs, o3 = t2 && t2.dirs;
  for (let i2 = 0; i2 < r2.length; i2++) {
    let l3 = r2[i2];
    o3 && (l3.oldValue = o3[i2].value);
    let c2 = l3.dir[s2];
    c2 && (xe(), Zt(c2, n2, 8, [e2.el, l3, e2, t2]), Se());
  }
}
var bn = /* @__PURE__ */ Symbol("_vte"), xn = (e2) => e2.__isTeleport;
var Ln = /* @__PURE__ */ Symbol("_leaveCb"), jn = /* @__PURE__ */ Symbol("_enterCb");
function Pn() {
  let e2 = { isMounted: !1, isLeaving: !1, isUnmounting: !1, leavingVNodes: /* @__PURE__ */ new Map() };
  return fs(() => {
    e2.isMounted = !0;
  }), hs(() => {
    e2.isUnmounting = !0;
  }), e2;
}
var $n = [Function, Array], Dn = { mode: String, appear: Boolean, persisted: Boolean, onBeforeEnter: $n, onEnter: $n, onAfterEnter: $n, onEnterCancelled: $n, onBeforeLeave: $n, onLeave: $n, onAfterLeave: $n, onLeaveCancelled: $n, onBeforeAppear: $n, onAppear: $n, onAfterAppear: $n, onAppearCancelled: $n }, Rn = (e2) => {
  let t2 = e2.subTree;
  return t2.component ? Rn(t2.component) : t2;
};
function Vn(e2) {
  let t2 = e2[0];
  if (e2.length > 1) {
    for (let n2 of e2) if (n2.type !== zr) {
      t2 = n2;
      break;
    }
  }
  return t2;
}
var In = { name: "BaseTransition", props: Dn, setup(e2, { slots: t2 }) {
  let n2 = So(), s2 = Pn();
  return () => {
    let r2 = t2.default && Kn(t2.default(), !0);
    if (!r2 || !r2.length) return;
    let o3 = Vn(r2), i2 = St(e2), { mode: l3 } = i2;
    if (s2.isLeaving) return Bn(o3);
    let c2 = Wn(o3);
    if (!c2) return Bn(o3);
    let a2 = Un(c2, i2, s2, n2, (e3) => a2 = e3);
    c2.type !== zr && Hn(c2, a2);
    let u2 = n2.subTree && Wn(n2.subTree);
    if (u2 && u2.type !== zr && !so(c2, u2) && Rn(n2).type !== zr) {
      let e3 = Un(u2, i2, s2, n2);
      if (Hn(u2, e3), l3 === "out-in" && c2.type !== zr) return s2.isLeaving = !0, e3.afterLeave = () => {
        s2.isLeaving = !1, 8 & n2.job.flags || n2.update(), delete e3.afterLeave, u2 = void 0;
      }, Bn(o3);
      l3 === "in-out" && c2.type !== zr ? e3.delayLeave = (e4, t3, n3) => {
        Nn(s2, u2)[String(u2.key)] = u2, e4[Ln] = () => {
          t3(), e4[Ln] = void 0, delete a2.delayedLeave, u2 = void 0;
        }, a2.delayedLeave = () => {
          n3(), delete a2.delayedLeave, u2 = void 0;
        };
      } : u2 = void 0;
    } else u2 && (u2 = void 0);
    return o3;
  };
} };
function Nn(e2, t2) {
  let { leavingVNodes: n2 } = e2, s2 = n2.get(t2.type);
  return s2 || (s2 = /* @__PURE__ */ Object.create(null), n2.set(t2.type, s2)), s2;
}
function Un(e2, t2, n2, s2, r2) {
  let { appear: o3, mode: i2, persisted: l3 = !1, onBeforeEnter: c2, onEnter: a2, onAfterEnter: u2, onEnterCancelled: p2, onBeforeLeave: d2, onLeave: h, onAfterLeave: v2, onLeaveCancelled: g2, onBeforeAppear: m2, onAppear: y2, onAfterAppear: _2, onAppearCancelled: b2 } = t2, x2 = String(e2.key), S2 = Nn(n2, e2), w2 = (e3, t3) => {
    e3 && Zt(e3, s2, 9, t3);
  }, C2 = (e3, t3) => {
    let n3 = t3[1];
    w2(e3, t3), f(e3) ? e3.every((e4) => e4.length <= 1) && n3() : e3.length <= 1 && n3();
  }, k2 = { mode: i2, persisted: l3, beforeEnter(t3) {
    let s3 = c2;
    if (!n2.isMounted) {
      if (!o3) return;
      s3 = m2 || c2;
    }
    t3[Ln] && t3[Ln](!0);
    let r3 = S2[x2];
    r3 && so(e2, r3) && r3.el[Ln] && r3.el[Ln](), w2(s3, [t3]);
  }, enter(e3) {
    let t3 = a2, s3 = u2, r3 = p2;
    if (!n2.isMounted) {
      if (!o3) return;
      t3 = y2 || a2, s3 = _2 || u2, r3 = b2 || p2;
    }
    let i3 = !1, l4 = e3[jn] = (t4) => {
      i3 || (i3 = !0, w2(t4 ? r3 : s3, [e3]), k2.delayedLeave && k2.delayedLeave(), e3[jn] = void 0);
    };
    t3 ? C2(t3, [e3, l4]) : l4();
  }, leave(t3, s3) {
    let r3 = String(e2.key);
    if (t3[jn] && t3[jn](!0), n2.isUnmounting) return s3();
    w2(d2, [t3]);
    let o4 = !1, i3 = t3[Ln] = (n3) => {
      o4 || (o4 = !0, s3(), w2(n3 ? g2 : v2, [t3]), t3[Ln] = void 0, S2[r3] === e2 && delete S2[r3]);
    };
    S2[r3] = e2, h ? C2(h, [t3, i3]) : i3();
  }, clone(e3) {
    let o4 = Un(e3, t2, n2, s2, r2);
    return r2 && r2(o4), o4;
  } };
  return k2;
}
function Bn(e2) {
  if (Yn(e2)) return (e2 = ao(e2)).children = null, e2;
}
function Wn(e2) {
  if (!Yn(e2)) return xn(e2.type) && e2.children ? Vn(e2.children) : e2;
  if (e2.component) return e2.component.subTree;
  let { shapeFlag: t2, children: n2 } = e2;
  if (n2) {
    if (16 & t2) return n2[0];
    if (32 & t2 && v(n2.default)) return n2.default();
  }
}
function Hn(e2, t2) {
  6 & e2.shapeFlag && e2.component ? (e2.transition = t2, Hn(e2.component.subTree, t2)) : 128 & e2.shapeFlag ? (e2.ssContent.transition = t2.clone(e2.ssContent), e2.ssFallback.transition = t2.clone(e2.ssFallback)) : e2.transition = t2;
}
function Kn(e2, t2 = !1, n2) {
  let s2 = [], r2 = 0;
  for (let o3 = 0; o3 < e2.length; o3++) {
    let i2 = e2[o3], l3 = n2 == null ? i2.key : String(n2) + String(i2.key != null ? i2.key : o3);
    i2.type === Hr ? (128 & i2.patchFlag && r2++, s2 = s2.concat(Kn(i2.children, t2, l3))) : (t2 || i2.type !== zr) && s2.push(l3 != null ? ao(i2, { key: l3 }) : i2);
  }
  if (r2 > 1) for (let o3 = 0; o3 < s2.length; o3++) s2[o3].patchFlag = -2;
  return s2;
}
function qn(e2) {
  e2.ids = [e2.ids[0] + e2.ids[2]++ + "-", 0, 0];
}
function Gn(e2, n2, s2, r2, o3 = !1) {
  if (f(e2)) return void e2.forEach((e3, t2) => Gn(e3, n2 && (f(n2) ? n2[t2] : n2), s2, r2, o3));
  if (Zn(r2) && !o3) return void (512 & r2.shapeFlag && r2.type.__asyncResolved && r2.component.subTree.component && Gn(e2, n2, s2, r2.component.subTree));
  let i2 = 4 & r2.shapeFlag ? jo(r2.component) : r2.el, l3 = o3 ? null : i2, { i: a2, r: p2 } = e2, d2 = n2 && n2.r, h = a2.refs === t ? a2.refs = {} : a2.refs, m2 = a2.setupState, y2 = St(m2), _2 = m2 === t ? () => !1 : (e3) => u(y2, e3);
  if (d2 != null && d2 !== p2 && (g(d2) ? (h[d2] = null, _2(d2) && (m2[d2] = null)) : At(d2) && (d2.value = null)), v(p2)) Jt(p2, a2, 12, [l3, h]);
  else {
    let t2 = g(p2), n3 = At(p2);
    if (t2 || n3) {
      let r3 = () => {
        if (e2.f) {
          let n4 = t2 ? _2(p2) ? m2[p2] : h[p2] : p2.value;
          o3 ? f(n4) && c(n4, i2) : f(n4) ? n4.includes(i2) || n4.push(i2) : t2 ? (h[p2] = [i2], _2(p2) && (m2[p2] = h[p2])) : (p2.value = [i2], e2.k && (h[e2.k] = p2.value));
        } else t2 ? (h[p2] = l3, _2(p2) && (m2[p2] = l3)) : n3 && (p2.value = l3, e2.k && (h[e2.k] = l3));
      };
      l3 ? (r3.id = -1, br(r3, s2)) : r3();
    }
  }
}
R().requestIdleCallback, R().cancelIdleCallback;
var Zn = (e2) => !!e2.type.__asyncLoader;
var Yn = (e2) => e2.type.__isKeepAlive;
function ns(e2, t2) {
  rs(e2, "a", t2);
}
function ss(e2, t2) {
  rs(e2, "da", t2);
}
function rs(e2, t2, n2 = xo) {
  let s2 = e2.__wdc || (e2.__wdc = () => {
    let t3 = n2;
    for (; t3; ) {
      if (t3.isDeactivated) return;
      t3 = t3.parent;
    }
    return e2();
  });
  if (cs(t2, s2, n2), n2) {
    let e3 = n2.parent;
    for (; e3 && e3.parent; ) Yn(e3.parent.vnode) && os(s2, t2, n2, e3), e3 = e3.parent;
  }
}
function os(e2, t2, n2, s2) {
  let r2 = cs(t2, e2, s2, !0);
  vs(() => {
    c(s2[t2], r2);
  }, n2);
}
function cs(e2, t2, n2 = xo, s2 = !1) {
  if (n2) {
    let r2 = n2[e2] || (n2[e2] = []), o3 = t2.__weh || (t2.__weh = (...s3) => {
      xe();
      let r3 = ko(n2), o4 = Zt(t2, n2, e2, s3);
      return r3(), Se(), o4;
    });
    return s2 ? r2.unshift(o3) : r2.push(o3), o3;
  }
}
var as = (e2) => (t2, n2 = xo) => {
  To && e2 !== "sp" || cs(e2, (...e3) => t2(...e3), n2);
}, us = as("bm"), fs = as("m"), ps = as("bu"), ds = as("u"), hs = as("bum"), vs = as("um"), gs = as("sp"), ms = as("rtg"), ys = as("rtc");
function _s(e2, t2 = xo) {
  cs("ec", e2, t2);
}
var Ss = /* @__PURE__ */ Symbol.for("v-ndc");
var Ls = (e2) => e2 ? Eo(e2) ? jo(e2) : Ls(e2.parent) : null, js = l(/* @__PURE__ */ Object.create(null), { $: (e2) => e2, $el: (e2) => e2.vnode.el, $data: (e2) => e2.data, $props: (e2) => e2.props, $attrs: (e2) => e2.attrs, $slots: (e2) => e2.slots, $refs: (e2) => e2.refs, $parent: (e2) => Ls(e2.parent), $root: (e2) => Ls(e2.root), $host: (e2) => e2.ce, $emit: (e2) => e2.emit, $options: (e2) => Ks(e2), $forceUpdate: (e2) => e2.f || (e2.f = () => {
  ln(e2.update);
}), $nextTick: (e2) => e2.n || (e2.n = on.bind(e2.proxy)), $watch: (e2) => Lr.bind(e2) }), Ps = (e2, n2) => e2 !== t && !e2.__isScriptSetup && u(e2, n2), $s = { get({ _: e2 }, n2) {
  if (n2 === "__v_skip") return !0;
  let { ctx: s2, setupState: r2, data: o3, props: i2, accessCache: l3, type: c2, appContext: a2 } = e2, f2;
  if (n2[0] !== "$") {
    let c3 = l3[n2];
    if (c3 !== void 0) switch (c3) {
      case 1:
        return r2[n2];
      case 2:
        return o3[n2];
      case 4:
        return s2[n2];
      case 3:
        return i2[n2];
    }
    else {
      if (Ps(r2, n2)) return l3[n2] = 1, r2[n2];
      if (o3 !== t && u(o3, n2)) return l3[n2] = 2, o3[n2];
      if ((f2 = e2.propsOptions[0]) && u(f2, n2)) return l3[n2] = 3, i2[n2];
      if (s2 !== t && u(s2, n2)) return l3[n2] = 4, s2[n2];
      Us && (l3[n2] = 0);
    }
  }
  let p2 = js[n2], d2, h;
  return p2 ? (n2 === "$attrs" && Le(e2.attrs, 0, ""), p2(e2)) : (d2 = c2.__cssModules) && (d2 = d2[n2]) ? d2 : s2 !== t && u(s2, n2) ? (l3[n2] = 4, s2[n2]) : (h = a2.config.globalProperties, u(h, n2) ? h[n2] : void 0);
}, set({ _: e2 }, n2, s2) {
  let { data: r2, setupState: o3, ctx: i2 } = e2;
  return Ps(o3, n2) ? (o3[n2] = s2, !0) : r2 !== t && u(r2, n2) ? (r2[n2] = s2, !0) : !u(e2.props, n2) && (n2[0] !== "$" || !(n2.slice(1) in e2)) && (i2[n2] = s2, !0);
}, has({ _: { data: e2, setupState: n2, accessCache: s2, ctx: r2, appContext: o3, propsOptions: i2 } }, l3) {
  let c2;
  return !!s2[l3] || e2 !== t && u(e2, l3) || Ps(n2, l3) || (c2 = i2[0]) && u(c2, l3) || u(r2, l3) || u(js, l3) || u(o3.config.globalProperties, l3);
}, defineProperty(e2, t2, n2) {
  return n2.get != null ? e2._.accessCache[t2] = 0 : u(n2, "value") && this.set(e2, t2, n2.value, null), Reflect.defineProperty(e2, t2, n2);
} };
function Is(e2) {
  return f(e2) ? e2.reduce((e3, t2) => (e3[t2] = null, e3), {}) : e2;
}
var Us = !0;
function Bs(e2) {
  let t2 = Ks(e2), n2 = e2.proxy, r2 = e2.ctx;
  Us = !1, t2.beforeCreate && Ws(t2.beforeCreate, e2, "bc");
  let { data: o3, computed: i2, methods: l3, watch: c2, provide: a2, inject: u2, created: p2, beforeMount: d2, mounted: h, beforeUpdate: g2, updated: m2, activated: _2, deactivated: b2, beforeDestroy: x2, beforeUnmount: S2, destroyed: w2, unmounted: C2, render: k2, renderTracked: A2, renderTriggered: E2, errorCaptured: T2, serverPrefetch: O2, expose: F2, inheritAttrs: M2, components: L2, directives: j2, filters: P2 } = t2;
  if (u2 && (function(e3, t3) {
    f(e3) && (e3 = Js(e3));
    for (let n3 in e3) {
      let s2 = e3[n3], r3;
      r3 = y(s2) ? "default" in s2 ? rr(s2.from || n3, s2.default, !0) : rr(s2.from || n3) : rr(s2), At(r3) ? Object.defineProperty(t3, n3, { enumerable: !0, configurable: !0, get: () => r3.value, set: (e4) => r3.value = e4 }) : t3[n3] = r3;
    }
  })(u2, r2, null), l3) for (let s2 in l3) {
    let e3 = l3[s2];
    v(e3) && (r2[s2] = e3.bind(n2));
  }
  if (o3) {
    let t3 = o3.call(n2, n2);
    y(t3) && (e2.data = dt(t3));
  }
  if (Us = !0, i2) for (let f2 in i2) {
    let e3 = i2[f2], t3 = v(e3) ? e3.bind(n2, n2) : v(e3.get) ? e3.get.bind(n2, n2) : s, o4 = !v(e3) && v(e3.set) ? e3.set.bind(n2) : s, l4 = $o({ get: t3, set: o4 });
    Object.defineProperty(r2, f2, { enumerable: !0, configurable: !0, get: () => l4.value, set: (e4) => l4.value = e4 });
  }
  if (c2) for (let s2 in c2) Hs(c2[s2], r2, n2, s2);
  if (a2) {
    let e3 = v(a2) ? a2.call(n2) : a2;
    Reflect.ownKeys(e3).forEach((t3) => {
      sr(t3, e3[t3]);
    });
  }
  function $2(e3, t3) {
    f(t3) ? t3.forEach((t4) => e3(t4.bind(n2))) : t3 && e3(t3.bind(n2));
  }
  if (p2 && Ws(p2, e2, "c"), $2(us, d2), $2(fs, h), $2(ps, g2), $2(ds, m2), $2(ns, _2), $2(ss, b2), $2(_s, T2), $2(ys, A2), $2(ms, E2), $2(hs, S2), $2(vs, C2), $2(gs, O2), f(F2)) if (F2.length) {
    let t3 = e2.exposed || (e2.exposed = {});
    F2.forEach((e3) => {
      Object.defineProperty(t3, e3, { get: () => n2[e3], set: (t4) => n2[e3] = t4 });
    });
  } else e2.exposed || (e2.exposed = {});
  k2 && e2.render === s && (e2.render = k2), M2 != null && (e2.inheritAttrs = M2), L2 && (e2.components = L2), j2 && (e2.directives = j2), O2 && qn(e2);
}
function Ws(e2, t2, n2) {
  Zt(f(e2) ? e2.map((e3) => e3.bind(t2.proxy)) : e2.bind(t2.proxy), t2, n2);
}
function Hs(e2, t2, n2, s2) {
  let r2 = s2.includes(".") ? jr(n2, s2) : () => n2[s2];
  if (g(e2)) {
    let n3 = t2[e2];
    v(n3) && Fr(r2, n3);
  } else if (v(e2)) Fr(r2, e2.bind(n2));
  else if (y(e2)) if (f(e2)) e2.forEach((e3) => Hs(e3, t2, n2, s2));
  else {
    let s3 = v(e2.handler) ? e2.handler.bind(n2) : t2[e2.handler];
    v(s3) && Fr(r2, s3, e2);
  }
}
function Ks(e2) {
  let t2 = e2.type, { mixins: n2, extends: s2 } = t2, { mixins: r2, optionsCache: o3, config: { optionMergeStrategies: i2 } } = e2.appContext, l3 = o3.get(t2), c2;
  return l3 ? c2 = l3 : r2.length || n2 || s2 ? (c2 = {}, r2.length && r2.forEach((e3) => zs(c2, e3, i2, !0)), zs(c2, t2, i2)) : c2 = t2, y(t2) && o3.set(t2, c2), c2;
}
function zs(e2, t2, n2, s2 = !1) {
  let { mixins: r2, extends: o3 } = t2;
  o3 && zs(e2, o3, n2, !0), r2 && r2.forEach((t3) => zs(e2, t3, n2, !0));
  for (let i2 in t2) if (!(s2 && i2 === "expose")) {
    let s3 = qs[i2] || n2 && n2[i2];
    e2[i2] = s3 ? s3(e2[i2], t2[i2]) : t2[i2];
  }
  return e2;
}
var qs = { data: Gs, props: Qs, emits: Qs, methods: Xs, computed: Xs, beforeCreate: Zs, created: Zs, beforeMount: Zs, mounted: Zs, beforeUpdate: Zs, updated: Zs, beforeDestroy: Zs, beforeUnmount: Zs, destroyed: Zs, unmounted: Zs, activated: Zs, deactivated: Zs, errorCaptured: Zs, serverPrefetch: Zs, components: Xs, directives: Xs, watch: function(e2, t2) {
  if (!e2) return t2;
  if (!t2) return e2;
  let n2 = l(/* @__PURE__ */ Object.create(null), e2);
  for (let s2 in t2) n2[s2] = Zs(e2[s2], t2[s2]);
  return n2;
}, provide: Gs, inject: function(e2, t2) {
  return Xs(Js(e2), Js(t2));
} };
function Gs(e2, t2) {
  return t2 ? e2 ? function() {
    return l(v(e2) ? e2.call(this, this) : e2, v(t2) ? t2.call(this, this) : t2);
  } : t2 : e2;
}
function Js(e2) {
  if (f(e2)) {
    let t2 = {};
    for (let n2 = 0; n2 < e2.length; n2++) t2[e2[n2]] = e2[n2];
    return t2;
  }
  return e2;
}
function Zs(e2, t2) {
  return e2 ? [...new Set([].concat(e2, t2))] : t2;
}
function Xs(e2, t2) {
  return e2 ? l(/* @__PURE__ */ Object.create(null), e2, t2) : t2;
}
function Qs(e2, t2) {
  return e2 ? f(e2) && f(t2) ? [.../* @__PURE__ */ new Set([...e2, ...t2])] : l(/* @__PURE__ */ Object.create(null), Is(e2), Is(t2 ?? {})) : t2;
}
function Ys() {
  return { app: null, config: { isNativeTag: r, performance: !1, globalProperties: {}, optionMergeStrategies: {}, errorHandler: void 0, warnHandler: void 0, compilerOptions: {} }, mixins: [], components: {}, directives: {}, provides: /* @__PURE__ */ Object.create(null), optionsCache: /* @__PURE__ */ new WeakMap(), propsCache: /* @__PURE__ */ new WeakMap(), emitsCache: /* @__PURE__ */ new WeakMap() };
}
var er = 0;
function tr(e2, t2) {
  return function(t3, n2 = null) {
    v(t3) || (t3 = l({}, t3)), n2 == null || y(n2) || (n2 = null);
    let s2 = Ys(), r2 = /* @__PURE__ */ new WeakSet(), o3 = [], i2 = !1, c2 = s2.app = { _uid: er++, _component: t3, _props: n2, _container: null, _context: s2, _instance: null, version: Vo, get config() {
      return s2.config;
    }, set config(e3) {
    }, use: (e3, ...t4) => (r2.has(e3) || (e3 && v(e3.install) ? (r2.add(e3), e3.install(c2, ...t4)) : v(e3) && (r2.add(e3), e3(c2, ...t4))), c2), mixin: (e3) => (s2.mixins.includes(e3) || s2.mixins.push(e3), c2), component: (e3, t4) => t4 ? (s2.components[e3] = t4, c2) : s2.components[e3], directive: (e3, t4) => t4 ? (s2.directives[e3] = t4, c2) : s2.directives[e3], mount(r3, o4, l3) {
      if (!i2) {
        let o5 = c2._ceVNode || lo(t3, n2);
        return o5.appContext = s2, l3 === !0 ? l3 = "svg" : l3 === !1 && (l3 = void 0), e2(o5, r3, l3), i2 = !0, c2._container = r3, r3.__vue_app__ = c2, jo(o5.component);
      }
    }, onUnmount(e3) {
      o3.push(e3);
    }, unmount() {
      i2 && (Zt(o3, c2._instance, 16), e2(null, c2._container), delete c2._container.__vue_app__);
    }, provide: (e3, t4) => (s2.provides[e3] = t4, c2), runWithContext(e3) {
      let t4 = nr;
      nr = c2;
      try {
        return e3();
      } finally {
        nr = t4;
      }
    } };
    return c2;
  };
}
var nr = null;
function sr(e2, t2) {
  if (xo) {
    let n2 = xo.provides, s2 = xo.parent && xo.parent.provides;
    s2 === n2 && (n2 = xo.provides = Object.create(s2)), n2[e2] = t2;
  }
}
function rr(e2, t2, n2 = !1) {
  let s2 = xo || hn;
  if (s2 || nr) {
    let r2 = nr ? nr._context.provides : s2 ? s2.parent == null || s2.ce ? s2.vnode.appContext && s2.vnode.appContext.provides : s2.parent.provides : void 0;
    if (r2 && e2 in r2) return r2[e2];
    if (arguments.length > 1) return n2 && v(t2) ? t2.call(s2 && s2.proxy) : t2;
  }
}
var ir = {}, lr = () => Object.create(ir), cr = (e2) => Object.getPrototypeOf(e2) === ir;
function ar(e2, n2, s2, r2) {
  let [o3, i2] = e2.propsOptions, l3, c2 = !1;
  if (n2) for (let t2 in n2) {
    if (C(t2)) continue;
    let a2 = n2[t2], f2;
    o3 && u(o3, f2 = E(t2)) ? i2 && i2.includes(f2) ? (l3 || (l3 = {}))[f2] = a2 : s2[f2] = a2 : Vr(e2.emitsOptions, t2) || t2 in r2 && a2 === r2[t2] || (r2[t2] = a2, c2 = !0);
  }
  if (i2) {
    let n3 = St(s2), r3 = l3 || t;
    for (let t2 = 0; t2 < i2.length; t2++) {
      let l4 = i2[t2];
      s2[l4] = ur(o3, n3, l4, r3[l4], e2, !u(r3, l4));
    }
  }
  return c2;
}
function ur(e2, t2, n2, s2, r2, o3) {
  let i2 = e2[n2];
  if (i2 != null) {
    let e3 = u(i2, "default");
    if (e3 && s2 === void 0) {
      let e4 = i2.default;
      if (i2.type !== Function && !i2.skipFactory && v(e4)) {
        let { propsDefaults: o4 } = r2;
        if (n2 in o4) s2 = o4[n2];
        else {
          let i3 = ko(r2);
          s2 = o4[n2] = e4.call(null, t2), i3();
        }
      } else s2 = e4;
      r2.ce && r2.ce._setProp(n2, s2);
    }
    i2[0] && (o3 && !e3 ? s2 = !1 : !i2[1] || s2 !== "" && s2 !== O(n2) || (s2 = !0));
  }
  return s2;
}
var fr = /* @__PURE__ */ new WeakMap();
function pr(e2, s2, r2 = !1) {
  let o3 = r2 ? fr : s2.propsCache, i2 = o3.get(e2);
  if (i2) return i2;
  let c2 = e2.props, a2 = {}, p2 = [], d2 = !1;
  if (!v(e2)) {
    let t2 = (e3) => {
      d2 = !0;
      let [t3, n2] = pr(e3, s2, !0);
      l(a2, t3), n2 && p2.push(...n2);
    };
    !r2 && s2.mixins.length && s2.mixins.forEach(t2), e2.extends && t2(e2.extends), e2.mixins && e2.mixins.forEach(t2);
  }
  if (!c2 && !d2) return y(e2) && o3.set(e2, n), n;
  if (f(c2)) for (let n2 = 0; n2 < c2.length; n2++) {
    let e3 = E(c2[n2]);
    dr(e3) && (a2[e3] = t);
  }
  else if (c2) for (let t2 in c2) {
    let e3 = E(t2);
    if (dr(e3)) {
      let n2 = c2[t2], s3 = a2[e3] = f(n2) || v(n2) ? { type: n2 } : l({}, n2), r3 = s3.type, o4 = !1, i3 = !0;
      if (f(r3)) for (let e4 = 0; e4 < r3.length; ++e4) {
        let t3 = r3[e4], n3 = v(t3) && t3.name;
        if (n3 === "Boolean") {
          o4 = !0;
          break;
        }
        n3 === "String" && (i3 = !1);
      }
      else o4 = v(r3) && r3.name === "Boolean";
      s3[0] = o4, s3[1] = i3, (o4 || u(s3, "default")) && p2.push(e3);
    }
  }
  let h = [a2, p2];
  return y(e2) && o3.set(e2, h), h;
}
function dr(e2) {
  return e2[0] !== "$" && !C(e2);
}
var hr = (e2) => e2[0] === "_" || e2 === "$stable", vr = (e2) => f(e2) ? e2.map(ho) : [ho(e2)], gr = (e2, t2, n2) => {
  if (t2._n) return t2;
  let s2 = mn((...e3) => vr(t2(...e3)), n2);
  return s2._c = !1, s2;
}, mr = (e2, t2, n2) => {
  let s2 = e2._ctx;
  for (let r2 in e2) {
    if (hr(r2)) continue;
    let n3 = e2[r2];
    if (v(n3)) t2[r2] = gr(0, n3, s2);
    else if (n3 != null) {
      let e3 = vr(n3);
      t2[r2] = () => e3;
    }
  }
}, yr = (e2, t2) => {
  let n2 = vr(t2);
  e2.slots.default = () => n2;
}, _r = (e2, t2, n2) => {
  for (let s2 in t2) !n2 && hr(s2) || (e2[s2] = t2[s2]);
}, br = function(e2, t2) {
  t2 && t2.pendingBranch ? f(e2) ? t2.effects.push(...e2) : t2.effects.push(e2) : an(e2);
};
function xr(e2) {
  return (function(e3) {
    R().__VUE__ = !0;
    let { insert: r2, remove: o3, patchProp: i2, createElement: l3, createText: c2, createComment: a2, setText: p2, setElementText: d2, parentNode: h, nextSibling: v2, setScopeId: g2 = s, insertStaticContent: m2 } = e3, y2 = (e4, t2, n2, s2 = null, r3 = null, o4 = null, i3 = void 0, l4 = null, c3 = !!t2.dynamicChildren) => {
      if (e4 === t2) return;
      e4 && !so(e4, t2) && (s2 = Y2(e4), G(e4, r3, o4, !0), e4 = null), t2.patchFlag === -2 && (c3 = !1, t2.dynamicChildren = null);
      let { type: a3, ref: u2, shapeFlag: f2 } = t2;
      switch (a3) {
        case Kr:
          b2(e4, t2, n2, s2);
          break;
        case zr:
          x2(e4, t2, n2, s2);
          break;
        case qr:
          e4 == null && S2(t2, n2, s2, i3);
          break;
        case Hr:
          V2(e4, t2, n2, s2, r3, o4, i3, l4, c3);
          break;
        default:
          1 & f2 ? A2(e4, t2, n2, s2, r3, o4, i3, l4, c3) : 6 & f2 ? I2(e4, t2, n2, s2, r3, o4, i3, l4, c3) : (64 & f2 || 128 & f2) && a3.process(e4, t2, n2, s2, r3, o4, i3, l4, c3, se2);
      }
      u2 != null && r3 ? Gn(u2, e4 && e4.ref, o4, t2 || e4, !t2) : u2 == null && e4 && e4.ref != null && Gn(e4.ref, null, o4, e4, !0);
    }, b2 = (e4, t2, n2, s2) => {
      if (e4 == null) r2(t2.el = c2(t2.children), n2, s2);
      else {
        let n3 = t2.el = e4.el;
        t2.children !== e4.children && p2(n3, t2.children);
      }
    }, x2 = (e4, t2, n2, s2) => {
      e4 == null ? r2(t2.el = a2(t2.children || ""), n2, s2) : t2.el = e4.el;
    }, S2 = (e4, t2, n2, s2) => {
      [e4.el, e4.anchor] = m2(e4.children, t2, n2, s2, e4.el, e4.anchor);
    }, w2 = ({ el: e4, anchor: t2 }, n2, s2) => {
      let o4;
      for (; e4 && e4 !== t2; ) o4 = v2(e4), r2(e4, n2, s2), e4 = o4;
      r2(t2, n2, s2);
    }, k2 = ({ el: e4, anchor: t2 }) => {
      let n2;
      for (; e4 && e4 !== t2; ) n2 = v2(e4), o3(e4), e4 = n2;
      o3(t2);
    }, A2 = (e4, t2, n2, s2, r3, o4, i3, l4, c3) => {
      t2.type === "svg" ? i3 = "svg" : t2.type === "math" && (i3 = "mathml"), e4 == null ? T2(t2, n2, s2, r3, o4, i3, l4, c3) : L2(e4, t2, r3, o4, i3, l4, c3);
    }, T2 = (e4, t2, n2, s2, o4, c3, a3, u2) => {
      let f2, p3, { props: h2, shapeFlag: v3, transition: g3, dirs: m3 } = e4;
      if (f2 = e4.el = l3(e4.type, c3, h2 && h2.is, h2), 8 & v3 ? d2(f2, e4.children) : 16 & v3 && M2(e4.children, f2, null, s2, o4, Sr(e4, c3), a3, u2), m3 && _n(e4, null, s2, "created"), F2(f2, e4, e4.scopeId, a3, s2), h2) {
        for (let e5 in h2) e5 === "value" || C(e5) || i2(f2, e5, null, h2[e5], c3, s2);
        "value" in h2 && i2(f2, "value", null, h2.value, c3), (p3 = h2.onVnodeBeforeMount) && yo(p3, s2, e4);
      }
      m3 && _n(e4, null, s2, "beforeMount");
      let y3 = (function(e5, t3) {
        return (!e5 || e5 && !e5.pendingBranch) && t3 && !t3.persisted;
      })(o4, g3);
      y3 && g3.beforeEnter(f2), r2(f2, t2, n2), ((p3 = h2 && h2.onVnodeMounted) || y3 || m3) && br(() => {
        p3 && yo(p3, s2, e4), y3 && g3.enter(f2), m3 && _n(e4, null, s2, "mounted");
      }, o4);
    }, F2 = (e4, t2, n2, s2, r3) => {
      if (n2 && g2(e4, n2), s2) for (let o4 = 0; o4 < s2.length; o4++) g2(e4, s2[o4]);
      if (r3) {
        let n3 = r3.subTree;
        if (t2 === n3 || Wr(n3.type) && (n3.ssContent === t2 || n3.ssFallback === t2)) {
          let t3 = r3.vnode;
          F2(e4, t3, t3.scopeId, t3.slotScopeIds, r3.parent);
        }
      }
    }, M2 = (e4, t2, n2, s2, r3, o4, i3, l4, c3 = 0) => {
      for (let a3 = c3; a3 < e4.length; a3++) {
        let c4 = e4[a3] = l4 ? vo(e4[a3]) : ho(e4[a3]);
        y2(null, c4, t2, n2, s2, r3, o4, i3, l4);
      }
    }, L2 = (e4, n2, s2, r3, o4, l4, c3) => {
      let a3 = n2.el = e4.el, { patchFlag: u2, dynamicChildren: f2, dirs: p3 } = n2;
      u2 |= 16 & e4.patchFlag;
      let h2 = e4.props || t, v3 = n2.props || t, g3;
      if (s2 && wr(s2, !1), (g3 = v3.onVnodeBeforeUpdate) && yo(g3, s2, n2, e4), p3 && _n(n2, e4, s2, "beforeUpdate"), s2 && wr(s2, !0), (h2.innerHTML && v3.innerHTML == null || h2.textContent && v3.textContent == null) && d2(a3, ""), f2 ? $2(e4.dynamicChildren, f2, a3, s2, r3, Sr(n2, o4), l4) : c3 || H(e4, n2, a3, null, s2, r3, Sr(n2, o4), l4, !1), u2 > 0) {
        if (16 & u2) D2(a3, h2, v3, s2, o4);
        else if (2 & u2 && h2.class !== v3.class && i2(a3, "class", null, v3.class, o4), 4 & u2 && i2(a3, "style", h2.style, v3.style, o4), 8 & u2) {
          let e5 = n2.dynamicProps;
          for (let t2 = 0; t2 < e5.length; t2++) {
            let n3 = e5[t2], r4 = h2[n3], l5 = v3[n3];
            l5 === r4 && n3 !== "value" || i2(a3, n3, r4, l5, o4, s2);
          }
        }
        1 & u2 && e4.children !== n2.children && d2(a3, n2.children);
      } else c3 || f2 != null || D2(a3, h2, v3, s2, o4);
      ((g3 = v3.onVnodeUpdated) || p3) && br(() => {
        g3 && yo(g3, s2, n2, e4), p3 && _n(n2, e4, s2, "updated");
      }, r3);
    }, $2 = (e4, t2, n2, s2, r3, o4, i3) => {
      for (let l4 = 0; l4 < t2.length; l4++) {
        let c3 = e4[l4], a3 = t2[l4], u2 = c3.el && (c3.type === Hr || !so(c3, a3) || 198 & c3.shapeFlag) ? h(c3.el) : n2;
        y2(c3, a3, u2, null, s2, r3, o4, i3, !0);
      }
    }, D2 = (e4, n2, s2, r3, o4) => {
      if (n2 !== s2) {
        if (n2 !== t) for (let t2 in n2) C(t2) || t2 in s2 || i2(e4, t2, n2[t2], null, o4, r3);
        for (let t2 in s2) {
          if (C(t2)) continue;
          let l4 = s2[t2], c3 = n2[t2];
          l4 !== c3 && t2 !== "value" && i2(e4, t2, c3, l4, o4, r3);
        }
        "value" in s2 && i2(e4, "value", n2.value, s2.value, o4);
      }
    }, V2 = (e4, t2, n2, s2, o4, i3, l4, a3, u2) => {
      let f2 = t2.el = e4 ? e4.el : c2(""), p3 = t2.anchor = e4 ? e4.anchor : c2(""), { patchFlag: d3, dynamicChildren: h2, slotScopeIds: v3 } = t2;
      v3 && (a3 = a3 ? a3.concat(v3) : v3), e4 == null ? (r2(f2, n2, s2), r2(p3, n2, s2), M2(t2.children || [], n2, p3, o4, i3, l4, a3, u2)) : d3 > 0 && 64 & d3 && h2 && e4.dynamicChildren ? ($2(e4.dynamicChildren, h2, n2, o4, i3, l4, a3), (t2.key != null || o4 && t2 === o4.subTree) && Cr(e4, t2, !0)) : H(e4, t2, n2, p3, o4, i3, l4, a3, u2);
    }, I2 = (e4, t2, n2, s2, r3, o4, i3, l4, c3) => {
      t2.slotScopeIds = l4, e4 == null ? 512 & t2.shapeFlag ? r3.ctx.activate(t2, n2, s2, i3, c3) : N2(t2, n2, s2, r3, o4, i3, c3) : U2(e4, t2, c3);
    }, N2 = (e4, n2, s2, r3, o4, i3, l4) => {
      let c3 = e4.component = (function(e5, n3, s3) {
        let r4 = e5.type, o5 = (n3 ? n3.appContext : e5.appContext) || _o, i4 = { uid: bo++, vnode: e5, type: r4, parent: n3, appContext: o5, root: null, next: null, subTree: null, effect: null, update: null, job: null, scope: new te(!0), render: null, proxy: null, exposed: null, exposeProxy: null, withProxy: null, provides: n3 ? n3.provides : Object.create(o5.provides), ids: n3 ? n3.ids : ["", 0, 0], accessCache: null, renderCache: [], components: null, directives: null, propsOptions: pr(r4, o5), emitsOptions: Rr(r4, o5), emit: null, emitted: null, propsDefaults: t, inheritAttrs: r4.inheritAttrs, ctx: t, data: t, props: t, attrs: t, slots: t, refs: t, setupState: t, setupContext: null, suspense: s3, suspenseId: s3 ? s3.pendingId : 0, asyncDep: null, asyncResolved: !1, isMounted: !1, isUnmounted: !1, isDeactivated: !1, bc: null, c: null, bm: null, m: null, bu: null, u: null, um: null, bum: null, da: null, a: null, rtg: null, rtc: null, ec: null, sp: null };
        return i4.ctx = { _: i4 }, i4.root = n3 ? n3.root : i4, i4.emit = Dr.bind(null, i4), e5.ce && e5.ce(i4), i4;
      })(e4, r3, o4);
      if (Yn(e4) && (c3.ctx.renderer = se2), (function(e5, t2 = !1, n3 = !1) {
        t2 && Co(t2);
        let { props: s3, children: r4 } = e5.vnode, o5 = Eo(e5);
        (function(e6, t3, n4, s4 = !1) {
          let r5 = {}, o6 = lr();
          e6.propsDefaults = /* @__PURE__ */ Object.create(null), ar(e6, t3, r5, o6);
          for (let i5 in e6.propsOptions[0]) i5 in r5 || (r5[i5] = void 0);
          n4 ? e6.props = s4 ? r5 : ht(r5) : e6.type.props ? e6.props = r5 : e6.props = o6, e6.attrs = o6;
        })(e5, s3, o5, t2), ((e6, t3, n4) => {
          let s4 = e6.slots = lr();
          if (32 & e6.vnode.shapeFlag) {
            let e7 = t3.__;
            e7 && P(s4, "__", e7, !0);
            let r5 = t3._;
            r5 ? (_r(s4, t3, n4), n4 && P(s4, "_", r5, !0)) : mr(t3, s4);
          } else t3 && yr(e6, t3);
        })(e5, r4, n3 || t2);
        let i4 = o5 ? (function(e6, t3) {
          let n4 = e6.type;
          e6.accessCache = /* @__PURE__ */ Object.create(null), e6.proxy = new Proxy(e6.ctx, $s);
          let { setup: s4 } = n4;
          if (s4) {
            xe();
            let n5 = e6.setupContext = s4.length > 1 ? Lo(e6) : null, r5 = ko(e6), o6 = Jt(s4, e6, 0, [e6.props, n5]), i5 = _(o6);
            if (Se(), r5(), !i5 && !e6.sp || Zn(e6) || qn(e6), i5) {
              if (o6.then(Ao, Ao), t3) return o6.then((t4) => {
                Oo(e6, t4);
              }).catch((t4) => {
                Xt(t4, e6, 0);
              });
              e6.asyncDep = o6;
            } else Oo(e6, o6);
          } else Fo(e6);
        })(e5, t2) : void 0;
        t2 && Co(!1);
      })(c3, !1, l4), c3.asyncDep) {
        if (o4 && o4.registerDep(c3, B2, l4), !e4.el) {
          let e5 = c3.subTree = lo(zr);
          x2(null, e5, n2, s2);
        }
      } else B2(c3, e4, n2, s2, o4, i3, l4);
    }, U2 = (e4, t2, n2) => {
      let s2 = t2.component = e4.component;
      if ((function(e5, t3, n3) {
        let { props: s3, children: r3, component: o4 } = e5, { props: i3, children: l4, patchFlag: c3 } = t3, a3 = o4.emitsOptions;
        if (t3.dirs || t3.transition) return !0;
        if (!(n3 && c3 >= 0)) return !(!r3 && !l4 || l4 && l4.$stable) || s3 !== i3 && (s3 ? !i3 || Br(s3, i3, a3) : !!i3);
        if (1024 & c3) return !0;
        if (16 & c3) return s3 ? Br(s3, i3, a3) : !!i3;
        if (8 & c3) {
          let e6 = t3.dynamicProps;
          for (let t4 = 0; t4 < e6.length; t4++) {
            let n4 = e6[t4];
            if (i3[n4] !== s3[n4] && !Vr(a3, n4)) return !0;
          }
        }
        return !1;
      })(e4, t2, n2)) {
        if (s2.asyncDep && !s2.asyncResolved) return void W2(s2, t2, n2);
        s2.next = t2, s2.update();
      } else t2.el = e4.el, s2.vnode = t2;
    }, B2 = (e4, t2, n2, s2, r3, o4, i3) => {
      let l4 = () => {
        if (e4.isMounted) {
          let { next: t3, bu: n3, u: s3, parent: c4, vnode: a4 } = e4;
          {
            let n4 = kr(e4);
            if (n4) return t3 && (t3.el = a4.el, W2(e4, t3, i3)), void n4.asyncDep.then(() => {
              e4.isUnmounted || l4();
            });
          }
          let u3, f2 = t3;
          wr(e4, !1), t3 ? (t3.el = a4.el, W2(e4, t3, i3)) : t3 = a4, n3 && j(n3), (u3 = t3.props && t3.props.onVnodeBeforeUpdate) && yo(u3, c4, t3, a4), wr(e4, !0);
          let p3 = Ir(e4), d3 = e4.subTree;
          e4.subTree = p3, y2(d3, p3, h(d3.el), Y2(d3), e4, r3, o4), t3.el = p3.el, f2 === null && (function({ vnode: e5, parent: t4 }, n4) {
            for (; t4; ) {
              let s4 = t4.subTree;
              if (s4.suspense && s4.suspense.activeBranch === e5 && (s4.el = e5.el), s4 !== e5) break;
              (e5 = t4.vnode).el = n4, t4 = t4.parent;
            }
          })(e4, p3.el), s3 && br(s3, r3), (u3 = t3.props && t3.props.onVnodeUpdated) && br(() => yo(u3, c4, t3, a4), r3);
        } else {
          let i4, { el: l5, props: c4 } = t2, { bm: a4, m: u3, parent: f2, root: p3, type: d3 } = e4, h2 = Zn(t2);
          wr(e4, !1), a4 && j(a4), !h2 && (i4 = c4 && c4.onVnodeBeforeMount) && yo(i4, f2, t2), wr(e4, !0);
          {
            p3.ce && p3.ce._def.shadowRoot !== !1 && p3.ce._injectChildStyle(d3);
            let i5 = e4.subTree = Ir(e4);
            y2(null, i5, n2, s2, e4, r3, o4), t2.el = i5.el;
          }
          if (u3 && br(u3, r3), !h2 && (i4 = c4 && c4.onVnodeMounted)) {
            let e5 = t2;
            br(() => yo(i4, f2, e5), r3);
          }
          (256 & t2.shapeFlag || f2 && Zn(f2.vnode) && 256 & f2.vnode.shapeFlag) && e4.a && br(e4.a, r3), e4.isMounted = !0, t2 = n2 = s2 = null;
        }
      };
      e4.scope.on();
      let c3 = e4.effect = new ie(l4);
      e4.scope.off();
      let a3 = e4.update = c3.run.bind(c3), u2 = e4.job = c3.runIfDirty.bind(c3);
      u2.i = e4, u2.id = e4.uid, c3.scheduler = () => ln(u2), wr(e4, !0), a3();
    }, W2 = (e4, n2, s2) => {
      n2.component = e4;
      let r3 = e4.vnode.props;
      e4.vnode = n2, e4.next = null, (function(e5, t2, n3, s3) {
        let { props: r4, attrs: o4, vnode: { patchFlag: i3 } } = e5, l4 = St(r4), [c3] = e5.propsOptions, a3 = !1;
        if (!(s3 || i3 > 0) || 16 & i3) {
          let s4;
          ar(e5, t2, r4, o4) && (a3 = !0);
          for (let o5 in l4) t2 && (u(t2, o5) || (s4 = O(o5)) !== o5 && u(t2, s4)) || (c3 ? !n3 || n3[o5] === void 0 && n3[s4] === void 0 || (r4[o5] = ur(c3, l4, o5, void 0, e5, !0)) : delete r4[o5]);
          if (o4 !== l4) for (let e6 in o4) t2 && u(t2, e6) || (delete o4[e6], a3 = !0);
        } else if (8 & i3) {
          let n4 = e5.vnode.dynamicProps;
          for (let s4 = 0; s4 < n4.length; s4++) {
            let i4 = n4[s4];
            if (Vr(e5.emitsOptions, i4)) continue;
            let f2 = t2[i4];
            if (c3) if (u(o4, i4)) f2 !== o4[i4] && (o4[i4] = f2, a3 = !0);
            else {
              let t3 = E(i4);
              r4[t3] = ur(c3, l4, t3, f2, e5, !1);
            }
            else f2 !== o4[i4] && (o4[i4] = f2, a3 = !0);
          }
        }
        a3 && je(e5.attrs, "set", "");
      })(e4, n2.props, r3, s2), ((e5, n3, s3) => {
        let { vnode: r4, slots: o4 } = e5, i3 = !0, l4 = t;
        if (32 & r4.shapeFlag) {
          let e6 = n3._;
          e6 ? s3 && e6 === 1 ? i3 = !1 : _r(o4, n3, s3) : (i3 = !n3.$stable, mr(n3, o4)), l4 = n3;
        } else n3 && (yr(e5, n3), l4 = { default: 1 });
        if (i3) for (let t2 in o4) hr(t2) || l4[t2] != null || delete o4[t2];
      })(e4, n2.children, s2), xe(), un(e4), Se();
    }, H = (e4, t2, n2, s2, r3, o4, i3, l4, c3 = !1) => {
      let a3 = e4 && e4.children, u2 = e4 ? e4.shapeFlag : 0, f2 = t2.children, { patchFlag: p3, shapeFlag: h2 } = t2;
      if (p3 > 0) {
        if (128 & p3) return void z2(a3, f2, n2, s2, r3, o4, i3, l4, c3);
        if (256 & p3) return void K2(a3, f2, n2, s2, r3, o4, i3, l4, c3);
      }
      8 & h2 ? (16 & u2 && Q2(a3, r3, o4), f2 !== a3 && d2(n2, f2)) : 16 & u2 ? 16 & h2 ? z2(a3, f2, n2, s2, r3, o4, i3, l4, c3) : Q2(a3, r3, o4, !0) : (8 & u2 && d2(n2, ""), 16 & h2 && M2(f2, n2, s2, r3, o4, i3, l4, c3));
    }, K2 = (e4, t2, s2, r3, o4, i3, l4, c3, a3) => {
      t2 = t2 || n;
      let u2 = (e4 = e4 || n).length, f2 = t2.length, p3 = Math.min(u2, f2), d3;
      for (d3 = 0; d3 < p3; d3++) {
        let n2 = t2[d3] = a3 ? vo(t2[d3]) : ho(t2[d3]);
        y2(e4[d3], n2, s2, null, o4, i3, l4, c3, a3);
      }
      u2 > f2 ? Q2(e4, o4, i3, !0, !1, p3) : M2(t2, s2, r3, o4, i3, l4, c3, a3, p3);
    }, z2 = (e4, t2, s2, r3, o4, i3, l4, c3, a3) => {
      let u2 = 0, f2 = t2.length, p3 = e4.length - 1, d3 = f2 - 1;
      for (; u2 <= p3 && u2 <= d3; ) {
        let n2 = e4[u2], r4 = t2[u2] = a3 ? vo(t2[u2]) : ho(t2[u2]);
        if (!so(n2, r4)) break;
        y2(n2, r4, s2, null, o4, i3, l4, c3, a3), u2++;
      }
      for (; u2 <= p3 && u2 <= d3; ) {
        let n2 = e4[p3], r4 = t2[d3] = a3 ? vo(t2[d3]) : ho(t2[d3]);
        if (!so(n2, r4)) break;
        y2(n2, r4, s2, null, o4, i3, l4, c3, a3), p3--, d3--;
      }
      if (u2 > p3) {
        if (u2 <= d3) {
          let e5 = d3 + 1, n2 = e5 < f2 ? t2[e5].el : r3;
          for (; u2 <= d3; ) y2(null, t2[u2] = a3 ? vo(t2[u2]) : ho(t2[u2]), s2, n2, o4, i3, l4, c3, a3), u2++;
        }
      } else if (u2 > d3) for (; u2 <= p3; ) G(e4[u2], o4, i3, !0), u2++;
      else {
        let h2 = u2, v3 = u2, g3 = /* @__PURE__ */ new Map();
        for (u2 = v3; u2 <= d3; u2++) {
          let e5 = t2[u2] = a3 ? vo(t2[u2]) : ho(t2[u2]);
          e5.key != null && g3.set(e5.key, u2);
        }
        let m3, _2 = 0, b3 = d3 - v3 + 1, x3 = !1, S3 = 0, w3 = new Array(b3);
        for (u2 = 0; u2 < b3; u2++) w3[u2] = 0;
        for (u2 = h2; u2 <= p3; u2++) {
          let n2 = e4[u2];
          if (_2 >= b3) {
            G(n2, o4, i3, !0);
            continue;
          }
          let r4;
          if (n2.key != null) r4 = g3.get(n2.key);
          else for (m3 = v3; m3 <= d3; m3++) if (w3[m3 - v3] === 0 && so(n2, t2[m3])) {
            r4 = m3;
            break;
          }
          r4 === void 0 ? G(n2, o4, i3, !0) : (w3[r4 - v3] = u2 + 1, r4 >= S3 ? S3 = r4 : x3 = !0, y2(n2, t2[r4], s2, null, o4, i3, l4, c3, a3), _2++);
        }
        let C2 = x3 ? (function(e5) {
          let t3 = e5.slice(), n2 = [0], s3, r4, o5, i4, l5, c4 = e5.length;
          for (s3 = 0; s3 < c4; s3++) {
            let c5 = e5[s3];
            if (c5 !== 0) {
              if (r4 = n2[n2.length - 1], e5[r4] < c5) {
                t3[s3] = r4, n2.push(s3);
                continue;
              }
              for (o5 = 0, i4 = n2.length - 1; o5 < i4; ) l5 = o5 + i4 >> 1, e5[n2[l5]] < c5 ? o5 = l5 + 1 : i4 = l5;
              c5 < e5[n2[o5]] && (o5 > 0 && (t3[s3] = n2[o5 - 1]), n2[o5] = s3);
            }
          }
          for (o5 = n2.length, i4 = n2[o5 - 1]; o5-- > 0; ) n2[o5] = i4, i4 = t3[i4];
          return n2;
        })(w3) : n;
        for (m3 = C2.length - 1, u2 = b3 - 1; u2 >= 0; u2--) {
          let e5 = v3 + u2, n2 = t2[e5], p4 = e5 + 1 < f2 ? t2[e5 + 1].el : r3;
          w3[u2] === 0 ? y2(null, n2, s2, p4, o4, i3, l4, c3, a3) : x3 && (m3 < 0 || u2 !== C2[m3] ? q(n2, s2, p4, 2) : m3--);
        }
      }
    }, q = (e4, t2, n2, s2, i3 = null) => {
      let { el: l4, type: c3, transition: a3, children: u2, shapeFlag: f2 } = e4;
      if (6 & f2) return void q(e4.component.subTree, t2, n2, s2);
      if (128 & f2) return void e4.suspense.move(t2, n2, s2);
      if (64 & f2) return void c3.move(e4, t2, n2, se2);
      if (c3 === Hr) {
        r2(l4, t2, n2);
        for (let e5 = 0; e5 < u2.length; e5++) q(u2[e5], t2, n2, s2);
        return void r2(e4.anchor, t2, n2);
      }
      if (c3 === qr) return void w2(e4, t2, n2);
      if (s2 !== 2 && 1 & f2 && a3) if (s2 === 0) a3.beforeEnter(l4), r2(l4, t2, n2), br(() => a3.enter(l4), i3);
      else {
        let { leave: s3, delayLeave: i4, afterLeave: c4 } = a3, u3 = () => {
          e4.ctx.isUnmounted ? o3(l4) : r2(l4, t2, n2);
        }, f3 = () => {
          s3(l4, () => {
            u3(), c4 && c4();
          });
        };
        i4 ? i4(l4, u3, f3) : f3();
      }
      else r2(l4, t2, n2);
    }, G = (e4, t2, n2, s2 = !1, r3 = !1) => {
      let { type: o4, props: i3, ref: l4, children: c3, dynamicChildren: a3, shapeFlag: u2, patchFlag: f2, dirs: p3, cacheIndex: d3 } = e4;
      if (f2 === -2 && (r3 = !1), l4 != null && (xe(), Gn(l4, null, n2, e4, !0), Se()), d3 != null && (t2.renderCache[d3] = void 0), 256 & u2) return void t2.ctx.deactivate(e4);
      let h2 = 1 & u2 && p3, v3 = !Zn(e4), g3;
      if (v3 && (g3 = i3 && i3.onVnodeBeforeUnmount) && yo(g3, t2, e4), 6 & u2) X2(e4.component, n2, s2);
      else {
        if (128 & u2) return void e4.suspense.unmount(n2, s2);
        h2 && _n(e4, null, t2, "beforeUnmount"), 64 & u2 ? e4.type.remove(e4, t2, n2, se2, s2) : a3 && !a3.hasOnce && (o4 !== Hr || f2 > 0 && 64 & f2) ? Q2(a3, t2, n2, !1, !0) : (o4 === Hr && 384 & f2 || !r3 && 16 & u2) && Q2(c3, t2, n2), s2 && J2(e4);
      }
      (v3 && (g3 = i3 && i3.onVnodeUnmounted) || h2) && br(() => {
        g3 && yo(g3, t2, e4), h2 && _n(e4, null, t2, "unmounted");
      }, n2);
    }, J2 = (e4) => {
      let { type: t2, el: n2, anchor: s2, transition: r3 } = e4;
      if (t2 === Hr) return void Z2(n2, s2);
      if (t2 === qr) return void k2(e4);
      let i3 = () => {
        o3(n2), r3 && !r3.persisted && r3.afterLeave && r3.afterLeave();
      };
      if (1 & e4.shapeFlag && r3 && !r3.persisted) {
        let { leave: t3, delayLeave: s3 } = r3, o4 = () => t3(n2, i3);
        s3 ? s3(e4.el, i3, o4) : o4();
      } else i3();
    }, Z2 = (e4, t2) => {
      let n2;
      for (; e4 !== t2; ) n2 = v2(e4), o3(e4), e4 = n2;
      o3(t2);
    }, X2 = (e4, t2, n2) => {
      let { bum: s2, scope: r3, job: o4, subTree: i3, um: l4, m: c3, a: a3, parent: u2, slots: { __: p3 } } = e4;
      Ar(c3), Ar(a3), s2 && j(s2), u2 && f(p3) && p3.forEach((e5) => {
        u2.renderCache[e5] = void 0;
      }), r3.stop(), o4 && (o4.flags |= 8, G(i3, e4, t2, n2)), l4 && br(l4, t2), br(() => {
        e4.isUnmounted = !0;
      }, t2), t2 && t2.pendingBranch && !t2.isUnmounted && e4.asyncDep && !e4.asyncResolved && e4.suspenseId === t2.pendingId && (t2.deps--, t2.deps === 0 && t2.resolve());
    }, Q2 = (e4, t2, n2, s2 = !1, r3 = !1, o4 = 0) => {
      for (let i3 = o4; i3 < e4.length; i3++) G(e4[i3], t2, n2, s2, r3);
    }, Y2 = (e4) => {
      if (6 & e4.shapeFlag) return Y2(e4.component.subTree);
      if (128 & e4.shapeFlag) return e4.suspense.next();
      let t2 = v2(e4.anchor || e4.el), n2 = t2 && t2[bn];
      return n2 ? v2(n2) : t2;
    }, ee2 = !1, ne = (e4, t2, n2) => {
      e4 == null ? t2._vnode && G(t2._vnode, null, null, !0) : y2(t2._vnode || null, e4, t2, null, null, null, n2), t2._vnode = e4, ee2 || (ee2 = !0, un(), fn(), ee2 = !1);
    }, se2 = { p: y2, um: G, m: q, r: J2, mt: N2, mc: M2, pc: H, pbc: $2, n: Y2, o: e3 };
    return { render: ne, hydrate: void 0, createApp: tr(ne) };
  })(e2);
}
function Sr({ type: e2, props: t2 }, n2) {
  return n2 === "svg" && e2 === "foreignObject" || n2 === "mathml" && e2 === "annotation-xml" && t2 && t2.encoding && t2.encoding.includes("html") ? void 0 : n2;
}
function wr({ effect: e2, job: t2 }, n2) {
  n2 ? (e2.flags |= 32, t2.flags |= 4) : (e2.flags &= -33, t2.flags &= -5);
}
function Cr(e2, t2, n2 = !1) {
  let s2 = e2.children, r2 = t2.children;
  if (f(s2) && f(r2)) for (let o3 = 0; o3 < s2.length; o3++) {
    let e3 = s2[o3], t3 = r2[o3];
    1 & t3.shapeFlag && !t3.dynamicChildren && ((t3.patchFlag <= 0 || t3.patchFlag === 32) && (t3 = r2[o3] = vo(r2[o3]), t3.el = e3.el), n2 || t3.patchFlag === -2 || Cr(e3, t3)), t3.type === Kr && (t3.el = e3.el), t3.type !== zr || t3.el || (t3.el = e3.el);
  }
}
function kr(e2) {
  let t2 = e2.subTree.component;
  if (t2) return t2.asyncDep && !t2.asyncResolved ? t2 : kr(t2);
}
function Ar(e2) {
  if (e2) for (let t2 = 0; t2 < e2.length; t2++) e2[t2].flags |= 8;
}
var Er = /* @__PURE__ */ Symbol.for("v-scx"), Tr = () => rr(Er);
function Fr(e2, t2, n2) {
  return Mr(e2, t2, n2);
}
function Mr(e2, n2, r2 = t) {
  let { immediate: o3, deep: i2, flush: c2, once: a2 } = r2, u2 = l({}, r2), f2 = n2 && o3 || !n2 && c2 !== "post", p2;
  if (To) {
    if (c2 === "sync") {
      let e3 = Tr();
      p2 = e3.__watcherHandles || (e3.__watcherHandles = []);
    } else if (!f2) {
      let e3 = () => {
      };
      return e3.stop = s, e3.resume = s, e3.pause = s, e3;
    }
  }
  let d2 = xo;
  u2.call = (e3, t2, n3) => Zt(e3, d2, t2, n3);
  let h = !1;
  c2 === "post" ? u2.scheduler = (e3) => {
    br(e3, d2 && d2.suspense);
  } : c2 !== "sync" && (h = !0, u2.scheduler = (e3, t2) => {
    t2 ? e3() : ln(e3);
  }), u2.augmentJob = (e3) => {
    n2 && (e3.flags |= 4), h && (e3.flags |= 2, d2 && (e3.id = d2.uid, e3.i = d2));
  };
  let v2 = qt(e2, n2, u2);
  return To && (p2 ? p2.push(v2) : f2 && v2()), v2;
}
function Lr(e2, t2, n2) {
  let s2 = this.proxy, r2 = g(e2) ? e2.includes(".") ? jr(s2, e2) : () => s2[e2] : e2.bind(s2, s2), o3;
  v(t2) ? o3 = t2 : (o3 = t2.handler, n2 = t2);
  let i2 = ko(this), l3 = Mr(r2, o3.bind(s2), n2);
  return i2(), l3;
}
function jr(e2, t2) {
  let n2 = t2.split(".");
  return () => {
    let t3 = e2;
    for (let e3 = 0; e3 < n2.length && t3; e3++) t3 = t3[n2[e3]];
    return t3;
  };
}
var $r = (e2, t2) => t2 === "modelValue" || t2 === "model-value" ? e2.modelModifiers : e2[`${t2}Modifiers`] || e2[`${E(t2)}Modifiers`] || e2[`${O(t2)}Modifiers`];
function Dr(e2, n2, ...s2) {
  if (e2.isUnmounted) return;
  let r2 = e2.vnode.props || t, o3 = s2, i2 = n2.startsWith("update:"), l3 = i2 && $r(r2, n2.slice(7)), c2;
  l3 && (l3.trim && (o3 = s2.map((e3) => g(e3) ? e3.trim() : e3)), l3.number && (o3 = s2.map($)));
  let a2 = r2[c2 = M(n2)] || r2[c2 = M(E(n2))];
  !a2 && i2 && (a2 = r2[c2 = M(O(n2))]), a2 && Zt(a2, e2, 6, o3);
  let u2 = r2[c2 + "Once"];
  if (u2) {
    if (e2.emitted) {
      if (e2.emitted[c2]) return;
    } else e2.emitted = {};
    e2.emitted[c2] = !0, Zt(u2, e2, 6, o3);
  }
}
function Rr(e2, t2, n2 = !1) {
  let s2 = t2.emitsCache, r2 = s2.get(e2);
  if (r2 !== void 0) return r2;
  let o3 = e2.emits, i2 = {}, c2 = !1;
  if (!v(e2)) {
    let s3 = (e3) => {
      let n3 = Rr(e3, t2, !0);
      n3 && (c2 = !0, l(i2, n3));
    };
    !n2 && t2.mixins.length && t2.mixins.forEach(s3), e2.extends && s3(e2.extends), e2.mixins && e2.mixins.forEach(s3);
  }
  return o3 || c2 ? (f(o3) ? o3.forEach((e3) => i2[e3] = null) : l(i2, o3), y(e2) && s2.set(e2, i2), i2) : (y(e2) && s2.set(e2, null), null);
}
function Vr(e2, t2) {
  return !(!e2 || !o(t2)) && (t2 = t2.slice(2).replace(/Once$/, ""), u(e2, t2[0].toLowerCase() + t2.slice(1)) || u(e2, O(t2)) || u(e2, t2));
}
function Ir(e2) {
  let { type: t2, vnode: n2, proxy: s2, withProxy: r2, propsOptions: [o3], slots: l3, attrs: c2, emit: a2, render: u2, renderCache: f2, props: p2, data: d2, setupState: h, ctx: v2, inheritAttrs: g2 } = e2, m2 = gn(e2), y2, _2;
  try {
    if (4 & n2.shapeFlag) {
      let e3 = r2 || s2, t3 = e3;
      y2 = ho(u2.call(t3, e3, f2, p2, h, d2, v2)), _2 = c2;
    } else {
      let e3 = t2;
      y2 = ho(e3.length > 1 ? e3(p2, { attrs: c2, slots: l3, emit: a2 }) : e3(p2, null)), _2 = t2.props ? c2 : Nr(c2);
    }
  } catch (x2) {
    Gr.length = 0, Xt(x2, e2, 1), y2 = lo(zr);
  }
  let b2 = y2;
  if (_2 && g2 !== !1) {
    let e3 = Object.keys(_2), { shapeFlag: t3 } = b2;
    e3.length && 7 & t3 && (o3 && e3.some(i) && (_2 = Ur(_2, o3)), b2 = ao(b2, _2, !1, !0));
  }
  return n2.dirs && (b2 = ao(b2, null, !1, !0), b2.dirs = b2.dirs ? b2.dirs.concat(n2.dirs) : n2.dirs), n2.transition && Hn(b2, n2.transition), y2 = b2, gn(m2), y2;
}
var Nr = (e2) => {
  let t2;
  for (let n2 in e2) (n2 === "class" || n2 === "style" || o(n2)) && ((t2 || (t2 = {}))[n2] = e2[n2]);
  return t2;
}, Ur = (e2, t2) => {
  let n2 = {};
  for (let s2 in e2) i(s2) && s2.slice(9) in t2 || (n2[s2] = e2[s2]);
  return n2;
};
function Br(e2, t2, n2) {
  let s2 = Object.keys(t2);
  if (s2.length !== Object.keys(e2).length) return !0;
  for (let r2 = 0; r2 < s2.length; r2++) {
    let o3 = s2[r2];
    if (t2[o3] !== e2[o3] && !Vr(n2, o3)) return !0;
  }
  return !1;
}
var Wr = (e2) => e2.__isSuspense, Hr = /* @__PURE__ */ Symbol.for("v-fgt"), Kr = /* @__PURE__ */ Symbol.for("v-txt"), zr = /* @__PURE__ */ Symbol.for("v-cmt"), qr = /* @__PURE__ */ Symbol.for("v-stc"), Gr = [], Jr = null;
function Zr(e2 = !1) {
  Gr.push(Jr = e2 ? null : []);
}
var Xr = 1;
function Qr(e2, t2 = !1) {
  Xr += e2, e2 < 0 && Jr && t2 && (Jr.hasOnce = !0);
}
function Yr(e2) {
  return e2.dynamicChildren = Xr > 0 ? Jr || n : null, Gr.pop(), Jr = Gr[Gr.length - 1] || null, Xr > 0 && Jr && Jr.push(e2), e2;
}
function eo(e2, t2, n2, s2, r2, o3) {
  return Yr(io(e2, t2, n2, s2, r2, o3, !0));
}
function to(e2, t2, n2, s2, r2) {
  return Yr(lo(e2, t2, n2, s2, r2, !0));
}
function no(e2) {
  return !!e2 && e2.__v_isVNode === !0;
}
function so(e2, t2) {
  return e2.type === t2.type && e2.key === t2.key;
}
var ro = ({ key: e2 }) => e2 ?? null, oo = ({ ref: e2, ref_key: t2, ref_for: n2 }) => (typeof e2 == "number" && (e2 = "" + e2), e2 != null ? g(e2) || At(e2) || v(e2) ? { i: hn, r: e2, k: t2, f: !!n2 } : e2 : null);
function io(e2, t2 = null, n2 = null, s2 = 0, r2 = null, o3 = e2 === Hr ? 0 : 1, i2 = !1, l3 = !1) {
  let c2 = { __v_isVNode: !0, __v_skip: !0, type: e2, props: t2, key: t2 && ro(t2), ref: t2 && oo(t2), scopeId: vn, slotScopeIds: null, children: n2, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetStart: null, targetAnchor: null, staticCount: 0, shapeFlag: o3, patchFlag: s2, dynamicProps: r2, dynamicChildren: null, appContext: null, ctx: hn };
  return l3 ? (go(c2, n2), 128 & o3 && e2.normalize(c2)) : n2 && (c2.shapeFlag |= g(n2) ? 8 : 16), Xr > 0 && !i2 && Jr && (c2.patchFlag > 0 || 6 & o3) && c2.patchFlag !== 32 && Jr.push(c2), c2;
}
var lo = function(e2, t2 = null, n2 = null, s2 = 0, r2 = null, o3 = !1) {
  if (e2 && e2 !== Ss || (e2 = zr), no(e2)) {
    let s3 = ao(e2, t2, !0);
    return n2 && go(s3, n2), Xr > 0 && !o3 && Jr && (6 & s3.shapeFlag ? Jr[Jr.indexOf(e2)] = s3 : Jr.push(s3)), s3.patchFlag = -2, s3;
  }
  i2 = e2, v(i2) && "__vccOpts" in i2 && (e2 = e2.__vccOpts);
  var i2;
  if (t2) {
    t2 = co(t2);
    let { class: e3, style: n3 } = t2;
    e3 && !g(e3) && (t2.class = W(e3)), y(n3) && (xt(n3) && !f(n3) && (n3 = l({}, n3)), t2.style = V(n3));
  }
  let c2 = g(e2) ? 1 : Wr(e2) ? 128 : xn(e2) ? 64 : y(e2) ? 4 : v(e2) ? 2 : 0;
  return io(e2, t2, n2, s2, r2, c2, o3, !0);
};
function co(e2) {
  return e2 ? xt(e2) || cr(e2) ? l({}, e2) : e2 : null;
}
function ao(e2, t2, n2 = !1, s2 = !1) {
  let { props: r2, ref: o3, patchFlag: i2, children: l3, transition: c2 } = e2, a2 = t2 ? mo(r2 || {}, t2) : r2, u2 = { __v_isVNode: !0, __v_skip: !0, type: e2.type, props: a2, key: a2 && ro(a2), ref: t2 && t2.ref ? n2 && o3 ? f(o3) ? o3.concat(oo(t2)) : [o3, oo(t2)] : oo(t2) : o3, scopeId: e2.scopeId, slotScopeIds: e2.slotScopeIds, children: l3, target: e2.target, targetStart: e2.targetStart, targetAnchor: e2.targetAnchor, staticCount: e2.staticCount, shapeFlag: e2.shapeFlag, patchFlag: t2 && e2.type !== Hr ? i2 === -1 ? 16 : 16 | i2 : i2, dynamicProps: e2.dynamicProps, dynamicChildren: e2.dynamicChildren, appContext: e2.appContext, dirs: e2.dirs, transition: c2, component: e2.component, suspense: e2.suspense, ssContent: e2.ssContent && ao(e2.ssContent), ssFallback: e2.ssFallback && ao(e2.ssFallback), el: e2.el, anchor: e2.anchor, ctx: e2.ctx, ce: e2.ce };
  return c2 && s2 && Hn(u2, c2.clone(u2)), u2;
}
function uo(e2 = " ", t2 = 0) {
  return lo(Kr, null, e2, t2);
}
function po(e2 = "", t2 = !1) {
  return t2 ? (Zr(), to(zr, null, e2)) : lo(zr, null, e2);
}
function ho(e2) {
  return e2 == null || typeof e2 == "boolean" ? lo(zr) : f(e2) ? lo(Hr, null, e2.slice()) : no(e2) ? vo(e2) : lo(Kr, null, String(e2));
}
function vo(e2) {
  return e2.el === null && e2.patchFlag !== -1 || e2.memo ? e2 : ao(e2);
}
function go(e2, t2) {
  let n2 = 0, { shapeFlag: s2 } = e2;
  if (t2 == null) t2 = null;
  else if (f(t2)) n2 = 16;
  else if (typeof t2 == "object") {
    if (65 & s2) {
      let n3 = t2.default;
      return void (n3 && (n3._c && (n3._d = !1), go(e2, n3()), n3._c && (n3._d = !0)));
    }
    {
      n2 = 32;
      let s3 = t2._;
      s3 || cr(t2) ? s3 === 3 && hn && (hn.slots._ === 1 ? t2._ = 1 : (t2._ = 2, e2.patchFlag |= 1024)) : t2._ctx = hn;
    }
  } else v(t2) ? (t2 = { default: t2, _ctx: hn }, n2 = 32) : (t2 = String(t2), 64 & s2 ? (n2 = 16, t2 = [uo(t2)]) : n2 = 8);
  e2.children = t2, e2.shapeFlag |= n2;
}
function mo(...e2) {
  let t2 = {};
  for (let n2 = 0; n2 < e2.length; n2++) {
    let s2 = e2[n2];
    for (let e3 in s2) if (e3 === "class") t2.class !== s2.class && (t2.class = W([t2.class, s2.class]));
    else if (e3 === "style") t2.style = V([t2.style, s2.style]);
    else if (o(e3)) {
      let n3 = t2[e3], r2 = s2[e3];
      !r2 || n3 === r2 || f(n3) && n3.includes(r2) || (t2[e3] = n3 ? [].concat(n3, r2) : r2);
    } else e3 !== "" && (t2[e3] = s2[e3]);
  }
  return t2;
}
function yo(e2, t2, n2, s2 = null) {
  Zt(e2, t2, 7, [n2, s2]);
}
var _o = Ys(), bo = 0, xo = null, So = () => xo || hn, wo, Co;
{
  let e2 = R(), t2 = (t3, n2) => {
    let s2;
    return (s2 = e2[t3]) || (s2 = e2[t3] = []), s2.push(n2), (e3) => {
      s2.length > 1 ? s2.forEach((t4) => t4(e3)) : s2[0](e3);
    };
  };
  wo = t2("__VUE_INSTANCE_SETTERS__", (e3) => xo = e3), Co = t2("__VUE_SSR_SETTERS__", (e3) => To = e3);
}
var ko = (e2) => {
  let t2 = xo;
  return wo(e2), e2.scope.on(), () => {
    e2.scope.off(), wo(t2);
  };
}, Ao = () => {
  xo && xo.scope.off(), wo(null);
};
function Eo(e2) {
  return 4 & e2.vnode.shapeFlag;
}
var To = !1;
function Oo(e2, t2, n2) {
  v(t2) ? e2.type.__ssrInlineRender ? e2.ssrRender = t2 : e2.render = t2 : y(t2) && (e2.setupState = $t(t2)), Fo(e2);
}
function Fo(e2, t2, n2) {
  let r2 = e2.type;
  e2.render || (e2.render = r2.render || s);
  {
    let t3 = ko(e2);
    xe();
    try {
      Bs(e2);
    } finally {
      Se(), t3();
    }
  }
}
var Mo = { get: (e2, t2) => (Le(e2, 0, ""), e2[t2]) };
function Lo(e2) {
  let t2 = (t3) => {
    e2.exposed = t3 || {};
  };
  return { attrs: new Proxy(e2.attrs, Mo), slots: e2.slots, emit: e2.emit, expose: t2 };
}
function jo(e2) {
  return e2.exposed ? e2.exposeProxy || (e2.exposeProxy = new Proxy($t(wt(e2.exposed)), { get: (t2, n2) => n2 in t2 ? t2[n2] : n2 in js ? js[n2](e2) : void 0, has: (e3, t2) => t2 in e3 || t2 in js })) : e2.proxy;
}
var $o = (e2, t2) => (function(e3, t3, n3 = !1) {
  let s2, r2;
  return v(e3) ? s2 = e3 : (s2 = e3.get, r2 = e3.set), new Wt(s2, r2, n3);
})(e2, 0, To);
function Do(e2, t2, n2) {
  let s2 = arguments.length;
  return s2 === 2 ? y(t2) && !f(t2) ? no(t2) ? lo(e2, null, [t2]) : lo(e2, t2) : lo(e2, null, t2) : (s2 > 3 ? n2 = Array.prototype.slice.call(arguments, 2) : s2 === 3 && no(n2) && (n2 = [n2]), lo(e2, t2, n2));
}
var Vo = "3.5.17";
var No, Uo = typeof window < "u" && window.trustedTypes;
if (Uo) try {
  No = Uo.createPolicy("vue", { createHTML: (e2) => e2 });
} catch {
}
var Bo = No ? (e2) => No.createHTML(e2) : (e2) => e2, Wo = typeof document < "u" ? document : null, Ho = Wo && Wo.createElement("template"), Ko = { insert: (e2, t2, n2) => {
  t2.insertBefore(e2, n2 || null);
}, remove: (e2) => {
  let t2 = e2.parentNode;
  t2 && t2.removeChild(e2);
}, createElement: (e2, t2, n2, s2) => {
  let r2 = t2 === "svg" ? Wo.createElementNS("http://www.w3.org/2000/svg", e2) : t2 === "mathml" ? Wo.createElementNS("http://www.w3.org/1998/Math/MathML", e2) : n2 ? Wo.createElement(e2, { is: n2 }) : Wo.createElement(e2);
  return e2 === "select" && s2 && s2.multiple != null && r2.setAttribute("multiple", s2.multiple), r2;
}, createText: (e2) => Wo.createTextNode(e2), createComment: (e2) => Wo.createComment(e2), setText: (e2, t2) => {
  e2.nodeValue = t2;
}, setElementText: (e2, t2) => {
  e2.textContent = t2;
}, parentNode: (e2) => e2.parentNode, nextSibling: (e2) => e2.nextSibling, querySelector: (e2) => Wo.querySelector(e2), setScopeId(e2, t2) {
  e2.setAttribute(t2, "");
}, insertStaticContent(e2, t2, n2, s2, r2, o3) {
  let i2 = n2 ? n2.previousSibling : t2.lastChild;
  if (r2 && (r2 === o3 || r2.nextSibling)) for (; t2.insertBefore(r2.cloneNode(!0), n2), r2 !== o3 && (r2 = r2.nextSibling); ) ;
  else {
    Ho.innerHTML = Bo(s2 === "svg" ? `<svg>${e2}</svg>` : s2 === "mathml" ? `<math>${e2}</math>` : e2);
    let r3 = Ho.content;
    if (s2 === "svg" || s2 === "mathml") {
      let e3 = r3.firstChild;
      for (; e3.firstChild; ) r3.appendChild(e3.firstChild);
      r3.removeChild(e3);
    }
    t2.insertBefore(r3, n2);
  }
  return [i2 ? i2.nextSibling : t2.firstChild, n2 ? n2.previousSibling : t2.lastChild];
} }, zo = "transition", qo = "animation", Go = /* @__PURE__ */ Symbol("_vtc"), Jo = { name: String, type: String, css: { type: Boolean, default: !0 }, duration: [String, Number, Object], enterFromClass: String, enterActiveClass: String, enterToClass: String, appearFromClass: String, appearActiveClass: String, appearToClass: String, leaveFromClass: String, leaveActiveClass: String, leaveToClass: String }, Zo = l({}, Dn, Jo), Xo = ((e2) => (e2.displayName = "Transition", e2.props = Zo, e2))((e2, { slots: t2 }) => Do(In, ei(e2), t2)), Qo = (e2, t2 = []) => {
  f(e2) ? e2.forEach((e3) => e3(...t2)) : e2 && e2(...t2);
}, Yo = (e2) => !!e2 && (f(e2) ? e2.some((e3) => e3.length > 1) : e2.length > 1);
function ei(e2) {
  let t2 = {};
  for (let l3 in e2) l3 in Jo || (t2[l3] = e2[l3]);
  if (e2.css === !1) return t2;
  let { name: n2 = "v", type: s2, duration: r2, enterFromClass: o3 = `${n2}-enter-from`, enterActiveClass: i2 = `${n2}-enter-active`, enterToClass: c2 = `${n2}-enter-to`, appearFromClass: a2 = o3, appearActiveClass: u2 = i2, appearToClass: f2 = c2, leaveFromClass: p2 = `${n2}-leave-from`, leaveActiveClass: d2 = `${n2}-leave-active`, leaveToClass: h = `${n2}-leave-to` } = e2, v2 = (function(e3) {
    if (e3 == null) return null;
    if (y(e3)) return [ti(e3.enter), ti(e3.leave)];
    {
      let t3 = ti(e3);
      return [t3, t3];
    }
  })(r2), g2 = v2 && v2[0], m2 = v2 && v2[1], { onBeforeEnter: _2, onEnter: b2, onEnterCancelled: x2, onLeave: S2, onLeaveCancelled: w2, onBeforeAppear: C2 = _2, onAppear: k2 = b2, onAppearCancelled: A2 = x2 } = t2, E2 = (e3, t3, n3, s3) => {
    e3._enterCancelled = s3, si(e3, t3 ? f2 : c2), si(e3, t3 ? u2 : i2), n3 && n3();
  }, T2 = (e3, t3) => {
    e3._isLeaving = !1, si(e3, p2), si(e3, h), si(e3, d2), t3 && t3();
  }, O2 = (e3) => (t3, n3) => {
    let r3 = e3 ? k2 : b2, i3 = () => E2(t3, e3, n3);
    Qo(r3, [t3, i3]), ri(() => {
      si(t3, e3 ? a2 : o3), ni(t3, e3 ? f2 : c2), Yo(r3) || ii(t3, s2, g2, i3);
    });
  };
  return l(t2, { onBeforeEnter(e3) {
    Qo(_2, [e3]), ni(e3, o3), ni(e3, i2);
  }, onBeforeAppear(e3) {
    Qo(C2, [e3]), ni(e3, a2), ni(e3, u2);
  }, onEnter: O2(!1), onAppear: O2(!0), onLeave(e3, t3) {
    e3._isLeaving = !0;
    let n3 = () => T2(e3, t3);
    ni(e3, p2), e3._enterCancelled ? (ni(e3, d2), ui()) : (ui(), ni(e3, d2)), ri(() => {
      e3._isLeaving && (si(e3, p2), ni(e3, h), Yo(S2) || ii(e3, s2, m2, n3));
    }), Qo(S2, [e3, n3]);
  }, onEnterCancelled(e3) {
    E2(e3, !1, void 0, !0), Qo(x2, [e3]);
  }, onAppearCancelled(e3) {
    E2(e3, !0, void 0, !0), Qo(A2, [e3]);
  }, onLeaveCancelled(e3) {
    T2(e3), Qo(w2, [e3]);
  } });
}
function ti(e2) {
  return ((e3) => {
    let t3 = g(e3) ? Number(e3) : NaN;
    return isNaN(t3) ? e3 : t3;
  })(e2);
}
function ni(e2, t2) {
  t2.split(/\s+/).forEach((t3) => t3 && e2.classList.add(t3)), (e2[Go] || (e2[Go] = /* @__PURE__ */ new Set())).add(t2);
}
function si(e2, t2) {
  t2.split(/\s+/).forEach((t3) => t3 && e2.classList.remove(t3));
  let n2 = e2[Go];
  n2 && (n2.delete(t2), n2.size || (e2[Go] = void 0));
}
function ri(e2) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e2);
  });
}
var oi = 0;
function ii(e2, t2, n2, s2) {
  let r2 = e2._endId = ++oi, o3 = () => {
    r2 === e2._endId && s2();
  };
  if (n2 != null) return setTimeout(o3, n2);
  let { type: i2, timeout: l3, propCount: c2 } = li(e2, t2);
  if (!i2) return s2();
  let a2 = i2 + "end", u2 = 0, f2 = () => {
    e2.removeEventListener(a2, p2), o3();
  }, p2 = (t3) => {
    t3.target === e2 && ++u2 >= c2 && f2();
  };
  setTimeout(() => {
    u2 < c2 && f2();
  }, l3 + 1), e2.addEventListener(a2, p2);
}
function li(e2, t2) {
  let n2 = window.getComputedStyle(e2), s2 = (e3) => (n2[e3] || "").split(", "), r2 = s2(`${zo}Delay`), o3 = s2(`${zo}Duration`), i2 = ci(r2, o3), l3 = s2(`${qo}Delay`), c2 = s2(`${qo}Duration`), a2 = ci(l3, c2), u2 = null, f2 = 0, p2 = 0;
  return t2 === zo ? i2 > 0 && (u2 = zo, f2 = i2, p2 = o3.length) : t2 === qo ? a2 > 0 && (u2 = qo, f2 = a2, p2 = c2.length) : (f2 = Math.max(i2, a2), u2 = f2 > 0 ? i2 > a2 ? zo : qo : null, p2 = u2 ? u2 === zo ? o3.length : c2.length : 0), { type: u2, timeout: f2, propCount: p2, hasTransform: u2 === zo && /\b(transform|all)(,|$)/.test(s2(`${zo}Property`).toString()) };
}
function ci(e2, t2) {
  for (; e2.length < t2.length; ) e2 = e2.concat(e2);
  return Math.max(...t2.map((t3, n2) => ai(t3) + ai(e2[n2])));
}
function ai(e2) {
  return e2 === "auto" ? 0 : 1e3 * Number(e2.slice(0, -1).replace(",", "."));
}
function ui() {
  return document.body.offsetHeight;
}
var fi = /* @__PURE__ */ Symbol("_vod"), pi = /* @__PURE__ */ Symbol("_vsh");
var vi = /* @__PURE__ */ Symbol("");
var _i = /(^|;)\s*display\s*:/, bi = /\s*!important$/;
function xi(e2, t2, n2) {
  if (f(n2)) n2.forEach((n3) => xi(e2, t2, n3));
  else if (n2 == null && (n2 = ""), t2.startsWith("--")) e2.setProperty(t2, n2);
  else {
    let s2 = (function(e3, t3) {
      let n3 = wi[t3];
      if (n3) return n3;
      let s3 = E(t3);
      if (s3 !== "filter" && s3 in e3) return wi[t3] = s3;
      s3 = F(s3);
      for (let r2 = 0; r2 < Si.length; r2++) {
        let n4 = Si[r2] + s3;
        if (n4 in e3) return wi[t3] = n4;
      }
      return t3;
    })(e2, t2);
    bi.test(n2) ? e2.setProperty(O(s2), n2.replace(bi, ""), "important") : e2[s2] = n2;
  }
}
var Si = ["Webkit", "Moz", "ms"], wi = {}, Ci = "http://www.w3.org/1999/xlink";
function ki(e2, t2, n2, s2, r2, o3 = K(t2)) {
  s2 && t2.startsWith("xlink:") ? n2 == null ? e2.removeAttributeNS(Ci, t2.slice(6, t2.length)) : e2.setAttributeNS(Ci, t2, n2) : n2 == null || o3 && !z(n2) ? e2.removeAttribute(t2) : e2.setAttribute(t2, o3 ? "" : m(n2) ? String(n2) : n2);
}
function Ai(e2, t2, n2, s2, r2) {
  if (t2 === "innerHTML" || t2 === "textContent") return void (n2 != null && (e2[t2] = t2 === "innerHTML" ? Bo(n2) : n2));
  let o3 = e2.tagName;
  if (t2 === "value" && o3 !== "PROGRESS" && !o3.includes("-")) {
    let s3 = o3 === "OPTION" ? e2.getAttribute("value") || "" : e2.value, r3 = n2 == null ? e2.type === "checkbox" ? "on" : "" : String(n2);
    return s3 === r3 && "_value" in e2 || (e2.value = r3), n2 == null && e2.removeAttribute(t2), void (e2._value = n2);
  }
  let i2 = !1;
  if (n2 === "" || n2 == null) {
    let s3 = typeof e2[t2];
    s3 === "boolean" ? n2 = z(n2) : n2 == null && s3 === "string" ? (n2 = "", i2 = !0) : s3 === "number" && (n2 = 0, i2 = !0);
  }
  try {
    e2[t2] = n2;
  } catch {
  }
  i2 && e2.removeAttribute(r2 || t2);
}
function Ei(e2, t2, n2, s2) {
  e2.addEventListener(t2, n2, s2);
}
var Ti = /* @__PURE__ */ Symbol("_vei");
function Oi(e2, t2, n2, s2, r2 = null) {
  let o3 = e2[Ti] || (e2[Ti] = {}), i2 = o3[t2];
  if (s2 && i2) i2.value = s2;
  else {
    let [n3, l3] = (function(e3) {
      let t3;
      if (Fi.test(e3)) {
        let n5;
        for (t3 = {}; n5 = e3.match(Fi); ) e3 = e3.slice(0, e3.length - n5[0].length), t3[n5[0].toLowerCase()] = !0;
      }
      return [e3[2] === ":" ? e3.slice(3) : O(e3.slice(2)), t3];
    })(t2);
    if (s2) {
      let i3 = o3[t2] = (function(e3, t3) {
        let n4 = (e4) => {
          if (e4._vts) {
            if (e4._vts <= n4.attached) return;
          } else e4._vts = Date.now();
          Zt((function(e5, t4) {
            if (f(t4)) {
              let n5 = e5.stopImmediatePropagation;
              return e5.stopImmediatePropagation = () => {
                n5.call(e5), e5._stopped = !0;
              }, t4.map((e6) => (t5) => !t5._stopped && e6 && e6(t5));
            }
            return t4;
          })(e4, n4.value), t3, 5, [e4]);
        };
        return n4.value = e3, n4.attached = ji(), n4;
      })(s2, r2);
      Ei(e2, n3, i3, l3);
    } else i2 && ((function(e3, t3, n4, s3) {
      e3.removeEventListener(t3, n4, s3);
    })(e2, n3, i2, l3), o3[t2] = void 0);
  }
}
var Fi = /(?:Once|Passive|Capture)$/, Mi = 0, Li = Promise.resolve(), ji = () => Mi || (Li.then(() => Mi = 0), Mi = Date.now()), Pi = (e2) => e2.charCodeAt(0) === 111 && e2.charCodeAt(1) === 110 && e2.charCodeAt(2) > 96 && e2.charCodeAt(2) < 123, $i = /* @__PURE__ */ new WeakMap(), Di = /* @__PURE__ */ new WeakMap(), Ri = /* @__PURE__ */ Symbol("_moveCb"), Vi = /* @__PURE__ */ Symbol("_enterCb"), Ii = ((e2) => (delete e2.props.mode, e2))({ name: "TransitionGroup", props: l({}, Zo, { tag: String, moveClass: String }), setup(e2, { slots: t2 }) {
  let n2 = So(), s2 = Pn(), r2, o3;
  return ds(() => {
    if (!r2.length) return;
    let t3 = e2.moveClass || `${e2.name || "v"}-move`;
    if (!(function(e3, t4, n3) {
      let s4 = e3.cloneNode(), r3 = e3[Go];
      r3 && r3.forEach((e4) => {
        e4.split(/\s+/).forEach((e5) => e5 && s4.classList.remove(e5));
      }), n3.split(/\s+/).forEach((e4) => e4 && s4.classList.add(e4)), s4.style.display = "none";
      let o4 = t4.nodeType === 1 ? t4 : t4.parentNode;
      o4.appendChild(s4);
      let { hasTransform: i2 } = li(s4);
      return o4.removeChild(s4), i2;
    })(r2[0].el, n2.vnode.el, t3)) return void (r2 = []);
    r2.forEach(Ni), r2.forEach(Ui);
    let s3 = r2.filter(Bi);
    ui(), s3.forEach((e3) => {
      let n3 = e3.el, s4 = n3.style;
      ni(n3, t3), s4.transform = s4.webkitTransform = s4.transitionDuration = "";
      let r3 = n3[Ri] = (e4) => {
        e4 && e4.target !== n3 || e4 && !/transform$/.test(e4.propertyName) || (n3.removeEventListener("transitionend", r3), n3[Ri] = null, si(n3, t3));
      };
      n3.addEventListener("transitionend", r3);
    }), r2 = [];
  }), () => {
    let i2 = St(e2), l3 = ei(i2), c2 = i2.tag || Hr;
    if (r2 = [], o3) for (let e3 = 0; e3 < o3.length; e3++) {
      let t3 = o3[e3];
      t3.el && t3.el instanceof Element && (r2.push(t3), Hn(t3, Un(t3, l3, s2, n2)), $i.set(t3, t3.el.getBoundingClientRect()));
    }
    o3 = t2.default ? Kn(t2.default()) : [];
    for (let e3 = 0; e3 < o3.length; e3++) {
      let t3 = o3[e3];
      t3.key != null && Hn(t3, Un(t3, l3, s2, n2));
    }
    return lo(c2, null, o3);
  };
} });
function Ni(e2) {
  let t2 = e2.el;
  t2[Ri] && t2[Ri](), t2[Vi] && t2[Vi]();
}
function Ui(e2) {
  Di.set(e2, e2.el.getBoundingClientRect());
}
function Bi(e2) {
  let t2 = $i.get(e2), n2 = Di.get(e2), s2 = t2.left - n2.left, r2 = t2.top - n2.top;
  if (s2 || r2) {
    let t3 = e2.el.style;
    return t3.transform = t3.webkitTransform = `translate(${s2}px,${r2}px)`, t3.transitionDuration = "0s", e2;
  }
}
var tl = ["ctrl", "shift", "alt", "meta"], nl = { stop: (e2) => e2.stopPropagation(), prevent: (e2) => e2.preventDefault(), self: (e2) => e2.target !== e2.currentTarget, ctrl: (e2) => !e2.ctrlKey, shift: (e2) => !e2.shiftKey, alt: (e2) => !e2.altKey, meta: (e2) => !e2.metaKey, left: (e2) => "button" in e2 && e2.button !== 0, middle: (e2) => "button" in e2 && e2.button !== 1, right: (e2) => "button" in e2 && e2.button !== 2, exact: (e2, t2) => tl.some((n2) => e2[`${n2}Key`] && !t2.includes(n2)) }, sl = (e2, t2) => {
  let n2 = e2._withMods || (e2._withMods = {}), s2 = t2.join(".");
  return n2[s2] || (n2[s2] = (n3, ...s3) => {
    for (let e3 = 0; e3 < t2.length; e3++) {
      let s4 = nl[t2[e3]];
      if (s4 && s4(n3, t2)) return;
    }
    return e2(n3, ...s3);
  });
};
var il = l({ patchProp: (e2, t2, n2, s2, r2, l3) => {
  let c2 = r2 === "svg";
  t2 === "class" ? (function(e3, t3, n3) {
    let s3 = e3[Go];
    s3 && (t3 = (t3 ? [t3, ...s3] : [...s3]).join(" ")), t3 == null ? e3.removeAttribute("class") : n3 ? e3.setAttribute("class", t3) : e3.className = t3;
  })(e2, s2, c2) : t2 === "style" ? (function(e3, t3, n3) {
    let s3 = e3.style, r3 = g(n3), o3 = !1;
    if (n3 && !r3) {
      if (t3) if (g(t3)) for (let e4 of t3.split(";")) {
        let t4 = e4.slice(0, e4.indexOf(":")).trim();
        n3[t4] == null && xi(s3, t4, "");
      }
      else for (let e4 in t3) n3[e4] == null && xi(s3, e4, "");
      for (let e4 in n3) e4 === "display" && (o3 = !0), xi(s3, e4, n3[e4]);
    } else if (r3) {
      if (t3 !== n3) {
        let e4 = s3[vi];
        e4 && (n3 += ";" + e4), s3.cssText = n3, o3 = _i.test(n3);
      }
    } else t3 && e3.removeAttribute("style");
    fi in e3 && (e3[fi] = o3 ? s3.display : "", e3[pi] && (s3.display = "none"));
  })(e2, n2, s2) : o(t2) ? i(t2) || Oi(e2, t2, 0, s2, l3) : (t2[0] === "." ? (t2 = t2.slice(1), 1) : t2[0] === "^" ? (t2 = t2.slice(1), 0) : (function(e3, t3, n3, s3) {
    if (s3) return t3 === "innerHTML" || t3 === "textContent" || !!(t3 in e3 && Pi(t3) && v(n3));
    if (t3 === "spellcheck" || t3 === "draggable" || t3 === "translate" || t3 === "autocorrect" || t3 === "form" || t3 === "list" && e3.tagName === "INPUT" || t3 === "type" && e3.tagName === "TEXTAREA") return !1;
    if (t3 === "width" || t3 === "height") {
      let t4 = e3.tagName;
      if (t4 === "IMG" || t4 === "VIDEO" || t4 === "CANVAS" || t4 === "SOURCE") return !1;
    }
    return Pi(t3) && g(n3) ? !1 : t3 in e3;
  })(e2, t2, s2, c2)) ? (Ai(e2, t2, s2), e2.tagName.includes("-") || t2 !== "value" && t2 !== "checked" && t2 !== "selected" || ki(e2, t2, s2, c2, 0, t2 !== "value")) : !e2._isVueCE || !/[A-Z]/.test(t2) && g(s2) ? (t2 === "true-value" ? e2._trueValue = s2 : t2 === "false-value" && (e2._falseValue = s2), ki(e2, t2, s2, c2)) : Ai(e2, E(t2), s2, 0, t2);
} }, Ko), ll;
function cl() {
  return ll || (ll = xr(il));
}
var ul = (...e2) => {
  let t2 = cl().createApp(...e2), { mount: n2 } = t2;
  return t2.mount = (e3) => {
    let s2 = (function(e4) {
      return g(e4) ? document.querySelector(e4) : e4;
    })(e3);
    if (!s2) return;
    let r2 = t2._component;
    v(r2) || r2.render || r2.template || (r2.template = s2.innerHTML), s2.nodeType === 1 && (s2.textContent = "");
    let o3 = n2(s2, !1, (function(e4) {
      if (e4 instanceof SVGElement) return "svg";
      if (typeof MathMLElement == "function" && e4 instanceof MathMLElement) return "mathml";
    })(s2));
    return s2 instanceof Element && (s2.removeAttribute("v-cloak"), s2.setAttribute("data-v-app", "")), o3;
  }, t2;
};
var wl = (e2) => {
  let t2 = /* @__PURE__ */ Object.create(null);
  return (n2) => t2[n2] || (t2[n2] = e2(n2));
}, Cl = /-\w/g, kl = wl((e2) => e2.replace(Cl, (e3) => e3.slice(1).toUpperCase())), Al = /\B([A-Z])/g, El = wl((e2) => e2.replace(Al, "-$1").toLowerCase()), Tl = wl((e2) => e2.charAt(0).toUpperCase() + e2.slice(1));

// ../chunks/tailwind-S0oaxdkI.js
var o2 = (t2, o3) => {
  let e2 = t2.__vccOpts || t2;
  for (let [r2, s2] of o3) e2[r2] = s2;
  return e2;
};

// ../chunks/home-yiyan-entry.js
import { values as l2, cache, apiGetYiyan, copyText as Be2, reportError } from "./bridge.js";
var pt2 = { class: "app-yiyan d-flex-x overflow-hidden cursor-pointer bg-transparent leading-5" }, _t2 = { class: "app-yiyan-body relative" }, mt2 = { class: "yiyan-from f12 ac" }, ht2 = o2({ __name: "HomeYiyan", setup(e2) {
  let t2 = Tt(l2.get("yiyan") || {});
  async function a2(e3) {
    try {
      let a3 = cache, o4 = await a3.get("yiyan");
      if (!e3 && o4) return void (t2.value = o4);
      await apiGetYiyan().then((e4) => {
        let o5 = e4.data || {};
        o5 = { hitokoto: o5.hitokoto, from: o5.from }, t2.value = o5 || {}, l2.set("yiyan", o5), a3.set("yiyan", o5, 6e5);
      });
    } catch (error) {
      reportError(error);
    }
  }
  a2();
  let o3 = () => {
    Be2(`${t2.value.hitokoto} --${t2.value.from}`);
  }, i2 = () => {
    a2(!0);
  };
  return (e3, a3) => (Zr(), eo("div", pt2, [io("div", _t2, [po("", !0), io("div", { class: "yiyan-text f12", onClick: o3, onContextmenu: sl(i2, ["prevent", "stop"]), title: "点击左键复制，右键切换" }, " 「 " + Z(Lt(t2).hitokoto) + " 」 ", 33), io("div", mt2, Z(Lt(t2).from), 1)])]));
} }, [["__scopeId", "data-v-955b18c7"]]);
export {
  ht2 as HomeYiyan,
  ul as createApp
};
/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/**
 * @license @tabler/icons-vue v3.46.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
