                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "findHeadInCache", {
    enumerable: !0,
    get: function () {
      return function findHeadInCache(e, t) {
        let n = 0 === Object.keys(t).length;
        if (n) return e.head;
        for (let n in t) {
          let [a, i] = t[n],
            o = e.parallelRoutes.get(n);
          if (!o) continue;
          let s = (0, r.createRouterCacheKey)(a),
            u = o.get(s);
          if (!u) continue;
          let l = findHeadInCache(u, i);
          if (l) return l;
        }
      };
    }
  });
  let r = n(94956);
  ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
    value: !0
  }), Object.assign(t.default, t), e.exports = t.default);
});
