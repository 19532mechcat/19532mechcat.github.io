                                                                                                                 
                                                    
(function (module, exports, webpackRequire) {
  "use strict";

  webpackRequire.d(exports, {
    p: function () {
      return CopyrightMiniSvg;
    }
  });
  var jsxRuntime = webpackRequire(84548);
  webpackRequire(58036);
  var s = webpackRequire(83961);
  let CopyrightMiniSvg = e => {
    let {
      children: t,
      ...i
    } = e;
    return (0, jsxRuntime.jsx)("svg", {
      viewBox: "0 0 166 18",
      ...i,
      children: (0, jsxRuntime.jsx)("use", {
        xlinkHref: "#".concat(s.b.copyrightMini)
      })
    });
  };
});
