//singleton :

const tinderUser = new Object();
tinderUser.id = 123;
tinderUser.name = "abc";
tinderUser.isloggedin = true;

console.log(tinderUser.isloggedin);

//nested objects:
const regularUser = {
    email : "abc@gmail.com",
    fullname : {
        userfullname : {
            first_name : "Jayant",
            last_name : "Rajput"
        }
    }
}

console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname.last_name);

//merging two objects : 

const obj1 = {1:'a',2:'b'};
const obj2 = {3:'c',4:'d'};

const obj3 = {obj1,obj2} ;   // it won't merger both the objects.Instead it will create object of objects;
console.log(obj3);

const obj4 = Object.assign({},obj1,obj2);  // it will merge both the objects and store it to new obj {} which is returned and 
//we are storing it in obj4;

console.log(obj4);

//another way to merge two objects :
const obj5 = {...obj1,...obj2};
console.log(obj5);

//we can have the array of objects:
const objarr = [{greet:"hi",formal:"hello"},{rock:"yo",leave:"bye"}];
console.log(objarr[0].formal);


console.log(Object.keys(tinderUser));   // this function returns ARRAY of keys in given object;
console.log(Object.values(tinderUser));   // return ARRAY of values of given object;
console.log(Object.entries(tinderUser));   // return ARRAY of ARRAY which has key and values of given object;

//to check if the object has any specific propery or not : 
console.log(tinderUser.hasOwnProperty("name"));