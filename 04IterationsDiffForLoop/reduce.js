const myNum = [1,2,3,4];

const myTotal = myNum.reduce( function(acc,curr_val) {
    return acc+curr_val;                                    
},0);

console.log(myTotal);

const totalval =  myNum.reduce( function(acc,curr_val) {
    console.log(`acc : ${acc} and curr_val : ${curr_val}`);
    return acc+curr_val;
} , 5);

console.log(`totalval = ${totalval}`);


//another syntax : 
// const myTotal = myNum.reduce( (acc,curr_val) => acc+curr_val , 0);