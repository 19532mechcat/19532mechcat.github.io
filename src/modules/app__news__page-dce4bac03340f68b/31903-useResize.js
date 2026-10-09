                                                                                                                      
                                                    
(function (module, exports, webpackRequire) {
  "use strict";

  webpackRequire.d(exports, {
    a: function () {
      return useResize;
    }
  });
  var React = webpackRequire(58036),
    r = webpackRequire(45391);
  let s = [];
  window.addEventListener("resize", () => {
    for (let e of s) e();
  });
  let useResize = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [null];
    (0, React.useEffect)(() => {
      e();
      let t = (0, r.Z)(e, 100, {
        leading: !1,
        trailing: !0
      });
      return s.push(t), () => {
        let e = s.indexOf(t);
        e >= 0 && s.splice(e, 1);
      };
    }, t);
  };
});
