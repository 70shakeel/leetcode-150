// Rotate List
// Medium
// Topics
// Companies
// Given the head of a linked list, rotate the list to the right by k places.



//     Example 1:


// Input: head = [1, 2, 3, 4, 5], k = 2
// Output: [4, 5, 1, 2, 3]
// Example 2:


// Input: head = [0, 1, 2], k = 4
// Output: [2, 0, 1]
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function rotateRight(head, k) {
    if (!head || !head.next || k === 0) return head;

    // Find the length of the linked list
    let length = 1;
    let tail = head;
    while (tail.next) {
        tail = tail.next;
        length++;
    }

    // Calculate the effective number of rotations
    k = k % length;
    if (k === 0) return head;

    // Find the new tail (length - k - 1) and new head (length - k)
    let newTail = head;
    for (let i = 0; i < length - k - 1; i++) {
        newTail = newTail.next;
    }
    let newHead = newTail.next;

    // Rotate the list
    newTail.next = null;
    tail.next = head;

    return newHead;
}

// Helper function to convert array to linked list
function arrayToList(arr) {
    let dummy = new ListNode();
    let current = dummy;
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

// Helper function to convert linked list to array
function listToArray(head) {
    let arr = [];
    while (head) {
        arr.push(head.val);
        head = head.next;
    }
    return arr;
}