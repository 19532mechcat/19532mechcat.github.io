                                                                                                            
                                                    
(function (n, i, o) {
  o.d(i, {
    e: function () {
      return t;
    }
  });
  function t(n) {
    return n.use = {}, Object.keys(n.getState()).forEach(function (i) {
      var e = function (n) {
        return n[i];
      };
      n.use[i] = function () {
        return n(e);
      };
    }), n;
  }
});
