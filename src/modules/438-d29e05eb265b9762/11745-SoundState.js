                                                                                                            
                                                    
(function (e, n, t) {
  "use strict";

  t.d(n, {
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
  var i = t(47426),
    o = t(31212),
    r = t(79706);
  let c = (0, i.e)((0, r.Ue)(e => ({
      enabled: !0
    }))),
    turnOffSound = () => c.setState(() => ({
      enabled: !1
    })),
    switchSound = () => c.setState((0, o.Uy)(e => {
      e.enabled = !e.enabled;
    }));
});
