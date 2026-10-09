                                                                                                                      
                                                    
(function (module, exports, webpackRequire) {
  "use strict";

  webpackRequire.d(exports, {
    PZ: function () {
      return IconArrowLeftSvg;
    },
    bI: function () {
      return IconArrowRightSvg;
    },
    f2: function () {
      return IconArrowDownSvg;
    },
    id: function () {
      return IconArrowUpSvg;
    }
  });
  var jsxRuntime = webpackRequire(84548);
  webpackRequire(58036);
  var r = webpackRequire(83961);
  let s = "0 0 7 15",
    IconArrowRightSvg = e => {
      let {
        children: t,
        ...n
      } = e;
      return (0, jsxRuntime.jsx)("svg", {
        viewBox: s,
        ...n,
        children: (0, jsxRuntime.jsx)("use", {
          xlinkHref: "#".concat(r.b.iconArrow)
        })
      });
    },
    IconArrowLeftSvg = e => {
      let {
        children: t,
        style: n = {},
        ...a
      } = e;
      return (0, jsxRuntime.jsx)("svg", {
        viewBox: s,
        ...a,
        style: {
          ...n,
          transform: "rotate(180deg)"
        },
        children: (0, jsxRuntime.jsx)("use", {
          xlinkHref: "#".concat(r.b.iconArrow)
        })
      });
    },
    IconArrowUpSvg = e => {
      let {
        children: t,
        style: n = {},
        ...a
      } = e;
      return (0, jsxRuntime.jsx)("svg", {
        viewBox: s,
        ...a,
        style: {
          ...n,
          transform: "rotate(-90deg)"
        },
        children: (0, jsxRuntime.jsx)("use", {
          xlinkHref: "#".concat(r.b.iconArrow)
        })
      });
    },
    IconArrowDownSvg = e => {
      let {
        children: t,
        style: n = {},
        ...a
      } = e;
      return (0, jsxRuntime.jsx)("svg", {
        viewBox: s,
        ...a,
        style: {
          ...n,
          transform: "rotate(90deg)"
        },
        children: (0, jsxRuntime.jsx)("use", {
          xlinkHref: "#".concat(r.b.iconArrow)
        })
      });
    };
});
