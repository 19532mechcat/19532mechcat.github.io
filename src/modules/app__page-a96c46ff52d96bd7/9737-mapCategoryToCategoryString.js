                                                                                                                
                                                    
(function (module, exports, webpackRequire) {
  "use strict";

  webpackRequire.d(exports, {
    D: function () {
      return a;
    },
    o: function () {
      return mapCategoryToCategoryString;
    }
  });
  let a = ["LATEST", "ANNOUNCEMENT", "ACTIVITY", "NEWS"],
    mapCategoryToCategoryString = e => ({
      0: "ANNOUNCEMENT",
      1: "ACTIVITY",
      2: "NEWS"
    })[e] || "LATEST";
});
