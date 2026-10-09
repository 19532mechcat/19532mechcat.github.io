                                                                                                            
                                                    
(function (t, e, n) {
  function _extends() {
    return (_extends = Object.assign ? Object.assign.bind() : function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
      }
      return t;
    }).apply(this, arguments);
  }
  n.d(e, {
    Z: function () {
      return c;
    }
  });
  var r = n(93532),
    o = n(1045);
  function replaceClassName(t, e) {
    return t.replace(RegExp("(^|\\s)" + e + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
  }
  var i = n(58036),
    a = n(56854),
    s = n(47127),
    removeClass = function (t, e) {
      return t && e && e.split(" ").forEach(function (e) {
        t.classList ? t.classList.remove(e) : "string" == typeof t.className ? t.className = replaceClassName(t.className, e) : t.setAttribute("class", replaceClassName(t.className && t.className.baseVal || "", e));
      });
    },
    u = function (t) {
      function CSSTransition() {
        for (var e, n = arguments.length, r = Array(n), o = 0; o < n; o++) r[o] = arguments[o];
        return (e = t.call.apply(t, [this].concat(r)) || this).appliedClasses = {
          appear: {},
          enter: {},
          exit: {}
        }, e.onEnter = function (t, n) {
          var r = e.resolveArguments(t, n),
            o = r[0],
            i = r[1];
          e.removeClasses(o, "exit"), e.addClass(o, i ? "appear" : "enter", "base"), e.props.onEnter && e.props.onEnter(t, n);
        }, e.onEntering = function (t, n) {
          var r = e.resolveArguments(t, n),
            o = r[0],
            i = r[1];
          e.addClass(o, i ? "appear" : "enter", "active"), e.props.onEntering && e.props.onEntering(t, n);
        }, e.onEntered = function (t, n) {
          var r = e.resolveArguments(t, n),
            o = r[0],
            i = r[1] ? "appear" : "enter";
          e.removeClasses(o, i), e.addClass(o, i, "done"), e.props.onEntered && e.props.onEntered(t, n);
        }, e.onExit = function (t) {
          var n = e.resolveArguments(t)[0];
          e.removeClasses(n, "appear"), e.removeClasses(n, "enter"), e.addClass(n, "exit", "base"), e.props.onExit && e.props.onExit(t);
        }, e.onExiting = function (t) {
          var n = e.resolveArguments(t)[0];
          e.addClass(n, "exit", "active"), e.props.onExiting && e.props.onExiting(t);
        }, e.onExited = function (t) {
          var n = e.resolveArguments(t)[0];
          e.removeClasses(n, "exit"), e.addClass(n, "exit", "done"), e.props.onExited && e.props.onExited(t);
        }, e.resolveArguments = function (t, n) {
          return e.props.nodeRef ? [e.props.nodeRef.current, t] : [t, n];
        }, e.getClassNames = function (t) {
          var n = e.props.classNames,
            r = "string" == typeof n,
            o = r ? (r && n ? n + "-" : "") + t : n[t],
            i = r ? o + "-active" : n[t + "Active"],
            a = r ? o + "-done" : n[t + "Done"];
          return {
            baseClassName: o,
            activeClassName: i,
            doneClassName: a
          };
        }, e;
      }
      (0, o.Z)(CSSTransition, t);
      var e = CSSTransition.prototype;
      return e.addClass = function (t, e, n) {
        var r,
          o = this.getClassNames(e)[n + "ClassName"],
          i = this.getClassNames("enter").doneClassName;
        "appear" === e && "done" === n && i && (o += " " + i), "active" === n && t && (0, s.Q)(t), o && (this.appliedClasses[e][n] = o, r = o, t && r && r.split(" ").forEach(function (e) {
          var n, r;
          return n = t, r = e, void (n.classList ? n.classList.add(r) : (n.classList ? r && n.classList.contains(r) : -1 !== (" " + (n.className.baseVal || n.className) + " ").indexOf(" " + r + " ")) || ("string" == typeof n.className ? n.className = n.className + " " + r : n.setAttribute("class", (n.className && n.className.baseVal || "") + " " + r)));
        }));
      }, e.removeClasses = function (t, e) {
        var n = this.appliedClasses[e],
          r = n.base,
          o = n.active,
          i = n.done;
        this.appliedClasses[e] = {}, r && removeClass(t, r), o && removeClass(t, o), i && removeClass(t, i);
      }, e.render = function () {
        var t = this.props,
          e = (t.classNames, (0, r.Z)(t, ["classNames"]));
        return i.createElement(a.ZP, _extends({}, e, {
          onEnter: this.onEnter,
          onEntered: this.onEntered,
          onEntering: this.onEntering,
          onExit: this.onExit,
          onExiting: this.onExiting,
          onExited: this.onExited
        }));
      }, CSSTransition;
    }(i.Component);
  u.defaultProps = {
    classNames: ""
  }, u.propTypes = {};
  var c = u;
});
