// Design Add and Search Words Data Structure
// Medium
// Topics
// Companies
// Hint
// Design a data structure that supports adding new words and finding if a string matches any previously added string.

// Implement the WordDictionary class:

// WordDictionary() Initializes the object.
// void addWord(word) Adds word to the data structure, it can be matched later.
// bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise.word may contain dots '.' where dots can be matched with any letter.


//     Example:

// Input
// ["WordDictionary", "addWord", "addWord", "addWord", "search", "search", "search", "search"]
// [[], ["bad"], ["dad"], ["mad"], ["pad"], ["bad"], [".ad"], ["b.."]]
// Output
// [null, null, null, null, false, true, true, true]

// Explanation
// WordDictionary wordDictionary = new WordDictionary();
// wordDictionary.addWord("bad");
// wordDictionary.addWord("dad");
// wordDictionary.addWord("mad");
// wordDictionary.search("pad"); // return False
// wordDictionary.search("bad"); // return True
// wordDictionary.search(".ad"); // return True
// wordDictionary.search("b.."); // return True
class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }

    addWord(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    search(word) {
        const searchInNode = (word, node) => {
            for (let i = 0; i < word.length; i++) {
                const char = word[i];
                if (char === '.') {
                    for (const child in node.children) {
                        if (searchInNode(word.slice(i + 1), node.children[child])) {
                            return true;
                        }
                    }
                    return false;
                } else {
                    if (!node.children[char]) {
                        return false;
                    }
                    node = node.children[char];
                }
            }
            return node.isEndOfWord;
        };

        return searchInNode(word, this.root);
    }
}