                                                                                                           
                                                    
(function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "AppRouterAnnouncer", {
    enumerable: !0,
    get: function () {
      return AppRouterAnnouncer;
    }
  });
  let r = n(58036),
    a = n(461),
    i = "next-route-announcer";
  function AppRouterAnnouncer(e) {
    let {
        tree: t
      } = e,
      [n, o] = (0, r.useState)(null);
    (0, r.useEffect)(() => {
      let e = function () {
        var e;
        let t = document.getElementsByName(i)[0];
        if (null == t ? void 0 : null == (e = t.shadowRoot) ? void 0 : e.childNodes[0]) return t.shadowRoot.childNodes[0];
        {
          let e = document.createElement(i);
          e.style.cssText = "position:absolute";
          let t = document.createElement("div");
          t.ariaLive = "assertive", t.id = "__next-route-announcer__", t.role = "alert", t.style.cssText = "position:absolute;border:0;height:1px;margin:-1px;padding:0;width:1px;clip:rect(0 0 0 0);overflow:hidden;white-space:nowrap;word-wrap:normal";
          let n = e.attachShadow({
            mode: "open"
          });
          return n.appendChild(t), document.body.appendChild(e), t;
        }
      }();
      return o(e), () => {
        let e = document.getElementsByTagName(i)[0];
        (null == e ? void 0 : e.isConnected) && document.body.removeChild(e);
      };
    }, []);
    let [s, u] = (0, r.useState)(""),
      l = (0, r.useRef)();
    return (0, r.useEffect)(() => {
      let e = "";
      if (document.title) e = document.title;else {
        let t = document.querySelector("h1");
        t && (e = t.innerText || t.textContent || "");
      }
      void 0 !== l.current && l.current !== e && u(e), l.current = e;
    }, [t]), n ? (0, a.createPortal)(s, n) : null;
  }
  ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
    value: !0
  }), Object.assign(t.default, t), e.exports = t.default);
});
