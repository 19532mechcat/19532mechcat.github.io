                                                                                                                   
                                                    
(function (module, exports, webpackRequire) {
  "use strict";

  webpackRequire.d(exports, {
    q: function () {
      return r;
    }
  });
  var animationModule = webpackRequire(51234),
    browserHelpers = webpackRequire(81087),
    s = webpackRequire(11745);
  let c = webpackRequire(91542),
    r = new class {
      play() {
        if (this.player && this.player.paused) {
          var e;
          null === (e = this.animeInst) || void 0 === e || e.pause(), this.animeInst = (0, animationModule.Z)({
            targets: this.player,
            volume: 1,
            duration: 600,
            easing: "linear",
            begin: () => {
              this.player.play().catch(e => console.warn(e));
            }
          });
        }
        return this;
      }
      pause() {
        if (this.player) {
          var e;
          null === (e = this.animeInst) || void 0 === e || e.pause(), this.animeInst = (0, animationModule.Z)({
            targets: this.player,
            volume: 0,
            duration: 300,
            easing: "linear",
            complete: () => {
              this.player.pause();
            }
          });
        }
        return this;
      }
      resume() {
        return s.cT.getState().enabled && this.play(), this;
      }
      constructor() {
        if (this.player = null, this.animeInst = null, browserHelpers.s$) return;
        let e = document.createElement("audio");
        e.src = c, e.volume = 0, e.loop = !0, e.load(), this.player = e;
      }
    }();
});
