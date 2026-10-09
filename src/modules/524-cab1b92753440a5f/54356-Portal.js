                                                                                                            
                                                    
(function (e, t, i) {
  "use strict";

  i.d(t, {
    u: function () {
      return Modal;
    }
  });
  var n = i(84548),
    a = i(18315),
    s = i(58036),
    r = i(461),
    c = i(40594),
    l = i.n(c);
  let Portal = e => {
    let {
        children: t
      } = e,
      [i, a] = (0, s.useState)(!1);
    return (0, s.useEffect)(() => {
      let e = document.getElementById(l().container);
      e || ((e = document.createElement("div")).id = l().container, e.addEventListener("wheel", e => {
        e.stopImmediatePropagation();
      }), document.body.append(e)), a(!0);
    }, [null]), i ? (0, r.createPortal)((0, n.jsx)(n.Fragment, {
      children: t
    }), document.getElementById(l().container)) : null;
  };
  var o = i(84236),
    A = i.n(o);
  let Modal = e => {
    let {
      visible: t,
      onClose: i,
      layerClassName: s,
      children: r
    } = e;
    return (0, n.jsx)(Portal, {
      children: (0, n.jsxs)("div", {
        className: (0, a.Z)(A().modal, t && A().visible),
        children: [(0, n.jsx)("div", {
          className: A().mask,
          onClick: i
        }), (0, n.jsx)("div", {
          className: (0, a.Z)(A().layer, s),
          children: r
        })]
      })
    });
  };
});
