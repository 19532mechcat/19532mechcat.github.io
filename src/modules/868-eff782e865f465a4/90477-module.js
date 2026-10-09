                                                                                                            
                                                    
(function (e, t) {
  "use strict";

  function createRecordFromThenable(e) {
    return e.status = "pending", e.then(t => {
      "pending" === e.status && (e.status = "fulfilled", e.value = t);
    }, t => {
      "pending" === e.status && (e.status = "rejected", e.reason = t);
    }), e;
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "createRecordFromThenable", {
    enumerable: !0,
    get: function () {
      return createRecordFromThenable;
    }
  }), ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
    value: !0
  }), Object.assign(t.default, t), e.exports = t.default);
});
