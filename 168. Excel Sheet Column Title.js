/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  let res = "";
  const code_A = "A".charCodeAt(0);

  while (columnNumber > 0) {
    columnNumber--;
    res = String.fromCharCode(columnNumber % 26 + code_A) + res;
    columnNumber = Math.floor(columnNumber / 26);
  }

  return res;
};

console.log(convertToTitle(1))    // A
console.log(convertToTitle(28))   // AB
console.log(convertToTitle(701))  // ZY