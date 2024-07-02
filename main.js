// Count Complete Tree Nodes
// Easy
// Topics
// Companies
// Given the root of a complete binary tree, return the number of the nodes in the tree.

// According to Wikipedia, every level, except possibly the last, is completely filled in a complete binary tree, and all nodes in the last level are as far left as possible.It can have between 1 and 2h nodes inclusive at the last level h.

// Design an algorithm that runs in less than O(n) time complexity.



//     Example 1:


// Input: root = [1, 2, 3, 4, 5, 6]
// Output: 6
// Example 2:

// Input: root = []
// Output: 0
// Example 3:

// Input: root = [1]
// Output: 1
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function countNodes(root) {
    if (!root) return 0;

    // Function to compute the height of the tree
    const computeHeight = (node) => {
        let height = 0;
        while (node) {
            height++;
            node = node.left;
        }
        return height;
    };

    // Compute the height of the leftmost path (the height of the tree)
    let height = computeHeight(root);

    // If the tree has only one level
    if (height === 1) return 1;

    // Function to check if a node exists at the given index in the last level
    const nodeExists = (index, height, node) => {
        let left = 0, right = Math.pow(2, height - 1) - 1;
        for (let i = 0; i < height - 1; i++) {
            let mid = Math.floor((left + right) / 2);
            if (index <= mid) {
                node = node.left;
                right = mid;
            } else {
                node = node.right;
                left = mid + 1;
            }
        }
        return node !== null;
    };

    // Perform binary search to count the nodes in the last level
    let left = 0, right = Math.pow(2, height - 1) - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nodeExists(mid, height, root)) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    // The total number of nodes is the sum of all nodes in the full levels plus the nodes in the last level
    return Math.pow(2, height - 1) - 1 + left;
}