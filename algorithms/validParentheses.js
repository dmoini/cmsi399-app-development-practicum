/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
  if (s.length === 0) {
    return true;
  }
  if (s.length % 2 === 1) {
    return false;
  }
  const parentheses = { ")": "(", "]": "[", "}": "{" };
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (["(", "[", "{"].includes(s[i])) {
      stack.push(s[i]);
    } else {
      if (parentheses[s[i]] !== stack.pop()) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
