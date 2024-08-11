//console.log(2>=1)

//Compare only with like datatypes to get predictable result,else we may get wrong answer.
//console.log("02">1)

//BELOW ARE TO BE AVOIDED
//Comparison happen convert null to 0
// console.log(null > 0)  //gets false
// console.log(null>=0)   //gets true

// //EQUALITY CHECK works differently than COMPARISON OPERATOR
// console.log(null==0)

// console.log(undefined ==0)
// console.log(undefined >=0)
// console.log(undefined <0)

// === -> STRICT CHECK:- checks for the value and datatype equality
console.log(2 === 2)
