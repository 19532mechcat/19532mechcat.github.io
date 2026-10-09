                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  n.d(t, {
    u: function () {
      return onHidden;
    }
  });
  var r = n(88108);
  let onHidden = (e, t) => {
    let onHiddenOrPageHide = n => {
      ("pagehide" === n.type || "hidden" === r.WINDOW.document.visibilityState) && (e(n), t && (removeEventListener("visibilitychange", onHiddenOrPageHide, !0), removeEventListener("pagehide", onHiddenOrPageHide, !0)));
    };
    r.WINDOW.document && (addEventListener("visibilitychange", onHiddenOrPageHide, !0), addEventListener("pagehide", onHiddenOrPageHide, !0));
  };
});
