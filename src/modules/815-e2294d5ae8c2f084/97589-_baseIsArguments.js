                                                                                                            
                                                    
(function (t, e, n) {
  n.d(e, {
    Z: function () {
      return u;
    }
  });
  var r = n(17996),
    o = n(96786),
    _baseIsArguments = function (t) {
      return (0, o.Z)(t) && "[object Arguments]" == (0, r.Z)(t);
    },
    i = Object.prototype,
    a = i.hasOwnProperty,
    s = i.propertyIsEnumerable,
    u = _baseIsArguments(function () {
      return arguments;
    }()) ? _baseIsArguments : function (t) {
      return (0, o.Z)(t) && a.call(t, "callee") && !s.call(t, "callee");
    };
});
