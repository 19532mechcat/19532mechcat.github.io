                                                                                                            
                                                    
(function (e, n, t) {
  "use strict";

  t.d(n, {
    R: function () {
      return useOrientation;
    }
  });
  var i = t(58036),
    o = t(31903);
  let useOrientation = () => {
    let [e, n] = (0, i.useState)(null);
    return (0, o.a)(() => {
      n(window.innerWidth >= window.innerHeight ? "landscape" : "portrait");
    }), e;
  };
});
