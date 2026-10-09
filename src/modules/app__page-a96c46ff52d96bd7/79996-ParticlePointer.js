                                                                                                                 
                                                    
(function (module, exports, webpackRequire) {
  "use strict";

  webpackRequire.d(exports, {
    c: function () {
      return l;
    }
  });
  var a = webpackRequire(62940),
    browserHelpers = webpackRequire(81087),
    n = webpackRequire(77286);
  let r = {
      queue: [],
      init() {
        return browserHelpers.s$ || window.addEventListener("resize", (0, a.Z)(() => {
          for (let e of this.queue) e();
        })), this;
      },
      add(e) {
        let t = this.queue.indexOf(e);
        return t < 0 && this.queue.push(e), this;
      },
      remove(e) {
        let t = this.queue.indexOf(e);
        return t >= 0 && this.queue.splice(t, 1), this;
      }
    }.init(),
    l = {
      x: 0,
      y: 0,
      clientX: 0,
      clientY: 0,
      interactive: !1,
      init() {
        if (browserHelpers.s$) return this;
        for (let e of ["mousemove", "touchstart", "touchmove"]) document.addEventListener(e, (0, a.Z)(e => {
          n.H.instance && (this.interactive = !0, "targetTouches" in e ? (this.clientX = e.targetTouches[0].clientX, this.clientY = e.targetTouches[0].clientY, this.x = e.targetTouches[0].clientX - 0.5 * n.H.instance.width - 0.5 * (window.innerWidth - n.H.instance.width), this.y = 0.5 * n.H.instance.height - e.targetTouches[0].clientY) : (this.clientX = e.clientX, this.clientY = e.clientY, this.x = e.clientX - 0.5 * n.H.instance.width - 0.5 * (window.innerWidth - n.H.instance.width), this.y = 0.5 * n.H.instance.height - e.clientY));
        }), {
          passive: !0
        });
        for (let e of ["touchend", "mouseup"]) document.addEventListener(e, (0, a.Z)(() => {
          (0, browserHelpers.Fq)() && (this.interactive = !1, this.x = 0, this.y = 0);
        }), {
          passive: !0
        });
        return r.add(this.resize.bind(this)), this;
      },
      resize() {
        this.interactive = !1, this.x = 0, this.y = 0;
      }
    }.init();
});
