                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "getNextPathnameInfo", {
    enumerable: !0,
    get: function () {
      return getNextPathnameInfo;
    }
  });
  let r = n(82311),
    a = n(49696),
    i = n(85323);
  function getNextPathnameInfo(e, t) {
    var n, o;
    let {
        basePath: s,
        i18n: u,
        trailingSlash: l
      } = null != (n = t.nextConfig) ? n : {},
      p = {
        pathname: e,
        trailingSlash: "/" !== e ? e.endsWith("/") : l
      };
    s && (0, i.pathHasPrefix)(p.pathname, s) && (p.pathname = (0, a.removePathPrefix)(p.pathname, s), p.basePath = s);
    let m = p.pathname;
    if (p.pathname.startsWith("/_next/data/") && p.pathname.endsWith(".json")) {
      let e = p.pathname.replace(/^\/_next\/data\//, "").replace(/\.json$/, "").split("/"),
        n = e[0];
      p.buildId = n, m = "index" !== e[1] ? "/" + e.slice(1).join("/") : "/", !0 === t.parseData && (p.pathname = m);
    }
    if (u) {
      let e = t.i18nProvider ? t.i18nProvider.analyze(p.pathname) : (0, r.normalizeLocalePath)(p.pathname, u.locales);
      p.locale = e.detectedLocale, p.pathname = null != (o = e.pathname) ? o : p.pathname, !e.detectedLocale && p.buildId && (e = t.i18nProvider ? t.i18nProvider.analyze(m) : (0, r.normalizeLocalePath)(m, u.locales)).detectedLocale && (p.locale = e.detectedLocale);
    }
    return p;
  }
});
