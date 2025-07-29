// // 方法1
// /**
//  * @param {number} n
//  * @return {number}
//  */
// var hammingWeight = function (n) {
//   const binary = n.toString(2);
//   let result = 0;
//   for (let c of binary) {
//     result += parseInt(c);
//   }
//   return result;
// };

// 方法2
/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
  let res = 0;
  while (n) {
    res += n & 1;
    n >>>= 1;
  }
  return res;
};


