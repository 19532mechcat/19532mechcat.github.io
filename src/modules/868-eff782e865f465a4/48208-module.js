                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "fillLazyItemsTillLeafWithHead", {
    enumerable: !0,
    get: function () {
      return function fillLazyItemsTillLeafWithHead(e, t, n, i, o) {
        let s = 0 === Object.keys(n[1]).length;
        if (s) {
          e.head = i;
          return;
        }
        for (let s in n[1]) {
          let u = n[1][s],
            l = u[0],
            p = (0, a.createRouterCacheKey)(l);
          if (t) {
            let n = t.parallelRoutes.get(s);
            if (n) {
              let t = new Map(n),
                a = t.get(p),
                l = o && a ? {
                  status: a.status,
                  data: a.data,
                  subTreeData: a.subTreeData,
                  parallelRoutes: new Map(a.parallelRoutes)
                } : {
                  status: r.CacheStates.LAZY_INITIALIZED,
                  data: null,
                  subTreeData: null,
                  parallelRoutes: new Map(null == a ? void 0 : a.parallelRoutes)
                };
              t.set(p, l), fillLazyItemsTillLeafWithHead(l, a, u, i, o), e.parallelRoutes.set(s, t);
              continue;
            }
          }
          let m = {
              status: r.CacheStates.LAZY_INITIALIZED,
              data: null,
              subTreeData: null,
              parallelRoutes: new Map()
            },
            _ = e.parallelRoutes.get(s);
          _ ? _.set(p, m) : e.parallelRoutes.set(s, new Map([[p, m]])), fillLazyItemsTillLeafWithHead(m, void 0, u, i, o);
        }
      };
    }
  });
  let r = n(61847),
    a = n(94956);
  ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
    value: !0
  }), Object.assign(t.default, t), e.exports = t.default);
});
