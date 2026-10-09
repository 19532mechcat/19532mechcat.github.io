                                                                                                            
                                                    
(function (e, t) {
  "use strict";

  function normalizeLocalePath(e, t) {
    let n;
    let r = e.split("/");
    return (t || []).some(t => !!r[1] && r[1].toLowerCase() === t.toLowerCase() && (n = t, r.splice(1, 1), e = r.join("/") || "/", !0)), {
      pathname: e,
      detectedLocale: n
    };
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "normalizeLocalePath", {
    enumerable: !0,
    get: function () {
      return normalizeLocalePath;
    }
  });
});
