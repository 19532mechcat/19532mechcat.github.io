                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  n.d(t, {
    W: function () {
      return BaseClient;
    },
    Q: function () {
      return addEventProcessor;
    }
  });
  var r = n(68526),
    a = n(81412),
    i = n(44040),
    o = n(1533),
    s = n(66233),
    u = n(13918),
    l = n(32446),
    p = n(57683),
    m = n(36756),
    _ = n(92917),
    v = n(15496),
    b = n(72567),
    E = n(53425),
    w = n(65501),
    C = n(9024);
  let j = "Not capturing exception because it's already been captured.";
  let BaseClient = class BaseClient {
    constructor(e) {
      if (this._options = e, this._integrations = {}, this._integrationsInitialized = !1, this._numProcessing = 0, this._outcomes = {}, this._hooks = {}, this._eventProcessors = [], e.dsn ? this._dsn = (0, r.vK)(e.dsn) : m.X && a.kg.warn("No DSN provided, client will not send events."), this._dsn) {
        let t = function (e, t = {}) {
          let n = "string" == typeof t ? t : t.tunnel,
            r = "string" != typeof t && t._metadata ? t._metadata.sdk : void 0;
          return n || `${function (e) {
            let t = e.protocol ? `${e.protocol}:` : "",
              n = e.port ? `:${e.port}` : "";
            return `${t}//${e.host}${n}${e.path ? `/${e.path}` : ""}/api/`;
          }(e)}${e.projectId}/envelope/?${(0, p._j)({
            sentry_key: e.publicKey,
            sentry_version: "7",
            ...(r && {
              sentry_client: `${r.name}/${r.version}`
            })
          })}`;
        }(this._dsn, e);
        this._transport = e.transport({
          recordDroppedEvent: this.recordDroppedEvent.bind(this),
          ...e.transportOptions,
          url: t
        });
      }
    }
    captureException(e, t, n) {
      if ((0, i.YO)(e)) {
        m.X && a.kg.log(j);
        return;
      }
      let r = t && t.event_id;
      return this._process(this.eventFromException(e, t).then(e => this._captureEvent(e, t, n)).then(e => {
        r = e;
      })), r;
    }
    captureMessage(e, t, n, r) {
      let a = n && n.event_id,
        i = (0, o.Le)(e) ? e : String(e),
        s = (0, o.pt)(e) ? this.eventFromMessage(i, t, n) : this.eventFromException(e, n);
      return this._process(s.then(e => this._captureEvent(e, n, r)).then(e => {
        a = e;
      })), a;
    }
    captureEvent(e, t, n) {
      if (t && t.originalException && (0, i.YO)(t.originalException)) {
        m.X && a.kg.log(j);
        return;
      }
      let r = t && t.event_id,
        o = e.sdkProcessingMetadata || {},
        s = o.capturedSpanScope;
      return this._process(this._captureEvent(e, t, s || n).then(e => {
        r = e;
      })), r;
    }
    captureSession(e) {
      "string" != typeof e.release ? m.X && a.kg.warn("Discarded session because of missing or non-string release") : (this.sendSession(e), (0, E.CT)(e, {
        init: !1
      }));
    }
    getDsn() {
      return this._dsn;
    }
    getOptions() {
      return this._options;
    }
    getSdkMetadata() {
      return this._options._metadata;
    }
    getTransport() {
      return this._transport;
    }
    flush(e) {
      let t = this._transport;
      return t ? (this.metricsAggregator && this.metricsAggregator.flush(), this._isClientDoneProcessing(e).then(n => t.flush(e).then(e => n && e))) : (0, s.WD)(!0);
    }
    close(e) {
      return this.flush(e).then(e => (this.getOptions().enabled = !1, this.metricsAggregator && this.metricsAggregator.close(), e));
    }
    getEventProcessors() {
      return this._eventProcessors;
    }
    addEventProcessor(e) {
      this._eventProcessors.push(e);
    }
    setupIntegrations(e) {
      (e && !this._integrationsInitialized || this._isEnabled() && !this._integrationsInitialized) && this._setupIntegrations();
    }
    init() {
      this._isEnabled() && this._setupIntegrations();
    }
    getIntegrationById(e) {
      return this.getIntegrationByName(e);
    }
    getIntegrationByName(e) {
      return this._integrations[e];
    }
    getIntegration(e) {
      try {
        return this._integrations[e.id] || null;
      } catch (t) {
        return m.X && a.kg.warn(`Cannot retrieve integration ${e.id} from the current Client`), null;
      }
    }
    addIntegration(e) {
      let t = this._integrations[e.name];
      (0, b.m7)(this, e, this._integrations), t || (0, b.uf)(this, [e]);
    }
    sendEvent(e, t = {}) {
      this.emit("beforeSendEvent", e, t);
      let n = function (e, t, n, r) {
        var a;
        let i = (0, u.HY)(n),
          o = e.type && "replay_event" !== e.type ? e.type : "event";
        (a = n && n.sdk) && (e.sdk = e.sdk || {}, e.sdk.name = e.sdk.name || a.name, e.sdk.version = e.sdk.version || a.version, e.sdk.integrations = [...(e.sdk.integrations || []), ...(a.integrations || [])], e.sdk.packages = [...(e.sdk.packages || []), ...(a.packages || [])]);
        let s = (0, u.Cd)(e, i, r, t);
        delete e.sdkProcessingMetadata;
        let l = [{
          type: o
        }, e];
        return (0, u.Jd)(s, [l]);
      }(e, this._dsn, this._options._metadata, this._options.tunnel);
      for (let e of t.attachments || []) n = (0, u.BO)(n, (0, u.zQ)(e, this._options.transportOptions && this._options.transportOptions.textEncoder));
      let r = this._sendEnvelope(n);
      r && r.then(t => this.emit("afterSendEvent", e, t), null);
    }
    sendSession(e) {
      let t = function (e, t, n, a) {
        let i = (0, u.HY)(n),
          o = {
            sent_at: new Date().toISOString(),
            ...(i && {
              sdk: i
            }),
            ...(!!a && t && {
              dsn: (0, r.RA)(t)
            })
          },
          s = "aggregates" in e ? [{
            type: "sessions"
          }, e] : [{
            type: "session"
          }, e.toJSON()];
        return (0, u.Jd)(o, [s]);
      }(e, this._dsn, this._options._metadata, this._options.tunnel);
      this._sendEnvelope(t);
    }
    recordDroppedEvent(e, t, n) {
      if (this._options.sendClientReports) {
        let n = `${e}:${t}`;
        m.X && a.kg.log(`Adding outcome: "${n}"`), this._outcomes[n] = this._outcomes[n] + 1 || 1;
      }
    }
    captureAggregateMetrics(e) {
      m.X && a.kg.log(`Flushing aggregated metrics, number of metrics: ${e.length}`);
      let t = function (e, t, n, a) {
        let i = {
          sent_at: new Date().toISOString()
        };
        n && n.sdk && (i.sdk = {
          name: n.sdk.name,
          version: n.sdk.version
        }), a && t && (i.dsn = (0, r.RA)(t));
        let o = function (e) {
          let t = function (e) {
              let t = "";
              for (let n of e) {
                let e = Object.entries(n.tags),
                  r = e.length > 0 ? `|#${e.map(([e, t]) => `${e}:${t}`).join(",")}` : "";
                t += `${n.name}@${n.unit}:${n.metric}|${n.metricType}${r}|T${n.timestamp}
`;
              }
              return t;
            }(e),
            n = {
              type: "statsd",
              length: t.length
            };
          return [n, t];
        }(e);
        return (0, u.Jd)(i, [o]);
      }(e, this._dsn, this._options._metadata, this._options.tunnel);
      this._sendEnvelope(t);
    }
    on(e, t) {
      this._hooks[e] || (this._hooks[e] = []), this._hooks[e].push(t);
    }
    emit(e, ...t) {
      this._hooks[e] && this._hooks[e].forEach(e => e(...t));
    }
    _setupIntegrations() {
      let {
        integrations: e
      } = this._options;
      this._integrations = (0, b.q4)(this, e), (0, b.uf)(this, e), this._integrationsInitialized = !0;
    }
    _updateSessionFromEvent(e, t) {
      let n = !1,
        r = !1,
        a = t.exception && t.exception.values;
      if (a) for (let e of (r = !0, a)) {
        let t = e.mechanism;
        if (t && !1 === t.handled) {
          n = !0;
          break;
        }
      }
      let i = "ok" === e.status,
        o = i && 0 === e.errors || i && n;
      o && ((0, E.CT)(e, {
        ...(n && {
          status: "crashed"
        }),
        errors: e.errors || Number(r || n)
      }), this.captureSession(e));
    }
    _isClientDoneProcessing(e) {
      return new s.cW(t => {
        let n = 0,
          r = setInterval(() => {
            0 == this._numProcessing ? (clearInterval(r), t(!0)) : (n += 1, e && n >= e && (clearInterval(r), t(!1)));
          }, 1);
      });
    }
    _isEnabled() {
      return !1 !== this.getOptions().enabled && void 0 !== this._transport;
    }
    _prepareEvent(e, t, n, r = (0, v.aF)()) {
      let a = this.getOptions(),
        i = Object.keys(this._integrations);
      return !t.integrations && i.length > 0 && (t.integrations = i), this.emit("preprocessEvent", e, t), (0, C.R)(a, e, t, n, this, r).then(e => {
        if (null === e) return e;
        let t = {
            ...r.getPropagationContext(),
            ...(n ? n.getPropagationContext() : void 0)
          },
          a = e.contexts && e.contexts.trace;
        if (!a && t) {
          let {
            traceId: r,
            spanId: a,
            parentSpanId: i,
            dsc: o
          } = t;
          e.contexts = {
            trace: {
              trace_id: r,
              span_id: a,
              parent_span_id: i
            },
            ...e.contexts
          };
          let s = o || (0, w._)(r, this, n);
          e.sdkProcessingMetadata = {
            dynamicSamplingContext: s,
            ...e.sdkProcessingMetadata
          };
        }
        return e;
      });
    }
    _captureEvent(e, t = {}, n) {
      return this._processEvent(e, t, n).then(e => e.event_id, e => {
        m.X && ("log" === e.logLevel ? a.kg.log(e.message) : a.kg.warn(e));
      });
    }
    _processEvent(e, t, n) {
      let r = this.getOptions(),
        {
          sampleRate: a
        } = r,
        i = isTransactionEvent(e),
        u = isErrorEvent(e),
        p = e.type || "error",
        m = `before send for type \`${p}\``;
      if (u && "number" == typeof a && Math.random() > a) return this.recordDroppedEvent("sample_rate", "error", e), (0, s.$2)(new l.b(`Discarding event because it's not included in the random sample (sampling rate = ${a})`, "log"));
      let _ = "replay_event" === p ? "replay" : p,
        v = e.sdkProcessingMetadata || {},
        b = v.capturedSpanIsolationScope;
      return this._prepareEvent(e, t, n, b).then(n => {
        if (null === n) throw this.recordDroppedEvent("event_processor", _, e), new l.b("An event processor returned `null`, will not send event.", "log");
        let a = t.data && !0 === t.data.__sentry__;
        if (a) return n;
        let i = function (e, t, n) {
          let {
            beforeSend: r,
            beforeSendTransaction: a
          } = e;
          return isErrorEvent(t) && r ? r(t, n) : isTransactionEvent(t) && a ? a(t, n) : t;
        }(r, n, t);
        return function (e, t) {
          let n = `${t} must return \`null\` or a valid event.`;
          if ((0, o.J8)(e)) return e.then(e => {
            if (!(0, o.PO)(e) && null !== e) throw new l.b(n);
            return e;
          }, e => {
            throw new l.b(`${t} rejected with ${e}`);
          });
          if (!(0, o.PO)(e) && null !== e) throw new l.b(n);
          return e;
        }(i, m);
      }).then(r => {
        if (null === r) throw this.recordDroppedEvent("before_send", _, e), new l.b(`${m} returned \`null\`, will not send event.`, "log");
        let a = n && n.getSession();
        !i && a && this._updateSessionFromEvent(a, r);
        let o = r.transaction_info;
        return i && o && r.transaction !== e.transaction && (r.transaction_info = {
          ...o,
          source: "custom"
        }), this.sendEvent(r, t), r;
      }).then(null, e => {
        if (e instanceof l.b) throw e;
        throw this.captureException(e, {
          data: {
            __sentry__: !0
          },
          originalException: e
        }), new l.b(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${e}`);
      });
    }
    _process(e) {
      this._numProcessing++, e.then(e => (this._numProcessing--, e), e => (this._numProcessing--, e));
    }
    _sendEnvelope(e) {
      if (this.emit("beforeEnvelope", e), this._isEnabled() && this._transport) return this._transport.send(e).then(null, e => {
        m.X && a.kg.error("Error while sending event:", e);
      });
      m.X && a.kg.error("Transport disabled");
    }
    _clearOutcomes() {
      let e = this._outcomes;
      return this._outcomes = {}, Object.keys(e).map(t => {
        let [n, r] = t.split(":");
        return {
          reason: n,
          category: r,
          quantity: e[t]
        };
      });
    }
  };
  function isErrorEvent(e) {
    return void 0 === e.type;
  }
  function isTransactionEvent(e) {
    return "transaction" === e.type;
  }
  function addEventProcessor(e) {
    let t = (0, _.s3)();
    t && t.addEventProcessor && t.addEventProcessor(e);
  }
});
