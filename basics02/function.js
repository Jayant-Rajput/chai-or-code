function addTwoNum(num1,num2){
    return num1+num2;
}

console.log(addTwoNum(1,5));
console.log(addTwoNum(2,"5"));
console.log(addTwoNum(5,"a"));
console.log(addTwoNum(true,false));
console.log(addTwoNum(false,false));
console.log(addTwoNum("hello","Raipur"));

console.log("***********************");

function loginUserMsg(user){
    return `${user} just logged in.`;
}

// this line shows error    :       console.log(loginUserMsg(Jayant));
console.log(loginUserMsg(5));
console.log(loginUserMsg("Jayant"));
console.log(loginUserMsg());     //this line shows no error.  but as nothing is passed, the value of user is Undefined.

console.log("************************");

//to handle we can use if else : 

function loginMsg(user){
    if(user == undefined){            //it can also be written as   :        if(!user){ }
        console.log("please enter the user name");
        return;
    }
    return `${user} just logged in.` ;
}

console.log(loginMsg());

console.log("************************");

//we can have any default value for parameter. if nothing is passed in function then parameter takes that default value;

function lastloginmsg(user="Jayant"){
    return `${user} just logged in.`;
}

console.log(lastloginmsg("Udit"));
console.log(lastloginmsg());
