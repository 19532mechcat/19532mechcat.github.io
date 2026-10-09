                                                                                                           
                                                    
(function (t, e, n) {
  "use strict";

  n.d(e, {
    sZ: function () {
      return E;
    },
    XK: function () {
      return hooks_useAccountLogout;
    }
  });
  var r,
    o,
    i,
    a,
    u,
    s = n(84548),
    c = n(58036),
    l = n(81871),
    f = n(43108),
    h = n(97589),
    d = n(38813),
    g = n(20568),
    p = n(90328),
    v = n(36586),
    y = n(81665),
    m = Object.prototype.hasOwnProperty,
    lodash_es_isEmpty = function (t) {
      if (null == t) return !0;
      if ((0, g.Z)(t) && ((0, d.Z)(t) || "string" == typeof t || "function" == typeof t.splice || (0, p.Z)(t) || (0, y.Z)(t) || (0, h.Z)(t))) return !t.length;
      var e = (0, f.Z)(t);
      if ("[object Map]" == e || "[object Set]" == e) return !t.size;
      if ((0, v.Z)(t)) return !(0, l.Z)(t).length;
      for (var n in t) if (m.call(t, n)) return !1;
      return !0;
    },
    _ = n(71480),
    b = {
      ready: !1,
      loading: !1,
      account: null
    },
    w = (0, c.createContext)({
      active: !1,
      sdkReady: function () {
        throw Error("[@hg/one-account] Account provider miss sdk");
      },
      events: {
        login: [],
        logout: []
      },
      onError: function (t, e) {
        return console.error(e);
      },
      customLoginDialog: !1,
      state: b,
      dispatch: _.Z
    }),
    __assign = function () {
      return (__assign = Object.assign || function (t) {
        for (var e, n = 1, r = arguments.length; n < r; n++) for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
        return t;
      }).apply(this, arguments);
    },
    __awaiter = function (t, e, n, r) {
      return new (n || (n = Promise))(function (o, i) {
        function fulfilled(t) {
          try {
            step(r.next(t));
          } catch (t) {
            i(t);
          }
        }
        function rejected(t) {
          try {
            step(r.throw(t));
          } catch (t) {
            i(t);
          }
        }
        function step(t) {
          var e;
          t.done ? o(t.value) : ((e = t.value) instanceof n ? e : new n(function (t) {
            t(e);
          })).then(fulfilled, rejected);
        }
        step((r = r.apply(t, e || [])).next());
      });
    },
    __generator = function (t, e) {
      var n,
        r,
        o,
        i,
        a = {
          label: 0,
          sent: function () {
            if (1 & o[0]) throw o[1];
            return o[1];
          },
          trys: [],
          ops: []
        };
      return i = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
        return this;
      }), i;
      function verb(u) {
        return function (s) {
          return function (u) {
            if (n) throw TypeError("Generator is already executing.");
            for (; i && (i = 0, u[0] && (a = 0)), a;) try {
              if (n = 1, r && (o = 2 & u[0] ? r.return : u[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, u[1])).done) return o;
              switch (r = 0, o && (u = [2 & u[0], o.value]), u[0]) {
                case 0:
                case 1:
                  o = u;
                  break;
                case 4:
                  return a.label++, {
                    value: u[1],
                    done: !1
                  };
                case 5:
                  a.label++, r = u[1], u = [0];
                  continue;
                case 7:
                  u = a.ops.pop(), a.trys.pop();
                  continue;
                default:
                  if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === u[0] || 2 === u[0])) {
                    a = 0;
                    continue;
                  }
                  if (3 === u[0] && (!o || u[1] > o[0] && u[1] < o[3])) {
                    a.label = u[1];
                    break;
                  }
                  if (6 === u[0] && a.label < o[1]) {
                    a.label = o[1], o = u;
                    break;
                  }
                  if (o && a.label < o[2]) {
                    a.label = o[2], a.ops.push(u);
                    break;
                  }
                  o[2] && a.ops.pop(), a.trys.pop();
                  continue;
              }
              u = e.call(t, a);
            } catch (t) {
              u = [6, t], r = 0;
            } finally {
              n = o = 0;
            }
            if (5 & u[0]) throw u[1];
            return {
              value: u[0] ? u[1] : void 0,
              done: !0
            };
          }([u, s]);
        };
      }
    },
    __read = function (t, e) {
      var n = "function" == typeof Symbol && t[Symbol.iterator];
      if (!n) return t;
      var r,
        o,
        i = n.call(t),
        a = [];
      try {
        for (; (void 0 === e || e-- > 0) && !(r = i.next()).done;) a.push(r.value);
      } catch (t) {
        o = {
          error: t
        };
      } finally {
        try {
          r && !r.done && (n = i.return) && n.call(i);
        } finally {
          if (o) throw o.error;
        }
      }
      return a;
    };
  function Setup() {
    var t = this,
      e = (0, c.useContext)(w),
      n = e.sdkReady,
      r = e.dispatch;
    return (0, c.useEffect)(function () {
      "HG" === n.SDK_TYPE ? n(function (e) {
        return __awaiter(t, void 0, void 0, function () {
          return __generator(this, function (t) {
            return r({
              loading: !0
            }), e.User.UI.checkSession({}, function (t, e) {
              0 === t && e ? r({
                ready: !0,
                loading: !1,
                account: e.hgInfo
              }) : r({
                ready: !0,
                loading: !1
              });
            }), [2];
          });
        });
      }) : "GL" === n.SDK_TYPE && n(function (e) {
        return __awaiter(t, void 0, void 0, function () {
          return __generator(this, function (t) {
            return r({
              loading: !0
            }), e.user.checkSession({}, function (t, e) {
              0 === t && e ? r({
                ready: !0,
                loading: !1,
                account: e.accountInfo
              }) : r({
                ready: !0,
                loading: !1
              });
            }), [2];
          });
        });
      });
    }, []), null;
  }
  function helper_isSKLand() {
    return /skland/i.test(navigator.userAgent);
  }
  var hooks_awaiter = function (t, e, n, r) {
      return new (n || (n = Promise))(function (o, i) {
        function fulfilled(t) {
          try {
            step(r.next(t));
          } catch (t) {
            i(t);
          }
        }
        function rejected(t) {
          try {
            step(r.throw(t));
          } catch (t) {
            i(t);
          }
        }
        function step(t) {
          var e;
          t.done ? o(t.value) : ((e = t.value) instanceof n ? e : new n(function (t) {
            t(e);
          })).then(fulfilled, rejected);
        }
        step((r = r.apply(t, e || [])).next());
      });
    },
    hooks_generator = function (t, e) {
      var n,
        r,
        o,
        i,
        a = {
          label: 0,
          sent: function () {
            if (1 & o[0]) throw o[1];
            return o[1];
          },
          trys: [],
          ops: []
        };
      return i = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
        return this;
      }), i;
      function verb(u) {
        return function (s) {
          return function (u) {
            if (n) throw TypeError("Generator is already executing.");
            for (; i && (i = 0, u[0] && (a = 0)), a;) try {
              if (n = 1, r && (o = 2 & u[0] ? r.return : u[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, u[1])).done) return o;
              switch (r = 0, o && (u = [2 & u[0], o.value]), u[0]) {
                case 0:
                case 1:
                  o = u;
                  break;
                case 4:
                  return a.label++, {
                    value: u[1],
                    done: !1
                  };
                case 5:
                  a.label++, r = u[1], u = [0];
                  continue;
                case 7:
                  u = a.ops.pop(), a.trys.pop();
                  continue;
                default:
                  if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === u[0] || 2 === u[0])) {
                    a = 0;
                    continue;
                  }
                  if (3 === u[0] && (!o || u[1] > o[0] && u[1] < o[3])) {
                    a.label = u[1];
                    break;
                  }
                  if (6 === u[0] && a.label < o[1]) {
                    a.label = o[1], o = u;
                    break;
                  }
                  if (o && a.label < o[2]) {
                    a.label = o[2], a.ops.push(u);
                    break;
                  }
                  o[2] && a.ops.pop(), a.trys.pop();
                  continue;
              }
              u = e.call(t, a);
            } catch (t) {
              u = [6, t], r = 0;
            } finally {
              n = o = 0;
            }
            if (5 & u[0]) throw u[1];
            return {
              value: u[0] ? u[1] : void 0,
              done: !0
            };
          }([u, s]);
        };
      }
    };
  function hooks_useAccountLogout() {
    var t = this,
      e = (0, c.useContext)(w),
      n = e.dispatch,
      r = e.events,
      o = e.sdkReady;
    return (0, c.useCallback)(function () {
      return hooks_awaiter(t, void 0, void 0, function () {
        return hooks_generator(this, function (t) {
          switch (t.label) {
            case 0:
              if (helper_isSKLand()) return console.warn("[@hg/one-account] Do NOT show login in skland."), [2];
              if ("HG" !== o.SDK_TYPE) return [3, 3];
              return [4, o()];
            case 1:
              return [4, t.sent().User.logout()];
            case 2:
              return t.sent(), [3, 6];
            case 3:
              if ("GL" !== o.SDK_TYPE) return [3, 6];
              return [4, o()];
            case 4:
              return [4, t.sent().user.API.logout()];
            case 5:
              t.sent(), t.label = 6;
            case 6:
              return n({
                account: null
              }), r.logout.forEach(function (t) {
                return t();
              }), [2];
          }
        });
      });
    }, [o, n]);
  }
  var context_generator = function (t, e) {
    var n,
      r,
      o,
      i,
      a = {
        label: 0,
        sent: function () {
          if (1 & o[0]) throw o[1];
          return o[1];
        },
        trys: [],
        ops: []
      };
    return i = {
      next: verb(0),
      throw: verb(1),
      return: verb(2)
    }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
      return this;
    }), i;
    function verb(u) {
      return function (s) {
        return function (u) {
          if (n) throw TypeError("Generator is already executing.");
          for (; i && (i = 0, u[0] && (a = 0)), a;) try {
            if (n = 1, r && (o = 2 & u[0] ? r.return : u[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, u[1])).done) return o;
            switch (r = 0, o && (u = [2 & u[0], o.value]), u[0]) {
              case 0:
              case 1:
                o = u;
                break;
              case 4:
                return a.label++, {
                  value: u[1],
                  done: !1
                };
              case 5:
                a.label++, r = u[1], u = [0];
                continue;
              case 7:
                u = a.ops.pop(), a.trys.pop();
                continue;
              default:
                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === u[0] || 2 === u[0])) {
                  a = 0;
                  continue;
                }
                if (3 === u[0] && (!o || u[1] > o[0] && u[1] < o[3])) {
                  a.label = u[1];
                  break;
                }
                if (6 === u[0] && a.label < o[1]) {
                  a.label = o[1], o = u;
                  break;
                }
                if (o && a.label < o[2]) {
                  a.label = o[2], a.ops.push(u);
                  break;
                }
                o[2] && a.ops.pop(), a.trys.pop();
                continue;
            }
            u = e.call(t, a);
          } catch (t) {
            u = [6, t], r = 0;
          } finally {
            n = o = 0;
          }
          if (5 & u[0]) throw u[1];
          return {
            value: u[0] ? u[1] : void 0,
            done: !0
          };
        }([u, s]);
      };
    }
  };
  (0, c.createContext)({
    sdkReady: function () {
      throw Error("[@hg/one-account] Role provider miss sdk");
    },
    gameCode: "",
    disableAccount: !1,
    disableAccountRoleSelect: !1,
    channelConfigList: [],
    skipChannelSelect: !0,
    customChannelSelect: !1,
    store: {
      ready: !1,
      loading: !1,
      role: null,
      isAccount: null,
      channelSelectVisible: !1
    },
    dispatch: _.Z,
    fetchAccountRole: function () {
      var t, e, n, r;
      return t = void 0, e = void 0, n = void 0, r = function () {
        return context_generator(this, function (t) {
          return [2, {
            token: null,
            roleInfo: null
          }];
        });
      }, new (n || (n = Promise))(function (o, i) {
        function fulfilled(t) {
          try {
            step(r.next(t));
          } catch (t) {
            i(t);
          }
        }
        function rejected(t) {
          try {
            step(r.throw(t));
          } catch (t) {
            i(t);
          }
        }
        function step(t) {
          var e;
          t.done ? o(t.value) : ((e = t.value) instanceof n ? e : new n(function (t) {
            t(e);
          })).then(fulfilled, rejected);
        }
        step((r = r.apply(t, e || [])).next());
      });
    }
  }), n(21858);
  var k = n(91568),
    __makeTemplateObject = function (t, e) {
      return Object.defineProperty ? Object.defineProperty(t, "raw", {
        value: e
      }) : t.raw = e, t;
    };
  (0, k.iv)(r || (r = __makeTemplateObject(["\n    width: 20em;\n    padding: 2em;\n    background-color: rgba(255, 255, 255, 0.9);\n    font-size: 16px;\n\n    @media only screen and (max-width: 768px) {\n        font-size: 15px;\n    }\n    @media only screen and (max-width: 576px) {\n        font-size: 14px;\n    }\n"], ["\n    width: 20em;\n    padding: 2em;\n    background-color: rgba(255, 255, 255, 0.9);\n    font-size: 16px;\n\n    @media only screen and (max-width: 768px) {\n        font-size: 15px;\n    }\n    @media only screen and (max-width: 576px) {\n        font-size: 14px;\n    }\n"]))), (0, k.iv)(o || (o = __makeTemplateObject(["\n    display: block;\n    width: 100%;\n    padding: 0;\n    margin-bottom: 1em;\n    text-align: center;\n"], ["\n    display: block;\n    width: 100%;\n    padding: 0;\n    margin-bottom: 1em;\n    text-align: center;\n"]))), (0, k.iv)(i || (i = __makeTemplateObject(["\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    margin: 0;\n    padding: 0;\n"], ["\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    margin: 0;\n    padding: 0;\n"]))), (0, k.iv)(a || (a = __makeTemplateObject(["\n    display: block;\n    width: 4em;\n    height: 4em;\n    margin: 0 1em;\n    border: 1px solid #999;\n    border-radius: 0.5em;\n    /* box-sizing: border-box; */\n    overflow: hidden;\n    background-position: center center;\n    background-repeat: no-repeat;\n    transition: background-color 0.3s;\n    cursor: pointer;\n\n    @media (any-hover: hover) {\n        &:hover {\n            background-color: #fff;\n        }\n    }\n"], ["\n    display: block;\n    width: 4em;\n    height: 4em;\n    margin: 0 1em;\n    border: 1px solid #999;\n    border-radius: 0.5em;\n    /* box-sizing: border-box; */\n    overflow: hidden;\n    background-position: center center;\n    background-repeat: no-repeat;\n    transition: background-color 0.3s;\n    cursor: pointer;\n\n    @media (any-hover: hover) {\n        &:hover {\n            background-color: #fff;\n        }\n    }\n"]))), (0, k.iv)(u || (u = __makeTemplateObject(["\n    font-size: 4em;\n"], ["\n    font-size: 4em;\n"])));
  var E = {
    Provider: function (t) {
      var e = t.sdkReady,
        n = t.customLoginDialog,
        r = t.onLogin,
        o = t.onError,
        i = t.children,
        a = __read((0, c.useReducer)(function (t, e) {
          return lodash_es_isEmpty(e) ? t : __assign(__assign({}, t), e);
        }, __assign(__assign({}, b), {
          loading: !0
        })), 2),
        u = a[0],
        l = a[1],
        f = (0, c.useRef)({
          login: [],
          logout: []
        });
      return (0, c.useEffect)(function () {
        var t = f.current;
        if (r) return t.login.unshift(r), function () {
          var e = t.login.indexOf(r);
          e > -1 && t.login.splice(e, 1);
        };
      }, [r]), (0, s.jsxs)(w.Provider, {
        value: {
          active: !0,
          events: f.current,
          onError: o || function (t, e) {
            return console.error(e);
          },
          customLoginDialog: void 0 !== n && n,
          sdkReady: e,
          state: u,
          dispatch: l
        },
        children: [(0, s.jsx)(Setup, {}), i]
      });
    },
    hooks: {
      useAccount: function () {
        var t = (0, c.useContext)(w).state,
          e = t.ready,
          n = t.account;
        return {
          ready: e,
          loading: t.loading,
          account: n
        };
      },
      useFetchAccount: function () {
        var t,
          e,
          n,
          r,
          o,
          i,
          a,
          u,
          s = (0, c.useContext)(w).sdkReady,
          l = (e = (t = (0, c.useContext)(w)).dispatch, n = t.onError, r = t.sdkReady, (0, c.useCallback)(function () {
            return hooks_awaiter(this, void 0, void 0, function () {
              var t, o, i;
              return hooks_generator(this, function (a) {
                switch (a.label) {
                  case 0:
                    return e({
                      loading: !0
                    }), [4, r()];
                  case 1:
                    t = a.sent(), a.label = 2;
                  case 2:
                    return a.trys.push([2, 4,, 5]), [4, t.Account.API.getInfo()];
                  case 3:
                    return e({
                      ready: !0,
                      loading: !1,
                      account: {
                        hgId: (o = a.sent()).hgId,
                        phone: o.phone,
                        email: o.email,
                        isMinor: o.isMinor,
                        isLatestUserAgreement: o.isLatestUserAgreement
                      }
                    }), [2, o];
                  case 4:
                    return i = a.sent(), t.Utils.isSDKError(i) ? n(i.message, i) : n("", i), [3, 5];
                  case 5:
                    return e({
                      ready: !0,
                      loading: !1
                    }), [2, null];
                }
              });
            });
          }, [])),
          f = (i = (o = (0, c.useContext)(w)).dispatch, a = o.onError, u = o.sdkReady, (0, c.useCallback)(function () {
            return hooks_awaiter(this, void 0, void 0, function () {
              var t, e, n;
              return hooks_generator(this, function (r) {
                switch (r.label) {
                  case 0:
                    return i({
                      loading: !0
                    }), [4, u()];
                  case 1:
                    t = r.sent(), r.label = 2;
                  case 2:
                    return r.trys.push([2, 4,, 5]), [4, t.user.API.getBasicInfo()];
                  case 3:
                    if ((e = r.sent()).result && e.data) return i({
                      ready: !0,
                      loading: !1,
                      account: n = {
                        hgId: e.data.hgId,
                        displayName: e.data.displayName,
                        nickName: e.data.nickName,
                        email: e.data.email
                      }
                    }), [2, n];
                    return a(e.msg || "", e), [3, 5];
                  case 4:
                    return a("", r.sent()), [3, 5];
                  case 5:
                    return i({
                      ready: !0,
                      loading: !1
                    }), [2, null];
                }
              });
            });
          }, []));
        return "HG" === s.SDK_TYPE ? l : "GL" === s.SDK_TYPE ? f : (0, c.useCallback)(function () {
          return hooks_awaiter(this, void 0, void 0, function () {
            return hooks_generator(this, function (t) {
              return [2, null];
            });
          });
        }, []);
      },
      useShowLoginDialog: function () {
        var t = (0, c.useContext)(w).sdkReady,
          e = function () {
            var t = this,
              e = (0, c.useContext)(w),
              n = e.customLoginDialog,
              r = e.events,
              o = e.sdkReady,
              i = e.dispatch;
            return (0, c.useCallback)(function (e) {
              return hooks_awaiter(t, void 0, void 0, function () {
                return hooks_generator(this, function (t) {
                  switch (t.label) {
                    case 0:
                      if (n) return console.warn('[@hg/one-account] ShowLoginDialog won\'t work when "customLoginDialog" is enabled.'), [2];
                      if (helper_isSKLand()) return console.warn("[@hg/one-account] Do NOT show login in skland."), [2];
                      return [4, o()];
                    case 1:
                      return t.sent().User.UI.login({}, function (t, n) {
                        0 === t && n && (i({
                          loading: !1,
                          account: n.hgInfo
                        }), r.login.forEach(function (t) {
                          return t(n.hgInfo);
                        }), null == e || e(n.hgInfo));
                      }), [2];
                  }
                });
              });
            }, [n, r, o]);
          }(),
          n = function () {
            var t = this,
              e = (0, c.useContext)(w),
              n = e.customLoginDialog,
              r = e.events,
              o = e.sdkReady,
              i = e.dispatch;
            return (0, c.useCallback)(function (e) {
              return hooks_awaiter(t, void 0, void 0, function () {
                return hooks_generator(this, function (t) {
                  switch (t.label) {
                    case 0:
                      if (n) return console.warn('[@hg/one-account] ShowLoginDialog won\'t work when "customLoginDialog" is enabled.'), [2];
                      if (helper_isSKLand()) return console.warn("[@hg/one-account] Do NOT show login in skland."), [2];
                      return [4, o()];
                    case 1:
                      return t.sent().user.auth({}, function (t, n) {
                        0 === t && n && (i({
                          loading: !1,
                          account: n.accountInfo
                        }), r.login.forEach(function (t) {
                          return t(n.accountInfo);
                        }), null == e || e(n.accountInfo));
                      }), [2];
                  }
                });
              });
            }, [n, r, o]);
          }();
        return "HG" === t.SDK_TYPE ? e : "GL" === t.SDK_TYPE ? n : (0, c.useCallback)(function () {
          return hooks_awaiter(this, void 0, void 0, function () {
            return hooks_generator(this, function (t) {
              return [2];
            });
          });
        }, []);
      },
      useOnGlAccountLogin: function (t, e) {
        var n = (0, c.useContext)(w).events,
          r = (0, c.useCallback)(t, e || []);
        (0, c.useEffect)(function () {
          return n.login.push(r), function () {
            var t = n.login.indexOf(r);
            t > -1 && n.login.splice(t, 1);
          };
        }, [n, r]);
      }
    }
  };
});
