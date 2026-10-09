                                                                                                            
                                                    
(function (t, e) {
  var n = Function.prototype.toString;
  e.Z = function (t) {
    if (null != t) {
      try {
        return n.call(t);
      } catch (t) {}
      try {
        return t + "";
      } catch (t) {}
    }
    return "";
  };
});
