                                                                                                            
                                                    
(function (e, t) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "isDynamicRoute", {
    enumerable: !0,
    get: function () {
      return isDynamicRoute;
    }
  });
  let n = /\/\[[^/]+?\](?=\/|$)/;
  function isDynamicRoute(e) {
    return n.test(e);
  }
});
