                                                                                                                   
                                                    
(function (module, exports, webpackRequire) {
  "use strict";

  webpackRequire.d(exports, {
    q: function () {
      return ClientOnly;
    }
  });
  var jsxRuntime = webpackRequire(84548),
    React = webpackRequire(58036);
  let ClientOnly = e => {
    let {
        children: n
      } = e,
      [t, s] = (0, React.useState)(!1);
    return (0, React.useEffect)(() => {
      s(!0);
    }, [null]), t ? (0, jsxRuntime.jsx)(jsxRuntime.Fragment, {
      children: n
    }) : null;
  };
});
