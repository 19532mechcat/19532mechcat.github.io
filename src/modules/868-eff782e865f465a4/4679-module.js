                                                                                                           
                                                    
(function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "getSegmentParam", {
    enumerable: !0,
    get: function () {
      return getSegmentParam;
    }
  });
  let r = n(6513);
  function getSegmentParam(e) {
    let t = r.INTERCEPTION_ROUTE_MARKERS.find(t => e.startsWith(t));
    return (t && (e = e.slice(t.length)), e.startsWith("[[...") && e.endsWith("]]")) ? {
      type: "optional-catchall",
      param: e.slice(5, -2)
    } : e.startsWith("[...") && e.endsWith("]") ? {
      type: "catchall",
      param: e.slice(4, -1)
    } : e.startsWith("[") && e.endsWith("]") ? {
      type: "dynamic",
      param: e.slice(1, -1)
    } : null;
  }
});
