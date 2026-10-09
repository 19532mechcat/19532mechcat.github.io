                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  n.d(t, {
    Gd: function () {
      return getCurrentHub;
    },
    aF: function () {
      return getIsolationScope;
    },
    cu: function () {
      return getMainCarrier;
    }
  });
  var r = n(1533),
    a = n(44040),
    i = n(3071),
    o = n(81412),
    s = n(30779),
    u = n(90961),
    l = n(36756),
    p = n(67319),
    m = n(53425),
    _ = n(70326);
  let v = parseFloat(_.J);
  let Hub = class Hub {
    constructor(e, t, n, r = v) {
      let a, i;
      this._version = r, t ? a = t : (a = new p.sX()).setClient(e), n ? i = n : (i = new p.sX()).setClient(e), this._stack = [{
        scope: a
      }], e && this.bindClient(e), this._isolationScope = i;
    }
    isOlderThan(e) {
      return this._version < e;
    }
    bindClient(e) {
      let t = this.getStackTop();
      t.client = e, t.scope.setClient(e), e && e.setupIntegrations && e.setupIntegrations();
    }
    pushScope() {
      let e = this.getScope().clone();
      return this.getStack().push({
        client: this.getClient(),
        scope: e
      }), e;
    }
    popScope() {
      return !(this.getStack().length <= 1) && !!this.getStack().pop();
    }
    withScope(e) {
      let t;
      let n = this.pushScope();
      try {
        t = e(n);
      } catch (e) {
        throw this.popScope(), e;
      }
      return (0, r.J8)(t) ? t.then(e => (this.popScope(), e), e => {
        throw this.popScope(), e;
      }) : (this.popScope(), t);
    }
    getClient() {
      return this.getStackTop().client;
    }
    getScope() {
      return this.getStackTop().scope;
    }
    getIsolationScope() {
      return this._isolationScope;
    }
    getStack() {
      return this._stack;
    }
    getStackTop() {
      return this._stack[this._stack.length - 1];
    }
    captureException(e, t) {
      let n = this._lastEventId = t && t.event_id ? t.event_id : (0, a.DM)(),
        r = Error("Sentry syntheticException");
      return this.getScope().captureException(e, {
        originalException: e,
        syntheticException: r,
        ...t,
        event_id: n
      }), n;
    }
    captureMessage(e, t, n) {
      let r = this._lastEventId = n && n.event_id ? n.event_id : (0, a.DM)(),
        i = Error(e);
      return this.getScope().captureMessage(e, t, {
        originalException: e,
        syntheticException: i,
        ...n,
        event_id: r
      }), r;
    }
    captureEvent(e, t) {
      let n = t && t.event_id ? t.event_id : (0, a.DM)();
      return e.type || (this._lastEventId = n), this.getScope().captureEvent(e, {
        ...t,
        event_id: n
      }), n;
    }
    lastEventId() {
      return this._lastEventId;
    }
    addBreadcrumb(e, t) {
      let {
        scope: n,
        client: r
      } = this.getStackTop();
      if (!r) return;
      let {
        beforeBreadcrumb: a = null,
        maxBreadcrumbs: s = 100
      } = r.getOptions && r.getOptions() || {};
      if (s <= 0) return;
      let u = (0, i.yW)(),
        l = {
          timestamp: u,
          ...e
        },
        p = a ? (0, o.Cf)(() => a(l, t)) : l;
      null !== p && (r.emit && r.emit("beforeAddBreadcrumb", p, t), n.addBreadcrumb(p, s));
    }
    setUser(e) {
      this.getScope().setUser(e), this.getIsolationScope().setUser(e);
    }
    setTags(e) {
      this.getScope().setTags(e), this.getIsolationScope().setTags(e);
    }
    setExtras(e) {
      this.getScope().setExtras(e), this.getIsolationScope().setExtras(e);
    }
    setTag(e, t) {
      this.getScope().setTag(e, t), this.getIsolationScope().setTag(e, t);
    }
    setExtra(e, t) {
      this.getScope().setExtra(e, t), this.getIsolationScope().setExtra(e, t);
    }
    setContext(e, t) {
      this.getScope().setContext(e, t), this.getIsolationScope().setContext(e, t);
    }
    configureScope(e) {
      let {
        scope: t,
        client: n
      } = this.getStackTop();
      n && e(t);
    }
    run(e) {
      let t = makeMain(this);
      try {
        e(this);
      } finally {
        makeMain(t);
      }
    }
    getIntegration(e) {
      let t = this.getClient();
      if (!t) return null;
      try {
        return t.getIntegration(e);
      } catch (t) {
        return l.X && o.kg.warn(`Cannot retrieve integration ${e.id} from the current Hub`), null;
      }
    }
    startTransaction(e, t) {
      let n = this._callExtensionMethod("startTransaction", e, t);
      if (l.X && !n) {
        let e = this.getClient();
        e ? o.kg.warn(`Tracing extension 'startTransaction' has not been added. Call 'addTracingExtensions' before calling 'init':
Sentry.addTracingExtensions();
Sentry.init({...});
`) : o.kg.warn("Tracing extension 'startTransaction' is missing. You should 'init' the SDK before calling 'startTransaction'");
      }
      return n;
    }
    traceHeaders() {
      return this._callExtensionMethod("traceHeaders");
    }
    captureSession(e = !1) {
      if (e) return this.endSession();
      this._sendSessionUpdate();
    }
    endSession() {
      let e = this.getStackTop(),
        t = e.scope,
        n = t.getSession();
      n && (0, m.RJ)(n), this._sendSessionUpdate(), t.setSession();
    }
    startSession(e) {
      let {
          scope: t,
          client: n
        } = this.getStackTop(),
        {
          release: r,
          environment: a = u.J
        } = n && n.getOptions() || {},
        {
          userAgent: i
        } = s.GLOBAL_OBJ.navigator || {},
        o = (0, m.Hv)({
          release: r,
          environment: a,
          user: t.getUser(),
          ...(i && {
            userAgent: i
          }),
          ...e
        }),
        l = t.getSession && t.getSession();
      return l && "ok" === l.status && (0, m.CT)(l, {
        status: "exited"
      }), this.endSession(), t.setSession(o), o;
    }
    shouldSendDefaultPii() {
      let e = this.getClient(),
        t = e && e.getOptions();
      return !!(t && t.sendDefaultPii);
    }
    _sendSessionUpdate() {
      let {
          scope: e,
          client: t
        } = this.getStackTop(),
        n = e.getSession();
      n && t && t.captureSession && t.captureSession(n);
    }
    _callExtensionMethod(e, ...t) {
      let n = getMainCarrier(),
        r = n.__SENTRY__;
      if (r && r.extensions && "function" == typeof r.extensions[e]) return r.extensions[e].apply(this, t);
      l.X && o.kg.warn(`Extension method ${e} couldn't be found, doing nothing.`);
    }
  };
  function getMainCarrier() {
    return s.GLOBAL_OBJ.__SENTRY__ = s.GLOBAL_OBJ.__SENTRY__ || {
      extensions: {},
      hub: void 0
    }, s.GLOBAL_OBJ;
  }
  function makeMain(e) {
    let t = getMainCarrier(),
      n = getHubFromCarrier(t);
    return setHubOnCarrier(t, e), n;
  }
  function getCurrentHub() {
    let e = getMainCarrier();
    if (e.__SENTRY__ && e.__SENTRY__.acs) {
      let t = e.__SENTRY__.acs.getCurrentHub();
      if (t) return t;
    }
    return function (e = getMainCarrier()) {
      return (!(e && e.__SENTRY__ && e.__SENTRY__.hub) || getHubFromCarrier(e).isOlderThan(v)) && setHubOnCarrier(e, new Hub()), getHubFromCarrier(e);
    }(e);
  }
  function getIsolationScope() {
    return getCurrentHub().getIsolationScope();
  }
  function getHubFromCarrier(e) {
    return (0, s.Y)("hub", () => new Hub(), e);
  }
  function setHubOnCarrier(e, t) {
    if (!e) return !1;
    let n = e.__SENTRY__ = e.__SENTRY__ || {};
    return n.hub = t, !0;
  }
});
