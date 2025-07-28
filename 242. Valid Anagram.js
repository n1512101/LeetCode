// // 方法1
// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {boolean}
//  */
// var isAnagram = function(s, t) {
//   let index;
//   for (let c of s) {
//     index = t.indexOf(c);
//     if (index === -1) {
//       return false;
//     }
//     t = t.slice(0, index) + t.slice(index + 1);
//   }
//   return t.length === 0;
// };

// console.log(isAnagram("anagram", "nagaram"))

// 方法2
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;

  const array = new Array(26).fill(0);
  const charA = "a".charCodeAt(0);
  
  for (let i = 0; i < s.length; i++) {
    array[s[i].charCodeAt(0) - charA] += 1;
    array[t[i].charCodeAt(0) - charA] -= 1;
  }

  return array.every(item => item === 0);
};

console.log(isAnagram("anagram", "nagaram"));
