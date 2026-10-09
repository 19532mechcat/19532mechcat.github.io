                                                                                                            
                                                    
(function (e, t) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), function (e, t) {
    for (var n in t) Object.defineProperty(e, n, {
      enumerable: !0,
      get: t[n]
    });
  }(t, {
    WEB_VITALS: function () {
      return n;
    },
    execOnce: function () {
      return execOnce;
    },
    isAbsoluteUrl: function () {
      return isAbsoluteUrl;
    },
    getLocationOrigin: function () {
      return getLocationOrigin;
    },
    getURL: function () {
      return getURL;
    },
    getDisplayName: function () {
      return getDisplayName;
    },
    isResSent: function () {
      return isResSent;
    },
    normalizeRepeatedSlashes: function () {
      return normalizeRepeatedSlashes;
    },
    loadGetInitialProps: function () {
      return loadGetInitialProps;
    },
    SP: function () {
      return a;
    },
    ST: function () {
      return i;
    },
    DecodeError: function () {
      return DecodeError;
    },
    NormalizeError: function () {
      return NormalizeError;
    },
    PageNotFoundError: function () {
      return PageNotFoundError;
    },
    MissingStaticPage: function () {
      return MissingStaticPage;
    },
    MiddlewareNotFoundError: function () {
      return MiddlewareNotFoundError;
    },
    stringifyError: function () {
      return stringifyError;
    }
  });
  let n = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
  function execOnce(e) {
    let t,
      n = !1;
    return function () {
      for (var r = arguments.length, a = Array(r), i = 0; i < r; i++) a[i] = arguments[i];
      return n || (n = !0, t = e(...a)), t;
    };
  }
  let r = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
    isAbsoluteUrl = e => r.test(e);
  function getLocationOrigin() {
    let {
      protocol: e,
      hostname: t,
      port: n
    } = window.location;
    return e + "//" + t + (n ? ":" + n : "");
  }
  function getURL() {
    let {
        href: e
      } = window.location,
      t = getLocationOrigin();
    return e.substring(t.length);
  }
  function getDisplayName(e) {
    return "string" == typeof e ? e : e.displayName || e.name || "Unknown";
  }
  function isResSent(e) {
    return e.finished || e.headersSent;
  }
  function normalizeRepeatedSlashes(e) {
    let t = e.split("?"),
      n = t[0];
    return n.replace(/\\/g, "/").replace(/\/\/+/g, "/") + (t[1] ? "?" + t.slice(1).join("?") : "");
  }
  async function loadGetInitialProps(e, t) {
    let n = t.res || t.ctx && t.ctx.res;
    if (!e.getInitialProps) return t.ctx && t.Component ? {
      pageProps: await loadGetInitialProps(t.Component, t.ctx)
    } : {};
    let r = await e.getInitialProps(t);
    if (n && isResSent(n)) return r;
    if (!r) {
      let t = '"' + getDisplayName(e) + '.getInitialProps()" should resolve to an object. But found "' + r + '" instead.';
      throw Error(t);
    }
    return r;
  }
  let a = "undefined" != typeof performance,
    i = a && ["mark", "measure", "getEntriesByName"].every(e => "function" == typeof performance[e]);
  let DecodeError = class DecodeError extends Error {};
  let NormalizeError = class NormalizeError extends Error {};
  let PageNotFoundError = class PageNotFoundError extends Error {
    constructor(e) {
      super(), this.code = "ENOENT", this.name = "PageNotFoundError", this.message = "Cannot find module for page: " + e;
    }
  };
  let MissingStaticPage = class MissingStaticPage extends Error {
    constructor(e, t) {
      super(), this.message = "Failed to load static file for page: " + e + " " + t;
    }
  };
  let MiddlewareNotFoundError = class MiddlewareNotFoundError extends Error {
    constructor() {
      super(), this.code = "ENOENT", this.message = "Cannot find the middleware module";
    }
  };
  function stringifyError(e) {
    return JSON.stringify({
      message: e.message,
      stack: e.stack
    });
  }
});
