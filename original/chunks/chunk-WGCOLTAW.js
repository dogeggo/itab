import {
  t
} from "./chunk-C332WR7G.js";
import {
  m
} from "./chunk-USGTF4JI.js";

// output/native-current/vendor-axios-DPPXISNf.js
function e(e4, t3) {
  return function() {
    return e4.apply(t3, arguments);
  };
}
var { toString: t2 } = Object.prototype, { getPrototypeOf: n } = Object, r = /* @__PURE__ */ ((e4) => (n22) => {
  let r2 = t2.call(n22);
  return e4[r2] || (e4[r2] = r2.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), o = (e4) => (e4 = e4.toLowerCase(), (t3) => r(t3) === e4), s = (e4) => (t3) => typeof t3 === e4, { isArray: i } = Array, a = s("undefined"), c = o("ArrayBuffer"), l = s("string"), u = s("function"), f = s("number"), d = (e4) => e4 !== null && typeof e4 == "object", p = (e4) => {
  if (r(e4) !== "object") return !1;
  let t3 = n(e4);
  return !(t3 !== null && t3 !== Object.prototype && Object.getPrototypeOf(t3) !== null || Symbol.toStringTag in e4 || Symbol.iterator in e4);
}, h = o("Date"), m2 = o("File"), y = o("Blob"), b = o("FileList"), g = o("URLSearchParams"), [w, E, R, O] = ["ReadableStream", "Request", "Response", "Headers"].map(o);
function S(e4, t3, { allOwnKeys: n22 = !1 } = {}) {
  if (e4 == null) return;
  let r2, o22;
  if (typeof e4 != "object" && (e4 = [e4]), i(e4)) for (r2 = 0, o22 = e4.length; r2 < o22; r2++) t3.call(null, e4[r2], r2, e4);
  else {
    let o3 = n22 ? Object.getOwnPropertyNames(e4) : Object.keys(e4), s22 = o3.length, i22;
    for (r2 = 0; r2 < s22; r2++) i22 = o3[r2], t3.call(null, e4[i22], i22, e4);
  }
}
function T(e4, t3) {
  t3 = t3.toLowerCase();
  let n22 = Object.keys(e4), r2, o22 = n22.length;
  for (; o22-- > 0; ) if (r2 = n22[o22], t3 === r2.toLowerCase()) return r2;
  return null;
}
var A = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, v = (e4) => !a(e4) && e4 !== A, x = /* @__PURE__ */ ((e4) => (t3) => e4 && t3 instanceof e4)(typeof Uint8Array < "u" && n(Uint8Array)), C = o("HTMLFormElement"), N = (({ hasOwnProperty: e4 }) => (t3, n22) => e4.call(t3, n22))(Object.prototype), j = o("RegExp"), P = (e4, t3) => {
  let n22 = Object.getOwnPropertyDescriptors(e4), r2 = {};
  S(n22, (n3, o22) => {
    let s22;
    (s22 = t3(n3, o22, e4)) !== !1 && (r2[o22] = s22 || n3);
  }), Object.defineProperties(e4, r2);
}, U = o("AsyncFunction"), _ = (F = typeof setImmediate == "function", L = u(A.postMessage), F ? setImmediate : L ? (B = `axios@${Math.random()}`, k = [], A.addEventListener("message", ({ source: e4, data: t3 }) => {
  e4 === A && t3 === B && k.length && k.shift()();
}, !1), (e4) => {
  k.push(e4), A.postMessage(B, "*");
}) : (e4) => setTimeout(e4)), F, L, B, k, D = typeof queueMicrotask < "u" ? queueMicrotask.bind(A) : typeof process < "u" && process.nextTick || _, q = { isArray: i, isArrayBuffer: c, isBuffer: function(e4) {
  return e4 !== null && !a(e4) && e4.constructor !== null && !a(e4.constructor) && u(e4.constructor.isBuffer) && e4.constructor.isBuffer(e4);
}, isFormData: (e4) => {
  let t3;
  return e4 && (typeof FormData == "function" && e4 instanceof FormData || u(e4.append) && ((t3 = r(e4)) === "formdata" || t3 === "object" && u(e4.toString) && e4.toString() === "[object FormData]"));
}, isArrayBufferView: function(e4) {
  let t3;
  return t3 = typeof ArrayBuffer < "u" && ArrayBuffer.isView ? ArrayBuffer.isView(e4) : e4 && e4.buffer && c(e4.buffer), t3;
}, isString: l, isNumber: f, isBoolean: (e4) => e4 === !0 || e4 === !1, isObject: d, isPlainObject: p, isReadableStream: w, isRequest: E, isResponse: R, isHeaders: O, isUndefined: a, isDate: h, isFile: m2, isBlob: y, isRegExp: j, isFunction: u, isStream: (e4) => d(e4) && u(e4.pipe), isURLSearchParams: g, isTypedArray: x, isFileList: b, forEach: S, merge: function e2() {
  let { caseless: t3 } = v(this) && this || {}, n22 = {}, r2 = (r3, o22) => {
    let s22 = t3 && T(n22, o22) || o22;
    p(n22[s22]) && p(r3) ? n22[s22] = e2(n22[s22], r3) : p(r3) ? n22[s22] = e2({}, r3) : i(r3) ? n22[s22] = r3.slice() : n22[s22] = r3;
  };
  for (let o22 = 0, s22 = arguments.length; o22 < s22; o22++) arguments[o22] && S(arguments[o22], r2);
  return n22;
}, extend: (t3, n22, r2, { allOwnKeys: o22 } = {}) => (S(n22, (n3, o3) => {
  r2 && u(n3) ? t3[o3] = e(n3, r2) : t3[o3] = n3;
}, { allOwnKeys: o22 }), t3), trim: (e4) => e4.trim ? e4.trim() : e4.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""), stripBOM: (e4) => (e4.charCodeAt(0) === 65279 && (e4 = e4.slice(1)), e4), inherits: (e4, t3, n22, r2) => {
  e4.prototype = Object.create(t3.prototype, r2), e4.prototype.constructor = e4, Object.defineProperty(e4, "super", { value: t3.prototype }), n22 && Object.assign(e4.prototype, n22);
}, toFlatObject: (e4, t3, r2, o22) => {
  let s22, i22, a2, c2 = {};
  if (t3 = t3 || {}, e4 == null) return t3;
  do {
    for (s22 = Object.getOwnPropertyNames(e4), i22 = s22.length; i22-- > 0; ) a2 = s22[i22], o22 && !o22(a2, e4, t3) || c2[a2] || (t3[a2] = e4[a2], c2[a2] = !0);
    e4 = r2 !== !1 && n(e4);
  } while (e4 && (!r2 || r2(e4, t3)) && e4 !== Object.prototype);
  return t3;
}, kindOf: r, kindOfTest: o, endsWith: (e4, t3, n22) => {
  e4 = String(e4), (n22 === void 0 || n22 > e4.length) && (n22 = e4.length), n22 -= t3.length;
  let r2 = e4.indexOf(t3, n22);
  return r2 !== -1 && r2 === n22;
}, toArray: (e4) => {
  if (!e4) return null;
  if (i(e4)) return e4;
  let t3 = e4.length;
  if (!f(t3)) return null;
  let n22 = new Array(t3);
  for (; t3-- > 0; ) n22[t3] = e4[t3];
  return n22;
}, forEachEntry: (e4, t3) => {
  let n22 = (e4 && e4[Symbol.iterator]).call(e4), r2;
  for (; (r2 = n22.next()) && !r2.done; ) {
    let n3 = r2.value;
    t3.call(e4, n3[0], n3[1]);
  }
}, matchAll: (e4, t3) => {
  let n22, r2 = [];
  for (; (n22 = e4.exec(t3)) !== null; ) r2.push(n22);
  return r2;
}, isHTMLForm: C, hasOwnProperty: N, hasOwnProp: N, reduceDescriptors: P, freezeMethods: (e4) => {
  P(e4, (t3, n22) => {
    if (u(e4) && ["arguments", "caller", "callee"].indexOf(n22) !== -1) return !1;
    let r2 = e4[n22];
    u(r2) && (t3.enumerable = !1, "writable" in t3 ? t3.writable = !1 : t3.set || (t3.set = () => {
      throw Error("Can not rewrite read-only method '" + n22 + "'");
    }));
  });
}, toObjectSet: (e4, t3) => {
  let n22 = {}, r2 = (e5) => {
    e5.forEach((e6) => {
      n22[e6] = !0;
    });
  };
  return i(e4) ? r2(e4) : r2(String(e4).split(t3)), n22;
}, toCamelCase: (e4) => e4.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(e5, t3, n22) {
  return t3.toUpperCase() + n22;
}), noop: () => {
}, toFiniteNumber: (e4, t3) => e4 != null && Number.isFinite(e4 = +e4) ? e4 : t3, findKey: T, global: A, isContextDefined: v, isSpecCompliantForm: function(e4) {
  return !!(e4 && u(e4.append) && e4[Symbol.toStringTag] === "FormData" && e4[Symbol.iterator]);
}, toJSONObject: (e4) => {
  let t3 = new Array(10), n22 = (e5, r2) => {
    if (d(e5)) {
      if (t3.indexOf(e5) >= 0) return;
      if (!("toJSON" in e5)) {
        t3[r2] = e5;
        let o22 = i(e5) ? [] : {};
        return S(e5, (e6, t4) => {
          let s22 = n22(e6, r2 + 1);
          !a(s22) && (o22[t4] = s22);
        }), t3[r2] = void 0, o22;
      }
    }
    return e5;
  };
  return n22(e4, 0);
}, isAsyncFn: U, isThenable: (e4) => e4 && (d(e4) || u(e4)) && u(e4.then) && u(e4.catch), setImmediate: _, asap: D };
function M(e4, t3, n22, r2, o22) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e4, this.name = "AxiosError", t3 && (this.code = t3), n22 && (this.config = n22), r2 && (this.request = r2), o22 && (this.response = o22, this.status = o22.status ? o22.status : null);
}
q.inherits(M, Error, { toJSON: function() {
  return { message: this.message, name: this.name, description: this.description, number: this.number, fileName: this.fileName, lineNumber: this.lineNumber, columnNumber: this.columnNumber, stack: this.stack, config: q.toJSONObject(this.config), code: this.code, status: this.status };
} });
var I = M.prototype, z = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach((e4) => {
  z[e4] = { value: e4 };
}), Object.defineProperties(M, z), Object.defineProperty(I, "isAxiosError", { value: !0 }), M.from = (e4, t3, n22, r2, o22, s22) => {
  let i22 = Object.create(I);
  return q.toFlatObject(e4, i22, function(e5) {
    return e5 !== Error.prototype;
  }, (e5) => e5 !== "isAxiosError"), M.call(i22, e4.message, t3, n22, r2, o22), i22.cause = e4, i22.name = e4.name, s22 && Object.assign(i22, s22), i22;
};
function H(e4) {
  return q.isPlainObject(e4) || q.isArray(e4);
}
function J(e4) {
  return q.endsWith(e4, "[]") ? e4.slice(0, -2) : e4;
}
function W(e4, t3, n22) {
  return e4 ? e4.concat(t3).map(function(e5, t4) {
    return e5 = J(e5), !n22 && t4 ? "[" + e5 + "]" : e5;
  }).join(n22 ? "." : "") : t3;
}
var K = q.toFlatObject(q, {}, null, function(e4) {
  return /^is[A-Z]/.test(e4);
});
function V(e4, t3, n22) {
  if (!q.isObject(e4)) throw new TypeError("target must be an object");
  t3 = t3 || new FormData();
  let r2 = (n22 = q.toFlatObject(n22, { metaTokens: !0, dots: !1, indexes: !1 }, !1, function(e5, t4) {
    return !q.isUndefined(t4[e5]);
  })).metaTokens, o22 = n22.visitor || l2, s22 = n22.dots, i22 = n22.indexes, a2 = (n22.Blob || typeof Blob < "u" && Blob) && q.isSpecCompliantForm(t3);
  if (!q.isFunction(o22)) throw new TypeError("visitor must be a function");
  function c2(e5) {
    if (e5 === null) return "";
    if (q.isDate(e5)) return e5.toISOString();
    if (!a2 && q.isBlob(e5)) throw new M("Blob is not supported. Use a Buffer instead.");
    return q.isArrayBuffer(e5) || q.isTypedArray(e5) ? a2 && typeof Blob == "function" ? new Blob([e5]) : Buffer.from(e5) : e5;
  }
  function l2(e5, n3, o3) {
    let a3 = e5;
    if (e5 && !o3 && typeof e5 == "object") {
      if (q.endsWith(n3, "{}")) n3 = r2 ? n3 : n3.slice(0, -2), e5 = JSON.stringify(e5);
      else if (q.isArray(e5) && (function(e6) {
        return q.isArray(e6) && !e6.some(H);
      })(e5) || (q.isFileList(e5) || q.endsWith(n3, "[]")) && (a3 = q.toArray(e5))) return n3 = J(n3), a3.forEach(function(e6, r3) {
        !q.isUndefined(e6) && e6 !== null && t3.append(i22 === !0 ? W([n3], r3, s22) : i22 === null ? n3 : n3 + "[]", c2(e6));
      }), !1;
    }
    return !!H(e5) || (t3.append(W(o3, n3, s22), c2(e5)), !1);
  }
  let u2 = [], f2 = Object.assign(K, { defaultVisitor: l2, convertValue: c2, isVisitable: H });
  if (!q.isObject(e4)) throw new TypeError("data must be an object");
  return (function e5(n3, r3) {
    if (!q.isUndefined(n3)) {
      if (u2.indexOf(n3) !== -1) throw Error("Circular reference detected in " + r3.join("."));
      u2.push(n3), q.forEach(n3, function(n4, s3) {
        (!(q.isUndefined(n4) || n4 === null) && o22.call(t3, n4, q.isString(s3) ? s3.trim() : s3, r3, f2)) === !0 && e5(n4, r3 ? r3.concat(s3) : [s3]);
      }), u2.pop();
    }
  })(e4), t3;
}
function $(e4) {
  let t3 = { "!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+", "%00": "\0" };
  return encodeURIComponent(e4).replace(/[!'()~]|%20|%00/g, function(e5) {
    return t3[e5];
  });
}
function X(e4, t3) {
  this._pairs = [], e4 && V(e4, this, t3);
}
var G = X.prototype;
function Q(e4) {
  return encodeURIComponent(e4).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Z(e4, t3, n22) {
  if (!t3) return e4;
  let r2 = n22 && n22.encode || Q;
  q.isFunction(n22) && (n22 = { serialize: n22 });
  let o22 = n22 && n22.serialize, s22;
  if (s22 = o22 ? o22(t3, n22) : q.isURLSearchParams(t3) ? t3.toString() : new X(t3, n22).toString(r2), s22) {
    let t4 = e4.indexOf("#");
    t4 !== -1 && (e4 = e4.slice(0, t4)), e4 += (e4.indexOf("?") === -1 ? "?" : "&") + s22;
  }
  return e4;
}
G.append = function(e4, t3) {
  this._pairs.push([e4, t3]);
}, G.toString = function(e4) {
  let t3 = e4 ? function(t4) {
    return e4.call(this, t4, $);
  } : $;
  return this._pairs.map(function(e5) {
    return t3(e5[0]) + "=" + t3(e5[1]);
  }, "").join("&");
};
var Y = class {
  constructor() {
    this.handlers = [];
  }
  use(e4, t3, n22) {
    return this.handlers.push({ fulfilled: e4, rejected: t3, synchronous: !!n22 && n22.synchronous, runWhen: n22 ? n22.runWhen : null }), this.handlers.length - 1;
  }
  eject(e4) {
    this.handlers[e4] && (this.handlers[e4] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(e4) {
    q.forEach(this.handlers, function(t3) {
      t3 !== null && e4(t3);
    });
  }
}, ee = { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 }, te = { isBrowser: !0, classes: { URLSearchParams: typeof URLSearchParams < "u" ? URLSearchParams : X, FormData: typeof FormData < "u" ? FormData : null, Blob: typeof Blob < "u" ? Blob : null }, protocols: ["http", "https", "file", "blob", "url", "data"] }, ne = typeof window < "u" && typeof document < "u", re = typeof navigator == "object" && navigator || void 0, oe = ne && (!re || ["ReactNative", "NativeScript", "NS"].indexOf(re.product) < 0), se = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function", ie = ne && window.location.href || "http://localhost", ae = { .../* @__PURE__ */ Object.freeze(Object.defineProperty({ __proto__: null, hasBrowserEnv: ne, hasStandardBrowserEnv: oe, hasStandardBrowserWebWorkerEnv: se, navigator: re, origin: ie }, Symbol.toStringTag, { value: "Module" })), ...te };
function ce(e4) {
  function t3(e5, n22, r2, o22) {
    let s22 = e5[o22++];
    if (s22 === "__proto__") return !0;
    let i22 = Number.isFinite(+s22), a2 = o22 >= e5.length;
    return s22 = !s22 && q.isArray(r2) ? r2.length : s22, a2 ? (q.hasOwnProp(r2, s22) ? r2[s22] = [r2[s22], n22] : r2[s22] = n22, !i22) : (r2[s22] && q.isObject(r2[s22]) || (r2[s22] = []), t3(e5, n22, r2[s22], o22) && q.isArray(r2[s22]) && (r2[s22] = (function(e6) {
      let t4 = {}, n3 = Object.keys(e6), r3, o3 = n3.length, s3;
      for (r3 = 0; r3 < o3; r3++) s3 = n3[r3], t4[s3] = e6[s3];
      return t4;
    })(r2[s22])), !i22);
  }
  if (q.isFormData(e4) && q.isFunction(e4.entries)) {
    let n22 = {};
    return q.forEachEntry(e4, (e5, r2) => {
      t3((function(e6) {
        return q.matchAll(/\w+|\[(\w*)]/g, e6).map((e7) => e7[0] === "[]" ? "" : e7[1] || e7[0]);
      })(e5), r2, n22, 0);
    }), n22;
  }
  return null;
}
var le = { transitional: ee, adapter: ["xhr", "http", "fetch"], transformRequest: [function(e4, t3) {
  let n22 = t3.getContentType() || "", r2 = n22.indexOf("application/json") > -1, o22 = q.isObject(e4);
  if (o22 && q.isHTMLForm(e4) && (e4 = new FormData(e4)), q.isFormData(e4)) return r2 ? JSON.stringify(ce(e4)) : e4;
  if (q.isArrayBuffer(e4) || q.isBuffer(e4) || q.isStream(e4) || q.isFile(e4) || q.isBlob(e4) || q.isReadableStream(e4)) return e4;
  if (q.isArrayBufferView(e4)) return e4.buffer;
  if (q.isURLSearchParams(e4)) return t3.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e4.toString();
  let s22;
  if (o22) {
    if (n22.indexOf("application/x-www-form-urlencoded") > -1) return (function(e5, t4) {
      return V(e5, new ae.classes.URLSearchParams(), Object.assign({ visitor: function(e6, t5, n3, r3) {
        return ae.isNode && q.isBuffer(e6) ? (this.append(t5, e6.toString("base64")), !1) : r3.defaultVisitor.apply(this, arguments);
      } }, t4));
    })(e4, this.formSerializer).toString();
    if ((s22 = q.isFileList(e4)) || n22.indexOf("multipart/form-data") > -1) {
      let t4 = this.env && this.env.FormData;
      return V(s22 ? { "files[]": e4 } : e4, t4 && new t4(), this.formSerializer);
    }
  }
  return o22 || r2 ? (t3.setContentType("application/json", !1), (function(e5, t4, n3) {
    if (q.isString(e5)) try {
      return (t4 || JSON.parse)(e5), q.trim(e5);
    } catch (r3) {
      if (r3.name !== "SyntaxError") throw r3;
    }
    return (n3 || JSON.stringify)(e5);
  })(e4)) : e4;
}], transformResponse: [function(e4) {
  let t3 = this.transitional || le.transitional, n22 = t3 && t3.forcedJSONParsing, r2 = this.responseType === "json";
  if (q.isResponse(e4) || q.isReadableStream(e4)) return e4;
  if (e4 && q.isString(e4) && (n22 && !this.responseType || r2)) {
    let n3 = !(t3 && t3.silentJSONParsing) && r2;
    try {
      return JSON.parse(e4);
    } catch (o22) {
      if (n3)
        throw o22.name === "SyntaxError" ? M.from(o22, M.ERR_BAD_RESPONSE, this, null, this.response) : o22;
    }
  }
  return e4;
}], timeout: 0, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN", maxContentLength: -1, maxBodyLength: -1, env: { FormData: ae.classes.FormData, Blob: ae.classes.Blob }, validateStatus: function(e4) {
  return e4 >= 200 && e4 < 300;
}, headers: { common: { Accept: "application/json, text/plain, */*", "Content-Type": void 0 } } };
q.forEach(["delete", "get", "head", "post", "put", "patch"], (e4) => {
  le.headers[e4] = {};
});
var ue = q.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]), fe = /* @__PURE__ */ Symbol("internals");
function de(e4) {
  return e4 && String(e4).trim().toLowerCase();
}
function pe(e4) {
  return e4 === !1 || e4 == null ? e4 : q.isArray(e4) ? e4.map(pe) : String(e4);
}
function he(e4, t3, n22, r2, o22) {
  return q.isFunction(r2) ? r2.call(this, t3, n22) : (o22 && (t3 = n22), q.isString(t3) ? q.isString(r2) ? t3.indexOf(r2) !== -1 : q.isRegExp(r2) ? r2.test(t3) : void 0 : void 0);
}
var me = class {
  constructor(e4) {
    e4 && this.set(e4);
  }
  set(e4, t3, n22) {
    let r2 = this;
    function o22(e5, t4, n3) {
      let o3 = de(t4);
      if (!o3) throw new Error("header name must be a non-empty string");
      let s3 = q.findKey(r2, o3);
      (!s3 || r2[s3] === void 0 || n3 === !0 || n3 === void 0 && r2[s3] !== !1) && (r2[s3 || t4] = pe(e5));
    }
    let s22 = (e5, t4) => q.forEach(e5, (e6, n3) => o22(e6, n3, t4));
    if (q.isPlainObject(e4) || e4 instanceof this.constructor) s22(e4, t3);
    else if (q.isString(e4) && (e4 = e4.trim()) && !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e4.trim())) s22(((e5) => {
      let t4 = {}, n3, r3, o3;
      return e5 && e5.split(`
`).forEach(function(e6) {
        o3 = e6.indexOf(":"), n3 = e6.substring(0, o3).trim().toLowerCase(), r3 = e6.substring(o3 + 1).trim(), !n3 || t4[n3] && ue[n3] || (n3 === "set-cookie" ? t4[n3] ? t4[n3].push(r3) : t4[n3] = [r3] : t4[n3] = t4[n3] ? t4[n3] + ", " + r3 : r3);
      }), t4;
    })(e4), t3);
    else if (q.isHeaders(e4)) for (let [i22, a2] of e4.entries()) o22(a2, i22, n22);
    else e4 != null && o22(t3, e4, n22);
    return this;
  }
  get(e4, t3) {
    if (e4 = de(e4)) {
      let n22 = q.findKey(this, e4);
      if (n22) {
        let e5 = this[n22];
        if (!t3) return e5;
        if (t3 === !0) return (function(e6) {
          let t4 = /* @__PURE__ */ Object.create(null), n3 = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g, r2;
          for (; r2 = n3.exec(e6); ) t4[r2[1]] = r2[2];
          return t4;
        })(e5);
        if (q.isFunction(t3)) return t3.call(this, e5, n22);
        if (q.isRegExp(t3)) return t3.exec(e5);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e4, t3) {
    if (e4 = de(e4)) {
      let n22 = q.findKey(this, e4);
      return !(!n22 || this[n22] === void 0 || t3 && !he(0, this[n22], n22, t3));
    }
    return !1;
  }
  delete(e4, t3) {
    let n22 = this, r2 = !1;
    function o22(e5) {
      if (e5 = de(e5)) {
        let o3 = q.findKey(n22, e5);
        !o3 || t3 && !he(0, n22[o3], o3, t3) || (delete n22[o3], r2 = !0);
      }
    }
    return q.isArray(e4) ? e4.forEach(o22) : o22(e4), r2;
  }
  clear(e4) {
    let t3 = Object.keys(this), n22 = t3.length, r2 = !1;
    for (; n22--; ) {
      let o22 = t3[n22];
      e4 && !he(0, this[o22], o22, e4, !0) || (delete this[o22], r2 = !0);
    }
    return r2;
  }
  normalize(e4) {
    let t3 = this, n22 = {};
    return q.forEach(this, (r2, o22) => {
      let s22 = q.findKey(n22, o22);
      if (s22) return t3[s22] = pe(r2), void delete t3[o22];
      let i22 = e4 ? (function(e5) {
        return e5.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e6, t4, n3) => t4.toUpperCase() + n3);
      })(o22) : String(o22).trim();
      i22 !== o22 && delete t3[o22], t3[i22] = pe(r2), n22[i22] = !0;
    }), this;
  }
  concat(...e4) {
    return this.constructor.concat(this, ...e4);
  }
  toJSON(e4) {
    let t3 = /* @__PURE__ */ Object.create(null);
    return q.forEach(this, (n22, r2) => {
      n22 != null && n22 !== !1 && (t3[r2] = e4 && q.isArray(n22) ? n22.join(", ") : n22);
    }), t3;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([e4, t3]) => e4 + ": " + t3).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(e4) {
    return e4 instanceof this ? e4 : new this(e4);
  }
  static concat(e4, ...t3) {
    let n22 = new this(e4);
    return t3.forEach((e5) => n22.set(e5)), n22;
  }
  static accessor(e4) {
    let t3 = (this[fe] = this[fe] = { accessors: {} }).accessors, n22 = this.prototype;
    function r2(e5) {
      let r3 = de(e5);
      t3[r3] || ((function(e6, t4) {
        let n3 = q.toCamelCase(" " + t4);
        ["get", "set", "has"].forEach((r4) => {
          Object.defineProperty(e6, r4 + n3, { value: function(e7, n4, o22) {
            return this[r4].call(this, t4, e7, n4, o22);
          }, configurable: !0 });
        });
      })(n22, e5), t3[r3] = !0);
    }
    return q.isArray(e4) ? e4.forEach(r2) : r2(e4), this;
  }
};
function ye(e4, t3) {
  let n22 = this || le, r2 = t3 || n22, o22 = me.from(r2.headers), s22 = r2.data;
  return q.forEach(e4, function(e5) {
    s22 = e5.call(n22, s22, o22.normalize(), t3 ? t3.status : void 0);
  }), o22.normalize(), s22;
}
function be(e4) {
  return !(!e4 || !e4.__CANCEL__);
}
function ge(e4, t3, n22) {
  M.call(this, e4 ?? "canceled", M.ERR_CANCELED, t3, n22), this.name = "CanceledError";
}
function we(e4, t3, n22) {
  let r2 = n22.config.validateStatus;
  n22.status && r2 && !r2(n22.status) ? t3(new M("Request failed with status code " + n22.status, [M.ERR_BAD_REQUEST, M.ERR_BAD_RESPONSE][Math.floor(n22.status / 100) - 4], n22.config, n22.request, n22)) : e4(n22);
}
me.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]), q.reduceDescriptors(me.prototype, ({ value: e4 }, t3) => {
  let n22 = t3[0].toUpperCase() + t3.slice(1);
  return { get: () => e4, set(e5) {
    this[n22] = e5;
  } };
}), q.freezeMethods(me), q.inherits(ge, M, { __CANCEL__: !0 });
var Ee = (e4, t3, n22 = 3) => {
  let r2 = 0, o22 = (function(e5, t4) {
    e5 = e5 || 10;
    let n3 = new Array(e5), r3 = new Array(e5), o3, s22 = 0, i22 = 0;
    return t4 = t4 !== void 0 ? t4 : 1e3, function(a2) {
      let c2 = Date.now(), l2 = r3[i22];
      o3 || (o3 = c2), n3[s22] = a2, r3[s22] = c2;
      let u2 = i22, f2 = 0;
      for (; u2 !== s22; ) f2 += n3[u2++], u2 %= e5;
      if (s22 = (s22 + 1) % e5, s22 === i22 && (i22 = (i22 + 1) % e5), c2 - o3 < t4) return;
      let d2 = l2 && c2 - l2;
      return d2 ? Math.round(1e3 * f2 / d2) : void 0;
    };
  })(50, 250);
  return (function(e5, t4) {
    let n3, r3, o3 = 0, s22 = 1e3 / t4, i22 = (t5, s3 = Date.now()) => {
      o3 = s3, n3 = null, r3 && (clearTimeout(r3), r3 = null), e5.apply(null, t5);
    };
    return [(...e6) => {
      let t5 = Date.now(), a2 = t5 - o3;
      a2 >= s22 ? i22(e6, t5) : (n3 = e6, r3 || (r3 = setTimeout(() => {
        r3 = null, i22(n3);
      }, s22 - a2)));
    }, () => n3 && i22(n3)];
  })((n3) => {
    let s22 = n3.loaded, i22 = n3.lengthComputable ? n3.total : void 0, a2 = s22 - r2, c2 = o22(a2);
    r2 = s22, e4({ loaded: s22, total: i22, progress: i22 ? s22 / i22 : void 0, bytes: a2, rate: c2 || void 0, estimated: c2 && i22 && s22 <= i22 ? (i22 - s22) / c2 : void 0, event: n3, lengthComputable: i22 != null, [t3 ? "download" : "upload"]: !0 });
  }, n22);
}, Re = (e4, t3) => {
  let n22 = e4 != null;
  return [(r2) => t3[0]({ lengthComputable: n22, total: e4, loaded: r2 }), t3[1]];
}, Oe = (e4) => (...t3) => q.asap(() => e4(...t3)), Se = ae.hasStandardBrowserEnv ? /* @__PURE__ */ ((e4, t3) => (n22) => (n22 = new URL(n22, ae.origin), e4.protocol === n22.protocol && e4.host === n22.host && (t3 || e4.port === n22.port)))(new URL(ae.origin), ae.navigator && /(msie|trident)/i.test(ae.navigator.userAgent)) : () => !0, Te = ae.hasStandardBrowserEnv ? { write(e4, t3, n22, r2, o22, s22) {
  let i22 = [e4 + "=" + encodeURIComponent(t3)];
  q.isNumber(n22) && i22.push("expires=" + new Date(n22).toGMTString()), q.isString(r2) && i22.push("path=" + r2), q.isString(o22) && i22.push("domain=" + o22), s22 === !0 && i22.push("secure"), document.cookie = i22.join("; ");
}, read(e4) {
  let t3 = document.cookie.match(new RegExp("(^|;\\s*)(" + e4 + ")=([^;]*)"));
  return t3 ? decodeURIComponent(t3[3]) : null;
}, remove(e4) {
  this.write(e4, "", Date.now() - 864e5);
} } : { write() {
}, read: () => null, remove() {
} };
function Ae(e4, t3, n22) {
  let r2 = !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t3);
  return e4 && r2 || n22 == 0 ? (function(e5, t4) {
    return t4 ? e5.replace(/\/?\/$/, "") + "/" + t4.replace(/^\/+/, "") : e5;
  })(e4, t3) : t3;
}
var ve = (e4) => e4 instanceof me ? { ...e4 } : e4;
function xe(e4, t3) {
  t3 = t3 || {};
  let n22 = {};
  function r2(e5, t4, n3, r3) {
    return q.isPlainObject(e5) && q.isPlainObject(t4) ? q.merge.call({ caseless: r3 }, e5, t4) : q.isPlainObject(t4) ? q.merge({}, t4) : q.isArray(t4) ? t4.slice() : t4;
  }
  function o22(e5, t4, n3, o3) {
    return q.isUndefined(t4) ? q.isUndefined(e5) ? void 0 : r2(void 0, e5, 0, o3) : r2(e5, t4, 0, o3);
  }
  function s22(e5, t4) {
    if (!q.isUndefined(t4)) return r2(void 0, t4);
  }
  function i22(e5, t4) {
    return q.isUndefined(t4) ? q.isUndefined(e5) ? void 0 : r2(void 0, e5) : r2(void 0, t4);
  }
  function a2(n3, o3, s3) {
    return s3 in t3 ? r2(n3, o3) : s3 in e4 ? r2(void 0, n3) : void 0;
  }
  let c2 = { url: s22, method: s22, data: s22, baseURL: i22, transformRequest: i22, transformResponse: i22, paramsSerializer: i22, timeout: i22, timeoutMessage: i22, withCredentials: i22, withXSRFToken: i22, adapter: i22, responseType: i22, xsrfCookieName: i22, xsrfHeaderName: i22, onUploadProgress: i22, onDownloadProgress: i22, decompress: i22, maxContentLength: i22, maxBodyLength: i22, beforeRedirect: i22, transport: i22, httpAgent: i22, httpsAgent: i22, cancelToken: i22, socketPath: i22, responseEncoding: i22, validateStatus: a2, headers: (e5, t4, n3) => o22(ve(e5), ve(t4), 0, !0) };
  return q.forEach(Object.keys(Object.assign({}, e4, t3)), function(r3) {
    let s3 = c2[r3] || o22, i3 = s3(e4[r3], t3[r3], r3);
    q.isUndefined(i3) && s3 !== a2 || (n22[r3] = i3);
  }), n22;
}
var Ce = (e4) => {
  let t3 = xe({}, e4), n22, { data: r2, withXSRFToken: o22, xsrfHeaderName: s22, xsrfCookieName: i22, headers: a2, auth: c2 } = t3;
  if (t3.headers = a2 = me.from(a2), t3.url = Z(Ae(t3.baseURL, t3.url, t3.allowAbsoluteUrls), e4.params, e4.paramsSerializer), c2 && a2.set("Authorization", "Basic " + btoa((c2.username || "") + ":" + (c2.password ? unescape(encodeURIComponent(c2.password)) : ""))), q.isFormData(r2)) {
    if (ae.hasStandardBrowserEnv || ae.hasStandardBrowserWebWorkerEnv) a2.setContentType(void 0);
    else if ((n22 = a2.getContentType()) !== !1) {
      let [e5, ...t4] = n22 ? n22.split(";").map((e6) => e6.trim()).filter(Boolean) : [];
      a2.setContentType([e5 || "multipart/form-data", ...t4].join("; "));
    }
  }
  if (ae.hasStandardBrowserEnv && (o22 && q.isFunction(o22) && (o22 = o22(t3)), o22 || o22 !== !1 && Se(t3.url))) {
    let e5 = s22 && i22 && Te.read(i22);
    e5 && a2.set(s22, e5);
  }
  return t3;
}, Ne = typeof XMLHttpRequest < "u" && function(e4) {
  return new Promise(function(t3, n22) {
    let r2 = Ce(e4), o22 = r2.data, s22 = me.from(r2.headers).normalize(), i22, a2, c2, l2, u2, { responseType: f2, onUploadProgress: d2, onDownloadProgress: p22 } = r2;
    function h2() {
      l2 && l2(), u2 && u2(), r2.cancelToken && r2.cancelToken.unsubscribe(i22), r2.signal && r2.signal.removeEventListener("abort", i22);
    }
    let m22 = new XMLHttpRequest();
    function y2() {
      if (!m22) return;
      let r3 = me.from("getAllResponseHeaders" in m22 && m22.getAllResponseHeaders());
      we(function(e5) {
        t3(e5), h2();
      }, function(e5) {
        n22(e5), h2();
      }, { data: f2 && f2 !== "text" && f2 !== "json" ? m22.response : m22.responseText, status: m22.status, statusText: m22.statusText, headers: r3, config: e4, request: m22 }), m22 = null;
    }
    m22.open(r2.method.toUpperCase(), r2.url, !0), m22.timeout = r2.timeout, "onloadend" in m22 ? m22.onloadend = y2 : m22.onreadystatechange = function() {
      m22 && m22.readyState === 4 && (m22.status !== 0 || m22.responseURL && m22.responseURL.indexOf("file:") === 0) && setTimeout(y2);
    }, m22.onabort = function() {
      m22 && (n22(new M("Request aborted", M.ECONNABORTED, e4, m22)), m22 = null);
    }, m22.onerror = function() {
      n22(new M("Network Error", M.ERR_NETWORK, e4, m22)), m22 = null;
    }, m22.ontimeout = function() {
      let t4 = r2.timeout ? "timeout of " + r2.timeout + "ms exceeded" : "timeout exceeded", o3 = r2.transitional || ee;
      r2.timeoutErrorMessage && (t4 = r2.timeoutErrorMessage), n22(new M(t4, o3.clarifyTimeoutError ? M.ETIMEDOUT : M.ECONNABORTED, e4, m22)), m22 = null;
    }, o22 === void 0 && s22.setContentType(null), "setRequestHeader" in m22 && q.forEach(s22.toJSON(), function(e5, t4) {
      m22.setRequestHeader(t4, e5);
    }), q.isUndefined(r2.withCredentials) || (m22.withCredentials = !!r2.withCredentials), f2 && f2 !== "json" && (m22.responseType = r2.responseType), p22 && ([c2, u2] = Ee(p22, !0), m22.addEventListener("progress", c2)), d2 && m22.upload && ([a2, l2] = Ee(d2), m22.upload.addEventListener("progress", a2), m22.upload.addEventListener("loadend", l2)), (r2.cancelToken || r2.signal) && (i22 = (t4) => {
      m22 && (n22(!t4 || t4.type ? new ge(null, e4, m22) : t4), m22.abort(), m22 = null);
    }, r2.cancelToken && r2.cancelToken.subscribe(i22), r2.signal && (r2.signal.aborted ? i22() : r2.signal.addEventListener("abort", i22)));
    let b2 = (function(e5) {
      let t4 = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e5);
      return t4 && t4[1] || "";
    })(r2.url);
    b2 && ae.protocols.indexOf(b2) === -1 ? n22(new M("Unsupported protocol " + b2 + ":", M.ERR_BAD_REQUEST, e4)) : m22.send(o22 || null);
  });
}, je = (e4, t3) => {
  let { length: n22 } = e4 = e4 ? e4.filter(Boolean) : [];
  if (t3 || n22) {
    let n3, r2 = new AbortController(), o22 = function(e5) {
      if (!n3) {
        n3 = !0, i22();
        let t4 = e5 instanceof Error ? e5 : this.reason;
        r2.abort(t4 instanceof M ? t4 : new ge(t4 instanceof Error ? t4.message : t4));
      }
    }, s22 = t3 && setTimeout(() => {
      s22 = null, o22(new M(`timeout ${t3} of ms exceeded`, M.ETIMEDOUT));
    }, t3), i22 = () => {
      e4 && (s22 && clearTimeout(s22), s22 = null, e4.forEach((e5) => {
        e5.unsubscribe ? e5.unsubscribe(o22) : e5.removeEventListener("abort", o22);
      }), e4 = null);
    };
    e4.forEach((e5) => e5.addEventListener("abort", o22));
    let { signal: a2 } = r2;
    return a2.unsubscribe = () => q.asap(i22), a2;
  }
}, Pe = function* (e4, t3) {
  let n22 = e4.byteLength;
  if (n22 < t3) return void (yield e4);
  let r2, o22 = 0;
  for (; o22 < n22; ) r2 = o22 + t3, yield e4.slice(o22, r2), o22 = r2;
}, Ue = async function* (e4) {
  if (e4[Symbol.asyncIterator]) return void (yield* e4);
  let t3 = e4.getReader();
  try {
    for (; ; ) {
      let { done: e5, value: n22 } = await t3.read();
      if (e5) break;
      yield n22;
    }
  } finally {
    await t3.cancel();
  }
}, _e = (e4, t3, n22, r2) => {
  let o22 = (async function* (e5, t4) {
    for await (let n3 of Ue(e5)) yield* Pe(n3, t4);
  })(e4, t3), s22, i22 = 0, a2 = (e5) => {
    s22 || (s22 = !0, r2 && r2(e5));
  };
  return new ReadableStream({ async pull(e5) {
    try {
      let { done: t4, value: r3 } = await o22.next();
      if (t4) return a2(), void e5.close();
      let s3 = r3.byteLength;
      if (n22) {
        let e6 = i22 += s3;
        n22(e6);
      }
      e5.enqueue(new Uint8Array(r3));
    } catch (t4) {
      throw a2(t4), t4;
    }
  }, cancel: (e5) => (a2(e5), o22.return()) }, { highWaterMark: 2 });
}, Fe = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Le = Fe && typeof ReadableStream == "function", Be = Fe && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e4) => (t3) => e4.encode(t3))(new TextEncoder()) : async (e4) => new Uint8Array(await new Response(e4).arrayBuffer())), ke = (e4, ...t3) => {
  try {
    return !!e4(...t3);
  } catch {
    return !1;
  }
}, De = Le && ke(() => {
  let e4 = !1, t3 = new Request(ae.origin, { body: new ReadableStream(), method: "POST", get duplex() {
    return e4 = !0, "half";
  } }).headers.has("Content-Type");
  return e4 && !t3;
}), qe = Le && ke(() => q.isReadableStream(new Response("").body)), Me = { stream: qe && ((e4) => e4.body) }, Ie;
Fe && (Ie = new Response(), ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e4) => {
  !Me[e4] && (Me[e4] = q.isFunction(Ie[e4]) ? (t3) => t3[e4]() : (t3, n22) => {
    throw new M(`Response type '${e4}' is not supported`, M.ERR_NOT_SUPPORT, n22);
  });
}));
var ze = async (e4, t3) => q.toFiniteNumber(e4.getContentLength()) ?? (async (e5) => e5 == null ? 0 : q.isBlob(e5) ? e5.size : q.isSpecCompliantForm(e5) ? (await new Request(ae.origin, { method: "POST", body: e5 }).arrayBuffer()).byteLength : q.isArrayBufferView(e5) || q.isArrayBuffer(e5) ? e5.byteLength : (q.isURLSearchParams(e5) && (e5 += ""), q.isString(e5) ? (await Be(e5)).byteLength : void 0))(t3), He = { http: null, xhr: Ne, fetch: Fe && (async (e4) => {
  let { url: t3, method: n22, data: r2, signal: o22, cancelToken: s22, timeout: i22, onDownloadProgress: a2, onUploadProgress: c2, responseType: l2, headers: u2, withCredentials: f2 = "same-origin", fetchOptions: d2 } = Ce(e4);
  l2 = l2 ? (l2 + "").toLowerCase() : "text";
  let p22, h2 = je([o22, s22 && s22.toAbortSignal()], i22), m22 = h2 && h2.unsubscribe && (() => {
    h2.unsubscribe();
  }), y2;
  try {
    if (c2 && De && n22 !== "get" && n22 !== "head" && (y2 = await ze(u2, r2)) !== 0) {
      let e5, n3 = new Request(t3, { method: "POST", body: r2, duplex: "half" });
      if (q.isFormData(r2) && (e5 = n3.headers.get("content-type")) && u2.setContentType(e5), n3.body) {
        let [e6, t4] = Re(y2, Ee(Oe(c2)));
        r2 = _e(n3.body, 65536, e6, t4);
      }
    }
    q.isString(f2) || (f2 = f2 ? "include" : "omit");
    let o3 = "credentials" in Request.prototype;
    p22 = new Request(t3, { ...d2, signal: h2, method: n22.toUpperCase(), headers: u2.normalize().toJSON(), body: r2, duplex: "half", credentials: o3 ? f2 : void 0 });
    let s3 = await fetch(p22), i3 = qe && (l2 === "stream" || l2 === "response");
    if (qe && (a2 || i3 && m22)) {
      let e5 = {};
      ["status", "statusText", "headers"].forEach((t5) => {
        e5[t5] = s3[t5];
      });
      let t4 = q.toFiniteNumber(s3.headers.get("content-length")), [n3, r3] = a2 && Re(t4, Ee(Oe(a2), !0)) || [];
      s3 = new Response(_e(s3.body, 65536, n3, () => {
        r3 && r3(), m22 && m22();
      }), e5);
    }
    l2 = l2 || "text";
    let b2 = await Me[q.findKey(Me, l2) || "text"](s3, e4);
    return !i3 && m22 && m22(), await new Promise((t4, n3) => {
      we(t4, n3, { data: b2, headers: me.from(s3.headers), status: s3.status, statusText: s3.statusText, config: e4, request: p22 });
    });
  } catch (b2) {
    throw m22 && m22(), b2 && b2.name === "TypeError" && /fetch/i.test(b2.message) ? Object.assign(new M("Network Error", M.ERR_NETWORK, e4, p22), { cause: b2.cause || b2 }) : M.from(b2, b2 && b2.code, e4, p22);
  }
}) };
q.forEach(He, (e4, t3) => {
  if (e4) {
    try {
      Object.defineProperty(e4, "name", { value: t3 });
    } catch {
    }
    Object.defineProperty(e4, "adapterName", { value: t3 });
  }
});
var Je = (e4) => `- ${e4}`, We = (e4) => q.isFunction(e4) || e4 === null || e4 === !1, Ke = (e4) => {
  e4 = q.isArray(e4) ? e4 : [e4];
  let { length: t3 } = e4, n22, r2, o22 = {};
  for (let s22 = 0; s22 < t3; s22++) {
    let t4;
    if (n22 = e4[s22], r2 = n22, !We(n22) && (r2 = He[(t4 = String(n22)).toLowerCase()], r2 === void 0)) throw new M(`Unknown adapter '${t4}'`);
    if (r2) break;
    o22[t4 || "#" + s22] = r2;
  }
  if (!r2) {
    let e5 = Object.entries(o22).map(([e6, t4]) => `adapter ${e6} ` + (t4 === !1 ? "is not supported by the environment" : "is not available in the build"));
    throw new M("There is no suitable adapter to dispatch the request " + (t3 ? e5.length > 1 ? `since :
` + e5.map(Je).join(`
`) : " " + Je(e5[0]) : "as no adapter specified"), "ERR_NOT_SUPPORT");
  }
  return r2;
};
function Ve(e4) {
  if (e4.cancelToken && e4.cancelToken.throwIfRequested(), e4.signal && e4.signal.aborted) throw new ge(null, e4);
}
function $e(e4) {
  return Ve(e4), e4.headers = me.from(e4.headers), e4.data = ye.call(e4, e4.transformRequest), ["post", "put", "patch"].indexOf(e4.method) !== -1 && e4.headers.setContentType("application/x-www-form-urlencoded", !1), Ke(e4.adapter || le.adapter)(e4).then(function(t3) {
    return Ve(e4), t3.data = ye.call(e4, e4.transformResponse, t3), t3.headers = me.from(t3.headers), t3;
  }, function(t3) {
    return be(t3) || (Ve(e4), t3 && t3.response && (t3.response.data = ye.call(e4, e4.transformResponse, t3.response), t3.response.headers = me.from(t3.response.headers))), Promise.reject(t3);
  });
}
var Xe = "1.8.3", Ge = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e4, t3) => {
  Ge[e4] = function(n22) {
    return typeof n22 === e4 || "a" + (t3 < 1 ? "n " : " ") + e4;
  };
});
var Qe = {};
Ge.transitional = function(e4, t3, n22) {
  return (r2, o22, s22) => {
    if (e4 === !1) throw new M((function(e5, t4) {
      return "[Axios v1.8.3] Transitional option '" + e5 + "'" + t4 + (n22 ? ". " + n22 : "");
    })(o22, " has been removed" + (t3 ? " in " + t3 : "")), M.ERR_DEPRECATED);
    return t3 && !Qe[o22] && (Qe[o22] = !0), !e4 || e4(r2, o22, s22);
  };
}, Ge.spelling = function(e4) {
  return (e5, t3) => !0;
};
var Ze = { assertOptions: function(e4, t3, n22) {
  if (typeof e4 != "object") throw new M("options must be an object", M.ERR_BAD_OPTION_VALUE);
  let r2 = Object.keys(e4), o22 = r2.length;
  for (; o22-- > 0; ) {
    let s22 = r2[o22], i22 = t3[s22];
    if (i22) {
      let t4 = e4[s22], n3 = t4 === void 0 || i22(t4, s22, e4);
      if (n3 !== !0) throw new M("option " + s22 + " must be " + n3, M.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n22 !== !0) throw new M("Unknown option " + s22, M.ERR_BAD_OPTION);
  }
}, validators: Ge }, Ye = Ze.validators, et = class {
  constructor(e4) {
    this.defaults = e4, this.interceptors = { request: new Y(), response: new Y() };
  }
  async request(e4, t3) {
    try {
      return await this._request(e4, t3);
    } catch (n22) {
      if (n22 instanceof Error) {
        let e5 = {};
        Error.captureStackTrace ? Error.captureStackTrace(e5) : e5 = new Error();
        let t4 = e5.stack ? e5.stack.replace(/^.+\n/, "") : "";
        try {
          n22.stack ? t4 && !String(n22.stack).endsWith(t4.replace(/^.+\n.+\n/, "")) && (n22.stack += `
` + t4) : n22.stack = t4;
        } catch {
        }
      }
      throw n22;
    }
  }
  _request(e4, t3) {
    typeof e4 == "string" ? (t3 = t3 || {}).url = e4 : t3 = e4 || {}, t3 = xe(this.defaults, t3);
    let { transitional: n22, paramsSerializer: r2, headers: o22 } = t3;
    n22 !== void 0 && Ze.assertOptions(n22, { silentJSONParsing: Ye.transitional(Ye.boolean), forcedJSONParsing: Ye.transitional(Ye.boolean), clarifyTimeoutError: Ye.transitional(Ye.boolean) }, !1), r2 != null && (q.isFunction(r2) ? t3.paramsSerializer = { serialize: r2 } : Ze.assertOptions(r2, { encode: Ye.function, serialize: Ye.function }, !0)), t3.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? t3.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : t3.allowAbsoluteUrls = !0), Ze.assertOptions(t3, { baseUrl: Ye.spelling("baseURL"), withXsrfToken: Ye.spelling("withXSRFToken") }, !0), t3.method = (t3.method || this.defaults.method || "get").toLowerCase();
    let s22 = o22 && q.merge(o22.common, o22[t3.method]);
    o22 && q.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (e5) => {
      delete o22[e5];
    }), t3.headers = me.concat(s22, o22);
    let i22 = [], a2 = !0;
    this.interceptors.request.forEach(function(e5) {
      typeof e5.runWhen == "function" && e5.runWhen(t3) === !1 || (a2 = a2 && e5.synchronous, i22.unshift(e5.fulfilled, e5.rejected));
    });
    let c2 = [], l2;
    this.interceptors.response.forEach(function(e5) {
      c2.push(e5.fulfilled, e5.rejected);
    });
    let u2, f2 = 0;
    if (!a2) {
      let e5 = [$e.bind(this), void 0];
      for (e5.unshift.apply(e5, i22), e5.push.apply(e5, c2), u2 = e5.length, l2 = Promise.resolve(t3); f2 < u2; ) l2 = l2.then(e5[f2++], e5[f2++]);
      return l2;
    }
    u2 = i22.length;
    let d2 = t3;
    for (f2 = 0; f2 < u2; ) {
      let e5 = i22[f2++], t4 = i22[f2++];
      try {
        d2 = e5(d2);
      } catch (p22) {
        t4.call(this, p22);
        break;
      }
    }
    try {
      l2 = $e.call(this, d2);
    } catch (p22) {
      return Promise.reject(p22);
    }
    for (f2 = 0, u2 = c2.length; f2 < u2; ) l2 = l2.then(c2[f2++], c2[f2++]);
    return l2;
  }
  getUri(e4) {
    return Z(Ae((e4 = xe(this.defaults, e4)).baseURL, e4.url, e4.allowAbsoluteUrls), e4.params, e4.paramsSerializer);
  }
};
q.forEach(["delete", "get", "head", "options"], function(e4) {
  et.prototype[e4] = function(t3, n22) {
    return this.request(xe(n22 || {}, { method: e4, url: t3, data: (n22 || {}).data }));
  };
}), q.forEach(["post", "put", "patch"], function(e4) {
  function t3(t4) {
    return function(n22, r2, o22) {
      return this.request(xe(o22 || {}, { method: e4, headers: t4 ? { "Content-Type": "multipart/form-data" } : {}, url: n22, data: r2 }));
    };
  }
  et.prototype[e4] = t3(), et.prototype[e4 + "Form"] = t3(!0);
});
var tt = { Continue: 100, SwitchingProtocols: 101, Processing: 102, EarlyHints: 103, Ok: 200, Created: 201, Accepted: 202, NonAuthoritativeInformation: 203, NoContent: 204, ResetContent: 205, PartialContent: 206, MultiStatus: 207, AlreadyReported: 208, ImUsed: 226, MultipleChoices: 300, MovedPermanently: 301, Found: 302, SeeOther: 303, NotModified: 304, UseProxy: 305, Unused: 306, TemporaryRedirect: 307, PermanentRedirect: 308, BadRequest: 400, Unauthorized: 401, PaymentRequired: 402, Forbidden: 403, NotFound: 404, MethodNotAllowed: 405, NotAcceptable: 406, ProxyAuthenticationRequired: 407, RequestTimeout: 408, Conflict: 409, Gone: 410, LengthRequired: 411, PreconditionFailed: 412, PayloadTooLarge: 413, UriTooLong: 414, UnsupportedMediaType: 415, RangeNotSatisfiable: 416, ExpectationFailed: 417, ImATeapot: 418, MisdirectedRequest: 421, UnprocessableEntity: 422, Locked: 423, FailedDependency: 424, TooEarly: 425, UpgradeRequired: 426, PreconditionRequired: 428, TooManyRequests: 429, RequestHeaderFieldsTooLarge: 431, UnavailableForLegalReasons: 451, InternalServerError: 500, NotImplemented: 501, BadGateway: 502, ServiceUnavailable: 503, GatewayTimeout: 504, HttpVersionNotSupported: 505, VariantAlsoNegotiates: 506, InsufficientStorage: 507, LoopDetected: 508, NotExtended: 510, NetworkAuthenticationRequired: 511 };
Object.entries(tt).forEach(([e4, t3]) => {
  tt[t3] = e4;
});
var nt = (function t22(n22) {
  let r2 = new et(n22), o22 = e(et.prototype.request, r2);
  return q.extend(o22, et.prototype, r2, { allOwnKeys: !0 }), q.extend(o22, r2, null, { allOwnKeys: !0 }), o22.create = function(e4) {
    return t22(xe(n22, e4));
  }, o22;
})(le);
nt.Axios = et, nt.CanceledError = ge, nt.CancelToken = class e3 {
  constructor(e4) {
    if (typeof e4 != "function") throw new TypeError("executor must be a function.");
    let t3;
    this.promise = new Promise(function(e5) {
      t3 = e5;
    });
    let n22 = this;
    this.promise.then((e5) => {
      if (!n22._listeners) return;
      let t4 = n22._listeners.length;
      for (; t4-- > 0; ) n22._listeners[t4](e5);
      n22._listeners = null;
    }), this.promise.then = (e5) => {
      let t4, r2 = new Promise((e6) => {
        n22.subscribe(e6), t4 = e6;
      }).then(e5);
      return r2.cancel = function() {
        n22.unsubscribe(t4);
      }, r2;
    }, e4(function(e5, r2, o22) {
      n22.reason || (n22.reason = new ge(e5, r2, o22), t3(n22.reason));
    });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(e4) {
    this.reason ? e4(this.reason) : this._listeners ? this._listeners.push(e4) : this._listeners = [e4];
  }
  unsubscribe(e4) {
    if (!this._listeners) return;
    let t3 = this._listeners.indexOf(e4);
    t3 !== -1 && this._listeners.splice(t3, 1);
  }
  toAbortSignal() {
    let e4 = new AbortController(), t3 = (t4) => {
      e4.abort(t4);
    };
    return this.subscribe(t3), e4.signal.unsubscribe = () => this.unsubscribe(t3), e4.signal;
  }
  static source() {
    let t3;
    return { token: new e3(function(e4) {
      t3 = e4;
    }), cancel: t3 };
  }
}, nt.isCancel = be, nt.VERSION = Xe, nt.toFormData = V, nt.AxiosError = M, nt.Cancel = nt.CanceledError, nt.all = function(e4) {
  return Promise.all(e4);
}, nt.spread = function(e4) {
  return function(t3) {
    return e4.apply(null, t3);
  };
}, nt.isAxiosError = function(e4) {
  return q.isObject(e4) && e4.isAxiosError === !0;
}, nt.mergeConfig = xe, nt.AxiosHeaders = me, nt.formToJSON = (e4) => ce(q.isHTMLForm(e4) ? new FormData(e4) : e4), nt.getAdapter = Ke, nt.HttpStatusCode = tt, nt.default = nt;
var { Axios: rt, AxiosError: ot, CanceledError: st, isCancel: it, CancelToken: at, VERSION: ct, all: lt, Cancel: ut, isAxiosError: ft, spread: dt, toFormData: pt, AxiosHeaders: ht, HttpStatusCode: mt, formToJSON: yt, getAdapter: bt, mergeConfig: gt } = nt;

// output/native-current/getClientId-CgbGS3_s.js
var i2 = async () => {
  let e4 = Date.now().toString();
  return (await t(() => import("./aes-9v_iPI_z-EXLGUAEB.js").then((t23) => t23.a), [])).encrypt(e4, "itab1314").toString();
};

// output/native-current/version-BWHaB9R4.js
var s2 = "2.3.13", o2 = { version: s2 };

// output/native-current/baseRequest-Yj83uNvm.js
var n2 = nt.create({ baseURL: m, timeout: 15e3 }), p2;
(p2 = n2).interceptors.request.use(async (e22) => {
  let r2 = await i2();
  return e22.headers.signaturekey = r2, e22.headers.version = o2.version, e22.headers.mode = "itab", e22.method == "get" && (e22.params = { lang: "cn", ...e22.params }), e22;
}, (e22) => {
  Promise.reject(e22);
}), p2.interceptors.response.use((e22) => {
  let s22 = e22.data;
  return s22.code == 401 ? Promise.reject(s22.msg) : s22.code == 500 || s22.code == 501 || s22.code == 413 ? (t(() => import("./vendor-element-plus-CRt18gND-MNDHTQD2.js").then((e32) => e32.al), ["assets/vendor-element-plus-WnleHQiG.css"]).then((e32) => {
    e32.ElMessage({ type: "error", message: s22.msg, duration: 3e3, showClose: !0 });
  }), Promise.reject(s22.msg)) : s22;
}, (e22) => Promise.reject(e22));

export {
  nt,
  n2 as n
};
