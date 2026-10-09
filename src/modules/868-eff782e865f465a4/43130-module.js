                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "default", {
    enumerable: !0,
    get: function () {
      return RenderFromTemplateContext;
    }
  });
  let r = n(53388),
    a = r._(n(58036)),
    i = n(61847);
  function RenderFromTemplateContext() {
    let e = (0, a.useContext)(i.TemplateContext);
    return a.default.createElement(a.default.Fragment, null, e);
  }
  ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
    value: !0
  }), Object.assign(t.default, t), e.exports = t.default);
});
