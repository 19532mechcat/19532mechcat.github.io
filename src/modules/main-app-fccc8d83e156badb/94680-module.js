                                                                                                                 
                                                    
(function (e, t, n) {
  "use strict";

  var s = n(85700),
    i = n(24735),
    r = n(89217),
    _ = window;
  _.__sentryRewritesTunnelPath__ = void 0, _.SENTRY_RELEASE = {
    id: "ak-official-v4-web@1.0.0"
  }, _.__sentryBasePath = void 0, _.__rewriteFramesAssetPrefixPath__ = "/arknights/official", s.S1({
    dsn: r.L.sentry.dsn,
    integrations: [i.Li()],
    tracesSampleRate: 1,
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1
  });
});
