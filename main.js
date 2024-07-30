// Convert Sorted Array to Binary Search Tree
// Easy
// Topics
// Companies
// Given an integer array nums where the elements are sorted in ascending order, convert it to a
// height - balanced
//  binary search tree.



//     Example 1:


// Input: nums = [-10, -3, 0, 5, 9]
// Output: [0, -3, 9, -10, null, 5]
// Explanation: [0, -10, 5, null, -3, null, 9] is also accepted:

// Example 2:


// Input: nums = [1, 3]
// Output: [3, 1]
// Explanation: [1, null, 3] and[3, 1] are both height - balanced BSTs.
// Definition for a binary tree node.
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    if (!nums.length) return null;

    // Helper function to construct BST
    const convertToBST = (left, right) => {
        if (left > right) return null;

        // Middle element to maintain height-balance
        const mid = Math.floor((left + right) / 2);

        // Create a new node with the mid element
        const node = new TreeNode(nums[mid]);

        // Recursively construct the left and right subtrees
        node.left = convertToBST(left, mid - 1);
        node.right = convertToBST(mid + 1, right);

        return node;
    };

    // Initial call to the helper function
    return convertToBST(0, nums.length - 1);
};