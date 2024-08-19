//Earlier promises were used from external libraries like Q or Bluebird(now it is integrated into JS)
//Promises have two parts -> Creation and Consumption

const promiseOne=new Promise(function(resolve,reject)    //function has 2 components-resolve or reject the promise
{
    //Do an async task-> Eg:- crypography,DB Calls,etc

    setTimeout(function(){
        console.log("Async task is complete");
        resolve();     //Connected to the 'then' fucntion. This will call 'then' function
    },1000)
})

//resolve has direct connection with .then
//Consumption of Promise-> All values returned in 'then' function
promiseOne.then(function(){
    console.log('Promise Consumed');
    
})


//Another way of creating Promises without storing in a variable
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async Task2 completed");
        resolve();
    },1000)

}).then(function(){
    console.log("Promise 2 consumed");
})


const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:'Siftain',email:'siftain@g.com'})
    },1000) 
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error)
        {
            resolve({username:'Siftain',password:'123'})   //Resolve function connects to then function during promise consumption
        }
        else
        {
            reject('Error: Something went wrong')   //Reject function Connects to catch function during promise consumption
        }
    },1000)
});


//Chaining or thenable
promiseFour.then((user)=>{
    console.log(user);
    return user.username;
})
.then((username)=>{
    console.log(username);
})
.catch((error)=>{                     //catch function accepts a message sent by reject function
    console.log(error);  
})
.finally(()=> console.log("The Promise 4 is either resolved or rejected"));  //Always executed


const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error)
        {
            resolve({username:'Javascript',password:'123'})
        }
        else
        {
            reject('Error: JS went wrong')
        }
    },3000)
})

// *******************PROMISE CONSUMPTION USING ASYNC AWAIT *********************

//async await can't handle errors directly
async function consumePromiseFive(){
   try {

   const response = await promiseFive;      //Executed when no error are found. 'Resolve' is connected to 'try'
   
    console.log(response)
   } 
   catch (error)                             //Executed when error is found. 'Reject' is connected to 'catch'
   {
    console.log(error);
   }
}

consumePromiseFive();

// *************************************** FETCH **********************************

// async function getAllUsers(){
//    try {
//     const response = await fetch('https://api.github.com/users/hiteshchoudhary')  //Fetch return a promise.
//     const data=await response.json();     //Conversion of string to object takes time, hence need to await
//     console.log(data);
//     //console.log(response);
        
//    } catch (error) {
//     console.log(error);
    
//    }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
    
})


