                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "removePathPrefix", {
    enumerable: !0,
    get: function () {
      return removePathPrefix;
    }
  });
  let r = n(85323);
  function removePathPrefix(e, t) {
    if (!(0, r.pathHasPrefix)(e, t)) return e;
    let n = e.slice(t.length);
    return n.startsWith("/") ? n : "/" + n;
  }
});
