// arrays in JS are resizable, we can add elements on it whenever we want.
// in a single array we can store multiple data types.

const myarr = [5,1,2,3];
const newarr = new Array(1,2,3,4,5,6);

console.log(myarr);
console.log(newarr);
console.log(newarr[3]);

myarr.push(8);
console.log(myarr);

console.log(myarr.includes(2));
console.log(newarr.indexOf(6));

console.log("base myarr : ",myarr);
const derivedarr = myarr.slice(1,3);          // slice() don't affect our original array.  (a,b) a:inclueded, b:excluded
console.log(derivedarr);
console.log("myarr : ",myarr);
const derivednewarr = myarr.splice(1,3);      // splice() removes that part ie(a,b) including indx b;
console.log(derivednewarr);
console.log("myarr : ",myarr);