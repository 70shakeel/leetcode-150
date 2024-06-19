// Partition List
// Medium
// Topics
// Companies
// Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

// You should preserve the original relative order of the nodes in each of the two partitions.



//     Example 1:


// Input: head = [1, 4, 3, 2, 5, 2], x = 3
// Output: [1, 2, 2, 4, 3, 5]
// Example 2:

// Input: head = [2, 1], x = 2
// Output: [1, 2]
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function partition(head, x) {
    // Create two dummy nodes
    let lessHead = new ListNode(0);
    let greaterHead = new ListNode(0);

    // Create two pointers to the current node in each partition
    let less = lessHead;
    let greater = greaterHead;

    // Traverse the original list
    while (head !== null) {
        if (head.val < x) {
            less.next = head;
            less = less.next;
        } else {
            greater.next = head;
            greater = greater.next;
        }
        head = head.next;
    }

    // End the greater list
    greater.next = null;

    // Attach the greater list to the end of the less list
    less.next = greaterHead.next;

    // Return the head of the new list, which is lessHead.next
    return lessHead.next;
}

// Helper function to create a linked list from an array
function createLinkedList(arr) {
    let dummy = new ListNode();
    let current = dummy;
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

// Helper function to convert a linked list to an array
function linkedListToArray(head) {
    let arr = [];
    while (head !== null) {
        arr.push(head.val);
        head = head.next;
    }
    return arr;
}