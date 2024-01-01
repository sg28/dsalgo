/*
Given an array of intervals where intervals[i] = [starti, endi], 
merge all overlapping intervals, 
and return an array of the non-overlapping intervals that cover all the intervals in the input.

Example 1:
    Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
    Output: [[1,6],[8,10],[15,18]]
    Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

*/

let mergeInterval = (intervals) => {
    if (!intervals.length) return intervals;

    // Sort the intervals by their start time
    intervals.sort((a, b) => a[0] - b[0]);
    const result = [];
    result.push(intervals[0]);

    for (let i = 1; i < intervals.length; i++) {
        const currentInterval = intervals[i];
        const lastInterval = result[result.length - 1];

        /**
        If the first element of the currentInterval is less than or equal to the second element 
        of the lastInterval.
        Then we update the lastInterval second element with the 
        maximum between the second element of the currentInterval with the second of the lastInterval.
         */
        if (currentInterval[0] <= lastInterval[1]) {
            lastInterval[1] = Math.max(lastInterval[1], currentInterval[1]);
        } else {
            result.push(currentInterval);
        }
    }
    return result;
};

let intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];
console.log(mergeInterval(intervals));
