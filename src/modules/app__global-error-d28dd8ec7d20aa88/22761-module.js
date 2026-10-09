                                                                                                                         
                                                    
(function (module, exports, webpackRequire) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: !0
  }), Object.defineProperty(exports, "default", {
    enumerable: !0,
    get: function () {
      return SideEffect;
    }
  });
  let React = webpackRequire(58036),
    o = React.useLayoutEffect,
    l = React.useEffect;
  function SideEffect(e) {
    let {
      headManager: t,
      reduceComponentsToState: n
    } = e;
    function emitChange() {
      if (t && t.mountedInstances) {
        let o = React.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
        t.updateHead(n(o, e));
      }
    }
    return o(() => {
      var n;
      return null == t || null == (n = t.mountedInstances) || n.add(e.children), () => {
        var n;
        null == t || null == (n = t.mountedInstances) || n.delete(e.children);
      };
    }), o(() => (t && (t._pendingUpdate = emitChange), () => {
      t && (t._pendingUpdate = emitChange);
    })), l(() => (t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null), () => {
      t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null);
    })), null;
  }
});
