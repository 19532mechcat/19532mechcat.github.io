                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  n.d(t, {
    RA: function () {
      return dsnToString;
    },
    U4: function () {
      return dsnFromString;
    },
    vK: function () {
      return makeDsn;
    }
  });
  var r = n(47406),
    a = n(81412);
  let i = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
  function dsnToString(e, t = !1) {
    let {
      host: n,
      path: r,
      pass: a,
      port: i,
      projectId: o,
      protocol: s,
      publicKey: u
    } = e;
    return `${s}://${u}${t && a ? `:${a}` : ""}@${n}${i ? `:${i}` : ""}/${r ? `${r}/` : r}${o}`;
  }
  function dsnFromString(e) {
    let t = i.exec(e);
    if (!t) {
      (0, a.Cf)(() => {
        console.error(`Invalid Sentry Dsn: ${e}`);
      });
      return;
    }
    let [n, r, o = "", s, u = "", l] = t.slice(1),
      p = "",
      m = l,
      _ = m.split("/");
    if (_.length > 1 && (p = _.slice(0, -1).join("/"), m = _.pop()), m) {
      let e = m.match(/^\d+/);
      e && (m = e[0]);
    }
    return dsnFromComponents({
      host: s,
      pass: o,
      path: p,
      projectId: m,
      port: u,
      protocol: n,
      publicKey: r
    });
  }
  function dsnFromComponents(e) {
    return {
      protocol: e.protocol,
      publicKey: e.publicKey || "",
      pass: e.pass || "",
      host: e.host,
      port: e.port || "",
      path: e.path || "",
      projectId: e.projectId
    };
  }
  function makeDsn(e) {
    let t = "string" == typeof e ? dsnFromString(e) : dsnFromComponents(e);
    if (t && function (e) {
      if (!r.X) return !0;
      let {
          port: t,
          projectId: n,
          protocol: i
        } = e,
        o = ["protocol", "publicKey", "host", "projectId"].find(t => !e[t] && (a.kg.error(`Invalid Sentry Dsn: ${t} missing`), !0));
      return !o && (n.match(/^\d+$/) ? "http" === i || "https" === i ? !(t && isNaN(parseInt(t, 10))) || (a.kg.error(`Invalid Sentry Dsn: Invalid port ${t}`), !1) : (a.kg.error(`Invalid Sentry Dsn: Invalid protocol ${i}`), !1) : (a.kg.error(`Invalid Sentry Dsn: Invalid projectId ${n}`), !1));
    }(t)) return t;
  }
});
