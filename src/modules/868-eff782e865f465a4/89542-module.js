                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "prunePrefetchCache", {
    enumerable: !0,
    get: function () {
      return prunePrefetchCache;
    }
  });
  let r = n(28817);
  function prunePrefetchCache(e) {
    for (let [t, n] of e) (0, r.getPrefetchEntryCacheStatus)(n) === r.PrefetchCacheEntryStatus.expired && e.delete(t);
  }
  ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
    value: !0
  }), Object.assign(t.default, t), e.exports = t.default);
});
