                                                                                                            
                                                    
(function (n, i, o) {
  o.d(i, {
    Uy: function () {
      return v;
    }
  });
  var u,
    s = Symbol.for("immer-nothing"),
    c = Symbol.for("immer-draftable"),
    l = Symbol.for("immer-state");
  function die(n) {
    for (var i = arguments.length, o = Array(i > 1 ? i - 1 : 0), u = 1; u < i; u++) o[u - 1] = arguments[u];
    throw Error("[Immer] minified error nr: ".concat(n, ". Full error at: https://bit.ly/3cXEKWf"));
  }
  var f = Object.getPrototypeOf;
  function isDraft(n) {
    return !!n && !!n[l];
  }
  function isDraftable(n) {
    var i;
    return !!n && (isPlainObject(n) || Array.isArray(n) || !!n[c] || !!(null === (i = n.constructor) || void 0 === i ? void 0 : i[c]) || isMap(n) || isSet(n));
  }
  var p = Object.prototype.constructor.toString();
  function isPlainObject(n) {
    if (!n || "object" != typeof n) return !1;
    let i = f(n);
    if (null === i) return !0;
    let o = Object.hasOwnProperty.call(i, "constructor") && i.constructor;
    return o === Object || "function" == typeof o && Function.toString.call(o) === p;
  }
  function each(n, i) {
    0 === getArchtype(n) ? Reflect.ownKeys(n).forEach(o => {
      i(o, n[o], n);
    }) : n.forEach((o, u) => i(u, o, n));
  }
  function getArchtype(n) {
    let i = n[l];
    return i ? i.type_ : Array.isArray(n) ? 1 : isMap(n) ? 2 : isSet(n) ? 3 : 0;
  }
  function has(n, i) {
    return 2 === getArchtype(n) ? n.has(i) : Object.prototype.hasOwnProperty.call(n, i);
  }
  function set(n, i, o) {
    let u = getArchtype(n);
    2 === u ? n.set(i, o) : 3 === u ? n.add(o) : n[i] = o;
  }
  function isMap(n) {
    return n instanceof Map;
  }
  function isSet(n) {
    return n instanceof Set;
  }
  function latest(n) {
    return n.copy_ || n.base_;
  }
  function shallowCopy(n, i) {
    if (isMap(n)) return new Map(n);
    if (isSet(n)) return new Set(n);
    if (Array.isArray(n)) return Array.prototype.slice.call(n);
    if (!i && isPlainObject(n)) {
      if (!f(n)) {
        let i = Object.create(null);
        return Object.assign(i, n);
      }
      return {
        ...n
      };
    }
    let o = Object.getOwnPropertyDescriptors(n);
    delete o[l];
    let u = Reflect.ownKeys(o);
    for (let i = 0; i < u.length; i++) {
      let s = u[i],
        c = o[s];
      !1 === c.writable && (c.writable = !0, c.configurable = !0), (c.get || c.set) && (o[s] = {
        configurable: !0,
        writable: !0,
        enumerable: c.enumerable,
        value: n[s]
      });
    }
    return Object.create(f(n), o);
  }
  function freeze(n) {
    let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return isFrozen(n) || isDraft(n) || !isDraftable(n) || (getArchtype(n) > 1 && (n.set = n.add = n.clear = n.delete = dontMutateFrozenCollections), Object.freeze(n), i && Object.entries(n).forEach(n => {
      let [i, o] = n;
      return freeze(o, !0);
    })), n;
  }
  function dontMutateFrozenCollections() {
    die(2);
  }
  function isFrozen(n) {
    return Object.isFrozen(n);
  }
  var d = {};
  function getPlugin(n) {
    let i = d[n];
    return i || die(0, n), i;
  }
  function usePatchesInScope(n, i) {
    i && (getPlugin("Patches"), n.patches_ = [], n.inversePatches_ = [], n.patchListener_ = i);
  }
  function revokeScope(n) {
    leaveScope(n), n.drafts_.forEach(revokeDraft), n.drafts_ = null;
  }
  function leaveScope(n) {
    n === u && (u = n.parent_);
  }
  function enterScope(n) {
    return u = {
      drafts_: [],
      parent_: u,
      immer_: n,
      canAutoFreeze_: !0,
      unfinalizedDrafts_: 0
    };
  }
  function revokeDraft(n) {
    let i = n[l];
    0 === i.type_ || 1 === i.type_ ? i.revoke_() : i.revoked_ = !0;
  }
  function processResult(n, i) {
    i.unfinalizedDrafts_ = i.drafts_.length;
    let o = i.drafts_[0],
      u = void 0 !== n && n !== o;
    return u ? (o[l].modified_ && (revokeScope(i), die(4)), isDraftable(n) && (n = finalize(i, n), i.parent_ || maybeFreeze(i, n)), i.patches_ && getPlugin("Patches").generateReplacementPatches_(o[l].base_, n, i.patches_, i.inversePatches_)) : n = finalize(i, o, []), revokeScope(i), i.patches_ && i.patchListener_(i.patches_, i.inversePatches_), n !== s ? n : void 0;
  }
  function finalize(n, i, o) {
    if (isFrozen(i)) return i;
    let u = i[l];
    if (!u) return each(i, (s, c) => finalizeProperty(n, u, i, s, c, o)), i;
    if (u.scope_ !== n) return i;
    if (!u.modified_) return maybeFreeze(n, u.base_, !0), u.base_;
    if (!u.finalized_) {
      u.finalized_ = !0, u.scope_.unfinalizedDrafts_--;
      let i = u.copy_,
        s = i,
        c = !1;
      3 === u.type_ && (s = new Set(i), i.clear(), c = !0), each(s, (s, l) => finalizeProperty(n, u, i, s, l, o, c)), maybeFreeze(n, i, !1), o && n.patches_ && getPlugin("Patches").generatePatches_(u, o, n.patches_, n.inversePatches_);
    }
    return u.copy_;
  }
  function finalizeProperty(n, i, o, u, s, c, l) {
    if (isDraft(s)) {
      let l = c && i && 3 !== i.type_ && !has(i.assigned_, u) ? c.concat(u) : void 0,
        f = finalize(n, s, l);
      if (set(o, u, f), !isDraft(f)) return;
      n.canAutoFreeze_ = !1;
    } else l && o.add(s);
    if (isDraftable(s) && !isFrozen(s)) {
      if (!n.immer_.autoFreeze_ && n.unfinalizedDrafts_ < 1) return;
      finalize(n, s), (!i || !i.scope_.parent_) && "symbol" != typeof u && Object.prototype.propertyIsEnumerable.call(o, u) && maybeFreeze(n, s);
    }
  }
  function maybeFreeze(n, i) {
    let o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    !n.parent_ && n.immer_.autoFreeze_ && n.canAutoFreeze_ && freeze(i, o);
  }
  var g = {
      get(n, i) {
        if (i === l) return n;
        let o = latest(n);
        if (!has(o, i)) return function (n, i, o) {
          var u;
          let s = getDescriptorFromProto(i, o);
          return s ? "value" in s ? s.value : null === (u = s.get) || void 0 === u ? void 0 : u.call(n.draft_) : void 0;
        }(n, o, i);
        let u = o[i];
        return n.finalized_ || !isDraftable(u) ? u : u === peek(n.base_, i) ? (prepareCopy(n), n.copy_[i] = createProxy(u, n)) : u;
      },
      has: (n, i) => i in latest(n),
      ownKeys: n => Reflect.ownKeys(latest(n)),
      set(n, i, o) {
        let u = getDescriptorFromProto(latest(n), i);
        if (null == u ? void 0 : u.set) return u.set.call(n.draft_, o), !0;
        if (!n.modified_) {
          let u = peek(latest(n), i),
            s = null == u ? void 0 : u[l];
          if (s && s.base_ === o) return n.copy_[i] = o, n.assigned_[i] = !1, !0;
          if ((o === u ? 0 !== o || 1 / o == 1 / u : o != o && u != u) && (void 0 !== o || has(n.base_, i))) return !0;
          prepareCopy(n), markChanged(n);
        }
        return !!(n.copy_[i] === o && (void 0 !== o || i in n.copy_) || Number.isNaN(o) && Number.isNaN(n.copy_[i])) || (n.copy_[i] = o, n.assigned_[i] = !0, !0);
      },
      deleteProperty: (n, i) => (void 0 !== peek(n.base_, i) || i in n.base_ ? (n.assigned_[i] = !1, prepareCopy(n), markChanged(n)) : delete n.assigned_[i], n.copy_ && delete n.copy_[i], !0),
      getOwnPropertyDescriptor(n, i) {
        let o = latest(n),
          u = Reflect.getOwnPropertyDescriptor(o, i);
        return u ? {
          writable: !0,
          configurable: 1 !== n.type_ || "length" !== i,
          enumerable: u.enumerable,
          value: o[i]
        } : u;
      },
      defineProperty() {
        die(11);
      },
      getPrototypeOf: n => f(n.base_),
      setPrototypeOf() {
        die(12);
      }
    },
    h = {};
  function peek(n, i) {
    let o = n[l],
      u = o ? latest(o) : n;
    return u[i];
  }
  function getDescriptorFromProto(n, i) {
    if (!(i in n)) return;
    let o = f(n);
    for (; o;) {
      let n = Object.getOwnPropertyDescriptor(o, i);
      if (n) return n;
      o = f(o);
    }
  }
  function markChanged(n) {
    !n.modified_ && (n.modified_ = !0, n.parent_ && markChanged(n.parent_));
  }
  function prepareCopy(n) {
    n.copy_ || (n.copy_ = shallowCopy(n.base_, n.scope_.immer_.useStrictShallowCopy_));
  }
  function createProxy(n, i) {
    let o = isMap(n) ? getPlugin("MapSet").proxyMap_(n, i) : isSet(n) ? getPlugin("MapSet").proxySet_(n, i) : function (n, i) {
        let o = Array.isArray(n),
          s = {
            type_: o ? 1 : 0,
            scope_: i ? i.scope_ : u,
            modified_: !1,
            finalized_: !1,
            assigned_: {},
            parent_: i,
            base_: n,
            draft_: null,
            copy_: null,
            revoke_: null,
            isManual_: !1
          },
          c = s,
          l = g;
        o && (c = [s], l = h);
        let {
          revoke: f,
          proxy: p
        } = Proxy.revocable(c, l);
        return s.draft_ = p, s.revoke_ = f, p;
      }(n, i),
      s = i ? i.scope_ : u;
    return s.drafts_.push(o), o;
  }
  each(g, (n, i) => {
    h[n] = function () {
      return arguments[0] = arguments[0][0], i.apply(this, arguments);
    };
  }), h.deleteProperty = function (n, i) {
    return h.set.call(this, n, i, void 0);
  }, h.set = function (n, i, o) {
    return g.set.call(this, n[0], i, o, n[0]);
  };
  var m = new class {
      createDraft(n) {
        var i;
        isDraftable(n) || die(8), isDraft(n) && (isDraft(i = n) || die(10, i), n = function currentImpl(n) {
          let i;
          if (!isDraftable(n) || isFrozen(n)) return n;
          let o = n[l];
          if (o) {
            if (!o.modified_) return o.base_;
            o.finalized_ = !0, i = shallowCopy(n, o.scope_.immer_.useStrictShallowCopy_);
          } else i = shallowCopy(n, !0);
          return each(i, (n, o) => {
            set(i, n, currentImpl(o));
          }), o && (o.finalized_ = !1), i;
        }(i));
        let o = enterScope(this),
          u = createProxy(n, void 0);
        return u[l].isManual_ = !0, leaveScope(o), u;
      }
      finishDraft(n, i) {
        let o = n && n[l];
        o && o.isManual_ || die(9);
        let {
          scope_: u
        } = o;
        return usePatchesInScope(u, i), processResult(void 0, u);
      }
      setAutoFreeze(n) {
        this.autoFreeze_ = n;
      }
      setUseStrictShallowCopy(n) {
        this.useStrictShallowCopy_ = n;
      }
      applyPatches(n, i) {
        let o;
        for (o = i.length - 1; o >= 0; o--) {
          let u = i[o];
          if (0 === u.path.length && "replace" === u.op) {
            n = u.value;
            break;
          }
        }
        o > -1 && (i = i.slice(o + 1));
        let u = getPlugin("Patches").applyPatches_;
        return isDraft(n) ? u(n, i) : this.produce(n, n => u(n, i));
      }
      constructor(n) {
        this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (n, i, o) => {
          let u;
          if ("function" == typeof n && "function" != typeof i) {
            let o = i;
            i = n;
            let u = this;
            return function () {
              let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o;
              for (var s = arguments.length, c = Array(s > 1 ? s - 1 : 0), l = 1; l < s; l++) c[l - 1] = arguments[l];
              return u.produce(n, n => i.call(this, n, ...c));
            };
          }
          if ("function" != typeof i && die(6), void 0 !== o && "function" != typeof o && die(7), isDraftable(n)) {
            let s = enterScope(this),
              c = createProxy(n, void 0),
              l = !0;
            try {
              u = i(c), l = !1;
            } finally {
              l ? revokeScope(s) : leaveScope(s);
            }
            return usePatchesInScope(s, o), processResult(u, s);
          }
          if (n && "object" == typeof n) die(1, n);else {
            if (void 0 === (u = i(n)) && (u = n), u === s && (u = void 0), this.autoFreeze_ && freeze(u, !0), o) {
              let i = [],
                s = [];
              getPlugin("Patches").generateReplacementPatches_(n, u, i, s), o(i, s);
            }
            return u;
          }
        }, this.produceWithPatches = (n, i) => {
          let o, u;
          if ("function" == typeof n) {
            var s = this;
            return function (i) {
              for (var o = arguments.length, u = Array(o > 1 ? o - 1 : 0), c = 1; c < o; c++) u[c - 1] = arguments[c];
              return s.produceWithPatches(i, i => n(i, ...u));
            };
          }
          let c = this.produce(n, i, (n, i) => {
            o = n, u = i;
          });
          return [c, o, u];
        }, "boolean" == typeof (null == n ? void 0 : n.autoFreeze) && this.setAutoFreeze(n.autoFreeze), "boolean" == typeof (null == n ? void 0 : n.useStrictShallowCopy) && this.setUseStrictShallowCopy(n.useStrictShallowCopy);
      }
    }(),
    v = m.produce;
  m.produceWithPatches.bind(m), m.setAutoFreeze.bind(m), m.setUseStrictShallowCopy.bind(m), m.applyPatches.bind(m), m.createDraft.bind(m), m.finishDraft.bind(m);
});
