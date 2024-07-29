// Word Search
// Medium
// Topics
// Companies
// Given an m x n grid of characters board and a string word, return true if word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring.The same letter cell may not be used more than once.



//     Example 1:


// Input: board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], word = "ABCCED"
// Output: true
// Example 2:


// Input: board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], word = "SEE"
// Output: true
// Example 3:


// Input: board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], word = "ABCB"
// Output: false
const exist = (board, word) => {
    const rows = board.length;
    const cols = board[0].length;

    const dfs = (row, col, index) => {
        if (index === word.length) return true; // All characters matched
        if (row < 0 || row >= rows || col < 0 || col >= cols || board[row][col] !== word[index]) return false;

        const temp = board[row][col]; // Save the character at current position
        board[row][col] = '#'; // Mark the cell as visited by using a placeholder character

        const found = (
            dfs(row + 1, col, index + 1) || // down
            dfs(row - 1, col, index + 1) || // up
            dfs(row, col + 1, index + 1) || // right
            dfs(row, col - 1, index + 1)    // left
        );

        board[row][col] = temp; // Restore the character at current position
        return found;
    };

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (board[i][j] === word[0] && dfs(i, j, 0)) {
                return true;
            }
        }
    }

    return false;
};