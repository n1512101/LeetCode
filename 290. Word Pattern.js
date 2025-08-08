/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  s = s.split(" ");
  if (pattern.length !== s.length) return false;
  const patternMap = new Map();
  const sMap = new Map();

  for (let i = 0; i < pattern.length; i++) {
    if (!patternMap.has(pattern[i])) {
      patternMap.set(pattern[i], i);
    }
    if (!sMap.has(s[i])) {
      sMap.set(s[i], i);
    }
    if (patternMap.get(pattern[i]) !== sMap.get(s[i])) {
      return false;
    }
  }

  return true;
};

console.log(wordPattern("abba", "dog cat cat dog"));  // true
console.log(wordPattern("abba", "dog cat cat fish"));  // false
console.log(wordPattern("aaaa", "dog cat cat dog"));  // false
console.log(wordPattern("abba", "dog constructor constructor dog"));  // true
