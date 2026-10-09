                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  let r, a;
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "hydrate", {
    enumerable: !0,
    get: function () {
      return hydrate;
    }
  });
  let i = n(68517),
    o = n(53388);
  n(50411);
  let s = i._(n(5862)),
    u = o._(n(58036)),
    l = n(34909),
    p = n(66203);
  n(61847);
  let m = i._(n(38042)),
    _ = n(60295),
    v = n(70009),
    b = window.console.error;
  window.console.error = function () {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    (0, v.isNextRouterError)(t[0]) || b.apply(window.console, t);
  }, window.addEventListener("error", e => {
    if ((0, v.isNextRouterError)(e.error)) {
      e.preventDefault();
      return;
    }
  });
  let E = document,
    getCacheKey = () => {
      let {
        pathname: e,
        search: t
      } = location;
      return e + t;
    },
    w = new TextEncoder(),
    C = !1,
    j = !1,
    A = null;
  function nextServerDataCallback(e) {
    if (0 === e[0]) r = [];else if (1 === e[0]) {
      if (!r) throw Error("Unexpected server data: missing bootstrap script.");
      a ? a.enqueue(w.encode(e[1])) : r.push(e[1]);
    } else 2 === e[0] && (A = e[1]);
  }
  let DOMContentLoaded = function () {
    a && !j && (a.close(), j = !0, r = void 0), C = !0;
  };
  "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", DOMContentLoaded, !1) : DOMContentLoaded();
  let D = self.__next_f = self.__next_f || [];
  D.forEach(nextServerDataCallback), D.push = nextServerDataCallback;
  let F = new Map();
  function ServerRoot(e) {
    let {
      cacheKey: t
    } = e;
    u.default.useEffect(() => {
      F.delete(t);
    });
    let n = function (e) {
        let t = F.get(e);
        if (t) return t;
        let n = new ReadableStream({
            start(e) {
              r && (r.forEach(t => {
                e.enqueue(w.encode(t));
              }), C && !j && (e.close(), j = !0, r = void 0)), a = e;
            }
          }),
          i = (0, l.createFromReadableStream)(n, {
            callServer: _.callServer
          });
        return F.set(e, i), i;
      }(t),
      i = (0, u.use)(n);
    return i;
  }
  let U = u.default.StrictMode;
  function Root(e) {
    let {
      children: t
    } = e;
    return t;
  }
  function RSCComponent(e) {
    return u.default.createElement(ServerRoot, {
      ...e,
      cacheKey: getCacheKey()
    });
  }
  function hydrate() {
    let e = u.default.createElement(U, null, u.default.createElement(p.HeadManagerContext.Provider, {
        value: {
          appDir: !0
        }
      }, u.default.createElement(Root, null, u.default.createElement(RSCComponent, null)))),
      t = {
        onRecoverableError: m.default
      },
      n = "__next_error__" === document.documentElement.id;
    n ? s.default.createRoot(E, t).render(e) : u.default.startTransition(() => s.default.hydrateRoot(E, e, {
      ...t,
      experimental_formState: A
    }));
  }
  ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
    value: !0
  }), Object.assign(t.default, t), e.exports = t.default);
});
