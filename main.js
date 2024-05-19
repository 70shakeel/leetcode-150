// Valid Sudoku
// Medium
// Topics
// Companies
// Determine if a 9 x 9 Sudoku board is valid.Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1 - 9 without repetition.
// Each column must contain the digits 1 - 9 without repetition.
// Each of the nine 3 x 3 sub - boxes of the grid must contain the digits 1 - 9 without repetition.
//     Note:

// A Sudoku board(partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.


//     Example 1:


// Input: board =
//     [["5", "3", ".", ".", "7", ".", ".", ".", "."]
//         , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
//         , [".", "9", "8", ".", ".", ".", ".", "6", "."]
//         , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
//         , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
//         , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
//         , [".", "6", ".", ".", ".", ".", "2", "8", "."]
//         , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
//         , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]
// Output: true
// Example 2:

// Input: board =
//     [["8", "3", ".", ".", "7", ".", ".", ".", "."]
//         , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
//         , [".", "9", "8", ".", ".", ".", ".", "6", "."]
//         , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
//         , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
//         , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
//         , [".", "6", ".", ".", ".", ".", "2", "8", "."]
//         , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
//         , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]
// Output: false
// Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
function isValidSudoku(board) {
    // Helper function to check if a value is valid in a set
    const isValid = (set, value) => {
        if (value === '.') return true;
        if (set.has(value)) return false;
        set.add(value);
        return true;
    };

    // Initialize sets to track the values seen in rows, columns, and sub-boxes
    const rows = new Array(9).fill(0).map(() => new Set());
    const cols = new Array(9).fill(0).map(() => new Set());
    const boxes = new Array(9).fill(0).map(() => new Set());

    // Iterate through each cell in the board
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            const value = board[r][c];
            if (value === '.') continue;

            // Check the row
            if (!isValid(rows[r], value)) return false;

            // Check the column
            if (!isValid(cols[c], value)) return false;

            // Check the sub-box
            const boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);
            if (!isValid(boxes[boxIndex], value)) return false;
        }
    }

    return true;
}