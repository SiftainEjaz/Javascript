//Function is like a package so that it can be reused wherever wanted

function sayMyName()
{
    console.log("Siftain Ejaz")
}

sayMyName()

function addNumbers(number1,number2)          //number1 and number2 are parameters
{
    console.log (number1+number2);
    
}

const result = addNumbers(4,5)       //4 and 5 are arguments
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
console.log(loginUserMessage("Siftain"));   





