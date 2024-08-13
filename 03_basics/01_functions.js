//Function is like a package so that it can be reused wherever wanted

function sayMyName()
{
    console.log("Siftain Ejaz")
}

//sayMyName()

function addNumbers(number1,number2)          //number1 and number2 are parameters
{
    console.log (number1+number2);
    
}

//const result = addNumbers(4,5)       //4 and 5 are arguments
//console.log(result);

function add(num1,num2)
{
    //let ans=num1+num2
    return num1+num2;
    //Nothing is executed if any statement is given after return statement 
}

const ans=add(5,6)
//console.log(ans);

function loginUserMessage(username="Saif") //Value given is called default value.If nothing is passed,Saif will be taken,else nor 
{
    // if(username===undefined)   
    // {
    //     console.log("Please enter username");
    //     return;
    // }


    //undefined is treated as false  -> IMPORTANT
    if(!username)
    {
        console.log("Enter Username");
        return;
    }
    
    return `${username} just logged in`   //undefined will be printed if nothing is passed in function call statement
}

//const message = loginUserMessage("siftain")
//console.log(loginUserMessage("Siftain"));   

// *************REST OPERATOR*********************************

function calculateCartPrice(val1,val2,...num1)   //"..." is called Rest operator  . 
{
    return num1                        //Will combine any no. of values into an array
}

//console.log(calculateCartPrice(100,200,300,400));

const user={
    username:"Siftain",
    age:26
}

function handleObject(anyObject)
{
    console.log(`username is ${anyObject.username} and age is ${anyObject.age}`);
    
}

//handleObject(user)
// handleObject({
//     username:"Saif",
//     age:30
// })

const myNewArr=[100,200,400]
function handleArray(arr)
{
    return arr[0]
}
//console.log(handleArray(myNewArr));
console.log(handleArray([10,20,30]))








