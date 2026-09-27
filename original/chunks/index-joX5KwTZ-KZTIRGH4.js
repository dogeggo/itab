import {
  l as l4,
  o as o3
} from "./chunk-Z3H6ESAX.js";
import {
  h as h3
} from "./chunk-HJ3AZTL2.js";
import {
  e as e4,
  h as h2,
  l as l3,
  s as s3,
  t as t2
} from "./chunk-BCW4HHE6.js";
import {
  t as t3
} from "./chunk-RBE7AC6A.js";
import {
  s as s4
} from "./chunk-ZA3776RS.js";
import {
  Nu,
  Ru,
  bu,
  du,
  fu,
  gu,
  hu,
  ku,
  mu,
  pu,
  uu,
  yu
} from "./chunk-LO6T5NS5.js";
import {
  e as e3
} from "./chunk-76NDQHGN.js";
import {
  l as l2
} from "./chunk-CU777VMF.js";
import {
  o as o2
} from "./chunk-TOQSP6OH.js";
import {
  s
} from "./chunk-FLJ65QRG.js";
import {
  s as s2
} from "./chunk-G52UIIHX.js";
import {
  l
} from "./chunk-BP7HAB75.js";
import {
  b
} from "./chunk-RWAOADFO.js";
import {
  F,
  i
} from "./chunk-R77VKLDU.js";
import {
  c
} from "./chunk-UJCW7BUN.js";
import {
  v
} from "./chunk-Q72T5IJS.js";
import {
  e as e2
} from "./chunk-TTG6GZ54.js";
import {
  $h,
  Me,
  Mh,
  Rw,
  VO,
  Vk,
  aO,
  dv,
  gO,
  ju,
  nd,
  ph,
  tC,
  uv
} from "./chunk-QX73FKBL.js";
import {
  Mt as Mt2,
  e,
  fo,
  h,
  ho,
  kt,
  uo as uo2,
  vo,
  wt,
  xt,
  zt
} from "./chunk-LEVEZLTX.js";
import "./chunk-5MDIDYN5.js";
import "./chunk-AFECQBGL.js";
import "./chunk-YQ4PBQUM.js";
import {
  t
} from "./chunk-C332WR7G.js";
import "./chunk-C3WGXGFI.js";
import "./chunk-S7M5ZIRT.js";
import "./chunk-USGTF4JI.js";
import {
  o,
  r
} from "./chunk-ZBQAVDN7.js";
import {
  $o,
  At,
  Es,
  Et,
  Fr,
  H,
  Hr,
  Lt,
  Mt,
  Os,
  St,
  V,
  W,
  Z,
  Zr,
  co,
  di,
  dt,
  eo,
  es,
  fs,
  hs,
  io,
  lo,
  mn,
  ns,
  on,
  po,
  rr,
  sl,
  sr,
  ss,
  to,
  uo,
  ws,
  yn
} from "./chunk-E6JHFIG4.js";

// output/native-current/IconCloudUpload-DNo0ip68.js
var l5 = r("outline", "cloud-upload", "CloudUpload", [["path", { d: "M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1", key: "svg-0" }], ["path", { d: "M9 15l3 -3l3 3", key: "svg-1" }], ["path", { d: "M12 12l0 9", key: "svg-2" }]]);

// output/native-current/IconMusic-s8agp0ET.js
var s5 = r("outline", "music", "Music", [["path", { d: "M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0", key: "svg-0" }], ["path", { d: "M13 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0", key: "svg-1" }], ["path", { d: "M9 17v-13h10v13", key: "svg-2" }], ["path", { d: "M9 8h10", key: "svg-3" }]]);

// output/native-current/exportJob-19dBM9hH.js
var o4 = ["video/mp4", "video/webm", "video/quicktime", "video/ogg", "video/*", "image/*", "audio/mpeg", "audio/mp4", "audio/wav", "audio/ogg", "audio/aac", "audio/webm", "audio/*", ".mp4", ".webm", ".mov", ".m4v", ".ogv", ".png", ".jpg", ".jpeg", ".gif", ".webp", ".bmp", ".svg", ".avif", ".heic", ".heif", ".mp3", ".wav", ".aac", ".m4a", ".ogg", ".opus"].join(","), s6 = { accept: o4, hint: "支持视频、图片、音频，可多选；单个不超过 500MB", maxSizeMB: 500 };
function l6(e22) {
  if (!e22) return null;
  let t22 = e22.name || "", n2 = e22.type || "";
  return n2.startsWith("video/") || /\.(mp4|mov|webm|mkv|avi|m4v|ogv)$/i.test(t22) ? "video" : n2.startsWith("image/") || /\.(png|jpe?g|gif|webp|bmp|svg|avif|heic|heif|ico)$/i.test(t22) ? "image" : n2.startsWith("audio/") || /\.(mp3|wav|aac|m4a|ogg|flac|opus)$/i.test(t22) ? "audio" : null;
}
function c2(e22, t22, n2) {
  let i2 = t22 || "该文件";
  if (e22 === "image") return n2 === "timeout" ? `图片「${i2}」读取超时，请换一张浏览器可显示的图片` : n2 === "no_image_frame" ? `「${i2}」无法解码出画面` : `当前浏览器无法显示图片「${i2}」，请转换为 PNG / JPEG / WebP / SVG 后再试`;
  let a2 = e22 === "audio" ? "音频" : "视频";
  return n2 === "timeout" ? `${a2}「${i2}」读取超时，请换一个浏览器可播放的文件` : n2 === "no_video_frame" ? `「${i2}」无法解码出画面，当前浏览器可能不支持该编码` : `当前浏览器无法播放该${a2}「${i2}」，请转换为 MP4/WebM（视频）或 MP3/WAV（音频）后再试`;
}
var u = [{ value: "adapt", label: "适应 (原始)" }, { value: "custom", label: "自定义" }, "divider", { value: "16:9", label: "16:9", icon: "r-169" }, { value: "4:3", label: "4:3", icon: "r-43" }, { value: "2.35:1", label: "2.35:1", icon: "r-235" }, { value: "2:1", label: "2:1", icon: "r-21" }, { value: "1.85:1", label: "1.85:1", icon: "r-185" }, "divider", { value: "9:16", label: "9:16", icon: "r-916" }, { value: "3:4", label: "3:4", icon: "r-34" }, { value: "5.8", label: "5.8寸", icon: "r-58" }, { value: "1:1", label: "1:1", icon: "r-11" }], f = ["原片", "清新", "暖色", "冷色", "黑白", "复古"], d = { 原片: "none", 清新: "brightness(1.05) saturate(1.15) contrast(1.05)", 暖色: "sepia(0.22) saturate(1.25) brightness(1.03)", 冷色: "saturate(0.9) hue-rotate(190deg) brightness(1.02)", 黑白: "grayscale(1)", 复古: "sepia(0.45) contrast(1.1) brightness(0.96)" }, m = [{ id: "ratio", label: "画面", icon: "ratio" }, { id: "frame", label: "变换", icon: "frame" }, { id: "speed", label: "速度", icon: "speed" }, { id: "sound", label: "声音", icon: "sound" }, { id: "photo", label: "图片", icon: "photo" }, { id: "text", label: "文字", icon: "text" }], p = { none: ["ratio"], video: ["ratio", "frame", "speed", "sound"], image: ["ratio", "photo"], text: ["ratio", "text"], audio: ["ratio", "sound"] };
function g(e22) {
  return p[e22] || p.none;
}
var h4 = { id: "text-template", type: "text", name: "默认文本", meta: "可多次拖入", content: "默认文本", reusable: !0 }, v2 = [{ label: "苹方 / 微软雅黑", value: '"PingFang SC","Hiragino Sans GB","Microsoft YaHei","Noto Sans SC",sans-serif', zh: !0 }, { label: "黑体", value: '"Heiti SC","STHeiti","SimHei","Microsoft YaHei",sans-serif', zh: !0 }, { label: "宋体", value: '"Songti SC","STSong","SimSun","Noto Serif SC",serif', zh: !0 }, { label: "楷体", value: '"Kaiti SC","STKaiti","KaiTi","楷体",serif', zh: !0 }, { label: "仿宋", value: '"STFangsong","FangSong","仿宋",serif', zh: !0 }, { label: "Arial", value: "Arial,Helvetica,sans-serif", zh: !1 }, { label: "Helvetica", value: "Helvetica,Arial,sans-serif", zh: !1 }, { label: "Verdana", value: "Verdana,Geneva,sans-serif", zh: !1 }, { label: "Tahoma", value: "Tahoma,Geneva,sans-serif", zh: !1 }, { label: "Trebuchet MS", value: '"Trebuchet MS",Helvetica,sans-serif', zh: !1 }, { label: "Times New Roman", value: '"Times New Roman",Times,serif', zh: !1 }, { label: "Georgia", value: "Georgia,serif", zh: !1 }, { label: "Courier New", value: '"Courier New",Courier,monospace', zh: !1 }, { label: "Impact", value: "Impact,Haettenschweiler,sans-serif", zh: !1 }, { label: "Comic Sans MS", value: '"Comic Sans MS","Comic Sans",cursive', zh: !1 }], w = 8e3, b2 = [{ h: "left", v: "top" }, { h: "center", v: "top" }, { h: "right", v: "top" }, { h: "left", v: "center" }, { h: "center", v: "center" }, { h: "right", v: "center" }, { h: "left", v: "bottom" }, { h: "center", v: "bottom" }, { h: "right", v: "bottom" }];
function y(e22, t22, n2, i2, a2) {
  let r2 = b2[e22] || b2[4], o22 = Math.max(1, Number(i2) || 1), s22 = Math.max(1, Number(a2) || 1), l22 = Math.max(0, Number(t22) || 0), c22 = Math.max(0, Number(n2) || 0), u2 = l22 >= o22 ? 0.5 : l22 / (2 * o22), f2 = c22 >= s22 ? 0.5 : c22 / (2 * s22), d2 = 0.5, m22 = 0.5;
  return r2.h === "left" ? d2 = u2 : r2.h === "right" && (d2 = 1 - u2), r2.v === "top" ? m22 = f2 : r2.v === "bottom" && (m22 = 1 - f2), { x: d2, y: m22 };
}
function S(e22, t22, n2 = 0, i2 = 0, a2 = 1, r2 = 1) {
  let o22 = Number.isFinite(Number(e22)) ? Number(e22) : 0.5, s22 = Number.isFinite(Number(t22)) ? Number(t22) : 0.5, l22 = 4, c22 = 1 / 0;
  for (let u2 = 0; u2 < b2.length; u2++) {
    let e32 = y(u2, n2, i2, a2, r2), t32 = (e32.x - o22) ** 2 + (e32.y - s22) ** 2;
    t32 < c22 && (c22 = t32, l22 = u2);
  }
  return l22;
}
b2.map((e22, t22) => y(t22, 0, 0, 1, 1));
var x = 0.15, A = 0.05, N = 40, M = 30, k = { width: 1280, height: 720 }, B = 0.05, C = 5, P = 5, D = 300, H2 = 0.25, j = 4, $ = 120, E = { video: !0, audio: !0, image: !1, text: !1 };
function R() {
  return { muted: !1, hidden: !1, locked: !1 };
}
var F2 = 1;
function O() {
  return `row_${Date.now()}_${F2++}`;
}
var z = [{ id: "mp4-1080", label: "MP4 1080P", format: "MP4", videoBitRate: "4000k", width: 1920, height: 1080 }, { id: "mp4-720", label: "MP4 720P", format: "MP4", videoBitRate: "2500k", width: 1280, height: 720 }, { id: "webm", label: "WebM 高清", format: "WEBM", videoBitRate: "3000k", width: "", height: "" }, { id: "mov", label: "MOV 原画质", format: "MOV", videoBitRate: "", width: "", height: "" }];
function T() {
  return { format: "MP4", videoBitRate: "2500k", width: "", height: "", fps: "", presetId: "mp4-720" };
}
function _(e22, t22 = !1) {
  (!Number.isFinite(e22) || e22 < 0) && (e22 = 0);
  let n2 = Math.floor(e22 / 60), i2 = Math.floor(e22 % 60), a2 = `${String(n2).padStart(2, "0")}:${String(i2).padStart(2, "0")}`;
  if (!t22) return a2;
  let r2 = Math.floor(e22 % 1 * 1e3);
  return `${a2}.${String(r2).padStart(3, "0")}`;
}
function I(e22) {
  if (!e22) return "0 B";
  let t22 = ["B", "KB", "MB", "GB"], n2 = 0, i2 = e22;
  for (; i2 >= 1024 && n2 < t22.length - 1; ) i2 /= 1024, n2++;
  return `${i2.toFixed(n2 ? 1 : 0)} ${t22[n2]}`;
}
var V2 = 1;
function W2() {
  return `clip_${Date.now()}_${V2++}`;
}
function U(e22) {
  let t22 = String(e22.content || "文字").slice(0, 200), n2 = Math.max(5, Number(e22.fontSize) || 48), i2 = e22.color || "#ffffff", a2 = Math.max(0, Math.min(1, Number(e22.opacity) ?? 1)), r2 = e22.fontWeight || "500", o22 = e22.fontStyle === "italic" ? "italic " : "", s22 = e22.fontFamily || 'system-ui, -apple-system, "PingFang SC", "Microsoft YaHei", sans-serif', l22 = `${o22}${r2} ${n2}px ${s22}`, c22 = document.createElement("canvas"), u2 = c22.getContext("2d");
  u2.font = l22;
  let f2 = t22.split(`
`), d2 = 1.35 * n2, m22 = 0;
  for (let h22 of f2) m22 = Math.max(m22, u2.measureText(h22 || " ").width);
  c22.width = Math.ceil(m22 + 32), c22.height = Math.ceil(d2 * f2.length + 32), u2.clearRect(0, 0, c22.width, c22.height), u2.font = l22, u2.fillStyle = i2, u2.globalAlpha = a2, u2.textBaseline = "top", u2.textAlign = "left";
  let p2 = !!e22.underline, g2 = Math.max(1, 0.07 * n2);
  return f2.forEach((e32, t32) => {
    let i3 = 16 + t32 * d2;
    if (u2.fillText(e32, 16, i3), p2) {
      let t4 = u2.measureText(e32 || " ").width;
      u2.fillRect(16, i3 + 1.05 * n2, t4, g2);
    }
  }), new Promise((t32, n3) => {
    c22.toBlob((i3) => {
      if (!i3) return n3(new Error("文字渲染失败"));
      t32(new File([i3], `text_${e22.id}.png`, { type: "image/png" }));
    }, "image/png");
  });
}
var G = "media-box-video-cut-dir", L = "meta.json", q = "assets", K = "pending-export.bin", J = { mode: "readwrite" }, Y = null;
function X() {
  return Y || (Y = t(() => import("./cache-VMWPWM72.js"), []).then((e22) => e22.default)), Y;
}
var Z2 = /* @__PURE__ */ new Set(["file", "objectUrl", "thumbUrl"]), Q = /* @__PURE__ */ new Set(["file", "objectUrl"]), ee = !1, te = Promise.resolve();
function ne(e22) {
  let t22 = te.then(e22, e22);
  return te = t22.catch(() => {
  }), t22;
}
function ie(e22, t22 = /* @__PURE__ */ new WeakMap()) {
  if (e22 == null) return e22;
  if (At(e22)) return ie(e22.value, t22);
  let n2 = St(e22), r2 = typeof n2;
  if (r2 === "string" || r2 === "number" || r2 === "boolean" || r2 === "bigint") return n2;
  if (r2 === "function" || r2 === "symbol" || r2 === "undefined") return;
  if (n2 instanceof Date) return new Date(n2.getTime());
  if (n2 instanceof RegExp) return new RegExp(n2.source, n2.flags);
  if (typeof Blob < "u" && n2 instanceof Blob) return n2;
  if (typeof ArrayBuffer < "u" && n2 instanceof ArrayBuffer) return Array.from(new Uint8Array(n2));
  if (typeof ArrayBuffer < "u" && ArrayBuffer.isView(n2)) return Array.from(n2);
  if (typeof Node < "u" && n2 instanceof Node) return;
  if (t22.has(n2)) return t22.get(n2);
  if (Array.isArray(n2)) {
    let e32 = [];
    t22.set(n2, e32);
    for (let i2 = 0; i2 < n2.length; i2 += 1) {
      let a2 = ie(n2[i2], t22);
      e32[i2] = a2 === void 0 ? null : a2;
    }
    return e32;
  }
  if (n2 instanceof Map) {
    let e32 = [];
    t22.set(n2, e32);
    for (let [i2, a2] of n2.entries()) {
      let n3 = ie(i2, t22), r3 = ie(a2, t22);
      n3 !== void 0 && r3 !== void 0 && e32.push([n3, r3]);
    }
    return e32;
  }
  if (n2 instanceof Set) {
    let e32 = [];
    t22.set(n2, e32);
    for (let i2 of n2.values()) {
      let n3 = ie(i2, t22);
      n3 !== void 0 && e32.push(n3);
    }
    return e32;
  }
  let o22 = Object.getPrototypeOf(n2);
  if (o22 !== Object.prototype && o22 !== null) return;
  let s22 = {};
  t22.set(n2, s22);
  for (let i2 of Object.keys(n2)) {
    let e32 = ie(n2[i2], t22);
    e32 !== void 0 && (s22[i2] = e32);
  }
  return s22;
}
function ae(e22) {
  let t22 = St(e22);
  if (!t22 || t22.id === "text-template") return null;
  let n2 = {};
  for (let i2 of Object.keys(t22)) {
    if (Z2.has(i2)) continue;
    let e32 = ie(t22[i2]);
    e32 !== void 0 && (n2[i2] = e32);
  }
  return n2;
}
function re(e22) {
  let t22 = St(e22);
  if (!t22) return null;
  let n2 = {};
  for (let i2 of Object.keys(t22)) {
    if (Q.has(i2)) continue;
    let e32 = ie(t22[i2]);
    e32 !== void 0 && (n2[i2] = e32);
  }
  return n2;
}
function oe() {
  return typeof window < "u" && typeof window.showDirectoryPicker == "function";
}
function se(e22) {
  return !(!e22 || typeof e22.getDirectoryHandle != "function");
}
async function le() {
  if (!ee) {
    ee = !0;
    try {
      let e22 = await X();
      await Promise.all([e22.removeItem("media-box-video-cut"), e22.removeItem("media-box-video-cut-export")]);
    } catch {
    }
  }
}
async function ce() {
  let e22 = await X(), t22 = await e22.get(G);
  return se(t22) ? t22 : null;
}
async function ue() {
  await (await X()).removeItem(G);
}
async function fe(e22) {
  if (!se(e22)) return !1;
  try {
    return typeof e22.queryPermission != "function" || await e22.queryPermission(J) === "granted";
  } catch {
    return !1;
  }
}
async function de(e22) {
  if (!se(e22)) return !1;
  try {
    return typeof e22.requestPermission != "function" ? fe(e22) : await e22.requestPermission(J) === "granted";
  } catch {
    return !1;
  }
}
async function me() {
  if (!oe()) return null;
  try {
    let e22 = await window.showDirectoryPicker({ id: "video-cut-workspace", mode: "readwrite" });
    return await (async function(e32) {
      se(e32) && await (await X()).set(G, e32);
    })(e22), e22;
  } catch (e22) {
    if (e22?.name === "AbortError") return null;
    throw e22;
  }
}
async function pe() {
  await le();
  let e22 = await ce();
  return e22 && await fe(e22) ? e22 : null;
}
async function ge(e22, t22) {
  let n2 = await e22.createWritable();
  try {
    await n2.write(t22);
  } finally {
    await n2.close();
  }
}
async function he(e22) {
  try {
    let t22 = await e22.getFileHandle(L), n2 = await t22.getFile(), i2 = await n2.text();
    return i2 ? JSON.parse(i2) : null;
  } catch {
    return null;
  }
}
async function ve(e22, t22) {
  let n2 = await e22.getFileHandle(L, { create: !0 }), i2 = JSON.stringify(t22);
  await ge(n2, new Blob([i2], { type: "application/json" }));
}
function we(e22, t22) {
  let n2 = String(t22 || "blob"), i2 = n2.match(/(\.[a-zA-Z0-9]{1,8})$/), a2 = i2 ? i2[1] : "", r2 = (o22 = n2.slice(0, n2.length - a2.length), String(o22 || "file").replace(/[\\/:*?"<>|\u0000-\u001f]/g, "_").replace(/^\.+/, "_").slice(0, 80).trim() || "file");
  var o22;
  return `${q}/${e22}__${r2}${a2}`;
}
async function be(e22, t22, n2 = !1) {
  let i2 = String(t22).split("/").filter(Boolean), a2 = e22;
  for (let r2 = 0; r2 < i2.length; r2 += 1) {
    let e32 = i2[r2];
    if (r2 === i2.length - 1) return a2.getFileHandle(e32, { create: n2 });
    a2 = await a2.getDirectoryHandle(e32, { create: n2 });
  }
  return null;
}
async function ye(e22) {
  let t22 = [];
  if (!e22?.entries) return t22;
  for await (let [n2] of e22.entries()) t22.push(n2);
  return t22;
}
async function Se(e22, t22) {
  return ne(async () => {
    let n2 = await pe();
    if (!n2) return;
    let i2 = await n2.getDirectoryHandle(q, { create: !0 }), a2 = {}, r2 = /* @__PURE__ */ new Set(), o22 = Object.fromEntries((e22?.assets || []).map((e32) => [String(e32.id), e32.name]));
    for (let [e32, l22] of Object.entries(t22 || {})) {
      if (!(e32 && l22 instanceof Blob)) continue;
      let t32 = we(e32, o22[e32] || l22.name), n3 = t32.slice(7);
      r2.add(n3), a2[e32] = t32;
      let s32 = await i2.getFileHandle(n3, { create: !0 }), c22 = null;
      try {
        c22 = await s32.getFile();
      } catch {
        c22 = null;
      }
      c22 && c22.size === l22.size || await ge(s32, l22);
    }
    for (let e32 of await ye(i2)) r2.has(e32) || await i2.removeEntry(e32, { recursive: !0 }).catch(() => {
    });
    let s22 = await he(n2);
    await ve(n2, { version: 1, updatedAt: Date.now(), state: ie(e22), files: a2, pendingExport: s22?.pendingExport || null });
  });
}
async function xe() {
  return ne(async () => {
    var e22;
    let t22 = await pe();
    if (!t22) return null;
    let n2 = await he(t22);
    if (!n2 || n2.version !== 1 || !n2.state) return null;
    let i2 = {};
    for (let [r2, o22] of Object.entries(n2.files || {})) if (r2 && o22) try {
      let e32 = await be(t22, o22);
      e32 && (i2[r2] = await e32.getFile());
    } catch {
    }
    let a2 = !1;
    try {
      let r2 = await t22.getDirectoryHandle(q), o22 = await ye(r2);
      a2 = o22.length === 0;
      let s22 = Ae(n2.state, n2.files);
      for (let t32 of s22) {
        if (((e22 = i2[t32]) == null ? void 0 : e22.size) > 0) continue;
        let n3 = o22.find((e32) => e32 === t32 || e32.startsWith(`${t32}__`) || e32.startsWith(`${t32}.`));
        if (n3) try {
          let e32 = await r2.getFileHandle(n3);
          i2[t32] = await e32.getFile();
        } catch {
        }
      }
    } catch {
      a2 = !0;
    }
    return { state: n2.state, files: i2, incomplete: Ne(n2.state, i2, n2.files, { assetsDirEmpty: a2 }) };
  });
}
function Ae(e22, t22 = {}) {
  let n2 = /* @__PURE__ */ new Set();
  for (let [i2, a2] of Object.entries(t22 || {})) i2 && a2 && n2.add(String(i2));
  for (let i2 of e22?.assets || []) i2?.id && i2.id !== "text-template" && i2.type !== "text" && n2.add(String(i2.id));
  for (let i2 of [e22?.videoClips, e22?.imageClips, e22?.audioClips]) for (let e32 of i2 || []) {
    let t32 = e32?.assetId;
    t32 && t32 !== "text-template" && n2.add(String(t32));
  }
  return n2;
}
function Ne(e22, t22 = {}, n2 = {}, { assetsDirEmpty: i2 = !1 } = {}) {
  if (!e22) return !1;
  let a2 = Ae(e22, n2);
  if (!a2.size) return !1;
  if (i2) return !0;
  for (let r2 of a2) {
    let e32 = t22[r2] || t22[String(r2)];
    if (!(e32 && e32.size > 0)) return !0;
  }
  return !1;
}
async function Me2() {
  return ne(async () => {
    let e22 = await pe();
    if (!e22) return;
    try {
      let t32 = await e22.getDirectoryHandle(q);
      for (let e32 of await ye(t32)) await t32.removeEntry(e32, { recursive: !0 }).catch(() => {
      });
    } catch {
    }
    let t22 = await he(e22);
    if (t22?.pendingExport) await ve(e22, { version: 1, updatedAt: Date.now(), state: null, files: {}, pendingExport: t22.pendingExport });
    else try {
      await e22.removeEntry(L);
    } catch {
      await ve(e22, { version: 1, updatedAt: Date.now(), state: null, files: {}, pendingExport: null });
    }
  });
}
async function ke() {
  return ne(async () => {
    let e22 = await pe();
    if (!e22) return;
    try {
      await e22.removeEntry(K);
    } catch {
    }
    let t22 = await he(e22);
    if (t22) {
      if (!(t22.state || t22.files && Object.keys(t22.files).length)) try {
        return void await e22.removeEntry(L);
      } catch {
      }
      await ve(e22, { ...t22, pendingExport: null, updatedAt: Date.now() });
    }
  });
}
function Be({ editorVisible: e22, fileName: t22, fileSize: n2, duration: a2, currentTime: r2, activeDock: o22, activeTool: s22, selectedClipId: l22, assetViewMode: c22, assets: u2, trackRows: f2, trackRowStates: d2, videoClips: m22, imageClips: p2, textClips: g2, audioClips: h22, previewRatio: v22, customWidth: w2, customHeight: b22, canvasBg: y2, speed: S2, keepPitch: x2, volume: A2, muted: N2, keepOriginalAudio: M2, fadeIn: k2, fadeOut: B2, pxPerSec: C2, exportForm: P2 }) {
  let D2 = Array.isArray(St(u2)) ? St(u2) : [], H22 = {};
  for (let z2 of D2) {
    let e32 = St(z2);
    e32?.id && e32.file instanceof Blob && (H22[String(e32.id)] = e32.file);
  }
  let j2 = Array.isArray(St(f2)) ? St(f2) : [], $2 = Array.isArray(St(m22)) ? St(m22) : [], E2 = Array.isArray(St(p2)) ? St(p2) : [], R2 = Array.isArray(St(g2)) ? St(g2) : [], F22 = Array.isArray(St(h22)) ? St(h22) : [], O2 = { editorVisible: !!e22, fileName: String(t22 || ""), fileSize: Number(n2) || 0, duration: Number(a2) || 0, currentTime: Number(r2) || 0, activeDock: String(o22 || "assets"), activeTool: String(s22 || "ratio"), selectedClipId: String(l22 || ""), assetViewMode: String(c22 || "grid"), assets: D2.map(ae).filter(Boolean), trackRows: j2.map((e32) => {
    let t32 = St(e32);
    return { id: String(t32.id), type: String(t32.type) };
  }), trackRowStates: ie(d2) || {}, videoClips: $2.map(re).filter(Boolean), imageClips: E2.map(re).filter(Boolean), textClips: R2.map(re).filter(Boolean), audioClips: F22.map(re).filter(Boolean), previewRatio: String(v22 || "adapt"), customWidth: Number(w2) || 1920, customHeight: Number(b22) || 1080, canvasBg: String(y2 || "#000000"), speed: Number(S2) || 1, keepPitch: x2 !== !1, volume: Number(A2) ?? 100, muted: !!N2, keepOriginalAudio: M2 !== !1, fadeIn: Number(k2) || 0, fadeOut: Number(B2) || 0, pxPerSec: Number(C2) || 0, exportForm: { format: "MP4", videoBitRate: "2500k", width: "", height: "", fps: "", presetId: "mp4-720", ...ie(P2) || {} } };
  return { state: ie(O2), files: ie(H22) || {} };
}
function Ce(e22) {
  if (!e22?.state) return null;
  let { state: t22, files: n2 = {} } = e22, i2 = [];
  for (let m22 of t22.assets || []) {
    let e32 = n2[m22.id];
    if (!e32) continue;
    let t32 = URL.createObjectURL(e32);
    i2.push({ ...m22, file: e32, objectUrl: t32, thumbUrl: m22.type === "image" ? t32 : "", onTimeline: !!m22.onTimeline, useCount: Number(m22.useCount) || 0, waveHeights: Array.isArray(m22.waveHeights) ? m22.waveHeights : [] });
  }
  let a2 = Object.fromEntries(i2.map((e32) => [e32.id, e32]));
  function r2(e32) {
    if (!e32) return null;
    let t32 = e32.assetId ? a2[e32.assetId] : null;
    return { ...e32, file: t32?.file || null, objectUrl: t32?.objectUrl || "", waveHeights: Array.isArray(e32.waveHeights) ? e32.waveHeights : t32?.waveHeights || [] };
  }
  let o22 = (t22.trackRows || []).map((e32) => ({ id: e32.id, type: e32.type })), s22 = t22.trackRowStates && typeof t22.trackRowStates == "object" ? { ...t22.trackRowStates } : Object.fromEntries(o22.map((e32) => [e32.id, { muted: !1, hidden: !1, locked: !1 }])), l22 = (t22.textClips || []).map((e32) => ({ ...e32 })), c22 = (t22.audioClips || []).map(r2).filter(Boolean), u2 = (t22.videoClips || []).map(r2).filter(Boolean), f2 = (t22.imageClips || []).map(r2).filter(Boolean), d2 = i2.length > 0 || u2.length > 0 || f2.length > 0 || l22.length > 0 || c22.length > 0 || o22.length > 0;
  return { editorVisible: !(!t22.editorVisible && !d2) && d2, fileName: t22.fileName || "", fileSize: Number(t22.fileSize) || 0, duration: Number(t22.duration) || 0, currentTime: Number(t22.currentTime) || 0, activeDock: t22.activeDock || "assets", activeTool: t22.activeTool || "ratio", selectedClipId: t22.selectedClipId || "", assetViewMode: t22.assetViewMode || "grid", assets: i2, trackRows: o22, trackRowStates: s22, videoClips: u2, imageClips: f2, textClips: l22, audioClips: c22, previewRatio: t22.previewRatio || "adapt", customWidth: Number(t22.customWidth) || 1920, customHeight: Number(t22.customHeight) || 1080, canvasBg: t22.canvasBg || "#000000", speed: Number(t22.speed) || 1, keepPitch: t22.keepPitch !== !1, volume: Number(t22.volume) ?? 100, muted: !!t22.muted, keepOriginalAudio: t22.keepOriginalAudio !== !1, fadeIn: Number(t22.fadeIn) || 0, fadeOut: Number(t22.fadeOut) || 0, pxPerSec: Number(t22.pxPerSec) || 0, exportForm: { format: "MP4", videoBitRate: "2500k", width: "", height: "", fps: "", presetId: "mp4-720", ...t22.exportForm || {} } };
}
var Pe = dt({ status: "idle", progress: 0, startAt: 0, error: null, result: null, format: "", desc: "", pendingDownload: !1 }), De = !1, He = 0, je = null, $e = !1;
function Ee(e22) {
  e22.preventDefault(), e22.returnValue = "";
}
function Re() {
  let e22 = Pe.status === "running";
  e22 && !$e ? (window.addEventListener("beforeunload", Ee), $e = !0) : !e22 && $e && (window.removeEventListener("beforeunload", Ee), $e = !1);
}
function Fe() {
  return Pe.status === "running";
}
function Oe() {
  return Pe.pendingDownload && !!Pe.result && Pe.status === "done";
}
function ze() {
  De = !0;
}
function Te() {
  De = !1;
}
function _e(e22) {
  if (!e22) return;
  let t22 = document.createElement("a");
  t22.href = URL.createObjectURL(e22), t22.download = e22.name, t22.target = "_blank", t22.click();
}
function Ie() {
  return !!Pe.result && (_e(Pe.result), Pe.pendingDownload = !1, ke().catch(() => {
  }), !0);
}
function Ve() {
  Pe.pendingDownload = !1, Pe.result = null, Pe.status = "idle", Pe.progress = 0, Pe.startAt = 0, Pe.error = null, ke().catch(() => {
  });
}
function We() {
  if (Pe.status !== "running") return !1;
  He += 1, je = null;
  try {
    bu.terminate();
  } catch {
  }
  return Pe.status = "idle", Pe.progress = 0, Pe.startAt = 0, Pe.error = null, Pe.result = null, Pe.pendingDownload = !1, ke().catch(() => {
  }), Re(), aO.info("已取消导出"), !0;
}
function Ue(t22, n2 = {}) {
  if (Pe.status === "running") return je || Promise.resolve();
  let i2 = ++He;
  return Pe.status = "running", Pe.progress = 0, Pe.startAt = Date.now(), Pe.error = null, Pe.result = null, Pe.format = n2.format || "", Pe.desc = n2.desc || "", Pe.pendingDownload = !1, ke().catch(() => {
  }), Re(), je = (async () => {
    try {
      let a2 = await t22((e22) => {
        var t32;
        i2 === He && (Pe.progress = e22, (t32 = n2.onProgress) == null || t32.call(n2, e22));
      });
      if (i2 !== He) return;
      Pe.result = a2, Pe.progress = 100, Pe.status = "done", De ? (_e(a2), Pe.pendingDownload = !1, ke().catch(() => {
      }), aO.success("导出完成")) : (Pe.pendingDownload = !0, await (async function(e22, t32 = {}) {
        if (e22) return ne(async () => {
          let n3 = await pe();
          if (!n3) return;
          let i3 = await n3.getFileHandle(K, { create: !0 });
          await ge(i3, e22);
          let a3 = await he(n3);
          await ve(n3, { version: 1, updatedAt: a3?.updatedAt || Date.now(), state: a3?.state || null, files: a3?.files || {}, pendingExport: { name: e22.name, type: e22.type || "video/mp4", format: t32.format || "", desc: t32.desc || "", file: K } });
        });
      })(a2, { format: Pe.format, desc: Pe.desc }).catch(() => {
      }));
    } catch (a2) {
      if (i2 !== He) return;
      Pe.status = "error", Pe.error = a2, Pe.pendingDownload = !1, De && aO.error(a2?.message || "导出失败，请重试");
    } finally {
      i2 === He && (je = null, Re());
    }
  })(), je;
}
function Ge() {
  Pe.status !== "running" && (Pe.status = "idle", Pe.progress = 0, Pe.startAt = 0, Pe.error = null, Pe.result = null, Pe.pendingDownload = !1, Re());
}
async function Le() {
  if (Pe.status === "running" || Pe.result) return;
  let e22 = await (async function() {
    return ne(async () => {
      let e32 = await pe();
      if (!e32) return null;
      let t22 = await he(e32), n2 = t22?.pendingExport;
      if (!n2?.file) return null;
      try {
        let t32 = await e32.getFileHandle(n2.file), i2 = await t32.getFile();
        return { file: i2 instanceof File ? i2 : new File([i2], n2.name || "export.mp4", { type: n2.type || "video/mp4" }), format: n2.format || "", desc: n2.desc || "" };
      } catch {
        return null;
      }
    });
  })();
  e22?.file && (Pe.status = "done", Pe.progress = 100, Pe.result = e22.file, Pe.format = e22.format || "", Pe.desc = e22.desc || "", Pe.pendingDownload = !0, Pe.startAt = 0);
}

// output/native-current/IconEye-BLDBtl06.js
var e5 = r("outline", "eye", "Eye", [["path", { d: "M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-0" }], ["path", { d: "M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6", key: "svg-1" }]]);

// output/native-current/IconLock-CvSf5zfg.js
var v3 = r("outline", "lock", "Lock", [["path", { d: "M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6", key: "svg-0" }], ["path", { d: "M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0", key: "svg-1" }], ["path", { d: "M8 11v-4a4 4 0 1 1 8 0v4", key: "svg-2" }]]);

// output/native-current/Content-CLK3vitb.js
var Xt = r("outline", "arrow-back-up", "ArrowBackUp", [["path", { d: "M9 14l-4 -4l4 -4", key: "svg-0" }], ["path", { d: "M5 10h11a4 4 0 1 1 0 8h-1", key: "svg-1" }]]), Gt = r("outline", "arrow-forward-up", "ArrowForwardUp", [["path", { d: "M15 14l4 -4l-4 -4", key: "svg-0" }], ["path", { d: "M19 10h-11a4 4 0 1 0 0 8h1", key: "svg-1" }]]), Kt = r("outline", "aspect-ratio", "AspectRatio", [["path", { d: "M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10", key: "svg-0" }], ["path", { d: "M7 12v-3h3", key: "svg-1" }], ["path", { d: "M17 12v3h-3", key: "svg-2" }]]), Jt = r("outline", "cut", "Cut", [["path", { d: "M4 17a3 3 0 1 0 6 0a3 3 0 1 0 -6 0", key: "svg-0" }], ["path", { d: "M14 17a3 3 0 1 0 6 0a3 3 0 1 0 -6 0", key: "svg-1" }], ["path", { d: "M9.15 14.85l8.85 -10.85", key: "svg-2" }], ["path", { d: "M6 4l8.85 10.85", key: "svg-3" }]]), Zt = r("outline", "eye-off", "EyeOff", [["path", { d: "M10.585 10.587a2 2 0 0 0 2.829 2.828", key: "svg-0" }], ["path", { d: "M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87", key: "svg-1" }], ["path", { d: "M3 3l18 18", key: "svg-2" }]]), Qt = r("outline", "file", "File", [["path", { d: "M14 3v4a1 1 0 0 0 1 1h4", key: "svg-0" }], ["path", { d: "M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2", key: "svg-1" }]]), ea = r("outline", "flip-horizontal", "FlipHorizontal", [["path", { d: "M12 3l0 18", key: "svg-0" }], ["path", { d: "M16 7l0 10l5 0l-5 -10", key: "svg-1" }], ["path", { d: "M8 7l0 10l-5 0l5 -10", key: "svg-2" }]]), ta = r("outline", "gauge", "Gauge", [["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0", key: "svg-0" }], ["path", { d: "M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-1" }], ["path", { d: "M13.41 10.59l2.59 -2.59", key: "svg-2" }], ["path", { d: "M7 12a5 5 0 0 1 5 -5", key: "svg-3" }]]), aa = r("outline", "loader-2", "Loader2", [["path", { d: "M12 3a9 9 0 1 0 9 9", key: "svg-0" }]]), la = r("outline", "player-skip-back", "PlayerSkipBack", [["path", { d: "M20 5v14l-12 -7l12 -7", key: "svg-0" }], ["path", { d: "M4 5l0 14", key: "svg-1" }]]), ia = r("outline", "player-skip-forward", "PlayerSkipForward", [["path", { d: "M4 5v14l12 -7l-12 -7", key: "svg-0" }], ["path", { d: "M20 5l0 14", key: "svg-1" }]]), na = r("outline", "shield-check", "ShieldCheck", [["path", { d: "M11.46 20.846a12 12 0 0 1 -7.96 -14.846a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 -.09 7.06", key: "svg-0" }], ["path", { d: "M15 19l2 2l4 -4", key: "svg-1" }]]), oa = r("outline", "spacing-horizontal", "SpacingHorizontal", [["path", { d: "M20 20h-2a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h2", key: "svg-0" }], ["path", { d: "M4 20h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2", key: "svg-1" }], ["path", { d: "M12 8v8", key: "svg-2" }]]);
"stream" in Blob.prototype || Object.defineProperty(Blob.prototype, "stream", { value() {
  return new Response(this).body;
} }), "setBigUint64" in DataView.prototype || Object.defineProperty(DataView.prototype, "setBigUint64", { value(e22, t22, a2) {
  let l22 = Number(0xffffffffn & t22), i2 = Number(t22 >> 32n);
  this.setUint32(e22 + (a2 ? 0 : 4), l22, a2), this.setUint32(e22 + (a2 ? 4 : 0), i2, a2);
} });
var sa = (e22) => new DataView(new ArrayBuffer(e22)), ra = (e22) => new Uint8Array(e22.buffer || e22), ua = (e22) => new TextEncoder().encode(String(e22)), da = (e22) => Math.min(4294967295, Number(e22)), ca = (e22) => Math.min(65535, Number(e22));
function va(e22, t22, a2) {
  t22 === void 0 || t22 instanceof Date || (t22 = new Date(t22));
  let l22 = e22 !== void 0;
  if (a2 || (a2 = l22 ? 436 : 509), e22 instanceof File) return { isFile: l22, t: t22 || new Date(e22.lastModified), bytes: e22.stream(), mode: a2 };
  if (e22 instanceof Response) return { isFile: l22, t: t22 || new Date(e22.headers.get("Last-Modified") || Date.now()), bytes: e22.body, mode: a2 };
  if (t22 === void 0) t22 = /* @__PURE__ */ new Date();
  else if (isNaN(t22)) throw new Error("Invalid modification date.");
  if (!l22) return { isFile: l22, t: t22, mode: a2 };
  if (typeof e22 == "string") return { isFile: l22, t: t22, bytes: ua(e22), mode: a2 };
  if (e22 instanceof Blob) return { isFile: l22, t: t22, bytes: e22.stream(), mode: a2 };
  if (e22 instanceof Uint8Array || e22 instanceof ReadableStream) return { isFile: l22, t: t22, bytes: e22, mode: a2 };
  if (e22 instanceof ArrayBuffer || ArrayBuffer.isView(e22)) return { isFile: l22, t: t22, bytes: ra(e22), mode: a2 };
  if (Symbol.asyncIterator in e22) return { isFile: l22, t: t22, bytes: pa(e22[Symbol.asyncIterator]()), mode: a2 };
  throw new TypeError("Unsupported input format.");
}
function pa(e22, t22 = e22) {
  return new ReadableStream({ async pull(t32) {
    let a2 = 0;
    for (; t32.desiredSize > a2; ) {
      let l22 = await e22.next();
      if (!l22.value) {
        t32.close();
        break;
      }
      {
        let e32 = ma(l22.value);
        t32.enqueue(e32), a2 += e32.byteLength;
      }
    }
  }, cancel(e32) {
    var a2;
    (a2 = t22.throw) == null || a2.call(t22, e32);
  } });
}
function ma(e22) {
  return typeof e22 == "string" ? ua(e22) : e22 instanceof Uint8Array ? e22 : ra(e22);
}
function fa(e22, t22, a2) {
  let [l22, i2] = (n2 = t22) ? n2 instanceof Uint8Array ? [n2, 1] : ArrayBuffer.isView(n2) || n2 instanceof ArrayBuffer ? [ra(n2), 1] : [ua(n2), 0] : [void 0, 0];
  var n2;
  if (e22 instanceof File) return { i: ba(l22 || ua(e22.name)), o: BigInt(e22.size), u: i2 };
  if (e22 instanceof Response) {
    let t32 = e22.headers.get("content-disposition"), n3 = t32 && t32.match(/;\s*filename\*?\s*=\s*(?:UTF-\d+''|)["']?([^;"'\r\n]*)["']?(?:;|$)/i), o22 = n3 && n3[1] || e22.url && new URL(e22.url).pathname.split("/").findLast(Boolean), s22 = o22 && decodeURIComponent(o22), r2 = a2 || +e22.headers.get("content-length");
    return { i: ba(l22 || ua(s22)), o: BigInt(r2), u: i2 };
  }
  return l22 = ba(l22, e22 !== void 0 || a2 !== void 0), typeof e22 == "string" ? { i: l22, o: BigInt(ua(e22).length), u: i2 } : e22 instanceof Blob ? { i: l22, o: BigInt(e22.size), u: i2 } : e22 instanceof ArrayBuffer || ArrayBuffer.isView(e22) ? { i: l22, o: BigInt(e22.byteLength), u: i2 } : { i: l22, o: ha(e22, a2), u: i2 };
}
function ha(e22, t22) {
  return t22 > -1 ? BigInt(t22) : e22 ? void 0 : 0n;
}
function ba(e22, t22 = 1) {
  if (!e22 || e22.every((e32) => e32 === 47)) throw new Error("The file must have a name.");
  if (t22) for (; e22[e22.length - 1] === 47; ) e22 = e22.subarray(0, -1);
  else e22[e22.length - 1] !== 47 && (e22 = new Uint8Array([...e22, 47]));
  return e22;
}
var ga = new Uint32Array(256);
for (let fd = 0; fd < 256; ++fd) {
  let e22 = fd;
  for (let t22 = 0; t22 < 8; ++t22) e22 = e22 >>> 1 ^ (1 & e22 && 3988292384);
  ga[fd] = e22;
}
function ya(e22, t22 = 0) {
  t22 = ~t22;
  for (var a2 = 0, l22 = e22.length; a2 < l22; a2++) t22 = t22 >>> 8 ^ ga[255 & t22 ^ e22[a2]];
  return ~t22 >>> 0;
}
function xa(e22, t22, a2 = 0) {
  let l22 = e22.getSeconds() >> 1 | e22.getMinutes() << 5 | e22.getHours() << 11, i2 = e22.getDate() | e22.getMonth() + 1 << 5 | e22.getFullYear() - 1980 << 9;
  t22.setUint16(a2, l22, 1), t22.setUint16(a2 + 2, i2, 1);
}
function wa({ i: e22, u: t22 }, a2) {
  return 8 * (!t22 || (a2 ?? (function(e32) {
    try {
      ka.decode(e32);
    } catch {
      return 0;
    }
    return 1;
  })(e22)));
}
var ka = new TextDecoder("utf8", { fatal: 1 });
function Ma(e22, t22 = 0) {
  let a2 = sa(30);
  return a2.setUint32(0, 1347093252), a2.setUint32(4, 754976768 | t22), xa(e22.t, a2, 10), a2.setUint16(26, e22.i.length, 1), ra(a2);
}
async function* Ca(e22) {
  let { bytes: t22 } = e22;
  if ("then" in t22 && (t22 = await t22), t22 instanceof Uint8Array) yield t22, e22.l = ya(t22, 0), e22.o = BigInt(t22.length);
  else {
    e22.o = 0n;
    let a2 = t22.getReader();
    for (; ; ) {
      let { value: t32, done: l22 } = await a2.read();
      if (l22) break;
      e22.l = ya(t32, e22.l), e22.o += BigInt(t32.length), yield t32;
    }
  }
}
function Sa(e22, t22) {
  let a2 = sa(16 + (t22 ? 8 : 0));
  return a2.setUint32(0, 1347094280), a2.setUint32(4, e22.isFile ? e22.l : 0, 1), t22 ? (a2.setBigUint64(8, e22.o, 1), a2.setBigUint64(16, e22.o, 1)) : (a2.setUint32(8, da(e22.o), 1), a2.setUint32(12, da(e22.o), 1)), ra(a2);
}
function Ta(e22, t22, a2 = 0, l22 = 0) {
  let i2 = sa(46);
  return i2.setUint32(0, 1347092738), i2.setUint32(4, 755182848), i2.setUint16(8, 2048 | a2), xa(e22.t, i2, 12), i2.setUint32(16, e22.isFile ? e22.l : 0, 1), i2.setUint32(20, da(e22.o), 1), i2.setUint32(24, da(e22.o), 1), i2.setUint16(28, e22.i.length, 1), i2.setUint16(30, l22, 1), i2.setUint16(40, e22.mode | (e22.isFile ? 32768 : 16384), 1), i2.setUint32(42, da(t22), 1), ra(i2);
}
function Ua(e22, t22, a2) {
  let l22 = sa(a2);
  return l22.setUint16(0, 1, 1), l22.setUint16(2, a2 - 4, 1), 16 & a2 && (l22.setBigUint64(4, e22.o, 1), l22.setBigUint64(12, e22.o, 1)), l22.setBigUint64(a2 - 8, t22, 1), ra(l22);
}
function Ia(e22) {
  return e22 instanceof File || e22 instanceof Response ? [[e22], [e22]] : [[e22.input, e22.name, e22.size], [e22.input, e22.lastModified, e22.mode]];
}
function za(e22, t22 = {}) {
  let a2 = { "Content-Type": "application/zip", "Content-Disposition": "attachment" };
  return (typeof t22.length == "bigint" || Number.isInteger(t22.length)) && t22.length > 0 && (a2["Content-Length"] = String(t22.length)), t22.metadata && (a2["Content-Length"] = String(((e32) => (function(e42) {
    let t32 = BigInt(22), a3 = 0n, l22 = 0;
    for (let i2 of e42) {
      if (!i2.i) throw new Error("Every file must have a non-empty name.");
      if (i2.o === void 0) throw new Error(`Missing size for file "${new TextDecoder().decode(i2.i)}".`);
      let e52 = i2.o >= 0xffffffffn, n2 = a3 >= 0xffffffffn;
      a3 += BigInt(46 + i2.i.length + (e52 && 8)) + i2.o, t32 += BigInt(i2.i.length + 46 + (12 * n2 | 28 * e52)), l22 || (l22 = e52);
    }
    return (l22 || a3 >= 0xffffffffn) && (t32 += BigInt(76)), t32 + a3;
  })((function* (e42) {
    for (let t32 of e42) yield fa(...Ia(t32)[0]);
  })(e32)))(t22.metadata))), new Response((function(e32, t32 = {}) {
    let a3 = (function(e42) {
      var t4;
      let a4 = e42[Symbol.iterator in e42 ? Symbol.iterator : Symbol.asyncIterator]();
      return { async next() {
        let e52 = await a4.next();
        if (e52.done) return e52;
        let [t5, l22] = Ia(e52.value);
        return { done: 0, value: Object.assign(va(...l22), fa(...t5)) };
      }, throw: (t4 = a4.throw) == null ? void 0 : t4.bind(a4), [Symbol.asyncIterator]() {
        return this;
      } };
    })(e32);
    return pa((async function* (e42, t4) {
      let a4 = [], l22 = 0n, i2 = 0n, n2 = 0;
      for await (let r2 of e42) {
        let e52 = wa(r2, t4.buffersAreUTF8);
        yield Ma(r2, e52), yield new Uint8Array(r2.i), r2.isFile && (yield* Ca(r2));
        let o32 = r2.o >= 0xffffffffn, s32 = 12 * (l22 >= 0xffffffffn) | 28 * o32;
        yield Sa(r2, o32), a4.push(Ta(r2, l22, e52, s32)), a4.push(r2.i), s32 && a4.push(Ua(r2, l22, s32)), o32 && (l22 += 8n), i2++, l22 += BigInt(46 + r2.i.length) + r2.o, n2 || (n2 = o32);
      }
      let o22 = 0n;
      for (let r2 of a4) yield r2, o22 += BigInt(r2.length);
      if (n2 || l22 >= 0xffffffffn) {
        let e52 = sa(76);
        e52.setUint32(0, 1347094022), e52.setBigUint64(4, BigInt(44), 1), e52.setUint32(12, 755182848), e52.setBigUint64(24, i2, 1), e52.setBigUint64(32, i2, 1), e52.setBigUint64(40, o22, 1), e52.setBigUint64(48, l22, 1), e52.setUint32(56, 1347094023), e52.setBigUint64(64, l22 + o22, 1), e52.setUint32(72, 1, 1), yield ra(e52);
      }
      let s22 = sa(22);
      s22.setUint32(0, 1347093766), s22.setUint16(8, ca(i2), 1), s22.setUint16(10, ca(i2), 1), s22.setUint32(12, da(o22), 1), s22.setUint32(16, da(l22), 1), yield ra(s22);
    })(a3, t32), a3);
  })(e22, t22), { headers: a2 });
}
function Ra(e22) {
  let t22 = Number(e22.progress);
  return !Number.isFinite(t22) || t22 < 0 ? 0 : Math.min(100, Math.round(t22));
}
function Pa(e22) {
  if (e22.error) return "处理失败";
  if (e22.convertedFile || e22.progress === 100) return "处理完成";
  let t22 = Ra(e22);
  return t22 > 0 ? `处理中 ${t22}%` : "处理中";
}
function Na(t22, a2) {
  let l22 = [t22.sizeLabel, t22.durationLabel].filter(Boolean), i2 = t22.formatLabel || (t22.ext || "").toUpperCase();
  i2 && l22.push(`格式 ${i2}`), t22.resolution && l22.push(`分辨率 ${t22.resolution}`), t22.audioQualityLabel && l22.push(`音频 ${t22.audioQualityLabel}`);
  let n2 = (function(t32) {
    return Number.isFinite(t32.elapsedMs) && t32.elapsedMs >= 0 ? Nu(t32.elapsedMs) : t32.convertStartAt ? Nu(Date.now() - t32.convertStartAt) : "";
  })(t22);
  return n2 && l22.push(`用时 ${n2}`), l22.join("  ");
}
function Fa(a2) {
  let { maxSizeMB: l22, maxFiles: i2, zipPrefix: n2 } = a2, o22 = Et([]), s22 = Et({ converting: !1, converted: !1, convertStartAt: 0, convertElapsedMs: null }), r2 = Et(Date.now()), u2 = null, d2 = !1;
  function c22() {
    u2 && (clearInterval(u2), u2 = null);
  }
  let f2 = $o(() => {
    if (!o22.value.length) return 0;
    let e22 = o22.value.reduce((e32, t22) => e32 + Ra(t22), 0);
    return Math.round(e22 / o22.value.length);
  }), h22 = $o(() => {
    r2.value;
    let t22 = s22.value.convertElapsedMs;
    return t22 != null ? Nu(t22) : s22.value.converting && s22.value.convertStartAt ? Nu(Date.now() - s22.value.convertStartAt) : "";
  }), b22 = $o(() => (function(e22) {
    if (!e22) return "0 B";
    let t22 = ["B", "KB", "MB", "GB"], a3 = 0, l32 = e22;
    for (; l32 >= 1024 && a3 < t22.length - 1; ) l32 /= 1024, a3++;
    return `${l32.toFixed(a3 ? 1 : 0)} ${t22[a3]}`;
  })(o22.value.reduce((e22, t22) => e22 + (t22.size || 0), 0)));
  function g2() {
    Mt(o22), r2.value = Date.now();
  }
  function y2(e22, t22) {
    e22.progress = t22, g2();
  }
  function x2() {
    o22.value.forEach((e22) => {
      e22.progress = 0, e22.convertedFile = null, e22.error = !1, e22.convertStartAt = null, e22.elapsedMs = null;
    }), s22.value.converted = !1, s22.value.convertStartAt = 0, s22.value.convertElapsedMs = null;
  }
  return { uploadFiles: o22, uiCtrl: s22, nowTick: r2, maxFiles: i2, overallProgress: f2, overallTimeLabel: h22, totalSizeText: b22, addFiles: function(e22) {
    if (s22.value.converting) return;
    let a3 = Array.from(e22 || []);
    for (let n3 of a3) {
      if (o22.value.length >= i2) {
        aO.error(`最多仅支持${i2}个文件`);
        break;
      }
      let e32 = new yu(n3);
      e32.size / 1048576 > l22 ? aO.error(`文件体积超过${l22}MB`) : (o22.value.push(e32), e32.stat().then(() => g2()));
    }
  }, startConvert: async function(e22, t22 = {}) {
    var a3;
    if (!s22.value.converting && o22.value.length) {
      s22.value.converted && x2(), s22.value.converting = !0, s22.value.converted = !1, s22.value.convertStartAt = Date.now(), s22.value.convertElapsedMs = null, c22(), r2.value = Date.now(), u2 = setInterval(() => {
        r2.value = Date.now();
      }, 200);
      try {
        for (let i3 of o22.value) if (!d2 && !i3.convertedFile) {
          i3.error = !1, i3.elapsedMs = null, i3.convertStartAt = null;
          try {
            i3.duration || await i3.stat(), i3.convertStartAt = Date.now(), y2(i3, 1);
            let l32 = await e22(i3, (e32) => y2(i3, e32));
            i3.convertedFile = l32, i3.elapsedMs = Date.now() - i3.convertStartAt, y2(i3, 100), (a3 = t22.onSuccess) == null || a3.call(t22, i3);
          } catch {
            i3.error = !0, i3.convertStartAt && (i3.elapsedMs = Date.now() - i3.convertStartAt), g2();
          }
        }
      } finally {
        s22.value.convertStartAt && (s22.value.convertElapsedMs = Date.now() - s22.value.convertStartAt), c22(), s22.value.converting = !1, s22.value.converted = !0;
      }
    }
  }, downloadFile: function(e22) {
    if (e22.convertedFile) {
      let t22 = document.createElement("a");
      t22.href = URL.createObjectURL(e22.convertedFile), t22.download = e22.convertedFile.name, t22.target = "_blank", t22.click();
    }
  }, downloadAll: async function() {
    let e22 = [], t22 = [];
    for (let a3 of o22.value) if (a3.convertedFile) {
      let l32 = a3.nameWithoutExt, i3 = a3.convertedFile.name.split(".").pop(), n3 = 1;
      for (; t22.includes(l32); ) l32 = a3.nameWithoutExt + "_" + n3++;
      t22.push(l32), e22.push({ name: `${l32}.${i3}`, input: a3.convertedFile });
    }
    if (e22.length) {
      let a3 = await za(e22).blob(), l32 = document.createElement("a");
      l32.href = URL.createObjectURL(a3), l32.download = `${n2}-包含${t22[0]}等.zip`, l32.target = "_blank", l32.click();
    }
  }, clear: function() {
    o22.value.forEach((e22) => {
      e22.destroy();
    }), o22.value = [], s22.value.converted = !1, s22.value.convertStartAt = 0, s22.value.convertElapsedMs = null;
  }, clearConvertStatus: x2, deleteFile: function(e22) {
    var t22;
    if (s22.value.converting) return;
    let [a3] = o22.value.splice(e22, 1);
    (t22 = a3?.destroy) == null || t22.call(a3), o22.value.length === 0 && x2();
  }, dispose: function() {
    d2 = !0, c22(), o22.value.forEach((e22) => e22.destroy());
  } };
}
var Ba = { class: "flex-1 min-w-0 flex flex-col gap-3" }, Aa = ["accept", "disabled"], Va = { class: "size-16 rounded-2xl grid place-items-center mb-3 drop-icon" }, $a = { class: "mt-1.5 text-[12px] d-label-2" }, Da = { class: "flex items-start gap-3" }, La = { class: "min-w-0 flex-1" }, Ea = { class: "text-[13px] font-medium truncate", style: { color: "var(--d-label)" } }, ja = { class: "mt-1 text-[11px] leading-4 truncate d-label-2" }, _a = { class: "shrink-0 flex items-center gap-2.5 pt-0.5" }, Oa = ["onClick"], Wa = ["disabled", "onClick"], Ha = { class: "h-11 rounded-xl px-3.5 flex items-center justify-between gap-3 footer-bar" }, qa = { class: "text-[12px] flex items-center gap-2 min-w-0 d-label-2" }, Ya = { class: "truncate" }, Xa = { style: { color: "var(--d-label)" } }, Ga = { class: "shrink-0" }, Ka = { class: "flex items-center gap-3 shrink-0" }, Ja = { key: 0, class: "text-[12px] tabular-nums d-label-2" }, Za = ["disabled"], Qa = /* @__PURE__ */ o({ __name: "ConvertWorkspace", props: { files: { type: Array, default: () => [] }, converting: { type: Boolean, default: !1 }, converted: { type: Boolean, default: !1 }, nowTick: { type: Number, default: 0 }, accept: { type: String, default: "" }, hint: { type: String, default: "" }, maxFiles: { type: Number, default: 5 }, overallTimeLabel: { type: String, default: "" }, totalSizeText: { type: String, default: "0 B" } }, emits: ["add-files", "remove", "clear", "download", "download-all"], setup(e22, { emit: t22 }) {
  let a2 = e22, l22 = t22, i2 = Et(), n2 = Et(!1), o22 = $o(() => !(!a2.files.length || a2.converting) && (!!a2.converted || a2.files.length < a2.maxFiles)), s22 = $o(() => a2.converted ? "h-10 w-full rounded-full text-[12px] font-medium flex items-center justify-center gap-1.5 shrink-0 convert-download-btn" : "h-10 w-full rounded-xl text-[12px] flex items-center justify-center gap-1.5 border border-dashed shrink-0 extra-add-btn");
  function r2(e32) {
    return e32.convertedFile || a2.converting || e32.progress > 0 || e32.error ? "is-busy px-3.5 pt-3 pb-3.5" : "px-3.5 py-3";
  }
  function u2(e32) {
    return e32.error ? { width: `${Math.max(Ra(e32), 50)}%` } : e32.convertedFile ? { width: "100%" } : { width: `${Ra(e32)}%` };
  }
  function d2() {
    a2.converting || a2.files.length >= a2.maxFiles || i2.value && (i2.value.value = "", i2.value.click());
  }
  function c22(e32) {
    l22("add-files", e32.target.files), e32.target.value = "";
  }
  function m22() {
    a2.converting || (n2.value = !0);
  }
  function P2() {
    n2.value = !1;
  }
  function N2(e32) {
    n2.value = !1, a2.converting || l22("add-files", e32.dataTransfer.files);
  }
  function F22() {
    a2.converted ? l22("download-all") : d2();
  }
  return (t32, a3) => (Zr(), eo("div", Ba, [io("div", { class: "relative flex-1 min-h-0 flex flex-col p-2.5 rounded-2xl overflow-hidden convert-workspace-files", onDragover: sl(m22, ["prevent"]), onDragleave: P2, onDrop: sl(N2, ["prevent"]) }, [io("div", { class: W(["flex-1 border-[1.5px] border-dashed transition-colors rounded-2xl drop-zone", { "drop-active": n2.value }]) }, [io("input", { ref_key: "fileInput", ref: i2, type: "file", multiple: "", class: "hidden", accept: e22.accept, disabled: e22.converting || e22.files.length >= e22.maxFiles, onChange: c22 }, null, 40, Aa), yn(io("div", { class: "absolute inset-0 flex flex-col items-center justify-center text-center px-6 cursor-pointer", onClick: d2 }, [io("div", Va, [lo(Lt(l5), { class: "size-9" })]), a3[2] || (a3[2] = io("div", { class: "text-[14px]", style: { color: "var(--d-label)" } }, [uo(" 将文件拖到此处，或 "), io("span", { class: "font-medium", style: { color: "var(--primary-color)" } }, "点击上传")], -1)), io("div", $a, Z(e22.hint), 1)], 512), [[di, !e22.files.length]]), yn(io("div", { class: "inset-0 p-3 overflow-auto custom-scroll flex flex-col gap-2.5", onClick: a3[0] || (a3[0] = sl(() => {
  }, ["stop"])) }, [(Zr(!0), eo(Hr, null, Es(e22.files, (t4, i3) => (Zr(), eo("div", { key: t4.id, class: W(["convert-file-card rounded-xl", r2(t4)]) }, [io("div", Da, [io("div", La, [io("div", Ea, Z(t4.name), 1), io("div", ja, Z(Lt(Na)(t4, e22.nowTick)), 1)]), io("div", _a, [t4.convertedFile ? (Zr(), eo(Hr, { key: 0 }, [a3[4] || (a3[4] = io("span", { class: "text-[12px] d-label-2" }, "处理完成", -1)), io("button", { type: "button", class: "convert-download-btn h-8 px-3 rounded-full text-[12px] font-medium flex items-center gap-1", onClick: (e32) => l22("download", t4) }, [lo(Lt(o3), { class: "size-3.5" }), a3[3] || (a3[3] = uo("下载 "))], 8, Oa)], 64)) : e22.converting || t4.error || t4.progress > 0 ? (Zr(), eo("span", { key: 1, class: W(["text-[12px] tabular-nums", t4.error ? "text-red-500" : "status-progress"]) }, Z(Lt(Pa)(t4)), 3)) : (Zr(), eo("button", { key: 2, type: "button", class: "size-8 rounded-lg grid place-items-center shrink-0 delete-btn", title: "删除", disabled: e22.converting, onClick: (e32) => l22("remove", i3) }, [lo(Lt(s2), { class: "size-[15px]" })], 8, Wa))])]), e22.converting || e22.converted || t4.progress > 0 || t4.convertedFile ? (Zr(), eo("div", { key: 0, class: W(["convert-file-progress", { "is-done": t4.convertedFile && !t4.error, "is-error": t4.error, "is-waiting": e22.converting && !t4.error && Lt(Ra)(t4) < 2 && !t4.convertedFile }]), style: V(u2(t4)) }, null, 6)) : po("", !0)], 2))), 128))], 512), [[di, e22.files.length]])], 2)], 32), yn(io("button", { type: "button", class: W(s22.value), onClick: F22 }, [e22.converted ? (Zr(), to(Lt(o3), { key: 0, class: "size-3.5" })) : (Zr(), to(Lt(h), { key: 1, class: "size-3.5" })), uo(" " + Z(e22.converted ? "下载全部" : "继续添加文件"), 1)], 2), [[di, o22.value]]), io("div", Ha, [io("div", qa, [lo(Lt(Qt), { class: "size-3.5 shrink-0" }), io("span", Ya, [a3[5] || (a3[5] = uo(" 已添加 ")), io("span", Xa, Z(e22.files.length), 1), a3[6] || (a3[6] = uo(" 个文件 "))]), a3[7] || (a3[7] = io("span", null, "|", -1)), io("span", Ga, "总大小：" + Z(e22.totalSizeText), 1)]), io("div", Ka, [e22.overallTimeLabel ? (Zr(), eo("span", Ja, "总用时 " + Z(e22.overallTimeLabel), 1)) : po("", !0), io("button", { type: "button", class: "text-[12px] flex items-center gap-1 hover:opacity-80 disabled:opacity-40 disabled:hover:opacity-40", style: { color: "var(--d-label-2)" }, disabled: e22.converting, onClick: a3[1] || (a3[1] = (e32) => l22("clear")) }, [lo(Lt(s2), { class: "size-3.5" }), a3[8] || (a3[8] = uo(" 清空列表 "))], 8, Za)])])]));
} }, [["__scopeId", "data-v-a2e780a2"]]), el = { class: "shrink-0 flex flex-col min-h-0" }, tl = { class: "glass-panel rounded-2xl p-3 flex-1 min-h-0 flex flex-col" }, al = { class: "flex items-center gap-2 mb-3 shrink-0" }, ll = { class: "size-7 rounded-full grid place-items-center shrink-0 setting-icon" }, il = { class: "text-[13px] font-semibold", style: { color: "var(--d-label)" } }, nl = { class: "flex-1 min-h-0 overflow-auto custom-scroll" }, ol = ["disabled"], sl2 = /* @__PURE__ */ o({ __name: "OutputPanel", props: { title: { type: String, default: "输出设置" }, busy: { type: Boolean, default: !1 }, done: { type: Boolean, default: !1 }, startLabel: { type: String, default: "开始" } }, emits: ["start"], setup(e22, { emit: t22 }) {
  let a2 = t22;
  return (t32, l22) => (Zr(), eo("aside", el, [io("div", tl, [io("div", al, [io("div", ll, [lo(Lt(c), { class: "size-3.5" })]), io("div", il, Z(e22.title), 1)]), io("div", nl, [Os(t32.$slots, "default", {}, void 0, !0)]), io("button", { type: "button", class: "start-btn h-10 w-full rounded-full text-[13px] font-medium text-white flex items-center justify-center gap-2 mt-3 shrink-0", disabled: e22.busy, onClick: l22[0] || (l22[0] = (e32) => a2("start")) }, [e22.busy ? (Zr(), to(Lt(aa), { key: 0, class: "size-3.5 animate-spin" })) : e22.done ? (Zr(), to(Lt(kt), { key: 1, class: "size-3.5" })) : (Zr(), to(Lt(l2), { key: 2, class: "size-3.5" })), io("span", null, Z(e22.startLabel), 1)], 8, ol)])]));
} }, [["__scopeId", "data-v-ead6218e"]]), rl = { class: "flex flex-col gap-2 max-h-100 p-2 pr-4" }, ul = { class: "flex items-center f12" }, dl = { class: "flex items-center f12" }, cl = { class: "flex items-center gap-2" }, vl = { class: "flex items-center f12" }, pl = { class: "flex-1 flex items-center gap-2" }, ml = { class: "flex items-center f12" }, fl = { class: "flex-1 flex items-center gap-2" }, hl = { class: "flex-1 pl-1" }, bl = { class: "font-bold f14 mb-2 flex items-center gap-6" }, gl = { class: "flex items-center f12" }, yl = { class: "flex items-center f12" }, xl = { class: "flex items-center f12" }, wl = { class: "flex items-center f12" }, kl = { __name: "CustomPopover", props: { form: { type: Object, required: !0 }, converting: { type: Boolean, default: !1 }, isGif: { type: Boolean, default: !1 }, availableEncoders: { type: Object, default: () => ({ videos: [], audios: [] }) } }, emits: ["changed"], setup(e22, { emit: t22 }) {
  let s22 = e22, r2 = t22;
  function u2() {
    s22.form.customFps && (s22.form.fps = "");
  }
  return (t32, s32) => {
    let d2 = dv, c22 = uv, v22 = l, p2 = Mh, m22 = $h, g2 = Vk, y2 = tC, x2 = nd;
    return Zr(), eo("div", { class: "w-full", onClick: s32[21] || (s32[21] = sl(() => {
    }, ["stop"])) }, [lo(x2, null, { default: mn(() => [io("div", rl, [s32[34] || (s32[34] = io("div", { class: "font-bold f14 mb-2" }, "视频参数", -1)), io("label", ul, [s32[22] || (s32[22] = io("span", { class: "w-12 grow-0 shrink-0" }, "编码", -1)), lo(c22, { modelValue: e22.form.videoEncoder, "onUpdate:modelValue": s32[0] || (s32[0] = (t4) => e22.form.videoEncoder = t4), size: "small", onChange: s32[1] || (s32[1] = (e32) => r2("changed")), placeholder: "默认", disabled: e22.converting || e22.isGif }, { default: mn(() => [(Zr(!0), eo(Hr, null, Es(Lt(hu), (t4) => (Zr(), to(d2, { key: t4.value, label: t4.title, value: t4.value, disabled: !e22.availableEncoders.videos.includes(t4.value) }, null, 8, ["label", "value", "disabled"]))), 128))]), _: 1 }, 8, ["modelValue", "disabled"])]), io("div", dl, [s32[26] || (s32[26] = io("span", { class: "w-12 grow-0 shrink-0" }, "分辨率", -1)), io("div", cl, [lo(v22, { size: "small", modelValue: e22.form.width, "onUpdate:modelValue": s32[2] || (s32[2] = (t4) => e22.form.width = t4), modelModifiers: { integer: !0 }, min: 1, class: "flex-1", disabled: e22.converting, onChange: s32[3] || (s32[3] = (t4) => e22.form.resolution = "") }, { append: mn(() => s32[23] || (s32[23] = [uo("W")])), _: 1 }, 8, ["modelValue", "disabled"]), s32[25] || (s32[25] = io("div", null, "*", -1)), lo(v22, { size: "small", modelValue: e22.form.height, "onUpdate:modelValue": s32[4] || (s32[4] = (t4) => e22.form.height = t4), modelModifiers: { integer: !0 }, min: 1, class: "flex-1", disabled: e22.converting, onChange: s32[5] || (s32[5] = (t4) => e22.form.resolution = "") }, { append: mn(() => s32[24] || (s32[24] = [uo("H")])), _: 1 }, 8, ["modelValue", "disabled"])])]), io("div", vl, [s32[27] || (s32[27] = io("span", { class: "w-12 grow-0 shrink-0" }, "帧率", -1)), io("div", pl, [lo(m22, { modelValue: e22.form.fps, "onUpdate:modelValue": s32[6] || (s32[6] = (t4) => e22.form.fps = t4), size: "small", class: "flex-1", disabled: e22.converting, onChange: s32[7] || (s32[7] = (t4) => e22.form.customFps = null) }, { default: mn(() => [lo(p2, { label: "保持原始", value: "" }), (Zr(!0), eo(Hr, null, Es(Lt(ku), (e32) => (Zr(), to(p2, { key: e32, label: e32, value: e32 }, null, 8, ["label", "value"]))), 128))]), _: 1 }, 8, ["modelValue", "disabled"]), lo(v22, { size: "small", modelValue: e22.form.customFps, "onUpdate:modelValue": s32[8] || (s32[8] = (t4) => e22.form.customFps = t4), modelModifiers: { integer: !0 }, placeholder: "自定义", class: "flex-[60px] grow-0 shrink-0", disabled: e22.converting, onChange: u2 }, null, 8, ["modelValue", "disabled"])])]), io("div", ml, [s32[28] || (s32[28] = io("span", { class: "w-12 grow-0 shrink-0" }, "码率", -1)), io("div", fl, [io("div", hl, [lo(g2, { modelValue: e22.form.videoBitRateSlider, "onUpdate:modelValue": s32[9] || (s32[9] = (t4) => e22.form.videoBitRateSlider = t4), min: 0, step: 0.5, "show-tooltip": !1, size: "small", onInput: s32[10] || (s32[10] = (t4) => e22.form.videoBitRate = 1e3 * e22.form.videoBitRateSlider), disabled: e22.converting || e22.isGif }, null, 8, ["modelValue", "disabled"])]), lo(v22, { size: "small", modelValue: e22.form.videoBitRate, "onUpdate:modelValue": s32[11] || (s32[11] = (t4) => e22.form.videoBitRate = t4), modelModifiers: { integer: !0 }, placeholder: "自定义", class: "flex-[60px] grow-0 shrink-0", disabled: e22.converting || e22.isGif }, null, 8, ["modelValue", "disabled"])])]), io("div", bl, [s32[29] || (s32[29] = io("span", null, "音频", -1)), lo(y2, { modelValue: e22.form.audioEnable, "onUpdate:modelValue": s32[12] || (s32[12] = (t4) => e22.form.audioEnable = t4), size: "small", disabled: e22.converting || e22.isGif }, null, 8, ["modelValue", "disabled"])]), e22.form.audioEnable ? (Zr(), eo(Hr, { key: 0 }, [io("label", gl, [s32[30] || (s32[30] = io("span", { class: "w-12 grow-0 shrink-0" }, "编码", -1)), lo(c22, { modelValue: e22.form.audioEncoder, "onUpdate:modelValue": s32[13] || (s32[13] = (t4) => e22.form.audioEncoder = t4), size: "small", onChange: s32[14] || (s32[14] = (e32) => r2("changed")), placeholder: "默认", disabled: e22.converting || e22.isGif }, { default: mn(() => [(Zr(!0), eo(Hr, null, Es(Lt(mu), (t4) => (Zr(), to(d2, { key: t4.value, label: t4.title, value: t4.value, disabled: !e22.availableEncoders.audios.includes(t4.value) }, null, 8, ["label", "value", "disabled"]))), 128))]), _: 1 }, 8, ["modelValue", "disabled"])]), io("label", yl, [s32[31] || (s32[31] = io("span", { class: "w-12 grow-0 shrink-0" }, "质量", -1)), lo(c22, { modelValue: e22.form.audioBitRate, "onUpdate:modelValue": s32[15] || (s32[15] = (t4) => e22.form.audioBitRate = t4), size: "small", onChange: s32[16] || (s32[16] = (e32) => r2("changed")), placeholder: "默认", disabled: e22.converting || e22.isGif }, { default: mn(() => [lo(d2, { label: "默认", value: "" }), (Zr(!0), eo(Hr, null, Es(Lt(pu), (e32) => (Zr(), to(d2, { key: e32, label: e32, value: e32 }, null, 8, ["label", "value"]))), 128))]), _: 1 }, 8, ["modelValue", "disabled"])]), io("label", xl, [s32[32] || (s32[32] = io("span", { class: "w-12 grow-0 shrink-0" }, "采样率", -1)), lo(c22, { modelValue: e22.form.audioSampleRate, "onUpdate:modelValue": s32[17] || (s32[17] = (t4) => e22.form.audioSampleRate = t4), size: "small", onChange: s32[18] || (s32[18] = (e32) => r2("changed")), placeholder: "默认", disabled: e22.converting || e22.isGif }, { default: mn(() => [lo(d2, { label: "默认", value: "" }), (Zr(!0), eo(Hr, null, Es(Lt(fu), (e32) => (Zr(), to(d2, { key: e32, label: e32, value: e32 }, null, 8, ["label", "value"]))), 128))]), _: 1 }, 8, ["modelValue", "disabled"])]), io("label", wl, [s32[33] || (s32[33] = io("span", { class: "w-12 grow-0 shrink-0" }, "声道", -1)), lo(c22, { modelValue: e22.form.audioChannel, "onUpdate:modelValue": s32[19] || (s32[19] = (t4) => e22.form.audioChannel = t4), size: "small", onChange: s32[20] || (s32[20] = (e32) => r2("changed")), placeholder: "默认", disabled: e22.converting || e22.isGif }, { default: mn(() => [lo(d2, { label: "默认", value: "" }), lo(d2, { label: "单声道", value: "1" }), lo(d2, { label: "双声道", value: "2" })]), _: 1 }, 8, ["modelValue", "disabled"])])], 64)) : po("", !0)])]), _: 1 })]);
  };
} }, Ml = { class: "flex flex-col gap-y-2.5" }, Cl = { class: "setting-row" }, Sl = { class: "setting-row" }, Tl = { class: "setting-row" }, Ul = { class: "setting-row" }, Il = ["disabled"], zl = { class: "truncate", style: { color: "var(--d-label)" } }, Rl = /* @__PURE__ */ o({ __name: "Settings", props: { form: { type: Object, required: !0 }, converting: { type: Boolean, default: !1 }, customSummary: { type: String, default: "" } }, setup(e22) {
  let t22 = e22, n2 = Et(!1), o22 = Et(!1), u2 = $o(() => {
    let e32 = uu.find((e42) => e42.title === t22.form.format), l22 = e32?.value;
    return { audios: mu.filter((e42) => e42.is.includes(l22)).map((e42) => e42.value), videos: hu.filter((e42) => e42.is.includes(l22)).map((e42) => e42.value) };
  });
  function d2() {
    o22.value && (n2.value = !0, o22.value = !1);
  }
  function c22(e32) {
    if (e32) {
      let [a2, l22] = e32.split("x");
      t22.form.width = a2, t22.form.height = l22;
    } else t22.form.width = "", t22.form.height = "";
  }
  return ss(() => {
    n2.value = !1;
  }), (t32, a2) => {
    let i2 = dv, v22 = uv, p2 = VO;
    return Zr(), eo("div", Ml, [io("div", Cl, [a2[6] || (a2[6] = io("span", { class: "setting-label" }, "输出格式", -1)), lo(v22, { class: "setting-select", modelValue: e22.form.format, "onUpdate:modelValue": a2[0] || (a2[0] = (t4) => e22.form.format = t4), size: "small", disabled: e22.converting }, { default: mn(() => [(Zr(!0), eo(Hr, null, Es(Lt(uu), (e32) => (Zr(), to(i2, { key: e32.title, label: e32.title, value: e32.title }, null, 8, ["label", "value"]))), 128))]), _: 1 }, 8, ["modelValue", "disabled"])]), io("div", Sl, [a2[7] || (a2[7] = io("span", { class: "setting-label" }, "分辨率", -1)), lo(v22, { class: "setting-select", modelValue: e22.form.resolution, "onUpdate:modelValue": a2[1] || (a2[1] = (t4) => e22.form.resolution = t4), size: "small", placeholder: e22.form.width && e22.form.height ? `自定义:${e22.form.width}x${e22.form.height}` : "保持原始", disabled: e22.converting, onChange: c22 }, { default: mn(() => [lo(i2, { label: "保持原始", value: "" }), (Zr(!0), eo(Hr, null, Es(Lt(gu), (e32) => (Zr(), to(i2, { key: e32.value, label: e32.title, value: e32.value }, null, 8, ["label", "value"]))), 128))]), _: 1 }, 8, ["modelValue", "placeholder", "disabled"])]), io("div", Tl, [a2[8] || (a2[8] = io("span", { class: "setting-label" }, "帧率", -1)), lo(v22, { class: "setting-select", modelValue: e22.form.fps, "onUpdate:modelValue": a2[2] || (a2[2] = (t4) => e22.form.fps = t4), size: "small", placeholder: e22.form.customFps ? "自定义" : "保持原始", disabled: e22.converting, onChange: a2[3] || (a2[3] = (t4) => e22.form.customFps = null) }, { default: mn(() => [lo(i2, { label: "保持原始", value: "" }), (Zr(!0), eo(Hr, null, Es(Lt(ku), (e32) => (Zr(), to(i2, { key: e32, label: e32 + " fps", value: e32 }, null, 8, ["label", "value"]))), 128))]), _: 1 }, 8, ["modelValue", "placeholder", "disabled"])]), io("div", Ul, [a2[9] || (a2[9] = io("span", { class: "setting-label" }, "自定义设置", -1)), lo(p2, { visible: n2.value, "onUpdate:visible": a2[5] || (a2[5] = (e32) => n2.value = e32), trigger: "click", placement: "left-end", width: "420px", disabled: e22.converting, onBeforeLeave: d2 }, { reference: mn(() => [io("button", { type: "button", class: "custom-action", disabled: e22.converting }, [io("span", zl, Z(e22.customSummary), 1), lo(Lt(c), { class: "size-3.5 shrink-0", style: { color: "var(--d-label-2)" } })], 8, Il)]), default: mn(() => [lo(kl, { form: e22.form, converting: e22.converting, "is-gif": e22.form.format === "GIF", "available-encoders": u2.value, onChanged: a2[4] || (a2[4] = (e32) => o22.value = !0) }, null, 8, ["form", "converting", "is-gif", "available-encoders"])]), _: 1 }, 8, ["visible", "disabled"])])]);
  };
} }, [["__scopeId", "data-v-f200718e"]]), Pl = /* @__PURE__ */ Symbol("mediaBox");
function Nl() {
  let e22 = Et(0), t22 = $o(() => e22.value > 0), a2 = dt((function() {
    let e32 = Et([]), t32 = Et(!1);
    function a3() {
      let e42 = /* @__PURE__ */ new Date();
      return `${String(e42.getHours()).padStart(2, "0")}:${String(e42.getMinutes()).padStart(2, "0")}`;
    }
    return { list: e32, open: t32, add: function(t4) {
      e32.value.unshift({ ...t4, time: t4.time || a3() }), e32.value.length > 8 && (e32.value = e32.value.slice(0, 8));
    }, clear: function() {
      e32.value = [];
    }, close: function() {
      t32.value = !1;
    } };
  })()), l22 = { busy: t22, setBusy: function(t32) {
    e22.value += t32 ? 1 : -1, e22.value < 0 && (e22.value = 0);
  }, addRecentTask: a2.add, recent: a2 };
  return sr(Pl, l22), l22;
}
function Fl() {
  let e22 = rr(Pl, null);
  if (!e22) throw new Error("useMediaBox() 必须在媒体工具箱内使用");
  return e22;
}
var Bl = { accept: "video/*", hint: "支持视频文件，最多 5 个，单个不超过 500MB", maxFiles: 5 }, Al = { class: "flex-1 min-h-0 w-full flex gap-4" }, Vl = { name: "MediaBoxVideoConvert" }, $l = Object.assign(Vl, { setup(e22) {
  let { form: t22, session: l22, converting: n2, converted: o22, customSummary: r2, startLabel: u2, start: d2 } = (function() {
    let e32 = Fl(), t32 = dt({ format: "MP4", resolution: "", videoEncoder: "", width: "", height: "", fps: "", customFps: null, videoBitRate: null, videoBitRateSlider: null, audioEnable: !0, audioBitRate: "", audioSampleRate: "", audioChannel: "", audioEncoder: "" }), l32 = dt(Fa({ maxSizeMB: 500, maxFiles: 5, zipPrefix: "视频转换文件" })), n3 = Et(""), o32 = null, r3 = $o(() => l32.uiCtrl.converting), u3 = $o(() => l32.uiCtrl.converted), d3 = $o(() => {
      let e42 = uu.find((e52) => e52.title === t32.format), l42 = e42?.value;
      return { audios: mu.filter((e52) => e52.is.includes(l42)).map((e52) => e52.value), videos: hu.filter((e52) => e52.is.includes(l42)).map((e52) => e52.value) };
    }), c22 = $o(() => {
      var e42;
      return `${((e42 = hu.find((e52) => e52.value === t32.videoEncoder)) == null ? void 0 : e42.title) || "默认"} / ${t32.customFps || t32.fps || "保持原始"} / ${t32.videoBitRate ? `${t32.videoBitRate}` : "自动"}`;
    }), m22 = $o(() => {
      if (n3.value) return n3.value;
      if (r3.value) {
        let e42 = l32.overallTimeLabel;
        return e42 ? `处理中 ${l32.overallProgress}% · ${e42}` : `处理中 ${l32.overallProgress}%`;
      }
      return u3.value && l32.uploadFiles.length ? "重新处理" : "开始转换";
    });
    return Fr(() => t32.format, () => {
      let { videos: e42, audios: a2 } = d3.value;
      t32.videoEncoder && !e42.includes(t32.videoEncoder) && (t32.videoEncoder = ""), t32.audioEncoder && !a2.includes(t32.audioEncoder) && (t32.audioEncoder = "");
    }), Fr(t32, () => {
      l32.clearConvertStatus();
    }, { deep: !0 }), hs(() => {
      o32 && clearTimeout(o32), l32.dispose();
    }), { form: t32, session: l32, converting: r3, converted: u3, availableEncoders: d3, customSummary: c22, startLabel: m22, start: async function() {
      if (!l32.uiCtrl.converting) {
        if (!l32.uploadFiles.length) return n3.value = "请先添加文件", o32 && clearTimeout(o32), void (o32 = setTimeout(() => {
          n3.value = "", o32 = null;
        }, 1200));
        n3.value = "", e32.setBusy(!0);
        try {
          await l32.startConvert((e42, a2) => e42.videoConvert({ ...t32, fps: t32.customFps || t32.fps || "" }, t32.format, a2), { onSuccess: (a2) => {
            var l42;
            return e32.addRecentTask({ name: ((l42 = a2.convertedFile) == null ? void 0 : l42.name) || a2.name, desc: `视频 · ${t32.format} 转换`, icon: Mt2 });
          } });
        } finally {
          e32.setBusy(!1);
        }
      }
    } };
  })();
  return (e32, a2) => (Zr(), eo("div", Al, [lo(Qa, { files: Lt(l22).uploadFiles, converting: Lt(n2), converted: Lt(o22), "now-tick": Lt(l22).nowTick, accept: Lt(Bl).accept, hint: Lt(Bl).hint, "max-files": Lt(Bl).maxFiles, "overall-time-label": Lt(l22).overallTimeLabel, "total-size-text": Lt(l22).totalSizeText, onAddFiles: Lt(l22).addFiles, onRemove: Lt(l22).deleteFile, onClear: Lt(l22).clear, onDownload: Lt(l22).downloadFile, onDownloadAll: Lt(l22).downloadAll }, null, 8, ["files", "converting", "converted", "now-tick", "accept", "hint", "max-files", "overall-time-label", "total-size-text", "onAddFiles", "onRemove", "onClear", "onDownload", "onDownloadAll"]), lo(sl2, { class: "w-[228px]", title: "输出设置", busy: Lt(n2), done: Lt(o22), "start-label": Lt(u2), onStart: Lt(d2) }, { default: mn(() => [lo(Rl, { form: Lt(t22), converting: Lt(n2), "custom-summary": Lt(r2) }, null, 8, ["form", "converting", "custom-summary"])]), _: 1 }, 8, ["busy", "done", "start-label", "onStart"])]));
} }), Dl = { class: "gap-y-2.5 flex flex-col" }, Ll = { class: "setting-row" }, El = { class: "setting-row" }, jl = { class: "setting-row" }, _l = { class: "setting-row" }, Ol = /* @__PURE__ */ o({ __name: "Settings", props: { form: { type: Object, required: !0 }, converting: { type: Boolean, default: !1 }, sampleRateList: { type: Array, default: () => [] } }, setup: (e22) => (t22, a2) => {
  let l22 = dv, i2 = uv;
  return Zr(), eo("div", Dl, [io("div", Ll, [a2[4] || (a2[4] = io("span", { class: "setting-label" }, "输出格式", -1)), lo(i2, { class: "setting-select", modelValue: e22.form.format, "onUpdate:modelValue": a2[0] || (a2[0] = (t32) => e22.form.format = t32), size: "small", disabled: e22.converting }, { default: mn(() => [(Zr(!0), eo(Hr, null, Es(Lt(du), (e32) => (Zr(), to(l22, { key: e32.title, label: e32.title, value: e32.title }, null, 8, ["label", "value"]))), 128))]), _: 1 }, 8, ["modelValue", "disabled"])]), io("div", El, [a2[5] || (a2[5] = io("span", { class: "setting-label" }, "音频质量", -1)), lo(i2, { class: "setting-select", modelValue: e22.form.bitRate, "onUpdate:modelValue": a2[1] || (a2[1] = (t32) => e22.form.bitRate = t32), size: "small", placeholder: "默认", disabled: e22.converting }, { default: mn(() => [lo(l22, { label: "默认", value: "" }), (Zr(!0), eo(Hr, null, Es(Lt(pu), (e32) => (Zr(), to(l22, { key: e32, label: e32, value: e32 }, null, 8, ["label", "value"]))), 128))]), _: 1 }, 8, ["modelValue", "disabled"])]), io("div", jl, [a2[6] || (a2[6] = io("span", { class: "setting-label" }, "音频通道", -1)), lo(i2, { class: "setting-select", modelValue: e22.form.channel, "onUpdate:modelValue": a2[2] || (a2[2] = (t32) => e22.form.channel = t32), size: "small", placeholder: "默认", disabled: e22.converting }, { default: mn(() => [lo(l22, { label: "默认", value: "" }), lo(l22, { label: "单声道", value: "1" }), lo(l22, { label: "双声道", value: "2" })]), _: 1 }, 8, ["modelValue", "disabled"])]), io("div", _l, [a2[7] || (a2[7] = io("span", { class: "setting-label" }, "采样率", -1)), lo(i2, { class: "setting-select", modelValue: e22.form.sampleRate, "onUpdate:modelValue": a2[3] || (a2[3] = (t32) => e22.form.sampleRate = t32), size: "small", placeholder: "默认", disabled: e22.converting }, { default: mn(() => [lo(l22, { label: "默认", value: "" }), (Zr(!0), eo(Hr, null, Es(e22.sampleRateList, (e32) => (Zr(), to(l22, { key: e32, label: e32, value: e32 }, null, 8, ["label", "value"]))), 128))]), _: 1 }, 8, ["modelValue", "disabled"])])]);
} }, [["__scopeId", "data-v-206bd77a"]]), Wl = { accept: "audio/*,video/*,.aac,.acc,audio/aac,audio/x-aac", hint: "支持音频与视频文件（含 AAC），最多 5 个，单个不超过 500MB", maxFiles: 5 }, Hl = { class: "flex-1 min-h-0 w-full flex gap-4" }, ql = { name: "MediaBoxAudioConvert" }, Yl = Object.assign(ql, { setup(e22) {
  let { form: t22, session: a2, converting: l22, converted: i2, sampleRateList: n2, startLabel: s22, start: r2 } = (function() {
    let e32 = Fl(), t32 = dt({ format: "MP3", bitRate: "", channel: "", sampleRate: "" }), a3 = dt(Fa({ maxSizeMB: 500, maxFiles: 5, zipPrefix: "音频转换文件" })), l32 = Et(""), i3 = null, n3 = $o(() => a3.uiCtrl.converting), s32 = $o(() => a3.uiCtrl.converted), r3 = $o(() => {
      let e42 = du.find((e52) => e52.title === t32.format);
      return e42?.sampleRate ? e42.sampleRate : fu;
    }), d2 = $o(() => {
      if (l32.value) return l32.value;
      if (n3.value) {
        let e42 = a3.overallTimeLabel;
        return e42 ? `处理中 ${a3.overallProgress}% · ${e42}` : `处理中 ${a3.overallProgress}%`;
      }
      return s32.value && a3.uploadFiles.length ? "重新处理" : "开始转换";
    });
    return Fr(t32, () => {
      var e42;
      if (t32.format === "OPUS") {
        let a4 = ((e42 = du.find((e52) => e52.title === t32.format)) == null ? void 0 : e42.sampleRate) || fu;
        t32.sampleRate && !a4.some((e52) => e52 === t32.sampleRate) && (t32.sampleRate = "");
      }
      a3.clearConvertStatus();
    }, { deep: !0 }), hs(() => {
      i3 && clearTimeout(i3), a3.dispose();
    }), { form: t32, session: a3, converting: n3, converted: s32, sampleRateList: r3, startLabel: d2, start: async function() {
      if (!a3.uiCtrl.converting) {
        if (!a3.uploadFiles.length) return l32.value = "请先添加文件", i3 && clearTimeout(i3), void (i3 = setTimeout(() => {
          l32.value = "", i3 = null;
        }, 1200));
        l32.value = "", e32.setBusy(!0);
        try {
          await a3.startConvert((e42, a4) => e42.audioConvert({ bitRate: t32.bitRate || "", sampleRate: t32.sampleRate || "", channel: t32.channel || 2 }, t32.format.toLowerCase(), a4), { onSuccess: (a4) => {
            var l42;
            return e32.addRecentTask({ name: ((l42 = a4.convertedFile) == null ? void 0 : l42.name) || a4.name, desc: `音频 · 音频转换 (${t32.format})`, icon: s5 });
          } });
        } finally {
          e32.setBusy(!1);
        }
      }
    } };
  })();
  return (e32, o22) => (Zr(), eo("div", Hl, [lo(Qa, { files: Lt(a2).uploadFiles, converting: Lt(l22), converted: Lt(i2), "now-tick": Lt(a2).nowTick, accept: Lt(Wl).accept, hint: Lt(Wl).hint, "max-files": Lt(Wl).maxFiles, "overall-time-label": Lt(a2).overallTimeLabel, "total-size-text": Lt(a2).totalSizeText, onAddFiles: Lt(a2).addFiles, onRemove: Lt(a2).deleteFile, onClear: Lt(a2).clear, onDownload: Lt(a2).downloadFile, onDownloadAll: Lt(a2).downloadAll }, null, 8, ["files", "converting", "converted", "now-tick", "accept", "hint", "max-files", "overall-time-label", "total-size-text", "onAddFiles", "onRemove", "onClear", "onDownload", "onDownloadAll"]), lo(sl2, { class: "w-[228px]", title: "输出设置", busy: Lt(l22), done: Lt(i2), "start-label": Lt(s22), onStart: Lt(r2) }, { default: mn(() => [lo(Ol, { form: Lt(t22), converting: Lt(l22), "sample-rate-list": Lt(n2) }, null, 8, ["form", "converting", "sample-rate-list"])]), _: 1 }, 8, ["busy", "done", "start-label", "onStart"])]));
} });
function Xl(e22) {
  return new Promise((t22) => {
    let a2 = URL.createObjectURL(e22), l22 = document.createElement("audio");
    l22.preload = "metadata", l22.src = a2;
    let i2 = () => {
      URL.revokeObjectURL(a2), l22.removeAttribute("src");
    };
    l22.addEventListener("loadedmetadata", () => {
      let e32 = Number.isFinite(l22.duration) ? l22.duration : 0;
      i2(), t22(Math.max(0, e32));
    }, { once: !0 }), l22.addEventListener("error", () => {
      i2(), t22(0);
    }, { once: !0 });
  });
}
function Gl(e22, t22, a2 = 15e3) {
  return new Promise((l22) => {
    if (!e22) return void l22({ ok: !1, duration: 0, reason: "empty" });
    let i2 = t22 === "audio", n2 = document.createElement(i2 ? "audio" : "video"), o22 = URL.createObjectURL(e22), s22 = !1, r2 = (e32) => {
      var t32;
      if (!s22) {
        s22 = !0, clearTimeout(u2);
        try {
          (t32 = n2.pause) == null || t32.call(n2), n2.removeAttribute("src"), n2.load();
        } catch {
        }
        URL.revokeObjectURL(o22), l22(e32);
      }
    }, u2 = setTimeout(() => {
      r2({ ok: !1, duration: 0, reason: "timeout" });
    }, a2);
    n2.preload = "auto", n2.muted = !0, i2 || (n2.playsInline = !0), n2.addEventListener("loadedmetadata", () => {
      let e32 = Number.isFinite(n2.duration) ? Math.max(0, n2.duration) : 0;
      if (!i2) {
        let t32 = n2.videoWidth || 0, a3 = n2.videoHeight || 0;
        return t32 && a3 ? void r2({ ok: !0, duration: e32, width: t32, height: a3 }) : void r2({ ok: !1, duration: e32, reason: "no_video_frame" });
      }
      r2({ ok: !0, duration: Number.isFinite(e32) ? e32 : 0 });
    }, { once: !0 }), n2.addEventListener("error", () => {
      r2({ ok: !1, duration: 0, reason: "decode_error" });
    }, { once: !0 }), n2.src = o22, n2.load();
  });
}
var Kl = /* @__PURE__ */ new WeakMap();
function Jl(e22) {
  if (!e22) return !1;
  let t22 = String(e22.type || "").toLowerCase(), a2 = String(e22.name || "");
  return t22.includes("svg") || /\.svgz?$/i.test(a2);
}
function Zl(e22) {
  if (e22 == null || e22 === "") return 0;
  let t22 = String(e22).trim();
  if (!t22 || t22 === "auto" || /%$/.test(t22)) return 0;
  let a2 = parseFloat(t22);
  return Number.isFinite(a2) && a2 > 0 ? a2 : 0;
}
function Ql(e22) {
  try {
    let t22 = new DOMParser().parseFromString(e22, "image/svg+xml").documentElement;
    if (!t22 || String(t22.tagName || "").toLowerCase() !== "svg") return null;
    let a2 = Zl(t22.getAttribute("width")), l22 = Zl(t22.getAttribute("height")), i2 = t22.getAttribute("viewBox");
    if ((!a2 || !l22) && i2) {
      let e32 = String(i2).trim().split(/[\s,]+/).map(Number);
      e32.length === 4 && e32[2] > 0 && e32[3] > 0 && (a2 = a2 || e32[2], l22 = l22 || e32[3]);
    }
    return a2 && l22 || (a2 = a2 || 1024, l22 = l22 || 1024), t22.getAttribute("width") || t22.setAttribute("width", String(a2)), t22.getAttribute("height") || t22.setAttribute("height", String(l22)), { w: a2, h: l22, blob: new Blob([new XMLSerializer().serializeToString(t22)], { type: "image/svg+xml;charset=utf-8" }) };
  } catch {
    return null;
  }
}
function ei(e22, t22 = 15e3) {
  return new Promise((a2, l22) => {
    let i2 = new Image();
    i2.decoding = "async";
    let n2 = setTimeout(() => {
      i2.onload = null, i2.onerror = null, l22(new Error("timeout"));
    }, t22);
    i2.onload = () => {
      clearTimeout(n2), a2(i2);
    }, i2.onerror = () => {
      clearTimeout(n2), l22(new Error("decode_error"));
    }, i2.src = e22;
  });
}
function ti(e22, t22, a2) {
  if (e22?.type === "video") {
    let l22 = Math.max(1, Number(t22) || 1), i2 = Math.max(1, Number(a2) || 1), n2 = Math.max(1, Number(e22.width) || l22), o22 = Math.max(1, Number(e22.height) || i2), s22 = Math.min(l22, i2 * (n2 / o22));
    return Math.max(0.05, Math.min(2, s22 / l22));
  }
  return 0.4;
}
function ai(e22, t22, a2) {
  let l22 = Math.max(1, Number(t22) || 1), i2 = Math.max(1, Number(a2) || 1), n2 = ti(e22, l22, i2), o22 = Number(e22?.scale), s22 = Math.max(0.05, Number.isFinite(o22) ? o22 : n2), r2 = Number(e22?.width), u2 = Number(e22?.height), d2 = r2 > 0 && u2 > 0, c22 = Math.max(1, l22 * s22), v22 = Math.max(1, c22 * ((d2 ? u2 : i2) / (d2 ? r2 : l22))), p2 = Number.isFinite(Number(e22?.x)) ? Number(e22.x) : 0.5, m22 = Number.isFinite(Number(e22?.y)) ? Number(e22.y) : 0.5;
  return { boxW: c22, boxH: v22, x: p2, y: m22, scale: s22, left: p2 * l22 - c22 / 2, top: m22 * i2 - v22 / 2 };
}
async function li(e22, t22 = {}) {
  if (!e22) throw new Error("empty");
  let a2 = Kl.get(e22);
  if (a2) return a2;
  let l22 = (async function(e32, t32 = {}) {
    let a3 = Math.max(64, Number(t32.maxEdge) || 4096), l32 = "", i2 = null;
    try {
      let t4 = null, n2 = 0, o22 = 0;
      if (Jl(e32)) {
        let a4 = Ql(await e32.text()), i3 = a4?.blob || e32;
        l32 = URL.createObjectURL(i3);
        let s32 = await ei(l32);
        n2 = a4?.w || s32.naturalWidth || 0, o22 = a4?.h || s32.naturalHeight || 0, t4 = s32;
      } else if (typeof createImageBitmap == "function") try {
        i2 = await createImageBitmap(e32), n2 = i2.width, o22 = i2.height, t4 = i2;
      } catch {
        l32 = URL.createObjectURL(e32);
        let a4 = await ei(l32);
        n2 = a4.naturalWidth || a4.width || 0, o22 = a4.naturalHeight || a4.height || 0, t4 = a4;
      }
      else {
        l32 = URL.createObjectURL(e32);
        let a4 = await ei(l32);
        n2 = a4.naturalWidth || a4.width || 0, o22 = a4.naturalHeight || a4.height || 0, t4 = a4;
      }
      if (!t4 || !n2 || !o22) throw new Error("无法解码图片");
      let s22 = (function(e42, t5, a4) {
        let l42 = Math.max(1, Number(e42) || 1), i3 = Math.max(1, Number(t5) || 1), n3 = Math.max(l42, i3);
        if (n3 <= a4) return { w: Math.round(l42), h: Math.round(i3) };
        let o32 = a4 / n3;
        return { w: Math.max(1, Math.round(l42 * o32)), h: Math.max(1, Math.round(i3 * o32)) };
      })(n2, o22, a3), r2 = document.createElement("canvas");
      r2.width = s22.w, r2.height = s22.h;
      let u2 = r2.getContext("2d", { alpha: !0 });
      if (!u2) throw new Error("无法创建画布");
      u2.clearRect(0, 0, s22.w, s22.h), u2.drawImage(t4, 0, 0, s22.w, s22.h);
      let d2 = await (function(e42) {
        return new Promise((t5, a4) => {
          e42.toBlob((e52) => {
            e52 ? t5(e52) : a4(new Error("png_encode"));
          }, "image/png");
        });
      })(r2);
      return new File([d2], (function(e42) {
        return `${String(e42?.name || "image").replace(/\.[^/.]+$/, "") || "image"}.png`;
      })(e32), { type: "image/png" });
    } finally {
      l32 && URL.revokeObjectURL(l32), i2 && typeof i2.close == "function" && i2.close();
    }
  })(e22, t22).catch((t32) => {
    throw Kl.delete(e22), t32;
  });
  return Kl.set(e22, l22), l22;
}
var ii = /* @__PURE__ */ new WeakMap();
async function ni(e22) {
  if (!e22) throw new Error("empty");
  if ((function(e32) {
    let t32 = String(e32.type || "").toLowerCase(), a3 = String(e32.name || "");
    return !!/\.(mp3|wav|aac|m4a|ogg|opus|flac)$/i.test(a3) || ["audio/mpeg", "audio/mp3", "audio/wav", "audio/x-wav", "audio/wave", "audio/aac", "audio/mp4", "audio/x-m4a", "audio/ogg", "audio/opus", "audio/flac", "audio/webm"].includes(t32);
  })(e22)) return e22;
  let t22 = ii.get(e22);
  if (t22) return t22;
  let a2 = (async () => {
    let t32 = new (window.AudioContext || window.webkitAudioContext)();
    try {
      let a3 = await e22.arrayBuffer(), l22 = (function(e32) {
        let t4 = Math.max(1, e32.numberOfChannels || 1), a4 = e32.sampleRate || 44100, l32 = e32.length, i3 = 2 * t4, n2 = l32 * i3, o22 = new ArrayBuffer(44 + n2), s22 = new DataView(o22), r2 = (e42, t5) => {
          for (let a5 = 0; a5 < t5.length; a5 += 1) s22.setUint8(e42 + a5, t5.charCodeAt(a5));
        };
        r2(0, "RIFF"), s22.setUint32(4, 36 + n2, !0), r2(8, "WAVE"), r2(12, "fmt "), s22.setUint32(16, 16, !0), s22.setUint16(20, 1, !0), s22.setUint16(22, t4, !0), s22.setUint32(24, a4, !0), s22.setUint32(28, a4 * i3, !0), s22.setUint16(32, i3, !0), s22.setUint16(34, 16, !0), r2(36, "data"), s22.setUint32(40, n2, !0);
        let u2 = [];
        for (let c22 = 0; c22 < t4; c22 += 1) u2.push(e32.getChannelData(c22));
        let d2 = 44;
        for (let c22 = 0; c22 < l32; c22 += 1) for (let e42 = 0; e42 < t4; e42 += 1) {
          let t5 = Math.max(-1, Math.min(1, u2[e42][c22] || 0));
          s22.setInt16(d2, t5 < 0 ? 32768 * t5 : 32767 * t5, !0), d2 += 2;
        }
        return new Blob([o22], { type: "audio/wav" });
      })(await t32.decodeAudioData(a3.slice(0))), i2 = String(e22.name || "audio").replace(/\.[^/.]+$/, "") || "audio";
      return new File([l22], `${i2}.wav`, { type: "audio/wav" });
    } finally {
      await t32.close().catch(() => {
      });
    }
  })().catch((t32) => {
    throw ii.delete(e22), t32;
  });
  return ii.set(e22, a2), a2;
}
async function oi(e22, t22 = 64) {
  let a2 = new (window.AudioContext || window.webkitAudioContext)();
  try {
    let l22 = await e22.arrayBuffer(), i2 = (await a2.decodeAudioData(l22.slice(0))).getChannelData(0), n2 = Math.max(1, Math.floor(i2.length / t22)), o22 = [];
    for (let e32 = 0; e32 < t22; e32++) {
      let t32 = 0, a3 = e32 * n2, l32 = Math.min(i2.length, a3 + n2);
      for (let e42 = a3; e42 < l32; e42++) {
        let a4 = Math.abs(i2[e42]);
        a4 > t32 && (t32 = a4);
      }
      o22.push(Math.max(0.08, t32));
    }
    let s22 = Math.max(...o22, 0.01);
    return o22.map((e32) => Math.round(e32 / s22 * 100));
  } catch {
    return Array.from({ length: t22 }, (e32, t32) => Math.round(30 + 40 * Math.abs(Math.sin(t32 / 4))));
  } finally {
    await a2.close().catch(() => {
    });
  }
}
var si = null, ri = null, ui = Promise.resolve(), di2 = null;
function ci() {
  if (di2 && (di2.aborted = !0, di2 = null), si) try {
    si.pause(), delete si.dataset.thumbSrc, si.removeAttribute("src"), si.load();
  } catch {
  }
}
async function vi(e22, t22 = 0.15) {
  if (!e22) return "";
  let a2 = document.createElement("video");
  if (a2.muted = !0, a2.playsInline = !0, a2.preload = "auto", a2.src = e22, !await new Promise((e32) => {
    let t32 = () => {
      i3(), e32(!0);
    }, l32 = () => {
      i3(), e32(!1);
    }, i3 = () => {
      a2.removeEventListener("loadeddata", t32), a2.removeEventListener("error", l32);
    };
    a2.addEventListener("loadeddata", t32), a2.addEventListener("error", l32), a2.load();
  }) || !a2.videoWidth) {
    try {
      a2.removeAttribute("src"), a2.load();
    } catch {
    }
    return "";
  }
  let l22 = Number.isFinite(a2.duration) ? a2.duration : 0, i2 = Math.min(Math.max(0.05, t22), Math.max(0.05, (l22 || t22 + 0.1) - 0.05));
  try {
    await pi(a2, i2, { aborted: !1 });
  } catch {
  }
  let n2 = document.createElement("canvas"), o22 = a2.videoWidth || 160, s22 = a2.videoHeight || 90;
  n2.width = 96, n2.height = Math.max(1, Math.round(96 * s22 / o22));
  let r2 = n2.getContext("2d"), u2 = "";
  r2 && (r2.drawImage(a2, 0, 0, n2.width, n2.height), u2 = n2.toDataURL("image/jpeg", 0.55));
  try {
    a2.removeAttribute("src"), a2.load();
  } catch {
  }
  return u2;
}
function pi(e22, t22, a2) {
  return new Promise((l22, i2) => {
    if (a2?.aborted) return void i2(new Error("aborted"));
    let n2 = Math.min(Math.max(0, t22), Math.max(0, (e22.duration || t22) - 0.05));
    if (Math.abs(e22.currentTime - n2) < 0.04) return void l22();
    let o22 = !1, s22 = setTimeout(() => {
      o22 || (o22 = !0, d2(), l22());
    }, 400), r2 = () => {
      o22 || (o22 = !0, d2(), l22());
    }, u2 = () => {
      o22 || (o22 = !0, d2(), i2(new Error("seek failed")));
    }, d2 = () => {
      clearTimeout(s22), e22.removeEventListener("seeked", r2), e22.removeEventListener("error", u2);
    };
    e22.addEventListener("seeked", r2), e22.addEventListener("error", u2);
    try {
      e22.currentTime = n2;
    } catch (c22) {
      o22 = !0, d2(), i2(c22);
    }
  });
}
var mi = /* @__PURE__ */ new Map();
function fi(e22, t22) {
  if (t22) for (mi.has(e22) && mi.delete(e22), mi.set(e22, t22); mi.size > 240; ) {
    let e32 = mi.keys().next().value;
    mi.delete(e32);
  }
}
function hi(e22, t22, a2, l22, i2 = {}) {
  let n2 = Math.max(1, Number(i2.fps) || 30), o22 = Math.max(1, Math.min(80, Math.round(l22) || 1)), { signal: s22, stale: r2 } = (function(e32) {
    let t32 = e32 || { aborted: !1 };
    return t32.aborted ? { signal: t32, stale: !0 } : (di2 && di2 !== t32 && (di2.aborted = !0), di2 = t32, { signal: t32, stale: !1 });
  })(i2.signal);
  if (r2) return Promise.resolve([]);
  let u2 = ui.then(() => (async function(e32, t32, a3, l32, i3, n3) {
    if (!e32 || a3 <= t32 || n3.aborted) return [];
    let o32 = Math.max(0, t32), s32 = Math.max(o32 + 1 / i3, a3), r3 = [];
    for (let b22 = 0; b22 < l32; b22++) {
      let e42 = o32 + (s32 - o32) * (b22 + 0.5) / l32;
      r3.push(e42);
    }
    let u3 = new Array(l32).fill(""), d2 = [];
    if (r3.forEach((t4, a4) => {
      let l42 = (function(e42, t5, a5) {
        let l52 = Math.round(Math.max(0, t5) * a5);
        return `${e42}#${a5.toFixed(3)}#${l52}`;
      })(e32, t4, i3), n4 = mi.get(l42);
      n4 ? u3[a4] = n4 : d2.push({ i: a4, t: t4, key: l42 });
    }), !d2.length || n3.aborted) return u3;
    let c22 = (si || (si = document.createElement("video"), si.muted = !0, si.playsInline = !0, si.preload = "auto"), si), v22 = (ri || (ri = document.createElement("canvas")), ri), p2 = v22.getContext("2d", { willReadFrequently: !0 });
    if (!p2 || !await (function(e42, t4, a4) {
      if (!t4) return Promise.resolve(!1);
      if (e42.dataset.thumbSrc === t4 && (e42.videoWidth || e42.readyState >= 2)) return Promise.resolve(!0);
      try {
        e42.pause();
      } catch {
      }
      return e42.dataset.thumbSrc = t4, e42.src = t4, new Promise((l42) => {
        let i4 = !1, n4 = (a5) => {
          i4 || (i4 = !0, r4(), a5 || e42.dataset.thumbSrc !== t4 || delete e42.dataset.thumbSrc, l42(a5));
        }, o42 = () => n4(!!e42.videoWidth), s42 = () => n4(!1), r4 = () => {
          e42.removeEventListener("loadeddata", o42), e42.removeEventListener("error", s42);
        };
        a4?.aborted ? n4(!1) : (e42.addEventListener("loadeddata", o42), e42.addEventListener("error", s42), e42.load(), e42.readyState >= 2 && e42.videoWidth && n4(!0));
      });
    })(c22, e32, n3) || n3.aborted) return u3;
    let f2 = c22.videoWidth || 160, h22 = c22.videoHeight || 90;
    v22.width = 64, v22.height = Math.max(1, Math.round(64 * h22 / f2));
    for (let b22 of d2) {
      if (n3.aborted) break;
      try {
        if (await pi(c22, b22.t, n3), n3.aborted) break;
        p2.drawImage(c22, 0, 0, v22.width, v22.height);
        let e42 = v22.toDataURL("image/jpeg", 0.42);
        fi(b22.key, e42), u3[b22.i] = e42;
      } catch {
      }
    }
    return u3;
  })(e22, t22, a2, o22, n2, s22));
  return ui = u2.catch(() => {
  }), u2;
}
function bi(e22, t22 = 640, a2 = 30) {
  let l22 = Math.max(0, Number(e22) || 0), i2 = Math.max(1, Number(a2) || 30);
  if (l22 <= 0) return [{ t: 0, label: "0s", align: "start" }];
  let n2 = Math.max(80, Number(t22) || 640) / l22, o22 = 1 / i2, s22 = (function(e32, t32, a3, l32) {
    let i3 = [];
    for (let o32 of [1, 2, 5, 10]) {
      let e42 = o32 * l32;
      e42 < 0.95 && i3.push(e42);
    }
    for (let o32 of [0.1, 0.2, 0.5, 1, 2, 5, 10, 15, 30, 60, 120, 300, 600]) i3.push(o32);
    let n3 = [];
    for (let o32 of i3.sort((e42, t4) => e42 - t4)) (!n3.length || o32 - n3[n3.length - 1] > 0.35 * l32) && n3.push(o32);
    for (let o32 of n3)
      if (o32 * e32 >= yi(o32, t32, a3) + 8 + 6) return o32;
    return n3[n3.length - 1];
  })(n2, l22, i2, o22), r2 = [], u2 = Math.max(1, Math.round(s22 / o22)), d2 = gi(s22, o22), c22 = /* @__PURE__ */ new Set(), v22 = (e32, t32, a3) => {
    let l32 = Math.round(e32 * i2 * 4) / 4;
    c22.has(l32) || (c22.add(l32), r2.push({ t: e32, label: t32, align: e32 <= 1e-9 ? "start" : "center" }));
  };
  if (d2) {
    let e32 = Math.round(l22 * i2);
    for (let a3 = 0; a3 <= e32; a3 += u2) {
      let e42 = a3 / i2;
      v22(e42, xi(e42, s22, i2));
    }
    let t32 = Math.floor(l22 + 1e-9);
    for (let a3 = 0; a3 <= t32; a3++) v22(a3, wi(a3));
  } else {
    let e32 = Math.floor(l22 / s22 + 1e-9);
    for (let t32 = 0; t32 <= e32; t32++) {
      let e42 = t32 * s22;
      v22(e42, xi(e42, s22, i2));
    }
  }
  return r2.sort((e32, t32) => e32.t - t32.t), (function(e32, t32) {
    let a3 = e32.filter((e42) => Ci(e42.label)), l32 = e32.filter((e42) => !Ci(e42.label)), i3 = [], n3 = -1 / 0;
    for (let o32 of a3) {
      let { left: e42, right: a4 } = Mi(o32, t32);
      e42 < n3 + 8 || (i3.push(o32), n3 = a4);
    }
    for (let o32 of l32) {
      let { left: e42, right: a4 } = Mi(o32, t32);
      i3.some((l42) => {
        let i4 = Mi(l42, t32);
        return e42 < i4.right + 8 && a4 + 8 > i4.left;
      }) || i3.push(o32);
    }
    return i3.sort((e42, t4) => e42.t - t4.t), i3.length ? i3 : e32.slice(0, 1);
  })(r2, n2);
}
function gi(e22, t22) {
  if (e22 >= 0.45) return !1;
  let a2 = e22 / t22, l22 = Math.round(a2);
  return l22 >= 1 && Math.abs(a2 - l22) < 0.08;
}
function yi(e22, t22, a2) {
  let l22 = 1 / a2, i2 = [0, e22, Math.min(t22, 59 + e22), t22], n2 = 0;
  for (let o22 of i2) n2 = Math.max(n2, ki(xi(o22, e22, a2)));
  return gi(e22, l22) && (n2 = Math.max(n2, ki(`${Math.max(1, Math.round(a2) - 1)}f`))), n2 = Math.max(n2, ki(wi(Math.max(0, Math.floor(t22))))), n2;
}
function xi(e22, t22, a2) {
  let l22 = Math.max(0, Number(e22) || 0);
  if (gi(t22, 1 / a2)) {
    let e32 = Math.round(l22 * a2), t32 = (e32 % a2 + a2) % a2;
    return t32 === 0 ? wi(e32 / a2) : `${t32}f`;
  }
  if (t22 < 1) {
    let e32 = t22 < 0.2 ? 2 : 1, a3 = Math.round(l22 / t22) * t22, i2 = Math.round(a3);
    return Math.abs(a3 - i2) < 1e-4 ? wi(i2) : `${a3.toFixed(e32)}s`;
  }
  return wi(Math.round(l22));
}
function wi(e22) {
  let t22 = Math.max(0, Math.round(e22));
  if (t22 < 60) return `${t22}s`;
  let a2 = Math.floor(t22 / 3600), l22 = Math.floor(t22 % 3600 / 60), i2 = t22 % 60;
  return a2 > 0 ? `${a2}:${String(l22).padStart(2, "0")}:${String(i2).padStart(2, "0")}` : `${l22}:${String(i2).padStart(2, "0")}`;
}
function ki(e22) {
  return Math.ceil(6.1 * String(e22).length + 3);
}
function Mi(e22, t22) {
  let a2 = e22.t * t22, l22 = ki(e22.label);
  return { left: e22.align === "start" ? a2 : a2 - l22 / 2, right: e22.align === "start" ? a2 + l22 : a2 + l22 / 2 };
}
function Ci(e22) {
  return !String(e22).endsWith("f");
}
function Si(e22) {
  return Math.max(x, (Number(e22?.end) || 0) - (Number(e22?.start) || 0));
}
function Ti(e22) {
  let t22 = Number(e22?.speed);
  return !Number.isFinite(t22) || t22 <= 0 ? 1 : Math.min(j, Math.max(H2, t22));
}
function Ui(e22, t22, a2, l22) {
  let i2 = Math.max(1e-6, a2 - t22), n2 = Math.max(x, l22 - t22);
  return t22 + (Number(e22) - t22) / i2 * n2;
}
function Ii(e22, t22, a2) {
  return (e22 || []).filter((e32) => e32 && e32.trackId === t22 && e32.id !== a2).slice().sort((e32, t32) => e32.start - t32.start);
}
function zi(e22, t22, a2, l22) {
  return e22 < l22 - 1e-4 && a2 < t22 - 1e-4;
}
function Ri(e22, t22, a2) {
  return e22.some((e32) => zi(t22, a2, e32.start, e32.end));
}
function Pi(e22, t22, a2, l22 = A) {
  let i2 = Math.max(x, a2), n2 = (function(e32, t32, a3, l32) {
    let i3 = t32, n3 = l32 + 1, o22 = (e42) => {
      let t4 = Math.abs(i3 - e42);
      t4 <= l32 && t4 < n3 && (n3 = t4, i3 = e42);
    };
    for (let s22 of e32) o22(s22.end), o22(s22.start), o22(s22.start - a3), o22(s22.end - a3);
    return Math.max(0, i3);
  })(e22, Math.max(0, t22), i2, l22);
  if (Ri(e22, n2, n2 + i2)) {
    let a3 = e22.find((e32) => zi(n2, n2 + i2, e32.start, e32.end)), l32 = [];
    a3 && (a3.start - i2 >= 0 && l32.push(a3.start - i2), l32.push(a3.end));
    for (let t32 of e22) l32.push(t32.end), t32.start - i2 >= 0 && l32.push(t32.start - i2);
    l32.push(0);
    let o22 = [...new Set(l32.map((e32) => Math.max(0, e32)))].filter((t32) => !Ri(e22, t32, t32 + i2));
    if (!o22.length) return null;
    o22.sort((e32, a4) => Math.abs(e32 - t22) - Math.abs(a4 - t22)), n2 = o22[0];
  }
  return Ri(e22, n2, n2 + i2) ? null : Math.max(0, n2);
}
function Ni(e22, t22, a2, l22, i2, n2 = A) {
  let o22 = x, s22 = Number(t22.start) || 0, r2 = Number(t22.end) || s22 + o22, u2 = e22.filter((e32) => e32.end <= s22 + 1e-4).pop(), d2 = e22.find((e32) => e32.start >= r2 - 1e-4);
  return i2 === "start" ? (s22 = Math.min(a2, r2 - o22), s22 = Math.max(0, s22), u2 && (s22 = Math.max(s22, u2.end)), u2 && Math.abs(s22 - u2.end) <= n2 && (s22 = u2.end), s22 < 0 && (s22 = 0), r2 - s22 < o22 && (s22 = r2 - o22)) : (r2 = Math.max(l22, s22 + o22), d2 && (r2 = Math.min(r2, d2.start)), d2 && Math.abs(r2 - d2.start) <= n2 && (r2 = d2.start), r2 - s22 < o22 && (r2 = s22 + o22)), Ri(e22, s22, r2) ? { start: t22.start, end: t22.end } : { start: s22, end: r2 };
}
function Fi(e22, t22 = 30) {
  if (typeof e22 == "number" && e22 > 1 && e22 < 240) return e22;
  let a2 = String(e22 || "").match(/^(\d+(?:\.\d+)?)(?:\/(\d+(?:\.\d+)?))?$/);
  if (!a2) return t22;
  let l22 = Number(a2[1]), i2 = Number(a2[2] || 1);
  if (!i2) return t22;
  let n2 = l22 / i2;
  return n2 > 1 && n2 < 240 ? n2 : t22;
}
var Bi = null;
function Ai() {
  var a2;
  return Bi ? ((a2 = Bi.refreshBox) == null || a2.call(Bi), Bi) : (Bi = dt((function() {
    let a3 = Fl();
    function l22() {
      try {
        a3 = Fl();
      } catch {
      }
    }
    let i2 = Et(!1), n2 = oe(), o22 = Et(!1), s22 = 0, r2 = !1, u2 = Et(!1), c22 = Et(""), m22 = Et(0), f2 = Et(""), h22 = Et(null), b22 = Et(!1), g2 = Et(0), y2 = Et(0), x2 = Et("assets"), w2 = Et("ratio"), k2 = Et(""), M2 = Et(""), C2 = Et("grid"), S2 = Et([]), T2 = Et([]), U2 = Et({}), I2 = Et([]), z2 = Et([]), R2 = Et([]), P2 = Et([]), N2 = /* @__PURE__ */ new Map(), F22 = /* @__PURE__ */ new Map(), A2 = Et([]), V22 = Et([]), D2 = !1, L2 = 0, E2 = 40, j2 = 0, _2 = 0, O2 = 0, H22 = 0, q2 = Et(0), Y2 = Et(640), X2 = Et("adapt"), G2 = Et(1920), K2 = Et(1080), J2 = Et("#000000"), Z22 = Et(1), ee2 = Et(!0), te2 = Et(100), ae2 = Et(!1), le2 = Et(!0), ie2 = Et(0), ne2 = Et(0), oe2 = Et(!1), se2 = dt(T()), re2 = $o(() => Pe.status === "running"), ue2 = $o(() => Pe.progress), de2 = $o(() => Pe.startAt), ve2 = Et(Date.now()), pe2 = null, me2 = E, fe2 = $o(() => {
      if (!c22.value) return "";
      let e22 = [I(m22.value)];
      return y2.value && e22.push(_(y2.value, !0)), e22.join(" · ");
    });
    function he2() {
      return [...I2.value, ...z2.value, ...R2.value, ...P2.value];
    }
    function be2(e22) {
      return e22 === "video" ? I2 : e22 === "image" ? z2 : e22 === "text" ? R2 : e22 === "audio" ? P2 : null;
    }
    function ge2(e22) {
      return he2().find((t22) => t22.id === e22) || null;
    }
    let ye2 = $o(() => T2.value.length ? Math.max(0.05, (function(e22) {
      let t22 = 0;
      for (let a4 of e22 || []) {
        let e32 = Number(a4?.end) || 0;
        e32 > t22 && (t22 = e32);
      }
      return t22;
    })(he2())) : 0), xe2 = $o(() => ye2.value), we2 = $o(() => T2.value.length > 0), ke2 = $o(() => we2.value && !re2.value), bt2 = $o(() => u2.value && !re2.value), gt2 = $o(() => I2.value.length > 0), yt2 = $o(() => {
      var e22, t22, a4, l32;
      let i3 = I2.value[0];
      if (i3?.fps) return Fi(i3.fps, M);
      let n3 = S2.value.find((e32) => e32.type === "video" && e32.fps);
      return n3?.fps ? Fi(n3.fps, M) : Fi(((t22 = (e22 = h22.value) == null ? void 0 : e22.video) == null ? void 0 : t22.avg_frame_rate) || ((l32 = (a4 = h22.value) == null ? void 0 : a4.video) == null ? void 0 : l32.r_frame_rate), M);
    }), xt2 = $o(() => {
      let e22 = ye2.value || 1;
      return Math.max(80, Y2.value - $) / e22;
    }), wt2 = $o(() => N * yt2.value), kt2 = $o(() => {
      let e22 = xt2.value, t22 = Math.max(e22, wt2.value), a4 = q2.value;
      return a4 ? Math.min(t22, Math.max(e22, a4)) : e22;
    }), Mt22 = $o(() => {
      let e22 = ye2.value;
      return e22 ? Math.min(100, Math.max(0, g2.value / e22 * 100)) : 0;
    }), Ct2 = $o(() => Mt22.value), St2 = $o(() => `${_(g2.value, !0)} / ${_(ye2.value, !0)}`), Tt2 = $o(() => {
      let e22 = Rt2.value;
      return e22?.type === "video" || e22?.type === "audio" ? `${Ti(e22).toFixed(2)}x` : `${Number(Z22.value).toFixed(2)}x`;
    }), Ut2 = $o(() => {
      var e22, t22, a4, l32;
      let i3 = S2.value.find((e32) => e32.type === "video" && e32.width && e32.height) || I2.value.find((e32) => e32.width && e32.height);
      return i3 ? { width: i3.width, height: i3.height } : (t22 = (e22 = h22.value) == null ? void 0 : e22.video) != null && t22.width && (l32 = (a4 = h22.value) == null ? void 0 : a4.video) != null && l32.height ? { width: h22.value.video.width, height: h22.value.video.height } : { ...k };
    }), It2 = $o(() => {
      let e22 = Ut2.value, t22 = Number(se2.width), a4 = Number(se2.height), l32 = Ru({ previewRatio: X2.value, customWidth: G2.value, customHeight: K2.value, width: Number.isFinite(t22) && t22 > 0 ? t22 : "", height: Number.isFinite(a4) && a4 > 0 ? a4 : "" }, e22);
      return l32?.w && l32?.h ? { w: l32.w, h: l32.h } : { w: Number(e22.width) || k.width, h: Number(e22.height) || k.height };
    }), zt2 = $o(() => {
      let e22 = Number(se2.width), t22 = Number(se2.height);
      if (!(Number.isFinite(e22) && e22 && Number.isFinite(t22) && t22)) return "";
      let a4 = Ru({ previewRatio: X2.value, customWidth: G2.value, customHeight: K2.value, width: e22, height: t22 }, Ut2.value);
      return a4?.w && a4?.h ? `${a4.w}×${a4.h}` : "";
    }), Rt2 = $o(() => {
      let e22 = k2.value;
      return e22 ? ge2(e22) : null;
    });
    function Pt2() {
      var e22;
      let t22 = ((e22 = Rt2.value) == null ? void 0 : e22.type) || "none", a4 = g(t22);
      w2.value = t22 !== "none" ? a4.find((e32) => e32 !== "ratio") || "ratio" : a4[0] || "ratio";
    }
    function Nt2(e22) {
      M2.value = e22 || "", e22 && (k2.value = "", Pt2());
    }
    function Ft2(e22) {
      var t22;
      k2.value = e22 || "", e22 && (M2.value = ""), Pt2(), ((t22 = Rt2.value) == null ? void 0 : t22.type) === "text" && (x2.value = "text");
    }
    function Bt2(e22) {
      return U2.value[e22] || R();
    }
    function At2(e22) {
      let t22 = ge2(e22);
      return t22?.trackId && T2.value.find((e32) => e32.id === t22.trackId) || null;
    }
    function Vt2(e22) {
      let t22 = At2(e22);
      return !!t22 && !!Bt2(t22.id).hidden;
    }
    function $t2(e22) {
      let t22 = At2(e22);
      return !!t22 && !!Bt2(t22.id).locked;
    }
    function Dt2() {
      q2.value || (q2.value = xt2.value);
    }
    function Lt2(e22) {
      let t22 = Math.max(120, Number(e22) || 0);
      Math.abs(t22 - Y2.value) < 1 || (Y2.value = t22, ye2.value && q2.value && q2.value < xt2.value && (q2.value = xt2.value));
    }
    function Et2(e22, t22) {
      let a4 = xt2.value, l32 = Math.max(a4, wt2.value), i3 = Math.min(l32, Math.max(a4, Number(e22) || a4));
      return q2.value = i3, { pxPerSec: i3, anchorTime: t22 };
    }
    function jt2(e22, t22) {
      return Et2((kt2.value || xt2.value) * e22, t22);
    }
    function _t2(e22, t22) {
      let a4 = O(), l32 = { id: a4, type: e22 }, i3 = [...T2.value], n3 = Number(t22);
      return Number.isFinite(n3) && n3 >= 0 && n3 < i3.length ? i3.splice(n3, 0, l32) : i3.push(l32), T2.value = i3, U2.value = { ...U2.value, [a4]: R() }, a4;
    }
    function Ot2(e22) {
      if (he2().some((t32) => t32.trackId === e22)) return;
      T2.value = T2.value.filter((t32) => t32.id !== e22);
      let t22 = { ...U2.value };
      delete t22[e22], U2.value = t22;
    }
    function Wt2(e22, t22) {
      let a4 = Math.max(0, e22), l32 = Math.max(0, t22);
      if (a4 === l32) return;
      let i3 = [...T2.value];
      if (a4 >= i3.length || l32 >= i3.length) return;
      Gt2();
      let [n3] = i3.splice(a4, 1);
      i3.splice(l32, 0, n3), T2.value = i3;
    }
    function Ht2() {
      let e22 = {};
      for (let t22 of he2()) t22.assetId && (e22[t22.assetId] = (e22[t22.assetId] || 0) + 1);
      S2.value.forEach((t22) => {
        let a4 = e22[t22.id] || 0;
        t22.onTimeline = a4 > 0, t22.useCount = a4;
      });
    }
    function qt2(e22) {
      return e22.map((e32) => ({ ...e32 }));
    }
    function Yt2() {
      return { selectedClipId: k2.value, videoClips: qt2(I2.value), imageClips: qt2(z2.value), textClips: qt2(R2.value), audioClips: qt2(P2.value), trackRows: T2.value.map((e22) => ({ ...e22 })), trackRowStates: JSON.parse(JSON.stringify(U2.value)), muted: ae2.value };
    }
    function Xt2(e22) {
      e22 && (k2.value = e22.selectedClipId, I2.value = qt2(e22.videoClips || []), z2.value = qt2(e22.imageClips), R2.value = qt2(e22.textClips), P2.value = qt2(e22.audioClips), T2.value = (e22.trackRows || []).map((e32) => ({ id: e32.id, type: e32.type })), U2.value = e22.trackRowStates || Object.fromEntries(T2.value.map((e32) => [e32.id, R()])), ae2.value = !!e22.muted, Ht2(), el2(), ll2(), al2());
    }
    function Gt2() {
      A2.value.push(Yt2()), A2.value.length > E2 && A2.value.shift(), V22.value = [];
    }
    function Kt2() {
      D2 || (Gt2(), D2 = !0), L2 && clearTimeout(L2), L2 = setTimeout(() => {
        D2 = !1, L2 = 0;
      }, 450);
    }
    function Jt2() {
      if (!A2.value.length) return;
      let e22 = Yt2(), t22 = A2.value.pop();
      V22.value.push(e22), Xt2(t22);
    }
    function Zt2() {
      if (!V22.value.length) return;
      let e22 = Yt2(), t22 = V22.value.pop();
      A2.value.push(e22), Xt2(t22);
    }
    function Qt2(e22, t22) {
      let a4 = U2.value[e22], l32 = T2.value.find((t32) => t32.id === e22);
      if (!a4 || !l32 || !(t22 in a4) || t22 === "muted" && !me2[l32.type]) return;
      Gt2();
      let i3 = !a4[t22];
      U2.value = { ...U2.value, [e22]: { ...a4, [t22]: i3 } }, t22 === "muted" && Ja2(e22, i3), el2(), ll2(), al2();
    }
    function ea2(e22, t22) {
      let a4 = T2.value.find((t32) => t32.id === e22 || t32.type === e22);
      a4 && Qt2(a4.id, t22);
    }
    let ta2 = $o(() => {
      if (Oe()) return "导出完成 · 待下载";
      if (!re2.value) return "开始导出";
      let t22 = de2.value > 0 ? Date.now() - de2.value : 0;
      ve2.value;
      let a4 = Nu(t22);
      return a4 ? `导出中 ${ue2.value}% · ${a4}` : `导出中 ${ue2.value}%`;
    }), aa2 = $o(() => Oe());
    function la2() {
      (re2.value || Oe()) && (oe2.value = !0);
    }
    function ia2() {
      if (!Oe()) return;
      let e22 = Pe.result;
      Ie(), aO.success("已开始下载"), e22 && a3.addRecentTask({ name: e22.name, desc: Pe.desc || `视频 · 视频剪切 (${Pe.format || "MP4"})`, icon: Mt2 }), Ge(), oe2.value = !1;
    }
    function na2() {
      (Oe() || Pe.status === "done") && gO.confirm("丢弃后需重新导出，确定放弃该视频文件？", "取消下载", { confirmButtonText: "丢弃", cancelButtonText: "返回", type: "warning" }).then(() => {
        Ve(), aO.info("已取消导出结果"), oe2.value = !1;
      }).catch(() => {
      });
    }
    function oa2() {
      re2.value && gO.confirm("视频正在导出，关闭将中断当前任务，确定取消？", "取消导出", { confirmButtonText: "取消导出", cancelButtonText: "继续导出", type: "warning" }).then(() => {
        We(), Al2(), oe2.value = !1;
      }).catch(() => {
      });
    }
    function sa2() {
      f2.value && (URL.revokeObjectURL(f2.value), f2.value = ""), S2.value.forEach((e22) => {
        if (e22.objectUrl && e22.objectUrl !== f2.value) try {
          URL.revokeObjectURL(e22.objectUrl);
        } catch {
        }
      });
    }
    function ra2(e22) {
      if (e22?.objectUrl) try {
        f2.value === e22.objectUrl && (f2.value = ""), URL.revokeObjectURL(e22.objectUrl);
      } catch {
      }
    }
    async function ua2() {
      var e22, t22, a4;
      let l32 = S2.value.filter((e32) => e32.type === "video" && e32.file);
      if (!l32.length) {
        if (h22.value) {
          try {
            (t22 = (e22 = h22.value).destroy) == null || t22.call(e22);
          } catch {
          }
          h22.value = null;
        }
        return y2.value = 0, m22.value = 0, void (S2.value.length || he2().length || (c22.value = c22.value || ""));
      }
      if (l32.some((e32) => e32.objectUrl && e32.objectUrl === f2.value) && h22.value) return;
      let i3 = l32[0];
      f2.value = i3.objectUrl || "", c22.value = i3.name || c22.value, m22.value = ((a4 = i3.file) == null ? void 0 : a4.size) || 0, await $a2(i3.file);
    }
    function da2(e22) {
      let t22 = [];
      for (let l32 of [I2, z2, R2, P2]) {
        let a5 = [];
        for (let i3 of l32.value) i3.assetId === e22 ? (t22.push(i3), i3.type === "audio" && Ya2(i3.id, null), i3.type === "video" && N2.delete(i3.id)) : a5.push(i3);
        l32.value = a5;
      }
      let a4 = [...new Set(t22.map((e32) => e32.trackId).filter(Boolean))];
      for (let l32 of a4) Ot2(l32);
      return t22.some((e32) => e32.id === k2.value) && (k2.value = "", Pt2()), t22;
    }
    async function ca2(e22) {
      if (re2.value) return aO.warning("导出进行中，无法删除素材"), !1;
      let t22 = e22 || M2.value, a4 = S2.value.find((e32) => e32.id === t22);
      if (!a4) return !1;
      let l32 = he2().filter((e32) => e32.assetId === t22);
      if (l32.length) {
        try {
          await gO.confirm(`素材「${a4.name || "未命名"}」已在轨道中使用 ${l32.length} 处，删除后将一并移除相关片段。`, "删除素材", { confirmButtonText: "删除", cancelButtonText: "取消", type: "warning" });
        } catch {
          return !1;
        }
        Gt2(), da2(t22);
      }
      return ra2(a4), S2.value = S2.value.filter((e32) => e32.id !== t22), M2.value === t22 && (M2.value = ""), Ht2(), await ua2(), ll2(), al2(), S2.value.length || he2().length || (s22 && (clearTimeout(s22), s22 = 0), pa2({ clearPersist: !0 })), !0;
    }
    function va2() {
      I2.value = [], z2.value = [], R2.value = [], P2.value = [], k2.value = "", T2.value = [], U2.value = {}, A2.value = [], V22.value = [], q2.value = 0, N2.clear(), F22.clear();
    }
    function pa2(e22 = {}) {
      var t22, a4;
      let { clearPersist: l32 = !0 } = e22;
      re2.value ? aO.warning("导出进行中，无法清空工程") : (b22.value = !1, il2(), ci(), j2 && (cancelAnimationFrame(j2), j2 = 0), h22.value && ((a4 = (t22 = h22.value).destroy) == null || a4.call(t22), h22.value = null), sa2(), va2(), S2.value = [], M2.value = "", u2.value = !1, c22.value = "", m22.value = 0, g2.value = 0, y2.value = 0, X2.value = "adapt", J2.value = "#000000", Z22.value = 1, te2.value = 100, ae2.value = !1, le2.value = !0, ie2.value = 0, ne2.value = 0, oe2.value = !1, Ge(), l32 && (Me2().catch(() => {
      }), ke().catch(() => {
      })));
    }
    async function ma2() {
      if (re2.value) aO.warning("导出进行中，无法清空工程");
      else if (u2.value) {
        try {
          await gO.confirm("将清空全部素材、轨道、时间轴及本地缓存，恢复为初始状态。此操作不可恢复。", "清除素材", { confirmButtonText: "清除", cancelButtonText: "取消", type: "warning" });
        } catch {
          return;
        }
        s22 && (clearTimeout(s22), s22 = 0), pa2({ clearPersist: !0 }), aO.success("已清除全部素材");
      }
    }
    async function fa2() {
      if (re2.value) aO.warning("导出进行中，无法清除轨道");
      else if (we2.value) {
        try {
          await gO.confirm("将清除时间轴上的全部轨道与片段，素材库会保留。此操作不可恢复。", "清除轨道", { confirmButtonText: "清除", cancelButtonText: "取消", type: "warning" });
        } catch {
          return;
        }
        Gt2(), b22.value = !1, il2(), tl2();
        for (let e22 of [...I2.value]) N2.delete(e22.id);
        for (let e22 of [...P2.value]) Ya2(e22.id, null);
        I2.value = [], z2.value = [], R2.value = [], P2.value = [], k2.value = "", T2.value = [], U2.value = {}, g2.value = 0, q2.value = 0, Ht2(), Pt2(), ll2(), al2(), aO.success("已清除全部轨道");
      }
    }
    function ha2() {
      i2.value && (s22 && clearTimeout(s22), s22 = setTimeout(() => {
        s22 = 0, ga2();
      }, 700));
    }
    function ba2() {
      return !(S2.value.length || T2.value.length || I2.value.length || z2.value.length || R2.value.length || P2.value.length);
    }
    async function ga2() {
      if (o22.value) try {
        let { state: e22, files: t22 } = Be({ editorVisible: u2.value, fileName: c22.value, fileSize: m22.value, duration: y2.value, currentTime: g2.value, activeDock: x2.value, activeTool: w2.value, selectedClipId: k2.value, assetViewMode: C2.value, assets: S2.value, trackRows: T2.value, trackRowStates: U2.value, videoClips: I2.value, imageClips: z2.value, textClips: R2.value, audioClips: P2.value, previewRatio: X2.value, customWidth: G2.value, customHeight: K2.value, canvasBg: J2.value, speed: Z22.value, keepPitch: ee2.value, volume: te2.value, muted: ae2.value, keepOriginalAudio: le2.value, fadeIn: ie2.value, fadeOut: ne2.value, pxPerSec: q2.value, exportForm: se2 });
        if (ba2()) return void await Me2();
        await Se(e22, t22);
      } catch {
      }
    }
    async function ya2() {
      var e22;
      for (let t22 of S2.value) {
        if (t22.type === "video" && t22.objectUrl && !t22.thumbUrl) try {
          let e32 = await vi(t22.objectUrl);
          e32 && (t22.thumbUrl = e32);
        } catch {
        }
        t22.type !== "audio" || !t22.file || ((e22 = t22.waveHeights) == null ? void 0 : e22.length) > 0 || oi(t22.file, 160).then((e32) => {
          let a4 = S2.value.findIndex((e42) => e42.id === t22.id);
          a4 >= 0 && (S2.value = S2.value.map((t32, l32) => l32 === a4 ? { ...t32, waveHeights: e32 } : t32));
        });
      }
    }
    async function xa2(e22) {
      var t22;
      u2.value = e22.editorVisible, c22.value = e22.fileName, m22.value = e22.fileSize, y2.value = e22.duration, g2.value = e22.currentTime, x2.value = e22.activeDock, C2.value = e22.assetViewMode, S2.value = e22.assets, T2.value = e22.trackRows, U2.value = e22.trackRowStates, I2.value = e22.videoClips, z2.value = e22.imageClips, R2.value = e22.textClips, P2.value = e22.audioClips;
      let a4 = e22.selectedClipId || "";
      k2.value = a4 && ge2(a4) ? a4 : "", X2.value = e22.previewRatio, G2.value = e22.customWidth, K2.value = e22.customHeight, J2.value = e22.canvasBg, Z22.value = e22.speed, ee2.value = e22.keepPitch, te2.value = e22.volume, ae2.value = e22.muted, le2.value = e22.keepOriginalAudio, ie2.value = e22.fadeIn, ne2.value = e22.fadeOut, q2.value = e22.pxPerSec, Object.assign(se2, e22.exportForm), Pt2();
      let l32 = g(((t22 = Rt2.value) == null ? void 0 : t22.type) || "none");
      e22.activeTool && l32.includes(e22.activeTool) && (w2.value = e22.activeTool);
      let i3 = e22.assets.find((e32) => e32.type === "video" && e32.file) || e22.videoClips.find((e32) => e32.file);
      i3?.file && (f2.value = i3.objectUrl || "", await $a2(i3.file)), Ht2(), await ya2();
    }
    async function wa2() {
      let e22 = await xe();
      if (e22?.incomplete) {
        try {
          await gO.alert("检测到工作区中的素材文件已丢失或不完整，无法恢复工程。关闭后将自动清空工作区。", "工作区资源丢失", { confirmButtonText: "确定", type: "warning" });
        } catch {
        }
        return s22 && (clearTimeout(s22), s22 = 0), await Me2(), await ke(), "incomplete";
      }
      await Le();
      let t22 = Ce(e22);
      return !!t22 && (await xa2(t22), !0);
    }
    let ka2 = null, Ma2 = Promise.resolve();
    function Ca2(e22) {
      let t22 = Ma2.then(e22, e22);
      return Ma2 = t22.catch(() => {
      }), t22;
    }
    async function Sa2() {
      if (!n2) return !1;
      try {
        let e22 = !1;
        if (ka2 && (e22 = await de(ka2)), !e22) {
          let t22 = await me();
          if (!t22) return !1;
          ka2 = t22, e22 = await fe(t22) || await de(t22);
        }
        return !!e22 && (o22.value = !0, Ca2(async () => {
          if (ba2()) {
            let e32 = await wa2();
            if (e32 === !0) return aO.success("已从工作区恢复工程"), !0;
            if (e32 === "incomplete") return !0;
          }
          return await ga2(), aO.success("工作区已开启"), !0;
        }));
      } catch {
        return aO.error("工作区授权失败"), !1;
      }
    }
    async function Ta2() {
      if (!o22.value) return !1;
      try {
        await gO.confirm("关闭后将不再把工程保存到本地文件夹，刷新页面后当前进度会丢失。磁盘上已写入的文件不会删除。", "关闭工作区持久化", { confirmButtonText: "关闭", cancelButtonText: "取消", type: "warning" });
      } catch {
        return !1;
      }
      s22 && (clearTimeout(s22), s22 = 0), o22.value = !1, ka2 = null;
      try {
        await ue();
      } catch {
      }
      return aO.success("已关闭工作区持久化"), !0;
    }
    async function Ua2() {
      return o22.value ? Ta2() : Sa2();
    }
    async function Ia2() {
      await Ca2(async () => {
        try {
          if (await le(), !o22.value) {
            let e22 = await ce();
            ka2 = e22;
            let t22 = !!e22 && await fe(e22);
            o22.value = t22, t22 && await wa2();
          }
        } catch {
        } finally {
          i2.value = !0;
        }
      });
    }
    function za2() {
      r2 = !0, ze(), re2.value && Bl2(), la2(), Pt2();
    }
    function Ra2() {
      r2 = !1, Te(), b22.value = !1, il2(), tl2(), oe2.value = !1, ci(), re2.value || Al2(), ga2();
    }
    function Pa2(e22, t22) {
      var a4, l32;
      return Fi(((a4 = e22?.video) == null ? void 0 : a4.avg_frame_rate) || ((l32 = e22?.video) == null ? void 0 : l32.r_frame_rate), M);
    }
    async function Na2(e22) {
      if (!e22) return !1;
      if (l6(e22) !== "video") return aO.error("请上传视频文件"), !1;
      if (e22.size / 1048576 > s6.maxSizeMB) return aO.error(`文件体积超过${s6.maxSizeMB}MB`), !1;
      let a4 = await Gl(e22, "video");
      if (!a4.ok) return aO.error(c2("video", e22.name, a4.reason)), !1;
      pa2();
      let l32 = new yu(e22);
      h22.value = l32, c22.value = e22.name, m22.value = e22.size, f2.value = URL.createObjectURL(e22), u2.value = !0, S2.value = [{ id: W2(), type: "video", name: e22.name, meta: "", file: e22, objectUrl: f2.value, thumbUrl: "", onTimeline: !1, useCount: 0, sourceDuration: a4.duration || 0, width: a4.width || 0, height: a4.height || 0, fps: M, hasAudio: !0 }];
      try {
        await l32.stat(), y2.value = l32.duration || a4.duration || 0;
        let t22 = Pa2(l32), i3 = `${I(e22.size)} · ${_(y2.value)}`;
        S2.value = S2.value.map((e32, a5) => {
          var n4, o32;
          return a5 === 0 ? { ...e32, meta: i3, sourceDuration: y2.value, width: ((n4 = l32.video) == null ? void 0 : n4.width) || e32.width, height: ((o32 = l32.video) == null ? void 0 : o32.height) || e32.height, fps: t22, hasAudio: !!l32.hasAudio } : e32;
        });
        let n3 = await vi(f2.value);
        return n3 && S2.value[0] && (S2.value = S2.value.map((e32, t32) => t32 === 0 ? { ...e32, thumbUrl: n3 } : e32)), !0;
      } catch {
        return aO.error("无法读取视频信息"), !1;
      }
    }
    async function Fa2(e22) {
      if (!e22 || l6(e22) !== "image") return aO.error("请选择图片文件"), !1;
      let t22 = await (async function(e32, t32 = 15e3) {
        if (!e32) return { ok: !1, reason: "empty" };
        let a5 = null;
        if (Jl(e32)) try {
          a5 = Ql(await e32.text());
        } catch {
          a5 = null;
        }
        return new Promise((l32) => {
          let i3 = URL.createObjectURL(e32), n3 = !1, o32 = (e42) => {
            n3 || (n3 = !0, clearTimeout(s32), URL.revokeObjectURL(i3), l32(e42));
          }, s32 = setTimeout(() => o32({ ok: !1, reason: "timeout" }), t32);
          ei(i3, t32).then((t4) => {
            let l42 = a5?.w || t4.naturalWidth || t4.width || 0, i4 = a5?.h || t4.naturalHeight || t4.height || 0;
            if (!l42 || !i4) return Jl(e32) ? void o32({ ok: !0, width: 1024, height: 1024 }) : void o32({ ok: !1, reason: "no_image_frame" });
            o32({ ok: !0, width: l42, height: i4 });
          }).catch((e42) => {
            o32({ ok: !1, reason: e42?.message === "timeout" ? "timeout" : "decode_error" });
          });
        });
      })(e22);
      if (!t22.ok) return aO.error(c2("image", e22.name, t22.reason)), !1;
      let a4 = URL.createObjectURL(e22);
      return S2.value = [...S2.value, { id: W2(), type: "image", name: e22.name, meta: I(e22.size), file: e22, objectUrl: a4, thumbUrl: a4, width: t22.width || 0, height: t22.height || 0, onTimeline: !1, useCount: 0 }], !0;
    }
    async function Ba2(e22) {
      if (!e22 || l6(e22) !== "audio") return aO.error("请选择音频文件"), !1;
      let t22 = await Gl(e22, "audio");
      if (!t22.ok) return aO.error(c2("audio", e22.name, t22.reason)), !1;
      let a4 = URL.createObjectURL(e22), l32 = { id: W2(), type: "audio", name: e22.name, meta: I(e22.size), file: e22, objectUrl: a4, thumbUrl: "", waveHeights: [], sourceDuration: t22.duration || 0, onTimeline: !1, useCount: 0 };
      return S2.value = [...S2.value, l32], oi(e22, 160).then((e32) => {
        let t32 = S2.value.findIndex((e42) => e42.id === l32.id);
        t32 >= 0 && (S2.value = S2.value.map((a5, l42) => l42 === t32 ? { ...a5, waveHeights: e32 } : a5));
      }), l32.sourceDuration || Xl(e22).then((e32) => {
        let t32 = S2.value.findIndex((e42) => e42.id === l32.id);
        t32 >= 0 && e32 && (S2.value = S2.value.map((a5, l42) => l42 === t32 ? { ...a5, sourceDuration: e32 } : a5));
      }), !0;
    }
    async function Aa2(e22) {
      if (l6(e22) !== "video") return aO.error("请选择视频文件"), !1;
      if (e22.size / 1048576 > s6.maxSizeMB) return aO.error(`文件体积超过${s6.maxSizeMB}MB`), !1;
      let t22 = await Gl(e22, "video");
      if (!t22.ok) return aO.error(c2("video", e22.name, t22.reason)), !1;
      let a4 = URL.createObjectURL(e22), l32 = { id: W2(), type: "video", name: e22.name, meta: `${I(e22.size)}${t22.duration ? ` · ${_(t22.duration)}` : ""}`, file: e22, objectUrl: a4, thumbUrl: "", onTimeline: !1, useCount: 0, sourceDuration: t22.duration || 0, width: t22.width || 0, height: t22.height || 0, fps: M, hasAudio: !0 };
      S2.value = [...S2.value, l32];
      try {
        let e32 = await vi(a4);
        if (e32) {
          let t32 = S2.value.findIndex((e42) => e42.id === l32.id);
          t32 >= 0 && (S2.value = S2.value.map((a5, l42) => l42 === t32 ? { ...a5, thumbUrl: e32 } : a5));
        }
      } catch {
      }
      return !0;
    }
    function Va2(e22 = "") {
      u2.value || (u2.value = !0, c22.value || (c22.value = e22 || "未命名"));
    }
    async function $a2(e22) {
      if (h22.value || !e22 || l6(e22) !== "video") return;
      let a4 = new yu(e22);
      h22.value = a4, c22.value = e22.name || c22.value, m22.value = e22.size || 0;
      try {
        await a4.stat(), y2.value = a4.duration || y2.value;
        let t22 = Pa2(a4), l32 = S2.value.findIndex((t32) => t32.file === e22 && t32.type === "video");
        l32 >= 0 && t22 && (S2.value = S2.value.map((e32, i3) => i3 === l32 ? { ...e32, fps: t22, hasAudio: !!a4.hasAudio } : e32));
      } catch {
      }
    }
    function Da2(e22 = "project") {
      let t22 = document.createElement("canvas");
      return t22.width = 16, t22.height = 16, new Promise((a4, l32) => {
        t22.toBlob((t32) => {
          if (!t32) return void l32(new Error("placeholder"));
          let i3 = String(e22 || "project").replace(/\.[^/.]+$/, "") || "project";
          a4(new File([t32], `${i3}.png`, { type: "image/png" }));
        }, "image/png");
      });
    }
    async function La2() {
      var e22, a4;
      if (h22.value) return h22.value;
      let l32 = ((e22 = I2.value.find((e32) => e32.file)) == null ? void 0 : e22.file) || ((a4 = S2.value.find((e32) => e32.type === "video" && e32.file)) == null ? void 0 : a4.file);
      if (l32 && (await $a2(l32), h22.value)) return h22.value;
      let i3 = await Da2(c22.value);
      return new yu(i3);
    }
    async function Ea2(e22) {
      let t22 = Array.from(e22 || []).filter(Boolean);
      if (!t22.length) return;
      x2.value = "assets";
      let a4 = [];
      for (let i3 of t22) {
        let e32 = l6(i3);
        e32 ? a4.push({ file: i3, kind: e32 }) : aO.warning(`暂不支持：${i3.name}`);
      }
      if (!a4.length) return;
      Va2(a4[0].file.name);
      let l32 = 0;
      for (let { file: i3, kind: n3 } of a4) {
        let e32 = !1;
        n3 === "video" ? (e32 = await Aa2(i3), e32 && await $a2(i3)) : n3 === "image" ? e32 = await Fa2(i3) : n3 === "audio" && (e32 = await Ba2(i3)), e32 && (l32 += 1);
      }
      l32 > 0 && aO.success(`已导入 ${l32} 个素材`);
    }
    function ja2() {
      x2.value = "text";
    }
    function _a2(e22, t22) {
      if (t22) {
        let a4 = T2.value.find((e32) => e32.id === t22);
        if (a4?.type === e22) return Bt2(a4.id).locked ? (aO.warning("该轨道已锁定"), null) : a4.id;
      }
      return _t2(e22);
    }
    function Oa2(e22, t22, a4) {
      let l32 = e22 === h4.id ? h4 : S2.value.find((t32) => t32.id === e22);
      if (!l32) return;
      let i3 = Math.max(0, Number.isFinite(t22) ? t22 : 0), n3 = Math.max(2, Math.min(8, 0.3 * (ye2.value || 4))), o32 = _a2(l32.type, a4);
      if (!o32) return;
      let s32 = Ii(he2(), o32);
      if (l32.type === "video") {
        let e32 = Math.max(x, Number(l32.sourceDuration) || y2.value || n3), t32 = Pi(s32, i3, e32, A);
        if (t32 == null) return void aO.warning("当前轨道没有足够空隙");
        Gt2();
        let a5 = { id: W2(), trackId: o32, assetId: l32.id, type: "video", name: l32.name, file: l32.file, objectUrl: l32.objectUrl, start: t32, end: t32 + e32, sourceStart: 0, sourceDuration: e32, fps: l32.fps || yt2.value, hasAudio: l32.hasAudio !== !1, width: l32.width || 0, height: l32.height || 0, x: 0.5, y: 0.5, scale: ti({ type: "video", width: l32.width, height: l32.height }, It2.value.w, It2.value.h), rotate: 0, flipH: !1, flipV: !1, filter: "原片", volume: 100, muted: !1, fadeIn: 0, fadeOut: 0, speed: 1, keepPitch: !0 };
        return I2.value = [...I2.value, a5], k2.value = a5.id, Ht2(), void Dt2();
      }
      if (l32.type === "image") {
        let e32 = Pi(s32, i3, n3, A);
        if (e32 == null) return void aO.warning("当前轨道没有足够空隙");
        Gt2();
        let t32 = { id: W2(), trackId: o32, assetId: l32.id, type: "image", name: l32.name, file: l32.file, objectUrl: l32.objectUrl, opacity: 1, scale: 0.4, rotate: 0, x: 0.5, y: 0.5, width: l32.width || 0, height: l32.height || 0, start: e32, end: e32 + n3 };
        return z2.value = [...z2.value, t32], k2.value = t32.id, Ht2(), void Dt2();
      }
      if (l32.type === "audio") {
        let e32 = Math.max(x, Number(l32.sourceDuration) || n3), t32 = Pi(s32, i3, e32, A);
        if (t32 == null) return void aO.warning("当前轨道没有足够空隙");
        Gt2();
        let a5 = { id: W2(), trackId: o32, assetId: l32.id, type: "audio", name: l32.name, file: l32.file, objectUrl: l32.objectUrl, volume: 80, muted: !1, fadeIn: 0, fadeOut: 0, speed: 1, keepPitch: !0, waveHeights: l32.waveHeights || [], sourceStart: 0, sourceDuration: e32, start: t32, end: t32 + e32 };
        return P2.value = [...P2.value, a5], k2.value = a5.id, !a5.waveHeights.length && l32.file && oi(l32.file, 160).then((e42) => {
          let t4 = P2.value.findIndex((e52) => e52.id === a5.id);
          t4 >= 0 && Object.assign(P2.value[t4], { waveHeights: e42 });
        }), l32.sourceDuration > 0 || !l32.file || Xl(l32.file).then((t4) => {
          if (!(t4 > 0)) return;
          let i4 = P2.value.findIndex((e42) => e42.id === a5.id);
          if (i4 < 0) return;
          let n4 = P2.value[i4], o42 = Math.abs(n4.end - n4.start - e32) < 0.35;
          Object.assign(n4, { sourceDuration: t4, ...o42 ? { end: n4.start + t4 } : {} }), l32.sourceDuration = t4;
        }), Ht2(), Dt2(), void ll2();
      }
      if (l32.type === "text") {
        let e32 = Pi(s32, i3, n3, A);
        if (e32 == null) return void aO.warning("当前轨道没有足够空隙");
        Gt2();
        let t32 = { id: W2(), trackId: o32, assetId: h4.id, type: "text", content: "默认文本", fontFamily: "", fontWeight: "500", fontStyle: "normal", underline: !1, fontSize: 48, color: "#ffffff", opacity: 1, x: 0.5, y: 0.2, rotate: 0, start: e32, end: e32 + n3 };
        R2.value = [...R2.value, t32], k2.value = t32.id, x2.value = "text", Ht2(), Dt2();
      }
    }
    function Wa2(e22, t22) {
      if (e22) {
        if (t22) {
          if (N2.get(e22) === t22) return;
          N2.set(e22, t22);
        } else N2.delete(e22);
        el2(), al2();
      }
    }
    function Ha2(e22) {
      e22 && el2();
    }
    function qa2(e22) {
    }
    function Ya2(e22, t22) {
      if (e22) {
        if (t22) {
          if (F22.get(e22) === t22) return;
          F22.set(e22, t22);
        } else F22.delete(e22);
        ll2();
      }
    }
    function Xa2(e22, t22) {
      let a4 = Math.max(0, t22 - e22.start);
      return Math.max(0, (Number(e22.sourceStart) || 0) + a4 * Ti(e22));
    }
    function Ga2(e22, t22) {
      if (!e22) return;
      let a4 = t22 !== !1;
      "preservesPitch" in e22 && (e22.preservesPitch = a4), "mozPreservesPitch" in e22 && (e22.mozPreservesPitch = a4), "webkitPreservesPitch" in e22 && (e22.webkitPreservesPitch = a4);
    }
    function Ka2(e22) {
      return Math.min(16, Math.max(0.0625, (Number(Z22.value) || 1) * Ti(e22)));
    }
    function Ja2(e22, t22) {
      let a4 = !!t22;
      for (let l32 of [I2, P2]) for (let t32 of l32.value) t32.trackId === e22 && (t32.muted = a4);
    }
    function Za2(e22, t22) {
      let a4 = U2.value[e22], l32 = T2.value.find((t32) => t32.id === e22);
      if (!a4 || !l32 || !me2[l32.type]) return;
      let i3 = !!t22;
      a4.muted !== i3 && (Gt2(), U2.value = { ...U2.value, [e22]: { ...a4, muted: i3 } }), Ja2(e22, i3), el2(), ll2(), al2();
    }
    function Qa2(e22, t22, a4) {
      if (!e22) return;
      let l32 = At2(t22.id), i3 = l32 ? Bt2(l32.id) : R(), n3 = 1, o32 = Math.max(0, Number(t22.fadeIn) || 0), s32 = Math.max(0, Number(t22.fadeOut) || 0);
      o32 > 0 && a4 < t22.start + o32 && (n3 = Math.min(n3, Math.max(0, (a4 - t22.start) / o32))), s32 > 0 && a4 > t22.end - s32 && (n3 = Math.min(n3, Math.max(0, (t22.end - a4) / s32)));
      let r3 = !!t22.muted || i3.muted || i3.hidden, u3 = Math.min(1, Math.max(0, (Number(t22.volume) ?? 100) / 100)) * n3;
      e22.muted = r3 || u3 <= 0;
      try {
        e22.volume = r3 ? 0 : u3;
      } catch {
      }
    }
    function el2() {
      let e22 = g2.value;
      N2.forEach((t22, a4) => {
        if (!t22) return;
        let l32 = I2.value.find((e32) => e32.id === a4);
        t22.playbackRate = l32 ? Ka2(l32) : Z22.value, l32 && (Ga2(t22, l32.keepPitch), Qa2(t22, l32, e22));
      });
    }
    function tl2() {
      N2.forEach((e22) => {
        var t22;
        return (t22 = e22?.pause) == null ? void 0 : t22.call(e22);
      }), F22.forEach((e22) => {
        var t22;
        return (t22 = e22?.pause) == null ? void 0 : t22.call(e22);
      });
    }
    function al2() {
      let e22 = g2.value;
      for (let t22 of I2.value) {
        let a4 = N2.get(t22.id);
        if (!a4 || !t22.objectUrl) continue;
        if (a4.src !== t22.objectUrl && (a4.src = t22.objectUrl), !(!Vt2(t22.id) && e22 >= t22.start && e22 <= t22.end)) {
          a4.paused || a4.pause();
          continue;
        }
        let l32 = Xa2(t22, e22);
        if (Math.abs(a4.currentTime - l32) > 0.25) try {
          a4.currentTime = l32;
        } catch {
        }
        a4.playbackRate = Ka2(t22), Ga2(a4, t22.keepPitch), Qa2(a4, t22, e22), b22.value && a4.paused && a4.play().catch(() => {
        });
      }
    }
    function ll2() {
      let e22 = g2.value;
      for (let t22 of P2.value) {
        let a4 = F22.get(t22.id);
        if (!a4 || !t22.objectUrl) continue;
        a4.src !== t22.objectUrl && (a4.src = t22.objectUrl);
        let l32 = At2(t22.id), i3 = l32 ? Bt2(l32.id) : R();
        if (Qa2(a4, t22, e22), i3.hidden || e22 < t22.start || e22 > t22.end) a4.pause();
        else if (b22.value) {
          let l42 = Xa2(t22, e22);
          Math.abs(a4.currentTime - l42) > 0.25 && (a4.currentTime = Math.max(0, l42)), a4.playbackRate = Ka2(t22), Ga2(a4, t22.keepPitch), a4.paused && a4.play().catch(() => {
          });
        } else a4.pause();
      }
    }
    function il2() {
      _2 && cancelAnimationFrame(_2), _2 = 0;
    }
    function nl2() {
      il2(), O2 = performance.now(), H22 = g2.value;
      let e22 = () => {
        if (!b22.value) return void (_2 = 0);
        let t22 = Math.max(0.25, Number(Z22.value) || 1), a4 = H22 + (performance.now() - O2) / 1e3 * t22;
        if (a4 >= xe2.value - 0.02) return b22.value = !1, il2(), tl2(), g2.value = 0, ll2(), void al2();
        g2.value = a4, al2(), ll2(), _2 = requestAnimationFrame(e22);
      };
      _2 = requestAnimationFrame(e22);
    }
    function ol2() {
      el2();
    }
    function sl22() {
    }
    async function rl2() {
      if (we2.value) {
        if (b22.value) return b22.value = !1, il2(), void tl2();
        g2.value >= xe2.value - 0.05 && (g2.value = 0), b22.value = !0, nl2(), al2(), ll2();
      }
    }
    function ul2(e22) {
      let t22 = xe2.value || 0, a4 = Math.min(t22, Math.max(0, e22));
      g2.value = a4, b22.value && (O2 = performance.now(), H22 = a4), j2 ? (ll2(), al2()) : j2 = requestAnimationFrame(() => {
        j2 = 0, al2(), ll2();
      });
    }
    function dl2(e22) {
      let t22 = ye2.value;
      t22 && ul2(e22 / 100 * t22);
    }
    function cl2(e22) {
      dl2(e22);
    }
    function vl2(e22) {
      ul2(e22);
    }
    function pl2(e22) {
      Z22.value = Math.max(0.25, Math.min(4, Number(e22) || 1)), el2();
    }
    function ml2(e22) {
      te2.value = Math.max(0, Math.min(200, Number(e22) || 0)), el2();
    }
    function fl2(e22) {
      ae2.value = !!e22, el2();
    }
    function hl2() {
      let e22 = Rt2.value;
      e22 && e22.type === "video" && Tl2(e22.id, { scale: ti(e22, It2.value.w, It2.value.h), rotate: 0, flipH: !1, flipV: !1, filter: "原片" });
    }
    function bl2() {
      let e22 = Rt2.value;
      if (e22 && (e22.type === "video" || e22.type === "audio")) {
        Za2(e22.trackId, !1);
        let t22 = { volume: e22.type === "audio" ? 80 : 100, muted: !1, fadeIn: 0, fadeOut: 0 };
        return e22.type === "audio" && (t22.speed = 1, t22.keepPitch = !0), void Tl2(e22.id, t22);
      }
      te2.value = 100, ae2.value = !1, le2.value = !0, ie2.value = 0, ne2.value = 0, el2();
    }
    function gl2() {
      ja2();
    }
    function yl2(e22) {
      return Fa2(e22);
    }
    function xl2(e22) {
      return Ba2(e22);
    }
    function wl2() {
      let e22 = k2.value;
      if (!e22) return;
      let t22 = ge2(e22);
      if (!t22) return;
      if ($t2(e22)) return void aO.warning("该轨道已锁定");
      Gt2();
      let a4 = be2(t22.type);
      a4 && (a4.value = a4.value.filter((t32) => t32.id !== e22)), t22.type === "audio" && Ya2(e22, null), t22.type === "video" && N2.delete(e22);
      let l32 = t22.trackId;
      k2.value = "", Ot2(l32), Ht2(), ll2(), al2();
    }
    let kl2 = $o(() => {
      let e22 = Rt2.value;
      if (!e22 || $t2(e22.id)) return !1;
      let t22 = g2.value;
      return t22 > e22.start + x && t22 < e22.end - x;
    });
    function Ml2() {
      let e22 = Rt2.value;
      if (!e22) return void aO.warning("请先选中要分割的片段");
      if ($t2(e22.id)) return void aO.warning("该轨道已锁定");
      if (!kl2.value) return void aO.warning("请将播放头移到选中片段内部再分割");
      let t22 = g2.value, a4 = be2(e22.type);
      if (!a4) return;
      Gt2();
      let l32 = W2(), i3 = t22 - e22.start, n3 = { ...e22, id: l32, start: t22, end: e22.end };
      e22.type !== "video" && e22.type !== "audio" || (n3.sourceStart = (e22.sourceStart || 0) + Math.max(0, i3) * Ti(e22)), e22.end = t22, a4.value = [...a4.value, n3], k2.value = l32, e22.type === "audio" && ll2(), Ht2();
    }
    function Cl2(e22, t22) {
      if (e22.type !== "video" && e22.type !== "audio") return void (e22.speed = t22);
      let a4 = (function(e32) {
        let t32 = Si(e32), a5 = Ti(e32), l42 = Math.max(x, Number(e32?.sourceDuration) || t32 * a5), i4 = Math.max(0, Number(e32?.sourceStart) || 0);
        return Math.max(x, Math.min(Math.max(0, l42 - i4), t32 * a5));
      })(e22), l32 = Number(e22.start) || 0, i3 = Number(e22.end) || 0, n3 = l32 + (function(e32, t32) {
        let a5 = Math.max(H2, Number(t32) || 1);
        return Math.max(x, e32 / a5);
      })(a4, t22);
      e22.speed = t22, e22.end = n3, (function(e32, t32, a5, l42, i4) {
        let n4 = i4 - l42, o32 = 1e-4;
        for (let s32 of e32 || []) if (s32 && s32.id !== t32) {
          if (s32.start + o32 >= a5 && s32.end - o32 <= l42) {
            let e42 = Ui(s32.start, a5, l42, i4), t4 = Ui(s32.end, a5, l42, i4);
            s32.start = e42, s32.end = Math.max(e42 + x, t4);
            continue;
          }
          Math.abs(n4) > o32 && s32.start + o32 >= l42 && (s32.start += n4, s32.end += n4);
        }
      })(he2().filter((t32) => t32.id !== e22.id && !$t2(t32.id)), e22.id, l32, i3, n3);
    }
    function Sl2() {
      let e22 = ye2.value;
      g2.value > e22 ? ul2(e22) : b22.value && (O2 = performance.now(), H22 = g2.value);
    }
    function Tl2(e22, t22) {
      if ($t2(e22)) return void aO.warning("该轨道已锁定");
      let a4 = [I2, z2, R2, P2];
      for (let l32 of a4) {
        let a5 = l32.value.findIndex((t32) => t32.id === e22);
        if (a5 >= 0) {
          let e32 = l32.value[a5], i3 = !1;
          for (let a6 of Object.keys(t22)) if (e32[a6] !== t22[a6]) {
            i3 = !0;
            break;
          }
          if (!i3) return;
          if (Kt2(), !Object.prototype.hasOwnProperty.call(t22, "speed") || e32.type !== "video" && e32.type !== "audio") Object.assign(e32, t22);
          else {
            let a6 = { ...t22 };
            delete a6.speed, Cl2(e32, Ti({ speed: t22.speed })), Object.assign(e32, a6), Sl2();
          }
          return l32 === P2 && ll2(), void (l32 === I2 && al2());
        }
      }
    }
    function Ul2(e22, { scaleBy: t22, dx: a4, dy: l32, rotateBy: i3 } = {}) {
      let n3 = ge2(e22);
      if (!n3 || $t2(e22) || n3.type !== "image" && n3.type !== "text" && n3.type !== "video") return;
      let o32 = {};
      if (Number.isFinite(a4) || Number.isFinite(l32)) {
        let e32 = Number.isFinite(Number(n3.x)) ? Number(n3.x) : 0.5, t32 = Number.isFinite(Number(n3.y)) ? Number(n3.y) : 0.5;
        o32.x = Math.min(1, Math.max(0, e32 + (Number(a4) || 0))), o32.y = Math.min(1, Math.max(0, t32 + (Number(l32) || 0)));
      }
      if (Number.isFinite(t22) && t22 > 0) if (n3.type === "text") {
        let e32 = Math.max(P, Number(n3.fontSize) || 48);
        o32.fontSize = Math.round(Math.min(D, Math.max(P, e32 * t22)));
      } else {
        let e32 = ti(n3, It2.value.w, It2.value.h), a5 = Number.isFinite(Number(n3.scale)) ? Number(n3.scale) : e32;
        o32.scale = Math.min(C, Math.max(B, a5 * t22));
      }
      if (Number.isFinite(i3) && i3) {
        let e32 = (Number(n3.rotate) || 0) + i3;
        for (; e32 > 180; ) e32 -= 360;
        for (; e32 < -180; ) e32 += 360;
        o32.rotate = Math.round(10 * e32) / 10;
      }
      Object.keys(o32).length && Tl2(e22, o32);
    }
    function Il2(e22, t22, a4, l32) {
      let i3 = ge2(e22);
      if (!i3 || $t2(e22)) return;
      let n3 = i3.trackId, o32 = i3.trackId;
      if (a4 === "__new__") {
        let e32 = Number(l32);
        n3 = _t2(i3.type, Number.isFinite(e32) ? e32 : void 0);
      } else if (a4) {
        let e32 = T2.value.find((e42) => e42.id === a4);
        e32?.type !== i3.type || Bt2(e32.id).locked || (n3 = e32.id);
      }
      let s32 = Si(i3), r3 = Pi(Ii(he2(), n3, i3.id), Math.max(0, t22), s32, A);
      r3 != null ? (Tl2(e22, { start: r3, end: r3 + s32, trackId: n3 }), o32 !== n3 && Ot2(o32)) : n3 !== o32 && Ot2(n3);
    }
    function zl2(e22, t22, a4, l32) {
      Il2(e22, t22, l32);
    }
    function Rl2(e22, t22, a4, l32) {
      let i3 = ge2(e22);
      if (!i3 || $t2(e22)) return;
      let n3 = Ii(he2(), i3.trackId, i3.id), o32 = Ni(n3, i3, t22, a4, l32, A);
      if (o32) {
        if (i3.type === "video" || i3.type === "audio") {
          let t32 = Ti(i3), a5 = Math.max(x, Number(i3.sourceDuration) || Si(i3) * t32), s32 = Math.max(0, Number(i3.sourceStart) || 0), r3 = Si(i3);
          if ((l32 === "start" || l32 === "end" ? l32 : "end") === "start") {
            let l42 = Math.min(a5, s32 + r3 * t32), u4 = Math.max(x, o32.end - o32.start);
            u4 = Math.min(u4, Math.max(x, l42 / t32)), s32 = Math.max(0, l42 - u4 * t32);
            let d3 = Ni(n3, i3, o32.end - u4, o32.end, "start", A);
            return void Tl2(e22, { start: d3.start, end: d3.end, sourceStart: s32 });
          }
          let u3 = Math.max(x, (a5 - s32) / t32), d2 = Math.min(o32.end, i3.start + u3), c3 = Ni(n3, i3, i3.start, d2, "end", A);
          return void Tl2(e22, { start: c3.start, end: c3.end });
        }
        Tl2(e22, { start: o32.start, end: o32.end });
      }
    }
    function Pl2(e22, t22, a4, l32) {
      Rl2(e22, t22, a4, l32);
    }
    function Nl2(e22) {
      let t22 = z.find((t32) => t32.id === e22);
      t22 && (se2.presetId = e22, se2.format = t22.format, se2.videoBitRate = t22.videoBitRate, se2.width = t22.width, se2.height = t22.height);
    }
    function Bl2() {
      Al2(), ve2.value = Date.now(), pe2 = setInterval(() => {
        ve2.value = Date.now();
      }, 200);
    }
    function Al2() {
      pe2 && (clearInterval(pe2), pe2 = null);
    }
    function Vl2(e22) {
      return T2.value.findIndex((t22) => t22.id === e22);
    }
    async function $l2() {
      if (Oe()) return void ia2();
      if (!u2.value) return void aO.warning("请先导入素材");
      if (!he2().length) return void aO.warning("请先将素材拖入轨道");
      let e22 = ye2.value;
      if (e22 < 0.05) return void aO.warning("剪切时长过短");
      if (re2.value) return;
      b22.value = !1, tl2(), Bl2();
      let t22 = se2.format, l32 = `视频 · 视频剪切 (${t22})`;
      await Ue(async (a4) => {
        var l42;
        let i3 = null;
        try {
          i3 = await La2();
          let l52 = [], o32 = T2.value;
          for (let e32 of o32) {
            if (Bt2(e32.id).hidden) continue;
            let t32 = Ii(he2(), e32.id);
            for (let a5 of t32) if (a5.type === "video") l52.push({ kind: "video", file: a5.file, start: a5.start, end: a5.end, sourceStart: a5.sourceStart || 0, hasAudio: a5.hasAudio !== !1, muted: !!a5.muted || Bt2(e32.id).muted, volume: (Number(a5.volume) ?? 100) / 100, fadeIn: a5.fadeIn || 0, fadeOut: a5.fadeOut || 0, speed: Ti(a5), keepPitch: a5.keepPitch !== !1, x: Number.isFinite(Number(a5.x)) ? a5.x : 0.5, y: Number.isFinite(Number(a5.y)) ? a5.y : 0.5, scale: Number.isFinite(Number(a5.scale)) ? a5.scale : ti(a5, It2.value.w, It2.value.h), rotate: a5.rotate || 0, flipH: !!a5.flipH, flipV: !!a5.flipV, filter: a5.filter || "原片" });
            else if (a5.type === "image") {
              let e42 = a5.file;
              try {
                e42 = await li(a5.file);
              } catch {
                throw new Error(`图片「${a5.name || "未命名"}」无法转为 PNG，请换一张浏览器可显示的图片`);
              }
              l52.push({ kind: "overlay", fit: "canvas", file: e42, opacity: a5.opacity, scale: a5.scale, rotate: a5.rotate, x: a5.x, y: a5.y, start: a5.start, end: a5.end });
            } else if (a5.type === "text") {
              let e42 = await U(a5);
              l52.push({ kind: "overlay", fit: "pixel", file: e42, opacity: 1, scale: 1, rotate: a5.rotate, x: a5.x, y: a5.y, start: a5.start, end: a5.end });
            }
          }
          let s32 = [];
          for (let e32 of P2.value) {
            if (Vt2(e32.id)) continue;
            let t32 = At2(e32.id), a5 = t32 ? Bt2(t32.id) : R(), l62 = e32.file;
            try {
              l62 = await ni(e32.file);
            } catch {
              throw new Error(`音频「${e32.name || "未命名"}」无法转为 WAV，请换一个浏览器可播放的音频`);
            }
            s32.push({ file: l62, volume: (e32.volume ?? 100) / 100, muted: e32.muted || a5.muted, start: e32.start, end: e32.end, sourceStart: e32.sourceStart || 0, fadeIn: e32.fadeIn || 0, fadeOut: e32.fadeOut || 0, speed: Ti(e32), keepPitch: e32.keepPitch !== !1 });
          }
          return await i3.videoCut({ duration: e22, videoClips: l52.filter((e32) => e32.kind === "video"), overlays: l52.filter((e32) => e32.kind === "overlay"), visualLayers: l52, audioClips: s32, speed: Z22.value, keepPitch: ee2.value, volume: te2.value / 100, muted: ae2.value, keepOriginalAudio: le2.value, fadeIn: ie2.value, fadeOut: ne2.value, previewRatio: X2.value, customWidth: G2.value, customHeight: K2.value, canvasBg: J2.value, videoBitRate: se2.videoBitRate, width: se2.width, height: se2.height, fps: se2.fps || yt2.value, sourceWidth: It2.value.w, sourceHeight: It2.value.h }, t22.toLowerCase(), a4);
        } finally {
          if (i3 && i3 !== h22.value) try {
            (l42 = i3.destroy) == null || l42.call(i3);
          } catch {
          }
        }
      }, { format: t22, desc: l32 }), Al2(), Oe() ? oe2.value = !0 : Pe.status === "done" && Pe.result && (a3.addRecentTask({ name: Pe.result.name, desc: l32, icon: Mt2 }), oe2.value = !1, Ge());
    }
    return Fr([Z22, te2, ae2, le2], () => el2()), Fr(k2, () => {
      Pt2();
    }), Fr(b22, (e22) => {
      e22 || (il2(), tl2());
    }), Fr(() => Pe.status, (e22) => {
      if (e22 === "running") return Bl2(), void (r2 && (oe2.value = !0));
      Al2(), e22 === "done" && Oe() && r2 && (oe2.value = !0);
    }), Fr([S2, T2, U2, I2, z2, R2, P2, X2, G2, K2, J2, Z22, ee2, te2, ae2, le2, ie2, ne2, k2, x2, w2, C2, c22, u2, se2], () => ha2(), { deep: !0 }), Ia2(), { VIDEO_CUT_META: s6, ready: i2, workspaceSupported: n2, workspaceReady: o22, enableWorkspace: Sa2, toggleWorkspacePersist: Ua2, editorVisible: u2, fileName: c22, fileMeta: fe2, objectUrl: f2, playing: b22, currentTime: g2, duration: y2, clockText: St2, activeDock: x2, activeTool: w2, selectedClipId: k2, selectedClip: Rt2, selectedAssetId: M2, selectClip: Ft2, selectAsset: Nt2, removeAsset: ca2, assetViewMode: C2, assets: S2, videoOnTimeline: gt2, get trackRows() {
      return T2.value;
    }, get trackRowStates() {
      return U2.value;
    }, get canUndo() {
      return A2.value.length > 0;
    }, get canRedo() {
      return V22.value.length > 0;
    }, timelineDuration: ye2, timelineEnd: xe2, hasTimelineContent: we2, canClearProject: bt2, canClearTracks: ke2, pxPerSec: kt2, minPxPerSec: xt2, maxPxPerSec: wt2, projectFps: yt2, playheadPct: Mt22, progressInTrimPct: Ct2, previewRatio: X2, customWidth: G2, customHeight: K2, canvasBg: J2, previewDesignSize: It2, speed: Z22, speedLabel: Tt2, keepPitch: ee2, volume: te2, muted: ae2, keepOriginalAudio: le2, fadeIn: ie2, fadeOut: ne2, videoClips: I2, imageClips: z2, textClips: R2, audioClips: P2, exportOpen: oe2, exportForm: se2, exporting: re2, exportLabel: ta2, exportProgress: ue2, exportPendingReady: aa2, exportOutputSizeText: zt2, loadFile: Na2, reset: pa2, clearProject: ma2, clearTracks: fa2, bindVideo: Ha2, bindVideoClip: Wa2, bindBgm: qa2, bindBgmClip: Ya2, isClipHidden: Vt2, onLoadedMeta: ol2, onTimeUpdate: sl22, togglePlay: rl2, seekTo: ul2, seekByPct: cl2, seekByTimelinePct: dl2, seekByTime: vl2, setSpeed: pl2, setVolume: ml2, setMuted: fl2, resetFrame: hl2, resetSound: bl2, addDefaultText: gl2, addTextAsset: ja2, addImageFile: yl2, addAudioFile: xl2, importImageAsset: Fa2, importAudioAsset: Ba2, importMediaFiles: Ea2, placeAssetOnTimeline: Oa2, removeSelectedClip: wl2, splitSelectedClip: Ml2, canSplitAtPlayhead: kl2, updateClip: Tl2, nudgeClipTransform: Ul2, moveClip: Il2, moveClipRelative: zl2, resizeClip: Rl2, resizeClipRelative: Pl2, reorderTracks: Wt2, setTimelineViewport: Lt2, setPxPerSec: Et2, zoomBy: jt2, toggleTrackRowFlag: Qt2, toggleTrackFlag: ea2, setTrackMuted: Za2, undo: Jt2, redo: Zt2, applyExportPreset: Nl2, exportVideo: $l2, downloadExportResult: ia2, discardExportResult: na2, cancelExport: oa2, trackIndex: Vl2, onUiMount: za2, onUiUnmount: Ra2, refreshBox: l22 };
  })()), Bi);
}
var Vi = { class: "flex-1 min-h-0 convert-workspace-files rounded-2xl p-2.5 flex flex-col" }, $i = ["accept"], Di = { class: "size-14 rounded-2xl grid place-items-center mb-3 drop-icon" }, Li = { class: "mt-1.5 text-[12px] d-label-2" }, Ei = ["title"], ji = { __name: "EmptyDrop", props: { accept: { type: String, default: "video/*,image/*,audio/*" }, hint: { type: String, default: "" }, workspaceSupported: { type: Boolean, default: !1 }, workspaceReady: { type: Boolean, default: !1 } }, emits: ["files", "toggle-workspace"], setup(e22, { expose: t22, emit: a2 }) {
  let l22 = a2, i2 = Et(), n2 = Et(!1);
  function o22() {
    i2.value && (i2.value.value = "", i2.value.click());
  }
  function s22(e32) {
    let t32 = Array.from(e32 || []).filter(Boolean);
    t32.length && l22("files", t32);
  }
  function r2(e32) {
    s22(e32.target.files), e32.target.value = "";
  }
  function u2(e32) {
    var t32;
    n2.value = !1, s22((t32 = e32.dataTransfer) == null ? void 0 : t32.files);
  }
  return t22({ open: o22 }), (t32, a3) => (Zr(), eo("div", Vi, [io("div", { class: W(["flex-1 min-h-0 rounded-2xl border-[1.5px] border-dashed drop-zone flex flex-col items-center justify-center text-center px-6 cursor-pointer", { "drop-active": n2.value }]), onDragover: a3[1] || (a3[1] = sl((e32) => n2.value = !0, ["prevent"])), onDragleave: a3[2] || (a3[2] = (e32) => n2.value = !1), onDrop: sl(u2, ["prevent"]), onClick: o22 }, [io("input", { ref_key: "inputRef", ref: i2, type: "file", class: "hidden", multiple: "", accept: e22.accept, onChange: r2 }, null, 40, $i), io("div", Di, [lo(Lt(l5), { class: "size-8" })]), a3[3] || (a3[3] = io("div", { class: "text-[14px]", style: { color: "var(--d-label)" } }, [uo(" 将视频、图片或音频拖到此处，或 "), io("span", { class: "font-medium", style: { color: "var(--primary-color)" } }, "点击上传")], -1)), io("div", Li, Z(e22.hint), 1), e22.workspaceSupported ? (Zr(), eo("button", { key: 0, type: "button", class: W(["vc-workspace-persist-btn mt-3", { "is-on": e22.workspaceReady }]), title: e22.workspaceReady ? "点击关闭工作区持久化" : "授权后将工程保存到本地文件夹，刷新可恢复", onClick: a3[0] || (a3[0] = sl((e32) => t32.$emit("toggle-workspace"), ["stop"])) }, Z(e22.workspaceReady ? "工作区持久化开启成功" : "开启工作区持久化存储"), 11, Ei)) : po("", !0)], 34)]));
} }, _i = o(ji, [["__scopeId", "data-v-f1cfd75c"]]), Oi = { class: "vc-dock rounded-xl flex shrink-0 min-h-0 overflow-hidden" }, Wi = { class: "vc-dock-rail flex flex-col items-center gap-1 py-2" }, Hi = { class: "vc-dock-head" }, qi = { class: "flex items-center gap-1.5 shrink-0" }, Yi = ["disabled"], Xi = ["disabled"], Gi = { class: "vc-view-toggle" }, Ki = ["disabled"], Ji = ["disabled"], Zi = ["disabled"], Qi = { class: "vc-dock-body custom-scroll" }, en = { key: 0, class: "text-[12px] py-6 text-center flex-1 grid place-items-center min-h-full", style: { color: "var(--d-label-2)" } }, tn = ["onClick", "onDragstart"], an = { class: "vc-asset-thumb" }, ln = ["src"], nn = { key: 0, class: "vc-asset-badge is-added" }, on2 = { key: 1, class: "vc-asset-badge is-duration" }, sn = ["disabled", "onClick"], rn = { class: "vc-asset-info min-w-0" }, un = { class: "truncate font-medium" }, dn = { key: 0, class: "truncate meta" }, cn = ["disabled", "title"], vn = { class: "vc-dock-body custom-scroll" }, pn = { class: "vc-asset-thumb" }, mn2 = { class: "vc-asset-info min-w-0 flex-1" }, fn = { class: "truncate" }, hn = ["disabled"], bn = { key: 2, class: "vc-dock-drop-mask" }, gn = ["accept"], yn2 = /* @__PURE__ */ o({ __name: "AssetDock", props: { activeDock: { type: String, default: "assets" }, assetViewMode: { type: String, default: "grid" }, assets: { type: Array, default: () => [] }, selectedAssetId: { type: String, default: "" }, disabled: { type: Boolean, default: !1 }, workspaceSupported: { type: Boolean, default: !1 }, workspaceReady: { type: Boolean, default: !1 } }, emits: ["update:activeDock", "update:assetViewMode", "import-media", "select-asset", "remove-asset", "clear-assets", "add-text-to-timeline", "place-asset", "toggle-workspace"], setup(e22, { expose: t22, emit: a2 }) {
  let l22 = e22, i2 = a2, n2 = Et(), o22 = Et(!1), s22 = 0, r2 = h4, u2 = $o(() => (l22.assets || []).filter((e32) => e32 && e32.type !== "text"));
  function d2(e32) {
    if (e32?.type !== "video" && e32?.type !== "audio") return "";
    let t32 = Number(e32.sourceDuration);
    return !Number.isFinite(t32) || t32 <= 0 ? "" : _(t32);
  }
  function c22(e32, t32) {
    if (l22.disabled) return void e32.preventDefault();
    let a3 = JSON.stringify({ id: t32.id, type: t32.type });
    e32.dataTransfer.setData("application/x-mediabox-asset", a3), e32.dataTransfer.setData("text/plain", `mediabox-asset:${a3}`), e32.dataTransfer.effectAllowed = "copyMove";
  }
  function m22(e32) {
    var t32;
    return !!e32 && (!!((t32 = e32.files) != null && t32.length) || Array.from(e32.types || []).includes("Files"));
  }
  function y2(e32) {
    !l22.disabled && m22(e32.dataTransfer) && (e32.preventDefault(), s22 += 1, o22.value = !0, l22.activeDock !== "assets" && i2("update:activeDock", "assets"));
  }
  function x2(e32) {
    !l22.disabled && m22(e32.dataTransfer) && (e32.preventDefault(), e32.dataTransfer.dropEffect = "copy", o22.value = !0);
  }
  function I2(e32) {
    m22(e32.dataTransfer) && (e32.preventDefault(), s22 = Math.max(0, s22 - 1), s22 === 0 && (o22.value = !1));
  }
  function P2(e32) {
    if (e32.preventDefault(), s22 = 0, o22.value = !1, l22.disabled) return;
    let t32 = e32.dataTransfer.getData("application/x-mediabox-asset") || e32.dataTransfer.getData("text/plain");
    if (t32 && String(t32).includes("mediabox-asset")) return;
    let a3 = Array.from(e32.dataTransfer.files || []);
    a3.length && i2("import-media", a3);
  }
  function N2() {
    !l22.disabled && n2.value && (n2.value.value = "", n2.value.click());
  }
  function F22(e32) {
    let t32 = Array.from(e32.target.files || []);
    e32.target.value = "", t32.length && i2("import-media", t32);
  }
  return t22({ pickMedia: N2 }), (t32, a3) => (Zr(), eo("aside", Oi, [io("div", Wi, [io("button", { type: "button", class: W(["vc-dock-btn", { active: e22.activeDock === "assets" }]), title: "素材", onClick: a3[0] || (a3[0] = (e32) => t32.$emit("update:activeDock", "assets")) }, [lo(Lt(o2), { class: "size-4" })], 2), io("button", { type: "button", class: W(["vc-dock-btn", { active: e22.activeDock === "text" }]), title: "文字", onClick: a3[1] || (a3[1] = (e32) => t32.$emit("update:activeDock", "text")) }, [lo(Lt(s3), { class: "size-4" })], 2)]), io("div", { class: W(["vc-dock-pane flex-1 min-w-0 flex flex-col overflow-hidden relative", { "vc-dock-drop-active": o22.value }]), onDragenter: y2, onDragover: x2, onDragleave: I2, onDrop: P2 }, [e22.activeDock === "assets" ? (Zr(), eo(Hr, { key: 0 }, [io("div", Hi, [a3[16] || (a3[16] = io("span", { class: "text-[12px] font-medium", style: { color: "var(--d-label)" } }, "素材", -1)), io("div", qi, [e22.selectedAssetId ? (Zr(), eo("button", { key: 0, type: "button", class: "vc-import-btn vc-clear-btn", title: "删除素材（Delete）", disabled: e22.disabled, onPointerdown: a3[2] || (a3[2] = sl(() => {
  }, ["stop"])), onMousedown: a3[3] || (a3[3] = sl(() => {
  }, ["stop"])), onClick: a3[4] || (a3[4] = sl((a4) => t32.$emit("remove-asset", e22.selectedAssetId), ["stop"])) }, [lo(Lt(s2), { class: "size-3" })], 40, Yi)) : po("", !0), io("button", { type: "button", class: "vc-import-btn vc-clear-btn", title: "清除全部素材与轨道", disabled: e22.disabled || !u2.value.length, onClick: a3[5] || (a3[5] = (e32) => t32.$emit("clear-assets")) }, [lo(Lt(e4), { class: "size-3.5" })], 8, Xi), io("div", Gi, [io("button", { type: "button", class: W({ active: e22.assetViewMode === "list" }), title: "列表", disabled: e22.disabled, onClick: a3[6] || (a3[6] = (e32) => t32.$emit("update:assetViewMode", "list")) }, [lo(Lt(s4), { class: "size-3.5" })], 10, Ki), io("button", { type: "button", class: W({ active: e22.assetViewMode === "grid" }), title: "网格", disabled: e22.disabled, onClick: a3[7] || (a3[7] = (e32) => t32.$emit("update:assetViewMode", "grid")) }, [lo(Lt(h3), { class: "size-3.5" })], 10, Ji)]), io("button", { type: "button", class: "vc-import-btn", title: "导入视频 / 图片 / 音频", disabled: e22.disabled, onClick: N2 }, [lo(Lt(l4), { class: "size-3.5" }), a3[15] || (a3[15] = uo(" 导入 "))], 8, Zi)])]), io("div", Qi, [u2.value.length ? (Zr(), eo("div", { key: 1, class: W(e22.assetViewMode === "list" ? "vc-asset-list" : "vc-asset-grid") }, [(Zr(!0), eo(Hr, null, Es(u2.value, (l32) => {
    return Zr(), eo("div", { key: l32.id, class: W(["vc-asset-item", [e22.assetViewMode === "grid" ? "is-card" : "is-row", { "is-selected": e22.selectedAssetId === l32.id }]]), draggable: "true", onClick: (e32) => (function(e42) {
      e42?.id && i2("select-asset", e42.id);
    })(l32), onDragstart: (e32) => c22(e32, l32) }, [io("div", an, [l32.thumbUrl ? (Zr(), eo("img", { key: 0, src: l32.thumbUrl, alt: "", class: "size-full object-cover" }, null, 8, ln)) : l32.type === "video" ? (Zr(), to(Lt(Mt2), { key: 1, class: "size-5" })) : l32.type === "image" ? (Zr(), to(Lt(t3), { key: 2, class: "size-5" })) : l32.type === "audio" ? (Zr(), to(Lt(s5), { key: 3, class: "size-5" })) : (Zr(), to(Lt(s3), { key: 4, class: "size-5" })), e22.assetViewMode === "grid" ? (Zr(), eo(Hr, { key: 5 }, [l32.onTimeline ? (Zr(), eo("span", nn, "已添加")) : po("", !0), d2(l32) ? (Zr(), eo("span", on2, Z(d2(l32)), 1)) : po("", !0)], 64)) : po("", !0), io("button", { type: "button", class: "vc-asset-add-btn", title: "添加到新轨道", disabled: e22.disabled, onPointerdown: a3[8] || (a3[8] = sl(() => {
    }, ["stop"])), onMousedown: a3[9] || (a3[9] = sl(() => {
    }, ["stop"])), onClick: sl((e32) => t32.$emit("place-asset", l32.id), ["stop"]) }, [lo(Lt(h), { class: "size-3" })], 40, sn)]), io("div", rn, [io("div", un, Z(l32.name), 1), e22.assetViewMode !== "grid" ? (Zr(), eo("div", dn, [uo(Z((n3 = l32.type, { video: "视频", image: "图片", audio: "音频", text: "文字" }[n3] || n3)) + " ", 1), l32.meta ? (Zr(), eo(Hr, { key: 0 }, [uo(" · " + Z(l32.meta), 1)], 64)) : po("", !0), l32.useCount ? (Zr(), eo(Hr, { key: 1 }, [uo(" · 已上轨 ×" + Z(l32.useCount), 1)], 64)) : po("", !0)])) : po("", !0)])], 42, tn);
    var n3;
  }), 128))], 2)) : (Zr(), eo("div", en, " 点击导入或拖入文件到此处 "))]), e22.workspaceSupported ? (Zr(), eo("button", { key: 0, type: "button", class: W(["vc-workspace-persist-btn !border-t !border-t-black/5 dark:!border-t-white/5", { "is-on": e22.workspaceReady }]), disabled: e22.disabled, title: e22.workspaceReady ? "点击关闭工作区持久化" : "授权后将工程保存到本地文件夹，刷新可恢复", onClick: a3[10] || (a3[10] = (e32) => t32.$emit("toggle-workspace")) }, Z(e22.workspaceReady ? "工作区持久化开启成功" : "开启工作区持久化存储"), 11, cn)) : po("", !0)], 64)) : (Zr(), eo(Hr, { key: 1 }, [a3[19] || (a3[19] = io("div", { class: "vc-dock-head" }, [io("span", { class: "text-[12px] font-medium", style: { color: "var(--d-label)" } }, "文字")], -1)), io("div", vn, [a3[18] || (a3[18] = io("p", { class: "text-[12px] mb-2 leading-4 d-label-2" }, " 拖入轨道可添加多段，每段内容独立编辑 ", -1)), io("div", { class: "vc-asset-item is-row", draggable: "true", onDragstart: a3[14] || (a3[14] = (e32) => c22(e32, Lt(r2))) }, [io("div", pn, [lo(Lt(s3), { class: "size-4" })]), io("div", mn2, [io("div", fn, Z(Lt(r2).name), 1), a3[17] || (a3[17] = io("div", { class: "meta truncate" }, "拖入或点击添加到轨道", -1))]), io("button", { type: "button", class: "vc-asset-add-btn is-inline", title: "添加到新轨道", disabled: e22.disabled, onPointerdown: a3[11] || (a3[11] = sl(() => {
  }, ["stop"])), onMousedown: a3[12] || (a3[12] = sl(() => {
  }, ["stop"])), onClick: a3[13] || (a3[13] = sl((e32) => t32.$emit("add-text-to-timeline"), ["stop"])) }, [lo(Lt(h), { class: "size-3" })], 40, hn)], 32)])], 64)), o22.value ? (Zr(), eo("div", bn, "松开以导入素材")) : po("", !0)], 34), io("input", { ref_key: "mediaInput", ref: n2, type: "file", class: "hidden", multiple: "", accept: Lt(o4), onChange: F22 }, null, 40, gn)]));
} }, [["__scopeId", "data-v-000ffadc"]]), xn = { key: 0, class: "vc-preview-empty" }, wn = ["onPointerdown"], kn = ["src"], Mn = ["src"], Cn = { key: 2, class: "vc-layer-text" }, Sn = { class: "vc-canvas-size" }, Tn = ["data-handle", "onPointerdown"], Un = { class: "vc-transport rounded-xl px-3 py-2 flex items-center gap-3 shrink-0" }, In = ["disabled"], zn = { class: "flex-1 min-w-0" }, Rn = { class: "mt-1 text-[11px] tabular-nums", style: { color: "var(--d-label-2)" } }, Pn = { class: "text-[11px] shrink-0 tabular-nums", style: { color: "var(--d-label-2)" } }, Nn = ["disabled"], Fn = { class: "vc-ratio-btn-label border border-[rgba(var(--alpha-color),0.15)] rounded px-0.5 min-w-[32px]" }, Bn = { class: "vc-ratio-grid" }, An = { key: 0, class: "vc-ratio-divider" }, Vn = ["disabled", "onClick"], $n = { key: 1, class: "vc-ratio-check" }, Dn = { class: "flex-1 text-left truncate" }, Ln = ["title", "disabled"], En = ["src"], jn = /* @__PURE__ */ o({ __name: "PreviewStage", props: { playing: { type: Boolean, default: !1 }, clockText: { type: String, default: "" }, progressPct: { type: Number, default: 0 }, speedLabel: { type: String, default: "1.00x" }, canvasBg: { type: String, default: "#000" }, designWidth: { type: Number, default: 1280 }, designHeight: { type: Number, default: 720 }, currentTime: { type: Number, default: 0 }, videoClips: { type: Array, default: () => [] }, imageClips: { type: Array, default: () => [] }, textClips: { type: Array, default: () => [] }, audioClips: { type: Array, default: () => [] }, exporting: { type: Boolean, default: !1 }, trackRows: { type: Array, default: () => [] }, trackRowStates: { type: Object, default: () => ({}) }, selectedId: { type: String, default: "" }, hasTimelineContent: { type: Boolean, default: !1 }, previewRatio: { type: String, default: "adapt" } }, emits: ["loaded-meta", "toggle-play", "seek-pct", "bind-video-clip", "bind-bgm-clip", "select", "patch-clip", "update:previewRatio"], setup(e22, { emit: t22 }) {
  let a2 = ["nw", "ne", "sw", "se"], l22 = e22, i2 = t22, n2 = Et(!1), o22 = $o(() => {
    let e32 = l22.previewRatio, t32 = u.find((t4) => t4 !== "divider" && t4.value === e32);
    return t32 ? t32.value === "adapt" ? "适应" : t32.label : e32 || "比例";
  }), s22 = Et(), r2 = Et(), u2 = Et(), d2 = Et({ w: 0, h: 0 }), c22 = /* @__PURE__ */ new Map(), m22 = /* @__PURE__ */ new Map(), y2 = /* @__PURE__ */ new Map(), x2 = Et(null), M2 = Et(null), P2 = null, F22 = 0, { isFullscreen: B2, toggle: A2 } = Me(s22);
  Fr(B2, () => {
    n2.value = !1;
  });
  let V22 = $o(() => Math.max(16, Math.round(Number(l22.designWidth) || 1280))), E2 = $o(() => Math.max(16, Math.round(Number(l22.designHeight) || 720))), j2 = $o(() => {
    let e32 = d2.value.w, t32 = d2.value.h;
    return e32 && t32 ? Math.min(e32 / V22.value, t32 / E2.value) : 1;
  }), _2 = $o(() => ({ width: V22.value * j2.value + "px", height: E2.value * j2.value + "px" })), O2 = $o(() => ({ width: `${V22.value}px`, height: `${E2.value}px`, background: l22.canvasBg, transform: `scale(${j2.value})`, transformOrigin: "top left" }));
  function W22(e32, t32, a3) {
    return Math.min(a3, Math.max(t32, e32));
  }
  function H22(e32) {
    var t32;
    return !!((t32 = l22.trackRowStates[e32]) != null && t32.locked);
  }
  function q2(e32) {
    return Number(e32?.rotate) || 0;
  }
  function Y2() {
    let e32 = r2.value;
    if (!e32) return void (d2.value = { w: 0, h: 0 });
    let t32 = e32.clientWidth || 0, a3 = e32.clientHeight || 0;
    t32 === d2.value.w && a3 === d2.value.h || (d2.value = { w: t32, h: a3 });
  }
  function X2(e32) {
    var t32;
    return !!((t32 = l22.trackRowStates[e32]) != null && t32.hidden);
  }
  function G2(e32) {
    return l22.currentTime >= e32.start && l22.currentTime <= e32.end;
  }
  let K2 = $o(() => {
    let e32 = [];
    return l22.trackRows.forEach((t32, a3) => {
      let i3 = a3 + 1;
      if (t32.type === "video") for (let n3 of l22.videoClips) n3.trackId === t32.id && e32.push({ ...n3, z: i3, visible: !X2(t32.id) && G2(n3) });
      else if (t32.type === "image") for (let n3 of l22.imageClips) n3.trackId === t32.id && e32.push({ ...n3, z: i3, visible: !X2(t32.id) && G2(n3) });
      else if (t32.type === "text") for (let n3 of l22.textClips) n3.trackId === t32.id && e32.push({ ...n3, z: i3, visible: !X2(t32.id) && G2(n3) });
    }), e32;
  });
  function J2(e32) {
    let t32 = q2(e32), a3 = e32.z;
    if (e32.type === "text") {
      let l42 = Number.isFinite(Number(e32.x)) ? Number(e32.x) : 0.5, i3 = Number.isFinite(Number(e32.y)) ? Number(e32.y) : 0.5, n3 = Math.max(P, Number(e32.fontSize) || 48);
      return { left: "0", top: "0", right: "auto", bottom: "auto", width: "max-content", minWidth: "max-content", maxWidth: "none", height: "auto", whiteSpace: "pre", wordBreak: "keep-all", overflowWrap: "normal", writingMode: "horizontal-tb", transform: `translate(${l42 * V22.value}px, ${i3 * E2.value}px) translate(-50%, -50%) rotate(${t32}deg)`, transformOrigin: "center center", zIndex: a3, opacity: Number(e32.opacity) ?? 1, color: e32.color || "#fff", fontSize: `${n3}px`, lineHeight: 1.35, fontFamily: e32.fontFamily || "system-ui, -apple-system, sans-serif", fontWeight: e32.fontWeight || "500", fontStyle: e32.fontStyle || "normal", textDecoration: e32.underline ? "underline" : "none" };
    }
    let l32 = ai(e32, V22.value, E2.value);
    return { left: `${l32.left}px`, top: `${l32.top}px`, width: `${l32.boxW}px`, height: `${l32.boxH}px`, transform: `rotate(${t32}deg)`, transformOrigin: "center center", zIndex: a3, opacity: Number(e32.opacity) ?? 1 };
  }
  let Q2 = $o(() => {
    let e32 = x2.value;
    return e32 ? { left: `${e32.left}px`, top: `${e32.top}px`, width: `${e32.width}px`, height: `${e32.height}px`, transform: `rotate(${e32.rotate}deg)`, transformOrigin: "center center" } : {};
  });
  function ee2() {
    F22 || (F22 = requestAnimationFrame(() => {
      F22 = 0, (function() {
        if (l22.exporting) return void te2(null);
        let e32 = K2.value.find((e42) => e42.id === l22.selectedId && e42.visible);
        if (!e32 || H22(e32.trackId)) return void te2(null);
        let t32 = u2.value, a3 = r2.value;
        if (!t32 || !a3) return void te2(null);
        let i3 = t32.getBoundingClientRect(), n3 = a3.getBoundingClientRect(), o32 = i3.left - n3.left, s32 = i3.top - n3.top, d3 = j2.value || 1, c3 = q2(e32);
        if (e32.type === "text") {
          let t4 = y2.get(e32.id), a4 = t4?.offsetWidth || 0, l32 = t4?.offsetHeight || 0;
          return !a4 || !l32 ? void te2(null) : void te2({ left: o32 + (Number.isFinite(Number(e32.x)) ? Number(e32.x) : 0.5) * V22.value * d3 - a4 * d3 / 2, top: s32 + (Number.isFinite(Number(e32.y)) ? Number(e32.y) : 0.5) * E2.value * d3 - l32 * d3 / 2, width: a4 * d3, height: l32 * d3, rotate: c3, clipId: e32.id });
        }
        let v22 = ai(e32, V22.value, E2.value);
        te2({ left: o32 + v22.left * d3, top: s32 + v22.top * d3, width: v22.boxW * d3, height: v22.boxH * d3, rotate: c3, clipId: e32.id });
      })();
    }));
  }
  function te2(e32) {
    var t32, a3;
    (t32 = x2.value) === (a3 = e32) || t32 && a3 && t32.clipId === a3.clipId && t32.rotate === a3.rotate && Math.abs(t32.left - a3.left) < 0.05 && Math.abs(t32.top - a3.top) < 0.05 && Math.abs(t32.width - a3.width) < 0.05 && Math.abs(t32.height - a3.height) < 0.05 || (x2.value = e32);
  }
  function ae2(e32) {
    var t32;
    let a3 = (t32 = u2.value) == null ? void 0 : t32.getBoundingClientRect(), l32 = j2.value || 1;
    return a3 && l32 ? { x: (e32.clientX - a3.left) / l32, y: (e32.clientY - a3.top) / l32 } : { x: 0, y: 0 };
  }
  function le2(e32) {
    return K2.value.find((t32) => t32.id === e32) || null;
  }
  function ie2(e32) {
    e32 !== l22.selectedId && i2("select", e32 || "");
  }
  function ne2(e32) {
    var t32, a3;
    l22.exporting || (a3 = (t32 = e32.target) == null ? void 0 : t32.closest) != null && a3.call(t32, ".vc-layer, .vc-h, [data-handle]") || ie2("");
  }
  function oe2(e32) {
    if (l22.exporting || !e32.altKey && !e32.ctrlKey && !e32.metaKey) return;
    let t32 = K2.value.find((e42) => e42.id === l22.selectedId && e42.visible);
    if (!t32 || H22(t32.trackId)) return;
    e32.preventDefault();
    let a3 = e32.deltaY > 0 ? 1 / 1.05 : 1.05;
    if (t32.type === "text") {
      let e42 = Math.max(P, Number(t32.fontSize) || 48);
      return void i2("patch-clip", t32.id, { fontSize: Math.round(W22(e42 * a3, P, D)) });
    }
    let n3 = Number.isFinite(Number(t32.scale)) ? Number(t32.scale) : ti(t32, V22.value, E2.value);
    i2("patch-clip", t32.id, { scale: W22(n3 * a3, B, C) });
  }
  function se2(e32, t32, a3) {
    var i3, n3;
    if (l22.exporting || a3.button !== 0) return;
    let o32 = le2(e32);
    if (!o32 || (ie2(o32.id), H22(o32.trackId))) return;
    let s32 = ae2(a3), r3 = (Number.isFinite(Number(o32.x)) ? Number(o32.x) : 0.5) * V22.value, u3 = (Number.isFinite(Number(o32.y)) ? Number(o32.y) : 0.5) * E2.value;
    M2.value = { mode: t32 === "rotate" ? "rotate" : "scale", id: o32.id, type: o32.type, handle: t32, startX: Number.isFinite(Number(o32.x)) ? Number(o32.x) : 0.5, startY: Number.isFinite(Number(o32.y)) ? Number(o32.y) : 0.5, startScale: Number.isFinite(Number(o32.scale)) ? Number(o32.scale) : ti(o32, V22.value, E2.value), startRotate: q2(o32), startFont: Math.max(P, Number(o32.fontSize) || 48), startDist: Math.hypot(s32.x - r3, s32.y - u3) || 1, startAngle: Math.atan2(s32.y - u3, s32.x - r3), ptr: s32 }, (n3 = (i3 = a3.currentTarget) == null ? void 0 : i3.setPointerCapture) == null || n3.call(i3, a3.pointerId), window.addEventListener("pointermove", re2), window.addEventListener("pointerup", ue2, { once: !0 });
  }
  function re2(e32) {
    let t32 = M2.value;
    if (!t32 || !le2(t32.id)) return;
    let a3 = ae2(e32);
    if (t32.mode === "move") {
      let e42 = W22(t32.startX + (a3.x - t32.ptr.x) / V22.value, 0, 1), l42 = W22(t32.startY + (a3.y - t32.ptr.y) / E2.value, 0, 1);
      return void i2("patch-clip", t32.id, { x: e42, y: l42 });
    }
    let l32 = t32.startX * V22.value, n3 = t32.startY * E2.value;
    if (t32.mode === "rotate") {
      let o42 = Math.atan2(a3.y - n3, a3.x - l32), s42 = t32.startRotate + 180 * (o42 - t32.startAngle) / Math.PI;
      for (e32.shiftKey && (s42 = 15 * Math.round(s42 / 15)); s42 > 180; ) s42 -= 360;
      for (; s42 < -180; ) s42 += 360;
      return void i2("patch-clip", t32.id, { rotate: Math.round(10 * s42) / 10 });
    }
    let o32 = Math.hypot(a3.x - l32, a3.y - n3) / (t32.startDist || 1);
    if (t32.type === "text") return void i2("patch-clip", t32.id, { fontSize: Math.round(W22(t32.startFont * o32, P, D)) });
    let s32 = W22(t32.startScale * o32, B, C);
    e32.shiftKey && (s32 = Math.round(20 * s32) / 20), i2("patch-clip", t32.id, { scale: s32 });
  }
  function ue2() {
    window.removeEventListener("pointermove", re2), M2.value = null;
  }
  function de2(e32) {
    if (!l22.hasTimelineContent) return;
    let t32 = e32.currentTarget.getBoundingClientRect(), a3 = (e32.clientX - t32.left) / t32.width * 100;
    i2("seek-pct", Math.min(100, Math.max(0, a3)));
  }
  function ce2() {
    P2?.disconnect(), P2 = null;
    let e32 = r2.value;
    e32 && typeof ResizeObserver < "u" && (P2 = new ResizeObserver(() => Y2()), P2.observe(e32)), Y2();
  }
  fs(() => {
    ce2();
  }), hs(() => {
    P2?.disconnect(), P2 = null, F22 && cancelAnimationFrame(F22), F22 = 0, window.removeEventListener("pointermove", re2), window.removeEventListener("pointerup", ue2);
  }), Fr(u2, () => ce2()), Fr(r2, () => ce2()), Fr(() => l22.hasTimelineContent, () => {
    requestAnimationFrame(() => ce2());
  }), Fr([V22, E2], () => {
    requestAnimationFrame(() => Y2());
  }), Fr(B2, () => {
    requestAnimationFrame(() => {
      ce2(), Y2();
    });
  });
  let pe2 = $o(() => {
    let e32 = l22.selectedId;
    if (!e32 || l22.exporting) return "";
    let t32 = K2.value.find((t4) => t4.id === e32);
    return !t32?.visible || H22(t32.trackId) ? "" : [e32, t32.type, t32.x, t32.y, t32.scale, t32.rotate, t32.fontSize, t32.fontWeight, t32.fontStyle, t32.underline, t32.content, t32.width, t32.height, j2.value, V22.value, E2.value].join("\0");
  });
  return Fr(pe2, () => ee2()), (t32, d3) => {
    let v22 = VO;
    return Zr(), eo("div", { ref_key: "rootRef", ref: s22, class: W(["vc-preview-root flex-1 min-w-0 flex flex-col gap-2 min-h-0", { "is-fullscreen": Lt(B2) }]) }, [io("div", { class: "vc-preview-frame flex-1 min-h-0", onPointerdown: ne2 }, [e22.hasTimelineContent ? (Zr(), eo("div", { key: 1, ref_key: "shellRef", ref: r2, class: "vc-canvas-shell" }, [io("div", { ref_key: "fitRef", ref: u2, class: "vc-canvas-fit", style: V(_2.value) }, [io("div", { class: "vc-canvas", style: V(O2.value) }, [io("div", { class: W(["vc-stage", { "is-dragging": !!M2.value }]), onWheel: oe2 }, [(Zr(!0), eo(Hr, null, Es(K2.value, (e32) => {
      return Zr(), eo(Hr, { key: e32.id }, [e32.type === "video" || e32.visible ? (Zr(), eo("div", { key: 0, ref_for: !0, ref: (t5) => (function(e42, t6) {
        let a3 = t6 || null;
        a3 !== (y2.get(e42) || null) && (a3 ? y2.set(e42, a3) : y2.delete(e42), a3 && e42 === l22.selectedId && ee2());
      })(e32.id, t5), class: W(["vc-layer", [`is-${e32.type}`, { "is-hidden": !e32.visible }]]), style: V(J2(e32)), onPointerdown: sl((t5) => (function(e42, t6) {
        var a3, i3, n3, o32;
        if (l22.exporting || t6.button !== 0 || (i3 = (a3 = t6.target) == null ? void 0 : a3.closest) != null && i3.call(a3, "[data-handle]") || (ie2(e42.id), !e42.visible || H22(e42.trackId))) return;
        let s32 = ae2(t6);
        M2.value = { mode: "move", id: e42.id, type: e42.type, startX: Number.isFinite(Number(e42.x)) ? Number(e42.x) : 0.5, startY: Number.isFinite(Number(e42.y)) ? Number(e42.y) : 0.5, ptr: s32 }, (o32 = (n3 = t6.currentTarget) == null ? void 0 : n3.setPointerCapture) == null || o32.call(n3, t6.pointerId), window.addEventListener("pointermove", re2), window.addEventListener("pointerup", ue2, { once: !0 });
      })(e32, t5), ["stop"]) }, [e32.type === "video" ? (Zr(), eo("video", { key: 0, ref_for: !0, ref: (t5) => (function(e42, t6) {
        let a3 = t6 || null;
        m22.get(e42) !== a3 && (a3 ? m22.set(e42, a3) : m22.delete(e42), i2("bind-video-clip", e42, a3));
      })(e32.id, t5), class: W(["vc-layer-media", { "opacity-0": !e32.visible }]), src: e32.objectUrl, style: V((t4 = e32, { filter: d[t4?.filter] || "none", transform: `scale(${t4?.flipH ? -1 : 1}, ${t4?.flipV ? -1 : 1})` })), playsinline: "", preload: "metadata", onLoadedmetadata: d3[0] || (d3[0] = (e42) => i2("loaded-meta")) }, null, 46, kn)) : e32.type === "image" ? (Zr(), eo("img", { key: 1, src: e32.objectUrl, class: "vc-layer-media", draggable: "false" }, null, 8, Mn)) : e32.type === "text" ? (Zr(), eo("div", Cn, Z(e32.content), 1)) : po("", !0)], 46, wn)) : po("", !0)], 64);
      var t4;
    }), 128))], 34)], 4), io("div", Sn, Z(V22.value) + " × " + Z(E2.value), 1)], 4), x2.value ? (Zr(), eo("div", { key: 0, class: W(["vc-xform", { "is-dragging": !!M2.value }]) }, [io("div", { class: "vc-xform-box", style: V(Q2.value) }, [io("button", { type: "button", class: "vc-h vc-h-rot", title: "旋转", "data-handle": "rotate", onPointerdown: d3[1] || (d3[1] = sl((e32) => se2(x2.value.clipId, "rotate", e32), ["stop"])) }, null, 32), (Zr(), eo(Hr, null, Es(a2, (e32) => io("i", { key: e32, class: W(["vc-h", `vc-h-${e32}`]), "data-handle": e32, onPointerdown: sl((t4) => se2(x2.value.clipId, e32, t4), ["stop"]) }, null, 42, Tn)), 64))], 4)], 2)) : po("", !0)], 512)) : (Zr(), eo("div", xn, [lo(Lt(l2), { class: "size-8 opacity-40 mb-2" }), d3[5] || (d3[5] = io("div", { class: "text-[13px] font-medium", style: { color: "var(--d-label)" } }, " 暂无预览 ", -1)), d3[6] || (d3[6] = io("div", { class: "text-[11px] mt-1 text-center px-4", style: { color: "var(--d-label-2)" } }, " 将左侧素材拖入下方轨道后开始预览 ", -1))]))], 32), io("div", Un, [io("button", { type: "button", class: "size-8 rounded-full grid place-items-center text-white shrink-0", style: { background: "var(--primary-color)" }, disabled: !e22.hasTimelineContent || e22.exporting, onClick: d3[2] || (d3[2] = (e32) => i2("toggle-play")) }, [e22.playing ? (Zr(), to(Lt(e3), { key: 0, class: "size-4" })) : (Zr(), to(Lt(l2), { key: 1, class: "size-4" }))], 8, In), io("div", zn, [io("div", { class: W(["vc-progress", { "opacity-40 pointer-events-none": !e22.hasTimelineContent }]), onClick: de2 }, [io("div", { class: "vc-progress-fill", style: V({ width: `${e22.progressPct}%` }) }, null, 4)], 2), io("div", Rn, Z(e22.hasTimelineContent ? e22.clockText : "00:00.000 / 00:00.000"), 1)]), io("span", Pn, Z(e22.speedLabel), 1), lo(v22, { visible: n2.value, "onUpdate:visible": d3[3] || (d3[3] = (e32) => n2.value = e32), trigger: "click", placement: "top-end", width: 268, "hide-after": 0, teleported: !Lt(B2), "popper-class": "vc-ratio-popper", disabled: e22.exporting }, { reference: mn(() => [io("button", { type: "button", class: "vc-ratio-btn", title: "画面比例", disabled: e22.exporting }, [io("span", Fn, Z(o22.value), 1)], 8, Nn)]), default: mn(() => [io("div", Bn, [(Zr(!0), eo(Hr, null, Es(Lt(u), (t4, a3) => (Zr(), eo(Hr, { key: a3 }, [t4 === "divider" ? (Zr(), eo("div", An)) : (Zr(), eo("button", { key: 1, type: "button", class: W(["vc-ratio-item", { active: e22.previewRatio === t4.value }]), disabled: e22.exporting, onClick: (e32) => {
      return a4 = t4.value, void (l22.exporting || (i2("update:previewRatio", a4), n2.value = !1));
      var a4;
    } }, [e22.previewRatio === t4.value ? (Zr(), to(Lt(e), { key: 0, class: "vc-ratio-check size-3" })) : (Zr(), eo("span", $n)), io("span", Dn, Z(t4.label), 1), t4.icon ? (Zr(), eo("span", { key: 2, class: W(["preview-ratio-icon", t4.icon]) }, null, 2)) : po("", !0)], 10, Vn))], 64))), 128))])]), _: 1 }, 8, ["visible", "teleported", "disabled"]), io("button", { type: "button", class: "vc-fullscreen-btn", title: Lt(B2) ? "退出全屏" : "全屏预览", disabled: e22.exporting, onClick: d3[4] || (d3[4] = (...e32) => Lt(A2) && Lt(A2)(...e32)) }, [Lt(B2) ? (Zr(), to(Lt(i), { key: 0, class: "size-4" })) : (Zr(), to(Lt(xt), { key: 1, class: "size-4" }))], 8, Ln)]), (Zr(!0), eo(Hr, null, Es(e22.audioClips, (e32) => (Zr(), eo("audio", { key: e32.id, ref_for: !0, ref: (t4) => (function(e42, t5) {
      let a3 = t5 || null;
      c22.get(e42) !== a3 && (a3 ? c22.set(e42, a3) : c22.delete(e42), i2("bind-bgm-clip", e42, a3));
    })(e32.id, t4), class: "hidden", preload: "auto", src: e32.objectUrl }, null, 8, En))), 128))], 2);
  };
} }, [["__scopeId", "data-v-9cc5ccb3"]]), _n = { class: "shrink-0 glass-panel rounded-xl flex min-h-0 overflow-hidden" }, On = { class: "vc-tool-rail" }, Wn = ["title", "disabled", "onClick"], Hn = ["disabled"], qn = { class: "vc-tool-pane flex-1 min-w-0 flex flex-col overflow-hidden" }, Yn = { class: "vc-tool-pane-head" }, Xn = { class: "vc-tool-pane-body custom-scroll" }, Gn = { class: "vc-ratio-grid mb-2.5" }, Kn = { key: 0, class: "vc-ratio-divider" }, Jn = ["disabled", "onClick"], Zn = { key: 1, class: "vc-ratio-check" }, Qn = { class: "flex-1 text-left truncate" }, eo2 = { key: 0, class: "grid grid-cols-2 gap-2 mb-2.5" }, to2 = { class: "flex items-center gap-2" }, ao = ["value", "disabled"], lo2 = { class: "text-[12px] tabular-nums", style: { color: "var(--d-label-2)" } }, io2 = { class: "vc-field-label" }, no = { class: "flex gap-1.5 mb-2" }, oo = ["disabled"], so = ["disabled"], ro = { class: "flex flex-wrap gap-1.5 mb-2" }, uo3 = ["disabled", "onClick"], co2 = { class: "vc-field-label" }, vo2 = { class: "grid grid-cols-2 gap-1.5" }, po2 = ["disabled", "onClick"], mo = ["disabled"], fo2 = { key: 1, class: "text-[12px]", style: { color: "var(--d-label-2)" } }, ho2 = { class: "vc-field-label" }, bo = { class: "flex flex-wrap gap-1.5 mt-2" }, go = ["disabled", "onClick"], yo = { class: "flex items-center gap-2 mt-3 text-[12px]", style: { color: "var(--d-label)" } }, xo = { key: 1, class: "text-[12px]", style: { color: "var(--d-label-2)" } }, wo = { class: "text-[12px] truncate mb-2", style: { color: "var(--d-label-2)" } }, ko = { class: "vc-field-label" }, Mo = { class: "flex flex-wrap gap-1.5 mt-2" }, Co = ["disabled", "onClick"], So = { class: "flex items-center gap-2 mt-2 text-[12px]", style: { color: "var(--d-label)" } }, To = { class: "flex items-center gap-2 mt-2 text-[12px]", style: { color: "var(--d-label)" } }, Uo = { class: "vc-field-label mt-2" }, Io = { class: "vc-field-label" }, zo = ["disabled"], Ro = { key: 1, class: "text-[12px]", style: { color: "var(--d-label-2)" } }, Po = { class: "vc-field-label" }, No = { class: "vc-field-label" }, Fo = { class: "vc-field-label" }, Bo = { class: "flex items-center gap-2" }, Ao = { class: "vc-pos-grid ml-auto" }, Vo = ["disabled", "title", "onClick"], $o2 = { key: 1, class: "text-[12px]", style: { color: "var(--d-label-2)" } }, Do = { key: 0, class: "text-[12px] mt-1 leading-4", style: { color: "var(--d-label-2)" } }, Lo = { class: "vc-style-group" }, Eo = ["disabled"], jo = ["disabled"], _o = ["disabled"], Oo = { class: "vc-field-label mt-2" }, Wo = { class: "vc-field-label mt-2" }, Ho = ["value", "disabled"], qo = { class: "vc-field-label mt-2" }, Yo = { class: "flex items-center gap-2" }, Xo = { class: "vc-pos-grid ml-auto" }, Go = ["disabled", "title", "onClick"], Ko = { key: 1, class: "text-[12px]", style: { color: "var(--d-label-2)" } }, Jo = /* @__PURE__ */ o({ __name: "ToolSettings", props: { activeTool: { type: String, default: "ratio" }, disabled: { type: Boolean, default: !1 }, previewRatio: { type: String, default: "adapt" }, customWidth: { type: Number, default: 1920 }, customHeight: { type: Number, default: 1080 }, canvasBg: { type: String, default: "#000000" }, selectedClip: { type: Object, default: null }, trackRowStates: { type: Object, default: () => ({}) }, designWidth: { type: Number, default: 1920 }, designHeight: { type: Number, default: 1080 } }, emits: ["update:activeTool", "update:previewRatio", "update:customWidth", "update:customHeight", "update:canvasBg", "reset-frame", "reset-sound", "reupload", "patch-clip", "set-track-muted"], setup(e22, { emit: t22 }) {
  let a2 = typeof window < "u" && typeof window.queryLocalFonts == "function";
  function l22() {
    return v2.map((e32) => ({ label: e32.label, value: e32.value, zh: !!e32.zh }));
  }
  let i2 = Et(l22()), n2 = Et(!1), o22 = Et(a2 ? "" : "当前环境不支持读取本地字体，已使用内置列表"), s22 = !1, r2 = e22, u2 = t22, d2 = { ratio: Kt, frame: ea, speed: l2, sound: e2, photo: t3, text: s3 }, c22 = $o(() => {
    var e32;
    let t32 = ((e32 = r2.selectedClip) == null ? void 0 : e32.type) || "none", a3 = g(t32), l32 = new Map(m.map((e42) => [e42.id, e42]));
    return a3.map((e42) => l32.get(e42)).filter(Boolean);
  }), m22 = { ratio: "画面", frame: "变换", speed: "速度", sound: "声音", photo: "图片", text: "文字", audio: "声音" }, S2 = $o(() => {
    var e32;
    return r2.activeTool === "speed" && ((e32 = r2.selectedClip) == null ? void 0 : e32.type) === "video" ? `播放速度 ${(Number(r2.selectedClip.speed) || 1).toFixed(2)}x` : m22[r2.activeTool] || "";
  }), P2 = $o(() => {
    var e32;
    return ((e32 = r2.selectedClip) == null ? void 0 : e32.type) === "video" ? r2.selectedClip : null;
  }), F22 = $o(() => {
    var e32;
    let t32 = Number((e32 = P2.value) == null ? void 0 : e32.scale);
    return Math.round(100 * (Number.isFinite(t32) ? t32 : 1));
  }), B2 = $o(() => {
    var e32;
    return Math.round(Number((e32 = P2.value) == null ? void 0 : e32.rotate) || 0);
  });
  function A2(e32) {
    var t32;
    let a3 = ((Number((t32 = P2.value) == null ? void 0 : t32.rotate) || 0) % 360 + 360) % 360;
    return Math.abs(a3 - e32) < 0.5;
  }
  let V22 = $o(() => {
    let e32 = r2.selectedClip, t32 = Math.max(1, Number(r2.designWidth) || 1920), a3 = Math.max(1, Number(r2.designHeight) || 1080);
    if (!e32) return { w: 0, h: 0, cw: t32, ch: a3 };
    if (e32.type === "image") {
      let l32 = ai(e32, t32, a3);
      return { w: l32.boxW, h: l32.boxH, cw: t32, ch: a3 };
    }
    if (e32.type === "text") {
      let l32 = (function(e42) {
        let t4 = String(e42?.content || "文字").slice(0, 200), a4 = Math.max(12, Number(e42?.fontSize) || 48), l42 = e42?.fontWeight || "500", i3 = `${e42?.fontStyle === "italic" ? "italic " : ""}${l42} ${a4}px ${e42?.fontFamily || 'system-ui, -apple-system, "PingFang SC", "Microsoft YaHei", sans-serif'}`, n3 = document.createElement("canvas").getContext("2d");
        if (!n3) {
          let e52 = t4.split(`
`);
          return { w: Math.max(1, 0.6 * a4 * Math.max(...e52.map((e6) => e6.length), 1)), h: Math.max(1, 1.35 * a4 * e52.length) };
        }
        n3.font = i3;
        let o32 = t4.split(`
`), s32 = 1.35 * a4, r3 = 0;
        for (let u3 of o32) r3 = Math.max(r3, n3.measureText(u3 || " ").width);
        return { w: Math.max(1, r3), h: Math.max(1, s32 * o32.length) };
      })(e32);
      return { w: l32.w, h: l32.h, cw: t32, ch: a3 };
    }
    return { w: 0, h: 0, cw: t32, ch: a3 };
  }), $2 = $o(() => {
    let e32 = r2.selectedClip;
    if (!e32 || e32.type !== "text" && e32.type !== "image") return -1;
    let { w: t32, h: a3, cw: l32, ch: i3 } = V22.value;
    return S(e32.x, e32.y, t32, a3, l32, i3);
  }), D2 = ["左上（贴边）", "上中（贴顶居中）", "右上（贴边）", "左中（贴左居中）", "正中", "右中（贴右居中）", "左下（贴边）", "下中（贴底居中）", "右下（贴边）"];
  function L2(e32) {
    return D2[e32] || `位置 ${e32 + 1}`;
  }
  function j2(e32) {
    let t32 = r2.selectedClip;
    if (!t32 || t32.type !== "text" && t32.type !== "image") return;
    let { w: a3, h: l32, cw: i3, ch: n3 } = V22.value, o32 = y(e32, a3, l32, i3, n3);
    J2({ x: o32.x, y: o32.y });
  }
  let _2 = $o(() => {
    let e32 = r2.selectedClip;
    return e32?.type === "video" || e32?.type === "audio" ? e32 : null;
  }), O2 = $o(() => {
    var e32, t32;
    let a3 = _2.value;
    return !!a3 && !(!((t32 = (e32 = r2.trackRowStates) == null ? void 0 : e32[a3.trackId]) != null && t32.muted) && !a3.muted);
  }), W22 = $o(() => {
    var e32;
    return Number((e32 = r2.selectedClip) == null ? void 0 : e32.fontWeight) >= 600;
  }), Y2 = $o(() => {
    var e32;
    return ((e32 = r2.selectedClip) == null ? void 0 : e32.fontStyle) === "italic";
  }), X2 = $o(() => {
    var e32;
    return !!((e32 = r2.selectedClip) != null && e32.underline);
  });
  function J2(e32) {
    r2.selectedClip && u2("patch-clip", r2.selectedClip.id, e32);
  }
  function Z22(e32) {
    let t32 = String(e32 || "").trim();
    return t32 ? /[,\s]/.test(t32) && !/^["']/.test(t32) ? `"${t32.replace(/"/g, "")}"` : t32 : "";
  }
  function Q2(e32) {
    return /[\u3040-\u30ff\u3400-\u9fff\uf900-\ufaff]/.test(String(e32 || ""));
  }
  function le2(e32) {
    if (!e32.length) return null;
    let t32 = e32.filter((e42) => Q2(e42.fullName)), a3 = t32.length ? t32 : e32;
    return a3.find((e42) => {
      return t4 = e42.style, /^(regular|normal|book|roman|常规|标准)?$/i.test(String(t4 || "").trim());
      var t4;
    }) || a3[0];
  }
  function ie2(e32) {
    i2.value = l22(), o22.value = e32, s22 = !0;
  }
  async function ne2(e32) {
    if (e32 && !s22 && !n2.value) if (a2) {
      n2.value = !0;
      try {
        if ((await navigator.permissions.query({ name: "local-fonts" })).state === "denied") throw Error("NotAllowedError");
        let e42 = (function(e52) {
          let t4 = /* @__PURE__ */ new Map();
          for (let l42 of e52 || []) {
            let e6 = String(l42?.family || "").trim();
            if (!e6) continue;
            let a4 = String(l42?.fullName || e6).trim() || e6, i3 = t4.get(e6) || [];
            i3.push({ family: e6, fullName: a4, style: l42?.style || "", postscriptName: l42?.postscriptName || "" }), t4.set(e6, i3);
          }
          let a3 = [];
          for (let l42 of t4.values()) {
            let e6 = le2(l42);
            e6 && a3.push({ label: e6.fullName, value: Z22(e6.family), family: e6.family, zh: Q2(e6.fullName) || Q2(e6.family) });
          }
          return a3.sort((e6, t5) => e6.zh !== t5.zh ? e6.zh ? -1 : 1 : e6.label.localeCompare(t5.label, "zh-Hans")), a3;
        })(await (t32 = window.queryLocalFonts(), l32 = w, new Promise((e52, a3) => {
          let i3 = setTimeout(() => {
            a3(Object.assign(new Error("Timeout"), { name: "TimeoutError" }));
          }, l32);
          Promise.resolve(t32).then((t4) => {
            clearTimeout(i3), e52(t4);
          }, (e6) => {
            clearTimeout(i3), a3(e6);
          });
        })));
        if (!e42.length) return void ie2("未获取到本地字体，已使用内置列表");
        i2.value = e42, o22.value = "", s22 = !0;
      } catch (r3) {
        let e42 = r3?.name || "";
        ie2(e42 === "TimeoutError" ? "读取本地字体超时，已使用内置列表" : e42 === "NotAllowedError" || e42 === "SecurityError" ? "未授权访问本地字体，已使用内置列表" : "无法读取本地字体，已使用内置列表");
      } finally {
        n2.value = !1;
      }
      var t32, l32;
    } else ie2("当前环境不支持读取本地字体，已使用内置列表");
  }
  return (t32, a3) => {
    var l32, s32;
    let r3 = Rw, v22 = Vk, p2 = tC, m3 = ph, V3 = ju, D3 = dv, Z3 = uv;
    return Zr(), eo("aside", _n, [io("div", On, [(Zr(!0), eo(Hr, null, Es(c22.value, (a4) => (Zr(), eo("button", { key: a4.id, type: "button", class: W(["vc-tool-icon", { active: e22.activeTool === a4.id }]), title: a4.label, disabled: e22.disabled, onClick: (e32) => t32.$emit("update:activeTool", a4.id) }, [(Zr(), to(ws(d2[a4.icon]), { class: "size-[16px]" }))], 10, Wn))), 128)), io("button", { type: "button", class: "vc-tool-icon mt-auto", title: "重新上传", disabled: e22.disabled, onClick: a3[0] || (a3[0] = (e32) => t32.$emit("reupload")) }, [lo(Lt(kt), { class: "size-[16px]" })], 8, Hn)]), io("div", qn, [io("div", Yn, Z(S2.value), 1), io("div", Xn, [yn(io("div", null, [a3[36] || (a3[36] = io("div", { class: "text-[12px] mb-1.5", style: { color: "var(--d-label-2)" } }, " 画面比例 ", -1)), io("div", Gn, [(Zr(!0), eo(Hr, null, Es(Lt(u), (a4, l42) => (Zr(), eo(Hr, { key: l42 }, [a4 === "divider" ? (Zr(), eo("div", Kn)) : (Zr(), eo("button", { key: 1, type: "button", class: W(["vc-ratio-item", { active: e22.previewRatio === a4.value }]), disabled: e22.disabled, onClick: (e32) => t32.$emit("update:previewRatio", a4.value) }, [e22.previewRatio === a4.value ? (Zr(), to(Lt(e), { key: 0, class: "vc-ratio-check size-3" })) : (Zr(), eo("span", Zn)), io("span", Qn, Z(a4.label), 1), a4.icon ? (Zr(), eo("span", { key: 2, class: W(["preview-ratio-icon", a4.icon]) }, null, 2)) : po("", !0)], 10, Jn))], 64))), 128))]), e22.previewRatio === "custom" ? (Zr(), eo("div", eo2, [io("div", null, [a3[34] || (a3[34] = io("div", { class: "vc-field-label" }, "宽度", -1)), lo(r3, { class: "w-full!", "model-value": e22.customWidth, min: 16, max: 4096, size: "small", "controls-position": "right", "onUpdate:modelValue": a3[1] || (a3[1] = (e32) => t32.$emit("update:customWidth", e32)) }, null, 8, ["model-value"])]), io("div", null, [a3[35] || (a3[35] = io("div", { class: "vc-field-label" }, "高度", -1)), lo(r3, { class: "w-full!", "model-value": e22.customHeight, min: 16, max: 4096, size: "small", "controls-position": "right", "onUpdate:modelValue": a3[2] || (a3[2] = (e32) => t32.$emit("update:customHeight", e32)) }, null, 8, ["model-value"])])])) : po("", !0), a3[37] || (a3[37] = io("div", { class: "vc-field-label mt-1" }, "背景填充", -1)), io("div", to2, [io("input", { type: "color", value: e22.canvasBg, disabled: e22.disabled, class: "size-7 rounded cursor-pointer border-0 bg-transparent", onInput: a3[3] || (a3[3] = (e32) => t32.$emit("update:canvasBg", e32.target.value)) }, null, 40, ao), io("span", lo2, Z(e22.canvasBg), 1)])], 512), [[di, e22.activeTool === "ratio"]]), yn(io("div", null, [P2.value ? (Zr(), eo(Hr, { key: 0 }, [io("div", io2, "缩放 " + Z(F22.value) + "%", 1), lo(v22, { "model-value": F22.value, min: Math.round(100 * Lt(B)), max: Math.round(100 * Lt(C)), disabled: e22.disabled, "onUpdate:modelValue": a3[4] || (a3[4] = (e32) => J2({ scale: e32 / 100 })) }, null, 8, ["model-value", "min", "max", "disabled"]), a3[38] || (a3[38] = io("div", { class: "vc-field-label mt-2" }, "镜像", -1)), io("div", no, [io("button", { type: "button", class: W(["vc-chip flex-1", { active: !!P2.value.flipH }]), disabled: e22.disabled, onClick: a3[5] || (a3[5] = (e32) => J2({ flipH: !P2.value.flipH })) }, " 水平 ", 10, oo), io("button", { type: "button", class: W(["vc-chip flex-1", { active: !!P2.value.flipV }]), disabled: e22.disabled, onClick: a3[6] || (a3[6] = (e32) => J2({ flipV: !P2.value.flipV })) }, " 垂直 ", 10, so)]), a3[39] || (a3[39] = io("div", { class: "vc-field-label" }, "旋转", -1)), io("div", ro, [(Zr(), eo(Hr, null, Es([0, 90, 180, 270], (t4) => io("button", { key: t4, type: "button", class: W(["vc-chip flex-1", { active: A2(t4) }]), disabled: e22.disabled, onClick: (e32) => J2({ rotate: t4 === 270 ? -90 : t4 }) }, Z(t4) + "° ", 11, uo3)), 64))]), io("div", co2, "精细角度 " + Z(B2.value) + "°", 1), lo(v22, { "model-value": B2.value, min: -180, max: 180, disabled: e22.disabled, "onUpdate:modelValue": a3[7] || (a3[7] = (e32) => J2({ rotate: e32 })) }, null, 8, ["model-value", "disabled"]), a3[40] || (a3[40] = io("div", { class: "vc-field-label mt-1" }, "滤镜", -1)), io("div", vo2, [(Zr(!0), eo(Hr, null, Es(Lt(f), (t4) => (Zr(), eo("button", { key: t4, type: "button", class: W(["vc-chip", { active: (P2.value.filter || "原片") === t4 }]), disabled: e22.disabled, onClick: (e32) => J2({ filter: t4 }) }, Z(t4), 11, po2))), 128))]), io("button", { type: "button", class: "w-full h-8 rounded-lg text-[12px] vc-chip mt-2", disabled: e22.disabled, onClick: a3[8] || (a3[8] = (e32) => t32.$emit("reset-frame")) }, " 重置画面 ", 8, mo)], 64)) : (Zr(), eo("div", fo2, " 选中视频片段后调整画面 "))], 512), [[di, e22.activeTool === "frame"]]), yn(io("div", null, [P2.value ? (Zr(), eo(Hr, { key: 0 }, [io("div", ho2, " 播放速度 " + Z(Number(P2.value.speed || 1).toFixed(2)) + "x ", 1), lo(v22, { "model-value": Math.round(100 * (P2.value.speed || 1)), min: Math.round(100 * Lt(H2)), max: Math.round(100 * Lt(j)), disabled: e22.disabled, "onUpdate:modelValue": a3[9] || (a3[9] = (e32) => J2({ speed: e32 / 100 })) }, null, 8, ["model-value", "min", "max", "disabled"]), io("div", bo, [(Zr(), eo(Hr, null, Es([0.5, 1, 1.5, 2], (t4) => io("button", { key: t4, type: "button", class: W(["vc-chip flex-1", { active: Math.abs((P2.value.speed || 1) - t4) < 1e-3 }]), disabled: e22.disabled, onClick: (e32) => J2({ speed: t4 }) }, Z(t4) + "x ", 11, go)), 64))]), io("label", yo, [lo(p2, { "model-value": P2.value.keepPitch !== !1, size: "small", disabled: e22.disabled, "onUpdate:modelValue": a3[10] || (a3[10] = (e32) => J2({ keepPitch: e32 })) }, null, 8, ["model-value", "disabled"]), a3[41] || (a3[41] = uo(" 保持音调 "))])], 64)) : (Zr(), eo("div", xo, " 选中视频片段后调整速度 "))], 512), [[di, e22.activeTool === "speed"]]), yn(io("div", null, [_2.value ? (Zr(), eo(Hr, { key: 0 }, [io("div", wo, Z(_2.value.name || (_2.value.type === "video" ? "视频" : "音频")), 1), _2.value.type === "audio" ? (Zr(), eo(Hr, { key: 0 }, [io("div", ko, " 速度 " + Z(Number(_2.value.speed || 1).toFixed(2)) + "x ", 1), lo(v22, { "model-value": Math.round(100 * (_2.value.speed || 1)), min: Math.round(100 * Lt(H2)), max: Math.round(100 * Lt(j)), disabled: e22.disabled, "onUpdate:modelValue": a3[11] || (a3[11] = (e32) => J2({ speed: e32 / 100 })) }, null, 8, ["model-value", "min", "max", "disabled"]), io("div", Mo, [(Zr(), eo(Hr, null, Es([0.5, 1, 1.5, 2], (t4) => io("button", { key: "spd-" + t4, type: "button", class: W(["vc-chip flex-1", { active: Math.abs((_2.value.speed || 1) - t4) < 1e-3 }]), disabled: e22.disabled, onClick: (e32) => J2({ speed: t4 }) }, Z(t4) + "x ", 11, Co)), 64))]), io("label", So, [lo(p2, { "model-value": _2.value.keepPitch !== !1, size: "small", disabled: e22.disabled, "onUpdate:modelValue": a3[12] || (a3[12] = (e32) => J2({ keepPitch: e32 })) }, null, 8, ["model-value", "disabled"]), a3[42] || (a3[42] = uo(" 保持音调 "))])], 64)) : po("", !0), io("div", { class: W(["vc-field-label", { "mt-2": _2.value.type === "audio" }]) }, " 音量 " + Z(_2.value.volume ?? 100) + "% ", 3), lo(v22, { "model-value": _2.value.volume ?? 100, min: 0, max: 200, disabled: e22.disabled || O2.value, "onUpdate:modelValue": a3[13] || (a3[13] = (e32) => J2({ volume: e32 })) }, null, 8, ["model-value", "disabled"]), io("label", To, [lo(m3, { "model-value": O2.value, disabled: e22.disabled, "onUpdate:modelValue": a3[14] || (a3[14] = (e32) => (function(e42) {
      let t4 = _2.value;
      t4 && u2("set-track-muted", t4.trackId, !!e42);
    })(e32)) }, null, 8, ["model-value", "disabled"]), a3[43] || (a3[43] = uo(" 静音 "))]), io("div", Uo, " 淡入 " + Z(Number(_2.value.fadeIn || 0).toFixed(1)) + "s ", 1), lo(v22, { "model-value": _2.value.fadeIn || 0, min: 0, max: 10, step: 0.1, disabled: e22.disabled, "onUpdate:modelValue": a3[15] || (a3[15] = (e32) => J2({ fadeIn: e32 })) }, null, 8, ["model-value", "disabled"]), io("div", Io, " 淡出 " + Z(Number(_2.value.fadeOut || 0).toFixed(1)) + "s ", 1), lo(v22, { "model-value": _2.value.fadeOut || 0, min: 0, max: 10, step: 0.1, disabled: e22.disabled, "onUpdate:modelValue": a3[16] || (a3[16] = (e32) => J2({ fadeOut: e32 })) }, null, 8, ["model-value", "disabled"]), io("button", { type: "button", class: "w-full h-8 rounded-lg text-[12px] vc-chip mt-2", disabled: e22.disabled, onClick: a3[17] || (a3[17] = (e32) => t32.$emit("reset-sound")) }, " 重置声音 ", 8, zo)], 64)) : (Zr(), eo("div", Ro, " 选中视频或音轨片段后调整声音 "))], 512), [[di, e22.activeTool === "sound" || e22.activeTool === "audio"]]), yn(io("div", null, [((l32 = e22.selectedClip) == null ? void 0 : l32.type) === "image" ? (Zr(), eo(Hr, { key: 0 }, [io("div", Po, " 透明度 " + Z(Math.round(100 * (e22.selectedClip.opacity || 1))) + "% ", 1), lo(v22, { "model-value": Math.round(100 * (e22.selectedClip.opacity || 1)), min: 0, max: 100, disabled: e22.disabled, "onUpdate:modelValue": a3[18] || (a3[18] = (e32) => J2({ opacity: e32 / 100 })) }, null, 8, ["model-value", "disabled"]), io("div", No, " 画布占比 " + Z(Math.round(100 * (e22.selectedClip.scale || 0.4))) + "% ", 1), lo(v22, { "model-value": Math.round(100 * (e22.selectedClip.scale || 0.4)), min: 5, max: 200, disabled: e22.disabled, "onUpdate:modelValue": a3[19] || (a3[19] = (e32) => J2({ scale: e32 / 100 })) }, null, 8, ["model-value", "disabled"]), io("div", Fo, " 旋转 " + Z(Math.round(e22.selectedClip.rotate || 0)) + "° ", 1), lo(v22, { "model-value": Math.round(e22.selectedClip.rotate || 0), min: -180, max: 180, disabled: e22.disabled, "onUpdate:modelValue": a3[20] || (a3[20] = (e32) => J2({ rotate: e32 })) }, null, 8, ["model-value", "disabled"]), a3[44] || (a3[44] = io("div", { class: "vc-field-label" }, "位置", -1)), io("div", Bo, [lo(r3, { size: "small", "model-value": Math.round(100 * (e22.selectedClip.x || 0)), min: 0, max: 100, disabled: e22.disabled, "controls-position": "right", class: "!w-[72px]", "onUpdate:modelValue": a3[21] || (a3[21] = (e32) => J2({ x: (e32 || 0) / 100 })) }, null, 8, ["model-value", "disabled"]), lo(r3, { size: "small", "model-value": Math.round(100 * (e22.selectedClip.y || 0)), min: 0, max: 100, disabled: e22.disabled, "controls-position": "right", class: "!w-[72px]", "onUpdate:modelValue": a3[22] || (a3[22] = (e32) => J2({ y: (e32 || 0) / 100 })) }, null, 8, ["model-value", "disabled"]), io("div", Ao, [(Zr(!0), eo(Hr, null, Es(Lt(b2), (t4, a4) => (Zr(), eo("button", { key: "img-pos-" + a4, type: "button", class: W(["vc-pos-cell", { active: $2.value === a4 }]), disabled: e22.disabled, title: L2(a4), onClick: (e32) => j2(a4) }, null, 10, Vo))), 128))])])], 64)) : (Zr(), eo("div", $o2, " 从左侧素材添加图片 "))], 512), [[di, e22.activeTool === "photo"]]), yn(io("div", null, [((s32 = e22.selectedClip) == null ? void 0 : s32.type) === "text" ? (Zr(), eo(Hr, { key: 0 }, [a3[45] || (a3[45] = io("div", { class: "vc-field-label" }, "文本内容", -1)), lo(V3, { type: "textarea", rows: 2, "model-value": e22.selectedClip.content, size: "small", disabled: e22.disabled, "onUpdate:modelValue": a3[23] || (a3[23] = (e32) => J2({ content: e32 })) }, null, 8, ["model-value", "disabled"]), a3[46] || (a3[46] = io("div", { class: "vc-field-label mt-2" }, "字体", -1)), lo(Z3, { size: "small", class: "w-full", clearable: "", filterable: "", placeholder: "默认字体", "model-value": e22.selectedClip.fontFamily || "", disabled: e22.disabled, loading: n2.value, onVisibleChange: ne2, "onUpdate:modelValue": a3[24] || (a3[24] = (e32) => J2({ fontFamily: e32 || "" })) }, { default: mn(() => [(Zr(!0), eo(Hr, null, Es(i2.value, (e32) => (Zr(), to(D3, { key: e32.value, label: e32.label, value: e32.value }, { default: mn(() => [io("span", { style: V({ fontFamily: e32.value }) }, Z(e32.label), 5)]), _: 2 }, 1032, ["label", "value"]))), 128))]), _: 1 }, 8, ["model-value", "disabled", "loading"]), o22.value ? (Zr(), eo("div", Do, Z(o22.value), 1)) : po("", !0), a3[47] || (a3[47] = io("div", { class: "vc-field-label mt-2" }, "样式", -1)), io("div", Lo, [io("button", { type: "button", class: W(["vc-chip vc-style-chip grid place-items-center", { active: W22.value }]), title: "加粗", disabled: e22.disabled, onClick: a3[25] || (a3[25] = (e32) => J2({ fontWeight: W22.value ? "500" : "700" })) }, [lo(Lt(l3), { class: "size-4" })], 10, Eo), io("button", { type: "button", class: W(["vc-chip vc-style-chip grid place-items-center", { active: Y2.value }]), title: "斜体", disabled: e22.disabled, onClick: a3[26] || (a3[26] = (e32) => J2({ fontStyle: Y2.value ? "normal" : "italic" })) }, [lo(Lt(t2), { class: "size-4" })], 10, jo), io("button", { type: "button", class: W(["vc-chip vc-style-chip grid place-items-center", { active: X2.value }]), title: "下划线", disabled: e22.disabled, onClick: a3[27] || (a3[27] = (e32) => J2({ underline: !X2.value })) }, [lo(Lt(h2), { class: "size-4" })], 10, _o)]), io("div", Oo, " 字号 " + Z(e22.selectedClip.fontSize || 48), 1), lo(v22, { "model-value": e22.selectedClip.fontSize || 48, min: Lt(P), max: Lt(D), disabled: e22.disabled, "onUpdate:modelValue": a3[28] || (a3[28] = (e32) => J2({ fontSize: e32 })) }, null, 8, ["model-value", "min", "max", "disabled"]), io("div", Wo, " 透明度 " + Z(Math.round(100 * (e22.selectedClip.opacity ?? 1))) + "% ", 1), lo(v22, { "model-value": Math.round(100 * (e22.selectedClip.opacity ?? 1)), min: 0, max: 100, disabled: e22.disabled, "onUpdate:modelValue": a3[29] || (a3[29] = (e32) => J2({ opacity: e32 / 100 })) }, null, 8, ["model-value", "disabled"]), a3[48] || (a3[48] = io("div", { class: "vc-field-label" }, "颜色", -1)), io("input", { type: "color", value: e22.selectedClip.color || "#ffffff", disabled: e22.disabled, class: "size-7 rounded border-0 cursor-pointer", onInput: a3[30] || (a3[30] = (e32) => J2({ color: e32.target.value })) }, null, 40, Ho), io("div", qo, " 旋转 " + Z(Math.round(e22.selectedClip.rotate || 0)) + "° ", 1), lo(v22, { "model-value": Math.round(e22.selectedClip.rotate || 0), min: -180, max: 180, disabled: e22.disabled, "onUpdate:modelValue": a3[31] || (a3[31] = (e32) => J2({ rotate: e32 })) }, null, 8, ["model-value", "disabled"]), a3[49] || (a3[49] = io("div", { class: "vc-field-label mt-2" }, "位置", -1)), io("div", Yo, [lo(r3, { size: "small", "model-value": Math.round(100 * (e22.selectedClip.x || 0)), min: 0, max: 100, disabled: e22.disabled, "controls-position": "right", class: "!w-[72px]", "onUpdate:modelValue": a3[32] || (a3[32] = (e32) => J2({ x: (e32 || 0) / 100 })) }, null, 8, ["model-value", "disabled"]), lo(r3, { size: "small", "model-value": Math.round(100 * (e22.selectedClip.y || 0)), min: 0, max: 100, disabled: e22.disabled, "controls-position": "right", class: "!w-[72px]", "onUpdate:modelValue": a3[33] || (a3[33] = (e32) => J2({ y: (e32 || 0) / 100 })) }, null, 8, ["model-value", "disabled"]), io("div", Xo, [(Zr(!0), eo(Hr, null, Es(Lt(b2), (t4, a4) => (Zr(), eo("button", { key: "txt-pos-" + a4, type: "button", class: W(["vc-pos-cell", { active: $2.value === a4 }]), disabled: e22.disabled, title: L2(a4), onClick: (e32) => j2(a4) }, null, 10, Go))), 128))])])], 64)) : (Zr(), eo("div", Ko, " 从左侧拖入默认文本到轨道后编辑 "))], 512), [[di, e22.activeTool === "text"]])])])]);
  };
} }, [["__scopeId", "data-v-ab8300fa"]]), Zo = { class: "flex items-center justify-between mb-1.5 px-0.5 shrink-0" }, Qo = { class: "flex items-center gap-0.5", style: { color: "var(--d-label-2)" } }, es2 = ["disabled"], ts = ["disabled"], as = ["disabled"], ls = ["disabled"], is = ["disabled"], ns2 = ["disabled"], os = ["disabled"], ss2 = { class: "text-[11px]", style: { color: "var(--d-label-2)" } }, rs = { class: "tabular-nums", style: { color: "var(--primary-color)" } }, us = { class: "vc-ruler-bar" }, ds = { class: "vc-ruler-clip" }, cs = { class: "vc-tracks-body" }, vs = { class: "vc-labels-col" }, ps = ["onPointerdown"], ms = ["title"], fs2 = ["disabled", "onClick"], hs2 = { key: 1, type: "button", class: "vc-track-ctl is-na", title: "静音（不可用）", disabled: "", tabindex: "-1" }, bs = ["disabled", "onClick"], gs = ["disabled", "onClick"], ys = ["data-row-id", "data-row-index", "onDragover", "onDragleave", "onDrop"], xs = ["onPointerdown"], ws2 = { key: 0, class: "vc-filmstrip" }, ks = ["src"], Ms = { key: 0, class: "flex-1 grid place-items-center text-[10px] opacity-80" }, Cs = ["src"], Ss = { class: "truncate" }, Ts = { class: "vc-wave" }, Us = { viewBox: "0 0 320 36", preserveAspectRatio: "none", "aria-hidden": "true" }, Is = ["d"], zs = ["d"], Rs = { class: "vc-wave-name truncate" }, Ps = ["onPointerdown"], Ns = ["onPointerdown"], Fs = { class: "vc-h-row" }, Bs = /* @__PURE__ */ o({ __name: "TimelinePanel", props: { timelineDuration: { type: Number, default: 0 }, currentTime: { type: Number, default: 0 }, pxPerSec: { type: Number, default: 0 }, minPxPerSec: { type: Number, default: 0 }, maxPxPerSec: { type: Number, default: 0 }, projectFps: { type: Number, default: M }, trackRows: { type: Array, default: () => [] }, trackRowStates: { type: Object, default: () => ({}) }, videoClips: { type: Array, default: () => [] }, imageClips: { type: Array, default: () => [] }, textClips: { type: Array, default: () => [] }, audioClips: { type: Array, default: () => [] }, selectedId: { type: String, default: "" }, disabled: { type: Boolean, default: !1 }, canUndo: { type: Boolean, default: !1 }, canRedo: { type: Boolean, default: !1 }, canSplit: { type: Boolean, default: !1 }, canClear: { type: Boolean, default: !1 } }, emits: ["seek-time", "select", "move-clip", "resize-clip", "remove-clip", "split-clip", "clear-tracks", "place-asset", "undo", "redo", "toggle-track", "reorder-track", "viewport", "zoom"], setup(e22, { emit: t22 }) {
  let a2 = e22, l22 = t22, i2 = Et(), n2 = Et(), o22 = Et(), s22 = Et(), r2 = Et(), u2 = Et(0), d2 = Et(!1), c22 = Et(""), m22 = Et(""), y2 = Et(!1), x2 = Et(-1), P2 = Et({}), N2 = Et(null), F22 = 0, B2 = null, A2 = 0, V22 = null, _2 = $o(() => _(a2.timelineDuration, !0)), O2 = $o(() => Math.max(4, Number(a2.pxPerSec) || 40)), W22 = Et(0), H22 = $o(() => ({ width: `${Math.max(120, W22.value || 0)}px`, transform: `translate3d(${u2.value}px, 0, 0)` })), q2 = $o(() => {
    let e32 = Math.max(1e-3, Number(a2.minPxPerSec) || O2.value || 1);
    return { min: e32, max: Math.max(1.001 * e32, Number(a2.maxPxPerSec) || e32) };
  }), Y2 = $o(() => {
    let { min: e32, max: t32 } = q2.value, a3 = Math.min(t32, Math.max(e32, O2.value)), l32 = Math.log(a3 / e32) / Math.log(t32 / e32);
    return Math.round(1e3 * Math.max(0, Math.min(1, l32))) / 10;
  });
  function X2(e32) {
    if (a2.disabled || !a2.timelineDuration) return;
    let { min: t32, max: l32 } = q2.value, i3 = Math.max(0, Math.min(100, Number(e32) || 0)) / 100, n3 = t32 * Math.pow(l32 / t32, i3), o32 = O2.value;
    !o32 || Math.abs(n3 - o32) < 0.01 || Me22(n3 / o32);
  }
  let K2 = $o(() => {
    let e32 = Math.max(0.05, a2.timelineDuration || 0.05);
    return Math.max(120, e32 * O2.value);
  }), J2 = $o(() => K2.value + $), Z22 = $o(() => ({ width: `${J2.value}px`, minWidth: "100%", transform: `translate3d(${-u2.value}px, 0, 0)` })), Q2 = $o(() => ({ left: a2.currentTime * O2.value + "px" })), ee2 = $o(() => ({ left: 76 + a2.currentTime * O2.value - u2.value + "px" })), te2 = $o(() => bi(a2.timelineDuration, K2.value, a2.projectFps));
  function ae2(e32) {
    return Math.max(0, Number(e32) || 0) * O2.value;
  }
  function le2(e32) {
    return a2.trackRowStates[e32] || { muted: !1, hidden: !1, locked: !1 };
  }
  function ie2(e32) {
    return !!E[e32.type];
  }
  function ne2(e32) {
    return e32.type === "video" || e32.type === "audio";
  }
  function oe2(e32) {
    return { video: Mt2, image: t3, text: s3, audio: s5 }[e32.type];
  }
  function ue2(e32) {
    return { video: "视频", image: "图片", text: "文字", audio: "音频" }[e32.type];
  }
  function de2(e32) {
    return ((e32.type === "video" ? a2.videoClips : e32.type === "image" ? a2.imageClips : e32.type === "text" ? a2.textClips : a2.audioClips) || []).filter((t32) => t32.trackId === e32.id).slice().sort((e42, t32) => e42.start - t32.start);
  }
  function ve2(e32) {
    let t32 = N2.value, a3 = t32?.clipId === e32.id ? t32.origStart : e32.start, l32 = t32?.clipId === e32.id ? t32.origEnd : e32.end, i3 = a3, n3 = l32;
    if (t32?.clipId === e32.id) {
      let e42 = (Number(t32.dxPx) || 0) / O2.value;
      t32.type === "clip" ? (i3 = Math.max(0, a3 + e42), n3 = i3 + (l32 - a3)) : t32.type === "clip-resize" && (t32.which === "start" ? i3 = Math.max(0, Math.min(a3 + e42, l32 - x)) : n3 = Math.max(a3 + x, l32 + e42));
    }
    return { left: `${ae2(i3)}px`, width: `${Math.max(8, ae2(n3 - i3))}px`, transform: t32?.clipId === e32.id && t32.type === "clip" ? `translateY(${Number(t32.dyPx) || 0}px)` : void 0, zIndex: t32?.clipId === e32.id && t32.type === "clip" ? 20 : void 0 };
  }
  function pe2(e32) {
    let t32 = N2.value;
    return !!t32 && t32.clipId === e32 && (t32.type === "clip" || t32.type === "clip-resize");
  }
  function me2(e32) {
    return (P2.value[e32.id] || []).filter(Boolean);
  }
  function fe2(e32) {
    if (!e32) return [];
    let t32 = Array.isArray(e32.waveHeights) ? e32.waveHeights : [];
    if (!t32.length) return [];
    let a3 = Math.max(0.05, Number(e32.sourceDuration) || e32.end - e32.start || 1), l32 = Math.max(0, Math.min(a3, Number(e32.sourceStart) || 0)), i3 = Math.max(0.05, (e32.end || 0) - (e32.start || 0)), n3 = Math.min(a3, l32 + i3 * Ti(e32)), o32 = t32.length, s32 = Math.floor(l32 / a3 * o32), r3 = Math.ceil(n3 / a3 * o32);
    return s32 = Math.max(0, Math.min(o32 - 1, s32)), r3 = Math.max(s32 + 1, Math.min(o32, r3)), t32.slice(s32, r3);
  }
  function he2(e32) {
    let t32 = Array.isArray(e32) && e32.length ? e32 : [];
    if (!t32.length) return Array.from({ length: 64 }, (e42, t4) => 10 + 10 * Math.abs(Math.sin(t4 / 4)));
    let a3 = t32.map((e42) => Math.max(2, Math.min(100, Number(e42) || 0))), l32 = Math.max(a3.length, 120);
    if (a3.length >= l32) return a3;
    let i3 = [];
    for (let n3 = 0; n3 < l32; n3++) {
      let e42 = n3 / (l32 - 1) * (a3.length - 1), t4 = Math.floor(e42), o32 = Math.min(a3.length - 1, t4 + 1), s32 = e42 - t4;
      i3.push(a3[t4] * (1 - s32) + a3[o32] * s32);
    }
    return i3;
  }
  function be2(e32) {
    let t32 = he2(e32), a3 = t32.length, l32 = [], i3 = [];
    for (let n3 = 0; n3 < a3; n3++) {
      let e42 = n3 / Math.max(1, a3 - 1) * 320, o32 = t32[n3] / 100 * 16.8;
      l32.push(`${e42.toFixed(2)},${(18 - o32).toFixed(2)}`), i3.push(`${e42.toFixed(2)},${(18 + o32).toFixed(2)}`);
    }
    return `M ${l32.join(" L ")} M ${i3.join(" L ")}`;
  }
  function ge2(e32) {
    let t32 = he2(e32), a3 = t32.length, l32 = [], i3 = [];
    for (let n3 = 0; n3 < a3; n3++) {
      let e42 = n3 / Math.max(1, a3 - 1) * 320, o32 = t32[n3] / 100 * 16.8;
      l32.push(`${e42.toFixed(2)},${(18 - o32).toFixed(2)}`), i3.push(`${e42.toFixed(2)},${(18 + o32).toFixed(2)}`);
    }
    return `M ${l32.join(" L ")} L ${i3.reverse().join(" L ")} Z`;
  }
  function ye2(e32) {
    let t32 = r2.value;
    if (!t32) return 0;
    let a3 = e32 - t32.getBoundingClientRect().left;
    return Math.max(0, a3 / O2.value);
  }
  function xe2() {
    let e32 = o22.value;
    e32 && (W22.value = e32.clientWidth || 0, l22("viewport", e32.clientWidth || 640));
  }
  function ke2() {
    V22?.disconnect(), V22 = null;
    let e32 = i2.value, t32 = o22.value;
    e32 && (e32.removeEventListener("wheel", Te2), e32.addEventListener("wheel", Te2, { passive: !1 })), t32 && typeof ResizeObserver < "u" && (V22 = new ResizeObserver(() => xe2()), V22.observe(t32)), xe2(), Oe2();
  }
  function Me22(e32, t32) {
    let a3 = o22.value, i3 = s22.value, n3 = O2.value, r3 = a3 && Number.isFinite(t32) ? t32 - a3.getBoundingClientRect().left : (a3?.clientWidth || 0) / 2, d3 = (u2.value + r3) / n3;
    l22("zoom", e32, d3), on(() => {
      let e42 = O2.value;
      i3 && e42 && (i3.scrollLeft = Math.max(0, d3 * e42 - r3));
    });
  }
  function Ce2(e32) {
    Me22(e32);
  }
  function Te2(e32) {
    if (a2.disabled || !a2.timelineDuration) return;
    if (e32.ctrlKey || e32.metaKey)
      return e32.preventDefault(), void Me22(e32.deltaY < 0 ? 1.12 : 1 / 1.12, e32.clientX);
    let t32 = s22.value;
    if (!t32) return;
    let l32 = e32.shiftKey ? e32.deltaY : e32.deltaX;
    if (e32.shiftKey || Math.abs(e32.deltaX) >= Math.abs(e32.deltaY)) {
      if (Math.abs(l32) < 0.5) return;
      e32.preventDefault(), t32.scrollLeft += l32;
    }
  }
  function Ue2(e32) {
    u2.value = e32.target.scrollLeft || 0, Oe2();
  }
  function Ie2() {
    window.addEventListener("pointermove", De2, { capture: !0, passive: !1 }), window.addEventListener("pointerup", Le2, { capture: !0 }), window.addEventListener("pointercancel", Le2, { capture: !0 });
  }
  function Ne2() {
    window.removeEventListener("pointermove", De2, { capture: !0 }), window.removeEventListener("pointerup", Le2, { capture: !0 }), window.removeEventListener("pointercancel", Le2, { capture: !0 });
  }
  function Fe2(e32) {
    !a2.disabled && a2.timelineDuration && (e32.pointerType === "mouse" && e32.button !== 0 || Ae2(e32));
  }
  function Be2(e32) {
    !a2.disabled && a2.timelineDuration && Ae2(e32);
  }
  function Ae2(e32) {
    var t32;
    (t32 = e32.preventDefault) == null || t32.call(e32), y2.value = !0, N2.value = { type: "scrub", pointerId: e32.pointerId }, l22("seek-time", ye2(e32.clientX)), Ie2();
  }
  function Ve2(e32, t32, i3, n3) {
    !a2.disabled && e32 && (le2(t32.id).locked || n3.pointerType === "mouse" && n3.button !== 0 || (n3.preventDefault(), l22("select", e32.id), N2.value = { type: "clip-resize", clipId: e32.id, rowId: t32.id, which: i3, pointerId: n3.pointerId, startX: n3.clientX, dxPx: 0, origStart: e32.start, origEnd: e32.end }, Ie2()));
  }
  function $e2(e32) {
    var t32, a3;
    let l32 = (a3 = (t32 = r2.value) == null ? void 0 : t32.closest(".vc-tracks-body")) == null ? void 0 : a3.querySelectorAll(".vc-labels-col .vc-label-slot:not(.vc-ruler-slot):not(.vc-add-row-label)");
    if (!l32?.length) return -1;
    let i3 = 0, n3 = 1 / 0;
    return l32.forEach((t4, a4) => {
      let l42 = t4.getBoundingClientRect(), o32 = (l42.top + l42.bottom) / 2, s32 = Math.abs(e32 - o32);
      s32 < n3 && (n3 = s32, i3 = a4);
    }), i3;
  }
  function De2(e32) {
    let t32 = N2.value;
    if (!t32 || t32.pointerId != null && e32.pointerId !== t32.pointerId) return;
    if (e32.cancelable && t32.type !== "scrub" && e32.preventDefault(), t32.type === "scrub") return void l22("seek-time", ye2(e32.clientX));
    if (t32.type === "reorder") return void (x2.value = $e2(e32.clientY));
    let a3 = e32.clientX - t32.startX, i3 = e32.clientY - (t32.startY || e32.clientY);
    if (!(!t32.moved && Math.abs(a3) < 3 && Math.abs(i3) < 3)) {
      if (t32.type === "clip") {
        let l32 = (function(e42, t4) {
          var a4;
          let l42 = document.elementFromPoint(e42, t4);
          return ((a4 = l42?.closest) == null ? void 0 : a4.call(l42, ".vc-lane[data-row-id]"))?.getAttribute("data-row-id") || "";
        })(e32.clientX, e32.clientY);
        return m22.value = l32, void (N2.value = { ...t32, dxPx: a3, dyPx: i3, moved: !0, lastTarget: l32, lastY: e32.clientY });
      }
      t32.type === "clip-resize" && (N2.value = { ...t32, dxPx: a3, dyPx: i3, moved: !0 });
    }
  }
  function Le2(e32) {
    let t32 = N2.value;
    if (t32 && (!e32 || t32.pointerId == null || e32.pointerId === t32.pointerId)) {
      if (Ne2(), t32.type === "clip" && t32.moved) {
        let e42 = Math.max(0, t32.origStart + t32.dxPx / O2.value), i3 = (function(e52) {
          let t4 = e52.clipType, l32 = a2.trackRows || [], i4 = e52.lastTarget;
          if (!i4) {
            let t5 = $e2(e52.lastY || 0);
            i4 = t5 >= 0 && t5 < l32.length ? l32[t5].id : "__new__";
          }
          if (i4 === "__new__") return { id: "__new__" };
          let n3 = l32.find((e6) => e6.id === i4), o32 = l32.findIndex((e6) => e6.id === i4);
          return n3?.type !== t4 || le2(n3.id).locked ? { id: "__new__", insertIndex: o32 >= 0 ? o32 : void 0 } : { id: n3.id };
        })(t32);
        l22("move-clip", t32.clipId, e42, i3.id, i3.insertIndex);
      } else if (t32.type === "clip-resize") {
        let e42 = t32.dxPx / O2.value, a3 = t32.origStart, i3 = t32.origEnd;
        t32.which === "start" ? a3 = Math.max(0, Math.min(t32.origStart + e42, i3 - x)) : i3 = Math.max(a3 + x, t32.origEnd + e42), l22("resize-clip", t32.clipId, a3, i3, t32.which);
      } else t32.type === "reorder" && x2.value >= 0 && l22("reorder-track", t32.from, x2.value);
      N2.value = null, y2.value = !1, m22.value = "", x2.value = -1;
    }
  }
  function Ee2(e32) {
    a2.disabled || (d2.value = !0, e32.dataTransfer.dropEffect = "copy");
  }
  function je2(e32, t32) {
    if (e32.stopPropagation(), d2.value = !1, c22.value = "", a2.disabled) return;
    let i3 = Date.now();
    if (i3 - F22 < 80) return;
    F22 = i3;
    let n3 = (function(e42) {
      let t4 = e42.getData("application/x-mediabox-asset");
      if (t4) try {
        return JSON.parse(t4);
      } catch {
      }
      let a3 = e42.getData("text/plain") || "";
      if (a3.startsWith("mediabox-asset:")) try {
        return JSON.parse(a3.slice(15));
      } catch {
        return null;
      }
      if (a3.trim().startsWith("{")) try {
        return JSON.parse(a3);
      } catch {
        return null;
      }
      return null;
    })(e32.dataTransfer);
    n3?.id && l22("place-asset", n3.id, ye2(e32.clientX), t32 || null);
  }
  function Oe2() {
    A2 && clearTimeout(A2), A2 = setTimeout(() => {
      A2 = 0, (async function() {
        let e32 = o22.value;
        if (!e32 || !a2.videoClips.length) return;
        let t32 = u2.value / O2.value, l32 = (u2.value + e32.clientWidth) / O2.value;
        B2 && (B2.aborted = !0), B2 = { aborted: !1 };
        let i3 = B2;
        for (let n3 of a2.videoClips) {
          if (i3.aborted) return;
          if (n3.end < t32 || n3.start > l32) continue;
          let e42 = Math.max(x, (n3.end || 0) - (n3.start || 0)), o32 = e42 * O2.value, s32 = Math.max(1, Math.min(80, Math.round(o32 / N))), r3 = Number(n3.sourceStart) || 0, u3 = r3 + e42 * Ti(n3);
          if (n3.objectUrl) try {
            let e52 = await hi(n3.objectUrl, r3, u3, s32, { signal: i3, fps: n3.fps || a2.projectFps });
            if (i3.aborted) return;
            e52?.some(Boolean) && (P2.value = { ...P2.value, [n3.id]: e52 });
          } catch {
          }
        }
      })();
    }, 80);
  }
  return fs(() => {
    ke2();
  }), Fr([i2, o22], () => ke2()), Fr(J2, (e32) => {
    let t32 = s22.value;
    if (!t32) return;
    let a3 = Math.max(0, e32 - t32.clientWidth);
    t32.scrollLeft > a3 && (t32.scrollLeft = a3);
  }), Fr(() => [a2.videoClips, a2.pxPerSec, a2.timelineDuration], () => Oe2(), { deep: !0 }), Fr(() => a2.trackRows.length, () => {
    requestAnimationFrame(() => xe2());
  }), hs(() => {
    var e32;
    Ne2(), window.removeEventListener("mousemove", De2), window.removeEventListener("mouseup", Le2), (e32 = i2.value) == null || e32.removeEventListener("wheel", Te2), V22?.disconnect(), A2 && clearTimeout(A2), B2 && (B2.aborted = !0);
  }), (t32, u3) => {
    let v22 = Vk;
    return Zr(), eo("div", { class: W(["vc-timeline rounded-xl p-2 shrink-0 flex flex-col min-h-0", { "is-interacting": !!N2.value }]) }, [io("div", Zo, [io("div", Qo, [io("button", { type: "button", class: "vc-tl-icon-btn", title: "撤回", disabled: e22.disabled || !e22.canUndo, onClick: u3[0] || (u3[0] = (e32) => t32.$emit("undo")) }, [lo(Lt(Xt), { class: "size-3.5" })], 8, es2), io("button", { type: "button", class: "vc-tl-icon-btn", title: "重做", disabled: e22.disabled || !e22.canRedo, onClick: u3[1] || (u3[1] = (e32) => t32.$emit("redo")) }, [lo(Lt(Gt), { class: "size-3.5" })], 8, ts), io("button", { type: "button", class: "vc-tl-icon-btn", title: "在播放头处分割选中片段", disabled: e22.disabled || !e22.canSplit, onClick: u3[2] || (u3[2] = (e32) => t32.$emit("split-clip")) }, [lo(Lt(oa), { class: "size-3.5" })], 8, as), io("button", { type: "button", class: "vc-tl-icon-btn", title: "删除选中资源", disabled: e22.disabled || !e22.selectedId, onClick: u3[3] || (u3[3] = (e32) => t32.$emit("remove-clip")) }, [lo(Lt(s2), { class: "size-3.5" })], 8, ls), io("button", { type: "button", class: "vc-tl-icon-btn", title: "清除全部轨道", disabled: e22.disabled || !e22.canClear, onClick: u3[4] || (u3[4] = (e32) => t32.$emit("clear-tracks")) }, [lo(Lt(e4), { class: "size-3.5" })], 8, is), u3[13] || (u3[13] = io("span", { class: "vc-zoom-sep" }, null, -1)), io("button", { type: "button", class: "vc-tl-icon-btn", title: "缩小", disabled: e22.disabled || !e22.timelineDuration, onClick: u3[5] || (u3[5] = (e32) => Ce2(0.8)) }, [lo(Lt(s), { class: "size-3.5" })], 8, ns2), lo(v22, { class: "vc-zoom-slider", "model-value": Y2.value, min: 0, max: 100, step: 0.5, "show-tooltip": !1, disabled: e22.disabled || !e22.timelineDuration, onPointerdown: u3[6] || (u3[6] = sl(() => {
    }, ["stop"])), "onUpdate:modelValue": X2 }, null, 8, ["model-value", "disabled"]), io("button", { type: "button", class: "vc-tl-icon-btn", title: "放大", disabled: e22.disabled || !e22.timelineDuration, onClick: u3[7] || (u3[7] = (e32) => Ce2(1.25)) }, [lo(Lt(h), { class: "size-3.5" })], 8, os)]), io("div", ss2, [e22.timelineDuration ? (Zr(), eo(Hr, { key: 0 }, [io("span", rs, Z(_2.value), 1), u3[14] || (u3[14] = io("span", { class: "ml-1" }, "Ctrl + 滚轮缩放", -1))], 64)) : (Zr(), eo(Hr, { key: 1 }, [uo("将左侧素材拖入此处")], 64))])]), e22.trackRows.length ? (Zr(), eo("div", { key: 1, ref_key: "tracksOuterRef", ref: i2, class: "vc-tracks-outer flex-1 min-h-0" }, [io("div", us, [u3[16] || (u3[16] = io("div", { class: "vc-ruler-slot" }, null, -1)), io("div", ds, [io("div", { class: "vc-ruler-inner", style: V(Z22.value) }, [io("div", { class: "vc-lane vc-ruler-lane", onPointerdown: Fe2 }, [(Zr(!0), eo(Hr, null, Es(te2.value, (e32, t4) => (Zr(), eo("span", { key: t4, class: W(["vc-ruler-tick", { "is-start": e32.align === "start" }]), style: V({ left: ae2(e32.t) + "px" }) }, Z(e32.label), 7))), 128))], 32)], 4)]), io("div", { class: W(["vc-playhead vc-playhead-ruler", { dragging: y2.value }]), style: V(ee2.value), onPointerdown: sl(Be2, ["stop", "prevent"]) }, u3[15] || (u3[15] = [io("span", { class: "vc-playhead-cap" }, null, -1)]), 38)]), io("div", { ref_key: "vScrollRef", ref: n2, class: "vc-tracks-mid custom-scroll" }, [io("div", cs, [io("div", vs, [(Zr(!0), eo(Hr, null, Es(e22.trackRows, (l32, i3) => (Zr(), eo("div", { key: "lbl-" + l32.id, class: W(["vc-label-slot", { "vc-label-tall": ne2(l32), "is-reorder-target": x2.value === i3 }]), onPointerdown: (e32) => {
      return t4 = i3, l42 = e32, void (a2.disabled || l42.pointerType === "mouse" && l42.button !== 0 || ((o32 = (n3 = l42.target) == null ? void 0 : n3.closest) == null ? void 0 : o32.call(n3, "button")) || (l42.preventDefault(), N2.value = { type: "reorder", from: t4, pointerId: l42.pointerId }, x2.value = t4, Ie2()));
      var t4, l42, n3, o32;
    } }, [io("div", { class: "vc-track-header", title: ue2(l32) + "（拖动排序）" }, [(Zr(), to(ws(oe2(l32)), { class: "type" })), ie2(l32) ? (Zr(), eo("button", { key: 0, type: "button", class: W(["vc-track-ctl", { on: le2(l32.id).muted }]), title: "静音", disabled: e22.disabled, onClick: sl((e32) => t32.$emit("toggle-track", l32.id, "muted"), ["stop"]) }, [le2(l32.id).muted ? (Zr(), to(Lt(v), { key: 0, class: "size-3" })) : (Zr(), to(Lt(e2), { key: 1, class: "size-3" }))], 10, fs2)) : (Zr(), eo("button", hs2, [lo(Lt(e2), { class: "size-3" })])), io("button", { type: "button", class: W(["vc-track-ctl", { on: le2(l32.id).hidden }]), title: "隐藏", disabled: e22.disabled, onClick: sl((e32) => t32.$emit("toggle-track", l32.id, "hidden"), ["stop"]) }, [le2(l32.id).hidden ? (Zr(), to(Lt(Zt), { key: 0, class: "size-3" })) : (Zr(), to(Lt(e5), { key: 1, class: "size-3" }))], 10, bs), io("button", { type: "button", class: W(["vc-track-ctl", { on: le2(l32.id).locked }]), title: "锁定", disabled: e22.disabled, onClick: sl((e32) => t32.$emit("toggle-track", l32.id, "locked"), ["stop"]) }, [lo(Lt(v3), { class: "size-3" })], 10, gs)], 8, ms)], 42, ps))), 128)), u3[17] || (u3[17] = io("div", { class: "vc-label-slot vc-add-row-label" }, "+", -1))]), io("div", { ref_key: "lanesClipRef", ref: o22, class: "vc-lanes-clip" }, [io("div", { ref_key: "innerRef", ref: r2, class: "vc-lanes-inner", style: V(Z22.value) }, [io("div", { class: W(["vc-playhead", { dragging: y2.value }]), style: V(Q2.value), onPointerdown: sl(Be2, ["stop", "prevent"]) }, null, 38), (Zr(!0), eo(Hr, null, Es(e22.trackRows, (t4, i3) => (Zr(), eo("div", { key: "lane-" + t4.id, class: W(["vc-lane", { "vc-lane-tall": ne2(t4), "is-track-hidden": le2(t4.id).hidden, "is-drop-target": c22.value === t4.id, "is-clip-over": m22.value === t4.id }]), "data-row-id": t4.id, "data-row-index": i3, onPointerdown: Fe2, onDragover: sl((e32) => (function(e42, t5) {
      a2.disabled || (d2.value = !0, c22.value = e42.id, t5.dataTransfer.dropEffect = "copy");
    })(t4, e32), ["prevent"]), onDragleave: (e32) => (function(e42) {
      c22.value === e42.id && (c22.value = "");
    })(t4), onDrop: sl((e32) => je2(e32, t4.id), ["prevent"]) }, [(Zr(!0), eo(Hr, null, Es(de2(t4), (i4) => (Zr(), eo("div", { key: i4.id, class: W(["vc-clip", [t4.type, { selected: e22.selectedId === i4.id, locked: le2(t4.id).locked, "has-wave": t4.type === "audio", filmstrip: t4.type === "video", "is-dragging": pe2(i4.id) }]]), style: V(ve2(i4)), onPointerdown: sl((e32) => (function(e42, t5, i5) {
      !a2.disabled && e42 && (l22("select", e42.id), le2(t5.id).locked || i5.pointerType === "mouse" && i5.button !== 0 || (i5.preventDefault(), N2.value = { type: "clip", clipId: e42.id, rowId: t5.id, clipType: t5.type, pointerId: i5.pointerId, startX: i5.clientX, startY: i5.clientY, dxPx: 0, dyPx: 0, origStart: e42.start, origEnd: e42.end, moved: !1, lastTarget: t5.id, lastY: i5.clientY }, Ie2()));
    })(i4, t4, e32), ["stop"]), onDragstart: u3[10] || (u3[10] = sl(() => {
    }, ["prevent"])) }, [t4.type === "video" ? (Zr(), eo("div", ws2, [(Zr(!0), eo(Hr, null, Es(me2(i4), (e32, t5) => (Zr(), eo("img", { key: t5, src: e32, alt: "", draggable: "false" }, null, 8, ks))), 128)), me2(i4).length ? po("", !0) : (Zr(), eo("div", Ms, Z(i4.name || "视频"), 1))])) : t4.type === "image" ? (Zr(), eo(Hr, { key: 1 }, [i4.objectUrl ? (Zr(), eo("img", { key: 0, src: i4.objectUrl, class: "vc-clip-thumb", alt: "", draggable: "false" }, null, 8, Cs)) : po("", !0), io("span", Ss, Z(i4.name), 1)], 64)) : t4.type === "text" ? (Zr(), eo(Hr, { key: 2 }, [uo(Z(i4.content), 1)], 64)) : t4.type === "audio" ? (Zr(), eo(Hr, { key: 3 }, [io("div", Ts, [(Zr(), eo("svg", Us, [u3[18] || (u3[18] = io("line", { class: "vc-wave-mid", x1: "0", y1: "18", x2: "320", y2: "18" }, null, -1)), io("path", { class: "vc-wave-fill", d: ge2(fe2(i4)) }, null, 8, Is), io("path", { class: "vc-wave-stroke", d: be2(fe2(i4)) }, null, 8, zs)]))]), io("span", Rs, Z(i4.name), 1)], 64)) : po("", !0), le2(t4.id).locked ? po("", !0) : (Zr(), eo("div", { key: 4, class: "vc-trim-handle left", onPointerdown: sl((e32) => Ve2(i4, t4, "start", e32), ["stop", "prevent"]) }, null, 40, Ps)), le2(t4.id).locked ? po("", !0) : (Zr(), eo("div", { key: 5, class: "vc-trim-handle right", onPointerdown: sl((e32) => Ve2(i4, t4, "end", e32), ["stop", "prevent"]) }, null, 40, Ns))], 46, xs))), 128))], 42, ys))), 128)), io("div", { class: W(["vc-lane vc-add-row-lane drop-hint", { "drop-active": d2.value && !c22.value, "is-clip-over": m22.value === "__new__" }]), "data-row-id": "__new__", onDragover: sl(Ee2, ["prevent"]), onDragleave: u3[11] || (u3[11] = (e32) => d2.value = !1), onDrop: u3[12] || (u3[12] = sl((e32) => je2(e32, null), ["prevent"])) }, [io("span", { class: "vc-add-row-hint", style: V(H22.value) }, " 拖入素材添加新轨道 ", 4)], 34)], 4)], 512)])], 512), io("div", Fs, [u3[19] || (u3[19] = io("div", { class: "vc-h-gutter" }, null, -1)), io("div", { ref_key: "hScrollRef", ref: s22, class: "vc-h-scroll", onScroll: Ue2 }, [io("div", { class: "vc-h-spacer", style: V({ width: J2.value + "px" }) }, null, 4)], 544)])], 512)) : (Zr(), eo("div", { key: 0, class: W(["flex-1 min-h-[72px] rounded-lg border border-dashed grid place-items-center text-[12px] drop-hint", { "drop-active": d2.value }]), onDragover: sl(Ee2, ["prevent"]), onDragleave: u3[8] || (u3[8] = (e32) => d2.value = !1), onDrop: u3[9] || (u3[9] = sl((e32) => je2(e32, null), ["prevent"])) }, " 拖入视频 / 图片 / 文字 / 音频 ", 34))], 2);
  };
} }, [["__scopeId", "data-v-7b7780c9"]]), As = { class: "font-bold text-[13px] mb-2.5", style: { color: "var(--d-label)" } }, Vs = { class: "flex gap-2" }, $s = { class: "mb-3" }, Ds = { class: "flex items-center justify-between text-[12px] mb-1.5" }, Ls = { class: "font-medium d-label-2", '"': "" }, Es2 = { class: "vc-export-bar" }, js = { class: "text-[11px] mt-1.5 tabular-nums d-label-2" }, _s = { class: "flex items-center gap-2" }, Os2 = { type: "button", class: "vc-export-btn flex-1 flex items-center justify-center gap-2", disabled: "" }, Ws = { class: "flex flex-wrap gap-1.5 mb-3" }, Hs = ["onClick"], qs = { class: "flex flex-col gap-2.5" }, Ys = { class: "setting-row" }, Xs = { class: "setting-row" }, Gs = { class: "setting-row" }, Ks = { key: 0, class: "text-[11px] -mt-1 pl-[72px]", style: { color: "var(--d-label-2)" } }, Js = { class: "setting-row" }, Zs = /* @__PURE__ */ o({ __name: "ExportDialog", props: { form: { type: Object, required: !0 }, exporting: Boolean, pendingReady: Boolean, exportProgress: { type: Number, default: 0 }, exportLabel: { type: String, default: "开始导出" }, outputSizeText: { type: String, default: "" } }, emits: ["preset", "export", "patch", "download", "discard", "cancel"], setup(e22, { emit: t22 }) {
  let a2 = e22, i2 = t22, n2 = ["8000k", "4000k", "2500k", "1500k", "800k"], o22 = $o(() => a2.form.width && a2.form.height ? `${a2.form.width}x${a2.form.height}` : "");
  function u2(e32) {
    i2("patch", e32);
  }
  function d2(e32) {
    if (!e32) return void u2({ width: "", height: "", presetId: "" });
    let [t32, a3] = e32.split("x");
    u2({ width: Number(t32), height: Number(a3), presetId: "" });
  }
  return (t32, a3) => {
    let c22 = dv, v22 = uv;
    return Zr(), eo("div", { class: "w-full vc-export-pop", onClick: a3[7] || (a3[7] = sl(() => {
    }, ["stop"])) }, [io("div", As, Z(e22.pendingReady ? "导出完成" : e22.exporting ? "正在导出" : "导出设置"), 1), e22.pendingReady ? (Zr(), eo(Hr, { key: 0 }, [a3[9] || (a3[9] = io("p", { class: "text-[12px] mb-3 leading-relaxed d-label-2" }, " 视频已导出完成，可下载到本地，或取消丢弃该文件。 ", -1)), io("div", Vs, [io("button", { type: "button", class: "vc-export-btn vc-export-btn--ghost flex-1 flex items-center justify-center gap-1.5", onClick: a3[0] || (a3[0] = (e32) => i2("discard")) }, " 取消 "), io("button", { type: "button", class: "vc-export-btn vc-export-btn--success flex-1 flex items-center justify-center gap-1.5", onClick: a3[1] || (a3[1] = (e32) => i2("download")) }, [lo(Lt(o3), { class: "size-3.5" }), a3[8] || (a3[8] = uo(" 下载 "))])])], 64)) : e22.exporting ? (Zr(), eo(Hr, { key: 1 }, [io("div", $s, [io("div", Ds, [a3[10] || (a3[10] = io("span", { class: "d-label-2" }, "处理进度", -1)), io("span", Ls, Z(e22.exportProgress) + "% ", 1)]), io("div", Es2, [io("div", { class: "vc-export-bar__fill", style: V({ width: `${Math.min(100, Math.max(0, e22.exportProgress))}%` }) }, null, 4)]), io("div", js, Z(e22.exportLabel), 1)]), io("div", _s, [io("button", Os2, [lo(Lt(aa), { class: "size-3.5 animate-spin" }), uo(" " + Z(e22.exportLabel), 1)]), io("button", { type: "button", class: "vc-export-cancel", onClick: a3[2] || (a3[2] = (e32) => i2("cancel")) }, " 取消 ")])], 64)) : (Zr(), eo(Hr, { key: 2 }, [a3[15] || (a3[15] = io("div", { class: "vc-field-label mb-1.5" }, "快速预设", -1)), io("div", Ws, [(Zr(!0), eo(Hr, null, Es(Lt(z), (t4) => (Zr(), eo("button", { key: t4.id, type: "button", class: W(["vc-chip flex-1 whitespace-nowrap", { active: e22.form.presetId === t4.id }]), onClick: (e32) => i2("preset", t4.id) }, Z(t4.label), 11, Hs))), 128))]), io("div", qs, [io("div", Ys, [a3[11] || (a3[11] = io("span", { class: "setting-label" }, "格式", -1)), lo(v22, { class: "setting-select", "model-value": e22.form.format, size: "small", teleported: !1, "onUpdate:modelValue": a3[3] || (a3[3] = (e32) => u2({ format: e32, presetId: "" })) }, { default: mn(() => [(Zr(!0), eo(Hr, null, Es(Lt(uu), (e32) => (Zr(), to(c22, { key: e32.title, label: e32.title, value: e32.title, disabled: e32.title === "GIF" }, null, 8, ["label", "value", "disabled"]))), 128))]), _: 1 }, 8, ["model-value"])]), io("div", Xs, [a3[12] || (a3[12] = io("span", { class: "setting-label" }, "码率", -1)), lo(v22, { class: "setting-select", "model-value": e22.form.videoBitRate, size: "small", placeholder: "默认", teleported: !1, "onUpdate:modelValue": a3[4] || (a3[4] = (e32) => u2({ videoBitRate: e32, presetId: "" })) }, { default: mn(() => [lo(c22, { label: "默认", value: "" }), (Zr(), eo(Hr, null, Es(n2, (e32) => lo(c22, { key: e32, label: e32, value: e32 }, null, 8, ["label", "value"])), 64))]), _: 1 }, 8, ["model-value"])]), io("div", Gs, [a3[13] || (a3[13] = io("span", { class: "setting-label" }, "分辨率", -1)), lo(v22, { class: "setting-select", "model-value": o22.value, size: "small", placeholder: "跟画布", teleported: !1, onChange: d2 }, { default: mn(() => [lo(c22, { label: "跟画布（不强制缩放）", value: "" }), (Zr(!0), eo(Hr, null, Es(Lt(gu), (e32) => (Zr(), to(c22, { key: e32.value, label: `${e32.title.split("·")[0]}`, value: e32.value }, null, 8, ["label", "value"]))), 128))]), _: 1 }, 8, ["model-value"])]), e22.outputSizeText ? (Zr(), eo("div", Ks, " 实际输出 " + Z(e22.outputSizeText) + "（保持画布比例） ", 1)) : po("", !0), io("div", Js, [a3[14] || (a3[14] = io("span", { class: "setting-label" }, "帧率", -1)), lo(v22, { class: "setting-select", "model-value": e22.form.fps, size: "small", placeholder: "跟源", teleported: !1, "onUpdate:modelValue": a3[5] || (a3[5] = (e32) => u2({ fps: e32, presetId: "" })) }, { default: mn(() => [lo(c22, { label: "跟源", value: "" }), (Zr(!0), eo(Hr, null, Es(Lt(ku), (e32) => (Zr(), to(c22, { key: e32, label: `${e32} fps`, value: e32 }, null, 8, ["label", "value"]))), 128))]), _: 1 }, 8, ["model-value"])])]), io("button", { type: "button", class: "vc-export-btn w-full mt-3.5 flex items-center justify-center gap-2", onClick: a3[6] || (a3[6] = (e32) => i2("export")) }, Z(e22.exportLabel), 1)], 64))]);
  };
} }, [["__scopeId", "data-v-55278de7"]]), Qs = { class: "flex-1 min-h-0 w-full flex flex-col relative" }, er = { key: 0, class: "flex items-center justify-end gap-2 mb-2 shrink-0 pr-1 absolute -top-[54px] right-[80px]" }, tr = { type: "button", class: "vc-export-btn" }, ar = { class: "flex-2 min-h-0 flex gap-2" }, lr = ["accept"], ir = { name: "MediaBoxVideoCut" }, nr = o(Object.assign(ir, { setup(e22) {
  let t22 = Ai(), a2 = Et(), l22 = Et();
  function i2(e32) {
    if (!t22.editorVisible || t22.exporting || (function(e42) {
      var t32;
      if (!e42) return !1;
      let a4 = (e42.tagName || "").toLowerCase();
      return a4 === "input" || a4 === "textarea" || a4 === "select" || !!e42.isContentEditable || !!((t32 = e42.closest) != null && t32.call(e42, "input, textarea, select, [contenteditable='true']"));
    })(e32.target)) return;
    if (e32.key === "Delete" || e32.key === "Backspace")
      return t22.activeDock === "assets" && t22.selectedAssetId ? (e32.preventDefault(), void t22.removeAsset(t22.selectedAssetId)) : t22.selectedClipId ? (e32.preventDefault(), void t22.removeSelectedClip()) : void 0;
    let a3 = t22.selectedClip;
    if (!a3 || a3.type !== "image" && a3.type !== "text" && a3.type !== "video") return;
    let l32 = e32.shiftKey;
    return e32.key === "+" || e32.key === "=" || e32.code === "NumpadAdd" ? (e32.preventDefault(), void t22.nudgeClipTransform(a3.id, { scaleBy: l32 ? 1.1 : 1.05 })) : e32.key === "-" || e32.key === "_" || e32.code === "NumpadSubtract" ? (e32.preventDefault(), void t22.nudgeClipTransform(a3.id, { scaleBy: l32 ? 1 / 1.1 : 1 / 1.05 })) : e32.key === "[" || e32.key === "【" ? (e32.preventDefault(), void t22.nudgeClipTransform(a3.id, { rotateBy: l32 ? -15 : -1 })) : e32.key === "]" || e32.key === "】" ? (e32.preventDefault(), void t22.nudgeClipTransform(a3.id, { rotateBy: l32 ? 15 : 1 })) : e32.key === "ArrowLeft" ? (e32.preventDefault(), void t22.nudgeClipTransform(a3.id, { dx: l32 ? -0.05 : -0.01 })) : e32.key === "ArrowRight" ? (e32.preventDefault(), void t22.nudgeClipTransform(a3.id, { dx: l32 ? 0.05 : 0.01 })) : e32.key === "ArrowUp" ? (e32.preventDefault(), void t22.nudgeClipTransform(a3.id, { dy: l32 ? -0.05 : -0.01 })) : void (e32.key === "ArrowDown" && (e32.preventDefault(), t22.nudgeClipTransform(a3.id, { dy: l32 ? 0.05 : 0.01 })));
  }
  function n2() {
    window.removeEventListener("keydown", i2), window.addEventListener("keydown", i2);
  }
  function o22() {
    window.removeEventListener("keydown", i2);
  }
  function s22() {
    var e32, i3, n3;
    t22.exporting || (i3 = (e32 = l22.value) == null ? void 0 : e32.pickMedia) != null && i3.call(e32) || (n3 = a2.value) == null || n3.click();
  }
  function r2(e32) {
    let a3 = Array.from(e32.target.files || []);
    e32.target.value = "", a3.length && t22.importMediaFiles(a3);
  }
  function u2(e32) {
    t22.seekByTimelinePct(e32);
  }
  function d2(e32) {
    t22.selectClip(e32 || "");
  }
  function c22(e32) {
    Object.assign(t22.exportForm, e32);
  }
  function p2() {
    if (t22.exporting || t22.exportPendingReady) return void (t22.exportOpen = !0);
    document.querySelector(".el-select__popper.el-popper:not([aria-hidden='true'])") && (t22.exportOpen = !0);
  }
  return fs(() => {
    n2(), t22.onUiMount();
  }), ns(() => {
    n2(), t22.onUiMount();
  }), ss(() => {
    o22(), t22.onUiUnmount();
  }), hs(() => {
    o22(), t22.onUiUnmount();
  }), (e32, i3) => {
    let n3 = VO;
    return Zr(), eo("div", Qs, [Lt(t22).editorVisible ? (Zr(), eo("div", er, [lo(n3, { visible: Lt(t22).exportOpen, "onUpdate:visible": i3[0] || (i3[0] = (e42) => Lt(t22).exportOpen = e42), trigger: "click", placement: "bottom-end", width: 400, "hide-after": 0, "popper-class": "vc-export-popper", onBeforeLeave: p2 }, { reference: mn(() => [io("button", tr, [lo(Lt(l4), { class: "size-3.5" }), uo(" " + Z(Lt(t22).exporting ? Lt(t22).exportLabel : Lt(t22).exportPendingReady ? "导出完成" : "导出视频"), 1)])]), default: mn(() => [lo(Zs, { form: Lt(t22).exportForm, exporting: Lt(t22).exporting, "pending-ready": Lt(t22).exportPendingReady, "export-progress": Lt(t22).exportProgress, "export-label": Lt(t22).exportLabel, "output-size-text": Lt(t22).exportOutputSizeText, onPreset: Lt(t22).applyExportPreset, onExport: Lt(t22).exportVideo, onDownload: Lt(t22).downloadExportResult, onDiscard: Lt(t22).discardExportResult, onCancel: Lt(t22).cancelExport, onPatch: c22 }, null, 8, ["form", "exporting", "pending-ready", "export-progress", "export-label", "output-size-text", "onPreset", "onExport", "onDownload", "onDiscard", "onCancel"])]), _: 1 }, 8, ["visible"])])) : po("", !0), Lt(t22).editorVisible ? (Zr(), eo(Hr, { key: 2 }, [io("div", ar, [lo(yn2, { ref_key: "dockRef", ref: l22, class: "!w-[30%] min-w-[248px]", "active-dock": Lt(t22).activeDock, "onUpdate:activeDock": i3[1] || (i3[1] = (e42) => Lt(t22).activeDock = e42), "asset-view-mode": Lt(t22).assetViewMode, "onUpdate:assetViewMode": i3[2] || (i3[2] = (e42) => Lt(t22).assetViewMode = e42), assets: Lt(t22).assets, "selected-asset-id": Lt(t22).selectedAssetId, disabled: Lt(t22).exporting, "workspace-supported": Lt(t22).workspaceSupported, "workspace-ready": Lt(t22).workspaceReady, onImportMedia: i3[3] || (i3[3] = (e42) => Lt(t22).importMediaFiles(e42)), onSelectAsset: i3[4] || (i3[4] = (e42) => Lt(t22).selectAsset(e42)), onRemoveAsset: i3[5] || (i3[5] = (e42) => Lt(t22).removeAsset(e42)), onClearAssets: Lt(t22).clearProject, onAddTextToTimeline: i3[6] || (i3[6] = () => Lt(t22).placeAssetOnTimeline("text-template")), onPlaceAsset: i3[7] || (i3[7] = (e42) => Lt(t22).placeAssetOnTimeline(e42)), onToggleWorkspace: Lt(t22).toggleWorkspacePersist }, null, 8, ["active-dock", "asset-view-mode", "assets", "selected-asset-id", "disabled", "workspace-supported", "workspace-ready", "onClearAssets", "onToggleWorkspace"]), lo(jn, { playing: Lt(t22).playing, "clock-text": Lt(t22).clockText, "progress-pct": Lt(t22).progressInTrimPct, "speed-label": Lt(t22).speedLabel, "canvas-bg": Lt(t22).canvasBg, "preview-ratio": Lt(t22).previewRatio, "onUpdate:previewRatio": i3[8] || (i3[8] = (e42) => Lt(t22).previewRatio = e42), "design-width": Lt(t22).previewDesignSize.w, "design-height": Lt(t22).previewDesignSize.h, "current-time": Lt(t22).currentTime, "video-clips": Lt(t22).videoClips, "image-clips": Lt(t22).imageClips, "text-clips": Lt(t22).textClips, "audio-clips": Lt(t22).audioClips, exporting: Lt(t22).exporting, "track-rows": Lt(t22).trackRows, "track-row-states": Lt(t22).trackRowStates, "selected-id": Lt(t22).selectedClipId, "has-timeline-content": Lt(t22).hasTimelineContent, onLoadedMeta: Lt(t22).onLoadedMeta, onTogglePlay: Lt(t22).togglePlay, onSeekPct: u2, onBindVideoClip: Lt(t22).bindVideoClip, onBindBgmClip: Lt(t22).bindBgmClip, onSelect: d2, onPatchClip: Lt(t22).updateClip }, null, 8, ["playing", "clock-text", "progress-pct", "speed-label", "canvas-bg", "preview-ratio", "design-width", "design-height", "current-time", "video-clips", "image-clips", "text-clips", "audio-clips", "exporting", "track-rows", "track-row-states", "selected-id", "has-timeline-content", "onLoadedMeta", "onTogglePlay", "onBindVideoClip", "onBindBgmClip", "onPatchClip"]), lo(Jo, { class: "w-[30%] min-w-[248px]", "active-tool": Lt(t22).activeTool, "onUpdate:activeTool": i3[9] || (i3[9] = (e42) => Lt(t22).activeTool = e42), "preview-ratio": Lt(t22).previewRatio, "onUpdate:previewRatio": i3[10] || (i3[10] = (e42) => Lt(t22).previewRatio = e42), "custom-width": Lt(t22).customWidth, "onUpdate:customWidth": i3[11] || (i3[11] = (e42) => Lt(t22).customWidth = e42), "custom-height": Lt(t22).customHeight, "onUpdate:customHeight": i3[12] || (i3[12] = (e42) => Lt(t22).customHeight = e42), "canvas-bg": Lt(t22).canvasBg, "onUpdate:canvasBg": i3[13] || (i3[13] = (e42) => Lt(t22).canvasBg = e42), disabled: Lt(t22).exporting, "selected-clip": Lt(t22).selectedClip, "track-row-states": Lt(t22).trackRowStates, "design-width": Lt(t22).previewDesignSize.w, "design-height": Lt(t22).previewDesignSize.h, onResetFrame: Lt(t22).resetFrame, onResetSound: Lt(t22).resetSound, onReupload: s22, onPatchClip: Lt(t22).updateClip, onSetTrackMuted: Lt(t22).setTrackMuted }, null, 8, ["active-tool", "preview-ratio", "custom-width", "custom-height", "canvas-bg", "disabled", "selected-clip", "track-row-states", "design-width", "design-height", "onResetFrame", "onResetSound", "onPatchClip", "onSetTrackMuted"])]), lo(Bs, { class: "mt-2 shrink-0 grow-0 flex-[40%] min-h-[200px]", "timeline-duration": Lt(t22).timelineDuration, "current-time": Lt(t22).currentTime, "px-per-sec": Lt(t22).pxPerSec, "min-px-per-sec": Lt(t22).minPxPerSec, "max-px-per-sec": Lt(t22).maxPxPerSec, "project-fps": Lt(t22).projectFps, "track-rows": Lt(t22).trackRows, "track-row-states": Lt(t22).trackRowStates, "video-clips": Lt(t22).videoClips, "image-clips": Lt(t22).imageClips, "text-clips": Lt(t22).textClips, "audio-clips": Lt(t22).audioClips, "selected-id": Lt(t22).selectedClipId, disabled: Lt(t22).exporting, "can-undo": Lt(t22).canUndo, "can-redo": Lt(t22).canRedo, "can-split": Lt(t22).canSplitAtPlayhead, "can-clear": Lt(t22).canClearTracks, onSeekTime: Lt(t22).seekTo, onSelect: d2, onMoveClip: Lt(t22).moveClip, onResizeClip: Lt(t22).resizeClip, onRemoveClip: Lt(t22).removeSelectedClip, onSplitClip: Lt(t22).splitSelectedClip, onClearTracks: Lt(t22).clearTracks, onPlaceAsset: Lt(t22).placeAssetOnTimeline, onUndo: Lt(t22).undo, onRedo: Lt(t22).redo, onToggleTrack: Lt(t22).toggleTrackRowFlag, onReorderTrack: Lt(t22).reorderTracks, onViewport: Lt(t22).setTimelineViewport, onZoom: Lt(t22).zoomBy }, null, 8, ["timeline-duration", "current-time", "px-per-sec", "min-px-per-sec", "max-px-per-sec", "project-fps", "track-rows", "track-row-states", "video-clips", "image-clips", "text-clips", "audio-clips", "selected-id", "disabled", "can-undo", "can-redo", "can-split", "can-clear", "onSeekTime", "onMoveClip", "onResizeClip", "onRemoveClip", "onSplitClip", "onClearTracks", "onPlaceAsset", "onUndo", "onRedo", "onToggleTrack", "onReorderTrack", "onViewport", "onZoom"])], 64)) : (Zr(), to(_i, { key: 1, accept: Lt(t22).VIDEO_CUT_META.accept, hint: Lt(t22).VIDEO_CUT_META.hint, "workspace-supported": Lt(t22).workspaceSupported, "workspace-ready": Lt(t22).workspaceReady, onFiles: Lt(t22).importMediaFiles, onToggleWorkspace: Lt(t22).toggleWorkspacePersist }, null, 8, ["accept", "hint", "workspace-supported", "workspace-ready", "onFiles", "onToggleWorkspace"])), io("input", { ref_key: "fileInput", ref: a2, type: "file", class: "hidden", multiple: "", accept: Lt(t22).VIDEO_CUT_META.accept, onChange: r2 }, null, 40, lr)]);
  };
} }), [["__scopeId", "data-v-6c1c7857"]]), or = { class: "glass-panel flex-1 min-w-0 flex flex-col rounded-2xl p-2.5" }, sr2 = ["accept"], rr2 = { class: "size-14 rounded-2xl grid place-items-center mb-3 drop-icon" }, ur = { class: "mt-1.5 text-[12px] d-label-2" }, dr = { class: "shrink-0 flex items-center justify-between gap-3 px-1 min-w-0" }, cr = { class: "min-w-0" }, vr = { class: "text-[13px] font-medium truncate", style: { color: "var(--d-label)" } }, pr = { class: "text-[12px] mt-0.5 d-label-2" }, mr = { class: "flex-1 min-h-0 flex flex-col gap-2 relative" }, fr = ["src"], hr = { key: 0, class: "audio-prepare-mask absolute inset-0 z-10 rounded-xl flex flex-col items-center justify-center gap-2" }, br = { class: "text-[13px] font-medium", style: { color: "var(--d-label)" } }, gr = { class: "h-1.5 w-40 rounded-full overflow-hidden prepare-bar" }, yr = { class: "flex-1 min-h-0 flex items-center" }, xr = { key: 0, class: "audio-wave-tick-label" }, wr = { class: "audio-wave-canvas" }, kr = { class: "audio-wave-svg", viewBox: "0 0 1000 100", preserveAspectRatio: "none", width: "100%", height: "100%", "aria-hidden": "true" }, Mr = ["d"], Cr = ["d"], Sr = { class: "audio-trim-tag" }, Tr = { class: "audio-trim-tag" }, Ur = { class: "audio-playhead-time" }, Ir = { class: "flex items-center gap-2 min-w-0" }, zr = { class: "flex items-center gap-2" }, Rr = ["disabled"], Pr = ["disabled"], Nr = ["disabled"], Fr2 = { class: "justify-self-end text-[12px] tabular-nums", style: { color: "var(--d-label-2)" } }, Br = 14, Ar = 50, Vr = /* @__PURE__ */ o({ __name: "WaveEditor", props: { meta: { type: Object, required: !0 }, editorVisible: { type: Boolean, default: !1 }, fileName: { type: String, default: "" }, fileMeta: { type: String, default: "" }, objectUrl: { type: String, default: "" }, waveHeights: { type: Array, default: () => [] }, duration: { type: Number, default: 0 }, trimStartPct: { type: Number, default: 0 }, trimEndPct: { type: Number, default: 100 }, trimWidthPct: { type: Number, default: 100 }, trimStartShort: { type: String, default: "00:00.0" }, trimEndShort: { type: String, default: "00:00.0" }, progressPct: { type: Number, default: 0 }, playheadLabel: { type: String, default: "00:00" }, clockText: { type: String, default: "00:00 / 00:00" }, playing: { type: Boolean, default: !1 }, volume: { type: Number, default: 100 }, muted: { type: Boolean, default: !1 }, preparing: { type: Boolean, default: !1 }, preparingProgress: { type: Number, default: 0 }, preparingLabel: { type: String, default: "" } }, emits: ["load-file", "loaded-meta", "time-update", "toggle-play", "seek", "trim-drag", "update:playing", "preview-volume"], setup(e22, { expose: t22, emit: a2 }) {
  let l22 = e22, i2 = a2, n2 = Et(), o22 = Et(), s22 = Et(), r2 = Et(!1), u2 = Et(null), d2 = Et(null), c22 = $o({ get: () => l22.playing, set: (e32) => i2("update:playing", e32) });
  function m22(e32) {
    let t32 = Array.isArray(e32) && e32.length ? e32 : [];
    if (!t32.length) return Array.from({ length: 96 }, (e42, t4) => 12 + 14 * Math.abs(Math.sin(t4 / 5)));
    let a3 = t32.map((e42) => Math.max(0, Math.min(100, Number(e42) || 0))), l32 = Math.max(...a3, 1), i3 = a3.map((e42) => Math.max(2, e42 / l32 * 100)), n3 = Math.max(i3.length, 240);
    if (i3.length >= n3) return i3;
    let o32 = [];
    for (let s32 = 0; s32 < n3; s32++) {
      let e42 = s32 / (n3 - 1) * (i3.length - 1), t4 = Math.floor(e42), a4 = Math.min(i3.length - 1, t4 + 1), l42 = e42 - t4;
      o32.push(i3[t4] * (1 - l42) + i3[a4] * l42);
    }
    return o32;
  }
  let P2 = $o(() => {
    let e32 = m22(l22.waveHeights), t32 = e32.length, a3 = [], i3 = [];
    for (let l32 = 0; l32 < t32; l32++) {
      let n3 = l32 / Math.max(1, t32 - 1) * 1e3, o32 = e32[l32] / 100 * 48;
      a3.push(`${n3.toFixed(2)},${(Ar - o32).toFixed(2)}`), i3.push(`${n3.toFixed(2)},${(Ar + o32).toFixed(2)}`);
    }
    return `M ${a3.join(" L ")} M ${i3.join(" L ")}`;
  }), N2 = $o(() => {
    let e32 = m22(l22.waveHeights), t32 = e32.length, a3 = [], i3 = [];
    for (let l32 = 0; l32 < t32; l32++) {
      let n3 = l32 / Math.max(1, t32 - 1) * 1e3, o32 = e32[l32] / 100 * 48;
      a3.push(`${n3.toFixed(2)},${(Ar - o32).toFixed(2)}`), i3.push(`${n3.toFixed(2)},${(Ar + o32).toFixed(2)}`);
    }
    return `M ${a3.join(" L ")} L ${i3.reverse().join(" L ")} Z`;
  }), F22 = $o(() => ({ left: `clamp(0px, ${l22.trimStartPct}%, calc(100% - 14px))` })), B2 = $o(() => ({ left: `clamp(14px, ${l22.trimEndPct}%, 100%)` })), A2 = $o(() => {
    let e32 = Math.max(l22.duration || 30, 0.1), t32 = 60;
    e32 <= 20 ? t32 = 5 : e32 <= 60 ? t32 = 10 : e32 <= 180 && (t32 = 30);
    let a3 = t32 / 2, i3 = t32 / 10, n3 = (e42, t4) => {
      let a4 = (e42 % t4 + t4) % t4;
      return a4 < 1e-3 * t4 || t4 - a4 < 1e-3 * t4;
    }, o32 = (e42) => {
      let t4 = Math.floor(e42 / 60), a4 = Math.floor(e42 % 60);
      return `${String(t4).padStart(2, "0")}:${String(a4).padStart(2, "0")}`;
    }, s32 = [], r3 = Math.ceil(e32 / i3);
    for (let l32 = 0; l32 <= r3; l32++) {
      let r4 = Math.min(e32, l32 * i3), u4 = "minor";
      n3(r4, t32) || r4 === 0 ? u4 = "major" : n3(r4, a3) && (u4 = "mid");
      let d3 = r4 / e32 * 100, c3 = s32[s32.length - 1];
      c3 && Math.abs(c3.pct - d3) < 0.02 ? u4 === "major" && (c3.type = "major", c3.label = o32(c3.t)) : s32.push({ t: r4, pct: d3, type: u4, label: u4 === "major" ? o32(r4) : "", first: !1, last: !1 });
    }
    s32.length || s32.push({ t: 0, pct: 0, type: "major", label: o32(0), first: !0, last: !1 });
    let u3 = s32[s32.length - 1];
    return u3.pct = 100, u3.t = e32, u3.type = "major", u3.label = o32(e32), u3.last = !0, s32[0].first = !0, s32[0].type = "major", s32[0].label = o32(s32[0].t), s32;
  });
  function V22() {
    n2.value && (n2.value.value = "", n2.value.click());
  }
  function $2(e32) {
    var t32;
    let a3 = (t32 = e32.target.files) == null ? void 0 : t32[0];
    a3 && i2("load-file", a3), e32.target.value = "";
  }
  function L2(e32) {
    var t32;
    r2.value = !1;
    let a3 = (t32 = e32.dataTransfer.files) == null ? void 0 : t32[0];
    a3 && i2("load-file", a3);
  }
  function j2(e32) {
    i2("preview-volume", e32);
  }
  function _2() {
    var e32;
    return ((e32 = o22.value) == null ? void 0 : e32.getBoundingClientRect()) || null;
  }
  function O2(e32) {
    let t32 = _2();
    return t32?.width ? Math.min(1, Math.max(0, (e32.clientX - t32.left) / t32.width)) : 0;
  }
  function W22(e32) {
    let t32 = _2();
    if (!t32?.width || (function(e42) {
      let t4 = _2();
      return !!t4 && e42.clientY - t4.top <= 32;
    })(e32)) return "seek";
    let a3 = e32.clientX - t32.left, i3 = t32.width, n3 = l22.trimStartPct / 100 * i3, o32 = l22.trimEndPct / 100 * i3, s32 = l22.progressPct / 100 * i3, r3 = Math.min(Math.max(0, n3), i3 - Br), u3 = Math.max(Math.min(i3, o32), Br), d3 = r3 + Br, c3 = u3 - Br, v22 = a3 >= r3 - 18 && a3 <= d3 + 18, p2 = a3 >= c3 - 18 && a3 <= u3 + 18;
    return Math.abs(a3 - s32), v22 && p2 ? a3 < (Math.min(r3, c3) + Math.max(d3, u3)) / 2 ? "start" : "end" : v22 ? "start" : p2 ? "end" : "seek";
  }
  function H22(e32) {
    if (!l22.editorVisible || l22.preparing || !l22.duration || e32.button !== 0) return;
    let t32 = W22(e32), a3 = O2(e32);
    e32.preventDefault(), u2.value = t32 === "start" || t32 === "end" ? t32 : null, d2.value = t32, i2("trim-drag", { kind: t32, ratio: a3 }), window.addEventListener("mousemove", q2), window.addEventListener("mouseup", Y2);
  }
  function q2(e32) {
    d2.value && i2("trim-drag", { kind: d2.value, ratio: O2(e32) });
  }
  function Y2() {
    d2.value = null, window.removeEventListener("mousemove", q2), window.removeEventListener("mouseup", Y2);
  }
  return t22({ getAudioEl: () => s22.value, openPicker: V22 }), hs(() => {
    window.removeEventListener("mousemove", q2), window.removeEventListener("mouseup", Y2);
  }), (t32, a3) => {
    let l32 = Vk;
    return Zr(), eo("div", or, [io("input", { ref_key: "fileInput", ref: n2, type: "file", accept: e22.meta.accept, class: "hidden", onChange: $2 }, null, 40, sr2), yn(io("div", { class: W(["flex-1 min-h-0 rounded-xl border-[1.5px] border-dashed flex flex-col items-center justify-center text-center px-6 cursor-pointer transition-colors drop-zone", { "drop-active": r2.value }]), onClick: V22, onDragover: a3[0] || (a3[0] = sl((e32) => r2.value = !0, ["prevent"])), onDragleave: a3[1] || (a3[1] = (e32) => r2.value = !1), onDrop: sl(L2, ["prevent"]) }, [io("div", rr2, [lo(Lt(s5), { class: "size-8" })]), a3[9] || (a3[9] = io("div", { class: "text-[14px]", style: { color: "var(--d-label)" } }, [uo(" 将音频或视频拖到此处，或 "), io("span", { class: "font-medium", style: { color: "var(--primary-color)" } }, "点击上传")], -1)), io("div", ur, Z(e22.meta.hint), 1)], 34), [[di, !e22.editorVisible]]), e22.editorVisible ? (Zr(), eo(Hr, { key: 0 }, [io("div", dr, [io("div", cr, [io("div", vr, Z(e22.fileName || "未命名音频"), 1), io("div", pr, Z(e22.fileMeta), 1)])]), io("div", mr, [io("audio", { ref_key: "audioRef", ref: s22, class: "hidden", preload: "metadata", src: e22.objectUrl, onPlay: a3[2] || (a3[2] = (e32) => c22.value = !0), onPause: a3[3] || (a3[3] = (e32) => c22.value = !1), onLoadedmetadata: a3[4] || (a3[4] = (e32) => i2("loaded-meta")), onTimeupdate: a3[5] || (a3[5] = (e32) => i2("time-update")) }, null, 40, fr), e22.preparing ? (Zr(), eo("div", hr, [io("div", br, Z(e22.preparingLabel || "正在转换为可预览格式…"), 1), io("div", gr, [io("div", { class: "h-full rounded-full prepare-bar-fill", style: V({ width: Math.min(100, e22.preparingProgress || 8) + "%" }) }, null, 4)])])) : po("", !0), io("div", yr, [io("div", { class: W(["audio-wave-stage min-w-0 h-[200px] w-full flex flex-col", { "pointer-events-none opacity-40": e22.preparing }]), onMousedown: H22 }, [io("div", { ref_key: "waveInnerRef", ref: o22, class: "audio-wave-inner" }, [io("div", { class: W(["audio-wave-ruler", { "is-scrubbing": d2.value === "seek" }]) }, [(Zr(!0), eo(Hr, null, Es(A2.value, (e32, t4) => (Zr(), eo("div", { key: t4, class: W(["audio-wave-tick", ["is-" + e32.type, { "is-first": e32.first, "is-last": e32.last }]]), style: V({ left: e32.pct + "%" }) }, [e32.label ? (Zr(), eo("span", xr, Z(e32.label), 1)) : po("", !0)], 6))), 128))], 2), io("div", wr, [(Zr(), eo("svg", kr, [a3[10] || (a3[10] = io("line", { class: "audio-wave-mid", x1: "0", y1: "50", x2: "1000", y2: "50" }, null, -1)), io("path", { class: "audio-wave-fill", d: N2.value }, null, 8, Mr), io("path", { class: "audio-wave-stroke", d: P2.value }, null, 8, Cr)])), io("div", { class: "audio-wave-dim", style: V({ left: "0%", width: e22.trimStartPct + "%" }) }, null, 4), io("div", { class: "audio-wave-dim", style: V({ left: e22.trimEndPct + "%", right: "0%" }) }, null, 4), io("div", { class: "audio-wave-sel", style: V({ left: e22.trimStartPct + "%", width: e22.trimWidthPct + "%" }) }, null, 4), io("div", { class: W(["audio-trim-handle is-start", { "is-active": u2.value === "start" }]), style: V(F22.value) }, [io("span", Sr, Z(e22.trimStartShort), 1)], 6), io("div", { class: W(["audio-trim-handle is-end", { "is-active": u2.value === "end" }]), style: V(B2.value) }, [io("span", Tr, Z(e22.trimEndShort), 1)], 6)]), io("div", { class: W(["audio-playhead", { "is-near-end": e22.progressPct > 82, "is-dragging": d2.value === "seek" }]), style: V({ left: e22.progressPct + "%" }) }, [io("span", Ur, Z(e22.playheadLabel), 1)], 6)], 512)], 34)]), io("div", { class: W(["audio-transport shrink-0", { "pointer-events-none opacity-40": e22.preparing }]) }, [io("div", Ir, [(Zr(), to(ws(e22.muted || e22.volume === 0 ? Lt(v) : Lt(e2)), { class: "size-4 shrink-0", style: { color: "var(--d-label-2)" } })), lo(l32, { class: "flex-1 max-w-[140px]", "model-value": Math.min(100, e22.volume), min: 0, max: 100, "show-tooltip": !1, size: "small", disabled: e22.preparing, "onUpdate:modelValue": j2 }, null, 8, ["model-value", "disabled"])]), io("div", zr, [io("button", { type: "button", class: "audio-skip-btn", title: "到选区起点", disabled: e22.preparing, onClick: a3[6] || (a3[6] = (e32) => i2("seek", "start")) }, [lo(Lt(la), { class: "size-[18px]" })], 8, Rr), io("button", { type: "button", class: "audio-play-btn", disabled: e22.preparing, onClick: a3[7] || (a3[7] = (e32) => i2("toggle-play")) }, [c22.value ? (Zr(), to(Lt(e3), { key: 0, class: "size-[18px]" })) : (Zr(), to(Lt(l2), { key: 1, class: "size-[18px]" }))], 8, Pr), io("button", { type: "button", class: "audio-skip-btn", title: "到选区终点", disabled: e22.preparing, onClick: a3[8] || (a3[8] = (e32) => i2("seek", "end")) }, [lo(Lt(ia), { class: "size-[18px]" })], 8, Nr)]), io("div", Fr2, Z(e22.clockText), 1)], 2)])], 64)) : po("", !0)]);
  };
} }, [["__scopeId", "data-v-c3440886"]]), $r = { accept: "audio/*,video/*,.aac,.acc,audio/aac,audio/x-aac", hint: "支持 MP3 / WAV / AAC / FLAC 等常见格式，单次上传 1 个文件 单个不超过 500MB", maxSizeMB: 500 }, Dr = /* @__PURE__ */ new Set(["mp3", "wav", "ogg", "opus", "m4a", "flac", "webm"]);
function Lr(e22 = "") {
  let t22 = String(e22).match(/\.([^.]+)$/);
  return (t22 ? t22[1] : "").toLowerCase();
}
function Er(e22) {
  return !!e22 && (!!e22.type.startsWith("video/") || /^(mp4|mov|mkv|avi|flv|m4v|wmv|3gp|mpeg|mpg)$/i.test(Lr(e22.name)));
}
var jr = ["线性", "缓入", "缓出"], _r = [{ id: "trim", label: "音轨剪切", icon: "cut" }, { id: "speed", label: "调速", icon: "speed" }, { id: "sound", label: "声音", icon: "sound" }];
function Or(e22, t22 = !1) {
  (!Number.isFinite(e22) || e22 < 0) && (e22 = 0);
  let a2 = Math.floor(e22 / 60), l22 = Math.floor(e22 % 60), i2 = `${String(a2).padStart(2, "0")}:${String(l22).padStart(2, "0")}`;
  return t22 ? `${i2}.${Math.floor(e22 % 1 * 10)}` : i2;
}
function Wr(e22) {
  (!Number.isFinite(e22) || e22 < 0) && (e22 = 0);
  let t22 = Math.floor(e22 / 60), a2 = Math.floor(e22 % 60), l22 = Math.floor(e22 % 1 * 1e3);
  return `${String(t22).padStart(2, "0")}:${String(a2).padStart(2, "0")}.${String(l22).padStart(3, "0")}`;
}
function Hr2(e22) {
  let t22 = String(e22 || "").trim(), a2 = /^(\d+):(\d{1,2})(?:\.(\d{1,3}))?$/.exec(t22);
  if (!a2) return null;
  let l22 = Number(a2[1]), i2 = Number(a2[2]), n2 = a2[3] ? Number(a2[3].padEnd(3, "0")) : 0;
  return !Number.isFinite(l22) || !Number.isFinite(i2) || i2 >= 60 ? null : 60 * l22 + i2 + n2 / 1e3;
}
function qr(e22 = 96) {
  return Array.from({ length: e22 }, (t22, a2) => {
    let l22 = a2 / (e22 - 1);
    return Math.round(22 + 48 * Math.abs(Math.sin(l22 * Math.PI * 6.5)) + 22 * Math.abs(Math.sin(l22 * Math.PI * 13.2 + 0.8)) + 12 * Math.abs(Math.sin(l22 * Math.PI * 21 + 1.7)));
  });
}
function Yr(e22, t22) {
  let a2 = Math.min(1, Math.max(0, e22));
  return t22 === "缓入" ? Math.sin(a2 * (Math.PI / 2)) : t22 === "缓出" ? (1 - Math.cos(a2 * Math.PI)) / 2 : a2;
}
function Xr() {
  let a2 = Fl(), l22 = Et(!1), i2 = Et(""), n2 = Et(0), s22 = Et(""), r2 = Et(null), d2 = Et(null), c22 = Et(!1), m22 = Et(0), f2 = Et(0), h22 = Et(qr()), b22 = Et("trim"), g2 = Et(0), y2 = Et(0), x2 = Et("00:00.000"), w2 = Et("00:00.000"), k2 = Et(1), M2 = Et(!0), C2 = Et(100), S2 = Et(!1), T2 = Et(!1), U2 = Et(0.5), I2 = Et(0.5), z2 = Et("线性");
  function R2(e22) {
    return Math.max(0, Number(e22) || 0) / (function() {
      let e32 = Number(k2.value);
      return !Number.isFinite(e32) || e32 <= 0 ? 1 : e32;
    })();
  }
  let P2 = dt({ format: "MP3", bitRate: "", sampleRate: "", channel: "" }), N2 = Et(!1), F22 = Et(0), A2 = Et(""), V22 = Et(0), L2 = Et(Date.now()), E2 = Et(!1), j2 = Et(0), _2 = Et(1), O2 = null, H22 = 0, q2 = null, Y2 = null, X2 = null, G2 = null, K2 = null, J2 = 0, Z22 = $o(() => {
    let e22 = du.find((e32) => e32.title === P2.format);
    return e22?.sampleRate ? e22.sampleRate : fu;
  }), Q2 = $o(() => `${(i2.value.split(".").pop() || "AUDIO").toUpperCase()} · ${(function(e22) {
    if (!e22) return "0 B";
    let t22 = ["B", "KB", "MB", "GB"], a3 = 0, l32 = e22;
    for (; l32 >= 1024 && a3 < t22.length - 1; ) l32 /= 1024, a3++;
    return `${l32.toFixed(a3 ? 1 : 0)} ${t22[a3]}`;
  })(n2.value)} · ${Or(f2.value)}`), ee2 = $o(() => f2.value ? Math.min(100, Math.max(0, g2.value / f2.value * 100)) : 0), te2 = $o(() => f2.value ? Math.min(100, Math.max(0, y2.value / f2.value * 100)) : 100), ae2 = $o(() => Math.max(te2.value - ee2.value, 1)), le2 = $o(() => Wr(Math.max(0, R2(y2.value - g2.value)))), ie2 = $o(() => Or(R2(g2.value), !0)), ne2 = $o(() => Or(R2(y2.value), !0)), oe2 = $o(() => f2.value ? Math.min(100, m22.value / f2.value * 100) : 0), se2 = $o(() => Or(R2(m22.value))), re2 = $o(() => `${Or(R2(m22.value))} / ${Or(R2(f2.value))}`), ue2 = $o(() => R2(f2.value)), de2 = $o(() => `${k2.value.toFixed(1)}x`), ce2 = $o(() => {
    if (A2.value) return A2.value;
    if (E2.value) return j2.value ? `准备中 ${j2.value}%` : "准备中…";
    if (N2.value) {
      L2.value;
      let t22 = V22.value ? Nu(Date.now() - V22.value) : "";
      return t22 ? `处理中 ${F22.value}% · ${t22}` : `处理中 ${F22.value}%`;
    }
    return "导出音频";
  });
  function ve2() {
    q2 && (clearInterval(q2), q2 = null);
  }
  let pe2 = $o(() => E2.value ? j2.value ? `正在转换为可预览格式 ${j2.value}%` : "正在转换为可预览格式…" : "");
  function me2() {
    x2.value = Wr(g2.value), w2.value = Wr(y2.value);
  }
  function fe2(e22, t22) {
    let a3 = f2.value || 0, l32 = Math.max(0, Math.min(a3, e22)), i3 = Math.max(0, Math.min(a3, t22));
    i3 <= l32 && (i3 = Math.min(a3, l32 + 0.1)), g2.value = l32, y2.value = i3, me2();
  }
  async function he2(e22) {
    if (!e22) return !1;
    let t22 = window.AudioContext || window.webkitAudioContext;
    if (!t22) return !1;
    if (Y2 || (Y2 = new t22()), Y2.state === "suspended") try {
      await Y2.resume();
    } catch {
    }
    if (K2 !== e22) {
      try {
        X2?.disconnect();
      } catch {
      }
      try {
        G2?.disconnect();
      } catch {
      }
      X2 = null, G2 = null, K2 = null;
      try {
        X2 = Y2.createMediaElementSource(e22), G2 = Y2.createGain(), X2.connect(G2), G2.connect(Y2.destination), K2 = e22, e22.volume = 1;
      } catch {
        return X2 = null, G2 = null, K2 = null, !1;
      }
    }
    return !!G2;
  }
  function be2() {
    J2 && (cancelAnimationFrame(J2), J2 = 0);
  }
  function ge2() {
    be2();
    let e22 = () => {
      ye2(), c22.value && (J2 = requestAnimationFrame(e22));
    };
    J2 = requestAnimationFrame(e22);
  }
  function ye2() {
    let e22 = d2.value, t22 = S2.value ? 0 : Math.max(0, Math.min(2, C2.value / 100)), a3 = Math.max(0, (e22?.currentTime ?? m22.value) - g2.value), l32 = Math.max(1e-3, y2.value - g2.value), i3 = a3 >= l32 ? 0 : (function(e32, t32, a4, l42, i4) {
      let n4 = Math.max(1e-3, t32), o22 = 1, s32 = Math.min(Math.max(0, a4), n4), r3 = Math.min(Math.max(0, l42), n4);
      if (s32 > 0 && e32 < s32 && (o22 = Math.min(o22, Yr(e32 / s32, i4))), r3 > 0 && e32 > n4 - r3) {
        let t4 = (n4 - e32) / r3;
        o22 = Math.min(o22, Yr(t4, i4));
      }
      return o22;
    })(a3, l32, U2.value, I2.value, z2.value), n3 = t22 * i3 * (T2.value && _2.value > 1e-3 ? Math.min(4, 0.9 / _2.value) : 1);
    if (G2) {
      let t32 = Y2?.currentTime ?? 0;
      try {
        G2.gain.cancelScheduledValues(t32), G2.gain.setTargetAtTime(n3, t32, 0.015);
      } catch {
        G2.gain.value = n3;
      }
      return void (e22 && (e22.volume = 1));
    }
    e22 && (e22.muted = S2.value, e22.volume = Math.min(1, Math.max(0, n3)));
  }
  function xe2() {
    let e22 = d2.value;
    e22 && (e22.playbackRate = k2.value, (function(e32) {
      if (!e32) return;
      let t22 = M2.value !== !1;
      "preservesPitch" in e32 && (e32.preservesPitch = t22), "mozPreservesPitch" in e32 && (e32.mozPreservesPitch = t22), "webkitPreservesPitch" in e32 && (e32.webkitPreservesPitch = t22);
    })(e22));
  }
  async function ke2(e22, t22, a3) {
    let l32 = Er(t22) || !(function(e32) {
      if (!e32 || Er(e32)) return !1;
      if (e32.type.startsWith("audio/")) {
        let t32 = Lr(e32.name);
        return !t32 || Dr.has(t32);
      }
      return Dr.has(Lr(e32.name));
    })(t22);
    if (!l32) {
      let e32 = Lr(t22.name);
      Dr.has(e32) || await (async function(e52) {
        let t32 = new (window.AudioContext || window.webkitAudioContext)();
        try {
          let a4 = await e52.arrayBuffer();
          return await t32.decodeAudioData(a4.slice(0)), !0;
        } catch {
          return !1;
        } finally {
          await t32.close().catch(() => {
          });
        }
      })(t22) || (l32 = !0);
    }
    return l32 ? { previewFile: await e22.audioConvert({}, "wav", a3 || (() => {
    })), converted: !0 } : { previewFile: t22, converted: !1 };
  }
  function Me22(e22 = !0) {
    var t22, a3;
    if (H22 += 1, be2(), d2.value && (d2.value.pause(), d2.value.removeAttribute("src"), d2.value.load()), s22.value && (URL.revokeObjectURL(s22.value), s22.value = ""), r2.value && ((a3 = (t22 = r2.value).destroy) == null || a3.call(t22), r2.value = null), l22.value = !1, c22.value = !1, m22.value = 0, f2.value = 0, i2.value = "", n2.value = 0, _2.value = 1, h22.value = qr(), g2.value = 0, y2.value = 0, me2(), k2.value = 1, M2.value = !0, C2.value = 100, S2.value = !1, T2.value = !1, U2.value = 0.5, I2.value = 0.5, z2.value = "线性", b22.value = "trim", N2.value = !1, F22.value = 0, V22.value = 0, ve2(), E2.value = !1, j2.value = 0, G2) try {
      G2.gain.value = 1;
    } catch {
    }
    e22 && (A2.value = "");
  }
  return Fr(() => P2.format, () => {
    let e22 = Z22.value;
    P2.sampleRate && !e22.some((e32) => String(e32) === String(P2.sampleRate)) && (P2.sampleRate = "");
  }), Fr([U2, I2, z2, C2, S2, T2, g2, y2, _2], () => {
    ye2();
  }), Fr(M2, () => {
    xe2();
  }), Fr(c22, (e22) => {
    e22 ? ge2() : be2();
  }), hs(() => {
    O2 && clearTimeout(O2), ve2(), be2(), Me22();
    try {
      X2?.disconnect();
    } catch {
    }
    try {
      G2?.disconnect();
    } catch {
    }
    X2 = null, G2 = null, K2 = null, Y2 && (Y2.close().catch(() => {
    }), Y2 = null);
  }), { AUDIO_CUT_META: $r, editorVisible: l22, fileName: i2, fileMeta: Q2, objectUrl: s22, audioEl: d2, playing: c22, currentTime: m22, duration: f2, waveHeights: h22, activeTool: b22, trimStart: g2, trimEnd: y2, trimStartText: x2, trimEndText: w2, trimStartPct: ee2, trimEndPct: te2, trimWidthPct: ae2, trimDurationText: le2, trimStartShort: ie2, trimEndShort: ne2, progressPct: oe2, playheadLabel: se2, clockText: re2, displayDuration: ue2, speed: k2, speedLabel: de2, keepPitch: M2, volume: C2, muted: S2, normalize: T2, fadeIn: U2, fadeOut: I2, fadeCurve: z2, exportForm: P2, sampleRateList: Z22, exporting: N2, exportLabel: ce2, preparing: E2, preparingProgress: j2, preparingLabel: pe2, loadFile: async function(e22) {
    if (!e22 || E2.value || N2.value) return;
    if (e22.size / 1048576 > $r.maxSizeMB) return void aO.error(`文件体积超过${$r.maxSizeMB}MB`);
    Me22(!1);
    let o22 = ++H22;
    i2.value = e22.name, n2.value = e22.size, E2.value = !0, j2.value = 0, a2.setBusy(!0), l22.value = !0;
    let u2 = new yu(e22);
    r2.value = u2;
    try {
      try {
        await u2.stat();
      } catch {
      }
      if (o22 !== H22) return;
      let { previewFile: t22 } = await ke2(u2, e22, (e32) => {
        o22 === H22 && (j2.value = e32);
      });
      if (o22 !== H22) return;
      s22.value = URL.createObjectURL(t22);
      try {
        let e32 = await (async function(e42, t32 = 96) {
          let a3 = new (window.AudioContext || window.webkitAudioContext)();
          try {
            let l32 = await e42.arrayBuffer(), i3 = (await a3.decodeAudioData(l32.slice(0))).getChannelData(0), n3 = Math.max(1, Math.floor(i3.length / t32)), o32 = [], s32 = 0;
            for (let e52 = 0; e52 < t32; e52++) {
              let t4 = 0, a4 = e52 * n3, l42 = Math.min(i3.length, a4 + n3);
              for (let e6 = a4; e6 < l42; e6++) {
                let a5 = Math.abs(i3[e6]);
                a5 > t4 && (t4 = a5);
              }
              t4 > s32 && (s32 = t4), o32.push(Math.max(1e-3, t4));
            }
            let r3 = Math.max(s32, 0.01);
            return { peaks: o32.map((e52) => Math.round(e52 / r3 * 100)), peak: s32 || 1 };
          } finally {
            await a3.close().catch(() => {
            });
          }
        })(t22);
        h22.value = e32.peaks, _2.value = e32.peak || 1;
      } catch {
        h22.value = qr(), _2.value = 1;
      }
    } catch {
      aO.error("无法解析该媒体，请换一个文件重试"), Me22();
    } finally {
      o22 === H22 && (E2.value = !1, j2.value = 0, a2.setBusy(!1));
    }
  }, reset: Me22, applyTrimTexts: function() {
    let e22 = Hr2(x2.value), t22 = Hr2(w2.value);
    e22 != null && t22 != null && f2.value ? fe2(e22, t22) : me2();
  }, resetTrim: function() {
    fe2(0, f2.value || 0);
  }, setTrimPreset: function(e22) {
    let t22 = f2.value || 0;
    t22 && (e22 === "head" ? fe2(0, Math.min(t22, Math.max(1, 0.35 * t22))) : fe2(Math.max(0, 0.65 * t22), t22));
  }, clampTrim: fe2, setSpeed: function(e22) {
    let t22 = Math.min(2, Math.max(0.25, Number(e22) || 1));
    k2.value = Math.round(100 * t22) / 100, xe2();
  }, applyVolume: function() {
    ye2();
  }, togglePlay: async function() {
    let e22 = d2.value;
    if (e22 && l22.value && !E2.value) if (e22.paused) {
      (m22.value < g2.value || m22.value >= y2.value - 0.05) && (e22.currentTime = g2.value, m22.value = g2.value), await he2(e22), xe2(), ye2();
      try {
        await e22.play(), ge2();
      } catch {
      }
    } else e22.pause(), be2(), ye2();
  }, seekTo: function(e22) {
    let t22 = d2.value;
    if (!t22) return;
    let a3 = e22 === "end" ? y2.value : g2.value;
    t22.currentTime = a3, m22.value = a3, ye2();
  }, onTimeUpdate: function() {
    let e22 = d2.value;
    e22 && (m22.value = e22.currentTime || 0, ye2(), y2.value > 0 && e22.currentTime >= y2.value && (e22.pause(), e22.currentTime = y2.value, m22.value = y2.value, be2(), ye2()));
  }, onLoadedMeta: function() {
    let e22 = d2.value;
    e22 && (f2.value = e22.duration || 0, fe2(0, f2.value), he2(e22).then(() => {
      xe2(), ye2();
    }));
  }, exportAudio: async function() {
    if (!N2.value && !E2.value) {
      if (!l22.value || !r2.value) return e22 = "请先上传音频", A2.value = e22, O2 && clearTimeout(O2), void (O2 = setTimeout(() => {
        A2.value = "", O2 = null;
      }, 1400));
      var e22;
      N2.value = !0, F22.value = 0, V22.value = Date.now(), ve2(), L2.value = Date.now(), q2 = setInterval(() => {
        L2.value = Date.now();
      }, 200), a2.setBusy(!0);
      try {
        r2.value.duration || await r2.value.stat();
        let e32 = await r2.value.audioCut({ start: g2.value, end: y2.value, volume: C2.value / 100, fadeIn: U2.value, fadeOut: I2.value, fadeCurve: z2.value, speed: k2.value, keepPitch: M2.value, normalize: T2.value, bitRate: P2.bitRate || "", sampleRate: P2.sampleRate || "", channel: P2.channel || "" }, P2.format.toLowerCase(), (e42) => {
          F22.value = e42;
        }), t22 = document.createElement("a");
        t22.href = URL.createObjectURL(e32), t22.download = e32.name, t22.target = "_blank", t22.click(), a2.addRecentTask({ name: e32.name, desc: `音频 · 剪切导出 (${P2.format})`, icon: s5 });
      } catch {
        aO.error("导出失败，请重试");
      } finally {
        N2.value = !1, F22.value = 0, V22.value = 0, ve2(), a2.setBusy(!1);
      }
    }
  } };
}
var Gr = { class: "glass-panel rounded-2xl flex-1 min-h-0 flex flex-col overflow-hidden" }, Kr = { class: "cut-settings-panel flex-1 min-h-0" }, Jr = { class: "cut-tool-rail" }, Zr2 = ["title", "disabled", "onClick"], Qr = ["title", "disabled"], eu = { class: "cut-settings-body custom-scroll overflow-x-hidden" }, tu = { class: "cut-section-body" }, au = { class: "block" }, lu = { class: "block" }, iu = { class: "rounded-lg px-2.5 py-2 text-[12px] trim-duration" }, nu = { class: "font-medium tabular-nums", style: { color: "var(--primary-color)" } }, ou = { class: "grid grid-cols-2 gap-1.5" }, su = ["disabled"], ru = ["disabled"], uu2 = ["disabled"], du2 = { class: "cut-section-body" }, cu = { class: "h-8 px-2.5 rounded-lg field-input flex items-center gap-2 tabular-nums text-[12px]" }, vu = { class: "block" }, pu2 = { class: "flex items-center justify-between text-[12px] mb-1 d-label-2" }, mu2 = { class: "grid grid-cols-4 gap-1.5" }, fu2 = ["disabled", "onClick"], hu2 = { class: "cut-toggle-row" }, bu2 = { class: "cut-section-body" }, gu2 = { class: "block" }, yu2 = { class: "flex items-center justify-between text-[12px] mb-1 d-label-2" }, xu = { class: "grid grid-cols-4 gap-1.5" }, wu = ["disabled", "onClick"], ku2 = { class: "cut-toggle-row" }, Mu = { class: "cut-toggle-row" }, Cu = { class: "block" }, Su = { class: "flex items-center justify-between text-[12px] mb-1 d-label-2" }, Tu = { class: "block" }, Uu = { class: "flex items-center justify-between text-[12px] mb-1 d-label-2" }, Iu = { class: "grid grid-cols-3 gap-1.5" }, zu = ["disabled", "onClick"], Ru2 = ["disabled"], Pu = /* @__PURE__ */ o({ __name: "ToolPanel", props: { activeTool: { type: String, default: "trim" }, editorVisible: { type: Boolean, default: !1 }, exporting: { type: Boolean, default: !1 }, trimStartText: { type: String, default: "" }, trimEndText: { type: String, default: "" }, trimDurationText: { type: String, default: "" }, speed: { type: Number, default: 1 }, speedLabel: { type: String, default: "1.0x" }, keepPitch: { type: Boolean, default: !0 }, volume: { type: Number, default: 100 }, muted: { type: Boolean, default: !1 }, normalize: { type: Boolean, default: !1 }, fadeIn: { type: Number, default: 0 }, fadeOut: { type: Number, default: 0 }, fadeCurve: { type: String, default: "线性" } }, emits: ["update:activeTool", "update:trimStartText", "update:trimEndText", "update:keepPitch", "update:normalize", "update:fadeIn", "update:fadeOut", "update:fadeCurve", "reupload", "apply-trim-texts", "trim-preset", "reset-trim", "set-speed", "set-volume", "set-muted"], setup(e22, { emit: t22 }) {
  let a2 = t22, l22 = _r, i2 = jr, n2 = { cut: Jt, speed: ta, sound: e2 };
  function o22(e32) {
    a2("set-volume", e32);
  }
  function s22(e32) {
    a2("set-muted", e32);
  }
  function r2() {
    a2("update:fadeIn", 0), a2("update:fadeOut", 0), a2("update:fadeCurve", "线性");
  }
  return (t32, u2) => {
    let d2 = ju, c22 = Vk, v22 = tC;
    return Zr(), eo("div", Gr, [io("div", Kr, [io("div", Jr, [(Zr(!0), eo(Hr, null, Es(Lt(l22), (t4) => (Zr(), eo("button", { key: t4.id, type: "button", class: W(["cut-tool-icon", { active: e22.activeTool === t4.id }]), title: t4.label, disabled: e22.exporting, onClick: (e32) => a2("update:activeTool", t4.id) }, [(Zr(), to(ws(n2[t4.icon]), { class: "size-[18px]" }))], 10, Zr2))), 128)), io("button", { type: "button", class: "cut-tool-icon mt-auto", title: e22.editorVisible ? "重新上传" : "上传文件", disabled: e22.exporting, onClick: u2[0] || (u2[0] = (e32) => a2("reupload")) }, [lo(Lt(kt), { class: "size-[18px]" })], 8, Qr)]), io("div", eu, [yn(io("div", null, [u2[16] || (u2[16] = io("div", { class: "cut-section-head" }, [io("span", null, "音轨剪切")], -1)), io("div", tu, [io("label", au, [u2[13] || (u2[13] = io("div", { class: "cut-field-label" }, "开始时间", -1)), lo(d2, { "model-value": e22.trimStartText, size: "small", class: "tabular-nums", disabled: e22.exporting || !e22.editorVisible, "onUpdate:modelValue": u2[1] || (u2[1] = (e32) => a2("update:trimStartText", e32)), onChange: u2[2] || (u2[2] = (e32) => a2("apply-trim-texts")) }, null, 8, ["model-value", "disabled"])]), io("label", lu, [u2[14] || (u2[14] = io("div", { class: "cut-field-label" }, "结束时间", -1)), lo(d2, { "model-value": e22.trimEndText, size: "small", class: "tabular-nums", disabled: e22.exporting || !e22.editorVisible, "onUpdate:modelValue": u2[3] || (u2[3] = (e32) => a2("update:trimEndText", e32)), onChange: u2[4] || (u2[4] = (e32) => a2("apply-trim-texts")) }, null, 8, ["model-value", "disabled"])]), io("div", iu, [u2[15] || (u2[15] = uo(" 选区时长 ")), io("span", nu, Z(e22.trimDurationText), 1)]), io("div", ou, [io("button", { type: "button", class: "h-8 rounded-lg text-[12px] field-input", disabled: e22.exporting || !e22.editorVisible, onClick: u2[5] || (u2[5] = (e32) => a2("trim-preset", "head")) }, " 保留开头 ", 8, su), io("button", { type: "button", class: "h-8 rounded-lg text-[12px] field-input", disabled: e22.exporting || !e22.editorVisible, onClick: u2[6] || (u2[6] = (e32) => a2("trim-preset", "tail")) }, " 保留结尾 ", 8, ru)]), io("button", { type: "button", class: "w-full h-8 rounded-lg text-[12px] field-input", disabled: e22.exporting || !e22.editorVisible, onClick: u2[7] || (u2[7] = (e32) => a2("reset-trim")) }, " 重置选区 ", 8, uu2)])], 512), [[di, e22.activeTool === "trim"]]), yn(io("div", null, [u2[20] || (u2[20] = io("div", { class: "cut-section-head" }, [io("span", null, "调速")], -1)), io("div", du2, [io("div", null, [u2[17] || (u2[17] = io("div", { class: "cut-field-label" }, "速度", -1)), io("div", cu, [lo(Lt(ta), { class: "size-4 d-label-2" }), io("span", null, Z(e22.speedLabel), 1)])]), io("label", vu, [io("div", pu2, [u2[18] || (u2[18] = io("span", null, "播放速度", -1)), io("span", null, Z(e22.speedLabel), 1)]), lo(c22, { "model-value": Math.round(100 * e22.speed), min: 25, max: 200, "show-tooltip": !1, size: "small", disabled: e22.exporting || !e22.editorVisible, "onUpdate:modelValue": u2[8] || (u2[8] = (e32) => a2("set-speed", e32 / 100)) }, null, 8, ["model-value", "disabled"])]), io("div", mu2, [(Zr(), eo(Hr, null, Es([0.5, 1, 1.5, 2], (t4) => io("button", { key: "as" + t4, type: "button", class: W(["speed-chip h-8 rounded-lg text-[12px]", { active: Math.abs(e22.speed - t4) < 0.01 }]), disabled: e22.exporting || !e22.editorVisible, onClick: (e32) => a2("set-speed", t4) }, Z(t4.toFixed(1)) + "x ", 11, fu2)), 64))]), io("div", hu2, [u2[19] || (u2[19] = io("span", null, "保持音调", -1)), lo(v22, { "model-value": e22.keepPitch, size: "small", disabled: e22.exporting || !e22.editorVisible, "onUpdate:modelValue": u2[9] || (u2[9] = (e32) => a2("update:keepPitch", e32)) }, null, 8, ["model-value", "disabled"])])])], 512), [[di, e22.activeTool === "speed"]]), yn(io("div", null, [u2[28] || (u2[28] = io("div", { class: "cut-section-head" }, [io("span", null, "声音")], -1)), io("div", bu2, [io("label", gu2, [io("div", yu2, [u2[21] || (u2[21] = io("span", null, "音量", -1)), io("span", null, Z(e22.volume) + "%", 1)]), lo(c22, { "model-value": e22.volume, min: 0, max: 200, "show-tooltip": !1, size: "small", disabled: e22.exporting || !e22.editorVisible, "onUpdate:modelValue": o22 }, null, 8, ["model-value", "disabled"])]), io("div", xu, [(Zr(), eo(Hr, null, Es([0, 50, 100, 150], (t4) => io("button", { key: "av" + t4, type: "button", class: W(["speed-chip h-8 rounded-lg text-[12px]", { active: e22.volume === t4 }]), disabled: e22.exporting || !e22.editorVisible, onClick: (e32) => o22(t4) }, Z(t4) + "% ", 11, wu)), 64))]), io("div", ku2, [u2[22] || (u2[22] = io("span", null, "静音预览", -1)), lo(v22, { "model-value": e22.muted, size: "small", disabled: e22.exporting || !e22.editorVisible, "onUpdate:modelValue": s22 }, null, 8, ["model-value", "disabled"])]), io("div", Mu, [u2[23] || (u2[23] = io("span", null, "响度归一化", -1)), lo(v22, { "model-value": e22.normalize, size: "small", disabled: e22.exporting || !e22.editorVisible, "onUpdate:modelValue": u2[10] || (u2[10] = (e32) => a2("update:normalize", e32)) }, null, 8, ["model-value", "disabled"])]), u2[26] || (u2[26] = io("div", { class: "text-[12px] font-medium", style: { color: "var(--d-label)" } }, " 淡入淡出 ", -1)), io("label", Cu, [io("div", Su, [u2[24] || (u2[24] = io("span", null, "淡入", -1)), io("span", null, Z(e22.fadeIn.toFixed(1)) + "s", 1)]), lo(c22, { "model-value": e22.fadeIn, min: 0, max: 10, step: 0.1, "show-tooltip": !1, size: "small", disabled: e22.exporting || !e22.editorVisible, "onUpdate:modelValue": u2[11] || (u2[11] = (e32) => a2("update:fadeIn", e32)) }, null, 8, ["model-value", "disabled"])]), io("label", Tu, [io("div", Uu, [u2[25] || (u2[25] = io("span", null, "淡出", -1)), io("span", null, Z(e22.fadeOut.toFixed(1)) + "s", 1)]), lo(c22, { "model-value": e22.fadeOut, min: 0, max: 10, step: 0.1, "show-tooltip": !1, size: "small", disabled: e22.exporting || !e22.editorVisible, "onUpdate:modelValue": u2[12] || (u2[12] = (e32) => a2("update:fadeOut", e32)) }, null, 8, ["model-value", "disabled"])]), u2[27] || (u2[27] = io("div", { class: "text-[12px] d-label-2" }, "曲线", -1)), io("div", Iu, [(Zr(!0), eo(Hr, null, Es(Lt(i2), (t4) => (Zr(), eo("button", { key: t4, type: "button", class: W(["speed-chip h-8 rounded-lg text-[12px]", { active: e22.fadeCurve === t4 }]), disabled: e22.exporting || !e22.editorVisible, onClick: (e32) => a2("update:fadeCurve", t4) }, Z(t4), 11, zu))), 128))]), io("button", { type: "button", class: "w-full h-8 rounded-lg text-[12px] field-input", disabled: e22.exporting || !e22.editorVisible, onClick: r2 }, " 清除淡入淡出 ", 8, Ru2)])], 512), [[di, e22.activeTool === "sound"]])])])]);
  };
} }, [["__scopeId", "data-v-3c9cbcda"]]), Nu2 = { class: "gap-y-2.5 flex flex-col" }, Fu = { class: "setting-row" }, Bu = { class: "setting-row" }, Au = { class: "setting-row" }, Vu = { class: "setting-row" }, $u = /* @__PURE__ */ o({ __name: "ExportSettings", props: { form: { type: Object, required: !0 }, sampleRateList: { type: Array, default: () => [] }, disabled: { type: Boolean, default: !1 } }, setup: (e22) => (t22, a2) => {
  let l22 = dv, i2 = uv;
  return Zr(), eo("div", Nu2, [io("div", Fu, [a2[4] || (a2[4] = io("span", { class: "setting-label" }, "输出格式", -1)), lo(i2, { class: "setting-select", modelValue: e22.form.format, "onUpdate:modelValue": a2[0] || (a2[0] = (t32) => e22.form.format = t32), size: "small", disabled: e22.disabled }, { default: mn(() => [(Zr(!0), eo(Hr, null, Es(Lt(du), (e32) => (Zr(), to(l22, { key: e32.title, label: e32.title, value: e32.title }, null, 8, ["label", "value"]))), 128))]), _: 1 }, 8, ["modelValue", "disabled"])]), io("div", Bu, [a2[5] || (a2[5] = io("span", { class: "setting-label" }, "音频质量", -1)), lo(i2, { class: "setting-select", modelValue: e22.form.bitRate, "onUpdate:modelValue": a2[1] || (a2[1] = (t32) => e22.form.bitRate = t32), size: "small", placeholder: "默认", disabled: e22.disabled }, { default: mn(() => [lo(l22, { label: "默认", value: "" }), (Zr(!0), eo(Hr, null, Es(Lt(pu), (e32) => (Zr(), to(l22, { key: e32, label: e32, value: e32 }, null, 8, ["label", "value"]))), 128))]), _: 1 }, 8, ["modelValue", "disabled"])]), io("div", Au, [a2[6] || (a2[6] = io("span", { class: "setting-label" }, "采样率", -1)), lo(i2, { class: "setting-select", modelValue: e22.form.sampleRate, "onUpdate:modelValue": a2[2] || (a2[2] = (t32) => e22.form.sampleRate = t32), size: "small", placeholder: "默认", disabled: e22.disabled }, { default: mn(() => [lo(l22, { label: "默认", value: "" }), (Zr(!0), eo(Hr, null, Es(e22.sampleRateList, (e32) => (Zr(), to(l22, { key: e32, label: e32, value: e32 }, null, 8, ["label", "value"]))), 128))]), _: 1 }, 8, ["modelValue", "disabled"])]), io("div", Vu, [a2[7] || (a2[7] = io("span", { class: "setting-label" }, "声道", -1)), lo(i2, { class: "setting-select", modelValue: e22.form.channel, "onUpdate:modelValue": a2[3] || (a2[3] = (t32) => e22.form.channel = t32), size: "small", placeholder: "默认", disabled: e22.disabled }, { default: mn(() => [lo(l22, { label: "默认", value: "" }), lo(l22, { label: "单声道", value: "1" }), lo(l22, { label: "双声道", value: "2" })]), _: 1 }, 8, ["modelValue", "disabled"])])]);
} }, [["__scopeId", "data-v-e1568db7"]]), Du = { class: "flex-1 min-h-0 w-full flex gap-3" }, Lu = { class: "w-[248px] shrink-0 flex flex-col min-h-0 gap-2.5" }, Eu = { name: "MediaBoxAudioCut" }, ju2 = [{ id: "video-convert", label: "视频转换", icon: Mt2, name: "视频转换", subtitle: "支持MP4、AVI、MPG、MOV、FLV、3GP、WEBM、MKV、WMV、GIF在线互转", component: $l }, { id: "video-cut", label: "视频剪切", icon: zt, name: "视频剪切", subtitle: "视频剪辑，支持裁切、翻转、旋转、分辨率、倍速、循环、缩放等处理", component: nr }, { id: "audio-convert", label: "音频转换", icon: vo, name: "音频转换", subtitle: "支持mp3、wav、ogg、ac3、flac、opus、pcm、m4a、aac在线互转", component: Yl }, { id: "audio-cut", label: "音频剪切", icon: ho, name: "音频剪切", subtitle: "可视化音频剪辑，支持音频调速、循环、修剪、音量调整", component: Object.assign(Eu, { setup(e22) {
  let t22 = dt(Xr()), a2 = Et();
  function l22() {
    var e32, l32;
    t22.audioEl = ((l32 = (e32 = a2.value) == null ? void 0 : e32.getAudioEl) == null ? void 0 : l32.call(e32)) || null;
  }
  function i2() {
    l22(), t22.onLoadedMeta();
  }
  function n2(e32) {
    t22.volume = e32, e32 > 0 && (t22.muted = !1), t22.applyVolume();
  }
  function o22(e32) {
    t22.volume = e32, t22.applyVolume();
  }
  function s22(e32) {
    t22.muted = e32, t22.applyVolume();
  }
  function r2({ kind: e32, ratio: a3 }) {
    let l32 = t22.duration || 0;
    if (!l32) return;
    let i3 = Math.min(0.1, l32), n3 = Math.min(l32, Math.max(0, a3 * l32));
    if (e32 === "start") t22.clampTrim(Math.min(n3, t22.trimEnd - i3), t22.trimEnd);
    else if (e32 === "end") t22.clampTrim(t22.trimStart, Math.max(n3, t22.trimStart + i3));
    else if (e32 === "seek") {
      let e42 = t22.audioEl, a4 = Math.min(t22.trimEnd, Math.max(t22.trimStart, n3));
      e42 && (e42.currentTime = a4), t22.currentTime = a4, t22.applyVolume();
    }
  }
  function u2() {
    t22.editorVisible && t22.reset(), on(() => {
      var e32, t32;
      (t32 = (e32 = a2.value) == null ? void 0 : e32.openPicker) == null || t32.call(e32);
    });
  }
  return Fr(() => t22.editorVisible, async (e32) => {
    e32 && (await on(), l22());
  }), fs(() => {
    l22();
  }), (e32, l32) => (Zr(), eo("div", Du, [lo(Vr, { ref_key: "waveRef", ref: a2, meta: Lt($r), "editor-visible": t22.editorVisible, "file-name": t22.fileName, "file-meta": t22.fileMeta, "object-url": t22.objectUrl, "wave-heights": t22.waveHeights, duration: t22.displayDuration, "trim-start-pct": t22.trimStartPct, "trim-end-pct": t22.trimEndPct, "trim-width-pct": t22.trimWidthPct, "trim-start-short": t22.trimStartShort, "trim-end-short": t22.trimEndShort, "progress-pct": t22.progressPct, "playhead-label": t22.playheadLabel, "clock-text": t22.clockText, playing: t22.playing, "onUpdate:playing": l32[0] || (l32[0] = (e42) => t22.playing = e42), volume: t22.volume, muted: t22.muted, preparing: t22.preparing, "preparing-progress": t22.preparingProgress, "preparing-label": t22.preparingLabel, onLoadFile: t22.loadFile, onLoadedMeta: i2, onTimeUpdate: t22.onTimeUpdate, onTogglePlay: t22.togglePlay, onSeek: t22.seekTo, onTrimDrag: r2, onPreviewVolume: n2 }, null, 8, ["meta", "editor-visible", "file-name", "file-meta", "object-url", "wave-heights", "duration", "trim-start-pct", "trim-end-pct", "trim-width-pct", "trim-start-short", "trim-end-short", "progress-pct", "playhead-label", "clock-text", "playing", "volume", "muted", "preparing", "preparing-progress", "preparing-label", "onLoadFile", "onTimeUpdate", "onTogglePlay", "onSeek"]), io("aside", Lu, [lo(Pu, { "active-tool": t22.activeTool, "onUpdate:activeTool": l32[1] || (l32[1] = (e42) => t22.activeTool = e42), "trim-start-text": t22.trimStartText, "onUpdate:trimStartText": l32[2] || (l32[2] = (e42) => t22.trimStartText = e42), "trim-end-text": t22.trimEndText, "onUpdate:trimEndText": l32[3] || (l32[3] = (e42) => t22.trimEndText = e42), "keep-pitch": t22.keepPitch, "onUpdate:keepPitch": l32[4] || (l32[4] = (e42) => t22.keepPitch = e42), normalize: t22.normalize, "onUpdate:normalize": l32[5] || (l32[5] = (e42) => t22.normalize = e42), "fade-in": t22.fadeIn, "onUpdate:fadeIn": l32[6] || (l32[6] = (e42) => t22.fadeIn = e42), "fade-out": t22.fadeOut, "onUpdate:fadeOut": l32[7] || (l32[7] = (e42) => t22.fadeOut = e42), "fade-curve": t22.fadeCurve, "onUpdate:fadeCurve": l32[8] || (l32[8] = (e42) => t22.fadeCurve = e42), "editor-visible": t22.editorVisible, exporting: t22.exporting || t22.preparing, "trim-duration-text": t22.trimDurationText, speed: t22.speed, "speed-label": t22.speedLabel, volume: t22.volume, muted: t22.muted, onReupload: u2, onApplyTrimTexts: t22.applyTrimTexts, onTrimPreset: t22.setTrimPreset, onResetTrim: t22.resetTrim, onSetSpeed: t22.setSpeed, onSetVolume: o22, onSetMuted: s22 }, null, 8, ["active-tool", "trim-start-text", "trim-end-text", "keep-pitch", "normalize", "fade-in", "fade-out", "fade-curve", "editor-visible", "exporting", "trim-duration-text", "speed", "speed-label", "volume", "muted", "onApplyTrimTexts", "onTrimPreset", "onResetTrim", "onSetSpeed"]), lo(sl2, { title: "输出设置", embedded: "", "start-icon": "cut", busy: t22.exporting || t22.preparing, done: !1, "start-label": t22.exportLabel, onStart: t22.exportAudio }, { default: mn(() => [lo($u, { form: t22.exportForm, "sample-rate-list": t22.sampleRateList, disabled: t22.exporting || t22.preparing }, null, 8, ["form", "sample-rate-list", "disabled"])]), _: 1 }, 8, ["busy", "start-label", "onStart"])])]));
} }) }];
function _u(e22) {
  return ju2.find((t22) => t22.id === e22) || ju2[0];
}
var Ou = { class: "w-[176px] shrink-0 flex flex-col pt-5 pb-4 px-3 border-r media-aside" }, Wu = { class: "flex items-center gap-2.5 px-1 mb-5" }, Hu = { class: "size-10 rounded-xl grid place-items-center text-white", style: { background: "var(--primary-color)" } }, qu = { class: "nav-item flex items-center gap-2.5" }, Yu = { class: "glass-panel relative mx-0.5 rounded-[14px] px-3 pt-8 pb-3 shrink-0" }, Xu = { class: "absolute -top-4 left-1/2 -translate-x-1/2 size-9 rounded-full text-white grid place-items-center", style: { background: "var(--primary-color)" } }, Gu = /* @__PURE__ */ o({ __name: "AppSidebar", props: { tools: { type: Array, required: !0 }, activeId: { type: String, required: !0 }, disabled: { type: Boolean, default: !1 } }, emits: ["change"], setup(e22, { emit: t22 }) {
  let a2 = e22, l22 = t22;
  function i2(e32) {
    a2.disabled && e32 !== a2.activeId || l22("change", e32);
  }
  return (t32, a3) => (Zr(), eo("aside", Ou, [io("div", Wu, [io("div", Hu, [lo(Lt(wt), { class: "size-[18px]" })]), a3[0] || (a3[0] = io("div", { class: "min-w-0" }, [io("div", { class: "text-[15px] font-bold leading-tight", style: { color: "var(--primary-color)" } }, " 媒体工具箱 "), io("div", { class: "text-[10px] mt-0.5 whitespace-nowrap", style: { color: "var(--d-label-2)" } }, " 随心剪映·自由转码 ")], -1))]), lo(b, { class: W(["media-nav flex-1 min-h-0 overflow-auto custom-scroll pb-3", { "is-disabled": e22.disabled }]), "model-value": e22.activeId, data: e22.tools, style: { "--padding": "10px 12px", "--margin": "4px 0", "--fontSize": "14px", "--bg-radius": "16px", "--active-bg": "var(--d-bg-inset)", "--active-color": "var(--primary-color)" }, "onUpdate:modelValue": i2 }, { default: mn(({ row: e32 }) => [io("span", qu, [(Zr(), to(ws(e32.icon), { class: "size-[18px] shrink-0" })), uo(" " + Z(e32.label), 1)])]), _: 1 }, 8, ["class", "model-value", "data"]), io("div", Yu, [io("span", Xu, [lo(Lt(na), { class: "size-4" })]), a3[1] || (a3[1] = io("div", { class: "text-[12px] font-semibold mb-1", style: { color: "var(--d-label)" } }, " 本地处理 ", -1)), a3[2] || (a3[2] = io("div", { class: "text-[11px] leading-4", style: { color: "var(--d-label-2)" } }, [uo(" 不上传服务器"), io("br"), uo("保护你的隐私安全 ")], -1))])]));
} }, [["__scopeId", "data-v-5fe1d111"]]), Ku = { class: "flex items-start justify-between mb-3" }, Ju = { class: "flex flex-col gap-y-2.5 max-h-[320px] overflow-auto custom-scroll pr-0.5" }, Zu = { key: 0, class: "py-8 text-center text-[12px] d-label-2" }, Qu = { class: "flex gap-2.5" }, ed = { class: "size-8 rounded-lg grid place-items-center shrink-0 task-icon" }, td = { class: "min-w-0 flex-1" }, ad = { class: "text-[12px] truncate", style: { color: "var(--d-label)" } }, ld = { class: "text-[11px] mt-0.5 d-label-2" }, id = { class: "flex items-center justify-between mt-1.5" }, nd2 = { class: "text-[10px] d-label-2" }, od = /* @__PURE__ */ o({ __name: "RecentTasks", setup(e22) {
  let { recent: t22 } = Fl();
  return (e32, a2) => (Zr(), eo("div", { class: "relative flex items-center gap-2", onClick: a2[2] || (a2[2] = sl(() => {
  }, ["stop"])) }, [yn(io("div", { class: "absolute top-10 right-0 z-40 w-[280px] rounded-2xl p-3 recent-panel", onClick: a2[1] || (a2[1] = sl(() => {
  }, ["stop"])) }, [io("div", Ku, [a2[4] || (a2[4] = io("div", null, [io("div", { class: "text-[13px] font-medium", style: { color: "var(--d-label)" } }, " 最近任务 (本机) "), io("div", { class: "text-[11px] mt-0.5 d-label-2" }, "仅保存在你的设备中")], -1)), io("button", { type: "button", class: "text-[12px] flex items-center gap-1 d-label-2", onClick: a2[0] || (a2[0] = (e42) => Lt(t22).clear()) }, [lo(Lt(s2), { class: "size-[13px]" }), a2[3] || (a2[3] = uo(" 清空 "))])]), io("div", Ju, [Lt(t22).list.length ? po("", !0) : (Zr(), eo("div", Zu, " 暂无最近任务 ")), (Zr(!0), eo(Hr, null, Es(Lt(t22).list, (e42, t32) => (Zr(), eo("article", { key: t32, class: "rounded-xl p-2.5 task-card" }, [io("div", Qu, [io("div", ed, [(Zr(), to(ws(e42.icon), { class: "size-4" }))]), io("div", td, [io("div", ad, Z(e42.name), 1), io("div", ld, Z(e42.desc), 1), io("div", id, [a2[5] || (a2[5] = io("span", { class: "text-[11px] text-emerald-500" }, "● 已完成", -1)), io("span", nd2, Z(e42.time), 1)])])])]))), 128))]), a2[6] || (a2[6] = io("p", { class: "mt-3 text-[10px] leading-4 d-label-2" }, " 任务仅保存在你的设备中，关闭页面后消失 ", -1))], 512), [[di, Lt(t22).open]])]));
} }, [["__scopeId", "data-v-03613a8b"]]), sd = { class: "flex items-start justify-between mb-3 pr-24" }, rd = { class: "text-[18px] font-semibold leading-none", style: { color: "var(--d-label)" } }, ud = { class: "mt-1.5 text-[12px] d-label-2" }, dd = { __name: "AppHeader", props: { title: { type: String, default: "" }, subtitle: { type: String, default: "" } }, setup: (e22) => (t22, a2) => (Zr(), eo("header", sd, [io("div", null, [io("h1", rd, Z(e22.title), 1), io("p", ud, Z(e22.subtitle), 1)]), Os(t22.$slots, "actions", {}, () => [lo(od)])])) }, cd = { class: "flex-1 min-w-0 flex flex-col px-4 pt-3 pb-4 media-main" }, vd = { class: "flex-1 min-h-0 flex" }, pd = "video-cut", md = /* @__PURE__ */ o({ __name: "Content", setup(e22) {
  let { busy: t22, recent: a2 } = Nl(), l22 = Et((function() {
    let e32 = fo();
    return e32 && _u(e32) ? e32 : Fe() || Oe() ? pd : ju2[0].id;
  })()), i2 = $o(() => _u(l22.value)), n2 = $o(() => t22.value || Pe.status === "running");
  function o22() {
    l22.value = pd, a2.close();
  }
  function s22(e32) {
    n2.value && e32 !== l22.value || (l22.value = e32, a2.close());
  }
  function r2() {
    a2.close();
  }
  return Fr(uo2, (e32) => {
    e32 && _u(e32) && (n2.value && e32 !== l22.value || (fo(), l22.value = e32, a2.close()));
  }), fs(() => {
    (Fe() || Oe()) && o22();
  }), Fr(() => Pe.status, (e32) => {
    e32 === "running" && o22();
  }), hs(() => {
    Fe() || bu.terminate();
  }), (e32, t32) => (Zr(), eo("div", { class: "media-box w-full h-full flex overflow-hidden", onClick: r2 }, [lo(Gu, { tools: Lt(ju2), "active-id": l22.value, disabled: n2.value, onChange: s22 }, null, 8, ["tools", "active-id", "disabled"]), io("main", cd, [lo(dd, { title: i2.value.name, subtitle: i2.value.subtitle }, null, 8, ["title", "subtitle"]), io("div", vd, [(Zr(), to(es, null, [(Zr(), to(ws(i2.value.component), { key: l22.value }))], 1024))])])]));
} }, [["__scopeId", "data-v-1ccfb846"]]);

// output/native-current/index-joX5KwTZ.js
var m2 = { __name: "index", setup: (m22) => (m3, j2) => {
  let a = F;
  return Zr(), to(a, { class: "media-box-dialog", height: "720px", width: "1200px", destroyOnClose: !0, openWindow: !0, glass: !1 }, { default: mn(() => [lo(md, H(co(m3.$attrs)), null, 16)]), _: 1 });
} };
export {
  m2 as default
};
/**
 * @license @tabler/icons-vue v3.46.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
