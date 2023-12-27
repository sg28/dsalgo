let letterCombination =(digit)=>{
    let res = [];
    let index = 0;
    
    const mapping = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
    let combination = new Array(digit.length).fill('');

    helper(res, digit, combination, mapping, index);
    return res;
}

function helper(res, digit, combination, mapping, index){
    if(index === digit.length) {
        res.push(combination.join(''));
    }

    let phoneNumber = digit.charAt(index) - '0';
    let letters = mapping[phoneNumber];

    for(let letter of letters){
        combination[index] = letter;
        helper(res, digit, combination, mapping, index + 1);
    }
}

console.log(letterCombination('22'));

 