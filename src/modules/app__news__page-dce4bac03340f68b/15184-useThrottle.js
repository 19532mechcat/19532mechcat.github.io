                                                                                                                      
                                                    
(function (module, exports, webpackRequire) {
  "use strict";

  webpackRequire.d(exports, {
    f: function () {
      return useThrottle;
    }
  });
  var React = webpackRequire(58036);
  let useThrottle = e => {
    let t = (0, React.useRef)(!1),
      n = (0, React.useCallback)(e => async function () {
        for (var n = arguments.length, i = Array(n), r = 0; r < n; r++) i[r] = arguments[r];
        if (!t.current) {
          t.current = !0;
          try {
            let n = await e(...i);
            return t.current = !1, n;
          } catch (e) {
            throw t.current = !1, e;
          }
        }
      }, [null]);
    return n(e);
  };
});
