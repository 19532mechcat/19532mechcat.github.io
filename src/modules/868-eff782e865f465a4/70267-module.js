                                                                                                            
                                                    
(function (e, t) {
  "use strict";

  function readRecordValue(e) {
    if ("fulfilled" === e.status) return e.value;
    throw e;
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "readRecordValue", {
    enumerable: !0,
    get: function () {
      return readRecordValue;
    }
  }), ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
    value: !0
  }), Object.assign(t.default, t), e.exports = t.default);
});
