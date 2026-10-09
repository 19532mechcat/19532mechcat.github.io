                                                                                                            
                                                    
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
    notFound: function () {
      return notFound;
    },
    isNotFoundError: function () {
      return isNotFoundError;
    }
  });
  let n = "NEXT_NOT_FOUND";
  function notFound() {
    let e = Error(n);
    throw e.digest = n, e;
  }
  function isNotFoundError(e) {
    return (null == e ? void 0 : e.digest) === n;
  }
  ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
    value: !0
  }), Object.assign(t.default, t), e.exports = t.default);
});
