                                                                                                            
                                                    
(function (e, n, r) {
  "use strict";

  var a,
    i,
    u = r(1045),
    s = r(58036),
    o = r(56854),
    c = r(70736),
    f = {
      out: "out-in",
      in: "in-out"
    },
    callHook = function (e, n, r) {
      return function () {
        var a;
        e.props[n] && (a = e.props)[n].apply(a, arguments), r();
      };
    },
    _ = ((a = {})[f.out] = function (e) {
      var n = e.current,
        r = e.changeState;
      return s.cloneElement(n, {
        in: !1,
        onExited: callHook(n, "onExited", function () {
          r(o.d0, null);
        })
      });
    }, a[f.in] = function (e) {
      var n = e.current,
        r = e.changeState,
        a = e.children;
      return [n, s.cloneElement(a, {
        in: !0,
        onEntered: callHook(a, "onEntered", function () {
          r(o.d0);
        })
      })];
    }, a),
    v = ((i = {})[f.out] = function (e) {
      var n = e.children,
        r = e.changeState;
      return s.cloneElement(n, {
        in: !0,
        onEntered: callHook(n, "onEntered", function () {
          r(o.cn, s.cloneElement(n, {
            in: !0
          }));
        })
      });
    }, i[f.in] = function (e) {
      var n = e.current,
        r = e.children,
        a = e.changeState;
      return [s.cloneElement(n, {
        in: !1,
        onExited: callHook(n, "onExited", function () {
          a(o.cn, s.cloneElement(r, {
            in: !0
          }));
        })
      }), s.cloneElement(r, {
        in: !0
      })];
    }, i),
    p = function (e) {
      function SwitchTransition() {
        for (var n, r = arguments.length, a = Array(r), i = 0; i < r; i++) a[i] = arguments[i];
        return (n = e.call.apply(e, [this].concat(a)) || this).state = {
          status: o.cn,
          current: null
        }, n.appeared = !1, n.changeState = function (e, r) {
          void 0 === r && (r = n.state.current), n.setState({
            status: e,
            current: r
          });
        }, n;
      }
      (0, u.Z)(SwitchTransition, e);
      var n = SwitchTransition.prototype;
      return n.componentDidMount = function () {
        this.appeared = !0;
      }, SwitchTransition.getDerivedStateFromProps = function (e, n) {
        var r, a;
        return null == e.children ? {
          current: null
        } : n.status === o.d0 && e.mode === f.in ? {
          status: o.d0
        } : n.current && !((r = n.current) === (a = e.children) || s.isValidElement(r) && s.isValidElement(a) && null != r.key && r.key === a.key) ? {
          status: o.Ix
        } : {
          current: s.cloneElement(e.children, {
            in: !0
          })
        };
      }, n.render = function () {
        var e,
          n = this.props,
          r = n.children,
          a = n.mode,
          i = this.state,
          u = i.status,
          f = i.current,
          p = {
            children: r,
            current: f,
            changeState: this.changeState,
            status: u
          };
        switch (u) {
          case o.d0:
            e = v[a](p);
            break;
          case o.Ix:
            e = _[a](p);
            break;
          case o.cn:
            e = f;
        }
        return s.createElement(c.Z.Provider, {
          value: {
            isMounting: !this.appeared
          }
        }, e);
      }, SwitchTransition;
    }(s.Component);
  p.propTypes = {}, p.defaultProps = {
    mode: f.out
  }, n.Z = p;
});
