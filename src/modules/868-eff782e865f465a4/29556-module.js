                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "parseRelativeUrl", {
    enumerable: !0,
    get: function () {
      return parseRelativeUrl;
    }
  });
  let r = n(95672),
    a = n(68836);
  function parseRelativeUrl(e, t) {
    let n = new URL((0, r.getLocationOrigin)()),
      i = t ? new URL(t, n) : e.startsWith(".") ? new URL(window.location.href) : n,
      {
        pathname: o,
        searchParams: s,
        search: u,
        hash: l,
        href: p,
        origin: m
      } = new URL(e, i);
    if (m !== n.origin) throw Error("invariant: invalid relative URL, router received " + e);
    return {
      pathname: o,
      query: (0, a.searchParamsToUrlQuery)(s),
      search: u,
      hash: l,
      href: p.slice(n.origin.length)
    };
  }
});
