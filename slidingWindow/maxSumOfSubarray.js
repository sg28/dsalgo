/*
    Given an array of integers and a fixed window size, find the maximum sum of any sub array

*/ 
let maxSumOfSubarray = (nums, k)=>{
    let currentSum = 0;
    let maxSum = 0;

    for(let i =0; i< k;i++){
        currentSum = currentSum + nums[i];
    }

    for(let i = k ; i < nums.length;i++ ){
        currentSum = currentSum - nums[i-k] + nums[i];
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;

}
let nums = [4,2,1,7,8,1,2,8,1,0];
let k = 3;
let res = console.log(maxSumOfSubarray(nums, k));