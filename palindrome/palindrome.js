// isPalindrome takes a string and returns true
// if the string is the same backwards as forwards,
// and false if it is not.
function isPalindrome(str) {
  for (var i = 0, j = str.length - 1; i < j; ++i, --j) {
    if (str[i] !== str[j]) {
      return false;
    }
  }

  return true;
}
