const name="siftain"
const val=50

//console.log(name + val + "SCORE");  NOT RECOMMENDED> REDUCES READABILITY

//MODERN -> STRING INTERPOLATION
//console.log(`My name is ${name} and my value is ${val}`);

//Another way to declare STRINGS in JS
const gameName=new String('Siftain-Ejaz-is-a-good-boy')
//console.log(gameName[0])
//console.log(gameName.__proto__); //prints {}
//console.log(gameName.toUpperCase())      //Changes in the copy
//console.log(gameName.charAt(3));
//console.log(gameName.indexOf('t'))
//console.log(gameName.substring(0,2))
//console.log(gameName.slice(-10,12))
//console.log(gameName.trim())
console.log(gameName.replace('-','o'))  //Replaces only first occurence
console.log(gameName.replaceAll('-','0')) //Replaces all occurences
// console.log(gameName.includes('siftain'))  //Case-sensitive check
console.log(gameName.split('-',2))  //split(separator,limit of elements)




