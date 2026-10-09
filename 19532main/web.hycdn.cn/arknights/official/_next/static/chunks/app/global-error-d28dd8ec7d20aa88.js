(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[470],{90464:
(function (module, exports, webpackRequire) {
  Promise.resolve().then(webpackRequire.bind(webpackRequire, 35254));
})
,63681:
(function (module, exports, webpackRequire) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: !0
  }), Object.defineProperty(exports, "default", {
    enumerable: !0,
    get: function () {
      return Error;
    }
  });
  let r = webpackRequire(68517),
    o = r._(webpackRequire(58036)),
    l = r._(webpackRequire(4321)),
    a = {
      400: "Bad Request",
      404: "This page could not be found",
      405: "Method Not Allowed",
      500: "Internal Server Error"
    };
  function _getInitialProps(e) {
    let {
        res: t,
        err: n
      } = e,
      r = t && t.statusCode ? t.statusCode : n ? n.statusCode : 404;
    return {
      statusCode: r
    };
  }
  let i = {
    error: {
      fontFamily: 'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
      height: "100vh",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    },
    desc: {
      lineHeight: "48px"
    },
    h1: {
      display: "inline-block",
      margin: "0 20px 0 0",
      paddingRight: 23,
      fontSize: 24,
      fontWeight: 500,
      verticalAlign: "top"
    },
    h2: {
      fontSize: 14,
      fontWeight: 400,
      lineHeight: "28px"
    },
    wrap: {
      display: "inline-block"
    }
  };
  let Error = class Error extends o.default.Component {
    render() {
      let {
          statusCode: e,
          withDarkMode: t = !0
        } = this.props,
        n = this.props.title || a[e] || "An unexpected error has occurred";
      return o.default.createElement("div", {
        style: i.error
      }, o.default.createElement(l.default, null, o.default.createElement("title", null, e ? e + ": " + n : "Application error: a client-side exception has occurred")), o.default.createElement("div", {
        style: i.desc
      }, o.default.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: "body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}" + (t ? "@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}" : "")
        }
      }), e ? o.default.createElement("h1", {
        className: "next-error-h1",
        style: i.h1
      }, e) : null, o.default.createElement("div", {
        style: i.wrap
      }, o.default.createElement("h2", {
        style: i.h2
      }, this.props.title || e ? n : o.default.createElement(o.default.Fragment, null, "Application error: a client-side exception has occurred (see the browser console for more information)"), "."))));
    }
  };
  Error.displayName = "ErrorPage", Error.getInitialProps = _getInitialProps, Error.origGetInitialProps = _getInitialProps, ("function" == typeof exports.default || "object" == typeof exports.default && null !== exports.default) && void 0 === exports.default.__esModule && (Object.defineProperty(exports.default, "__esModule", {
    value: !0
  }), Object.assign(exports.default, exports), module.exports = exports.default);
})
,95530:
(function (module, exports, webpackRequire) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: !0
  }), Object.defineProperty(exports, "AmpStateContext", {
    enumerable: !0,
    get: function () {
      return l;
    }
  });
  let r = webpackRequire(68517),
    o = r._(webpackRequire(58036)),
    l = o.default.createContext({});
})
,58008:
(function (module, exports) {
  "use strict";

  function isInAmpMode(e) {
    let {
      ampFirst: t = !1,
      hybrid: n = !1,
      hasQuery: r = !1
    } = void 0 === e ? {} : e;
    return t || n && r;
  }
  Object.defineProperty(exports, "__esModule", {
    value: !0
  }), Object.defineProperty(exports, "isInAmpMode", {
    enumerable: !0,
    get: function () {
      return isInAmpMode;
    }
  });
})
,4321:
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
})
,22761:
(function (module, exports, webpackRequire) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: !0
  }), Object.defineProperty(exports, "default", {
    enumerable: !0,
    get: function () {
      return SideEffect;
    }
  });
  let React = webpackRequire(58036),
    o = React.useLayoutEffect,
    l = React.useEffect;
  function SideEffect(e) {
    let {
      headManager: t,
      reduceComponentsToState: n
    } = e;
    function emitChange() {
      if (t && t.mountedInstances) {
        let o = React.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
        t.updateHead(n(o, e));
      }
    }
    return o(() => {
      var n;
      return null == t || null == (n = t.mountedInstances) || n.add(e.children), () => {
        var n;
        null == t || null == (n = t.mountedInstances) || n.delete(e.children);
      };
    }), o(() => (t && (t._pendingUpdate = emitChange), () => {
      t && (t._pendingUpdate = emitChange);
    })), l(() => (t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null), () => {
      t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null);
    })), null;
  }
})
,71059:
(function (module, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: !0
  }), Object.defineProperty(exports, "warnOnce", {
    enumerable: !0,
    get: function () {
      return warnOnce;
    }
  });
  let warnOnce = e => {};
})
,35254:
(function (module, exports, webpackRequire) {
  "use strict";

  webpackRequire.r(exports), webpackRequire.d(exports, {
    default: function () {
      return GlobalError;
    }
  });
  var jsxRuntime = webpackRequire(84548),
    React = webpackRequire(58036),
    l = webpackRequire(92917),
    a = webpackRequire(2358),
    i = webpackRequire.n(a);
  function GlobalError(e) {
    let {
      error: t
    } = e;
    return (0, React.useEffect)(() => {
      l.Tb(t);
    }, [t]), (0, jsxRuntime.jsx)("html", {
      children: (0, jsxRuntime.jsx)("body", {
        children: (0, jsxRuntime.jsx)(i(), {
          statusCode: void 0
        })
      })
    });
  }
})
,38660:
(function (module, exports, webpackRequire) {
  "use strict";

     
                  
                                       
   
                                                      
   
                                                                   
                                                           
    
  var React = webpackRequire(58036),
    o = Symbol.for("react.element"),
    l = Symbol.for("react.fragment"),
    a = Object.prototype.hasOwnProperty,
    i = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    u = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    };
  function q(e, t, n) {
    var r,
      l = {},
      d = null,
      f = null;
    for (r in void 0 !== n && (d = "" + n), void 0 !== t.key && (d = "" + t.key), void 0 !== t.ref && (f = t.ref), t) a.call(t, r) && !u.hasOwnProperty(r) && (l[r] = t[r]);
    if (e && e.defaultProps) for (r in t = e.defaultProps) void 0 === l[r] && (l[r] = t[r]);
    return {
      $$typeof: o,
      type: e,
      key: d,
      ref: f,
      props: l,
      _owner: i.current
    };
  }
  exports.Fragment = l, exports.jsx = q, exports.jsxs = q;
})
,84548:
(function (module, exports, webpackRequire) {
  "use strict";

  module.exports = webpackRequire(38660);
})
,2358:
(function (module, exports, webpackRequire) {
  module.exports = webpackRequire(63681);
})
},function(e){e.O(0,[571,126,868,744],function(){return e(e.s=90464)}),_N_E=e.O()}]);
                                                         