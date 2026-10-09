                                                                                                           
                                                    
(function (t, e, n) {
  "use strict";

  n.d(e, {
    z: function () {
      return getSDKReadyFunc;
    }
  });
  var r = n(26211),
    o = function (t) {
      void 0 === t && (t = 16);
      for (var e = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", n = e.length, r = "", o = 0; o < t; o++) r += e[Math.floor(Math.random() * n)];
      return r;
    }(16);
  function getSDKReadyFunc(t, e) {
    return void 0 === e && (e = {}), "string" == typeof e || "undefined" != typeof window && (window._HG_WEB_SDK_INIT_OPTIONS = e), Object.assign(function sdkReady(e) {
      return (0, r.mG)(this, void 0, void 0, function () {
        var n = this;
        return (0, r.Jh)(this, function (i) {
          return [2, new Promise(function (i, a) {
            var u = window.HG_SDK;
            if (u) {
              null == e || e(u), i(u);
              return;
            }
            window._HG_SDK_CALLBACK_QUEUE = window._HG_SDK_CALLBACK_QUEUE || [], window._HG_SDK_CALLBACK_QUEUE.push(function () {
              return (0, r.mG)(n, void 0, void 0, function () {
                var t;
                return (0, r.Jh)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return t = i, [4, sdkReady(e)];
                    case 1:
                      return t.apply(void 0, [n.sent()]), [2];
                  }
                });
              });
            });
            var s = window.document.getElementById(o);
            s || ((s = window.document.createElement("script")).defer = !0, s.src = t + "?ts=".concat(Date.now()), s.id = o, window.document.head.appendChild(s)), s.addEventListener("error", a);
          })];
        });
      });
    }, {
      SDK_TYPE: "HG"
    });
  }
});
