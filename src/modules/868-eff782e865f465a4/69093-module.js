                                                                                                            
                                                    
(function (e, t) {
  "use strict";

  let n;
  function __unsafeCreateTrustedScriptURL(e) {
    var t;
    return (null == (t = function () {
      if (void 0 === n) {
        var e;
        n = (null == (e = window.trustedTypes) ? void 0 : e.createPolicy("nextjs", {
          createHTML: e => e,
          createScript: e => e,
          createScriptURL: e => e
        })) || null;
      }
      return n;
    }()) ? void 0 : t.createScriptURL(e)) || e;
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "__unsafeCreateTrustedScriptURL", {
    enumerable: !0,
    get: function () {
      return __unsafeCreateTrustedScriptURL;
    }
  }), ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
    value: !0
  }), Object.assign(t.default, t), e.exports = t.default);
});
