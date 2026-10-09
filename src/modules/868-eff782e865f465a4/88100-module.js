                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  n.d(t, {
    RP: function () {
      return function notifyEventProcessors(e, t, n, r = 0) {
        return new a.cW((a, u) => {
          let l = e[r];
          if (null === t || "function" != typeof l) a(t);else {
            let p = l({
              ...t
            }, n);
            s.X && l.id && null === p && i.kg.log(`Event processor "${l.id}" dropped event`), (0, o.J8)(p) ? p.then(t => notifyEventProcessors(e, t, n, r + 1).then(a)).then(null, u) : notifyEventProcessors(e, p, n, r + 1).then(a).then(null, u);
          }
        });
      };
    },
    cc: function () {
      return addGlobalEventProcessor;
    },
    fH: function () {
      return getGlobalEventProcessors;
    }
  });
  var r = n(30779),
    a = n(66233),
    i = n(81412),
    o = n(1533),
    s = n(36756);
  function getGlobalEventProcessors() {
    return (0, r.Y)("globalEventProcessors", () => []);
  }
  function addGlobalEventProcessor(e) {
    getGlobalEventProcessors().push(e);
  }
});
