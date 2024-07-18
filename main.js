// Minimum Genetic Mutation
// Medium
// Topics
// Companies
// A gene string can be represented by an 8 - character long string, with choices from 'A', 'C', 'G', and 'T'.

// Suppose we need to investigate a mutation from a gene string startGene to a gene string endGene where one mutation is defined as one single character changed in the gene string.

// For example, "AACCGGTT" -- > "AACCGGTA" is one mutation.
// There is also a gene bank bank that records all the valid gene mutations.A gene must be in bank to make it a valid gene string.

// Given the two gene strings startGene and endGene and the gene bank bank, return the minimum number of mutations needed to mutate from startGene to endGene.If there is no such a mutation, return -1.

// Note that the starting point is assumed to be valid, so it might not be included in the bank.



//     Example 1:

// Input: startGene = "AACCGGTT", endGene = "AACCGGTA", bank = ["AACCGGTA"]
// Output: 1
// Example 2:

// Input: startGene = "AACCGGTT", endGene = "AAACGGTA", bank = ["AACCGGTA", "AACCGCTA", "AAACGGTA"]
// Output: 2
function minMutation(startGene, endGene, bank) {
    const bankSet = new Set(bank);
    if (!bankSet.has(endGene)) return -1;

    const queue = [[startGene, 0]];
    const visited = new Set();
    visited.add(startGene);

    const chars = ['A', 'C', 'G', 'T'];

    while (queue.length > 0) {
        const [current, mutations] = queue.shift();

        if (current === endGene) {
            return mutations;
        }

        for (let i = 0; i < current.length; i++) {
            for (const char of chars) {
                if (char !== current[i]) {
                    const mutatedGene = current.slice(0, i) + char + current.slice(i + 1);
                    if (bankSet.has(mutatedGene) && !visited.has(mutatedGene)) {
                        queue.push([mutatedGene, mutations + 1]);
                        visited.add(mutatedGene);
                    }
                }
            }
        }
    }

    return -1;
}