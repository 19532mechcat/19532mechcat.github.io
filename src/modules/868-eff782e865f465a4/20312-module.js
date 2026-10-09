                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  n.d(t, {
    Fv: function () {
      return normalize;
    },
    Qy: function () {
      return function normalizeToSize(e, t = 3, n = 102400) {
        let r = normalize(e, t);
        return ~-encodeURI(JSON.stringify(r)).split(/%..|./).length > n ? normalizeToSize(e, t - 1, n) : r;
      };
    }
  });
  var r = n(1533),
    a = n(57683),
    i = n(71463);
  function normalize(e, t = 100, o = Infinity) {
    try {
      return function visit(e, t, o = Infinity, s = Infinity, u = function () {
        let e = "function" == typeof WeakSet,
          t = e ? new WeakSet() : [];
        return [function (n) {
          if (e) return !!t.has(n) || (t.add(n), !1);
          for (let e = 0; e < t.length; e++) {
            let r = t[e];
            if (r === n) return !0;
          }
          return t.push(n), !1;
        }, function (n) {
          if (e) t.delete(n);else for (let e = 0; e < t.length; e++) if (t[e] === n) {
            t.splice(e, 1);
            break;
          }
        }];
      }()) {
        let [l, p] = u;
        if (null == t || ["number", "boolean", "string"].includes(typeof t) && !(0, r.i2)(t)) return t;
        let m = function (e, t) {
          try {
            if ("domain" === e && t && "object" == typeof t && t._events) return "[Domain]";
            if ("domainEmitter" === e) return "[DomainEmitter]";
            if (void 0 !== n.g && t === n.g) return "[Global]";
            if ("undefined" != typeof window && t === window) return "[Window]";
            if ("undefined" != typeof document && t === document) return "[Document]";
            if ((0, r.y1)(t)) return "[VueViewModel]";
            if ((0, r.Cy)(t)) return "[SyntheticEvent]";
            if ("number" == typeof t && t != t) return "[NaN]";
            if ("function" == typeof t) return `[Function: ${(0, i.$P)(t)}]`;
            if ("symbol" == typeof t) return `[${String(t)}]`;
            if ("bigint" == typeof t) return `[BigInt: ${String(t)}]`;
            let a = function (e) {
              let t = Object.getPrototypeOf(e);
              return t ? t.constructor.name : "null prototype";
            }(t);
            if (/^HTML(\w*)Element$/.test(a)) return `[HTMLElement: ${a}]`;
            return `[object ${a}]`;
          } catch (e) {
            return `**non-serializable** (${e})`;
          }
        }(e, t);
        if (!m.startsWith("[object ")) return m;
        if (t.__sentry_skip_normalization__) return t;
        let _ = "number" == typeof t.__sentry_override_normalization_depth__ ? t.__sentry_override_normalization_depth__ : o;
        if (0 === _) return m.replace("object ", "");
        if (l(t)) return "[Circular ~]";
        if (t && "function" == typeof t.toJSON) try {
          let e = t.toJSON();
          return visit("", e, _ - 1, s, u);
        } catch (e) {}
        let v = Array.isArray(t) ? [] : {},
          b = 0,
          E = (0, a.Sh)(t);
        for (let e in E) {
          if (!Object.prototype.hasOwnProperty.call(E, e)) continue;
          if (b >= s) {
            v[e] = "[MaxProperties ~]";
            break;
          }
          let t = E[e];
          v[e] = visit(e, t, _ - 1, s, u), b++;
        }
        return p(t), v;
      }("", e, t, o);
    } catch (e) {
      return {
        ERROR: `**non-serializable** (${e})`
      };
    }
  }
});
