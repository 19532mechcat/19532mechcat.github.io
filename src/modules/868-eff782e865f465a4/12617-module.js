                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "fetchServerResponse", {
    enumerable: !0,
    get: function () {
      return fetchServerResponse;
    }
  });
  let r = n(50855),
    a = n(75667),
    i = n(60295),
    o = n(12212),
    s = n(19774),
    {
      createFromFetch: u
    } = n(34909);
  function doMpaNavigation(e) {
    return [(0, a.urlToUrlWithoutFlightMarker)(e).toString(), void 0];
  }
  async function fetchServerResponse(e, t, n, l, p) {
    let m = {
      [r.RSC]: "1",
      [r.NEXT_ROUTER_STATE_TREE]: encodeURIComponent(JSON.stringify(t))
    };
    p === o.PrefetchKind.AUTO && (m[r.NEXT_ROUTER_PREFETCH] = "1"), n && (m[r.NEXT_URL] = n);
    let _ = (0, s.hexHash)([m[r.NEXT_ROUTER_PREFETCH] || "0", m[r.NEXT_ROUTER_STATE_TREE], m[r.NEXT_URL]].join(","));
    try {
      let t = new URL(e);
      t.searchParams.set(r.NEXT_RSC_UNION_QUERY, _);
      let n = await fetch(t, {
          credentials: "same-origin",
          headers: m
        }),
        o = (0, a.urlToUrlWithoutFlightMarker)(n.url),
        s = n.redirected ? o : void 0,
        p = n.headers.get("content-type") || "";
      if (p !== r.RSC_CONTENT_TYPE_HEADER || !n.ok) return e.hash && (o.hash = e.hash), doMpaNavigation(o.toString());
      let [v, b] = await u(Promise.resolve(n), {
        callServer: i.callServer
      });
      if (l !== v) return doMpaNavigation(n.url);
      return [b, s];
    } catch (t) {
      return console.error("Failed to fetch RSC payload for " + e + ". Falling back to browser navigation.", t), [e.toString(), void 0];
    }
  }
  ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
    value: !0
  }), Object.assign(t.default, t), e.exports = t.default);
});
