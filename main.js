// Add Binary
// Easy
// Topics
// Companies
// Given two binary strings a and b, return their sum as a binary string.



//     Example 1:

// Input: a = "11", b = "1"
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"
function addBinary(a, b) {
    let result = "";
    let carry = 0;
    let i = a.length - 1;
    let j = b.length - 1;

    while (i >= 0 || j >= 0) {
        let sum = carry;

        if (i >= 0) {
            sum += parseInt(a[i]);
            i--;
        }

        if (j >= 0) {
            sum += parseInt(b[j]);
            j--;
        }

        // sum can be 0, 1, 2, or 3.
        result = (sum % 2) + result;  // append the remainder to result
        carry = Math.floor(sum / 2);  // carry will be 1 if sum is 2 or 3, otherwise 0
    }

    // If there's any carry left, append it to the result.
    if (carry > 0) {
        result = carry + result;
    }

    return result;
}