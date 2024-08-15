//****************FOR OF LOOPS */  -> Need to write onyl function statement. No increment or decrement

const arr=[1,2,3,4,5]

// for (const element of arr) 
// {
//     console.log(element);
    
// }



const greeting="Hello World!"
// for (const greet of greeting) {
//     console.log(`Each character is ${greet}`);
    
// }

//Maps -> Holds key value pair and remembers the order of insertion.Holds Only unique values

const map=new Map();
map.set('IN','India')
map.set('USA','United States of America')
map.set('FR','France')
map.set('IN','India')
//console.log(map)

//MAPS ARE ITERATED IN THIS WAY TO ACCESS KEY VALUE PAIR
// for (const [key,value] of map) 
// {
//     console.log(key,':-',value);  
// }

// const myObj={
//     'game1':'NFS',
//     'game2':'Spiderman'
// }


//Objects cannot be iterated in for of LOOP
// for (const [key,value] of myObj) {
//     console.log(key,value);
    
// }

const myObject={
    js:'Javascript',
    cpp:'C++',
    rb:'Ruby',
    swift:'Swift by Apple'
}


//FOR IN LOOP TO ITERATE THROUGH OBJECTS
// *******************VERY IMPORTANT*****************************
// for (const key in myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]}`); 
// }


//FOR IN WHEN APPLIED ON ARRAYS GIVES ONLY INDEXES
// for (const val in arr) {
//     console.log(`${arr[val]} is the element at position ${val}`);
// }

//Cant be iterated through Maps in fOR-IN Loops
for (const key in map) {
    console.log(key);
}

// ****************FOR EACH LOOPS*************************

const codingLanguage=['js','ruby','cpp','java','python']
// codingLanguage.forEach( function (item) {
//     console.log(item);
// })

// codingLanguage.forEach( (item) => {
//     console.log(item);
    
// } )

function printMe(item)
{
     console.log(item);
     
}

//codingLanguage.forEach(printMe)

// codingLanguage.forEach( (item,index,arr) => {
//     console.log(item,index,arr);
    
// } )



//ARARY OF OBJECTS
const myCoding=[
    {
        language:'Javascript',
        languageFile:'js'
    },
    {
        language:'Java',
        languageFile:'java'
    },
    {
        language:'Python',
        languageFile:'py'
    }
]

// **********Iterating through Array of Objects*************************
// myCoding.forEach( (item) => {
//     console.log(item.language);
    
// })




