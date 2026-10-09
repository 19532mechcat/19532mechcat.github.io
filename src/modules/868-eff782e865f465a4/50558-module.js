                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "formatNextPathnameInfo", {
    enumerable: !0,
    get: function () {
      return formatNextPathnameInfo;
    }
  });
  let r = n(76034),
    a = n(80823),
    i = n(6101),
    o = n(54804);
  function formatNextPathnameInfo(e) {
    let t = (0, o.addLocale)(e.pathname, e.locale, e.buildId ? void 0 : e.defaultLocale, e.ignorePrefix);
    return (e.buildId || !e.trailingSlash) && (t = (0, r.removeTrailingSlash)(t)), e.buildId && (t = (0, i.addPathSuffix)((0, a.addPathPrefix)(t, "/_next/data/" + e.buildId), "/" === e.pathname ? "index.json" : ".json")), t = (0, a.addPathPrefix)(t, e.basePath), !e.buildId && e.trailingSlash ? t.endsWith("/") ? t : (0, i.addPathSuffix)(t, "/") : (0, r.removeTrailingSlash)(t);
  }
});
