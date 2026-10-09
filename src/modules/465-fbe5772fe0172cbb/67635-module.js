                                                                                                            
                                                    
(function (n, i, o) {
     
                  
                                                                
   
                                                    
   
                                                                   
                                                           
    
  var u = o(58036),
    s = o(94348),
    c = "function" == typeof Object.is ? Object.is : function (n, i) {
      return n === i && (0 !== n || 1 / n == 1 / i) || n != n && i != i;
    },
    l = s.useSyncExternalStore,
    f = u.useRef,
    p = u.useEffect,
    d = u.useMemo,
    g = u.useDebugValue;
  i.useSyncExternalStoreWithSelector = function (n, i, o, u, s) {
    var h = f(null);
    if (null === h.current) {
      var m = {
        hasValue: !1,
        value: null
      };
      h.current = m;
    } else m = h.current;
    var v = l(n, (h = d(function () {
      function a(i) {
        if (!f) {
          if (f = !0, n = i, i = u(i), void 0 !== s && m.hasValue) {
            var o = m.value;
            if (s(o, i)) return l = o;
          }
          return l = i;
        }
        if (o = l, c(n, i)) return o;
        var p = u(i);
        return void 0 !== s && s(o, p) ? o : (n = i, l = p);
      }
      var n,
        l,
        f = !1,
        p = void 0 === o ? null : o;
      return [function () {
        return a(i());
      }, null === p ? void 0 : function () {
        return a(p());
      }];
    }, [i, o, u, s]))[0], h[1]);
    return p(function () {
      m.hasValue = !0, m.value = v;
    }, [v]), g(v), v;
  };
});
