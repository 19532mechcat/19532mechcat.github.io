                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  function isBrowserBundle() {
    return "undefined" != typeof __SENTRY_BROWSER_BUNDLE__ && !!__SENTRY_BROWSER_BUNDLE__;
  }
  function getSDKSource() {
    return "npm";
  }
  n.d(t, {
    S: function () {
      return getSDKSource;
    },
    n: function () {
      return isBrowserBundle;
    }
  });
});
