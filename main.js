// Symmetric Tree
// Easy
// Topics
// Companies
// Given the root of a binary tree, check whether it is a mirror of itself(i.e., symmetric around its center).



//     Example 1:


// Input: root = [1, 2, 2, 3, 4, 4, 3]
// Output: true
// Example 2:


// Input: root = [1, 2, 2, null, 3, null, 3]
// Output: false
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function isSymmetric(root) {
    if (!root) return true;

    let queue = [];
    queue.push(root.left, root.right);

    while (queue.length) {
        let left = queue.shift();
        let right = queue.shift();

        if (!left && !right) continue;
        if (!left || !right || left.val !== right.val) return false;

        queue.push(left.left, right.right);
        queue.push(left.right, right.left);
    }

    return true;
}