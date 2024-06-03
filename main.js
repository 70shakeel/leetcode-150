// Merge Intervals
// Medium
// Topics
// Companies
// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non - overlapping intervals that cover all the intervals in the input.



//     Example 1:

// Input: intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]
// Output: [[1, 6], [8, 10], [15, 18]]
// Explanation: Since intervals[1, 3] and[2, 6] overlap, merge them into[1, 6].
//     Example 2:

// Input: intervals = [[1, 4], [4, 5]]
// Output: [[1, 5]]
// Explanation: Intervals[1, 4] and[4, 5] are considered overlapping.
function mergeIntervals(intervals) {
    if (intervals.length === 0) return intervals;

    // Sort intervals by starting point
    intervals.sort((a, b) => a[0] - b[0]);

    const result = [];
    let currentInterval = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
        const [currentStart, currentEnd] = currentInterval;
        const [nextStart, nextEnd] = intervals[i];

        if (currentEnd >= nextStart) {
            // Merge the intervals
            currentInterval = [currentStart, Math.max(currentEnd, nextEnd)];
        } else {
            // No overlap, push the current interval to result and update current interval
            result.push(currentInterval);
            currentInterval = intervals[i];
        }
    }

    // Add the last interval
    result.push(currentInterval);

    return result;
}