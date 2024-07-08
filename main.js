// Minimum Absolute Difference in BST
// Easy
// Topics
// Companies
// Given the root of a Binary Search Tree(BST), return the minimum absolute difference between the values of any two different nodes in the tree.



//     Example 1:


// Input: root = [4, 2, 6, 1, 3]
// Output: 1
// Example 2:


// Input: root = [1, 0, 48, null, null, 12, 49]
// Output: 1
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function getMinimumDifference(root) {
    let prev = null;
    let minDiff = Infinity;

    function inorder(node) {
        if (!node) return;

        // Traverse the left subtree
        inorder(node.left);

        // Process the current node
        if (prev !== null) {
            minDiff = Math.min(minDiff, Math.abs(node.val - prev));
        }
        prev = node.val;

        // Traverse the right subtree
        inorder(node.right);
    }

    inorder(root);
    return minDiff;
}