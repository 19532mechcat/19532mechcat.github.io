                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "getRouteMatcher", {
    enumerable: !0,
    get: function () {
      return getRouteMatcher;
    }
  });
  let r = n(95672);
  function getRouteMatcher(e) {
    let {
      re: t,
      groups: n
    } = e;
    return e => {
      let a = t.exec(e);
      if (!a) return !1;
      let decode = e => {
          try {
            return decodeURIComponent(e);
          } catch (e) {
            throw new r.DecodeError("failed to decode param");
          }
        },
        i = {};
      return Object.keys(n).forEach(e => {
        let t = n[e],
          r = a[t.pos];
        void 0 !== r && (i[e] = ~r.indexOf("/") ? r.split("/").map(e => decode(e)) : t.repeat ? [decode(r)] : decode(r));
      }), i;
    };
  }
});
