/*
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.

*/
 
let checkForValaidSudoku = (board)=>{
    // create the Row, coloumn, subgroup.
    let size = board.length;
    let rows = new Array(size).fill(null).map(()=> new Set());
    let cols = new Array(size).fill(null).map(()=> new Set());
    let subgroups = new Array(size).fill(null).map(()=> new Set());

    // we need to loop the board.
    for(let row = 0; row < size; row++){
        for(let col = 0; col < size; col++){

            let val = board[row][col];
            if(val === '.') continue;

            if(rows[row].has(val)) return false;
            rows[row].add(val);

            if(cols[col].has(val)) return false;
            cols[col].add(val);

            let subGroupVal = Math.floor(row/3) * 3 + Math.floor(col/3);
            if(subgroups[subGroupVal].has(val)) return false;
            subgroups[subGroupVal].add(val);
        }
    }
    return true;
}

console.log(checkForValaidSudoku(input2))

let input1 = [["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

let input2 = [["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
