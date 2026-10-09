                                                                                                            
                                                    
(function (e, n, t) {
  "use strict";

  t.d(n, {
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
  var i = t(84548);
  t(58036);
  var o = t(83961);
  let r = "0 0 7 15",
    IconArrowRightSvg = e => {
      let {
        children: n,
        ...t
      } = e;
      return (0, i.jsx)("svg", {
        viewBox: r,
        ...t,
        children: (0, i.jsx)("use", {
          xlinkHref: "#".concat(o.b.iconArrow)
        })
      });
    },
    IconArrowLeftSvg = e => {
      let {
        children: n,
        style: t = {},
        ...c
      } = e;
      return (0, i.jsx)("svg", {
        viewBox: r,
        ...c,
        style: {
          ...t,
          transform: "rotate(180deg)"
        },
        children: (0, i.jsx)("use", {
          xlinkHref: "#".concat(o.b.iconArrow)
        })
      });
    },
    IconArrowUpSvg = e => {
      let {
        children: n,
        style: t = {},
        ...c
      } = e;
      return (0, i.jsx)("svg", {
        viewBox: r,
        ...c,
        style: {
          ...t,
          transform: "rotate(-90deg)"
        },
        children: (0, i.jsx)("use", {
          xlinkHref: "#".concat(o.b.iconArrow)
        })
      });
    },
    IconArrowDownSvg = e => {
      let {
        children: n,
        style: t = {},
        ...c
      } = e;
      return (0, i.jsx)("svg", {
        viewBox: r,
        ...c,
        style: {
          ...t,
          transform: "rotate(90deg)"
        },
        children: (0, i.jsx)("use", {
          xlinkHref: "#".concat(o.b.iconArrow)
        })
      });
    };
});
