const { NotImplementedError } = require('../extensions/index.js');

function deleteDigit(n) {
  let newArr = [];
  const arr = n.toString().split('');
  for (let i = 0; i < arr.length; i++) {
    let str = '';
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        str += arr[j];
      }
    }
    newArr.push(str);
  }
  return (Math.max(...newArr));
}

module.exports = {
  deleteDigit
};
