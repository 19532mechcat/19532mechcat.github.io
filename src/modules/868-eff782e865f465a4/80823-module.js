                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "addPathPrefix", {
    enumerable: !0,
    get: function () {
      return addPathPrefix;
    }
  });
  let r = n(67998);
  function addPathPrefix(e, t) {
    if (!e.startsWith("/") || !t) return e;
    let {
      pathname: n,
      query: a,
      hash: i
    } = (0, r.parsePath)(e);
    return "" + t + n + a + i;
  }
});
