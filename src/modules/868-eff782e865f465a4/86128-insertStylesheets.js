                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), function (e, t) {
    for (var n in t) Object.defineProperty(e, n, {
      enumerable: !0,
      get: t[n]
    });
  }(t, {
    handleClientScriptLoad: function () {
      return handleClientScriptLoad;
    },
    initScriptLoader: function () {
      return initScriptLoader;
    },
    default: function () {
      return v;
    }
  });
  let r = n(68517),
    a = n(53388),
    i = r._(n(461)),
    o = a._(n(58036)),
    s = n(66203),
    u = n(92325),
    l = n(89600),
    p = new Map(),
    m = new Set(),
    _ = ["onLoad", "onReady", "dangerouslySetInnerHTML", "children", "onError", "strategy", "stylesheets"],
    insertStylesheets = e => {
      if (i.default.preinit) {
        e.forEach(e => {
          i.default.preinit(e, {
            as: "style"
          });
        });
        return;
      }
      {
        let t = document.head;
        e.forEach(e => {
          let n = document.createElement("link");
          n.type = "text/css", n.rel = "stylesheet", n.href = e, t.appendChild(n);
        });
      }
    },
    loadScript = e => {
      let {
          src: t,
          id: n,
          onLoad: r = () => {},
          onReady: a = null,
          dangerouslySetInnerHTML: i,
          children: o = "",
          strategy: s = "afterInteractive",
          onError: l,
          stylesheets: v
        } = e,
        b = n || t;
      if (b && m.has(b)) return;
      if (p.has(t)) {
        m.add(b), p.get(t).then(r, l);
        return;
      }
      let afterLoad = () => {
          a && a(), m.add(b);
        },
        E = document.createElement("script"),
        w = new Promise((e, t) => {
          E.addEventListener("load", function (t) {
            e(), r && r.call(this, t), afterLoad();
          }), E.addEventListener("error", function (e) {
            t(e);
          });
        }).catch(function (e) {
          l && l(e);
        });
      for (let [n, r] of (i ? (E.innerHTML = i.__html || "", afterLoad()) : o ? (E.textContent = "string" == typeof o ? o : Array.isArray(o) ? o.join("") : "", afterLoad()) : t && (E.src = t, p.set(t, w)), Object.entries(e))) {
        if (void 0 === r || _.includes(n)) continue;
        let e = u.DOMAttributeNames[n] || n.toLowerCase();
        E.setAttribute(e, r);
      }
      "worker" === s && E.setAttribute("type", "text/partytown"), E.setAttribute("data-nscript", s), v && insertStylesheets(v), document.body.appendChild(E);
    };
  function handleClientScriptLoad(e) {
    let {
      strategy: t = "afterInteractive"
    } = e;
    "lazyOnload" === t ? window.addEventListener("load", () => {
      (0, l.requestIdleCallback)(() => loadScript(e));
    }) : loadScript(e);
  }
  function initScriptLoader(e) {
    e.forEach(handleClientScriptLoad), function () {
      let e = [...document.querySelectorAll('[data-nscript="beforeInteractive"]'), ...document.querySelectorAll('[data-nscript="beforePageRender"]')];
      e.forEach(e => {
        let t = e.id || e.getAttribute("src");
        m.add(t);
      });
    }();
  }
  function Script(e) {
    let {
        id: t,
        src: n = "",
        onLoad: r = () => {},
        onReady: a = null,
        strategy: u = "afterInteractive",
        onError: p,
        stylesheets: _,
        ...v
      } = e,
      {
        updateScripts: b,
        scripts: E,
        getIsSsr: w,
        appDir: C,
        nonce: j
      } = (0, o.useContext)(s.HeadManagerContext),
      A = (0, o.useRef)(!1);
    (0, o.useEffect)(() => {
      let e = t || n;
      A.current || (a && e && m.has(e) && a(), A.current = !0);
    }, [a, t, n]);
    let D = (0, o.useRef)(!1);
    if ((0, o.useEffect)(() => {
      !D.current && ("afterInteractive" === u ? loadScript(e) : "lazyOnload" === u && ("complete" === document.readyState ? (0, l.requestIdleCallback)(() => loadScript(e)) : window.addEventListener("load", () => {
        (0, l.requestIdleCallback)(() => loadScript(e));
      })), D.current = !0);
    }, [e, u]), ("beforeInteractive" === u || "worker" === u) && (b ? (E[u] = (E[u] || []).concat([{
      id: t,
      src: n,
      onLoad: r,
      onReady: a,
      onError: p,
      ...v
    }]), b(E)) : w && w() ? m.add(t || n) : w && !w() && loadScript(e)), C) {
      if (_ && _.forEach(e => {
        i.default.preinit(e, {
          as: "style"
        });
      }), "beforeInteractive" === u) return n ? (i.default.preload(n, v.integrity ? {
        as: "script",
        integrity: v.integrity
      } : {
        as: "script"
      }), o.default.createElement("script", {
        nonce: j,
        dangerouslySetInnerHTML: {
          __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([n]) + ")"
        }
      })) : (v.dangerouslySetInnerHTML && (v.children = v.dangerouslySetInnerHTML.__html, delete v.dangerouslySetInnerHTML), o.default.createElement("script", {
        nonce: j,
        dangerouslySetInnerHTML: {
          __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([0, {
            ...v
          }]) + ")"
        }
      }));
      "afterInteractive" === u && n && i.default.preload(n, v.integrity ? {
        as: "script",
        integrity: v.integrity
      } : {
        as: "script"
      });
    }
    return null;
  }
  Object.defineProperty(Script, "__nextScript", {
    value: !0
  });
  let v = Script;
  ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
    value: !0
  }), Object.assign(t.default, t), e.exports = t.default);
});
