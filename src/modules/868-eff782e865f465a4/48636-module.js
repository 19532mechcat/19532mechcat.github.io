                                                                                                            
                                                    
(function (e, t) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "isNavigatingToNewRootLayout", {
    enumerable: !0,
    get: function () {
      return function isNavigatingToNewRootLayout(e, t) {
        let n = e[0],
          r = t[0];
        if (Array.isArray(n) && Array.isArray(r)) {
          if (n[0] !== r[0] || n[2] !== r[2]) return !0;
        } else if (n !== r) return !0;
        if (e[4]) return !t[4];
        if (t[4]) return !0;
        let a = Object.values(e[1])[0],
          i = Object.values(t[1])[0];
        return !a || !i || isNavigatingToNewRootLayout(a, i);
      };
    }
  }), ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
    value: !0
  }), Object.assign(t.default, t), e.exports = t.default);
});
