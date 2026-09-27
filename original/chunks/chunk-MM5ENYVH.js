import {
  g,
  o,
  s
} from "./chunk-KKRYL5KL.js";
import {
  Hc
} from "./chunk-LEVEZLTX.js";

// output/native-current/poll-Ct5yAqtN.js
function e(r2 = []) {
  let e2 = r2 || [], i2 = e2.some((s2) => o(s2.f13 ?? s2.MktNum));
  return !!e2.some((t2) => {
    let r3 = t2.f13 ?? t2.MktNum;
    return o(r3) || !s(r3) && r3 != null && r3 !== "";
  }) && g({ hk: i2 }) === "open";
}
function i({ list: o2 = [], firstInited: s2 = "", codes: t2 } = {}) {
  let i2 = (t2 || (o2 || []).map(Hc).filter(Boolean)).join(",");
  return !s2 || i2 !== s2 || e(o2);
}

export {
  e,
  i
};
