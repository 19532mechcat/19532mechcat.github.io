                                                                                                           
                                                    
(function (e, t, n) {
  "use strict";

  n.d(t, {
    Cy: function () {
      return isSyntheticEvent;
    },
    HD: function () {
      return isString;
    },
    J8: function () {
      return isThenable;
    },
    Kj: function () {
      return isRegExp;
    },
    Le: function () {
      return isParameterizedString;
    },
    PO: function () {
      return isPlainObject;
    },
    TX: function () {
      return isDOMError;
    },
    V9: function () {
      return isInstanceOf;
    },
    VW: function () {
      return isErrorEvent;
    },
    VZ: function () {
      return isError;
    },
    cO: function () {
      return isEvent;
    },
    fm: function () {
      return isDOMException;
    },
    i2: function () {
      return isNaN;
    },
    kK: function () {
      return isElement;
    },
    pt: function () {
      return isPrimitive;
    },
    y1: function () {
      return isVueViewModel;
    }
  });
  let r = Object.prototype.toString;
  function isError(e) {
    switch (r.call(e)) {
      case "[object Error]":
      case "[object Exception]":
      case "[object DOMException]":
        return !0;
      default:
        return isInstanceOf(e, Error);
    }
  }
  function isBuiltin(e, t) {
    return r.call(e) === `[object ${t}]`;
  }
  function isErrorEvent(e) {
    return isBuiltin(e, "ErrorEvent");
  }
  function isDOMError(e) {
    return isBuiltin(e, "DOMError");
  }
  function isDOMException(e) {
    return isBuiltin(e, "DOMException");
  }
  function isString(e) {
    return isBuiltin(e, "String");
  }
  function isParameterizedString(e) {
    return "object" == typeof e && null !== e && "__sentry_template_string__" in e && "__sentry_template_values__" in e;
  }
  function isPrimitive(e) {
    return null === e || isParameterizedString(e) || "object" != typeof e && "function" != typeof e;
  }
  function isPlainObject(e) {
    return isBuiltin(e, "Object");
  }
  function isEvent(e) {
    return "undefined" != typeof Event && isInstanceOf(e, Event);
  }
  function isElement(e) {
    return "undefined" != typeof Element && isInstanceOf(e, Element);
  }
  function isRegExp(e) {
    return isBuiltin(e, "RegExp");
  }
  function isThenable(e) {
    return !!(e && e.then && "function" == typeof e.then);
  }
  function isSyntheticEvent(e) {
    return isPlainObject(e) && "nativeEvent" in e && "preventDefault" in e && "stopPropagation" in e;
  }
  function isNaN(e) {
    return "number" == typeof e && e != e;
  }
  function isInstanceOf(e, t) {
    try {
      return e instanceof t;
    } catch (e) {
      return !1;
    }
  }
  function isVueViewModel(e) {
    return !!("object" == typeof e && null !== e && (e.__isVue || e._isVue));
  }
});
