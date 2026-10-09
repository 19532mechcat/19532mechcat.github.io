                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  n.d(t, {
    Ak: function () {
      return supportsFetch;
    },
    Du: function () {
      return isNativeFetch;
    },
    t$: function () {
      return supportsNativeFetch;
    }
  });
  var r = n(47406),
    a = n(81412),
    i = n(30779);
  let o = (0, i.R)();
  function supportsFetch() {
    if (!("fetch" in o)) return !1;
    try {
      return new Headers(), new Request("http://www.example.com"), new Response(), !0;
    } catch (e) {
      return !1;
    }
  }
  function isNativeFetch(e) {
    return e && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString());
  }
  function supportsNativeFetch() {
    if ("string" == typeof EdgeRuntime) return !0;
    if (!supportsFetch()) return !1;
    if (isNativeFetch(o.fetch)) return !0;
    let e = !1,
      t = o.document;
    if (t && "function" == typeof t.createElement) try {
      let n = t.createElement("iframe");
      n.hidden = !0, t.head.appendChild(n), n.contentWindow && n.contentWindow.fetch && (e = isNativeFetch(n.contentWindow.fetch)), t.head.removeChild(n);
    } catch (e) {
      r.X && a.kg.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", e);
    }
    return e;
  }
});
