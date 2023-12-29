let countAndSay =(n)=>{
    let res = '1';

    for(let i = 1; i< n;i++){
        let temp = '';
        let count = 1;
        
        for(let j = 0; j<= res; j++){
            if(res[j] === res[j+1]){
                count++;
            }else{
                temp = temp + count + res[j];
                count= 1;
            }
        } 
        res = temp;       
    }
    return res;
}

console.log(countAndSay(4))