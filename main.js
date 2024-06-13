// Copy List with Random Pointer
// Medium
// Topics
// Companies
// Hint
// A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or null.

// Construct a deep copy of the list.The deep copy should consist of exactly n brand new nodes, where each new node has its value set to the value of its corresponding original node.Both the next and random pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state.None of the pointers in the new list should point to nodes in the original list.

// For example, if there are two nodes X and Y in the original list, where X.random-- > Y, then for the corresponding two nodes x and y in the copied list, x.random-- > y.

// Return the head of the copied linked list.

// The linked list is represented in the input / output as a list of n nodes.Each node is represented as a pair of[val, random_index] where:

// val: an integer representing Node.val
// random_index: the index of the node(range from 0 to n - 1) that the random pointer points to, or null if it does not point to any node.
// Your code will only be given the head of the original linked list.



//     Example 1:


// Input: head = [[7, null], [13, 0], [11, 4], [10, 2], [1, 0]]
// Output: [[7, null], [13, 0], [11, 4], [10, 2], [1, 0]]
// Example 2:


// Input: head = [[1, 1], [2, 1]]
// Output: [[1, 1], [2, 1]]
// Example 3:



// Input: head = [[3, null], [3, 0], [3, null]]
// Output: [[3, null], [3, 0], [3, null]]
// Definition for a Node.
function Node(val, next = null, random = null) {
    this.val = val;
    this.next = next;
    this.random = random;
}

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
    if (!head) return null;

    // Step 1: Create a new copy of each node and insert it right next to the original node
    let current = head;
    while (current) {
        const newNode = new Node(current.val);
        newNode.next = current.next;
        current.next = newNode;
        current = newNode.next;
    }

    // Step 2: Assign random pointers for the copied nodes
    current = head;
    while (current) {
        if (current.random) {
            current.next.random = current.random.next;
        }
        current = current.next.next;
    }

    // Step 3: Separate the copied list from the original list
    current = head;
    const newHead = head.next;
    while (current) {
        const copy = current.next;
        current.next = copy.next;
        if (copy.next) {
            copy.next = copy.next.next;
        }
        current = current.next;
    }

    return newHead;
};
