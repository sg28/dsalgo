let reverseInteger = (x) => {
    let maxInt = Math.pow(2, 31) - 1;
    let reverse = 0;
    let sign = x < 0 ? -1 : 1;

    while (x !== 0) {
        let lastIndex = x % 10;
        if (reverse > Math.floor((maxInt - lastIndex) / 10)) {
            return 0;
        }
        reverse = reverse * 10 + lastIndex;
        // We need to floor this value else it will fail.
        x = Math.floor(x / 10);
    }

    return sign * reverse;
}
let num = 123;
let res = console.log(reverseInteger(num));
 

