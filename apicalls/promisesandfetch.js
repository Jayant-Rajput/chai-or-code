const promiseone = new Promise( function(resolve,reject){

    setTimeout(function(){
        let error = false;               // once run it with true and once with false and see the outputs.

        if(!error){
            resolve({username: "Jayant",password: "123456"})                 //this resolve is directly related to the 'then'
        }
        else{
            reject('ERROR : Something went wrong')
        }
    }, 1000)
})

promiseone
.then( (user) => {
    console.log(user);
    return user.username;
}).then( (username) => {
    console.log(username);
}).catch( function(error){
    console.log(error);
}).finally( () => console.log('promise is either resolved or rejected.'))




//copied async await :

// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "javascript", password: "123"})
//         } else {
//             reject('ERROR: JS went wrong')
//         }
//     }, 1000)
// });

// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromiseFive()



// fetch : 

fetch('https://api.github.com/users/Jayant-Rajput')
.then( (response) => {
    return response.json()
})
.then( (data) => {
    console.log(data);
    console.log();
    console.log(data.location)
})
.catch( (error) => console.log(error))
