// Find K Pairs with Smallest Sums
// Medium
// Topics
// Companies
// You are given two integer arrays nums1 and nums2 sorted in non - decreasing order and an integer k.

// Define a pair(u, v) which consists of one element from the first array and one element from the second array.

// Return the k pairs(u1, v1), (u2, v2), ..., (uk, vk) with the smallest sums.



//     Example 1:

// Input: nums1 = [1, 7, 11], nums2 = [2, 4, 6], k = 3
// Output: [[1, 2], [1, 4], [1, 6]]
// Explanation: The first 3 pairs are returned from the sequence: [1, 2], [1, 4], [1, 6], [7, 2], [7, 4], [11, 2], [7, 6], [11, 4], [11, 6]
// Example 2:

// Input: nums1 = [1, 1, 2], nums2 = [1, 2, 3], k = 2
// Output: [[1, 1], [1, 1]]
// Explanation: The first 2 pairs are returned from the sequence: [1, 1], [1, 1], [1, 2], [2, 1], [1, 2], [2, 2], [1, 3], [1, 3], [2, 3]
class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(val) {
        this.heap.push(val);
        this._heapifyUp();
    }

    pop() {
        if (this.heap.length === 1) return this.heap.pop();
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._heapifyDown();
        return min;
    }

    _heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex][0] <= this.heap[index][0]) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    _heapifyDown() {
        let index = 0;
        const length = this.heap.length;
        const element = this.heap[0];

        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIndex < length) {
                leftChild = this.heap[leftChildIndex];
                if (leftChild[0] < element[0]) swap = leftChildIndex;
            }

            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex];
                if ((swap === null && rightChild[0] < element[0]) ||
                    (swap !== null && rightChild[0] < leftChild[0])) {
                    swap = rightChildIndex;
                }
            }

            if (swap === null) break;

            this.heap[index] = this.heap[swap];
            this.heap[swap] = element;
            index = swap;
        }
    }

    size() {
        return this.heap.length;
    }
}

function kSmallestPairs(nums1, nums2, k) {
    const result = [];
    const heap = new MinHeap();

    for (let i = 0; i < Math.min(nums1.length, k); i++) {
        heap.push([nums1[i] + nums2[0], i, 0]);
    }

    while (heap.size() > 0 && result.length < k) {
        const [sum, i, j] = heap.pop();
        result.push([nums1[i], nums2[j]]);
        if (j + 1 < nums2.length) {
            heap.push([nums1[i] + nums2[j + 1], i, j + 1]);
        }
    }

    return result;
}