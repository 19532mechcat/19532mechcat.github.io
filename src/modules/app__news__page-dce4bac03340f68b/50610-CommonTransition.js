                                                                                                                      
                                                    
(function (module, exports, webpackRequire) {
  "use strict";

  webpackRequire.d(exports, {
    I: function () {
      return CommonTransition;
    }
  });
  var jsxRuntime = webpackRequire(84548);
  webpackRequire(58036);
  var r = webpackRequire(65568),
    s = webpackRequire(49246),
    classNamesModule = webpackRequire(18315),
    c = webpackRequire(16571),
    o = webpackRequire.n(c);
  let CommonTransition = e => {
    let {
      state: t,
      dir: n,
      reverse: c,
      slow: A,
      nodeRef: l,
      children: d
    } = e;
    return (0, jsxRuntime.jsx)(r.Z, {
      children: (0, jsxRuntime.jsx)(s.Z, {
        nodeRef: l,
        addEndListener: e => {
          var t;
          return null === (t = l.current) || void 0 === t ? void 0 : t.addEventListener("transitionend", e, !1);
        },
        classNames: n ? "hrz" === n ? {
          enter: c ? o().commonHrzEnterReverse : o().commonHrzEnter,
          enterActive: (0, classNamesModule.Z)(c ? o().commonHrzEnterActiveReverse : o().commonHrzEnterActive, A && o().slow),
          exit: c ? o().commonHrzExitReverse : o().commonHrzExit,
          exitActive: (0, classNamesModule.Z)(c ? o().commonHrzExitActiveReverse : o().commonHrzExitActive, A && o().slow)
        } : {
          enter: c ? o().commonVtcEnterReverse : o().commonVtcEnter,
          enterActive: (0, classNamesModule.Z)(c ? o().commonVtcEnterActiveReverse : o().commonVtcEnterActive, A && o().slow),
          exit: c ? o().commonVtcExitReverse : o().commonVtcExit,
          exitActive: (0, classNamesModule.Z)(c ? o().commonVtcExitActiveReverse : o().commonVtcExitActive, A && o().slow)
        } : {
          enter: o().commonEnter,
          enterActive: (0, classNamesModule.Z)(o().commonEnterActive, A && o().slow),
          exit: o().commonExit,
          exitActive: (0, classNamesModule.Z)(o().commonExitActive, A && o().slow)
        },
        unmountOnExit: !0,
        children: d
      }, t)
    });
  };
});
