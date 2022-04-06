const { NotImplementedError } = require('../extensions/index.js');

function getSeason(date) {
  if (date === undefined) return 'Unable to determine the time of year!';
  if ((date instanceof Date === false || Object.getOwnPropertyNames(date).length > 0) && arguments.length > 0) {
    throw new Error('Invalid date!');
  }
  const month = date.getMonth();
  if (month >= 0 && month < 2 || month === 11) {
    return ('winter');
  }
  if (month >= 2 && month <= 4) {
    return ('spring');
  }
  if (month >= 5 && month <= 7) {
    return ('summer');
  }
  if (month >= 8 && month <= 10) {
    return ('autumn');
  }
}

module.exports = {
  getSeason
};
