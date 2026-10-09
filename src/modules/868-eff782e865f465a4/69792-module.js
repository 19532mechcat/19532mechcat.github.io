                                                                                                            
                                                    
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
    handleExternalUrl: function () {
      return handleExternalUrl;
    },
    navigateReducer: function () {
      return navigateReducer;
    }
  });
  let r = n(61847),
    a = n(12617),
    i = n(90477),
    o = n(70267),
    s = n(76237),
    u = n(60345),
    l = n(29020),
    p = n(81010),
    m = n(23660),
    _ = n(92897),
    v = n(48636),
    b = n(12212),
    E = n(18968),
    w = n(32877),
    C = n(28817),
    j = n(89542),
    A = n(21964);
  function handleExternalUrl(e, t, n, r) {
    return t.previousTree = e.tree, t.mpaNavigation = !0, t.canonicalUrl = n, t.pendingPush = r, t.scrollableSegments = void 0, (0, E.handleMutable)(e, t);
  }
  function generateSegmentsFromPatch(e) {
    let t = [],
      [n, r] = e;
    if (0 === Object.keys(r).length) return [[n]];
    for (let [e, a] of Object.entries(r)) for (let r of generateSegmentsFromPatch(a)) "" === n ? t.push([e, ...r]) : t.push([n, e, ...r]);
    return t;
  }
  function navigateReducer(e, t) {
    let {
        url: n,
        isExternalUrl: D,
        navigateType: F,
        cache: U,
        mutable: $,
        forceOptimisticNavigation: B,
        shouldScroll: q
      } = t,
      {
        pathname: z,
        hash: K
      } = n,
      ee = (0, s.createHrefFromUrl)(n),
      et = "push" === F;
    (0, j.prunePrefetchCache)(e.prefetchCache);
    let en = JSON.stringify($.previousTree) === JSON.stringify(e.tree);
    if (en) return (0, E.handleMutable)(e, $);
    if (D) return handleExternalUrl(e, $, n.toString(), et);
    let er = e.prefetchCache.get((0, s.createHrefFromUrl)(n, !1));
    if (B && (null == er ? void 0 : er.kind) !== b.PrefetchKind.TEMPORARY) {
      let t = z.split("/");
      t.push("__PAGE__");
      let o = (0, p.createOptimisticTree)(t, e.tree, !1),
        u = {
          ...U
        };
      u.status = r.CacheStates.READY, u.subTreeData = e.cache.subTreeData, u.parallelRoutes = new Map(e.cache.parallelRoutes);
      let m = null,
        _ = t.slice(1).map(e => ["children", e]).flat(),
        v = (0, l.fillCacheWithDataProperty)(u, e.cache, _, () => (m || (m = (0, i.createRecordFromThenable)((0, a.fetchServerResponse)(n, o, e.nextUrl, e.buildId))), m), !0);
      if (!(null == v ? void 0 : v.bailOptimistic)) return $.previousTree = e.tree, $.patchedTree = o, $.pendingPush = et, $.hashFragment = K, $.shouldScroll = q, $.scrollableSegments = [], $.cache = u, $.canonicalUrl = ee, e.prefetchCache.set((0, s.createHrefFromUrl)(n, !1), {
        data: m ? (0, i.createRecordFromThenable)(Promise.resolve(m)) : null,
        kind: b.PrefetchKind.TEMPORARY,
        prefetchTime: Date.now(),
        treeAtTimeOfPrefetch: e.tree,
        lastUsedTime: Date.now()
      }), (0, E.handleMutable)(e, $);
    }
    if (!er) {
      let t = (0, i.createRecordFromThenable)((0, a.fetchServerResponse)(n, e.tree, e.nextUrl, e.buildId, void 0)),
        r = {
          data: (0, i.createRecordFromThenable)(Promise.resolve(t)),
          kind: b.PrefetchKind.TEMPORARY,
          prefetchTime: Date.now(),
          treeAtTimeOfPrefetch: e.tree,
          lastUsedTime: null
        };
      e.prefetchCache.set((0, s.createHrefFromUrl)(n, !1), r), er = r;
    }
    let ea = (0, C.getPrefetchEntryCacheStatus)(er),
      {
        treeAtTimeOfPrefetch: ei,
        data: eo
      } = er;
    A.prefetchQueue.bump(eo);
    let [es, eu] = (0, o.readRecordValue)(eo);
    if (er.lastUsedTime || (er.lastUsedTime = Date.now()), "string" == typeof es) return handleExternalUrl(e, $, es, et);
    let el = e.tree,
      ec = e.cache,
      ed = [];
    for (let t of es) {
      let o = t.slice(0, -4),
        s = t.slice(-3)[0],
        p = ["", ...o],
        b = (0, m.applyRouterStatePatchToTree)(p, el, s);
      if (null === b && (b = (0, m.applyRouterStatePatchToTree)(p, ei, s)), null !== b) {
        if ((0, v.isNavigatingToNewRootLayout)(el, b)) return handleExternalUrl(e, $, ee, et);
        let m = (0, w.applyFlightData)(ec, U, t, "auto" === er.kind && ea === C.PrefetchCacheEntryStatus.reusable);
        m || ea !== C.PrefetchCacheEntryStatus.stale || (m = function (e, t, n, a, i) {
          let o = !1;
          e.status = r.CacheStates.READY, e.subTreeData = t.subTreeData, e.parallelRoutes = new Map(t.parallelRoutes);
          let s = generateSegmentsFromPatch(a).map(e => [...n, ...e]);
          for (let n of s) {
            let r = (0, l.fillCacheWithDataProperty)(e, t, n, i);
            (null == r ? void 0 : r.bailOptimistic) || (o = !0);
          }
          return o;
        }(U, ec, o, s, () => (0, i.createRecordFromThenable)((0, a.fetchServerResponse)(n, el, e.nextUrl, e.buildId))));
        let E = (0, _.shouldHardNavigate)(p, el);
        for (let e of (E ? (U.status = r.CacheStates.READY, U.subTreeData = ec.subTreeData, (0, u.invalidateCacheBelowFlightSegmentPath)(U, ec, o), $.cache = U) : m && ($.cache = U), ec = U, el = b, generateSegmentsFromPatch(s))) {
          let t = [...o, ...e];
          "__DEFAULT__" !== t[t.length - 1] && ed.push(t);
        }
      }
    }
    return $.previousTree = e.tree, $.patchedTree = el, $.canonicalUrl = eu ? (0, s.createHrefFromUrl)(eu) : ee, $.pendingPush = et, $.scrollableSegments = ed, $.hashFragment = K, $.shouldScroll = q, (0, E.handleMutable)(e, $);
  }
  ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
    value: !0
  }), Object.assign(t.default, t), e.exports = t.default);
});
