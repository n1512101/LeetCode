/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  const len = s.length;
  for (let i = 0; i < len >> 1; i++) {
    [s[i], s[len - i - 1]] = [s[len - i - 1] as string, s[i] as string];
  }
}
