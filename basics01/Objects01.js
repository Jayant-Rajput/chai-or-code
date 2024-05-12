//singleton
//object literals


//Object Literals : 

const student = {
    name : "Jayant",  roll : 43 ,
    id : "jr@google.com",
    offday : ["saturday","sunday"]
}

//accessing :
console.log(student.roll);
//another method to access :
console.log(student["roll"]);

//some comment about symbol and seting them as objects are in video Lec - 16.

console.log(typeof student.roll);

//we can change the values :
student.offday = ["sunday"];

console.log(student.offday);

//if we want that the values shouldn't be changed then we can freeze the object. later if we change anything, it won't;
// Object.freeze(student);

//adding variable : 
student.clg = "NITRR";

console.log(student["clg"]);
// adding functions :
student.greet = function(){
    console.log(`hello ${this.name}.`);
}

console.log(student.greet());
// extra : 
console.log(student);