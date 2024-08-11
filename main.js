// Median of Two Sorted Arrays
// Hard
// Topics
// Companies
// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log(m + n)).



//     Example 1:

// Input: nums1 = [1, 3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1, 2, 3] and median is 2.
// Example 2:

// Input: nums1 = [1, 2], nums2 = [3, 4]
// Output: 2.50000
// Explanation: merged array = [1, 2, 3, 4] and median is(2 + 3) / 2 = 2.5.
function findMedianSortedArrays(nums1, nums2) {
    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }

    let x = nums1.length;
    let y = nums2.length;

    let low = 0, high = x;
    while (low <= high) {
        let partitionX = Math.floor((low + high) / 2);
        let partitionY = Math.floor((x + y + 1) / 2) - partitionX;

        let maxX = (partitionX === 0) ? -Infinity : nums1[partitionX - 1];
        let minX = (partitionX === x) ? Infinity : nums1[partitionX];

        let maxY = (partitionY === 0) ? -Infinity : nums2[partitionY - 1];
        let minY = (partitionY === y) ? Infinity : nums2[partitionY];

        if (maxX <= minY && maxY <= minX) {
            if ((x + y) % 2 === 0) {
                return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
            } else {
                return Math.max(maxX, maxY);
            }
        } else if (maxX > minY) {
            high = partitionX - 1;
        } else {
            low = partitionX + 1;
        }
    }

    throw new Error("Input arrays are not sorted");
}