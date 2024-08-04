// Maximum Sum Circular Subarray
// Medium
// Topics
// Companies
// Hint
// Given a circular integer array nums of length n, return the maximum possible sum of a non - empty subarray of nums.

// A circular array means the end of the array connects to the beginning of the array.Formally, the next element of nums[i] is nums[(i + 1) % n] and the previous element of nums[i] is nums[(i - 1 + n) % n].

// A subarray may only include each element of the fixed buffer nums at most once.Formally, for a subarray nums[i], nums[i + 1], ..., nums[j], there does not exist i <= k1, k2 <= j with k1 % n == k2 % n.



//     Example 1:

// Input: nums = [1, -2, 3, -2]
// Output: 3
// Explanation: Subarray[3] has maximum sum 3.
// Example 2:

// Input: nums = [5, -3, 5]
// Output: 10
// Explanation: Subarray[5, 5] has maximum sum 5 + 5 = 10.
// Example 3:

// Input: nums = [-3, -2, -3]
// Output: -2
// Explanation: Subarray[-2] has maximum sum - 2.
function maxSubarraySumCircular(nums) {
    const n = nums.length;

    // Helper function for Kadane's Algorithm to find the maximum subarray sum
    function kadane(arr) {
        let maxEndingHere = arr[0], maxSoFar = arr[0];
        for (let i = 1; i < arr.length; i++) {
            maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
            maxSoFar = Math.max(maxSoFar, maxEndingHere);
        }
        return maxSoFar;
    }

    // Step 1: Find the max subarray sum using standard Kadane's algorithm
    const maxKadane = kadane(nums);

    // Step 2: Find the max circular subarray sum
    // Calculate the total sum of the array
    let totalSum = 0;
    for (let i = 0; i < n; i++) {
        totalSum += nums[i];
    }

    // Invert the elements of the array
    for (let i = 0; i < n; i++) {
        nums[i] = -nums[i];
    }

    // Find the minimum subarray sum using Kadane's algorithm on the inverted array
    const minKadane = kadane(nums);

    // The max circular subarray sum is the total sum minus the min subarray sum
    const maxCircular = totalSum + minKadane; // Add because we inverted the array

    // Step 3: Handle the case where all elements are negative
    // If maxCircular is 0, it means all numbers are negative and we shouldn't consider the circular sum
    if (maxCircular === 0) {
        return maxKadane;
    } else {
        return Math.max(maxKadane, maxCircular);
    }
}