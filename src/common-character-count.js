const { NotImplementedError } = require('../extensions/index.js');

function getCommonCharacterCount(s1, s2) {
  const obj1 = s1.split('').reduce((acc, el) => {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, {})
  const obj2 = s2.split('').reduce((acc, el) => {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, {})
  let res = 0;
  const keys = Object.keys(obj1);
  for (let key of keys) {
    if (obj1[key] === obj2[key]) res += obj1[key];
    if (obj1[key] > obj2[key]) res += obj2[key];
    if (obj1[key] < obj2[key]) res += obj1[key];
  }
  return res;
}

module.exports = {
  getCommonCharacterCount
};
