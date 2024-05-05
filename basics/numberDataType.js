const score =  400;
console.log(score) ;

const balance = new Number(400);
console.log(balance);

console.log(balance.toString().charAt(0));

console.log(balance.toFixed(2));

const numberb = 23.8966;

console.log(numberb.toPrecision(4));
 
// *************************MATH***************************

console.log(Math.abs(-6));
console.log(Math.round(6.56));
console.log(Math.ceil(6.66));
console.log(Math.floor(6.66));
console.log(Math.min(4,2,3,8));
console.log(Math.max(4,5,7,9));

console.log("Math.random() function generates random number between 0 to 1(exlusive)");

console.log(Math.random());
console.log("to get in 0 to 9(inclusive) range we multiply the o/p by 10. take floor and add 1 ")
console.log(Math.floor(Math.random()*10) + 1);

// to generate random number in range from min to max we do the following : 
const mini = 1;
const maxi = 6;
console.log(Math.floor(  Math.random() * (maxi-mini+1)  ) + mini);