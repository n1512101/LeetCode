function countBits(n: number): number[] {
  const res: number[] = [];

  for (let i = 0; i <= n; i++) {
    const str = i.toString(2);
    let num = 0;
    for (let s of str) {
      num += +s;
    }
    res.push(num);
  }

  return res;
}

console.log(countBits(2)); // [0,1,1]
console.log(countBits(5)); // [0,1,1,2,1,2]
