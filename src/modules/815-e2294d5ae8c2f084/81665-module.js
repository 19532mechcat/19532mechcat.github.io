                                                                                                            
                                                    
(function (t, e, n) {
  n.d(e, {
    Z: function () {
      return h;
    }
  });
  var r = n(17996),
    o = n(69006),
    i = n(96786),
    a = {};
  a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1;
  var s = n(35270),
    u = n(64380),
    c = "object" == typeof exports && exports && !exports.nodeType && exports,
    p = c && "object" == typeof module && module && !module.nodeType && module,
    l = p && p.exports === c && u.Z.process,
    f = function () {
      try {
        var t = p && p.require && p.require("util").types;
        if (t) return t;
        return l && l.binding && l.binding("util");
      } catch (t) {}
    }(),
    d = f && f.isTypedArray,
    h = d ? (0, s.Z)(d) : function (t) {
      return (0, i.Z)(t) && (0, o.Z)(t.length) && !!a[(0, r.Z)(t)];
    };
});
