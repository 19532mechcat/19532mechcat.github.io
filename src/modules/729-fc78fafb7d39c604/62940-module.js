                                                                                                            
                                                    
(function (n, r, e) {
  var t = e(45391),
    o = e(84639);
  r.Z = function (n, r, e) {
    var u = !0,
      a = !0;
    if ("function" != typeof n) throw TypeError("Expected a function");
    return (0, o.Z)(e) && (u = "leading" in e ? !!e.leading : u, a = "trailing" in e ? !!e.trailing : a), (0, t.Z)(n, r, {
      leading: u,
      maxWait: r,
      trailing: a
    });
  };
});
