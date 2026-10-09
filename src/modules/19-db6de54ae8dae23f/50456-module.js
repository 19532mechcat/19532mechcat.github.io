                                                                                                           
                                                    
(function (t) {
  for (var e = {
      glog: function (t) {
        if (t < 1) throw Error("glog(" + t + ")");
        return e.LOG_TABLE[t];
      },
      gexp: function (t) {
        for (; t < 0;) t += 255;
        for (; t >= 256;) t -= 255;
        return e.EXP_TABLE[t];
      },
      EXP_TABLE: Array(256),
      LOG_TABLE: Array(256)
    }, n = 0; n < 8; n++) e.EXP_TABLE[n] = 1 << n;
  for (var n = 8; n < 256; n++) e.EXP_TABLE[n] = e.EXP_TABLE[n - 4] ^ e.EXP_TABLE[n - 5] ^ e.EXP_TABLE[n - 6] ^ e.EXP_TABLE[n - 8];
  for (var n = 0; n < 255; n++) e.LOG_TABLE[e.EXP_TABLE[n]] = n;
  t.exports = e;
});
