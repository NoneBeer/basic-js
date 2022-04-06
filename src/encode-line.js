const { NotImplementedError } = require('../extensions/index.js');

function encodeLine( str ) {
  let res = '';
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++
    } else {
      if (count > 1) {
        res += count + str[i];
      } else {
        res += str[i];
      }
      count = 1;
    }
  }
  return res;
}

module.exports = {
  encodeLine
};
