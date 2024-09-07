// Edit Distance
// Solved
// Medium
// Topics
// Companies
// Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.

// You have the following three operations permitted on a word:

// Insert a character
// Delete a character
// Replace a character


// Example 1:

// Input: word1 = "horse", word2 = "ros"
// Output: 3
// Explanation:
// horse -> rorse(replace 'h' with 'r')
// rorse -> rose(remove 'r')
// rose -> ros(remove 'e')
// Example 2:

// Input: word1 = "intention", word2 = "execution"
// Output: 5
// Explanation:
// intention -> inention(remove 't')
// inention -> enention(replace 'i' with 'e')
// enention -> exention(replace 'n' with 'x')
// exention -> exection(replace 'n' with 'c')
// exection -> execution(insert 'u')
function minDistance(word1, word2) {
    const m = word1.length;
    const n = word2.length;

    // Create a 2D array to store the minimum operations required
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    // Initialize the dp array with base cases
    for (let i = 0; i <= m; i++) {
        dp[i][0] = i;
    }

    for (let j = 0; j <= n; j++) {
        dp[0][j] = j;
    }

    // Fill the dp array using dynamic programming
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
            }
        }
    }

    return dp[m][n];
}