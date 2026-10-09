                                                                                                                   
                                                    
(function (module, exports, webpackRequire) {
  "use strict";

  webpackRequire.d(exports, {
    a: function () {
      return useResize;
    }
  });
  var React = webpackRequire(58036),
    a = webpackRequire(45391);
  let s = [];
  window.addEventListener("resize", () => {
    for (let e of s) e();
  });
  let useResize = function (e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [null];
    (0, React.useEffect)(() => {
      e();
      let n = (0, a.Z)(e, 100, {
        leading: !1,
        trailing: !0
      });
      return s.push(n), () => {
        let e = s.indexOf(n);
        e >= 0 && s.splice(e, 1);
      };
    }, n);
  };
});
