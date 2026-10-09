                                                                                                                 
                                                    
(function (module, exports, webpackRequire) {
  "use strict";

  webpackRequire.r(exports), webpackRequire.d(exports, {
    SectionInfoClient: function () {
      return SectionInfoClient;
    }
  });
  var jsxRuntime = webpackRequire(84548),
    React = webpackRequire(58036),
    classNamesModule = webpackRequire(18315),
    r = webpackRequire(40156),
    l = webpackRequire.n(r),
    c = webpackRequire(24216),
    A = webpackRequire.n(c),
    o = webpackRequire(10402),
    d = webpackRequire(91168),
    h = webpackRequire(9737),
    u = webpackRequire(50610),
    g = webpackRequire(29769),
    m = webpackRequire(16928),
    f = webpackRequire(70165),
    v = webpackRequire(62841),
    siteContentModule = webpackRequire(19174),
    sectionStateModule = webpackRequire(88204),
    p = webpackRequire(34417),
    w = webpackRequire.n(p);
  let SectionInfoClient = e => {
    let {
        index: t,
        bannerData: i,
        newsData: r
      } = e,
      {
        sectionPointer: c
      } = (0, sectionStateModule.S)(),
      p = t === c,
      [j, N] = (0, React.useState)(h.D[0]),
      E = r[j],
      y = (0, m.x)(),
      [_, C] = (0, React.useState)(0),
      S = i[_],
      k = (0, m.x)(),
      R = (0, f.R)(),
      I = (0, React.useRef)();
    return (0, React.useEffect)(() => {
      var e, t;
      p ? null === (e = I.current) || void 0 === e || e.autoplay.resume() : null === (t = I.current) || void 0 === t || t.autoplay.pause();
    }, [p]), (0, jsxRuntime.jsxs)("div", {
      className: (0, classNamesModule.Z)(w().container, p && w().active),
      children: [(0, jsxRuntime.jsx)("div", {
        className: w().bottomShadow
      }), (0, jsxRuntime.jsx)("div", {
        className: w().bannerContainer,
        children: (0, jsxRuntime.jsx)(d.tq, {
          grabCursor: !0,
          className: w().swiper,
          onSlideChange: e => C(e.activeIndex),
          modules: [o.pt, o.LW],
          autoplay: {
            delay: 5e3
          },
          scrollbar: {
            el: ".".concat(w().bannerScrollBar),
            enabled: !0,
            draggable: !0,
            hide: !1
          },
          onSwiper: e => {
            I.current = e;
          },
          children: i.map((e, t) => (0, jsxRuntime.jsx)(d.o5, {
            children: (0, jsxRuntime.jsx)("a", {
              className: w().imgWrapper,
              href: e.link.replace(siteContentModule.f.links.host, "/"),
              target: "_blank",
              onClick: () => {
                v.t.event("click", {
                  target: "banner:".concat(e.link)
                });
              },
              children: (0, jsxRuntime.jsx)("img", {
                className: w().img,
                src: e.pcCover,
                alt: ""
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
        className: w().globalMask1
      }), (0, jsxRuntime.jsx)("div", {
        className: w().globalMask2
      }), (0, jsxRuntime.jsxs)("div", {
        className: w().main,
        children: [(0, jsxRuntime.jsx)("div", {
          className: w().bgBlock
        }), (0, jsxRuntime.jsx)("div", {
          className: w().mainMask
        }), (0, jsxRuntime.jsxs)("div", {
          className: w().articlesContainer,
          children: [(0, jsxRuntime.jsx)("div", {
            className: w().floatingText,
            children: (0, jsxRuntime.jsx)("span", {
              className: w().text,
              children: "INfORMATION"
            })
          }), (0, jsxRuntime.jsx)("div", {
            className: w().currentBannerInfo,
            children: (0, jsxRuntime.jsx)(u.I, {
              state: _,
              dir: "hrz",
              nodeRef: k,
              children: (0, jsxRuntime.jsx)("div", {
                ref: k,
                children: S ? (0, jsxRuntime.jsxs)(jsxRuntime.Fragment, {
                  children: ["landscape" === R ? (0, jsxRuntime.jsx)("div", {
                    className: w().date,
                    children: l().unix(S.ts).format("YYYY // MM / DD")
                  }) : null, (0, jsxRuntime.jsx)("div", {
                    className: w().title,
                    children: S.title
                  }), "landscape" === R ? (0, jsxRuntime.jsx)("div", {
                    className: w().subtitle,
                    children: S.desc
                  }) : (0, jsxRuntime.jsx)("div", {
                    className: w().date,
                    children: l().unix(S.ts).format("YYYY // MM / DD")
                  }), (0, jsxRuntime.jsx)("div", {
                    className: w().comment,
                    children: "19532mechcat.github.io"
                  }), (0, jsxRuntime.jsxs)("a", {
                    className: w().detailBtn,
                    href: S.link.replace(siteContentModule.f.links.host, "/"),
                    target: "_blank",
                    onClick: () => {
                      v.t.event("click", {
                        target: "banner:".concat(S.link)
                      });
                    },
                    children: [(0, jsxRuntime.jsxs)("div", {
                      children: [(0, jsxRuntime.jsx)("div", {
                        className: w().mainText,
                        children: siteContentModule.f.common.readMore
                      }), (0, jsxRuntime.jsx)("div", {
                        className: w().subText,
                        children: "READ MORE"
                      })]
                    }), (0, jsxRuntime.jsx)("div", {
                      className: w().icon,
                      children: (0, jsxRuntime.jsx)(g.bI, {})
                    })]
                  })]
                }) : null
              })
            })
          }), (0, jsxRuntime.jsx)("div", {
            className: w().tabList,
            children: h.D.map(e => (0, jsxRuntime.jsxs)("div", {
              className: (0, classNamesModule.Z)(w().tabItem, j === e && w().active),
              onClick: () => N(e),
              children: [(0, jsxRuntime.jsx)("span", {
                children: {
                  LATEST: "Wetwork",
                  ANNOUNCEMENT: "Updates",
                  ACTIVITY: "Events",
                  NEWS: "More"
                }[e] ?? siteContentModule.f.info.category[e]
              }), (0, jsxRuntime.jsx)("div", {
                className: w().icon,
                children: (0, jsxRuntime.jsx)(g.bI, {})
              })]
            }, e))
          }), (0, jsxRuntime.jsx)(u.I, {
            state: j,
            dir: "hrz",
            nodeRef: y,
            children: (0, jsxRuntime.jsxs)("div", {
              className: w().newsList,
              ref: y,
              children: [E.map(e => (0, jsxRuntime.jsxs)(A(), {
                className: w().newsItem,
                href: "/news/".concat(e.cid),
                target: "_blank",
                onClick: () => {
                  v.t.event("click", {
                    target: "article:".concat(e.cid)
                  });
                },
                prefetch: !1,
                children: [(0, jsxRuntime.jsx)("div", {
                  className: w().cate,
                  children: siteContentModule.f.info.category[(0, h.o)(e.tab)]
                }), (0, jsxRuntime.jsxs)("div", {
                  className: w().newsInfo,
                  children: [(0, jsxRuntime.jsx)("div", {
                    className: w().date,
                    children: l().unix(e.displayTime).format("YYYY // MM / DD")
                  }), (0, jsxRuntime.jsx)("div", {
                    className: w().newsTitle,
                    children: e.title
                  })]
                })]
              }, e.cid)), (0, jsxRuntime.jsxs)(A(), {
                className: w().fullListBtn,
                href: "/news/",
                target: "_blank",
                onClick: () => {
                  v.t.event("click", {
                    target: "news_read_more_button"
                  });
                },
                prefetch: !1,
                children: [(0, jsxRuntime.jsx)("span", {
                  children: "READ MORE"
                }), (0, jsxRuntime.jsx)("div", {
                  className: w().icon,
                  children: (0, jsxRuntime.jsx)(g.bI, {})
                })]
              })]
            })
          })]
        })]
      })]
    });
  };
});
