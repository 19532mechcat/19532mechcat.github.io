                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  let r, a, i;
  n.d(t, {
    O: function () {
      return addClickKeypressInstrumentationHandler;
    }
  });
  var o = n(44040),
    s = n(57683),
    u = n(30779),
    l = n(74750);
  let p = u.GLOBAL_OBJ;
  function addClickKeypressInstrumentationHandler(e) {
    (0, l.Hj)("dom", e), (0, l.D2)("dom", instrumentDOM);
  }
  function instrumentDOM() {
    if (!p.document) return;
    let e = l.rK.bind(null, "dom"),
      t = makeDOMEventHandler(e, !0);
    p.document.addEventListener("click", t, !1), p.document.addEventListener("keypress", t, !1), ["EventTarget", "Node"].forEach(t => {
      let n = p[t] && p[t].prototype;
      n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && ((0, s.hl)(n, "addEventListener", function (t) {
        return function (n, r, a) {
          if ("click" === n || "keypress" == n) try {
            let r = this.__sentry_instrumentation_handlers__ = this.__sentry_instrumentation_handlers__ || {},
              i = r[n] = r[n] || {
                refCount: 0
              };
            if (!i.handler) {
              let r = makeDOMEventHandler(e);
              i.handler = r, t.call(this, n, r, a);
            }
            i.refCount++;
          } catch (e) {}
          return t.call(this, n, r, a);
        };
      }), (0, s.hl)(n, "removeEventListener", function (e) {
        return function (t, n, r) {
          if ("click" === t || "keypress" == t) try {
            let n = this.__sentry_instrumentation_handlers__ || {},
              a = n[t];
            a && (a.refCount--, a.refCount <= 0 && (e.call(this, t, a.handler, r), a.handler = void 0, delete n[t]), 0 === Object.keys(n).length && delete this.__sentry_instrumentation_handlers__);
          } catch (e) {}
          return e.call(this, t, n, r);
        };
      }));
    });
  }
  function makeDOMEventHandler(e, t = !1) {
    return n => {
      if (!n || n._sentryCaptured) return;
      let u = function (e) {
        try {
          return e.target;
        } catch (e) {
          return null;
        }
      }(n);
      if ("keypress" === n.type && (!u || !u.tagName || "INPUT" !== u.tagName && "TEXTAREA" !== u.tagName && !u.isContentEditable)) return;
      (0, s.xp)(n, "_sentryCaptured", !0), u && !u._sentryId && (0, s.xp)(u, "_sentryId", (0, o.DM)());
      let l = "keypress" === n.type ? "input" : n.type;
      !function (e) {
        if (e.type !== a) return !1;
        try {
          if (!e.target || e.target._sentryId !== i) return !1;
        } catch (e) {}
        return !0;
      }(n) && (e({
        event: n,
        name: l,
        global: t
      }), a = n.type, i = u ? u._sentryId : void 0), clearTimeout(r), r = p.setTimeout(() => {
        i = void 0, a = void 0;
      }, 1e3);
    };
  }
});
