                                                                                                                 
                                                    
(function (module, exports, webpackRequire) {
  "use strict";

  webpackRequire.d(exports, {
    L: function () {
      return mapVideoCateToName;
    }
  });
  var a = webpackRequire(4871),
    siteContentModule = webpackRequire(19174);
  let mapVideoCateToName = e => ({
    [a.k.version_pv]: siteContentModule.f.media.videoCategory.version_pv,
    [a.k.cg_animation]: siteContentModule.f.media.videoCategory.cg_animation,
    [a.k.terra_exploration]: siteContentModule.f.media.videoCategory.terra_exploration,
    [a.k.special]: siteContentModule.f.media.videoCategory.special,
    [a.k.operator_pv]: siteContentModule.f.media.videoCategory.operator_pv
  })[e];
});
