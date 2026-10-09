                                                                                                                 
                                                    
(function (module, exports, webpackRequire) {
  "use strict";

  webpackRequire.r(exports), webpackRequire.d(exports, {
    SectionCharClient: function () {
      return SectionCharClient;
    }
  });
  var jsxRuntime = webpackRequire(84548),
    React = webpackRequire(58036),
    classNamesModule = webpackRequire(18315),
    r = webpackRequire(10402),
    l = webpackRequire(91168);
  let drawText = async function (e) {
      let {
          font: t = "Oswald-DemiBold",
          fontSize: i = 152,
          strokeWidth: a = 1,
          strokeColor: s = "#b4b4b4"
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = document.createElement("canvas"),
        r = n.getContext("2d");
      if (!r) return "";
      {
        try {
          await document.fonts.ready;
        } catch (e) {}
        r.font = "".concat(i, "px ").concat(t);
        let {
          width: l
        } = r.measureText(e);
        return n.width = l + 2 * a + 4, n.height = i + 2 * a + 4, r.clearRect(0, 0, n.width, n.height), r.font = "".concat(i, "px ").concat(t), r.textBaseline = "middle", r.lineJoin = "round", r.miterLimit = 4, r.lineWidth = 2 * a, r.strokeStyle = s, r.strokeText(e, a, 0.5 * n.height), r.globalCompositeOperation = "destination-out", r.fillText(e, a, 0.5 * n.height), r.globalCompositeOperation = "source-over", n.toDataURL();
      }
    },
    BorderText = e => {
      let {
          content: t,
          options: i,
          ...n
        } = e,
        [r, l] = (0, React.useState)("");
      return (0, React.useEffect)(() => {
        drawText(t, {
          font: "Oswald-DemiBold",
          ...i
        }).then(e => l(e));
      }, [t, i]), (0, jsxRuntime.jsx)("img", {
        src: r,
        alt: t,
        ...n
      });
    };
  var c = webpackRequire(82802),
    A = webpackRequire(50610),
    browserHelpers = webpackRequire(81087);
  let d = new class {
    play(e, t) {
      let {
          onplay: i,
          onended: a
        } = t,
        s = this.audio;
      return s && (s.currentTime = 0, s.volume = 1, s.onplay = i, s.onended = a, s.setAttribute("src", e), s.load(), s.play().catch(e => {
        console.warn(e);
      })), this;
    }
    stop() {
      this.audio.pause();
    }
    constructor() {
      if (browserHelpers.s$) return;
      this.audio = document.createElement("audio");
    }
  }();
  var h = webpackRequire(29769),
    u = webpackRequire(83961);
  let IconElite0Svg = e => {
      let {
        children: t,
        ...i
      } = e;
      return (0, jsxRuntime.jsx)("svg", {
        viewBox: "0 0 127.7 77.9",
        ...i,
        children: (0, jsxRuntime.jsx)("use", {
          xlinkHref: "#".concat(u.b.iconElitePhase0)
        })
      });
    },
    IconElite1Svg = e => {
      let {
        children: t,
        ...i
      } = e;
      return (0, jsxRuntime.jsx)("svg", {
        viewBox: "0 0 127.7 77.9",
        ...i,
        children: (0, jsxRuntime.jsx)("use", {
          xlinkHref: "#".concat(u.b.iconElitePhase1)
        })
      });
    };
  var g = webpackRequire(5125);
  let IconVoiceSvg = e => {
    let {
      children: t,
      ...i
    } = e;
    return (0, jsxRuntime.jsx)("svg", {
      viewBox: "0 0 44 44",
      ...i,
      children: (0, jsxRuntime.jsx)("use", {
        xlinkHref: "#".concat(u.b.iconVoice)
      })
    });
  };
  var m = webpackRequire(16928),
    sectionStateModule = webpackRequire(88204),
    siteContentModule = webpackRequire(19174);
  let x = {
      "RHODES ISLAND": webpackRequire(94862).Z.src,
      LUNGMEN: webpackRequire(16220).Z.src,
      "PENGUIN LOGISTICS": webpackRequire(78255).Z.src,
      "RHINE LAB": webpackRequire(87263).Z.src
    },
    b = [{
      code: "B003",
      camp: "RHODES ISLAND",
      avatar: webpackRequire(50778).Z.src,
      illustList: [{
        phase: 1,
        illust: webpackRequire(66161).Z.src,
        focus: {
          ox: 520 / 1024,
          oy: 280 / 1024,
          tx: -0.390625,
          ty: -60 / 1024,
          scale: 1.3
        },
        illustStyled: webpackRequire(96680).Z.src
      }, {
        phase: 2,
        illust: webpackRequire(24427).Z.src,
        focus: {
          ox: 540 / 1024,
          oy: 676 / 1024,
          tx: -0.4375,
          ty: -378 / 1024,
          scale: 1.3
        }
      }],
      voices: [{
        region: "ja",
        audio: webpackRequire(11044)
      }, {
        region: "cn",
        audio: webpackRequire(14936)
      }]
    }, {
      code: "R001",
      camp: "RHODES ISLAND",
      avatar: webpackRequire(21161).Z.src,
      illustList: [{
        phase: 0,
        illust: webpackRequire(60221).Z.src,
        focus: {
          ox: 532 / 1024,
          oy: 346 / 1024,
          tx: -452 / 1024,
          ty: -120 / 1024,
          scale: 1.3
        },
        illustStyled: webpackRequire(92033).Z.src
      }, {
        phase: 1,
        illust: webpackRequire(13752).Z.src,
        focus: {
          ox: 504 / 1024,
          oy: 0.421875,
          tx: -376 / 1024,
          ty: -0.203125,
          scale: 1.3
        },
        illustStyled: webpackRequire(46296).Z.src
      }, {
        phase: 2,
        illust: webpackRequire(39374).Z.src,
        focus: {
          ox: 520 / 1024,
          oy: 510 / 1024,
          tx: -418 / 1024,
          ty: -316 / 1024,
          scale: 1.5
        }
      }],
      voices: [{
        region: "ja",
        audio: webpackRequire(68697)
      }, {
        region: "cn",
        audio: webpackRequire(57982)
      }]
    }, {
      code: "LM04",
      camp: "LUNGMEN",
      avatar: webpackRequire(18010).Z.src,
      illustList: [{
        phase: 1,
        illust: webpackRequire(55822).Z.src,
        focus: {
          ox: 0.6875,
          oy: 158 / 1024,
          tx: -376 / 1024,
          ty: -108 / 1024,
          scale: 1.3
        },
        illustStyled: webpackRequire(67877).Z.src
      }, {
        phase: 2,
        illust: webpackRequire(6641).Z.src,
        focus: {
          ox: 520 / 1024,
          oy: 510 / 1024,
          tx: -418 / 1024,
          ty: -316 / 1024,
          scale: 1.5
        }
      }],
      voices: [{
        region: "ja",
        audio: webpackRequire(852)
      }, {
        region: "cn",
        audio: webpackRequire(28087)
      }]
    }, {
      code: "PL02",
      camp: "PENGUIN LOGISTICS",
      avatar: webpackRequire(33869).Z.src,
      illustList: [{
        phase: 1,
        illust: webpackRequire(54039).Z.src,
        focus: {
          ox: 870 / 1024,
          oy: 105 / 1024,
          tx: -376 / 1024,
          ty: -108 / 1024,
          scale: 1.2
        },
        illustStyled: webpackRequire(39287).Z.src
      }, {
        phase: 2,
        illust: webpackRequire(35478).Z.src,
        focus: {
          ox: 520 / 1024,
          oy: 200 / 1024,
          tx: -418 / 1024,
          ty: -206 / 1024,
          scale: 1.2
        }
      }],
      voices: [{
        region: "ja",
        audio: webpackRequire(43076)
      }, {
        region: "cn",
        audio: webpackRequire(5227)
      }]
    }, {
      code: "PL03",
      camp: "PENGUIN LOGISTICS",
      avatar: webpackRequire(96504).Z.src,
      illustList: [{
        phase: 1,
        illust: webpackRequire(87115).Z.src,
        focus: {
          ox: 804 / 1024,
          oy: 125 / 1024,
          tx: -376 / 1024,
          ty: -108 / 1024,
          scale: 1.2
        },
        illustStyled: webpackRequire(2955).Z.src
      }, {
        phase: 2,
        illust: webpackRequire(22181).Z.src,
        focus: {
          ox: 520 / 1024,
          oy: 0.15625,
          tx: -418 / 1024,
          ty: -216 / 1024,
          scale: 1.2
        }
      }],
      voices: [{
        region: "ja",
        audio: webpackRequire(65449)
      }, {
        region: "cn",
        audio: webpackRequire(74707)
      }]
    }, {
      code: "RL04",
      camp: "RHINE LAB",
      avatar: webpackRequire(81314).Z.src,
      illustList: [{
        phase: 1,
        illust: webpackRequire(13264).Z.src,
        focus: {
          ox: 0.53125,
          oy: 123 / 1024,
          tx: -426 / 1024,
          ty: -108 / 1024,
          scale: 1.2
        },
        illustStyled: webpackRequire(57115).Z.src
      }, {
        phase: 2,
        illust: webpackRequire(43054).Z.src,
        focus: {
          ox: 420 / 1024,
          oy: 210 / 1024,
          tx: -418 / 1024,
          ty: -216 / 1024,
          scale: 1.5
        }
      }],
      voices: [{
        region: "ja",
        audio: webpackRequire(97089)
      }, {
        region: "cn",
        audio: webpackRequire(35380)
      }]
    }].map(e => {
      let t = siteContentModule.f.char.infoMap[e.code];
      return {
        ...e,
        name: t.name,
        codename: t.codename,
        intro: t.intro,
        voices: e.voices.map(e => ({
          ...e,
          actor: t.voiceActor[e.region]
        }))
      };
    });
  var p = webpackRequire(51819),
    w = webpackRequire.n(p);
  let SectionCharClient = e => {
      var t, i, c, o, d, h, u, v, p, j, N, E;
      let {
          index: y
        } = e,
        {
          sectionPointer: _
        } = (0, sectionStateModule.S)(),
        [C, S] = (0, React.useState)(0),
        k = b[C],
        [R, I] = (0, React.useState)({}),
        B = null !== (h = R[C]) && void 0 !== h ? h : 0,
        setIllustIndex = (e, t) => {
          I(i => ({
            ...i,
            [e]: t
          }));
        },
        U = k.illustList[B],
        [D, M] = (0, React.useState)({}),
        T = null !== (u = D[C]) && void 0 !== u ? u : 0,
        setVoiceIndex = (e, t) => {
          M(i => ({
            ...i,
            [e]: t
          }));
        },
        Q = (0, m.x)(),
        Z = (0, m.x)(),
        L = (0, m.x)();
      return (0, jsxRuntime.jsxs)("div", {
        className: (0, classNamesModule.Z)(w().container),
        children: [(0, jsxRuntime.jsx)("div", {
          className: w().bgMask
        }), (0, jsxRuntime.jsx)("div", {
          className: (0, classNamesModule.Z)(w().illustStyled),
          children: (0, jsxRuntime.jsx)(A.I, {
            nodeRef: Z,
            dir: "hrz",
            state: "".concat(C, ":").concat(B),
            children: (0, jsxRuntime.jsx)("div", {
              ref: Z,
              className: w().img,
              style: {
                backgroundImage: U.illustStyled ? "url(".concat(U.illustStyled, ")") : void 0
              }
            })
          })
        }), (0, jsxRuntime.jsx)(A.I, {
          nodeRef: Q,
          dir: "hrz",
          reverse: !0,
          state: "".concat(C, ":").concat(B),
          children: (0, jsxRuntime.jsx)("div", {
            ref: Q,
            className: w().illust,
            children: (0, jsxRuntime.jsx)("div", {
              className: w().imgWrapper,
              children: (0, jsxRuntime.jsx)("img", {
                className: w().img,
                src: U.illust,
                style: {
                  transformOrigin: "".concat((null !== (v = null === (t = U.focus) || void 0 === t ? void 0 : t.ox) && void 0 !== v ? v : 0.5) * 100, "% ").concat((null !== (p = null === (i = U.focus) || void 0 === i ? void 0 : i.oy) && void 0 !== p ? p : 0.5) * 100, "%"),
                  transform: "translate(".concat((null !== (j = null === (c = U.focus) || void 0 === c ? void 0 : c.tx) && void 0 !== j ? j : 0) * 100, "%,").concat((null !== (N = null === (o = U.focus) || void 0 === o ? void 0 : o.ty) && void 0 !== N ? N : 0) * 100, "%) scale(").concat(null !== (E = null === (d = U.focus) || void 0 === d ? void 0 : d.scale) && void 0 !== E ? E : 1, ")")
                }
              })
            })
          })
        }), (0, jsxRuntime.jsx)("div", {
          className: w().bottomBlock
        }), (0, jsxRuntime.jsxs)("div", {
          className: w().moduleTitle,
          children: [(0, jsxRuntime.jsx)("div", {
            className: w().title,
            children: "19532 MechCat Robotics: // "
          }), (0, jsxRuntime.jsx)("div", {
            className: w().subtitle,
            children: "PROFILE"
          })]
        }), (0, jsxRuntime.jsx)("div", {
          className: w().main,
          children: (0, jsxRuntime.jsxs)("div", {
            className: w()._main,
            children: [(0, jsxRuntime.jsx)(A.I, {
              nodeRef: L,
              dir: "hrz",
              reverse: !0,
              state: C,
              children: (0, jsxRuntime.jsxs)("div", {
                ref: L,
                className: w().charInfo,
                children: [(0, jsxRuntime.jsxs)("div", {
                  className: w().codenameShadowed,
                  children: [(0, jsxRuntime.jsx)("div", {
                    className: w().text,
                    children: k.codename
                  }), (0, jsxRuntime.jsx)(BorderText, {
                    className: w().img,
                    content: k.codename
                  })]
                }), (0, jsxRuntime.jsxs)("div", {
                  className: w().charNameAndCamp,
                  children: [(0, jsxRuntime.jsxs)("div", {
                    className: w().charName,
                    children: [(0, jsxRuntime.jsx)("div", {
                      className: w().codename,
                      children: k.codename
                    }), (0, jsxRuntime.jsx)("div", {
                      className: w().name,
                      children: k.name
                    })]
                  }), (0, jsxRuntime.jsx)("div", {
                    className: w().camp,
                    children: (0, jsxRuntime.jsx)("img", {
                      className: w().img,
                      src: x[k.camp],
                      alt: k.camp
                    })
                  })]
                }), (0, jsxRuntime.jsx)("div", {
                  className: w().voiceContainer,
                  children: (0, jsxRuntime.jsx)(Voice, {
                    active: y === _,
                    index: T,
                    onChange: e => setVoiceIndex(C, e),
                    voices: k.voices
                  })
                }), (0, jsxRuntime.jsx)("div", {
                  className: w().intro,
                  children: k.intro
                })]
              })
            }), (0, jsxRuntime.jsx)("div", {
              className: w().list,
              children: (0, jsxRuntime.jsx)(l.tq, {
                className: w().scrollView,
                slidesPerView: 4,
                modules: [r.Rv, r.LW],
                freeMode: !0,
                grabCursor: !0,
                scrollbar: {
                  el: ".".concat(w().scrollbar),
                  draggable: !0
                },
                children: b.map((e, t) => (0, jsxRuntime.jsx)(l.o5, {
                  children: (0, jsxRuntime.jsxs)("div", {
                    className: (0, classNamesModule.Z)(w().charAvatar, t === C && w().active),
                    onClick: () => S(t),
                    children: [(0, jsxRuntime.jsx)("div", {
                      className: w().flag
                    }), (0, jsxRuntime.jsx)("div", {
                      className: w().border
                    }), (0, jsxRuntime.jsx)("div", {
                      className: w().avatar,
                      children: (0, jsxRuntime.jsx)("img", {
                        className: w().img,
                        src: e.avatar,
                        alt: e.name
                      })
                    }), (0, jsxRuntime.jsx)("div", {
                      className: w().info,
                      children: (0, jsxRuntime.jsx)("div", {
                        className: w().charName,
                        children: e.name
                      })
                    })]
                  })
                }, t))
              })
            }), (0, jsxRuntime.jsx)("div", {
              className: w().scrollbar
            })]
          })
        }), (0, jsxRuntime.jsx)("div", {
          className: w().phaseSelector,
          children: k.illustList.map((e, t) => {
            let {
              phase: i
            } = e;
            return (0, jsxRuntime.jsx)("div", {
              className: (0, classNamesModule.Z)(w().phaseItem, t === B && w().active),
              onClick: () => setIllustIndex(C, t),
              children: (0, jsxRuntime.jsx)("div", {
                className: w().icon,
                children: 2 === i ? (0, jsxRuntime.jsx)(g.g, {}) : 1 === i ? (0, jsxRuntime.jsx)(IconElite1Svg, {}) : (0, jsxRuntime.jsx)(IconElite0Svg, {})
              })
            }, i);
          })
        })]
      });
    },
    Voice = e => {
      let {
          active: t,
          index: i,
          onChange: r,
          voices: l
        } = e,
        A = (0, m.x)(),
        [u, g] = (0, React.useState)(!1),
        f = (0, React.useRef)([]);
      (0, React.useEffect)(() => () => {
        d.stop(), g(!1);
      }, [null]), (0, React.useEffect)(() => {
        d.stop(), g(!1);
      }, [i]), (0, React.useEffect)(() => {
        t || (d.stop(), g(!1));
      }, [t]), (0, React.useEffect)(() => {
        if (!t) return;
        let e = A.current,
          i = e.getContext("2d");
        if (i) {
          let t = Math.floor(e.width / 8);
          if (!f.current.length) for (let e = 0; e < t; e++) f.current.push(0);
          let a = i.createLinearGradient(0, 0, e.width, 0);
          a.addColorStop(0, "#fff"), a.addColorStop(1, "#18d1ff");
          let updateGroup = () => {
              f.current.shift(), u ? f.current.push(Math.floor(Math.random() * (e.height - 5))) : f.current.push(0);
            },
            drawFrame = () => {
              updateGroup(), i.clearRect(0, 0, e.width, e.height), i.fillStyle = a;
              for (let a = 0; a < t; a++) i.fillRect(8 * a, e.height - (5 + f.current[a]), 3, e.height);
            };
          return c.v.add(drawFrame), () => {
            c.v.remove(drawFrame);
          };
        }
      }, [t, u]);
      let [v, x] = (0, React.useState)(!1);
      return (0, jsxRuntime.jsxs)("div", {
        className: w().voice,
        children: [(0, jsxRuntime.jsxs)("div", {
          className: w().block,
          children: [(0, jsxRuntime.jsx)("div", {
            className: w().icon,
            onClick: () => {
              u ? (d.stop(), g(!1)) : d.play(l[i].audio, {
                onplay() {
                  g(!0);
                },
                onended() {
                  g(!1);
                }
              });
            },
            children: (0, jsxRuntime.jsx)(IconVoiceSvg, {})
          }), (0, jsxRuntime.jsxs)("div", {
            className: (0, classNamesModule.Z)(w().selector, v && w().dropdownVisible),
            children: [(0, jsxRuntime.jsxs)("div", {
              className: w().trigger,
              onClick: () => x(browserHelpers.s2),
              children: [(0, jsxRuntime.jsxs)("div", {
                className: w().label,
                children: [(0, jsxRuntime.jsx)("div", {
                  className: w().text,
                  children: "CHARACTER VOICE"
                }), (0, jsxRuntime.jsx)("div", {
                  className: w().arrow,
                  children: (0, jsxRuntime.jsx)(h.f2, {})
                })]
              }), (0, jsxRuntime.jsx)("div", {
                className: w().current,
                children: l[i].actor || "-"
              })]
            }), (0, jsxRuntime.jsx)("div", {
              className: w().dropdown,
              children: l.map((e, t) => t === i ? null : (0, jsxRuntime.jsx)("div", {
                className: w().option,
                onClick: () => {
                  r(t), x(!1);
                },
                children: e.actor
              }, t))
            })]
          })]
        }), (0, jsxRuntime.jsx)("canvas", {
          ref: A,
          className: w().waveform,
          width: 210,
          height: 24
        })]
      });
    };
});
