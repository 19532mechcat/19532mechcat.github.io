                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  n.d(t, {
    $2: function () {
      return rejectedSyncPromise;
    },
    WD: function () {
      return resolvedSyncPromise;
    },
    cW: function () {
      return SyncPromise;
    }
  });
  var r,
    a,
    i = n(1533);
  function resolvedSyncPromise(e) {
    return new SyncPromise(t => {
      t(e);
    });
  }
  function rejectedSyncPromise(e) {
    return new SyncPromise((t, n) => {
      n(e);
    });
  }
  (r = a || (a = {}))[r.PENDING = 0] = "PENDING", r[r.RESOLVED = 1] = "RESOLVED", r[r.REJECTED = 2] = "REJECTED";
  let SyncPromise = class SyncPromise {
    constructor(e) {
      SyncPromise.prototype.__init.call(this), SyncPromise.prototype.__init2.call(this), SyncPromise.prototype.__init3.call(this), SyncPromise.prototype.__init4.call(this), this._state = a.PENDING, this._handlers = [];
      try {
        e(this._resolve, this._reject);
      } catch (e) {
        this._reject(e);
      }
    }
    then(e, t) {
      return new SyncPromise((n, r) => {
        this._handlers.push([!1, t => {
          if (e) try {
            n(e(t));
          } catch (e) {
            r(e);
          } else n(t);
        }, e => {
          if (t) try {
            n(t(e));
          } catch (e) {
            r(e);
          } else r(e);
        }]), this._executeHandlers();
      });
    }
    catch(e) {
      return this.then(e => e, e);
    }
    finally(e) {
      return new SyncPromise((t, n) => {
        let r, a;
        return this.then(t => {
          a = !1, r = t, e && e();
        }, t => {
          a = !0, r = t, e && e();
        }).then(() => {
          if (a) {
            n(r);
            return;
          }
          t(r);
        });
      });
    }
    __init() {
      this._resolve = e => {
        this._setResult(a.RESOLVED, e);
      };
    }
    __init2() {
      this._reject = e => {
        this._setResult(a.REJECTED, e);
      };
    }
    __init3() {
      this._setResult = (e, t) => {
        if (this._state === a.PENDING) {
          if ((0, i.J8)(t)) {
            t.then(this._resolve, this._reject);
            return;
          }
          this._state = e, this._value = t, this._executeHandlers();
        }
      };
    }
    __init4() {
      this._executeHandlers = () => {
        if (this._state === a.PENDING) return;
        let e = this._handlers.slice();
        this._handlers = [], e.forEach(e => {
          e[0] || (this._state === a.RESOLVED && e[1](this._value), this._state === a.REJECTED && e[2](this._value), e[0] = !0);
        });
      };
    }
  };
});
