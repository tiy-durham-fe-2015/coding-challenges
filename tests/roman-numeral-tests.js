describe('roman', function () {

  describe('toNumber', function () {
    it('handles addition', function () {
      expect(romanNumeral.toNumber('DCCLVI')).toBe(756);
    });

    it('handles subtraction', function () {
      expect(romanNumeral.toNumber('MMMCMLXXXIV')).toBe(3984);
    });

    it('throws exception if not a valid roman numeral', function () {
      function invalidRomanNumeral() {
        romanNumeral.toNumber('X4VII');
      }

      expect(invalidRomanNumeral).toThrow();
    });
  });

  describe('fromNumber', function () {
    it('handles addition', function () {
      expect(romanNumeral.fromNumber(756)).toBe('DCCLVI');
    });

    it('handles subtraction', function () {
      expect(romanNumeral.fromNumber(3984)).toBe('MMMCMLXXXIV');
    });

    it('throws exception if not a valid number', function () {
      function invalidRomanNumeral() {
        romanNumeral.fromNumber('hey');
      }

      expect(invalidRomanNumeral).toThrow();
    });

    it('number cannot be less than 1', function () {
      function invalidRomanNumeral() {
        romanNumeral.fromNumber(0);
      }

      expect(invalidRomanNumeral).toThrow();
    });
  });

});
