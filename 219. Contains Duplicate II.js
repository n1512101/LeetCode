// // 方法1
// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {boolean}
//  */
// var containsNearbyDuplicate = function (nums, k) {
//   const newMap = new Map();

//   for (let i = 0; i < nums.length; i++) {
//     const num = nums[i];
//     if (newMap.has(num) && i - newMap.get(num) <= k) return true;
//     newMap.set(num, i);
//   }

//   return false;
// };

// 方法2
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j <= i + k && j < nums.length; j++) {
      if (nums[i] === nums[j]) return true;
    }
  }
  return false;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));  // true
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));  // true
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));  // false