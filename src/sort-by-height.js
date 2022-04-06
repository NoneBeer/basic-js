const { NotImplementedError } = require('../extensions/index.js');

function sortByHeight(arr) {
  let indexes = [];
  let elements = [];
  let result = [];
  arr.filter((el, i) => { el === -1 ? indexes.push(i) : elements.push(el) });
  elements.sort((a, b) => a - b)
  arr.forEach((el, i) => {
      if (i === indexes[0]) {
          result.push(-1);
          indexes.shift();
      } else {
          result.push(elements[0]);
          elements.shift();
      }
  });
  return result;
}

module.exports = {
  sortByHeight
};
