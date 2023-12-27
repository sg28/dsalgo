let generateParanthesis = (n)=>{
    let res = [];
    let current = '';
    let open = 0, close= 0;
    helper(res, current, open, close, n);
    return res;
}

function helper(res, current, open, close, n){
    if(current.length === 2 * n){
        res.push(current);
        return;
    }
    if(open < n){
        helper(res, current+'(',open+1,close,n)
    }
    if(close < open){
        helper(res, current+')',open,close+1,n)
    }
}

console.log(generateParanthesis(3))