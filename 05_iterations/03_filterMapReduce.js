//const codingLanguage=['js','ruby','cpp','java','python']


//FOR EACH DOESNT RETURN ANYTHING
// const values= codingLanguage.forEach( (item) => {
//     //console.log(item);
//     return item;
// })

// console.log(values);

//const myNums=[1,2,3,4,5,6,7,8,9,10]

//WILL RETURN VALUES THAT SATISFIES THE GIVEN CONDITION
//{} -> RETURN MANDATORY IF SCOPE IS DECLARED
//const newNums= myNums.filter( (num) =>  num>4)

// const newNums=myNums.filter( (nums) => {
//     return nums>7
// })

// const newNums=[]
// myNums.forEach( (num)=> {
//     if(num>4)
//         newNums.push(num)
// })
// console.log(newNums);

// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];

// let userBooks=books.filter( (bookData) =>{
//     return bookData.publish>=1995 && bookData.genre==='History'
// })
//   console.log(userBooks);
  

//Want to add 10 to all elements
//const nums=[1,2,3,4,5,6,7,8,9,10]

//Returns elements by default
//const newNums= nums.map( (num)=>num+10 )


//***************************CHAINING of Functions***************
//each function is executed one by one completely and the resultant array is passed on to the next function
// const newNums=nums
//             .map( (num) => num*10)
//             .map( (num) => num+1)
//             .filter( (num) => num>=40)

// console.log(newNums);


// *********************REDUCE************************
const myNums=[1,2,3]

// const myTotal = myNums.reduce(function(acc,currVal){
//     console.log(`acc: ${acc} and current value: ${currVal}`);
//     return acc+currVal
// },0)

//0:-initial value to be given to acc. for initialisation of acc.
//thereafter acc will be equal to acc+currVal
// const myTotal=myNums.reduce( (acc,currVal) => acc+currVal, 0)

// console.log(myTotal);

const shoppingCart=[
    {
        itemName:'JS Course',
        price:2999
    },
    {
        itemName:'Python Course',
        price:999
    },
    {
        itemName:'Mobile Dev Course',
        price:5999
    },
    {
        itemName:'DS Course',
        price:12999
    },
]

const price= shoppingCart.reduce( (acc,item) => (acc+item.price) ,0)

console.log(price);
