import {
  De,
  Le,
  Oe
} from "./chunk-LEVEZLTX.js";
import {
  re
} from "./chunk-YQ4PBQUM.js";

// output/native-current/vendor-ffmpeg-Dj02sDgP.js
var t, e, a, s, i, h, E, l, o, r = Object.defineProperty, n = (t22) => {
  throw TypeError(t22);
}, d = (t22, e22, a2) => ((t3, e3, a3) => e3 in t3 ? r(t3, e3, { enumerable: !0, configurable: !0, writable: !0, value: a3 }) : t3[e3] = a3)(t22, typeof e22 != "symbol" ? e22 + "" : e22, a2), c = (t22, e22, a2) => e22.has(t22) || n("Cannot " + a2), R = (t22, e22, a2) => (c(t22, e22, "read from private field"), a2 ? a2.call(t22) : e22.get(t22)), p = (t22, e22, a2) => e22.has(t22) ? n("Cannot add the same private member more than once") : e22 instanceof WeakSet ? e22.add(t22) : e22.set(t22, a2), D = (t22, e22, a2, s2) => (c(t22, e22, "write to private field"), s2 ? s2.call(t22, a2) : e22.set(t22, a2), a2);
(o = l || (l = {})).LOAD = "LOAD", o.EXEC = "EXEC", o.FFPROBE = "FFPROBE", o.WRITE_FILE = "WRITE_FILE", o.READ_FILE = "READ_FILE", o.DELETE_FILE = "DELETE_FILE", o.RENAME = "RENAME", o.CREATE_DIR = "CREATE_DIR", o.LIST_DIR = "LIST_DIR", o.DELETE_DIR = "DELETE_DIR", o.ERROR = "ERROR", o.DOWNLOAD = "DOWNLOAD", o.PROGRESS = "PROGRESS", o.LOG = "LOG", o.MOUNT = "MOUNT", o.UNMOUNT = "UNMOUNT";
var O = /* @__PURE__ */ (() => {
  let t22 = 0;
  return () => t22++;
})(), F = new Error("ffmpeg is not loaded, call `await ffmpeg.load()` first"), L = new Error("called FFmpeg.terminate()"), I = class {
  constructor() {
    p(this, t, null), p(this, e, {}), p(this, a, {}), p(this, s, []), p(this, i, []), d(this, "loaded", !1), p(this, h, () => {
      R(this, t) && (R(this, t).onmessage = ({ data: { id: t22, type: h22, data: E22 } }) => {
        switch (h22) {
          case l.LOAD:
            this.loaded = !0, R(this, e)[t22](E22);
            break;
          case l.MOUNT:
          case l.UNMOUNT:
          case l.EXEC:
          case l.FFPROBE:
          case l.WRITE_FILE:
          case l.READ_FILE:
          case l.DELETE_FILE:
          case l.RENAME:
          case l.CREATE_DIR:
          case l.LIST_DIR:
          case l.DELETE_DIR:
            R(this, e)[t22](E22);
            break;
          case l.LOG:
            R(this, s).forEach((t3) => t3(E22));
            break;
          case l.PROGRESS:
            R(this, i).forEach((t3) => t3(E22));
            break;
          case l.ERROR:
            R(this, a)[t22](E22);
        }
        delete R(this, e)[t22], delete R(this, a)[t22];
      });
    }), p(this, E, ({ type: s2, data: i2 }, h22 = [], E22) => R(this, t) ? new Promise((l22, o22) => {
      let r2 = O();
      R(this, t) && R(this, t).postMessage({ id: r2, type: s2, data: i2 }, h22), R(this, e)[r2] = l22, R(this, a)[r2] = o22, E22?.addEventListener("abort", () => {
        o22(new DOMException(`Message # ${r2} was aborted`, "AbortError"));
      }, { once: !0 });
    }) : Promise.reject(F)), d(this, "load", ({ classWorkerURL: e22, ...a2 } = {}, { signal: s2 } = {}) => (R(this, t) || (D(this, t, e22 ? new Worker(new URL(e22, self.location.href), { type: "module" }) : new Worker(new URL("./worker.js", self.location.href), { type: "module" })), R(this, h).call(this)), R(this, E).call(this, { type: l.LOAD, data: a2 }, void 0, s2))), d(this, "exec", (t22, e22 = -1, { signal: a2 } = {}) => R(this, E).call(this, { type: l.EXEC, data: { args: t22, timeout: e22 } }, void 0, a2)), d(this, "ffprobe", (t22, e22 = -1, { signal: a2 } = {}) => R(this, E).call(this, { type: l.FFPROBE, data: { args: t22, timeout: e22 } }, void 0, a2)), d(this, "terminate", () => {
      let s2 = Object.keys(R(this, a));
      for (let t22 of s2) R(this, a)[t22](L), delete R(this, a)[t22], delete R(this, e)[t22];
      R(this, t) && (R(this, t).terminate(), D(this, t, null), this.loaded = !1);
    }), d(this, "writeFile", (t22, e22, { signal: a2 } = {}) => {
      let s2 = [];
      return e22 instanceof Uint8Array && s2.push(e22.buffer), R(this, E).call(this, { type: l.WRITE_FILE, data: { path: t22, data: e22 } }, s2, a2);
    }), d(this, "mount", (t22, e22, a2) => R(this, E).call(this, { type: l.MOUNT, data: { fsType: t22, options: e22, mountPoint: a2 } }, [])), d(this, "unmount", (t22) => R(this, E).call(this, { type: l.UNMOUNT, data: { mountPoint: t22 } }, [])), d(this, "readFile", (t22, e22 = "binary", { signal: a2 } = {}) => R(this, E).call(this, { type: l.READ_FILE, data: { path: t22, encoding: e22 } }, void 0, a2)), d(this, "deleteFile", (t22, { signal: e22 } = {}) => R(this, E).call(this, { type: l.DELETE_FILE, data: { path: t22 } }, void 0, e22)), d(this, "rename", (t22, e22, { signal: a2 } = {}) => R(this, E).call(this, { type: l.RENAME, data: { oldPath: t22, newPath: e22 } }, void 0, a2)), d(this, "createDir", (t22, { signal: e22 } = {}) => R(this, E).call(this, { type: l.CREATE_DIR, data: { path: t22 } }, void 0, e22)), d(this, "listDir", (t22, { signal: e22 } = {}) => R(this, E).call(this, { type: l.LIST_DIR, data: { path: t22 } }, void 0, e22)), d(this, "deleteDir", (t22, { signal: e22 } = {}) => R(this, E).call(this, { type: l.DELETE_DIR, data: { path: t22 } }, void 0, e22));
  }
  on(t22, e22) {
    t22 === "log" ? R(this, s).push(e22) : t22 === "progress" && R(this, i).push(e22);
  }
  off(t22, e22) {
    t22 === "log" ? D(this, s, R(this, s).filter((t3) => t3 !== e22)) : t22 === "progress" && D(this, i, R(this, i).filter((t3) => t3 !== e22));
  }
}, f, T;
t = /* @__PURE__ */ new WeakMap(), e = /* @__PURE__ */ new WeakMap(), a = /* @__PURE__ */ new WeakMap(), s = /* @__PURE__ */ new WeakMap(), i = /* @__PURE__ */ new WeakMap(), h = /* @__PURE__ */ new WeakMap(), E = /* @__PURE__ */ new WeakMap(), (T = f || (f = {})).MEMFS = "MEMFS", T.NODEFS = "NODEFS", T.NODERAWFS = "NODERAWFS", T.IDBFS = "IDBFS", T.WORKERFS = "WORKERFS", T.PROXYFS = "PROXYFS";

// output/native-current/index-B6LC9LWS.js
var e2 = Object.defineProperty, t2 = (t22, i2, r2) => ((t3, i3, r3) => i3 in t3 ? e2(t3, i3, { enumerable: !0, configurable: !0, writable: !0, value: r3 }) : t3[i3] = r3)(t22, typeof i2 != "symbol" ? i2 + "" : i2, r2);
function o2(e22) {
  if (!e22) throw new Error("Assertion failed.");
}
var c2 = (e22) => {
  let t22 = (e22 % 360 + 360) % 360;
  if (t22 === 0 || t22 === 90 || t22 === 180 || t22 === 270) return t22;
  throw new Error(`Invalid rotation ${e22}.`);
}, l2 = (e22) => e22 && e22[e22.length - 1], d2 = (e22) => e22 >= 0 && e22 < 2 ** 32, u = (e22) => {
  let t22 = 0;
  for (; e22.readBits(1) === 0 && t22 < 32; ) t22++;
  if (t22 >= 32) throw new Error("Invalid exponential-Golomb code.");
  return (1 << t22) - 1 + e22.readBits(t22);
}, h2 = (e22) => {
  let t22 = u(e22);
  return 1 & t22 ? t22 + 1 >> 1 : -(t22 >> 1);
}, m = (e22) => e22.constructor === Uint8Array ? e22 : ArrayBuffer.isView(e22) ? new Uint8Array(e22.buffer, e22.byteOffset, e22.byteLength) : new Uint8Array(e22), f2 = (e22) => e22.constructor === DataView ? e22 : ArrayBuffer.isView(e22) ? new DataView(e22.buffer, e22.byteOffset, e22.byteLength) : new DataView(e22), p2 = new TextDecoder(), g = new TextEncoder(), k = (e22) => Object.fromEntries(Object.entries(e22).map(([e3, t22]) => [t22, e3])), w = { bt709: 1, bt470bg: 5, smpte170m: 6, bt2020: 9, smpte432: 12 }, b = k(w), y = { bt709: 1, smpte170m: 6, linear: 8, "iec61966-2-1": 13, pq: 16, hlg: 18 }, v = k(y), T2 = { rgb: 0, bt709: 1, bt470bg: 5, smpte170m: 6, "bt2020-ncl": 9 }, S = k(T2), P = (e22) => !!(e22 && e22.primaries && e22.transfer && e22.matrix && e22.fullRange !== void 0), C = (e22) => e22 instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && e22 instanceof SharedArrayBuffer || ArrayBuffer.isView(e22), x = class {
  constructor() {
    this.currentPromise = Promise.resolve(), this.pending = 0;
  }
  async acquire() {
    let e22, t22 = new Promise((t3) => {
      let i3 = !1;
      e22 = () => {
        i3 || (t3(), this.pending--, i3 = !0);
      };
    }), i2 = this.currentPromise;
    return this.currentPromise = t22, this.pending++, await i2, e22;
  }
}, E2 = /^[0-9a-fA-F]+$/, I2 = (e22) => [...e22].map((e3) => e3.toString(16).padStart(2, "0")).join(""), _ = (e22) => (e22 = (e22 = (e22 = (e22 = (e22 = e22 >> 1 & 1431655765 | (1431655765 & e22) << 1) >> 2 & 858993459 | (858993459 & e22) << 2) >> 4 & 252645135 | (252645135 & e22) << 4) >> 8 & 16711935 | (16711935 & e22) << 8) >> 16 & 65535 | (65535 & e22) << 16) >>> 0, B = (e22, t22, i2) => {
  let r2 = 0, a2 = e22.length - 1, s2 = -1;
  for (; r2 <= a2; ) {
    let n2 = r2 + a2 >> 1, o22 = i2(e22[n2]);
    o22 === t22 ? (s2 = n2, a2 = n2 - 1) : o22 < t22 ? r2 = n2 + 1 : a2 = n2 - 1;
  }
  return s2;
}, A = (e22, t22, i2) => {
  let r2 = 0, a2 = e22.length - 1, s2 = -1;
  for (; r2 <= a2; ) {
    let n2 = r2 + (a2 - r2 + 1) / 2 | 0;
    i2(e22[n2]) <= t22 ? (s2 = n2, r2 = n2 + 1) : a2 = n2 - 1;
  }
  return s2;
}, M = (e22, t22, i2) => {
  let r2 = A(e22, i2(t22), i2);
  e22.splice(r2 + 1, 0, t22);
}, F2 = () => {
  let e22, t22;
  return { promise: new Promise((i2, r2) => {
    e22 = i2, t22 = r2;
  }), resolve: e22, reject: t22 };
}, R2 = (e22, t22) => {
  let i2 = e22.indexOf(t22);
  i2 !== -1 && e22.splice(i2, 1);
}, D2 = (e22, t22) => {
  for (let i2 = e22.length - 1; i2 >= 0; i2--) if (t22(e22[i2])) return e22[i2];
}, O2 = (e22, t22) => {
  for (let i2 = e22.length - 1; i2 >= 0; i2--) if (t22(e22[i2])) return i2;
  return -1;
}, N = (e22) => {
  throw new Error(`Unexpected value: ${e22}`);
}, z = (e22, t22, i2) => {
  let r2 = e22.getUint8(t22), a2 = e22.getUint8(t22 + 1), s2 = e22.getUint8(t22 + 2);
  return i2 ? r2 | a2 << 8 | s2 << 16 : r2 << 16 | a2 << 8 | s2;
}, L2 = (e22, t22, i2, r2) => {
  i2 >>>= 0, i2 &= 16777215, r2 ? (e22.setUint8(t22, 255 & i2), e22.setUint8(t22 + 1, i2 >>> 8 & 255), e22.setUint8(t22 + 2, i2 >>> 16 & 255)) : (e22.setUint8(t22, i2 >>> 16 & 255), e22.setUint8(t22 + 1, i2 >>> 8 & 255), e22.setUint8(t22 + 2, 255 & i2));
}, U = (e22, t22, i2) => Math.max(t22, Math.min(i2, e22)), W = "und", q = (e22) => {
  let t22 = Math.round(e22);
  return Math.abs(e22 / t22 - 1) < 10 * Number.EPSILON ? t22 : e22;
}, V = (e22, t22) => Math.round(e22 / t22) * t22, H = (e22, t22) => Math.round(e22 * t22) / t22, $ = (e22, t22) => Math.floor(e22 / t22) * t22, j = (e22, t22) => Math.floor(e22 * t22) / t22, K = (e22) => {
  let t22 = 0;
  for (; e22 !== 0; ) e22 &= e22 - 1, t22++;
  return t22;
}, Q = /^[a-z]{3}$/, G = (e22) => Q.test(e22), X = 1e6 * (1 + Number.EPSILON), Y = class {
  constructor() {
    this.currentPromise = Promise.resolve();
  }
  call(e22) {
    return this.currentPromise = this.currentPromise.then(e22);
  }
}, J = null, Z = () => {
  var e22;
  return J !== null ? J : J = !(typeof navigator > "u" || !((e22 = navigator.vendor) != null && e22.match(/apple/i) || /AppleWebKit/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) || /\b(iPad|iPhone|iPod)\b/.test(navigator.userAgent)));
}, ee = null, te = () => {
  var e22;
  return ee !== null ? ee : ee = typeof navigator < "u" && ((e22 = navigator.userAgent) == null ? void 0 : e22.includes("Firefox"));
}, ie = null, re2 = () => {
  var e22;
  return ie !== null ? ie : ie = !(typeof navigator > "u" || !((e22 = navigator.vendor) != null && e22.includes("Google Inc")) && !/Chrome/.test(navigator.userAgent));
}, ae = null, se = () => {
  if (ae !== null) return ae;
  if (typeof navigator > "u") return null;
  let e22 = /\bChrome\/(\d+)/.exec(navigator.userAgent);
  return e22 ? ae = Number(e22[1]) : null;
}, ne = (e22) => globalThis.isSecureContext === void 0 || globalThis.isSecureContext ? `${e22} is not available in this environment.` : `${e22} is not available in this environment; this may be because this page is running in an insecure context. Try serving your page over HTTPS or use localhost.`, oe = (e22, t22) => e22 !== -1 ? e22 : t22, ce = (e22, t22, i2, r2) => e22 <= r2 && i2 <= t22, le = function* (e22) {
  for (let t22 in e22) {
    let i2 = e22[t22];
    i2 !== void 0 && (yield { key: t22, value: i2 });
  }
}, de = (e22) => {
  switch (e22.toLowerCase()) {
    case "image/jpeg":
    case "image/jpg":
      return ".jpg";
    case "image/png":
      return ".png";
    case "image/gif":
      return ".gif";
    case "image/webp":
      return ".webp";
    case "image/bmp":
      return ".bmp";
    case "image/svg+xml":
      return ".svg";
    case "image/tiff":
      return ".tiff";
    case "image/avif":
      return ".avif";
    case "image/x-icon":
    case "image/vnd.microsoft.icon":
      return ".ico";
    default:
      return null;
  }
}, ue = (e22) => {
  let t22 = atob(e22), i2 = new Uint8Array(t22.length);
  for (let r2 = 0; r2 < t22.length; r2++) i2[r2] = t22.charCodeAt(r2);
  return i2;
}, he = (e22, t22) => {
  if (e22.length !== t22.length) return !1;
  for (let i2 = 0; i2 < e22.length; i2++) if (e22[i2] !== t22[i2]) return !1;
  return !0;
}, me = () => {
  Symbol.dispose ?? (Symbol.dispose = /* @__PURE__ */ Symbol("Symbol.dispose"));
}, fe = (e22) => typeof e22 == "number" && !Number.isNaN(e22), pe = (e22, t22) => {
  if (t22.includes("://")) return t22;
  if (e22.includes("://")) {
    let t3 = e22.indexOf("?");
    t3 !== -1 && (e22 = e22.slice(0, t3));
  }
  let i2;
  if (t22.startsWith("/")) {
    let r3 = e22.indexOf("://");
    if (r3 === -1) i2 = t22;
    else {
      let a3 = e22.indexOf("/", r3 + 3);
      i2 = a3 === -1 ? e22 + t22 : e22.slice(0, a3) + t22;
    }
  } else {
    let r3 = e22.lastIndexOf("/");
    i2 = r3 === -1 ? t22 : e22.slice(0, r3 + 1) + t22;
  }
  let r2 = "", a2 = i2.indexOf("://");
  if (a2 !== -1) {
    let e3 = i2.indexOf("/", a2 + 3);
    e3 !== -1 && (r2 = i2.slice(0, e3), i2 = i2.slice(e3));
  }
  let s2 = i2.split("/"), n2 = [];
  for (let o22 of s2) o22 === ".." ? n2.pop() : o22 !== "." && n2.push(o22);
  return r2 + n2.join("/");
}, ge = (e22, t22) => {
  let i2 = 0;
  for (let r2 = 0; r2 < e22.length; r2++) t22(e22[r2]) && i2++;
  return i2;
}, ke = (e22, t22) => {
  let i2 = -1, r2 = 1 / 0;
  for (let a2 = 0; a2 < e22.length; a2++) {
    let s2 = t22(e22[a2]);
    s2 < r2 && (r2 = s2, i2 = a2);
  }
  return i2;
}, we = (e22) => {
  o2(Number.isInteger(e22.num)), o2(Number.isInteger(e22.den)), o2(e22.den !== 0);
  let t22 = Math.abs(e22.num), i2 = Math.abs(e22.den);
  for (; i2 !== 0; ) {
    let e3 = t22 % i2;
    t22 = i2, i2 = e3;
  }
  let r2 = t22 || 1;
  return { num: e22.num / r2, den: e22.den / r2 };
}, be = (e22, t22) => {
  if (typeof e22 != "object" || !e22) throw new TypeError(`${t22} must be an object.`);
  if (!Number.isInteger(e22.left) || e22.left < 0) throw new TypeError(`${t22}.left must be a non-negative integer.`);
  if (!Number.isInteger(e22.top) || e22.top < 0) throw new TypeError(`${t22}.top must be a non-negative integer.`);
  if (!Number.isInteger(e22.width) || e22.width < 0) throw new TypeError(`${t22}.width must be a non-negative integer.`);
  if (!Number.isInteger(e22.height) || e22.height < 0) throw new TypeError(`${t22}.height must be a non-negative integer.`);
}, ye = (e22) => new Promise((t22) => setTimeout(t22, e22)), ve = (e22) => Array.isArray(e22) ? e22 : [e22], Te = class {
  constructor() {
    this._listeners = /* @__PURE__ */ new Map();
  }
  on(e22, t22, i2) {
    this._listeners.has(e22) || this._listeners.set(e22, /* @__PURE__ */ new Set());
    let r2 = { fn: t22, once: i2?.once ?? !1 };
    return this._listeners.get(e22).add(r2), () => {
      var t3;
      (t3 = this._listeners.get(e22)) == null || t3.delete(r2);
    };
  }
  _emit(...e22) {
    let [t22, i2] = e22, r2 = this._listeners.get(t22);
    if (r2) for (let s2 of r2) {
      try {
        s2.fn(i2);
      } catch {
      }
      s2.once && r2.delete(s2);
    }
  }
}, Se = (e22) => 2 * Math.ceil(e22 / 2), Pe = (e22) => e22 !== null && typeof e22 == "object" && Object.getPrototypeOf(e22) === Object.prototype && Object.values(e22).every((e3) => typeof e3 == "string");
var Ce, xe;
(xe = Ce || (Ce = {}))[xe.Silent = 0] = "Silent", xe[xe.Errors = 1] = "Errors", xe[xe.Warnings = 2] = "Warnings", xe[xe.Info = 3] = "Info";
var Ee = class _Ee {
  constructor() {
  }
  static get level() {
    return _Ee._level;
  }
  static set level(e22) {
    if (e22 !== Ce.Silent && e22 !== Ce.Errors && e22 !== Ce.Warnings && e22 !== Ce.Info) throw new TypeError("Invalid log level. Use one of the values of the LogLevel enum.");
    _Ee._level = e22;
  }
  static get _emitter() {
    return _Ee._emitterInstance ?? (_Ee._emitterInstance = new Te());
  }
  static on(e22, t22, i2) {
    return _Ee._emitter.on(e22, t22, i2);
  }
  static _error(...e22) {
    _Ee._emitter._emit("error", e22), _Ee._level, Ce.Errors;
  }
  static _warn(...e22) {
    _Ee._emitter._emit("warn", e22), _Ee._level, Ce.Warnings;
  }
  static _info(...e22) {
    _Ee._emitter._emit("info", e22), _Ee._level, Ce.Info;
  }
};
Ee._level = Ce.Info, Ee._emitterInstance = null;
var Ie = class {
  constructor(e22, t22) {
    if (this.data = e22, this.mimeType = t22, !(e22 instanceof Uint8Array)) throw new TypeError("data must be a Uint8Array.");
    if (typeof t22 != "string") throw new TypeError("mimeType must be a string.");
  }
}, _e = class {
  constructor(e22, t22, i2, r2) {
    if (this.data = e22, this.mimeType = t22, this.name = i2, this.description = r2, !(e22 instanceof Uint8Array)) throw new TypeError("data must be a Uint8Array.");
    if (t22 !== void 0 && typeof t22 != "string") throw new TypeError("mimeType, when provided, must be a string.");
    if (i2 !== void 0 && typeof i2 != "string") throw new TypeError("name, when provided, must be a string.");
    if (r2 !== void 0 && typeof r2 != "string") throw new TypeError("description, when provided, must be a string.");
  }
}, Be = (e22) => {
  if (!e22 || typeof e22 != "object") throw new TypeError("tags must be an object.");
  if (e22.title !== void 0 && typeof e22.title != "string") throw new TypeError("tags.title, when provided, must be a string.");
  if (e22.description !== void 0 && typeof e22.description != "string") throw new TypeError("tags.description, when provided, must be a string.");
  if (e22.artist !== void 0 && typeof e22.artist != "string") throw new TypeError("tags.artist, when provided, must be a string.");
  if (e22.album !== void 0 && typeof e22.album != "string") throw new TypeError("tags.album, when provided, must be a string.");
  if (e22.albumArtist !== void 0 && typeof e22.albumArtist != "string") throw new TypeError("tags.albumArtist, when provided, must be a string.");
  if (e22.trackNumber !== void 0 && (!Number.isInteger(e22.trackNumber) || e22.trackNumber <= 0)) throw new TypeError("tags.trackNumber, when provided, must be a positive integer.");
  if (e22.tracksTotal !== void 0 && (!Number.isInteger(e22.tracksTotal) || e22.tracksTotal <= 0)) throw new TypeError("tags.tracksTotal, when provided, must be a positive integer.");
  if (e22.discNumber !== void 0 && (!Number.isInteger(e22.discNumber) || e22.discNumber <= 0)) throw new TypeError("tags.discNumber, when provided, must be a positive integer.");
  if (e22.discsTotal !== void 0 && (!Number.isInteger(e22.discsTotal) || e22.discsTotal <= 0)) throw new TypeError("tags.discsTotal, when provided, must be a positive integer.");
  if (e22.genre !== void 0 && typeof e22.genre != "string") throw new TypeError("tags.genre, when provided, must be a string.");
  if (e22.date !== void 0 && (!(e22.date instanceof Date) || Number.isNaN(e22.date.getTime()))) throw new TypeError("tags.date, when provided, must be a valid Date.");
  if (e22.lyrics !== void 0 && typeof e22.lyrics != "string") throw new TypeError("tags.lyrics, when provided, must be a string.");
  if (e22.images !== void 0) {
    if (!Array.isArray(e22.images)) throw new TypeError("tags.images, when provided, must be an array.");
    for (let t22 of e22.images) {
      if (!t22 || typeof t22 != "object") throw new TypeError("Each image in tags.images must be an object.");
      if (!(t22.data instanceof Uint8Array)) throw new TypeError("Each image.data must be a Uint8Array.");
      if (typeof t22.mimeType != "string") throw new TypeError("Each image.mimeType must be a string.");
      if (!["coverFront", "coverBack", "unknown"].includes(t22.kind)) throw new TypeError("Each image.kind must be 'coverFront', 'coverBack', or 'unknown'.");
    }
  }
  if (e22.comment !== void 0 && typeof e22.comment != "string") throw new TypeError("tags.comment, when provided, must be a string.");
  if (e22.raw !== void 0) {
    if (!e22.raw || typeof e22.raw != "object") throw new TypeError("tags.raw, when provided, must be an object.");
    for (let t22 of Object.values(e22.raw)) if (!(t22 === null || typeof t22 == "string" || t22 instanceof Uint8Array || t22 instanceof Ie || t22 instanceof _e || Pe(t22))) throw new TypeError("Each value in tags.raw must be a string, Uint8Array, RichImageData, AttachedFile, Record<string, string>, or null.");
  }
}, Ae = { default: !0, primary: !0, forced: !1, original: !1, commentary: !1, hearingImpaired: !1, visuallyImpaired: !1 };
var Me = class _Me {
  constructor(e22) {
    this.bytes = e22, this.pos = 0;
  }
  seekToByte(e22) {
    this.pos = 8 * e22;
  }
  readBit() {
    let e22 = Math.floor(this.pos / 8), t22 = this.bytes[e22] ?? 0, i2 = 7 - (7 & this.pos), r2 = (t22 & 1 << i2) >> i2;
    return this.pos++, r2;
  }
  readBits(e22) {
    if (e22 === 1) return this.readBit();
    let t22 = 0;
    for (let i2 = 0; i2 < e22; i2++) t22 <<= 1, t22 |= this.readBit();
    return t22;
  }
  writeBits(e22, t22) {
    let i2 = this.pos + e22;
    for (let r2 = this.pos; r2 < i2; r2++) {
      let e3 = Math.floor(r2 / 8), a2 = this.bytes[e3], s2 = 7 - (7 & r2);
      a2 &= ~(1 << s2), a2 |= (t22 & 1 << i2 - r2 - 1) >> i2 - r2 - 1 << s2, this.bytes[e3] = a2;
    }
    this.pos = i2;
  }
  readAlignedByte() {
    if (this.pos % 8 != 0) throw new Error("Bitstream is not byte-aligned.");
    let e22 = this.pos / 8, t22 = this.bytes[e22] ?? 0;
    return this.pos += 8, t22;
  }
  skipBits(e22) {
    this.pos += e22;
  }
  getBitsLeft() {
    return 8 * this.bytes.length - this.pos;
  }
  clone() {
    let e22 = new _Me(this.bytes);
    return e22.pos = this.pos, e22;
  }
};
var Fe = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350], Re = [-1, 1, 2, 3, 4, 5, 6, 8], De2 = (e22) => {
  if (!e22 || e22.byteLength < 2) throw new TypeError("AAC description must be at least 2 bytes long.");
  let t22 = new Me(e22), i2 = t22.readBits(5);
  i2 === 31 && (i2 = 32 + t22.readBits(6));
  let r2 = t22.readBits(4), a2 = null;
  r2 === 15 ? a2 = t22.readBits(24) : r2 < Fe.length && (a2 = Fe[r2]);
  let s2 = t22.readBits(4), n2 = null;
  return s2 >= 1 && s2 <= 7 && (n2 = Re[s2]), { objectType: i2, frequencyIndex: r2, sampleRate: a2, channelConfiguration: s2, numberOfChannels: n2 };
}, Oe2 = (e22) => {
  let t22 = Fe.indexOf(e22.sampleRate), i2 = null;
  t22 === -1 && (t22 = 15, i2 = e22.sampleRate);
  let r2 = Re.indexOf(e22.numberOfChannels);
  if (r2 === -1) throw new TypeError(`Unsupported number of channels: ${e22.numberOfChannels}`);
  let a2 = 13;
  e22.objectType >= 32 && (a2 += 6), t22 === 15 && (a2 += 24);
  let s2 = Math.ceil(a2 / 8), n2 = new Uint8Array(s2), o22 = new Me(n2);
  return e22.objectType < 32 ? o22.writeBits(5, e22.objectType) : (o22.writeBits(5, 31), o22.writeBits(6, e22.objectType - 32)), o22.writeBits(4, t22), t22 === 15 && o22.writeBits(24, i2), o22.writeBits(4, r2), n2;
}, Ne = ["avc", "hevc", "vp9", "av1", "vp8", "prores"], ze = ["pcm-s16", "pcm-s16be", "pcm-s24", "pcm-s24be", "pcm-s32", "pcm-s32be", "pcm-f32", "pcm-f32be", "pcm-f64", "pcm-f64be", "pcm-u8", "pcm-s8", "ulaw", "alaw"], Le2 = ["aac", "opus", "mp3", "vorbis", "flac", "ac3", "eac3", "dts"], Ue = [...Le2, ...ze], We = ["webvtt"], qe = [{ maxMacroblocks: 99, maxBitrate: 64e3, maxDpbMbs: 396, level: 10 }, { maxMacroblocks: 396, maxBitrate: 192e3, maxDpbMbs: 900, level: 11 }, { maxMacroblocks: 396, maxBitrate: 384e3, maxDpbMbs: 2376, level: 12 }, { maxMacroblocks: 396, maxBitrate: 768e3, maxDpbMbs: 2376, level: 13 }, { maxMacroblocks: 396, maxBitrate: 2e6, maxDpbMbs: 2376, level: 20 }, { maxMacroblocks: 792, maxBitrate: 4e6, maxDpbMbs: 4752, level: 21 }, { maxMacroblocks: 1620, maxBitrate: 4e6, maxDpbMbs: 8100, level: 22 }, { maxMacroblocks: 1620, maxBitrate: 1e7, maxDpbMbs: 8100, level: 30 }, { maxMacroblocks: 3600, maxBitrate: 14e6, maxDpbMbs: 18e3, level: 31 }, { maxMacroblocks: 5120, maxBitrate: 2e7, maxDpbMbs: 20480, level: 32 }, { maxMacroblocks: 8192, maxBitrate: 2e7, maxDpbMbs: 32768, level: 40 }, { maxMacroblocks: 8192, maxBitrate: 5e7, maxDpbMbs: 32768, level: 41 }, { maxMacroblocks: 8704, maxBitrate: 5e7, maxDpbMbs: 34816, level: 42 }, { maxMacroblocks: 22080, maxBitrate: 135e6, maxDpbMbs: 110400, level: 50 }, { maxMacroblocks: 36864, maxBitrate: 24e7, maxDpbMbs: 184320, level: 51 }, { maxMacroblocks: 36864, maxBitrate: 24e7, maxDpbMbs: 184320, level: 52 }, { maxMacroblocks: 139264, maxBitrate: 24e7, maxDpbMbs: 696320, level: 60 }, { maxMacroblocks: 139264, maxBitrate: 48e7, maxDpbMbs: 696320, level: 61 }, { maxMacroblocks: 139264, maxBitrate: 8e8, maxDpbMbs: 696320, level: 62 }], Ve = [{ maxPictureSize: 36864, maxBitrate: 128e3, tier: "L", level: 30 }, { maxPictureSize: 122880, maxBitrate: 15e5, tier: "L", level: 60 }, { maxPictureSize: 245760, maxBitrate: 3e6, tier: "L", level: 63 }, { maxPictureSize: 552960, maxBitrate: 6e6, tier: "L", level: 90 }, { maxPictureSize: 983040, maxBitrate: 1e7, tier: "L", level: 93 }, { maxPictureSize: 2228224, maxBitrate: 12e6, tier: "L", level: 120 }, { maxPictureSize: 2228224, maxBitrate: 3e7, tier: "H", level: 120 }, { maxPictureSize: 2228224, maxBitrate: 2e7, tier: "L", level: 123 }, { maxPictureSize: 2228224, maxBitrate: 5e7, tier: "H", level: 123 }, { maxPictureSize: 8912896, maxBitrate: 25e6, tier: "L", level: 150 }, { maxPictureSize: 8912896, maxBitrate: 1e8, tier: "H", level: 150 }, { maxPictureSize: 8912896, maxBitrate: 4e7, tier: "L", level: 153 }, { maxPictureSize: 8912896, maxBitrate: 16e7, tier: "H", level: 153 }, { maxPictureSize: 8912896, maxBitrate: 6e7, tier: "L", level: 156 }, { maxPictureSize: 8912896, maxBitrate: 24e7, tier: "H", level: 156 }, { maxPictureSize: 35651584, maxBitrate: 6e7, tier: "L", level: 180 }, { maxPictureSize: 35651584, maxBitrate: 24e7, tier: "H", level: 180 }, { maxPictureSize: 35651584, maxBitrate: 12e7, tier: "L", level: 183 }, { maxPictureSize: 35651584, maxBitrate: 48e7, tier: "H", level: 183 }, { maxPictureSize: 35651584, maxBitrate: 24e7, tier: "L", level: 186 }, { maxPictureSize: 35651584, maxBitrate: 8e8, tier: "H", level: 186 }], He = [{ maxPictureSize: 36864, maxBitrate: 2e5, level: 10 }, { maxPictureSize: 73728, maxBitrate: 8e5, level: 11 }, { maxPictureSize: 122880, maxBitrate: 18e5, level: 20 }, { maxPictureSize: 245760, maxBitrate: 36e5, level: 21 }, { maxPictureSize: 552960, maxBitrate: 72e5, level: 30 }, { maxPictureSize: 983040, maxBitrate: 12e6, level: 31 }, { maxPictureSize: 2228224, maxBitrate: 18e6, level: 40 }, { maxPictureSize: 2228224, maxBitrate: 3e7, level: 41 }, { maxPictureSize: 8912896, maxBitrate: 6e7, level: 50 }, { maxPictureSize: 8912896, maxBitrate: 12e7, level: 51 }, { maxPictureSize: 8912896, maxBitrate: 18e7, level: 52 }, { maxPictureSize: 35651584, maxBitrate: 18e7, level: 60 }, { maxPictureSize: 35651584, maxBitrate: 24e7, level: 61 }, { maxPictureSize: 35651584, maxBitrate: 48e7, level: 62 }], $e = [{ maxPictureSize: 147456, maxBitrate: 15e5, tier: "M", level: 0 }, { maxPictureSize: 278784, maxBitrate: 3e6, tier: "M", level: 1 }, { maxPictureSize: 665856, maxBitrate: 6e6, tier: "M", level: 4 }, { maxPictureSize: 1065024, maxBitrate: 1e7, tier: "M", level: 5 }, { maxPictureSize: 2359296, maxBitrate: 12e6, tier: "M", level: 8 }, { maxPictureSize: 2359296, maxBitrate: 3e7, tier: "H", level: 8 }, { maxPictureSize: 2359296, maxBitrate: 2e7, tier: "M", level: 9 }, { maxPictureSize: 2359296, maxBitrate: 5e7, tier: "H", level: 9 }, { maxPictureSize: 8912896, maxBitrate: 3e7, tier: "M", level: 12 }, { maxPictureSize: 8912896, maxBitrate: 1e8, tier: "H", level: 12 }, { maxPictureSize: 8912896, maxBitrate: 4e7, tier: "M", level: 13 }, { maxPictureSize: 8912896, maxBitrate: 16e7, tier: "H", level: 13 }, { maxPictureSize: 8912896, maxBitrate: 6e7, tier: "M", level: 14 }, { maxPictureSize: 8912896, maxBitrate: 24e7, tier: "H", level: 14 }, { maxPictureSize: 35651584, maxBitrate: 6e7, tier: "M", level: 15 }, { maxPictureSize: 35651584, maxBitrate: 24e7, tier: "H", level: 15 }, { maxPictureSize: 35651584, maxBitrate: 6e7, tier: "M", level: 16 }, { maxPictureSize: 35651584, maxBitrate: 24e7, tier: "H", level: 16 }, { maxPictureSize: 35651584, maxBitrate: 1e8, tier: "M", level: 17 }, { maxPictureSize: 35651584, maxBitrate: 48e7, tier: "H", level: 17 }, { maxPictureSize: 35651584, maxBitrate: 16e7, tier: "M", level: 18 }, { maxPictureSize: 35651584, maxBitrate: 8e8, tier: "H", level: 18 }, { maxPictureSize: 35651584, maxBitrate: 16e7, tier: "M", level: 19 }, { maxPictureSize: 35651584, maxBitrate: 8e8, tier: "H", level: 19 }], je = ".01.01.01.01.00", Ke = ".0.110.01.01.01.0", Qe = ["ap4x", "ap4h", "apch", "apcn", "apcs", "apco"], Ge = ["dtsc", "dtsh", "dtsl", "dtse"], Xe = [{ fourCc: "apco", bitrate: 45e6, alpha: !1 }, { fourCc: "apcs", bitrate: 102e6, alpha: !1 }, { fourCc: "apcn", bitrate: 147e6, alpha: !1 }, { fourCc: "apch", bitrate: 22e7, alpha: !1 }, { fourCc: "ap4h", bitrate: 33e7, alpha: !0 }, { fourCc: "ap4x", bitrate: 5e8, alpha: !0 }], Ye = (e22, t22, i2, r2, a2) => {
  if (e22 === "avc") {
    let a3 = Math.ceil(t22 / 16) * Math.ceil(i2 / 16), s2 = qe.find((e4) => a3 <= e4.maxMacroblocks && r2 <= e4.maxBitrate) ?? l2(qe), n2 = s2 ? s2.level : 0;
    return `avc1.${"64".padStart(2, "0")}00${n2.toString(16).padStart(2, "0")}`;
  }
  if (e22 === "hevc") {
    let n2 = t22 * i2, o22 = Ve.find((e4) => n2 <= e4.maxPictureSize && r2 <= e4.maxBitrate) ?? l2(Ve);
    return `hev1.1.6.${o22.tier}${o22.level}.B0`;
  }
  if (e22 === "vp8") return "vp8";
  if (e22 === "vp9") {
    let e3 = t22 * i2;
    return `vp09.00.${(He.find((t3) => e3 <= t3.maxPictureSize && r2 <= t3.maxBitrate) ?? l2(He)).level.toString().padStart(2, "0")}.08`;
  }
  if (e22 === "av1") {
    let a3 = t22 * i2, s2 = $e.find((e4) => a3 <= e4.maxPictureSize && r2 <= e4.maxBitrate) ?? l2($e);
    return `av01.0.${s2.level.toString().padStart(2, "0")}${s2.tier}.08`;
  }
  if (e22 === "prores") {
    let s2 = Math.pow(t22 * i2 / 2073600, 0.95), n2 = Xe.filter((e4) => e4.alpha === a2), o22 = n2[0].fourCc, c22 = 1 / 0;
    for (let { fourCc: t3, bitrate: i3 } of n2) {
      let e4 = Math.abs(i3 * s2 - r2);
      e4 < c22 && (c22 = e4, o22 = t3);
    }
    return o22;
  }
  throw N(e22), new TypeError(`Unhandled codec '${String(e22)}'.`);
}, Je = (e22) => {
  let t22 = e22.split("."), i2 = Number(t22[1]), r2 = t22[2];
  return [129, (i2 << 5) + Number(r2.slice(0, -1)), ((r2.slice(-1) === "H" ? 1 : 0) << 7) + ((Number(t22[3]) === 8 ? 0 : 1) << 6) + 0 + ((t22[4] ? Number(t22[4]) : 0) << 4) + ((t22[5] ? Number(t22[5][0]) : 1) << 3) + ((t22[5] ? Number(t22[5][1]) : 1) << 2) + (t22[5] ? Number(t22[5][2]) : 0), 0];
}, Ze = (e22) => {
  let { codec: t22, codecDescription: i2, colorSpace: r2, avcCodecInfo: a2, hevcCodecInfo: s2, vp9CodecInfo: n2, av1CodecInfo: c22, proresFormat: d22 } = e22;
  if (t22 === "avc") {
    if (o2(e22.avcType !== null), a2) {
      let t3 = new Uint8Array([a2.avcProfileIndication, a2.profileCompatibility, a2.avcLevelIndication]);
      return `avc${e22.avcType}.${I2(t3)}`;
    }
    if (!i2 || i2.byteLength < 4) throw new TypeError("AVC decoder description is not provided or is not at least 4 bytes long.");
    return `avc${e22.avcType}.${I2(i2.subarray(1, 4))}`;
  }
  if (t22 === "hevc") {
    let e3, t3, r3, a3, n3, o22;
    if (s2) e3 = s2.generalProfileSpace, t3 = s2.generalProfileIdc, r3 = _(s2.generalProfileCompatibilityFlags), a3 = s2.generalTierFlag, n3 = s2.generalLevelIdc, o22 = [...s2.generalConstraintIndicatorFlags];
    else {
      if (!i2 || i2.byteLength < 23) throw new TypeError("HEVC decoder description is not provided or is not at least 23 bytes long.");
      let s3 = f2(i2), c4 = s3.getUint8(1);
      e3 = c4 >> 6 & 3, t3 = 31 & c4, r3 = _(s3.getUint32(2)), a3 = c4 >> 5 & 1, n3 = s3.getUint8(12), o22 = [];
      for (let e4 = 0; e4 < 6; e4++) o22.push(s3.getUint8(6 + e4));
    }
    let c3 = "hev1.";
    for (c3 += ["", "A", "B", "C"][e3] + t3, c3 += ".", c3 += r3.toString(16).toUpperCase(), c3 += ".", c3 += a3 === 0 ? "L" : "H", c3 += n3; o22.length > 0 && o22[o22.length - 1] === 0; ) o22.pop();
    return o22.length > 0 && (c3 += ".", c3 += o22.map((e4) => e4.toString(16).toUpperCase()).join(".")), c3;
  }
  if (t22 === "vp8") return "vp8";
  if (t22 === "vp9") {
    if (!n2) {
      let t4 = e22.width * e22.height, i3 = l2(He).level;
      for (let e3 of He) if (t4 <= e3.maxPictureSize) {
        i3 = e3.level;
        break;
      }
      return `vp09.00.${i3.toString().padStart(2, "0")}.08`;
    }
    let t3 = `vp09.${n2.profile.toString().padStart(2, "0")}.${n2.level.toString().padStart(2, "0")}.${n2.bitDepth.toString().padStart(2, "0")}.${n2.chromaSubsampling.toString().padStart(2, "0")}`;
    return t3 += `.${n2.colourPrimaries.toString().padStart(2, "0")}.${n2.transferCharacteristics.toString().padStart(2, "0")}.${n2.matrixCoefficients.toString().padStart(2, "0")}.${n2.videoFullRangeFlag.toString().padStart(2, "0")}`, t3.endsWith(je) && (t3 = t3.slice(0, -15)), t3;
  }
  if (t22 === "av1") {
    if (!c22) {
      let t4 = e22.width * e22.height, i4 = l2(He).level;
      for (let e3 of He) if (t4 <= e3.maxPictureSize) {
        i4 = e3.level;
        break;
      }
      return `av01.0.${i4.toString().padStart(2, "0")}M.08`;
    }
    let t3 = c22.profile, i3 = c22.level.toString().padStart(2, "0"), a3 = c22.tier ? "H" : "M", s3 = c22.bitDepth.toString().padStart(2, "0"), n3 = c22.monochrome ? "1" : "0", o22 = 100 * c22.chromaSubsamplingX + 10 * c22.chromaSubsamplingY + 1 * (c22.chromaSubsamplingX && c22.chromaSubsamplingY ? c22.chromaSamplePosition : 0), d3 = r2?.primaries ? w[r2.primaries] : 1, u2 = r2?.transfer ? y[r2.transfer] : 1, h22 = r2?.matrix ? T2[r2.matrix] : 1, m2 = r2?.fullRange ? 1 : 0, f22 = `av01.${t3}.${i3}${a3}.${s3}`;
    return f22 += `.${n3}.${o22.toString().padStart(3, "0")}`, f22 += `.${d3.toString().padStart(2, "0")}`, f22 += `.${u2.toString().padStart(2, "0")}`, f22 += `.${h22.toString().padStart(2, "0")}`, f22 += `.${m2}`, f22.endsWith(Ke) && (f22 = f22.slice(0, -17)), f22;
  }
  if (t22 === "prores") return d22 ?? "apch";
  throw t22 !== null && N(t22), new TypeError(`Unhandled codec '${t22}'.`);
}, et = (e22, t22, i2) => {
  if (e22 === "aac") return t22 >= 2 && i2 <= 24e3 ? "mp4a.40.29" : i2 <= 24e3 ? "mp4a.40.5" : "mp4a.40.2";
  if (e22 === "mp3") return "mp3";
  if (e22 === "opus") return "opus";
  if (e22 === "vorbis") return "vorbis";
  if (e22 === "flac") return "flac";
  if (e22 === "ac3") return "ac-3";
  if (e22 === "eac3") return "ec-3";
  if (e22 === "dts") return "dtsc";
  if (ze.includes(e22)) return e22;
  throw new TypeError(`Unhandled codec '${e22}'.`);
}, tt = (e22) => {
  let { codec: t22, codecDescription: i2, aacCodecInfo: r2, dtsFormat: a2 } = e22;
  if (t22 === "aac") {
    if (!r2) throw new TypeError("AAC codec info must be provided.");
    if (r2.isMpeg2) return "mp4a.67";
    {
      let e3;
      return r2.objectType !== null ? e3 = r2.objectType : e3 = De2(i2).objectType, `mp4a.40.${e3}`;
    }
  }
  if (t22 === "mp3") return "mp3";
  if (t22 === "opus") return "opus";
  if (t22 === "vorbis") return "vorbis";
  if (t22 === "flac") return "flac";
  if (t22 === "ac3") return "ac-3";
  if (t22 === "eac3") return "ec-3";
  if (t22 === "dts") return a2 ?? "dtsc";
  if (t22 && ze.includes(t22)) return t22;
  throw new TypeError(`Unhandled codec '${t22}'.`);
}, it = 48e3, rt = /^pcm-([usf])(\d+)(be)?$/, at = (e22) => {
  if (o2(ze.includes(e22)), e22 === "ulaw") return { dataType: "ulaw", sampleSize: 1, littleEndian: !0, silentValue: 255 };
  if (e22 === "alaw") return { dataType: "alaw", sampleSize: 1, littleEndian: !0, silentValue: 213 };
  let t22 = rt.exec(e22), i2;
  return o2(t22), i2 = t22[1] === "u" ? "unsigned" : t22[1] === "s" ? "signed" : "float", { dataType: i2, sampleSize: Number(t22[2]) / 8, littleEndian: t22[3] !== "be", silentValue: e22 === "pcm-u8" ? 128 : 0 };
}, st = (e22) => e22.startsWith("avc1") || e22.startsWith("avc3") ? "avc" : e22.startsWith("hev1") || e22.startsWith("hvc1") ? "hevc" : e22 === "vp8" ? "vp8" : e22.startsWith("vp09") ? "vp9" : e22.startsWith("av01") ? "av1" : Qe.includes(e22) ? "prores" : e22 === "mp3" || e22 === "mp4a.69" || e22 === "mp4a.6B" || e22 === "mp4a.6b" || e22 === "mp4a.40.34" ? "mp3" : e22.startsWith("mp4a.40.") || e22 === "mp4a.67" ? "aac" : e22 === "opus" ? "opus" : e22 === "vorbis" ? "vorbis" : e22 === "flac" ? "flac" : e22 === "ac-3" || e22 === "ac3" ? "ac3" : e22 === "ec-3" || e22 === "eac3" ? "eac3" : Ge.includes(e22) ? "dts" : e22 === "ulaw" ? "ulaw" : e22 === "alaw" ? "alaw" : rt.test(e22) ? e22 : e22 === "webvtt" ? "webvtt" : null, nt = ["avc1", "avc3", "hev1", "hvc1", "vp8", "vp09", "av01", ...Qe], ot = /^(avc1|avc3)\.[0-9a-fA-F]{6}$/, ct = /^(hev1|hvc1)\.(?:[ABC]?\d+)\.[0-9a-fA-F]{1,8}\.[LH]\d+(?:\.[0-9a-fA-F]{1,2}){0,6}$/, lt = /^vp09(?:\.\d{2}){3}(?:(?:\.\d{2}){5})?$/, dt = /^av01\.\d\.\d{2}[MH]\.\d{2}(?:\.\d\.\d{3}\.\d{2}\.\d{2}\.\d{2}\.\d)?$/, ut = (e22, t22) => {
  if (!e22) throw new TypeError("Video chunk metadata must be provided.");
  if (typeof e22 != "object") throw new TypeError("Video chunk metadata must be an object.");
  if (!e22.decoderConfig) throw new TypeError("Video chunk metadata must include a decoder configuration.");
  if (typeof e22.decoderConfig != "object") throw new TypeError("Video chunk metadata decoder configuration must be an object.");
  if (typeof e22.decoderConfig.codec != "string") throw new TypeError("Video chunk metadata decoder configuration must specify a codec string.");
  if (!nt.some((t3) => e22.decoderConfig.codec.startsWith(t3))) throw new TypeError("Video chunk metadata decoder configuration codec string must be a valid video codec string as specified in the Mediabunny Codec Registry.");
  if (!Number.isInteger(e22.decoderConfig.codedWidth) || e22.decoderConfig.codedWidth <= 0) throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedWidth (positive integer).");
  if (!Number.isInteger(e22.decoderConfig.codedHeight) || e22.decoderConfig.codedHeight <= 0) throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedHeight (positive integer).");
  if (e22.decoderConfig.displayAspectWidth !== void 0 && (!Number.isInteger(e22.decoderConfig.displayAspectWidth) || e22.decoderConfig.displayAspectWidth <= 0)) throw new TypeError("Video chunk metadata decoder configuration displayAspectWidth, when defined, must be a positive integer.");
  if (e22.decoderConfig.displayAspectHeight !== void 0 && (!Number.isInteger(e22.decoderConfig.displayAspectHeight) || e22.decoderConfig.displayAspectHeight <= 0)) throw new TypeError("Video chunk metadata decoder configuration displayAspectHeight, when defined, must be a positive integer.");
  if (e22.decoderConfig.displayAspectWidth !== void 0 != (e22.decoderConfig.displayAspectHeight !== void 0)) throw new TypeError("Video chunk metadata decoder configuration must specify both displayAspectWidth and displayAspectHeight, or neither.");
  if (e22.decoderConfig.description !== void 0 && !C(e22.decoderConfig.description)) throw new TypeError("Video chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");
  if (e22.decoderConfig.colorSpace !== void 0) {
    let { colorSpace: t3 } = e22.decoderConfig;
    if (typeof t3 != "object") throw new TypeError("Video chunk metadata decoder configuration colorSpace, when provided, must be an object.");
    let i2 = Object.keys(w);
    if (t3.primaries != null && !i2.includes(t3.primaries)) throw new TypeError(`Video chunk metadata decoder configuration colorSpace primaries, when defined, must be one of ${i2.join(", ")}.`);
    let r2 = Object.keys(y);
    if (t3.transfer != null && !r2.includes(t3.transfer)) throw new TypeError(`Video chunk metadata decoder configuration colorSpace transfer, when defined, must be one of ${r2.join(", ")}.`);
    let a2 = Object.keys(T2);
    if (t3.matrix != null && !a2.includes(t3.matrix)) throw new TypeError(`Video chunk metadata decoder configuration colorSpace matrix, when defined, must be one of ${a2.join(", ")}.`);
    if (t3.fullRange != null && typeof t3.fullRange != "boolean") throw new TypeError("Video chunk metadata decoder configuration colorSpace fullRange, when defined, must be a boolean.");
  }
  if (e22.decoderConfig.codec.startsWith("avc1") || e22.decoderConfig.codec.startsWith("avc3")) {
    if (!ot.test(e22.decoderConfig.codec)) throw new TypeError("Video chunk metadata decoder configuration codec string for AVC must be a valid AVC codec string as specified in Section 3.4 of RFC 6381.");
  } else if (e22.decoderConfig.codec.startsWith("hev1") || e22.decoderConfig.codec.startsWith("hvc1")) {
    if (!ct.test(e22.decoderConfig.codec)) throw new TypeError("Video chunk metadata decoder configuration codec string for HEVC must be a valid HEVC codec string as specified in Section E.3 of ISO 14496-15.");
  } else if (e22.decoderConfig.codec.startsWith("vp8")) {
    if (e22.decoderConfig.codec !== "vp8") throw new TypeError('Video chunk metadata decoder configuration codec string for VP8 must be "vp8".');
  } else if (e22.decoderConfig.codec.startsWith("vp09")) {
    if (!lt.test(e22.decoderConfig.codec)) throw new TypeError('Video chunk metadata decoder configuration codec string for VP9 must be a valid VP9 codec string as specified in Section "Codecs Parameter String" of https://www.webmproject.org/vp9/mp4/.');
  } else if (e22.decoderConfig.codec.startsWith("av01")) {
    if (!dt.test(e22.decoderConfig.codec)) throw new TypeError('Video chunk metadata decoder configuration codec string for AV1 must be a valid AV1 codec string as specified in Section "Codecs Parameter String" of https://aomediacodec.github.io/av1-isobmff/.');
  } else if (Qe.some((t3) => e22.decoderConfig.codec.startsWith(t3)) && !Qe.some((t3) => e22.decoderConfig.codec === t3)) throw new TypeError(`Video chunk metadata decoder configuration codec string for ProRes must be one of the valid ProRes four-character codes: ${Qe.join(", ")}.`);
  if (t22 !== null && st(e22.decoderConfig.codec) !== t22) throw new TypeError(`Video chunk metadata decoder configuration codec string '${e22.decoderConfig.codec}' does not fit to the track codec '${t22}'.`);
}, ht = ["mp4a", "mp3", "opus", "vorbis", "flac", "ulaw", "alaw", "pcm", "ac-3", "ec-3", "dts"], mt = (e22, t22) => {
  if (!e22) throw new TypeError("Audio chunk metadata must be provided.");
  if (typeof e22 != "object") throw new TypeError("Audio chunk metadata must be an object.");
  if (!e22.decoderConfig) throw new TypeError("Audio chunk metadata must include a decoder configuration.");
  if (typeof e22.decoderConfig != "object") throw new TypeError("Audio chunk metadata decoder configuration must be an object.");
  if (typeof e22.decoderConfig.codec != "string") throw new TypeError("Audio chunk metadata decoder configuration must specify a codec string.");
  if (!ht.some((t3) => e22.decoderConfig.codec.startsWith(t3))) throw new TypeError("Audio chunk metadata decoder configuration codec string must be a valid audio codec string as specified in the Mediabunny Codec Registry.");
  if (!Number.isInteger(e22.decoderConfig.sampleRate) || e22.decoderConfig.sampleRate <= 0) throw new TypeError("Audio chunk metadata decoder configuration must specify a valid sampleRate (positive integer).");
  if (!Number.isInteger(e22.decoderConfig.numberOfChannels) || e22.decoderConfig.numberOfChannels <= 0) throw new TypeError("Audio chunk metadata decoder configuration must specify a valid numberOfChannels (positive integer).");
  if (e22.decoderConfig.description !== void 0 && !C(e22.decoderConfig.description)) throw new TypeError("Audio chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");
  if (e22.decoderConfig.codec.startsWith("mp4a") && e22.decoderConfig.codec !== "mp4a.69" && e22.decoderConfig.codec !== "mp4a.6B" && e22.decoderConfig.codec !== "mp4a.6b") {
    if (!["mp4a.40.2", "mp4a.40.02", "mp4a.40.5", "mp4a.40.05", "mp4a.40.29", "mp4a.67"].includes(e22.decoderConfig.codec)) throw new TypeError("Audio chunk metadata decoder configuration codec string for AAC must be a valid AAC codec string as specified in https://www.w3.org/TR/webcodecs-aac-codec-registration/.");
  } else if (e22.decoderConfig.codec.startsWith("mp3") || e22.decoderConfig.codec.startsWith("mp4a")) {
    if (e22.decoderConfig.codec !== "mp3" && e22.decoderConfig.codec !== "mp4a.69" && e22.decoderConfig.codec !== "mp4a.6B" && e22.decoderConfig.codec !== "mp4a.6b") throw new TypeError('Audio chunk metadata decoder configuration codec string for MP3 must be "mp3", "mp4a.69" or "mp4a.6B".');
  } else if (e22.decoderConfig.codec.startsWith("opus")) {
    if (e22.decoderConfig.codec !== "opus") throw new TypeError('Audio chunk metadata decoder configuration codec string for Opus must be "opus".');
    if (e22.decoderConfig.description && e22.decoderConfig.description.byteLength < 18) throw new TypeError("Audio chunk metadata decoder configuration description, when specified, is expected to be an Identification Header as specified in Section 5.1 of RFC 7845.");
  } else if (e22.decoderConfig.codec.startsWith("vorbis")) {
    if (e22.decoderConfig.codec !== "vorbis") throw new TypeError('Audio chunk metadata decoder configuration codec string for Vorbis must be "vorbis".');
    if (!e22.decoderConfig.description) throw new TypeError("Audio chunk metadata decoder configuration for Vorbis must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-vorbis-codec-registration/.");
  } else if (e22.decoderConfig.codec.startsWith("flac")) {
    if (e22.decoderConfig.codec !== "flac") throw new TypeError('Audio chunk metadata decoder configuration codec string for FLAC must be "flac".');
    if (!e22.decoderConfig.description || e22.decoderConfig.description.byteLength < 42) throw new TypeError("Audio chunk metadata decoder configuration for FLAC must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-flac-codec-registration/.");
  } else if (e22.decoderConfig.codec.startsWith("ac-3") || e22.decoderConfig.codec.startsWith("ac3")) {
    if (e22.decoderConfig.codec !== "ac-3") throw new TypeError('Audio chunk metadata decoder configuration codec string for AC-3 must be "ac-3".');
  } else if (e22.decoderConfig.codec.startsWith("ec-3") || e22.decoderConfig.codec.startsWith("eac3")) {
    if (e22.decoderConfig.codec !== "ec-3") throw new TypeError('Audio chunk metadata decoder configuration codec string for EC-3 must be "ec-3".');
  } else if (e22.decoderConfig.codec.startsWith("dts")) {
    if (!Ge.includes(e22.decoderConfig.codec)) throw new TypeError(`Audio chunk metadata decoder configuration codec string for DTS must be one of the following four-character codes: ${Ge.join(", ")}.`);
  } else if ((e22.decoderConfig.codec.startsWith("pcm") || e22.decoderConfig.codec.startsWith("ulaw") || e22.decoderConfig.codec.startsWith("alaw")) && !ze.includes(e22.decoderConfig.codec)) throw new TypeError(`Audio chunk metadata decoder configuration codec string for PCM must be one of the supported PCM codecs (${ze.join(", ")}).`);
  if (t22 !== null && st(e22.decoderConfig.codec) !== t22) throw new TypeError(`Audio chunk metadata decoder configuration codec string '${e22.decoderConfig.codec}' does not fit to the track codec '${t22}'.`);
}, ft = (e22) => {
  if (!e22) throw new TypeError("Subtitle metadata must be provided.");
  if (typeof e22 != "object") throw new TypeError("Subtitle metadata must be an object.");
  if (!e22.config) throw new TypeError("Subtitle metadata must include a config object.");
  if (typeof e22.config != "object") throw new TypeError("Subtitle metadata config must be an object.");
  if (typeof e22.config.description != "string") throw new TypeError("Subtitle metadata config description must be a string.");
}, pt = [44100, 48e3, 32e3], gt = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, -1, -1, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, -1, -1, 32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160, -1, -1, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160, -1, -1, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, -1], kt = 1483304551, wt = 1231971951, bt = (e22, t22) => e22 === 3 ? t22 === 3 ? 21 : 36 : t22 === 3 ? 13 : 21, yt = (e22, t22) => {
  let i2 = e22 >>> 24, r2 = e22 >>> 16 & 255, a2 = e22 >>> 8 & 255, s2 = 255 & e22;
  if (i2 !== 255 && r2 !== 255 && a2 !== 255 && s2 !== 255) return { header: null, bytesAdvanced: 4 };
  if (i2 !== 255) return { header: null, bytesAdvanced: 1 };
  if (224 & ~r2) return { header: null, bytesAdvanced: 1 };
  let n2 = 0, o22 = 0;
  16 & r2 ? n2 = 8 & r2 ? 0 : 1 : (n2 = 1, o22 = 1);
  let c22 = r2 >> 3 & 3, l22 = r2 >> 1 & 3, d22 = (a2 >> 2 & 3) % 3, u2 = s2 >> 6 & 3, h22 = s2 >> 4 & 3, m2 = s2 >> 3 & 1, f22 = s2 >> 2 & 1, p22 = 3 & s2, g2 = gt[16 * n2 * 4 + 16 * l22 + (a2 >> 4 & 15)];
  if (g2 === -1) return { header: null, bytesAdvanced: 1 };
  let k2 = 1e3 * g2, w2 = pt[d22] >> n2 + o22, b2 = ((e3, t3, i3, r3, a3) => t3 === 0 ? 0 : t3 === 1 ? Math.floor(144 * i3 / (r3 << e3)) + a3 : t3 === 2 ? Math.floor(144 * i3 / r3) + a3 : 4 * (Math.floor(12 * i3 / r3) + a3))(n2, l22, k2, w2, a2 >> 1 & 1);
  if (t22 !== null && t22 < b2) return { header: null, bytesAdvanced: 1 };
  let y2;
  return y2 = c22 === 3 ? l22 === 3 ? 384 : 1152 : l22 === 3 ? 384 : l22 === 2 ? 1152 : 576, { header: { totalSize: b2, mpegVersionId: c22, lowSamplingFrequency: n2, layer: l22, bitrate: k2, frequencyIndex: d22, sampleRate: w2, channel: u2, modeExtension: h22, copyright: m2, original: f22, emphasis: p22, audioSamplesInFrame: y2 }, bytesAdvanced: 1 };
}, vt = (e22) => {
  let t22 = 2130706432, i2 = 0;
  for (; t22 !== 0; ) i2 >>= 1, i2 |= e22 & t22, t22 >>= 8;
  return i2;
}, Tt, St;
(St = Tt || (Tt = {}))[St.FrameCount = 1] = "FrameCount", St[St.FileSize = 2] = "FileSize", St[St.Toc = 4] = "Toc";
var Pt = (e22) => e22 === 3 ? 1 : 2, Ct = [48e3, 44100, 32e3], xt = [24e3, 22050, 16e3];
var Et, It, _t, Bt;
(It = Et || (Et = {}))[It.NON_IDR_SLICE = 1] = "NON_IDR_SLICE", It[It.SLICE_DPA = 2] = "SLICE_DPA", It[It.SLICE_DPB = 3] = "SLICE_DPB", It[It.SLICE_DPC = 4] = "SLICE_DPC", It[It.IDR = 5] = "IDR", It[It.SEI = 6] = "SEI", It[It.SPS = 7] = "SPS", It[It.PPS = 8] = "PPS", It[It.AUD = 9] = "AUD", It[It.SPS_EXT = 13] = "SPS_EXT", (Bt = _t || (_t = {}))[Bt.RASL_N = 8] = "RASL_N", Bt[Bt.RASL_R = 9] = "RASL_R", Bt[Bt.BLA_W_LP = 16] = "BLA_W_LP", Bt[Bt.RSV_IRAP_VCL23 = 23] = "RSV_IRAP_VCL23", Bt[Bt.VPS_NUT = 32] = "VPS_NUT", Bt[Bt.SPS_NUT = 33] = "SPS_NUT", Bt[Bt.PPS_NUT = 34] = "PPS_NUT", Bt[Bt.AUD_NUT = 35] = "AUD_NUT", Bt[Bt.PREFIX_SEI_NUT = 39] = "PREFIX_SEI_NUT", Bt[Bt.SUFFIX_SEI_NUT = 40] = "SUFFIX_SEI_NUT";
var At = function* (e22) {
  let t22 = 0, i2 = -1;
  for (; t22 < e22.length - 2; ) {
    let r2 = e22.indexOf(0, t22);
    if (r2 === -1 || r2 >= e22.length - 2) break;
    t22 = r2;
    let a2 = 0;
    t22 + 3 < e22.length && e22[t22 + 1] === 0 && e22[t22 + 2] === 0 && e22[t22 + 3] === 1 ? a2 = 4 : e22[t22 + 1] === 0 && e22[t22 + 2] === 1 && (a2 = 3), a2 !== 0 ? (i2 !== -1 && t22 > i2 && (yield { offset: i2, length: t22 - i2 }), i2 = t22 + a2, t22 = i2) : t22++;
  }
  i2 !== -1 && i2 < e22.length && (yield { offset: i2, length: e22.length - i2 });
}, Mt = function* (e22, t22) {
  let i2 = 0, r2 = new DataView(e22.buffer, e22.byteOffset, e22.byteLength);
  for (; i2 + t22 <= e22.length; ) {
    let e3;
    t22 === 1 ? e3 = r2.getUint8(i2) : t22 === 2 ? e3 = r2.getUint16(i2, !1) : t22 === 3 ? e3 = z(r2, i2, !1) : (o2(t22 === 4), e3 = r2.getUint32(i2, !1)), i2 += t22, yield { offset: i2, length: e3 }, i2 += e3;
  }
}, Ft = (e22, t22) => {
  if (t22.description) {
    let i2 = 3 & m(t22.description)[4];
    return Mt(e22, i2 + 1);
  }
  return At(e22);
}, Rt = (e22) => 31 & e22, Dt = (e22) => {
  let t22 = [], i2 = e22.length;
  for (let r2 = 0; r2 < i2; r2++) r2 + 2 < i2 && e22[r2] === 0 && e22[r2 + 1] === 0 && e22[r2 + 2] === 3 ? (t22.push(0, 0), r2 += 2) : t22.push(e22[r2]);
  return new Uint8Array(t22);
}, Ot = new Uint8Array([0, 0, 0, 1]), Nt = (e22) => {
  let t22 = e22.reduce((e3, t3) => e3 + Ot.byteLength + t3.byteLength, 0), i2 = new Uint8Array(t22), r2 = 0;
  for (let a2 of e22) i2.set(Ot, r2), r2 += Ot.byteLength, i2.set(a2, r2), r2 += a2.byteLength;
  return i2;
}, zt = (e22, t22) => {
  let i2 = e22.reduce((e3, i3) => e3 + t22 + i3.byteLength, 0), r2 = new Uint8Array(i2), a2 = 0;
  for (let s2 of e22) {
    let e3 = new DataView(r2.buffer, r2.byteOffset, r2.byteLength);
    switch (t22) {
      case 1:
        e3.setUint8(a2, s2.byteLength);
        break;
      case 2:
        e3.setUint16(a2, s2.byteLength, !1);
        break;
      case 3:
        L2(e3, a2, s2.byteLength, !1);
        break;
      case 4:
        e3.setUint32(a2, s2.byteLength, !1);
    }
    a2 += t22, r2.set(s2, a2), a2 += s2.byteLength;
  }
  return r2;
}, Lt = (e22) => {
  try {
    let t22 = [], i2 = [], r2 = [];
    for (let o22 of At(e22)) {
      let a3 = e22.subarray(o22.offset, o22.offset + o22.length), s3 = Rt(a3[0]);
      s3 === Et.SPS ? t22.push(a3) : s3 === Et.PPS ? i2.push(a3) : s3 === Et.SPS_EXT && r2.push(a3);
    }
    if (t22.length === 0 || i2.length === 0) return null;
    let a2 = t22[0], s2 = Wt(a2);
    o2(s2 !== null);
    let n2 = s2.profileIdc === 100 || s2.profileIdc === 110 || s2.profileIdc === 122 || s2.profileIdc === 144;
    return { configurationVersion: 1, avcProfileIndication: s2.profileIdc, profileCompatibility: s2.constraintFlags, avcLevelIndication: s2.levelIdc, lengthSizeMinusOne: 3, sequenceParameterSets: t22, pictureParameterSets: i2, chromaFormat: n2 ? s2.chromaFormatIdc : null, bitDepthLumaMinus8: n2 ? s2.bitDepthLumaMinus8 : null, bitDepthChromaMinus8: n2 ? s2.bitDepthChromaMinus8 : null, sequenceParameterSetExt: n2 ? r2 : null };
  } catch (t22) {
    return Ee._error("Error building AVC Decoder Configuration Record:", t22), null;
  }
}, Ut = { 1: { num: 1, den: 1 }, 2: { num: 12, den: 11 }, 3: { num: 10, den: 11 }, 4: { num: 16, den: 11 }, 5: { num: 40, den: 33 }, 6: { num: 24, den: 11 }, 7: { num: 20, den: 11 }, 8: { num: 32, den: 11 }, 9: { num: 80, den: 33 }, 10: { num: 18, den: 11 }, 11: { num: 15, den: 11 }, 12: { num: 64, den: 33 }, 13: { num: 160, den: 99 }, 14: { num: 4, den: 3 }, 15: { num: 3, den: 2 }, 16: { num: 2, den: 1 } }, Wt = (e22) => {
  try {
    let t22 = new Me(Dt(e22));
    if (t22.skipBits(1), t22.skipBits(2), t22.readBits(5) !== 7) return null;
    let i2 = t22.readAlignedByte(), r2 = t22.readAlignedByte(), a2 = t22.readAlignedByte();
    u(t22);
    let s2 = 1, n2 = 0, c22 = 0, d22 = 0;
    if ((i2 === 100 || i2 === 110 || i2 === 122 || i2 === 244 || i2 === 44 || i2 === 83 || i2 === 86 || i2 === 118 || i2 === 128) && (s2 = u(t22), s2 === 3 && (d22 = t22.readBits(1)), n2 = u(t22), c22 = u(t22), t22.skipBits(1), t22.readBits(1))) {
      for (let e3 = 0; e3 < (s2 !== 3 ? 8 : 12); e3++)
        if (t22.readBits(1)) {
          let i3 = e3 < 6 ? 16 : 64, r3 = 8, a3 = 8;
          for (let e4 = 0; e4 < i3; e4++)
            a3 !== 0 && (a3 = (r3 + h2(t22) + 256) % 256), r3 = a3 === 0 ? r3 : a3;
        }
    }
    u(t22);
    let m2 = u(t22);
    if (m2 === 0) u(t22);
    else if (m2 === 1) {
      t22.skipBits(1), h2(t22), h2(t22);
      let e3 = u(t22);
      for (let i3 = 0; i3 < e3; i3++) h2(t22);
    }
    u(t22), t22.skipBits(1);
    let f22 = u(t22), p22 = u(t22), g2 = 16 * (f22 + 1), k2 = 16 * (p22 + 1), w2 = g2, b2 = k2, y2 = t22.readBits(1);
    if (y2 || t22.skipBits(1), t22.skipBits(1), t22.readBits(1)) {
      let e3 = u(t22), i3 = u(t22), r3 = u(t22), a3 = u(t22), n3, o22;
      (d22 === 0 ? s2 : 0) === 0 ? (n3 = 1, o22 = 2 - y2) : (n3 = s2 === 3 ? 1 : 2, o22 = (s2 === 1 ? 2 : 1) * (2 - y2)), w2 -= n3 * (e3 + i3), b2 -= o22 * (r3 + a3);
    }
    let v2 = 2, T22 = 2, S2 = 2, P2 = 0, C2 = { num: 1, den: 1 }, x2 = null, E22 = null;
    if (t22.readBits(1)) {
      if (t22.readBits(1)) {
        let e4 = t22.readBits(8);
        if (e4 === 255) C2 = { num: t22.readBits(16), den: t22.readBits(16) };
        else {
          let t3 = Ut[e4];
          t3 && (C2 = t3);
        }
      }
      t22.readBits(1) && t22.skipBits(1), t22.readBits(1) && (t22.skipBits(3), P2 = t22.readBits(1), t22.readBits(1) && (v2 = t22.readBits(8), T22 = t22.readBits(8), S2 = t22.readBits(8))), t22.readBits(1) && (u(t22), u(t22)), t22.readBits(1) && (t22.skipBits(32), t22.skipBits(32), t22.skipBits(1));
      let e3 = t22.readBits(1);
      e3 && qt(t22);
      let i3 = t22.readBits(1);
      i3 && qt(t22), (e3 || i3) && t22.skipBits(1), t22.skipBits(1), t22.readBits(1) && (t22.skipBits(1), u(t22), u(t22), u(t22), u(t22), x2 = u(t22), E22 = u(t22));
    }
    if (x2 === null)
      if (o2(E22 === null), i2 !== 44 && i2 !== 86 && i2 !== 100 && i2 !== 110 && i2 !== 122 && i2 !== 244 || !(16 & r2)) {
        let e3 = f22 + 1, t3 = (2 - y2) * (p22 + 1), i3 = qe.find((e4) => e4.level >= a2) ?? l2(qe), r3 = Math.min(Math.floor(i3.maxDpbMbs / (e3 * t3)), 16);
        x2 = r3, E22 = r3;
      } else x2 = 0, E22 = 0;
    return o2(E22 !== null), { profileIdc: i2, constraintFlags: r2, levelIdc: a2, frameMbsOnlyFlag: y2, chromaFormatIdc: s2, bitDepthLumaMinus8: n2, bitDepthChromaMinus8: c22, codedWidth: g2, codedHeight: k2, displayWidth: w2, displayHeight: b2, pixelAspectRatio: C2, colourPrimaries: v2, matrixCoefficients: S2, transferCharacteristics: T22, fullRangeFlag: P2, numReorderFrames: x2, maxDecFrameBuffering: E22 };
  } catch (t22) {
    return Ee._error("Error parsing AVC SPS:", t22), null;
  }
}, qt = (e22) => {
  let t22 = u(e22);
  e22.skipBits(4), e22.skipBits(4);
  for (let i2 = 0; i2 <= t22; i2++) u(e22), u(e22), e22.skipBits(1);
  e22.skipBits(5), e22.skipBits(5), e22.skipBits(5), e22.skipBits(5);
}, Vt = (e22, t22) => {
  if (t22.description) {
    let i2 = 3 & m(t22.description)[21];
    return Mt(e22, i2 + 1);
  }
  return At(e22);
}, Ht = (e22) => e22 >> 1 & 63, $t = (e22) => {
  try {
    let t22 = new Me(Dt(e22));
    t22.skipBits(16), t22.readBits(4);
    let i2 = t22.readBits(3), r2 = t22.readBits(1), { general_profile_space: a2, general_tier_flag: s2, general_profile_idc: n2, general_profile_compatibility_flags: o22, general_constraint_indicator_flags: c22, general_level_idc: l22 } = Kt(t22, i2);
    u(t22);
    let d22 = u(t22), h22 = 0;
    d22 === 3 && (h22 = t22.readBits(1));
    let m2 = u(t22), f22 = u(t22), p22 = m2, g2 = f22;
    if (t22.readBits(1)) {
      let e3 = u(t22), i3 = u(t22), r3 = u(t22), a3 = u(t22), s3 = 1, n3 = 1, o3 = h22 === 0 ? d22 : 0;
      o3 === 1 ? (s3 = 2, n3 = 2) : o3 === 2 && (s3 = 2, n3 = 1), p22 -= (e3 + i3) * s3, g2 -= (r3 + a3) * n3;
    }
    let k2 = u(t22), w2 = u(t22);
    u(t22);
    let b2 = t22.readBits(1), y2 = 0;
    for (let e3 = b2 ? 0 : i2; e3 <= i2; e3++) u(t22), y2 = u(t22), u(t22);
    u(t22), u(t22), u(t22), u(t22), u(t22), u(t22), t22.readBits(1) && t22.readBits(1) && Qt(t22), t22.skipBits(1), t22.skipBits(1), t22.readBits(1) && (t22.skipBits(4), t22.skipBits(4), u(t22), u(t22), t22.skipBits(1));
    let v2 = u(t22);
    if (Gt(t22, v2), t22.readBits(1)) {
      let e3 = u(t22);
      for (let i3 = 0; i3 < e3; i3++) u(t22), t22.skipBits(1);
    }
    t22.skipBits(1), t22.skipBits(1);
    let T22 = 2, S2 = 2, P2 = 2, C2 = 0, x2 = 0, E22 = { num: 1, den: 1 };
    if (t22.readBits(1)) {
      let e3 = Yt(t22, i2);
      E22 = e3.pixelAspectRatio, T22 = e3.colourPrimaries, S2 = e3.transferCharacteristics, P2 = e3.matrixCoefficients, C2 = e3.fullRangeFlag, x2 = e3.minSpatialSegmentationIdc;
    }
    return { displayWidth: p22, displayHeight: g2, pixelAspectRatio: E22, colourPrimaries: T22, transferCharacteristics: S2, matrixCoefficients: P2, fullRangeFlag: C2, maxDecFrameBuffering: y2 + 1, spsMaxSubLayersMinus1: i2, spsTemporalIdNestingFlag: r2, generalProfileSpace: a2, generalTierFlag: s2, generalProfileIdc: n2, generalProfileCompatibilityFlags: o22, generalConstraintIndicatorFlags: c22, generalLevelIdc: l22, chromaFormatIdc: d22, bitDepthLumaMinus8: k2, bitDepthChromaMinus8: w2, minSpatialSegmentationIdc: x2 };
  } catch (t22) {
    return Ee._error("Error parsing HEVC SPS:", t22), null;
  }
}, jt = (e22) => {
  try {
    let t22 = [], i2 = [], r2 = [], a2 = [];
    for (let c22 of At(e22)) {
      let s3 = e22.subarray(c22.offset, c22.offset + c22.length), n3 = Ht(s3[0]);
      n3 === _t.VPS_NUT ? t22.push(s3) : n3 === _t.SPS_NUT ? i2.push(s3) : n3 === _t.PPS_NUT ? r2.push(s3) : n3 !== _t.PREFIX_SEI_NUT && n3 !== _t.SUFFIX_SEI_NUT || a2.push(s3);
    }
    if (i2.length === 0 || r2.length === 0) return null;
    let s2 = $t(i2[0]);
    if (!s2) return null;
    let n2 = 0;
    if (r2.length > 0) {
      let e3 = r2[0], t3 = new Me(Dt(e3));
      t3.skipBits(16), u(t3), u(t3), t3.skipBits(1), t3.skipBits(1), t3.skipBits(3), t3.skipBits(1), t3.skipBits(1), u(t3), u(t3), h2(t3), t3.skipBits(1), t3.skipBits(1), t3.readBits(1) && u(t3), h2(t3), h2(t3), t3.skipBits(1), t3.skipBits(1), t3.skipBits(1), t3.skipBits(1);
      let i3 = t3.readBits(1), a3 = t3.readBits(1);
      n2 = i3 || a3 ? i3 && !a3 ? 2 : !i3 && a3 ? 3 : 0 : 0;
    }
    let o22 = [...t22.length ? [{ arrayCompleteness: 1, nalUnitType: _t.VPS_NUT, nalUnits: t22 }] : [], ...i2.length ? [{ arrayCompleteness: 1, nalUnitType: _t.SPS_NUT, nalUnits: i2 }] : [], ...r2.length ? [{ arrayCompleteness: 1, nalUnitType: _t.PPS_NUT, nalUnits: r2 }] : [], ...a2.length ? [{ arrayCompleteness: 1, nalUnitType: Ht(a2[0][0]), nalUnits: a2 }] : []];
    return { configurationVersion: 1, generalProfileSpace: s2.generalProfileSpace, generalTierFlag: s2.generalTierFlag, generalProfileIdc: s2.generalProfileIdc, generalProfileCompatibilityFlags: s2.generalProfileCompatibilityFlags, generalConstraintIndicatorFlags: s2.generalConstraintIndicatorFlags, generalLevelIdc: s2.generalLevelIdc, minSpatialSegmentationIdc: s2.minSpatialSegmentationIdc, parallelismType: n2, chromaFormatIdc: s2.chromaFormatIdc, bitDepthLumaMinus8: s2.bitDepthLumaMinus8, bitDepthChromaMinus8: s2.bitDepthChromaMinus8, avgFrameRate: 0, constantFrameRate: 0, numTemporalLayers: s2.spsMaxSubLayersMinus1 + 1, temporalIdNested: s2.spsTemporalIdNestingFlag, lengthSizeMinusOne: 3, arrays: o22 };
  } catch (t22) {
    return Ee._error("Error building HEVC Decoder Configuration Record:", t22), null;
  }
}, Kt = (e22, t22) => {
  let i2 = e22.readBits(2), r2 = e22.readBits(1), a2 = e22.readBits(5), s2 = 0;
  for (let d22 = 0; d22 < 32; d22++) s2 = s2 << 1 | e22.readBits(1);
  let n2 = new Uint8Array(6);
  for (let d22 = 0; d22 < 6; d22++) n2[d22] = e22.readBits(8);
  let o22 = e22.readBits(8), c22 = [], l22 = [];
  for (let d22 = 0; d22 < t22; d22++) c22.push(e22.readBits(1)), l22.push(e22.readBits(1));
  if (t22 > 0) for (let d22 = t22; d22 < 8; d22++) e22.skipBits(2);
  for (let d22 = 0; d22 < t22; d22++) c22[d22] && e22.skipBits(88), l22[d22] && e22.skipBits(8);
  return { general_profile_space: i2, general_tier_flag: r2, general_profile_idc: a2, general_profile_compatibility_flags: s2, general_constraint_indicator_flags: n2, general_level_idc: o22 };
}, Qt = (e22) => {
  for (let t22 = 0; t22 < 4; t22++) for (let i2 = 0; i2 < (t22 === 3 ? 2 : 6); i2++)
    if (e22.readBits(1)) {
      let i3 = Math.min(64, 1 << 4 + (t22 << 1));
      t22 > 1 && h2(e22);
      for (let t3 = 0; t3 < i3; t3++) h2(e22);
    } else u(e22);
}, Gt = (e22, t22) => {
  let i2 = [];
  for (let r2 = 0; r2 < t22; r2++) i2[r2] = Xt(e22, r2, t22, i2);
}, Xt = (e22, t22, i2, r2) => {
  let a2 = 0, s2 = 0, n2 = 0;
  if (t22 !== 0 && (s2 = e22.readBits(1)), s2) {
    t22 === i2 ? n2 = t22 - (u(e22) + 1) : n2 = t22 - 1, e22.readBits(1), u(e22);
    let s3 = r2[n2] ?? 0;
    for (let t3 = 0; t3 <= s3; t3++)
      e22.readBits(1) || e22.readBits(1);
    a2 = r2[n2];
  } else {
    let t3 = u(e22), i3 = u(e22);
    for (let r3 = 0; r3 < t3; r3++) u(e22), e22.readBits(1);
    for (let r3 = 0; r3 < i3; r3++) u(e22), e22.readBits(1);
    a2 = t3 + i3;
  }
  return a2;
}, Yt = (e22, t22) => {
  let i2 = 2, r2 = 2, a2 = 2, s2 = 0, n2 = 0, o22 = { num: 1, den: 1 };
  if (e22.readBits(1)) {
    let t3 = e22.readBits(8);
    if (t3 === 255) o22 = { num: e22.readBits(16), den: e22.readBits(16) };
    else {
      let e3 = Ut[t3];
      e3 && (o22 = e3);
    }
  }
  return e22.readBits(1) && e22.readBits(1), e22.readBits(1) && (e22.readBits(3), s2 = e22.readBits(1), e22.readBits(1) && (i2 = e22.readBits(8), r2 = e22.readBits(8), a2 = e22.readBits(8))), e22.readBits(1) && (u(e22), u(e22)), e22.readBits(1), e22.readBits(1), e22.readBits(1), e22.readBits(1) && (u(e22), u(e22), u(e22), u(e22)), e22.readBits(1) && (e22.readBits(32), e22.readBits(32), e22.readBits(1) && u(e22), e22.readBits(1) && Jt(e22, !0, t22)), e22.readBits(1) && (e22.readBits(1), e22.readBits(1), e22.readBits(1), n2 = u(e22), u(e22), u(e22), u(e22), u(e22)), { pixelAspectRatio: o22, colourPrimaries: i2, transferCharacteristics: r2, matrixCoefficients: a2, fullRangeFlag: s2, minSpatialSegmentationIdc: n2 };
}, Jt = (e22, t22, i2) => {
  let r2 = !1, a2 = !1, s2 = !1;
  r2 = e22.readBits(1) === 1, a2 = e22.readBits(1) === 1, (r2 || a2) && (s2 = e22.readBits(1) === 1, s2 && (e22.readBits(8), e22.readBits(5), e22.readBits(1), e22.readBits(5)), e22.readBits(4), e22.readBits(4), s2 && e22.readBits(4), e22.readBits(5), e22.readBits(5), e22.readBits(5));
  for (let n2 = 0; n2 <= i2; n2++) {
    let t3 = !0;
    e22.readBits(1) === 1 || (t3 = e22.readBits(1) === 1);
    let i3 = !1;
    t3 ? u(e22) : i3 = e22.readBits(1) === 1;
    let n3 = 1;
    i3 || (n3 = u(e22) + 1), r2 && Zt(e22, n3, s2), a2 && Zt(e22, n3, s2);
  }
}, Zt = (e22, t22, i2) => {
  for (let r2 = 0; r2 < t22; r2++) u(e22), u(e22), i2 && (u(e22), u(e22)), e22.readBits(1);
}, ei, ti;
(ti = ei || (ei = {}))[ti.audAllowed = 0] = "audAllowed", ti[ti.beforeFirstVcl = 1] = "beforeFirstVcl", ti[ti.afterFirstVcl = 2] = "afterFirstVcl", ti[ti.eoBitstreamAllowed = 3] = "eoBitstreamAllowed", ti[ti.noMoreDataAllowed = 4] = "noMoreDataAllowed";
var ii = (e22, t22) => {
  let i2 = /* @__PURE__ */ new Set(), r2 = ei.audAllowed;
  for (let s2 of Vt(e22, t22)) {
    if (r2 === ei.noMoreDataAllowed) {
      i2.add(s2.offset);
      continue;
    }
    let t3 = Ht(e22[s2.offset]);
    if (r2 === ei.eoBitstreamAllowed && t3 !== 37) {
      i2.add(s2.offset);
      continue;
    }
    let a3 = !1;
    t3 === 35 ? r2 > ei.audAllowed ? a3 = !0 : r2 = ei.beforeFirstVcl : t3 <= 31 ? r2 > ei.afterFirstVcl ? a3 = !0 : r2 = ei.afterFirstVcl : t3 === 36 ? r2 !== ei.afterFirstVcl ? a3 = !0 : r2 = ei.eoBitstreamAllowed : t3 === 37 ? r2 < ei.afterFirstVcl ? a3 = !0 : r2 = ei.noMoreDataAllowed : t3 === 32 || t3 === 33 || t3 === 34 || t3 === 39 || t3 >= 41 && t3 <= 44 || t3 >= 48 && t3 <= 55 ? r2 > ei.beforeFirstVcl ? a3 = !0 : r2 = ei.beforeFirstVcl : (t3 === 38 || t3 === 40 || t3 >= 45 && t3 <= 47 || t3 >= 56 && t3 <= 63) && r2 < ei.afterFirstVcl && (a3 = !0), a3 && i2.add(s2.offset);
  }
  if (i2.size === 0) return null;
  let a2 = [];
  for (let s2 of Vt(e22, t22)) i2.has(s2.offset) || a2.push(e22.subarray(s2.offset, s2.offset + s2.length));
  return ((e3, t3) => {
    if (t3.description) {
      let i3 = 3 & m(t3.description)[21];
      return zt(e3, i3 + 1);
    }
    return Nt(e3);
  })(a2, t22);
}, ri = (e22) => {
  let t22 = new Me(e22);
  if (t22.readBits(2) !== 2) return null;
  let i2 = t22.readBits(1), r2 = (t22.readBits(1) << 1) + i2;
  if (r2 === 3 && t22.skipBits(1), t22.readBits(1) === 1 || t22.readBits(1) !== 0 || (t22.skipBits(2), t22.readBits(24) !== 4817730)) return null;
  let a2 = 8;
  r2 >= 2 && (a2 = t22.readBits(1) ? 12 : 10);
  let s2 = t22.readBits(3), n2 = 0, o22 = 0;
  if (s2 !== 7)
    if (o22 = t22.readBits(1), r2 === 1 || r2 === 3) {
      let e3 = t22.readBits(1), i3 = t22.readBits(1);
      n2 = e3 || i3 ? e3 && !i3 ? 2 : 1 : 3, t22.skipBits(1);
    } else n2 = 1;
  else n2 = 3, o22 = 1;
  let c22 = (t22.readBits(16) + 1) * (t22.readBits(16) + 1), d22 = l2(He).level;
  for (let l22 of He) if (c22 <= l22.maxPictureSize) {
    d22 = l22.level;
    break;
  }
  return { profile: r2, level: d22, bitDepth: a2, chromaSubsampling: n2, videoFullRangeFlag: o22, colourPrimaries: s2 === 2 ? 1 : s2 === 1 ? 6 : 2, transferCharacteristics: s2 === 2 ? 1 : s2 === 1 ? 6 : 2, matrixCoefficients: s2 === 7 ? 0 : s2 === 2 ? 1 : s2 === 1 ? 6 : 2 };
}, ai = function* (e22) {
  let t22 = new Me(e22), i2 = () => {
    let e3 = 0;
    for (let i3 = 0; i3 < 8; i3++) {
      let r2 = t22.readAlignedByte();
      if (e3 |= (127 & r2) << 7 * i3, !(128 & r2)) break;
      if (i3 === 7 && 128 & r2) return null;
    }
    return e3 >= 2 ** 32 - 1 ? null : e3;
  };
  for (; t22.getBitsLeft() >= 8; ) {
    t22.skipBits(1);
    let r2 = t22.readBits(4), a2 = t22.readBits(1), s2 = t22.readBits(1), n2;
    if (t22.skipBits(1), a2 && t22.skipBits(8), s2) {
      let e3 = i2();
      if (e3 === null) return;
      n2 = e3;
    } else n2 = Math.floor(t22.getBitsLeft() / 8);
    o2(t22.pos % 8 == 0), yield { type: r2, data: e22.subarray(t22.pos / 8, t22.pos / 8 + n2) }, t22.skipBits(8 * n2);
  }
}, si = (e22) => {
  for (let { type: t22, data: i2 } of ai(e22)) {
    if (t22 !== 1) continue;
    let e3 = new Me(i2), r2 = e3.readBits(3);
    e3.readBits(1);
    let a2 = e3.readBits(1), s2 = 0, n2 = 0, o22 = 0;
    if (a2) s2 = e3.readBits(5);
    else {
      if (e3.readBits(1) && (e3.skipBits(32), e3.skipBits(32), e3.readBits(1)))
        return null;
      let t3 = e3.readBits(1);
      t3 && (o22 = e3.readBits(5), e3.skipBits(32), e3.skipBits(5), e3.skipBits(5));
      let i3 = e3.readBits(5);
      for (let r3 = 0; r3 <= i3; r3++) {
        e3.skipBits(12);
        let i4 = e3.readBits(5);
        if (r3 === 0 && (s2 = i4), i4 > 7) {
          let t4 = e3.readBits(1);
          r3 === 0 && (n2 = t4);
        }
        if (t3 && e3.readBits(1)) {
          let t4 = o22 + 1;
          e3.skipBits(t4), e3.skipBits(t4), e3.skipBits(1);
        }
        e3.readBits(1) && e3.skipBits(4);
      }
    }
    let c22 = e3.readBits(4), l22 = e3.readBits(4), d22 = c22 + 1;
    e3.skipBits(d22);
    let u2 = l22 + 1;
    e3.skipBits(u2);
    let h22 = 0;
    if (h22 = a2 ? 0 : e3.readBits(1), h22 && (e3.skipBits(4), e3.skipBits(3)), e3.skipBits(1), e3.skipBits(1), e3.skipBits(1), !a2) {
      e3.skipBits(1), e3.skipBits(1), e3.skipBits(1), e3.skipBits(1);
      let t3 = e3.readBits(1);
      t3 && (e3.skipBits(1), e3.skipBits(1));
      let i3 = 0;
      i3 = e3.readBits(1) ? 2 : e3.readBits(1), i3 > 0 && (e3.readBits(1) || e3.skipBits(1)), t3 && e3.skipBits(3);
    }
    e3.skipBits(1), e3.skipBits(1), e3.skipBits(1);
    let m2 = e3.readBits(1), f22 = 8;
    r2 === 2 && m2 ? f22 = e3.readBits(1) ? 12 : 10 : r2 <= 2 && (f22 = m2 ? 10 : 8);
    let p22 = 0;
    r2 !== 1 && (p22 = e3.readBits(1));
    let g2 = 1, k2 = 1, w2 = 0;
    return p22 || (r2 === 0 ? (g2 = 1, k2 = 1) : r2 === 1 ? (g2 = 0, k2 = 0) : f22 === 12 && (g2 = e3.readBits(1), g2 && (k2 = e3.readBits(1))), g2 && k2 && (w2 = e3.readBits(2))), { profile: r2, level: s2, tier: n2, bitDepth: f22, monochrome: p22, chromaSubsamplingX: g2, chromaSubsamplingY: k2, chromaSamplePosition: w2 };
  }
  return null;
}, ni = (e22) => {
  let t22 = f2(e22), i2 = t22.getUint8(9), r2 = t22.getUint16(10, !0), a2 = t22.getUint32(12, !0), s2 = t22.getInt16(16, !0), n2 = t22.getUint8(18), o22 = null;
  return n2 && (o22 = e22.subarray(19, 21 + i2)), { outputChannelCount: i2, preSkip: r2, inputSampleRate: a2, outputGain: s2, channelMappingFamily: n2, channelMappingTable: o22 };
}, oi = [480, 960, 1920, 2880, 480, 960, 1920, 2880, 480, 960, 1920, 2880, 480, 960, 480, 960, 120, 240, 480, 960, 120, 240, 480, 960, 120, 240, 480, 960, 120, 240, 480, 960], ci = (e22) => {
  if (e22.length < 7) throw new Error("Setup header is too short.");
  if (e22[0] !== 5) throw new Error("Wrong packet type in Setup header.");
  if (String.fromCharCode(...e22.slice(1, 7)) !== "vorbis") throw new Error("Invalid packet signature in Setup header.");
  let t22 = e22.length, i2 = new Uint8Array(t22);
  for (let d22 = 0; d22 < t22; d22++) i2[d22] = e22[t22 - 1 - d22];
  let r2 = new Me(i2), a2 = 0;
  for (; r2.getBitsLeft() > 97; ) if (r2.readBits(1) === 1) {
    a2 = r2.pos;
    break;
  }
  if (a2 === 0) throw new Error("Invalid Setup header: framing bit not found.");
  let s2 = 0, n2 = !1, o22 = 0;
  for (; r2.getBitsLeft() >= 97; ) {
    let e3 = r2.pos, t3 = r2.readBits(8), i3 = r2.readBits(16), a3 = r2.readBits(16);
    if (t3 > 63 || i3 !== 0 || a3 !== 0) {
      r2.pos = e3;
      break;
    }
    if (r2.skipBits(1), s2++, s2 > 64) break;
    r2.clone().readBits(6) + 1 === s2 && (n2 = !0, o22 = s2);
  }
  if (!n2) throw new Error("Invalid Setup header: mode header not found.");
  if (o22 > 63) throw new Error(`Unsupported mode count: ${o22}.`);
  let c22 = o22;
  r2.pos = 0, r2.skipBits(a2);
  let l22 = Array(c22).fill(0);
  for (let d22 = c22 - 1; d22 >= 0; d22--) r2.skipBits(40), l22[d22] = r2.readBits(1);
  return { modeBlockflags: l22 };
}, li = (e22, t22, i2) => {
  switch (e22) {
    case "avc":
      for (let e3 of Ft(i2, t22)) {
        let t3 = i2[e3.offset], r2 = Rt(t3);
        if (r2 >= Et.NON_IDR_SLICE && r2 <= Et.SLICE_DPC) return "delta";
        if (r2 === Et.IDR) return "key";
        if (r2 === Et.SEI && (!re2() || se() >= 144)) {
          let t4 = i2.subarray(e3.offset, e3.offset + e3.length), r3 = Dt(t4), a2 = 1;
          do {
            let e4 = 0;
            for (; ; ) {
              let t6 = r3[a2++];
              if (t6 === void 0 || (e4 += t6, t6 < 255)) break;
            }
            let t5 = 0;
            for (; ; ) {
              let e5 = r3[a2++];
              if (e5 === void 0 || (t5 += e5, e5 < 255)) break;
            }
            if (e4 === 6) {
              let e5 = new Me(r3);
              e5.pos = 8 * a2;
              let t6 = u(e5), i3 = e5.readBits(1);
              if (t6 === 0 && i3 === 1) return "key";
            }
            a2 += t5;
          } while (a2 < r3.length - 1);
        }
      }
      return "delta";
    case "hevc":
      for (let e3 of Vt(i2, t22)) {
        let t3 = Ht(i2[e3.offset]);
        if (t3 < _t.BLA_W_LP) return "delta";
        if (t3 <= _t.RSV_IRAP_VCL23) return "key";
      }
      return "delta";
    case "vp8":
      return (1 & i2[0]) === 0 ? "key" : "delta";
    case "vp9": {
      let e3 = new Me(i2);
      if (e3.readBits(2) !== 2) return null;
      let t3 = e3.readBits(1);
      return (e3.readBits(1) << 1) + t3 === 3 && e3.skipBits(1), e3.readBits(1) ? null : e3.readBits(1) === 0 ? "key" : "delta";
    }
    case "av1": {
      let e3 = !1;
      for (let { type: t3, data: r2 } of ai(i2)) if (t3 === 1) {
        let t4 = new Me(r2);
        t4.skipBits(4), e3 = !!t4.readBits(1);
      } else if (t3 === 3 || t3 === 6 || t3 === 7) {
        if (e3) return "key";
        let t4 = new Me(r2);
        return t4.readBits(1) ? null : t4.readBits(2) === 0 ? "key" : "delta";
      }
      return null;
    }
    case "prores":
      return "key";
    default:
      N(e22), o2(!1);
  }
}, di, ui;
(ui = di || (di = {}))[ui.STREAMINFO = 0] = "STREAMINFO", ui[ui.VORBIS_COMMENT = 4] = "VORBIS_COMMENT", ui[ui.PICTURE = 6] = "PICTURE";
var hi = (e22, t22) => {
  var i2, r2;
  let a2 = f2(e22), s2 = 0, n2 = a2.getUint32(s2, !0);
  s2 += 4;
  let o22 = p2.decode(e22.subarray(s2, s2 + n2));
  s2 += n2, n2 > 0 && (t22.raw ?? (t22.raw = {}), (i2 = t22.raw).vendor ?? (i2.vendor = o22));
  let c22 = a2.getUint32(s2, !0);
  s2 += 4;
  for (let l22 = 0; l22 < c22; l22++) {
    let i3 = a2.getUint32(s2, !0);
    s2 += 4;
    let n3 = p2.decode(e22.subarray(s2, s2 + i3));
    s2 += i3;
    let o3 = n3.indexOf("=");
    if (o3 === -1) continue;
    let c3 = n3.slice(0, o3).toUpperCase(), l3 = n3.slice(o3 + 1);
    switch (t22.raw ?? (t22.raw = {}), (r2 = t22.raw)[c3] ?? (r2[c3] = l3), c3) {
      case "TITLE":
        t22.title ?? (t22.title = l3);
        break;
      case "DESCRIPTION":
        t22.description ?? (t22.description = l3);
        break;
      case "ARTIST":
        t22.artist ?? (t22.artist = l3);
        break;
      case "ALBUM":
        t22.album ?? (t22.album = l3);
        break;
      case "ALBUMARTIST":
        t22.albumArtist ?? (t22.albumArtist = l3);
        break;
      case "COMMENT":
        t22.comment ?? (t22.comment = l3);
        break;
      case "LYRICS":
        t22.lyrics ?? (t22.lyrics = l3);
        break;
      case "TRACKNUMBER":
        {
          let e3 = l3.split("/"), i4 = Number.parseInt(e3[0], 10), r3 = e3[1] && Number.parseInt(e3[1], 10);
          Number.isInteger(i4) && i4 > 0 && (t22.trackNumber ?? (t22.trackNumber = i4)), r3 && Number.isInteger(r3) && r3 > 0 && (t22.tracksTotal ?? (t22.tracksTotal = r3));
        }
        break;
      case "TRACKTOTAL":
        {
          let e3 = Number.parseInt(l3, 10);
          Number.isInteger(e3) && e3 > 0 && (t22.tracksTotal ?? (t22.tracksTotal = e3));
        }
        break;
      case "DISCNUMBER":
        {
          let e3 = l3.split("/"), i4 = Number.parseInt(e3[0], 10), r3 = e3[1] && Number.parseInt(e3[1], 10);
          Number.isInteger(i4) && i4 > 0 && (t22.discNumber ?? (t22.discNumber = i4)), r3 && Number.isInteger(r3) && r3 > 0 && (t22.discsTotal ?? (t22.discsTotal = r3));
        }
        break;
      case "DISCTOTAL":
        {
          let e3 = Number.parseInt(l3, 10);
          Number.isInteger(e3) && e3 > 0 && (t22.discsTotal ?? (t22.discsTotal = e3));
        }
        break;
      case "DATE":
        {
          let e3 = new Date(l3);
          Number.isNaN(e3.getTime()) || (t22.date ?? (t22.date = e3));
        }
        break;
      case "GENRE":
        t22.genre ?? (t22.genre = l3);
        break;
      case "METADATA_BLOCK_PICTURE": {
        let e3 = ue(l3), i4 = f2(e3), r3 = i4.getUint32(0, !1), a3 = i4.getUint32(4, !1), s3 = String.fromCharCode(...e3.subarray(8, 8 + a3)), n4 = i4.getUint32(8 + a3, !1), o4 = p2.decode(e3.subarray(12 + a3, 12 + a3 + n4)), c4 = i4.getUint32(a3 + n4 + 28), d22 = e3.subarray(a3 + n4 + 32, a3 + n4 + 32 + c4);
        t22.images ?? (t22.images = []), t22.images.push({ data: d22, mimeType: s3, kind: r3 === 3 ? "coverFront" : r3 === 4 ? "coverBack" : "unknown", name: void 0, description: o4 || void 0 });
      }
    }
  }
}, mi = [2, 1, 2, 3, 3, 4, 4, 5], fi = (e22) => {
  if (e22.length < 7 || e22[0] !== 11 || e22[1] !== 119) return null;
  let t22 = new Me(e22);
  t22.skipBits(16), t22.skipBits(16);
  let i2 = t22.readBits(2);
  if (i2 === 3) return null;
  let r2 = t22.readBits(6), a2 = t22.readBits(5);
  if (a2 > 8) return null;
  let s2 = t22.readBits(3), n2 = t22.readBits(3);
  return 1 & n2 && n2 !== 1 && t22.skipBits(2), 4 & n2 && t22.skipBits(2), n2 === 2 && t22.skipBits(2), { fscod: i2, bsid: a2, bsmod: s2, acmod: n2, lfeon: t22.readBits(1), bitRateCode: Math.floor(r2 / 2) };
}, pi = [128, 138, 192, 128, 140, 192, 160, 174, 240, 160, 176, 240, 192, 208, 288, 192, 210, 288, 224, 242, 336, 224, 244, 336, 256, 278, 384, 256, 280, 384, 320, 348, 480, 320, 350, 480, 384, 416, 576, 384, 418, 576, 448, 486, 672, 448, 488, 672, 512, 556, 768, 512, 558, 768, 640, 696, 960, 640, 698, 960, 768, 834, 1152, 768, 836, 1152, 896, 974, 1344, 896, 976, 1344, 1024, 1114, 1536, 1024, 1116, 1536, 1280, 1392, 1920, 1280, 1394, 1920, 1536, 1670, 2304, 1536, 1672, 2304, 1792, 1950, 2688, 1792, 1952, 2688, 2048, 2228, 3072, 2048, 2230, 3072, 2304, 2506, 3456, 2304, 2508, 3456, 2560, 2786, 3840, 2560, 2788, 3840], gi = [1, 2, 3, 6], ki = (e22) => {
  if (e22.length < 6 || e22[0] !== 11 || e22[1] !== 119) return null;
  let t22 = new Me(e22);
  t22.skipBits(16);
  let i2 = t22.readBits(2);
  if (t22.skipBits(3), i2 !== 0 && i2 !== 2) return null;
  let r2 = t22.readBits(11), a2 = t22.readBits(2), s2, n2 = 0;
  a2 === 3 ? (n2 = t22.readBits(2), s2 = 3) : s2 = t22.readBits(2);
  let o22 = t22.readBits(3), c22 = t22.readBits(1), l22 = t22.readBits(5);
  if (l22 < 11 || l22 > 16) return null;
  let d22 = gi[s2], u2;
  return u2 = a2 < 3 ? Ct[a2] / 1e3 : xt[n2] / 1e3, { dataRate: Math.round((r2 + 1) * u2 / (16 * d22)), substreams: [{ fscod: a2, fscod2: n2, bsid: l22, bsmod: 0, acmod: o22, lfeon: c22, numDepSub: 0, chanLoc: 0 }] };
}, wi = (e22) => {
  let t22 = e22.substreams[0];
  return o2(t22), t22.fscod < 3 ? Ct[t22.fscod] : t22.fscod2 !== null && t22.fscod2 < 3 ? xt[t22.fscod2] : null;
}, bi = (e22) => {
  let t22 = e22.substreams[0];
  o2(t22);
  let i2 = mi[t22.acmod] + t22.lfeon;
  if (t22.numDepSub > 0) {
    let e3 = [2, 2, 1, 1, 2, 2, 2, 1, 1];
    for (let r2 = 0; r2 < 9; r2++) t22.chanLoc & 1 << 8 - r2 && (i2 += e3[r2]);
  }
  return i2;
}, yi = [0, 8e3, 16e3, 32e3, 0, 0, 11025, 22050, 44100, 0, 0, 12e3, 24e3, 48e3, 96e3, 192e3], vi = [32e3, 56e3, 64e3, 96e3, 112e3, 128e3, 192e3, 224e3, 256e3, 32e4, 384e3, 448e3, 512e3, 576e3, 64e4, 768e3, 96e4, 1024e3, 1152e3, 128e4, 1344e3, 1408e3, 1411200, 1472e3, 1536e3, 192e4, 2048e3, 3072e3, 384e4, 0, 0, 0], Ti = [16, 16, 20, 20, 0, 24, 24, 0], Si = [1, 2, 2, 2, 2, 3, 3, 4, 4, 5, 6, 6, 6, 7, 8, 8], Pi = [1, 2, 2, 2, 2, 3, 18, 19, 6, 7, 518, 323, 83, 519, 582, 535], Ci = [32e3, 44100, 48e3, 0], xi = [8e3, 16e3, 32e3, 64e3, 128e3, 22050, 44100, 88200, 176400, 352800, 12e3, 24e3, 48e3, 96e3, 192e3, 384e3], Ei = [512, 1024, 2048, 4096], Ii = (e22) => {
  let t22 = Bi(e22), i2 = f2(e22), r2 = t22 ? 4 * Math.ceil(t22.frameSize / 4) : 0, a2 = null;
  for (; r2 + 4 <= e22.length && i2.getUint32(r2) === 1683496997; ) {
    let t3 = Ai(e22.subarray(r2));
    if (!t3) break;
    a2 ?? (a2 = t3), r2 += t3.frameSize;
  }
  if (t22) return { frameSize: a2 ? r2 : t22.frameSize, sampleRate: t22.sampleRate, numberOfChannels: t22.numberOfChannels, sampleCount: t22.sampleCount, channelLayout: t22.channelLayout, pcmResolution: t22.pcmResolution, bitRate: t22.bitRate, core: t22, hasExtensions: a2 !== null };
  if (!a2?.asset) return null;
  let { asset: s2 } = a2;
  return { frameSize: r2, sampleRate: s2.sampleRate, numberOfChannels: s2.numberOfChannels, sampleCount: s2.sampleCount, channelLayout: s2.channelLayout, pcmResolution: s2.pcmResolution, bitRate: 0, core: null, hasExtensions: !0 };
}, _i = (e22) => {
  let t22 = Ii(e22);
  return t22?.core ? t22.hasExtensions ? "dtsh" : "dtsc" : null;
}, Bi = (e22) => {
  if (e22.length < 18 || e22[0] !== 127 || e22[1] !== 254 || e22[2] !== 128 || e22[3] !== 1) return null;
  let t22 = new Me(e22);
  if (t22.skipBits(32), t22.skipBits(1), t22.readBits(5) !== 31) return null;
  let i2 = t22.readBits(1), r2 = t22.readBits(7) + 1;
  if (r2 % 8 != 0) return null;
  let a2 = t22.readBits(14) + 1;
  if (a2 < 96) return null;
  let s2 = t22.readBits(6);
  if (s2 >= Si.length) return null;
  let n2 = yi[t22.readBits(4)];
  if (n2 === 0) return null;
  let o22 = vi[t22.readBits(5)];
  if (t22.readBits(1) !== 0) return null;
  t22.skipBits(4), t22.skipBits(5);
  let c22 = t22.readBits(2);
  if (c22 === 3) return null;
  t22.skipBits(1), i2 && t22.skipBits(16), t22.skipBits(7);
  let l22 = Ti[t22.readBits(3)];
  if (l22 === 0) return null;
  let d22 = c22 !== 0;
  return { frameSize: a2, sampleRate: n2, numberOfChannels: Si[s2] + (d22 ? 1 : 0), sampleCount: 32 * r2, channelLayout: Pi[s2] | (d22 ? 8 : 0), amode: s2, lfePresent: d22, bitRate: o22, pcmResolution: l22 };
}, Ai = (e22) => {
  if (e22.length < 10 || e22[0] !== 100 || e22[1] !== 88 || e22[2] !== 32 || e22[3] !== 37) return null;
  let t22 = new Me(e22);
  t22.skipBits(32), t22.skipBits(8);
  let i2 = t22.readBits(2), r2 = t22.readBits(1), a2 = 8 + 4 * r2, s2 = 16 + 4 * r2;
  t22.skipBits(a2);
  let n2 = t22.readBits(s2) + 1, o22 = { frameSize: n2, asset: null };
  if (!t22.readBits(1)) return o22;
  let c22 = Ci[t22.readBits(2)], l22 = 512 * (t22.readBits(3) + 1);
  t22.readBits(1) && t22.skipBits(36);
  let d22 = t22.readBits(3) + 1, u2 = t22.readBits(3) + 1, h22 = [];
  for (let k2 = 0; k2 < d22; k2++) h22.push(t22.readBits(i2 + 1));
  for (let k2 of h22) t22.skipBits(8 * K(k2));
  if (t22.readBits(1)) {
    t22.skipBits(2);
    let e3 = t22.readBits(2) + 1 << 2, i3 = t22.readBits(2) + 1;
    t22.skipBits(i3 * e3);
  }
  for (let k2 = 0; k2 < u2; k2++) t22.skipBits(s2);
  t22.skipBits(9), t22.skipBits(3), t22.readBits(1) && t22.skipBits(4), t22.readBits(1) && t22.skipBits(24), t22.readBits(1) && t22.skipBits(8 * (t22.readBits(10) + 1));
  let m2 = t22.readBits(5) + 1, f22 = xi[t22.readBits(4)], p22 = t22.readBits(8) + 1, g2 = 0;
  if (t22.readBits(1) && (p22 > 2 && t22.skipBits(1), p22 > 6 && t22.skipBits(1), t22.readBits(1))) {
    let e3 = t22.readBits(2) + 1 << 2;
    g2 = t22.readBits(e3);
  }
  return c22 === 0 || t22.getBitsLeft() < 0 ? o22 : { frameSize: n2, asset: { sampleRate: f22, numberOfChannels: p22, sampleCount: Math.round(l22 * f22 / c22), channelLayout: g2, pcmResolution: m2 } };
}, Mi = (e22) => {
  var t22, i2;
  let r2 = new Uint8Array(20), a2 = f2(r2);
  a2.setUint32(0, e22.sampleRate), a2.setUint32(4, e22.bitRate), a2.setUint32(8, e22.bitRate), r2[12] = e22.pcmResolution;
  let s2 = e22.core && !e22.hasExtensions ? 1 : 0, n2 = new Me(r2);
  return n2.seekToByte(13), n2.writeBits(2, Math.max(Ei.indexOf(e22.sampleCount), 0)), n2.writeBits(5, s2), n2.writeBits(1, (t22 = e22.core) != null && t22.lfePresent ? 1 : 0), n2.writeBits(6, ((i2 = e22.core) == null ? void 0 : i2.amode) ?? 0), n2.writeBits(14, e22.core ? e22.core.frameSize - 1 : 0), n2.writeBits(1, 0), n2.writeBits(3, 0), n2.writeBits(16, e22.channelLayout), n2.writeBits(1, 0), n2.writeBits(1, 0), n2.writeBits(1, 0), n2.writeBits(5, 0), r2;
}, Fi = (e22) => K(e22) + K(44646 & e22);
var Ri = class {
  constructor(e22) {
    this.input = e22;
  }
  dispose() {
  }
};
var Di = new Uint8Array(0), Oi = class _Oi {
  constructor(e22, t22, i2, r2, a2 = -1, s2, n2) {
    if (this.data = e22, this.type = t22, this.timestamp = i2, this.duration = r2, this.sequenceNumber = a2, e22 === Di && s2 === void 0) throw new Error("Internal error: byteLength must be explicitly provided when constructing metadata-only packets.");
    if (s2 === void 0 && (s2 = e22.byteLength), !(e22 instanceof Uint8Array)) throw new TypeError("data must be a Uint8Array.");
    if (t22 !== "key" && t22 !== "delta") throw new TypeError('type must be either "key" or "delta".');
    if (!Number.isFinite(i2)) throw new TypeError("timestamp must be a number.");
    if (!Number.isFinite(r2) || r2 < 0) throw new TypeError("duration must be a non-negative number.");
    if (!Number.isFinite(a2)) throw new TypeError("sequenceNumber must be a number.");
    if (!Number.isInteger(s2) || s2 < 0) throw new TypeError("byteLength must be a non-negative integer.");
    if (n2 !== void 0 && (typeof n2 != "object" || !n2)) throw new TypeError("sideData, when provided, must be an object.");
    if (n2?.alpha !== void 0 && !(n2.alpha instanceof Uint8Array)) throw new TypeError("sideData.alpha, when provided, must be a Uint8Array.");
    if (n2?.alphaByteLength !== void 0 && (!Number.isInteger(n2.alphaByteLength) || n2.alphaByteLength < 0)) throw new TypeError("sideData.alphaByteLength, when provided, must be a non-negative integer.");
    this.byteLength = s2, this.sideData = n2 ?? {}, this.sideData.alpha && this.sideData.alphaByteLength === void 0 && (this.sideData.alphaByteLength = this.sideData.alpha.byteLength);
  }
  get isMetadataOnly() {
    return this.data === Di;
  }
  get microsecondTimestamp() {
    return Math.trunc(X * this.timestamp);
  }
  get microsecondDuration() {
    return Math.trunc(X * this.duration);
  }
  toEncodedVideoChunk() {
    if (this.isMetadataOnly) throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");
    if (typeof EncodedVideoChunk > "u") throw new Error("EncodedVideoChunk is not available in this environment.");
    return new EncodedVideoChunk({ data: this.data, type: this.type, timestamp: this.microsecondTimestamp, duration: this.microsecondDuration });
  }
  alphaToEncodedVideoChunk(e22 = this.type) {
    if (!this.sideData.alpha) throw new TypeError("This packet does not contain alpha side data.");
    if (this.isMetadataOnly) throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");
    if (typeof EncodedVideoChunk > "u") throw new Error("EncodedVideoChunk is not available in this environment.");
    return new EncodedVideoChunk({ data: this.sideData.alpha, type: e22, timestamp: this.microsecondTimestamp, duration: this.microsecondDuration });
  }
  toEncodedAudioChunk() {
    if (this.isMetadataOnly) throw new TypeError("Metadata-only packets cannot be converted to an audio chunk.");
    if (typeof EncodedAudioChunk > "u") throw new Error("EncodedAudioChunk is not available in this environment.");
    return new EncodedAudioChunk({ data: this.data, type: this.type, timestamp: this.microsecondTimestamp, duration: this.microsecondDuration });
  }
  static fromEncodedChunk(e22, t22) {
    if (!(e22 instanceof EncodedVideoChunk || e22 instanceof EncodedAudioChunk)) throw new TypeError("chunk must be an EncodedVideoChunk or EncodedAudioChunk.");
    let i2 = new Uint8Array(e22.byteLength);
    return e22.copyTo(i2), new _Oi(i2, e22.type, e22.timestamp / 1e6, (e22.duration ?? 0) / 1e6, void 0, void 0, t22);
  }
  clone(e22) {
    if (e22 !== void 0 && (typeof e22 != "object" || e22 === null)) throw new TypeError("options, when provided, must be an object.");
    if (e22?.data !== void 0 && !(e22.data instanceof Uint8Array)) throw new TypeError("options.data, when provided, must be a Uint8Array.");
    if (e22?.type !== void 0 && e22.type !== "key" && e22.type !== "delta") throw new TypeError('options.type, when provided, must be either "key" or "delta".');
    if (e22?.timestamp !== void 0 && !Number.isFinite(e22.timestamp)) throw new TypeError("options.timestamp, when provided, must be a number.");
    if (e22?.duration !== void 0 && !Number.isFinite(e22.duration)) throw new TypeError("options.duration, when provided, must be a number.");
    if (e22?.sequenceNumber !== void 0 && !Number.isFinite(e22.sequenceNumber)) throw new TypeError("options.sequenceNumber, when provided, must be a number.");
    if (e22?.sideData !== void 0 && (typeof e22.sideData != "object" || e22.sideData === null)) throw new TypeError("options.sideData, when provided, must be an object.");
    return new _Oi(e22?.data ?? this.data, e22?.type ?? this.type, e22?.timestamp ?? this.timestamp, e22?.duration ?? this.duration, e22?.sequenceNumber ?? this.sequenceNumber, this.byteLength, e22?.sideData ?? this.sideData);
  }
};
var Ni = (e22) => {
  let t22 = (e22.hasVideo ? "video/" : e22.hasAudio ? "audio/" : "application/") + (e22.isQuickTime ? "quicktime" : "mp4");
  return e22.codecStrings.length > 0 && (t22 += `; codecs="${[...new Set(e22.codecStrings)].join(", ")}"`), t22;
}, zi = (e22) => {
  let t22 = f2(e22), i2 = 0, r2 = t22.getUint8(i2);
  i2 += 1, i2 += 3;
  let a2 = I2(e22.subarray(i2, i2 + 16));
  i2 += 16;
  let s2 = null;
  if (r2 > 0) {
    let r3 = t22.getUint32(i2);
    if (i2 += 4, r3 > 0) {
      s2 = [];
      for (let t3 = 0; t3 < r3; t3++) s2.push(I2(e22.subarray(i2, i2 + 16))), i2 += 16;
    }
  }
  let n2 = t22.getUint32(i2);
  return i2 += 4, { systemId: a2, keyIds: s2, data: e22.slice(i2, i2 + n2) };
}, Li = (e22, t22) => e22.systemId === t22.systemId && he(e22.data, t22.data), Ui = 16, Wi = (e22) => {
  let t22 = $o(e22), i2 = ec(e22, 4), r2 = 8;
  t22 === 1 && (t22 = Go(e22), r2 = 16);
  let a2 = t22 - r2;
  return a2 < 0 ? null : { name: i2, totalSize: t22, headerSize: r2, contentSize: a2 };
}, qi = (e22) => Ko(e22) / 65536, Vi = (e22) => Ko(e22) / 1073741824, Hi = (e22) => {
  let t22 = 0;
  for (let i2 = 0; i2 < 4; i2++) {
    t22 <<= 7;
    let i3 = Lo(e22);
    if (t22 |= 127 & i3, !(128 & i3)) break;
  }
  return t22;
}, $i = (e22) => {
  let t22 = Wo(e22);
  return e22.skip(2), t22 = Math.min(t22, e22.remainingLength), p2.decode(zo(e22, t22));
}, ji = (e22) => {
  let t22 = Wi(e22);
  if (!t22 || t22.name !== "data" || e22.remainingLength < 8) return null;
  let i2 = $o(e22);
  e22.skip(4);
  let r2 = zo(e22, t22.contentSize - 8);
  switch (i2) {
    case 1:
      return p2.decode(r2);
    case 2:
      return new TextDecoder("utf-16be").decode(r2);
    case 13:
      return new Ie(r2, "image/jpeg");
    case 14:
      return new Ie(r2, "image/png");
    case 27:
      return new Ie(r2, "image/bmp");
    default:
      return r2;
  }
}, Ki = 16, Qi = new Uint32Array(256), Gi = new Uint32Array(256), Xi = new Uint32Array(256), Yi = new Uint32Array(256), Ji = new Uint32Array(256), Zi = new Uint32Array(256), er = new Uint32Array(10), tr = !1, ir = class {
  constructor() {
    this.roundkey = new Uint32Array(44), this.iv = new Uint32Array(Ki / Uint32Array.BYTES_PER_ELEMENT), this.in = new Uint8Array(Ki), this.out = new Uint8Array(Ki), this.inView = new DataView(this.in.buffer), this.outView = new DataView(this.out.buffer);
  }
  init({ key: e22, iv: t22 }) {
    o2(e22.byteLength === 16), o2(t22.byteLength === 16), tr || (() => {
      let e3 = new Uint8Array(256), t3 = new Uint8Array(256), i3 = new Uint8Array(256);
      for (let s2 = 0, n2 = 1; s2 < 256; s2++) i3[s2] = n2, t3[n2] = s2, n2 = n2 ^ n2 << 1 ^ (128 & n2 ? 283 : 0);
      let r3 = (e4, r4) => e4 && r4 ? i3[(t3[e4] + t3[r4]) % 255] : 0;
      e3[0] = 99;
      for (let s2 = 1; s2 < 256; s2++) {
        let r4 = i3[255 - t3[s2]], a3 = r4 ^ r4 << 1 ^ r4 << 2 ^ r4 << 3 ^ r4 << 4;
        a3 = a3 >>> 8 ^ 255 & a3 ^ 99, e3[s2] = a3;
      }
      for (let s2 = 0; s2 < 256; s2++) {
        let t4 = e3[s2], i4 = e3.indexOf(s2);
        Qi[s2] = t4 << 24 | t4 << 16 | t4 << 8 | t4, Zi[s2] = i4 << 24 | i4 << 16 | i4 << 8 | i4;
        let a3 = r3(i4, 14) << 24 | r3(i4, 9) << 16 | r3(i4, 13) << 8 | r3(i4, 11);
        Gi[s2] = a3, Xi[s2] = a3 >>> 8 | a3 << 24, Yi[s2] = a3 >>> 16 | a3 << 16, Ji[s2] = a3 >>> 24 | a3 << 8;
      }
      let a2 = 1;
      for (let s2 = 0; s2 < 10; s2++) er[s2] = a2 << 24, a2 = a2 << 1 ^ (128 & a2 ? 283 : 0);
      tr = !0;
    })();
    let i2 = new DataView(e22.buffer, e22.byteOffset, e22.byteLength), r2 = new DataView(t22.buffer, t22.byteOffset, t22.byteLength);
    this.roundkey[0] = i2.getUint32(0, !1), this.roundkey[1] = i2.getUint32(4, !1), this.roundkey[2] = i2.getUint32(8, !1), this.roundkey[3] = i2.getUint32(12, !1), this.iv[0] = r2.getUint32(0, !1), this.iv[1] = r2.getUint32(4, !1), this.iv[2] = r2.getUint32(8, !1), this.iv[3] = r2.getUint32(12, !1);
    for (let a2 = 4; a2 < 44; a2 += 4) {
      let e3 = this.roundkey[a2 - 1];
      this.roundkey[a2] = this.roundkey[a2 - 4] ^ 4278190080 & Qi[e3 >>> 16 & 255] ^ 16711680 & Qi[e3 >>> 8 & 255] ^ 65280 & Qi[e3 >>> 0 & 255] ^ 255 & Qi[e3 >>> 24 & 255] ^ er[a2 / 4 - 1], this.roundkey[a2 + 1] = this.roundkey[a2 - 3] ^ this.roundkey[a2], this.roundkey[a2 + 2] = this.roundkey[a2 - 2] ^ this.roundkey[a2 + 1], this.roundkey[a2 + 3] = this.roundkey[a2 - 1] ^ this.roundkey[a2 + 2];
    }
    for (let a2 = 0, s2 = 40; a2 < s2; a2 += 4, s2 -= 4) for (let e3 = 0; e3 < 4; e3++) {
      let t3 = this.roundkey[a2 + e3];
      this.roundkey[a2 + e3] = this.roundkey[s2 + e3], this.roundkey[s2 + e3] = t3;
    }
    for (let a2 = 4; a2 < 40; a2 += 4) for (let e3 = 0; e3 < 4; e3++) {
      let t3 = this.roundkey[a2 + e3];
      this.roundkey[a2 + e3] = Gi[255 & Qi[t3 >>> 24 & 255]] ^ Xi[255 & Qi[t3 >>> 16 & 255]] ^ Yi[255 & Qi[t3 >>> 8 & 255]] ^ Ji[255 & Qi[t3 >>> 0 & 255]];
    }
  }
  decrypt() {
    let e22 = this.inView.getUint32(0, !1) ^ this.roundkey[0], t22 = this.inView.getUint32(4, !1) ^ this.roundkey[1], i2 = this.inView.getUint32(8, !1) ^ this.roundkey[2], r2 = this.inView.getUint32(12, !1) ^ this.roundkey[3], a2 = this.inView.getUint32(0, !1), s2 = this.inView.getUint32(4, !1), n2 = this.inView.getUint32(8, !1), o22 = this.inView.getUint32(12, !1), c22, l22, d22, u2;
    for (let g2 = 1; g2 < 10; g2++) {
      let a3 = 4 * g2;
      c22 = Gi[e22 >>> 24] ^ Xi[r2 >>> 16 & 255] ^ Yi[i2 >>> 8 & 255] ^ Ji[255 & t22] ^ this.roundkey[a3], l22 = Gi[t22 >>> 24] ^ Xi[e22 >>> 16 & 255] ^ Yi[r2 >>> 8 & 255] ^ Ji[255 & i2] ^ this.roundkey[a3 + 1], d22 = Gi[i2 >>> 24] ^ Xi[t22 >>> 16 & 255] ^ Yi[e22 >>> 8 & 255] ^ Ji[255 & r2] ^ this.roundkey[a3 + 2], u2 = Gi[r2 >>> 24] ^ Xi[i2 >>> 16 & 255] ^ Yi[t22 >>> 8 & 255] ^ Ji[255 & e22] ^ this.roundkey[a3 + 3], e22 = c22, t22 = l22, i2 = d22, r2 = u2;
    }
    let h22 = 4278190080 & Zi[e22 >>> 24 & 255] ^ 16711680 & Zi[r2 >>> 16 & 255] ^ 65280 & Zi[i2 >>> 8 & 255] ^ 255 & Zi[t22 >>> 0 & 255] ^ this.roundkey[40], m2 = 4278190080 & Zi[t22 >>> 24 & 255] ^ 16711680 & Zi[e22 >>> 16 & 255] ^ 65280 & Zi[r2 >>> 8 & 255] ^ 255 & Zi[i2 >>> 0 & 255] ^ this.roundkey[41], f22 = 4278190080 & Zi[i2 >>> 24 & 255] ^ 16711680 & Zi[t22 >>> 16 & 255] ^ 65280 & Zi[e22 >>> 8 & 255] ^ 255 & Zi[r2 >>> 0 & 255] ^ this.roundkey[42], p22 = 4278190080 & Zi[r2 >>> 24 & 255] ^ 16711680 & Zi[i2 >>> 16 & 255] ^ 65280 & Zi[t22 >>> 8 & 255] ^ 255 & Zi[e22 >>> 0 & 255] ^ this.roundkey[43];
    this.outView.setUint32(0, h22 ^ this.iv[0], !1), this.outView.setUint32(4, m2 ^ this.iv[1], !1), this.outView.setUint32(8, f22 ^ this.iv[2], !1), this.outView.setUint32(12, p22 ^ this.iv[3], !1), this.iv[0] = a2, this.iv[1] = s2, this.iv[2] = n2, this.iv[3] = o22;
  }
};
var rr = class _rr extends Ri {
  constructor(e22) {
    super(e22), this.moovSlice = null, this.currentTrack = null, this.tracks = [], this.metadataPromise = null, this.movieTimescale = -1, this.movieDurationInTimescale = -1, this.isQuickTime = !1, this.metadataTags = {}, this.currentMetadataKeys = null, this.isFragmented = !1, this.fragmentTrackDefaults = [], this.psshBoxes = [], this.currentFragment = null, this.lastReadFragment = null, this.decryptionKeyCache = /* @__PURE__ */ new Map(), this.reader = e22._reader;
  }
  async getTrackBackings() {
    return await this.readMetadata(), this.tracks.map((e22) => e22.trackBacking);
  }
  async getMimeType() {
    await this.readMetadata();
    let e22 = await this.getTrackBackings(), t22 = await Promise.all(e22.map((e3) => e3.getDecoderConfig().then((e4) => e4?.codec ?? null)));
    return Ni({ isQuickTime: this.isQuickTime, hasVideo: this.tracks.some((e3) => {
      var t3;
      return ((t3 = e3.info) == null ? void 0 : t3.type) === "video";
    }), hasAudio: this.tracks.some((e3) => {
      var t3;
      return ((t3 = e3.info) == null ? void 0 : t3.type) === "audio";
    }), codecStrings: t22.filter(Boolean) });
  }
  async getMetadataTags() {
    return await this.readMetadata(), this.metadataTags;
  }
  readMetadata() {
    return this.metadataPromise ?? (this.metadataPromise = (async () => {
      let e22 = 0, t22 = !1, i2 = !1;
      for (; ; ) {
        let r2 = this.reader.requestSliceRange(e22, 8, Ui);
        if (r2 instanceof Promise && (r2 = await r2), !r2) break;
        let a2 = e22, s2 = Wi(r2);
        if (!s2) break;
        if (s2.name === "ftyp" || s2.name === "styp") {
          let e3 = ec(r2, 4);
          this.isQuickTime = e3 === "qt  ";
        } else {
          if (s2.name === "moov") {
            let e3 = this.reader.requestSlice(r2.filePos, s2.contentSize);
            if (e3 instanceof Promise && (e3 = await e3), !e3) break;
            this.moovSlice = e3, this.readContiguousBoxes(this.moovSlice);
            for (let t3 of this.tracks) {
              let e4 = t3.editListPreviousSegmentDurations / this.movieTimescale;
              t3.editListOffset -= Math.round(e4 * t3.timescale);
            }
            t22 = this.isFragmented && this.reader.fileSize !== null && this.reader.fileSize > a2 + s2.totalSize, i2 = !0;
            break;
          }
          if (s2.name === "moof") {
            if (!this.input._initInput) throw new Error('"moof" box encountered with no "moov" box present; this file is likely a Segment as described in ISO/IEC 14496-12 Section 8.16. A separate init file that contains a "moov" box is required to read this file, please provide it using InputOptions.initInput.');
            await this.copyMetadataFromInitInput(this.input._initInput), t22 = !1, i2 = !0;
            break;
          }
        }
        e22 = a2 + s2.totalSize;
      }
      if (!i2 && this.input._initInput && await this.copyMetadataFromInitInput(this.input._initInput), t22) {
        o2(this.reader.fileSize !== null);
        let e3 = this.reader.requestSlice(this.reader.fileSize - 4, 4);
        e3 instanceof Promise && (e3 = await e3), o2(e3);
        let t3 = $o(e3), i3 = this.reader.fileSize - t3;
        if (i3 >= 0 && i3 <= this.reader.fileSize - Ui) {
          let e4 = this.reader.requestSliceRange(i3, 8, Ui);
          if (e4 instanceof Promise && (e4 = await e4), e4) {
            let t4 = Wi(e4);
            if (t4 && t4.name === "mfra") {
              let i4 = this.reader.requestSlice(e4.filePos, t4.contentSize);
              i4 instanceof Promise && (i4 = await i4), i4 && this.readContiguousBoxes(i4);
            }
          }
        }
      }
    })());
  }
  async copyMetadataFromInitInput(e22) {
    let t22 = await e22._getDemuxer();
    if (t22.constructor !== _rr) throw new Error("Init input must match the input's format.");
    await t22.readMetadata(), this.movieTimescale = t22.movieTimescale, this.movieDurationInTimescale = t22.movieDurationInTimescale, this.metadataTags = t22.metadataTags, this.isFragmented = !0, this.fragmentTrackDefaults = t22.fragmentTrackDefaults, this.psshBoxes = t22.psshBoxes;
    for (let i2 of t22.tracks) {
      let e3 = { id: i2.id, demuxer: this, trackBacking: null, disposition: i2.disposition, timescale: i2.timescale, durationInMediaTimescale: i2.durationInMediaTimescale, durationInMovieTimescale: i2.durationInMovieTimescale, rotation: i2.rotation, internalCodecId: i2.internalCodecId, name: i2.name, languageCode: i2.languageCode, sampleTableByteOffset: null, sampleTable: null, fragmentLookupTable: [], currentFragmentState: null, fragmentPositionCache: [], editListPreviousSegmentDurations: i2.editListPreviousSegmentDurations, editListOffset: i2.editListOffset, encryptionInfo: i2.encryptionInfo, encryptionAuxInfo: null, frmaCodecString: null, info: i2.info };
      if (i2.trackBacking) {
        if (o2(e3.info), e3.info.type === "video" && e3.info.width !== -1) {
          let t3 = e3;
          e3.trackBacking = new sr(t3), this.tracks.push(e3);
        } else if (e3.info.type === "audio" && e3.info.numberOfChannels !== -1) {
          let t3 = e3;
          e3.trackBacking = new nr(t3), this.tracks.push(e3);
        }
      }
    }
  }
  getSampleTableForTrack(e22) {
    var t22, i2;
    if (e22.sampleTable) return e22.sampleTable;
    let r2 = { sampleTimingEntries: [], sampleCompositionTimeOffsets: [], sampleSizes: [], keySampleIndices: null, chunkOffsets: [], sampleToChunk: [], presentationTimestamps: null, presentationTimestampIndexMap: null };
    if (e22.sampleTable = r2, e22.sampleTableByteOffset === null) return r2;
    o2(this.moovSlice);
    let a2 = this.moovSlice.slice(e22.sampleTableByteOffset);
    if (this.currentTrack = e22, this.traverseBox(a2), this.currentTrack = null, ((t22 = e22.info) == null ? void 0 : t22.type) === "audio" && e22.info.codec && ze.includes(e22.info.codec) && r2.sampleCompositionTimeOffsets.length === 0) {
      o2(((i2 = e22.info) == null ? void 0 : i2.type) === "audio");
      let t3 = at(e22.info.codec), a3 = [], s2 = [];
      for (let i3 = 0; i3 < r2.sampleToChunk.length; i3++) {
        let n2 = r2.sampleToChunk[i3], o22 = r2.sampleToChunk[i3 + 1], c22 = (o22 ? o22.startChunkIndex : r2.chunkOffsets.length) - n2.startChunkIndex;
        for (let i4 = 0; i4 < c22; i4++) {
          let o3 = n2.startSampleIndex + i4 * n2.samplesPerChunk, c3 = o3 + n2.samplesPerChunk, d22 = A(r2.sampleTimingEntries, o3, (e3) => e3.startIndex), u2 = r2.sampleTimingEntries[d22], h22 = A(r2.sampleTimingEntries, c3, (e3) => e3.startIndex), m2 = r2.sampleTimingEntries[h22], f22 = u2.startDecodeTimestamp + (o3 - u2.startIndex) * u2.delta, p22 = m2.startDecodeTimestamp + (c3 - m2.startIndex) * m2.delta - f22, g2 = l2(a3);
          g2 && g2.delta === p22 ? g2.count++ : a3.push({ startIndex: n2.startChunkIndex + i4, startDecodeTimestamp: f22, count: 1, delta: p22 });
          let k2 = n2.samplesPerChunk * t3.sampleSize * e22.info.numberOfChannels;
          s2.push(k2);
        }
        n2.startSampleIndex = n2.startChunkIndex, n2.samplesPerChunk = 1;
      }
      r2.sampleTimingEntries = a3, r2.sampleSizes = s2;
    }
    if (r2.sampleCompositionTimeOffsets.length > 0) {
      r2.presentationTimestamps = [];
      for (let e3 of r2.sampleTimingEntries) for (let t3 = 0; t3 < e3.count; t3++) r2.presentationTimestamps.push({ presentationTimestamp: e3.startDecodeTimestamp + t3 * e3.delta, sampleIndex: e3.startIndex + t3 });
      for (let e3 of r2.sampleCompositionTimeOffsets) for (let t3 = 0; t3 < e3.count; t3++) {
        let i3 = e3.startIndex + t3, a3 = r2.presentationTimestamps[i3];
        a3 && (a3.presentationTimestamp += e3.offset);
      }
      r2.presentationTimestamps.sort((e3, t3) => e3.presentationTimestamp - t3.presentationTimestamp), r2.presentationTimestampIndexMap = Array(r2.presentationTimestamps.length).fill(-1);
      for (let e3 = 0; e3 < r2.presentationTimestamps.length; e3++) r2.presentationTimestampIndexMap[r2.presentationTimestamps[e3].sampleIndex] = e3;
    }
    return r2;
  }
  async readFragment(e22) {
    var t22;
    if (((t22 = this.lastReadFragment) == null ? void 0 : t22.moofOffset) === e22) return this.lastReadFragment;
    let i2 = this.reader.requestSliceRange(e22, 8, Ui);
    i2 instanceof Promise && (i2 = await i2), o2(i2);
    let r2 = Wi(i2);
    o2(r2?.name === "moof");
    let a2 = this.reader.requestSlice(e22, r2.totalSize);
    a2 instanceof Promise && (a2 = await a2), o2(a2), this.traverseBox(a2);
    let s2 = this.lastReadFragment;
    o2(s2 && s2.moofOffset === e22);
    for (let [, n2] of s2.trackData) {
      let e3 = n2.track, { fragmentPositionCache: t3 } = e3;
      if (!n2.startTimestampIsFinal) {
        let i4 = e3.fragmentLookupTable.find((e4) => e4.moofOffset === s2.moofOffset);
        if (i4) ur(n2, i4.timestamp);
        else {
          let e4 = A(t3, s2.moofOffset - 1, (e5) => e5.moofOffset);
          if (e4 !== -1) {
            let i5 = t3[e4];
            ur(n2, i5.endTimestamp);
          }
        }
        n2.startTimestampIsFinal = !0;
      }
      let i3 = A(t3, n2.startTimestamp, (e4) => e4.startTimestamp);
      if (i3 !== -1 && t3[i3].moofOffset === s2.moofOffset || t3.splice(i3 + 1, 0, { moofOffset: s2.moofOffset, startTimestamp: n2.startTimestamp, endTimestamp: n2.endTimestamp }), n2.encryptionAuxInfo && e3.encryptionInfo) {
        let t4 = await pr(this.reader, e3.encryptionInfo, n2.encryptionAuxInfo);
        for (let e4 = 0; e4 < Math.min(n2.samples.length, t4.length); e4++) {
          let i4 = t4[e4];
          n2.samples[e4].encryption = i4;
        }
      }
    }
    return s2;
  }
  readContiguousBoxes(e22) {
    let t22 = e22.filePos;
    for (; e22.filePos - t22 <= e22.length - 8 && this.traverseBox(e22); )
      ;
  }
  *iterateContiguousBoxes(e22) {
    let t22 = e22.filePos;
    for (; e22.filePos - t22 <= e22.length - 8; ) {
      let t3 = e22.filePos, i2 = Wi(e22);
      if (!i2) break;
      yield { boxInfo: i2, slice: e22 }, e22.filePos = t3 + i2.totalSize;
    }
  }
  traverseBox(e22) {
    var t22, i2, r2, a2, s2, n2, d22, u2, h22, m2, g2, k2, w2, y2, T22, P2, C2, x2, E22, _2, B2, A2, M2, F22, R22, D22, O22, N2, z2, L22, U2, q2, H2, $2, j2, K2, Q2, X2, Y2, J2, Z2, ee2, te2, ie2, re22, ae2;
    let se2 = e22.filePos, ne2 = Wi(e22);
    if (!ne2) return !1;
    let oe2 = e22.filePos, ce2 = se2 + ne2.totalSize;
    switch (ne2.name) {
      case "mdia":
      case "minf":
      case "dinf":
      case "mfra":
      case "edts":
      case "sinf":
      case "schi":
      case "wave":
        this.readContiguousBoxes(e22.slice(oe2, ne2.contentSize));
        break;
      case "mvhd":
        {
          let t3 = Lo(e22);
          e22.skip(3), t3 === 1 ? (e22.skip(16), this.movieTimescale = $o(e22), this.movieDurationInTimescale = Go(e22)) : (e22.skip(8), this.movieTimescale = $o(e22), this.movieDurationInTimescale = $o(e22));
        }
        break;
      case "trak":
        {
          let t3 = { id: -1, demuxer: this, trackBacking: null, disposition: { ...Ae, primary: !1 }, info: null, timescale: -1, durationInMovieTimescale: -1, durationInMediaTimescale: -1, rotation: 0, internalCodecId: null, name: null, languageCode: W, sampleTableByteOffset: -1, sampleTable: null, fragmentLookupTable: [], currentFragmentState: null, fragmentPositionCache: [], editListPreviousSegmentDurations: 0, editListOffset: 0, encryptionInfo: null, encryptionAuxInfo: null, frmaCodecString: null };
          if (this.currentTrack = t3, this.readContiguousBoxes(e22.slice(oe2, ne2.contentSize)), t3.id !== -1 && t3.timescale !== -1 && t3.info !== null) {
            if (t3.info.type === "video" && t3.info.width !== -1) {
              let e3 = t3;
              t3.trackBacking = new sr(e3), this.tracks.push(t3);
            } else if (t3.info.type === "audio" && t3.info.numberOfChannels !== -1) {
              let e3 = t3;
              t3.trackBacking = new nr(e3), this.tracks.push(t3);
            }
          }
          this.currentTrack = null;
        }
        break;
      case "tkhd":
        {
          let t3 = this.currentTrack;
          if (!t3) break;
          let i3 = Lo(e22), r3 = !!(1 & qo(e22));
          if (t3.disposition.default = r3, i3 === 0) e22.skip(8), t3.id = $o(e22), e22.skip(4), t3.durationInMovieTimescale = $o(e22);
          else {
            if (i3 !== 1) throw new Error(`Incorrect track header version ${i3}.`);
            e22.skip(16), t3.id = $o(e22), e22.skip(4), t3.durationInMovieTimescale = Go(e22);
          }
          e22.skip(16);
          let a3 = [qi(e22), qi(e22), Vi(e22), qi(e22), qi(e22), Vi(e22), qi(e22), qi(e22), Vi(e22)], s3 = c2(V(hr(a3), 90));
          o2(s3 === 0 || s3 === 90 || s3 === 180 || s3 === 270), t3.rotation = s3;
        }
        break;
      case "elst":
        {
          let t3 = this.currentTrack;
          if (!t3) break;
          let i3 = Lo(e22);
          e22.skip(3);
          let r3 = !1, a3 = 0, s3 = $o(e22);
          for (let n3 = 0; n3 < s3; n3++) {
            let s4 = i3 === 1 ? Go(e22) : $o(e22), n4 = i3 === 1 ? Xo(e22) : Ko(e22), o22 = qi(e22);
            if (s4 !== 0) {
              if (r3) {
                Ee._warn("Unsupported edit list: multiple edits are not currently supported. Only using first edit.");
                break;
              }
              if (n4 !== -1) {
                if (o22 !== 1) {
                  Ee._warn("Unsupported edit list entry: media rate must be 1.");
                  break;
                }
                t3.editListPreviousSegmentDurations = a3, t3.editListOffset = n4, r3 = !0;
              } else a3 += s4;
            }
          }
        }
        break;
      case "mdhd":
        {
          let t3 = this.currentTrack;
          if (!t3) break;
          let i3 = Lo(e22);
          e22.skip(3), i3 === 0 ? (e22.skip(8), t3.timescale = $o(e22), t3.durationInMediaTimescale = $o(e22)) : i3 === 1 && (e22.skip(16), t3.timescale = $o(e22), t3.durationInMediaTimescale = Go(e22));
          let r3 = Wo(e22);
          if (r3 > 0) {
            t3.languageCode = "";
            for (let e3 = 0; e3 < 3; e3++) t3.languageCode = String.fromCharCode(96 + (31 & r3)) + t3.languageCode, r3 >>= 5;
            G(t3.languageCode) || (t3.languageCode = W);
          }
        }
        break;
      case "hdlr":
        {
          let t3 = this.currentTrack;
          if (!t3) break;
          e22.skip(8);
          let i3 = ec(e22, 4);
          i3 === "vide" ? t3.info = { type: "video", width: -1, height: -1, squarePixelWidth: -1, squarePixelHeight: -1, codec: null, codecDescription: null, colorSpace: null, avcType: null, avcCodecInfo: null, hevcCodecInfo: null, vp9CodecInfo: null, av1CodecInfo: null, proresFormat: null } : i3 === "soun" && (t3.info = { type: "audio", numberOfChannels: -1, sampleRate: -1, codec: null, codecDescription: null, aacCodecInfo: null, dtsFormat: null, pcmLittleEndian: !1, pcmSampleSize: null });
        }
        break;
      case "stbl":
        {
          let t3 = this.currentTrack;
          if (!t3) break;
          t3.sampleTableByteOffset = se2, this.readContiguousBoxes(e22.slice(oe2, ne2.contentSize));
        }
        break;
      case "stsd":
        {
          let t3 = this.currentTrack;
          if (!t3 || t3.info === null || t3.sampleTable) break;
          let i3 = Lo(e22);
          e22.skip(3);
          let r3 = $o(e22);
          for (let a3 = 0; a3 < r3; a3++) {
            let r4 = e22.filePos, a4 = Wi(e22);
            if (!a4) break;
            t3.internalCodecId = a4.name;
            let s3 = a4.name.toLowerCase();
            if (t3.info.type === "video") {
              e22.skip(24), t3.info.width = Wo(e22), t3.info.height = Wo(e22), t3.info.squarePixelWidth = t3.info.width, t3.info.squarePixelHeight = t3.info.height, e22.skip(50), t3.frmaCodecString = null, this.readContiguousBoxes(e22.slice(e22.filePos, r4 + a4.totalSize - e22.filePos));
              let i4 = s3 === "encv" ? t3.frmaCodecString : s3;
              t3.frmaCodecString = null, i4 === "avc1" || i4 === "avc3" ? (t3.info.codec = "avc", t3.info.avcType = i4 === "avc1" ? 1 : 3) : i4 === "hvc1" || i4 === "hev1" ? t3.info.codec = "hevc" : i4 === "vp08" ? t3.info.codec = "vp8" : i4 === "vp09" ? t3.info.codec = "vp9" : i4 === "av01" ? t3.info.codec = "av1" : Qe.includes(s3) ? (t3.info.codec = "prores", t3.info.proresFormat = s3) : i4 === null ? Ee._warn("Unknown encrypted video codec due to missing frma box.") : Ee._warn(`Unsupported video codec (sample entry type '${a4.name}').`);
            } else {
              e22.skip(8);
              let n3 = Wo(e22);
              e22.skip(6);
              let o22 = Wo(e22), c22 = Wo(e22);
              e22.skip(4);
              let l22 = $o(e22) / 65536, d3 = null;
              i3 === 0 && n3 > 0 && (n3 === 1 ? (e22.skip(4), c22 = 8 * $o(e22), e22.skip(8)) : n3 === 2 && (e22.skip(4), l22 = Zo(e22), o22 = $o(e22), e22.skip(4), c22 = $o(e22), d3 = $o(e22), e22.skip(8))), t3.info.numberOfChannels = o22, t3.info.sampleRate = l22, t3.frmaCodecString = null, this.readContiguousBoxes(e22.slice(e22.filePos, r4 + a4.totalSize - e22.filePos));
              let u3 = s3 === "enca" ? t3.frmaCodecString : s3;
              if (t3.frmaCodecString = null, u3 !== "mp4a") if (u3 === "opus") t3.info.codec = "opus", t3.info.sampleRate = it;
              else if (u3 === "flac") t3.info.codec = "flac";
              else if (u3 === "ulaw") t3.info.codec = "ulaw";
              else if (u3 === "alaw") t3.info.codec = "alaw";
              else if (u3 === "ac-3") t3.info.codec = "ac3";
              else if (u3 === "ec-3") t3.info.codec = "eac3";
              else if (Ge.includes(u3)) t3.info.codec = "dts", t3.info.dtsFormat = u3;
              else if (u3 === "twos") c22 === 8 ? t3.info.codec = "pcm-s8" : c22 === 16 ? t3.info.codec = t3.info.pcmLittleEndian ? "pcm-s16" : "pcm-s16be" : (Ee._warn(`Unsupported sample size ${c22} for codec 'twos'.`), t3.info.codec = null);
              else if (u3 === "sowt") c22 === 8 ? t3.info.codec = "pcm-s8" : c22 === 16 ? t3.info.codec = "pcm-s16" : (Ee._warn(`Unsupported sample size ${c22} for codec 'sowt'.`), t3.info.codec = null);
              else if (u3 === "raw ") t3.info.codec = "pcm-u8";
              else if (u3 === "in24") t3.info.codec = t3.info.pcmLittleEndian ? "pcm-s24" : "pcm-s24be";
              else if (u3 === "in32") t3.info.codec = t3.info.pcmLittleEndian ? "pcm-s32" : "pcm-s32be";
              else if (u3 === "fl32") t3.info.codec = t3.info.pcmLittleEndian ? "pcm-f32" : "pcm-f32be";
              else if (u3 === "fl64") t3.info.codec = t3.info.pcmLittleEndian ? "pcm-f64" : "pcm-f64be";
              else if (u3 === "ipcm") {
                let e3 = t3.info.pcmSampleSize;
                t3.info.pcmLittleEndian ? e3 === 16 ? t3.info.codec = "pcm-s16" : e3 === 24 ? t3.info.codec = "pcm-s24" : e3 === 32 ? t3.info.codec = "pcm-s32" : (Ee._warn(`Invalid ipcm sample size ${e3}.`), t3.info.codec = null) : e3 === 16 ? t3.info.codec = "pcm-s16be" : e3 === 24 ? t3.info.codec = "pcm-s24be" : e3 === 32 ? t3.info.codec = "pcm-s32be" : (Ee._warn(`Invalid ipcm sample size ${e3}.`), t3.info.codec = null);
              } else if (u3 === "fpcm") {
                let e3 = t3.info.pcmSampleSize;
                t3.info.pcmLittleEndian ? e3 === 32 ? t3.info.codec = "pcm-f32" : e3 === 64 ? t3.info.codec = "pcm-f64" : (Ee._warn(`Invalid fpcm sample size ${e3}.`), t3.info.codec = null) : e3 === 32 ? t3.info.codec = "pcm-f32be" : e3 === 64 ? t3.info.codec = "pcm-f64be" : (Ee._warn(`Invalid fpcm sample size ${e3}.`), t3.info.codec = null);
              } else if (u3 === "lpcm" && d3 !== null) {
                let e3 = c22 + 7 >> 3, i4 = !!(1 & d3), r5 = !!(2 & d3), a5 = 4 & d3 ? -1 : 0;
                c22 > 0 && c22 <= 64 && (i4 ? c22 === 32 && (t3.info.codec = r5 ? "pcm-f32be" : "pcm-f32") : a5 & 1 << e3 - 1 ? e3 === 1 ? t3.info.codec = "pcm-s8" : e3 === 2 ? t3.info.codec = r5 ? "pcm-s16be" : "pcm-s16" : e3 === 3 ? t3.info.codec = r5 ? "pcm-s24be" : "pcm-s24" : e3 === 4 && (t3.info.codec = r5 ? "pcm-s32be" : "pcm-s32") : e3 === 1 && (t3.info.codec = "pcm-u8")), t3.info.codec === null && Ee._warn("Unsupported PCM format.");
              } else u3 === null ? Ee._warn("Unknown encrypted audio codec due to missing frma box.") : Ee._warn(`Unsupported audio codec (sample entry type '${a4.name}').`);
            }
            e22.filePos = r4 + a4.totalSize;
          }
        }
        break;
      case "frma":
        {
          let t3 = this.currentTrack;
          if (!t3) break;
          let i3 = ec(e22, 4).toLowerCase();
          t3.frmaCodecString = i3;
        }
        break;
      case "schm":
        {
          let t3 = this.currentTrack;
          if (!t3) break;
          e22.skip(4);
          let i3 = ec(e22, 4);
          i3 === "cenc" || i3 === "cens" || i3 === "cbcs" ? t3.encryptionInfo = { scheme: i3, defaultKid: null, defaultIsProtected: null, defaultPerSampleIvSize: null, defaultConstantIv: null, defaultCryptByteBlock: null, defaultSkipByteBlock: null } : Ee._warn(`Unsupported encryption scheme '${i3}'.`);
        }
        break;
      case "tenc":
        {
          let t3 = this.currentTrack;
          if (!t3 || !t3.encryptionInfo) break;
          let i3 = Lo(e22);
          e22.skip(3), e22.skip(1);
          let r3 = Lo(e22);
          if (i3 > 0 ? (t3.encryptionInfo.defaultCryptByteBlock = r3 >> 4, t3.encryptionInfo.defaultSkipByteBlock = 15 & r3) : (t3.encryptionInfo.defaultCryptByteBlock = 0, t3.encryptionInfo.defaultSkipByteBlock = 0), t3.encryptionInfo.defaultIsProtected = Lo(e22) !== 0, t3.encryptionInfo.defaultPerSampleIvSize = Lo(e22), t3.encryptionInfo.defaultKid = I2(zo(e22, 16)), t3.encryptionInfo.defaultIsProtected && t3.encryptionInfo.defaultPerSampleIvSize === 0) {
            let i4 = Lo(e22), r4 = new Uint8Array(16);
            r4.set(zo(e22, i4), 0), t3.encryptionInfo.defaultConstantIv = r4;
          }
        }
        break;
      case "avcC":
        {
          let t3 = this.currentTrack;
          if (!t3 || (o2(t3.info), ne2.contentSize === 0)) break;
          t3.info.codecDescription = zo(e22, ne2.contentSize);
        }
        break;
      case "hvcC":
        {
          let t3 = this.currentTrack;
          if (!t3 || (o2(t3.info), ne2.contentSize === 0)) break;
          t3.info.codecDescription = zo(e22, ne2.contentSize);
        }
        break;
      case "vpcC":
        {
          let i3 = this.currentTrack;
          if (!i3) break;
          o2(((t22 = i3.info) == null ? void 0 : t22.type) === "video"), e22.skip(4);
          let r3 = Lo(e22), a3 = Lo(e22), s3 = Lo(e22), n3 = s3 >> 4, c22 = s3 >> 1 & 7, l22 = 1 & s3, d3 = Lo(e22), u3 = Lo(e22), h3 = Lo(e22);
          i3.info.vp9CodecInfo = { profile: r3, level: a3, bitDepth: n3, chromaSubsampling: c22, videoFullRangeFlag: l22, colourPrimaries: d3, transferCharacteristics: u3, matrixCoefficients: h3 };
        }
        break;
      case "av1C":
        {
          let t3 = this.currentTrack;
          if (!t3) break;
          o2(((i2 = t3.info) == null ? void 0 : i2.type) === "video"), e22.skip(1);
          let r3 = Lo(e22), a3 = r3 >> 5, s3 = 31 & r3, n3 = Lo(e22), c22 = n3 >> 7, l22 = n3 >> 6 & 1, d3 = n3 >> 4 & 1, u3 = n3 >> 3 & 1, h3 = n3 >> 2 & 1, m3 = 3 & n3, f22 = a3 === 2 && l22 ? n3 >> 5 & 1 ? 12 : 10 : l22 ? 10 : 8;
          t3.info.av1CodecInfo = { profile: a3, level: s3, tier: c22, bitDepth: f22, monochrome: d3, chromaSubsamplingX: u3, chromaSubsamplingY: h3, chromaSamplePosition: m3 };
        }
        break;
      case "colr":
        {
          let t3 = this.currentTrack;
          if (!t3) break;
          o2(((r2 = t3.info) == null ? void 0 : r2.type) === "video");
          let i3 = ec(e22, 4);
          if (i3 !== "nclx" && i3 !== "nclc") break;
          let a3 = Wo(e22), s3 = Wo(e22), n3 = Wo(e22), c22;
          i3 === "nclx" && (c22 = !!(128 & Lo(e22))), t3.info.colorSpace = { primaries: b[a3], transfer: v[s3], matrix: S[n3], fullRange: c22 };
        }
        break;
      case "pasp":
        {
          let t3 = this.currentTrack;
          if (!t3) break;
          o2(((a2 = t3.info) == null ? void 0 : a2.type) === "video");
          let i3 = $o(e22), r3 = $o(e22);
          i3 > 0 && r3 > 0 && (i3 > r3 ? t3.info.squarePixelWidth = Math.round(t3.info.width * i3 / r3) : t3.info.squarePixelHeight = Math.round(t3.info.height * r3 / i3));
        }
        break;
      case "esds":
        {
          let t3 = this.currentTrack;
          if (!t3) break;
          o2(((s2 = t3.info) == null ? void 0 : s2.type) === "audio"), e22.skip(4), o2(Lo(e22) === 3), Hi(e22), e22.skip(2);
          let i3 = Lo(e22), r3 = !!(64 & i3), a3 = !!(32 & i3);
          if (128 & i3 && e22.skip(2), r3) {
            let t4 = Lo(e22);
            e22.skip(t4);
          }
          a3 && e22.skip(2), o2(Lo(e22) === 4);
          let n3 = Hi(e22), c22 = e22.filePos, l22 = Lo(e22);
          if (l22 === 64 || l22 === 103 ? (t3.info.codec = "aac", t3.info.aacCodecInfo = { isMpeg2: l22 === 103, objectType: null }) : l22 === 105 || l22 === 107 ? t3.info.codec = "mp3" : l22 === 221 ? t3.info.codec = "vorbis" : l22 === 169 ? t3.info.codec = "dts" : Ee._warn(`Unsupported audio codec (objectTypeIndication ${l22}) - discarding track.`), e22.skip(12), n3 > e22.filePos - c22) {
            o2(Lo(e22) === 5);
            let i4 = Hi(e22);
            if (t3.info.codecDescription = zo(e22, i4), t3.info.codec === "aac") {
              let e3 = De2(t3.info.codecDescription);
              e3.numberOfChannels !== null && (t3.info.numberOfChannels = e3.numberOfChannels), e3.sampleRate !== null && (t3.info.sampleRate = e3.sampleRate);
            }
          }
        }
        break;
      case "enda":
        {
          let t3 = this.currentTrack;
          if (!t3) break;
          o2(((n2 = t3.info) == null ? void 0 : n2.type) === "audio"), t3.info.pcmLittleEndian = !!(255 & Wo(e22));
        }
        break;
      case "pcmC":
        {
          let t3 = this.currentTrack;
          if (!t3) break;
          o2(((d22 = t3.info) == null ? void 0 : d22.type) === "audio"), e22.skip(4);
          let i3 = Lo(e22);
          t3.info.pcmLittleEndian = !!(1 & i3), t3.info.pcmSampleSize = Lo(e22);
        }
        break;
      case "dOps":
        {
          let t3 = this.currentTrack;
          if (!t3) break;
          o2(((u2 = t3.info) == null ? void 0 : u2.type) === "audio"), e22.skip(1);
          let i3 = Lo(e22), r3 = Wo(e22), a3 = $o(e22), s3 = Vo(e22), n3 = Lo(e22), c22;
          c22 = n3 !== 0 ? zo(e22, 2 + i3) : new Uint8Array(0);
          let l22 = new Uint8Array(19 + c22.byteLength), d3 = new DataView(l22.buffer);
          d3.setUint32(0, 1332770163, !1), d3.setUint32(4, 1214603620, !1), d3.setUint8(8, 1), d3.setUint8(9, i3), d3.setUint16(10, r3, !0), d3.setUint32(12, a3, !0), d3.setInt16(16, s3, !0), d3.setUint8(18, n3), l22.set(c22, 19), t3.info.codecDescription = l22, t3.info.numberOfChannels = i3;
        }
        break;
      case "dfLa":
        {
          let t3 = this.currentTrack;
          if (!t3) break;
          o2(((h22 = t3.info) == null ? void 0 : h22.type) === "audio"), e22.skip(4);
          let i3 = 127, r3 = 128, a3 = e22.filePos;
          for (; e22.filePos < ce2; ) {
            let a4 = Lo(e22), s4 = qo(e22);
            if ((a4 & i3) === di.STREAMINFO) {
              e22.skip(10);
              let i4 = $o(e22), r4 = i4 >>> 12, a5 = 1 + (i4 >> 9 & 7);
              t3.info.sampleRate = r4, t3.info.numberOfChannels = a5, e22.skip(20);
            } else e22.skip(s4);
            if (a4 & r3) break;
          }
          let s3 = e22.filePos;
          e22.filePos = a3;
          let n3 = zo(e22, s3 - a3), c22 = new Uint8Array(4 + n3.byteLength);
          new DataView(c22.buffer).setUint32(0, 1716281667, !1), c22.set(n3, 4), t3.info.codecDescription = c22;
        }
        break;
      case "dac3":
        {
          let t3 = this.currentTrack;
          if (!t3) break;
          o2(((m2 = t3.info) == null ? void 0 : m2.type) === "audio");
          let i3 = zo(e22, 3), r3 = new Me(i3), a3 = r3.readBits(2);
          r3.skipBits(8);
          let s3 = r3.readBits(3), n3 = r3.readBits(1);
          a3 < 3 && (t3.info.sampleRate = Ct[a3]), t3.info.numberOfChannels = mi[s3] + n3;
        }
        break;
      case "dec3":
        {
          let t3 = this.currentTrack;
          if (!t3) break;
          o2(((g2 = t3.info) == null ? void 0 : g2.type) === "audio");
          let i3 = ((e3) => {
            if (e3.length < 2) return null;
            let t4 = new Me(e3), i4 = t4.readBits(13), r4 = t4.readBits(3), a3 = [];
            for (let s3 = 0; s3 <= r4 && !(Math.ceil(t4.pos / 8) + 3 > e3.length); s3++) {
              let e4 = t4.readBits(2), i5 = t4.readBits(5);
              t4.skipBits(1), t4.skipBits(1);
              let r5 = t4.readBits(3), s4 = t4.readBits(3), n3 = t4.readBits(1);
              t4.skipBits(3);
              let o22 = t4.readBits(4), c22 = 0;
              o22 > 0 ? c22 = t4.readBits(9) : t4.skipBits(1), a3.push({ fscod: e4, fscod2: null, bsid: i5, bsmod: r5, acmod: s4, lfeon: n3, numDepSub: o22, chanLoc: c22 });
            }
            return a3.length === 0 ? null : { dataRate: i4, substreams: a3 };
          })(zo(e22, ne2.contentSize));
          if (!i3) {
            Ee._warn("Invalid dec3 box contents, ignoring.");
            break;
          }
          let r3 = wi(i3);
          r3 !== null && (t3.info.sampleRate = r3), t3.info.numberOfChannels = bi(i3);
        }
        break;
      case "ddts":
        {
          let t3 = this.currentTrack;
          if (!t3) break;
          o2(((k2 = t3.info) == null ? void 0 : k2.type) === "audio");
          let i3 = ((e3) => {
            if (e3.length < 20) return null;
            let t4 = f2(e3), i4 = t4.getUint32(0);
            if (i4 === 0) return null;
            let r3 = new Me(e3);
            r3.seekToByte(13);
            let a3 = r3.readBits(2);
            r3.skipBits(5);
            let s3 = r3.readBits(1), n3 = r3.readBits(6);
            r3.skipBits(14), r3.skipBits(1), r3.skipBits(3);
            let o22 = r3.readBits(16), c22 = null;
            return o22 !== 0 ? c22 = Fi(o22) : n3 < Si.length && (c22 = Si[n3] + s3), { sampleRate: i4, maxBitrate: t4.getUint32(4), avgBitrate: t4.getUint32(8), pcmSampleDepth: e3[12], sampleCount: Ei[a3], channelLayout: o22, numberOfChannels: c22 };
          })(zo(e22, Math.min(ne2.contentSize, 20)));
          if (!i3) {
            Ee._warn("Invalid ddts box contents, ignoring.");
            break;
          }
          t3.info.sampleRate = i3.sampleRate, i3.numberOfChannels !== null && (t3.info.numberOfChannels = i3.numberOfChannels);
        }
        break;
      case "stts":
        {
          let t3 = this.currentTrack;
          if (!t3 || !t3.sampleTable) break;
          e22.skip(4);
          let i3 = $o(e22), r3 = 0, a3 = 0;
          for (let s3 = 0; s3 < i3; s3++) {
            let i4 = $o(e22), s4 = $o(e22);
            t3.sampleTable.sampleTimingEntries.push({ startIndex: r3, startDecodeTimestamp: a3, count: i4, delta: s4 }), r3 += i4, a3 += i4 * s4;
          }
        }
        break;
      case "ctts":
        {
          let t3 = this.currentTrack;
          if (!t3 || !t3.sampleTable) break;
          e22.skip(4);
          let i3 = $o(e22), r3 = 0;
          for (let a3 = 0; a3 < i3; a3++) {
            let i4 = $o(e22), a4 = Ko(e22);
            t3.sampleTable.sampleCompositionTimeOffsets.push({ startIndex: r3, count: i4, offset: a4 }), r3 += i4;
          }
        }
        break;
      case "stsz":
        {
          let t3 = this.currentTrack;
          if (!t3 || !t3.sampleTable) break;
          e22.skip(4);
          let i3 = $o(e22), r3 = $o(e22);
          if (i3 === 0) for (let a3 = 0; a3 < r3; a3++) {
            let i4 = $o(e22);
            t3.sampleTable.sampleSizes.push(i4);
          }
          else t3.sampleTable.sampleSizes.push(i3);
        }
        break;
      case "stz2":
        {
          let t3 = this.currentTrack;
          if (!t3 || !t3.sampleTable) break;
          e22.skip(4), e22.skip(3);
          let i3 = Lo(e22), r3 = $o(e22), a3 = zo(e22, Math.ceil(r3 * i3 / 8)), s3 = new Me(a3);
          for (let e3 = 0; e3 < r3; e3++) {
            let e4 = s3.readBits(i3);
            t3.sampleTable.sampleSizes.push(e4);
          }
        }
        break;
      case "stss":
        {
          let t3 = this.currentTrack;
          if (!t3 || !t3.sampleTable) break;
          e22.skip(4), t3.sampleTable.keySampleIndices = [];
          let i3 = $o(e22);
          for (let r3 = 0; r3 < i3; r3++) {
            let i4 = $o(e22) - 1;
            t3.sampleTable.keySampleIndices.push(i4);
          }
          t3.sampleTable.keySampleIndices[0] !== 0 && t3.sampleTable.keySampleIndices.unshift(0);
        }
        break;
      case "stsc":
        {
          let t3 = this.currentTrack;
          if (!t3 || !t3.sampleTable) break;
          e22.skip(4);
          let i3 = $o(e22);
          for (let a3 = 0; a3 < i3; a3++) {
            let i4 = $o(e22) - 1, r4 = $o(e22), a4 = $o(e22);
            t3.sampleTable.sampleToChunk.push({ startSampleIndex: -1, startChunkIndex: i4, samplesPerChunk: r4, sampleDescriptionIndex: a4 });
          }
          let r3 = 0;
          for (let e3 = 0; e3 < t3.sampleTable.sampleToChunk.length; e3++) t3.sampleTable.sampleToChunk[e3].startSampleIndex = r3, e3 < t3.sampleTable.sampleToChunk.length - 1 && (r3 += (t3.sampleTable.sampleToChunk[e3 + 1].startChunkIndex - t3.sampleTable.sampleToChunk[e3].startChunkIndex) * t3.sampleTable.sampleToChunk[e3].samplesPerChunk);
        }
        break;
      case "stco":
        {
          let t3 = this.currentTrack;
          if (!t3 || !t3.sampleTable) break;
          e22.skip(4);
          let i3 = $o(e22);
          for (let r3 = 0; r3 < i3; r3++) {
            let i4 = $o(e22);
            t3.sampleTable.chunkOffsets.push(i4);
          }
        }
        break;
      case "co64":
        {
          let t3 = this.currentTrack;
          if (!t3 || !t3.sampleTable) break;
          e22.skip(4);
          let i3 = $o(e22);
          for (let r3 = 0; r3 < i3; r3++) {
            let i4 = Go(e22);
            t3.sampleTable.chunkOffsets.push(i4);
          }
        }
        break;
      case "mvex":
        this.isFragmented = !0, this.readContiguousBoxes(e22.slice(oe2, ne2.contentSize));
        break;
      case "mehd":
        {
          let t3 = Lo(e22);
          e22.skip(3);
          let i3 = t3 === 1 ? Go(e22) : $o(e22);
          this.movieDurationInTimescale = i3;
        }
        break;
      case "trex":
        {
          e22.skip(4);
          let t3 = $o(e22), i3 = $o(e22), r3 = $o(e22), a3 = $o(e22), s3 = $o(e22);
          this.fragmentTrackDefaults.push({ trackId: t3, defaultSampleDescriptionIndex: i3, defaultSampleDuration: r3, defaultSampleSize: a3, defaultSampleFlags: s3 });
        }
        break;
      case "tfra":
        {
          let t3 = Lo(e22);
          e22.skip(3);
          let i3 = $o(e22), r3 = this.tracks.find((e3) => e3.id === i3);
          if (!r3) break;
          let a3 = $o(e22), s3 = (12 & a3) >> 2, n3 = 3 & a3, o22 = [Lo, Wo, qo, $o], c22 = o22[(48 & a3) >> 4], l22 = o22[s3], d3 = o22[n3], u3 = $o(e22);
          for (let h3 = 0; h3 < u3; h3++) {
            let i4 = t3 === 1 ? Go(e22) : $o(e22), a4 = t3 === 1 ? Go(e22) : $o(e22);
            c22(e22), l22(e22), d3(e22), r3.fragmentLookupTable.push({ timestamp: i4, moofOffset: a4 });
          }
          r3.fragmentLookupTable.sort((e3, t4) => e3.timestamp - t4.timestamp);
          for (let e3 = 0; e3 < r3.fragmentLookupTable.length - 1; e3++) {
            let t4 = r3.fragmentLookupTable[e3], i4 = r3.fragmentLookupTable[e3 + 1];
            t4.timestamp === i4.timestamp && (r3.fragmentLookupTable.splice(e3 + 1, 1), e3--);
          }
        }
        break;
      case "moof":
        this.currentFragment = { moofOffset: se2, moofSize: ne2.totalSize, implicitBaseDataOffset: se2, trackData: /* @__PURE__ */ new Map(), psshBoxes: [] }, this.readContiguousBoxes(e22.slice(oe2, ne2.contentSize)), this.lastReadFragment = this.currentFragment, this.currentFragment = null;
        break;
      case "traf":
        if (o2(this.currentFragment), this.readContiguousBoxes(e22.slice(oe2, ne2.contentSize)), this.currentTrack) {
          let e3 = this.currentFragment.trackData.get(this.currentTrack.id);
          e: if (e3) {
            if (e3.samples.length === 0) {
              this.currentFragment.trackData.delete(this.currentTrack.id);
              break e;
            }
            e3.presentationTimestamps = e3.samples.map((e4, t4) => ({ presentationTimestamp: e4.presentationTimestamp, sampleIndex: t4 })).sort((e4, t4) => e4.presentationTimestamp - t4.presentationTimestamp);
            for (let a3 = 0; a3 < e3.presentationTimestamps.length; a3++) {
              let t4 = e3.presentationTimestamps[a3], i4 = e3.samples[t4.sampleIndex];
              if (e3.firstKeyFrameTimestamp === null && i4.isKeyFrame && (e3.firstKeyFrameTimestamp = i4.presentationTimestamp), a3 < e3.presentationTimestamps.length - 1) {
                let r4 = e3.presentationTimestamps[a3 + 1].presentationTimestamp - t4.presentationTimestamp;
                i4.duration = r4;
              }
            }
            let t3 = e3.samples[e3.presentationTimestamps[0].sampleIndex], i3 = e3.samples[l2(e3.presentationTimestamps).sampleIndex];
            e3.startTimestamp = t3.presentationTimestamp, e3.endTimestamp = i3.presentationTimestamp + i3.duration;
            let { currentFragmentState: r3 } = this.currentTrack;
            o2(r3), r3.startTimestamp !== null && (ur(e3, r3.startTimestamp), e3.startTimestampIsFinal = !0), r3.encryptionAuxInfo && !e3.samples[0].encryption && (e3.encryptionAuxInfo = r3.encryptionAuxInfo);
          }
          this.currentTrack.currentFragmentState = null, this.currentTrack = null;
        }
        break;
      case "pssh":
        {
          if ((w2 = this.input._formatOptions.isobmff) != null && w2._suppressPsshParsing) break;
          let t3 = zi(zo(e22, ne2.contentSize));
          this.currentFragment ? this.currentFragment.psshBoxes.push(t3) : this.currentTrack || this.psshBoxes.push(t3);
        }
        break;
      case "tfhd":
        {
          o2(this.currentFragment), e22.skip(1);
          let t3 = qo(e22), i3 = !!(1 & t3), r3 = !!(2 & t3), a3 = !!(8 & t3), s3 = !!(16 & t3), n3 = !!(32 & t3), c22 = !!(65536 & t3), l22 = !!(131072 & t3), d3 = $o(e22), u3 = this.tracks.find((e3) => e3.id === d3);
          if (!u3) break;
          let h3 = this.fragmentTrackDefaults.find((e3) => e3.trackId === d3);
          this.currentTrack = u3, u3.currentFragmentState = { baseDataOffset: this.currentFragment.implicitBaseDataOffset, sampleDescriptionIndex: h3?.defaultSampleDescriptionIndex ?? null, defaultSampleDuration: h3?.defaultSampleDuration ?? null, defaultSampleSize: h3?.defaultSampleSize ?? null, defaultSampleFlags: h3?.defaultSampleFlags ?? null, startTimestamp: null, encryptionAuxInfo: null }, i3 ? u3.currentFragmentState.baseDataOffset = Go(e22) : l22 && (u3.currentFragmentState.baseDataOffset = this.currentFragment.moofOffset), r3 && (u3.currentFragmentState.sampleDescriptionIndex = $o(e22)), a3 && (u3.currentFragmentState.defaultSampleDuration = $o(e22)), s3 && (u3.currentFragmentState.defaultSampleSize = $o(e22)), n3 && (u3.currentFragmentState.defaultSampleFlags = $o(e22)), c22 && (u3.currentFragmentState.defaultSampleDuration = 0);
        }
        break;
      case "tfdt":
        {
          let t3 = this.currentTrack;
          if (!t3) break;
          o2(t3.currentFragmentState);
          let i3 = Lo(e22);
          e22.skip(3);
          let r3 = i3 === 0 ? $o(e22) : Go(e22);
          t3.currentFragmentState.startTimestamp = r3;
        }
        break;
      case "trun":
        {
          let t3 = this.currentTrack;
          if (!t3) break;
          o2(this.currentFragment), o2(t3.currentFragmentState);
          let i3 = Lo(e22), r3 = qo(e22), a3 = !!(1 & r3), s3 = !!(4 & r3), n3 = !!(256 & r3), c22 = !!(512 & r3), l22 = !!(1024 & r3), d3 = !!(2048 & r3), u3 = $o(e22), h3 = null;
          a3 && (h3 = Ko(e22));
          let m3, f22 = null;
          s3 && (f22 = $o(e22)), this.currentFragment.trackData.has(t3.id) ? (m3 = this.currentFragment.trackData.get(t3.id), h3 !== null && (m3.currentOffset = t3.currentFragmentState.baseDataOffset + h3)) : (m3 = { track: t3, currentTimestamp: 0, currentOffset: t3.currentFragmentState.baseDataOffset + (h3 ?? 0), startTimestamp: 0, endTimestamp: 0, firstKeyFrameTimestamp: null, samples: [], presentationTimestamps: [], startTimestampIsFinal: !1, encryptionAuxInfo: null }, this.currentFragment.trackData.set(t3.id, m3));
          for (let p22 = 0; p22 < u3; p22++) {
            let r4, a4, s4;
            n3 ? r4 = $o(e22) : (o2(t3.currentFragmentState.defaultSampleDuration !== null), r4 = t3.currentFragmentState.defaultSampleDuration), c22 ? a4 = $o(e22) : (o2(t3.currentFragmentState.defaultSampleSize !== null), a4 = t3.currentFragmentState.defaultSampleSize), l22 ? s4 = $o(e22) : (o2(t3.currentFragmentState.defaultSampleFlags !== null), s4 = t3.currentFragmentState.defaultSampleFlags), p22 === 0 && f22 !== null && (s4 = f22);
            let u4 = 0;
            d3 && (u4 = i3 === 0 ? $o(e22) : Ko(e22));
            let h4 = !(65536 & s4);
            m3.samples.push({ presentationTimestamp: m3.currentTimestamp + u4, duration: r4, byteOffset: m3.currentOffset, byteSize: a4, isKeyFrame: h4, encryption: null }), m3.currentOffset += a4, m3.currentTimestamp += r4;
          }
          this.currentFragment.implicitBaseDataOffset = m3.currentOffset;
        }
        break;
      case "saiz":
        {
          let t3 = this.currentTrack;
          if (!t3 || !t3.encryptionInfo) break;
          if (e22.skip(1), 1 & qo(e22)) {
            let i4 = ec(e22, 4), r4 = $o(e22);
            if (i4 !== t3.encryptionInfo.scheme || r4 !== 0) break;
          }
          let i3 = Lo(e22), r3 = $o(e22), a3 = null;
          i3 === 0 && r3 > 0 && (a3 = zo(e22, r3));
          let s3 = fr(t3);
          s3.defaultSampleInfoSize = i3, s3.sampleSizes = a3, s3.sampleCount = r3;
        }
        break;
      case "saio":
        {
          let t3 = this.currentTrack;
          if (!t3 || !t3.encryptionInfo) break;
          let i3 = Lo(e22);
          if (1 & qo(e22)) {
            let i4 = ec(e22, 4), r4 = $o(e22);
            if (i4 !== t3.encryptionInfo.scheme || r4 !== 0) break;
          }
          let r3 = $o(e22);
          if (r3 === 0) break;
          r3 > 1 && Ee._warn("Multiple saio entries are not supported; using the first offset only.");
          let a3 = i3 === 0 ? $o(e22) : Number(Go(e22));
          this.currentFragment && (a3 += this.currentFragment.moofOffset), fr(t3).offset = a3;
        }
        break;
      case "senc":
        {
          let t3 = this.currentTrack;
          if (!t3 || !t3.encryptionInfo) break;
          o2(this.currentFragment);
          let i3 = this.currentFragment.trackData.get(t3.id);
          if (!i3) break;
          e22.skip(1);
          let r3 = qo(e22), a3 = !!(2 & r3), s3 = $o(e22), n3 = t3.encryptionInfo.defaultPerSampleIvSize;
          o2(n3 !== null);
          for (let o22 = 0; o22 < Math.min(s3, i3.samples.length); o22++) {
            let r4 = new Uint8Array(16);
            n3 > 0 ? r4.set(zo(e22, n3), 0) : r4.set(t3.encryptionInfo.defaultConstantIv, 0);
            let s4 = null;
            if (a3) {
              let t4 = Wo(e22);
              s4 = [];
              for (let i4 = 0; i4 < t4; i4++) {
                let t5 = Wo(e22), i5 = $o(e22);
                s4.push({ clearLen: t5, protectedLen: i5 });
              }
            }
            i3.samples[o22].encryption = { iv: r4, subsamples: s4 };
          }
        }
        break;
      case "udta":
        {
          let t3 = this.iterateContiguousBoxes(e22.slice(oe2, ne2.contentSize));
          for (let { boxInfo: e3, slice: i3 } of t3) {
            if (e3.name !== "meta" && !this.currentTrack) {
              let t4 = i3.filePos;
              (y2 = this.metadataTags).raw ?? (y2.raw = {}), e3.name[0] === "©" ? (T22 = this.metadataTags.raw)[P2 = e3.name] ?? (T22[P2] = $i(i3)) : (C2 = this.metadataTags.raw)[x2 = e3.name] ?? (C2[x2] = zo(i3, e3.contentSize)), i3.filePos = t4;
            }
            switch (e3.name) {
              case "meta":
                i3.skip(-e3.headerSize), this.traverseBox(i3);
                break;
              case "©nam":
              case "name":
                this.currentTrack ? this.currentTrack.name = p2.decode(zo(i3, e3.contentSize)) : (E22 = this.metadataTags).title ?? (E22.title = $i(i3));
                break;
              case "©des":
                this.currentTrack || ((_2 = this.metadataTags).description ?? (_2.description = $i(i3)));
                break;
              case "©ART":
                this.currentTrack || ((B2 = this.metadataTags).artist ?? (B2.artist = $i(i3)));
                break;
              case "©alb":
                this.currentTrack || ((A2 = this.metadataTags).album ?? (A2.album = $i(i3)));
                break;
              case "albr":
                this.currentTrack || ((M2 = this.metadataTags).albumArtist ?? (M2.albumArtist = $i(i3)));
                break;
              case "©gen":
                this.currentTrack || ((F22 = this.metadataTags).genre ?? (F22.genre = $i(i3)));
                break;
              case "©day":
                if (!this.currentTrack) {
                  let e4 = new Date($i(i3));
                  Number.isNaN(e4.getTime()) || ((R22 = this.metadataTags).date ?? (R22.date = e4));
                }
                break;
              case "©cmt":
                this.currentTrack || ((D22 = this.metadataTags).comment ?? (D22.comment = $i(i3)));
                break;
              case "©lyr":
                this.currentTrack || ((O22 = this.metadataTags).lyrics ?? (O22.lyrics = $i(i3)));
            }
          }
        }
        break;
      case "meta":
        {
          if (this.currentTrack) break;
          let t3 = $o(e22) !== 0;
          this.currentMetadataKeys = /* @__PURE__ */ new Map(), t3 ? this.readContiguousBoxes(e22.slice(oe2, ne2.contentSize)) : this.readContiguousBoxes(e22.slice(oe2 + 4, ne2.contentSize - 4)), this.currentMetadataKeys = null;
        }
        break;
      case "keys":
        {
          if (!this.currentMetadataKeys) break;
          e22.skip(4);
          let t3 = $o(e22);
          for (let i3 = 0; i3 < t3; i3++) {
            let t4 = $o(e22);
            e22.skip(4);
            let r3 = p2.decode(zo(e22, t4 - 8));
            this.currentMetadataKeys.set(i3 + 1, r3);
          }
        }
        break;
      case "ilst": {
        if (!this.currentMetadataKeys) break;
        let t3 = this.iterateContiguousBoxes(e22.slice(oe2, ne2.contentSize));
        for (let { boxInfo: e3, slice: i3 } of t3) {
          let t4 = e3.name, r3 = (t4.charCodeAt(0) << 24) + (t4.charCodeAt(1) << 16) + (t4.charCodeAt(2) << 8) + t4.charCodeAt(3);
          this.currentMetadataKeys.has(r3) && (t4 = this.currentMetadataKeys.get(r3));
          let a3 = ji(i3);
          switch ((N2 = this.metadataTags).raw ?? (N2.raw = {}), (z2 = this.metadataTags.raw)[t4] ?? (z2[t4] = a3), t4) {
            case "©nam":
            case "titl":
            case "com.apple.quicktime.title":
            case "title":
              typeof a3 == "string" && ((L22 = this.metadataTags).title ?? (L22.title = a3));
              break;
            case "©des":
            case "desc":
            case "dscp":
            case "com.apple.quicktime.description":
            case "description":
              typeof a3 == "string" && ((U2 = this.metadataTags).description ?? (U2.description = a3));
              break;
            case "©ART":
            case "com.apple.quicktime.artist":
            case "artist":
              typeof a3 == "string" && ((q2 = this.metadataTags).artist ?? (q2.artist = a3));
              break;
            case "©alb":
            case "albm":
            case "com.apple.quicktime.album":
            case "album":
              typeof a3 == "string" && ((H2 = this.metadataTags).album ?? (H2.album = a3));
              break;
            case "aART":
            case "album_artist":
              typeof a3 == "string" && (($2 = this.metadataTags).albumArtist ?? ($2.albumArtist = a3));
              break;
            case "©cmt":
            case "com.apple.quicktime.comment":
            case "comment":
              typeof a3 == "string" && ((j2 = this.metadataTags).comment ?? (j2.comment = a3));
              break;
            case "©gen":
            case "gnre":
            case "com.apple.quicktime.genre":
            case "genre":
              typeof a3 == "string" && ((K2 = this.metadataTags).genre ?? (K2.genre = a3));
              break;
            case "©lyr":
            case "lyrics":
              typeof a3 == "string" && ((Q2 = this.metadataTags).lyrics ?? (Q2.lyrics = a3));
              break;
            case "©day":
            case "rldt":
            case "com.apple.quicktime.creationdate":
            case "date":
              if (typeof a3 == "string") {
                let e4 = new Date(a3);
                Number.isNaN(e4.getTime()) || ((X2 = this.metadataTags).date ?? (X2.date = e4));
              }
              break;
            case "covr":
            case "com.apple.quicktime.artwork":
              a3 instanceof Ie ? ((Y2 = this.metadataTags).images ?? (Y2.images = []), this.metadataTags.images.push({ data: a3.data, kind: "coverFront", mimeType: a3.mimeType })) : a3 instanceof Uint8Array && ((J2 = this.metadataTags).images ?? (J2.images = []), this.metadataTags.images.push({ data: a3, kind: "coverFront", mimeType: "image/*" }));
              break;
            case "track":
              if (typeof a3 == "string") {
                let e4 = a3.split("/"), t5 = Number.parseInt(e4[0], 10), i4 = e4[1] && Number.parseInt(e4[1], 10);
                Number.isInteger(t5) && t5 > 0 && ((Z2 = this.metadataTags).trackNumber ?? (Z2.trackNumber = t5)), i4 && Number.isInteger(i4) && i4 > 0 && ((ee2 = this.metadataTags).tracksTotal ?? (ee2.tracksTotal = i4));
              }
              break;
            case "trkn":
              if (a3 instanceof Uint8Array && a3.length >= 6) {
                let e4 = f2(a3), t5 = e4.getUint16(2, !1), i4 = e4.getUint16(4, !1);
                t5 > 0 && ((te2 = this.metadataTags).trackNumber ?? (te2.trackNumber = t5)), i4 > 0 && ((ie2 = this.metadataTags).tracksTotal ?? (ie2.tracksTotal = i4));
              }
              break;
            case "disc":
            case "disk":
              if (a3 instanceof Uint8Array && a3.length >= 6) {
                let e4 = f2(a3), t5 = e4.getUint16(2, !1), i4 = e4.getUint16(4, !1);
                t5 > 0 && ((re22 = this.metadataTags).discNumber ?? (re22.discNumber = t5)), i4 > 0 && ((ae2 = this.metadataTags).discsTotal ?? (ae2.discsTotal = i4));
              }
          }
        }
      }
    }
    return e22.filePos = ce2, !0;
  }
}, ar = class {
  constructor(e22) {
    this.internalTrack = e22, this.packetToSampleIndex = /* @__PURE__ */ new WeakMap(), this.packetToFragmentLocation = /* @__PURE__ */ new WeakMap();
  }
  getId() {
    return this.internalTrack.id;
  }
  getNumber() {
    let e22 = this.internalTrack.demuxer, t22 = this.internalTrack.trackBacking.getType(), i2 = 0;
    for (let r2 of e22.tracks) if (r2.trackBacking.getType() === t22 && i2++, r2 === this.internalTrack) break;
    return i2;
  }
  getCodec() {
    throw new Error("Not implemented on base class.");
  }
  getInternalCodecId() {
    return this.internalTrack.internalCodecId;
  }
  getName() {
    return this.internalTrack.name;
  }
  getLanguageCode() {
    return this.internalTrack.languageCode;
  }
  getTimeResolution() {
    return this.internalTrack.timescale;
  }
  isRelativeToUnixEpoch() {
    return !1;
  }
  getUnixTimeForTimestamp() {
    return null;
  }
  getDisposition() {
    return this.internalTrack.disposition;
  }
  getPairingMask() {
    return 1n;
  }
  getBitrate() {
    return null;
  }
  getAverageBitrate() {
    return null;
  }
  async getDurationFromMetadata() {
    let e22 = this.internalTrack;
    return e22.durationInMediaTimescale <= 0 ? null : (o2(e22.trackBacking), ((await e22.trackBacking.getFirstPacket({ metadataOnly: !0 }))?.timestamp ?? 0) + e22.durationInMediaTimescale / e22.timescale);
  }
  async getLiveRefreshInterval() {
    return null;
  }
  async getFirstPacket(e22) {
    let t22 = await this.fetchPacketForSampleIndex(0, e22);
    return t22 || !this.internalTrack.demuxer.isFragmented ? t22 : this.performFragmentedLookup(null, (e3) => e3.trackData.get(this.internalTrack.id) ? { sampleIndex: 0, correctSampleFound: !0 } : { sampleIndex: -1, correctSampleFound: !1 }, -1 / 0, 1 / 0, e22);
  }
  mapTimestampIntoTimescale(e22) {
    return q(e22 * this.internalTrack.timescale) + this.internalTrack.editListOffset;
  }
  async getPacket(e22, t22) {
    let i2 = this.mapTimestampIntoTimescale(e22), r2 = this.internalTrack.demuxer.getSampleTableForTrack(this.internalTrack), a2 = or(r2, i2), s2 = await this.fetchPacketForSampleIndex(a2, t22);
    return mr(r2) && this.internalTrack.demuxer.isFragmented ? this.performFragmentedLookup(null, (e3) => {
      let t3 = e3.trackData.get(this.internalTrack.id);
      if (!t3) return { sampleIndex: -1, correctSampleFound: !1 };
      let r3 = A(t3.presentationTimestamps, i2, (e4) => e4.presentationTimestamp);
      return { sampleIndex: r3 !== -1 ? t3.presentationTimestamps[r3].sampleIndex : -1, correctSampleFound: r3 !== -1 && i2 < t3.endTimestamp };
    }, i2, i2, t22) : s2;
  }
  async getNextPacket(e22, t22) {
    let i2 = this.packetToSampleIndex.get(e22);
    if (i2 !== void 0) return this.fetchPacketForSampleIndex(i2 + 1, t22);
    let r2 = this.packetToFragmentLocation.get(e22);
    if (r2 === void 0) throw new Error("Packet was not created from this track.");
    return this.performFragmentedLookup(r2.fragment, (e3) => {
      if (e3 === r2.fragment) {
        let t3 = e3.trackData.get(this.internalTrack.id);
        if (r2.sampleIndex + 1 < t3.samples.length) return { sampleIndex: r2.sampleIndex + 1, correctSampleFound: !0 };
      } else if (e3.trackData.get(this.internalTrack.id)) return { sampleIndex: 0, correctSampleFound: !0 };
      return { sampleIndex: -1, correctSampleFound: !1 };
    }, -1 / 0, 1 / 0, t22);
  }
  async getKeyPacket(e22, t22) {
    let i2 = this.mapTimestampIntoTimescale(e22), r2 = this.internalTrack.demuxer.getSampleTableForTrack(this.internalTrack), a2 = cr(r2, i2), s2 = await this.fetchPacketForSampleIndex(a2, t22);
    return mr(r2) && this.internalTrack.demuxer.isFragmented ? this.performFragmentedLookup(null, (e3) => {
      let t3 = e3.trackData.get(this.internalTrack.id);
      if (!t3) return { sampleIndex: -1, correctSampleFound: !1 };
      let r3 = O2(t3.presentationTimestamps, (e4) => t3.samples[e4.sampleIndex].isKeyFrame && e4.presentationTimestamp <= i2);
      return { sampleIndex: r3 !== -1 ? t3.presentationTimestamps[r3].sampleIndex : -1, correctSampleFound: r3 !== -1 && i2 < t3.endTimestamp };
    }, i2, i2, t22) : s2;
  }
  async getNextKeyPacket(e22, t22) {
    let i2 = this.packetToSampleIndex.get(e22);
    if (i2 !== void 0) {
      let e3 = this.internalTrack.demuxer.getSampleTableForTrack(this.internalTrack), r3 = dr(e3, i2);
      return this.fetchPacketForSampleIndex(r3, t22);
    }
    let r2 = this.packetToFragmentLocation.get(e22);
    if (r2 === void 0) throw new Error("Packet was not created from this track.");
    return this.performFragmentedLookup(r2.fragment, (e3) => {
      if (e3 === r2.fragment) {
        let t3 = e3.trackData.get(this.internalTrack.id).samples.findIndex((e4, t4) => e4.isKeyFrame && t4 > r2.sampleIndex);
        if (t3 !== -1) return { sampleIndex: t3, correctSampleFound: !0 };
      } else {
        let t3 = e3.trackData.get(this.internalTrack.id);
        if (t3 && t3.firstKeyFrameTimestamp !== null) {
          let e4 = t3.samples.findIndex((e5) => e5.isKeyFrame);
          return o2(e4 !== -1), { sampleIndex: e4, correctSampleFound: !0 };
        }
      }
      return { sampleIndex: -1, correctSampleFound: !1 };
    }, -1 / 0, 1 / 0, t22);
  }
  async fetchPacketForSampleIndex(e22, t22) {
    if (e22 === -1) return null;
    let i2 = this.internalTrack.demuxer.getSampleTableForTrack(this.internalTrack), r2 = lr(i2, e22);
    if (!r2) return null;
    let a2;
    if (t22.metadataOnly) a2 = Di;
    else {
      let t3 = this.internalTrack.demuxer.reader.requestSlice(r2.sampleOffset, r2.sampleSize);
      if (t3 instanceof Promise && (t3 = await t3), !t3) return null;
      if (a2 = zo(t3, r2.sampleSize), this.internalTrack.encryptionAuxInfo) {
        o2(this.internalTrack.encryptionInfo);
        let t4 = await pr(this.internalTrack.demuxer.reader, this.internalTrack.encryptionInfo, this.internalTrack.encryptionAuxInfo);
        e22 < t4.length && (a2 = await gr(this.internalTrack, t4[e22], a2, null));
      }
    }
    let s2 = (r2.presentationTimestamp - this.internalTrack.editListOffset) / this.internalTrack.timescale, n2 = r2.duration / this.internalTrack.timescale, c22 = new Oi(a2, r2.isKeyFrame ? "key" : "delta", s2, n2, e22, r2.sampleSize);
    return this.packetToSampleIndex.set(c22, e22), c22;
  }
  async fetchPacketInFragment(e22, t22, i2) {
    if (t22 === -1) return null;
    let r2 = e22.trackData.get(this.internalTrack.id).samples[t22], a2;
    if (o2(r2), i2.metadataOnly) a2 = Di;
    else {
      let t3 = this.internalTrack.demuxer.reader.requestSlice(r2.byteOffset, r2.byteSize);
      if (t3 instanceof Promise && (t3 = await t3), !t3) return null;
      a2 = zo(t3, r2.byteSize), r2.encryption && (a2 = await gr(this.internalTrack, r2.encryption, a2, e22));
    }
    let s2 = (r2.presentationTimestamp - this.internalTrack.editListOffset) / this.internalTrack.timescale, n2 = r2.duration / this.internalTrack.timescale, c22 = new Oi(a2, r2.isKeyFrame ? "key" : "delta", s2, n2, e22.moofOffset + t22, r2.byteSize);
    return this.packetToFragmentLocation.set(c22, { fragment: e22, sampleIndex: t22 }), c22;
  }
  async performFragmentedLookup(e22, t22, i2, r2, a2) {
    let s2 = this.internalTrack.demuxer, n2 = null, c22 = null, l22 = -1;
    if (e22) {
      let { sampleIndex: i3, correctSampleFound: r3 } = t22(e22);
      if (r3) return this.fetchPacketInFragment(e22, i3, a2);
      i3 !== -1 && (c22 = e22, l22 = i3);
    }
    let d22 = A(this.internalTrack.fragmentLookupTable, i2, (e3) => e3.timestamp), u2 = d22 !== -1 ? this.internalTrack.fragmentLookupTable[d22] : null, h22 = A(this.internalTrack.fragmentPositionCache, i2, (e3) => e3.startTimestamp), m2 = h22 !== -1 ? this.internalTrack.fragmentPositionCache[h22] : null, f22 = Math.max(u2?.moofOffset ?? 0, m2?.moofOffset ?? 0) || null, p22;
    for (e22 ? f22 === null || e22.moofOffset >= f22 ? (p22 = e22.moofOffset + e22.moofSize, n2 = e22) : p22 = f22 : p22 = f22 ?? 0; ; ) {
      if (n2) {
        let e4 = n2.trackData.get(this.internalTrack.id);
        if (e4 && e4.startTimestamp > r2) break;
      }
      let e3 = s2.reader.requestSliceRange(p22, 8, Ui);
      if (e3 instanceof Promise && (e3 = await e3), !e3) break;
      let i3 = p22, o22 = Wi(e3);
      if (!o22) break;
      if (o22.name === "moof") {
        n2 = await s2.readFragment(i3);
        let { sampleIndex: e4, correctSampleFound: r3 } = t22(n2);
        if (r3) return this.fetchPacketInFragment(n2, e4, a2);
        e4 !== -1 && (c22 = n2, l22 = e4);
      }
      p22 = i3 + o22.totalSize;
    }
    if (u2 && (!c22 || c22.moofOffset < u2.moofOffset)) {
      let e3 = this.internalTrack.fragmentLookupTable[d22 - 1];
      o2(!e3 || e3.timestamp < u2.timestamp);
      let i3 = e3?.timestamp ?? -1 / 0;
      return this.performFragmentedLookup(null, t22, i3, r2, a2);
    }
    return c22 ? this.fetchPacketInFragment(c22, l22, a2) : null;
  }
}, sr = class extends ar {
  constructor(e22) {
    super(e22), this.decoderConfigPromise = null, this.internalTrack = e22;
  }
  getType() {
    return "video";
  }
  getCodec() {
    return this.internalTrack.info.codec;
  }
  getCodedWidth() {
    return this.internalTrack.info.width;
  }
  getCodedHeight() {
    return this.internalTrack.info.height;
  }
  getSquarePixelWidth() {
    return this.internalTrack.info.squarePixelWidth;
  }
  getSquarePixelHeight() {
    return this.internalTrack.info.squarePixelHeight;
  }
  getRotation() {
    return this.internalTrack.rotation;
  }
  async getColorSpace() {
    var e22, t22, i2, r2;
    return { primaries: (e22 = this.internalTrack.info.colorSpace) == null ? void 0 : e22.primaries, transfer: (t22 = this.internalTrack.info.colorSpace) == null ? void 0 : t22.transfer, matrix: (i2 = this.internalTrack.info.colorSpace) == null ? void 0 : i2.matrix, fullRange: (r2 = this.internalTrack.info.colorSpace) == null ? void 0 : r2.fullRange };
  }
  async canBeTransparent() {
    return this.internalTrack.info.codec === "prores" && (this.internalTrack.info.proresFormat === "ap4h" || this.internalTrack.info.proresFormat === "ap4x");
  }
  async getDecoderConfig() {
    return this.internalTrack.info.codec ? this.decoderConfigPromise ?? (this.decoderConfigPromise = (async () => {
      if (this.internalTrack.info.codec !== "avc" || this.internalTrack.info.codecDescription) if (this.internalTrack.info.codec !== "hevc" || this.internalTrack.info.codecDescription) if (this.internalTrack.info.codec !== "vp9" || this.internalTrack.info.vp9CodecInfo) {
        if (this.internalTrack.info.codec === "av1" && !this.internalTrack.info.av1CodecInfo) {
          let e3 = await this.getFirstPacket({});
          this.internalTrack.info.av1CodecInfo = e3 && si(e3.data);
        }
      } else {
        let e3 = await this.getFirstPacket({});
        this.internalTrack.info.vp9CodecInfo = e3 && ri(e3.data);
      }
      else {
        let e3 = await this.getFirstPacket({});
        this.internalTrack.info.hevcCodecInfo = e3 && jt(e3.data);
      }
      else {
        let e3 = await this.getFirstPacket({});
        this.internalTrack.info.avcCodecInfo = e3 && Lt(e3.data);
      }
      let e22 = { codec: Ze(this.internalTrack.info), codedWidth: this.internalTrack.info.width, codedHeight: this.internalTrack.info.height, description: this.internalTrack.info.codecDescription ?? void 0, colorSpace: this.internalTrack.info.colorSpace ?? void 0 };
      return this.internalTrack.info.width === this.internalTrack.info.squarePixelWidth && this.internalTrack.info.height === this.internalTrack.info.squarePixelHeight || (e22.displayAspectWidth = this.internalTrack.info.squarePixelWidth, e22.displayAspectHeight = this.internalTrack.info.squarePixelHeight), e22;
    })()) : null;
  }
}, nr = class extends ar {
  constructor(e22) {
    super(e22), this.decoderConfigPromise = null, this.internalTrack = e22;
  }
  getType() {
    return "audio";
  }
  getCodec() {
    return this.internalTrack.info.codec;
  }
  getNumberOfChannels() {
    return this.internalTrack.info.numberOfChannels;
  }
  getSampleRate() {
    return this.internalTrack.info.sampleRate;
  }
  async getDecoderConfig() {
    return this.internalTrack.info.codec ? this.decoderConfigPromise ?? (this.decoderConfigPromise = (async () => {
      if (this.internalTrack.info.codec === "dts" && !this.internalTrack.info.dtsFormat) {
        let e22 = await this.getFirstPacket({});
        this.internalTrack.info.dtsFormat = e22 && _i(e22.data);
      }
      return { codec: tt(this.internalTrack.info), numberOfChannels: this.internalTrack.info.numberOfChannels, sampleRate: this.internalTrack.info.sampleRate, description: this.internalTrack.info.codecDescription ?? void 0 };
    })()) : null;
  }
}, or = (e22, t22) => {
  if (e22.presentationTimestamps) {
    let i2 = A(e22.presentationTimestamps, t22, (e3) => e3.presentationTimestamp);
    return i2 === -1 ? -1 : e22.presentationTimestamps[i2].sampleIndex;
  }
  {
    let i2 = A(e22.sampleTimingEntries, t22, (e3) => e3.startDecodeTimestamp);
    if (i2 === -1) return -1;
    let r2 = e22.sampleTimingEntries[i2];
    return r2.startIndex + Math.min(Math.floor((t22 - r2.startDecodeTimestamp) / r2.delta), r2.count - 1);
  }
}, cr = (e22, t22) => {
  if (!e22.keySampleIndices) return or(e22, t22);
  if (e22.presentationTimestamps) {
    let i2 = A(e22.presentationTimestamps, t22, (e3) => e3.presentationTimestamp);
    if (i2 === -1) return -1;
    for (let t3 = i2; t3 >= 0; t3--) {
      let i3 = e22.presentationTimestamps[t3].sampleIndex;
      if (B(e22.keySampleIndices, i3, (e3) => e3) !== -1) return i3;
    }
    return -1;
  }
  {
    let i2 = or(e22, t22), r2 = A(e22.keySampleIndices, i2, (e3) => e3);
    return e22.keySampleIndices[r2] ?? -1;
  }
}, lr = (e22, t22) => {
  let i2 = A(e22.sampleTimingEntries, t22, (e3) => e3.startIndex), r2 = e22.sampleTimingEntries[i2];
  if (!r2 || r2.startIndex + r2.count <= t22) return null;
  let a2 = r2.startDecodeTimestamp + (t22 - r2.startIndex) * r2.delta, s2 = A(e22.sampleCompositionTimeOffsets, t22, (e3) => e3.startIndex), n2 = e22.sampleCompositionTimeOffsets[s2];
  n2 && t22 - n2.startIndex < n2.count && (a2 += n2.offset);
  let c22 = e22.sampleSizes[Math.min(t22, e22.sampleSizes.length - 1)], l22 = A(e22.sampleToChunk, t22, (e3) => e3.startSampleIndex), d22 = e22.sampleToChunk[l22];
  o2(d22);
  let u2 = d22.startChunkIndex + Math.floor((t22 - d22.startSampleIndex) / d22.samplesPerChunk), h22 = e22.chunkOffsets[u2], m2 = d22.startSampleIndex + (u2 - d22.startChunkIndex) * d22.samplesPerChunk, f22 = 0, p22 = h22;
  if (e22.sampleSizes.length === 1) p22 += c22 * (t22 - m2), f22 += c22 * d22.samplesPerChunk;
  else for (let o22 = m2; o22 < m2 + d22.samplesPerChunk; o22++) {
    let i3 = e22.sampleSizes[o22];
    o22 < t22 && (p22 += i3), f22 += i3;
  }
  let g2 = r2.delta;
  if (e22.presentationTimestamps) {
    let i3 = e22.presentationTimestampIndexMap[t22];
    o2(i3 !== void 0), i3 < e22.presentationTimestamps.length - 1 && (g2 = e22.presentationTimestamps[i3 + 1].presentationTimestamp - a2);
  }
  return { presentationTimestamp: a2, duration: g2, sampleOffset: p22, sampleSize: c22, chunkOffset: h22, chunkSize: f22, isKeyFrame: !e22.keySampleIndices || B(e22.keySampleIndices, t22, (e3) => e3) !== -1 };
}, dr = (e22, t22) => {
  if (!e22.keySampleIndices) return t22 + 1;
  let i2 = A(e22.keySampleIndices, t22, (e3) => e3);
  return e22.keySampleIndices[i2 + 1] ?? -1;
}, ur = (e22, t22) => {
  e22.startTimestamp += t22, e22.endTimestamp += t22;
  for (let i2 of e22.samples) i2.presentationTimestamp += t22;
  for (let i2 of e22.presentationTimestamps) i2.presentationTimestamp += t22;
}, hr = (e22) => {
  let [t22, i2] = e22, r2 = Math.atan2(i2, t22);
  return Number.isFinite(r2) ? r2 * (180 / Math.PI) : 0;
}, mr = (e22) => e22.sampleSizes.length === 0, fr = (e22) => {
  var t22;
  return e22.currentFragmentState ? (t22 = e22.currentFragmentState).encryptionAuxInfo ?? (t22.encryptionAuxInfo = { defaultSampleInfoSize: 0, sampleSizes: null, sampleCount: 0, offset: null, resolved: null }) : e22.encryptionAuxInfo ?? (e22.encryptionAuxInfo = { defaultSampleInfoSize: 0, sampleSizes: null, sampleCount: 0, offset: null, resolved: null });
}, pr = async (e22, t22, i2) => {
  if (i2.resolved) return i2.resolved;
  if (i2.offset === null || i2.sampleCount === 0) throw new Error("Incomplete saiz/saio info; cannot resolve encryption data.");
  let r2 = 0;
  if (i2.defaultSampleInfoSize > 0) r2 = i2.defaultSampleInfoSize * i2.sampleCount;
  else {
    o2(i2.sampleSizes);
    for (let e3 = 0; e3 < i2.sampleCount; e3++) r2 += i2.sampleSizes[e3];
  }
  let a2 = e22.requestSlice(i2.offset, r2);
  if (a2 instanceof Promise && (a2 = await a2), !a2) throw new Error("Failed to read auxiliary encryption info.");
  let s2 = t22.defaultPerSampleIvSize;
  o2(s2 !== null);
  let n2 = [];
  for (let o22 = 0; o22 < i2.sampleCount; o22++) {
    let e3 = i2.defaultSampleInfoSize > 0 ? i2.defaultSampleInfoSize : i2.sampleSizes[o22], r3 = new Uint8Array(16);
    s2 > 0 ? r3.set(zo(a2, s2), 0) : r3.set(t22.defaultConstantIv, 0);
    let c22 = null;
    if (e3 > s2) {
      let e4 = Wo(a2);
      c22 = [];
      for (let t3 = 0; t3 < e4; t3++) {
        let e5 = Wo(a2), t4 = $o(a2);
        c22.push({ clearLen: e5, protectedLen: t4 });
      }
    }
    n2.push({ iv: r3, subsamples: c22 });
  }
  return i2.resolved = n2, n2;
}, gr = async (e22, t22, i2, r2) => {
  var a2;
  o2(e22.encryptionInfo);
  let s2 = e22.encryptionInfo;
  o2(s2.defaultKid !== null);
  let n2 = s2.defaultKid, c22, l22 = e22.demuxer.decryptionKeyCache.get(n2);
  if (l22) c22 = await l22;
  else {
    if (!((a2 = e22.demuxer.input._formatOptions.isobmff) != null && a2.resolveKeyId)) throw new Error("Encrypted media samples encountered. To decrypt them, please provide a callback for InputOptions.formatOptions.isobmff.resolveKeyId.");
    let t3 = (async () => {
      let t4 = e22.demuxer.psshBoxes;
      if (r2) {
        t4 = [...t4, ...r2.psshBoxes].filter((e3) => e3.keyIds === null || e3.keyIds.includes(n2));
        for (let e3 = 0; e3 < t4.length - 1; e3++) for (let i4 = e3 + 1; i4 < t4.length; i4++) Li(t4[e3], t4[i4]) && (t4.splice(i4, 1), i4--);
      }
      let i3 = await e22.demuxer.input._formatOptions.isobmff.resolveKeyId({ keyId: n2, psshBoxes: t4 });
      if (!(typeof i3 == "string" && i3.length === 32 && E2.test(i3) || i3 instanceof Uint8Array && i3.byteLength === 16)) throw new TypeError("resolveKeyId must return a 32-character hex string or a 16-byte Uint8Array containing the decryption key.");
      return i3 instanceof Uint8Array ? i3 : ((e3) => {
        o2(e3.length % 2 == 0);
        let t5 = new Uint8Array(e3.length / 2);
        for (let i4 = 0; i4 < e3.length; i4 += 2) t5[i4 / 2] = parseInt(e3.slice(i4, i4 + 2), 16);
        return t5;
      })(i3);
    })();
    e22.demuxer.decryptionKeyCache.set(n2, t3), c22 = await t3;
  }
  return s2.scheme === "cenc" || s2.scheme === "cens" ? kr(c22, s2, t22, i2) : wr(c22, s2, t22, i2);
}, kr = async (e22, t22, i2, r2) => {
  let a2 = new Uint8Array(16);
  a2.set(i2.iv, 0);
  let s2 = await crypto.subtle.importKey("raw", e22, { name: "AES-CTR" }, !1, ["decrypt"]), n2 = async (e3) => {
    let t3 = await crypto.subtle.decrypt({ name: "AES-CTR", counter: a2, length: 64 }, s2, e3);
    return new Uint8Array(t3);
  };
  if (!i2.subsamples) return n2(r2);
  o2(t22.defaultCryptByteBlock !== null && t22.defaultSkipByteBlock !== null);
  let c22 = br(i2.subsamples, t22.defaultCryptByteBlock, t22.defaultSkipByteBlock), l22 = 0;
  for (let o22 of c22) for (let e3 of o22.perSubsample) l22 += e3.length;
  let d22 = new Uint8Array(l22), u2 = 0;
  for (let o22 of c22) for (let e3 of o22.perSubsample) d22.set(r2.subarray(e3.offset, e3.offset + e3.length), u2), u2 += e3.length;
  let h22 = await n2(d22), m2 = new Uint8Array(r2), f22 = 0;
  for (let o22 of c22) for (let e3 of o22.perSubsample) m2.set(h22.subarray(f22, f22 + e3.length), e3.offset), f22 += e3.length;
  return m2;
}, wr = (e22, t22, i2, r2) => {
  let a2 = new ir();
  a2.init({ key: e22, iv: i2.iv });
  let s2 = t22.defaultCryptByteBlock, n2 = t22.defaultSkipByteBlock;
  if (o2(s2 !== null && n2 !== null), !i2.subsamples) {
    let e3 = new Uint8Array(r2), t3 = Math.floor(r2.length / 16);
    for (let i3 = 0; i3 < t3; i3++) {
      let t4 = 16 * i3;
      a2.in.set(r2.subarray(t4, t4 + 16)), a2.decrypt(), e3.set(a2.out, t4);
    }
    return e3;
  }
  if (s2 === 0 && n2 === 0) throw new Error("cbcs with subsamples requires pattern encryption.");
  let c22 = new Uint8Array(r2), l22 = br(i2.subsamples, s2, n2), d22 = new DataView(i2.iv.buffer, i2.iv.byteOffset, 16);
  for (let o22 of l22) {
    a2.iv[0] = d22.getUint32(0, !1), a2.iv[1] = d22.getUint32(4, !1), a2.iv[2] = d22.getUint32(8, !1), a2.iv[3] = d22.getUint32(12, !1);
    for (let e3 of o22.perSubsample) {
      let t3 = e3.length / 16;
      for (let i3 = 0; i3 < t3; i3++) {
        let t4 = e3.offset + 16 * i3;
        a2.in.set(r2.subarray(t4, t4 + 16)), a2.decrypt(), c22.set(a2.out, t4);
      }
    }
  }
  return c22;
}, br = (e22, t22, i2) => {
  let r2 = [], a2 = t22 !== 0 || i2 !== 0, s2 = 0;
  for (let n2 of e22) {
    s2 += n2.clearLen;
    let e3 = [];
    if (a2) {
      let r3 = n2.protectedLen, a3 = s2;
      for (; r3 > 0 && !(r3 < 16 * t22); ) {
        let s3 = 16 * t22;
        e3.push({ offset: a3, length: s3 }), a3 += s3, r3 -= s3;
        let n3 = Math.min(16 * i2, r3);
        a3 += n3, r3 -= n3;
      }
      s2 += n2.protectedLen;
    } else n2.protectedLen > 0 && e3.push({ offset: s2, length: n2.protectedLen }), s2 += n2.protectedLen;
    r2.push({ perSubsample: e3 });
  }
  return r2;
};
var yr = class {
  constructor(e22) {
    this.value = e22;
  }
}, vr = class {
  constructor(e22) {
    this.value = e22;
  }
}, Tr = class {
  constructor(e22) {
    this.value = e22;
  }
}, Sr = class {
  constructor(e22) {
    this.value = e22;
  }
}, Pr, Cr;
(Cr = Pr || (Pr = {}))[Cr.EBML = 440786851] = "EBML", Cr[Cr.EBMLVersion = 17030] = "EBMLVersion", Cr[Cr.EBMLReadVersion = 17143] = "EBMLReadVersion", Cr[Cr.EBMLMaxIDLength = 17138] = "EBMLMaxIDLength", Cr[Cr.EBMLMaxSizeLength = 17139] = "EBMLMaxSizeLength", Cr[Cr.DocType = 17026] = "DocType", Cr[Cr.DocTypeVersion = 17031] = "DocTypeVersion", Cr[Cr.DocTypeReadVersion = 17029] = "DocTypeReadVersion", Cr[Cr.Void = 236] = "Void", Cr[Cr.Segment = 408125543] = "Segment", Cr[Cr.SeekHead = 290298740] = "SeekHead", Cr[Cr.Seek = 19899] = "Seek", Cr[Cr.SeekID = 21419] = "SeekID", Cr[Cr.SeekPosition = 21420] = "SeekPosition", Cr[Cr.Duration = 17545] = "Duration", Cr[Cr.Info = 357149030] = "Info", Cr[Cr.TimestampScale = 2807729] = "TimestampScale", Cr[Cr.MuxingApp = 19840] = "MuxingApp", Cr[Cr.WritingApp = 22337] = "WritingApp", Cr[Cr.Tracks = 374648427] = "Tracks", Cr[Cr.TrackEntry = 174] = "TrackEntry", Cr[Cr.TrackNumber = 215] = "TrackNumber", Cr[Cr.TrackUID = 29637] = "TrackUID", Cr[Cr.TrackType = 131] = "TrackType", Cr[Cr.FlagEnabled = 185] = "FlagEnabled", Cr[Cr.FlagDefault = 136] = "FlagDefault", Cr[Cr.FlagForced = 21930] = "FlagForced", Cr[Cr.FlagOriginal = 21934] = "FlagOriginal", Cr[Cr.FlagHearingImpaired = 21931] = "FlagHearingImpaired", Cr[Cr.FlagVisualImpaired = 21932] = "FlagVisualImpaired", Cr[Cr.FlagCommentary = 21935] = "FlagCommentary", Cr[Cr.FlagLacing = 156] = "FlagLacing", Cr[Cr.Name = 21358] = "Name", Cr[Cr.Language = 2274716] = "Language", Cr[Cr.LanguageBCP47 = 2274717] = "LanguageBCP47", Cr[Cr.CodecID = 134] = "CodecID", Cr[Cr.CodecPrivate = 25506] = "CodecPrivate", Cr[Cr.CodecDelay = 22186] = "CodecDelay", Cr[Cr.SeekPreRoll = 22203] = "SeekPreRoll", Cr[Cr.DefaultDuration = 2352003] = "DefaultDuration", Cr[Cr.Video = 224] = "Video", Cr[Cr.PixelWidth = 176] = "PixelWidth", Cr[Cr.PixelHeight = 186] = "PixelHeight", Cr[Cr.DisplayWidth = 21680] = "DisplayWidth", Cr[Cr.DisplayHeight = 21690] = "DisplayHeight", Cr[Cr.DisplayUnit = 21682] = "DisplayUnit", Cr[Cr.AlphaMode = 21440] = "AlphaMode", Cr[Cr.Audio = 225] = "Audio", Cr[Cr.SamplingFrequency = 181] = "SamplingFrequency", Cr[Cr.Channels = 159] = "Channels", Cr[Cr.BitDepth = 25188] = "BitDepth", Cr[Cr.SimpleBlock = 163] = "SimpleBlock", Cr[Cr.BlockGroup = 160] = "BlockGroup", Cr[Cr.Block = 161] = "Block", Cr[Cr.BlockAdditions = 30113] = "BlockAdditions", Cr[Cr.BlockMore = 166] = "BlockMore", Cr[Cr.BlockAdditional = 165] = "BlockAdditional", Cr[Cr.BlockAddID = 238] = "BlockAddID", Cr[Cr.BlockDuration = 155] = "BlockDuration", Cr[Cr.ReferenceBlock = 251] = "ReferenceBlock", Cr[Cr.Cluster = 524531317] = "Cluster", Cr[Cr.Timestamp = 231] = "Timestamp", Cr[Cr.Cues = 475249515] = "Cues", Cr[Cr.CuePoint = 187] = "CuePoint", Cr[Cr.CueTime = 179] = "CueTime", Cr[Cr.CueTrackPositions = 183] = "CueTrackPositions", Cr[Cr.CueTrack = 247] = "CueTrack", Cr[Cr.CueClusterPosition = 241] = "CueClusterPosition", Cr[Cr.Colour = 21936] = "Colour", Cr[Cr.MatrixCoefficients = 21937] = "MatrixCoefficients", Cr[Cr.TransferCharacteristics = 21946] = "TransferCharacteristics", Cr[Cr.Primaries = 21947] = "Primaries", Cr[Cr.Range = 21945] = "Range", Cr[Cr.Projection = 30320] = "Projection", Cr[Cr.ProjectionType = 30321] = "ProjectionType", Cr[Cr.ProjectionPoseRoll = 30325] = "ProjectionPoseRoll", Cr[Cr.Attachments = 423732329] = "Attachments", Cr[Cr.AttachedFile = 24999] = "AttachedFile", Cr[Cr.FileDescription = 18046] = "FileDescription", Cr[Cr.FileName = 18030] = "FileName", Cr[Cr.FileMediaType = 18016] = "FileMediaType", Cr[Cr.FileData = 18012] = "FileData", Cr[Cr.FileUID = 18094] = "FileUID", Cr[Cr.Chapters = 272869232] = "Chapters", Cr[Cr.Tags = 307544935] = "Tags", Cr[Cr.Tag = 29555] = "Tag", Cr[Cr.Targets = 25536] = "Targets", Cr[Cr.TargetTypeValue = 26826] = "TargetTypeValue", Cr[Cr.TargetType = 25546] = "TargetType", Cr[Cr.TagTrackUID = 25541] = "TagTrackUID", Cr[Cr.TagEditionUID = 25545] = "TagEditionUID", Cr[Cr.TagChapterUID = 25540] = "TagChapterUID", Cr[Cr.TagAttachmentUID = 25542] = "TagAttachmentUID", Cr[Cr.SimpleTag = 26568] = "SimpleTag", Cr[Cr.TagName = 17827] = "TagName", Cr[Cr.TagLanguage = 17530] = "TagLanguage", Cr[Cr.TagString = 17543] = "TagString", Cr[Cr.TagBinary = 17541] = "TagBinary", Cr[Cr.ContentEncodings = 28032] = "ContentEncodings", Cr[Cr.ContentEncoding = 25152] = "ContentEncoding", Cr[Cr.ContentEncodingOrder = 20529] = "ContentEncodingOrder", Cr[Cr.ContentEncodingScope = 20530] = "ContentEncodingScope", Cr[Cr.ContentCompression = 20532] = "ContentCompression", Cr[Cr.ContentCompAlgo = 16980] = "ContentCompAlgo", Cr[Cr.ContentCompSettings = 16981] = "ContentCompSettings", Cr[Cr.ContentEncryption = 20533] = "ContentEncryption";
var xr = [Pr.EBML, Pr.Segment], Er = [Pr.SeekHead, Pr.Info, Pr.Cluster, Pr.Tracks, Pr.Cues, Pr.Attachments, Pr.Chapters, Pr.Tags], Ir = [...xr, ...Er], _r = (e22) => e22 < 256 ? 1 : e22 < 65536 ? 2 : e22 < 1 << 24 ? 3 : e22 < 2 ** 32 ? 4 : e22 < 2 ** 40 ? 5 : 6, Br = (e22) => e22 < 256n ? 1 : e22 < 65536n ? 2 : e22 < 1n << 24n ? 3 : e22 < 1n << 32n ? 4 : e22 < 1n << 40n ? 5 : e22 < 1n << 48n ? 6 : e22 < 1n << 56n ? 7 : 8, Ar = (e22) => e22 >= -64 && e22 < 64 ? 1 : e22 >= -8192 && e22 < 8192 ? 2 : e22 >= -1048576 && e22 < 1 << 20 ? 3 : e22 >= -134217728 && e22 < 1 << 27 ? 4 : e22 >= -17179869184 && e22 < 2 ** 34 ? 5 : 6, Mr = class {
  constructor(e22) {
    this.writer = e22, this.helper = new Uint8Array(8), this.helperView = new DataView(this.helper.buffer), this.offsets = /* @__PURE__ */ new WeakMap(), this.dataOffsets = /* @__PURE__ */ new WeakMap();
  }
  writeByte(e22) {
    this.helperView.setUint8(0, e22), this.writer.write(this.helper.subarray(0, 1));
  }
  writeFloat32(e22) {
    this.helperView.setFloat32(0, e22, !1), this.writer.write(this.helper.subarray(0, 4));
  }
  writeFloat64(e22) {
    this.helperView.setFloat64(0, e22, !1), this.writer.write(this.helper);
  }
  writeUnsignedInt(e22, t22 = _r(e22)) {
    let i2 = 0;
    switch (t22) {
      case 6:
        this.helperView.setUint8(i2++, e22 / 2 ** 40 | 0);
      case 5:
        this.helperView.setUint8(i2++, e22 / 2 ** 32 | 0);
      case 4:
        this.helperView.setUint8(i2++, e22 >> 24);
      case 3:
        this.helperView.setUint8(i2++, e22 >> 16);
      case 2:
        this.helperView.setUint8(i2++, e22 >> 8);
      case 1:
        this.helperView.setUint8(i2++, e22);
        break;
      default:
        throw new Error("Bad unsigned int size " + t22);
    }
    this.writer.write(this.helper.subarray(0, i2));
  }
  writeUnsignedBigInt(e22, t22 = Br(e22)) {
    let i2 = 0;
    for (let r2 = t22 - 1; r2 >= 0; r2--) this.helperView.setUint8(i2++, Number(e22 >> BigInt(8 * r2) & 0xffn));
    this.writer.write(this.helper.subarray(0, i2));
  }
  writeSignedInt(e22, t22 = Ar(e22)) {
    e22 < 0 && (e22 += 2 ** (8 * t22)), this.writeUnsignedInt(e22, t22);
  }
  writeVarInt(e22, t22 = ((e3) => {
    if (e3 < 127) return 1;
    if (e3 < 16383) return 2;
    if (e3 < 2097151) return 3;
    if (e3 < 268435455) return 4;
    if (e3 < 2 ** 35 - 1) return 5;
    if (e3 < 2 ** 42 - 1) return 6;
    throw new Error("EBML varint size not supported " + e3);
  })(e22)) {
    let i2 = 0;
    switch (t22) {
      case 1:
        this.helperView.setUint8(i2++, 128 | e22);
        break;
      case 2:
        this.helperView.setUint8(i2++, 64 | e22 >> 8), this.helperView.setUint8(i2++, e22);
        break;
      case 3:
        this.helperView.setUint8(i2++, 32 | e22 >> 16), this.helperView.setUint8(i2++, e22 >> 8), this.helperView.setUint8(i2++, e22);
        break;
      case 4:
        this.helperView.setUint8(i2++, 16 | e22 >> 24), this.helperView.setUint8(i2++, e22 >> 16), this.helperView.setUint8(i2++, e22 >> 8), this.helperView.setUint8(i2++, e22);
        break;
      case 5:
        this.helperView.setUint8(i2++, 8 | e22 / 2 ** 32 & 7), this.helperView.setUint8(i2++, e22 >> 24), this.helperView.setUint8(i2++, e22 >> 16), this.helperView.setUint8(i2++, e22 >> 8), this.helperView.setUint8(i2++, e22);
        break;
      case 6:
        this.helperView.setUint8(i2++, 4 | e22 / 2 ** 40 & 3), this.helperView.setUint8(i2++, e22 / 2 ** 32 | 0), this.helperView.setUint8(i2++, e22 >> 24), this.helperView.setUint8(i2++, e22 >> 16), this.helperView.setUint8(i2++, e22 >> 8), this.helperView.setUint8(i2++, e22);
        break;
      default:
        throw new Error("Bad EBML varint size " + t22);
    }
    this.writer.write(this.helper.subarray(0, i2));
  }
  writeAsciiString(e22) {
    this.writer.write(new Uint8Array(e22.split("").map((e3) => e3.charCodeAt(0))));
  }
  writeEBML(e22) {
    if (e22 !== null) if (e22 instanceof Uint8Array) this.writer.write(e22);
    else if (Array.isArray(e22)) for (let t22 of e22) this.writeEBML(t22);
    else if (this.offsets.set(e22, this.writer.getPos()), this.writeUnsignedInt(e22.id), Array.isArray(e22.data)) {
      let t22 = this.writer.getPos(), i2 = e22.size === -1 ? 1 : e22.size ?? 4;
      e22.size === -1 ? this.writeByte(255) : this.writer.seek(this.writer.getPos() + i2);
      let r2 = this.writer.getPos();
      if (this.dataOffsets.set(e22, r2), this.writeEBML(e22.data), e22.size !== -1) {
        let e3 = this.writer.getPos() - r2, a2 = this.writer.getPos();
        this.writer.seek(t22), this.writeVarInt(e3, i2), this.writer.seek(a2);
      }
    } else if (typeof e22.data == "number") {
      let t22 = e22.size ?? _r(e22.data);
      this.writeVarInt(t22), this.writeUnsignedInt(e22.data, t22);
    } else if (typeof e22.data == "bigint") {
      let t22 = e22.size ?? Br(e22.data);
      this.writeVarInt(t22), this.writeUnsignedBigInt(e22.data, t22);
    } else if (typeof e22.data == "string") this.writeVarInt(e22.data.length), this.writeAsciiString(e22.data);
    else if (e22.data instanceof Uint8Array) this.writeVarInt(e22.data.byteLength, e22.size), this.writer.write(e22.data);
    else if (e22.data instanceof yr) this.writeVarInt(4), this.writeFloat32(e22.data.value);
    else if (e22.data instanceof vr) this.writeVarInt(8), this.writeFloat64(e22.data.value);
    else if (e22.data instanceof Tr) {
      let t22 = e22.size ?? Ar(e22.data.value);
      this.writeVarInt(t22), this.writeSignedInt(e22.data.value, t22);
    } else if (e22.data instanceof Sr) {
      let t22 = g.encode(e22.data.value);
      this.writeVarInt(t22.length), this.writer.write(t22);
    } else N(e22.data);
  }
}, Fr = 16, Rr = (e22) => {
  if (e22.remainingLength < 1) return null;
  let t22 = Lo(e22);
  if (e22.skip(-1), t22 === 0) return null;
  let i2 = 1, r2 = 128;
  for (; (t22 & r2) === 0; ) i2++, r2 >>= 1;
  return e22.remainingLength < i2 ? null : i2;
}, Dr = (e22) => {
  if (e22.remainingLength < 1) return null;
  let t22 = Lo(e22);
  if (t22 === 0) return null;
  let i2 = 1, r2 = 128;
  for (; (t22 & r2) === 0; ) i2++, r2 >>= 1;
  if (e22.remainingLength < i2 - 1) return null;
  let a2 = t22 & r2 - 1;
  for (let s2 = 1; s2 < i2; s2++) a2 *= 256, a2 += Lo(e22);
  return a2;
}, Or = (e22, t22) => {
  if (t22 < 1 || t22 > 8) throw new Error("Bad unsigned int size " + t22);
  let i2 = 0;
  for (let r2 = 0; r2 < t22; r2++) i2 *= 256, i2 += Lo(e22);
  return i2;
}, Nr = (e22) => {
  let t22 = Rr(e22);
  return t22 === null || e22.remainingLength < t22 ? null : Or(e22, t22);
}, zr = (e22) => {
  if (e22.remainingLength < 1) return null;
  if (Lo(e22) === 255) return;
  e22.skip(-1);
  let t22 = Dr(e22);
  return t22 === null ? null : t22 !== 72057594037927940 ? t22 : void 0;
}, Lr = (e22) => {
  o2(e22.remainingLength >= 2);
  let t22 = Nr(e22);
  if (t22 === null) return null;
  let i2 = zr(e22);
  return i2 === null ? null : { id: t22, size: i2 };
}, Ur = (e22, t22) => {
  let i2 = zo(e22, t22), r2 = 0;
  for (; r2 < t22 && i2[r2] !== 0; ) r2 += 1;
  return String.fromCharCode(...i2.subarray(0, r2));
}, Wr = (e22, t22) => {
  let i2 = zo(e22, t22), r2 = 0;
  for (; r2 < t22 && i2[r2] !== 0; ) r2 += 1;
  return p2.decode(i2.subarray(0, r2));
}, qr = (e22, t22) => {
  if (t22 === 0) return 0;
  if (t22 !== 4 && t22 !== 8) throw new Error("Bad float size " + t22);
  return t22 === 4 ? Jo(e22) : Zo(e22);
}, Vr = async (e22, t22, i2, r2) => {
  let a2 = new Set(i2), s2 = t22;
  for (; r2 === null || s2 < r2; ) {
    let t3 = e22.requestSliceRange(s2, 2, Fr);
    if (t3 instanceof Promise && (t3 = await t3), !t3) break;
    let i3 = Lr(t3);
    if (!i3) break;
    if (a2.has(i3.id)) return { pos: s2, found: !0 };
    jr(i3.size), s2 = t3.filePos + i3.size;
  }
  return { pos: r2 !== null && r2 > s2 ? r2 : s2, found: !1 };
}, Hr = async (e22, t22, i2, r2) => {
  let a2 = new Set(i2), s2 = t22;
  for (; s2 < r2; ) {
    let t3 = e22.requestSliceRange(s2, 0, Math.min(65536, r2 - s2));
    if (t3 instanceof Promise && (t3 = await t3), !t3 || t3.length < 8) break;
    for (let e3 = 0; e3 < t3.length - 8; e3++) {
      t3.filePos = s2;
      let e4 = Nr(t3);
      if (e4 !== null && a2.has(e4)) return s2;
      s2++;
    }
  }
  return null;
}, $r = { avc: "V_MPEG4/ISO/AVC", hevc: "V_MPEGH/ISO/HEVC", vp8: "V_VP8", vp9: "V_VP9", av1: "V_AV1", prores: "V_PRORES", aac: "A_AAC", mp3: "A_MPEG/L3", opus: "A_OPUS", vorbis: "A_VORBIS", flac: "A_FLAC", ac3: "A_AC3", eac3: "A_EAC3", dts: "A_DTS", "pcm-u8": "A_PCM/INT/LIT", "pcm-s16": "A_PCM/INT/LIT", "pcm-s16be": "A_PCM/INT/BIG", "pcm-s24": "A_PCM/INT/LIT", "pcm-s24be": "A_PCM/INT/BIG", "pcm-s32": "A_PCM/INT/LIT", "pcm-s32be": "A_PCM/INT/BIG", "pcm-f32": "A_PCM/FLOAT/IEEE", "pcm-f64": "A_PCM/FLOAT/IEEE", webvtt: "S_TEXT/WEBVTT" };
function jr(e22) {
  if (e22 === void 0) throw new Error("Undefined element size is used in a place where it is not supported.");
}
var Kr = (e22) => {
  let t22 = (e22.hasVideo ? "video/" : e22.hasAudio ? "audio/" : "application/") + (e22.isWebM ? "webm" : "x-matroska");
  return e22.codecStrings.length > 0 && (t22 += `; codecs="${[...new Set(e22.codecStrings.filter(Boolean))].join(", ")}"`), t22;
};
var Qr, Gr, Xr, Yr, Jr, Zr;
(Gr = Qr || (Qr = {}))[Gr.None = 0] = "None", Gr[Gr.Xiph = 1] = "Xiph", Gr[Gr.FixedSize = 2] = "FixedSize", Gr[Gr.Ebml = 3] = "Ebml", (Yr = Xr || (Xr = {}))[Yr.Block = 1] = "Block", Yr[Yr.Private = 2] = "Private", Yr[Yr.Next = 4] = "Next", (Zr = Jr || (Jr = {}))[Zr.Zlib = 0] = "Zlib", Zr[Zr.Bzlib = 1] = "Bzlib", Zr[Zr.lzo1x = 2] = "lzo1x", Zr[Zr.HeaderStripping = 3] = "HeaderStripping";
var ea = [{ id: Pr.SeekHead, flag: "seekHeadSeen" }, { id: Pr.Info, flag: "infoSeen" }, { id: Pr.Tracks, flag: "tracksSeen" }, { id: Pr.Cues, flag: "cuesSeen" }], ta = 10485760, ia = class extends Ri {
  constructor(e22) {
    super(e22), this.readMetadataPromise = null, this.segments = [], this.currentSegment = null, this.currentTrack = null, this.currentCluster = null, this.currentBlock = null, this.currentBlockAdditional = null, this.currentCueTime = null, this.currentDecodingInstruction = null, this.currentTagTargetIsMovie = !0, this.currentSimpleTagName = null, this.currentAttachedFile = null, this.isWebM = !1, this.reader = e22._reader;
  }
  async getTrackBackings() {
    return await this.readMetadata(), this.segments.flatMap((e22) => e22.tracks.map((e3) => e3.trackBacking));
  }
  async getMimeType() {
    await this.readMetadata();
    let e22 = await this.getTrackBackings(), t22 = await Promise.all(e22.map((e3) => e3.getDecoderConfig().then((e4) => e4?.codec ?? null)));
    return Kr({ isWebM: this.isWebM, hasVideo: this.segments.some((e3) => e3.tracks.some((e4) => {
      var t3;
      return ((t3 = e4.info) == null ? void 0 : t3.type) === "video";
    })), hasAudio: this.segments.some((e3) => e3.tracks.some((e4) => {
      var t3;
      return ((t3 = e4.info) == null ? void 0 : t3.type) === "audio";
    })), codecStrings: t22.filter(Boolean) });
  }
  async getMetadataTags() {
    await this.readMetadata();
    for (let t22 of this.segments) t22.metadataTagsCollected || (this.reader.fileSize !== null && await this.loadSegmentMetadata(t22), t22.metadataTagsCollected = !0);
    let e22 = {};
    for (let t22 of this.segments) e22 = { ...e22, ...t22.metadataTags };
    return e22;
  }
  readMetadata() {
    return this.readMetadataPromise ?? (this.readMetadataPromise = (async () => {
      let e22 = 0;
      for (; ; ) {
        let t22 = this.reader.requestSliceRange(e22, 2, Fr);
        if (t22 instanceof Promise && (t22 = await t22), !t22) break;
        let i2 = Lr(t22);
        if (!i2) break;
        let r2 = i2.id, a2 = i2.size, s2 = t22.filePos;
        if (r2 === Pr.EBML) {
          jr(a2);
          let e3 = this.reader.requestSlice(s2, a2);
          if (e3 instanceof Promise && (e3 = await e3), !e3) break;
          this.readContiguousElements(e3);
        } else if (r2 === Pr.Segment) {
          if (await this.readSegment(s2, a2), a2 === void 0 || this.reader.fileSize === null) break;
        } else if (r2 === Pr.Cluster) {
          if (this.reader.fileSize === null) break;
          a2 === void 0 && (a2 = (await Vr(this.reader, s2, Ir, this.reader.fileSize)).pos - s2);
          let e3 = l2(this.segments);
          e3 && (e3.elementEndPos = s2 + a2);
        }
        jr(a2), e22 = s2 + a2;
      }
    })());
  }
  async readSegment(e22, t22) {
    this.currentSegment = { seekHeadSeen: !1, infoSeen: !1, tracksSeen: !1, cuesSeen: !1, tagsSeen: !1, attachmentsSeen: !1, timestampScale: -1, timestampFactor: -1, duration: -1, seekEntries: [], tracks: [], cuePoints: [], dataStartPos: e22, elementEndPos: t22 === void 0 ? null : e22 + t22, clusterSeekStartPos: e22, lastReadCluster: null, metadataTags: {}, metadataTagsCollected: !1 }, this.segments.push(this.currentSegment);
    let i2 = e22;
    for (; this.currentSegment.elementEndPos === null || i2 < this.currentSegment.elementEndPos; ) {
      let e3 = this.reader.requestSliceRange(i2, 2, Fr);
      if (e3 instanceof Promise && (e3 = await e3), !e3) break;
      let t3 = i2, r3 = Lr(e3);
      if (!r3 || !Er.includes(r3.id) && r3.id !== Pr.Void) {
        let e4 = await Hr(this.reader, t3, Er, Math.min(this.currentSegment.elementEndPos ?? 1 / 0, t3 + ta));
        if (e4) {
          i2 = e4;
          continue;
        }
        break;
      }
      let { id: a3, size: s3 } = r3, n2 = e3.filePos, o22 = ea.findIndex((e4) => e4.id === a3);
      if (o22 !== -1) {
        let e4 = ea[o22].flag;
        this.currentSegment[e4] = !0, jr(s3);
        let t4 = this.reader.requestSlice(n2, s3);
        t4 instanceof Promise && (t4 = await t4), t4 && this.readContiguousElements(t4);
      } else if (a3 === Pr.Tags || a3 === Pr.Attachments) {
        a3 === Pr.Tags ? this.currentSegment.tagsSeen = !0 : this.currentSegment.attachmentsSeen = !0, jr(s3);
        let e4 = this.reader.requestSlice(n2, s3);
        e4 instanceof Promise && (e4 = await e4), e4 && this.readContiguousElements(e4);
      } else if (a3 === Pr.Cluster) {
        this.currentSegment.clusterSeekStartPos = t3;
        break;
      }
      if (s3 === void 0) break;
      i2 = n2 + s3;
    }
    if (this.currentSegment.seekEntries.sort((e3, t3) => e3.segmentPosition - t3.segmentPosition), this.reader.fileSize !== null) for (let n2 of this.currentSegment.seekEntries) {
      let t3 = ea.find((e3) => e3.id === n2.id);
      if (!t3 || this.currentSegment[t3.flag]) continue;
      let i3 = this.reader.requestSliceRange(e22 + n2.segmentPosition, 2, Fr);
      if (i3 instanceof Promise && (i3 = await i3), !i3) continue;
      let r3 = Lr(i3);
      if (!r3) continue;
      let { id: a3, size: s3 } = r3;
      if (a3 !== t3.id) continue;
      jr(s3), this.currentSegment[t3.flag] = !0;
      let o22 = this.reader.requestSlice(i3.filePos, s3);
      o22 instanceof Promise && (o22 = await o22), o22 && this.readContiguousElements(o22);
    }
    this.currentSegment.timestampScale === -1 && (this.currentSegment.timestampScale = 1e6, this.currentSegment.timestampFactor = 1e3);
    for (let n2 of this.currentSegment.tracks) n2.defaultDurationNs !== null && (n2.defaultDuration = this.currentSegment.timestampFactor * n2.defaultDurationNs / 1e9);
    let r2 = new Map(this.currentSegment.tracks.map((e3) => [e3.id, e3]));
    for (let n2 of this.currentSegment.cuePoints) {
      let e3 = r2.get(n2.trackId);
      e3 && e3.cuePoints.push(n2);
    }
    for (let n2 of this.currentSegment.tracks) {
      n2.cuePoints.sort((e3, t3) => e3.time - t3.time);
      for (let e3 = 0; e3 < n2.cuePoints.length - 1; e3++) {
        let t3 = n2.cuePoints[e3], i3 = n2.cuePoints[e3 + 1];
        t3.time === i3.time && (n2.cuePoints.splice(e3 + 1, 1), e3--);
      }
    }
    let a2 = null, s2 = -1 / 0;
    for (let n2 of this.currentSegment.tracks) n2.cuePoints.length > s2 && (s2 = n2.cuePoints.length, a2 = n2);
    for (let n2 of this.currentSegment.tracks) n2.cuePoints.length === 0 && (n2.cuePoints = a2.cuePoints);
    this.currentSegment = null;
  }
  async readCluster(e22, t22) {
    var i2;
    if (((i2 = t22.lastReadCluster) == null ? void 0 : i2.elementStartPos) === e22) return t22.lastReadCluster;
    let r2 = this.reader.requestSliceRange(e22, 2, Fr);
    r2 instanceof Promise && (r2 = await r2), o2(r2);
    let a2 = e22, s2 = Lr(r2);
    o2(s2), o2(s2.id === Pr.Cluster);
    let n2 = s2.size, c22 = r2.filePos;
    n2 === void 0 && (n2 = (await Vr(this.reader, c22, Ir, t22.elementEndPos)).pos - c22);
    let d22 = this.reader.requestSlice(c22, n2);
    d22 instanceof Promise && (d22 = await d22);
    let u2 = { segment: t22, elementStartPos: a2, elementEndPos: c22 + n2, dataStartPos: c22, timestamp: -1, trackData: /* @__PURE__ */ new Map() };
    if (this.currentCluster = u2, d22) {
      let e3 = this.readContiguousElements(d22, Ir);
      u2.elementEndPos = e3;
    }
    for (let [, h22] of u2.trackData) {
      let e3 = h22.track;
      o2(h22.blocks.length > 0);
      let t3 = !1;
      for (let a3 = 0; a3 < h22.blocks.length; a3++) {
        let e4 = h22.blocks[a3];
        e4.timestamp += u2.timestamp, t3 || (t3 = e4.lacing !== Qr.None);
      }
      h22.presentationTimestamps = h22.blocks.map((e4, t4) => ({ timestamp: e4.timestamp, blockIndex: t4 })).sort((e4, t4) => e4.timestamp - t4.timestamp);
      for (let a3 = 0; a3 < h22.presentationTimestamps.length; a3++) {
        let t4 = h22.presentationTimestamps[a3], i4 = h22.blocks[t4.blockIndex];
        if (h22.firstKeyFrameTimestamp === null && i4.isKeyFrame && (h22.firstKeyFrameTimestamp = i4.timestamp), a3 < h22.presentationTimestamps.length - 1) {
          let e4 = h22.presentationTimestamps[a3 + 1];
          i4.duration = e4.timestamp - i4.timestamp;
        } else i4.duration === 0 && e3.defaultDuration != null && i4.lacing === Qr.None && (i4.duration = e3.defaultDuration);
      }
      t3 && (this.expandLacedBlocks(h22.blocks, e3), h22.presentationTimestamps = h22.blocks.map((e4, t4) => ({ timestamp: e4.timestamp, blockIndex: t4 })).sort((e4, t4) => e4.timestamp - t4.timestamp));
      let i3 = h22.blocks[h22.presentationTimestamps[0].blockIndex], r3 = h22.blocks[l2(h22.presentationTimestamps).blockIndex];
      h22.startTimestamp = i3.timestamp, h22.endTimestamp = r3.timestamp + r3.duration;
      let s3 = A(e3.clusterPositionCache, h22.startTimestamp, (e4) => e4.startTimestamp);
      s3 !== -1 && e3.clusterPositionCache[s3].elementStartPos === a2 || e3.clusterPositionCache.splice(s3 + 1, 0, { elementStartPos: u2.elementStartPos, startTimestamp: h22.startTimestamp });
    }
    return t22.lastReadCluster = u2, u2;
  }
  getTrackDataInCluster(e22, t22) {
    let i2 = e22.trackData.get(t22);
    if (!i2) {
      let r2 = e22.segment.tracks.find((e3) => e3.id === t22);
      if (!r2) return null;
      i2 = { track: r2, startTimestamp: 0, endTimestamp: 0, firstKeyFrameTimestamp: null, blocks: [], presentationTimestamps: [] }, e22.trackData.set(t22, i2);
    }
    return i2;
  }
  expandLacedBlocks(e22, t22) {
    for (let i2 = 0; i2 < e22.length; i2++) {
      let r2 = e22[i2];
      if (r2.lacing === Qr.None) continue;
      r2.decoded || (r2.data = this.decodeBlockData(t22, r2.data), r2.decoded = !0);
      let a2 = Oo.tempFromBytes(r2.data), s2 = [], n2 = Lo(a2) + 1;
      switch (r2.lacing) {
        case Qr.Xiph:
          {
            let e3 = 0;
            for (let t3 = 0; t3 < n2 - 1; t3++) {
              let t4 = 0;
              for (; a2.bufferPos < a2.length; ) {
                let i3 = Lo(a2);
                if (t4 += i3, i3 < 255) {
                  s2.push(t4), e3 += t4;
                  break;
                }
              }
            }
            s2.push(a2.length - (a2.bufferPos + e3));
          }
          break;
        case Qr.FixedSize:
          {
            let e3 = a2.length - 1, t3 = Math.floor(e3 / n2);
            for (let i3 = 0; i3 < n2; i3++) s2.push(t3);
          }
          break;
        case Qr.Ebml:
          {
            let e3 = Dr(a2);
            o2(e3 !== null);
            let t3 = e3;
            s2.push(t3);
            let i3 = t3;
            for (let r3 = 1; r3 < n2 - 1; r3++) {
              let e4 = a2.bufferPos, r4 = Dr(a2);
              o2(r4 !== null), t3 += r4 - ((1 << 7 * (a2.bufferPos - e4) - 1) - 1), s2.push(t3), i3 += t3;
            }
            s2.push(a2.length - (a2.bufferPos + i3));
          }
          break;
        default:
          o2(!1);
      }
      o2(s2.length === n2), e22.splice(i2, 1);
      let c22 = r2.duration || n2 * (t22.defaultDuration ?? 0);
      for (let t3 = 0; t3 < n2; t3++) {
        let o22 = s2[t3], l22 = zo(a2, o22), d22 = r2.timestamp + c22 * t3 / n2, u2 = c22 / n2;
        e22.splice(i2 + t3, 0, { timestamp: d22, duration: u2, isKeyFrame: r2.isKeyFrame, data: l22, lacing: Qr.None, decoded: !0, postProcessed: !1, mainAdditional: r2.mainAdditional });
      }
      i2 += n2, i2--;
    }
  }
  async loadSegmentMetadata(e22) {
    for (let t22 of e22.seekEntries) {
      if ((t22.id !== Pr.Tags || e22.tagsSeen) && (t22.id !== Pr.Attachments || e22.attachmentsSeen))
        continue;
      let i2 = this.reader.requestSliceRange(e22.dataStartPos + t22.segmentPosition, 2, Fr);
      if (i2 instanceof Promise && (i2 = await i2), !i2) continue;
      let r2 = Lr(i2);
      if (!r2 || r2.id !== t22.id) continue;
      let { size: a2 } = r2;
      jr(a2), o2(!this.currentSegment), this.currentSegment = e22;
      let s2 = this.reader.requestSlice(i2.filePos, a2);
      s2 instanceof Promise && (s2 = await s2), s2 && this.readContiguousElements(s2), this.currentSegment = null, t22.id === Pr.Tags ? e22.tagsSeen = !0 : t22.id === Pr.Attachments && (e22.attachmentsSeen = !0);
    }
  }
  readContiguousElements(e22, t22) {
    for (; e22.remainingLength >= 2; ) {
      let i2 = e22.filePos;
      if (!this.traverseElement(e22, t22)) return i2;
    }
    return e22.filePos;
  }
  traverseElement(e22, t22) {
    var i2, r2, a2, s2, n2, l22, d22, u2, h22, m2, f22, g2, k2, w2, y2, T22, P2, C2, x2, E22, I22, _2, B2, A2, M2, F22, R22, D22, O22, N2, z2, L22, U2, q2, V2, H2, $2, j2, K2, Q2, X2, Y2, J2, Z2, ee2, te2;
    let ie2 = Lr(e22);
    if (!ie2 || t22 && t22.includes(ie2.id)) return !1;
    let { id: re22, size: ae2 } = ie2, se2 = e22.filePos;
    switch (jr(ae2), re22) {
      case Pr.DocType:
        this.isWebM = Ur(e22, ae2) === "webm";
        break;
      case Pr.Seek:
        {
          if (!this.currentSegment) break;
          let t3 = { id: -1, segmentPosition: -1 };
          this.currentSegment.seekEntries.push(t3), this.readContiguousElements(e22.slice(se2, ae2)), t3.id !== -1 && t3.segmentPosition !== -1 || this.currentSegment.seekEntries.pop();
        }
        break;
      case Pr.SeekID:
        {
          let t3 = (i2 = this.currentSegment) == null ? void 0 : i2.seekEntries[this.currentSegment.seekEntries.length - 1];
          if (!t3) break;
          t3.id = Or(e22, ae2);
        }
        break;
      case Pr.SeekPosition:
        {
          let t3 = (r2 = this.currentSegment) == null ? void 0 : r2.seekEntries[this.currentSegment.seekEntries.length - 1];
          if (!t3) break;
          t3.segmentPosition = Or(e22, ae2);
        }
        break;
      case Pr.TimestampScale:
        if (!this.currentSegment) break;
        this.currentSegment.timestampScale = Or(e22, ae2), this.currentSegment.timestampFactor = 1e9 / this.currentSegment.timestampScale;
        break;
      case Pr.Duration:
        if (!this.currentSegment) break;
        this.currentSegment.duration = qr(e22, ae2);
        break;
      case Pr.TrackEntry:
        if (!this.currentSegment || (this.currentTrack = { id: -1, segment: this.currentSegment, demuxer: this, clusterPositionCache: [], cuePoints: [], disposition: { ...Ae, primary: !1 }, trackBacking: null, codecId: null, codecPrivate: null, defaultDuration: null, defaultDurationNs: null, name: null, languageCode: "eng", hasLanguageBcp47: !1, decodingInstructions: [], info: null }, this.readContiguousElements(e22.slice(se2, ae2)), !this.currentTrack)) break;
        if (this.currentTrack.decodingInstructions.some((e3) => {
          var t3;
          return ((t3 = e3.data) == null ? void 0 : t3.type) !== "decompress" || e3.scope !== Xr.Block || e3.data.algorithm !== Jr.HeaderStripping;
        }) && (Ee._warn(`Track #${this.currentTrack.id} has an unsupported content encoding; dropping.`), this.currentTrack = null), this.currentTrack && this.currentTrack.id !== -1 && this.currentTrack.codecId && this.currentTrack.info) {
          let e3 = this.currentTrack.codecId.indexOf("/"), t3 = e3 === -1 ? this.currentTrack.codecId : this.currentTrack.codecId.slice(0, e3);
          if (this.currentTrack.info.type === "video" && this.currentTrack.info.width !== -1 && this.currentTrack.info.height !== -1) {
            if (this.currentTrack.info.squarePixelWidth = this.currentTrack.info.width, this.currentTrack.info.squarePixelHeight = this.currentTrack.info.height, this.currentTrack.info.displayWidth !== null && this.currentTrack.info.displayHeight !== null) {
              let e5 = this.currentTrack.info.displayWidth * this.currentTrack.info.height, t4 = this.currentTrack.info.displayHeight * this.currentTrack.info.width;
              e5 > 0 && t4 > 0 && (e5 > t4 ? this.currentTrack.info.squarePixelWidth = Math.round(this.currentTrack.info.width * e5 / t4) : this.currentTrack.info.squarePixelHeight = Math.round(this.currentTrack.info.height * t4 / e5));
            }
            if (this.currentTrack.codecId === $r.avc) this.currentTrack.info.codec = "avc", this.currentTrack.info.codecDescription = this.currentTrack.codecPrivate;
            else if (this.currentTrack.codecId === $r.hevc) this.currentTrack.info.codec = "hevc", this.currentTrack.info.codecDescription = this.currentTrack.codecPrivate;
            else if (t3 === $r.vp8) this.currentTrack.info.codec = "vp8";
            else if (t3 === $r.vp9) this.currentTrack.info.codec = "vp9";
            else if (t3 === $r.av1) this.currentTrack.info.codec = "av1";
            else if (t3 === $r.prores) {
              let e5 = this.currentTrack.codecPrivate ? p2.decode(this.currentTrack.codecPrivate) : "";
              Qe.includes(e5) && (this.currentTrack.info.codec = "prores", this.currentTrack.info.proresFormat = e5);
            }
            let e4 = this.currentTrack;
            this.currentTrack.trackBacking = new aa(e4), this.currentSegment.tracks.push(this.currentTrack);
          } else if (this.currentTrack.info.type === "audio") {
            t3 === $r.aac ? (this.currentTrack.info.codec = "aac", this.currentTrack.info.aacCodecInfo = { isMpeg2: this.currentTrack.codecId.includes("MPEG2"), objectType: null }, this.currentTrack.info.codecDescription = this.currentTrack.codecPrivate) : this.currentTrack.codecId === $r.mp3 ? this.currentTrack.info.codec = "mp3" : t3 === $r.opus ? (this.currentTrack.info.codec = "opus", this.currentTrack.info.codecDescription = this.currentTrack.codecPrivate, this.currentTrack.info.sampleRate = it) : t3 === $r.vorbis ? (this.currentTrack.info.codec = "vorbis", this.currentTrack.info.codecDescription = this.currentTrack.codecPrivate) : t3 === $r.flac ? (this.currentTrack.info.codec = "flac", this.currentTrack.info.codecDescription = this.currentTrack.codecPrivate) : t3 === $r.ac3 ? (this.currentTrack.info.codec = "ac3", this.currentTrack.info.codecDescription = this.currentTrack.codecPrivate) : t3 === $r.eac3 ? (this.currentTrack.info.codec = "eac3", this.currentTrack.info.codecDescription = this.currentTrack.codecPrivate) : t3 === $r.dts ? (this.currentTrack.info.codec = "dts", this.currentTrack.codecId === "A_DTS/EXPRESS" ? this.currentTrack.info.dtsFormat = "dtse" : this.currentTrack.codecId === "A_DTS/LOSSLESS" && (this.currentTrack.info.dtsFormat = "dtsl")) : this.currentTrack.codecId === "A_PCM/INT/LIT" ? this.currentTrack.info.bitDepth === 8 ? this.currentTrack.info.codec = "pcm-u8" : this.currentTrack.info.bitDepth === 16 ? this.currentTrack.info.codec = "pcm-s16" : this.currentTrack.info.bitDepth === 24 ? this.currentTrack.info.codec = "pcm-s24" : this.currentTrack.info.bitDepth === 32 && (this.currentTrack.info.codec = "pcm-s32") : this.currentTrack.codecId === "A_PCM/INT/BIG" ? this.currentTrack.info.bitDepth === 8 ? this.currentTrack.info.codec = "pcm-u8" : this.currentTrack.info.bitDepth === 16 ? this.currentTrack.info.codec = "pcm-s16be" : this.currentTrack.info.bitDepth === 24 ? this.currentTrack.info.codec = "pcm-s24be" : this.currentTrack.info.bitDepth === 32 && (this.currentTrack.info.codec = "pcm-s32be") : this.currentTrack.codecId === "A_PCM/FLOAT/IEEE" && (this.currentTrack.info.bitDepth === 32 ? this.currentTrack.info.codec = "pcm-f32" : this.currentTrack.info.bitDepth === 64 && (this.currentTrack.info.codec = "pcm-f64"));
            let e4 = this.currentTrack;
            this.currentTrack.trackBacking = new sa(e4), this.currentSegment.tracks.push(this.currentTrack);
          }
        }
        this.currentTrack = null;
        break;
      case Pr.TrackNumber:
        if (!this.currentTrack) break;
        this.currentTrack.id = Or(e22, ae2);
        break;
      case Pr.TrackType:
        {
          if (!this.currentTrack) break;
          let t3 = Or(e22, ae2);
          t3 === 1 ? this.currentTrack.info = { type: "video", width: -1, height: -1, displayWidth: null, displayHeight: null, displayUnit: null, squarePixelWidth: -1, squarePixelHeight: -1, rotation: 0, codec: null, codecDescription: null, colorSpace: null, alphaMode: !1, proresFormat: null } : t3 === 2 && (this.currentTrack.info = { type: "audio", numberOfChannels: 1, sampleRate: 8e3, bitDepth: -1, codec: null, codecDescription: null, aacCodecInfo: null, dtsFormat: null });
        }
        break;
      case Pr.FlagEnabled:
        if (!this.currentTrack) break;
        Or(e22, ae2) || (this.currentTrack = null);
        break;
      case Pr.FlagDefault:
        if (!this.currentTrack) break;
        this.currentTrack.disposition.default = !!Or(e22, ae2);
        break;
      case Pr.FlagForced:
        if (!this.currentTrack) break;
        this.currentTrack.disposition.forced = !!Or(e22, ae2);
        break;
      case Pr.FlagOriginal:
        if (!this.currentTrack) break;
        this.currentTrack.disposition.original = !!Or(e22, ae2);
        break;
      case Pr.FlagHearingImpaired:
        if (!this.currentTrack) break;
        this.currentTrack.disposition.hearingImpaired = !!Or(e22, ae2);
        break;
      case Pr.FlagVisualImpaired:
        if (!this.currentTrack) break;
        this.currentTrack.disposition.visuallyImpaired = !!Or(e22, ae2);
        break;
      case Pr.FlagCommentary:
        if (!this.currentTrack) break;
        this.currentTrack.disposition.commentary = !!Or(e22, ae2);
        break;
      case Pr.CodecID:
        if (!this.currentTrack) break;
        this.currentTrack.codecId = Ur(e22, ae2);
        break;
      case Pr.CodecPrivate:
        if (!this.currentTrack) break;
        this.currentTrack.codecPrivate = zo(e22, ae2);
        break;
      case Pr.DefaultDuration:
        if (!this.currentTrack) break;
        this.currentTrack.defaultDurationNs = Or(e22, ae2);
        break;
      case Pr.Name:
        if (!this.currentTrack) break;
        this.currentTrack.name = Wr(e22, ae2);
        break;
      case Pr.Language:
        if (!this.currentTrack || this.currentTrack.hasLanguageBcp47) break;
        this.currentTrack.languageCode = Ur(e22, ae2), G(this.currentTrack.languageCode) || (this.currentTrack.languageCode = W);
        break;
      case Pr.LanguageBCP47:
        {
          if (!this.currentTrack) break;
          let t3 = Ur(e22, ae2).split("-")[0];
          this.currentTrack.languageCode = t3 || W, this.currentTrack.hasLanguageBcp47 = !0;
        }
        break;
      case Pr.Video:
        if (((s2 = (a2 = this.currentTrack) == null ? void 0 : a2.info) == null ? void 0 : s2.type) !== "video") break;
        this.readContiguousElements(e22.slice(se2, ae2));
        break;
      case Pr.PixelWidth:
        if (((l22 = (n2 = this.currentTrack) == null ? void 0 : n2.info) == null ? void 0 : l22.type) !== "video") break;
        this.currentTrack.info.width = Or(e22, ae2);
        break;
      case Pr.PixelHeight:
        if (((u2 = (d22 = this.currentTrack) == null ? void 0 : d22.info) == null ? void 0 : u2.type) !== "video") break;
        this.currentTrack.info.height = Or(e22, ae2);
        break;
      case Pr.DisplayWidth:
        if (((m2 = (h22 = this.currentTrack) == null ? void 0 : h22.info) == null ? void 0 : m2.type) !== "video") break;
        this.currentTrack.info.displayWidth = Or(e22, ae2);
        break;
      case Pr.DisplayHeight:
        if (((g2 = (f22 = this.currentTrack) == null ? void 0 : f22.info) == null ? void 0 : g2.type) !== "video") break;
        this.currentTrack.info.displayHeight = Or(e22, ae2);
        break;
      case Pr.DisplayUnit:
        if (((w2 = (k2 = this.currentTrack) == null ? void 0 : k2.info) == null ? void 0 : w2.type) !== "video") break;
        this.currentTrack.info.displayUnit = Or(e22, ae2);
        break;
      case Pr.AlphaMode:
        if (((T22 = (y2 = this.currentTrack) == null ? void 0 : y2.info) == null ? void 0 : T22.type) !== "video") break;
        this.currentTrack.info.alphaMode = Or(e22, ae2) === 1;
        break;
      case Pr.Colour:
        if (((C2 = (P2 = this.currentTrack) == null ? void 0 : P2.info) == null ? void 0 : C2.type) !== "video") break;
        this.currentTrack.info.colorSpace = {}, this.readContiguousElements(e22.slice(se2, ae2));
        break;
      case Pr.MatrixCoefficients:
        {
          if (((E22 = (x2 = this.currentTrack) == null ? void 0 : x2.info) == null ? void 0 : E22.type) !== "video" || !this.currentTrack.info.colorSpace) break;
          let t3 = Or(e22, ae2), i3 = S[t3] ?? null;
          this.currentTrack.info.colorSpace.matrix = i3;
        }
        break;
      case Pr.Range:
        if (((_2 = (I22 = this.currentTrack) == null ? void 0 : I22.info) == null ? void 0 : _2.type) !== "video" || !this.currentTrack.info.colorSpace) break;
        this.currentTrack.info.colorSpace.fullRange = Or(e22, ae2) === 2;
        break;
      case Pr.TransferCharacteristics:
        {
          if (((A2 = (B2 = this.currentTrack) == null ? void 0 : B2.info) == null ? void 0 : A2.type) !== "video" || !this.currentTrack.info.colorSpace) break;
          let t3 = Or(e22, ae2), i3 = v[t3] ?? null;
          this.currentTrack.info.colorSpace.transfer = i3;
        }
        break;
      case Pr.Primaries:
        {
          if (((F22 = (M2 = this.currentTrack) == null ? void 0 : M2.info) == null ? void 0 : F22.type) !== "video" || !this.currentTrack.info.colorSpace) break;
          let t3 = Or(e22, ae2), i3 = b[t3] ?? null;
          this.currentTrack.info.colorSpace.primaries = i3;
        }
        break;
      case Pr.Projection:
        if (((D22 = (R22 = this.currentTrack) == null ? void 0 : R22.info) == null ? void 0 : D22.type) !== "video") break;
        this.readContiguousElements(e22.slice(se2, ae2));
        break;
      case Pr.ProjectionPoseRoll:
        {
          if (((N2 = (O22 = this.currentTrack) == null ? void 0 : O22.info) == null ? void 0 : N2.type) !== "video") break;
          let t3 = -qr(e22, ae2);
          try {
            this.currentTrack.info.rotation = c2(t3);
          } catch {
          }
        }
        break;
      case Pr.Audio:
        if (((L22 = (z2 = this.currentTrack) == null ? void 0 : z2.info) == null ? void 0 : L22.type) !== "audio") break;
        this.readContiguousElements(e22.slice(se2, ae2));
        break;
      case Pr.SamplingFrequency:
        if (((q2 = (U2 = this.currentTrack) == null ? void 0 : U2.info) == null ? void 0 : q2.type) !== "audio") break;
        this.currentTrack.info.sampleRate = qr(e22, ae2);
        break;
      case Pr.Channels:
        if (((H2 = (V2 = this.currentTrack) == null ? void 0 : V2.info) == null ? void 0 : H2.type) !== "audio") break;
        this.currentTrack.info.numberOfChannels = Or(e22, ae2);
        break;
      case Pr.BitDepth:
        if (((j2 = ($2 = this.currentTrack) == null ? void 0 : $2.info) == null ? void 0 : j2.type) !== "audio") break;
        this.currentTrack.info.bitDepth = Or(e22, ae2);
        break;
      case Pr.CuePoint:
        if (!this.currentSegment) break;
        this.readContiguousElements(e22.slice(se2, ae2)), this.currentCueTime = null;
        break;
      case Pr.CueTime:
        this.currentCueTime = Or(e22, ae2);
        break;
      case Pr.CueTrackPositions:
        {
          if (this.currentCueTime === null) break;
          o2(this.currentSegment);
          let t3 = { time: this.currentCueTime, trackId: -1, clusterPosition: -1 };
          this.currentSegment.cuePoints.push(t3), this.readContiguousElements(e22.slice(se2, ae2)), t3.trackId !== -1 && t3.clusterPosition !== -1 || this.currentSegment.cuePoints.pop();
        }
        break;
      case Pr.CueTrack:
        {
          let t3 = (K2 = this.currentSegment) == null ? void 0 : K2.cuePoints[this.currentSegment.cuePoints.length - 1];
          if (!t3) break;
          t3.trackId = Or(e22, ae2);
        }
        break;
      case Pr.CueClusterPosition:
        {
          let t3 = (Q2 = this.currentSegment) == null ? void 0 : Q2.cuePoints[this.currentSegment.cuePoints.length - 1];
          if (!t3) break;
          o2(this.currentSegment), t3.clusterPosition = this.currentSegment.dataStartPos + Or(e22, ae2);
        }
        break;
      case Pr.Timestamp:
        if (!this.currentCluster) break;
        this.currentCluster.timestamp = Or(e22, ae2);
        break;
      case Pr.SimpleBlock:
        {
          if (!this.currentCluster) break;
          let t3 = Dr(e22);
          if (t3 === null) break;
          let i3 = this.getTrackDataInCluster(this.currentCluster, t3);
          if (!i3) break;
          let r3 = Vo(e22), a3 = Lo(e22), s3 = a3 >> 1 & 3, n3 = !!(128 & a3);
          ((X2 = i3.track.info) == null ? void 0 : X2.type) === "audio" && i3.track.info.codec && (n3 = !0);
          let o22 = zo(e22, ae2 - (e22.filePos - se2)), c22 = i3.track.decodingInstructions.length > 0;
          i3.blocks.push({ timestamp: r3, duration: 0, isKeyFrame: n3, data: o22, lacing: s3, decoded: !c22, postProcessed: !1, mainAdditional: null });
        }
        break;
      case Pr.BlockGroup:
        if (!this.currentCluster) break;
        this.readContiguousElements(e22.slice(se2, ae2)), this.currentBlock = null;
        break;
      case Pr.Block:
        {
          if (!this.currentCluster) break;
          let t3 = Dr(e22);
          if (t3 === null) break;
          let i3 = this.getTrackDataInCluster(this.currentCluster, t3);
          if (!i3) break;
          let r3 = Vo(e22), a3 = Lo(e22) >> 1 & 3, s3 = zo(e22, ae2 - (e22.filePos - se2)), n3 = i3.track.decodingInstructions.length > 0;
          this.currentBlock = { timestamp: r3, duration: 0, isKeyFrame: !0, data: s3, lacing: a3, decoded: !n3, postProcessed: !1, mainAdditional: null }, i3.blocks.push(this.currentBlock);
        }
        break;
      case Pr.BlockAdditions:
        this.readContiguousElements(e22.slice(se2, ae2));
        break;
      case Pr.BlockMore:
        if (!this.currentBlock) break;
        this.currentBlockAdditional = { addId: 1, data: null }, this.readContiguousElements(e22.slice(se2, ae2)), this.currentBlockAdditional.data && this.currentBlockAdditional.addId === 1 && (this.currentBlock.mainAdditional = this.currentBlockAdditional.data), this.currentBlockAdditional = null;
        break;
      case Pr.BlockAdditional:
        if (!this.currentBlockAdditional) break;
        this.currentBlockAdditional.data = zo(e22, ae2);
        break;
      case Pr.BlockAddID:
        if (!this.currentBlockAdditional) break;
        this.currentBlockAdditional.addId = Or(e22, ae2);
        break;
      case Pr.BlockDuration:
        if (!this.currentBlock) break;
        this.currentBlock.duration = Or(e22, ae2);
        break;
      case Pr.ReferenceBlock:
        if (!this.currentBlock) break;
        this.currentBlock.isKeyFrame = !1;
        break;
      case Pr.Tag:
        this.currentTagTargetIsMovie = !0, this.readContiguousElements(e22.slice(se2, ae2));
        break;
      case Pr.Targets:
        this.readContiguousElements(e22.slice(se2, ae2));
        break;
      case Pr.TargetTypeValue:
        Or(e22, ae2) !== 50 && (this.currentTagTargetIsMovie = !1);
        break;
      case Pr.TagTrackUID:
      case Pr.TagEditionUID:
      case Pr.TagChapterUID:
      case Pr.TagAttachmentUID:
        this.currentTagTargetIsMovie = !1;
        break;
      case Pr.SimpleTag:
        if (!this.currentTagTargetIsMovie) break;
        this.currentSimpleTagName = null, this.readContiguousElements(e22.slice(se2, ae2));
        break;
      case Pr.TagName:
        this.currentSimpleTagName = Wr(e22, ae2);
        break;
      case Pr.TagString:
        {
          if (!this.currentSimpleTagName) break;
          let t3 = Wr(e22, ae2);
          this.processTagValue(this.currentSimpleTagName, t3);
        }
        break;
      case Pr.TagBinary:
        {
          if (!this.currentSimpleTagName) break;
          let t3 = zo(e22, ae2);
          this.processTagValue(this.currentSimpleTagName, t3);
        }
        break;
      case Pr.AttachedFile:
        {
          if (!this.currentSegment) break;
          this.currentAttachedFile = { fileUid: null, fileName: null, fileMediaType: null, fileData: null, fileDescription: null }, this.readContiguousElements(e22.slice(se2, ae2));
          let t3 = this.currentSegment.metadataTags;
          if (this.currentAttachedFile.fileUid && this.currentAttachedFile.fileData && (t3.raw ?? (t3.raw = {}), t3.raw[this.currentAttachedFile.fileUid.toString()] = new _e(this.currentAttachedFile.fileData, this.currentAttachedFile.fileMediaType ?? void 0, this.currentAttachedFile.fileName ?? void 0, this.currentAttachedFile.fileDescription ?? void 0)), ((Y2 = this.currentAttachedFile.fileMediaType) == null ? void 0 : Y2.startsWith("image/")) && this.currentAttachedFile.fileData) {
            let e3 = this.currentAttachedFile.fileName, i3 = "unknown";
            if (e3) {
              let t4 = e3.toLowerCase();
              t4.startsWith("cover.") ? i3 = "coverFront" : t4.startsWith("back.") && (i3 = "coverBack");
            }
            t3.images ?? (t3.images = []), t3.images.push({ data: this.currentAttachedFile.fileData, mimeType: this.currentAttachedFile.fileMediaType, kind: i3, name: this.currentAttachedFile.fileName ?? void 0, description: this.currentAttachedFile.fileDescription ?? void 0 });
          }
          this.currentAttachedFile = null;
        }
        break;
      case Pr.FileUID:
        if (!this.currentAttachedFile) break;
        this.currentAttachedFile.fileUid = ((e3, t3) => {
          if (t3 < 1) throw new Error("Bad unsigned int size " + t3);
          let i3 = 0n;
          for (let r3 = 0; r3 < t3; r3++) i3 <<= 8n, i3 += BigInt(Lo(e3));
          return i3;
        })(e22, ae2);
        break;
      case Pr.FileName:
        if (!this.currentAttachedFile) break;
        this.currentAttachedFile.fileName = Wr(e22, ae2);
        break;
      case Pr.FileMediaType:
        if (!this.currentAttachedFile) break;
        this.currentAttachedFile.fileMediaType = Ur(e22, ae2);
        break;
      case Pr.FileData:
        if (!this.currentAttachedFile) break;
        this.currentAttachedFile.fileData = zo(e22, ae2);
        break;
      case Pr.FileDescription:
        if (!this.currentAttachedFile) break;
        this.currentAttachedFile.fileDescription = Wr(e22, ae2);
        break;
      case Pr.ContentEncodings:
        if (!this.currentTrack) break;
        this.readContiguousElements(e22.slice(se2, ae2)), this.currentTrack.decodingInstructions.sort((e3, t3) => t3.order - e3.order);
        break;
      case Pr.ContentEncoding:
        this.currentDecodingInstruction = { order: 0, scope: Xr.Block, data: null }, this.readContiguousElements(e22.slice(se2, ae2)), this.currentDecodingInstruction.data && this.currentTrack.decodingInstructions.push(this.currentDecodingInstruction), this.currentDecodingInstruction = null;
        break;
      case Pr.ContentEncodingOrder:
        if (!this.currentDecodingInstruction) break;
        this.currentDecodingInstruction.order = Or(e22, ae2);
        break;
      case Pr.ContentEncodingScope:
        if (!this.currentDecodingInstruction) break;
        this.currentDecodingInstruction.scope = Or(e22, ae2);
        break;
      case Pr.ContentCompression:
        if (!this.currentDecodingInstruction) break;
        this.currentDecodingInstruction.data = { type: "decompress", algorithm: Jr.Zlib, settings: null }, this.readContiguousElements(e22.slice(se2, ae2));
        break;
      case Pr.ContentCompAlgo:
        if (((Z2 = (J2 = this.currentDecodingInstruction) == null ? void 0 : J2.data) == null ? void 0 : Z2.type) !== "decompress") break;
        this.currentDecodingInstruction.data.algorithm = Or(e22, ae2);
        break;
      case Pr.ContentCompSettings:
        if (((te2 = (ee2 = this.currentDecodingInstruction) == null ? void 0 : ee2.data) == null ? void 0 : te2.type) !== "decompress") break;
        this.currentDecodingInstruction.data.settings = zo(e22, ae2);
        break;
      case Pr.ContentEncryption:
        if (!this.currentDecodingInstruction) break;
        this.currentDecodingInstruction.data = { type: "decrypt" };
    }
    return e22.filePos = se2 + ae2, !0;
  }
  decodeBlockData(e22, t22) {
    o2(e22.decodingInstructions.length > 0);
    let i2 = t22;
    for (let r2 of e22.decodingInstructions) if (o2(r2.data), r2.data.type === "decompress" && r2.data.algorithm === Jr.HeaderStripping && r2.data.settings && r2.data.settings.length > 0) {
      let e3 = r2.data.settings, t3 = new Uint8Array(e3.length + i2.length);
      t3.set(e3, 0), t3.set(i2, e3.length), i2 = t3;
    }
    return i2;
  }
  processTagValue(e22, t22) {
    var i2, r2;
    if (!((i2 = this.currentSegment) != null && i2.metadataTags)) return;
    let a2 = this.currentSegment.metadataTags;
    if (a2.raw ?? (a2.raw = {}), (r2 = a2.raw)[e22] ?? (r2[e22] = t22), typeof t22 == "string") switch (e22.toLowerCase()) {
      case "title":
        a2.title ?? (a2.title = t22);
        break;
      case "description":
        a2.description ?? (a2.description = t22);
        break;
      case "artist":
        a2.artist ?? (a2.artist = t22);
        break;
      case "album":
        a2.album ?? (a2.album = t22);
        break;
      case "album_artist":
        a2.albumArtist ?? (a2.albumArtist = t22);
        break;
      case "genre":
        a2.genre ?? (a2.genre = t22);
        break;
      case "comment":
        a2.comment ?? (a2.comment = t22);
        break;
      case "lyrics":
        a2.lyrics ?? (a2.lyrics = t22);
        break;
      case "date":
        {
          let e3 = new Date(t22);
          Number.isNaN(e3.getTime()) || (a2.date ?? (a2.date = e3));
        }
        break;
      case "track_number":
      case "part_number":
        {
          let e3 = t22.split("/"), i3 = Number.parseInt(e3[0], 10), r3 = e3[1] && Number.parseInt(e3[1], 10);
          Number.isInteger(i3) && i3 > 0 && (a2.trackNumber ?? (a2.trackNumber = i3)), r3 && Number.isInteger(r3) && r3 > 0 && (a2.tracksTotal ?? (a2.tracksTotal = r3));
        }
        break;
      case "disc_number":
      case "disc": {
        let e3 = t22.split("/"), i3 = Number.parseInt(e3[0], 10), r3 = e3[1] && Number.parseInt(e3[1], 10);
        Number.isInteger(i3) && i3 > 0 && (a2.discNumber ?? (a2.discNumber = i3)), r3 && Number.isInteger(r3) && r3 > 0 && (a2.discsTotal ?? (a2.discsTotal = r3));
      }
    }
  }
}, ra = class {
  constructor(e22) {
    this.internalTrack = e22, this.packetToClusterLocation = /* @__PURE__ */ new WeakMap();
  }
  getId() {
    return this.internalTrack.id;
  }
  getNumber() {
    let e22 = this.internalTrack.demuxer, t22 = this.internalTrack.trackBacking.getType(), i2 = 0;
    for (let r2 of e22.segments) for (let e3 of r2.tracks) if (e3.trackBacking.getType() === t22 && i2++, e3 === this.internalTrack) break;
    return i2;
  }
  getCodec() {
    throw new Error("Not implemented on base class.");
  }
  getInternalCodecId() {
    return this.internalTrack.codecId;
  }
  getName() {
    return this.internalTrack.name;
  }
  getLanguageCode() {
    return this.internalTrack.languageCode;
  }
  getTimeResolution() {
    return this.internalTrack.segment.timestampFactor;
  }
  isRelativeToUnixEpoch() {
    return !1;
  }
  getUnixTimeForTimestamp() {
    return null;
  }
  getDisposition() {
    return this.internalTrack.disposition;
  }
  getPairingMask() {
    return 1n;
  }
  getBitrate() {
    return null;
  }
  getAverageBitrate() {
    return null;
  }
  async getDurationFromMetadata() {
    let e22 = this.internalTrack.segment;
    if (e22.duration <= 0) return null;
    let t22 = e22.duration / e22.timestampFactor, i2 = await this.getFirstPacket({ metadataOnly: !0 });
    return t22 += i2?.timestamp ?? 0, t22;
  }
  async getLiveRefreshInterval() {
    return null;
  }
  async getFirstPacket(e22) {
    return this.performClusterLookup(null, (e3) => e3.trackData.get(this.internalTrack.id) ? { blockIndex: 0, correctBlockFound: !0 } : { blockIndex: -1, correctBlockFound: !1 }, -1 / 0, 1 / 0, e22);
  }
  intoTimescale(e22) {
    return q(e22 * this.internalTrack.segment.timestampFactor);
  }
  async getPacket(e22, t22) {
    let i2 = this.intoTimescale(e22);
    return this.performClusterLookup(null, (e3) => {
      let t3 = e3.trackData.get(this.internalTrack.id);
      if (!t3) return { blockIndex: -1, correctBlockFound: !1 };
      let r2 = A(t3.presentationTimestamps, i2, (e4) => e4.timestamp);
      return { blockIndex: r2 !== -1 ? t3.presentationTimestamps[r2].blockIndex : -1, correctBlockFound: r2 !== -1 && i2 < t3.endTimestamp };
    }, i2, i2, t22);
  }
  async getNextPacket(e22, t22) {
    let i2 = this.packetToClusterLocation.get(e22);
    if (i2 === void 0) throw new Error("Packet was not created from this track.");
    return this.performClusterLookup(i2.cluster, (e3) => {
      if (e3 === i2.cluster) {
        let t3 = e3.trackData.get(this.internalTrack.id);
        if (i2.blockIndex + 1 < t3.blocks.length) return { blockIndex: i2.blockIndex + 1, correctBlockFound: !0 };
      } else if (e3.trackData.get(this.internalTrack.id)) return { blockIndex: 0, correctBlockFound: !0 };
      return { blockIndex: -1, correctBlockFound: !1 };
    }, -1 / 0, 1 / 0, t22);
  }
  async getKeyPacket(e22, t22) {
    let i2 = this.intoTimescale(e22);
    return this.performClusterLookup(null, (e3) => {
      let t3 = e3.trackData.get(this.internalTrack.id);
      if (!t3) return { blockIndex: -1, correctBlockFound: !1 };
      let r2 = O2(t3.presentationTimestamps, (e4) => t3.blocks[e4.blockIndex].isKeyFrame && e4.timestamp <= i2);
      return { blockIndex: r2 !== -1 ? t3.presentationTimestamps[r2].blockIndex : -1, correctBlockFound: r2 !== -1 && i2 < t3.endTimestamp };
    }, i2, i2, t22);
  }
  async getNextKeyPacket(e22, t22) {
    let i2 = this.packetToClusterLocation.get(e22);
    if (i2 === void 0) throw new Error("Packet was not created from this track.");
    return this.performClusterLookup(i2.cluster, (e3) => {
      if (e3 === i2.cluster) {
        let t3 = e3.trackData.get(this.internalTrack.id).blocks.findIndex((e4, t4) => e4.isKeyFrame && t4 > i2.blockIndex);
        if (t3 !== -1) return { blockIndex: t3, correctBlockFound: !0 };
      } else {
        let t3 = e3.trackData.get(this.internalTrack.id);
        if (t3 && t3.firstKeyFrameTimestamp !== null) {
          let e4 = t3.blocks.findIndex((e5) => e5.isKeyFrame);
          return o2(e4 !== -1), { blockIndex: e4, correctBlockFound: !0 };
        }
      }
      return { blockIndex: -1, correctBlockFound: !1 };
    }, -1 / 0, 1 / 0, t22);
  }
  async fetchPacketInCluster(e22, t22, i2) {
    var r2, a2;
    if (t22 === -1) return null;
    let s2 = e22.trackData.get(this.internalTrack.id).blocks[t22];
    if (o2(s2), s2.decoded || (s2.data = this.internalTrack.demuxer.decodeBlockData(this.internalTrack, s2.data), s2.decoded = !0), !s2.postProcessed) {
      if (((r2 = this.internalTrack.info) == null ? void 0 : r2.codec) === "prores" && !(s2.data.length >= 8 && s2.data[4] === 105 && s2.data[5] === 99 && s2.data[6] === 112 && s2.data[7] === 102)) {
        let e3 = new Uint8Array(s2.data.length + 8);
        f2(e3).setUint32(0, e3.length, !1), e3[4] = 105, e3[5] = 99, e3[6] = 112, e3[7] = 102, e3.set(s2.data, 8), s2.data = e3;
      }
      s2.postProcessed = !0;
    }
    let n2 = i2.metadataOnly ? Di : s2.data, c22 = s2.timestamp / this.internalTrack.segment.timestampFactor, l22 = s2.duration / this.internalTrack.segment.timestampFactor, d22 = {};
    s2.mainAdditional && ((a2 = this.internalTrack.info) == null ? void 0 : a2.type) === "video" && this.internalTrack.info.alphaMode && (d22.alpha = i2.metadataOnly ? Di : s2.mainAdditional, d22.alphaByteLength = s2.mainAdditional.byteLength);
    let u2 = new Oi(n2, s2.isKeyFrame ? "key" : "delta", c22, l22, e22.dataStartPos + t22, s2.data.byteLength, d22);
    return this.packetToClusterLocation.set(u2, { cluster: e22, blockIndex: t22 }), u2;
  }
  async performClusterLookup(e22, t22, i2, r2, a2) {
    let { demuxer: s2, segment: n2 } = this.internalTrack, c22 = null, l22 = null, d22 = -1;
    if (e22) {
      let { blockIndex: i3, correctBlockFound: r3 } = t22(e22);
      if (r3) return this.fetchPacketInCluster(e22, i3, a2);
      i3 !== -1 && (l22 = e22, d22 = i3);
    }
    let u2 = A(this.internalTrack.cuePoints, i2, (e3) => e3.time), h22 = u2 !== -1 ? this.internalTrack.cuePoints[u2] : null, m2 = A(this.internalTrack.clusterPositionCache, i2, (e3) => e3.startTimestamp), f22 = m2 !== -1 ? this.internalTrack.clusterPositionCache[m2] : null, p22 = Math.max(h22?.clusterPosition ?? 0, f22?.elementStartPos ?? 0) || null, g2;
    for (e22 ? p22 === null || e22.elementStartPos >= p22 ? (g2 = e22.elementEndPos, c22 = e22) : g2 = p22 : g2 = p22 ?? n2.clusterSeekStartPos; n2.elementEndPos === null || g2 <= n2.elementEndPos - 2; ) {
      if (c22) {
        let e4 = c22.trackData.get(this.internalTrack.id);
        if (e4 && e4.startTimestamp > r2) break;
      }
      let e3 = s2.reader.requestSliceRange(g2, 2, Fr);
      if (e3 instanceof Promise && (e3 = await e3), !e3) break;
      let i3 = g2, u3 = Lr(e3);
      if (!u3 || !Er.includes(u3.id) && u3.id !== Pr.Void) {
        let e4 = await Hr(s2.reader, i3, Er, Math.min(n2.elementEndPos ?? 1 / 0, i3 + ta));
        if (e4) {
          g2 = e4;
          continue;
        }
        break;
      }
      let h3 = u3.id, m3 = u3.size, f3 = e3.filePos;
      if (h3 === Pr.Cluster) {
        c22 = await s2.readCluster(i3, n2), m3 = c22.elementEndPos - f3;
        let { blockIndex: e4, correctBlockFound: r3 } = t22(c22);
        if (r3) return this.fetchPacketInCluster(c22, e4, a2);
        e4 !== -1 && (l22 = c22, d22 = e4);
      }
      m3 === void 0 && (o2(h3 !== Pr.Cluster), m3 = (await Vr(s2.reader, f3, Ir, n2.elementEndPos)).pos - f3);
      let p3 = f3 + m3;
      if (n2.elementEndPos === null) {
        let e4 = s2.reader.requestSliceRange(p3, 2, Fr);
        if (e4 instanceof Promise && (e4 = await e4), !e4) break;
        if (Nr(e4) === Pr.Segment) {
          n2.elementEndPos = p3;
          break;
        }
      }
      g2 = p3;
    }
    if (h22 && (!l22 || l22.elementStartPos < h22.clusterPosition)) {
      let e3 = this.internalTrack.cuePoints[u2 - 1];
      o2(!e3 || e3.time < h22.time);
      let i3 = e3?.time ?? -1 / 0;
      return this.performClusterLookup(null, t22, i3, r2, a2);
    }
    return l22 ? this.fetchPacketInCluster(l22, d22, a2) : null;
  }
}, aa = class extends ra {
  constructor(e22) {
    super(e22), this.decoderConfigPromise = null, this.internalTrack = e22;
  }
  getType() {
    return "video";
  }
  getCodec() {
    return this.internalTrack.info.codec;
  }
  getCodedWidth() {
    return this.internalTrack.info.width;
  }
  getCodedHeight() {
    return this.internalTrack.info.height;
  }
  getSquarePixelWidth() {
    return this.internalTrack.info.squarePixelWidth;
  }
  getSquarePixelHeight() {
    return this.internalTrack.info.squarePixelHeight;
  }
  getRotation() {
    return this.internalTrack.info.rotation;
  }
  async getColorSpace() {
    var e22, t22, i2, r2;
    return { primaries: (e22 = this.internalTrack.info.colorSpace) == null ? void 0 : e22.primaries, transfer: (t22 = this.internalTrack.info.colorSpace) == null ? void 0 : t22.transfer, matrix: (i2 = this.internalTrack.info.colorSpace) == null ? void 0 : i2.matrix, fullRange: (r2 = this.internalTrack.info.colorSpace) == null ? void 0 : r2.fullRange };
  }
  async canBeTransparent() {
    return this.internalTrack.info.alphaMode || this.internalTrack.info.codec === "prores" && (this.internalTrack.info.proresFormat === "ap4h" || this.internalTrack.info.proresFormat === "ap4x");
  }
  async getDecoderConfig() {
    return this.internalTrack.info.codec ? this.decoderConfigPromise ?? (this.decoderConfigPromise = (async () => {
      let e22 = null;
      (this.internalTrack.info.codec === "vp9" || this.internalTrack.info.codec === "av1" || this.internalTrack.info.codec === "avc" && !this.internalTrack.info.codecDescription || this.internalTrack.info.codec === "hevc" && !this.internalTrack.info.codecDescription) && (e22 = await this.getFirstPacket({}));
      let t22 = { codec: Ze({ width: this.internalTrack.info.width, height: this.internalTrack.info.height, codec: this.internalTrack.info.codec, codecDescription: this.internalTrack.info.codecDescription, colorSpace: this.internalTrack.info.colorSpace, avcType: 1, avcCodecInfo: this.internalTrack.info.codec === "avc" && e22 ? Lt(e22.data) : null, hevcCodecInfo: this.internalTrack.info.codec === "hevc" && e22 ? jt(e22.data) : null, vp9CodecInfo: this.internalTrack.info.codec === "vp9" && e22 ? ri(e22.data) : null, av1CodecInfo: this.internalTrack.info.codec === "av1" && e22 ? si(e22.data) : null, proresFormat: this.internalTrack.info.proresFormat }), codedWidth: this.internalTrack.info.width, codedHeight: this.internalTrack.info.height, description: this.internalTrack.info.codecDescription ?? void 0, colorSpace: this.internalTrack.info.colorSpace ?? void 0 };
      return this.internalTrack.info.width === this.internalTrack.info.squarePixelWidth && this.internalTrack.info.height === this.internalTrack.info.squarePixelHeight || (t22.displayAspectWidth = this.internalTrack.info.squarePixelWidth, t22.displayAspectHeight = this.internalTrack.info.squarePixelHeight), t22;
    })()) : null;
  }
}, sa = class extends ra {
  constructor(e22) {
    super(e22), this.decoderConfigPromise = null, this.internalTrack = e22;
  }
  getType() {
    return "audio";
  }
  getCodec() {
    return this.internalTrack.info.codec;
  }
  getNumberOfChannels() {
    return this.internalTrack.info.numberOfChannels;
  }
  getSampleRate() {
    return this.internalTrack.info.sampleRate;
  }
  async getDecoderConfig() {
    return this.internalTrack.info.codec ? this.decoderConfigPromise ?? (this.decoderConfigPromise = (async () => {
      if (this.internalTrack.info.codec === "dts" && !this.internalTrack.info.dtsFormat) {
        let e22 = await this.getFirstPacket({});
        this.internalTrack.info.dtsFormat = e22 && _i(e22.data);
      }
      return { codec: tt({ codec: this.internalTrack.info.codec, codecDescription: this.internalTrack.info.codecDescription, aacCodecInfo: this.internalTrack.info.aacCodecInfo, dtsFormat: this.internalTrack.info.dtsFormat }), numberOfChannels: this.internalTrack.info.numberOfChannels, sampleRate: this.internalTrack.info.sampleRate, description: this.internalTrack.info.codecDescription ?? void 0 };
    })()) : null;
  }
};
var na = async (e22, t22, i2, r2 = null) => {
  let a2 = t22;
  for (; i2 === null || a2 < i2; ) {
    let t3 = i2 !== null ? Math.min(65536, i2 - a2) : 65536, s2 = e22.requestSliceRange(a2, 4, t3);
    if (s2 instanceof Promise && (s2 = await s2), !s2 || s2.length < 4) break;
    for (; s2.remainingLength >= 4; ) {
      let t4 = s2.filePos, i3 = $o(s2), n2 = e22.fileSize !== null ? e22.fileSize - a2 : null, o22 = yt(i3, n2);
      if (o22.header && (!r2 || o22.header.sampleRate === r2.sampleRate && o22.header.mpegVersionId === r2.mpegVersionId && o22.header.layer === r2.layer && Pt(o22.header.channel) === Pt(r2.channel))) return { header: o22.header, startPos: a2 };
      s2.filePos = t4 + o22.bytesAdvanced, a2 = s2.filePos;
    }
  }
  return null;
};
var oa = class extends Ri {
  constructor(e22) {
    super(e22), this.metadataPromise = null, this.firstFrameHeader = null, this.firstFrameHeaderPos = null, this.xingFrameHeader = null, this.xingFrameHeaderPos = null, this.loadedSamples = [], this.metadataTags = null, this.xingData = null, this.trackBackings = [], this.readingMutex = new x(), this.lastSampleLoaded = !1, this.lastLoadedPos = 0, this.nextTimestampInSamples = 0, this.reader = e22._reader;
  }
  async readMetadata() {
    return this.metadataPromise ?? (this.metadataPromise = (async () => {
      for (; !this.firstFrameHeader && !this.lastSampleLoaded; ) await this.advanceReader();
      if (!this.firstFrameHeader && this.xingFrameHeader && (this.firstFrameHeader = this.xingFrameHeader, this.firstFrameHeaderPos = this.xingFrameHeaderPos), !this.firstFrameHeader) throw new Error("No valid MP3 frame found.");
      this.trackBackings = [new ca(this)];
    })());
  }
  async advanceReader() {
    if (this.lastLoadedPos === 0) for (; ; ) {
      let e3 = this.reader.requestSlice(this.lastLoadedPos, oc);
      if (e3 instanceof Promise && (e3 = await e3), !e3) return void (this.lastSampleLoaded = !0);
      let t3 = uc(e3);
      if (!t3) break;
      this.lastLoadedPos = e3.filePos + t3.size;
    }
    let e22 = await na(this.reader, this.lastLoadedPos, this.reader.fileSize, this.firstFrameHeader);
    if (!e22) return void (this.lastSampleLoaded = !0);
    let t22 = e22.header;
    this.lastLoadedPos = e22.startPos + t22.totalSize - 1;
    let i2 = bt(t22.mpegVersionId, t22.channel), r2 = this.reader.requestSlice(e22.startPos + i2, 4);
    if (r2 instanceof Promise && (r2 = await r2), r2) {
      let a3 = $o(r2);
      if (a3 === kt || a3 === wt) {
        if (this.xingFrameHeader || (this.xingFrameHeader = t22, this.xingFrameHeaderPos = e22.startPos), !this.xingData) {
          let t3 = this.reader.requestSlice(e22.startPos + i2 + 4, 12);
          if (t3 instanceof Promise && (t3 = await t3), t3) {
            let e3 = zo(t3, 12), i3 = f2(e3), r3 = i3.getUint32(0, !1);
            this.xingData = { frameCount: r3 & Tt.FrameCount ? i3.getUint32(4, !1) : null, fileSize: r3 & Tt.FileSize ? i3.getUint32(8, !1) : null };
          }
        }
        return;
      }
    }
    this.firstFrameHeader || (this.firstFrameHeader = t22, this.firstFrameHeaderPos = e22.startPos);
    let a2 = t22.audioSamplesInFrame / this.firstFrameHeader.sampleRate, s2 = { timestamp: this.nextTimestampInSamples / this.firstFrameHeader.sampleRate, duration: a2, dataStart: e22.startPos, dataSize: t22.totalSize };
    this.loadedSamples.push(s2), this.nextTimestampInSamples += t22.audioSamplesInFrame;
  }
  async getMimeType() {
    return "audio/mpeg";
  }
  async getTrackBackings() {
    return await this.readMetadata(), this.trackBackings;
  }
  async getMetadataTags() {
    let e22 = await this.readingMutex.acquire();
    try {
      if (await this.readMetadata(), this.metadataTags) return this.metadataTags;
      this.metadataTags = {};
      let e3 = 0, t22 = !1;
      for (; ; ) {
        let i2 = this.reader.requestSlice(e3, oc);
        if (i2 instanceof Promise && (i2 = await i2), !i2) break;
        let r2 = uc(i2);
        if (!r2) break;
        t22 = !0;
        let a2 = this.reader.requestSlice(i2.filePos, r2.size);
        if (a2 instanceof Promise && (a2 = await a2), !a2) break;
        hc(a2, r2, this.metadataTags), e3 = i2.filePos + r2.size;
      }
      if (!t22 && this.reader.fileSize !== null && this.reader.fileSize >= nc) {
        let e4 = this.reader.requestSlice(this.reader.fileSize - nc, nc);
        e4 instanceof Promise && (e4 = await e4), o2(e4), ec(e4, 3) === "TAG" && lc(e4, this.metadataTags);
      }
      return this.metadataTags;
    } finally {
      e22();
    }
  }
}, ca = class {
  constructor(e22) {
    this.demuxer = e22;
  }
  getType() {
    return "audio";
  }
  getId() {
    return 1;
  }
  getNumber() {
    return 1;
  }
  getTimeResolution() {
    return o2(this.demuxer.firstFrameHeader), this.demuxer.firstFrameHeader.sampleRate / this.demuxer.firstFrameHeader.audioSamplesInFrame;
  }
  isRelativeToUnixEpoch() {
    return !1;
  }
  getUnixTimeForTimestamp() {
    return null;
  }
  getPairingMask() {
    return 1n;
  }
  getBitrate() {
    return null;
  }
  getAverageBitrate() {
    return null;
  }
  async getDurationFromMetadata() {
    let e22 = this.demuxer;
    if (o2(e22.firstFrameHeader !== null), o2(e22.firstFrameHeaderPos !== null), e22.xingData) {
      if (e22.xingData.frameCount !== null) return e22.xingData.frameCount * e22.firstFrameHeader.audioSamplesInFrame / e22.firstFrameHeader.sampleRate;
    } else if (e22.reader.fileSize !== null) {
      let s2 = (t22 = e22.firstFrameHeader.lowSamplingFrequency, i2 = e22.firstFrameHeader.layer, r2 = e22.firstFrameHeader.bitrate, a2 = e22.firstFrameHeader.sampleRate, i2 === 0 ? 0 : i2 === 1 ? 144 * r2 / (a2 << t22) : i2 === 2 ? 144 * r2 / a2 : 12 * r2 / a2 * 4), n2 = (e22.reader.fileSize - e22.firstFrameHeaderPos) / s2;
      return Math.round(n2) * e22.firstFrameHeader.audioSamplesInFrame / e22.firstFrameHeader.sampleRate;
    }
    var t22, i2, r2, a2;
    return null;
  }
  async getLiveRefreshInterval() {
    return null;
  }
  getName() {
    return null;
  }
  getLanguageCode() {
    return W;
  }
  getCodec() {
    return "mp3";
  }
  getInternalCodecId() {
    return null;
  }
  getNumberOfChannels() {
    return o2(this.demuxer.firstFrameHeader), Pt(this.demuxer.firstFrameHeader.channel);
  }
  getSampleRate() {
    return o2(this.demuxer.firstFrameHeader), this.demuxer.firstFrameHeader.sampleRate;
  }
  getDisposition() {
    return { ...Ae };
  }
  async getDecoderConfig() {
    return o2(this.demuxer.firstFrameHeader), { codec: "mp3", numberOfChannels: Pt(this.demuxer.firstFrameHeader.channel), sampleRate: this.demuxer.firstFrameHeader.sampleRate };
  }
  async getPacketAtIndex(e22, t22) {
    if (e22 === -1) return null;
    let i2 = this.demuxer.loadedSamples[e22];
    if (!i2) return null;
    let r2;
    if (t22.metadataOnly) r2 = Di;
    else {
      let e3 = this.demuxer.reader.requestSlice(i2.dataStart, i2.dataSize);
      if (e3 instanceof Promise && (e3 = await e3), !e3) return null;
      r2 = zo(e3, i2.dataSize);
    }
    return new Oi(r2, "key", i2.timestamp, i2.duration, e22, i2.dataSize);
  }
  getFirstPacket(e22) {
    return this.getPacketAtIndex(0, e22);
  }
  async getNextPacket(e22, t22) {
    let i2 = await this.demuxer.readingMutex.acquire();
    try {
      let i3 = B(this.demuxer.loadedSamples, e22.timestamp, (e3) => e3.timestamp);
      if (i3 === -1) throw new Error("Packet was not created from this track.");
      let r2 = i3 + 1;
      for (; r2 >= this.demuxer.loadedSamples.length && !this.demuxer.lastSampleLoaded; ) await this.demuxer.advanceReader();
      return this.getPacketAtIndex(r2, t22);
    } finally {
      i2();
    }
  }
  async getPacket(e22, t22) {
    let i2 = await this.demuxer.readingMutex.acquire();
    try {
      for (; ; ) {
        let i3 = A(this.demuxer.loadedSamples, e22, (e3) => e3.timestamp);
        if (i3 === -1 && this.demuxer.loadedSamples.length > 0) return null;
        if (this.demuxer.lastSampleLoaded) return this.getPacketAtIndex(i3, t22);
        if (i3 >= 0 && i3 + 1 < this.demuxer.loadedSamples.length) return this.getPacketAtIndex(i3, t22);
        await this.demuxer.advanceReader();
      }
    } finally {
      i2();
    }
  }
  getKeyPacket(e22, t22) {
    return this.getPacket(e22, t22);
  }
  getNextKeyPacket(e22, t22) {
    return this.getNextPacket(e22, t22);
  }
};
var la = 1399285583, da = new Uint32Array(256);
for (let zu = 0; zu < 256; zu++) {
  let e22 = zu << 24;
  for (let t22 = 0; t22 < 8; t22++) e22 = 2147483648 & e22 ? e22 << 1 ^ 79764919 : e22 << 1;
  da[zu] = e22 >>> 0 & 4294967295;
}
var ua = (e22) => {
  let t22 = f2(e22), i2 = t22.getUint32(22, !0);
  t22.setUint32(22, 0, !0);
  let r2 = 0;
  for (let a2 = 0; a2 < e22.length; a2++) {
    let t3 = e22[a2];
    r2 = (r2 << 8 ^ da[r2 >>> 24 ^ t3]) >>> 0;
  }
  return t22.setUint32(22, i2, !0), r2;
}, ha = (e22, t22, i2) => {
  let r2 = 0, a2 = null;
  if (e22.length > 0) if (t22.codec === "vorbis") {
    o2(t22.vorbisInfo);
    let s2 = (1 << ((e3) => {
      let t3 = 0;
      for (; e3; ) t3++, e3 >>= 1;
      return t3;
    })(t22.vorbisInfo.modeBlockflags.length - 1)) - 1 << 1, n2 = (e22[0] & s2) >> 1;
    if (n2 >= t22.vorbisInfo.modeBlockflags.length) throw new Error("Invalid mode number.");
    let c22 = i2, l22 = t22.vorbisInfo.modeBlockflags[n2];
    if (a2 = t22.vorbisInfo.blocksizes[l22], l22 === 1) {
      let i3 = 1 + (1 | s2), r3 = e22[0] & i3 ? 1 : 0;
      c22 = t22.vorbisInfo.blocksizes[r3];
    }
    r2 = c22 !== null ? c22 + a2 >> 2 : 0;
  } else t22.codec === "opus" && (r2 = ((e3) => {
    let t3 = e3[0] >> 3, i3 = 3 & e3[0], r3;
    return r3 = i3 === 0 ? 1 : i3 === 1 || i3 === 2 ? 2 : 63 & e3[1], { durationInSamples: oi[t3] * r3 };
  })(e22).durationInSamples);
  return { durationInSamples: r2, vorbisBlockSize: a2 };
}, ma = 27, fa = 282, pa = (e22) => {
  let t22 = e22.filePos;
  if (jo(e22) !== la) return null;
  e22.skip(1);
  let i2 = Lo(e22), r2 = Yo(e22), a2 = jo(e22), s2 = jo(e22), n2 = jo(e22), o22 = Lo(e22), c22 = new Uint8Array(o22);
  for (let u2 = 0; u2 < o22; u2++) c22[u2] = Lo(e22);
  let l22 = 27 + o22, d22 = c22.reduce((e3, t3) => e3 + t3, 0);
  return { headerStartPos: t22, totalSize: l22 + d22, dataStartPos: t22 + l22, dataSize: d22, headerType: i2, granulePosition: r2, serialNumber: a2, sequenceNumber: s2, checksum: n2, lacingValues: c22 };
}, ga = (e22, t22) => {
  for (; e22.filePos < t22 - 3; ) {
    let t3 = jo(e22), i2 = 79;
    if ((255 & t3) === i2 || (t3 >>> 8 & 255) === i2 || (t3 >>> 16 & 255) === i2 || (t3 >>> 24 & 255) === i2) {
      if (e22.skip(-4), t3 === la) return !0;
      e22.skip(1);
    }
  }
  return !1;
};
var ka = class extends Ri {
  constructor(e22) {
    super(e22), this.metadataPromise = null, this.bitstreams = [], this.trackBackings = [], this.metadataTags = {}, this.reader = e22._reader;
  }
  async readMetadata() {
    return this.metadataPromise ?? (this.metadataPromise = (async () => {
      let e22 = 0;
      for (; ; ) {
        let t22 = this.reader.requestSliceRange(e22, ma, fa);
        if (t22 instanceof Promise && (t22 = await t22), !t22) break;
        let i2 = pa(t22);
        if (!i2 || !(2 & i2.headerType)) break;
        this.bitstreams.push({ serialNumber: i2.serialNumber, bosPage: i2, description: null, numberOfChannels: -1, sampleRate: -1, codecInfo: { codec: null, vorbisInfo: null, opusInfo: null }, lastMetadataPacket: null }), e22 = i2.headerStartPos + i2.totalSize;
      }
      for (let t22 of this.bitstreams) {
        let e3 = await this.readPacket(t22.bosPage, 0);
        e3 && (e3.data.byteLength >= 7 && e3.data[0] === 1 && e3.data[1] === 118 && e3.data[2] === 111 && e3.data[3] === 114 && e3.data[4] === 98 && e3.data[5] === 105 && e3.data[6] === 115 ? await this.readVorbisMetadata(e3, t22) : e3.data.byteLength >= 8 && e3.data[0] === 79 && e3.data[1] === 112 && e3.data[2] === 117 && e3.data[3] === 115 && e3.data[4] === 72 && e3.data[5] === 101 && e3.data[6] === 97 && e3.data[7] === 100 && await this.readOpusMetadata(e3, t22), t22.codecInfo.codec !== null && this.trackBackings.push(new wa(t22, this)));
      }
    })());
  }
  async readVorbisMetadata(e22, t22) {
    let i2 = await this.findNextPacketStart(e22);
    if (!i2) return;
    let r2 = await this.readPacket(i2.startPage, i2.startSegmentIndex);
    if (!r2 || (i2 = await this.findNextPacketStart(r2), !i2)) return;
    let a2 = await this.readPacket(i2.startPage, i2.startSegmentIndex);
    if (!a2 || r2.data[0] !== 3 || a2.data[0] !== 5) return;
    let s2 = [], n2 = (e3) => {
      for (; s2.push(Math.min(255, e3)), !(e3 < 255); ) e3 -= 255;
    };
    n2(e22.data.length), n2(r2.data.length);
    let o22 = new Uint8Array(1 + s2.length + e22.data.length + r2.data.length + a2.data.length);
    o22[0] = 2, o22.set(s2, 1), o22.set(e22.data, 1 + s2.length), o22.set(r2.data, 1 + s2.length + e22.data.length), o22.set(a2.data, 1 + s2.length + e22.data.length + r2.data.length), t22.codecInfo.codec = "vorbis", t22.description = o22, t22.lastMetadataPacket = a2;
    let c22 = f2(e22.data);
    t22.numberOfChannels = c22.getUint8(11), t22.sampleRate = c22.getUint32(12, !0);
    let l22 = c22.getUint8(28);
    t22.codecInfo.vorbisInfo = { blocksizes: [1 << (15 & l22), 1 << (l22 >> 4)], modeBlockflags: ci(a2.data).modeBlockflags }, hi(r2.data.subarray(7), this.metadataTags);
  }
  async readOpusMetadata(e22, t22) {
    let i2 = await this.findNextPacketStart(e22);
    if (!i2) return;
    let r2 = await this.readPacket(i2.startPage, i2.startSegmentIndex);
    if (!r2) return;
    t22.codecInfo.codec = "opus", t22.description = e22.data, t22.lastMetadataPacket = r2;
    let a2 = ni(e22.data);
    t22.numberOfChannels = a2.outputChannelCount, t22.sampleRate = it, t22.codecInfo.opusInfo = { preSkip: a2.preSkip }, hi(r2.data.subarray(8), this.metadataTags);
  }
  async readPacket(e22, t22) {
    o2(t22 < e22.lacingValues.length);
    let i2 = 0;
    for (let o22 = 0; o22 < t22; o22++) i2 += e22.lacingValues[o22];
    let r2 = e22, a2 = i2, s2 = t22, n2 = [];
    e: for (; ; ) {
      let t3 = this.reader.requestSlice(r2.dataStartPos, r2.dataSize);
      t3 instanceof Promise && (t3 = await t3), o2(t3);
      let c3 = zo(t3, r2.dataSize);
      for (; ; ) {
        if (s2 === r2.lacingValues.length) {
          n2.push(c3.subarray(i2, a2));
          break;
        }
        let e3 = r2.lacingValues[s2];
        if (a2 += e3, e3 < 255) {
          n2.push(c3.subarray(i2, a2));
          break e;
        }
        s2++;
      }
      let l3 = r2.headerStartPos + r2.totalSize;
      for (; ; ) {
        let t4 = this.reader.requestSliceRange(l3, ma, fa);
        if (t4 instanceof Promise && (t4 = await t4), !t4) return null;
        let i3 = pa(t4);
        if (!i3) return null;
        if (r2 = i3, r2.serialNumber === e22.serialNumber) break;
        l3 = r2.headerStartPos + r2.totalSize;
      }
      i2 = 0, a2 = 0, s2 = 0;
    }
    let c22 = n2.reduce((e3, t3) => e3 + t3.length, 0);
    if (c22 === 0) return null;
    let l22 = new Uint8Array(c22), d22 = 0;
    for (let o22 = 0; o22 < n2.length; o22++) {
      let e3 = n2[o22];
      l22.set(e3, d22), d22 += e3.length;
    }
    return { data: l22, endPage: r2, endSegmentIndex: s2 };
  }
  async findNextPacketStart(e22) {
    if (e22.endSegmentIndex < e22.endPage.lacingValues.length - 1) return { startPage: e22.endPage, startSegmentIndex: e22.endSegmentIndex + 1 };
    if (4 & e22.endPage.headerType) return null;
    let t22 = e22.endPage.headerStartPos + e22.endPage.totalSize;
    for (; ; ) {
      let i2 = this.reader.requestSliceRange(t22, ma, fa);
      if (i2 instanceof Promise && (i2 = await i2), !i2) return null;
      let r2 = pa(i2);
      if (!r2) return null;
      if (r2.serialNumber === e22.endPage.serialNumber) return { startPage: r2, startSegmentIndex: 0 };
      t22 = r2.headerStartPos + r2.totalSize;
    }
  }
  async getMimeType() {
    return await this.readMetadata(), ((e22) => {
      let t22 = "audio/ogg";
      return e22.codecStrings && (t22 += `; codecs="${[...new Set(e22.codecStrings)].join(", ")}"`), t22;
    })({ codecStrings: (await Promise.all(this.trackBackings.map((e22) => e22.getDecoderConfig().then((e3) => e3?.codec ?? null)))).filter(Boolean) });
  }
  async getTrackBackings() {
    return await this.readMetadata(), this.trackBackings;
  }
  async getMetadataTags() {
    return await this.readMetadata(), this.metadataTags;
  }
}, wa = class {
  constructor(e22, t22) {
    this.bitstream = e22, this.demuxer = t22, this.encodedPacketToMetadata = /* @__PURE__ */ new WeakMap(), this.sequentialScanCache = [], this.sequentialScanMutex = new x(), this.internalSampleRate = e22.codecInfo.codec === "opus" ? it : e22.sampleRate;
  }
  getType() {
    return "audio";
  }
  getId() {
    return this.bitstream.serialNumber;
  }
  getNumber() {
    let e22 = this.demuxer.trackBackings.findIndex((e3) => e3.bitstream === this.bitstream);
    return o2(e22 !== -1), e22 + 1;
  }
  getNumberOfChannels() {
    return this.bitstream.numberOfChannels;
  }
  getSampleRate() {
    return this.bitstream.sampleRate;
  }
  getTimeResolution() {
    return this.bitstream.sampleRate;
  }
  isRelativeToUnixEpoch() {
    return !1;
  }
  getUnixTimeForTimestamp() {
    return null;
  }
  getPairingMask() {
    return 1n;
  }
  getBitrate() {
    return null;
  }
  getAverageBitrate() {
    return null;
  }
  async getDurationFromMetadata() {
    return null;
  }
  async getLiveRefreshInterval() {
    return null;
  }
  getCodec() {
    return this.bitstream.codecInfo.codec;
  }
  getInternalCodecId() {
    return null;
  }
  async getDecoderConfig() {
    return o2(this.bitstream.codecInfo.codec), { codec: this.bitstream.codecInfo.codec, numberOfChannels: this.bitstream.numberOfChannels, sampleRate: this.bitstream.sampleRate, description: this.bitstream.description ?? void 0 };
  }
  getName() {
    return null;
  }
  getLanguageCode() {
    return W;
  }
  getDisposition() {
    return { ...Ae, primary: !1 };
  }
  granulePositionToTimestampInSamples(e22) {
    return this.bitstream.codecInfo.codec === "opus" ? (o2(this.bitstream.codecInfo.opusInfo), e22 - this.bitstream.codecInfo.opusInfo.preSkip) : e22;
  }
  createEncodedPacketFromOggPacket(e22, t22, i2) {
    if (!e22) return null;
    let { durationInSamples: r2, vorbisBlockSize: a2 } = ha(e22.data, this.bitstream.codecInfo, t22.vorbisLastBlocksize), s2 = new Oi(i2.metadataOnly ? Di : e22.data, "key", Math.max(0, t22.timestampInSamples) / this.internalSampleRate, r2 / this.internalSampleRate, e22.endPage.headerStartPos + e22.endSegmentIndex, e22.data.byteLength);
    return this.encodedPacketToMetadata.set(s2, { packet: e22, timestampInSamples: t22.timestampInSamples, durationInSamples: r2, vorbisLastBlockSize: t22.vorbisLastBlocksize, vorbisBlockSize: a2 }), s2;
  }
  async getFirstPacket(e22) {
    o2(this.bitstream.lastMetadataPacket);
    let t22 = await this.demuxer.findNextPacketStart(this.bitstream.lastMetadataPacket);
    if (!t22) return null;
    let i2 = 0;
    this.bitstream.codecInfo.codec === "opus" && (o2(this.bitstream.codecInfo.opusInfo), i2 -= this.bitstream.codecInfo.opusInfo.preSkip);
    let r2 = await this.demuxer.readPacket(t22.startPage, t22.startSegmentIndex);
    return this.createEncodedPacketFromOggPacket(r2, { timestampInSamples: i2, vorbisLastBlocksize: null }, e22);
  }
  async getNextPacket(e22, t22) {
    let i2 = this.encodedPacketToMetadata.get(e22);
    if (!i2) throw new Error("Packet was not created from this track.");
    let r2 = await this.demuxer.findNextPacketStart(i2.packet);
    if (!r2) return null;
    let a2 = i2.timestampInSamples + i2.durationInSamples, s2 = await this.demuxer.readPacket(r2.startPage, r2.startSegmentIndex);
    return this.createEncodedPacketFromOggPacket(s2, { timestampInSamples: a2, vorbisLastBlocksize: i2.vorbisBlockSize }, t22);
  }
  async getPacket(e22, t22) {
    if (this.demuxer.reader.fileSize === null) return this.getPacketSequential(e22, t22);
    let i2 = q(e22 * this.internalSampleRate);
    if (i2 === 0) return this.getFirstPacket(t22);
    if (i2 < 0) return null;
    o2(this.bitstream.lastMetadataPacket);
    let r2 = await this.demuxer.findNextPacketStart(this.bitstream.lastMetadataPacket);
    if (!r2) return null;
    let a2 = r2.startPage, s2 = this.demuxer.reader.fileSize, n2 = [a2];
    e: for (; a2.headerStartPos + a2.totalSize < s2; ) {
      let e3 = a2.headerStartPos, t3 = Math.floor((e3 + s2) / 2), r3 = t3;
      for (; ; ) {
        let e4 = Math.min(r3 + 65307, s2 - ma), c3 = this.demuxer.reader.requestSlice(r3, e4 - r3);
        if (c3 instanceof Promise && (c3 = await c3), o2(c3), !ga(c3, e4)) {
          s2 = t3 + ma;
          continue e;
        }
        let l3 = this.demuxer.reader.requestSliceRange(c3.filePos, ma, fa);
        l3 instanceof Promise && (l3 = await l3), o2(l3);
        let d3 = pa(l3);
        o2(d3);
        let u3 = !1;
        if (d3.serialNumber === this.bitstream.serialNumber) u3 = !0;
        else {
          let e5 = this.demuxer.reader.requestSlice(d3.headerStartPos, d3.totalSize);
          e5 instanceof Promise && (e5 = await e5), o2(e5);
          let t4 = zo(e5, d3.totalSize);
          u3 = ua(t4) === d3.checksum;
        }
        if (!u3) {
          r3 = d3.headerStartPos + 4;
          continue;
        }
        if (u3 && d3.serialNumber !== this.bitstream.serialNumber) {
          r3 = d3.headerStartPos + d3.totalSize;
          continue;
        }
        if (d3.granulePosition !== -1) {
          this.granulePositionToTimestampInSamples(d3.granulePosition) > i2 ? s2 = d3.headerStartPos : (a2 = d3, n2.push(d3));
          continue e;
        }
        r3 = d3.headerStartPos + d3.totalSize;
      }
    }
    let c22 = r2.startPage;
    for (let o22 of n2) {
      if (o22.granulePosition === a2.granulePosition) break;
      (!c22 || o22.headerStartPos > c22.headerStartPos) && (c22 = o22);
    }
    let l22 = c22, d22 = [l22];
    for (; l22.serialNumber !== this.bitstream.serialNumber || l22.granulePosition !== a2.granulePosition; ) {
      let e3 = l22.headerStartPos + l22.totalSize, t3 = this.demuxer.reader.requestSliceRange(e3, ma, fa);
      t3 instanceof Promise && (t3 = await t3), o2(t3);
      let i3 = pa(t3);
      o2(i3), l22 = i3, l22.serialNumber === this.bitstream.serialNumber && d22.push(l22);
    }
    o2(l22.granulePosition !== -1);
    let u2, h22, m2 = null, f22 = l22, p22 = 0;
    if (l22.headerStartPos === r2.startPage.headerStartPos) u2 = this.granulePositionToTimestampInSamples(0), h22 = !0, m2 = 0;
    else {
      u2 = 0, h22 = !1;
      for (let t3 = l22.lacingValues.length - 1; t3 >= 0; t3--)
        if (l22.lacingValues[t3] < 255) {
          m2 = t3 + 1;
          break;
        }
      if (m2 === null) throw new Error("Invalid page with granule position: no packets end on this page.");
      p22 = m2 - 1;
      let e3 = { data: Di, endPage: f22, endSegmentIndex: p22 };
      if (await this.demuxer.findNextPacketStart(e3)) {
        let e4 = ya(d22, l22, m2);
        o2(e4);
        let t3 = ba(d22, e4.page, e4.segmentIndex);
        t3 && (l22 = t3.page, m2 = t3.segmentIndex);
      } else for (; ; ) {
        let e4 = ya(d22, l22, m2);
        if (!e4) break;
        let t3 = ba(d22, e4.page, e4.segmentIndex);
        if (!t3) break;
        if (l22 = t3.page, m2 = t3.segmentIndex, e4.page.headerStartPos !== f22.headerStartPos) {
          f22 = e4.page, p22 = e4.segmentIndex;
          break;
        }
      }
    }
    let g2 = null, k2 = null;
    for (; l22 !== null; ) {
      o2(m2 !== null);
      let e3 = await this.demuxer.readPacket(l22, m2);
      if (!e3) break;
      if (!(l22.headerStartPos === r2.startPage.headerStartPos && m2 < r2.startSegmentIndex)) {
        let r3 = this.createEncodedPacketFromOggPacket(e3, { timestampInSamples: u2, vorbisLastBlocksize: k2?.vorbisBlockSize ?? null }, t22);
        o2(r3);
        let a4 = this.encodedPacketToMetadata.get(r3);
        if (o2(a4), h22 || e3.endPage.headerStartPos !== f22.headerStartPos || e3.endSegmentIndex !== p22 ? u2 += a4.durationInSamples : (u2 = this.granulePositionToTimestampInSamples(l22.granulePosition), h22 = !0, r3 = this.createEncodedPacketFromOggPacket(e3, { timestampInSamples: u2 - a4.durationInSamples, vorbisLastBlocksize: k2?.vorbisBlockSize ?? null }, t22), o2(r3), a4 = this.encodedPacketToMetadata.get(r3), o2(a4)), g2 = r3, k2 = a4, h22 && (Math.max(u2, 0) > i2 || Math.max(a4.timestampInSamples, 0) === i2)) break;
      }
      let a3 = await this.demuxer.findNextPacketStart(e3);
      if (!a3) break;
      l22 = a3.startPage, m2 = a3.startSegmentIndex;
    }
    return g2;
  }
  async getPacketSequential(e22, t22) {
    let i2 = await this.sequentialScanMutex.acquire();
    try {
      let i3 = q(e22 * this.internalSampleRate);
      e22 = i3 / this.internalSampleRate;
      let r2 = A(this.sequentialScanCache, i3, (e3) => e3.timestampInSamples), a2;
      if (r2 !== -1) {
        let e3 = this.sequentialScanCache[r2];
        a2 = this.createEncodedPacketFromOggPacket(e3.packet, { timestampInSamples: e3.timestampInSamples, vorbisLastBlocksize: e3.vorbisLastBlockSize }, t22);
      } else a2 = await this.getFirstPacket(t22);
      let s2 = 0;
      for (; a2 && a2.timestamp < e22; ) {
        let i4 = await this.getNextPacket(a2, t22);
        if (!i4 || i4.timestamp > e22) break;
        if (a2 = i4, s2++, s2 === 100) {
          s2 = 0;
          let e3 = this.encodedPacketToMetadata.get(a2);
          o2(e3), this.sequentialScanCache.length > 0 && o2(l2(this.sequentialScanCache).timestampInSamples <= e3.timestampInSamples), this.sequentialScanCache.push(e3);
        }
      }
      return a2;
    } finally {
      i2();
    }
  }
  getKeyPacket(e22, t22) {
    return this.getPacket(e22, t22);
  }
  getNextKeyPacket(e22, t22) {
    return this.getNextPacket(e22, t22);
  }
}, ba = (e22, t22, i2) => {
  let r2 = t22, a2 = i2;
  e: for (; ; ) {
    for (a2--; a2 >= 0; a2--)
      if (r2.lacingValues[a2] < 255) {
        a2++;
        break e;
      }
    if (o2(a2 === -1), !(1 & r2.headerType)) {
      a2 = 0;
      break;
    }
    let t3 = D2(e22, (e3) => e3.headerStartPos < r2.headerStartPos);
    if (!t3) return null;
    r2 = t3, a2 = r2.lacingValues.length;
  }
  if (o2(a2 !== -1), a2 === r2.lacingValues.length) {
    let t3 = e22[e22.indexOf(r2) + 1];
    o2(t3), r2 = t3, a2 = 0;
  }
  return { page: r2, segmentIndex: a2 };
}, ya = (e22, t22, i2) => {
  if (i2 > 0) return { page: t22, segmentIndex: i2 - 1 };
  let r2 = D2(e22, (e3) => e3.headerStartPos < t22.headerStartPos);
  return r2 ? { page: r2, segmentIndex: r2.lacingValues.length - 1 } : null;
};
var va, Ta;
(Ta = va || (va = {}))[Ta.PCM = 1] = "PCM", Ta[Ta.IEEE_FLOAT = 3] = "IEEE_FLOAT", Ta[Ta.ALAW = 6] = "ALAW", Ta[Ta.MULAW = 7] = "MULAW", Ta[Ta.EXTENSIBLE = 65534] = "EXTENSIBLE";
var Sa = class extends Ri {
  constructor(e22) {
    super(e22), this.metadataPromise = null, this.dataStart = -1, this.dataSize = -1, this.audioInfo = null, this.trackBackings = [], this.lastKnownPacketIndex = 0, this.metadataTags = {}, this.reader = e22._reader;
  }
  async readMetadata() {
    return this.metadataPromise ?? (this.metadataPromise = (async () => {
      let e22 = this.reader.requestSlice(0, 12);
      e22 instanceof Promise && (e22 = await e22), o2(e22);
      let t22 = ec(e22, 4), i2 = t22 !== "RIFX", r2 = t22 === "RF64", a2 = Ho(e22, i2), s2 = r2 ? this.reader.fileSize : Math.min(a2 + 8, this.reader.fileSize ?? 1 / 0);
      if (ec(e22, 4) !== "WAVE") throw new Error("Invalid WAVE file - wrong format");
      let n2 = 0, c22 = null, l22 = e22.filePos;
      for (; s2 === null || l22 < s2; ) {
        let e3 = this.reader.requestSlice(l22, 8);
        if (e3 instanceof Promise && (e3 = await e3), !e3) break;
        let t3 = ec(e3, 4), a3 = Ho(e3, i2), o22 = e3.filePos;
        if (r2 && n2 === 0 && t3 !== "ds64") throw new Error('Invalid RF64 file: First chunk must be "ds64".');
        if (t3 === "fmt ") await this.parseFmtChunk(o22, a3, i2);
        else if (t3 === "data") {
          if (c22 ?? (c22 = a3), this.dataStart = e3.filePos, this.dataSize = Math.min(c22, (s2 ?? 1 / 0) - this.dataStart), this.reader.fileSize === null) break;
        } else if (t3 === "ds64") {
          let e4 = this.reader.requestSlice(o22, a3);
          if (e4 instanceof Promise && (e4 = await e4), !e4) break;
          let t4 = Qo(e4, i2);
          c22 = Qo(e4, i2), s2 = Math.min(t4 + 8, this.reader.fileSize ?? 1 / 0);
        } else t3 === "LIST" ? await this.parseListChunk(o22, a3, i2) : t3 !== "ID3 " && t3 !== "id3 " || await this.parseId3Chunk(o22, a3);
        l22 = o22 + a3 + (1 & a3), n2++;
      }
      if (!this.audioInfo) throw new Error('Invalid WAVE file - missing "fmt " chunk');
      if (this.dataStart === -1) throw new Error('Invalid WAVE file - missing "data" chunk');
      let d22 = this.audioInfo.blockSizeInBytes;
      this.dataSize = Math.floor(this.dataSize / d22) * d22, this.trackBackings.push(new Ca(this));
    })());
  }
  async parseFmtChunk(e22, t22, i2) {
    let r2 = this.reader.requestSlice(e22, t22);
    if (r2 instanceof Promise && (r2 = await r2), !r2) return;
    let a2 = Uo(r2, i2), s2 = Uo(r2, i2), n2 = Ho(r2, i2);
    r2.skip(4);
    let o22 = Uo(r2, i2), c22;
    if (c22 = t22 === 14 ? 8 : Uo(r2, i2), t22 >= 18 && a2 !== 357) {
      let e3 = Uo(r2, i2), s3 = t22 - 18;
      if (Math.min(s3, e3) >= 22 && a2 === va.EXTENSIBLE) {
        r2.skip(6);
        let e4 = zo(r2, 16);
        a2 = e4[0] | e4[1] << 8;
      }
    }
    if (a2 !== va.MULAW && a2 !== va.ALAW || (c22 = 8), a2 !== va.PCM && a2 !== va.IEEE_FLOAT && a2 !== va.ALAW && a2 !== va.MULAW) throw new Error(`Unsupported WAVE codec (format tag ${a2}). Only integer/float PCM, A-law, and μ-law are supported.`);
    if (a2 === va.PCM && ![8, 16, 24, 32].includes(c22)) throw new Error(`Unsupported WAVE PCM bit depth (${c22}). Only 8, 16, 24, and 32 bits are supported.`);
    if (a2 === va.IEEE_FLOAT && ![32, 64].includes(c22)) throw new Error(`Unsupported WAVE float bit depth (${c22}). Only 32 and 64 bits are supported.`);
    this.audioInfo = { format: a2, numberOfChannels: s2, sampleRate: n2, sampleSizeInBytes: Math.ceil(c22 / 8), blockSizeInBytes: o22 };
  }
  async parseListChunk(e22, t22, i2) {
    var r2, a2, s2, n2, o22, c22, l22, d22, u2, h22, m2;
    let f22 = this.reader.requestSlice(e22, t22);
    if (f22 instanceof Promise && (f22 = await f22), !f22) return;
    let p22 = ec(f22, 4);
    if (p22 !== "INFO" && p22 !== "INF0") return;
    let g2 = f22.filePos;
    for (; g2 <= e22 + t22 - 8; ) {
      f22.filePos = g2;
      let e3 = ec(f22, 4), t3 = Ho(f22, i2), p3 = zo(f22, t3), k2 = 0;
      for (let i3 = 0; i3 < p3.length && p3[i3] !== 0; i3++) k2++;
      let w2 = String.fromCharCode(...p3.subarray(0, k2));
      switch ((r2 = this.metadataTags).raw ?? (r2.raw = {}), this.metadataTags.raw[e3] = w2, e3) {
        case "INAM":
        case "TITL":
          (a2 = this.metadataTags).title ?? (a2.title = w2);
          break;
        case "TIT3":
          (s2 = this.metadataTags).description ?? (s2.description = w2);
          break;
        case "IART":
          (n2 = this.metadataTags).artist ?? (n2.artist = w2);
          break;
        case "IPRD":
          (o22 = this.metadataTags).album ?? (o22.album = w2);
          break;
        case "IPRT":
        case "ITRK":
        case "TRCK":
          {
            let e4 = w2.split("/"), t4 = Number.parseInt(e4[0], 10), i3 = e4[1] && Number.parseInt(e4[1], 10);
            Number.isInteger(t4) && t4 > 0 && ((c22 = this.metadataTags).trackNumber ?? (c22.trackNumber = t4)), i3 && Number.isInteger(i3) && i3 > 0 && ((l22 = this.metadataTags).tracksTotal ?? (l22.tracksTotal = i3));
          }
          break;
        case "ICRD":
        case "IDIT":
          {
            let e4 = new Date(w2);
            Number.isNaN(e4.getTime()) || ((d22 = this.metadataTags).date ?? (d22.date = e4));
          }
          break;
        case "YEAR":
          {
            let e4 = Number.parseInt(w2, 10);
            Number.isInteger(e4) && e4 > 0 && ((u2 = this.metadataTags).date ?? (u2.date = new Date(e4, 0, 1)));
          }
          break;
        case "IGNR":
        case "GENR":
          (h22 = this.metadataTags).genre ?? (h22.genre = w2);
          break;
        case "ICMT":
        case "CMNT":
        case "COMM":
          (m2 = this.metadataTags).comment ?? (m2.comment = w2);
      }
      g2 += 8 + t3 + (1 & t3);
    }
  }
  async parseId3Chunk(e22, t22) {
    let i2 = this.reader.requestSlice(e22, t22);
    if (i2 instanceof Promise && (i2 = await i2), !i2) return;
    let r2 = uc(i2);
    if (r2) {
      let a2 = t22 - oc;
      if (r2.size = Math.min(r2.size, a2), r2.size > 0) {
        let t3 = i2.slice(e22 + oc, r2.size);
        hc(t3, r2, this.metadataTags);
      }
    }
  }
  getCodec() {
    if (o2(this.audioInfo), this.audioInfo.format === va.MULAW) return "ulaw";
    if (this.audioInfo.format === va.ALAW) return "alaw";
    if (this.audioInfo.format === va.PCM) {
      if (this.audioInfo.sampleSizeInBytes === 1) return "pcm-u8";
      if (this.audioInfo.sampleSizeInBytes === 2) return "pcm-s16";
      if (this.audioInfo.sampleSizeInBytes === 3) return "pcm-s24";
      if (this.audioInfo.sampleSizeInBytes === 4) return "pcm-s32";
    }
    if (this.audioInfo.format === va.IEEE_FLOAT) {
      if (this.audioInfo.sampleSizeInBytes === 4) return "pcm-f32";
      if (this.audioInfo.sampleSizeInBytes === 8) return "pcm-f64";
    }
    o2(!1);
  }
  async getMimeType() {
    return "audio/wav";
  }
  async getTrackBackings() {
    return await this.readMetadata(), this.trackBackings;
  }
  async getMetadataTags() {
    return await this.readMetadata(), this.metadataTags;
  }
}, Pa = 2048, Ca = class {
  constructor(e22) {
    this.demuxer = e22;
  }
  getType() {
    return "audio";
  }
  getId() {
    return 1;
  }
  getNumber() {
    return 1;
  }
  getCodec() {
    return this.demuxer.getCodec();
  }
  getInternalCodecId() {
    return o2(this.demuxer.audioInfo), this.demuxer.audioInfo.format;
  }
  async getDecoderConfig() {
    let e22 = this.demuxer.getCodec();
    return e22 ? (o2(this.demuxer.audioInfo), { codec: e22, numberOfChannels: this.demuxer.audioInfo.numberOfChannels, sampleRate: this.demuxer.audioInfo.sampleRate }) : null;
  }
  getNumberOfChannels() {
    return o2(this.demuxer.audioInfo), this.demuxer.audioInfo.numberOfChannels;
  }
  getSampleRate() {
    return o2(this.demuxer.audioInfo), this.demuxer.audioInfo.sampleRate;
  }
  getTimeResolution() {
    return o2(this.demuxer.audioInfo), this.demuxer.audioInfo.sampleRate;
  }
  isRelativeToUnixEpoch() {
    return !1;
  }
  getUnixTimeForTimestamp() {
    return null;
  }
  getPairingMask() {
    return 1n;
  }
  getBitrate() {
    return null;
  }
  getAverageBitrate() {
    return null;
  }
  async getDurationFromMetadata() {
    return o2(this.demuxer.dataSize !== -1), this.demuxer.dataSize / this.demuxer.audioInfo.blockSizeInBytes / this.demuxer.audioInfo.sampleRate;
  }
  async getLiveRefreshInterval() {
    return null;
  }
  getName() {
    return null;
  }
  getLanguageCode() {
    return W;
  }
  getDisposition() {
    return { ...Ae };
  }
  async getPacketAtIndex(e22, t22) {
    o2(e22 >= 0), o2(this.demuxer.audioInfo);
    let i2 = e22 * Pa * this.demuxer.audioInfo.blockSizeInBytes;
    if (i2 >= this.demuxer.dataSize) return null;
    let r2 = Math.min(Pa * this.demuxer.audioInfo.blockSizeInBytes, this.demuxer.dataSize - i2);
    if (this.demuxer.reader.fileSize === null) {
      let e3 = this.demuxer.reader.requestSlice(this.demuxer.dataStart + i2, r2);
      if (e3 instanceof Promise && (e3 = await e3), !e3) return null;
    }
    let a2;
    if (t22.metadataOnly) a2 = Di;
    else {
      let e3 = this.demuxer.reader.requestSlice(this.demuxer.dataStart + i2, r2);
      e3 instanceof Promise && (e3 = await e3), o2(e3), a2 = zo(e3, r2);
    }
    let s2 = e22 * Pa / this.demuxer.audioInfo.sampleRate, n2 = r2 / this.demuxer.audioInfo.blockSizeInBytes / this.demuxer.audioInfo.sampleRate;
    return this.demuxer.lastKnownPacketIndex = Math.max(e22, this.demuxer.lastKnownPacketIndex), new Oi(a2, "key", s2, n2, e22, r2);
  }
  getFirstPacket(e22) {
    return this.getPacketAtIndex(0, e22);
  }
  async getPacket(e22, t22) {
    o2(this.demuxer.audioInfo);
    let i2 = Math.floor(Math.min(e22 * this.demuxer.audioInfo.sampleRate / Pa, (this.demuxer.dataSize - 1) / (Pa * this.demuxer.audioInfo.blockSizeInBytes)));
    if (i2 < 0) return null;
    let r2 = await this.getPacketAtIndex(i2, t22);
    if (r2) return r2;
    if (i2 === 0) return null;
    o2(this.demuxer.reader.fileSize === null);
    let a2 = await this.getPacketAtIndex(this.demuxer.lastKnownPacketIndex, t22);
    for (; a2; ) {
      let e3 = await this.getNextPacket(a2, t22);
      if (!e3) break;
      a2 = e3;
    }
    return a2;
  }
  getNextPacket(e22, t22) {
    o2(this.demuxer.audioInfo);
    let i2 = Math.round(e22.timestamp * this.demuxer.audioInfo.sampleRate / Pa);
    return this.getPacketAtIndex(i2 + 1, t22);
  }
  getKeyPacket(e22, t22) {
    return this.getPacket(e22, t22);
  }
  getNextKeyPacket(e22, t22) {
    return this.getNextPacket(e22, t22);
  }
};
var xa = (e22) => {
  let t22 = e22.filePos, i2 = zo(e22, 9), r2 = new Me(i2);
  if (r2.readBits(12) !== 4095 || (r2.skipBits(1), r2.readBits(2) !== 0)) return null;
  let a2 = r2.readBits(1), s2 = r2.readBits(2) + 1, n2 = r2.readBits(4);
  if (n2 === 15) return null;
  r2.skipBits(1);
  let o22 = r2.readBits(3);
  if (o22 === 0) throw new Error("ADTS frames with channel configuration 0 are not supported.");
  r2.skipBits(1), r2.skipBits(1), r2.skipBits(1), r2.skipBits(1);
  let c22 = r2.readBits(13);
  r2.skipBits(11);
  let l22 = r2.readBits(2) + 1;
  if (l22 !== 1) throw new Error("ADTS frames with more than one AAC frame are not supported.");
  let d22 = null;
  return a2 === 1 ? e22.filePos -= 2 : d22 = r2.readBits(16), { objectType: s2, samplingFrequencyIndex: n2, channelConfiguration: o22, frameLength: c22, numberOfAacFrames: l22, crcCheck: d22, startPos: t22 };
}, Ea = 1024, Ia = class extends Ri {
  constructor(e22) {
    super(e22), this.metadataPromise = null, this.firstFrameHeader = null, this.loadedSamples = [], this.metadataTags = null, this.trackBackings = [], this.readingMutex = new x(), this.lastSampleLoaded = !1, this.lastLoadedPos = 0, this.nextTimestampInSamples = 0, this.reader = e22._reader;
  }
  async readMetadata() {
    return this.metadataPromise ?? (this.metadataPromise = (async () => {
      for (; !this.firstFrameHeader && !this.lastSampleLoaded; ) await this.advanceReader();
      o2(this.firstFrameHeader), this.trackBackings = [new _a(this)];
    })());
  }
  async advanceReader() {
    if (this.lastLoadedPos === 0) for (; ; ) {
      let e3 = this.reader.requestSlice(this.lastLoadedPos, oc);
      if (e3 instanceof Promise && (e3 = await e3), !e3) return void (this.lastSampleLoaded = !0);
      let t3 = uc(e3);
      if (!t3) break;
      this.lastLoadedPos = e3.filePos + t3.size;
    }
    let e22 = this.reader.requestSliceRange(this.lastLoadedPos, 7, 9);
    if (e22 instanceof Promise && (e22 = await e22), !e22) return void (this.lastSampleLoaded = !0);
    let t22 = xa(e22);
    if (!t22) return void (this.lastSampleLoaded = !0);
    if (this.reader.fileSize !== null && t22.startPos + t22.frameLength > this.reader.fileSize) return void (this.lastSampleLoaded = !0);
    this.firstFrameHeader || (this.firstFrameHeader = t22);
    let i2 = Fe[t22.samplingFrequencyIndex];
    o2(i2 !== void 0);
    let r2 = Ea / i2, a2 = { timestamp: this.nextTimestampInSamples / i2, duration: r2, dataStart: t22.startPos, dataSize: t22.frameLength };
    this.loadedSamples.push(a2), this.nextTimestampInSamples += Ea, this.lastLoadedPos = t22.startPos + t22.frameLength;
  }
  async getMimeType() {
    return "audio/aac";
  }
  async getTrackBackings() {
    return await this.readMetadata(), this.trackBackings;
  }
  async getMetadataTags() {
    let e22 = await this.readingMutex.acquire();
    try {
      if (await this.readMetadata(), this.metadataTags) return this.metadataTags;
      this.metadataTags = {};
      let e3 = 0;
      for (; ; ) {
        let t22 = this.reader.requestSlice(e3, oc);
        if (t22 instanceof Promise && (t22 = await t22), !t22) break;
        let i2 = uc(t22);
        if (!i2) break;
        let r2 = this.reader.requestSlice(t22.filePos, i2.size);
        if (r2 instanceof Promise && (r2 = await r2), !r2) break;
        hc(r2, i2, this.metadataTags), e3 = t22.filePos + i2.size;
      }
      return this.metadataTags;
    } finally {
      e22();
    }
  }
}, _a = class {
  constructor(e22) {
    this.demuxer = e22;
  }
  getType() {
    return "audio";
  }
  getId() {
    return 1;
  }
  getNumber() {
    return 1;
  }
  getTimeResolution() {
    return this.getSampleRate() / Ea;
  }
  isRelativeToUnixEpoch() {
    return !1;
  }
  getUnixTimeForTimestamp() {
    return null;
  }
  getPairingMask() {
    return 1n;
  }
  getBitrate() {
    return null;
  }
  getAverageBitrate() {
    return null;
  }
  async getDurationFromMetadata() {
    return null;
  }
  async getLiveRefreshInterval() {
    return null;
  }
  getName() {
    return null;
  }
  getLanguageCode() {
    return W;
  }
  getCodec() {
    return "aac";
  }
  getInternalCodecId() {
    return o2(this.demuxer.firstFrameHeader), this.demuxer.firstFrameHeader.objectType;
  }
  getNumberOfChannels() {
    o2(this.demuxer.firstFrameHeader);
    let e22 = Re[this.demuxer.firstFrameHeader.channelConfiguration];
    return o2(e22 !== void 0), e22;
  }
  getSampleRate() {
    o2(this.demuxer.firstFrameHeader);
    let e22 = Fe[this.demuxer.firstFrameHeader.samplingFrequencyIndex];
    return o2(e22 !== void 0), e22;
  }
  getDisposition() {
    return { ...Ae };
  }
  async getDecoderConfig() {
    return o2(this.demuxer.firstFrameHeader), { codec: `mp4a.40.${this.demuxer.firstFrameHeader.objectType}`, numberOfChannels: this.getNumberOfChannels(), sampleRate: this.getSampleRate() };
  }
  async getPacketAtIndex(e22, t22) {
    if (e22 === -1) return null;
    let i2 = this.demuxer.loadedSamples[e22];
    if (!i2) return null;
    let r2;
    if (t22.metadataOnly) r2 = Di;
    else {
      let e3 = this.demuxer.reader.requestSlice(i2.dataStart, i2.dataSize);
      if (e3 instanceof Promise && (e3 = await e3), !e3) return null;
      r2 = zo(e3, i2.dataSize);
    }
    return new Oi(r2, "key", i2.timestamp, i2.duration, e22, i2.dataSize);
  }
  getFirstPacket(e22) {
    return this.getPacketAtIndex(0, e22);
  }
  async getNextPacket(e22, t22) {
    let i2 = await this.demuxer.readingMutex.acquire();
    try {
      let i3 = B(this.demuxer.loadedSamples, e22.timestamp, (e3) => e3.timestamp);
      if (i3 === -1) throw new Error("Packet was not created from this track.");
      let r2 = i3 + 1;
      for (; r2 >= this.demuxer.loadedSamples.length && !this.demuxer.lastSampleLoaded; ) await this.demuxer.advanceReader();
      return this.getPacketAtIndex(r2, t22);
    } finally {
      i2();
    }
  }
  async getPacket(e22, t22) {
    let i2 = await this.demuxer.readingMutex.acquire();
    try {
      for (; ; ) {
        let i3 = A(this.demuxer.loadedSamples, e22, (e3) => e3.timestamp);
        if (i3 === -1 && this.demuxer.loadedSamples.length > 0) return null;
        if (this.demuxer.lastSampleLoaded) return this.getPacketAtIndex(i3, t22);
        if (i3 >= 0 && i3 + 1 < this.demuxer.loadedSamples.length) return this.getPacketAtIndex(i3, t22);
        await this.demuxer.advanceReader();
      }
    } finally {
      i2();
    }
  }
  getKeyPacket(e22, t22) {
    return this.getPacket(e22, t22);
  }
  getNextKeyPacket(e22, t22) {
    return this.getNextPacket(e22, t22);
  }
};
var Ba = class extends Ri {
  constructor(e22) {
    super(e22), this.loadedSamples = [], this.metadataPromise = null, this.trackBacking = null, this.metadataTags = {}, this.audioInfo = null, this.lastLoadedPos = null, this.blockingBit = null, this.readingMutex = new x(), this.lastSampleLoaded = !1, this.reader = e22._reader;
  }
  async getMetadataTags() {
    return await this.readMetadata(), this.metadataTags;
  }
  async getTrackBackings() {
    return await this.readMetadata(), o2(this.trackBacking), [this.trackBacking];
  }
  async getMimeType() {
    return "audio/flac";
  }
  async readMetadata() {
    return this.metadataPromise ?? (this.metadataPromise = (async () => {
      var e22;
      let t22 = 0;
      for (; ; ) {
        let e3 = this.reader.requestSlice(t22, oc);
        if (e3 instanceof Promise && (e3 = await e3), !e3) return void (this.lastSampleLoaded = !0);
        let i2 = uc(e3);
        if (!i2) break;
        let r2 = this.reader.requestSlice(e3.filePos, i2.size);
        r2 instanceof Promise && (r2 = await r2), o2(r2), hc(r2, i2, this.metadataTags), t22 = e3.filePos + i2.size;
      }
      for (t22 += 4; this.reader.fileSize === null || t22 < this.reader.fileSize; ) {
        let i2 = this.reader.requestSlice(t22, 4);
        if (i2 instanceof Promise && (i2 = await i2), t22 += 4, i2 === null) throw new Error(`Metadata block at position ${t22} is too small! Corrupted file.`);
        o2(i2);
        let r2 = Lo(i2), a2 = qo(i2), s2 = !!(128 & r2);
        switch (127 & r2) {
          case di.STREAMINFO: {
            let e3 = this.reader.requestSlice(t22, a2);
            if (e3 instanceof Promise && (e3 = await e3), o2(e3), e3 === null) throw new Error(`StreamInfo block at position ${t22} is too small! Corrupted file.`);
            let i3 = zo(e3, 34), r3 = new Me(i3), s3 = r3.readBits(16), n2 = r3.readBits(16), c22 = r3.readBits(24), l22 = r3.readBits(24), d22 = r3.readBits(20), u2 = r3.readBits(3) + 1;
            r3.readBits(5);
            let h22 = r3.readBits(36);
            r3.skipBits(128);
            let m2 = new Uint8Array(42);
            m2.set(new Uint8Array([102, 76, 97, 67]), 0), m2.set(new Uint8Array([128, 0, 0, 34]), 4), m2.set(i3, 8), this.audioInfo = { numberOfChannels: u2, sampleRate: d22, totalSamples: h22, minimumBlockSize: s3, maximumBlockSize: n2, minimumFrameSize: c22, maximumFrameSize: l22, description: m2 }, this.trackBacking = new Aa(this);
            break;
          }
          case di.VORBIS_COMMENT: {
            let e3 = this.reader.requestSlice(t22, a2);
            e3 instanceof Promise && (e3 = await e3), o2(e3), hi(zo(e3, a2), this.metadataTags);
            break;
          }
          case di.PICTURE: {
            let i3 = this.reader.requestSlice(t22, a2);
            i3 instanceof Promise && (i3 = await i3), o2(i3);
            let r3 = $o(i3), s3 = $o(i3), n2 = p2.decode(zo(i3, s3)), c22 = $o(i3), l22 = p2.decode(zo(i3, c22));
            i3.skip(16);
            let d22 = $o(i3), u2 = zo(i3, d22);
            (e22 = this.metadataTags).images ?? (e22.images = []), this.metadataTags.images.push({ data: u2, mimeType: n2, kind: r3 === 3 ? "coverFront" : r3 === 4 ? "coverBack" : "unknown", description: l22 });
            break;
          }
        }
        if (t22 += a2, s2) {
          this.lastLoadedPos = t22;
          break;
        }
      }
      if (!this.audioInfo) throw new Error("Missing STREAMINFO metadata block! Corrupted FLAC file.");
    })());
  }
  async readNextFlacFrame({ startPos: e22, isFirstPacket: t22 }) {
    o2(this.audioInfo);
    let i2 = this.audioInfo.maximumBlockSize * this.audioInfo.numberOfChannels * 4 + 16 + 2, r2 = this.audioInfo.minimumFrameSize || 10, a2 = (this.audioInfo.maximumFrameSize || i2) + 16, s2 = await this.reader.requestSliceRange(e22, 16, a2);
    if (!s2) return null;
    let n2 = this.readFlacFrameHeader({ slice: s2, isFirstPacket: t22 });
    if (!n2) return null;
    for (s2.filePos = e22 + r2; ; ) {
      if (s2.filePos > s2.end - 6) return { num: n2.num, blockSize: n2.blockSize, sampleRate: n2.sampleRate, size: s2.end - e22, isLastFrame: !0 };
      if (Lo(s2) === 255) {
        let t3 = s2.filePos;
        if (Lo(s2) !== (this.blockingBit === 1 ? 249 : 248)) {
          s2.filePos = t3;
          continue;
        }
        s2.skip(-2);
        let i3 = s2.filePos - e22, r3 = this.readFlacFrameHeader({ slice: s2, isFirstPacket: !1 });
        if (!r3) {
          s2.filePos = t3;
          continue;
        }
        if (this.blockingBit === 0) {
          if (r3.num - n2.num !== 1) {
            s2.filePos = t3;
            continue;
          }
        } else if (r3.num - n2.num !== n2.blockSize) {
          s2.filePos = t3;
          continue;
        }
        return { num: n2.num, blockSize: n2.blockSize, sampleRate: n2.sampleRate, size: i3, isLastFrame: !1 };
      }
    }
  }
  readFlacFrameHeader({ slice: e22, isFirstPacket: t22 }) {
    let i2 = e22.filePos, r2 = zo(e22, 4), a2 = new Me(r2);
    if (a2.readBits(15) !== 32764) return null;
    if (this.blockingBit === null) {
      o2(t22);
      let e3 = a2.readBits(1);
      this.blockingBit = e3;
    } else if (this.blockingBit === 1) {
      if (o2(!t22), a2.readBits(1) !== 1) return null;
    } else {
      if (this.blockingBit !== 0) throw new Error("Invalid blocking bit");
      if (o2(!t22), a2.readBits(1) !== 0) return null;
    }
    let s2 = ((e3) => e3 === 0 ? null : e3 === 1 ? 192 : e3 >= 2 && e3 <= 5 ? 144 * 2 ** e3 : e3 === 6 ? "uncommon-u8" : e3 === 7 ? "uncommon-u16" : e3 >= 8 && e3 <= 15 ? 2 ** e3 : null)(a2.readBits(4));
    if (!s2) return null;
    o2(this.audioInfo);
    let n2 = ((e3, t3) => {
      switch (e3) {
        case 0:
          return t3;
        case 1:
          return 88200;
        case 2:
          return 176400;
        case 3:
          return 192e3;
        case 4:
          return 8e3;
        case 5:
          return 16e3;
        case 6:
          return 22050;
        case 7:
          return 24e3;
        case 8:
          return 32e3;
        case 9:
          return 44100;
        case 10:
          return 48e3;
        case 11:
          return 96e3;
        case 12:
          return "uncommon-u8";
        case 13:
          return "uncommon-u16";
        case 14:
          return "uncommon-u16-10";
        default:
          return null;
      }
    })(a2.readBits(4), this.audioInfo.sampleRate);
    if (!n2 || (a2.readBits(4), a2.readBits(3), a2.readBits(1) !== 0)) return null;
    let c22 = ((e3) => {
      let t3 = 0, i3 = new Me(zo(e3, 1));
      for (; i3.readBits(1) === 1; ) t3++;
      if (t3 === 0) return i3.readBits(7);
      let r3 = [], a3 = t3 - 1, s3 = new Me(zo(e3, a3)), n3 = 8 - t3 - 1;
      for (let o22 = 0; o22 < n3; o22++) r3.unshift(i3.readBits(1));
      for (let o22 = 0; o22 < a3; o22++) for (let e4 = 0; e4 < 8; e4++) {
        let t4 = s3.readBits(1);
        e4 < 2 || r3.unshift(t4);
      }
      return r3.reduce((e4, t4, i4) => e4 | t4 << i4, 0);
    })(e22), l22 = ((e3, t3) => t3 === "uncommon-u16" ? Wo(e3) + 1 : t3 === "uncommon-u8" ? Lo(e3) + 1 : typeof t3 == "number" ? t3 : (N(t3), void o2(!1)))(e22, s2), d22 = ((e3, t3) => t3 === "uncommon-u16" ? Wo(e3) : t3 === "uncommon-u16-10" ? 10 * Wo(e3) : t3 === "uncommon-u8" ? Lo(e3) : typeof t3 == "number" ? t3 : null)(e22, n2);
    if (d22 === null || d22 !== this.audioInfo.sampleRate) return null;
    let u2 = e22.filePos - i2, h22 = Lo(e22);
    e22.skip(-u2), e22.skip(-1);
    let m2 = ((e3) => {
      let t3 = 0;
      for (let i3 of e3) {
        t3 ^= i3;
        for (let e4 = 0; e4 < 8; e4++) 128 & t3 ? t3 = t3 << 1 ^ 7 : t3 <<= 1, t3 &= 255;
      }
      return t3;
    })(zo(e22, u2));
    return h22 !== m2 ? null : { num: c22, blockSize: l22, sampleRate: d22 };
  }
  async advanceReader() {
    await this.readMetadata(), o2(this.lastLoadedPos !== null), o2(this.audioInfo);
    let e22 = this.lastLoadedPos, t22 = await this.readNextFlacFrame({ startPos: e22, isFirstPacket: this.loadedSamples.length === 0 });
    if (!t22) return void (this.lastSampleLoaded = !0);
    let i2 = this.loadedSamples[this.loadedSamples.length - 1], r2 = { blockOffset: i2 ? i2.blockOffset + i2.blockSize : 0, blockSize: t22.blockSize, byteOffset: e22, byteSize: t22.size };
    this.lastLoadedPos = this.lastLoadedPos + t22.size, this.loadedSamples.push(r2), t22.isLastFrame && (this.lastSampleLoaded = !0);
  }
}, Aa = class {
  constructor(e22) {
    this.demuxer = e22;
  }
  getType() {
    return "audio";
  }
  getId() {
    return 1;
  }
  getNumber() {
    return 1;
  }
  getCodec() {
    return "flac";
  }
  getInternalCodecId() {
    return null;
  }
  getNumberOfChannels() {
    return o2(this.demuxer.audioInfo), this.demuxer.audioInfo.numberOfChannels;
  }
  getSampleRate() {
    return o2(this.demuxer.audioInfo), this.demuxer.audioInfo.sampleRate;
  }
  getName() {
    return null;
  }
  getLanguageCode() {
    return W;
  }
  getTimeResolution() {
    return o2(this.demuxer.audioInfo), this.demuxer.audioInfo.sampleRate;
  }
  isRelativeToUnixEpoch() {
    return !1;
  }
  getUnixTimeForTimestamp() {
    return null;
  }
  getPairingMask() {
    return 1n;
  }
  getBitrate() {
    return null;
  }
  getAverageBitrate() {
    return null;
  }
  async getDurationFromMetadata() {
    return o2(this.demuxer.audioInfo), this.demuxer.audioInfo.totalSamples === 0 ? null : this.demuxer.audioInfo.totalSamples / this.demuxer.audioInfo.sampleRate;
  }
  async getLiveRefreshInterval() {
    return null;
  }
  getDisposition() {
    return { ...Ae };
  }
  async getDecoderConfig() {
    return o2(this.demuxer.audioInfo), { codec: "flac", numberOfChannels: this.demuxer.audioInfo.numberOfChannels, sampleRate: this.demuxer.audioInfo.sampleRate, description: this.demuxer.audioInfo.description };
  }
  async getPacket(e22, t22) {
    if (o2(this.demuxer.audioInfo), e22 < 0) return null;
    let i2 = await this.demuxer.readingMutex.acquire();
    try {
      for (; ; ) {
        let i3 = A(this.demuxer.loadedSamples, e22, (e3) => e3.blockOffset / this.demuxer.audioInfo.sampleRate);
        if (i3 === -1) {
          await this.demuxer.advanceReader();
          continue;
        }
        let r2 = this.demuxer.loadedSamples[i3];
        if (!(r2.blockOffset / this.demuxer.audioInfo.sampleRate + r2.blockSize / this.demuxer.audioInfo.sampleRate <= e22)) return this.getPacketAtIndex(i3, t22);
        if (this.demuxer.lastSampleLoaded) return this.getPacketAtIndex(this.demuxer.loadedSamples.length - 1, t22);
        await this.demuxer.advanceReader();
      }
    } finally {
      i2();
    }
  }
  async getNextPacket(e22, t22) {
    let i2 = await this.demuxer.readingMutex.acquire();
    try {
      let i3 = e22.sequenceNumber + 1;
      if (this.demuxer.lastSampleLoaded && i3 >= this.demuxer.loadedSamples.length) return null;
      for (; i3 >= this.demuxer.loadedSamples.length && !this.demuxer.lastSampleLoaded; ) await this.demuxer.advanceReader();
      return this.getPacketAtIndex(i3, t22);
    } finally {
      i2();
    }
  }
  getKeyPacket(e22, t22) {
    return this.getPacket(e22, t22);
  }
  getNextKeyPacket(e22, t22) {
    return this.getNextPacket(e22, t22);
  }
  async getPacketAtIndex(e22, t22) {
    let i2 = this.demuxer.loadedSamples[e22];
    if (!i2) return null;
    let r2;
    if (t22.metadataOnly) r2 = Di;
    else {
      let e3 = this.demuxer.reader.requestSlice(i2.byteOffset, i2.byteSize);
      if (e3 instanceof Promise && (e3 = await e3), !e3) return null;
      r2 = zo(e3, i2.byteSize);
    }
    o2(this.demuxer.audioInfo);
    let a2 = i2.blockOffset / this.demuxer.audioInfo.sampleRate, s2 = i2.blockSize / this.demuxer.audioInfo.sampleRate;
    return new Oi(r2, "key", a2, s2, e22, i2.byteSize);
  }
  async getFirstPacket(e22) {
    for (; this.demuxer.loadedSamples.length === 0 && !this.demuxer.lastSampleLoaded; ) await this.demuxer.advanceReader();
    return this.getPacketAtIndex(0, e22);
  }
};
var Ma = 9e4, Fa = 188, Ra = "PES packet is missing PTS where it was expected. PES packets without PTS are not currently supported. If you think this file should be supported, please report it.", Da = /* @__PURE__ */ new Set([133, 134, 162]), Oa = /* @__PURE__ */ new Set(), Na = class extends Ri {
  constructor(e22) {
    super(e22), this.metadataPromise = null, this.elementaryStreams = [], this.trackBackingEntries = [], this.packetOffset = 0, this.packetStride = -1, this.sectionEndPositions = [], this.seekChunkSize = 5242880, this.minReferencePointByteDistance = -1, this.reader = e22._reader;
  }
  async readMetadata() {
    return this.metadataPromise ?? (this.metadataPromise = (async () => {
      let e22 = this.reader.requestSlice(0, 205);
      e22 instanceof Promise && (e22 = await e22), o2(e22);
      let t22 = zo(e22, 205);
      if (t22[0] === 71 && t22[188] === 71) this.packetOffset = 0, this.packetStride = Fa;
      else if (t22[0] === 71 && t22[204] === 71) this.packetOffset = 0, this.packetStride = 204;
      else {
        if (t22[4] !== 71 || t22[196] !== 71) throw new Error("Unreachable.");
        this.packetOffset = 4, this.packetStride = 192;
      }
      this.minReferencePointByteDistance = 256 * this.packetStride;
      let i2 = this.packetOffset, r2 = null, a2 = !1, s2 = !1;
      for (; ; ) {
        let e3 = await this.readPacketHeader(i2);
        if (!e3) break;
        if (e3.payloadUnitStartIndicator === 0) {
          i2 += this.packetStride;
          continue;
        }
        if (s2 && !this.elementaryStreams.some((t4) => t4.pid === e3.pid)) {
          i2 += this.packetStride;
          continue;
        }
        let t3 = await this.readSection(i2, !0, !s2);
        if (!t3) break;
        let n2 = 3, c22 = 32, l22 = !1;
        if (!s2 && t3.pid !== 0 && !(t3.payload[0] === 0 && t3.payload[1] === 0 && t3.payload[2] === 1)) {
          let e4 = new Me(t3.payload), i3 = e4.readAlignedByte();
          e4.skipBits(8 * i3), l22 = e4.readBits(8) === 2;
        }
        if (t3.pid !== 0 || a2) if (t3.pid !== r2 && !l22 || s2) {
          let e4 = this.elementaryStreams.find((e5) => e5.pid === t3.pid);
          e: if (e4 && !e4.initialized) {
            let i3 = La(t3, !0);
            if (!i3) throw new Error(`Couldn't read first PES packet for Elementary Stream with PID ${e4.pid}`);
            if (e4.firstSection = t3, e4.canBeTrustedWithKeyPackets = t3.randomAccessIndicator === 1, this.input._initInput) {
              let i4 = (await this.input._initInput._getDemuxer()).elementaryStreams.find((i5) => i5.pid === t3.pid && i5.info.codec === e4.info.codec);
              if (i4) {
                e4.info = i4.info, e4.initialized = !0;
                break e;
              }
            }
            let r3 = new Ha(e4, i3);
            if (e4.info.type === "video") {
              for (; ; ) {
                if (r3.suppliedPacket = null, await r3.markNextPacket(), e4.info.codec === "avc") {
                  if (!r3.suppliedPacket) throw new Error("Invalid AVC video stream; could not extract AVCDecoderConfigurationRecord from any packet.");
                  if (e4.info.avcCodecInfo = Lt(r3.suppliedPacket.data), !e4.info.avcCodecInfo) continue;
                  let t4 = e4.info.avcCodecInfo.sequenceParameterSets[0];
                  o2(t4);
                  let i4 = Wt(t4);
                  e4.info.width = i4.displayWidth, e4.info.height = i4.displayHeight;
                  let a3 = i4.pixelAspectRatio.num, s3 = i4.pixelAspectRatio.den;
                  a3 > 0 && s3 > 0 && (a3 > s3 ? (e4.info.squarePixelWidth = Math.round(e4.info.width * a3 / s3), e4.info.squarePixelHeight = e4.info.height) : (e4.info.squarePixelWidth = e4.info.width, e4.info.squarePixelHeight = Math.round(e4.info.height * s3 / a3))), e4.info.colorSpace = { primaries: b[i4.colourPrimaries], transfer: v[i4.transferCharacteristics], matrix: S[i4.matrixCoefficients], fullRange: !!i4.fullRangeFlag }, e4.info.reorderSize = i4.maxDecFrameBuffering;
                  break;
                }
                if (e4.info.codec === "hevc") {
                  if (!r3.suppliedPacket) throw new Error("Invalid HEVC video stream; could not extract HVCDecoderConfigurationRecord from first packet.");
                  if (e4.info.hevcCodecInfo = jt(r3.suppliedPacket.data), !e4.info.hevcCodecInfo) continue;
                  let t4 = e4.info.hevcCodecInfo.arrays.find((e5) => e5.nalUnitType === _t.SPS_NUT).nalUnits[0];
                  o2(t4);
                  let i4 = $t(t4);
                  e4.info.width = i4.displayWidth, e4.info.height = i4.displayHeight, i4.pixelAspectRatio.num > i4.pixelAspectRatio.den ? (e4.info.squarePixelWidth = Math.round(e4.info.width * i4.pixelAspectRatio.num / i4.pixelAspectRatio.den), e4.info.squarePixelHeight = e4.info.height) : (e4.info.squarePixelWidth = e4.info.width, e4.info.squarePixelHeight = Math.round(e4.info.height * i4.pixelAspectRatio.den / i4.pixelAspectRatio.num)), e4.info.colorSpace = { primaries: b[i4.colourPrimaries], transfer: v[i4.transferCharacteristics], matrix: S[i4.matrixCoefficients], fullRange: !!i4.fullRangeFlag }, e4.info.reorderSize = i4.maxDecFrameBuffering;
                  break;
                }
                throw new Error("Unhandled.");
              }
              e4.info.decoderConfig = { codec: Ze({ width: e4.info.width, height: e4.info.height, codec: e4.info.codec, codecDescription: null, colorSpace: e4.info.colorSpace, avcType: 1, avcCodecInfo: e4.info.avcCodecInfo, hevcCodecInfo: e4.info.hevcCodecInfo, vp9CodecInfo: null, av1CodecInfo: null, proresFormat: null }), codedWidth: e4.info.width, codedHeight: e4.info.height, colorSpace: e4.info.colorSpace }, e4.info.width === e4.info.squarePixelWidth && e4.info.height === e4.info.squarePixelHeight || (e4.info.decoderConfig.displayAspectWidth = e4.info.squarePixelWidth, e4.info.decoderConfig.displayAspectHeight = e4.info.squarePixelHeight), e4.initialized = !0;
            } else {
              if (await r3.markNextPacket(), !r3.suppliedPacket) throw new Error(`Couldn't parse first media packet for Elementary Stream with PID ${e4.pid}`);
              if (e4.info.codec === "aac") {
                let t4 = Oo.tempFromBytes(r3.suppliedPacket.data), i4 = xa(t4);
                if (!i4) throw new Error("Invalid AAC audio stream; could not read ADTS frame header from first packet.");
                e4.info.aacCodecInfo = { isMpeg2: !1, objectType: i4.objectType }, e4.info.numberOfChannels = Re[i4.channelConfiguration], e4.info.sampleRate = Fe[i4.samplingFrequencyIndex];
              } else if (e4.info.codec === "mp3") {
                let t4 = $o(Oo.tempFromBytes(r3.suppliedPacket.data)), i4 = yt(t4, r3.suppliedPacket.data.byteLength);
                if (!i4.header) throw new Error("Invalid MP3 audio stream; could not read frame header from first packet.");
                e4.info.numberOfChannels = Pt(i4.header.channel), e4.info.sampleRate = i4.header.sampleRate;
              } else if (e4.info.codec === "ac3") {
                let t4 = fi(r3.suppliedPacket.data);
                if (!t4) throw new Error("Invalid AC-3 audio stream; could not read sync frame from first packet.");
                if (t4.fscod === 3) throw new Error("Invalid AC-3 audio stream; reserved sample rate code found in first packet.");
                e4.info.numberOfChannels = mi[t4.acmod] + t4.lfeon, e4.info.sampleRate = Ct[t4.fscod];
              } else if (e4.info.codec === "eac3") {
                let t4 = ki(r3.suppliedPacket.data);
                if (!t4) throw new Error("Invalid E-AC-3 audio stream; could not read sync frame from first packet.");
                let i4 = wi(t4);
                if (i4 === null) throw new Error("Invalid E-AC-3 audio stream; reserved sample rate code found in first packet.");
                e4.info.numberOfChannels = bi(t4), e4.info.sampleRate = i4;
              } else {
                if (e4.info.codec !== "dts") throw new Error("Unhandled.");
                {
                  let t4 = Ii(r3.suppliedPacket.data);
                  if (!t4) throw new Error("Invalid DTS audio stream; could not read frame header from first packet.");
                  e4.info.numberOfChannels = t4.numberOfChannels, e4.info.sampleRate = t4.sampleRate, t4.core && (e4.info.dtsFormat = t4.hasExtensions ? "dtsh" : "dtsc");
                }
              }
              e4.info.decoderConfig = { codec: tt({ codec: e4.info.codec, codecDescription: null, aacCodecInfo: e4.info.aacCodecInfo, dtsFormat: e4.info.dtsFormat }), numberOfChannels: e4.info.numberOfChannels, sampleRate: e4.info.sampleRate }, e4.initialized = !0;
            }
          }
        } else {
          let e4 = new Me(t3.payload), i3 = e4.readAlignedByte();
          e4.skipBits(8 * i3), e4.skipBits(12);
          let r3 = e4.readBits(12);
          e4.skipBits(43), e4.readBits(13), e4.skipBits(6);
          let a3 = e4.readBits(10), o22 = e4.pos + 8 * a3, l3 = !1;
          for (; e4.pos < o22; ) {
            let t4 = e4.readBits(8), i4 = e4.readBits(8), r4 = e4.pos + 8 * i4;
            if (t4 === 5 && i4 >= 4) {
              let t5 = e4.readBits(32);
              l3 || (l3 = t5 === 1212435798 || t5 === 1212436562);
            }
            e4.pos = r4;
          }
          for (e4.pos = o22; 8 * (r3 + n2) - e4.pos > c22; ) {
            let t4 = e4.readBits(8);
            e4.skipBits(3);
            let i4 = e4.readBits(13);
            e4.skipBits(6);
            let r4 = e4.readBits(10), a4 = e4.pos + 8 * r4, s3 = !1, n3 = !1, o3 = !1;
            for (; e4.pos < a4; ) {
              let t5 = e4.readBits(8), i5 = e4.readBits(8), r5 = e4.pos + 8 * i5;
              if (t5 === 106) s3 = !0;
              else if (t5 === 122 || t5 === 204) n3 = !0;
              else if (t5 === 123) o3 = !0;
              else if (t5 === 5 && i5 >= 4) {
                let t6 = e4.readBits(32);
                o3 || (o3 = (4294967040 & t6) == 1146376960);
              }
              e4.pos = r5;
            }
            let c3 = null, d22 = l3 && Da.has(t4) ? 130 : t4;
            switch (d22) {
              case 27:
              case 36:
                c3 = { type: "video", codec: t4 === 27 ? "avc" : "hevc", decoderConfig: null, avcCodecInfo: null, hevcCodecInfo: null, colorSpace: { primaries: null, transfer: null, matrix: null, fullRange: null }, width: -1, height: -1, squarePixelWidth: -1, squarePixelHeight: -1, reorderSize: -1 };
                break;
              case 3:
              case 4:
              case 15:
              case 129:
              case 135:
              case 130:
              case 138:
                {
                  let e5;
                  e5 = d22 === 3 || d22 === 4 ? "mp3" : d22 === 15 ? "aac" : d22 === 129 ? "ac3" : d22 === 135 ? "eac3" : "dts", c3 = { type: "audio", codec: e5, decoderConfig: null, aacCodecInfo: null, dtsFormat: null, numberOfChannels: -1, sampleRate: -1 };
                }
                break;
              case 6:
                n3 ? c3 = { type: "audio", codec: "eac3", decoderConfig: null, aacCodecInfo: null, dtsFormat: null, numberOfChannels: -1, sampleRate: -1 } : s3 ? c3 = { type: "audio", codec: "ac3", decoderConfig: null, aacCodecInfo: null, dtsFormat: null, numberOfChannels: -1, sampleRate: -1 } : o3 && (c3 = { type: "audio", codec: "dts", decoderConfig: null, aacCodecInfo: null, dtsFormat: null, numberOfChannels: -1, sampleRate: -1 });
                break;
              default:
                Oa.has(t4) || (Ee._warn(`Note: MPEG-TS streams with stream_type 0x${t4.toString(16)} are not currently supported.`), Oa.add(t4));
            }
            c3 && this.elementaryStreams.push({ demuxer: this, pid: i4, streamType: t4, initialized: !1, firstSection: null, canBeTrustedWithKeyPackets: !1, info: c3, referencePesPackets: [] });
          }
          s2 = !0;
        }
        else {
          let e4 = new Me(t3.payload), i3 = e4.readAlignedByte();
          e4.skipBits(8 * i3), e4.skipBits(14);
          let s3 = e4.readBits(10);
          for (e4.skipBits(40); 8 * (s3 + n2) - e4.pos > c22; ) {
            let t4 = e4.readBits(16);
            e4.skipBits(3);
            let i4 = e4.readBits(13);
            if (t4 !== 0) {
              if (r2 !== null) throw new Error("Only files with a single program are supported.");
              r2 = i4;
            }
          }
          if (r2 === null) throw new Error("Program Association Table must link to a Program Map Table.");
          a2 = !0;
        }
        if (s2 && this.elementaryStreams.every((e4) => e4.initialized)) break;
        i2 += this.packetStride;
      }
      if (!s2)
        throw a2 ? new Error("No Program Map Table found in the file.") : new Error("No Program Association Table found in the file.");
      for (let n2 of this.elementaryStreams) n2.initialized && (n2.info.type === "video" ? this.trackBackingEntries.push(new Wa(n2)) : this.trackBackingEntries.push(new qa(n2)));
    })());
  }
  async getTrackBackings() {
    return await this.readMetadata(), this.trackBackingEntries;
  }
  async getMetadataTags() {
    return {};
  }
  async getMimeType() {
    return await this.readMetadata(), ((e22) => {
      let t22 = "video/MP2T", i2 = [...new Set(e22.filter(Boolean))];
      return i2.length > 0 && (t22 += `; codecs="${i2.join(", ")}"`), t22;
    })(await Promise.all(this.trackBackingEntries.map((e22) => e22.getDecoderConfig().then((e3) => e3?.codec ?? null))));
  }
  async readSection(e22, t22, i2 = !1) {
    let r2 = e22, a2 = e22, s2 = [], n2, o22 = 0, c22 = null, l22 = !0, d22 = 0;
    for (; ; ) {
      let e3 = await this.readPacket(a2);
      if (a2 += this.packetStride, !e3) break;
      if (c22) {
        if (e3.pid !== c22.pid) {
          if (i2) break;
          continue;
        }
        if (e3.payloadUnitStartIndicator === 1) break;
      } else {
        if (e3.payloadUnitStartIndicator === 0) break;
        c22 = e3;
      }
      let n3 = !!(2 & e3.adaptationFieldControl), u2 = !!(1 & e3.adaptationFieldControl), h22 = 0;
      if (n3 && (h22 = 1 + e3.body[0], e3 === c22 && h22 > 1 && (d22 = e3.body[1] >> 6 & 1)), u2 && (h22 === 0 ? (s2.push(e3.body), o22 += e3.body.byteLength) : (s2.push(e3.body.subarray(h22)), o22 += e3.body.byteLength - h22)), r2 = a2, !t22 && o22 >= 64) {
        l22 = !1;
        break;
      }
      if (B(this.sectionEndPositions, r2, (e4) => e4) !== -1) {
        l22 = !1;
        break;
      }
    }
    if (l22) {
      let e3 = A(this.sectionEndPositions, r2, (e4) => e4);
      this.sectionEndPositions.splice(e3 + 1, 0, r2);
    }
    if (!c22) return null;
    if (s2.length === 1) n2 = s2[0];
    else {
      let e3 = s2.reduce((e4, t4) => e4 + t4.length, 0);
      n2 = new Uint8Array(e3);
      let t3 = 0;
      for (let i3 of s2) n2.set(i3, t3), t3 += i3.length;
    }
    return { startPos: e22, endPos: t22 ? r2 : null, pid: c22.pid, payload: n2, randomAccessIndicator: d22 };
  }
  async readPacketHeader(e22) {
    let t22 = this.reader.requestSlice(e22, 4);
    if (t22 instanceof Promise && (t22 = await t22), !t22) return null;
    if (Lo(t22) !== 71) throw new Error("Invalid TS packet sync byte. Likely an internal bug, please report this file.");
    let i2 = Wo(t22);
    return { payloadUnitStartIndicator: i2 >> 14 & 1, pid: 8191 & i2, adaptationFieldControl: Lo(t22) >> 4 & 3 };
  }
  async readPacket(e22) {
    let t22 = this.reader.requestSlice(e22, Fa);
    if (t22 instanceof Promise && (t22 = await t22), !t22) return null;
    let i2 = zo(t22, Fa);
    if (i2[0] !== 71) throw new Error("Invalid TS packet sync byte. Likely an internal bug, please report this file.");
    let r2 = (i2[1] << 8) + i2[2];
    return { payloadUnitStartIndicator: r2 >> 14 & 1, pid: 8191 & r2, adaptationFieldControl: i2[3] >> 4 & 3, body: i2.subarray(4) };
  }
}, za = (e22, t22) => {
  if (e22.payload.byteLength < 3) return null;
  let i2 = new Me(e22.payload);
  if (i2.readBits(24) !== 1) return null;
  let r2 = i2.readBits(8);
  if (i2.skipBits(16), r2 === 188 || r2 === 190 || r2 === 191 || r2 === 240 || r2 === 241 || r2 === 255 || r2 === 242 || r2 === 248) return null;
  i2.skipBits(8);
  let a2 = i2.readBits(2);
  i2.skipBits(14);
  let s2 = null;
  if (a2 === 2 || a2 === 3) s2 = 0, i2.skipBits(4), s2 += i2.readBits(3) * (1 << 30), i2.skipBits(1), s2 += 32768 * i2.readBits(15), i2.skipBits(1), s2 += i2.readBits(15);
  else if (t22) throw new Error(Ra);
  return { sectionStartPos: e22.startPos, sectionEndPos: e22.endPos, pts: s2, randomAccessIndicator: e22.randomAccessIndicator };
}, La = (e22, t22) => {
  o2(e22.endPos !== null);
  let i2 = za(e22, t22);
  if (!i2) return null;
  let r2 = new Me(e22.payload);
  r2.skipBits(32);
  let a2 = r2.readBits(16);
  r2.skipBits(16);
  let s2 = r2.readBits(8), n2 = r2.pos + 8 * s2;
  r2.pos = n2;
  let c22 = n2 / 8;
  o2(Number.isInteger(c22));
  let l22 = e22.payload.subarray(c22, a2 > 0 ? 6 + a2 : e22.payload.byteLength);
  return { ...i2, data: l22 };
}, Ua = class _Ua {
  constructor(e22) {
    this.elementaryStream = e22, this.packetBuffers = /* @__PURE__ */ new WeakMap(), this.packetSectionStarts = /* @__PURE__ */ new WeakMap();
  }
  getId() {
    return this.elementaryStream.pid;
  }
  getNumber() {
    let e22 = this.elementaryStream.demuxer, t22 = this.elementaryStream.info.type, i2 = 0;
    for (let r2 of e22.trackBackingEntries) if (r2.getType() === t22 && i2++, o2(r2 instanceof _Ua), r2.elementaryStream === this.elementaryStream) break;
    return i2;
  }
  getCodec() {
    throw new Error("Not implemented on base class.");
  }
  getInternalCodecId() {
    return this.elementaryStream.streamType;
  }
  getName() {
    return null;
  }
  getLanguageCode() {
    return W;
  }
  getDisposition() {
    return { ...Ae, primary: !1 };
  }
  getTimeResolution() {
    return Ma;
  }
  isRelativeToUnixEpoch() {
    return !1;
  }
  getUnixTimeForTimestamp() {
    return null;
  }
  getPairingMask() {
    return 1n;
  }
  getBitrate() {
    return null;
  }
  getAverageBitrate() {
    return null;
  }
  async getDurationFromMetadata() {
    return null;
  }
  async getLiveRefreshInterval() {
    return null;
  }
  createEncodedPacket(e22, t22, i2) {
    let r2;
    return r2 = this.allPacketsAreKeyPackets() || e22.randomAccessIndicator === 1 ? "key" : "delta", new Oi(i2.metadataOnly ? Di : e22.data, r2, e22.pts / Ma, Math.max(t22 / Ma, 0), e22.sequenceNumber, e22.data.byteLength);
  }
  async getFirstPacket(e22) {
    let t22 = this.elementaryStream.firstSection;
    o2(t22);
    let i2 = La(t22, !0);
    o2(i2);
    let r2 = new Ha(this.elementaryStream, i2), a2 = new $a(this, r2), s2 = await a2.readNext();
    if (!s2) return null;
    let n2 = this.createEncodedPacket(s2.packet, s2.duration, e22);
    return this.packetBuffers.set(n2, a2), this.packetSectionStarts.set(n2, s2.packet.sectionStartPos), n2;
  }
  async getNextPacket(e22, t22) {
    let i2 = this.packetBuffers.get(e22);
    if (i2) {
      let r3 = await i2.readNext();
      if (!r3) return null;
      this.packetBuffers.delete(e22);
      let a3 = this.createEncodedPacket(r3.packet, r3.duration, t22);
      return this.packetBuffers.set(a3, i2), this.packetSectionStarts.set(a3, r3.packet.sectionStartPos), a3;
    }
    let r2 = this.packetSectionStarts.get(e22);
    if (r2 === void 0) throw new Error("Packet was not created from this track.");
    let a2 = this.elementaryStream.demuxer, s2 = await a2.readSection(r2, !0);
    o2(s2);
    let n2 = La(s2, !0);
    o2(n2);
    let c22 = new Ha(this.elementaryStream, n2);
    i2 = new $a(this, c22);
    let l22 = e22.sequenceNumber;
    for (; ; ) {
      let e3 = await i2.readNext();
      if (!e3) return null;
      if (e3.packet.sequenceNumber > l22) {
        let r3 = this.createEncodedPacket(e3.packet, e3.duration, t22);
        return this.packetBuffers.set(r3, i2), this.packetSectionStarts.set(r3, e3.packet.sectionStartPos), r3;
      }
    }
  }
  async getNextKeyPacket(e22, t22) {
    let i2 = e22;
    for (; ; ) {
      if (i2 = await this.getNextPacket(i2, t22), !i2) return null;
      if (i2.type === "key") return i2;
    }
  }
  getPacket(e22, t22) {
    return this.doPacketLookup(e22, !1, t22);
  }
  getKeyPacket(e22, t22) {
    return this.doPacketLookup(e22, !0, t22);
  }
  async doPacketLookup(e22, t22, i2) {
    var r2;
    let a2 = q(e22 * Ma), s2 = this.elementaryStream.demuxer, { reader: n2, seekChunkSize: c22 } = s2, d22 = this.elementaryStream.pid, u2 = async (e3, t3, i3) => {
      let r3 = e3;
      for (; r3 < t3; ) {
        let e4 = await s2.readPacketHeader(r3);
        if (!e4) return null;
        if (e4.pid === d22 && e4.payloadUnitStartIndicator === 1) {
          let e5 = await s2.readSection(r3, i3);
          if (!e5) return null;
          let t4 = za(e5, !1);
          if (t4 && t4.pts !== null) return { pesPacketHeader: t4, section: e5 };
        }
        r3 += s2.packetStride;
      }
      return null;
    }, h22 = this.elementaryStream.firstSection;
    o2(h22);
    let m2 = za(h22, !0);
    if (o2(m2), a2 < m2.pts) return null;
    let f22, p22 = this.elementaryStream.referencePesPackets, g2 = A(p22, a2, (e3) => e3.pts), k2 = g2 !== -1 ? p22[g2] : null;
    if (k2 && a2 - k2.pts < 45e3) f22 = k2.sectionStartPos;
    else {
      let e3 = 0;
      if (n2.fileSize !== null) {
        let t3 = Math.ceil(n2.fileSize / c22);
        if (t3 > 1) {
          let i3 = 0, r3 = t3 - 1;
          for (e3 = i3; i3 <= r3; ) {
            let t4 = Math.floor((i3 + r3) / 2), n3 = $(t4 * c22, s2.packetStride) + m2.sectionStartPos, o22 = n3 + c22, l22 = await u2(n3, o22, !1);
            l22 && l22.pesPacketHeader.pts <= a2 ? (e3 = t4, i3 = t4 + 1) : r3 = t4 - 1;
          }
        }
      }
      f22 = $(e3 * c22, s2.packetStride) + m2.sectionStartPos;
    }
    let b2 = (await u2(f22, n2.fileSize ?? 1 / 0, !1))?.pesPacketHeader ?? null;
    b2 || (b2 = m2);
    let y2 = this.getReorderSize(), v2 = async (e3, t3) => {
      var r3;
      let n3 = await s2.readSection(e3, !0);
      o2(n3);
      let c3 = La(n3, !0);
      o2(c3);
      let d3 = new Ha(this.elementaryStream, c3), u3 = new $a(this, d3);
      for (; !((((r3 = l2(u3.presentationOrderPackets)) == null ? void 0 : r3.pts) ?? -1 / 0) >= a2 || !await u3.readNextPacket()); )
        ;
      let h3 = O2(u3.presentationOrderPackets, t3);
      if (h3 === -1) return null;
      let m3 = u3.presentationOrderPackets[h3], f3 = h3 === 0 ? 0 : m3.pts - u3.presentationOrderPackets[h3 - 1].pts;
      for (; u3.decodeOrderPackets[0] !== m3; ) u3.decodeOrderPackets.shift();
      u3.lastDuration = f3;
      let p3 = await u3.readNext();
      o2(p3);
      let g3 = this.createEncodedPacket(p3.packet, p3.duration, i2);
      return this.packetBuffers.set(g3, u3), this.packetSectionStarts.set(g3, p3.packet.sectionStartPos), g3;
    };
    if (!t22 || this.allPacketsAreKeyPackets()) {
      e: for (; ; ) {
        let e3 = b2.sectionStartPos + s2.packetStride;
        for (; ; ) {
          let t3 = await s2.readPacketHeader(e3);
          if (!t3) break e;
          if (t3.pid === d22 && t3.payloadUnitStartIndicator === 1) {
            let t4 = await s2.readSection(e3, !1);
            if (t4) {
              let e4 = za(t4, !1);
              if (e4 && e4.pts !== null) {
                if (e4.pts > a2) break e;
                b2 = e4, Va(this.elementaryStream, b2);
                break;
              }
            }
          }
          e3 += s2.packetStride;
        }
      }
      e: for (let e3 = 0; e3 < y2 + 1; e3++) {
        let e4 = b2.sectionStartPos - s2.packetStride;
        for (; e4 >= s2.packetOffset; ) {
          let t3 = await s2.readPacketHeader(e4);
          if (!t3) break e;
          if (t3.pid === d22 && t3.payloadUnitStartIndicator === 1) {
            let t4 = await s2.readSection(e4, !1);
            if (t4) {
              let e5 = za(t4, !1);
              if (e5 && e5.pts !== null) {
                b2 = e5;
                break;
              }
            }
          }
          e4 -= s2.packetStride;
        }
      }
      return v2(b2.sectionStartPos, (e3) => e3.pts <= a2);
    }
    {
      let e3 = f22, t3 = null, i3 = !this.elementaryStream.canBeTrustedWithKeyPackets;
      for (; ; ) {
        let l22 = null, f3 = e3 <= m2.sectionStartPos, p3, g3 = null;
        if (f3) p3 = m2, g3 = h22;
        else {
          let t4 = await u2(e3, n2.fileSize ?? 1 / 0, i3);
          p3 = t4?.pesPacketHeader ?? null, g3 = t4?.section ?? null;
        }
        let k3 = !1, w3 = 0;
        e: for (; p3 && !(t3 !== null && p3.sectionStartPos >= t3); ) {
          if (p3.pts <= a2) {
            let e5;
            if (this.elementaryStream.canBeTrustedWithKeyPackets) e5 = p3.randomAccessIndicator === 1;
            else {
              o2(g3);
              let t4 = La(g3, !0);
              o2(t4);
              let i4 = new Ha(this.elementaryStream, t4);
              await i4.markNextPacket(), e5 = ((r2 = i4.suppliedPacket) == null ? void 0 : r2.randomAccessIndicator) === 1;
            }
            e5 && (l22 = p3);
          }
          if (p3.pts > a2 && (k3 = !0), k3 && (w3++, w3 > y2)) break;
          let e4 = p3.sectionStartPos + s2.packetStride;
          for (; ; ) {
            let t4 = await s2.readPacketHeader(e4);
            if (!t4) break e;
            if (t4.pid === d22 && t4.payloadUnitStartIndicator === 1) {
              let t5 = await s2.readSection(e4, i3);
              if (t5) {
                let e5 = za(t5, !1);
                if (e5 && e5.pts !== null) {
                  p3 = e5, g3 = t5, Va(this.elementaryStream, p3);
                  break;
                }
              }
            }
            e4 += s2.packetStride;
          }
        }
        if (l22) {
          let e4 = l22;
          if (w3 === 0) e: for (let r3 = 0; r3 < y2; r3++) {
            let t5 = e4.sectionStartPos - s2.packetStride;
            for (; t5 >= s2.packetOffset; ) {
              let r4 = await s2.readPacketHeader(t5);
              if (!r4) break e;
              if (r4.pid === d22 && r4.payloadUnitStartIndicator === 1) {
                let r5 = await s2.readSection(t5, i3);
                if (r5) {
                  let t6 = za(r5, !1);
                  if (t6 && t6.pts !== null) {
                    e4 = t6;
                    break;
                  }
                }
              }
              t5 -= s2.packetStride;
            }
          }
          let t4 = await v2(e4.sectionStartPos, (e5) => e5.pts <= a2 && e5.randomAccessIndicator === 1);
          return o2(t4), t4;
        }
        if (f3) return null;
        t3 = e3, e3 = Math.max($(e3 - m2.sectionStartPos - c22, s2.packetStride) + m2.sectionStartPos, m2.sectionStartPos);
      }
    }
  }
}, Wa = class extends Ua {
  getType() {
    return "video";
  }
  getCodec() {
    return this.elementaryStream.info.codec;
  }
  getCodedWidth() {
    return this.elementaryStream.info.width;
  }
  getCodedHeight() {
    return this.elementaryStream.info.height;
  }
  getSquarePixelWidth() {
    return this.elementaryStream.info.squarePixelWidth;
  }
  getSquarePixelHeight() {
    return this.elementaryStream.info.squarePixelHeight;
  }
  getRotation() {
    return 0;
  }
  async getColorSpace() {
    return this.elementaryStream.info.colorSpace;
  }
  async canBeTransparent() {
    return !1;
  }
  async getDecoderConfig() {
    return o2(this.elementaryStream.info.decoderConfig), this.elementaryStream.info.decoderConfig;
  }
  allPacketsAreKeyPackets() {
    return !1;
  }
  getReorderSize() {
    return this.elementaryStream.info.reorderSize;
  }
}, qa = class extends Ua {
  getType() {
    return "audio";
  }
  getCodec() {
    return this.elementaryStream.info.codec;
  }
  getNumberOfChannels() {
    return this.elementaryStream.info.numberOfChannels;
  }
  getSampleRate() {
    return this.elementaryStream.info.sampleRate;
  }
  async getDecoderConfig() {
    return o2(this.elementaryStream.info.decoderConfig), this.elementaryStream.info.decoderConfig;
  }
  allPacketsAreKeyPackets() {
    return !0;
  }
  getReorderSize() {
    return 0;
  }
}, Va = (e22, t22) => {
  let i2 = e22.referencePesPackets, r2 = A(i2, t22.sectionStartPos, (e3) => e3.sectionStartPos);
  if (r2 >= 0) {
    let a2 = i2[r2];
    if (t22.pts <= a2.pts) return !1;
    let s2 = e22.demuxer.minReferencePointByteDistance;
    if (t22.sectionStartPos - a2.sectionStartPos < s2) return !1;
    if (r2 < i2.length - 1) {
      let e3 = i2[r2 + 1];
      if (e3.pts < t22.pts || e3.sectionStartPos - t22.sectionStartPos < s2) return !1;
    }
  }
  return i2.splice(r2 + 1, 0, t22), !0;
}, Ha = class {
  constructor(e22, t22) {
    this.currentPos = 0, this.pesPackets = [], this.currentPesPacketIndex = 0, this.currentPesPacketPos = 0, this.endPos = 0, this.lastSuppliedPesPacket = null, this.nextPts = null, this.suppliedPacket = null, this.elementaryStream = e22, this.pid = e22.pid, this.demuxer = e22.demuxer, this.startingPesPacket = t22;
  }
  ensureBuffered(e22) {
    let t22 = this.endPos - this.currentPos;
    return t22 >= e22 ? e22 : this.bufferData(e22 - t22).then(() => Math.min(this.endPos - this.currentPos, e22));
  }
  getCurrentPesPacket() {
    let e22 = this.pesPackets[this.currentPesPacketIndex];
    return o2(e22), e22;
  }
  async bufferData(e22) {
    let t22 = this.endPos + e22;
    for (; this.endPos < t22; ) {
      let e3;
      if (this.pesPackets.length === 0) e3 = this.startingPesPacket;
      else {
        let t3 = l2(this.pesPackets).sectionEndPos;
        for (o2(t3 !== null); ; ) {
          let i2 = await this.demuxer.readPacketHeader(t3);
          if (!i2) return;
          if (i2.pid === this.pid) {
            let i3 = await this.demuxer.readSection(t3, !0);
            if (!i3) return;
            let r2 = La(i3, !1);
            if (r2) {
              e3 = r2;
              break;
            }
          }
          t3 += this.demuxer.packetStride;
        }
      }
      this.pesPackets.push(e3), this.endPos += e3.data.byteLength;
    }
  }
  readBytes(e22) {
    let t22 = this.getCurrentPesPacket(), i2 = this.currentPos - this.currentPesPacketPos, r2 = i2 + e22;
    if (this.currentPos += e22, r2 <= t22.data.byteLength) return t22.data.subarray(i2, r2);
    let a2 = new Uint8Array(e22);
    a2.set(t22.data.subarray(i2));
    let s2 = t22.data.byteLength - i2;
    for (; ; ) {
      this.advanceCurrentPacket();
      let t3 = this.getCurrentPesPacket(), i3 = e22 - s2;
      if (i3 <= t3.data.byteLength) {
        a2.set(t3.data.subarray(0, i3), s2);
        break;
      }
      a2.set(t3.data, s2), s2 += t3.data.byteLength;
    }
    return a2;
  }
  readU8() {
    let e22 = this.getCurrentPesPacket(), t22 = this.currentPos - this.currentPesPacketPos;
    return this.currentPos++, t22 < e22.data.byteLength ? e22.data[t22] : (this.advanceCurrentPacket(), e22 = this.getCurrentPesPacket(), e22.data[0]);
  }
  seekTo(e22) {
    if (e22 !== this.currentPos) {
      if (e22 < this.currentPos) for (; e22 < this.currentPesPacketPos; ) {
        this.currentPesPacketIndex--;
        let e3 = this.getCurrentPesPacket();
        this.currentPesPacketPos -= e3.data.byteLength;
      }
      else for (; ; ) {
        let t22 = this.getCurrentPesPacket();
        if (e22 < this.currentPesPacketPos + t22.data.byteLength) break;
        this.currentPesPacketPos += t22.data.byteLength, this.currentPesPacketIndex++;
      }
      this.currentPos = e22;
    }
  }
  skip(e22) {
    this.seekTo(this.currentPos + e22);
  }
  advanceCurrentPacket() {
    this.currentPesPacketPos += this.getCurrentPesPacket().data.byteLength, this.currentPesPacketIndex++;
  }
  async markNextPacket() {
    var e22;
    o2(!this.suppliedPacket);
    let t22 = this.elementaryStream;
    if (t22.info.type === "video") {
      let e3 = t22.info.codec, i2 = 1024;
      if (e3 !== "avc" && e3 !== "hevc") throw new Error("Unhandled.");
      let r2 = e3 === "avc" ? 1 : 2, a2 = null, s2 = !1, n2 = 0;
      for (; ; ) {
        let t3 = this.ensureBuffered(i2);
        if (t3 instanceof Promise && (t3 = await t3), t3 === 0) break;
        let o22 = this.currentPos, c22 = this.readBytes(t3), l22 = c22.byteLength, d22 = 0;
        for (; d22 < l22; ) {
          let t4 = c22.indexOf(0, d22);
          if (t4 === -1 || t4 >= l22) break;
          d22 = t4;
          let i3 = o22 + d22;
          if (d22 + 3 >= l22) {
            this.seekTo(i3);
            break;
          }
          let h22 = c22[d22 + 1], m2 = c22[d22 + 2], f22 = c22[d22 + 3], p22 = 0;
          if (h22 === 0 && m2 === 0 && f22 === 1 ? p22 = 4 : h22 === 0 && m2 === 1 && (p22 = 3), p22 === 0) {
            d22++;
            continue;
          }
          let g2 = i3;
          a2 ?? (a2 = g2);
          let k2 = d22 + p22, w2 = k2 + r2, b2 = 6;
          if (w2 + (e3 === "avc" ? b2 : 1) > l22) {
            this.seekTo(i3);
            break;
          }
          let y2 = c22[k2], v2, T22, S2;
          if (e3 === "avc") v2 = Rt(y2), T22 = v2 === Et.NON_IDR_SLICE || v2 === Et.SLICE_DPA || v2 === Et.IDR, S2 = v2 === Et.SEI || v2 === Et.SPS || v2 === Et.PPS || v2 === Et.AUD;
          else {
            if (v2 = Ht(y2), ((1 & y2) << 5 | c22[k2 + 1] >> 3) > 0) {
              d22 += p22;
              continue;
            }
            T22 = v2 <= _t.RASL_R || v2 >= _t.BLA_W_LP && v2 <= 21, S2 = v2 >= _t.VPS_NUT && v2 <= 37 || v2 === _t.PREFIX_SEI_NUT || v2 >= 41 && v2 <= 44 || v2 >= 48 && v2 <= 55;
          }
          let P2 = !1;
          if (T22) {
            let t5;
            if (e3 === "avc") {
              let e4 = c22.subarray(w2, w2 + b2), i4 = u(new Me(e4));
              t5 = !s2 || i4 <= n2, n2 = i4;
            } else t5 = c22[w2] >> 7 == 1;
            t5 && (s2 ? P2 = !0 : s2 = !0);
          } else S2 && s2 && (P2 = !0);
          if (P2) {
            let e4 = g2 - a2;
            return this.seekTo(a2), this.supplyPacket(e4, 0);
          }
          d22 += p22;
        }
        if (t3 < i2) break;
      }
      if (a2 !== null && this.endPos > a2) {
        let e4 = this.endPos - a2;
        return this.seekTo(a2), this.supplyPacket(e4, 0);
      }
    } else {
      let i2 = t22.info.codec, r2 = 128;
      for (; ; ) {
        let a2 = this.ensureBuffered(r2);
        a2 instanceof Promise && (a2 = await a2);
        let s2 = this.currentPos;
        for (; this.currentPos - s2 < a2; ) {
          let r3 = this.readU8();
          if (i2 === "aac") {
            if (r3 !== 255) continue;
            this.skip(-1);
            let e3 = this.currentPos, i3 = this.ensureBuffered(9);
            if (i3 instanceof Promise && (i3 = await i3), i3 < 9) return;
            let a3 = this.readBytes(9), s3 = xa(Oo.tempFromBytes(a3));
            if (s3) {
              this.seekTo(e3);
              let i4 = this.ensureBuffered(s3.frameLength);
              return i4 instanceof Promise && (i4 = await i4), this.supplyPacket(i4, Math.round(9216e4 / t22.info.sampleRate));
            }
            this.seekTo(e3 + 1);
          } else {
            if (i2 !== "mp3") {
              if (i2 === "ac3") {
                if (r3 !== 11) continue;
                this.skip(-1);
                let e3 = this.currentPos, i3 = this.ensureBuffered(5);
                if (i3 instanceof Promise && (i3 = await i3), i3 < 5) return;
                let a3 = this.readBytes(5);
                if (a3[0] !== 11 || a3[1] !== 119) {
                  this.seekTo(e3 + 1);
                  continue;
                }
                let s3 = a3[4] >> 6, n2 = 63 & a3[4];
                if (s3 === 3 || n2 > 37) {
                  this.seekTo(e3 + 1);
                  continue;
                }
                let c22 = pi[3 * n2 + s3];
                o2(c22 !== void 0), this.seekTo(e3), i3 = this.ensureBuffered(c22), i3 instanceof Promise && (i3 = await i3);
                let l22 = Math.round(13824e4 / t22.info.sampleRate);
                return this.supplyPacket(i3, l22);
              }
              if (i2 === "eac3") {
                if (r3 !== 11) continue;
                this.skip(-1);
                let e3 = this.currentPos, i3 = this.ensureBuffered(5);
                if (i3 instanceof Promise && (i3 = await i3), i3 < 5) return;
                let a3 = this.readBytes(5);
                if (a3[0] !== 11 || a3[1] !== 119) {
                  this.seekTo(e3 + 1);
                  continue;
                }
                let s3 = 2 * (((7 & a3[2]) << 8 | a3[3]) + 1), n2 = a3[4] >> 6 === 3 ? 3 : a3[4] >> 4 & 3, o22 = gi[n2];
                this.seekTo(e3), i3 = this.ensureBuffered(s3), i3 instanceof Promise && (i3 = await i3);
                let c22 = 256 * o22, l22 = Math.round(c22 * Ma / t22.info.sampleRate);
                return this.supplyPacket(i3, l22);
              }
              if (i2 === "dts") {
                if (r3 !== 127 && r3 !== 100) continue;
                this.skip(-1);
                let i3 = this.currentPos, a3 = this.ensureBuffered(18);
                if (a3 instanceof Promise && (a3 = await a3), a3 < 18) return;
                let s3 = this.readBytes(18), n2 = Bi(s3), o22 = n2 ? null : Ai(s3);
                if (!n2 && !o22) {
                  this.seekTo(i3 + 1);
                  continue;
                }
                if (o22 && !o22.asset) {
                  this.seekTo(i3);
                  let e3 = Math.min(o22.frameSize, 4096), t3 = this.ensureBuffered(e3);
                  t3 instanceof Promise && (t3 = await t3), o22 = Ai(this.readBytes(t3)) ?? o22;
                }
                let c22 = n2 ? n2.frameSize : o22.frameSize;
                if (n2) {
                  let e3 = 4 * Math.ceil(n2.frameSize / 4);
                  for (; ; ) {
                    this.seekTo(i3);
                    let t3 = e3 + 10, r4 = this.ensureBuffered(t3);
                    if (r4 instanceof Promise && (r4 = await r4), r4 < t3) break;
                    this.seekTo(i3 + e3);
                    let a4 = Ai(this.readBytes(10));
                    if (!a4) break;
                    e3 += a4.frameSize, c22 = e3;
                  }
                }
                let l22 = n2?.sampleCount ?? ((e22 = o22.asset) == null ? void 0 : e22.sampleCount);
                if (l22 === void 0) {
                  this.seekTo(i3 + 1);
                  continue;
                }
                this.seekTo(i3), a3 = this.ensureBuffered(c22), a3 instanceof Promise && (a3 = await a3);
                let d22 = Math.round(l22 * Ma / t22.info.sampleRate);
                return this.supplyPacket(a3, d22);
              }
              throw new Error("Unhandled.");
            }
            {
              if (r3 !== 255) continue;
              this.skip(-1);
              let e3 = this.currentPos, i3 = this.ensureBuffered(4);
              if (i3 instanceof Promise && (i3 = await i3), i3 < 4) return;
              let a3 = this.readBytes(4), s3 = f2(a3).getUint32(0), n2 = yt(s3, null);
              if (n2.header) {
                this.seekTo(e3);
                let i4 = this.ensureBuffered(n2.header.totalSize);
                i4 instanceof Promise && (i4 = await i4);
                let r4 = n2.header.audioSamplesInFrame * Ma / t22.info.sampleRate;
                return this.supplyPacket(i4, Math.round(r4));
              }
              this.seekTo(e3 + 1);
            }
          }
        }
        if (a2 < r2) break;
      }
    }
  }
  supplyPacket(e22, t22) {
    let i2 = this.getCurrentPesPacket(), r2;
    if (this.lastSuppliedPesPacket === i2) o2(this.nextPts !== null), r2 = this.nextPts;
    else {
      if (i2.pts === null) throw new Error(Ra);
      r2 = i2.pts, Va(this.elementaryStream, i2);
    }
    this.lastSuppliedPesPacket = i2, this.nextPts = r2 + t22;
    let a2 = i2.sectionStartPos, s2 = a2 + (this.currentPos - this.currentPesPacketPos), n2 = this.readBytes(e22), c22 = i2.randomAccessIndicator;
    if (c22 === 0 && !this.elementaryStream.canBeTrustedWithKeyPackets) {
      if (this.elementaryStream.info.type === "audio") c22 = 1;
      else if (this.elementaryStream.info.decoderConfig) {
        let e3 = li(this.elementaryStream.info.codec, this.elementaryStream.info.decoderConfig, n2) === "key";
        c22 = Number(e3);
      }
    }
    this.suppliedPacket = { pts: r2, data: n2, sequenceNumber: s2, sectionStartPos: a2, randomAccessIndicator: c22 }, this.pesPackets.splice(0, this.currentPesPacketIndex), this.currentPesPacketIndex = 0;
  }
}, $a = class {
  constructor(e22, t22) {
    this.decodeOrderPackets = [], this.reorderBuffer = [], this.presentationOrderPackets = [], this.reachedEnd = !1, this.lastDuration = 0, this.backing = e22, this.context = t22, this.reorderSize = e22.getReorderSize(), o2(this.reorderSize >= 0);
  }
  async readNext() {
    if (this.decodeOrderPackets.length === 0 && !await this.readNextPacket())
      return null;
    await this.ensureCurrentPacketHasNext();
    let e22 = this.decodeOrderPackets[0], t22 = this.presentationOrderPackets.indexOf(e22), i2;
    for (o2(t22 !== -1), t22 === this.presentationOrderPackets.length - 1 ? i2 = this.lastDuration : (i2 = this.presentationOrderPackets[t22 + 1].pts - e22.pts, this.lastDuration = i2), this.decodeOrderPackets.shift(); this.presentationOrderPackets.length > 0; ) {
      let e3 = this.presentationOrderPackets[0];
      if (this.decodeOrderPackets.includes(e3)) break;
      this.presentationOrderPackets.shift();
    }
    return { packet: e22, duration: i2 };
  }
  async readNextPacket() {
    if (this.reachedEnd) return !1;
    let e22;
    return this.context.suppliedPacket || await this.context.markNextPacket(), e22 = this.context.suppliedPacket, this.context.suppliedPacket = null, e22 ? (this.decodeOrderPackets.push(e22), this.processPacketThroughReorderBuffer(e22), !0) : (this.reachedEnd = !0, this.flushReorderBuffer(), !1);
  }
  async ensureCurrentPacketHasNext() {
    let e22 = this.decodeOrderPackets[0];
    for (o2(e22); ; ) {
      let t22 = this.presentationOrderPackets.indexOf(e22);
      if (t22 !== -1 && t22 <= this.presentationOrderPackets.length - 2 || !await this.readNextPacket()) break;
    }
  }
  processPacketThroughReorderBuffer(e22) {
    if (this.reorderBuffer.push(e22), this.reorderBuffer.length > this.reorderSize) {
      let e3 = 0;
      for (let i2 = 1; i2 < this.reorderBuffer.length; i2++) this.reorderBuffer[i2].pts < this.reorderBuffer[e3].pts && (e3 = i2);
      let t22 = this.reorderBuffer[e3];
      this.presentationOrderPackets.push(t22), this.reorderBuffer.splice(e3, 1);
    }
  }
  flushReorderBuffer() {
    this.reorderBuffer.sort((e22, t22) => e22.pts - t22.pts), this.presentationOrderPackets.push(...this.reorderBuffer), this.reorderBuffer.length = 0;
  }
};
var ja = "application/vnd.apple.mpegurl", Ka = "#EXT-X-STREAM-INF:", Qa = "#EXT-X-I-FRAME-STREAM-INF:", Ga = "#EXT-X-MEDIA:", Xa = "#EXTINF:", Ya = "#EXT-X-MAP:", Ja = "#EXT-X-KEY:", Za = "#EXT-X-MEDIA-SEQUENCE:", es = "#EXT-X-BYTERANGE:", ts = "#EXT-X-PROGRAM-DATE-TIME:", is = "#EXT-X-TARGETDURATION:", rs = "#EXT-X-PLAYLIST-TYPE:", as = (e22) => e22.length === 0 || e22.startsWith("#") && !e22.startsWith("#EXT"), ss = class {
  constructor(e22) {
    this._attributes = {};
    let t22 = "", i2 = "", r2 = !1, a2 = !1;
    for (let s2 = 0; s2 < e22.length; s2++) {
      let n2 = e22[s2];
      n2 === '"' ? a2 = !a2 : n2 !== "=" || r2 || a2 ? n2 !== "," || a2 ? r2 ? i2 += n2 : t22 += n2 : (t22 && (this._attributes[t22.trim().toLowerCase()] = i2), t22 = "", i2 = "", r2 = !1) : r2 = !0;
    }
    t22 && (this._attributes[t22.trim().toLowerCase()] = i2);
  }
  get(e22) {
    return this._attributes[e22.toLowerCase()] ?? null;
  }
  getAsNumber(e22) {
    let t22 = this.get(e22);
    if (t22 === null) return null;
    let i2 = Number(t22);
    return Number.isFinite(i2) ? i2 : null;
  }
  merge(e22) {
    Object.assign(this._attributes, e22._attributes);
  }
};
var ns = class {
  constructor(e22, t22, i2) {
    this.nextInputCacheAge = 0, this.inputCache = [], this.trackBackingsPromise = null, this.firstSegment = null, this.firstSegmentFirstTimestamps = /* @__PURE__ */ new WeakMap(), this.firstTimestampCache = /* @__PURE__ */ new WeakMap(), this.input = e22, this.path = t22, this.trackDeclarations = i2;
  }
  async getDurationFromMetadata(e22) {
    let t22 = await this.getSegmentAt(1 / 0, { skipLiveWait: e22.skipLiveWait });
    return t22 ? t22.timestamp + t22.duration : null;
  }
  async getUnixTimeForTimestamp(e22) {
    let t22 = await this.getSegmentAt(e22, {});
    if (t22 ?? (t22 = await this.getFirstSegment({})), !t22 || t22.unixEpochTimestamp === null) return null;
    let i2 = e22 - t22.timestamp;
    return t22.unixEpochTimestamp + i2;
  }
  async getTrackBackings() {
    return this.trackBackingsPromise ?? (this.trackBackingsPromise = (async () => {
      let e22 = [];
      if (this.trackDeclarations) {
        for (let t22 of this.trackDeclarations) if (t22.type === "video") {
          let i2 = ge(e22, (e3) => e3.getType() === "video") + 1;
          e22.push(new cs(this, t22, i2));
        } else if (t22.type === "audio") {
          let i2 = ge(e22, (e3) => e3.getType() === "audio") + 1;
          e22.push(new ls(this, t22, i2));
        }
      } else {
        if (this.firstSegment = await this.getFirstSegment({}), !this.firstSegment) return [];
        let t22 = this.getInputForSegment(this.firstSegment), i2 = await t22.getTracks();
        for (let r2 of i2) if (r2.type === "video") {
          let t3 = ge(e22, (e3) => e3.getType() === "video") + 1;
          e22.push(new cs(this, { id: e22.length + 1, type: "video" }, t3));
        } else if (r2.type === "audio") {
          let t3 = ge(e22, (e3) => e3.getType() === "audio") + 1;
          e22.push(new ls(this, { id: e22.length + 1, type: "audio" }, t3));
        }
      }
      return e22;
    })());
  }
  async getFirstTimestampForInput(e22) {
    let t22 = this.firstTimestampCache.get(e22);
    if (t22 !== void 0) return t22;
    let i2 = await e22.getFirstTimestamp();
    return this.firstTimestampCache.set(e22, i2), i2;
  }
  async getMediaOffset(e22, t22) {
    let i2 = e22.firstSegment ?? e22, r2;
    if (this.firstSegmentFirstTimestamps.has(i2)) r2 = this.firstSegmentFirstTimestamps.get(i2);
    else {
      let e3 = this.getInputForSegment(i2);
      r2 = await this.getFirstTimestampForInput(e3), this.firstSegmentFirstTimestamps.set(i2, r2);
    }
    if (i2 === e22) return i2.timestamp - r2;
    let a2 = await this.getFirstTimestampForInput(t22), s2 = e22.timestamp - i2.timestamp, n2 = a2 - r2 - s2;
    return Math.abs(n2) <= Math.min(0.25, s2) ? i2.timestamp - r2 : e22.timestamp - a2;
  }
  dispose() {
    for (let e22 of this.inputCache) e22.input.dispose();
    this.inputCache.length = 0;
  }
}, os = class {
  constructor(e22, t22, i2) {
    this.packetInfos = /* @__PURE__ */ new WeakMap(), this.hydrationPromise = null, this.firstInputTrack = null, this.firstSegment = null, this.segmentedInput = e22, this.decl = t22, this.number = i2;
  }
  hydrate() {
    return this.hydrationPromise ?? (this.hydrationPromise = (async () => {
      var e22;
      if ((e22 = this.segmentedInput).firstSegment ?? (e22.firstSegment = await this.segmentedInput.getFirstSegment({})), !this.segmentedInput.firstSegment) throw new Error("Missing first segment, can't retrieve track.");
      let t22 = this.segmentedInput.firstSegment, i2 = null;
      for (; t22 && (i2 = (await this.segmentedInput.getInputForSegment(t22).getTracks()).find((e4) => e4.type === this.decl.type && e4.number === this.number) ?? null, !i2); )
        t22 = await this.segmentedInput.getNextSegment(t22, {});
      if (!i2) throw new Error("No matching track found in underlying media data.");
      this.firstInputTrack = i2, this.firstSegment = t22;
    })());
  }
  getId() {
    return this.decl.id;
  }
  getType() {
    return this.decl.type;
  }
  getNumber() {
    return this.number;
  }
  delegate(e22) {
    return this.firstInputTrack ? e22() : this.hydrate().then(e22);
  }
  async getDecoderConfig() {
    return this.delegate(() => this.firstInputTrack._backing.getDecoderConfig());
  }
  getHasOnlyKeyPackets() {
    return this.delegate(() => {
      var e22, t22;
      return ((t22 = (e22 = this.firstInputTrack._backing).getHasOnlyKeyPackets) == null ? void 0 : t22.call(e22)) ?? null;
    });
  }
  getPairingMask() {
    return 1n;
  }
  getCodec() {
    return this.delegate(() => this.firstInputTrack._backing.getCodec());
  }
  getInternalCodecId() {
    return this.delegate(() => this.firstInputTrack._backing.getInternalCodecId());
  }
  getDisposition() {
    return this.delegate(() => this.firstInputTrack._backing.getDisposition());
  }
  getLanguageCode() {
    return this.delegate(() => this.firstInputTrack._backing.getLanguageCode());
  }
  getName() {
    return this.delegate(() => this.firstInputTrack._backing.getName());
  }
  getTimeResolution() {
    return this.delegate(() => this.firstInputTrack._backing.getTimeResolution());
  }
  async isRelativeToUnixEpoch() {
    return await this.hydrate(), o2(this.segmentedInput.firstSegment), this.segmentedInput.firstSegment.unixEpochTimestamp === this.segmentedInput.firstSegment.timestamp;
  }
  getUnixTimeForTimestamp(e22) {
    return this.segmentedInput.getUnixTimeForTimestamp(e22);
  }
  getBitrate() {
    return this.delegate(() => this.firstInputTrack._backing.getBitrate());
  }
  getAverageBitrate() {
    return this.delegate(() => this.firstInputTrack._backing.getAverageBitrate());
  }
  getDurationFromMetadata(e22) {
    return this.segmentedInput.getDurationFromMetadata(e22);
  }
  getLiveRefreshInterval() {
    return this.segmentedInput.getLiveRefreshInterval();
  }
  async createAdjustedPacket(e22, t22, i2) {
    o2(e22.sequenceNumber >= 0), o2(this.segmentedInput.firstSegment);
    let r2 = await this.segmentedInput.getMediaOffset(t22, i2.input), a2 = t22.timestamp - this.segmentedInput.firstSegment.timestamp, s2 = e22.clone({ timestamp: H(e22.timestamp + r2, await i2.getTimeResolution()), sequenceNumber: Math.floor(1e8 * a2) + e22.sequenceNumber });
    return this.packetInfos.set(s2, { segment: t22, track: i2, sourcePacket: e22 }), s2;
  }
  async getFirstPacket(e22) {
    await this.hydrate(), o2(this.firstInputTrack), o2(this.firstSegment);
    let t22 = this.firstInputTrack, i2 = this.firstSegment;
    for (; ; ) {
      if (t22) {
        let r3 = await t22._backing.getFirstPacket(e22);
        if (r3) return this.createAdjustedPacket(r3, i2, t22);
      }
      if (i2 = await this.segmentedInput.getNextSegment(i2, { skipLiveWait: e22.skipLiveWait }), !i2) break;
      t22 = (await this.segmentedInput.getInputForSegment(i2).getTracks()).find((e3) => e3.type === this.firstInputTrack.type && e3.number === this.firstInputTrack.number) ?? null;
    }
    return null;
  }
  getNextPacket(e22, t22) {
    return this._getNextInternal(e22, t22, !1);
  }
  getNextKeyPacket(e22, t22) {
    return this._getNextInternal(e22, t22, !0);
  }
  async _getNextInternal(e22, t22, i2) {
    let r2 = this.packetInfos.get(e22);
    if (!r2) throw new Error("Packet was not created from this track.");
    let a2 = i2 ? await r2.track._backing.getNextKeyPacket(r2.sourcePacket, t22) : await r2.track._backing.getNextPacket(r2.sourcePacket, t22);
    if (a2) return this.createAdjustedPacket(a2, r2.segment, r2.track);
    let s2 = r2.segment;
    for (; ; ) {
      let e3 = await this.segmentedInput.getNextSegment(s2, { skipLiveWait: t22.skipLiveWait });
      if (!e3) return null;
      let i3 = this.segmentedInput.getInputForSegment(e3), a3 = (await i3.getTracks()).find((e4) => e4.type === r2.track.type && e4.number === r2.track.number);
      if (!a3) {
        s2 = e3;
        continue;
      }
      let n2 = await a3._backing.getFirstPacket(t22);
      return n2 ? this.createAdjustedPacket(n2, e3, a3) : null;
    }
  }
  getPacket(e22, t22) {
    return this._getPacketInternal(e22, t22, !1);
  }
  getKeyPacket(e22, t22) {
    return this._getPacketInternal(e22, t22, !0);
  }
  async _getPacketInternal(e22, t22, i2) {
    let r2 = await this.segmentedInput.getSegmentAt(e22, { skipLiveWait: t22.skipLiveWait });
    if (!r2) return null;
    for (await this.hydrate(); r2; ) {
      let a2 = this.segmentedInput.getInputForSegment(r2), s2 = (await a2.getTracks()).find((e3) => e3.type === this.firstInputTrack.type && e3.number === this.firstInputTrack.number);
      if (!s2) {
        r2 = await this.segmentedInput.getPreviousSegment(r2, { skipLiveWait: t22.skipLiveWait });
        continue;
      }
      let n2 = e22 - await this.segmentedInput.getMediaOffset(r2, a2), o22 = i2 ? await s2._backing.getKeyPacket(n2, t22) : await s2._backing.getPacket(n2, t22);
      if (o22) return this.createAdjustedPacket(o22, r2, s2);
      r2 = await this.segmentedInput.getPreviousSegment(r2, { skipLiveWait: t22.skipLiveWait });
    }
    return null;
  }
}, cs = class extends os {
  getType() {
    return "video";
  }
  getCodec() {
    return this.delegate(() => this.firstInputTrack._backing.getCodec());
  }
  getCodedWidth() {
    return this.delegate(() => this.firstInputTrack._backing.getCodedWidth());
  }
  getCodedHeight() {
    return this.delegate(() => this.firstInputTrack._backing.getCodedHeight());
  }
  getSquarePixelWidth() {
    return this.delegate(() => this.firstInputTrack._backing.getSquarePixelWidth());
  }
  getSquarePixelHeight() {
    return this.delegate(() => this.firstInputTrack._backing.getSquarePixelHeight());
  }
  getRotation() {
    return this.delegate(() => this.firstInputTrack._backing.getRotation());
  }
  async getColorSpace() {
    return this.delegate(() => this.firstInputTrack._backing.getColorSpace());
  }
  async canBeTransparent() {
    return this.delegate(() => this.firstInputTrack._backing.canBeTransparent());
  }
  async getDecoderConfig() {
    return this.delegate(() => this.firstInputTrack._backing.getDecoderConfig());
  }
}, ls = class extends os {
  getType() {
    return "audio";
  }
  getCodec() {
    return this.delegate(() => this.firstInputTrack._backing.getCodec());
  }
  getNumberOfChannels() {
    return this.delegate(() => this.firstInputTrack._backing.getNumberOfChannels());
  }
  getSampleRate() {
    return this.delegate(() => this.firstInputTrack._backing.getSampleRate());
  }
  async getDecoderConfig() {
    return this.delegate(() => this.firstInputTrack._backing.getDecoderConfig());
  }
};
me();
var ds = 1 / 0;
typeof FinalizationRegistry < "u" && new FinalizationRegistry((e22) => {
  e22();
});
var us = class extends Te {
  constructor() {
    super(), this._disposed = !1, this._refCount = 0, this._usedForHls = !1, this._refFinalizationRegistry = null, this._sizePromise = null, this.onread = null, typeof FinalizationRegistry < "u" && (this._refFinalizationRegistry = new FinalizationRegistry((e22) => {
      e22._decrementRefCount();
    }));
  }
  async getSizeOrNull() {
    if (this._disposed) throw new Ro();
    return this._sizePromise ?? (this._sizePromise = (async () => {
      let e22 = this._getFileSize();
      return e22 !== void 0 || (await this._read(0, 1, 0, ds), e22 = this._getFileSize(), o2(e22 !== void 0)), e22;
    })());
  }
  async getSize() {
    if (this._disposed) throw new Ro();
    let e22 = await this.getSizeOrNull();
    if (e22 === null) throw new Error("Cannot determine the size of an unsized source.");
    return e22;
  }
  slice(e22, t22) {
    if (!Number.isInteger(e22) || e22 < 0) throw new TypeError("offset must be a non-negative integer.");
    if (t22 !== void 0 && (!Number.isInteger(t22) || t22 < 0)) throw new TypeError("length, when provided, must be a non-negative integer.");
    return new ys(this, e22, t22);
  }
  _dispatchRead(e22, t22) {
    var i2;
    (i2 = this.onread) == null || i2.call(this, e22, t22), this._emit("read", { start: e22, end: t22 });
  }
  ref() {
    return new hs(this);
  }
  _incrementRefCount() {
    this._refCount++;
  }
  _decrementRefCount() {
    this._refCount--, this._refCount === 0 && (this._dispose(), this._disposed = !0);
  }
}, hs = class {
  constructor(e22) {
    var t22;
    if (this._freed = !1, e22._disposed) throw new Error("Cannot ref a disposed source.");
    e22._incrementRefCount(), (t22 = e22._refFinalizationRegistry) == null || t22.register(this, e22, this), this._source = e22;
  }
  get source() {
    if (!this._source) throw new Error("Can't get source; ref has already been freed.");
    return this._source;
  }
  get freed() {
    return this._freed;
  }
  free() {
    var e22;
    if (this._freed) throw new Error("Illegal operation: double free on SourceRef.");
    let t22 = this.source;
    o2(t22._refCount > 0), t22._decrementRefCount(), (e22 = t22._refFinalizationRegistry) == null || e22.unregister(this), this._freed = !0, this._source = null;
  }
  [Symbol.dispose]() {
    this.freed || this.free();
  }
}, ms = class extends us {
  constructor(e22, t22) {
    if (typeof e22 != "string") throw new TypeError("rootPath must be a string.");
    if (typeof t22 != "function") throw new TypeError("requestHandler must be a function.");
    super(), this.rootPath = e22, this.requestHandler = t22;
  }
  _resolveRequest(e22) {
    let t22 = this.requestHandler(e22), i2 = (e3) => {
      var t3;
      if (!(e3 instanceof us || e3 instanceof hs)) throw new TypeError("requestHandler must return or resolve to a Source or SourceRef.");
      let i3 = e3 instanceof us ? e3.ref() : e3;
      return (t3 = i3.source)._usedForHls || (t3._usedForHls = this._usedForHls), i3;
    };
    return t22 instanceof Promise ? t22.then(i2) : i2(t22);
  }
}, fs = (e22, t22) => e22.path === t22.path, ps = class extends ms {
  constructor() {
    super(...arguments), this._root = null, this._rootRequest = null;
  }
  _read(e22, t22, i2, r2) {
    if (!this._root) {
      if (!this._rootRequest) {
        let e3 = this._resolveRequest({ path: this.rootPath, isRoot: !0 }), t3 = (e4) => {
          let t4 = e4 instanceof us ? e4.ref() : e4;
          return this._root = t4, this._rootRequest = null, t4;
        };
        e3 instanceof Promise ? this._rootRequest = e3.then(t3) : (t3(e3), o2(this._root));
      }
      if (this._rootRequest) return this._rootRequest.then((a2) => a2.source._read(e22, t22, i2, r2));
    }
    return this._root.source._read(e22, t22, i2, r2);
  }
  _getFileSize() {
    if (this._root) return this._root.source._getFileSize();
  }
  _dispose() {
    this._root ? this._root.free() : this._rootRequest && this._rootRequest.then((e22) => e22.free());
  }
}, gs = class extends us {
  constructor(e22, t22 = {}) {
    if (!(e22 instanceof Blob)) throw new TypeError("blob must be a Blob.");
    if (!t22 || typeof t22 != "object") throw new TypeError("options must be an object.");
    if (t22.maxCacheSize !== void 0 && (!fe(t22.maxCacheSize) || t22.maxCacheSize < 0)) throw new TypeError("options.maxCacheSize, when provided, must be a non-negative number.");
    if (t22.useStreamReader !== void 0 && typeof t22.useStreamReader != "boolean") throw new TypeError("options.useStreamReader, when provided, must be a boolean.");
    super(), this._readers = /* @__PURE__ */ new WeakMap(), this._blob = e22, this._options = t22, this._orchestrator = new bs({ maxCacheSize: t22.maxCacheSize ?? 8388608, maxWorkerCount: 4, runWorker: this._runWorker.bind(this), prefetchProfile: ws.fileSystem }), this._orchestrator.fileSize = e22.size;
  }
  _getFileSize() {
    return this._orchestrator.fileSize;
  }
  _read(e22, t22, i2, r2) {
    return this._orchestrator.read(e22, t22, i2, r2);
  }
  async _runWorker(e22) {
    o2(e22.strictTarget);
    let t22 = this._readers.get(e22);
    for (t22 === void 0 && ("stream" in this._blob && !Z() && this._options.useStreamReader !== !1 ? t22 = this._blob.slice(e22.currentPos).stream().getReader() : t22 = null, this._readers.set(e22, t22)); e22.currentPos < e22.targetPos && !e22.aborted; ) if (t22) {
      let { done: i2, value: r2 } = await t22.read();
      if (i2) throw this._orchestrator.onWorkerFinished(e22), new Error("Blob reader stopped unexpectedly before all requested data was read.");
      if (e22.aborted) break;
      this._dispatchRead(e22.currentPos, e22.currentPos + r2.length), this._orchestrator.supplyWorkerData(e22, r2);
    } else {
      let t3 = await this._blob.slice(e22.currentPos, e22.targetPos).arrayBuffer();
      if (e22.aborted) break;
      this._dispatchRead(e22.currentPos, e22.currentPos + t3.byteLength), this._orchestrator.supplyWorkerData(e22, new Uint8Array(t3));
    }
    this._orchestrator.signalWorkerStoppedRunning(e22), e22.aborted && await t22?.cancel();
  }
  _dispose() {
    this._orchestrator.dispose();
  }
}, ks = class extends us {
  constructor(e22, t22 = {}) {
    if (!(e22 instanceof ReadableStream)) throw new TypeError("stream must be a ReadableStream.");
    if (!t22 || typeof t22 != "object") throw new TypeError("options must be an object.");
    if (t22.maxCacheSize !== void 0 && (!fe(t22.maxCacheSize) || t22.maxCacheSize < 0)) throw new TypeError("options.maxCacheSize, when provided, must be a non-negative number.");
    super(), this._reader = null, this._cache = [], this._pendingSlices = [], this._currentIndex = 0, this._targetIndex = 0, this._maxRequestedIndex = 0, this._endIndex = null, this._pulling = !1, this._cacheMissErrorMessage = "Attempted to read data from an already-evicted part of the cache. With ReadableStreamSource, you must access the data more sequentially or increase the size of its cache.", this._stream = e22, this._maxCacheSize = t22.maxCacheSize ?? 33554432;
  }
  _getFileSize() {
    return this._endIndex;
  }
  _read(e22, t22) {
    if (this._endIndex !== null && t22 > this._endIndex) return null;
    this._maxRequestedIndex = Math.max(this._maxRequestedIndex, t22);
    let i2 = A(this._cache, e22, (e3) => e3.start), r2 = i2 !== -1 ? this._cache[i2] : null;
    if (r2 && r2.start <= e22 && t22 <= r2.end) return { bytes: r2.bytes, view: r2.view, offset: r2.start };
    let a2 = e22, s2 = new Uint8Array(t22 - e22);
    if (i2 !== -1) for (let l22 = i2; l22 < this._cache.length; l22++) {
      let i3 = this._cache[l22];
      if (i3.start >= t22) break;
      let r3 = Math.max(e22, i3.start);
      r3 > a2 && this._throwDueToCacheMiss();
      let n3 = Math.min(t22, i3.end);
      r3 < n3 && (s2.set(i3.bytes.subarray(r3 - i3.start, n3 - i3.start), r3 - e22), a2 = n3);
    }
    if (a2 === t22) return { bytes: s2, view: f2(s2), offset: e22 };
    this._currentIndex > a2 && this._throwDueToCacheMiss();
    let { promise: n2, resolve: o22, reject: c22 } = F2();
    return this._pendingSlices.push({ start: e22, end: t22, bytes: s2, resolve: o22, reject: c22 }), this._targetIndex = Math.max(this._targetIndex, t22), this._pulling || (this._pulling = !0, this._pull().catch((e3) => {
      if (this._pulling = !1, !(this._pendingSlices.length > 0)) throw e3;
      this._pendingSlices.forEach((t3) => t3.reject(e3)), this._pendingSlices.length = 0;
    })), n2;
  }
  _throwDueToCacheMiss() {
    throw new Error(this._cacheMissErrorMessage);
  }
  async _pull() {
    for (this._reader ?? (this._reader = this._stream.getReader()); this._currentIndex < this._targetIndex && !this._disposed; ) {
      let { done: e22, value: t22 } = await this._reader.read();
      if (e22) {
        for (let e3 of this._pendingSlices) e3.resolve(null);
        this._pendingSlices.length = 0, this._endIndex = this._currentIndex;
        break;
      }
      let i2 = this._currentIndex, r2 = this._currentIndex + t22.byteLength;
      this._dispatchRead(i2, r2);
      for (let a2 = 0; a2 < this._pendingSlices.length; a2++) {
        let e3 = this._pendingSlices[a2], s2 = Math.max(i2, e3.start), n2 = Math.min(r2, e3.end);
        s2 < n2 && (e3.bytes.set(t22.subarray(s2 - i2, n2 - i2), s2 - e3.start), n2 === e3.end && (e3.resolve({ bytes: e3.bytes, view: f2(e3.bytes), offset: e3.start }), this._pendingSlices.splice(a2, 1), a2--));
      }
      for (this._cache.push({ start: i2, end: r2, bytes: t22, view: f2(t22), age: 0 }); this._cache.length > 0; ) {
        let e3 = this._cache[0];
        if (this._maxRequestedIndex - e3.end <= this._maxCacheSize) break;
        this._cache.shift();
      }
      this._currentIndex += t22.byteLength;
    }
    this._pulling = !1;
  }
  _dispose() {
    var e22;
    for (let t22 of this._pendingSlices) t22.reject(new Ro());
    this._pendingSlices.length = 0, this._cache.length = 0, (e22 = this._reader) == null || e22.cancel();
  }
}, ws = { fileSystem: (e22, t22) => ({ start: e22 = Math.floor((e22 - 65536) / 65536) * 65536, end: t22 = Math.ceil((t22 + 65536) / 65536) * 65536 }) }, bs = class {
  constructor(e22) {
    this.options = e22, this.fileSize = null, this.nextAge = 0, this.workers = [], this.cache = [], this.currentCacheSize = 0, this.disposed = !1, this.queuedReads = [];
  }
  read(e22, t22, i2, r2) {
    o2(!this.disposed);
    let a2 = this.options.prefetchProfile(e22, t22, this.workers), s2 = Math.max(a2.start, i2), n2 = Math.min(a2.end, this.fileSize ?? 1 / 0, r2);
    o2(s2 <= e22 && t22 <= n2);
    let c22 = null, l22 = A(this.cache, e22, (e3) => e3.start), d22 = l22 !== -1 ? this.cache[l22] : null;
    d22 && d22.start <= e22 && t22 <= d22.end && (d22.age = this.nextAge++, c22 = { bytes: d22.bytes, view: d22.view, offset: d22.start });
    let u2 = A(this.cache, s2, (e3) => e3.start), h22 = c22 ? null : new Uint8Array(t22 - e22), m2 = 0, p22 = s2, g2 = [];
    if (u2 !== -1) {
      for (let i3 = u2; i3 < this.cache.length; i3++) {
        let r3 = this.cache[i3];
        if (r3.start >= n2) break;
        if (r3.end <= s2) continue;
        let a3 = Math.max(s2, r3.start), c3 = Math.min(n2, r3.end);
        if (o2(a3 <= c3), p22 < a3 && g2.push({ start: p22, end: a3 }), p22 = c3, h22) {
          let i4 = Math.max(e22, r3.start), a4 = Math.min(t22, r3.end);
          if (i4 < a4) {
            let t3 = i4 - e22;
            h22.set(r3.bytes.subarray(i4 - r3.start, a4 - r3.start), t3), t3 === m2 && (m2 = a4 - e22);
          }
        }
        r3.age = this.nextAge++;
      }
      p22 < n2 && g2.push({ start: p22, end: n2 });
    } else g2.push({ start: s2, end: n2 });
    if (h22 && m2 >= h22.length && (c22 = { bytes: h22, view: f2(h22), offset: e22 }), g2.length === 0) return o2(c22), c22;
    let { promise: k2, resolve: w2, reject: b2 } = F2(), y2 = [];
    for (let o22 of g2) {
      let i3 = Math.max(e22, o22.start), r3 = Math.min(t22, o22.end);
      i3 === o22.start && r3 === o22.end ? y2.push(o22) : i3 < r3 && y2.push({ start: i3, end: r3 });
    }
    let v2 = h22 && { start: e22, bytes: h22, holes: y2, resolve: w2, reject: b2 };
    e: for (let o22 of g2) {
      for (let i3 of this.workers)
        if (this.checkHoleAgainstWorker(i3, o22, v2 ? [v2] : [])) {
          this.checkQueuedReadsAgainstWorker(i3);
          continue e;
        }
      let e3 = o22.end < n2 || this.fileSize !== null, t3 = this.createWorker(o22.start, o22.end, e3);
      if (t3) v2 && (t3.pendingSlices = [v2]), this.runWorker(t3);
      else {
        let t4 = A(this.queuedReads, o22.start, (e4) => e4.hole.start), i3 = t4 !== -1 ? this.queuedReads[t4] : null;
        for (i3 && o22.start <= i3.hole.end ? (i3.hole.end = Math.max(i3.hole.end, o22.end), i3.strictTarget && (i3.strictTarget = e3), v2 && i3.pendingSlices.push(v2)) : (t4++, i3 = { hole: { start: o22.start, end: o22.end }, strictTarget: e3, pendingSlices: v2 ? [v2] : [], age: this.nextAge++ }, this.queuedReads.splice(t4, 0, i3)); t4 + 1 < this.queuedReads.length; ) {
          let e4 = this.queuedReads[t4 + 1];
          if (e4.hole.start > i3.hole.end) break;
          i3.hole.end = Math.max(i3.hole.end, e4.hole.end), i3.pendingSlices.push(...e4.pendingSlices), i3.strictTarget && (i3.strictTarget = e4.strictTarget), i3.age = Math.min(i3.age, e4.age), this.queuedReads.splice(t4 + 1, 1);
        }
      }
    }
    return c22 ? k2.catch((e3) => {
      if (!this.disposed) throw e3;
    }) : (o2(h22), c22 = k2.then((t3) => t3 && { bytes: t3, view: f2(t3), offset: e22 })), c22;
  }
  checkHoleAgainstWorker(e22, t22, i2) {
    if (ce(t22.start - 2 ** 17, t22.start, e22.currentPos, e22.targetPos)) {
      e22.targetPos = Math.max(e22.targetPos, t22.end);
      for (let t3 = 0; t3 < i2.length; t3++) {
        let r2 = i2[t3];
        e22.pendingSlices.includes(r2) || e22.pendingSlices.push(r2);
      }
      return e22.running || this.runWorker(e22), !0;
    }
    return !1;
  }
  checkQueuedReadsAgainstWorker(e22) {
    let t22 = !1;
    for (let i2 = 0; i2 < this.queuedReads.length; i2++) {
      let r2 = this.queuedReads[i2];
      if (this.checkHoleAgainstWorker(e22, r2.hole, r2.pendingSlices)) this.queuedReads.splice(i2, 1), i2--, t22 = !0;
      else if (t22) break;
    }
  }
  createWorker(e22, t22, i2) {
    if (this.workers.length >= this.options.maxWorkerCount) {
      let e3 = null, t3 = null;
      for (let i3 = 0; i3 < this.workers.length; i3++) {
        let r3 = this.workers[i3];
        r3.running || r3.pendingSlices.length !== 0 || e3 && !(r3.age < e3.age) || (t3 = i3, e3 = r3);
      }
      if (!e3) return null;
      o2(t3 !== null), o2(e3.pendingSlices.length === 0), this.workers.splice(t3, 1);
    }
    let r2 = { startPos: e22, currentPos: e22, targetPos: t22, strictTarget: i2, running: !1, aborted: this.disposed, pendingSlices: [], age: this.nextAge++ };
    return this.workers.push(r2), r2;
  }
  runWorker(e22) {
    o2(!e22.running), o2(e22.currentPos < e22.targetPos), e22.running = !0, e22.age = this.nextAge++, this.options.runWorker(e22).catch((t22) => {
      if (e22.running = !1, e22.pendingSlices.length > 0) e22.pendingSlices.forEach((e3) => e3.reject(t22)), e22.pendingSlices.length = 0;
      else if (!e22.aborted && !this.disposed) throw t22;
    }).finally(() => {
      if (!e22.running && this.queuedReads.length > 0) {
        let e3 = 0;
        for (let r2 = 1; r2 < this.queuedReads.length; r2++)
          this.queuedReads[r2].age < this.queuedReads[e3].age && (e3 = r2);
        let t22 = this.queuedReads[e3], i2 = this.createWorker(t22.hole.start, t22.hole.end, t22.strictTarget);
        if (!i2) return;
        this.queuedReads.splice(e3, 1), i2.pendingSlices = t22.pendingSlices, this.runWorker(i2);
      }
    });
  }
  supplyWorkerData(e22, t22) {
    o2(!e22.aborted);
    let i2 = e22.currentPos, r2 = i2 + t22.length;
    this.insertIntoCache({ start: i2, end: r2, bytes: t22, view: f2(t22), age: this.nextAge++ }), e22.currentPos += t22.length, e22.currentPos > e22.targetPos && (e22.targetPos = e22.currentPos, this.checkQueuedReadsAgainstWorker(e22));
    for (let a2 = 0; a2 < e22.pendingSlices.length; a2++) {
      let s2 = e22.pendingSlices[a2], n2 = Math.max(i2, s2.start), o22 = Math.min(r2, s2.start + s2.bytes.length);
      n2 < o22 && s2.bytes.set(t22.subarray(n2 - i2, o22 - i2), n2 - s2.start);
      for (let e3 = 0; e3 < s2.holes.length; e3++) {
        let t3 = s2.holes[e3];
        i2 <= t3.start && r2 > t3.start && (t3.start = r2), t3.end <= t3.start && (s2.holes.splice(e3, 1), e3--);
      }
      s2.holes.length === 0 && (s2.resolve(s2.bytes), e22.pendingSlices.splice(a2, 1), a2--);
    }
    for (let a2 = 0; a2 < this.workers.length; a2++) {
      let t3 = this.workers[a2];
      e22 === t3 || t3.running || ce(i2, r2, t3.currentPos, t3.targetPos) && (this.workers.splice(a2, 1), a2--);
    }
  }
  supplyFileSize(e22) {
    o2(this.fileSize === null), this.fileSize = e22;
    for (let t22 of this.workers) {
      t22.targetPos = Math.min(t22.targetPos, e22), t22.strictTarget = !0;
      for (let i2 = 0; i2 < t22.pendingSlices.length; i2++) {
        let r2 = t22.pendingSlices[i2];
        for (let a2 of r2.holes) if (a2.end > e22) {
          r2.resolve(null), t22.pendingSlices.splice(i2, 1), i2--;
          break;
        }
      }
    }
    for (let t22 = 0; t22 < this.queuedReads.length; t22++) {
      let i2 = this.queuedReads[t22];
      if (i2.hole.start >= e22) {
        for (let e3 of i2.pendingSlices) e3.resolve(null);
        this.queuedReads.splice(t22, 1), t22--;
      } else if (i2.hole.end > e22) {
        i2.hole.end = e22, i2.strictTarget = !0;
        for (let t3 = 0; t3 < i2.pendingSlices.length; t3++) {
          let r2 = i2.pendingSlices[t3];
          r2.start >= e22 && (r2.resolve(null), i2.pendingSlices.splice(t3, 1), t3--);
        }
      }
    }
  }
  signalWorkerStoppedRunning(e22) {
    e22.running = !1, e22.aborted || (e22.pendingSlices.length = 0);
  }
  onWorkerFinished(e22) {
    let t22 = this.workers.indexOf(e22);
    o2(t22 !== -1), e22.running = !1, this.workers.splice(t22, 1), this.fileSize === null && this.supplyFileSize(e22.currentPos);
    for (let i2 of e22.pendingSlices) i2.resolve(null);
  }
  insertIntoCache(e22) {
    if (this.options.maxCacheSize === 0) return;
    let t22 = A(this.cache, e22.start, (e3) => e3.start) + 1;
    if (t22 > 0) {
      let i2 = this.cache[t22 - 1];
      if (i2.end >= e22.end) return;
      if (i2.end > e22.start) {
        let r2 = new Uint8Array(e22.end - i2.start);
        r2.set(i2.bytes, 0), r2.set(e22.bytes, e22.start - i2.start), this.currentCacheSize += e22.end - i2.end, i2.bytes = r2, i2.view = f2(r2), i2.end = e22.end, t22--, e22 = i2;
      } else this.cache.splice(t22, 0, e22), this.currentCacheSize += e22.bytes.length;
    } else this.cache.splice(t22, 0, e22), this.currentCacheSize += e22.bytes.length;
    for (let i2 = t22 + 1; i2 < this.cache.length; i2++) {
      let t3 = this.cache[i2];
      if (e22.end <= t3.start) break;
      if (e22.end >= t3.end) {
        this.cache.splice(i2, 1), this.currentCacheSize -= t3.bytes.length, i2--;
        continue;
      }
      let r2 = new Uint8Array(t3.end - e22.start);
      r2.set(e22.bytes, 0), r2.set(t3.bytes, t3.start - e22.start), this.currentCacheSize -= e22.end - t3.start, e22.bytes = r2, e22.view = f2(r2), e22.end = t3.end, this.cache.splice(i2, 1);
      break;
    }
    for (; this.currentCacheSize > this.options.maxCacheSize; ) {
      let e3 = 0, t3 = this.cache[0];
      for (let i2 = 1; i2 < this.cache.length; i2++) {
        let r2 = this.cache[i2];
        r2.age < t3.age && (e3 = i2, t3 = r2);
      }
      if (this.currentCacheSize - t3.bytes.length <= this.options.maxCacheSize) break;
      this.cache.splice(e3, 1), this.currentCacheSize -= t3.bytes.length;
    }
  }
  dispose() {
    for (let e22 of this.workers) {
      for (let t22 of e22.pendingSlices) t22.reject(new Ro());
      e22.pendingSlices.length = 0, e22.aborted = !0;
    }
    for (let e22 of this.queuedReads) for (let t22 of e22.pendingSlices) t22.reject(new Ro());
    this.workers.length = 0, this.cache.length = 0, this.queuedReads.length = 0, this.disposed = !0;
  }
}, ys = class extends us {
  constructor(e22, t22, i2) {
    if (super(), this._ref = null, e22._disposed) throw new Error("Cannot create a slice of a disposed source.");
    this._baseSource = e22, this._offset = t22, this._length = i2 ?? null;
  }
  _getFileSize() {
    let e22 = this._baseSource._getFileSize();
    return e22 === void 0 ? this._length !== null ? this._length : void 0 : e22 === null ? this._length !== null ? this._length : null : U(e22 - this._offset, 0, this._length ?? 1 / 0);
  }
  _read(e22, t22, i2, r2) {
    if (this._length !== null && t22 > this._length) return null;
    let a2 = this._baseSource._read(this._offset + e22, this._offset + t22, this._offset + i2, this._offset + r2), s2 = (e3) => e3 ? (e3.offset -= this._offset, e3) : null;
    return a2 instanceof Promise ? a2.then(s2) : s2(a2);
  }
  _dispose() {
    var e22;
    (e22 = this._ref) == null || e22.free();
  }
  ref() {
    return this._ref ?? (this._ref = this._baseSource.ref()), super.ref();
  }
};
var vs = function(e22, t22, i2) {
  if (t22 != null) {
    if (typeof t22 != "object" && typeof t22 != "function") throw new TypeError("Object expected.");
    var r2, a2;
    if (i2) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      r2 = t22[Symbol.asyncDispose];
    }
    if (r2 === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      r2 = t22[Symbol.dispose], i2 && (a2 = r2);
    }
    if (typeof r2 != "function") throw new TypeError("Object not disposable.");
    a2 && (r2 = function() {
      try {
        a2.call(this);
      } catch (e3) {
        return Promise.reject(e3);
      }
    }), e22.stack.push({ value: t22, dispose: r2, async: i2 });
  } else i2 && e22.stack.push({ async: !0 });
  return t22;
}, Ts = /* @__PURE__ */ (function(e22) {
  return function(t22) {
    function i2(i3) {
      t22.error = t22.hasError ? new e22(i3, t22.error, "An error was suppressed during disposal.") : i3, t22.hasError = !0;
    }
    var r2, a2 = 0;
    return (function e3() {
      for (; r2 = t22.stack.pop(); ) try {
        if (!r2.async && a2 === 1) return a2 = 0, t22.stack.push(r2), Promise.resolve().then(e3);
        if (r2.dispose) {
          var s2 = r2.dispose.call(r2.value);
          if (r2.async) return a2 |= 2, Promise.resolve(s2).then(e3, function(t3) {
            return i2(t3), e3();
          });
        } else a2 |= 1;
      } catch (n2) {
        i2(n2);
      }
      if (a2 === 1) return t22.hasError ? Promise.reject(t22.error) : Promise.resolve();
      if (t22.hasError) throw t22.error;
    })();
  };
})(typeof SuppressedError == "function" ? SuppressedError : function(e22, t22, i2) {
  var r2 = new Error(i2);
  return r2.name = "SuppressedError", r2.error = e22, r2.suppressed = t22, r2;
}), Ss = /^0[xX][0-9a-fA-F]+$/, Ps = /^data:.*;base64,/i, Cs = class extends ns {
  constructor(e22, t22, i2, r2) {
    super(e22.input, t22, i2), this.segments = [], this.nextLines = null, this.currentUpdateSegmentsPromise = null, this.streamHasEnded = !1, this.lastSegmentUpdateTime = -1 / 0, this.refreshInterval = 5, this.rootPath = t22, this.demuxer = e22, this.nextLines = r2;
  }
  runUpdateSegments() {
    return this.currentUpdateSegmentsPromise ?? (this.currentUpdateSegmentsPromise = (async () => {
      try {
        let e22 = this.getRemainingWaitTimeMs();
        e22 > 0 && await ye(e22), this.lastSegmentUpdateTime = performance.now(), await this.updateSegments();
      } finally {
        this.currentUpdateSegmentsPromise = null;
      }
    })());
  }
  getRemainingWaitTimeMs() {
    let e22 = performance.now() - this.lastSegmentUpdateTime, t22 = Math.max(0, 1e3 * this.refreshInterval - e22);
    return t22 <= 50 ? 0 : t22;
  }
  async updateSegments() {
    var e22;
    let t22 = this.nextLines;
    if (this.nextLines = null, !t22) {
      let e3 = { stack: [], error: void 0, hasError: !1 };
      try {
        let i3 = vs(e3, await this.demuxer.input._getSourceUncached({ path: this.rootPath, isRoot: !1 }), !1), r3 = new Do(i3.source), a3 = await r3.requestEntireFile();
        o2(a3), t22 = tc(a3, a3.length, { ignore: as }), i3.source instanceof ms && (this.rootPath = i3.source.rootPath);
      } catch (T22) {
        e3.error = T22, e3.hasError = !0;
      } finally {
        Ts(e3);
      }
    }
    let i2 = ((e22 = this.input._formatOptions.hls) == null ? void 0 : e22.offsetTimestampsByDateTime) !== !1, r2 = !1, a2 = 0, s2 = null, n2 = null, c22 = null, d22 = 0, u2 = null, h22 = null, m2 = null, p22 = null, g2 = null, k2 = null, w2 = !1, b2 = l2(this.segments) ?? null, y2 = (e3) => {
      let t3 = e3.indexOf("@"), i3 = Number(t3 === -1 ? e3 : e3.slice(0, t3));
      if (!Number.isInteger(i3) || i3 < 0) throw new Error(`Invalid #EXT-X-BYTERANGE length '${e3}'.`);
      let r3 = null;
      if (t3 !== -1 && (r3 = Number(e3.slice(t3 + 1)), !Number.isInteger(r3) || r3 < 0)) throw new Error(`Invalid #EXT-X-BYTERANGE offset '${e3}'.`);
      return { length: i3, offset: r3 };
    }, v2 = (e3) => {
      d22 = e3, b2 && (o2(b2.sequenceNumber !== null), b2.sequenceNumber < e3 && (a2 = b2.timestamp + b2.duration, u2 = b2.firstSegment, h22 = b2.initSegment, g2 = b2.lastProgramDateTimeSeconds, s2 = b2.unixEpochTimestamp !== null ? b2.unixEpochTimestamp + b2.duration : null, b2 = null));
    };
    for (let o22 = 0; o22 < t22.length; o22++) {
      let e3 = t22[o22];
      if (r2) {
        if (!e3.startsWith("#")) {
          if (!b2) {
            if (n2 === null) throw new Error("Invalid M3U8 file; a segment must be preceded by an #EXTINF tag.");
            let t3 = c22;
            if (t3 && t3.method === "AES-128" && !t3.iv) {
              let e4 = new Uint8Array(Ki), i4 = f2(e4);
              i4.setUint32(8, Math.floor(d22 / 2 ** 32)), i4.setUint32(12, d22), t3 = { ...t3, iv: e4 };
            }
            let i3 = { path: pe(this.rootPath, e3), offset: p22?.offset ?? 0, length: p22?.length ?? null }, r3 = { timestamp: a2, unixEpochTimestamp: s2, firstSegment: u2, sequenceNumber: d22, location: i3, duration: n2, encryption: t3, initSegment: h22, lastProgramDateTimeSeconds: g2 };
            u2 ?? (u2 = r3), a2 += n2, s2 !== null && (s2 += n2), this.segments.push(r3);
          }
          n2 = null, p22 === null ? m2 = null : p22 = null, v2(d22 + 1);
        }
        if (e3.startsWith(Xa)) {
          if (b2) {
            w2 = !0;
            continue;
          }
          w2 || (g2 === null && d22 > 0 && k2 !== null && (a2 = d22 * k2), w2 = !0);
          let t3 = e3.slice(8), i3 = t3.indexOf(","), r3 = i3 === -1 ? t3 : t3.slice(0, i3), s3 = Number(r3);
          if (!Number.isFinite(s3) || s3 < 0) throw new Error(`Invalid #EXTINF tag duration '${r3}'.`);
          n2 = s3;
        } else if (e3.startsWith(Ya)) {
          let t3 = new ss(e3.slice(11)), i3 = t3.get("uri");
          if (!i3) throw new Error("Invalid #EXT-X-MAP tag; missing URI attribute.");
          let r3 = t3.get("byterange"), o3 = null;
          if (r3 !== null && (o3 = y2(r3)), o3 && o3.offset === null) throw new Error("Invalid #EXT-X-MAP tag; BYTERANGE attribute must have a specified offset.");
          if (!b2) {
            let e4 = { path: pe(this.rootPath, i3), offset: o3?.offset ?? 0, length: o3?.length ?? null };
            if (c22?.method === "AES-128" && !c22.iv) throw new Error("IV attribute must be set on #EXT-X-KEY tag preceding the #EXT-X-MAP tag.");
            h22 = { timestamp: a2, unixEpochTimestamp: s2, firstSegment: null, sequenceNumber: null, location: e4, duration: 0, encryption: c22, initSegment: null, lastProgramDateTimeSeconds: g2 };
          }
          n2 = null, p22 === null ? m2 = null : p22 = null;
        } else if (e3.startsWith(Ja)) {
          let t3 = new ss(e3.slice(11)), i3 = t3.get("method");
          if (i3 === "NONE") c22 = null;
          else if (i3 === "AES-128") {
            let e4 = t3.get("uri");
            if (!e4) throw new Error("Invalid #EXT-X-KEY: AES-128 requires a URI attribute.");
            let i4 = null, r3 = t3.get("iv");
            if (r3) {
              if (!Ss.test(r3)) throw new Error(`Unsupported IV format '${r3}'.`);
              let e5 = r3.slice(2);
              e5 = e5.padStart(32, "0"), i4 = new Uint8Array(Ki);
              for (let t4 = 0; t4 < Ki; t4++) {
                let r4 = -32 + t4;
                i4[t4] = parseInt(e5.slice(r4, r4 + 2), 16);
              }
            }
            let a3 = t3.get("keyformat") ?? "identity";
            if (a3 !== "identity") throw new Error("For AES-128 encryption, only the 'identity' KEYFORMAT is currently supported. If you think other formats should be supported, please raise an issue.");
            c22 = { method: "AES-128", keyUri: pe(this.rootPath, e4), iv: i4, keyFormat: a3 };
          } else {
            if (i3 !== "SAMPLE-AES" && i3 !== "SAMPLE-AES-CTR") throw new Error(`Unsupported encryption method '${i3}'. If you think this method should be supported, please raise an issue.`);
            {
              let e4 = t3.get("uri");
              if (!e4) throw new Error(`Invalid #EXT-X-KEY: ${i3} requires a URI attribute.`);
              if ((t3.get("keyformat") ?? "identity") === "identity") throw new Error("For SAMPLE-AES and SAMPLE-AES-CTR encryption, the 'identity' KEYFORMAT is not supported. If you think this format should be supported, please raise an issue.");
              let r3 = null;
              if (Ps.test(e4)) {
                let t4 = e4.indexOf(","), i4 = ue(e4.slice(t4 + 1));
                if (i4.length >= 8 && i4[4] === 112 && i4[5] === 115 && i4[6] === 115 && i4[7] === 104) {
                  let e5 = f2(i4).getUint32(0);
                  r3 = zi(i4.subarray(8, Math.min(e5, i4.length)));
                }
              }
              c22 = { method: i3, psshBox: r3 };
            }
          }
        } else if (e3.startsWith(Za)) {
          let t3 = e3.slice(22), i3 = Number(t3);
          if (!Number.isInteger(i3) || i3 < 0) throw new Error(`Invalid EXT-X-MEDIA-SEQUENCE value '${t3}'.`);
          v2(i3);
        } else if (e3.startsWith(es)) {
          let t3 = y2(e3.slice(17));
          if (t3.offset === null) {
            if (m2 === null) throw new Error("Invalid M3U8 file; #EXT-X-BYTERANGE without offset requires a previous byte range.");
            t3.offset = m2;
          }
          p22 = t3, m2 = t3.offset + t3.length;
        } else if (e3.startsWith(ts)) {
          if (b2) continue;
          let t3 = e3.slice(25), r3 = Date.parse(t3);
          if (!Number.isFinite(r3)) continue;
          let n3 = r3 / 1e3;
          if (g2 === n3) continue;
          if (g2 === null && this.segments.length > 0) {
            let e4 = l2(this.segments), t4 = n3 - (e4.timestamp + e4.duration);
            for (let r4 of this.segments) r4.unixEpochTimestamp = r4.timestamp + t4, i2 && (r4.timestamp = r4.unixEpochTimestamp);
          }
          g2 = n3, s2 = n3, i2 && (a2 = n3);
        } else if (e3 === "#EXT-X-DISCONTINUITY") u2 = null;
        else if (e3.startsWith(is)) {
          let t3 = e3.slice(22), i3 = Number(t3);
          if (!Number.isFinite(i3) || i3 < 0) throw new Error(`Invalid EXT-X-TARGETDURATION value '${t3}'.`);
          this.refreshInterval = i3, k2 = i3;
        } else {
          if (e3 === "#EXT-X-ENDLIST") {
            this.streamHasEnded = !0;
            break;
          }
          e3.startsWith(rs) && e3.slice(21).toLowerCase() === "vod" && (this.streamHasEnded = !0);
        }
      } else {
        if (e3 !== "#EXTM3U") throw new Error("Invalid M3U8 file; expected first line to be #EXTM3U.");
        r2 = !0;
      }
    }
    if (!r2) throw new Error("Invalid M3U8 file; no #EXTM3U header.");
  }
  async getFirstSegment() {
    return this.segments.length === 0 && await this.runUpdateSegments(), this.segments[0] ?? null;
  }
  async getSegmentAt(e22, t22) {
    this.segments.length === 0 && await this.runUpdateSegments();
    let i2 = !!t22.skipLiveWait && this.getRemainingWaitTimeMs() > 0;
    for (; ; ) {
      let r2 = A(this.segments, e22, (e3) => e3.timestamp);
      if (r2 === -1) return null;
      if (r2 < this.segments.length - 1 || this.streamHasEnded || i2) return this.segments[r2];
      let a2 = this.segments[r2];
      if (e22 < a2.timestamp + a2.duration) return a2;
      await this.runUpdateSegments(), t22.skipLiveWait && (i2 = !0);
    }
  }
  async getNextSegment(e22, t22) {
    let i2 = this.segments.indexOf(e22);
    o2(i2 !== -1);
    let r2 = i2 + 1, a2 = !!t22.skipLiveWait && this.getRemainingWaitTimeMs() > 0;
    for (; ; ) {
      if (r2 < this.segments.length) return this.segments[r2];
      if (this.streamHasEnded || a2) return null;
      await this.runUpdateSegments(), t22.skipLiveWait && (a2 = !0);
    }
  }
  async getPreviousSegment(e22) {
    let t22 = this.segments.indexOf(e22);
    return o2(t22 !== -1), this.segments[t22 - 1] ?? null;
  }
  getInputForSegment(e22) {
    var t22;
    let i2 = e22, r2 = this.inputCache.find((e3) => e3.segment === i2);
    if (r2) return r2.age = this.nextInputCacheAge++, r2.input;
    let a2 = null;
    (i2.initSegment || i2.firstSegment) && (a2 = this.getInputForSegment(i2.initSegment ?? i2.firstSegment));
    let s2 = { ...this.input._formatOptions, isobmff: { ...this.input._formatOptions.isobmff, resolveKeyId: ((t22 = this.input._formatOptions.isobmff) == null ? void 0 : t22.resolveKeyId) && ((e3) => {
      if (!i2.encryption || i2.encryption.method !== "SAMPLE-AES" && i2.encryption.method !== "SAMPLE-AES-CTR" || !i2.encryption.psshBox) return this.input._formatOptions.isobmff.resolveKeyId(e3);
      let t3 = e3.psshBoxes, { psshBox: r3 } = i2.encryption;
      return r3.keyIds !== null && !r3.keyIds.includes(e3.keyId) || t3.some((e4) => Li(e4, r3)) || (t3 = [...t3, r3]), this.input._formatOptions.isobmff.resolveKeyId({ ...e3, psshBoxes: t3 });
    }) } }, n2 = new Mo({ source: new ps(i2.location.path, async (e3) => {
      o2(e3.isRoot);
      let t3 = { ...e3, isRoot: !1 }, r3, a3 = i2.location.offset > 0 || i2.location.length !== null;
      if (i2.encryption && i2.encryption.method !== "SAMPLE-AES" && i2.encryption.method !== "SAMPLE-AES-CTR") if (i2.encryption.method === "AES-128") {
        let e4 = i2.encryption;
        o2(e4.iv);
        let s3 = await this.input._getSourceCached(t3);
        if (a3) {
          let e5 = s3.source.slice(i2.location.offset, i2.location.length ?? void 0).ref();
          s3.free(), s3 = e5;
        }
        let n3 = ((e5, t4, i3) => {
          let r4 = !1, a4 = 0, s4 = new ir();
          return new ReadableStream({ pull: async (n4) => {
            r4 || (s4.init(await t4()), r4 = !0);
            let o22 = e5.requestSliceRange(a4, 0, 65552);
            if (o22 instanceof Promise && (o22 = await o22), !o22 || o22.length === 0) throw new Error("Invalid ciphertext.");
            let c22 = o22.length;
            if (c22 % 16 != 0) throw new Error("Invalid ciphertext.");
            let l22 = c22 === 65552 ? c22 - 16 : c22, d22 = zo(o22, l22), u2 = new Uint8Array(l22);
            for (let e6 = 0; e6 < l22; e6 += 16) s4.in.set(d22.subarray(e6, e6 + 16)), s4.decrypt(), u2.set(s4.out, e6);
            if (l22 < c22) n4.enqueue(u2), a4 += l22;
            else {
              let e6 = u2[l22 - 1];
              if (e6 === 0 || e6 > 16) throw new Error("Invalid PKCS#7 padding. Incorrect key or corrupted data.");
              let t5 = u2.subarray(0, l22 - e6);
              n4.enqueue(t5), n4.close(), i3();
            }
          }, cancel: () => {
            i3();
          } });
        })(new Do(s3.source), async () => {
          let t4 = { stack: [], error: void 0, hasError: !1 };
          try {
            let i3 = vs(t4, await this.input._getSourceCached({ path: e4.keyUri, isRoot: !1 }, Ao), !1), r4 = new Do(i3.source), a4 = await r4.requestSlice(0, Ki);
            if (!a4) throw new Error("Invalid AES-128 key; expected at least 16 bytes of data.");
            return { key: zo(a4, Ki), iv: e4.iv };
          } catch (i3) {
            t4.error = i3, t4.hasError = !0;
          } finally {
            Ts(t4);
          }
        }, () => {
          s3.free();
        });
        r3 = new ks(n3).ref();
      } else o2(!1);
      else if (r3 = await this.input._getSourceCached(t3), a3) {
        let e4 = r3.source.slice(i2.location.offset, i2.location.length ?? void 0).ref();
        r3.free(), r3 = e4;
      }
      return r3;
    }), formats: this.input._formats.filter((e3) => !(e3 instanceof $s)), initInput: a2 ?? void 0, formatOptions: s2 });
    if (n2._onFormatDetermined = (e3) => {
      var t3, r3;
      if ((((t3 = i2.encryption) == null ? void 0 : t3.method) === "SAMPLE-AES" || ((r3 = i2.encryption) == null ? void 0 : r3.method) === "SAMPLE-AES-CTR") && !e3._isIsobmff) throw new Error("The SAMPLE-AES and SAMPLE-AES-CTR encryption methods are currently only supported for ISOBMFF files.");
    }, this.inputCache.push({ segment: i2, input: n2, age: this.nextInputCacheAge++ }), this.inputCache.length > 4) {
      let e3 = ke(this.inputCache, (e4) => e4.age);
      o2(e3 !== -1), this.inputCache.splice(e3, 1);
    }
    return n2;
  }
  async getLiveRefreshInterval() {
    return this.getRemainingWaitTimeMs() === 0 && await this.runUpdateSegments(), this.streamHasEnded ? null : this.refreshInterval;
  }
};
var xs = class extends Ri {
  constructor(e22) {
    super(e22), this.metadataPromise = null, this.trackBackings = null, this.internalTracks = null, this.segmentedInputs = [], this.hasMasterPlaylist = !0;
  }
  readMetadata() {
    return this.metadataPromise ?? (this.metadataPromise = (async () => {
      o2(this.input._rootSource instanceof ms);
      let e22 = await this.input._reader.requestEntireFile();
      o2(e22);
      let t22 = tc(e22, e22.length, { ignore: as }), { rootPath: i2 } = this.input._rootSource, r2 = [], a2 = [];
      for (let o22 = 1; o22 < t22.length; o22++) {
        let e3 = t22[o22];
        if (e3.startsWith(Ka)) {
          let a3 = o22, s3 = t22[++o22];
          if (s3 === void 0) throw new Error("Incorrect M3U8 file; a line must follow the #EXT-X-STREAM-INF tag.");
          let n3 = pe(i2, s3), c3 = new ss(e3.slice(18));
          if (c3.getAsNumber("bandwidth") === null) throw new Error("Invalid M3U8 file; #EXT-X-STREAM-INF tag requires a BANDWIDTH attribute with a valid numerical value.");
          r2.push({ fullPath: n3, attributes: c3, lineNumber: a3, hasOnlyKeyPackets: !1 });
        } else if (e3.startsWith(Qa)) {
          let t3 = new ss(e3.slice(26)), a3 = t3.get("uri");
          if (a3 === null) throw new Error("Invalid M3U8 file; #EXT-X-I-FRAME-STREAM-INF tag requires a URI attribute.");
          if (t3.getAsNumber("bandwidth") === null) throw new Error("Invalid M3U8 file; #EXT-X-I-FRAME-STREAM-INF tag requires a BANDWIDTH attribute with a valid numerical value.");
          let s3 = pe(i2, a3);
          r2.push({ fullPath: s3, attributes: t3, lineNumber: o22, hasOnlyKeyPackets: !0 });
        } else if (e3.startsWith(Ga)) {
          let t3 = new ss(e3.slice(13));
          if (t3.get("type") === null) throw new Error("Invalid M3U8 file; #EXT-X-MEDIA tag requires a TYPE attribute.");
          if (t3.get("group-id") === null) throw new Error("Invalid M3U8 file; #EXT-X-MEDIA tag requires a GROUP-ID attribute.");
          let r3 = null, s3 = t3.get("uri");
          s3 !== null && (r3 = pe(i2, s3)), a2.push({ fullPath: r3, attributes: t3, lineNumber: o22 });
        } else if (e3 !== "#EXT-X-I-FRAMES-ONLY" && e3.startsWith(Xa)) {
          let e4 = new Cs(this, i2, null, t22);
          return this.segmentedInputs = [e4], this.hasMasterPlaylist = !1, void (this.trackBackings = await e4.getTrackBackings());
        }
      }
      let s2 = [...new Set(a2.filter((e3) => e3.attributes.get("type").toLowerCase() === "video").map((e3) => e3.attributes.get("group-id")))], n2 = [...new Set(a2.filter((e3) => e3.attributes.get("type").toLowerCase() === "audio").map((e3) => e3.attributes.get("group-id")))], c22 = await Promise.all(r2.map(async (e3, t3) => {
        let r3 = [], c3 = e3.attributes.get("codecs"), l3;
        if (c3) l3 = c3.split(",").map((e4) => e4.trim());
        else {
          let t4 = this.getSegmentedInputForPath(e3.fullPath), i3 = await t4.getTrackBackings(), r4 = await Promise.all(i3.map(async (e4) => ({ track: e4, codec: await e4.getCodec() })));
          l3 = await Promise.all(r4.filter((e4) => e4.codec !== null).map((e4) => e4.track.getDecoderConfig().then((e5) => e5.codec)));
        }
        let d3 = e3.attributes.get("video"), u2 = e3.attributes.get("audio"), h22 = l3.some((e4) => Ne.includes(st(e4))), m2 = l3.some((e4) => Ue.includes(st(e4)));
        if (d3 !== null && !h22) {
          if (!s2.includes(d3)) throw new Error(`Invalid M3U8 file; variant stream references video group "${d3}" which is not defined in any #EXT-X-MEDIA tags.`);
          let e4 = a2.find((e5) => {
            let t4 = e5.attributes.get("group-id"), i3 = e5.attributes.get("type");
            return t4 === d3 && i3.toLowerCase() === "video";
          });
          e: if (e4) {
            let t4 = e4.attributes.get("uri");
            if (t4 === null) break e;
            let r4 = pe(i2, t4), a3 = this.getSegmentedInputForPath(r4), s3 = (await a3.getTrackBackings()).find((e5) => e5.getType() === "video");
            if (!s3 || await s3.getCodec() === null) break e;
            let n3 = await s3.getDecoderConfig().then((e5) => e5?.codec ?? null);
            o2(n3 !== null), l3.push(n3);
          }
        }
        if (u2 !== null && !m2) {
          if (!n2.includes(u2)) throw new Error(`Invalid M3U8 file; variant stream references audio group "${u2}" which is not defined in any #EXT-X-MEDIA tags.`);
          let e4 = a2.find((e5) => {
            let t4 = e5.attributes.get("group-id"), i3 = e5.attributes.get("type");
            return t4 === u2 && i3.toLowerCase() === "audio";
          });
          e: if (e4) {
            let t4 = e4.attributes.get("uri");
            if (t4 === null) break e;
            let r4 = pe(i2, t4), a3 = this.getSegmentedInputForPath(r4), s3 = (await a3.getTrackBackings()).find((e5) => e5.getType() === "audio");
            if (!s3 || await s3.getCodec() === null) break e;
            let n3 = await s3.getDecoderConfig().then((e5) => e5?.codec ?? null);
            o2(n3 !== null), l3.push(n3);
          }
        }
        l3 = [...new Set(l3)];
        let f22 = null, p22 = null, g2 = e3.attributes.getAsNumber("bandwidth");
        o2(g2 !== null);
        let k2 = e3.attributes.getAsNumber("average-bandwidth"), w2 = e3.attributes.get("name");
        for (let i3 of l3) {
          let o22 = st(i3);
          if (o22 !== null) {
            if (Ne.includes(o22)) {
              if (f22 !== null) throw new Error("Unsupported M3U8 file; multiple video codecs found in the CODECS attribute of a variant stream.");
              f22 = i3;
              let n3 = e3.attributes.get("video");
              if (n3 === null) {
                let i4 = e3.attributes.get("resolution"), a3 = null, s3 = null;
                if (i4) {
                  let e4 = i4.match(/^(\d+)x(\d+)$/);
                  e4 && (a3 = Number(e4[1]), s3 = Number(e4[2]));
                }
                r3.push({ id: -1, demuxer: this, backingTrack: null, default: !0, autoselect: !0, languageCode: W, lineNumber: e3.lineNumber, fullPath: e3.fullPath, fullCodecString: f22, pairingMask: 1n << BigInt(t3), peakBitrate: g2, averageBitrate: k2, name: w2, hasOnlyKeyPackets: e3.hasOnlyKeyPackets, info: { type: "video", width: a3, height: s3 } });
              } else {
                if (!s2.includes(n3)) throw new Error(`Invalid M3U8 file; variant stream references video group "${n3}" which is not defined in any #EXT-X-MEDIA tags.`);
                for (let i4 of a2) {
                  let a3 = i4.attributes.get("group-id"), s3 = i4.attributes.get("type");
                  if (a3 !== n3 || s3.toLowerCase() !== "video") continue;
                  let o3 = i4.attributes.get("resolution") ?? e3.attributes.get("resolution"), c4 = null, l4 = null;
                  if (o3) {
                    let e4 = o3.match(/^(\d+)x(\d+)$/);
                    e4 && (c4 = Number(e4[1]), l4 = Number(e4[2]));
                  }
                  r3.push({ id: -1, demuxer: this, backingTrack: null, default: Bs(i4.attributes), autoselect: Bs(i4.attributes) || As(i4.attributes), languageCode: Ms(i4.attributes.get("language")), lineNumber: i4.lineNumber, fullPath: i4.fullPath ?? e3.fullPath, fullCodecString: f22, pairingMask: 1n << BigInt(t3), peakBitrate: null, averageBitrate: null, name: i4.attributes.get("name"), hasOnlyKeyPackets: e3.hasOnlyKeyPackets, info: { type: "video", width: c4, height: l4 } });
                }
              }
            } else if (Ue.includes(o22)) {
              if (p22 !== null) throw new Error("Unsupported M3U8 file; multiple audio codecs found in the CODECS attribute of a variant stream.");
              p22 = i3;
              let s3 = e3.attributes.get("audio");
              if (s3 === null) {
                let i4 = e3.attributes.get("channels"), a3 = i4 !== null ? Number(i4.split("/")[0]) : null;
                r3.push({ id: -1, demuxer: this, backingTrack: null, default: !0, autoselect: !0, languageCode: W, lineNumber: e3.lineNumber, fullPath: e3.fullPath, fullCodecString: p22, pairingMask: 1n << BigInt(t3), peakBitrate: g2, averageBitrate: k2, name: w2, hasOnlyKeyPackets: e3.hasOnlyKeyPackets, info: { type: "audio", numberOfChannels: a3 !== null && Number.isInteger(a3) && a3 > 0 ? a3 : null } });
              } else {
                if (!n2.includes(s3)) throw new Error(`Invalid M3U8 file; variant stream references audio group "${s3}" which is not defined in any #EXT-X-MEDIA tags.`);
                for (let i4 of a2) {
                  let a3 = i4.attributes.get("group-id"), n3 = i4.attributes.get("type");
                  if (a3 !== s3 || n3.toLowerCase() !== "audio") continue;
                  let o3 = i4.attributes.get("channels") ?? e3.attributes.get("channels"), c4 = o3 !== null ? Number(o3.split("/")[0]) : null;
                  r3.push({ id: -1, demuxer: this, backingTrack: null, default: Bs(i4.attributes), autoselect: Bs(i4.attributes) || As(i4.attributes), languageCode: Ms(i4.attributes.get("language")), lineNumber: i4.lineNumber, fullPath: i4.fullPath ?? e3.fullPath, fullCodecString: p22, pairingMask: 1n << BigInt(t3), peakBitrate: null, averageBitrate: null, name: i4.attributes.get("name"), hasOnlyKeyPackets: e3.hasOnlyKeyPackets, info: { type: "audio", numberOfChannels: c4 !== null && Number.isInteger(c4) && c4 > 0 ? c4 : null } });
                }
              }
            }
          }
        }
        return r3;
      })), l22 = [], d22 = (e3) => {
        let t3 = l22.find((t4) => t4.fullPath === e3.fullPath && t4.info.type === e3.info.type);
        t3 ? (t3.pairingMask |= e3.pairingMask, t3.default || (t3.default = e3.default), t3.autoselect || (t3.autoselect = e3.autoselect), t3.lineNumber = Math.min(t3.lineNumber, e3.lineNumber), e3.peakBitrate !== null && (t3.peakBitrate = Math.max(t3.peakBitrate ?? -1 / 0, e3.peakBitrate)), e3.averageBitrate !== null && (t3.averageBitrate = Math.max(t3.averageBitrate ?? -1 / 0, e3.averageBitrate)), t3.languageCode === W && (t3.languageCode = e3.languageCode)) : (e3.id = l22.length + 1, l22.push(e3));
      };
      for (let o22 of c22) for (let e3 of o22) d22(e3);
      l22.sort((e3, t3) => e3.lineNumber - t3.lineNumber), this.trackBackings = [];
      for (let o22 of l22) o22.info.type === "video" ? this.trackBackings.push(new Is(o22)) : this.trackBackings.push(new _s(o22));
      this.internalTracks = l22;
    })());
  }
  async getTrackBackings() {
    return await this.readMetadata(), o2(this.trackBackings), this.trackBackings;
  }
  getSegmentedInputForPath(e22) {
    let t22 = this.segmentedInputs.find((t3) => t3.path === e22);
    if (t22) return t22;
    let i2 = null;
    return this.internalTracks && (i2 = this.internalTracks.filter((t3) => t3.fullPath === e22).map((e3) => ({ id: e3.id, type: e3.info.type }))), t22 = new Cs(this, e22, i2, null), this.segmentedInputs.push(t22), t22;
  }
  async getMetadataTags() {
    return {};
  }
  async getMimeType() {
    return ja;
  }
  dispose() {
    if (this.segmentedInputs) {
      for (let e22 of this.segmentedInputs) e22.dispose();
      this.segmentedInputs.length = 0;
    }
  }
}, Es = class {
  constructor(e22) {
    this.internalTrack = e22, this.hydrationPromise = null;
  }
  hydrate() {
    return this.hydrationPromise ?? (this.hydrationPromise = (async () => {
      let e22 = this.internalTrack.demuxer.getSegmentedInputForPath(this.internalTrack.fullPath), t22 = null, i2 = (await e22.getTrackBackings()).filter((e3) => e3.getType() === this.getType());
      if (i2.length === 1) t22 = i2[0];
      else if (this instanceof Is) {
        for (let r2 of i2) if (await r2.getCodec() === this.getCodec()) {
          t22 = r2;
          break;
        }
      } else {
        o2(this instanceof _s);
        for (let e3 of i2) if (await e3.getCodec() === this.getCodec()) {
          t22 = e3;
          break;
        }
      }
      if (!t22) throw new Error("Could not find matching track in underlying media data.");
      this.internalTrack.backingTrack = t22;
    })());
  }
  delegate(e22) {
    return this.internalTrack.backingTrack ? e22() : this.hydrate().then(e22);
  }
  getCodec() {
    throw new Error("Not implemented on base class.");
  }
  getDisposition() {
    return { ...Ae, default: this.internalTrack.autoselect, primary: this.internalTrack.default };
  }
  getId() {
    return this.internalTrack.id;
  }
  getPairingMask() {
    return this.internalTrack.pairingMask;
  }
  getInternalCodecId() {
    return null;
  }
  getLanguageCode() {
    return this.internalTrack.languageCode;
  }
  getName() {
    return this.internalTrack.name;
  }
  getNumber() {
    o2(this.internalTrack.demuxer.internalTracks);
    let e22 = this.internalTrack.info.type, t22 = 0;
    for (let i2 of this.internalTrack.demuxer.internalTracks) if (i2.info.type === e22 && t22++, i2 === this.internalTrack) break;
    return t22;
  }
  getTimeResolution() {
    return this.delegate(() => this.internalTrack.backingTrack.getTimeResolution());
  }
  isRelativeToUnixEpoch() {
    return this.delegate(() => this.internalTrack.backingTrack.isRelativeToUnixEpoch());
  }
  getUnixTimeForTimestamp(e22) {
    return this.delegate(() => this.internalTrack.backingTrack.getUnixTimeForTimestamp(e22));
  }
  getBitrate() {
    return this.internalTrack.peakBitrate;
  }
  getAverageBitrate() {
    return this.internalTrack.averageBitrate;
  }
  async getDurationFromMetadata(e22) {
    return await this.hydrate(), this.internalTrack.backingTrack.getDurationFromMetadata(e22);
  }
  async getLiveRefreshInterval() {
    return await this.hydrate(), this.internalTrack.backingTrack.getLiveRefreshInterval();
  }
  getHasOnlyKeyPackets() {
    return this.internalTrack.hasOnlyKeyPackets || null;
  }
  async getFirstPacket(e22) {
    return await this.hydrate(), this.internalTrack.backingTrack.getFirstPacket(e22);
  }
  async getPacket(e22, t22) {
    return await this.hydrate(), this.internalTrack.backingTrack.getPacket(e22, t22);
  }
  async getKeyPacket(e22, t22) {
    return await this.hydrate(), this.internalTrack.backingTrack.getKeyPacket(e22, t22);
  }
  async getNextPacket(e22, t22) {
    return await this.hydrate(), this.internalTrack.backingTrack.getNextPacket(e22, t22);
  }
  async getNextKeyPacket(e22, t22) {
    return await this.hydrate(), this.internalTrack.backingTrack.getNextKeyPacket(e22, t22);
  }
}, Is = class extends Es {
  constructor(e22) {
    super(e22);
  }
  get backingVideoTrack() {
    return this.internalTrack.backingTrack;
  }
  getType() {
    return "video";
  }
  getCodec() {
    return st(this.internalTrack.fullCodecString);
  }
  getCodedWidth() {
    return this.delegate(() => this.backingVideoTrack.getCodedWidth());
  }
  getCodedHeight() {
    return this.delegate(() => this.backingVideoTrack.getCodedHeight());
  }
  getSquarePixelWidth() {
    return this.delegate(() => this.backingVideoTrack.getSquarePixelWidth());
  }
  getSquarePixelHeight() {
    return this.delegate(() => this.backingVideoTrack.getSquarePixelHeight());
  }
  getMetadataDisplayWidth() {
    return this.backingVideoTrack ? null : this.internalTrack.info.width;
  }
  getMetadataDisplayHeight() {
    return this.backingVideoTrack ? null : this.internalTrack.info.height;
  }
  getRotation() {
    return this.delegate(() => this.backingVideoTrack.getRotation());
  }
  async getColorSpace() {
    return await this.hydrate(), this.backingVideoTrack.getColorSpace();
  }
  async canBeTransparent() {
    return await this.hydrate(), this.backingVideoTrack.canBeTransparent();
  }
  getMetadataCodecParameterString() {
    return this.backingVideoTrack ? null : this.internalTrack.fullCodecString;
  }
  async getDecoderConfig() {
    return await this.hydrate(), this.backingVideoTrack.getDecoderConfig();
  }
}, _s = class extends Es {
  constructor(e22) {
    super(e22);
  }
  get backingAudioTrack() {
    return this.internalTrack.backingTrack;
  }
  getType() {
    return "audio";
  }
  getCodec() {
    return st(this.internalTrack.fullCodecString);
  }
  getNumberOfChannels() {
    return this.internalTrack.info.numberOfChannels !== null ? this.internalTrack.info.numberOfChannels : this.delegate(() => this.backingAudioTrack.getNumberOfChannels());
  }
  getSampleRate() {
    return this.delegate(() => this.backingAudioTrack.getSampleRate());
  }
  getMetadataCodecParameterString() {
    return this.backingAudioTrack ? null : this.internalTrack.fullCodecString;
  }
  async getDecoderConfig() {
    return await this.hydrate(), this.backingAudioTrack.getDecoderConfig();
  }
}, Bs = (e22) => {
  let t22 = e22.get("default");
  if (t22 === null) return !1;
  let i2 = t22.toUpperCase();
  if (i2 === "YES") return !0;
  if (i2 === "NO") return !1;
  throw new Error(`Invalid M3U8 file; #EXT-X-MEDIA DEFAULT attribute must be YES or NO, got "${t22}".`);
}, As = (e22) => {
  let t22 = e22.get("autoselect");
  if (t22 === null) return !1;
  let i2 = t22.toUpperCase();
  if (i2 === "YES") return !0;
  if (i2 === "NO") return !1;
  throw new Error(`Invalid M3U8 file; #EXT-X-MEDIA AUTOSELECT attribute must be YES or NO, got "${t22}".`);
}, Ms = (e22) => e22 === null ? W : e22.split("-")[0] || W;
var Fs = class {
  constructor() {
    this._isIsobmff = !1;
  }
}, Rs = class extends Fs {
  constructor() {
    super(...arguments), this._isIsobmff = !0;
  }
  async _getMajorBrand(e22) {
    let t22 = e22._reader.requestSlice(0, 12);
    if (t22 instanceof Promise && (t22 = await t22), !t22) return null;
    t22.skip(4);
    let i2 = ec(t22, 4);
    return i2 !== "ftyp" && i2 !== "styp" ? null : ec(t22, 4);
  }
  _createDemuxer(e22) {
    return new rr(e22);
  }
}, Ds = class extends Rs {
  async _canReadInput(e22) {
    let t22 = await this._getMajorBrand(e22);
    if (t22 !== null) return t22 !== "qt  ";
    let i2 = e22._reader.requestSlice(4, 4);
    if (i2 instanceof Promise && (i2 = await i2), !i2) return !1;
    let r2 = ec(i2, 4);
    return r2 === "moof" || r2 === "sidx";
  }
  get name() {
    return "MP4";
  }
  get mimeType() {
    return "video/mp4";
  }
}, Os = class extends Rs {
  async _canReadInput(e22) {
    return await this._getMajorBrand(e22) === "qt  ";
  }
  get name() {
    return "QuickTime File Format";
  }
  get mimeType() {
    return "video/quicktime";
  }
}, Ns = class extends Fs {
  async isSupportedEBMLOfDocType(e22, t22) {
    let i2 = e22._reader.requestSlice(0, Fr);
    if (i2 instanceof Promise && (i2 = await i2), !i2) return !1;
    let r2 = Rr(i2);
    if (r2 === null || r2 < 1 || r2 > 8 || Or(i2, r2) !== Pr.EBML) return !1;
    let a2 = zr(i2);
    if (typeof a2 != "number") return !1;
    let s2 = e22._reader.requestSlice(i2.filePos, a2);
    if (s2 instanceof Promise && (s2 = await s2), !s2) return !1;
    let n2 = i2.filePos;
    for (; s2.filePos <= n2 + a2 - 2; ) {
      let e3 = Lr(s2);
      if (!e3) break;
      let { id: i3, size: r3 } = e3, a3 = s2.filePos;
      if (r3 === void 0) return !1;
      switch (i3) {
        case Pr.EBMLVersion:
          if (Or(s2, r3) !== 1) return !1;
          break;
        case Pr.EBMLReadVersion:
          if (Or(s2, r3) !== 1) return !1;
          break;
        case Pr.DocType:
          if (Ur(s2, r3) !== t22) return !1;
          break;
        case Pr.DocTypeVersion:
          if (Or(s2, r3) > 4) return !1;
      }
      s2.filePos = a3 + r3;
    }
    return !0;
  }
  _canReadInput(e22) {
    return this.isSupportedEBMLOfDocType(e22, "matroska");
  }
  _createDemuxer(e22) {
    return new ia(e22);
  }
  get name() {
    return "Matroska";
  }
  get mimeType() {
    return "video/x-matroska";
  }
}, zs = class extends Ns {
  _canReadInput(e22) {
    return this.isSupportedEBMLOfDocType(e22, "webm");
  }
  get name() {
    return "WebM";
  }
  get mimeType() {
    return "video/webm";
  }
}, Ls = class extends Fs {
  async _canReadInput(e22) {
    let t22 = 0;
    for (; ; ) {
      let i3 = e22._reader.requestSlice(t22, oc);
      if (i3 instanceof Promise && (i3 = await i3), !i3) break;
      let r3 = uc(i3);
      if (!r3) break;
      t22 = i3.filePos + r3.size;
    }
    let i2 = await na(e22._reader, t22, t22 + 4096);
    if (!i2) return !1;
    let r2 = i2.header, a2 = bt(r2.mpegVersionId, r2.channel), s2 = e22._reader.requestSlice(i2.startPos + a2, 4);
    if (s2 instanceof Promise && (s2 = await s2), !s2) return !1;
    let n2 = $o(s2);
    if (n2 === kt || n2 === wt) return !0;
    t22 = i2.startPos + i2.header.totalSize;
    let o22 = await na(e22._reader, t22, t22 + 4);
    if (!o22) return !1;
    let c22 = o22.header;
    return r2.channel === c22.channel && r2.sampleRate === c22.sampleRate;
  }
  _createDemuxer(e22) {
    return new oa(e22);
  }
  get name() {
    return "MP3";
  }
  get mimeType() {
    return "audio/mpeg";
  }
}, Us = class extends Fs {
  async _canReadInput(e22) {
    let t22 = e22._reader.requestSlice(0, 12);
    if (t22 instanceof Promise && (t22 = await t22), !t22) return !1;
    let i2 = ec(t22, 4);
    return i2 !== "RIFF" && i2 !== "RIFX" && i2 !== "RF64" ? !1 : (t22.skip(4), ec(t22, 4) === "WAVE");
  }
  _createDemuxer(e22) {
    return new Sa(e22);
  }
  get name() {
    return "WAVE";
  }
  get mimeType() {
    return "audio/wav";
  }
}, Ws = class extends Fs {
  async _canReadInput(e22) {
    let t22 = e22._reader.requestSlice(0, 4);
    return t22 instanceof Promise && (t22 = await t22), !!t22 && ec(t22, 4) === "OggS";
  }
  _createDemuxer(e22) {
    return new ka(e22);
  }
  get name() {
    return "Ogg";
  }
  get mimeType() {
    return "application/ogg";
  }
}, qs = class extends Fs {
  async _canReadInput(e22) {
    let t22 = 0;
    for (; ; ) {
      let i3 = e22._reader.requestSlice(t22, oc);
      if (i3 instanceof Promise && (i3 = await i3), !i3) break;
      let r2 = uc(i3);
      if (!r2) break;
      t22 = i3.filePos + r2.size;
    }
    let i2 = e22._reader.requestSlice(t22, 4);
    return i2 instanceof Promise && (i2 = await i2), !!i2 && ec(i2, 4) === "fLaC";
  }
  get name() {
    return "FLAC";
  }
  get mimeType() {
    return "audio/flac";
  }
  _createDemuxer(e22) {
    return new Ba(e22);
  }
}, Vs = class extends Fs {
  async _canReadInput(e22) {
    let t22 = 0;
    for (; ; ) {
      let i3 = e22._reader.requestSlice(t22, oc);
      if (i3 instanceof Promise && (i3 = await i3), !i3) break;
      let r3 = uc(i3);
      if (!r3) break;
      t22 = i3.filePos + r3.size;
    }
    let i2 = e22._reader.requestSliceRange(t22, 7, 9);
    if (i2 instanceof Promise && (i2 = await i2), !i2) return !1;
    let r2 = xa(i2);
    if (!r2 || (t22 += r2.frameLength, i2 = e22._reader.requestSliceRange(t22, 7, 9), i2 instanceof Promise && (i2 = await i2), !i2)) return !1;
    let a2 = xa(i2);
    return !!a2 && r2.objectType === a2.objectType && r2.samplingFrequencyIndex === a2.samplingFrequencyIndex && r2.channelConfiguration === a2.channelConfiguration;
  }
  _createDemuxer(e22) {
    return new Ia(e22);
  }
  get name() {
    return "ADTS";
  }
  get mimeType() {
    return "audio/aac";
  }
}, Hs = class extends Fs {
  async _canReadInput(e22) {
    let t22 = e22._reader.requestSlice(0, 205);
    if (t22 instanceof Promise && (t22 = await t22), !t22) return !1;
    let i2 = zo(t22, 205);
    return i2[0] === 71 && i2[188] === 71 || i2[0] === 71 && i2[204] === 71 || i2[4] === 71 && i2[196] === 71;
  }
  _createDemuxer(e22) {
    return new Na(e22);
  }
  get name() {
    return "MPEG Transport Stream";
  }
  get mimeType() {
    return "video/MP2T";
  }
}, $s = class extends Fs {
  async _canReadInput(e22) {
    let t22 = e22._reader.requestSlice(0, 7);
    if (t22 instanceof Promise && (t22 = await t22), !t22 || ec(t22, 7) !== "#EXTM3U") return !1;
    if (!(e22._rootSource instanceof ms)) throw new TypeError("HLS inputs require `InputOptions.source` to be a PathedSource or a ref to one.");
    return e22._rootSource._usedForHls = !0, !0;
  }
  _createDemuxer(e22) {
    return new xs(e22);
  }
  get name() {
    return "HTTP Live Streaming (HLS)";
  }
  get mimeType() {
    return ja;
  }
}, js = new Ds(), Ks = new Os(), Qs = new Ns(), Gs = new zs(), Xs = new Ls(), Ys = new Us(), Js = new Ws(), Zs = new Vs(), en = new qs(), tn = new Hs(), rn = [new $s(), js, Ks, Qs, Gs, Ys, Js, en, Xs, Zs, tn];
var an = /* @__PURE__ */ (function(e22) {
  return function(t22) {
    function i2(i3) {
      t22.error = t22.hasError ? new e22(i3, t22.error, "An error was suppressed during disposal.") : i3, t22.hasError = !0;
    }
    var r2, a2 = 0;
    return (function e3() {
      for (; r2 = t22.stack.pop(); ) try {
        if (!r2.async && a2 === 1) return a2 = 0, t22.stack.push(r2), Promise.resolve().then(e3);
        if (r2.dispose) {
          var s2 = r2.dispose.call(r2.value);
          if (r2.async) return a2 |= 2, Promise.resolve(s2).then(e3, function(t3) {
            return i2(t3), e3();
          });
        } else a2 |= 1;
      } catch (n2) {
        i2(n2);
      }
      if (a2 === 1) return t22.hasError ? Promise.reject(t22.error) : Promise.resolve();
      if (t22.hasError) throw t22.error;
    })();
  };
})(typeof SuppressedError == "function" ? SuppressedError : function(e22, t22, i2) {
  var r2 = new Error(i2);
  return r2.name = "SuppressedError", r2.error = e22, r2.suppressed = t22, r2;
});
me();
var sn = -1 / 0, nn = -1 / 0, on = null;
typeof FinalizationRegistry < "u" && (on = new FinalizationRegistry((e22) => {
  let t22 = performance.now();
  e22.type === "video" ? (t22 - sn >= 1e3 && (Ee._error("A VideoSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your VideoSamples as soon as you're done using them."), sn = t22), typeof VideoFrame < "u" && e22.data instanceof VideoFrame && e22.data.close()) : (t22 - nn >= 1e3 && (Ee._error("An AudioSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your AudioSamples as soon as you're done using them."), nn = t22), typeof AudioData < "u" && e22.data instanceof AudioData && e22.data.close());
}));
var cn = class {
  constructor() {
    this._referenceCount = 0, this._lastAllocationBuffer = null;
  }
}, ln = ["I420", "I420P10", "I420P12", "I420A", "I420AP10", "I420AP12", "I422", "I422P10", "I422P12", "I422A", "I422AP10", "I422AP12", "I444", "I444P10", "I444P12", "I444A", "I444AP10", "I444AP12", "NV12", "RGBA", "RGBX", "BGRA", "BGRX"], dn = new Set(ln), un = class _un {
  get codedWidth() {
    return this.visibleRect.width;
  }
  get codedHeight() {
    return this.visibleRect.height;
  }
  get displayWidth() {
    return this.rotation % 180 == 0 ? this.squarePixelWidth : this.squarePixelHeight;
  }
  get displayHeight() {
    return this.rotation % 180 == 0 ? this.squarePixelHeight : this.squarePixelWidth;
  }
  get microsecondTimestamp() {
    return Math.trunc(X * this.timestamp);
  }
  get microsecondDuration() {
    return Math.trunc(X * this.duration);
  }
  get hasAlpha() {
    return this.format && this.format.includes("A");
  }
  constructor(e22, t22) {
    var i2, r2, a2, s2, n2, o22, c22, l22;
    if (this._closed = !1, e22 instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && e22 instanceof SharedArrayBuffer || ArrayBuffer.isView(e22)) {
      if (!t22 || typeof t22 != "object") throw new TypeError("init must be an object.");
      if (t22.format === void 0 || !dn.has(t22.format)) throw new TypeError("init.format must be one of: " + ln.join(", "));
      if (!Number.isInteger(t22.codedWidth) || t22.codedWidth <= 0) throw new TypeError("init.codedWidth must be a positive integer.");
      if (!Number.isInteger(t22.codedHeight) || t22.codedHeight <= 0) throw new TypeError("init.codedHeight must be a positive integer.");
      if (t22.rotation !== void 0 && ![0, 90, 180, 270].includes(t22.rotation)) throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");
      if (!Number.isFinite(t22.timestamp)) throw new TypeError("init.timestamp must be a number.");
      if (t22.duration !== void 0 && (!Number.isFinite(t22.duration) || t22.duration < 0)) throw new TypeError("init.duration, when provided, must be a non-negative number.");
      if (t22.layout !== void 0) {
        if (!Array.isArray(t22.layout)) throw new TypeError("init.layout, when provided, must be an array.");
        for (let e3 of t22.layout) {
          if (!e3 || typeof e3 != "object" || Array.isArray(e3)) throw new TypeError("Each entry in init.layout must be an object.");
          if (!Number.isInteger(e3.offset) || e3.offset < 0) throw new TypeError("plane.offset must be a non-negative integer.");
          if (!Number.isInteger(e3.stride) || e3.stride < 0) throw new TypeError("plane.stride must be a non-negative integer.");
        }
      }
      if (t22.visibleRect !== void 0 && be(t22.visibleRect, "init.visibleRect"), t22.displayWidth !== void 0 && (!Number.isInteger(t22.displayWidth) || t22.displayWidth <= 0)) throw new TypeError("init.displayWidth, when provided, must be a positive integer.");
      if (t22.displayHeight !== void 0 && (!Number.isInteger(t22.displayHeight) || t22.displayHeight <= 0)) throw new TypeError("init.displayHeight, when provided, must be a positive integer.");
      if (t22.displayWidth !== void 0 != (t22.displayHeight !== void 0)) throw new TypeError("init.displayWidth and init.displayHeight must be either both provided or both omitted.");
      this.format = t22.format, this.rotation = t22.rotation ?? 0, this.timestamp = t22.timestamp, this.duration = t22.duration ?? 0;
      let n3 = t22.layout ?? vn(t22.format, t22.codedWidth, t22.codedHeight), o3 = t22.colorSpace ?? null;
      o3 === null && (o3 = this.format === "RGBA" || this.format === "RGBX" || this.format === "BGRA" || this.format === "BGRX" ? { primaries: "bt709", transfer: "iec61966-2-1", matrix: "rgb", fullRange: !0 } : { primaries: "bt709", transfer: "bt709", matrix: "bt709", fullRange: !1 }), this.visibleRect = { left: ((i2 = t22.visibleRect) == null ? void 0 : i2.left) ?? 0, top: ((r2 = t22.visibleRect) == null ? void 0 : r2.top) ?? 0, width: ((a2 = t22.visibleRect) == null ? void 0 : a2.width) ?? t22.codedWidth, height: ((s2 = t22.visibleRect) == null ? void 0 : s2.height) ?? t22.codedHeight }, t22.displayWidth !== void 0 ? (this.squarePixelWidth = this.rotation % 180 == 0 ? t22.displayWidth : t22.displayHeight, this.squarePixelHeight = this.rotation % 180 == 0 ? t22.displayHeight : t22.displayWidth) : (this.squarePixelWidth = this.visibleRect.width, this.squarePixelHeight = this.visibleRect.height), this._data = t22._doNotCopy ? m(e22) : m(e22).slice(), this._layout = n3, this.colorSpace = new gn(o3);
    } else if (typeof VideoFrame < "u" && e22 instanceof VideoFrame) {
      if (t22?.rotation !== void 0 && ![0, 90, 180, 270].includes(t22.rotation)) throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");
      if (t22?.timestamp !== void 0 && !Number.isFinite(t22?.timestamp)) throw new TypeError("init.timestamp, when provided, must be a number.");
      if (t22?.duration !== void 0 && (!Number.isFinite(t22.duration) || t22.duration < 0)) throw new TypeError("init.duration, when provided, must be a non-negative number.");
      t22?.visibleRect !== void 0 && be(t22.visibleRect, "init.visibleRect"), this._data = e22, this._layout = null, this.format = e22.format, this.visibleRect = { left: ((n2 = e22.visibleRect) == null ? void 0 : n2.x) ?? 0, top: ((o22 = e22.visibleRect) == null ? void 0 : o22.y) ?? 0, width: ((c22 = e22.visibleRect) == null ? void 0 : c22.width) ?? e22.codedWidth, height: ((l22 = e22.visibleRect) == null ? void 0 : l22.height) ?? e22.codedHeight }, this.rotation = t22?.rotation ?? 0, this.squarePixelWidth = e22.displayWidth, this.squarePixelHeight = e22.displayHeight, this.timestamp = t22?.timestamp ?? e22.timestamp / 1e6, this.duration = t22?.duration ?? (e22.duration ?? 0) / 1e6, this.colorSpace = new gn(e22.colorSpace);
    } else if (typeof HTMLImageElement < "u" && e22 instanceof HTMLImageElement || typeof SVGImageElement < "u" && e22 instanceof SVGImageElement || typeof ImageBitmap < "u" && e22 instanceof ImageBitmap || typeof HTMLVideoElement < "u" && e22 instanceof HTMLVideoElement || typeof HTMLCanvasElement < "u" && e22 instanceof HTMLCanvasElement || typeof OffscreenCanvas < "u" && e22 instanceof OffscreenCanvas) {
      if (!t22 || typeof t22 != "object") throw new TypeError("init must be an object.");
      if (t22.rotation !== void 0 && ![0, 90, 180, 270].includes(t22.rotation)) throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");
      if (!Number.isFinite(t22.timestamp)) throw new TypeError("init.timestamp must be a number.");
      if (t22.duration !== void 0 && (!Number.isFinite(t22.duration) || t22.duration < 0)) throw new TypeError("init.duration, when provided, must be a non-negative number.");
      if (t22.visibleRect !== void 0 && be(t22.visibleRect, "init.visibleRect"), typeof VideoFrame < "u") return new _un(new VideoFrame(e22, { timestamp: Math.trunc(t22.timestamp * X), duration: Math.trunc((t22.duration ?? 0) * X) || void 0, visibleRect: t22.visibleRect && { x: t22.visibleRect.left, y: t22.visibleRect.top, width: t22.visibleRect.width, height: t22.visibleRect.height } }), t22);
      let i3 = 0, r3 = 0;
      if ("naturalWidth" in e22 ? (i3 = e22.naturalWidth, r3 = e22.naturalHeight) : "videoWidth" in e22 ? (i3 = e22.videoWidth, r3 = e22.videoHeight) : "width" in e22 && (i3 = Number(e22.width), r3 = Number(e22.height)), !i3 || !r3) throw new TypeError("Could not determine dimensions.");
      let a3 = t22.visibleRect ?? { left: 0, top: 0, width: i3, height: r3 }, s3 = new OffscreenCanvas(a3.width, a3.height), n3 = s3.getContext("2d", { alpha: te(), willReadFrequently: !0 });
      if (!n3) throw new Error("OffscreenCanvas must have support for the '2d' context in order to create a VideoSample from this data.");
      n3.drawImage(e22, -a3.left, -a3.top), this._data = s3, this._layout = null, this.format = "RGBX", this.visibleRect = { left: 0, top: 0, width: a3.width, height: a3.height }, this.squarePixelWidth = a3.width, this.squarePixelHeight = a3.height, this.rotation = t22.rotation ?? 0, this.timestamp = t22.timestamp, this.duration = t22.duration ?? 0, this.colorSpace = new gn({ matrix: "rgb", primaries: "bt709", transfer: "iec61966-2-1", fullRange: !0 });
    } else {
      if (!(e22 instanceof cn)) throw new TypeError("Invalid data type: Must be a BufferSource, CanvasImageSource, or VideoSampleResource.");
      if (!t22 || typeof t22 != "object") throw new TypeError("init must be an object.");
      if (t22.rotation !== void 0 && ![0, 90, 180, 270].includes(t22.rotation)) throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");
      if (!Number.isFinite(t22.timestamp)) throw new TypeError("init.timestamp must be a number.");
      if (t22.duration !== void 0 && (!Number.isFinite(t22.duration) || t22.duration < 0)) throw new TypeError("init.duration, when provided, must be a non-negative number.");
      if (this._data = e22, e22._referenceCount++, this.format = e22.getFormat(), this.format !== null && !ln.includes(this.format)) throw new TypeError("getFormat() must return a VideoSamplePixelFormat or null.");
      if (this.visibleRect = { left: 0, top: 0, width: e22.getCodedWidth(), height: e22.getCodedHeight() }, !Number.isInteger(this.visibleRect.width) || this.visibleRect.width <= 0) throw new TypeError("getCodedWidth() must return a positive integer.");
      if (!Number.isInteger(this.visibleRect.height) || this.visibleRect.height <= 0) throw new TypeError("getCodedHeight() must return a positive integer.");
      if (this.squarePixelWidth = e22.getSquarePixelWidth(), !Number.isInteger(this.squarePixelWidth) || this.squarePixelWidth <= 0) throw new TypeError("getSquarePixelWidth() must return a positive integer.");
      if (this.squarePixelHeight = e22.getSquarePixelHeight(), !Number.isInteger(this.squarePixelHeight) || this.squarePixelHeight <= 0) throw new TypeError("getSquarePixelHeight() must return a positive integer.");
      this.rotation = t22.rotation ?? 0, this.timestamp = t22.timestamp, this.duration = t22.duration ?? 0, this.colorSpace = e22.getColorSpace();
    }
    this.encodeOptions = t22?.encodeOptions ?? {}, this.pixelAspectRatio = we({ num: this.squarePixelWidth * this.codedHeight, den: this.squarePixelHeight * this.codedWidth }), on?.register(this, { type: "video", data: this._data }, this);
  }
  clone() {
    if (this._closed) throw new Error("VideoSample is closed.");
    return o2(this._data !== null), this._data instanceof cn ? new _un(this._data, { timestamp: this.timestamp, duration: this.duration, rotation: this.rotation, encodeOptions: this.encodeOptions }) : kn(this._data) ? new _un(this._data.clone(), { timestamp: this.timestamp, duration: this.duration, rotation: this.rotation, encodeOptions: this.encodeOptions }) : this._data instanceof Uint8Array ? (o2(this._layout), new _un(this._data, { format: this.format, layout: this._layout, codedWidth: this.codedWidth, codedHeight: this.codedHeight, timestamp: this.timestamp, duration: this.duration, colorSpace: this.colorSpace, rotation: this.rotation, visibleRect: this.visibleRect, displayWidth: this.displayWidth, displayHeight: this.displayHeight, encodeOptions: this.encodeOptions, _doNotCopy: !0 })) : new _un(this._data, { format: this.format, codedWidth: this.codedWidth, codedHeight: this.codedHeight, timestamp: this.timestamp, duration: this.duration, colorSpace: this.colorSpace, rotation: this.rotation, visibleRect: this.visibleRect, displayWidth: this.displayWidth, displayHeight: this.displayHeight, encodeOptions: this.encodeOptions });
  }
  close() {
    this._closed || (on?.unregister(this), this._data instanceof cn ? (this._data._referenceCount--, this._data._referenceCount === 0 && this._data.close()) : kn(this._data) ? this._data.close() : this._data = null, this._closed = !0);
  }
  allocationSize(e22 = {}) {
    if (yn(e22), this._closed) throw new Error("VideoSample is closed.");
    if ((e22.format ?? this.format) == null) throw new Error("Cannot get allocation size when format is null.");
    return kn(this._data) ? this._data.allocationSize(e22) : Sn(this, e22).allocationSize;
  }
  async copyTo(e22, t22 = {}) {
    if (!C(e22)) throw new TypeError("destination must be an ArrayBuffer or an ArrayBuffer view.");
    if (yn(t22), this._closed) throw new Error("VideoSample is closed.");
    if ((t22.format ?? this.format) == null) throw new Error("Cannot copy video sample data when format is null.");
    if (o2(this._data !== null), kn(this._data)) return this._data.copyTo(e22, t22);
    if (t22.format && !["RGBA", "RGBX", "BGRA", "BGRX"].includes(this.format) && ["RGBA", "RGBX", "BGRA", "BGRX"].includes(t22.format)) {
      if (!(this._data instanceof cn)) {
        if (typeof VideoFrame > "u") throw new Error("For this sample, converting from a non-RGB to an RGB format requires VideoFrame to be defined.");
        let i3 = this.toVideoFrame(), r3 = await i3.copyTo(e22, t22);
        return i3.close(), r3;
      }
      {
        let i3 = { stack: [], error: void 0, hasError: !1 };
        try {
          let r3 = (function(e3, t3, i4) {
            if (t3 != null) {
              if (typeof t3 != "object" && typeof t3 != "function") throw new TypeError("Object expected.");
              var r4, a3;
              if (i4) {
                if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
                r4 = t3[Symbol.asyncDispose];
              }
              if (r4 === void 0) {
                if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
                r4 = t3[Symbol.dispose], i4 && (a3 = r4);
              }
              if (typeof r4 != "function") throw new TypeError("Object not disposable.");
              a3 && (r4 = function() {
                try {
                  a3.call(this);
                } catch (e4) {
                  return Promise.reject(e4);
                }
              }), e3.stack.push({ value: t3, dispose: r4, async: i4 });
            } else i4 && e3.stack.push({ async: !0 });
            return t3;
          })(i3, await this._data.toRgbSample({ timestamp: this.timestamp, duration: this.duration, rotation: this.rotation }, t22.colorSpace ?? "srgb"), !1);
          if (!(r3 instanceof _un)) throw new TypeError("toRgbSample() must return a VideoSample.");
          if (!["RGBA", "RGBX", "BGRA", "BGRX"].includes(r3.format)) throw new Error(`Sample returned by toRgbSample was expected to have an RGB format, got '${r3.format}' instead.`);
          return await r3.copyTo(e22, t22);
        } catch (l22) {
          i3.error = l22, i3.hasError = !0;
        } finally {
          an(i3);
        }
      }
    }
    let i2 = Sn(this, t22);
    o2(this.format);
    let r2 = m(e22);
    if (r2.byteLength < i2.allocationSize) throw new TypeError(`Destination buffer too small. Required: ${i2.allocationSize}, Available: ${r2.byteLength}`);
    let a2 = Tn(this.format), s2;
    if (this._data instanceof cn) {
      let e3 = this._data.getDataPlanes();
      if (e3 instanceof Promise && (e3 = await e3), !Array.isArray(e3) || e3.some((e4) => !(e4.data instanceof Uint8Array) || !Number.isInteger(e4.stride) || e4.stride < 0)) throw new TypeError('getDataPlanes() must return an array of objects with a Uint8Array "data" property and a non-negative integer "stride" property.');
      s2 = e3;
    } else if (this._data instanceof Uint8Array) o2(this._layout), o2(this._layout.length === a2.length), s2 = this._layout.map((e3, t3) => {
      let i3 = Math.ceil(this.codedHeight / a2[t3].heightDivisor);
      return { data: this._data.subarray(e3.offset, e3.offset + e3.stride * i3), stride: e3.stride };
    });
    else {
      let e3 = this._data.getContext("2d");
      o2(e3);
      let t3 = e3.getImageData(0, 0, this.codedWidth, this.codedHeight);
      s2 = [{ data: m(t3.data), stride: 4 * this.codedWidth }];
    }
    let n2 = [], c22 = a2.length;
    for (let o22 = 0; o22 < c22; o22++) {
      let e3 = i2.computedLayouts[o22], t3 = s2[o22].stride, a3 = s2[o22].data, c3 = e3.sourceTop * t3;
      c3 += e3.sourceLeftBytes;
      let l22 = e3.destinationOffset, d22 = e3.sourceWidthBytes, u2 = { offset: l22, stride: e3.destinationStride };
      for (let i3 = 0; i3 < e3.sourceHeight; i3++) {
        if (c3 + d22 > a3.byteLength) throw new Error("Source buffer OOB read.");
        if (l22 + d22 > r2.byteLength) throw new Error("Destination buffer OOB write.");
        let i4 = a3.subarray(c3, c3 + d22);
        r2.set(i4, l22), c3 += t3, l22 += e3.destinationStride;
      }
      n2.push(u2);
    }
    if (t22.format !== void 0) {
      let e3 = this.format.startsWith("RGB") !== t22.format.startsWith("RGB"), a3 = this.format.includes("X") && t22.format.includes("A");
      if (e3 || a3) for (let t3 = 0; t3 < i2.allocationSize; t3 += 4) {
        if (e3) {
          let e4 = r2[t3], i3 = r2[t3 + 2];
          r2[t3] = i3, r2[t3 + 2] = e4;
        }
        a3 && (r2[t3 + 3] = 255);
      }
    }
    return n2;
  }
  toVideoFrame() {
    if (this._closed) throw new Error("VideoSample is closed.");
    if (o2(this._data !== null), this._data instanceof cn) {
      if (this.format === null) throw new Error("Cannot convert a VideoSampleResource-backed VideoSample to VideoFrame if format is null.");
      let e22 = this._data.getDataPlanes();
      if (e22 instanceof Promise) throw new Error("Cannot convert a VideoSampleResource-backed VideoSample to VideoFrame if getDataPlanes() returns a promise.");
      let t22 = e22.reduce((e3, t3) => e3 + t3.data.byteLength, 0), i2 = new Uint8Array(t22), r2 = 0, a2 = [];
      for (let s2 of e22) i2.set(s2.data, r2), a2.push(r2), r2 += s2.data.byteLength;
      return new VideoFrame(i2, { format: this.format, layout: e22.map((e3, t3) => ({ offset: a2[t3], stride: e3.stride })), codedWidth: this.codedWidth, codedHeight: this.codedHeight, timestamp: this.microsecondTimestamp, duration: this.microsecondDuration, colorSpace: this.colorSpace, visibleRect: this.visibleRect, displayWidth: this.squarePixelWidth, displayHeight: this.squarePixelHeight });
    }
    return kn(this._data) ? new VideoFrame(this._data, { timestamp: this.microsecondTimestamp, duration: this.microsecondDuration || void 0 }) : this._data instanceof Uint8Array ? (o2(this._layout), new VideoFrame(this._data, { format: this.format, codedWidth: this.codedWidth, codedHeight: this.codedHeight, layout: this._layout, timestamp: this.microsecondTimestamp, duration: this.microsecondDuration || void 0, colorSpace: this.colorSpace, visibleRect: this.visibleRect, displayWidth: this.squarePixelWidth, displayHeight: this.squarePixelHeight })) : new VideoFrame(this._data, { timestamp: this.microsecondTimestamp, duration: this.microsecondDuration || void 0 });
  }
  draw(e22, t22, i2, r2, a2, s2, n2, o22, c22) {
    let l22 = 0, d22 = 0, u2 = this.displayWidth, h22 = this.displayHeight, m2 = 0, f22 = 0, p22 = this.displayWidth, g2 = this.displayHeight;
    if (s2 !== void 0 ? (l22 = t22, d22 = i2, u2 = r2, h22 = a2, m2 = s2, f22 = n2, o22 !== void 0 ? (p22 = o22, g2 = c22) : (p22 = u2, g2 = h22)) : (m2 = t22, f22 = i2, r2 !== void 0 && (p22 = r2, g2 = a2)), !(typeof CanvasRenderingContext2D < "u" && e22 instanceof CanvasRenderingContext2D || typeof OffscreenCanvasRenderingContext2D < "u" && e22 instanceof OffscreenCanvasRenderingContext2D)) throw new TypeError("context must be a CanvasRenderingContext2D or OffscreenCanvasRenderingContext2D.");
    if (!Number.isFinite(l22)) throw new TypeError("sx must be a number.");
    if (!Number.isFinite(d22)) throw new TypeError("sy must be a number.");
    if (!Number.isFinite(u2) || u2 < 0) throw new TypeError("sWidth must be a non-negative number.");
    if (!Number.isFinite(h22) || h22 < 0) throw new TypeError("sHeight must be a non-negative number.");
    if (!Number.isFinite(m2)) throw new TypeError("dx must be a number.");
    if (!Number.isFinite(f22)) throw new TypeError("dy must be a number.");
    if (!Number.isFinite(p22) || p22 < 0) throw new TypeError("dWidth must be a non-negative number.");
    if (!Number.isFinite(g2) || g2 < 0) throw new TypeError("dHeight must be a non-negative number.");
    if (this._closed) throw new Error("VideoSample is closed.");
    ({ sx: l22, sy: d22, sWidth: u2, sHeight: h22 } = this._rotateSourceRegion(l22, d22, u2, h22, this.rotation));
    let k2 = this.toCanvasImageSource();
    e22.save();
    let w2 = m2 + p22 / 2, b2 = f22 + g2 / 2;
    e22.translate(w2, b2), e22.rotate(this.rotation * Math.PI / 180);
    let y2 = this.rotation % 180 == 0 ? 1 : p22 / g2;
    e22.scale(1 / y2, y2), e22.drawImage(k2, l22, d22, u2, h22, -p22 / 2, -g2 / 2, p22, g2), e22.restore();
  }
  drawWithFit(e22, t22) {
    var i2, r2, a2, s2;
    if (!(typeof CanvasRenderingContext2D < "u" && e22 instanceof CanvasRenderingContext2D || typeof OffscreenCanvasRenderingContext2D < "u" && e22 instanceof OffscreenCanvasRenderingContext2D)) throw new TypeError("context must be a CanvasRenderingContext2D or OffscreenCanvasRenderingContext2D.");
    if (!t22 || typeof t22 != "object") throw new TypeError("options must be an object.");
    if (!["fill", "contain", "cover"].includes(t22.fit)) throw new TypeError("options.fit must be 'fill', 'contain', or 'cover'.");
    if (t22.rotation !== void 0 && ![0, 90, 180, 270].includes(t22.rotation)) throw new TypeError("options.rotation, when provided, must be 0, 90, 180, or 270.");
    t22.crop !== void 0 && bn(t22.crop, "options.");
    let n2 = e22.canvas.width, o22 = e22.canvas.height, c22 = t22.rotation ?? this.rotation, [l22, d22] = c22 % 180 == 0 ? [this.squarePixelWidth, this.squarePixelHeight] : [this.squarePixelHeight, this.squarePixelWidth], u2, h22, m2, f22, p22 = t22.crop;
    p22 && (p22 = wn(p22, l22, d22));
    let { sx: g2, sy: k2, sWidth: w2, sHeight: b2 } = this._rotateSourceRegion(((i2 = t22.crop) == null ? void 0 : i2.left) ?? 0, ((r2 = t22.crop) == null ? void 0 : r2.top) ?? 0, ((a2 = t22.crop) == null ? void 0 : a2.width) ?? l22, ((s2 = t22.crop) == null ? void 0 : s2.height) ?? d22, c22);
    if (t22.fit === "fill") u2 = 0, h22 = 0, m2 = n2, f22 = o22;
    else {
      let [e3, i3] = t22.crop ? [t22.crop.width, t22.crop.height] : [l22, d22], r3 = t22.fit === "contain" ? Math.min(n2 / e3, o22 / i3) : Math.max(n2 / e3, o22 / i3);
      m2 = e3 * r3, f22 = i3 * r3, u2 = (n2 - m2) / 2, h22 = (o22 - f22) / 2;
    }
    e22.save();
    let y2 = c22 % 180 == 0 ? 1 : m2 / f22;
    e22.translate(n2 / 2, o22 / 2), e22.rotate(c22 * Math.PI / 180), e22.scale(1 / y2, y2), e22.translate(-n2 / 2, -o22 / 2), e22.drawImage(this.toCanvasImageSource(), g2, k2, w2, b2, u2, h22, m2, f22), e22.restore();
  }
  _rotateSourceRegion(e22, t22, i2, r2, a2) {
    return a2 === 90 ? [e22, t22, i2, r2] = [t22, this.squarePixelHeight - e22 - i2, r2, i2] : a2 === 180 ? [e22, t22] = [this.squarePixelWidth - e22 - i2, this.squarePixelHeight - t22 - r2] : a2 === 270 && ([e22, t22, i2, r2] = [this.squarePixelWidth - t22 - r2, e22, r2, i2]), { sx: e22, sy: t22, sWidth: i2, sHeight: r2 };
  }
  _drawWithFitAndMipmapping(e22, t22, i2) {
    let r2 = e22.width, a2 = e22.height, [s2, n2] = i2.rotation % 180 == 0 ? [this.squarePixelWidth, this.squarePixelHeight] : [this.squarePixelHeight, this.squarePixelWidth], o22 = i2.crop ? i2.crop.width : s2, c22 = i2.crop ? i2.crop.height : n2, l22 = 0;
    2 * r2 < o22 && 2 * a2 < c22 && (l22 = Math.floor(Math.log2(Math.min(o22 / r2, c22 / a2))));
    let d22 = r2 * 2 ** l22, u2 = a2 * 2 ** l22, { canvas: h22, context: m2, isNew: f22 } = l22 > 0 ? pn(d22, u2) : { canvas: e22, context: t22, isNew: i2.targetIsFresh };
    m2.imageSmoothingQuality = "high", i2.fillBlack ? (m2.fillStyle = "black", m2.fillRect(0, 0, d22, u2)) : f22 || m2.clearRect(0, 0, d22, u2), this.drawWithFit(m2, { fit: i2.fit, rotation: i2.rotation, crop: i2.crop }), m2.globalCompositeOperation = "copy";
    for (let p22 = l22; p22 > 1; p22--) {
      let e3 = r2 * 2 ** p22, t3 = a2 * 2 ** p22;
      m2.drawImage(h22, 0, 0, e3, t3, 0, 0, e3 / 2, t3 / 2);
    }
    m2.globalCompositeOperation = "source-over", l22 > 0 && (t22.imageSmoothingQuality = "high", t22.globalCompositeOperation = "copy", t22.drawImage(h22, 0, 0, 2 * r2, 2 * a2, 0, 0, r2, a2), t22.globalCompositeOperation = "source-over");
  }
  toCanvasImageSource() {
    if (this._closed) throw new Error("VideoSample is closed.");
    if (o2(this._data !== null), this._data instanceof cn || this._data instanceof Uint8Array) {
      let e22 = this.toVideoFrame();
      return queueMicrotask(() => e22.close()), e22;
    }
    return this._data;
  }
  async transform(e22) {
    if (!e22 || typeof e22 != "object") throw new TypeError("options must be an object.");
    if (e22.width !== void 0 && (!Number.isInteger(e22.width) || e22.width <= 0)) throw new TypeError("options.width, when provided, must be a positive integer.");
    if (e22.height !== void 0 && (!Number.isInteger(e22.height) || e22.height <= 0)) throw new TypeError("options.height, when provided, must be a positive integer.");
    if (e22.roundDimensionsTo !== void 0 && (!Number.isInteger(e22.roundDimensionsTo) || e22.roundDimensionsTo <= 0)) throw new TypeError("options.roundDimensionsTo, when provided, must be a positive integer.");
    if (e22.fit !== void 0 && !["fill", "contain", "cover"].includes(e22.fit)) throw new TypeError('options.fit, when provided, must be one of "fill", "contain", or "cover".');
    if (e22.width !== void 0 && e22.height !== void 0 && e22.fit === void 0) throw new TypeError("When both options.width and options.height are provided, options.fit must also be provided.");
    if (e22.rotate !== void 0 && ![0, 90, 180, 270].includes(e22.rotate)) throw new TypeError("options.rotate, when provided, must be 0, 90, 180 or 270.");
    if (e22.crop !== void 0 && bn(e22.crop, "options."), e22.alpha !== void 0 && !["keep", "discard"].includes(e22.alpha)) throw new TypeError("options.alpha, when provided, must be 'keep' or 'discard'.");
    let t22 = c2(this.rotation + (e22.rotate ?? 0)), [i2, r2] = t22 % 180 == 0 ? [this.squarePixelWidth, this.squarePixelHeight] : [this.squarePixelHeight, this.squarePixelWidth], a2 = e22.crop;
    a2 && (a2 = wn(a2, i2, r2));
    let s2 = a2 ? a2.width : i2, n2 = a2 ? a2.height : r2, o22 = s2 / n2, l22, d22;
    e22.width !== void 0 && e22.height === void 0 ? (l22 = e22.width, d22 = l22 / o22) : e22.width === void 0 && e22.height !== void 0 ? (d22 = e22.height, l22 = d22 * o22) : e22.width !== void 0 && e22.height !== void 0 ? (l22 = e22.width, d22 = e22.height) : (l22 = s2, d22 = n2), l22 = V(l22, e22.roundDimensionsTo ?? 1), d22 = V(d22, e22.roundDimensionsTo ?? 1);
    let u2 = { width: l22, height: d22, fit: e22.fit ?? "fill", rotation: t22, crop: a2 ?? { left: 0, top: 0, width: i2, height: r2 }, alpha: e22.alpha ?? "keep" };
    for (let c22 of hn) {
      let e3 = c22(this, u2);
      if (e3 instanceof Promise && (e3 = await e3), e3 !== null) return e3;
    }
    let { canvas: h22, context: m2, isNew: f22 } = pn(u2.width, u2.height);
    return this._drawWithFitAndMipmapping(h22, m2, { fit: u2.fit, rotation: u2.rotation, crop: u2.crop, targetIsFresh: f22, fillBlack: u2.alpha === "discard" }), new _un(h22, { timestamp: this.timestamp, duration: this.duration, rotation: 0 });
  }
  setRotation(e22) {
    if (![0, 90, 180, 270].includes(e22)) throw new TypeError("newRotation must be 0, 90, 180, or 270.");
    this.rotation = e22;
  }
  setTimestamp(e22) {
    if (!Number.isFinite(e22)) throw new TypeError("newTimestamp must be a number.");
    this.timestamp = e22;
  }
  setDuration(e22) {
    if (!Number.isFinite(e22) || e22 < 0) throw new TypeError("newDuration must be a non-negative number.");
    this.duration = e22;
  }
  setEncodeOptions(e22) {
    if (!e22 || typeof e22 != "object") throw new TypeError("newEncodeOptions must be an object.");
    this.encodeOptions = e22;
  }
  [Symbol.dispose]() {
    this.close();
  }
}, hn = [], mn = [], fn = 0, pn = (e22, t22) => {
  for (let a2 of mn) if (a2.canvas.width === e22 && a2.canvas.height === t22) return a2.age = fn++, { canvas: a2.canvas, context: a2.context, isNew: !1 };
  let i2;
  if (typeof OffscreenCanvas < "u") i2 = new OffscreenCanvas(e22, t22);
  else {
    if (typeof window > "u" || typeof document > "u") throw new Error("Cannot transform VideoSamples in this environment. Either run in an environment with OffscreenCanvas or HTMLCanvasElement, or supply a custom VideoSample transformer using registerVideoSampleTransformer().");
    i2 = document.createElement("canvas"), i2.width = e22, i2.height = t22;
  }
  let r2 = i2.getContext("2d", { alpha: !0, willReadFrequently: !1 });
  if (!r2) throw new Error("The '2d' canvas context is required to transform VideoSamples. Register a custom transformer using registerVideoSampleTransformer to work around this limitation.");
  return mn.length >= 3 && mn.splice(ke(mn, (e3) => e3.age), 1), mn.push({ canvas: i2, context: r2, age: fn++ }), { canvas: i2, context: r2, isNew: !0 };
}, gn = class {
  constructor(e22) {
    if (e22 !== void 0) {
      if (!e22 || typeof e22 != "object") throw new TypeError("init.colorSpace, when provided, must be an object.");
      let t22 = Object.keys(w);
      if (e22.primaries != null && !t22.includes(e22.primaries)) throw new TypeError(`init.colorSpace.primaries, when provided, must be one of ${t22.join(", ")}.`);
      let i2 = Object.keys(y);
      if (e22.transfer != null && !i2.includes(e22.transfer)) throw new TypeError(`init.colorSpace.transfer, when provided, must be one of ${i2.join(", ")}.`);
      let r2 = Object.keys(T2);
      if (e22.matrix != null && !r2.includes(e22.matrix)) throw new TypeError(`init.colorSpace.matrix, when provided, must be one of ${r2.join(", ")}.`);
      if (e22.fullRange != null && typeof e22.fullRange != "boolean") throw new TypeError("init.colorSpace.fullRange, when provided, must be a boolean.");
    }
    this.primaries = e22?.primaries ?? null, this.transfer = e22?.transfer ?? null, this.matrix = e22?.matrix ?? null, this.fullRange = e22?.fullRange ?? null;
  }
  toJSON() {
    return { primaries: this.primaries, transfer: this.transfer, matrix: this.matrix, fullRange: this.fullRange };
  }
}, kn = (e22) => typeof VideoFrame < "u" && e22 instanceof VideoFrame, wn = (e22, t22, i2) => {
  let r2 = Math.min(e22.left, t22), a2 = Math.min(e22.top, i2), s2 = Math.min(e22.width, t22 - r2), n2 = Math.min(e22.height, i2 - a2);
  return o2(s2 >= 0), o2(n2 >= 0), { left: r2, top: a2, width: s2, height: n2 };
}, bn = (e22, t22) => {
  if (!e22 || typeof e22 != "object") throw new TypeError(t22 + "crop, when provided, must be an object.");
  if (!Number.isInteger(e22.left) || e22.left < 0) throw new TypeError(t22 + "crop.left must be a non-negative integer.");
  if (!Number.isInteger(e22.top) || e22.top < 0) throw new TypeError(t22 + "crop.top must be a non-negative integer.");
  if (!Number.isInteger(e22.width) || e22.width < 0) throw new TypeError(t22 + "crop.width must be a non-negative integer.");
  if (!Number.isInteger(e22.height) || e22.height < 0) throw new TypeError(t22 + "crop.height must be a non-negative integer.");
}, yn = (e22) => {
  if (!e22 || typeof e22 != "object") throw new TypeError("options must be an object.");
  if (e22.colorSpace !== void 0 && !["display-p3", "srgb"].includes(e22.colorSpace)) throw new TypeError("options.colorSpace, when provided, must be 'display-p3' or 'srgb'.");
  if (e22.format !== void 0 && typeof e22.format != "string") throw new TypeError("options.format, when provided, must be a string.");
  if (e22.layout !== void 0) {
    if (!Array.isArray(e22.layout)) throw new TypeError("options.layout, when provided, must be an array.");
    for (let t22 of e22.layout) {
      if (!t22 || typeof t22 != "object") throw new TypeError("Each entry in options.layout must be an object.");
      if (!Number.isInteger(t22.offset) || t22.offset < 0) throw new TypeError("plane.offset must be a non-negative integer.");
      if (!Number.isInteger(t22.stride) || t22.stride < 0) throw new TypeError("plane.stride must be a non-negative integer.");
    }
  }
  if (e22.rect !== void 0) {
    if (!e22.rect || typeof e22.rect != "object") throw new TypeError("options.rect, when provided, must be an object.");
    if (e22.rect.x !== void 0 && (!Number.isInteger(e22.rect.x) || e22.rect.x < 0)) throw new TypeError("options.rect.x, when provided, must be a non-negative integer.");
    if (e22.rect.y !== void 0 && (!Number.isInteger(e22.rect.y) || e22.rect.y < 0)) throw new TypeError("options.rect.y, when provided, must be a non-negative integer.");
    if (e22.rect.width !== void 0 && (!Number.isInteger(e22.rect.width) || e22.rect.width < 0)) throw new TypeError("options.rect.width, when provided, must be a non-negative integer.");
    if (e22.rect.height !== void 0 && (!Number.isInteger(e22.rect.height) || e22.rect.height < 0)) throw new TypeError("options.rect.height, when provided, must be a non-negative integer.");
  }
}, vn = (e22, t22, i2) => {
  let r2 = Tn(e22), a2 = [], s2 = 0;
  for (let n2 of r2) {
    let e3 = Math.ceil(t22 / n2.widthDivisor), r3 = Math.ceil(i2 / n2.heightDivisor), o22 = e3 * n2.sampleBytes, c22 = o22 * r3;
    a2.push({ offset: s2, stride: o22 }), s2 += c22;
  }
  return a2;
}, Tn = (e22) => {
  let t22 = (e3, t3, i2, r2, a2) => {
    let s2 = [{ sampleBytes: e3, widthDivisor: 1, heightDivisor: 1 }, { sampleBytes: t3, widthDivisor: i2, heightDivisor: r2 }, { sampleBytes: t3, widthDivisor: i2, heightDivisor: r2 }];
    return a2 && s2.push({ sampleBytes: e3, widthDivisor: 1, heightDivisor: 1 }), s2;
  };
  switch (e22) {
    case "I420":
      return t22(1, 1, 2, 2, !1);
    case "I420P10":
    case "I420P12":
      return t22(2, 2, 2, 2, !1);
    case "I420A":
      return t22(1, 1, 2, 2, !0);
    case "I420AP10":
    case "I420AP12":
      return t22(2, 2, 2, 2, !0);
    case "I422":
      return t22(1, 1, 2, 1, !1);
    case "I422P10":
    case "I422P12":
      return t22(2, 2, 2, 1, !1);
    case "I422A":
      return t22(1, 1, 2, 1, !0);
    case "I422AP10":
    case "I422AP12":
      return t22(2, 2, 2, 1, !0);
    case "I444":
      return t22(1, 1, 1, 1, !1);
    case "I444P10":
    case "I444P12":
      return t22(2, 2, 1, 1, !1);
    case "I444A":
      return t22(1, 1, 1, 1, !0);
    case "I444AP10":
    case "I444AP12":
      return t22(2, 2, 1, 1, !0);
    case "NV12":
      return [{ sampleBytes: 1, widthDivisor: 1, heightDivisor: 1 }, { sampleBytes: 2, widthDivisor: 2, heightDivisor: 2 }];
    case "RGBA":
    case "RGBX":
    case "BGRA":
    case "BGRX":
      return [{ sampleBytes: 4, widthDivisor: 1, heightDivisor: 1 }];
    default:
      N(e22), o2(!1);
  }
}, Sn = (e22, t22) => {
  let i2 = { left: 0, top: 0, width: e22.codedWidth, height: e22.codedHeight }, r2 = t22.rect, a2 = Pn(i2, r2, e22.codedWidth, e22.codedHeight, e22.format), s2 = t22.layout, n2;
  if (t22.format && t22.format !== e22.format) {
    if (!["RGBA", "RGBX", "BGRA", "BGRX"].includes(t22.format)) throw new Error("NotSupportedError: Invalid destination format.");
    n2 = t22.format;
  } else n2 = e22.format;
  return xn(a2, n2, s2);
}, Pn = (e22, t22, i2, r2, a2) => {
  let s2 = { ...e22 };
  if (t22 !== void 0) {
    if (t22.width === 0 || t22.height === 0) throw new TypeError("visibleRect dimensions cannot be zero.");
    if ((t22.x || 0) + (t22.width || 0) > i2) throw new TypeError("visibleRect exceeds codedWidth.");
    if ((t22.y || 0) + (t22.height || 0) > r2) throw new TypeError("visibleRect exceeds codedHeight.");
    s2.x = t22.x || 0, s2.y = t22.y || 0, s2.width = t22.width || 0, s2.height = t22.height || 0;
  }
  if (!Cn(a2, s2)) throw new TypeError("visibleRect alignment is invalid for the format.");
  return s2;
}, Cn = (e22, t22) => {
  if (e22 === null) return !0;
  let i2 = Tn(e22);
  for (let r2 = 0; r2 < i2.length; r2++) {
    let e3 = i2[r2], a2 = e3.widthDivisor, s2 = e3.heightDivisor;
    if ((t22.x || 0) % a2 !== 0 || (t22.y || 0) % s2 !== 0) return !1;
  }
  return !0;
}, xn = (e22, t22, i2) => {
  let r2 = Tn(t22), a2 = r2.length;
  if (i2 !== void 0 && i2.length !== a2) throw new TypeError(`Layout must have ${a2} planes.`);
  let s2 = 0, n2 = [], o22 = [];
  for (let c22 = 0; c22 < a2; c22++) {
    let t3 = r2[c22], a3 = t3.sampleBytes, l22 = t3.widthDivisor, d22 = t3.heightDivisor, u2 = { destinationOffset: 0, destinationStride: 0, sourceTop: 0, sourceHeight: 0, sourceLeftBytes: 0, sourceWidthBytes: 0 };
    if (u2.sourceTop = Math.ceil(Math.trunc(e22.y || 0) / d22), u2.sourceHeight = Math.ceil(Math.trunc(e22.height || 0) / d22), u2.sourceLeftBytes = Math.floor(Math.trunc(e22.x || 0) / l22) * a3, u2.sourceWidthBytes = Math.floor(Math.trunc(e22.width || 0) / l22) * a3, i2 !== void 0) {
      let e3 = i2[c22];
      if (e3.stride < u2.sourceWidthBytes) throw new TypeError(`Stride for plane ${c22} is too small.`);
      u2.destinationOffset = e3.offset, u2.destinationStride = e3.stride;
    } else u2.destinationOffset = s2, u2.destinationStride = u2.sourceWidthBytes;
    let h22 = u2.destinationStride * u2.sourceHeight + u2.destinationOffset;
    if (h22 > 4294967295) throw new TypeError("Allocation size exceeds limit.");
    o22.push(h22), s2 = Math.max(s2, h22);
    for (let e3 = 0; e3 < c22; e3++) {
      let t4 = n2[e3];
      if (!(o22[c22] <= t4.destinationOffset || o22[e3] <= u2.destinationOffset)) throw new TypeError("Planes overlap.");
    }
    n2.push(u2);
  }
  return { allocationSize: s2, computedLayouts: n2 };
}, En = /* @__PURE__ */ new Set(["f32", "f32-planar", "s16", "s16-planar", "s32", "s32-planar", "u8", "u8-planar"]), In = class {
  constructor() {
    this._referenceCount = 0;
  }
}, _n = class __n {
  get microsecondTimestamp() {
    return Math.trunc(X * this.timestamp);
  }
  get microsecondDuration() {
    return Math.trunc(X * this.duration);
  }
  constructor(e22) {
    if (this._closed = !1, Rn(e22)) {
      if (e22.format === null) throw new TypeError("AudioData with null format is not supported.");
      this._data = e22, this.format = e22.format, this.sampleRate = e22.sampleRate, this.numberOfFrames = e22.numberOfFrames, this.numberOfChannels = e22.numberOfChannels, this.timestamp = e22.timestamp / 1e6, this.duration = e22.numberOfFrames / e22.sampleRate;
    } else if (e22 instanceof In) {
      if (this._data = e22, e22._referenceCount++, this.format = e22.getFormat(), !En.has(this.format)) throw new TypeError("getFormat() must return an AudioSampleFormat.");
      if (this.sampleRate = e22.getSampleRate(), !Number.isInteger(this.sampleRate) || this.sampleRate <= 0) throw new TypeError("getSampleRate() must return a positive integer.");
      if (this.numberOfFrames = e22.getNumberOfFrames(), !Number.isInteger(this.numberOfFrames) || this.numberOfFrames < 0) throw new TypeError("getNumberOfFrames() must return a non-negative integer.");
      if (this.numberOfChannels = e22.getNumberOfChannels(), !Number.isInteger(this.numberOfChannels) || this.numberOfChannels <= 0) throw new TypeError("getNumberOfChannels() must return a positive integer.");
      if (this.timestamp = e22.getTimestamp(), !Number.isFinite(this.timestamp)) throw new TypeError("getTimestamp() must return a finite number.");
      this.duration = this.numberOfFrames / this.sampleRate;
    } else {
      if (!e22 || typeof e22 != "object") throw new TypeError("Invalid AudioDataInit: must be an object.");
      if (!En.has(e22.format)) throw new TypeError("Invalid AudioDataInit: invalid format.");
      if (!Number.isFinite(e22.sampleRate) || e22.sampleRate <= 0) throw new TypeError("Invalid AudioDataInit: sampleRate must be > 0.");
      if (!Number.isInteger(e22.numberOfChannels) || e22.numberOfChannels === 0) throw new TypeError("Invalid AudioDataInit: numberOfChannels must be an integer > 0.");
      if (!Number.isFinite(e22?.timestamp)) throw new TypeError("init.timestamp must be a number.");
      let t22 = e22.data.byteLength / (Bn(e22.format) * e22.numberOfChannels);
      if (!Number.isInteger(t22)) throw new TypeError("Invalid AudioDataInit: data size is not a multiple of frame size.");
      let i2;
      if (this.format = e22.format, this.sampleRate = e22.sampleRate, this.numberOfFrames = t22, this.numberOfChannels = e22.numberOfChannels, this.timestamp = e22.timestamp, this.duration = t22 / e22.sampleRate, e22.data instanceof ArrayBuffer) i2 = new Uint8Array(e22.data);
      else {
        if (!ArrayBuffer.isView(e22.data)) throw new TypeError("Invalid AudioDataInit: data is not a BufferSource.");
        i2 = new Uint8Array(e22.data.buffer, e22.data.byteOffset, e22.data.byteLength);
      }
      let r2 = this.numberOfFrames * this.numberOfChannels * Bn(this.format);
      if (i2.byteLength < r2) throw new TypeError("Invalid AudioDataInit: insufficient data size.");
      this._data = i2;
    }
    on?.register(this, { type: "audio", data: this._data }, this);
  }
  allocationSize(e22) {
    if (!e22 || typeof e22 != "object") throw new TypeError("options must be an object.");
    if (!Number.isInteger(e22.planeIndex) || e22.planeIndex < 0) throw new TypeError("planeIndex must be a non-negative integer.");
    if (e22.format !== void 0 && !En.has(e22.format)) throw new TypeError("Invalid format.");
    if (e22.frameOffset !== void 0 && (!Number.isInteger(e22.frameOffset) || e22.frameOffset < 0)) throw new TypeError("frameOffset must be a non-negative integer.");
    if (e22.frameCount !== void 0 && (!Number.isInteger(e22.frameCount) || e22.frameCount < 0)) throw new TypeError("frameCount must be a non-negative integer.");
    if (this._closed) throw new Error("AudioSample is closed.");
    let t22 = e22.format ?? this.format, i2 = e22.frameOffset ?? 0;
    if (i2 >= this.numberOfFrames) throw new RangeError("frameOffset out of range");
    let r2 = e22.frameCount !== void 0 ? e22.frameCount : this.numberOfFrames - i2;
    if (r2 > this.numberOfFrames - i2) throw new RangeError("frameCount out of range");
    let a2 = Bn(t22), s2 = An(t22);
    if (s2 && e22.planeIndex >= this.numberOfChannels) throw new RangeError("planeIndex out of range");
    if (!s2 && e22.planeIndex !== 0) throw new RangeError("planeIndex out of range");
    return (s2 ? r2 : r2 * this.numberOfChannels) * a2;
  }
  copyTo(e22, t22) {
    if (!C(e22)) throw new TypeError("destination must be an ArrayBuffer or an ArrayBuffer view.");
    if (!t22 || typeof t22 != "object") throw new TypeError("options must be an object.");
    if (!Number.isInteger(t22.planeIndex) || t22.planeIndex < 0) throw new TypeError("planeIndex must be a non-negative integer.");
    if (t22.format !== void 0 && !En.has(t22.format)) throw new TypeError("Invalid format.");
    if (t22.frameOffset !== void 0 && (!Number.isInteger(t22.frameOffset) || t22.frameOffset < 0)) throw new TypeError("frameOffset must be a non-negative integer.");
    if (t22.frameCount !== void 0 && (!Number.isInteger(t22.frameCount) || t22.frameCount < 0)) throw new TypeError("frameCount must be a non-negative integer.");
    if (this._closed) throw new Error("AudioSample is closed.");
    let { format: i2, frameCount: r2, frameOffset: a2 } = t22, { planeIndex: s2 } = t22, n2 = this.format, o22 = i2 ?? this.format;
    if (!o22) throw new Error("Destination format not determined");
    let c22 = this.numberOfFrames, l22 = this.numberOfChannels, d22 = a2 ?? 0;
    if (d22 >= c22) throw new RangeError("frameOffset out of range");
    let u2 = r2 !== void 0 ? r2 : c22 - d22;
    if (u2 > c22 - d22) throw new RangeError("frameCount out of range");
    let h22 = Bn(o22), m2 = An(o22);
    if (m2 && s2 >= l22) throw new RangeError("planeIndex out of range");
    if (!m2 && s2 !== 0) throw new RangeError("planeIndex out of range");
    let p22 = (m2 ? u2 : u2 * l22) * h22;
    if (e22.byteLength < p22) throw new RangeError("Destination buffer is too small");
    let g2 = f2(e22), k2 = Fn(o22);
    if (Rn(this._data)) Z() && l22 > 2 && o22 !== n2 ? Dn(this._data, g2, n2, o22, l22, s2, d22, u2) : this._data.copyTo(e22, { planeIndex: s2, frameOffset: d22, frameCount: u2, format: o22 });
    else {
      let e3 = Mn(n2), t3 = Bn(n2), i3 = An(n2), r3;
      if (this._data instanceof In) {
        let e4 = (e5) => {
          let r4 = this._data.getDataPlane(e5);
          if (!(r4 instanceof Uint8Array)) throw new TypeError("getDataPlane() must return a Uint8Array.");
          let a4 = c22 * t3 * (i3 ? 1 : l22);
          if (r4.byteLength !== a4) throw new TypeError(`Data plane ${e5} has invalid size. Expected exactly ${a4} bytes, got ${r4.byteLength} bytes.`);
          return r4;
        };
        if (i3) if (m2) r3 = e4(s2), s2 = 0;
        else {
          r3 = new Uint8Array(c22 * t3 * l22);
          for (let i4 = 0; i4 < l22; i4++) {
            let a4 = e4(i4);
            r3.set(a4, i4 * c22 * t3);
          }
        }
        else r3 = e4(0);
      } else r3 = this._data;
      let a3 = f2(r3);
      for (let n3 = 0; n3 < u2; n3++) if (m2) {
        let r4;
        r4 = i3 ? (s2 * c22 + (n3 + d22)) * t3 : ((n3 + d22) * l22 + s2) * t3, k2(g2, n3 * h22, e3(a3, r4));
      } else for (let r4 = 0; r4 < l22; r4++) {
        let s3;
        s3 = i3 ? (r4 * c22 + (n3 + d22)) * t3 : ((n3 + d22) * l22 + r4) * t3, k2(g2, (n3 * l22 + r4) * h22, e3(a3, s3));
      }
    }
  }
  clone() {
    if (this._closed) throw new Error("AudioSample is closed.");
    if (this._data instanceof In) {
      let e22 = new __n(this._data);
      return e22.setTimestamp(this.timestamp), e22;
    }
    if (Rn(this._data)) {
      let e22 = new __n(this._data.clone());
      return e22.setTimestamp(this.timestamp), e22;
    }
    return new __n({ format: this.format, sampleRate: this.sampleRate, numberOfFrames: this.numberOfFrames, numberOfChannels: this.numberOfChannels, timestamp: this.timestamp, data: this._data });
  }
  trim(e22, t22 = this.numberOfFrames) {
    if (!Number.isInteger(e22) || e22 < 0) throw new TypeError("startSample must be a non-negative integer.");
    if (!Number.isInteger(t22) || t22 < 0) throw new TypeError("endSample must be a non-negative integer.");
    if (e22 > this.numberOfFrames) throw new RangeError("startSample out of range.");
    if (t22 > this.numberOfFrames) throw new RangeError("endSample out of range.");
    if (t22 < e22) throw new RangeError("endSample must not be less than startSample.");
    if (this._closed) throw new Error("AudioSample is closed.");
    let i2 = t22 - e22, r2 = Bn(this.format), a2;
    if (An(this.format)) {
      let t3 = i2 * r2;
      if (a2 = new Uint8Array(t3 * this.numberOfChannels), i2 > 0) for (let r3 = 0; r3 < this.numberOfChannels; r3++) this.copyTo(a2.subarray(r3 * t3, (r3 + 1) * t3), { planeIndex: r3, format: this.format, frameOffset: e22, frameCount: i2 });
    } else a2 = new Uint8Array(i2 * this.numberOfChannels * r2), i2 > 0 && this.copyTo(a2, { planeIndex: 0, format: this.format, frameOffset: e22, frameCount: i2 });
    return new __n({ data: a2, format: this.format, sampleRate: this.sampleRate, numberOfChannels: this.numberOfChannels, timestamp: this.timestamp + e22 / this.sampleRate });
  }
  close() {
    this._closed || (on?.unregister(this), this._data instanceof In ? (this._data._referenceCount--, this._data._referenceCount === 0 && this._data.close()) : Rn(this._data) ? this._data.close() : this._data = new Uint8Array(0), this._closed = !0);
  }
  toAudioData() {
    if (this._closed) throw new Error("AudioSample is closed.");
    return this._data instanceof In ? this._createAudioDataFromData() : Rn(this._data) ? this._data.timestamp === this.microsecondTimestamp ? this._data.clone() : this._createAudioDataFromData() : new AudioData({ format: this.format, sampleRate: this.sampleRate, numberOfFrames: this.numberOfFrames, numberOfChannels: this.numberOfChannels, timestamp: this.microsecondTimestamp, data: this._data.buffer instanceof ArrayBuffer ? this._data.buffer : this._data.slice() });
  }
  _createAudioDataFromData() {
    if (An(this.format)) {
      let e22 = this.allocationSize({ planeIndex: 0, format: this.format }), t22 = new ArrayBuffer(e22 * this.numberOfChannels);
      for (let i2 = 0; i2 < this.numberOfChannels; i2++) this.copyTo(new Uint8Array(t22, i2 * e22, e22), { planeIndex: i2, format: this.format });
      return new AudioData({ format: this.format, sampleRate: this.sampleRate, numberOfFrames: this.numberOfFrames, numberOfChannels: this.numberOfChannels, timestamp: this.microsecondTimestamp, data: t22 });
    }
    {
      let e22 = new ArrayBuffer(this.allocationSize({ planeIndex: 0, format: this.format }));
      return this.copyTo(e22, { planeIndex: 0, format: this.format }), new AudioData({ format: this.format, sampleRate: this.sampleRate, numberOfFrames: this.numberOfFrames, numberOfChannels: this.numberOfChannels, timestamp: this.microsecondTimestamp, data: e22 });
    }
  }
  toAudioBuffer() {
    if (this._closed) throw new Error("AudioSample is closed.");
    let e22 = new AudioBuffer({ numberOfChannels: this.numberOfChannels, length: this.numberOfFrames, sampleRate: this.sampleRate }), t22 = new Float32Array(this.allocationSize({ planeIndex: 0, format: "f32-planar" }) / 4);
    for (let i2 = 0; i2 < this.numberOfChannels; i2++) this.copyTo(t22, { planeIndex: i2, format: "f32-planar" }), e22.copyToChannel(t22, i2);
    return e22;
  }
  setTimestamp(e22) {
    if (!Number.isFinite(e22)) throw new TypeError("newTimestamp must be a number.");
    this.timestamp = e22;
  }
  [Symbol.dispose]() {
    this.close();
  }
  static *_fromAudioBuffer(e22, t22) {
    if (!(e22 instanceof AudioBuffer)) throw new TypeError("audioBuffer must be an AudioBuffer.");
    let i2 = e22.numberOfChannels, r2 = e22.sampleRate, a2 = e22.length, s2 = Math.floor(24e4 / i2), n2 = 0, o22 = a2;
    for (; o22 > 0; ) {
      let a3 = Math.min(s2, o22), c22 = new Float32Array(i2 * a3);
      for (let t3 = 0; t3 < i2; t3++) e22.copyFromChannel(c22.subarray(t3 * a3, (t3 + 1) * a3), t3, n2);
      yield new __n({ format: "f32-planar", sampleRate: r2, numberOfFrames: a3, numberOfChannels: i2, timestamp: t22 + n2 / r2, data: c22 }), n2 += a3, o22 -= a3;
    }
  }
  static fromAudioBuffer(e22, t22) {
    if (!(e22 instanceof AudioBuffer)) throw new TypeError("audioBuffer must be an AudioBuffer.");
    let i2 = e22.numberOfChannels, r2 = e22.sampleRate, a2 = e22.length, s2 = Math.floor(24e4 / i2), n2 = 0, o22 = a2, c22 = [];
    for (; o22 > 0; ) {
      let a3 = Math.min(s2, o22), l22 = new Float32Array(i2 * a3);
      for (let t3 = 0; t3 < i2; t3++) e22.copyFromChannel(l22.subarray(t3 * a3, (t3 + 1) * a3), t3, n2);
      let d22 = new __n({ format: "f32-planar", sampleRate: r2, numberOfFrames: a3, numberOfChannels: i2, timestamp: t22 + n2 / r2, data: l22 });
      c22.push(d22), n2 += a3, o22 -= a3;
    }
    return c22;
  }
}, Bn = (e22) => {
  switch (e22) {
    case "u8":
    case "u8-planar":
      return 1;
    case "s16":
    case "s16-planar":
      return 2;
    case "s32":
    case "s32-planar":
    case "f32":
    case "f32-planar":
      return 4;
    default:
      throw new Error("Unknown AudioSampleFormat");
  }
}, An = (e22) => {
  switch (e22) {
    case "u8-planar":
    case "s16-planar":
    case "s32-planar":
    case "f32-planar":
      return !0;
    default:
      return !1;
  }
}, Mn = (e22) => {
  switch (e22) {
    case "u8":
    case "u8-planar":
      return (e3, t22) => (e3.getUint8(t22) - 128) / 128;
    case "s16":
    case "s16-planar":
      return (e3, t22) => e3.getInt16(t22, !0) / 32768;
    case "s32":
    case "s32-planar":
      return (e3, t22) => e3.getInt32(t22, !0) / 2147483648;
    case "f32":
    case "f32-planar":
      return (e3, t22) => e3.getFloat32(t22, !0);
  }
}, Fn = (e22) => {
  switch (e22) {
    case "u8":
    case "u8-planar":
      return (e3, t22, i2) => e3.setUint8(t22, U(127.5 * (i2 + 1), 0, 255));
    case "s16":
    case "s16-planar":
      return (e3, t22, i2) => e3.setInt16(t22, U(Math.round(32767 * i2), -32768, 32767), !0);
    case "s32":
    case "s32-planar":
      return (e3, t22, i2) => e3.setInt32(t22, U(Math.round(2147483647 * i2), -2147483648, 2147483647), !0);
    case "f32":
    case "f32-planar":
      return (e3, t22, i2) => e3.setFloat32(t22, i2, !0);
  }
}, Rn = (e22) => typeof AudioData < "u" && e22 instanceof AudioData, Dn = (e22, t22, i2, r2, a2, s2, n2, o22) => {
  let c22 = Mn(i2), l22 = Fn(r2), d22 = Bn(i2), u2 = Bn(r2), h22 = An(i2);
  if (An(r2)) if (h22) {
    let r3 = new ArrayBuffer(o22 * d22), a3 = f2(r3);
    e22.copyTo(r3, { planeIndex: s2, frameOffset: n2, frameCount: o22, format: i2 });
    for (let e3 = 0; e3 < o22; e3++)
      l22(t22, e3 * u2, c22(a3, e3 * d22));
  } else {
    let r3 = new ArrayBuffer(o22 * a2 * d22), h3 = f2(r3);
    e22.copyTo(r3, { planeIndex: 0, frameOffset: n2, frameCount: o22, format: i2 });
    for (let e3 = 0; e3 < o22; e3++)
      l22(t22, e3 * u2, c22(h3, (e3 * a2 + s2) * d22));
  }
  else if (h22) {
    let r3 = new ArrayBuffer(o22 * d22), s3 = f2(r3);
    for (let h3 = 0; h3 < a2; h3++) {
      e22.copyTo(r3, { planeIndex: h3, frameOffset: n2, frameCount: o22, format: i2 });
      for (let e3 = 0; e3 < o22; e3++)
        l22(t22, (e3 * a2 + h3) * u2, c22(s3, e3 * d22));
    }
  } else {
    let r3 = new ArrayBuffer(o22 * a2 * d22), s3 = f2(r3);
    e22.copyTo(r3, { planeIndex: 0, frameOffset: n2, frameCount: o22, format: i2 });
    for (let e3 = 0; e3 < o22; e3++) for (let i3 = 0; i3 < a2; i3++) {
      let r4 = e3 * a2 + i3;
      l22(t22, r4 * u2, c22(s3, r4 * d22));
    }
  }
}, On = /* @__PURE__ */ new Map(), Nn = /* @__PURE__ */ new Map(), zn = (e22, t22) => {
  if (!t22 || typeof t22 != "object") throw new TypeError("Encoding options must be an object.");
  if (t22.alpha !== void 0 && !["discard", "keep"].includes(t22.alpha)) throw new TypeError("options.alpha, when provided, must be 'discard' or 'keep'.");
  let i2 = t22.bitrateMode;
  if (i2 !== void 0 && !["constant", "variable"].includes(i2)) throw new TypeError("bitrateMode, when provided, must be 'constant' or 'variable'.");
  if (t22.latencyMode !== void 0 && !["quality", "realtime"].includes(t22.latencyMode)) throw new TypeError("latencyMode, when provided, must be 'quality' or 'realtime'.");
  if (t22.fullCodecString !== void 0 && typeof t22.fullCodecString != "string") throw new TypeError("fullCodecString, when provided, must be a string.");
  if (t22.fullCodecString !== void 0 && st(t22.fullCodecString) !== e22) throw new TypeError(`fullCodecString, when provided, must be a string that matches the specified codec (${e22}).`);
  if (t22.hardwareAcceleration !== void 0 && !["no-preference", "prefer-hardware", "prefer-software"].includes(t22.hardwareAcceleration)) throw new TypeError("hardwareAcceleration, when provided, must be 'no-preference', 'prefer-hardware' or 'prefer-software'.");
  if (t22.scalabilityMode !== void 0 && typeof t22.scalabilityMode != "string") throw new TypeError("scalabilityMode, when provided, must be a string.");
  if (t22.contentHint !== void 0 && typeof t22.contentHint != "string") throw new TypeError("contentHint, when provided, must be a string.");
}, Ln = (e22) => {
  let t22 = e22.bitrateMode, i2 = e22.quality._toVideoRateControl(e22.codec, e22.width, e22.height, t22), r2 = (t3, i3, r3) => {
    return { codec: e22.fullCodecString ?? Ye(e22.codec, e22.width, e22.height, r3, e22.alpha === "keep"), width: e22.width, height: e22.height, displayWidth: e22.squarePixelWidth, displayHeight: e22.squarePixelHeight, bitrate: t3, bitrateMode: i3, alpha: e22.alpha ?? "discard", framerate: e22.framerate, latencyMode: e22.latencyMode, hardwareAcceleration: e22.hardwareAcceleration, scalabilityMode: e22.scalabilityMode, contentHint: e22.contentHint, ...(a3 = e22.codec, a3 === "avc" ? { avc: { format: "avc" } } : a3 === "hevc" ? { hevc: { format: "hevc" } } : {}) };
    var a3;
  }, a2 = [];
  return i2.quantizer !== null && a2.push({ config: r2(void 0, "quantizer", i2.bitrate), quantizer: i2.quantizer }), i2.bitrateMode !== "quantizer" && a2.push({ config: r2(i2.bitrate, i2.bitrateMode, i2.bitrate), quantizer: null }), o2(a2.length > 0), a2;
}, Un = (e22, t22) => {
  if (!t22 || typeof t22 != "object") throw new TypeError("Encoding options must be an object.");
  let i2 = t22.bitrateMode;
  if (i2 !== void 0 && !["constant", "variable"].includes(i2)) throw new TypeError("bitrateMode, when provided, must be 'constant' or 'variable'.");
  if (t22.fullCodecString !== void 0 && typeof t22.fullCodecString != "string") throw new TypeError("fullCodecString, when provided, must be a string.");
  if (t22.fullCodecString !== void 0 && st(t22.fullCodecString) !== e22) throw new TypeError(`fullCodecString, when provided, must be a string that matches the specified codec (${e22}).`);
}, Wn = (e22) => {
  var t22, i2;
  let r2 = e22.bitrateMode;
  return { codec: e22.fullCodecString ?? et(e22.codec, e22.numberOfChannels, e22.sampleRate), numberOfChannels: e22.numberOfChannels, sampleRate: e22.sampleRate, bitrate: (t22 = e22.quality) == null ? void 0 : t22._toAudioBitrate(e22.codec), bitrateMode: ((i2 = e22.quality) == null ? void 0 : i2._bitrateMode) ?? r2, ...(a2 = e22.codec, a2 === "aac" ? { aac: { format: "aac" } } : a2 === "opus" ? { opus: { format: "opus" } } : {}) };
  var a2;
}, qn = class {
  constructor(e22) {
    if (typeof e22 != "number" && typeof e22 != "string" || (e22 = { quality: e22 }), !e22 || typeof e22 != "object") throw new TypeError("options must be an object.");
    if (e22.bitrateMode !== void 0 && !["constant", "variable"].includes(e22.bitrateMode)) throw new TypeError("options.bitrateMode, when provided, must be 'constant' or 'variable'.");
    if ("quality" in e22) {
      if (typeof e22.quality == "string" ? !(e22.quality in Vn) : typeof e22.quality != "number" || Number.isNaN(e22.quality)) throw new TypeError("options.quality must be a number, or one of 'very-low', 'low', 'medium', 'high' or 'very-high'.");
      if (e22.preferBitrate !== void 0 && typeof e22.preferBitrate != "boolean") throw new TypeError("options.preferBitrate, when provided, must be a boolean.");
      if ("bitrate" in e22 || "quantizer" in e22) throw new TypeError("options.quality cannot be combined with options.bitrate or options.quantizer.");
      this._quality = typeof e22.quality == "string" ? Vn[e22.quality] : e22.quality, this._preferBitrate = e22.preferBitrate ?? !1, this._bitrate = void 0, this._quantizer = void 0;
    } else {
      if (e22.bitrate !== void 0 && (!Number.isInteger(e22.bitrate) || e22.bitrate <= 0)) throw new TypeError("options.bitrate, when provided, must be a positive integer.");
      if (e22.quantizer !== void 0 && (!Number.isInteger(e22.quantizer) || e22.quantizer < 0)) throw new TypeError("options.quantizer, when provided, must be a non-negative integer.");
      if (e22.bitrate === void 0 && e22.quantizer === void 0) throw new TypeError("At least one of options.bitrate or options.quantizer must be set.");
      if ("preferBitrate" in e22) throw new TypeError("options.preferBitrate can only be combined with options.quality.");
      this._quality = void 0, this._preferBitrate = !1, this._bitrate = e22.bitrate, this._quantizer = e22.quantizer;
    }
    this._bitrateMode = e22.bitrateMode;
  }
  _toVideoRateControl(e22, t22, i2, r2) {
    let a2 = Hn[e22], s2 = null, n2 = this._bitrateMode ?? r2 ?? "variable";
    if (this._quantizer !== void 0) {
      if (a2) if (this._quantizer < a2.min || this._quantizer > a2.max) {
        if (this._bitrate === void 0) throw new Error(`Quantizer ${this._quantizer} is out of range for codec '${e22}'; must be between ${a2.min} and ${a2.max}.`);
      } else s2 = this._quantizer, this._bitrate === void 0 && (n2 = "quantizer");
      else if (this._bitrate === void 0) throw new Error(`Codec '${e22}' does not support quantizer-based encoding. Provide a bitrate in the Quality to define a fallback.`);
    } else this._bitrate === void 0 && a2 && !this._preferBitrate && (o2(this._quality !== void 0), s2 = U(Math.round((c22 = a2.worst, l22 = a2.best, d22 = this._quality, c22 + (l22 - c22) * d22)), a2.min, a2.max));
    var c22, l22, d22;
    let u2;
    if (this._bitrate !== void 0) u2 = this._bitrate;
    else {
      let r3 = this._quality;
      r3 === void 0 && (o2(s2 !== null && a2), r3 = U((s2 - a2.worst) / (a2.best - a2.worst), 0, 1)), u2 = jn(e22, t22, i2, $n(r3));
    }
    return { quantizer: s2, bitrate: u2, bitrateMode: n2 };
  }
  _toVideoBitrate(e22, t22, i2) {
    return this._bitrate !== void 0 ? this._bitrate : (o2(this._quality !== void 0), jn(e22, t22, i2, $n(this._quality)));
  }
  _toAudioBitrate(e22) {
    if (ze.includes(e22) || e22 === "flac") return;
    if (this._bitrate !== void 0) return this._bitrate;
    if (this._quality === void 0) throw new Error("This Quality defines neither a quality level nor a bitrate and therefore cannot be used for audio encoding.");
    let t22 = $n(this._quality), i2 = { aac: 128e3, opus: 64e3, mp3: 16e4, vorbis: 64e3, ac3: 384e3, eac3: 192e3, dts: 768e3 }[e22];
    if (!i2) throw new Error(`Unhandled codec: ${e22}`);
    let r2 = i2 * t22;
    return e22 === "aac" ? r2 = [96e3, 128e3, 16e4, 192e3].reduce((e3, t3) => Math.abs(t3 - r2) < Math.abs(e3 - r2) ? t3 : e3) : e22 === "opus" || e22 === "vorbis" ? r2 = Math.max(6e3, r2) : e22 === "mp3" && (r2 = [8e3, 16e3, 24e3, 32e3, 4e4, 48e3, 64e3, 8e4, 96e3, 112e3, 128e3, 16e4, 192e3, 224e3, 256e3, 32e4].reduce((e3, t3) => Math.abs(t3 - r2) < Math.abs(e3 - r2) ? t3 : e3)), 1e3 * Math.round(r2 / 1e3);
  }
}, Vn = { "very-low": 0, low: 0.25, medium: 0.5, high: 0.75, "very-high": 1 }, Hn = { avc: { min: 0, max: 51, worst: 41, best: 16 }, hevc: { min: 0, max: 51, worst: 41, best: 16 }, vp9: { min: 0, max: 63, worst: 52, best: 20 }, av1: { min: 0, max: 255, worst: 208, best: 80 } }, $n = (e22) => 0.3 * Math.exp(2.5538 * e22), jn = (e22, t22, i2, r2) => {
  let a2 = t22 * i2, s2 = 3e6, n2 = s2 * Math.pow(a2 / 2073600, 0.95) * { avc: 1, hevc: 0.6, vp9: 0.6, av1: 0.4, vp8: 1.2, prores: 73.33333333333333 }[e22] * r2;
  return 1e3 * Math.ceil(n2 / 1e3);
}, Kn = (e22, t22) => e22 === "avc" ? { avc: { quantizer: t22 } } : e22 === "hevc" ? { hevc: { quantizer: t22 } } : e22 === "vp9" ? { vp9: { quantizer: t22 } } : e22 === "av1" ? { av1: { quantizer: t22 } } : void o2(!1), Qn = async (e22, t22 = {}) => {
  let { width: i2 = 1280, height: r2 = 720, quality: a2, bitrate: s2, ...n2 } = t22;
  if (!Ne.includes(e22)) return !1;
  if (!Number.isInteger(i2) || i2 <= 0) throw new TypeError("width must be a positive integer.");
  if (!Number.isInteger(r2) || r2 <= 0) throw new TypeError("height must be a positive integer.");
  if (a2 !== void 0 && !(a2 instanceof qn)) throw new TypeError("quality, when provided, must be a Quality.");
  if (a2 !== void 0 && s2 !== void 0) throw new TypeError("quality and bitrate cannot both be provided.");
  if (s2 !== void 0 && !(s2 instanceof qn) && (!Number.isInteger(s2) || s2 <= 0)) throw new TypeError("bitrate must be a positive integer or a quality.");
  zn(e22, n2);
  let o22 = Gn(a2, s2) ?? new qn("medium"), c22;
  try {
    c22 = Ln({ codec: e22, width: i2, height: r2, quality: o22, framerate: void 0, ...n2, alpha: "discard" });
  } catch {
    return !1;
  }
  let l22 = JSON.stringify(c22), d22 = On.get(l22);
  if (d22) return d22;
  let u2 = (async () => {
    for (let { config: t3 } of c22) if (eo.some((i3) => i3.supports(e22, t3))) return !0;
    if (typeof VideoEncoder > "u" || (i2 % 2 == 1 || r2 % 2 == 1) && (e22 === "avc" || e22 === "hevc")) return !1;
    for (let { config: t3, quantizer: a3 } of c22) {
      try {
        if (!(await VideoEncoder.isConfigSupported(t3)).supported) continue;
      } catch {
        continue;
      }
      if (!te() || await new Promise(async (s3) => {
        try {
          let n3 = new VideoEncoder({ output: () => {
          }, error: () => s3(!1) });
          n3.configure(t3);
          let o3 = new Uint8Array(i2 * r2 * 4), c3 = new VideoFrame(o3, { format: "RGBA", codedWidth: i2, codedHeight: r2, timestamp: 0 });
          n3.encode(c3, a3 !== null ? Kn(e22, a3) : void 0), c3.close(), await n3.flush(), s3(!0);
        } catch {
          s3(!1);
        }
      })) return !0;
    }
    return !1;
  })();
  return On.set(l22, u2), u2;
}, Gn = (e22, t22) => e22 !== void 0 ? e22 : t22 !== void 0 ? t22 instanceof qn ? t22 : new qn({ bitrate: t22 }) : void 0, Xn = async (e22 = Ue, t22) => {
  let i2 = await Promise.all(e22.map((e3) => (async (e4, t3 = {}) => {
    let { numberOfChannels: i3 = 2, sampleRate: r2 = 48e3, quality: a2, bitrate: s2, ...n2 } = t3;
    if (!Ue.includes(e4)) return !1;
    if (!Number.isInteger(i3) || i3 <= 0) throw new TypeError("numberOfChannels must be a positive integer.");
    if (!Number.isInteger(r2) || r2 <= 0) throw new TypeError("sampleRate must be a positive integer.");
    if (a2 !== void 0 && !(a2 instanceof qn)) throw new TypeError("quality, when provided, must be a Quality.");
    if (a2 !== void 0 && s2 !== void 0) throw new TypeError("quality and bitrate cannot both be provided.");
    if (s2 !== void 0 && !(s2 instanceof qn) && (!Number.isInteger(s2) || s2 <= 0)) throw new TypeError("bitrate must be a positive integer.");
    Un(e4, n2);
    let o22 = Gn(a2, s2) ?? new qn("medium"), c22 = Wn({ codec: e4, numberOfChannels: i3, sampleRate: r2, quality: o22, ...n2 }), l22 = JSON.stringify(c22), d22 = Nn.get(l22);
    if (d22) return d22;
    let u2 = (async () => {
      if (to.some((t4) => t4.supports(e4, c22)) || ze.includes(e4)) return !0;
      if (typeof AudioEncoder > "u") return !1;
      try {
        return (await AudioEncoder.isConfigSupported(c22)).supported === !0;
      } catch {
        return !1;
      }
    })();
    return Nn.set(l22, u2), u2;
  })(e3, t22)));
  return e22.filter((e3, t3) => i2[t3]);
}, Yn = async (e22, t22) => {
  for (let i2 of e22) if (await Qn(i2, t22)) return i2;
  return null;
}, Jn = [], Zn = [], eo = [], to = [], io = (e22) => {
  if (!e22 || typeof e22 != "object") throw new TypeError("options must be an object.");
  if (e22.metadataOnly !== void 0 && typeof e22.metadataOnly != "boolean") throw new TypeError("options.metadataOnly, when defined, must be a boolean.");
  if (e22.verifyKeyPackets !== void 0 && typeof e22.verifyKeyPackets != "boolean") throw new TypeError("options.verifyKeyPackets, when defined, must be a boolean.");
  if (e22.verifyKeyPackets && e22.metadataOnly) throw new TypeError("options.verifyKeyPackets and options.metadataOnly cannot be enabled together.");
  if (e22.skipLiveWait !== void 0 && typeof e22.skipLiveWait != "boolean") throw new TypeError("options.skipLiveWait, when defined, must be a boolean.");
}, ro = (e22) => {
  if (!fe(e22)) throw new TypeError("timestamp must be a number.");
}, ao = (e22, t22, i2) => i2.verifyKeyPackets ? t22.then(async (t3) => {
  if (!t3 || t3.type === "delta") return t3;
  let i3 = await e22.determinePacketType(t3);
  return i3 && (t3.type = i3), t3;
}) : t22, so = class {
  constructor(e22) {
    if (!(e22 instanceof wo)) throw new TypeError("track must be an InputTrack.");
    this._track = e22;
  }
  async getFirstPacket(e22 = {}) {
    if (io(e22), this._track.input._disposed) throw new Ro();
    return ao(this._track, this._track._backing.getFirstPacket(e22), e22);
  }
  async getFirstKeyPacket(e22 = {}) {
    io(e22);
    let t22 = await this.getFirstPacket(e22);
    return t22 ? t22.type === "key" ? t22 : this.getNextKeyPacket(t22, e22) : null;
  }
  async getPacket(e22, t22 = {}) {
    if (ro(e22), io(t22), this._track.input._disposed) throw new Ro();
    return ao(this._track, this._track._backing.getPacket(e22, t22), t22);
  }
  async getNextPacket(e22, t22 = {}) {
    if (!(e22 instanceof Oi)) throw new TypeError("packet must be an EncodedPacket.");
    if (io(t22), this._track.input._disposed) throw new Ro();
    return ao(this._track, this._track._backing.getNextPacket(e22, t22), t22);
  }
  async getKeyPacket(e22, t22 = {}) {
    if (ro(e22), io(t22), this._track.input._disposed) throw new Ro();
    if (!t22.verifyKeyPackets) return this._track._backing.getKeyPacket(e22, t22);
    let i2 = await this._track._backing.getKeyPacket(e22, t22);
    return i2 && (o2(i2.type === "key"), await this._track.determinePacketType(i2) === "delta" ? this.getKeyPacket(i2.timestamp - 1 / await this._track.getTimeResolution(), t22) : i2);
  }
  async getNextKeyPacket(e22, t22 = {}) {
    if (!(e22 instanceof Oi)) throw new TypeError("packet must be an EncodedPacket.");
    if (io(t22), this._track.input._disposed) throw new Ro();
    if (!t22.verifyKeyPackets) return this._track._backing.getNextKeyPacket(e22, t22);
    let i2 = await this._track._backing.getNextKeyPacket(e22, t22);
    return i2 && (o2(i2.type === "key"), await this._track.determinePacketType(i2) === "delta" ? this.getNextKeyPacket(i2, t22) : i2);
  }
  packets(e22, t22, i2 = {}) {
    if (e22 !== void 0 && !(e22 instanceof Oi)) throw new TypeError("startPacket must be an EncodedPacket.");
    if (e22 !== void 0 && e22.isMetadataOnly && !i2?.metadataOnly) throw new TypeError("startPacket can only be metadata-only if options.metadataOnly is enabled.");
    if (t22 !== void 0 && !(t22 instanceof Oi)) throw new TypeError("endPacket must be an EncodedPacket.");
    if (io(i2), this._track.input._disposed) throw new Ro();
    let r2 = [], { promise: a2, resolve: s2 } = F2(), { promise: n2, resolve: o22 } = F2(), c22 = !1, l22 = !1, d22 = null, u2 = !1, h22 = [], m2 = () => Math.max(2, h22.length);
    (async () => {
      let d3 = e22 ?? await this.getFirstPacket(i2);
      for (; d3 && !l22 && !this._track.input._disposed && !(t22 && d3.sequenceNumber >= t22?.sequenceNumber); ) r2.length > m2() ? ({ promise: n2, resolve: o22 } = F2(), await n2) : (r2.push(d3), s2(), { promise: a2, resolve: s2 } = F2(), d3 = await this.getNextPacket(d3, i2));
      c22 = !0, s2();
    })().catch((e3) => {
      u2 || (d22 = e3, u2 = !0, s2());
    });
    let f22 = this._track;
    return { async next() {
      for (; ; ) {
        if (f22.input._disposed) throw new Ro();
        if (l22) return { value: void 0, done: !0 };
        if (u2) throw d22;
        if (r2.length > 0) {
          let e3 = r2.shift(), t3 = performance.now();
          for (h22.push(t3); h22.length > 0 && t3 - h22[0] >= 1e3; ) h22.shift();
          return o22(), { value: e3, done: !1 };
        }
        if (c22) return { value: void 0, done: !0 };
        await a2;
      }
    }, return: async () => (l22 = !0, o22(), s2(), { value: void 0, done: !0 }), async throw(e3) {
      throw e3;
    }, [Symbol.asyncIterator]() {
      return this;
    } };
  }
}, no = class {
  constructor(e22, t22) {
    this.onSample = e22, this.onError = t22;
  }
}, oo = class {
  mediaSamplesInRange(e22 = -1 / 0, t22 = 1 / 0, i2) {
    ro(e22), ro(t22);
    let r2 = [], a2 = !1, s2 = null, { promise: n2, resolve: o22 } = F2(), { promise: c22, resolve: l22 } = F2(), d22 = !1, u2 = !1, h22 = !1, m2 = null, f22 = null, p22 = !1, g2 = { ...i2, verifyKeyPackets: !0, metadataOnly: !1 };
    (async () => {
      m2 = await this._createDecoder((i4) => {
        l22(), i4.timestamp >= t22 && (u2 = !0), u2 ? i4.close() : (s2 && (i4.timestamp > e22 ? (r2.push(s2), a2 = !0) : s2.close()), i4.timestamp >= e22 && (r2.push(i4), a2 = !0), s2 = a2 ? null : i4, r2.length > 0 && (o22(), { promise: n2, resolve: o22 } = F2()));
      }, (e3) => {
        p22 || (f22 = e3, p22 = !0, o22());
      });
      let i3 = this._createPacketSink(), k3 = await i3.getKeyPacket(e22, g2) ?? await i3.getFirstKeyPacket(g2), w3 = k3, b2 = i3.packets(k3 ?? void 0, void 0, g2);
      for (await b2.next(); w3 && !u2 && !this._track.input._disposed; ) {
        let e3 = co(r2.length);
        if (r2.length + m2.getDecodeQueueSize() > e3) {
          ({ promise: c22, resolve: l22 } = F2()), await c22;
          continue;
        }
        m2.decode(w3);
        let t3 = await b2.next();
        if (t3.done) break;
        w3 = t3.value;
      }
      await b2.return(), h22 || this._track.input._disposed || await m2.flush(), !a2 && s2 && r2.push(s2), d22 = !0, o22();
    })().catch((e3) => {
      p22 || (f22 = e3, p22 = !0, o22());
    }).finally(() => {
      m2?.close();
    });
    let k2 = this._track, w2 = () => {
      s2?.close();
      for (let e3 of r2) e3.close();
    };
    return { async next() {
      for (; ; ) {
        if (k2.input._disposed) throw w2(), new Ro();
        if (h22) return { value: void 0, done: !0 };
        if (p22) throw w2(), f22;
        if (r2.length > 0) {
          let e3 = r2.shift();
          return l22(), { value: e3, done: !1 };
        }
        if (d22) return { value: void 0, done: !0 };
        await n2;
      }
    }, return: async () => (h22 = !0, u2 = !0, l22(), o22(), w2(), { value: void 0, done: !0 }), async throw(e3) {
      throw e3;
    }, [Symbol.asyncIterator]() {
      return this;
    } };
  }
  mediaSamplesAtTimestamps(e22, t22) {
    ((e3) => {
      if (!(Symbol.iterator in e3) && !(Symbol.asyncIterator in e3)) throw new TypeError("Argument must be an iterable or async iterable.");
    })(e22);
    let i2 = (async function* (e3) {
      Symbol.iterator in e3 ? yield* e3[Symbol.iterator]() : yield* e3[Symbol.asyncIterator]();
    })(e22), r2 = [], a2 = [], { promise: s2, resolve: n2 } = F2(), { promise: c22, resolve: l22 } = F2(), d22 = !1, u2 = !1, h22 = null, m2 = null, f22 = !1, p22 = (e3) => {
      a2.push(e3), n2(), { promise: s2, resolve: n2 } = F2();
    }, g2 = { ...t22, verifyKeyPackets: !0, metadataOnly: !1 };
    (async () => {
      h22 = await this._createDecoder((e4) => {
        if (l22(), u2) return void e4.close();
        let t4 = 0;
        for (; r2.length > 0 && e4.timestamp - r2[0] > -1e-10; ) t4++, r2.shift();
        if (t4 > 0) for (let i3 = 0; i3 < t4; i3++) p22(i3 < t4 - 1 ? e4.clone() : e4);
        else e4.close();
      }, (e4) => {
        f22 || (m2 = e4, f22 = !0, n2());
      });
      let e3 = this._createPacketSink(), t3 = null, s3 = null, k3 = -1, w3 = async () => {
        o2(s3), o2(h22);
        let t4 = s3;
        for (h22.decode(t4); t4.sequenceNumber < k3; ) {
          let i3 = co(a2.length);
          for (; a2.length + h22.getDecodeQueueSize() > i3 && !u2; ) ({ promise: c22, resolve: l22 } = F2()), await c22;
          if (u2) break;
          let r3 = await e3.getNextPacket(t4, g2);
          o2(r3), h22.decode(r3), t4 = r3;
        }
        k3 = -1;
      }, b2 = async () => {
        o2(h22), await h22.flush();
        for (let e4 = 0; e4 < r2.length; e4++) p22(null);
        r2.length = 0;
      };
      for await (let a3 of i2) {
        if (ro(a3), u2 || this._track.input._disposed) break;
        let i3 = await e3.getPacket(a3, g2), n3 = i3 && await e3.getKeyPacket(a3, g2);
        n3 ? (t3 && (n3.sequenceNumber !== s3.sequenceNumber || i3.timestamp < t3.timestamp) && (await w3(), await b2()), r2.push(i3.timestamp), k3 = Math.max(i3.sequenceNumber, k3), t3 = i3, s3 = n3) : (k3 !== -1 && (await w3(), await b2()), p22(null), t3 = null);
      }
      u2 || this._track.input._disposed || (k3 !== -1 && await w3(), await b2()), d22 = !0, n2();
    })().catch((e3) => {
      f22 || (m2 = e3, f22 = !0, n2());
    }).finally(() => {
      h22?.close();
    });
    let k2 = this._track, w2 = () => {
      for (let e3 of a2) e3?.close();
    };
    return { async next() {
      for (; ; ) {
        if (k2.input._disposed) throw w2(), new Ro();
        if (u2) return { value: void 0, done: !0 };
        if (f22) throw w2(), m2;
        if (a2.length > 0) {
          let e3 = a2.shift();
          return o2(e3 !== void 0), l22(), { value: e3, done: !1 };
        }
        if (d22) return { value: void 0, done: !0 };
        await s2;
      }
    }, return: async () => (u2 = !0, l22(), n2(), w2(), { value: void 0, done: !0 }), async throw(e3) {
      throw e3;
    }, [Symbol.asyncIterator]() {
      return this;
    } };
  }
}, co = (e22) => e22 === 0 ? 40 : 8, lo = class extends no {
  constructor(e22, t22, i2, r2, a2, s2) {
    super(e22, t22), this.codec = i2, this.decoderConfig = r2, this.rotation = a2, this.timeResolution = s2, this.decoder = null, this.customDecoder = null, this.customDecoderCallSerializer = new Y(), this.customDecoderQueueSize = 0, this.inputTimestamps = [], this.sampleQueue = [], this.currentPacketIndex = 0, this.raslSkipped = !1, this.alphaDecoder = null, this.alphaHadKeyframe = !1, this.colorQueue = [], this.alphaQueue = [], this.merger = null, this.decodedAlphaChunkCount = 0, this.alphaDecoderQueueSize = 0, this.nullAlphaFrameQueue = [], this.currentAlphaPacketIndex = 0, this.alphaRaslSkipped = !1, this.finalSamples = [], this.mergeAlphaPromises = [];
    let n2 = Jn.find((e3) => e3.supports(i2, r2));
    if (n2) this.customDecoder = new n2(), this.customDecoder.codec = i2, this.customDecoder.config = r2, this.customDecoder.onSample = (e3) => {
      if (!(e3 instanceof un)) throw new TypeError("The argument passed to onSample must be a VideoSample.");
      this.finalizeAndEmitSample(e3);
    }, this.customDecoder.onError = (e3) => {
      t22(e3);
    }, this.customDecoderCallSerializer.call(() => this.customDecoder.init()).catch((e3) => t22(e3));
    else {
      let e3 = (e4) => {
        if (this.alphaQueue.length > 0) {
          let t4 = this.alphaQueue.shift();
          o2(t4 !== void 0), this.mergeAlpha(e4, t4);
        } else this.colorQueue.push(e4);
      };
      if (i2 === "avc" && this.decoderConfig.description && re2()) {
        let e4 = ((e5) => {
          try {
            let t4 = f2(e5), i3 = 0, r3 = t4.getUint8(i3++), a3 = t4.getUint8(i3++), s3 = t4.getUint8(i3++), n3 = t4.getUint8(i3++), o22 = 3 & t4.getUint8(i3++), c22 = 31 & t4.getUint8(i3++), l22 = [];
            for (let m2 = 0; m2 < c22; m2++) {
              let r4 = t4.getUint16(i3, !1);
              i3 += 2, l22.push(e5.subarray(i3, i3 + r4)), i3 += r4;
            }
            let d22 = t4.getUint8(i3++), u2 = [];
            for (let m2 = 0; m2 < d22; m2++) {
              let r4 = t4.getUint16(i3, !1);
              i3 += 2, u2.push(e5.subarray(i3, i3 + r4)), i3 += r4;
            }
            let h22 = { configurationVersion: r3, avcProfileIndication: a3, profileCompatibility: s3, avcLevelIndication: n3, lengthSizeMinusOne: o22, sequenceParameterSets: l22, pictureParameterSets: u2, chromaFormat: null, bitDepthLumaMinus8: null, bitDepthChromaMinus8: null, sequenceParameterSetExt: null };
            if ((a3 === 100 || a3 === 110 || a3 === 122 || a3 === 144) && i3 + 4 <= e5.length) {
              let r4 = 3 & t4.getUint8(i3++), a4 = 7 & t4.getUint8(i3++), s4 = 7 & t4.getUint8(i3++), n4 = t4.getUint8(i3++);
              h22.chromaFormat = r4, h22.bitDepthLumaMinus8 = a4, h22.bitDepthChromaMinus8 = s4;
              let o3 = [];
              for (let c3 = 0; c3 < n4; c3++) {
                let r5 = t4.getUint16(i3, !1);
                i3 += 2, o3.push(e5.subarray(i3, i3 + r5)), i3 += r5;
              }
              h22.sequenceParameterSetExt = o3;
            }
            return h22;
          } catch (t4) {
            return Ee._error("Error deserializing AVC Decoder Configuration Record:", t4), null;
          }
        })(m(this.decoderConfig.description));
        if (e4 && e4.sequenceParameterSets.length > 0) {
          let t4 = Wt(e4.sequenceParameterSets[0]);
          t4 && t4.frameMbsOnlyFlag === 0 && (this.decoderConfig = { ...this.decoderConfig, hardwareAcceleration: "prefer-software" });
        }
      }
      let t3 = new Error("Decoding error").stack;
      this.decoder = new VideoDecoder({ output: (t4) => {
        try {
          e3(t4);
        } catch (i3) {
          this.onError(i3);
        }
      }, error: (e4) => {
        e4.stack = t3, this.onError(e4);
      } }), this.decoder.configure(this.decoderConfig);
    }
  }
  getDecodeQueueSize() {
    var e22;
    return this.customDecoder ? this.customDecoderQueueSize : (o2(this.decoder), Math.max(this.decoder.decodeQueueSize, ((e22 = this.alphaDecoder) == null ? void 0 : e22.decodeQueueSize) ?? 0));
  }
  decode(e22) {
    if (this.codec === "hevc" && this.currentPacketIndex > 0 && !this.raslSkipped) {
      if (this.hasHevcRaslPicture(e22.data)) return;
      this.raslSkipped = !0;
    }
    if (this.customDecoder) this.customDecoderQueueSize++, this.customDecoderCallSerializer.call(() => this.customDecoder.decode(e22)).catch((e3) => this.onError(e3)).finally(() => this.customDecoderQueueSize--);
    else {
      if (o2(this.decoder), Z() || M(this.inputTimestamps, e22.timestamp, (e3) => e3), re2() && this.currentPacketIndex === 0) {
        if (this.codec === "avc") {
          let t22 = [], i2 = !1;
          for (let a2 of Ft(e22.data, this.decoderConfig)) {
            let r3 = Rt(e22.data[a2.offset]);
            if (i2 || (i2 = r3 >= 1 && r3 <= 5), r3 === Et.AUD) {
              if (i2) break;
              t22.length = 0;
            }
            r3 >= 20 && r3 <= 31 || t22.push(e22.data.subarray(a2.offset, a2.offset + a2.length));
          }
          let r2 = ((e3, t3) => {
            if (t3.description) {
              let i3 = 3 & m(t3.description)[4];
              return zt(e3, i3 + 1);
            }
            return Nt(e3);
          })(t22, this.decoderConfig);
          e22 = new Oi(r2, e22.type, e22.timestamp, e22.duration);
        } else if (this.codec === "hevc") {
          let t22 = ii(e22.data, this.decoderConfig);
          t22 && (e22 = new Oi(t22, e22.type, e22.timestamp, e22.duration));
        }
      }
      this.decoder.decode(e22.toEncodedVideoChunk()), this.decodeAlphaData(e22);
    }
    this.currentPacketIndex++;
  }
  decodeAlphaData(e22) {
    if (!e22.sideData.alpha) return void this.pushNullAlphaFrame();
    if (this.merger || (this.merger = new ho()), !this.alphaDecoder) {
      let e3 = (e4) => {
        if (this.colorQueue.length > 0) {
          let t4 = this.colorQueue.shift();
          o2(t4 !== void 0), this.mergeAlpha(t4, e4);
        } else this.alphaQueue.push(e4);
        for (this.decodedAlphaChunkCount++; this.nullAlphaFrameQueue.length > 0 && this.nullAlphaFrameQueue[0] === this.decodedAlphaChunkCount; ) if (this.nullAlphaFrameQueue.shift(), this.colorQueue.length > 0) {
          let e5 = this.colorQueue.shift();
          o2(e5 !== void 0), this.mergeAlpha(e5, null);
        } else this.alphaQueue.push(null);
        this.alphaDecoderQueueSize--;
      }, t3 = new Error("Decoding error").stack;
      this.alphaDecoder = new VideoDecoder({ output: (t4) => {
        try {
          e3(t4);
        } catch (i2) {
          this.onError(i2);
        }
      }, error: (e4) => {
        e4.stack = t3, this.onError(e4);
      } }), this.alphaDecoder.configure(this.decoderConfig);
    }
    let t22 = li(this.codec, this.decoderConfig, e22.sideData.alpha);
    if (this.alphaHadKeyframe || (this.alphaHadKeyframe = t22 === "key"), this.alphaHadKeyframe) {
      if (this.codec === "hevc" && this.currentAlphaPacketIndex > 0 && !this.alphaRaslSkipped) {
        if (this.hasHevcRaslPicture(e22.sideData.alpha)) return void this.pushNullAlphaFrame();
        this.alphaRaslSkipped = !0;
      }
      this.currentAlphaPacketIndex++, this.alphaDecoder.decode(e22.alphaToEncodedVideoChunk(t22 ?? e22.type)), this.alphaDecoderQueueSize++;
    } else this.pushNullAlphaFrame();
  }
  pushNullAlphaFrame() {
    this.alphaDecoderQueueSize === 0 ? this.alphaQueue.push(null) : this.nullAlphaFrameQueue.push(this.decodedAlphaChunkCount + this.alphaDecoderQueueSize);
  }
  hasHevcRaslPicture(e22) {
    for (let t22 of Vt(e22, this.decoderConfig)) {
      let i2 = Ht(e22[t22.offset]);
      if (i2 === _t.RASL_N || i2 === _t.RASL_R) return !0;
    }
    return !1;
  }
  sampleHandler(e22) {
    if (Z()) {
      if (this.sampleQueue.length > 0 && e22.timestamp >= l2(this.sampleQueue).timestamp) {
        for (let e3 of this.sampleQueue) this.finalizeAndEmitSample(e3);
        this.sampleQueue.length = 0;
      }
      M(this.sampleQueue, e22, (e3) => e3.timestamp);
    } else {
      let t22 = this.inputTimestamps.shift();
      o2(t22 !== void 0), e22.setTimestamp(t22), this.finalizeAndEmitSample(e22);
    }
  }
  finalizeAndEmitSample(e22) {
    e22.setTimestamp(Math.round(e22.timestamp * this.timeResolution) / this.timeResolution), e22.setDuration(Math.round(e22.duration * this.timeResolution) / this.timeResolution), e22.setRotation(this.rotation), this.onSample(e22);
  }
  async mergeAlpha(e22, t22) {
    let i2 = F2();
    this.mergeAlphaPromises.push(i2.promise);
    let r2 = { sample: null };
    this.finalSamples.push(r2);
    try {
      if (t22) {
        o2(this.merger);
        let i3 = await this.merger.merge(e22, t22);
        r2.sample = new un(i3);
      } else r2.sample = new un(e22);
      for (; this.finalSamples.length > 0 && this.finalSamples[0].sample !== null; ) {
        let e3 = this.finalSamples.shift();
        this.sampleHandler(e3.sample);
      }
    } catch (a2) {
      R2(this.finalSamples, r2), this.onError(a2);
    } finally {
      R2(this.mergeAlphaPromises, i2.promise), i2.resolve();
    }
  }
  async flush() {
    var e22;
    if (this.customDecoder ? await this.customDecoderCallSerializer.call(() => this.customDecoder.flush()) : (o2(this.decoder), await Promise.all([this.decoder.flush(), (e22 = this.alphaDecoder) == null ? void 0 : e22.flush()]), await Promise.all(this.mergeAlphaPromises), this.colorQueue.forEach((e3) => e3.close()), this.colorQueue.length = 0, this.alphaQueue.forEach((e3) => e3?.close()), this.alphaQueue.length = 0, this.alphaHadKeyframe = !1, this.decodedAlphaChunkCount = 0, this.alphaDecoderQueueSize = 0, this.nullAlphaFrameQueue.length = 0, this.currentAlphaPacketIndex = 0, this.alphaRaslSkipped = !1), Z()) {
      for (let e3 of this.sampleQueue) this.finalizeAndEmitSample(e3);
      this.sampleQueue.length = 0;
    }
    this.currentPacketIndex = 0, this.raslSkipped = !1;
  }
  close() {
    var e22;
    this.customDecoder ? this.customDecoderCallSerializer.call(() => this.customDecoder.close()) : (o2(this.decoder), this.decoder.state !== "closed" && this.decoder.close(), this.alphaDecoder && this.alphaDecoder.state !== "closed" && this.alphaDecoder.close(), this.colorQueue.forEach((e3) => e3.close()), this.colorQueue.length = 0, this.alphaQueue.forEach((e3) => e3?.close()), this.alphaQueue.length = 0, (e22 = this.merger) == null || e22.close());
    for (let t22 of this.sampleQueue) t22.close();
    this.sampleQueue.length = 0;
  }
}, uo = null, ho = class {
  constructor() {
    this.workers = [], this.nextWorkerIndex = 0, this.pendingRequests = /* @__PURE__ */ new Map(), this.nextRequestId = 0;
  }
  merge(e22, t22) {
    if (this.workers.length === 0) {
      if (!uo) {
        let e4 = new Blob([`(${mo.toString()})()`], { type: "application/javascript" });
        uo = URL.createObjectURL(e4);
      }
      let e3 = U(navigator.hardwareConcurrency, 1, 4);
      for (let t3 = 0; t3 < e3; t3++) {
        let e4 = new Worker(new URL("./media-merge.js", import.meta.url));
        e4.addEventListener("message", (e5) => {
          let t4 = e5.data, i3 = this.pendingRequests.get(t4.id);
          i3 && (this.pendingRequests.delete(t4.id), "error" in t4 ? i3.reject(new Error(t4.error)) : i3.resolve(t4.frame));
        }), e4.addEventListener("error", (e5) => {
          let t4 = new Error(e5.message || "Color/alpha merge worker error.");
          for (let i3 of this.pendingRequests.values()) i3.reject(t4);
          this.pendingRequests.clear();
        }), this.workers.push(e4);
      }
    }
    let i2 = this.nextRequestId++, r2 = F2();
    this.pendingRequests.set(i2, r2);
    let a2 = this.workers[this.nextWorkerIndex];
    return this.nextWorkerIndex = (this.nextWorkerIndex + 1) % this.workers.length, a2.postMessage({ id: i2, color: e22, alpha: t22 }, { transfer: [e22, t22] }), r2.promise;
  }
  close() {
    for (let t22 of this.workers) t22.terminate();
    this.workers.length = 0;
    let e22 = new Error("Color/alpha merger closed.");
    for (let t22 of this.pendingRequests.values()) t22.reject(e22);
    this.pendingRequests.clear();
  }
}, mo = () => {
  let e22 = null, t22 = null, i2 = Promise.resolve();
  self.addEventListener("message", (e3) => {
    let { id: t3, color: a3, alpha: s3 } = e3.data;
    i2 = i2.then(async () => {
      try {
        let e4 = await r2(a3, s3);
        self.postMessage({ id: t3, frame: e4 }, { transfer: [e4] });
      } catch (e4) {
        self.postMessage({ id: t3, error: e4.message });
      } finally {
        a3.close(), s3.close();
      }
    });
  });
  let r2 = async (e3, t3) => {
    let i3 = e3.format, r3 = t3.format;
    if (!i3 || !r3) throw new Error("CPU color/alpha merging requires a known VideoFrame format.");
    let o3 = i3.includes("P10"), c22 = i3.includes("P12"), l22 = r3.includes("P10"), d22 = r3.includes("P12");
    if (l22 !== o3 || d22 !== c22) throw new Error(`CPU color/alpha merging requires the alpha frame to have the same bit depth as the color frame (color: '${i3}', alpha: '${r3}').`);
    if (i3 === "RGBX" || i3 === "RGBA" || i3 === "BGRX" || i3 === "BGRA") return await a2(e3, t3, i3);
    if (i3 === "I420" || i3 === "I420P10" || i3 === "I420P12" || i3 === "I422" || i3 === "I422P10" || i3 === "I422P12" || i3 === "I444" || i3 === "I444P10" || i3 === "I444P12") return await s2(e3, t3, i3);
    if (i3 === "NV12") return await n2(e3, t3);
    throw new Error(`CPU color/alpha merging does not support format '${i3}'.`);
  }, a2 = async (e3, t3, i3) => {
    var r3, a3;
    let s3 = ((r3 = e3.visibleRect) == null ? void 0 : r3.width) ?? e3.codedWidth, n3 = ((a3 = e3.visibleRect) == null ? void 0 : a3.height) ?? e3.codedHeight, c22 = s3 * n3, l22 = new Uint8Array(4 * c22);
    await e3.copyTo(l22);
    let d22 = await o22(t3, s3, n3, 1);
    for (let o3 = 0, h22 = 3; o3 < c22; o3++, h22 += 4) l22[h22] = d22[o3];
    let u2 = { format: i3 === "RGBX" || i3 === "RGBA" ? "RGBA" : "BGRA", codedWidth: s3, codedHeight: n3, timestamp: e3.timestamp, duration: e3.duration ?? void 0, transfer: [l22.buffer] };
    return new VideoFrame(l22, u2);
  }, s2 = async (e3, t3, i3) => {
    var r3, a3;
    let s3 = ((r3 = e3.visibleRect) == null ? void 0 : r3.width) ?? e3.codedWidth, n3 = ((a3 = e3.visibleRect) == null ? void 0 : a3.height) ?? e3.codedHeight, c22 = i3.includes("P10"), l22 = i3.includes("P12"), d22 = c22 || l22 ? 2 : 1, u2, h22;
    i3.startsWith("I420") ? (u2 = Math.ceil(s3 / 2), h22 = Math.ceil(n3 / 2)) : i3.startsWith("I422") ? (u2 = Math.ceil(s3 / 2), h22 = n3) : (u2 = s3, h22 = n3);
    let m2 = s3 * n3, f22 = m2 * d22, p22 = u2 * h22 * d22, g2 = new Uint8Array(f22 + 2 * p22 + m2 * d22);
    await e3.copyTo(g2);
    let k2 = await o22(t3, s3, n3, d22), w2 = f22 + 2 * p22;
    g2.set(k2, w2);
    let b2 = { format: i3.slice(0, 4) + "A" + i3.slice(4), codedWidth: s3, codedHeight: n3, timestamp: e3.timestamp, duration: e3.duration ?? void 0, transfer: [g2.buffer] };
    return new VideoFrame(g2, b2);
  }, n2 = async (e3, i3) => {
    var r3, a3;
    let s3 = ((r3 = e3.visibleRect) == null ? void 0 : r3.width) ?? e3.codedWidth, n3 = ((a3 = e3.visibleRect) == null ? void 0 : a3.height) ?? e3.codedHeight, c22 = s3 * n3, l22 = Math.ceil(s3 / 2) * Math.ceil(n3 / 2), d22 = e3.allocationSize();
    t22 && t22.byteLength === d22 || (t22 = new Uint8Array(d22)), await e3.copyTo(t22);
    let u2 = new Uint8Array(c22 + 2 * l22 + c22);
    u2.set(t22.subarray(0, c22), 0);
    let h22 = c22, m2 = c22 + l22, f22 = c22;
    for (let o3 = 0; o3 < l22; o3++) u2[h22 + o3] = t22[f22 + 2 * o3], u2[m2 + o3] = t22[f22 + 2 * o3 + 1];
    let p22 = await o22(i3, s3, n3, 1);
    u2.set(p22, c22 + 2 * l22);
    let g2 = { format: "I420A", codedWidth: s3, codedHeight: n3, timestamp: e3.timestamp, duration: e3.duration ?? void 0, transfer: [u2.buffer] };
    return new VideoFrame(u2, g2);
  }, o22 = async (t3, i3, r3, a3) => {
    let s3 = t3.allocationSize();
    e22 && e22.byteLength === s3 || (e22 = new Uint8Array(s3)), await t3.copyTo(e22);
    let n3 = t3.format;
    if (n3 === "RGBA" || n3 === "BGRA" || n3 === "RGBX" || n3 === "BGRX") {
      let t4 = n3 === "RGBA" || n3 === "RGBX" ? 0 : 2, a4 = i3 * r3;
      for (let i4 = 0; i4 < a4; i4++) e22[i4] = e22[4 * i4 + t4];
      return e22.subarray(0, a4);
    }
    return e22.subarray(0, i3 * r3 * a3);
  };
}, fo = class extends oo {
  constructor(e22, t22 = {}) {
    if (!(e22 instanceof vo)) throw new TypeError("videoTrack must be an InputVideoTrack.");
    ((e3) => {
      if (!e3 || typeof e3 != "object") throw new TypeError("decoderOptions must be an object.");
      if (e3.hardwareAcceleration !== void 0 && !["no-preference", "prefer-hardware", "prefer-software"].includes(e3.hardwareAcceleration)) throw new TypeError("decoderOptions.hardwareAcceleration, when provided, must be 'no-preference', 'prefer-hardware' or 'prefer-software'.");
      if (e3.optimizeForLatency !== void 0 && typeof e3.optimizeForLatency != "boolean") throw new TypeError("decoderOptions.optimizeForLatency, when provided, must be a boolean.");
    })(t22), super(), this._track = e22, this._decoderOptions = t22;
  }
  async _createDecoder(e22, t22) {
    if (!await this._track.canDecode())
      throw typeof VideoDecoder > "u" ? new Error(ne("VideoDecoder")) : new Error("This video track cannot be decoded in this environment. Make sure to check decodability before using a track.");
    let i2 = await this._track.getCodec(), r2 = await this._track.getRotation(), a2 = await this._track.getDecoderConfig(), s2 = await this._track.getTimeResolution();
    return o2(i2 && a2), a2 = { ...a2, hardwareAcceleration: this._decoderOptions.hardwareAcceleration, optimizeForLatency: this._decoderOptions.optimizeForLatency }, new lo(e22, t22, i2, a2, r2, s2);
  }
  _createPacketSink() {
    return new so(this._track);
  }
  async getSample(e22, t22 = {}) {
    ro(e22);
    for await (let i2 of this.mediaSamplesAtTimestamps([e22], t22)) return i2;
    throw new Error("Internal error: Iterator returned nothing.");
  }
  samples(e22, t22, i2 = {}) {
    return this.mediaSamplesInRange(e22, t22, i2);
  }
  samplesAtTimestamps(e22, t22 = {}) {
    return this.mediaSamplesAtTimestamps(e22, t22);
  }
}, po = class extends no {
  constructor(e22, t22, i2, r2) {
    super(e22, t22), this.decoder = null, this.customDecoder = null, this.customDecoderCallSerializer = new Y(), this.customDecoderQueueSize = 0, this.currentTimestamp = null, this.expectedFirstTimestamp = null, this.timestampOffset = 0;
    let a2 = (t3) => {
      let i3 = t3.timestamp;
      this.expectedFirstTimestamp && this.currentTimestamp === null && (this.timestampOffset = this.expectedFirstTimestamp - i3), i3 += this.timestampOffset, (this.currentTimestamp === null || Math.abs(i3 - this.currentTimestamp) >= t3.duration) && (this.currentTimestamp = i3);
      let a3 = this.currentTimestamp;
      if (this.currentTimestamp += t3.duration, t3.numberOfFrames === 0) return void t3.close();
      let s3 = r2.sampleRate;
      t3.setTimestamp(Math.round(a3 * s3) / s3), e22(t3);
    }, s2 = Zn.find((e3) => e3.supports(i2, r2));
    if (s2) this.customDecoder = new s2(), this.customDecoder.codec = i2, this.customDecoder.config = r2, this.customDecoder.onSample = (e3) => {
      if (!(e3 instanceof _n)) throw new TypeError("The argument passed to onSample must be an AudioSample.");
      a2(e3);
    }, this.customDecoder.onError = (e3) => {
      t22(e3);
    }, this.customDecoderCallSerializer.call(() => this.customDecoder.init()).catch((e3) => t22(e3));
    else {
      let e3 = new Error("Decoding error").stack;
      this.decoder = new AudioDecoder({ output: (e4) => {
        try {
          a2(new _n(e4));
        } catch (t3) {
          this.onError(t3);
        }
      }, error: (t3) => {
        t3.stack = e3, this.onError(t3);
      } }), this.decoder.configure(r2);
    }
  }
  getDecodeQueueSize() {
    return this.customDecoder ? this.customDecoderQueueSize : (o2(this.decoder), this.decoder.decodeQueueSize);
  }
  decode(e22) {
    this.customDecoder ? (this.customDecoderQueueSize++, this.customDecoderCallSerializer.call(() => this.customDecoder.decode(e22)).catch((e3) => this.onError(e3)).finally(() => this.customDecoderQueueSize--)) : (o2(this.decoder), this.expectedFirstTimestamp ?? (this.expectedFirstTimestamp = e22.timestamp), this.decoder.decode(e22.toEncodedAudioChunk()));
  }
  async flush() {
    this.customDecoder ? await this.customDecoderCallSerializer.call(() => this.customDecoder.flush()) : (o2(this.decoder), await this.decoder.flush()), this.currentTimestamp = null, this.expectedFirstTimestamp = null, this.timestampOffset = 0;
  }
  close() {
    this.customDecoder ? this.customDecoderCallSerializer.call(() => this.customDecoder.close()) : (o2(this.decoder), this.decoder.state !== "closed" && this.decoder.close());
  }
}, go = class extends no {
  constructor(e22, t22, i2) {
    super(e22, t22), this.decoderConfig = i2, this.currentTimestamp = null, o2(ze.includes(i2.codec)), this.codec = i2.codec;
    let { dataType: r2, sampleSize: a2, littleEndian: s2 } = at(this.codec);
    switch (this.inputSampleSize = a2, a2) {
      case 1:
        r2 === "unsigned" ? this.readInputValue = (e3, t3) => e3.getUint8(t3) - 128 : r2 === "signed" ? this.readInputValue = (e3, t3) => e3.getInt8(t3) : r2 === "ulaw" ? this.readInputValue = (e3, t3) => ((e4) => {
          let t4 = 0, i3 = 0, r3 = ~e4;
          128 & r3 && (r3 &= -129, t4 = -1), i3 = 5 + ((240 & r3) >> 4);
          let a3 = (1 << i3 | (15 & r3) << i3 - 4 | 1 << i3 - 5) - 33;
          return t4 === 0 ? a3 : -a3;
        })(e3.getUint8(t3)) : r2 === "alaw" ? this.readInputValue = (e3, t3) => ((e4) => {
          let t4 = 0, i3 = 0, r3 = 85 ^ e4;
          128 & r3 && (r3 &= -129, t4 = -1), i3 = 4 + ((240 & r3) >> 4);
          let a3 = 0;
          return a3 = i3 !== 4 ? 1 << i3 | (15 & r3) << i3 - 4 | 1 << i3 - 5 : r3 << 1 | 1, t4 === 0 ? a3 : -a3;
        })(e3.getUint8(t3)) : o2(!1);
        break;
      case 2:
        r2 === "unsigned" ? this.readInputValue = (e3, t3) => e3.getUint16(t3, s2) - 32768 : r2 === "signed" ? this.readInputValue = (e3, t3) => e3.getInt16(t3, s2) : o2(!1);
        break;
      case 3:
        r2 === "unsigned" ? this.readInputValue = (e3, t3) => z(e3, t3, s2) - 2 ** 23 : r2 === "signed" ? this.readInputValue = (e3, t3) => ((e4, t4, i3) => z(e4, t4, i3) << 8 >> 8)(e3, t3, s2) : o2(!1);
        break;
      case 4:
        r2 === "unsigned" ? this.readInputValue = (e3, t3) => e3.getUint32(t3, s2) - 2 ** 31 : r2 === "signed" ? this.readInputValue = (e3, t3) => e3.getInt32(t3, s2) : r2 === "float" ? this.readInputValue = (e3, t3) => e3.getFloat32(t3, s2) : o2(!1);
        break;
      case 8:
        r2 === "float" ? this.readInputValue = (e3, t3) => e3.getFloat64(t3, s2) : o2(!1);
        break;
      default:
        N(a2), o2(!1);
    }
    switch (a2) {
      case 1:
        r2 === "ulaw" || r2 === "alaw" ? (this.outputSampleSize = 2, this.outputFormat = "s16", this.writeOutputValue = (e3, t3, i3) => e3.setInt16(t3, i3, !0)) : (this.outputSampleSize = 1, this.outputFormat = "u8", this.writeOutputValue = (e3, t3, i3) => e3.setUint8(t3, i3 + 128));
        break;
      case 2:
        this.outputSampleSize = 2, this.outputFormat = "s16", this.writeOutputValue = (e3, t3, i3) => e3.setInt16(t3, i3, !0);
        break;
      case 3:
        this.outputSampleSize = 4, this.outputFormat = "s32", this.writeOutputValue = (e3, t3, i3) => e3.setInt32(t3, i3 << 8, !0);
        break;
      case 4:
        this.outputSampleSize = 4, r2 === "float" ? (this.outputFormat = "f32", this.writeOutputValue = (e3, t3, i3) => e3.setFloat32(t3, i3, !0)) : (this.outputFormat = "s32", this.writeOutputValue = (e3, t3, i3) => e3.setInt32(t3, i3, !0));
        break;
      case 8:
        this.outputSampleSize = 4, this.outputFormat = "f32", this.writeOutputValue = (e3, t3, i3) => e3.setFloat32(t3, i3, !0);
        break;
      default:
        N(a2), o2(!1);
    }
  }
  getDecodeQueueSize() {
    return 0;
  }
  decode(e22) {
    let t22 = f2(e22.data), i2 = e22.byteLength / this.decoderConfig.numberOfChannels / this.inputSampleSize, r2 = i2 * this.decoderConfig.numberOfChannels * this.outputSampleSize, a2 = new ArrayBuffer(r2), s2 = new DataView(a2);
    for (let l22 = 0; l22 < i2 * this.decoderConfig.numberOfChannels; l22++) {
      let e3 = l22 * this.inputSampleSize, i3 = l22 * this.outputSampleSize, r3 = this.readInputValue(t22, e3);
      this.writeOutputValue(s2, i3, r3);
    }
    let n2 = i2 / this.decoderConfig.sampleRate;
    (this.currentTimestamp === null || Math.abs(e22.timestamp - this.currentTimestamp) >= n2) && (this.currentTimestamp = e22.timestamp);
    let o22 = this.currentTimestamp;
    this.currentTimestamp += n2;
    let c22 = new _n({ format: this.outputFormat, data: a2, numberOfChannels: this.decoderConfig.numberOfChannels, sampleRate: this.decoderConfig.sampleRate, numberOfFrames: i2, timestamp: o22 });
    this.onSample(c22);
  }
  async flush() {
  }
  close() {
  }
}, ko = class extends oo {
  constructor(e22) {
    if (!(e22 instanceof To)) throw new TypeError("audioTrack must be an InputAudioTrack.");
    super(), this._track = e22;
  }
  async _createDecoder(e22, t22) {
    if (!await this._track.canDecode())
      throw typeof AudioDecoder > "u" ? new Error(ne("AudioDecoder")) : new Error("This audio track cannot be decoded in this environment. Make sure to check decodability before using a track.");
    let i2 = await this._track.getCodec(), r2 = await this._track.getDecoderConfig();
    return o2(i2 && r2), ze.includes(r2.codec) ? new go(e22, t22, r2) : new po(e22, t22, i2, r2);
  }
  _createPacketSink() {
    return new so(this._track);
  }
  async getSample(e22, t22 = {}) {
    ro(e22);
    for await (let i2 of this.mediaSamplesAtTimestamps([e22], t22)) return i2;
    throw new Error("Internal error: Iterator returned nothing.");
  }
  samples(e22, t22, i2 = {}) {
    return this.mediaSamplesInRange(e22, t22, i2);
  }
  samplesAtTimestamps(e22, t22 = {}) {
    return this.mediaSamplesAtTimestamps(e22, t22);
  }
};
var wo = class _wo {
  constructor(e22, t22) {
    this.input = e22, this._backing = t22;
  }
  isVideoTrack() {
    return this instanceof vo;
  }
  isAudioTrack() {
    return this instanceof To;
  }
  get id() {
    return this._backing.getId();
  }
  get number() {
    return this._backing.getNumber();
  }
  async getInternalCodecId() {
    return this._backing.getInternalCodecId();
  }
  get internalCodecId() {
    return bo(this._backing.getInternalCodecId(), "internalCodecId", "getInternalCodecId");
  }
  async getLanguageCode() {
    return this._backing.getLanguageCode();
  }
  get languageCode() {
    return bo(this._backing.getLanguageCode(), "languageCode", "getLanguageCode");
  }
  async getName() {
    return this._backing.getName();
  }
  get name() {
    return bo(this._backing.getName(), "name", "getName");
  }
  async getTimeResolution() {
    return this._backing.getTimeResolution();
  }
  get timeResolution() {
    return bo(this._backing.getTimeResolution(), "timeResolution", "getTimeResolution");
  }
  async isRelativeToUnixEpoch() {
    return this._backing.isRelativeToUnixEpoch();
  }
  async getUnixTimeForTimestamp(e22) {
    return this._backing.getUnixTimeForTimestamp(e22);
  }
  async hasUnixTimeMapping() {
    return await this._backing.getUnixTimeForTimestamp(await this.getFirstTimestamp()) !== null;
  }
  async getDisposition() {
    return this._backing.getDisposition();
  }
  get disposition() {
    return bo(this._backing.getDisposition(), "disposition", "getDisposition");
  }
  async getBitrate() {
    return this._backing.getBitrate();
  }
  async getAverageBitrate() {
    return this._backing.getAverageBitrate();
  }
  async getFirstTimestamp() {
    return (await this._backing.getFirstPacket({ metadataOnly: !0 }))?.timestamp ?? 0;
  }
  async computeDuration(e22) {
    let t22 = await this._backing.getPacket(1 / 0, { metadataOnly: !0, ...e22 }), i2 = (t22?.timestamp ?? 0) + (t22?.duration ?? 0);
    return H(i2, await this.getTimeResolution());
  }
  async getDurationFromMetadata(e22 = {}) {
    return this._backing.getDurationFromMetadata(e22);
  }
  async computePacketStats(e22 = 1 / 0, t22) {
    let i2 = new so(this), r2 = 1 / 0, a2 = -1 / 0, s2 = 0, n2 = 0;
    for await (let o22 of i2.packets(void 0, void 0, { metadataOnly: !0, ...t22 })) {
      if (s2 >= e22 && o22.timestamp >= a2) break;
      r2 = Math.min(r2, o22.timestamp), a2 = Math.max(a2, o22.timestamp + o22.duration), s2++, n2 += o22.byteLength;
    }
    return { packetCount: s2, averagePacketRate: s2 ? Number((s2 / (a2 - r2)).toPrecision(16)) : 0, averageBitrate: s2 ? Number((8 * n2 / (a2 - r2)).toPrecision(16)) : 0 };
  }
  async isLive() {
    return await this._backing.getLiveRefreshInterval() !== null;
  }
  async getLiveRefreshInterval() {
    return this._backing.getLiveRefreshInterval();
  }
  canBePairedWith(e22) {
    if (!(e22 instanceof _wo)) throw new TypeError("other must be an InputTrack.");
    return this.input === e22.input && this !== e22 && (this._backing.getPairingMask() & e22._backing.getPairingMask()) !== 0n;
  }
  async getPairableTracks(e22) {
    return this.input.getTracks(xo({ filter: (e3) => e3.canBePairedWith(this) }, e22));
  }
  async getPairableVideoTracks(e22) {
    return this.input.getVideoTracks(xo({ filter: (e3) => e3.canBePairedWith(this) }, e22));
  }
  async getPairableAudioTracks(e22) {
    return this.input.getAudioTracks(xo({ filter: (e3) => e3.canBePairedWith(this) }, e22));
  }
  async getPrimaryPairableVideoTrack(e22) {
    return this.input.getPrimaryVideoTrack(xo({ filter: (e3) => e3.canBePairedWith(this) }, e22));
  }
  async getPrimaryPairableAudioTrack(e22) {
    return this.input.getPrimaryAudioTrack(xo({ filter: (e3) => e3.canBePairedWith(this) }, e22));
  }
  async hasPairableTrack(e22) {
    e22 && (e22 = yo(e22));
    let t22 = await this.input.getTracks();
    for (let i2 of t22) if (this.canBePairedWith(i2) && (!e22 || await e22(i2))) return !0;
    return !1;
  }
  hasPairableVideoTrack(e22) {
    return e22 && (e22 = yo(e22)), this.hasPairableTrack(async (t22) => t22.isVideoTrack() && (!e22 || await e22(t22)));
  }
  hasPairableAudioTrack(e22) {
    return e22 && (e22 = yo(e22)), this.hasPairableTrack(async (t22) => t22.isAudioTrack() && (!e22 || await e22(t22)));
  }
}, bo = (e22, t22, i2) => {
  if (e22 instanceof Promise) throw new Error(`'${t22}' is deprecated and not available synchronously for this track. Use the preferred '${i2}()' instead.`);
  return e22;
}, yo = (e22) => {
  if (e22 !== void 0 && typeof e22 != "function") throw new TypeError("predicate, when provided, must be a function.");
  return e22 ? (t22) => {
    let i2 = (e3) => {
      if (typeof e3 != "boolean") throw new TypeError("predicate must return or resolve to a boolean value.");
      return e3;
    }, r2 = e22(t22);
    return r2 instanceof Promise ? r2.then(i2) : i2(r2);
  } : void 0;
}, vo = class extends wo {
  constructor(e22, t22) {
    super(e22, t22), this._pixelAspectRatioCache = null, this._backing = t22;
  }
  get type() {
    return "video";
  }
  async getCodec() {
    return this._backing.getCodec();
  }
  get codec() {
    return bo(this._backing.getCodec(), "codec", "getCodec");
  }
  async hasOnlyKeyPackets() {
    var e22, t22;
    return await ((t22 = (e22 = this._backing).getHasOnlyKeyPackets) == null ? void 0 : t22.call(e22)) ?? await this._backing.getCodec() === "prores";
  }
  async getCodedWidth() {
    return this._backing.getCodedWidth();
  }
  get codedWidth() {
    return bo(this._backing.getCodedWidth(), "codedWidth", "getCodedWidth");
  }
  async getCodedHeight() {
    return this._backing.getCodedHeight();
  }
  get codedHeight() {
    return bo(this._backing.getCodedHeight(), "codedHeight", "getCodedHeight");
  }
  async getRotation() {
    return this._backing.getRotation();
  }
  get rotation() {
    return bo(this._backing.getRotation(), "rotation", "getRotation");
  }
  async getSquarePixelWidth() {
    return this._backing.getSquarePixelWidth();
  }
  get squarePixelWidth() {
    return bo(this._backing.getSquarePixelWidth(), "squarePixelWidth", "getSquarePixelWidth");
  }
  async getSquarePixelHeight() {
    return this._backing.getSquarePixelHeight();
  }
  get squarePixelHeight() {
    return bo(this._backing.getSquarePixelHeight(), "squarePixelHeight", "getSquarePixelHeight");
  }
  async getPixelAspectRatio() {
    return this._pixelAspectRatioCache ?? (this._pixelAspectRatioCache = we({ num: await this.getSquarePixelWidth() * await this.getCodedHeight(), den: await this.getSquarePixelHeight() * await this.getCodedWidth() }));
  }
  get pixelAspectRatio() {
    return this._pixelAspectRatioCache ?? (this._pixelAspectRatioCache = we({ num: bo(this._backing.getSquarePixelWidth(), "pixelAspectRatio", "getPixelAspectRatio") * bo(this._backing.getCodedHeight(), "pixelAspectRatio", "getPixelAspectRatio"), den: bo(this._backing.getSquarePixelHeight(), "pixelAspectRatio", "getPixelAspectRatio") * bo(this._backing.getCodedWidth(), "pixelAspectRatio", "getPixelAspectRatio") }));
  }
  async getDisplayWidth() {
    var e22, t22;
    return await ((t22 = (e22 = this._backing).getMetadataDisplayWidth) == null ? void 0 : t22.call(e22)) ?? (await this.getRotation() % 180 == 0 ? this.getSquarePixelWidth() : this.getSquarePixelHeight());
  }
  get displayWidth() {
    var e22, t22;
    let i2 = (t22 = (e22 = this._backing).getMetadataDisplayWidth) == null ? void 0 : t22.call(e22);
    if (i2 !== void 0) {
      let e3 = bo(i2, "displayWidth", "getDisplayWidth");
      if (e3 !== null) return e3;
    }
    let r2 = bo(this._backing.getRotation(), "displayWidth", "getDisplayWidth") % 180 == 0 ? this._backing.getSquarePixelWidth() : this._backing.getSquarePixelHeight();
    return bo(r2, "displayWidth", "getDisplayWidth");
  }
  async getDisplayHeight() {
    var e22, t22;
    return await ((t22 = (e22 = this._backing).getMetadataDisplayHeight) == null ? void 0 : t22.call(e22)) ?? (await this.getRotation() % 180 == 0 ? this.getSquarePixelHeight() : this.getSquarePixelWidth());
  }
  get displayHeight() {
    var e22, t22;
    let i2 = (t22 = (e22 = this._backing).getMetadataDisplayHeight) == null ? void 0 : t22.call(e22);
    if (i2 !== void 0) {
      let e3 = bo(i2, "displayHeight", "getDisplayHeight");
      if (e3 !== null) return e3;
    }
    let r2 = bo(this._backing.getRotation(), "displayHeight", "getDisplayHeight") % 180 == 0 ? this._backing.getSquarePixelHeight() : this._backing.getSquarePixelWidth();
    return bo(r2, "displayHeight", "getDisplayHeight");
  }
  async getColorSpace() {
    return this._backing.getColorSpace();
  }
  async hasHighDynamicRange() {
    let e22 = await this._backing.getColorSpace();
    return e22.primaries === "bt2020" || e22.primaries === "smpte432" || e22.transfer === "pq" || e22.transfer === "hlg" || e22.matrix === "bt2020-ncl";
  }
  async canBeTransparent() {
    return this._backing.canBeTransparent();
  }
  async getDecoderConfig() {
    return this._backing.getDecoderConfig();
  }
  async getCodecParameterString() {
    var e22, t22;
    let i2 = await ((t22 = (e22 = this._backing).getMetadataCodecParameterString) == null ? void 0 : t22.call(e22));
    return i2 ?? (await this._backing.getDecoderConfig())?.codec ?? null;
  }
  async canDecode() {
    try {
      let e22 = await this._backing.getDecoderConfig();
      if (!e22) return !1;
      let t22 = await this._backing.getCodec();
      return o2(t22 !== null), Jn.some((i2) => i2.supports(t22, e22)) ? !0 : typeof VideoDecoder > "u" ? !1 : (await VideoDecoder.isConfigSupported(e22)).supported === !0;
    } catch (e22) {
      return Ee._error("Error during decodability check:", e22), !1;
    }
  }
  async determinePacketType(e22) {
    if (!(e22 instanceof Oi)) throw new TypeError("packet must be an EncodedPacket.");
    if (e22.isMetadataOnly) throw new TypeError("packet must not be metadata-only to determine its type.");
    let t22 = await this.getCodec();
    if (t22 === null) return null;
    let i2 = await this.getDecoderConfig();
    return o2(i2), li(t22, i2, e22.data);
  }
  async computeFrameRateMetrics(e22 = {}) {
    if (!e22 || typeof e22 != "object") throw new TypeError("options must be an object.");
    if (e22.targetPacketCount !== void 0 && (!Number.isFinite(e22.targetPacketCount) || e22.targetPacketCount < 0)) throw new TypeError("options.targetPacketCount must be a non-negative number.");
    let t22 = await this.getTimeResolution(), i2 = e22.targetPacketCount ?? 256, r2 = new so(this), a2 = [], s2 = -1 / 0, n2 = 0;
    for await (let C2 of r2.packets(void 0, void 0, { metadataOnly: !0 })) {
      if (a2.length >= i2 && C2.timestamp >= s2) break;
      a2.push(C2.timestamp), s2 = Math.max(s2, C2.timestamp), n2++;
    }
    let o22 = new Float64Array(a2.length);
    for (let C2 = 0; C2 < a2.length; C2++) o22[C2] = Math.round(a2[C2] * t22);
    o22.sort();
    let c22 = 1;
    for (let C2 = 1; C2 < o22.length; C2++) o22[C2] !== o22[c22 - 1] && (o22[c22++] = o22[C2]);
    if (c22 < 2) return { underlyingFrameRate: null, bestGuessFrameRate: t22, minFrameRate: t22, maxFrameRate: t22, averageFrameRate: t22, medianFrameRate: t22, frameRateIsConstant: !0, probedPacketCount: n2 };
    let l22 = o22.subarray(0, c22), d22 = Io(l22, t22), u2 = d22 ?? t22, h22 = d22 !== null ? t22 / d22 : null, m2 = /* @__PURE__ */ new Map(), f22 = 1 / 0, p22 = -1 / 0, g2 = 0;
    for (let C2 = 1; C2 < c22; C2++) {
      let e3 = l22[C2] - l22[C2 - 1], t3 = h22 !== null ? Math.max(1, Math.round(e3 / h22)) : e3;
      m2.set(t3, (m2.get(t3) ?? 0) + 1), f22 = Math.min(f22, t3), p22 = Math.max(p22, t3), g2 += t3;
    }
    let k2 = c22 - 1, w2 = [...m2.keys()].sort((e3, t3) => e3 - t3), b2 = k2 - 1 >> 1, y2 = k2 >> 1, v2 = 0, T22 = 0, S2 = 0;
    for (let C2 of w2) if (S2 += m2.get(C2), v2 === 0 && S2 > b2 && (v2 = C2), S2 > y2) {
      T22 = C2;
      break;
    }
    let P2 = (u2 / v2 + u2 / T22) / 2;
    return { underlyingFrameRate: d22, bestGuessFrameRate: d22 !== null ? d22 : Bo(P2), minFrameRate: u2 / p22, maxFrameRate: u2 / f22, averageFrameRate: u2 * k2 / g2, medianFrameRate: P2, frameRateIsConstant: d22 !== null && f22 === 1 && p22 === 1, probedPacketCount: n2 };
  }
}, To = class extends wo {
  constructor(e22, t22) {
    super(e22, t22), this._backing = t22;
  }
  get type() {
    return "audio";
  }
  async getCodec() {
    return this._backing.getCodec();
  }
  get codec() {
    return bo(this._backing.getCodec(), "codec", "getCodec");
  }
  async hasOnlyKeyPackets() {
    var e22, t22;
    return await ((t22 = (e22 = this._backing).getHasOnlyKeyPackets) == null ? void 0 : t22.call(e22)) ?? !0;
  }
  async getNumberOfChannels() {
    return this._backing.getNumberOfChannels();
  }
  get numberOfChannels() {
    return bo(this._backing.getNumberOfChannels(), "numberOfChannels", "getNumberOfChannels");
  }
  async getSampleRate() {
    return this._backing.getSampleRate();
  }
  get sampleRate() {
    return bo(this._backing.getSampleRate(), "sampleRate", "getSampleRate");
  }
  async getDecoderConfig() {
    return this._backing.getDecoderConfig();
  }
  async getCodecParameterString() {
    var e22, t22;
    let i2 = await ((t22 = (e22 = this._backing).getMetadataCodecParameterString) == null ? void 0 : t22.call(e22));
    return i2 ?? (await this._backing.getDecoderConfig())?.codec ?? null;
  }
  async canDecode() {
    try {
      let e22 = await this._backing.getDecoderConfig();
      if (!e22) return !1;
      let t22 = await this._backing.getCodec();
      return o2(t22 !== null), Zn.some((i2) => i2.supports(t22, e22)) || e22.codec.startsWith("pcm-") ? !0 : typeof AudioDecoder > "u" ? !1 : (await AudioDecoder.isConfigSupported(e22)).supported === !0;
    } catch (e22) {
      return Ee._error("Error during decodability check:", e22), !1;
    }
  }
  async determinePacketType(e22) {
    if (!(e22 instanceof Oi)) throw new TypeError("packet must be an EncodedPacket.");
    return await this.getCodec() === null ? null : "key";
  }
}, So = (e22) => -(e22 ?? -1 / 0), Po = (e22) => -e22, Co = (e22) => {
  if (typeof e22 != "object" || !e22) throw new TypeError("query must be an object.");
  if (e22.filter !== void 0 && typeof e22.filter != "function") throw new TypeError("query.filter, when provided, must be a function.");
  if (e22.sortBy !== void 0 && typeof e22.sortBy != "function") throw new TypeError("query.sortBy, when provided, must be a function.");
  return { filter: e22.filter ? (t22) => {
    let i2 = (e3) => {
      if (typeof e3 != "boolean") throw new TypeError("query.filter must return or resolve to a boolean.");
      return e3;
    }, r2 = e22.filter(t22);
    return r2 instanceof Promise ? r2.then(i2) : i2(r2);
  } : void 0, sortBy: e22.sortBy ? (t22) => {
    let i2 = (e3) => {
      if (!(typeof e3 == "number" || Array.isArray(e3) && e3.every((e4) => typeof e4 == "number"))) throw new TypeError("query.sortBy must return or resolve to a number or an array of numbers.");
      return e3;
    }, r2 = e22.sortBy(t22);
    return r2 instanceof Promise ? r2.then(i2) : i2(r2);
  } : void 0 };
}, xo = (e22, t22) => ({ filter: e22?.filter || t22?.filter ? (i2) => {
  var r2;
  let a2 = ((r2 = e22?.filter) == null ? void 0 : r2.call(e22, i2)) ?? !0, s2 = (e3) => {
    var r3;
    return e3 !== !1 && (((r3 = t22?.filter) == null ? void 0 : r3.call(t22, i2)) ?? !0);
  };
  return a2 instanceof Promise ? a2.then(s2) : s2(a2);
} : void 0, sortBy: e22?.sortBy || t22?.sortBy ? (i2) => {
  var r2, a2;
  let s2 = ((r2 = e22?.sortBy) == null ? void 0 : r2.call(e22, i2)) ?? [], n2 = ((a2 = t22?.sortBy) == null ? void 0 : a2.call(t22, i2)) ?? [], o22 = (e3, t3) => [...Array.isArray(e3) ? e3 : [e3], ...Array.isArray(t3) ? t3 : [t3]];
  return s2 instanceof Promise || n2 instanceof Promise ? Promise.all([s2, n2]).then(([e3, t3]) => o22(e3, t3)) : o22(s2, n2);
} : void 0 }), Eo = async (e22, t22) => {
  let i2 = e22;
  if (t22?.filter) {
    let r3 = e22.map((e3) => t22.filter(e3));
    if (r3.some((e3) => e3 instanceof Promise)) {
      let t3 = await Promise.all(r3);
      i2 = e22.filter((e3, i3) => t3[i3]);
    } else i2 = e22.filter((e3, t3) => r3[t3]);
  }
  if (!t22?.sortBy) return i2;
  let r2 = i2.map((e3) => t22.sortBy(e3)), a2 = r2.some((e3) => e3 instanceof Promise) ? await Promise.all(r2) : r2;
  return i2.map((e3, t3) => ({ track: e3, sortValue: a2[t3] })).sort((e3, t3) => {
    let i3 = Array.isArray(e3.sortValue) ? e3.sortValue : [e3.sortValue], r3 = Array.isArray(t3.sortValue) ? t3.sortValue : [t3.sortValue], a3 = Math.max(i3.length, r3.length);
    for (let s2 = 0; s2 < a3; s2++) {
      let e4 = i3[s2] ?? 0, t4 = r3[s2] ?? 0;
      if (e4 !== t4) return e4 - t4;
    }
    return 0;
  }).map((e3) => e3.track);
}, Io = (e22, t22) => {
  let r2 = 1.000000001, a2 = [12, 15, 20, 24e3 / 1001, 24, 25, 3e4 / 1001, 30, 48, 50, 6e4 / 1001, 60, 100, 12e4 / 1001, 120, 144, 240];
  if (e22.length < 2) return null;
  let s2 = new Float64Array(e22.length - 1);
  for (let v2 = 1; v2 < e22.length; v2++) {
    let t3 = e22[v2] - e22[v2 - 1];
    if (!(t3 > 0)) return null;
    s2[v2 - 1] = t3;
  }
  let n2 = s2.slice();
  n2.sort();
  let o22 = n2[Math.floor(0.05 * n2.length)];
  for (let v2 = 0; v2 < 6; v2++) {
    let e3 = 0, t3 = 0;
    for (let a3 of s2) {
      let i4 = Math.max(1, Math.round(a3 / o22));
      Math.abs(a3 - i4 * o22) >= r2 || (e3 += a3, t3 += i4);
    }
    if (t3 === 0) return null;
    let i3 = e3 / t3;
    if (Math.abs(i3 - o22) <= 1e-12 * Math.max(1, o22)) {
      o22 = i3;
      break;
    }
    o22 = i3;
  }
  let c22 = 0, l22 = 0, d22 = 0;
  for (let v2 of s2) {
    let e3 = Math.max(1, Math.round(v2 / o22));
    Math.abs(v2 - e3 * o22) >= r2 || (c22++, l22 += v2, d22 += e3);
  }
  if (c22 / s2.length < 0.98) return null;
  o22 = l22 / d22;
  let u2 = 1 / Math.min(d22, 1e3), h22 = Math.max(Number.EPSILON, o22 - u2), m2 = o22 + u2, f22 = t22 / m2, p22 = t22 / h22, g2 = t22 / o22, k2 = null, w2 = 1 / 0;
  for (let v2 of a2) {
    if (v2 < f22 || v2 > p22) continue;
    let e3 = Math.abs(v2 / g2 - 1);
    e3 < w2 && (k2 = v2, w2 = e3);
  }
  if (k2 === null) {
    let e3 = _o(h22, m2, 1e6), r3 = _o(f22, p22, 1e6);
    if (r3 && (!e3 || r3.den < e3.den || r3.den === e3.den && r3.num <= e3.num)) k2 = r3.num / r3.den;
    else {
      if (!e3) return null;
      k2 = t22 * e3.den / e3.num;
    }
  }
  let b2 = t22 / k2, y2 = 0;
  for (let v2 of s2) {
    let e3 = Math.max(1, Math.round(v2 / b2));
    Math.abs(v2 - e3 * b2) < r2 && y2++;
  }
  return y2 / s2.length < 0.98 ? null : k2;
}, _o = (e22, t22, i2) => {
  for (let r2 = 1; r2 <= i2; r2++) {
    let i3 = Math.floor(e22 * r2) + 1;
    if (i3 / r2 < t22) return we({ num: i3, den: r2 });
  }
  return null;
}, Bo = (e22) => {
  let t22 = [23.976023976023978, 29.970029970029973, 59.940059940059946, 119.88011988011989], i2 = [12, 15, 20, 24, 25, 30, 48, 50, 60, 100, 120, 144, 240];
  for (let s2 of t22) if (Math.abs(s2 / e22 - 1) <= 5e-4) return s2;
  let r2 = e22, a2 = 1 / 0;
  for (let s2 of i2) {
    let t3 = Math.abs(s2 / e22 - 1);
    t3 <= 0.025 && t3 < a2 && (r2 = s2, a2 = t3);
  }
  return r2;
};
me();
var Ao = 2, Mo = class _Mo extends Te {
  get disposed() {
    return this._disposed;
  }
  constructor(e22) {
    if (super(), this._demuxerPromise = null, this._format = null, this._trackBackingsCache = null, this._backingToTrack = /* @__PURE__ */ new Map(), this._disposed = !1, this._nextSourceCacheAge = 0, this._sourceRefs = [], this._sourceCache = [], this._sourceCachePromises = [], this._onFormatDetermined = null, !e22 || typeof e22 != "object") throw new TypeError("options must be an object.");
    if (!Array.isArray(e22.formats) || e22.formats.some((e3) => !(e3 instanceof Fs))) throw new TypeError("options.formats must be an array of InputFormat.");
    if (!(e22.source instanceof us || e22.source instanceof hs)) throw new TypeError("options.source must be a Source or SourceRef.");
    if (e22.source instanceof us && e22.source._disposed) throw new TypeError("options.source must not be a disposed Source.");
    if (e22.initInput !== void 0 && !(e22.initInput instanceof _Mo)) throw new TypeError("options.initInput, when provided, must be an Input.");
    e22.formatOptions !== void 0 && ((e3, t22) => {
      if (!e3 || typeof e3 != "object") throw new TypeError(`${t22}, when provided, must be an object.`);
      if (e3.isobmff !== void 0) {
        if (!e3.isobmff || typeof e3.isobmff != "object") throw new TypeError(`${t22}.isobmff, when provided, must be an object.`);
        if (e3.isobmff.resolveKeyId !== void 0 && typeof e3.isobmff.resolveKeyId != "function") throw new TypeError(`${t22}.isobmff.resolveKeyId, when provided, must be a function.`);
      }
      if (e3.hls !== void 0) {
        if (!e3.hls || typeof e3.hls != "object") throw new TypeError(`${t22}.hls, when provided, must be an object.`);
        if (e3.hls.offsetTimestampsByDateTime !== void 0 && typeof e3.hls.offsetTimestampsByDateTime != "boolean") throw new TypeError(`${t22}.hls.offsetTimestampsByDateTime, when provided, must be a boolean.`);
      }
    })(e22.formatOptions, "formatOptions"), this._formats = e22.formats, this._initInput = e22.initInput ?? null, this._formatOptions = e22.formatOptions ?? {}, e22.source instanceof us ? this._rootRef = e22.source.ref() : this._rootRef = e22.source, this._sourceRefs.push(this._rootRef);
  }
  get _rootSource() {
    return this._rootRef.source;
  }
  async _getSourceUncached(e22) {
    o2(this._rootSource instanceof ms);
    let t22 = await this._rootSource._resolveRequest(e22);
    return this._emit("source", { source: t22.source, request: e22, isRoot: e22.isRoot }), t22;
  }
  _getSourceCached(e22, t22 = 1) {
    let i2 = this._sourceCache.find((i3) => i3.cacheGroup === t22 && fs(i3.request, e22));
    if (i2) return i2.age++, Promise.resolve(i2.sourceRef.source.ref());
    let r2 = this._sourceCachePromises.find((i3) => i3.cacheGroup === t22 && fs(i3.request, e22));
    if (r2) return r2.promise.then((e3) => e3.sourceRef.source.ref());
    let a2 = (async () => {
      let i3 = await this._getSourceUncached(e22);
      if (ge(this._sourceCache, (e3) => e3.cacheGroup === t22 && e3.sourceRef.source._refCount === 1) >= 4) {
        let e3 = ke(this._sourceCache, (e4) => e4.cacheGroup === t22 && e4.sourceRef.source._refCount === 1 ? e4.age : 1 / 0);
        o2(e3 !== -1);
        let i4 = this._sourceCache[e3];
        this._sourceCache.splice(e3, 1), i4.sourceRef.free(), R2(this._sourceRefs, i4.sourceRef);
      }
      this._sourceRefs.push(i3);
      let r3 = this._sourceCachePromises.findIndex((t3) => t3.request === e22);
      return o2(r3 !== -1), this._sourceCachePromises.splice(r3, 1), { request: e22, sourceRef: i3, age: this._nextSourceCacheAge++, cacheGroup: t22 };
    })();
    return this._sourceCachePromises.push({ request: e22, cacheGroup: t22, promise: a2 }), a2.then((e3) => {
      let t3 = e3.sourceRef.source.ref();
      return this._sourceCache.push(e3), t3;
    });
  }
  _getDemuxer() {
    return this._demuxerPromise ?? (this._demuxerPromise = (async () => {
      var e22;
      this._reader = new Do(this._rootSource), this._emit("source", { source: this._rootSource, request: null, isRoot: !0 });
      for (let t22 of this._formats)
        if (await t22._canReadInput(this)) return this._format = t22, (e22 = this._onFormatDetermined) == null || e22.call(this, t22), t22._createDemuxer(this);
      throw new Fo();
    })());
  }
  get source() {
    return this._rootSource;
  }
  async getFormat() {
    return await this._getDemuxer(), o2(this._format), this._format;
  }
  async canRead() {
    try {
      return await this._getDemuxer(), !0;
    } catch (e22) {
      if (e22 instanceof Fo) return !1;
      throw e22;
    }
  }
  async getFirstTimestamp(e22) {
    e22 ?? (e22 = await this.getTracks());
    let t22 = e22.filter((e3) => e3 !== null);
    if (t22.length === 0) return 0;
    let i2 = await Promise.all(t22.map((e3) => e3._backing.getFirstPacket({ metadataOnly: !0 }))), r2 = Math.min(...i2.map((e3) => e3?.timestamp ?? 1 / 0));
    return r2 === 1 / 0 ? 0 : r2;
  }
  async computeDuration(e22, t22) {
    e22 ?? (e22 = await this.getTracks());
    let i2 = e22.filter((e3) => e3 !== null);
    if (i2.length === 0) return 0;
    let r2 = await Promise.all(i2.map((e3) => e3.computeDuration(t22)));
    return Math.max(...r2);
  }
  async getDurationFromMetadata(e22, t22) {
    e22 ?? (e22 = await this.getTracks());
    let i2 = e22.filter((e3) => e3 !== null), r2 = (await Promise.all(i2.map((e3) => e3.getDurationFromMetadata(t22)))).filter((e3) => e3 !== null);
    return r2.length === 0 ? null : Math.max(...r2);
  }
  async getTracks(e22) {
    e22 && (e22 = Co(e22));
    let t22 = (await this._getTrackBackings()).map((e3) => this._wrapBackingAsTrack(e3));
    return Eo(t22, e22);
  }
  async getVideoTracks(e22) {
    e22 && (e22 = Co(e22));
    let t22 = (await this.getTracks()).filter((e3) => e3.isVideoTrack());
    return Eo(t22, e22);
  }
  async getAudioTracks(e22) {
    e22 && (e22 = Co(e22));
    let t22 = (await this.getTracks()).filter((e3) => e3.isAudioTrack());
    return Eo(t22, e22);
  }
  async getPrimaryVideoTrack(e22) {
    e22 && (e22 = Co(e22));
    let t22 = xo(e22, { sortBy: async (e3) => [Po((await e3.getDisposition()).default), Po(await e3.hasPairableAudioTrack()), Po(!await e3.hasOnlyKeyPackets()), So(await e3.getBitrate())] });
    return (await this.getVideoTracks(t22))[0] ?? null;
  }
  async getPrimaryAudioTrack(e22) {
    e22 && (e22 = Co(e22));
    let t22 = await this.getPrimaryVideoTrack(), i2 = xo(e22, { sortBy: async (e3) => [Po(!t22 || e3.canBePairedWith(t22)), Po((await e3.getDisposition()).default), So(await e3.getBitrate())] });
    return (await this.getAudioTracks(i2))[0] ?? null;
  }
  async _getTrackBackings() {
    let e22 = await this._getDemuxer();
    return this._trackBackingsCache ?? (this._trackBackingsCache = await e22.getTrackBackings());
  }
  _wrapBackingAsTrack(e22) {
    let t22 = this._backingToTrack.get(e22);
    if (t22) return t22;
    let i2 = e22.getType() === "video" ? new vo(this, e22) : new To(this, e22);
    return this._backingToTrack.set(e22, i2), i2;
  }
  async getMimeType() {
    return (await this._getDemuxer()).getMimeType();
  }
  async getMetadataTags() {
    return (await this._getDemuxer()).getMetadataTags();
  }
  dispose() {
    if (!this._disposed) {
      this._disposed = !0;
      for (let e22 of this._sourceRefs) e22.free();
      this._sourceRefs.length = 0, this._demuxerPromise && this._demuxerPromise.then((e22) => e22.dispose()).catch(() => {
      });
    }
  }
  [Symbol.dispose]() {
    this.dispose();
  }
}, Fo = class extends Error {
  constructor(e22 = "Input has an unsupported or unrecognizable format.") {
    super(e22), this.name = "UnsupportedInputFormatError";
  }
}, Ro = class extends Error {
  constructor(e22 = "Input has been disposed.") {
    super(e22), this.name = "InputDisposedError";
  }
};
var Do = class {
  constructor(e22) {
    this.source = e22;
  }
  get fileSize() {
    let e22 = this.source._getFileSize();
    if (e22 === void 0) throw new Error("Reading file size too early; read required first.");
    return e22;
  }
  get fileSizeNonStrict() {
    return this.source._getFileSize() ?? null;
  }
  requestSlice(e22, t22) {
    if (this.source._disposed) throw new Ro();
    if (e22 < 0 || this.fileSizeNonStrict !== null && e22 + t22 > this.fileSizeNonStrict) return null;
    if (t22 === 0) {
      let t3 = new Uint8Array(0);
      return new Oo(t3, f2(t3), 0, e22, e22);
    }
    let i2 = e22 + t22, r2 = this.source._read(e22, i2, 0, ds);
    return r2 instanceof Promise ? r2.then((t3) => t3 ? new Oo(t3.bytes, t3.view, t3.offset, e22, i2) : null) : r2 ? new Oo(r2.bytes, r2.view, r2.offset, e22, i2) : null;
  }
  requestSliceRange(e22, t22, i2) {
    if (this.source._disposed) throw new Ro();
    if (e22 < 0) return null;
    if (this.fileSizeNonStrict !== null) return this.requestSlice(e22, U(this.fileSizeNonStrict - e22, t22, i2));
    {
      let r2 = this.requestSlice(e22, i2), a2 = (r3) => r3 || (o2(this.fileSizeNonStrict !== null), this.requestSlice(e22, U(this.fileSizeNonStrict - e22, t22, i2)));
      return r2 instanceof Promise ? r2.then(a2) : a2(r2);
    }
  }
  requestEntireFile() {
    return this.fileSizeNonStrict !== null ? this.requestSlice(0, this.fileSizeNonStrict) : (async () => {
      let e22 = [], t22 = 0;
      for (; ; ) {
        if (e22.length === 1 && this.fileSizeNonStrict !== null) return this.requestSlice(0, this.fileSizeNonStrict);
        let i3 = this.requestSliceRange(t22, 0, 1024);
        if (i3 instanceof Promise && (i3 = await i3), !i3 || i3.length === 0) break;
        let r3 = zo(i3, i3.length);
        e22.push(r3), t22 += i3.length;
      }
      let i2 = new Uint8Array(t22), r2 = 0;
      for (let a2 of e22) i2.set(a2, r2), r2 += a2.length;
      return new Oo(i2, f2(i2), 0, 0, t22);
    })();
  }
}, Oo = class _Oo {
  constructor(e22, t22, i2, r2, a2) {
    this.bytes = e22, this.view = t22, this.offset = i2, this.start = r2, this.end = a2, this.bufferPos = r2 - i2;
  }
  static tempFromBytes(e22) {
    return new _Oo(e22, f2(e22), 0, 0, e22.length);
  }
  get length() {
    return this.end - this.start;
  }
  get filePos() {
    return this.offset + this.bufferPos;
  }
  set filePos(e22) {
    this.bufferPos = e22 - this.offset;
  }
  get remainingLength() {
    return Math.max(this.end - this.filePos, 0);
  }
  skip(e22) {
    this.bufferPos += e22;
  }
  slice(e22, t22 = this.end - e22) {
    if (e22 < this.start || e22 + t22 > this.end) throw new RangeError("Slicing outside of original slice.");
    return new _Oo(this.bytes, this.view, this.offset, e22, e22 + t22);
  }
}, No = (e22, t22) => {
  if (e22.filePos < e22.start || e22.filePos + t22 > e22.end) throw new RangeError(`Tried reading [${e22.filePos}, ${e22.filePos + t22}), but slice is [${e22.start}, ${e22.end}). This is likely an internal error, please report it alongside the file that caused it.`);
}, zo = (e22, t22) => {
  No(e22, t22);
  let i2 = e22.bytes.subarray(e22.bufferPos, e22.bufferPos + t22);
  return e22.bufferPos += t22, i2;
}, Lo = (e22) => (No(e22, 1), e22.view.getUint8(e22.bufferPos++)), Uo = (e22, t22) => {
  No(e22, 2);
  let i2 = e22.view.getUint16(e22.bufferPos, t22);
  return e22.bufferPos += 2, i2;
}, Wo = (e22) => {
  No(e22, 2);
  let t22 = e22.view.getUint16(e22.bufferPos, !1);
  return e22.bufferPos += 2, t22;
}, qo = (e22) => {
  No(e22, 3);
  let t22 = z(e22.view, e22.bufferPos, !1);
  return e22.bufferPos += 3, t22;
}, Vo = (e22) => {
  No(e22, 2);
  let t22 = e22.view.getInt16(e22.bufferPos, !1);
  return e22.bufferPos += 2, t22;
}, Ho = (e22, t22) => {
  No(e22, 4);
  let i2 = e22.view.getUint32(e22.bufferPos, t22);
  return e22.bufferPos += 4, i2;
}, $o = (e22) => {
  No(e22, 4);
  let t22 = e22.view.getUint32(e22.bufferPos, !1);
  return e22.bufferPos += 4, t22;
}, jo = (e22) => {
  No(e22, 4);
  let t22 = e22.view.getUint32(e22.bufferPos, !0);
  return e22.bufferPos += 4, t22;
}, Ko = (e22) => {
  No(e22, 4);
  let t22 = e22.view.getInt32(e22.bufferPos, !1);
  return e22.bufferPos += 4, t22;
}, Qo = (e22, t22) => {
  let i2, r2;
  return t22 ? (i2 = Ho(e22, !0), r2 = Ho(e22, !0)) : (r2 = Ho(e22, !1), i2 = Ho(e22, !1)), 4294967296 * r2 + i2;
}, Go = (e22) => 4294967296 * $o(e22) + $o(e22), Xo = (e22) => 4294967296 * Ko(e22) + $o(e22), Yo = (e22) => {
  let t22 = jo(e22);
  return 4294967296 * ((e3) => {
    No(e3, 4);
    let t3 = e3.view.getInt32(e3.bufferPos, !0);
    return e3.bufferPos += 4, t3;
  })(e22) + t22;
}, Jo = (e22) => {
  No(e22, 4);
  let t22 = e22.view.getFloat32(e22.bufferPos, !1);
  return e22.bufferPos += 4, t22;
}, Zo = (e22) => {
  No(e22, 8);
  let t22 = e22.view.getFloat64(e22.bufferPos, !1);
  return e22.bufferPos += 8, t22;
}, ec = (e22, t22) => {
  No(e22, t22);
  let i2 = "";
  for (let r2 = 0; r2 < t22; r2++) i2 += String.fromCharCode(e22.bytes[e22.bufferPos++]);
  return i2;
}, tc = (e22, t22, i2) => p2.decode(zo(e22, t22)).split(`
`).map((e3) => e3.trim()).filter((e3) => {
  var t3;
  return e3.length > 0 && !((t3 = i2?.ignore) != null && t3.call(i2, e3));
});
var ic, rc, ac, sc;
(rc = ic || (ic = {}))[rc.Unsynchronisation = 128] = "Unsynchronisation", rc[rc.ExtendedHeader = 64] = "ExtendedHeader", rc[rc.ExperimentalIndicator = 32] = "ExperimentalIndicator", rc[rc.Footer = 16] = "Footer", (sc = ac || (ac = {}))[sc.ISO_8859_1 = 0] = "ISO_8859_1", sc[sc.UTF_16_WITH_BOM = 1] = "UTF_16_WITH_BOM", sc[sc.UTF_16_BE_NO_BOM = 2] = "UTF_16_BE_NO_BOM", sc[sc.UTF_8 = 3] = "UTF_8";
var nc = 128, oc = 10, cc = ["Blues", "Classic rock", "Country", "Dance", "Disco", "Funk", "Grunge", "Hip-hop", "Jazz", "Metal", "New age", "Oldies", "Other", "Pop", "Rhythm and blues", "Rap", "Reggae", "Rock", "Techno", "Industrial", "Alternative", "Ska", "Death metal", "Pranks", "Soundtrack", "Euro-techno", "Ambient", "Trip-hop", "Vocal", "Jazz & funk", "Fusion", "Trance", "Classical", "Instrumental", "Acid", "House", "Game", "Sound clip", "Gospel", "Noise", "Alternative rock", "Bass", "Soul", "Punk", "Space", "Meditative", "Instrumental pop", "Instrumental rock", "Ethnic", "Gothic", "Darkwave", "Techno-industrial", "Electronic", "Pop-folk", "Eurodance", "Dream", "Southern rock", "Comedy", "Cult", "Gangsta", "Top 40", "Christian rap", "Pop/funk", "Jungle music", "Native US", "Cabaret", "New wave", "Psychedelic", "Rave", "Showtunes", "Trailer", "Lo-fi", "Tribal", "Acid punk", "Acid jazz", "Polka", "Retro", "Musical", "Rock 'n' roll", "Hard rock", "Folk", "Folk rock", "National folk", "Swing", "Fast fusion", "Bebop", "Latin", "Revival", "Celtic", "Bluegrass", "Avantgarde", "Gothic rock", "Progressive rock", "Psychedelic rock", "Symphonic rock", "Slow rock", "Big band", "Chorus", "Easy listening", "Acoustic", "Humour", "Speech", "Chanson", "Opera", "Chamber music", "Sonata", "Symphony", "Booty bass", "Primus", "Porn groove", "Satire", "Slow jam", "Club", "Tango", "Samba", "Folklore", "Ballad", "Power ballad", "Rhythmic Soul", "Freestyle", "Duet", "Punk rock", "Drum solo", "A cappella", "Euro-house", "Dance hall", "Goa music", "Drum & bass", "Club-house", "Hardcore techno", "Terror", "Indie", "Britpop", "Negerpunk", "Polsk punk", "Beat", "Christian gangsta rap", "Heavy metal", "Black metal", "Crossover", "Contemporary Christian", "Christian rock", "Merengue", "Salsa", "Thrash metal", "Anime", "Jpop", "Synthpop", "Christmas", "Art rock", "Baroque", "Bhangra", "Big beat", "Breakbeat", "Chillout", "Downtempo", "Dub", "EBM", "Eclectic", "Electro", "Electroclash", "Emo", "Experimental", "Garage", "Global", "IDM", "Illbient", "Industro-Goth", "Jam Band", "Krautrock", "Leftfield", "Lounge", "Math rock", "New romantic", "Nu-breakz", "Post-punk", "Post-rock", "Psytrance", "Shoegaze", "Space rock", "Trop rock", "World music", "Neoclassical", "Audiobook", "Audio theatre", "Neue Deutsche Welle", "Podcast", "Indie rock", "G-Funk", "Dubstep", "Garage rock", "Psybient"], lc = (e22, t22) => {
  var i2;
  let r2 = e22.filePos;
  t22.raw ?? (t22.raw = {}), (i2 = t22.raw).TAG ?? (i2.TAG = zo(e22, nc - 3)), e22.filePos = r2;
  let a2 = dc(e22, 30);
  a2 && (t22.title ?? (t22.title = a2));
  let s2 = dc(e22, 30);
  s2 && (t22.artist ?? (t22.artist = s2));
  let n2 = dc(e22, 30);
  n2 && (t22.album ?? (t22.album = n2));
  let o22 = dc(e22, 4), c22 = Number.parseInt(o22, 10);
  Number.isInteger(c22) && c22 > 0 && (t22.date ?? (t22.date = new Date(String(c22))));
  let l22 = zo(e22, 30), d22;
  if (l22[28] === 0 && l22[29] !== 0) {
    let i3 = l22[29];
    i3 > 0 && (t22.trackNumber ?? (t22.trackNumber = i3)), e22.skip(-30), d22 = dc(e22, 28), e22.skip(2);
  } else e22.skip(-30), d22 = dc(e22, 30);
  d22 && (t22.comment ?? (t22.comment = d22));
  let u2 = Lo(e22);
  u2 < cc.length && (t22.genre ?? (t22.genre = cc[u2]));
}, dc = (e22, t22) => {
  let i2 = zo(e22, t22), r2 = oe(i2.indexOf(0), i2.length), a2 = i2.subarray(0, r2), s2 = "";
  for (let n2 = 0; n2 < a2.length; n2++) s2 += String.fromCharCode(a2[n2]);
  return s2.trimEnd();
}, uc = (e22) => {
  let t22 = e22.filePos, i2 = ec(e22, 3), r2 = Lo(e22), a2 = Lo(e22), s2 = Lo(e22), n2 = $o(e22);
  if (i2 !== "ID3" || r2 === 255 || a2 === 255 || 2155905152 & n2) return e22.filePos = t22, null;
  let o22 = vt(n2);
  return s2 & ic.Footer && (o22 += oc), { majorVersion: r2, revision: a2, flags: s2, size: o22 };
}, hc = (e22, t22, i2) => {
  var r2, a2, s2, n2, o22;
  if (![2, 3, 4].includes(t22.majorVersion)) return void Ee._warn(`Unsupported ID3v2 major version: ${t22.majorVersion}`);
  let c22 = t22.flags & ic.Footer ? t22.size - oc : t22.size, l22 = zo(e22, c22), d22 = new mc(t22, l22);
  if (t22.flags & ic.Unsynchronisation && t22.majorVersion === 3 && d22.ununsynchronizeAll(), t22.flags & ic.ExtendedHeader) {
    let e3 = d22.readU32();
    t22.majorVersion === 3 ? d22.pos += e3 : d22.pos += e3 - 4;
  }
  for (; d22.pos <= d22.bytes.length - d22.frameHeaderSize(); ) {
    let e3 = d22.readId3V2Frame();
    if (!e3) break;
    let c3 = d22.pos, l3 = d22.pos + e3.size, u2 = !1, h22 = !1, m2 = !1;
    if (t22.majorVersion === 3 ? (u2 = !!(64 & e3.flags), h22 = !!(128 & e3.flags)) : t22.majorVersion === 4 && (u2 = !!(4 & e3.flags), h22 = !!(8 & e3.flags), m2 = !!(2 & e3.flags) || !!(t22.flags & ic.Unsynchronisation)), u2) Ee._warn(`Skipping encrypted ID3v2 frame ${e3.id}`), d22.pos = l3;
    else if (h22) Ee._warn(`Skipping compressed ID3v2 frame ${e3.id}`), d22.pos = l3;
    else {
      if (m2 && d22.ununsynchronizeRegion(d22.pos, l3), i2.raw ?? (i2.raw = {}), e3.id === "TXXX") {
        let e4 = (r2 = i2.raw).TXXX ?? (r2.TXXX = {}), t3 = d22.readId3V2TextEncoding(), a3 = d22.readId3V2Text(t3, l3), s3 = d22.readId3V2Text(t3, l3);
        e4[a3] ?? (e4[a3] = s3);
      } else e3.id[0] === "T" ? (a2 = i2.raw)[s2 = e3.id] ?? (a2[s2] = d22.readId3V2EncodingAndText(l3)) : (n2 = i2.raw)[o22 = e3.id] ?? (n2[o22] = d22.readBytes(e3.size));
      switch (d22.pos = c3, e3.id) {
        case "TIT2":
        case "TT2":
          i2.title ?? (i2.title = d22.readId3V2EncodingAndText(l3));
          break;
        case "TIT3":
        case "TT3":
          i2.description ?? (i2.description = d22.readId3V2EncodingAndText(l3));
          break;
        case "TPE1":
        case "TP1":
          i2.artist ?? (i2.artist = d22.readId3V2EncodingAndText(l3));
          break;
        case "TALB":
        case "TAL":
          i2.album ?? (i2.album = d22.readId3V2EncodingAndText(l3));
          break;
        case "TPE2":
        case "TP2":
          i2.albumArtist ?? (i2.albumArtist = d22.readId3V2EncodingAndText(l3));
          break;
        case "TRCK":
        case "TRK":
          {
            let e4 = d22.readId3V2EncodingAndText(l3).split("/"), t3 = Number.parseInt(e4[0], 10), r3 = e4[1] && Number.parseInt(e4[1], 10);
            Number.isInteger(t3) && t3 > 0 && (i2.trackNumber ?? (i2.trackNumber = t3)), r3 && Number.isInteger(r3) && r3 > 0 && (i2.tracksTotal ?? (i2.tracksTotal = r3));
          }
          break;
        case "TPOS":
        case "TPA":
          {
            let e4 = d22.readId3V2EncodingAndText(l3).split("/"), t3 = Number.parseInt(e4[0], 10), r3 = e4[1] && Number.parseInt(e4[1], 10);
            Number.isInteger(t3) && t3 > 0 && (i2.discNumber ?? (i2.discNumber = t3)), r3 && Number.isInteger(r3) && r3 > 0 && (i2.discsTotal ?? (i2.discsTotal = r3));
          }
          break;
        case "TCON":
        case "TCO":
          {
            let e4 = d22.readId3V2EncodingAndText(l3), t3 = /^\((\d+)\)/.exec(e4);
            if (t3) {
              let e5 = Number.parseInt(t3[1]);
              if (cc[e5] !== void 0) {
                i2.genre ?? (i2.genre = cc[e5]);
                break;
              }
            }
            if (t3 = /^\d+$/.exec(e4), t3) {
              let e5 = Number.parseInt(t3[0]);
              if (cc[e5] !== void 0) {
                i2.genre ?? (i2.genre = cc[e5]);
                break;
              }
            }
            i2.genre ?? (i2.genre = e4);
          }
          break;
        case "TDRC":
        case "TDAT":
          {
            let e4 = d22.readId3V2EncodingAndText(l3), t3 = new Date(e4);
            Number.isNaN(t3.getTime()) || (i2.date ?? (i2.date = t3));
          }
          break;
        case "TYER":
        case "TYE":
          {
            let e4 = d22.readId3V2EncodingAndText(l3), t3 = Number.parseInt(e4, 10);
            Number.isInteger(t3) && (i2.date ?? (i2.date = new Date(String(t3))));
          }
          break;
        case "USLT":
        case "ULT":
          {
            let e4 = d22.readU8();
            d22.pos += 3, d22.readId3V2Text(e4, l3), i2.lyrics ?? (i2.lyrics = d22.readId3V2Text(e4, l3));
          }
          break;
        case "COMM":
        case "COM":
          {
            let e4 = d22.readU8();
            d22.pos += 3, d22.readId3V2Text(e4, l3), i2.comment ?? (i2.comment = d22.readId3V2Text(e4, l3));
          }
          break;
        case "APIC":
        case "PIC":
          {
            let e4 = d22.readId3V2TextEncoding(), r3;
            if (t22.majorVersion === 2) {
              let e5 = d22.readAscii(3);
              r3 = e5 === "PNG" ? "image/png" : e5 === "JPG" ? "image/jpeg" : "image/*";
            } else r3 = d22.readId3V2Text(e4, l3);
            let a3 = d22.readU8(), s3 = d22.readId3V2Text(e4, l3).trimEnd(), n3 = l3 - d22.pos;
            if (n3 >= 0) {
              let e5 = d22.readBytes(n3);
              i2.images || (i2.images = []), i2.images.push({ data: e5, mimeType: r3, kind: a3 === 3 ? "coverFront" : a3 === 4 ? "coverBack" : "unknown", description: s3 });
            }
          }
          break;
        default:
          d22.pos += e3.size;
      }
      d22.pos = l3;
    }
  }
}, mc = class {
  constructor(e22, t22) {
    this.header = e22, this.bytes = t22, this.pos = 0, this.view = new DataView(t22.buffer, t22.byteOffset, t22.byteLength);
  }
  frameHeaderSize() {
    return this.header.majorVersion === 2 ? 6 : 10;
  }
  ununsynchronizeAll() {
    let e22 = [];
    for (let t22 = 0; t22 < this.bytes.length; t22++) {
      let i2 = this.bytes[t22];
      e22.push(i2), i2 === 255 && t22 !== this.bytes.length - 1 && this.bytes[t22] === 0 && t22++;
    }
    this.bytes = new Uint8Array(e22), this.view = new DataView(this.bytes.buffer);
  }
  ununsynchronizeRegion(e22, t22) {
    let i2 = [];
    for (let s2 = e22; s2 < t22; s2++) {
      let e3 = this.bytes[s2];
      i2.push(e3), e3 === 255 && s2 !== t22 - 1 && this.bytes[s2 + 1] === 0 && s2++;
    }
    let r2 = this.bytes.subarray(0, e22), a2 = this.bytes.subarray(t22);
    this.bytes = new Uint8Array(r2.length + i2.length + a2.length), this.bytes.set(r2, 0), this.bytes.set(i2, r2.length), this.bytes.set(a2, r2.length + i2.length), this.view = new DataView(this.bytes.buffer);
  }
  readBytes(e22) {
    let t22 = this.bytes.subarray(this.pos, this.pos + e22);
    return this.pos += e22, t22;
  }
  readU8() {
    let e22 = this.view.getUint8(this.pos);
    return this.pos += 1, e22;
  }
  readU16() {
    let e22 = this.view.getUint16(this.pos, !1);
    return this.pos += 2, e22;
  }
  readU24() {
    let e22 = this.view.getUint16(this.pos, !1), t22 = this.view.getUint8(this.pos + 2);
    return this.pos += 3, 256 * e22 + t22;
  }
  readU32() {
    let e22 = this.view.getUint32(this.pos, !1);
    return this.pos += 4, e22;
  }
  readAscii(e22) {
    let t22 = "";
    for (let i2 = 0; i2 < e22; i2++) t22 += String.fromCharCode(this.view.getUint8(this.pos + i2));
    return this.pos += e22, t22;
  }
  readId3V2Frame() {
    if (this.header.majorVersion === 2) {
      let e22 = this.readAscii(3);
      return e22 === "\0\0\0" ? null : { id: e22, size: this.readU24(), flags: 0 };
    }
    {
      let e22 = this.readAscii(4);
      if (e22 === "\0\0\0\0") return null;
      let t22 = this.readU32(), i2 = this.header.majorVersion === 4 ? vt(t22) : t22, r2 = this.readU16(), a2 = this.pos, s2 = (e3) => {
        let t3 = this.pos + e3;
        if (t3 > this.bytes.length) return !1;
        if (t3 <= this.bytes.length - this.frameHeaderSize()) {
          this.pos += e3;
          let t4 = this.readAscii(4);
          if (t4 !== "\0\0\0\0" && !/[0-9A-Z]{4}/.test(t4)) return !1;
        }
        return !0;
      };
      if (!s2(i2)) {
        let e3 = this.header.majorVersion === 4 ? t22 : vt(t22);
        s2(e3) && (i2 = e3);
      }
      return this.pos = a2, { id: e22, size: i2, flags: r2 };
    }
  }
  readId3V2TextEncoding() {
    let e22 = this.readU8();
    if (e22 > 3) throw new Error(`Unsupported text encoding: ${e22}`);
    return e22;
  }
  readId3V2Text(e22, t22) {
    let i2 = this.pos, r2 = this.readBytes(t22 - this.pos);
    switch (e22) {
      case ac.ISO_8859_1: {
        let e3 = "";
        for (let t3 = 0; t3 < r2.length; t3++) {
          let a2 = r2[t3];
          if (a2 === 0) {
            this.pos = i2 + t3 + 1;
            break;
          }
          e3 += String.fromCharCode(a2);
        }
        return e3;
      }
      case ac.UTF_16_WITH_BOM:
        if (r2[0] === 255 && r2[1] === 254) {
          let e3 = new TextDecoder("utf-16le"), t3 = oe(r2.findIndex((e4, t4) => e4 === 0 && r2[t4 + 1] === 0 && t4 % 2 == 0), r2.length);
          return this.pos = i2 + Math.min(t3 + 2, r2.length), e3.decode(r2.subarray(2, t3));
        }
        if (r2[0] === 254 && r2[1] === 255) {
          let e3 = new TextDecoder("utf-16be"), t3 = oe(r2.findIndex((e4, t4) => e4 === 0 && r2[t4 + 1] === 0 && t4 % 2 == 0), r2.length);
          return this.pos = i2 + Math.min(t3 + 2, r2.length), e3.decode(r2.subarray(2, t3));
        }
        {
          let e3 = oe(r2.findIndex((e4) => e4 === 0), r2.length);
          return this.pos = i2 + Math.min(e3 + 1, r2.length), p2.decode(r2.subarray(0, e3));
        }
      case ac.UTF_16_BE_NO_BOM: {
        let e3 = new TextDecoder("utf-16be"), t3 = oe(r2.findIndex((e4, t4) => e4 === 0 && r2[t4 + 1] === 0 && t4 % 2 == 0), r2.length);
        return this.pos = i2 + Math.min(t3 + 2, r2.length), e3.decode(r2.subarray(0, t3));
      }
      case ac.UTF_8: {
        let e3 = oe(r2.findIndex((e4) => e4 === 0), r2.length);
        return this.pos = i2 + Math.min(e3 + 1, r2.length), p2.decode(r2.subarray(0, e3));
      }
    }
  }
  readId3V2EncodingAndText(e22) {
    if (this.pos >= e22) return "";
    let t22 = this.readId3V2TextEncoding();
    return this.readId3V2Text(t22, e22);
  }
};
var fc = class {
  constructor(e22) {
    this.mutex = new x(), this.trackTimestampInfo = /* @__PURE__ */ new WeakMap(), this.output = e22;
  }
  onTrackClose(e22) {
  }
  validateTimestamp(e22, t22, i2) {
    if (t22 < 0) throw new Error(`Timestamps must be non-negative (got ${t22}s).`);
    let r2 = this.trackTimestampInfo.get(e22);
    if (r2) {
      if (i2 && (r2.maxTimestampBeforeLastKeyPacket = r2.maxTimestamp), r2.maxTimestampBeforeLastKeyPacket !== null && t22 < r2.maxTimestampBeforeLastKeyPacket) throw new Error(`Timestamps cannot be smaller than the largest timestamp of the previous GOP (a GOP begins with a key packet and ends right before the next key packet). Got ${t22}s, but largest timestamp is ${r2.maxTimestampBeforeLastKeyPacket}s.`);
      r2.maxTimestamp = Math.max(r2.maxTimestamp, t22);
    } else {
      if (!i2) throw new Error("First packet must be a key packet.");
      r2 = { maxTimestamp: t22, maxTimestampBeforeLastKeyPacket: null }, this.trackTimestampInfo.set(e22, r2);
    }
  }
};
var pc = /<(?:(\d{2}):)?(\d{2}):(\d{2}).(\d{3})>/g, gc = /(?:(\d{2}):)?(\d{2}):(\d{2}).(\d{3})/, kc = (e22) => {
  let t22 = Math.floor(e22 / 36e5), i2 = Math.floor(e22 % 36e5 / 6e4), r2 = Math.floor(e22 % 6e4 / 1e3), a2 = e22 % 1e3;
  return t22.toString().padStart(2, "0") + ":" + i2.toString().padStart(2, "0") + ":" + r2.toString().padStart(2, "0") + "." + a2.toString().padStart(3, "0");
};
var wc = class {
  constructor(e22) {
    this.writer = e22, this.helper = new Uint8Array(8), this.helperView = new DataView(this.helper.buffer), this.offsets = /* @__PURE__ */ new WeakMap();
  }
  writeU32(e22) {
    this.helperView.setUint32(0, e22, !1), this.writer.write(this.helper.subarray(0, 4));
  }
  writeU64(e22) {
    this.helperView.setUint32(0, Math.floor(e22 / 2 ** 32), !1), this.helperView.setUint32(4, e22, !1), this.writer.write(this.helper.subarray(0, 8));
  }
  writeAscii(e22) {
    for (let t22 = 0; t22 < e22.length; t22++) this.helperView.setUint8(t22 % 8, e22.charCodeAt(t22)), t22 % 8 == 7 && this.writer.write(this.helper);
    e22.length % 8 != 0 && this.writer.write(this.helper.subarray(0, e22.length % 8));
  }
  writeBox(e22) {
    if (this.offsets.set(e22, this.writer.getPos()), e22.contents && !e22.children) this.writeBoxHeader(e22, e22.size ?? e22.contents.byteLength + 8), this.writer.write(e22.contents);
    else {
      let t22 = this.writer.getPos();
      if (this.writeBoxHeader(e22, 0), e22.contents && this.writer.write(e22.contents), e22.children) for (let a2 of e22.children) a2 && this.writeBox(a2);
      let i2 = this.writer.getPos(), r2 = e22.size ?? i2 - t22;
      this.writer.seek(t22), this.writeBoxHeader(e22, r2), this.writer.seek(i2);
    }
  }
  writeBoxHeader(e22, t22) {
    this.writeU32(e22.largeSize ? 1 : t22), this.writeAscii(e22.type), e22.largeSize && this.writeU64(t22);
  }
  measureBoxHeader(e22) {
    return 8 + (e22.largeSize ? 8 : 0);
  }
  patchBox(e22) {
    let t22 = this.offsets.get(e22);
    o2(t22 !== void 0);
    let i2 = this.writer.getPos();
    this.writer.seek(t22), this.writeBox(e22), this.writer.seek(i2);
  }
  measureBox(e22) {
    if (e22.contents && !e22.children)
      return this.measureBoxHeader(e22) + e22.contents.byteLength;
    {
      let t22 = this.measureBoxHeader(e22);
      if (e22.contents && (t22 += e22.contents.byteLength), e22.children) for (let i2 of e22.children) i2 && (t22 += this.measureBox(i2));
      return t22;
    }
  }
}, bc = new Uint8Array(8), yc = new DataView(bc.buffer), vc = (e22) => [(e22 % 256 + 256) % 256], Tc = (e22) => (yc.setUint16(0, e22, !1), [bc[0], bc[1]]), Sc = (e22) => (yc.setInt16(0, e22, !1), [bc[0], bc[1]]), Pc = (e22) => (yc.setUint32(0, e22, !1), [bc[1], bc[2], bc[3]]), Cc = (e22) => (yc.setUint32(0, e22, !1), [bc[0], bc[1], bc[2], bc[3]]), xc = (e22) => (yc.setInt32(0, e22, !1), [bc[0], bc[1], bc[2], bc[3]]), Ec = (e22) => (yc.setUint32(0, Math.floor(e22 / 2 ** 32), !1), yc.setUint32(4, e22, !1), [bc[0], bc[1], bc[2], bc[3], bc[4], bc[5], bc[6], bc[7]]), Ic = (e22) => (yc.setInt32(0, Math.floor(e22 / 2 ** 32), !1), yc.setUint32(4, e22, !1), [bc[0], bc[1], bc[2], bc[3], bc[4], bc[5], bc[6], bc[7]]), _c = (e22) => (yc.setInt16(0, 256 * e22, !1), [bc[0], bc[1]]), Bc = (e22) => (yc.setInt32(0, 65536 * e22, !1), [bc[0], bc[1], bc[2], bc[3]]), Ac = (e22) => (yc.setInt32(0, 2 ** 30 * e22, !1), [bc[0], bc[1], bc[2], bc[3]]), Mc = (e22, t22) => {
  let i2 = [], r2 = e22;
  do {
    let e3 = 127 & r2;
    r2 >>= 7, i2.length > 0 && (e3 |= 128), i2.push(e3);
  } while (r2 > 0 || t22);
  return i2.reverse();
}, Fc = (e22, t22 = !1) => {
  let i2 = Array(e22.length).fill(null).map((t3, i3) => e22.charCodeAt(i3));
  return t22 && i2.push(0), i2;
}, Rc = (e22) => {
  let t22 = e22 * (Math.PI / 180), i2 = Math.round(Math.cos(t22)), r2 = Math.round(Math.sin(t22));
  return [i2, r2, 0, -r2, i2, 0, 0, 0, 1];
}, Dc = Rc(0), Oc = (e22) => [Bc(e22[0]), Bc(e22[1]), Ac(e22[2]), Bc(e22[3]), Bc(e22[4]), Ac(e22[5]), Bc(e22[6]), Bc(e22[7]), Ac(e22[8])], Nc = (e22, t22, i2) => ({ type: e22, contents: t22 && new Uint8Array(t22.flat(10)), children: i2 }), zc = (e22, t22, i2, r2, a2) => Nc(e22, [vc(t22), Pc(i2), r2 ?? []], a2), Lc = () => Nc("styp", [Fc("iso5"), Cc(0), Fc("iso5"), Fc("iso6"), Fc("mp41"), Fc("cmfc"), Fc("dash")]), Uc = (e22, t22) => {
  let i2 = e22.maxWrittenEndTimestamp - e22.minWrittenTimestamp;
  return Number.isFinite(i2) || (i2 = 0), zc("sidx", 1, 0, [Cc(1), Cc(hd), Ec(fd(e22.minWrittenTimestamp, hd)), Ec(0), Tc(0), Tc(1), Cc(2147483647 & t22), Cc(fd(i2, hd)), Cc(0)]);
}, Wc = (e22) => ({ type: "mdat", largeSize: e22 }), qc = (e22) => Nc("moov", void 0, [Vc(e22.creationTime, e22.trackDatas), ...e22.trackDatas.map((t22) => $c(t22, e22.creationTime)), e22.isFragmented ? _l(e22.trackDatas) : null, Vl(e22)]), Vc = (e22, t22) => {
  let i2 = Math.max(0, ...t22.map((e3) => fd(Hc(e3), hd) + fd(e3.startTimestampOffset ?? 0, hd))), r2 = Math.max(0, ...t22.map((e3) => e3.track.id)) + 1, a2 = !d2(e22) || !d2(i2), s2 = a2 ? Ec : Cc;
  return zc("mvhd", +a2, 0, [s2(e22), s2(e22), Cc(hd), s2(i2), Bc(1), _c(1), Array(10).fill(0), Oc(Dc), Array(24).fill(0), Cc(r2)]);
}, Hc = (e22) => {
  if (e22.samples.length === 0) return 0;
  let t22 = 1 / 0, i2 = -1 / 0;
  for (let r2 = 0; r2 < e22.samples.length; r2++) {
    let a2 = e22.samples[r2];
    a2.timestamp < t22 && (t22 = a2.timestamp), a2.timestamp + a2.duration > i2 && (i2 = a2.timestamp + a2.duration);
  }
  return t22 === 1 / 0 ? 0 : i2 - t22;
}, $c = (e22, t22) => {
  let i2 = md(e22), r2 = e22.startTimestampOffset !== null && e22.startTimestampOffset > 0;
  return Nc("trak", void 0, [jc(e22, t22), r2 ? Kc(e22, e22.startTimestampOffset) : null, Qc(e22, t22), i2.name !== void 0 ? Nc("udta", void 0, [Nc("name", [...g.encode(i2.name)])]) : null]);
}, jc = (e22, t22) => {
  var i2;
  let r2 = fd(Hc(e22), hd) + fd(e22.startTimestampOffset ?? 0, hd), a2 = !d2(t22) || !d2(r2), s2 = a2 ? Ec : Cc, n2;
  if (e22.type === "video") {
    let t3 = e22.track.metadata.rotation;
    n2 = Rc(t3 ?? 0);
  } else n2 = Dc;
  let o22 = 2;
  ((i2 = e22.track.metadata.disposition) == null ? void 0 : i2.default) !== !1 && (o22 |= 1);
  let c22 = e22.type === "video" ? 0 : e22.type === "audio" ? 1 : e22.type === "subtitle" ? 2 : N(e22);
  return zc("tkhd", +a2, o22, [s2(t22), s2(t22), Cc(e22.track.id), Cc(0), s2(r2), Array(8).fill(0), Tc(0), Tc(c22), _c(e22.type === "audio" ? 1 : 0), Tc(0), Oc(n2), Bc(e22.type === "video" ? e22.info.width : 0), Bc(e22.type === "video" ? e22.info.height : 0)]);
}, Kc = (e22, t22) => {
  let i2 = fd(t22, hd), r2 = fd(Hc(e22), hd), a2 = !d2(i2) || !d2(r2), s2 = a2 ? Ec : Cc, n2 = a2 ? Ic : xc;
  return Nc("edts", void 0, [zc("elst", a2 ? 1 : 0, 0, [Cc(2), s2(i2), n2(-1), Bc(1), s2(r2), n2(0), Bc(1)])]);
}, Qc = (e22, t22) => Nc("mdia", void 0, [Gc(e22, t22), Jc(!0, Xc[e22.type], Yc[e22.type]), Zc(e22)]), Gc = (e22, t22) => {
  let i2 = fd(Hc(e22), e22.timescale), r2 = !d2(t22) || !d2(i2), a2 = r2 ? Ec : Cc;
  return zc("mdhd", +r2, 0, [a2(t22), a2(t22), Cc(e22.timescale), a2(i2), Tc(rd(e22.track.metadata.languageCode ?? W)), Tc(0)]);
}, Xc = { video: "vide", audio: "soun", subtitle: "text" }, Yc = { video: "MediabunnyVideoHandler", audio: "MediabunnySoundHandler", subtitle: "MediabunnyTextHandler" }, Jc = (e22, t22, i2, r2 = "\0\0\0\0") => zc("hdlr", 0, 0, [e22 ? Fc("mhlr") : Cc(0), Fc(t22), Fc(r2), Cc(0), Cc(0), Fc(i2, !0)]), Zc = (e22) => Nc("minf", void 0, [el[e22.type](), tl(), al(e22)]), el = { video: () => zc("vmhd", 0, 1, [Tc(0), Tc(0), Tc(0), Tc(0)]), audio: () => zc("smhd", 0, 0, [Tc(0), Tc(0)]), subtitle: () => zc("nmhd", 0, 0) }, tl = () => Nc("dinf", void 0, [il()]), il = () => zc("dref", 0, 0, [Cc(1)], [rl()]), rl = () => zc("url ", 0, 1), al = (e22) => {
  let t22 = e22.compositionTimeOffsetTable.length > 1 || e22.compositionTimeOffsetTable.some((e3) => e3.sampleCompositionTimeOffset !== 0);
  return Nc("stbl", void 0, [sl(e22), Tl(e22), t22 ? El(e22) : null, t22 ? Il(e22) : null, Pl(e22), Cl(e22), xl(e22), Sl(e22)]);
}, sl = (e22) => {
  let t22;
  if (e22.type === "video") t22 = nl(Yl(e22.track.source._codec, e22.info.decoderConfig.codec), e22);
  else if (e22.type === "audio") {
    let i2 = Zl(e22.track.source._codec, e22.info.decoderConfig.codec, e22.muxer.isQuickTime);
    o2(i2), t22 = dl(i2, e22);
  } else e22.type === "subtitle" && (t22 = vl(td[e22.track.source._codec], e22));
  return o2(t22), zc("stsd", 0, 0, [Cc(1)], [t22]);
}, nl = (e22, t22) => {
  var i2;
  return Nc(e22, [Array(6).fill(0), Tc(1), Tc(0), Tc(0), Array(12).fill(0), Tc(t22.info.width), Tc(t22.info.height), Cc(4718592), Cc(4718592), Cc(0), Tc(1), vc(10), Fc("Mediabunny"), Array(21).fill(0), Tc(t22.info.hasAlphaChannel ? 32 : 24), Sc(65535)], [((i2 = Jl[t22.track.source._codec]) == null ? void 0 : i2.call(Jl, t22)) ?? null, ol(t22), P(t22.info.decoderConfig.colorSpace) ? cl(t22) : null]);
}, ol = (e22) => e22.info.pixelAspectRatio.num === e22.info.pixelAspectRatio.den ? null : Nc("pasp", [Cc(e22.info.pixelAspectRatio.num), Cc(e22.info.pixelAspectRatio.den)]), cl = (e22) => Nc("colr", [Fc(e22.muxer.isQuickTime ? "nclc" : "nclx"), Tc(w[e22.info.decoderConfig.colorSpace.primaries]), Tc(y[e22.info.decoderConfig.colorSpace.transfer]), Tc(T2[e22.info.decoderConfig.colorSpace.matrix]), e22.muxer.isQuickTime ? [] : vc((e22.info.decoderConfig.colorSpace.fullRange ? 1 : 0) << 7)]), ll = (e22) => {
  var t22, i2, r2, a2;
  if (!e22.info.decoderConfig) return null;
  let s2 = e22.info.decoderConfig, n2 = s2.codec.split("."), o22 = Number(n2[1]), c22 = Number(n2[2]), l22 = (Number(n2[3]) << 4) + ((n2[4] ? Number(n2[4]) : 1) << 1) + (n2[8] ? Number(n2[8]) : Number(((t22 = s2.colorSpace) == null ? void 0 : t22.fullRange) ?? 0)), d22 = n2[5] ? Number(n2[5]) : (i2 = s2.colorSpace) != null && i2.primaries ? w[s2.colorSpace.primaries] : 2, u2 = n2[6] ? Number(n2[6]) : (r2 = s2.colorSpace) != null && r2.transfer ? y[s2.colorSpace.transfer] : 2, h22 = n2[7] ? Number(n2[7]) : (a2 = s2.colorSpace) != null && a2.matrix ? T2[s2.colorSpace.matrix] : 2;
  return zc("vpcC", 1, 0, [vc(o22), vc(c22), vc(l22), vc(d22), vc(u2), vc(h22), Tc(0)]);
}, dl = (e22, t22) => {
  var i2;
  let r2, a2 = 0, s2 = 16, n2 = ze.includes(t22.track.source._codec);
  if (n2) {
    let e3 = t22.track.source._codec, { sampleSize: i3 } = at(e3);
    s2 = 8 * i3, s2 > 16 && (a2 = 1);
  }
  if (t22.muxer.isQuickTime && (a2 = 1), a2 === 0) r2 = [Array(6).fill(0), Tc(1), Tc(a2), Tc(0), Cc(0), Tc(t22.info.numberOfChannels), Tc(s2), Tc(0), Tc(0), Tc(t22.info.sampleRate < 65536 ? t22.info.sampleRate : 0), Tc(0)];
  else {
    let e3 = n2 ? 0 : -2;
    r2 = [Array(6).fill(0), Tc(1), Tc(a2), Tc(0), Cc(0), Tc(t22.info.numberOfChannels), Tc(Math.min(s2, 16)), Sc(e3), Tc(0), Tc(t22.info.sampleRate < 65536 ? t22.info.sampleRate : 0), Tc(0), n2 ? [Cc(1), Cc(s2 / 8), Cc(t22.info.numberOfChannels * s2 / 8)] : [Cc(0), Cc(0), Cc(0)], Cc(2)];
  }
  return Nc(e22, r2, [((i2 = ed(t22.track.source._codec, t22.muxer.isQuickTime)) == null ? void 0 : i2(t22)) ?? null]);
}, ul = (e22) => {
  let t22;
  switch (e22.track.source._codec) {
    case "aac":
      t22 = 64;
      break;
    case "mp3":
      t22 = 107;
      break;
    case "vorbis":
      t22 = 221;
      break;
    default:
      throw new Error(`Unhandled audio codec: ${e22.track.source._codec}`);
  }
  let i2 = [...vc(t22), ...vc(21), ...Pc(0), ...Cc(0), ...Cc(0)];
  if (e22.info.decoderConfig.description) {
    let t3 = m(e22.info.decoderConfig.description);
    i2 = [...i2, ...vc(5), ...Mc(t3.byteLength), ...t3];
  }
  return i2 = [...Tc(1), ...vc(0), ...vc(4), ...Mc(i2.length), ...i2, ...vc(6), ...vc(1), ...vc(2)], i2 = [...vc(3), ...Mc(i2.length), ...i2], zc("esds", 0, 0, i2);
}, hl = (e22) => Nc("wave", void 0, [ml(e22), fl(e22), Nc("\0\0\0\0")]), ml = (e22) => Nc("frma", [Fc(Zl(e22.track.source._codec, e22.info.decoderConfig.codec, e22.muxer.isQuickTime))]), fl = (e22) => {
  let { littleEndian: t22 } = at(e22.track.source._codec);
  return Nc("enda", [Tc(+t22)]);
}, pl = (e22) => {
  var t22;
  let i2 = e22.info.numberOfChannels, r2 = 3840, a2 = e22.info.sampleRate, s2 = 0, n2 = 0, c22 = new Uint8Array(0), l22 = (t22 = e22.info.decoderConfig) == null ? void 0 : t22.description;
  if (l22) {
    o2(l22.byteLength >= 18);
    let e3 = m(l22), t3 = ni(e3);
    i2 = t3.outputChannelCount, r2 = t3.preSkip, a2 = t3.inputSampleRate, s2 = t3.outputGain, n2 = t3.channelMappingFamily, t3.channelMappingTable && (c22 = t3.channelMappingTable);
  }
  return Nc("dOps", [vc(0), vc(i2), Tc(r2), Cc(a2), Sc(s2), vc(n2), ...c22]);
}, gl = (e22) => {
  var t22;
  let i2 = (t22 = e22.info.decoderConfig) == null ? void 0 : t22.description;
  o2(i2);
  let r2 = m(i2);
  return zc("dfLa", 0, 0, [...r2.subarray(4)]);
}, kl = (e22) => {
  let { littleEndian: t22, sampleSize: i2 } = at(e22.track.source._codec);
  return zc("pcmC", 0, 0, [vc(+t22), vc(8 * i2)]);
}, wl = (e22) => {
  o2(e22.info.primingPacket);
  let t22 = fi(e22.info.primingPacket.data);
  if (!t22) throw new Error("Couldn't extract AC-3 frame info from the audio packet. Ensure the packets contain valid AC-3 sync frames (as specified in ETSI TS 102 366).");
  let i2 = new Uint8Array(3), r2 = new Me(i2);
  return r2.writeBits(2, t22.fscod), r2.writeBits(5, t22.bsid), r2.writeBits(3, t22.bsmod), r2.writeBits(3, t22.acmod), r2.writeBits(1, t22.lfeon), r2.writeBits(5, t22.bitRateCode), r2.writeBits(5, 0), Nc("dac3", [...i2]);
}, bl = (e22) => {
  o2(e22.info.primingPacket);
  let t22 = ki(e22.info.primingPacket.data);
  if (!t22) throw new Error("Couldn't extract E-AC-3 frame info from the audio packet. Ensure the packets contain valid E-AC-3 sync frames (as specified in ETSI TS 102 366).");
  let i2 = 16;
  for (let n2 of t22.substreams) i2 += 23, n2.numDepSub > 0 ? i2 += 9 : i2 += 1;
  let r2 = Math.ceil(i2 / 8), a2 = new Uint8Array(r2), s2 = new Me(a2);
  s2.writeBits(13, t22.dataRate), s2.writeBits(3, t22.substreams.length - 1);
  for (let n2 of t22.substreams) s2.writeBits(2, n2.fscod), s2.writeBits(5, n2.bsid), s2.writeBits(1, 0), s2.writeBits(1, 0), s2.writeBits(3, n2.bsmod), s2.writeBits(3, n2.acmod), s2.writeBits(1, n2.lfeon), s2.writeBits(3, 0), s2.writeBits(4, n2.numDepSub), n2.numDepSub > 0 ? s2.writeBits(9, n2.chanLoc) : s2.writeBits(1, 0);
  return Nc("dec3", [...a2]);
}, yl = (e22) => {
  o2(e22.info.primingPacket);
  let t22 = Ii(e22.info.primingPacket.data);
  if (!t22) throw new Error("Couldn't extract DTS frame info from the audio packet. Ensure the packets contain valid DTS frames as specified in ETSI TS 102 114.");
  return Nc("ddts", [...Mi(t22)]);
}, vl = (e22, t22) => Nc(e22, [Array(6).fill(0), Tc(1)], [id[t22.track.source._codec](t22)]), Tl = (e22) => zc("stts", 0, 0, [Cc(e22.timeToSampleTable.length), e22.timeToSampleTable.map((e3) => [Cc(e3.sampleCount), Cc(e3.sampleDelta)])]), Sl = (e22) => {
  if (e22.samples.every((e3) => e3.type === "key")) return null;
  let t22 = [...e22.samples.entries()].filter(([, e3]) => e3.type === "key");
  return zc("stss", 0, 0, [Cc(t22.length), t22.map(([e3]) => Cc(e3 + 1))]);
}, Pl = (e22) => zc("stsc", 0, 0, [Cc(e22.compactlyCodedChunkTable.length), e22.compactlyCodedChunkTable.map((e3) => [Cc(e3.firstChunk), Cc(e3.samplesPerChunk), Cc(1)])]), Cl = (e22) => {
  if (e22.type === "audio" && e22.info.requiresPcmTransformation) {
    let { sampleSize: t22 } = at(e22.track.source._codec);
    return zc("stsz", 0, 0, [Cc(t22 * e22.info.numberOfChannels), Cc(e22.samples.reduce((t3, i2) => t3 + fd(i2.duration, e22.timescale), 0))]);
  }
  return zc("stsz", 0, 0, [Cc(0), Cc(e22.samples.length), e22.samples.map((e3) => Cc(e3.size))]);
}, xl = (e22) => e22.finalizedChunks.length > 0 && l2(e22.finalizedChunks).offset >= 2 ** 32 ? zc("co64", 0, 0, [Cc(e22.finalizedChunks.length), e22.finalizedChunks.map((e3) => Ec(e3.offset))]) : zc("stco", 0, 0, [Cc(e22.finalizedChunks.length), e22.finalizedChunks.map((e3) => Cc(e3.offset))]), El = (e22) => zc("ctts", 1, 0, [Cc(e22.compositionTimeOffsetTable.length), e22.compositionTimeOffsetTable.map((e3) => [Cc(e3.sampleCount), xc(e3.sampleCompositionTimeOffset)])]), Il = (e22) => {
  let t22 = 1 / 0, i2 = -1 / 0, r2 = 1 / 0, a2 = -1 / 0;
  o2(e22.compositionTimeOffsetTable.length > 0), o2(e22.samples.length > 0);
  for (let n2 = 0; n2 < e22.compositionTimeOffsetTable.length; n2++) {
    let r3 = e22.compositionTimeOffsetTable[n2];
    t22 = Math.min(t22, r3.sampleCompositionTimeOffset), i2 = Math.max(i2, r3.sampleCompositionTimeOffset);
  }
  for (let n2 = 0; n2 < e22.samples.length; n2++) {
    let t3 = e22.samples[n2];
    r2 = Math.min(r2, fd(t3.timestamp, e22.timescale)), a2 = Math.max(a2, fd(t3.timestamp + t3.duration, e22.timescale));
  }
  let s2 = Math.max(-t22, 0);
  return a2 >= 2 ** 31 ? null : zc("cslg", 0, 0, [xc(s2), xc(t22), xc(i2), xc(r2), xc(a2)]);
}, _l = (e22) => Nc("mvex", void 0, e22.map(Bl)), Bl = (e22) => zc("trex", 0, 0, [Cc(e22.track.id), Cc(1), Cc(0), Cc(0), Cc(0)]), Al = (e22, t22) => Nc("moof", void 0, [Ml(e22), ...t22.map(Rl)]), Ml = (e22) => zc("mfhd", 0, 0, [Cc(e22)]), Fl = (e22) => {
  let t22 = 0, i2 = 0, r2 = e22.type === "delta";
  return i2 |= +r2, t22 |= r2 ? 1 : 2, t22 << 24 | i2 << 16;
}, Rl = (e22) => Nc("traf", void 0, [Dl(e22), Ol(e22), Nl(e22)]), Dl = (e22) => {
  o2(e22.currentChunk);
  let t22 = 0;
  t22 |= 8, t22 |= 16, t22 |= 32, t22 |= 131072;
  let i2 = e22.currentChunk.samples[1] ?? e22.currentChunk.samples[0], r2 = { duration: i2.timescaleUnitsToNextSample, size: i2.size, flags: Fl(i2) };
  return zc("tfhd", 0, 131128, [Cc(e22.track.id), Cc(r2.duration), Cc(r2.size), Cc(r2.flags)]);
}, Ol = (e22) => (o2(e22.currentChunk), zc("tfdt", 1, 0, [Ec(fd(e22.currentChunk.startTimestamp, e22.timescale))])), Nl = (e22) => {
  o2(e22.currentChunk);
  let t22 = e22.currentChunk.samples.map((e3) => e3.timescaleUnitsToNextSample), i2 = e22.currentChunk.samples.map((e3) => e3.size), r2 = e22.currentChunk.samples.map(Fl), a2 = e22.currentChunk.samples.map((t3) => fd(t3.timestamp - t3.decodeTimestamp, e22.timescale)), s2 = new Set(t22), n2 = new Set(i2), c22 = new Set(r2), l22 = new Set(a2), d22 = c22.size === 2 && r2[0] !== r2[1], u2 = s2.size > 1, h22 = n2.size > 1, m2 = !d22 && c22.size > 1, f22 = l22.size > 1 || [...l22].some((e3) => e3 !== 0), p22 = 0;
  return p22 |= 1, p22 |= 4 * +d22, p22 |= 256 * +u2, p22 |= 512 * +h22, p22 |= 1024 * +m2, p22 |= 2048 * +f22, zc("trun", 1, p22, [Cc(e22.currentChunk.samples.length), Cc(e22.currentChunk.offset - e22.currentChunk.moofOffset || 0), d22 ? Cc(r2[0]) : [], e22.currentChunk.samples.map((e3, s3) => [u2 ? Cc(t22[s3]) : [], h22 ? Cc(i2[s3]) : [], m2 ? Cc(r2[s3]) : [], f22 ? xc(a2[s3]) : []])]);
}, zl = (e22) => zc("tfra", 1, 0, [Cc(e22.track.id), Cc(63), Cc(e22.finalizedChunks.length), e22.finalizedChunks.map((t22) => [Ec(fd(t22.samples[0].timestamp, e22.timescale)), Ec(t22.moofOffset), Cc(t22.trafIndex + 1), Cc(1), Cc(1)])]), Ll = () => zc("mfro", 0, 0, [Cc(0)]), Ul = () => Nc("vtte"), Wl = (e22, t22, i2, r2, a2) => Nc("vttc", void 0, [a2 !== null ? Nc("vsid", [xc(a2)]) : null, i2 !== null ? Nc("iden", [...g.encode(i2)]) : null, t22 !== null ? Nc("ctim", [...g.encode(kc(t22))]) : null, r2 !== null ? Nc("sttg", [...g.encode(r2)]) : null, Nc("payl", [...g.encode(e22)])]), ql = (e22) => Nc("vtta", [...g.encode(e22)]), Vl = (e22) => {
  let t22 = [], i2 = e22.format._options.metadataFormat ?? "auto", r2 = e22.output._metadataTags;
  if (i2 === "mdir" || i2 === "auto" && !e22.isQuickTime) {
    let e3 = Ql(r2);
    e3 && t22.push(e3);
  } else if (i2 === "mdta") {
    let e3 = Gl(r2);
    e3 && t22.push(e3);
  } else (i2 === "udta" || i2 === "auto" && e22.isQuickTime) && Hl(t22, e22.output._metadataTags);
  return t22.length === 0 ? null : Nc("udta", void 0, t22);
}, Hl = (e22, t22) => {
  for (let { key: i2, value: r2 } of le(t22)) switch (i2) {
    case "title":
      e22.push($l("©nam", r2));
      break;
    case "description":
      e22.push($l("©des", r2));
      break;
    case "artist":
      e22.push($l("©ART", r2));
      break;
    case "album":
      e22.push($l("©alb", r2));
      break;
    case "albumArtist":
      e22.push($l("albr", r2));
      break;
    case "genre":
      e22.push($l("©gen", r2));
      break;
    case "date":
      e22.push($l("©day", r2.toISOString().slice(0, 10)));
      break;
    case "comment":
      e22.push($l("©cmt", r2));
      break;
    case "lyrics":
      e22.push($l("©lyr", r2));
      break;
    case "raw":
    case "discNumber":
    case "discsTotal":
    case "trackNumber":
    case "tracksTotal":
    case "images":
      break;
    default:
      N(i2);
  }
  if (t22.raw) for (let i2 in t22.raw) {
    let r2 = t22.raw[i2];
    r2 == null || i2.length !== 4 || e22.some((e3) => e3.type === i2) || (typeof r2 == "string" ? e22.push($l(i2, r2)) : r2 instanceof Uint8Array && e22.push(Nc(i2, Array.from(r2))));
  }
}, $l = (e22, t22) => {
  let i2 = g.encode(t22);
  return Nc(e22, [Tc(i2.length), Tc(rd("und")), Array.from(i2)]);
}, jl = { "image/jpeg": 13, "image/png": 14, "image/bmp": 27 }, Kl = (e22, t22) => {
  let i2 = [];
  for (let { key: r2, value: a2 } of le(e22)) switch (r2) {
    case "title":
      i2.push({ key: t22 ? "title" : "©nam", value: Xl(a2) });
      break;
    case "description":
      i2.push({ key: t22 ? "description" : "©des", value: Xl(a2) });
      break;
    case "artist":
      i2.push({ key: t22 ? "artist" : "©ART", value: Xl(a2) });
      break;
    case "album":
      i2.push({ key: t22 ? "album" : "©alb", value: Xl(a2) });
      break;
    case "albumArtist":
      i2.push({ key: t22 ? "album_artist" : "aART", value: Xl(a2) });
      break;
    case "comment":
      i2.push({ key: t22 ? "comment" : "©cmt", value: Xl(a2) });
      break;
    case "genre":
      i2.push({ key: t22 ? "genre" : "©gen", value: Xl(a2) });
      break;
    case "lyrics":
      i2.push({ key: t22 ? "lyrics" : "©lyr", value: Xl(a2) });
      break;
    case "date":
      i2.push({ key: t22 ? "date" : "©day", value: Xl(a2.toISOString().slice(0, 10)) });
      break;
    case "images":
      for (let e3 of a2) e3.kind === "coverFront" && i2.push({ key: "covr", value: Nc("data", [Cc(jl[e3.mimeType] ?? 0), Cc(0), Array.from(e3.data)]) });
      break;
    case "trackNumber":
      if (t22) {
        let t3 = e22.tracksTotal !== void 0 ? `${a2}/${e22.tracksTotal}` : a2.toString();
        i2.push({ key: "track", value: Xl(t3) });
      } else i2.push({ key: "trkn", value: Nc("data", [Cc(0), Cc(0), Tc(0), Tc(a2), Tc(e22.tracksTotal ?? 0), Tc(0)]) });
      break;
    case "discNumber":
      t22 || i2.push({ key: "disc", value: Nc("data", [Cc(0), Cc(0), Tc(0), Tc(a2), Tc(e22.discsTotal ?? 0), Tc(0)]) });
      break;
    case "tracksTotal":
    case "discsTotal":
    case "raw":
      break;
    default:
      N(r2);
  }
  if (e22.raw) for (let r2 in e22.raw) {
    let a2 = e22.raw[r2];
    a2 == null || !t22 && r2.length !== 4 || i2.some((e3) => e3.key === r2) || (typeof a2 == "string" ? i2.push({ key: r2, value: Xl(a2) }) : a2 instanceof Uint8Array ? i2.push({ key: r2, value: Nc("data", [Cc(0), Cc(0), Array.from(a2)]) }) : a2 instanceof Ie && i2.push({ key: r2, value: Nc("data", [Cc(jl[a2.mimeType] ?? 0), Cc(0), Array.from(a2.data)]) }));
  }
  return i2;
}, Ql = (e22) => {
  let t22 = Kl(e22, !1);
  return t22.length === 0 ? null : zc("meta", 0, 0, void 0, [Jc(!1, "mdir", "", "appl"), Nc("ilst", void 0, t22.map((e3) => Nc(e3.key, void 0, [e3.value])))]);
}, Gl = (e22) => {
  let t22 = Kl(e22, !0);
  return t22.length === 0 ? null : Nc("meta", void 0, [Jc(!1, "mdta", ""), zc("keys", 0, 0, [Cc(t22.length)], t22.map((e3) => Nc("mdta", [...g.encode(e3.key)]))), Nc("ilst", void 0, t22.map((e3, t3) => {
    let i2 = String.fromCharCode(...Cc(t3 + 1));
    return Nc(i2, void 0, [e3.value]);
  }))]);
}, Xl = (e22) => Nc("data", [Cc(1), Cc(0), ...g.encode(e22)]), Yl = (e22, t22) => {
  switch (e22) {
    case "avc":
      return t22.startsWith("avc3") ? "avc3" : "avc1";
    case "hevc":
      return "hvc1";
    case "vp8":
      return "vp08";
    case "vp9":
      return "vp09";
    case "av1":
      return "av01";
    case "prores":
      return t22;
  }
}, Jl = { avc: (e22) => e22.info.decoderConfig && Nc("avcC", [...m(e22.info.decoderConfig.description)]), hevc: (e22) => e22.info.decoderConfig && Nc("hvcC", [...m(e22.info.decoderConfig.description)]), vp8: ll, vp9: ll, av1: (e22) => Nc("av1C", Je(e22.info.decoderConfig.codec)), prores: null }, Zl = (e22, t22, i2) => {
  switch (e22) {
    case "aac":
    case "mp3":
    case "vorbis":
      return "mp4a";
    case "opus":
      return "Opus";
    case "flac":
      return "fLaC";
    case "ulaw":
      return "ulaw";
    case "alaw":
      return "alaw";
    case "pcm-u8":
      return "raw ";
    case "pcm-s8":
      return "sowt";
    case "ac3":
      return "ac-3";
    case "eac3":
      return "ec-3";
    case "dts":
      return t22;
  }
  if (i2) switch (e22) {
    case "pcm-s16":
      return "sowt";
    case "pcm-s16be":
      return "twos";
    case "pcm-s24":
    case "pcm-s24be":
      return "in24";
    case "pcm-s32":
    case "pcm-s32be":
      return "in32";
    case "pcm-f32":
    case "pcm-f32be":
      return "fl32";
    case "pcm-f64":
    case "pcm-f64be":
      return "fl64";
  }
  else switch (e22) {
    case "pcm-s16":
    case "pcm-s16be":
    case "pcm-s24":
    case "pcm-s24be":
    case "pcm-s32":
    case "pcm-s32be":
      return "ipcm";
    case "pcm-f32":
    case "pcm-f32be":
    case "pcm-f64":
    case "pcm-f64be":
      return "fpcm";
  }
}, ed = (e22, t22) => {
  switch (e22) {
    case "aac":
    case "mp3":
    case "vorbis":
      return ul;
    case "opus":
      return pl;
    case "flac":
      return gl;
    case "ac3":
      return wl;
    case "eac3":
      return bl;
    case "dts":
      return yl;
  }
  if (t22) switch (e22) {
    case "pcm-s24":
    case "pcm-s24be":
    case "pcm-s32":
    case "pcm-s32be":
    case "pcm-f32":
    case "pcm-f32be":
    case "pcm-f64":
    case "pcm-f64be":
      return hl;
  }
  else switch (e22) {
    case "pcm-s16":
    case "pcm-s16be":
    case "pcm-s24":
    case "pcm-s24be":
    case "pcm-s32":
    case "pcm-s32be":
    case "pcm-f32":
    case "pcm-f32be":
    case "pcm-f64":
    case "pcm-f64be":
      return kl;
  }
  return null;
}, td = { webvtt: "wvtt" }, id = { webvtt: (e22) => Nc("vttC", [...g.encode(e22.info.config.description)]) }, rd = (e22) => {
  o2(e22.length === 3);
  let t22 = 0;
  for (let i2 = 0; i2 < 3; i2++) t22 <<= 5, t22 += e22.charCodeAt(i2) - 96;
  return t22;
};
var ad = class {
  constructor(e22, t22) {
    if (this.finalized = !1, this.started = !1, this.pos = 0, this.trackedWrites = null, this.trackedStart = -1, this.trackedEnd = -1, e22._writerAcquired) throw new Error("Can't have multiple Writers for the same Target.");
    this.target = e22, e22._setMonotonicity(t22), e22._writerAcquired = !0;
  }
  start() {
    o2(!this.started), this.target._start(), this.started = !0;
  }
  write(e22) {
    o2(this.started && !this.finalized), this.maybeTrackWrites(e22), this.target._write(e22, this.pos), this.pos += e22.byteLength;
  }
  seek(e22) {
    this.pos = e22;
  }
  getPos() {
    return this.pos;
  }
  async flush() {
    return o2(this.started && !this.finalized), this.target._flush();
  }
  async finalize() {
    o2(this.started && !this.finalized), await this.target._finalize(), this.finalized = !0;
  }
  maybeTrackWrites(e22) {
    if (!this.trackedWrites) return;
    let t22 = this.getPos();
    if (t22 < this.trackedStart) {
      if (t22 + e22.byteLength <= this.trackedStart) return;
      e22 = e22.subarray(this.trackedStart - t22), t22 = 0;
    }
    let i2 = t22 + e22.byteLength - this.trackedStart, r2 = this.trackedWrites.byteLength;
    for (; r2 < i2; ) r2 *= 2;
    if (r2 !== this.trackedWrites.byteLength) {
      let e3 = new Uint8Array(r2);
      e3.set(this.trackedWrites, 0), this.trackedWrites = e3;
    }
    this.trackedWrites.set(e22, t22 - this.trackedStart), this.trackedEnd = Math.max(this.trackedEnd, t22 + e22.byteLength);
  }
  startTrackingWrites() {
    this.trackedWrites = new Uint8Array(1024), this.trackedStart = this.getPos(), this.trackedEnd = this.trackedStart;
  }
  stopTrackingWrites() {
    if (!this.trackedWrites) throw new Error("Internal error: Can't get tracked writes since nothing was tracked.");
    let e22 = { data: this.trackedWrites.subarray(0, this.trackedEnd - this.trackedStart), start: this.trackedStart, end: this.trackedEnd };
    return this.trackedWrites = null, e22;
  }
};
var sd = class extends Te {
  constructor() {
    super(...arguments), this._writerAcquired = !1, this._monotonicity = null, this.onwrite = null;
  }
  _setMonotonicity(e22) {
    this._monotonicity !== !1 && (this._monotonicity = e22);
  }
  _dispatchWrite(e22, t22) {
    var i2;
    (i2 = this.onwrite) == null || i2.call(this, e22, t22), this._emit("write", { start: e22, end: t22 });
  }
  slice(e22) {
    if (!Number.isInteger(e22) || e22 < 0) throw new TypeError("offset must be a non-negative integer.");
    return new dd(this, e22);
  }
}, nd = 65536, od = 2 ** 32, cd = class extends sd {
  constructor(e22 = {}) {
    if (super(), this.buffer = null, this._maxPos = 0, !e22 || typeof e22 != "object") throw new TypeError("BufferTarget options, when provided, must be an object.");
    if (e22.onFinalize !== void 0 && typeof e22.onFinalize != "function") throw new TypeError("options.onFinalize, when provided, must be a function.");
    if (this._options = e22, this._supportsResize = "resize" in new ArrayBuffer(0), this._supportsResize) try {
      this._buffer = new ArrayBuffer(nd, { maxByteLength: od });
    } catch {
      this._buffer = new ArrayBuffer(nd), this._supportsResize = !1;
    }
    else this._buffer = new ArrayBuffer(nd);
    this._bytes = new Uint8Array(this._buffer);
  }
  _ensureSize(e22) {
    let t22 = this._buffer.byteLength;
    for (; t22 < e22; ) t22 *= 2;
    if (t22 !== this._buffer.byteLength) {
      if (t22 > od) throw new Error("ArrayBuffer exceeded maximum size of 4294967296 bytes. Please consider using another target.");
      if (this._supportsResize) this._buffer.resize(t22);
      else {
        let e3 = new ArrayBuffer(t22), i2 = new Uint8Array(e3);
        i2.set(this._bytes, 0), this._buffer = e3, this._bytes = i2;
      }
    }
  }
  _start() {
  }
  _write(e22, t22) {
    this._ensureSize(t22 + e22.byteLength), this._bytes.set(e22, t22), this._maxPos = Math.max(this._maxPos, t22 + e22.byteLength), this._dispatchWrite(t22, t22 + e22.byteLength);
  }
  async _flush() {
  }
  async _finalize() {
    this.buffer = this._buffer.slice(0, this._maxPos), this._options.onFinalize && await this._options.onFinalize(this.buffer), this._emit("finalized");
  }
  async _close() {
  }
  _getSlice(e22, t22) {
    return this._bytes.slice(e22, t22);
  }
}, ld = class extends sd {
  _start() {
  }
  _write(e22, t22) {
    this._dispatchWrite(t22, t22 + e22.byteLength);
  }
  async _flush() {
  }
  async _finalize() {
    this._emit("finalized");
  }
  async _close() {
  }
}, dd = class extends sd {
  constructor(e22, t22) {
    super(), this._baseTarget = e22, this._offset = t22;
  }
  _start() {
  }
  _write(e22, t22) {
    this._baseTarget._write(e22, this._offset + t22), this._dispatchWrite(t22, t22 + e22.byteLength);
  }
  _flush() {
    return this._baseTarget._flush();
  }
  async _finalize() {
    this._emit("finalized");
  }
  async _close() {
  }
  _setMonotonicity(e22) {
    super._setMonotonicity(e22), this._baseTarget._setMonotonicity(e22);
  }
}, ud = class {
  constructor(e22, t22) {
    if (this.rootPath = e22, this.getTarget = t22, typeof e22 != "string") throw new TypeError("rootPath must be a string.");
    if (typeof t22 != "function") throw new TypeError("getTarget must be a function.");
  }
};
var hd = 57600, md = (e22) => {
  let t22 = {}, i2 = e22.track;
  return i2.metadata.name !== void 0 && (t22.name = i2.metadata.name), t22;
}, fd = (e22, t22, i2 = !0) => {
  let r2 = e22 * t22;
  return i2 ? Math.round(r2) : r2;
}, pd = class extends fc {
  constructor(e22, t22) {
    super(e22), this.writer = null, this.boxWriter = null, this.initWriter = null, this.initBoxWriter = null, this.auxTarget = new cd(), this.auxWriter = new ad(this.auxTarget, !1), this.auxBoxWriter = new wc(this.auxWriter), this.mdat = null, this.ftypSize = null, this.trackDatas = [], this.allTracksKnown = F2(), this.creationTime = Math.floor(Date.now() / 1e3) + 2082844800, this.finalizedChunks = [], this.wroteFragmentedHeader = !1, this.nextFragmentNumber = 1, this.maxWrittenTimestamp = -1 / 0, this.minWrittenTimestamp = 1 / 0, this.maxWrittenEndTimestamp = -1 / 0, this.segmentHeaderSize = null, this.format = t22, this.formatOptions = { ...t22._options }, this.isQuickTime = t22 instanceof Ud, this.isCmaf = t22 instanceof Ld, this.minimumFragmentDuration = this.formatOptions.minimumFragmentDuration ?? (t22 instanceof Ld ? 1 / 0 : 1), this.auxWriter.start();
  }
  async start() {
    var e22;
    let t22 = await this.mutex.acquire();
    if (this.isCmaf ? (this.fastStart = "fragmented", this.isFragmented = !0) : (this.writer = await this.output._getRootWriter((e3) => this.formatOptions.fastStart !== void 0 ? this.formatOptions.fastStart === "fragmented" : e3 instanceof cd), this.boxWriter = new wc(this.writer), this.fastStart = this.formatOptions.fastStart ?? (this.writer.target instanceof cd && "in-memory"), this.isFragmented = this.fastStart === "fragmented"), this.isCmaf) {
      if (!this.output._hasInitTarget()) throw new Error("CMAF outputs require the initTarget field in OutputOptions to be set; the init segment will be written to it.");
      let e3 = await this.output._getInitTarget(), t3 = new ad(e3, !0);
      t3.start(), this.initWriter = t3, this.initBoxWriter = new wc(t3);
    }
    let i2 = this.output.tracks.some((e3) => e3.isVideoTrack() && e3.source._codec === "avc");
    {
      let e3 = this.initBoxWriter ?? this.boxWriter;
      if (o2(e3), this.formatOptions.onFtyp && e3.writer.startTrackingWrites(), e3.writeBox(((e4) => e4.isQuickTime ? Nc("ftyp", [Fc("qt  "), Cc(512), Fc("qt  ")]) : e4.fragmented ? e4.cmaf ? Nc("ftyp", [Fc("iso5"), Cc(512), Fc("iso5"), Fc("iso6"), Fc("mp41"), Fc("cmfc"), Fc("dash")]) : Nc("ftyp", [Fc("iso5"), Cc(512), Fc("iso5"), Fc("iso6"), Fc("mp41")]) : Nc("ftyp", [Fc("isom"), Cc(512), Fc("isom"), e4.holdsAvc ? Fc("avc1") : [], Fc("mp41")]))({ isQuickTime: this.isQuickTime, holdsAvc: i2, fragmented: this.isFragmented, cmaf: this.isCmaf })), this.formatOptions.onFtyp) {
        let { data: t3, start: i3 } = e3.writer.stopTrackingWrites();
        this.formatOptions.onFtyp(t3, i3);
      }
      this.ftypSize = e3.writer.getPos(), this.isCmaf && await this.initWriter.flush();
    }
    if (this.fastStart !== "in-memory") if (this.fastStart === "reserve") {
      for (let r2 of this.output.tracks) if (r2.metadata.maximumPacketCount === void 0) throw new Error("All tracks must specify maximumPacketCount in their metadata when using fastStart: 'reserve'.");
    } else this.isFragmented || (o2(this.writer), o2(this.boxWriter), this.formatOptions.onMdat && this.writer.startTrackingWrites(), this.mdat = Wc(!0), this.boxWriter.writeBox(this.mdat));
    await ((e22 = this.writer) == null ? void 0 : e22.flush());
    for (let r2 of this.output.tracks) r2.isVideoTrack() && r2.metadata.decoderConfig ? this.getVideoTrackData(r2, r2.metadata.primingPacket ?? null, { decoderConfig: r2.metadata.decoderConfig }) : r2.isAudioTrack() && r2.metadata.decoderConfig && this.getAudioTrackData(r2, r2.metadata.primingPacket ?? null, { decoderConfig: r2.metadata.decoderConfig });
    t22();
  }
  allTracksAreKnown() {
    for (let e22 of this.output.tracks) if (!e22.source._closed && !this.trackDatas.some((t22) => t22.track === e22)) return !1;
    return !0;
  }
  async getMimeType() {
    await this.allTracksKnown.promise;
    let e22 = this.trackDatas.map((e3) => e3.type === "video" || e3.type === "audio" ? e3.info.decoderConfig.codec : { webvtt: "wvtt" }[e3.track.source._codec]);
    return Ni({ isQuickTime: this.isQuickTime, hasVideo: this.trackDatas.some((e3) => e3.type === "video"), hasAudio: this.trackDatas.some((e3) => e3.type === "audio"), codecStrings: e22 });
  }
  getVideoTrackData(e22, t22, i2) {
    let r2 = this.trackDatas.find((t3) => t3.track === e22);
    if (r2) return r2;
    ut(i2, e22.source._codec), o2(i2), o2(i2.decoderConfig);
    let a2 = { ...i2.decoderConfig };
    o2(a2.codedWidth !== void 0), o2(a2.codedHeight !== void 0);
    let s2 = !1;
    if (e22.source._codec !== "avc" || a2.description) {
      if (e22.source._codec === "hevc" && !a2.description) {
        if (!t22) throw new Error("No HEVC description provided; you must therefore provide a priming packet.");
        let e3 = jt(t22.data);
        if (!e3) throw new Error("Couldn't extract an HEVCDecoderConfigurationRecord from the HEVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.265) when not providing a description, or provide a description (must be an HEVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in HEVC format.");
        a2.description = ((e4) => {
          let t3 = [];
          t3.push(e4.configurationVersion), t3.push((3 & e4.generalProfileSpace) << 6 | (1 & e4.generalTierFlag) << 5 | 31 & e4.generalProfileIdc), t3.push(e4.generalProfileCompatibilityFlags >>> 24 & 255), t3.push(e4.generalProfileCompatibilityFlags >>> 16 & 255), t3.push(e4.generalProfileCompatibilityFlags >>> 8 & 255), t3.push(255 & e4.generalProfileCompatibilityFlags), t3.push(...e4.generalConstraintIndicatorFlags), t3.push(255 & e4.generalLevelIdc), t3.push(240 | e4.minSpatialSegmentationIdc >> 8 & 15), t3.push(255 & e4.minSpatialSegmentationIdc), t3.push(252 | 3 & e4.parallelismType), t3.push(252 | 3 & e4.chromaFormatIdc), t3.push(248 | 7 & e4.bitDepthLumaMinus8), t3.push(248 | 7 & e4.bitDepthChromaMinus8), t3.push(e4.avgFrameRate >> 8 & 255), t3.push(255 & e4.avgFrameRate), t3.push((3 & e4.constantFrameRate) << 6 | (7 & e4.numTemporalLayers) << 3 | (1 & e4.temporalIdNested) << 2 | 3 & e4.lengthSizeMinusOne), t3.push(255 & e4.arrays.length);
          for (let i3 of e4.arrays) {
            t3.push((1 & i3.arrayCompleteness) << 7 | 63 & i3.nalUnitType), t3.push(i3.nalUnits.length >> 8 & 255), t3.push(255 & i3.nalUnits.length);
            for (let e5 of i3.nalUnits) {
              t3.push(e5.length >> 8 & 255), t3.push(255 & e5.length);
              for (let i4 = 0; i4 < e5.length; i4++) t3.push(e5[i4]);
            }
          }
          return new Uint8Array(t3);
        })(e3), s2 = !0;
      }
    } else {
      if (!t22) throw new Error("No AVC description provided; you must therefore provide a priming packet.");
      let e3 = Lt(t22.data);
      if (!e3) throw new Error("Couldn't extract an AVCDecoderConfigurationRecord from the AVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.264) when not providing a description, or provide a description (must be an AVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in AVCC format.");
      a2.description = ((e4) => {
        let t3 = [];
        t3.push(e4.configurationVersion), t3.push(e4.avcProfileIndication), t3.push(e4.profileCompatibility), t3.push(e4.avcLevelIndication), t3.push(252 | 3 & e4.lengthSizeMinusOne), t3.push(224 | 31 & e4.sequenceParameterSets.length);
        for (let i3 of e4.sequenceParameterSets) {
          let e5 = i3.byteLength;
          t3.push(e5 >> 8), t3.push(255 & e5);
          for (let r3 = 0; r3 < e5; r3++) t3.push(i3[r3]);
        }
        t3.push(e4.pictureParameterSets.length);
        for (let i3 of e4.pictureParameterSets) {
          let e5 = i3.byteLength;
          t3.push(e5 >> 8), t3.push(255 & e5);
          for (let r3 = 0; r3 < e5; r3++) t3.push(i3[r3]);
        }
        if (e4.avcProfileIndication === 100 || e4.avcProfileIndication === 110 || e4.avcProfileIndication === 122 || e4.avcProfileIndication === 144) {
          o2(e4.chromaFormat !== null), o2(e4.bitDepthLumaMinus8 !== null), o2(e4.bitDepthChromaMinus8 !== null), o2(e4.sequenceParameterSetExt !== null), t3.push(252 | 3 & e4.chromaFormat), t3.push(248 | 7 & e4.bitDepthLumaMinus8), t3.push(248 | 7 & e4.bitDepthChromaMinus8), t3.push(e4.sequenceParameterSetExt.length);
          for (let i3 of e4.sequenceParameterSetExt) {
            let e5 = i3.byteLength;
            t3.push(e5 >> 8), t3.push(255 & e5);
            for (let r3 = 0; r3 < e5; r3++) t3.push(i3[r3]);
          }
        }
        return new Uint8Array(t3);
      })(e3), s2 = !0;
    }
    let n2 = ((e3, t3) => {
      let i3 = e3 < 0 ? -1 : 1, r3 = 0, a3 = 1, s3 = 1, n3 = 0, o22 = e3 = Math.abs(e3);
      for (; ; ) {
        let e4 = Math.floor(o22), c3 = e4 * s3 + r3, l3 = e4 * n3 + a3;
        if (l3 > t3) return { num: i3 * s3, den: n3 };
        if (r3 = s3, a3 = n3, s3 = c3, n3 = l3, o22 = 1 / (o22 - e4), !isFinite(o22)) break;
      }
      return { num: i3 * s3, den: n3 };
    })(1 / (e22.metadata.frameRate ?? hd), 1e6).den, c22 = a2.displayAspectWidth, l22 = a2.displayAspectHeight, d22 = c22 === void 0 || l22 === void 0 ? { num: 1, den: 1 } : we({ num: c22 * a2.codedHeight, den: l22 * a2.codedWidth }), u2 = a2.codec === "ap4h" || a2.codec === "ap4x", h22 = { muxer: this, track: e22, type: "video", info: { width: a2.codedWidth, height: a2.codedHeight, pixelAspectRatio: d22, decoderConfig: a2, requiresAnnexBTransformation: s2, hasAlphaChannel: u2 }, timescale: n2, samples: [], sampleQueue: [], timestampProcessingQueue: [], timeToSampleTable: [], compositionTimeOffsetTable: [], lastTimescaleUnits: null, lastSample: null, startTimestampOffset: null, finalizedChunks: [], currentChunk: null, compactlyCodedChunkTable: [], closed: !1 };
    return this.trackDatas.push(h22), this.trackDatas.sort((e3, t3) => e3.track.id - t3.track.id), this.allTracksAreKnown() && this.allTracksKnown.resolve(), h22;
  }
  getAudioTrackData(e22, t22, i2) {
    let r2 = this.trackDatas.find((t3) => t3.track === e22);
    if (r2) return r2;
    mt(i2, e22.source._codec), o2(i2), o2(i2.decoderConfig);
    let a2 = { ...i2.decoderConfig }, s2 = !1;
    if (e22.source._codec === "aac" && !a2.description) {
      if (!t22) throw new Error("No AAC description provided; you must therefore provide a priming packet.");
      let e3 = xa(Oo.tempFromBytes(t22.data));
      if (!e3) throw new Error("Couldn't parse ADTS header from the AAC packet. Make sure the packets are in ADTS format (as specified in ISO 13818-7) when not providing a description, or provide a description (must be an AudioSpecificConfig as specified in ISO 14496-3) and ensure the packets are raw AAC data.");
      let i3 = Fe[e3.samplingFrequencyIndex], r3 = Re[e3.channelConfiguration];
      if (i3 === void 0 || r3 === void 0) throw new Error("Invalid ADTS frame header.");
      a2.description = Oe2({ objectType: e3.objectType, sampleRate: i3, numberOfChannels: r3 }), s2 = !0;
    }
    if (!t22) {
      if (e22.source._codec === "ac3" || e22.source._codec === "eac3") throw new Error("AC-3/E-AC-3 require a priming packet.");
      if (e22.source._codec === "dts") throw new Error("DTS requires a priming packet.");
    }
    let n2 = { muxer: this, track: e22, type: "audio", info: { numberOfChannels: i2.decoderConfig.numberOfChannels, sampleRate: i2.decoderConfig.sampleRate, decoderConfig: a2, requiresPcmTransformation: !this.isFragmented && ze.includes(e22.source._codec), expectedNextPcmPacketTimestamp: null, requiresAdtsStripping: s2, primingPacket: t22 }, timescale: a2.sampleRate, samples: [], sampleQueue: [], timestampProcessingQueue: [], timeToSampleTable: [], compositionTimeOffsetTable: [], lastTimescaleUnits: null, lastSample: null, startTimestampOffset: null, finalizedChunks: [], currentChunk: null, compactlyCodedChunkTable: [], closed: !1 };
    return this.trackDatas.push(n2), this.trackDatas.sort((e3, t3) => e3.track.id - t3.track.id), this.allTracksAreKnown() && this.allTracksKnown.resolve(), n2;
  }
  getSubtitleTrackData(e22, t22) {
    let i2 = this.trackDatas.find((t3) => t3.track === e22);
    if (i2) return i2;
    ft(t22), o2(t22), o2(t22.config);
    let r2 = { muxer: this, track: e22, type: "subtitle", info: { config: t22.config }, timescale: 1e3, samples: [], sampleQueue: [], timestampProcessingQueue: [], timeToSampleTable: [], compositionTimeOffsetTable: [], lastTimescaleUnits: null, lastSample: null, startTimestampOffset: null, finalizedChunks: [], currentChunk: null, compactlyCodedChunkTable: [], closed: !1, lastCueEndTimestamp: 0, cueQueue: [], nextSourceId: 0, cueToSourceId: /* @__PURE__ */ new WeakMap() };
    return this.trackDatas.push(r2), this.trackDatas.sort((e3, t3) => e3.track.id - t3.track.id), this.allTracksAreKnown() && this.allTracksKnown.resolve(), r2;
  }
  async addEncodedVideoPacket(e22, t22, i2) {
    let r2 = await this.mutex.acquire();
    try {
      let r3 = this.getVideoTrackData(e22, t22, i2), a2 = t22.data;
      if (r3.info.requiresAnnexBTransformation) {
        let e3 = [...At(a2)].map((e4) => a2.subarray(e4.offset, e4.offset + e4.length));
        if (e3.length === 0) throw new Error("Failed to transform packet data. Make sure all packets are provided in Annex B format, as specified in ITU-T-REC-H.264 and ITU-T-REC-H.265.");
        a2 = zt(e3, 4);
      }
      this.validateTimestamp(r3.track, t22.timestamp, t22.type === "key");
      let s2 = this.createSampleForTrack(r3, a2, t22.timestamp, t22.duration, t22.type);
      await this.registerSample(r3, s2);
    } finally {
      r2();
    }
  }
  async addEncodedAudioPacket(e22, t22, i2) {
    let r2 = await this.mutex.acquire();
    try {
      let r3 = this.getAudioTrackData(e22, t22, i2), a2 = t22.data;
      if (r3.info.requiresAdtsStripping) {
        let e3 = xa(Oo.tempFromBytes(a2));
        if (!e3) throw new Error("Expected ADTS frame, didn't get one.");
        let t3 = e3.crcCheck === null ? 7 : 9;
        a2 = a2.subarray(t3);
      }
      this.validateTimestamp(r3.track, t22.timestamp, t22.type === "key");
      let s2 = t22.timestamp, n2 = t22.duration;
      if (r3.info.requiresPcmTransformation) {
        let e3 = at(r3.info.decoderConfig.codec).sampleSize * r3.info.numberOfChannels;
        if (n2 = a2.byteLength / e3 / r3.info.sampleRate, r3.info.expectedNextPcmPacketTimestamp !== null) {
          let e4 = s2 - r3.info.expectedNextPcmPacketTimestamp;
          if (e4 < 0.01) s2 = r3.info.expectedNextPcmPacketTimestamp;
          else {
            let t3 = await this.padWithSilence(r3, r3.info.expectedNextPcmPacketTimestamp, e4);
            s2 = r3.info.expectedNextPcmPacketTimestamp + t3;
          }
        }
        r3.info.expectedNextPcmPacketTimestamp = s2 + n2;
      }
      let o22 = this.createSampleForTrack(r3, a2, s2, n2, t22.type);
      await this.registerSample(r3, o22);
    } finally {
      r2();
    }
  }
  async padWithSilence(e22, t22, i2) {
    let r2 = fd(i2, e22.timescale);
    if (i2 = r2 / e22.timescale, r2 > 0) {
      let { sampleSize: a2, silentValue: s2 } = at(e22.info.decoderConfig.codec), n2 = r2 * e22.info.numberOfChannels, o22 = new Uint8Array(a2 * n2).fill(s2), c22 = this.createSampleForTrack(e22, new Uint8Array(o22.buffer), t22, i2, "key");
      await this.registerSample(e22, c22);
    }
    return i2;
  }
  async addSubtitleCue(e22, t22, i2) {
    let r2 = await this.mutex.acquire();
    try {
      let r3 = this.getSubtitleTrackData(e22, i2);
      this.validateTimestamp(r3.track, t22.timestamp, !0), e22.source._codec === "webvtt" && (r3.cueQueue.push(t22), await this.processWebVTTCues(r3, t22.timestamp));
    } finally {
      r2();
    }
  }
  async processWebVTTCues(e22, t22) {
    for (; e22.cueQueue.length > 0; ) {
      let i2 = /* @__PURE__ */ new Set([]);
      for (let l22 of e22.cueQueue) o2(l22.timestamp <= t22), o2(e22.lastCueEndTimestamp <= l22.timestamp + l22.duration), i2.add(Math.max(l22.timestamp, e22.lastCueEndTimestamp)), i2.add(l22.timestamp + l22.duration);
      let r2 = [...i2].sort((e3, t3) => e3 - t3), a2 = r2[0], s2 = r2[1] ?? a2;
      if (t22 < s2) break;
      if (e22.lastCueEndTimestamp < a2) {
        this.auxWriter.seek(0);
        let t3 = Ul();
        this.auxBoxWriter.writeBox(t3);
        let i3 = this.auxTarget._getSlice(0, this.auxWriter.getPos()), r3 = this.createSampleForTrack(e22, i3, e22.lastCueEndTimestamp, a2 - e22.lastCueEndTimestamp, "key");
        await this.registerSample(e22, r3), e22.lastCueEndTimestamp = a2;
      }
      this.auxWriter.seek(0);
      for (let t3 = 0; t3 < e22.cueQueue.length; t3++) {
        let i3 = e22.cueQueue[t3];
        if (i3.timestamp >= s2) break;
        pc.lastIndex = 0;
        let r3 = pc.test(i3.text), n3 = i3.timestamp + i3.duration, o22 = e22.cueToSourceId.get(i3);
        if (o22 === void 0 && s2 < n3 && (o22 = e22.nextSourceId++, e22.cueToSourceId.set(i3, o22)), i3.notes) {
          let e3 = ql(i3.notes);
          this.auxBoxWriter.writeBox(e3);
        }
        let c3 = Wl(i3.text, r3 ? a2 : null, i3.identifier ?? null, i3.settings ?? null, o22 ?? null);
        this.auxBoxWriter.writeBox(c3), n3 === s2 && e22.cueQueue.splice(t3--, 1);
      }
      let n2 = this.auxTarget._getSlice(0, this.auxWriter.getPos()), c22 = this.createSampleForTrack(e22, n2, a2, s2 - a2, "key");
      await this.registerSample(e22, c22), e22.lastCueEndTimestamp = s2;
    }
  }
  createSampleForTrack(e22, t22, i2, r2, a2) {
    return { timestamp: i2, decodeTimestamp: i2, duration: r2, data: t22, size: t22.byteLength, type: a2, timescaleUnitsToNextSample: fd(r2, e22.timescale) };
  }
  processTimestamps(e22, t22) {
    if (e22.timestampProcessingQueue.length === 0) return;
    if (e22.type === "audio" && e22.info.requiresPcmTransformation) {
      this.isFragmented || (e22.startTimestampOffset ?? (e22.startTimestampOffset = e22.timestampProcessingQueue[0].timestamp));
      let t3 = 0;
      for (let i3 = 0; i3 < e22.timestampProcessingQueue.length; i3++) {
        let r2 = e22.timestampProcessingQueue[i3];
        t3 += fd(r2.duration, e22.timescale);
      }
      return e22.timeToSampleTable.length === 0 ? e22.timeToSampleTable.push({ sampleCount: t3, sampleDelta: 1 }) : l2(e22.timeToSampleTable).sampleCount += t3, void (e22.timestampProcessingQueue.length = 0);
    }
    let i2 = e22.timestampProcessingQueue.map((e3) => e3.timestamp).sort((e3, t3) => e3 - t3);
    this.isFragmented || (e22.startTimestampOffset ?? (e22.startTimestampOffset = i2[0]));
    for (let r2 = 0; r2 < e22.timestampProcessingQueue.length; r2++) {
      let t3 = e22.timestampProcessingQueue[r2];
      t3.decodeTimestamp = i2[r2];
      let a2 = fd(t3.timestamp - t3.decodeTimestamp, e22.timescale), s2 = fd(t3.duration, e22.timescale);
      if (e22.lastTimescaleUnits !== null) {
        o2(e22.lastSample);
        let i3 = fd(t3.decodeTimestamp, e22.timescale, !1), r3 = Math.round(i3 - e22.lastTimescaleUnits);
        if (o2(r3 >= 0), e22.lastTimescaleUnits += r3, e22.lastSample.timescaleUnitsToNextSample = r3, !this.isFragmented) {
          let t4 = l2(e22.timeToSampleTable);
          if (o2(t4), t4.sampleCount === 1) {
            t4.sampleDelta = r3;
            let i5 = e22.timeToSampleTable[e22.timeToSampleTable.length - 2];
            i5 && i5.sampleDelta === r3 && (i5.sampleCount++, e22.timeToSampleTable.pop(), t4 = i5);
          } else t4.sampleDelta !== r3 && (t4.sampleCount--, e22.timeToSampleTable.push(t4 = { sampleCount: 1, sampleDelta: r3 }));
          t4.sampleDelta === s2 ? t4.sampleCount++ : e22.timeToSampleTable.push({ sampleCount: 1, sampleDelta: s2 });
          let i4 = l2(e22.compositionTimeOffsetTable);
          o2(i4), i4.sampleCompositionTimeOffset === a2 ? i4.sampleCount++ : e22.compositionTimeOffsetTable.push({ sampleCount: 1, sampleCompositionTimeOffset: a2 });
        }
      } else e22.lastTimescaleUnits = fd(t3.decodeTimestamp, e22.timescale, !1), this.isFragmented || (e22.timeToSampleTable.push({ sampleCount: 1, sampleDelta: s2 }), e22.compositionTimeOffsetTable.push({ sampleCount: 1, sampleCompositionTimeOffset: a2 }));
      e22.lastSample = t3;
    }
    if (e22.timestampProcessingQueue.length = 0, o2(e22.lastSample), o2(e22.lastTimescaleUnits !== null), t22 !== void 0 && e22.lastSample.timescaleUnitsToNextSample === 0) {
      o2(t22.type === "key");
      let i3 = fd(t22.timestamp, e22.timescale, !1), r2 = Math.round(i3 - e22.lastTimescaleUnits);
      e22.lastSample.timescaleUnitsToNextSample = r2;
    }
  }
  async registerSample(e22, t22) {
    t22.type === "key" && this.processTimestamps(e22, t22), e22.timestampProcessingQueue.push(t22), this.isFragmented ? (e22.sampleQueue.push(t22), await this.interleaveSamples()) : this.fastStart === "reserve" ? await this.registerSampleFastStartReserve(e22, t22) : await this.addSampleToTrack(e22, t22);
  }
  async addSampleToTrack(e22, t22) {
    if (!this.isFragmented && (e22.samples.push(t22), this.fastStart === "reserve")) {
      let t3 = e22.track.metadata.maximumPacketCount;
      if (o2(t3 !== void 0), e22.samples.length > t3) throw new Error(`Track #${e22.track.id} has already reached the maximum packet count (${t3}). Either add less packets or increase the maximum packet count.`);
    }
    let i2 = !1;
    if (e22.currentChunk) {
      e22.currentChunk.startTimestamp = Math.min(e22.currentChunk.startTimestamp, t22.timestamp);
      let r2 = t22.timestamp - e22.currentChunk.startTimestamp;
      if (this.isFragmented) {
        let a2 = this.trackDatas.every((i3) => {
          if (e22 === i3) return t22.type === "key";
          let r3 = i3.sampleQueue[0];
          return r3 ? r3.type === "key" : i3.closed;
        });
        r2 >= this.minimumFragmentDuration && a2 && t22.timestamp > this.maxWrittenTimestamp && (i2 = !0, await this.finalizeFragment());
      } else i2 = r2 >= 0.5;
    } else i2 = !0;
    i2 && (e22.currentChunk && await this.finalizeCurrentChunk(e22), e22.currentChunk = { startTimestamp: t22.timestamp, samples: [], offset: null, moofOffset: null, trafIndex: null }), o2(e22.currentChunk), e22.currentChunk.samples.push(t22), this.isFragmented && (this.maxWrittenTimestamp = Math.max(this.maxWrittenTimestamp, t22.timestamp), this.maxWrittenEndTimestamp = Math.max(this.maxWrittenEndTimestamp, t22.timestamp + t22.duration), this.minWrittenTimestamp = Math.min(this.minWrittenTimestamp, t22.timestamp));
  }
  async finalizeCurrentChunk(e22) {
    if (o2(!this.isFragmented), o2(this.writer), !e22.currentChunk) return;
    e22.finalizedChunks.push(e22.currentChunk), this.finalizedChunks.push(e22.currentChunk);
    let t22 = e22.currentChunk.samples.length;
    if (e22.type === "audio" && e22.info.requiresPcmTransformation && (t22 = e22.currentChunk.samples.reduce((t3, i2) => t3 + fd(i2.duration, e22.timescale), 0)), e22.compactlyCodedChunkTable.length !== 0 && l2(e22.compactlyCodedChunkTable).samplesPerChunk === t22 || e22.compactlyCodedChunkTable.push({ firstChunk: e22.finalizedChunks.length, samplesPerChunk: t22 }), this.fastStart !== "in-memory") {
      e22.currentChunk.offset = this.writer.getPos();
      for (let t3 of e22.currentChunk.samples) o2(t3.data), this.writer.write(t3.data), t3.data = null;
      await this.writer.flush();
    } else e22.currentChunk.offset = 0;
  }
  async interleaveSamples(e22 = !1) {
    if (o2(this.isFragmented), e22 || this.allTracksAreKnown()) e: for (; ; ) {
      let t22 = null, i2 = 1 / 0;
      for (let a2 of this.trackDatas) {
        if (!e22 && a2.sampleQueue.length === 0 && !a2.closed) break e;
        a2.sampleQueue.length > 0 && a2.sampleQueue[0].timestamp < i2 && (t22 = a2, i2 = a2.sampleQueue[0].timestamp);
      }
      if (!t22) break;
      let r2 = t22.sampleQueue.shift();
      await this.addSampleToTrack(t22, r2);
    }
  }
  async finalizeFragment(e22 = !this.isCmaf) {
    if (o2(this.isFragmented), !this.wroteFragmentedHeader) {
      this.wroteFragmentedHeader = !0;
      let e3 = this.initBoxWriter ?? this.boxWriter;
      o2(e3), this.formatOptions.onMoov && e3.writer.startTrackingWrites(), this.ensureOneEnabledTrack();
      let t3 = qc(this);
      if (e3.writeBox(t3), this.formatOptions.onMoov) {
        let { data: t4, start: i3 } = e3.writer.stopTrackingWrites();
        this.formatOptions.onMoov(t4, i3);
      }
      if (this.isCmaf) {
        o2(this.initWriter), await this.initWriter.flush(), await this.initWriter.finalize(), this.writer = await this.output._getRootWriter(!0), this.boxWriter = new wc(this.writer);
        let e4 = this.boxWriter.measureBox(Lc()), t4 = this.boxWriter.measureBox(Uc(this, 0));
        this.segmentHeaderSize = e4 + t4, this.writer.seek(this.segmentHeaderSize);
      }
    }
    o2(this.writer), o2(this.boxWriter);
    let t22 = this.trackDatas.filter((e3) => e3.currentChunk);
    if (t22.length === 0) return void (e22 && await this.writer.flush());
    let i2 = this.nextFragmentNumber++, r2 = Al(i2, t22), a2 = this.writer.getPos(), s2 = a2 + this.boxWriter.measureBox(r2), n2 = s2 + 8, c22 = 1 / 0;
    for (let o22 = 0; o22 < t22.length; o22++) {
      let e3 = t22[o22];
      e3.currentChunk.offset = n2, e3.currentChunk.moofOffset = a2, e3.currentChunk.trafIndex = o22;
      for (let t3 of e3.currentChunk.samples) n2 += t3.size;
      c22 = Math.min(c22, e3.currentChunk.startTimestamp);
    }
    let l22 = n2 - s2, d22 = l22 >= 2 ** 32;
    if (d22) for (let o22 of t22) o22.currentChunk.offset += 8;
    this.formatOptions.onMoof && this.writer.startTrackingWrites();
    let u2 = Al(i2, t22);
    if (this.boxWriter.writeBox(u2), this.formatOptions.onMoof) {
      let { data: e3, start: t3 } = this.writer.stopTrackingWrites();
      this.formatOptions.onMoof(e3, t3, c22);
    }
    o2(this.writer.getPos() === s2), this.formatOptions.onMdat && this.writer.startTrackingWrites();
    let h22 = Wc(d22);
    h22.size = l22, this.boxWriter.writeBox(h22), this.writer.seek(s2 + (d22 ? Ui : 8));
    for (let o22 of t22) for (let e3 of o22.currentChunk.samples) this.writer.write(e3.data), e3.data = null;
    if (this.formatOptions.onMdat) {
      let { data: e3, start: t3 } = this.writer.stopTrackingWrites();
      this.formatOptions.onMdat(e3, t3);
    }
    for (let o22 of t22) o22.finalizedChunks.push(o22.currentChunk), this.finalizedChunks.push(o22.currentChunk), o22.currentChunk = null;
    e22 && await this.writer.flush();
  }
  async registerSampleFastStartReserve(e22, t22) {
    this.allTracksAreKnown() ? (this.mdat || await this.createFastStartReserveMdat(), await this.addSampleToTrack(e22, t22)) : e22.sampleQueue.push(t22);
  }
  async createFastStartReserveMdat() {
    o2(this.writer), o2(this.boxWriter), this.ensureOneEnabledTrack();
    let e22 = qc(this), t22 = this.boxWriter.measureBox(e22) + this.computeSampleTableSizeUpperBound() + 4096;
    o2(this.ftypSize !== null), this.writer.seek(this.ftypSize + t22), this.formatOptions.onMdat && this.writer.startTrackingWrites(), this.mdat = Wc(!0), this.boxWriter.writeBox(this.mdat);
    for (let i2 of this.trackDatas) {
      for (let e3 of i2.sampleQueue) await this.addSampleToTrack(i2, e3);
      i2.sampleQueue.length = 0;
    }
  }
  computeSampleTableSizeUpperBound() {
    o2(this.fastStart === "reserve");
    let e22 = 0;
    for (let t22 of this.trackDatas) {
      let i2 = t22.track.metadata.maximumPacketCount;
      o2(i2 !== void 0), e22 += 8 * Math.ceil(2 / 3 * i2), e22 += 4 * i2, e22 += 8 * Math.ceil(2 / 3 * i2), e22 += 12 * Math.ceil(2 / 3 * i2), e22 += 4 * i2, e22 += 8 * i2;
    }
    return e22;
  }
  async onTrackClose(e22) {
    let t22 = await this.mutex.acquire(), i2 = this.trackDatas.find((t3) => t3.track === e22);
    i2 && (i2.closed = !0, i2.type === "subtitle" && e22.source._codec === "webvtt" && await this.processWebVTTCues(i2, 1 / 0), this.processTimestamps(i2)), this.allTracksAreKnown() && this.allTracksKnown.resolve(), this.isFragmented && await this.interleaveSamples(), t22();
  }
  ensureOneEnabledTrack() {
    for (let e22 of ["video", "audio", "subtitle"]) {
      let t22 = this.trackDatas.filter((t3) => t3.type === e22);
      if (t22.length !== 0 && !t22.some((e3) => {
        var t3;
        return ((t3 = e3.track.metadata.disposition) == null ? void 0 : t3.default) !== !1;
      })) {
        let e3 = t22[0];
        e3.track.metadata.disposition = { ...e3.track.metadata.disposition, default: !0 };
      }
    }
  }
  async forceFragmentFinalization() {
    o2(this.isFragmented);
    let e22 = await this.mutex.acquire();
    try {
      for (let e3 of this.trackDatas) e3.type === "subtitle" && e3.track.source._codec === "webvtt" && await this.processWebVTTCues(e3, 1 / 0), this.processTimestamps(e3);
      await this.interleaveSamples(!0), await this.finalizeFragment();
    } finally {
      e22();
    }
  }
  async finalize() {
    let e22 = await this.mutex.acquire();
    this.allTracksKnown.resolve(), this.ensureOneEnabledTrack(), this.mdat || this.fastStart !== "reserve" || await this.createFastStartReserveMdat();
    for (let i2 of this.trackDatas) i2.closed = !0, i2.type === "subtitle" && i2.track.source._codec === "webvtt" && await this.processWebVTTCues(i2, 1 / 0), this.processTimestamps(i2);
    if (this.isFragmented) await this.interleaveSamples(!0), await this.finalizeFragment(!1);
    else for (let i2 of this.trackDatas) if (await this.finalizeCurrentChunk(i2), i2.startTimestampOffset !== null) for (let e3 = 0; e3 < i2.samples.length; e3++) {
      let t3 = i2.samples[e3];
      t3.timestamp -= i2.startTimestampOffset, t3.decodeTimestamp -= i2.startTimestampOffset;
    }
    if (o2(this.writer), o2(this.boxWriter), this.fastStart === "in-memory") {
      let e3;
      this.mdat = Wc(!1);
      for (let i2 = 0; i2 < 2; i2++) {
        let t4 = qc(this), i3 = this.boxWriter.measureBox(t4);
        e3 = this.boxWriter.measureBox(this.mdat);
        let r2 = this.writer.getPos() + i3 + e3;
        for (let a2 of this.finalizedChunks) {
          a2.offset = r2;
          for (let { data: t5 } of a2.samples) o2(t5), r2 += t5.byteLength, e3 += t5.byteLength;
        }
        if (r2 < 2 ** 32) break;
        e3 >= 2 ** 32 && (this.mdat.largeSize = !0);
      }
      this.formatOptions.onMoov && this.writer.startTrackingWrites();
      let t3 = qc(this);
      if (this.boxWriter.writeBox(t3), this.formatOptions.onMoov) {
        let { data: e4, start: t4 } = this.writer.stopTrackingWrites();
        this.formatOptions.onMoov(e4, t4);
      }
      this.formatOptions.onMdat && this.writer.startTrackingWrites(), this.mdat.size = e3, this.boxWriter.writeBox(this.mdat);
      for (let i2 of this.finalizedChunks) for (let e4 of i2.samples) o2(e4.data), this.writer.write(e4.data), e4.data = null;
      if (this.formatOptions.onMdat) {
        let { data: e4, start: t4 } = this.writer.stopTrackingWrites();
        this.formatOptions.onMdat(e4, t4);
      }
    } else if (this.isFragmented) if (this.isCmaf) {
      let e3 = this.segmentHeaderSize !== null ? this.writer.getPos() - this.segmentHeaderSize : 0;
      this.writer.seek(0), this.boxWriter.writeBox(Lc()), this.boxWriter.writeBox(Uc(this, e3));
    } else {
      let e3 = this.writer.getPos(), i2 = (t22 = this.trackDatas, Nc("mfra", void 0, [...t22.map(zl), Ll()]));
      this.boxWriter.writeBox(i2);
      let r2 = this.writer.getPos() - e3;
      this.writer.seek(this.writer.getPos() - 4), this.boxWriter.writeU32(r2);
    }
    else {
      o2(this.mdat);
      let e3 = this.boxWriter.offsets.get(this.mdat);
      o2(e3 !== void 0);
      let t3 = this.writer.getPos() - e3;
      if (this.mdat.size = t3, this.mdat.largeSize = t3 >= 2 ** 32, this.boxWriter.patchBox(this.mdat), this.formatOptions.onMdat) {
        let { data: e4, start: t4 } = this.writer.stopTrackingWrites();
        this.formatOptions.onMdat(e4, t4);
      }
      let i2 = qc(this);
      if (this.fastStart === "reserve") {
        o2(this.ftypSize !== null), this.writer.seek(this.ftypSize), this.formatOptions.onMoov && this.writer.startTrackingWrites(), this.boxWriter.writeBox(i2);
        let e4 = this.boxWriter.offsets.get(this.mdat) - this.writer.getPos();
        this.boxWriter.writeBox({ type: "free", size: e4 });
      } else this.formatOptions.onMoov && this.writer.startTrackingWrites(), this.boxWriter.writeBox(i2);
      if (this.formatOptions.onMoov) {
        let { data: e4, start: t4 } = this.writer.stopTrackingWrites();
        this.formatOptions.onMoov(e4, t4);
      }
    }
    var t22;
    e22();
  }
};
var gd = "Mediabunny", kd = { video: 1, audio: 2, subtitle: 17 }, wd = class extends fc {
  constructor(e22, t22) {
    super(e22), this.trackDatas = [], this.allTracksKnown = F2(), this.segment = null, this.segmentInfo = null, this.seekHead = null, this.tracksElement = null, this.tagsElement = null, this.attachmentsElement = null, this.segmentDuration = null, this.cues = null, this.currentCluster = null, this.currentClusterStartMsTimestamp = null, this.currentClusterMaxMsTimestamp = null, this.trackDatasInCurrentCluster = /* @__PURE__ */ new Map(), this.startTimestamp = 1 / 0, this.endTimestamp = -1 / 0, this.format = t22;
  }
  async start() {
    let e22 = await this.mutex.acquire();
    this.writer = await this.output._getRootWriter(!!this.format._options.appendOnly), this.ebmlWriter = new Mr(this.writer), this.writeEBMLHeader(), this.createSegmentInfo(), this.createCues(), await this.writer.flush();
    for (let t22 of this.output.tracks) t22.isVideoTrack() && t22.metadata.decoderConfig ? this.getVideoTrackData(t22, t22.metadata.primingPacket ?? null, { decoderConfig: t22.metadata.decoderConfig }) : t22.isAudioTrack() && t22.metadata.decoderConfig && this.getAudioTrackData(t22, t22.metadata.primingPacket ?? null, { decoderConfig: t22.metadata.decoderConfig });
    e22();
  }
  writeEBMLHeader() {
    this.format._options.onEbmlHeader && this.writer.startTrackingWrites();
    let e22 = { id: Pr.EBML, data: [{ id: Pr.EBMLVersion, data: 1 }, { id: Pr.EBMLReadVersion, data: 1 }, { id: Pr.EBMLMaxIDLength, data: 4 }, { id: Pr.EBMLMaxSizeLength, data: 8 }, { id: Pr.DocType, data: this.format instanceof qd ? "webm" : "matroska" }, { id: Pr.DocTypeVersion, data: 2 }, { id: Pr.DocTypeReadVersion, data: 2 }] };
    if (this.ebmlWriter.writeEBML(e22), this.format._options.onEbmlHeader) {
      let { data: e3, start: t22 } = this.writer.stopTrackingWrites();
      this.format._options.onEbmlHeader(e3, t22);
    }
  }
  maybeCreateSeekHead(e22) {
    if (this.format._options.appendOnly) return;
    let t22 = new Uint8Array([28, 83, 187, 107]), i2 = new Uint8Array([21, 73, 169, 102]), r2 = new Uint8Array([22, 84, 174, 107]), a2 = new Uint8Array([25, 65, 164, 105]), s2 = new Uint8Array([18, 84, 195, 103]), n2 = { id: Pr.SeekHead, data: [{ id: Pr.Seek, data: [{ id: Pr.SeekID, data: t22 }, { id: Pr.SeekPosition, size: 5, data: e22 ? this.ebmlWriter.offsets.get(this.cues) - this.segmentDataOffset : 0 }] }, { id: Pr.Seek, data: [{ id: Pr.SeekID, data: i2 }, { id: Pr.SeekPosition, size: 5, data: e22 ? this.ebmlWriter.offsets.get(this.segmentInfo) - this.segmentDataOffset : 0 }] }, { id: Pr.Seek, data: [{ id: Pr.SeekID, data: r2 }, { id: Pr.SeekPosition, size: 5, data: e22 ? this.ebmlWriter.offsets.get(this.tracksElement) - this.segmentDataOffset : 0 }] }, this.attachmentsElement ? { id: Pr.Seek, data: [{ id: Pr.SeekID, data: a2 }, { id: Pr.SeekPosition, size: 5, data: e22 ? this.ebmlWriter.offsets.get(this.attachmentsElement) - this.segmentDataOffset : 0 }] } : null, this.tagsElement ? { id: Pr.Seek, data: [{ id: Pr.SeekID, data: s2 }, { id: Pr.SeekPosition, size: 5, data: e22 ? this.ebmlWriter.offsets.get(this.tagsElement) - this.segmentDataOffset : 0 }] } : null] };
    this.seekHead = n2;
  }
  createSegmentInfo() {
    let e22 = { id: Pr.Duration, data: new vr(0) };
    this.segmentDuration = e22;
    let t22 = { id: Pr.Info, data: [{ id: Pr.TimestampScale, data: 1e6 }, { id: Pr.MuxingApp, data: gd }, { id: Pr.WritingApp, data: gd }, this.format._options.appendOnly ? null : e22] };
    this.segmentInfo = t22;
  }
  createTracks() {
    var e22, t22, i2, r2, a2, s2;
    let n2 = { id: Pr.Tracks, data: [] };
    this.tracksElement = n2;
    for (let c22 of this.trackDatas) {
      let l22 = $r[c22.track.source._codec];
      o2(l22), c22.type === "audio" && c22.track.source._codec === "dts" && (c22.info.decoderConfig.codec === "dtse" ? l22 = "A_DTS/EXPRESS" : c22.info.decoderConfig.codec === "dtsl" && (l22 = "A_DTS/LOSSLESS"));
      let d22 = 0;
      if (c22.type === "audio" && c22.track.source._codec === "opus") {
        d22 = 8e7;
        let e3 = c22.info.decoderConfig.description;
        if (e3) {
          let t3 = m(e3), i3 = ni(t3);
          d22 = Math.round(i3.preSkip / it * 1e9);
        }
      }
      n2.data.push({ id: Pr.TrackEntry, data: [{ id: Pr.TrackNumber, data: c22.track.id }, { id: Pr.TrackUID, data: c22.track.id }, { id: Pr.TrackType, data: kd[c22.type] }, ((e22 = c22.track.metadata.disposition) == null ? void 0 : e22.default) === !1 ? { id: Pr.FlagDefault, data: 0 } : null, (t22 = c22.track.metadata.disposition) != null && t22.forced ? { id: Pr.FlagForced, data: 1 } : null, (i2 = c22.track.metadata.disposition) != null && i2.hearingImpaired ? { id: Pr.FlagHearingImpaired, data: 1 } : null, (r2 = c22.track.metadata.disposition) != null && r2.visuallyImpaired ? { id: Pr.FlagVisualImpaired, data: 1 } : null, (a2 = c22.track.metadata.disposition) != null && a2.original ? { id: Pr.FlagOriginal, data: 1 } : null, (s2 = c22.track.metadata.disposition) != null && s2.commentary ? { id: Pr.FlagCommentary, data: 1 } : null, { id: Pr.FlagLacing, data: 0 }, { id: Pr.Language, data: c22.track.metadata.languageCode ?? W }, { id: Pr.CodecID, data: l22 }, c22.codecPrivate ? { id: Pr.CodecPrivate, data: m(c22.codecPrivate) } : null, { id: Pr.CodecDelay, data: 0 }, { id: Pr.SeekPreRoll, data: d22 }, c22.track.metadata.name !== void 0 ? { id: Pr.Name, data: new Sr(c22.track.metadata.name) } : null, c22.type === "video" ? this.videoSpecificTrackInfo(c22) : null, c22.type === "audio" ? this.audioSpecificTrackInfo(c22) : null, c22.type === "subtitle" ? this.subtitleSpecificTrackInfo(c22) : null] });
    }
  }
  videoSpecificTrackInfo(e22) {
    let { frameRate: t22, rotation: i2 } = e22.track.metadata, r2 = [t22 ? { id: Pr.DefaultDuration, data: 1e9 / t22 } : null], a2 = i2 ? c2(-i2) : 0, s2 = !!e22.info.aspectRatio && e22.info.aspectRatio.num * e22.info.height !== e22.info.aspectRatio.den * e22.info.width, n2 = e22.info.decoderConfig.colorSpace, o22 = { id: Pr.Video, data: [{ id: Pr.PixelWidth, data: e22.info.width }, { id: Pr.PixelHeight, data: e22.info.height }, s2 ? { id: Pr.DisplayWidth, data: e22.info.aspectRatio.num } : null, s2 ? { id: Pr.DisplayHeight, data: e22.info.aspectRatio.den } : null, s2 ? { id: Pr.DisplayUnit, data: 3 } : null, e22.info.alphaMode ? { id: Pr.AlphaMode, data: 1 } : null, P(n2) ? { id: Pr.Colour, data: [{ id: Pr.MatrixCoefficients, data: T2[n2.matrix] }, { id: Pr.TransferCharacteristics, data: y[n2.transfer] }, { id: Pr.Primaries, data: w[n2.primaries] }, { id: Pr.Range, data: n2.fullRange ? 2 : 1 }] } : null, a2 ? { id: Pr.Projection, data: [{ id: Pr.ProjectionType, data: 0 }, { id: Pr.ProjectionPoseRoll, data: new yr((a2 + 180) % 360 - 180) }] } : null] };
    return r2.push(o22), r2;
  }
  audioSpecificTrackInfo(e22) {
    let t22 = ze.includes(e22.track.source._codec) ? at(e22.track.source._codec) : null;
    return [{ id: Pr.Audio, data: [{ id: Pr.SamplingFrequency, data: new yr(e22.info.sampleRate) }, { id: Pr.Channels, data: e22.info.numberOfChannels }, t22 ? { id: Pr.BitDepth, data: 8 * t22.sampleSize } : null] }];
  }
  subtitleSpecificTrackInfo(e22) {
    return [];
  }
  maybeCreateTags() {
    let e22 = [], t22 = (t3, i3) => {
      e22.push({ id: Pr.SimpleTag, data: [{ id: Pr.TagName, data: new Sr(t3) }, typeof i3 == "string" ? { id: Pr.TagString, data: new Sr(i3) } : { id: Pr.TagBinary, data: i3 }] });
    }, i2 = this.output._metadataTags, r2 = /* @__PURE__ */ new Set();
    for (let { key: a2, value: s2 } of le(i2)) switch (a2) {
      case "title":
        t22("TITLE", s2), r2.add("TITLE");
        break;
      case "description":
        t22("DESCRIPTION", s2), r2.add("DESCRIPTION");
        break;
      case "artist":
        t22("ARTIST", s2), r2.add("ARTIST");
        break;
      case "album":
        t22("ALBUM", s2), r2.add("ALBUM");
        break;
      case "albumArtist":
        t22("ALBUM_ARTIST", s2), r2.add("ALBUM_ARTIST");
        break;
      case "genre":
        t22("GENRE", s2), r2.add("GENRE");
        break;
      case "comment":
        t22("COMMENT", s2), r2.add("COMMENT");
        break;
      case "lyrics":
        t22("LYRICS", s2), r2.add("LYRICS");
        break;
      case "date":
        t22("DATE", s2.toISOString().slice(0, 10)), r2.add("DATE");
        break;
      case "trackNumber":
        t22("PART_NUMBER", i2.tracksTotal !== void 0 ? `${s2}/${i2.tracksTotal}` : s2.toString()), r2.add("PART_NUMBER");
        break;
      case "discNumber":
        t22("DISC", i2.discsTotal !== void 0 ? `${s2}/${i2.discsTotal}` : s2.toString()), r2.add("DISC");
        break;
      case "tracksTotal":
      case "discsTotal":
      case "images":
      case "raw":
        break;
      default:
        N(a2);
    }
    if (i2.raw) for (let a2 in i2.raw) {
      let e3 = i2.raw[a2];
      e3 == null || r2.has(a2) || (typeof e3 == "string" || e3 instanceof Uint8Array) && t22(a2, e3);
    }
    e22.length !== 0 && (this.tagsElement = { id: Pr.Tags, data: [{ id: Pr.Tag, data: [{ id: Pr.Targets, data: [{ id: Pr.TargetTypeValue, data: 50 }, { id: Pr.TargetType, data: "MOVIE" }] }, ...e22] }] });
  }
  maybeCreateAttachments() {
    let e22 = this.output._metadataTags, t22 = [], i2 = /* @__PURE__ */ new Set(), r2 = e22.images ?? [];
    for (let a2 of r2) {
      let e3, r3 = a2.name;
      for (r3 === void 0 && (r3 = (a2.kind === "coverFront" ? "cover" : a2.kind === "coverBack" ? "back" : "image") + (de(a2.mimeType) ?? "")); ; ) {
        e3 = 0n;
        for (let t3 = 0; t3 < 8; t3++) e3 <<= 8n, e3 |= BigInt(Math.floor(256 * Math.random()));
        if (e3 !== 0n && !i2.has(e3)) break;
      }
      i2.add(e3), t22.push({ id: Pr.AttachedFile, data: [a2.description !== void 0 ? { id: Pr.FileDescription, data: new Sr(a2.description) } : null, { id: Pr.FileName, data: new Sr(r3) }, { id: Pr.FileMediaType, data: a2.mimeType }, { id: Pr.FileData, data: a2.data }, { id: Pr.FileUID, data: e3 }] });
    }
    for (let [a2, s2] of Object.entries(e22.raw ?? {}))
      s2 instanceof _e && /^\d+$/.test(a2) && (r2.find((e3) => e3.mimeType === s2.mimeType && he(e3.data, s2.data)) || t22.push({ id: Pr.AttachedFile, data: [s2.description !== void 0 ? { id: Pr.FileDescription, data: new Sr(s2.description) } : null, { id: Pr.FileName, data: new Sr(s2.name ?? "") }, { id: Pr.FileMediaType, data: s2.mimeType ?? "" }, { id: Pr.FileData, data: s2.data }, { id: Pr.FileUID, data: BigInt(a2) }] }));
    t22.length !== 0 && (this.attachmentsElement = { id: Pr.Attachments, data: t22 });
  }
  createSegment() {
    this.createTracks(), this.maybeCreateTags(), this.maybeCreateAttachments(), this.maybeCreateSeekHead(!1);
    let e22 = { id: Pr.Segment, size: this.format._options.appendOnly ? -1 : 6, data: [this.seekHead, this.segmentInfo, this.tracksElement, this.attachmentsElement, this.tagsElement] };
    if (this.segment = e22, this.format._options.onSegmentHeader && this.writer.startTrackingWrites(), this.ebmlWriter.writeEBML(e22), this.format._options.onSegmentHeader) {
      let { data: e3, start: t22 } = this.writer.stopTrackingWrites();
      this.format._options.onSegmentHeader(e3, t22);
    }
  }
  createCues() {
    this.cues = { id: Pr.Cues, data: [] };
  }
  get segmentDataOffset() {
    return o2(this.segment), this.ebmlWriter.dataOffsets.get(this.segment);
  }
  allTracksAreKnown() {
    for (let e22 of this.output.tracks) if (!e22.source._closed && !this.trackDatas.some((t22) => t22.track === e22)) return !1;
    return !0;
  }
  async getMimeType() {
    await this.allTracksKnown.promise;
    let e22 = this.trackDatas.map((e3) => e3.type === "video" || e3.type === "audio" ? e3.info.decoderConfig.codec : { webvtt: "wvtt" }[e3.track.source._codec]);
    return Kr({ isWebM: this.format instanceof qd, hasVideo: this.trackDatas.some((e3) => e3.type === "video"), hasAudio: this.trackDatas.some((e3) => e3.type === "audio"), codecStrings: e22 });
  }
  getVideoTrackData(e22, t22, i2) {
    let r2 = this.trackDatas.find((t3) => t3.track === e22);
    if (r2) return r2;
    ut(i2, e22.source._codec), o2(i2), o2(i2.decoderConfig), o2(i2.decoderConfig.codedWidth !== void 0), o2(i2.decoderConfig.codedHeight !== void 0);
    let a2 = i2.decoderConfig.displayAspectWidth, s2 = i2.decoderConfig.displayAspectHeight, n2 = a2 === void 0 || s2 === void 0 ? null : we({ num: a2, den: s2 }), c22 = { track: e22, type: "video", info: { width: i2.decoderConfig.codedWidth, height: i2.decoderConfig.codedHeight, aspectRatio: n2, decoderConfig: i2.decoderConfig, alphaMode: t22 ? !!t22.sideData.alpha : null }, chunkQueue: [], lastWrittenMsTimestamp: null, codecPrivate: i2.decoderConfig.description ?? null, closed: !1 };
    return e22.source._codec === "vp9" ? c22.codecPrivate = new Uint8Array(((e3) => {
      let t3 = e3.split(".");
      return [1, 1, Number(t3[1]), 2, 1, Number(t3[2]), 3, 1, Number(t3[3]), 4, 1, t3[4] ? Number(t3[4]) : 1];
    })(c22.info.decoderConfig.codec)) : e22.source._codec === "av1" ? c22.codecPrivate = new Uint8Array(Je(c22.info.decoderConfig.codec)) : e22.source._codec === "prores" && (c22.codecPrivate = g.encode(i2.decoderConfig.codec)), this.trackDatas.push(c22), this.trackDatas.sort((e3, t3) => e3.track.id - t3.track.id), this.allTracksAreKnown() && this.allTracksKnown.resolve(), c22;
  }
  getAudioTrackData(e22, t22, i2) {
    let r2 = this.trackDatas.find((t3) => t3.track === e22);
    if (r2) return r2;
    mt(i2, e22.source._codec), o2(i2), o2(i2.decoderConfig);
    let a2 = { ...i2.decoderConfig }, s2 = !1;
    if (e22.source._codec === "aac" && !a2.description) {
      if (!t22) throw new Error("No AAC description provided; you must therefore provide a priming packet.");
      let e3 = xa(Oo.tempFromBytes(t22.data));
      if (!e3) throw new Error("Couldn't parse ADTS header from the AAC packet. Make sure the packets are in ADTS format (as specified in ISO 13818-7) when not providing a description, or provide a description (must be an AudioSpecificConfig as specified in ISO 14496-3) and ensure the packets are raw AAC data.");
      let i3 = Fe[e3.samplingFrequencyIndex], r3 = Re[e3.channelConfiguration];
      if (i3 === void 0 || r3 === void 0) throw new Error("Invalid ADTS frame header.");
      a2.description = Oe2({ objectType: e3.objectType, sampleRate: i3, numberOfChannels: r3 }), s2 = !0;
    }
    let n2 = { track: e22, type: "audio", info: { numberOfChannels: i2.decoderConfig.numberOfChannels, sampleRate: i2.decoderConfig.sampleRate, decoderConfig: a2, requiresAdtsStripping: s2 }, chunkQueue: [], lastWrittenMsTimestamp: null, codecPrivate: a2.description ?? null, closed: !1 };
    return this.trackDatas.push(n2), this.trackDatas.sort((e3, t3) => e3.track.id - t3.track.id), this.allTracksAreKnown() && this.allTracksKnown.resolve(), n2;
  }
  getSubtitleTrackData(e22, t22) {
    let i2 = this.trackDatas.find((t3) => t3.track === e22);
    if (i2) return i2;
    ft(t22), o2(t22), o2(t22.config);
    let r2 = { track: e22, type: "subtitle", info: { config: t22.config }, chunkQueue: [], lastWrittenMsTimestamp: null, codecPrivate: g.encode(t22.config.description), closed: !1 };
    return this.trackDatas.push(r2), this.trackDatas.sort((e3, t3) => e3.track.id - t3.track.id), this.allTracksAreKnown() && this.allTracksKnown.resolve(), r2;
  }
  async addEncodedVideoPacket(e22, t22, i2) {
    var r2;
    let a2 = await this.mutex.acquire();
    try {
      let a3 = this.getVideoTrackData(e22, t22, i2);
      (r2 = a3.info).alphaMode ?? (r2.alphaMode = !!t22.sideData.alpha);
      let s2 = t22.data;
      if (e22.source._codec === "prores") {
        if (s2.byteLength < 8) throw new Error("ProRes packet too small, expected at least 8 bytes.");
        s2 = s2.subarray(8);
      }
      let n2 = t22.type === "key";
      this.validateTimestamp(a3.track, t22.timestamp, n2);
      let o22 = t22.timestamp, c22 = t22.duration;
      e22.metadata.frameRate !== void 0 && (o22 = H(o22, e22.metadata.frameRate), c22 = H(c22, e22.metadata.frameRate));
      let l22 = a3.info.alphaMode ? t22.sideData.alpha ?? null : null, d22 = this.createInternalChunk(s2, o22, c22, t22.type, l22);
      e22.source._codec === "vp9" && this.fixVP9ColorSpace(a3, d22), a3.chunkQueue.push(d22), await this.interleaveChunks();
    } finally {
      a2();
    }
  }
  async addEncodedAudioPacket(e22, t22, i2) {
    let r2 = await this.mutex.acquire();
    try {
      let r3 = this.getAudioTrackData(e22, t22, i2), a2 = t22.data;
      if (r3.info.requiresAdtsStripping) {
        let e3 = xa(Oo.tempFromBytes(a2));
        if (!e3) throw new Error("Expected ADTS frame, didn't get one.");
        let t3 = e3.crcCheck === null ? 7 : 9;
        a2 = a2.subarray(t3);
      }
      let s2 = t22.type === "key";
      this.validateTimestamp(r3.track, t22.timestamp, s2);
      let n2 = this.createInternalChunk(a2, t22.timestamp, t22.duration, t22.type);
      r3.chunkQueue.push(n2), await this.interleaveChunks();
    } finally {
      r2();
    }
  }
  async addSubtitleCue(e22, t22, i2) {
    let r2 = await this.mutex.acquire();
    try {
      let r3 = this.getSubtitleTrackData(e22, i2);
      this.validateTimestamp(r3.track, t22.timestamp, !0);
      let a2 = t22.text, s2 = Math.round(1e3 * t22.timestamp);
      pc.lastIndex = 0, a2 = a2.replace(pc, (e3) => {
        let t3 = ((e4) => {
          let t4 = gc.exec(e4);
          if (!t4) throw new Error("Expected match.");
          return 36e5 * Number(t4[1] || "0") + 6e4 * Number(t4[2]) + 1e3 * Number(t4[3]) + Number(t4[4]);
        })(e3.slice(1, -1));
        return `<${kc(t3 - s2)}>`;
      });
      let n2 = g.encode(a2), o22 = `${t22.settings ?? ""}
${t22.identifier ?? ""}
${t22.notes ?? ""}`, c22 = this.createInternalChunk(n2, t22.timestamp, t22.duration, "key", o22.trim() ? g.encode(o22) : null);
      r3.chunkQueue.push(c22), await this.interleaveChunks();
    } finally {
      r2();
    }
  }
  async interleaveChunks(e22 = !1) {
    if (e22 || this.allTracksAreKnown()) {
      e: for (; ; ) {
        let t22 = null, i2 = 1 / 0;
        for (let a2 of this.trackDatas) {
          if (!e22 && a2.chunkQueue.length === 0 && !a2.closed) break e;
          a2.chunkQueue.length > 0 && a2.chunkQueue[0].timestamp < i2 && (t22 = a2, i2 = a2.chunkQueue[0].timestamp);
        }
        if (!t22) break;
        let r2 = t22.chunkQueue.shift();
        this.writeBlock(t22, r2);
      }
      e22 || await this.writer.flush();
    }
  }
  fixVP9ColorSpace(e22, t22) {
    if (t22.type !== "key" || !e22.info.decoderConfig.colorSpace || !e22.info.decoderConfig.colorSpace.matrix) return;
    let i2 = new Me(t22.data);
    i2.skipBits(2);
    let r2 = i2.readBits(1), a2 = (i2.readBits(1) << 1) + r2;
    if (a2 === 3 && i2.skipBits(1), i2.readBits(1) || i2.readBits(1) !== 0 || (i2.skipBits(2), i2.readBits(24) !== 4817730)) return;
    a2 >= 2 && i2.skipBits(1);
    let s2 = { rgb: 7, bt709: 2, bt470bg: 1, smpte170m: 3 }[e22.info.decoderConfig.colorSpace.matrix];
    ((e3, t3, i3, r3) => {
      for (let a3 = t3; a3 < i3; a3++) {
        let t4 = Math.floor(a3 / 8), s3 = e3[t4], n2 = 7 - (7 & a3);
        s3 &= ~(1 << n2), s3 |= (r3 & 1 << i3 - a3 - 1) >> i3 - a3 - 1 << n2, e3[t4] = s3;
      }
    })(t22.data, i2.pos, i2.pos + 3, s2);
  }
  createInternalChunk(e22, t22, i2, r2, a2 = null) {
    return { data: e22, type: r2, timestamp: t22, duration: i2, additions: a2 };
  }
  writeBlock(e22, t22) {
    this.segment || this.createSegment();
    let i2 = Math.round(1e3 * t22.timestamp), r2 = this.trackDatas.every((i3) => {
      if (e22 === i3) return t22.type === "key";
      let r3 = i3.chunkQueue[0];
      return r3 ? r3.type === "key" : i3.closed;
    }), a2 = !1;
    if (this.currentCluster) {
      o2(this.currentClusterStartMsTimestamp !== null), o2(this.currentClusterMaxMsTimestamp !== null);
      let e3 = i2 - this.currentClusterStartMsTimestamp;
      a2 = r2 && i2 > this.currentClusterMaxMsTimestamp && e3 >= 1e3 * (this.format._options.minimumClusterDuration ?? 1) || e3 > 32767;
    } else a2 = !0;
    a2 && this.createNewCluster(i2);
    let s2 = i2 - this.currentClusterStartMsTimestamp;
    if (s2 < -32768) return;
    let n2 = new Uint8Array(4), c22 = new DataView(n2.buffer);
    c22.setUint8(0, 128 | e22.track.id), c22.setInt16(1, s2, !1);
    let l22 = Math.round(1e3 * t22.duration);
    if (t22.additions || e22.type === "subtitle") {
      let r3 = { id: Pr.BlockGroup, data: [{ id: Pr.Block, data: [n2, t22.data] }, t22.type === "delta" ? { id: Pr.ReferenceBlock, data: new Tr(e22.lastWrittenMsTimestamp - i2) } : null, t22.additions ? { id: Pr.BlockAdditions, data: [{ id: Pr.BlockMore, data: [{ id: Pr.BlockAddID, data: 1 }, { id: Pr.BlockAdditional, data: t22.additions }] }] } : null, l22 > 0 ? { id: Pr.BlockDuration, data: l22 } : null] };
      this.ebmlWriter.writeEBML(r3);
    } else {
      c22.setUint8(3, +(t22.type === "key") << 7);
      let e3 = { id: Pr.SimpleBlock, data: [n2, t22.data] };
      this.ebmlWriter.writeEBML(e3);
    }
    this.startTimestamp = Math.min(this.startTimestamp, i2), this.endTimestamp = Math.max(this.endTimestamp, i2 + l22), e22.lastWrittenMsTimestamp = i2, this.trackDatasInCurrentCluster.has(e22) || this.trackDatasInCurrentCluster.set(e22, { firstMsTimestamp: i2 }), this.currentClusterMaxMsTimestamp = Math.max(this.currentClusterMaxMsTimestamp, i2);
  }
  createNewCluster(e22) {
    this.currentCluster && this.finalizeCurrentCluster(), this.format._options.onCluster && this.writer.startTrackingWrites(), this.currentCluster = { id: Pr.Cluster, size: this.format._options.appendOnly ? -1 : 5, data: [{ id: Pr.Timestamp, data: e22 }] }, this.ebmlWriter.writeEBML(this.currentCluster), this.currentClusterStartMsTimestamp = e22, this.currentClusterMaxMsTimestamp = e22, this.trackDatasInCurrentCluster.clear();
  }
  finalizeCurrentCluster() {
    if (o2(this.currentCluster), !this.format._options.appendOnly) {
      let e3 = this.writer.getPos() - this.ebmlWriter.dataOffsets.get(this.currentCluster), t3 = this.writer.getPos();
      this.writer.seek(this.ebmlWriter.offsets.get(this.currentCluster) + 4), this.ebmlWriter.writeVarInt(e3, 5), this.writer.seek(t3);
    }
    if (this.format._options.onCluster) {
      o2(this.currentClusterStartMsTimestamp !== null);
      let { data: e3, start: t3 } = this.writer.stopTrackingWrites();
      this.format._options.onCluster(e3, t3, this.currentClusterStartMsTimestamp / 1e3);
    }
    let e22 = this.ebmlWriter.offsets.get(this.currentCluster) - this.segmentDataOffset, t22 = /* @__PURE__ */ new Map();
    for (let [r2, { firstMsTimestamp: a2 }] of this.trackDatasInCurrentCluster) t22.has(a2) || t22.set(a2, []), t22.get(a2).push(r2);
    let i2 = [...t22.entries()].sort((e3, t3) => e3[0] - t3[0]);
    for (let [r2, a2] of i2) o2(this.cues), this.cues.data.push({ id: Pr.CuePoint, data: [{ id: Pr.CueTime, data: r2 }, ...a2.map((t3) => ({ id: Pr.CueTrackPositions, data: [{ id: Pr.CueTrack, data: t3.track.id }, { id: Pr.CueClusterPosition, data: e22 }] }))] });
  }
  async onTrackClose(e22) {
    let t22 = await this.mutex.acquire(), i2 = this.trackDatas.find((t3) => t3.track === e22);
    i2 && (i2.closed = !0), this.allTracksAreKnown() && this.allTracksKnown.resolve(), await this.interleaveChunks(), t22();
  }
  async finalize() {
    let e22 = await this.mutex.acquire();
    this.allTracksKnown.resolve();
    for (let t22 of this.trackDatas) t22.closed = !0;
    if (this.segment || this.createSegment(), await this.interleaveChunks(!0), this.currentCluster && this.finalizeCurrentCluster(), o2(this.cues), this.ebmlWriter.writeEBML(this.cues), !this.format._options.appendOnly) {
      let e3 = this.writer.getPos() - this.segmentDataOffset;
      this.writer.seek(this.ebmlWriter.offsets.get(this.segment) + 4), this.ebmlWriter.writeVarInt(e3, 6);
      let t22 = this.startTimestamp === 1 / 0 ? 0 : this.endTimestamp - this.startTimestamp;
      this.segmentDuration.data = new vr(t22), this.writer.seek(this.ebmlWriter.offsets.get(this.segmentDuration)), this.ebmlWriter.writeEBML(this.segmentDuration), o2(this.seekHead), this.writer.seek(this.ebmlWriter.offsets.get(this.seekHead)), this.maybeCreateSeekHead(!0), this.ebmlWriter.writeEBML(this.seekHead);
    }
    e22();
  }
};
var bd = class {
  constructor(e22) {
    this.sourceSampleRate = null, this.sourceNumberOfChannels = null, this.startTime = null, this.bufferStartFrame = 0, this.maxWrittenFrame = null, this.targetSampleRate = e22.targetSampleRate, this.targetNumberOfChannels = e22.targetNumberOfChannels, this.onSample = e22.onSample, this.bufferSizeInFrames = Math.floor(5 * this.targetSampleRate), this.bufferSizeInSamples = this.bufferSizeInFrames * this.targetNumberOfChannels, this.outputBuffer = new Float32Array(this.bufferSizeInSamples);
  }
  doChannelMixerSetup() {
    o2(this.sourceNumberOfChannels !== null);
    let e22 = this.sourceNumberOfChannels, t22 = this.targetNumberOfChannels;
    this.channelMixer = e22 === 1 && t22 === 2 ? (t3, i2) => t3[i2 * e22] : e22 === 1 && t22 === 4 ? (t3, i2, r2) => t3[i2 * e22] * +(r2 < 2) : e22 === 1 && t22 === 6 ? (t3, i2, r2) => t3[i2 * e22] * +(r2 === 2) : e22 === 2 && t22 === 1 ? (t3, i2) => {
      let r2 = i2 * e22;
      return 0.5 * (t3[r2] + t3[r2 + 1]);
    } : e22 === 2 && t22 === 4 || e22 === 2 && t22 === 6 ? (t3, i2, r2) => t3[i2 * e22 + r2] * +(r2 < 2) : e22 === 4 && t22 === 1 ? (t3, i2) => {
      let r2 = i2 * e22;
      return 0.25 * (t3[r2] + t3[r2 + 1] + t3[r2 + 2] + t3[r2 + 3]);
    } : e22 === 4 && t22 === 2 ? (t3, i2, r2) => {
      let a2 = i2 * e22;
      return 0.5 * (t3[a2 + r2] + t3[a2 + r2 + 2]);
    } : e22 === 4 && t22 === 6 ? (t3, i2, r2) => {
      let a2 = i2 * e22;
      return r2 < 2 ? t3[a2 + r2] : r2 === 2 || r2 === 3 ? 0 : t3[a2 + r2 - 2];
    } : e22 === 6 && t22 === 1 ? (t3, i2) => {
      let r2 = i2 * e22;
      return Math.SQRT1_2 * (t3[r2] + t3[r2 + 1]) + t3[r2 + 2] + 0.5 * (t3[r2 + 4] + t3[r2 + 5]);
    } : e22 === 6 && t22 === 2 ? (t3, i2, r2) => {
      let a2 = i2 * e22;
      return t3[a2 + r2] + Math.SQRT1_2 * (t3[a2 + 2] + t3[a2 + r2 + 4]);
    } : e22 === 6 && t22 === 4 ? (t3, i2, r2) => {
      let a2 = i2 * e22;
      return r2 < 2 ? t3[a2 + r2] + Math.SQRT1_2 * t3[a2 + 2] : t3[a2 + r2 + 2];
    } : (t3, i2, r2) => r2 < e22 ? t3[i2 * e22 + r2] : 0;
  }
  ensureTempBufferSize(e22) {
    let t22 = this.tempSourceBuffer.length;
    for (; t22 < e22; ) t22 *= 2;
    if (t22 !== this.tempSourceBuffer.length) {
      let e3 = new Float32Array(t22);
      e3.set(this.tempSourceBuffer), this.tempSourceBuffer = e3;
    }
  }
  async add(e22) {
    this.sourceSampleRate === null && (this.sourceSampleRate = e22.sampleRate, this.sourceNumberOfChannels = e22.numberOfChannels, this.startTime = e22.timestamp, this.tempSourceBuffer = new Float32Array(this.sourceSampleRate * this.sourceNumberOfChannels), this.doChannelMixerSetup()), o2(this.startTime !== null);
    let t22 = e22.numberOfFrames * e22.numberOfChannels;
    this.ensureTempBufferSize(t22);
    let i2 = e22.allocationSize({ planeIndex: 0, format: "f32" }), r2 = new Float32Array(this.tempSourceBuffer.buffer, 0, i2 / 4);
    e22.copyTo(r2, { planeIndex: 0, format: "f32" });
    let a2 = e22.timestamp - this.startTime, s2 = a2 + e22.duration, n2 = Math.floor((a2 - 1 / this.sourceSampleRate) * this.targetSampleRate) + 1, c22 = Math.ceil(s2 * this.targetSampleRate);
    for (let l22 = n2; l22 < c22; l22++) {
      if (l22 < this.bufferStartFrame) continue;
      for (; l22 >= this.bufferStartFrame + this.bufferSizeInFrames; ) await this.finalizeCurrentBuffer(), this.bufferStartFrame += this.bufferSizeInFrames;
      let t3 = l22 - this.bufferStartFrame;
      o2(t3 < this.bufferSizeInFrames);
      let i3 = (l22 / this.targetSampleRate - a2) * this.sourceSampleRate, s3 = Math.floor(i3), n3 = Math.ceil(i3), c3 = i3 - s3;
      for (let a3 = 0; a3 < this.targetNumberOfChannels; a3++) {
        let i4 = 0, o22 = 0;
        s3 >= 0 && s3 < e22.numberOfFrames && (i4 = this.channelMixer(r2, s3, a3)), n3 >= 0 && n3 < e22.numberOfFrames && (o22 = this.channelMixer(r2, n3, a3));
        let l3 = i4 + c3 * (o22 - i4), d22 = t3 * this.targetNumberOfChannels + a3;
        this.outputBuffer[d22] += l3;
      }
      this.maxWrittenFrame === null ? this.maxWrittenFrame = t3 : this.maxWrittenFrame = Math.max(this.maxWrittenFrame, t3);
    }
  }
  async finalizeCurrentBuffer() {
    if (this.maxWrittenFrame === null) return;
    o2(this.startTime !== null);
    let e22 = (this.maxWrittenFrame + 1) * this.targetNumberOfChannels, t22 = new Float32Array(e22);
    t22.set(this.outputBuffer.subarray(0, e22));
    let i2 = new _n({ format: "f32", sampleRate: this.targetSampleRate, numberOfChannels: this.targetNumberOfChannels, timestamp: this.startTime + this.bufferStartFrame / this.targetSampleRate, data: t22 });
    await this.onSample(i2), this.outputBuffer.fill(0), this.maxWrittenFrame = null;
  }
  finalize() {
    return this.finalizeCurrentBuffer();
  }
};
var yd = function(e22, t22, i2) {
  if (t22 != null) {
    if (typeof t22 != "object" && typeof t22 != "function") throw new TypeError("Object expected.");
    var r2, a2;
    if (i2) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      r2 = t22[Symbol.asyncDispose];
    }
    if (r2 === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      r2 = t22[Symbol.dispose], i2 && (a2 = r2);
    }
    if (typeof r2 != "function") throw new TypeError("Object not disposable.");
    a2 && (r2 = function() {
      try {
        a2.call(this);
      } catch (e3) {
        return Promise.reject(e3);
      }
    }), e22.stack.push({ value: t22, dispose: r2, async: i2 });
  } else i2 && e22.stack.push({ async: !0 });
  return t22;
}, vd = /* @__PURE__ */ (function(e22) {
  return function(t22) {
    function i2(i3) {
      t22.error = t22.hasError ? new e22(i3, t22.error, "An error was suppressed during disposal.") : i3, t22.hasError = !0;
    }
    var r2, a2 = 0;
    return (function e3() {
      for (; r2 = t22.stack.pop(); ) try {
        if (!r2.async && a2 === 1) return a2 = 0, t22.stack.push(r2), Promise.resolve().then(e3);
        if (r2.dispose) {
          var s2 = r2.dispose.call(r2.value);
          if (r2.async) return a2 |= 2, Promise.resolve(s2).then(e3, function(t3) {
            return i2(t3), e3();
          });
        } else a2 |= 1;
      } catch (n2) {
        i2(n2);
      }
      if (a2 === 1) return t22.hasError ? Promise.reject(t22.error) : Promise.resolve();
      if (t22.hasError) throw t22.error;
    })();
  };
})(typeof SuppressedError == "function" ? SuppressedError : function(e22, t22, i2) {
  var r2 = new Error(i2);
  return r2.name = "SuppressedError", r2.error = e22, r2.suppressed = t22, r2;
}), Td = class {
  constructor() {
    this._connectedTrack = null, this._closingPromise = null, this._closed = !1;
  }
  _ensureValidAdd() {
    if (!this._connectedTrack) throw new Error("Source is not connected to an output track.");
    if (this._connectedTrack.output.state === "canceled") throw new Error("Output has been canceled.");
    if (this._connectedTrack.output.state === "finalizing" || this._connectedTrack.output.state === "finalized") throw new Error("Output has been finalized.");
    if (this._connectedTrack.output.state === "pending") throw new Error("Output has not started.");
    if (this._closed) throw new Error("Source is closed.");
  }
  async _start() {
  }
  async _flushAndClose(e22) {
  }
  close() {
    if (this._closingPromise) return;
    let e22 = this._connectedTrack;
    if (!e22) throw new Error("Cannot call close without connecting the source to an output track.");
    if (e22.output.state === "pending") throw new Error("Cannot call close before output has been started.");
    this._closingPromise = (async () => {
      await this._flushAndClose(!1), this._closed = !0, e22.output.state !== "finalizing" && e22.output.state !== "finalized" && e22.output._muxer.onTrackClose(e22);
    })();
  }
  async _flushOrWaitForOngoingClose(e22) {
    return this._closingPromise ?? (this._closingPromise = (async () => {
      await this._flushAndClose(e22), this._closed = !0;
    })());
  }
}, Sd = class extends Td {
  constructor(e22) {
    if (super(), this._connectedTrack = null, !Ne.includes(e22)) throw new TypeError(`Invalid video codec '${e22}'. Must be one of: ${Ne.join(", ")}.`);
    this._codec = e22;
  }
}, Pd = (e22, t22) => {
  if (e22.metadata.hasOnlyKeyPackets && t22.type !== "key") throw new Error("Cannot add non-key packets to a hasOnlyKeyPackets video track.");
}, Cd = class extends Sd {
  constructor(e22) {
    super(e22);
  }
  add(e22, t22) {
    if (!(e22 instanceof Oi)) throw new TypeError("packet must be an EncodedPacket.");
    if (e22.isMetadataOnly) throw new TypeError("Metadata-only packets cannot be added.");
    if (t22 !== void 0 && (!t22 || typeof t22 != "object")) throw new TypeError("meta, when provided, must be an object.");
    return this._ensureValidAdd(), Pd(this._connectedTrack, e22), this._connectedTrack.output._muxer.addEncodedVideoPacket(this._connectedTrack, e22, t22);
  }
}, xd = class {
  setError(e22) {
    this.errorSet || (this.error = e22, this.errorSet = !0);
  }
  constructor(e22, t22) {
    this.source = e22, this.encodingConfig = t22, this.ensureEncoderPromise = null, this.encoderInitialized = !1, this.encoder = null, this.muxer = null, this.lastMultipleOfKeyFrameInterval = -1, this.emittedEncoderPackets = 0, this.codedWidth = null, this.codedHeight = null, this.outputWidth = null, this.outputHeight = null, this.frameRateLastSample = null, this.frameRateLastTimestamp = null, this.frameRateLastEndTimestamp = null, this.preciseTimings = [], this.customEncoder = null, this.customEncoderCallSerializer = new Y(), this.customEncoderQueueSize = 0, this.defaultEncodeOptions = {}, this.alphaEncoder = null, this.splitter = null, this.splitterCreationFailed = !1, this.alphaFrameQueue = [], this.error = null, this.errorSet = !1, this.lastMuxerPromise = Promise.resolve(), this.closed = !1;
  }
  async add(e22, t22, i2) {
    var r2, a2, s2, n2, c22, l22, d22, u2, h22, m2, f22, p22;
    let g2 = e22;
    try {
      this.checkForEncoderError(), this.source._ensureValidAdd();
      let k2 = this.encodingConfig, w2 = k2.sizeChangeBehavior ?? "deny", b2 = !1;
      if (this.codedWidth !== null && this.codedHeight !== null) {
        if ((e22.codedWidth !== this.codedWidth || e22.codedHeight !== this.codedHeight) && (b2 = !0, w2 === "deny")) throw new Error(`Video sample size must remain constant. Expected ${this.codedWidth}x${this.codedHeight}, got ${e22.codedWidth}x${e22.codedHeight}. To allow the sample size to change over time, set \`sizeChangeBehavior\` to a value other than 'deny' in the encoding options.`);
      } else this.codedWidth = e22.codedWidth, this.codedHeight = e22.codedHeight;
      if (((r2 = k2.transform) == null ? void 0 : r2.width) !== void 0 || ((a2 = k2.transform) == null ? void 0 : a2.height) !== void 0 || ((s2 = k2.transform) == null ? void 0 : s2.rotate) !== void 0 || ((n2 = k2.transform) == null ? void 0 : n2.crop) !== void 0 || ((c22 = k2.transform) == null ? void 0 : c22.force) === !0 || b2 && w2 !== "passThrough") {
        let i3 = (l22 = k2.transform) == null ? void 0 : l22.width, r3 = (d22 = k2.transform) == null ? void 0 : d22.height, a3 = ((u2 = k2.transform) == null ? void 0 : u2.fit) ?? "fill";
        b2 && w2 !== "passThrough" && (o2(this.outputWidth), o2(this.outputHeight), o2(w2 !== "deny"), i3 = this.outputWidth, r3 = this.outputHeight, a3 = w2);
        let s3 = await e22.transform({ width: i3, height: r3, roundDimensionsTo: 2, crop: (h22 = k2.transform) == null ? void 0 : h22.crop, rotate: (m2 = k2.transform) == null ? void 0 : m2.rotate, fit: a3, alpha: k2.alpha });
        this.outputWidth !== null && this.outputHeight !== null || (this.outputWidth = s3.displayWidth, this.outputHeight = s3.displayHeight), t22 && e22.close(), e22 = s3, t22 = !0;
      } else this.outputWidth !== null && this.outputHeight !== null || (this.outputWidth = e22.codedWidth, this.outputHeight = e22.codedHeight);
      let v2 = (f22 = k2.transform) == null ? void 0 : f22.frameRate;
      if (v2 !== void 0) {
        let r3 = e22.timestamp + e22.duration, a3 = j(e22.timestamp, v2);
        if (this.frameRateLastSample !== null) {
          if (a3 <= this.frameRateLastTimestamp) return this.frameRateLastSample.close(), this.frameRateLastSample = e22.clone(), void (this.frameRateLastEndTimestamp = r3);
          await this.padFrameRate(a3, i2);
        }
        e22 === g2 && (e22 = e22.clone(), t22 = !0), e22.setTimestamp(a3), e22.setDuration(1 / v2), (p22 = this.frameRateLastSample) == null || p22.close(), this.frameRateLastSample = e22.clone(), this.frameRateLastTimestamp = a3, this.frameRateLastEndTimestamp = r3;
      }
      await this.processAndEncode(e22, i2);
    } finally {
      t22 && e22.close();
    }
  }
  async processAndEncode(e22, t22) {
    var i2, r2, a2;
    let s2 = this.encodingConfig, n2;
    if ((i2 = s2.transform) != null && i2.process) {
      let t3 = s2.transform.process(e22);
      if (t3 instanceof Promise && (t3 = await t3), t3 === null) return;
      Array.isArray(t3) || (t3 = [t3]);
      let i3 = [];
      try {
        for (let r3 of t3) r3 instanceof un ? i3.push(r3) : typeof VideoFrame < "u" && r3 instanceof VideoFrame ? i3.push(new un(r3)) : i3.push(new un(r3, { timestamp: e22.timestamp, duration: e22.duration }));
      } catch (c22) {
        for (let t4 of i3) t4 !== e22 && t4.close();
        for (let i4 of t3) (i4 instanceof un && i4 !== e22 || typeof VideoFrame < "u" && i4 instanceof VideoFrame) && i4.close();
        throw c22;
      }
      n2 = i3;
    } else n2 = [e22];
    try {
      for (let e3 of n2) {
        if (this.encoderInitialized || (this.ensureEncoderPromise || this.ensureEncoder(e3), this.encoderInitialized || await this.ensureEncoderPromise), o2(this.encoderInitialized), this.closed) break;
        let i3 = this.encodingConfig.keyFrameInterval ?? 2, s3 = Math.floor(e3.timestamp / i3), n3 = { ...this.defaultEncodeOptions, ...e3.encodeOptions, ...t22 }, c22 = { ...n3, keyFrame: n3.keyFrame !== void 0 ? n3.keyFrame : i3 === 0 || s3 !== this.lastMultipleOfKeyFrameInterval };
        if (this.lastMultipleOfKeyFrameInterval = s3, (a2 = (r2 = this.encodingConfig).onEncodedSample) == null || a2.call(r2, e3), this.customEncoder) {
          this.customEncoderQueueSize++;
          let t3 = e3.clone(), i4 = this.customEncoderCallSerializer.call(() => this.customEncoder.encode(t3, c22)).catch((e4) => this.setError(e4)).finally(() => {
            this.customEncoderQueueSize--, t3.close();
          });
          this.customEncoderQueueSize >= 4 && await i4;
        } else {
          o2(this.encoder);
          let t3 = e3.toVideoFrame(), i4 = A(this.preciseTimings, t3.timestamp, (e4) => e4.microsecondTimestamp), r3 = i4 !== -1 ? this.preciseTimings[i4] : null;
          if (r3 && r3.microsecondTimestamp === t3.timestamp ? (r3.timestamp !== e3.timestamp && (r3.timestampIsValid = !1), r3.duration !== e3.duration && (r3.durationIsValid = !1)) : (this.preciseTimings.splice(i4 + 1, 0, { microsecondTimestamp: t3.timestamp, timestamp: e3.timestamp, duration: e3.duration, timestampIsValid: !0, durationIsValid: !0 }), this.preciseTimings.length > 128 && this.preciseTimings.shift()), this.alphaEncoder)
            if (t3.format && !t3.format.includes("A") || this.splitterCreationFailed) {
              this.alphaFrameQueue.push(null);
              try {
                this.encoder.encode(t3, c22);
              } finally {
                t3.close();
              }
            } else {
              this.splitter || (this.splitter = new Id());
              let { colorFrame: e4, alphaFrame: i5 } = await this.splitter.split(t3);
              this.alphaFrameQueue.push(i5);
              try {
                this.encoder.encode(e4, c22);
              } finally {
                e4.close();
              }
            }
          else try {
            this.encoder.encode(t3, c22);
          } finally {
            t3.close();
          }
          this.encoder.encodeQueueSize >= 4 && await new Promise((e4) => this.encoder.addEventListener("dequeue", e4, { once: !0 }));
        }
        await this.lastMuxerPromise;
      }
    } finally {
      for (let t3 of n2) t3 !== e22 && t3.close();
    }
  }
  async padFrameRate(e22, t22) {
    let i2 = this.encodingConfig.transform.frameRate;
    o2(this.frameRateLastSample);
    let r2 = Math.round((e22 - this.frameRateLastTimestamp) * i2);
    for (let s2 = 1; s2 < r2; s2++) {
      let e3 = { stack: [], error: void 0, hasError: !1 };
      try {
        let r3 = yd(e3, this.frameRateLastSample.clone(), !1);
        r3.setTimestamp(this.frameRateLastTimestamp + s2 / i2), r3.setDuration(1 / i2), await this.processAndEncode(r3, t22);
      } catch (a2) {
        e3.error = a2, e3.hasError = !0;
      } finally {
        vd(e3);
      }
    }
  }
  ensureEncoder(e22) {
    this.ensureEncoderPromise = (async () => {
      var t22, i2, r2;
      let a2 = Gn(this.encodingConfig.quality, this.encodingConfig.bitrate);
      o2(a2 !== void 0);
      let s2 = Ln({ ...this.encodingConfig, quality: a2, width: e22.codedWidth, height: e22.codedHeight, squarePixelWidth: e22.squarePixelWidth, squarePixelHeight: e22.squarePixelHeight, framerate: (t22 = this.source._connectedTrack) == null ? void 0 : t22.metadata.frameRate }), n2, c22 = null;
      for (let e3 of s2) {
        let t3 = e3.config;
        if ((r2 = (i2 = this.encodingConfig).onEncoderConfig) == null || r2.call(i2, t3), n2 = eo.find((e4) => e4.supports(this.encodingConfig.codec, t3)), n2) {
          c22 = e3;
          break;
        }
        if (!(typeof VideoEncoder > "u")) {
          if (t3.alpha = "discard", this.encodingConfig.alpha === "keep" && (t3.latencyMode = "quality"), (t3.width % 2 == 1 || t3.height % 2 == 1) && (this.encodingConfig.codec === "avc" || this.encodingConfig.codec === "hevc")) throw new Error(`The dimensions ${t3.width}x${t3.height} are not supported for codec '${this.encodingConfig.codec}'; both width and height must be even numbers. Make sure to round your dimensions to the nearest even number.`);
          try {
            if ((await VideoEncoder.isConfigSupported(t3)).supported) {
              c22 = e3;
              break;
            }
          } catch {
          }
        }
      }
      if (!c22) {
        if (typeof VideoEncoder > "u") throw new Error(ne("VideoEncoder"));
        let e3 = s2[0].config, t3 = s2.map(({ config: e4, quantizer: t4 }) => t4 !== null ? `quantizer ${t4}` : `${e4.bitrate} bps`);
        throw new Error(`This specific encoder configuration (${e3.codec}, ${t3.join(" / ")}, ${e3.width}x${e3.height}, hardware acceleration: ${e3.hardwareAcceleration ?? "no-preference"}) is not supported in this environment. Consider using another codec or changing your video parameters.`);
      }
      let l22 = c22.config;
      if (c22.quantizer !== null && (this.defaultEncodeOptions = Kn(this.encodingConfig.codec, c22.quantizer)), n2) this.customEncoder = new n2(), this.customEncoder.codec = this.encodingConfig.codec, this.customEncoder.config = l22, this.customEncoder.onPacket = (e3, t3) => {
        var i3, r3;
        if (!(e3 instanceof Oi)) throw new TypeError("The first argument passed to onPacket must be an EncodedPacket.");
        if (t3 !== void 0 && (!t3 || typeof t3 != "object")) throw new TypeError("The second argument passed to onPacket must be an object or undefined.");
        Pd(this.source._connectedTrack, e3), (r3 = (i3 = this.encodingConfig).onEncodedPacket) == null || r3.call(i3, e3, t3), this.lastMuxerPromise = this.muxer.addEncodedVideoPacket(this.source._connectedTrack, e3, t3).catch((e4) => {
          this.setError(e4);
        });
      }, this.customEncoder.onError = (e3) => {
        this.setError(e3);
      }, await this.customEncoder.init();
      else {
        let e3 = [], t3 = [], i3 = 0, r3 = 0, a3 = (e4, t4, i4) => {
          var r4, a4;
          let s4 = {};
          if (t4) {
            let e5 = new Uint8Array(t4.byteLength);
            t4.copyTo(e5), s4.alpha = e5;
          }
          let n3 = Oi.fromEncodedChunk(e4, s4), o22 = A(this.preciseTimings, e4.timestamp, (e5) => e5.microsecondTimestamp), c3 = o22 !== -1 ? this.preciseTimings[o22] : null, l3 = null;
          this.emittedEncoderPackets === 0 && n3.type === "delta" && i4?.decoderConfig && (l3 = li(this.encodingConfig.codec, i4.decoderConfig, n3.data)), (c3 && c3.microsecondTimestamp === e4.timestamp || l3 !== null) && (n3 = n3.clone({ timestamp: c3?.timestampIsValid ? c3.timestamp : void 0, duration: c3?.durationIsValid ? c3.duration : void 0, type: l3 ?? void 0 })), Pd(this.source._connectedTrack, n3), (a4 = (r4 = this.encodingConfig).onEncodedPacket) == null || a4.call(r4, n3, i4), this.lastMuxerPromise = this.muxer.addEncodedVideoPacket(this.source._connectedTrack, n3, i4).catch((e5) => {
            this.setError(e5);
          }), this.emittedEncoderPackets++;
        }, s3 = new Error("Encoding error").stack;
        if (this.encoder = new VideoEncoder({ output: (s4, n3) => {
          if (!this.alphaEncoder) return void a3(s4, null, n3);
          let c3 = this.alphaFrameQueue.shift();
          o2(c3 !== void 0), c3 ? (this.alphaEncoder.encode(c3, { ...this.defaultEncodeOptions, keyFrame: s4.type === "key" }), r3++, c3.close(), e3.push({ chunk: s4, meta: n3 })) : r3 === 0 ? a3(s4, null, n3) : (t3.push(i3 + r3), e3.push({ chunk: s4, meta: n3 }));
        }, error: (e4) => {
          e4.stack = s3, this.setError(e4);
        } }), this.encoder.configure(l22), this.encodingConfig.alpha === "keep") {
          let s4 = new Error("Encoding error").stack;
          this.alphaEncoder = new VideoEncoder({ output: (s5, n3) => {
            r3--;
            let c3 = e3.shift();
            for (o2(c3 !== void 0), a3(c3.chunk, s5, c3.meta), i3++; t3.length > 0 && t3[0] === i3; ) {
              t3.shift();
              let i4 = e3.shift();
              o2(i4 !== void 0), a3(i4.chunk, null, i4.meta);
            }
          }, error: (e4) => {
            e4.stack = s4, this.setError(e4);
          } }), this.alphaEncoder.configure(l22);
        }
      }
      o2(this.source._connectedTrack), this.muxer = this.source._connectedTrack.output._muxer, this.encoderInitialized = !0;
    })();
  }
  async flushAndClose(e22) {
    var t22, i2, r2;
    try {
      if (!e22 && (this.checkForEncoderError(), this.frameRateLastSample)) {
        let e3 = this.encodingConfig.transform.frameRate, t3 = j(this.frameRateLastEndTimestamp, e3);
        await this.padFrameRate(t3);
      }
      this.closed = !0, e22 || (this.customEncoder ? this.customEncoderCallSerializer.call(() => this.customEncoder.flush()) : this.encoder && (await this.encoder.flush(), await ((t22 = this.alphaEncoder) == null ? void 0 : t22.flush()), await ye(25)));
    } finally {
      this.closed = !0, (i2 = this.frameRateLastSample) == null || i2.close(), this.frameRateLastSample = null, this.customEncoder ? await this.customEncoderCallSerializer.call(() => this.customEncoder.close()).catch((e3) => this.setError(e3)) : this.encoder && (this.encoder.state !== "closed" && this.encoder.close(), this.alphaEncoder && this.alphaEncoder.state !== "closed" && this.alphaEncoder.close(), this.alphaFrameQueue.forEach((e3) => e3?.close()), this.alphaFrameQueue.length = 0, (r2 = this.splitter) == null || r2.close());
    }
    e22 || this.checkForEncoderError();
  }
  getQueueSize() {
    var e22;
    return this.customEncoder ? this.customEncoderQueueSize : ((e22 = this.encoder) == null ? void 0 : e22.encodeQueueSize) ?? 0;
  }
  checkForEncoderError() {
    if (this.errorSet) throw this.error;
  }
}, Ed = null, Id = class {
  constructor() {
    this.worker = null, this.pendingRequests = /* @__PURE__ */ new Map(), this.nextRequestId = 0;
  }
  split(e22) {
    if (!this.worker) {
      if (!Ed) {
        let e3 = new Blob([`(${_d.toString()})()`], { type: "application/javascript" });
        Ed = URL.createObjectURL(e3);
      }
      this.worker = new Worker(new URL("./media-split.js", import.meta.url)), this.worker.addEventListener("message", (e3) => {
        let t3 = e3.data, i3 = this.pendingRequests.get(t3.id);
        i3 && (this.pendingRequests.delete(t3.id), "error" in t3 ? i3.reject(new Error(t3.error)) : i3.resolve({ colorFrame: t3.colorFrame, alphaFrame: t3.alphaFrame }));
      }), this.worker.addEventListener("error", (e3) => {
        let t3 = new Error(e3.message || "Color/alpha splitter worker error.");
        for (let i3 of this.pendingRequests.values()) i3.reject(t3);
        this.pendingRequests.clear();
      });
    }
    let t22 = this.nextRequestId++, i2 = F2();
    return this.pendingRequests.set(t22, i2), this.worker.postMessage({ id: t22, sourceFrame: e22 }, { transfer: [e22] }), i2.promise;
  }
  close() {
    var e22;
    (e22 = this.worker) == null || e22.terminate(), this.worker = null;
    let t22 = new Error("Color/alpha splitter closed.");
    for (let i2 of this.pendingRequests.values()) i2.reject(t22);
    this.pendingRequests.clear();
  }
}, _d = () => {
  let e22 = null, t22 = Promise.resolve();
  self.addEventListener("message", (e3) => {
    let { id: r3, sourceFrame: a3 } = e3.data;
    t22 = t22.then(async () => {
      try {
        let { colorFrame: e4, alphaFrame: t3 } = await i2(a3);
        self.postMessage({ id: r3, colorFrame: e4, alphaFrame: t3 }, { transfer: [e4, t3] });
      } catch (e4) {
        self.postMessage({ id: r3, error: e4.message });
      } finally {
        a3.close();
      }
    });
  });
  let i2 = async (t3) => {
    let i3 = t3.format;
    if (!i3) throw new Error("CPU color/alpha splitting requires a known VideoFrame format.");
    let s2 = t3.allocationSize();
    if (e22 && e22.byteLength === s2 || (e22 = new Uint8Array(s2)), await t3.copyTo(e22), i3 === "RGBA" || i3 === "BGRA") return r2(e22, i3, t3);
    if (i3 === "I420A" || i3 === "I420AP10" || i3 === "I420AP12" || i3 === "I422A" || i3 === "I422AP10" || i3 === "I422AP12" || i3 === "I444A" || i3 === "I444AP10" || i3 === "I444AP12") return a2(e22, i3, t3);
    throw new Error(`CPU color/alpha splitting does not support format '${i3}'.`);
  }, r2 = (e3, t3, i3) => {
    var r3, a3;
    let s2 = ((r3 = i3.visibleRect) == null ? void 0 : r3.width) ?? i3.codedWidth, n2 = ((a3 = i3.visibleRect) == null ? void 0 : a3.height) ?? i3.codedHeight, o22 = s2 * n2, c22 = Math.ceil(s2 / 2), l22 = Math.ceil(n2 / 2), d22 = new Uint8Array(o22 + c22 * l22 * 2);
    for (let m2 = 0, f22 = 3; m2 < o22; m2++, f22 += 4) d22[m2] = e3[f22];
    d22.fill(128, o22);
    let u2 = new VideoFrame(e3, { format: t3 === "RGBA" ? "RGBX" : "BGRX", codedWidth: s2, codedHeight: n2, timestamp: i3.timestamp, duration: i3.duration ?? void 0 }), h22 = { format: "I420", codedWidth: s2, codedHeight: n2, timestamp: i3.timestamp, duration: i3.duration ?? void 0, transfer: [d22.buffer] };
    return { colorFrame: u2, alphaFrame: new VideoFrame(d22, h22) };
  }, a2 = (e3, t3, i3) => {
    var r3, a3;
    let s2 = ((r3 = i3.visibleRect) == null ? void 0 : r3.width) ?? i3.codedWidth, n2 = ((a3 = i3.visibleRect) == null ? void 0 : a3.height) ?? i3.codedHeight, o22 = t3.includes("P10"), c22 = t3.includes("P12"), l22 = o22 || c22 ? 2 : 1, d22, u2;
    t3.startsWith("I420") ? (d22 = Math.ceil(s2 / 2), u2 = Math.ceil(n2 / 2)) : t3.startsWith("I422") ? (d22 = Math.ceil(s2 / 2), u2 = n2) : (d22 = s2, u2 = n2);
    let h22 = s2 * n2, m2 = h22 * l22, f22 = h22 * l22 + 2 * (d22 * u2 * l22), p22 = t3.replace("A", ""), g2 = Math.ceil(s2 / 2) * Math.ceil(n2 / 2), k2 = new Uint8Array(m2 + 2 * (g2 * l22)), w2 = f22;
    k2.set(e3.subarray(w2, w2 + m2), 0);
    let b2 = m2, y2 = o22 ? 512 : c22 ? 2048 : 128;
    l22 === 1 ? k2.fill(y2, b2) : new Uint16Array(k2.buffer, b2, 2 * g2).fill(y2);
    let v2 = o22 ? "I420P10" : c22 ? "I420P12" : "I420", T22 = new VideoFrame(e3.subarray(0, f22), { format: p22, codedWidth: s2, codedHeight: n2, timestamp: i3.timestamp, duration: i3.duration ?? void 0 }), S2 = { format: v2, codedWidth: s2, codedHeight: n2, timestamp: i3.timestamp, duration: i3.duration ?? void 0, transfer: [k2.buffer] };
    return { colorFrame: T22, alphaFrame: new VideoFrame(k2, S2) };
  };
}, Bd = class extends Sd {
  constructor(e22) {
    ((e3) => {
      if (!e3 || typeof e3 != "object") throw new TypeError("Encoding config must be an object.");
      if (!Ne.includes(e3.codec)) throw new TypeError(`Invalid video codec '${e3.codec}'. Must be one of: ${Ne.join(", ")}.`);
      let t22 = e3.bitrate;
      if (e3.quality === void 0 && t22 === void 0) throw new TypeError("config.quality must be provided.");
      if (e3.quality !== void 0 && t22 !== void 0) throw new TypeError("config.quality and config.bitrate cannot both be provided.");
      if (e3.quality !== void 0 && !(e3.quality instanceof qn)) throw new TypeError("config.quality, when provided, must be a Quality.");
      if (t22 !== void 0 && !(t22 instanceof qn) && (!Number.isInteger(t22) || t22 <= 0)) throw new TypeError("config.bitrate, when provided, must be a positive integer or a quality.");
      if (e3.keyFrameInterval !== void 0 && (!Number.isFinite(e3.keyFrameInterval) || e3.keyFrameInterval < 0)) throw new TypeError("config.keyFrameInterval, when provided, must be a non-negative number.");
      if (e3.sizeChangeBehavior !== void 0 && !["deny", "passThrough", "fill", "contain", "cover"].includes(e3.sizeChangeBehavior)) throw new TypeError("config.sizeChangeBehavior, when provided, must be 'deny', 'passThrough', 'fill', 'contain' or 'cover'.");
      if (e3.transform !== void 0) {
        if (typeof e3.transform != "object" || !e3.transform) throw new TypeError("config.transform, when provided, must be an object.");
        if (e3.transform.width !== void 0 && (!Number.isInteger(e3.transform.width) || e3.transform.width <= 0)) throw new TypeError("config.transform.width, when provided, must be a positive integer.");
        if (e3.transform.height !== void 0 && (!Number.isInteger(e3.transform.height) || e3.transform.height <= 0)) throw new TypeError("config.transform.height, when provided, must be a positive integer.");
        if (e3.transform.fit !== void 0 && !["fill", "contain", "cover"].includes(e3.transform.fit)) throw new TypeError('config.transform.fit, when provided, must be one of "fill", "contain", or "cover".');
        if (e3.transform.width !== void 0 && e3.transform.height !== void 0 && e3.transform.fit === void 0 && !["fill", "contain", "cover"].includes(e3.sizeChangeBehavior)) throw new TypeError("When both config.transform.width and config.transform.height are provided, config.transform.fit must also be provided.");
        if (e3.transform.fit !== void 0 && ["fill", "contain", "cover"].includes(e3.sizeChangeBehavior) && e3.transform.fit !== e3.sizeChangeBehavior) throw new TypeError("config.transform.fit, when provided, cannot differ from config.sizeChangeBehavior when config.sizeChangeBehavior is 'fill', 'contain' or 'cover', as sizeChangeBehavior already determines the fitting algorithm.");
        if (e3.transform.rotate !== void 0 && ![0, 90, 180, 270].includes(e3.transform.rotate)) throw new TypeError("config.transform.rotate, when provided, must be 0, 90, 180 or 270.");
        if (e3.transform.crop !== void 0 && bn(e3.transform.crop, "config.transform."), e3.transform.process !== void 0 && typeof e3.transform.process != "function") throw new TypeError("config.transform.process, when provided, must be a function.");
        if (e3.transform.frameRate !== void 0 && (!Number.isFinite(e3.transform.frameRate) || e3.transform.frameRate <= 0)) throw new TypeError("config.transform.frameRate, when provided, must be a finite positive number.");
        if (e3.transform.force !== void 0 && typeof e3.transform.force != "boolean") throw new TypeError("config.transform.force, when provided, must be a boolean.");
      }
      if (e3.onEncodedPacket !== void 0 && typeof e3.onEncodedPacket != "function") throw new TypeError("config.onEncodedPacket, when provided, must be a function.");
      if (e3.onEncoderConfig !== void 0 && typeof e3.onEncoderConfig != "function") throw new TypeError("config.onEncoderConfig, when provided, must be a function.");
      if (e3.onEncodedSample !== void 0 && typeof e3.onEncodedSample != "function") throw new TypeError("config.onEncodedSample, when provided, must be a function.");
      zn(e3.codec, e3);
    })(e22), super(e22.codec), this._encoder = new xd(this, e22);
  }
  add(e22, t22) {
    if (!(e22 instanceof un)) throw new TypeError("videoSample must be a VideoSample.");
    return this._encoder.add(e22, !1, t22);
  }
  _flushAndClose(e22) {
    return this._encoder.flushAndClose(e22);
  }
}, Ad = class extends Td {
  constructor(e22) {
    if (super(), this._connectedTrack = null, !Ue.includes(e22)) throw new TypeError(`Invalid audio codec '${e22}'. Must be one of: ${Ue.join(", ")}.`);
    this._codec = e22;
  }
}, Md = class extends Ad {
  constructor(e22) {
    super(e22);
  }
  add(e22, t22) {
    if (!(e22 instanceof Oi)) throw new TypeError("packet must be an EncodedPacket.");
    if (e22.isMetadataOnly) throw new TypeError("Metadata-only packets cannot be added.");
    if (t22 !== void 0 && (!t22 || typeof t22 != "object")) throw new TypeError("meta, when provided, must be an object.");
    return this._ensureValidAdd(), this._connectedTrack.output._muxer.addEncodedAudioPacket(this._connectedTrack, e22, t22);
  }
}, Fd = class {
  setError(e22) {
    this.errorSet || (this.error = e22, this.errorSet = !0);
  }
  constructor(e22, t22) {
    this.source = e22, this.encodingConfig = t22, this.ensureEncoderPromise = null, this.encoderInitialized = !1, this.encoder = null, this.muxer = null, this.lastNumberOfChannels = null, this.lastSampleRate = null, this.isPcmEncoder = !1, this.outputSampleSize = null, this.writeOutputValue = null, this.customEncoder = null, this.customEncoderCallSerializer = new Y(), this.customEncoderQueueSize = 0, this.lastEndSampleIndex = null, this.resampler = null, this.error = null, this.errorSet = !1, this.lastMuxerPromise = Promise.resolve(), this.closed = !1;
  }
  async add(e22, t22) {
    var i2, r2;
    try {
      if (this.checkForEncoderError(), this.source._ensureValidAdd(), this.lastNumberOfChannels !== null && this.lastSampleRate !== null) {
        if (e22.numberOfChannels !== this.lastNumberOfChannels || e22.sampleRate !== this.lastSampleRate) throw new Error(`Audio parameters must remain constant. Expected ${this.lastNumberOfChannels} channels at ${this.lastSampleRate} Hz, got ${e22.numberOfChannels} channels at ${e22.sampleRate} Hz.`);
      } else this.lastNumberOfChannels = e22.numberOfChannels, this.lastSampleRate = e22.sampleRate;
      let a2 = this.encodingConfig;
      ((i2 = a2.transform) == null ? void 0 : i2.numberOfChannels) !== void 0 || ((r2 = a2.transform) == null ? void 0 : r2.sampleRate) !== void 0 ? (this.resampler || (this.resampler = new bd({ targetNumberOfChannels: a2.transform.numberOfChannels ?? e22.numberOfChannels, targetSampleRate: a2.transform.sampleRate ?? e22.sampleRate, onSample: async (e3) => {
        await this.processAndEncode(e3, !0);
      } })), await this.resampler.add(e22)) : await this.processAndEncode(e22, t22);
    } finally {
      t22 && e22.close();
    }
  }
  async processAndEncode(e22, t22) {
    var i2, r2;
    let a2 = this.encodingConfig;
    if (((i2 = a2.transform) == null ? void 0 : i2.sampleFormat) !== void 0 && ((e3) => {
      switch (e3) {
        case "u8-planar":
          return "u8";
        case "s16-planar":
          return "s16";
        case "s32-planar":
          return "s32";
        case "f32-planar":
          return "f32";
        default:
          return e3;
      }
    })(e22.format) !== a2.transform.sampleFormat) {
      let i3 = ((e3, t3) => {
        let i4 = e3.allocationSize({ format: t3, planeIndex: 0 }), r3 = new ArrayBuffer(i4);
        return e3.copyTo(r3, { format: t3, planeIndex: 0 }), new _n({ data: r3, format: t3, numberOfChannels: e3.numberOfChannels, sampleRate: e3.sampleRate, timestamp: e3.timestamp, duration: e3.duration });
      })(e22, a2.transform.sampleFormat);
      t22 && e22.close(), e22 = i3, t22 = !0;
    }
    if ((r2 = a2.transform) != null && r2.process) try {
      let t3 = a2.transform.process(e22);
      if (t3 instanceof Promise && (t3 = await t3), t3 === null) return;
      Array.isArray(t3) || (t3 = [t3]);
      try {
        for (let e3 of t3) if (!(e3 instanceof _n)) throw new TypeError("The audio process function must return an AudioSample, null, or an array of AudioSamples.");
        for (let e3 of t3) await this.encodeSample(e3, !0);
      } finally {
        for (let e3 of t3) e3 instanceof _n && e3.close();
      }
    } finally {
      t22 && e22.close();
    }
    else await this.encodeSample(e22, t22);
  }
  async encodeSample(e22, t22) {
    var i2, r2;
    try {
      if (this.encoderInitialized || (this.ensureEncoderPromise || this.ensureEncoder(e22), this.encoderInitialized || await this.ensureEncoderPromise), o2(this.encoderInitialized), this.closed) return;
      {
        let t3 = Math.round(e22.timestamp * e22.sampleRate), i3 = Math.round((e22.timestamp + e22.duration) * e22.sampleRate);
        if (this.lastEndSampleIndex === null) this.lastEndSampleIndex = i3;
        else {
          let i4 = t3 - this.lastEndSampleIndex;
          if (i4 >= 64) {
            let t4 = new _n({ data: new Float32Array(i4 * e22.numberOfChannels), format: "f32-planar", sampleRate: e22.sampleRate, numberOfChannels: e22.numberOfChannels, numberOfFrames: i4, timestamp: this.lastEndSampleIndex / e22.sampleRate });
            await this.encodeSample(t4, !0);
          }
          this.lastEndSampleIndex += e22.numberOfFrames;
        }
      }
      if ((r2 = (i2 = this.encodingConfig).onEncodedSample) == null || r2.call(i2, e22), this.customEncoder) {
        this.customEncoderQueueSize++;
        let t3 = e22.clone(), i3 = this.customEncoderCallSerializer.call(() => this.customEncoder.encode(t3)).catch((e3) => this.setError(e3)).finally(() => {
          this.customEncoderQueueSize--, t3.close();
        });
        this.customEncoderQueueSize >= 4 && await i3, await this.lastMuxerPromise;
      } else if (this.isPcmEncoder) await this.doPcmEncoding(e22, t22);
      else {
        o2(this.encoder);
        let i3 = e22.toAudioData();
        this.encoder.encode(i3), i3.close(), t22 && e22.close(), this.encoder.encodeQueueSize >= 4 && await new Promise((e3) => this.encoder.addEventListener("dequeue", e3, { once: !0 })), await this.lastMuxerPromise;
      }
    } finally {
      t22 && e22.close();
    }
  }
  async doPcmEncoding(e22, t22) {
    var i2, r2;
    o2(this.outputSampleSize), o2(this.writeOutputValue);
    let { numberOfChannels: a2, numberOfFrames: s2, sampleRate: n2, timestamp: c22 } = e22, l22 = 2048, d22 = [];
    for (let o22 = 0; o22 < s2; o22 += l22) {
      let t3 = Math.min(l22, e22.numberOfFrames - o22), i3 = t3 * a2 * this.outputSampleSize, r3 = new ArrayBuffer(i3), s3 = new DataView(r3);
      d22.push({ frameCount: t3, view: s3 });
    }
    let u2 = e22.allocationSize({ planeIndex: 0, format: "f32-planar" }), h22 = new Float32Array(u2 / Float32Array.BYTES_PER_ELEMENT);
    for (let o22 = 0; o22 < a2; o22++) {
      e22.copyTo(h22, { planeIndex: o22, format: "f32-planar" });
      for (let e3 = 0; e3 < d22.length; e3++) {
        let { frameCount: t3, view: i3 } = d22[e3];
        for (let r3 = 0; r3 < t3; r3++) this.writeOutputValue(i3, (r3 * a2 + o22) * this.outputSampleSize, h22[e3 * l22 + r3]);
      }
    }
    t22 && e22.close();
    let m2 = { decoderConfig: { codec: this.encodingConfig.codec, numberOfChannels: a2, sampleRate: n2 } };
    for (let o22 = 0; o22 < d22.length; o22++) {
      let { frameCount: e3, view: t3 } = d22[o22], a3 = t3.buffer, s3 = o22 * l22, u3 = new Oi(new Uint8Array(a3), "key", c22 + s3 / n2, e3 / n2);
      (r2 = (i2 = this.encodingConfig).onEncodedPacket) == null || r2.call(i2, u3, m2), await this.muxer.addEncodedAudioPacket(this.source._connectedTrack, u3, m2);
    }
  }
  ensureEncoder(e22) {
    this.ensureEncoderPromise = (async () => {
      var t22, i2;
      let { numberOfChannels: r2, sampleRate: a2 } = e22, s2 = Gn(this.encodingConfig.quality, this.encodingConfig.bitrate), n2 = Wn({ numberOfChannels: r2, sampleRate: a2, ...this.encodingConfig, quality: s2 });
      (i2 = (t22 = this.encodingConfig).onEncoderConfig) == null || i2.call(t22, n2);
      let c22 = to.find((e3) => e3.supports(this.encodingConfig.codec, n2));
      if (c22) this.customEncoder = new c22(), this.customEncoder.codec = this.encodingConfig.codec, this.customEncoder.config = n2, this.customEncoder.onPacket = (e3, t3) => {
        var i3, r3;
        if (!(e3 instanceof Oi)) throw new TypeError("The first argument passed to onPacket must be an EncodedPacket.");
        if (t3 !== void 0 && (!t3 || typeof t3 != "object")) throw new TypeError("The second argument passed to onPacket must be an object or undefined.");
        (r3 = (i3 = this.encodingConfig).onEncodedPacket) == null || r3.call(i3, e3, t3), this.lastMuxerPromise = this.muxer.addEncodedAudioPacket(this.source._connectedTrack, e3, t3).catch((e4) => {
          this.setError(e4);
        });
      }, this.customEncoder.onError = (e3) => {
        this.setError(e3);
      }, await this.customEncoder.init();
      else if (ze.includes(this.encodingConfig.codec)) this.initPcmEncoder();
      else {
        if (typeof AudioEncoder > "u") throw new Error(ne("AudioEncoder"));
        let e3;
        try {
          e3 = (await AudioEncoder.isConfigSupported(n2)).supported ?? !1;
        } catch {
          e3 = !1;
        }
        if (!e3) throw new Error(`This specific encoder configuration (${n2.codec}, ${n2.bitrate} bps, ${n2.numberOfChannels} channels, ${n2.sampleRate} Hz) is not supported in this environment. Consider using another codec or changing your audio parameters.`);
        let t3 = new Error("Encoding error").stack;
        this.encoder = new AudioEncoder({ output: (e4, t4) => {
          var i3, r3;
          if (this.encodingConfig.codec === "aac" && t4?.decoderConfig) {
            let e5 = !1;
            if (!t4.decoderConfig.description || t4.decoderConfig.description.byteLength < 2 ? e5 = !0 : e5 = De2(m(t4.decoderConfig.description)).objectType === 0, e5) {
              let e6 = Number(l2(n2.codec.split(".")));
              t4.decoderConfig.description = Oe2({ objectType: e6, numberOfChannels: t4.decoderConfig.numberOfChannels, sampleRate: t4.decoderConfig.sampleRate });
            }
          }
          let a3 = Oi.fromEncodedChunk(e4);
          a3 = a3.clone({ timestamp: H(a3.timestamp, n2.sampleRate), duration: e4.duration != null ? H(a3.duration, n2.sampleRate) : void 0 }), (r3 = (i3 = this.encodingConfig).onEncodedPacket) == null || r3.call(i3, a3, t4), this.lastMuxerPromise = this.muxer.addEncodedAudioPacket(this.source._connectedTrack, a3, t4).catch((e5) => {
            this.setError(e5);
          });
        }, error: (e4) => {
          e4.stack = t3, this.setError(e4);
        } }), this.encoder.configure(n2);
      }
      o2(this.source._connectedTrack), this.muxer = this.source._connectedTrack.output._muxer, this.encoderInitialized = !0;
    })();
  }
  initPcmEncoder() {
    this.isPcmEncoder = !0;
    let e22 = this.encodingConfig.codec, { dataType: t22, sampleSize: i2, littleEndian: r2 } = at(e22);
    switch (this.outputSampleSize = i2, i2) {
      case 1:
        t22 === "unsigned" ? this.writeOutputValue = (e3, t3, i3) => e3.setUint8(t3, U(127.5 * (i3 + 1), 0, 255)) : t22 === "signed" ? this.writeOutputValue = (e3, t3, i3) => {
          e3.setInt8(t3, U(Math.round(128 * i3), -128, 127));
        } : t22 === "ulaw" ? this.writeOutputValue = (e3, t3, i3) => {
          let r3 = U(Math.floor(32767 * i3), -32768, 32767);
          e3.setUint8(t3, ((e4) => {
            let t4 = e4, i4 = 4096, r4 = 0, a2 = 12, s2 = 0;
            for (t4 < 0 && (t4 = -t4, r4 = 128), t4 += 33, t4 > 8191 && (t4 = 8191); (t4 & i4) !== i4 && a2 >= 5; ) i4 >>= 1, a2--;
            return s2 = t4 >> a2 - 4 & 15, 255 & ~(r4 | a2 - 5 << 4 | s2);
          })(r3));
        } : t22 === "alaw" ? this.writeOutputValue = (e3, t3, i3) => {
          let r3 = U(Math.floor(32767 * i3), -32768, 32767);
          e3.setUint8(t3, ((e4) => {
            let t4 = 2048, i4 = 0, r4 = 11, a2 = 0, s2 = e4;
            for (s2 < 0 && (s2 = -s2, i4 = 128), s2 > 4095 && (s2 = 4095); (s2 & t4) !== t4 && r4 >= 5; ) t4 >>= 1, r4--;
            return a2 = s2 >> (r4 === 4 ? 1 : r4 - 4) & 15, 85 ^ (i4 | r4 - 4 << 4 | a2);
          })(r3));
        } : o2(!1);
        break;
      case 2:
        t22 === "unsigned" ? this.writeOutputValue = (e3, t3, i3) => e3.setUint16(t3, U(32767.5 * (i3 + 1), 0, 65535), r2) : t22 === "signed" ? this.writeOutputValue = (e3, t3, i3) => e3.setInt16(t3, U(Math.round(32767 * i3), -32768, 32767), r2) : o2(!1);
        break;
      case 3:
        t22 === "unsigned" ? this.writeOutputValue = (e3, t3, i3) => L2(e3, t3, U(83886075e-1 * (i3 + 1), 0, 16777215), r2) : t22 === "signed" ? this.writeOutputValue = (e3, t3, i3) => ((e4, t4, i4, r3) => {
          (i4 = U(i4, -8388608, 8388607)) < 0 && (i4 = i4 + 16777216 & 16777215), L2(e4, t4, i4, r3);
        })(e3, t3, U(Math.round(8388607 * i3), -8388608, 8388607), r2) : o2(!1);
        break;
      case 4:
        t22 === "unsigned" ? this.writeOutputValue = (e3, t3, i3) => e3.setUint32(t3, U(21474836475e-1 * (i3 + 1), 0, 4294967295), r2) : t22 === "signed" ? this.writeOutputValue = (e3, t3, i3) => e3.setInt32(t3, U(Math.round(2147483647 * i3), -2147483648, 2147483647), r2) : t22 === "float" ? this.writeOutputValue = (e3, t3, i3) => e3.setFloat32(t3, i3, r2) : o2(!1);
        break;
      case 8:
        t22 === "float" ? this.writeOutputValue = (e3, t3, i3) => e3.setFloat64(t3, i3, r2) : o2(!1);
        break;
      default:
        N(i2), o2(!1);
    }
  }
  async flushAndClose(e22) {
    try {
      e22 || (this.checkForEncoderError(), this.resampler && await this.resampler.finalize()), this.closed = !0, e22 || (this.customEncoder ? this.customEncoderCallSerializer.call(() => this.customEncoder.flush()) : this.encoder && await this.encoder.flush());
    } finally {
      this.closed = !0, this.resampler = null, this.customEncoder ? await this.customEncoderCallSerializer.call(() => this.customEncoder.close()).catch((e3) => this.setError(e3)) : this.encoder && this.encoder.state !== "closed" && this.encoder.close();
    }
    e22 || this.checkForEncoderError();
  }
  getQueueSize() {
    var e22;
    return this.customEncoder ? this.customEncoderQueueSize : this.isPcmEncoder ? 0 : ((e22 = this.encoder) == null ? void 0 : e22.encodeQueueSize) ?? 0;
  }
  checkForEncoderError() {
    if (this.errorSet) throw this.error;
  }
}, Rd = class extends Ad {
  constructor(e22) {
    ((e3) => {
      if (!e3 || typeof e3 != "object") throw new TypeError("Encoding config must be an object.");
      if (!Ue.includes(e3.codec)) throw new TypeError(`Invalid audio codec '${e3.codec}'. Must be one of: ${Ue.join(", ")}.`);
      let t22 = e3.bitrate;
      if (e3.quality === void 0 && t22 === void 0 && !ze.includes(e3.codec) && e3.codec !== "flac") throw new TypeError("config.quality must be provided for compressed audio codecs.");
      if (e3.quality !== void 0 && t22 !== void 0) throw new TypeError("config.quality and config.bitrate cannot both be provided.");
      if (e3.quality !== void 0 && !(e3.quality instanceof qn)) throw new TypeError("config.quality, when provided, must be a Quality.");
      if (t22 !== void 0 && !(t22 instanceof qn) && (!Number.isInteger(t22) || t22 <= 0)) throw new TypeError("config.bitrate, when provided, must be a positive integer or a quality.");
      if (e3.transform !== void 0) {
        if (typeof e3.transform != "object" || !e3.transform) throw new TypeError("config.transform, when provided, must be an object.");
        if (e3.transform.numberOfChannels !== void 0 && (!Number.isInteger(e3.transform.numberOfChannels) || e3.transform.numberOfChannels <= 0)) throw new TypeError("config.transform.numberOfChannels, when provided, must be a positive integer.");
        if (e3.transform.sampleRate !== void 0 && (!Number.isInteger(e3.transform.sampleRate) || e3.transform.sampleRate <= 0)) throw new TypeError("config.transform.sampleRate, when provided, must be a positive integer.");
        if (e3.transform.sampleFormat !== void 0 && !["u8", "s16", "s32", "f32"].includes(e3.transform.sampleFormat)) throw new TypeError("config.transform.sampleFormat, when provided, must be one of: u8, s16, s32, f32.");
        if (e3.transform.process !== void 0 && typeof e3.transform.process != "function") throw new TypeError("config.transform.process, when provided, must be a function.");
      }
      if (e3.onEncodedPacket !== void 0 && typeof e3.onEncodedPacket != "function") throw new TypeError("config.onEncodedPacket, when provided, must be a function.");
      if (e3.onEncoderConfig !== void 0 && typeof e3.onEncoderConfig != "function") throw new TypeError("config.onEncoderConfig, when provided, must be a function.");
      if (e3.onEncodedSample !== void 0 && typeof e3.onEncodedSample != "function") throw new TypeError("config.onEncodedSample, when provided, must be a function.");
      Un(e3.codec, e3);
    })(e22), super(e22.codec), this._encoder = new Fd(this, e22);
  }
  add(e22) {
    if (!(e22 instanceof _n)) throw new TypeError("audioSample must be an AudioSample.");
    return this._encoder.add(e22, !1);
  }
  _flushAndClose(e22) {
    return this._encoder.flushAndClose(e22);
  }
}, Dd = class extends Td {
  constructor(e22) {
    if (super(), this._connectedTrack = null, !We.includes(e22)) throw new TypeError(`Invalid subtitle codec '${e22}'. Must be one of: ${We.join(", ")}.`);
    this._codec = e22;
  }
};
var Od = class {
  getSupportedVideoCodecs() {
    return this.getSupportedCodecs().filter((e22) => Ne.includes(e22));
  }
  getSupportedAudioCodecs() {
    return this.getSupportedCodecs().filter((e22) => Ue.includes(e22));
  }
  getSupportedSubtitleCodecs() {
    return this.getSupportedCodecs().filter((e22) => We.includes(e22));
  }
  _codecUnsupportedHint(e22) {
    return "";
  }
  _isFragmentedIsobmff() {
    return !1;
  }
}, Nd = class extends Od {
  constructor(e22 = {}) {
    if (!e22 || typeof e22 != "object") throw new TypeError("options must be an object.");
    if (e22.fastStart !== void 0 && ![!1, "in-memory", "reserve", "fragmented"].includes(e22.fastStart)) throw new TypeError("options.fastStart, when provided, must be false, 'in-memory', 'reserve', or 'fragmented'.");
    if (e22.minimumFragmentDuration !== void 0 && (!Number.isFinite(e22.minimumFragmentDuration) || e22.minimumFragmentDuration < 0)) throw new TypeError("options.minimumFragmentDuration, when provided, must be a non-negative number.");
    if (e22.onFtyp !== void 0 && typeof e22.onFtyp != "function") throw new TypeError("options.onFtyp, when provided, must be a function.");
    if (e22.onMoov !== void 0 && typeof e22.onMoov != "function") throw new TypeError("options.onMoov, when provided, must be a function.");
    if (e22.onMdat !== void 0 && typeof e22.onMdat != "function") throw new TypeError("options.onMdat, when provided, must be a function.");
    if (e22.onMoof !== void 0 && typeof e22.onMoof != "function") throw new TypeError("options.onMoof, when provided, must be a function.");
    if (e22.metadataFormat !== void 0 && !["mdir", "mdta", "udta", "auto"].includes(e22.metadataFormat)) throw new TypeError("options.metadataFormat, when provided, must be either 'auto', 'mdir', 'mdta', or 'udta'.");
    super(), this._options = e22;
  }
  getSupportedTrackCounts() {
    return { video: { min: 0, max: 4294967295 }, audio: { min: 0, max: 4294967295 }, subtitle: { min: 0, max: 4294967295 }, total: { min: 0, max: 4294967295 } };
  }
  get supportsVideoRotationMetadata() {
    return !0;
  }
  get supportsTimestampedMediaData() {
    return !0;
  }
  _createMuxer(e22) {
    return new pd(e22, this);
  }
  _isFragmentedIsobmff() {
    return this._options.fastStart === "fragmented";
  }
}, zd = class extends Nd {
  constructor(e22) {
    super(e22);
  }
  get _name() {
    return "MP4";
  }
  get fileExtension() {
    return ".mp4";
  }
  get mimeType() {
    return "video/mp4";
  }
  getSupportedCodecs() {
    return [...Ne, ...Le2, "pcm-s16", "pcm-s16be", "pcm-s24", "pcm-s24be", "pcm-s32", "pcm-s32be", "pcm-f32", "pcm-f32be", "pcm-f64", "pcm-f64be", ...We];
  }
  _codecUnsupportedHint(e22) {
    return new Ud().getSupportedCodecs().includes(e22) ? " Switching to MOV will grant support for this codec." : "";
  }
}, Ld = class extends Nd {
  constructor(e22) {
    super(e22);
  }
  get _name() {
    return "CMAF";
  }
  get fileExtension() {
    return ".m4s";
  }
  get mimeType() {
    return "video/mp4";
  }
  getSupportedCodecs() {
    return [...Ne, ...Le2, "pcm-s16", "pcm-s16be", "pcm-s24", "pcm-s24be", "pcm-s32", "pcm-s32be", "pcm-f32", "pcm-f32be", "pcm-f64", "pcm-f64be", ...We];
  }
}, Ud = class extends Nd {
  constructor(e22) {
    super(e22);
  }
  get _name() {
    return "MOV";
  }
  get fileExtension() {
    return ".mov";
  }
  get mimeType() {
    return "video/quicktime";
  }
  getSupportedCodecs() {
    return [...Ne, ...Ue];
  }
  _codecUnsupportedHint(e22) {
    return new zd().getSupportedCodecs().includes(e22) ? " Switching to MP4 will grant support for this codec." : "";
  }
}, Wd = class extends Od {
  constructor(e22 = {}) {
    if (!e22 || typeof e22 != "object") throw new TypeError("options must be an object.");
    if (e22.appendOnly !== void 0 && typeof e22.appendOnly != "boolean") throw new TypeError("options.appendOnly, when provided, must be a boolean.");
    if (e22.minimumClusterDuration !== void 0 && (!Number.isFinite(e22.minimumClusterDuration) || e22.minimumClusterDuration < 0)) throw new TypeError("options.minimumClusterDuration, when provided, must be a non-negative number.");
    if (e22.onEbmlHeader !== void 0 && typeof e22.onEbmlHeader != "function") throw new TypeError("options.onEbmlHeader, when provided, must be a function.");
    if (e22.onSegmentHeader !== void 0 && typeof e22.onSegmentHeader != "function") throw new TypeError("options.onHeader, when provided, must be a function.");
    if (e22.onCluster !== void 0 && typeof e22.onCluster != "function") throw new TypeError("options.onCluster, when provided, must be a function.");
    super(), this._options = e22;
  }
  _createMuxer(e22) {
    return new wd(e22, this);
  }
  get _name() {
    return "Matroska";
  }
  getSupportedTrackCounts() {
    return { video: { min: 0, max: 127 }, audio: { min: 0, max: 127 }, subtitle: { min: 0, max: 127 }, total: { min: 0, max: 127 } };
  }
  get fileExtension() {
    return ".mkv";
  }
  get mimeType() {
    return "video/x-matroska";
  }
  getSupportedCodecs() {
    return [...Ne, ...Le2, ...ze.filter((e22) => !["pcm-s8", "pcm-f32be", "pcm-f64be", "ulaw", "alaw"].includes(e22)), ...We];
  }
  get supportsVideoRotationMetadata() {
    return !1;
  }
  get supportsTimestampedMediaData() {
    return !0;
  }
}, qd = class extends Wd {
  constructor(e22) {
    super(e22);
  }
  getSupportedCodecs() {
    return [...Ne.filter((e22) => ["vp8", "vp9", "av1"].includes(e22)), ...Ue.filter((e22) => ["opus", "vorbis"].includes(e22)), ...We];
  }
  get _name() {
    return "WebM";
  }
  get fileExtension() {
    return ".webm";
  }
  get mimeType() {
    return "video/webm";
  }
  _codecUnsupportedHint(e22) {
    return new Wd().getSupportedCodecs().includes(e22) ? " Switching to MKV will grant support for this codec." : "";
  }
};
var Vd = ["video", "audio", "subtitle"], Hd = class _Hd {
  constructor(e22, t22, i2, r2, a2) {
    this.id = e22, this.output = t22, this.type = i2, this.source = r2, this.metadata = a2;
  }
  isVideoTrack() {
    return this.type === "video";
  }
  isAudioTrack() {
    return this.type === "audio";
  }
  isSubtitleTrack() {
    return this.type === "subtitle";
  }
  canBePairedWith(e22) {
    if (!(e22 instanceof _Hd)) throw new TypeError("other must be an OutputTrack.");
    if (this === e22) return !1;
    let t22 = ve(this.metadata.group), i2 = ve(e22.metadata.group);
    for (let r2 of t22)
      if (this.type !== e22.type && i2.some((e3) => r2 === e3) || i2.some((e3) => r2._pairedGroups.has(e3))) return !0;
    return !1;
  }
}, $d = class extends Hd {
  constructor(e22, t22, i2, r2) {
    super(e22, t22, "video", i2, r2);
  }
}, jd = class extends Hd {
  constructor(e22, t22, i2, r2) {
    super(e22, t22, "audio", i2, r2);
  }
}, Kd = class extends Hd {
  constructor(e22, t22, i2, r2) {
    super(e22, t22, "subtitle", i2, r2);
  }
}, Qd = class _Qd {
  constructor() {
    this._pairedGroups = /* @__PURE__ */ new Set();
  }
  pairWith(e22) {
    if (!(e22 instanceof _Qd)) throw new TypeError("other must be an OutputTrackGroup.");
    if (this === e22) throw new TypeError("Cannot pair a group with itself.");
    this._pairedGroups.add(e22), e22._pairedGroups.add(this);
  }
}, Gd = (e22) => {
  if (!e22 || typeof e22 != "object") throw new TypeError("metadata must be an object.");
  if (e22.languageCode !== void 0 && !G(e22.languageCode)) throw new TypeError("metadata.languageCode, when provided, must be a three-letter, ISO 639-2/T language code.");
  if (e22.name !== void 0 && typeof e22.name != "string") throw new TypeError("metadata.name, when provided, must be a string.");
  if (e22.disposition !== void 0 && ((e3) => {
    if (!e3 || typeof e3 != "object") throw new TypeError("disposition must be an object.");
    if (e3.default !== void 0 && typeof e3.default != "boolean") throw new TypeError("disposition.default must be a boolean.");
    if (e3.primary !== void 0 && typeof e3.primary != "boolean") throw new TypeError("disposition.primary must be a boolean.");
    if (e3.forced !== void 0 && typeof e3.forced != "boolean") throw new TypeError("disposition.forced must be a boolean.");
    if (e3.original !== void 0 && typeof e3.original != "boolean") throw new TypeError("disposition.original must be a boolean.");
    if (e3.commentary !== void 0 && typeof e3.commentary != "boolean") throw new TypeError("disposition.commentary must be a boolean.");
    if (e3.hearingImpaired !== void 0 && typeof e3.hearingImpaired != "boolean") throw new TypeError("disposition.hearingImpaired must be a boolean.");
    if (e3.visuallyImpaired !== void 0 && typeof e3.visuallyImpaired != "boolean") throw new TypeError("disposition.visuallyImpaired must be a boolean.");
  })(e22.disposition), e22.maximumPacketCount !== void 0 && (!Number.isInteger(e22.maximumPacketCount) || e22.maximumPacketCount < 0)) throw new TypeError("metadata.maximumPacketCount, when provided, must be a non-negative integer.");
  if (e22.group !== void 0 && !(e22.group instanceof Qd) && (!Array.isArray(e22.group) || e22.group.some((e3) => !(e3 instanceof Qd)))) throw new TypeError("metadata.group, when provided, must be an OutputTrackGroup instance or an array of OutputTrackGroup instances.");
}, Xd = class extends Te {
  get target() {
    let e22 = "Output.target cannot be used when using PathedTarget with an async callback. Use the 'target' event instead.";
    if (this._rootTargetPromise) throw new TypeError(e22);
    let t22 = this._getRootTarget();
    if (t22 instanceof Promise) throw new TypeError(e22);
    return t22;
  }
  constructor(e22) {
    if (super(), this.state = "pending", this.defaultTrackGroup = new Qd(), this.tracks = [], this._onFinalize = null, this._unfinalizedTargets = /* @__PURE__ */ new Set(), this._rootWriterPromise = null, this._startPromise = null, this._cancelPromise = null, this._finalizePromise = null, this._mutex = new x(), this._metadataTags = {}, this._rootTarget = null, this._rootTargetPromise = null, this._firstMediaStreamTimestamp = null, !e22 || typeof e22 != "object") throw new TypeError("options must be an object.");
    if (!(e22.format instanceof Od)) throw new TypeError("options.format must be an OutputFormat.");
    if (!(e22.target instanceof sd || e22.target instanceof ud)) throw new TypeError("options.target must be a Target or a PathedTarget.");
    if (e22.target instanceof sd && this._rememberTarget(e22.target), e22.initTarget !== void 0 && !(e22.initTarget instanceof sd) && typeof e22.initTarget != "function") throw new Error("options.initTarget, when provided, must be a Target or a function that returns or resolves to a Target.");
    if (e22.onFinalize !== void 0 && typeof e22.onFinalize != "function") throw new TypeError("options.onFinalize, when provided, must be a function.");
    this.format = e22.format, this._target = e22.target, this._onFinalize = e22.onFinalize ?? null, this._initTarget = e22.initTarget ?? null, this._initTarget instanceof sd && this._rememberTarget(this._initTarget), this._muxer = e22.format._createMuxer(this);
  }
  _getTargetValidated(e22) {
    o2(this._target instanceof ud);
    let t22 = this._target.getTarget(e22), i2 = (e3) => {
      if (!(e3 instanceof sd)) throw new TypeError("getTarget must return a Target.");
      return e3;
    };
    return t22 instanceof Promise ? t22.then(i2) : i2(t22);
  }
  async _getTarget(e22) {
    o2(this._target instanceof ud);
    let t22 = await this._getTargetValidated(e22);
    return this._emit("target", { target: t22, request: e22, isRoot: e22.isRoot }), this.state === "canceled" ? await t22._close() : this._rememberTarget(t22), t22;
  }
  _rememberTarget(e22) {
    this._unfinalizedTargets.add(e22), e22.on("finalized", () => this._unfinalizedTargets.delete(e22), { once: !0 });
  }
  async _getInitTarget() {
    if (o2(this._initTarget !== null), this._initTarget instanceof sd) return this._initTarget;
    let e22 = await this._initTarget();
    return this.state === "canceled" ? await e22._close() : this._rememberTarget(e22), e22;
  }
  _hasInitTarget() {
    return this._initTarget !== null;
  }
  _getRootTarget() {
    if (this._rootTarget) return this._rootTarget;
    if (this._rootTargetPromise) return this._rootTargetPromise;
    if (this._target instanceof sd) return this._emit("target", { target: this._target, request: null, isRoot: !0 }), this._rootTarget = this._target, this._target;
    let e22 = { path: this._target.rootPath, isRoot: !0, mimeType: this.format.mimeType }, t22 = this._getTargetValidated(e22), i2 = (t3) => (this.state === "canceled" ? t3._close() : this._rememberTarget(t3), this._emit("target", { target: t3, request: e22, isRoot: !0 }), this._rootTarget = t3, t3);
    return t22 instanceof Promise ? this._rootTargetPromise = t22.then(i2) : i2(t22);
  }
  _getRootWriter(e22) {
    return this._rootWriterPromise ?? (this._rootWriterPromise = (async () => {
      let t22 = await this._getRootTarget(), i2 = new ad(t22, typeof e22 == "boolean" ? e22 : e22(t22));
      return i2.start(), i2;
    })());
  }
  addVideoTrack(e22, t22 = {}) {
    if (!(e22 instanceof Sd)) throw new TypeError("source must be a VideoSource.");
    if (Gd(t22), t22.rotation !== void 0 && ![0, 90, 180, 270].includes(t22.rotation)) throw new TypeError(`Invalid video rotation: ${t22.rotation}. Has to be 0, 90, 180 or 270.`);
    if (!this.format.supportsVideoRotationMetadata && t22.rotation) throw new Error(`${this.format._name} does not support video rotation metadata.`);
    if (t22.frameRate !== void 0 && (!Number.isFinite(t22.frameRate) || t22.frameRate <= 0)) throw new TypeError(`Invalid video frame rate: ${t22.frameRate}. Must be a positive number.`);
    if (t22.decoderConfig !== void 0 && ut({ decoderConfig: t22.decoderConfig }, e22._codec), t22.primingPacket !== void 0) {
      if (!(t22.primingPacket instanceof Oi)) throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");
      if (t22.decoderConfig === void 0) throw new TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.");
    }
    let i2 = { ...t22 };
    return i2.group ?? (i2.group = this.defaultTrackGroup), this._addTrack(new $d(this.tracks.length + 1, this, e22, i2));
  }
  addAudioTrack(e22, t22 = {}) {
    if (!(e22 instanceof Ad)) throw new TypeError("source must be an AudioSource.");
    if (Gd(t22), t22.decoderConfig !== void 0 && mt({ decoderConfig: t22.decoderConfig }, e22._codec), t22.primingPacket !== void 0) {
      if (!(t22.primingPacket instanceof Oi)) throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");
      if (t22.decoderConfig === void 0) throw new TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.");
    }
    let i2 = { ...t22 };
    return i2.group ?? (i2.group = this.defaultTrackGroup), this._addTrack(new jd(this.tracks.length + 1, this, e22, i2));
  }
  addSubtitleTrack(e22, t22 = {}) {
    if (!(e22 instanceof Dd)) throw new TypeError("source must be a SubtitleSource.");
    Gd(t22);
    let i2 = { ...t22 };
    return i2.group ?? (i2.group = this.defaultTrackGroup), this._addTrack(new Kd(this.tracks.length + 1, this, e22, i2));
  }
  setMetadataTags(e22) {
    if (Be(e22), this.state !== "pending") throw new Error("Cannot set metadata tags after output has been started or canceled.");
    this._metadataTags = e22;
  }
  _addTrack(e22) {
    if (this.state !== "pending") throw new Error("Cannot add track after output has been started or canceled.");
    if (e22.source._connectedTrack) throw new Error("Source is already used for a track.");
    let t22 = this.format.getSupportedTrackCounts(), i2 = this.tracks.reduce((t3, i3) => t3 + (i3.type === e22.type ? 1 : 0), 0), r2 = t22[e22.type].max;
    if (i2 === r2) throw new Error(r2 === 0 ? `${this.format._name} does not support ${e22.type} tracks.` : `${this.format._name} does not support more than ${r2} ${e22.type} track${r2 === 1 ? "" : "s"}.`);
    let a2 = t22.total.max;
    if (this.tracks.length === a2) throw new Error(`${this.format._name} does not support more than ${a2} tracks${a2 === 1 ? "" : "s"} in total.`);
    if (e22.isVideoTrack()) {
      let t3 = this.format.getSupportedVideoCodecs();
      if (t3.length === 0) throw new Error(`${this.format._name} does not support video tracks.` + this.format._codecUnsupportedHint(e22.source._codec));
      if (!t3.includes(e22.source._codec)) throw new Error(`Codec '${e22.source._codec}' cannot be contained within ${this.format._name}. Supported video codecs are: ${t3.map((e3) => `'${e3}'`).join(", ")}.` + this.format._codecUnsupportedHint(e22.source._codec));
    } else if (e22.isAudioTrack()) {
      let t3 = this.format.getSupportedAudioCodecs();
      if (t3.length === 0) throw new Error(`${this.format._name} does not support audio tracks.` + this.format._codecUnsupportedHint(e22.source._codec));
      if (!t3.includes(e22.source._codec)) throw new Error(`Codec '${e22.source._codec}' cannot be contained within ${this.format._name}. Supported audio codecs are: ${t3.map((e3) => `'${e3}'`).join(", ")}.` + this.format._codecUnsupportedHint(e22.source._codec));
    } else if (e22.isSubtitleTrack()) {
      let t3 = this.format.getSupportedSubtitleCodecs();
      if (t3.length === 0) throw new Error(`${this.format._name} does not support subtitle tracks.` + this.format._codecUnsupportedHint(e22.source._codec));
      if (!t3.includes(e22.source._codec)) throw new Error(`Codec '${e22.source._codec}' cannot be contained within ${this.format._name}. Supported subtitle codecs are: ${t3.map((e3) => `'${e3}'`).join(", ")}.` + this.format._codecUnsupportedHint(e22.source._codec));
    }
    return this.tracks.push(e22), e22.source._connectedTrack = e22, e22;
  }
  hasEnoughTracks() {
    let e22 = this.format.getSupportedTrackCounts();
    for (let i2 of Vd)
      if (this.tracks.reduce((e3, t3) => e3 + (t3.type === i2 ? 1 : 0), 0) < e22[i2].min) return !1;
    let t22 = e22.total.min;
    return !(this.tracks.length < t22);
  }
  async start() {
    let e22 = this.format.getSupportedTrackCounts();
    for (let i2 of Vd) {
      let t3 = this.tracks.reduce((e3, t4) => e3 + (t4.type === i2 ? 1 : 0), 0), r2 = e22[i2].min;
      if (t3 < r2) throw new Error(r2 === e22[i2].max ? `${this.format._name} requires exactly ${r2} ${i2} track${r2 === 1 ? "" : "s"}.` : `${this.format._name} requires at least ${r2} ${i2} track${r2 === 1 ? "" : "s"}.`);
    }
    let t22 = e22.total.min;
    if (this.tracks.length < t22) throw new Error(t22 === e22.total.max ? `${this.format._name} requires exactly ${t22} track${t22 === 1 ? "" : "s"}.` : `${this.format._name} requires at least ${t22} track${t22 === 1 ? "" : "s"}.`);
    if (this.state === "canceled") throw new Error("Output has been canceled.");
    return this._startPromise ? (Ee._warn("Output has already been started."), this._startPromise) : this._startPromise = (async () => {
      this.state = "started";
      let e3 = this._mutex.acquire();
      try {
        await this._muxer.start();
        let e4 = this.tracks.map((e5) => e5.source._start());
        await Promise.all(e4);
      } finally {
        (await e3)();
      }
    })();
  }
  getMimeType() {
    return this._muxer.getMimeType();
  }
  async cancel() {
    return this._cancelPromise ? (Ee._warn("Output has already been canceled."), this._cancelPromise) : this.state !== "finalizing" && this.state !== "finalized" ? this._cancelPromise = (async () => {
      this.state = "canceled";
      let e22 = await this._mutex.acquire();
      try {
        let e3 = this.tracks.map((e4) => e4.source._flushOrWaitForOngoingClose(!0));
        await Promise.all(e3), await Promise.all([...this._unfinalizedTargets].map((e4) => e4._close())), this._unfinalizedTargets.clear();
      } finally {
        e22();
      }
    })() : void (this.state === "finalized" && Ee._warn("Output has already been finalized."));
  }
  async finalize() {
    if (this.state === "pending") throw new Error("Cannot finalize before starting.");
    if (this.state === "canceled") throw new Error("Cannot finalize after canceling.");
    return this._finalizePromise ? (Ee._warn("Output has already been finalized."), this._finalizePromise) : this._finalizePromise = (async () => {
      this.state = "finalizing";
      let e22 = await this._mutex.acquire();
      try {
        let e3 = this.tracks.map((e4) => e4.source._flushOrWaitForOngoingClose(!1));
        if (await Promise.all(e3), await this._muxer.finalize(), this._rootWriterPromise) {
          let e4 = await this._rootWriterPromise;
          e4.finalized || (await e4.flush(), await e4.finalize());
        }
        this._onFinalize && await this._onFinalize(), this.state = "finalized";
      } finally {
        await Promise.all([...this._unfinalizedTargets].map((e3) => e3._close().catch(() => {
        }))), this._unfinalizedTargets.clear(), e22();
      }
    })();
  }
};
var Yd = function(e22, t22, i2) {
  if (t22 != null) {
    if (typeof t22 != "object" && typeof t22 != "function") throw new TypeError("Object expected.");
    var r2, a2;
    if (i2) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      r2 = t22[Symbol.asyncDispose];
    }
    if (r2 === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      r2 = t22[Symbol.dispose], i2 && (a2 = r2);
    }
    if (typeof r2 != "function") throw new TypeError("Object not disposable.");
    a2 && (r2 = function() {
      try {
        a2.call(this);
      } catch (e3) {
        return Promise.reject(e3);
      }
    }), e22.stack.push({ value: t22, dispose: r2, async: i2 });
  } else i2 && e22.stack.push({ async: !0 });
  return t22;
}, Jd = /* @__PURE__ */ (function(e22) {
  return function(t22) {
    function i2(i3) {
      t22.error = t22.hasError ? new e22(i3, t22.error, "An error was suppressed during disposal.") : i3, t22.hasError = !0;
    }
    var r2, a2 = 0;
    return (function e3() {
      for (; r2 = t22.stack.pop(); ) try {
        if (!r2.async && a2 === 1) return a2 = 0, t22.stack.push(r2), Promise.resolve().then(e3);
        if (r2.dispose) {
          var s2 = r2.dispose.call(r2.value);
          if (r2.async) return a2 |= 2, Promise.resolve(s2).then(e3, function(t3) {
            return i2(t3), e3();
          });
        } else a2 |= 1;
      } catch (n2) {
        i2(n2);
      }
      if (a2 === 1) return t22.hasError ? Promise.reject(t22.error) : Promise.resolve();
      if (t22.hasError) throw t22.error;
    })();
  };
})(typeof SuppressedError == "function" ? SuppressedError : function(e22, t22, i2) {
  var r2 = new Error(i2);
  return r2.name = "SuppressedError", r2.error = e22, r2.suppressed = t22, r2;
}), Zd = (e22) => {
  if (!e22 || typeof e22 != "object") throw new TypeError("options.video, when provided, must be an object.");
  if (e22?.discard !== void 0 && typeof e22.discard != "boolean") throw new TypeError("options.video.discard, when provided, must be a boolean.");
  if (e22?.forceTranscode !== void 0 && typeof e22.forceTranscode != "boolean") throw new TypeError("options.video.forceTranscode, when provided, must be a boolean.");
  if (e22?.codec !== void 0 && !Ne.includes(e22.codec)) throw new TypeError(`options.video.codec, when provided, must be one of: ${Ne.join(", ")}.`);
  let t22 = e22?.bitrate;
  if (e22?.quality !== void 0 && !(e22.quality instanceof qn)) throw new TypeError("options.video.quality, when provided, must be a Quality.");
  if (e22?.quality !== void 0 && t22 !== void 0) throw new TypeError("options.video.quality and options.video.bitrate cannot both be provided.");
  if (t22 !== void 0 && !(t22 instanceof qn) && (!Number.isInteger(t22) || t22 <= 0)) throw new TypeError("options.video.bitrate, when provided, must be a positive integer or a quality.");
  if (e22?.width !== void 0 && (!Number.isInteger(e22.width) || e22.width <= 0)) throw new TypeError("options.video.width, when provided, must be a positive integer.");
  if (e22?.height !== void 0 && (!Number.isInteger(e22.height) || e22.height <= 0)) throw new TypeError("options.video.height, when provided, must be a positive integer.");
  if (e22?.fit !== void 0 && !["fill", "contain", "cover"].includes(e22.fit)) throw new TypeError("options.video.fit, when provided, must be one of 'fill', 'contain', or 'cover'.");
  if (e22?.width !== void 0 && e22.height !== void 0 && e22.fit === void 0) throw new TypeError("When both options.video.width and options.video.height are provided, options.video.fit must also be provided.");
  if (e22?.rotate !== void 0 && ![0, 90, 180, 270].includes(e22.rotate)) throw new TypeError("options.video.rotate, when provided, must be 0, 90, 180 or 270.");
  if (e22?.allowRotationMetadata !== void 0 && typeof e22.allowRotationMetadata != "boolean") throw new TypeError("options.video.allowRotationMetadata, when provided, must be a boolean.");
  if (e22?.crop !== void 0 && bn(e22.crop, "options.video."), e22?.frameRate !== void 0 && (!Number.isFinite(e22.frameRate) || e22.frameRate <= 0)) throw new TypeError("options.video.frameRate, when provided, must be a finite positive number.");
  if (e22?.alpha !== void 0 && !["discard", "keep"].includes(e22.alpha)) throw new TypeError("options.video.alpha, when provided, must be either 'discard' or 'keep'.");
  if (e22?.keyFrameInterval !== void 0 && (!Number.isFinite(e22.keyFrameInterval) || e22.keyFrameInterval < 0)) throw new TypeError("options.video.keyFrameInterval, when provided, must be a non-negative number.");
  if (e22?.process !== void 0 && typeof e22.process != "function") throw new TypeError("options.video.process, when provided, must be a function.");
  if (e22?.processedWidth !== void 0 && (!Number.isInteger(e22.processedWidth) || e22.processedWidth <= 0)) throw new TypeError("options.video.processedWidth, when provided, must be a positive integer.");
  if (e22?.processedHeight !== void 0 && (!Number.isInteger(e22.processedHeight) || e22.processedHeight <= 0)) throw new TypeError("options.video.processedHeight, when provided, must be a positive integer.");
  if (e22?.hardwareAcceleration !== void 0 && !["no-preference", "prefer-hardware", "prefer-software"].includes(e22.hardwareAcceleration)) throw new TypeError("options.video.hardwareAcceleration, when provided, must be 'no-preference', 'prefer-hardware' or 'prefer-software'.");
  if (e22?.group !== void 0 && !(e22.group instanceof Qd || Array.isArray(e22.group) && e22.group.every((e3) => e3 instanceof Qd))) throw new TypeError("options.video.group, when provided, must be an OutputTrackGroup or an array of OutputTrackGroups.");
}, eu = (e22) => {
  if (!e22 || typeof e22 != "object") throw new TypeError("options.audio, when provided, must be an object.");
  if (e22?.discard !== void 0 && typeof e22.discard != "boolean") throw new TypeError("options.audio.discard, when provided, must be a boolean.");
  if (e22?.forceTranscode !== void 0 && typeof e22.forceTranscode != "boolean") throw new TypeError("options.audio.forceTranscode, when provided, must be a boolean.");
  if (e22?.codec !== void 0 && !Ue.includes(e22.codec)) throw new TypeError(`options.audio.codec, when provided, must be one of: ${Ue.join(", ")}.`);
  let t22 = e22?.bitrate;
  if (e22?.quality !== void 0 && !(e22.quality instanceof qn)) throw new TypeError("options.audio.quality, when provided, must be a Quality.");
  if (e22?.quality !== void 0 && t22 !== void 0) throw new TypeError("options.audio.quality and options.audio.bitrate cannot both be provided.");
  if (t22 !== void 0 && !(t22 instanceof qn) && (!Number.isInteger(t22) || t22 <= 0)) throw new TypeError("options.audio.bitrate, when provided, must be a positive integer or a quality.");
  if (e22?.numberOfChannels !== void 0 && (!Number.isInteger(e22.numberOfChannels) || e22.numberOfChannels <= 0)) throw new TypeError("options.audio.numberOfChannels, when provided, must be a positive integer.");
  if (e22?.sampleRate !== void 0 && (!Number.isInteger(e22.sampleRate) || e22.sampleRate <= 0)) throw new TypeError("options.audio.sampleRate, when provided, must be a positive integer.");
  if (e22?.sampleFormat !== void 0 && !["u8", "s16", "s32", "f32"].includes(e22.sampleFormat)) throw new TypeError("options.audio.sampleFormat, when provided, must be one of: u8, s16, s32, f32.");
  if (e22?.process !== void 0 && typeof e22.process != "function") throw new TypeError("options.audio.process, when provided, must be a function.");
  if (e22?.processedNumberOfChannels !== void 0 && (!Number.isInteger(e22.processedNumberOfChannels) || e22.processedNumberOfChannels <= 0)) throw new TypeError("options.audio.processedNumberOfChannels, when provided, must be a positive integer.");
  if (e22?.processedSampleRate !== void 0 && (!Number.isInteger(e22.processedSampleRate) || e22.processedSampleRate <= 0)) throw new TypeError("options.audio.processedSampleRate, when provided, must be a positive integer.");
  if (e22?.group !== void 0 && !(e22.group instanceof Qd || Array.isArray(e22.group) && e22.group.every((e3) => e3 instanceof Qd))) throw new TypeError("options.audio.group, when provided, must be an OutputTrackGroup or an array of OutputTrackGroups.");
}, tu = 48e3, iu = class _iu {
  static async init(e22) {
    let t22 = new _iu(e22);
    return await t22._init(), t22;
  }
  constructor(e22) {
    var t22, i2, r2;
    if (this.state = "idle", this._nextOutputTrackId = 0, this._outputTrackIds = [], this._outputOwnTrackGroups = [], this._trackPumps = [], this._composable = !1, this._executed = !1, this._executionUntil = 1 / 0, this._pauseRequested = !1, this._synchronizer = new au(this), this._totalDuration = null, this._maxTimestamps = /* @__PURE__ */ new Map(), this.onProgress = void 0, this._computeProgress = !1, this._lastProgress = 0, this.isValid = !1, this.utilizedTracks = [], this.discardedTracks = [], !e22 || typeof e22 != "object") throw new TypeError("options must be an object.");
    if (!(e22.input instanceof Mo)) throw new TypeError("options.input must be an Input.");
    if (!(e22.output instanceof Xd)) throw new TypeError("options.output must be an Output.");
    if (e22.tracks !== void 0 && e22.tracks !== "all" && e22.tracks !== "primary") throw new TypeError("options.tracks, when provided, must be either 'all' or 'primary'.");
    if (e22.composable !== void 0 && typeof e22.composable != "boolean") throw new TypeError("options.composable, when provided, must be a boolean.");
    let a2 = e22.composable ?? !1;
    if (a2) {
      if (e22.tags !== void 0) throw new TypeError("options.tags cannot be set by a composable conversion; set metadata directly on the output instead.");
      if (e22.output.state !== "pending") throw new TypeError("options.output must not have been started yet.");
    } else if (e22.output.tracks.length > 0 || Object.keys(e22.output._metadataTags).length > 0 || e22.output.state !== "pending") throw new TypeError("options.output must be fresh: no tracks or metadata tags added and not started.");
    if (e22.video !== void 0 && typeof e22.video != "function") if (Array.isArray(e22.video)) for (let s2 of e22.video) Zd(s2);
    else Zd(e22.video);
    if (e22.audio !== void 0 && typeof e22.audio != "function") if (Array.isArray(e22.audio)) for (let s2 of e22.audio) eu(s2);
    else eu(e22.audio);
    if (e22.trim !== void 0 && (!e22.trim || typeof e22.trim != "object")) throw new TypeError("options.trim, when provided, must be an object.");
    if (((t22 = e22.trim) == null ? void 0 : t22.start) !== void 0 && !Number.isFinite(e22.trim.start)) throw new TypeError("options.trim.start, when provided, must be a finite number.");
    if (((i2 = e22.trim) == null ? void 0 : i2.end) !== void 0 && !Number.isFinite(e22.trim.end)) throw new TypeError("options.trim.end, when provided, must be a finite number.");
    if (((r2 = e22.trim) == null ? void 0 : r2.start) !== void 0 && e22.trim.end !== void 0 && e22.trim.start >= e22.trim.end) throw new TypeError("options.trim.start must be less than options.trim.end.");
    if (e22.tags !== void 0 && (typeof e22.tags != "object" || !e22.tags) && typeof e22.tags != "function") throw new TypeError("options.tags, when provided, must be an object or a function.");
    if (typeof e22.tags == "object" && Be(e22.tags), e22.showWarnings !== void 0 && typeof e22.showWarnings != "boolean") throw new TypeError("options.showWarnings, when provided, must be a boolean.");
    this._options = e22, this._composable = a2, this.input = e22.input, this.output = e22.output;
  }
  async _init() {
    var e22, t22;
    let i2 = await this.input.getFormat(), r2, a2 = this._options.tracks;
    a2 === void 0 && (a2 = i2.name.includes("(HLS)") ? "primary" : "all"), a2 === "all" ? r2 = await this.input.getTracks() : a2 === "primary" ? r2 = [await this.input.getPrimaryVideoTrack(), await this.input.getPrimaryAudioTrack()].filter((e3) => e3 !== null) : (N(a2), o2(!1));
    let s2 = this.output.format.getSupportedTrackCounts(), n2 = 1, c22 = 1, l22 = [], d22 = [];
    for (let u2 of r2) {
      let e3;
      if (u2.isVideoTrack()) if (this._options.video) if (typeof this._options.video == "function") {
        let t4 = await this._options.video(u2, n2) ?? {};
        if (Array.isArray(t4)) for (let e4 of t4) Zd(e4);
        else Zd(t4);
        e3 = Array.isArray(t4) ? t4 : [t4], n2++;
      } else e3 = Array.isArray(this._options.video) ? this._options.video : [this._options.video];
      else e3 = [{}];
      else if (u2.isAudioTrack()) if (this._options.audio) if (typeof this._options.audio == "function") {
        let t4 = await this._options.audio(u2, c22) ?? {};
        if (Array.isArray(t4)) for (let e4 of t4) eu(e4);
        else eu(t4);
        e3 = Array.isArray(t4) ? t4 : [t4], c22++;
      } else e3 = Array.isArray(this._options.audio) ? this._options.audio : [this._options.audio];
      else e3 = [{}];
      else o2(!1);
      let t3 = e3.filter((e4) => e4.discard);
      for (let r3 of t3) this.discardedTracks.push({ track: u2, reason: "discarded_by_user", trackOptions: r3 });
      if (e3.length === t3.length) {
        e3.length === 0 && this.discardedTracks.push({ track: u2, reason: "discarded_by_user", trackOptions: {} });
        continue;
      }
      let i3 = e3.filter((e4) => !e4.discard);
      l22.push(u2), d22.push(i3);
    }
    ((e22 = this._options.trim) == null ? void 0 : e22.start) !== void 0 ? this._startTimestamp = this._options.trim.start : this._startTimestamp = Math.max(await this.input.getFirstTimestamp(l22), 0), this._endTimestamp = Math.max(((t22 = this._options.trim) == null ? void 0 : t22.end) ?? 1 / 0, this._startTimestamp);
    for (let u2 = 0; u2 < l22.length; u2++) {
      let e3 = l22[u2], t3 = d22[u2];
      for (let i3 of t3) {
        if (this.output.tracks.length === s2.total.max) {
          this.discardedTracks.push({ track: e3, reason: "max_track_count_reached", trackOptions: i3 });
          continue;
        }
        if (this.output.tracks.reduce((t5, i4) => t5 + (i4.type === e3.type ? 1 : 0), 0) === s2[e3.type].max) {
          this.discardedTracks.push({ track: e3, reason: "max_track_count_of_type_reached", trackOptions: i3 });
          continue;
        }
        let t4 = this._nextOutputTrackId++;
        e3.isVideoTrack() ? await this._processVideoTrack(e3, i3, t4) : e3.isAudioTrack() ? await this._processAudioTrack(e3, i3, t4) : o2(!1);
      }
    }
    for (let u2 = 0; u2 < this.utilizedTracks.length - 1; u2++) for (let e3 = u2 + 1; e3 < this.utilizedTracks.length; e3++) {
      let t3 = this.utilizedTracks[u2], i3 = this.utilizedTracks[e3], r3 = this._outputOwnTrackGroups[u2], a3 = this._outputOwnTrackGroups[e3];
      o2(r3 !== void 0), o2(a3 !== void 0), r3 && a3 && t3.canBePairedWith(i3) && r3.pairWith(a3);
    }
    if (!this._composable) {
      let e3 = await this.input.getMetadataTags(), t3;
      if (this._options.tags) {
        let i3 = typeof this._options.tags == "function" ? await this._options.tags(e3) : this._options.tags;
        Be(i3), t3 = i3;
      } else t3 = e3;
      let r3 = i2.mimeType === this.output.format.mimeType, a3 = e3.raw === t3.raw;
      e3.raw && a3 && !r3 && delete t3.raw, this.output.setMetadataTags(t3);
    }
    if (this._composable ? this.isValid = !0 : this.isValid = this.output.hasEnoughTracks() && this.output.tracks.length > 0, this._options.showWarnings ?? 1) {
      let e3 = [], t3 = this.discardedTracks.filter((e4) => e4.reason !== "discarded_by_user");
      t3.length > 0 && e3.push("Some tracks had to be discarded from the conversion:", t3), this.isValid || (e3.length > 0 && e3.push(`

`), e3.push(this._getInvalidityExplanation().join(""))), e3.length > 0 && Ee._warn(...e3);
    }
  }
  _getInvalidityExplanation() {
    let e22 = [];
    if (this.discardedTracks.length === 0) e22.push("Due to missing tracks, this conversion cannot be executed.");
    else {
      let t22 = this.discardedTracks.every((e3) => e3.reason === "discarded_by_user" || e3.reason === "no_encodable_target_codec") && this.discardedTracks.some((e3) => e3.reason === "no_encodable_target_codec");
      if (e22.push("Due to discarded tracks, this conversion cannot be executed."), t22) {
        let t3 = this.discardedTracks.flatMap((e3) => {
          if (e3.reason === "discarded_by_user") return [];
          let t4;
          return t4 = e3.track.type === "video" ? this.output.format.getSupportedVideoCodecs() : e3.track.type === "audio" ? this.output.format.getSupportedAudioCodecs() : this.output.format.getSupportedSubtitleCodecs(), t4.filter((t5) => !e3.trackOptions.codec || t5 === e3.trackOptions.codec);
        }), i2 = [...new Set(t3)];
        i2.length === 1 ? e22.push(`
Tracks were discarded because your environment is not able to encode '${i2[0]}' with the provided parameters.`) : e22.push(`
Tracks were discarded because your environment is not able to encode any of the codecs ${i2.map((e3) => `'${e3}'`).join(", ")} with the provided parameters.`), i2.includes("mp3") && e22.push(`
The @mediabunny/mp3-encoder extension package provides support for encoding MP3.`), i2.includes("aac") && e22.push(`
The @mediabunny/aac-encoder extension package provides support for encoding AAC.`), (i2.includes("ac3") || i2.includes("eac3")) && e22.push(`
The @mediabunny/ac3 extension package provides support for encoding and decoding AC-3/E-AC-3.`), i2.includes("flac") && e22.push(`
The @mediabunny/flac-encoder extension package provides support for encoding FLAC.`);
      } else e22.push(`
Check the discardedTracks field for more info.`);
    }
    return e22;
  }
  async execute(e22 = {}) {
    var t22, i2, r2, a2, s2, n2;
    if (!e22 || typeof e22 != "object") throw new TypeError("options must be an object.");
    if (e22.until !== void 0 && (typeof e22.until != "number" || Number.isNaN(e22.until))) throw new TypeError("options.until, when provided, must be a number.");
    if (e22.pauseSignal !== void 0 && !(e22.pauseSignal instanceof AbortSignal)) throw new TypeError("options.pauseSignal, when provided, must be an AbortSignal.");
    if (!this.isValid) throw new Error(`Cannot execute this conversion because its output configuration is invalid. Make sure to always check the isValid field before executing a conversion.
` + this._getInvalidityExplanation().join(""));
    if (this.state === "executing") throw new Error("Cannot call execute() while a previous call to execute() is still running.");
    if (this.state === "canceled") throw new ru();
    if (this.state === "done") return;
    if (this._composable && this.output.state === "pending") throw new Error("A composable conversion requires the output to be started. Call start() on the output before executing the conversion.");
    this.state = "executing", this._executionUntil = e22.until ?? 1 / 0, this._pauseRequested = ((t22 = e22.pauseSignal) == null ? void 0 : t22.aborted) ?? !1;
    let o22 = () => {
      this.state === "executing" && (this._pauseRequested = !0, this._synchronizer.resolveAll());
    };
    (i2 = e22.pauseSignal) == null || i2.addEventListener("abort", o22);
    for (let d22 of this._trackPumps) d22.done || (d22.resolvers = F2());
    if (this._executed) for (let d22 of this._trackPumps) (a2 = d22.wake) == null || a2.call(d22);
    else {
      this._executed = !0;
      for (let e3 of this._outputTrackIds) this._synchronizer.declareTrack(e3);
      if (this.onProgress) {
        let e3 = [...new Set(this.utilizedTracks)].map(async (e4) => await e4.isLive() ? 1 / 0 : await e4.getDurationFromMetadata() ?? await e4.computeDuration()), t3 = Math.max(0, ...await Promise.all(e3));
        this._computeProgress = !0, this._totalDuration = Math.min(t3 - this._startTimestamp, this._endTimestamp - this._startTimestamp);
        for (let i3 of this._outputTrackIds) this._maxTimestamps.set(i3, 0);
        (r2 = this.onProgress) == null || r2.call(this, 0, 0);
      }
      this._composable || await this.output.start();
      for (let e3 of this._trackPumps) e3.start();
    }
    try {
      await Promise.all(this._trackPumps.map((e3) => e3.resolvers.promise));
    } catch (l22) {
      throw this.state !== "canceled" && this.cancel(), l22;
    } finally {
      (s2 = e22.pauseSignal) == null || s2.removeEventListener("abort", o22);
    }
    if (this.state === "canceled") throw new ru();
    let c22 = this._trackPumps.every((e3) => e3.done);
    if (this.state = c22 ? "done" : "idle", c22 && (this._composable || await this.output.finalize(), this._computeProgress)) {
      let e3 = Math.min(...this._maxTimestamps.values());
      (n2 = this.onProgress) == null || n2.call(this, 1, e3);
    }
  }
  async cancel() {
    var e22;
    if (this.state !== "done") if (this.state !== "canceled") {
      this.state = "canceled";
      for (let t22 of this._trackPumps) (e22 = t22.wake) == null || e22.call(t22);
      this._synchronizer.resolveAll(), this._composable || await this.output.cancel();
    } else Ee._warn("Conversion already canceled.");
  }
  async _processVideoTrack(e22, t22, i2) {
    let r2 = await e22.getCodec();
    if (!r2) return void this.discardedTracks.push({ track: e22, reason: "unknown_source_codec", trackOptions: t22 });
    let a2, s2 = await e22.getRotation(), n2 = c2(s2 + (t22.rotate ?? 0)), l22 = n2, d22 = this.output.format.supportsVideoRotationMetadata && (t22.allowRotationMetadata ?? !0), u2 = await e22.getSquarePixelWidth(), h22 = await e22.getSquarePixelHeight(), [m2, f22] = n2 % 180 == 0 ? [u2, h22] : [h22, u2], p22 = t22.crop;
    p22 && (p22 = wn(p22, m2, f22));
    let [g2, k2] = p22 ? [p22.width, p22.height] : [m2, f22], w2 = g2, b2 = k2, y2 = w2 / b2;
    t22.width !== void 0 && t22.height === void 0 ? (w2 = Se(t22.width), b2 = Se(Math.round(w2 / y2))) : t22.width === void 0 && t22.height !== void 0 ? (b2 = Se(t22.height), w2 = Se(Math.round(b2 * y2))) : t22.width !== void 0 && t22.height !== void 0 && (w2 = Se(t22.width), b2 = Se(t22.height));
    let v2 = await e22.getFirstTimestamp(), T22 = this.output.format.getSupportedVideoCodecs(), S2 = !!t22.forceTranscode || v2 < this._startTimestamp || !!t22.frameRate || t22.keyFrameInterval !== void 0 || t22.process !== void 0 || t22.quality !== void 0 || t22.bitrate !== void 0 || !T22.includes(r2) || t22.codec && t22.codec !== r2 || w2 !== g2 || b2 !== k2 || n2 !== 0 && !d22 || !!p22, P2 = t22.alpha ?? "discard";
    if (S2) {
      if (!await e22.canDecode()) return void this.discardedTracks.push({ track: e22, reason: "undecodable_source_codec", trackOptions: t22 });
      t22.codec && (T22 = T22.filter((e3) => e3 === t22.codec));
      let r3 = Gn(t22.quality, t22.bitrate) ?? new qn("high"), m3 = await Yn(T22, { width: t22.process && t22.processedWidth ? t22.processedWidth : w2, height: t22.process && t22.processedHeight ? t22.processedHeight : b2, quality: r3 });
      if (!m3) return void this.discardedTracks.push({ track: e22, reason: "no_encodable_target_codec", trackOptions: t22 });
      let f3 = { codec: m3, quality: r3, keyFrameInterval: t22.keyFrameInterval, sizeChangeBehavior: t22.fit ?? "passThrough", alpha: P2, hardwareAcceleration: t22.hardwareAcceleration, transform: {} };
      o2(f3.transform);
      let y3 = w2 !== g2 || b2 !== k2 || n2 !== 0 && (!d22 || t22.process !== void 0) || !!p22 || u2 !== await e22.getCodedWidth() || h22 !== await e22.getCodedHeight();
      if (!y3) {
        let t3 = { stack: [], error: void 0, hasError: !1 };
        try {
          let i3 = new Xd({ format: new zd(), target: new ld() }), r4 = new Bd(f3);
          i3.addVideoTrack(r4), await i3.start();
          let a3 = new fo(e22), s3 = Yd(t3, await a3.getSample(v2), !1);
          if (s3) try {
            await r4.add(s3), s3.close(), await i3.finalize();
          } catch (E22) {
            Ee._warn("An error occurred when probing encoder support. Falling back to rerender path.", E22), i3.cancel(), y3 = !0, f3.transform.force = !0;
          }
          else await i3.cancel();
        } catch (I22) {
          t3.error = I22, t3.hasError = !0;
        } finally {
          Jd(t3);
        }
      }
      t22.frameRate && (f3.transform.frameRate = t22.frameRate), t22.process && (f3.transform.process = t22.process), y3 && (l22 = 0, f3.transform.width = w2, f3.transform.height = b2, f3.transform.fit = t22.fit ?? "fill", f3.transform.rotate = c2(n2 - s2), f3.transform.crop = p22, f3.transform.alpha = P2);
      let S3 = null;
      f3.onEncodedSample = (e3) => {
        S3 = e3.timestamp;
      };
      let C3 = new Bd(f3);
      a2 = C3, this._registerTrackPump(async (t3) => {
        let r4 = new fo(e22);
        for await (let e3 of r4.samples(this._startTimestamp, this._endTimestamp)) {
          let r5 = { stack: [], error: void 0, hasError: !1 };
          try {
            let a3 = Yd(r5, e3, !1);
            if (this.state === "canceled") break;
            let s3 = Math.max(a3.timestamp - this._startTimestamp, 0);
            a3.setTimestamp(s3), this._reportProgress(i2, a3.timestamp + a3.duration), await C3.add(a3), a3.close(), S3 !== null && (this._synchronizer.shouldWait(i2, S3) && await this._synchronizer.wait(S3), await this._checkpoint(t3, S3));
          } catch (a3) {
            r5.error = a3, r5.hasError = !0;
          } finally {
            Jd(r5);
          }
        }
        C3.close(), this._synchronizer.closeTrack(i2);
      });
    } else {
      let t3 = new Cd(r2);
      a2 = t3, this._registerTrackPump(async (r3) => {
        let a3 = new so(e22), s3 = { decoderConfig: await e22.getDecoderConfig() ?? void 0 };
        for await (let e3 of a3.packets(void 0, void 0, { verifyKeyPackets: !0 })) {
          if (this.state === "canceled" || e3.timestamp >= this._endTimestamp) break;
          let a4 = e3.clone({ timestamp: e3.timestamp - this._startTimestamp, sideData: P2 === "discard" ? {} : e3.sideData });
          o2(a4.timestamp >= 0), this._reportProgress(i2, a4.timestamp + a4.duration), await t3.add(a4, s3), this._synchronizer.shouldWait(i2, a4.timestamp) && await this._synchronizer.wait(a4.timestamp), await this._checkpoint(r3, a4.timestamp);
        }
        t3.close(), this._synchronizer.closeTrack(i2);
      });
    }
    let C2 = null;
    t22.group || this._composable || (C2 = new Qd());
    let x2 = await e22.getLanguageCode();
    this.output.addVideoTrack(a2, { frameRate: t22.frameRate, languageCode: G(x2) ? x2 : void 0, name: await e22.getName() ?? void 0, disposition: await e22.getDisposition(), rotation: l22, group: C2 ?? t22.group }), this.utilizedTracks.push(e22), this._outputTrackIds.push(i2), this._outputOwnTrackGroups.push(C2);
  }
  async _processAudioTrack(e22, t22, i2) {
    let r2 = await e22.getCodec();
    if (!r2) return void this.discardedTracks.push({ track: e22, reason: "unknown_source_codec", trackOptions: t22 });
    let a2, s2 = await e22.getNumberOfChannels(), n2 = await e22.getSampleRate(), c22 = await e22.getFirstTimestamp(), l22 = t22.numberOfChannels ?? s2, d22 = t22.sampleRate ?? n2, u2 = c22 < this._startTimestamp, h22 = c22 > this._startTimestamp && !this.output.format.supportsTimestampedMediaData, m2 = this.output.format.getSupportedAudioCodecs();
    if (t22.forceTranscode || t22.quality || t22.bitrate || l22 !== s2 || d22 !== n2 || u2 || h22 || !m2.includes(r2) || t22.codec && t22.codec !== r2 || t22.process || t22.sampleFormat !== void 0) {
      if (!await e22.canDecode()) return void this.discardedTracks.push({ track: e22, reason: "undecodable_source_codec", trackOptions: t22 });
      let r3 = null;
      t22.codec && (m2 = m2.filter((e3) => e3 === t22.codec));
      let u3 = Gn(t22.quality, t22.bitrate) ?? new qn("high"), f3 = await Xn(m2, { numberOfChannels: t22.process && t22.processedNumberOfChannels ? t22.processedNumberOfChannels : l22, sampleRate: t22.process && t22.processedSampleRate ? t22.processedSampleRate : d22, quality: u3 });
      if (f3.some((e3) => Le2.includes(e3)) || !m2.some((e3) => Le2.includes(e3)) || l22 === 2 && d22 === tu) r3 = f3[0] ?? null;
      else {
        let e3 = (await Xn(m2, { numberOfChannels: 2, sampleRate: tu, quality: u3 })).find((e4) => Le2.includes(e4));
        e3 && (r3 = e3, l22 = 2, d22 = tu);
      }
      if (r3 === null) return void this.discardedTracks.push({ track: e22, reason: "no_encodable_target_codec", trackOptions: t22 });
      let p3 = { codec: r3, quality: u3, transform: { sampleFormat: t22.sampleFormat, process: t22.process } };
      o2(p3.transform), l22 !== s2 && (p3.transform.numberOfChannels = l22), d22 !== n2 && (p3.transform.sampleRate = d22);
      let g2 = null;
      p3.onEncodedSample = (e3) => {
        g2 = e3.timestamp;
      };
      let k2 = new Rd(p3);
      a2 = k2, this._registerTrackPump(async (t3) => {
        let r4 = new ko(e22);
        for await (let e3 of r4.samples(this._startTimestamp, this._endTimestamp)) {
          let r5 = { stack: [], error: void 0, hasError: !1 };
          try {
            let o22 = Yd(r5, e3, !1);
            if (this.state === "canceled") break;
            if (h22) {
              let e4 = { stack: [], error: void 0, hasError: !1 };
              try {
                let r6 = c22 - this._startTimestamp, a3 = Math.round(r6 * n2), l4 = Bn(o22.format), d4 = new Uint8Array(l4 * a3 * s2);
                o22.format !== "u8" && o22.format !== "u8-planar" || d4.fill(128);
                let u5 = Yd(e4, new _n({ data: d4, format: o22.format, numberOfChannels: s2, sampleRate: n2, timestamp: 0 }), !1);
                await this._registerAudioSample(t3, u5, k2, i2, () => g2), h22 = !1;
              } catch (a3) {
                e4.error = a3, e4.hasError = !0;
              } finally {
                Jd(e4);
              }
            }
            let l3, d3 = 0, u4 = o22.numberOfFrames;
            if (o22.timestamp < this._startTimestamp && (d3 = Math.round((this._startTimestamp - o22.timestamp) * o22.sampleRate)), o22.timestamp + o22.duration > this._endTimestamp && (u4 = Math.round((this._endTimestamp - o22.timestamp) * o22.sampleRate)), d3 > 0 || u4 < o22.numberOfFrames) {
              let e4 = o22.trim(d3, u4);
              if (o22.close(), l3 = e4, e4.numberOfFrames === 0) {
                e4.close();
                continue;
              }
            } else l3 = o22;
            let m3 = Yd(r5, l3, !1);
            m3.setTimestamp(m3.timestamp - this._startTimestamp), await this._registerAudioSample(t3, m3, k2, i2, () => g2);
          } catch (o22) {
            r5.error = o22, r5.hasError = !0;
          } finally {
            Jd(r5);
          }
        }
        k2.close(), this._synchronizer.closeTrack(i2);
      });
    } else {
      let t3 = new Md(r2);
      a2 = t3, this._registerTrackPump(async (r3) => {
        let a3 = new so(e22), s3 = { decoderConfig: await e22.getDecoderConfig() ?? void 0 };
        for await (let e3 of a3.packets()) {
          if (this.state === "canceled" || e3.timestamp >= this._endTimestamp) break;
          let a4 = e3.clone({ timestamp: e3.timestamp - this._startTimestamp });
          o2(a4.timestamp >= 0), this._reportProgress(i2, a4.timestamp + a4.duration), await t3.add(a4, s3), this._synchronizer.shouldWait(i2, a4.timestamp) && await this._synchronizer.wait(a4.timestamp), await this._checkpoint(r3, a4.timestamp);
        }
        t3.close(), this._synchronizer.closeTrack(i2);
      });
    }
    let f22 = null;
    t22.group || this._composable || (f22 = new Qd());
    let p22 = await e22.getLanguageCode();
    this.output.addAudioTrack(a2, { languageCode: G(p22) ? p22 : void 0, name: await e22.getName() ?? void 0, disposition: await e22.getDisposition(), group: f22 ?? t22.group }), this.utilizedTracks.push(e22), this._outputTrackIds.push(i2), this._outputOwnTrackGroups.push(f22);
  }
  async _registerAudioSample(e22, t22, i2, r2, a2) {
    this._reportProgress(r2, t22.timestamp + t22.duration), await i2.add(t22), t22.close();
    let s2 = a2();
    s2 !== null && (this._synchronizer.shouldWait(r2, s2) && await this._synchronizer.wait(s2), await this._checkpoint(e22, s2));
  }
  _registerTrackPump(e22) {
    let t22 = { done: !1, resolvers: F2(), wake: null, start: () => {
      e22(t22).then(() => {
        t22.done = !0, t22.resolvers.resolve();
      }, (e3) => {
        t22.resolvers.reject(e3);
      });
    } };
    this._trackPumps.push(t22);
  }
  async _checkpoint(e22, t22) {
    for (; this.state !== "canceled" && (t22 >= this._executionUntil || this._pauseRequested); ) {
      e22.resolvers.resolve();
      let { promise: t3, resolve: i2 } = F2();
      e22.wake = i2, await t3;
    }
  }
  _reportProgress(e22, t22) {
    var i2;
    if (!this._computeProgress) return;
    o2(this._totalDuration !== null), this._maxTimestamps.set(e22, Math.max(t22, this._maxTimestamps.get(e22)));
    let r2 = Math.min(...this._maxTimestamps.values()), a2 = U(r2 / this._totalDuration, 0, 1);
    a2 !== this._lastProgress && (this._lastProgress = a2, (i2 = this.onProgress) == null || i2.call(this, a2, r2));
  }
}, ru = class extends Error {
  constructor(e22 = "Conversion has been canceled.") {
    super(e22), this.name = "ConversionCanceledError";
  }
}, au = class {
  constructor(e22) {
    this.maxTimestamps = /* @__PURE__ */ new Map(), this.resolvers = [], this.conversion = e22;
  }
  declareTrack(e22) {
    this.maxTimestamps.set(e22, 0);
  }
  shouldWait(e22, t22) {
    let i2 = this.maxTimestamps.get(e22);
    o2(i2 !== void 0), this.maxTimestamps.set(e22, Math.max(t22, i2));
    let r2 = this.computeMinAndMaybeResolve();
    return !(this.conversion.state === "canceled" || this.conversion._pauseRequested || t22 >= this.conversion._executionUntil) && t22 - r2 > 1;
  }
  wait(e22) {
    let { promise: t22, resolve: i2 } = F2();
    return this.resolvers.push({ timestamp: e22, resolve: i2 }), t22;
  }
  closeTrack(e22) {
    this.maxTimestamps.delete(e22), this.computeMinAndMaybeResolve();
  }
  resolveAll() {
    for (let e22 of this.resolvers) e22.resolve();
    this.resolvers.length = 0;
  }
  computeMinAndMaybeResolve() {
    let e22 = 1 / 0;
    for (let [, t22] of this.maxTimestamps) e22 = Math.min(e22, t22);
    for (let t22 = 0; t22 < this.resolvers.length; t22++) {
      let i2 = this.resolvers[t22];
      i2.timestamp - e22 < 1 && (i2.resolve(), this.resolvers.splice(t22, 1), t22--);
    }
    return e22;
  }
}, su = /* @__PURE__ */ new Set(["mp4", "webm"]);
function nu(e22, t22) {
  if (typeof VideoEncoder > "u" || typeof VideoDecoder > "u" || (t22 = String(t22 || "").toLowerCase(), !su.has(t22))) return !1;
  let i2 = e22.videoEncoder || "";
  if (t22 === "mp4") {
    if (i2 && i2 !== "libx264") return !1;
  } else if (i2 && i2 !== "libvpx" && i2 !== "libvpx-vp9") return !1;
  if (e22.audioEnable !== !1) {
    let i3 = e22.audioEncoder || "";
    if (t22 === "mp4" && i3 && i3 !== "aac" || t22 === "webm" && i3 && i3 !== "libopus") return !1;
  }
  return !0;
}
function ou(e22, t22) {
  return t22 === "aac" ? "aac" : t22 === "libopus" || e22 === "webm" ? "opus" : "aac";
}
function cu(e22) {
  let t22 = Number(e22);
  return !Number.isFinite(t22) || t22 <= 0 ? null : Math.round(1e3 * t22);
}
async function lu(e22, t22, i2, r2 = () => {
}, a2 = {}) {
  if (!nu(t22, i2 = String(i2 || "").toLowerCase())) throw new Error("WebCodecs path not eligible");
  let s2 = new Mo({ formats: rn, source: new gs(e22) }), n2 = await s2.getPrimaryVideoTrack();
  if (!n2) throw new Error("No video track");
  if (!await n2.canDecode()) throw new Error("Source video cannot be decoded by WebCodecs");
  if (t22.audioEnable !== !1) {
    let e3 = await s2.getPrimaryAudioTrack();
    if (e3 && !await e3.canDecode()) throw new Error("Source audio cannot be decoded by WebCodecs");
  }
  let o22 = new cd(), c22 = new Xd({ format: i2 === "webm" ? new qd() : new zd(), target: o22 }), l22 = (function(e3) {
    let t3 = Number(e3.width) || 0, i3 = Number(e3.height) || 0;
    if ((!t3 || !i3) && e3.resolution) {
      let [r3, a3] = String(e3.resolution).split("x").map(Number);
      r3 && a3 && (t3 = r3, i3 = a3);
    }
    return t3 && i3 ? { width: Math.max(2, t3 - t3 % 2), height: Math.max(2, i3 - i3 % 2) } : null;
  })(t22), d22 = await (async function(e3, t3, i3, r3) {
    let a3 = /* @__PURE__ */ (function(e4, t4) {
      return t4 === "libx264" ? ["avc"] : t4 === "libvpx" ? ["vp8"] : t4 === "libvpx-vp9" || e4 === "webm" ? ["vp9", "vp8"] : ["avc"];
    })(e3, t3.videoEncoder), s3 = { width: i3?.width || await r3.getDisplayWidth(), height: i3?.height || await r3.getDisplayHeight() }, n3 = cu(t3.videoBitRate);
    n3 && (s3.bitrate = n3);
    let o3 = await Yn(a3, s3);
    if (!o3) throw new Error(`No encodable video codec among: ${a3.join(", ")}`);
    return o3;
  })(i2, t22, l22, n2), u2 = { codec: d22, hardwareAcceleration: "no-preference" };
  if (l22 && (u2.width = l22.width, u2.height = l22.height, u2.fit = "fill"), t22.fps) {
    let e3 = Number(t22.fps);
    Number.isFinite(e3) && e3 > 0 && (u2.frameRate = e3);
  }
  let h22 = cu(t22.videoBitRate);
  h22 && (u2.bitrate = h22);
  let m2 = t22.audioEnable === !1 ? { discard: !0 } : { codec: ou(i2, t22.audioEncoder) };
  if (m2.discard !== !0) {
    if (t22.audioChannel) {
      let e4 = Number(t22.audioChannel);
      e4 !== 1 && e4 !== 2 || (m2.numberOfChannels = e4);
    }
    if (t22.audioSampleRate) {
      let e4 = Number(t22.audioSampleRate);
      Number.isFinite(e4) && e4 > 0 && (m2.sampleRate = e4);
    }
    let e3 = (function(e4) {
      if (e4 == null || e4 === "") return null;
      if (typeof e4 == "number" && Number.isFinite(e4) && e4 > 0) return e4 < 1e3 ? Math.round(1e3 * e4) : Math.round(e4);
      let t3 = /^(\d+(?:\.\d+)?)\s*([kKmM])?/.exec(String(e4).trim());
      if (!t3) return null;
      let i3 = Number(t3[1]);
      if (!Number.isFinite(i3) || i3 <= 0) return null;
      let r3 = (t3[2] || "k").toLowerCase();
      return Math.round(i3 * (r3 === "m" ? 1e6 : 1e3));
    })(t22.audioBitRate);
    e3 && (m2.bitrate = e3);
  }
  let f22 = await iu.init({ input: s2, output: c22, video: u2, audio: m2, showWarnings: !1 });
  if (!f22.isValid) {
    let e3 = (f22.discardedTracks || []).map((e4) => e4.reason || "").filter(Boolean).join("; ");
    throw new Error(e3 || "WebCodecs conversion invalid");
  }
  f22.onProgress = (e3) => {
    let t3 = Number(e3);
    Number.isFinite(t3) && r2(Math.max(0, Math.min(100, Math.round(100 * t3))));
  }, await f22.execute(), r2(100);
  let p22 = o22.buffer;
  if (!p22 || !p22.byteLength) throw new Error("WebCodecs conversion produced empty output");
  let g2 = i2 === "webm" ? "video/webm" : "video/mp4", k2 = a2.nameWithoutExt || "output";
  return new File([p22], `${k2}.${i2}`, { type: g2 });
}
var du = [{ value: "audio/mpeg", title: "MP3", cmd: ["-acodec", "libmp3lame"] }, { value: "audio/wav", title: "WAV", cmd: ["-acodec", "pcm_s16le"] }, { value: "audio/ogg", title: "OGG", cmd: ["-acodec", "libvorbis"] }, { value: "audio/ac3", title: "AC3", cmd: ["-acodec", "ac3"] }, { value: "audio/aac", title: "AAC", cmd: ["-acodec", "aac"] }, { value: "audio/flac", title: "FLAC", cmd: ["-acodec", "flac"] }, { value: "audio/opus", title: "OPUS", cmd: ["-acodec", "libopus"], sampleRate: [24e3, 16e3, 8e3] }, { value: "audio/pcm", title: "PCM", cmd: ["-f", "s16le", "-acodec", "pcm_s16le"] }, { value: "audio/x-m4a", title: "M4A", cmd: ["-acodec", "aac"] }], uu = [{ value: "video/mp4", title: "MP4", encoder: "libx264", audioEncoder: "aac" }, { value: "video/avi", title: "AVI", encoder: "libx264", audioEncoder: "libmp3lame" }, { value: "video/mpg", title: "MPG", encoder: "mpeg1video", audioEncoder: "mp2" }, { value: "video/mov", title: "MOV", encoder: "libx264", audioEncoder: "aac" }, { value: "video/flv", title: "FLV", encoder: "flv", audioEncoder: "aac" }, { value: "video/3gp", title: "3GP", encoder: "mpeg4", audioEncoder: "aac" }, { value: "video/webm", title: "WEBM", encoder: "libvpx", audioEncoder: "libopus" }, { value: "video/mkv", title: "MKV", encoder: "libx264", audioEncoder: "aac" }, { value: "video/wmv", title: "WMV", encoder: "wmv1", audioEncoder: "wmav1" }, { value: "image/gif", title: "GIF", encoder: "gif", audioEncoder: "" }], hu = [{ is: ["video/mp4", "video/avi", "video/mov", "video/flv", "video/3gp", "video/mkv"], value: "libx264", title: "H.264" }, { is: ["video/mp4", "video/avi", "video/mov", "video/3gp", "video/mkv"], value: "mpeg4", title: "MPEG-4" }, { is: ["video/avi"], value: "h263", title: "h263" }, { is: ["video/avi", "video/mov"], value: "mjpeg", title: "mjpeg" }, { is: ["video/avi", "video/mpg", "video/mkv"], value: "mpeg1video", title: "mpeg1video" }, { is: ["video/avi", "video/mpg", "video/mkv"], value: "mpeg2video", title: "mpeg2video" }, { is: ["video/flv"], value: "flv", title: "FLV" }, { is: ["video/flv"], value: "flashsv", title: "Flash screnn video" }, { is: ["video/flv"], value: "flashsv2", title: "Flash screnn video2" }, { is: ["video/webm"], value: "libvpx", title: "vp8" }, { is: ["video/webm"], value: "libvpx-vp9", title: "vp9" }, { is: ["video/wmv"], value: "wmv1", title: "wmv1" }, { is: ["video/wmv"], value: "wmv2", title: "wmv2" }], mu = [{ is: ["video/mp4", "video/mpg", "video/avi", "video/mkv", "video/flv", "video/mov"], value: "libmp3lame", title: "MP3" }, { is: ["video/mpg", "video/avi"], value: "mp2", title: "MP2" }, { is: ["video/avi"], value: "pcm_s16le", title: "Pcm_s16le" }, { is: ["video/mp4", "video/mkv", "video/3gp", "video/flv", "video/mov"], value: "aac", title: "AAC" }, { is: ["video/webm"], value: "vorbis", title: "vorbis" }, { is: ["video/webm"], value: "libopus", title: "libopus" }, { is: ["video/mkv"], value: "flac", title: "FLAC" }, { is: ["video/wmv"], value: "wmav1", title: "wmav1" }, { is: ["video/wmv"], value: "wmav2", title: "wmav2" }], fu = [48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3], pu = ["256k", "160k", "128k", "96k", "80k", "64k", "48k"], gu = [{ value: "1920x1080", title: "1080P·1920*1080" }, { value: "1280x720", title: "720P·1280*720" }, { value: "854x480", title: "480P·854*480" }, { value: "640x360", title: "360P·640*360" }, { value: "426x240", title: "260P·426*240" }, { value: "720x576", title: "DVD·720*576" }, { value: "640x480", title: "TV·640*480" }, { value: "320x240", title: "Mobile·320*240" }], ku = [60, 30, 24, 15, 10], wu = { mp4: "video/mp4", avi: "video/avi", mpg: "video/mpg", mov: "video/mov", flv: "video/flv", "3gp": "video/3gp", webm: "video/webm", mkv: "video/mkv", wmv: "video/wmv", gif: "image/gif", mp3: "audio/mpeg", wav: "audio/wav", ogg: "audio/ogg", ac3: "audio/ac3", aac: "audio/aac", flac: "audio/flac", opus: "audio/opus", pcm: "audio/pcm", m4a: "audio/x-m4a" }, bu = new class extends re {
  constructor() {
    super(...arguments), t2(this, "ffmpeg", new I()), t2(this, "inited", !1), t2(this, "loadingPromise", null), t2(this, "task", Promise.resolve()), t2(this, "iframeMode", !0), t2(this, "iframe", null);
  }
  async load() {
    if (this.inited) return this.loadingPromise;
    {
      let e22 = () => {
      };
      return Le("ffmpeg:process", (t22) => {
        t22.type === "loaded" ? (e22(), this.inited = !0) : t22.type === "progress" ? this.emit("progress", t22.data) : t22.type === "log" ? this.emit("log", t22.data) : t22.type === "terminate" && this.terminate();
      }), this.loadingPromise = new Promise(async (t22, i2) => {
        this.iframe && (this.iframe.remove(), this.iframe = null);
        let r2 = document.createElement("iframe");
        r2.src = "https://widget.itab.link/ffmpeg/", r2.style.width = "10px", r2.style.height = "10px", r2.style.position = "fixed", r2.style.left = "-1000px", r2.style.pointerEvents = "none", document.body.appendChild(r2), this.iframe = r2, e22 = t22, setTimeout(() => {
          this.inited || i2();
        }, 1e4);
      }), this.loadingPromise;
    }
  }
  run(e22) {
    let t22 = this.task;
    return this.task = new Promise(async (i2) => {
      try {
        await t22, await this.load(), i2({ data: await e22() });
      } catch (r2) {
        i2({ error: r2 });
      }
    }), this.task.then((e3) => "error" in e3 ? Promise.reject(e3.error) : e3.data);
  }
  async processInIframe(e22, t22) {
    if (!this.iframe) return;
    let i2 = this.iframe.contentWindow, r2 = await Oe(i2, "ffmpeg:process", { type: e22, params: t22 });
    return "error" in r2 ? Promise.reject(r2.error) : r2.data;
  }
  exec(e22) {
    return this.iframeMode ? this.run(() => this.processInIframe("exec", [e22])) : this.run(() => this.ffmpeg.exec(e22));
  }
  writeFile(e22, t22) {
    return this.iframeMode ? this.run(async () => this.processInIframe("writeFile", [e22, await Tu(t22)])) : this.run(async () => this.ffmpeg.writeFile(e22, await Tu(t22)));
  }
  deleteFile(e22) {
    return this.iframeMode ? this.run(() => this.processInIframe("deleteFile", [e22])) : this.run(() => this.ffmpeg.deleteFile(e22));
  }
  ffprobe(e22) {
    return this.iframeMode ? this.run(() => this.processInIframe("ffprobe", [e22])) : this.run(() => this.ffmpeg.ffprobe(e22));
  }
  readFile(e22) {
    return this.iframeMode ? this.run(() => this.processInIframe("readFile", [e22])) : this.run(() => this.ffmpeg.readFile(e22));
  }
  terminate() {
    this.processInIframe("terminate"), this.ffmpeg.terminate(), this.inited = !1, this.iframe && (this.iframe.remove(), this.iframe = null), this.emit("terminate"), De("ffmpeg:process");
  }
}(), yu = class {
  constructor(e22) {
    t2(this, "file"), t2(this, "duration"), t2(this, "id", Math.random().toString(36).slice(2)), t2(this, "progress", 0), t2(this, "error", !1), t2(this, "convertStartAt", null), t2(this, "elapsedMs", null), t2(this, "inited", !1), t2(this, "hasAudio", !1), t2(this, "hasVideo", !1), t2(this, "mediaFormat", null), t2(this, "video", null), t2(this, "audio", null), t2(this, "_onFfmpegTerminate", () => {
      this.inited = !1;
    }), this.file = e22, bu.on("terminate", this._onFfmpegTerminate);
  }
  get uid() {
    return this.id;
  }
  get name() {
    var e22;
    return ((e22 = this.file) == null ? void 0 : e22.name) || "";
  }
  get nameWithoutExt() {
    return this.name.replace(/\.[^/.]+$/, "");
  }
  get ext() {
    return this.name.split(".").pop() || "";
  }
  get size() {
    var e22;
    return ((e22 = this.file) == null ? void 0 : e22.size) || 0;
  }
  get sizeLabel() {
    return (function(e22, t22 = 2) {
      if (e22 === 0) return "0 Bytes";
      let i2 = 1024, r2 = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], a2 = Math.floor(Math.log(e22) / Math.log(i2));
      return +parseFloat((e22 / Math.pow(i2, a2)).toFixed(t22)) + " " + r2[a2];
    })(this.size);
  }
  get durationLabel() {
    return (function(e22) {
      let t22 = (e3, t3) => [Math.trunc(e3 / t3), e3 % t3], i2, r2;
      return [i2, e22] = t22(e22, 3600), [r2, e22] = t22(e22, 60), e22 = Math.trunc(e22), [i2, r2, e22].map((e3) => ((e3 < 0 ? 0 : e3) || 0).toString().padStart(2, "0")).join(":");
    })(this.duration || 0);
  }
  get resolution() {
    if (this.hasVideo) return [this.video.width, this.video.height].join("x");
  }
  get formatLabel() {
    var e22;
    let t22 = (this.ext || "").toUpperCase();
    if (uu.some((e3) => e3.title === t22) || du.some((e3) => e3.title === t22)) return t22;
    let i2 = String(((e22 = this.mediaFormat) == null ? void 0 : e22.format_name) || "").split(",").map((e3) => e3.trim().toLowerCase()), r2 = { mp4: "MP4", mov: "MOV", avi: "AVI", matroska: "MKV", webm: "WEBM", flv: "FLV", asf: "WMV", "3gp": "3GP", gif: "GIF", mpeg: "MPG", mpegts: "MPG" };
    for (let a2 of i2) {
      if (r2[a2]) return r2[a2];
      let e3 = uu.find((e4) => e4.title.toLowerCase() === a2);
      if (e3) return e3.title;
    }
    return t22 || "";
  }
  get typeLabel() {
    if (!this.hasVideo || !this.video) return "";
    let e22 = this.video.width, t22 = this.video.height;
    if (!e22 || !t22) return "";
    let i2 = gu.find((i3) => i3.value === `${e22}x${t22}`);
    return i2 ? i2.title.split("·")[0] : t22 >= 2160 ? "4K" : t22 >= 1440 ? "2K" : t22 >= 1080 ? "1080P" : t22 >= 720 ? "720P" : t22 >= 480 ? "480P" : t22 >= 360 ? "360P" : `${e22}x${t22}`;
  }
  get audioQualityLabel() {
    var e22, t22;
    return !this.audio && !this.mediaFormat ? "" : this.hasAudio ? (function(e3) {
      let t3 = Number(e3);
      if (!Number.isFinite(t3) || t3 <= 0) return "";
      let i3 = Math.round(t3 / 1e3);
      if (i3 >= 1e3) {
        let e4 = i3 / 1e3;
        return `${Number.isInteger(e4) ? e4 : e4.toFixed(1)}M`;
      }
      return `${i3}k`;
    })((e22 = this.audio) == null ? void 0 : e22.bit_rate) || (((t22 = this.audio) == null ? void 0 : t22.codec_name) || "").toUpperCase() || "未知" : "无音频";
  }
  async init() {
    return this.inited || (this.file && await bu.writeFile(`${this.id}`, this.file), this.inited = !0), this;
  }
  destroy() {
    return bu.off("terminate", this._onFfmpegTerminate), this.file ? bu.deleteFile(`${this.id}`) : Promise.resolve();
  }
  async stat() {
    await this.init();
    let e22 = `output${Math.random().toString(36).slice(2)}.txt`;
    await bu.ffprobe(["-v", "quiet", "-print_format", "json", "-show_format", "-show_streams", this.id, "-o", e22]);
    let t22 = JSON.parse(await vu(await bu.readFile(e22)));
    this.duration = parseFloat(t22.format.duration) || 0;
    let i2 = t22.streams.find((e3) => e3.codec_type === "video"), r2 = t22.streams.find((e3) => e3.codec_type === "audio");
    this.hasVideo = !!i2, this.hasAudio = !!r2, this.video = i2, this.audio = r2, this.mediaFormat = t22.format, await bu.deleteFile(e22);
  }
  audioConvert(e22, t22, i2 = () => {
  }) {
    let r2 = [], a2 = du.find((e3) => e3.title.toLowerCase() === t22.toLowerCase());
    return a2 && r2.push(...a2.cmd), e22.bitRate && r2.push("-b:a", e22.bitRate + ""), e22.sampleRate && r2.push("-ar", e22.sampleRate + ""), e22.channel && r2.push("-ac", e22.channel + ""), r2.push("-vn"), this.convert(r2, t22, i2);
  }
  audioCut(e22, t22, i2 = () => {
  }) {
    let r2 = Math.max(0, Number(e22.start) || 0), a2 = Math.max(r2, Number(e22.end) || r2), s2 = Math.max(0.05, a2 - r2), n2 = ["-ss", String(r2), "-t", String(s2)], o22 = (function(e3, t3, i3) {
      let r3 = [], a3 = Number(e3.volume);
      Number.isFinite(a3) && Math.abs(a3 - 1) > 1e-3 && r3.push(`volume=${Math.max(0, a3)}`);
      let s3 = Math.max(0, Number(e3.fadeIn) || 0), n3 = Math.max(0, Number(e3.fadeOut) || 0), o3 = Cu[e3.fadeCurve] || "tri";
      if (s3 > 0 && r3.push(`afade=t=in:st=0:d=${Math.min(s3, t3)}:curve=${o3}`), n3 > 0) {
        let e4 = Math.min(n3, t3), i4 = Math.max(0, t3 - e4);
        r3.push(`afade=t=out:st=${i4}:d=${e4}:curve=${o3}`);
      }
      let c3 = Number(e3.speed) || 1;
      if (Number.isFinite(c3) && Math.abs(c3 - 1) > 1e-3) if (e3.keepPitch !== !1) r3.push(...Iu(c3));
      else {
        let t4 = Number(i3?.sample_rate) || Number(e3.sampleRate) || 44100;
        r3.push(`asetrate=${Math.round(t4 * c3)}`, `aresample=${t4}`);
      }
      return e3.normalize && r3.push("dynaudnorm"), r3;
    })(e22, s2, this.audio);
    o22.length && n2.push("-af", o22.join(","));
    let c22 = du.find((e3) => e3.title.toLowerCase() === String(t22).toLowerCase());
    return c22 && n2.push(...c22.cmd), e22.bitRate && n2.push("-b:a", e22.bitRate + ""), e22.sampleRate && n2.push("-ar", e22.sampleRate + ""), e22.channel && n2.push("-ac", e22.channel + ""), n2.push("-vn"), this.convert(n2, t22, i2);
  }
  async videoConvert(e22, t22, i2 = () => {
  }) {
    t22 = t22.toLowerCase();
    let r2 = uu.find((e3) => e3.title.toLowerCase() === t22), a2 = (function(e3, t3, i3) {
      if (!i3 || t3 === "gif" || !Pu.has(t3) || (function(e4) {
        return !!e4.fps || !!e4.videoEncoder || !!e4.videoBitRate || !!e4.resolution || !(!e4.width || !e4.height);
      })(e3)) return null;
      if (!e3.audioEnable) return ["-c:v", "copy", "-an"];
      if ((function(e4) {
        return !e4.audioEnable || !!e4.audioEncoder || !!e4.audioBitRate || !!e4.audioSampleRate || !!e4.audioChannel;
      })(e3)) {
        let t4 = ["-c:v", "copy"];
        return e3.audioChannel && t4.push("-ac", e3.audioChannel || 2), e3.audioBitRate && t4.push("-ab", e3.audioBitRate || "128k"), e3.audioSampleRate && t4.push("-ar", e3.audioSampleRate || 48e3), t4.push("-acodec", e3.audioEncoder || i3.audioEncoder), t4;
      }
      return ["-c", "copy"];
    })(e22, t22, r2);
    if (a2) try {
      return await this.convert(a2, t22, i2, { softFail: !0 });
    } catch {
    }
    if (nu(e22, t22)) try {
      return await lu(this.file, e22, t22, i2, { nameWithoutExt: this.nameWithoutExt });
    } catch {
    }
    return this.convert((function(e3, t3, i3) {
      let r3 = [];
      return e3.audioEnable ? t3 != "gif" && (e3.audioChannel && r3.push("-ac", e3.audioChannel || 2), e3.audioBitRate && r3.push("-ab", e3.audioBitRate || "128k"), e3.audioSampleRate && r3.push("-ar", e3.audioSampleRate || 48e3), r3.push("-acodec", e3.audioEncoder || i3.audioEncoder)) : r3.push("-an"), r3.push("-c:v", e3.videoEncoder || i3.encoder), e3.fps && r3.push("-r", e3.fps), e3.width && e3.height ? r3.push("-vf", `scale=${e3.width}x${e3.height}`) : e3.resolution && r3.push("-vf", `scale=${e3.resolution}`), t3 != "gif" && e3.videoBitRate && r3.push("-b:v", e3.videoBitRate < 1e3 ? `${e3.videoBitRate}k` : `${Math.trunc(e3.videoBitRate / 1e3)}M`), r3.push("-preset", "ultrafast"), r3;
    })(e22, t22, r2), t22, i2);
  }
  async videoCut(e22, t22, i2 = () => {
  }) {
    var r2, a2, s2;
    if (Array.isArray(e22?.visualLayers) || Array.isArray(e22?.videoClips)) return this.composeTimeline(e22, t22, i2);
    t22 = String(t22 || "mp4").toLowerCase();
    let n2 = uu.find((e3) => e3.title.toLowerCase() === t22);
    if (!n2) return Promise.reject(new Error("不支持的导出格式"));
    let o22 = Math.max(0, Number(e22.start) || 0), c22 = Math.max(o22 + 0.05, Number(e22.end) || o22 + 0.05), l22 = Math.max(c22, Number(e22.outputEnd) || c22), d22 = c22 - o22, u2 = Math.max(d22, l22 - o22), h22 = Math.max(0.25, Math.min(4, Number(e22.speed) || 1)), m2 = u2 / h22, f22 = Math.max(0, (l22 - c22) / h22), p22 = String(e22.canvasBg || "black").replace("#", "0x"), g2 = Array.isArray(e22.overlays) ? e22.overlays.slice(0, 8) : [], k2 = Array.isArray(e22.audioClips) ? e22.audioClips.slice(0, 8) : [], w2 = [];
    for (let F22 of g2) {
      if (!F22?.file) continue;
      let e3 = `${this.id}_ov_${w2.length}`;
      w2.push({ id: e3, file: F22.file }), F22._inputIndex = w2.length;
    }
    for (let F22 of k2) {
      if (!F22?.file) continue;
      let e3 = `${this.id}_au_${w2.length}`;
      w2.push({ id: e3, file: F22.file }), F22._inputIndex = w2.length;
    }
    let b2 = (function(e3, t3) {
      let i3 = [], r3 = Au(e3.canvasBg), a3 = Ru(e3, t3);
      if (a3) {
        let { w: e4, h: t4 } = a3;
        i3.push(`scale=${e4}:${t4}:force_original_aspect_ratio=decrease`, `pad=${e4}:${t4}:(ow-iw)/2:(oh-ih)/2:color=${r3}`, `scale=${e4}:${t4}`);
      }
      return i3;
    })(e22, this.video), y2 = Math.abs(h22 - 1) > 1e-3;
    y2 && b2.push(`setpts=PTS/${h22}`);
    let v2 = g2.some((e3) => e3?._inputIndex != null), T22 = [], S2 = "0:v";
    if (b2.length || v2) {
      b2.length && (T22.push(`[0:v]${b2.join(",")}[vbase]`), S2 = "vbase");
      let e3 = S2;
      g2.forEach((t3, i3) => {
        if (t3._inputIndex == null) return;
        let r3 = t3._inputIndex, a3 = `ov${i3}`, s3 = `vout${i3}`, n3 = Math.max(0, Math.min(1, Number(t3.opacity) ?? 1)), l3 = Math.max(0.05, Number(t3.scale) || 1), d3 = t3.xExpr || `(W-w)*${Number(t3.x) || 0}`, u3 = t3.yExpr || `(H-h)*${Number(t3.y) || 0}`, m3 = Math.max(0, (Number(t3.start) || 0) - o22) / h22, f3 = Math.max(m3, (Number(t3.end) || c22) - o22) / h22, p3 = `between(t\\,${m3.toFixed(3)}\\,${f3.toFixed(3)})`;
        T22.push(`[${r3}:v]scale=iw*${l3}:ih*${l3},format=rgba,colorchannelmixer=aa=${n3.toFixed(3)}[${a3}]`), T22.push(`[${e3}][${a3}]overlay=x='${d3}':y='${u3}':enable='${p3}'[${s3}]`), e3 = s3;
      }), S2 = e3;
    }
    f22 > 1e-3 && (S2 !== "0:v" || T22.length ? T22.push(`[${S2}]tpad=stop_mode=add:stop_duration=${f22.toFixed(3)}:color=${p22}[vpad]`) : T22.push(`[0:v]tpad=stop_mode=add:stop_duration=${f22.toFixed(3)}:color=${p22}[vpad]`), S2 = "vpad");
    let P2 = !!e22.muted || e22.audioEnable === !1, C2 = e22.keepOriginalAudio !== !1, x2 = Number(e22.volume), E22 = Number.isFinite(x2) ? Math.max(0, x2) : 1, I22 = [];
    if (!P2 && C2 && this.hasAudio) {
      if (Math.abs(E22 - 1) > 1e-3 && I22.push(`volume=${E22}`), y2) if (e22.keepPitch !== !1) I22.push(...Iu(h22));
      else {
        let e3 = Number((r2 = this.audio) == null ? void 0 : r2.sample_rate) || 44100;
        I22.push(`asetrate=${Math.round(e3 * h22)}`, `aresample=${e3}`);
      }
      let t3 = Math.max(0, Number(e22.fadeIn) || 0), i3 = Math.max(0, Number(e22.fadeOut) || 0);
      if (t3 > 0 && I22.push(`afade=t=in:st=0:d=${Math.min(t3, m2)}:curve=tri`), i3 > 0) {
        let e3 = Math.min(i3, m2);
        I22.push(`afade=t=out:st=${Math.max(0, m2 - e3)}:d=${e3}:curve=tri`);
      }
    }
    let _2 = k2.filter((e3) => e3?._inputIndex != null), B2 = null;
    if (_2.length) {
      let e3 = [];
      _2.forEach((t4, i3) => {
        let r3 = t4.muted ? 0 : Math.max(0, Number(t4.volume) ?? 1), a3 = Math.max(0, (Number(t4.start) || 0) - o22) / h22, s3 = Math.max(0.05, ((Number(t4.end) || c22) - (Number(t4.start) || 0)) / h22), n3 = Math.max(0, Number(t4.sourceStart) || 0), l3 = n3 + s3, d3 = Math.max(0, Number(t4.fadeIn) || 0), u3 = Math.max(0, Number(t4.fadeOut) || 0), m3 = [];
        if (d3 > 0 && m3.push(`afade=t=in:st=0:d=${Math.min(d3, s3).toFixed(3)}:curve=tri`), u3 > 0) {
          let e4 = Math.min(u3, s3);
          m3.push(`afade=t=out:st=${Math.max(0, s3 - e4).toFixed(3)}:d=${e4.toFixed(3)}:curve=tri`);
        }
        let f3 = `bgm${i3}m`, p3 = `bgm${i3}`;
        T22.push(`[${t4._inputIndex}:a]atrim=${n3.toFixed(3)}:${l3.toFixed(3)},asetpts=PTS-STARTPTS,volume=${r3}${m3.length ? `,${m3.join(",")}` : ""}[${f3}]`), T22.push(`[${f3}]adelay=${Math.round(1e3 * a3)}:all=1[${p3}]`), e3.push(`[${p3}]`);
      });
      let t3 = e3[0];
      if (e3.length > 1 && (T22.push(`${e3.join("")}amix=inputs=${e3.length}:duration=longest:dropout_transition=0[bgmmix]`), t3 = "[bgmmix]"), !P2 && C2 && this.hasAudio) {
        let e4 = I22.length ? I22.join(",") : "anull";
        T22.push(`[0:a]${e4},apad=whole_dur=${m2.toFixed(3)}[maina]`), T22.push(`[maina]${t3}amix=inputs=2:duration=longest:dropout_transition=0,aformat=sample_fmts=fltp:channel_layouts=stereo,atrim=0:${m2.toFixed(3)},asetpts=PTS-STARTPTS[aout]`), B2 = "[aout]";
      } else T22.push(`${t3}aformat=sample_fmts=fltp:channel_layouts=stereo,apad=whole_dur=${m2.toFixed(3)},atrim=0:${m2.toFixed(3)},asetpts=PTS-STARTPTS[aout]`), B2 = "[aout]";
    } else if (!P2 && C2 && this.hasAudio) if (I22.length || f22 > 1e-3) {
      let e3 = I22.length ? I22.slice() : [];
      f22 > 1e-3 && e3.push(`apad=whole_dur=${m2.toFixed(3)}`), T22.push(`[0:a]${e3.join(",") || "anull"}[aout]`), B2 = "[aout]";
    } else B2 = "0:a";
    let A2 = ["-ss", String(o22), "-t", String(d22), "-i", this.id];
    for (let F22 of w2)
      /\.(mp3|wav|aac|acc|m4a|ogg|flac|opus)$/i.test(((a2 = F22.file) == null ? void 0 : a2.name) || "") || String(((s2 = F22.file) == null ? void 0 : s2.type) || "").startsWith("audio/") ? A2.push("-i", F22.id) : A2.push("-loop", "1", "-t", String(Math.max(m2, 0.1)), "-i", F22.id);
    let M2 = [];
    if (T22.length ? (M2.push("-filter_complex", T22.join(";")), M2.push("-map", Ou(S2)), B2 ? M2.push("-map", Ou(B2)) : M2.push("-an")) : (M2.push("-map", "0:v"), !P2 && C2 && this.hasAudio ? M2.push("-map", "0:a") : M2.push("-an"), I22.length && M2.push("-af", I22.join(",")), b2.length && M2.push("-vf", b2.join(","))), M2.push("-c:v", e22.videoEncoder || n2.encoder), t22 !== "gif") {
      if (e22.videoBitRate) {
        let t3 = Number(e22.videoBitRate);
        Number.isFinite(t3) && t3 > 0 ? M2.push("-b:v", t3 < 1e3 ? `${t3}k` : `${Math.trunc(t3 / 1e3)}M`) : typeof e22.videoBitRate == "string" && M2.push("-b:v", e22.videoBitRate);
      }
      P2 && !B2 || (M2.push("-c:a", e22.audioEncoder || n2.audioEncoder || "aac"), e22.audioBitRate && M2.push("-b:a", String(e22.audioBitRate)));
    } else M2.push("-an");
    return e22.fps && M2.push("-r", String(e22.fps)), M2.push("-preset", "ultrafast", "-t", String(m2)), this.convertMulti(A2, M2, t22, i2, { extraInputs: w2, progressDuration: m2 });
  }
  async composeTimeline(e22, t22, i2 = () => {
  }) {
    t22 = String(t22 || "mp4").toLowerCase();
    let r2 = uu.find((e3) => e3.title.toLowerCase() === t22);
    if (!r2) return Promise.reject(new Error("不支持的导出格式"));
    let a2 = Math.max(0.25, Math.min(4, Number(e22.speed) || 1)), s2 = Math.max(0.05, Number(e22.duration) || 0.05) / a2, n2 = Math.max(1, Number(e22.fps) || 30), o22 = Au(e22.canvasBg), c22 = Number(e22.sourceWidth), l22 = Number(e22.sourceHeight), d22 = this.video || { width: Number.isFinite(c22) && c22 > 0 ? c22 : 1280, height: Number.isFinite(l22) && l22 > 0 ? l22 : 720 }, u2 = Number.isFinite(c22) && c22 >= 16 && Number.isFinite(l22) && l22 >= 16 ? { w: Bu(c22), h: Bu(l22) } : Ru(e22, d22) || { w: Bu(d22.width || 1280), h: Bu(d22.height || 720) }, h22 = Bu(u2.w), m2 = Bu(u2.h), f22 = Array.isArray(e22.visualLayers) ? e22.visualLayers : [...(e22.videoClips || []).map((e3) => ({ ...e3, kind: "video" })), ...(e22.overlays || []).map((e3) => ({ ...e3, kind: "overlay" }))], p22 = Array.isArray(e22.audioClips) ? e22.audioClips : [], g2 = [], k2 = ["-f", "lavfi", "-t", String(s2), "-i", `color=c=${o22}:s=${h22}x${m2}:r=${n2}:d=${s2}`], w2 = (e3, t3) => {
      let i3 = (function(e4, t4, { imageLoop: i4 } = {}) {
        let r4 = String(t4?.type || "").toLowerCase(), a3 = String(t4?.name || "");
        if (i4 || r4.startsWith("image/")) return r4.includes("jpeg") || r4 === "image/jpg" || /\.jpe?g$/i.test(a3) ? `${e4}.jpg` : `${e4}.png`;
        let s3 = a3.match(/(\.[a-z0-9]{2,5})$/i);
        if (s3) {
          let t5 = s3[1].toLowerCase();
          return t5 === ".acc" ? `${e4}.aac` : `${e4}${t5}`;
        }
        return r4.includes("wav") || r4 === "audio/wave" ? `${e4}.wav` : r4.includes("mpeg") || r4.includes("mp3") ? `${e4}.mp3` : r4.includes("webm") ? `${e4}.webm` : r4.includes("ogg") ? `${e4}.ogg` : r4.includes("aac") || r4 === "audio/x-aac" ? `${e4}.aac` : r4.includes("mp4") || r4.includes("quicktime") || r4.includes("m4a") ? r4.startsWith("audio/") ? `${e4}.m4a` : `${e4}.mp4` : e4;
      })(`${this.id}_x_${g2.length}`, e3, { imageLoop: t3 });
      g2.push({ id: i3, file: e3 });
      let r3 = g2.length;
      return t3 ? k2.push("-f", "image2", "-pattern_type", "none", "-framerate", String(n2), "-loop", "1", "-t", String(Math.max(s2, 0.1)), "-i", i3) : k2.push("-i", i3), r3;
    };
    for (let I22 of f22) I22?.file && (I22._inputIndex = w2(I22.file, I22.kind !== "video"));
    for (let I22 of p22) I22?.file && (I22._inputIndex = w2(I22.file, !1));
    this.file ? await this.init() : this.inited = !0;
    for (let I22 of g2) await bu.writeFile(I22.id, I22.file);
    for (let I22 of f22) {
      if (I22.kind !== "video" || I22._inputIndex == null) continue;
      let e3 = g2[I22._inputIndex - 1];
      I22._hasAudio = !!e3 && await Mu(e3.id);
    }
    let b2 = [], y2 = "0:v";
    f22.forEach((e3, t3) => {
      if (e3._inputIndex == null) return;
      let i3 = e3._inputIndex, r3 = Math.max(0, Number(e3.start) || 0) / a2, s3 = Math.max(r3 + 0.05, (Number(e3.end) || 0) / a2), n3 = `between(t\\,${r3.toFixed(3)}\\,${s3.toFixed(3)})`;
      if (e3.kind === "video") {
        let s4 = Math.max(0, Number(e3.sourceStart) || 0), o3 = Math.max(0.05, (Number(e3.end) || 0) - (Number(e3.start) || 0)), c3 = xu(e3), l3 = s4 + o3 * c3, d3 = `vl${t3}`, u3 = `vout${t3}`, m3 = c3 * a2, f3 = Math.abs(m3 - 1) > 1e-3 ? `(PTS-STARTPTS)/${m3}+${r3.toFixed(3)}/TB` : `PTS-STARTPTS+${r3.toFixed(3)}/TB`, p3 = Number.isFinite(Number(e3.x)) ? Number(e3.x) : 0.5, g3 = Number.isFinite(Number(e3.y)) ? Number(e3.y) : 0.5, k3 = Number.isFinite(Number(e3.scale)) ? Math.max(0.05, Number(e3.scale)) : 1, w3 = Bu(Math.round(h22 * k3)), v3 = Number(e3.rotate) || 0, T3 = [`trim=start=${s4.toFixed(3)}:end=${l3.toFixed(3)}`, "setpts=PTS-STARTPTS", ..._u(e3), `scale=${w3}:-2:flags=lanczos`];
        if (Math.abs(v3) > 0.05) {
          let e4 = v3 * Math.PI / 180;
          T3.push(`rotate=${e4}:c=black@0:ow=rotw(${e4}):oh=roth(${e4})`);
        }
        T3.push(`setpts=${f3}`), b2.push(`[${i3}:v]${T3.join(",")}[${d3}]`), b2.push(`[${y2}][${d3}]overlay=x='${p3}*W-w/2':y='${g3}*H-h/2':eof_action=pass:format=auto:enable='${n3}'[${u3}]`), y2 = u3;
      } else {
        let r4 = Math.max(0, Math.min(1, Number(e3.opacity) ?? 1)), a3 = Math.max(0.05, Number(e3.scale) || 1), s4 = Number.isFinite(Number(e3.x)) ? Number(e3.x) : 0.5, o3 = Number.isFinite(Number(e3.y)) ? Number(e3.y) : 0.5, c3 = `ov${t3}`, l3 = `vout${t3}`, d3 = e3.fit !== "pixel", u3 = Bu(Math.round(h22 * a3)), m3 = Number(e3.rotate) || 0, f3 = d3 ? `scale=${u3}:-2:flags=lanczos` : `scale=iw*${a3}:ih*${a3}`;
        if (Math.abs(m3) > 0.05) {
          let e4 = m3 * Math.PI / 180;
          f3 += `,rotate=${e4}:c=black@0:ow=rotw(${e4}):oh=roth(${e4})`;
        }
        b2.push(`[${i3}:v]${f3},format=rgba,colorchannelmixer=aa=${r4.toFixed(3)}[${c3}]`), b2.push(`[${y2}][${c3}]overlay=x='${s4}*W-w/2':y='${o3}*H-h/2':format=auto:enable='${n3}'[${l3}]`), y2 = l3;
      }
    }), y2 !== "0:v" && (b2.push(`[${y2}]format=yuv420p[vfinal]`), y2 = "vfinal");
    let v2 = !!e22.muted || e22.audioEnable === !1, T22 = e22.keepOriginalAudio !== !1, S2 = Number(e22.volume), P2 = Number.isFinite(S2) ? Math.max(0, S2) : 1, C2 = [];
    !v2 && T22 && f22.forEach((t3, i3) => {
      var r3, s3;
      if (t3.kind !== "video" || t3._inputIndex == null || t3.hasAudio === !1 || t3.muted || t3._hasAudio === !1) return;
      let n3 = Number.isFinite(Number(t3.volume)) ? Math.max(0, Number(t3.volume)) : P2;
      if (n3 <= 1e-4) return;
      let o3 = Math.max(0, Number(t3.sourceStart) || 0), c3 = Math.max(0.05, (Number(t3.end) || 0) - (Number(t3.start) || 0)), l3 = xu(t3), d3 = o3 + c3 * l3, u3 = Math.max(0, Number(t3.start) || 0) / a2, h3 = `va${i3}m`, m3 = `va${i3}`, f3 = [`atrim=start=${o3.toFixed(3)}:end=${d3.toFixed(3)}`, "asetpts=PTS-STARTPTS", "aformat=sample_fmts=fltp:channel_layouts=stereo", "aresample=44100", `volume=${n3}`];
      Eu(f3, l3, t3.keepPitch, (r3 = this.audio) == null ? void 0 : r3.sample_rate), Eu(f3, a2, e22.keepPitch, (s3 = this.audio) == null ? void 0 : s3.sample_rate);
      let p3 = Math.max(0, Number(t3.fadeIn) || 0), g3 = Math.max(0, Number(t3.fadeOut) || 0), k3 = c3 / a2;
      if (p3 > 0 && f3.push(`afade=t=in:st=0:d=${Math.min(p3, k3)}:curve=tri`), g3 > 0) {
        let e3 = Math.min(g3, k3);
        f3.push(`afade=t=out:st=${Math.max(0, k3 - e3)}:d=${e3}:curve=tri`);
      }
      b2.push(`[${t3._inputIndex}:a]${f3.join(",")}[${h3}]`), b2.push(`[${h3}]adelay=${Math.round(1e3 * u3)}:all=1[${m3}]`), C2.push(`[${m3}]`);
    }), p22.forEach((t3, i3) => {
      if (t3._inputIndex == null) return;
      let r3 = t3.muted ? 0 : Math.max(0, Number(t3.volume) ?? 1), s3 = xu(t3), n3 = Math.max(0, Number(t3.start) || 0) / a2, o3 = Math.max(0.05, (Number(t3.end) || 0) - (Number(t3.start) || 0)), c3 = o3 / a2, l3 = Math.max(0, Number(t3.sourceStart) || 0), d3 = l3 + o3 * s3, u3 = Math.max(0, Number(t3.fadeIn) || 0), h3 = Math.max(0, Number(t3.fadeOut) || 0), m3 = [];
      if (Eu(m3, s3, t3.keepPitch), Eu(m3, a2, e22.keepPitch), u3 > 0 && m3.push(`afade=t=in:st=0:d=${Math.min(u3, c3).toFixed(3)}:curve=tri`), h3 > 0) {
        let e3 = Math.min(h3, c3);
        m3.push(`afade=t=out:st=${Math.max(0, c3 - e3).toFixed(3)}:d=${e3.toFixed(3)}:curve=tri`);
      }
      let f3 = `bgm${i3}m`, p3 = `bgm${i3}`;
      b2.push(`[${t3._inputIndex}:a]atrim=start=${l3.toFixed(3)}:end=${d3.toFixed(3)},asetpts=PTS-STARTPTS,aformat=sample_fmts=fltp:channel_layouts=stereo,aresample=44100,volume=${r3}${m3.length ? `,${m3.join(",")}` : ""}[${f3}]`), b2.push(`[${f3}]adelay=${Math.round(1e3 * n3)}:all=1[${p3}]`), C2.push(`[${p3}]`);
    });
    let x2 = null;
    C2.length === 1 ? (b2.push(`${C2[0]}aformat=sample_fmts=fltp:channel_layouts=stereo,apad=whole_dur=${s2.toFixed(3)},atrim=0:${s2.toFixed(3)},asetpts=PTS-STARTPTS[aout]`), x2 = "[aout]") : C2.length > 1 && (b2.push(`${C2.join("")}amix=inputs=${C2.length}:duration=longest:dropout_transition=0,aformat=sample_fmts=fltp:channel_layouts=stereo,apad=whole_dur=${s2.toFixed(3)},atrim=0:${s2.toFixed(3)},asetpts=PTS-STARTPTS[aout]`), x2 = "[aout]");
    let E22 = [];
    if (b2.length ? (E22.push("-filter_complex", b2.join(";")), E22.push("-map", Ou(y2)), x2 ? E22.push("-map", Ou(x2)) : E22.push("-an")) : E22.push("-map", "0:v", "-an"), E22.push("-c:v", e22.videoEncoder || r2.encoder), t22 !== "gif") {
      if (E22.push("-pix_fmt", "yuv420p"), e22.videoBitRate) {
        let t3 = Number(e22.videoBitRate);
        Number.isFinite(t3) && t3 > 0 ? E22.push("-b:v", t3 < 1e3 ? `${t3}k` : `${Math.trunc(t3 / 1e3)}M`) : typeof e22.videoBitRate == "string" && E22.push("-b:v", e22.videoBitRate);
      }
      x2 && (E22.push("-c:a", e22.audioEncoder || r2.audioEncoder || "aac"), e22.audioBitRate && E22.push("-b:a", String(e22.audioBitRate)));
    } else E22.push("-an");
    return E22.push("-r", String(n2)), E22.push("-preset", "ultrafast", "-t", String(s2)), this.convertMulti(k2, E22, t22, i2, { extraInputs: g2, skipWrite: !0, skipMainFile: !0, progressDuration: s2 });
  }
  async convertMulti(e22, t22, i2, r2 = () => {
  }, a2 = {}) {
    let s2 = !!a2.softFail;
    this.error = !1, a2.skipMainFile || await this.init();
    let n2 = [];
    if (a2.skipWrite) for (let f22 of a2.extraInputs || []) n2.push(f22.id);
    else for (let f22 of a2.extraInputs || []) await bu.writeFile(f22.id, f22.file), n2.push(f22.id);
    let o22 = 0, c22 = Number(a2.progressDuration) || Number(this.duration) || 0, l22 = [], d22 = (e3) => {
      let t3 = ((e4 = {}) => {
        let t4 = Number(e4.progress), i3 = Number(e4.time), r3 = null;
        return c22 > 0 && Number.isFinite(i3) && i3 >= 0 && (r3 = [i3 / (1e6 * c22), i3 / (1e3 * c22), i3 / c22].find((e5) => Number.isFinite(e5) && e5 >= 0 && e5 <= 1.05)), r3 == null && Number.isFinite(t4) && t4 >= 0 && t4 <= 1.05 && (r3 = t4), r3 == null ? o22 : Math.ceil(100 * Math.min(r3, 1));
      })(e3);
      return t3 > 100 && !o22 ? t3 = 0 : (t3 = Math.max(Math.min(t3, 100), o22), o22 = t3), r2(t3);
    }, u2 = (e3) => {
      let t3 = typeof e3 == "string" ? e3 : e3?.message;
      t3 && (l22.push(t3), l22.length > 80 && l22.shift());
      let i3 = Su(t3);
      i3 == null || c22 <= 0 || d22({ progress: i3 / c22, time: 1e6 * i3 });
    }, h22 = `${this.id}_cut.${i2}`;
    try {
      bu.on("progress", d22), bu.on("log", u2), await Du(h22);
      let r3 = ["-y", ...e22, ...t22, h22].map((e3) => `${e3}`), a3 = await bu.exec(r3);
      if (!a3) {
        d22({ progress: 1 });
        let e3 = await bu.readFile(h22);
        return await bu.deleteFile(h22), new File([new Blob([e3.buffer], { type: wu[i2] })], [this.nameWithoutExt, i2].join("."), { type: wu[i2] });
      }
      return await Du(h22), s2 || (this.error = !0), Promise.reject(Fu(l22, new Error(`ffmpeg exit ${a3}`)));
    } catch (m2) {
      await Du(h22);
      let e3 = Fu(l22, m2);
      return s2 || (this.error = !0, bu.terminate()), Promise.reject(e3);
    } finally {
      bu.off("progress", d22), bu.off("log", u2);
      for (let e3 of n2) await Du(e3);
    }
  }
  async convert(e22, t22, i2 = () => {
  }, r2 = {}) {
    let a2 = !!r2.softFail;
    this.error = !1, await this.init();
    let s2 = 0, n2 = Number(r2.progressDuration) || Number(this.duration) || 0, o22 = (e3) => {
      let t3 = ((e4 = {}) => {
        let t4 = Number(e4.progress), i3 = Number(e4.time), r3 = null;
        return n2 > 0 && Number.isFinite(i3) && i3 >= 0 && (r3 = [i3 / (1e6 * n2), i3 / (1e3 * n2), i3 / n2].find((e5) => Number.isFinite(e5) && e5 >= 0 && e5 <= 1.05)), r3 == null && Number.isFinite(t4) && t4 >= 0 && t4 <= 1.05 && (r3 = t4), r3 == null ? s2 : Math.ceil(100 * Math.min(r3, 1));
      })(e3);
      return t3 > 100 && !s2 ? t3 = 0 : (t3 = Math.max(Math.min(t3, 100), s2), s2 = t3), i2(t3);
    }, c22 = (e3) => {
      let t3 = Su(typeof e3 == "string" ? e3 : e3?.message);
      t3 == null || n2 <= 0 || o22({ progress: t3 / n2, time: 1e6 * t3 });
    }, l22 = `${this.id}.${t22}`;
    try {
      if (bu.on("progress", o22), bu.on("log", c22), !await bu.exec(["-i", this.id, ...e22, l22].map((e3) => `${e3}`))) {
        o22({ progress: 1 });
        let e3 = await bu.readFile(l22);
        return await bu.deleteFile(l22), new File([new Blob([e3.buffer], { type: wu[t22] })], [this.nameWithoutExt, t22].join("."), { type: wu[t22] });
      }
      return await Du(l22), a2 || (this.error = !0), Promise.reject();
    } catch (d22) {
      return await Du(l22), a2 || (this.error = !0, bu.terminate()), Promise.reject(d22);
    } finally {
      bu.off("progress", o22), bu.off("log", c22);
    }
  }
};
function vu(e22) {
  return new Promise((t22, i2) => {
    let r2 = new FileReader();
    r2.onload = (e3) => t22(e3.target.result), r2.onerror = (e3) => i2(e3), r2.readAsText(e22 instanceof Blob || e22 instanceof File ? e22 : new Blob([e22]));
  });
}
function Tu(e22) {
  return new Promise((t22, i2) => {
    if (e22 instanceof Uint8Array) return t22(e22);
    let r2 = new FileReader();
    r2.onload = (e3) => t22(new Uint8Array(e3.target.result)), r2.onerror = (e3) => i2(e3), r2.readAsArrayBuffer(e22 instanceof Blob || e22 instanceof File ? e22 : new Blob([e22]));
  });
}
function Su(e22) {
  let t22 = /time=(\d+):(\d+):(\d+(?:\.\d+)?)/.exec(e22 || "");
  return t22 ? 3600 * Number(t22[1]) + 60 * Number(t22[2]) + Number(t22[3]) : null;
}
var Pu = /* @__PURE__ */ new Set(["mp4", "mov", "mkv"]), Cu = { 线性: "tri", 缓入: "qsin", 缓出: "hsin" };
function xu(e22) {
  let t22 = Number(e22?.speed);
  return !Number.isFinite(t22) || t22 <= 0 ? 1 : Math.max(0.25, Math.min(4, t22));
}
function Eu(e22, t22, i2, r2) {
  let a2 = Number(t22) || 1;
  if (!Number.isFinite(a2) || Math.abs(a2 - 1) <= 1e-3) return;
  if (i2 !== !1) return void e22.push(...Iu(a2));
  let s2 = Number(r2) || 44100;
  e22.push(`asetrate=${Math.round(s2 * a2)}`, `aresample=${s2}`);
}
function Iu(e22) {
  let t22 = Number(e22) || 1;
  if (!Number.isFinite(t22) || t22 <= 0) return [];
  let i2 = [];
  for (; t22 > 2; ) i2.push("atempo=2.0"), t22 /= 2;
  for (; t22 < 0.5; ) i2.push("atempo=0.5"), t22 /= 0.5;
  return Math.abs(t22 - 1) > 1e-3 && i2.push(`atempo=${t22.toFixed(4)}`), i2;
}
function _u(e22) {
  let t22 = [];
  e22?.flipH && t22.push("hflip"), e22?.flipV && t22.push("vflip");
  let i2 = { 清新: "eq=brightness=0.05:saturation=1.15:contrast=1.05", 暖色: "eq=saturation=1.2:gamma_r=1.08:gamma_b=0.92", 冷色: "eq=saturation=0.95:gamma_r=0.92:gamma_b=1.1", 黑白: "hue=s=0", 复古: "colorchannelmixer=.393:.769:.189:0:.349:.686:.168:0:.272:.534:.131" };
  return i2[e22?.filter] && t22.push(i2[e22.filter]), t22;
}
function Bu(e22) {
  let t22 = Math.max(16, Math.round(Number(e22) || 0));
  return 2 * Math.round(t22 / 2);
}
function Au(e22) {
  let t22 = String(e22 || "black").trim(), i2 = t22.replace(/^#/, "");
  return /^[0-9a-fA-F]{6}$/.test(i2) ? i2.toLowerCase() === "000000" ? "black" : i2.toLowerCase() === "ffffff" ? "white" : `0x${i2}` : t22.replace("#", "0x") || "black";
}
async function Mu(e22) {
  let t22 = `probe_a_${Math.random().toString(36).slice(2)}.json`;
  try {
    await bu.ffprobe(["-v", "quiet", "-print_format", "json", "-show_streams", "-select_streams", "a", e22, "-o", t22]);
    let i2 = JSON.parse(await vu(await bu.readFile(t22)));
    return await Du(t22), Array.isArray(i2?.streams) && i2.streams.length > 0;
  } catch {
    return await Du(t22), !1;
  }
}
function Fu(e22, t22) {
  let i2 = (e22 || []).join(`
`), r2 = String(t22?.message || t22 || ""), a2 = `${i2}
${r2}`, s2 = "导出失败，请重试";
  /Stream map.*matches no streams|does not contain any stream|Output with label|does not have a stream/i.test(a2) ? s2 = "导出失败：有素材缺少画面或音轨" : /not supported|Invalid data found|decoder|Could not find codec/i.test(a2) ? s2 = "导出失败：有视频编码无法解码，请转换为 MP4（H.264）后再试" : /No such filter|Invalid argument|Error initializing/i.test(a2) ? s2 = "导出失败：滤镜或参数无效，请简化滤镜后再试" : /Aborted|out of memory|OOM|memory/i.test(a2) ? s2 = "导出失败：处理中断，可能是内存不足或素材无法解码" : r2 && r2 !== "undefined" && (s2 = `导出失败：${r2.replace(/^Error:\s*/, "").slice(0, 80)}`);
  let n2 = new Error(s2);
  return n2.cause = t22, n2.ffmpegLog = i2, n2;
}
function Ru(e22, t22) {
  let i2 = Number(t22?.width) || 1280, r2 = Number(t22?.height) || 720, a2 = e22.previewRatio || "adapt", s2 = null;
  if (a2 === "adapt") s2 = { w: i2, h: r2 };
  else if (a2 === "custom")
    s2 = { w: Math.max(16, Number(e22.customWidth) || i2), h: Math.max(16, Number(e22.customHeight) || r2) };
  else {
    let e3 = { "16:9": 1.7777777777777777, "4:3": 1.3333333333333333, "2.35:1": 2.35, "2:1": 2, "1.85:1": 1.85, "9:16": 0.5625, "3:4": 0.75, "1:1": 1, 5.8: 0.46153846153846156 }[a2];
    if (e3) {
      let t3, a3;
      i2 / r2 > e3 ? (t3 = i2, a3 = Math.round(i2 / e3)) : (a3 = r2, t3 = Math.round(r2 * e3));
      let n3 = 1920;
      if (t3 > n3 || a3 > n3) {
        let e4 = n3 / Math.max(t3, a3);
        t3 = Math.round(t3 * e4), a3 = Math.round(a3 * e4);
      }
      s2 = { w: t3, h: a3 };
    } else s2 = { w: i2, h: r2 };
  }
  let n2 = Number(e22.width), o22 = Number(e22.height);
  return Number.isFinite(n2) && n2 > 0 && Number.isFinite(o22) && o22 > 0 ? (function(e3, t3, i3, r3) {
    let a3 = Math.max(1, Number(e3) || 1), s3 = Math.max(1, Number(t3) || 1), n3 = Math.max(16, Number(i3) || 0), o3 = Math.max(16, Number(r3) || 0);
    if (!Number.isFinite(n3) || !Number.isFinite(o3) || n3 < 16 || o3 < 16) return { w: Bu(a3), h: Bu(s3) };
    let c22 = Math.min(n3 / a3, o3 / s3);
    return { w: Bu(a3 * c22), h: Bu(s3 * c22) };
  })(s2.w, s2.h, n2, o22) : { w: Bu(s2.w), h: Bu(s2.h) };
}
async function Du(e22) {
  try {
    await bu.deleteFile(e22);
  } catch {
  }
}
function Ou(e22) {
  return e22 && (e22.startsWith("[") || /^\d+:/.test(e22) ? e22 : `[${e22}]`);
}
function Nu(e22) {
  if (!Number.isFinite(e22) || e22 < 0) return "";
  let t22 = e22 / 1e3;
  if (t22 < 60) return `${t22.toFixed(1)}秒`;
  let i2 = Math.floor(t22 / 3600), r2 = Math.round(t22 % 60), a2 = Math.floor(t22 % 3600 / 60);
  return r2 === 60 && (r2 = 0, a2 += 1), a2 === 60 && (a2 = 0, i2 += 1), i2 > 0 ? `${i2}小时${a2}分${String(r2).padStart(2, "0")}秒` : `${a2}分${String(r2).padStart(2, "0")}秒`;
}

export {
  du,
  uu,
  hu,
  mu,
  fu,
  pu,
  gu,
  ku,
  bu,
  yu,
  Ru,
  Nu
};
/*!
 * Copyright (c) 2026-present, Vanilagy and contributors
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
