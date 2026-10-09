                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  n.d(t, {
    DM: function () {
      return uuid4;
    },
    Db: function () {
      return addExceptionTypeValue;
    },
    EG: function () {
      return addExceptionMechanism;
    },
    YO: function () {
      return checkOrSetAlreadyCaught;
    },
    jH: function () {
      return getEventDescription;
    },
    lE: function () {
      return arrayify;
    }
  });
  var r = n(57683),
    a = n(30779);
  function uuid4() {
    let e = a.GLOBAL_OBJ,
      t = e.crypto || e.msCrypto,
      getRandomByte = () => 16 * Math.random();
    try {
      if (t && t.randomUUID) return t.randomUUID().replace(/-/g, "");
      t && t.getRandomValues && (getRandomByte = () => {
        let e = new Uint8Array(1);
        return t.getRandomValues(e), e[0];
      });
    } catch (e) {}
    return "10000000100040008000100000000000".replace(/[018]/g, e => (e ^ (15 & getRandomByte()) >> e / 4).toString(16));
  }
  function getFirstException(e) {
    return e.exception && e.exception.values ? e.exception.values[0] : void 0;
  }
  function getEventDescription(e) {
    let {
      message: t,
      event_id: n
    } = e;
    if (t) return t;
    let r = getFirstException(e);
    return r ? r.type && r.value ? `${r.type}: ${r.value}` : r.type || r.value || n || "<unknown>" : n || "<unknown>";
  }
  function addExceptionTypeValue(e, t, n) {
    let r = e.exception = e.exception || {},
      a = r.values = r.values || [],
      i = a[0] = a[0] || {};
    i.value || (i.value = t || ""), i.type || (i.type = n || "Error");
  }
  function addExceptionMechanism(e, t) {
    let n = getFirstException(e);
    if (!n) return;
    let r = n.mechanism;
    if (n.mechanism = {
      type: "generic",
      handled: !0,
      ...r,
      ...t
    }, t && "data" in t) {
      let e = {
        ...(r && r.data),
        ...t.data
      };
      n.mechanism.data = e;
    }
  }
  function checkOrSetAlreadyCaught(e) {
    if (e && e.__sentry_captured__) return !0;
    try {
      (0, r.xp)(e, "__sentry_captured__", !0);
    } catch (e) {}
    return !1;
  }
  function arrayify(e) {
    return Array.isArray(e) ? e : [e];
  }
});
