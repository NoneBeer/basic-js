const { NotImplementedError } = require('../extensions/index.js');

function repeater(str, options) {
  let res = [];
  return createStr(str,
    options.addition,
    options.repeatTimes,
    options.additionRepeatTimes,
    options.separator,
    options.additionSeparator,
  )
  function createStr(str,
    addition = '',
    repeatTimes = 1,
    additionRepeatTimes = 0,
    separator = '+',
    additionSeparator = '|',
  ) {
    if (str === null) str = 'null';
    if (addition === null) addition = 'null';
    if (additionRepeatTimes > 0) {
      let arr = [str.toString()];
      while (additionRepeatTimes > 0) {
        arr.push(addition.toString());
        if (additionRepeatTimes > 1) {
          arr.push(additionSeparator);
        }
        additionRepeatTimes--;
      }
      str = arr.join('')
    } else {
      str = str + addition;
    }
    while (repeatTimes > 0) {
      res.push(str);
      repeatTimes--;
    }
    return res.join(separator);
  }
}

module.exports = {
  repeater
};
