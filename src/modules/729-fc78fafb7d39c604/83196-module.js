                                                                                                            
                                                    
(function (n, r, e) {
  var t = e(49440),
    o = e(21472),
    u = e(16193),
    a = parseFloat,
    i = Math.min,
    f = Math.random;
  r.Z = function (n, r, e) {
    if (e && "boolean" != typeof e && (0, o.Z)(n, r, e) && (r = e = void 0), void 0 === e && ("boolean" == typeof r ? (e = r, r = void 0) : "boolean" == typeof n && (e = n, n = void 0)), void 0 === n && void 0 === r ? (n = 0, r = 1) : (n = (0, u.Z)(n), void 0 === r ? (r = n, n = 0) : r = (0, u.Z)(r)), n > r) {
      var l = n;
      n = r, r = l;
    }
    if (e || n % 1 || r % 1) {
      var c = f();
      return i(n + c * (r - n + a("1e-" + ((c + "").length - 1))), r);
    }
    return (0, t.Z)(n, r);
  };
});
