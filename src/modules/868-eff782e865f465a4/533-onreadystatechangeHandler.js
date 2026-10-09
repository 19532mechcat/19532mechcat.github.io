                                                                                                          
                                                    
(function (e, t, n) {
  "use strict";

  n.d(t, {
    UK: function () {
      return addXhrInstrumentationHandler;
    },
    xU: function () {
      return u;
    }
  });
  var r = n(1533),
    a = n(57683),
    i = n(30779),
    o = n(74750);
  let s = i.GLOBAL_OBJ,
    u = "__sentry_xhr_v3__";
  function addXhrInstrumentationHandler(e) {
    (0, o.Hj)("xhr", e), (0, o.D2)("xhr", instrumentXHR);
  }
  function instrumentXHR() {
    if (!s.XMLHttpRequest) return;
    let e = XMLHttpRequest.prototype;
    (0, a.hl)(e, "open", function (e) {
      return function (...t) {
        let n = Date.now(),
          i = (0, r.HD)(t[0]) ? t[0].toUpperCase() : void 0,
          s = function (e) {
            if ((0, r.HD)(e)) return e;
            try {
              return e.toString();
            } catch (e) {}
          }(t[1]);
        if (!i || !s) return e.apply(this, t);
        this[u] = {
          method: i,
          url: s,
          request_headers: {}
        }, "POST" === i && s.match(/sentry_key/) && (this.__sentry_own_request__ = !0);
        let onreadystatechangeHandler = () => {
          let e = this[u];
          if (e && 4 === this.readyState) {
            try {
              e.status_code = this.status;
            } catch (e) {}
            let t = {
              args: [i, s],
              endTimestamp: Date.now(),
              startTimestamp: n,
              xhr: this
            };
            (0, o.rK)("xhr", t);
          }
        };
        return "onreadystatechange" in this && "function" == typeof this.onreadystatechange ? (0, a.hl)(this, "onreadystatechange", function (e) {
          return function (...t) {
            return onreadystatechangeHandler(), e.apply(this, t);
          };
        }) : this.addEventListener("readystatechange", onreadystatechangeHandler), (0, a.hl)(this, "setRequestHeader", function (e) {
          return function (...t) {
            let [n, a] = t,
              i = this[u];
            return i && (0, r.HD)(n) && (0, r.HD)(a) && (i.request_headers[n.toLowerCase()] = a), e.apply(this, t);
          };
        }), e.apply(this, t);
      };
    }), (0, a.hl)(e, "send", function (e) {
      return function (...t) {
        let n = this[u];
        if (!n) return e.apply(this, t);
        void 0 !== t[0] && (n.body = t[0]);
        let r = {
          args: [n.method, n.url],
          startTimestamp: Date.now(),
          xhr: this
        };
        return (0, o.rK)("xhr", r), e.apply(this, t);
      };
    });
  }
});
