import {
  d
} from "./chunk-USGTF4JI.js";

// output/native-current/isPer-CmjOqYyQ.js
var n = ["notifications", "offscreen", "alarms"];
function o(i2) {
  return new Promise((n2) => {
    var o2, e2;
    (e2 = (o2 = window.chrome) == null ? void 0 : o2.permissions) != null && e2.contains ? chrome.permissions.contains({ permissions: i2 }, (i3) => {
      n2(!!i3 && !chrome.runtime.lastError);
    }) : n2(!1);
  });
}
function e() {
  return d() ? typeof Notification < "u" && Notification.permission === "granted" : o(["notifications"]);
}
function r() {
  return d() ? new Promise((i2) => {
    typeof Notification < "u" ? Notification.permission !== "granted" ? Notification.permission !== "denied" ? Notification.requestPermission().then((n2) => i2(n2 === "granted")).catch(() => i2(!1)) : i2(!1) : i2(!0) : i2(!1);
  }) : t().then((i2) => i2.notifications);
}
function t() {
  return d() ? r().then((i2) => ({ notifications: i2, offscreen: !1, alarms: !1 })) : o(n).then((i2) => {
    return i2 ? { notifications: !0, offscreen: !0, alarms: !0 } : (o2 = n, new Promise((i3) => {
      var n2, e2;
      (e2 = (n2 = window.chrome) == null ? void 0 : n2.permissions) != null && e2.request ? chrome.permissions.request({ permissions: o2 }, (n3) => {
        i3(!!n3 && !chrome.runtime.lastError);
      }) : i3(!1);
    })).then((i3) => ({ notifications: i3, offscreen: i3, alarms: i3 }));
    var o2;
  });
}
function s() {
  return d() ? Promise.resolve(!1) : o(["offscreen"]);
}
function a() {
  return d() ? Promise.resolve(!1) : o(["alarms"]);
}
var c = e, f = r;

export {
  e,
  r,
  t,
  s,
  a,
  c,
  f
};
