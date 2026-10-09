                                                                                                            
                                                    
(function (e, t, i) {
  function isObject(e) {
    return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object;
  }
  function extend(e, t) {
    void 0 === e && (e = {}), void 0 === t && (t = {}), Object.keys(t).forEach(i => {
      void 0 === e[i] ? e[i] = t[i] : isObject(t[i]) && isObject(e[i]) && Object.keys(t[i]).length > 0 && extend(e[i], t[i]);
    });
  }
  i.d(t, {
    a: function () {
      return getWindow;
    },
    g: function () {
      return getDocument;
    }
  });
  let r = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: {
      blur() {},
      nodeName: ""
    },
    querySelector: () => null,
    querySelectorAll: () => [],
    getElementById: () => null,
    createEvent: () => ({
      initEvent() {}
    }),
    createElement: () => ({
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName: () => []
    }),
    createElementNS: () => ({}),
    importNode: () => null,
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    }
  };
  function getDocument() {
    let e = "undefined" != typeof document ? document : {};
    return extend(e, r), e;
  }
  let s = {
    document: r,
    navigator: {
      userAgent: ""
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    },
    history: {
      replaceState() {},
      pushState() {},
      go() {},
      back() {}
    },
    CustomEvent: function () {
      return this;
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle: () => ({
      getPropertyValue: () => ""
    }),
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia: () => ({}),
    requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
    cancelAnimationFrame(e) {
      "undefined" != typeof setTimeout && clearTimeout(e);
    }
  };
  function getWindow() {
    let e = "undefined" != typeof window ? window : {};
    return extend(e, s), e;
  }
});
