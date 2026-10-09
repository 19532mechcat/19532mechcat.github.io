                                                                                                            
                                                    
(function (n, i, o) {
     
                  
                                                  
   
                                                    
   
                                                                   
                                                           
    
  var u = o(58036),
    s = "function" == typeof Object.is ? Object.is : function (n, i) {
      return n === i && (0 !== n || 1 / n == 1 / i) || n != n && i != i;
    },
    c = u.useState,
    l = u.useEffect,
    f = u.useLayoutEffect,
    p = u.useDebugValue;
  function r(n) {
    var i = n.getSnapshot;
    n = n.value;
    try {
      var o = i();
      return !s(n, o);
    } catch (n) {
      return !0;
    }
  }
  var d = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function (n, i) {
    return i();
  } : function (n, i) {
    var o = i(),
      u = c({
        inst: {
          value: o,
          getSnapshot: i
        }
      }),
      s = u[0].inst,
      d = u[1];
    return f(function () {
      s.value = o, s.getSnapshot = i, r(s) && d({
        inst: s
      });
    }, [n, o, i]), l(function () {
      return r(s) && d({
        inst: s
      }), n(function () {
        r(s) && d({
          inst: s
        });
      });
    }, [n]), p(o), o;
  };
  i.useSyncExternalStore = void 0 !== u.useSyncExternalStore ? u.useSyncExternalStore : d;
});
