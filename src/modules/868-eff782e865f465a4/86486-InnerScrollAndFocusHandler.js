                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "default", {
    enumerable: !0,
    get: function () {
      return OuterLayoutRouter;
    }
  });
  let r = n(68517),
    a = n(53388),
    i = a._(n(58036)),
    o = r._(n(461)),
    s = n(61847),
    u = n(12617),
    l = n(50676),
    p = n(4599),
    m = n(67365),
    _ = n(73330),
    v = n(19284),
    b = n(80384),
    E = n(37294),
    w = n(94956),
    C = n(90477),
    j = ["bottom", "height", "left", "right", "top", "width", "x", "y"];
  function topOfElementInViewport(e, t) {
    let n = e.getBoundingClientRect();
    return n.top >= 0 && n.top <= t;
  }
  let InnerScrollAndFocusHandler = class InnerScrollAndFocusHandler extends i.default.Component {
    componentDidMount() {
      this.handlePotentialScroll();
    }
    componentDidUpdate() {
      this.props.focusAndScrollRef.apply && this.handlePotentialScroll();
    }
    render() {
      return this.props.children;
    }
    constructor(...e) {
      super(...e), this.handlePotentialScroll = () => {
        let {
          focusAndScrollRef: e,
          segmentPath: t
        } = this.props;
        if (e.apply) {
          var n;
          if (0 !== e.segmentPaths.length && !e.segmentPaths.some(e => t.every((t, n) => (0, m.matchSegment)(t, e[n])))) return;
          let r = null,
            a = e.hashFragment;
          if (a && (r = "top" === a ? document.body : null != (n = document.getElementById(a)) ? n : document.getElementsByName(a)[0]), r || (r = o.default.findDOMNode(this)), !(r instanceof Element)) return;
          for (; !(r instanceof HTMLElement) || function (e) {
            if (["sticky", "fixed"].includes(getComputedStyle(e).position)) return !0;
            let t = e.getBoundingClientRect();
            return j.every(e => 0 === t[e]);
          }(r);) {
            if (null === r.nextElementSibling) return;
            r = r.nextElementSibling;
          }
          e.apply = !1, e.hashFragment = null, e.segmentPaths = [], (0, _.handleSmoothScroll)(() => {
            if (a) {
              r.scrollIntoView();
              return;
            }
            let e = document.documentElement,
              t = e.clientHeight;
            !topOfElementInViewport(r, t) && (e.scrollTop = 0, topOfElementInViewport(r, t) || r.scrollIntoView());
          }, {
            dontForceLayout: !0,
            onlyHashChange: e.onlyHashChange
          }), e.onlyHashChange = !1, r.focus();
        }
      };
    }
  };
  function ScrollAndFocusHandler(e) {
    let {
        segmentPath: t,
        children: n
      } = e,
      r = (0, i.useContext)(s.GlobalLayoutRouterContext);
    if (!r) throw Error("invariant global layout router not mounted");
    return i.default.createElement(InnerScrollAndFocusHandler, {
      segmentPath: t,
      focusAndScrollRef: r.focusAndScrollRef
    }, n);
  }
  function InnerLayoutRouter(e) {
    let {
        parallelRouterKey: t,
        url: n,
        childNodes: r,
        childProp: a,
        segmentPath: o,
        tree: p,
        cacheKey: _
      } = e,
      v = (0, i.useContext)(s.GlobalLayoutRouterContext);
    if (!v) throw Error("invariant global layout router not mounted");
    let {
        buildId: b,
        changeByServerResponse: E,
        tree: w
      } = v,
      j = r.get(_);
    if (a && null !== a.current && (j ? j.status === s.CacheStates.LAZY_INITIALIZED && (j.status = s.CacheStates.READY, j.subTreeData = a.current) : (j = {
      status: s.CacheStates.READY,
      data: null,
      subTreeData: a.current,
      parallelRoutes: new Map()
    }, r.set(_, j))), !j || j.status === s.CacheStates.LAZY_INITIALIZED) {
      let e = function walkAddRefetch(e, t) {
        if (e) {
          let [n, r] = e,
            a = 2 === e.length;
          if ((0, m.matchSegment)(t[0], n) && t[1].hasOwnProperty(r)) {
            if (a) {
              let e = walkAddRefetch(void 0, t[1][r]);
              return [t[0], {
                ...t[1],
                [r]: [e[0], e[1], e[2], "refetch"]
              }];
            }
            return [t[0], {
              ...t[1],
              [r]: walkAddRefetch(e.slice(2), t[1][r])
            }];
          }
        }
        return t;
      }(["", ...o], w);
      j = {
        status: s.CacheStates.DATA_FETCH,
        data: (0, C.createRecordFromThenable)((0, u.fetchServerResponse)(new URL(n, location.origin), e, v.nextUrl, b)),
        subTreeData: null,
        head: j && j.status === s.CacheStates.LAZY_INITIALIZED ? j.head : void 0,
        parallelRoutes: j && j.status === s.CacheStates.LAZY_INITIALIZED ? j.parallelRoutes : new Map()
      }, r.set(_, j);
    }
    if (!j) throw Error("Child node should always exist");
    if (j.subTreeData && j.data) throw Error("Child node should not have both subTreeData and data");
    if (j.data) {
      let [e, t] = (0, i.use)(j.data);
      j.data = null, setTimeout(() => {
        (0, i.startTransition)(() => {
          E(w, e, t);
        });
      }), (0, i.use)((0, l.createInfinitePromise)());
    }
    j.subTreeData || (0, i.use)((0, l.createInfinitePromise)());
    let A = i.default.createElement(s.LayoutRouterContext.Provider, {
      value: {
        tree: p[1][t],
        childNodes: j.parallelRoutes,
        url: n
      }
    }, j.subTreeData);
    return A;
  }
  function LoadingBoundary(e) {
    let {
      children: t,
      loading: n,
      loadingStyles: r,
      hasLoading: a
    } = e;
    return a ? i.default.createElement(i.Suspense, {
      fallback: i.default.createElement(i.default.Fragment, null, r, n)
    }, t) : i.default.createElement(i.default.Fragment, null, t);
  }
  function OuterLayoutRouter(e) {
    let {
        parallelRouterKey: t,
        segmentPath: n,
        childProp: r,
        error: a,
        errorStyles: o,
        templateStyles: u,
        loading: l,
        loadingStyles: _,
        hasLoading: C,
        template: j,
        notFound: A,
        notFoundStyles: D,
        styles: F
      } = e,
      U = (0, i.useContext)(s.LayoutRouterContext);
    if (!U) throw Error("invariant expected layout router to be mounted");
    let {
        childNodes: $,
        tree: B,
        url: q
      } = U,
      z = $.get(t);
    z || (z = new Map(), $.set(t, z));
    let K = B[1][t][0],
      ee = r.segment,
      et = (0, E.getSegmentValue)(K),
      en = [K];
    return i.default.createElement(i.default.Fragment, null, F, en.map(e => {
      let F = (0, m.matchSegment)(e, ee),
        U = (0, E.getSegmentValue)(e),
        $ = (0, w.createRouterCacheKey)(e);
      return i.default.createElement(s.TemplateContext.Provider, {
        key: (0, w.createRouterCacheKey)(e, !0),
        value: i.default.createElement(ScrollAndFocusHandler, {
          segmentPath: n
        }, i.default.createElement(p.ErrorBoundary, {
          errorComponent: a,
          errorStyles: o
        }, i.default.createElement(LoadingBoundary, {
          hasLoading: C,
          loading: l,
          loadingStyles: _
        }, i.default.createElement(b.NotFoundBoundary, {
          notFound: A,
          notFoundStyles: D
        }, i.default.createElement(v.RedirectBoundary, null, i.default.createElement(InnerLayoutRouter, {
          parallelRouterKey: t,
          url: q,
          tree: B,
          childNodes: z,
          childProp: F ? r : null,
          segmentPath: n,
          cacheKey: $,
          isActive: et === U
        }))))))
      }, u, j);
    }));
  }
  ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
    value: !0
  }), Object.assign(t.default, t), e.exports = t.default);
});
