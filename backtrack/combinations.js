/*
Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].

You may return the answer in any order.


Example 1:

Input: n = 4, k = 2
Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
Explanation: There are 4 choose 2 = 6 total combinations.
Note that combinations are unordered, i.e., [1,2] and [2,1] are considered to be the same combination.
*/

let combinations =(n, k)=>{
    let result = [];
    let start = 1;
    let tempSpace = [];
    helper(n, k, result, start, tempSpace);
    return result;
}

let helper =(n, k, result, start, tempSpace)=>{
    
    // base case
    if(tempSpace.length === k){
        result.push([...tempSpace]);
        return;
    }
    for(let i = start; i< n; i++){
        tempSpace.push(i);
        helper(n, k, result, start+1, tempSpace);
        tempSpace.pop();
    }
}
let n = 4, k = 2;
console.log(combinations(n, k))