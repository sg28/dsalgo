/*
Given an integer array nums of unique elements, return all possible 
subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

Example 1:
Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

*/

let uniqueSubSets =(nums)=>{
    let result = [];    
    let tempSpace = [];
    helper(nums, result, tempSpace, 0);
    return result;
}

function helper(nums, result, tempSpace, start){

    result.push([...tempSpace]);
    
    for(let i = start; i< nums.length; i++){
        tempSpace.push(nums[i]);
        helper(nums, result, tempSpace, i+1);
        tempSpace.pop();
    }
}

let nums = [1,2,3];
console.log(uniqueSubSets(nums));
