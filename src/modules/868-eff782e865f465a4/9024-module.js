                                                                                                           
                                                    
(function (e, t, n) {
  "use strict";

  n.d(t, {
    R: function () {
      return prepareEvent;
    },
    U0: function () {
      return parseEventHintOrCaptureContext;
    }
  });
  var r = n(44040),
    a = n(3071),
    i = n(1840),
    o = n(30779),
    s = n(20312),
    u = n(90961),
    l = n(88100),
    p = n(67319),
    m = n(19599),
    _ = n(79085);
  function prepareEvent(e, t, n, b, E, w) {
    let {
        normalizeDepth: C = 3,
        normalizeMaxBreadth: j = 1e3
      } = e,
      A = {
        ...t,
        event_id: t.event_id || n.event_id || (0, r.DM)(),
        timestamp: t.timestamp || (0, a.yW)()
      },
      D = n.integrations || e.integrations.map(e => e.name);
    (function (e, t) {
      let {
        environment: n,
        release: r,
        dist: a,
        maxValueLength: o = 250
      } = t;
      "environment" in e || (e.environment = "environment" in t ? n : u.J), void 0 === e.release && void 0 !== r && (e.release = r), void 0 === e.dist && void 0 !== a && (e.dist = a), e.message && (e.message = (0, i.$G)(e.message, o));
      let s = e.exception && e.exception.values && e.exception.values[0];
      s && s.value && (s.value = (0, i.$G)(s.value, o));
      let l = e.request;
      l && l.url && (l.url = (0, i.$G)(l.url, o));
    })(A, e), D.length > 0 && (A.sdk = A.sdk || {}, A.sdk.integrations = [...(A.sdk.integrations || []), ...D]), void 0 === t.type && function (e, t) {
      let n;
      let r = o.GLOBAL_OBJ._sentryDebugIds;
      if (!r) return;
      let a = v.get(t);
      a ? n = a : (n = new Map(), v.set(t, n));
      let i = Object.keys(r).reduce((e, a) => {
        let i;
        let o = n.get(a);
        o ? i = o : (i = t(a), n.set(a, i));
        for (let t = i.length - 1; t >= 0; t--) {
          let n = i[t];
          if (n.filename) {
            e[n.filename] = r[a];
            break;
          }
        }
        return e;
      }, {});
      try {
        e.exception.values.forEach(e => {
          e.stacktrace.frames.forEach(e => {
            e.filename && (e.debug_id = i[e.filename]);
          });
        });
      } catch (e) {}
    }(A, e.stackParser);
    let F = function (e, t) {
      if (!t) return e;
      let n = e ? e.clone() : new p.sX();
      return n.update(t), n;
    }(b, n.captureContext);
    n.mechanism && (0, r.EG)(A, n.mechanism);
    let U = E && E.getEventProcessors ? E.getEventProcessors() : [],
      $ = (0, p.lW)().getScopeData();
    if (w) {
      let e = w.getScopeData();
      (0, m.yo)($, e);
    }
    if (F) {
      let e = F.getScopeData();
      (0, m.yo)($, e);
    }
    let B = [...(n.attachments || []), ...$.attachments];
    B.length && (n.attachments = B), (0, m.gi)(A, $);
    let q = [...U, ...(0, l.fH)(), ...$.eventProcessors],
      z = (0, l.RP)(q, A, n);
    return z.then(e => (e && function (e) {
      let t = {};
      try {
        e.exception.values.forEach(e => {
          e.stacktrace.frames.forEach(e => {
            e.debug_id && (e.abs_path ? t[e.abs_path] = e.debug_id : e.filename && (t[e.filename] = e.debug_id), delete e.debug_id);
          });
        });
      } catch (e) {}
      if (0 === Object.keys(t).length) return;
      e.debug_meta = e.debug_meta || {}, e.debug_meta.images = e.debug_meta.images || [];
      let n = e.debug_meta.images;
      Object.keys(t).forEach(e => {
        n.push({
          type: "sourcemap",
          code_file: e,
          debug_id: t[e]
        });
      });
    }(e), "number" == typeof C && C > 0) ? function (e, t, n) {
      if (!e) return null;
      let r = {
        ...e,
        ...(e.breadcrumbs && {
          breadcrumbs: e.breadcrumbs.map(e => ({
            ...e,
            ...(e.data && {
              data: (0, s.Fv)(e.data, t, n)
            })
          }))
        }),
        ...(e.user && {
          user: (0, s.Fv)(e.user, t, n)
        }),
        ...(e.contexts && {
          contexts: (0, s.Fv)(e.contexts, t, n)
        }),
        ...(e.extra && {
          extra: (0, s.Fv)(e.extra, t, n)
        })
      };
      return e.contexts && e.contexts.trace && r.contexts && (r.contexts.trace = e.contexts.trace, e.contexts.trace.data && (r.contexts.trace.data = (0, s.Fv)(e.contexts.trace.data, t, n))), e.spans && (r.spans = e.spans.map(e => {
        let r = (0, _.XU)(e).data;
        return r && (e.data = (0, s.Fv)(r, t, n)), e;
      })), r;
    }(e, C, j) : e);
  }
  let v = new WeakMap();
  function parseEventHintOrCaptureContext(e) {
    return e ? e instanceof p.sX || "function" == typeof e || Object.keys(e).some(e => b.includes(e)) ? {
      captureContext: e
    } : e : void 0;
  }
  let b = ["user", "level", "extra", "contexts", "tags", "fingerprint", "requestSession", "propagationContext"];
});
