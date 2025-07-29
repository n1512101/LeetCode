// // 方法1
// /**
//  * @param {number[]} nums
//  * @return {boolean}
//  */
// var containsDuplicate = function (nums) {
//   const set = new Set(nums);
//   return nums.length !== set.size;
// };

// 方法2
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let newMap = new Map();

  for (const num of nums) {
    if (newMap.has(num)) return true;
    newMap.set(num, 0);
  }

  return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));  // true
console.log(containsDuplicate([1, 2, 3, 4]));  // false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));  // true

