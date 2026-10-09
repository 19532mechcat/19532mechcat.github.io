                                                                                                            
                                                    
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
    formatUrl: function () {
      return formatUrl;
    },
    urlObjectKeys: function () {
      return o;
    },
    formatWithValidation: function () {
      return formatWithValidation;
    }
  });
  let r = n(53388),
    a = r._(n(68836)),
    i = /https?|ftp|gopher|file/;
  function formatUrl(e) {
    let {
        auth: t,
        hostname: n
      } = e,
      r = e.protocol || "",
      o = e.pathname || "",
      s = e.hash || "",
      u = e.query || "",
      l = !1;
    t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : "", e.host ? l = t + e.host : n && (l = t + (~n.indexOf(":") ? "[" + n + "]" : n), e.port && (l += ":" + e.port)), u && "object" == typeof u && (u = String(a.urlQueryToSearchParams(u)));
    let p = e.search || u && "?" + u || "";
    return r && !r.endsWith(":") && (r += ":"), e.slashes || (!r || i.test(r)) && !1 !== l ? (l = "//" + (l || ""), o && "/" !== o[0] && (o = "/" + o)) : l || (l = ""), s && "#" !== s[0] && (s = "#" + s), p && "?" !== p[0] && (p = "?" + p), "" + r + l + (o = o.replace(/[?#]/g, encodeURIComponent)) + (p = p.replace("#", "%23")) + s;
  }
  let o = ["auth", "hash", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "slashes"];
  function formatWithValidation(e) {
    return formatUrl(e);
  }
});
