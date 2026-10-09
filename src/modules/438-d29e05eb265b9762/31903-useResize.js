                                                                                                            
                                                    
(function (e, n, t) {
  "use strict";

  t.d(n, {
    a: function () {
      return useResize;
    }
  });
  var i = t(58036),
    o = t(45391);
  let r = [];
  window.addEventListener("resize", () => {
    for (let e of r) e();
  });
  let useResize = function (e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [null];
    (0, i.useEffect)(() => {
      e();
      let n = (0, o.Z)(e, 100, {
        leading: !1,
        trailing: !0
      });
      return r.push(n), () => {
        let e = r.indexOf(n);
        e >= 0 && r.splice(e, 1);
      };
    }, n);
  };
});
