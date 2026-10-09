                                                                                                            
                                                    
(function (e, t) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "BloomFilter", {
    enumerable: !0,
    get: function () {
      return BloomFilter;
    }
  });
  let BloomFilter = class BloomFilter {
    static from(e, t) {
      void 0 === t && (t = .01);
      let n = new BloomFilter(e.length, t);
      for (let t of e) n.add(t);
      return n;
    }
    export() {
      let e = {
        numItems: this.numItems,
        errorRate: this.errorRate,
        numBits: this.numBits,
        numHashes: this.numHashes,
        bitArray: this.bitArray
      };
      return e;
    }
    import(e) {
      this.numItems = e.numItems, this.errorRate = e.errorRate, this.numBits = e.numBits, this.numHashes = e.numHashes, this.bitArray = e.bitArray;
    }
    add(e) {
      let t = this.getHashValues(e);
      t.forEach(e => {
        this.bitArray[e] = 1;
      });
    }
    contains(e) {
      let t = this.getHashValues(e);
      return t.every(e => this.bitArray[e]);
    }
    getHashValues(e) {
      let t = [];
      for (let n = 1; n <= this.numHashes; n++) {
        let r = function (e) {
          let t = 0;
          for (let n = 0; n < e.length; n++) {
            let r = e.charCodeAt(n);
            t = Math.imul(t ^ r, 1540483477), t ^= t >>> 13, t = Math.imul(t, 1540483477);
          }
          return t >>> 0;
        }("" + e + n) % this.numBits;
        t.push(r);
      }
      return t;
    }
    constructor(e, t) {
      this.numItems = e, this.errorRate = t, this.numBits = Math.ceil(-(e * Math.log(t)) / (Math.log(2) * Math.log(2))), this.numHashes = Math.ceil(this.numBits / e * Math.log(2)), this.bitArray = Array(this.numBits).fill(0);
    }
  };
});
