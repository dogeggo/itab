import {
  Hn,
  jn
} from "./chunk-C3WGXGFI.js";
import {
  u
} from "./chunk-USGTF4JI.js";
import {
  Et,
  dt,
  fs,
  hs
} from "./chunk-E6JHFIG4.js";

// output/native-current/use-ZAOXldfQ.js
function u2() {
  let e2 = dt({ is: !1, aside: !1, state: !1 });
  function a2() {
    e2.is = u || window.innerWidth < 768;
  }
  let i2 = Hn(a2, 300);
  return fs(() => {
    a2(), window.addEventListener("resize", i2);
  }), hs(() => {
    window.removeEventListener("resize", i2);
  }), e2;
}
function c(n2) {
  let s2 = () => typeof n2 == "function" ? n2() : jn(n2), t2 = Et(s2());
  return t2.reset = () => {
    t2.value = s2();
  }, t2;
}

export {
  u2 as u,
  c
};
