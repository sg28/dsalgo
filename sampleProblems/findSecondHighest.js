let findSecondHighest = (nums) => {
  let highest = -Infinity;
  let secondhighest = -Infinity;

  for (let num of nums) {
    if (num > highest) {
      secondhighest = highest;
      highest = num;
    } else if (num > secondhighest && num !== highest) {
      secondhighest = num;
    }
  }

  return secondhighest;
};
let seq = [2, 2, 3, 4, 5, 6, 6];
console.log(findSecondHighest(seq));
