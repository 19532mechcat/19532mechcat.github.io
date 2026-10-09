                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  function _optionalChain(e) {
    let t;
    let n = e[0],
      r = 1;
    for (; r < e.length;) {
      let a = e[r],
        i = e[r + 1];
      if (r += 2, ("optionalAccess" === a || "optionalCall" === a) && null == n) return;
      "access" === a || "optionalAccess" === a ? (t = n, n = i(n)) : ("call" === a || "optionalCall" === a) && (n = i((...e) => n.call(t, ...e)), t = void 0);
    }
    return n;
  }
  n.d(t, {
    x: function () {
      return _optionalChain;
    }
  });
});
