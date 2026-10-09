                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "addBasePath", {
    enumerable: !0,
    get: function () {
      return addBasePath;
    }
  });
  let r = n(80823),
    a = n(15263);
  function addBasePath(e, t) {
    return (0, a.normalizePathTrailingSlash)((0, r.addPathPrefix)(e, ""));
  }
  ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
    value: !0
  }), Object.assign(t.default, t), e.exports = t.default);
});
