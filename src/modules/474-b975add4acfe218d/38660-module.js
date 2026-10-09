                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

     
                  
                                       
   
                                                      
   
                                                                   
                                                           
    
  var o = n(58036),
    l = Symbol.for("react.element"),
    u = Symbol.for("react.fragment"),
    f = Object.prototype.hasOwnProperty,
    a = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    i = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    };
  function q(e, t, n) {
    var o,
      u = {},
      c = null,
      s = null;
    for (o in void 0 !== n && (c = "" + n), void 0 !== t.key && (c = "" + t.key), void 0 !== t.ref && (s = t.ref), t) f.call(t, o) && !i.hasOwnProperty(o) && (u[o] = t[o]);
    if (e && e.defaultProps) for (o in t = e.defaultProps) void 0 === u[o] && (u[o] = t[o]);
    return {
      $$typeof: l,
      type: e,
      key: c,
      ref: s,
      props: u,
      _owner: a.current
    };
  }
  t.Fragment = u, t.jsx = q, t.jsxs = q;
});
