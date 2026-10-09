                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "denormalizePagePath", {
    enumerable: !0,
    get: function () {
      return denormalizePagePath;
    }
  });
  let r = n(30435),
    a = n(3095);
  function denormalizePagePath(e) {
    let t = (0, a.normalizePathSep)(e);
    return t.startsWith("/index/") && !(0, r.isDynamicRoute)(t) ? t.slice(6) : "/index" !== t ? t : "/";
  }
});
