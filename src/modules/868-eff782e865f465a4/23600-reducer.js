                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "reducer", {
    enumerable: !0,
    get: function () {
      return reducer;
    }
  });
  let r = n(12212),
    a = n(69792),
    i = n(95992),
    o = n(51972),
    s = n(30215),
    u = n(21964),
    l = n(75552),
    p = n(89169),
    reducer = function (e, t) {
      switch (t.type) {
        case r.ACTION_NAVIGATE:
          return (0, a.navigateReducer)(e, t);
        case r.ACTION_SERVER_PATCH:
          return (0, i.serverPatchReducer)(e, t);
        case r.ACTION_RESTORE:
          return (0, o.restoreReducer)(e, t);
        case r.ACTION_REFRESH:
          return (0, s.refreshReducer)(e, t);
        case r.ACTION_FAST_REFRESH:
          return (0, l.fastRefreshReducer)(e, t);
        case r.ACTION_PREFETCH:
          return (0, u.prefetchReducer)(e, t);
        case r.ACTION_SERVER_ACTION:
          return (0, p.serverActionReducer)(e, t);
        default:
          throw Error("Unknown action");
      }
    };
  ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
    value: !0
  }), Object.assign(t.default, t), e.exports = t.default);
});
