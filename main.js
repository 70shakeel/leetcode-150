// N - Queens II
// Hard
// Topics
// Companies
// The n - queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

// Given an integer n, return the number of distinct solutions to the n - queens puzzle.



//     Example 1:


// Input: n = 4
// Output: 2
// Explanation: There are two distinct solutions to the 4 - queens puzzle as shown.
//     Example 2:

// Input: n = 1
// Output: 1
function totalNQueens(n) {
    let result = 0;

    // Initialize the board with empty strings
    const board = Array.from({ length: n }, () => '.'.repeat(n));

    // Check if the position (row, col) is safe to place a queen
    const isSafe = (board, row, col) => {
        // Check the column
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') return false;
        }
        // Check the upper left diagonal
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') return false;
        }
        // Check the upper right diagonal
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === 'Q') return false;
        }
        return true;
    };

    // Backtrack to find all solutions
    const backtrack = (board, row) => {
        if (row === n) {
            result++;
            return;
        }
        for (let col = 0; col < n; col++) {
            if (isSafe(board, row, col)) {
                // Place the queen
                board[row] = board[row].substring(0, col) + 'Q' + board[row].substring(col + 1);
                // Move to the next row
                backtrack(board, row + 1);
                // Remove the queen
                board[row] = board[row].substring(0, col) + '.' + board[row].substring(col + 1);
            }
        }
    };

    backtrack(board, 0);
    return result;
}