// Word Pattern
// Easy
// Topics
// Companies
// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non - empty word in s.



//     Example 1:

// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true
// Example 2:

// Input: pattern = "abba", s = "dog cat cat fish"
// Output: false
// Example 3:

// Input: pattern = "aaaa", s = "dog cat cat dog"
// Output: false
function wordPattern(pattern, s) {
    const words = s.split(' ');
    if (pattern.length !== words.length) {
        return false;
    }

    const charToWord = new Map();
    const wordToChar = new Map();

    for (let i = 0; i < pattern.length; i++) {
        const char = pattern[i];
        const word = words[i];

        if (charToWord.has(char)) {
            if (charToWord.get(char) !== word) {
                return false;
            }
        } else {
            charToWord.set(char, word);
        }

        if (wordToChar.has(word)) {
            if (wordToChar.get(word) !== char) {
                return false;
            }
        } else {
            wordToChar.set(word, char);
        }
    }

    return true;
}