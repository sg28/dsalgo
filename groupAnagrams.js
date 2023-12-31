/*
    Given an array of strings strs, group the anagrams together. You can return the answer in any order.
    An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
    typically using all the original letters exactly once.

    Input: strs = ["eat","tea","tan","ate","nat","bat"]
    Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

*/

let groupAnagram = (strs)=>{

    let anagramObj = {};
    for(let str of strs){
        /*  sort the string */
        let key = str.split('').sort().join('');

        /*  if the value exists in the anagramObj, push the str in the value */ 
        if(anagramObj[key]){
           anagramObj[key].push(str) 
        }
        /* 
            if the value doesn't exixts in anagramObj, 
            create an array and put the str in the array.
        */ 
        else{
            anagramObj[key] = [str];
        }
    }
    return Object.values(anagramObj);
}

console.log(groupAnagram(["eat","tea","tan","ate","nat","bat"]));