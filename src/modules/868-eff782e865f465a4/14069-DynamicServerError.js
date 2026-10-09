                                                                                                            
                                                    
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
    DYNAMIC_ERROR_CODE: function () {
      return n;
    },
    DynamicServerError: function () {
      return DynamicServerError;
    }
  });
  let n = "DYNAMIC_SERVER_USAGE";
  let DynamicServerError = class DynamicServerError extends Error {
    constructor(e) {
      super("Dynamic server usage: " + e), this.digest = n;
    }
  };
  ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
    value: !0
  }), Object.assign(t.default, t), e.exports = t.default);
});
