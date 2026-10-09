                                                                                                            
                                                    
(function (e, t, i) {
  i.d(t, {
    z: function () {
      return getSDKReadyFunc;
    }
  });
  var r = i(26211),
    s = function (e) {
      void 0 === e && (e = 16);
      for (var t = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", i = t.length, r = "", s = 0; s < e; s++) r += t[Math.floor(Math.random() * i)];
      return r;
    }(16);
  function getSDKReadyFunc(e, t) {
    return void 0 === t && (t = {}), "string" == typeof t || "undefined" != typeof window && (window._HG_WEB_SDK_INIT_OPTIONS = t), Object.assign(function sdkReady(t) {
      return (0, r.mG)(this, void 0, void 0, function () {
        var i = this;
        return (0, r.Jh)(this, function (a) {
          return [2, new Promise(function (a, n) {
            var l = window.HG_SDK;
            if (l) {
              null == t || t(l), a(l);
              return;
            }
            window._HG_SDK_CALLBACK_QUEUE = window._HG_SDK_CALLBACK_QUEUE || [], window._HG_SDK_CALLBACK_QUEUE.push(function () {
              return (0, r.mG)(i, void 0, void 0, function () {
                var e;
                return (0, r.Jh)(this, function (i) {
                  switch (i.label) {
                    case 0:
                      return e = a, [4, sdkReady(t)];
                    case 1:
                      return e.apply(void 0, [i.sent()]), [2];
                  }
                });
              });
            });
            var o = window.document.getElementById(s);
            o || ((o = window.document.createElement("script")).defer = !0, o.src = e + "?ts=".concat(Date.now()), o.id = s, window.document.head.appendChild(o)), o.addEventListener("error", n);
          })];
        });
      });
    }, {
      SDK_TYPE: "HG"
    });
  }
});
