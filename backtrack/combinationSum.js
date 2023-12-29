/*
Given an array of distinct integers candidates and a target integer target, 
return a list of all unique combinations of candidates where the chosen numbers sum to target. 
You may return the combinations in any order.
*/
 
var combinationSum = function(candidates, target) {
    var buffer = [];
    var result = [];
    search(0, target);
    return result;

    function search(startIdx, target) {
        // base case 1
        if (target === 0) {
            result.push(buffer.slice());
            return;
        }
        // base case 2
        if (target < 0) return;
        // base case 3
        if (startIdx === candidates.length) return;
        
        buffer.push(candidates[startIdx]);
        search(startIdx, target - candidates[startIdx]);
        buffer.pop();
        search(startIdx + 1, target);
    }
};

let nums = [2,3,6,7], target = 7;
console.log(combinationSum(nums, target))
