                                                                                                                   
                                                    
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
  var a = webpackRequire(83961);
  let s = "0 0 7 15",
    IconArrowRightSvg = e => {
      let {
        children: n,
        ...t
      } = e;
      return (0, jsxRuntime.jsx)("svg", {
        viewBox: s,
        ...t,
        children: (0, jsxRuntime.jsx)("use", {
          xlinkHref: "#".concat(a.b.iconArrow)
        })
      });
    },
    IconArrowLeftSvg = e => {
      let {
        children: n,
        style: t = {},
        ...c
      } = e;
      return (0, jsxRuntime.jsx)("svg", {
        viewBox: s,
        ...c,
        style: {
          ...t,
          transform: "rotate(180deg)"
        },
        children: (0, jsxRuntime.jsx)("use", {
          xlinkHref: "#".concat(a.b.iconArrow)
        })
      });
    },
    IconArrowUpSvg = e => {
      let {
        children: n,
        style: t = {},
        ...c
      } = e;
      return (0, jsxRuntime.jsx)("svg", {
        viewBox: s,
        ...c,
        style: {
          ...t,
          transform: "rotate(-90deg)"
        },
        children: (0, jsxRuntime.jsx)("use", {
          xlinkHref: "#".concat(a.b.iconArrow)
        })
      });
    },
    IconArrowDownSvg = e => {
      let {
        children: n,
        style: t = {},
        ...c
      } = e;
      return (0, jsxRuntime.jsx)("svg", {
        viewBox: s,
        ...c,
        style: {
          ...t,
          transform: "rotate(90deg)"
        },
        children: (0, jsxRuntime.jsx)("use", {
          xlinkHref: "#".concat(a.b.iconArrow)
        })
      });
    };
});
