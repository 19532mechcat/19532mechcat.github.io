(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [834],
  {
    89253: 
(function (module, exports, webpackRequire) {
  Promise.resolve().then(webpackRequire.bind(webpackRequire, 93134));
})
,
    25628: 
(function (module, exports, webpackRequire) {
  "use strict";

  webpackRequire.d(exports, {
    V: function () {
      return r;
    },
    l: function () {
      return useLayoutContext;
    }
  });
  var React = webpackRequire(58036);
  let r = (0, React.createContext)({
      scrollBlocked: {
        current: !1
      }
    }),
    useLayoutContext = () => (0, React.useContext)(r);
})
,
    93134: 
(function (module, exports, webpackRequire) {
  "use strict";

  webpackRequire.r(exports), webpackRequire.d(exports, {
    NewsClient: function () {
      return NewsClient;
    }
  });
  var jsxRuntime = webpackRequire(84548),
    React = webpackRequire(58036),
    classNamesModule = webpackRequire(18315),
    a = webpackRequire(40156),
    c = webpackRequire.n(a),
    o = webpackRequire(34548),
    A = webpackRequire(24216),
    l = webpackRequire.n(A),
    d = webpackRequire(10402),
    m = webpackRequire(91168),
    layoutContextModule = webpackRequire(25628),
    f = webpackRequire(9737),
    h = webpackRequire(50610),
    g = webpackRequire(29769),
    v = webpackRequire(16928),
    _ = webpackRequire(70165),
    x = webpackRequire(15184),
    E = webpackRequire(62841),
    siteContentModule = webpackRequire(19174),
    browserHelpers = webpackRequire(81087),
    N = webpackRequire(87273),
    w = webpackRequire.n(N);
  let C = ["LATEST", "ANNOUNCEMENT", "ACTIVITY", "NEWS"],
    I = (0, React.createContext)({
      loading: !1,
      bannerList: [],
      data: {
        LATEST: {
          list: [],
          map: {},
          total: 0,
          end: !0
        },
        ANNOUNCEMENT: {
          list: [],
          map: {},
          total: 0,
          end: !0
        },
        ACTIVITY: {
          list: [],
          map: {},
          total: 0,
          end: !0
        },
        NEWS: {
          list: [],
          map: {},
          total: 0,
          end: !0
        }
      },
      fetchData: browserHelpers.ZT,
      category: {
        state: "LATEST",
        setState: browserHelpers.ZT
      },
      page: {
        state: 1,
        setState: browserHelpers.ZT
      }
    }),
    NewsClient = e => {
      let {
          initialData: t,
          bannerData: n
        } = e,
        [s, a] = (0, React.useState)(t),
        [c, A] = (0, React.useState)(C[0]),
        [l, d] = (0, React.useState)(1),
        [m, u] = (0, React.useState)(!1),
        f = (0, x.f)(async (e, t) => {
          try {
            u(!0);
            let n = await fetch("/api/news?category=".concat(e, "&page=").concat(t));
            if (u(!1), n.status >= 200 && n.status < 400) {
              let i = await n.json();
              if (0 === i.code && i.data) {
                let n = i.data;
                a(i => ({
                  ...i,
                  [e]: {
                    list: (0, o.Z)([...i[e].list, ...n.list], e => e.cid),
                    map: {
                      ...i[e].map,
                      [t]: n.list
                    },
                    total: n.total,
                    end: n.end
                  }
                }));
              } else console.error(i.msg);
            } else console.log(n.statusText);
          } catch (e) {
            u(!1), e instanceof Error && console.error((null == e ? void 0 : e.message) || "Network Error.");
          }
        }),
        h = (0, _.R)();
      return (0, React.useEffect)(() => {
        d(1);
      }, [c]), (0, jsxRuntime.jsx)(I.Provider, {
        value: {
          loading: m,
          data: s,
          fetchData: f,
          bannerList: n,
          category: {
            state: c,
            setState: A
          },
          page: {
            state: l,
            setState: d
          }
        },
        children: (0, jsxRuntime.jsx)("div", {
          className: w().container,
          children: h ? "portrait" === h ? (0, jsxRuntime.jsx)(Portrait, {}) : (0, jsxRuntime.jsx)(Landscape, {}) : null
        })
      });
    },
    Landscape = () => {
      let {
          category: e,
          data: t,
          page: n
        } = (0, React.useContext)(I),
        a = Math.ceil(t[e.state].total / 6),
        c = (0, v.x)(),
        {
          scrollBlocked: o
        } = (0, layoutContextModule.l)();
      return (0, jsxRuntime.jsxs)("div", {
        className: w().containerLandscape,
        children: [(0, jsxRuntime.jsx)(h.I, {
          nodeRef: c,
          state: e.state,
          children: (0, jsxRuntime.jsx)(j, {
            ref: c,
            category: e.state
          })
        }), (0, jsxRuntime.jsxs)("div", {
          className: w().pageInfo,
          children: [(0, jsxRuntime.jsxs)("div", {
            className: w().titleRow,
            children: [(0, jsxRuntime.jsx)("div", {
              className: w().title,
              children: siteContentModule.f.pageNews.pageTitle
            }), (0, jsxRuntime.jsx)("div", {
              className: w().slogan,
              children: "INFO"
            }), (0, jsxRuntime.jsxs)("div", {
              className: w().pagination,
              children: [(0, jsxRuntime.jsx)(g.id, {
                className: w().arrow
              }), (0, jsxRuntime.jsx)("div", {
                className: w().cur,
                children: n.state < 10 ? "0" + n.state : n.state
              }), (0, jsxRuntime.jsx)("div", {
                className: w().slash,
                children: "\\"
              }), (0, jsxRuntime.jsx)("div", {
                className: w().max,
                children: a < 10 ? "0" + a : a
              }), (0, jsxRuntime.jsx)(g.f2, {
                className: w().arrow
              })]
            })]
          }), (0, jsxRuntime.jsx)("div", {
            className: w().tabList,
            children: C.map(t => (0, jsxRuntime.jsxs)("div", {
              className: (0, classNamesModule.W)(w().tabItem, e.state === t && w().active),
              onClick: () => e.setState(t),
              children: [(0, jsxRuntime.jsx)("div", {
                className: w().icon,
                children: (0, jsxRuntime.jsx)(g.PZ, {})
              }), (0, jsxRuntime.jsx)("span", {
                children: siteContentModule.f.info.category[t]
              })]
            }, t))
          }), (0, jsxRuntime.jsx)("div", {
            className: w().buttonRow,
            children: (0, jsxRuntime.jsxs)(l(), {
              className: (0, classNamesModule.W)(w().button, w().returnBtn),
              href: "/",
              onClick: () => {
                o.current = !0;
              },
              prefetch: !1,
              children: [(0, jsxRuntime.jsx)("div", {
                className: w().icon,
                children: (0, jsxRuntime.jsx)(g.PZ, {})
              }), (0, jsxRuntime.jsxs)("div", {
                className: w().text,
                children: [(0, jsxRuntime.jsx)("div", {
                  className: w().main,
                  children: siteContentModule.f.common.backToHome
                }), (0, jsxRuntime.jsx)("div", {
                  className: w().sub,
                  children: "GO BACK"
                })]
              })]
            })
          })]
        })]
      });
    },
    j = (0, React.forwardRef)((e, t) => {
      let {
          category: s
        } = e,
        {
          loading: a,
          data: o,
          fetchData: A,
          page: d
        } = (0, React.useContext)(I),
        {
          list: m,
          total: u,
          end: h
        } = o[s],
        g = (0, React.useRef)(m.length);
      g.current = m.length;
      let _ = (0, React.useRef)(h);
      _.current = h;
      let x = (0, v.x)();
      (0, React.useEffect)(() => {
        let e = x.current,
          listener = e => {
            e.stopPropagation();
          };
        return e.addEventListener("wheel", listener, {
          passive: !1
        }), () => {
          e.removeEventListener("wheel", listener);
        };
      }, [null]), (0, React.useEffect)(() => {
        let e = x.current,
          listener = e => {
            e.stopPropagation();
          };
        return e.addEventListener("touchmove", listener, {
          passive: !1
        }), () => {
          e.removeEventListener("touchmove", listener);
        };
      }, [null]);
      let [E, b] = (0, React.useState)([0, 4]);
      (0, React.useEffect)(() => {
        let e = x.current;
        e.style.overflowY = "scroll", e.style.marginRight = "".concat(-window.__SCROLLBAR_WIDTH, "px");
        let listener = () => {
          let t = window.__ROOT_FONT_SIZE || 16,
            n = e.scrollTop / t,
            i = e.clientHeight / t,
            r = e.scrollHeight / t;
          r - i - n <= 20 && !_.current && A(s, Math.floor(g.current / 6) + 1);
          let a = Math.floor((n - 3) / 17),
            c = a + Math.ceil(i / 17);
          b(e => e[0] !== a || e[1] !== c ? [a, c] : e), d.setState(1 + Math.floor((Math.floor(n / 17) + 2) / 3));
        };
        return e.addEventListener("scroll", listener), () => {
          e.removeEventListener("scroll", listener);
        };
      }, [null]);
      let N = (0, v.x)();
      return (0, jsxRuntime.jsxs)("div", {
        ref: t,
        className: w().scrollerWrapper,
        children: [(0, jsxRuntime.jsxs)("div", {
          ref: x,
          className: w().scroller,
          children: [(0, jsxRuntime.jsx)("div", {
            ref: N,
            className: w().list,
            style: {
              minHeight: 17 * Math.ceil(o[s].list.length / 2) + 6 + "rem"
            },
            children: o[s].list.map((e, t) => Math.floor(t / 2) < E[0] || Math.floor(t / 2) > E[1] ? null : (0, jsxRuntime.jsxs)(l(), {
              className: w().item,
              title: e.title,
              href: "/news/".concat(e.cid),
              style: {
                transform: "translateY(".concat(17 * Math.floor(t / 2), "rem)")
              },
              prefetch: !1,
              children: [(0, jsxRuntime.jsx)("div", {
                className: w().cover,
                children: (0, jsxRuntime.jsx)("img", {
                  className: w().img,
                  src: e.cover || {
                    0: webpackRequire(74122).Z.src,
                    1: webpackRequire(54795).Z.src,
                    2: webpackRequire(35186).Z.src
                  }[e.tab]
                })
              }), (0, jsxRuntime.jsxs)("div", {
                className: w().itemInfo,
                children: [(0, jsxRuntime.jsx)("div", {
                  className: w().cate,
                  children: siteContentModule.f.info.category[(0, f.o)(e.tab)]
                }), (0, jsxRuntime.jsxs)("div", {
                  className: w().dateAndTitle,
                  children: [(0, jsxRuntime.jsx)("div", {
                    className: w().date,
                    children: c().unix(e.displayTime).format("YYYY // MM / DD")
                  }), (0, jsxRuntime.jsx)("div", {
                    className: w().title,
                    children: e.title
                  })]
                })]
              })]
            }, e.cid))
          }), h ? (0, jsxRuntime.jsx)("div", {
            className: w().endOfList,
            children: "— END —"
          }) : null]
        }), a ? (0, jsxRuntime.jsx)("div", {
          className: w().loadingText,
          children: "LOADING..."
        }) : null]
      });
    });
  j.displayName = "Scroller";
  let Portrait = () => {
    let {
        loading: e,
        bannerList: t,
        category: n,
        data: a,
        fetchData: o,
        page: A
      } = (0, React.useContext)(I),
      _ = Math.ceil(a[n.state].total / 6),
      x = (0, v.x)();
    (0, React.useEffect)(() => {
      a[n.state].map[A.state] || o(n.state, A.state);
    }, [n.state, A.state]);
    let {
      scrollBlocked: b
    } = (0, layoutContextModule.l)();
    return (0, jsxRuntime.jsxs)("div", {
      className: w().containerPortrait,
      children: [(0, jsxRuntime.jsxs)("div", {
        className: w()._container,
        children: [(0, jsxRuntime.jsx)("div", {
          className: w().bannerContainer,
          children: (0, jsxRuntime.jsx)(m.tq, {
            grabCursor: !0,
            className: w().swiper,
            modules: [d.pt, d.LW],
            autoplay: {
              delay: 5e3
            },
            scrollbar: {
              el: ".".concat(w().bannerScrollBar),
              enabled: !0,
              draggable: !0,
              hide: !1
            },
            children: t.map((e, t) => (0, jsxRuntime.jsx)(m.o5, {
              children: (0, jsxRuntime.jsx)("a", {
                href: e.link.replace(siteContentModule.f.links.host, "/"),
                target: "_blank",
                onClick: () => {
                  E.t.event("click", {
                    target: "banner:".concat(e.link)
                  });
                },
                children: (0, jsxRuntime.jsx)("img", {
                  className: w().img,
                  src: e.mobileCover
                })
              })
            }, t))
          })
        }), (0, jsxRuntime.jsx)("div", {
          className: w().bannerScrollBarContainer,
          children: (0, jsxRuntime.jsx)("div", {
            className: w().bannerScrollBar
          })
        }), (0, jsxRuntime.jsx)("div", {
          className: w().tabList,
          children: C.map(e => (0, jsxRuntime.jsxs)("div", {
            className: (0, classNamesModule.W)(w().tabItem, n.state === e && w().active),
            onClick: () => n.setState(e),
            children: [(0, jsxRuntime.jsx)("span", {
              children: siteContentModule.f.info.category[e]
            }), (0, jsxRuntime.jsx)("div", {
              className: w().icon,
              children: (0, jsxRuntime.jsx)(g.bI, {})
            })]
          }, e))
        }), (0, jsxRuntime.jsx)(h.I, {
          state: "".concat(n.state, ":").concat(A.state, ":").concat(e),
          dir: "hrz",
          nodeRef: x,
          children: (0, jsxRuntime.jsx)("div", {
            className: w().newsList,
            ref: x,
            children: e ? (0, jsxRuntime.jsx)("div", {
              className: w().loadingText,
              children: "LOADING..."
            }) : (a[n.state].map[A.state] || []).map(e => (0, jsxRuntime.jsxs)(l(), {
              className: w().newsItem,
              href: "/news/".concat(e.cid),
              prefetch: !1,
              children: [(0, jsxRuntime.jsx)("div", {
                className: w().cate,
                children: siteContentModule.f.info.category[(0, f.o)(e.tab)]
              }), (0, jsxRuntime.jsxs)("div", {
                className: w().newsInfo,
                children: [(0, jsxRuntime.jsx)("div", {
                  className: w().date,
                  children: c().unix(e.displayTime).format("YYYY // MM / DD")
                }), (0, jsxRuntime.jsx)("div", {
                  className: w().newsTitle,
                  children: e.title
                })]
              })]
            }, e.cid))
          })
        }), (0, jsxRuntime.jsxs)("div", {
          className: w().pagination,
          children: [(0, jsxRuntime.jsx)("div", {
            className: (0, classNamesModule.W)(w().arrow, 1 === A.state && w().disabled),
            onClick: () => A.setState(Math.max(1, A.state - 1)),
            children: (0, jsxRuntime.jsx)(g.PZ, {})
          }), (0, jsxRuntime.jsx)("div", {
            className: w().cur,
            children: A.state < 10 ? "0" + A.state : A.state
          }), (0, jsxRuntime.jsx)("div", {
            className: w().slash,
            children: "/"
          }), (0, jsxRuntime.jsx)("div", {
            className: w().max,
            children: _ < 10 ? "0" + _ : _
          }), (0, jsxRuntime.jsx)("div", {
            className: (0, classNamesModule.W)(w().arrow, A.state === _ && w().disabled),
            onClick: () => A.setState(Math.min(_, A.state + 1)),
            children: (0, jsxRuntime.jsx)(g.bI, {})
          })]
        })]
      }), (0, jsxRuntime.jsx)("div", {
        className: w().buttonRow,
        children: (0, jsxRuntime.jsxs)(l(), {
          className: (0, classNamesModule.W)(w().button, w().returnBtn),
          href: "/",
          onClick: () => {
            b.current = !0;
          },
          prefetch: !1,
          children: [(0, jsxRuntime.jsx)("div", {
            className: w().icon,
            children: (0, jsxRuntime.jsx)(g.PZ, {})
          }), (0, jsxRuntime.jsxs)("div", {
            className: w().text,
            children: [(0, jsxRuntime.jsx)("div", {
              className: w().main,
              children: siteContentModule.f.common.backToHome
            }), (0, jsxRuntime.jsx)("div", {
              className: w().sub,
              children: "GO BACK"
            })]
          })]
        })
      })]
    });
  };
})
,
    9737: 
(function (module, exports, webpackRequire) {
  "use strict";

  webpackRequire.d(exports, {
    D: function () {
      return i;
    },
    o: function () {
      return mapCategoryToCategoryString;
    }
  });
  let i = ["LATEST", "ANNOUNCEMENT", "ACTIVITY", "NEWS"],
    mapCategoryToCategoryString = e => ({
      0: "ANNOUNCEMENT",
      1: "ACTIVITY",
      2: "NEWS"
    })[e] || "LATEST";
})
,
    50610: 
(function (module, exports, webpackRequire) {
  "use strict";

  webpackRequire.d(exports, {
    I: function () {
      return CommonTransition;
    }
  });
  var jsxRuntime = webpackRequire(84548);
  webpackRequire(58036);
  var r = webpackRequire(65568),
    s = webpackRequire(49246),
    classNamesModule = webpackRequire(18315),
    c = webpackRequire(16571),
    o = webpackRequire.n(c);
  let CommonTransition = e => {
    let {
      state: t,
      dir: n,
      reverse: c,
      slow: A,
      nodeRef: l,
      children: d
    } = e;
    return (0, jsxRuntime.jsx)(r.Z, {
      children: (0, jsxRuntime.jsx)(s.Z, {
        nodeRef: l,
        addEndListener: e => {
          var t;
          return null === (t = l.current) || void 0 === t ? void 0 : t.addEventListener("transitionend", e, !1);
        },
        classNames: n ? "hrz" === n ? {
          enter: c ? o().commonHrzEnterReverse : o().commonHrzEnter,
          enterActive: (0, classNamesModule.Z)(c ? o().commonHrzEnterActiveReverse : o().commonHrzEnterActive, A && o().slow),
          exit: c ? o().commonHrzExitReverse : o().commonHrzExit,
          exitActive: (0, classNamesModule.Z)(c ? o().commonHrzExitActiveReverse : o().commonHrzExitActive, A && o().slow)
        } : {
          enter: c ? o().commonVtcEnterReverse : o().commonVtcEnter,
          enterActive: (0, classNamesModule.Z)(c ? o().commonVtcEnterActiveReverse : o().commonVtcEnterActive, A && o().slow),
          exit: c ? o().commonVtcExitReverse : o().commonVtcExit,
          exitActive: (0, classNamesModule.Z)(c ? o().commonVtcExitActiveReverse : o().commonVtcExitActive, A && o().slow)
        } : {
          enter: o().commonEnter,
          enterActive: (0, classNamesModule.Z)(o().commonEnterActive, A && o().slow),
          exit: o().commonExit,
          exitActive: (0, classNamesModule.Z)(o().commonExitActive, A && o().slow)
        },
        unmountOnExit: !0,
        children: d
      }, t)
    });
  };
})
,
    29769: 
(function (module, exports, webpackRequire) {
  "use strict";

  webpackRequire.d(exports, {
    PZ: function () {
      return IconArrowLeftSvg;
    },
    bI: function () {
      return IconArrowRightSvg;
    },
    f2: function () {
      return IconArrowDownSvg;
    },
    id: function () {
      return IconArrowUpSvg;
    }
  });
  var jsxRuntime = webpackRequire(84548);
  webpackRequire(58036);
  var r = webpackRequire(83961);
  let s = "0 0 7 15",
    IconArrowRightSvg = e => {
      let {
        children: t,
        ...n
      } = e;
      return (0, jsxRuntime.jsx)("svg", {
        viewBox: s,
        ...n,
        children: (0, jsxRuntime.jsx)("use", {
          xlinkHref: "#".concat(r.b.iconArrow)
        })
      });
    },
    IconArrowLeftSvg = e => {
      let {
        children: t,
        style: n = {},
        ...a
      } = e;
      return (0, jsxRuntime.jsx)("svg", {
        viewBox: s,
        ...a,
        style: {
          ...n,
          transform: "rotate(180deg)"
        },
        children: (0, jsxRuntime.jsx)("use", {
          xlinkHref: "#".concat(r.b.iconArrow)
        })
      });
    },
    IconArrowUpSvg = e => {
      let {
        children: t,
        style: n = {},
        ...a
      } = e;
      return (0, jsxRuntime.jsx)("svg", {
        viewBox: s,
        ...a,
        style: {
          ...n,
          transform: "rotate(-90deg)"
        },
        children: (0, jsxRuntime.jsx)("use", {
          xlinkHref: "#".concat(r.b.iconArrow)
        })
      });
    },
    IconArrowDownSvg = e => {
      let {
        children: t,
        style: n = {},
        ...a
      } = e;
      return (0, jsxRuntime.jsx)("svg", {
        viewBox: s,
        ...a,
        style: {
          ...n,
          transform: "rotate(90deg)"
        },
        children: (0, jsxRuntime.jsx)("use", {
          xlinkHref: "#".concat(r.b.iconArrow)
        })
      });
    };
})
,
    83961: 
(function (module, exports, webpackRequire) {
  "use strict";

  webpackRequire.d(exports, {
    b: function () {
      return i;
    }
  }), webpackRequire(84548);
  let i = {
    titleArknights: "svg_def-title_arknights",
    copyrightMini: "svg_def-copyright_mini",
    iconArrow: "svg_def-icon_arrow",
    iconArrowHrz: "svg_def-icon_arrow_hrz",
    iconDblArrow: "svg_def-icon_dblArrow",
    iconUser: "svg_def-icon_user",
    iconSound: "svg_def-icon_sound",
    iconVoice: "svg_def-icon_voice",
    iconPlayBtn: "svg_def-icon_play_btn",
    iconMiniPlayBtn: "svg_def-icon_mini_play_btn",
    iconMiniLinkBtn: "svg_def-icon_mini_link_btn",
    iconSocial: "svg_def-icon_social",
    iconIOS: "svg_def-icon_iOS",
    iconAndroid: "svg_def-icon_Android",
    iconTapTap: "svg_def-icon_TapTap",
    iconSkland: "svg_def-icon_skland",
    iconBilibili: "svg_def-icon_bilibili",
    iconWechat: "svg_def-icon_wechat",
    iconWeibo: "svg_def-icon_weibo",
    iconYouTube: "svg_def-icon_youtube",
    iconDiscord: "svg_def-icon_discord",
    iconFacebook: "svg_def-icon_facebook",
    iconElitePhase0: "svg_def-elite_phase_0",
    iconElitePhase1: "svg_def-elite_phase_1",
    iconElitePhase2: "svg_def-elite_phase_2",
    iconHanger: "svg_def-hanger",
    iconHammer: "svg_def-hammer",
    logoRhodesIsland: "svg_def-logo_rhodes_island"
  };
})
,
    16928: 
(function (module, exports, webpackRequire) {
  "use strict";

  webpackRequire.d(exports, {
    x: function () {
      return useElemRef;
    }
  });
  var React = webpackRequire(58036);
  let useElemRef = () => (0, React.useRef)(null);
})
,
    70165: 
(function (module, exports, webpackRequire) {
  "use strict";

  webpackRequire.d(exports, {
    R: function () {
      return useOrientation;
    }
  });
  var React = webpackRequire(58036),
    r = webpackRequire(31903);
  let useOrientation = () => {
    let [e, t] = (0, React.useState)(null);
    return (0, r.a)(() => {
      t(window.innerWidth >= window.innerHeight ? "landscape" : "portrait");
    }), e;
  };
})
,
    31903: 
(function (module, exports, webpackRequire) {
  "use strict";

  webpackRequire.d(exports, {
    a: function () {
      return useResize;
    }
  });
  var React = webpackRequire(58036),
    r = webpackRequire(45391);
  let s = [];
  window.addEventListener("resize", () => {
    for (let e of s) e();
  });
  let useResize = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [null];
    (0, React.useEffect)(() => {
      e();
      let t = (0, r.Z)(e, 100, {
        leading: !1,
        trailing: !0
      });
      return s.push(t), () => {
        let e = s.indexOf(t);
        e >= 0 && s.splice(e, 1);
      };
    }, t);
  };
})
,
    15184: 
(function (module, exports, webpackRequire) {
  "use strict";

  webpackRequire.d(exports, {
    f: function () {
      return useThrottle;
    }
  });
  var React = webpackRequire(58036);
  let useThrottle = e => {
    let t = (0, React.useRef)(!1),
      n = (0, React.useCallback)(e => async function () {
        for (var n = arguments.length, i = Array(n), r = 0; r < n; r++) i[r] = arguments[r];
        if (!t.current) {
          t.current = !0;
          try {
            let n = await e(...i);
            return t.current = !1, n;
          } catch (e) {
            throw t.current = !1, e;
          }
        }
      }, [null]);
    return n(e);
  };
})
,
    62841: 
(function (module, exports, webpackRequire) {
  "use strict";

  webpackRequire.d(exports, {
    M: function () {
      return s;
    },
    t: function () {
      return a;
    }
  });
  var i = webpackRequire(51844),
    r = webpackRequire(89217);
  let s = (0, i.z)(r.L.sdk.src, {
      etl: {
        domain: "arknights",
        sub_domain: "official"
      }
    }),
    a = {
      event() {
        for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
        let [r, a] = t;
        Promise.all([webpackRequire.e(13), webpackRequire.e(979), webpackRequire.e(24), webpackRequire.e(710)]).then(webpackRequire.bind(webpackRequire, 30710)).then(e => {
          let {
            adapter: t
          } = e;
          s(e => {
            e.ETL.event(r, {
              ...a,
              domain: "arknights",
              sub_domain: "official",
              source: t.source.from
            });
          });
        });
      }
    };
})
,
    19174: 
(function (module, exports, webpackRequire) {
  "use strict";

  webpackRequire.d(exports, {
    f: function () {
      return i;
    }
  });
  let i = {
    locale: "zh-cn",
    links: {
      host: "/19532main/resourses/",
      userCenter: "/19532main/resourses/user/",
      csCenter: "https://customer-service.hypergryph.com/ak",
      msr: "https://monster-siren.hypergryph.com/",
      animeSite: "/19532main/resourses/anime/",
      comicSite: "https://comic.hypergryph.com/terra-historicus/"
    },
    document: {
      title: "19532 MechCaT",
      subtitle: {
        dynamicCompile: "干员动态集录 - 明日方舟",
        dynamicFurn: "互动家具 - 明日方舟",
        video: "视频列表 - 明日方舟",
        news: "情报中心 - 明日方舟",
        commonSuffix: " "
      },
      favicon: "https://19532mechcat.github.io/19532main/resourses/images/ico.ico"
    },
    download: {
      qrcode: "19532"
    },
    userPanel: {
      pleaseLogin: "请先登录您的账号。",
      welcomeDoctor: "欢迎回来，博士。",
      idle: "暂无待处理工作。",
      actions: {
        customerService: "客服中心",
        login: "立即登录",
        register: "前往注册",
        userCenter: "个人中心",
        logout: "登出"
      }
    },
    sectionTitle: {
      index: "",
      information: "",
      operator: "",
      world: "",
      media: "",
      more: "",
      customerService: ""
    },
    info: {
      category: {
        LATEST: "最新",
        ANNOUNCEMENT: "公告",
        ACTIVITY: "活动",
        NEWS: "新闻"
      }
    }
  };
})
,
    81087: 
(function (module, exports, webpackRequire) {
  "use strict";

  webpackRequire.d(exports, {
    s2: function () {
      return alter;
    },
    gK: function () {
      return r;
    },
    mI: function () {
      return isLandscape;
    },
    Fq: function () {
      return isMobileDevice;
    },
    s$: function () {
      return i;
    },
    ZT: function () {
      return noop;
    }
  });
  let i = !1,
    noop = () => {},
    alter = e => !e,
    isMobileDevice = () => void 0 !== document.body.ontouchstart,
    isLandscape = () => window.innerWidth > window.innerHeight,
    r = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
})
,
    87273: 
(function (module) {
  module.exports = {
    container: "_3195bc2c",
    containerLandscape: "_a54368c1",
    scrollerWrapper: "_7667358c",
    loadingText: "_8c3fa1d2",
    flashing: "_1eb0f771",
    scroller: "_272521bc",
    list: "_507ac726",
    item: "_aa8c4091",
    cover: "_d0f0a88a",
    img: "_ad0e4cf9",
    tip: "_72e09131",
    text: "_88d2dcc8",
    icon: "_6c1bd713",
    itemInfo: "_b7bb77e7",
    cate: "_555571b7",
    dateAndTitle: "_61c88ddf",
    date: "_59a08c8a",
    title: "_1b88147d",
    endOfList: "_60d5dbbb",
    pageInfo: "_fa5f01f0",
    titleRow: "_924b0aea",
    slogan: "_c855f482",
    pagination: "_1f923c24",
    arrow: "_752b0018",
    slash: "_7ed659e0",
    cur: "_3aef8f91",
    max: "_1024e139",
    tabList: "_6d08ebcc",
    tabItem: "_2f4a7684",
    active: "_005db7de",
    buttonRow: "_7d58a020",
    button: "_81561f87",
    main: "_c89373ce",
    sub: "_c98619d8",
    returnBtn: "_7740aadd",
    containerPortrait: "_0acda780",
    _container: "_10bd85ba",
    bannerContainer: "_b3e5d04d",
    swiper: "_245316da",
    imgWrapper: "_7b8cb6a2",
    bannerScrollBarContainer: "_9a6e7e96",
    bannerScrollBar: "_f9b8521b",
    newsList: "_5db1183d",
    newsItem: "_8fd7f2e0",
    newsInfo: "_4cacca44",
    newsTitle: "_15bbc878",
    disabled: "_50b4d956"
  };
})
,
    16571: 
(function (module) {
  module.exports = {
    commonEnter: "_eb4b54cf",
    commonEnterActive: "_1c6ab7b0",
    slow: "_8f9f5cb8",
    commonExit: "_e78fd8bb",
    commonExitActive: "_755edefa",
    commonVtcEnter: "_51d426e8",
    commonVtcEnterActive: "_6fcaf6bd",
    commonVtcExit: "_c351f654",
    commonVtcExitActive: "_4a078e72",
    commonVtcEnterReverse: "_f19ce370",
    commonVtcEnterActiveReverse: "_6784e4f3",
    commonVtcExitReverse: "_9b585686",
    commonVtcExitActiveReverse: "_23c76a64",
    commonHrzEnter: "_0d63f511",
    commonHrzEnterActive: "_514d8ddc",
    commonHrzExit: "_a99f32fc",
    commonHrzExitActive: "_f4564e83",
    commonHrzEnterReverse: "_e9263d6c",
    commonHrzEnterActiveReverse: "_494f9d49",
    commonHrzExitReverse: "_849e29fe",
    commonHrzExitActiveReverse: "_f6b2e0f9"
  };
})
,
    54795: 
(function (module, exports) {
  "use strict";

  exports.Z = {
    src: "",
    height: 158,
    width: 613,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAIACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAAkQof/8QAHRAAAAUFAAAAAAAAAAAAAAAAAAECAxEEBSFBkv/aAAgBAQABPwBebvVzpgo5H//EABYRAQEBAAAAAAAAAAAAAAAAAAEAMv/aAAgBAgEBPwAyX//EABgRAAIDAAAAAAAAAAAAAAAAAAABAjKB/9oACAEDAQE/AHeeH//Z",
    blurWidth: 8,
    blurHeight: 2
  };
})
,
    74122: 
(function (module, exports) {
  "use strict";

  exports.Z = {
    src: "",
    height: 158,
    width: 613,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAIACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABQEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAAiBQ//8QAGRABAAIDAAAAAAAAAAAAAAAAAQACAyGC/9oACAEBAAE/AM9rLcVQNHM//8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAy/9oACAECAQE/ADJf/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAECMoH/2gAIAQMBAT8Ad5Yf/9k=",
    blurWidth: 8,
    blurHeight: 2
  };
})
,
    35186: 
(function (module, exports) {
  "use strict";

  exports.Z = {
    src: "",
    height: 158,
    width: 613,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAIACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAAkgof/8QAHBAAAQMFAAAAAAAAAAAAAAAAAwABEQQFIUGS/9oACAEBAAE/ACZvFXOgNHK//8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAy/9oACAECAQE/ADJf/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAECMoH/2gAIAQMBAT8Ad54f/9k=",
    blurWidth: 8,
    blurHeight: 2
  };
})
,
    71480: 
(function (module, exports) {
  "use strict";

  exports.Z = function () {};
})
,
    34548: 
(function (module, exports, webpackRequire) {
  "use strict";

  webpackRequire.d(exports, {
    Z: function () {
      return lodash_es_uniqBy;
    }
  });
  var i = webpackRequire(7009),
    r = webpackRequire(73576),
    _baseFindIndex = function (e, t, n, i) {
      for (var r = e.length, s = n + (i ? 1 : -1); i ? s-- : ++s < r;) if (t(e[s], s, e)) return s;
      return -1;
    },
    _baseIsNaN = function (e) {
      return e != e;
    },
    _strictIndexOf = function (e, t, n) {
      for (var i = n - 1, r = e.length; ++i < r;) if (e[i] === t) return i;
      return -1;
    },
    _arrayIncludes = function (e, t) {
      return !!(null == e ? 0 : e.length) && (t == t ? _strictIndexOf(e, t, 0) : _baseFindIndex(e, _baseIsNaN, 0)) > -1;
    },
    _arrayIncludesWith = function (e, t, n) {
      for (var i = -1, r = null == e ? 0 : e.length; ++i < r;) if (n(t, e[i])) return !0;
      return !1;
    },
    s = webpackRequire(14658),
    a = webpackRequire(57390),
    c = webpackRequire(71480),
    o = webpackRequire(59410),
    A = a.Z && 1 / (0, o.Z)(new a.Z([, -0]))[1] == 1 / 0 ? function (e) {
      return new a.Z(e);
    } : c.Z,
    _baseUniq = function (e, t, n) {
      var i = -1,
        a = _arrayIncludes,
        c = e.length,
        l = !0,
        d = [],
        m = d;
      if (n) l = !1, a = _arrayIncludesWith;else if (c >= 200) {
        var u = t ? null : A(e);
        if (u) return (0, o.Z)(u);
        l = !1, a = s.Z, m = new r.Z();
      } else m = t ? [] : d;
      e: for (; ++i < c;) {
        var f = e[i],
          h = t ? t(f) : f;
        if (f = n || 0 !== f ? f : 0, l && h == h) {
          for (var g = m.length; g--;) if (m[g] === h) continue e;
          t && m.push(h), d.push(f);
        } else a(m, h, n) || (m !== d && m.push(h), d.push(f));
      }
      return d;
    },
    lodash_es_uniqBy = function (e, t) {
      return e && e.length ? _baseUniq(e, (0, i.Z)(t, 2)) : [];
    };
})
,
  },
  function (e) {
    (e.O(0, [474, 815, 558, 874, 571, 126, 868, 744], function () {
      return e((e.s = 89253));
    }),
      (_N_E = e.O()));
  },
]);
                                                 
