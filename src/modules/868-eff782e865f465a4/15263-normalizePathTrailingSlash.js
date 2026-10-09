                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "normalizePathTrailingSlash", {
    enumerable: !0,
    get: function () {
      return normalizePathTrailingSlash;
    }
  });
  let r = n(76034),
    a = n(67998),
    normalizePathTrailingSlash = e => {
      if (!e.startsWith("/")) return e;
      let {
        pathname: t,
        query: n,
        hash: i
      } = (0, a.parsePath)(e);
      return "" + (0, r.removeTrailingSlash)(t) + n + i;
    };
  ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
    value: !0
  }), Object.assign(t.default, t), e.exports = t.default);
});
