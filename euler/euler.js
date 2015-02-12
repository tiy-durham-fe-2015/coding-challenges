// https://projecteuler.net/problems

// Euler 001
function multiplesOf3Or5Below(n) {
  var sum = 0;

  for (var i = 0; i < n; ++i) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  return sum;
}

//console.log(multiplesOf3Or5Below(1000));

// Euler 002
function fib(n) {
  var a = 1,
      b = 2,
      sum = 0;

  while (b <= n) {
    if (b % 2 === 0) {
      sum += b;
    }

    var c = a + b;
    a = b;
    b = c;
  }

  return sum;
}

//console.log(fib(4000000));

// Euler 003
// From here: http://code.jasonbhill.com/c/project-euler-problem-3/
function factorsOf(n) {
  var largestFactor = 1,
      odds = 3;

  // Remove factors of 2
  while (n % 2 === 0) {
    largestFactor = 2;
    n = n / 2;
  }

  // We've removed all even factors
  // now, remove odd factors until
  // we get our largest one.
  while (n != 1) {
    while (n % odds === 0) {
      largestFactor = odds;
      n = n / odds;
    }

    odds += 2;
  }

  return largestFactor;
}

//console.log(factorsOf(600851475143));

// Euler 004
function isPalindrome(n) {
  var str = n.toString();

  for (var i = 0, j = str.length - 1; i < j; ++i, --j) {
    if (str[i] !== str[j]) {
      return false;
    }
  }

  return true;
}

function largestPalindromeUpTo(n) {
  while (!isPalindrome(n)) {
    --n;
  }

  return n;
}

function isInRange(n, lessThan, greaterThan) {
  return n < lessThan && n > greaterThan;
}

function largestPalindromeProduct(lessThan, greaterThan) {
  // 1. Find the largest palindrome less than
  // or equal to n * n
  //
  // 2. Find a product of the same decimal places
  // as n which produces the palindrome
  var n = lessThan - 1;
  var palindrome = largestPalindromeUpTo(n * n);

  while (palindrome > lessThan) {
    for (var i = greaterThan + 1; i < lessThan; ++i) {
      if (palindrome % i === 0 &&
          isInRange(i, lessThan, greaterThan) &&
          isInRange(palindrome/ i, lessThan, greaterThan)) {
        return palindrome;
      }
    }

    palindrome = largestPalindromeUpTo(palindrome - 1);
  }
}

console.log(largestPalindromeProduct(1000, 99));
