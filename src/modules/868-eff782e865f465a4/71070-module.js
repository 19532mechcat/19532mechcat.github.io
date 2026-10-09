                                                                                                            
                                                    
(function (e, t) {
  "use strict";

  function mitt() {
    let e = Object.create(null);
    return {
      on(t, n) {
        (e[t] || (e[t] = [])).push(n);
      },
      off(t, n) {
        e[t] && e[t].splice(e[t].indexOf(n) >>> 0, 1);
      },
      emit(t) {
        for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) r[a - 1] = arguments[a];
        (e[t] || []).slice().map(e => {
          e(...r);
        });
      }
    };
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "default", {
    enumerable: !0,
    get: function () {
      return mitt;
    }
  });
});
