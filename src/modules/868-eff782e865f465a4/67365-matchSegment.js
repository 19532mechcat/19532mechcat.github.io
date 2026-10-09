                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), function (e, t) {
    for (var n in t) Object.defineProperty(e, n, {
      enumerable: !0,
      get: t[n]
    });
  }(t, {
    matchSegment: function () {
      return matchSegment;
    },
    canSegmentBeOverridden: function () {
      return canSegmentBeOverridden;
    }
  });
  let r = n(4679),
    matchSegment = (e, t) => "string" == typeof e ? "string" == typeof t && e === t : "string" != typeof t && e[0] === t[0] && e[1] === t[1],
    canSegmentBeOverridden = (e, t) => {
      var n;
      return !Array.isArray(e) && !!Array.isArray(t) && (null == (n = (0, r.getSegmentParam)(e)) ? void 0 : n.param) === t[0];
    };
  ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
    value: !0
  }), Object.assign(t.default, t), e.exports = t.default);
});
