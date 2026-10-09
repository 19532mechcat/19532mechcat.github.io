                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "PromiseQueue", {
    enumerable: !0,
    get: function () {
      return PromiseQueue;
    }
  });
  let r = n(47319),
    a = n(82159);
  var i = a._("_maxConcurrency"),
    o = a._("_runningCount"),
    s = a._("_queue"),
    u = a._("_processNext");
  let PromiseQueue = class PromiseQueue {
    enqueue(e) {
      let t, n;
      let a = new Promise((e, r) => {
          t = e, n = r;
        }),
        task = async () => {
          try {
            r._(this, o)[o]++;
            let n = await e();
            t(n);
          } catch (e) {
            n(e);
          } finally {
            r._(this, o)[o]--, r._(this, u)[u]();
          }
        };
      return r._(this, s)[s].push({
        promiseFn: a,
        task
      }), r._(this, u)[u](), a;
    }
    bump(e) {
      let t = r._(this, s)[s].findIndex(t => t.promiseFn === e);
      if (t > -1) {
        let e = r._(this, s)[s].splice(t, 1)[0];
        r._(this, s)[s].unshift(e), r._(this, u)[u](!0);
      }
    }
    constructor(e = 5) {
      Object.defineProperty(this, u, {
        value: processNext
      }), Object.defineProperty(this, i, {
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, o, {
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, s, {
        writable: !0,
        value: void 0
      }), r._(this, i)[i] = e, r._(this, o)[o] = 0, r._(this, s)[s] = [];
    }
  };
  function processNext(e) {
    if (void 0 === e && (e = !1), (r._(this, o)[o] < r._(this, i)[i] || e) && r._(this, s)[s].length > 0) {
      var t;
      null == (t = r._(this, s)[s].shift()) || t.task();
    }
  }
  ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
    value: !0
  }), Object.assign(t.default, t), e.exports = t.default);
});
