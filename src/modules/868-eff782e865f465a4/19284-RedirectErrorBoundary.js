                                                                                                            
                                                    
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
    RedirectErrorBoundary: function () {
      return RedirectErrorBoundary;
    },
    RedirectBoundary: function () {
      return RedirectBoundary;
    }
  });
  let r = n(53388),
    a = r._(n(58036)),
    i = n(91287),
    o = n(5017);
  function HandleRedirect(e) {
    let {
        redirect: t,
        reset: n,
        redirectType: r
      } = e,
      s = (0, i.useRouter)();
    return (0, a.useEffect)(() => {
      a.default.startTransition(() => {
        r === o.RedirectType.push ? s.push(t, {}) : s.replace(t, {}), n();
      });
    }, [t, r, n, s]), null;
  }
  let RedirectErrorBoundary = class RedirectErrorBoundary extends a.default.Component {
    static getDerivedStateFromError(e) {
      if ((0, o.isRedirectError)(e)) {
        let t = (0, o.getURLFromRedirectError)(e),
          n = (0, o.getRedirectTypeFromError)(e);
        return {
          redirect: t,
          redirectType: n
        };
      }
      throw e;
    }
    render() {
      let {
        redirect: e,
        redirectType: t
      } = this.state;
      return null !== e && null !== t ? a.default.createElement(HandleRedirect, {
        redirect: e,
        redirectType: t,
        reset: () => this.setState({
          redirect: null
        })
      }) : this.props.children;
    }
    constructor(e) {
      super(e), this.state = {
        redirect: null,
        redirectType: null
      };
    }
  };
  function RedirectBoundary(e) {
    let {
        children: t
      } = e,
      n = (0, i.useRouter)();
    return a.default.createElement(RedirectErrorBoundary, {
      router: n
    }, t);
  }
  ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
    value: !0
  }), Object.assign(t.default, t), e.exports = t.default);
});
