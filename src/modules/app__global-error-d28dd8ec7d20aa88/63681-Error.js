                                                                                                                         
                                                    
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
});
