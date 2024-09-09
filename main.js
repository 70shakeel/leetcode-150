// Best Time to Buy and Sell Stock IV
// Hard
// Topics
// Companies
// You are given an integer array prices where prices[i] is the price of a given stock on the ith day, and an integer k.

// Find the maximum profit you can achieve.You may complete at most k transactions: i.e.you may buy at most k times and sell at most k times.

//     Note: You may not engage in multiple transactions simultaneously(i.e., you must sell the stock before you buy again).



//         Example 1:

// Input: k = 2, prices = [2, 4, 1]
// Output: 2
// Explanation: Buy on day 1(price = 2) and sell on day 2(price = 4), profit = 4 - 2 = 2.
// Example 2:

// Input: k = 2, prices = [3, 2, 6, 5, 0, 3]
// Output: 7
// Explanation: Buy on day 2(price = 2) and sell on day 3(price = 6), profit = 6 - 2 = 4. Then buy on day 5(price = 0) and sell on day 6(price = 3), profit = 3 - 0 = 3.
function maxProfit(k, prices) {
    const n = prices.length;
    if (n === 0) return 0;

    // If k is greater than half the number of days, we can treat it as unlimited transactions.
    if (k >= n / 2) {
        let maxProfit = 0;
        for (let i = 1; i < n; i++) {
            if (prices[i] > prices[i - 1]) {
                maxProfit += prices[i] - prices[i - 1];
            }
        }
        return maxProfit;
    }

    // Create dp arrays
    let dp = Array.from({ length: k + 1 }, () => Array(n).fill(0).map(() => [0, 0]));

    for (let i = 1; i <= k; i++) {
        dp[i][0][1] = -prices[0]; // Initial buy
    }

    for (let i = 1; i <= k; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j][0] = Math.max(dp[i][j - 1][0], dp[i][j - 1][1] + prices[j]);
            dp[i][j][1] = Math.max(dp[i][j - 1][1], dp[i - 1][j - 1][0] - prices[j]);
        }
    }

    // The maximum profit with at most k transactions and no stock in hand on the last day
    return dp[k][n - 1][0];
}