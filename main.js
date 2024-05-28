// Group Anagrams
// Medium
// Topics
// Companies
// Given an array of strings strs, group the anagrams together.You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.



//     Example 1:

// Input: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
// Output: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]
function groupAnagrams(strs) {
    // Initialize the hashmap
    const map = {};

    // Iterate through each string in the input array
    for (let str of strs) {
        // Sort the characters in the string
        const sortedStr = str.split('').sort().join('');

        // If the sorted string is already a key in the map, append the original string
        if (map[sortedStr]) {
            map[sortedStr].push(str);
        } else {
            // Otherwise, create a new array with the original string
            map[sortedStr] = [str];
        }
    }

    // Return the values of the hashmap
    return Object.values(map);
}