// // Maximum Subarray
// Medium
// Topics
// Companies
// Given an integer array nums, find the
// subarray
// with the largest sum, and return its sum.



//     Example 1:

// Input: nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// Output: 6
// Explanation: The subarray[4, -1, 2, 1] has the largest sum 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Explanation: The subarray[1] has the largest sum 1.
// Example 3:

// Input: nums = [5, 4, -1, 7, 8]
// Output: 23
// Explanation: The subarray[5, 4, -1, 7, 8] has the largest sum 23.function maxSubArray(nums) {
// Initialize the maxSum and currentSum to the first element of the array
let maxSum = nums[0];
let currentSum = nums[0];

// Iterate through the array starting from the second element
for (let i = 1; i < nums.length; i++) {
    // Update currentSum to be the maximum of the current element or
    // the current element plus the currentSum
    currentSum = Math.max(nums[i], currentSum + nums[i]);

    // Update maxSum if currentSum is greater than maxSum
    if (currentSum > maxSum) {
        maxSum = currentSum;
    }
}

return maxSum;
}