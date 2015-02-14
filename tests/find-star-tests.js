describe('find-star', function () {

  it('returns negatives if no star exists', function () {
    var result = findStar([['a', 'b'], ['c', 'd']]);

    expect(result.col).toBe(-1);
    expect(result.row).toBe(-1);
  });

  it('finds * in col 0', function () {
    var result = findStar([['a', 'b'], ['*', 'd']]);

    expect(result.col).toBe(0);
    expect(result.row).toBe(1);
  });

  it('finds * in row 0', function () {
    var result = findStar([['a', 'b', '*'], ['j', '2', 'd']]);

    expect(result.col).toBe(2);
    expect(result.row).toBe(0);
  });

  it('handles various length arrays', function () {
    var result = findStar([['a'], ['j', '2', 'd'], ['i', 'b', 'q', '*', 'z']]);

    expect(result.col).toBe(3);
    expect(result.row).toBe(2);
  });
});
