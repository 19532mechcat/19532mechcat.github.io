                                                                                                            
                                                    
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
    markAssetError: function () {
      return markAssetError;
    },
    isAssetError: function () {
      return isAssetError;
    },
    getClientBuildManifest: function () {
      return getClientBuildManifest;
    },
    createRouteLoader: function () {
      return createRouteLoader;
    }
  }), n(68517), n(1307);
  let r = n(69093),
    a = n(89600),
    i = n(48176);
  function withFuture(e, t, n) {
    let r,
      a = t.get(e);
    if (a) return "future" in a ? a.future : Promise.resolve(a);
    let i = new Promise(e => {
      r = e;
    });
    return t.set(e, a = {
      resolve: r,
      future: i
    }), n ? n().then(e => (r(e), e)).catch(n => {
      throw t.delete(e), n;
    }) : i;
  }
  let o = Symbol("ASSET_LOAD_ERROR");
  function markAssetError(e) {
    return Object.defineProperty(e, o, {});
  }
  function isAssetError(e) {
    return e && o in e;
  }
  let s = function (e) {
      try {
        return e = document.createElement("link"), !!window.MSInputMethodContext && !!document.documentMode || e.relList.supports("prefetch");
      } catch (e) {
        return !1;
      }
    }(),
    getAssetQueryString = () => (0, i.getDeploymentIdQueryOrEmptyString)();
  function resolvePromiseWithTimeout(e, t, n) {
    return new Promise((r, i) => {
      let o = !1;
      e.then(e => {
        o = !0, r(e);
      }).catch(i), (0, a.requestIdleCallback)(() => setTimeout(() => {
        o || i(n);
      }, t));
    });
  }
  function getClientBuildManifest() {
    if (self.__BUILD_MANIFEST) return Promise.resolve(self.__BUILD_MANIFEST);
    let e = new Promise(e => {
      let t = self.__BUILD_MANIFEST_CB;
      self.__BUILD_MANIFEST_CB = () => {
        e(self.__BUILD_MANIFEST), t && t();
      };
    });
    return resolvePromiseWithTimeout(e, 3800, markAssetError(Error("Failed to load client build manifest")));
  }
  function getFilesForRoute(e, t) {
    return getClientBuildManifest().then(n => {
      if (!(t in n)) throw markAssetError(Error("Failed to lookup route: " + t));
      let a = n[t].map(t => e + "/_next/" + encodeURI(t));
      return {
        scripts: a.filter(e => e.endsWith(".js")).map(e => (0, r.__unsafeCreateTrustedScriptURL)(e) + getAssetQueryString()),
        css: a.filter(e => e.endsWith(".css")).map(e => e + getAssetQueryString())
      };
    });
  }
  function createRouteLoader(e) {
    let t = new Map(),
      n = new Map(),
      r = new Map(),
      i = new Map();
    function maybeExecuteScript(e) {
      {
        var t;
        let r = n.get(e.toString());
        return r || (document.querySelector('script[src^="' + e + '"]') ? Promise.resolve() : (n.set(e.toString(), r = new Promise((n, r) => {
          (t = document.createElement("script")).onload = n, t.onerror = () => r(markAssetError(Error("Failed to load script: " + e))), t.crossOrigin = void 0, t.src = e, document.body.appendChild(t);
        })), r));
      }
    }
    function fetchStyleSheet(e) {
      let t = r.get(e);
      return t || r.set(e, t = fetch(e).then(t => {
        if (!t.ok) throw Error("Failed to load stylesheet: " + e);
        return t.text().then(t => ({
          href: e,
          content: t
        }));
      }).catch(e => {
        throw markAssetError(e);
      })), t;
    }
    return {
      whenEntrypoint: e => withFuture(e, t),
      onEntrypoint(e, n) {
        (n ? Promise.resolve().then(() => n()).then(e => ({
          component: e && e.default || e,
          exports: e
        }), e => ({
          error: e
        })) : Promise.resolve(void 0)).then(n => {
          let r = t.get(e);
          r && "resolve" in r ? n && (t.set(e, n), r.resolve(n)) : (n ? t.set(e, n) : t.delete(e), i.delete(e));
        });
      },
      loadRoute(n, r) {
        return withFuture(n, i, () => {
          let a;
          return resolvePromiseWithTimeout(getFilesForRoute(e, n).then(e => {
            let {
              scripts: r,
              css: a
            } = e;
            return Promise.all([t.has(n) ? [] : Promise.all(r.map(maybeExecuteScript)), Promise.all(a.map(fetchStyleSheet))]);
          }).then(e => this.whenEntrypoint(n).then(t => ({
            entrypoint: t,
            styles: e[1]
          }))), 3800, markAssetError(Error("Route did not complete loading: " + n))).then(e => {
            let {
                entrypoint: t,
                styles: n
              } = e,
              r = Object.assign({
                styles: n
              }, t);
            return "error" in t ? t : r;
          }).catch(e => {
            if (r) throw e;
            return {
              error: e
            };
          }).finally(() => null == a ? void 0 : a());
        });
      },
      prefetch(t) {
        let n;
        return (n = navigator.connection) && (n.saveData || /2g/.test(n.effectiveType)) ? Promise.resolve() : getFilesForRoute(e, t).then(e => Promise.all(s ? e.scripts.map(e => {
          var t, n, r;
          return t = e.toString(), n = "script", new Promise((e, a) => {
            let i = '\n      link[rel="prefetch"][href^="' + t + '"],\n      link[rel="preload"][href^="' + t + '"],\n      script[src^="' + t + '"]';
            if (document.querySelector(i)) return e();
            r = document.createElement("link"), n && (r.as = n), r.rel = "prefetch", r.crossOrigin = void 0, r.onload = e, r.onerror = () => a(markAssetError(Error("Failed to prefetch: " + t))), r.href = t, document.head.appendChild(r);
          });
        }) : [])).then(() => {
          (0, a.requestIdleCallback)(() => this.loadRoute(t, !0).catch(() => {}));
        }).catch(() => {});
      }
    };
  }
  ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
    value: !0
  }), Object.assign(t.default, t), e.exports = t.default);
});
