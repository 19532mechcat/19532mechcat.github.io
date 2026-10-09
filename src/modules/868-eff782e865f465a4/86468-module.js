                                                                                                            
                                                    
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
    normalizeAppPath: function () {
      return normalizeAppPath;
    },
    normalizeRscPath: function () {
      return normalizeRscPath;
    }
  });
  let r = n(6202),
    a = n(90670);
  function normalizeAppPath(e) {
    return (0, r.ensureLeadingSlash)(e.split("/").reduce((e, t, n, r) => !t || (0, a.isGroupSegment)(t) || "@" === t[0] || ("page" === t || "route" === t) && n === r.length - 1 ? e : e + "/" + t, ""));
  }
  function normalizeRscPath(e, t) {
    return t ? e.replace(/\.rsc($|\?)/, "$1") : e;
  }
});
