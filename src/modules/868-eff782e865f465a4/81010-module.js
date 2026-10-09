                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "createOptimisticTree", {
    enumerable: !0,
    get: function () {
      return function createOptimisticTree(e, t, n) {
        let a;
        let [i, o, s, u, l] = t || [null, {}],
          p = e[0],
          m = 1 === e.length,
          _ = null !== i && (0, r.matchSegment)(i, p),
          v = Object.keys(o).length > 1,
          b = !t || !_ || v,
          E = {};
        if (null !== i && _ && (E = o), !m && !v) {
          let t = createOptimisticTree(e.slice(1), E ? E.children : null, n || b);
          a = t;
        }
        let w = [p, {
          ...E,
          ...(a ? {
            children: a
          } : {})
        }];
        return s && (w[2] = s), !n && b ? w[3] = "refetch" : _ && u && (w[3] = u), _ && l && (w[4] = l), w;
      };
    }
  });
  let r = n(67365);
  ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
    value: !0
  }), Object.assign(t.default, t), e.exports = t.default);
});
