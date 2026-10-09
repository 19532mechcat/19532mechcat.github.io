                                                                                                            
                                                    
(function (e, n, t) {
  "use strict";

  t.d(n, {
    V: function () {
      return o;
    },
    l: function () {
      return useLayoutContext;
    }
  });
  var i = t(58036);
  let o = (0, i.createContext)({
      scrollBlocked: {
        current: !1
      }
    }),
    useLayoutContext = () => (0, i.useContext)(o);
});
