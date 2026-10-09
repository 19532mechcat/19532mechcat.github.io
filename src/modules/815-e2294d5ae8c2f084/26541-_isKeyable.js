                                                                                                            
                                                    
(function (t, e, n) {
  n.d(e, {
    Z: function () {
      return u;
    }
  });
  var r = (0, n(47404).Z)(Object, "create"),
    o = Object.prototype.hasOwnProperty,
    i = Object.prototype.hasOwnProperty;
  function Hash(t) {
    var e = -1,
      n = null == t ? 0 : t.length;
    for (this.clear(); ++e < n;) {
      var r = t[e];
      this.set(r[0], r[1]);
    }
  }
  Hash.prototype.clear = function () {
    this.__data__ = r ? r(null) : {}, this.size = 0;
  }, Hash.prototype.delete = function (t) {
    var e = this.has(t) && delete this.__data__[t];
    return this.size -= e ? 1 : 0, e;
  }, Hash.prototype.get = function (t) {
    var e = this.__data__;
    if (r) {
      var n = e[t];
      return "__lodash_hash_undefined__" === n ? void 0 : n;
    }
    return o.call(e, t) ? e[t] : void 0;
  }, Hash.prototype.has = function (t) {
    var e = this.__data__;
    return r ? void 0 !== e[t] : i.call(e, t);
  }, Hash.prototype.set = function (t, e) {
    var n = this.__data__;
    return this.size += this.has(t) ? 0 : 1, n[t] = r && void 0 === e ? "__lodash_hash_undefined__" : e, this;
  };
  var a = n(22441),
    s = n(98512),
    _isKeyable = function (t) {
      var e = typeof t;
      return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t;
    },
    _getMapData = function (t, e) {
      var n = t.__data__;
      return _isKeyable(e) ? n["string" == typeof e ? "string" : "hash"] : n.map;
    };
  function MapCache(t) {
    var e = -1,
      n = null == t ? 0 : t.length;
    for (this.clear(); ++e < n;) {
      var r = t[e];
      this.set(r[0], r[1]);
    }
  }
  MapCache.prototype.clear = function () {
    this.size = 0, this.__data__ = {
      hash: new Hash(),
      map: new (s.Z || a.Z)(),
      string: new Hash()
    };
  }, MapCache.prototype.delete = function (t) {
    var e = _getMapData(this, t).delete(t);
    return this.size -= e ? 1 : 0, e;
  }, MapCache.prototype.get = function (t) {
    return _getMapData(this, t).get(t);
  }, MapCache.prototype.has = function (t) {
    return _getMapData(this, t).has(t);
  }, MapCache.prototype.set = function (t, e) {
    var n = _getMapData(this, t),
      r = n.size;
    return n.set(t, e), this.size += n.size == r ? 0 : 1, this;
  };
  var u = MapCache;
});
