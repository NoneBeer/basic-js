const { NotImplementedError } = require('../extensions/index.js');

function getDNSStats(domains) {
  let obj = {};
  for (let domain of domains) {
    let newArr = [];
    let arr = domain.split('.').reverse();
    console.log(arr);
    for (let subdomain of arr) {
      newArr.push('.' + subdomain);
      if (obj.hasOwnProperty(newArr.join(''))) { obj[newArr.join('')] += 1 };
      if (!obj.hasOwnProperty(newArr.join(''))) { obj[newArr.join('')] = 1 };
    }
  }
  return obj;
}

module.exports = {
  getDNSStats
};
