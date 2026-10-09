                                                                                                            
                                                    
(function (e, n, t) {
  "use strict";

  t.d(n, {
    q: function () {
      return s;
    }
  });
  var i = t(51234),
    o = t(81087),
    r = t(11745);
  let c = t(91542),
    s = new class {
      play() {
        if (this.player && this.player.paused) {
          var e;
          null === (e = this.animeInst) || void 0 === e || e.pause(), this.animeInst = (0, i.Z)({
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
          null === (e = this.animeInst) || void 0 === e || e.pause(), this.animeInst = (0, i.Z)({
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
        return r.cT.getState().enabled && this.play(), this;
      }
      constructor() {
        if (this.player = null, this.animeInst = null, o.s$) return;
        let e = document.createElement("audio");
        e.src = c, e.volume = 0, e.loop = !0, e.load(), this.player = e;
      }
    }();
});
