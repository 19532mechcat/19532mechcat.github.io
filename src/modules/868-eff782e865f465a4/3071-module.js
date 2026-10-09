                                                                                                           
                                                    
(function (e, t, n) {
  "use strict";

  n.d(t, {
    Z1: function () {
      return i;
    },
    ph: function () {
      return a;
    },
    yW: function () {
      return dateTimestampInSeconds;
    }
  });
  var r = n(30779);
  function dateTimestampInSeconds() {
    return Date.now() / 1e3;
  }
  let a = function () {
      let {
        performance: e
      } = r.GLOBAL_OBJ;
      if (!e || !e.now) return dateTimestampInSeconds;
      let t = Date.now() - e.now(),
        n = void 0 == e.timeOrigin ? t : e.timeOrigin;
      return () => (n + e.now()) / 1e3;
    }(),
    i = (() => {
      let {
        performance: e
      } = r.GLOBAL_OBJ;
      if (!e || !e.now) return;
      let t = e.now(),
        n = Date.now(),
        a = e.timeOrigin ? Math.abs(e.timeOrigin + t - n) : 36e5,
        i = e.timing && e.timing.navigationStart,
        o = "number" == typeof i ? Math.abs(i + t - n) : 36e5;
      return a < 36e5 || o < 36e5 ? a <= o ? e.timeOrigin : i : n;
    })();
});
