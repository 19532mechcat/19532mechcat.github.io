                                                                                                            
                                                    
(function (e, t) {
  "use strict";

  function omit(e, t) {
    let n = {};
    return Object.keys(e).forEach(r => {
      t.includes(r) || (n[r] = e[r]);
    }), n;
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "omit", {
    enumerable: !0,
    get: function () {
      return omit;
    }
  });
});
