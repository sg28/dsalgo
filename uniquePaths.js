/*

There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). 
The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.
Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.
The test cases are generated so that the answer will be less than or equal to 2 * 109.


this is how the res [] looks when created.
[
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1]
]

*/

var uniquePaths = function (m, n) {
  let dp = [];
  for (let i = 0; i < m; i++) {
    dp[i] = [];
    for (let j = 0; j < n; j++) {
      dp[i][j] = 1;
    }
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
};

/*
    As we can move bottom and right only.

    dp[i - 1][j]: The cell above dp[i][j].
    dp[i][j - 1]: The cell left of dp[i][j].
*/