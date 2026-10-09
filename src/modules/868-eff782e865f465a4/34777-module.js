                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  n.d(t, {
    EN: function () {
      return baggageHeaderToDynamicSamplingContext;
    },
    IQ: function () {
      return dynamicSamplingContextToSentryBaggageHeader;
    },
    bU: function () {
      return o;
    }
  });
  var r = n(47406),
    a = n(1533),
    i = n(81412);
  let o = "baggage",
    s = "sentry-",
    u = /^sentry-/;
  function baggageHeaderToDynamicSamplingContext(e) {
    if (!(0, a.HD)(e) && !Array.isArray(e)) return;
    let t = {};
    if (Array.isArray(e)) t = e.reduce((e, t) => {
      let n = baggageHeaderToObject(t);
      for (let t of Object.keys(n)) e[t] = n[t];
      return e;
    }, {});else {
      if (!e) return;
      t = baggageHeaderToObject(e);
    }
    let n = Object.entries(t).reduce((e, [t, n]) => {
      if (t.match(u)) {
        let r = t.slice(s.length);
        e[r] = n;
      }
      return e;
    }, {});
    return Object.keys(n).length > 0 ? n : void 0;
  }
  function dynamicSamplingContextToSentryBaggageHeader(e) {
    if (!e) return;
    let t = Object.entries(e).reduce((e, [t, n]) => (n && (e[`${s}${t}`] = n), e), {});
    return function (e) {
      if (0 !== Object.keys(e).length) return Object.entries(e).reduce((e, [t, n], a) => {
        let o = `${encodeURIComponent(t)}=${encodeURIComponent(n)}`,
          s = 0 === a ? o : `${e},${o}`;
        return s.length > 8192 ? (r.X && i.kg.warn(`Not adding key: ${t} with val: ${n} to baggage header due to exceeding baggage size limits.`), e) : s;
      }, "");
    }(t);
  }
  function baggageHeaderToObject(e) {
    return e.split(",").map(e => e.split("=").map(e => decodeURIComponent(e.trim()))).reduce((e, [t, n]) => (e[t] = n, e), {});
  }
});
