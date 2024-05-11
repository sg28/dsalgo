/*
find the duplicates
*/
function findDuplicates(nums) {
  let map = new Map();
  let count = 0;
  for (let i = -0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
      //      key       value                 // here key is the array element and count will be the value
    } else {
      map.set(nums[i], 1);
    }
  }

  console.log("map ", map);
}

let nums = [1, 2, 3, 6, 3, 6, 1];
// findDuplicates(nums);

/*
 the task is to find the maximum profit possible by buying and selling the stocks on different days
*/
function maxProfit(prices) {
  let minPrice = Number.MAX_SAFE_INTEGER;
  let maxProfit = 0;

  for (const price of prices) {
    let profit = price - minPrice;
    if (price < minPrice) {
      minPrice = price;
    } else if (profit > maxProfit) {
      maxProfit = profit;
    }
  }

  return maxProfit; // Return the maximum profit found
}
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
