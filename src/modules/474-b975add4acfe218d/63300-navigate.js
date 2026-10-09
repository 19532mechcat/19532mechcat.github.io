                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "default", {
    enumerable: !0,
    get: function () {
      return _;
    }
  });
  let o = n(68517),
    l = o._(n(58036)),
    u = n(12391),
    f = n(96091),
    a = n(75911),
    i = n(95672),
    c = n(16470),
    s = n(30104),
    d = n(61847),
    p = n(96657),
    y = n(88519),
    v = n(75558),
    h = n(12212),
    b = new Set();
  function prefetch(e, t, n, o, l, u) {
    if (!u && !(0, f.isLocalURL)(t)) return;
    if (!o.bypassPrefetchedCheck) {
      let l = void 0 !== o.locale ? o.locale : "locale" in e ? e.locale : void 0,
        u = t + "%" + n + "%" + l;
      if (b.has(u)) return;
      b.add(u);
    }
    let a = u ? e.prefetch(t, l) : e.prefetch(t, n, o);
    Promise.resolve(a).catch(e => {});
  }
  function formatStringOrUrl(e) {
    return "string" == typeof e ? e : (0, a.formatUrl)(e);
  }
  let g = l.default.forwardRef(function (e, t) {
      let n, o;
      let {
        href: a,
        as: b,
        children: g,
        prefetch: _ = null,
        passHref: m,
        replace: O,
        shallow: k,
        scroll: P,
        locale: j,
        onClick: C,
        onMouseEnter: E,
        onTouchStart: M,
        legacyBehavior: L = !1,
        ...x
      } = e;
      n = g, L && ("string" == typeof n || "number" == typeof n) && (n = l.default.createElement("a", null, n));
      let S = l.default.useContext(s.RouterContext),
        R = l.default.useContext(d.AppRouterContext),
        I = null != S ? S : R,
        w = !S,
        U = !1 !== _,
        T = null === _ ? h.PrefetchKind.AUTO : h.PrefetchKind.FULL,
        {
          href: A,
          as: D
        } = l.default.useMemo(() => {
          if (!S) {
            let e = formatStringOrUrl(a);
            return {
              href: e,
              as: b ? formatStringOrUrl(b) : e
            };
          }
          let [e, t] = (0, u.resolveHref)(S, a, !0);
          return {
            href: e,
            as: b ? (0, u.resolveHref)(S, b) : t || e
          };
        }, [S, a, b]),
        N = l.default.useRef(A),
        K = l.default.useRef(D);
      L && (o = l.default.Children.only(n));
      let F = L ? o && "object" == typeof o && o.ref : t,
        [B, H, W] = (0, p.useIntersection)({
          rootMargin: "200px"
        }),
        $ = l.default.useCallback(e => {
          (K.current !== D || N.current !== A) && (W(), K.current = D, N.current = A), B(e), F && ("function" == typeof F ? F(e) : "object" == typeof F && (F.current = e));
        }, [D, F, A, W, B]);
      l.default.useEffect(() => {
        I && H && U && prefetch(I, A, D, {
          locale: j
        }, {
          kind: T
        }, w);
      }, [D, A, H, j, U, null == S ? void 0 : S.locale, I, w, T]);
      let z = {
        ref: $,
        onClick(e) {
          L || "function" != typeof C || C(e), L && o.props && "function" == typeof o.props.onClick && o.props.onClick(e), I && !e.defaultPrevented && function (e, t, n, o, u, a, i, c, s, d) {
            let {
                nodeName: p
              } = e.currentTarget,
              y = "A" === p.toUpperCase();
            if (y && (function (e) {
              let t = e.currentTarget,
                n = t.getAttribute("target");
              return n && "_self" !== n || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which;
            }(e) || !s && !(0, f.isLocalURL)(n))) return;
            e.preventDefault();
            let navigate = () => {
              let e = null == i || i;
              "beforePopState" in t ? t[u ? "replace" : "push"](n, o, {
                shallow: a,
                locale: c,
                scroll: e
              }) : t[u ? "replace" : "push"](o || n, {
                forceOptimisticNavigation: !d,
                scroll: e
              });
            };
            s ? l.default.startTransition(navigate) : navigate();
          }(e, I, A, D, O, k, P, j, w, U);
        },
        onMouseEnter(e) {
          L || "function" != typeof E || E(e), L && o.props && "function" == typeof o.props.onMouseEnter && o.props.onMouseEnter(e), I && (U || !w) && prefetch(I, A, D, {
            locale: j,
            priority: !0,
            bypassPrefetchedCheck: !0
          }, {
            kind: T
          }, w);
        },
        onTouchStart(e) {
          L || "function" != typeof M || M(e), L && o.props && "function" == typeof o.props.onTouchStart && o.props.onTouchStart(e), I && (U || !w) && prefetch(I, A, D, {
            locale: j,
            priority: !0,
            bypassPrefetchedCheck: !0
          }, {
            kind: T
          }, w);
        }
      };
      if ((0, i.isAbsoluteUrl)(D)) z.href = D;else if (!L || m || "a" === o.type && !("href" in o.props)) {
        let e = void 0 !== j ? j : null == S ? void 0 : S.locale,
          t = (null == S ? void 0 : S.isLocaleDomain) && (0, y.getDomainLocale)(D, e, null == S ? void 0 : S.locales, null == S ? void 0 : S.domainLocales);
        z.href = t || (0, v.addBasePath)((0, c.addLocale)(D, e, null == S ? void 0 : S.defaultLocale));
      }
      return L ? l.default.cloneElement(o, z) : l.default.createElement("a", {
        ...x,
        ...z
      }, n);
    }),
    _ = g;
  ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
    value: !0
  }), Object.assign(t.default, t), e.exports = t.default);
});
