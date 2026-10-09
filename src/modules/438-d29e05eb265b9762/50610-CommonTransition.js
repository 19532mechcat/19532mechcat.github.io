                                                                                                            
                                                    
(function (e, n, t) {
  "use strict";

  t.d(n, {
    I: function () {
      return CommonTransition;
    }
  });
  var i = t(84548);
  t(58036);
  var o = t(65568),
    r = t(49246),
    c = t(18315),
    s = t(16571),
    a = t.n(s);
  let CommonTransition = e => {
    let {
      state: n,
      dir: t,
      reverse: s,
      slow: l,
      nodeRef: d,
      children: m
    } = e;
    return (0, i.jsx)(o.Z, {
      children: (0, i.jsx)(r.Z, {
        nodeRef: d,
        addEndListener: e => {
          var n;
          return null === (n = d.current) || void 0 === n ? void 0 : n.addEventListener("transitionend", e, !1);
        },
        classNames: t ? "hrz" === t ? {
          enter: s ? a().commonHrzEnterReverse : a().commonHrzEnter,
          enterActive: (0, c.Z)(s ? a().commonHrzEnterActiveReverse : a().commonHrzEnterActive, l && a().slow),
          exit: s ? a().commonHrzExitReverse : a().commonHrzExit,
          exitActive: (0, c.Z)(s ? a().commonHrzExitActiveReverse : a().commonHrzExitActive, l && a().slow)
        } : {
          enter: s ? a().commonVtcEnterReverse : a().commonVtcEnter,
          enterActive: (0, c.Z)(s ? a().commonVtcEnterActiveReverse : a().commonVtcEnterActive, l && a().slow),
          exit: s ? a().commonVtcExitReverse : a().commonVtcExit,
          exitActive: (0, c.Z)(s ? a().commonVtcExitActiveReverse : a().commonVtcExitActive, l && a().slow)
        } : {
          enter: a().commonEnter,
          enterActive: (0, c.Z)(a().commonEnterActive, l && a().slow),
          exit: a().commonExit,
          exitActive: (0, c.Z)(a().commonExitActive, l && a().slow)
        },
        unmountOnExit: !0,
        children: m
      }, n)
    });
  };
});
