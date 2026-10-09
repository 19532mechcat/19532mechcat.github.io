                                                                                                                   
                                                    
(function (module, exports, webpackRequire) {
  "use strict";

  webpackRequire.d(exports, {
    V: function () {
      return a;
    },
    l: function () {
      return useLayoutContext;
    }
  });
  var React = webpackRequire(58036);
  let a = (0, React.createContext)({
      scrollBlocked: {
        current: !1
      }
    }),
    useLayoutContext = () => (0, React.useContext)(a);
});
