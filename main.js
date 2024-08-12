// Kth Largest Element in an Array
// Solved
// Medium
// Topics
// Companies
// Given an integer array nums and an integer k, return the kth largest element in the array.

// Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Can you solve it without sorting ?



//     Example 1:

// Input: nums = [3, 2, 1, 5, 6, 4], k = 2
// Output: 5
// Example 2:

// Input: nums = [3, 2, 3, 1, 2, 4, 5, 5, 6], k = 4
// Output: 4
class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    extractMin() {
        if (this.isEmpty()) {
            return null;
        }
        if (this.heap.length === 1) {
            return this.heap.pop();
        }
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return min;
    }

    heapifyUp() {
        let currentIndex = this.heap.length - 1;
        let parentIndex = Math.floor((currentIndex - 1) / 2);
        while (parentIndex >= 0 && this.heap[currentIndex] < this.heap[parentIndex]) {
            this.swap(currentIndex, parentIndex);
            currentIndex = parentIndex;
            parentIndex = Math.floor((currentIndex - 1) / 2);
        }
    }

    heapifyDown() {
        let currentIndex = 0;
        let leftChildIndex = 2 * currentIndex + 1;
        let rightChildIndex = 2 * currentIndex + 2;
        let nextIndex = null;
        while (
            (leftChildIndex < this.heap.length && this.heap[currentIndex] > this.heap[leftChildIndex]) ||
            (rightChildIndex < this.heap.length && this.heap[currentIndex] > this.heap[rightChildIndex])
        ) {
            if (
                rightChildIndex < this.heap.length &&
                this.heap[rightChildIndex] < this.heap[leftChildIndex]
            ) {
                nextIndex = rightChildIndex;
            } else {
                nextIndex = leftChildIndex;
            }
            this.swap(currentIndex, nextIndex);
            currentIndex = nextIndex;
            leftChildIndex = 2 * currentIndex + 1;
            rightChildIndex = 2 * currentIndex + 2;
        }
    }

    swap(i, j) {
        const temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    peek() {
        return this.heap[0];
    }
}

function findKthLargest(nums, k) {
    const minHeap = new MinHeap();
    for (let num of nums) {
        minHeap.insert(num);
        if (minHeap.heap.length > k) {
            minHeap.extractMin();
        }
    }
    return minHeap.peek();
}