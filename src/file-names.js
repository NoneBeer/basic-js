const { NotImplementedError } = require('../extensions/index.js');

function renameFiles(names) {
  for (let i = 0; i < names.length; i++) {
    let k = 1;
    for (let j = 0; j < names.length; j++) {
      if (i !== j && names[i] === names[j]) {
        names[j] = names[j] + `(${k})`;
        k++;
      }
    }
  }
  return names;
}

module.exports = {
  renameFiles
};
