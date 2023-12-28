/*
    Divide integers without any division. multiplication operation.
*/

let divideIntegers = (dividend, divisor)=>{
    if(dividend === 0) return 0;
    if (dividend === -Math.pow(2,31) && divisor === -1) return Math.pow(2,31)-1;
    /*
        dividend < 0 ^ divisor < 0
        This is bitwise or operator, we need bitwise or operator not logical or
    */ 
    let isNegative = dividend < 0 ^ divisor < 0;
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);

    let count; // used for the result
    let res = 0; // placeholder for result.
    let base = divisor; // used to update the divisor.

    while(dividend >= divisor){
        count = 1;
        base = divisor;
        /*
            dividend >> 1
            This means we are dividing dividend by 2
        */
        while(base < (dividend >> 1)){
            count = count << 1; // multiplying count by 2.
            base = base << 1; // multiplying count by 2.
        }
        res = res + count;
        dividend = dividend - base;

    }
    return isNegative ? - res : res;

}
let res = console.log(divideIntegers(10,3))