                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "isLocalURL", {
    enumerable: !0,
    get: function () {
      return isLocalURL;
    }
  });
  let r = n(95672),
    a = n(34519);
  function isLocalURL(e) {
    if (!(0, r.isAbsoluteUrl)(e)) return !0;
    try {
      let t = (0, r.getLocationOrigin)(),
        n = new URL(e, t);
      return n.origin === t && (0, a.hasBasePath)(n.pathname);
    } catch (e) {
      return !1;
    }
  }
});
