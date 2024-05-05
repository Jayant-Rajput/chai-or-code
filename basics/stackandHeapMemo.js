let a = "JJJJJJJ";
let b = a;
console.log(`it's a : ${a}`);
console.log(`it's b : ${b}`);

console.log("now changing a : ");

a = "RRRRRRR";
console.log(`it's new a : ${a}`);
console.log(`is there any change in b ? lets see, b : ${b}`);

console.log(`hense for primitve data types, always copy is given to the new variable.all have different refrences`);
console.log(`primitive data types are stored in stack memeory`);

console.log("*********************************************************");
console.log(`now we will see for non-primitive data types`);

let user1 = {
    emailid : "user@email.com" , upi : "xyz@ybl"
}

let user2 = user1;

console.log(`user1 : ${user1.emailid} and ${user1.upi}`);
console.log(`user2 : ${user2.emailid} and ${user2.upi}`);

console.log("changing user1 details");

user1.emailid = "abcdef@email.com";

console.log("let's see the changes")
console.log(`user1 : ${user1.emailid} and ${user1.upi}`);
console.log(`user2 : ${user2.emailid} and ${user2.upi}`);

console.log("hense on changing one, both changes. ie both point to the same memory.");
console.log("so in case of non primitive data types copies are not created,all have the same refrence.nonprimitve dt are stored in Heap Memory.")
