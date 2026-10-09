                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  n.d(t, {
    gi: function () {
      return applyScopeDataToEvent;
    },
    yo: function () {
      return mergeScopeData;
    }
  });
  var r = n(57683),
    a = n(44040),
    i = n(65501),
    o = n(26868),
    s = n(79085);
  function applyScopeDataToEvent(e, t) {
    let {
      fingerprint: n,
      span: u,
      breadcrumbs: l,
      sdkProcessingMetadata: p
    } = t;
    (function (e, t) {
      let {
          extra: n,
          tags: a,
          user: i,
          contexts: o,
          level: s,
          transactionName: u
        } = t,
        l = (0, r.Jr)(n);
      l && Object.keys(l).length && (e.extra = {
        ...l,
        ...e.extra
      });
      let p = (0, r.Jr)(a);
      p && Object.keys(p).length && (e.tags = {
        ...p,
        ...e.tags
      });
      let m = (0, r.Jr)(i);
      m && Object.keys(m).length && (e.user = {
        ...m,
        ...e.user
      });
      let _ = (0, r.Jr)(o);
      _ && Object.keys(_).length && (e.contexts = {
        ..._,
        ...e.contexts
      }), s && (e.level = s), u && (e.transaction = u);
    })(e, t), u && function (e, t) {
      e.contexts = {
        trace: (0, s.wy)(t),
        ...e.contexts
      };
      let n = (0, o.G)(t);
      if (n) {
        e.sdkProcessingMetadata = {
          dynamicSamplingContext: (0, i.j)(t),
          ...e.sdkProcessingMetadata
        };
        let r = (0, s.XU)(n).description;
        r && (e.tags = {
          transaction: r,
          ...e.tags
        });
      }
    }(e, u), e.fingerprint = e.fingerprint ? (0, a.lE)(e.fingerprint) : [], n && (e.fingerprint = e.fingerprint.concat(n)), e.fingerprint && !e.fingerprint.length && delete e.fingerprint, function (e, t) {
      let n = [...(e.breadcrumbs || []), ...t];
      e.breadcrumbs = n.length ? n : void 0;
    }(e, l), e.sdkProcessingMetadata = {
      ...e.sdkProcessingMetadata,
      ...p
    };
  }
  function mergeScopeData(e, t) {
    let {
      extra: n,
      tags: r,
      user: a,
      contexts: i,
      level: o,
      sdkProcessingMetadata: s,
      breadcrumbs: u,
      fingerprint: l,
      eventProcessors: p,
      attachments: m,
      propagationContext: _,
      transactionName: v,
      span: b
    } = t;
    mergeAndOverwriteScopeData(e, "extra", n), mergeAndOverwriteScopeData(e, "tags", r), mergeAndOverwriteScopeData(e, "user", a), mergeAndOverwriteScopeData(e, "contexts", i), mergeAndOverwriteScopeData(e, "sdkProcessingMetadata", s), o && (e.level = o), v && (e.transactionName = v), b && (e.span = b), u.length && (e.breadcrumbs = [...e.breadcrumbs, ...u]), l.length && (e.fingerprint = [...e.fingerprint, ...l]), p.length && (e.eventProcessors = [...e.eventProcessors, ...p]), m.length && (e.attachments = [...e.attachments, ...m]), e.propagationContext = {
      ...e.propagationContext,
      ..._
    };
  }
  function mergeAndOverwriteScopeData(e, t, n) {
    if (n && Object.keys(n).length) for (let r in e[t] = {
      ...e[t]
    }, n) Object.prototype.hasOwnProperty.call(n, r) && (e[t][r] = n[r]);
  }
});
