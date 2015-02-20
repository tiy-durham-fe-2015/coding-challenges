function toHex(num) {
  if (typeof num !== 'number') {
    throw new Error('Ruh roh. We needs a number, and you passed us ' + num);
  }

  var hexes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
  var wasNegative = num < 0;
  var result = '';

  num = Math.abs(num);

  do {
    var mod = num % 16;
    result = hexes[mod] + result;
    num = Math.floor(num / 16);
  } while (num > 0)

  return wasNegative ? '-' + result : result;
}
