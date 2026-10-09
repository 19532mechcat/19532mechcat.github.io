                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  n.d(t, {
    $P: function () {
      return getFunctionName;
    },
    Sq: function () {
      return stackParserFromStackParserOptions;
    },
    pE: function () {
      return createStackParser;
    }
  });
  let r = /\(error: (.*)\)/,
    a = /captureMessage|captureException/;
  function createStackParser(...e) {
    let t = e.sort((e, t) => e[0] - t[0]).map(e => e[1]);
    return (e, n = 0) => {
      let i = [],
        o = e.split("\n");
      for (let e = n; e < o.length; e++) {
        let n = o[e];
        if (n.length > 1024) continue;
        let a = r.test(n) ? n.replace(r, "$1") : n;
        if (!a.match(/\S*Error: /)) {
          for (let e of t) {
            let t = e(a);
            if (t) {
              i.push(t);
              break;
            }
          }
          if (i.length >= 50) break;
        }
      }
      return function (e) {
        if (!e.length) return [];
        let t = Array.from(e);
        return /sentryWrapped/.test(t[t.length - 1].function || "") && t.pop(), t.reverse(), a.test(t[t.length - 1].function || "") && (t.pop(), a.test(t[t.length - 1].function || "") && t.pop()), t.slice(0, 50).map(e => ({
          ...e,
          filename: e.filename || t[t.length - 1].filename,
          function: e.function || "?"
        }));
      }(i);
    };
  }
  function stackParserFromStackParserOptions(e) {
    return Array.isArray(e) ? createStackParser(...e) : e;
  }
  let i = "<anonymous>";
  function getFunctionName(e) {
    try {
      if (!e || "function" != typeof e) return i;
      return e.name || i;
    } catch (e) {
      return i;
    }
  }
});
