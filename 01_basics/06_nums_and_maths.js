const score = 1000
const balance=new Number(80)       //Object of Number Type
// console.log(balance)
// console.log(balance.toString().length)
// console.log(balance.toFixed(3))   //number of digits after decimal

const otherNumber=24.365
//console.log(otherNumber.toPrecision(3))  //Number of significant digits. Return strings

const hundreds=1000000
// console.log(hundreds.toLocaleString('EN-IN'))  //Created commas as per Indian standards, else US
// console.log(Number.MAX_VALUE)  //MAX NUMBER VALUE
// console.log(Number.MIN_VALUE)  //MIN NUMBER VALUE
// console.log(Number.MAX_SAFE_INTEGER) //Max safe value that can be stored
//console.log(hundreds.toExponential());
// ********************MATHS*******************************

// const val=4
// console.log(Math.abs(val));
// console.log(Math.round(4.187));
// console.log(Math.floor(4.9))
// console.log(Math.ceil(4.9))
// console.log(Math.sqrt(9))
// console.log(Math.pow(3,2))
// console.log(Math.max(1,4,8,9))
console.log(Math.random())   //Will fetch values between 0 and 1 only including the boundaries
console.log(Math.floor(Math.random()*10) +1)   //getting a SINGLE VALUE

const MIN=10
const MAX=20
//MAX-MIN might get 0, hence add 1. mutliply this number by the random number.
//In order to get value from MIN VALUE PROVIDED, hence we have to add min. value. 
//Total we get, we will take the floor value to get a single digit value
console.log(Math.floor( Math.random() * (MAX-MIN+1) + MIN ));  

