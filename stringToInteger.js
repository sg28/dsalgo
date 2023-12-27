let reverseInteger = (x) => {
    let parsedInt = parseInt(x);
    if(isNaN(parsedInt)) return 0;

    let minInt = -Math.pow(2,31);
    let maxInt = Math.pow(2,31);

    if(parsedInt < minInt) return minInt;
    if(parsedInt > maxInt) return maxInt;    

    return parsedInt;
     
}
let num = '123';
let res = console.log(reverseInteger(num));
 