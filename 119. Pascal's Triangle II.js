// 方法1
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  let result = [1];

  for (let i = 0; i < rowIndex; i++) {
    const arr = [];
    for (let j = 0; j <= result.length; j++) {
      if (j === 0 || j === result.length) {
        arr.push(1);
        continue;
      }
      arr[j] = result[j - 1] + result[j];
    }
    result = arr;
  }

  return result;
};


console.log(getRow(3));
console.log(getRow(0));
console.log(getRow(1));