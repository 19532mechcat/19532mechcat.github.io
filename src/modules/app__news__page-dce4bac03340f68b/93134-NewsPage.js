                                                                                                                      
                                                    
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
});
