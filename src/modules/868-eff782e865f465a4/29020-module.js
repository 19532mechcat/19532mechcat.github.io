                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "fillCacheWithDataProperty", {
    enumerable: !0,
    get: function () {
      return function fillCacheWithDataProperty(e, t, n, i, o) {
        void 0 === o && (o = !1);
        let s = n.length <= 2,
          [u, l] = n,
          p = (0, a.createRouterCacheKey)(l),
          m = t.parallelRoutes.get(u);
        if (!m || o && t.parallelRoutes.size > 1) return {
          bailOptimistic: !0
        };
        let _ = e.parallelRoutes.get(u);
        _ && _ !== m || (_ = new Map(m), e.parallelRoutes.set(u, _));
        let v = m.get(p),
          b = _.get(p);
        if (s) {
          b && b.data && b !== v || _.set(p, {
            status: r.CacheStates.DATA_FETCH,
            data: i(),
            subTreeData: null,
            parallelRoutes: new Map()
          });
          return;
        }
        if (!b || !v) {
          b || _.set(p, {
            status: r.CacheStates.DATA_FETCH,
            data: i(),
            subTreeData: null,
            parallelRoutes: new Map()
          });
          return;
        }
        return b === v && (b = {
          status: b.status,
          data: b.data,
          subTreeData: b.subTreeData,
          parallelRoutes: new Map(b.parallelRoutes)
        }, _.set(p, b)), fillCacheWithDataProperty(b, v, n.slice(2), i);
      };
    }
  });
  let r = n(61847),
    a = n(94956);
  ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
    value: !0
  }), Object.assign(t.default, t), e.exports = t.default);
});
