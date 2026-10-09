                                                                                                            
                                                    
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
    default: function () {
      return Router;
    },
    matchesMiddleware: function () {
      return matchesMiddleware;
    },
    createKey: function () {
      return createKey;
    }
  });
  let r = n(68517),
    a = n(53388),
    i = n(76034),
    o = n(22882),
    s = n(86128),
    u = a._(n(26688)),
    l = n(85139),
    p = n(82311),
    m = r._(n(71070)),
    _ = n(95672),
    v = n(75807),
    b = n(29556);
  n(77303);
  let E = n(49825),
    w = n(68916),
    C = n(75911);
  n(50088);
  let j = n(67998),
    A = n(16470),
    D = n(95172),
    F = n(54136),
    U = n(75558),
    $ = n(34519),
    B = n(12391),
    q = n(85451),
    z = n(62113),
    K = n(50558),
    ee = n(60048),
    et = n(96091),
    en = n(58289),
    er = n(63491),
    ea = n(24387),
    ei = n(73330);
  function buildCancellationError() {
    return Object.assign(Error("Route Cancelled"), {
      cancelled: !0
    });
  }
  async function matchesMiddleware(e) {
    let t = await Promise.resolve(e.router.pageLoader.getMiddleware());
    if (!t) return !1;
    let {
        pathname: n
      } = (0, j.parsePath)(e.asPath),
      r = (0, $.hasBasePath)(n) ? (0, F.removeBasePath)(n) : n,
      a = (0, U.addBasePath)((0, A.addLocale)(r, e.locale));
    return t.some(e => new RegExp(e.regexp).test(a));
  }
  function stripOrigin(e) {
    let t = (0, _.getLocationOrigin)();
    return e.startsWith(t) ? e.substring(t.length) : e;
  }
  function prepareUrlAs(e, t, n) {
    let [r, a] = (0, B.resolveHref)(e, t, !0),
      i = (0, _.getLocationOrigin)(),
      o = r.startsWith(i),
      s = a && a.startsWith(i);
    r = stripOrigin(r), a = a ? stripOrigin(a) : a;
    let u = o ? r : (0, U.addBasePath)(r),
      l = n ? stripOrigin((0, B.resolveHref)(e, n)) : a || r;
    return {
      url: u,
      as: s ? l : (0, U.addBasePath)(l)
    };
  }
  function resolveDynamicRoute(e, t) {
    let n = (0, i.removeTrailingSlash)((0, l.denormalizePagePath)(e));
    return "/404" === n || "/_error" === n ? e : (t.includes(n) || t.some(t => {
      if ((0, v.isDynamicRoute)(t) && (0, w.getRouteRegex)(t).re.test(n)) return e = t, !0;
    }), (0, i.removeTrailingSlash)(e));
  }
  async function withMiddlewareEffects(e) {
    let t = await matchesMiddleware(e);
    if (!t || !e.fetchData) return null;
    try {
      let t = await e.fetchData(),
        n = await function (e, t, n) {
          let r = {
              basePath: n.router.basePath,
              i18n: {
                locales: n.router.locales
              },
              trailingSlash: !1
            },
            a = t.headers.get("x-nextjs-rewrite"),
            s = a || t.headers.get("x-nextjs-matched-path"),
            u = t.headers.get("x-matched-path");
          if (!u || s || u.includes("__next_data_catchall") || u.includes("/_error") || u.includes("/404") || (s = u), s) {
            if (s.startsWith("/")) {
              let t = (0, b.parseRelativeUrl)(s),
                u = (0, z.getNextPathnameInfo)(t.pathname, {
                  nextConfig: r,
                  parseData: !0
                }),
                l = (0, i.removeTrailingSlash)(u.pathname);
              return Promise.all([n.router.pageLoader.getPageList(), (0, o.getClientBuildManifest)()]).then(i => {
                let [o, {
                    __rewrites: s
                  }] = i,
                  m = (0, A.addLocale)(u.pathname, u.locale);
                if ((0, v.isDynamicRoute)(m) || !a && o.includes((0, p.normalizeLocalePath)((0, F.removeBasePath)(m), n.router.locales).pathname)) {
                  let n = (0, z.getNextPathnameInfo)((0, b.parseRelativeUrl)(e).pathname, {
                    nextConfig: r,
                    parseData: !0
                  });
                  m = (0, U.addBasePath)(n.pathname), t.pathname = m;
                }
                if (!o.includes(l)) {
                  let e = resolveDynamicRoute(l, o);
                  e !== l && (l = e);
                }
                let _ = o.includes(l) ? l : resolveDynamicRoute((0, p.normalizeLocalePath)((0, F.removeBasePath)(t.pathname), n.router.locales).pathname, o);
                if ((0, v.isDynamicRoute)(_)) {
                  let e = (0, E.getRouteMatcher)((0, w.getRouteRegex)(_))(m);
                  Object.assign(t.query, e || {});
                }
                return {
                  type: "rewrite",
                  parsedAs: t,
                  resolvedHref: _
                };
              });
            }
            let t = (0, j.parsePath)(e),
              u = (0, K.formatNextPathnameInfo)({
                ...(0, z.getNextPathnameInfo)(t.pathname, {
                  nextConfig: r,
                  parseData: !0
                }),
                defaultLocale: n.router.defaultLocale,
                buildId: ""
              });
            return Promise.resolve({
              type: "redirect-external",
              destination: "" + u + t.query + t.hash
            });
          }
          let l = t.headers.get("x-nextjs-redirect");
          if (l) {
            if (l.startsWith("/")) {
              let e = (0, j.parsePath)(l),
                t = (0, K.formatNextPathnameInfo)({
                  ...(0, z.getNextPathnameInfo)(e.pathname, {
                    nextConfig: r,
                    parseData: !0
                  }),
                  defaultLocale: n.router.defaultLocale,
                  buildId: ""
                });
              return Promise.resolve({
                type: "redirect-internal",
                newAs: "" + t + e.query + e.hash,
                newUrl: "" + t + e.query + e.hash
              });
            }
            return Promise.resolve({
              type: "redirect-external",
              destination: l
            });
          }
          return Promise.resolve({
            type: "next"
          });
        }(t.dataHref, t.response, e);
      return {
        dataHref: t.dataHref,
        json: t.json,
        response: t.response,
        text: t.text,
        cacheKey: t.cacheKey,
        effect: n
      };
    } catch (e) {
      return null;
    }
  }
  let eo = Symbol("SSG_DATA_NOT_FOUND");
  function tryToParseAsJSON(e) {
    try {
      return JSON.parse(e);
    } catch (e) {
      return null;
    }
  }
  function fetchNextData(e) {
    var t;
    let {
        dataHref: n,
        inflightCache: r,
        isPrefetch: a,
        hasMiddleware: i,
        isServerRender: s,
        parseJSON: u,
        persistCache: l,
        isBackground: p,
        unstable_skipClientCache: m
      } = e,
      {
        href: _
      } = new URL(n, window.location.href),
      getData = e => function fetchRetry(e, t, n) {
        return fetch(e, {
          credentials: "same-origin",
          method: n.method || "GET",
          headers: Object.assign({}, n.headers, {
            "x-nextjs-data": "1"
          })
        }).then(r => !r.ok && t > 1 && r.status >= 500 ? fetchRetry(e, t - 1, n) : r);
      }(n, s ? 3 : 1, {
        headers: Object.assign({}, a ? {
          purpose: "prefetch"
        } : {}, a && i ? {
          "x-middleware-prefetch": "1"
        } : {}),
        method: null != (t = null == e ? void 0 : e.method) ? t : "GET"
      }).then(t => t.ok && (null == e ? void 0 : e.method) === "HEAD" ? {
        dataHref: n,
        response: t,
        text: "",
        json: {},
        cacheKey: _
      } : t.text().then(e => {
        if (!t.ok) {
          if (i && [301, 302, 307, 308].includes(t.status)) return {
            dataHref: n,
            response: t,
            text: e,
            json: {},
            cacheKey: _
          };
          if (404 === t.status) {
            var r;
            if (null == (r = tryToParseAsJSON(e)) ? void 0 : r.notFound) return {
              dataHref: n,
              json: {
                notFound: eo
              },
              response: t,
              text: e,
              cacheKey: _
            };
          }
          let a = Error("Failed to load static props");
          throw s || (0, o.markAssetError)(a), a;
        }
        return {
          dataHref: n,
          json: u ? tryToParseAsJSON(e) : null,
          response: t,
          text: e,
          cacheKey: _
        };
      })).then(e => (l && "no-cache" !== e.response.headers.get("x-middleware-cache") || delete r[_], e)).catch(e => {
        throw m || delete r[_], ("Failed to fetch" === e.message || "NetworkError when attempting to fetch resource." === e.message || "Load failed" === e.message) && (0, o.markAssetError)(e), e;
      });
    return m && l ? getData({}).then(e => (r[_] = Promise.resolve(e), e)) : void 0 !== r[_] ? r[_] : r[_] = getData(p ? {
      method: "HEAD"
    } : {});
  }
  function createKey() {
    return Math.random().toString(36).slice(2, 10);
  }
  function handleHardNavigation(e) {
    let {
      url: t,
      router: n
    } = e;
    if (t === (0, U.addBasePath)((0, A.addLocale)(n.asPath, n.locale))) throw Error("Invariant: attempted to hard navigate to the same URL " + t + " " + location.href);
    window.location.href = t;
  }
  let getCancelledHandler = e => {
    let {
        route: t,
        router: n
      } = e,
      r = !1,
      a = n.clc = () => {
        r = !0;
      };
    return () => {
      if (r) {
        let e = Error('Abort fetching component for route: "' + t + '"');
        throw e.cancelled = !0, e;
      }
      a === n.clc && (n.clc = null);
    };
  };
  let Router = class Router {
    reload() {
      window.location.reload();
    }
    back() {
      window.history.back();
    }
    forward() {
      window.history.forward();
    }
    push(e, t, n) {
      return void 0 === n && (n = {}), {
        url: e,
        as: t
      } = prepareUrlAs(this, e, t), this.change("pushState", e, t, n);
    }
    replace(e, t, n) {
      return void 0 === n && (n = {}), {
        url: e,
        as: t
      } = prepareUrlAs(this, e, t), this.change("replaceState", e, t, n);
    }
    async _bfl(e, t, n, r) {
      {
        let u = !1,
          l = !1;
        for (let p of [e, t]) if (p) {
          let t = (0, i.removeTrailingSlash)(new URL(p, "http://n").pathname),
            m = (0, U.addBasePath)((0, A.addLocale)(t, n || this.locale));
          if (t !== (0, i.removeTrailingSlash)(new URL(this.asPath, "http://n").pathname)) {
            var a, o, s;
            for (let e of (u = u || !!(null == (a = this._bfl_s) ? void 0 : a.contains(t)) || !!(null == (o = this._bfl_s) ? void 0 : o.contains(m)), [t, m])) {
              let t = e.split("/");
              for (let e = 0; !l && e < t.length + 1; e++) {
                let n = t.slice(0, e).join("/");
                if (n && (null == (s = this._bfl_d) ? void 0 : s.contains(n))) {
                  l = !0;
                  break;
                }
              }
            }
            if (u || l) {
              if (r) return !0;
              return handleHardNavigation({
                url: (0, U.addBasePath)((0, A.addLocale)(e, n || this.locale, this.defaultLocale)),
                router: this
              }), new Promise(() => {});
            }
          }
        }
      }
      return !1;
    }
    async change(e, t, n, r, a) {
      var l, p, m, B, q, z, K, en, ei;
      let es, eu;
      if (!(0, et.isLocalURL)(t)) return handleHardNavigation({
        url: t,
        router: this
      }), !1;
      let el = 1 === r._h;
      el || r.shallow || (await this._bfl(n, void 0, r.locale));
      let ec = el || r._shouldResolveHref || (0, j.parsePath)(t).pathname === (0, j.parsePath)(n).pathname,
        ed = {
          ...this.state
        },
        ef = !0 !== this.isReady;
      this.isReady = !0;
      let ep = this.isSsr;
      if (el || (this.isSsr = !1), el && this.clc) return !1;
      let eh = ed.locale;
      _.ST && performance.mark("routeChange");
      let {
          shallow: eg = !1,
          scroll: em = !0
        } = r,
        e_ = {
          shallow: eg
        };
      this._inFlightRoute && this.clc && (ep || Router.events.emit("routeChangeError", buildCancellationError(), this._inFlightRoute, e_), this.clc(), this.clc = null), n = (0, U.addBasePath)((0, A.addLocale)((0, $.hasBasePath)(n) ? (0, F.removeBasePath)(n) : n, r.locale, this.defaultLocale));
      let ey = (0, D.removeLocale)((0, $.hasBasePath)(n) ? (0, F.removeBasePath)(n) : n, ed.locale);
      this._inFlightRoute = n;
      let ev = eh !== ed.locale;
      if (!el && this.onlyAHashChange(ey) && !ev) {
        ed.asPath = ey, Router.events.emit("hashChangeStart", n, e_), this.changeState(e, t, n, {
          ...r,
          scroll: !1
        }), em && this.scrollToHash(ey);
        try {
          await this.set(ed, this.components[ed.route], null);
        } catch (e) {
          throw (0, u.default)(e) && e.cancelled && Router.events.emit("routeChangeError", e, ey, e_), e;
        }
        return Router.events.emit("hashChangeComplete", n, e_), !0;
      }
      let eb = (0, b.parseRelativeUrl)(t),
        {
          pathname: eS,
          query: eE
        } = eb;
      if (null == (l = this.components[eS]) ? void 0 : l.__appRouter) return handleHardNavigation({
        url: n,
        router: this
      }), new Promise(() => {});
      try {
        [es, {
          __rewrites: eu
        }] = await Promise.all([this.pageLoader.getPageList(), (0, o.getClientBuildManifest)(), this.pageLoader.getMiddleware()]);
      } catch (e) {
        return handleHardNavigation({
          url: n,
          router: this
        }), !1;
      }
      this.urlIsNew(ey) || ev || (e = "replaceState");
      let eP = n;
      eS = eS ? (0, i.removeTrailingSlash)((0, F.removeBasePath)(eS)) : eS;
      let eT = (0, i.removeTrailingSlash)(eS),
        eR = n.startsWith("/") && (0, b.parseRelativeUrl)(n).pathname,
        eO = !!(eR && eT !== eR && (!(0, v.isDynamicRoute)(eT) || !(0, E.getRouteMatcher)((0, w.getRouteRegex)(eT))(eR))),
        ew = !r.shallow && (await matchesMiddleware({
          asPath: n,
          locale: ed.locale,
          router: this
        }));
      if (el && ew && (ec = !1), ec && "/_error" !== eS && (r._shouldResolveHref = !0, eb.pathname = resolveDynamicRoute(eS, es), eb.pathname === eS || (eS = eb.pathname, eb.pathname = (0, U.addBasePath)(eS), ew || (t = (0, C.formatWithValidation)(eb)))), !(0, et.isLocalURL)(n)) return handleHardNavigation({
        url: n,
        router: this
      }), !1;
      eP = (0, D.removeLocale)((0, F.removeBasePath)(eP), ed.locale), eT = (0, i.removeTrailingSlash)(eS);
      let ex = !1;
      if ((0, v.isDynamicRoute)(eT)) {
        let e = (0, b.parseRelativeUrl)(eP),
          r = e.pathname,
          a = (0, w.getRouteRegex)(eT);
        ex = (0, E.getRouteMatcher)(a)(r);
        let i = eT === r,
          o = i ? (0, ea.interpolateAs)(eT, r, eE) : {};
        if (ex && (!i || o.result)) i ? n = (0, C.formatWithValidation)(Object.assign({}, e, {
          pathname: o.result,
          query: (0, er.omit)(eE, o.params)
        })) : Object.assign(eE, ex);else {
          let e = Object.keys(a.groups).filter(e => !eE[e] && !a.groups[e].optional);
          if (e.length > 0 && !ew) throw Error((i ? "The provided `href` (" + t + ") value is missing query values (" + e.join(", ") + ") to be interpolated properly. " : "The provided `as` value (" + r + ") is incompatible with the `href` value (" + eT + "). ") + "Read more: https://nextjs.org/docs/messages/" + (i ? "href-interpolation-failed" : "incompatible-href-as"));
        }
      }
      el || Router.events.emit("routeChangeStart", n, e_);
      let eC = "/404" === this.pathname || "/_error" === this.pathname;
      try {
        let i = await this.getRouteInfo({
          route: eT,
          pathname: eS,
          query: eE,
          as: n,
          resolvedAs: eP,
          routeProps: e_,
          locale: ed.locale,
          isPreview: ed.isPreview,
          hasMiddleware: ew,
          unstable_skipClientCache: r.unstable_skipClientCache,
          isQueryUpdating: el && !this.isFallback,
          isMiddlewareRewrite: eO
        });
        if (el || r.shallow || (await this._bfl(n, "resolvedAs" in i ? i.resolvedAs : void 0, ed.locale)), "route" in i && ew) {
          eT = eS = i.route || eT, e_.shallow || (eE = Object.assign({}, i.query || {}, eE));
          let e = (0, $.hasBasePath)(eb.pathname) ? (0, F.removeBasePath)(eb.pathname) : eb.pathname;
          if (ex && eS !== e && Object.keys(ex).forEach(e => {
            ex && eE[e] === ex[e] && delete eE[e];
          }), (0, v.isDynamicRoute)(eS)) {
            let e = !e_.shallow && i.resolvedAs ? i.resolvedAs : (0, U.addBasePath)((0, A.addLocale)(new URL(n, location.href).pathname, ed.locale), !0),
              t = e;
            (0, $.hasBasePath)(t) && (t = (0, F.removeBasePath)(t));
            let r = (0, w.getRouteRegex)(eS),
              a = (0, E.getRouteMatcher)(r)(new URL(t, location.href).pathname);
            a && Object.assign(eE, a);
          }
        }
        if ("type" in i) {
          if ("redirect-internal" === i.type) return this.change(e, i.newUrl, i.newAs, r);
          return handleHardNavigation({
            url: i.destination,
            router: this
          }), new Promise(() => {});
        }
        let o = i.Component;
        if (o && o.unstable_scriptLoader) {
          let e = [].concat(o.unstable_scriptLoader());
          e.forEach(e => {
            (0, s.handleClientScriptLoad)(e.props);
          });
        }
        if ((i.__N_SSG || i.__N_SSP) && i.props) {
          if (i.props.pageProps && i.props.pageProps.__N_REDIRECT) {
            r.locale = !1;
            let t = i.props.pageProps.__N_REDIRECT;
            if (t.startsWith("/") && !1 !== i.props.pageProps.__N_REDIRECT_BASE_PATH) {
              let n = (0, b.parseRelativeUrl)(t);
              n.pathname = resolveDynamicRoute(n.pathname, es);
              let {
                url: a,
                as: i
              } = prepareUrlAs(this, t, t);
              return this.change(e, a, i, r);
            }
            return handleHardNavigation({
              url: t,
              router: this
            }), new Promise(() => {});
          }
          if (ed.isPreview = !!i.props.__N_PREVIEW, i.props.notFound === eo) {
            let e;
            try {
              await this.fetchComponent("/404"), e = "/404";
            } catch (t) {
              e = "/_error";
            }
            if (i = await this.getRouteInfo({
              route: e,
              pathname: e,
              query: eE,
              as: n,
              resolvedAs: eP,
              routeProps: {
                shallow: !1
              },
              locale: ed.locale,
              isPreview: ed.isPreview,
              isNotFound: !0
            }), "type" in i) throw Error("Unexpected middleware effect on /404");
          }
        }
        el && "/_error" === this.pathname && (null == (m = self.__NEXT_DATA__.props) ? void 0 : null == (p = m.pageProps) ? void 0 : p.statusCode) === 500 && (null == (B = i.props) ? void 0 : B.pageProps) && (i.props.pageProps.statusCode = 500);
        let l = r.shallow && ed.route === (null != (q = i.route) ? q : eT),
          _ = null != (z = r.scroll) ? z : !el && !l,
          C = null != a ? a : _ ? {
            x: 0,
            y: 0
          } : null,
          j = {
            ...ed,
            route: eT,
            pathname: eS,
            query: eE,
            asPath: ey,
            isFallback: !1
          };
        if (el && eC) {
          if (i = await this.getRouteInfo({
            route: this.pathname,
            pathname: this.pathname,
            query: eE,
            as: n,
            resolvedAs: eP,
            routeProps: {
              shallow: !1
            },
            locale: ed.locale,
            isPreview: ed.isPreview,
            isQueryUpdating: el && !this.isFallback
          }), "type" in i) throw Error("Unexpected middleware effect on " + this.pathname);
          "/_error" === this.pathname && (null == (en = self.__NEXT_DATA__.props) ? void 0 : null == (K = en.pageProps) ? void 0 : K.statusCode) === 500 && (null == (ei = i.props) ? void 0 : ei.pageProps) && (i.props.pageProps.statusCode = 500);
          try {
            await this.set(j, i, C);
          } catch (e) {
            throw (0, u.default)(e) && e.cancelled && Router.events.emit("routeChangeError", e, ey, e_), e;
          }
          return !0;
        }
        Router.events.emit("beforeHistoryChange", n, e_), this.changeState(e, t, n, r);
        let D = el && !C && !ef && !ev && (0, ee.compareRouterStates)(j, this.state);
        if (!D) {
          try {
            await this.set(j, i, C);
          } catch (e) {
            if (e.cancelled) i.error = i.error || e;else throw e;
          }
          if (i.error) throw el || Router.events.emit("routeChangeError", i.error, ey, e_), i.error;
          el || Router.events.emit("routeChangeComplete", n, e_), _ && /#.+$/.test(n) && this.scrollToHash(n);
        }
        return !0;
      } catch (e) {
        if ((0, u.default)(e) && e.cancelled) return !1;
        throw e;
      }
    }
    changeState(e, t, n, r) {
      void 0 === r && (r = {}), ("pushState" !== e || (0, _.getURL)() !== n) && (this._shallow = r.shallow, window.history[e]({
        url: t,
        as: n,
        options: r,
        __N: !0,
        key: this._key = "pushState" !== e ? this._key : createKey()
      }, "", n));
    }
    async handleRouteInfoError(e, t, n, r, a, i) {
      if (console.error(e), e.cancelled) throw e;
      if ((0, o.isAssetError)(e) || i) throw Router.events.emit("routeChangeError", e, r, a), handleHardNavigation({
        url: r,
        router: this
      }), buildCancellationError();
      try {
        let r;
        let {
            page: a,
            styleSheets: i
          } = await this.fetchComponent("/_error"),
          o = {
            props: r,
            Component: a,
            styleSheets: i,
            err: e,
            error: e
          };
        if (!o.props) try {
          o.props = await this.getInitialProps(a, {
            err: e,
            pathname: t,
            query: n
          });
        } catch (e) {
          console.error("Error in error page `getInitialProps`: ", e), o.props = {};
        }
        return o;
      } catch (e) {
        return this.handleRouteInfoError((0, u.default)(e) ? e : Error(e + ""), t, n, r, a, !0);
      }
    }
    async getRouteInfo(e) {
      let {
          route: t,
          pathname: n,
          query: r,
          as: a,
          resolvedAs: o,
          routeProps: s,
          locale: l,
          hasMiddleware: m,
          isPreview: _,
          unstable_skipClientCache: v,
          isQueryUpdating: b,
          isMiddlewareRewrite: E,
          isNotFound: w
        } = e,
        j = t;
      try {
        var A, D, U, $;
        let e = getCancelledHandler({
            route: j,
            router: this
          }),
          t = this.components[j];
        if (s.shallow && t && this.route === j) return t;
        m && (t = void 0);
        let u = !t || "initial" in t ? void 0 : t,
          B = {
            dataHref: this.pageLoader.getDataHref({
              href: (0, C.formatWithValidation)({
                pathname: n,
                query: r
              }),
              skipInterpolation: !0,
              asPath: w ? "/404" : o,
              locale: l
            }),
            hasMiddleware: !0,
            isServerRender: this.isSsr,
            parseJSON: !0,
            inflightCache: b ? this.sbc : this.sdc,
            persistCache: !_,
            isPrefetch: !1,
            unstable_skipClientCache: v,
            isBackground: b
          },
          z = b && !E ? null : await withMiddlewareEffects({
            fetchData: () => fetchNextData(B),
            asPath: w ? "/404" : o,
            locale: l,
            router: this
          }).catch(e => {
            if (b) return null;
            throw e;
          });
        if (z && ("/_error" === n || "/404" === n) && (z.effect = void 0), b && (z ? z.json = self.__NEXT_DATA__.props : z = {
          json: self.__NEXT_DATA__.props
        }), e(), (null == z ? void 0 : null == (A = z.effect) ? void 0 : A.type) === "redirect-internal" || (null == z ? void 0 : null == (D = z.effect) ? void 0 : D.type) === "redirect-external") return z.effect;
        if ((null == z ? void 0 : null == (U = z.effect) ? void 0 : U.type) === "rewrite") {
          let e = (0, i.removeTrailingSlash)(z.effect.resolvedHref),
            a = await this.pageLoader.getPageList();
          if ((!b || a.includes(e)) && (j = e, n = z.effect.resolvedHref, r = {
            ...r,
            ...z.effect.parsedAs.query
          }, o = (0, F.removeBasePath)((0, p.normalizeLocalePath)(z.effect.parsedAs.pathname, this.locales).pathname), t = this.components[j], s.shallow && t && this.route === j && !m)) return {
            ...t,
            route: j
          };
        }
        if ((0, q.isAPIRoute)(j)) return handleHardNavigation({
          url: a,
          router: this
        }), new Promise(() => {});
        let K = u || (await this.fetchComponent(j).then(e => ({
            Component: e.page,
            styleSheets: e.styleSheets,
            __N_SSG: e.mod.__N_SSG,
            __N_SSP: e.mod.__N_SSP
          }))),
          ee = null == z ? void 0 : null == ($ = z.response) ? void 0 : $.headers.get("x-middleware-skip"),
          et = K.__N_SSG || K.__N_SSP;
        ee && (null == z ? void 0 : z.dataHref) && delete this.sdc[z.dataHref];
        let {
          props: en,
          cacheKey: er
        } = await this._getData(async () => {
          if (et) {
            if ((null == z ? void 0 : z.json) && !ee) return {
              cacheKey: z.cacheKey,
              props: z.json
            };
            let e = (null == z ? void 0 : z.dataHref) ? z.dataHref : this.pageLoader.getDataHref({
                href: (0, C.formatWithValidation)({
                  pathname: n,
                  query: r
                }),
                asPath: o,
                locale: l
              }),
              t = await fetchNextData({
                dataHref: e,
                isServerRender: this.isSsr,
                parseJSON: !0,
                inflightCache: ee ? {} : this.sdc,
                persistCache: !_,
                isPrefetch: !1,
                unstable_skipClientCache: v
              });
            return {
              cacheKey: t.cacheKey,
              props: t.json || {}
            };
          }
          return {
            headers: {},
            props: await this.getInitialProps(K.Component, {
              pathname: n,
              query: r,
              asPath: a,
              locale: l,
              locales: this.locales,
              defaultLocale: this.defaultLocale
            })
          };
        });
        return K.__N_SSP && B.dataHref && er && delete this.sdc[er], this.isPreview || !K.__N_SSG || b || fetchNextData(Object.assign({}, B, {
          isBackground: !0,
          persistCache: !1,
          inflightCache: this.sbc
        })).catch(() => {}), en.pageProps = Object.assign({}, en.pageProps), K.props = en, K.route = j, K.query = r, K.resolvedAs = o, this.components[j] = K, K;
      } catch (e) {
        return this.handleRouteInfoError((0, u.getProperError)(e), n, r, a, s);
      }
    }
    set(e, t, n) {
      return this.state = e, this.sub(t, this.components["/_app"].Component, n);
    }
    beforePopState(e) {
      this._bps = e;
    }
    onlyAHashChange(e) {
      if (!this.asPath) return !1;
      let [t, n] = this.asPath.split("#"),
        [r, a] = e.split("#");
      return !!a && t === r && n === a || t === r && n !== a;
    }
    scrollToHash(e) {
      let [, t = ""] = e.split("#");
      (0, ei.handleSmoothScroll)(() => {
        if ("" === t || "top" === t) {
          window.scrollTo(0, 0);
          return;
        }
        let e = decodeURIComponent(t),
          n = document.getElementById(e);
        if (n) {
          n.scrollIntoView();
          return;
        }
        let r = document.getElementsByName(e)[0];
        r && r.scrollIntoView();
      }, {
        onlyHashChange: this.onlyAHashChange(e)
      });
    }
    urlIsNew(e) {
      return this.asPath !== e;
    }
    async prefetch(e, t, n) {
      if (void 0 === t && (t = e), void 0 === n && (n = {}), (0, en.isBot)(window.navigator.userAgent)) return;
      let r = (0, b.parseRelativeUrl)(e),
        a = r.pathname,
        {
          pathname: o,
          query: s
        } = r,
        u = o,
        l = await this.pageLoader.getPageList(),
        p = t,
        m = void 0 !== n.locale ? n.locale || void 0 : this.locale,
        _ = await matchesMiddleware({
          asPath: t,
          locale: m,
          router: this
        });
      r.pathname = resolveDynamicRoute(r.pathname, l), (0, v.isDynamicRoute)(r.pathname) && (o = r.pathname, r.pathname = o, Object.assign(s, (0, E.getRouteMatcher)((0, w.getRouteRegex)(r.pathname))((0, j.parsePath)(t).pathname) || {}), _ || (e = (0, C.formatWithValidation)(r)));
      let A = await withMiddlewareEffects({
        fetchData: () => fetchNextData({
          dataHref: this.pageLoader.getDataHref({
            href: (0, C.formatWithValidation)({
              pathname: u,
              query: s
            }),
            skipInterpolation: !0,
            asPath: p,
            locale: m
          }),
          hasMiddleware: !0,
          isServerRender: this.isSsr,
          parseJSON: !0,
          inflightCache: this.sdc,
          persistCache: !this.isPreview,
          isPrefetch: !0
        }),
        asPath: t,
        locale: m,
        router: this
      });
      if ((null == A ? void 0 : A.effect.type) === "rewrite" && (r.pathname = A.effect.resolvedHref, o = A.effect.resolvedHref, s = {
        ...s,
        ...A.effect.parsedAs.query
      }, p = A.effect.parsedAs.pathname, e = (0, C.formatWithValidation)(r)), (null == A ? void 0 : A.effect.type) === "redirect-external") return;
      let D = (0, i.removeTrailingSlash)(o);
      (await this._bfl(t, p, n.locale, !0)) && (this.components[a] = {
        __appRouter: !0
      }), await Promise.all([this.pageLoader._isSsg(D).then(t => !!t && fetchNextData({
        dataHref: (null == A ? void 0 : A.json) ? null == A ? void 0 : A.dataHref : this.pageLoader.getDataHref({
          href: e,
          asPath: p,
          locale: m
        }),
        isServerRender: !1,
        parseJSON: !0,
        inflightCache: this.sdc,
        persistCache: !this.isPreview,
        isPrefetch: !0,
        unstable_skipClientCache: n.unstable_skipClientCache || n.priority && !0
      }).then(() => !1).catch(() => !1)), this.pageLoader[n.priority ? "loadPage" : "prefetch"](D)]);
    }
    async fetchComponent(e) {
      let t = getCancelledHandler({
        route: e,
        router: this
      });
      try {
        let n = await this.pageLoader.loadPage(e);
        return t(), n;
      } catch (e) {
        throw t(), e;
      }
    }
    _getData(e) {
      let t = !1,
        cancel = () => {
          t = !0;
        };
      return this.clc = cancel, e().then(e => {
        if (cancel === this.clc && (this.clc = null), t) {
          let e = Error("Loading initial props cancelled");
          throw e.cancelled = !0, e;
        }
        return e;
      });
    }
    _getFlightData(e) {
      return fetchNextData({
        dataHref: e,
        isServerRender: !0,
        parseJSON: !1,
        inflightCache: this.sdc,
        persistCache: !1,
        isPrefetch: !1
      }).then(e => {
        let {
          text: t
        } = e;
        return {
          data: t
        };
      });
    }
    getInitialProps(e, t) {
      let {
          Component: n
        } = this.components["/_app"],
        r = this._wrapApp(n);
      return t.AppTree = r, (0, _.loadGetInitialProps)(n, {
        AppTree: r,
        Component: e,
        router: this,
        ctx: t
      });
    }
    get route() {
      return this.state.route;
    }
    get pathname() {
      return this.state.pathname;
    }
    get query() {
      return this.state.query;
    }
    get asPath() {
      return this.state.asPath;
    }
    get locale() {
      return this.state.locale;
    }
    get isFallback() {
      return this.state.isFallback;
    }
    get isPreview() {
      return this.state.isPreview;
    }
    constructor(e, t, r, {
      initialProps: a,
      pageLoader: o,
      App: s,
      wrapApp: u,
      Component: l,
      err: p,
      subscription: m,
      isFallback: E,
      locale: w,
      locales: j,
      defaultLocale: A,
      domainLocales: D,
      isPreview: F
    }) {
      this.sdc = {}, this.sbc = {}, this.isFirstPopStateEvent = !0, this._key = createKey(), this.onPopState = e => {
        let t;
        let {
          isFirstPopStateEvent: n
        } = this;
        this.isFirstPopStateEvent = !1;
        let r = e.state;
        if (!r) {
          let {
            pathname: e,
            query: t
          } = this;
          this.changeState("replaceState", (0, C.formatWithValidation)({
            pathname: (0, U.addBasePath)(e),
            query: t
          }), (0, _.getURL)());
          return;
        }
        if (r.__NA) {
          window.location.reload();
          return;
        }
        if (!r.__N || n && this.locale === r.options.locale && r.as === this.asPath) return;
        let {
          url: a,
          as: i,
          options: o,
          key: s
        } = r;
        this._key = s;
        let {
          pathname: u
        } = (0, b.parseRelativeUrl)(a);
        (!this.isSsr || i !== (0, U.addBasePath)(this.asPath) || u !== (0, U.addBasePath)(this.pathname)) && (!this._bps || this._bps(r)) && this.change("replaceState", a, i, Object.assign({}, o, {
          shallow: o.shallow && this._shallow,
          locale: o.locale || this.defaultLocale,
          _h: 0
        }), t);
      };
      let $ = (0, i.removeTrailingSlash)(e);
      this.components = {}, "/_error" !== e && (this.components[$] = {
        Component: l,
        initial: !0,
        props: a,
        err: p,
        __N_SSG: a && a.__N_SSG,
        __N_SSP: a && a.__N_SSP
      }), this.components["/_app"] = {
        Component: s,
        styleSheets: []
      };
      {
        let {
            BloomFilter: e
          } = n(66319),
          t = {
            numItems: 13,
            errorRate: .01,
            numBits: 125,
            numHashes: 7,
            bitArray: [0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0]
          },
          r = {
            numItems: 2,
            errorRate: .01,
            numBits: 20,
            numHashes: 7,
            bitArray: [1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1]
          };
        (null == t ? void 0 : t.numHashes) && (this._bfl_s = new e(t.numItems, t.errorRate), this._bfl_s.import(t)), (null == r ? void 0 : r.numHashes) && (this._bfl_d = new e(r.numItems, r.errorRate), this._bfl_d.import(r));
      }
      this.events = Router.events, this.pageLoader = o;
      let B = (0, v.isDynamicRoute)(e) && self.__NEXT_DATA__.autoExport;
      if (this.basePath = "", this.sub = m, this.clc = null, this._wrapApp = u, this.isSsr = !0, this.isLocaleDomain = !1, this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || self.__NEXT_DATA__.isExperimentalCompile || self.__NEXT_DATA__.appGip && !self.__NEXT_DATA__.gsp || !B && !self.location.search), this.state = {
        route: $,
        pathname: e,
        query: t,
        asPath: B ? e : r,
        isPreview: !!F,
        locale: void 0,
        isFallback: E
      }, this._initialMatchesMiddlewarePromise = Promise.resolve(!1), !r.startsWith("//")) {
        let n = {
            locale: w
          },
          a = (0, _.getURL)();
        this._initialMatchesMiddlewarePromise = matchesMiddleware({
          router: this,
          locale: w,
          asPath: a
        }).then(i => (n._shouldResolveHref = r !== e, this.changeState("replaceState", i ? a : (0, C.formatWithValidation)({
          pathname: (0, U.addBasePath)(e),
          query: t
        }), a, n), i));
      }
      window.addEventListener("popstate", this.onPopState);
    }
  };
  Router.events = (0, m.default)();
});
