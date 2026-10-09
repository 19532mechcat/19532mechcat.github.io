                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  function isGlobalObj(e) {
    return e && e.Math == Math ? e : void 0;
  }
  n.d(t, {
    GLOBAL_OBJ: function () {
      return r;
    },
    R: function () {
      return getGlobalObject;
    },
    Y: function () {
      return getGlobalSingleton;
    }
  });
  let r = "object" == typeof globalThis && isGlobalObj(globalThis) || "object" == typeof window && isGlobalObj(window) || "object" == typeof self && isGlobalObj(self) || "object" == typeof n.g && isGlobalObj(n.g) || function () {
    return this;
  }() || {};
  function getGlobalObject() {
    return r;
  }
  function getGlobalSingleton(e, t, n) {
    let a = n || r,
      i = a.__SENTRY__ = a.__SENTRY__ || {},
      o = i[e] || (i[e] = t());
    return o;
  }
});
