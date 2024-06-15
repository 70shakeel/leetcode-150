// Reverse Nodes in k - Group
// Hard
// Topics
// Companies
// Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

// k is a positive integer and is less than or equal to the length of the linked list.If the number of nodes is not a multiple of k then left - out nodes, in the end, should remain as it is.

// You may not alter the values in the list's nodes, only nodes themselves may be changed.



// Example 1:


// Input: head = [1, 2, 3, 4, 5], k = 2
// Output: [2, 1, 4, 3, 5]
// Example 2:


// Input: head = [1, 2, 3, 4, 5], k = 3
// Output: [3, 2, 1, 4, 5]
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

const reverseKGroup = (head, k) => {
    if (head === null || k === 1) return head;

    // Dummy node initialization
    let dummy = new ListNode(0);
    dummy.next = head;

    let prevGroupEnd = dummy;

    while (true) {
        let kthNode = getKthNode(prevGroupEnd, k);
        if (!kthNode) break;
        let groupStart = prevGroupEnd.next;
        let nextGroupStart = kthNode.next;

        // Reverse the k nodes
        reverse(groupStart, kthNode);

        // Connect the reversed group to the previous part
        prevGroupEnd.next = kthNode;
        groupStart.next = nextGroupStart;

        // Move prevGroupEnd to the end of the reversed group
        prevGroupEnd = groupStart;
    }

    return dummy.next;
};

// Function to reverse a portion of the list from start to end
const reverse = (start, end) => {
    let prev = null;
    let current = start;
    let next = null;
    let stop = end.next;

    while (current !== stop) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
};

// Function to get the k-th node from the start node
const getKthNode = (start, k) => {
    let current = start;
    while (k > 0 && current !== null) {
        current = current.next;
        k--;
    }
    return current;
};

// Helper function to print the linked list
const printList = (head) => {
    let current = head;
    while (current) {
        process.stdout.write(current.val + " -> ");
        current = current.next;
    }
    console.log("null");
};