// Basic Calculator
// Hard
// Topics
// Companies
// Given a string s representing a valid expression, implement a basic calculator to evaluate it, and return the result of the evaluation.

//     Note: You are not allowed to use any built -in function which evaluates strings as mathematical expressions, such as eval().



//         Example 1:

// Input: s = "1 + 1"
// Output: 2
// Example 2:

// Input: s = " 2-1 + 2 "
// Output: 3
// Example 3:

// Input: s = "(1+(4+5+2)-3)+(6+8)"
// Output: 23
function calculate(s) {
    let stack = [];
    let currentNumber = 0;
    let result = 0;
    let sign = 1; // 1 for positive, -1 for negative

    for (let i = 0; i < s.length; i++) {
        let ch = s[i];

        if (ch >= '0' && ch <= '9') {
            currentNumber = currentNumber * 10 + (ch - '0');
        } else if (ch === '+') {
            result += sign * currentNumber;
            sign = 1;
            currentNumber = 0;
        } else if (ch === '-') {
            result += sign * currentNumber;
            sign = -1;
            currentNumber = 0;
        } else if (ch === '(') {
            stack.push(result);
            stack.push(sign);
            sign = 1;
            result = 0;
        } else if (ch === ')') {
            result += sign * currentNumber;
            result *= stack.pop(); // stack.pop() is the sign before the parenthesis
            result += stack.pop(); // stack.pop() now is the result calculated before the parenthesis
            currentNumber = 0;
        }
    }

    // Add the last number processed
    if (currentNumber !== 0) {
        result += sign * currentNumber;
    }

    return result;
}