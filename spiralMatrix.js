/*

Given an m x n matrix, return all elements of the matrix in spiral order.
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]

*/

let spiralMatrix = (matrix) => {
  let res = [];
  let left = 0,
    right = matrix[0].length - 1,
    top = 0,
    bottom = matrix.length - 1;

  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i]);
    }
    top++;
    for (let i = top; i <= bottom; i++) {
      res.push(matrix[i][right]);
    }
    right--;
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        res.push(matrix[bottom][i]);
      }
      bottom--;
    }
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        res.push(matrix[i][left]);
      }
      left++;
    }
  }
  return res;
};
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(spiralMatrix(matrix));

/*

The pattern to push to the result array is

    res.push(matrix[top][i])
    top++
    Note: here top is constant only left is moving.

    res.push(matrix[i][right])
    right--
    Note: Here right is constant only top is moving.

    res.push(matrix[bottom][i])
    bottom--
    Nte: here bottom is constant only right is moving.

    res.push(matrix[i][left])
    left++
    Note: Here left is constant only top is moving.

    [ What is constant will be incremented at the end of the loop ]


    

    for(i = left; i<= right; i++)
    for(i = top; i<= bottom; i++)
    if(top <= bottom)
        for(i = right; i>= left;i--)

    if(left <= right)
        for(i = bottom; i >= top; i--)

*/