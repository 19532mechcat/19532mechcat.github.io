                                                                                                            
                                                    
(function (e, t) {
  "use strict";

  function searchParamsToUrlQuery(e) {
    let t = {};
    return e.forEach((e, n) => {
      void 0 === t[n] ? t[n] = e : Array.isArray(t[n]) ? t[n].push(e) : t[n] = [t[n], e];
    }), t;
  }
  function stringifyUrlQueryParam(e) {
    return "string" != typeof e && ("number" != typeof e || isNaN(e)) && "boolean" != typeof e ? "" : String(e);
  }
  function urlQueryToSearchParams(e) {
    let t = new URLSearchParams();
    return Object.entries(e).forEach(e => {
      let [n, r] = e;
      Array.isArray(r) ? r.forEach(e => t.append(n, stringifyUrlQueryParam(e))) : t.set(n, stringifyUrlQueryParam(r));
    }), t;
  }
  function assign(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    return n.forEach(t => {
      Array.from(t.keys()).forEach(t => e.delete(t)), t.forEach((t, n) => e.append(n, t));
    }), e;
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), function (e, t) {
    for (var n in t) Object.defineProperty(e, n, {
      enumerable: !0,
      get: t[n]
    });
  }(t, {
    searchParamsToUrlQuery: function () {
      return searchParamsToUrlQuery;
    },
    urlQueryToSearchParams: function () {
      return urlQueryToSearchParams;
    },
    assign: function () {
      return assign;
    }
  });
});
