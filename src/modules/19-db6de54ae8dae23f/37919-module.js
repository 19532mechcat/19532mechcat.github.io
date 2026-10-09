                                                                                                           
                                                    
(function (t, e, n) {
  var r = n(39557),
    o = n(99636),
    i = n(13609),
    a = n(3665),
    u = n(68596);
  function QRCode(t, e) {
    this.typeNumber = t, this.errorCorrectLevel = e, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.dataList = [];
  }
  var s = QRCode.prototype;
  s.addData = function (t) {
    var e = new r(t);
    this.dataList.push(e), this.dataCache = null;
  }, s.isDark = function (t, e) {
    if (t < 0 || this.moduleCount <= t || e < 0 || this.moduleCount <= e) throw Error(t + "," + e);
    return this.modules[t][e];
  }, s.getModuleCount = function () {
    return this.moduleCount;
  }, s.make = function () {
    if (this.typeNumber < 1) {
      var t = 1;
      for (t = 1; t < 40; t++) {
        for (var e = o.getRSBlocks(t, this.errorCorrectLevel), n = new i(), r = 0, u = 0; u < e.length; u++) r += e[u].dataCount;
        for (var u = 0; u < this.dataList.length; u++) {
          var s = this.dataList[u];
          n.put(s.mode, 4), n.put(s.getLength(), a.getLengthInBits(s.mode, t)), s.write(n);
        }
        if (n.getLengthInBits() <= 8 * r) break;
      }
      this.typeNumber = t;
    }
    this.makeImpl(!1, this.getBestMaskPattern());
  }, s.makeImpl = function (t, e) {
    this.moduleCount = 4 * this.typeNumber + 17, this.modules = Array(this.moduleCount);
    for (var n = 0; n < this.moduleCount; n++) {
      this.modules[n] = Array(this.moduleCount);
      for (var r = 0; r < this.moduleCount; r++) this.modules[n][r] = null;
    }
    this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(t, e), this.typeNumber >= 7 && this.setupTypeNumber(t), null == this.dataCache && (this.dataCache = QRCode.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, e);
  }, s.setupPositionProbePattern = function (t, e) {
    for (var n = -1; n <= 7; n++) if (!(t + n <= -1) && !(this.moduleCount <= t + n)) for (var r = -1; r <= 7; r++) e + r <= -1 || this.moduleCount <= e + r || (0 <= n && n <= 6 && (0 == r || 6 == r) || 0 <= r && r <= 6 && (0 == n || 6 == n) || 2 <= n && n <= 4 && 2 <= r && r <= 4 ? this.modules[t + n][e + r] = !0 : this.modules[t + n][e + r] = !1);
  }, s.getBestMaskPattern = function () {
    for (var t = 0, e = 0, n = 0; n < 8; n++) {
      this.makeImpl(!0, n);
      var r = a.getLostPoint(this);
      (0 == n || t > r) && (t = r, e = n);
    }
    return e;
  }, s.createMovieClip = function (t, e, n) {
    var r = t.createEmptyMovieClip(e, n);
    this.make();
    for (var o = 0; o < this.modules.length; o++) for (var i = 1 * o, a = 0; a < this.modules[o].length; a++) {
      var u = 1 * a;
      this.modules[o][a] && (r.beginFill(0, 100), r.moveTo(u, i), r.lineTo(u + 1, i), r.lineTo(u + 1, i + 1), r.lineTo(u, i + 1), r.endFill());
    }
    return r;
  }, s.setupTimingPattern = function () {
    for (var t = 8; t < this.moduleCount - 8; t++) null == this.modules[t][6] && (this.modules[t][6] = t % 2 == 0);
    for (var e = 8; e < this.moduleCount - 8; e++) null == this.modules[6][e] && (this.modules[6][e] = e % 2 == 0);
  }, s.setupPositionAdjustPattern = function () {
    for (var t = a.getPatternPosition(this.typeNumber), e = 0; e < t.length; e++) for (var n = 0; n < t.length; n++) {
      var r = t[e],
        o = t[n];
      if (null == this.modules[r][o]) for (var i = -2; i <= 2; i++) for (var u = -2; u <= 2; u++) -2 == i || 2 == i || -2 == u || 2 == u || 0 == i && 0 == u ? this.modules[r + i][o + u] = !0 : this.modules[r + i][o + u] = !1;
    }
  }, s.setupTypeNumber = function (t) {
    for (var e = a.getBCHTypeNumber(this.typeNumber), n = 0; n < 18; n++) {
      var r = !t && (e >> n & 1) == 1;
      this.modules[Math.floor(n / 3)][n % 3 + this.moduleCount - 8 - 3] = r;
    }
    for (var n = 0; n < 18; n++) {
      var r = !t && (e >> n & 1) == 1;
      this.modules[n % 3 + this.moduleCount - 8 - 3][Math.floor(n / 3)] = r;
    }
  }, s.setupTypeInfo = function (t, e) {
    for (var n = this.errorCorrectLevel << 3 | e, r = a.getBCHTypeInfo(n), o = 0; o < 15; o++) {
      var i = !t && (r >> o & 1) == 1;
      o < 6 ? this.modules[o][8] = i : o < 8 ? this.modules[o + 1][8] = i : this.modules[this.moduleCount - 15 + o][8] = i;
    }
    for (var o = 0; o < 15; o++) {
      var i = !t && (r >> o & 1) == 1;
      o < 8 ? this.modules[8][this.moduleCount - o - 1] = i : o < 9 ? this.modules[8][15 - o - 1 + 1] = i : this.modules[8][15 - o - 1] = i;
    }
    this.modules[this.moduleCount - 8][8] = !t;
  }, s.mapData = function (t, e) {
    for (var n = -1, r = this.moduleCount - 1, o = 7, i = 0, u = this.moduleCount - 1; u > 0; u -= 2) for (6 == u && u--;;) {
      for (var s = 0; s < 2; s++) if (null == this.modules[r][u - s]) {
        var c = !1;
        i < t.length && (c = (t[i] >>> o & 1) == 1), a.getMask(e, r, u - s) && (c = !c), this.modules[r][u - s] = c, -1 == --o && (i++, o = 7);
      }
      if ((r += n) < 0 || this.moduleCount <= r) {
        r -= n, n = -n;
        break;
      }
    }
  }, QRCode.PAD0 = 236, QRCode.PAD1 = 17, QRCode.createData = function (t, e, n) {
    for (var r = o.getRSBlocks(t, e), u = new i(), s = 0; s < n.length; s++) {
      var c = n[s];
      u.put(c.mode, 4), u.put(c.getLength(), a.getLengthInBits(c.mode, t)), c.write(u);
    }
    for (var l = 0, s = 0; s < r.length; s++) l += r[s].dataCount;
    if (u.getLengthInBits() > 8 * l) throw Error("code length overflow. (" + u.getLengthInBits() + ">" + 8 * l + ")");
    for (u.getLengthInBits() + 4 <= 8 * l && u.put(0, 4); u.getLengthInBits() % 8 != 0;) u.putBit(!1);
    for (; !(u.getLengthInBits() >= 8 * l) && (u.put(QRCode.PAD0, 8), !(u.getLengthInBits() >= 8 * l));) u.put(QRCode.PAD1, 8);
    return QRCode.createBytes(u, r);
  }, QRCode.createBytes = function (t, e) {
    for (var n = 0, r = 0, o = 0, i = Array(e.length), s = Array(e.length), c = 0; c < e.length; c++) {
      var l = e[c].dataCount,
        f = e[c].totalCount - l;
      r = Math.max(r, l), o = Math.max(o, f), i[c] = Array(l);
      for (var h = 0; h < i[c].length; h++) i[c][h] = 255 & t.buffer[h + n];
      n += l;
      var d = a.getErrorCorrectPolynomial(f),
        g = new u(i[c], d.getLength() - 1).mod(d);
      s[c] = Array(d.getLength() - 1);
      for (var h = 0; h < s[c].length; h++) {
        var p = h + g.getLength() - s[c].length;
        s[c][h] = p >= 0 ? g.get(p) : 0;
      }
    }
    for (var v = 0, h = 0; h < e.length; h++) v += e[h].totalCount;
    for (var y = Array(v), m = 0, h = 0; h < r; h++) for (var c = 0; c < e.length; c++) h < i[c].length && (y[m++] = i[c][h]);
    for (var h = 0; h < o; h++) for (var c = 0; c < e.length; c++) h < s[c].length && (y[m++] = s[c][h]);
    return y;
  }, t.exports = QRCode;
});
