                                                                                                            
                                                    
(function (n, r, e) {
  e.d(r, {
    Z: function () {
      return lodash_es_flatten;
    }
  });
  var t = e(68085),
    o = e(7600),
    u = e(97589),
    a = e(38813),
    i = o.Z ? o.Z.isConcatSpreadable : void 0,
    _isFlattenable = function (n) {
      return (0, a.Z)(n) || (0, u.Z)(n) || !!(i && n && n[i]);
    },
    _baseFlatten = function baseFlatten(n, r, e, o, u) {
      var a = -1,
        i = n.length;
      for (e || (e = _isFlattenable), u || (u = []); ++a < i;) {
        var f = n[a];
        r > 0 && e(f) ? r > 1 ? baseFlatten(f, r - 1, e, o, u) : (0, t.Z)(u, f) : o || (u[u.length] = f);
      }
      return u;
    },
    lodash_es_flatten = function (n) {
      return (null == n ? 0 : n.length) ? _baseFlatten(n, 1) : [];
    };
});
