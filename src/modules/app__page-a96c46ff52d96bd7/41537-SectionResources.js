                                                                                                                 
                                                    
(function (module, exports, webpackRequire) {
  "use strict";

  webpackRequire.r(exports), webpackRequire.d(exports, {
    SectionWorldClient: function () {
      return SectionWorldClient;
    }
  });
  var jsxRuntime = webpackRequire(84548),
    React = webpackRequire(58036),
    animationModule = webpackRequire(51234),
    classNamesModule = webpackRequire(18315),
    particleSystemModule = webpackRequire(70977),
    c = webpackRequire(75601),
    A = webpackRequire(54295);
  function parseModel(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [0.5, 0.5],
      [i, a] = t,
      s = e.points.map(t => {
        let [s, n, r = 255] = t;
        return [s - i * e.size.width, a * e.size.height - n, 0, 1, 1, 1, 1 * r / 255];
      });
    return {
      ...e,
      points: [],
      shuffle() {
        return this.points = (0, c.Z)((0, A.Z)(s)), this;
      },
      disappear() {
        return this.shuffle(), this.points.forEach((e, t, i) => {
          let a = t % 7;
          0 === a || 1 === a ? i[t] = e + 100 * (Math.random() - 0.5) : a > 2 && a < 6 ? i[t] = 0.5 : 6 === a && (i[t] = -0.5);
        }), this;
      }
    }.shuffle();
  }
  let o = {
    lungmen: parseModel(webpackRequire(17824)),
    penguin: parseModel(webpackRequire(28389)),
    rhine: parseModel(webpackRequire(4420)),
    rhodes: parseModel(webpackRequire(11901))
  };
  var d = webpackRequire(77286),
    h = webpackRequire(29769),
    u = webpackRequire(16928),
    g = webpackRequire(70165),
    siteContentModule = webpackRequire(19174),
    sectionStateModule = webpackRequire(88204);
  let v = {
      originiums: webpackRequire(44007),
      originium_arts: webpackRequire(95075),
      reunion: webpackRequire(83545),
      infected: webpackRequire(54860),
      nomadic_city: webpackRequire(29285),
      rhodes_island: webpackRequire(85686)
    },
    x = {
      originiums: webpackRequire(92049).Z.src,
      originium_arts: webpackRequire(58055).Z.src,
      reunion: webpackRequire(58827).Z.src,
      infected: webpackRequire(65969).Z.src,
      nomadic_city: webpackRequire(83844).Z.src,
      rhodes_island: webpackRequire(22225).Z.src
    },
    b = ["originiums", "originium_arts", "reunion", "infected", "nomadic_city", "rhodes_island"].map(e => ({
      key: e,
      ...siteContentModule.f.world.infoMap[e],
      model: parseModel(v[e]),
      image: x[e]
    }));
  var p = webpackRequire(93019),
    w = webpackRequire(79996);
  let StoryDraw = class StoryDraw {
    setDisplayImage(e) {
      this.textureLoader.load(e, e => {
        this.itemShaderMaterial.uniforms.u_texture.value = e, this.itemShaderMaterial.needsUpdate = !0;
      });
    }
    constructor() {
      this.active = !1, this.width = 0, this.height = 0, this.textureLoader = new p.dpR(), this.updateTarget = null, this.itemTargetPosition = new p.FM8(0, 0), this.emptyTexture = new p.xEZ(), this.init = () => {
        var e;
        null === (e = d.H.instance) || void 0 === e || e.scene.add(this.item);
      }, this.remove = () => {
        var e;
        null === (e = d.H.instance) || void 0 === e || e.scene.remove(this.item);
      }, this.activate = () => {
        this.active = !0, this.item.visible = !0, this.itemTargetPosition.x = w.c.x || 0, this.itemTargetPosition.y = w.c.y || 0, this.item.position.set(this.itemTargetPosition.x, this.itemTargetPosition.y, 0), null === this.updateTarget && this.update();
      }, this.deactivate = () => {
        this.active = !1, this.item.visible = !1, this.itemShaderMaterial.uniforms.u_texture.value = this.emptyTexture;
      }, this.updateItem = () => {
        this.itemTargetPosition.x = w.c.x || 0, this.itemTargetPosition.y = w.c.y || 0;
        let e = new p.FM8(this.itemTargetPosition.x - this.item.position.x, this.itemTargetPosition.y - this.item.position.y),
          t = e.length(),
          i = Math.max(Math.min(e.length() / 24, 100), 0.03),
          a = e.clone().multiplyScalar(t > 0.72 ? i / t : 0);
        0.72 > Math.abs(e.x) ? (this.item.position.x = this.itemTargetPosition.x, a.x = 0) : this.item.position.x += a.x, 0.72 > Math.abs(e.y) ? (this.item.position.y = this.itemTargetPosition.y, a.y = 0) : this.item.position.y += a.y, this.itemShaderMaterial.uniforms.speed.value = a.multiplyScalar(0.041666666666666664), this.itemShaderMaterial.needsUpdate = !0;
      }, this.update = () => {
        this.updateTarget = null, this.active && (this.updateItem(), this.updateTarget = requestAnimationFrame(this.update));
      }, this.itemShaderMaterial = new p.jyz({
        transparent: !0,
        fragmentShader: "#define PI 3.1415926535897932384626433832795\nuniform sampler2D u_texture;\nuniform vec2 speed;\nuniform float offset;\nuniform vec2 offsetRadio;\nvarying vec2 vUv;\n\nfloat get_offest(float n, float speed, float offset) {\n   return cos((n - 0.5) * PI / 2.0) * speed * offset;\n}\n\nvoid main() {\n   vec4 color = texture2D(u_texture, vUv).rgba;\n   float oR = 0.01;\n   float oG = 0.02;\n   float oB = 0.03;\n\n   vec2 uvR = vUv + vec2(get_offest(vUv.y, speed.x, offsetRadio.x * oR), get_offest(vUv.x, speed.y, offsetRadio.y * oR));\n   vec2 colorR = texture2D(u_texture, uvR).ra;\n   gl_FragColor = vec4(colorR.x * colorR.y, 0.0, 0.0, colorR.y);\n\n   vec2 uvG = vUv + vec2(get_offest(vUv.y, speed.x, offsetRadio.x * oG), get_offest(vUv.x, speed.y, offsetRadio.y * oG));\n   vec2 colorG = texture2D(u_texture, uvG).ga;\n   gl_FragColor += vec4(0.0, colorG.x * colorG.y , 0.0, colorG.y);\n\n   vec2 uvB = vUv + vec2(get_offest(vUv.y, speed.x, offsetRadio.x * oB), get_offest(vUv.x, speed.y, offsetRadio.y * oB));\n   vec2 colorB = texture2D(u_texture, uvB).ba;\n   gl_FragColor += vec4(0.0, 0.0, colorB.x * colorB.y, colorB.y);\n}",
        vertexShader: "\n#define PI 3.1415926535897932384626433832795\nuniform vec2 speed;\nuniform vec2 offsetRadio;\nuniform float offset;\nvarying vec2 vUv;\n\n\nfloat get_offest(float n, float aspect, float _offset) {\n      return cos((n - 0.5) * PI / 2.0) * aspect * _offset;\n}\n\nvoid main()\n{\n      vUv = uv;\n      vec3 c_position = position + vec3(\n            get_offest(uv.y, speed.x, offsetRadio.x * offset),\n            get_offest(uv.x, speed.y, offsetRadio.y * offset),\n            0.0\n      );\n      vec4 mvPosition = modelViewMatrix * vec4( c_position, 1.0 );\n      gl_Position = projectionMatrix * mvPosition;\n}",
        uniforms: {
          offset: {
            value: 200
          },
          offsetRadio: {
            value: new p.FM8(1.5, 1.5)
          },
          speed: {
            value: new p.FM8(0, 0)
          },
          u_texture: {
            value: this.emptyTexture
          }
        }
      }), this.item = new p.Kj0(new p._12(1e3, 1e3, 100, 100), this.itemShaderMaterial), this.item.position.set(-960, 0, 0);
    }
  };
  var j = webpackRequire(38082),
    N = webpackRequire.n(j);
  let SectionWorldClient = e => {
    let {
        index: t
      } = e,
      {
        sectionPointer: i
      } = (0, sectionStateModule.S)(),
      c = i === t,
      A = (0, React.useRef)(null),
      [v, x] = (0, React.useState)({
        visible: !1,
        dataIndex: -1
      }),
      p = b[v.dataIndex],
      w = (0, g.R)();
    (0, React.useEffect)(() => {
      "portrait" === w && x({
        visible: !0,
        dataIndex: 0
      });
    }, [w]), (0, React.useEffect)(() => {
      if (c) return () => {
        var e;
        null === (e = particleSystemModule.J.instance) || void 0 === e || e.disappear();
      };
    }, [c]), (0, React.useEffect)(() => {
      if (A.current = A.current || new StoryDraw(), c) {
        var e;
        return null === (e = A.current) || void 0 === e || e.init(), () => {
          var e;
          null === (e = A.current) || void 0 === e || e.remove();
        };
      }
    }, [c]), (0, React.useEffect)(() => {
      if (c) {
        var e, t, i;
        v.visible ? (null === (e = A.current) || void 0 === e || e.deactivate(), null === (t = particleSystemModule.J.instance) || void 0 === t || t.setTransform(() => {
          var e, t, i;
          let a = window.__ROOT_FONT_SIZE || 16;
          return w ? "portrait" === w ? {
            x: -5.75 * a * (a / 16),
            y: 0.15 * ((null === (e = d.H.instance) || void 0 === e ? void 0 : e.height) || 0),
            sc: 1 * (a / 16)
          } : {
            x: -0.2 * ((null === (t = d.H.instance) || void 0 === t ? void 0 : t.width) || 0),
            y: 0.05 * ((null === (i = d.H.instance) || void 0 === i ? void 0 : i.height) || 0),
            sc: 1.2 * (a / 16)
          } : {};
        }).setModel((null == p ? void 0 : p.model) || o.rhodes).appear()) : null === (i = particleSystemModule.J.instance) || void 0 === i || i.setTransform(() => {
          var e;
          let t = window.__ROOT_FONT_SIZE || 16;
          return {
            x: 0.15 * ((null === (e = d.H.instance) || void 0 === e ? void 0 : e.width) || 0),
            sc: 1.8 * (t / 16)
          };
        }).setModel(o.rhodes).appear();
      }
    }, [c, v.visible, v.dataIndex, w]);
    let j = (0, u.x)(),
      E = (0, u.x)(),
      y = (0, u.x)(),
      _ = (0, u.x)(),
      C = (0, u.x)(),
      S = (0, u.x)(),
      k = (0, React.useRef)(!1);
    (0, React.useEffect)(() => {
      let e = E.current,
        t = _.current,
        i = S.current,
        a = [{
          value: 0
        }, {
          value: 0
        }, {
          value: 0
        }];
      return v.visible ? (0, animationModule.Z)({
        targets: a,
        value: [0, 1],
        delay: animationModule.Z.stagger(200, {
          start: 600
        }),
        duration: 600,
        easing: "easeOutQuad",
        begin() {
          e.style.transform = "translateY(100%)", e.innerText = (null == p ? void 0 : p.name) || "", t.style.transform = "translateY(100%)", t.innerText = (null == p ? void 0 : p.nameEn) || "", i.style.transform = "translateY(-100%)", i.innerText = (null == p ? void 0 : p.intro) || "";
        },
        update() {
          e.style.transform = "translateY(".concat(100 * (1 - a[0].value), "%)"), t.style.transform = "translateY(".concat(100 * (1 - a[1].value), "%)"), i.style.transform = "translateY(-".concat(100 * (1 - a[2].value), "%)");
        }
      }).pause : (0, animationModule.Z)({
        targets: a,
        value: [0, 1],
        duration: 600,
        easing: "easeOutQuad",
        begin() {
          e.style.transform = "translateY(100%)", e.innerText = (null == p ? void 0 : p.name) || "", t.style.transform = "translateY(100%)", t.innerText = (null == p ? void 0 : p.nameEn) || "", i.style.transform = "translateY(-100%)", i.innerText = (null == p ? void 0 : p.intro) || "";
        },
        update() {
          e.style.transform = "translateY(".concat(100 * a[0].value, "%)"), t.style.transform = "translateY(".concat(100 * a[1].value, "%)"), i.style.transform = "translateY(-".concat(100 * a[2].value, "%)");
        }
      }).pause;
    }, [v.visible]);
    let changeDetail = e => {
      if (k.current) return;
      k.current = !0;
      let t = v.dataIndex,
        i = t + e >= b.length ? t + e - b.length : t + e < 0 ? t + e + b.length : t + e;
      x(e => ({
        ...e,
        dataIndex: i
      }));
      let a = j.current,
        s = E.current,
        r = y.current,
        l = _.current,
        c = C.current,
        A = S.current,
        o = [{
          value: 0
        }, {
          value: 0
        }, {
          value: 0
        }],
        d = Math.sign(e);
      animationModule.Z.timeline({
        targets: o,
        duration: 300,
        easing: "easeOutQuad",
        delay: animationModule.Z.stagger(100),
        update() {
          a.style.opacity = "".concat(o[0].value), r.style.opacity = "".concat(o[1].value), c.style.opacity = "".concat(o[2].value);
        },
        complete() {
          k.current = !1;
        }
      }).add({
        value: [1, 0],
        update() {
          a.style.transform = "translateX(".concat(-d * (1 - o[0].value) * 2, "rem)"), r.style.transform = "translateX(".concat(-d * (1 - o[1].value) * 2, "rem)"), c.style.transform = "translateX(".concat(-d * (1 - o[2].value) * 2, "rem)");
        }
      }).add({
        value: [0, 1],
        begin() {
          s.innerText = b[i].name || "", l.innerText = b[i].nameEn || "", A.innerText = b[i].intro || "";
        },
        update() {
          a.style.transform = "translateX(".concat(d * (1 - o[0].value) * 2, "rem)"), r.style.transform = "translateX(".concat(d * (1 - o[1].value) * 2, "rem)"), c.style.transform = "translateX(".concat(d * (1 - o[2].value) * 2, "rem)");
        }
      });
    };
    return (0, jsxRuntime.jsxs)("div", {
      className: (0, classNamesModule.Z)(N().container, c && N().active, v.visible ? N().detailVisible : N().detailInvisible),
      children: [(0, jsxRuntime.jsx)("div", {
        className: N().bgMask
      }), (0, jsxRuntime.jsx)("div", {
        className: N().storyList,
        onMouseEnter: () => {
          var e;
          null === (e = A.current) || void 0 === e || e.activate();
        },
        onMouseLeave: () => {
          var e;
          null === (e = A.current) || void 0 === e || e.deactivate();
        },
        children: b.map((e, t) => (0, jsxRuntime.jsxs)("div", {
          className: (0, classNamesModule.Z)(N().storyItem, c && !v.visible && N().visible),
          style: {
            transitionDelay: 200 * t + "ms"
          },
          onMouseEnter: () => {
            var t;
            null === (t = A.current) || void 0 === t || t.setDisplayImage(e.image);
          },
          onClick: () => x({
            visible: !0,
            dataIndex: t
          }),
          children: [(0, jsxRuntime.jsx)("div", {
            className: N().shadowText,
            children: e.nameEn
          }), (0, jsxRuntime.jsx)("div", {
            className: N().name,
            children: e.name
          }), (0, jsxRuntime.jsx)("div", {
            className: N().nameEn,
            children: e.nameEn
          })]
        }, e.key))
      }), (0, jsxRuntime.jsxs)("div", {
        className: N().detailContainer,
        children: [(0, jsxRuntime.jsxs)("div", {
          className: N().detailContent,
          children: [(0, jsxRuntime.jsx)("div", {
            ref: j,
            className: N().title,
            children: (0, jsxRuntime.jsx)("div", {
              ref: E,
              className: N().text
            })
          }), (0, jsxRuntime.jsx)("div", {
            ref: y,
            className: N().subtitle,
            children: (0, jsxRuntime.jsx)("div", {
              ref: _,
              className: N().text
            })
          }), (0, jsxRuntime.jsx)("div", {
            ref: C,
            className: N().desc,
            children: (0, jsxRuntime.jsx)("div", {
              ref: S,
              className: N().text
            })
          })]
        }), (0, jsxRuntime.jsx)("div", {
          className: N().arrowLeft,
          onClick: () => changeDetail(-1),
          children: (0, jsxRuntime.jsx)(h.PZ, {})
        }), (0, jsxRuntime.jsx)("div", {
          className: N().arrowRight,
          onClick: () => changeDetail(1),
          children: (0, jsxRuntime.jsx)(h.bI, {})
        })]
      }), (0, jsxRuntime.jsx)("div", {
        className: N().floatingText,
        children: "RESOURCES"
      }), (0, jsxRuntime.jsx)("div", {
        className: N().nav,
        children: (0, jsxRuntime.jsxs)("div", {
          className: N()._nav,
          children: [b.map((e, t) => (0, jsxRuntime.jsx)("div", {
            className: N().navItem,
            onClick: () => v.dataIndex !== t && changeDetail(t - v.dataIndex)
          }, t)), (0, jsxRuntime.jsx)("div", {
            className: N().pointer,
            style: {
              width: "".concat((100 / b.length).toFixed(2), "%"),
              left: "".concat((100 * v.dataIndex / b.length).toFixed(2), "%")
            }
          })]
        })
      }), (0, jsxRuntime.jsxs)("div", {
        className: N().closeBtn,
        onClick: () => x(e => ({
          ...e,
          visible: !1
        })),
        children: [(0, jsxRuntime.jsx)("div", {
          className: N().icon,
          children: (0, jsxRuntime.jsx)(h.PZ, {})
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
      })]
    });
  };
});
