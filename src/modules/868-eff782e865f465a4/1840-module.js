                                                                                                           
                                                    
(function (e, t, n) {
  "use strict";

  n.d(t, {
    $G: function () {
      return truncate;
    },
    U0: function () {
      return stringMatchesSomePattern;
    },
    nK: function () {
      return safeJoin;
    }
  });
  var r = n(1533);
  function truncate(e, t = 0) {
    return "string" != typeof e || 0 === t ? e : e.length <= t ? e : `${e.slice(0, t)}...`;
  }
  function safeJoin(e, t) {
    if (!Array.isArray(e)) return "";
    let n = [];
    for (let t = 0; t < e.length; t++) {
      let a = e[t];
      try {
        (0, r.y1)(a) ? n.push("[VueViewModel]") : n.push(String(a));
      } catch (e) {
        n.push("[value cannot be serialized]");
      }
    }
    return n.join(t);
  }
  function stringMatchesSomePattern(e, t = [], n = !1) {
    return t.some(t => function (e, t, n = !1) {
      return !!(0, r.HD)(e) && ((0, r.Kj)(t) ? t.test(e) : !!(0, r.HD)(t) && (n ? e === t : e.includes(t)));
    }(e, t, n));
  }
});
