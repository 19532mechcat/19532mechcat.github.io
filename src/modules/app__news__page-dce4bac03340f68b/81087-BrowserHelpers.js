                                                                                                                      
                                                    
(function (module, exports, webpackRequire) {
  "use strict";

  webpackRequire.d(exports, {
    s2: function () {
      return alter;
    },
    gK: function () {
      return r;
    },
    mI: function () {
      return isLandscape;
    },
    Fq: function () {
      return isMobileDevice;
    },
    s$: function () {
      return i;
    },
    ZT: function () {
      return noop;
    }
  });
  let i = !1,
    noop = () => {},
    alter = e => !e,
    isMobileDevice = () => void 0 !== document.body.ontouchstart,
    isLandscape = () => window.innerWidth > window.innerHeight,
    r = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
});
