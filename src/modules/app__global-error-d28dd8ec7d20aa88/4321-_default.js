                                                                                                                        
                                                    
(function (module, exports, webpackRequire) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: !0
  }), function (e, t) {
    for (var n in t) Object.defineProperty(e, n, {
      enumerable: !0,
      get: t[n]
    });
  }(exports, {
    defaultHead: function () {
      return defaultHead;
    },
    default: function () {
      return _default;
    }
  });
  let r = webpackRequire(68517),
    o = webpackRequire(53388),
    l = o._(webpackRequire(58036)),
    a = r._(webpackRequire(22761)),
    i = webpackRequire(95530),
    u = webpackRequire(66203),
    d = webpackRequire(58008);
  function defaultHead(e) {
    void 0 === e && (e = !1);
    let t = [l.default.createElement("meta", {
      charSet: "utf-8"
    })];
    return e || t.push(l.default.createElement("meta", {
      name: "viewport",
      content: "width=device-width"
    })), t;
  }
  function onlyReactElement(e, t) {
    return "string" == typeof t || "number" == typeof t ? e : t.type === l.default.Fragment ? e.concat(l.default.Children.toArray(t.props.children).reduce((e, t) => "string" == typeof t || "number" == typeof t ? e : e.concat(t), [])) : e.concat(t);
  }
  webpackRequire(71059);
  let f = ["name", "httpEquiv", "charSet", "itemProp"];
  function reduceComponents(e, t) {
    let {
      inAmpMode: n
    } = t;
    return e.reduce(onlyReactElement, []).reverse().concat(defaultHead(n).reverse()).filter(function () {
      let e = new Set(),
        t = new Set(),
        n = new Set(),
        r = {};
      return o => {
        let l = !0,
          a = !1;
        if (o.key && "number" != typeof o.key && o.key.indexOf("$") > 0) {
          a = !0;
          let t = o.key.slice(o.key.indexOf("$") + 1);
          e.has(t) ? l = !1 : e.add(t);
        }
        switch (o.type) {
          case "title":
          case "base":
            t.has(o.type) ? l = !1 : t.add(o.type);
            break;
          case "meta":
            for (let e = 0, t = f.length; e < t; e++) {
              let t = f[e];
              if (o.props.hasOwnProperty(t)) {
                if ("charSet" === t) n.has(t) ? l = !1 : n.add(t);else {
                  let e = o.props[t],
                    n = r[t] || new Set();
                  ("name" !== t || !a) && n.has(e) ? l = !1 : (n.add(e), r[t] = n);
                }
              }
            }
        }
        return l;
      };
    }()).reverse().map((e, t) => {
      let r = e.key || t;
      if (!n && "link" === e.type && e.props.href && ["https://fonts.googleapis.com/css", "https://use.typekit.net/"].some(t => e.props.href.startsWith(t))) {
        let t = {
          ...(e.props || {})
        };
        return t["data-href"] = t.href, t.href = void 0, t["data-optimized-fonts"] = !0, l.default.cloneElement(e, t);
      }
      return l.default.cloneElement(e, {
        key: r
      });
    });
  }
  let _default = function (e) {
    let {
        children: t
      } = e,
      n = (0, l.useContext)(i.AmpStateContext),
      r = (0, l.useContext)(u.HeadManagerContext);
    return l.default.createElement(a.default, {
      reduceComponentsToState: reduceComponents,
      headManager: r,
      inAmpMode: (0, d.isInAmpMode)(n)
    }, t);
  };
  ("function" == typeof exports.default || "object" == typeof exports.default && null !== exports.default) && void 0 === exports.default.__esModule && (Object.defineProperty(exports.default, "__esModule", {
    value: !0
  }), Object.assign(exports.default, exports), module.exports = exports.default);
});
