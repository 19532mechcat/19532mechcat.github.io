                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  n.d(t, {
    RN: function () {
      return convertIntegrationFnToClass;
    },
    _I: function () {
      return defineIntegration;
    },
    m7: function () {
      return setupIntegration;
    },
    m8: function () {
      return getIntegrationsToSetup;
    },
    q4: function () {
      return setupIntegrations;
    },
    uf: function () {
      return afterSetupIntegrations;
    }
  });
  var r = n(44040),
    a = n(81412),
    i = n(36756),
    o = n(88100),
    s = n(15496);
  let u = [];
  function getIntegrationsToSetup(e) {
    let t;
    let n = e.defaultIntegrations || [],
      a = e.integrations;
    n.forEach(e => {
      e.isDefaultInstance = !0;
    }), t = Array.isArray(a) ? [...n, ...a] : "function" == typeof a ? (0, r.lE)(a(n)) : n;
    let i = function (e) {
        let t = {};
        return e.forEach(e => {
          let {
              name: n
            } = e,
            r = t[n];
          r && !r.isDefaultInstance && e.isDefaultInstance || (t[n] = e);
        }), Object.keys(t).map(e => t[e]);
      }(t),
      o = function (e, t) {
        for (let n = 0; n < e.length; n++) if (!0 === t(e[n])) return n;
        return -1;
      }(i, e => "Debug" === e.name);
    if (-1 !== o) {
      let [e] = i.splice(o, 1);
      i.push(e);
    }
    return i;
  }
  function setupIntegrations(e, t) {
    let n = {};
    return t.forEach(t => {
      t && setupIntegration(e, t, n);
    }), n;
  }
  function afterSetupIntegrations(e, t) {
    for (let n of t) n && n.afterAllSetup && n.afterAllSetup(e);
  }
  function setupIntegration(e, t, n) {
    if (n[t.name]) {
      i.X && a.kg.log(`Integration skipped because it was already installed: ${t.name}`);
      return;
    }
    if (n[t.name] = t, -1 === u.indexOf(t.name) && (t.setupOnce(o.cc, s.Gd), u.push(t.name)), t.setup && "function" == typeof t.setup && t.setup(e), e.on && "function" == typeof t.preprocessEvent) {
      let n = t.preprocessEvent.bind(t);
      e.on("preprocessEvent", (t, r) => n(t, r, e));
    }
    if (e.addEventProcessor && "function" == typeof t.processEvent) {
      let n = t.processEvent.bind(t),
        r = Object.assign((t, r) => n(t, r, e), {
          id: t.name
        });
      e.addEventProcessor(r);
    }
    i.X && a.kg.log(`Integration installed: ${t.name}`);
  }
  function convertIntegrationFnToClass(e, t) {
    return Object.assign(function (...e) {
      return t(...e);
    }, {
      id: e
    });
  }
  function defineIntegration(e) {
    return e;
  }
});
