// Maximal Square
// Medium
// Topics
// Companies
// Given an m x n binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.



// Example 1:


// Input: matrix = [["1", "0", "1", "0", "0"], ["1", "0", "1", "1", "1"], ["1", "1", "1", "1", "1"], ["1", "0", "0", "1", "0"]]
// Output: 4
// Example 2:


// Input: matrix = [["0", "1"], ["1", "0"]]
// Output: 1
// solve using multidimensional dp in js
function maximalSquare(matrix) {
    if (!matrix.length || !matrix[0].length) return 0;

    const rows = matrix.length;
    const cols = matrix[0].length;
    let dp = Array.from({ length: rows }, () => Array(cols).fill(0));
    let maxSquareLen = 0;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === '1') {
                if (i === 0 || j === 0) {
                    dp[i][j] = 1; // First row or first column
                } else {
                    dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
                }
                maxSquareLen = Math.max(maxSquareLen, dp[i][j]);
            }
        }
    }

    // Return the area of the largest square
    return maxSquareLen * maxSquareLen;
}