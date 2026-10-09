                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  n.d(t, {
    $k: function () {
      return spanTimeInputToSeconds;
    },
    Hb: function () {
      return spanToTraceHeader;
    },
    Tt: function () {
      return spanIsSampled;
    },
    XU: function () {
      return spanToJSON;
    },
    i0: function () {
      return s;
    },
    ve: function () {
      return o;
    },
    wy: function () {
      return spanToTraceContext;
    }
  });
  var r = n(57683),
    a = n(72293),
    i = n(3071);
  let o = 0,
    s = 1;
  function spanToTraceContext(e) {
    let {
        spanId: t,
        traceId: n
      } = e.spanContext(),
      {
        data: a,
        op: i,
        parent_span_id: o,
        status: s,
        tags: u,
        origin: l
      } = spanToJSON(e);
    return (0, r.Jr)({
      data: a,
      op: i,
      parent_span_id: o,
      span_id: t,
      status: s,
      tags: u,
      trace_id: n,
      origin: l
    });
  }
  function spanToTraceHeader(e) {
    let {
        traceId: t,
        spanId: n
      } = e.spanContext(),
      r = spanIsSampled(e);
    return (0, a.$p)(t, n, r);
  }
  function spanTimeInputToSeconds(e) {
    return "number" == typeof e ? ensureTimestampInSeconds(e) : Array.isArray(e) ? e[0] + e[1] / 1e9 : e instanceof Date ? ensureTimestampInSeconds(e.getTime()) : (0, i.ph)();
  }
  function ensureTimestampInSeconds(e) {
    return e > 9999999999 ? e / 1e3 : e;
  }
  function spanToJSON(e) {
    return "function" == typeof e.getSpanJSON ? e.getSpanJSON() : "function" == typeof e.toJSON ? e.toJSON() : {};
  }
  function spanIsSampled(e) {
    let {
      traceFlags: t
    } = e.spanContext();
    return !!(t & s);
  }
});
