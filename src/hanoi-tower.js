const { NotImplementedError } = require('../extensions/index.js');

function calculateHanoi(disksNumber, turnsSpeed) {
  let obj = {};
  obj.turns = Math.pow(2, disksNumber) - 1;
  obj.seconds = Math.floor((obj.turns * 3600) / turnsSpeed);
  return obj;
}

module.exports = {
  calculateHanoi
};
