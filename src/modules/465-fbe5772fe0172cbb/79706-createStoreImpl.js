                                                                                                            
                                                    
(function (n, i, o) {
  o.d(i, {
    Ue: function () {
      return create;
    }
  });
  let createStoreImpl = n => {
      let i;
      let o = new Set(),
        setState = (n, u) => {
          let s = "function" == typeof n ? n(i) : n;
          if (!Object.is(s, i)) {
            let n = i;
            i = (null != u ? u : "object" != typeof s || null === s) ? s : Object.assign({}, i, s), o.forEach(o => o(i, n));
          }
        },
        getState = () => i,
        u = {
          setState,
          getState,
          getInitialState: () => s,
          subscribe: n => (o.add(n), () => o.delete(n)),
          destroy: () => {
            console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."), o.clear();
          }
        },
        s = i = n(setState, getState, u);
      return u;
    },
    createStore = n => n ? createStoreImpl(n) : createStoreImpl;
  var u = o(58036),
    s = o(52635);
  let {
      useDebugValue: c
    } = u,
    {
      useSyncExternalStoreWithSelector: l
    } = s,
    f = !1,
    identity = n => n,
    createImpl = n => {
      "function" != typeof n && console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");
      let i = "function" == typeof n ? createStore(n) : n,
        useBoundStore = (n, o) => function (n, i = identity, o) {
          o && !f && (console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"), f = !0);
          let u = l(n.subscribe, n.getState, n.getServerState || n.getInitialState, i, o);
          return c(u), u;
        }(i, n, o);
      return Object.assign(useBoundStore, i), useBoundStore;
    },
    create = n => n ? createImpl(n) : createImpl;
});
