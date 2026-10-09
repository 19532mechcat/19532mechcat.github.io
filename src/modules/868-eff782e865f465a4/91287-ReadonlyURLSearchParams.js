                                                                                                            
                                                    
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
    ReadonlyURLSearchParams: function () {
      return ReadonlyURLSearchParams;
    },
    useSearchParams: function () {
      return useSearchParams;
    },
    usePathname: function () {
      return usePathname;
    },
    ServerInsertedHTMLContext: function () {
      return u.ServerInsertedHTMLContext;
    },
    useServerInsertedHTML: function () {
      return u.useServerInsertedHTML;
    },
    useRouter: function () {
      return useRouter;
    },
    useParams: function () {
      return useParams;
    },
    useSelectedLayoutSegments: function () {
      return useSelectedLayoutSegments;
    },
    useSelectedLayoutSegment: function () {
      return useSelectedLayoutSegment;
    },
    redirect: function () {
      return l.redirect;
    },
    permanentRedirect: function () {
      return l.permanentRedirect;
    },
    RedirectType: function () {
      return l.RedirectType;
    },
    notFound: function () {
      return p.notFound;
    }
  });
  let r = n(58036),
    a = n(61847),
    i = n(43081),
    o = n(68809),
    s = n(37294),
    u = n(83814),
    l = n(5017),
    p = n(27603),
    m = Symbol("internal for urlsearchparams readonly");
  function readonlyURLSearchParamsError() {
    return Error("ReadonlyURLSearchParams cannot be modified");
  }
  let ReadonlyURLSearchParams = class ReadonlyURLSearchParams {
    [Symbol.iterator]() {
      return this[m][Symbol.iterator]();
    }
    append() {
      throw readonlyURLSearchParamsError();
    }
    delete() {
      throw readonlyURLSearchParamsError();
    }
    set() {
      throw readonlyURLSearchParamsError();
    }
    sort() {
      throw readonlyURLSearchParamsError();
    }
    constructor(e) {
      this[m] = e, this.entries = e.entries.bind(e), this.forEach = e.forEach.bind(e), this.get = e.get.bind(e), this.getAll = e.getAll.bind(e), this.has = e.has.bind(e), this.keys = e.keys.bind(e), this.values = e.values.bind(e), this.toString = e.toString.bind(e), this.size = e.size;
    }
  };
  function useSearchParams() {
    (0, o.clientHookInServerComponentError)("useSearchParams");
    let e = (0, r.useContext)(i.SearchParamsContext),
      t = (0, r.useMemo)(() => e ? new ReadonlyURLSearchParams(e) : null, [e]);
    return t;
  }
  function usePathname() {
    return (0, o.clientHookInServerComponentError)("usePathname"), (0, r.useContext)(i.PathnameContext);
  }
  function useRouter() {
    (0, o.clientHookInServerComponentError)("useRouter");
    let e = (0, r.useContext)(a.AppRouterContext);
    if (null === e) throw Error("invariant expected app router to be mounted");
    return e;
  }
  function useParams() {
    (0, o.clientHookInServerComponentError)("useParams");
    let e = (0, r.useContext)(a.GlobalLayoutRouterContext),
      t = (0, r.useContext)(i.PathParamsContext);
    return (0, r.useMemo)(() => (null == e ? void 0 : e.tree) ? function getSelectedParams(e, t) {
      void 0 === t && (t = {});
      let n = e[1];
      for (let e of Object.values(n)) {
        let n = e[0],
          r = Array.isArray(n),
          a = r ? n[1] : n;
        if (!a || a.startsWith("__PAGE__")) continue;
        let i = r && ("c" === n[2] || "oc" === n[2]);
        i ? t[n[0]] = n[1].split("/") : r && (t[n[0]] = n[1]), t = getSelectedParams(e, t);
      }
      return t;
    }(e.tree) : t, [null == e ? void 0 : e.tree, t]);
  }
  function useSelectedLayoutSegments(e) {
    void 0 === e && (e = "children"), (0, o.clientHookInServerComponentError)("useSelectedLayoutSegments");
    let {
      tree: t
    } = (0, r.useContext)(a.LayoutRouterContext);
    return function getSelectedLayoutSegmentPath(e, t, n, r) {
      let a;
      if (void 0 === n && (n = !0), void 0 === r && (r = []), n) a = e[1][t];else {
        var i;
        let t = e[1];
        a = null != (i = t.children) ? i : Object.values(t)[0];
      }
      if (!a) return r;
      let o = a[0],
        u = (0, s.getSegmentValue)(o);
      return !u || u.startsWith("__PAGE__") ? r : (r.push(u), getSelectedLayoutSegmentPath(a, t, !1, r));
    }(t, e);
  }
  function useSelectedLayoutSegment(e) {
    void 0 === e && (e = "children"), (0, o.clientHookInServerComponentError)("useSelectedLayoutSegment");
    let t = useSelectedLayoutSegments(e);
    return 0 === t.length ? null : t[0];
  }
  ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
    value: !0
  }), Object.assign(t.default, t), e.exports = t.default);
});
