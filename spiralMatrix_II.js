/*
Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.
Input: n = 3
Output: [[1,2,3],[8,9,4],[7,6,5]]
*/

let spiralMatrix =(n)=>{

    let matrix = [];
    for(let i = 0; i< n; i++){
        matrix.push(new Array(n).fill(0));
    }
    let left = 0, top = 0;
    let right = n -1, bottom = n-1;
    let num = 1;

    while(left <= right && top <= bottom){

        for(let i = left; i<= right;i++){
            matrix[top][i] = num++
        }
        top++;
        for(let i = top; i<= bottom; i++){
            matrix[i][right] = num++;
        }
        right--;
        for(let i = right; i>= left; i--){
            matrix[bottom][i] = num++;
        }
        bottom--;
        for(let i = bottom; i>= top;i--){
            matrix[i][left] = num++;
        }
        left++;
    }

    return matrix;
}

console.log(spiralMatrix(3))