                                                                                                            
                                                    
(function (e, t) {
  "use strict";

  var n, r;
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), function (e, t) {
    for (var n in t) Object.defineProperty(e, n, {
      enumerable: !0,
      get: t[n]
    });
  }(t, {
    PrefetchKind: function () {
      return n;
    },
    ACTION_REFRESH: function () {
      return a;
    },
    ACTION_NAVIGATE: function () {
      return i;
    },
    ACTION_RESTORE: function () {
      return o;
    },
    ACTION_SERVER_PATCH: function () {
      return s;
    },
    ACTION_PREFETCH: function () {
      return u;
    },
    ACTION_FAST_REFRESH: function () {
      return l;
    },
    ACTION_SERVER_ACTION: function () {
      return p;
    }
  });
  let a = "refresh",
    i = "navigate",
    o = "restore",
    s = "server-patch",
    u = "prefetch",
    l = "fast-refresh",
    p = "server-action";
  (r = n || (n = {})).AUTO = "auto", r.FULL = "full", r.TEMPORARY = "temporary", ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
    value: !0
  }), Object.assign(t.default, t), e.exports = t.default);
});
