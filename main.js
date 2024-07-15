// Course Schedule
// Medium
// Topics
// Companies
// Hint
// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

// For example, the pair[0, 1], indicates that to take course 0 you have to first take course 1.
// Return true if you can finish all courses.Otherwise, return false.



//     Example 1:

// Input: numCourses = 2, prerequisites = [[1, 0]]
// Output: true
// Explanation: There are a total of 2 courses to take. 
// To take course 1 you should have finished course 0. So it is possible.
//     Example 2:

// Input: numCourses = 2, prerequisites = [[1, 0], [0, 1]]
// Output: false
// Explanation: There are a total of 2 courses to take. 
// To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.
function canFinish(numCourses, prerequisites) {
    // Create an adjacency list
    const graph = new Map();
    for (let i = 0; i < numCourses; i++) {
        graph.set(i, []);
    }
    for (let [course, pre] of prerequisites) {
        graph.get(pre).push(course);
    }

    // State arrays to track visited courses
    const visited = new Array(numCourses).fill(false);
    const recStack = new Array(numCourses).fill(false);

    // Helper function for DFS
    const hasCycle = (node) => {
        if (recStack[node]) return true; // Cycle detected
        if (visited[node]) return false; // Already visited, no cycle detected here

        // Mark the node as visited and part of the recursion stack
        visited[node] = true;
        recStack[node] = true;

        // Visit all the neighbors
        for (let neighbor of graph.get(node)) {
            if (hasCycle(neighbor)) return true;
        }

        // Remove the node from the recursion stack
        recStack[node] = false;
        return false;
    };

    // Check for cycles in the graph
    for (let i = 0; i < numCourses; i++) {
        if (!visited[i]) {
            if (hasCycle(i)) return false;
        }
    }

    return true;
}