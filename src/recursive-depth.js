const { NotImplementedError } = require('../extensions/index.js');

class DepthCalculator {
  calculateDepth(arr) {
    if (arr.filter(i => i.constructor.name === "Array").length != 0) {
      return 1 + this.calculateDepth([].concat(...arr.filter(i => i.constructor.name === "Array")));
    } else {
      return 1;
    }
  }
}

module.exports = {
  DepthCalculator
};
