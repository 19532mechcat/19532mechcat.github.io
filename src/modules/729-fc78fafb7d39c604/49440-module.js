                                                                                                            
                                                    
(function (n, r) {
  var e = Math.floor,
    t = Math.random;
  r.Z = function (n, r) {
    return n + e(t() * (r - n + 1));
  };
});
