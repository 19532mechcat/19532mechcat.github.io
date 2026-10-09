                                                                                                            
                                                    
(function (e, t) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "escapeStringRegexp", {
    enumerable: !0,
    get: function () {
      return escapeStringRegexp;
    }
  });
  let n = /[|\\{}()[\]^$+*?.-]/,
    r = /[|\\{}()[\]^$+*?.-]/g;
  function escapeStringRegexp(e) {
    return n.test(e) ? e.replace(r, "\\$&") : e;
  }
});
