                                                                                                                 
                                                    
(function (module, exports, webpackRequire) {
  "use strict";

  webpackRequire.r(exports), webpackRequire.d(exports, {
    SectionMediaClient: function () {
      return SectionMediaClient;
    }
  });
  var a,
    s,
    jsxRuntime = webpackRequire(84548),
    React = webpackRequire(58036),
    classNamesModule = webpackRequire(18315),
    c = webpackRequire(50610),
    A = webpackRequire(29769),
    o = webpackRequire(16928),
    d = webpackRequire(70165),
    siteContentModule = webpackRequire(19174),
    sectionStateModule = webpackRequire(88204),
    g = webpackRequire(40156),
    m = webpackRequire.n(g),
    f = webpackRequire(32840),
    v = webpackRequire(62535),
    x = webpackRequire(11954),
    b = webpackRequire(10402),
    p = webpackRequire(91168),
    w = webpackRequire(30514),
    browserHelpers = webpackRequire(81087),
    N = webpackRequire(27449),
    E = webpackRequire.n(N);
  let y = (() => {
      let e = [];
      for (let t = 0; t < 12; t++) {
        let i = t + 1;
        e.push(i);
      }
      return e;
    })(),
    CelebView = e => {
      var t, i, a;
      let {
          galleryData: {
            GROUPED_ARTWORK_LIST: s,
            yearList: u,
            defaultYear: g,
            defaultMonth: N
          },
          active: _,
          onReturn: C
        } = e,
        S = (0, d.R)(),
        [k, R] = (0, React.useState)(g),
        [I, B] = (0, React.useState)(N),
        U = (null === (t = s[k]) || void 0 === t ? void 0 : t[I]) || [],
        [D, M] = (0, React.useState)(0),
        T = U[D] ? U[D] : null;
      (0, React.useEffect)(() => {
        var e;
        let t = (0, x.Z)(Object.keys(s[k] || {}).map(Number), e => e, "desc"),
          i = t[0];
        null === (e = L.current) || void 0 === e || e.slideTo(i - 1 - 2, 300), B(i);
      }, [k]), (0, React.useEffect)(() => {
        M(0);
      }, [I]), (0, React.useEffect)(() => {
        var e;
        null === (e = O.current) || void 0 === e || e.slideTo("portrait" === S ? Math.floor(D / 2) : D - 1);
      }, [D]);
      let [Q, Z] = (0, React.useState)(!0),
        L = (0, React.useRef)(),
        O = (0, React.useRef)(),
        V = (0, o.x)(),
        P = (0, o.x)(),
        G = (0, o.x)(),
        [H, F] = (0, React.useState)({
          visible: !1,
          index: D
        }),
        Y = U[H.index],
        W = (0, o.x)(),
        K = (0, o.x)();
      return (0, jsxRuntime.jsx)(w.q, {
        children: (0, jsxRuntime.jsxs)("div", {
          className: (0, classNamesModule.Z)(E().celebReview, _ && E().active),
          children: [(0, jsxRuntime.jsxs)("div", {
            className: E()._celebReview,
            children: [(0, jsxRuntime.jsx)("div", {
              className: E().cover,
              onClick: () => F({
                visible: !0,
                index: D
              }),
              children: (0, jsxRuntime.jsx)(c.I, {
                nodeRef: V,
                state: "".concat(k, ":").concat(I, ":").concat(D),
                children: (0, jsxRuntime.jsx)("img", {
                  ref: V,
                  className: E().img,
                  src: null == T ? void 0 : T.content.resource.url,
                  alt: null == T ? void 0 : T.content.title
                })
              })
            }), S ? "landscape" === S ? (0, jsxRuntime.jsxs)("div", {
              className: E().timeline,
              children: [(0, jsxRuntime.jsxs)("div", {
                className: E().yearSelector,
                children: [(0, jsxRuntime.jsx)("div", {
                  className: E().title,
                  children: "TIMELINE"
                }), (0, jsxRuntime.jsxs)("div", {
                  className: E().landscapeSelector,
                  onClick: () => Z(browserHelpers.s2),
                  children: [(0, jsxRuntime.jsx)("div", {
                    className: E().current,
                    children: k
                  }), (0, jsxRuntime.jsx)("div", {
                    className: (0, classNamesModule.Z)(E().arrow, Q && E().reverse),
                    children: (0, jsxRuntime.jsx)(A.bI, {})
                  })]
                }), (0, jsxRuntime.jsx)("div", {
                  className: (0, classNamesModule.Z)(E().yearList, Q && E().visible),
                  children: u.map(e => (0, jsxRuntime.jsx)("div", {
                    className: (0, classNamesModule.Z)(E().yearItem, e === k && E().active),
                    onClick: () => {
                      R(e), Z(!1);
                    },
                    children: e
                  }, e))
                })]
              }), (0, jsxRuntime.jsx)("div", {
                className: E().monthSelector,
                children: (0, jsxRuntime.jsx)(p.tq, {
                  direction: "vertical",
                  slidesPerView: 6,
                  modules: [b.Rv],
                  freeMode: !0,
                  grabCursor: !0,
                  className: E().monthSwiper,
                  onSwiper: e => {
                    L.current = e;
                  },
                  children: y.map(e => {
                    var t;
                    return (0, jsxRuntime.jsx)(p.o5, {
                      children: (0, jsxRuntime.jsx)("div", {
                        className: (0, classNamesModule.Z)(E().slide, 1 === e && E().first, 12 === e && E().last),
                        onClick: () => {
                          s[k][e] && B(e);
                        },
                        children: (0, jsxRuntime.jsxs)("div", {
                          className: (0, classNamesModule.Z)(E().month, I === e && E().active, !(null === (t = s[k]) || void 0 === t ? void 0 : t[e]) && E().disabled),
                          children: [(0, jsxRuntime.jsx)("div", {
                            className: E().dash
                          }), (0, jsxRuntime.jsx)("div", {
                            className: E().text,
                            children: "0".concat(e).slice(-2)
                          })]
                        })
                      })
                    }, e);
                  })
                })
              })]
            }) : (0, jsxRuntime.jsxs)("div", {
              className: E().timeline,
              children: [(0, jsxRuntime.jsx)("div", {
                className: E().yearSelector,
                children: (0, jsxRuntime.jsxs)("div", {
                  className: E().mobileSelector,
                  children: [(0, jsxRuntime.jsx)("div", {
                    className: (0, classNamesModule.Z)(E().arrowLeft, 0 >= u.indexOf(k) && E().disabled),
                    onClick: () => {
                      let e = u.indexOf(k);
                      u[e - 1] && R(u[e - 1]);
                    },
                    children: (0, jsxRuntime.jsx)(A.PZ, {})
                  }), (0, jsxRuntime.jsxs)("div", {
                    className: E().titleAndCurrent,
                    children: [(0, jsxRuntime.jsx)("div", {
                      className: E().title,
                      children: "TIMELINE"
                    }), (0, jsxRuntime.jsx)("div", {
                      className: E().current,
                      children: k
                    })]
                  }), (0, jsxRuntime.jsx)("div", {
                    className: (0, classNamesModule.Z)(E().arrowRight, u.indexOf(k) >= u.length - 1 && E().disabled),
                    onClick: () => {
                      let e = u.indexOf(k);
                      u[e + 1] && R(u[e + 1]);
                    },
                    children: (0, jsxRuntime.jsx)(A.bI, {})
                  })]
                })
              }), (0, jsxRuntime.jsx)("div", {
                className: E().monthSelector,
                children: y.map(e => {
                  var t;
                  return (0, jsxRuntime.jsx)("div", {
                    className: (0, classNamesModule.Z)(E().slide, 1 === e && E().first, 12 === e && E().last),
                    onClick: () => {
                      s[k][e] && B(e);
                    },
                    children: (0, jsxRuntime.jsxs)("div", {
                      className: (0, classNamesModule.Z)(E().month, I === e && E().active, !(null === (t = s[k]) || void 0 === t ? void 0 : t[e]) && E().disabled),
                      children: [(0, jsxRuntime.jsx)("div", {
                        className: E().dash
                      }), (0, jsxRuntime.jsx)("div", {
                        className: E().text,
                        children: "0".concat(e).slice(-2)
                      })]
                    })
                  }, e);
                })
              })]
            }) : null, (0, jsxRuntime.jsx)("div", {
              className: E().floatingText,
              children: "GALLERY"
            }), (0, jsxRuntime.jsx)(c.I, {
              nodeRef: G,
              state: "".concat(k, ":").concat(I),
              dir: "vtc",
              children: (0, jsxRuntime.jsx)("div", {
                ref: G,
                className: E().infoAndList,
                children: "portrait" === S ? (0, jsxRuntime.jsx)(jsxRuntime.Fragment, {
                  children: (0, jsxRuntime.jsxs)("div", {
                    className: E().list,
                    children: [(0, jsxRuntime.jsx)(p.tq, {
                      className: E().swiper,
                      slidesPerView: 2,
                      modules: [b.Rv, b.LW],
                      freeMode: !0,
                      scrollbar: {
                        el: ".".concat(E().celebReview, " .").concat(E().scrollbar)
                      },
                      grabCursor: !0,
                      onSwiper: e => {
                        O.current = e;
                      },
                      children: (0, f.Z)(U, 2).map((e, t) => (0, jsxRuntime.jsx)(p.o5, {
                        children: (0, jsxRuntime.jsx)("div", {
                          className: E().items,
                          children: e.map((e, i) => {
                            var a;
                            return (0, jsxRuntime.jsxs)("div", {
                              className: (0, classNamesModule.Z)(E().item, 2 * t + i === D && E().active),
                              onClick: () => M(2 * t + i),
                              children: [(0, jsxRuntime.jsx)("img", {
                                className: E().img,
                                src: (null === (a = e.content.thumbnail) || void 0 === a ? void 0 : a.url) || e.content.resource.url,
                                alt: e.content.title
                              }), (0, jsxRuntime.jsx)("div", {
                                className: E().itemName,
                                children: e.content.title
                              }), (0, jsxRuntime.jsx)("div", {
                                className: E().tip,
                                children: "VIEW NOW"
                              })]
                            }, i);
                          })
                        })
                      }, t))
                    }), (0, jsxRuntime.jsx)("div", {
                      className: E().scrollbar
                    })]
                  })
                }) : (0, jsxRuntime.jsxs)(jsxRuntime.Fragment, {
                  children: [(0, jsxRuntime.jsx)("div", {
                    className: E().info,
                    children: (0, jsxRuntime.jsx)(c.I, {
                      nodeRef: P,
                      state: "".concat(D),
                      dir: "hrz",
                      children: (0, jsxRuntime.jsxs)("div", {
                        ref: P,
                        children: [(0, jsxRuntime.jsx)("div", {
                          className: E().title,
                          children: null == T ? void 0 : T.content.title
                        }), (0, jsxRuntime.jsx)("div", {
                          className: E().desc,
                          children: null == T ? void 0 : T.content.desc
                        })]
                      })
                    })
                  }), (0, jsxRuntime.jsxs)("div", {
                    className: E().list,
                    children: [(0, jsxRuntime.jsx)(p.tq, {
                      className: E().swiper,
                      slidesPerView: 4,
                      modules: [b.Rv],
                      freeMode: !0,
                      grabCursor: !0,
                      onSwiper: e => {
                        O.current = e;
                      },
                      children: U.map((e, t) => {
                        var i;
                        return (0, jsxRuntime.jsx)(p.o5, {
                          children: (0, jsxRuntime.jsx)("div", {
                            className: (0, classNamesModule.Z)(E().item, t === D && E().active),
                            onClick: () => M(t),
                            children: (0, jsxRuntime.jsx)("img", {
                              className: E().img,
                              src: (null === (i = e.content.thumbnail) || void 0 === i ? void 0 : i.url) || e.content.resource.url,
                              alt: e.content.title
                            })
                          })
                        }, t);
                      })
                    }), U.length > 4 ? (0, jsxRuntime.jsxs)(jsxRuntime.Fragment, {
                      children: [(0, jsxRuntime.jsx)("div", {
                        className: (0, classNamesModule.Z)(E().arrowLeft, D <= 0 && E().disabled),
                        onClick: () => M(e => (0, v.Z)(e - 1, 0, U.length - 1)),
                        children: (0, jsxRuntime.jsx)(A.PZ, {})
                      }), (0, jsxRuntime.jsx)("div", {
                        className: (0, classNamesModule.Z)(E().arrowRight, D >= U.length - 1 && E().disabled),
                        onClick: () => M(e => (0, v.Z)(e + 1, 0, U.length - 1)),
                        children: (0, jsxRuntime.jsx)(A.bI, {})
                      })]
                    }) : null]
                  })]
                })
              })
            })]
          }), (0, jsxRuntime.jsxs)("div", {
            className: E().closeBtn,
            onClick: C,
            children: [(0, jsxRuntime.jsx)("div", {
              className: E().icon,
              children: (0, jsxRuntime.jsx)(A.PZ, {})
            }), (0, jsxRuntime.jsxs)("div", {
              className: E().btnText,
              children: [(0, jsxRuntime.jsx)("div", {
                className: E().main,
                children: siteContentModule.f.common.goBack
              }), (0, jsxRuntime.jsx)("div", {
                className: E().sub,
                children: "GO BACK"
              })]
            })]
          }), (0, jsxRuntime.jsxs)("div", {
            className: (0, classNamesModule.Z)(E().fullViewer, H.visible && E().visible),
            children: [(0, jsxRuntime.jsx)(c.I, {
              nodeRef: W,
              state: H.visible + ":" + ((null == Y ? void 0 : null === (i = Y.content.thumbnail) || void 0 === i ? void 0 : i.url) || (null == Y ? void 0 : Y.content.resource.url) || ""),
              children: (0, jsxRuntime.jsx)("div", {
                ref: W,
                className: E().bg,
                style: {
                  backgroundImage: H.visible ? "url(".concat((null == Y ? void 0 : null === (a = Y.content.thumbnail) || void 0 === a ? void 0 : a.url) || (null == Y ? void 0 : Y.content.resource.url), ")") : void 0
                }
              })
            }), (0, jsxRuntime.jsx)("div", {
              className: E().bgMask
            }), (0, jsxRuntime.jsxs)("div", {
              className: E()._fullViewer,
              children: [(0, jsxRuntime.jsx)(c.I, {
                nodeRef: K,
                state: H.visible + ":" + ((null == Y ? void 0 : Y.content.resource.url) || ""),
                children: (0, jsxRuntime.jsx)("div", {
                  ref: K,
                  className: E().layer,
                  children: H.visible ? (0, jsxRuntime.jsxs)(jsxRuntime.Fragment, {
                    children: [(0, jsxRuntime.jsx)("div", {
                      className: E().primary,
                      children: (0, jsxRuntime.jsx)("img", {
                        className: E().img,
                        src: null == Y ? void 0 : Y.content.resource.url
                      })
                    }), (0, jsxRuntime.jsxs)("div", {
                      className: E().titleAndDateAndDesc,
                      children: [(0, jsxRuntime.jsxs)("div", {
                        className: E().titleAndDate,
                        children: [(0, jsxRuntime.jsx)("div", {
                          className: E().title,
                          children: null == Y ? void 0 : Y.content.title
                        }), (0, jsxRuntime.jsx)("div", {
                          className: E().date,
                          children: m()(null == Y ? void 0 : Y.content.displayTime).format("YYYY-MM-DD")
                        })]
                      }), (0, jsxRuntime.jsx)("div", {
                        className: E().desc,
                        children: null == Y ? void 0 : Y.content.desc
                      })]
                    })]
                  }) : null
                })
              }), "landscape" === S && U.length > 0 ? (0, jsxRuntime.jsxs)(jsxRuntime.Fragment, {
                children: [(0, jsxRuntime.jsx)("div", {
                  className: (0, classNamesModule.Z)(E().arrowLeft),
                  onClick: () => {
                    U[H.index - 1] ? F(e => ({
                      ...e,
                      index: H.index - 1
                    })) : F(e => ({
                      ...e,
                      index: U.length - 1
                    }));
                  },
                  children: (0, jsxRuntime.jsx)(A.PZ, {})
                }), (0, jsxRuntime.jsx)("div", {
                  className: (0, classNamesModule.Z)(E().arrowRight),
                  onClick: () => {
                    U[H.index + 1] ? F(e => ({
                      ...e,
                      index: H.index + 1
                    })) : F(e => ({
                      ...e,
                      index: 0
                    }));
                  },
                  children: (0, jsxRuntime.jsx)(A.bI, {})
                })]
              }) : null]
            }), "portrait" === S ? (0, jsxRuntime.jsxs)(jsxRuntime.Fragment, {
              children: [(0, jsxRuntime.jsx)("div", {
                className: E().floatingText,
                children: "GALLERY"
              }), (0, jsxRuntime.jsx)("div", {
                className: E().coordMark
              })]
            }) : null, (0, jsxRuntime.jsx)("div", {
              className: (0, classNamesModule.Z)("portrait" === S ? E().closeBtnPortrait : E().closeBtn),
              onClick: () => F(e => ({
                ...e,
                visible: !1
              })),
              children: "landscape" === S ? null : (0, jsxRuntime.jsxs)(jsxRuntime.Fragment, {
                children: [(0, jsxRuntime.jsx)("div", {
                  className: E().icon,
                  children: (0, jsxRuntime.jsx)(A.PZ, {})
                }), (0, jsxRuntime.jsxs)("div", {
                  className: E().btnText,
                  children: [(0, jsxRuntime.jsx)("div", {
                    className: E().main,
                    children: siteContentModule.f.common.goBack
                  }), (0, jsxRuntime.jsx)("div", {
                    className: E().sub,
                    children: "GO BACK"
                  })]
                })]
              })
            })]
          })]
        })
      });
    };
  var _ = webpackRequire(24216),
    C = webpackRequire.n(_),
    S = webpackRequire(2775),
    k = webpackRequire(10076),
    R = webpackRequire(17322),
    I = webpackRequire(60387),
    B = webpackRequire(16763),
    U = webpackRequire.n(B);
  let VideoHall = e => {
      var t, i;
      let {
          sectionActive: a,
          active: s,
          onReturn: u
        } = e,
        g = (0, d.R)(),
        [f, x] = (0, React.useState)({
          ready: !1,
          previewList: []
        });
      (0, React.useEffect)(() => {
        s && !f.ready && fetch("/api/archive/video?pageSize=".concat(6)).then(async e => {
          if (e.status >= 200 && e.status < 400) {
            let t = await e.json();
            if (0 === t.code && t.data) {
              let e = t.data;
              x(t => ({
                ...t,
                ready: !0,
                previewList: e.list
              }));
            } else console.error(t.msg);
          } else console.log(e.statusText);
        });
      }, [s]);
      let j = f.previewList,
        [N, E] = (0, React.useState)(0),
        y = j[N] || null;
      (0, React.useEffect)(() => {
        var e;
        null === (e = _.current) || void 0 === e || e.slideTo(N - 1);
      }, [N]);
      let _ = (0, React.useRef)(),
        B = (0, o.x)();
      (0, o.x)();
      let D = (0, o.x)(),
        [M, T] = (0, React.useState)({
          visible: !1,
          index: N
        });
      return (0, React.useEffect)(() => {
        a || T(e => ({
          ...e,
          visible: !1
        }));
      }, [a]), (0, React.useEffect)(() => {
        E(0), T(e => ({
          ...e,
          visible: !1
        }));
      }, [g]), (0, jsxRuntime.jsx)(w.q, {
        children: (0, jsxRuntime.jsxs)("div", {
          className: (0, classNamesModule.Z)(U().videoHall, s && U().active),
          children: [(0, jsxRuntime.jsxs)("div", {
            className: U()._videoHall,
            children: [(0, jsxRuntime.jsx)(c.I, {
              nodeRef: B,
              state: "".concat((null == y ? void 0 : null === (t = y.content.previewSrc) || void 0 === t ? void 0 : t.url) || (null == y ? void 0 : y.content.videoSrc.url)),
              children: (0, jsxRuntime.jsxs)("div", {
                ref: B,
                className: U().preview,
                children: [y ? (0, jsxRuntime.jsxs)(jsxRuntime.Fragment, {
                  children: [(0, jsxRuntime.jsxs)("div", {
                    className: U().videoWrapper,
                    onClick: "portrait" === g ? () => T({
                      visible: !0,
                      index: N
                    }) : void 0,
                    children: [(0, jsxRuntime.jsx)(PreviewVideo, {
                      active: a && s && !M.visible,
                      className: U().video,
                      src: (null === (i = y.content.previewSrc) || void 0 === i ? void 0 : i.url) || y.content.videoSrc.url || "",
                      poster: y.content.coverSrc.url || ""
                    }), (0, jsxRuntime.jsx)("div", {
                      className: U().playBtn,
                      onClick: () => T({
                        visible: !0,
                        index: N
                      }),
                      children: (0, jsxRuntime.jsx)(R._u, {})
                    })]
                  }), "portrait" === g && (0, jsxRuntime.jsxs)("div", {
                    className: U().info,
                    children: [(0, jsxRuntime.jsx)("div", {
                      className: U().title,
                      children: y.content.title
                    }), (0, jsxRuntime.jsxs)("div", {
                      className: U().cateAndDate,
                      children: [(0, jsxRuntime.jsx)("div", {
                        className: U().cate,
                        children: (0, I.L)(y.content.cate)
                      }), (0, jsxRuntime.jsx)("div", {
                        className: U().date,
                        children: m()(y.content.displayTime).format("YYYY // MM / DD")
                      })]
                    }), (0, jsxRuntime.jsx)("div", {
                      className: U().intro,
                      children: y.content.intro
                    })]
                  })]
                }) : null, "portrait" === g && (0, jsxRuntime.jsx)("div", {
                  className: U().officialHref,
                  children: siteContentModule.f.links.host.toUpperCase()
                })]
              })
            }), (0, jsxRuntime.jsx)("div", {
              className: U().floatingText,
              children: "VIDEO"
            }), (0, jsxRuntime.jsxs)("div", {
              ref: D,
              className: U().infoAndList,
              children: [(0, jsxRuntime.jsxs)("div", {
                className: U().list,
                children: [(0, jsxRuntime.jsx)(p.tq, {
                  className: U().swiper,
                  slidesPerView: "landscape" === g ? 4 : 3,
                  modules: [b.Rv, b.LW],
                  freeMode: !0,
                  grabCursor: !0,
                  onSwiper: e => {
                    _.current = e;
                  },
                  scrollbar: {
                    el: ".".concat(U().videoHall, " .").concat(U().scrollbar)
                  },
                  children: j.map((e, t) => (0, jsxRuntime.jsx)(p.o5, {
                    children: (0, jsxRuntime.jsx)("div", {
                      className: (0, classNamesModule.Z)(U().item, t === N && U().active),
                      onClick: () => {
                        N === t ? T({
                          visible: !0,
                          index: t
                        }) : E(t);
                      },
                      children: (0, jsxRuntime.jsx)("img", {
                        className: U().img,
                        src: e.content.coverSrc.url,
                        alt: e.content.title
                      })
                    })
                  }, t))
                }), (0, jsxRuntime.jsx)("div", {
                  className: U().scrollbar
                }), "landscape" === g && j.length > 1 ? (0, jsxRuntime.jsxs)(jsxRuntime.Fragment, {
                  children: [(0, jsxRuntime.jsx)("div", {
                    className: (0, classNamesModule.Z)(U().arrowLeft, N <= 0 && U().disabled),
                    onClick: () => E(e => (0, v.Z)(e - 1, 0, j.length - 1)),
                    children: (0, jsxRuntime.jsx)(A.PZ, {})
                  }), (0, jsxRuntime.jsx)("div", {
                    className: (0, classNamesModule.Z)(U().arrowRight, N >= j.length - 1 && U().disabled),
                    onClick: () => E(e => (0, v.Z)(e + 1, 0, j.length - 1)),
                    children: (0, jsxRuntime.jsx)(A.bI, {})
                  })]
                }) : null]
              }), "portrait" === g && (0, jsxRuntime.jsxs)(C(), {
                className: U().viewListBtn,
                href: "/archive/video",
                target: "_blank",
                prefetch: !1,
                children: [(0, jsxRuntime.jsx)("div", {
                  className: U().text,
                  children: "READ MORE"
                }), (0, jsxRuntime.jsx)("div", {
                  className: U().icon,
                  children: (0, jsxRuntime.jsx)(A.bI, {})
                })]
              })]
            })]
          }), (0, jsxRuntime.jsxs)("div", {
            className: U().buttonGroup,
            children: [(0, jsxRuntime.jsxs)("div", {
              className: (0, classNamesModule.Z)(U().button, U().returnBtn),
              onClick: () => {
                u();
              },
              children: [(0, jsxRuntime.jsx)("div", {
                className: U().icon,
                children: (0, jsxRuntime.jsx)(k.ZY, {})
              }), (0, jsxRuntime.jsxs)("div", {
                className: U().btnText,
                children: [(0, jsxRuntime.jsx)("div", {
                  className: U().main,
                  children: siteContentModule.f.common.goBack
                }), (0, jsxRuntime.jsx)("div", {
                  className: U().sub,
                  children: "GO BACK"
                })]
              })]
            }), "landscape" === g ? (0, jsxRuntime.jsxs)(C(), {
              className: (0, classNamesModule.Z)(U().button, U().viewListBtn),
              href: "/archive/video",
              target: "_blank",
              prefetch: !1,
              children: [(0, jsxRuntime.jsxs)("div", {
                className: U().btnText,
                children: [(0, jsxRuntime.jsx)("div", {
                  className: U().main,
                  children: siteContentModule.f.pageVideo.pageTitle
                }), (0, jsxRuntime.jsx)("div", {
                  className: U().sub,
                  children: "ALL VIDEOS"
                })]
              }), (0, jsxRuntime.jsx)("div", {
                className: U().icon,
                children: (0, jsxRuntime.jsx)(k.QD, {})
              })]
            }) : null]
          }), (0, jsxRuntime.jsx)(S.Z, {
            list: j.map(e => e.content),
            activeIndex: M.index,
            visible: a && M.visible,
            onClose: () => T(e => ({
              ...e,
              visible: !1
            }))
          })]
        })
      });
    },
    PreviewVideo = e => {
      let {
          active: t,
          className: a,
          src: s,
          poster: l
        } = e,
        c = (0, React.useRef)(null);
      return (0, React.useEffect)(() => {
        let e = c.current;
        if (e) {
          if (e.setAttribute("x5-video-player-type", "h5"), e.setAttribute("x-webkit-airplay", "true"), e.setAttribute("webkit-playsinline", "true"), /\.m3u8(\?|$)/.test(s)) {
            if (e.canPlayType("application/vnd.apple.mpegurl")) {
              if (e.src = s, t) {
                let listener = function () {
                  e.play().catch(browserHelpers.ZT);
                };
                return e.addEventListener("loadedmetadata", listener), () => {
                  e.removeEventListener("loadedmetadata", listener);
                };
              }
            } else {
              let a;
              return webpackRequire.e(549).then(webpackRequire.bind(webpackRequire, 10535)).then(i => {
                let {
                  default: n
                } = i;
                n.isSupported() ? ((a = new n()).loadSource(s), a.attachMedia(e), t && a.on(n.Events.MEDIA_ATTACHED, function () {
                  e.play().catch(browserHelpers.ZT);
                })) : console.warn("HLS not supported.");
              }), () => {
                var e;
                null == a || null === (e = a.destroy) || void 0 === e || e.call(a);
              };
            }
          } else if (e.src = s, t) {
            let listener = function () {
              e.play().catch(browserHelpers.ZT);
            };
            return e.addEventListener("loadedmetadata", listener), () => {
              e.removeEventListener("loadedmetadata", listener);
            };
          }
        }
      }, [null]), (0, React.useEffect)(() => {
        if (t) {
          var e, i;
          (null === (e = c.current) || void 0 === e ? void 0 : e.src) && (null === (i = c.current) || void 0 === i || i.play());
        } else {
          let e = setTimeout(() => {
            var e;
            null === (e = c.current) || void 0 === e || e.pause();
          }, 1e3);
          return () => {
            clearTimeout(e);
          };
        }
      }, [t]), (0, jsxRuntime.jsx)("video", {
        ref: c,
        className: a,
        poster: l,
        preload: "metadata",
        playsInline: !0,
        muted: !0,
        loop: !0,
        disablePictureInPicture: !0
      });
    };
  var D = webpackRequire(47638),
    M = webpackRequire.n(D);
  (a = s || (s = {}))[a.HOME = 0] = "HOME", a[a.CELEB_REVIEW = 1] = "CELEB_REVIEW", a[a.VIDEO_HALL = 2] = "VIDEO_HALL";
  let SectionMediaClient = e => {
      let {
          index: t,
          galleryData: i
        } = e,
        {
          sectionPointer: a
        } = (0, sectionStateModule.S)(),
        s = t === a,
        [c, A] = (0, React.useState)(0);
      return (0, jsxRuntime.jsxs)("div", {
        className: (0, classNamesModule.Z)(M().container, s && M().active),
        children: [(0, jsxRuntime.jsx)("div", {
          className: M().bgMask
        }), (0, jsxRuntime.jsx)(Home, {
          active: 0 === c,
          setView: A
        }), (0, jsxRuntime.jsx)(CelebView, {
          galleryData: i,
          active: 1 === c,
          onReturn: () => A(0)
        }), (0, jsxRuntime.jsx)(VideoHall, {
          sectionActive: s,
          active: 2 === c,
          onReturn: () => A(0)
        })]
      });
    },
    Home = e => {
      let {
          active: t,
          setView: i
        } = e,
        [a, s] = (0, React.useState)(-1),
        u = T[a],
        g = (0, o.x)(),
        m = (0, d.R)();
      return (0, jsxRuntime.jsxs)("div", {
        className: (0, classNamesModule.Z)(M().home, t && M().active),
        children: [(0, jsxRuntime.jsx)("div", {
          className: M().blurHandler,
          onClick: () => s(-1)
        }), (0, jsxRuntime.jsxs)("div", {
          className: M()._home,
          children: [(0, jsxRuntime.jsx)("div", {
            className: M().blurHandler,
            onClick: () => s(-1)
          }), (0, jsxRuntime.jsx)("div", {
            className: M().mainStage,
            children: T.map((e, t) => (0, jsxRuntime.jsxs)("div", {
              className: (0, classNamesModule.Z)(M().moduleItem, a === t && M().active),
              style: {
                width: (100 * e.activeImageStyles.width / 1027).toFixed(4) + "%",
                height: (100 * e.activeImageStyles.height / 814).toFixed(4) + "%",
                left: (100 * e.activeImageStyles.left / 1027).toFixed(4) + "%",
                top: (100 * e.activeImageStyles.top / 814).toFixed(4) + "%"
              },
              onClick: () => {
                a === t ? (e.href && window.open(e.href, "_blank"), e.view && i(e.view)) : s(t);
              },
              children: [(0, jsxRuntime.jsx)("div", {
                className: M().blockOne,
                style: {
                  left: (100 * e.blockOne.left / e.activeImageStyles.width).toFixed(4) + "%",
                  top: (100 * e.blockOne.top / e.activeImageStyles.height).toFixed(4) + "%"
                }
              }), (0, jsxRuntime.jsx)("div", {
                className: M().blockTwo,
                style: {
                  left: (100 * e.blockTwo.left / e.activeImageStyles.width).toFixed(4) + "%",
                  top: (100 * e.blockTwo.top / e.activeImageStyles.height).toFixed(4) + "%"
                }
              }), (0, jsxRuntime.jsx)("img", {
                className: M().moduleImg,
                src: e.activeImage,
                alt: ""
              }), !!m && (0, jsxRuntime.jsxs)("div", {
                className: M().title,
                style: {
                  left: (100 * ("portrait" === m ? e.titleStylesPortrait.left : e.titleStyles.left) / e.activeImageStyles.width).toFixed(4) + "%",
                  top: (100 * ("portrait" === m ? e.titleStylesPortrait.top : e.titleStyles.top) / e.activeImageStyles.height).toFixed(4) + "%"
                },
                children: [(0, jsxRuntime.jsx)("div", {
                  className: M().box
                }), e.key]
              }), (0, jsxRuntime.jsxs)("div", {
                className: M().logo,
                style: {
                  width: e.logoStyles.width ? (100 * e.logoStyles.width / e.activeImageStyles.width).toFixed(4) + "%" : void 0,
                  left: (100 * e.logoStyles.left / e.activeImageStyles.width).toFixed(4) + "%",
                  top: (100 * e.logoStyles.top / e.activeImageStyles.height).toFixed(4) + "%"
                },
                children: [(0, jsxRuntime.jsx)("img", {
                  className: M().img,
                  src: e.logo,
                  alt: ""
                }), (0, jsxRuntime.jsx)("div", {
                  className: M().logoTitle,
                  children: e.key
                })]
              }), (0, jsxRuntime.jsx)("div", {
                className: M().hitBox,
                style: {
                  width: (100 * e.hotArea.width / e.activeImageStyles.width).toFixed(4) + "%",
                  height: (100 * e.hotArea.height / e.activeImageStyles.height).toFixed(4) + "%",
                  left: (100 * e.hotArea.left / e.activeImageStyles.width).toFixed(4) + "%",
                  top: (100 * e.hotArea.top / e.activeImageStyles.height).toFixed(4) + "%"
                }
              })]
            }, e.key))
          }), (0, jsxRuntime.jsxs)("div", {
            className: M().moduleTitle,
            children: [(0, jsxRuntime.jsx)("div", {
              className: M().title,
              children: "MEDIA"
            }), (0, jsxRuntime.jsx)("div", {
              className: M().moduleMenu,
              children: T.map((e, t) => {
                let {
                  key: i
                } = e;
                return (0, jsxRuntime.jsxs)("div", {
                  className: (0, classNamesModule.Z)(M().item, a === t && M().active),
                  onClick: () => s(t),
                  children: [(0, jsxRuntime.jsx)("div", {
                    className: M().checkbox
                  }), i]
                }, i);
              })
            })]
          }), (0, jsxRuntime.jsx)("div", {
            className: M().floatingText,
            children: "MEDIA"
          }), (0, jsxRuntime.jsx)("div", {
            className: M().info,
            children: (0, jsxRuntime.jsx)(c.I, {
              nodeRef: g,
              state: a,
              children: (0, jsxRuntime.jsxs)("div", {
                ref: g,
                children: [(0, jsxRuntime.jsx)("div", {
                  className: M().subtitle,
                  children: (null == u ? void 0 : u.key) || "MEDIA"
                }), (0, jsxRuntime.jsx)("div", {
                  className: M().title,
                  children: u && siteContentModule.f.media.infoMap[u.key].title || siteContentModule.f.media.infoMap["ABOUT TERRA"].title
                }), (0, jsxRuntime.jsxs)("div", {
                  className: M().desc,
                  children: [(0, jsxRuntime.jsx)("div", {
                    className: M().mainText,
                    children: u && siteContentModule.f.media.infoMap[u.key].desc || siteContentModule.f.media.tip
                  }), (0, jsxRuntime.jsx)("div", {
                    className: M().subText,
                    children: "HTTPS://19532mechcat.github.io/"
                  })]
                })]
              })
            })
          }), (0, jsxRuntime.jsxs)("div", {
            className: (0, classNamesModule.Z)(M().detailBtn, -1 !== a ? M().visible : M().hidden),
            onClick: () => {
              let e = T[a];
              e && (e.href && window.open(e.href, "_blank"), e.view && i(e.view));
            },
            children: [(0, jsxRuntime.jsxs)("div", {
              children: [(0, jsxRuntime.jsx)("div", {
                className: M().mainText,
                children: siteContentModule.f.common.viewDetail
              }), (0, jsxRuntime.jsx)("div", {
                className: M().subText,
                children: "READ MORE"
              })]
            }), (0, jsxRuntime.jsx)("div", {
              className: M().icon,
              children: (0, jsxRuntime.jsx)(A.bI, {})
            })]
          })]
        })]
      });
    },
    T = [{
      key: "MONSTER SIREN",
      activeImage: webpackRequire(9037).Z.src,
      activeImageStyles: {
        width: 230,
        height: 279,
        left: 117,
        top: 267
      },
      logo: webpackRequire(20272).Z.src,
      logoStyles: {
        width: 105,
        left: 188,
        top: 218
      },
      titleStyles: {
        left: 134,
        top: 242
      },
      titleStylesPortrait: {
        left: 120,
        top: 270
      },
      hotArea: {
        left: 0,
        top: 0,
        width: 230,
        height: 279
      },
      blockOne: {
        left: -52,
        top: 24
      },
      blockTwo: {
        left: 6,
        top: 84
      },
      href: siteContentModule.f.links.msr
    }, {
      key: "GALLERY",
      activeImage: webpackRequire(65018).Z.src,
      activeImageStyles: {
        width: 282,
        height: 425,
        left: 185,
        top: 5
      },
      logo: webpackRequire(28097).Z.src,
      logoStyles: {
        width: 0,
        left: 250,
        top: 240
      },
      titleStyles: {
        left: 204,
        top: 54
      },
      titleStylesPortrait: {
        left: 120,
        top: -20
      },
      hotArea: {
        left: 100,
        top: 98,
        width: 173,
        height: 320
      },
      blockOne: {
        left: -12,
        top: 0
      },
      blockTwo: {
        left: 68,
        top: 52
      },
      view: 1
    }, {
      key: "OPERATOR",
      activeImage: webpackRequire(99706).Z.src,
      activeImageStyles: {
        width: 365,
        height: 313,
        left: 606,
        top: 182
      },
      logo: webpackRequire(44216).Z.src,
      logoStyles: {
        width: 0,
        left: 276,
        top: 230
      },
      titleStyles: {
        left: 340,
        top: 285
      },
      titleStylesPortrait: {
        left: 132,
        top: -44
      },
      hotArea: {
        left: 0,
        top: 0,
        width: 365,
        height: 313
      },
      blockOne: {
        left: 124,
        top: -40
      },
      blockTwo: {
        left: 170,
        top: -10
      },
      href: "/archive/dynamicCompile"
    }, {
      key: "VIDEO",
      activeImage: webpackRequire(90608).Z.src,
      activeImageStyles: {
        width: 488,
        height: 318,
        left: 556,
        top: 510
      },
      logo: webpackRequire(17748).Z.src,
      logoStyles: {
        width: 66,
        left: 332,
        top: 204
      },
      titleStyles: {
        left: 446,
        top: 146
      },
      titleStylesPortrait: {
        left: 326,
        top: 244
      },
      blockOne: {
        left: 96,
        top: -24
      },
      blockTwo: {
        left: 142,
        top: 20
      },
      hotArea: {
        left: 64,
        top: 38,
        width: 360,
        height: 268
      },
      view: 2
    }];
});
