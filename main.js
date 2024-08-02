// Merge k Sorted Lists
// Hard
// Topics
// Companies
// You are given an array of k linked - lists lists, each linked - list is sorted in ascending order.

// Merge all the linked - lists into one sorted linked - list and return it.



//     Example 1:

// Input: lists = [[1, 4, 5], [1, 3, 4], [2, 6]]
// Output: [1, 1, 2, 3, 4, 4, 5, 6]
// Explanation: The linked - lists are:
// [
//     1 -> 4 -> 5,
//     1 -> 3 -> 4,
//     2 -> 6
// ]
// merging them into one sorted list:
// 1 -> 1 -> 2 -> 3 -> 4 -> 4 -> 5 -> 6
// Example 2:

// Input: lists = []
// Output: []
// Example 3:

// Input: lists = [[]]
// Output: []
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeTwoLists(l1, l2) {
    let dummy = new ListNode();
    let current = dummy;

    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }

    if (l1 !== null) {
        current.next = l1;
    }

    if (l2 !== null) {
        current.next = l2;
    }

    return dummy.next;
}

function mergeKLists(lists) {
    if (lists.length === 0) return null;
    return mergeKListsHelper(lists, 0, lists.length - 1);
}

function mergeKListsHelper(lists, left, right) {
    if (left === right) {
        return lists[left];
    }

    const mid = Math.floor((left + right) / 2);
    const l1 = mergeKListsHelper(lists, left, mid);
    const l2 = mergeKListsHelper(lists, mid + 1, right);
    return mergeTwoLists(l1, l2);
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

// Helper function to print linked list
function printLinkedList(list) {
    let result = [];
    while (list !== null) {
        result.push(list.val);
        list = list.next;
    }
    console.log(result.join('->'));
}