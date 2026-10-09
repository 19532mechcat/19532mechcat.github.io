                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "createSearchParamsBailoutProxy", {
    enumerable: !0,
    get: function () {
      return createSearchParamsBailoutProxy;
    }
  });
  let r = n(2841);
  function createSearchParamsBailoutProxy() {
    return new Proxy({}, {
      get(e, t) {
        "string" == typeof t && (0, r.staticGenerationBailout)("searchParams." + t);
      }
    });
  }
  ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
    value: !0
  }), Object.assign(t.default, t), e.exports = t.default);
});
