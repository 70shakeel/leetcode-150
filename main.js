// Coin Change
// Medium
// Topics
// Companies
// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

// Return the fewest number of coins that you need to make up that amount.If that amount of money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.



//     Example 1:

// Input: coins = [1, 2, 5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1
// Example 2:

// Input: coins = [2], amount = 3
// Output: -1
// Example 3:

// Input: coins = [1], amount = 0
// Output: 0
function coinChange(coins, amount) {
    // Initialize dp array with Infinity, except dp[0] set to 0
    const dp = Array(amount + 1).fill(Infinity);
    dp[0] = 0;

    // Loop through each amount from 1 to the target amount
    for (let i = 1; i <= amount; i++) {
        // Check each coin to see if it can be used to make up the amount i
        for (const coin of coins) {
            if (coin <= i) {
                // Update the dp array for the minimum number of coins needed
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }

    // If dp[amount] is still Infinity, return -1, otherwise return dp[amount]
    return dp[amount] === Infinity ? -1 : dp[amount];
}