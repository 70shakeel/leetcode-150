// Evaluate Division
// Solved
// Medium
// Topics
// Companies
// Hint
// You are given an array of variable pairs equations and an array of real numbers values, where equations[i] = [Ai, Bi] and values[i] represent the equation Ai / Bi = values[i].Each Ai or Bi is a string that represents a single variable.

// You are also given some queries, where queries[j] = [Cj, Dj] represents the jth query where you must find the answer for Cj / Dj = ?.

// Return the answers to all queries.If a single answer cannot be determined, return -1.0.

//     Note: The input is always valid.You may assume that evaluating the queries will not result in division by zero and that there is no contradiction.

//         Note: The variables that do not occur in the list of equations are undefined, so the answer cannot be determined for them.



//             Example 1:

//     Input: equations = [["a", "b"], ["b", "c"]], values = [2.0, 3.0], queries = [["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"]]
// Output: [6.00000, 0.50000, -1.00000, 1.00000, -1.00000]
// Explanation:
// Given: a / b = 2.0, b / c = 3.0
// queries are: a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ?
// return: [6.0, 0.5, -1.0, 1.0, -1.0]
// note: x is undefined => -1.0
// Example 2:

// Input: equations = [["a", "b"], ["b", "c"], ["bc", "cd"]], values = [1.5, 2.5, 5.0], queries = [["a", "c"], ["c", "b"], ["bc", "cd"], ["cd", "bc"]]
// Output: [3.75000, 0.40000, 5.00000, 0.20000]
// Example 3:

// Input: equations = [["a", "b"]], values = [0.5], queries = [["a", "b"], ["b", "a"], ["a", "c"], ["x", "y"]]
// Output: [0.50000, 2.00000, -1.00000, -1.00000]
/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
    // Create the graph
    const graph = {};

    for (let i = 0; i < equations.length; i++) {
        const [a, b] = equations[i];
        const value = values[i];

        if (!graph[a]) graph[a] = {};
        if (!graph[b]) graph[b] = {};

        graph[a][b] = value;
        graph[b][a] = 1 / value;
    }

    const results = [];

    for (const [start, end] of queries) {
        if (!graph[start] || !graph[end]) {
            results.push(-1.0);
        } else if (start === end) {
            results.push(1.0);
        } else {
            const visited = new Set();
            const result = dfs(graph, start, end, 1, visited);
            results.push(result !== undefined ? result : -1.0);
        }
    }

    return results;
};

const dfs = (graph, current, target, product, visited) => {
    visited.add(current);

    const neighbors = graph[current];
    if (neighbors[target] !== undefined) {
        return product * neighbors[target];
    }

    for (const neighbor in neighbors) {
        if (!visited.has(neighbor)) {
            const result = dfs(graph, neighbor, target, product * neighbors[neighbor], visited);
            if (result !== undefined) {
                return result;
            }
        }
    }

    return undefined;
};