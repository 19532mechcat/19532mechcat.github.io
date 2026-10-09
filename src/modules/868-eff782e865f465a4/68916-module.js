                                                                                                            
                                                    
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
    getRouteRegex: function () {
      return getRouteRegex;
    },
    getNamedRouteRegex: function () {
      return getNamedRouteRegex;
    },
    getNamedMiddlewareRegex: function () {
      return getNamedMiddlewareRegex;
    }
  });
  let r = n(6513),
    a = n(56607),
    i = n(76034);
  function parseParameter(e) {
    let t = e.startsWith("[") && e.endsWith("]");
    t && (e = e.slice(1, -1));
    let n = e.startsWith("...");
    return n && (e = e.slice(3)), {
      key: e,
      repeat: n,
      optional: t
    };
  }
  function getParametrizedRoute(e) {
    let t = (0, i.removeTrailingSlash)(e).slice(1).split("/"),
      n = {},
      o = 1;
    return {
      parameterizedRoute: t.map(e => {
        let t = r.INTERCEPTION_ROUTE_MARKERS.find(t => e.startsWith(t)),
          i = e.match(/\[((?:\[.*\])|.+)\]/);
        if (t && i) {
          let {
            key: e,
            optional: r,
            repeat: s
          } = parseParameter(i[1]);
          return n[e] = {
            pos: o++,
            repeat: s,
            optional: r
          }, "/" + (0, a.escapeStringRegexp)(t) + "([^/]+?)";
        }
        if (!i) return "/" + (0, a.escapeStringRegexp)(e);
        {
          let {
            key: e,
            repeat: t,
            optional: r
          } = parseParameter(i[1]);
          return n[e] = {
            pos: o++,
            repeat: t,
            optional: r
          }, t ? r ? "(?:/(.+?))?" : "/(.+?)" : "/([^/]+?)";
        }
      }).join(""),
      groups: n
    };
  }
  function getRouteRegex(e) {
    let {
      parameterizedRoute: t,
      groups: n
    } = getParametrizedRoute(e);
    return {
      re: RegExp("^" + t + "(?:/)?$"),
      groups: n
    };
  }
  function getSafeKeyFromSegment(e) {
    let {
        getSafeRouteKey: t,
        segment: n,
        routeKeys: r,
        keyPrefix: a
      } = e,
      {
        key: i,
        optional: o,
        repeat: s
      } = parseParameter(n),
      u = i.replace(/\W/g, "");
    a && (u = "" + a + u);
    let l = !1;
    return (0 === u.length || u.length > 30) && (l = !0), isNaN(parseInt(u.slice(0, 1))) || (l = !0), l && (u = t()), a ? r[u] = "" + a + i : r[u] = "" + i, s ? o ? "(?:/(?<" + u + ">.+?))?" : "/(?<" + u + ">.+?)" : "/(?<" + u + ">[^/]+?)";
  }
  function getNamedParametrizedRoute(e, t) {
    let n;
    let o = (0, i.removeTrailingSlash)(e).slice(1).split("/"),
      s = (n = 0, () => {
        let e = "",
          t = ++n;
        for (; t > 0;) e += String.fromCharCode(97 + (t - 1) % 26), t = Math.floor((t - 1) / 26);
        return e;
      }),
      u = {};
    return {
      namedParameterizedRoute: o.map(e => {
        let n = r.INTERCEPTION_ROUTE_MARKERS.some(t => e.startsWith(t)),
          i = e.match(/\[((?:\[.*\])|.+)\]/);
        return n && i ? getSafeKeyFromSegment({
          getSafeRouteKey: s,
          segment: i[1],
          routeKeys: u,
          keyPrefix: t ? "nxtI" : void 0
        }) : i ? getSafeKeyFromSegment({
          getSafeRouteKey: s,
          segment: i[1],
          routeKeys: u,
          keyPrefix: t ? "nxtP" : void 0
        }) : "/" + (0, a.escapeStringRegexp)(e);
      }).join(""),
      routeKeys: u
    };
  }
  function getNamedRouteRegex(e, t) {
    let n = getNamedParametrizedRoute(e, t);
    return {
      ...getRouteRegex(e),
      namedRegex: "^" + n.namedParameterizedRoute + "(?:/)?$",
      routeKeys: n.routeKeys
    };
  }
  function getNamedMiddlewareRegex(e, t) {
    let {
        parameterizedRoute: n
      } = getParametrizedRoute(e),
      {
        catchAll: r = !0
      } = t;
    if ("/" === n) return {
      namedRegex: "^/" + (r ? ".*" : "") + "$"
    };
    let {
      namedParameterizedRoute: a
    } = getNamedParametrizedRoute(e, !1);
    return {
      namedRegex: "^" + a + (r ? "(?:(/.*)?)" : "") + "$"
    };
  }
});
