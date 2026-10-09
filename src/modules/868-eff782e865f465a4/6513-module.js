                                                                                                           
                                                    
(function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), function (e, t) {
    for (var n in t) Object.defineProperty(e, n, {
      enumerable: !0,
      get: t[n]
    });
  }(t, {
    INTERCEPTION_ROUTE_MARKERS: function () {
      return a;
    },
    isInterceptionRouteAppPath: function () {
      return isInterceptionRouteAppPath;
    },
    extractInterceptionRouteInformation: function () {
      return extractInterceptionRouteInformation;
    }
  });
  let r = n(86468),
    a = ["(..)(..)", "(.)", "(..)", "(...)"];
  function isInterceptionRouteAppPath(e) {
    return void 0 !== e.split("/").find(e => a.find(t => e.startsWith(t)));
  }
  function extractInterceptionRouteInformation(e) {
    let t, n, i;
    for (let r of e.split("/")) if (n = a.find(e => r.startsWith(e))) {
      [t, i] = e.split(n, 2);
      break;
    }
    if (!t || !n || !i) throw Error(`Invalid interception route: ${e}. Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>`);
    switch (t = (0, r.normalizeAppPath)(t), n) {
      case "(.)":
        i = "/" === t ? `/${i}` : t + "/" + i;
        break;
      case "(..)":
        if ("/" === t) throw Error(`Invalid interception route: ${e}. Cannot use (..) marker at the root level, use (.) instead.`);
        i = t.split("/").slice(0, -1).concat(i).join("/");
        break;
      case "(...)":
        i = "/" + i;
        break;
      case "(..)(..)":
        let o = t.split("/");
        if (o.length <= 2) throw Error(`Invalid interception route: ${e}. Cannot use (..)(..) marker at the root level or one level up.`);
        i = o.slice(0, -2).concat(i).join("/");
        break;
      default:
        throw Error("Invariant: unexpected marker");
    }
    return {
      interceptingRoute: t,
      interceptedRoute: i
    };
  }
});
