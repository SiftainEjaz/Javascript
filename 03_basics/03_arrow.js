
const user={
    username:"Siftain",
    price:999,

    welcomeMessage: function()
    {
        console.log(`${this.username}, Welcome to website`);//This keyword is used to access current context(val.)  
        console.log(this);   //Prints current context(or the current values of the object)
         
    }

}

//user.welcomeMessage();
// user.username="Saif"  //Changed the current context
// user.welcomeMessage()

//console.log(this);       //Prints empty Object {} as the node environment has no global context


// function chai()
// {
//     let username="Siftain"
//     console.log(this.username);   //Wont work for function.
    
// }

// chai()

//this wont work forr this type of function declaration as well
// const chai=function()
// {
//     let username="Siftain"
//     console.log(this.username);
// }


//******************ARROW FUNCTION *************/
const chai=() =>{
    let username="Siftain"
    console.log(this);    //Doesnt work with arrow function as well
}

//chai()


//DEFINING ARROW FUNCTION...ONE WAY
// const addtwo= (num1,num2)=>{
//     return num1+num2
// }

//DEFINING ARROW FUNCTION....Second WAY -> Implicit Return
//const addtwo=(num1,num2)=>num1+num2          //{}can be removed if 1 line function statement.

//{} -> return statement is mandatory if curly braces are given


//() -> return statement can be skipped   ***************USEFUL IN REACT***************
//const addtwo=(num1,num2)=>( num1+num2 )

const addtwo=(num1,num2)=>({username:"Siftain"})  //For returning an object, it has to be wrapped in ()

console.log(addtwo(3,4));











