                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "shouldHardNavigate", {
    enumerable: !0,
    get: function () {
      return function shouldHardNavigate(e, t) {
        let [n, a] = t,
          [i, o] = e;
        if (!(0, r.matchSegment)(i, n)) return !!Array.isArray(i);
        let s = e.length <= 2;
        return !s && shouldHardNavigate(e.slice(2), a[o]);
      };
    }
  });
  let r = n(67365);
  ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
    value: !0
  }), Object.assign(t.default, t), e.exports = t.default);
});
