// Permutations
// Medium
// Topics
// Companies
// Given an array nums of distinct integers, return all the possible permutations.You can return the answer in any order.



//     Example 1:

// Input: nums = [1, 2, 3]
// Output: [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
// Example 2:

// Input: nums = [0, 1]
// Output: [[0, 1], [1, 0]]
// Example 3:

// Input: nums = [1]
// Output: [[1]]
function permute(nums) {
    const result = [];
    const temp = [];
    const used = new Array(nums.length).fill(false);

    function backtrack() {
        if (temp.length === nums.length) {
            result.push([...temp]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue;

            used[i] = true;
            temp.push(nums[i]);
            backtrack();
            temp.pop();
            used[i] = false;
        }
    }

    backtrack();
    return result;
}