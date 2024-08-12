//ARRAYS

const myArr=[0,1,2,3,4,5,6]  //resizable and mix of data types in JS

//console.log(myArr);
//Arrays create shallow copies -> Copies create same reference point.Changes will be done in Original array
//Deep copy-> Copy doesnt share same reference. Changes will be done only in copy

const myArr2=new Array(1,2,4,5);
//console.log(myArr2.length);


//IMPORTANT ARRAY METHODS
// myArr2.push(6)
// myArr2.pop()
// myArr2.pop()

// myArr2.unshift(10)  //Pushes at the beginning and shifts all elements
// myArr2.shift();    //Deletes from the beginning
// console.log(myArr2.includes(10));   //Whether the element is included in the array
// console.log(myArr2.indexOf(1))
const newArr= (myArr2.join())
// console.log(newArr);  //Returns the array in the form of a string 
// console.log(myArr2);

//SLICE AND SPLICE
console.log("A", myArr2)  
const secArr=myArr2.slice(0,3)  //Prints from the start index to end index.Doesnt manipulate original arr.
console.log("B",myArr2)
console.log(secArr);
const secArr1=myArr2.splice(0,3)  //Deletes the section from the original array. Starts from 0th and deletes 3 elements from that index
console.log(secArr1)
console.log("C",myArr2)






  