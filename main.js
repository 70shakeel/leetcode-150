// Minimum Path Sum
// Medium
// Topics
// Companies
// Given a m x n grid filled with non - negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.

//     Note: You can only move either down or right at any point in time.



//         Example 1:


// Input: grid = [[1, 3, 1], [1, 5, 1], [4, 2, 1]]
// Output: 7
// Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.
//     Example 2:

// Input: grid = [[1, 2, 3], [4, 5, 6]]
// Output: 12
function minPathSum(grid) {
    if (grid.length === 0 || grid[0].length === 0) return 0;

    const m = grid.length;    // Number of rows
    const n = grid[0].length; // Number of columns
    const dp = Array.from({ length: m }, () => Array(n).fill(0));

    // Initialize the starting point
    dp[0][0] = grid[0][0];

    // Fill the first row
    for (let j = 1; j < n; j++) {
        dp[0][j] = dp[0][j - 1] + grid[0][j];
    }

    // Fill the first column
    for (let i = 1; i < m; i++) {
        dp[i][0] = dp[i - 1][0] + grid[i][0];
    }

    // Fill the rest of the dp array
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
        }
    }

    // Return the minimum path sum to the bottom-right corner
    return dp[m - 1][n - 1];
}