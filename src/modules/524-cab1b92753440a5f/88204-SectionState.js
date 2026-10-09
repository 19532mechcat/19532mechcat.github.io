                                                                                                            
                                                    
(function (e, t, i) {
  "use strict";

  i.d(t, {
    S: function () {
      return r;
    },
    p: function () {
      return setSectionPointer;
    }
  });
  var n = i(47426),
    a = i(31212),
    s = i(79706);
  let r = (0, n.e)((0, s.Ue)(() => ({
      sectionPointer: -1
    }))),
    setSectionPointer = e => r.setState((0, a.Uy)(t => {
      "number" == typeof e ? t.sectionPointer = e : t.sectionPointer = e(t.sectionPointer);
    }));
});
