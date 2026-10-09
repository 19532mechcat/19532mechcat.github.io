                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "default", {
    enumerable: !0,
    get: function () {
      return StaticGenerationSearchParamsBailoutProvider;
    }
  });
  let r = n(68517),
    a = r._(n(58036)),
    i = n(92829);
  function StaticGenerationSearchParamsBailoutProvider(e) {
    let {
      Component: t,
      propsForComponent: n,
      isStaticGeneration: r
    } = e;
    if (r) {
      let e = (0, i.createSearchParamsBailoutProxy)();
      return a.default.createElement(t, {
        searchParams: e,
        ...n
      });
    }
    return a.default.createElement(t, n);
  }
  ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
    value: !0
  }), Object.assign(t.default, t), e.exports = t.default);
});
