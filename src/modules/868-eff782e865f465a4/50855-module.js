                                                                                                            
                                                    
(function (e, t) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), function (e, t) {
    for (var n in t) Object.defineProperty(e, n, {
      enumerable: !0,
      get: t[n]
    });
  }(t, {
    RSC: function () {
      return n;
    },
    ACTION: function () {
      return r;
    },
    NEXT_ROUTER_STATE_TREE: function () {
      return a;
    },
    NEXT_ROUTER_PREFETCH: function () {
      return i;
    },
    NEXT_URL: function () {
      return o;
    },
    RSC_CONTENT_TYPE_HEADER: function () {
      return s;
    },
    RSC_VARY_HEADER: function () {
      return u;
    },
    FLIGHT_PARAMETERS: function () {
      return l;
    },
    NEXT_RSC_UNION_QUERY: function () {
      return p;
    }
  });
  let n = "RSC",
    r = "Next-Action",
    a = "Next-Router-State-Tree",
    i = "Next-Router-Prefetch",
    o = "Next-Url",
    s = "text/x-component",
    u = n + ", " + a + ", " + i + ", " + o,
    l = [[n], [a], [i]],
    p = "_rsc";
  ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
    value: !0
  }), Object.assign(t.default, t), e.exports = t.default);
});
