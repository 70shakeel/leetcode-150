// Substring with Concatenation of All Words
// Hard
// Topics
// Companies
// You are given a string s and an array of strings words.All the strings of words are of the same length.

// A concatenated string is a string that exactly contains all the strings of any permutation of words concatenated.

// For example, if words = ["ab", "cd", "ef"], then "abcdef", "abefcd", "cdabef", "cdefab", "efabcd", and "efcdab" are all concatenated strings. "acdbef" is not a concatenated string because it is not the concatenation of any permutation of words.
// Return an array of the starting indices of all the concatenated substrings in s.You can return the answer in any order.



//     Example 1:

// Input: s = "barfoothefoobarman", words = ["foo", "bar"]

// Output: [0, 9]

// Explanation:

// The substring starting at 0 is "barfoo".It is the concatenation of["bar", "foo"] which is a permutation of words.
// The substring starting at 9 is "foobar".It is the concatenation of["foo", "bar"] which is a permutation of words.

//     Example 2:

// Input: s = "wordgoodgoodgoodbestword", words = ["word", "good", "best", "word"]

// Output: []

// Explanation:

// There is no concatenated substring.

//     Example 3:

// Input: s = "barfoofoobarthefoobarman", words = ["bar", "foo", "the"]

// Output: [6, 9, 12]

// Explanation:

// The substring starting at 6 is "foobarthe".It is the concatenation of["foo", "bar", "the"].
// The substring starting at 9 is "barthefoo".It is the concatenation of["bar", "the", "foo"].
// The substring starting at 12 is "thefoobar".It is the concatenation of["the", "foo", "bar"].
function findSubstring(s, words) {
    if (!s || words.length === 0) return [];

    const wordLength = words[0].length;
    const totalWordsLength = wordLength * words.length;
    const sLength = s.length;

    if (sLength < totalWordsLength) return [];

    const wordsMap = new Map();
    for (let word of words) {
        wordsMap.set(word, (wordsMap.get(word) || 0) + 1);
    }

    const result = [];

    for (let i = 0; i <= sLength - totalWordsLength; i++) {
        const seenWords = new Map();
        let j = 0;

        while (j < words.length) {
            const wordIndex = i + j * wordLength;
            const word = s.substring(wordIndex, wordIndex + wordLength);

            if (!wordsMap.has(word)) break;

            seenWords.set(word, (seenWords.get(word) || 0) + 1);

            if (seenWords.get(word) > wordsMap.get(word)) break;

            j++;
        }

        if (j === words.length) {
            result.push(i);
        }
    }

    return result;
}