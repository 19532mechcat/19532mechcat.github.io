                                                                                                            
                                                    
(function (t, e) {
  var n = /^(?:0|[1-9]\d*)$/;
  e.Z = function (t, e) {
    var r = typeof t;
    return !!(e = null == e ? 9007199254740991 : e) && ("number" == r || "symbol" != r && n.test(t)) && t > -1 && t % 1 == 0 && t < e;
  };
});
