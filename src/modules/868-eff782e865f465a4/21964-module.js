                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), function (e, t) {
    for (var n in t) Object.defineProperty(e, n, {
      enumerable: !0,
      get: t[n]
    });
  }(t, {
    prefetchQueue: function () {
      return p;
    },
    prefetchReducer: function () {
      return prefetchReducer;
    }
  });
  let r = n(76237),
    a = n(12617),
    i = n(12212),
    o = n(90477),
    s = n(89542),
    u = n(50855),
    l = n(32165),
    p = new l.PromiseQueue(5);
  function prefetchReducer(e, t) {
    (0, s.prunePrefetchCache)(e.prefetchCache);
    let {
      url: n
    } = t;
    n.searchParams.delete(u.NEXT_RSC_UNION_QUERY);
    let l = (0, r.createHrefFromUrl)(n, !1),
      m = e.prefetchCache.get(l);
    if (m && (m.kind === i.PrefetchKind.TEMPORARY && e.prefetchCache.set(l, {
      ...m,
      kind: t.kind
    }), !(m.kind === i.PrefetchKind.AUTO && t.kind === i.PrefetchKind.FULL))) return e;
    let _ = (0, o.createRecordFromThenable)(p.enqueue(() => (0, a.fetchServerResponse)(n, e.tree, e.nextUrl, e.buildId, t.kind)));
    return e.prefetchCache.set(l, {
      treeAtTimeOfPrefetch: e.tree,
      data: _,
      kind: t.kind,
      prefetchTime: Date.now(),
      lastUsedTime: null
    }), e;
  }
  ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
    value: !0
  }), Object.assign(t.default, t), e.exports = t.default);
});
