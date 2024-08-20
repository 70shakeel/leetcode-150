// Single Number II
// Medium
// Topics
// Companies
// Given an integer array nums where every element appears three times except for one, which appears exactly once.Find the single element and return it.

// You must implement a solution with a linear runtime complexity and use only constant extra space.



//     Example 1:

// Input: nums = [2, 2, 3, 2]
// Output: 3
// Example 2:

// Input: nums = [0, 1, 0, 1, 0, 1, 99]
// Output: 99
function singleNumber(nums) {
    let ones = 0, twos = 0;

    for (let num of nums) {
        // Update ones with the bits of the current number that appear only once
        ones = (ones ^ num) & ~twos;

        // Update twos with the bits of the current number that appear only twice
        twos = (twos ^ num) & ~ones;
    }

    // The result will be in ones, as it contains the bit pattern of the number
    // that appears only once.
    return ones;
}