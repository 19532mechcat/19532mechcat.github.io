                                                                                                            
                                                    
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
    getServerActionDispatcher: function () {
      return getServerActionDispatcher;
    },
    urlToUrlWithoutFlightMarker: function () {
      return urlToUrlWithoutFlightMarker;
    },
    default: function () {
      return AppRouter;
    }
  });
  let r = n(53388),
    a = r._(n(58036)),
    i = n(61847),
    o = n(23600),
    s = n(12212),
    u = n(76237),
    l = n(43081),
    p = n(60084),
    m = n(4599),
    _ = n(23561),
    v = n(58289),
    b = n(75558),
    E = n(2823),
    w = n(19284),
    C = n(77271),
    j = n(50676),
    A = n(50855),
    D = n(54136),
    F = n(34519),
    U = new Map(),
    $ = null;
  function getServerActionDispatcher() {
    return $;
  }
  let B = {
    refresh: () => {}
  };
  function urlToUrlWithoutFlightMarker(e) {
    let t = new URL(e, location.origin);
    return t.searchParams.delete(A.NEXT_RSC_UNION_QUERY), t;
  }
  function isExternalURL(e) {
    return e.origin !== window.location.origin;
  }
  function HistoryUpdater(e) {
    let {
      tree: t,
      pushRef: n,
      canonicalUrl: r,
      sync: i
    } = e;
    return (0, a.useInsertionEffect)(() => {
      let e = {
        __NA: !0,
        tree: t
      };
      n.pendingPush && (0, u.createHrefFromUrl)(new URL(window.location.href)) !== r ? (n.pendingPush = !1, window.history.pushState(e, "", r)) : window.history.replaceState(e, "", r), i();
    }, [t, n, r, i]), null;
  }
  let createEmptyCacheNode = () => ({
    status: i.CacheStates.LAZY_INITIALIZED,
    data: null,
    subTreeData: null,
    parallelRoutes: new Map()
  });
  function Router(e) {
    let {
        buildId: t,
        initialHead: n,
        initialTree: r,
        initialCanonicalUrl: m,
        children: A,
        assetPrefix: q
      } = e,
      z = (0, a.useMemo)(() => (0, _.createInitialRouterState)({
        buildId: t,
        children: A,
        initialCanonicalUrl: m,
        initialTree: r,
        initialParallelRoutes: U,
        isServer: !1,
        location: window.location,
        initialHead: n
      }), [t, A, m, r, n]),
      [{
        tree: K,
        cache: ee,
        prefetchCache: et,
        pushRef: en,
        focusAndScrollRef: er,
        canonicalUrl: ea,
        nextUrl: ei
      }, eo, es] = (0, p.useReducerWithReduxDevtools)(o.reducer, z);
    (0, a.useEffect)(() => {
      U = null;
    }, []);
    let {
        searchParams: eu,
        pathname: el
      } = (0, a.useMemo)(() => {
        let e = new URL(ea, window.location.href);
        return {
          searchParams: e.searchParams,
          pathname: (0, F.hasBasePath)(e.pathname) ? (0, D.removeBasePath)(e.pathname) : e.pathname
        };
      }, [ea]),
      ec = (0, a.useCallback)((e, t, n) => {
        (0, a.startTransition)(() => {
          eo({
            type: s.ACTION_SERVER_PATCH,
            flightData: t,
            previousTree: e,
            overrideCanonicalUrl: n,
            cache: createEmptyCacheNode(),
            mutable: {
              globalMutable: B
            }
          });
        });
      }, [eo]),
      ed = (0, a.useCallback)((e, t, n, r) => {
        let a = new URL((0, b.addBasePath)(e), location.href);
        return B.pendingNavigatePath = (0, u.createHrefFromUrl)(a), eo({
          type: s.ACTION_NAVIGATE,
          url: a,
          isExternalUrl: isExternalURL(a),
          locationSearch: location.search,
          forceOptimisticNavigation: n,
          shouldScroll: null == r || r,
          navigateType: t,
          cache: createEmptyCacheNode(),
          mutable: {
            globalMutable: B
          }
        });
      }, [eo]);
    !function (e) {
      let t = (0, a.useCallback)(t => {
        (0, a.startTransition)(() => {
          e({
            ...t,
            type: s.ACTION_SERVER_ACTION,
            mutable: {
              globalMutable: B
            },
            cache: createEmptyCacheNode()
          });
        });
      }, [e]);
      $ = t;
    }(eo);
    let ef = (0, a.useMemo)(() => {
      let e = {
        back: () => window.history.back(),
        forward: () => window.history.forward(),
        prefetch: (e, t) => {
          if ((0, v.isBot)(window.navigator.userAgent)) return;
          let n = new URL((0, b.addBasePath)(e), location.href);
          isExternalURL(n) || (0, a.startTransition)(() => {
            var e;
            eo({
              type: s.ACTION_PREFETCH,
              url: n,
              kind: null != (e = null == t ? void 0 : t.kind) ? e : s.PrefetchKind.FULL
            });
          });
        },
        replace: (e, t) => {
          void 0 === t && (t = {}), (0, a.startTransition)(() => {
            var n;
            ed(e, "replace", !!t.forceOptimisticNavigation, null == (n = t.scroll) || n);
          });
        },
        push: (e, t) => {
          void 0 === t && (t = {}), (0, a.startTransition)(() => {
            var n;
            ed(e, "push", !!t.forceOptimisticNavigation, null == (n = t.scroll) || n);
          });
        },
        refresh: () => {
          (0, a.startTransition)(() => {
            eo({
              type: s.ACTION_REFRESH,
              cache: createEmptyCacheNode(),
              mutable: {
                globalMutable: B
              },
              origin: window.location.origin
            });
          });
        },
        fastRefresh: () => {
          throw Error("fastRefresh can only be used in development mode. Please use refresh instead.");
        }
      };
      return e;
    }, [eo, ed]);
    if ((0, a.useEffect)(() => {
      window.next && (window.next.router = ef);
    }, [ef]), (0, a.useEffect)(() => {
      B.refresh = ef.refresh;
    }, [ef.refresh]), (0, a.useEffect)(() => {
      function handlePageShow(e) {
        var t;
        e.persisted && (null == (t = window.history.state) ? void 0 : t.tree) && eo({
          type: s.ACTION_RESTORE,
          url: new URL(window.location.href),
          tree: window.history.state.tree
        });
      }
      return window.addEventListener("pageshow", handlePageShow), () => {
        window.removeEventListener("pageshow", handlePageShow);
      };
    }, [eo]), en.mpaNavigation) {
      if (B.pendingMpaPath !== ea) {
        let e = window.location;
        en.pendingPush ? e.assign(ea) : e.replace(ea), B.pendingMpaPath = ea;
      }
      (0, a.use)((0, j.createInfinitePromise)());
    }
    let ep = (0, a.useCallback)(e => {
      let {
        state: t
      } = e;
      if (t) {
        if (!t.__NA) {
          window.location.reload();
          return;
        }
        (0, a.startTransition)(() => {
          eo({
            type: s.ACTION_RESTORE,
            url: new URL(window.location.href),
            tree: t.tree
          });
        });
      }
    }, [eo]);
    (0, a.useEffect)(() => (window.addEventListener("popstate", ep), () => {
      window.removeEventListener("popstate", ep);
    }), [ep]);
    let eh = (0, a.useMemo)(() => (0, C.findHeadInCache)(ee, K[1]), [ee, K]),
      eg = a.default.createElement(w.RedirectBoundary, null, eh, ee.subTreeData, a.default.createElement(E.AppRouterAnnouncer, {
        tree: K
      }));
    return a.default.createElement(a.default.Fragment, null, a.default.createElement(HistoryUpdater, {
      tree: K,
      pushRef: en,
      canonicalUrl: ea,
      sync: es
    }), a.default.createElement(l.PathnameContext.Provider, {
      value: el
    }, a.default.createElement(l.SearchParamsContext.Provider, {
      value: eu
    }, a.default.createElement(i.GlobalLayoutRouterContext.Provider, {
      value: {
        buildId: t,
        changeByServerResponse: ec,
        tree: K,
        focusAndScrollRef: er,
        nextUrl: ei
      }
    }, a.default.createElement(i.AppRouterContext.Provider, {
      value: ef
    }, a.default.createElement(i.LayoutRouterContext.Provider, {
      value: {
        childNodes: ee.parallelRoutes,
        tree: K,
        url: ea
      }
    }, eg))))));
  }
  function AppRouter(e) {
    let {
      globalErrorComponent: t,
      ...n
    } = e;
    return a.default.createElement(m.ErrorBoundary, {
      errorComponent: t
    }, a.default.createElement(Router, n));
  }
  ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
    value: !0
  }), Object.assign(t.default, t), e.exports = t.default);
});
