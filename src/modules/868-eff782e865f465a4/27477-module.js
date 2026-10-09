                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  n.d(t, {
    Rt: function () {
      return htmlTreeAsString;
    },
    iY: function () {
      return getComponentName;
    },
    l4: function () {
      return getLocationHref;
    },
    qT: function () {
      return getDomElement;
    }
  });
  var r = n(1533),
    a = n(30779);
  let i = (0, a.R)();
  function htmlTreeAsString(e, t = {}) {
    if (!e) return "<unknown>";
    try {
      let n,
        a = e,
        o = [],
        s = 0,
        u = 0,
        l = Array.isArray(t) ? t : t.keyAttrs,
        p = !Array.isArray(t) && t.maxStringLength || 80;
      for (; a && s++ < 5 && (n = function (e, t) {
        let n, a, o, s, u;
        let l = [];
        if (!e || !e.tagName) return "";
        if (i.HTMLElement && e instanceof HTMLElement && e.dataset && e.dataset.sentryComponent) return e.dataset.sentryComponent;
        l.push(e.tagName.toLowerCase());
        let p = t && t.length ? t.filter(t => e.getAttribute(t)).map(t => [t, e.getAttribute(t)]) : null;
        if (p && p.length) p.forEach(e => {
          l.push(`[${e[0]}="${e[1]}"]`);
        });else if (e.id && l.push(`#${e.id}`), (n = e.className) && (0, r.HD)(n)) for (u = 0, a = n.split(/\s+/); u < a.length; u++) l.push(`.${a[u]}`);
        let m = ["aria-label", "type", "name", "title", "alt"];
        for (u = 0; u < m.length; u++) o = m[u], (s = e.getAttribute(o)) && l.push(`[${o}="${s}"]`);
        return l.join("");
      }(a, l), "html" !== n && (!(s > 1) || !(u + 3 * o.length + n.length >= p)));) o.push(n), u += n.length, a = a.parentNode;
      return o.reverse().join(" > ");
    } catch (e) {
      return "<unknown>";
    }
  }
  function getLocationHref() {
    try {
      return i.document.location.href;
    } catch (e) {
      return "";
    }
  }
  function getDomElement(e) {
    return i.document && i.document.querySelector ? i.document.querySelector(e) : null;
  }
  function getComponentName(e) {
    if (!i.HTMLElement) return null;
    let t = e;
    for (let e = 0; e < 5 && t; e++) {
      if (t instanceof HTMLElement && t.dataset.sentryComponent) return t.dataset.sentryComponent;
      t = t.parentNode;
    }
    return null;
  }
});
