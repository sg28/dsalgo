/*
Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
You must do it in place.


Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]

*/

let setMatricZero = (matrix) => {
    
    let firstRowZero = false; 
    let firstColZero = false;
    let rows = matrix.length; 
    let cols = matrix[0].length;

    // Check if the first row contains zero
    for (let i = 0; i < cols; i++) {
        if (matrix[0][i] === 0) {
            firstRowZero = true;
            break;
        }
    }

    // Check if the first column contains zero
    for (let i = 0; i < rows; i++) {
        if (matrix[i][0] === 0) {
            firstColZero = true;
            break;
        }
    }

    // Use the first row and column as markers
    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    // Set rows and columns to zero
    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }

    // Handle the first row
    if (firstRowZero) {
        for (let j = 0; j < cols; j++) {
            matrix[0][j] = 0;
        }
    }

    // Handle the first column
    if (firstColZero) {
        for (let i = 0; i < rows; i++) {
            matrix[i][0] = 0;
        }
    }
    return matrix;
};

let matrix = [[1, 1, 1], [1, 0, 1], [1, 1, 1]];
console.log(setMatricZero(matrix))