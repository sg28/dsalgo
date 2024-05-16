/*
Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.
Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

Example 1:
Input: num1 = "2", num2 = "3"
Output: "6"
*/

let multiplyStrings = (num1, num2) => {
  let m = num1.length;
  let n = num2.length;
  let res = new Array(m + n).fill(0);

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      let product = (num1[i] - "0") * (num2[j] - "0");

      let sum = product + res[i + j + 1];
      res[i + j + 1] = sum % 10;
      res[i + j] += Math.floor(sum / 10);
    }
  }
  let resultString = res.join("");
  let finalString = removeLeadingZero(resultString);
  return finalString || "0";
};

const removeLeadingZero = (args) => {
  for (let i = 0; i < args.length; i++) {
    if (args[i] !== "0") return args.substring(i);
  }
};

console.log(multiplyStrings("2", "3"));
