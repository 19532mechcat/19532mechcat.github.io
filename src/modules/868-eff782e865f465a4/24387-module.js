                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "interpolateAs", {
    enumerable: !0,
    get: function () {
      return interpolateAs;
    }
  });
  let r = n(49825),
    a = n(68916);
  function interpolateAs(e, t, n) {
    let i = "",
      o = (0, a.getRouteRegex)(e),
      s = o.groups,
      u = (t !== e ? (0, r.getRouteMatcher)(o)(t) : "") || n;
    i = e;
    let l = Object.keys(s);
    return l.every(e => {
      let t = u[e] || "",
        {
          repeat: n,
          optional: r
        } = s[e],
        a = "[" + (n ? "..." : "") + e + "]";
      return r && (a = (t ? "" : "/") + "[" + a + "]"), n && !Array.isArray(t) && (t = [t]), (r || e in u) && (i = i.replace(a, n ? t.map(e => encodeURIComponent(e)).join("/") : encodeURIComponent(t)) || "/");
    }) || (i = ""), {
      params: l,
      result: i
    };
  }
});
