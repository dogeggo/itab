// output/native-current/preload-helper-Bj79fh9f.js
var e = {}, t = function(t2, n, r) {
  let o = Promise.resolve();
  if (n && n.length > 0) {
    let t3 = function(e2) {
      return Promise.all(e2.map((e3) => Promise.resolve(e3).then((e4) => ({ status: "fulfilled", value: e4 }), (e4) => ({ status: "rejected", reason: e4 }))));
    };
    document.getElementsByTagName("link");
    let r2 = document.querySelector("meta[property=csp-nonce]"), s2 = r2?.nonce || r2?.getAttribute("nonce");
    o = t3(n.map((t4) => {
      if ((t4 = (function(e2) {
        return "/original/" + e2;
      })(t4)) in e) return;
      e[t4] = !0;
      let n2 = t4.endsWith(".css"), r3 = n2 ? '[rel="stylesheet"]' : "";
      if (document.querySelector(`link[href="${t4}"]${r3}`)) return;
      let o2 = document.createElement("link");
      return o2.rel = n2 ? "stylesheet" : "modulepreload", n2 || (o2.as = "script"), o2.crossOrigin = "", o2.href = t4, s2 && o2.setAttribute("nonce", s2), document.head.appendChild(o2), n2 ? new Promise((e2, n3) => {
        o2.addEventListener("load", e2), o2.addEventListener("error", () => n3(new Error(`Unable to preload CSS for ${t4}`)));
      }) : void 0;
    }));
  }
  function s(e2) {
    let t3 = new Event("vite:preloadError", { cancelable: !0 });
    if (t3.payload = e2, window.dispatchEvent(t3), !t3.defaultPrevented) throw e2;
  }
  return o.then((e2) => {
    for (let t3 of e2 || []) t3.status === "rejected" && s(t3.reason);
    return t2().catch(s);
  });
};

export {
  t
};
