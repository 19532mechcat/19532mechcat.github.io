                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "useReducerWithReduxDevtools", {
    enumerable: !0,
    get: function () {
      return useReducerWithReduxDevtools;
    }
  });
  let r = n(58036);
  function normalizeRouterState(e) {
    if (e instanceof Map) {
      let t = {};
      for (let [n, r] of e.entries()) {
        if ("function" == typeof r) {
          t[n] = "fn()";
          continue;
        }
        if ("object" == typeof r && null !== r) {
          if (r.$$typeof) {
            t[n] = r.$$typeof.toString();
            continue;
          }
          if (r._bundlerConfig) {
            t[n] = "FlightData";
            continue;
          }
        }
        t[n] = normalizeRouterState(r);
      }
      return t;
    }
    if ("object" == typeof e && null !== e) {
      let t = {};
      for (let n in e) {
        let r = e[n];
        if ("function" == typeof r) {
          t[n] = "fn()";
          continue;
        }
        if ("object" == typeof r && null !== r) {
          if (r.$$typeof) {
            t[n] = r.$$typeof.toString();
            continue;
          }
          if (r.hasOwnProperty("_bundlerConfig")) {
            t[n] = "FlightData";
            continue;
          }
        }
        t[n] = normalizeRouterState(r);
      }
      return t;
    }
    return Array.isArray(e) ? e.map(normalizeRouterState) : e;
  }
  let useReducerWithReduxDevtools = function (e, t) {
    let n = (0, r.useRef)(),
      a = (0, r.useRef)();
    (0, r.useEffect)(() => {
      if (!n.current && !1 !== a.current) {
        if (void 0 === a.current && void 0 === window.__REDUX_DEVTOOLS_EXTENSION__) {
          a.current = !1;
          return;
        }
        return n.current = window.__REDUX_DEVTOOLS_EXTENSION__.connect({
          instanceId: 8e3,
          name: "next-router"
        }), n.current && n.current.init(normalizeRouterState(t)), () => {
          n.current = void 0;
        };
      }
    }, [t]);
    let [i, o] = (0, r.useReducer)((t, r) => {
        let a = e(t, r);
        return n.current && n.current.send(r, normalizeRouterState(a)), a;
      }, t),
      s = (0, r.useCallback)(() => {
        n.current && n.current.send({
          type: "RENDER_SYNC"
        }, normalizeRouterState(i));
      }, [i]);
    return [i, o, s];
  };
  ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
    value: !0
  }), Object.assign(t.default, t), e.exports = t.default);
});
