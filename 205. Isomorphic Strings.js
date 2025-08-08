/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const charIndexS = {};
  const charIndexT = {};

  for (let i = 0; i < s.length; i++) {
    if (!(s[i] in charIndexS)) {
      charIndexS[s[i]] = i;
    }
    if (!(t[i] in charIndexT)) {
      charIndexT[t[i]] = i;
    }
    if (charIndexS[s[i]] !== charIndexT[t[i]]) {
      return false;
    }
  }
  return true;
};

console.log(isIsomorphic("egg", "add")); // true
console.log(isIsomorphic("foo", "bar")); // false
console.log(isIsomorphic("paper", "title")); // true
