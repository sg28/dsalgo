/*
    Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.
    You have the following three operations permitted on a word:

    Insert a character
    Delete a character
    Replace a character

    Input: word1 = "horse", word2 = "ros"
    Output: 3
    Explanation: 
    horse -> rorse (replace 'h' with 'r')
    rorse -> rose (remove 'r')
    rose -> ros (remove 'e')

*/

let editDistance = (word1, word2) => {
    const m = word1.length;
    const n = word2.length;
    const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));

    // Initialize the first row and first column
    for (let i = 0; i <= m; i++) {
        dp[i][0] = i;
    }
    for (let j = 0; j <= n; j++) {
        dp[0][j] = j;
    }

    // Compute the edit distance
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                const deleteOp = dp[i - 1][j];     // Cost of delete operation
                const insertOp = dp[i][j - 1];     // Cost of insert operation
                const replaceOp = dp[i - 1][j - 1]; // Cost of replace operation

                dp[i][j] = 1 + Math.min(deleteOp, insertOp, replaceOp);
            }
        }
    }

    return dp[m][n];
}
let word1 = "horse", word2 = "ros";
console.log(editDistance(word1, word2));