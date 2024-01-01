/*
    You are given an integer array nums. 
    You are initially positioned at the array's first index, 
    and each element in the array represents your maximum jump length at that position.

    Return true if you can reach the last index, or false otherwise.

    Input: nums = [2,3,1,1,4]
    OutPut: true

*/

let canJump = (nums) => {
  let maxReach = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > maxReach) return false;
    maxReach = Math.max(maxReach, i + nums[i]);
    if (maxReach >= nums.length - 1) return true;
  }
  if (maxReach >= nums.length - 1) return true;
};
let nums = [2, 3, 1, 1, 4];
console.log(canJump(nums));


/**
 * maxReach: this is the variable which calculates the value, genrated by adding 
 * the index and the value at the index. Eg: Math.max(maxReach, i + nums[i])
 * 
 * if maxReach is greater than or equal to the lenght of the number of arrays at 
 * any given point of time, then it is possible to reach the last index and we return TRUE.
 * 
 * We run this check  [ if (maxReach >= nums.length - 1) return true; ] twice.
 * Once in the loop and next outside the loop.
 */