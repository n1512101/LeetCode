/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let lastElement = [1];
  const result = [[1]];

  for (let i = 1; i < numRows; i++) {
    const arr = [];
    for (let j = 0; j <= lastElement.length; j++) {
      if (j === 0 || j === lastElement.length) {
        arr.push(1);
        continue;
      }
      arr.push(lastElement[j] + lastElement[j - 1]);
    }
    lastElement = arr;
    result.push(arr);
  }

  return result;
};

console.log(generate(5));