// this refers to the current context or the current Object

// this and arrow function was introduced in 2015 under ES6 in JS.
const info = {
    username : "Jayant",
    id : 22116043,
    isLogged : true,

    welcomemsg : function(){
        console.log(`${this.username}, welcome to website.`);

        console.log(this);
    }
}

info.welcomemsg();

console.log("****************");
console.log(this);


//arrow function syntax :    () => {}
//and we can store it in a variable also as following :

const addTwo = (num1,num2) => {
    return(num1+num2);
}

console.log(addTwo(4,4));

//another way : implicit return 
const addTwoNum = (num1,num2) => num1+num2;

console.log(addTwoNum(10,20));

const objreturn = () => ({username : "Jayant"});

console.log(objreturn());
