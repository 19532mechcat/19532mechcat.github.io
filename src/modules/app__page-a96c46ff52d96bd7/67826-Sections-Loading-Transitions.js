                                                                                                                 
                                                    
(function (module, exports, webpackRequire) {
  "use strict";

  webpackRequire.r(exports), webpackRequire.d(exports, {
    Sections: function () {
      return Sections;
    }
  });
  var jsxRuntime = webpackRequire(84548),
    React = webpackRequire(58036),
    animationModule = webpackRequire(51234),
    classNamesModule = webpackRequire(18315),
    l = webpackRequire(88797),
    layoutContextModule = webpackRequire(25628),
    particleSystemModule = webpackRequire(70977),
    sectionRegistryModule = webpackRequire(20202),
    sectionStateModule = webpackRequire(88204),
    h = webpackRequire(98744),
    u = webpackRequire(52226),
    g = webpackRequire.n(u);
  let CoordMark = () => {
    var e;
    let {
        sectionPointer: t
      } = (0, sectionStateModule.S)(),
      i = t < 0 ? h.zP.LOADING : sectionRegistryModule.$[t] ? null !== (e = sectionRegistryModule.$[t].coordMarkType) && void 0 !== e ? e : h.zP.COMMON : h.zP.HIDDEN;
    return (0, jsxRuntime.jsxs)("div", {
      className: (0, classNamesModule.Z)(g().container, i === h.zP.COMMON && g().common, i === h.zP.HOME && g().home, i === h.zP.WORLD && g().world),
      children: [(0, jsxRuntime.jsx)("div", {
        className: (0, classNamesModule.Z)(g().line, g().line2, g().vtc)
      }), (0, jsxRuntime.jsx)("div", {
        className: (0, classNamesModule.Z)(g().line, g().line3, g().hrz)
      }), (0, jsxRuntime.jsx)("div", {
        className: (0, classNamesModule.Z)(g().line, g().line4, g().hrz)
      })]
    });
  };
  var m = webpackRequire(16928),
    f = webpackRequire(31903),
    v = webpackRequire(26494),
    x = webpackRequire.n(v);
  let CrossGrids = () => {
    var e;
    let t = (0, m.x)(),
      i = (0, React.useRef)();
    (0, f.a)(() => {
      let e = t.current;
      i.current = new Grids(e);
    });
    let {
      sectionPointer: n
    } = (0, sectionStateModule.S)();
    return (0, jsxRuntime.jsx)("div", {
      className: (0, classNamesModule.Z)(x().container, (null === (e = sectionRegistryModule.$[n]) || void 0 === e ? void 0 : e.crossGrids) ? x().visible : x().hidden),
      children: (0, jsxRuntime.jsx)("canvas", {
        ref: t,
        className: x().canvas
      })
    });
  };
  let Grids = class Grids {
    constructor(e) {
      this.canvas = e, this.draw = () => {
        let e = this.canvas,
          t = e.getContext("2d");
        if (t) {
          let i = this.canvas.width > this.canvas.height ? 172 : 86,
            a = Math.ceil(window.innerWidth / i),
            s = Math.ceil(window.innerHeight / i);
          t.clearRect(0, 0, e.width, e.height), t.fillStyle = "#272727", t.strokeStyle = "#272727", t.lineWidth = 2, t.fillRect(e.width - 2, 0, 2, e.height);
          for (let n = 0; n < a; n++) for (let a = 0; a < s; a++) {
            let s = e.width - (n + 1) * i,
              r = a * i;
            t.fillRect(s, r, 2, i), t.fillRect(s, r, i, 2), t.beginPath(), t.moveTo(s, r), t.lineTo(s + i, r + i), t.moveTo(s, r + i), t.lineTo(s + i, r), t.stroke();
          }
        }
      }, this.canvas.width = window.innerWidth, this.canvas.height = window.innerHeight, this.draw();
    }
  };
  var b = webpackRequire(31476),
    p = webpackRequire(75601),
    w = webpackRequire(83196),
    j = webpackRequire(93019),
    browserHelpers = webpackRequire(81087),
    E = webpackRequire(82802);
  let Firefly = class Firefly {
    static get instance() {
      return Firefly._instance;
    }
    randomX() {
      var e;
      return (Math.random() - 0.5) * (0.9 * ((null === (e = this.stage) || void 0 === e ? void 0 : e.width) || 0));
    }
    randomY() {
      var e;
      return (Math.random() - 2.5) * (0.2 * ((null === (e = this.stage) || void 0 === e ? void 0 : e.height) || 0));
    }
    randomZ() {
      return (0, w.Z)(-200, 0);
    }
    randomLife() {
      return (0, w.Z)(60, 1200);
    }
    move(e, t) {
      e.life-- ? (e.y += e.speed, e.life < 30 ? e.opacity += (0 - e.opacity) * 0.1 : e.opacity += (t - e.opacity) * 0.1) : (e.x = this.randomX(), e.y = this.randomY(), e.z = this.randomZ(), e.life = this.randomLife(), e.opacity = 0), e.aPosition.set([e.x, e.y, e.z]), e.aOpacity.set([e.opacity]);
    }
    fire() {
      return E.a.add(this.update), this;
    }
    stop() {
      return E.a.remove(this.update), this;
    }
    disappear() {
      return this.globalOpacity = 0, this;
    }
    appear() {
      return this.globalOpacity = 1, this;
    }
    destroy() {
      this.stop(), Firefly._instance = null;
    }
    constructor(e, t = 20) {
      if (this.stage = e, this.update = () => {
        for (let e of this.points) this.move(e, this.globalOpacity);
        this.aPosition.needsUpdate = !0, this.aOpacity.needsUpdate = !0;
      }, this.globalOpacity = 0, browserHelpers.s$) return;
      let i = (0, b.Z)(Array(t), 0),
        a = Float32Array.from((0, p.Z)(i.map(() => [this.randomX(), this.randomY(), this.randomZ()]))),
        s = Float32Array.from(i);
      this.aPosition = new j.TlE(a, 3), this.aOpacity = new j.TlE(s, 1);
      let n = new j.u9r();
      n.setAttribute("position", this.aPosition), n.setAttribute("opacity", this.aOpacity), this.points = i.map((e, t) => ({
        x: a[3 * t],
        y: a[3 * t + 1],
        z: a[3 * t + 2],
        opacity: s[t],
        size: 2,
        speed: 0.1 * (0, w.Z)(4, 8),
        life: this.randomLife(),
        aPosition: a.subarray(3 * t, 3 * t + 3),
        aOpacity: s.subarray(t, t + 1)
      })), new j.dpR().load("../web.hycdn.cn/arknights/official/_next/static/media/firefly.67413619.png", t => {
        let i = new j.jyz({
            uniforms: {
              uTexture: new j.xWb(t)
            },
            vertexShader: "\n                    attribute float opacity;\n                    varying float vOpacity;\n                    void main() {\n                        vOpacity = opacity;\n                        vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n                        gl_PointSize = 7.0;\n                        gl_Position = projectionMatrix * mvPosition;\n                    }\n                ",
            fragmentShader: "\n                    uniform sampler2D uTexture;\n                    varying float vOpacity;\n                    void main() {\n                        vec4 texture = texture2D(uTexture, gl_PointCoord.xy);\n                        gl_FragColor = vec4(texture.rgb, texture.a * vOpacity);\n                    }",
            transparent: !0,
            depthTest: !1
          }),
          a = new j.woe(n, i);
        e.scene.add(a), this.fire();
      }), Firefly._instance = this;
    }
  };
  var y = webpackRequire(29769),
    _ = webpackRequire(64609),
    C = webpackRequire(60650),
    S = webpackRequire.n(C);
  let ScrollTip = () => {
    let {
      sectionPointer: e
    } = (0, sectionStateModule.S)();
    return (0, jsxRuntime.jsxs)("div", {
      className: (0, classNamesModule.Z)(S().container, e <= 0 ? S().start : e >= sectionRegistryModule.$.length - 1 ? S().last : S().common),
      children: [(0, jsxRuntime.jsxs)("div", {
        className: S().downTip,
        children: [(0, jsxRuntime.jsx)("div", {
          className: S().icon,
          children: (0, jsxRuntime.jsx)(_.M, {})
        }), (0, jsxRuntime.jsxs)("div", {
          className: S().scrollTip,
          children: [(0, jsxRuntime.jsx)("div", {
            className: S().text,
            children: "SCROLL"
          }), (0, jsxRuntime.jsx)("div", {
            className: S().arrow,
            children: (0, jsxRuntime.jsx)(y.f2, {})
          })]
        })]
      }), (0, jsxRuntime.jsx)("div", {
        className: S().upTip,
        children: (0, jsxRuntime.jsx)("div", {
          className: S().arrow,
          children: (0, jsxRuntime.jsx)(y.id, {})
        })
      })]
    });
  };
  var k = webpackRequire(77286),
    R = webpackRequire(70165);
  let EventTarget = class EventTarget {
    addEventListener(e, t) {
      let i = this.eventMap[e];
      i || (i = [], this.eventMap[e] = i), i.push(t);
    }
    removeEventListener(e, t) {
      let i = this.eventMap[e];
      if (!i) return;
      let a = i.indexOf(t);
      a >= 0 && i.splice(a, 1);
    }
    dispatchEvent(e) {
      let t = this.eventMap[e];
      t && t.forEach(e => e && e());
    }
    constructor() {
      this.eventMap = {};
    }
  };
  let I = {
      image: {}
    },
    loadImage = async e => {
      let t = I.image[e];
      return t || new Promise((t, i) => {
        let a = new Image();
        a.crossOrigin = "Anonymous", a.onload = () => {
          I.image[e] = a, t(a);
        }, a.onerror = () => {
          i(Error("load image error"));
        }, a.src = e;
      });
    };
  let AssetsPreloader = class AssetsPreloader extends EventTarget {
    get progress() {
      let e = this.tasks.length;
      return e ? Math.round(this.loadedCnt / e * 100) : 0;
    }
    onSingleTaskDone() {
      this.loadedCnt++, this.dispatchEvent("progress"), this.loadedCnt === this.tasks.length && (this.loading = !1, this.finished = !0);
    }
    addTasks(e) {
      return this.loading ? console.warn("[AssetsPreloader] Tasks already started.") : this.finished ? console.warn("[AssetsPreloader] Tasks already finished.") : void this.tasks.push(...e);
    }
    load() {
      if (this.loading) return console.warn("[AssetsPreloader] Tasks already started.");
      if (this.finished) return console.warn("[AssetsPreloader] Tasks already finished.");
      for (let e of (this.loading = !0, this.tasks)) e().then(() => {
        this.onSingleTaskDone();
      }).catch(() => {
        this.onSingleTaskDone();
      });
    }
    constructor(...e) {
      super(...e), this.tasks = [], this.loadedCnt = 0, this.loading = !1, this.finished = !1;
    }
  };
  var B = webpackRequire(86686),
    U = webpackRequire(83961);
  let IconDblArrowSvg = e => {
    let {
      children: t,
      ...i
    } = e;
    return (0, jsxRuntime.jsx)("svg", {
      viewBox: "0 0 13 11",
      ...i,
      children: (0, jsxRuntime.jsx)("use", {
        xlinkHref: "#".concat(U.b.iconDblArrow)
      })
    });
  };
  var D = webpackRequire(66079),
    siteContentModule = webpackRequire(19174),
    T = webpackRequire(77707),
    Q = webpackRequire.n(T);
  let Z = [webpackRequire(62451).Z.src, webpackRequire(401).Z.src, webpackRequire(34946).Z.src, webpackRequire(28395).Z.src, webpackRequire(2473).Z.src],
    LoadingPage = e => {
      let {
          active: t,
          onFinish: i
        } = e,
        l = (0, m.x)(),
        c = (0, m.x)();
      return (0, React.useEffect)(() => {
        let e, t;
        let a = {
            value: 0
          },
          s = new AssetsPreloader(),
          onProgress = () => {
            null == e || e.pause(), e = (0, animationModule.Z)({
              targets: a,
              value: s.progress,
              easing: "easeInOutQuad",
              duration: 1e3,
              round: !0,
              update() {
                let e = l.current;
                e && (e.style.width = "".concat(a.value, "%"));
                let t = c.current;
                t && (t.innerText = "".concat(a.value));
              },
              complete: () => {
                a.value >= 100 && (t = window.setTimeout(() => {
                  null == i || i();
                }, 300));
              }
            });
          };
        return s.addEventListener("progress", onProgress), s.addTasks(Z.map(e => () => loadImage(e))), s.load(), () => {
          null == e || e.pause(), window.clearTimeout(t), s.removeEventListener("progress", onProgress);
        };
      }, [null]), (0, jsxRuntime.jsxs)("div", {
        className: (0, classNamesModule.Z)(Q().container, t ? Q().active : Q().hidden),
        children: [(0, jsxRuntime.jsx)("div", {
          className: Q().title,
          children: (0, jsxRuntime.jsx)(D.L, {})
        }), (0, jsxRuntime.jsxs)("div", {
          className: Q().infos,
          children: [(0, jsxRuntime.jsx)("div", {
            className: Q().copyrightMini,
            children: (0, jsxRuntime.jsx)("svg", {
              viewBox: "0 0 166 30",
              children: (0, jsxRuntime.jsx)("image", {
                href: "./images/SIYUANPRODUCTIONS.svg",
                width: 166,
                height: 30,
                preserveAspectRatio: "xMidYMid meet"
              })
            })
          }), (0, jsxRuntime.jsxs)("div", {
            className: Q().progressContainer,
            children: [(0, jsxRuntime.jsxs)("div", {
              className: Q().progressBar,
              children: [(0, jsxRuntime.jsx)("div", {
                className: Q().track
              }), (0, jsxRuntime.jsx)("div", {
                className: Q().bar,
                ref: l
              })]
            }), (0, jsxRuntime.jsxs)("div", {
              className: Q().progressDetail,
              children: [(0, jsxRuntime.jsxs)("div", {
                className: Q().info,
                children: [(0, jsxRuntime.jsx)(IconDblArrowSvg, {
                  className: Q().icon
                }), (0, jsxRuntime.jsx)("span", {
                  children: "LOADING\xa0-\xa0"
                }), (0, jsxRuntime.jsx)("span", {
                  ref: c,
                  children: "0"
                }), "% \xa0", (0, jsxRuntime.jsx)("span", {
                  children: "......"
                })]
              }), (0, jsxRuntime.jsxs)("div", {
                className: Q().extra,
                children: [(0, jsxRuntime.jsx)("span", {
                  className: Q().textTitle,
                  children: "19532 MechCat"
                }), (0, jsxRuntime.jsxs)("span", {
                  className: Q().location,
                  children: "HTTPS://19532mechcat.github.io"
                })]
              })]
            })]
          })]
        })]
      });
    };
  var L = webpackRequire(58269),
    O = webpackRequire.n(L);
  let V = "easeInOutQuad",
    Sections = e => {
      let {
          sectionList: t
        } = e,
        i = (0, R.R)(),
        n = i ? "portrait" === i ? 600 : 1e3 : 0,
        {
          scrollBlocked: r
        } = (0, layoutContextModule.l)(),
        {
          sectionPointer: l
        } = (0, sectionStateModule.S)();
      (0, React.useEffect)(() => () => {
        r.current = !1;
      }, [null]), (0, React.useEffect)(() => {
        if (l >= sectionRegistryModule.$.length - 1) {
          let e = setTimeout(() => {
            r.current = !1;
          }, n);
          return () => {
            clearTimeout(e);
          };
        }
        r.current = !0;
      }, [l]), (0, React.useEffect)(() => {
        let listener = () => {
          let e = sectionRegistryModule.$.findIndex(e => e.path === location.hash.substring(1));
          e >= 0 && (0, sectionStateModule.p)(e);
        };
        return window.addEventListener("hashchange", listener), () => {
          window.removeEventListener("hashchange", listener);
        };
      }, [null]), (0, React.useEffect)(() => {
        var e;
        let t = null === (e = sectionRegistryModule.$[l]) || void 0 === e ? void 0 : e.path;
        t && t !== location.hash.substring(1) && (location.hash ? location.hash = t : history.replaceState({}, "", "/#" + t));
      }, [l]);
      let h = (0, React.useCallback)(() => (0, sectionStateModule.p)(e => Math.max(e - 1, 0)), [null]),
        u = (0, React.useCallback)(() => (0, sectionStateModule.p)(e => Math.min(e + 1, sectionRegistryModule.$.length - 1)), [null]),
        g = (0, m.x)(),
        f = (0, React.useRef)(!1),
        onSectionChanging = e => {
          f.current = !0, setTimeout(() => {
            f.current = !1;
          }, e ? 600 : n);
        },
        v = (0, React.useCallback)(() => {
          l < 0 || 0 === l || f.current || !(l > 0) || (onSectionChanging(), h());
        }, [l]),
        x = (0, React.useCallback)(() => {
          l < 0 || f.current || !(l < sectionRegistryModule.$.length - 1) || (onSectionChanging(), u());
        }, [l]),
        b = (0, React.useCallback)(e => {
          e.deltaY > 0 ? x() : v();
        }, [x, v]),
        p = (0, React.useRef)(-1),
        w = (0, React.useRef)(-1);
      (0, React.useEffect)(() => {
        let e = g.current,
          listener = e => {
            if (e.preventDefault(), !e.touches[0] || -1 === p.current) return;
            let t = e.touches[0].clientY - p.current,
              i = e.touches[0].clientX - w.current;
            Math.abs(i) > 50 ? (p.current = -1, w.current = -1) : Math.abs(t) > 50 && (t < 0 ? x() : t > 0 && v(), p.current = -1, w.current = -1);
          };
        return e.addEventListener("touchmove", listener, {
          passive: !1
        }), () => {
          e.removeEventListener("touchmove", listener);
        };
      }, [x, v]);
      let j = (0, m.x)();
      return (0, React.useEffect)(() => {
        let e = j.current;
        if (e) {
          let t = new k.H(e),
            i = new particleSystemModule.J(t),
            a = new Firefly(t);
          return () => {
            a.destroy(), i.destroy(), t.destroy();
          };
        }
      }, [null]), (0, React.useEffect)(() => {
        var e, t, i;
        let a = null === (e = sectionRegistryModule.$[l]) || void 0 === e ? void 0 : e.fireFlies;
        a ? null === (t = Firefly.instance) || void 0 === t || t.appear() : null === (i = Firefly.instance) || void 0 === i || i.disappear();
      }, [l]), (0, jsxRuntime.jsxs)(jsxRuntime.Fragment, {
        children: [(0, jsxRuntime.jsx)("div", {
          ref: g,
          className: O().sections,
          onWheel: b,
          onTouchStart: e => {
            e.touches[0] && (p.current = e.touches[0].clientY, w.current = e.touches[0].clientX);
          },
          onMouseLeave: () => {
            p.current = -1, w.current = -1;
          },
          children: t.map((e, t) => (0, jsxRuntime.jsx)(SectionItem, {
            sectionTransitionDuration: n,
            status: l >= 0 ? Math.sign(t - l) : null,
            children: e
          }, t))
        }), (0, jsxRuntime.jsx)(LoadingPage, {
          active: -1 === l,
          onFinish: () => {
            let e = sectionRegistryModule.$.findIndex(e => e.path === location.hash.substring(1));
            e >= 0 ? (0, sectionStateModule.p)(e) : (0, sectionStateModule.p)(0);
          }
        }), (0, jsxRuntime.jsx)(CrossGrids, {}), (0, jsxRuntime.jsx)("canvas", {
          id: "webgl",
          ref: j,
          className: O().webgl
        }), (0, jsxRuntime.jsx)(CoordMark, {}), (0, jsxRuntime.jsx)(ScrollTip, {})]
      });
    },
    SectionItem = e => {
      let {
          sectionTransitionDuration: t,
          status: i,
          children: c
        } = e,
        A = (0, m.x)(),
        o = (0, React.useRef)(null);
      return (0, React.useEffect)(() => {
        if ((0, l.Z)(i)) return;
        let e = null,
          a = A.current;
        if (a) {
          let s = a.children[0];
          if (null === o.current) i > 0 ? (a.style.width = "0%", s.style.left = "0") : i < 0 && (a.style.width = "0%", s.style.left = "auto");else if (o.current > 0) {
            if (0 === i) {
              a.style.left = "auto", s.style.left = "auto";
              let i = {
                value: 0
              };
              e = (0, animationModule.Z)({
                targets: i,
                value: [0, 1],
                duration: t,
                easing: V,
                update() {
                  a.style.width = "".concat(100 * i.value, "%");
                },
                complete() {
                  s.style.width = "";
                }
              });
            }
          } else if (o.current < 0) {
            if (0 === i) {
              a.style.left = "0", s.style.left = "0";
              let i = {
                value: 0
              };
              e = (0, animationModule.Z)({
                targets: i,
                value: [0, 1],
                duration: t,
                easing: V,
                update() {
                  a.style.width = "".concat(100 * i.value, "%");
                },
                complete() {
                  s.style.width = "";
                }
              });
            }
          } else if (0 === o.current) {
            if (0 === i) ;else if (i < 0) {
              a.style.left = "0", s.style.left = "0";
              let i = {
                value: 0
              };
              e = (0, animationModule.Z)({
                targets: i,
                value: [0, 1],
                duration: t,
                easing: V,
                update() {
                  a.style.width = "".concat((1 - i.value) * 100, "%");
                },
                complete() {
                  s.style.width = "";
                }
              });
            } else if (i > 0) {
              a.style.left = "auto", s.style.left = "auto";
              let i = {
                value: 0
              };
              e = (0, animationModule.Z)({
                targets: i,
                value: [0, 1],
                duration: t,
                easing: V,
                update() {
                  a.style.width = "".concat((1 - i.value) * 100, "%");
                },
                complete() {
                  s.style.width = "";
                }
              });
            }
          }
          o.current = i;
        }
        return () => {
          null == e || e.pause();
        };
      }, [i]), (0, jsxRuntime.jsx)("div", {
        ref: A,
        className: (0, classNamesModule.Z)(O().sectionItem),
        children: c
      });
    };
});
