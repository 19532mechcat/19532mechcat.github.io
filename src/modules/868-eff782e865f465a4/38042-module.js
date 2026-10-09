                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "default", {
    enumerable: !0,
    get: function () {
      return onRecoverableError;
    }
  });
  let r = n(88536);
  function onRecoverableError(e) {
    let t = "function" == typeof reportError ? reportError : e => {
      window.console.error(e);
    };
    e.digest !== r.NEXT_DYNAMIC_NO_SSR_CODE && t(e);
  }
  ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
    value: !0
  }), Object.assign(t.default, t), e.exports = t.default);
});
