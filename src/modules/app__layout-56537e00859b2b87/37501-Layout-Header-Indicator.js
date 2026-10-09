                                                                                                                   
                                                    
(function (module, exports, webpackRequire) {
  "use strict";

  webpackRequire.r(exports), webpackRequire.d(exports, {
    Layout: function () {
      return Layout;
    }
  });
  var jsxRuntime = webpackRequire(84548),
    React = webpackRequire(58036),
    classNamesModule = webpackRequire(18315);
  webpackRequire(93162), webpackRequire(56656);
  var c = webpackRequire(32840),
    r = webpackRequire(31476),
    l = webpackRequire(97349),
    o = webpackRequire(24216),
    d = webpackRequire.n(o),
    u = webpackRequire(34536),
    m = webpackRequire(70165),
    h = webpackRequire(62841),
    sectionStateModule = webpackRequire(88204),
    siteContentModule = webpackRequire(19174),
    browserHelpers = webpackRequire(81087),
    g = webpackRequire(30514),
    p = webpackRequire(47426),
    A = webpackRequire(31212),
    b = webpackRequire(79706);
  let _ = (0, p.e)((0, b.Ue)(() => ({
      wechatModalVisible: !1
    }))),
    j = {
      show: () => _.setState((0, A.Uy)(e => {
        e.wechatModalVisible = !0;
      })),
      hide: () => _.setState((0, A.Uy)(e => {
        e.wechatModalVisible = !1;
      }))
    };
  var N = webpackRequire(38138),
    k = webpackRequire.n(N),
    y = webpackRequire(54356),
    I = {
      src: "https://web.hycdn.cn/arknights/official/_next/static/media/wechat_avatar.4f536729.jpg"
    },
    w = webpackRequire(76591),
    S = webpackRequire.n(w);
  let WechatModal = e => {
    let {
        link: n
      } = e,
      {
        wechatModalVisible: t
      } = _(),
      [s, c] = (0, React.useState)(browserHelpers.gK);
    return (0, React.useEffect)(() => {
      n && function (e) {
        let {
          content: n,
          size: t = 200,
          mainColor: i = "#000",
          subColor: a = "#fff",
          logo: s,
          logoSize: c = 60
        } = e;
        return new Promise(e => {
          let r = k()(n),
            l = document.createElement("canvas");
          l.width = t, l.height = t;
          let o = l.getContext("2d"),
            d = r.modules,
            u = t / d.length,
            m = t / d.length;
          if (o) {
            for (let e = 0; e < d.length; ++e) {
              let n = d[e];
              for (let t = 0; t < n.length; ++t) {
                o.fillStyle = n[t] ? i : a;
                let s = Math.ceil((t + 1) * u) - Math.floor(t * u),
                  c = Math.ceil((e + 1) * m) - Math.floor(e * m);
                o.fillRect(Math.round(t * u), Math.round(e * m), s, c);
              }
            }
            if (s) {
              let n = new Image();
              n.onload = () => {
                o.drawImage(n, (t - c) / 2, (t - c) / 2, c, c), e(l);
              }, n.onerror = () => {
                e(l);
              }, n.crossOrigin = "Anonymous", n.src = "".concat(s);
              return;
            }
          }
          e(l);
        });
      }({
        content: n,
        logo: I.src,
        logoSize: 75
      }).then(e => c(e.toDataURL()));
    }, [n]), (0, jsxRuntime.jsxs)(y.u, {
      visible: t,
      onClose: j.hide,
      layerClassName: S().container,
      children: [(0, jsxRuntime.jsxs)("div", {
        className: S().main,
        children: [(0, jsxRuntime.jsxs)("div", {
          className: S().header,
          children: [(0, jsxRuntime.jsx)("img", {
            src: I.src,
            alt: "",
            crossOrigin: "anonymous"
          }), (0, jsxRuntime.jsxs)("div", {
            children: ["OFFICIAL", (0, jsxRuntime.jsx)("br", {}), "WECHAT."]
          })]
        }), (0, jsxRuntime.jsx)("div", {
          className: S().body,
          children: (0, jsxRuntime.jsx)("img", {
            src: s,
            alt: ""
          })
        }), (0, jsxRuntime.jsx)("div", {
          className: S().footer,
          children: siteContentModule.f.common.wechatQrcodeTip
        })]
      }), (0, jsxRuntime.jsx)("div", {
        className: S().closeBtn,
        onClick: j.hide
      })]
    });
  };
  var C = webpackRequire(13426),
    layoutContextModule = webpackRequire(25628),
    sectionRegistryModule = webpackRequire(20202),
    P = webpackRequire(2374),
    T = webpackRequire.n(P);
  let R = {
      index: "INDEX",
      information: "INFORMATION",
      operator: "TEAM MEMBERS",
      world: "RESOURCES",
      media: "MEDIA",
      more: "MORE",
      customerService: ""
    },
    HeaderNav = e => {
      let {} = e,
        {
          sectionPointer: n
        } = (0, sectionStateModule.S)(),
        t = (0, C.usePathname)(),
        {
          scrollBlocked: a
        } = (0, layoutContextModule.l)();
      return (0, jsxRuntime.jsx)("div", {
        className: T().container,
        children: sectionRegistryModule.$.map((e, c) => (0, jsxRuntime.jsxs)(d(), {
          className: (0, classNamesModule.Z)(T().item, ("/" === t ? n === c : /^\/news(\/|$)/.test(t) && "information" === e.path || /^\/archive(\/|$)/.test(t) && "media" === e.path) && T().active),
          href: "/#".concat(e.path),
          onClick: () => {
            (0, sectionStateModule.p)(e => -1 === e ? e : c), "/" !== t && (a.current = !0);
          },
          prefetch: !1,
          children: [(0, jsxRuntime.jsx)("div", {
            className: T().subtitle,
            children: {
              index: "INDEX",
              information: "INFORMATION",
              operator: "TEAM MEMBERS",
              world: "RESOURCES",
              media: "MEDIA",
              more: "MORE",
              customerService: ""
            }[e.path]
          }), (0, jsxRuntime.jsx)("div", {
            className: T().title,
            children: siteContentModule.f.sectionTitle[e.path]
          })]
        }, e.path))
      });
    },
    MenuNav = e => {
      let {
          active: n,
          onItemClick: t
        } = e,
        {
          sectionPointer: a
        } = (0, sectionStateModule.S)(),
        c = (0, C.usePathname)(),
        {
          scrollBlocked: r
        } = (0, layoutContextModule.l)();
      return (0, jsxRuntime.jsxs)("div", {
        className: (0, classNamesModule.Z)(T().menuNav, n && T().active),
        children: [sectionRegistryModule.$.map((e, n) => (0, jsxRuntime.jsxs)(d(), {
          className: (0, classNamesModule.Z)(T().item, ("/" === c ? a === n : /^\/news(\/|$)/.test(c) && "information" === e.path || /^\/archive(\/|$)/.test(c) && "media" === e.path) && T().active),
          style: {
            transitionDelay: 70 * n + "ms"
          },
          href: "/#".concat(e.path),
          onClick: () => {
            null == t || t(n), (0, sectionStateModule.p)(e => -1 === e ? e : n), "/" !== c && (r.current = !0);
          },
          prefetch: !1,
          children: [(0, jsxRuntime.jsx)("div", {
            className: T().subtitle,
            children: {
              index: "INDEX",
              information: "INFORMATION",
              operator: "TEAM MEMBERS",
              world: "RESOURCES",
              media: "MEDIA",
              more: "MORE",
              customerService: ""
            }[e.path]
          }), (0, jsxRuntime.jsx)("div", {
            className: T().title,
            children: siteContentModule.f.sectionTitle[e.path]
          })]
        }, e.path)), (0, jsxRuntime.jsxs)("a", {
          className: (0, classNamesModule.Z)(T().item),
          style: {
            transitionDelay: 70 * sectionRegistryModule.$.length + "ms"
          },
          href: siteContentModule.f.links.csCenter,
          target: "_blank",
          children: [(0, jsxRuntime.jsx)("div", {
            className: T().subtitle,
            children: ""
          }), (0, jsxRuntime.jsx)("div", {
            className: T().title,
            children: siteContentModule.f.sectionTitle.customerService
          })]
        })]
      });
    };
  var O = webpackRequire(86058),
    B = webpackRequire(11745);
  let useEnableSound = () => {
    let e = (0, B.cT)(),
      n = (0, C.usePathname)();
    (0, React.useEffect)(() => {
      if ("/" === n) {
        let listener = () => {
          B.cT.getState().enabled && (O.q.play(), document.removeEventListener("click", listener));
        };
        return document.addEventListener("click", listener), () => document.removeEventListener("click", listener);
      }
      (0, B.GP)();
    }, [null]), (0, React.useEffect)(() => e.enabled ? () => {
      O.q.pause();
    } : () => {
      O.q.play();
    }, [e.enabled]);
  };
  var L = webpackRequire(29769),
    Z = webpackRequire(83961);
  let IconBilibiliSvg = e => {
    let {
      children: n,
      ...t
    } = e;
    return (0, jsxRuntime.jsx)("svg", {
      viewBox: "0 0 43 20",
      ...t,
      children: (0, jsxRuntime.jsx)("use", {
        xlinkHref: "#".concat(Z.b.iconBilibili)
      })
    });
  };
  var U = webpackRequire(72206);
  let IconSocialSvg = e => {
      let {
        children: n,
        ...t
      } = e;
      return (0, jsxRuntime.jsx)("svg", {
        viewBox: "0 0 27 35",
        ...t,
        children: (0, jsxRuntime.jsx)("use", {
          xlinkHref: "#".concat(Z.b.iconSocial)
        })
      });
    },
    IconSoundSvg = e => {
      let {
        children: n,
        ...t
      } = e;
      return (0, jsxRuntime.jsx)("svg", {
        viewBox: "0 0 30 34",
        ...t,
        children: (0, jsxRuntime.jsx)("use", {
          xlinkHref: "#".concat(Z.b.iconSound)
        })
      });
    },
    IconSpeakerSvg = e => {
      let {
        children: n,
        ...t
      } = e;
      return (0, jsxRuntime.jsx)("svg", {
        viewBox: "0 0 512 407.6",
        ...t,
        children: (0, jsxRuntime.jsxs)("g", {
          fillRule: "evenodd",
          fill: "currentColor",
          children: [(0, jsxRuntime.jsx)("path", {
            d: "M0 153.7c5-12.6 14.2-17.8 27.7-17.4 19.3.5 38.7 0 58 .1a12.3 12.3 0 008.6-3q60.2-50.1 120.4-99.9c13.4-11.2 28.6-10.3 37.6 2.3 4 5.8 4.6 12.4 4.6 19.1.1 22.8.1 45.7.1 68.5q0 116.4-.1 232.9c0 6.7-.1 13.4-3.8 19.4-7.5 12.2-23.1 15.2-34.8 6.2s-25-20.4-37.5-30.7q-43.5-36-86.9-72.1c-2.4-2-5-2.4-7.9-2.4H29.5a59.8 59.8 0 01-11.9-1c-9.1-2.2-14.4-8.6-17.6-17zM512 228.7c-1.7 14.4-3.5 28.8-6.7 42.9a298.5 298.5 0 01-63 127.3c-8.5 10-22.7 11.6-32.8 3.8-12.9-9.9-16.2-23.7-8.1-35.3 6.4-9.4 13.8-18 19.9-27.6 20.5-32.3 33.2-67.3 37.4-105.4 7.2-64.4-8.8-122.8-46.7-175.2-4.2-5.8-9.1-11.1-13.5-16.7-7-8.9-7.8-19.4-2.3-28.4C402.8 3.5 413.7-1.7 424.5.5c5.9 1.2 10.2 4.6 14.1 9a295.5 295.5 0 0163.6 119.3 261.6 261.6 0 019.2 53.5 21 21 0 00.6 2.4z"
          }), (0, jsxRuntime.jsx)("path", {
            d: "M400.1 204.4c-.6 42.7-12.3 79.3-36.1 112-8.5 11.8-22.7 14.6-33.8 6.9-13.5-9.6-17.3-24-8.7-36.4 12.1-17.3 20.9-35.9 24.3-56.9 6.3-38.2-1.5-73.1-24.7-104.3-5.5-7.4-10.4-14.9-7.5-24.7s10.3-18.3 21.4-20.7 18.6 2.3 25.1 10.7a186 186 0 0139 96.4c.6 6.4.7 12.9 1 17"
          })]
        })
      });
    };
  var D = webpackRequire(70418);
  let IconUserSvg = e => {
      let {
        children: n,
        ...t
      } = e;
      return (0, jsxRuntime.jsx)("svg", {
        viewBox: "0 0 28 34",
        ...t,
        children: (0, jsxRuntime.jsx)("use", {
          xlinkHref: "#".concat(Z.b.iconUser)
        })
      });
    },
    IconWechatSvg = e => {
      let {
        children: n,
        ...t
      } = e;
      return (0, jsxRuntime.jsx)("svg", {
        viewBox: "0 0 1494 1210",
        ...t,
        children: (0, jsxRuntime.jsx)("use", {
          xlinkHref: "#".concat(Z.b.iconWechat)
        })
      });
    },
    IconWeiboSvg = e => {
      let {
        children: n,
        ...t
      } = e;
      return (0, jsxRuntime.jsx)("svg", {
        viewBox: "0 0 48 38",
        ...t,
        children: (0, jsxRuntime.jsx)("use", {
          xlinkHref: "#".concat(Z.b.iconWeibo)
        })
      });
    };
  var H = webpackRequire(64609),
    Y = webpackRequire(66079),
    V = webpackRequire(45296),
    F = webpackRequire.n(V);
  let Header = e => {
      var n, t, c, r;
      let {
          linkMap: l
        } = e,
        o = [{
          key: "skland",
          Icon: U.x,
          link: "https://www.skland.com/game/arknights"
        }, {
          key: "bilibili",
          Icon: IconBilibiliSvg,
          link: (null === (n = l["media.bilibili"]) || void 0 === n ? void 0 : n.value) || ""
        }, {
          key: "wechat_pub",
          Icon: IconWechatSvg,
          onClick: j.show
        }, {
          key: "weibo",
          Icon: IconWeiboSvg,
          link: (null === (t = l["media.weibo"]) || void 0 === t ? void 0 : t.value) || ""
        }, {
          key: "taptap",
          Icon: D.Y,
          link: (null === (c = l["media.taptap"]) || void 0 === c ? void 0 : c.value) || ""
        }];
      useEnableSound();
      let u = (0, B.cT)(),
        [m, h] = (0, React.useState)(!1),
        [f, p] = (0, React.useState)(!1),
        [A, b] = (0, React.useState)(!1);
      return (0, jsxRuntime.jsxs)(jsxRuntime.Fragment, {
        children: [(0, jsxRuntime.jsxs)("div", {
          className: (0, classNamesModule.Z)(F().container, A && F().menuVisible),
          children: [(0, jsxRuntime.jsx)(d(), {
            className: F().logo,
            href: "/#index",
            onClick: () => (0, sectionStateModule.p)(e => -1 === e ? e : 0),
            prefetch: !1,
            children: (0, jsxRuntime.jsx)(Y.L, {})
          }), (0, jsxRuntime.jsx)("div", {
            className: F().nav,
            children: (0, jsxRuntime.jsx)(HeaderNav, {})
          }), (0, jsxRuntime.jsxs)("div", {
            className: F().buttons,
            children: [(0, jsxRuntime.jsx)("div", {
              className: (0, classNamesModule.Z)(F().button, f && F().active),
              onClick: async () => {
                p(false);
                try {
                  if (navigator.share) {
                    await navigator.share({
                      title: document.title,
                      url: window.location.href
                    });
                  } else {
                    window.prompt("Copy this link to share:", window.location.href);
                  }
                } catch (err) {
                  if (err.name !== "AbortError") {
                    window.prompt("Copy this link to share:", window.location.href);
                  }
                }
              },
              children: (0, jsxRuntime.jsx)(IconSocialSvg, {})
            }), (0, jsxRuntime.jsx)("div", {
              className: (0, classNamesModule.Z)(F().button, F().switch, u.enabled && F().active),
              onClick: B.GC,
              children: (0, jsxRuntime.jsx)(IconSoundSvg, {})
            }), (0, jsxRuntime.jsx)("div", {
              className: (0, classNamesModule.Z)(F().button, m && F().active),
              onClick: () => h(!0),
              children: (0, jsxRuntime.jsx)(IconUserSvg, {})
            })]
          }), (0, jsxRuntime.jsx)("div", {
            className: (0, classNamesModule.Z)(F().menuBtn, A && F().active),
            onClick: () => b(browserHelpers.s2),
            children: (0, jsxRuntime.jsxs)("div", {
              className: F().icon,
              children: [(0, jsxRuntime.jsx)("div", {
                className: (0, classNamesModule.Z)(F().line, F().line1)
              }), (0, jsxRuntime.jsx)("div", {
                className: (0, classNamesModule.Z)(F().line, F().line2)
              }), (0, jsxRuntime.jsx)("div", {
                className: (0, classNamesModule.Z)(F().line, F().line3)
              })]
            })
          })]
        }), (0, jsxRuntime.jsxs)(g.q, {
          children: [(0, jsxRuntime.jsx)(Menu, {
            socialMediaList: o,
            visible: A,
            onClose: () => b(!1)
          }), (0, jsxRuntime.jsx)(SocialMediaPanel, {
            socialMediaList: o,
            visible: f,
            onClose: () => p(!1)
          }), (0, jsxRuntime.jsx)(UserPanel, {
            socialMediaList: o,
            visible: m,
            onClose: () => h(!1)
          })]
        }), (0, jsxRuntime.jsx)(WechatModal, {
          link: (null === (r = l["media.wechat"]) || void 0 === r ? void 0 : r.value) || ""
        })]
      });
    },
    Menu = e => {
      let {
        socialMediaList: n,
        visible: t,
        onClose: a
      } = e;
      return (0, jsxRuntime.jsx)("div", {
        className: (0, classNamesModule.Z)(F().menu, t ? F().visible : F().hidden),
        children: (0, jsxRuntime.jsxs)("div", {
          className: F()._menu,
          children: [(0, jsxRuntime.jsx)("div", {
            className: F().nav,
            children: (0, jsxRuntime.jsx)(MenuNav, {
              active: t,
              onItemClick: a
            })
          }), (0, jsxRuntime.jsxs)("div", {
            className: F().medias,
            children: [(0, jsxRuntime.jsx)("div", {
              className: F().divider,
              children: "TOOLBOX"
            }), (0, jsxRuntime.jsx)("div", {
              className: F().list,
              children: n.map((e, n) => e.link ? (0, jsxRuntime.jsx)("a", {
                className: (0, classNamesModule.Z)(F().mediaItem, F()[e.key]),
                target: "_blank",
                href: e.link,
                onClick: () => {
                  h.t.event("social_media_redirect", {
                    channel: e.key
                  });
                },
                children: (0, jsxRuntime.jsx)(e.Icon, {})
              }, n) : (0, jsxRuntime.jsx)("div", {
                className: (0, classNamesModule.Z)(F().mediaItem, F()[e.key]),
                onClick: () => {
                  var n;
                  null === (n = e.onClick) || void 0 === n || n.call(e);
                },
                children: (0, jsxRuntime.jsx)(e.Icon, {})
              }, n))
            })]
          })]
        })
      });
    },
    UserPanel = e => {
      let {
          socialMediaList: n,
          visible: o,
          onClose: d
        } = e,
        {
          account: v
        } = u.sZ.hooks.useAccount(),
        x = u.sZ.hooks.useShowLoginDialog(),
        g = (0, u.XK)(),
        [p, A] = (0, React.useState)("");
      (0, React.useEffect)(() => {
        v && A((0, l.Z)(v, "phone"));
      }, [v]);
      let b = (0, m.R)();
      return (0, jsxRuntime.jsxs)("div", {
        className: (0, classNamesModule.Z)(F().userPanel, o ? F().visible : F().hidden),
        children: [(0, jsxRuntime.jsx)("div", {
          className: F().mask,
          onClick: d
        }), (0, jsxRuntime.jsxs)("div", {
          className: F().panel,
          children: [(0, jsxRuntime.jsx)("div", {
            className: F().bg,
            children: (0, jsxRuntime.jsx)("div", {
              className: F().icon,
              children: (0, jsxRuntime.jsx)(H.M, {})
            })
          }), (0, jsxRuntime.jsxs)("div", {
            className: F().main,
            children: [(0, jsxRuntime.jsx)("div", {
              className: F().divider,
              children: "WELCOME"
            }), (0, jsxRuntime.jsxs)("div", {
              className: F().userInfo,
              children: [(0, jsxRuntime.jsxs)("div", {
                className: (0, classNamesModule.Z)(F().noAccountInfo, v ? F().hidden : F().visible),
                children: [(0, jsxRuntime.jsx)("img", {
                  className: F().mainImg,
                  src: webpackRequire(34861).Z.src,
                  alt: ""
                }), (0, jsxRuntime.jsx)("img", {
                  className: F().decText,
                  src: webpackRequire(87634).Z.src,
                  alt: ""
                }), (0, jsxRuntime.jsx)("div", {
                  className: F().subText,
                  children: "Please login."
                }), (0, jsxRuntime.jsx)("div", {
                  className: F().mainText,
                  children: siteContentModule.f.userPanel.pleaseLogin
                })]
              }), (0, jsxRuntime.jsxs)("div", {
                className: (0, classNamesModule.Z)(F().hasAccountInfo, v ? F().visible : F().hidden),
                children: [(0, jsxRuntime.jsx)("img", {
                  className: F().mainImg,
                  src: webpackRequire(77229).Z.src,
                  alt: ""
                }), (0, jsxRuntime.jsx)("div", {
                  className: F().displayAccount,
                  children: (0, jsxRuntime.jsx)("div", {
                    className: F().inner,
                    children: p
                  })
                }), (0, jsxRuntime.jsx)("div", {
                  className: F().mainText,
                  children: siteContentModule.f.userPanel.welcomeDoctor
                }), (0, jsxRuntime.jsxs)("div", {
                  className: F().broadcast,
                  children: [(0, jsxRuntime.jsx)("div", {
                    className: F().icon,
                    children: (0, jsxRuntime.jsx)(IconSpeakerSvg, {})
                  }), siteContentModule.f.userPanel.idle]
                })]
              })]
            }), "landscape" === b ? (0, jsxRuntime.jsxs)(jsxRuntime.Fragment, {
              children: [(0, jsxRuntime.jsx)("div", {
                className: F().divider,
                children: "TOOLBOX"
              }), (0, jsxRuntime.jsx)("div", {
                className: F().mediaList,
                children: (0, c.Z)(n, 3).map((e, n) => (0, jsxRuntime.jsxs)("div", {
                  className: F().row,
                  children: [e.map((e, n) => e.link ? (0, jsxRuntime.jsx)("a", {
                    className: (0, classNamesModule.Z)(F().mediaItem, F()[e.key]),
                    target: "_blank",
                    href: e.link,
                    onClick: () => {
                      h.t.event("social_media_redirect", {
                        channel: e.key
                      });
                    },
                    children: (0, jsxRuntime.jsx)(e.Icon, {})
                  }, n) : (0, jsxRuntime.jsx)("div", {
                    className: (0, classNamesModule.Z)(F().mediaItem, F()[e.key]),
                    onClick: () => {
                      var n;
                      null === (n = e.onClick) || void 0 === n || n.call(e);
                    },
                    children: (0, jsxRuntime.jsx)(e.Icon, {})
                  }, n)), (0, r.Z)(Array(3 - e.length), "").map((e, n) => (0, jsxRuntime.jsx)("div", {
                    className: F().placeholder
                  }, n))]
                }, n))
              })]
            }) : null]
          }), (0, jsxRuntime.jsxs)("div", {
            className: F().actions,
            children: [(0, jsxRuntime.jsxs)("div", {
              className: F().commonActions,
              children: ["landscape" === b && siteContentModule.f.links.csCenter ? (0, jsxRuntime.jsxs)("a", {
                className: F().action,
                target: "_blank",
                href: siteContentModule.f.links.csCenter,
                children: [(0, jsxRuntime.jsx)("span", {
                  className: F().text,
                  children: siteContentModule.f.userPanel.actions.customerService
                }), (0, jsxRuntime.jsx)(L.bI, {
                  className: F().icon
                })]
              }) : null, v ? (0, jsxRuntime.jsxs)(jsxRuntime.Fragment, {
                children: [(0, jsxRuntime.jsxs)("a", {
                  className: F().action,
                  target: "_blank",
                  href: siteContentModule.f.links.userCenter,
                  children: [(0, jsxRuntime.jsx)("span", {
                    className: F().text,
                    children: siteContentModule.f.userPanel.actions.userCenter
                  }), (0, jsxRuntime.jsx)(L.bI, {
                    className: F().icon
                  })]
                }), (0, jsxRuntime.jsxs)("div", {
                  className: F().action,
                  onClick: g,
                  children: [(0, jsxRuntime.jsx)("span", {
                    className: F().text,
                    children: siteContentModule.f.userPanel.actions.logout
                  }), (0, jsxRuntime.jsx)(L.bI, {
                    className: F().icon
                  })]
                })]
              }) : (0, jsxRuntime.jsxs)(jsxRuntime.Fragment, {
                children: [(0, jsxRuntime.jsxs)("div", {
                  className: F().action,
                  onClick: () => x(),
                  children: [(0, jsxRuntime.jsx)("span", {
                    className: F().text,
                    children: siteContentModule.f.userPanel.actions.login
                  }), (0, jsxRuntime.jsx)(L.bI, {
                    className: F().icon
                  })]
                }), (0, jsxRuntime.jsxs)("div", {
                  className: F().action,
                  onClick: () => x(),
                  children: [(0, jsxRuntime.jsx)("span", {
                    className: F().text,
                    children: siteContentModule.f.userPanel.actions.register
                  }), (0, jsxRuntime.jsx)(L.bI, {
                    className: F().icon
                  })]
                })]
              })]
            }), (0, jsxRuntime.jsx)("div", {
              className: F().closeBtn,
              onClick: d
            })]
          })]
        })]
      });
    },
    SocialMediaPanel = e => {
      let {
          socialMediaList: n,
          visible: t,
          onClose: a
        } = e,
        l = (0, m.R)(),
        o = "portrait" === l ? 3 : 2;
      return (0, jsxRuntime.jsxs)("div", {
        className: (0, classNamesModule.Z)(F().socialMediaPanel, t ? F().visible : F().hidden),
        children: [(0, jsxRuntime.jsx)("div", {
          className: F().mask,
          onClick: a
        }), (0, jsxRuntime.jsxs)("div", {
          className: F().panel,
          children: [(0, jsxRuntime.jsx)("div", {
            className: F().bg,
            children: (0, jsxRuntime.jsx)("div", {
              className: F().icon,
              children: (0, jsxRuntime.jsx)(H.M, {})
            })
          }), (0, jsxRuntime.jsxs)("div", {
            className: F().main,
            children: [(0, jsxRuntime.jsx)("div", {
              className: F().divider,
              children: "TOOLBOX"
            }), (0, jsxRuntime.jsx)("div", {
              className: F().mediaList,
              children: (0, c.Z)(n, o).map((e, n) => (0, jsxRuntime.jsxs)("div", {
                className: F().row,
                children: [e.map((e, n) => e.link ? (0, jsxRuntime.jsx)("a", {
                  className: (0, classNamesModule.Z)(F().mediaItem, F()[e.key]),
                  target: "_blank",
                  href: e.link,
                  onClick: () => {
                    h.t.event("social_media_redirect", {
                      channel: e.key
                    });
                  },
                  children: (0, jsxRuntime.jsx)(e.Icon, {})
                }, n) : (0, jsxRuntime.jsx)("div", {
                  className: (0, classNamesModule.Z)(F().mediaItem, F()[e.key]),
                  onClick: () => {
                    var n;
                    null === (n = e.onClick) || void 0 === n || n.call(e);
                  },
                  children: (0, jsxRuntime.jsx)(e.Icon, {})
                }, n)), (0, r.Z)(Array(o - e.length), "").map((e, n) => (0, jsxRuntime.jsx)("div", {
                  className: F().placeholder
                }, n))]
              }, n))
            })]
          }), "portrait" === l ? (0, jsxRuntime.jsxs)(jsxRuntime.Fragment, {
            children: [(0, jsxRuntime.jsx)(IconSocialSvg, {
              className: F().socialMediaButtonIcon
            }), (0, jsxRuntime.jsx)("div", {
              className: F().closeBtn,
              onClick: a
            })]
          }) : null]
        })]
      });
    };
  var animationModule = webpackRequire(51234),
    G = webpackRequire(16928),
    z = webpackRequire(75453),
    K = webpackRequire.n(z);
  let X = __MECHCAT_CONFIG_SECTION_LABELS__,
    formatIndex = e => e < 10 ? "0" + e : "" + e,
    Indicator = () => {
      let e = (0, C.usePathname)(),
        n = /^\/news(\/|$)/.test(e),
        t = /^\/archive(\/|$)/.test(e),
        c = /^\/protocol(\/|$)/.test(e),
        {
          sectionPointer: r
        } = (0, sectionStateModule.S)(),
        l = (0, React.useRef)(r),
        o = (0, G.x)(),
        d = (0, G.x)(),
        u = (0, G.x)(),
        m = (0, G.x)(),
        h = (0, G.x)();
      return (0, React.useEffect)(() => {
        let n = o.current,
          t = d.current,
          i = u.current,
          a = m.current,
          s = h.current,
          c = r;
        const indicatorHomePath = /^(?:\/(?:index\.html)?|\/19532main\/resourses(?:\/(?:index\.html)?)?)$/;
        if (indicatorHomePath.test(e || "") && (c = r) >= 0) {
          let e = Math.sign(c - l.current);
          l.current = c;
          let r = [{
            value: 0
          }, {
            value: 0
          }, {
            value: 0
          }];
          return animationModule.Z.timeline({
            targets: r,
            duration: 300,
            easing: "easeInOutQuad",
            delay: animationModule.Z.stagger(100),
            update() {
              t.style.opacity = r[0].value.toString(), i.style.opacity = r[1].value.toString(), a.style.opacity = r[1].value.toString(), s.style.opacity = r[2].value.toString();
            }
          }).add({
            value: [1, 0],
            update() {
              t.style.transform = "translateY(".concat(-e * (1 - r[0].value) * 2, "rem)"), i.style.transform = "translateY(".concat(-e * (1 - r[1].value) * 2, "rem)"), a.style.transform = "translateY(".concat(-e * (1 - r[1].value) * 2, "rem)"), s.style.transform = "translateY(".concat(-e * (1 - r[2].value) * 2, "rem)");
            }
          }).add({
            value: [0, 1],
            begin() {
              t.innerText = formatIndex(c), i.innerText = "// ".concat(formatIndex(c), " / ").concat(formatIndex(sectionRegistryModule.$.length - 1)), s.innerText = X[sectionRegistryModule.$[c].path].title, n.dataset.style = X[sectionRegistryModule.$[c].path].style;
            },
            update() {
              t.style.transform = "translateY(".concat(e * (1 - r[0].value) * 2, "rem)"), i.style.transform = "translateY(".concat(e * (1 - r[1].value) * 2, "rem)"), a.style.transform = "translateY(".concat(e * (1 - r[1].value) * 2, "rem)"), s.style.transform = "translateY(".concat(e * (1 - r[2].value) * 2, "rem)");
            }
          }).pause;
        }
      }, [e, r]), (0, jsxRuntime.jsxs)("div", {
        ref: o,
        className: (0, classNamesModule.Z)(K().container, n && K().newsPage, t && K().dynamicPage, c && K().protocolPage),
        children: [(0, jsxRuntime.jsx)("div", {
          ref: d,
          className: K().primaryMark,
          children: n ? "02" : t ? "05" : "00"
        }), (0, jsxRuntime.jsx)("div", {
          ref: u,
          className: K().combinationMark,
          children: n ? "// 01 / 05" : t ? "// 04 / 05" : "// 00 / 05"
        }), (0, jsxRuntime.jsx)("div", {
          ref: m,
          className: K().titleMark,
          children: "ARKNIGHTS"
        }), (0, jsxRuntime.jsx)("div", {
          ref: h,
          className: K().sectionMark,
          children: n ? "INFORMATION" : t ? "ABOUT TERRA" : "LOADING"
        })]
      });
    };
  var Q = webpackRequire(59560),
    $ = webpackRequire(2960);
  let PageFooter = () => {
      let e = (0, G.x)();
      return (0, React.useEffect)(() => {
        (0, h.M)(n => {
          e.current && "HG" === n.SDK_TYPE && n.AK.insertFooter(e.current);
        });
      }, [null]), (0, jsxRuntime.jsx)("div", {
        ref: e
      });
    },
    useMixBlendMode = () => {
      (0, React.useEffect)(() => {
        "mixBlendMode" in document.body.style && (document.body.dataset.mixBlendMode = "1");
      }, [null]);
    };
  var q = webpackRequire(31903),
    J = webpackRequire(50889),
    ee = webpackRequire.n(J);
  browserHelpers.s$ || Promise.all([webpackRequire.e(13), webpackRequire.e(979), webpackRequire.e(24), webpackRequire.e(710)]).then(webpackRequire.bind(webpackRequire, 30710)).then(e => {
    let {
      adapter: n
    } = e;
    n.init({
      hideParamsInUrl: !0
    }), (0, h.M)(e => {
      var t;
      null === (t = e.ETL.instance) || void 0 === t || t.setPageProperties({
        source: n.source.from
      });
    });
  });
  let Layout = e => {
    let {
      linkMap: n,
      children: t
    } = e;
    useMixBlendMode();
    let c = (0, G.x)(),
      r = (0, G.x)(),
      [l, o] = (0, React.useState)(!1),
      d = (0, React.useRef)(!1),
      u = (0, React.useCallback)(() => {
        l && l && o(!1);
      }, [l]),
      m = (0, React.useCallback)(() => {
        !l && (l || o(!0));
      }, [l]),
      h = (0, React.useCallback)(e => {
        d.current || (e.deltaY > 0 ? m() : u());
      }, [m, u]);
    (0, q.a)(() => {
      l ? c.current && (c.current.style.transform = "translateY(-".concat(r.current.clientHeight, "px)")) : c.current && (c.current.style.transform = "translateY(-0px)");
    }, [l, c]);
    let v = (0, React.useRef)(-1),
      f = (0, React.useRef)(-1);
    return (0, React.useEffect)(() => {
      let e = c.current,
        listener = e => {
          if (e.preventDefault(), !e.touches[0] || -1 === v.current) return;
          let n = e.touches[0].clientY - v.current,
            t = e.touches[0].clientX - f.current;
          Math.abs(t) > 50 ? (v.current = -1, f.current = -1) : Math.abs(n) > 50 && (n < 0 ? m() : n > 0 && u(), v.current = -1, f.current = -1);
        };
      return e.addEventListener("touchmove", listener, {
        passive: !1
      }), () => {
        e.removeEventListener("touchmove", listener);
      };
    }, [m, u]), (0, jsxRuntime.jsxs)(layoutContextModule.V.Provider, {
      value: {
        scrollBlocked: d
      },
      children: [(0, jsxRuntime.jsxs)("div", {
        ref: c,
        className: (0, classNamesModule.Z)(ee().container, {
          [ee().pageFooterVisible]: l
        }),
        onWheel: h,
        onTouchStart: e => {
          e.touches[0] && !d.current && (v.current = e.touches[0].clientY, f.current = e.touches[0].clientX);
        },
        onMouseLeave: () => {
          v.current = -1, f.current = -1;
        },
        children: [(0, jsxRuntime.jsx)("div", {
          className: ee().main,
          children: (0, jsxRuntime.jsxs)("div", {
            className: ee().maxWidthContainer,
            children: [t, (0, jsxRuntime.jsx)(Indicator, {}), (0, jsxRuntime.jsx)(Header, {
              linkMap: n
            })]
          })
        }), (0, jsxRuntime.jsx)("div", {
          ref: r,
          className: ee().pageFooter,
          children: (0, jsxRuntime.jsx)(PageFooter, {})
        })]
      }), (0, jsxRuntime.jsx)(Q.G, {}), (0, jsxRuntime.jsx)($.W, {})]
    });
  };
});
