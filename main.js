// Sort List
// Medium
// Topics
// Companies
// Given the head of a linked list, return the list after sorting it in ascending order.



//     Example 1:


// Input: head = [4, 2, 1, 3]
// Output: [1, 2, 3, 4]
// Example 2:


// Input: head = [-1, 5, 3, 4, 0]
// Output: [-1, 0, 3, 4, 5]
// Example 3:

// Input: head = []
// Output: []
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function sortList(head) {
    if (!head || !head.next) {
        return head;
    }

    // Split the list into two halves
    let slow = head;
    let fast = head;
    let prev = null;

    while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    // Disconnect the two halves
    prev.next = null;

    // Sort each half
    const left = sortList(head);
    const right = sortList(slow);

    // Merge the sorted halves
    return merge(left, right);
}

function merge(left, right) {
    const dummy = new ListNode();
    let current = dummy;

    while (left && right) {
        if (left.val < right.val) {
            current.next = left;
            left = left.next;
        } else {
            current.next = right;
            right = right.next;
        }
        current = current.next;
    }

    if (left) {
        current.next = left;
    } else if (right) {
        current.next = right;
    }

    return dummy.next;
}

// Helper function to convert array to linked list
function arrayToList(arr) {
    if (arr.length === 0) {
        return null;
    }
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
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