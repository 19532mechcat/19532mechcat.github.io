                                                                                                           
                                                    
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
    ErrorBoundaryHandler: function () {
      return ErrorBoundaryHandler;
    },
    GlobalError: function () {
      return GlobalError;
    },
    default: function () {
      return s;
    },
    ErrorBoundary: function () {
      return ErrorBoundary;
    }
  });
  let r = n(68517),
    a = r._(n(58036)),
    i = n(91287),
    o = {
      error: {
        fontFamily: 'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
        height: "100vh",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      },
      text: {
        fontSize: "14px",
        fontWeight: 400,
        lineHeight: "28px",
        margin: "0 8px"
      }
    };
  let ErrorBoundaryHandler = class ErrorBoundaryHandler extends a.default.Component {
    static getDerivedStateFromError(e) {
      return {
        error: e
      };
    }
    static getDerivedStateFromProps(e, t) {
      return e.pathname !== t.previousPathname && t.error ? {
        error: null,
        previousPathname: e.pathname
      } : {
        error: t.error,
        previousPathname: e.pathname
      };
    }
    render() {
      return this.state.error ? a.default.createElement(a.default.Fragment, null, this.props.errorStyles, a.default.createElement(this.props.errorComponent, {
        error: this.state.error,
        reset: this.reset
      })) : this.props.children;
    }
    constructor(e) {
      super(e), this.reset = () => {
        this.setState({
          error: null
        });
      }, this.state = {
        error: null,
        previousPathname: this.props.pathname
      };
    }
  };
  function GlobalError(e) {
    let {
        error: t
      } = e,
      n = null == t ? void 0 : t.digest;
    return a.default.createElement("html", {
      id: "__next_error__"
    }, a.default.createElement("head", null), a.default.createElement("body", null, a.default.createElement("div", {
      style: o.error
    }, a.default.createElement("div", null, a.default.createElement("h2", {
      style: o.text
    }, "Application error: a " + (n ? "server" : "client") + "-side exception has occurred (see the " + (n ? "server logs" : "browser console") + " for more information)."), n ? a.default.createElement("p", {
      style: o.text
    }, "Digest: " + n) : null))));
  }
  let s = GlobalError;
  function ErrorBoundary(e) {
    let {
        errorComponent: t,
        errorStyles: n,
        children: r
      } = e,
      o = (0, i.usePathname)();
    return t ? a.default.createElement(ErrorBoundaryHandler, {
      pathname: o,
      errorComponent: t,
      errorStyles: n
    }, r) : a.default.createElement(a.default.Fragment, null, r);
  }
  ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
    value: !0
  }), Object.assign(t.default, t), e.exports = t.default);
});
