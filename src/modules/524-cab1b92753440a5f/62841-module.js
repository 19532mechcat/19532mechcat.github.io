                                                                                                            
                                                    
(function (e, t, i) {
  "use strict";

  i.d(t, {
    M: function () {
      return s;
    },
    t: function () {
      return r;
    }
  });
  var n = i(51844),
    a = i(89217);
  let s = (0, n.z)(a.L.sdk.src, {
      etl: {
        domain: "arknights",
        sub_domain: "official"
      }
    }),
    r = {
      event() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        let [a, r] = t;
        Promise.all([i.e(13), i.e(979), i.e(24), i.e(710)]).then(i.bind(i, 30710)).then(e => {
          let {
            adapter: t
          } = e;
          s(e => {
            e.ETL.event(a, {
              ...r,
              domain: "arknights",
              sub_domain: "official",
              source: t.source.from
            });
          });
        });
      }
    };
});
