describe('to-hex', function () {

  it('returns FF when passed 255', function () {
    expect(toHex(255)).toBe('FF');
  });

  it('returns A when passed 10', function () {
    expect(toHex(10)).toBe('A');
  });

  it('returns 244E41 when passed 2379329', function () {
    expect(toHex(2379329)).toBe('244E41');
  });

  it('returns DD8E88B when passed 232319115', function () {
    expect(toHex(232319115)).toBe('DD8E88B');
  });
});
