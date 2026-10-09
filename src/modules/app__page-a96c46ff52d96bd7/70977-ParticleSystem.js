                                                                                                                 
                                                    
(function (module, exports, webpackRequire) {
  "use strict";

  webpackRequire.d(exports, {
    J: function () {
      return APS;
    }
  });
  var a,
    s,
    n = webpackRequire(31476),
    r = webpackRequire(83196),
    l = webpackRequire(93019),
    c = webpackRequire(82802),
    A = webpackRequire(79996);
  function move(e, t, i, a) {
    if (!t) return;
    let s = 1 / e.speed;
    if (e.pointIdx >= t.count) {
      e.a += (-1 - e.a) * s, e.color.set([e.r, e.g, e.b, e.a]);
      return;
    }
    let n = e.pointIdx,
      [r, l, c, o, d, h, u] = t.points.slice(7 * n, 7 * n + 7),
      g = A.c.interactive ? A.c.x - e.x : 0,
      m = A.c.interactive ? A.c.y - e.y : 0,
      f = Math.sqrt(g * g + m * m),
      v = 1 / (1 + f) / (1 + f),
      x = i.sc * r + i.x - e.x,
      b = i.sc * l + i.y - e.y,
      p = c - e.z;
    e.x += x * s + a * g * v, e.y += b * s + a * m * v, e.z += p * s, e.point.set([e.x, e.y, e.z]), e.r += (o - e.r) * s, e.g += (d - e.g) * s, e.b += (h - e.b) * s, e.a += (u - e.a) * s, e.color.set([e.r, e.g, e.b, e.a]);
  }
  let o = 1 / 3e3;
  let Particle = class Particle {
    constructor({
      pointIdx: e,
      speed: t,
      point: i,
      color: a
    }) {
      this.run = 0, this.pointIdx = e, this.point = i, this.x = i[0], this.y = i[1], this.z = i[2], this.color = a, this.r = a[0], this.g = a[1], this.b = a[2], this.a = a[3], this.speed = t;
    }
  };
  (a = s || (s = {}))[a.FIXED = 0] = "FIXED", a[a.GATHER = 1] = "GATHER", a[a.SPREAD = 2] = "SPREAD", a[a.PERSPECTIVE = 3] = "PERSPECTIVE";
  let d = {
    0: function (e, t, i) {
      if (!t) return;
      let a = 1 / e.speed;
      if (e.pointIdx >= t.count) {
        e.a += (-1 - e.a) * a, e.color.set([e.r, e.g, e.b, e.a]);
        return;
      }
      let s = e.pointIdx,
        [n, r, l, c, A, o, d] = t.points.slice(7 * s, 7 * s + 7),
        h = i.sc * n + i.x - e.x,
        u = i.sc * r + i.y - e.y,
        g = l - e.z;
      e.x += h * a, e.y += u * a, e.z += g * a, e.point.set([e.x, e.y, e.z]), e.r += (c - e.r) * a, e.g += (A - e.g) * a, e.b += (o - e.b) * a, e.a += (d - e.a) * a, e.color.set([e.r, e.g, e.b, e.a]);
    },
    1: function (e, t, i) {
      move(e, t, i, 40);
    },
    2: function (e, t, i) {
      move(e, t, i, -100);
    },
    3: function (e, t, i) {
      if (!t) return;
      if (e.pointIdx >= t.count) {
        e.a += (-1 - e.a) * 0.08, e.color.set([e.r, e.g, e.b, e.a]);
        return;
      }
      let a = e.pointIdx,
        [s, n, r, l, c, d, h] = t.points.slice(7 * a, 7 * a + 7),
        u = -Math.atan(0.03 * A.c.x * o),
        g = i.sc * s + i.x,
        m = -Math.atan(0.03 * A.c.y * o),
        f = i.sc * n + i.y,
        v = g * Math.cos(u) - 0.03 * A.c.x - e.x,
        x = f * Math.cos(m) - 0.03 * A.c.y - e.y;
      e.x += 0.08 * v, e.y += 0.08 * x, e.z += (r + g * Math.sin(u) + f * Math.sin(m) - e.z) * 0.08, e.point.set([e.x, e.y, e.z]), e.r += (l - e.r) * 0.08, e.g += (c - e.g) * 0.08, e.b += (d - e.b) * 0.08, e.a += (h - e.a) * 0.08, e.color.set([e.r, e.g, e.b, e.a]);
    }
  };
  let APS = class APS {
    static get instance() {
      return APS._inst;
    }
    setMode(e) {
      return this.mode = e, this;
    }
    setModel(e) {
      return this.model = e, this.fire();
    }
    appear() {
      var e, t;
      return null === (t = this.model) || void 0 === t || null === (e = t.shuffle) || void 0 === e || e.call(t), this;
    }
    disappear() {
      var e, t;
      return null === (t = this.model) || void 0 === t || null === (e = t.disappear) || void 0 === e || e.call(t), this;
    }
    fire() {
      return c.a.add(this.update), this;
    }
    setTransform(e) {
      return this.getUpdatedTransform = e, this;
    }
    load(e) {
      let {
        active: t,
        mode: i,
        model: a,
        transform: s
      } = e;
      return t ? (i && (this.mode = i), a && this.setModel(a), s && (this.getUpdatedTransform = s), this.appear()) : this.disappear(), this;
    }
    stop() {
      return c.a.remove(this.update), this;
    }
    destroy() {
      this.stop(), APS._inst = null;
    }
    constructor(e, {
      particleNum: t,
      speedRange: [i, a]
    } = {
      particleNum: 1e4,
      speedRange: [20, 30]
    }) {
      this.mode = 2, this.transform = {
        x: 0,
        y: 0,
        sc: 1,
        pointSize: 3
      }, this.getUpdatedTransform = () => {}, this.updateTransform = () => {
        let {
          x: e,
          y: t,
          sc: i,
          pointSize: a
        } = this.getUpdatedTransform() || {
          x: 0,
          y: 0,
          sc: 1,
          pointSize: 3
        };
        return this.transform.x = null != e ? e : this.transform.x, this.transform.y = null != t ? t : this.transform.y, this.transform.sc = null != i ? i : this.transform.sc, this.uPointSize.value = null != a ? a : this.transform.pointSize, this;
      }, this.update = () => {
        for (let e of (this.updateTransform(), this.particles)) d[this.mode](e, this.model, this.transform);
        this.aPosition.needsUpdate = !0, this.aColor.needsUpdate = !0;
      };
      let s = new Float32Array(3 * t),
        c = new Float32Array(4 * t);
      this.particles = (0, n.Z)(Array(t), 0).map((t, n) => {
        let l = (0.5 - Math.random()) * e.width,
          A = (0.5 - Math.random()) * e.height;
        return s.set([l, A, (0.5 - Math.random()) * 500], 3 * n), c.set([0.5, 0.5, 0.5, -1], 4 * n), new Particle({
          pointIdx: n,
          point: s.subarray(3 * n, 3 * n + 3),
          color: c.subarray(4 * n, 4 * n + 4),
          speed: (0, r.Z)(i, a)
        });
      }), this.model = {
        count: 0,
        points: [],
        size: {
          width: e.width,
          height: e.height
        }
      }, this.aPosition = new l.TlE(s, 3), this.aColor = new l.TlE(c, 4);
      let A = new l.u9r();
      A.setAttribute("position", this.aPosition), A.setAttribute("color", this.aColor), this.uPointSize = new l.xWb(1), setTimeout(async () => {
        let t = new l.xWb(await new l.dpR().loadAsync("../web.hycdn.cn/arknights/official/_next/static/media/particle.f4b76a4f.png")),
          i = new l.jyz({
            uniforms: {
              uTexture: t,
              uPointSize: this.uPointSize
            },
            vertexShader: "\n                    attribute vec4 color;\n                    varying vec4 vColor;\n                    uniform float uPointSize;\n                    void main() {\n                        vColor = color;\n                        vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n                        gl_PointSize = uPointSize;\n                        gl_Position = projectionMatrix * mvPosition;\n                    }\n                ",
            fragmentShader: "\n                    uniform sampler2D uTexture;\n                    varying vec4 vColor;\n                    void main() {\n                        vec4 texture = texture2D(uTexture, gl_PointCoord);\n                        gl_FragColor = vColor * texture;\n                        // gl_FragColor = vColor;\n                    }",
            transparent: !0,
            depthTest: !1
          }),
          a = new l.woe(A, i);
        e.scene.add(a);
      }, 0), APS._inst = this;
    }
  };
});
