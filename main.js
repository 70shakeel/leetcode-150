// Pow(x, n)
// Medium
// Topics
// Companies
// Implement pow(x, n), which calculates x raised to the power n(i.e., xn).



//     Example 1:

// Input: x = 2.00000, n = 10
// Output: 1024.00000
// Example 2:

// Input: x = 2.10000, n = 3
// Output: 9.26100
// Example 3:

// Input: x = 2.00000, n = -2
// Output: 0.25000
// Explanation: 2 - 2 = 1 / 22 = 1 / 4 = 0.25
function myPow(x, n) {
    if (n === 0) return 1; // Any number raised to the power of 0 is 1.

    // If n is negative, convert it to positive and invert x.
    if (n < 0) {
        x = 1 / x;
        n = -n;
    }

    // Recursive function to calculate power using Exponentiation by Squaring
    function power(x, n) {
        if (n === 0) return 1;
        const half = power(x, Math.floor(n / 2));
        if (n % 2 === 0) {
            return half * half;
        } else {
            return half * half * x;
        }
    }

    return power(x, n);
}