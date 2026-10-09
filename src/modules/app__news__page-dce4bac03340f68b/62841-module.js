                                                                                                                      
                                                    
(function (module, exports, webpackRequire) {
  "use strict";

  webpackRequire.d(exports, {
    M: function () {
      return s;
    },
    t: function () {
      return a;
    }
  });
  var i = webpackRequire(51844),
    r = webpackRequire(89217);
  let s = (0, i.z)(r.L.sdk.src, {
      etl: {
        domain: "arknights",
        sub_domain: "official"
      }
    }),
    a = {
      event() {
        for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
        let [r, a] = t;
        Promise.all([webpackRequire.e(13), webpackRequire.e(979), webpackRequire.e(24), webpackRequire.e(710)]).then(webpackRequire.bind(webpackRequire, 30710)).then(e => {
          let {
            adapter: t
          } = e;
          s(e => {
            e.ETL.event(r, {
              ...a,
              domain: "arknights",
              sub_domain: "official",
              source: t.source.from
            });
          });
        });
      }
    };
});
