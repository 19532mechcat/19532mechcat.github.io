                                                                                                                         
                                                    
(function (module, exports, webpackRequire) {
  "use strict";

     
                  
                                       
   
                                                      
   
                                                                   
                                                           
    
  var React = webpackRequire(58036),
    o = Symbol.for("react.element"),
    l = Symbol.for("react.fragment"),
    a = Object.prototype.hasOwnProperty,
    i = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    u = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    };
  function q(e, t, n) {
    var r,
      l = {},
      d = null,
      f = null;
    for (r in void 0 !== n && (d = "" + n), void 0 !== t.key && (d = "" + t.key), void 0 !== t.ref && (f = t.ref), t) a.call(t, r) && !u.hasOwnProperty(r) && (l[r] = t[r]);
    if (e && e.defaultProps) for (r in t = e.defaultProps) void 0 === l[r] && (l[r] = t[r]);
    return {
      $$typeof: o,
      type: e,
      key: d,
      ref: f,
      props: l,
      _owner: i.current
    };
  }
  exports.Fragment = l, exports.jsx = q, exports.jsxs = q;
});
