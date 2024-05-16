// for (const key in object) {                      for in loop syntax
    
// }

const user = {
    name : "Jayant", id : 22116043, city : "Raipur"
}

for (const key in user) {
    console.log(key);                    // it will give all keys of object
}

for (const key in user) {
    console.log(user[key]);              // it will give all values of object
}


console.log("*****************************************************");

const arr = ['a','b','c','d','e'];

for (const key in arr) {
    console.log(key);                     //it will print all keys of array ### keys of array are 0,1,2....
}

for (const key in arr) {
    console.log(arr[key]);
}