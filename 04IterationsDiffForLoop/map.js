const myNum = [1,2,3,4,5,6,7,8,9,10];

const newNum = myNum.map( (num) => num+10 );
console.log(newNum);

//another syntax : 
// const newNum = myNum.map( (num) => { return num+10 });

const new_num = myNum.map( (num) => num*10 ).map( (num) => num+100);
console.log(new_num);

const mapandfilter = myNum.map( (num) => num*100).map( (num) => num+212).filter( (num) => num>824);
console.log(mapandfilter);