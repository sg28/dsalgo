/**  
Longest substring without repeating characters
*/
let longestSubString = (s)=>{
    let left = 0, right = 0;
    let set = new Set();
    let maxLength = 0;
    
    while(right < s.length){
      if(!set.has(s[right])){
        set.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
        right++;
      }else{
        set.delete(s[left]);
        left++;
      }
    }
    return maxLength;
  }
  let str = 'abcabcbb';
  let res = console.log(longestSubString(str));
  