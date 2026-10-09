                                                                                                                 
                                                    
(function (module, exports, webpackRequire) {
  "use strict";

  webpackRequire.d(exports, {
    H: function () {
      return Stage;
    }
  });
  var a = webpackRequire(62940),
    s = webpackRequire(93019),
    browserHelpers = webpackRequire(81087),
    r = webpackRequire(82802);
  let Stage = class Stage {
    static get instance() {
      return Stage._instance;
    }
    get width() {
      return this.canvas.clientWidth;
    }
    get resoluteWidth() {
      return (0, browserHelpers.mI)() ? this.canvas.clientWidth : Math.round(this.canvas.clientWidth * (window.devicePixelRatio || 1));
    }
    get height() {
      return this.canvas.clientHeight;
    }
    get resoluteHeight() {
      return (0, browserHelpers.mI)() ? this.canvas.clientHeight : Math.round(this.canvas.clientHeight * (window.devicePixelRatio || 1));
    }
    stop() {
      r.a.remove(this.update);
    }
    destroy() {
      this.stop(), Stage._instance = null;
    }
    constructor(e) {
      if (this.fitViewport = (0, a.Z)(() => {
        let {
          width: e,
          height: t,
          resoluteWidth: i,
          resoluteHeight: a
        } = this;
        (this.canvas.width !== i || this.canvas.height !== a) && (this.renderer.setSize(i, a, !1), this.camera.near = 110, this.camera.far = 1e3, this.camera.aspect = e / t, this.camera.fov = s.M8C.radToDeg(2 * Math.atan(t / 2 / 160)), this.camera.updateProjectionMatrix(), this.camera.position.set(0, 0, 160), this.camera.lookAt(0, 0, 0));
      }), this.update = () => {
        this.fitViewport(), this.renderer.render(this.scene, this.camera);
      }, browserHelpers.s$) return;
      this.canvas = e, this.scene = new s.xsS(), this.camera = new s.cPb(), this.renderer = new s.CP7({
        canvas: this.canvas,
        alpha: !0
      }), r.a.add(this.update), Stage._instance = this;
    }
  };
});
