// https://leetcode.com/problems/length-of-last-word/

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = s => {
  let words = s.split(" ").filter(e => e !== "");
  return words.length === 0 ? 0 : words[words.length - 1].length;
};
