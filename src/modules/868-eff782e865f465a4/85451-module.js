                                                                                                            
                                                    
(function (e, t) {
  "use strict";

  function isAPIRoute(e) {
    return "/api" === e || !!(null == e ? void 0 : e.startsWith("api/index.html"));
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "isAPIRoute", {
    enumerable: !0,
    get: function () {
      return isAPIRoute;
    }
  });
});
