                                                                                                            
                                                    
(function (e, t, n) {
  "use strict";

  n.d(t, {
    b: function () {
      return SentryError;
    }
  });
  let SentryError = class SentryError extends Error {
    constructor(e, t = "warn") {
      super(e), this.message = e, this.name = new.target.prototype.constructor.name, Object.setPrototypeOf(this, new.target.prototype), this.logLevel = t;
    }
  };
});
