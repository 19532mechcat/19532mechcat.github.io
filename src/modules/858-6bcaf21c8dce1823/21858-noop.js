                                                                                                            
                                                    
(function (e, t, n) {
  n.d(t, {
    Z: function () {
      return U;
    }
  });
  var r,
    i,
    a,
    s,
    o,
    c,
    l,
    u = n(84548),
    p = n(5862),
    f = "_HG_MODAL_CONTAINER",
    d = {
      appear: "enter",
      appearActive: "enter-active",
      appearDone: "enter-done",
      enter: "enter",
      enterActive: "enter-active",
      enterDone: "enter-done",
      exit: "exit",
      exitActive: "exit-active",
      exitDone: "exit-done"
    },
    y = {
      appear: "default-enter",
      appearActive: "default-enter-active",
      appearDone: "default-enter-done",
      enter: "default-enter",
      enterActive: "default-enter-active",
      enterDone: "default-enter-done",
      exit: "default-exit",
      exitActive: "default-exit-active",
      exitDone: "default-exit-done"
    },
    noop = function () {},
    h = n(49246),
    v = n(91568),
    __makeTemplateObject = function (e, t) {
      return Object.defineProperty ? Object.defineProperty(e, "raw", {
        value: t
      }) : e.raw = t, e;
    },
    __assign = function () {
      return (__assign = Object.assign || function (e) {
        for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e;
      }).apply(this, arguments);
    },
    m = {
      layerMask: (0, v.iv)(r || (r = __makeTemplateObject(["\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        background-color: rgba(0, 0, 0, 0.6);\n        opacity: 0;\n    "], ["\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        background-color: rgba(0, 0, 0, 0.6);\n        opacity: 0;\n    "]))),
      layerContent: (0, v.iv)(i || (i = __makeTemplateObject(["\n        position: relative;\n    "], ["\n        position: relative;\n    "])))
    },
    g = (0, v.iv)(a || (a = __makeTemplateObject(["\n    ", " {\n        opacity: 0;\n        transform: scale(0.88);\n    }\n"], ["\n    ", " {\n        opacity: 0;\n        transform: scale(0.88);\n    }\n"])), ".".concat(m.layerContent)),
    _ = __assign(__assign({
      container: (0, v.iv)(s || (s = __makeTemplateObject(["\n        position: absolute;\n        left: 0;\n        top: 0;\n        width: 100%;\n        height: 100%;\n        pointer-events: none;\n        z-index: 999;\n    "], ["\n        position: absolute;\n        left: 0;\n        top: 0;\n        width: 100%;\n        height: 100%;\n        pointer-events: none;\n        z-index: 999;\n    "]))),
      root: (0, v.iv)(o || (o = __makeTemplateObject(["\n        -webkit-tap-highlight-color: transparent;\n        position: fixed;\n        left: 0;\n        top: 0;\n        width: 100%;\n        height: 100%;\n        pointer-events: none;\n\n        a {\n            color: inherit;\n            text-decoration: inherit;\n        }\n    "], ["\n        -webkit-tap-highlight-color: transparent;\n        position: fixed;\n        left: 0;\n        top: 0;\n        width: 100%;\n        height: 100%;\n        pointer-events: none;\n\n        a {\n            color: inherit;\n            text-decoration: inherit;\n        }\n    "]))),
      layer: (0, v.iv)(c || (c = __makeTemplateObject(["\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        top: 0;\n        left: 0;\n        z-index: 0;\n\n        pointer-events: none;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n\n        &.enter {\n            ", " {\n                opacity: 0;\n                transition: opacity 0.3s;\n            }\n        }\n        &.enter-active,\n        &.enter-done {\n            pointer-events: auto;\n            ", " {\n                opacity: 1;\n            }\n        }\n\n        &.exit {\n            ", " {\n                opacity: 1;\n                transition: opacity 0.3s;\n            }\n        }\n        &.exit-active {\n            ", " {\n                opacity: 0;\n            }\n        }\n        &.exit-done {\n            display: none;\n        }\n\n        &.default-enter {\n            ", " {\n                opacity: 0;\n                transform: scale(0.88);\n                transition:\n                    opacity 0.3s,\n                    transform 0.3s;\n            }\n        }\n        &.default-enter-active,\n        &.default-enter-done {\n            ", " {\n                transform: scale(1);\n                opacity: 1;\n            }\n        }\n        &.default-exit {\n            ", " {\n                opacity: 1;\n                transform: scale(1);\n                transition:\n                    opacity 0.3s,\n                    transform 0.3s;\n            }\n        }\n        &.default-exit-active {\n            ", " {\n                opacity: 0;\n                transform: scale(0.88);\n            }\n        }\n    "], ["\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        top: 0;\n        left: 0;\n        z-index: 0;\n\n        pointer-events: none;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n\n        &.enter {\n            ", " {\n                opacity: 0;\n                transition: opacity 0.3s;\n            }\n        }\n        &.enter-active,\n        &.enter-done {\n            pointer-events: auto;\n            ", " {\n                opacity: 1;\n            }\n        }\n\n        &.exit {\n            ", " {\n                opacity: 1;\n                transition: opacity 0.3s;\n            }\n        }\n        &.exit-active {\n            ", " {\n                opacity: 0;\n            }\n        }\n        &.exit-done {\n            display: none;\n        }\n\n        &.default-enter {\n            ", " {\n                opacity: 0;\n                transform: scale(0.88);\n                transition:\n                    opacity 0.3s,\n                    transform 0.3s;\n            }\n        }\n        &.default-enter-active,\n        &.default-enter-done {\n            ", " {\n                transform: scale(1);\n                opacity: 1;\n            }\n        }\n        &.default-exit {\n            ", " {\n                opacity: 1;\n                transform: scale(1);\n                transition:\n                    opacity 0.3s,\n                    transform 0.3s;\n            }\n        }\n        &.default-exit-active {\n            ", " {\n                opacity: 0;\n                transform: scale(0.88);\n            }\n        }\n    "])), ".".concat(m.layerMask), ".".concat(m.layerMask), ".".concat(m.layerMask), ".".concat(m.layerMask), ".".concat(m.layerContent), ".".concat(m.layerContent), ".".concat(m.layerContent), ".".concat(m.layerContent))
    }, m), {
      defaultTransition: g
    }),
    __read = function (e, t) {
      var n = "function" == typeof Symbol && e[Symbol.iterator];
      if (!n) return e;
      var r,
        i,
        a = n.call(e),
        s = [];
      try {
        for (; (void 0 === t || t-- > 0) && !(r = a.next()).done;) s.push(r.value);
      } catch (e) {
        i = {
          error: e
        };
      } finally {
        try {
          r && !r.done && (n = a.return) && n.call(a);
        } finally {
          if (i) throw i.error;
        }
      }
      return s;
    };
  function LayerView(e) {
    var t,
      n = e.active,
      r = e.maskClosable,
      i = void 0 === r || r,
      a = e.onClose,
      s = e.renderContent,
      o = e.className,
      c = e.maskClassName,
      l = e.contentClassName,
      p = e.disableTransition,
      f = e.transitionDuration,
      m = e.transitionClassNames;
    return (0, u.jsx)(h.Z, {
      appear: !0,
      in: n,
      timeout: void 0 !== p && p ? 0 : void 0 === f ? 300 : f,
      classNames: (t = m || y, Object.entries(d).reduce(function (e, n) {
        var r = __read(n, 2),
          i = r[0],
          a = r[1];
        return e[i] = a + (t[i] ? " ".concat(t[i]) : ""), e;
      }, {})),
      children: (0, u.jsxs)("div", {
        className: (0, v.cx)(_.layer, m ? void 0 : _.defaultTransition, o),
        children: [(0, u.jsx)("div", {
          className: (0, v.cx)(_.layerMask, c),
          onClick: function () {
            n && i && (null == a || a());
          }
        }), (0, u.jsx)("div", {
          className: (0, v.cx)(_.layerContent, l),
          children: null == s ? void 0 : s({
            onClose: a || noop
          })
        })]
      })
    });
  }
  var Layer_assign = function () {
      return (Layer_assign = Object.assign || function (e) {
        for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e;
      }).apply(this, arguments);
    },
    b = function () {
      function Layer(e, t, n) {
        var r = this;
        this.container = e, this.renderer = t, this.id = Layer._count++, this.active = !1, this.View = function () {
          return (0, u.jsx)(LayerView, Layer_assign({}, r.option, {
            active: r.active,
            onClose: r.dispose,
            renderContent: r.renderer
          }));
        }, this.dispose = function () {
          r.option.disableTransition ? r.container.remove(r) : (r.active = !1, r.container.render(), setTimeout(function () {
            r.container.remove(r);
          }, r.option.transitionDuration || 300));
        }, this.option = Layer_assign({}, n), this.active = !0;
      }
      return Layer._count = 1, Layer;
    }(),
    x = function () {
      function Container(e) {
        this.customId = e, this.layers = [], this.id = ++Container._id;
      }
      return Object.defineProperty(Container.prototype, "rootElem", {
        get: function () {
          if (!this._rootElem) {
            var e = document.createElement("div");
            e.id = this.customId || (this.id ? "".concat(f, "_").concat(this.id) : f), e.classList.add("hg-modal-container", _.container), this._rootElem = e, document.body.appendChild(this._rootElem);
          }
          return this._rootElem;
        },
        enumerable: !1,
        configurable: !0
      }), Container.prototype.active = function () {
        var e = this.rootElem;
        return this.rootRender || (this.rootRender = (0, p.createRoot)(e)), this.rootRender;
      }, Container.prototype.render = function () {
        this.active().render((0, u.jsx)(u.Fragment, {
          children: this.layers.map(function (e) {
            return (0, u.jsx)(e.View, {}, e.id);
          })
        }));
      }, Container.prototype.show = function (e, t) {
        var n = new b(this, e, t);
        return this.layers.push(n), this.render(), n;
      }, Container.prototype.remove = function (e) {
        var t = this.layers.indexOf(e);
        t >= 0 && this.layers.splice(t, 1), this.render();
      }, Container._id = 0, Container;
    }(),
    k = n(58036),
    w = n(461),
    Modal_assign = function () {
      return (Modal_assign = Object.assign || function (e) {
        for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e;
      }).apply(this, arguments);
    },
    __rest = function (e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
      if (null != e && "function" == typeof Object.getOwnPropertySymbols) for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) 0 > t.indexOf(r[i]) && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
      return n;
    },
    U = Object.assign(function (e) {
      var t = e.children,
        n = __rest(e, ["children"]),
        r = (0, k.useMemo)(function () {
          return new x().rootElem;
        }, []);
      return (0, w.createPortal)((0, u.jsx)(LayerView, Modal_assign({}, n, {
        renderContent: function () {
          return t;
        }
      })), r);
    }, {
      show: (l || (l = new x()), l).show.bind(l),
      createContainer: function (e) {
        return new x(e);
      }
    });
});
