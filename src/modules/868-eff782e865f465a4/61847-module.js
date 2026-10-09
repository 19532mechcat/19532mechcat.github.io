                                                                                                            
                                                    
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
    CacheStates: function () {
      return r;
    },
    AppRouterContext: function () {
      return s;
    },
    LayoutRouterContext: function () {
      return u;
    },
    GlobalLayoutRouterContext: function () {
      return l;
    },
    TemplateContext: function () {
      return p;
    }
  });
  let i = n(68517),
    o = i._(n(58036));
  (a = r || (r = {})).LAZY_INITIALIZED = "LAZYINITIALIZED", a.DATA_FETCH = "DATAFETCH", a.READY = "READY";
  let s = o.default.createContext(null),
    u = o.default.createContext(null),
    l = o.default.createContext(null),
    p = o.default.createContext(null);
});
