// Longest Palindromic Substring
// Medium
// Topics
// Companies
// Hint
// Given a string s, return the longest
// palindromic

// substring
//     in s.



//         Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
//     Example 2:

// Input: s = "cbbd"
// Output: "bb"
function longestPalindrome(s) {
    const n = s.length;
    if (n < 2) return s;

    // dp[i][j] will be true if substring s[i..j] is a palindrome
    const dp = Array.from({ length: n }, () => Array(n).fill(false));

    let start = 0;  // To store the start index of the longest palindrome
    let maxLength = 1;  // To store the length of the longest palindrome

    // Every single character is a palindrome
    for (let i = 0; i < n; i++) {
        dp[i][i] = true;
    }

    // Check for substring of length 2
    for (let i = 0; i < n - 1; i++) {
        if (s[i] === s[i + 1]) {
            dp[i][i + 1] = true;
            start = i;
            maxLength = 2;
        }
    }

    // Check for substrings of length greater than 2
    for (let len = 3; len <= n; len++) {
        for (let i = 0; i < n - len + 1; i++) {
            let j = i + len - 1;  // Ending index of the current substring

            // Check if s[i] equals s[j] and the substring s[i+1..j-1] is a palindrome
            if (s[i] === s[j] && dp[i + 1][j - 1]) {
                dp[i][j] = true;

                if (len > maxLength) {
                    start = i;
                    maxLength = len;
                }
            }
        }
    }

    // Return the longest palindromic substring
    return s.substring(start, start + maxLength);
}