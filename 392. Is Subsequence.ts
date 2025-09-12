function isSubsequence(s: string, t: string): boolean {
  if (!s.length) return true;
  let p1 = 0;
  for (let i = 0; i < t.length; i++) {
    if (s[p1] === t[i]) {
      p1++;
    }
    if (p1 === s.length) return true;
  }
  return false;
}

console.log(isSubsequence("abc", "ahbgdc"));
console.log(isSubsequence("axc", "ahbgdc"));
