                                                                                                            
                                                    
(function (e, t) {
  "use strict";

  function djb2Hash(e) {
    let t = 5381;
    for (let n = 0; n < e.length; n++) {
      let r = e.charCodeAt(n);
      t = (t << 5) + t + r;
    }
    return Math.abs(t);
  }
  function hexHash(e) {
    return djb2Hash(e).toString(36).slice(0, 5);
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), function (e, t) {
    for (var n in t) Object.defineProperty(e, n, {
      enumerable: !0,
      get: t[n]
    });
  }(t, {
    djb2Hash: function () {
      return djb2Hash;
    },
    hexHash: function () {
      return hexHash;
    }
  });
});
