                                                                                                            
                                                    
(function (e, t) {
  "use strict";

  let n;
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), function (e, t) {
    for (var n in t) Object.defineProperty(e, n, {
      enumerable: !0,
      get: t[n]
    });
  }(t, {
    DOMAttributeNames: function () {
      return r;
    },
    isEqualNode: function () {
      return isEqualNode;
    },
    default: function () {
      return initHeadManager;
    }
  });
  let r = {
    acceptCharset: "accept-charset",
    className: "class",
    htmlFor: "for",
    httpEquiv: "http-equiv",
    noModule: "noModule"
  };
  function reactElementToDOM(e) {
    let {
        type: t,
        props: n
      } = e,
      a = document.createElement(t);
    for (let e in n) {
      if (!n.hasOwnProperty(e) || "children" === e || "dangerouslySetInnerHTML" === e || void 0 === n[e]) continue;
      let i = r[e] || e.toLowerCase();
      "script" === t && ("async" === i || "defer" === i || "noModule" === i) ? a[i] = !!n[e] : a.setAttribute(i, n[e]);
    }
    let {
      children: i,
      dangerouslySetInnerHTML: o
    } = n;
    return o ? a.innerHTML = o.__html || "" : i && (a.textContent = "string" == typeof i ? i : Array.isArray(i) ? i.join("") : ""), a;
  }
  function isEqualNode(e, t) {
    if (e instanceof HTMLElement && t instanceof HTMLElement) {
      let n = t.getAttribute("nonce");
      if (n && !e.getAttribute("nonce")) {
        let r = t.cloneNode(!0);
        return r.setAttribute("nonce", ""), r.nonce = n, n === e.nonce && e.isEqualNode(r);
      }
    }
    return e.isEqualNode(t);
  }
  function initHeadManager() {
    return {
      mountedInstances: new Set(),
      updateHead: e => {
        let t = {};
        e.forEach(e => {
          if ("link" === e.type && e.props["data-optimized-fonts"]) {
            if (document.querySelector('style[data-href="' + e.props["data-href"] + '"]')) return;
            e.props.href = e.props["data-href"], e.props["data-href"] = void 0;
          }
          let n = t[e.type] || [];
          n.push(e), t[e.type] = n;
        });
        let r = t.title ? t.title[0] : null,
          a = "";
        if (r) {
          let {
            children: e
          } = r.props;
          a = "string" == typeof e ? e : Array.isArray(e) ? e.join("") : "";
        }
        a !== document.title && (document.title = a), ["meta", "base", "link", "style", "script"].forEach(e => {
          n(e, t[e] || []);
        });
      }
    };
  }
  n = (e, t) => {
    let n = document.getElementsByTagName("head")[0],
      r = n.querySelector("meta[name=next-head-count]"),
      a = Number(r.content),
      i = [];
    for (let t = 0, n = r.previousElementSibling; t < a; t++, n = (null == n ? void 0 : n.previousElementSibling) || null) {
      var o;
      (null == n ? void 0 : null == (o = n.tagName) ? void 0 : o.toLowerCase()) === e && i.push(n);
    }
    let s = t.map(reactElementToDOM).filter(e => {
      for (let t = 0, n = i.length; t < n; t++) {
        let n = i[t];
        if (isEqualNode(n, e)) return i.splice(t, 1), !1;
      }
      return !0;
    });
    i.forEach(e => {
      var t;
      return null == (t = e.parentNode) ? void 0 : t.removeChild(e);
    }), s.forEach(e => n.insertBefore(e, r)), r.content = (a - i.length + s.length).toString();
  }, ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
    value: !0
  }), Object.assign(t.default, t), e.exports = t.default);
});
