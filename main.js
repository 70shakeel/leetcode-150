// Remove Duplicates from Sorted List II
// Medium
// Topics
// Companies
// Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.Return the linked list sorted as well.



//     Example 1:


// Input: head = [1, 2, 3, 3, 4, 4, 5]
// Output: [1, 2, 5]
// Example 2:


// Input: head = [1, 1, 1, 2, 3]
// Output: [2, 3]
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function deleteDuplicates(head) {
    // Create a dummy node
    let dummy = new ListNode(0);
    dummy.next = head;

    let prev = dummy;
    let current = head;

    while (current !== null) {
        // Move the current pointer if there are duplicates
        while (current.next !== null && current.val === current.next.val) {
            current = current.next;
        }

        // Check if prev's next is still the current node, meaning no duplicates were found
        if (prev.next === current) {
            prev = prev.next;
        } else {
            // If duplicates were found, skip all duplicates
            prev.next = current.next;
        }

        current = current.next;
    }

    return dummy.next;
}

// Helper function to create a linked list from an array
function createLinkedList(arr) {
    let dummy = new ListNode();
    let current = dummy;
    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummy.next;
}

// Helper function to print linked list as an array
function printLinkedList(head) {
    let result = [];
    while (head !== null) {
        result.push(head.val);
        head = head.next;
    }
    return result;
}