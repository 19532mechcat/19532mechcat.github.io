                                                                                                            
                                                    
(function (e, n, t) {
  "use strict";

  t.d(n, {
    q: function () {
      return ClientOnly;
    }
  });
  var i = t(84548),
    o = t(58036);
  let ClientOnly = e => {
    let {
        children: n
      } = e,
      [t, r] = (0, o.useState)(!1);
    return (0, o.useEffect)(() => {
      r(!0);
    }, [null]), t ? (0, i.jsx)(i.Fragment, {
      children: n
    }) : null;
  };
});
