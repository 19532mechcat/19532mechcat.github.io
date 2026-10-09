                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "serverPatchReducer", {
    enumerable: !0,
    get: function () {
      return serverPatchReducer;
    }
  });
  let r = n(76237),
    a = n(23660),
    i = n(48636),
    o = n(69792),
    s = n(32877),
    u = n(18968);
  function serverPatchReducer(e, t) {
    let {
        flightData: n,
        previousTree: l,
        overrideCanonicalUrl: p,
        cache: m,
        mutable: _
      } = t,
      v = JSON.stringify(l) === JSON.stringify(e.tree);
    if (!v) return console.log("TREE MISMATCH"), e;
    if (_.previousTree) return (0, u.handleMutable)(e, _);
    if ("string" == typeof n) return (0, o.handleExternalUrl)(e, _, n, e.pushRef.pendingPush);
    let b = e.tree,
      E = e.cache;
    for (let t of n) {
      let n = t.slice(0, -4),
        [u] = t.slice(-3, -2),
        l = (0, a.applyRouterStatePatchToTree)(["", ...n], b, u);
      if (null === l) throw Error("SEGMENT MISMATCH");
      if ((0, i.isNavigatingToNewRootLayout)(b, l)) return (0, o.handleExternalUrl)(e, _, e.canonicalUrl, e.pushRef.pendingPush);
      let v = p ? (0, r.createHrefFromUrl)(p) : void 0;
      v && (_.canonicalUrl = v), (0, s.applyFlightData)(E, m, t), _.previousTree = b, _.patchedTree = l, _.cache = m, E = m, b = l;
    }
    return (0, u.handleMutable)(e, _);
  }
  ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
    value: !0
  }), Object.assign(t.default, t), e.exports = t.default);
});
