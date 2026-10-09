                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  n.d(t, {
    D2: function () {
      return maybeInstrument;
    },
    Hj: function () {
      return addHandler;
    },
    rK: function () {
      return triggerHandlers;
    }
  });
  var r = n(47406),
    a = n(81412),
    i = n(71463);
  let o = {},
    s = {};
  function addHandler(e, t) {
    o[e] = o[e] || [], o[e].push(t);
  }
  function maybeInstrument(e, t) {
    s[e] || (t(), s[e] = !0);
  }
  function triggerHandlers(e, t) {
    let n = e && o[e];
    if (n) for (let o of n) try {
      o(t);
    } catch (t) {
      r.X && a.kg.error(`Error while triggering instrumentation handler.
Type: ${e}
Name: ${(0, i.$P)(o)}
Error:`, t);
    }
  }
});
