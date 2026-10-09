                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  n.d(t, {
    $p: function () {
      return generateSentryTraceHeader;
    },
    KA: function () {
      return tracingContextFromHeaders;
    },
    pT: function () {
      return propagationContextFromHeaders;
    }
  });
  var r = n(34777),
    a = n(44040);
  let i = RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");
  function extractTraceparentData(e) {
    let t;
    if (!e) return;
    let n = e.match(i);
    if (n) return "1" === n[3] ? t = !0 : "0" === n[3] && (t = !1), {
      traceId: n[1],
      parentSampled: t,
      parentSpanId: n[2]
    };
  }
  function tracingContextFromHeaders(e, t) {
    let n = extractTraceparentData(e),
      i = (0, r.EN)(t),
      {
        traceId: o,
        parentSpanId: s,
        parentSampled: u
      } = n || {};
    return n ? {
      traceparentData: n,
      dynamicSamplingContext: i || {},
      propagationContext: {
        traceId: o || (0, a.DM)(),
        parentSpanId: s || (0, a.DM)().substring(16),
        spanId: (0, a.DM)().substring(16),
        sampled: u,
        dsc: i || {}
      }
    } : {
      traceparentData: n,
      dynamicSamplingContext: void 0,
      propagationContext: {
        traceId: o || (0, a.DM)(),
        spanId: (0, a.DM)().substring(16)
      }
    };
  }
  function propagationContextFromHeaders(e, t) {
    let n = extractTraceparentData(e),
      i = (0, r.EN)(t),
      {
        traceId: o,
        parentSpanId: s,
        parentSampled: u
      } = n || {};
    return n ? {
      traceId: o || (0, a.DM)(),
      parentSpanId: s || (0, a.DM)().substring(16),
      spanId: (0, a.DM)().substring(16),
      sampled: u,
      dsc: i || {}
    } : {
      traceId: o || (0, a.DM)(),
      spanId: (0, a.DM)().substring(16)
    };
  }
  function generateSentryTraceHeader(e = (0, a.DM)(), t = (0, a.DM)().substring(16), n) {
    let r = "";
    return void 0 !== n && (r = n ? "-1" : "-0"), `${e}-${t}${r}`;
  }
});
