const arr = ['a','b','c','d','e'];

arr.forEach( function(val){
    console.log(val);
})

console.log("********************************");

arr.forEach( (item) => {                                //using arrow function
    console.log(item);
})

console.log("********************************");

const arrofobj = [
    {
        name : "Jayant", city : "Kawardha"
    },
    {
        name : "Udit", city : "Kawardha"
    },
    {
        name : "Prabhat", city : "Raipur"
    },
    {
        name : "Pranav", city : "Nepanagar"
    }
]

arrofobj.forEach( (item) => {
    console.log(`Name : ${item.name}, City : ${item.city}.`);
})
