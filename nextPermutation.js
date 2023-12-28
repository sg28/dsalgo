
/**
    A permutation of an array of integers is an arrangement of its members into a sequence or linear order.
    For example, for arr = [1,2,3], the following are all the permutations of arr: [1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1].
*/
  
const nextPermutation = function(nums){
    // Find the i from the nums in reverse loop
    let i = nums.length - 2 ;
    while(i >= 0 && nums[i] >= nums[i+1]){
        i--;
    }
    
    // Check if i is less than 0
    if(i< 0){
        nums.reverse();
        return;
    }

    // We swap using i and j.
    // We got i now we need to find the j. J starts from the last of the element.

    let j = nums.length -1;
    while(nums[j] <= nums[i]){
        j--;
    }
    [nums[i], nums[j]]= [nums[j], nums[i]];
    
    // Now left (i+1 element) and right (last element)
    let left = i+1;
    let right = nums.length -1;
    while(left < right){
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    };

}
 

