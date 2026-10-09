                                                                                                            
                                                    
(function (e, t) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), function (e, t) {
    for (var n in t) Object.defineProperty(e, n, {
      enumerable: !0,
      get: t[n]
    });
  }(t, {
    requestIdleCallback: function () {
      return n;
    },
    cancelIdleCallback: function () {
      return r;
    }
  });
  let n = "undefined" != typeof self && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function (e) {
      let t = Date.now();
      return self.setTimeout(function () {
        e({
          didTimeout: !1,
          timeRemaining: function () {
            return Math.max(0, 50 - (Date.now() - t));
          }
        });
      }, 1);
    },
    r = "undefined" != typeof self && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function (e) {
      return clearTimeout(e);
    };
  ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
    value: !0
  }), Object.assign(t.default, t), e.exports = t.default);
});
