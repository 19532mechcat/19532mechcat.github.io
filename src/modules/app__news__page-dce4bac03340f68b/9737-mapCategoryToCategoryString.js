                                                                                                                     
                                                    
(function (module, exports, webpackRequire) {
  "use strict";

  webpackRequire.d(exports, {
    D: function () {
      return i;
    },
    o: function () {
      return mapCategoryToCategoryString;
    }
  });
  let i = ["LATEST", "ANNOUNCEMENT", "ACTIVITY", "NEWS"],
    mapCategoryToCategoryString = e => ({
      0: "ANNOUNCEMENT",
      1: "ACTIVITY",
      2: "NEWS"
    })[e] || "LATEST";
});
