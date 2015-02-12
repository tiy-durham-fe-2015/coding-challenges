// TODO:
//
// Convert a number to a roman numeral
// Convert a number from a roman numeral
//
// This assignment was tots stolen from the ACM highschool problem sets, 2012
// found here: http://users.cis.fiu.edu/~irvinek/hscomp/2012/
//
// I = 1
// V = 5
// X = 10
// L = 50
// C = 100
// D = 500
// M = 1000
//
// Numbers are formed by combining the symbols and adding their values.
// III is 3 or three ones; XII is ten followed by 2 ones or 12;
// CCCVIII would be 308.
// Note that you cannot have more than three identical letters in a row (unless
// that letter is M). Four (4) is not represented by IIII, instead, you
// represent it by IV, which is more literally read as five subtracted by 1.
// This greatly simplifies large numerical expressions. To elaborate:
//
// - I can be placed before V and X to form 4 and 9 respectively (i.e. IV = 4 and IX = 9)
// - X can be placed before L to form 40 (XL) and before C to form 90 (XC)
// - C can be placed before D to form 400 (CD) and before M to form 900 (CM)
// - There is nothing higher represented than M, so something like 4000 would be MMMM

var romanNumeral = {
  toNumber: function (str) {
    var tots = 0,
        vals = {
          'I': 1,
          'V': 5,
          'X': 10,
          'L': 50,
          'C': 100,
          'D': 500,
          'M': 1000
        };

    var prev = 0;

    for (var i = str.length - 1; i >= 0; --i) {
      var current = vals[str[i]];

      if (!current) throw new Error(current + ' is not a valid roman numeral');

      tots = tots + (current < prev ? -current : current);
      prev = current;
    }

    return tots;
  }
};


function romanArray(start, middle, end) {
  return [
    start,
    start + start,
    start + start + start,
    start + middle,
    middle,
    middle + start,
    middle + start + start,
    middle + start + start + start,
    start + end
  ];
}

function romanOnes(n) {
  var onesPlace = n % 10;
  var ones = romanArray('I', 'V', 'X');
  return ones[onesPlace - 1] || '';
}

function romanTens(n) {
  var tensPlace = Math.floor(n / 10) % 10;
  var tens = romanArray('X', 'L', 'C');
  return tens[tensPlace - 1] || '';
}

function romanHundreds(n) {
  var hundredsPlace = Math.floor(n / 100) % 10;
  var hundreds = romanArray('C', 'D', 'M');
  return hundreds[hundredsPlace - 1] || '';
}

function romanThousands(n) {
  var thousandsPlace = Math.floor(n / 1000) % 10;
  var result = '';

  for (var i = 0; i < thousandsPlace; ++i) {
    result += 'M';
  }

  return result;
}

function romanNumeral(n) {
  return romanThousands(n) +
    romanHundreds(n) +
    romanTens(n) +
    romanOnes(n);
}

console.log(romanNumeral(3984));
