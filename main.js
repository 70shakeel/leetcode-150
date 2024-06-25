// Construct Binary Tree from Inorder and Postorder Traversal
// Medium
// Topics
// Companies
// Given two integer arrays inorder and postorder where inorder is the inorder traversal of a binary tree and postorder is the postorder traversal of the same tree, construct and return the binary tree.



//     Example 1:


// Input: inorder = [9, 3, 15, 20, 7], postorder = [9, 15, 7, 20, 3]
// Output: [3, 9, 20, null, null, 15, 7]
// Example 2:

// Input: inorder = [-1], postorder = [-1]
// Output: [-1]


// Constraints:

// 1 <= inorder.length <= 3000
// postorder.length == inorder.length
//     - 3000 <= inorder[i], postorder[i] <= 3000
// inorder and postorder consist of unique values.
// Each value of postorder also appears in inorder.
// inorder is guaranteed to be the inorder traversal of the tree.
// postorder is guaranteed to be the postorder traversal of the tree.
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function buildTree(inorder, postorder) {
    // Map to store the index of each value in inorder traversal
    const inorderIndexMap = new Map();
    inorder.forEach((val, index) => inorderIndexMap.set(val, index));

    // Recursive helper function
    function helper(inLeft, inRight) {
        // If there are no elements to construct the tree
        if (inLeft > inRight) return null;

        // Pick up the last element as a root
        const rootVal = postorder.pop();
        const root = new TreeNode(rootVal);

        // Root splits inorder list into left and right subtrees
        const index = inorderIndexMap.get(rootVal);

        // Build right subtree
        root.right = helper(index + 1, inRight);
        // Build left subtree
        root.left = helper(inLeft, index - 1);

        return root;
    }

    // Start from the entire range of inorder array
    return helper(0, inorder.length - 1);
}