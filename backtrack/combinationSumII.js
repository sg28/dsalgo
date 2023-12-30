/*
Given a collection of candidate numbers (candidates) and a target number (target), 
find all unique combinations in candidates where the candidate numbers sum to target.

Each number in candidates may only be used once in the combination.
*/

let combinationSumII = (candidate, target) => {
  candidate.sort((a, b) => a - b);
  let res = [];
  let buffer = [];
  let start = 0;
  helper(buffer, start, target);
  function helper(buffer, start, target) {
    if (target === 0) {
      res.push([...buffer]);
      return;
    }

    for (let i = start; i < candidate.length; i++) {
      // unique condition
      if (i > start && candidate[i] === candidate[i - 1]) continue;

      if (candidate[i] > target) break; // why are we doing this?

      buffer.push(candidate[i]);
      helper(buffer, i + 1, target - candidate[i]);
      buffer.pop();
    }
  }
  return res;
};

let candidates = [10, 1, 2, 7, 6, 1, 5],
    target = 8;
console.log(combinationSumII(candidates, target));
