/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  if (num < 10) return num;

  const len = ("" + num).length;
  let sum = 0;
  for (let i = len - 1; i >= 0; i--) {
    sum += Math.floor(num / Math.pow(10, i)) % 10;
  }

  return addDigits(sum);
};

console.log(addDigits(38)); // 2
console.log(addDigits(0)); // 0