                                                                                                            
                                                    
(function (e, t) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "getSortedRoutes", {
    enumerable: !0,
    get: function () {
      return getSortedRoutes;
    }
  });
  let UrlNode = class UrlNode {
    insert(e) {
      this._insert(e.split("/").filter(Boolean), [], !1);
    }
    smoosh() {
      return this._smoosh();
    }
    _smoosh(e) {
      void 0 === e && (e = "/");
      let t = [...this.children.keys()].sort();
      null !== this.slugName && t.splice(t.indexOf("[]"), 1), null !== this.restSlugName && t.splice(t.indexOf("[...]"), 1), null !== this.optionalRestSlugName && t.splice(t.indexOf("[[...]]"), 1);
      let n = t.map(t => this.children.get(t)._smoosh("" + e + t + "/")).reduce((e, t) => [...e, ...t], []);
      if (null !== this.slugName && n.push(...this.children.get("[]")._smoosh(e + "[" + this.slugName + "]/")), !this.placeholder) {
        let t = "/" === e ? "/" : e.slice(0, -1);
        if (null != this.optionalRestSlugName) throw Error('You cannot define a route with the same specificity as a optional catch-all route ("' + t + '" and "' + t + "[[..." + this.optionalRestSlugName + ']]").');
        n.unshift(t);
      }
      return null !== this.restSlugName && n.push(...this.children.get("[...]")._smoosh(e + "[..." + this.restSlugName + "]/")), null !== this.optionalRestSlugName && n.push(...this.children.get("[[...]]")._smoosh(e + "[[..." + this.optionalRestSlugName + "]]/")), n;
    }
    _insert(e, t, n) {
      if (0 === e.length) {
        this.placeholder = !1;
        return;
      }
      if (n) throw Error("Catch-all must be the last part of the URL.");
      let r = e[0];
      if (r.startsWith("[") && r.endsWith("]")) {
        let a = r.slice(1, -1),
          i = !1;
        if (a.startsWith("[") && a.endsWith("]") && (a = a.slice(1, -1), i = !0), a.startsWith("...") && (a = a.substring(3), n = !0), a.startsWith("[") || a.endsWith("]")) throw Error("Segment names may not start or end with extra brackets ('" + a + "').");
        if (a.startsWith(".")) throw Error("Segment names may not start with erroneous periods ('" + a + "').");
        function handleSlug(e, n) {
          if (null !== e && e !== n) throw Error("You cannot use different slug names for the same dynamic path ('" + e + "' !== '" + n + "').");
          t.forEach(e => {
            if (e === n) throw Error('You cannot have the same slug name "' + n + '" repeat within a single dynamic path');
            if (e.replace(/\W/g, "") === r.replace(/\W/g, "")) throw Error('You cannot have the slug names "' + e + '" and "' + n + '" differ only by non-word symbols within a single dynamic path');
          }), t.push(n);
        }
        if (n) {
          if (i) {
            if (null != this.restSlugName) throw Error('You cannot use both an required and optional catch-all route at the same level ("[...' + this.restSlugName + ']" and "' + e[0] + '" ).');
            handleSlug(this.optionalRestSlugName, a), this.optionalRestSlugName = a, r = "[[...]]";
          } else {
            if (null != this.optionalRestSlugName) throw Error('You cannot use both an optional and required catch-all route at the same level ("[[...' + this.optionalRestSlugName + ']]" and "' + e[0] + '").');
            handleSlug(this.restSlugName, a), this.restSlugName = a, r = "[...]";
          }
        } else {
          if (i) throw Error('Optional route parameters are not yet supported ("' + e[0] + '").');
          handleSlug(this.slugName, a), this.slugName = a, r = "[]";
        }
      }
      this.children.has(r) || this.children.set(r, new UrlNode()), this.children.get(r)._insert(e.slice(1), t, n);
    }
    constructor() {
      this.placeholder = !0, this.children = new Map(), this.slugName = null, this.restSlugName = null, this.optionalRestSlugName = null;
    }
  };
  function getSortedRoutes(e) {
    let t = new UrlNode();
    return e.forEach(e => t.insert(e)), t.smoosh();
  }
});
