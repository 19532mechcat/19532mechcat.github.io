                                                                                                           
                                                    
(function (e, t) {
  "use strict";

  function getAssetPathFromRoute(e, t) {
    void 0 === t && (t = "");
    let n = "/" === e ? "/index" : /^\/index(\/|$)/.test(e) ? "/index" + e : "" + e;
    return n + t;
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "default", {
    enumerable: !0,
    get: function () {
      return getAssetPathFromRoute;
    }
  });
});
