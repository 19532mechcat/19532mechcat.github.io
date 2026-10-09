                                                                                                            
                                                    
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
    extractPathFromFlightRouterState: function () {
      return extractPathFromFlightRouterState;
    },
    computeChangedPath: function () {
      return computeChangedPath;
    }
  });
  let r = n(6513),
    a = n(90670),
    i = n(67365),
    removeLeadingSlash = e => "/" === e[0] ? e.slice(1) : e,
    segmentToPathname = e => "string" == typeof e ? e : e[1];
  function normalizeSegments(e) {
    return e.reduce((e, t) => "" === (t = removeLeadingSlash(t)) || (0, a.isGroupSegment)(t) ? e : e + "/" + t, "") || "/";
  }
  function extractPathFromFlightRouterState(e) {
    var t;
    let n = Array.isArray(e[0]) ? e[0][1] : e[0];
    if ("__DEFAULT__" === n || r.INTERCEPTION_ROUTE_MARKERS.some(e => n.startsWith(e))) return;
    if (n.startsWith("__PAGE__")) return "";
    let a = [n],
      i = null != (t = e[1]) ? t : {},
      o = i.children ? extractPathFromFlightRouterState(i.children) : void 0;
    if (void 0 !== o) a.push(o);else for (let [e, t] of Object.entries(i)) {
      if ("children" === e) continue;
      let n = extractPathFromFlightRouterState(t);
      void 0 !== n && a.push(n);
    }
    return normalizeSegments(a);
  }
  function computeChangedPath(e, t) {
    let n = function computeChangedPathImpl(e, t) {
      let [n, a] = e,
        [o, s] = t,
        u = segmentToPathname(n),
        l = segmentToPathname(o);
      if (r.INTERCEPTION_ROUTE_MARKERS.some(e => u.startsWith(e) || l.startsWith(e))) return "";
      if (!(0, i.matchSegment)(n, o)) {
        var p;
        return null != (p = extractPathFromFlightRouterState(t)) ? p : "";
      }
      for (let e in a) if (s[e]) {
        let t = computeChangedPathImpl(a[e], s[e]);
        if (null !== t) return segmentToPathname(o) + "/" + t;
      }
      return null;
    }(e, t);
    return null == n || "/" === n ? n : normalizeSegments(n.split("/"));
  }
  ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
    value: !0
  }), Object.assign(t.default, t), e.exports = t.default);
});
