// Linked List Cycle
// Easy
// Topics
// Companies
// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer.Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list.Otherwise, return false.



//     Example 1:


// Input: head = [3, 2, 0, -4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 1st node(0 - indexed).
//     Example 2:


// Input: head = [1, 2], pos = 0
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
//     Example 3:


// Input: head = [1], pos = -1
// Output: false
// Explanation: There is no cycle in the linked list.
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function hasCycle(head) {
    if (head === null || head.next === null) {
        return false;
    }

    let slow = head;
    let fast = head.next;

    while (slow !== fast) {
        if (fast === null || fast.next === null) {
            return false;
        }
        slow = slow.next;
        fast = fast.next.next;
    }

    return true;
}

// Helper function to create a linked list from an array and create a cycle
function createLinkedList(arr, pos) {
    if (arr.length === 0) return null;

    let head = new ListNode(arr[0]);
    let current = head;
    let cycleNode = null;

    if (pos === 0) cycleNode = head;

    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
        if (i === pos) cycleNode = current;
    }

    if (cycleNode !== null) {
        current.next = cycleNode;
    }

    return head;
}