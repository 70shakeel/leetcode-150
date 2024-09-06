// Interleaving String
// Medium
// Topics
// Companies
// Given strings s1, s2, and s3, find whether s3 is formed by an interleaving of s1 and s2.

// An interleaving of two strings s and t is a configuration where s and t are divided into n and m
// substrings
// respectively, such that:

// s = s1 + s2 + ... + sn
// t = t1 + t2 + ... + tm
//     | n - m | <= 1
// The interleaving is s1 + t1 + s2 + t2 + s3 + t3 + ... or t1 + s1 + t2 + s2 + t3 + s3 + ...
// Note: a + b is the concatenation of strings a and b.



//     Example 1:


// Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
// Output: true
// Explanation: One way to obtain s3 is:
// Split s1 into s1 = "aa" + "bc" + "c", and s2 into s2 = "dbbc" + "a".
// Interleaving the two splits, we get "aa" + "dbbc" + "bc" + "a" + "c" = "aadbbcbcac".
// Since s3 can be obtained by interleaving s1 and s2, we return true.
//     Example 2:

// Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
// Output: false
// Explanation: Notice how it is impossible to interleave s2 with any other string to obtain s3.
//     Example 3:

// Input: s1 = "", s2 = "", s3 = ""
// Output: true
function isInterleave(s1, s2, s3) {
    // Base case: Length mismatch
    if (s1.length + s2.length !== s3.length) {
        return false;
    }

    // Create a 2D DP array
    let dp = Array(s1.length + 1).fill(null).map(() => Array(s2.length + 1).fill(false));

    // Initialize the base case
    dp[0][0] = true;

    // Fill the first row (s1 empty, s2 matches s3)
    for (let i = 1; i <= s1.length; i++) {
        dp[i][0] = dp[i - 1][0] && s1[i - 1] === s3[i - 1];
    }

    // Fill the first column (s2 empty, s1 matches s3)
    for (let j = 1; j <= s2.length; j++) {
        dp[0][j] = dp[0][j - 1] && s2[j - 1] === s3[j - 1];
    }

    // Fill the rest of the table
    for (let i = 1; i <= s1.length; i++) {
        for (let j = 1; j <= s2.length; j++) {
            dp[i][j] = (dp[i - 1][j] && s1[i - 1] === s3[i + j - 1]) ||
                (dp[i][j - 1] && s2[j - 1] === s3[i + j - 1]);
        }
    }

    // The answer is in the bottom-right corner
    return dp[s1.length][s2.length];
}