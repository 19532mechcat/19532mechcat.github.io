                                                                                                            
                                                    
(function (t, e, n) {
  n.d(e, {
    Z: function () {
      return _getNative;
    }
  });
  var r,
    o = n(11146),
    i = n(48717).Z["__core-js_shared__"],
    a = (r = /[^.]+$/.exec(i && i.keys && i.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r : "",
    s = n(84639),
    u = n(36423),
    c = /^\[object .+?Constructor\]$/,
    p = Object.prototype,
    l = Function.prototype.toString,
    f = p.hasOwnProperty,
    d = RegExp("^" + l.call(f).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
    _getNative = function (t, e) {
      var n,
        r = null == t ? void 0 : t[e];
      return (n = r, (0, s.Z)(n) && (!a || !(a in n)) && ((0, o.Z)(n) ? d : c).test((0, u.Z)(n))) ? r : void 0;
    };
});
