let score = "Siftain"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0


let isLoggedIn = "Siftain"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);  //Implies 2 to the power of 3
// console.log(2/3);
// console.log(2%3);

let str1="hello"
let str2="world"
//console.log(str1+str2)


//If string comes first, then the entire line is converted to string and merged.
//Else, operations will be done in the beginning(eg 1+2=3) and then merged with the string(at last).
//BELOW ARE BAD CODE PRACTICES
// console.log("1" + 2)
// console.log(1 + "2")
// console.log("1" + 2 + 2)
// console.log(1 + 2 + "2")

//console.log(+true);

let num1,num2,num3
num1=num2=num3=3
//console.log(num3)
console.log(num3++)  //Increments after the operation is done
console.log(++num3)  //Increments before the operation is done

