// Game of Life
// Medium
// Topics
// Companies
// According to Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

// The board is made up of an m x n grid of cells, where each cell has an initial state: live(represented by a 1) or dead(represented by a 0).Each cell interacts with its eight neighbors(horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

// Any live cell with fewer than two live neighbors dies as if caused by under - population.
// Any live cell with two or three live neighbors lives on to the next generation.
// Any live cell with more than three live neighbors dies, as if by over - population.
// Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
// The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously.Given the current state of the m x n grid board, return the next state.



//     Example 1:


// Input: board = [[0, 1, 0], [0, 0, 1], [1, 1, 1], [0, 0, 0]]
// Output: [[0, 0, 0], [1, 0, 1], [0, 1, 1], [0, 1, 0]]
// Example 2:


// Input: board = [[1, 1], [1, 0]]
// Output: [[1, 1], [1, 1]]
function gameOfLife(board) {
    const m = board.length;
    const n = board[0].length;

    // Create a copy of the original board
    const copyBoard = board.map(row => [...row]);

    // Directions array to find the 8 neighbors of a cell
    const directions = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1], [0, 1],
        [1, -1], [1, 0], [1, 1]
    ];

    // Helper function to count live neighbors
    function countLiveNeighbors(row, col) {
        let liveNeighbors = 0;
        for (const [dx, dy] of directions) {
            const newRow = row + dx;
            const newCol = col + dy;
            if (newRow >= 0 && newRow < m && newCol >= 0 && newCol < n && copyBoard[newRow][newCol] === 1) {
                liveNeighbors++;
            }
        }
        return liveNeighbors;
    }

    // Apply the rules to update the board
    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            const liveNeighbors = countLiveNeighbors(row, col);

            // Rule 1 or Rule 3
            if (copyBoard[row][col] === 1 && (liveNeighbors < 2 || liveNeighbors > 3)) {
                board[row][col] = 0;
            }
            // Rule 4
            if (copyBoard[row][col] === 0 && liveNeighbors === 3) {
                board[row][col] = 1;
            }
            // Rule 2 does not need explicit handling as the cell remains the same
        }
    }

    return board;
}