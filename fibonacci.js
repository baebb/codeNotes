//basic fib recursive
function fibRecursive(n) {
  if (n === 0 || n === 1) {
    return n;
  }
  return fibRecursive(n - 1) + fibRecursive(n - 2);
}

//fib recursive memorization
function fibber(n, memo) {
  let memo = memo || {};
  
  if (memo[n]) return memo[n];
  if (n <= 1) return 1;
  
  return memo[n] = fibber(n - 1, memo) + fibber(n - 2, memo);
}

Fibber.prototype.fib = function (n) {
  
  // edge case: negative index
  if (n < 0) {
    throw new Error('Index was negative. No such thing as a negative index in a series.');
  }
  
  // base case: 0 or 1
  else if (n === 0 || n === 1) {
    return n;
  }
  
  // see if we've already calculated this
  if (this.memo.hasOwnProperty(n)) {
    return this.memo[n];
  }
  
  var result = this.fib(n - 1) + this.fib(n - 2);
  
  // memoize
  this.memo[n] = result;
  
  return result;
};

//fib iterative
function fibIterative(n) {
  
  // edge cases:
  if (n < 0) {
    throw new Error('Index was negative. No such thing as a negative index in a series.');
  } else if (n === 0 || n === 1) {
    return n;
  }
  
  // we'll be building the fibonacci series from the bottom up
  // so we'll need to track the previous 2 numbers at each step
  var prevPrev = 0;
  var prev = 1;
  var current;
  
  // since we already initialized the first 2 numbers in
  // the series we take n - 2 steps ahead to reach n
  for (var x = 2; x <= n; x++) {
    current = prev + prevPrev;
    prevPrev = prev;
    prev = current;
  }
  
  return current;
}