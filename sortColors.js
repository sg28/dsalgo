/*

Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, 
with the colors in the order red, white, and blue.
We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
You must solve this problem without using the library's sort function.

Example 1:
Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]

*/

let sortColors = function(nums) {
    let red = [], white = [], blue =[];
    for(let color of nums){
      if(color === 0) red.push(color);
      else if(color === 1) white.push(color);
      else blue.push(color);
    }
    // Need to understand this logic
    nums.splice(0, nums.length, ...red, ...white, ...blue);
    return nums;
  };

  let nums = [2,0,2,1,1,0];
  console.log(sortColors(nums));