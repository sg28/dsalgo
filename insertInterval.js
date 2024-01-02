/*
Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]
*/

let insertInterval = (currentInterval, newInterval)=>{
    let i = 0;
    let res = [];

    // when currentInterval SECOND element < newInterval FIRST element
    while(i < currentInterval.length && currentInterval[i][1] < newInterval[0]){
        res.push(currentInterval[i])
        i++;
    }

    // when currentInterval FIRST element <= newInterval SECOND element
    while(i < currentInterval.length && currentInterval[i][0] <= newInterval[1]){
        newInterval = [
            Math.min(currentInterval[i][0], newInterval[0]),
            Math.max(currentInterval[i][1], newInterval[1])
        ];
        i++;
    }
    res.push(newInterval);

    // When i is still less than currentInterval length
    while(i < currentInterval.length){
        res.push(currentInterval[i])
        i++;
    }
    return res;
}
let currentInterval = [[1,3],[6,9]], newInterval = [2,5];

console.log(insertInterval(currentInterval, newInterval));