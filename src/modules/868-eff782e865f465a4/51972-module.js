                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "restoreReducer", {
    enumerable: !0,
    get: function () {
      return restoreReducer;
    }
  });
  let r = n(76237);
  function restoreReducer(e, t) {
    let {
        url: n,
        tree: a
      } = t,
      i = (0, r.createHrefFromUrl)(n);
    return {
      buildId: e.buildId,
      canonicalUrl: i,
      pushRef: e.pushRef,
      focusAndScrollRef: e.focusAndScrollRef,
      cache: e.cache,
      prefetchCache: e.prefetchCache,
      tree: a,
      nextUrl: n.pathname
    };
  }
  ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
    value: !0
  }), Object.assign(t.default, t), e.exports = t.default);
});
