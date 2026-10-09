                                                                                                           
                                                    
(function (e, t, n) {
  "use strict";

  function isSentryRequestUrl(e, t) {
    let n = t && void 0 !== t.getClient ? t.getClient() : t,
      r = n && n.getDsn(),
      a = n && n.getOptions().tunnel;
    return !!r && e.includes(r.host) || !!a && removeTrailingSlash(e) === removeTrailingSlash(a);
  }
  function removeTrailingSlash(e) {
    return "/" === e[e.length - 1] ? e.slice(0, -1) : e;
  }
  n.d(t, {
    W: function () {
      return isSentryRequestUrl;
    }
  });
});
