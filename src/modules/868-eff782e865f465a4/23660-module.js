                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "applyRouterStatePatchToTree", {
    enumerable: !0,
    get: function () {
      return function applyRouterStatePatchToTree(e, t, n) {
        let a;
        let [i, o,,, s] = t;
        if (1 === e.length) {
          let e = applyPatch(t, n);
          return e;
        }
        let [u, l] = e;
        if (!(0, r.matchSegment)(u, i)) return null;
        let p = 2 === e.length;
        if (p) a = applyPatch(o[l], n);else if (null === (a = applyRouterStatePatchToTree(e.slice(2), o[l], n))) return null;
        let m = [e[0], {
          ...o,
          [l]: a
        }];
        return s && (m[4] = !0), m;
      };
    }
  });
  let r = n(67365);
  function applyPatch(e, t) {
    let [n, a] = e,
      [i, o] = t;
    if ("__DEFAULT__" === i && "__DEFAULT__" !== n) return e;
    if ((0, r.matchSegment)(n, i)) {
      let t = {};
      for (let e in a) {
        let n = void 0 !== o[e];
        n ? t[e] = applyPatch(a[e], o[e]) : t[e] = a[e];
      }
      for (let e in o) t[e] || (t[e] = o[e]);
      let r = [n, t];
      return e[2] && (r[2] = e[2]), e[3] && (r[3] = e[3]), e[4] && (r[4] = e[4]), r;
    }
    return t;
  }
  ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
    value: !0
  }), Object.assign(t.default, t), e.exports = t.default);
});
