                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), function (e, t) {
    for (var n in t) Object.defineProperty(e, n, {
      enumerable: !0,
      get: t[n]
    });
  }(t, {
    default: function () {
      return isError;
    },
    getProperError: function () {
      return getProperError;
    }
  });
  let r = n(43126);
  function isError(e) {
    return "object" == typeof e && null !== e && "name" in e && "message" in e;
  }
  function getProperError(e) {
    return isError(e) ? e : Error((0, r.isPlainObject)(e) ? JSON.stringify(e) : e + "");
  }
});
