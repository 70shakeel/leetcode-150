// Populating Next Right Pointers in Each Node II
// Medium
// Topics
// Companies
// Given a binary tree

// struct Node {
//   int val;
//     Node * left;
//     Node * right;
//     Node * next;
// }
// Populate each next pointer to point to its next right node.If there is no next right node, the next pointer should be set to NULL.

//     Initially, all next pointers are set to NULL.



//         Example 1:


// Input: root = [1, 2, 3, 4, 5, null, 7]
// Output: [1,#, 2, 3,#, 4, 5, 7,#]
// Explanation: Given the above binary tree(Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B.The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.
//     Example 2:

// Input: root = []
// Output: []
// Define the Node structure
class Node {
    constructor(val, left = null, right = null, next = null) {
        this.val = val;
        this.left = left;
        this.right = right;
        this.next = next;
    }
}

// Function to populate each next pointer to point to its next right node
function connect(root) {
    if (!root) return null;

    let queue = [root];

    while (queue.length > 0) {
        let size = queue.length;
        let prev = null;

        for (let i = 0; i < size; i++) {
            let currentNode = queue.shift();

            if (prev) {
                prev.next = currentNode;
            }
            prev = currentNode;

            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);
        }
        // At the end of the level, make sure the last node's next is set to null
        if (prev) {
            prev.next = null;
        }
    }

    return root;
}

// Helper function to print the tree level by level using next pointers
function printTreeByNext(root) {
    if (!root) return;

    let start = root;

    while (start) {
        let current = start;
        let level = '';
        while (current) {
            level += current.val + ' -> ';
            current = current.next;
        }
        console.log(level + 'null');

        // Move to the next level
        if (start.left) {
            start = start.left;
        } else if (start.right) {
            start = start.right;
        } else {
            // Find the next starting node from the next pointers
            let nextStart = start.next;
            while (nextStart && !nextStart.left && !nextStart.right) {
                nextStart = nextStart.next;
            }
            if (nextStart) {
                start = nextStart.left ? nextStart.left : nextStart.right;
            } else {
                start = null;
            }
        }
    }
}