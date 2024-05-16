const val1 = null ?? 10;
const val2 = 2 ?? 4;
const val3 = undefined ?? 50;
const val4 = null ?? 10 ?? 20;

console.log(`val1 : ${val1}, val2 : ${val2}, val3 : ${val3}, val4 : ${val4}`);


//used to ensure we are not getting any bad values like null, undefined, NaN etc. if we are getting it then it assigns different 
//value (written after ?? (nullish Coalescing operator)) to the variable.