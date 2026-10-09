                                                                                                                 
                                                    
(function (module, exports, webpackRequire) {
  "use strict";

  webpackRequire.d(exports, {
    _u: function () {
      return IconPlayBtnSvg;
    },
    yS: function () {
      return IconMiniPlayBtnSvg;
    }
  });
  var jsxRuntime = webpackRequire(84548);
  webpackRequire(58036);
  var s = webpackRequire(83961);
  let IconPlayBtnSvg = e => {
      let {
        children: t,
        ...i
      } = e;
      return (0, jsxRuntime.jsx)("svg", {
        viewBox: "0 0 34.1 32.1",
        ...i,
        children: (0, jsxRuntime.jsx)("use", {
          xlinkHref: "#".concat(s.b.iconPlayBtn)
        })
      });
    },
    IconMiniPlayBtnSvg = e => {
      let {
        children: t,
        ...i
      } = e;
      return (0, jsxRuntime.jsx)("svg", {
        viewBox: "0 0 44 42",
        ...i,
        children: (0, jsxRuntime.jsx)("use", {
          xlinkHref: "#".concat(s.b.iconMiniPlayBtn)
        })
      });
    };
});
