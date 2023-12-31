/*
Given an integer array nums, find the 
subarray
with the largest sum, and return its sum.

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.

*/
let maximumSubArray = (nums)=>{
    console.log('nums ', nums)

    let maxSum = nums[0];
    for(let i =1; i< nums.length; i++){
        nums[i] = Math.max(0, nums[i -1]) + nums[i];

        if(nums[i] > maxSum) maxSum = nums[i];
    }
    return maxSum;
}

let nums = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maximumSubArray(nums))

/*

The approach to the solution is 
maxSum = nums[0]
And

nums[i] = Math.max(0, nums[i -1]) + nums[i]
            Finding the maximum between 0 and previous element
            And adding the current element.

pointer: find the subarray that created theh maxSum.

*/