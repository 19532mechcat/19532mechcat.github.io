                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "refreshReducer", {
    enumerable: !0,
    get: function () {
      return refreshReducer;
    }
  });
  let r = n(12617),
    a = n(90477),
    i = n(70267),
    o = n(76237),
    s = n(23660),
    u = n(48636),
    l = n(69792),
    p = n(18968),
    m = n(61847),
    _ = n(48208);
  function refreshReducer(e, t) {
    let {
        cache: n,
        mutable: v,
        origin: b
      } = t,
      E = e.canonicalUrl,
      w = e.tree,
      C = JSON.stringify(v.previousTree) === JSON.stringify(w);
    if (C) return (0, p.handleMutable)(e, v);
    n.data || (n.data = (0, a.createRecordFromThenable)((0, r.fetchServerResponse)(new URL(E, b), [w[0], w[1], w[2], "refetch"], e.nextUrl, e.buildId)));
    let [j, A] = (0, i.readRecordValue)(n.data);
    if ("string" == typeof j) return (0, l.handleExternalUrl)(e, v, j, e.pushRef.pendingPush);
    for (let t of (n.data = null, j)) {
      if (3 !== t.length) return console.log("REFRESH FAILED"), e;
      let [r] = t,
        a = (0, s.applyRouterStatePatchToTree)([""], w, r);
      if (null === a) throw Error("SEGMENT MISMATCH");
      if ((0, u.isNavigatingToNewRootLayout)(w, a)) return (0, l.handleExternalUrl)(e, v, E, e.pushRef.pendingPush);
      let i = A ? (0, o.createHrefFromUrl)(A) : void 0;
      A && (v.canonicalUrl = i);
      let [p, b] = t.slice(-2);
      null !== p && (n.status = m.CacheStates.READY, n.subTreeData = p, (0, _.fillLazyItemsTillLeafWithHead)(n, void 0, r, b), v.cache = n, v.prefetchCache = new Map()), v.previousTree = w, v.patchedTree = a, v.canonicalUrl = E, w = a;
    }
    return (0, p.handleMutable)(e, v);
  }
  ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
    value: !0
  }), Object.assign(t.default, t), e.exports = t.default);
});
