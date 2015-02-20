describe('to-hex', function () {

  it('returns FF when passed 255', function () {
    expect(toHex(255)).toBe('FF');
  });

  it('returns 0 when passed 0', function () {
    expect(toHex(0)).toBe('0');
  });

  it('returns "-9BA" when passed -2490', function () {
    expect(toHex(-2490)).toBe('-9BA');
  });

  it('should throw an exception when passed a string', function () {
    function badCall() {
      toHex('foo');
    }

    expect(badCall).toThrow();
  });

});
