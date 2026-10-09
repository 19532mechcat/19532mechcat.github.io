                                                                                                                   
                                                    
(function (module, exports, webpackRequire) {
  "use strict";

  webpackRequire.d(exports, {
    GC: function () {
      return switchSound;
    },
    GP: function () {
      return turnOffSound;
    },
    cT: function () {
      return c;
    }
  });
  var i = webpackRequire(47426),
    a = webpackRequire(31212),
    s = webpackRequire(79706);
  let c = (0, i.e)((0, s.Ue)(e => ({
      enabled: !0
    }))),
    turnOffSound = () => c.setState(() => ({
      enabled: !1
    })),
    switchSound = () => c.setState((0, a.Uy)(e => {
      e.enabled = !e.enabled;
    }));
});
