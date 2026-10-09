                                                                                                                         
                                                    
(function (module, exports, webpackRequire) {
  "use strict";

  webpackRequire.r(exports), webpackRequire.d(exports, {
    default: function () {
      return GlobalError;
    }
  });
  var jsxRuntime = webpackRequire(84548),
    React = webpackRequire(58036),
    l = webpackRequire(92917),
    a = webpackRequire(2358),
    i = webpackRequire.n(a);
  function GlobalError(e) {
    let {
      error: t
    } = e;
    return (0, React.useEffect)(() => {
      l.Tb(t);
    }, [t]), (0, jsxRuntime.jsx)("html", {
      children: (0, jsxRuntime.jsx)("body", {
        children: (0, jsxRuntime.jsx)(i(), {
          statusCode: void 0
        })
      })
    });
  }
});
