// // 方法1
// /**
//  * @param {number} n
//  * @return {boolean}
//  */
// var isHappy = function (n) {
//   const arr = [];

//   function happy(n) {
//     let num = 0;
//     for (let c of n.toString()) {
//       num += Math.pow(+c, 2);
//     }
//     if (num === 1) return true;
//     if (arr.includes(num)) {
//       return false;
//     } else {
//       arr.push(num);
//       return happy(num);
//     }
//   }
//   return happy(n);
// };

// 方法2
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const visit = new Set();

  function getNext(n) {
    let next = 0;
    while (n > 0) {
      next += Math.pow(n % 10, 2);
      n = Math.floor(n / 10);
    }
    return next;
  }

  while (!visit.has(n)) {
    visit.add(n);
    n = getNext(n);
    if (n === 1) return true;
  }

  return false;
};

console.log(isHappy(19))
console.log(isHappy(2))

