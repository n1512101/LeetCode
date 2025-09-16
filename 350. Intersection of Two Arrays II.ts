function intersect(nums1: number[], nums2: number[]): number[] {
  const result: number[] = [];
  const counts: Record<string, number> = {};

  for (let num of nums1) {
    counts[num] = (counts[num] ?? 0) + 1;
  }

  for (let num of nums2) {
    if (counts[num]) {
      result.push(num);
      counts[num]--;
    }
  }

  return result;
}

console.log(intersect([1, 2, 2, 1], [2, 2]));
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
