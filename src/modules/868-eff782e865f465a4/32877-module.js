                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "applyFlightData", {
    enumerable: !0,
    get: function () {
      return applyFlightData;
    }
  });
  let r = n(61847),
    a = n(48208),
    i = n(59834);
  function applyFlightData(e, t, n, o) {
    void 0 === o && (o = !1);
    let [s, u, l] = n.slice(-3);
    return null !== u && (3 === n.length ? (t.status = r.CacheStates.READY, t.subTreeData = u, (0, a.fillLazyItemsTillLeafWithHead)(t, e, s, l, o)) : (t.status = r.CacheStates.READY, t.subTreeData = e.subTreeData, t.parallelRoutes = new Map(e.parallelRoutes), (0, i.fillCacheWithNewSubTreeData)(t, e, n, o)), !0);
  }
  ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
    value: !0
  }), Object.assign(t.default, t), e.exports = t.default);
});
