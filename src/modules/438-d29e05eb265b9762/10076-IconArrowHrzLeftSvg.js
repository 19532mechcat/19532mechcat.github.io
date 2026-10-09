                                                                                                            
                                                    
(function (e, n, t) {
  "use strict";

  t.d(n, {
    QD: function () {
      return IconArrowHrzRightSvg;
    },
    ZY: function () {
      return IconArrowHrzLeftSvg;
    }
  });
  var i = t(84548);
  t(58036);
  var o = t(83961);
  let r = "0 0 40 7.5",
    IconArrowHrzLeftSvg = e => {
      let {
        children: n,
        ...t
      } = e;
      return (0, i.jsx)("svg", {
        viewBox: r,
        ...t,
        children: (0, i.jsx)("use", {
          xlinkHref: "#".concat(o.b.iconArrowHrz)
        })
      });
    },
    IconArrowHrzRightSvg = e => {
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
          transform: "rotateY(180deg)"
        },
        children: (0, i.jsx)("use", {
          xlinkHref: "#".concat(o.b.iconArrowHrz)
        })
      });
    };
});
