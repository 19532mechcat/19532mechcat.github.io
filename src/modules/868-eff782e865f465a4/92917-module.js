                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  n.d(t, {
    $e: function () {
      return withScope;
    },
    Tb: function () {
      return captureException;
    },
    cg: function () {
      return captureSession;
    },
    eN: function () {
      return captureEvent;
    },
    nZ: function () {
      return getCurrentScope;
    },
    n_: function () {
      return addBreadcrumb;
    },
    s3: function () {
      return getClient;
    },
    v: function () {
      return setContext;
    },
    yj: function () {
      return startSession;
    }
  });
  var r = n(30779),
    a = n(90961),
    i = n(15496),
    o = n(53425),
    s = n(9024);
  function captureException(e, t) {
    return (0, i.Gd)().captureException(e, (0, s.U0)(t));
  }
  function captureEvent(e, t) {
    return (0, i.Gd)().captureEvent(e, t);
  }
  function addBreadcrumb(e, t) {
    (0, i.Gd)().addBreadcrumb(e, t);
  }
  function setContext(e, t) {
    (0, i.Gd)().setContext(e, t);
  }
  function withScope(...e) {
    let t = (0, i.Gd)();
    if (2 === e.length) {
      let [n, r] = e;
      return n ? t.withScope(() => (t.getStackTop().scope = n, r(n))) : t.withScope(r);
    }
    return t.withScope(e[0]);
  }
  function getClient() {
    return (0, i.Gd)().getClient();
  }
  function getCurrentScope() {
    return (0, i.Gd)().getScope();
  }
  function startSession(e) {
    let t = getClient(),
      n = (0, i.aF)(),
      s = getCurrentScope(),
      {
        release: u,
        environment: l = a.J
      } = t && t.getOptions() || {},
      {
        userAgent: p
      } = r.GLOBAL_OBJ.navigator || {},
      m = (0, o.Hv)({
        release: u,
        environment: l,
        user: s.getUser() || n.getUser(),
        ...(p && {
          userAgent: p
        }),
        ...e
      }),
      _ = n.getSession();
    return _ && "ok" === _.status && (0, o.CT)(_, {
      status: "exited"
    }), endSession(), n.setSession(m), s.setSession(m), m;
  }
  function endSession() {
    let e = (0, i.aF)(),
      t = getCurrentScope(),
      n = t.getSession() || e.getSession();
    n && (0, o.RJ)(n), _sendSessionUpdate(), e.setSession(), t.setSession();
  }
  function _sendSessionUpdate() {
    let e = (0, i.aF)(),
      t = getCurrentScope(),
      n = getClient(),
      r = t.getSession() || e.getSession();
    r && n && n.captureSession && n.captureSession(r);
  }
  function captureSession(e = !1) {
    if (e) {
      endSession();
      return;
    }
    _sendSessionUpdate();
  }
});
