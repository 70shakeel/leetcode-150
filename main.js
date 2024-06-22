// Invert Binary Tree
// Easy
// Topics
// Companies
// Given the root of a binary tree, invert the tree, and return its root.



//     Example 1:


// Input: root = [4, 2, 7, 1, 3, 6, 9]
// Output: [4, 7, 2, 9, 6, 3, 1]
// Example 2:


// Input: root = [2, 1, 3]
// Output: [2, 3, 1]
// Example 3:

// Input: root = []
// Output: []
// Define the TreeNode class
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Function to invert the binary tree
function invertTree(root) {
    if (root === null) {
        return null;
    }

    // Swap the left and right children
    let temp = root.left;
    root.left = root.right;
    root.right = temp;

    // Recursively invert the left and right subtrees
    invertTree(root.left);
    invertTree(root.right);

    return root;
}

// Helper function to create a binary tree from an array
function arrayToTree(arr, index = 0) {
    if (index >= arr.length || arr[index] === null) {
        return null;
    }
    let root = new TreeNode(arr[index]);
    root.left = arrayToTree(arr, 2 * index + 1);
    root.right = arrayToTree(arr, 2 * index + 2);
    return root;
}

// Helper function to convert a binary tree to an array
function treeToArray(root) {
    if (!root) return [];
    const result = [];
    const queue = [root];
    while (queue.length) {
        const node = queue.shift();
        if (node) {
            result.push(node.val);
            queue.push(node.left);
            queue.push(node.right);
        } else {
            result.push(null);
        }
    }
    // Remove trailing nulls
    while (result[result.length - 1] === null) {
        result.pop();
    }
    return result;
}