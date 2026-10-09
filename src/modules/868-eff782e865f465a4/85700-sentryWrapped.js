                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  let r, a, i, o, s, u, l;
  n.d(t, {
    S1: function () {
      return client_init;
    }
  });
  var p,
    m,
    _ = {};
  n.r(_), n.d(_, {
    FunctionToString: function () {
      return F;
    },
    InboundFilters: function () {
      return en;
    },
    LinkedErrors: function () {
      return eo;
    }
  });
  var v = {};
  n.r(v), n.d(v, {
    Breadcrumbs: function () {
      return eM;
    },
    Dedupe: function () {
      return eB;
    },
    GlobalHandlers: function () {
      return eb;
    },
    HttpContext: function () {
      return eH;
    },
    LinkedErrors: function () {
      return eL;
    },
    TryCatch: function () {
      return eR;
    }
  });
  var b = n(70326);
  function applySdkMetadata(e, t, n = [t], r = "npm") {
    let a = e._metadata || {};
    a.sdk || (a.sdk = {
      name: `sentry.javascript.${t}`,
      packages: n.map(e => ({
        name: `${r}:@sentry/${e}`,
        version: b.J
      })),
      version: b.J
    }), e._metadata = a;
  }
  var E = n(92917);
  function hasTracingEnabled(e) {
    if ("boolean" == typeof __SENTRY_TRACING__ && !__SENTRY_TRACING__) return !1;
    let t = (0, E.s3)(),
      n = e || t && t.getOptions();
    return !!n && (n.enableTracing || "tracesSampleRate" in n || "tracesSampler" in n);
  }
  var w = n(57683),
    C = n(72567);
  let j = "FunctionToString",
    A = new WeakMap(),
    D = (0, C._I)(() => ({
      name: j,
      setupOnce() {
        r = Function.prototype.toString;
        try {
          Function.prototype.toString = function (...e) {
            let t = (0, w.HK)(this),
              n = A.has((0, E.s3)()) && void 0 !== t ? t : this;
            return r.apply(n, e);
          };
        } catch (e) {}
      },
      setup(e) {
        A.set(e, !0);
      }
    })),
    F = (0, C.RN)(j, D);
  var U = n(81412),
    $ = n(44040),
    B = n(1840),
    q = n(36756);
  let z = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/, /^ResizeObserver loop completed with undelivered notifications.$/, /^Cannot redefine property: googletag$/],
    K = [/^.*\/healthcheck$/, /^.*\/healthy$/, /^.*\/live$/, /^.*\/ready$/, /^.*\/heartbeat$/, /^.*\/health$/, /^.*\/healthz$/],
    ee = "InboundFilters",
    et = (0, C._I)((e = {}) => ({
      name: ee,
      setupOnce() {},
      processEvent(t, n, r) {
        var a;
        let i = r.getOptions(),
          o = function (e = {}, t = {}) {
            return {
              allowUrls: [...(e.allowUrls || []), ...(t.allowUrls || [])],
              denyUrls: [...(e.denyUrls || []), ...(t.denyUrls || [])],
              ignoreErrors: [...(e.ignoreErrors || []), ...(t.ignoreErrors || []), ...(e.disableErrorDefaults ? [] : z)],
              ignoreTransactions: [...(e.ignoreTransactions || []), ...(t.ignoreTransactions || []), ...(e.disableTransactionDefaults ? [] : K)],
              ignoreInternal: void 0 === e.ignoreInternal || e.ignoreInternal
            };
          }(e, i);
        return (o.ignoreInternal && function (e) {
          try {
            return "SentryError" === e.exception.values[0].type;
          } catch (e) {}
          return !1;
        }(t) ? (q.X && U.kg.warn(`Event dropped due to being internal Sentry Error.
Event: ${(0, $.jH)(t)}`), 0) : (a = o.ignoreErrors, !t.type && a && a.length && function (e) {
          let t;
          let n = [];
          e.message && n.push(e.message);
          try {
            t = e.exception.values[e.exception.values.length - 1];
          } catch (e) {}
          return t && t.value && (n.push(t.value), t.type && n.push(`${t.type}: ${t.value}`)), q.X && 0 === n.length && U.kg.error(`Could not extract message for event ${(0, $.jH)(e)}`), n;
        }(t).some(e => (0, B.U0)(e, a))) ? (q.X && U.kg.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${(0, $.jH)(t)}`), 0) : !function (e, t) {
          if ("transaction" !== e.type || !t || !t.length) return !1;
          let n = e.transaction;
          return !!n && (0, B.U0)(n, t);
        }(t, o.ignoreTransactions) ? !function (e, t) {
          if (!t || !t.length) return !1;
          let n = _getEventFilterUrl(e);
          return !!n && (0, B.U0)(n, t);
        }(t, o.denyUrls) ? function (e, t) {
          if (!t || !t.length) return !0;
          let n = _getEventFilterUrl(e);
          return !n || (0, B.U0)(n, t);
        }(t, o.allowUrls) || (q.X && U.kg.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${(0, $.jH)(t)}.
Url: ${_getEventFilterUrl(t)}`), 0) : (q.X && U.kg.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${(0, $.jH)(t)}.
Url: ${_getEventFilterUrl(t)}`), 0) : (q.X && U.kg.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${(0, $.jH)(t)}`), 0)) ? t : null;
      }
    })),
    en = (0, C.RN)(ee, et);
  function _getEventFilterUrl(e) {
    try {
      let t;
      try {
        t = e.exception.values[0].stacktrace.frames;
      } catch (e) {}
      return t ? function (e = []) {
        for (let t = e.length - 1; t >= 0; t--) {
          let n = e[t];
          if (n && "<anonymous>" !== n.filename && "[native code]" !== n.filename) return n.filename || null;
        }
        return null;
      }(t) : null;
    } catch (t) {
      return q.X && U.kg.error(`Cannot extract url for event ${(0, $.jH)(e)}`), null;
    }
  }
  var er = n(1533);
  function applyAggregateErrorsToEvent(e, t, n = 250, r, a, i, o) {
    if (!i.exception || !i.exception.values || !o || !(0, er.V9)(o.originalException, Error)) return;
    let s = i.exception.values.length > 0 ? i.exception.values[i.exception.values.length - 1] : void 0;
    s && (i.exception.values = function aggregateExceptionsFromError(e, t, n, r, a, i, o, s) {
      if (i.length >= n + 1) return i;
      let u = [...i];
      if ((0, er.V9)(r[a], Error)) {
        applyExceptionGroupFieldsForParentException(o, s);
        let i = e(t, r[a]),
          l = u.length;
        applyExceptionGroupFieldsForChildException(i, a, l, s), u = aggregateExceptionsFromError(e, t, n, r[a], a, [i, ...u], i, l);
      }
      return Array.isArray(r.errors) && r.errors.forEach((r, i) => {
        if ((0, er.V9)(r, Error)) {
          applyExceptionGroupFieldsForParentException(o, s);
          let l = e(t, r),
            p = u.length;
          applyExceptionGroupFieldsForChildException(l, `errors[${i}]`, p, s), u = aggregateExceptionsFromError(e, t, n, r, a, [l, ...u], l, p);
        }
      }), u;
    }(e, t, a, o.originalException, r, i.exception.values, s, 0).map(e => (e.value && (e.value = (0, B.$G)(e.value, n)), e)));
  }
  function applyExceptionGroupFieldsForParentException(e, t) {
    e.mechanism = e.mechanism || {
      type: "generic",
      handled: !0
    }, e.mechanism = {
      ...e.mechanism,
      ...("AggregateError" === e.type && {
        is_exception_group: !0
      }),
      exception_id: t
    };
  }
  function applyExceptionGroupFieldsForChildException(e, t, n, r) {
    e.mechanism = e.mechanism || {
      type: "generic",
      handled: !0
    }, e.mechanism = {
      ...e.mechanism,
      type: "chained",
      source: t,
      exception_id: n,
      parent_id: r
    };
  }
  function exceptionFromError(e, t) {
    let n = {
        type: t.name || t.constructor.name,
        value: t.message
      },
      r = e(t.stack || "", 1);
    return r.length && (n.stacktrace = {
      frames: r
    }), n;
  }
  let ea = "LinkedErrors",
    ei = (0, C._I)((e = {}) => {
      let t = e.limit || 5,
        n = e.key || "cause";
      return {
        name: ea,
        setupOnce() {},
        preprocessEvent(e, r, a) {
          let i = a.getOptions();
          applyAggregateErrorsToEvent(exceptionFromError, i.stackParser, i.maxValueLength, n, t, e, r);
        }
      };
    }),
    eo = (0, C.RN)(ea, ei);
  var es = n(30779);
  let eu = es.GLOBAL_OBJ,
    el = 0;
  function wrap(e, t = {}, n) {
    if ("function" != typeof e) return e;
    try {
      let t = e.__sentry_wrapped__;
      if (t) return t;
      if ((0, w.HK)(e)) return e;
    } catch (t) {
      return e;
    }
    let sentryWrapped = function () {
      let r = Array.prototype.slice.call(arguments);
      try {
        n && "function" == typeof n && n.apply(this, arguments);
        let a = r.map(e => wrap(e, t));
        return e.apply(this, a);
      } catch (e) {
        throw el++, setTimeout(() => {
          el--;
        }), (0, E.$e)(n => {
          n.addEventProcessor(e => (t.mechanism && ((0, $.Db)(e, void 0, void 0), (0, $.EG)(e, t.mechanism)), e.extra = {
            ...e.extra,
            arguments: r
          }, e)), (0, E.Tb)(e);
        }), e;
      }
    };
    try {
      for (let t in e) Object.prototype.hasOwnProperty.call(e, t) && (sentryWrapped[t] = e[t]);
    } catch (e) {}
    (0, w.$Q)(sentryWrapped, e), (0, w.xp)(e, "__sentry_wrapped__", sentryWrapped);
    try {
      let t = Object.getOwnPropertyDescriptor(sentryWrapped, "name");
      t.configurable && Object.defineProperty(sentryWrapped, "name", {
        get: () => e.name
      });
    } catch (e) {}
    return sentryWrapped;
  }
  var ec = n(74750);
  let ed = null;
  function addGlobalErrorInstrumentationHandler(e) {
    let t = "error";
    (0, ec.Hj)(t, e), (0, ec.D2)(t, instrumentError);
  }
  function instrumentError() {
    ed = es.GLOBAL_OBJ.onerror, es.GLOBAL_OBJ.onerror = function (e, t, n, r, a) {
      return (0, ec.rK)("error", {
        column: r,
        error: a,
        line: n,
        msg: e,
        url: t
      }), !!ed && !ed.__SENTRY_LOADER__ && ed.apply(this, arguments);
    }, es.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = !0;
  }
  let ef = null;
  function addGlobalUnhandledRejectionInstrumentationHandler(e) {
    let t = "unhandledrejection";
    (0, ec.Hj)(t, e), (0, ec.D2)(t, instrumentUnhandledRejection);
  }
  function instrumentUnhandledRejection() {
    ef = es.GLOBAL_OBJ.onunhandledrejection, es.GLOBAL_OBJ.onunhandledrejection = function (e) {
      return (0, ec.rK)("unhandledrejection", e), !ef || !!ef.__SENTRY_LOADER__ || ef.apply(this, arguments);
    }, es.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0;
  }
  var ep = n(27477);
  let eh = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
  var eg = n(20312),
    em = n(66233);
  function eventbuilder_exceptionFromError(e, t) {
    let n = eventbuilder_parseStackFrames(e, t),
      r = {
        type: t && t.name,
        value: function (e) {
          let t = e && e.message;
          return t ? t.error && "string" == typeof t.error.message ? t.error.message : t : "No error message";
        }(t)
      };
    return n.length && (r.stacktrace = {
      frames: n
    }), void 0 === r.type && "" === r.value && (r.value = "Unrecoverable error caught"), r;
  }
  function eventFromError(e, t) {
    return {
      exception: {
        values: [eventbuilder_exceptionFromError(e, t)]
      }
    };
  }
  function eventbuilder_parseStackFrames(e, t) {
    let n = t.stacktrace || t.stack || "",
      r = function (e) {
        if (e) {
          if ("number" == typeof e.framesToPop) return e.framesToPop;
          if (e_.test(e.message)) return 1;
        }
        return 0;
      }(t);
    try {
      return e(n, r);
    } catch (e) {}
    return [];
  }
  let e_ = /Minified React error #\d+;/i;
  function eventbuilder_eventFromUnknownInput(e, t, n, r, a) {
    let i;
    if ((0, er.VW)(t) && t.error) return eventFromError(e, t.error);
    if ((0, er.TX)(t) || (0, er.fm)(t)) {
      if ("stack" in t) i = eventFromError(e, t);else {
        let a = t.name || ((0, er.TX)(t) ? "DOMError" : "DOMException"),
          o = t.message ? `${a}: ${t.message}` : a;
        i = eventFromString(e, o, n, r), (0, $.Db)(i, o);
      }
      return "code" in t && (i.tags = {
        ...i.tags,
        "DOMException.code": `${t.code}`
      }), i;
    }
    return (0, er.VZ)(t) ? eventFromError(e, t) : ((0, er.PO)(t) || (0, er.cO)(t) ? i = function (e, t, n, r) {
      let a = (0, E.s3)(),
        i = a && a.getOptions().normalizeDepth,
        o = {
          exception: {
            values: [{
              type: (0, er.cO)(t) ? t.constructor.name : r ? "UnhandledRejection" : "Error",
              value: function (e, {
                isUnhandledRejection: t
              }) {
                let n = (0, w.zf)(e),
                  r = t ? "promise rejection" : "exception";
                if ((0, er.VW)(e)) return `Event \`ErrorEvent\` captured as ${r} with message \`${e.message}\``;
                if ((0, er.cO)(e)) {
                  let t = function (e) {
                    try {
                      let t = Object.getPrototypeOf(e);
                      return t ? t.constructor.name : void 0;
                    } catch (e) {}
                  }(e);
                  return `Event \`${t}\` (type=${e.type}) captured as ${r}`;
                }
                return `Object captured as ${r} with keys: ${n}`;
              }(t, {
                isUnhandledRejection: r
              })
            }]
          },
          extra: {
            __serialized__: (0, eg.Qy)(t, i)
          }
        };
      if (n) {
        let t = eventbuilder_parseStackFrames(e, n);
        t.length && (o.exception.values[0].stacktrace = {
          frames: t
        });
      }
      return o;
    }(e, t, n, a) : (i = eventFromString(e, t, n, r), (0, $.Db)(i, `${t}`, void 0)), (0, $.EG)(i, {
      synthetic: !0
    }), i);
  }
  function eventFromString(e, t, n, r) {
    let a = {};
    if (r && n) {
      let r = eventbuilder_parseStackFrames(e, n);
      r.length && (a.exception = {
        values: [{
          value: t,
          stacktrace: {
            frames: r
          }
        }]
      });
    }
    if ((0, er.Le)(t)) {
      let {
        __sentry_template_string__: e,
        __sentry_template_values__: n
      } = t;
      return a.logentry = {
        message: e,
        params: n
      }, a;
    }
    return a.message = t, a;
  }
  let ey = "GlobalHandlers",
    ev = (0, C._I)((e = {}) => {
      let t = {
        onerror: !0,
        onunhandledrejection: !0,
        ...e
      };
      return {
        name: ey,
        setupOnce() {
          Error.stackTraceLimit = 50;
        },
        setup(e) {
          t.onerror && (addGlobalErrorInstrumentationHandler(t => {
            let {
              stackParser: n,
              attachStacktrace: r
            } = getOptions();
            if ((0, E.s3)() !== e || el > 0) return;
            let {
                msg: a,
                url: i,
                line: o,
                column: s,
                error: u
              } = t,
              l = void 0 === u && (0, er.HD)(a) ? function (e, t, n, r) {
                let a = (0, er.VW)(e) ? e.message : e,
                  i = "Error",
                  o = a.match(/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i);
                o && (i = o[1], a = o[2]);
                let s = {
                  exception: {
                    values: [{
                      type: i,
                      value: a
                    }]
                  }
                };
                return _enhanceEventWithInitialFrame(s, t, n, r);
              }(a, i, o, s) : _enhanceEventWithInitialFrame(eventbuilder_eventFromUnknownInput(n, u || a, void 0, r, !1), i, o, s);
            l.level = "error", (0, E.eN)(l, {
              originalException: u,
              mechanism: {
                handled: !1,
                type: "onerror"
              }
            });
          }), globalHandlerLog("onerror")), t.onunhandledrejection && (addGlobalUnhandledRejectionInstrumentationHandler(t => {
            let {
              stackParser: n,
              attachStacktrace: r
            } = getOptions();
            if ((0, E.s3)() !== e || el > 0) return;
            let a = function (e) {
                if ((0, er.pt)(e)) return e;
                try {
                  if ("reason" in e) return e.reason;
                  if ("detail" in e && "reason" in e.detail) return e.detail.reason;
                } catch (e) {}
                return e;
              }(t),
              i = (0, er.pt)(a) ? {
                exception: {
                  values: [{
                    type: "UnhandledRejection",
                    value: `Non-Error promise rejection captured with value: ${String(a)}`
                  }]
                }
              } : eventbuilder_eventFromUnknownInput(n, a, void 0, r, !0);
            i.level = "error", (0, E.eN)(i, {
              originalException: a,
              mechanism: {
                handled: !1,
                type: "onunhandledrejection"
              }
            });
          }), globalHandlerLog("onunhandledrejection"));
        }
      };
    }),
    eb = (0, C.RN)(ey, ev);
  function _enhanceEventWithInitialFrame(e, t, n, r) {
    let a = e.exception = e.exception || {},
      i = a.values = a.values || [],
      o = i[0] = i[0] || {},
      s = o.stacktrace = o.stacktrace || {},
      u = s.frames = s.frames || [],
      l = isNaN(parseInt(r, 10)) ? void 0 : r,
      p = isNaN(parseInt(n, 10)) ? void 0 : n,
      m = (0, er.HD)(t) && t.length > 0 ? t : (0, ep.l4)();
    return 0 === u.length && u.push({
      colno: l,
      filename: m,
      function: "?",
      in_app: !0,
      lineno: p
    }), e;
  }
  function globalHandlerLog(e) {
    eh && U.kg.log(`Global Handler attached: ${e}`);
  }
  function getOptions() {
    let e = (0, E.s3)(),
      t = e && e.getOptions() || {
        stackParser: () => [],
        attachStacktrace: !1
      };
    return t;
  }
  var eS = n(71463);
  let eE = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "BroadcastChannel", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "SharedWorker", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"],
    eP = "TryCatch",
    eT = (0, C._I)((e = {}) => {
      let t = {
        XMLHttpRequest: !0,
        eventTarget: !0,
        requestAnimationFrame: !0,
        setInterval: !0,
        setTimeout: !0,
        ...e
      };
      return {
        name: eP,
        setupOnce() {
          t.setTimeout && (0, w.hl)(eu, "setTimeout", _wrapTimeFunction), t.setInterval && (0, w.hl)(eu, "setInterval", _wrapTimeFunction), t.requestAnimationFrame && (0, w.hl)(eu, "requestAnimationFrame", _wrapRAF), t.XMLHttpRequest && "XMLHttpRequest" in eu && (0, w.hl)(XMLHttpRequest.prototype, "send", _wrapXHR);
          let e = t.eventTarget;
          if (e) {
            let t = Array.isArray(e) ? e : eE;
            t.forEach(_wrapEventTarget);
          }
        }
      };
    }),
    eR = (0, C.RN)(eP, eT);
  function _wrapTimeFunction(e) {
    return function (...t) {
      let n = t[0];
      return t[0] = wrap(n, {
        mechanism: {
          data: {
            function: (0, eS.$P)(e)
          },
          handled: !1,
          type: "instrument"
        }
      }), e.apply(this, t);
    };
  }
  function _wrapRAF(e) {
    return function (t) {
      return e.apply(this, [wrap(t, {
        mechanism: {
          data: {
            function: "requestAnimationFrame",
            handler: (0, eS.$P)(e)
          },
          handled: !1,
          type: "instrument"
        }
      })]);
    };
  }
  function _wrapXHR(e) {
    return function (...t) {
      let n = this;
      return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(e => {
        e in n && "function" == typeof n[e] && (0, w.hl)(n, e, function (t) {
          let n = {
              mechanism: {
                data: {
                  function: e,
                  handler: (0, eS.$P)(t)
                },
                handled: !1,
                type: "instrument"
              }
            },
            r = (0, w.HK)(t);
          return r && (n.mechanism.data.handler = (0, eS.$P)(r)), wrap(t, n);
        });
      }), e.apply(this, t);
    };
  }
  function _wrapEventTarget(e) {
    let t = eu[e] && eu[e].prototype;
    t && t.hasOwnProperty && t.hasOwnProperty("addEventListener") && ((0, w.hl)(t, "addEventListener", function (t) {
      return function (n, r, a) {
        try {
          "function" == typeof r.handleEvent && (r.handleEvent = wrap(r.handleEvent, {
            mechanism: {
              data: {
                function: "handleEvent",
                handler: (0, eS.$P)(r),
                target: e
              },
              handled: !1,
              type: "instrument"
            }
          }));
        } catch (e) {}
        return t.apply(this, [n, wrap(r, {
          mechanism: {
            data: {
              function: "addEventListener",
              handler: (0, eS.$P)(r),
              target: e
            },
            handled: !1,
            type: "instrument"
          }
        }), a]);
      };
    }), (0, w.hl)(t, "removeEventListener", function (e) {
      return function (t, n, r) {
        try {
          let a = n && n.__sentry_wrapped__;
          a && e.call(this, t, a, r);
        } catch (e) {}
        return e.call(this, t, n, r);
      };
    }));
  }
  function instrumentConsole() {
    "console" in es.GLOBAL_OBJ && U.RU.forEach(function (e) {
      e in es.GLOBAL_OBJ.console && (0, w.hl)(es.GLOBAL_OBJ.console, e, function (t) {
        return U.LD[e] = t, function (...t) {
          (0, ec.rK)("console", {
            args: t,
            level: e
          });
          let n = U.LD[e];
          n && n.apply(es.GLOBAL_OBJ.console, t);
        };
      });
    });
  }
  var eO = n(76894),
    ew = n(533),
    ex = n(81710),
    eC = n(54525);
  let eI = ["fatal", "error", "warning", "log", "info", "debug"];
  function parseUrl(e) {
    if (!e) return {};
    let t = e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
    if (!t) return {};
    let n = t[6] || "",
      r = t[8] || "";
    return {
      host: t[4],
      path: t[5],
      protocol: t[2],
      search: n,
      hash: r,
      relative: t[5] + n + r
    };
  }
  let ej = "Breadcrumbs",
    ek = (0, C._I)((e = {}) => {
      let t = {
        console: !0,
        dom: !0,
        fetch: !0,
        history: !0,
        sentry: !0,
        xhr: !0,
        ...e
      };
      return {
        name: ej,
        setupOnce() {},
        setup(e) {
          var n;
          t.console && function (e) {
            let t = "console";
            (0, ec.Hj)(t, e), (0, ec.D2)(t, instrumentConsole);
          }(function (t) {
            var n;
            if ((0, E.s3)() !== e) return;
            let r = {
              category: "console",
              data: {
                arguments: t.args,
                logger: "console"
              },
              level: "warn" === (n = t.level) ? "warning" : eI.includes(n) ? n : "log",
              message: (0, B.nK)(t.args, " ")
            };
            if ("assert" === t.level) {
              if (!1 !== t.args[0]) return;
              r.message = `Assertion failed: ${(0, B.nK)(t.args.slice(1), " ") || "console.assert"}`, r.data.arguments = t.args.slice(1);
            }
            (0, E.n_)(r, {
              input: t.args,
              level: t.level
            });
          }), t.dom && (0, eO.O)((n = t.dom, function (t) {
            let r, a;
            if ((0, E.s3)() !== e) return;
            let i = "object" == typeof n ? n.serializeAttribute : void 0,
              o = "object" == typeof n && "number" == typeof n.maxStringLength ? n.maxStringLength : void 0;
            o && o > 1024 && (eh && U.kg.warn(`\`dom.maxStringLength\` cannot exceed 1024, but a value of ${o} was configured. Sentry will use 1024 instead.`), o = 1024), "string" == typeof i && (i = [i]);
            try {
              let e = t.event,
                n = e && e.target ? e.target : e;
              r = (0, ep.Rt)(n, {
                keyAttrs: i,
                maxStringLength: o
              }), a = (0, ep.iY)(n);
            } catch (e) {
              r = "<unknown>";
            }
            if (0 === r.length) return;
            let s = {
              category: `ui.${t.name}`,
              message: r
            };
            a && (s.data = {
              "ui.component_name": a
            }), (0, E.n_)(s, {
              event: t.event,
              name: t.name,
              global: t.global
            });
          })), t.xhr && (0, ew.UK)(function (t) {
            if ((0, E.s3)() !== e) return;
            let {
                startTimestamp: n,
                endTimestamp: r
              } = t,
              a = t.xhr[ew.xU];
            if (!n || !r || !a) return;
            let {
                method: i,
                url: o,
                status_code: s,
                body: u
              } = a,
              l = {
                xhr: t.xhr,
                input: u,
                startTimestamp: n,
                endTimestamp: r
              };
            (0, E.n_)({
              category: "xhr",
              data: {
                method: i,
                url: o,
                status_code: s
              },
              type: "http"
            }, l);
          }), t.fetch && (0, ex.U)(function (t) {
            if ((0, E.s3)() !== e) return;
            let {
              startTimestamp: n,
              endTimestamp: r
            } = t;
            if (!(!r || t.fetchData.url.match(/sentry_key/) && "POST" === t.fetchData.method)) {
              if (t.error) {
                let e = t.fetchData,
                  a = {
                    data: t.error,
                    input: t.args,
                    startTimestamp: n,
                    endTimestamp: r
                  };
                (0, E.n_)({
                  category: "fetch",
                  data: e,
                  level: "error",
                  type: "http"
                }, a);
              } else {
                let e = t.response,
                  a = {
                    ...t.fetchData,
                    status_code: e && e.status
                  },
                  i = {
                    input: t.args,
                    response: e,
                    startTimestamp: n,
                    endTimestamp: r
                  };
                (0, E.n_)({
                  category: "fetch",
                  data: a,
                  type: "http"
                }, i);
              }
            }
          }), t.history && (0, eC.a)(function (t) {
            if ((0, E.s3)() !== e) return;
            let n = t.from,
              r = t.to,
              a = parseUrl(eu.location.href),
              i = n ? parseUrl(n) : void 0,
              o = parseUrl(r);
            i && i.path || (i = a), a.protocol === o.protocol && a.host === o.host && (r = o.relative), a.protocol === i.protocol && a.host === i.host && (n = i.relative), (0, E.n_)({
              category: "navigation",
              data: {
                from: n,
                to: r
              }
            });
          }), t.sentry && e.on && e.on("beforeSendEvent", function (t) {
            (0, E.s3)() === e && (0, E.n_)({
              category: `sentry.${"transaction" === t.type ? "transaction" : "event"}`,
              event_id: t.event_id,
              level: t.level,
              message: (0, $.jH)(t)
            }, {
              event: t
            });
          });
        }
      };
    }),
    eM = (0, C.RN)(ej, ek),
    eN = "LinkedErrors",
    eA = (0, C._I)((e = {}) => {
      let t = e.limit || 5,
        n = e.key || "cause";
      return {
        name: eN,
        setupOnce() {},
        preprocessEvent(e, r, a) {
          let i = a.getOptions();
          applyAggregateErrorsToEvent(eventbuilder_exceptionFromError, i.stackParser, i.maxValueLength, n, t, e, r);
        }
      };
    }),
    eL = (0, C.RN)(eN, eA),
    eD = "HttpContext",
    eF = (0, C._I)(() => ({
      name: eD,
      setupOnce() {},
      preprocessEvent(e) {
        if (!eu.navigator && !eu.location && !eu.document) return;
        let t = e.request && e.request.url || eu.location && eu.location.href,
          {
            referrer: n
          } = eu.document || {},
          {
            userAgent: r
          } = eu.navigator || {},
          a = {
            ...(e.request && e.request.headers),
            ...(n && {
              Referer: n
            }),
            ...(r && {
              "User-Agent": r
            })
          },
          i = {
            ...e.request,
            ...(t && {
              url: t
            }),
            headers: a
          };
        e.request = i;
      }
    })),
    eH = (0, C.RN)(eD, eF),
    eU = "Dedupe",
    e$ = (0, C._I)(() => {
      let e;
      return {
        name: eU,
        setupOnce() {},
        processEvent(t) {
          if (t.type) return t;
          try {
            var n;
            if ((n = e) && (function (e, t) {
              let n = e.message,
                r = t.message;
              return !!((n || r) && (!n || r) && (n || !r) && n === r && _isSameFingerprint(e, t) && _isSameStacktrace(e, t));
            }(t, n) || function (e, t) {
              let n = _getExceptionFromEvent(t),
                r = _getExceptionFromEvent(e);
              return !!(n && r && n.type === r.type && n.value === r.value && _isSameFingerprint(e, t) && _isSameStacktrace(e, t));
            }(t, n))) return eh && U.kg.warn("Event dropped due to being a duplicate of previously captured event."), null;
          } catch (e) {}
          return e = t;
        }
      };
    }),
    eB = (0, C.RN)(eU, e$);
  function _isSameStacktrace(e, t) {
    let n = _getFramesFromEvent(e),
      r = _getFramesFromEvent(t);
    if (!n && !r) return !0;
    if (n && !r || !n && r || r.length !== n.length) return !1;
    for (let e = 0; e < r.length; e++) {
      let t = r[e],
        a = n[e];
      if (t.filename !== a.filename || t.lineno !== a.lineno || t.colno !== a.colno || t.function !== a.function) return !1;
    }
    return !0;
  }
  function _isSameFingerprint(e, t) {
    let n = e.fingerprint,
      r = t.fingerprint;
    if (!n && !r) return !0;
    if (n && !r || !n && r) return !1;
    try {
      return !(n.join("") !== r.join(""));
    } catch (e) {
      return !1;
    }
  }
  function _getExceptionFromEvent(e) {
    return e.exception && e.exception.values && e.exception.values[0];
  }
  function _getFramesFromEvent(e) {
    let t = e.exception;
    if (t) try {
      return t.values[0].stacktrace.frames;
    } catch (e) {}
  }
  let eW = {};
  eu.Sentry && eu.Sentry.Integrations && (eW = eu.Sentry.Integrations);
  let eG = {
    ...eW,
    ..._,
    ...v
  };
  var eX = n(15496),
    eq = n(66991),
    eJ = n(74694),
    eV = n(38258),
    ez = n(13918),
    eY = n(3071),
    eK = n(68526);
  let BrowserClient = class BrowserClient extends eJ.W {
    constructor(e) {
      let t = eu.SENTRY_SDK_SOURCE || (0, eV.S)();
      applySdkMetadata(e, "browser", ["browser"], t), super(e), e.sendClientReports && eu.document && eu.document.addEventListener("visibilitychange", () => {
        "hidden" === eu.document.visibilityState && this._flushOutcomes();
      });
    }
    eventFromException(e, t) {
      return function (e, t, n, r) {
        let a = n && n.syntheticException || void 0,
          i = eventbuilder_eventFromUnknownInput(e, t, a, r);
        return (0, $.EG)(i), i.level = "error", n && n.event_id && (i.event_id = n.event_id), (0, em.WD)(i);
      }(this._options.stackParser, e, t, this._options.attachStacktrace);
    }
    eventFromMessage(e, t = "info", n) {
      return function (e, t, n = "info", r, a) {
        let i = r && r.syntheticException || void 0,
          o = eventFromString(e, t, i, a);
        return o.level = n, r && r.event_id && (o.event_id = r.event_id), (0, em.WD)(o);
      }(this._options.stackParser, e, t, n, this._options.attachStacktrace);
    }
    captureUserFeedback(e) {
      if (!this._isEnabled()) {
        eh && U.kg.warn("SDK not enabled, will not capture user feedback.");
        return;
      }
      let t = function (e, {
        metadata: t,
        tunnel: n,
        dsn: r
      }) {
        let a = {
            event_id: e.event_id,
            sent_at: new Date().toISOString(),
            ...(t && t.sdk && {
              sdk: {
                name: t.sdk.name,
                version: t.sdk.version
              }
            }),
            ...(!!n && !!r && {
              dsn: (0, eK.RA)(r)
            })
          },
          i = [{
            type: "user_report"
          }, e];
        return (0, ez.Jd)(a, [i]);
      }(e, {
        metadata: this.getSdkMetadata(),
        dsn: this.getDsn(),
        tunnel: this.getOptions().tunnel
      });
      this._sendEnvelope(t);
    }
    _prepareEvent(e, t, n) {
      return e.platform = e.platform || "javascript", super._prepareEvent(e, t, n);
    }
    _flushOutcomes() {
      let e = this._clearOutcomes();
      if (0 === e.length) {
        eh && U.kg.log("No outcomes to send");
        return;
      }
      if (!this._dsn) {
        eh && U.kg.log("No dsn provided, will not send outcomes");
        return;
      }
      eh && U.kg.log("Sending outcomes:", e);
      let t = function (e, t, n) {
        let r = [{
          type: "client_report"
        }, {
          timestamp: (0, eY.yW)(),
          discarded_events: e
        }];
        return (0, ez.Jd)(t ? {
          dsn: t
        } : {}, [r]);
      }(e, this._options.tunnel && (0, eK.RA)(this._dsn));
      this._sendEnvelope(t);
    }
  };
  function createFrame(e, t, n, r) {
    let a = {
      filename: e,
      function: t,
      in_app: !0
    };
    return void 0 !== n && (a.lineno = n), void 0 !== r && (a.colno = r), a;
  }
  let eZ = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
    eQ = /\((\S*)(?::(\d+))(?::(\d+))\)/,
    e0 = [30, e => {
      let t = eZ.exec(e);
      if (t) {
        let e = t[2] && 0 === t[2].indexOf("eval");
        if (e) {
          let e = eQ.exec(t[2]);
          e && (t[2] = e[1], t[3] = e[2], t[4] = e[3]);
        }
        let [n, r] = extractSafariExtensionDetails(t[1] || "?", t[2]);
        return createFrame(r, n, t[3] ? +t[3] : void 0, t[4] ? +t[4] : void 0);
      }
    }],
    e1 = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
    e3 = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
    e6 = [50, e => {
      let t = e1.exec(e);
      if (t) {
        let e = t[3] && t[3].indexOf(" > eval") > -1;
        if (e) {
          let e = e3.exec(t[3]);
          e && (t[1] = t[1] || "eval", t[3] = e[1], t[4] = e[2], t[5] = "");
        }
        let n = t[3],
          r = t[1] || "?";
        return [r, n] = extractSafariExtensionDetails(r, n), createFrame(n, r, t[4] ? +t[4] : void 0, t[5] ? +t[5] : void 0);
      }
    }],
    e2 = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
    e8 = [40, e => {
      let t = e2.exec(e);
      return t ? createFrame(t[2], t[1] || "?", +t[3], t[4] ? +t[4] : void 0) : void 0;
    }],
    e4 = (0, eS.pE)(...[e0, e6, e8]),
    extractSafariExtensionDetails = (e, t) => {
      let n = -1 !== e.indexOf("safari-extension"),
        r = -1 !== e.indexOf("safari-web-extension");
      return n || r ? [-1 !== e.indexOf("@") ? e.split("@")[0] : "?", n ? `safari-extension:${t}` : `safari-web-extension:${t}`] : [e, t];
    };
  var e7 = n(32446),
    e5 = n(29096);
  function createTransport(e, t, n = function (e) {
    let t = [];
    function remove(e) {
      return t.splice(t.indexOf(e), 1)[0];
    }
    return {
      $: t,
      add: function (n) {
        if (!(void 0 === e || t.length < e)) return (0, em.$2)(new e7.b("Not adding Promise because buffer limit was reached."));
        let r = n();
        return -1 === t.indexOf(r) && t.push(r), r.then(() => remove(r)).then(null, () => remove(r).then(null, () => {})), r;
      },
      drain: function (e) {
        return new em.cW((n, r) => {
          let a = t.length;
          if (!a) return n(!0);
          let i = setTimeout(() => {
            e && e > 0 && n(!1);
          }, e);
          t.forEach(e => {
            (0, em.WD)(e).then(() => {
              --a || (clearTimeout(i), n(!0));
            }, r);
          });
        });
      }
    };
  }(e.bufferSize || 30)) {
    let r = {};
    function send(a) {
      let i = [];
      if ((0, ez.gv)(a, (t, n) => {
        let a = (0, ez.mL)(n);
        if ((0, e5.Q)(r, a)) {
          let r = getEventForEnvelopeItem(t, n);
          e.recordDroppedEvent("ratelimit_backoff", a, r);
        } else i.push(t);
      }), 0 === i.length) return (0, em.WD)();
      let o = (0, ez.Jd)(a[0], i),
        recordEnvelopeLoss = t => {
          (0, ez.gv)(o, (n, r) => {
            let a = getEventForEnvelopeItem(n, r);
            e.recordDroppedEvent(t, (0, ez.mL)(r), a);
          });
        };
      return n.add(() => t({
        body: (0, ez.V$)(o, e.textEncoder)
      }).then(e => (void 0 !== e.statusCode && (e.statusCode < 200 || e.statusCode >= 300) && q.X && U.kg.warn(`Sentry responded with status code ${e.statusCode} to sent event.`), r = (0, e5.WG)(r, e), e), e => {
        throw recordEnvelopeLoss("network_error"), e;
      })).then(e => e, e => {
        if (e instanceof e7.b) return q.X && U.kg.error("Skipped sending event because buffer is full."), recordEnvelopeLoss("queue_overflow"), (0, em.WD)();
        throw e;
      });
    }
    return send.__sentry__baseTransport__ = !0, {
      send,
      flush: e => n.drain(e)
    };
  }
  function getEventForEnvelopeItem(e, t) {
    if ("event" === t || "transaction" === t) return Array.isArray(e) ? e[1] : void 0;
  }
  function makeFetchTransport(e, t = function () {
    if (s) return s;
    if ((0, eq.Du)(eu.fetch)) return s = eu.fetch.bind(eu);
    let e = eu.document,
      t = eu.fetch;
    if (e && "function" == typeof e.createElement) try {
      let n = e.createElement("iframe");
      n.hidden = !0, e.head.appendChild(n);
      let r = n.contentWindow;
      r && r.fetch && (t = r.fetch), e.head.removeChild(n);
    } catch (e) {
      eh && U.kg.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", e);
    }
    return s = t.bind(eu);
  }()) {
    let n = 0,
      r = 0;
    return createTransport(e, function (a) {
      let i = a.body.length;
      n += i, r++;
      let o = {
        body: a.body,
        method: "POST",
        referrerPolicy: "origin",
        headers: e.headers,
        keepalive: n <= 6e4 && r < 15,
        ...e.fetchOptions
      };
      try {
        return t(e.url, o).then(e => (n -= i, r--, {
          statusCode: e.status,
          headers: {
            "x-sentry-rate-limits": e.headers.get("X-Sentry-Rate-Limits"),
            "retry-after": e.headers.get("Retry-After")
          }
        }));
      } catch (e) {
        return s = void 0, n -= i, r--, (0, em.$2)(e);
      }
    });
  }
  function makeXHRTransport(e) {
    return createTransport(e, function (t) {
      return new em.cW((n, r) => {
        let a = new XMLHttpRequest();
        for (let t in a.onerror = r, a.onreadystatechange = () => {
          4 === a.readyState && n({
            statusCode: a.status,
            headers: {
              "x-sentry-rate-limits": a.getResponseHeader("X-Sentry-Rate-Limits"),
              "retry-after": a.getResponseHeader("Retry-After")
            }
          });
        }, a.open("POST", e.url), e.headers) Object.prototype.hasOwnProperty.call(e.headers, t) && a.setRequestHeader(t, e.headers[t]);
        a.send(t.body);
      });
    });
  }
  let e9 = [et(), D(), eT(), ek(), ev(), eA(), e$(), eF()];
  var te = n(91917),
    tt = n(79085);
  function getMetricSummaryJsonForSpan(e) {
    let t = a ? a.get(e) : void 0;
    if (!t) return;
    let n = {};
    for (let [, [e, r]] of t) n[e] || (n[e] = []), n[e].push((0, w.Jr)(r));
    return n;
  }
  var tn = n(54759),
    tr = n(26868);
  function setHttpStatus(e, t) {
    e.setTag("http.status_code", String(t)), e.setData("http.response.status_code", t);
    let n = function (e) {
      if (e < 400 && e >= 100) return "ok";
      if (e >= 400 && e < 500) switch (e) {
        case 401:
          return "unauthenticated";
        case 403:
          return "permission_denied";
        case 404:
          return "not_found";
        case 409:
          return "already_exists";
        case 413:
          return "failed_precondition";
        case 429:
          return "resource_exhausted";
        default:
          return "invalid_argument";
      }
      if (e >= 500 && e < 600) switch (e) {
        case 501:
          return "unimplemented";
        case 503:
          return "unavailable";
        case 504:
          return "deadline_exceeded";
        default:
          return "internal_error";
      }
      return "unknown_error";
    }(t);
    "unknown_error" !== n && e.setStatus(n);
  }
  (p = m || (m = {})).Ok = "ok", p.DeadlineExceeded = "deadline_exceeded", p.Unauthenticated = "unauthenticated", p.PermissionDenied = "permission_denied", p.NotFound = "not_found", p.ResourceExhausted = "resource_exhausted", p.InvalidArgument = "invalid_argument", p.Unimplemented = "unimplemented", p.Unavailable = "unavailable", p.InternalError = "internal_error", p.UnknownError = "unknown_error", p.Cancelled = "cancelled", p.AlreadyExists = "already_exists", p.FailedPrecondition = "failed_precondition", p.Aborted = "aborted", p.OutOfRange = "out_of_range", p.DataLoss = "data_loss";
  let SpanRecorder = class SpanRecorder {
    constructor(e = 1e3) {
      this._maxlen = e, this.spans = [];
    }
    add(e) {
      this.spans.length > this._maxlen ? e.spanRecorder = void 0 : this.spans.push(e);
    }
  };
  let Span = class Span {
    constructor(e = {}) {
      this._traceId = e.traceId || (0, $.DM)(), this._spanId = e.spanId || (0, $.DM)().substring(16), this._startTime = e.startTimestamp || (0, eY.ph)(), this.tags = e.tags ? {
        ...e.tags
      } : {}, this.data = e.data ? {
        ...e.data
      } : {}, this.instrumenter = e.instrumenter || "sentry", this._attributes = {}, this.setAttributes({
        [tn.S3]: e.origin || "manual",
        [tn.$J]: e.op,
        ...e.attributes
      }), this._name = e.name || e.description, e.parentSpanId && (this._parentSpanId = e.parentSpanId), "sampled" in e && (this._sampled = e.sampled), e.status && (this._status = e.status), e.endTimestamp && (this._endTime = e.endTimestamp), void 0 !== e.exclusiveTime && (this._exclusiveTime = e.exclusiveTime), this._measurements = e.measurements ? {
        ...e.measurements
      } : {};
    }
    get name() {
      return this._name || "";
    }
    set name(e) {
      this.updateName(e);
    }
    get description() {
      return this._name;
    }
    set description(e) {
      this._name = e;
    }
    get traceId() {
      return this._traceId;
    }
    set traceId(e) {
      this._traceId = e;
    }
    get spanId() {
      return this._spanId;
    }
    set spanId(e) {
      this._spanId = e;
    }
    set parentSpanId(e) {
      this._parentSpanId = e;
    }
    get parentSpanId() {
      return this._parentSpanId;
    }
    get sampled() {
      return this._sampled;
    }
    set sampled(e) {
      this._sampled = e;
    }
    get attributes() {
      return this._attributes;
    }
    set attributes(e) {
      this._attributes = e;
    }
    get startTimestamp() {
      return this._startTime;
    }
    set startTimestamp(e) {
      this._startTime = e;
    }
    get endTimestamp() {
      return this._endTime;
    }
    set endTimestamp(e) {
      this._endTime = e;
    }
    get status() {
      return this._status;
    }
    set status(e) {
      this._status = e;
    }
    get op() {
      return this._attributes[tn.$J];
    }
    set op(e) {
      this.setAttribute(tn.$J, e);
    }
    get origin() {
      return this._attributes[tn.S3];
    }
    set origin(e) {
      this.setAttribute(tn.S3, e);
    }
    spanContext() {
      let {
        _spanId: e,
        _traceId: t,
        _sampled: n
      } = this;
      return {
        spanId: e,
        traceId: t,
        traceFlags: n ? tt.i0 : tt.ve
      };
    }
    startChild(e) {
      let t = new Span({
        ...e,
        parentSpanId: this._spanId,
        sampled: this._sampled,
        traceId: this._traceId
      });
      t.spanRecorder = this.spanRecorder, t.spanRecorder && t.spanRecorder.add(t);
      let n = (0, tr.G)(this);
      if (t.transaction = n, q.X && n) {
        let r = e && e.op || "< unknown op >",
          a = (0, tt.XU)(t).description || "< unknown name >",
          i = n.spanContext().spanId,
          o = `[Tracing] Starting '${r}' span on transaction '${a}' (${i}).`;
        U.kg.log(o), this._logMessage = o;
      }
      return t;
    }
    setTag(e, t) {
      return this.tags = {
        ...this.tags,
        [e]: t
      }, this;
    }
    setData(e, t) {
      return this.data = {
        ...this.data,
        [e]: t
      }, this;
    }
    setAttribute(e, t) {
      void 0 === t ? delete this._attributes[e] : this._attributes[e] = t;
    }
    setAttributes(e) {
      Object.keys(e).forEach(t => this.setAttribute(t, e[t]));
    }
    setStatus(e) {
      return this._status = e, this;
    }
    setHttpStatus(e) {
      return setHttpStatus(this, e), this;
    }
    setName(e) {
      this.updateName(e);
    }
    updateName(e) {
      return this._name = e, this;
    }
    isSuccess() {
      return "ok" === this._status;
    }
    finish(e) {
      return this.end(e);
    }
    end(e) {
      if (this._endTime) return;
      let t = (0, tr.G)(this);
      if (q.X && t && t.spanContext().spanId !== this._spanId) {
        let e = this._logMessage;
        e && U.kg.log(e.replace("Starting", "Finishing"));
      }
      this._endTime = (0, tt.$k)(e);
    }
    toTraceparent() {
      return (0, tt.Hb)(this);
    }
    toContext() {
      return (0, w.Jr)({
        data: this._getData(),
        description: this._name,
        endTimestamp: this._endTime,
        op: this.op,
        parentSpanId: this._parentSpanId,
        sampled: this._sampled,
        spanId: this._spanId,
        startTimestamp: this._startTime,
        status: this._status,
        tags: this.tags,
        traceId: this._traceId
      });
    }
    updateWithContext(e) {
      return this.data = e.data || {}, this._name = e.name || e.description, this._endTime = e.endTimestamp, this.op = e.op, this._parentSpanId = e.parentSpanId, this._sampled = e.sampled, this._spanId = e.spanId || this._spanId, this._startTime = e.startTimestamp || this._startTime, this._status = e.status, this.tags = e.tags || {}, this._traceId = e.traceId || this._traceId, this;
    }
    getTraceContext() {
      return (0, tt.wy)(this);
    }
    getSpanJSON() {
      return (0, w.Jr)({
        data: this._getData(),
        description: this._name,
        op: this._attributes[tn.$J],
        parent_span_id: this._parentSpanId,
        span_id: this._spanId,
        start_timestamp: this._startTime,
        status: this._status,
        tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
        timestamp: this._endTime,
        trace_id: this._traceId,
        origin: this._attributes[tn.S3],
        _metrics_summary: getMetricSummaryJsonForSpan(this),
        profile_id: this._attributes[tn.p6],
        exclusive_time: this._exclusiveTime,
        measurements: Object.keys(this._measurements).length > 0 ? this._measurements : void 0
      });
    }
    isRecording() {
      return !this._endTime && !!this._sampled;
    }
    toJSON() {
      return this.getSpanJSON();
    }
    _getData() {
      let {
          data: e,
          _attributes: t
        } = this,
        n = Object.keys(e).length > 0,
        r = Object.keys(t).length > 0;
      return n || r ? n && r ? {
        ...e,
        ...t
      } : n ? e : t : void 0;
    }
  };
  var ta = n(65501);
  function startInactiveSpan(e) {
    if (!hasTracingEnabled()) return;
    let t = function (e) {
        if (e.startTime) {
          let t = {
            ...e
          };
          return t.startTimestamp = (0, tt.$k)(e.startTime), delete t.startTime, t;
        }
        return e;
      }(e),
      n = (0, eX.Gd)(),
      r = e.scope ? e.scope.getSpan() : trace_getActiveSpan(),
      a = e.onlyIfParent && !r;
    if (a) return;
    let i = e.scope || (0, E.nZ)(),
      o = i.clone();
    return function (e, {
      parentSpan: t,
      spanContext: n,
      forceTransaction: r,
      scope: a
    }) {
      var i;
      let o;
      if (!hasTracingEnabled()) return;
      let s = (0, eX.aF)();
      if (t && !r) o = t.startChild(n);else if (t) {
        let r = (0, ta.j)(t),
          {
            traceId: a,
            spanId: i
          } = t.spanContext(),
          s = (0, tt.Tt)(t);
        o = e.startTransaction({
          traceId: a,
          parentSpanId: i,
          parentSampled: s,
          ...n,
          metadata: {
            dynamicSamplingContext: r,
            ...n.metadata
          }
        });
      } else {
        let {
          traceId: t,
          dsc: r,
          parentSpanId: i,
          sampled: u
        } = {
          ...s.getPropagationContext(),
          ...a.getPropagationContext()
        };
        o = e.startTransaction({
          traceId: t,
          parentSpanId: i,
          parentSampled: u,
          ...n,
          metadata: {
            dynamicSamplingContext: r,
            ...n.metadata
          }
        });
      }
      return a.setSpan(o), (i = o) && ((0, w.xp)(i, to, s), (0, w.xp)(i, ti, a)), o;
    }(n, {
      parentSpan: r,
      spanContext: t,
      forceTransaction: e.forceTransaction,
      scope: o
    });
  }
  function trace_getActiveSpan() {
    return (0, E.nZ)().getSpan();
  }
  let ti = "_sentryScope",
    to = "_sentryIsolationScope";
  let Transaction = class Transaction extends Span {
    constructor(e, t) {
      super(e), this._contexts = {}, this._hub = t || (0, eX.Gd)(), this._name = e.name || "", this._metadata = {
        ...e.metadata
      }, this._trimEnd = e.trimEnd, this.transaction = this;
      let n = this._metadata.dynamicSamplingContext;
      n && (this._frozenDynamicSamplingContext = {
        ...n
      });
    }
    get name() {
      return this._name;
    }
    set name(e) {
      this.setName(e);
    }
    get metadata() {
      return {
        source: "custom",
        spanMetadata: {},
        ...this._metadata,
        ...(this._attributes[tn.Zj] && {
          source: this._attributes[tn.Zj]
        }),
        ...(this._attributes[tn.TE] && {
          sampleRate: this._attributes[tn.TE]
        })
      };
    }
    set metadata(e) {
      this._metadata = e;
    }
    setName(e, t = "custom") {
      this._name = e, this.setAttribute(tn.Zj, t);
    }
    updateName(e) {
      return this._name = e, this;
    }
    initSpanRecorder(e = 1e3) {
      this.spanRecorder || (this.spanRecorder = new SpanRecorder(e)), this.spanRecorder.add(this);
    }
    setContext(e, t) {
      null === t ? delete this._contexts[e] : this._contexts[e] = t;
    }
    setMeasurement(e, t, n = "") {
      this._measurements[e] = {
        value: t,
        unit: n
      };
    }
    setMetadata(e) {
      this._metadata = {
        ...this._metadata,
        ...e
      };
    }
    end(e) {
      let t = (0, tt.$k)(e),
        n = this._finishTransaction(t);
      if (n) return this._hub.captureEvent(n);
    }
    toContext() {
      let e = super.toContext();
      return (0, w.Jr)({
        ...e,
        name: this._name,
        trimEnd: this._trimEnd
      });
    }
    updateWithContext(e) {
      return super.updateWithContext(e), this._name = e.name || "", this._trimEnd = e.trimEnd, this;
    }
    getDynamicSamplingContext() {
      return (0, ta.j)(this);
    }
    setHub(e) {
      this._hub = e;
    }
    getProfileId() {
      if (void 0 !== this._contexts && void 0 !== this._contexts.profile) return this._contexts.profile.profile_id;
    }
    _finishTransaction(e) {
      if (void 0 !== this._endTime) return;
      this._name || (q.X && U.kg.warn("Transaction has no name, falling back to `<unlabeled transaction>`."), this._name = "<unlabeled transaction>"), super.end(e);
      let t = this._hub.getClient();
      if (t && t.emit && t.emit("finishTransaction", this), !0 !== this._sampled) {
        q.X && U.kg.log("[Tracing] Discarding transaction because its trace was not chosen to be sampled."), t && t.recordDroppedEvent("sample_rate", "transaction");
        return;
      }
      let n = this.spanRecorder ? this.spanRecorder.spans.filter(e => e !== this && (0, tt.XU)(e).timestamp) : [];
      if (this._trimEnd && n.length > 0) {
        let e = n.map(e => (0, tt.XU)(e).timestamp).filter(Boolean);
        this._endTime = e.reduce((e, t) => e > t ? e : t);
      }
      let {
          scope: r,
          isolationScope: a
        } = {
          scope: this[ti],
          isolationScope: this[to]
        },
        {
          metadata: i
        } = this,
        {
          source: o
        } = i,
        s = {
          contexts: {
            ...this._contexts,
            trace: (0, tt.wy)(this)
          },
          spans: n,
          start_timestamp: this._startTime,
          tags: this.tags,
          timestamp: this._endTime,
          transaction: this._name,
          type: "transaction",
          sdkProcessingMetadata: {
            ...i,
            capturedSpanScope: r,
            capturedSpanIsolationScope: a,
            ...(0, w.Jr)({
              dynamicSamplingContext: (0, ta.j)(this)
            })
          },
          _metrics_summary: getMetricSummaryJsonForSpan(this),
          ...(o && {
            transaction_info: {
              source: o
            }
          })
        },
        u = Object.keys(this._measurements).length > 0;
      return u && (q.X && U.kg.log("[Measurements] Adding measurements to transaction", JSON.stringify(this._measurements, void 0, 2)), s.measurements = this._measurements), q.X && U.kg.log(`[Tracing] Finishing ${this.op} transaction: ${this._name}.`), s;
    }
  };
  let ts = {
    idleTimeout: 1e3,
    finalTimeout: 3e4,
    heartbeatInterval: 5e3
  };
  let IdleTransactionSpanRecorder = class IdleTransactionSpanRecorder extends SpanRecorder {
    constructor(e, t, n, r) {
      super(r), this._pushActivity = e, this._popActivity = t, this.transactionSpanId = n;
    }
    add(e) {
      if (e.spanContext().spanId !== this.transactionSpanId) {
        let t = e.end;
        e.end = (...n) => (this._popActivity(e.spanContext().spanId), t.apply(e, n)), void 0 === (0, tt.XU)(e).timestamp && this._pushActivity(e.spanContext().spanId);
      }
      super.add(e);
    }
  };
  let IdleTransaction = class IdleTransaction extends Transaction {
    constructor(e, t, n = ts.idleTimeout, r = ts.finalTimeout, a = ts.heartbeatInterval, i = !1, o = !1) {
      super(e, t), this._idleHub = t, this._idleTimeout = n, this._finalTimeout = r, this._heartbeatInterval = a, this._onScope = i, this.activities = {}, this._heartbeatCounter = 0, this._finished = !1, this._idleTimeoutCanceledPermanently = !1, this._beforeFinishCallbacks = [], this._finishReason = "externalFinish", this._autoFinishAllowed = !o, i && (q.X && U.kg.log(`Setting idle transaction on scope. Span ID: ${this.spanContext().spanId}`), t.getScope().setSpan(this)), o || this._restartIdleTimeout(), setTimeout(() => {
        this._finished || (this.setStatus("deadline_exceeded"), this._finishReason = "finalTimeout", this.end());
      }, this._finalTimeout);
    }
    end(e) {
      let t = (0, tt.$k)(e);
      if (this._finished = !0, this.activities = {}, "ui.action.click" === this.op && this.setAttribute("finishReason", this._finishReason), this.spanRecorder) {
        for (let e of (q.X && U.kg.log("[Tracing] finishing IdleTransaction", new Date(1e3 * t).toISOString(), this.op), this._beforeFinishCallbacks)) e(this, t);
        this.spanRecorder.spans = this.spanRecorder.spans.filter(e => {
          if (e.spanContext().spanId === this.spanContext().spanId) return !0;
          !(0, tt.XU)(e).timestamp && (e.setStatus("cancelled"), e.end(t), q.X && U.kg.log("[Tracing] cancelling span since transaction ended early", JSON.stringify(e, void 0, 2)));
          let {
              start_timestamp: n,
              timestamp: r
            } = (0, tt.XU)(e),
            a = n && n < t,
            i = (this._finalTimeout + this._idleTimeout) / 1e3,
            o = r && n && r - n < i;
          if (q.X) {
            let t = JSON.stringify(e, void 0, 2);
            a ? o || U.kg.log("[Tracing] discarding Span since it finished after Transaction final timeout", t) : U.kg.log("[Tracing] discarding Span since it happened after Transaction was finished", t);
          }
          return a && o;
        }), q.X && U.kg.log("[Tracing] flushing IdleTransaction");
      } else q.X && U.kg.log("[Tracing] No active IdleTransaction");
      if (this._onScope) {
        let e = this._idleHub.getScope();
        e.getTransaction() === this && e.setSpan(void 0);
      }
      return super.end(e);
    }
    registerBeforeFinishCallback(e) {
      this._beforeFinishCallbacks.push(e);
    }
    initSpanRecorder(e) {
      this.spanRecorder || (this.spanRecorder = new IdleTransactionSpanRecorder(e => {
        this._finished || this._pushActivity(e);
      }, e => {
        this._finished || this._popActivity(e);
      }, this.spanContext().spanId, e), q.X && U.kg.log("Starting heartbeat"), this._pingHeartbeat()), this.spanRecorder.add(this);
    }
    cancelIdleTimeout(e, {
      restartOnChildSpanChange: t
    } = {
      restartOnChildSpanChange: !0
    }) {
      this._idleTimeoutCanceledPermanently = !1 === t, this._idleTimeoutID && (clearTimeout(this._idleTimeoutID), this._idleTimeoutID = void 0, 0 === Object.keys(this.activities).length && this._idleTimeoutCanceledPermanently && (this._finishReason = "cancelled", this.end(e)));
    }
    setFinishReason(e) {
      this._finishReason = e;
    }
    sendAutoFinishSignal() {
      this._autoFinishAllowed || (q.X && U.kg.log("[Tracing] Received finish signal for idle transaction."), this._restartIdleTimeout(), this._autoFinishAllowed = !0);
    }
    _restartIdleTimeout(e) {
      this.cancelIdleTimeout(), this._idleTimeoutID = setTimeout(() => {
        this._finished || 0 !== Object.keys(this.activities).length || (this._finishReason = "idleTimeout", this.end(e));
      }, this._idleTimeout);
    }
    _pushActivity(e) {
      this.cancelIdleTimeout(void 0, {
        restartOnChildSpanChange: !this._idleTimeoutCanceledPermanently
      }), q.X && U.kg.log(`[Tracing] pushActivity: ${e}`), this.activities[e] = !0, q.X && U.kg.log("[Tracing] new activities count", Object.keys(this.activities).length);
    }
    _popActivity(e) {
      if (this.activities[e] && (q.X && U.kg.log(`[Tracing] popActivity ${e}`), delete this.activities[e], q.X && U.kg.log("[Tracing] new activities count", Object.keys(this.activities).length)), 0 === Object.keys(this.activities).length) {
        let e = (0, eY.ph)();
        this._idleTimeoutCanceledPermanently ? this._autoFinishAllowed && (this._finishReason = "cancelled", this.end(e)) : this._restartIdleTimeout(e + this._idleTimeout / 1e3);
      }
    }
    _beat() {
      if (this._finished) return;
      let e = Object.keys(this.activities).join("");
      e === this._prevHeartbeatString ? this._heartbeatCounter++ : this._heartbeatCounter = 1, this._prevHeartbeatString = e, this._heartbeatCounter >= 3 ? this._autoFinishAllowed && (q.X && U.kg.log("[Tracing] Transaction finished because of no change for 3 heart beats"), this.setStatus("deadline_exceeded"), this._finishReason = "heartbeatFailed", this.end()) : this._pingHeartbeat();
    }
    _pingHeartbeat() {
      q.X && U.kg.log(`pinging Heartbeat -> current counter: ${this._heartbeatCounter}`), setTimeout(() => {
        this._beat();
      }, this._heartbeatInterval);
    }
  };
  function getActiveTransaction(e) {
    let t = e || (0, eX.Gd)(),
      n = t.getScope();
    return n.getTransaction();
  }
  let tu = !1;
  function errorCallback() {
    let e = getActiveTransaction();
    if (e) {
      let t = "internal_error";
      q.X && U.kg.log(`[Tracing] Transaction: ${t} -> Global error occured`), e.setStatus(t);
    }
  }
  function sampleTransaction(e, t, n) {
    let r;
    return hasTracingEnabled(t) ? void 0 !== e.sampled ? e.setAttribute(tn.TE, Number(e.sampled)) : ("function" == typeof t.tracesSampler ? (r = t.tracesSampler(n), e.setAttribute(tn.TE, Number(r))) : void 0 !== n.parentSampled ? r = n.parentSampled : void 0 !== t.tracesSampleRate ? (r = t.tracesSampleRate, e.setAttribute(tn.TE, Number(r))) : (r = 1, e.setAttribute(tn.TE, r)), isValidSampleRate(r)) ? r ? (e.sampled = Math.random() < r, e.sampled) ? q.X && U.kg.log(`[Tracing] starting ${e.op} transaction - ${(0, tt.XU)(e).description}`) : q.X && U.kg.log(`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(r)})`) : (q.X && U.kg.log(`[Tracing] Discarding transaction because ${"function" == typeof t.tracesSampler ? "tracesSampler returned 0 or false" : "a negative sampling decision was inherited or tracesSampleRate is set to 0"}`), e.sampled = !1) : (q.X && U.kg.warn("[Tracing] Discarding transaction because of invalid sample rate."), e.sampled = !1) : e.sampled = !1, e;
  }
  function isValidSampleRate(e) {
    return (0, er.i2)(e) || !("number" == typeof e || "boolean" == typeof e) ? (q.X && U.kg.warn(`[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(e)} of type ${JSON.stringify(typeof e)}.`), !1) : !(e < 0) && !(e > 1) || (q.X && U.kg.warn(`[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got ${e}.`), !1);
  }
  function traceHeaders() {
    let e = this.getScope(),
      t = e.getSpan();
    return t ? {
      "sentry-trace": (0, tt.Hb)(t)
    } : {};
  }
  function _startTransaction(e, t) {
    let n = this.getClient(),
      r = n && n.getOptions() || {},
      a = r.instrumenter || "sentry",
      i = e.instrumenter || "sentry";
    a !== i && (q.X && U.kg.error(`A transaction was started with instrumenter=\`${i}\`, but the SDK is configured with the \`${a}\` instrumenter.
The transaction will not be sampled. Please use the ${a} instrumentation to start transactions.`), e.sampled = !1);
    let o = new Transaction(e, this);
    return (o = sampleTransaction(o, r, {
      name: e.name,
      parentSampled: e.parentSampled,
      transactionContext: e,
      attributes: {
        ...e.data,
        ...e.attributes
      },
      ...t
    })).isRecording() && o.initSpanRecorder(r._experiments && r._experiments.maxSpans), n && n.emit && n.emit("startTransaction", o), o;
  }
  function startIdleTransaction(e, t, n, r, a, i, o, s = !1) {
    let u = e.getClient(),
      l = u && u.getOptions() || {},
      p = new IdleTransaction(t, e, n, r, o, a, s);
    return (p = sampleTransaction(p, l, {
      name: t.name,
      parentSampled: t.parentSampled,
      transactionContext: t,
      attributes: {
        ...t.data,
        ...t.attributes
      },
      ...i
    })).isRecording() && p.initSpanRecorder(l._experiments && l._experiments.maxSpans), u && u.emit && u.emit("startTransaction", p), p;
  }
  function addTracingExtensions() {
    let e = (0, eX.cu)();
    e.__SENTRY__ && (e.__SENTRY__.extensions = e.__SENTRY__.extensions || {}, e.__SENTRY__.extensions.startTransaction || (e.__SENTRY__.extensions.startTransaction = _startTransaction), e.__SENTRY__.extensions.traceHeaders || (e.__SENTRY__.extensions.traceHeaders = traceHeaders), tu || (tu = !0, addGlobalErrorInstrumentationHandler(errorCallback), addGlobalUnhandledRejectionInstrumentationHandler(errorCallback)));
  }
  errorCallback.tag = "sentry_tracingErrorCallback";
  var tl = n(72293),
    tc = n(21571),
    td = n(88108);
  function registerBackgroundTabDetection() {
    td.WINDOW.document ? td.WINDOW.document.addEventListener("visibilitychange", () => {
      let e = getActiveTransaction();
      if (td.WINDOW.document.hidden && e) {
        let t = "cancelled",
          {
            op: n,
            status: r
          } = (0, tt.XU)(e);
        tc.X && U.kg.log(`[Tracing] Transaction: ${t} -> since tab moved to the background, op: ${n}`), r || e.setStatus(t), e.setTag("visibilitychange", "document.hidden"), e.end();
      }
    }) : tc.X && U.kg.warn("[Tracing] Could not set up background tab detection due to lack of global document");
  }
  var tf = n(67043);
  function createSpanItem(e) {
    return [{
      type: "span"
    }, e];
  }
  var tp = n(20549);
  function isMeasurementValue(e) {
    return "number" == typeof e && isFinite(e);
  }
  function _startChild(e, {
    startTimestamp: t,
    ...n
  }) {
    return t && e.startTimestamp > t && (e.startTimestamp = t), e.startChild({
      startTimestamp: t,
      ...n
    });
  }
  var th = n(46482);
  function msToSec(e) {
    return e / 1e3;
  }
  function getBrowserPerformanceAPI() {
    return td.WINDOW && td.WINDOW.addEventListener && td.WINDOW.performance;
  }
  let tg = 0,
    tm = {};
  function startTrackingWebVitals() {
    let e = getBrowserPerformanceAPI();
    if (e && eY.Z1) {
      e.mark && td.WINDOW.performance.mark("sentry-tracing-init");
      let t = (0, tf.to)(({
          metric: e
        }) => {
          let t = e.entries[e.entries.length - 1];
          if (!t) return;
          let n = msToSec(eY.Z1),
            r = msToSec(t.startTime);
          tc.X && U.kg.log("[Measurements] Adding FID"), tm.fid = {
            value: e.value,
            unit: "millisecond"
          }, tm["mark.fid"] = {
            value: n + r,
            unit: "second"
          };
        }),
        n = (0, tf.PR)(({
          metric: e
        }) => {
          let t = e.entries[e.entries.length - 1];
          t && (tc.X && U.kg.log("[Measurements] Adding CLS"), tm.cls = {
            value: e.value,
            unit: ""
          }, o = t);
        }, !0),
        r = (0, tf.$A)(({
          metric: e
        }) => {
          let t = e.entries[e.entries.length - 1];
          t && (tc.X && U.kg.log("[Measurements] Adding LCP"), tm.lcp = {
            value: e.value,
            unit: "millisecond"
          }, i = t);
        }, !0),
        a = (0, tf._4)(({
          metric: e
        }) => {
          let t = e.entries[e.entries.length - 1];
          t && (tc.X && U.kg.log("[Measurements] Adding TTFB"), tm.ttfb = {
            value: e.value,
            unit: "millisecond"
          });
        });
      return () => {
        t(), n(), r(), a();
      };
    }
    return () => void 0;
  }
  function startTrackingLongTasks() {
    (0, tf._j)("longtask", ({
      entries: e
    }) => {
      for (let t of e) {
        let e = getActiveTransaction();
        if (!e) return;
        let n = msToSec(eY.Z1 + t.startTime),
          r = msToSec(t.duration);
        e.startChild({
          description: "Main UI thread blocked",
          op: "ui.long-task",
          origin: "auto.ui.browser.metrics",
          startTimestamp: n,
          endTimestamp: n + r
        });
      }
    });
  }
  function startTrackingInteractions() {
    (0, tf._j)("event", ({
      entries: e
    }) => {
      for (let t of e) {
        let e = getActiveTransaction();
        if (!e) return;
        if ("click" === t.name) {
          let n = msToSec(eY.Z1 + t.startTime),
            r = msToSec(t.duration),
            a = {
              description: (0, ep.Rt)(t.target),
              op: `ui.interaction.${t.name}`,
              origin: "auto.ui.browser.metrics",
              startTimestamp: n,
              endTimestamp: n + r
            },
            i = (0, ep.iY)(t.target);
          i && (a.attributes = {
            "ui.component_name": i
          }), e.startChild(a);
        }
      }
    });
  }
  function startTrackingINP(e, t) {
    let n = getBrowserPerformanceAPI();
    if (n && eY.Z1) {
      let n = (0, tf.YF)(({
        metric: n
      }) => {
        let r;
        if (void 0 === n.value) return;
        let a = n.entries.find(e => e.duration === n.value && void 0 !== t_[e.name]),
          i = (0, E.s3)();
        if (!a || !i) return;
        let o = t_[a.name],
          s = i.getOptions(),
          u = msToSec(eY.Z1 + a.startTime),
          l = msToSec(n.value),
          p = void 0 !== a.interactionId ? e[a.interactionId] : void 0;
        if (void 0 === p) return;
        let {
            routeName: m,
            parentContext: _,
            activeTransaction: v,
            user: b,
            replayId: w
          } = p,
          C = void 0 !== b ? b.email || b.id || b.ip_address : void 0,
          j = void 0 !== v ? v.getProfileId() : void 0,
          A = new Span({
            startTimestamp: u,
            endTimestamp: u + l,
            op: `ui.interaction.${o}`,
            name: (0, ep.Rt)(a.target),
            attributes: {
              release: s.release,
              environment: s.environment,
              transaction: m,
              ...(void 0 !== C && "" !== C ? {
                user: C
              } : {}),
              ...(void 0 !== j ? {
                profile_id: j
              } : {}),
              ...(void 0 !== w ? {
                replay_id: w
              } : {})
            },
            exclusiveTime: n.value,
            measurements: {
              inp: {
                value: n.value,
                unit: "millisecond"
              }
            }
          }),
          D = !!hasTracingEnabled(s) && (isValidSampleRate(r = void 0 !== _ && "function" == typeof s.tracesSampler ? s.tracesSampler({
            transactionContext: _,
            name: _.name,
            parentSampled: _.parentSampled,
            attributes: {
              ..._.data,
              ..._.attributes
            },
            location: td.WINDOW.location
          }) : void 0 !== _ && void 0 !== _.sampled ? _.sampled : void 0 !== s.tracesSampleRate ? s.tracesSampleRate : 1) ? !0 === r ? t : !1 === r ? 0 : r * t : (tc.X && U.kg.warn("[Tracing] Discarding interaction span because of invalid sample rate."), !1));
        if (D && Math.random() < D) {
          let e = A ? function (e, t) {
              let n = {
                sent_at: new Date().toISOString()
              };
              t && (n.dsn = (0, eK.RA)(t));
              let r = e.map(createSpanItem);
              return (0, ez.Jd)(n, r);
            }([A], i.getDsn()) : void 0,
            t = i && i.getTransport();
          t && e && t.send(e).then(null, e => {
            tc.X && U.kg.error("Error while sending interaction:", e);
          });
          return;
        }
      });
      return () => {
        n();
      };
    }
    return () => void 0;
  }
  let t_ = {
    click: "click",
    pointerdown: "click",
    pointerup: "click",
    mousedown: "click",
    mouseup: "click",
    touchstart: "click",
    touchend: "click",
    mouseover: "hover",
    mouseout: "hover",
    mouseenter: "hover",
    mouseleave: "hover",
    pointerover: "hover",
    pointerout: "hover",
    pointerenter: "hover",
    pointerleave: "hover",
    dragstart: "drag",
    dragend: "drag",
    drag: "drag",
    dragenter: "drag",
    dragleave: "drag",
    dragover: "drag",
    drop: "drag",
    keydown: "press",
    keyup: "press",
    keypress: "press",
    input: "press"
  };
  function addPerformanceEntries(e) {
    let t = getBrowserPerformanceAPI();
    if (!t || !td.WINDOW.performance.getEntries || !eY.Z1) return;
    tc.X && U.kg.log("[Tracing] Adding & adjusting spans using Performance API");
    let n = msToSec(eY.Z1),
      r = t.getEntries(),
      {
        op: a,
        start_timestamp: s
      } = (0, tt.XU)(e);
    if (r.slice(tg).forEach(t => {
      let r = msToSec(t.startTime),
        a = msToSec(t.duration);
      if ("navigation" !== e.op || !s || !(n + r < s)) switch (t.entryType) {
        case "navigation":
          ["unloadEvent", "redirect", "domContentLoadedEvent", "loadEvent", "connect"].forEach(r => {
            _addPerformanceNavigationTiming(e, t, r, n);
          }), _addPerformanceNavigationTiming(e, t, "secureConnection", n, "TLS/SSL", "connectEnd"), _addPerformanceNavigationTiming(e, t, "fetch", n, "cache", "domainLookupStart"), _addPerformanceNavigationTiming(e, t, "domainLookup", n, "DNS"), t.responseEnd && (_startChild(e, {
            op: "browser",
            origin: "auto.browser.browser.metrics",
            description: "request",
            startTimestamp: n + msToSec(t.requestStart),
            endTimestamp: n + msToSec(t.responseEnd)
          }), _startChild(e, {
            op: "browser",
            origin: "auto.browser.browser.metrics",
            description: "response",
            startTimestamp: n + msToSec(t.responseStart),
            endTimestamp: n + msToSec(t.responseEnd)
          }));
          break;
        case "mark":
        case "paint":
        case "measure":
          {
            (function (e, t, n, r, a) {
              let i = a + n;
              _startChild(e, {
                description: t.name,
                endTimestamp: i + r,
                op: t.entryType,
                origin: "auto.resource.browser.metrics",
                startTimestamp: i
              });
            })(e, t, r, a, n);
            let i = (0, tp.Y)(),
              o = t.startTime < i.firstHiddenTime;
            "first-paint" === t.name && o && (tc.X && U.kg.log("[Measurements] Adding FP"), tm.fp = {
              value: t.startTime,
              unit: "millisecond"
            }), "first-contentful-paint" === t.name && o && (tc.X && U.kg.log("[Measurements] Adding FCP"), tm.fcp = {
              value: t.startTime,
              unit: "millisecond"
            });
            break;
          }
        case "resource":
          (function (e, t, n, r, a, i) {
            if ("xmlhttprequest" === t.initiatorType || "fetch" === t.initiatorType) return;
            let o = parseUrl(n),
              s = {};
            setResourceEntrySizeData(s, t, "transferSize", "http.response_transfer_size"), setResourceEntrySizeData(s, t, "encodedBodySize", "http.response_content_length"), setResourceEntrySizeData(s, t, "decodedBodySize", "http.decoded_response_content_length"), "renderBlockingStatus" in t && (s["resource.render_blocking_status"] = t.renderBlockingStatus), o.protocol && (s["url.scheme"] = o.protocol.split(":").pop()), o.host && (s["server.address"] = o.host), s["url.same_origin"] = n.includes(td.WINDOW.location.origin);
            let u = i + r,
              l = u + a;
            _startChild(e, {
              description: n.replace(td.WINDOW.location.origin, ""),
              endTimestamp: l,
              op: t.initiatorType ? `resource.${t.initiatorType}` : "resource.other",
              origin: "auto.resource.browser.metrics",
              startTimestamp: u,
              data: s
            });
          })(e, t, t.name, r, a, n);
      }
    }), tg = Math.max(r.length - 1, 0), function (e) {
      let t = td.WINDOW.navigator;
      if (!t) return;
      let n = t.connection;
      n && (n.effectiveType && e.setTag("effectiveConnectionType", n.effectiveType), n.type && e.setTag("connectionType", n.type), isMeasurementValue(n.rtt) && (tm["connection.rtt"] = {
        value: n.rtt,
        unit: "millisecond"
      })), isMeasurementValue(t.deviceMemory) && e.setTag("deviceMemory", `${t.deviceMemory} GB`), isMeasurementValue(t.hardwareConcurrency) && e.setTag("hardwareConcurrency", String(t.hardwareConcurrency));
    }(e), "pageload" === a) {
      (function (e) {
        let t = (0, th.W)();
        if (!t) return;
        let {
          responseStart: n,
          requestStart: r
        } = t;
        r <= n && (tc.X && U.kg.log("[Measurements] Adding TTFB Request Time"), e["ttfb.requestTime"] = {
          value: n - r,
          unit: "millisecond"
        });
      })(tm), ["fcp", "fp", "lcp"].forEach(e => {
        if (!tm[e] || !s || n >= s) return;
        let t = tm[e].value,
          r = n + msToSec(t),
          a = Math.abs((r - s) * 1e3),
          i = a - t;
        tc.X && U.kg.log(`[Measurements] Normalized ${e} from ${t} to ${a} (${i})`), tm[e].value = a;
      });
      let t = tm["mark.fid"];
      t && tm.fid && (_startChild(e, {
        description: "first input delay",
        endTimestamp: t.value + msToSec(tm.fid.value),
        op: "ui.action",
        origin: "auto.ui.browser.metrics",
        startTimestamp: t.value
      }), delete tm["mark.fid"]), "fcp" in tm || delete tm.cls, Object.keys(tm).forEach(e => {
        !function (e, t, n) {
          let r = getActiveTransaction();
          r && r.setMeasurement(e, t, n);
        }(e, tm[e].value, tm[e].unit);
      }), i && (tc.X && U.kg.log("[Measurements] Adding LCP Data"), i.element && e.setTag("lcp.element", (0, ep.Rt)(i.element)), i.id && e.setTag("lcp.id", i.id), i.url && e.setTag("lcp.url", i.url.trim().slice(0, 200)), e.setTag("lcp.size", i.size)), o && o.sources && (tc.X && U.kg.log("[Measurements] Adding CLS Data"), o.sources.forEach((t, n) => e.setTag(`cls.source.${n + 1}`, (0, ep.Rt)(t.node))));
    }
    i = void 0, o = void 0, tm = {};
  }
  function _addPerformanceNavigationTiming(e, t, n, r, a, i) {
    let o = i ? t[i] : t[`${n}End`],
      s = t[`${n}Start`];
    s && o && _startChild(e, {
      op: "browser",
      origin: "auto.browser.browser.metrics",
      description: a || n,
      startTimestamp: r + msToSec(s),
      endTimestamp: r + msToSec(o)
    });
  }
  function setResourceEntrySizeData(e, t, n, r) {
    let a = t[n];
    null != a && a < 2147483647 && (e[r] = a);
  }
  var ty = n(34777);
  let tv = ["localhost", /^\/(?!\/)/],
    tb = {
      traceFetch: !0,
      traceXHR: !0,
      enableHTTPTimings: !0,
      tracingOrigins: tv,
      tracePropagationTargets: tv
    };
  function instrumentOutgoingRequests(e) {
    let {
        traceFetch: t,
        traceXHR: n,
        tracePropagationTargets: r,
        tracingOrigins: a,
        shouldCreateSpanForRequest: i,
        enableHTTPTimings: o
      } = {
        traceFetch: tb.traceFetch,
        traceXHR: tb.traceXHR,
        ...e
      },
      s = "function" == typeof i ? i : e => !0,
      shouldAttachHeadersWithTargets = e => {
        var t;
        return t = r || a, (0, B.U0)(e, t || tv);
      },
      u = {};
    t && (0, ex.U)(e => {
      let t = function (e, t, n, r, a = "auto.http.browser") {
        if (!hasTracingEnabled() || !e.fetchData) return;
        let i = t(e.fetchData.url);
        if (e.endTimestamp && i) {
          let t = e.fetchData.__span;
          if (!t) return;
          let n = r[t];
          n && (function (e, t) {
            if (t.response) {
              setHttpStatus(e, t.response.status);
              let n = t.response && t.response.headers && t.response.headers.get("content-length");
              if (n) {
                let t = parseInt(n);
                t > 0 && e.setAttribute("http.response_content_length", t);
              }
            } else t.error && e.setStatus("internal_error");
            e.end();
          }(n, e), delete r[t]);
          return;
        }
        let o = (0, E.nZ)(),
          s = (0, E.s3)(),
          {
            method: u,
            url: l
          } = e.fetchData,
          p = function (e) {
            try {
              let t = new URL(e);
              return t.href;
            } catch (e) {
              return;
            }
          }(l),
          m = p ? parseUrl(p).host : void 0,
          _ = i ? startInactiveSpan({
            name: `${u} ${l}`,
            onlyIfParent: !0,
            attributes: {
              url: l,
              type: "fetch",
              "http.method": u,
              "http.url": p,
              "server.address": m,
              [tn.S3]: a
            },
            op: "http.client"
          }) : void 0;
        if (_ && (e.fetchData.__span = _.spanContext().spanId, r[_.spanContext().spanId] = _), n(e.fetchData.url) && s) {
          let t = e.args[0];
          e.args[1] = e.args[1] || {};
          let n = e.args[1];
          n.headers = function (e, t, n, r, a) {
            let i = a || n.getSpan(),
              o = (0, eX.aF)(),
              {
                traceId: s,
                spanId: u,
                sampled: l,
                dsc: p
              } = {
                ...o.getPropagationContext(),
                ...n.getPropagationContext()
              },
              m = i ? (0, tt.Hb)(i) : (0, tl.$p)(s, u, l),
              _ = (0, ty.IQ)(p || (i ? (0, ta.j)(i) : (0, ta._)(s, t, n))),
              v = r.headers || ("undefined" != typeof Request && (0, er.V9)(e, Request) ? e.headers : void 0);
            if (!v) return {
              "sentry-trace": m,
              baggage: _
            };
            if ("undefined" != typeof Headers && (0, er.V9)(v, Headers)) {
              let e = new Headers(v);
              return e.append("sentry-trace", m), _ && e.append(ty.bU, _), e;
            }
            if (Array.isArray(v)) {
              let e = [...v, ["sentry-trace", m]];
              return _ && e.push([ty.bU, _]), e;
            }
            {
              let e = "baggage" in v ? v.baggage : void 0,
                t = [];
              return Array.isArray(e) ? t.push(...e) : e && t.push(e), _ && t.push(_), {
                ...v,
                "sentry-trace": m,
                baggage: t.length > 0 ? t.join(",") : void 0
              };
            }
          }(t, s, o, n, _);
        }
        return _;
      }(e, s, shouldAttachHeadersWithTargets, u);
      if (t) {
        let n = request_getFullURL(e.fetchData.url),
          r = n ? parseUrl(n).host : void 0;
        t.setAttributes({
          "http.url": n,
          "server.address": r
        });
      }
      o && t && addHTTPTimings(t);
    }), n && (0, ew.UK)(e => {
      let t = function (e, t, n, r) {
        let a = e.xhr,
          i = a && a[ew.xU];
        if (!hasTracingEnabled() || !a || a.__sentry_own_request__ || !i) return;
        let o = t(i.url);
        if (e.endTimestamp && o) {
          let e = a.__sentry_xhr_span_id__;
          if (!e) return;
          let t = r[e];
          t && void 0 !== i.status_code && (setHttpStatus(t, i.status_code), t.end(), delete r[e]);
          return;
        }
        let s = (0, E.nZ)(),
          u = (0, eX.aF)(),
          l = request_getFullURL(i.url),
          p = l ? parseUrl(l).host : void 0,
          m = o ? startInactiveSpan({
            name: `${i.method} ${i.url}`,
            onlyIfParent: !0,
            attributes: {
              type: "xhr",
              "http.method": i.method,
              "http.url": l,
              url: i.url,
              "server.address": p,
              [tn.S3]: "auto.http.browser"
            },
            op: "http.client"
          }) : void 0;
        m && (a.__sentry_xhr_span_id__ = m.spanContext().spanId, r[a.__sentry_xhr_span_id__] = m);
        let _ = (0, E.s3)();
        if (a.setRequestHeader && n(i.url) && _) {
          let {
              traceId: e,
              spanId: t,
              sampled: n,
              dsc: r
            } = {
              ...u.getPropagationContext(),
              ...s.getPropagationContext()
            },
            i = m ? (0, tt.Hb)(m) : (0, tl.$p)(e, t, n),
            o = (0, ty.IQ)(r || (m ? (0, ta.j)(m) : (0, ta._)(e, _, s)));
          (function (e, t, n) {
            try {
              e.setRequestHeader("sentry-trace", t), n && e.setRequestHeader(ty.bU, n);
            } catch (e) {}
          })(a, i, o);
        }
        return m;
      }(e, s, shouldAttachHeadersWithTargets, u);
      o && t && addHTTPTimings(t);
    });
  }
  function addHTTPTimings(e) {
    let {
      url: t
    } = (0, tt.XU)(e).data || {};
    if (!t || "string" != typeof t) return;
    let n = (0, tf._j)("resource", ({
      entries: r
    }) => {
      r.forEach(r => {
        if ("resource" === r.entryType && "initiatorType" in r && "string" == typeof r.nextHopProtocol && ("fetch" === r.initiatorType || "xmlhttprequest" === r.initiatorType) && r.name.endsWith(t)) {
          let t = function (e) {
            let {
                name: t,
                version: n
              } = function (e) {
                let t = "unknown",
                  n = "unknown",
                  r = "";
                for (let a of e) {
                  if ("/" === a) {
                    [t, n] = e.split("/");
                    break;
                  }
                  if (!isNaN(Number(a))) {
                    t = "h" === r ? "http" : r, n = e.split(r)[1];
                    break;
                  }
                  r += a;
                }
                return r === e && (t = r), {
                  name: t,
                  version: n
                };
              }(e.nextHopProtocol),
              r = [];
            return (r.push(["network.protocol.version", n], ["network.protocol.name", t]), eY.Z1) ? [...r, ["http.request.redirect_start", getAbsoluteTime(e.redirectStart)], ["http.request.fetch_start", getAbsoluteTime(e.fetchStart)], ["http.request.domain_lookup_start", getAbsoluteTime(e.domainLookupStart)], ["http.request.domain_lookup_end", getAbsoluteTime(e.domainLookupEnd)], ["http.request.connect_start", getAbsoluteTime(e.connectStart)], ["http.request.secure_connection_start", getAbsoluteTime(e.secureConnectionStart)], ["http.request.connection_end", getAbsoluteTime(e.connectEnd)], ["http.request.request_start", getAbsoluteTime(e.requestStart)], ["http.request.response_start", getAbsoluteTime(e.responseStart)], ["http.request.response_end", getAbsoluteTime(e.responseEnd)]] : r;
          }(r);
          t.forEach(t => e.setAttribute(...t)), setTimeout(n);
        }
      });
    });
  }
  function getAbsoluteTime(e = 0) {
    return ((eY.Z1 || performance.timeOrigin) + e) / 1e3;
  }
  function request_getFullURL(e) {
    try {
      let t = new URL(e, td.WINDOW.location.origin);
      return t.href;
    } catch (e) {
      return;
    }
  }
  let tS = {
    ...ts,
    markBackgroundTransactions: !0,
    routingInstrumentation: function (e, t = !0, n = !0) {
      let r;
      if (!td.WINDOW || !td.WINDOW.location) {
        tc.X && U.kg.warn("Could not initialize routing instrumentation due to invalid location");
        return;
      }
      let a = td.WINDOW.location.href;
      t && (r = e({
        name: td.WINDOW.location.pathname,
        startTimestamp: eY.Z1 ? eY.Z1 / 1e3 : void 0,
        op: "pageload",
        origin: "auto.pageload.browser",
        metadata: {
          source: "url"
        }
      })), n && (0, eC.a)(({
        to: t,
        from: n
      }) => {
        if (void 0 === n && a && -1 !== a.indexOf(t)) {
          a = void 0;
          return;
        }
        n !== t && (a = void 0, r && (tc.X && U.kg.log(`[Tracing] Finishing current transaction with op: ${r.op}`), r.end()), r = e({
          name: td.WINDOW.location.pathname,
          op: "navigation",
          origin: "auto.navigation.browser",
          metadata: {
            source: "url"
          }
        }));
      });
    },
    startTransactionOnLocationChange: !0,
    startTransactionOnPageLoad: !0,
    enableLongTask: !0,
    enableInp: !1,
    interactionsSampleRate: 1,
    _experiments: {},
    ...tb
  };
  let browsertracing_BrowserTracing = class browsertracing_BrowserTracing {
    constructor(e) {
      this.name = "BrowserTracing", this._hasSetTracePropagationTargets = !1, addTracingExtensions(), tc.X && (this._hasSetTracePropagationTargets = !!(e && (e.tracePropagationTargets || e.tracingOrigins))), this.options = {
        ...tS,
        ...e
      }, void 0 !== this.options._experiments.enableLongTask && (this.options.enableLongTask = this.options._experiments.enableLongTask), e && !e.tracePropagationTargets && e.tracingOrigins && (this.options.tracePropagationTargets = e.tracingOrigins), this._collectWebVitals = startTrackingWebVitals(), this._interactionIdToRouteNameMapping = {}, this.options.enableInp && startTrackingINP(this._interactionIdToRouteNameMapping, this.options.interactionsSampleRate), this.options.enableLongTask && startTrackingLongTasks(), this.options._experiments.enableInteractions && startTrackingInteractions(), this._latestRoute = {
        name: void 0,
        context: void 0
      };
    }
    setupOnce(e, t) {
      this._getCurrentHub = t;
      let n = t(),
        r = n.getClient(),
        a = r && r.getOptions(),
        {
          routingInstrumentation: i,
          startTransactionOnLocationChange: o,
          startTransactionOnPageLoad: s,
          markBackgroundTransactions: u,
          traceFetch: l,
          traceXHR: p,
          shouldCreateSpanForRequest: m,
          enableHTTPTimings: _,
          _experiments: v
        } = this.options,
        b = a && a.tracePropagationTargets,
        E = b || this.options.tracePropagationTargets;
      tc.X && this._hasSetTracePropagationTargets && b && U.kg.warn("[Tracing] The `tracePropagationTargets` option was set in the BrowserTracing integration and top level `Sentry.init`. The top level `Sentry.init` value is being used."), i(e => {
        let n = this._createRouteTransaction(e);
        return this.options._experiments.onStartRouteTransaction && this.options._experiments.onStartRouteTransaction(n, e, t), n;
      }, s, o), u && registerBackgroundTabDetection(), v.enableInteractions && this._registerInteractionListener(), this.options.enableInp && this._registerInpInteractionListener(), instrumentOutgoingRequests({
        traceFetch: l,
        traceXHR: p,
        tracePropagationTargets: E,
        shouldCreateSpanForRequest: m,
        enableHTTPTimings: _
      });
    }
    _createRouteTransaction(e) {
      let t;
      if (!this._getCurrentHub) {
        tc.X && U.kg.warn(`[Tracing] Did not create ${e.op} transaction because _getCurrentHub is invalid.`);
        return;
      }
      let n = this._getCurrentHub(),
        {
          beforeNavigate: r,
          idleTimeout: a,
          finalTimeout: i,
          heartbeatInterval: o
        } = this.options,
        s = "pageload" === e.op;
      if (s) {
        let n = s ? getMetaContent("sentry-trace") : "",
          r = s ? getMetaContent("baggage") : void 0,
          {
            traceId: a,
            dsc: i,
            parentSpanId: o,
            sampled: u
          } = (0, tl.pT)(n, r);
        t = {
          traceId: a,
          parentSpanId: o,
          parentSampled: u,
          ...e,
          metadata: {
            ...e.metadata,
            dynamicSamplingContext: i
          },
          trimEnd: !0
        };
      } else t = {
        trimEnd: !0,
        ...e
      };
      let u = "function" == typeof r ? r(t) : t,
        l = void 0 === u ? {
          ...t,
          sampled: !1
        } : u;
      l.metadata = l.name !== t.name ? {
        ...l.metadata,
        source: "custom"
      } : l.metadata, this._latestRoute.name = l.name, this._latestRoute.context = l, !1 === l.sampled && tc.X && U.kg.log(`[Tracing] Will not send ${l.op} transaction because of beforeNavigate.`), tc.X && U.kg.log(`[Tracing] Starting ${l.op} transaction on scope`);
      let {
          location: p
        } = td.WINDOW,
        m = startIdleTransaction(n, l, a, i, !0, {
          location: p
        }, o, s);
      return s && td.WINDOW.document && (td.WINDOW.document.addEventListener("readystatechange", () => {
        ["interactive", "complete"].includes(td.WINDOW.document.readyState) && m.sendAutoFinishSignal();
      }), ["interactive", "complete"].includes(td.WINDOW.document.readyState) && m.sendAutoFinishSignal()), m.registerBeforeFinishCallback(e => {
        this._collectWebVitals(), addPerformanceEntries(e);
      }), m;
    }
    _registerInteractionListener() {
      let e;
      let registerInteractionTransaction = () => {
        let {
            idleTimeout: t,
            finalTimeout: n,
            heartbeatInterval: r
          } = this.options,
          a = "ui.action.click",
          i = getActiveTransaction();
        if (i && i.op && ["navigation", "pageload"].includes(i.op)) {
          tc.X && U.kg.warn(`[Tracing] Did not create ${a} transaction because a pageload or navigation transaction is in progress.`);
          return;
        }
        if (e && (e.setFinishReason("interactionInterrupted"), e.end(), e = void 0), !this._getCurrentHub) {
          tc.X && U.kg.warn(`[Tracing] Did not create ${a} transaction because _getCurrentHub is invalid.`);
          return;
        }
        if (!this._latestRoute.name) {
          tc.X && U.kg.warn(`[Tracing] Did not create ${a} transaction because _latestRouteName is missing.`);
          return;
        }
        let o = this._getCurrentHub(),
          {
            location: s
          } = td.WINDOW,
          u = {
            name: this._latestRoute.name,
            op: a,
            trimEnd: !0,
            data: {
              [tn.Zj]: this._latestRoute.context ? function (e) {
                let t = e.attributes && e.attributes[tn.Zj],
                  n = e.data && e.data[tn.Zj],
                  r = e.metadata && e.metadata.source;
                return t || n || r;
              }(this._latestRoute.context) : "url"
            }
          };
        e = startIdleTransaction(o, u, t, n, !0, {
          location: s
        }, r);
      };
      ["click"].forEach(e => {
        td.WINDOW.document && addEventListener(e, registerInteractionTransaction, {
          once: !1,
          capture: !0
        });
      });
    }
    _registerInpInteractionListener() {
      let handleEntries = ({
        entries: e
      }) => {
        let t = (0, E.s3)(),
          n = void 0 !== t && void 0 !== t.getIntegrationByName ? t.getIntegrationByName("Replay") : void 0,
          r = void 0 !== n ? n.getReplayId() : void 0,
          a = getActiveTransaction(),
          i = (0, E.nZ)(),
          o = void 0 !== i ? i.getUser() : void 0;
        e.forEach(e => {
          if ("duration" in e) {
            let t = e.interactionId;
            if (void 0 === t) return;
            let n = this._interactionIdToRouteNameMapping[t],
              i = e.duration,
              s = e.startTime,
              u = Object.keys(this._interactionIdToRouteNameMapping),
              l = u.length > 0 ? u.reduce((e, t) => this._interactionIdToRouteNameMapping[e].duration < this._interactionIdToRouteNameMapping[t].duration ? e : t) : void 0;
            if ("first-input" === e.entryType) {
              let e = u.map(e => this._interactionIdToRouteNameMapping[e]).some(e => e.duration === i && e.startTime === s);
              if (e) return;
            }
            if (t) {
              if (n) n.duration = Math.max(n.duration, i);else if (u.length < 10 || void 0 === l || i > this._interactionIdToRouteNameMapping[l].duration) {
                let e = this._latestRoute.name,
                  n = this._latestRoute.context;
                e && n && (l && Object.keys(this._interactionIdToRouteNameMapping).length >= 10 && delete this._interactionIdToRouteNameMapping[l], this._interactionIdToRouteNameMapping[t] = {
                  routeName: e,
                  duration: i,
                  parentContext: n,
                  user: o,
                  activeTransaction: a,
                  replayId: r,
                  startTime: s
                });
              }
            }
          }
        });
      };
      (0, tf._j)("event", handleEntries), (0, tf._j)("first-input", handleEntries);
    }
  };
  function getMetaContent(e) {
    let t = (0, ep.qT)(`meta[name=${e}]`);
    return t ? t.getAttribute("content") : void 0;
  }
  let tE = {
      ...ts,
      instrumentNavigation: !0,
      instrumentPageLoad: !0,
      markBackgroundSpan: !0,
      enableLongTask: !0,
      enableInp: !1,
      interactionsSampleRate: 1,
      _experiments: {},
      ...tb
    },
    browserTracingIntegration = (e = {}) => {
      let t = !!tc.X && !!(e.tracePropagationTargets || e.tracingOrigins);
      addTracingExtensions(), !e.tracePropagationTargets && e.tracingOrigins && (e.tracePropagationTargets = e.tracingOrigins);
      let n = {
          ...tE,
          ...e
        },
        r = startTrackingWebVitals(),
        a = {};
      n.enableInp && startTrackingINP(a, n.interactionsSampleRate), n.enableLongTask && startTrackingLongTasks(), n._experiments.enableInteractions && startTrackingInteractions();
      let i = {
        name: void 0,
        context: void 0
      };
      function _createRouteTransaction(e) {
        let t;
        let a = (0, eX.Gd)(),
          {
            beforeStartSpan: o,
            idleTimeout: s,
            finalTimeout: u,
            heartbeatInterval: l
          } = n,
          p = "pageload" === e.op;
        if (p) {
          let n = p ? browserTracingIntegration_getMetaContent("sentry-trace") : "",
            r = p ? browserTracingIntegration_getMetaContent("baggage") : void 0,
            {
              traceId: a,
              dsc: i,
              parentSpanId: o,
              sampled: s
            } = (0, tl.pT)(n, r);
          t = {
            traceId: a,
            parentSpanId: o,
            parentSampled: s,
            ...e,
            metadata: {
              ...e.metadata,
              dynamicSamplingContext: i
            },
            trimEnd: !0
          };
        } else t = {
          trimEnd: !0,
          ...e
        };
        let m = o ? o(t) : t;
        m.metadata = m.name !== t.name ? {
          ...m.metadata,
          source: "custom"
        } : m.metadata, i.name = m.name, i.context = m, !1 === m.sampled && tc.X && U.kg.log(`[Tracing] Will not send ${m.op} transaction because of beforeNavigate.`), tc.X && U.kg.log(`[Tracing] Starting ${m.op} transaction on scope`);
        let {
            location: _
          } = td.WINDOW,
          v = startIdleTransaction(a, m, s, u, !0, {
            location: _
          }, l, p);
        return p && td.WINDOW.document && (td.WINDOW.document.addEventListener("readystatechange", () => {
          ["interactive", "complete"].includes(td.WINDOW.document.readyState) && v.sendAutoFinishSignal();
        }), ["interactive", "complete"].includes(td.WINDOW.document.readyState) && v.sendAutoFinishSignal()), v.registerBeforeFinishCallback(e => {
          r(), addPerformanceEntries(e);
        }), v;
      }
      return {
        name: "BrowserTracing",
        setupOnce: () => {},
        afterAllSetup(e) {
          let r;
          let o = e.getOptions(),
            {
              markBackgroundSpan: s,
              traceFetch: u,
              traceXHR: l,
              shouldCreateSpanForRequest: p,
              enableHTTPTimings: m,
              _experiments: _
            } = n,
            v = o && o.tracePropagationTargets,
            b = v || n.tracePropagationTargets;
          tc.X && t && v && U.kg.warn("[Tracing] The `tracePropagationTargets` option was set in the BrowserTracing integration and top level `Sentry.init`. The top level `Sentry.init` value is being used.");
          let w = td.WINDOW.location && td.WINDOW.location.href;
          if (e.on && (e.on("startNavigationSpan", e => {
            r && (tc.X && U.kg.log(`[Tracing] Finishing current transaction with op: ${(0, tt.XU)(r).op}`), r.end()), r = _createRouteTransaction({
              op: "navigation",
              ...e
            });
          }), e.on("startPageLoadSpan", e => {
            r && (tc.X && U.kg.log(`[Tracing] Finishing current transaction with op: ${(0, tt.XU)(r).op}`), r.end()), r = _createRouteTransaction({
              op: "pageload",
              ...e
            });
          })), n.instrumentPageLoad && e.emit && td.WINDOW.location) {
            let t = {
              name: td.WINDOW.location.pathname,
              startTimestamp: eY.Z1 ? eY.Z1 / 1e3 : void 0,
              origin: "auto.pageload.browser",
              attributes: {
                [tn.Zj]: "url"
              }
            };
            startBrowserTracingPageLoadSpan(e, t);
          }
          n.instrumentNavigation && e.emit && td.WINDOW.location && (0, eC.a)(({
            to: t,
            from: n
          }) => {
            if (void 0 === n && w && -1 !== w.indexOf(t)) {
              w = void 0;
              return;
            }
            if (n !== t) {
              w = void 0;
              let t = {
                name: td.WINDOW.location.pathname,
                origin: "auto.navigation.browser",
                attributes: {
                  [tn.Zj]: "url"
                }
              };
              startBrowserTracingNavigationSpan(e, t);
            }
          }), s && registerBackgroundTabDetection(), _.enableInteractions && function (e, t) {
            let n;
            let registerInteractionTransaction = () => {
              let {
                  idleTimeout: r,
                  finalTimeout: a,
                  heartbeatInterval: i
                } = e,
                o = "ui.action.click",
                s = getActiveTransaction();
              if (s && s.op && ["navigation", "pageload"].includes(s.op)) {
                tc.X && U.kg.warn(`[Tracing] Did not create ${o} transaction because a pageload or navigation transaction is in progress.`);
                return;
              }
              if (n && (n.setFinishReason("interactionInterrupted"), n.end(), n = void 0), !t.name) {
                tc.X && U.kg.warn(`[Tracing] Did not create ${o} transaction because _latestRouteName is missing.`);
                return;
              }
              let {
                  location: u
                } = td.WINDOW,
                l = {
                  name: t.name,
                  op: o,
                  trimEnd: !0,
                  data: {
                    [tn.Zj]: t.context ? function (e) {
                      let t = e.attributes && e.attributes[tn.Zj],
                        n = e.data && e.data[tn.Zj],
                        r = e.metadata && e.metadata.source;
                      return t || n || r;
                    }(t.context) : "url"
                  }
                };
              n = startIdleTransaction((0, eX.Gd)(), l, r, a, !0, {
                location: u
              }, i);
            };
            ["click"].forEach(e => {
              td.WINDOW.document && addEventListener(e, registerInteractionTransaction, {
                once: !1,
                capture: !0
              });
            });
          }(n, i), n.enableInp && function (e, t) {
            let handleEntries = ({
              entries: n
            }) => {
              let r = (0, E.s3)(),
                a = void 0 !== r && void 0 !== r.getIntegrationByName ? r.getIntegrationByName("Replay") : void 0,
                i = void 0 !== a ? a.getReplayId() : void 0,
                o = getActiveTransaction(),
                s = (0, E.nZ)(),
                u = void 0 !== s ? s.getUser() : void 0;
              n.forEach(n => {
                if ("duration" in n) {
                  let r = n.interactionId;
                  if (void 0 === r) return;
                  let a = e[r],
                    s = n.duration,
                    l = n.startTime,
                    p = Object.keys(e),
                    m = p.length > 0 ? p.reduce((t, n) => e[t].duration < e[n].duration ? t : n) : void 0;
                  if ("first-input" === n.entryType) {
                    let t = p.map(t => e[t]).some(e => e.duration === s && e.startTime === l);
                    if (t) return;
                  }
                  if (r) {
                    if (a) a.duration = Math.max(a.duration, s);else if (p.length < 10 || void 0 === m || s > e[m].duration) {
                      let n = t.name,
                        a = t.context;
                      n && a && (m && Object.keys(e).length >= 10 && delete e[m], e[r] = {
                        routeName: n,
                        duration: s,
                        parentContext: a,
                        user: u,
                        activeTransaction: o,
                        replayId: i,
                        startTime: l
                      });
                    }
                  }
                }
              });
            };
            (0, tf._j)("event", handleEntries), (0, tf._j)("first-input", handleEntries);
          }(a, i), instrumentOutgoingRequests({
            traceFetch: u,
            traceXHR: l,
            tracePropagationTargets: b,
            shouldCreateSpanForRequest: p,
            enableHTTPTimings: m
          });
        },
        options: n
      };
    };
  function startBrowserTracingPageLoadSpan(e, t) {
    if (!e.emit) return;
    e.emit("startPageLoadSpan", t);
    let n = trace_getActiveSpan(),
      r = n && (0, tt.XU)(n).op;
    return "pageload" === r ? n : void 0;
  }
  function startBrowserTracingNavigationSpan(e, t) {
    if (!e.emit) return;
    e.emit("startNavigationSpan", t);
    let n = trace_getActiveSpan(),
      r = n && (0, tt.XU)(n).op;
    return "navigation" === r ? n : void 0;
  }
  function browserTracingIntegration_getMetaContent(e) {
    let t = (0, ep.qT)(`meta[name=${e}]`);
    return t ? t.getAttribute("content") : void 0;
  }
  let tP = {
    "routing.instrumentation": "next-app-router"
  };
  var tT = n(90799),
    tR = n.n(tT);
  let tO = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
    tw = {
      "routing.instrumentation": "next-pages-router"
    },
    tx = (0, E.s3)();
  function nextRouterInstrumentation(e, t = !0, n = !0, r, a) {
    let i = !eu.document.getElementById("__NEXT_DATA__");
    i ? function (e, t = !0, n = !0, r, a) {
      let i;
      let o = eu.location.pathname;
      if (t) {
        let t = {
          name: o,
          op: "pageload",
          origin: "auto.pageload.nextjs.app_router_instrumentation",
          tags: tP,
          startTimestamp: eY.Z1 ? eY.Z1 / 1e3 : void 0,
          metadata: {
            source: "url"
          }
        };
        i = e(t), r(t);
      }
      n && (0, ex.U)(t => {
        if (void 0 !== t.endTimestamp || "GET" !== t.fetchData.method) return;
        let n = function (e) {
          if (!e[0] || "object" != typeof e[0] || void 0 === e[0].searchParams || !e[1] || "object" != typeof e[1] || !("headers" in e[1])) return null;
          try {
            let t = e[0],
              n = e[1].headers;
            if ("1" !== n.RSC || "1" === n["Next-Router-Prefetch"]) return null;
            return {
              targetPathname: t.pathname
            };
          } catch (e) {
            return null;
          }
        }(t.args);
        if (null === n) return;
        let r = n.targetPathname,
          s = {
            ...tP,
            from: o
          };
        o = r, i && i.end();
        let u = {
          name: r,
          op: "navigation",
          origin: "auto.navigation.nextjs.app_router_instrumentation",
          tags: s,
          metadata: {
            source: "url"
          }
        };
        e(u), a(u);
      });
    }(e, t, n, r || (() => void 0), a || (() => void 0)) : function (e, t = !0, n = !0, r, a) {
      let {
          route: i,
          params: o,
          sentryTrace: s,
          baggage: p
        } = function () {
          let e;
          let t = eu.document.getElementById("__NEXT_DATA__");
          if (t && t.innerHTML) try {
            e = JSON.parse(t.innerHTML);
          } catch (e) {
            tO && U.kg.warn("Could not extract __NEXT_DATA__");
          }
          if (!e) return {};
          let n = {},
            {
              page: r,
              query: a,
              props: i
            } = e;
          return n.route = r, n.params = a, i && i.pageProps && (n.sentryTrace = i.pageProps._sentryTraceData, n.baggage = i.pageProps._sentryBaggage), n;
        }(),
        {
          traceparentData: m,
          dynamicSamplingContext: _,
          propagationContext: v
        } = (0, tl.KA)(s, p);
      if ((0, E.nZ)().setPropagationContext(v), l = i || eu.location.pathname, t) {
        let t = {
          name: l,
          op: "pageload",
          origin: "auto.pageload.nextjs.pages_router_instrumentation",
          tags: tw,
          startTimestamp: eY.Z1 ? eY.Z1 / 1e3 : void 0,
          ...(o && tx && tx.getOptions().sendDefaultPii && {
            data: o
          }),
          ...m,
          metadata: {
            source: i ? "route" : "url",
            dynamicSamplingContext: m && !_ ? {} : _
          }
        };
        u = e(t), r(t);
      }
      n && tR().events.on("routeChangeStart", t => {
        let n, r;
        let i = t.split(/[\?#]/, 1)[0],
          o = function (e) {
            let t = (eu.__BUILD_MANIFEST || {}).sortedPages;
            if (t) return t.find(t => {
              let n = function (e) {
                let t = e.split("/"),
                  n = "";
                t[t.length - 1].match(/^\[\[\.\.\..+\]\]$/) && (t.pop(), n = "(?:/(.+?))?");
                let r = t.map(e => e.replace(/^\[\.\.\..+\]$/, "(.+?)").replace(/^\[.*\]$/, "([^/]+?)")).join("/");
                return RegExp(`^${r}${n}(?:/)?$`);
              }(t);
              return e.match(n);
            });
          }(i);
        o ? (n = o, r = "route") : (n = i, r = "url");
        let s = {
          ...tw,
          from: l
        };
        l = n, u && u.end();
        let p = {
            name: n,
            op: "navigation",
            origin: "auto.navigation.nextjs.pages_router_instrumentation",
            tags: s,
            metadata: {
              source: r
            }
          },
          m = e(p);
        if (a(p), m) {
          let e = m.startChild({
              op: "ui.nextjs.route-change",
              origin: "auto.ui.nextjs.pages_router_instrumentation",
              description: "Next.js Route Change"
            }),
            finishRouteChangeSpan = () => {
              e.end(), tR().events.off("routeChangeComplete", finishRouteChangeSpan);
            };
          tR().events.on("routeChangeComplete", finishRouteChangeSpan);
        }
      });
    }(e, t, n, r || (() => void 0), a || (() => void 0));
  }
  let BrowserTracing = class BrowserTracing extends browsertracing_BrowserTracing {
    constructor(e) {
      super({
        tracingOrigins: [...tb.tracingOrigins, /^(api\/)/],
        routingInstrumentation: nextRouterInstrumentation,
        ...e
      });
    }
  };
  function browserTracingIntegration_browserTracingIntegration(e) {
    let t = browserTracingIntegration({
        tracingOrigins: [...tb.tracingOrigins, /^(api\/)/],
        ...e,
        instrumentNavigation: !1,
        instrumentPageLoad: !1
      }),
      n = {
        ...t.options,
        instrumentPageLoad: !0,
        instrumentNavigation: !0,
        ...e
      };
    return {
      ...t,
      options: n,
      afterAllSetup(e) {
        let startPageloadCallback = t => {
            startBrowserTracingPageLoadSpan(e, t);
          },
          startNavigationCallback = t => {
            startBrowserTracingNavigationSpan(e, t);
          };
        nextRouterInstrumentation(() => void 0, !1, n.instrumentNavigation, startPageloadCallback, startNavigationCallback), t.afterAllSetup(e), nextRouterInstrumentation(() => void 0, n.instrumentPageLoad, !1, startPageloadCallback, startNavigationCallback);
      }
    };
  }
  var tC = n(46576);
  let tI = /^(\S+:\\|\/?)([\s\S]*?)((?:\.{1,2}|[^/\\]+?|)(\.[^./\\]*|))(?:[/\\]*)$/;
  function resolve(...e) {
    let t = "",
      n = !1;
    for (let r = e.length - 1; r >= -1 && !n; r--) {
      let a = r >= 0 ? e[r] : "/";
      a && (t = `${a}/${t}`, n = "/" === a.charAt(0));
    }
    return t = function (e, t) {
      let n = 0;
      for (let t = e.length - 1; t >= 0; t--) {
        let r = e[t];
        "." === r ? e.splice(t, 1) : ".." === r ? (e.splice(t, 1), n++) : n && (e.splice(t, 1), n--);
      }
      if (t) for (; n--; n) e.unshift("..");
      return e;
    }(t.split("/").filter(e => !!e), !n).join("/"), (n ? "/" : "") + t || ".";
  }
  function trim(e) {
    let t = 0;
    for (; t < e.length && "" === e[t]; t++);
    let n = e.length - 1;
    for (; n >= 0 && "" === e[n]; n--);
    return t > n ? [] : e.slice(t, n - t + 1);
  }
  let tj = "RewriteFrames",
    tk = (0, C._I)((e = {}) => {
      let t = e.root,
        n = e.prefix || "app:///",
        r = e.iteratee || (e => {
          if (!e.filename) return e;
          let r = /^[a-zA-Z]:\\/.test(e.filename) || e.filename.includes("\\") && !e.filename.includes("/"),
            a = /^\//.test(e.filename);
          if (r || a) {
            var i;
            let a;
            let o = r ? e.filename.replace(/^[a-zA-Z]:/, "").replace(/\\/g, "/") : e.filename,
              s = t ? function (e, t) {
                e = resolve(e).slice(1), t = resolve(t).slice(1);
                let n = trim(e.split("/")),
                  r = trim(t.split("/")),
                  a = Math.min(n.length, r.length),
                  i = a;
                for (let e = 0; e < a; e++) if (n[e] !== r[e]) {
                  i = e;
                  break;
                }
                let o = [];
                for (let e = i; e < n.length; e++) o.push("..");
                return (o = o.concat(r.slice(i))).join("/");
              }(t, o) : (a = function (e) {
                let t = e.length > 1024 ? `<truncated>${e.slice(-1024)}` : e,
                  n = tI.exec(t);
                return n ? n.slice(1) : [];
              }(o)[2], i && a.slice(-1 * i.length) === i && (a = a.slice(0, a.length - i.length)), a);
            e.filename = `${n}${s}`;
          }
          return e;
        });
      return {
        name: tj,
        setupOnce() {},
        processEvent(e) {
          let t = e;
          return e.exception && Array.isArray(e.exception.values) && (t = function (e) {
            try {
              return {
                ...e,
                exception: {
                  ...e.exception,
                  values: e.exception.values.map(e => {
                    var t;
                    return {
                      ...e,
                      ...(e.stacktrace && {
                        stacktrace: {
                          ...(t = e.stacktrace),
                          frames: t && t.frames && t.frames.map(e => r(e))
                        }
                      })
                    };
                  })
                }
              };
            } catch (t) {
              return e;
            }
          }(t)), t;
        }
      };
    });
  (0, C.RN)(tj, tk);
  let tM = es.GLOBAL_OBJ,
    tN = (0, C._I)(e => {
      let t = tM.__rewriteFramesAssetPrefixPath__ || "";
      return tk({
        iteratee: e => {
          try {
            let {
              origin: n
            } = new URL(e.filename);
            e.filename = (0, tC.x)([e, "access", e => e.filename, "optionalAccess", e => e.replace, "call", e => e(n, "app://"), "access", e => e.replace, "call", e => e(t, "")]);
          } catch (e) {}
          return e.filename && e.filename.startsWith("app:///_next") && (e.filename = decodeURI(e.filename)), e.filename && e.filename.match(/^app:\/\/\/_next\/static\/chunks\/(main-|main-app-|polyfills-|webpack-|framework-|framework\.)[0-9a-f]+\.js$/) && (e.in_app = !1), e;
        },
        ...e
      });
    }),
    tA = es.GLOBAL_OBJ;
  function client_init(e) {
    let t = {
      environment: function (e) {
        let t = e ? te.env.NEXT_PUBLIC_VERCEL_ENV : te.env.VERCEL_ENV;
        return t ? `vercel-${t}` : void 0;
      }(!0) || "production",
      defaultIntegrations: function (e) {
        let t = [...e9, tN()];
        return ("undefined" == typeof __SENTRY_TRACING__ || __SENTRY_TRACING__) && hasTracingEnabled(e) && t.push(browserTracingIntegration_browserTracingIntegration()), t;
      }(e),
      ...e
    };
    (function (e) {
      let {
        integrations: t
      } = e;
      t && (Array.isArray(t) ? e.integrations = maybeUpdateBrowserTracingIntegration(t) : e.integrations = e => {
        let n = t(e);
        return maybeUpdateBrowserTracingIntegration(n);
      });
    })(t), function (e) {
      let t = tA.__sentryRewritesTunnelPath__;
      if (t && e.dsn) {
        let n = (0, eK.U4)(e.dsn);
        if (!n) return;
        let r = n.host.match(/^o(\d+)\.ingest(?:\.([a-z]{2}))?\.sentry\.io$/);
        if (r) {
          let a = r[1],
            i = r[2],
            o = `${t}?o=${a}&p=${n.projectId}`;
          i && (o += `&r=${i}`), e.tunnel = o, tO && U.kg.info(`Tunneling events to "${o}"`);
        } else tO && U.kg.warn("Provided DSN is not a Sentry SaaS DSN. Will not tunnel events.");
      }
    }(t), applySdkMetadata(t, "nextjs", ["nextjs", "react"]), function (e) {
      let t = {
        ...e
      };
      applySdkMetadata(t, "react"), function (e = {}) {
        void 0 === e.defaultIntegrations && (e.defaultIntegrations = [...e9]), void 0 === e.release && ("string" == typeof __SENTRY_RELEASE__ && (e.release = __SENTRY_RELEASE__), eu.SENTRY_RELEASE && eu.SENTRY_RELEASE.id && (e.release = eu.SENTRY_RELEASE.id)), void 0 === e.autoSessionTracking && (e.autoSessionTracking = !0), void 0 === e.sendClientReports && (e.sendClientReports = !0);
        let t = {
          ...e,
          stackParser: (0, eS.Sq)(e.stackParser || e4),
          integrations: (0, C.m8)(e),
          transport: e.transport || ((0, eq.Ak)() ? makeFetchTransport : makeXHRTransport)
        };
        (function (e, t) {
          !0 === t.debug && (q.X ? U.kg.enable() : (0, U.Cf)(() => {
            console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
          }));
          let n = (0, E.nZ)();
          n.update(t.initialScope);
          let r = new e(t);
          (function (e) {
            let t = (0, eX.Gd)(),
              n = t.getStackTop();
            n.client = e, n.scope.setClient(e);
          })(r), r.init ? r.init() : r.setupIntegrations && r.setupIntegrations();
        })(BrowserClient, t), e.autoSessionTracking && function () {
          if (void 0 === eu.document) {
            eh && U.kg.warn("Session tracking in non-browser environment with @sentry/browser is not supported.");
            return;
          }
          (0, E.yj)({
            ignoreDuration: !0
          }), (0, E.cg)(), (0, eC.a)(({
            from: e,
            to: t
          }) => {
            void 0 !== e && e !== t && ((0, E.yj)({
              ignoreDuration: !0
            }), (0, E.cg)());
          });
        }();
      }(t);
    }(t);
    let n = (0, E.nZ)();
    n.setTag("runtime", "browser");
    let filterTransactions = e => "transaction" === e.type && "/404" === e.transaction ? null : e;
    filterTransactions.id = "NextClient404Filter", n.addEventProcessor(filterTransactions);
  }
  function maybeUpdateBrowserTracingIntegration(e) {
    let t = e.find(e => "BrowserTracing" === e.name);
    if (!t) return e;
    if (t.afterAllSetup && t.options) {
      let {
        options: n
      } = t;
      e[e.indexOf(t)] = browserTracingIntegration_browserTracingIntegration(n);
    }
    if (!(t instanceof BrowserTracing)) {
      let n = t.options;
      delete n.routingInstrumentation, delete n.tracingOrigins, e[e.indexOf(t)] = new BrowserTracing(n);
    }
    return e;
  }
  ({
    ...eG
  });
});
