// // 方法1
// /**
//  * @param {number[]} nums
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */
// var moveZeroes = function (nums) {
//   let len = nums.length;
//   for (let i = 0; i < len; i++) {
//     if (nums[i] === 0) {
//       const n = nums.splice(i, 1);
//       nums.push(...n);
//       i--;
//       len--;
//     }
//   }
// };


// 方法2
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let position = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[position++] = nums[i];
    }
  }
  while (position < nums.length) {
    nums[position++] = 0;
  }
};
