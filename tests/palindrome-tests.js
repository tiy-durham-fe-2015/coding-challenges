describe('palindrome', function () {

  it('returns false for non-palindromes', function () {
    expect(isPalindrome('hoi')).toBe(false);
  });

  it('returns true for palindromes', function () {
    expect(isPalindrome('Hello olleH')).toBe(true);
  });

});
