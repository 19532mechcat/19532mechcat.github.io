                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  n.d(t, {
    _: function () {
      return getDynamicSamplingContextFromClient;
    },
    j: function () {
      return getDynamicSamplingContextFromSpan;
    }
  });
  var r = n(57683),
    a = n(90961),
    i = n(92917),
    o = n(26868),
    s = n(79085);
  function getDynamicSamplingContextFromClient(e, t, n) {
    let i = t.getOptions(),
      {
        publicKey: o
      } = t.getDsn() || {},
      {
        segment: s
      } = n && n.getUser() || {},
      u = (0, r.Jr)({
        environment: i.environment || a.J,
        release: i.release,
        user_segment: s,
        public_key: o,
        trace_id: e
      });
    return t.emit && t.emit("createDsc", u), u;
  }
  function getDynamicSamplingContextFromSpan(e) {
    let t = (0, i.s3)();
    if (!t) return {};
    let n = getDynamicSamplingContextFromClient((0, s.XU)(e).trace_id || "", t, (0, i.nZ)()),
      r = (0, o.G)(e);
    if (!r) return n;
    let a = r && r._frozenDynamicSamplingContext;
    if (a) return a;
    let {
      sampleRate: u,
      source: l
    } = r.metadata;
    null != u && (n.sample_rate = `${u}`);
    let p = (0, s.XU)(r);
    return l && "url" !== l && (n.transaction = p.description), n.sampled = String((0, s.Tt)(r)), t.emit && t.emit("createDsc", n), n;
  }
});
