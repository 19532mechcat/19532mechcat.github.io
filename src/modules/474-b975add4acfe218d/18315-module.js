                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  function clsx() {
    for (var e, t, n = 0, o = "", l = arguments.length; n < l; n++) (e = arguments[n]) && (t = function r(e) {
      var t,
        n,
        o = "";
      if ("string" == typeof e || "number" == typeof e) o += e;else if ("object" == typeof e) {
        if (Array.isArray(e)) {
          var l = e.length;
          for (t = 0; t < l; t++) e[t] && (n = r(e[t])) && (o && (o += " "), o += n);
        } else for (n in e) e[n] && (o && (o += " "), o += n);
      }
      return o;
    }(e)) && (o && (o += " "), o += t);
    return o;
  }
  n.d(t, {
    W: function () {
      return clsx;
    }
  }), t.Z = clsx;
});
