// Sqrt(x)
// Easy
// Topics
// Companies
// Hint
// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

// You must not use any built-in exponent function or operator.

// For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.


// Example 1:

// Input: x = 4
// Output: 2
// Explanation: The square root of 4 is 2, so we return 2.
// Example 2:

// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
function mySqrt(x) {
    if (x < 2) return x; // If x is 0 or 1, the square root is x itself.

    let left = 1;
    let right = x;
    let result = 0;

    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);

        if (mid * mid <= x) {
            result = mid; // `mid` is a potential answer, store it.
            left = mid + 1; // Try to find a larger answer.
        } else {
            right = mid - 1; // Reduce the search range.
        }
    }

    return result;
}