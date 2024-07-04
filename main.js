// Binary Tree Right Side View
// Solved
// Medium
// Topics
// Companies
// Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.



//     Example 1:


// Input: root = [1, 2, 3, null, 5, null, 4]
// Output: [1, 3, 4]
// Example 2:

// Input: root = [1, null, 3]
// Output: [1, 3]
// Example 3:

// Input: root = []
// Output: []
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

var rightSideView = function (root) {
    if (!root) return [];

    const result = [];
    const queue = [root];

    while (queue.length > 0) {
        const levelSize = queue.length;
        let lastNodeValue = null;

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            lastNodeValue = node.val;

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        result.push(lastNodeValue);
    }

    return result;
};