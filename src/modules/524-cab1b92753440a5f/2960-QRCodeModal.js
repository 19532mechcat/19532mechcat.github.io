                                                                                                           
                                                    
(function (e, t, i) {
  "use strict";

  i.d(t, {
    W: function () {
      return QRCodeModal;
    }
  });
  var n = i(84548),
    a = i(54356),
    s = i(79706);
  let r = (0, s.Ue)(() => ({
      qrcodeModalVisible: !1,
      platform: ""
    })),
    c = {
      hide: () => {
        r.setState({
          qrcodeModalVisible: !1,
          platform: ""
        });
      }
    };
  var l = i(54351),
    o = i.n(l);
  let QRCodeModal = () => {
    let {
      qrcodeModalVisible: e,
      platform: t
    } = r();
    return (0, n.jsx)(a.u, {
      visible: e,
      onClose: c.hide,
      layerClassName: o().container,
      children: (0, n.jsxs)("div", {
        className: o().main,
        children: [(0, n.jsx)("div", {
          className: o().title
        }), (0, n.jsxs)("div", {
          className: o().content,
          children: [(0, n.jsx)("div", {
            className: o().qr_section,
            children: (0, n.jsx)("img", {
              src: i(31141).Z.src,
              alt: "QR Code",
              className: o().qr_image
            })
          }), (0, n.jsx)("div", {
            className: o().text_section,
            children: (0, n.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: "可透過掃描QRcode前往".concat(t, "進行下載<br> 也可以直接在").concat(t, "中搜尋<span> 明日方舟</span> 進行下載")
              }
            })
          })]
        }), (0, n.jsx)("div", {
          className: o().close_btn,
          onClick: c.hide,
          children: (0, n.jsx)("img", {
            src: i(91421).Z.src,
            width: 30,
            height: 30
          })
        })]
      })
    });
  };
});
