                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "invalidateCacheBelowFlightSegmentPath", {
    enumerable: !0,
    get: function () {
      return function invalidateCacheBelowFlightSegmentPath(e, t, n) {
        let a = n.length <= 2,
          [i, o] = n,
          s = (0, r.createRouterCacheKey)(o),
          u = t.parallelRoutes.get(i);
        if (!u) return;
        let l = e.parallelRoutes.get(i);
        if (l && l !== u || (l = new Map(u), e.parallelRoutes.set(i, l)), a) {
          l.delete(s);
          return;
        }
        let p = u.get(s),
          m = l.get(s);
        m && p && (m === p && (m = {
          status: m.status,
          data: m.data,
          subTreeData: m.subTreeData,
          parallelRoutes: new Map(m.parallelRoutes)
        }, l.set(s, m)), invalidateCacheBelowFlightSegmentPath(m, p, n.slice(2)));
      };
    }
  });
  let r = n(94956);
  ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
    value: !0
  }), Object.assign(t.default, t), e.exports = t.default);
});
