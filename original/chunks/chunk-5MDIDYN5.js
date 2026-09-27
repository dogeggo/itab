// output/native-current/engine-DqWqMWCT.js
var t = { type: "hailang", n: "海浪", m: "rgba(3, 25, 56, 0.6)" };
function n(t2 = {}) {
  let n2 = Number(t2.durationMin) || 25, r2 = ["play", "pause", "stop"].includes(t2.status) ? t2.status : "stop", e2 = t2.remainingAtStart != null ? Number(t2.remainingAtStart) : 60 * n2;
  return { status: r2, durationMin: n2, remainingAtStart: Number.isNaN(e2) ? 60 * n2 : e2, startedAt: typeof t2.startedAt == "number" && t2.startedAt > 0 ? t2.startedAt : null, isMute: !!t2.isMute, volume: i(t2.volume), lastVolume: i(t2.lastVolume ?? t2.volume), audio: a(t2.audio) };
}
function a(n2) {
  return n2 && n2.type ? { type: n2.type, n: n2.n || t.n, m: n2.m || t.m } : { ...t };
}
function r(t2, n2 = Date.now()) {
  if (t2.status !== "play" || !t2.startedAt) return Math.max(0, Number(t2.remainingAtStart) || 0);
  let a2 = Math.floor((n2 - t2.startedAt) / 1e3);
  return Math.max(0, t2.remainingAtStart - a2);
}
function e(t2, n2) {
  let a2 = 60 * Number(t2.durationMin);
  if (!a2) return 0;
  let r2 = (a2 - n2) / a2 * 100;
  return Math.min(100, Math.max(0, r2));
}
function u(t2) {
  let n2 = Math.max(0, Math.floor(Number(t2) || 0)), a2 = n2 % 60;
  return Math.floor(n2 / 60).toString().padStart(2, "0") + ":" + a2.toString().padStart(2, "0");
}
function s(t2) {
  let n2 = Number(t2.durationMin) || 25;
  return { ...t2, status: "stop", remainingAtStart: 60 * n2, startedAt: null };
}
function i(t2) {
  let n2 = Number(t2);
  return Number.isNaN(n2) ? 80 : Math.min(100, Math.max(0, Math.round(n2)));
}
function o(t2, n2 = Date.now()) {
  return t2.status !== "play" ? { ...t2 } : { ...t2, remainingAtStart: r(t2, n2), startedAt: null };
}
function m(t2, n2 = Date.now()) {
  return t2.status !== "play" ? t2 : { ...t2, startedAt: n2, remainingAtStart: Math.max(0, Number(t2.remainingAtStart) || 0) };
}
function l(n2, e2, u2 = {}, o2 = Date.now()) {
  switch (e2) {
    case "start":
      return (function(t2, n3 = Date.now()) {
        if (t2.status === "play" && t2.startedAt) return t2;
        let a2 = t2.status === "pause" || t2.status === "play" && !t2.startedAt ? t2.remainingAtStart : 60 * t2.durationMin;
        return { ...t2, status: "play", remainingAtStart: Math.max(0, a2), startedAt: n3 };
      })(n2, o2);
    case "pause":
      return (function(t2, n3 = Date.now()) {
        return t2.status !== "play" ? t2 : { ...t2, status: "pause", remainingAtStart: r(t2, n3), startedAt: null };
      })(n2, o2);
    case "stop":
      return s(n2);
    case "setDuration":
      return (function(t2, n3) {
        if (t2.status !== "stop") return t2;
        let a2 = Math.max(1, Number(n3) || 25);
        return a2 === t2.durationMin ? t2 : { ...t2, durationMin: a2, remainingAtStart: 60 * a2, startedAt: null };
      })(n2, u2.durationMin);
    case "switchAudio":
      return (function(n3, r2) {
        let e3 = a(r2), u3 = n3.audio || t;
        return u3.type === e3.type && u3.n === e3.n && u3.m === e3.m ? n3 : { ...n3, audio: e3 };
      })(n2, u2.audio);
    case "setMute":
      return (function(t2, n3) {
        let a2 = !!n3;
        if (t2.isMute === a2) return t2;
        if (a2) return { ...t2, isMute: !0 };
        let r2 = t2.volume > 0 ? t2.volume : t2.lastVolume || 80;
        return { ...t2, isMute: !1, volume: r2 };
      })(n2, u2.isMute);
    case "setVolume":
      return (function(t2, n3) {
        let a2 = i(n3), r2 = a2 > 0 ? a2 : t2.lastVolume || 80, e3 = a2 === 0;
        return t2.volume === a2 && t2.isMute === e3 && t2.lastVolume === r2 ? t2 : { ...t2, volume: a2, lastVolume: r2, isMute: e3 };
      })(n2, u2.volume);
    default:
      return n2;
  }
}
function c(t2, n2 = Date.now()) {
  let a2 = r(t2, n2);
  return { remaining: a2, percentage: e(t2, a2), showTime: u(a2), snapshot: t2 };
}

export {
  t,
  n,
  a,
  r,
  s,
  o,
  m,
  l,
  c
};
