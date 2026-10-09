                                                                                                            
                                                    
(function (e, t) {
  "use strict";

  function handleSmoothScroll(e, t) {
    if (void 0 === t && (t = {}), t.onlyHashChange) {
      e();
      return;
    }
    let n = document.documentElement,
      r = n.style.scrollBehavior;
    n.style.scrollBehavior = "auto", t.dontForceLayout || n.getClientRects(), e(), n.style.scrollBehavior = r;
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "handleSmoothScroll", {
    enumerable: !0,
    get: function () {
      return handleSmoothScroll;
    }
  });
});
