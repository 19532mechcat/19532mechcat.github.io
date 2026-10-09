                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  n.d(t, {
    W: function () {
      return getNavigationEntry;
    }
  });
  var r = n(88108);
  let getNavigationEntryFromPerformanceTiming = () => {
      let e = r.WINDOW.performance.timing,
        t = r.WINDOW.performance.navigation.type,
        n = {
          entryType: "navigation",
          startTime: 0,
          type: 2 == t ? "back_forward" : 1 === t ? "reload" : "navigate"
        };
      for (let t in e) "navigationStart" !== t && "toJSON" !== t && (n[t] = Math.max(e[t] - e.navigationStart, 0));
      return n;
    },
    getNavigationEntry = () => r.WINDOW.__WEB_VITALS_POLYFILL__ ? r.WINDOW.performance && (performance.getEntriesByType && performance.getEntriesByType("navigation")[0] || getNavigationEntryFromPerformanceTiming()) : r.WINDOW.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0];
});
