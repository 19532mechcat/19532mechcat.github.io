                                                                                                                 
                                                    
(function (module, exports, webpackRequire) {
  "use strict";

  webpackRequire.r(exports), webpackRequire.d(exports, {
    SectionHomeClient: function () {
      return SectionHomeClient;
    }
  });
  var jsxRuntime = webpackRequire(84548),
    React = webpackRequire(58036),
    classNamesModule = webpackRequire(18315),
    r = webpackRequire(62841),
    l = webpackRequire(59560);
  webpackRequire(2960);
  var c = webpackRequire(83961);
  let IconAndroidSvg = e => {
      let {
        children: t,
        ...i
      } = e;
      return (0, jsxRuntime.jsx)("svg", {
        viewBox: "0 0 242.9 306.7",
        ...i,
        children: (0, jsxRuntime.jsx)("use", {
          xlinkHref: "#".concat(c.b.iconAndroid)
        })
      });
    },
    IconIOSSvg = e => {
      let {
        children: t,
        ...i
      } = e;
      return (0, jsxRuntime.jsx)("svg", {
        viewBox: "0 0 245.2 286.3",
        ...i,
        children: (0, jsxRuntime.jsx)("use", {
          xlinkHref: "#".concat(c.b.iconIOS)
        })
      });
    };
  var A = webpackRequire(72206),
    o = webpackRequire(70418),
    d = webpackRequire(73636),
    h = webpackRequire.n(d);
  let DownloadBtn_iOS = e => {
      let {
        className: t,
        ...i
      } = e;
      return (0, jsxRuntime.jsxs)("a", {
        className: (0, classNamesModule.Z)(h().button, h().iOS, t),
        target: "_blank",
        href: "https://discord.com/",
        onClick: () => {
          r.t.event("download", {
            channel: "ios"
          });
        },
        children: [(0, jsxRuntime.jsx)("div", {
          className: h().icon,
          children: (0, jsxRuntime.jsx)("img", {
            className: h().img,
            src: "./images/discord.png",
            alt: "Discord"
          })
        }), (0, jsxRuntime.jsxs)("div", {
          className: h().text,
          children: [(0, jsxRuntime.jsx)("div", {
            className: h().main,
            children: "Discord"
          }), (0, jsxRuntime.jsx)("div", {
            className: h().sub,
            children: "Link"
          })]
        })]
      });
    },
    DownloadBtn_Android = e => {
      let {
        className: t,
        ...i
      } = e;
      return (0, jsxRuntime.jsxs)("a", {
        className: (0, classNamesModule.Z)(h().button, h().Android, t),
        target: "_blank",
        href: "https://www.youtube.com/",
        onClick: () => {
          r.t.event("download", {
            channel: "android"
          });
        },
        children: [(0, jsxRuntime.jsx)("div", {
          className: h().icon,
          children: (0, jsxRuntime.jsx)("img", {
            className: h().img,
            src: "./images/youtube.png",
            alt: "Youtube"
          })
        }), (0, jsxRuntime.jsxs)("div", {
          className: h().text,
          children: [(0, jsxRuntime.jsx)("div", {
            className: h().main,
            children: "Youtube"
          }), (0, jsxRuntime.jsx)("div", {
            className: h().sub,
            children: "Link"
          })]
        })]
      });
    },
    DownloadBtn_TapTap = e => {
      let {
        className: t,
        ...s
      } = e;
      return (0, jsxRuntime.jsxs)("a", {
        className: (0, classNamesModule.Z)(h().button, h().TapTap, t),
        ...s,
        target: "_blank",
        rel: "noopener noreferrer",
        href: "https://www.twitter.com/",
        onClick: () => {
          r.t.event("download", {
            channel: "taptap"
          });
        },
        children: [(0, jsxRuntime.jsx)("div", {
          className: h().icon,
          children: (0, jsxRuntime.jsx)("img", {
            className: h().img,
            src: "./images/twitter.png",
            alt: "Twitter"
          })
        }), (0, jsxRuntime.jsxs)("div", {
          className: h().text,
          children: [(0, jsxRuntime.jsx)("div", {
            className: h().main,
            children: "Twitter"
          }), (0, jsxRuntime.jsx)("div", {
            className: h().sub,
            children: "Link"
          })]
        })]
      });
    },
    DownloadBtn_Emulator = e => {
      let {
        className: t,
        leidianLink: s,
        mumuLink: c,
        ...A
      } = e;
      return (0, jsxRuntime.jsxs)("a", {
        className: (0, classNamesModule.Z)(h().button, h().MuMu, t),
        href: "https://www.tdsb.on.ca/Find-your/Schools/schno/4116",
        target: "_blank",
        rel: "noopener noreferrer",
        children: [(0, jsxRuntime.jsx)("div", {
          className: h().icon,
          children: (0, jsxRuntime.jsx)("img", {
            className: h().img,
            src: "./images/school.png",
            alt: "School"
          })
        }), (0, jsxRuntime.jsx)("div", {
          className: h().text,
          children: (0, jsxRuntime.jsx)("div", {
            className: h().main,
            children: "Our School"
          })
        })]
      });
    },
    DownloadBtn_Windows = e => {
      let {
          className: t,
          ...s
        } = e,
        handleClick = async () => {
          (0, r.M)(e => {
            "HG" === e.SDK_TYPE && e.projects.ak.download({
              target: {
                url: "https://www.tiktok.com/",
                channel: "windows"
              }
            });
          });
        };
      return (0, jsxRuntime.jsx)(jsxRuntime.Fragment, {
        children: (0, jsxRuntime.jsxs)("button", {
          className: (0, classNamesModule.Z)(h().button, h().windows, t),
          ...s,
          onClick: handleClick,
          children: [(0, jsxRuntime.jsx)("div", {
            className: h().icon,
            children: (0, jsxRuntime.jsx)("img", {
              className: h().img,
              src: "./images/tiktok.png",
              alt: "tiktok"
            })
          }), (0, jsxRuntime.jsx)("div", {
            className: h().text,
            children: (0, jsxRuntime.jsx)("div", {
              className: h().main,
              children: "TikTok"
            })
          })]
        })
      });
    },
    SklandBtn = e => {
      let {
        className: t,
        ...s
      } = e;
      return (0, jsxRuntime.jsxs)("a", {
        className: (0, classNamesModule.Z)(h().button, h().skland, t),
        target: "_blank",
        href: "https://www.instagram.com/",
        onClick: () => {
          r.t.event("social_media_redirect", {
            channel: "skland"
          });
        },
        children: [(0, jsxRuntime.jsx)("div", {
          className: h().icon,
          children: (0, jsxRuntime.jsx)("img", {
            className: h().img,
            src: "./images/instagram.png",
            alt: "Instagram"
          })
        }), (0, jsxRuntime.jsx)("div", {
          className: h().text,
          children: (0, jsxRuntime.jsx)("div", {
            className: h().main,
            children: "Instagram"
          })
        })]
      });
    },
    RechargeBtn = e => {
      let {
        className: t,
        ...s
      } = e;
      return (0, jsxRuntime.jsxs)("a", {
        className: (0, classNamesModule.Z)(h().button, h().recharge, t),
        target: "_blank",
        href: "https://www.facebook.com",
        ...s,
        children: [(0, jsxRuntime.jsx)("div", {
          className: h().icon,
          children: (0, jsxRuntime.jsx)("img", {
            className: h().img,
            src: "./images/facebook.png",
            alt: "Facebook"
          })
        }), (0, jsxRuntime.jsx)("div", {
          className: h().text,
          children: (0, jsxRuntime.jsx)("div", {
            className: h().main,
            children: "Facebook"
          })
        })]
      });
    },
    DownloadBtn_mobile = e => {
      let {
        className: t,
        ...s
      } = e;
      return (0, jsxRuntime.jsxs)("a", {
        className: (0, classNamesModule.Z)(h().buttonMobile, h().default, t),
        target: "_blank",
        ...s,
        onClick: () => {
          r.t.event("download", {
            channel: "mobile"
          });
        },
        children: [(0, jsxRuntime.jsx)("div", {
          className: h().icon,
          children: (0, jsxRuntime.jsx)("img", {
            className: h().img,
            src: "./images/tiktok.png",
            alt: "TikTok"
          })
        }), (0, jsxRuntime.jsxs)("div", {
          className: h().text,
          children: [(0, jsxRuntime.jsx)("div", {
            className: h().main,
            children: "TikTok"
          }), (0, jsxRuntime.jsx)("div", {
            className: h().sub,
            children: "Link"
          })]
        })]
      });
    },
    DownloadBtn_TapTap_mobile = e => {
      let {
        className: t,
        ...i
      } = e;
      return (0, jsxRuntime.jsxs)("a", {
        className: (0, classNamesModule.Z)(h().buttonMobile, h().TapTap, t),
        target: "_blank",
        href: "https://x.com/?lang=en-ca",
        onClick: () => {
          r.t.event("download", {
            channel: "taptap"
          });
        },
        children: [(0, jsxRuntime.jsx)("div", {
          className: h().icon,
          children: (0, jsxRuntime.jsx)("img", {
            className: h().img,
            src: "./images/twitter.png",
            alt: "X"
          })
        }), (0, jsxRuntime.jsxs)("div", {
          className: h().text,
          children: [(0, jsxRuntime.jsx)("div", {
            className: h().main,
            children: "X / Twitter"
          }), (0, jsxRuntime.jsx)("div", {
            className: h().sub,
            children: "Link"
          })]
        })]
      });
    },
    SklandBtn_mobile = e => {
      let {
        className: t,
        ...i
      } = e;
      return (0, jsxRuntime.jsxs)("a", {
        className: (0, classNamesModule.Z)(h().buttonMobile, h().skland, t),
        target: "_blank",
        href: "https://www.instagram.com/",
        onClick: () => {
          r.t.event("social_media_redirect", {
            channel: "skland"
          });
        },
        children: [(0, jsxRuntime.jsx)("div", {
          className: h().icon,
          children: (0, jsxRuntime.jsx)("img", {
            className: h().img,
            src: "./images/instagram.png",
            alt: "Instagram"
          })
        }), (0, jsxRuntime.jsxs)("div", {
          className: h().text,
          children: [(0, jsxRuntime.jsx)("div", {
            className: h().main,
            children: "Instagram"
          }), (0, jsxRuntime.jsx)("div", {
            className: h().sub,
            children: "Link"
          })]
        })]
      });
    },
    RechargeBtn_mobile = e => {
      let {
        className: t,
        ...s
      } = e;
      return (0, jsxRuntime.jsxs)("a", {
        className: (0, classNamesModule.Z)(h().buttonMobile, h().recharge, t),
        target: "_blank",
        href: "https://www.facebook.com",
        children: [(0, jsxRuntime.jsx)("div", {
          className: h().icon,
          children: (0, jsxRuntime.jsx)("img", {
            className: h().img,
            src: "./images/facebook.png",
            alt: "Facebook"
          })
        }), (0, jsxRuntime.jsxs)("div", {
          className: h().text,
          children: [(0, jsxRuntime.jsx)("div", {
            className: h().main,
            children: "Facebook"
          }), (0, jsxRuntime.jsx)("div", {
            className: h().sub,
            children: "Link"
          })]
        })]
      });
    };
  var u = webpackRequire(86686),
    g = webpackRequire(89217),
    m = webpackRequire(16928),
    browserHelpers = webpackRequire(81087),
    v = webpackRequire(31903);
  let useDeviceType = () => {
    let [e, t] = (0, React.useState)(null);
    return (0, v.a)(() => {
      t((0, browserHelpers.Fq)() ? "mobile" : "desktop");
    }), e;
  };
  var x = webpackRequire(70165),
    siteContentModule = webpackRequire(19174),
    sectionStateModule = webpackRequire(88204),
    w = webpackRequire(35722),
    j = webpackRequire.n(w);
  let SectionHomeClient = e => {
    let {
        index: t,
        downloadLinkMap: r
      } = e,
      {
        sectionPointer: l
      } = (0, sectionStateModule.S)(),
      c = t === l,
      A = (0, m.x)(),
      o = (0, m.x)(),
      d = (0, x.R)();
    (0, React.useEffect)(() => {
      if (d) {
        let e = "landscape" === d ? g.L.homeVideo.desktop : g.L.homeVideo.mobile;
        "landscape" === d ? (o.current.width = 960, o.current.height = 540) : "portrait" === d && (o.current.width = 960, o.current.height = 540);
        let t = A.current;
        if (/\.m3u8$/.test(e)) {
          if (t.canPlayType("application/vnd.apple.mpegurl")) {
            t.src = e;
            let listener = function () {
              t.dataset.autoplay && t.play().catch(console.error);
            };
            return t.addEventListener("loadedmetadata", listener), () => {
              t.removeEventListener("loadedmetadata", listener);
            };
          }
          {
            let a;
            return webpackRequire.e(549).then(webpackRequire.bind(webpackRequire, 10535)).then(i => {
              let {
                default: s
              } = i;
              s.isSupported() ? ((a = new s()).loadSource(e), a.attachMedia(t), a.on(s.Events.MEDIA_ATTACHED, function () {
                t.dataset.autoplay && t.play().catch(console.error);
              })) : console.warn("HLS not supported.");
            }), () => {
              var e;
              null == a || null === (e = a.destroy) || void 0 === e || e.call(a);
            };
          }
        }
        {
          t.src = e;
          let listener = function () {
            t.dataset.autoplay && t.play().catch(browserHelpers.ZT);
          };
          return t.addEventListener("loadedmetadata", listener), () => {
            t.removeEventListener("loadedmetadata", listener);
          };
        }
      }
    }, [d]), (0, React.useEffect)(() => {
      let e = A.current;
      if (c) return e.dataset.autoplay = "1", e.src && e.play().catch(console.error), () => {
        e.dataset.autoplay = "", e.pause();
      };
    }, [c]), (0, React.useEffect)(() => {
      if (c) {
        let e;
        let t = /QQBrowser/i.test(navigator.userAgent),
          i = A.current,
          a = o.current,
          s = a.getContext("2d");
        if (s) {
          let n = NaN,
            updateCanvas = r => {
              n && !(r - n > 32.25806451612903) || (n = r, i.paused || t || s.drawImage(i, 0, 0, i.videoWidth, i.videoHeight, -0.2 * a.width, -0.2 * a.height, 1.4 * a.width, 1.4 * a.height)), e = requestAnimationFrame(updateCanvas);
            };
          e = requestAnimationFrame(updateCanvas);
        }
        return () => {
          cancelAnimationFrame(e);
        };
      }
    }, [c]);
    let h = useDeviceType();
    return (0, jsxRuntime.jsxs)("div", {
      className: (0, classNamesModule.Z)(j().container, c && j().active),
      children: [(0, jsxRuntime.jsx)("div", {
        className: j().bg
      }), (0, jsxRuntime.jsx)("video", {
        ref: A,
        className: j().video,
        playsInline: !0,
        crossOrigin: "anonymous",
        muted: !0,
        loop: !0,
        preload: "metadata"
      }), (0, jsxRuntime.jsx)("canvas", {
        ref: o,
        className: j().canvas
      }), (0, jsxRuntime.jsx)("div", {
        className: j().maskBlock
      }), (0, jsxRuntime.jsx)("div", {
        className: j().maskBlock2
      }), (0, jsxRuntime.jsx)("div", {
        className: j().bottomShadow
      }), (0, jsxRuntime.jsxs)("div", {
        className: j().infos,
        children: [(0, jsxRuntime.jsxs)("div", {
          className: j().main,
          children: [(0, jsxRuntime.jsx)("div", {
            className: j().primaryText,
            children: "19532 MechCat Robotics"
          }), (0, jsxRuntime.jsxs)("div", {
            className: j().subBox,
            children: [(0, jsxRuntime.jsx)("div", {
              className: j().secondaryText,
              children: "Dr. Norman Bethune Collegiate Institute"
            }), (0, jsxRuntime.jsx)("div", {
              className: j().linkText,
              children: "https://19532mechcat.github.io/"
            })]
          })]
        }), (0, jsxRuntime.jsx)("div", {
          className: j().copyright,
          children: "Directed By: Siyuan Yu.  SIYUAN PRODUCTIONS"
        })]
      }), (0, jsxRuntime.jsx)("div", {
        className: j().downloadList,
        children: h ? "mobile" === h ? (0, jsxRuntime.jsxs)(jsxRuntime.Fragment, {
          children: [(0, jsxRuntime.jsx)(DownloadBtn_mobile, {
            href: r.default
          }), (0, jsxRuntime.jsx)(DownloadBtn_TapTap_mobile, {
            href: r.TapTap
          }), (0, jsxRuntime.jsx)(SklandBtn_mobile, {}), (0, jsxRuntime.jsx)(RechargeBtn_mobile, {})]
        }) : (0, jsxRuntime.jsxs)(jsxRuntime.Fragment, {
          children: [(0, jsxRuntime.jsx)(DownloadBtn_Windows, {}), (0, jsxRuntime.jsx)(DownloadBtn_iOS, {
            href: r.iOS
          }), (0, jsxRuntime.jsx)(DownloadBtn_Android, {
            href: r.Android
          }), (0, jsxRuntime.jsx)(DownloadBtn_TapTap, {
            href: "https://19532mechcat.github.io/"
          }), (0, jsxRuntime.jsx)(DownloadBtn_Emulator, {
            mumuLink: r.MuMu,
            leidianLink: r.Leidian
          }), (0, jsxRuntime.jsx)(SklandBtn, {}), (0, jsxRuntime.jsx)(RechargeBtn, {})]
        }) : null
      }), (0, jsxRuntime.jsxs)("div", {
        className: j().qrcodeAndAgeRating,
        children: [(0, jsxRuntime.jsxs)("div", {
          className: j().qrcode,
          children: [(0, jsxRuntime.jsx)("div", {
            className: j().text,
            children: siteContentModule.f.download.qrcode.split("").map((e, t) => (0, jsxRuntime.jsx)("span", {
              children: e
            }, t))
          }), (0, jsxRuntime.jsx)("img", {
            className: j().img,
            src: webpackRequire(67169).Z.src,
            alt: ""
          })]
        }), (0, jsxRuntime.jsx)("a", {
          href: "./19532main/resourses/news/2021059770.html",
          target: "_blank",
          children: (0, jsxRuntime.jsx)("img", {
            className: j().ageRating,
            src: webpackRequire(7924).Z.src,
            alt: ""
          })
        })]
      })]
    });
  };
});
