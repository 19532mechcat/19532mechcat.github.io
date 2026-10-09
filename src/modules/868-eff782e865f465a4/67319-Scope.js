                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  let r;
  n.d(t, {
    lW: function () {
      return getGlobalScope;
    },
    sX: function () {
      return Scope;
    }
  });
  var a = n(1533),
    i = n(3071),
    o = n(44040),
    s = n(81412),
    u = n(88100),
    l = n(53425),
    p = n(19599);
  let Scope = class Scope {
    constructor() {
      this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = generatePropagationContext();
    }
    static clone(e) {
      return e ? e.clone() : new Scope();
    }
    clone() {
      let e = new Scope();
      return e._breadcrumbs = [...this._breadcrumbs], e._tags = {
        ...this._tags
      }, e._extra = {
        ...this._extra
      }, e._contexts = {
        ...this._contexts
      }, e._user = this._user, e._level = this._level, e._span = this._span, e._session = this._session, e._transactionName = this._transactionName, e._fingerprint = this._fingerprint, e._eventProcessors = [...this._eventProcessors], e._requestSession = this._requestSession, e._attachments = [...this._attachments], e._sdkProcessingMetadata = {
        ...this._sdkProcessingMetadata
      }, e._propagationContext = {
        ...this._propagationContext
      }, e._client = this._client, e;
    }
    setClient(e) {
      this._client = e;
    }
    getClient() {
      return this._client;
    }
    addScopeListener(e) {
      this._scopeListeners.push(e);
    }
    addEventProcessor(e) {
      return this._eventProcessors.push(e), this;
    }
    setUser(e) {
      return this._user = e || {
        email: void 0,
        id: void 0,
        ip_address: void 0,
        segment: void 0,
        username: void 0
      }, this._session && (0, l.CT)(this._session, {
        user: e
      }), this._notifyScopeListeners(), this;
    }
    getUser() {
      return this._user;
    }
    getRequestSession() {
      return this._requestSession;
    }
    setRequestSession(e) {
      return this._requestSession = e, this;
    }
    setTags(e) {
      return this._tags = {
        ...this._tags,
        ...e
      }, this._notifyScopeListeners(), this;
    }
    setTag(e, t) {
      return this._tags = {
        ...this._tags,
        [e]: t
      }, this._notifyScopeListeners(), this;
    }
    setExtras(e) {
      return this._extra = {
        ...this._extra,
        ...e
      }, this._notifyScopeListeners(), this;
    }
    setExtra(e, t) {
      return this._extra = {
        ...this._extra,
        [e]: t
      }, this._notifyScopeListeners(), this;
    }
    setFingerprint(e) {
      return this._fingerprint = e, this._notifyScopeListeners(), this;
    }
    setLevel(e) {
      return this._level = e, this._notifyScopeListeners(), this;
    }
    setTransactionName(e) {
      return this._transactionName = e, this._notifyScopeListeners(), this;
    }
    setContext(e, t) {
      return null === t ? delete this._contexts[e] : this._contexts[e] = t, this._notifyScopeListeners(), this;
    }
    setSpan(e) {
      return this._span = e, this._notifyScopeListeners(), this;
    }
    getSpan() {
      return this._span;
    }
    getTransaction() {
      let e = this._span;
      return e && e.transaction;
    }
    setSession(e) {
      return e ? this._session = e : delete this._session, this._notifyScopeListeners(), this;
    }
    getSession() {
      return this._session;
    }
    update(e) {
      if (!e) return this;
      let t = "function" == typeof e ? e(this) : e;
      if (t instanceof Scope) {
        let e = t.getScopeData();
        this._tags = {
          ...this._tags,
          ...e.tags
        }, this._extra = {
          ...this._extra,
          ...e.extra
        }, this._contexts = {
          ...this._contexts,
          ...e.contexts
        }, e.user && Object.keys(e.user).length && (this._user = e.user), e.level && (this._level = e.level), e.fingerprint.length && (this._fingerprint = e.fingerprint), t.getRequestSession() && (this._requestSession = t.getRequestSession()), e.propagationContext && (this._propagationContext = e.propagationContext);
      } else (0, a.PO)(t) && (this._tags = {
        ...this._tags,
        ...e.tags
      }, this._extra = {
        ...this._extra,
        ...e.extra
      }, this._contexts = {
        ...this._contexts,
        ...e.contexts
      }, e.user && (this._user = e.user), e.level && (this._level = e.level), e.fingerprint && (this._fingerprint = e.fingerprint), e.requestSession && (this._requestSession = e.requestSession), e.propagationContext && (this._propagationContext = e.propagationContext));
      return this;
    }
    clear() {
      return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._requestSession = void 0, this._span = void 0, this._session = void 0, this._notifyScopeListeners(), this._attachments = [], this._propagationContext = generatePropagationContext(), this;
    }
    addBreadcrumb(e, t) {
      let n = "number" == typeof t ? t : 100;
      if (n <= 0) return this;
      let r = {
          timestamp: (0, i.yW)(),
          ...e
        },
        a = this._breadcrumbs;
      return a.push(r), this._breadcrumbs = a.length > n ? a.slice(-n) : a, this._notifyScopeListeners(), this;
    }
    getLastBreadcrumb() {
      return this._breadcrumbs[this._breadcrumbs.length - 1];
    }
    clearBreadcrumbs() {
      return this._breadcrumbs = [], this._notifyScopeListeners(), this;
    }
    addAttachment(e) {
      return this._attachments.push(e), this;
    }
    getAttachments() {
      let e = this.getScopeData();
      return e.attachments;
    }
    clearAttachments() {
      return this._attachments = [], this;
    }
    getScopeData() {
      let {
        _breadcrumbs: e,
        _attachments: t,
        _contexts: n,
        _tags: r,
        _extra: a,
        _user: i,
        _level: o,
        _fingerprint: s,
        _eventProcessors: u,
        _propagationContext: l,
        _sdkProcessingMetadata: p,
        _transactionName: m,
        _span: _
      } = this;
      return {
        breadcrumbs: e,
        attachments: t,
        contexts: n,
        tags: r,
        extra: a,
        user: i,
        level: o,
        fingerprint: s || [],
        eventProcessors: u,
        propagationContext: l,
        sdkProcessingMetadata: p,
        transactionName: m,
        span: _
      };
    }
    applyToEvent(e, t = {}, n = []) {
      (0, p.gi)(e, this.getScopeData());
      let r = [...n, ...(0, u.fH)(), ...this._eventProcessors];
      return (0, u.RP)(r, e, t);
    }
    setSDKProcessingMetadata(e) {
      return this._sdkProcessingMetadata = {
        ...this._sdkProcessingMetadata,
        ...e
      }, this;
    }
    setPropagationContext(e) {
      return this._propagationContext = e, this;
    }
    getPropagationContext() {
      return this._propagationContext;
    }
    captureException(e, t) {
      let n = t && t.event_id ? t.event_id : (0, o.DM)();
      if (!this._client) return s.kg.warn("No client configured on scope - will not capture exception!"), n;
      let r = Error("Sentry syntheticException");
      return this._client.captureException(e, {
        originalException: e,
        syntheticException: r,
        ...t,
        event_id: n
      }, this), n;
    }
    captureMessage(e, t, n) {
      let r = n && n.event_id ? n.event_id : (0, o.DM)();
      if (!this._client) return s.kg.warn("No client configured on scope - will not capture message!"), r;
      let a = Error(e);
      return this._client.captureMessage(e, t, {
        originalException: e,
        syntheticException: a,
        ...n,
        event_id: r
      }, this), r;
    }
    captureEvent(e, t) {
      let n = t && t.event_id ? t.event_id : (0, o.DM)();
      return this._client ? this._client.captureEvent(e, {
        ...t,
        event_id: n
      }, this) : s.kg.warn("No client configured on scope - will not capture event!"), n;
    }
    _notifyScopeListeners() {
      this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach(e => {
        e(this);
      }), this._notifyingListeners = !1);
    }
  };
  function getGlobalScope() {
    return r || (r = new Scope()), r;
  }
  function generatePropagationContext() {
    return {
      traceId: (0, o.DM)(),
      spanId: (0, o.DM)().substring(16)
    };
  }
});
