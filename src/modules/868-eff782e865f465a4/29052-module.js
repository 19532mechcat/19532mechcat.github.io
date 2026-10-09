                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "default", {
    enumerable: !0,
    get: function () {
      return withRouter;
    }
  });
  let r = n(68517),
    a = r._(n(58036)),
    i = n(31415);
  function withRouter(e) {
    function WithRouterWrapper(t) {
      return a.default.createElement(e, {
        router: (0, i.useRouter)(),
        ...t
      });
    }
    return WithRouterWrapper.getInitialProps = e.getInitialProps, WithRouterWrapper.origGetInitialProps = e.origGetInitialProps, WithRouterWrapper;
  }
  ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
    value: !0
  }), Object.assign(t.default, t), e.exports = t.default);
});
