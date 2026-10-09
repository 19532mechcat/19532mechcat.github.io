                                                                                                                   
                                                    
(function (module, exports, webpackRequire) {
  "use strict";

  webpackRequire.d(exports, {
    R: function () {
      return useOrientation;
    }
  });
  var React = webpackRequire(58036),
    a = webpackRequire(31903);
  let useOrientation = () => {
    let [e, n] = (0, React.useState)(null);
    return (0, a.a)(() => {
      n(window.innerWidth >= window.innerHeight ? "landscape" : "portrait");
    }), e;
  };
});
