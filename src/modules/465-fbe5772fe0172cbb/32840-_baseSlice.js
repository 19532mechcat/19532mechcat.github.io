                                                                                                            
                                                    
(function (n, i, o) {
  o.d(i, {
    Z: function () {
      return lodash_es_chunk;
    }
  });
  var _baseSlice = function (n, i, o) {
      var u = -1,
        s = n.length;
      i < 0 && (i = -i > s ? 0 : s + i), (o = o > s ? s : o) < 0 && (o += s), s = i > o ? 0 : o - i >>> 0, i >>>= 0;
      for (var c = Array(s); ++u < s;) c[u] = n[u + i];
      return c;
    },
    u = o(21472),
    s = o(96550),
    c = Math.ceil,
    l = Math.max,
    lodash_es_chunk = function (n, i, o) {
      i = (o ? (0, u.Z)(n, i, o) : void 0 === i) ? 1 : l((0, s.Z)(i), 0);
      var f = null == n ? 0 : n.length;
      if (!f || i < 1) return [];
      for (var p = 0, d = 0, g = Array(c(f / i)); p < f;) g[d++] = _baseSlice(n, p, p += i);
      return g;
    };
});
