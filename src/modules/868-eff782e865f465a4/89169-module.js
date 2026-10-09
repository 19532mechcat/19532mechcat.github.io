                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "serverActionReducer", {
    enumerable: !0,
    get: function () {
      return serverActionReducer;
    }
  });
  let r = n(60295),
    a = n(50855),
    i = n(90477),
    o = n(70267),
    s = n(75558),
    u = n(76237),
    l = n(69792),
    p = n(23660),
    m = n(48636),
    _ = n(61847),
    v = n(18968),
    b = n(48208),
    {
      createFromFetch: E,
      encodeReply: w
    } = n(34909);
  async function fetchServerAction(e, t) {
    let n,
      {
        actionId: i,
        actionArgs: o
      } = t,
      u = await w(o),
      l = await fetch("", {
        method: "POST",
        headers: {
          Accept: a.RSC_CONTENT_TYPE_HEADER,
          [a.ACTION]: i,
          [a.NEXT_ROUTER_STATE_TREE]: encodeURIComponent(JSON.stringify(e.tree)),
          ...(e.nextUrl ? {
            [a.NEXT_URL]: e.nextUrl
          } : {})
        },
        body: u
      }),
      p = l.headers.get("x-action-redirect");
    try {
      let e = JSON.parse(l.headers.get("x-action-revalidated") || "[[],0,0]");
      n = {
        paths: e[0] || [],
        tag: !!e[1],
        cookie: e[2]
      };
    } catch (e) {
      n = {
        paths: [],
        tag: !1,
        cookie: !1
      };
    }
    let m = p ? new URL((0, s.addBasePath)(p), new URL(e.canonicalUrl, window.location.href)) : void 0;
    if (l.headers.get("content-type") === a.RSC_CONTENT_TYPE_HEADER) {
      let e = await E(Promise.resolve(l), {
        callServer: r.callServer
      });
      if (p) {
        let [, t] = null != e ? e : [];
        return {
          actionFlightData: t,
          redirectLocation: m,
          revalidatedParts: n
        };
      }
      let [t, [, a]] = null != e ? e : [];
      return {
        actionResult: t,
        actionFlightData: a,
        redirectLocation: m,
        revalidatedParts: n
      };
    }
    return {
      redirectLocation: m,
      revalidatedParts: n
    };
  }
  function serverActionReducer(e, t) {
    let {
        mutable: n,
        cache: r,
        resolve: a,
        reject: s
      } = t,
      E = e.canonicalUrl,
      w = e.tree,
      C = JSON.stringify(n.previousTree) === JSON.stringify(w);
    if (C) return (0, v.handleMutable)(e, n);
    if (n.inFlightServerAction) {
      if ("fulfilled" !== n.inFlightServerAction.status && n.globalMutable.pendingNavigatePath && n.globalMutable.pendingNavigatePath !== E) return n.inFlightServerAction.then(() => {
        n.actionResultResolved || (n.inFlightServerAction = null, n.globalMutable.pendingNavigatePath = void 0, n.globalMutable.refresh(), n.actionResultResolved = !0);
      }, () => {}), e;
    } else n.inFlightServerAction = (0, i.createRecordFromThenable)(fetchServerAction(e, t));
    try {
      let {
        actionResult: t,
        actionFlightData: i,
        redirectLocation: s
      } = (0, o.readRecordValue)(n.inFlightServerAction);
      if (s && (e.pushRef.pendingPush = !0, n.pendingPush = !0), n.previousTree = e.tree, !i) {
        if (n.actionResultResolved || (a(t), n.actionResultResolved = !0), s) return (0, l.handleExternalUrl)(e, n, s.href, e.pushRef.pendingPush);
        return e;
      }
      if ("string" == typeof i) return (0, l.handleExternalUrl)(e, n, i, e.pushRef.pendingPush);
      for (let t of (n.inFlightServerAction = null, i)) {
        if (3 !== t.length) return console.log("SERVER ACTION APPLY FAILED"), e;
        let [a] = t,
          i = (0, p.applyRouterStatePatchToTree)([""], w, a);
        if (null === i) throw Error("SEGMENT MISMATCH");
        if ((0, m.isNavigatingToNewRootLayout)(w, i)) return (0, l.handleExternalUrl)(e, n, E, e.pushRef.pendingPush);
        let [o, s] = t.slice(-2);
        null !== o && (r.status = _.CacheStates.READY, r.subTreeData = o, (0, b.fillLazyItemsTillLeafWithHead)(r, void 0, a, s), n.cache = r, n.prefetchCache = new Map()), n.previousTree = w, n.patchedTree = i, n.canonicalUrl = E, w = i;
      }
      if (s) {
        let e = (0, u.createHrefFromUrl)(s, !1);
        n.canonicalUrl = e;
      }
      return n.actionResultResolved || (a(t), n.actionResultResolved = !0), (0, v.handleMutable)(e, n);
    } catch (t) {
      if ("rejected" === t.status) return n.actionResultResolved || (s(t.reason), n.actionResultResolved = !0), e;
      throw t;
    }
  }
  ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
    value: !0
  }), Object.assign(t.default, t), e.exports = t.default);
});
