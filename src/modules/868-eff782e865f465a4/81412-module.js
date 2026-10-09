                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  n.d(t, {
    Cf: function () {
      return consoleSandbox;
    },
    LD: function () {
      return o;
    },
    RU: function () {
      return i;
    },
    kg: function () {
      return s;
    }
  });
  var r = n(47406),
    a = n(30779);
  let i = ["debug", "info", "warn", "error", "log", "assert", "trace"],
    o = {};
  function consoleSandbox(e) {
    if (!("console" in a.GLOBAL_OBJ)) return e();
    let t = a.GLOBAL_OBJ.console,
      n = {},
      r = Object.keys(o);
    r.forEach(e => {
      let r = o[e];
      n[e] = t[e], t[e] = r;
    });
    try {
      return e();
    } finally {
      r.forEach(e => {
        t[e] = n[e];
      });
    }
  }
  let s = function () {
    let e = !1,
      t = {
        enable: () => {
          e = !0;
        },
        disable: () => {
          e = !1;
        },
        isEnabled: () => e
      };
    return r.X ? i.forEach(n => {
      t[n] = (...t) => {
        e && consoleSandbox(() => {
          a.GLOBAL_OBJ.console[n](`Sentry Logger [${n}]:`, ...t);
        });
      };
    }) : i.forEach(e => {
      t[e] = () => void 0;
    }), t;
  }();
});
