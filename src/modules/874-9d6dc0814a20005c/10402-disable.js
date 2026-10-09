                                                                                                            
                                                    
(function (e, t, i) {
  i.d(t, {
    pt: function () {
      return Autoplay;
    },
    Rv: function () {
      return freeMode;
    },
    LW: function () {
      return Scrollbar;
    }
  });
  var r = i(99188),
    s = i(34442);
  function Scrollbar(e) {
    let t,
      i,
      a,
      n,
      {
        swiper: l,
        extendParams: o,
        on: d,
        emit: c
      } = e,
      u = (0, r.g)(),
      p = !1,
      h = null,
      f = null;
    function setTranslate() {
      if (!l.params.scrollbar.el || !l.scrollbar.el) return;
      let {
          scrollbar: e,
          rtlTranslate: t
        } = l,
        {
          dragEl: r,
          el: s
        } = e,
        n = l.params.scrollbar,
        o = l.params.loop ? l.progressLoop : l.progress,
        d = i,
        c = (a - i) * o;
      t ? (c = -c) > 0 ? (d = i - c, c = 0) : -c + i > a && (d = a + c) : c < 0 ? (d = i + c, c = 0) : c + i > a && (d = a - c), l.isHorizontal() ? (r.style.transform = `translate3d(${c}px, 0, 0)`, r.style.width = `${d}px`) : (r.style.transform = `translate3d(0px, ${c}px, 0)`, r.style.height = `${d}px`), n.hide && (clearTimeout(h), s.style.opacity = 1, h = setTimeout(() => {
        s.style.opacity = 0, s.style.transitionDuration = "400ms";
      }, 1e3));
    }
    function updateSize() {
      if (!l.params.scrollbar.el || !l.scrollbar.el) return;
      let {
          scrollbar: e
        } = l,
        {
          dragEl: t,
          el: r
        } = e;
      t.style.width = "", t.style.height = "", a = l.isHorizontal() ? r.offsetWidth : r.offsetHeight, n = l.size / (l.virtualSize + l.params.slidesOffsetBefore - (l.params.centeredSlides ? l.snapGrid[0] : 0)), i = "auto" === l.params.scrollbar.dragSize ? a * n : parseInt(l.params.scrollbar.dragSize, 10), l.isHorizontal() ? t.style.width = `${i}px` : t.style.height = `${i}px`, n >= 1 ? r.style.display = "none" : r.style.display = "", l.params.scrollbar.hide && (r.style.opacity = 0), l.params.watchOverflow && l.enabled && e.el.classList[l.isLocked ? "add" : "remove"](l.params.scrollbar.lockClass);
    }
    function getPointerPosition(e) {
      return l.isHorizontal() ? e.clientX : e.clientY;
    }
    function setDragPosition(e) {
      let r;
      let {
          scrollbar: n,
          rtlTranslate: o
        } = l,
        {
          el: d
        } = n;
      r = Math.max(Math.min(r = (getPointerPosition(e) - (0, s.b)(d)[l.isHorizontal() ? "left" : "top"] - (null !== t ? t : i / 2)) / (a - i), 1), 0), o && (r = 1 - r);
      let c = l.minTranslate() + (l.maxTranslate() - l.minTranslate()) * r;
      l.updateProgress(c), l.setTranslate(c), l.updateActiveIndex(), l.updateSlidesClasses();
    }
    function onDragStart(e) {
      let i = l.params.scrollbar,
        {
          scrollbar: r,
          wrapperEl: s
        } = l,
        {
          el: a,
          dragEl: n
        } = r;
      p = !0, t = e.target === n ? getPointerPosition(e) - e.target.getBoundingClientRect()[l.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), s.style.transitionDuration = "100ms", n.style.transitionDuration = "100ms", setDragPosition(e), clearTimeout(f), a.style.transitionDuration = "0ms", i.hide && (a.style.opacity = 1), l.params.cssMode && (l.wrapperEl.style["scroll-snap-type"] = "none"), c("scrollbarDragStart", e);
    }
    function onDragMove(e) {
      let {
          scrollbar: t,
          wrapperEl: i
        } = l,
        {
          el: r,
          dragEl: s
        } = t;
      p && (e.preventDefault && e.cancelable ? e.preventDefault() : e.returnValue = !1, setDragPosition(e), i.style.transitionDuration = "0ms", r.style.transitionDuration = "0ms", s.style.transitionDuration = "0ms", c("scrollbarDragMove", e));
    }
    function onDragEnd(e) {
      let t = l.params.scrollbar,
        {
          scrollbar: i,
          wrapperEl: r
        } = l,
        {
          el: a
        } = i;
      p && (p = !1, l.params.cssMode && (l.wrapperEl.style["scroll-snap-type"] = "", r.style.transitionDuration = ""), t.hide && (clearTimeout(f), f = (0, s.n)(() => {
        a.style.opacity = 0, a.style.transitionDuration = "400ms";
      }, 1e3)), c("scrollbarDragEnd", e), t.snapOnRelease && l.slideToClosest());
    }
    function events(e) {
      let {
          scrollbar: t,
          params: i
        } = l,
        r = t.el;
      if (!r) return;
      let s = !!i.passiveListeners && {
          passive: !1,
          capture: !1
        },
        a = !!i.passiveListeners && {
          passive: !0,
          capture: !1
        };
      if (!r) return;
      let n = "on" === e ? "addEventListener" : "removeEventListener";
      r[n]("pointerdown", onDragStart, s), u[n]("pointermove", onDragMove, s), u[n]("pointerup", onDragEnd, a);
    }
    function init() {
      var e, t, i, r;
      let a, n;
      let {
        scrollbar: o,
        el: d
      } = l;
      l.params.scrollbar = (e = l.originalParams.scrollbar, t = l.params.scrollbar, i = {
        el: "swiper-scrollbar"
      }, l.params.createElements && Object.keys(i).forEach(r => {
        if (!t[r] && !0 === t.auto) {
          let a = (0, s.e)(l.el, `.${i[r]}`)[0];
          a || ((a = (0, s.c)("div", i[r])).className = i[r], l.el.append(a)), t[r] = a, e[r] = a;
        }
      }), t);
      let c = l.params.scrollbar;
      if (c.el) {
        if ("string" == typeof c.el && l.isElement && (a = l.el.querySelector(c.el)), a || "string" != typeof c.el) a || (a = c.el);else if (!(a = u.querySelectorAll(c.el)).length) return;
        l.params.uniqueNavElements && "string" == typeof c.el && a.length > 1 && 1 === d.querySelectorAll(c.el).length && (a = d.querySelector(c.el)), a.length > 0 && (a = a[0]), a.classList.add(l.isHorizontal() ? c.horizontalClass : c.verticalClass), a && ((n = a.querySelector((void 0 === (r = l.params.scrollbar.dragClass) && (r = ""), `.${r.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`))) || (n = (0, s.c)("div", l.params.scrollbar.dragClass), a.append(n))), Object.assign(o, {
          el: a,
          dragEl: n
        }), !c.draggable || l.params.scrollbar.el && l.scrollbar.el && events("on"), a && a.classList[l.enabled ? "remove" : "add"](...(0, s.i)(l.params.scrollbar.lockClass));
      }
    }
    function destroy() {
      let e = l.params.scrollbar,
        t = l.scrollbar.el;
      t && t.classList.remove(...(0, s.i)(l.isHorizontal() ? e.horizontalClass : e.verticalClass)), l.params.scrollbar.el && l.scrollbar.el && events("off");
    }
    o({
      scrollbar: {
        el: null,
        dragSize: "auto",
        hide: !1,
        draggable: !1,
        snapOnRelease: !0,
        lockClass: "swiper-scrollbar-lock",
        dragClass: "swiper-scrollbar-drag",
        scrollbarDisabledClass: "swiper-scrollbar-disabled",
        horizontalClass: "swiper-scrollbar-horizontal",
        verticalClass: "swiper-scrollbar-vertical"
      }
    }), l.scrollbar = {
      el: null,
      dragEl: null
    }, d("changeDirection", () => {
      if (!l.scrollbar || !l.scrollbar.el) return;
      let e = l.params.scrollbar,
        {
          el: t
        } = l.scrollbar;
      (t = (0, s.m)(t)).forEach(t => {
        t.classList.remove(e.horizontalClass, e.verticalClass), t.classList.add(l.isHorizontal() ? e.horizontalClass : e.verticalClass);
      });
    }), d("init", () => {
      !1 === l.params.scrollbar.enabled ? disable() : (init(), updateSize(), setTranslate());
    }), d("update resize observerUpdate lock unlock changeDirection", () => {
      updateSize();
    }), d("setTranslate", () => {
      setTranslate();
    }), d("setTransition", (e, t) => {
      l.params.scrollbar.el && l.scrollbar.el && (l.scrollbar.dragEl.style.transitionDuration = `${t}ms`);
    }), d("enable disable", () => {
      let {
        el: e
      } = l.scrollbar;
      e && e.classList[l.enabled ? "remove" : "add"](...(0, s.i)(l.params.scrollbar.lockClass));
    }), d("destroy", () => {
      destroy();
    });
    let disable = () => {
      l.el.classList.add(...(0, s.i)(l.params.scrollbar.scrollbarDisabledClass)), l.scrollbar.el && l.scrollbar.el.classList.add(...(0, s.i)(l.params.scrollbar.scrollbarDisabledClass)), destroy();
    };
    Object.assign(l.scrollbar, {
      enable: () => {
        l.el.classList.remove(...(0, s.i)(l.params.scrollbar.scrollbarDisabledClass)), l.scrollbar.el && l.scrollbar.el.classList.remove(...(0, s.i)(l.params.scrollbar.scrollbarDisabledClass)), init(), updateSize(), setTranslate();
      },
      disable,
      updateSize,
      setTranslate,
      init,
      destroy
    });
  }
  function Autoplay(e) {
    let t,
      i,
      s,
      a,
      n,
      l,
      o,
      d,
      c,
      u,
      {
        swiper: p,
        extendParams: h,
        on: f,
        emit: m,
        params: v
      } = e;
    p.autoplay = {
      running: !1,
      paused: !1,
      timeLeft: 0
    }, h({
      autoplay: {
        enabled: !1,
        delay: 3e3,
        waitForTransition: !0,
        disableOnInteraction: !1,
        stopOnLastSlide: !1,
        reverseDirection: !1,
        pauseOnMouseEnter: !1
      }
    });
    let g = v && v.autoplay ? v.autoplay.delay : 3e3,
      w = v && v.autoplay ? v.autoplay.delay : 3e3,
      y = new Date().getTime();
    function onTransitionEnd(e) {
      p && !p.destroyed && p.wrapperEl && e.target === p.wrapperEl && (p.wrapperEl.removeEventListener("transitionend", onTransitionEnd), !u && resume());
    }
    let calcTimeLeft = () => {
        if (p.destroyed || !p.autoplay.running) return;
        p.autoplay.paused ? a = !0 : a && (w = s, a = !1);
        let e = p.autoplay.paused ? s : y + w - new Date().getTime();
        p.autoplay.timeLeft = e, m("autoplayTimeLeft", e, e / g), i = requestAnimationFrame(() => {
          calcTimeLeft();
        });
      },
      getSlideDelay = () => {
        let e;
        if (!(e = p.virtual && p.params.virtual.enabled ? p.slides.filter(e => e.classList.contains("swiper-slide-active"))[0] : p.slides[p.activeIndex])) return;
        let t = parseInt(e.getAttribute("data-swiper-autoplay"), 10);
        return t;
      },
      run = e => {
        if (p.destroyed || !p.autoplay.running) return;
        cancelAnimationFrame(i), calcTimeLeft();
        let r = void 0 === e ? p.params.autoplay.delay : e;
        g = p.params.autoplay.delay, w = p.params.autoplay.delay;
        let a = getSlideDelay();
        !Number.isNaN(a) && a > 0 && void 0 === e && (r = a, g = a, w = a), s = r;
        let n = p.params.speed,
          proceed = () => {
            p && !p.destroyed && (p.params.autoplay.reverseDirection ? !p.isBeginning || p.params.loop || p.params.rewind ? (p.slidePrev(n, !0, !0), m("autoplay")) : p.params.autoplay.stopOnLastSlide || (p.slideTo(p.slides.length - 1, n, !0, !0), m("autoplay")) : !p.isEnd || p.params.loop || p.params.rewind ? (p.slideNext(n, !0, !0), m("autoplay")) : p.params.autoplay.stopOnLastSlide || (p.slideTo(0, n, !0, !0), m("autoplay")), p.params.cssMode && (y = new Date().getTime(), requestAnimationFrame(() => {
              run();
            })));
          };
        return r > 0 ? (clearTimeout(t), t = setTimeout(() => {
          proceed();
        }, r)) : requestAnimationFrame(() => {
          proceed();
        }), r;
      },
      start = () => {
        y = new Date().getTime(), p.autoplay.running = !0, run(), m("autoplayStart");
      },
      stop = () => {
        p.autoplay.running = !1, clearTimeout(t), cancelAnimationFrame(i), m("autoplayStop");
      },
      pause = (e, i) => {
        if (p.destroyed || !p.autoplay.running) return;
        clearTimeout(t), e || (c = !0);
        let proceed = () => {
          m("autoplayPause"), p.params.autoplay.waitForTransition ? p.wrapperEl.addEventListener("transitionend", onTransitionEnd) : resume();
        };
        if (p.autoplay.paused = !0, i) {
          d && (s = p.params.autoplay.delay), d = !1, proceed();
          return;
        }
        let r = s || p.params.autoplay.delay;
        s = r - (new Date().getTime() - y), p.isEnd && s < 0 && !p.params.loop || (s < 0 && (s = 0), proceed());
      },
      resume = () => {
        p.isEnd && s < 0 && !p.params.loop || p.destroyed || !p.autoplay.running || (y = new Date().getTime(), c ? (c = !1, run(s)) : run(), p.autoplay.paused = !1, m("autoplayResume"));
      },
      onVisibilityChange = () => {
        if (p.destroyed || !p.autoplay.running) return;
        let e = (0, r.g)();
        "hidden" === e.visibilityState && (c = !0, pause(!0)), "visible" === e.visibilityState && resume();
      },
      onPointerEnter = e => {
        "mouse" === e.pointerType && (c = !0, u = !0, p.animating || p.autoplay.paused || pause(!0));
      },
      onPointerLeave = e => {
        "mouse" === e.pointerType && (u = !1, p.autoplay.paused && resume());
      },
      attachMouseEvents = () => {
        p.params.autoplay.pauseOnMouseEnter && (p.el.addEventListener("pointerenter", onPointerEnter), p.el.addEventListener("pointerleave", onPointerLeave));
      },
      detachMouseEvents = () => {
        p.el.removeEventListener("pointerenter", onPointerEnter), p.el.removeEventListener("pointerleave", onPointerLeave);
      },
      attachDocumentEvents = () => {
        let e = (0, r.g)();
        e.addEventListener("visibilitychange", onVisibilityChange);
      },
      detachDocumentEvents = () => {
        let e = (0, r.g)();
        e.removeEventListener("visibilitychange", onVisibilityChange);
      };
    f("init", () => {
      p.params.autoplay.enabled && (attachMouseEvents(), attachDocumentEvents(), start());
    }), f("destroy", () => {
      detachMouseEvents(), detachDocumentEvents(), p.autoplay.running && stop();
    }), f("_freeModeStaticRelease", () => {
      (l || c) && resume();
    }), f("_freeModeNoMomentumRelease", () => {
      p.params.autoplay.disableOnInteraction ? stop() : pause(!0, !0);
    }), f("beforeTransitionStart", (e, t, i) => {
      !p.destroyed && p.autoplay.running && (i || !p.params.autoplay.disableOnInteraction ? pause(!0, !0) : stop());
    }), f("sliderFirstMove", () => {
      if (!p.destroyed && p.autoplay.running) {
        if (p.params.autoplay.disableOnInteraction) {
          stop();
          return;
        }
        n = !0, l = !1, c = !1, o = setTimeout(() => {
          c = !0, l = !0, pause(!0);
        }, 200);
      }
    }), f("touchEnd", () => {
      if (!p.destroyed && p.autoplay.running && n) {
        if (clearTimeout(o), clearTimeout(t), p.params.autoplay.disableOnInteraction) {
          l = !1, n = !1;
          return;
        }
        l && p.params.cssMode && resume(), l = !1, n = !1;
      }
    }), f("slideChange", () => {
      !p.destroyed && p.autoplay.running && (d = !0);
    }), Object.assign(p.autoplay, {
      start,
      stop,
      pause,
      resume
    });
  }
  function freeMode(e) {
    let {
      swiper: t,
      extendParams: i,
      emit: r,
      once: a
    } = e;
    i({
      freeMode: {
        enabled: !1,
        momentum: !0,
        momentumRatio: 1,
        momentumBounce: !0,
        momentumBounceRatio: 1,
        momentumVelocityRatio: 1,
        sticky: !1,
        minimumVelocity: .02
      }
    }), Object.assign(t, {
      freeMode: {
        onTouchStart: function () {
          if (t.params.cssMode) return;
          let e = t.getTranslate();
          t.setTranslate(e), t.setTransition(0), t.touchEventsData.velocities.length = 0, t.freeMode.onTouchEnd({
            currentPos: t.rtl ? t.translate : -t.translate
          });
        },
        onTouchMove: function () {
          if (t.params.cssMode) return;
          let {
            touchEventsData: e,
            touches: i
          } = t;
          0 === e.velocities.length && e.velocities.push({
            position: i[t.isHorizontal() ? "startX" : "startY"],
            time: e.touchStartTime
          }), e.velocities.push({
            position: i[t.isHorizontal() ? "currentX" : "currentY"],
            time: (0, s.d)()
          });
        },
        onTouchEnd: function (e) {
          let {
            currentPos: i
          } = e;
          if (t.params.cssMode) return;
          let {
              params: n,
              wrapperEl: l,
              rtlTranslate: o,
              snapGrid: d,
              touchEventsData: c
            } = t,
            u = (0, s.d)(),
            p = u - c.touchStartTime;
          if (i < -t.minTranslate()) {
            t.slideTo(t.activeIndex);
            return;
          }
          if (i > -t.maxTranslate()) {
            t.slides.length < d.length ? t.slideTo(d.length - 1) : t.slideTo(t.slides.length - 1);
            return;
          }
          if (n.freeMode.momentum) {
            let e, i;
            if (c.velocities.length > 1) {
              let e = c.velocities.pop(),
                i = c.velocities.pop(),
                r = e.position - i.position,
                a = e.time - i.time;
              t.velocity = r / a, t.velocity /= 2, Math.abs(t.velocity) < n.freeMode.minimumVelocity && (t.velocity = 0), (a > 150 || (0, s.d)() - e.time > 300) && (t.velocity = 0);
            } else t.velocity = 0;
            t.velocity *= n.freeMode.momentumVelocityRatio, c.velocities.length = 0;
            let u = 1e3 * n.freeMode.momentumRatio,
              p = t.velocity * u,
              h = t.translate + p;
            o && (h = -h);
            let f = !1,
              m = 20 * Math.abs(t.velocity) * n.freeMode.momentumBounceRatio;
            if (h < t.maxTranslate()) n.freeMode.momentumBounce ? (h + t.maxTranslate() < -m && (h = t.maxTranslate() - m), e = t.maxTranslate(), f = !0, c.allowMomentumBounce = !0) : h = t.maxTranslate(), n.loop && n.centeredSlides && (i = !0);else if (h > t.minTranslate()) n.freeMode.momentumBounce ? (h - t.minTranslate() > m && (h = t.minTranslate() + m), e = t.minTranslate(), f = !0, c.allowMomentumBounce = !0) : h = t.minTranslate(), n.loop && n.centeredSlides && (i = !0);else if (n.freeMode.sticky) {
              let e;
              for (let t = 0; t < d.length; t += 1) if (d[t] > -h) {
                e = t;
                break;
              }
              h = -(h = Math.abs(d[e] - h) < Math.abs(d[e - 1] - h) || "next" === t.swipeDirection ? d[e] : d[e - 1]);
            }
            if (i && a("transitionEnd", () => {
              t.loopFix();
            }), 0 !== t.velocity) {
              if (u = o ? Math.abs((-h - t.translate) / t.velocity) : Math.abs((h - t.translate) / t.velocity), n.freeMode.sticky) {
                let e = Math.abs((o ? -h : h) - t.translate),
                  i = t.slidesSizesGrid[t.activeIndex];
                u = e < i ? n.speed : e < 2 * i ? 1.5 * n.speed : 2.5 * n.speed;
              }
            } else if (n.freeMode.sticky) {
              t.slideToClosest();
              return;
            }
            n.freeMode.momentumBounce && f ? (t.updateProgress(e), t.setTransition(u), t.setTranslate(h), t.transitionStart(!0, t.swipeDirection), t.animating = !0, (0, s.k)(l, () => {
              t && !t.destroyed && c.allowMomentumBounce && (r("momentumBounce"), t.setTransition(n.speed), setTimeout(() => {
                t.setTranslate(e), (0, s.k)(l, () => {
                  t && !t.destroyed && t.transitionEnd();
                });
              }, 0));
            })) : t.velocity ? (r("_freeModeNoMomentumRelease"), t.updateProgress(h), t.setTransition(u), t.setTranslate(h), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, (0, s.k)(l, () => {
              t && !t.destroyed && t.transitionEnd();
            }))) : t.updateProgress(h), t.updateActiveIndex(), t.updateSlidesClasses();
          } else if (n.freeMode.sticky) {
            t.slideToClosest();
            return;
          } else n.freeMode && r("_freeModeNoMomentumRelease");
          (!n.freeMode.momentum || p >= n.longSwipesMs) && (r("_freeModeStaticRelease"), t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
        }
      }
    });
  }
});
