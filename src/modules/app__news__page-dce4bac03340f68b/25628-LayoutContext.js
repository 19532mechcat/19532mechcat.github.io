                                                                                                                      
                                                    
(function (module, exports, webpackRequire) {
  "use strict";

  webpackRequire.d(exports, {
    V: function () {
      return r;
    },
    l: function () {
      return useLayoutContext;
    }
  });
  var React = webpackRequire(58036);
  let r = (0, React.createContext)({
      scrollBlocked: {
        current: !1
      }
    }),
    useLayoutContext = () => (0, React.useContext)(r);
});
