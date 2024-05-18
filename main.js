// Minimum Window Substring
// Hard
// Topics
// Companies
// Hint
// Given two strings s and t of lengths m and n respectively, return the minimum window
// substring
//  of s such that every character in t(including duplicates) is included in the window.If there is no such substring, return the empty string "".

// The testcases will be generated such that the answer is unique.



//     Example 1:

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
//     Example 2:

// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.
//     Example 3:

// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.
function minWindow(s, t) {
    if (t.length > s.length) return "";

    const charCount = {};
    for (let char of t) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    let required = Object.keys(charCount).length;
    let formed = 0;
    const windowCounts = {};
    let left = 0, right = 0;
    let minLen = Infinity, minLeft = 0, minRight = 0;

    while (right < s.length) {
        let char = s[right];
        windowCounts[char] = (windowCounts[char] || 0) + 1;

        if (char in charCount && windowCounts[char] === charCount[char]) {
            formed++;
        }

        while (left <= right && formed === required) {
            char = s[left];

            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                minLeft = left;
                minRight = right;
            }

            windowCounts[char]--;
            if (char in charCount && windowCounts[char] < charCount[char]) {
                formed--;
            }
            left++;
        }
        right++;
    }

    return minLen === Infinity ? "" : s.substring(minLeft, minLeft + minLen);
}