// Valid Parentheses
// Easy
// Topics
// Companies
// Hint
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.


//     Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
function isValid(s) {
    const stack = [];
    const bracketMap = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (bracketMap[char]) {
            // If the character is an opening bracket, push it onto the stack
            stack.push(char);
        } else {
            // If the character is a closing bracket
            const topElement = stack.length === 0 ? '#' : stack.pop();
            if (bracketMap[topElement] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
}