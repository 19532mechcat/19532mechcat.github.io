                                                                                                            
                                                    
(function (e, t) {
  "use strict";

  var n, r;
  function getPrefetchEntryCacheStatus(e) {
    let {
      kind: t,
      prefetchTime: n,
      lastUsedTime: r
    } = e;
    return Date.now() < (null != r ? r : n) + 3e4 ? r ? "reusable" : "fresh" : "auto" === t && Date.now() < n + 3e5 ? "stale" : "full" === t && Date.now() < n + 3e5 ? "reusable" : "expired";
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), function (e, t) {
    for (var n in t) Object.defineProperty(e, n, {
      enumerable: !0,
      get: t[n]
    });
  }(t, {
    PrefetchCacheEntryStatus: function () {
      return n;
    },
    getPrefetchEntryCacheStatus: function () {
      return getPrefetchEntryCacheStatus;
    }
  }), (r = n || (n = {})).fresh = "fresh", r.reusable = "reusable", r.expired = "expired", r.stale = "stale", ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
    value: !0
  }), Object.assign(t.default, t), e.exports = t.default);
});
