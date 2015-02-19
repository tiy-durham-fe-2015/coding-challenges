function toHex(num) {
  var hexes = {
    '10': 'A',
    '11': 'B',
    '12': 'C',
    '13': 'D',
    '14': 'E',
    '15': 'F'
  };

  var result = '';

  while (num > 0) {
    var mod = num % 16;
    result = (hexes[mod] || mod) + result;
    num = Math.floor(num / 16);
  }

  return result;
}
