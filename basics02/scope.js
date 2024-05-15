if (true) {
    let a = 5;
    const b = 6;
    var c = 7;
}

// console.log(a);      shows error : a is not defined
// console.log(b);      shows error : b is not defined
console.log(c);         // it doesn't give any error. That's why var is not used much, as it can create confusion.


let x = 10;
if(true){
    let x = 12;
    console.log(x);
}
console.log(x);