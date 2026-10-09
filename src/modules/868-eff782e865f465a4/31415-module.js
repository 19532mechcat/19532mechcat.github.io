                                                                                                            
                                                    
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
    Router: function () {
      return i.default;
    },
    default: function () {
      return _;
    },
    withRouter: function () {
      return u.default;
    },
    useRouter: function () {
      return useRouter;
    },
    createRouter: function () {
      return createRouter;
    },
    makePublicRouterInstance: function () {
      return makePublicRouterInstance;
    }
  });
  let r = n(68517),
    a = r._(n(58036)),
    i = r._(n(31794)),
    o = n(30104),
    s = r._(n(26688)),
    u = r._(n(29052)),
    l = {
      router: null,
      readyCallbacks: [],
      ready(e) {
        if (this.router) return e();
        this.readyCallbacks.push(e);
      }
    },
    p = ["pathname", "route", "query", "asPath", "components", "isFallback", "basePath", "locale", "locales", "defaultLocale", "isReady", "isPreview", "isLocaleDomain", "domainLocales"],
    m = ["push", "replace", "reload", "back", "prefetch", "beforePopState"];
  function getRouter() {
    if (!l.router) throw Error('No router instance found.\nYou should only use "next/router" on the client side of your app.\n');
    return l.router;
  }
  Object.defineProperty(l, "events", {
    get: () => i.default.events
  }), p.forEach(e => {
    Object.defineProperty(l, e, {
      get() {
        let t = getRouter();
        return t[e];
      }
    });
  }), m.forEach(e => {
    l[e] = function () {
      for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
      let a = getRouter();
      return a[e](...n);
    };
  }), ["routeChangeStart", "beforeHistoryChange", "routeChangeComplete", "routeChangeError", "hashChangeStart", "hashChangeComplete"].forEach(e => {
    l.ready(() => {
      i.default.events.on(e, function () {
        for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        let a = "on" + e.charAt(0).toUpperCase() + e.substring(1);
        if (l[a]) try {
          l[a](...n);
        } catch (e) {
          console.error("Error when running the Router event: " + a), console.error((0, s.default)(e) ? e.message + "\n" + e.stack : e + "");
        }
      });
    });
  });
  let _ = l;
  function useRouter() {
    let e = a.default.useContext(o.RouterContext);
    if (!e) throw Error("NextRouter was not mounted. https://nextjs.org/docs/messages/next-router-not-mounted");
    return e;
  }
  function createRouter() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return l.router = new i.default(...t), l.readyCallbacks.forEach(e => e()), l.readyCallbacks = [], l.router;
  }
  function makePublicRouterInstance(e) {
    let t = {};
    for (let n of p) {
      if ("object" == typeof e[n]) {
        t[n] = Object.assign(Array.isArray(e[n]) ? [] : {}, e[n]);
        continue;
      }
      t[n] = e[n];
    }
    return t.events = i.default.events, m.forEach(n => {
      t[n] = function () {
        for (var t = arguments.length, r = Array(t), a = 0; a < t; a++) r[a] = arguments[a];
        return e[n](...r);
      };
    }), t;
  }
  ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
    value: !0
  }), Object.assign(t.default, t), e.exports = t.default);
});
