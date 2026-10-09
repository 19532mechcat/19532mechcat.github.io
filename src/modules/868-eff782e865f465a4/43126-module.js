                                                                                                            
                                                    
(function (e, t) {
  "use strict";

  function getObjectClassLabel(e) {
    return Object.prototype.toString.call(e);
  }
  function isPlainObject(e) {
    if ("[object Object]" !== getObjectClassLabel(e)) return !1;
    let t = Object.getPrototypeOf(e);
    return null === t || t.hasOwnProperty("isPrototypeOf");
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), function (e, t) {
    for (var n in t) Object.defineProperty(e, n, {
      enumerable: !0,
      get: t[n]
    });
  }(t, {
    getObjectClassLabel: function () {
      return getObjectClassLabel;
    },
    isPlainObject: function () {
      return isPlainObject;
    }
  });
});
