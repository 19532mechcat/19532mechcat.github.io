                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  n.d(t, {
    U: function () {
      return addFetchInstrumentationHandler;
    }
  });
  var r = n(57683),
    a = n(66991),
    i = n(30779),
    o = n(74750);
  function addFetchInstrumentationHandler(e) {
    let t = "fetch";
    (0, o.Hj)(t, e), (0, o.D2)(t, instrumentFetch);
  }
  function instrumentFetch() {
    (0, a.t$)() && (0, r.hl)(i.GLOBAL_OBJ, "fetch", function (e) {
      return function (...t) {
        let {
            method: n,
            url: r
          } = function (e) {
            if (0 === e.length) return {
              method: "GET",
              url: ""
            };
            if (2 === e.length) {
              let [t, n] = e;
              return {
                url: getUrlFromResource(t),
                method: hasProp(n, "method") ? String(n.method).toUpperCase() : "GET"
              };
            }
            let t = e[0];
            return {
              url: getUrlFromResource(t),
              method: hasProp(t, "method") ? String(t.method).toUpperCase() : "GET"
            };
          }(t),
          a = {
            args: t,
            fetchData: {
              method: n,
              url: r
            },
            startTimestamp: Date.now()
          };
        return (0, o.rK)("fetch", {
          ...a
        }), e.apply(i.GLOBAL_OBJ, t).then(e => {
          let t = {
            ...a,
            endTimestamp: Date.now(),
            response: e
          };
          return (0, o.rK)("fetch", t), e;
        }, e => {
          let t = {
            ...a,
            endTimestamp: Date.now(),
            error: e
          };
          throw (0, o.rK)("fetch", t), e;
        });
      };
    });
  }
  function hasProp(e, t) {
    return !!e && "object" == typeof e && !!e[t];
  }
  function getUrlFromResource(e) {
    return "string" == typeof e ? e : e ? hasProp(e, "url") ? e.url : e.toString ? e.toString() : "" : "";
  }
});
