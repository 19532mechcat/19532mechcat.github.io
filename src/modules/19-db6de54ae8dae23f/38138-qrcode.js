                                                                                                           
                                                    
(function (t, e, n) {
  var r = n(37919),
    o = n(83689),
    qrcode = function (t, e) {
      e = e || {};
      var n = new r(e.typeNumber || -1, e.errorCorrectLevel || o.H);
      return n.addData(t), n.make(), n;
    };
  qrcode.ErrorCorrectLevel = o, t.exports = qrcode;
});
