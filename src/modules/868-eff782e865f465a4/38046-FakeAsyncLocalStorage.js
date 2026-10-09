                                                                                                            
                                                    
(function (e, t) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "createAsyncLocalStorage", {
    enumerable: !0,
    get: function () {
      return createAsyncLocalStorage;
    }
  });
  let n = Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");
  let FakeAsyncLocalStorage = class FakeAsyncLocalStorage {
    disable() {
      throw n;
    }
    getStore() {}
    run() {
      throw n;
    }
    exit() {
      throw n;
    }
    enterWith() {
      throw n;
    }
  };
  let r = globalThis.AsyncLocalStorage;
  function createAsyncLocalStorage() {
    return r ? new r() : new FakeAsyncLocalStorage();
  }
  ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
    value: !0
  }), Object.assign(t.default, t), e.exports = t.default);
});
