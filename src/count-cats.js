const { NotImplementedError } = require('../extensions/index.js');

function countCats(matrix) {
  let count = 0;
  for (let arr of matrix) {
    for (let el of arr) {
      if (el === '^^') {
        count++;
      }
    }
  }
  return count;
}

module.exports = {
  countCats
};
