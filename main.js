// Longest Consecutive Sequence
// Medium
// Topics
// Companies
// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.



//     Example 1:

// Input: nums = [100, 4, 200, 1, 3, 2]
// Output: 4
// Explanation: The longest consecutive elements sequence is[1, 2, 3, 4].Therefore its length is 4.
// Example 2:

// Input: nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]
// Output: 9
function longestConsecutive(nums) {
    if (nums.length === 0) return 0;

    const numSet = new Set(nums);
    let maxLength = 0;

    for (let num of numSet) {
        // Check if it's the start of a sequence
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;

            // Check the length of the sequence
            while (numSet.has(currentNum + 1)) {
                currentNum += 1;
                currentStreak += 1;
            }

            maxLength = Math.max(maxLength, currentStreak);
        }
    }

    return maxLength;
}