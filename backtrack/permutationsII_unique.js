/*

Given a collection of numbers, nums, that might contain duplicates, 
return all possible unique permutations in any order.

Input: nums = [1,2,3]
Output: 
[[1,1,2],
 [1,2,1],
 [2,1,1]]

*/

let permutation = (nums) => {
  let buffer = [];
  let res = [];

  function helper(buffer, used) {
    if (buffer.length === nums.length) {
      res.push([...buffer]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
        /*
            1. used[i]: Checks if the current element is used.
            2. i > 0: Checks that we are not using first element.
            3. nums[i] === nums[i - 1]: Checks if the current element is equal to the previous element.
            4. !used[i - 1]: Checks if the previous element has not been used yet in the current permutation.
        */
        if(used[i] || (i > 0 && nums[i] === nums[i - 1] && !used[i-1]) ){
            continue
        }    

        buffer.push(nums[i]);
        used[i] = true;
        helper(buffer, used);
        buffer.pop();
        used[i] = false;
    }
  }
  nums.sort((a, b) => a - b);
  let arr = new Array(nums.length).fill(false);

  helper(buffer, arr);
  return res;
};
console.log(permutation([1,1,2]));
