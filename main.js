// Merge Two Sorted Lists
// Easy
// Topics
// Companies
// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list.The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.



//     Example 1:


// Input: list1 = [1, 2, 4], list2 = [1, 3, 4]
// Output: [1, 1, 2, 3, 4, 4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeTwoLists(list1, list2) {
    // Create a dummy node to act as the head of the new linked list
    let dummy = new ListNode();
    let current = dummy;

    // Traverse both lists
    while (list1 !== null && list2 !== null) {
        // Compare the values of the current nodes in both lists
        if (list1.val <= list2.val) {
            // Attach the node from list1 to the new list
            current.next = list1;
            list1 = list1.next;
        } else {
            // Attach the node from list2 to the new list
            current.next = list2;
            list2 = list2.next;
        }
        // Move to the next node in the new list
        current = current.next;
    }

    // If one of the lists is not empty, attach the remaining nodes to the new list
    if (list1 !== null) {
        current.next = list1;
    } else {
        current.next = list2;
    }

    // Return the next node of the dummy node, which is the head of the merged list
    return dummy.next;
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

// Helper function to print the linked list
function printLinkedList(head) {
    let current = head;
    let result = [];
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    console.log(result.join(" -> "));
}