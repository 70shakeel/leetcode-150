// IPO
// Hard
// Topics
// Companies
// Suppose LeetCode will start its IPO soon.In order to sell a good price of its shares to Venture Capital, LeetCode would like to work on some projects to increase its capital before the IPO.Since it has limited resources, it can only finish at most k distinct projects before the IPO.Help LeetCode design the best way to maximize its total capital after finishing at most k distinct projects.

// You are given n projects where the ith project has a pure profit profits[i] and a minimum capital of capital[i] is needed to start it.

//     Initially, you have w capital.When you finish a project, you will obtain its pure profit and the profit will be added to your total capital.

// Pick a list of at most k distinct projects from given projects to maximize your final capital, and return the final maximized capital.

// The answer is guaranteed to fit in a 32 - bit signed integer.



//     Example 1:

// Input: k = 2, w = 0, profits = [1, 2, 3], capital = [0, 1, 1]
// Output: 4
// Explanation: Since your initial capital is 0, you can only start the project indexed 0.
// After finishing it you will obtain profit 1 and your capital becomes 1.
// With capital 1, you can either start the project indexed 1 or the project indexed 2.
// Since you can choose at most 2 projects, you need to finish the project indexed 2 to get the maximum capital.
//     Therefore, output the final maximized capital, which is 0 + 1 + 3 = 4.
// Example 2:

// Input: k = 3, w = 0, profits = [1, 2, 3], capital = [0, 1, 2]
// Output: 6
class MaxHeap {
    constructor() {
        this.heap = [];
    }

    insert(val) {
        this.heap.push(val);
        this._heapifyUp();
    }

    extractMax() {
        if (this.heap.length === 1) return this.heap.pop();
        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._heapifyDown();
        return max;
    }

    _heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] >= this.heap[index]) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    _heapifyDown() {
        let index = 0;
        const length = this.heap.length;
        while (true) {
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            let largest = index;

            if (leftChildIndex < length && this.heap[leftChildIndex] > this.heap[largest]) {
                largest = leftChildIndex;
            }

            if (rightChildIndex < length && this.heap[rightChildIndex] > this.heap[largest]) {
                largest = rightChildIndex;
            }

            if (largest === index) break;

            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
            index = largest;
        }
    }

    size() {
        return this.heap.length;
    }
}

function findMaximizedCapital(k, w, profits, capital) {
    const n = profits.length;
    const projects = [];

    for (let i = 0; i < n; i++) {
        projects.push([capital[i], profits[i]]);
    }

    // Sort projects by the capital required
    projects.sort((a, b) => a[0] - b[0]);

    const maxHeap = new MaxHeap();
    let i = 0;

    while (k > 0) {
        // Add all projects that can be started with current capital to the max heap
        while (i < n && projects[i][0] <= w) {
            maxHeap.insert(projects[i][1]);
            i++;
        }

        // If we cannot start any project, break
        if (maxHeap.size() === 0) break;

        // Start the project with the max profit
        w += maxHeap.extractMax();
        k--;
    }

    return w;
}