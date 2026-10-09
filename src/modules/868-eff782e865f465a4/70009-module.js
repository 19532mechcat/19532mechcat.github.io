                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "isNextRouterError", {
    enumerable: !0,
    get: function () {
      return isNextRouterError;
    }
  });
  let r = n(27603),
    a = n(5017);
  function isNextRouterError(e) {
    return e && e.digest && ((0, a.isRedirectError)(e) || (0, r.isNotFoundError)(e));
  }
  ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
    value: !0
  }), Object.assign(t.default, t), e.exports = t.default);
});
