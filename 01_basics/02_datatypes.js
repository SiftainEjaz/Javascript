"use strict" ; //treat all JS Code as newer version. Entire code will be treated as newer versions only.
//Newer funcctions->classes,modules,etc

//alert("hello")  We are using Nodejs, not browser. Hence will throw error

//Code Readability should be high.
let name="Siftain"
let age=18
let isLoggedIn=true
let id1=Symbol("123")
let id2=Symbol("123")
console.log(id1==id2)
//PRIMITIVE DATATYPES
//number -> 2^52
//bigInt
//String-> ""
//boolean -> true/false
//null -> standalone value (Emtpy)
//Undefined -> when nothing is defined or assigned to a variable
//symbol -> unique

// const undefinedVal=undefined;
// console.log(typeof undefinedVal)  prints undefined


//NON-PRIMITIVE DATATYPES
const nullVal=null;
//console.log(typeof nullVal); prints object

//ARRAYS
const arr=[1,2,3];
//console.log(typeof arr)


//FUNCTIONS
const functionVar=function()
{
    console.log("Hello");
    
}
//console.log(typeof functionVar)   //prints function (In Actual, object function)

//Object
let myObj=
{
    name:"Siftain",
    age:26
}

console.log(typeof myObj)   //Prints Object

// console.log(typeof null)  //Prints object
// console.log(typeof undefined)   //Prints Undefined




