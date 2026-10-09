                                                                                                            
                                                    
(function (e, t) {
  "use strict";

  let n;
  function createInfinitePromise() {
    return n || (n = new Promise(() => {})), n;
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "createInfinitePromise", {
    enumerable: !0,
    get: function () {
      return createInfinitePromise;
    }
  }), ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
    value: !0
  }), Object.assign(t.default, t), e.exports = t.default);
});
