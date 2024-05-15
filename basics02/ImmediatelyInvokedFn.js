(function wifi () {
    console.log(`Jayant's wifi Connected`);
})();

// it's called IIFE(Immediately Invoked Function Expressions) 
// first () contains function and second () calls the function.


( () => {
    console.log(`Jayant's 2nd wifi Connected`);
}) ();

//passing parameter
( (id) => {
    console.log(`Jayant's id is : ${id}`);
}) (22116043);