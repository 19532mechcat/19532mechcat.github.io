                                                                                                            
                                                    
(function (t, e, n) {
  n.d(e, {
    Z: function () {
      return _baseGetTag;
    }
  });
  var r = n(7600),
    o = Object.prototype,
    i = o.hasOwnProperty,
    a = o.toString,
    s = r.Z ? r.Z.toStringTag : void 0,
    _getRawTag = function (t) {
      var e = i.call(t, s),
        n = t[s];
      try {
        t[s] = void 0;
        var r = !0;
      } catch (t) {}
      var o = a.call(t);
      return r && (e ? t[s] = n : delete t[s]), o;
    },
    u = Object.prototype.toString,
    c = r.Z ? r.Z.toStringTag : void 0,
    _baseGetTag = function (t) {
      return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : c && c in Object(t) ? _getRawTag(t) : u.call(t);
    };
});
