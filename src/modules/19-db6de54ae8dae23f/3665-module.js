                                                                                                          
                                                    
(function (t, e, n) {
  var r = n(43758),
    o = n(68596),
    i = n(50456),
    a = {
      PATTERN000: 0,
      PATTERN001: 1,
      PATTERN010: 2,
      PATTERN011: 3,
      PATTERN100: 4,
      PATTERN101: 5,
      PATTERN110: 6,
      PATTERN111: 7
    },
    u = {
      PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
      G15: 1335,
      G18: 7973,
      G15_MASK: 21522,
      getBCHTypeInfo: function (t) {
        for (var e = t << 10; u.getBCHDigit(e) - u.getBCHDigit(u.G15) >= 0;) e ^= u.G15 << u.getBCHDigit(e) - u.getBCHDigit(u.G15);
        return (t << 10 | e) ^ u.G15_MASK;
      },
      getBCHTypeNumber: function (t) {
        for (var e = t << 12; u.getBCHDigit(e) - u.getBCHDigit(u.G18) >= 0;) e ^= u.G18 << u.getBCHDigit(e) - u.getBCHDigit(u.G18);
        return t << 12 | e;
      },
      getBCHDigit: function (t) {
        for (var e = 0; 0 != t;) e++, t >>>= 1;
        return e;
      },
      getPatternPosition: function (t) {
        return u.PATTERN_POSITION_TABLE[t - 1];
      },
      getMask: function (t, e, n) {
        switch (t) {
          case a.PATTERN000:
            return (e + n) % 2 == 0;
          case a.PATTERN001:
            return e % 2 == 0;
          case a.PATTERN010:
            return n % 3 == 0;
          case a.PATTERN011:
            return (e + n) % 3 == 0;
          case a.PATTERN100:
            return (Math.floor(e / 2) + Math.floor(n / 3)) % 2 == 0;
          case a.PATTERN101:
            return e * n % 2 + e * n % 3 == 0;
          case a.PATTERN110:
            return (e * n % 2 + e * n % 3) % 2 == 0;
          case a.PATTERN111:
            return (e * n % 3 + (e + n) % 2) % 2 == 0;
          default:
            throw Error("bad maskPattern:" + t);
        }
      },
      getErrorCorrectPolynomial: function (t) {
        for (var e = new o([1], 0), n = 0; n < t; n++) e = e.multiply(new o([1, i.gexp(n)], 0));
        return e;
      },
      getLengthInBits: function (t, e) {
        if (1 <= e && e < 10) switch (t) {
          case r.MODE_NUMBER:
            return 10;
          case r.MODE_ALPHA_NUM:
            return 9;
          case r.MODE_8BIT_BYTE:
          case r.MODE_KANJI:
            return 8;
          default:
            throw Error("mode:" + t);
        } else if (e < 27) switch (t) {
          case r.MODE_NUMBER:
            return 12;
          case r.MODE_ALPHA_NUM:
            return 11;
          case r.MODE_8BIT_BYTE:
            return 16;
          case r.MODE_KANJI:
            return 10;
          default:
            throw Error("mode:" + t);
        } else if (e < 41) switch (t) {
          case r.MODE_NUMBER:
            return 14;
          case r.MODE_ALPHA_NUM:
            return 13;
          case r.MODE_8BIT_BYTE:
            return 16;
          case r.MODE_KANJI:
            return 12;
          default:
            throw Error("mode:" + t);
        } else throw Error("type:" + e);
      },
      getLostPoint: function (t) {
        for (var e = t.getModuleCount(), n = 0, r = 0; r < e; r++) for (var o = 0; o < e; o++) {
          for (var i = 0, a = t.isDark(r, o), u = -1; u <= 1; u++) if (!(r + u < 0) && !(e <= r + u)) for (var s = -1; s <= 1; s++) !(o + s < 0) && !(e <= o + s) && (0 != u || 0 != s) && a == t.isDark(r + u, o + s) && i++;
          i > 5 && (n += 3 + i - 5);
        }
        for (var r = 0; r < e - 1; r++) for (var o = 0; o < e - 1; o++) {
          var c = 0;
          t.isDark(r, o) && c++, t.isDark(r + 1, o) && c++, t.isDark(r, o + 1) && c++, t.isDark(r + 1, o + 1) && c++, (0 == c || 4 == c) && (n += 3);
        }
        for (var r = 0; r < e; r++) for (var o = 0; o < e - 6; o++) t.isDark(r, o) && !t.isDark(r, o + 1) && t.isDark(r, o + 2) && t.isDark(r, o + 3) && t.isDark(r, o + 4) && !t.isDark(r, o + 5) && t.isDark(r, o + 6) && (n += 40);
        for (var o = 0; o < e; o++) for (var r = 0; r < e - 6; r++) t.isDark(r, o) && !t.isDark(r + 1, o) && t.isDark(r + 2, o) && t.isDark(r + 3, o) && t.isDark(r + 4, o) && !t.isDark(r + 5, o) && t.isDark(r + 6, o) && (n += 40);
        for (var l = 0, o = 0; o < e; o++) for (var r = 0; r < e; r++) t.isDark(r, o) && l++;
        return n + 10 * (Math.abs(100 * l / e / e - 50) / 5);
      }
    };
  t.exports = u;
});
