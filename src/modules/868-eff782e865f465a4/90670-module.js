                                                                                                            
                                                    
(function (e, t) {
  "use strict";

  function isGroupSegment(e) {
    return "(" === e[0] && e.endsWith(")");
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "isGroupSegment", {
    enumerable: !0,
    get: function () {
      return isGroupSegment;
    }
  });
});
