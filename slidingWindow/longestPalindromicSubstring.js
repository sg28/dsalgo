/* 
    Find the longest palindromic substring.
*/

let longestPalindromicSubstring =(s)=>{
    let start , end = 0;

    for(let i = 0;i < s.length; i++){
        let oddlength = helper(s,i,i);
        let evenlength = helper(s, i , i+1);
        let len = Math.max(oddlength, evenlength);

        if(len > right - left){
            start = i - Math.floor((len -1) /2);
            end = i + Math.floor(len/2) ;
        }
    }
    return s.subString(start, end + 1);
}
let helper = (string, left, right)=>{
    if(left >= 0 && right <= string.length && string[left] === string[right]){
        left--;
        right++;
    }
    return right - left - 1 ;
}
let str = 'babad';
let res = longestPalindromicSubstring(str);

/*
Note: 
The idea of this approach is to find the substring.
For the substring we need a start and end. [string.substring(start,end)].

    if(len > right - left){
        start = i - Math.floor((len -1) /2);
        end = i + Math.floor(len/2) ;
    }
    
    This loop brings the start back by subtracting with  i
    and moves the end forward by adding i


*/