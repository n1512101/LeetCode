/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  ransomNote = ransomNote.split("");
  magazine = magazine.split("");

  for (let i = 0; i < ransomNote.length; i++) {
    const index = magazine.indexOf(ransomNote[i]);
    if (index === -1) {
      return false;
    } else {
      ransomNote[i] = 0;
      magazine[index] = 0;
    }
  }
  return true;
};

console.log(canConstruct("a", "b")); // false
console.log(canConstruct("aa", "ab")); // false
console.log(canConstruct("aa", "aab")); // true
