// for (const iterator of object) {        syntax

// }

const arr = [5,6,7,8,9,10]

for (const value of arr) {
    console.log(value);
}

const map = new Map();
map.set("IN","India");
map.set("USA","United States of America");
map.set("Fr","France");
map.set("UK","United Kingdom");

console.log(map);

console.log("***************************");

for (const key of map) {
    console.log(key);                       // it will print both key value pair
}

for (const [key,value] of map) {
    console.log(`key : ${key}, value : ${value}`);
}


console.log("****************************");

const user = {
    name : "Jayant",
    roll : 43,
    clg : "NITRR"
}

// for (const items of user) {              It will show error as  object is not iterable so we can't interate it
//     console.log(items);                  Using for of loop.
// }