                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "NotFoundBoundary", {
    enumerable: !0,
    get: function () {
      return NotFoundBoundary;
    }
  });
  let r = n(68517),
    a = r._(n(58036)),
    i = n(91287);
  let NotFoundErrorBoundary = class NotFoundErrorBoundary extends a.default.Component {
    static getDerivedStateFromError(e) {
      if ((null == e ? void 0 : e.digest) === "NEXT_NOT_FOUND") return {
        notFoundTriggered: !0
      };
      throw e;
    }
    static getDerivedStateFromProps(e, t) {
      return e.pathname !== t.previousPathname && t.notFoundTriggered ? {
        notFoundTriggered: !1,
        previousPathname: e.pathname
      } : {
        notFoundTriggered: t.notFoundTriggered,
        previousPathname: e.pathname
      };
    }
    render() {
      return this.state.notFoundTriggered ? a.default.createElement(a.default.Fragment, null, a.default.createElement("meta", {
        name: "robots",
        content: "noindex"
      }), !1, this.props.notFoundStyles, this.props.notFound) : this.props.children;
    }
    constructor(e) {
      super(e), this.state = {
        notFoundTriggered: !!e.asNotFound,
        previousPathname: e.pathname
      };
    }
  };
  function NotFoundBoundary(e) {
    let {
        notFound: t,
        notFoundStyles: n,
        asNotFound: r,
        children: o
      } = e,
      s = (0, i.usePathname)();
    return t ? a.default.createElement(NotFoundErrorBoundary, {
      pathname: s,
      notFound: t,
      notFoundStyles: n,
      asNotFound: r
    }, o) : a.default.createElement(a.default.Fragment, null, o);
  }
  ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
    value: !0
  }), Object.assign(t.default, t), e.exports = t.default);
});
