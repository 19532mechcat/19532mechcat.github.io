                                                                                                           
                                                    
(function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "staticGenerationBailout", {
    enumerable: !0,
    get: function () {
      return staticGenerationBailout;
    }
  });
  let r = n(14069),
    a = n(21167);
  let StaticGenBailoutError = class StaticGenBailoutError extends Error {
    constructor(...e) {
      super(...e), this.code = "NEXT_STATIC_GEN_BAILOUT";
    }
  };
  function formatErrorMessage(e, t) {
    let {
      dynamic: n,
      link: r
    } = t || {};
    return "Page" + (n ? ' with `dynamic = "' + n + '"`' : "") + " couldn't be rendered statically because it used `" + e + "`." + (r ? " See more info here: " + r : "");
  }
  let staticGenerationBailout = (e, t) => {
    let n = a.staticGenerationAsyncStorage.getStore();
    if (null == n ? void 0 : n.forceStatic) return !0;
    if (null == n ? void 0 : n.dynamicShouldError) {
      var i;
      throw new StaticGenBailoutError(formatErrorMessage(e, {
        ...t,
        dynamic: null != (i = null == t ? void 0 : t.dynamic) ? i : "error"
      }));
    }
    if (!n || (n.revalidate = 0, (null == t ? void 0 : t.dynamic) || (n.staticPrefetchBailout = !0)), null == n ? void 0 : n.isStaticGeneration) {
      let a = new r.DynamicServerError(formatErrorMessage(e, {
        ...t,
        link: "https://nextjs.org/docs/messages/dynamic-server-error"
      }));
      throw n.dynamicUsageDescription = e, n.dynamicUsageStack = a.stack, a;
    }
    return !1;
  };
  ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
    value: !0
  }), Object.assign(t.default, t), e.exports = t.default);
});
