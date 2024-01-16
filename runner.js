// reverse integer
let reverseInteger = (num) => {
  let maxInt = Math.pow(2, 31) - 1;
  let reversedNumber = 0;
  let sign = num < 0 ? -1 : 1;

  while (num != 0) {
    let lastDigit = num % 10;
    if ((reversedNumber > maxInt - lastDigit) / 10) return 0;
    reversedNumber = reversedNumber * 10 + lastDigit;
    num = Math.floor(num / 10);
  }
  return sign * reversedNumber;
};

console.log(reverseInteger(321));
