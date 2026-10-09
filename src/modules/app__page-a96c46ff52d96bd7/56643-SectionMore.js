                                                                                                                 
                                                    
(function (module, exports, webpackRequire) {
  "use strict";

  webpackRequire.r(exports), webpackRequire.d(exports, {
    SectionMoreClient: function () {
      return SectionMoreClient;
    }
  });
  var a,
    s,
    jsxRuntime = webpackRequire(84548),
    React = webpackRequire(58036),
    classNamesModule = webpackRequire(18315),
    c = webpackRequire(95906),
    A = webpackRequire(21858),
    o = webpackRequire(86058),
    d = webpackRequire(70165),
    sectionStateModule = webpackRequire(88204),
    siteContentModule = webpackRequire(19174);
  (a = s || (s = {}))[a.HOME = 0] = "HOME", a[a.IS = 1] = "IS", a[a.RA = 2] = "RA";
  let g = [{
    key: "integrated_strategies",
    nameEn: "INTEGRATED STRATEGIES",
    cover: webpackRequire(7945).Z.src,
    cover_portrait: webpackRequire(99918).Z.src,
    icon: webpackRequire(94483).Z.src,
    themeColor: "#4c2b2a",
    activeColor: "#c7151e",
    view: 1
  }, {
    key: "reclamation_algorithm",
    nameEn: "RECLAMATION ALGORITHM",
    cover: webpackRequire(69106).Z.src,
    cover_portrait: webpackRequire(93526).Z.src,
    icon: webpackRequire(99498).Z.src,
    themeColor: "#898175",
    activeColor: "#eeb763",
    view: 2
  }, {
    key: "animation",
    nameEn: "ANIMATION",
    cover: webpackRequire(55330).Z.src,
    cover_portrait: webpackRequire(83993).Z.src,
    icon: webpackRequire(76363).Z.src,
    themeColor: "#293f45",
    activeColor: "#2096e6",
    link: siteContentModule.f.links.animeSite
  }, {
    key: "terra_historicus",
    nameEn: "TERRA HISTORICUS",
    cover: webpackRequire(61578).Z.src,
    cover_portrait: webpackRequire(19886).Z.src,
    icon: webpackRequire(8301).Z.src,
    themeColor: "#576b0b",
    activeColor: "#396308",
    link: siteContentModule.f.links.comicSite
  }].filter(Boolean).map(e => ({
    ...e,
    ...siteContentModule.f.more.infoMap[e.key]
  }));
  var m = webpackRequire(30514),
    f = webpackRequire(50610),
    v = webpackRequire(29769),
    x = webpackRequire(10076),
    b = webpackRequire(83961);
  let IconMiniLinkBtnSvg = e => {
    let {
      children: t,
      ...i
    } = e;
    return (0, jsxRuntime.jsx)("svg", {
      viewBox: "0 0 44 42",
      ...i,
      children: (0, jsxRuntime.jsx)("use", {
        xlinkHref: "#".concat(b.b.iconMiniLinkBtn)
      })
    });
  };
  var p = webpackRequire(17322),
    w = webpackRequire(16928),
    j = webpackRequire(39044),
    N = webpackRequire.n(j);
  let showVideo = e => {
      A.Z.show(() => ((0, React.useEffect)(() => (o.q.pause(), () => {
        o.q.resume();
      }), [null]), (0, jsxRuntime.jsx)("div", {
        className: N().modalVideoWrapper,
        children: (0, jsxRuntime.jsx)(c.UY, {
          title: "",
          src: e
        })
      })), {
        contentClassName: N().modalVideo
      });
    },
    SubPage = e => {
      let {
          title: t,
          active: i,
          topicList: a,
          onReturn: s
        } = e,
        c = (0, d.R)(),
        [A, o] = (0, React.useState)(a.length - 1),
        h = a[A],
        g = (0, w.x)(),
        b = (0, w.x)();
      return h ? (0, jsxRuntime.jsx)(m.q, {
        children: (0, jsxRuntime.jsxs)("div", {
          className: (0, classNamesModule.Z)(N().container, i && N().active),
          children: [(0, jsxRuntime.jsx)(f.I, {
            nodeRef: g,
            state: A,
            children: (0, jsxRuntime.jsx)("div", {
              ref: g,
              className: N().bgWrapper,
              children: (0, jsxRuntime.jsx)("div", {
                className: N().bg,
                style: {
                  backgroundImage: "url(".concat("portrait" === c ? a[A].content.coverPortrait.url : a[A].content.cover.url, ")")
                }
              })
            })
          }), (0, jsxRuntime.jsx)("div", {
            className: N().bgMask
          }), a.length && (0, jsxRuntime.jsx)("div", {
            className: N().tabList,
            onTouchMoveCapture: e => e.stopPropagation(),
            children: (0, jsxRuntime.jsx)("div", {
              className: N()._tabList,
              children: a.map((e, t) => (0, jsxRuntime.jsxs)("div", {
                className: (0, classNamesModule.Z)(N().tabItem, t === A && N().active),
                onClick: () => o(t),
                children: [(0, jsxRuntime.jsx)("div", {
                  className: N().text,
                  children: e.content.title
                }), (0, jsxRuntime.jsx)("div", {
                  className: N().icon,
                  children: (0, jsxRuntime.jsx)(v.bI, {})
                })]
              }, t))
            })
          }), "landscape" === c && (0, jsxRuntime.jsx)("div", {
            className: N().floatingText,
            children: t
          }), (0, jsxRuntime.jsx)(f.I, {
            nodeRef: b,
            state: A,
            dir: "hrz",
            children: (0, jsxRuntime.jsxs)("div", {
              ref: b,
              className: N().topicInfo,
              children: [(0, jsxRuntime.jsx)("div", {
                className: N().subtitle,
                children: h.content.subtitle
              }), (0, jsxRuntime.jsx)("div", {
                className: N().title,
                children: h.content.title
              }), (0, jsxRuntime.jsx)("div", {
                className: N().titleLine
              }), (0, jsxRuntime.jsx)("div", {
                className: N().actions,
                children: h.content.buttons.map((e, t) => (0, jsxRuntime.jsxs)("div", {
                  className: N().action,
                  onClick: () => {
                    "link" === e.type && e.targetLink ? window.open(e.targetLink, "_blank") : "video" === e.type && e.targetVideo && showVideo(e.targetVideo.url);
                  },
                  children: [(0, jsxRuntime.jsx)("div", {
                    className: N().flag,
                    style: {
                      backgroundColor: e.themeColor
                    }
                  }), (0, jsxRuntime.jsx)("div", {
                    className: N().subText,
                    children: e.subText
                  }), (0, jsxRuntime.jsx)("div", {
                    className: N().primaryText,
                    children: e.primaryText
                  }), (0, jsxRuntime.jsx)("div", {
                    className: N().icon,
                    children: "link" === e.type ? (0, jsxRuntime.jsx)(IconMiniLinkBtnSvg, {}) : (0, jsxRuntime.jsx)(p.yS, {})
                  })]
                }, t))
              }), (0, jsxRuntime.jsx)("div", {
                className: N().actionsLine
              }), (0, jsxRuntime.jsxs)("a", {
                className: (0, classNamesModule.Z)(N().button, N().primary, !h.content.link && N().hidden),
                href: h.content.link,
                target: "_blank",
                children: [(0, jsxRuntime.jsxs)("div", {
                  className: N().btnText,
                  children: [(0, jsxRuntime.jsx)("div", {
                    className: N().main,
                    children: siteContentModule.f.more.themeActivity.website
                  }), (0, jsxRuntime.jsx)("div", {
                    className: N().sub,
                    children: "WEBSITE"
                  })]
                }), (0, jsxRuntime.jsx)("div", {
                  className: N().icon,
                  children: (0, jsxRuntime.jsx)(x.QD, {})
                })]
              })]
            })
          }), a.length && (0, jsxRuntime.jsx)("div", {
            className: N().navContainer,
            children: a.map((e, t) => (0, jsxRuntime.jsx)("div", {
              className: (0, classNamesModule.Z)(N().navItem, t === A && N().active),
              onClick: () => o(t)
            }, t))
          }), (0, jsxRuntime.jsxs)("div", {
            className: (0, classNamesModule.Z)(N().button, N().returnBtn),
            onClick: s,
            children: [(0, jsxRuntime.jsx)("div", {
              className: N().icon,
              children: (0, jsxRuntime.jsx)(x.ZY, {})
            }), (0, jsxRuntime.jsxs)("div", {
              className: N().btnText,
              children: [(0, jsxRuntime.jsx)("div", {
                className: N().main,
                children: siteContentModule.f.common.goBack
              }), (0, jsxRuntime.jsx)("div", {
                className: N().sub,
                children: "GO BACK"
              })]
            })]
          }), (0, jsxRuntime.jsx)("div", {
            className: N().coordMark
          })]
        })
      }) : null;
    };
  var E = webpackRequire(63871),
    y = webpackRequire.n(E);
  let SectionMoreClient = e => {
      let {
          index: t,
          themeActivityData: i
        } = e,
        {
          sectionPointer: a
        } = (0, sectionStateModule.S)(),
        [c, A] = (0, React.useState)(s.HOME);
      return (0, jsxRuntime.jsxs)("div", {
        className: (0, classNamesModule.Z)(y().container, t === a && y().active),
        children: [(0, jsxRuntime.jsxs)("div", {
          className: (0, classNamesModule.Z)(y().list, c !== s.HOME && y().hidden),
          children: [(0, jsxRuntime.jsx)("div", {
            className: y()._list,
            children: g.map(e => (0, jsxRuntime.jsx)(ListItem, {
              item: e,
              onClick: () => A(e.view)
            }, e.key))
          }), (0, jsxRuntime.jsx)("div", {
            className: y().floatingText,
            children: "MORE CONTENT"
          })]
        }), (0, jsxRuntime.jsx)(SubPage, {
          title: "INTEGRATED STRATEGIES",
          active: c === s.IS,
          topicList: i.isList,
          onReturn: () => A(s.HOME)
        }), (0, jsxRuntime.jsx)(SubPage, {
          title: "RECLAMATION ALGORITHM",
          active: c === s.RA,
          topicList: i.raList,
          onReturn: () => A(s.HOME)
        })]
      });
    },
    ListItem = e => {
      let {
          item: t,
          onClick: i
        } = e,
        a = (0, d.R)(),
        [s, c] = (0, React.useState)("");
      (0, React.useEffect)(() => {
        a && ("portrait" === a ? c(t.cover_portrait) : c(t.cover));
      }, [a]);
      let A = (0, jsxRuntime.jsxs)(jsxRuntime.Fragment, {
        children: [(0, jsxRuntime.jsx)("div", {
          className: y().cover,
          style: {
            backgroundImage: "url(".concat(s, ")")
          }
        }), (0, jsxRuntime.jsx)("div", {
          className: y().brightnessMask
        }), (0, jsxRuntime.jsx)("div", {
          className: y().themeMask,
          style: {
            color: t.themeColor
          }
        }), (0, jsxRuntime.jsx)("div", {
          className: y().activeMask,
          style: {
            color: t.activeColor
          }
        }), (0, jsxRuntime.jsx)("div", {
          className: y().shadowMask
        }), (0, jsxRuntime.jsxs)("div", {
          className: y().info,
          children: [(0, jsxRuntime.jsxs)("div", {
            className: y().title,
            children: [(0, jsxRuntime.jsx)("span", {
              children: t.name
            }), (0, jsxRuntime.jsx)("div", {
              className: y().icon,
              style: {
                backgroundImage: "url(".concat(t.icon, ")")
              }
            })]
          }), (0, jsxRuntime.jsx)("div", {
            className: y().subtitle,
            children: t.nameEn
          }), (0, jsxRuntime.jsx)("div", {
            className: y().desc,
            children: "VIEW MORE >"
          })]
        })]
      });
      return t.link ? (0, jsxRuntime.jsx)("a", {
        className: (0, classNamesModule.Z)(y().listItem, y()[t.key]),
        href: t.link,
        target: "_blank",
        children: A
      }) : (0, jsxRuntime.jsx)("div", {
        className: (0, classNamesModule.Z)(y().listItem, y()[t.key]),
        onClick: () => null == i ? void 0 : i(t),
        children: A
      });
    };
});
