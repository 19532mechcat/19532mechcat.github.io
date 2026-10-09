                                                                                                            
                                                    
(function (e, t) {
  "use strict";

  function createRouterCacheKey(e, t) {
    return void 0 === t && (t = !1), Array.isArray(e) ? (e[0] + "|" + e[1] + "|" + e[2]).toLowerCase() : t && e.startsWith("__PAGE__") ? "__PAGE__" : e;
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "createRouterCacheKey", {
    enumerable: !0,
    get: function () {
      return createRouterCacheKey;
    }
  }), ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
    value: !0
  }), Object.assign(t.default, t), e.exports = t.default);
});
