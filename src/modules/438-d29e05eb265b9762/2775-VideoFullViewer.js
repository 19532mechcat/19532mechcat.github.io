                                                                                                           
                                                    
(function (e, n, t) {
  "use strict";

  t.d(n, {
    Z: function () {
      return VideoFullViewer;
    }
  });
  var i = t(84548),
    o = t(58036),
    r = t(18315),
    c = t(40156),
    s = t.n(c),
    a = t(95906),
    l = t(30514),
    d = t(50610),
    m = t(86058),
    u = t(29769),
    v = t(10076),
    f = t(16928),
    g = t(70165),
    _ = t(19174),
    h = t(83114),
    A = t.n(h);
  let VideoFullViewer = e => {
    var n, t;
    let {
      visible: c,
      onClose: h,
      list: p,
      activeIndex: x
    } = e;
    (0, o.useEffect)(() => {
      c ? m.q.pause() : m.q.resume();
    }, [c]);
    let E = (0, g.R)(),
      w = (0, f.x)(),
      b = (0, f.x)(),
      [y, S] = (0, o.useState)(x);
    (0, o.useEffect)(() => {
      S(x);
    }, [x]);
    let j = p[y];
    return (0, i.jsx)(l.q, {
      children: (0, i.jsxs)("div", {
        className: (0, r.Z)(A().fullViewer, c && A().visible),
        children: [(0, i.jsx)(d.I, {
          nodeRef: w,
          state: c + ":" + y + ":" + ((null == j ? void 0 : j.videoSrc) || ""),
          children: (0, i.jsx)("div", {
            ref: w,
            className: A().bg,
            style: (null == j ? void 0 : null === (n = j.coverSrc) || void 0 === n ? void 0 : n.url) ? {
              backgroundImage: c ? "url(".concat(null == j ? void 0 : null === (t = j.coverSrc) || void 0 === t ? void 0 : t.url, ")") : void 0
            } : {
              backgroundColor: c ? "#000" : void 0
            }
          })
        }), (0, i.jsx)("div", {
          className: A().bgMask
        }), (0, i.jsxs)("div", {
          className: A()._fullViewer,
          children: [(0, i.jsx)(d.I, {
            nodeRef: b,
            state: c + ":" + y + ":" + ((null == j ? void 0 : j.videoSrc) || ""),
            children: (0, i.jsx)("div", {
              ref: b,
              className: A().layer,
              children: c ? (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)("div", {
                  className: A().primary,
                  children: (0, i.jsx)(a.UY, {
                    className: A().media,
                    title: "",
                    src: null == j ? void 0 : j.videoSrc.url
                  })
                }), (0, i.jsxs)("div", {
                  className: A().titleAndDateAndDesc,
                  children: [(0, i.jsxs)("div", {
                    className: A().titleAndDate,
                    children: [(0, i.jsx)("div", {
                      className: A().title,
                      children: null == j ? void 0 : j.title
                    }), (0, i.jsx)("div", {
                      className: A().date,
                      children: (null == j ? void 0 : j.displayTime) ? s()(j.displayTime).format("YYYY-MM-DD") : ""
                    })]
                  }), (0, i.jsx)("div", {
                    className: A().desc,
                    children: null == j ? void 0 : j.intro
                  })]
                })]
              }) : null
            })
          }), "landscape" === E && p.length > 1 ? (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("div", {
              className: (0, r.Z)(A().arrowLeft),
              onClick: () => {
                p[y - 1] ? S(y - 1) : S(p.length - 1);
              },
              children: (0, i.jsx)(u.PZ, {})
            }), (0, i.jsx)("div", {
              className: (0, r.Z)(A().arrowRight),
              onClick: () => {
                p[y + 1] ? S(y + 1) : S(0);
              },
              children: (0, i.jsx)(u.bI, {})
            })]
          }) : null]
        }), "portrait" === E ? (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)("div", {
            className: A().floatingText,
            children: "VIDEO"
          }), (0, i.jsx)("div", {
            className: A().coordMark
          })]
        }) : null, "portrait" === E ? (0, i.jsxs)("div", {
          className: A().closeBtnPortrait,
          onClick: h,
          children: [(0, i.jsx)("div", {
            className: A().icon,
            children: (0, i.jsx)(v.ZY, {})
          }), (0, i.jsxs)("div", {
            className: A().btnText,
            children: [(0, i.jsx)("div", {
              className: A().main,
              children: _.f.common.goBack
            }), (0, i.jsx)("div", {
              className: A().sub,
              children: "GO BACK"
            })]
          })]
        }) : (0, i.jsx)("div", {
          className: A().closeBtn,
          onClick: h
        })]
      })
    });
  };
});
