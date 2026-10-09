                                                                                                           
                                                    
(function (e, t) {
  "use strict";

  function ensureLeadingSlash(e) {
    return e.startsWith("/") ? e : "/" + e;
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "ensureLeadingSlash", {
    enumerable: !0,
    get: function () {
      return ensureLeadingSlash;
    }
  });
});
