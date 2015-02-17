// Write a program that prints the numbers from 1 to 100.
// But for multiples of three print “Fizz” instead of the
// number and for the multiples of five print “Buzz”.
// For numbers which are multiples of both three and
// five print “FizzBuzz”."
//
// So this:
//
// fizzbuzz()
//
// Would return an array with 100 items, the first 16 of
// which would look like this:
//
//    1,
//    2,
//    'Fizz',
//    4,
//    'Buzz',
//    'Fizz',
//     7,
//     8,
//     'Fizz',
//     'Buzz',
//     11,
//     'Fizz',
//     13,
//     14,
//     'FizzBuzz',
function fizzbuzz(n) {
  var result = [];

  for (var i = 1; i <= 100; ++i) {
    var divisibleBy3 = (i % 3 === 0),
        divisibleBy5 = (i % 5 === 0);

    if (divisibleBy3 && divisibleBy5) {
      result.push('FizzBuzz');
    } else if (divisibleBy3) {
      result.push('Fizz');
    } else if (divisibleBy5) {
      result.push('Buzz');
    } else {
      result.push(i);
    }
  }

  return result;
}
