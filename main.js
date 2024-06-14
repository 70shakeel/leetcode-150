// Reverse Linked List II
// Medium
// Topics
// Companies
// Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.



//     Example 1:


// Input: head = [1, 2, 3, 4, 5], left = 2, right = 4
// Output: [1, 4, 3, 2, 5]
// Example 2:

// Input: head = [5], left = 1, right = 1
// Output: [5]
class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function reverseBetween(head, left, right) {
    if (!head || left === right) {
        return head;
    }

    let dummy = new ListNode(0);
    dummy.next = head;
    let pre = dummy;

    // Move `pre` to the node just before the `left` position
    for (let i = 0; i < left - 1; i++) {
        pre = pre.next;
    }

    // `start` will point to the first node of the sublist to be reversed
    let start = pre.next;
    // `then` will point to the node that will be reversed
    let then = start.next;

    // Perform the reversal of the sublist
    for (let i = 0; i < right - left; i++) {
        start.next = then.next;
        then.next = pre.next;
        pre.next = then;
        then = start.next;
    }

    return dummy.next;
}

// Helper function to convert array to linked list
function arrayToList(arr) {
    let dummy = new ListNode(0);
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
    let current = head;
    while (current) {
        arr.push(current.val);
        current = current.next;
    }
    return arr;
}