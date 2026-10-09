                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "fillCacheWithNewSubTreeData", {
    enumerable: !0,
    get: function () {
      return function fillCacheWithNewSubTreeData(e, t, n, s) {
        let u = n.length <= 5,
          [l, p] = n,
          m = (0, o.createRouterCacheKey)(p),
          _ = t.parallelRoutes.get(l);
        if (!_) return;
        let v = e.parallelRoutes.get(l);
        v && v !== _ || (v = new Map(_), e.parallelRoutes.set(l, v));
        let b = _.get(m),
          E = v.get(m);
        if (u) {
          E && E.data && E !== b || (E = {
            status: r.CacheStates.READY,
            data: null,
            subTreeData: n[3],
            parallelRoutes: b ? new Map(b.parallelRoutes) : new Map()
          }, b && (0, a.invalidateCacheByRouterState)(E, b, n[2]), (0, i.fillLazyItemsTillLeafWithHead)(E, b, n[2], n[4], s), v.set(m, E));
          return;
        }
        E && b && (E === b && (E = {
          status: E.status,
          data: E.data,
          subTreeData: E.subTreeData,
          parallelRoutes: new Map(E.parallelRoutes)
        }, v.set(m, E)), fillCacheWithNewSubTreeData(E, b, n.slice(2), s));
      };
    }
  });
  let r = n(61847),
    a = n(78402),
    i = n(48208),
    o = n(94956);
  ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
    value: !0
  }), Object.assign(t.default, t), e.exports = t.default);
});
