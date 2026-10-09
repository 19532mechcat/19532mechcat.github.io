                                                                                                            
                                                    
(function (e, t, i) {
  "use strict";

  i.d(t, {
    G: function () {
      return EmulatorModal;
    },
    r: function () {
      return A;
    }
  });
  var n = i(84548),
    a = i(62841),
    s = i(54356),
    r = i(47426),
    c = i(31212),
    l = i(79706);
  let o = (0, r.e)((0, l.Ue)(() => ({
      emulatorModalVisible: !1,
      mumuLink: "",
      leidianLink: ""
    }))),
    A = {
      show: e => {
        let {
          mumuLink: t,
          leidianLink: i
        } = e;
        o.setState((0, c.Uy)(e => {
          e.emulatorModalVisible = !0, e.mumuLink = t, e.leidianLink = i;
        }));
      },
      hide: () => o.setState((0, c.Uy)(e => {
        e.emulatorModalVisible = !1;
      }))
    };
  var d = i(56514),
    u = i.n(d);
  let EmulatorModal = () => {
    let {
      emulatorModalVisible: e,
      mumuLink: t,
      leidianLink: r
    } = o();
    return (0, n.jsx)(s.u, {
      visible: e,
      onClose: A.hide,
      layerClassName: u().container,
      children: (0, n.jsxs)("div", {
        className: u().main,
        children: [(0, n.jsxs)("div", {
          className: u().title,
          children: [(0, n.jsx)("img", {
            className: u().title_bracket_left,
            src: i(19760).Z.src,
            alt: "",
            width: 12,
            height: 43
          }), (0, n.jsx)("span", {
            className: u().title_text,
            children: "模拟器下载"
          }), (0, n.jsx)("img", {
            className: u().title_bracket_right,
            src: i(51076).Z.src,
            alt: "",
            width: 12,
            height: 43
          })]
        }), (0, n.jsxs)("div", {
          className: u().content,
          style: {
            backgroundImage: "url(".concat(i(22291).Z.src, ")")
          },
          children: [(0, n.jsx)("div", {
            className: u().divider
          }), (0, n.jsxs)("div", {
            className: u().emulator_option,
            onClick: () => {
              a.t.event("download", {
                channel: "mumu"
              }), window.open(t, "_blank"), A.hide();
            },
            children: [(0, n.jsx)("img", {
              src: i(22769).Z.src,
              alt: "MUMU模拟器",
              width: 96,
              height: 96
            }), (0, n.jsx)("div", {
              className: u().emulator_name,
              children: "MuMu模拟器"
            })]
          }), (0, n.jsxs)("div", {
            className: u().emulator_option,
            onClick: () => {
              a.t.event("download", {
                channel: "leidian"
              }), window.open(r, "_blank"), A.hide();
            },
            children: [(0, n.jsx)("img", {
              src: i(52835).Z.src,
              alt: "雷电模拟器",
              width: 96,
              height: 96
            }), (0, n.jsx)("div", {
              className: u().emulator_name,
              children: "雷电模拟器"
            })]
          })]
        }), (0, n.jsx)("div", {
          className: u().close_btn,
          onClick: A.hide,
          children: (0, n.jsx)("img", {
            src: i(91421).Z.src,
            alt: "关闭",
            width: 30,
            height: 30
          })
        })]
      })
    });
  };
});
