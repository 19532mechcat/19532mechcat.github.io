                                                                                                           
                                                    
(function (e, t, n) {
  "use strict";

  var r, a;
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), function (e, t) {
    for (var n in t) Object.defineProperty(e, n, {
      enumerable: !0,
      get: t[n]
    });
  }(t, {
    RedirectType: function () {
      return r;
    },
    getRedirectError: function () {
      return getRedirectError;
    },
    redirect: function () {
      return redirect;
    },
    permanentRedirect: function () {
      return permanentRedirect;
    },
    isRedirectError: function () {
      return isRedirectError;
    },
    getURLFromRedirectError: function () {
      return getURLFromRedirectError;
    },
    getRedirectTypeFromError: function () {
      return getRedirectTypeFromError;
    }
  });
  let i = n(74560),
    o = "NEXT_REDIRECT";
  function getRedirectError(e, t, n) {
    void 0 === n && (n = !1);
    let r = Error(o);
    r.digest = o + ";" + t + ";" + e + ";" + n;
    let a = i.requestAsyncStorage.getStore();
    return a && (r.mutableCookies = a.mutableCookies), r;
  }
  function redirect(e, t) {
    throw void 0 === t && (t = "replace"), getRedirectError(e, t, !1);
  }
  function permanentRedirect(e, t) {
    throw void 0 === t && (t = "replace"), getRedirectError(e, t, !0);
  }
  function isRedirectError(e) {
    if ("string" != typeof (null == e ? void 0 : e.digest)) return !1;
    let [t, n, r, a] = e.digest.split(";", 4);
    return t === o && ("replace" === n || "push" === n) && "string" == typeof r && ("true" === a || "false" === a);
  }
  function getURLFromRedirectError(e) {
    return isRedirectError(e) ? e.digest.split(";", 3)[2] : null;
  }
  function getRedirectTypeFromError(e) {
    if (!isRedirectError(e)) throw Error("Not a redirect error");
    return e.digest.split(";", 3)[1];
  }
  (a = r || (r = {})).push = "push", a.replace = "replace", ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
    value: !0
  }), Object.assign(t.default, t), e.exports = t.default);
});
