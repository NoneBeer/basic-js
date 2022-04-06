const { NotImplementedError } = require('../extensions/index.js');

function minesweeper(matrix) {
  let result = [[]];
  const height = matrix.length;
  const width = matrix[0].length;
  for (let i = 0; i < height; i++) {
      result[i] = [];
      for (let j = 0; j < width; j++) {
          result[i][j] = 0;
      }
  }
  for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
          if (matrix[i][j] === true) {
              if (i + 1 <= height) result[i + 1][j] += 1;
              if (j + 1 <= width) result[i][j + 1] += 1;
              if (i - 1 >= 0) result[i - 1][j] += 1;
              if (j - 1 >= 0) result[i][j - 1] += 1;
              if (i - 1 >= 0 && j - 1 >= 0) result[i - 1][j - 1] += 1;
              if (i - 1 >= 0 && j + 1 <= width) result[i - 1][j + 1] += 1;
              if (i + 1 <= height && j - 1 >= 0) result[i + 1][j - 1] += 1;
              if (i + 1 <= height && j + 1 <= width) result[i + 1][j + 1] += 1;
          }
      }
  }
  return result;
}
module.exports = {
  minesweeper
};
