import {
  r
} from "./chunk-ZBQAVDN7.js";

// output/native-current/decimal-B1oHnkff.js
var n, e, i = 9e15, r2 = 1e9, t = "0123456789abcdef", s = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", o = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", u = { precision: 20, rounding: 4, modulo: 1, toExpNeg: -7, toExpPos: 21, minE: -i, maxE: i, crypto: !1 }, c = !0, f = "[DecimalError] ", a = f + "Invalid argument: ", h = f + "Precision limit exceeded", d = f + "crypto unavailable", l = "[object Decimal]", g = Math.floor, p = Math.pow, w = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, m = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, v = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, N = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, b = 1e7, E = s.length - 1, x = o.length - 1, y = { toStringTag: l };
function M(n3) {
  var e2, i2, r22, t2 = n3.length - 1, s2 = "", o2 = n3[0];
  if (t2 > 0) {
    for (s2 += o2, e2 = 1; e2 < t2; e2++) (i2 = 7 - (r22 = n3[e2] + "").length) && (s2 += _(i2)), s2 += r22;
    (i2 = 7 - (r22 = (o2 = n3[e2]) + "").length) && (s2 += _(i2));
  } else if (o2 === 0) return "0";
  for (; o2 % 10 == 0; ) o2 /= 10;
  return s2 + o2;
}
function q(n3, e2, i2) {
  if (n3 !== ~~n3 || n3 < e2 || n3 > i2) throw Error(a + n3);
}
function O(n3, e2, i2, r22) {
  var t2, s2, o2, u2;
  for (s2 = n3[0]; s2 >= 10; s2 /= 10) --e2;
  return --e2 < 0 ? (e2 += 7, t2 = 0) : (t2 = Math.ceil((e2 + 1) / 7), e2 %= 7), s2 = p(10, 7 - e2), u2 = n3[t2] % s2 | 0, r22 == null ? e2 < 3 ? (e2 == 0 ? u2 = u2 / 100 | 0 : e2 == 1 && (u2 = u2 / 10 | 0), o2 = i2 < 4 && u2 == 99999 || i2 > 3 && u2 == 49999 || u2 == 5e4 || u2 == 0) : o2 = (i2 < 4 && u2 + 1 == s2 || i2 > 3 && u2 + 1 == s2 / 2) && (n3[t2 + 1] / s2 / 100 | 0) == p(10, e2 - 2) - 1 || (u2 == s2 / 2 || u2 == 0) && !(n3[t2 + 1] / s2 / 100 | 0) : e2 < 4 ? (e2 == 0 ? u2 = u2 / 1e3 | 0 : e2 == 1 ? u2 = u2 / 100 | 0 : e2 == 2 && (u2 = u2 / 10 | 0), o2 = (r22 || i2 < 4) && u2 == 9999 || !r22 && i2 > 3 && u2 == 4999) : o2 = ((r22 || i2 < 4) && u2 + 1 == s2 || !r22 && i2 > 3 && u2 + 1 == s2 / 2) && (n3[t2 + 1] / s2 / 1e3 | 0) == p(10, e2 - 3) - 1, o2;
}
function F(n3, e2, i2) {
  for (var r22, s2, o2 = [0], u2 = 0, c2 = n3.length; u2 < c2; ) {
    for (s2 = o2.length; s2--; ) o2[s2] *= e2;
    for (o2[0] += t.indexOf(n3.charAt(u2++)), r22 = 0; r22 < o2.length; r22++) o2[r22] > i2 - 1 && (o2[r22 + 1] === void 0 && (o2[r22 + 1] = 0), o2[r22 + 1] += o2[r22] / i2 | 0, o2[r22] %= i2);
  }
  return o2.reverse();
}
y.absoluteValue = y.abs = function() {
  var n3 = new this.constructor(this);
  return n3.s < 0 && (n3.s = 1), D(n3);
}, y.ceil = function() {
  return D(new this.constructor(this), this.e + 1, 2);
}, y.clampedTo = y.clamp = function(n3, e2) {
  var i2 = this, r22 = i2.constructor;
  if (n3 = new r22(n3), e2 = new r22(e2), !n3.s || !e2.s) return new r22(NaN);
  if (n3.gt(e2)) throw Error(a + e2);
  return i2.cmp(n3) < 0 ? n3 : i2.cmp(e2) > 0 ? e2 : new r22(i2);
}, y.comparedTo = y.cmp = function(n3) {
  var e2, i2, r22, t2, s2 = this, o2 = s2.d, u2 = (n3 = new s2.constructor(n3)).d, c2 = s2.s, f2 = n3.s;
  if (!o2 || !u2) return c2 && f2 ? c2 !== f2 ? c2 : o2 === u2 ? 0 : !o2 ^ c2 < 0 ? 1 : -1 : NaN;
  if (!o2[0] || !u2[0]) return o2[0] ? c2 : u2[0] ? -f2 : 0;
  if (c2 !== f2) return c2;
  if (s2.e !== n3.e) return s2.e > n3.e ^ c2 < 0 ? 1 : -1;
  for (e2 = 0, i2 = (r22 = o2.length) < (t2 = u2.length) ? r22 : t2; e2 < i2; ++e2) if (o2[e2] !== u2[e2]) return o2[e2] > u2[e2] ^ c2 < 0 ? 1 : -1;
  return r22 === t2 ? 0 : r22 > t2 ^ c2 < 0 ? 1 : -1;
}, y.cosine = y.cos = function() {
  var n3, i2, r22 = this, t2 = r22.constructor;
  return r22.d ? r22.d[0] ? (n3 = t2.precision, i2 = t2.rounding, t2.precision = n3 + Math.max(r22.e, r22.sd()) + 7, t2.rounding = 1, r22 = (function(n4, e2) {
    var i3, r3, t3;
    if (e2.isZero()) return e2;
    r3 = e2.d.length, r3 < 32 ? t3 = (1 / $(4, i3 = Math.ceil(r3 / 3))).toString() : (i3 = 16, t3 = "2.3283064365386962890625e-10"), n4.precision += i3, e2 = V(n4, 1, e2.times(t3), new n4(1));
    for (var s2 = i3; s2--; ) {
      var o2 = e2.times(e2);
      e2 = o2.times(o2).minus(o2).times(8).plus(1);
    }
    return n4.precision -= i3, e2;
  })(t2, j(t2, r22)), t2.precision = n3, t2.rounding = i2, D(e == 2 || e == 3 ? r22.neg() : r22, n3, i2, !0)) : new t2(1) : new t2(NaN);
}, y.cubeRoot = y.cbrt = function() {
  var n3, e2, i2, r22, t2, s2, o2, u2, f2, a22, h2 = this, d2 = h2.constructor;
  if (!h2.isFinite() || h2.isZero()) return new d2(h2);
  for (c = !1, (s2 = h2.s * p(h2.s * h2, 1 / 3)) && Math.abs(s2) != 1 / 0 ? r22 = new d2(s2.toString()) : (i2 = M(h2.d), (s2 = ((n3 = h2.e) - i2.length + 1) % 3) && (i2 += s2 == 1 || s2 == -2 ? "0" : "00"), s2 = p(i2, 1 / 3), n3 = g((n3 + 1) / 3) - (n3 % 3 == (n3 < 0 ? -1 : 2)), (r22 = new d2(i2 = s2 == 1 / 0 ? "5e" + n3 : (i2 = s2.toExponential()).slice(0, i2.indexOf("e") + 1) + n3)).s = h2.s), o2 = (n3 = d2.precision) + 3; ; ) if (a22 = (f2 = (u2 = r22).times(u2).times(u2)).plus(h2), r22 = A(a22.plus(h2).times(u2), a22.plus(f2), o2 + 2, 1), M(u2.d).slice(0, o2) === (i2 = M(r22.d)).slice(0, o2)) {
    if ((i2 = i2.slice(o2 - 3, o2 + 1)) != "9999" && (t2 || i2 != "4999")) {
      +i2 && (+i2.slice(1) || i2.charAt(0) != "5") || (D(r22, n3 + 1, 1), e2 = !r22.times(r22).times(r22).eq(h2));
      break;
    }
    if (!t2 && (D(u2, n3 + 1, 0), u2.times(u2).times(u2).eq(h2))) {
      r22 = u2;
      break;
    }
    o2 += 4, t2 = 1;
  }
  return c = !0, D(r22, n3, d2.rounding, e2);
}, y.decimalPlaces = y.dp = function() {
  var n3, e2 = this.d, i2 = NaN;
  if (e2) {
    if (i2 = 7 * ((n3 = e2.length - 1) - g(this.e / 7)), n3 = e2[n3]) for (; n3 % 10 == 0; n3 /= 10) i2--;
    i2 < 0 && (i2 = 0);
  }
  return i2;
}, y.dividedBy = y.div = function(n3) {
  return A(this, new this.constructor(n3));
}, y.dividedToIntegerBy = y.divToInt = function(n3) {
  var e2 = this.constructor;
  return D(A(this, new e2(n3), 0, 1, 1), e2.precision, e2.rounding);
}, y.equals = y.eq = function(n3) {
  return this.cmp(n3) === 0;
}, y.floor = function() {
  return D(new this.constructor(this), this.e + 1, 3);
}, y.greaterThan = y.gt = function(n3) {
  return this.cmp(n3) > 0;
}, y.greaterThanOrEqualTo = y.gte = function(n3) {
  var e2 = this.cmp(n3);
  return e2 == 1 || e2 === 0;
}, y.hyperbolicCosine = y.cosh = function() {
  var n3, e2, i2, r22, t2, s2 = this, o2 = s2.constructor, u2 = new o2(1);
  if (!s2.isFinite()) return new o2(s2.s ? 1 / 0 : NaN);
  if (s2.isZero()) return u2;
  i2 = o2.precision, r22 = o2.rounding, o2.precision = i2 + Math.max(s2.e, s2.sd()) + 4, o2.rounding = 1, (t2 = s2.d.length) < 32 ? e2 = (1 / $(4, n3 = Math.ceil(t2 / 3))).toString() : (n3 = 16, e2 = "2.3283064365386962890625e-10"), s2 = V(o2, 1, s2.times(e2), new o2(1), !0);
  for (var c2, f2 = n3, a22 = new o2(8); f2--; ) c2 = s2.times(s2), s2 = u2.minus(c2.times(a22.minus(c2.times(a22))));
  return D(s2, o2.precision = i2, o2.rounding = r22, !0);
}, y.hyperbolicSine = y.sinh = function() {
  var n3, e2, i2, r22, t2 = this, s2 = t2.constructor;
  if (!t2.isFinite() || t2.isZero()) return new s2(t2);
  if (e2 = s2.precision, i2 = s2.rounding, s2.precision = e2 + Math.max(t2.e, t2.sd()) + 4, s2.rounding = 1, (r22 = t2.d.length) < 3) t2 = V(s2, 2, t2, t2, !0);
  else {
    n3 = (n3 = 1.4 * Math.sqrt(r22)) > 16 ? 16 : 0 | n3, t2 = V(s2, 2, t2 = t2.times(1 / $(5, n3)), t2, !0);
    for (var o2, u2 = new s2(5), c2 = new s2(16), f2 = new s2(20); n3--; ) o2 = t2.times(t2), t2 = t2.times(u2.plus(o2.times(c2.times(o2).plus(f2))));
  }
  return s2.precision = e2, s2.rounding = i2, D(t2, e2, i2, !0);
}, y.hyperbolicTangent = y.tanh = function() {
  var n3, e2, i2 = this, r22 = i2.constructor;
  return i2.isFinite() ? i2.isZero() ? new r22(i2) : (n3 = r22.precision, e2 = r22.rounding, r22.precision = n3 + 7, r22.rounding = 1, A(i2.sinh(), i2.cosh(), r22.precision = n3, r22.rounding = e2)) : new r22(i2.s);
}, y.inverseCosine = y.acos = function() {
  var n3 = this, e2 = n3.constructor, i2 = n3.abs().cmp(1), r22 = e2.precision, t2 = e2.rounding;
  return i2 !== -1 ? i2 === 0 ? n3.isNeg() ? R(e2, r22, t2) : new e2(0) : new e2(NaN) : n3.isZero() ? R(e2, r22 + 4, t2).times(0.5) : (e2.precision = r22 + 6, e2.rounding = 1, n3 = new e2(1).minus(n3).div(n3.plus(1)).sqrt().atan(), e2.precision = r22, e2.rounding = t2, n3.times(2));
}, y.inverseHyperbolicCosine = y.acosh = function() {
  var n3, e2, i2 = this, r22 = i2.constructor;
  return i2.lte(1) ? new r22(i2.eq(1) ? 0 : NaN) : i2.isFinite() ? (n3 = r22.precision, e2 = r22.rounding, r22.precision = n3 + Math.max(Math.abs(i2.e), i2.sd()) + 4, r22.rounding = 1, c = !1, i2 = i2.times(i2).minus(1).sqrt().plus(i2), c = !0, r22.precision = n3, r22.rounding = e2, i2.ln()) : new r22(i2);
}, y.inverseHyperbolicSine = y.asinh = function() {
  var n3, e2, i2 = this, r22 = i2.constructor;
  return !i2.isFinite() || i2.isZero() ? new r22(i2) : (n3 = r22.precision, e2 = r22.rounding, r22.precision = n3 + 2 * Math.max(Math.abs(i2.e), i2.sd()) + 6, r22.rounding = 1, c = !1, i2 = i2.times(i2).plus(1).sqrt().plus(i2), c = !0, r22.precision = n3, r22.rounding = e2, i2.ln());
}, y.inverseHyperbolicTangent = y.atanh = function() {
  var n3, e2, i2, r22, t2 = this, s2 = t2.constructor;
  return t2.isFinite() ? t2.e >= 0 ? new s2(t2.abs().eq(1) ? t2.s / 0 : t2.isZero() ? t2 : NaN) : (n3 = s2.precision, e2 = s2.rounding, r22 = t2.sd(), Math.max(r22, n3) < 2 * -t2.e - 1 ? D(new s2(t2), n3, e2, !0) : (s2.precision = i2 = r22 - t2.e, t2 = A(t2.plus(1), new s2(1).minus(t2), i2 + n3, 1), s2.precision = n3 + 4, s2.rounding = 1, t2 = t2.ln(), s2.precision = n3, s2.rounding = e2, t2.times(0.5))) : new s2(NaN);
}, y.inverseSine = y.asin = function() {
  var n3, e2, i2, r22, t2 = this, s2 = t2.constructor;
  return t2.isZero() ? new s2(t2) : (e2 = t2.abs().cmp(1), i2 = s2.precision, r22 = s2.rounding, e2 !== -1 ? e2 === 0 ? ((n3 = R(s2, i2 + 4, r22).times(0.5)).s = t2.s, n3) : new s2(NaN) : (s2.precision = i2 + 6, s2.rounding = 1, t2 = t2.div(new s2(1).minus(t2.times(t2)).sqrt().plus(1)).atan(), s2.precision = i2, s2.rounding = r22, t2.times(2)));
}, y.inverseTangent = y.atan = function() {
  var n3, e2, i2, r22, t2, s2, o2, u2, f2, a22 = this, h2 = a22.constructor, d2 = h2.precision, l2 = h2.rounding;
  if (a22.isFinite()) {
    if (a22.isZero()) return new h2(a22);
    if (a22.abs().eq(1) && d2 + 4 <= x) return (o2 = R(h2, d2 + 4, l2).times(0.25)).s = a22.s, o2;
  } else {
    if (!a22.s) return new h2(NaN);
    if (d2 + 4 <= x) return (o2 = R(h2, d2 + 4, l2).times(0.5)).s = a22.s, o2;
  }
  for (h2.precision = u2 = d2 + 10, h2.rounding = 1, n3 = i2 = Math.min(28, u2 / 7 + 2 | 0); n3; --n3) a22 = a22.div(a22.times(a22).plus(1).sqrt().plus(1));
  for (c = !1, e2 = Math.ceil(u2 / 7), r22 = 1, f2 = a22.times(a22), o2 = new h2(a22), t2 = a22; n3 !== -1; ) if (t2 = t2.times(f2), s2 = o2.minus(t2.div(r22 += 2)), t2 = t2.times(f2), (o2 = s2.plus(t2.div(r22 += 2))).d[e2] !== void 0) for (n3 = e2; o2.d[n3] === s2.d[n3] && n3--; ) ;
  return i2 && (o2 = o2.times(2 << i2 - 1)), c = !0, D(o2, h2.precision = d2, h2.rounding = l2, !0);
}, y.isFinite = function() {
  return !!this.d;
}, y.isInteger = y.isInt = function() {
  return !!this.d && g(this.e / 7) > this.d.length - 2;
}, y.isNaN = function() {
  return !this.s;
}, y.isNegative = y.isNeg = function() {
  return this.s < 0;
}, y.isPositive = y.isPos = function() {
  return this.s > 0;
}, y.isZero = function() {
  return !!this.d && this.d[0] === 0;
}, y.lessThan = y.lt = function(n3) {
  return this.cmp(n3) < 0;
}, y.lessThanOrEqualTo = y.lte = function(n3) {
  return this.cmp(n3) < 1;
}, y.logarithm = y.log = function(n3) {
  var e2, i2, r22, t2, s2, o2, u2, f2, a22 = this, h2 = a22.constructor, d2 = h2.precision, l2 = h2.rounding;
  if (n3 == null) n3 = new h2(10), e2 = !0;
  else {
    if (i2 = (n3 = new h2(n3)).d, n3.s < 0 || !i2 || !i2[0] || n3.eq(1)) return new h2(NaN);
    e2 = n3.eq(10);
  }
  if (i2 = a22.d, a22.s < 0 || !i2 || !i2[0] || a22.eq(1)) return new h2(i2 && !i2[0] ? -1 / 0 : a22.s != 1 ? NaN : i2 ? 0 : 1 / 0);
  if (e2) if (i2.length > 1) s2 = !0;
  else {
    for (t2 = i2[0]; t2 % 10 == 0; ) t2 /= 10;
    s2 = t2 !== 1;
  }
  if (c = !1, o2 = C(a22, u2 = d2 + 5), r22 = e2 ? P(h2, u2 + 10) : C(n3, u2), O((f2 = A(o2, r22, u2, 1)).d, t2 = d2, l2)) do
    if (o2 = C(a22, u2 += 10), r22 = e2 ? P(h2, u2 + 10) : C(n3, u2), f2 = A(o2, r22, u2, 1), !s2) {
      +M(f2.d).slice(t2 + 1, t2 + 15) + 1 == 1e14 && (f2 = D(f2, d2 + 1, 0));
      break;
    }
  while (O(f2.d, t2 += 10, l2));
  return c = !0, D(f2, d2, l2);
}, y.minus = y.sub = function(n3) {
  var e2, i2, r22, t2, s2, o2, u2, f2, a22, h2, d2, l2, p2 = this, w2 = p2.constructor;
  if (n3 = new w2(n3), !p2.d || !n3.d) return p2.s && n3.s ? p2.d ? n3.s = -n3.s : n3 = new w2(n3.d || p2.s !== n3.s ? p2 : NaN) : n3 = new w2(NaN), n3;
  if (p2.s != n3.s) return n3.s = -n3.s, p2.plus(n3);
  if (a22 = p2.d, l2 = n3.d, u2 = w2.precision, f2 = w2.rounding, !a22[0] || !l2[0]) {
    if (l2[0]) n3.s = -n3.s;
    else {
      if (!a22[0]) return new w2(f2 === 3 ? -0 : 0);
      n3 = new w2(p2);
    }
    return c ? D(n3, u2, f2) : n3;
  }
  if (i2 = g(n3.e / 7), h2 = g(p2.e / 7), a22 = a22.slice(), s2 = h2 - i2) {
    for ((d2 = s2 < 0) ? (e2 = a22, s2 = -s2, o2 = l2.length) : (e2 = l2, i2 = h2, o2 = a22.length), s2 > (r22 = Math.max(Math.ceil(u2 / 7), o2) + 2) && (s2 = r22, e2.length = 1), e2.reverse(), r22 = s2; r22--; ) e2.push(0);
    e2.reverse();
  } else {
    for ((d2 = (r22 = a22.length) < (o2 = l2.length)) && (o2 = r22), r22 = 0; r22 < o2; r22++) if (a22[r22] != l2[r22]) {
      d2 = a22[r22] < l2[r22];
      break;
    }
    s2 = 0;
  }
  for (d2 && (e2 = a22, a22 = l2, l2 = e2, n3.s = -n3.s), o2 = a22.length, r22 = l2.length - o2; r22 > 0; --r22) a22[o2++] = 0;
  for (r22 = l2.length; r22 > s2; ) {
    if (a22[--r22] < l2[r22]) {
      for (t2 = r22; t2 && a22[--t2] === 0; ) a22[t2] = b - 1;
      --a22[t2], a22[r22] += b;
    }
    a22[r22] -= l2[r22];
  }
  for (; a22[--o2] === 0; ) a22.pop();
  for (; a22[0] === 0; a22.shift()) --i2;
  return a22[0] ? (n3.d = a22, n3.e = S(a22, i2), c ? D(n3, u2, f2) : n3) : new w2(f2 === 3 ? -0 : 0);
}, y.modulo = y.mod = function(n3) {
  var e2, i2 = this, r22 = i2.constructor;
  return n3 = new r22(n3), !i2.d || !n3.s || n3.d && !n3.d[0] ? new r22(NaN) : !n3.d || i2.d && !i2.d[0] ? D(new r22(i2), r22.precision, r22.rounding) : (c = !1, r22.modulo == 9 ? (e2 = A(i2, n3.abs(), 0, 3, 1)).s *= n3.s : e2 = A(i2, n3, 0, r22.modulo, 1), e2 = e2.times(n3), c = !0, i2.minus(e2));
}, y.naturalExponential = y.exp = function() {
  return I(this);
}, y.naturalLogarithm = y.ln = function() {
  return C(this);
}, y.negated = y.neg = function() {
  var n3 = new this.constructor(this);
  return n3.s = -n3.s, D(n3);
}, y.plus = y.add = function(n3) {
  var e2, i2, r22, t2, s2, o2, u2, f2, a22, h2, d2 = this, l2 = d2.constructor;
  if (n3 = new l2(n3), !d2.d || !n3.d) return d2.s && n3.s ? d2.d || (n3 = new l2(n3.d || d2.s === n3.s ? d2 : NaN)) : n3 = new l2(NaN), n3;
  if (d2.s != n3.s) return n3.s = -n3.s, d2.minus(n3);
  if (a22 = d2.d, h2 = n3.d, u2 = l2.precision, f2 = l2.rounding, !a22[0] || !h2[0]) return h2[0] || (n3 = new l2(d2)), c ? D(n3, u2, f2) : n3;
  if (s2 = g(d2.e / 7), r22 = g(n3.e / 7), a22 = a22.slice(), t2 = s2 - r22) {
    for (t2 < 0 ? (i2 = a22, t2 = -t2, o2 = h2.length) : (i2 = h2, r22 = s2, o2 = a22.length), t2 > (o2 = (s2 = Math.ceil(u2 / 7)) > o2 ? s2 + 1 : o2 + 1) && (t2 = o2, i2.length = 1), i2.reverse(); t2--; ) i2.push(0);
    i2.reverse();
  }
  for ((o2 = a22.length) - (t2 = h2.length) < 0 && (t2 = o2, i2 = h2, h2 = a22, a22 = i2), e2 = 0; t2; ) e2 = (a22[--t2] = a22[t2] + h2[t2] + e2) / b | 0, a22[t2] %= b;
  for (e2 && (a22.unshift(e2), ++r22), o2 = a22.length; a22[--o2] == 0; ) a22.pop();
  return n3.d = a22, n3.e = S(a22, r22), c ? D(n3, u2, f2) : n3;
}, y.precision = y.sd = function(n3) {
  var e2, i2 = this;
  if (n3 !== void 0 && n3 !== !!n3 && n3 !== 1 && n3 !== 0) throw Error(a + n3);
  return i2.d ? (e2 = T(i2.d), n3 && i2.e + 1 > e2 && (e2 = i2.e + 1)) : e2 = NaN, e2;
}, y.round = function() {
  var n3 = this, e2 = n3.constructor;
  return D(new e2(n3), n3.e + 1, e2.rounding);
}, y.sine = y.sin = function() {
  var n3, i2, r22 = this, t2 = r22.constructor;
  return r22.isFinite() ? r22.isZero() ? new t2(r22) : (n3 = t2.precision, i2 = t2.rounding, t2.precision = n3 + Math.max(r22.e, r22.sd()) + 7, t2.rounding = 1, r22 = (function(n4, e2) {
    var i3, r3 = e2.d.length;
    if (r3 < 3) return e2.isZero() ? e2 : V(n4, 2, e2, e2);
    i3 = (i3 = 1.4 * Math.sqrt(r3)) > 16 ? 16 : 0 | i3, e2 = e2.times(1 / $(5, i3)), e2 = V(n4, 2, e2, e2);
    for (var t3, s2 = new n4(5), o2 = new n4(16), u2 = new n4(20); i3--; ) t3 = e2.times(e2), e2 = e2.times(s2.plus(t3.times(o2.times(t3).minus(u2))));
    return e2;
  })(t2, j(t2, r22)), t2.precision = n3, t2.rounding = i2, D(e > 2 ? r22.neg() : r22, n3, i2, !0)) : new t2(NaN);
}, y.squareRoot = y.sqrt = function() {
  var n3, e2, i2, r22, t2, s2, o2 = this, u2 = o2.d, f2 = o2.e, a22 = o2.s, h2 = o2.constructor;
  if (a22 !== 1 || !u2 || !u2[0]) return new h2(!a22 || a22 < 0 && (!u2 || u2[0]) ? NaN : u2 ? o2 : 1 / 0);
  for (c = !1, (a22 = Math.sqrt(+o2)) == 0 || a22 == 1 / 0 ? (((e2 = M(u2)).length + f2) % 2 == 0 && (e2 += "0"), a22 = Math.sqrt(e2), f2 = g((f2 + 1) / 2) - (f2 < 0 || f2 % 2), r22 = new h2(e2 = a22 == 1 / 0 ? "5e" + f2 : (e2 = a22.toExponential()).slice(0, e2.indexOf("e") + 1) + f2)) : r22 = new h2(a22.toString()), i2 = (f2 = h2.precision) + 3; ; ) if (r22 = (s2 = r22).plus(A(o2, s2, i2 + 2, 1)).times(0.5), M(s2.d).slice(0, i2) === (e2 = M(r22.d)).slice(0, i2)) {
    if ((e2 = e2.slice(i2 - 3, i2 + 1)) != "9999" && (t2 || e2 != "4999")) {
      +e2 && (+e2.slice(1) || e2.charAt(0) != "5") || (D(r22, f2 + 1, 1), n3 = !r22.times(r22).eq(o2));
      break;
    }
    if (!t2 && (D(s2, f2 + 1, 0), s2.times(s2).eq(o2))) {
      r22 = s2;
      break;
    }
    i2 += 4, t2 = 1;
  }
  return c = !0, D(r22, f2, h2.rounding, n3);
}, y.tangent = y.tan = function() {
  var n3, i2, r22 = this, t2 = r22.constructor;
  return r22.isFinite() ? r22.isZero() ? new t2(r22) : (n3 = t2.precision, i2 = t2.rounding, t2.precision = n3 + 10, t2.rounding = 1, (r22 = r22.sin()).s = 1, r22 = A(r22, new t2(1).minus(r22.times(r22)).sqrt(), n3 + 10, 0), t2.precision = n3, t2.rounding = i2, D(e == 2 || e == 4 ? r22.neg() : r22, n3, i2, !0)) : new t2(NaN);
}, y.times = y.mul = function(n3) {
  var e2, i2, r22, t2, s2, o2, u2, f2, a22, h2 = this, d2 = h2.constructor, l2 = h2.d, p2 = (n3 = new d2(n3)).d;
  if (n3.s *= h2.s, !(l2 && l2[0] && p2 && p2[0])) return new d2(!n3.s || l2 && !l2[0] && !p2 || p2 && !p2[0] && !l2 ? NaN : l2 && p2 ? 0 * n3.s : n3.s / 0);
  for (i2 = g(h2.e / 7) + g(n3.e / 7), (f2 = l2.length) < (a22 = p2.length) && (s2 = l2, l2 = p2, p2 = s2, o2 = f2, f2 = a22, a22 = o2), s2 = [], r22 = o2 = f2 + a22; r22--; ) s2.push(0);
  for (r22 = a22; --r22 >= 0; ) {
    for (e2 = 0, t2 = f2 + r22; t2 > r22; ) u2 = s2[t2] + p2[r22] * l2[t2 - r22 - 1] + e2, s2[t2--] = u2 % b | 0, e2 = u2 / b | 0;
    s2[t2] = (s2[t2] + e2) % b | 0;
  }
  for (; !s2[--o2]; ) s2.pop();
  return e2 ? ++i2 : s2.shift(), n3.d = s2, n3.e = S(s2, i2), c ? D(n3, d2.precision, d2.rounding) : n3;
}, y.toBinary = function(n3, e2) {
  return W(this, 2, n3, e2);
}, y.toDecimalPlaces = y.toDP = function(n3, e2) {
  var i2 = this, t2 = i2.constructor;
  return i2 = new t2(i2), n3 === void 0 ? i2 : (q(n3, 0, r2), e2 === void 0 ? e2 = t2.rounding : q(e2, 0, 8), D(i2, n3 + i2.e + 1, e2));
}, y.toExponential = function(n3, e2) {
  var i2, t2 = this, s2 = t2.constructor;
  return n3 === void 0 ? i2 = Z(t2, !0) : (q(n3, 0, r2), e2 === void 0 ? e2 = s2.rounding : q(e2, 0, 8), i2 = Z(t2 = D(new s2(t2), n3 + 1, e2), !0, n3 + 1)), t2.isNeg() && !t2.isZero() ? "-" + i2 : i2;
}, y.toFixed = function(n3, e2) {
  var i2, t2, s2 = this, o2 = s2.constructor;
  return n3 === void 0 ? i2 = Z(s2) : (q(n3, 0, r2), e2 === void 0 ? e2 = o2.rounding : q(e2, 0, 8), i2 = Z(t2 = D(new o2(s2), n3 + s2.e + 1, e2), !1, n3 + t2.e + 1)), s2.isNeg() && !s2.isZero() ? "-" + i2 : i2;
}, y.toFraction = function(n3) {
  var e2, i2, r22, t2, s2, o2, u2, f2, h2, d2, l2, g2, w2 = this, m2 = w2.d, v2 = w2.constructor;
  if (!m2) return new v2(w2);
  if (h2 = i2 = new v2(1), r22 = f2 = new v2(0), o2 = (s2 = (e2 = new v2(r22)).e = T(m2) - w2.e - 1) % 7, e2.d[0] = p(10, o2 < 0 ? 7 + o2 : o2), n3 == null) n3 = s2 > 0 ? e2 : h2;
  else {
    if (!(u2 = new v2(n3)).isInt() || u2.lt(h2)) throw Error(a + u2);
    n3 = u2.gt(e2) ? s2 > 0 ? e2 : h2 : u2;
  }
  for (c = !1, u2 = new v2(M(m2)), d2 = v2.precision, v2.precision = s2 = 7 * m2.length * 2; l2 = A(u2, e2, 0, 1, 1), (t2 = i2.plus(l2.times(r22))).cmp(n3) != 1; ) i2 = r22, r22 = t2, t2 = h2, h2 = f2.plus(l2.times(t2)), f2 = t2, t2 = e2, e2 = u2.minus(l2.times(t2)), u2 = t2;
  return t2 = A(n3.minus(i2), r22, 0, 1, 1), f2 = f2.plus(t2.times(h2)), i2 = i2.plus(t2.times(r22)), f2.s = h2.s = w2.s, g2 = A(h2, r22, s2, 1).minus(w2).abs().cmp(A(f2, i2, s2, 1).minus(w2).abs()) < 1 ? [h2, r22] : [f2, i2], v2.precision = d2, c = !0, g2;
}, y.toHexadecimal = y.toHex = function(n3, e2) {
  return W(this, 16, n3, e2);
}, y.toNearest = function(n3, e2) {
  var i2 = this, r22 = i2.constructor;
  if (i2 = new r22(i2), n3 == null) {
    if (!i2.d) return i2;
    n3 = new r22(1), e2 = r22.rounding;
  } else {
    if (n3 = new r22(n3), e2 === void 0 ? e2 = r22.rounding : q(e2, 0, 8), !i2.d) return n3.s ? i2 : n3;
    if (!n3.d) return n3.s && (n3.s = i2.s), n3;
  }
  return n3.d[0] ? (c = !1, i2 = A(i2, n3, 0, e2, 1).times(n3), c = !0, D(i2)) : (n3.s = i2.s, i2 = n3), i2;
}, y.toNumber = function() {
  return +this;
}, y.toOctal = function(n3, e2) {
  return W(this, 8, n3, e2);
}, y.toPower = y.pow = function(n3) {
  var e2, i2, r22, t2, s2, o2, u2 = this, f2 = u2.constructor, a22 = +(n3 = new f2(n3));
  if (!(u2.d && n3.d && u2.d[0] && n3.d[0])) return new f2(p(+u2, a22));
  if ((u2 = new f2(u2)).eq(1)) return u2;
  if (r22 = f2.precision, s2 = f2.rounding, n3.eq(1)) return D(u2, r22, s2);
  if ((e2 = g(n3.e / 7)) >= n3.d.length - 1 && (i2 = a22 < 0 ? -a22 : a22) <= 9007199254740991) return t2 = L(f2, u2, i2, r22), n3.s < 0 ? new f2(1).div(t2) : D(t2, r22, s2);
  if ((o2 = u2.s) < 0) {
    if (e2 < n3.d.length - 1) return new f2(NaN);
    if (1 & n3.d[e2] || (o2 = 1), u2.e == 0 && u2.d[0] == 1 && u2.d.length == 1) return u2.s = o2, u2;
  }
  return (e2 = (i2 = p(+u2, a22)) != 0 && isFinite(i2) ? new f2(i2 + "").e : g(a22 * (Math.log("0." + M(u2.d)) / Math.LN10 + u2.e + 1))) > f2.maxE + 1 || e2 < f2.minE - 1 ? new f2(e2 > 0 ? o2 / 0 : 0) : (c = !1, f2.rounding = u2.s = 1, i2 = Math.min(12, (e2 + "").length), (t2 = I(n3.times(C(u2, r22 + i2)), r22)).d && O((t2 = D(t2, r22 + 5, 1)).d, r22, s2) && (e2 = r22 + 10, +M((t2 = D(I(n3.times(C(u2, e2 + i2)), e2), e2 + 5, 1)).d).slice(r22 + 1, r22 + 15) + 1 == 1e14 && (t2 = D(t2, r22 + 1, 0))), t2.s = o2, c = !0, f2.rounding = s2, D(t2, r22, s2));
}, y.toPrecision = function(n3, e2) {
  var i2, t2 = this, s2 = t2.constructor;
  return n3 === void 0 ? i2 = Z(t2, t2.e <= s2.toExpNeg || t2.e >= s2.toExpPos) : (q(n3, 1, r2), e2 === void 0 ? e2 = s2.rounding : q(e2, 0, 8), i2 = Z(t2 = D(new s2(t2), n3, e2), n3 <= t2.e || t2.e <= s2.toExpNeg, n3)), t2.isNeg() && !t2.isZero() ? "-" + i2 : i2;
}, y.toSignificantDigits = y.toSD = function(n3, e2) {
  var i2 = this.constructor;
  return n3 === void 0 ? (n3 = i2.precision, e2 = i2.rounding) : (q(n3, 1, r2), e2 === void 0 ? e2 = i2.rounding : q(e2, 0, 8)), D(new i2(this), n3, e2);
}, y.toString = function() {
  var n3 = this, e2 = n3.constructor, i2 = Z(n3, n3.e <= e2.toExpNeg || n3.e >= e2.toExpPos);
  return n3.isNeg() && !n3.isZero() ? "-" + i2 : i2;
}, y.truncated = y.trunc = function() {
  return D(new this.constructor(this), this.e + 1, 1);
}, y.valueOf = y.toJSON = function() {
  var n3 = this, e2 = n3.constructor, i2 = Z(n3, n3.e <= e2.toExpNeg || n3.e >= e2.toExpPos);
  return n3.isNeg() ? "-" + i2 : i2;
};
var A = /* @__PURE__ */ (function() {
  function e2(n3, e3, i3) {
    var r3, t2 = 0, s2 = n3.length;
    for (n3 = n3.slice(); s2--; ) r3 = n3[s2] * e3 + t2, n3[s2] = r3 % i3 | 0, t2 = r3 / i3 | 0;
    return t2 && n3.unshift(t2), n3;
  }
  function i2(n3, e3, i3, r3) {
    var t2, s2;
    if (i3 != r3) s2 = i3 > r3 ? 1 : -1;
    else for (t2 = s2 = 0; t2 < i3; t2++) if (n3[t2] != e3[t2]) {
      s2 = n3[t2] > e3[t2] ? 1 : -1;
      break;
    }
    return s2;
  }
  function r22(n3, e3, i3, r3) {
    for (var t2 = 0; i3--; ) n3[i3] -= t2, t2 = n3[i3] < e3[i3] ? 1 : 0, n3[i3] = t2 * r3 + n3[i3] - e3[i3];
    for (; !n3[0] && n3.length > 1; ) n3.shift();
  }
  return function(t2, s2, o2, u2, c2, f2) {
    var a22, h2, d2, l2, p2, w2, m2, v2, N2, E2, x2, y2, M2, q2, O2, F2, A2, Z2, S2, P2, R2 = t2.constructor, T2 = t2.s == s2.s ? 1 : -1, _2 = t2.d, L2 = s2.d;
    if (!(_2 && _2[0] && L2 && L2[0])) return new R2(t2.s && s2.s && (_2 ? !L2 || _2[0] != L2[0] : L2) ? _2 && _2[0] == 0 || !L2 ? 0 * T2 : T2 / 0 : NaN);
    for (f2 ? (p2 = 1, h2 = t2.e - s2.e) : (f2 = b, p2 = 7, h2 = g(t2.e / p2) - g(s2.e / p2)), S2 = L2.length, A2 = _2.length, E2 = (N2 = new R2(T2)).d = [], d2 = 0; L2[d2] == (_2[d2] || 0); d2++) ;
    if (L2[d2] > (_2[d2] || 0) && h2--, o2 == null ? (q2 = o2 = R2.precision, u2 = R2.rounding) : q2 = c2 ? o2 + (t2.e - s2.e) + 1 : o2, q2 < 0) E2.push(1), w2 = !0;
    else {
      if (q2 = q2 / p2 + 2 | 0, d2 = 0, S2 == 1) {
        for (l2 = 0, L2 = L2[0], q2++; (d2 < A2 || l2) && q2--; d2++) O2 = l2 * f2 + (_2[d2] || 0), E2[d2] = O2 / L2 | 0, l2 = O2 % L2 | 0;
        w2 = l2 || d2 < A2;
      } else {
        for ((l2 = f2 / (L2[0] + 1) | 0) > 1 && (L2 = e2(L2, l2, f2), _2 = e2(_2, l2, f2), S2 = L2.length, A2 = _2.length), F2 = S2, y2 = (x2 = _2.slice(0, S2)).length; y2 < S2; ) x2[y2++] = 0;
        (P2 = L2.slice()).unshift(0), Z2 = L2[0], L2[1] >= f2 / 2 && ++Z2;
        do
          l2 = 0, (a22 = i2(L2, x2, S2, y2)) < 0 ? (M2 = x2[0], S2 != y2 && (M2 = M2 * f2 + (x2[1] || 0)), (l2 = M2 / Z2 | 0) > 1 ? (l2 >= f2 && (l2 = f2 - 1), (a22 = i2(m2 = e2(L2, l2, f2), x2, v2 = m2.length, y2 = x2.length)) == 1 && (l2--, r22(m2, S2 < v2 ? P2 : L2, v2, f2))) : (l2 == 0 && (a22 = l2 = 1), m2 = L2.slice()), (v2 = m2.length) < y2 && m2.unshift(0), r22(x2, m2, y2, f2), a22 == -1 && (a22 = i2(L2, x2, S2, y2 = x2.length)) < 1 && (l2++, r22(x2, S2 < y2 ? P2 : L2, y2, f2)), y2 = x2.length) : a22 === 0 && (l2++, x2 = [0]), E2[d2++] = l2, a22 && x2[0] ? x2[y2++] = _2[F2] || 0 : (x2 = [_2[F2]], y2 = 1);
        while ((F2++ < A2 || x2[0] !== void 0) && q2--);
        w2 = x2[0] !== void 0;
      }
      E2[0] || E2.shift();
    }
    if (p2 == 1) N2.e = h2, n = w2;
    else {
      for (d2 = 1, l2 = E2[0]; l2 >= 10; l2 /= 10) d2++;
      N2.e = d2 + h2 * p2 - 1, D(N2, c2 ? o2 + N2.e + 1 : o2, u2, w2);
    }
    return N2;
  };
})();
function D(n3, e2, i2, r22) {
  var t2, s2, o2, u2, f2, a22, h2, d2, l2, g2 = n3.constructor;
  n: if (e2 != null) {
    if (!(d2 = n3.d)) return n3;
    for (t2 = 1, u2 = d2[0]; u2 >= 10; u2 /= 10) t2++;
    if ((s2 = e2 - t2) < 0) s2 += 7, o2 = e2, f2 = (h2 = d2[l2 = 0]) / p(10, t2 - o2 - 1) % 10 | 0;
    else if ((l2 = Math.ceil((s2 + 1) / 7)) >= (u2 = d2.length)) {
      if (!r22) break n;
      for (; u2++ <= l2; ) d2.push(0);
      h2 = f2 = 0, t2 = 1, o2 = (s2 %= 7) - 7 + 1;
    } else {
      for (h2 = u2 = d2[l2], t2 = 1; u2 >= 10; u2 /= 10) t2++;
      f2 = (o2 = (s2 %= 7) - 7 + t2) < 0 ? 0 : h2 / p(10, t2 - o2 - 1) % 10 | 0;
    }
    if (r22 = r22 || e2 < 0 || d2[l2 + 1] !== void 0 || (o2 < 0 ? h2 : h2 % p(10, t2 - o2 - 1)), a22 = i2 < 4 ? (f2 || r22) && (i2 == 0 || i2 == (n3.s < 0 ? 3 : 2)) : f2 > 5 || f2 == 5 && (i2 == 4 || r22 || i2 == 6 && (s2 > 0 ? o2 > 0 ? h2 / p(10, t2 - o2) : 0 : d2[l2 - 1]) % 10 & 1 || i2 == (n3.s < 0 ? 8 : 7)), e2 < 1 || !d2[0]) return d2.length = 0, a22 ? (e2 -= n3.e + 1, d2[0] = p(10, (7 - e2 % 7) % 7), n3.e = -e2 || 0) : d2[0] = n3.e = 0, n3;
    if (s2 == 0 ? (d2.length = l2, u2 = 1, l2--) : (d2.length = l2 + 1, u2 = p(10, 7 - s2), d2[l2] = o2 > 0 ? (h2 / p(10, t2 - o2) % p(10, o2) | 0) * u2 : 0), a22) for (; ; ) {
      if (l2 == 0) {
        for (s2 = 1, o2 = d2[0]; o2 >= 10; o2 /= 10) s2++;
        for (o2 = d2[0] += u2, u2 = 1; o2 >= 10; o2 /= 10) u2++;
        s2 != u2 && (n3.e++, d2[0] == b && (d2[0] = 1));
        break;
      }
      if (d2[l2] += u2, d2[l2] != b) break;
      d2[l2--] = 0, u2 = 1;
    }
    for (s2 = d2.length; d2[--s2] === 0; ) d2.pop();
  }
  return c && (n3.e > g2.maxE ? (n3.d = null, n3.e = NaN) : n3.e < g2.minE && (n3.e = 0, n3.d = [0])), n3;
}
function Z(n3, e2, i2) {
  if (!n3.isFinite()) return H(n3);
  var r22, t2 = n3.e, s2 = M(n3.d), o2 = s2.length;
  return e2 ? (i2 && (r22 = i2 - o2) > 0 ? s2 = s2.charAt(0) + "." + s2.slice(1) + _(r22) : o2 > 1 && (s2 = s2.charAt(0) + "." + s2.slice(1)), s2 = s2 + (n3.e < 0 ? "e" : "e+") + n3.e) : t2 < 0 ? (s2 = "0." + _(-t2 - 1) + s2, i2 && (r22 = i2 - o2) > 0 && (s2 += _(r22))) : t2 >= o2 ? (s2 += _(t2 + 1 - o2), i2 && (r22 = i2 - t2 - 1) > 0 && (s2 = s2 + "." + _(r22))) : ((r22 = t2 + 1) < o2 && (s2 = s2.slice(0, r22) + "." + s2.slice(r22)), i2 && (r22 = i2 - o2) > 0 && (t2 + 1 === o2 && (s2 += "."), s2 += _(r22))), s2;
}
function S(n3, e2) {
  var i2 = n3[0];
  for (e2 *= 7; i2 >= 10; i2 /= 10) e2++;
  return e2;
}
function P(n3, e2, i2) {
  if (e2 > E) throw c = !0, i2 && (n3.precision = i2), Error(h);
  return D(new n3(s), e2, 1, !0);
}
function R(n3, e2, i2) {
  if (e2 > x) throw Error(h);
  return D(new n3(o), e2, i2, !0);
}
function T(n3) {
  var e2 = n3.length - 1, i2 = 7 * e2 + 1;
  if (e2 = n3[e2]) {
    for (; e2 % 10 == 0; e2 /= 10) i2--;
    for (e2 = n3[0]; e2 >= 10; e2 /= 10) i2++;
  }
  return i2;
}
function _(n3) {
  for (var e2 = ""; n3--; ) e2 += "0";
  return e2;
}
function L(n3, e2, i2, r22) {
  var t2, s2 = new n3(1), o2 = Math.ceil(r22 / 7 + 4);
  for (c = !1; ; ) {
    if (i2 % 2 && J((s2 = s2.times(e2)).d, o2) && (t2 = !0), (i2 = g(i2 / 2)) === 0) {
      i2 = s2.d.length - 1, t2 && s2.d[i2] === 0 && ++s2.d[i2];
      break;
    }
    J((e2 = e2.times(e2)).d, o2);
  }
  return c = !0, s2;
}
function U(n3) {
  return 1 & n3.d[n3.d.length - 1];
}
function k(n3, e2, i2) {
  for (var r22, t2, s2 = new n3(e2[0]), o2 = 0; ++o2 < e2.length; ) {
    if (!(t2 = new n3(e2[o2])).s) {
      s2 = t2;
      break;
    }
    ((r22 = s2.cmp(t2)) === i2 || r22 === 0 && s2.s === i2) && (s2 = t2);
  }
  return s2;
}
function I(n3, e2) {
  var i2, r22, t2, s2, o2, u2, f2, a22 = 0, h2 = 0, d2 = 0, l2 = n3.constructor, g2 = l2.rounding, w2 = l2.precision;
  if (!n3.d || !n3.d[0] || n3.e > 17) return new l2(n3.d ? n3.d[0] ? n3.s < 0 ? 0 : 1 / 0 : 1 : n3.s ? n3.s < 0 ? 0 : n3 : NaN);
  for (e2 == null ? (c = !1, f2 = w2) : f2 = e2, u2 = new l2(0.03125); n3.e > -2; ) n3 = n3.times(u2), d2 += 5;
  for (f2 += r22 = Math.log(p(2, d2)) / Math.LN10 * 2 + 5 | 0, i2 = s2 = o2 = new l2(1), l2.precision = f2; ; ) {
    if (s2 = D(s2.times(n3), f2, 1), i2 = i2.times(++h2), M((u2 = o2.plus(A(s2, i2, f2, 1))).d).slice(0, f2) === M(o2.d).slice(0, f2)) {
      for (t2 = d2; t2--; ) o2 = D(o2.times(o2), f2, 1);
      if (e2 != null) return l2.precision = w2, o2;
      if (!(a22 < 3 && O(o2.d, f2 - r22, g2, a22))) return D(o2, l2.precision = w2, g2, c = !0);
      l2.precision = f2 += 10, i2 = s2 = u2 = new l2(1), h2 = 0, a22++;
    }
    o2 = u2;
  }
}
function C(n3, e2) {
  var i2, r22, t2, s2, o2, u2, f2, a22, h2, d2, l2, g2 = 1, p2 = n3, w2 = p2.d, m2 = p2.constructor, v2 = m2.rounding, N2 = m2.precision;
  if (p2.s < 0 || !w2 || !w2[0] || !p2.e && w2[0] == 1 && w2.length == 1) return new m2(w2 && !w2[0] ? -1 / 0 : p2.s != 1 ? NaN : w2 ? 0 : p2);
  if (e2 == null ? (c = !1, h2 = N2) : h2 = e2, m2.precision = h2 += 10, r22 = (i2 = M(w2)).charAt(0), !(Math.abs(s2 = p2.e) < 15e14)) return a22 = P(m2, h2 + 2, N2).times(s2 + ""), p2 = C(new m2(r22 + "." + i2.slice(1)), h2 - 10).plus(a22), m2.precision = N2, e2 == null ? D(p2, N2, v2, c = !0) : p2;
  for (; r22 < 7 && r22 != 1 || r22 == 1 && i2.charAt(1) > 3; ) r22 = (i2 = M((p2 = p2.times(n3)).d)).charAt(0), g2++;
  for (s2 = p2.e, r22 > 1 ? (p2 = new m2("0." + i2), s2++) : p2 = new m2(r22 + "." + i2.slice(1)), d2 = p2, f2 = o2 = p2 = A(p2.minus(1), p2.plus(1), h2, 1), l2 = D(p2.times(p2), h2, 1), t2 = 3; ; ) {
    if (o2 = D(o2.times(l2), h2, 1), M((a22 = f2.plus(A(o2, new m2(t2), h2, 1))).d).slice(0, h2) === M(f2.d).slice(0, h2)) {
      if (f2 = f2.times(2), s2 !== 0 && (f2 = f2.plus(P(m2, h2 + 2, N2).times(s2 + ""))), f2 = A(f2, new m2(g2), h2, 1), e2 != null) return m2.precision = N2, f2;
      if (!O(f2.d, h2 - 10, v2, u2)) return D(f2, m2.precision = N2, v2, c = !0);
      m2.precision = h2 += 10, a22 = o2 = p2 = A(d2.minus(1), d2.plus(1), h2, 1), l2 = D(p2.times(p2), h2, 1), t2 = u2 = 1;
    }
    f2 = a22, t2 += 2;
  }
}
function H(n3) {
  return String(n3.s * n3.s / 0);
}
function B(n3, e2) {
  var i2, r22, t2;
  for ((i2 = e2.indexOf(".")) > -1 && (e2 = e2.replace(".", "")), (r22 = e2.search(/e/i)) > 0 ? (i2 < 0 && (i2 = r22), i2 += +e2.slice(r22 + 1), e2 = e2.substring(0, r22)) : i2 < 0 && (i2 = e2.length), r22 = 0; e2.charCodeAt(r22) === 48; r22++) ;
  for (t2 = e2.length; e2.charCodeAt(t2 - 1) === 48; --t2) ;
  if (e2 = e2.slice(r22, t2)) {
    if (t2 -= r22, n3.e = i2 = i2 - r22 - 1, n3.d = [], r22 = (i2 + 1) % 7, i2 < 0 && (r22 += 7), r22 < t2) {
      for (r22 && n3.d.push(+e2.slice(0, r22)), t2 -= 7; r22 < t2; ) n3.d.push(+e2.slice(r22, r22 += 7));
      r22 = 7 - (e2 = e2.slice(r22)).length;
    } else r22 -= t2;
    for (; r22--; ) e2 += "0";
    n3.d.push(+e2), c && (n3.e > n3.constructor.maxE ? (n3.d = null, n3.e = NaN) : n3.e < n3.constructor.minE && (n3.e = 0, n3.d = [0]));
  } else n3.e = 0, n3.d = [0];
  return n3;
}
function V(n3, e2, i2, r22, t2) {
  var s2, o2, u2, f2, a22 = n3.precision, h2 = Math.ceil(a22 / 7);
  for (c = !1, f2 = i2.times(i2), u2 = new n3(r22); ; ) {
    if (o2 = A(u2.times(f2), new n3(e2++ * e2++), a22, 1), u2 = t2 ? r22.plus(o2) : r22.minus(o2), r22 = A(o2.times(f2), new n3(e2++ * e2++), a22, 1), (o2 = u2.plus(r22)).d[h2] !== void 0) {
      for (s2 = h2; o2.d[s2] === u2.d[s2] && s2--; ) ;
      if (s2 == -1) break;
    }
    s2 = u2, u2 = r22, r22 = o2, o2 = s2;
  }
  return c = !0, o2.d.length = h2 + 1, o2;
}
function $(n3, e2) {
  for (var i2 = n3; --e2; ) i2 *= n3;
  return i2;
}
function j(n3, i2) {
  var r22, t2 = i2.s < 0, s2 = R(n3, n3.precision, 1), o2 = s2.times(0.5);
  if ((i2 = i2.abs()).lte(o2)) return e = t2 ? 4 : 1, i2;
  if ((r22 = i2.divToInt(s2)).isZero()) e = t2 ? 3 : 2;
  else {
    if ((i2 = i2.minus(r22.times(s2))).lte(o2)) return e = U(r22) ? t2 ? 2 : 3 : t2 ? 4 : 1, i2;
    e = U(r22) ? t2 ? 1 : 4 : t2 ? 3 : 2;
  }
  return i2.minus(s2).abs();
}
function W(e2, i2, s2, o2) {
  var u2, c2, f2, a22, h2, d2, l2, g2, p2, w2 = e2.constructor, m2 = s2 !== void 0;
  if (m2 ? (q(s2, 1, r2), o2 === void 0 ? o2 = w2.rounding : q(o2, 0, 8)) : (s2 = w2.precision, o2 = w2.rounding), e2.isFinite()) {
    for (m2 ? (u2 = 2, i2 == 16 ? s2 = 4 * s2 - 3 : i2 == 8 && (s2 = 3 * s2 - 2)) : u2 = i2, (f2 = (l2 = Z(e2)).indexOf(".")) >= 0 && (l2 = l2.replace(".", ""), (p2 = new w2(1)).e = l2.length - f2, p2.d = F(Z(p2), 10, u2), p2.e = p2.d.length), c2 = h2 = (g2 = F(l2, 10, u2)).length; g2[--h2] == 0; ) g2.pop();
    if (g2[0]) {
      if (f2 < 0 ? c2-- : ((e2 = new w2(e2)).d = g2, e2.e = c2, g2 = (e2 = A(e2, p2, s2, o2, 0, u2)).d, c2 = e2.e, d2 = n), f2 = g2[s2], a22 = u2 / 2, d2 = d2 || g2[s2 + 1] !== void 0, d2 = o2 < 4 ? (f2 !== void 0 || d2) && (o2 === 0 || o2 === (e2.s < 0 ? 3 : 2)) : f2 > a22 || f2 === a22 && (o2 === 4 || d2 || o2 === 6 && 1 & g2[s2 - 1] || o2 === (e2.s < 0 ? 8 : 7)), g2.length = s2, d2) for (; ++g2[--s2] > u2 - 1; ) g2[s2] = 0, s2 || (++c2, g2.unshift(1));
      for (h2 = g2.length; !g2[h2 - 1]; --h2) ;
      for (f2 = 0, l2 = ""; f2 < h2; f2++) l2 += t.charAt(g2[f2]);
      if (m2) {
        if (h2 > 1) if (i2 == 16 || i2 == 8) {
          for (f2 = i2 == 16 ? 4 : 3, --h2; h2 % f2; h2++) l2 += "0";
          for (h2 = (g2 = F(l2, u2, i2)).length; !g2[h2 - 1]; --h2) ;
          for (f2 = 1, l2 = "1."; f2 < h2; f2++) l2 += t.charAt(g2[f2]);
        } else l2 = l2.charAt(0) + "." + l2.slice(1);
        l2 = l2 + (c2 < 0 ? "p" : "p+") + c2;
      } else if (c2 < 0) {
        for (; ++c2; ) l2 = "0" + l2;
        l2 = "0." + l2;
      } else if (++c2 > h2) for (c2 -= h2; c2--; ) l2 += "0";
      else c2 < h2 && (l2 = l2.slice(0, c2) + "." + l2.slice(c2));
    } else l2 = m2 ? "0p+0" : "0";
    l2 = (i2 == 16 ? "0x" : i2 == 2 ? "0b" : i2 == 8 ? "0o" : "") + l2;
  } else l2 = H(e2);
  return e2.s < 0 ? "-" + l2 : l2;
}
function J(n3, e2) {
  if (n3.length > e2) return n3.length = e2, !0;
}
function z(n3) {
  return new this(n3).abs();
}
function G(n3) {
  return new this(n3).acos();
}
function K(n3) {
  return new this(n3).acosh();
}
function Q(n3, e2) {
  return new this(n3).plus(e2);
}
function X(n3) {
  return new this(n3).asin();
}
function Y(n3) {
  return new this(n3).asinh();
}
function nn(n3) {
  return new this(n3).atan();
}
function en(n3) {
  return new this(n3).atanh();
}
function rn(n3, e2) {
  n3 = new this(n3), e2 = new this(e2);
  var i2, r22 = this.precision, t2 = this.rounding, s2 = r22 + 4;
  return n3.s && e2.s ? n3.d || e2.d ? !e2.d || n3.isZero() ? (i2 = e2.s < 0 ? R(this, r22, t2) : new this(0)).s = n3.s : !n3.d || e2.isZero() ? (i2 = R(this, s2, 1).times(0.5)).s = n3.s : e2.s < 0 ? (this.precision = s2, this.rounding = 1, i2 = this.atan(A(n3, e2, s2, 1)), e2 = R(this, s2, 1), this.precision = r22, this.rounding = t2, i2 = n3.s < 0 ? i2.minus(e2) : i2.plus(e2)) : i2 = this.atan(A(n3, e2, s2, 1)) : (i2 = R(this, s2, 1).times(e2.s > 0 ? 0.25 : 0.75)).s = n3.s : i2 = new this(NaN), i2;
}
function tn(n3) {
  return new this(n3).cbrt();
}
function sn(n3) {
  return D(n3 = new this(n3), n3.e + 1, 2);
}
function on(n3, e2, i2) {
  return new this(n3).clamp(e2, i2);
}
function un(n3) {
  if (!n3 || typeof n3 != "object") throw Error(f + "Object expected");
  var e2, t2, s2, o2 = n3.defaults === !0, c2 = ["precision", 1, r2, "rounding", 0, 8, "toExpNeg", -i, 0, "toExpPos", 0, i, "maxE", 0, i, "minE", -i, 0, "modulo", 0, 9];
  for (e2 = 0; e2 < c2.length; e2 += 3) if (t2 = c2[e2], o2 && (this[t2] = u[t2]), (s2 = n3[t2]) !== void 0) {
    if (!(g(s2) === s2 && s2 >= c2[e2 + 1] && s2 <= c2[e2 + 2])) throw Error(a + t2 + ": " + s2);
    this[t2] = s2;
  }
  if (t2 = "crypto", o2 && (this[t2] = u[t2]), (s2 = n3[t2]) !== void 0) {
    if (s2 !== !0 && s2 !== !1 && s2 !== 0 && s2 !== 1) throw Error(a + t2 + ": " + s2);
    if (s2) {
      if (typeof crypto > "u" || !crypto || !crypto.getRandomValues && !crypto.randomBytes) throw Error(d);
      this[t2] = !0;
    } else this[t2] = !1;
  }
  return this;
}
function cn(n3) {
  return new this(n3).cos();
}
function fn(n3) {
  return new this(n3).cosh();
}
function an(n3, e2) {
  return new this(n3).div(e2);
}
function hn(n3) {
  return new this(n3).exp();
}
function dn(n3) {
  return D(n3 = new this(n3), n3.e + 1, 3);
}
function ln() {
  var n3, e2, i2 = new this(0);
  for (c = !1, n3 = 0; n3 < arguments.length; ) if ((e2 = new this(arguments[n3++])).d) i2.d && (i2 = i2.plus(e2.times(e2)));
  else {
    if (e2.s) return c = !0, new this(1 / 0);
    i2 = e2;
  }
  return c = !0, i2.sqrt();
}
function gn(n3) {
  return n3 instanceof _n || n3 && n3.toStringTag === l || !1;
}
function pn(n3) {
  return new this(n3).ln();
}
function wn(n3, e2) {
  return new this(n3).log(e2);
}
function mn(n3) {
  return new this(n3).log(2);
}
function vn(n3) {
  return new this(n3).log(10);
}
function Nn() {
  return k(this, arguments, -1);
}
function bn() {
  return k(this, arguments, 1);
}
function En(n3, e2) {
  return new this(n3).mod(e2);
}
function xn(n3, e2) {
  return new this(n3).mul(e2);
}
function yn(n3, e2) {
  return new this(n3).pow(e2);
}
function Mn(n3) {
  var e2, i2, t2, s2, o2 = 0, u2 = new this(1), c2 = [];
  if (n3 === void 0 ? n3 = this.precision : q(n3, 1, r2), t2 = Math.ceil(n3 / 7), this.crypto) if (crypto.getRandomValues) for (e2 = crypto.getRandomValues(new Uint32Array(t2)); o2 < t2; ) (s2 = e2[o2]) >= 429e7 ? e2[o2] = crypto.getRandomValues(new Uint32Array(1))[0] : c2[o2++] = s2 % 1e7;
  else {
    if (!crypto.randomBytes) throw Error(d);
    for (e2 = crypto.randomBytes(t2 *= 4); o2 < t2; ) (s2 = e2[o2] + (e2[o2 + 1] << 8) + (e2[o2 + 2] << 16) + ((127 & e2[o2 + 3]) << 24)) >= 214e7 ? crypto.randomBytes(4).copy(e2, o2) : (c2.push(s2 % 1e7), o2 += 4);
    o2 = t2 / 4;
  }
  else for (; o2 < t2; ) c2[o2++] = 1e7 * Math.random() | 0;
  for (n3 %= 7, (t2 = c2[--o2]) && n3 && (s2 = p(10, 7 - n3), c2[o2] = (t2 / s2 | 0) * s2); c2[o2] === 0; o2--) c2.pop();
  if (o2 < 0) i2 = 0, c2 = [0];
  else {
    for (i2 = -1; c2[0] === 0; i2 -= 7) c2.shift();
    for (t2 = 1, s2 = c2[0]; s2 >= 10; s2 /= 10) t2++;
    t2 < 7 && (i2 -= 7 - t2);
  }
  return u2.e = i2, u2.d = c2, u2;
}
function qn(n3) {
  return D(n3 = new this(n3), n3.e + 1, this.rounding);
}
function On(n3) {
  return (n3 = new this(n3)).d ? n3.d[0] ? n3.s : 0 * n3.s : n3.s || NaN;
}
function Fn(n3) {
  return new this(n3).sin();
}
function An(n3) {
  return new this(n3).sinh();
}
function Dn(n3) {
  return new this(n3).sqrt();
}
function Zn(n3, e2) {
  return new this(n3).sub(e2);
}
function Sn() {
  var n3 = 0, e2 = arguments, i2 = new this(e2[n3]);
  for (c = !1; i2.s && ++n3 < e2.length; ) i2 = i2.plus(e2[n3]);
  return c = !0, D(i2, this.precision, this.rounding);
}
function Pn(n3) {
  return new this(n3).tan();
}
function Rn(n3) {
  return new this(n3).tanh();
}
function Tn(n3) {
  return D(n3 = new this(n3), n3.e + 1, 1);
}
y[/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")] = y.toString, y[Symbol.toStringTag] = "Decimal";
var _n = y.constructor = (function n2(e2) {
  var i2, r22, t2;
  function s2(n3) {
    var e3, i3, r3, t3 = this;
    if (!(t3 instanceof s2)) return new s2(n3);
    if (t3.constructor = s2, gn(n3)) return t3.s = n3.s, void (c ? !n3.d || n3.e > s2.maxE ? (t3.e = NaN, t3.d = null) : n3.e < s2.minE ? (t3.e = 0, t3.d = [0]) : (t3.e = n3.e, t3.d = n3.d.slice()) : (t3.e = n3.e, t3.d = n3.d ? n3.d.slice() : n3.d));
    if ((r3 = typeof n3) == "number") {
      if (n3 === 0) return t3.s = 1 / n3 < 0 ? -1 : 1, t3.e = 0, void (t3.d = [0]);
      if (n3 < 0 ? (n3 = -n3, t3.s = -1) : t3.s = 1, n3 === ~~n3 && n3 < 1e7) {
        for (e3 = 0, i3 = n3; i3 >= 10; i3 /= 10) e3++;
        return void (c ? e3 > s2.maxE ? (t3.e = NaN, t3.d = null) : e3 < s2.minE ? (t3.e = 0, t3.d = [0]) : (t3.e = e3, t3.d = [n3]) : (t3.e = e3, t3.d = [n3]));
      }
      return 0 * n3 != 0 ? (n3 || (t3.s = NaN), t3.e = NaN, void (t3.d = null)) : B(t3, n3.toString());
    }
    if (r3 === "string") return (i3 = n3.charCodeAt(0)) === 45 ? (n3 = n3.slice(1), t3.s = -1) : (i3 === 43 && (n3 = n3.slice(1)), t3.s = 1), N.test(n3) ? B(t3, n3) : (function(n4, e4) {
      var i4, r4, t4, s3, o2, u2, f2, h2, d2;
      if (e4.indexOf("_") > -1) {
        if (e4 = e4.replace(/(\d)_(?=\d)/g, "$1"), N.test(e4)) return B(n4, e4);
      } else if (e4 === "Infinity" || e4 === "NaN") return +e4 || (n4.s = NaN), n4.e = NaN, n4.d = null, n4;
      if (m.test(e4)) i4 = 16, e4 = e4.toLowerCase();
      else if (w.test(e4)) i4 = 2;
      else {
        if (!v.test(e4)) throw Error(a + e4);
        i4 = 8;
      }
      for ((s3 = e4.search(/p/i)) > 0 ? (f2 = +e4.slice(s3 + 1), e4 = e4.substring(2, s3)) : e4 = e4.slice(2), o2 = (s3 = e4.indexOf(".")) >= 0, r4 = n4.constructor, o2 && (s3 = (u2 = (e4 = e4.replace(".", "")).length) - s3, t4 = L(r4, new r4(i4), s3, 2 * s3)), s3 = d2 = (h2 = F(e4, i4, b)).length - 1; h2[s3] === 0; --s3) h2.pop();
      return s3 < 0 ? new r4(0 * n4.s) : (n4.e = S(h2, d2), n4.d = h2, c = !1, o2 && (n4 = A(n4, t4, 4 * u2)), f2 && (n4 = n4.times(Math.abs(f2) < 54 ? p(2, f2) : _n.pow(2, f2))), c = !0, n4);
    })(t3, n3);
    if (r3 === "bigint") return n3 < 0 ? (n3 = -n3, t3.s = -1) : t3.s = 1, B(t3, n3.toString());
    throw Error(a + n3);
  }
  if (s2.prototype = y, s2.ROUND_UP = 0, s2.ROUND_DOWN = 1, s2.ROUND_CEIL = 2, s2.ROUND_FLOOR = 3, s2.ROUND_HALF_UP = 4, s2.ROUND_HALF_DOWN = 5, s2.ROUND_HALF_EVEN = 6, s2.ROUND_HALF_CEIL = 7, s2.ROUND_HALF_FLOOR = 8, s2.EUCLID = 9, s2.config = s2.set = un, s2.clone = n2, s2.isDecimal = gn, s2.abs = z, s2.acos = G, s2.acosh = K, s2.add = Q, s2.asin = X, s2.asinh = Y, s2.atan = nn, s2.atanh = en, s2.atan2 = rn, s2.cbrt = tn, s2.ceil = sn, s2.clamp = on, s2.cos = cn, s2.cosh = fn, s2.div = an, s2.exp = hn, s2.floor = dn, s2.hypot = ln, s2.ln = pn, s2.log = wn, s2.log10 = vn, s2.log2 = mn, s2.max = Nn, s2.min = bn, s2.mod = En, s2.mul = xn, s2.pow = yn, s2.random = Mn, s2.round = qn, s2.sign = On, s2.sin = Fn, s2.sinh = An, s2.sqrt = Dn, s2.sub = Zn, s2.sum = Sn, s2.tan = Pn, s2.tanh = Rn, s2.trunc = Tn, e2 === void 0 && (e2 = {}), e2 && e2.defaults !== !0) for (t2 = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], i2 = 0; i2 < t2.length; ) e2.hasOwnProperty(r22 = t2[i2++]) || (e2[r22] = this[r22]);
  return s2.config(e2), s2;
})(u);
s = new _n(s), o = new _n(o);

// output/native-current/IconStar-CqGwYoUN.js
var a2 = r("outline", "star", "Star", [["path", { d: "M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873l-6.158 -3.245", key: "svg-0" }]]);

// output/native-current/IconStarFilled-IF4wl3KY.js
var a3 = r("filled", "star-filled", "StarFilled", [["path", { d: "M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z", key: "svg-0" }]]);

export {
  _n,
  a2 as a,
  a3 as a2
};
/*!
 *  decimal.js v10.6.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2025 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
/**
 * @license @tabler/icons-vue v3.46.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
