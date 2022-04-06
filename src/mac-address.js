const { NotImplementedError } = require('../extensions/index.js');

function isMAC48Address(n) {
  let result = true;
  const array = n.split('-');
  array.forEach(element => {
    for (char of element) {
      if (char.match(/[a-f0-9]/gi) === null) {
        result = false;
      }
    }
  });
  return result;
}
module.exports = {
  isMAC48Address
};
