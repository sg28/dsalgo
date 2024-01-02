/*

You are given an m x n integer array grid. There is a robot initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). 
The robot can only move either down or right at any point in time.
An obstacle and space are marked as 1 or 0 respectively in grid. 
A path that the robot takes cannot include any square that is an obstacle.
Return the number of possible unique paths that the robot can take to reach the bottom-right corner.
The testcases are generated so that the answer will be less than or equal to 2 * 109.

*/

var uniquePathsWithObstacles = function (obstacleGrid) {
  const m = obstacleGrid.length; // [ Row ]
  const n = obstacleGrid[0].length; // [ Column ]

  // Initialize a 2D array to store the number of ways to reach each cell.
  //   const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));

  const dp = [];
  for (let i = 0; i < m; i++) {
    dp[i] = [];
    for (let j = 0; j < n; j++) {
      dp[i][j] = 0;
    }
  }

  // Set the first row and column to 1 if there are no obstacles.
  for (let i = 0; i < m; i++) {
    if (obstacleGrid[i][0] === 1) {
      break;
    }
    dp[i][0] = 1;
  }
  for (let j = 0; j < n; j++) {
    if (obstacleGrid[0][j] === 1) {
      break;
    }
    dp[0][j] = 1;
  }

  // similar approach like uniquepath I
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (obstacleGrid[i][j] === 1) {
        dp[i][j] = 0;
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }

  return dp[m - 1][n - 1];
};


/*
The approach towards this solution is 
1. Set the first row and column to 1 if there are no obstacles.
2. Start the loop from i =1 and j = 1
    when faced by dp[i][j] === 1, update the dp[i][j] to 0
    otherwise 
    update dp[i][j] = dp[i -1][j] + dp[i][j-1]

*/
