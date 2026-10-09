                                                                                                            
                                                    
(function (t, e, n) {
  var r = n(38813),
    o = n(55357),
    i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    a = /^\w*$/;
  e.Z = function (t, e) {
    if ((0, r.Z)(t)) return !1;
    var n = typeof t;
    return !!("number" == n || "symbol" == n || "boolean" == n || null == t || (0, o.Z)(t)) || a.test(t) || !i.test(t) || null != e && t in Object(e);
  };
});
