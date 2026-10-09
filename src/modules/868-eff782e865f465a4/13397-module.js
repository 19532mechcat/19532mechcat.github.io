                                                                                                            
                                                    
(function (e, t) {
  "use strict";

     
                  
                               
   
                                                      
   
                                                                   
                                                           
    
  function f(e, t) {
    var n = e.length;
    for (e.push(t); 0 < n;) {
      var r = n - 1 >>> 1,
        a = e[r];
      if (0 < g(a, t)) e[r] = t, e[n] = a, n = r;else break;
    }
  }
  function h(e) {
    return 0 === e.length ? null : e[0];
  }
  function k(e) {
    if (0 === e.length) return null;
    var t = e[0],
      n = e.pop();
    if (n !== t) {
      e[0] = n;
      for (var r = 0, a = e.length, i = a >>> 1; r < i;) {
        var o = 2 * (r + 1) - 1,
          s = e[o],
          u = o + 1,
          l = e[u];
        if (0 > g(s, n)) u < a && 0 > g(l, s) ? (e[r] = l, e[u] = n, r = u) : (e[r] = s, e[o] = n, r = o);else if (u < a && 0 > g(l, n)) e[r] = l, e[u] = n, r = u;else break;
      }
    }
    return t;
  }
  function g(e, t) {
    var n = e.sortIndex - t.sortIndex;
    return 0 !== n ? n : e.id - t.id;
  }
  if (t.unstable_now = void 0, "object" == typeof performance && "function" == typeof performance.now) {
    var n,
      r = performance;
    t.unstable_now = function () {
      return r.now();
    };
  } else {
    var a = Date,
      i = a.now();
    t.unstable_now = function () {
      return a.now() - i;
    };
  }
  var o = [],
    s = [],
    u = 1,
    l = null,
    p = 3,
    m = !1,
    _ = !1,
    v = !1,
    b = "function" == typeof setTimeout ? setTimeout : null,
    E = "function" == typeof clearTimeout ? clearTimeout : null,
    w = "undefined" != typeof setImmediate ? setImmediate : null;
  function G(e) {
    for (var t = h(s); null !== t;) {
      if (null === t.callback) k(s);else if (t.startTime <= e) k(s), t.sortIndex = t.expirationTime, f(o, t);else break;
      t = h(s);
    }
  }
  function H(e) {
    if (v = !1, G(e), !_) {
      if (null !== h(o)) _ = !0, I();else {
        var t = h(s);
        null !== t && J(H, t.startTime - e);
      }
    }
  }
  "undefined" != typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  var C = !1,
    j = -1,
    A = 5,
    D = -1;
  function O() {
    return !(t.unstable_now() - D < A);
  }
  function P() {
    if (C) {
      var e = t.unstable_now();
      D = e;
      var r = !0;
      try {
        e: {
          _ = !1, v && (v = !1, E(j), j = -1), m = !0;
          var a = p;
          try {
            t: {
              for (G(e), l = h(o); null !== l && !(l.expirationTime > e && O());) {
                var i = l.callback;
                if ("function" == typeof i) {
                  l.callback = null, p = l.priorityLevel;
                  var u = i(l.expirationTime <= e);
                  if (e = t.unstable_now(), "function" == typeof u) {
                    l.callback = u, G(e), r = !0;
                    break t;
                  }
                  l === h(o) && k(o), G(e);
                } else k(o);
                l = h(o);
              }
              if (null !== l) r = !0;else {
                var b = h(s);
                null !== b && J(H, b.startTime - e), r = !1;
              }
            }
            break e;
          } finally {
            l = null, p = a, m = !1;
          }
          r = void 0;
        }
      } finally {
        r ? n() : C = !1;
      }
    }
  }
  if ("function" == typeof w) n = function () {
    w(P);
  };else if ("undefined" != typeof MessageChannel) {
    var F = new MessageChannel(),
      U = F.port2;
    F.port1.onmessage = P, n = function () {
      U.postMessage(null);
    };
  } else n = function () {
    b(P, 0);
  };
  function I() {
    C || (C = !0, n());
  }
  function J(e, n) {
    j = b(function () {
      e(t.unstable_now());
    }, n);
  }
  t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function (e) {
    e.callback = null;
  }, t.unstable_continueExecution = function () {
    _ || m || (_ = !0, I());
  }, t.unstable_forceFrameRate = function (e) {
    0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : A = 0 < e ? Math.floor(1e3 / e) : 5;
  }, t.unstable_getCurrentPriorityLevel = function () {
    return p;
  }, t.unstable_getFirstCallbackNode = function () {
    return h(o);
  }, t.unstable_next = function (e) {
    switch (p) {
      case 1:
      case 2:
      case 3:
        var t = 3;
        break;
      default:
        t = p;
    }
    var n = p;
    p = t;
    try {
      return e();
    } finally {
      p = n;
    }
  }, t.unstable_pauseExecution = function () {}, t.unstable_requestPaint = function () {}, t.unstable_runWithPriority = function (e, t) {
    switch (e) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        e = 3;
    }
    var n = p;
    p = e;
    try {
      return t();
    } finally {
      p = n;
    }
  }, t.unstable_scheduleCallback = function (e, n, r) {
    var a = t.unstable_now();
    switch (r = "object" == typeof r && null !== r && "number" == typeof (r = r.delay) && 0 < r ? a + r : a, e) {
      case 1:
        var i = -1;
        break;
      case 2:
        i = 250;
        break;
      case 5:
        i = 1073741823;
        break;
      case 4:
        i = 1e4;
        break;
      default:
        i = 5e3;
    }
    return i = r + i, e = {
      id: u++,
      callback: n,
      priorityLevel: e,
      startTime: r,
      expirationTime: i,
      sortIndex: -1
    }, r > a ? (e.sortIndex = r, f(s, e), null === h(o) && e === h(s) && (v ? (E(j), j = -1) : v = !0, J(H, r - a))) : (e.sortIndex = i, f(o, e), _ || m || (_ = !0, I())), e;
  }, t.unstable_shouldYield = O, t.unstable_wrapCallback = function (e) {
    var t = p;
    return function () {
      var n = p;
      p = t;
      try {
        return e.apply(this, arguments);
      } finally {
        p = n;
      }
    };
  };
});
