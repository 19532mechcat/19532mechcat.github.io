                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  n.d(t, {
    $Q: function () {
      return markFunctionWrapped;
    },
    HK: function () {
      return getOriginalFunction;
    },
    Jr: function () {
      return dropUndefinedKeys;
    },
    Sh: function () {
      return convertToPlainObject;
    },
    _j: function () {
      return urlEncode;
    },
    hl: function () {
      return fill;
    },
    xp: function () {
      return addNonEnumerableProperty;
    },
    zf: function () {
      return extractExceptionKeysForMessage;
    }
  });
  var r = n(27477),
    a = n(47406),
    i = n(1533),
    o = n(81412),
    s = n(1840);
  function fill(e, t, n) {
    if (!(t in e)) return;
    let r = e[t],
      a = n(r);
    "function" == typeof a && markFunctionWrapped(a, r), e[t] = a;
  }
  function addNonEnumerableProperty(e, t, n) {
    try {
      Object.defineProperty(e, t, {
        value: n,
        writable: !0,
        configurable: !0
      });
    } catch (n) {
      a.X && o.kg.log(`Failed to add non-enumerable property "${t}" to object`, e);
    }
  }
  function markFunctionWrapped(e, t) {
    try {
      let n = t.prototype || {};
      e.prototype = t.prototype = n, addNonEnumerableProperty(e, "__sentry_original__", t);
    } catch (e) {}
  }
  function getOriginalFunction(e) {
    return e.__sentry_original__;
  }
  function urlEncode(e) {
    return Object.keys(e).map(t => `${encodeURIComponent(t)}=${encodeURIComponent(e[t])}`).join("&");
  }
  function convertToPlainObject(e) {
    if ((0, i.VZ)(e)) return {
      message: e.message,
      name: e.name,
      stack: e.stack,
      ...getOwnProperties(e)
    };
    if (!(0, i.cO)(e)) return e;
    {
      let t = {
        type: e.type,
        target: serializeEventTarget(e.target),
        currentTarget: serializeEventTarget(e.currentTarget),
        ...getOwnProperties(e)
      };
      return "undefined" != typeof CustomEvent && (0, i.V9)(e, CustomEvent) && (t.detail = e.detail), t;
    }
  }
  function serializeEventTarget(e) {
    try {
      return (0, i.kK)(e) ? (0, r.Rt)(e) : Object.prototype.toString.call(e);
    } catch (e) {
      return "<unknown>";
    }
  }
  function getOwnProperties(e) {
    if ("object" != typeof e || null === e) return {};
    {
      let t = {};
      for (let n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return t;
    }
  }
  function extractExceptionKeysForMessage(e, t = 40) {
    let n = Object.keys(convertToPlainObject(e));
    if (n.sort(), !n.length) return "[object has no keys]";
    if (n[0].length >= t) return (0, s.$G)(n[0], t);
    for (let e = n.length; e > 0; e--) {
      let r = n.slice(0, e).join(", ");
      if (!(r.length > t)) {
        if (e === n.length) return r;
        return (0, s.$G)(r, t);
      }
    }
    return "";
  }
  function dropUndefinedKeys(e) {
    let t = new Map();
    return function _dropUndefinedKeys(e, t) {
      if (function (e) {
        if (!(0, i.PO)(e)) return !1;
        try {
          let t = Object.getPrototypeOf(e).constructor.name;
          return !t || "Object" === t;
        } catch (e) {
          return !0;
        }
      }(e)) {
        let n = t.get(e);
        if (void 0 !== n) return n;
        let r = {};
        for (let n of (t.set(e, r), Object.keys(e))) void 0 !== e[n] && (r[n] = _dropUndefinedKeys(e[n], t));
        return r;
      }
      if (Array.isArray(e)) {
        let n = t.get(e);
        if (void 0 !== n) return n;
        let r = [];
        return t.set(e, r), e.forEach(e => {
          r.push(_dropUndefinedKeys(e, t));
        }), r;
      }
      return e;
    }(e, t);
  }
});
