// Word Search II
// Hard
// Topics
// Companies
// Hint
// Given an m x n board of characters and a list of strings words, return all words on the board.

// Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring.The same letter cell may not be used more than once in a word.



//     Example 1:


// Input: board = [["o", "a", "a", "n"], ["e", "t", "a", "e"], ["i", "h", "k", "r"], ["i", "f", "l", "v"]], words = ["oath", "pea", "eat", "rain"]
// Output: ["eat", "oath"]
// Example 2:


// Input: board = [["a", "b"], ["c", "d"]], words = ["abcb"]
// Output: []
class TrieNode {
    constructor() {
        this.children = {};
        this.word = null;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.word = word;
    }
}

const findWords = (board, words) => {
    const result = [];
    const trie = new Trie();

    // Insert all words into the Trie
    for (let word of words) {
        trie.insert(word);
    }

    const dfs = (board, node, i, j) => {
        // If out of bounds or the letter is not in the Trie, return
        if (i < 0 || j < 0 || i >= board.length || j >= board[0].length || !node.children[board[i][j]]) {
            return;
        }

        let char = board[i][j];
        node = node.children[char];

        // Check if we found a word
        if (node.word !== null) {
            result.push(node.word);
            node.word = null; // Prevent duplicate entries
        }

        // Mark the current cell as visited
        board[i][j] = '#';

        // Explore neighbors in four possible directions
        const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
        for (let [dx, dy] of directions) {
            dfs(board, node, i + dx, j + dy);
        }

        // Unmark the current cell
        board[i][j] = char;
    };

    // Start DFS from each cell
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            dfs(board, trie.root, i, j);
        }
    }

    return result;
};