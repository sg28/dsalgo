function addBinary(a, b) {
  const aReversed = a.split("").reverse().join("");
  const bReversed = b.split("").reverse().join("");

  let carry = 0;
  let result = "";
  let maxLen = Math.max(aReversed.length, bReversed.length);

  for (let i = 0; i < maxLen; i++) {
    const digitA = parseInt(aReversed[i] || "0", 2);
    const digitB = parseInt(bReversed[i] || "0", 2);
    const sum = digitA + digitB + carry;

    result = (sum % 2) + result;
    carry = Math.floor(sum / 2);
  }

  if (carry === 1) {
    result = "1" + result;
  }

  return result;
}

console.log(addBinary("11", "1"));
