                                                                                                           
                                                    
(function (t, e, n) {
  var r = n(43758);
  function QR8bitByte(t) {
    this.mode = r.MODE_8BIT_BYTE, this.data = t;
  }
  QR8bitByte.prototype = {
    getLength: function (t) {
      return this.data.length;
    },
    write: function (t) {
      for (var e = 0; e < this.data.length; e++) t.put(this.data.charCodeAt(e), 8);
    }
  }, t.exports = QR8bitByte;
});
