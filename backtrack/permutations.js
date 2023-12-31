/*
Given an array nums of distinct integers, return all the possible permutations. 
You can return the answer in any order.


Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
*/


let permutation = (nums)=>{
    let buffer = [];
    let res = [];
    function helper(buffer){

        // base case
        if(buffer.length === nums.length){
            res.push([...buffer]);
            return;
        }

        for(let num in nums){
            if(!buffer.includes(num)){
                buffer.push(num);
                helper(buffer);
                buffer.pop();
            }
        }
    }
    helper(buffer);
    return res;
}
console.log(permutation([1,2,3]))