                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  function isRateLimited(e, t, n = Date.now()) {
    return (e[t] || e.all || 0) > n;
  }
  function updateRateLimits(e, {
    statusCode: t,
    headers: n
  }, r = Date.now()) {
    let a = {
        ...e
      },
      i = n && n["x-sentry-rate-limits"],
      o = n && n["retry-after"];
    if (i) for (let e of i.trim().split(",")) {
      let [t, n,,, i] = e.split(":", 5),
        o = parseInt(t, 10),
        s = (isNaN(o) ? 60 : o) * 1e3;
      if (n) for (let e of n.split(";")) "metric_bucket" === e ? (!i || i.split(";").includes("custom")) && (a[e] = r + s) : a[e] = r + s;else a.all = r + s;
    } else o ? a.all = r + function (e, t = Date.now()) {
      let n = parseInt(`${e}`, 10);
      if (!isNaN(n)) return 1e3 * n;
      let r = Date.parse(`${e}`);
      return isNaN(r) ? 6e4 : r - t;
    }(o, r) : 429 === t && (a.all = r + 6e4);
    return a;
  }
  n.d(t, {
    Q: function () {
      return isRateLimited;
    },
    WG: function () {
      return updateRateLimits;
    }
  });
});
