/*

Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.
Note: You can only move either down or right at any point in time.

Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
Output: 7

*/

let minimumPathSum = (grid) => {
    let rows = grid.length;
    let cols = grid[0].length;

    // update the first cols.
    for (let i = 1; i < rows; i++) {
        grid[i][0] = grid[i][0] + grid[i - 1][0];
    }

    // update the first row.
    for (let i = 1; i < cols; i++) {
        grid[0][i] = grid[0][i] + grid[0][i - 1];
    }

    for (let i = 1; i < rows; i++) {
        for (let j = 1; i < cols; j++) {
            grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
        }
    }
    return grid[rows - 1][cols - 1];
}

let grid = [[1, 3, 1], [1, 5, 1], [4, 2, 1]];
console.log(minimumPathSum(grid))