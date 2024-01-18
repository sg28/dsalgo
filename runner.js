/*
let fn =(num, k)=>{
  let currentSum = 0;
  let maxSum = 0;
  
  for(let i = 0; i< k; i++){
    currentSum += num[i];
  }

  for(let i = k;i< num.length;i++){
    currentSum = (currentSum - num[i-k]) + num[i];
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}
*/
/*
// palindromic substring
let fn = (s) => {
  let start = 0,
    end = 0;

  for (let i = 0; i < s.length; i++) {
    let len1 = helper(s, i, i);
    let len2 = helper(s, i, i + 1);
    let len = Math.max(len1, len2);

    if (len > end - start) {
      start = i - Math.floor(len - 1 / 2);
      end = i + Math.floor(len / 2);
    }
    return s.substring(start, end + 1);
  }
};
let helper = (s, start, end) => {
  while (start >= 0 && end <= s.length && s[start] === s[end]) {
    start--;
    end++;
  }
  return end - start - 1;
};
*/

/*
// longest substring without repeating character
let fn =(s)=>{
  let left = 0, right = 0;
  let set = new Set();
  let maxLength = 0;
  let currentLength = 0;

  while(right < s.length){
    if(!set.has(s[right])){
      set.add(s[right]);
      currentLength = right - left +1;
      maxLength = Math.max(maxLength, currentLength);
      
      right++;
    }else{
      set.delete(s[left]);
      left++;
    }
  }
  return maxLength;
}
*/
/*
// reverse Integer
let fn = (num)=>{
  let reverse = 0;
  let maxInt = math.pow(2,31) -1;
  let sign = num > 0 ? -1: 1;

  while(nums != 0){
    let lastDigit = num % 10; // get the last digit
    if(reverse > Math.floor((maxInt - lastDigit) / 10))  return 0;
    reverse = reverse  * 10 + lastDigit;

    num = Math.floor(num /10); // drop the last digit.
  }
  return sign * reverse;
}
*/

/*
// container with most water
let fn =(nums)=>{
  let left = 0, right = nums.length;
  let res = 0;

  while(left < right){
    let height = Math.max(nums[left], nums[right]);
    let width = right - left;
    let area = height * width;
    if(area > res) res = area;

    if(nums[left] < nums[right]) left++
    else right--;
  }
  return res;
}
*/

/*
// integer to roman
let fn =(num)=>{
  let roman ={};
  let res = "";

  for(let i in roman){
    while(num >= roman[i]){
      res = res + i;
      num = num - roman[i]
    }
  }
  return res;
}
*/

/*
// letter combination of phone number.
let fn = (digits) => {
  let results = [];
  let combination = new Array(digits.length).fill("");
  let wordMap = [];
  helper(res, combination, wordMap, digits, index);
  return results;
};
let helper = (res, combination, wordMap, digits, index) => {
  if(index === digits.length){
    res.push(combination.join(''));
  }

  let letters = wordMap[digits.charAt(index) - '0'];
  for(let letter in letters){
    combination[index] = letter;
    helper(res, combination, wordMap, digits, index+1)
  }
};

*/

/*
// genberare paranthesis
let fn = (n) => {
  let res = [];
  let open,
    close = 0;
  let tempString = "";
  helper(tempString, res, n, open, close);
  return res;
};
let helper = (tempString, res, n, open, close) => {
  if (tempString === 2 * n) {
    res.push(tempString);
    return;
  }
  if (open < n) {
    helper(tempString + "(", res, n, open + 1, close);
  }
  if (close < open) {
    helper(tempString + ")", res, n, open, close + 1);
  }
};
*/
/*
// remove nth node from the end of the list
let fn =()=>{
    let dummyHead = new ListNode(0);
    let current = dummyHead;

    let fast = current;
    let slow = current;

    for(let i =0; i< navigator; i++){
      fast = fast.next;
    }

    while( fast != null){
      fast = fast.next;
      slow = slow.next;
    }
    slow.next = slow.next.next;
    return dummyHead;
}
*/
