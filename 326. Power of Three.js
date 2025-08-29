/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  if (n === 1) {
    return true;
  } else if (n < 1) {
    return false;
  } else {
    return isPowerOfThree(n / 3);
  }
};

console.log(isPowerOfThree(27)); // true
console.log(isPowerOfThree(0)); // false
console.log(isPowerOfThree(-1)); // false
