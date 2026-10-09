                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "resolveHref", {
    enumerable: !0,
    get: function () {
      return resolveHref;
    }
  });
  let r = n(68836),
    a = n(75911),
    i = n(63491),
    o = n(95672),
    s = n(15263),
    u = n(96091),
    l = n(30435),
    p = n(24387);
  function resolveHref(e, t, n) {
    let m;
    let _ = "string" == typeof t ? t : (0, a.formatWithValidation)(t),
      v = _.match(/^[a-zA-Z]{1,}:\/\//),
      b = v ? _.slice(v[0].length) : _,
      E = b.split("?");
    if ((E[0] || "").match(/(\/\/|\\)/)) {
      console.error("Invalid href '" + _ + "' passed to next/router in page: '" + e.pathname + "'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");
      let t = (0, o.normalizeRepeatedSlashes)(b);
      _ = (v ? v[0] : "") + t;
    }
    if (!(0, u.isLocalURL)(_)) return n ? [_] : _;
    try {
      m = new URL(_.startsWith("#") ? e.asPath : e.pathname, "http://n");
    } catch (e) {
      m = new URL("/", "http://n");
    }
    try {
      let e = new URL(_, m);
      e.pathname = (0, s.normalizePathTrailingSlash)(e.pathname);
      let t = "";
      if ((0, l.isDynamicRoute)(e.pathname) && e.searchParams && n) {
        let n = (0, r.searchParamsToUrlQuery)(e.searchParams),
          {
            result: o,
            params: s
          } = (0, p.interpolateAs)(e.pathname, e.pathname, n);
        o && (t = (0, a.formatWithValidation)({
          pathname: o,
          hash: e.hash,
          query: (0, i.omit)(n, s)
        }));
      }
      let o = e.origin === m.origin ? e.href.slice(e.origin.length) : e.href;
      return n ? [o, t || o] : o;
    } catch (e) {
      return n ? [_] : _;
    }
  }
  ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
    value: !0
  }), Object.assign(t.default, t), e.exports = t.default);
});
