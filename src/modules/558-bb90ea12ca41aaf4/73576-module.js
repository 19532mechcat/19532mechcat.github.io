                                                                                                            
                                                    
(function (e, n, r) {
  "use strict";

  r.d(n, {
    Z: function () {
      return i;
    }
  });
  var a = r(26541);
  function SetCache(e) {
    var n = -1,
      r = null == e ? 0 : e.length;
    for (this.__data__ = new a.Z(); ++n < r;) this.add(e[n]);
  }
  SetCache.prototype.add = SetCache.prototype.push = function (e) {
    return this.__data__.set(e, "__lodash_hash_undefined__"), this;
  }, SetCache.prototype.has = function (e) {
    return this.__data__.has(e);
  };
  var i = SetCache;
});
