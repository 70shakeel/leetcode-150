// Flatten Binary Tree to Linked List
// Medium
// Topics
// Companies
// Hint
// Given the root of a binary tree, flatten the tree into a "linked list":

// The "linked list" should use the same TreeNode class where the right child pointer points to the next node in the list and the left child pointer is always null.
//     The "linked list" should be in the same order as a pre - order traversal of the binary tree.


//         Example 1:


// Input: root = [1, 2, 5, 3, 4, null, 6]
// Output: [1, null, 2, null, 3, null, 4, null, 5, null, 6]
// Example 2:

// Input: root = []
// Output: []
// Example 3:

// Input: root = [0]
// Output: [0]
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

function flatten(root) {
    if (!root) return null;

    // Helper function to perform the flattening
    function flattenTree(node) {
        if (!node) return null;

        // Flatten left and right subtrees
        const leftTail = flattenTree(node.left);
        const rightTail = flattenTree(node.right);

        // If there is a left subtree, we need to insert it between the node and the right subtree
        if (leftTail) {
            leftTail.right = node.right;
            node.right = node.left;
            node.left = null;
        }

        // We need to return the tail of the flattened tree rooted at 'node'
        return rightTail || leftTail || node;
    }

    flattenTree(root);
}

// Helper function to create a tree from an array
function buildTreeFromArray(arr) {
    if (!arr.length) return null;
    let root = new TreeNode(arr[0]);
    let queue = [root];
    for (let i = 1; i < arr.length; i++) {
        let node = queue.shift();
        if (arr[i] !== null) {
            node.left = new TreeNode(arr[i]);
            queue.push(node.left);
        }
        if (++i < arr.length && arr[i] !== null) {
            node.right = new TreeNode(arr[i]);
            queue.push(node.right);
        }
    }
    return root;
}