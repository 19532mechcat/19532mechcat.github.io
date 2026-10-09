                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  n.d(t, {
    Y: function () {
      return getVisibilityWatcher;
    }
  });
  var r = n(88108),
    a = n(91768);
  let i = -1,
    initHiddenTime = () => {
      r.WINDOW.document && r.WINDOW.document.visibilityState && (i = "hidden" !== r.WINDOW.document.visibilityState || r.WINDOW.document.prerendering ? 1 / 0 : 0);
    },
    trackChanges = () => {
      (0, a.u)(({
        timeStamp: e
      }) => {
        i = e;
      }, !0);
    },
    getVisibilityWatcher = () => (i < 0 && (initHiddenTime(), trackChanges()), {
      get firstHiddenTime() {
        return i;
      }
    });
});
