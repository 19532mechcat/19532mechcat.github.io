                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  let r, a, i, o, s, u;
  n.d(t, {
    PR: function () {
      return addClsInstrumentationHandler;
    },
    to: function () {
      return addFidInstrumentationHandler;
    },
    YF: function () {
      return addInpInstrumentationHandler;
    },
    $A: function () {
      return addLcpInstrumentationHandler;
    },
    _j: function () {
      return addPerformanceInstrumentationHandler;
    },
    _4: function () {
      return addTtfbInstrumentationHandler;
    }
  });
  var l = n(81412),
    p = n(71463),
    m = n(21571);
  let bindReporter = (e, t, n) => {
    let r, a;
    return i => {
      t.value >= 0 && (i || n) && ((a = t.value - (r || 0)) || void 0 === r) && (r = t.value, t.delta = a, e(t));
    };
  };
  var _ = n(88108);
  let generateUniqueID = () => `v3-${Date.now()}-${Math.floor(Math.random() * (9e12 - 1)) + 1e12}`;
  var v = n(46482);
  let getActivationStart = () => {
      let e = (0, v.W)();
      return e && e.activationStart || 0;
    },
    initMetric = (e, t) => {
      let n = (0, v.W)(),
        r = "navigate";
      return n && (r = _.WINDOW.document && _.WINDOW.document.prerendering || getActivationStart() > 0 ? "prerender" : n.type.replace(/_/g, "-")), {
        name: e,
        value: void 0 === t ? -1 : t,
        rating: "good",
        delta: 0,
        entries: [],
        id: generateUniqueID(),
        navigationType: r
      };
    },
    observe = (e, t, n) => {
      try {
        if (PerformanceObserver.supportedEntryTypes.includes(e)) {
          let r = new PerformanceObserver(e => {
            t(e.getEntries());
          });
          return r.observe(Object.assign({
            type: e,
            buffered: !0
          }, n || {})), r;
        }
      } catch (e) {}
    };
  var b = n(91768);
  let onCLS = e => {
    let t;
    let n = initMetric("CLS", 0),
      r = 0,
      a = [],
      handleEntries = e => {
        e.forEach(e => {
          if (!e.hadRecentInput) {
            let i = a[0],
              o = a[a.length - 1];
            r && 0 !== a.length && e.startTime - o.startTime < 1e3 && e.startTime - i.startTime < 5e3 ? (r += e.value, a.push(e)) : (r = e.value, a = [e]), r > n.value && (n.value = r, n.entries = a, t && t());
          }
        });
      },
      i = observe("layout-shift", handleEntries);
    if (i) {
      t = bindReporter(e, n);
      let stopListening = () => {
        handleEntries(i.takeRecords()), t(!0);
      };
      return (0, b.u)(stopListening), stopListening;
    }
  };
  var E = n(20549);
  let onFID = e => {
      let t;
      let n = (0, E.Y)(),
        r = initMetric("FID"),
        handleEntry = e => {
          e.startTime < n.firstHiddenTime && (r.value = e.processingStart - e.startTime, r.entries.push(e), t(!0));
        },
        handleEntries = e => {
          e.forEach(handleEntry);
        },
        a = observe("first-input", handleEntries);
      t = bindReporter(e, r), a && (0, b.u)(() => {
        handleEntries(a.takeRecords()), a.disconnect();
      }, !0);
    },
    w = 0,
    C = 1 / 0,
    j = 0,
    updateEstimate = e => {
      e.forEach(e => {
        e.interactionId && (C = Math.min(C, e.interactionId), w = (j = Math.max(j, e.interactionId)) ? (j - C) / 7 + 1 : 0);
      });
    },
    getInteractionCount = () => r ? w : performance.interactionCount || 0,
    initInteractionCountPolyfill = () => {
      "interactionCount" in performance || r || (r = observe("event", updateEstimate, {
        type: "event",
        buffered: !0,
        durationThreshold: 0
      }));
    },
    getInteractionCountForNavigation = () => getInteractionCount(),
    A = [],
    D = {},
    processEntry = e => {
      let t = A[A.length - 1],
        n = D[e.interactionId];
      if (n || A.length < 10 || e.duration > t.latency) {
        if (n) n.entries.push(e), n.latency = Math.max(n.latency, e.duration);else {
          let t = {
            id: e.interactionId,
            latency: e.duration,
            entries: [e]
          };
          D[t.id] = t, A.push(t);
        }
        A.sort((e, t) => t.latency - e.latency), A.splice(10).forEach(e => {
          delete D[e.id];
        });
      }
    },
    estimateP98LongestInteraction = () => {
      let e = Math.min(A.length - 1, Math.floor(getInteractionCountForNavigation() / 50));
      return A[e];
    },
    onINP = (e, t) => {
      let n;
      t = t || {}, initInteractionCountPolyfill();
      let r = initMetric("INP"),
        handleEntries = e => {
          e.forEach(e => {
            if (e.interactionId && processEntry(e), "first-input" === e.entryType) {
              let t = !A.some(t => t.entries.some(t => e.duration === t.duration && e.startTime === t.startTime));
              t && processEntry(e);
            }
          });
          let t = estimateP98LongestInteraction();
          t && t.latency !== r.value && (r.value = t.latency, r.entries = t.entries, n());
        },
        a = observe("event", handleEntries, {
          durationThreshold: t.durationThreshold || 40
        });
      n = bindReporter(e, r, t.reportAllChanges), a && (a.observe({
        type: "first-input",
        buffered: !0
      }), (0, b.u)(() => {
        handleEntries(a.takeRecords()), r.value < 0 && getInteractionCountForNavigation() > 0 && (r.value = 0, r.entries = []), n(!0);
      }));
    },
    F = {},
    onLCP = e => {
      let t;
      let n = (0, E.Y)(),
        r = initMetric("LCP"),
        handleEntries = e => {
          let a = e[e.length - 1];
          if (a) {
            let e = Math.max(a.startTime - getActivationStart(), 0);
            e < n.firstHiddenTime && (r.value = e, r.entries = [a], t());
          }
        },
        a = observe("largest-contentful-paint", handleEntries);
      if (a) {
        t = bindReporter(e, r);
        let stopListening = () => {
          F[r.id] || (handleEntries(a.takeRecords()), a.disconnect(), F[r.id] = !0, t(!0));
        };
        return ["keydown", "click"].forEach(e => {
          _.WINDOW.document && addEventListener(e, stopListening, {
            once: !0,
            capture: !0
          });
        }), (0, b.u)(stopListening, !0), stopListening;
      }
    },
    whenReady = e => {
      _.WINDOW.document && (_.WINDOW.document.prerendering ? addEventListener("prerenderingchange", () => whenReady(e), !0) : "complete" !== _.WINDOW.document.readyState ? addEventListener("load", () => whenReady(e), !0) : setTimeout(e, 0));
    },
    onTTFB = (e, t) => {
      t = t || {};
      let n = initMetric("TTFB"),
        r = bindReporter(e, n, t.reportAllChanges);
      whenReady(() => {
        let e = (0, v.W)();
        if (e) {
          if (n.value = Math.max(e.responseStart - getActivationStart(), 0), n.value < 0 || n.value > performance.now()) return;
          n.entries = [e], r(!0);
        }
      });
    },
    U = {},
    $ = {};
  function addClsInstrumentationHandler(e, t = !1) {
    return addMetricObserver("cls", e, instrumentCls, a, t);
  }
  function addLcpInstrumentationHandler(e, t = !1) {
    return addMetricObserver("lcp", e, instrumentLcp, o, t);
  }
  function addTtfbInstrumentationHandler(e) {
    return addMetricObserver("ttfb", e, instrumentTtfb, s);
  }
  function addFidInstrumentationHandler(e) {
    return addMetricObserver("fid", e, instrumentFid, i);
  }
  function addInpInstrumentationHandler(e) {
    return addMetricObserver("inp", e, instrumentInp, u);
  }
  function addPerformanceInstrumentationHandler(e, t) {
    return addHandler(e, t), $[e] || (function (e) {
      let t = {};
      "event" === e && (t.durationThreshold = 0), observe(e, t => {
        triggerHandlers(e, {
          entries: t
        });
      }, t);
    }(e), $[e] = !0), getCleanupCallback(e, t);
  }
  function triggerHandlers(e, t) {
    let n = U[e];
    if (n && n.length) for (let r of n) try {
      r(t);
    } catch (t) {
      m.X && l.kg.error(`Error while triggering instrumentation handler.
Type: ${e}
Name: ${(0, p.$P)(r)}
Error:`, t);
    }
  }
  function instrumentCls() {
    return onCLS(e => {
      triggerHandlers("cls", {
        metric: e
      }), a = e;
    });
  }
  function instrumentFid() {
    return onFID(e => {
      triggerHandlers("fid", {
        metric: e
      }), i = e;
    });
  }
  function instrumentLcp() {
    return onLCP(e => {
      triggerHandlers("lcp", {
        metric: e
      }), o = e;
    });
  }
  function instrumentTtfb() {
    return onTTFB(e => {
      triggerHandlers("ttfb", {
        metric: e
      }), s = e;
    });
  }
  function instrumentInp() {
    return onINP(e => {
      triggerHandlers("inp", {
        metric: e
      }), u = e;
    });
  }
  function addMetricObserver(e, t, n, r, a = !1) {
    let i;
    return addHandler(e, t), $[e] || (i = n(), $[e] = !0), r && t({
      metric: r
    }), getCleanupCallback(e, t, a ? i : void 0);
  }
  function addHandler(e, t) {
    U[e] = U[e] || [], U[e].push(t);
  }
  function getCleanupCallback(e, t, n) {
    return () => {
      n && n();
      let r = U[e];
      if (!r) return;
      let a = r.indexOf(t);
      -1 !== a && r.splice(a, 1);
    };
  }
});
