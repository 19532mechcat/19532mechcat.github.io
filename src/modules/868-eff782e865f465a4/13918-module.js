                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  n.d(t, {
    BO: function () {
      return addItemToEnvelope;
    },
    Cd: function () {
      return createEventEnvelopeHeaders;
    },
    HY: function () {
      return getSdkMetadataForEnvelopeHeader;
    },
    Jd: function () {
      return createEnvelope;
    },
    V$: function () {
      return serializeEnvelope;
    },
    gv: function () {
      return forEachEnvelopeItem;
    },
    mL: function () {
      return envelopeItemTypeToDataCategory;
    },
    zQ: function () {
      return createAttachmentEnvelopeItem;
    }
  });
  var r = n(68526),
    a = n(20312),
    i = n(57683);
  function createEnvelope(e, t = []) {
    return [e, t];
  }
  function addItemToEnvelope(e, t) {
    let [n, r] = e;
    return [n, [...r, t]];
  }
  function forEachEnvelopeItem(e, t) {
    let n = e[1];
    for (let e of n) {
      let n = e[0].type,
        r = t(e, n);
      if (r) return !0;
    }
    return !1;
  }
  function encodeUTF8(e, t) {
    let n = t || new TextEncoder();
    return n.encode(e);
  }
  function serializeEnvelope(e, t) {
    let [n, r] = e,
      i = JSON.stringify(n);
    function append(e) {
      "string" == typeof i ? i = "string" == typeof e ? i + e : [encodeUTF8(i, t), e] : i.push("string" == typeof e ? encodeUTF8(e, t) : e);
    }
    for (let e of r) {
      let [t, n] = e;
      if (append(`
${JSON.stringify(t)}
`), "string" == typeof n || n instanceof Uint8Array) append(n);else {
        let e;
        try {
          e = JSON.stringify(n);
        } catch (t) {
          e = JSON.stringify((0, a.Fv)(n));
        }
        append(e);
      }
    }
    return "string" == typeof i ? i : function (e) {
      let t = e.reduce((e, t) => e + t.length, 0),
        n = new Uint8Array(t),
        r = 0;
      for (let t of e) n.set(t, r), r += t.length;
      return n;
    }(i);
  }
  function createAttachmentEnvelopeItem(e, t) {
    let n = "string" == typeof e.data ? encodeUTF8(e.data, t) : e.data;
    return [(0, i.Jr)({
      type: "attachment",
      length: n.length,
      filename: e.filename,
      content_type: e.contentType,
      attachment_type: e.attachmentType
    }), n];
  }
  let o = {
    session: "session",
    sessions: "session",
    attachment: "attachment",
    transaction: "transaction",
    event: "error",
    client_report: "internal",
    user_report: "default",
    profile: "profile",
    replay_event: "replay",
    replay_recording: "replay",
    check_in: "monitor",
    feedback: "feedback",
    span: "span",
    statsd: "metric_bucket"
  };
  function envelopeItemTypeToDataCategory(e) {
    return o[e];
  }
  function getSdkMetadataForEnvelopeHeader(e) {
    if (!e || !e.sdk) return;
    let {
      name: t,
      version: n
    } = e.sdk;
    return {
      name: t,
      version: n
    };
  }
  function createEventEnvelopeHeaders(e, t, n, a) {
    let o = e.sdkProcessingMetadata && e.sdkProcessingMetadata.dynamicSamplingContext;
    return {
      event_id: e.event_id,
      sent_at: new Date().toISOString(),
      ...(t && {
        sdk: t
      }),
      ...(!!n && a && {
        dsn: (0, r.RA)(a)
      }),
      ...(o && {
        trace: (0, i.Jr)({
          ...o
        })
      })
    };
  }
});
