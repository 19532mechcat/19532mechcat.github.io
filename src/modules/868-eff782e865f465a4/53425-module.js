                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  n.d(t, {
    CT: function () {
      return updateSession;
    },
    Hv: function () {
      return makeSession;
    },
    RJ: function () {
      return closeSession;
    }
  });
  var r = n(3071),
    a = n(44040),
    i = n(57683);
  function makeSession(e) {
    let t = (0, r.ph)(),
      n = {
        sid: (0, a.DM)(),
        init: !0,
        timestamp: t,
        started: t,
        duration: 0,
        status: "ok",
        errors: 0,
        ignoreDuration: !1,
        toJSON: () => (0, i.Jr)({
          sid: `${n.sid}`,
          init: n.init,
          started: new Date(1e3 * n.started).toISOString(),
          timestamp: new Date(1e3 * n.timestamp).toISOString(),
          status: n.status,
          errors: n.errors,
          did: "number" == typeof n.did || "string" == typeof n.did ? `${n.did}` : void 0,
          duration: n.duration,
          abnormal_mechanism: n.abnormal_mechanism,
          attrs: {
            release: n.release,
            environment: n.environment,
            ip_address: n.ipAddress,
            user_agent: n.userAgent
          }
        })
      };
    return e && updateSession(n, e), n;
  }
  function updateSession(e, t = {}) {
    if (!t.user || (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address), e.did || t.did || (e.did = t.user.id || t.user.email || t.user.username)), e.timestamp = t.timestamp || (0, r.ph)(), t.abnormal_mechanism && (e.abnormal_mechanism = t.abnormal_mechanism), t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration), t.sid && (e.sid = 32 === t.sid.length ? t.sid : (0, a.DM)()), void 0 !== t.init && (e.init = t.init), !e.did && t.did && (e.did = `${t.did}`), "number" == typeof t.started && (e.started = t.started), e.ignoreDuration) e.duration = void 0;else if ("number" == typeof t.duration) e.duration = t.duration;else {
      let t = e.timestamp - e.started;
      e.duration = t >= 0 ? t : 0;
    }
    t.release && (e.release = t.release), t.environment && (e.environment = t.environment), !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress), !e.userAgent && t.userAgent && (e.userAgent = t.userAgent), "number" == typeof t.errors && (e.errors = t.errors), t.status && (e.status = t.status);
  }
  function closeSession(e, t) {
    let n = {};
    t ? n = {
      status: t
    } : "ok" === e.status && (n = {
      status: "exited"
    }), updateSession(e, n);
  }
});
