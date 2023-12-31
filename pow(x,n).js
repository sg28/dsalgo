/*
    Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

*/

let pow = (x, n) => {
  if (n === 0) return 1;
  let res;
  let pow = Math.abs(n);

  /*
        if pow is even
        multiply the base and half the pow
    */
  if (pow % 2 === 0) {
    res = pow(x * x, pow / 2);
  } else {
  /*
        we multiple the base. and half the pow
        make the pow even by doing (pow - 1)
        
    */
    res = pow(x * x, (pow - 1) / 2) * x;
  }

  return n < 0 ? 1 / result : result;
};
