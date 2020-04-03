/**
 * @param {string} s
 * @return {string}
 */
const frequencySort = s => {
    if (s.length === 0) {
        return ""
    }
    const count = {}
    for (let char of s) {
        count[char] ? count[char]++ : count[char] = 1
    }
    console.log(count)
    const sorted_count = Object.keys(count).sort((a,b) => count[b] - count[a])
    console.log(sorted_count)
    let res = ""
    sorted_count.forEach(char => {
        res += char.repeat(count[char])
    })
    return res
};
