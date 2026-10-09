                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "callServer", {
    enumerable: !0,
    get: function () {
      return callServer;
    }
  });
  let r = n(75667);
  async function callServer(e, t) {
    let n = (0, r.getServerActionDispatcher)();
    if (!n) throw Error("Invariant: missing action dispatcher.");
    return new Promise((r, a) => {
      n({
        actionId: e,
        actionArgs: t,
        resolve: r,
        reject: a
      });
    });
  }
  ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
    value: !0
  }), Object.assign(t.default, t), e.exports = t.default);
});
