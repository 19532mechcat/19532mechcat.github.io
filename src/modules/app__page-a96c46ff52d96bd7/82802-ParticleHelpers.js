                                                                                                                 
                                                    
(function (module, exports, webpackRequire) {
  "use strict";

  webpackRequire.d(exports, {
    a: function () {
      return s;
    },
    v: function () {
      return n;
    }
  });
  var browserHelpers = webpackRequire(81087);
  let s = {
      queue: [],
      add(e) {
        let t = this.queue.indexOf(e);
        return t < 0 && this.queue.push(e), this;
      },
      remove(e) {
        let t = this.queue.indexOf(e);
        return t >= 0 && this.queue.splice(t, 1), this;
      },
      fps: 61,
      rafId: NaN,
      lastUpdated: NaN,
      update(e) {
        if (!this.lastUpdated || e - this.lastUpdated > 1e3 / this.fps) for (let t of (this.lastUpdated = e, this.queue)) t(e);
        this.rafId = window.requestAnimationFrame(this.update.bind(this));
      },
      init() {
        return browserHelpers.s$ || (this.rafId = window.requestAnimationFrame(this.update.bind(this))), this;
      }
    }.init(),
    n = {
      queue: [],
      add(e) {
        let t = this.queue.indexOf(e);
        return t < 0 && this.queue.push(e), this;
      },
      remove(e) {
        let t = this.queue.indexOf(e);
        return t >= 0 && this.queue.splice(t, 1), this;
      },
      fps: 31,
      rafId: NaN,
      lastUpdated: NaN,
      update(e) {
        if (!this.lastUpdated || e - this.lastUpdated > 1e3 / this.fps) for (let t of (this.lastUpdated = e, this.queue)) t(e);
        this.rafId = window.requestAnimationFrame(this.update.bind(this));
      },
      init() {
        return browserHelpers.s$ || (this.rafId = window.requestAnimationFrame(this.update.bind(this))), this;
      }
    }.init();
});
