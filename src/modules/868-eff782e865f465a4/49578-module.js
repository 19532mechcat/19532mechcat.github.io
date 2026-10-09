                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  n.d(t, {
    j: function () {
      return isBrowser;
    }
  });
  var r = n(54493),
    a = n(30779);
  function isBrowser() {
    return "undefined" != typeof window && (!(0, r.KV)() || void 0 !== a.GLOBAL_OBJ.process && "renderer" === a.GLOBAL_OBJ.process.type);
  }
});
