                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "handleMutable", {
    enumerable: !0,
    get: function () {
      return handleMutable;
    }
  });
  let r = n(47278);
  function handleMutable(e, t) {
    var n, a, i, o;
    let s = null == (a = t.shouldScroll) || a;
    return {
      buildId: e.buildId,
      canonicalUrl: null != t.canonicalUrl ? t.canonicalUrl === e.canonicalUrl ? e.canonicalUrl : t.canonicalUrl : e.canonicalUrl,
      pushRef: {
        pendingPush: null != t.pendingPush ? t.pendingPush : e.pushRef.pendingPush,
        mpaNavigation: null != t.mpaNavigation ? t.mpaNavigation : e.pushRef.mpaNavigation
      },
      focusAndScrollRef: {
        apply: !!s && ((null == t ? void 0 : t.scrollableSegments) !== void 0 || e.focusAndScrollRef.apply),
        onlyHashChange: !!t.hashFragment && e.canonicalUrl.split("#")[0] === (null == (n = t.canonicalUrl) ? void 0 : n.split("#")[0]),
        hashFragment: s ? t.hashFragment && "" !== t.hashFragment ? decodeURIComponent(t.hashFragment.slice(1)) : e.focusAndScrollRef.hashFragment : null,
        segmentPaths: s ? null != (i = null == t ? void 0 : t.scrollableSegments) ? i : e.focusAndScrollRef.segmentPaths : []
      },
      cache: t.cache ? t.cache : e.cache,
      prefetchCache: t.prefetchCache ? t.prefetchCache : e.prefetchCache,
      tree: void 0 !== t.patchedTree ? t.patchedTree : e.tree,
      nextUrl: void 0 !== t.patchedTree ? null != (o = (0, r.computeChangedPath)(e.tree, t.patchedTree)) ? o : e.canonicalUrl : e.nextUrl
    };
  }
  ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
    value: !0
  }), Object.assign(t.default, t), e.exports = t.default);
});
