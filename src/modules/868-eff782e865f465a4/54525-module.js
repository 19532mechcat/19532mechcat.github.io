                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  let r;
  n.d(t, {
    a: function () {
      return addHistoryInstrumentationHandler;
    }
  });
  var a = n(57683),
    i = n(30779);
  let o = (0, i.R)();
  var s = n(74750);
  let u = i.GLOBAL_OBJ;
  function addHistoryInstrumentationHandler(e) {
    let t = "history";
    (0, s.Hj)(t, e), (0, s.D2)(t, instrumentHistory);
  }
  function instrumentHistory() {
    if (!function () {
      let e = o.chrome,
        t = e && e.app && e.app.runtime,
        n = "history" in o && !!o.history.pushState && !!o.history.replaceState;
      return !t && n;
    }()) return;
    let e = u.onpopstate;
    function historyReplacementFunction(e) {
      return function (...t) {
        let n = t.length > 2 ? t[2] : void 0;
        if (n) {
          let e = r,
            t = String(n);
          r = t, (0, s.rK)("history", {
            from: e,
            to: t
          });
        }
        return e.apply(this, t);
      };
    }
    u.onpopstate = function (...t) {
      let n = u.location.href,
        a = r;
      if (r = n, (0, s.rK)("history", {
        from: a,
        to: n
      }), e) try {
        return e.apply(this, t);
      } catch (e) {}
    }, (0, a.hl)(u.history, "pushState", historyReplacementFunction), (0, a.hl)(u.history, "replaceState", historyReplacementFunction);
  }
});
