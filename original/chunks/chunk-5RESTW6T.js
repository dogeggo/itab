import {
  b,
  g
} from "./chunk-YQ4PBQUM.js";

// output/native-current/stocks-WZOnV2zD.js
var o = [{ Code: "002432", MktNum: "0", SecurityTypeName: "深A", SecurityType: "2" }, { Code: "300750", MktNum: "0", SecurityTypeName: "深A", SecurityType: "2" }, { Code: "300075", MktNum: "0", SecurityTypeName: "深A", SecurityType: "2" }], r = g(() => b("stocks", o, { listenToStorageChanges: !1 }));
(function() {
  var e2;
  let t2 = r();
  t2.value instanceof Array || (t2.value = []), (e2 = t2.value) != null && e2.length && t2.value.some((e3) => !(e3 && e3.MktNum && e3.Code)) && (t2.value = t2.value.filter((e3) => e3 && e3.MktNum && e3.Code));
})();

export {
  r
};
