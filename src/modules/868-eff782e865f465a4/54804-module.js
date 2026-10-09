                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "addLocale", {
    enumerable: !0,
    get: function () {
      return addLocale;
    }
  });
  let r = n(80823),
    a = n(85323);
  function addLocale(e, t, n, i) {
    if (!t || t === n) return e;
    let o = e.toLowerCase();
    return !i && ((0, a.pathHasPrefix)(o, "/api") || (0, a.pathHasPrefix)(o, "/" + t.toLowerCase())) ? e : (0, r.addPathPrefix)(e, "/" + t);
  }
});
