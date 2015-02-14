// findStar takes a two-dimensional array and returns
// the position of the first '*' character.
//
// You can assume that each item in the array will
// be a single-character string.
//
// So, if it was passed this array:
//
//     [
//      ['a', 'b', 's'],
//      ['3', 'z', '*']
//     ]
//
// findStar should return { col: 2, row: 1 }
//
// If there is no '*' in the arrays, then return
// { col: -1, row: -1 }
function findStar (arrayOfArrays) {
  for (var row = 0; row < arrayOfArrays.length; ++row) {
    var subArray = arrayOfArrays[row];

    for (var col = 0; col < subArray.length; ++col) {
      if (subArray[col] === '*') {
        return {
          col: col,
          row: row
        };
      }
    }
  }

  return {
    col: -1,
    row: -1
  }
}
