                                                                                                           
                                                    
(function (t, e, n) {
  var r = n(50456);
  function QRPolynomial(t, e) {
    if (void 0 == t.length) throw Error(t.length + "/" + e);
    for (var n = 0; n < t.length && 0 == t[n];) n++;
    this.num = Array(t.length - n + e);
    for (var r = 0; r < t.length - n; r++) this.num[r] = t[r + n];
  }
  QRPolynomial.prototype = {
    get: function (t) {
      return this.num[t];
    },
    getLength: function () {
      return this.num.length;
    },
    multiply: function (t) {
      for (var e = Array(this.getLength() + t.getLength() - 1), n = 0; n < this.getLength(); n++) for (var o = 0; o < t.getLength(); o++) e[n + o] ^= r.gexp(r.glog(this.get(n)) + r.glog(t.get(o)));
      return new QRPolynomial(e, 0);
    },
    mod: function (t) {
      if (this.getLength() - t.getLength() < 0) return this;
      for (var e = r.glog(this.get(0)) - r.glog(t.get(0)), n = Array(this.getLength()), o = 0; o < this.getLength(); o++) n[o] = this.get(o);
      for (var o = 0; o < t.getLength(); o++) n[o] ^= r.gexp(r.glog(t.get(o)) + e);
      return new QRPolynomial(n, 0).mod(t);
    }
  }, t.exports = QRPolynomial;
});
