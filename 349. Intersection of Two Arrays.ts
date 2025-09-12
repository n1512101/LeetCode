// // 方法1
// function intersection(nums1: number[], nums2: number[]): number[] {
//   nums1 = Array.from(new Set(nums1));
//   nums2 = Array.from(new Set(nums2));

//   const result: number[] = [];
//   for (let e of nums1) {
//     if (nums2.includes(e)) {
//       result.push(e);
//     }
//   }
//   return result;
// }

// 方法2
function intersection(nums1: number[], nums2: number[]): number[] {
  const s1 = new Set(nums1);
  const s2 = new Set(nums2);

  return [...s1].filter((num) => s2.has(num));
}

console.log(intersection([1, 2, 2, 1], [2, 2]));
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
