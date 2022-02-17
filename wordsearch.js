// const transpose = function(matrix) {
//   let smallArr = [];
//   let bigArr = [];
//   for (let row = 0; row < matrix[0].length; row++) {
//     for (let el = 0; el < matrix.length; el++) {
//       smallArr.push(matrix[el][row]);
//     }
//     bigArr.push(smallArr);
//     smallArr = [];
//   }
//   return bigArr;
// };

const transpose = function(matrix) {
  const result = [];
  for (let i = 0; i < matrix[0].length; i++) {
    result.push([]);
    for (let j = 0; j < matrix.length; j++) {
      result[i].push(matrix[j][i]);
    }
  }
  return result;
};

const printMatrix = (matrix) => {
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el + " ");
    }
    process.stdout.write('\n');
  }
};

const wordSearch = (letters, word) => { 
  
  const horizontalJoin = letters.map(ls => ls.join(''));

  // const x = transpose(letters);
  //printMatrix(x);
  const verticalJoin = transpose(letters).map(ls => ls.join(''));

  // console.log(verticalJoin[0]);

  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  for (let h of verticalJoin) {
    if (h.includes(word)) return true;
  }

  return false;
};

wordSearch([
  ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
  ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
  ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
  ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
  ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
  ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
  ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
], 'FRANK');
module.exports = wordSearch