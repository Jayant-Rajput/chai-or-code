// how to check object is empty or not :
// technique :  let our obj name is user. then Object.keys(user) will give an array of keys of user so by checking it's length we
// can get whether obj is empty or not.
// example :

const user = {}

if(Object.keys(user).length == 0){
    console.log("object is empty.");
}
else{
    console.log("object is not empty.")
}