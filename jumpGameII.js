/*
Each element nums[i] represents the maximum length of a forward jump 
from index i. In other words, if you are at nums[i], 
you can jump to any nums[i + j].
Return the minimum number of jumps to reach nums[n - 1]. 
The test cases are generated such that you can reach nums[n - 1].

*/

let jumpGame = (nums)=>{

    let steps = nums[0];
    let maxReach = nums[0];
    let jumps = 0;

    for(let i = 1; i < nums.length -1; i++){
        maxReach = Math.max(maxReach, i + nums[i]);
        steps--;

        if(steps === 0){
            jumps++;
            steps = maxReach - i;   
        }
    }
    return jumps + 1;
}

let input = [2,3,1,1,4];
console.log(jumpGame(input));

/*
Logic behind the Code:

    Minimum number of jumps required to reach the end of the array.
    each element in the array represents the maximum number of steps.

    jumps: tracks the number of jumps made.
    maxReach: furthest position that can be reached at any point.
    steps: number of steps that can be taken before the next jump.


*/