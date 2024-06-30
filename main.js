// Binary Tree Maximum Path Sum
// Hard
// Topics
// Companies
// A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them.A node can only appear in the sequence at most once.Note that the path does not need to pass through the root.

// The path sum of a path is the sum of the node's values in the path.

// Given the root of a binary tree, return the maximum path sum of any non - empty path.



//     Example 1:


// Input: root = [1, 2, 3]
// Output: 6
// Explanation: The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.
// Example 2:


// Input: root = [-10, 9, 20, null, null, 15, 7]
// Output: 42
// Explanation: The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42.
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const maxPathSum = (root) => {
    let maxSum = -Infinity;

    const dfs = (node) => {
        if (!node) return 0;

        // Recursively get the maximum path sum of the left and right subtrees
        const leftMax = Math.max(dfs(node.left), 0);
        const rightMax = Math.max(dfs(node.right), 0);

        // Calculate the maximum path sum passing through the current node
        const currentMax = node.val + leftMax + rightMax;

        // Update the global maximum path sum
        maxSum = Math.max(maxSum, currentMax);

        // Return the maximum sum of the path that can be extended to the parent node
        return node.val + Math.max(leftMax, rightMax);
    };

    dfs(root);
    return maxSum;
};