describe('roman', function () {

  describe('toNumber', function () {
    function invalidRomanNumeral(num) {
      return function () {
        romanNumeral.toNumber(num);
      }
    }

    it('handles 99', function () {
      expect(romanNumeral.toNumber('XCIX')).toBe(99);
    });

    it('handles addition', function () {
      expect(romanNumeral.toNumber('DCCLVI')).toBe(756);
    });

    it('handles subtraction', function () {
      expect(romanNumeral.toNumber('MMMCMLXXXIV')).toBe(3984);
    });

    it('throws exception if invalid chars', function () {
      expect(invalidRomanNumeral('X4VII')).toThrow();
    });

    it('throws exception if subtracting same number more than once', function () {
      expect(invalidRomanNumeral('IXIV')).toThrow();
    });

    it('throws exception if subtracting and adding a number', function () {
      expect(invalidRomanNumeral('XLX')).toThrow();
    });

    it('throws exception if IM', function () {
      expect(invalidRomanNumeral('IM')).toThrow();
    });

    it('throws exception if MIM', function () {
      expect(invalidRomanNumeral('MIM')).toThrow();
    });

    it('throws exception if adding number more than 3x', function () {
      expect(invalidRomanNumeral('XXXX')).toThrow();
    });

    it('accepts more than 3 Ms', function () {
      expect(romanNumeral.toNumber('MMMM')).toBe(4000);
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
