describe('fizzbuzz', function () {

  it('the first 16 numbers are correct', function () {
    var result = fizzbuzz();
    expect(result.slice(0, 15)).toEqual([
      1, 2, 'Fizz', 4, 'Buzz', 'Fizz',
      7, 8, 'Fizz', 'Buzz', 11, 'Fizz',
      13, 14, 'FizzBuzz'
    ]);
  });

  it('returns 100 items', function () {
    expect(fizzbuzz().length).toEqual(100);
  });

  it('returns the correct sequence', function () {
    var result = fizzbuzz();

    result.some(function (item, i) {
      ++i; // Get 1 to 100, not 0 to 99

      var expected = i;

      if (i % 3 === 0 && i % 5 === 0) {
        expected = 'FizzBuzz';
      } else if (i % 3 === 0) {
        expected = 'Fizz';
      } else if (i % 5 === 0) {
        expected = 'Buzz';
      }

      expect(item).toEqual(expected);

      return item !== expected;
    });
  });
});
