                                                                                                                         
                                                    
(function (module, exports) {
  "use strict";

  function isInAmpMode(e) {
    let {
      ampFirst: t = !1,
      hybrid: n = !1,
      hasQuery: r = !1
    } = void 0 === e ? {} : e;
    return t || n && r;
  }
  Object.defineProperty(exports, "__esModule", {
    value: !0
  }), Object.defineProperty(exports, "isInAmpMode", {
    enumerable: !0,
    get: function () {
      return isInAmpMode;
    }
  });
});
