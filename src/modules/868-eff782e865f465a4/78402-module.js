                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "invalidateCacheByRouterState", {
    enumerable: !0,
    get: function () {
      return invalidateCacheByRouterState;
    }
  });
  let r = n(94956);
  function invalidateCacheByRouterState(e, t, n) {
    for (let a in n[1]) {
      let i = n[1][a][0],
        o = (0, r.createRouterCacheKey)(i),
        s = t.parallelRoutes.get(a);
      if (s) {
        let t = new Map(s);
        t.delete(o), e.parallelRoutes.set(a, t);
      }
    }
  }
  ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
    value: !0
  }), Object.assign(t.default, t), e.exports = t.default);
});
