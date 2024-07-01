// Binary Search Tree Iterator
// Medium
// Topics
// Companies
// Implement the BSTIterator class that represents an iterator over the in -order traversal of a binary search tree(BST):

// BSTIterator(TreeNode root) Initializes an object of the BSTIterator class. The root of the BST is given as part of the constructor.The pointer should be initialized to a non - existent number smaller than any element in the BST.
// boolean hasNext() Returns true if there exists a number in the traversal to the right of the pointer, otherwise returns false.
// int next() Moves the pointer to the right, then returns the number at the pointer.
// Notice that by initializing the pointer to a non - existent smallest number, the first call to next() will return the smallest element in the BST.

// You may assume that next() calls will always be valid.That is, there will be at least a next number in the in -order traversal when next() is called.



//     Example 1:


// Input
// ["BSTIterator", "next", "next", "hasNext", "next", "hasNext", "next", "hasNext", "next", "hasNext"]
// [[[7, 3, 15, null, null, 9, 20]], [], [], [], [], [], [], [], [], []]
// Output
// [null, 3, 7, true, 9, true, 15, true, 20, false]

// Explanation
// BSTIterator bSTIterator = new BSTIterator([7, 3, 15, null, null, 9, 20]);
// bSTIterator.next();    // return 3
// bSTIterator.next();    // return 7
// bSTIterator.hasNext(); // return True
// bSTIterator.next();    // return 9
// bSTIterator.hasNext(); // return True
// bSTIterator.next();    // return 15
// bSTIterator.hasNext(); // return True
// bSTIterator.next();    // return 20
// bSTIterator.hasNext(); // return False
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class ListNode {
    constructor(val = null, next = null) {
        this.val = val;
        this.next = next;
    }
}

class BSTIterator {
    constructor(root) {
        this.head = this.buildList(root);
        this.current = this.head;
    }

    buildList(root) {
        let dummy = new ListNode();
        let current = dummy;

        const inOrderTraversal = (node) => {
            if (!node) return;
            inOrderTraversal(node.left);
            current.next = new ListNode(node.val);
            current = current.next;
            inOrderTraversal(node.right);
        };

        inOrderTraversal(root);
        return dummy.next;
    }

    hasNext() {
        return this.current !== null;
    }

    next() {
        if (!this.hasNext()) {
            throw new Error("No more elements in BST iterator");
        }
        let val = this.current.val;
        this.current = this.current.next;
        return val;
    }
}