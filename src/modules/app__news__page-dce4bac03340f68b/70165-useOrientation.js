                                                                                                                      
                                                    
(function (module, exports, webpackRequire) {
  "use strict";

  webpackRequire.d(exports, {
    R: function () {
      return useOrientation;
    }
  });
  var React = webpackRequire(58036),
    r = webpackRequire(31903);
  let useOrientation = () => {
    let [e, t] = (0, React.useState)(null);
    return (0, r.a)(() => {
      t(window.innerWidth >= window.innerHeight ? "landscape" : "portrait");
    }), e;
  };
});
