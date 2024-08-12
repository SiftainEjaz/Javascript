const marvelHeroes=['thor','ironman','spiderman']
const dcHeroes=['superman','flash','batman']

//marvelHeroes.push(dcHeroes)  //Will push the other array into marvelHeroes as an element.
// console.log(marvelHeroes)
// console.log(marvelHeroes[3][1])

// const allheroes= marvelHeroes.concat(dcHeroes)  //Adds the elements of dcheroes and returns a new array
// console.log(allheroes);

//Spreader..remember example of glass. Will break into pieces if dropped
const allHeroes=[...marvelHeroes,...dcHeroes]  //Same as above..PREFERRED
//console.log(allHeroes);

const arr=[1,2,[3,4,5],7,1,1,[0,9,8,[1,2]],10]
//console.log(arr.flat(1));  //Flattens or spreads the array into a single array


// console.log(Array.isArray("Siftain"));
//console.log(Array.from("Siftain"));   //return array from the characters of Siftain
// console.log(Array.from({name:"Siftain"}));  //Will give empty array if not told from which to make array,
                                            //Key array or Value array.....

let score1=100
let score2=200
let score3=300

const scores=Array.of(score1,score2,score3) //returns array after combining multiple values.
console.log(scores)  







