/*
Input: nums = [1,1,1,2,2,3]
Output: 5, nums = [1,1,2,2,3,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

*/

let removeDuplicateFromSorted = (nums) => {
  if (nums.length <= 2) {
    return nums.length;
  }
  let k = 2;
  for (let i = 2; i < nums.length; i++) {
    if (nums[i] != nums[k - 2] || nums[i] != nums[k - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
};

let nums = [1, 1, 1, 2, 2, 3];
console.log(removeDuplicateFromSorted(nums));

/*
    We start the loop from the 3rd position.
    Check if ith element not equal to k-2 or k-1
    assign nums[i] to nums[k].

*/
