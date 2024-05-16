//some conditions or cases are assumed to false and treated as false
//example :

const value = "";
if(value){
    console.log("it's true case");                //this will not execute
}
else{
    console.log("it's false case");               //this will be executed
}

//the reason behind this is an empty string is treated as false.
// Note :::  "" is empty string, " " is not empty string as it contains one space.

// falsy Values :    false, 0, -0, BigInt 0n, null, undefined, NaN

// all other which are not falsy are treated as true value 
// some examples of truthy values : 
// "0", 'false', [] (empty array), {} (empty object), function(){}  (empty function)
