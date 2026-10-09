                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "pathHasPrefix", {
    enumerable: !0,
    get: function () {
      return pathHasPrefix;
    }
  });
  let r = n(67998);
  function pathHasPrefix(e, t) {
    if ("string" != typeof e) return !1;
    let {
      pathname: n
    } = (0, r.parsePath)(e);
    return n === t || n.startsWith(t + "/");
  }
});
