                                                                                                            
                                                    
(function (e, t) {
  "use strict";

  function appBootstrap(e) {
    var t, n;
    t = self.__next_s, n = () => {
      e();
    }, t && t.length ? t.reduce((e, t) => {
      let [n, r] = t;
      return e.then(() => new Promise((e, t) => {
        let a = document.createElement("script");
        if (r) for (let e in r) "children" !== e && a.setAttribute(e, r[e]);
        n ? (a.src = n, a.onload = () => e(), a.onerror = t) : r && (a.innerHTML = r.children, setTimeout(e)), document.head.appendChild(a);
      }));
    }, Promise.resolve()).catch(e => {
      console.error(e);
    }).then(() => {
      n();
    }) : n();
  }
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "appBootstrap", {
    enumerable: !0,
    get: function () {
      return appBootstrap;
    }
  }), window.next = {
    version: "13.5.6",
    appDir: !0
  }, ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
    value: !0
  }), Object.assign(t.default, t), e.exports = t.default);
});
