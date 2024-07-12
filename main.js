// Surrounded Regions
// Medium
// Topics
// Companies
// You are given an m x n matrix board containing letters 'X' and 'O', capture regions that are surrounded:

// Connect: A cell is connected to adjacent cells horizontally or vertically.
//     Region: To form a region connect every 'O' cell.
//         Surround: The region is surrounded with 'X' cells if you can connect the region with 'X' cells and none of the region cells are on the edge of the board.
// A surrounded region is captured by replacing all 'O's with 'X's in the input matrix board.



//     Example 1:

// Input: board = [["X", "X", "X", "X"], ["X", "O", "O", "X"], ["X", "X", "O", "X"], ["X", "O", "X", "X"]]

// Output: [["X", "X", "X", "X"], ["X", "X", "X", "X"], ["X", "X", "X", "X"], ["X", "O", "X", "X"]]

// Explanation:


// In the above diagram, the bottom region is not captured because it is on the edge of the board and cannot be surrounded.

//     Example 2:

// Input: board = [["X"]]

// Output: [["X"]]
function solve(board) {
    if (board.length === 0) return;

    const rows = board.length;
    const cols = board[0].length;

    // Helper function to perform DFS
    function dfs(x, y) {
        if (x < 0 || y < 0 || x >= rows || y >= cols || board[x][y] !== 'O') {
            return;
        }
        board[x][y] = 'T'; // Temporarily mark this cell

        // Explore all four directions
        dfs(x + 1, y);
        dfs(x - 1, y);
        dfs(x, y + 1);
        dfs(x, y - 1);
    }

    // Mark the border 'O's and connected 'O's
    for (let i = 0; i < rows; i++) {
        if (board[i][0] === 'O') dfs(i, 0);
        if (board[i][cols - 1] === 'O') dfs(i, cols - 1);
    }
    for (let j = 0; j < cols; j++) {
        if (board[0][j] === 'O') dfs(0, j);
        if (board[rows - 1][j] === 'O') dfs(rows - 1, j);
    }

    // Flip the cells to the correct final states
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (board[i][j] === 'O') {
                board[i][j] = 'X'; // Surrounded regions
            } else if (board[i][j] === 'T') {
                board[i][j] = 'O'; // Regions connected to the border
            }
        }
    }
}