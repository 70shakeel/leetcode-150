// Kth Smallest Element in a BST
// Medium
// Topics
// Companies
// Hint
// Given the root of a binary search tree, and an integer k, return the kth smallest value(1 - indexed) of all the values of the nodes in the tree.



//     Example 1:


// Input: root = [3, 1, 4, null, 2], k = 1
// Output: 1
// Example 2:


// Input: root = [5, 3, 6, 2, 4, null, null, 1], k = 3
// Output: 3
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function kthSmallest(root, k) {
    let count = 0;
    let result = null;

    function inOrderTraversal(node) {
        if (node === null || result !== null) {
            return;
        }

        // Traverse the left subtree
        inOrderTraversal(node.left);

        // Visit the node
        count++;
        if (count === k) {
            result = node.val;
            return;
        }

        // Traverse the right subtree
        inOrderTraversal(node.right);
    }

    inOrderTraversal(root);
    return result;
}