                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "createInitialRouterState", {
    enumerable: !0,
    get: function () {
      return createInitialRouterState;
    }
  });
  let r = n(61847),
    a = n(76237),
    i = n(48208),
    o = n(47278);
  function createInitialRouterState(e) {
    var t;
    let {
        buildId: n,
        initialTree: s,
        children: u,
        initialCanonicalUrl: l,
        initialParallelRoutes: p,
        isServer: m,
        location: _,
        initialHead: v
      } = e,
      b = {
        status: r.CacheStates.READY,
        data: null,
        subTreeData: u,
        parallelRoutes: m ? new Map() : p
      };
    return (null === p || 0 === p.size) && (0, i.fillLazyItemsTillLeafWithHead)(b, void 0, s, v), {
      buildId: n,
      tree: s,
      cache: b,
      prefetchCache: new Map(),
      pushRef: {
        pendingPush: !1,
        mpaNavigation: !1
      },
      focusAndScrollRef: {
        apply: !1,
        onlyHashChange: !1,
        hashFragment: null,
        segmentPaths: []
      },
      canonicalUrl: _ ? (0, a.createHrefFromUrl)(_) : l,
      nextUrl: null != (t = (0, o.extractPathFromFlightRouterState)(s) || (null == _ ? void 0 : _.pathname)) ? t : null
    };
  }
  ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
    value: !0
  }), Object.assign(t.default, t), e.exports = t.default);
});
