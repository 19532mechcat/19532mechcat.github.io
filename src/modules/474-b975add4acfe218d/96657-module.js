                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "useIntersection", {
    enumerable: !0,
    get: function () {
      return useIntersection;
    }
  });
  let o = n(58036),
    l = n(89600),
    u = "function" == typeof IntersectionObserver,
    f = new Map(),
    a = [];
  function useIntersection(e) {
    let {
        rootRef: t,
        rootMargin: n,
        disabled: i
      } = e,
      c = i || !u,
      [s, d] = (0, o.useState)(!1),
      p = (0, o.useRef)(null),
      y = (0, o.useCallback)(e => {
        p.current = e;
      }, []);
    (0, o.useEffect)(() => {
      if (u) {
        if (c || s) return;
        let e = p.current;
        if (e && e.tagName) {
          let o = function (e, t, n) {
            let {
              id: o,
              observer: l,
              elements: u
            } = function (e) {
              let t;
              let n = {
                  root: e.root || null,
                  margin: e.rootMargin || ""
                },
                o = a.find(e => e.root === n.root && e.margin === n.margin);
              if (o && (t = f.get(o))) return t;
              let l = new Map(),
                u = new IntersectionObserver(e => {
                  e.forEach(e => {
                    let t = l.get(e.target),
                      n = e.isIntersecting || e.intersectionRatio > 0;
                    t && n && t(n);
                  });
                }, e);
              return t = {
                id: n,
                observer: u,
                elements: l
              }, a.push(n), f.set(n, t), t;
            }(n);
            return u.set(e, t), l.observe(e), function () {
              if (u.delete(e), l.unobserve(e), 0 === u.size) {
                l.disconnect(), f.delete(o);
                let e = a.findIndex(e => e.root === o.root && e.margin === o.margin);
                e > -1 && a.splice(e, 1);
              }
            };
          }(e, e => e && d(e), {
            root: null == t ? void 0 : t.current,
            rootMargin: n
          });
          return o;
        }
      } else if (!s) {
        let e = (0, l.requestIdleCallback)(() => d(!0));
        return () => (0, l.cancelIdleCallback)(e);
      }
    }, [c, n, t, s, p.current]);
    let v = (0, o.useCallback)(() => {
      d(!1);
    }, []);
    return [y, s, v];
  }
  ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
    value: !0
  }), Object.assign(t.default, t), e.exports = t.default);
});
