const { NotImplementedError } = require('../extensions/index.js');


function getSumOfDigits(n) {
  while (n > 9) {
    n = n.toString().split('').reduce((a, c) => +a + +c);
  }
  return n;
}

module.exports = {
  getSumOfDigits
};
