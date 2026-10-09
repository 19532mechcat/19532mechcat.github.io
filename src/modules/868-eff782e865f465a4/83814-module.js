                                                                                                            
                                                    
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
    ServerInsertedHTMLContext: function () {
      return i;
    },
    useServerInsertedHTML: function () {
      return useServerInsertedHTML;
    }
  });
  let r = n(53388),
    a = r._(n(58036)),
    i = a.default.createContext(null);
  function useServerInsertedHTML(e) {
    let t = (0, a.useContext)(i);
    t && t(e);
  }
});
