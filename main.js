// Ransom Note
// Easy
// Topics
// Companies
// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.



//     Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true
function canConstruct(ransomNote, magazine) {
    // Create a hashmap to store the frequency of each letter in the magazine
    const magazineMap = {};

    // Populate the hashmap with the frequency of each letter in the magazine
    for (const char of magazine) {
        if (magazineMap[char]) {
            magazineMap[char]++;
        } else {
            magazineMap[char] = 1;
        }
    }

    // Check each character in the ransomNote
    for (const char of ransomNote) {
        if (magazineMap[char]) {
            magazineMap[char]--;
        } else {
            return false; // Character is not available or not enough in the magazine
        }
    }

    return true; // All characters in ransomNote are available in the magazine
}