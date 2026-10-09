                                                                                                            
                                                    
(function (t, e, n) {
  n.d(e, {
    Z: function () {
      return x;
    }
  });
  var r = n(47404),
    o = n(48717),
    i = (0, r.Z)(o.Z, "DataView"),
    a = n(98512),
    s = (0, r.Z)(o.Z, "Promise"),
    u = n(57390),
    c = (0, r.Z)(o.Z, "WeakMap"),
    p = n(17996),
    l = n(36423),
    f = "[object Map]",
    d = "[object Promise]",
    h = "[object Set]",
    v = "[object WeakMap]",
    b = "[object DataView]",
    m = (0, l.Z)(i),
    _ = (0, l.Z)(a.Z),
    y = (0, l.Z)(s),
    g = (0, l.Z)(u.Z),
    Z = (0, l.Z)(c),
    E = p.Z;
  (i && E(new i(new ArrayBuffer(1))) != b || a.Z && E(new a.Z()) != f || s && E(s.resolve()) != d || u.Z && E(new u.Z()) != h || c && E(new c()) != v) && (E = function (t) {
    var e = (0, p.Z)(t),
      n = "[object Object]" == e ? t.constructor : void 0,
      r = n ? (0, l.Z)(n) : "";
    if (r) switch (r) {
      case m:
        return b;
      case _:
        return f;
      case y:
        return d;
      case g:
        return h;
      case Z:
        return v;
    }
    return e;
  });
  var x = E;
});
