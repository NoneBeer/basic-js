const { NotImplementedError } = require('../extensions/index.js');

function getMatrixElementsSum(matrix) {
  let sum = 0;
  matrix[0].forEach(element => {
    sum += element;
  });
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i - 1][j] !== 0) {
        sum += matrix[i][j];
      }
    }
  }
  return sum;
}
module.exports = {
  getMatrixElementsSum
};
